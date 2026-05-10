import { LogType } from "./../logger/GNDebug";

/**
 * Wire-format selector used by the HTTP and socket transports when they
 * encode an outgoing payload or decode an incoming one.
 *
 * The numeric values are persisted onto the wire indirectly through the
 * `Commands.RequestCmd_*` / `Commands.ResponseCmd_*` strings, so changing
 * the underlying ordinal would break every generated request. Treat the
 * numbers as a stable contract.
 *
 * Behavioural notes:
 * - `Json` is the safest default — every host runtime can encode and decode
 *   it with no extra dependency. It is also the format used by the
 *   reverse-proxy paths in {@link NetworkingPeerAxiosRequest}.
 * - `MsgPack` is preferred on Node.js / Cocos Creator targets where the
 *   `MessagePackConverterService` runs the `@msgpack/msgpack` codec
 *   directly. On the browser HTTP path the SDK silently downgrades MsgPack
 *   responses to JSON because some browsers do not expose the binary
 *   primitives needed for streamed MsgPack decoding.
 */
export enum MessageType {
    /** UTF-8 JSON — universal, slightly larger payloads. */
    Json = 1,
    /** Binary MessagePack — smaller payloads, requires runtime support. */
    MsgPack = 2,
}

/**
 * Strongly-typed shape accepted by {@link GNServerSettings.config}.
 *
 * Every field on this interface is **required** because `config()` performs
 * a full snapshot replacement rather than a merge: it copies each property
 * verbatim into the {@link GNServerSettings} instance. To do partial
 * updates use the dedicated `set*` accessors instead.
 */
export interface GNServerSettingsOptions {
    /**
     * Public host name or IP address of the GearN Server backend.
     *
     * No scheme prefix (`http://` / `https://`) and no path — only the host
     * portion. The transports compose the full URL by combining this value
     * with `useSsl`, `serverPort` (HTTP) and `serverSocketPort` (socket).
     *
     * Example: `"api.example.com"` or `"10.0.0.5"`.
     */
    serverAddress: string;
    /**
     * Public TCP port that exposes the GearN HTTP API.
     *
     * Use `-1` when a reverse proxy makes the API available on the default
     * port for the chosen scheme (80 / 443) — the URL builder in
     * {@link GNServerSettings.getHttpUrl} omits the port segment in that
     * case so the browser does not append `:80` / `:443` redundantly.
     */
    serverPort: number;
    /**
     * Public TCP port that exposes the GearN socket.io endpoint.
     *
     * Use `-1` for proxy setups for the same reason as `serverPort`.
     */
    serverSocketPort: number;
    /**
     * When `true`, the URL builders emit `https://` and `wss://` schemes,
     * otherwise `http://` and `ws://`. Switching this value at runtime
     * affects the next `getHttpUrl()` / `getSocketUrl()` call but does not
     * upgrade an already-open socket.io connection.
     */
    useSsl: boolean;
    /**
     * Master switch for the realtime socket.io transport.
     *
     * When `false`, {@link SocketPeer.initGNSocketObject} sets `isUse` to
     * `false` and every `enqueue` call routed at the socket peer is dropped
     * with an error logged through `GNDebug.logError`.
     */
    useSocket: boolean;
    /**
     * Master switch for the HTTP transport. When `false` the typed API
     * wrappers in `GNNetwork*Api` will fail to send because their
     * underlying `enqueue` calls are no-ops on a disabled peer.
     */
    useHttp: boolean;

    /**
     * Default request timeout (in **seconds**) applied by both transports
     * whenever an `OperationRequest` is constructed without an explicit
     * timeout override. The shared `OperationRequest.defaultTimeOut`
     * sentinel (also `20`) is what triggers this fallback inside
     * {@link SocketPeer.send}.
     */
    defaultTimeoutInSeconds: number;
    /**
     * Preferred wire format. See {@link MessageType} for the runtime caveats
     * (the browser HTTP path may downgrade MsgPack responses to JSON).
     */
    messageType: MessageType;
    /**
     * Maximum number of operation requests the SDK will pop from the local
     * queue per second. The transports convert this value into a
     * per-message tick duration (`perMsgTimer = 1 / sendRate / 1000`)
     * inside {@link PeerBase.setSendRate}, which the `service()` loop uses
     * as a throttle.
     *
     * Practical range is 5..50; values lower than 5 introduce noticeable
     * head-of-line latency on bursts.
     */
    sendRate: number;
    /**
     * Reconnect backoff delay (in **milliseconds**) handed to the
     * underlying socket.io client after an unexpected disconnection.
     */
    reconnectDelay: number;
    /**
     * Heartbeat interval (in **milliseconds**) used by the socket.io
     * client to keep the connection alive across NAT timeouts.
     */
    pingInterval: number;
    /**
     * Maximum waiting time (in **milliseconds**) for a heartbeat response
     * before the socket.io client treats the link as dead and triggers
     * `disconnect`.
     */
    pingTimeout: number;

