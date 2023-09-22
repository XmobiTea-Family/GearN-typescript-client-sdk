import { OperationCode } from "../../constant/OperationCode";
import { RequestRole } from "../../constant/enumType/RequestRole";
import { RequestType } from "../../constant/enumType/RequestType";
import { CustomOperationRequestAbstract } from "../request/CustomOperationRequest";
import { ContentModels } from "./ContentModels";

export module ContentRequestModels {
	export class CreateNewFileUploadInfoOperationRequest extends CustomOperationRequestAbstract<ContentModels.CreateNewFileUploadInfoRequestData> {
		protected override operationCode: number = OperationCode.CreateNewFileUploadInfo;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Content;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: ContentModels.CreateNewFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerCreateNewFileUploadInfoOperationRequest extends CreateNewFileUploadInfoOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: ContentModels.CreateNewFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminCreateNewFileUploadInfoOperationRequest extends CreateNewFileUploadInfoOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: ContentModels.CreateNewFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetContentDataOperationRequest extends CustomOperationRequestAbstract<ContentModels.GetContentDataRequestData> {
		protected override operationCode: number = OperationCode.GetContentData;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Content;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: ContentModels.GetContentDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetContentDataOperationRequest extends GetContentDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: ContentModels.GetContentDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetContentDataOperationRequest extends GetContentDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: ContentModels.GetContentDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetFileUploadInfoListOperationRequest extends CustomOperationRequestAbstract<ContentModels.GetFileUploadInfoListRequestData> {
		protected override operationCode: number = OperationCode.GetFileUploadInfoList;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Content;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: ContentModels.GetFileUploadInfoListRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetFileUploadInfoListOperationRequest extends GetFileUploadInfoListOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: ContentModels.GetFileUploadInfoListRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetFileUploadInfoListOperationRequest extends GetFileUploadInfoListOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: ContentModels.GetFileUploadInfoListRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetFileUploadInfoOperationRequest extends CustomOperationRequestAbstract<ContentModels.GetFileUploadInfoRequestData> {
		protected override operationCode: number = OperationCode.GetFileUploadInfo;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Content;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: ContentModels.GetFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetFileUploadInfoOperationRequest extends GetFileUploadInfoOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: ContentModels.GetFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetFileUploadInfoOperationRequest extends GetFileUploadInfoOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: ContentModels.GetFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class RemoveFileUploadInfoOperationRequest extends CustomOperationRequestAbstract<ContentModels.RemoveFileUploadInfoRequestData> {
		protected override operationCode: number = OperationCode.RemoveFileUploadInfo;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Content;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: ContentModels.RemoveFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerRemoveFileUploadInfoOperationRequest extends RemoveFileUploadInfoOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: ContentModels.RemoveFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminRemoveFileUploadInfoOperationRequest extends RemoveFileUploadInfoOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: ContentModels.RemoveFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class RequestDownloadFileUploadInfoOperationRequest extends CustomOperationRequestAbstract<ContentModels.RequestDownloadFileUploadInfoRequestData> {
		protected override operationCode: number = OperationCode.RequestDownloadFileUploadInfo;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Content;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: ContentModels.RequestDownloadFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerRequestDownloadFileUploadInfoOperationRequest extends RequestDownloadFileUploadInfoOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: ContentModels.RequestDownloadFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminRequestDownloadFileUploadInfoOperationRequest extends RequestDownloadFileUploadInfoOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: ContentModels.RequestDownloadFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetContentDataOperationRequest extends CustomOperationRequestAbstract<ContentModels.SetContentDataRequestData> {
		protected override operationCode: number = OperationCode.SetContentData;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Content;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: ContentModels.SetContentDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetContentDataOperationRequest extends SetContentDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: ContentModels.SetContentDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetContentDataOperationRequest extends SetContentDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: ContentModels.SetContentDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

}
