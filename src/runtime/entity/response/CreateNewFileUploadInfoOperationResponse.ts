import { FileUploadInfoErrorCode } from "./../../constant/errorCode/FileUploadInfoErrorCode";
import { FileUploadInfoParameterCode } from "./../../constant/parameterCode/FileUploadInfoParameterCode";
import { OperationResponse } from "./../OperationResponse";
import { CustomOperationResponse } from "./CustomOperationResponse";

export class CreateNewFileUploadInfoOperationResponse extends CustomOperationResponse {
    public fileId: string;
    public originFileName: string;
    public tsCreate: number;
    public tsUploadExpire: number;
    public userId: string;

    public override setupOperationResponse(operationResponse: OperationResponse): void {
        super.setupOperationResponse(operationResponse);

        if (!this.hasError()) {
            if (this.errorCode == FileUploadInfoErrorCode.Ok) {
                this.fileId = this.parameters.getString(FileUploadInfoParameterCode.FileId);
                this.originFileName = this.parameters.getString(FileUploadInfoParameterCode.OriginFileName);
                this.tsCreate = this.parameters.getNumber(FileUploadInfoParameterCode.TsCreate);
                this.tsUploadExpire = this.parameters.getNumber(FileUploadInfoParameterCode.TsUploadExpire);
                this.userId = this.parameters.getString(FileUploadInfoParameterCode.UserId);
            }
        }
    }
}
