import { Action0 } from "./../common/Action0";
import { GNArray } from "./../common/GNData";
import { ReturnCode } from "./../constant/ReturnCode";
import { OperationEvent } from "./../entity/OperationEvent";
import { GNNetwork } from "./../GNNetwork";
import { GNDebug } from "./../logger/GNDebug";
import { IServerEventHandler } from "./handler/IServerEventHandler";
import { NetworkingPeerBase } from "./NetworkingPeerBase";
import { NetworkingPeerSocket } from "./NetworkingPeerSocket";
import { OperationPending } from "./OperationPending";
import { PeerBase } from "./PeerBase";

export class SocketPeer extends PeerBase {
    //private const string authTokenFormat = "{\"authtoken\":$authtoken}";
    private serverEventHandlerDic: { [k: number]: IServerEventHandler; };

    private networkingPeerBase: NetworkingPeerBase;

    getClientId(): string {
        return this.networkingPeerBase.clientId;
    }

    isConnected(): boolean {
        return this.networkingPeerBase.isWsConnected;
    }

    sendRequestAuthSocket(): void {
        this.networkingPeerBase.sendRequestAuthSocket();
    }

    subscriberServerEventHandler(): void {
        this.serverEventHandlerDic = {};

        let serverEventHandlers = IServerEventHandler.getImplementations();
        for (let i = 0; i < serverEventHandlers.length; i++) {
            let serverEventHandler = new serverEventHandlers[i]();

            if (serverEventHandler != null) this.serverEventHandlerDic[serverEventHandler.getEventCode()] = serverEventHandler;
        }
    }

    subscriberAServerEventHandler(serverEventHandler: IServerEventHandler): void {
        this.serverEventHandlerDic[serverEventHandler.getEventCode()] = serverEventHandler;
    }

    override initGNSocketObject(): void {
        let gnServerSettings = GNNetwork.getGNServerSettings();
        if (gnServerSettings == null)
            throw new Error("Where is GN Server Settings");

        this.isUse = gnServerSettings.isUseSocket();

        this.networkingPeerBase = new NetworkingPeerSocket();

        this.networkingPeerBase.init(gnServerSettings.getSocketUrl(), gnServerSettings.getReconnectDelay(), gnServerSettings.getPingInterval(), gnServerSettings.getPingTimeout());
        this.networkingPeerBase.reInitNewSocket();

        this.networkingPeerBase.setOnEventHandler({
            invoke: (t1, t2) => {
                this.onEventHandler(t1, t2);
            }
        });
        this.networkingPeerBase.setOnResponseHandler({
            invoke: (t1, t2) => {
                this.onResponseHandler(t1, t2);
            }
        });

        this.subscriberServerEventHandler();
    }

    setOnConnectHandler(_onConnectHandler: Action0): void {
        this.networkingPeerBase.setOnConnectHandler(_onConnectHandler);
    }

    setOnDisconnectHandler(_onDisconnectHandler: Action0): void {
        this.networkingPeerBase.setOnDisconnectHandler(_onDisconnectHandler);
    }

    removeOnConnectHandler(_onConnectHandler: Action0): void {
        this.networkingPeerBase.removeOnConnectHandler(_onConnectHandler);
    }

    removeOnDisconnectHandler(_onDisconnectHandler: Action0): void {
        this.networkingPeerBase.removeOnDisconnectHandler(_onDisconnectHandler);
    }

    connect(_onSocketConnect: Action0): void {
        this.networkingPeerBase.connect(_onSocketConnect);
    }

    disconnect(_onSocketDisconnect: Action0): void {
        this.networkingPeerBase.close(_onSocketDisconnect);
    }

    override send(operationPending: OperationPending): void {
        super.send(operationPending);

        GNDebug.log("[GN Socket SEND] " + operationPending.getOperationRequest().toString());

        let operationRequest = operationPending.getOperationRequest();

        let authToken = GNNetwork.getAuthToken();

        if (!authToken) {
            if (GNNetwork.getGNServerSettings().getCodeCanSendNotAuthorized().indexOf(operationRequest.getOperationCode()) == -1) {
                let obj = new GNArray();

                obj.add(ReturnCode.OperationNotAuthorized);
                obj.add(null);
                obj.add(operationRequest.getRequestId());

                this.onResponseHandler(obj, operationRequest.isEncrypted());

                return;
            }
        }

        this.networkingPeerBase.send(operationPending.getOperationRequest());
    }

    onEventHandler(obj: GNArray, isEncrypted: boolean): void {
        let eventCode = obj.getNumber(0);
        if (this.serverEventHandlerDic[eventCode] == null) {
            return;
        }

        let operationEvent = new OperationEvent(eventCode, obj.getGNHashtable(1));
        operationEvent.setEncrypted(isEncrypted);

        GNDebug.log("[GN Socket EVENT] " + operationEvent.toString());

        let serverEventHandler = this.serverEventHandlerDic[eventCode];
        serverEventHandler.handle(operationEvent);
    }

    override service(): void {
        super.service();

        this.networkingPeerBase.service();
    }
}
