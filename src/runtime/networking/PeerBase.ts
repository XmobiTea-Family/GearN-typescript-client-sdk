import { RequestRole } from "./../constant/enumType/RequestRole";
import { RequestType } from "./../constant/enumType/RequestType";
import { Action1 } from "./../common/Action1";
import { GNArray, GNHashtable } from "./../common/GNData";
import { InvalidMemberType } from "./../constant/enumType/InvalidMemberType";
import { ParameterCode } from "./../constant/parameterCode/ParameterCode";
import { ReturnCode } from "./../constant/ReturnCode";
import { InvalidMember } from "./../entity/InvalidMember";
import { OperationRequest } from "./../entity/OperationRequest";
import { OperationResponse } from "./../entity/OperationResponse";
import { GNNetwork } from "./../GNNetwork";
import { GNDebug } from "./../logger/GNDebug";
import { IPeer } from "./IPeer";
import { OperationPending } from "./OperationPending";
import { StorageService } from "./../helper/StorageService";
import { OperationHelper } from "./../helper/OperationHelper";

/**
 * Shared scaffolding for both transports — owns the request queue,
 * tracks in-flight operations, sweeps timeouts and parses raw response
 * payloads into typed {@link OperationResponse} instances.
 *
 * Subclasses ({@link HttpPeer}, {@link SocketPeer}) only need to:
 * - Implement {@link initGNSocketObject} so they can build their
 *   transport-specific low-level client (Axios / socket.io).
 * - Implement {@link onEnqueue} to react when a request is queued
 *   (typically a debug log line; the socket peer also wakes itself
 *   up from idle).
 * - Override {@link send} to dispatch the actual frame, then chain
 *   into `super.send(...)` so the in-flight tracking logic still
 *   runs.
 *
 * Driver loop: {@link service} is called from {@link ServiceUpdate}
 * on a fixed interval. Each tick:
 * 1. Every 0.1 s sweeps the in-flight map and synthesises a
 *    `ReturnCode.OperationTimeout` response for every pending entry
 *    whose absolute deadline has elapsed.
 * 2. Drains at most one queued request per tick when the
 *    rate-limiter (`perMsgTimer`) permits, so the SDK never floods
 *    the backend even when the application bursts dozens of
 *    requests at once.
 *
 * Auth token / user id mirror: {@link onResponseHandler} silently
 * forwards any `authToken`, `userId` or `ts` parameter found inside a
 * successful response into both {@link AuthenticateStatus} and
 * {@link StorageService}, so a process restart can resume the prior
 * session without an explicit re-login.
 */
export abstract class PeerBase implements IPeer {
    /**
     * FIFO queue of requests waiting to be sent. Drained one entry
     * per `service()` tick when the rate limiter allows.
     */
    private operationPendingQueue: Array<OperationPending>;

    /**
     * In-flight set keyed by the request id assigned at enqueue time.
     * Only requests that registered a callback go in here — callbacks
     * are mandatory for response correlation, so fire-and-forget
     * entries are not tracked.
     */
    private operationWaitingResponseDict: Map<string, OperationPending>;

    /**
     * Effective time between sends, derived from the configured
     * `sendRate` via `1 / sendRate / 1000`. Note the unusual unit:
     * the value is **seconds-per-message divided by 1000**, which
     * matches the rest of the seconds-based comparisons in
     * {@link service}.
     */
    private perMsgTimer: number = 0;
    /**
     * Earliest time the next queued request may be sent. Updated each
     * time a request leaves the queue.
     */
    private nextSendMsgTimer: number = 0;
    /**
     * Earliest time the next timeout sweep may run. The sweep cadence
     * is fixed at 100 ms regardless of the configured `sendRate`.
     */
    private checkTimeoutOperationPending: number = 0;

    /**
     * Returns the configured send rate as a messages-per-second value.
     *
     * The internal storage uses an unusual unit; this helper restores
     * the human-readable rate so any external diagnostics can display
     * the value the application configured.
     */
    protected getSendRate(): number {
        return (1000 / this.perMsgTimer);
    }

    /**
     * Translates a messages-per-second rate into the internal
     * per-message tick used by {@link service}.
     *
     * Called once during {@link initSendRate}; mutating it after that
     * has no effect on already-running peers because the value is
     * captured during init.
     *
     * @param sendRate Messages per second from
     *                 {@link GNServerSettings.getSendRate}.
     */
    protected setSendRate(sendRate: number) {
        this.perMsgTimer = 1000 / sendRate / 1000;
    }

