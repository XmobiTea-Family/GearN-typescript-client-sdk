import { LogType } from "./../logger/GNDebug";

/**
 * Selects the preferred payload format used by HTTP and socket transports.
 * Browser HTTP requests configured as MsgPack are automatically downgraded to JSON by the transport.
 */
export enum MessageType {
	Json = 1,
	MsgPack = 2,
}

/**
 * Describes the full runtime configuration accepted by GNServerSettings.config.
 */
export interface GNServerSettingsOptions {
	/** Public host name or IP address exposed by the GearN server. */
	serverAddress: string;
	/** Public HTTP port. Use `-1` when a proxy exposes the default port directly. */
	serverPort: number;
	/** Public socket port. Use `-1` when a proxy exposes the default port directly. */
	serverSocketPort: number;
	/** Builds secure URLs (`https`) for HTTP and socket.io transports. */
	useSsl: boolean;
	/** Enables the socket transport and related realtime features. */
	useSocket: boolean;
	/** Enables the HTTP transport used by all public API wrappers. */
	useHttp: boolean;

	/** Default timeout applied to requests that do not override `timeout`. */
	defaultTimeoutInSeconds: number;
	/** Preferred payload format. Browser HTTP requests fall back to JSON when MsgPack is selected. */
	messageType: MessageType;
	/** Maximum send rate requested by the transport loop, expressed as messages per second. */
	sendRate: number;
	/** Reconnect delay for the socket client, expressed in milliseconds. */
	reconnectDelay: number;
	/** Ping interval for the socket client, expressed in milliseconds. */
	pingInterval: number;
	/** Ping timeout for the socket client, expressed in milliseconds. */
	pingTimeout: number;

	/** Secret key used automatically. */
	secretKey: string;

	/** Log verbosity consumed by `GNDebug`. */
	logType: LogType;
}

/**
 * Stores the shared runtime configuration used by GNNetwork and both transports.
 */
export class GNServerSettings {
	private serverAddress: string = "127.0.0.1";
	private serverPort: number = 2202;
	private serverSocketPort: number = 2901;
	private useSsl: boolean = false;
	private useSocket: boolean = true;
	private useHttp: boolean = true;

	private defaultTimeoutInSeconds: number = 20;
	private messageType: MessageType = MessageType.MsgPack;
	private sendRate: number = 20;
	private reconnectDelay: number = 5000;
	private pingInterval: number = 20000;
	private pingTimeout: number = 20000;

	private secretKey: string;

	private logType: LogType = LogType.All;

	private useReverseProxy: boolean = false;

	/**
	 * Applies a complete configuration snapshot to the current settings instance.
	 *
	 * This method replaces every configurable value stored in the object; it does not merge partial updates.
	 */
	public config(options: GNServerSettingsOptions): void {
		this.serverAddress = options.serverAddress;
		this.serverPort = options.serverPort;
		this.serverSocketPort = options.serverSocketPort;
		this.useSsl = options.useSsl;
		this.useSocket = options.useSocket;
		this.useHttp = options.useHttp;

		this.defaultTimeoutInSeconds = options.defaultTimeoutInSeconds;
		this.messageType = options.messageType;
		this.sendRate = options.sendRate;
		this.reconnectDelay = options.reconnectDelay;
		this.pingInterval = options.pingInterval;
		this.pingTimeout = options.pingTimeout;

		this.secretKey = options.secretKey;

		this.logType = options.logType;
	}

	/**
	 * Returns the configured host name or IP address.
	 */
	public getServerAddress(): string {
		return this.serverAddress;
	}

	/**
	 * Updates the host name or IP address used by both transports.
	 */
	public setServerAddress(serverAddress: string): void {
		this.serverAddress = serverAddress;
	}

	/**
	 * Returns the HTTP port used to build the base API URL.
	 */
	public getServerPort(): number {
		return this.serverPort;
	}

	/**
	 * Updates the HTTP port used to build the base API URL.
	 */
	public setServerPort(serverPort: number): void {
		this.serverPort = serverPort;
	}

	/**
	 * Returns the socket port used to build the socket URL.
	 */
	public getServerSocketPort(): number {
		return this.serverSocketPort;
	}

	/**
	 * Updates the socket port used to build the socket URL.
	 */
	public setServerSocketPort(serverSocketPort: number): void {
		this.serverSocketPort = serverSocketPort;
	}

	/**
	 * Returns whether the SDK should build HTTPS and WSS URLs.
	 */
	public isUseSsl(): boolean {
		return this.useSsl;
	}

	/**
	 * Enables or disables HTTPS and WSS URL generation.
	 */
	public setUseSsl(useSsl: boolean): void {
		this.useSsl = useSsl;
	}

