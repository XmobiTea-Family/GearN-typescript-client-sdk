/**
 * Public SDK version string returned by {@link GNNetwork.getClientSdkVersion}.
 *
 * Bumped on every release of the GearN TypeScript client SDK. The value is
 * also written into the SDK banner emitted from {@link GNNetwork.init} for
 * troubleshooting purposes (browser DevTools / Node.js stdout).
 */
const VERSION: string = "2.6";

import { Action0 } from "./common/Action0";
import { Action1 } from "./common/Action1";
import { GNArray, GNHashtable } from "./common/GNData";
import { GNServerSettings } from "./config/GNServerSettings";
import { OperationRequest } from "./entity/OperationRequest";
import { OperationResponse } from "./entity/OperationResponse";
import { GNDebug } from "./logger/GNDebug";
import { GNSupport } from "./helper/GNSupport";
import { IServerEventHandler } from "./networking/handler/IServerEventHandler";
import { NetworkingPeer } from "./networking/NetworkingPeer";
import { CodeHelper } from "./helper/CodeHelper";
import { StorageService } from "./helper/StorageService";
import { OperationEvent } from "./entity/OperationEvent";
import { AuthenticateStatus } from "./networking/AuthenticateStatus";
import { RequestType } from "./constant/enumType/RequestType";
import { RequestRole } from "./constant/enumType/RequestRole";
import { CustomOperationRequest } from "./entity/request/CustomOperationRequest";
import { CustomOperationResponse } from "./entity/response/CustomOperationResponse";
import { ServiceUpdate } from "./typescript/ServiceUpdate";
import { Constructor } from "./entity/GNMetadata";
import { AuthenticateApi } from "./GNNetworkAuthenticateApi";
import { CharacterPlayerApi } from "./GNNetworkCharacterPlayerApi";
import { ContentApi } from "./GNNetworkContentApi";
import { DashboardApi } from "./GNNetworkDashboardApi";
import { GamePlayerApi } from "./GNNetworkGamePlayerApi";
import { GroupApi } from "./GNNetworkGroupApi";
import { InventoryApi } from "./GNNetworkInventoryApi";
import { MasterPlayerApi } from "./GNNetworkMasterPlayerApi";
import { StoreInventoryApi } from "./GNNetworkStoreInventoryApi";
import { ConverterService } from "./helper/ConverterService";
import { MultiplayerApi } from "./GNNetworkMultiplayerApi";
import { CloudScriptApi } from "./GNNetworkCloudScriptApi";
import { GetAuthInfoResponse } from "./entity/response/GetAuthInfoResponse";
import { UploadFileResponse } from "./entity/response/UploadFileResponse";
import { HealthCheckResponse } from "./entity/response/HealthCheckResponse";

/**
 * Static facade that owns the entire GearN client SDK runtime state.
 *
 * Application code never instantiates `GNNetwork` directly — it calls
 * {@link init} once with a populated {@link GNServerSettings} and then
 * issues operations through the static API namespaces ({@link authenticate},
 * {@link characterPlayer}, {@link group}, ...) or the low-level
 * `sendVia*` helpers.
 *
 * Responsibility:
 * - Owns the shared {@link NetworkingPeer} that bundles the HTTP and
 *   socket transports.
 * - Persists the auth token and user id through {@link StorageService} so
 *   that a page reload or process restart automatically resumes the
 *   previous session.
 * - Exposes typed helpers for arbitrary `OperationRequest` /
 *   `OperationResponse` pairs (`sendViaSocketTRequestTResponse`,
 *   `sendViaHttpTRequestTResponse`) used internally by the generated
 *   `*Api` wrappers.
 * - Surfaces realtime hooks: socket connect / disconnect callbacks plus
 *   typed {@link IServerEventHandler} subscription.
 *
 * Threading model:
 * - JavaScript is single-threaded so all members are safe to access from
 *   any callback. The `service()` loop driven by {@link ServiceUpdate}
 *   uses `setInterval`-style scheduling and shares no synchronisation
 *   primitives with caller code.
 *
 * Initialisation contract:
 * - {@link init} is idempotent — calling it twice logs a warning and
 *   returns without re-initialising. There is no `dispose()` counterpart;
 *   the static state lives for the lifetime of the JS realm.
 * - All static API namespaces ({@link authenticate}, {@link group}, ...)
 *   are `undefined` until `init()` finishes. Accessing them earlier will
 *   throw `TypeError`.
 */
export class GNNetwork {

    /**
     * Storage key used by {@link StorageService} to persist the most
     * recent successful auth token.
     *
     * The key is intentionally namespaced (`[GearN]_` prefix) so that an
     * application embedding multiple SDKs into the same browser
     * `localStorage` cannot collide with GearN entries.
     */
    static readonly AUTH_TOKEN_KEY = "[GearN]_AUTH_TOKEN_KEY";
    /**
     * Storage key used by {@link StorageService} to persist the user id
     * that was bound to the cached auth token.
     *
     * Restored together with {@link AUTH_TOKEN_KEY} during {@link init}
     * so the SDK can hydrate `getAuthenticateStatus().getUserId()`
     * without an extra round trip.
     */
    static readonly USER_ID_KEY = "[GearN]_USER_ID_KEY";

    /**
     * Active runtime configuration. Populated by {@link init} and treated
     * as the single source of truth for URLs, transport tuning and the
     * configured `secretKey` / `gameId`.
     *
     * Remains `null` before `init()` runs, which is also the sentinel
     * used to make `init()` idempotent.
     */
    private static gnServerSettings: GNServerSettings;

