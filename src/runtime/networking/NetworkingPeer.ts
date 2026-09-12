import { Commands } from "./../constant/Commands";
import { Action0 } from "./../common/Action0";
import { Action1 } from "./../common/Action1";
import { GNArray, GNHashtable } from "./../common/GNData";
import { ReturnCode } from "./../constant/ReturnCode";
import { OperationRequest } from "./../entity/OperationRequest";
import { OperationResponse } from "./../entity/OperationResponse";
import { GNNetwork } from "./../GNNetwork";
import { IServerEventHandler } from "./handler/IServerEventHandler";
import { HttpAppResponse, HttpPeer } from "./http/HttpPeer";
import { IPeer } from "./IPeer";
import { PeerBase } from "./PeerBase";
import { SocketPeer } from "./socket/SocketPeer";
import { OperationEvent } from "./../entity/OperationEvent";
import { AuthenticateStatus } from "./AuthenticateStatus";
import { RequestType } from "./../constant/enumType/RequestType";
import { RequestRole } from "./../constant/enumType/RequestRole";
import { GetAuthInfoResponse } from "./../entity/response/GetAuthInfoResponse";
import { UploadFileResponse } from "./../entity/response/UploadFileResponse";
import { ParameterCode } from "./../constant/parameterCode/ParameterCode";
import { HealthCheckResponse } from "./../entity/response/HealthCheckResponse";

/**
 * Owns one HTTP peer and one socket peer side by side, plus the
 * shared {@link AuthenticateStatus} cache and the local server clock
 * estimate.
 *
 * Sits between the {@link GNNetwork} static facade (which exposes the
 * public API surface) and the concrete transports
 * ({@link HttpPeer}, {@link SocketPeer}). Most methods on this class
 * are thin dispatchers that pick the right transport, fill missing
 * authentication / configuration values from the cached state, and
 * forward the call.
 *
 * Lifecycle:
 * - Instantiated once in {@link GNNetwork.initGNSocketObject}.
 * - {@link initPeer} allocates both transports.
 * - The static {@link ServiceUpdate} loop keeps calling
 *   {@link service} on a fixed interval so the queues drain and the
 *   timeout sweep runs.
 * - There is no `dispose()` — the instance lives for the lifetime of
 *   the JS realm.
 */
export class NetworkingPeer {
    /** Sub-URI of the timestamp endpoint (`GET /ts`). */
    static readonly SYNC_TS: string = "ts";
    /** Sub-URI of the auth-info endpoint (`GET /getAuthInfo?authToken=...`). */
    static readonly GET_AUTH_INFO: string = "getAuthInfo";
    /** Sub-URI of the health-check endpoint. */
    static readonly HEALTH_CHECK: string = "healthcheck";
    /** Sub-URI of the multipart upload endpoint. */
    static readonly UPLOAD_FILE: string = "upload";
    /**
     * Sub-URI of the download endpoint. Used by
     * {@link GNNetwork.getDownloadFileUrl} to compose the absolute
     * URL for a previously issued download token.
     */
    static readonly DOWNLOAD_FILE: string = "download";
    /** Sub-URI of the JSON HTTP API entry point. */
    static readonly API_JSON: string = "api/" + Commands.RequestCmd_Json;
    /** Sub-URI of the MessagePack HTTP API entry point. */
    static readonly API_MSG_PACK: string = "api/" + Commands.RequestCmd_MsgPack;

    /** Realtime / push transport ({@link SocketPeer}). */
    private socketPeer: IPeer;
    /** Request-response transport ({@link HttpPeer}). */
    private httpPeer: IPeer;

    /**
     * Shared cache of auth token + user id. Populated during
     * {@link initPeer} (created blank — the persisted values are
     * loaded by {@link GNNetwork.init}) and updated automatically by
     * {@link PeerBase.onResponseHandler} on every successful
     * response.
     */
    authenticateStatus: AuthenticateStatus;