    /**
     * Most recent average latency in milliseconds. Computed from the
     * sliding window in {@link addPing} as half of the round-trip
     * (one-way), and surfaced through {@link NetworkingPeer.getPing}
     * / {@link GNNetwork.getPing}.
     *
     * Stays `undefined` until at least one successful response has
     * been observed; readers should treat that case as "no data".
     */
    ping: number;
    /**
     * Sliding window of the last 10 measured one-way latencies (in
     * milliseconds). Older entries are dropped from the head as new
     * measurements arrive.
     */
    private pingLst: number[];

    /**
     * Reflects the matching `useHttp` / `useSocket` flag from
     * {@link GNServerSettings}. Set during {@link initGNSocketObject}
     * and re-checked at every {@link enqueue} / {@link service} call
     * so a transport disabled by configuration drops new requests
     * with a clear error log.
     */
    protected isUse: boolean;

    /**
     * One-shot bootstrap called from
     * {@link NetworkingPeer.initPeer}.
     *
     * Allocates the queue and in-flight map (idempotent — repeats are
     * no-ops because the existing references are reused), reads the
     * configured send rate and finally lets the concrete subclass
     * build its low-level transport via {@link initGNSocketObject}.
     */
    public initPeer() {
        if (this.operationWaitingResponseDict == null)
            this.operationWaitingResponseDict = new Map();

        if (this.operationPendingQueue == null)
            this.operationPendingQueue = [];

        if (this.pingLst == null)
            this.pingLst = [];

        this.initSendRate();
        this.initGNSocketObject();
    }

    /**
     * Reads the send rate from the shared
     * {@link GNServerSettings} and translates it into the internal
     * tick value through {@link setSendRate}.
     *
     * @throws Error when the SDK is used before
     *         {@link GNNetwork.init} has populated the settings
     *         singleton.
     */
    private initSendRate(): void {
        let gnServerSettings = GNNetwork.getGNServerSettings();
        if (gnServerSettings == null)
            throw new Error("Null GN Server Settings, please find it now");

        this.setSendRate(gnServerSettings.getSendRate());
    }

    /**
     * Subclass hook for transport-specific client setup.
     *
     * Implementations build the underlying socket.io / Axios client,
     * read the matching `useHttp` / `useSocket` switch, register the
     * transport-specific event/response listeners, and finally set
     * {@link isUse} to control whether the queue accepts requests.
     */
    protected abstract initGNSocketObject(): void;

    /**
     * Wraps a request in an {@link OperationPending} entry and pushes
     * it onto the FIFO queue.
     *
     * The peer assigns a fresh request id by incrementing the static
     * counter only when the request was created with the non-default
     * id (the constant `-1` opts out so the request becomes
     * fire-and-forget on the wire). Disabled transports
     * (`isUse === false`) drop the call with an error log so the
     * application can spot the misconfiguration during development.
     *
     * @param requestType         Logical request category.
     * @param role                Permission scope to evaluate against
     *                            the auth token.
     * @param operationRequest    Pre-built request to enqueue.
     * @param onOperationResponse Optional response callback.
     * @param authToken           Auth token to attach to this
     *                            request. Caller code normally lets
     *                            {@link NetworkingPeer.sendViaSocket}
     *                            / `sendViaHttp` substitute the
     *                            cached value when the override is
     *                            `null`.
     * @param secretKey           Shared secret for the
     *                            `Secret-Key` header.
     * @param gameId              Game id for the `Game-Id` header.
     * @param customTags          Optional routing tags.
     * @param retrialCount        Number of times to retry the request.
     */
    public enqueue(requestType: RequestType, role: RequestRole, operationRequest: OperationRequest, onOperationResponse: Action1<OperationResponse>, authToken: string, secretKey: string, gameId: string, customTags: GNHashtable, retrialCount: number): void {
        if (!this.isUse) {
            GNDebug.logError("[GearN] Server Settings dont setup to use this to send operation request.");
            return;
        }

        if (operationRequest.getRequestId() == null) operationRequest.setRequestId(OperationHelper.randomRequestId());

        let operationPending = new OperationPending(requestType, role, operationRequest, onOperationResponse, authToken, secretKey, gameId, customTags, retrialCount);
        this.operationPendingQueue.push(operationPending);

        this.onEnqueue(operationPending);
    }

