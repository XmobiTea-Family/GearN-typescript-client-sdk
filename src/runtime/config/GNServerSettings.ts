import { LogType } from "./../logger/GNDebug";

export interface GNServerSettingsOptions {
    serverAddress: string;
    serverPort: number;
    useSsl: boolean;
    useSocket: boolean;
    useHttp: boolean;

    sendRate: number;
    reconnectDelay: number;
    pingInterval: number;
    pingTimeout: number;

    codeCanSendNotAuthorized: number[];
    gnServerSourcePath: string;

    logType: LogType;
}

export class GNServerSettings {
    private serverAddress: string = "127.0.0.1";
    private serverPort: number = 2202;
    private useSsl: boolean = false;
    private useSocket: boolean = true;
    private useHttp: boolean = true;

    private sendRate: number = 20;
    private reconnectDelay: number = 5000;
    private pingInterval: number = 20000;
    private pingTimeout: number = 20000;

    private codeCanSendNotAuthorized: number[];
    private gnServerSourcePath: string;

    private logType: LogType = LogType.All;

    public config(options: GNServerSettingsOptions): void {
        this.serverAddress = options.serverAddress;
        this.serverPort = options.serverPort;
        this.useSsl = options.useSsl;
        this.useSocket = options.useSocket;
        this.useHttp = options.useHttp;

        this.sendRate = options.sendRate;
        this.reconnectDelay = options.reconnectDelay;
        this.pingInterval = options.pingInterval;
        this.pingTimeout = options.pingTimeout;

        this.codeCanSendNotAuthorized = options.codeCanSendNotAuthorized;
        this.gnServerSourcePath = options.gnServerSourcePath;

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

    public getCodeCanSendNotAuthorized(): number[] {
        return this.codeCanSendNotAuthorized;
    }

    public setCodeCanSendNotAuthorized(codeCanSendNotAuthorized: number[]): void {
        this.codeCanSendNotAuthorized = codeCanSendNotAuthorized;
    }

    public getGNServerSourcePath(): string {
        return this.gnServerSourcePath;
    }

    public setGNServerSourcePath(gnServerSourcePath: string): void {
        this.gnServerSourcePath = gnServerSourcePath;
    }

    public getLogType(): LogType {
        return this.logType;
    }

    public setLogType(logType: LogType): void {
        this.logType = logType;
    }

    public getSocketUrl(): string {
        if (this.serverPort < 0) return (this.useSsl ? "https" : "http") + "://" + this.serverAddress;
        else return (this.useSsl ? "https" : "http") + "://" + this.serverAddress + ":" + this.getServerPort;
    }

    public getHttpUrl(): string {
        if (this.serverPort < 0) return (this.isUseSsl ? "https" : "http") + "://" + this.serverAddress;
        else return (this.useSsl ? "https" : "http") + "://" + this.serverAddress + ":" + this.serverPort;
    }

}