	/**
	 * Returns whether socket transport is enabled.
	 */
	public isUseSocket(): boolean {
		return this.useSocket;
	}

	/**
	 * Enables or disables the socket transport.
	 */
	public setUseSocket(useSocket: boolean): void {
		this.useSocket = useSocket;
	}

	/**
	 * Returns whether HTTP transport is enabled.
	 */
	public isUseHttp(): boolean {
		return this.useHttp;
	}

	/**
	 * Enables or disables the HTTP transport.
	 */
	public setUseHttp(useHttp: boolean): void {
		this.useHttp = useHttp;
	}

	/**
	 * Returns the default timeout applied to requests that do not override it.
	 */
	public getDefaultTimeoutInSeconds(): number {
		return this.defaultTimeoutInSeconds;
	}

	/**
	 * Updates the default timeout applied to requests that do not override it.
	 */
	public setDefaultTimeoutInSeconds(defaultTimeoutInSeconds: number): void {
		this.defaultTimeoutInSeconds = defaultTimeoutInSeconds;
	}

	/**
	 * Returns the payload format preferred by the SDK.
	 * Browser HTTP requests may still fall back to JSON when MsgPack is selected.
	 */
	public getMessageType(): MessageType {
		return this.messageType;
	}

	/**
	 * Updates the payload format preferred by the SDK.
	 * Browser HTTP requests may still fall back to JSON when MsgPack is selected.
	 */
	public setMessageType(messageType: MessageType): void {
		this.messageType = messageType;
	}

	/**
	 * Returns the maximum number of messages the SDK attempts to send per second.
	 */
	public getSendRate(): number {
		return this.sendRate;
	}

	/**
	 * Updates the maximum number of messages the SDK attempts to send per second.
	 */
	public setSendRate(sendRate: number): void {
		this.sendRate = sendRate;
	}

	/**
	 * Returns the reconnect delay used by the socket client.
	 */
	public getReconnectDelay(): number {
		return this.reconnectDelay;
	}

	/**
	 * Updates the reconnect delay used by the socket client.
	 */
	public setReconnectDelay(reconnectDelay: number): void {
		this.reconnectDelay = reconnectDelay;
	}

	/**
	 * Returns the ping interval requested by the socket transport.
	 */
	public getPingInterval(): number {
		return this.pingInterval;
	}

	/**
	 * Updates the ping interval requested by the socket transport.
	 */
	public setPingInterval(pingInterval: number): void {
		this.pingInterval = pingInterval;
	}

	/**
	 * Returns the timeout used to detect stale socket connections.
	 */
	public getPingTimeout(): number {
		return this.pingTimeout;
	}

	/**
	 * Updates the timeout used to detect stale socket connections.
	 */
	public setPingTimeout(pingTimeout: number): void {
		this.pingTimeout = pingTimeout;
	}

	/**
	 * Returns the default secret key used.
	 */
	public getSecretKey(): string {
		return this.secretKey;
	}

	/**
	 * Updates the default secret key used.
	 */
	public setSecretKey(secretKey: string): void {
		this.secretKey = secretKey;
	}

	/**
	 * Returns the current log level consumed by GNDebug.
	 */
	public getLogType(): LogType {
		return this.logType;
	}

	/**
	 * Updates the current log level consumed by GNDebug.
	 */
	public setLogType(logType: LogType): void {
		this.logType = logType;
	}

	/**
	 * Builds the socket base URL from the current host, port, and SSL settings.
	 */
	public getSocketUrl(): string {
		if (this.serverSocketPort < 0) return (this.useSsl ? "https" : "http") + "://" + this.serverAddress;
		else return (this.useSsl ? "https" : "http") + "://" + this.serverAddress + ":" + this.serverSocketPort;
	}

	/**
	 * Builds the HTTP base URL from the current host, port, and SSL settings.
	 */
	public getHttpUrl(): string {
		if (this.serverPort < 0) return (this.useSsl ? "https" : "http") + "://" + this.serverAddress;
		else return (this.useSsl ? "https" : "http") + "://" + this.serverAddress + ":" + this.serverPort;
	}

	/**
	 * Enables or disables reverse-proxy mode for HTTP requests.
	 *
	 * When enabled, low-level HTTP helpers may skip adding their own request path prefix because a proxy already handles it.
	 */
	public setUseReverseProxy(useReverseProxy: boolean) {
		this.useReverseProxy = useReverseProxy;
	}

	/**
	 * Returns whether HTTP requests should be routed through a reverse proxy.
	 */
	public getUseReverseProxy(): boolean {
		return this.useReverseProxy;
	}

}
