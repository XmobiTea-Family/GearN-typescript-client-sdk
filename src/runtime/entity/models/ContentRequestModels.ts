import { OperationCode } from "./../../constant/OperationCode";
import { RequestRole } from "./../../constant/enumType/RequestRole";
import { RequestType } from "./../../constant/enumType/RequestType";
import { CustomOperationRequestAbstract } from "./../request/CustomOperationRequest";
import { ContentModels } from "./ContentModels";

export namespace ContentRequestModels {
	export class CreateNewFileUploadInfoOperationRequest extends CustomOperationRequestAbstract<ContentModels.CreateNewFileUploadInfoRequestData> {
		protected override operationCode: string = OperationCode.CreateNewFileUploadInfo;
		protected override requestType: RequestType = RequestType.Content;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: ContentModels.CreateNewFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.CreateNewFileUploadInfoRequestData;
		}
	}

	export class ServerCreateNewFileUploadInfoOperationRequest extends CreateNewFileUploadInfoOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: ContentModels.ServerCreateNewFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.ServerCreateNewFileUploadInfoRequestData;
		}
	}

	export class AdminCreateNewFileUploadInfoOperationRequest extends CreateNewFileUploadInfoOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: ContentModels.AdminCreateNewFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.AdminCreateNewFileUploadInfoRequestData;
		}
	}

	export class GetContentDataOperationRequest extends CustomOperationRequestAbstract<ContentModels.GetContentDataRequestData> {
		protected override operationCode: string = OperationCode.GetContentData;
		protected override requestType: RequestType = RequestType.Content;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: ContentModels.GetContentDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.GetContentDataRequestData;
		}
	}

	export class ServerGetContentDataOperationRequest extends GetContentDataOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: ContentModels.ServerGetContentDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.ServerGetContentDataRequestData;
		}
	}

	export class AdminGetContentDataOperationRequest extends GetContentDataOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: ContentModels.AdminGetContentDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.AdminGetContentDataRequestData;
		}
	}

	export class GetFileUploadInfoListOperationRequest extends CustomOperationRequestAbstract<ContentModels.GetFileUploadInfoListRequestData> {
		protected override operationCode: string = OperationCode.GetFileUploadInfoList;
		protected override requestType: RequestType = RequestType.Content;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: ContentModels.GetFileUploadInfoListRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.GetFileUploadInfoListRequestData;
		}
	}

	export class ServerGetFileUploadInfoListOperationRequest extends GetFileUploadInfoListOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: ContentModels.ServerGetFileUploadInfoListRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.ServerGetFileUploadInfoListRequestData;
		}
	}

	export class AdminGetFileUploadInfoListOperationRequest extends GetFileUploadInfoListOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: ContentModels.AdminGetFileUploadInfoListRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.AdminGetFileUploadInfoListRequestData;
		}
	}

	export class GetFileUploadInfoOperationRequest extends CustomOperationRequestAbstract<ContentModels.GetFileUploadInfoRequestData> {
		protected override operationCode: string = OperationCode.GetFileUploadInfo;
		protected override requestType: RequestType = RequestType.Content;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: ContentModels.GetFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.GetFileUploadInfoRequestData;
		}
	}

	export class ServerGetFileUploadInfoOperationRequest extends GetFileUploadInfoOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: ContentModels.ServerGetFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.ServerGetFileUploadInfoRequestData;
		}
	}

	export class AdminGetFileUploadInfoOperationRequest extends GetFileUploadInfoOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: ContentModels.AdminGetFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.AdminGetFileUploadInfoRequestData;
		}
	}

	export class RemoveFileUploadInfoOperationRequest extends CustomOperationRequestAbstract<ContentModels.RemoveFileUploadInfoRequestData> {
		protected override operationCode: string = OperationCode.RemoveFileUploadInfo;
		protected override requestType: RequestType = RequestType.Content;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: ContentModels.RemoveFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.RemoveFileUploadInfoRequestData;
		}
	}

	export class ServerRemoveFileUploadInfoOperationRequest extends RemoveFileUploadInfoOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: ContentModels.ServerRemoveFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.ServerRemoveFileUploadInfoRequestData;
		}
	}

	export class AdminRemoveFileUploadInfoOperationRequest extends RemoveFileUploadInfoOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: ContentModels.AdminRemoveFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.AdminRemoveFileUploadInfoRequestData;
		}
	}

	export class RequestDownloadFileUploadInfoOperationRequest extends CustomOperationRequestAbstract<ContentModels.RequestDownloadFileUploadInfoRequestData> {
		protected override operationCode: string = OperationCode.RequestDownloadFileUploadInfo;
		protected override requestType: RequestType = RequestType.Content;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: ContentModels.RequestDownloadFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.RequestDownloadFileUploadInfoRequestData;
		}
	}

	export class ServerRequestDownloadFileUploadInfoOperationRequest extends RequestDownloadFileUploadInfoOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: ContentModels.ServerRequestDownloadFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.ServerRequestDownloadFileUploadInfoRequestData;
		}
	}

	export class AdminRequestDownloadFileUploadInfoOperationRequest extends RequestDownloadFileUploadInfoOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: ContentModels.AdminRequestDownloadFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.AdminRequestDownloadFileUploadInfoRequestData;
		}
	}

	export class SetContentDataOperationRequest extends CustomOperationRequestAbstract<ContentModels.SetContentDataRequestData> {
		protected override operationCode: string = OperationCode.SetContentData;
		protected override requestType: RequestType = RequestType.Content;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: ContentModels.SetContentDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.SetContentDataRequestData;
		}
	}

	export class ServerSetContentDataOperationRequest extends SetContentDataOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: ContentModels.ServerSetContentDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.ServerSetContentDataRequestData;
		}
	}

	export class AdminSetContentDataOperationRequest extends SetContentDataOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: ContentModels.AdminSetContentDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.AdminSetContentDataRequestData;
		}
	}

}
