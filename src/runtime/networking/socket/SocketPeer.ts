import { Action1 } from "./../../common/Action1";
import { Action0 } from "./../../common/Action0";
import { GNArray } from "./../../common/GNData";
import { ReturnCode } from "./../../constant/ReturnCode";
import { OperationEvent } from "./../../entity/OperationEvent";
import { GNNetwork } from "./../../GNNetwork";
import { GNDebug } from "./../../logger/GNDebug";
import { IServerEventHandler } from "./../handler/IServerEventHandler";
import { NetworkingSocketPeerBase } from "./NetworkingSocketPeerBase";
import { NetworkingPeerSocketIOClient } from "./NetworkingPeerSocketIOClient";
import { OperationPending } from "./../OperationPending";
import { PeerBase } from "./../PeerBase";

export class SocketPeer extends PeerBase {
    private networkingSocketPeerBase: NetworkingSocketPeerBase;

    private serverEventHandlersDict: { [k: number]: IServerEventHandler[]; };
    private _onEventHandler: Action1<OperationEvent>;

    getClientId(): string {
        return this.networkingSocketPeerBase.clientId;
    }

    isConnected(): boolean {
        return this.networkingSocketPeerBase.isWsConnected;
    }

    sendRequestAuthSocket(): void {
        this.networkingSocketPeerBase.sendRequestAuthSocket();
    }

    private subscriberServerEventHandler(): void {
        this.serverEventHandlersDict = {};

        let serverEventHandlers = IServerEventHandler.getImplementations();
        for (let i = 0; i < serverEventHandlers.length; i++) {
            let serverEventHandler = new serverEventHandlers[i]();

            if (serverEventHandler != null) {
                let serverEventHandlers2 = this.serverEventHandlersDict[serverEventHandler.getEventCode()];
                if (serverEventHandlers2 == null) {
                    serverEventHandlers2 = [];
                    this.serverEventHandlersDict[serverEventHandler.getEventCode()] = serverEventHandlers2;
                }
                serverEventHandlers2.push(serverEventHandler);
            }
        }
    }

    subscriberAServerEventHandler(serverEventHandler: IServerEventHandler): void {
        let serverEventHandlers2 = this.serverEventHandlersDict[serverEventHandler.getEventCode()];
        if (serverEventHandlers2 == null) {
            serverEventHandlers2 = [];
            this.serverEventHandlersDict[serverEventHandler.getEventCode()] = serverEventHandlers2;
        }
        serverEventHandlers2.push(serverEventHandler);
    }

    override initGNSocketObject(): void {
        let gnServerSettings = GNNetwork.getGNServerSettings();
        if (gnServerSettings == null)
            throw new Error("Where is GN Server Settings");

        this.isUse = gnServerSettings.isUseSocket();

        this.networkingSocketPeerBase = new NetworkingPeerSocketIOClient();

        this.networkingSocketPeerBase.init(gnServerSettings.getSocketUrl(), gnServerSettings.getReconnectDelay(), gnServerSettings.getPingInterval(), gnServerSettings.getPingTimeout());
        this.networkingSocketPeerBase.reInitNewSocket();

        let thiz = this;
        this.networkingSocketPeerBase.setOnEventHandler((t1: GNArray, t2: boolean) => {
            thiz.onEventHandler(t1, t2);
        });
        this.networkingSocketPeerBase.setOnResponseHandler((t1: GNArray, t2: boolean) => {
            thiz.onResponseHandler(t1, t2);
        });

        this.subscriberServerEventHandler();
    }

    setOnConnectHandler(_onConnectHandler: Action0): void {
        this.networkingSocketPeerBase.setOnConnectHandler(_onConnectHandler);
    }

    setOnDisconnectHandler(_onDisconnectHandler: Action0): void {
        this.networkingSocketPeerBase.setOnDisconnectHandler(_onDisconnectHandler);
    }

    removeOnConnectHandler(_onConnectHandler: Action0): void {
        this.networkingSocketPeerBase.removeOnConnectHandler(_onConnectHandler);
    }

    removeOnDisconnectHandler(_onDisconnectHandler: Action0): void {
        this.networkingSocketPeerBase.removeOnDisconnectHandler(_onDisconnectHandler);
    }

    connect(_onSocketConnect: Action0): void {
        this.networkingSocketPeerBase.connect(_onSocketConnect);
    }

    disconnect(_onSocketDisconnect: Action0): void {
        this.networkingSocketPeerBase.close(_onSocketDisconnect);
    }

    setOnEventHandler(_onEventHandler: Action1<OperationEvent>): void {
        this._onEventHandler = _onEventHandler;
    }

    override send(operationPending: OperationPending): void {
        super.send(operationPending);

        GNDebug.log("[GN Socket SEND] " + operationPending.getOperationRequest().toString());

        let authToken = operationPending.getAuthToken();
        let secretKey = operationPending.getSecretKey();
        let gameId = operationPending.getGameId();
        let customTags = operationPending.getCustomTags();

        this.networkingSocketPeerBase.send(operationPending.getRequestType(), operationPending.getRequestRole(), operationPending.getOperationRequest(), authToken, secretKey, customTags, gameId);
    }

    protected override onEnqueue(operationPending: OperationPending): void {
        GNDebug.log("[GN Socket ENQUEUE] " + operationPending.getOperationRequest().toString());
    }

    onEventHandler(obj: GNArray, isEncrypted: boolean): void {
        let eventCode = obj.getNumber(0);

        let operationEvent = new OperationEvent(eventCode, obj.getGNHashtable(1));
        operationEvent.setEncrypted(isEncrypted);

        GNDebug.log("[GN Socket EVENT] " + operationEvent.toString());

        if (this._onEventHandler != null) this._onEventHandler(operationEvent);

        let serverEventHandlers = this.serverEventHandlersDict[eventCode];

        serverEventHandlers.forEach(serverEventHandler => {
            if (serverEventHandler != null) {
                serverEventHandler.handle(operationEvent);
            }
        });
    }

    override service(): void {
        super.service();

        this.networkingSocketPeerBase.service();
    }
}