    /**
     * Per-game shared secret. The transports forward this value in the
     * `Secret-Key` HTTP header / equivalent socket frame so the backend
     * can authenticate the SDK origin before processing the operation.
     */
    secretKey: string;

    /**
     * GearN game identifier. Sent in the `Game-Id` HTTP header by every
     * authenticated request so the backend can route to the right game
     * configuration.
     */
    gameId: string;

    /**
     * Initial verbosity level for {@link GNDebug}. Applied by
     * `GNNetwork.initGNDebug()` shortly after `init()` is called.
     */
    logType: LogType;
}

/**
 * Mutable configuration container shared between {@link GNNetwork}, the
 * HTTP peer ({@link HttpPeer}) and the socket peer ({@link SocketPeer}).
 *
 * Intended usage:
 * ```ts
 * const settings = new GNServerSettings();
 * settings.config({
 *   serverAddress: "api.example.com",
 *   serverPort: 443,
 *   serverSocketPort: 443,
 *   useSsl: true,
 *   useSocket: true,
 *   useHttp: true,
 *   defaultTimeoutInSeconds: 20,
 *   messageType: MessageType.MsgPack,
 *   sendRate: 20,
 *   reconnectDelay: 5000,
 *   pingInterval: 20000,
 *   pingTimeout: 20000,
 *   secretKey: "<game-secret>",
 *   gameId: "<game-id>",
 *   logType: LogType.All,
 * });
 * GNNetwork.init(settings);
 * ```
 *
 * Lifecycle notes:
 * - `GNNetwork.init()` stores a reference to the instance you pass in and
 *   never copies it, so subsequent `set*` calls remain visible to the
 *   transports. URL-affecting changes (`setServerAddress`, `setUseSsl`,
 *   port setters) take effect on the very next request, but **do not**
 *   reconnect an already-open socket.io session.
 * - The default values defined inline below (host `127.0.0.1`, port
 *   `2202` / `2901`, MsgPack, etc.) match the GearN Server local-dev
 *   defaults.
 */
export class GNServerSettings {
    private serverAddress: string = "127.0.0.1";
    private serverPort: number = 2202;
    private serverSocketPort: number = 2901;
    private useSsl: boolean = false;
    private useSocket: boolean = true;
    private useHttp: boolean = true;

    private defaultTimeoutInSeconds: number = 20;
    private messageType: MessageType = MessageType.MsgPack;
    private sendRate: number = 20;
    private reconnectDelay: number = 5000;
    private pingInterval: number = 20000;
    private pingTimeout: number = 20000;

    private secretKey: string;
    private gameId: string;

    private logType: LogType = LogType.All;

    private useReverseProxy: boolean = false;

    /**
     * Replaces every configurable value in the instance with the snapshot
     * provided by `options`.
     *
     * This is **not** a partial merge: every field on
     * {@link GNServerSettingsOptions} is required and is copied verbatim.
     * To change a single value at runtime use the dedicated `set*`
     * accessor instead.
     *
     * `useReverseProxy` is intentionally **not** part of the snapshot
     * because it is configured separately via
     * {@link setUseReverseProxy} during transport-specific tuning.
     *
     * @param options Full configuration snapshot. See the field-level
     *                documentation on {@link GNServerSettingsOptions} for
     *                units and accepted ranges.
     */
    public config(options: GNServerSettingsOptions): void {
        this.serverAddress = options.serverAddress;
        this.serverPort = options.serverPort;
        this.serverSocketPort = options.serverSocketPort;
        this.useSsl = options.useSsl;
        this.useSocket = options.useSocket;
        this.useHttp = options.useHttp;

        this.defaultTimeoutInSeconds = options.defaultTimeoutInSeconds;
        this.messageType = options.messageType;
        this.sendRate = options.sendRate;
        this.reconnectDelay = options.reconnectDelay;
        this.pingInterval = options.pingInterval;
        this.pingTimeout = options.pingTimeout;

        this.secretKey = options.secretKey;
        this.gameId = options.gameId;

        this.logType = options.logType;
    }

