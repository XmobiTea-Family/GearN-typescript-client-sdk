import { GNParameterCode } from "./../../constant/parameterCode/GNParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";

export namespace CloudScriptModels {
    export class AddFunctionRequestData {
        @StringDataMember({ code: GNParameterCode.Script, minLength: 0, maxLength: Number.MAX_SAFE_INTEGER, mustNonNull: true })
        script: string;

        @BooleanDataMember({ code: GNParameterCode.CanExecute })
        canExecute: boolean;

        @BooleanDataMember({ code: GNParameterCode.IsLive })
        isLive: boolean;

    }

    export class ServerAddFunctionRequestData extends AddFunctionRequestData {

    }

    export class AdminAddFunctionRequestData extends ServerAddFunctionRequestData {
    }

    export class EditFunctionRequestData {
        @StringDataMember({ code: GNParameterCode.Version, minLength: 7, maxLength: 7, mustNonNull: true })
        version: string;

        @BooleanDataMember({ code: GNParameterCode.CanExecute })
        canExecute: boolean;

        @BooleanDataMember({ code: GNParameterCode.IsLive })
        isLive: boolean;

    }

    export class ServerEditFunctionRequestData extends EditFunctionRequestData {

    }

    export class AdminEditFunctionRequestData extends ServerEditFunctionRequestData {
    }

    export class ExecuteFunctionRequestData {
        @StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        userId?: string;

        @StringDataMember({ code: GNParameterCode.FunctionName, minLength: 3, maxLength: 30, mustNonNull: true })
        functionName: string;

        @DataMember({ code: GNParameterCode.FunctionParameters, isOptional: true })
        functionParameters?: object;

        @StringDataMember({ code: GNParameterCode.Version, minLength: 7, maxLength: 7, isOptional: true })
        version: string;

    }

    export class ServerExecuteFunctionRequestData extends ExecuteFunctionRequestData {
        @StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10 })
        public declare userId: string;

    }

    export class AdminExecuteFunctionRequestData extends ServerExecuteFunctionRequestData {

    }

    export class GetFunctionRequestData {
        @StringDataMember({ code: GNParameterCode.Version, minLength: 7, maxLength: 7, mustNonNull: true })
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
        @StringDataMember({ code: GNParameterCode.Version })
        public version: string;

        @StringDataMember({ code: GNParameterCode.Message })
        public errorMessage: string;

    }

    export class EditFunctionResponseData {
        @StringDataMember({ code: GNParameterCode.Message })
        public errorMessage: string;

    }

    export class ExecuteFunctionResponseData {
        @NumberDataMember({ code: GNParameterCode.Status })
        public status: number;

        @NumberDataMember({ code: GNParameterCode.ExecutionTimeInMs })
        public executionTimeInMs: number;

        @NumberDataMember({ code: GNParameterCode.MemoryUsedInBytes })
        public memoryUsedInBytes: number;

        @DataMember({ code: GNParameterCode.FunctionResult })
        public functionResult: object;

        @StringDataMember({ code: GNParameterCode.Message })
        public errorMessage: string;

        @GNArrayDataMember({ code: GNParameterCode.FunctionLogs, elementCls: String })
        public functionLogs: Array<string>;

    }

    export class GetFunctionResponseData {
        @StringDataMember({ code: GNParameterCode.Script })
        public script: string;

        @BooleanDataMember({ code: GNParameterCode.CanExecute })
        public canExecute: boolean;

        @BooleanDataMember({ code: GNParameterCode.IsLive })
        public isLive: boolean;

        @NumberDataMember({ code: GNParameterCode.TsCreate })
        public tsCreate: number;

    }

    export class FunctionResponseData {
        @StringDataMember({ code: GNParameterCode.Version })
        public version: string;

        @BooleanDataMember({ code: GNParameterCode.CanExecute })
        public canExecute: boolean;

    }

    export class GetFunctionsResponseData {
        @GNArrayDataMember({ code: GNParameterCode.Results, elementCls: FunctionResponseData })
        public results: Array<FunctionResponseData>;

        @StringDataMember({ code: GNParameterCode.LatestVersion })
        public latestVersion: string;

        @StringDataMember({ code: GNParameterCode.LiveLatestVersion })
        public liveLatestVersion: string;

    }

}
