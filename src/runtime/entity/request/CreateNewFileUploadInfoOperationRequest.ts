import { GNHashtable } from "./../../common/GNData";
import { OperationCode } from "./../../constant/OperationCode";
import { FileUploadInfoParameterCode } from "./../../constant/parameterCode/FileUploadInfoParameterCode";
import { OperationRequest } from "./../OperationRequest";
import { CustomOperationRequest } from "./CustomOperationRequest";

export class CreateNewFileUploadInfoOperationRequest extends CustomOperationRequest {
    protected override operationCode: number = OperationCode.CreateNewFileUploadInfo;

    protected override operationEncrypted: boolean = true;

    constructor(originFileName: string, timeout: number = OperationRequest.DefaultTimeOut) {
        super(timeout);
        this.operationParameters = GNHashtable.builder()
            .add(FileUploadInfoParameterCode.OriginFileName, originFileName)
            .build();
    }
}
