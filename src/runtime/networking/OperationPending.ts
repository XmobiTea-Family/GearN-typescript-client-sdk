import { GNHashtable } from "./../common/GNData";
import { RequestRole } from "./../constant/enumType/RequestRole";
import { RequestType } from "./../constant/enumType/RequestType";
import { Action1 } from "./../common/Action1";
import { OperationRequest } from "./../entity/OperationRequest";
import { OperationResponse } from "./../entity/OperationResponse";

/**
 * Per-request bookkeeping entry tracked by {@link PeerBase}.
 *
 * Lifecycle:
 * 1. Constructed inside {@link PeerBase.enqueue} when caller code
 *    issues a request. The constructor seeds an absolute timeout
 *    deadline using the SDK-wide
 *    -1 fallback, plus copies
 *    every per-request override (auth token, secret key, custom tags,
 *    game id) into private fields so the queue can be drained without
 *    another lookup against the shared {@link AuthenticateStatus}.
 * 2. Pushed into the FIFO queue. While waiting it is only inspected by
 *    `service()` for queue ordering.
 * 3. Sent via {@link PeerBase.send}, which calls {@link onSend} to
 *    record the wall-clock send time and recompute the timeout
 *    deadline using the request-specific timeout. The entry then moves
 *    into the in-flight map keyed by `requestId` (when a callback is
 *    registered).
 * 4. Resolved by {@link PeerBase.onResponseHandler}, which calls
 *    {@link onRecv} so {@link getExecuteTimerInMs} can return the
 *    measured round-trip in milliseconds.
 *
 * Timeout semantics: `timeout` is an absolute `Date.now()`-style epoch
 * milliseconds value. The 0.1s timeout sweep inside `service()` checks
 * every in-flight pending entry against the current time and synthesises
 * a `ReturnCode.OperationTimeout` response when it has elapsed.
 */
export class OperationPending {
    private operationRequest: OperationRequest;
    private requestType: RequestType;
    private role: RequestRole;
    private authToken: string;
    private secretKey: string;
    private gameId: string;
    private customTags: GNHashtable;
    private retrialCount: number;
    private onOperationResponse: Action1<OperationResponse>;
    private timeout: number;

    private firstSend: number;
    private secondsSend: number;

    /**
     * Captures every bit of state needed to send and later correlate
     * the request without revisiting the shared SDK state.
     *
     * @param requestType         Logical request category.
     * @param role                Permission scope evaluated by the
     *                            backend.
     * @param operationRequest    Pre-built request (operation code,
     *                            parameters, request id, timeout
     *                            override).
     * @param onOperationResponse Optional callback. `null` makes this
     *                            a fire-and-forget entry; the timeout
     *                            sweep still fires but nobody is
     *                            notified of the timeout response.
     * @param authToken           Auth token to send with this request.
     * @param secretKey           Game-specific shared secret.
     * @param gameId              Game identifier for the `Game-Id`
     *                            header.
     * @param customTags          Routing / telemetry tags merged into
     *                            the outbound payload.
     * @param retrialCount        Number of times to retry the request.
     */
    constructor(requestType: RequestType, role: RequestRole, operationRequest: OperationRequest, onOperationResponse: Action1<OperationResponse>, authToken: string, secretKey: string, gameId: string, customTags: GNHashtable, retrialCount: number) {
        this.operationRequest = operationRequest;
        this.onOperationResponse = onOperationResponse;

        this.timeout = Date.now() + 20 * 1000;
        this.firstSend = 0;
        this.secondsSend = 0;

        this.requestType = requestType;
        this.role = role;
        this.authToken = authToken;
        this.secretKey = secretKey;
        this.gameId = gameId;
        this.customTags = customTags;
        this.retrialCount = retrialCount;
    }

    /**
     * Returns the logical request category recorded at enqueue time.
     */
    public getRequestType(): RequestType {
        return this.requestType;
    }

    /**
     * Returns the permission role recorded at enqueue time.
     */
    public getRole(): RequestRole {
        return this.role;
    }

    /**
     * Returns the auth token captured at enqueue time.
     *
     * The token is copied verbatim into the entry — later mutations
     * to {@link AuthenticateStatus} do not affect already-queued
     * pending operations.
     */
    public getAuthToken(): string {
        return this.authToken;
    }

    /**
     * Returns the secret key captured at enqueue time.
     */
    public getSecretKey(): string {
        return this.secretKey;
    }

    /**
     * Returns the game id captured at enqueue time.
     */
    public getGameId(): string {
        return this.gameId;
    }

    /**
     * Returns the custom tags captured at enqueue time, or `null` when
     * none were supplied.
     */
    public getCustomTags(): GNHashtable {
        return this.customTags;
    }

    /**
     * Returns the number of times to retry the request.
     */
    public getRetrialCount(): number {
        return this.retrialCount;
    }

    /**
     * Marks the operation as just sent and recomputes the absolute
     * timeout deadline using the request-specific timeout.
     *
     * Called from {@link PeerBase.send} immediately before the actual
     * transport-specific dispatch. The deadline value is later read by
     * {@link isTimeout} during the periodic timeout sweep.
     */
    public onSend(): void {
        this.firstSend = Date.now();
        this.timeout = this.firstSend + this.operationRequest.getTimeout() * 1000;
    }

    /**
     * Marks the operation as resolved so the round-trip duration can
     * be measured.
     *
     * Called from {@link PeerBase.onResponseHandler} when a matching
     * response arrives. The captured timestamp is paired with
     * {@link firstSend} by {@link getExecuteTimerInMs}.
     */
    public onRecv(): void {
        this.secondsSend = Date.now();
    }

    /**
     * Returns the round-trip duration in milliseconds.
     *
     * Defined as `secondsSend - firstSend`. The peer feeds half of
     * this value into {@link PeerBase.addPing} as the per-request
     * one-way latency measurement.
     *
     * @returns Duration in milliseconds, or a negative / zero value
     *          when {@link onRecv} has not fired yet.
     */
    public getExecuteTimerInMs(): number {
        return (this.secondsSend - this.firstSend);
    }

    /**
     * Returns whether the absolute timeout deadline has elapsed.
     *
     * The peer's `service()` sweeps with this method every 0.1s and
     * synthesises a `ReturnCode.OperationTimeout` response when it
     * returns `true`.
     */
    public isTimeout(): boolean {
        return this.timeout < Date.now();
    }

    /**
     * Returns the underlying {@link OperationRequest} captured at
     * construction time.
     */
    public getOperationRequest(): OperationRequest {
        return this.operationRequest;
    }

    /**
     * Returns the response callback captured at construction time, or
     * `null` for a fire-and-forget entry.
     */
    public getCallback(): Action1<OperationResponse> {
        return this.onOperationResponse;
    }
}
