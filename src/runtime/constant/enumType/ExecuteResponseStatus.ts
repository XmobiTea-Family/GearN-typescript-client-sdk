/**
 * Result discriminator returned by `executeFunction*` operations on
 * `GNNetwork.cloudScript`.
 *
 * CloudScript runs server-side scripts on demand — this enum
 * distinguishes the four well-known failure modes from a clean
 * success so the application can show the right error message.
 *
 * Surfaced on
 * `CloudScriptModels.ExecuteFunctionResponseData.executeResponseStatus`.
 */
export enum ExecuteResponseStatus {
    /**
     * Function ran to completion and returned a result. Inspect
     * `executeResult` for the script's output.
     */
    Ok = 1,

    /**
     * Function ran but threw an exception. Inspect
     * `executeException` / `debugMessage` for the captured error.
     */
    Exception = 2,

    /**
     * The script version exists but does not export a function
     * with the requested name.
     */
    FunctionNameNotFound = 3,

    /**
     * The selected script version is invalid, missing, or has
     * been retired.
     */
    VersionInvalid = 4,

    /**
     * The function exceeded the configured execution-time limit
     * and was aborted.
     */
    Timeout = 5,

}
