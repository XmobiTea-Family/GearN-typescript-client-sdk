import { GNHashtable } from "./../../common/GNData";
import { OperationCode } from "./../../constant/OperationCode";
import { FileUploadInfoParameterCode } from "./../../constant/parameterCode/FileUploadInfoParameterCode";
import { OperationRequest } from "./../OperationRequest";
import { CustomOperationRequest } from "./CustomOperationRequest";

export class GetFileUploadInfoOperationRequest extends CustomOperationRequest {
    protected override operationCode: number = OperationCode.GetFileUploadInfo;

    protected override operationEncrypted: boolean = true;

    constructor(fileId: string, timeout: number = OperationRequest.DefaultTimeOut) {
        super(timeout);

        this.operationParameters = GNHashtable.builder()
            .add(FileUploadInfoParameterCode.FileId, fileId)
            .build();
    }
}
