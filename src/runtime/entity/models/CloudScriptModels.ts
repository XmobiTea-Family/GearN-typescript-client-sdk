import { GNArray, GNHashtable } from "./../../common/GNData";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";

/**
 * Groups shared data contracts for CloudScript.
 */
export namespace CloudScriptModels {
	/**
	 * Defines the request payload for AddFunction.
	 */
	export class AddFunctionRequestData {
		@StringDataMember({ code: ParameterCode.Script, minLength: 0, maxLength: Number.MAX_SAFE_INTEGER, mustNonNull: true })
		script: string;

		@BooleanDataMember({ code: ParameterCode.CanExecute })
		canExecute: boolean;

		@BooleanDataMember({ code: ParameterCode.IsLive })
		isLive: boolean;

	}

	/**
	 * Defines the request payload for ServerAddFunction.
	 */
	export class ServerAddFunctionRequestData extends AddFunctionRequestData {

	}

	/**
	 * Defines the request payload for AdminAddFunction.
	 */
	export class AdminAddFunctionRequestData extends ServerAddFunctionRequestData {
	}

	/**
	 * Defines the request payload for EditFunction.
	 */
	export class EditFunctionRequestData {
		@StringDataMember({ code: ParameterCode.Version, minLength: 7, maxLength: 7, mustNonNull: true })
		version: string;

		@BooleanDataMember({ code: ParameterCode.CanExecute })
		canExecute: boolean;

		@BooleanDataMember({ code: ParameterCode.IsLive })
		isLive: boolean;

	}

	/**
	 * Defines the request payload for ServerEditFunction.
	 */
	export class ServerEditFunctionRequestData extends EditFunctionRequestData {

	}

	/**
	 * Defines the request payload for AdminEditFunction.
	 */
	export class AdminEditFunctionRequestData extends ServerEditFunctionRequestData {
	}

	/**
	 * Defines the request payload for ExecuteFunction.
	 */
	export class ExecuteFunctionRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.FunctionName, minLength: 3, maxLength: 30, mustNonNull: true })
		public functionName: string;

		@DataMember({ code: ParameterCode.FunctionParameters, isOptional: true })
		public functionParameters?: any;

		@StringDataMember({ code: ParameterCode.Version, minLength: 7, maxLength: 7, isOptional: true })
		public version?: string;

	}

	/**
	 * Defines the request payload for ServerExecuteFunction.
	 */
	export class ServerExecuteFunctionRequestData extends ExecuteFunctionRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10 })
		public declare userId: string;

	}

	/**
	 * Defines the request payload for AdminExecuteFunction.
	 */
	export class AdminExecuteFunctionRequestData extends ServerExecuteFunctionRequestData {

	}

	/**
	 * Defines the request payload for GetFunction.
	 */
	export class GetFunctionRequestData {
		@StringDataMember({ code: ParameterCode.Version, minLength: 7, maxLength: 7, mustNonNull: true })
		version: string;

	}

	/**
	 * Defines the request payload for ServerGetFunction.
	 */
	export class ServerGetFunctionRequestData extends GetFunctionRequestData {

	}

	/**
	 * Defines the request payload for AdminGetFunction.
	 */
	export class AdminGetFunctionRequestData extends ServerGetFunctionRequestData {

	}

	/**
	 * Defines the request payload for GetFunctions.
	 */
	export class GetFunctionsRequestData {

	}

	/**
	 * Defines the request payload for ServerGetFunctions.
	 */
	export class ServerGetFunctionsRequestData extends GetFunctionsRequestData {

	}

	/**
	 * Defines the request payload for AdminGetFunctions.
	 */
	export class AdminGetFunctionsRequestData extends ServerGetFunctionsRequestData {

	}

	/**
	 * Defines the response payload for AddFunction.
	 */
	export class AddFunctionResponseData {
		@StringDataMember({ code: ParameterCode.Version })
		public version: string;

		@StringDataMember({ code: ParameterCode.ErrorMessage })
		public errorMessage: string;

	}

	/**
	 * Defines the response payload for EditFunction.
	 */
	export class EditFunctionResponseData {
		@StringDataMember({ code: ParameterCode.ErrorMessage })
		public errorMessage: string;

	}

	/**
	 * Defines the response payload for ExecuteFunction.
	 */
	export class ExecuteFunctionResponseData {
		@NumberDataMember({ code: ParameterCode.Status })
		public status: number;

		@NumberDataMember({ code: ParameterCode.ExecutionTimeInMs })
		public executionTimeInMs: number;

		@NumberDataMember({ code: ParameterCode.MemoryUsedInBytes })
		public memoryUsedInBytes: number;

		@DataMember({ code: ParameterCode.FunctionResult })
		public functionResult: any;

		@StringDataMember({ code: ParameterCode.ErrorMessage })
		public errorMessage: string;

		@GNArrayDataMember({ code: ParameterCode.FunctionLogs, elementCls: String })
		public functionLogs: Array<string>;

	}

	/**
	 * Defines the response payload for GetFunction.
	 */
	export class GetFunctionResponseData {
		@StringDataMember({ code: ParameterCode.Script })
		public script: string;

		@BooleanDataMember({ code: ParameterCode.CanExecute })
		public canExecute: boolean;

		@BooleanDataMember({ code: ParameterCode.IsLive })
		public isLive: boolean;

		@NumberDataMember({ code: ParameterCode.TsCreate })
		public tsCreate: number;

	}

	/**
	 * Defines the response payload for Function.
	 */
	export class FunctionResponseData {
		@StringDataMember({ code: ParameterCode.Version })
		public version: string;

		@BooleanDataMember({ code: ParameterCode.CanExecute })
		public canExecute: boolean;

	}

	/**
	 * Defines the response payload for GetFunctions.
	 */
	export class GetFunctionsResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: FunctionResponseData })
		public results: Array<FunctionResponseData>;

		@StringDataMember({ code: ParameterCode.LatestVersion })
		public latestVersion: string;

		@StringDataMember({ code: ParameterCode.LiveLatestVersion })
		public liveLatestVersion: string;

	}

}
