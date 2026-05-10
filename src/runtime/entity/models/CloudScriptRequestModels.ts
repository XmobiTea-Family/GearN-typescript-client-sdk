import { OperationCode } from "./../../constant/OperationCode";
import { RequestRole } from "./../../constant/enumType/RequestRole";
import { RequestType } from "./../../constant/enumType/RequestType";
import { CustomOperationRequestAbstract } from "./../request/CustomOperationRequest";
import { CloudScriptModels } from "./CloudScriptModels";

/**
 * Typed request wrappers for the CloudScript domain.
 *
 * Each class extends {@link CustomOperationRequestAbstract} and
 * binds a typed `*RequestData` DTO from
 * {@link CloudScriptModels} to:
 * - the matching {@link OperationCode};
 * - the {@link RequestType.CloudScript} domain;
 * - the appropriate {@link RequestRole} based on the wrapper
 *   name prefix.
 *
 * Both execution wrappers (`ExecuteFunction*`) and management
 * wrappers (`AddFunction*`, `SetFunction*`, etc.) share the
 * same {@link RequestType.CloudScript} value — they are
 * distinguished only by their operation code and required
 * role.
 */
export namespace CloudScriptRequestModels {
    /**
     * Maps the AddFunction operation to a typed request wrapper.
     */
    export class AddFunctionOperationRequest extends CustomOperationRequestAbstract<CloudScriptModels.AddFunctionRequestData> {
        protected override operationCode: string = OperationCode.AddFunction;
        protected override requestType: RequestType = RequestType.CloudScript;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new AddFunctionOperationRequest instance.
         */
        constructor(requestData: CloudScriptModels.AddFunctionRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = CloudScriptModels.AddFunctionRequestData;
        }
    }

    /**
     * Maps the ServerAddFunction operation to a typed request wrapper.
     */
    export class ServerAddFunctionOperationRequest extends AddFunctionOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerAddFunctionOperationRequest instance.
         */
        constructor(requestData: CloudScriptModels.ServerAddFunctionRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = CloudScriptModels.ServerAddFunctionRequestData;
        }
    }

    /**
     * Maps the AdminAddFunction operation to a typed request wrapper.
     */
    export class AdminAddFunctionOperationRequest extends AddFunctionOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminAddFunctionOperationRequest instance.
         */
        constructor(requestData: CloudScriptModels.AdminAddFunctionRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = CloudScriptModels.AdminAddFunctionRequestData;
        }
    }

    /**
     * Maps the EditFunction operation to a typed request wrapper.
     */
    export class EditFunctionOperationRequest extends CustomOperationRequestAbstract<CloudScriptModels.EditFunctionRequestData> {
        protected override operationCode: string = OperationCode.EditFunction;
        protected override requestType: RequestType = RequestType.CloudScript;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new EditFunctionOperationRequest instance.
         */
        constructor(requestData: CloudScriptModels.EditFunctionRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = CloudScriptModels.EditFunctionRequestData;
        }
    }

    /**
     * Maps the ServerEditFunction operation to a typed request wrapper.
     */
    export class ServerEditFunctionOperationRequest extends EditFunctionOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerEditFunctionOperationRequest instance.
         */
        constructor(requestData: CloudScriptModels.ServerEditFunctionRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = CloudScriptModels.ServerEditFunctionRequestData;
        }
    }

    /**
     * Maps the AdminEditFunction operation to a typed request wrapper.
     */
    export class AdminEditFunctionOperationRequest extends EditFunctionOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminEditFunctionOperationRequest instance.
         */
        constructor(requestData: CloudScriptModels.AdminEditFunctionRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = CloudScriptModels.AdminEditFunctionRequestData;
        }
    }

    /**
     * Maps the ExecuteFunction operation to a typed request wrapper.
     */
    export class ExecuteFunctionOperationRequest extends CustomOperationRequestAbstract<CloudScriptModels.ExecuteFunctionRequestData> {
        protected override operationCode: string = OperationCode.ExecuteFunction;
        protected override requestType: RequestType = RequestType.CloudScript;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new ExecuteFunctionOperationRequest instance.
         */
        constructor(requestData: CloudScriptModels.ExecuteFunctionRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = CloudScriptModels.ExecuteFunctionRequestData;
        }
    }

    /**
     * Maps the ServerExecuteFunction operation to a typed request wrapper.
     */
    export class ServerExecuteFunctionOperationRequest extends ExecuteFunctionOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerExecuteFunctionOperationRequest instance.
         */
        constructor(requestData: CloudScriptModels.ServerExecuteFunctionRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = CloudScriptModels.ServerExecuteFunctionRequestData;
        }
    }

    /**
     * Maps the AdminExecuteFunction operation to a typed request wrapper.
     */
    export class AdminExecuteFunctionOperationRequest extends ExecuteFunctionOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminExecuteFunctionOperationRequest instance.
         */
        constructor(requestData: CloudScriptModels.AdminExecuteFunctionRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = CloudScriptModels.AdminExecuteFunctionRequestData;
        }
    }

    /**
     * Maps the GetFunction operation to a typed request wrapper.
     */
    export class GetFunctionOperationRequest extends CustomOperationRequestAbstract<CloudScriptModels.GetFunctionRequestData> {
        protected override operationCode: string = OperationCode.GetFunction;
        protected override requestType: RequestType = RequestType.CloudScript;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetFunctionOperationRequest instance.
         */
        constructor(requestData: CloudScriptModels.GetFunctionRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = CloudScriptModels.GetFunctionRequestData;
        }
    }

    /**
     * Maps the ServerGetFunction operation to a typed request wrapper.
     */
    export class ServerGetFunctionOperationRequest extends GetFunctionOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerGetFunctionOperationRequest instance.
         */
        constructor(requestData: CloudScriptModels.ServerGetFunctionRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = CloudScriptModels.ServerGetFunctionRequestData;
        }
    }

    /**
     * Maps the AdminGetFunction operation to a typed request wrapper.
     */
    export class AdminGetFunctionOperationRequest extends GetFunctionOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminGetFunctionOperationRequest instance.
         */
        constructor(requestData: CloudScriptModels.AdminGetFunctionRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = CloudScriptModels.AdminGetFunctionRequestData;
        }
    }

    /**
     * Maps the GetFunctions operation to a typed request wrapper.
     */
    export class GetFunctionsOperationRequest extends CustomOperationRequestAbstract<CloudScriptModels.GetFunctionsRequestData> {
        protected override operationCode: string = OperationCode.GetFunctions;
        protected override requestType: RequestType = RequestType.CloudScript;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetFunctionsOperationRequest instance.
         */
        constructor(requestData: CloudScriptModels.GetFunctionsRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = CloudScriptModels.GetFunctionsRequestData;
        }
    }

    /**
     * Maps the ServerGetFunctions operation to a typed request wrapper.
     */
    export class ServerGetFunctionsOperationRequest extends GetFunctionsOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerGetFunctionsOperationRequest instance.
         */
        constructor(requestData: CloudScriptModels.ServerGetFunctionsRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = CloudScriptModels.ServerGetFunctionsRequestData;
        }
    }

    /**
     * Maps the AdminGetFunctions operation to a typed request wrapper.
     */
    export class AdminGetFunctionsOperationRequest extends GetFunctionsOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminGetFunctionsOperationRequest instance.
         */
        constructor(requestData: CloudScriptModels.AdminGetFunctionsRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = CloudScriptModels.AdminGetFunctionsRequestData;
        }
    }
}
