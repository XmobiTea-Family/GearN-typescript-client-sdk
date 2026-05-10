import { MessagePackConverterService } from "./../../helper/MessagePackConverterService";
import { Action0 } from "./../../common/Action0";
import { Action1 } from "./../../common/Action1";
import { GNArray, GNHashtable } from "./../../common/GNData";
import { RequestRole } from "./../../constant/enumType/RequestRole";
import { RequestType } from "./../../constant/enumType/RequestType";
import { OperationRequest } from "./../../entity/OperationRequest";
import { GNNetwork } from "./../../GNNetwork";
import { GNDebug } from "./../../logger/GNDebug";

/**
 * Inbound socket frame buffered between the transport callback and the
 * SDK service-loop tick.
 *
 * The socket transport receives data on its own callback thread; rather
 * than decoding and dispatching synchronously the raw payload is queued
 * here so that all SDK-visible work happens on the
 * {@link ServiceUpdate} tick, which simplifies error handling and lets
 * the application reason about callback ordering.
 */
export class SocketPacket {
    /**
     * Raw payload as delivered by the underlying socket.io client —
     * either an `ArrayBuffer` / `Uint8Array` (MsgPack) or a plain
     * decoded object (JSON).
     */
    public obj: any;
    /**
     * `true` when {@link obj} is a MessagePack byte buffer that
     * still needs decoding via {@link MessagePackConverterService},
     * `false` when it is already a plain JS object.
     */
    public isMsgPack: boolean;

    /**
     * @param obj       Raw payload from the socket callback.
     * @param isMsgPack Whether the payload is MessagePack-encoded.
     */
    constructor(obj: any, isMsgPack: boolean) {
        this.obj = obj;
        this.isMsgPack = isMsgPack;
    }
}

/**
 * Multi-subscriber list of zero-argument callbacks.
 *
 * Used internally by the socket peer so that
 * {@link NetworkingSocketPeerBase.setOnConnectHandler} and
 * {@link NetworkingSocketPeerBase.setOnDisconnectHandler} can append
 * additional subscribers without overwriting the existing ones.
 */
class Action0List {
    private handlers: Action0[];

    /**
     * Appends a callback to the end of the subscriber list.
     *
     * Multiple registrations of the same function reference are
     * allowed; each will be invoked on every {@link invoke} call.
     */
    subscriber(action: Action0) {
        this.handlers.push(action);
    }

    /**
     * Removes the first occurrence of `action` from the subscriber
     * list. No-op when the reference is not present.
     */
    unsubscriber(action: Action0) {
        let indexOf = this.handlers.indexOf(action);
        if (indexOf != -1) this.handlers.splice(indexOf, 1);
    }

    /**
     * Invokes every registered callback in registration order.
     *
     * Skips slots that hold `null` (defensive — `null` should never
     * end up in the list through the public surface).
     */
    invoke() {
        this.handlers.forEach((a) => {
            if (a != null) a();
        });
    }

    constructor() {
        this.handlers = [];
    }
}

/**
 * Transport-agnostic skeleton shared by every concrete socket
 * implementation.
 *
 * Owns the lifecycle handlers (connect / disconnect callbacks),
 * buffered response / event queues and the JSON / MessagePack decode
 * loop driven by {@link service}. Concrete subclasses such as
 * {@link NetworkingPeerSocketIOClient} only need to:
 * - implement {@link reInitNewSocket} so the underlying socket.io
 *   client is created;
 * - override {@link emit} to write outbound frames;
 * - override {@link sendRequestAuthSocket} when their wire protocol
 *   requires an explicit auth frame after connect;
 * - push inbound frames into {@link responsePacketLst} /
 *   {@link eventPacketLst} from the transport's own callbacks.
 *
 * Decoding policy: every frame is decoded on the SDK service tick
 * inside a try/catch. A decode failure logs through
 * {@link GNDebug.logException} and is swallowed — the SDK does not
 * propagate decode failures to the application because they would
 * almost always be unhandleable noise.
 */
export abstract class NetworkingSocketPeerBase {
    /** Reconnect backoff in milliseconds (from server settings). */
    protected reconnectDelay: number;
    /** Heartbeat interval in milliseconds. */
    protected pingInterval: number;
    /** Heartbeat timeout in milliseconds. */
    protected pingTimeout: number;

    /** socket.io session id; empty string when disconnected. */
    clientId: string;
    /**
     * Current connection state mirror. Maintained by the concrete
     * subclass — true between `connect` and `disconnect`.
     */
    isWsConnected: boolean;

    // protected internal object messageLstLock;
    /**
     * Inbound response frames queued for decoding on the next
     * service tick. Concrete subclasses push raw frames here from
     * the socket callbacks; {@link service} drains the queue.
     */
    protected responsePacketLst: SocketPacket[];
    /** Inbound event frames queued for decoding on the next service tick. */
    protected eventPacketLst: SocketPacket[];

    /** Absolute base URL handed to the underlying socket.io client. */
    protected url: string;