    /**
     * Returns the unweighted average of the active transports'
     * sliding-window pings (in milliseconds).
     *
     * Skips transports that report `isUsing() === false`. Returns
     * `-1` when neither transport is active.
     */
    getPing(): number {
        let count = 0;
        let totalPing = 0;

        if (this.httpPeer.isUsing()) {
            count++;
            totalPing += (<PeerBase>this.httpPeer).ping;
        }

        if (this.socketPeer.isUsing()) {
            count++;
            totalPing += (<PeerBase>this.socketPeer).ping;
        }

        if (count == 0) return -1;
        return totalPing / count;
    }

    /**
     * Returns the underlying socket.io session id assigned at connect
     * time. Empty / `null` when the socket is not connected.
     */
    getClientId(): string {
        return (this.socketPeer as SocketPeer).getClientId();
    }

    /**
     * Most recent server timestamp captured from a response, in
     * milliseconds since epoch.
     */
    private lastCurrentServerMilliseconds: number;
    /**
     * Local `Date.now()` reading at the moment
     * {@link lastCurrentServerMilliseconds} was captured. Used to
     * extrapolate the current server time without a fresh round trip.
     */
    private lastGetCurrentMilliseconds: number;

    /**
     * Records a fresh server timestamp + local timestamp pair so
     * {@link getServerTimestamp} can extrapolate the current server
     * time without contacting the server again.
     *
     * Called automatically by {@link PeerBase.onResponseHandler} when
     * a successful response carries `ParameterCode.Ts`, plus by
     * {@link initPeer} as a sane default. Manual callers can use
     * {@link syncTs} to refresh the estimate explicitly.
     *
     * @param currentServerMilliseconds Server-side `Date.now()`-style
     *                                  value in milliseconds since
     *                                  epoch.
     */
    setServerTimeMilliseconds(currentServerMilliseconds: number): void {
        this.lastCurrentServerMilliseconds = currentServerMilliseconds;
        this.lastGetCurrentMilliseconds = Date.now();
    }

    /**
     * Returns the SDK's best estimate of the current server clock,
     * computed as `lastCurrentServerMilliseconds + (Date.now() -
     * lastGetCurrentMilliseconds)`.
     *
     * The estimate ignores clock drift and request latency so it can
     * be off by tens of milliseconds; treat it as a coarse "server
     * now" rather than a precise timestamp source.
     */
    getServerTimestamp(): number {
        return this.lastCurrentServerMilliseconds + (Date.now() - this.lastGetCurrentMilliseconds);
    }

    /**
     * One-time bootstrap.
     *
     * Steps:
     * 1. Seed the server-time estimate with `Date.now()` so
     *    {@link getServerTimestamp} returns a sane value before any
     *    response has been observed.
     * 2. Validate the global {@link GNServerSettings} singleton
     *    (failing loudly when the SDK is used out of order).
     * 3. Allocate the empty {@link AuthenticateStatus} cache. The
     *    persisted values are loaded later by {@link GNNetwork.init}
     *    after this method returns.
     * 4. Build and initialise both the HTTP and socket peers.
     *
     * @throws Error when the global server settings have not been
     *         configured yet.
     */
    initPeer(): void {
        this.setServerTimeMilliseconds(Date.now());

        let gnServerSettings = GNNetwork.getGNServerSettings();
        if (gnServerSettings == null)
            throw new Error("Null GN Server Settings, please find it now");

        this.authenticateStatus = new AuthenticateStatus();

        this.httpPeer = new HttpPeer();
        this.httpPeer.initPeer();

        this.socketPeer = new SocketPeer();
        this.socketPeer.initPeer();
    }

    /**
     * Drives one tick on both transports.
     *
     * Each tick lets every peer drain at most one queued request and
     * sweep its in-flight set for timeouts. Called repeatedly by
     * {@link ServiceUpdate}.
     */
    service() {
        if (this.httpPeer != null) this.httpPeer.service();
        if (this.socketPeer != null) this.socketPeer.service();
    }

