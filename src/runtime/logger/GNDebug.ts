/**
 * Hierarchical log verbosity levels consumed by {@link GNDebug}.
 *
 * The values are deliberately ordered so that a higher number includes every
 * lower level. The numeric ordering is what {@link GNDebug.log},
 * {@link GNDebug.logError}, {@link GNDebug.logWarning} and
 * {@link GNDebug.logException} compare against, which yields the following
 * inclusion table:
 *
 * | Configured LogType | Exception | Error | Warning | Verbose `log()` |
 * |--------------------|:---------:|:-----:|:-------:|:---------------:|
 * | `Off`     (0)      |     -     |   -   |    -    |        -        |
 * | `Exception` (1)    |     X     |   -   |    -    |        -        |
 * | `Error`   (2)      |     X     |   X   |    -    |        -        |
 * | `Warning` (3)      |     X     |   X   |    X    |        -        |
 * | `All`     (4)      |     X     |   X   |    X    |        X        |
 *
 * The default level used by the SDK is whatever `GNServerSettings.getLogType()`
 * returns — `LogType.All` until the application overrides it.
 */
export enum LogType {
    /** Suppress every category of log output. */
    Off = 0,
    /** Allow only `logException` calls to reach the console. */
    Exception = 1,
    /** Allow exceptions plus errors. */
    Error = 2,
    /** Allow exceptions, errors and warnings. */
    Warning = 3,
    /** Allow every category, including verbose `log` traces from the transports. */
    All = 4,
}

/**
 * Static logging facade used by every internal SDK module.
 *
 * The class is a thin level-gated wrapper around `console.log`,
 * `console.warn` and `console.error`. It is intentionally global so that
 * networking code, helpers and converters can all emit log lines without
 * having to thread a logger reference through every call.
 *
 * Lifecycle:
 * - The level is uninitialised until `GNNetwork.init()` calls
 *   {@link setLogType} with the value from
 *   `GNServerSettings.getLogType()`. Until that point any call to the
 *   `log*` methods will compare against `undefined` and therefore log
 *   nothing — be aware of this when adding code that runs before init.
 * - The level can be updated at runtime by calling {@link setLogType} again,
 *   which takes effect on the very next call.
 *
 * Output destination:
 * - Always `console.*` of the host runtime (browser DevTools, Node.js stdout
 *   / stderr, or the Cocos Creator log panel). The SDK does not write to a
 *   file or remote sink — wiring custom log shipping is the application's
 *   responsibility.
 *
 * Thread-safety / concurrency:
 * - JavaScript is single-threaded so no synchronisation is required around
 *   `_logType`. Mutations from inside event handlers are visible immediately.
 */
export class GNDebug {
    /**
     * Currently configured maximum verbosity level.
     *
     * Stays `undefined` until {@link setLogType} is called for the first
     * time, which is why the level comparisons in the `log*` helpers below
     * use `>=` against the requested category instead of relying on a
     * default value here.
     */
    private static _logType: LogType;

    /**
     * Replaces the global log verbosity level.
     *
     * Effect is immediate; the next call to any of the `log*` helpers uses
     * the new value. Passing {@link LogType.Off} silences the SDK
     * completely until a higher level is restored.
     *
     * @param logType New level to apply. Higher values include all lower
     *                categories (see the inclusion table on {@link LogType}).
     */
    public static setLogType(logType: LogType) {
        this._logType = logType;
    }

    /**
     * Writes a verbose trace line.
     *
     * Used by the transports to surface every queued/sent/received frame
     * (see `[GN Socket SEND]`, `[GN RECV]`, ... prefixes in the networking
     * code) plus other low-frequency informational events like the SDK
     * banner emitted from `GNNetwork.init()`.
     *
     * Only fires when the current level is {@link LogType.All}.
     *
     * @param message Anything the host `console.log` accepts — strings,
     *                objects, errors, etc. The value is forwarded as-is so
     *                custom `toString()` implementations are honoured.
     */
    public static log(message: any): void {
        if (this._logType >= LogType.All)
            console.log(message);
    }

    /**
     * Writes a captured exception via `console.error`.
     *
     * Fires for every level except {@link LogType.Off}. Prefer this over
     * {@link logError} when you have an actual `Error` instance because it
     * preserves the stack trace produced by the host runtime.
     *
     * @param exception Error instance to print. The SDK never serialises
     *                  the value first — passing a plain object is allowed
     *                  but loses the formatted stack trace.
     */
    public static logException(exception: Error): void {
        if (this._logType >= LogType.Exception)
            console.error(exception);
    }

    /**
     * Writes a non-fatal warning via `console.warn`.
     *
     * Fires when the level is at least {@link LogType.Warning}. Used by the
     * SDK for recoverable issues like missing storage features in
     * {@link StorageService} or incoming events that no handler subscribed
     * to.
     *
     * @param message Anything the host `console.warn` accepts.
     */
    public static logWarning(message: any): void {
        if (this._logType >= LogType.Warning)
            console.warn(message);
    }

    /**
     * Writes an error message via `console.error`.
     *
     * Fires when the level is at least {@link LogType.Error}. Used by the
     * SDK whenever a request cannot be sent (`isUse === false`), an unknown
     * `responseId` arrives, or any HTTP/socket failure surfaces from the
     * underlying transport.
     *
     * @param message Anything the host `console.error` accepts. For real
     *                exception objects prefer {@link logException} so the
     *                stack trace is preserved.
     */
    public static logError(message: any): void {
        if (this._logType >= LogType.Error)
            console.error(message);
    }

}