    /**
     * Returns the configured host name or IP address.
     *
     * The value is the bare host (no scheme, no path, no port) used by
     * {@link getHttpUrl} and {@link getSocketUrl} when they compose the
     * absolute URL passed to Axios / socket.io.
     *
     * @returns Current host string. Defaults to `127.0.0.1` until
     *          `config()` or `setServerAddress()` overrides it.
     */
    public getServerAddress(): string {
        return this.serverAddress;
    }

    /**
     * Updates the host name or IP address used by both transports.
     *
     * Takes effect on the next URL build — does not reconnect an already
     * open socket.io session.
     *
     * @param serverAddress Bare host (no scheme, no port).
     */
    public setServerAddress(serverAddress: string): void {
        this.serverAddress = serverAddress;
    }

    /**
     * Returns the TCP port used to compose the HTTP base URL.
     *
     * @returns The port number. A value of `-1` is the convention for
     *          "default port for the scheme" and causes {@link getHttpUrl}
     *          to omit the port segment from the URL.
     */
    public getServerPort(): number {
        return this.serverPort;
    }

    /**
     * Updates the HTTP port used to compose the base API URL.
     *
     * @param serverPort TCP port, or `-1` to fall back to the default port
     *                   of the current scheme (80 for HTTP, 443 for HTTPS).
     */
    public setServerPort(serverPort: number): void {
        this.serverPort = serverPort;
    }

    /**
     * Returns the TCP port used to compose the socket base URL.
     *
     * @returns The port number, or `-1` when the application wants the URL
     *          builder to omit the port segment.
     */
    public getServerSocketPort(): number {
        return this.serverSocketPort;
    }

    /**
     * Updates the socket port used to compose the socket URL.
     *
     * @param serverSocketPort TCP port, or `-1` to omit the port segment.
     */
    public setServerSocketPort(serverSocketPort: number): void {
        this.serverSocketPort = serverSocketPort;
    }

    /**
     * Returns whether the URL builders should emit `https://` / `wss://`.
     *
     * @returns `true` when SSL is enabled, `false` otherwise.
     */
    public isUseSsl(): boolean {
        return this.useSsl;
    }

    /**
     * Enables or disables HTTPS / WSS URL generation.
     *
     * Does **not** retroactively upgrade an already open socket.io session
     * — call {@link disconnectSocket} then {@link connectSocket} on
     * `GNNetwork` to apply the change to the realtime channel.
     *
     * @param useSsl `true` to use the secure schemes, `false` to use the
     *               clear-text schemes.
     */
    public setUseSsl(useSsl: boolean): void {
        this.useSsl = useSsl;
    }

    /**
     * Returns whether the socket transport is enabled.
     *
     * When `false`, {@link SocketPeer} marks itself as unusable and every
     * realtime feature (event push, low-latency send) is disabled.
     *
     * @returns `true` when the socket transport is enabled.
     */
    public isUseSocket(): boolean {
        return this.useSocket;
    }

    /**
     * Enables or disables the realtime socket transport.
     *
     * Read at peer-init time only — toggling this value after
     * `GNNetwork.init()` will **not** start or stop the underlying
     * socket.io client, only freshly initialised peers honour it.
     *
     * @param useSocket Master switch for the realtime channel.
     */
    public setUseSocket(useSocket: boolean): void {
        this.useSocket = useSocket;
    }

    /**
     * Returns whether the HTTP transport is enabled.
     *
     * @returns `true` when HTTP transport is enabled.
     */
    public isUseHttp(): boolean {
        return this.useHttp;
    }

