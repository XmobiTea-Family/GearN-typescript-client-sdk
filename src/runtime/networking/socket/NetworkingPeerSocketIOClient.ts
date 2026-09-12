import { Action0 } from "./../../common/Action0";
import { Commands } from "./../../constant/Commands";
import { OperationRequest } from "./../../entity/OperationRequest";
import { GNDebug } from "./../../logger/GNDebug";
import { NetworkingSocketPeerBase, SocketPacket } from "./NetworkingSocketPeerBase";
import { GNNetwork } from "./../../GNNetwork";
import { OperationHelper } from "./../../helper/OperationHelper";
import { Manager, Socket } from "socket.io-client";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { RequestType } from "./../../constant/enumType/RequestType";
import { RequestRole } from "./../../constant/enumType/RequestRole";
import { GNHashtable } from "./../../common/GNData";
import { MessagePackConverterService } from "./../../helper/MessagePackConverterService";
import { MessageType } from "./../../config/GNServerSettings";

/**
 * Concrete socket transport built on top of the official
 * `socket.io-client` package.
 *
 * Wires four inbound socket events to the buffered queues defined on
 * the parent class:
 * - `Commands.ResponseCmd_MsgPack` →
 *   {@link NetworkingSocketPeerBase.responsePacketLst} (binary).
 * - `Commands.EventCmd_MsgPack` →
 *   {@link NetworkingSocketPeerBase.eventPacketLst} (binary).
 * - `Commands.ResponseCmd_Json` → response queue (plain object).
 * - `Commands.EventCmd_Json` → event queue (plain object).
 *
 * Outbound frames are emitted by {@link emit} which converts the
 * supplied {@link OperationRequest} into the array shape produced by
 * {@link OperationHelper.toSocketData}, optionally MsgPack-encodes
 * it via {@link MessagePackConverterService.serialize}, and writes
 * the matching `Commands.RequestCmd_*` event.
 *
 * Connect / disconnect lifecycle: {@link reInitNewSocket} sets up the
 * `Manager` lazily (only on first call) with `autoConnect: false` so
 * that {@link connect} controls the actual dial. Inbound `connect` /
 * `disconnect` / `error` events route into {@link onConnect} /
 * {@link onDisconnect} / {@link onError} respectively.
 *
 * Auth handshake: the SDK does not embed the auth token in the
 * `Manager` query — instead it emits a dedicated
 * `Commands.RequestAuthTokenCmd` frame from {@link sendRequestAuthSocket}
 * once the connect handler fires.
 */
export class NetworkingPeerSocketIOClient extends NetworkingSocketPeerBase {
    /** Reused socket.io `Manager` instance (one per SDK lifetime). */
    private socketManager: Manager;
    /** Default namespace socket retrieved from {@link socketManager}. */
    private socket: Socket;
    /**
     * Local "have we asked for an open connection" flag — used by
     * {@link connect} to short-circuit redundant dial calls.
     */
    private isConnected: boolean;

    /**
     * Sends the cached auth token through the dedicated socket
     * command so the backend can associate this socket session with
     * the authenticated user.
     *
     * No-op when the socket has not assigned a `clientId` yet — the
     * SDK retries automatically from {@link onConnectHandler} once
     * the underlying socket reports `connect`.
     */
    override sendRequestAuthSocket(): void {
        super.sendRequestAuthSocket();

        if (this.clientId) {
            this.socketManager.socket("/").emit(Commands.RequestAuthTokenCmd, GNNetwork.getAuthenticateStatus().getAuthToken());
        };
    }

    /**
     * Lazily allocates the `socket.io-client` `Manager` and registers
     * every event listener.
     *
     * Configuration:
     * - `path`: derived from the supplied URL by appending the
     *   `socket.io` segment after whatever path component the URL
     *   already specifies. This supports both root-level deployments
     *   (`http://host`) and sub-path deployments
     *   (`http://host/api/`).
     * - `reconnection: true` with `reconnectionDelay` from
     *   {@link GNServerSettings}.
     * - `timeout: pingTimeout` so the underlying client honours the
     *   configured heartbeat ceiling.
     * - `autoConnect: false` so the actual dial happens explicitly
     *   inside {@link connect}.
     * - `transports: ["websocket"]` to skip the long-poll fallback;
     *   the GearN backend always supports WebSocket directly.
     *
     * Idempotent — repeated calls after the first succeed are no-ops.
     */
    override reInitNewSocket(): void {
        super.reInitNewSocket();

        if (this.socketManager == null) {
            const url = new URL(this.url);

            this.socketManager = new Manager(url.origin, {
                path: url.pathname + "socket.io",
                reconnection: true,
                reconnectionDelay: this.reconnectDelay,
                timeout: this.pingTimeout,
                autoConnect: false,
                transports: ["websocket"]
            });

            let socket = this.socketManager.socket("/");

            socket.on("connect", () => {
                this.onConnect();
            });

            socket.on("disconnect", () => {
                this.onDisconnect();
            });

            socket.on("error", (error: any) => {
                this.onError(error);
            });

            socket.on(Commands.ResponseCmd_MsgPack, (args: any) => {
                this.onResponseMsgPack(args);
            });

            socket.on(Commands.EventCmd_MsgPack, (args: any) => {
                this.onEventMsgPack(args);
            });

            socket.on(Commands.ResponseCmd_Json, (args: any) => {
                this.onResponseJson(args);
            });

            socket.on(Commands.EventCmd_Json, (args: any) => {
                this.onEventJson(args);
            });

            this.socket = socket;
        }
    }

    /**
     * Buffers an inbound MessagePack response frame. Decoded later on
     * the next {@link service} tick.
     */
    private onResponseMsgPack(...args: any): void {
        this.responsePacketLst.push(new SocketPacket(args[0], true));
    }