    /**
     * Queues an operation request on the socket transport.
     *
     * Substitutes missing authentication data with the cached values
     * (auth token from {@link AuthenticateStatus}, secret key + game
     * id from {@link GNServerSettings}) so caller code can pass
     * `null` for any override it does not need.
     *
     * @param requestType    Logical request category.
     * @param role           Permission scope.
     * @param request        Pre-built request to enqueue.
     * @param onResponse     Optional response callback.
     * @param authToken      Optional one-shot auth token override.
     *                       Pass `null` to use the cached token.
     * @param secretKey      Optional one-shot secret key override.
     *                       Pass `null` to use the configured key.
     * @param gameId         Optional one-shot game id override.
     *                       Pass `null` to use the configured id.
     * @param customTags     Optional routing tags.
     */
    sendViaSocket(requestType: RequestType, role: RequestRole, request: OperationRequest, onResponse: Action1<OperationResponse> = null, authToken: string = null, secretKey: string = null, gameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1): void {
        if (authToken == null) authToken = this.authenticateStatus.getAuthToken();
        if (secretKey == null) secretKey = GNNetwork.getGNServerSettings().getSecretKey();
        if (gameId == null) gameId = GNNetwork.getGNServerSettings().getGameId();
        if (retrialCount == -1) retrialCount = GNNetwork.getGNServerSettings().getDefaultRetrialCount();

        this.socketPeer.enqueue(requestType, role, request, onResponse, authToken, secretKey, gameId, customTags, retrialCount);
    }

    /**
     * Queues an operation request on the HTTP transport.
     *
     * Substitutes missing authentication data the same way
     * {@link sendViaSocket} does. The only behavioural difference is
     * the choice of transport.
     *
     * @param gameId     Optional one-shot game id override. Pass
     *                   `null` to use the configured id.
     * @param customTags Optional routing tags.
     */
    sendViaHttp(requestType: RequestType, role: RequestRole, request: OperationRequest, onResponse: Action1<OperationResponse> = null, authToken: string = null, secretKey: string = null, gameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1): void {
        if (authToken == null) authToken = this.authenticateStatus.getAuthToken();
        if (secretKey == null) secretKey = GNNetwork.getGNServerSettings().getSecretKey();
        if (gameId == null) gameId = GNNetwork.getGNServerSettings().getGameId();
        if (retrialCount == -1) retrialCount = GNNetwork.getGNServerSettings().getDefaultRetrialCount();

        this.httpPeer.enqueue(requestType, role, request, onResponse, authToken, secretKey, gameId, customTags, retrialCount);
    }

    /**
     * Pushes the cached auth token to the socket channel.
     *
     * The socket.io session has no implicit cookie / header carrier,
     * so the backend needs an explicit auth frame to associate the
     * socket with a user. Most callers do not need this — the SDK
     * fires it from its own connect handler when an auth token is
     * present.
     */
    sendRequestAuthSocket(): void {
        (this.socketPeer as SocketPeer).sendRequestAuthSocket();
    }

    /**
     * Opens the socket transport.
     *
     * Triggers the underlying socket.io client to dial the configured
     * URL using the SSL / port settings active at the time of the
     * call.
     *
     * @param _onSocketConnect Optional callback invoked once the
     *                         socket finishes its connect handshake.
     */
    connectSocket(_onSocketConnect: Action0): void {
        (this.socketPeer as SocketPeer).connect(_onSocketConnect);
    }

    /**
     * Closes the socket transport.
     *
     * @param _onSocketDisconnect Optional callback invoked once the
     *                            socket reports `disconnect`.
     */
    disconnectSocket(_onSocketDisconnect: Action0): void {
        (this.socketPeer as SocketPeer).disconnect(_onSocketDisconnect);
    }