    /**
     * Returns the shared {@link GNServerSettings} instance owned by the
     * SDK.
     *
     * Useful for inspecting URLs / tuning values at runtime, or for
     * mutating them on the fly through the dedicated `set*` accessors of
     * `GNServerSettings`.
     *
     * @returns The active settings instance, or `undefined` when called
     *          before {@link init}.
     */
    public static getGNServerSettings(): GNServerSettings {
        return GNNetwork.gnServerSettings;
    }

    /**
     * Shared low-level networking peer. Instantiated by
     * {@link initGNSocketObject} and never replaced. Owns both the HTTP
     * peer ({@link HttpPeer}) and the socket peer ({@link SocketPeer}).
     *
     * Marked `public` only because the `*Api` wrappers and integration
     * tests need to reach the underlying transports directly. Application
     * code should normally go through the typed helpers or domain APIs
     * instead of touching this object.
     */
    static peer: NetworkingPeer;

    /**
     * Returns the averaged transport latency in milliseconds across every
     * transport currently marked as `isUsing()`.
     *
     * The transports compute their own ping using a sliding window of the
     * last 10 successful round trips (see {@link PeerBase.addPing}). When
     * both HTTP and socket transports are active, this method returns
     * their unweighted arithmetic mean.
     *
     * @returns Average latency in milliseconds, or `-1` when neither
     *          transport is enabled or no successful request has produced
     *          a measurement yet.
     */
    public static getPing(): number {
        return GNNetwork.peer != null ? GNNetwork.peer.getPing() : -1;
    }

    /**
     * Returns the socket session id assigned by the socket.io server.
     *
     * The session id is non-empty only after the socket has completed its
     * connect handshake — use {@link isSocketConnected} for a boolean
     * connection check.
     *
     * @returns Current socket id, or `""` (empty string) when the SDK is
     *          not initialised or the socket is not connected.
     */
    public static getSocketSId(): string {
        return GNNetwork.peer != null ? GNNetwork.peer.getClientId() : "";
    }

    /**
     * Pushes the cached auth token to the socket channel.
     *
     * Required after a fresh socket connect because the socket.io session
     * has no concept of HTTP cookies — the backend needs the explicit
     * auth frame to associate the socket with a user. Most callers do not
     * need to invoke this manually because the SDK fires it from its own
     * connect handler when an auth token is present.
     *
     * @throws TypeError when called before {@link init} has populated
     *         {@link peer}.
     */
    public static sendRequestAuthSocket(): void {
        return GNNetwork.peer.sendRequestAuthSocket();
    }

    /**
     * Returns whether the socket transport currently holds a non-empty
     * session id.
     *
     * Implementation detail: this checks the cached
     * {@link getSocketSId} string rather than asking the underlying
     * socket.io client directly. The two stay in sync because the SDK
     * clears the cached id on disconnect.
     *
     * @returns `true` while the socket has an active session, `false`
     *          when uninitialised or disconnected.
     */
    public static isSocketConnected(): boolean {
        let socketSId = GNNetwork.getSocketSId();

        if (socketSId) return true;
        return false;
    }

    /**
     * Returns the SDK's best estimate of the current server clock in
     * **milliseconds since epoch**.
     *
     * After at least one successful response the peer rebases the local
     * `Date.now()` against the latest server timestamp it has observed
     * (see {@link PeerBase.onResponseHandler} and
     * {@link NetworkingPeer.setServerTimeMilliseconds}). Until then this
     * method falls back to the local `Date.now()` so caller code can use
     * it without a null check.
     *
     * @returns Estimated server timestamp. Always defined, never `null`.
     */
    public static getServerTimestamp(): number {
        return GNNetwork.peer != null ? GNNetwork.peer.getServerTimestamp() : Date.now();
    }

    /**
     * Returns the shared cache of auth-related state (auth token + user
     * id) tracked by the networking peer.
     *
     * @returns The shared {@link AuthenticateStatus} instance. Mutating
     *          its fields directly bypasses {@link StorageService} — for
     *          a persisted update prefer
     *          {@link setNewAuthenticateStatus}.
     *
     * @throws TypeError when called before {@link init}.
     */
    public static getAuthenticateStatus(): AuthenticateStatus {
        return GNNetwork.peer.authenticateStatus;
    }

    /**
     * Returns a string describing the runtime detected by
     * {@link GNSupport}.
     *
     * Possible return values: `"browser"`, `"nodejs"`, `"cocos"`. Useful
     * for switching between platform-specific code paths in higher-level
     * application code (analytics SDKs, file pickers, ...).
     *
     * @returns Detected platform identifier.
     */
    public static getPlatform(): string {
        const platform = GNSupport.getPlatformType();

        // if (platform == "browser" || platform == "nodejs") {
        //     return platform;
        // }
        // else if (platform == "cocos") {
        //     if (cc.sys.platform === cc.sys.ANDROID) {
        //         console.log('Running on Android');
        //     } else if (cc.sys.platform === cc.sys.IPHONE) {
        //         console.log('Running on iOS');
        //     } else if (cc.sys.isBrowser) {
        //         console.log('Running in a Web Browser');
        //     }
        // }

        return platform;
    }

