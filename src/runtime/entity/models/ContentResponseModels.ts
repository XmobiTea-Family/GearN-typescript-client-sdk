import { CustomOperationResponseAbstract } from "./../response/CustomOperationResponse";
import { ContentModels } from "./ContentModels";

/**
 * Groups typed operation-response wrappers for `RequestType.Content`.
 * File upload and download helpers consume the IDs and download tokens returned by these typed responses.
 */
export namespace ContentResponseModels {
	/**
	 * Maps the CreateNewFileUploadInfo operation to a typed response wrapper.
	 */
	export class CreateNewFileUploadInfoOperationResponse extends CustomOperationResponseAbstract<ContentModels.FileIdUploadResponseData> {

		/**
		 * Creates a new CreateNewFileUploadInfoOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = ContentModels.FileIdUploadResponseData;
		}
	}

	/**
	 * Maps the GetContentData operation to a typed response wrapper.
	 */
	export class GetContentDataOperationResponse extends CustomOperationResponseAbstract<ContentModels.GetContentDataResponseData> {

		/**
		 * Creates a new GetContentDataOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = ContentModels.GetContentDataResponseData;
		}
	}

	/**
	 * Maps the GetFileUploadInfoList operation to a typed response wrapper.
	 */
	export class GetFileUploadInfoListOperationResponse extends CustomOperationResponseAbstract<ContentModels.GetFileUploadInfoListResponseData> {

		/**
		 * Creates a new GetFileUploadInfoListOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = ContentModels.GetFileUploadInfoListResponseData;
		}
	}

	/**
	 * Maps the GetFileUploadInfo operation to a typed response wrapper.
	 */
	export class GetFileUploadInfoOperationResponse extends CustomOperationResponseAbstract<ContentModels.GetFileUploadInfoResponseData> {

		/**
		 * Creates a new GetFileUploadInfoOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = ContentModels.GetFileUploadInfoResponseData;
		}
	}

	/**
	 * Maps the RemoveFileUploadInfo operation to a typed response wrapper.
	 */
	export class RemoveFileUploadInfoOperationResponse extends CustomOperationResponseAbstract<ContentModels.EmptyResponseData> {

		/**
		 * Creates a new RemoveFileUploadInfoOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = ContentModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the RequestDownloadFileUploadInfo operation to a typed response wrapper.
	 */
	export class RequestDownloadFileUploadInfoOperationResponse extends CustomOperationResponseAbstract<ContentModels.RequestDownloadFileUploadInfoResponseData> {

		/**
		 * Creates a new RequestDownloadFileUploadInfoOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = ContentModels.RequestDownloadFileUploadInfoResponseData;
		}
	}

	/**
	 * Maps the SetContentData operation to a typed response wrapper.
	 */
	export class SetContentDataOperationResponse extends CustomOperationResponseAbstract<ContentModels.EmptyResponseData> {

		/**
		 * Creates a new SetContentDataOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = ContentModels.EmptyResponseData;
		}
	}

}
