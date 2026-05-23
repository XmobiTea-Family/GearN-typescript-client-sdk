import { GNArray, GNHashtable } from "./../../common/GNData";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";

/**
 * Reusable request and response DTOs for the CloudScript
 * domain.
 *
 * Two distinct flows live here:
 *
 * 1. **Function execution** — `ExecuteFunctionRequestData` /
 *    `ExecuteFunctionResponseData`. The application invokes a
 *    named function inside a specific script version and
 *    receives the result, which carries an
 *    {@link ExecuteResponseStatus} discriminator. Available to
 *    Client / Server / Admin roles depending on the backend
 *    permission table.
 *
 * 2. **Function management** — `AddFunctionRequestData` /
 *    `SetFunctionRequestData` / `RemoveFunctionRequestData` /
 *    version-management DTOs. Reserved for Server / Admin
 *    callers in practice; the dashboard is the primary
 *    consumer.
 *
 * Validation rules declared on each `@*DataMember` decorator
 * are enforced server-side; failures surface as
 * {@link InvalidMember} entries.
 */
export namespace CloudScriptModels {
    /**
     * Creates a new CloudScript version from raw script source.
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
     * Updates execution flags for an existing CloudScript version without changing its source code.
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
     * Executes one function from the selected CloudScript version.
     */
    export class ExecuteFunctionRequestData {
        /**
         * Optional self-target shortcut on the client route; trusted routes require it through derived classes.
         */
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        /**
         * Function name inside the script version, not the version identifier itself.
         */
        @StringDataMember({ code: ParameterCode.FunctionName, minLength: 3, maxLength: 30, mustNonNull: true })
        public functionName: string;

        /**
         * Arbitrary payload forwarded to the CloudScript function.
         */
        @DataMember({ code: ParameterCode.FunctionParameters, isOptional: true })
        public functionParameters?: any;

        /**
         * Optional version override; when omitted, backend execution rules decide which live version is used.
         */
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
     * Returns the created version plus backend validation feedback.
     */
    export class AddFunctionResponseData {
        @StringDataMember({ code: ParameterCode.Version })
        public version: string;

        @StringDataMember({ code: ParameterCode.ErrorMessage })
        public errorMessage: string;

    }

    /**
     * Returns backend validation feedback for an edit workflow.
     */
    export class EditFunctionResponseData {
        @StringDataMember({ code: ParameterCode.ErrorMessage })
        public errorMessage: string;

    }

    /**
     * Returns runtime telemetry and function output for one execution.
     */
    export class ExecuteFunctionResponseData {
        /**
         * Raw execution status code returned by the backend.
         * This field map with enum ExecuteResponseStatus.
         */
        @NumberDataMember({ code: ParameterCode.Status })
        public status: number;

        @NumberDataMember({ code: ParameterCode.ExecutionTimeInMs })
        public executionTimeInMs: number;

        @NumberDataMember({ code: ParameterCode.MemoryUsedInBytes })
        public memoryUsedInBytes: number;

        /**
         * Arbitrary function return value.
         */
        @DataMember({ code: ParameterCode.FunctionResult })
        public functionResult: any;

        @StringDataMember({ code: ParameterCode.ErrorMessage })
        public errorMessage: string;

        /**
         * Ordered execution logs captured during the function run.
         */
        @GNArrayDataMember({ code: ParameterCode.FunctionLogs, elementCls: String })
        public functionLogs: Array<string>;

    }

    /**
     * Returns one full CloudScript version snapshot.
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
     * Describes one lightweight function-version summary.
     */
    export class FunctionResponseData {
        @StringDataMember({ code: ParameterCode.Version })
        public version: string;

        @BooleanDataMember({ code: ParameterCode.CanExecute })
        public canExecute: boolean;

    }

    /**
     * Returns the available function-version list plus latest/live pointers.
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
