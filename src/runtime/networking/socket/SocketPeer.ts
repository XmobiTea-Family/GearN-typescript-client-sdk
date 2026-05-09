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
 * High-level socket peer used by {@link NetworkingPeer} and ultimately
 * by {@link GNNetwork}.
 *
 * Bridges the queue / timeout machinery in {@link PeerBase} with the
 * socket-specific transport in {@link NetworkingSocketPeerBase} (the
 * concrete client today is {@link NetworkingPeerSocketIOClient}).
 *
 * Responsibilities:
 * - Build and configure the underlying socket.io client during
 *   {@link initGNSocketObject}, then mirror the response / event
 *   callbacks back into this class.
 * - Maintain a per-event-code dispatch table populated from every
 *   class registered through `@IServerEventHandler.registerEvent`,
 *   plus a runtime-add path via {@link subscriberAServerEventHandler}.
 * - Forward connect / disconnect / event subscriptions to the
 *   transport.
 * - Override {@link send} to log the outbound frame and apply the
 *   default timeout fallback before delegating to the transport.
 */
export class SocketPeer extends PeerBase {
	/** Concrete low-level socket.io client. */
	private networkingSocketPeerBase: NetworkingSocketPeerBase;

	/**
	 * Per-event-code dispatch table. Each entry is the ordered list
	 * of handler instances that registered against the matching
	 * event code.
	 */
	private serverEventHandlersDict: { [k: string]: IServerEventHandler[]; };
	/**
	 * Single-slot raw observer that receives every decoded event.
	 * Replaced through {@link setOnEventHandler}; coexists with the
	 * typed dispatch table.
	 */
	private _onEventHandler: Action1<OperationEvent>;

	/**
	 * Returns the socket.io session id assigned at connect time, or
	 * an empty string when disconnected.
	 */
	getClientId(): string {
		return this.networkingSocketPeerBase.clientId;
	}

	/**
	 * Returns whether the underlying socket.io client is in the
	 * connected state.
	 */
	isConnected(): boolean {
		return this.networkingSocketPeerBase.isWsConnected;
	}

	/**
	 * Pushes the cached auth token through the socket auth frame.
	 * Delegates to the transport implementation.
	 */
	sendRequestAuthSocket(): void {
		this.networkingSocketPeerBase.sendRequestAuthSocket();
	}

	/**
	 * Walks every constructor registered through
	 * {@link IServerEventHandler.registerEvent} and instantiates one
	 * handler instance per registered class.
	 *
	 * Why one per class: the registry stores **classes** to keep the
	 * decorator API ergonomic; `SocketPeer` materialises one instance
	 * per class on init so each handler can hold its own state if
	 * needed. Multiple registrations against the same event code are
	 * preserved — they are dispatched in registration order.
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
	 * Adds a runtime-built handler instance to the dispatch table.
	 *
	 * Used by {@link GNNetwork.subscriberServerEventHandler} when an
	 * application registers a handler that does not use the
	 * decorator-based registry.
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
	 * Builds the underlying socket.io client and wires the
	 * response / event callbacks back into this class.
	 *
	 * Lifecycle:
	 * 1. Validate the global server settings.
	 * 2. Capture the `useSocket` flag into {@link isUse} so the queue
	 *    short-circuits when the socket transport is disabled.
	 * 3. Instantiate {@link NetworkingPeerSocketIOClient} and call
	 *    `init` + `reInitNewSocket` so the underlying client is
	 *    fully configured.
	 * 4. Bind the transport's response / event callbacks to
	 *    {@link onResponseHandler} (inherited from
	 *    {@link PeerBase}) and {@link onEventHandler} on this
	 *    class.
	 * 5. Materialise every decorator-registered server event handler
	 *    via {@link subscriberServerEventHandler}.
	 *
	 * @throws Error when the global server settings are missing.
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
	 * Forwards a connect callback to the underlying transport's
	 * multi-subscriber list. See
	 * {@link GNNetwork.subscriberOnConnectHandler}.
	 */
	setOnConnectHandler(_onConnectHandler: Action0): void {
		this.networkingSocketPeerBase.setOnConnectHandler(_onConnectHandler);
	}