    /**
     * Authentication API namespace — login, register and refresh-token
     * operations executed over HTTP with `RequestRole.Client`.
     *
     * Instantiated during {@link init}. The wrapper also exposes
     * `.server` and `.admin` sub-namespaces for symmetry, but those are
     * currently empty for the Authenticate domain.
     */
    public static authenticate: AuthenticateApi;
    /**
     * Character-player API namespace — gameplay-tier player operations:
     * profile, social graph (friends, groups), tags, currencies and
     * statistics scoped to a single in-game character. Executed over HTTP.
     */
    public static characterPlayer: CharacterPlayerApi;
    /**
     * Content API namespace — file metadata, upload-token and
     * download-token operations. Pair the typed responses with
     * {@link uploadFile} and {@link getDownloadFileUrl} for the actual
     * binary transfer.
     */
    public static content: ContentApi;
    /**
     * Dashboard / admin API namespace.
     *
     * The backend resolves admin-vs-client privileges from the auth token
     * itself, so the same wrapper exposes both the data-access methods
     * used by tools and the admin operations that need an
     * `AdminAccount`-issued token.
     */
    public static dashboard: DashboardApi;
    /**
     * Game-player API namespace — account-level player profile, identity
     * link / unlink, friend graph, group membership and notifications
     * scoped to the master player record.
     */
    public static gamePlayer: GamePlayerApi;
    /**
     * Group API namespace — group metadata, member roles, message wall,
     * group currencies and group statistics.
     */
    public static group: GroupApi;
    /**
     * Inventory API namespace — item metadata, ownership ledger,
     * per-owner amounts, item statistics and audit log.
     */
    public static inventory: InventoryApi;
    /**
     * Master-player API namespace — account / identity / profile
     * operations bound to the global master player record (one per
     * GearN account).
     */
    public static masterPlayer: MasterPlayerApi;
    /**
     * Store API namespace — catalog browsing, purchase, gift, receipt
     * validation and audit operations.
     */
    public static storeInventory: StoreInventoryApi;
    /**
     * Multiplayer API namespace — matchmaking ticket lifecycle and
     * match-history queries.
     */
    public static multiplayer: MultiplayerApi;
    /**
     * CloudScript API namespace — backend-hosted script execute, publish
     * and version-management operations.
     */
    public static cloudScript: CloudScriptApi;

    /**
     * Boots every static piece of SDK state.
     *
     * Steps performed in order:
     * 1. Reject second invocations — when {@link gnServerSettings} is
     *    already populated the call logs a warning and returns. This makes
     *    the method safe to invoke from multiple bootstrap paths in the
     *    host application.
     * 2. Initialise the lookup tables and platform detection helpers
     *    ({@link GNSupport}, {@link CodeHelper},
     *    {@link ConverterService}). These must run before any model
     *    serialises or any code reads `getPlatform()`.
     * 3. Cache the supplied settings, configure {@link GNDebug} from them
     *    and emit the SDK banner including {@link getClientSdkVersion}.
     * 4. Build the shared {@link NetworkingPeer} via
     *    {@link initGNSocketObject} and start the {@link ServiceUpdate}
     *    loop that drives the queue and timeout machinery.
     * 5. Hydrate {@link AuthenticateStatus} from the persisted
     *    `[GearN]_AUTH_TOKEN_KEY` and `[GearN]_USER_ID_KEY` entries so a
     *    process restart can resume the prior session without an explicit
     *    re-login.
     * 6. Instantiate every public `*Api` namespace.
     *
     * @param gnServerSettings Configured runtime parameters. The SDK
     *                         keeps a live reference to this object — do
     *                         not mutate it concurrently from another
     *                         thread (in browsers there is none, in
     *                         Node.js use the dedicated `set*` accessors
     *                         and avoid worker-thread sharing).
     */
    public static init(gnServerSettings: GNServerSettings): void {
        if (GNNetwork.gnServerSettings != null) {
            GNDebug.log("GNNetwork has been init!");

            return;
        }

        // Boot the helper services before any model serialization or transport work starts.
        GNSupport.init();
        CodeHelper.init();
        ConverterService.init();

        GNNetwork.gnServerSettings = gnServerSettings;

        GNNetwork.initServerSettings();
        GNNetwork.initGNDebug();

        GNDebug.log("GNNetwork init on " + (GNSupport.isBrowser() ? "browser." : "server.") + " Version: " + GNNetwork.getClientSdkVersion());

        GNNetwork.initGNSocketObject();

        // Restore persisted state so the SDK can resume without a manual rebind.
        GNNetwork.peer.authenticateStatus.setAuthToken(StorageService.getString(GNNetwork.AUTH_TOKEN_KEY, ""));
        GNNetwork.peer.authenticateStatus.setUserId(StorageService.getString(GNNetwork.USER_ID_KEY, ""));

        // Instantiate all public API groups after the shared peer is ready.
        GNNetwork.authenticate = new AuthenticateApi();
        GNNetwork.characterPlayer = new CharacterPlayerApi();
        GNNetwork.content = new ContentApi();
        GNNetwork.dashboard = new DashboardApi();
        GNNetwork.gamePlayer = new GamePlayerApi();
        GNNetwork.group = new GroupApi();
        GNNetwork.inventory = new InventoryApi();
        GNNetwork.masterPlayer = new MasterPlayerApi();
        GNNetwork.storeInventory = new StoreInventoryApi();
        GNNetwork.multiplayer = new MultiplayerApi();
        GNNetwork.cloudScript = new CloudScriptApi();
    }

