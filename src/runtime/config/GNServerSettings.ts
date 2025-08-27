import { LogType } from "./../logger/GNDebug";

export enum MessageType {
	Json = 1,
	MsgPack = 2,
}

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

	public getServerAddress(): string {
		return this.serverAddress;
	}

	public setServerAddress(serverAddress: string): void {
		this.serverAddress = serverAddress;
	}

	public getServerPort(): number {
		return this.serverPort;
	}

	public setServerPort(serverPort: number): void {
		this.serverPort = serverPort;
	}

	public getServerSocketPort(): number {
		return this.serverSocketPort;
	}

	public setServerSocketPort(serverSocketPort: number): void {
		this.serverSocketPort = serverSocketPort;
	}

	public isUseSsl(): boolean {
		return this.useSsl;
	}

	public setUseSsl(useSsl: boolean): void {
		this.useSsl = useSsl;
	}

	public isUseSocket(): boolean {
		return this.useSocket;
	}

	public setUseSocket(useSocket: boolean): void {
		this.useSocket = useSocket;
	}

	public isUseHttp(): boolean {
		return this.useHttp;
	}

	public setUseHttp(useHttp: boolean): void {
		this.useHttp = useHttp;
	}

	public getDefaultTimeoutInSeconds(): number {
		return this.defaultTimeoutInSeconds;
	}

	public setDefaultTimeoutInSeconds(defaultTimeoutInSeconds: number): void {
		this.defaultTimeoutInSeconds = defaultTimeoutInSeconds;
	}

	public getMessageType(): MessageType {
		return this.messageType;
	}

	public setMessageType(messageType: MessageType): void {
		this.messageType = messageType;
	}

	public getSendRate(): number {
		return this.sendRate;
	}

	public setSendRate(sendRate: number): void {
		this.sendRate = sendRate;
	}

	public getReconnectDelay(): number {
		return this.reconnectDelay;
	}

	public setReconnectDelay(reconnectDelay: number): void {
		this.reconnectDelay = reconnectDelay;
	}

	public getPingInterval(): number {
		return this.pingInterval;
	}

	public setPingInterval(pingInterval: number): void {
		this.pingInterval = pingInterval;
	}

	public getPingTimeout(): number {
		return this.pingTimeout;
	}

	public setPingTimeout(pingTimeout: number): void {
		this.pingTimeout = pingTimeout;
	}

	public getAdminSecretKey(): string {
		return this.adminSecretKey;
	}

	public setAdminSecretKey(adminSecretKey: string): void {
		this.adminSecretKey = adminSecretKey;
	}

	public getServerSecretKey(): string {
		return this.serverSecretKey;
	}

	public setServerSecretKey(serverSecretKey: string): void {
		this.serverSecretKey = serverSecretKey;
	}

	public getClientSecretKey(): string {
		return this.clientSecretKey;
	}

	public setClientSecretKey(clientSecretKey: string): void {
		this.clientSecretKey = clientSecretKey;
	}

	public getLogType(): LogType {
		return this.logType;
	}

	public setLogType(logType: LogType): void {
		this.logType = logType;
	}

	public getSocketUrl(): string {
		if (this.serverSocketPort < 0) return (this.useSsl ? "https" : "http") + "://" + this.serverAddress;
		else return (this.useSsl ? "https" : "http") + "://" + this.serverAddress + ":" + this.serverSocketPort;
	}

	public getHttpUrl(): string {
		if (this.serverPort < 0) return (this.useSsl ? "https" : "http") + "://" + this.serverAddress;
		else return (this.useSsl ? "https" : "http") + "://" + this.serverAddress + ":" + this.serverPort;
	}

	public setUseReverseProxy(useReverseProxy: boolean) {
		this.useReverseProxy = useReverseProxy;
	}

	public getUseReverseProxy(): boolean {
		return this.useReverseProxy;
	}

}
