import { GNHashtable } from "./../../common/GNData";
import { OperationCode } from "./../../constant/OperationCode";
import { RegisterSocketParameterCode } from "./../../constant/parameterCode/RegisterSocketParameterCode";
import { OperationRequest } from "./../OperationRequest";
import { CustomOperationRequest } from "./CustomOperationRequest";

export class RegisterSocketOperationRequest extends CustomOperationRequest {
    protected override operationCode: number = OperationCode.RegisterSocket;

    protected override operationEncrypted: boolean = true;

    constructor(sid: string, timeout: number = OperationRequest.DefaultTimeOut) {
        super(timeout);

        this.operationParameters = GNHashtable.builder()
            .add(RegisterSocketParameterCode.SId, sid)
            .build();
    }
}
