/**
 * Enumerates CloudScript execution result states returned in execute-function responses.
 */
export enum ExecuteResponseStatus {
	/**
	 * The function executed successfully.
	 */
	Ok = 1,

	/**
	 * The function executed but threw an exception.
	 */
	Exception = 2,

	/**
	 * The requested function name was not found inside the selected script version.
	 */
	FunctionNameNotFound = 3,

	/**
	 * The requested script version is invalid, missing, or not executable.
	 */
	VersionInvalid = 4,

	/**
	 * The function exceeded the allowed execution time.
	 */
	Timeout = 5,

}