    /**
     * Subclass hook fired immediately after a new pending entry lands
     * in the queue.
     *
     * Used by both transports for diagnostic log lines; the socket
     * peer additionally relies on this to nudge any sleeping send
     * scheduler awake.
     */
    protected abstract onEnqueue(operationPending: OperationPending): void;

    /**
     * Returns whether the transport is currently enabled.
     */
    public isUsing(): boolean {
        return this.isUse;
    }

    /**
     * Drives one tick of the request pipeline.
     *
     * Steps performed every tick:
     * - Every 100 ms, synthesise a `ReturnCode.OperationTimeout`
     *   response for any in-flight operation whose absolute timeout
     *   has elapsed. The synthesised response carries `null`
     *   parameters and the original `requestId` so
     *   {@link onResponseHandler} routes it to the right callback.
     * - When the rate-limit timer permits, pop the head of the queue
     *   and dispatch it through {@link send}.
     *
     * Disabled transports short-circuit immediately — no timeout
     * sweep, no send.
     */
    service() {
        if (!this.isUse)
            return;

        let nowSecond = Date.now() / 1000;
        if (this.checkTimeoutOperationPending < nowSecond) {
            this.checkTimeoutOperationPending = nowSecond + 0.1;

            if (this.operationWaitingResponseDict.size != 0) {
                this.operationWaitingResponseDict.forEach((operationPending, operationPendingKey) => {
                    if (operationPending.isTimeout()) {
                        let gnHashtable = new GNHashtable();

                        gnHashtable.add(ParameterCode.ReturnCode, ReturnCode.OperationTimeout);
                        gnHashtable.add(ParameterCode.Parameters, null);
                        gnHashtable.add(ParameterCode.ResponseId, operationPending.getOperationRequest().getRequestId());

                        this.onResponseHandler(gnHashtable);
                    }
                });
            }
        }

        if (this.nextSendMsgTimer < nowSecond) {
            if (this.operationPendingQueue.length != 0) {
                this.nextSendMsgTimer = nowSecond + this.perMsgTimer;

                let operationPending = this.operationPendingQueue.shift();

                this.send(operationPending);
            }
        }
    }

