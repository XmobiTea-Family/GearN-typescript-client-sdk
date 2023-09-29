import { Action0 } from "../../common/Action0";
import { Commands } from "../../constant/Commands";
import { OperationRequest } from "../../entity/OperationRequest";
import { GNDebug } from "../../logger/GNDebug";
import { NetworkingSocketPeerBase, SocketPacket } from "./NetworkingSocketPeerBase";
import { GNNetwork } from "../../GNNetwork";
import { OperationHelper } from "../../entity/OperationHelper";
import { Manager, Socket } from "socket.io-client";
import { encode } from "@msgpack/msgpack";
import { GNParameterCode } from "../../constant/parameterCode/GNParameterCode";
import { RequestType } from "../../constant/enumType/RequestType";
import { RequestRole } from "../../constant/enumType/RequestRole";
import { GNHashtable } from "../../common/GNData";

export class NetworkingPeerSocketIOClient extends NetworkingSocketPeerBase {
    private socketManager: Manager;
    private socket: Socket;
    private isConnected: boolean;

    override isWsConnected: boolean;

    override sendRequestAuthSocket(): void {
        super.sendRequestAuthSocket();

        if (this.clientId) {
            this.socketManager.socket("/").emit(Commands.RequestAuthTokenCmd, GNNetwork.getAuthenticateStatus().getAuthToken());
        };
    }

    override reInitNewSocket(): void {
        super.reInitNewSocket();

        if (this.socketManager == null) {
            this.socketManager = new Manager(this.url + "/socket.io/", {
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

    protected override emit(requestType: RequestType, requestRole: RequestRole, operationRequest: OperationRequest, authToken: string, secretKey: string, customTags: GNHashtable): void {
        super.emit(requestType, requestRole, operationRequest, authToken, secretKey, customTags);

        if (this.socketManager == null) {
            // callback here
            return;
        }

        let socket = this.socketManager.socket("/");
        if (socket == null) {
            // callback here
            return;
        }

        if (customTags != null) operationRequest.setParameter(GNParameterCode.CustomTags, customTags);

        let dataSend = OperationHelper.toSocketData(requestType, requestRole, operationRequest);
        if (operationRequest.isEncrypted())
            socket.emit(Commands.RequestCmd_MsgPack, encode(dataSend));
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
