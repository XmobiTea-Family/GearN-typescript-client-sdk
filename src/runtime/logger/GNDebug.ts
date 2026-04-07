/**
 * Enumerates values for LogType.
 */
export enum LogType {
	Off = 0,
	Exception = 1,
	Error = 2,
	Warning = 3,
	All = 4,
}

/**
 * Centralizes SDK logging and respects the configured `LogType`.
 */
export class GNDebug {
	private static _logType: LogType;
	/**
	 * Updates the global log level used by the SDK.
	 */
	public static setLogType(logType: LogType) {
		this._logType = logType;
	}

	/**
	 * Writes a verbose log message when the current log level allows it.
	 */
	public static log(message: any): void {
		if (this._logType >= LogType.All)
			console.log(message);
	}

	/**
	 * Writes an exception when exception logging is enabled.
	 */
	public static logException(exception: Error): void {
		if (this._logType >= LogType.Exception)
			console.error(exception);
	}

	/**
	 * Writes a warning when warning logging is enabled.
	 */
	public static logWarning(message: any): void {
		if (this._logType >= LogType.Warning)
			console.warn(message);
	}

	/**
	 * Writes an error when error logging is enabled.
	 */
	public static logError(message: any): void {
		if (this._logType >= LogType.Error)
			console.error(message);
	}

}
