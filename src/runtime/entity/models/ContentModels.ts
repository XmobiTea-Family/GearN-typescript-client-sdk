import { GNHashtable } from "./../../common/GNData";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";
import { GenericModels } from "./GenericModels";

/**
 * Groups reusable request and response contracts for Content operations.
 * File workflows usually follow `create upload info -> upload file out-of-band -> request download token`.
 */
export namespace ContentModels {
	/**
	 * Defines the reusable parameter block ContentDataParam.
	 */
	export class ContentDataParam {
		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@GNHashtableDataMember({ code: ParameterCode.Data })
		public data: GNHashtable;

	}

	/**
	 * Allocates a new upload slot before the binary payload is uploaded through the separate upload helper.
	 */
	export class CreateNewFileUploadInfoRequestData {
		@StringDataMember({ code: ParameterCode.FileName, mustNonNull: true, minLength: 5, maxLength: 50 })
		public fileName: string;

	}

	/**
	 * Defines the request payload for ServerCreateNewFileUploadInfo.
	 */
	export class ServerCreateNewFileUploadInfoRequestData extends CreateNewFileUploadInfoRequestData {

	}

	/**
	 * Defines the request payload for AdminCreateNewFileUploadInfo.
	 */
	export class AdminCreateNewFileUploadInfoRequestData extends ServerCreateNewFileUploadInfoRequestData {
	}

	/**
	 * Reads content configuration blobs, optionally filtered by key list and label.
	 */
	export class GetContentDataRequestData {
		@GNArrayDataMember({ code: ParameterCode.Keys, elementCls: String, isOptional: true })
		public keys?: Array<string>;

		@StringDataMember({ code: ParameterCode.Label, minLength: 2, maxLength: 32, isOptional: true, defaultValue: "" })
		public label?: string;

	}

	/**
	 * Defines the request payload for ServerGetContentData.
	 */
	export class ServerGetContentDataRequestData extends GetContentDataRequestData {
	}

	/**
	 * Defines the request payload for AdminGetContentData.
	 */
	export class AdminGetContentDataRequestData extends ServerGetContentDataRequestData {
	}