    /**
     * Persists a new auth-token / user-id pair to {@link StorageService}
     * and reflects the change into the shared {@link AuthenticateStatus}.
     *
     * Used after operations that mint or rotate a token outside the
     * normal login flow — e.g. server-issued auth handoff, custom
     * delegated-auth integrations, or a manual restore from a known good
     * snapshot.
     *
     * The normal login flows do **not** need this helper because
     * {@link PeerBase.onResponseHandler} already updates both the cache
     * and storage every time a successful response includes an
     * `authToken` / `userId` field.
     *
     * @param authenticateStatus Source of the new values. Only its
     *                           `getAuthToken()` and `getUserId()` are
     *                           inspected; the object itself is not
     *                           retained.
     */
    public static setNewAuthenticateStatus(authenticateStatus: AuthenticateStatus) {
        StorageService.setString(GNNetwork.AUTH_TOKEN_KEY, authenticateStatus.getAuthToken());
        StorageService.setString(GNNetwork.USER_ID_KEY, authenticateStatus.getUserId());

        GNNetwork.peer.authenticateStatus.setAuthToken(authenticateStatus.getAuthToken());
        GNNetwork.peer.authenticateStatus.setUserId(authenticateStatus.getUserId());
    }

    /**
     * Returns the public SDK version string.
     *
     * Reflects the {@link VERSION} constant declared at the top of this
     * file. Useful when reporting bugs to GearN support — include the
     * version in any issue you file.
     *
     * @returns Semantic-version-like string (e.g. `"2.6"`).
     */
    public static getClientSdkVersion(): string {
        return VERSION;
    }

    /**
     * Legacy hook from the original Unity client SDK.
     *
     * The Unity SDK loaded its `GNServerSettings` from a Resources asset
     * which the editor menu helped author. The TypeScript SDK accepts the
     * settings object as a constructor argument to {@link init} instead,
     * so this method does nothing — it remains so future SDK ports can
     * reuse the same `init()` call sequence without diverging from the
     * original.
     */
    private static initServerSettings(): void {
        //         gnServerSettings = Resources.Load(GNServerSettings.ResourcesPath) as GNServerSettings;
        //         if (gnServerSettings == null)
        //         {
        // #if UNITY_EDITOR
        //             UnityEditor.EditorApplication.ExecuteMenuItem("XmobiTea GN/Open Settings");
        //             gnServerSettings = Resources.Load(GNServerSettings.ResourcesPath) as GNServerSettings;
        //             if (gnServerSettings == null) throw new NullReferenceException("Null GN Server Settings, please find it now");
        // #endif
        //         }
    }

    /**
     * Configures {@link GNDebug} from the active {@link GNServerSettings}.
     *
     * Asserts that {@link gnServerSettings} has been populated — failing
     * loudly here is intentional because every later call relies on the
     * settings reference being valid.
     *
     * @throws Error when {@link gnServerSettings} is `null`.
     */
    private static initGNDebug(): void {
        if (GNNetwork.gnServerSettings == null)
            throw new Error("Null GN Server Settings, please find it now");

        GNDebug.setLogType(GNNetwork.gnServerSettings.getLogType());
    }

    /**
     * Builds the shared {@link NetworkingPeer} and starts the
     * {@link ServiceUpdate} loop.
     *
     * The service loop ticks at a fixed interval and calls
     * `peer.service()` on every tick, which lets the HTTP and socket
     * peers (a) drain their pending queues at the configured `sendRate`
     * and (b) detect timed-out in-flight operations.
     *
     * Called exactly once from {@link init}; never invoked again because
     * the peer reference and the service loop are designed to live for
     * the lifetime of the JS realm.
     */
    private static initGNSocketObject(): void {
        let peer = new NetworkingPeer();

        peer.initPeer();

        GNNetwork.peer = peer;

        let serviceUpdate = new ServiceUpdate();
        serviceUpdate.peer = peer;

        serviceUpdate.run();
    }

    /**
     * Sends a low-level {@link OperationRequest} through the socket
     * transport.
     *
     * This is the rawest entry point — most application code should use
     * the typed `sendViaSocketTRequestTResponse` helper or the domain
     * `*Api` wrappers instead. Use this method only when you already have
     * a hand-built `OperationRequest` (custom op-codes, replay tooling,
     * advanced testing) and explicitly want the socket transport.
     *
     * The peer fills the `authToken`, `secretKey`, and `gameId` slots from
     * the shared {@link AuthenticateStatus} / {@link GNServerSettings} when
     * the corresponding override parameter is `null`.
     *
     * @param requestType        Logical request category (Authenticate /
     *                           CharacterPlayer / ...). Embedded in the
     *                           socket frame and used by the backend to
     *                           pick the correct handler.
     * @param role               `RequestRole.Client`, `Server` or `Admin`.
     *                           Determines which permission table the
     *                           backend evaluates against the auth token.
     * @param request            Pre-built request payload — the peer
     *                           assigns a `requestId` when the existing
     *                           value is `-1` so the response can be
     *                           correlated.
     * @param onResponse         Optional callback fired with the resolved
     *                           {@link OperationResponse}. Pass `null`
     *                           for fire-and-forget semantics; the SDK
     *                           still tracks timeouts but the result is
     *                           dropped.
     * @param overrideAuthToken  Use a one-shot auth token instead of the
     *                           cached one. Pass `null` to use the cache.
     * @param overrideSecretKey  Use a one-shot secret key instead of the
     *                           configured one. Pass `null` for the
     *                           default.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     * @param customTags         Optional bag of routing / telemetry tags
     *                           merged into the outbound payload.
     */
    public static sendViaSocket(requestType: RequestType, role: RequestRole, request: OperationRequest, onResponse: Action1<OperationResponse>, overrideAuthToken: string, overrideSecretKey: string, overrideGameId: string, customTags: GNHashtable, retrialCount: number): void {
        GNNetwork.peer.sendViaSocket(requestType, role, request, onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount);
    }