    /** Callback receiving decoded events. */
    private _onEventHandler: Action1<GNHashtable>;
    /** Callback receiving decoded responses. */
    private _onResponseHandler: Action1<GNHashtable>;

    /**
     * One-shot connect callback handed in via {@link connect}. Cleared
     * after firing once so that the next reconnect does not re-fire
     * the same callback.
     */
    private _onSocketConnect: Action0;
    /** One-shot disconnect callback handed in via {@link close}. */
    private _onSocketDisconnect: Action0;

    /** Multi-subscriber list of connect callbacks. */
    private _onConnectHandler: Action0List;
    /** Multi-subscriber list of disconnect callbacks. */
    private _onDisconnectHandler: Action0List;

    constructor() {
        this.clientId = "";

        this._onConnectHandler = new Action0List();
        this._onDisconnectHandler = new Action0List();
    }

    /**
     * Stores socket configuration and resets the inbound buffers.
     *
     * Called by {@link SocketPeer.initGNSocketObject} just before
     * {@link reInitNewSocket} builds the underlying socket.io client.
     *
     * @param url            Absolute base URL produced by
     *                       {@link GNServerSettings.getSocketUrl}.
     * @param reconnectDelay Reconnect backoff in milliseconds.
     * @param pingInterval   Heartbeat interval in milliseconds.
     * @param pingTimeout    Heartbeat timeout in milliseconds.
     */
    init(url: string, reconnectDelay: number, pingInterval: number, pingTimeout: number): void {
        this.responsePacketLst = [];
        this.eventPacketLst = [];

        this.url = url;

        this.reconnectDelay = reconnectDelay;
        this.pingInterval = pingInterval;
        this.pingTimeout = pingTimeout;
    }

    /**
     * Captures a one-shot connect callback. The concrete subclass is
     * expected to dial the socket and call {@link onConnectHandler}
     * once the underlying client reports `connect`.
     *
     * @param _onSocketConnect Optional callback. Pass `null` to skip
     *                         the one-shot notification while still
     *                         opening the socket.
     */
    connect(_onSocketConnect: Action0): void {
        this._onSocketConnect = _onSocketConnect;
    }

    /**
     * Captures a one-shot disconnect callback. The concrete subclass
     * is expected to tear down the socket and call
     * {@link onDisconnectHandler}.
     */
    close(_onSocketDisconnect: Action0): void {
        this._onSocketDisconnect = _onSocketDisconnect;
    }

    /**
     * Sends an explicit auth frame so the backend can associate the
     * socket session with a user.
     *
     * Default implementation is a no-op — concrete subclasses such as
     * {@link NetworkingPeerSocketIOClient} override this with the
     * wire-format-specific frame.
     */
    sendRequestAuthSocket(): void {
    }

    /**
     * Public send entry point. Forwards the frame to {@link emit};
     * exists as a hook for future cross-cutting behaviour
     * (compression, telemetry).
     */
    send(requestType: RequestType, role: RequestRole, operationRequest: OperationRequest, authToken: string, secretKey: string, customTags: GNHashtable, gameId: string) {
        this.emit(requestType, role, operationRequest, authToken, secretKey, customTags, gameId);
    }

    /**
     * Subclass hook that performs the actual socket emit.
     *
     * Override on each concrete socket implementation. The default
     * no-op exists so the abstract class can still be instantiated
     * during partial implementations / mocking in tests.
     */
    protected emit(requestType: RequestType, role: RequestRole, operationRequest: OperationRequest, authToken: string, secretKey: string, customTags: GNHashtable, gameId: string): void {

    }

    /**
     * Subclass hook for (re)building the underlying socket.io client.
     *
     * Called once from {@link SocketPeer.initGNSocketObject} during
     * SDK startup. The default no-op exists so the abstract class
     * still works in tests; production code uses
     * {@link NetworkingPeerSocketIOClient.reInitNewSocket}.
     */
    reInitNewSocket(): void {
    }

    /**
     * Adds a callback to the multi-subscriber connect channel.
     *
     * Use a stable function reference so the matching
     * {@link removeOnConnectHandler} can find and remove it.
     */
    setOnConnectHandler(_onConnectHandler: Action0): void {
        this._onConnectHandler.subscriber(_onConnectHandler);
    }

    /**
     * Adds a callback to the multi-subscriber disconnect channel.
     */
    setOnDisconnectHandler(_onDisconnectHandler: Action0): void {
        this._onDisconnectHandler.subscriber(_onDisconnectHandler);
    }

    /**
     * Removes a previously registered connect callback. No-op when
     * the function reference is not currently subscribed.
     */
    removeOnConnectHandler(_onConnectHandler: Action0): void {
        this._onConnectHandler.unsubscriber(_onConnectHandler);
    }

    /**
     * Removes a previously registered disconnect callback.
     */
    removeOnDisconnectHandler(_onDisconnectHandler: Action0): void {
        this._onDisconnectHandler.unsubscriber(_onDisconnectHandler);
    }

