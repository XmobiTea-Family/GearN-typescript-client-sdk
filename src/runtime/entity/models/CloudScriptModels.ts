import { GNArray, GNHashtable } from "./../../common/GNData";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";

export namespace CloudScriptModels {
	export class AddFunctionRequestData {
		@StringDataMember({ code: ParameterCode.Script, minLength: 0, maxLength: Number.MAX_SAFE_INTEGER, mustNonNull: true })
		script: string;

		@BooleanDataMember({ code: ParameterCode.CanExecute })
		canExecute: boolean;

		@BooleanDataMember({ code: ParameterCode.IsLive })
		isLive: boolean;

	}

	export class ServerAddFunctionRequestData extends AddFunctionRequestData {

	}

	export class AdminAddFunctionRequestData extends ServerAddFunctionRequestData {
	}

	export class EditFunctionRequestData {
		@StringDataMember({ code: ParameterCode.Version, minLength: 7, maxLength: 7, mustNonNull: true })
		version: string;

		@BooleanDataMember({ code: ParameterCode.CanExecute })
		canExecute: boolean;

		@BooleanDataMember({ code: ParameterCode.IsLive })
		isLive: boolean;

	}

	export class ServerEditFunctionRequestData extends EditFunctionRequestData {

	}

	export class AdminEditFunctionRequestData extends ServerEditFunctionRequestData {
	}

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

	export class ServerExecuteFunctionRequestData extends ExecuteFunctionRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10 })
		public declare userId: string;

	}

	export class AdminExecuteFunctionRequestData extends ServerExecuteFunctionRequestData {

	}

	export class GetFunctionRequestData {
		@StringDataMember({ code: ParameterCode.Version, minLength: 7, maxLength: 7, mustNonNull: true })
		version: string;

	}

	export class ServerGetFunctionRequestData extends GetFunctionRequestData {

	}

	export class AdminGetFunctionRequestData extends ServerGetFunctionRequestData {

	}

	export class GetFunctionsRequestData {

	}

	export class ServerGetFunctionsRequestData extends GetFunctionsRequestData {

	}

	export class AdminGetFunctionsRequestData extends ServerGetFunctionsRequestData {

	}

	export class AddFunctionResponseData {
		@StringDataMember({ code: ParameterCode.Version })
		public version: string;

		@StringDataMember({ code: ParameterCode.ErrorMessage })
		public errorMessage: string;

	}

	export class EditFunctionResponseData {
		@StringDataMember({ code: ParameterCode.ErrorMessage })
		public errorMessage: string;

	}

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

	export class FunctionResponseData {
		@StringDataMember({ code: ParameterCode.Version })
		public version: string;

		@BooleanDataMember({ code: ParameterCode.CanExecute })
		public canExecute: boolean;

	}

	export class GetFunctionsResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: FunctionResponseData })
		public results: Array<FunctionResponseData>;

		@StringDataMember({ code: ParameterCode.LatestVersion })
		public latestVersion: string;

		@StringDataMember({ code: ParameterCode.LiveLatestVersion })
		public liveLatestVersion: string;

	}

}