    /**
     * Buffers an inbound MessagePack event frame. Decoded later on
     * the next {@link service} tick.
     */
    private onEventMsgPack(...args: any[]): void {
        this.eventPacketLst.push(new SocketPacket(args[0], true));
    }

    /**
     * Buffers an inbound JSON response frame. Decoded later on the
     * next {@link service} tick.
     */
    private onResponseJson(...args: any[]): void {
        this.responsePacketLst.push(new SocketPacket(args[0], false));
    }

    /**
     * Buffers an inbound JSON event frame. Decoded later on the next
     * {@link service} tick.
     */
    private onEventJson(...args: any[]): void {
        this.eventPacketLst.push(new SocketPacket(args[0], false));
    }

    /**
     * Bridges the low-level `connect` event to
     * {@link onConnectHandler} on the parent class. Captures
     * `socket.id` as the public {@link clientId}.
     */
    private onConnect(): void {
        GNDebug.log("[GN Socket RECV] HandleOpen " + this.socket.id);
        this.clientId = this.socket.id;
        this.onConnectHandler();
    }

    /**
     * Bridges the low-level `disconnect` event to
     * {@link onDisconnectHandler} on the parent class. Clears
     * {@link clientId} so {@link GNNetwork.isSocketConnected} starts
     * reporting `false` immediately.
     */
    private onDisconnect(): void {
        GNDebug.log("[GN Socket RECV] HandleClose ");
        this.clientId = "";
        this.onDisconnectHandler();
    }

    /**
     * Logs transport errors via {@link GNDebug.logError}. The SDK
     * does not propagate transport errors to the application; failed
     * requests surface through their normal timeout / response-code
     * path.
     */
    private onError(error: Error): void {
        GNDebug.logError(error);
    }

    /**
     * Forwards configuration to the parent. The actual `Manager`
     * allocation is deferred to {@link reInitNewSocket} so the SDK
     * can re-build the client after a connection drop without
     * touching the captured configuration.
     */
    override init(url: string, reconnectDelay: number, pingInterval: number, pingTimeout: number): void {
        super.init(url, reconnectDelay, pingInterval, pingTimeout);
    }

    /**
     * Encodes the operation request into the wire shape and emits it
     * over the active socket.
     *
     * Payload preparation:
     * 1. Merge the supplied `customTags` into the request's
     *    parameter bag under {@link ParameterCode.CustomTags}.
     * 2. Convert the request to the array shape via
     *    {@link OperationHelper.toSocketData} (`[type, role,
     *    opCode, params]` plus `requestId` when not the
     *    fire-and-forget sentinel).
     * 3. Emit the JSON variant directly when `messageType === Json`,
     *    otherwise encode through MessagePack first.
     *
     * Silently no-ops when the underlying `Manager` / default-
     * namespace `Socket` is unavailable (e.g. before
     * {@link reInitNewSocket} has run). The intent is best-effort —
     * any pending-with-callback request will eventually time out and
     * surface through the regular response handler.
     */
    protected override emit(requestType: RequestType, role: RequestRole, operationRequest: OperationRequest, authToken: string, secretKey: string, gameId: string, customTags: GNHashtable, retrialCount: number): void {
        super.emit(requestType, role, operationRequest, authToken, secretKey, gameId, customTags, retrialCount);

        if (this.socketManager == null) {
            // callback here
            return;
        }

        let socket = this.socketManager.socket("/");
        if (socket == null) {
            // callback here
            return;
        }

        if (customTags != null) operationRequest.setParameter(ParameterCode.CustomTags, customTags);

        let dataSend = OperationHelper.toSocketData(requestType, role, operationRequest);

        let gnServerSettings = GNNetwork.getGNServerSettings();

        if (gnServerSettings.getMessageType() == MessageType.Json)
            socket.emit(Commands.RequestCmd_Json, dataSend);
        else
            socket.emit(Commands.RequestCmd_MsgPack, MessagePackConverterService.serialize(dataSend));
    }

    /**
     * Tears the socket down and notifies subscribers.
     *
     * Closes the underlying `Manager` first (the heavy carrier for
     * the engine.io connection), then disconnects the namespace
     * socket as a fallback if the manager was never created. After
     * the underlying client closes, manually invokes
     * {@link onDisconnectHandler} so the multi-subscriber channel
     * fires even when the underlying client did not raise a fresh
     * `disconnect` event (already-closed shortcut path).
     */
    override close(_onSocketDisconnect: Action0): void {
        super.close(_onSocketDisconnect);

        this.isConnected = false;

        if (this.socketManager != null) {
            if (this.socketManager._readyState != "closed") {
                this.socketManager._close();

                return;
            }
        }

        if (this.socket != null) this.socket.disconnect();

        GNDebug.log("[GN Socket] Disconnecting via SocketIO client");

        this.onDisconnectHandler();
    }

    /**
     * Opens the underlying socket.io connection.
     *
     * Short-circuits when the SDK has already issued a `connect()`
     * call (logs "Reconnecting" and returns) so duplicate calls from
     * application code do not start parallel dials. The first call
     * dials both the engine.io manager and the default-namespace
     * socket.
     */
    override connect(_onSocketConnect: Action0): void {
        super.connect(_onSocketConnect);

        if (this.isConnected) {
            GNDebug.log("[GN Socket] Reconnecting");

            return;
        }

        this.isConnected = true;

        GNDebug.log("[GN Socket] Connecting via SocketIO client");

        if (this.socketManager != null) this.socketManager.open();
        if (this.socket != null) this.socket.connect();
    }
}
