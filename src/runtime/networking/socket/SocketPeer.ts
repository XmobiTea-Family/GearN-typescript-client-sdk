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
import { OperationRequest } from "./../../entity/OperationRequest";

/**
 * Wraps the socket transport, event dispatch pipeline, and registered server event handlers.
 */
export class SocketPeer extends PeerBase {
	private networkingSocketPeerBase: NetworkingSocketPeerBase;

	private serverEventHandlersDict: { [k: string]: IServerEventHandler[]; };
	private _onEventHandler: Action1<OperationEvent>;

	/**
	 * Returns the current socket client id.
	 */
	getClientId(): string {
		return this.networkingSocketPeerBase.clientId;
	}

	/**
	 * Returns whether the underlying socket transport is connected.
	 */
	isConnected(): boolean {
		return this.networkingSocketPeerBase.isWsConnected;
	}

	/**
	 * Pushes the current auth token to the socket channel.
	 */
	sendRequestAuthSocket(): void {
		this.networkingSocketPeerBase.sendRequestAuthSocket();
	}

	/**
	 * Instantiates one handler of each registered `IServerEventHandler` implementation.
	 */
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

	/**
	 * Adds a caller-provided server event handler instance to the dispatch table.
	 */
	subscriberAServerEventHandler(serverEventHandler: IServerEventHandler): void {
		let serverEventHandlers2 = this.serverEventHandlersDict[serverEventHandler.getEventCode()];
		if (serverEventHandlers2 == null) {
			serverEventHandlers2 = [];
			this.serverEventHandlersDict[serverEventHandler.getEventCode()] = serverEventHandlers2;
		}
		serverEventHandlers2.push(serverEventHandler);
	}

	/**
	 * Creates and configures the low-level socket client, then wires response and event callbacks.
	 */
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

	/**
	 * Registers an additional socket-connect callback on the low-level transport.
	 */
	setOnConnectHandler(_onConnectHandler: Action0): void {
		this.networkingSocketPeerBase.setOnConnectHandler(_onConnectHandler);
	}

	/**
	 * Registers an additional socket-disconnect callback on the low-level transport.
	 */
	setOnDisconnectHandler(_onDisconnectHandler: Action0): void {
		this.networkingSocketPeerBase.setOnDisconnectHandler(_onDisconnectHandler);
	}

	/**
	 * Removes a previously registered socket-connect callback.
	 */
	removeOnConnectHandler(_onConnectHandler: Action0): void {
		this.networkingSocketPeerBase.removeOnConnectHandler(_onConnectHandler);
	}

	/**
	 * Removes a previously registered socket-disconnect callback.
	 */
	removeOnDisconnectHandler(_onDisconnectHandler: Action0): void {
		this.networkingSocketPeerBase.removeOnDisconnectHandler(_onDisconnectHandler);
	}

	/**
	 * Opens the underlying transport connection.
	 */
	connect(_onSocketConnect: Action0): void {
		this.networkingSocketPeerBase.connect(_onSocketConnect);
	}

	/**
	 * Closes the underlying transport connection.
	 */
	disconnect(_onSocketDisconnect: Action0): void {
		this.networkingSocketPeerBase.close(_onSocketDisconnect);
	}

	/**
	 * Registers the raw event callback used by the SDK consumer.
	 */
	setOnEventHandler(_onEventHandler: Action1<OperationEvent>): void {
		this._onEventHandler = _onEventHandler;
	}

	/**
	 * Marks an operation as sent and forwards it to the transport.
	 */
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

	/**
	 * Handles transport-specific work when an operation is queued.
	 */
	protected override onEnqueue(operationPending: OperationPending): void {
		GNDebug.log("[GN Socket ENQUEUE] " + operationPending.getOperationRequest().toString());
	}

	/**
	 * Dispatches a decoded socket event to registered handlers.
	 */
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

	/**
	 * Runs shared queue logic first, then lets the low-level socket peer drain buffered packets.
	 */
	override service(): void {
		super.service();

		this.networkingSocketPeerBase.service();
	}
}
