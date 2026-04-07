import { OperationCode } from "./../../constant/OperationCode";
import { RequestRole } from "./../../constant/enumType/RequestRole";
import { RequestType } from "./../../constant/enumType/RequestType";
import { CustomOperationRequestAbstract } from "./../request/CustomOperationRequest";
import { ContentModels } from "./ContentModels";

/**
 * Groups typed request contracts for Content.
 */
export namespace ContentRequestModels {
	/**
	 * Maps the CreateNewFileUploadInfo operation to a typed request wrapper.
	 */
	export class CreateNewFileUploadInfoOperationRequest extends CustomOperationRequestAbstract<ContentModels.CreateNewFileUploadInfoRequestData> {
		protected override operationCode: string = OperationCode.CreateNewFileUploadInfo;
		protected override requestType: RequestType = RequestType.Content;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new CreateNewFileUploadInfoOperationRequest instance.
		 */
		constructor(requestData: ContentModels.CreateNewFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.CreateNewFileUploadInfoRequestData;
		}
	}

	/**
	 * Maps the ServerCreateNewFileUploadInfo operation to a typed request wrapper.
	 */
	export class ServerCreateNewFileUploadInfoOperationRequest extends CreateNewFileUploadInfoOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerCreateNewFileUploadInfoOperationRequest instance.
		 */
		constructor(requestData: ContentModels.ServerCreateNewFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.ServerCreateNewFileUploadInfoRequestData;
		}
	}

	/**
	 * Maps the AdminCreateNewFileUploadInfo operation to a typed request wrapper.
	 */
	export class AdminCreateNewFileUploadInfoOperationRequest extends CreateNewFileUploadInfoOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminCreateNewFileUploadInfoOperationRequest instance.
		 */
		constructor(requestData: ContentModels.AdminCreateNewFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.AdminCreateNewFileUploadInfoRequestData;
		}
	}

	/**
	 * Maps the GetContentData operation to a typed request wrapper.
	 */
	export class GetContentDataOperationRequest extends CustomOperationRequestAbstract<ContentModels.GetContentDataRequestData> {
		protected override operationCode: string = OperationCode.GetContentData;
		protected override requestType: RequestType = RequestType.Content;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetContentDataOperationRequest instance.
		 */
		constructor(requestData: ContentModels.GetContentDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.GetContentDataRequestData;
		}
	}

	/**
	 * Maps the ServerGetContentData operation to a typed request wrapper.
	 */
	export class ServerGetContentDataOperationRequest extends GetContentDataOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetContentDataOperationRequest instance.
		 */
		constructor(requestData: ContentModels.ServerGetContentDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.ServerGetContentDataRequestData;
		}
	}

	/**
	 * Maps the AdminGetContentData operation to a typed request wrapper.
	 */
	export class AdminGetContentDataOperationRequest extends GetContentDataOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetContentDataOperationRequest instance.
		 */
		constructor(requestData: ContentModels.AdminGetContentDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.AdminGetContentDataRequestData;
		}
	}

	/**
	 * Maps the GetFileUploadInfoList operation to a typed request wrapper.
	 */
	export class GetFileUploadInfoListOperationRequest extends CustomOperationRequestAbstract<ContentModels.GetFileUploadInfoListRequestData> {
		protected override operationCode: string = OperationCode.GetFileUploadInfoList;
		protected override requestType: RequestType = RequestType.Content;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetFileUploadInfoListOperationRequest instance.
		 */
		constructor(requestData: ContentModels.GetFileUploadInfoListRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.GetFileUploadInfoListRequestData;
		}
	}

	/**
	 * Maps the ServerGetFileUploadInfoList operation to a typed request wrapper.
	 */
	export class ServerGetFileUploadInfoListOperationRequest extends GetFileUploadInfoListOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetFileUploadInfoListOperationRequest instance.
		 */
		constructor(requestData: ContentModels.ServerGetFileUploadInfoListRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.ServerGetFileUploadInfoListRequestData;
		}
	}

	/**
	 * Maps the AdminGetFileUploadInfoList operation to a typed request wrapper.
	 */
	export class AdminGetFileUploadInfoListOperationRequest extends GetFileUploadInfoListOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetFileUploadInfoListOperationRequest instance.
		 */
		constructor(requestData: ContentModels.AdminGetFileUploadInfoListRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.AdminGetFileUploadInfoListRequestData;
		}
	}

	/**
	 * Maps the GetFileUploadInfo operation to a typed request wrapper.
	 */
	export class GetFileUploadInfoOperationRequest extends CustomOperationRequestAbstract<ContentModels.GetFileUploadInfoRequestData> {
		protected override operationCode: string = OperationCode.GetFileUploadInfo;
		protected override requestType: RequestType = RequestType.Content;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetFileUploadInfoOperationRequest instance.
		 */
		constructor(requestData: ContentModels.GetFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.GetFileUploadInfoRequestData;
		}
	}

	/**
	 * Maps the ServerGetFileUploadInfo operation to a typed request wrapper.
	 */
	export class ServerGetFileUploadInfoOperationRequest extends GetFileUploadInfoOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetFileUploadInfoOperationRequest instance.
		 */
		constructor(requestData: ContentModels.ServerGetFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.ServerGetFileUploadInfoRequestData;
		}
	}

	/**
	 * Maps the AdminGetFileUploadInfo operation to a typed request wrapper.
	 */
	export class AdminGetFileUploadInfoOperationRequest extends GetFileUploadInfoOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetFileUploadInfoOperationRequest instance.
		 */
		constructor(requestData: ContentModels.AdminGetFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.AdminGetFileUploadInfoRequestData;
		}
	}

	/**
	 * Maps the RemoveFileUploadInfo operation to a typed request wrapper.
	 */
	export class RemoveFileUploadInfoOperationRequest extends CustomOperationRequestAbstract<ContentModels.RemoveFileUploadInfoRequestData> {
		protected override operationCode: string = OperationCode.RemoveFileUploadInfo;
		protected override requestType: RequestType = RequestType.Content;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new RemoveFileUploadInfoOperationRequest instance.
		 */
		constructor(requestData: ContentModels.RemoveFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.RemoveFileUploadInfoRequestData;
		}
	}

	/**
	 * Maps the ServerRemoveFileUploadInfo operation to a typed request wrapper.
	 */
	export class ServerRemoveFileUploadInfoOperationRequest extends RemoveFileUploadInfoOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerRemoveFileUploadInfoOperationRequest instance.
		 */
		constructor(requestData: ContentModels.ServerRemoveFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.ServerRemoveFileUploadInfoRequestData;
		}
	}

	/**
	 * Maps the AdminRemoveFileUploadInfo operation to a typed request wrapper.
	 */
	export class AdminRemoveFileUploadInfoOperationRequest extends RemoveFileUploadInfoOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminRemoveFileUploadInfoOperationRequest instance.
		 */
		constructor(requestData: ContentModels.AdminRemoveFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.AdminRemoveFileUploadInfoRequestData;
		}
	}

	/**
	 * Maps the RequestDownloadFileUploadInfo operation to a typed request wrapper.
	 */
	export class RequestDownloadFileUploadInfoOperationRequest extends CustomOperationRequestAbstract<ContentModels.RequestDownloadFileUploadInfoRequestData> {
		protected override operationCode: string = OperationCode.RequestDownloadFileUploadInfo;
		protected override requestType: RequestType = RequestType.Content;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new RequestDownloadFileUploadInfoOperationRequest instance.
		 */
		constructor(requestData: ContentModels.RequestDownloadFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.RequestDownloadFileUploadInfoRequestData;
		}
	}

	/**
	 * Maps the ServerRequestDownloadFileUploadInfo operation to a typed request wrapper.
	 */
	export class ServerRequestDownloadFileUploadInfoOperationRequest extends RequestDownloadFileUploadInfoOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerRequestDownloadFileUploadInfoOperationRequest instance.
		 */
		constructor(requestData: ContentModels.ServerRequestDownloadFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.ServerRequestDownloadFileUploadInfoRequestData;
		}
	}

	/**
	 * Maps the AdminRequestDownloadFileUploadInfo operation to a typed request wrapper.
	 */
	export class AdminRequestDownloadFileUploadInfoOperationRequest extends RequestDownloadFileUploadInfoOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminRequestDownloadFileUploadInfoOperationRequest instance.
		 */
		constructor(requestData: ContentModels.AdminRequestDownloadFileUploadInfoRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.AdminRequestDownloadFileUploadInfoRequestData;
		}
	}

	/**
	 * Maps the SetContentData operation to a typed request wrapper.
	 */
	export class SetContentDataOperationRequest extends CustomOperationRequestAbstract<ContentModels.SetContentDataRequestData> {
		protected override operationCode: string = OperationCode.SetContentData;
		protected override requestType: RequestType = RequestType.Content;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetContentDataOperationRequest instance.
		 */
		constructor(requestData: ContentModels.SetContentDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.SetContentDataRequestData;
		}
	}

	/**
	 * Maps the ServerSetContentData operation to a typed request wrapper.
	 */
	export class ServerSetContentDataOperationRequest extends SetContentDataOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerSetContentDataOperationRequest instance.
		 */
		constructor(requestData: ContentModels.ServerSetContentDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.ServerSetContentDataRequestData;
		}
	}

	/**
	 * Maps the AdminSetContentData operation to a typed request wrapper.
	 */
	export class AdminSetContentDataOperationRequest extends SetContentDataOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminSetContentDataOperationRequest instance.
		 */
		constructor(requestData: ContentModels.AdminSetContentDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = ContentModels.AdminSetContentDataRequestData;
		}
	}

}
