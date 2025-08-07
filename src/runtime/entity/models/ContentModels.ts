import { GNHashtable } from "./../../common/GNData";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";
import { GenericModels } from "./GenericModels";

export namespace ContentModels {
	export class ContentDataParam {
		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@GNHashtableDataMember({ code: ParameterCode.Data })
		public data: GNHashtable;

	}

	export class CreateNewFileUploadInfoRequestData {
		@StringDataMember({ code: ParameterCode.FileName, mustNonNull: true, minLength: 5, maxLength: 50 })
		public fileName: string;

	}

	export class ServerCreateNewFileUploadInfoRequestData extends CreateNewFileUploadInfoRequestData {

	}

	export class AdminCreateNewFileUploadInfoRequestData extends ServerCreateNewFileUploadInfoRequestData {
	}

	export class GetContentDataRequestData {
		@GNArrayDataMember({ code: ParameterCode.Keys, elementCls: String, isOptional: true })
		public keys?: Array<string>;

		@StringDataMember({ code: ParameterCode.Label, minLength: 2, maxLength: 32, isOptional: true, defaultValue: "" })
		public label?: string;

	}

	export class ServerGetContentDataRequestData extends GetContentDataRequestData {
	}

	export class AdminGetContentDataRequestData extends ServerGetContentDataRequestData {
	}

	export class GetFileUploadInfoListRequestData {
		@NumberDataMember({ code: ParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

	}

	export class ServerGetFileUploadInfoListRequestData extends GetFileUploadInfoListRequestData {
	}

	export class AdminGetFileUploadInfoListRequestData extends ServerGetFileUploadInfoListRequestData {
	}

	export class GetFileUploadInfoRequestData {
		@StringDataMember({ code: ParameterCode.FileId, mustNonNull: true, minLength: 15, maxLength: 15 })
		public fileId: string;

	}

	export class ServerGetFileUploadInfoRequestData extends GetFileUploadInfoRequestData {
	}

	export class AdminGetFileUploadInfoRequestData extends ServerGetFileUploadInfoRequestData {
	}

	export class RemoveFileUploadInfoRequestData {
		@StringDataMember({ code: ParameterCode.FileId, mustNonNull: true, minLength: 15, maxLength: 15 })
		public fileId: string;

		@StringDataMember({ code: ParameterCode.Reason, isOptional: true, defaultValue: "" })
		public reason?: string;

	}

	export class ServerRemoveFileUploadInfoRequestData extends RemoveFileUploadInfoRequestData {
	}

	export class AdminRemoveFileUploadInfoRequestData extends ServerRemoveFileUploadInfoRequestData {
	}

	export class RequestDownloadFileUploadInfoRequestData {
		@StringDataMember({ code: ParameterCode.FileId, mustNonNull: true, minLength: 15, maxLength: 15 })
		public fileId: string;

	}

	export class ServerRequestDownloadFileUploadInfoRequestData extends RequestDownloadFileUploadInfoRequestData {
	}

	export class AdminRequestDownloadFileUploadInfoRequestData extends ServerRequestDownloadFileUploadInfoRequestData {
	}

	export class SetContentDataRequestData {
		@GNArrayDataMember({ code: ParameterCode.Configs, elementCls: ContentDataParam, mustNonNull: true })
		public configs: Array<ContentDataParam>;

		@StringDataMember({ code: ParameterCode.Label, minLength: 2, maxLength: 32, isOptional: true })
		public label?: string;

	}

	export class ServerSetContentDataRequestData extends SetContentDataRequestData {
	}

	export class AdminSetContentDataRequestData extends ServerSetContentDataRequestData {
	}

	export class FileIdUploadResponseData {
		@StringDataMember({ code: ParameterCode.FileId })
		public fileId: string;

	}

	export class GetContentDataResponseData {
		@GNArrayDataMember({ code: ParameterCode.Configs, elementCls: ContentDataParam, mustNonNull: true })
		public configs: Array<ContentDataParam>;

	}

	export class GetFileUploadInfoListResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: FileIdUploadResponseData })
		public results: Array<FileIdUploadResponseData>;

	}

	export class FileUploadItem {
		@StringDataMember({ code: ParameterCode.MimeType })
		public mimeType: string;

		@NumberDataMember({ code: ParameterCode.Size })
		public size: number;

		@StringDataMember({ code: ParameterCode.FolderFileName })
		public folderFileName: string;

	}

	export class GetFileUploadInfoResponseData extends FileIdUploadResponseData {
		@StringDataMember({ code: ParameterCode.FileName })
		public fileName: string;

		@NumberDataMember({ code: ParameterCode.TsCreate })
		public tsCreate: number;

		@GNHashtableDataMember({ code: ParameterCode.RemoveStatus })
		public removeStatus: GenericModels.RemoveStatusItem;

		@NumberDataMember({ code: ParameterCode.TsUploadExpire, isOptional: true })
		public tsUploadExpire?: number;

		@GNHashtableDataMember({ code: ParameterCode.FileUpload, isOptional: true })
		public fileUpload?: FileUploadItem;

	}

	export class RequestDownloadFileUploadInfoResponseData {
		@StringDataMember({ code: ParameterCode.DownloadToken })
		public downloadToken: string;

	}

	export class EmptyResponseData {
	}

}
