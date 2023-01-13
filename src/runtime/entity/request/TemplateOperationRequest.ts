import { GNHashtable } from "./../../common/GNData";
import { OperationCode } from "./../../constant/OperationCode";
import { DebugParameterCode } from "./../../constant/parameterCode/DebugParameterCode";
import { OperationRequest } from "./../OperationRequest";
import { CustomOperationRequest } from "./CustomOperationRequest";

export class TemplateOperationRequest extends CustomOperationRequest {
    protected override operationCode: number = OperationCode.Debug;

    protected override operationEncrypted: boolean = true;

    constructor(booleanValue: boolean, timeout: number = OperationRequest.DefaultTimeOut) {
        super(timeout);

        this.operationParameters = GNHashtable.builder()
            .add(DebugParameterCode.Boolean, booleanValue)
            .build();
    }
}