    /**
     * Promise-based wrapper around {@link sendViaSocket}.
     *
     * The promise always resolves (it never rejects). On a transport
     * error or timeout the resolved {@link OperationResponse} carries a
     * non-zero `returnCode` that callers should check via
     * `response.hasError()`.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     * @returns Promise of the typed response.
     */
    public static async sendViaSocketAsync(requestType: RequestType, role: RequestRole, request: OperationRequest, overrideAuthToken: string, overrideSecretKey: string, overrideGameId: string, customTags: GNHashtable, retrialCount: number): Promise<OperationResponse> {
        return new Promise((resolve) => {
            GNNetwork.sendViaSocket(requestType, role, request,
                (response: OperationResponse) => {
                    resolve(response);
                }, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount
            );
        });
    }

    /**
     * Sends a low-level {@link OperationRequest} through the HTTP
     * transport.
     *
     * Mirror of {@link sendViaSocket}. See that method's documentation
     * for the parameter contract — the only behavioural difference is
     * the choice of transport, which determines which queue the request
     * is enqueued into and which serializer is used (JSON over Axios for
     * HTTP, MsgPack/JSON over socket.io for the socket peer).
     *
     * Prefer HTTP for request/response operations that do not require
     * realtime push, and the socket peer for low-latency or
     * server-initiated traffic.
     *
     * @param requestType        See {@link sendViaSocket}.
     * @param role               See {@link sendViaSocket}.
     * @param request            See {@link sendViaSocket}.
     * @param onResponse         See {@link sendViaSocket}.
     * @param overrideAuthToken  See {@link sendViaSocket}.
     * @param overrideSecretKey  See {@link sendViaSocket}.
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     * @param customTags         See {@link sendViaSocket}.
     */
    public static sendViaHttp(requestType: RequestType, role: RequestRole, request: OperationRequest, onResponse: Action1<OperationResponse>, overrideAuthToken: string, overrideSecretKey: string, overrideGameId: string, customTags: GNHashtable, retrialCount: number): void {
        GNNetwork.peer.sendViaHttp(requestType, role, request, onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount);
    }

    /**
     * Promise-based wrapper around {@link sendViaHttp}.
     *
     * Same resolution contract as {@link sendViaSocketAsync}: always
     * resolves; transport errors and timeouts surface through
     * `response.hasError()`.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     * @returns Promise of the typed response.
     */
    public static async sendViaHttpAsync(requestType: RequestType, role: RequestRole, request: OperationRequest, overrideAuthToken: string, overrideSecretKey: string, overrideGameId: string, customTags: GNHashtable, retrialCount: number): Promise<OperationResponse> {
        return new Promise((resolve) => {
            GNNetwork.sendViaHttp(requestType, role, request,
                (response: OperationResponse) => {
                    resolve(response);
                }, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount
            );
        });
    }

    /**
     * Sends a typed {@link CustomOperationRequest} through the socket
     * transport and deserialises the response into the supplied
     * {@link CustomOperationResponse} subclass.
     *
     * Used internally by every generated `*Api` wrapper. Application
     * code reaches for it directly when implementing a custom request
     * type that does not yet have a wrapper.
     *
     * @param request                       Source request — its
     *                                      `getRequestType()`,
     *                                      `getRole()` and `build()` are
     *                                      called to obtain the wire
     *                                      payload.
     * @param onResponse                    Optional typed callback.
     * @param overrideAuthToken             Optional one-shot auth token.
     * @param overrideSecretKey             Optional one-shot secret key.
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     * @param customTags                    Optional routing tags.
     * @param customOperationResponseCls    Concrete response class — the
     *                                      SDK instantiates it via
     *                                      `new customOperationResponseCls()`
     *                                      and calls
     *                                      `setupOperationResponse(...)`
     *                                      on the result.
     */
    public static sendViaSocketTRequestTResponse<TRequest extends CustomOperationRequest, TResponse extends CustomOperationResponse>(request: TRequest, onResponse: Action1<TResponse> = null, overrideAuthToken: string, overrideSecretKey: string, overrideGameId: string, customTags: GNHashtable, retrialCount: number, customOperationResponseCls: Constructor<TResponse>): void {
        GNNetwork.sendViaSocketTResponse(request.getRequestType(), request.getRole(), request.build(), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, customOperationResponseCls);
    }

    /**
     * Promise-based wrapper around
     * {@link sendViaSocketTRequestTResponse}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     * @returns Promise of the typed response.
     */
    public static async sendViaSocketTRequestTResponseAsync<TRequest extends CustomOperationRequest, TResponse extends CustomOperationResponse>(request: TRequest, overrideAuthToken: string, overrideSecretKey: string, overrideGameId: string, customTags: GNHashtable, retrialCount: number, customOperationResponseCls: Constructor<TResponse>): Promise<TResponse> {
        return new Promise((resolve) => {
            GNNetwork.sendViaSocketTRequestTResponse(request,
                (response: TResponse) => {
                    resolve(response);
                }, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, customOperationResponseCls);
        });
    }

