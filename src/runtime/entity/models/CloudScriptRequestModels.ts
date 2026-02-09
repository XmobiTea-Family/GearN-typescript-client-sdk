import { OperationCode } from "./../../constant/OperationCode";
import { RequestRole } from "./../../constant/enumType/RequestRole";
import { RequestType } from "./../../constant/enumType/RequestType";
import { CustomOperationRequestAbstract } from "./../request/CustomOperationRequest";
import { CloudScriptModels } from "./CloudScriptModels";

export namespace CloudScriptRequestModels {
	export class AddFunctionOperationRequest extends CustomOperationRequestAbstract<CloudScriptModels.AddFunctionRequestData> {
		protected override operationCode: string = OperationCode.AddFunction;
		protected override requestType: RequestType = RequestType.CloudScript;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: CloudScriptModels.AddFunctionRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CloudScriptModels.AddFunctionRequestData;
		}
	}

	export class ServerAddFunctionOperationRequest extends AddFunctionOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: CloudScriptModels.ServerAddFunctionRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CloudScriptModels.ServerAddFunctionRequestData;
		}
	}

	export class AdminAddFunctionOperationRequest extends AddFunctionOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: CloudScriptModels.AdminAddFunctionRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CloudScriptModels.AdminAddFunctionRequestData;
		}
	}

	export class EditFunctionOperationRequest extends CustomOperationRequestAbstract<CloudScriptModels.EditFunctionRequestData> {
		protected override operationCode: string = OperationCode.EditFunction;
		protected override requestType: RequestType = RequestType.CloudScript;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: CloudScriptModels.EditFunctionRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CloudScriptModels.EditFunctionRequestData;
		}
	}

	export class ServerEditFunctionOperationRequest extends EditFunctionOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: CloudScriptModels.ServerEditFunctionRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CloudScriptModels.ServerEditFunctionRequestData;
		}
	}

	export class AdminEditFunctionOperationRequest extends EditFunctionOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: CloudScriptModels.AdminEditFunctionRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CloudScriptModels.AdminEditFunctionRequestData;
		}
	}

	export class ExecuteFunctionOperationRequest extends CustomOperationRequestAbstract<CloudScriptModels.ExecuteFunctionRequestData> {
		protected override operationCode: string = OperationCode.ExecuteFunction;
		protected override requestType: RequestType = RequestType.CloudScript;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: CloudScriptModels.ExecuteFunctionRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CloudScriptModels.ExecuteFunctionRequestData;
		}
	}

	export class ServerExecuteFunctionOperationRequest extends ExecuteFunctionOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: CloudScriptModels.ServerExecuteFunctionRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CloudScriptModels.ServerExecuteFunctionRequestData;
		}
	}

	export class AdminExecuteFunctionOperationRequest extends ExecuteFunctionOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: CloudScriptModels.AdminExecuteFunctionRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CloudScriptModels.AdminExecuteFunctionRequestData;
		}
	}

	export class GetFunctionOperationRequest extends CustomOperationRequestAbstract<CloudScriptModels.GetFunctionRequestData> {
		protected override operationCode: string = OperationCode.GetFunction;
		protected override requestType: RequestType = RequestType.CloudScript;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: CloudScriptModels.GetFunctionRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CloudScriptModels.GetFunctionRequestData;
		}
	}

	export class ServerGetFunctionOperationRequest extends GetFunctionOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: CloudScriptModels.ServerGetFunctionRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CloudScriptModels.ServerGetFunctionRequestData;
		}
	}

	export class AdminGetFunctionOperationRequest extends GetFunctionOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: CloudScriptModels.AdminGetFunctionRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CloudScriptModels.AdminGetFunctionRequestData;
		}
	}

	export class GetFunctionsOperationRequest extends CustomOperationRequestAbstract<CloudScriptModels.GetFunctionsRequestData> {
		protected override operationCode: string = OperationCode.GetFunctions;
		protected override requestType: RequestType = RequestType.CloudScript;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: CloudScriptModels.GetFunctionsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CloudScriptModels.GetFunctionsRequestData;
		}
	}

	export class ServerGetFunctionsOperationRequest extends GetFunctionsOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: CloudScriptModels.ServerGetFunctionsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CloudScriptModels.ServerGetFunctionsRequestData;
		}
	}

	export class AdminGetFunctionsOperationRequest extends GetFunctionsOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: CloudScriptModels.AdminGetFunctionsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CloudScriptModels.AdminGetFunctionsRequestData;
		}
	}
}
