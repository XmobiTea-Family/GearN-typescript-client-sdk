import { CustomOperationResponseAbstract } from "./../response/CustomOperationResponse";
import { CloudScriptModels } from "./CloudScriptModels";

export namespace CloudScriptResponseModels {
    export class AddFunctionOperationResponse extends CustomOperationResponseAbstract<CloudScriptModels.AddFunctionResponseData> {

        constructor() {
            super();
            this.responseDataCls = CloudScriptModels.AddFunctionResponseData;
        }
    }

    export class EditFunctionOperationResponse extends CustomOperationResponseAbstract<CloudScriptModels.EditFunctionResponseData> {

        constructor() {
            super();
            this.responseDataCls = CloudScriptModels.EditFunctionResponseData;
        }
    }

    export class ExecuteFunctionOperationResponse extends CustomOperationResponseAbstract<CloudScriptModels.ExecuteFunctionResponseData> {

        constructor() {
            super();
            this.responseDataCls = CloudScriptModels.ExecuteFunctionResponseData;
        }
    }

    export class GetFunctionOperationResponse extends CustomOperationResponseAbstract<CloudScriptModels.GetFunctionResponseData> {

        constructor() {
            super();
            this.responseDataCls = CloudScriptModels.GetFunctionResponseData;
        }
    }

    export class GetFunctionsOperationResponse extends CustomOperationResponseAbstract<CloudScriptModels.GetFunctionsResponseData> {

        constructor() {
            super();
            this.responseDataCls = CloudScriptModels.GetFunctionsResponseData;
        }
    }

}
