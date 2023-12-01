import { CustomOperationResponseAbstract } from "./../response/CustomOperationResponse";
import { ContentModels } from "./ContentModels";

export namespace ContentResponseModels {
	export class CreateNewFileUploadInfoOperationResponse extends CustomOperationResponseAbstract<ContentModels.FileIdUploadResponseData> {

		constructor() {
			super();
			this.responseDataCls = ContentModels.FileIdUploadResponseData;
		}
	}

	export class GetContentDataOperationResponse extends CustomOperationResponseAbstract<ContentModels.GetContentDataResponseData> {

		constructor() {
			super();
			this.responseDataCls = ContentModels.GetContentDataResponseData;
		}
	}

	export class GetFileUploadInfoListOperationResponse extends CustomOperationResponseAbstract<ContentModels.GetFileUploadInfoListResponseData> {

		constructor() {
			super();
			this.responseDataCls = ContentModels.GetFileUploadInfoListResponseData;
		}
	}

	export class GetFileUploadInfoOperationResponse extends CustomOperationResponseAbstract<ContentModels.GetFileUploadInfoResponseData> {

		constructor() {
			super();
			this.responseDataCls = ContentModels.GetFileUploadInfoResponseData;
		}
	}

	export class RemoveFileUploadInfoOperationResponse extends CustomOperationResponseAbstract<ContentModels.EmptyResponseData> {

		constructor() {
			super();
			this.responseDataCls = ContentModels.EmptyResponseData;
		}
	}

	export class RequestDownloadFileUploadInfoOperationResponse extends CustomOperationResponseAbstract<ContentModels.RequestDownloadFileUploadInfoResponseData> {

		constructor() {
			super();
			this.responseDataCls = ContentModels.RequestDownloadFileUploadInfoResponseData;
		}
	}

	export class SetContentDataOperationResponse extends CustomOperationResponseAbstract<ContentModels.EmptyResponseData> {

		constructor() {
			super();
			this.responseDataCls = ContentModels.EmptyResponseData;
		}
	}

}