	/**
	 * Forwards a disconnect callback to the underlying transport's
	 * multi-subscriber list. See
	 * {@link GNNetwork.subscriberOnDisconnectHandler}.
	 */
	setOnDisconnectHandler(_onDisconnectHandler: Action0): void {
		this.networkingSocketPeerBase.setOnDisconnectHandler(_onDisconnectHandler);
	}

	/**
	 * Removes a connect callback from the underlying transport.
	 * No-op when the reference is not currently subscribed.
	 */
	removeOnConnectHandler(_onConnectHandler: Action0): void {
		this.networkingSocketPeerBase.removeOnConnectHandler(_onConnectHandler);
	}

	/**
	 * Removes a disconnect callback from the underlying transport.
	 * No-op when the reference is not currently subscribed.
	 */
	removeOnDisconnectHandler(_onDisconnectHandler: Action0): void {
		this.networkingSocketPeerBase.removeOnDisconnectHandler(_onDisconnectHandler);
	}

	/**
	 * Opens the underlying socket connection. The optional callback
	 * is fired once after the next successful connect.
	 */
	connect(_onSocketConnect: Action0): void {
		this.networkingSocketPeerBase.connect(_onSocketConnect);
	}

	/**
	 * Closes the underlying socket connection. The optional callback
	 * is fired once after the next observed disconnect.
	 */
	disconnect(_onSocketDisconnect: Action0): void {
		this.networkingSocketPeerBase.close(_onSocketDisconnect);
	}

	/**
	 * Replaces the single-slot raw event observer. This is the
	 * callback {@link GNNetwork.setOnEventHandler} ultimately writes
	 * into.
	 */
	setOnEventHandler(_onEventHandler: Action1<OperationEvent>): void {
		this._onEventHandler = _onEventHandler;
	}

	/**
	 * Sends a queued operation through the underlying transport.
	 *
	 * Substitutes the SDK-wide
	 * {@link OperationRequest.defaultTimeOut} sentinel with the
	 * configured `defaultTimeoutInSeconds` so the timeout sweep on
	 * {@link PeerBase.service} uses the real value rather than the
	 * sentinel. Then chains into `super.send(...)` so the in-flight
	 * map records the request id, logs the outbound frame, and
	 * finally delegates to
	 * {@link NetworkingSocketPeerBase.send}.
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
	 * Logs a diagnostic line whenever the queue accepts a new
	 * pending entry. The actual queueing is performed by
	 * {@link PeerBase.enqueue}; this override only adds telemetry.
	 */
	protected override onEnqueue(operationPending: OperationPending): void {
		GNDebug.log("[GN Socket ENQUEUE] " + operationPending.getOperationRequest().toString());
	}

	/**
	 * Decodes a raw event payload, fans it out to subscribers and
	 * logs the dispatch.
	 *
	 * Steps:
	 * 1. Read `EventCode` and the `Parameters` sub-table from the
	 *    raw frame, producing a typed {@link OperationEvent}.
	 * 2. Log a `[GN Socket EVENT]` diagnostic line.
	 * 3. Invoke the single-slot raw observer when registered.
	 * 4. Look up the typed handler list for the event code and
	 *    invoke each registered handler in order.
	 *
	 * Unrecognised event codes (no handler registered) are silently
	 * dropped after the raw-observer call.
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
	 * Drives one tick of the peer.
	 *
	 * Order matters:
	 * 1. {@link PeerBase.service} runs first so timeouts are swept
	 *    and at most one queued request is dispatched.
	 * 2. The transport's own service hook drains any inbound packet
	 *    buffers (response + event). This split ensures the SDK
	 *    response handler sees responses for requests it just
	 *    dispatched on the same tick.
	 */
	override service(): void {
		super.service();

		this.networkingSocketPeerBase.service();
	}
}