	/**
	 * Defines the request payload for GetFileUploadInfoList.
	 */
	export class GetFileUploadInfoListRequestData {
		@NumberDataMember({ code: ParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

	}

	/**
	 * Defines the request payload for ServerGetFileUploadInfoList.
	 */
	export class ServerGetFileUploadInfoListRequestData extends GetFileUploadInfoListRequestData {
	}

	/**
	 * Defines the request payload for AdminGetFileUploadInfoList.
	 */
	export class AdminGetFileUploadInfoListRequestData extends ServerGetFileUploadInfoListRequestData {
	}

	/**
	 * Defines the request payload for GetFileUploadInfo.
	 */
	export class GetFileUploadInfoRequestData {
		@StringDataMember({ code: ParameterCode.FileId, mustNonNull: true, minLength: 15, maxLength: 15 })
		public fileId: string;

	}

	/**
	 * Defines the request payload for ServerGetFileUploadInfo.
	 */
	export class ServerGetFileUploadInfoRequestData extends GetFileUploadInfoRequestData {
	}

	/**
	 * Defines the request payload for AdminGetFileUploadInfo.
	 */
	export class AdminGetFileUploadInfoRequestData extends ServerGetFileUploadInfoRequestData {
	}

	/**
	 * Defines the request payload for RemoveFileUploadInfo.
	 */
	export class RemoveFileUploadInfoRequestData {
		@StringDataMember({ code: ParameterCode.FileId, mustNonNull: true, minLength: 15, maxLength: 15 })
		public fileId: string;

		@StringDataMember({ code: ParameterCode.Reason, isOptional: true, defaultValue: "" })
		public reason?: string;

	}

	/**
	 * Defines the request payload for ServerRemoveFileUploadInfo.
	 */
	export class ServerRemoveFileUploadInfoRequestData extends RemoveFileUploadInfoRequestData {
	}

	/**
	 * Defines the request payload for AdminRemoveFileUploadInfo.
	 */
	export class AdminRemoveFileUploadInfoRequestData extends ServerRemoveFileUploadInfoRequestData {
	}

	/**
	 * Requests a short-lived download token for an existing uploaded file.
	 */
	export class RequestDownloadFileUploadInfoRequestData {
		@StringDataMember({ code: ParameterCode.FileId, mustNonNull: true, minLength: 15, maxLength: 15 })
		public fileId: string;

	}

	/**
	 * Defines the request payload for ServerRequestDownloadFileUploadInfo.
	 */
	export class ServerRequestDownloadFileUploadInfoRequestData extends RequestDownloadFileUploadInfoRequestData {
	}

	/**
	 * Defines the request payload for AdminRequestDownloadFileUploadInfo.
	 */
	export class AdminRequestDownloadFileUploadInfoRequestData extends ServerRequestDownloadFileUploadInfoRequestData {
	}

	/**
	 * Defines the request payload for SetContentData.
	 */
	export class SetContentDataRequestData {
		@GNArrayDataMember({ code: ParameterCode.Configs, elementCls: ContentDataParam, mustNonNull: true })
		public configs: Array<ContentDataParam>;

		@StringDataMember({ code: ParameterCode.Label, minLength: 2, maxLength: 32, isOptional: true })
		public label?: string;

	}

	/**
	 * Defines the request payload for ServerSetContentData.
	 */
	export class ServerSetContentDataRequestData extends SetContentDataRequestData {
	}

	/**
	 * Defines the request payload for AdminSetContentData.
	 */
	export class AdminSetContentDataRequestData extends ServerSetContentDataRequestData {
	}

	/**
	 * Returns the backend-generated file ID for follow-up upload or download workflows.
	 */
	export class FileIdUploadResponseData {
		@StringDataMember({ code: ParameterCode.FileId })
		public fileId: string;

	}

	/**
	 * Defines the response payload for GetContentData.
	 */
	export class GetContentDataResponseData {
		@GNArrayDataMember({ code: ParameterCode.Configs, elementCls: ContentDataParam, mustNonNull: true })
		public configs: Array<ContentDataParam>;

	}

	/**
	 * Defines the response payload for GetFileUploadInfoList.
	 */
	export class GetFileUploadInfoListResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: FileIdUploadResponseData })
		public results: Array<FileIdUploadResponseData>;

	}

	/**
	 * Describes upload metadata stored for one file entry.
	 */
	export class FileUploadItem {
		@StringDataMember({ code: ParameterCode.MimeType })
		public mimeType: string;

		@NumberDataMember({ code: ParameterCode.Size })
		public size: number;

		@StringDataMember({ code: ParameterCode.FolderFileName })
		public folderFileName: string;

	}

	/**
	 * Returns metadata for one uploaded file entry.
	 */
	export class GetFileUploadInfoResponseData extends FileIdUploadResponseData {
		@StringDataMember({ code: ParameterCode.FileName })
		public fileName: string;

		@NumberDataMember({ code: ParameterCode.TsCreate })
		public tsCreate: number;

		@GNHashtableDataMember({ code: ParameterCode.RemoveStatus })
		public removeStatus: GenericModels.RemoveStatusItem;

		/**
		 * Upload-expiration timestamp for unfinished uploads when present.
		 */
		@NumberDataMember({ code: ParameterCode.TsUploadExpire, isOptional: true })
		public tsUploadExpire?: number;

		@GNHashtableDataMember({ code: ParameterCode.FileUpload, isOptional: true })
		public fileUpload?: FileUploadItem;

	}

	/**
	 * Returns the download token consumed by the SDK download helper.
	 */
	export class RequestDownloadFileUploadInfoResponseData {
		@StringDataMember({ code: ParameterCode.DownloadToken })
		public downloadToken: string;

	}

	/**
	 * Defines an intentionally empty response payload.
	 */
	export class EmptyResponseData {
	}

}
