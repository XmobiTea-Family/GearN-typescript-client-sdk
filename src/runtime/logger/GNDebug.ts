export enum LogType {
    Off = 0,
    Exception = 1,
    Error = 2,
    Warning = 3,
    All = 4,
}

export class GNDebug {
    private static _logType: LogType;
    public static setLogType(logType: LogType) {
        this._logType = logType;
    }

    public static log(message: any): void {
        if (this._logType >= LogType.All)
            console.log(message);
    }

    public static logException(exception: Error): void {
        if (this._logType >= LogType.Exception)
            console.error(exception);
    }

    public static logWarning(message: any): void {
        if (this._logType >= LogType.Warning)
            console.warn(message);
    }

    public static logError(message: any): void {
        if (this._logType >= LogType.Error)
            console.error(message);
    }

}