    /**
     * Sends a typed {@link CustomOperationRequest} through the HTTP
     * transport.
     *
     * Same contract as {@link sendViaSocketTRequestTResponse} but routes
     * the request through Axios instead of socket.io. This is the
     * helper invoked by every method on the generated `*Api` classes.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public static sendViaHttpTRequestTResponse<TRequest extends CustomOperationRequest, TResponse extends CustomOperationResponse>(request: TRequest, onResponse: Action1<TResponse> = null, overrideAuthToken: string, overrideSecretKey: string, overrideGameId: string, customTags: GNHashtable, retrialCount: number, customOperationResponseCls: Constructor<TResponse>): void {
        GNNetwork.sendViaHttpTResponse(request.getRequestType(), request.getRole(), request.build(), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, customOperationResponseCls);
    }

    /**
     * Promise-based wrapper around
     * {@link sendViaHttpTRequestTResponse}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     * @returns Promise of the typed response.
     */
    public static async sendViaHttpTRequestTResponseAsync<TRequest extends CustomOperationRequest, TResponse extends CustomOperationResponse>(request: TRequest, overrideAuthToken: string, overrideSecretKey: string, overrideGameId: string, customTags: GNHashtable, retrialCount: number, customOperationResponseCls: Constructor<TResponse>): Promise<TResponse> {
        return new Promise((resolve) => {
            GNNetwork.sendViaHttpTRequestTResponse(request,
                (response: TResponse) => {
                    resolve(response);
                }, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, customOperationResponseCls);
        });
    }

    /**
     * Sends a low-level {@link OperationRequest} through the socket
     * transport but deserialises the result into a typed
     * {@link CustomOperationResponse} subclass.
     *
     * Use this when your call site has a hand-built `OperationRequest`
     * (already encoded with the right `operationCode` and parameters)
     * but still wants the convenience of a typed response object.
     *
     * The callback is **not** invoked when the underlying transport
     * yields a `null` response — this matches the historical behaviour
     * the Unity SDK relied on. Wrap the call in a timeout watchdog if
     * you need a guaranteed final notification.
     *
     * @param requestType                See {@link sendViaSocket}.
     * @param role                       See {@link sendViaSocket}.
     * @param request                    See {@link sendViaSocket}.
     * @param onResponse                 Optional typed callback. Pass
     *                                   `null` for fire-and-forget.
     * @param overrideAuthToken          Optional one-shot auth token.
     * @param overrideSecretKey          Optional one-shot secret key.
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     * @param customTags                 Optional routing tags.
     * @param customOperationResponseCls Concrete response class.
     */
    public static sendViaSocketTResponse<TResponse extends CustomOperationResponse>(requestType: RequestType, role: RequestRole, request: OperationRequest, onResponse: Action1<TResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, customOperationResponseCls: Constructor<TResponse>): void {
        GNNetwork.sendViaSocket(requestType, role, request, response => {
            if (response == null) return;

            let customOperationResponse = new customOperationResponseCls();
            customOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(customOperationResponse);
        }, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount);
    }

    /**
     * Promise-based wrapper around {@link sendViaSocketTResponse}.
     *
     * Like the underlying method, the promise never rejects but may stay
     * pending forever if the transport drops the response without
     * triggering a timeout. Pair with `Promise.race` against an
     * application-side timer when that matters.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     * @returns Promise of the typed response.
     */
    public static async sendViaSocketTResponseAsync<TResponse extends CustomOperationResponse>(requestType: RequestType, role: RequestRole, request: OperationRequest, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, customOperationResponseCls: Constructor<TResponse>): Promise<TResponse> {
        return new Promise((resolve) => {
            GNNetwork.sendViaSocketTResponse(requestType, role, request,
                (response: TResponse) => {
                    resolve(response);
                }, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, customOperationResponseCls);
        });
    }

    /**
     * Sends a low-level {@link OperationRequest} through the HTTP
     * transport and deserialises the result into a typed
     * {@link CustomOperationResponse} subclass.
     *
     * HTTP mirror of {@link sendViaSocketTResponse}. Same `null` short
     * circuit applies: when the transport yields a `null` response the
     * callback is not invoked.
     *
     * @param requestType                See {@link sendViaSocket}.
     * @param role                       See {@link sendViaSocket}.
     * @param request                    See {@link sendViaSocket}.
     * @param onResponse                 Optional typed callback.
     * @param overrideAuthToken          Optional one-shot auth token.
     * @param overrideSecretKey          Optional one-shot secret key.
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     * @param customTags                 Optional routing tags.
     * @param customOperationResponseCls Concrete response class.
     */
    public static sendViaHttpTResponse<TResponse extends CustomOperationResponse>(requestType: RequestType, role: RequestRole, request: OperationRequest, onResponse: Action1<TResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, customOperationResponseCls: Constructor<TResponse>): void {
        GNNetwork.sendViaHttp(requestType, role, request, response => {
            if (response == null) return;

            let customOperationResponse = new customOperationResponseCls();
            customOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(customOperationResponse);
        }, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount);
    }