    /**
     * Enables or disables the HTTP transport.
     *
     * Read at peer-init time only — disabling HTTP after
     * `GNNetwork.init()` will not unbind Axios but will cause every
     * subsequent typed API call to fail with an error log because the
     * peer's `isUse` flag is checked at enqueue time.
     *
     * @param useHttp Master switch for the HTTP channel.
     */
    public setUseHttp(useHttp: boolean): void {
        this.useHttp = useHttp;
    }

    /**
     * Returns the default request timeout in **seconds**.
     *
     * Applied by {@link SocketPeer.send} to any operation request whose
     * timeout still equals the {@link OperationRequest.defaultTimeOut}
     * sentinel.
     *
     * @returns Timeout in seconds. Defaults to `20`.
     */
    public getDefaultTimeoutInSeconds(): number {
        return this.defaultTimeoutInSeconds;
    }

    /**
     * Updates the default request timeout in **seconds**.
     *
     * Only affects operations that did not specify their own timeout when
     * they were created.
     *
     * @param defaultTimeoutInSeconds Timeout in seconds. Use values that
     *                                cover both the network round-trip and
     *                                server processing time.
     */
    public setDefaultTimeoutInSeconds(defaultTimeoutInSeconds: number): void {
        this.defaultTimeoutInSeconds = defaultTimeoutInSeconds;
    }

    /**
     * Returns the preferred wire format.
     *
     * @returns The currently selected {@link MessageType}. Note that the
     *          browser HTTP path silently downgrades MsgPack responses to
     *          JSON for compatibility reasons.
     */
    public getMessageType(): MessageType {
        return this.messageType;
    }

    /**
     * Updates the preferred wire format.
     *
     * The change applies to subsequent requests; in-flight requests
     * already serialised remain in their original format.
     *
     * @param messageType New wire format.
     */
    public setMessageType(messageType: MessageType): void {
        this.messageType = messageType;
    }

    /**
     * Returns the throttle applied by the local request queue.
     *
     * @returns Maximum number of messages dispatched per second.
     *          Defaults to `20`.
     */
    public getSendRate(): number {
        return this.sendRate;
    }

    /**
     * Updates the local-queue throttle.
     *
     * Only honoured at peer-init time — already-running peers keep using
     * the rate they captured during {@link PeerBase.initSendRate}.
     *
     * @param sendRate Maximum messages per second. Practical range is
     *                 `5..50`; very low values introduce noticeable
     *                 head-of-line latency under burst load.
     */
    public setSendRate(sendRate: number): void {
        this.sendRate = sendRate;
    }

    /**
     * Returns the socket reconnect delay.
     *
     * @returns Delay in **milliseconds** before the socket.io client
     *          attempts a reconnect after an unexpected drop.
     */
    public getReconnectDelay(): number {
        return this.reconnectDelay;
    }

    /**
     * Updates the socket reconnect delay.
     *
     * Read once when {@link SocketPeer.initGNSocketObject} hands the value
     * to the underlying socket.io client. Setting it later requires a
     * disconnect/reconnect cycle to take effect.
     *
     * @param reconnectDelay Delay in **milliseconds**.
     */
    public setReconnectDelay(reconnectDelay: number): void {
        this.reconnectDelay = reconnectDelay;
    }

    /**
     * Returns the socket heartbeat interval.
     *
     * @returns Interval in **milliseconds**.
     */
    public getPingInterval(): number {
        return this.pingInterval;
    }

    /**
     * Updates the socket heartbeat interval.
     *
     * Read once when the socket.io client is configured. Setting it later
     * requires reconnect.
     *
     * @param pingInterval Interval in **milliseconds**.
     */
    public setPingInterval(pingInterval: number): void {
        this.pingInterval = pingInterval;
    }

    /**
     * Returns the socket heartbeat timeout.
     *
     * @returns Maximum waiting time in **milliseconds** for a heartbeat
     *          response before the link is considered dead.
     */
    public getPingTimeout(): number {
        return this.pingTimeout;
    }

    /**
     * Updates the socket heartbeat timeout.
     *
     * Read once when the socket.io client is configured. Setting it later
     * requires reconnect.
     *
     * @param pingTimeout Timeout in **milliseconds**.
     */
    public setPingTimeout(pingTimeout: number): void {
        this.pingTimeout = pingTimeout;
    }