    /**
     * Decodes a raw response payload, builds the typed
     * {@link OperationResponse}, mirrors any newly issued auth token
     * / user id / server timestamp into the cache and persistent
     * storage, and finally invokes the registered callback.
     *
     * Mirror behaviour:
     * - `ParameterCode.AuthToken` →
     *   {@link AuthenticateStatus.setAuthToken} +
     *   `StorageService.setString(GNNetwork.AUTH_TOKEN_KEY, ...)`.
     * - `ParameterCode.UserId` →
     *   {@link AuthenticateStatus.setUserId} +
     *   `StorageService.setString(GNNetwork.USER_ID_KEY, ...)`.
     * - `ParameterCode.Ts` →
     *   {@link NetworkingPeer.setServerTimeMilliseconds}.
     *
     * The mirror only runs for responses where `hasError()` returns
     * `false`, so an authentication failure does not poison the cache.
     *
     * @param obj Raw response container as decoded by the transport
     *            layer. Carries `ResponseId`, `ReturnCode`,
     *            `Parameters`, `DebugMessage` and the optional
     *            `InvalidRequestParameters` array.
     */
    protected onResponseHandler(obj: GNHashtable): void {
        let responseId = obj.getString(ParameterCode.ResponseId);
        if (responseId == null) return;

        if (this.operationWaitingResponseDict.has(responseId)) {
            let operationPending = this.operationWaitingResponseDict.get(responseId);
            operationPending.onRecv();

            this.operationWaitingResponseDict.delete(responseId);

            let returnCode = obj.getNumber(ParameterCode.ReturnCode);

            if (returnCode == ReturnCode.OperationTimeout || returnCode == ReturnCode.UnknownError) {
                if (operationPending.getRetrialCount() > 1) {
                    GNDebug.log("[GN RETRY] for requestId " + responseId + " retrial remain " + (operationPending.getRetrialCount() - 1));

                    this.enqueue(operationPending.getRequestType(), operationPending.getRole(), operationPending.getOperationRequest(), operationPending.getCallback(), operationPending.getAuthToken(), operationPending.getSecretKey(), operationPending.getGameId(), operationPending.getCustomTags(), operationPending.getRetrialCount() - 1);

                    return;
                }
            }

            let parameters: GNHashtable = obj.getGNHashtable(ParameterCode.Parameters);
            let debugMessage: string = obj.getString(ParameterCode.DebugMessage);
            let invalidRequestParameterArray: GNArray = obj.getGNArray(ParameterCode.InvalidRequestParameters);

            let operationRequest = operationPending.getOperationRequest();
            let operationResponse = new OperationResponse(operationRequest.getOperationCode(), operationRequest.getRequestId());

            operationResponse.setReturnCode(returnCode);
            operationResponse.setDebugMessage(debugMessage);
            operationResponse.setParameters(parameters);

            if (invalidRequestParameterArray != null) {
                let invalidMembers: InvalidMember[] = [];
                for (let i = 0; i < invalidRequestParameterArray.count(); i++) {
                    let arrChild = invalidRequestParameterArray.getGNArray(i);

                    invalidMembers.push({
                        code: arrChild.getString(0),
                        invalidMemberType: <InvalidMemberType>arrChild.getNumber(1)
                    });
                }
                operationResponse.setInvalidMembers(invalidMembers);
            }

            if (!operationResponse.hasError()) {
                this.addPing(operationPending.getExecuteTimerInMs());

                if (parameters != null) {
                    // Keep auth and timing state in sync with the latest successful response.
                    if (parameters.containsKey(ParameterCode.AuthToken)) {
                        let authToken = parameters.getString(ParameterCode.AuthToken);

                        GNNetwork.getAuthenticateStatus().setAuthToken(authToken);

                        StorageService.setString(GNNetwork.AUTH_TOKEN_KEY, authToken);
                    }

                    if (parameters.containsKey(ParameterCode.UserId)) {
                        let userId = parameters.getString(ParameterCode.UserId);

                        GNNetwork.getAuthenticateStatus().setUserId(userId);

                        StorageService.setString(GNNetwork.USER_ID_KEY, userId);
                    }

                    if (parameters.containsKey(ParameterCode.Ts)) {
                        GNNetwork.peer.setServerTimeMilliseconds(parameters.getNumber(ParameterCode.Ts, Date.now()));
                    }
                }
            }

            GNDebug.log("[GN RECV] " + operationResponse.toString());

            let callback = operationPending.getCallback();
            if (callback != null) callback(operationResponse);
        }
        else {
            GNDebug.logError("[GearN] OnResponseHandler, unavailable request id " + obj);
        }
    }

    /**
     * Records that a queued request has been handed to the transport
     * and starts tracking it for response correlation.
     *
     * Subclasses override this to perform the actual transport-level
     * dispatch, then call back into `super.send(...)` so the in-flight
     * map stays accurate. Fire-and-forget requests
     * (`requestId === null`) and entries with no callback are not
     * inserted into the map because there is nothing to resolve them
     * to.
     */
    send(operationPending: OperationPending): void {
        operationPending.onSend();

        let operationRequest = operationPending.getOperationRequest();

        if (operationRequest.getRequestId() != null && operationPending.getCallback() != null) {
            this.operationWaitingResponseDict.set(operationRequest.getRequestId(), operationPending);
        }
    }

    /**
     * Folds a fresh round-trip measurement into the rolling latency
     * average.
     *
     * The SDK reports half of the measured round-trip as transport
     * latency on the assumption that downstream and upstream legs
     * have similar duration. The window keeps the most recent 10
     * samples (older entries are dropped from the head). The averaged
     * value is multiplied by 1000 because consumers expose it in
     * milliseconds even though the per-sample input is already in
     * milliseconds — the multiplication compensates for the half
     * inside the loop.
     *
     * @param value Round-trip duration in milliseconds, as reported
     *              by {@link OperationPending.getExecuteTimerInMs}.
     */
    addPing(value: number): void {
        if (this.pingLst.length > 10)
            this.pingLst.shift();
        this.pingLst.push(value / 2);

        if (this.pingLst.length != 0) {
            let total = 0;
            for (let i = 0; i < this.pingLst.length; i++) {
                total += this.pingLst[i];
            }

            let average = total / this.pingLst.length;
            this.ping = (average * 1000);
        }
        else
            this.ping = -1;
    }
}
