import { LogType } from "./../logger/GNDebug";

/**
 * Selects the payload format used by HTTP and socket transports.
 */
export enum MessageType {
	Json = 1,
	MsgPack = 2,
}

/**
 * Describes the full runtime configuration accepted by GNServerSettings.config.
 */
export interface GNServerSettingsOptions {
	serverAddress: string;
	serverPort: number;
	serverSocketPort: number;
	useSsl: boolean;
	useSocket: boolean;
	useHttp: boolean;

	defaultTimeoutInSeconds: number;
	messageType: MessageType;
	sendRate: number;
	reconnectDelay: number;
	pingInterval: number;
	pingTimeout: number;

	adminSecretKey: string;
	serverSecretKey: string;
	clientSecretKey: string;

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

	private adminSecretKey: string;
	private serverSecretKey: string;
	private clientSecretKey: string;

	private logType: LogType = LogType.All;

	private useReverseProxy: boolean = false;

	/**
	 * Applies a complete configuration snapshot to the current settings instance.
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

		this.adminSecretKey = options.adminSecretKey;
		this.serverSecretKey = options.serverSecretKey;
		this.clientSecretKey = options.clientSecretKey;

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
	 */
	public getMessageType(): MessageType {
		return this.messageType;
	}

	/**
	 * Updates the payload format preferred by the SDK.
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
	 * Returns the admin secret key used when RequestRole.Admin is selected.
	 */
	public getAdminSecretKey(): string {
		return this.adminSecretKey;
	}

	/**
	 * Updates the admin secret key used when RequestRole.Admin is selected.
	 */
	public setAdminSecretKey(adminSecretKey: string): void {
		this.adminSecretKey = adminSecretKey;
	}

	/**
	 * Returns the server secret key used when RequestRole.Server is selected.
	 */
	public getServerSecretKey(): string {
		return this.serverSecretKey;
	}

	/**
	 * Updates the server secret key used when RequestRole.Server is selected.
	 */
	public setServerSecretKey(serverSecretKey: string): void {
		this.serverSecretKey = serverSecretKey;
	}

	/**
	 * Returns the client secret key used when RequestRole.Client is selected.
	 */
	public getClientSecretKey(): string {
		return this.clientSecretKey;
	}

	/**
	 * Updates the client secret key used when RequestRole.Client is selected.
	 */
	public setClientSecretKey(clientSecretKey: string): void {
		this.clientSecretKey = clientSecretKey;
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