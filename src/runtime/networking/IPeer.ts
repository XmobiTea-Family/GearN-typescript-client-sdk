import { GNHashtable } from "./../common/GNData";
import { RequestRole } from "./../constant/enumType/RequestRole";
import { RequestType } from "./../constant/enumType/RequestType";
import { Action1 } from "./../common/Action1";
import { OperationRequest } from "./../entity/OperationRequest";
import { OperationResponse } from "./../entity/OperationResponse";

/**
 * Common transport contract implemented by both the HTTP peer
 * ({@link HttpPeer}) and the socket peer ({@link SocketPeer}).
 *
 * The contract is intentionally minimal: a peer must support
 * (a) one-time initialisation, (b) enqueueing an outgoing request,
 * (c) reporting whether it is currently enabled by configuration, and
 * (d) being serviced from a fixed-rate driver loop. Everything beyond
 * that — request/response correlation, timeout sweeping, ping
 * tracking, transport-specific framing — lives in
 * {@link PeerBase} or in the concrete subclasses.
 *
 * Why an interface instead of a single base class: {@link NetworkingPeer}
 * holds two peer instances side by side (one HTTP, one socket) and
 * needs to dispatch generic operations to whichever one matches the
 * caller's choice. The shared type makes that dispatch well-typed
 * without forcing the two transports to share the rest of their
 * implementations.
 */
export interface IPeer {

    /**
     * One-shot initialisation hook.
     *
     * Implementations allocate their internal queues, configure the
     * send rate from {@link GNServerSettings.getSendRate}, then call
     * the abstract `initGNSocketObject()` step in {@link PeerBase}
     * which lets each transport build its own low-level client
     * (Axios for HTTP, socket.io for the socket peer).
     *
     * Idempotency is the implementation's responsibility — the SDK
     * calls this exactly once per peer in
     * {@link NetworkingPeer.initPeer}.
     */
    initPeer(): void;

    /**
     * Enqueues an outgoing operation request.
     *
     * The peer wraps the call in an {@link OperationPending} entry,
     * pushes it into its FIFO queue, and assigns a fresh `requestId`
     * when the existing value is not the `-1` fire-and-forget sentinel.
     * The actual send happens later, during the next `service()` tick
     * that the local rate limiter allows.
     *
     * @param requestType         Logical request category. Embedded in
     *                            the wire payload so the backend
     *                            picks the right handler.
     * @param role                `Client`, `Server` or `Admin`.
     *                            Selects the permission set the
     *                            backend evaluates against the auth
     *                            token.
     * @param operationRequest    Pre-built request to enqueue.
     * @param onOperationResponse Optional callback. Pass `null` for
     *                            fire-and-forget; the peer still
     *                            tracks timeouts but discards the
     *                            decoded response.
     * @param authToken           Auth token for this request. The
     *                            caller normally lets
     *                            {@link NetworkingPeer.sendViaSocket}
     *                            / `sendViaHttp` fill the value from
     *                            the cached
     *                            {@link AuthenticateStatus} when the
     *                            override is `null`.
     * @param secretKey           Game-specific shared secret.
     * @param gameId              Game identifier sent in the
     *                            `Game-Id` header / equivalent
     *                            socket frame.
     * @param customTags          Optional bag of routing / telemetry
     *                            tags merged into the outbound
     *                            payload.
     */
    enqueue(requestType: RequestType, role: RequestRole, operationRequest: OperationRequest, onOperationResponse: Action1<OperationResponse>, authToken: string, secretKey: string, gameId: string, customTags: GNHashtable, retrialCount: number): void;

    /**
     * Returns whether the transport is enabled by configuration.
     *
     * Reflects the `useHttp` / `useSocket` switch on
     * {@link GNServerSettings}. When `false`, every `enqueue` call is
     * dropped with an error log.
     */
    isUsing(): boolean;

    /**
     * Drives one tick of the peer's internal work loop.
     *
     * Each call sweeps the in-flight set for timed-out operations
     * (every `0.1s`), then sends at most one queued request when the
     * rate-limit timer permits. Invoked by {@link ServiceUpdate} on a
     * fixed interval.
     */
    service(): void;

}
