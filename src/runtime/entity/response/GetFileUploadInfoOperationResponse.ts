import { FileUploadInfoErrorCode } from "./../../constant/errorCode/FileUploadInfoErrorCode";
import { FileUploadInfoParameterCode } from "./../../constant/parameterCode/FileUploadInfoParameterCode";
import { OperationResponse } from "./../OperationResponse";
import { CustomOperationResponse } from "./CustomOperationResponse";

export class GetFileUploadInfoOperationResponse extends CustomOperationResponse {
    public fileHasUpload: boolean;

    public fileId: string;
    public originFileName: string;
    public tsCreate: number;
    public userId: string;

    public tsUploadExpire: number;

    public tsUploadFile: number;
    public mimeType: string;
    public size: number;
    public folderFileName: string;

    public override setupOperationResponse(operationResponse: OperationResponse): void {
        super.setupOperationResponse(operationResponse);

        if (!this.hasError()) {
            if (this.errorCode == FileUploadInfoErrorCode.Ok) {
                this.fileId = this.parameters.getString(FileUploadInfoParameterCode.FileId);
                this.originFileName = this.parameters.getString(FileUploadInfoParameterCode.OriginFileName);
                this.tsCreate = this.parameters.getNumber(FileUploadInfoParameterCode.TsCreate);
                this.userId = this.parameters.getString(FileUploadInfoParameterCode.UserId);

                if (this.parameters.containsKey(FileUploadInfoParameterCode.TsUploadExpire)) {
                    this.fileHasUpload = false;

                    this.tsUploadExpire = this.parameters.getNumber(FileUploadInfoParameterCode.TsUploadExpire);
                }
                else {
                    this.fileHasUpload = true;

                    this.tsUploadFile = this.parameters.getNumber(FileUploadInfoParameterCode.TsUploadFile);
                    this.mimeType = this.parameters.getString(FileUploadInfoParameterCode.MimeType);
                    this.size = this.parameters.getNumber(FileUploadInfoParameterCode.Size);
                    this.folderFileName = this.parameters.getString(FileUploadInfoParameterCode.FolderFileName);
                }
            }
        }
    }
}
