import { CustomOperationResponseAbstract } from "./../response/CustomOperationResponse";
import { ContentModels } from "./ContentModels";

/**
 * Typed response wrappers for the Content domain.
 *
 * Each class extends {@link CustomOperationResponseAbstract} and
 * binds a response DTO from {@link ContentModels}. Most file
 * operations resolve to lightweight responses that carry just
 * the `fileId` plus the associated upload / download token —
 * pair them with the byte-transfer helpers
 * {@link GNNetwork.uploadFile} and
 * {@link GNNetwork.getDownloadFileUrl} to complete the workflow.
 *
 * The same wrapper classes are reused across the
 * client / server / admin role variants because the response
 * shape is identical regardless of which role issued the
 * request.
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
