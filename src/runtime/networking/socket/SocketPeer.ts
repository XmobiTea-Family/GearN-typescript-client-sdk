import { Action1 } from "./../../common/Action1";
import { Action0 } from "./../../common/Action0";
import { GNArray, GNHashtable } from "./../../common/GNData";
import { OperationEvent } from "./../../entity/OperationEvent";
import { GNNetwork } from "./../../GNNetwork";
import { GNDebug } from "./../../logger/GNDebug";
import { IServerEventHandler } from "./../handler/IServerEventHandler";
import { NetworkingSocketPeerBase } from "./NetworkingSocketPeerBase";
import { NetworkingPeerSocketIOClient } from "./NetworkingPeerSocketIOClient";
import { OperationPending } from "./../OperationPending";
import { PeerBase } from "./../PeerBase";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { OperationRequest } from "../../entity/OperationRequest";

export class SocketPeer extends PeerBase {
	private networkingSocketPeerBase: NetworkingSocketPeerBase;

	private serverEventHandlersDict: { [k: string]: IServerEventHandler[]; };
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
		this.networkingSocketPeerBase.setOnEventHandler((t1: GNHashtable) => {
			thiz.onEventHandler(t1);
		});
		this.networkingSocketPeerBase.setOnResponseHandler((t1: GNHashtable) => {
			thiz.onResponseHandler(t1);
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
		let gnServerSettings = GNNetwork.getGNServerSettings();
		let operationRequest = operationPending.getOperationRequest();

		if (operationRequest.getTimeout() == OperationRequest.defaultTimeOut) operationRequest.setTimeout(gnServerSettings.getDefaultTimeoutInSeconds());

		super.send(operationPending);

		GNDebug.log("[GN Socket SEND] " + operationPending.getOperationRequest().toString());

		let authToken = operationPending.getAuthToken();
		let secretKey = operationPending.getSecretKey();
		let gameId = operationPending.getGameId();
		let customTags = operationPending.getCustomTags();

		this.networkingSocketPeerBase.send(operationPending.getRequestType(), operationPending.getRole(), operationPending.getOperationRequest(), authToken, secretKey, customTags, gameId);
	}

	protected override onEnqueue(operationPending: OperationPending): void {
		GNDebug.log("[GN Socket ENQUEUE] " + operationPending.getOperationRequest().toString());
	}

	onEventHandler(obj: GNHashtable): void {
		let eventCode = obj.getString(ParameterCode.EventCode);

		let operationEvent = new OperationEvent(eventCode, obj.getGNHashtable(ParameterCode.Parameters));

		GNDebug.log("[GN Socket EVENT] " + operationEvent.toString());

		if (this._onEventHandler != null) this._onEventHandler(operationEvent);

		let serverEventHandlers = this.serverEventHandlersDict[eventCode];

		if (serverEventHandlers == null) return;

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