    /**
     * Concrete subclasses call this after the underlying transport
     * reports `connect`.
     *
     * Sequence:
     * 1. Fan out to every subscriber registered through
     *    {@link setOnConnectHandler}.
     * 2. When a cached auth token exists, send the auth frame so the
     *    backend can associate the new session with the user without
     *    waiting for the next request.
     * 3. Resolve the one-shot {@link _onSocketConnect} callback and
     *    clear it so the next reconnect starts fresh.
     */
    onConnectHandler(): void {
        this._onConnectHandler.invoke();

        let authToken = GNNetwork.getAuthenticateStatus().getAuthToken();
        if (authToken != null) {
            this.sendRequestAuthSocket();
        }

        if (this._onSocketConnect != null) {
            this._onSocketConnect();
            this._onSocketConnect = null;
        }
    }

    /**
     * Concrete subclasses call this after the underlying transport
     * reports `disconnect`.
     *
     * Fans out to every subscriber on the disconnect channel and
     * resolves the one-shot {@link _onSocketDisconnect} callback.
     */
    onDisconnectHandler(): void {
        this._onDisconnectHandler.invoke();

        if (this._onSocketDisconnect != null) {
            this._onSocketDisconnect();
            this._onSocketDisconnect = null;
        }
    }

    /**
     * Replaces the single-slot raw event callback used by the SDK.
     *
     * The SDK installs its own dispatch routine through this slot
     * during {@link SocketPeer.initGNSocketObject}; application code
     * uses {@link GNNetwork.setOnEventHandler} for the
     * higher-level typed event channel instead.
     */
    setOnEventHandler(_onEventHandler: Action1<GNHashtable>): void {
        this._onEventHandler = _onEventHandler;
    }

    /**
     * Routes a decoded event to the registered handler. Skipped
     * silently when no handler is set.
     */
    onEventHandler(obj: GNHashtable): void {
        if (this._onEventHandler != null) this._onEventHandler(obj);
    }

    /**
     * Replaces the single-slot raw response callback used by the SDK.
     *
     * Bound during {@link SocketPeer.initGNSocketObject} to the
     * shared {@link PeerBase.onResponseHandler} machinery.
     */
    setOnResponseHandler(_onResponseHandler: Action1<GNHashtable>): void {
        this._onResponseHandler = _onResponseHandler;
    }

    /**
     * Routes a decoded response to the registered handler.
     */
    onResponseHandler(obj: GNHashtable): void {
        if (this._onResponseHandler != null) this._onResponseHandler(obj);
    }

    /**
     * Drains the inbound response and event buffers on the current
     * service tick.
     *
     * For each queued packet the helper:
     * - decodes the raw payload (MsgPack via
     *   {@link MessagePackConverterService.deserialize}, or pass
     *   through for JSON);
     * - wraps the result in a {@link GNHashtable};
     * - dispatches to the matching response / event handler.
     *
     * Decode failures are logged via
     * {@link GNDebug.logException} and swallowed so a malformed frame
     * cannot stall the service loop. After processing each list is
     * truncated to length 0 (cheaper than allocating a fresh array).
     */
    service(): void {
        if (this.responsePacketLst.length > 0) {
            for (let i = 0; i < this.responsePacketLst.length; i++) {
                let responsePacket = this.responsePacketLst[i];
                if (responsePacket.isMsgPack) {
                    try {
                        let iDict = MessagePackConverterService.deserialize<{}>(responsePacket.obj);
                        let gnHashtable = GNHashtable.builder()
                            .addAll(iDict)
                            .build();
                        this.onResponseHandler(gnHashtable);
                    }
                    catch (ex: any) {
                        GNDebug.logException(ex);
                    }
                }
                else {
                    try {
                        let iDict = responsePacket.obj;
                        let gnHashtable = GNHashtable.builder()
                            .addAll(iDict)
                            .build();
                        this.onResponseHandler(gnHashtable);
                    }
                    catch (ex: any) {
                        GNDebug.logException(ex);
                    }
                }
            }
            this.responsePacketLst.length = 0;
        }

        if (this.eventPacketLst.length > 0) {
            for (let i = 0; i < this.eventPacketLst.length; i++) {
                let eventPacket = this.eventPacketLst[i];
                if (eventPacket.isMsgPack) {
                    try {
                        let iDict = MessagePackConverterService.deserialize<{}>(eventPacket.obj);
                        let gnHashtable = GNHashtable.builder()
                            .addAll(iDict)
                            .build();
                        this.onEventHandler(gnHashtable);
                    }
                    catch (ex: any) {
                        GNDebug.logException(ex);
                    }
                }
                else {
                    try {
                        let iDict = eventPacket.obj;
                        let gnHashtable = GNHashtable.builder()
                            .addAll(iDict)
                            .build();
                        this.onEventHandler(gnHashtable);
                    }
                    catch (ex: any) {
                        GNDebug.logException(ex);
                    }
                }
            }
            this.eventPacketLst.length = 0;
        }
    }
}