    /**
     * Promise-based wrapper around {@link sendViaHttpTResponse}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     * @returns Promise of the typed response.
     */
    public static async sendViaHttpTResponseAsync<TResponse extends CustomOperationResponse>(requestType: RequestType, role: RequestRole, request: OperationRequest, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, customOperationResponseCls: Constructor<TResponse>): Promise<TResponse> {
        return new Promise((resolve) => {
            GNNetwork.sendViaHttpTResponse(requestType, role, request,
                (response: TResponse) => {
                    resolve(response);
                }, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, customOperationResponseCls);
        });
    }

    /**
     * Opens the socket transport.
     *
     * Triggers the underlying socket.io client to dial the configured
     * URL using the SSL / port settings active at the time of the call.
     * Subsequent connect notifications fire on every callback registered
     * through {@link subscriberOnConnectHandler}.
     *
     * @param _onSocketConnect Optional callback invoked once the socket
     *                         finishes its connect handshake. Pass
     *                         `null` (default) when other connect hooks
     *                         are sufficient.
     */
    public static connectSocket(_onSocketConnect: Action0 = null): void {
        GNNetwork.peer.connectSocket(_onSocketConnect);
    }

    /**
     * Closes the socket transport.
     *
     * Sends the disconnect frame, drops every pending socket-bound
     * operation in the queue, and triggers every callback registered
     * through {@link subscriberOnDisconnectHandler}.
     *
     * @param _onSocketDisconnect Optional callback invoked once the
     *                            socket reports `disconnect`.
     */
    public static disconnectSocket(_onSocketDisconnect: Action0 = null): void {
        GNNetwork.peer.disconnectSocket(_onSocketDisconnect);
    }

    /**
     * Replaces the raw event callback that observes every incoming
     * server event.
     *
     * Only one raw observer is installed at a time — calling this method
     * again overwrites the previous handler. For non-destructive
     * subscriptions use {@link subscriberServerEventHandler} with a
     * dedicated typed handler.
     *
     * @param _onEventHandler Receiver invoked with every decoded
     *                        {@link OperationEvent} as it arrives. Pass
     *                        `null` to clear the slot.
     */
    public static setOnEventHandler(_onEventHandler: Action1<OperationEvent>): void {
        GNNetwork.peer.setOnEventHandler(_onEventHandler);
    }

    /**
     * Adds a callback to the multi-subscriber socket-connect channel.
     *
     * Unlike {@link setOnEventHandler}, the connect / disconnect channel
     * accumulates subscribers — every registered callback is invoked in
     * registration order on the next connect.
     *
     * @param _onConnectHandler Function to add. Use a stable reference
     *                          so that {@link unscriberOnConnectHandler}
     *                          can remove it later.
     */
    public static subscriberOnConnectHandler(_onConnectHandler: Action0): void {
        GNNetwork.peer.setOnConnectHandler(_onConnectHandler);
    }

    /**
     * Adds a callback to the multi-subscriber socket-disconnect channel.
     *
     * @param _onDisconnectHandler Function to add. Must be the same
     *                             reference that will later be passed to
     *                             {@link unsubscriberOnDisconnectHandler}.
     */
    public static subscriberOnDisconnectHandler(_onDisconnectHandler: Action0): void {
        GNNetwork.peer.setOnDisconnectHandler(_onDisconnectHandler);
    }

    /**
     * Removes a previously registered socket-connect callback.
     *
     * No-op when the supplied function reference is not currently
     * subscribed.
     *
     * @param _onConnectHandler The exact reference originally passed to
     *                          {@link subscriberOnConnectHandler}.
     */
    public static unscriberOnConnectHandler(_onConnectHandler: Action0): void {
        GNNetwork.peer.removeOnConnectHandler(_onConnectHandler);
    }

    /**
     * Removes a previously registered socket-disconnect callback.
     *
     * No-op when the supplied function reference is not currently
     * subscribed.
     *
     * @param _onDisconnectHandler The exact reference originally passed
     *                             to
     *                             {@link subscriberOnDisconnectHandler}.
     */
    public static unsubscriberOnDisconnectHandler(_onDisconnectHandler: Action0): void {
        GNNetwork.peer.removeOnDisconnectHandler(_onDisconnectHandler);
    }

    /**
     * Registers a typed {@link IServerEventHandler} so the SDK can
     * dispatch the matching server event to it automatically.
     *
     * The handler must implement `IServerEventHandler` and is usually
     * decorated with `@IServerEventHandler.registerEvent` so that it is
     * picked up at module-load time. This helper exists for the cases
     * where a handler is constructed dynamically and therefore needs to
     * be subscribed at runtime.
     *
     * Multiple handlers may register against the same `EventCode`; they
     * are invoked in registration order whenever a matching event is
     * received from the socket.
     *
     * @param serverEventHandler Concrete handler instance.
     */
    public static subscriberServerEventHandler(serverEventHandler: IServerEventHandler): void {
        GNNetwork.peer.subscriberServerEventHandler(serverEventHandler);
    }

    /**
     * Triggers the timestamp endpoint and refreshes the local server
     * clock estimate.
     *
     * The SDK already calls this internally when the server includes a
     * `ts` field in any successful response (see
     * {@link PeerBase.onResponseHandler}). Manual invocations are useful
     * after long idle periods or before issuing a time-sensitive request
     * such as receipt validation.
     *
     * @param onResponse Optional callback receiving the new server
     *                   timestamp in milliseconds since epoch.
     */
    public static syncTs(onResponse: Action1<number> = null): void {
        GNNetwork.peer.syncTs(onResponse);
    }

