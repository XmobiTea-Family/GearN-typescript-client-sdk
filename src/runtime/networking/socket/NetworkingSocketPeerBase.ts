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
 * Buffers a raw socket packet until the service loop can decode and dispatch it.
 */
export class SocketPacket {
	public obj: any;
	public isMsgPack: boolean;

	/**
	 * Creates a new SocketPacket instance.
	 */
	constructor(obj: any, isMsgPack: boolean) {
		this.obj = obj;
		this.isMsgPack = isMsgPack;
	}
}

/**
 * Stores a flat list of parameterless callbacks.
 */
class Action0List {
	private handlers: Action0[];

	/**
	 * Adds a callback to the list.
	 */
	subscriber(action: Action0) {
		this.handlers.push(action);
	}

	/**
	 * Removes a callback from the list when it is present.
	 */
	unsubscriber(action: Action0) {
		let indexOf = this.handlers.indexOf(action);
		if (indexOf != -1) this.handlers.splice(indexOf, 1);
	}

	/**
	 * Invokes every registered callback in insertion order.
	 */
	invoke() {
		this.handlers.forEach((a) => {
			if (a != null) a();
		});
	}

	/**
	 * Creates a new Action0List instance.
	 */
	constructor() {
		this.handlers = [];
	}
}

/**
 * Provides transport-agnostic socket lifecycle management, packet buffering, and callback dispatch.
 */
export abstract class NetworkingSocketPeerBase {
	protected reconnectDelay: number;
	protected pingInterval: number;
	protected pingTimeout: number;

	clientId: string;
	isWsConnected: boolean;

	// protected internal object messageLstLock;
	protected responsePacketLst: SocketPacket[];
	protected eventPacketLst: SocketPacket[];

	protected url: string;

	private _onEventHandler: Action1<GNHashtable>;
	private _onResponseHandler: Action1<GNHashtable>;

	private _onSocketConnect: Action0;
	private _onSocketDisconnect: Action0;

	private _onConnectHandler: Action0List;
	private _onDisconnectHandler: Action0List;

	/**
	 * Creates a new NetworkingSocketPeerBase instance.
	 */
	constructor() {
		this.clientId = "";

		this._onConnectHandler = new Action0List();
		this._onDisconnectHandler = new Action0List();
	}

	/**
	 * Stores socket configuration and resets buffered response or event packets.
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
	 * Opens the underlying transport connection.
	 */
	connect(_onSocketConnect: Action0): void {
		this._onSocketConnect = _onSocketConnect;
	}

	/**
	 * Closes the underlying transport connection.
	 */
	close(_onSocketDisconnect: Action0): void {
		this._onSocketDisconnect = _onSocketDisconnect;
	}

	/**
	 * Pushes the current auth token to the socket channel.
	 */
	sendRequestAuthSocket(): void {
	}

	/**
	 * Marks an operation as sent and forwards it to the transport.
	 */
	send(requestType: RequestType, role: RequestRole, operationRequest: OperationRequest, authToken: string, secretKey: string, customTags: GNHashtable, gameId: string) {
		this.emit(requestType, role, operationRequest, authToken, secretKey, customTags, gameId);
	}

	/**
	 * Sends the prepared payload through the low-level transport.
	 */
	protected emit(requestType: RequestType, role: RequestRole, operationRequest: OperationRequest, authToken: string, secretKey: string, customTags: GNHashtable, gameId: string): void {

	}

	/**
	 * Recreates the low-level socket client when needed.
	 */
	reInitNewSocket(): void {
	}

	/**
	 * Registers an additional callback invoked after the socket connects.
	 */
	setOnConnectHandler(_onConnectHandler: Action0): void {
		this._onConnectHandler.subscriber(_onConnectHandler);
	}

	/**
	 * Registers an additional callback invoked after the socket disconnects.
	 */
	setOnDisconnectHandler(_onDisconnectHandler: Action0): void {
		this._onDisconnectHandler.subscriber(_onDisconnectHandler);
	}

	/**
	 * Removes a previously registered connect callback.
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
	 * Invokes connect subscribers, auto-sends the cached auth token,
	 * and resolves the one-shot `connect()` callback.
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
	 * Invokes disconnect subscribers and resolves the one-shot `close()` callback.
	 */
	onDisconnectHandler(): void {
		this._onDisconnectHandler.invoke();

		if (this._onSocketDisconnect != null) {
			this._onSocketDisconnect();
			this._onSocketDisconnect = null;
		}
	}

	/**
	 * Registers the raw event callback used by the SDK consumer.
	 */
	setOnEventHandler(_onEventHandler: Action1<GNHashtable>): void {
		this._onEventHandler = _onEventHandler;
	}

	/**
	 * Dispatches a decoded socket event to registered handlers.
	 */
	onEventHandler(obj: GNHashtable): void {
		if (this._onEventHandler != null) this._onEventHandler(obj);
	}

	/**
	 * Registers the callback that receives decoded transport responses.
	 */
	setOnResponseHandler(_onResponseHandler: Action1<GNHashtable>): void {
		this._onResponseHandler = _onResponseHandler;
	}

	/**
	 * Processes a raw response payload and resolves the pending callback.
	 */
	onResponseHandler(obj: GNHashtable): void {
		if (this._onResponseHandler != null) this._onResponseHandler(obj);
	}

	/**
	 * Drains buffered response and event packets on the current service tick.
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
