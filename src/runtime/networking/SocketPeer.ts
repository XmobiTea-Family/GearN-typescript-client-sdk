import { Action1 } from "./../common/Action1";
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
    private serverEventHandlersDic: { [k: number]: IServerEventHandler[]; };
    private _onEventHandler: Action1<OperationEvent>;

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
        this.serverEventHandlersDic = {};

        let serverEventHandlers = IServerEventHandler.getImplementations();
        for (let i = 0; i < serverEventHandlers.length; i++) {
            let serverEventHandler = new serverEventHandlers[i]();

            if (serverEventHandler != null) {
                let serverEventHandlers2 = this.serverEventHandlersDic[serverEventHandler.getEventCode()];
                if (serverEventHandlers2 == null) {
                    serverEventHandlers2 = [];
                    this.serverEventHandlersDic[serverEventHandler.getEventCode()] = serverEventHandlers2;
                }
                serverEventHandlers2.push(serverEventHandler);
            }
        }
    }

    subscriberAServerEventHandler(serverEventHandler: IServerEventHandler): void {
        let serverEventHandlers2 = this.serverEventHandlersDic[serverEventHandler.getEventCode()];
        if (serverEventHandlers2 == null) {
            serverEventHandlers2 = [];
            this.serverEventHandlersDic[serverEventHandler.getEventCode()] = serverEventHandlers2;
        }
        serverEventHandlers2.push(serverEventHandler);
    }

    override initGNSocketObject(): void {
        let gnServerSettings = GNNetwork.getGNServerSettings();
        if (gnServerSettings == null)
            throw new Error("Where is GN Server Settings");

        this.isUse = gnServerSettings.isUseSocket();

        this.networkingPeerBase = new NetworkingPeerSocket();

        this.networkingPeerBase.init(gnServerSettings.getSocketUrl(), gnServerSettings.getReconnectDelay(), gnServerSettings.getPingInterval(), gnServerSettings.getPingTimeout());
        this.networkingPeerBase.reInitNewSocket();

        this.networkingPeerBase.setOnEventHandler((t1: GNArray, t2: boolean) => {
            this.onEventHandler(t1, t2);
        });
        this.networkingPeerBase.setOnResponseHandler((t1: GNArray, t2: boolean) => {
            this.onResponseHandler(t1, t2);
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

    setOnEventHandler(_onEventHandler: Action1<OperationEvent>): void {
        this._onEventHandler = _onEventHandler;
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
        
        let operationEvent = new OperationEvent(eventCode, obj.getGNHashtable(1));
        operationEvent.setEncrypted(isEncrypted);

        GNDebug.log("[GN Socket EVENT] " + operationEvent.toString());

        if (this._onEventHandler != null) this._onEventHandler(operationEvent);

        let serverEventHandlers = this.serverEventHandlersDic[eventCode];

        serverEventHandlers.forEach(serverEventHandler => {
            if (serverEventHandler != null) {
                serverEventHandler.handle(operationEvent);
            }
        });
    }

    override service(): void {
        super.service();

        this.networkingPeerBase.service();
    }
}
