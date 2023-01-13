import { Action0 } from "./../common/Action0";
import { Commands } from "./../constant/Commands";
import { OperationRequest } from "./../entity/OperationRequest";
import { GNDebug } from "./../logger/GNDebug";
import { NetworkingPeerBase, SocketPacket } from "./NetworkingPeerBase";
import { GNNetwork } from "./../GNNetwork";
import { OperationHelper } from "./../entity/OperationHelper";

export class NetworkingPeerSocket extends NetworkingPeerBase {
    private socketManager: any;
    private socket: any;
    private isConnected: boolean;

    isWsConnected: boolean;

    override sendRequestAuthSocket(): void {
        super.sendRequestAuthSocket();

        if (this.clientId) {
            this.socketManager.socket("/").emit(Commands.RequestAuthTokenCmd, GNNetwork.getAuthToken());
        };
    }

    override reInitNewSocket(): void {
        super.reInitNewSocket();

        if (this.socketManager == null) {
            this.socketManager = new globalThis.exports.Manager(this.url + "/socket.io/", {
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

            socket.on("disconnect", (disconnectReason: any) => {
                this.onDisconnect();
            });

            socket.io.on("error", (error: any) => {
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

    private onResponseMsgPack(...args: any): void {
        this.responsePacketLst.push(new SocketPacket(args[0], true));
    }

    private onEventMsgPack(...args: any[]): void {
        this.eventPacketLst.push(new SocketPacket(args[0], true));
    }

    private onResponseJson(...args: any[]): void {
        this.responsePacketLst.push(new SocketPacket(args[0], false));
    }

    private onEventJson(...args: any[]): void {
        this.eventPacketLst.push(new SocketPacket(args[0], false));
    }

    private onConnect(): void {
        GNDebug.log("[GN Socket RECV] HandleOpen " + this.socket.id);
        this.clientId = this.socket.id;
        this.onConnectHandler();
    }

    private onDisconnect(): void {
        GNDebug.log("[GN Socket RECV] HandleClose ");
        this.clientId = "";
        this.onDisconnectHandler();
    }

    private onError(error: Error): void {
        GNDebug.logError(error);
    }

    override init(url: string, reconnectDelay: number, pingInterval: number, pingTimeout: number): void {
        super.init(url, reconnectDelay, pingInterval, pingTimeout);
    }

    protected override emit(operationRequest: OperationRequest): void {
        if (this.socketManager == null) {
            // callback here
            return;
        }

        let socket = this.socketManager.socket("/");
        if (socket == null) {
            // callback here
            return;
        }

        let dataSend = OperationHelper.toSocketData(operationRequest);
        if (operationRequest.isEncrypted())
            socket.emit(Commands.RequestCmd_MsgPack, globalThis.exports.encode(dataSend));
        else
            socket.emit(Commands.RequestCmd_Json, dataSend);
    }

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
