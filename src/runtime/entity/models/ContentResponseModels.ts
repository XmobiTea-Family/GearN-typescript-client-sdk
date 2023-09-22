import { CustomOperationResponseAbstract } from "../response/CustomOperationResponse";
import { ContentModels } from "./ContentModels";

export module ContentResponseModels {
	export class CreateNewFileUploadInfoOperationResponse extends CustomOperationResponseAbstract<ContentModels.FileIdUploadResponseData> {
	}

	export class GetContentDataOperationResponse extends CustomOperationResponseAbstract<ContentModels.GetContentDataResponseData> {
	}

	export class GetFileUploadInfoListOperationResponse extends CustomOperationResponseAbstract<ContentModels.GetFileUploadInfoListResponseData> {
	}

	export class GetFileUploadInfoOperationResponse extends CustomOperationResponseAbstract<ContentModels.GetFileUploadInfoResponseData> {
	}

	export class RemoveFileUploadInfoOperationResponse extends CustomOperationResponseAbstract<ContentModels.EmptyResponseData> {
	}

	export class RequestDownloadFileUploadInfoOperationResponse extends CustomOperationResponseAbstract<ContentModels.RequestDownloadFileUploadInfoResponseData> {
	}

	export class SetContentDataOperationResponse extends CustomOperationResponseAbstract<ContentModels.EmptyResponseData> {
	}

}