    /**
     * Replaces the raw event observer that receives every incoming
     * server event.
     *
     * Single-slot — calling this method again overwrites the previous
     * handler. For non-destructive subscriptions register a typed
     * {@link IServerEventHandler} via
     * {@link subscriberServerEventHandler}.
     */
    setOnEventHandler(_onEventHandler: Action1<OperationEvent>): void {
        (this.socketPeer as SocketPeer).setOnEventHandler(_onEventHandler);
    }

    /**
     * Adds a callback to the multi-subscriber socket-connect channel.
     *
     * Use a stable function reference so the matching
     * {@link removeOnConnectHandler} can find and remove it later.
     */
    setOnConnectHandler(_onConnectHandler: Action0): void {
        (this.socketPeer as SocketPeer).setOnConnectHandler(_onConnectHandler);
    }

    /**
     * Adds a callback to the multi-subscriber socket-disconnect channel.
     */
    setOnDisconnectHandler(_onDisconnectHandler: Action0): void {
        (this.socketPeer as SocketPeer).setOnDisconnectHandler(_onDisconnectHandler);
    }

    /**
     * Removes a previously registered socket-connect callback. No-op
     * when the function reference is not currently subscribed.
     */
    removeOnConnectHandler(_onConnectHandler: Action0): void {
        (this.socketPeer as SocketPeer).removeOnConnectHandler(_onConnectHandler);
    }

    /**
     * Removes a previously registered socket-disconnect callback.
     * No-op when the function reference is not currently subscribed.
     */
    removeOnDisconnectHandler(_onDisconnectHandler: Action0): void {
        (this.socketPeer as SocketPeer).removeOnDisconnectHandler(_onDisconnectHandler);
    }

    /**
     * Registers an additional typed {@link IServerEventHandler}
     * instance.
     *
     * Multiple handlers may register against the same event code;
     * they are dispatched in registration order whenever the matching
     * event arrives over the socket.
     */
    subscriberServerEventHandler(serverEventHandler: IServerEventHandler): void {
        (this.socketPeer as SocketPeer).subscriberAServerEventHandler(serverEventHandler);
    }

    /**
     * Calls the timestamp endpoint over HTTP to refresh the local
     * server-clock estimate.
     *
     * The endpoint returns a JSON object with a `ts` key (server
     * milliseconds since epoch). On success, the helper invokes
     * {@link setServerTimeMilliseconds} with the parsed value before
     * the callback fires; on failure it falls back to `Date.now()`
     * silently so the callback always sees a non-null value.
     *
     * @param onResponse Optional callback receiving the new server
     *                   timestamp in milliseconds since epoch.
     */
    syncTs(onResponse: Action1<number> = null): void {
        let thiz = this;

        (this.httpPeer as HttpPeer).getRequest(NetworkingPeer.SYNC_TS, (httpAppResponse: HttpAppResponse) => {
            if (!httpAppResponse.hasError()) {
                if (httpAppResponse.statusCode == 200) {
                    let returnDatas = JSON.parse(httpAppResponse.text);
                    let gnHashtable = GNHashtable.builder()
                        .addAll(returnDatas)
                        .build();

                    let newServerTimestamp = gnHashtable.getNumber(ParameterCode.Ts, Date.now());
                    thiz.setServerTimeMilliseconds(newServerTimestamp);
                }
            }

            if (onResponse != null) onResponse(thiz.getServerTimestamp());
        });
    }

