import { CustomOperationResponseAbstract } from "./../response/CustomOperationResponse";
import { CloudScriptModels } from "./CloudScriptModels";

/**
 * Typed response wrappers for the CloudScript domain.
 *
 * Each class extends {@link CustomOperationResponseAbstract}
 * and binds a response DTO from {@link CloudScriptModels}.
 *
 * - **Execute flows** return the function result plus runtime
 *   telemetry: execution time, memory used, log lines emitted
 *   by the script, and an {@link ExecuteResponseStatus}
 *   discriminator describing the outcome
 *   (`Ok` / `Exception` / `FunctionNameNotFound` /
 *   `VersionInvalid` / `Timeout`).
 * - **Management flows** return version metadata and any
 *   validation feedback the backend produced when accepting
 *   the new function source.
 */
export namespace CloudScriptResponseModels {
	/**
	 * Maps the AddFunction operation to a typed response wrapper.
	 */
	export class AddFunctionOperationResponse extends CustomOperationResponseAbstract<CloudScriptModels.AddFunctionResponseData> {

		/**
		 * Creates a new AddFunctionOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = CloudScriptModels.AddFunctionResponseData;
		}
	}

	/**
	 * Maps the EditFunction operation to a typed response wrapper.
	 */
	export class EditFunctionOperationResponse extends CustomOperationResponseAbstract<CloudScriptModels.EditFunctionResponseData> {

		/**
		 * Creates a new EditFunctionOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = CloudScriptModels.EditFunctionResponseData;
		}
	}

	/**
	 * Maps the ExecuteFunction operation to a typed response wrapper.
	 */
	export class ExecuteFunctionOperationResponse extends CustomOperationResponseAbstract<CloudScriptModels.ExecuteFunctionResponseData> {

		/**
		 * Creates a new ExecuteFunctionOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = CloudScriptModels.ExecuteFunctionResponseData;
		}
	}

	/**
	 * Maps the GetFunction operation to a typed response wrapper.
	 */
	export class GetFunctionOperationResponse extends CustomOperationResponseAbstract<CloudScriptModels.GetFunctionResponseData> {

		/**
		 * Creates a new GetFunctionOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = CloudScriptModels.GetFunctionResponseData;
		}
	}

	/**
	 * Maps the GetFunctions operation to a typed response wrapper.
	 */
	export class GetFunctionsOperationResponse extends CustomOperationResponseAbstract<CloudScriptModels.GetFunctionsResponseData> {

		/**
		 * Creates a new GetFunctionsOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = CloudScriptModels.GetFunctionsResponseData;
		}
	}

}