    /**
     * Returns the secret key sent in the `Secret-Key` HTTP header.
     *
     * @returns Current secret key. Empty / `undefined` when the
     *          application has not configured one yet.
     */
    public getSecretKey(): string {
        return this.secretKey;
    }

    /**
     * Updates the secret key sent in the `Secret-Key` HTTP header.
     *
     * Take care not to commit production secrets into source control —
     * load this value from a secure environment variable or remote config
     * service before passing it into `config()` or this setter.
     *
     * @param secretKey Game-specific shared secret.
     */
    public setSecretKey(secretKey: string): void {
        this.secretKey = secretKey;
    }

    /**
     * Returns the game id sent in the `Game-Id` HTTP header.
     *
     * @returns Current game id, or `undefined` when not yet configured.
     */
    public getGameId(): string {
        return this.gameId;
    }

    /**
     * Updates the game id sent in the `Game-Id` HTTP header.
     *
     * @param gameId Identifier configured for this game on the GearN
     *               backend.
     */
    public setGameId(gameId: string): void {
        this.gameId = gameId;
    }

    /**
     * Returns the verbosity level forwarded to {@link GNDebug}.
     *
     * @returns The currently configured {@link LogType}.
     */
    public getLogType(): LogType {
        return this.logType;
    }

    /**
     * Updates the verbosity level forwarded to {@link GNDebug}.
     *
     * Note: this setter only updates the snapshot stored on this instance.
     * `GNDebug.setLogType` is invoked once during `GNNetwork.init()`; to
     * change the live log level afterwards call `GNDebug.setLogType`
     * directly in addition to this setter.
     *
     * @param logType New level. See {@link LogType} for the inclusion table.
     */
    public setLogType(logType: LogType): void {
        this.logType = logType;
    }

    /**
     * Builds the absolute base URL for the socket transport.
     *
     * The result is composed of `scheme + "://" + host` and, when
     * `serverSocketPort >= 0`, also `":" + port`. The scheme is `https`
     * when {@link useSsl} is `true`, otherwise `http`. socket.io uses the
     * HTTP scheme — it negotiates the `ws://` / `wss://` upgrade itself.
     *
     * @returns Absolute base URL passed to the socket.io client during
     *          {@link SocketPeer.initGNSocketObject}.
     */
    public getSocketUrl(): string {
        if (this.serverSocketPort < 0) return (this.useSsl ? "https" : "http") + "://" + this.serverAddress;
        else return (this.useSsl ? "https" : "http") + "://" + this.serverAddress + ":" + this.serverSocketPort;
    }

    /**
     * Builds the absolute base URL for the HTTP transport.
     *
     * Composition mirrors {@link getSocketUrl}: scheme + host + optional
     * `":" + port`. Used by {@link NetworkingPeerAxiosRequest} to prefix
     * the operation-specific sub-URI before the actual Axios call.
     *
     * @returns Absolute HTTP base URL — does **not** include a trailing
     *          slash, callers append `"/" + subUri` themselves.
     */
    public getHttpUrl(): string {
        if (this.serverPort < 0) return (this.useSsl ? "https" : "http") + "://" + this.serverAddress;
        else return (this.useSsl ? "https" : "http") + "://" + this.serverAddress + ":" + this.serverPort;
    }

    /**
     * Toggles reverse-proxy mode for the HTTP transport.
     *
     * When enabled the Axios layer drops the absolute URL and instead
     * sends the request as a relative path (`"/" + subUri`), forwarding
     * the original base URL through the `X-BaseUrl` header so a
     * same-origin proxy can rewrite it. This is mainly useful for browser
     * applications that want to avoid CORS preflight.
     *
     * @param useReverseProxy `true` to route HTTP traffic through a
     *                        same-origin proxy, `false` to use the
     *                        absolute URL built from the configured host
     *                        and port.
     */
    public setUseReverseProxy(useReverseProxy: boolean) {
        this.useReverseProxy = useReverseProxy;
    }

    /**
     * Returns whether HTTP requests should be routed through a same-origin
     * reverse proxy.
     *
     * @returns `true` when reverse-proxy mode is active.
     */
    public getUseReverseProxy(): boolean {
        return this.useReverseProxy;
    }

}