    /**
     * Inspects the player record bound to an arbitrary auth token
     * without affecting the cached session.
     *
     * Routes through HTTP. The endpoint either returns
     * `{ data: { ..., otherDatas } }` on success or `{ error: "..." }`
     * on failure; this helper unwraps the JSON envelope and re-shapes
     * `data.otherDatas` into a {@link GNHashtable} so the caller can
     * use the typed accessors.
     *
     * @param authToken  Auth token to inspect. Sent as a query
     *                   parameter, **not** as the active SDK
     *                   authorisation, so the cached session is
     *                   unaffected.
     * @param onResponse Callback receiving the typed
     *                   {@link GetAuthInfoResponse}. Always invoked
     *                   with either `error` or `data` populated.
     */
    getAuthInfo(authToken: string, onResponse: Action1<GetAuthInfoResponse>): void {
        (this.httpPeer as HttpPeer).getRequest(NetworkingPeer.GET_AUTH_INFO + "?authToken=" + authToken, (httpAppResponse: HttpAppResponse) => {
            if (!httpAppResponse.hasError()) {
                if (httpAppResponse.statusCode == 200) {
                    let returnDatas = JSON.parse(httpAppResponse.text);
                    if (returnDatas.error) {
                        if (onResponse != null) onResponse({
                            error: returnDatas.error,
                        });
                    }
                    else {
                        if (onResponse != null) {
                            let response: GetAuthInfoResponse = {
                                error: null,
                                data: returnDatas.data,
                            };

                            response.data.otherDatas = GNHashtable.builder()
                                .addAll(returnDatas.data.otherDatas)
                                .build();
                            onResponse(response);
                        }
                    }

                    return;
                }
            }

            if (onResponse != null) onResponse({
                error: httpAppResponse.error,
            });
        });
    }

    /**
     * Calls the health-check endpoint over HTTP.
     *
     * Endpoint behaviour mirrors {@link getAuthInfo}: returns
     * `{ data: ... }` on success or `{ error: "..." }` on failure.
     * Useful for warm-up probes / readiness dashboards. The endpoint
     * does not require an auth token.
     *
     * @param onResponse Callback receiving the typed
     *                   {@link HealthCheckResponse}.
     */
    healthCheck(onResponse: Action1<HealthCheckResponse>): void {
        (this.httpPeer as HttpPeer).getRequest(NetworkingPeer.HEALTH_CHECK, (httpAppResponse: HttpAppResponse) => {
            if (!httpAppResponse.hasError()) {
                if (httpAppResponse.statusCode == 200) {
                    let returnDatas = JSON.parse(httpAppResponse.text);
                    if (returnDatas.error) {
                        if (onResponse != null) onResponse({
                            error: returnDatas.error,
                        });
                    }
                    else {
                        if (onResponse != null) {
                            let response: HealthCheckResponse = {
                                error: null,
                                data: returnDatas.data,
                            };

                            onResponse(response);
                        }
                    }

                    return;
                }
            }

            if (onResponse != null) onResponse({
                error: httpAppResponse.error,
            });
        });
    }

    /**
     * Uploads a file through the authenticated multipart endpoint.
     *
     * Expected flow:
     * 1. Reserve a slot via
     *    `GNNetwork.content.createNewFileUploadInfo(...)`. The
     *    backend returns a `fileId`.
     * 2. Call this method with the binary payload. The SDK uses the
     *    cached auth token automatically — no override is accepted
     *    here.
     * 3. Inspect `response.error` to verify the upload was committed.
     *
     * @param fileId     Identifier returned by step 1.
     * @param content    Binary payload, framed as a `Blob` /
     *                   `multipart/form-data` part by the underlying
     *                   Axios call.
     * @param filename   Display filename written into the multipart
     *                   envelope.
     * @param mimetype   Content-Type for the file part.
     * @param onResponse Callback receiving the typed
     *                   {@link UploadFileResponse}. Always invoked.
     */
    uploadFile(fileId: string, content: Uint8Array, filename: string, mimetype: string, onResponse: Action1<UploadFileResponse>): void {
        (this.httpPeer as HttpPeer).uploadFile(fileId, content, filename, mimetype, (httpAppResponse: HttpAppResponse) => {
            if (!httpAppResponse.hasError()) {
                if (httpAppResponse.statusCode == 200) {
                    if (onResponse != null) {
                        let response: UploadFileResponse = {
                            error: null,
                        };

                        onResponse(response);
                    }

                    return;
                }
            }

            if (onResponse != null) onResponse({
                error: httpAppResponse.error ?? "Unknown Error",
            });
        });
    }

}