    /**
     * Promise-based wrapper around {@link syncTs}.
     *
     * @returns Promise of the freshly observed server timestamp in
     *          milliseconds since epoch.
     */
    public static syncTsAsync(): Promise<number> {
        return new Promise((resolve) => {
            GNNetwork.syncTs((response: number) => {
                resolve(response);
            });
        });
    }

    /**
     * Calls the auth-info endpoint to inspect the player record bound to
     * an arbitrary auth token without affecting the cached session.
     *
     * Useful for tools (admin dashboards, diagnostics) that need to
     * resolve a token without logging in as the corresponding user.
     *
     * @param authToken  Token to inspect. Does **not** replace the
     *                   cached auth token used by other requests.
     * @param onResponse Optional callback receiving the typed
     *                   {@link GetAuthInfoResponse}.
     */
    public static getAuthInfo(authToken: string, onResponse: Action1<GetAuthInfoResponse> = null): void {
        GNNetwork.peer.getAuthInfo(authToken, onResponse);
    }

    /**
     * Promise-based wrapper around {@link getAuthInfo}.
     *
     * @returns Promise of the typed auth-info response.
     */
    public static getAuthInfoAsync(authToken: string): Promise<GetAuthInfoResponse> {
        return new Promise((resolve) => {
            GNNetwork.getAuthInfo(authToken, (response: GetAuthInfoResponse) => {
                resolve(response);
            });
        });
    }

    /**
     * Calls the health-check endpoint.
     *
     * Useful for warm-up probes, health dashboards or as a simple ping
     * to confirm that the configured base URL is reachable. The endpoint
     * does **not** require an auth token.
     *
     * @param onResponse Optional callback receiving the typed
     *                   {@link HealthCheckResponse}.
     */
    public static healthCheck(onResponse: Action1<HealthCheckResponse> = null): void {
        GNNetwork.peer.healthCheck(onResponse);
    }

    /**
     * Promise-based wrapper around {@link healthCheck}.
     *
     * @returns Promise of the typed health-check response.
     */
    public static healthCheckAsync(): Promise<HealthCheckResponse> {
        return new Promise((resolve) => {
            GNNetwork.healthCheck((response: HealthCheckResponse) => {
                resolve(response);
            });
        });
    }

    /**
     * Uploads a file using the authenticated multipart endpoint.
     *
     * Expected flow:
     * 1. Call `GNNetwork.content.createNewFileUploadInfo(...)` (or the
     *    matching async variant). The backend reserves a slot and
     *    returns a `fileId`.
     * 2. Pass that `fileId` plus the binary payload into this method.
     *    The SDK uses the cached auth token automatically (it does not
     *    accept an override here).
     * 3. Inspect `response.uploadCommitted` (or equivalent field) before
     *    treating the upload as durable.
     *
     * Browser caveat: `content` is sent as a `Blob`, so very large
     * payloads may be subject to host-runtime memory limits. Chunked
     * uploads are not supported by this endpoint — use the dashboard /
     * server SDK for files larger than ~50 MB.
     *
     * @param fileId     Identifier returned by `content.createNewFileUploadInfo*`.
     * @param content    Binary payload to upload.
     * @param filename   Display name written into the multipart envelope.
     * @param mimetype   Content-Type for the file part. Affects the
     *                   `Content-Type` header on the file blob only;
     *                   the multipart envelope itself remains
     *                   `multipart/form-data`.
     * @param onResponse Optional callback receiving the typed
     *                   {@link UploadFileResponse}.
     */
    public static uploadFile(fileId: string, content: Uint8Array, filename: string, mimetype: string, onResponse: Action1<UploadFileResponse> = null): void {
        GNNetwork.peer.uploadFile(fileId, content, filename, mimetype, onResponse);
    }

    /**
     * Promise-based wrapper around {@link uploadFile}.
     *
     * @returns Promise of the typed upload response.
     */
    public static uploadFileAsync(fileId: string, content: Uint8Array, filename: string, mimetype: string): Promise<UploadFileResponse> {
        return new Promise((resolve) => {
            GNNetwork.uploadFile(fileId, content, filename, mimetype, (response: UploadFileResponse) => {
                resolve(response);
            });
        });
    }

    /**
     * Builds the absolute download URL for a previously issued download
     * token.
     *
     * Expected flow:
     * 1. Call `GNNetwork.content.requestDownloadFileUploadInfo(...)` to
     *    obtain a short-lived `downloadToken` for the target file.
     * 2. Pass that token into this helper to get the absolute URL.
     * 3. Hand the URL to the host runtime's preferred download
     *    primitive (`<a download>`, `fetch(...)`, Cocos `assetManager`,
     *    Node.js `http.get`, ...).
     *
     * The returned URL embeds the token directly — treat it as
     * sensitive and avoid logging it.
     *
     * @param downloadToken Short-lived token returned by
     *                      `content.requestDownloadFileUploadInfo*`.
     * @returns Absolute URL of the form
     *          `<httpUrl>/download/<downloadToken>`.
     *
     * @throws TypeError when called before {@link init} (the SDK has no
     *         settings to pull the base URL from).
     */
    public static getDownloadFileUrl(downloadToken: string): string {
        return GNNetwork.gnServerSettings.getHttpUrl() + "/" + NetworkingPeer.DOWNLOAD_FILE + "/" + downloadToken;
    }

}
