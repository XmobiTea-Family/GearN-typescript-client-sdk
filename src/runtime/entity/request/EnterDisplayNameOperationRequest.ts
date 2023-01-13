import { GNHashtable } from "./../../common/GNData";
import { OperationCode } from "./../../constant/OperationCode";
import { EnterDisplayNameParameterCode } from "./../../constant/parameterCode/EnterDisplayNameParameterCode";
import { OperationRequest } from "./../OperationRequest";
import { CustomOperationRequest } from "./CustomOperationRequest";

export class EnterDisplayNameOperationRequest extends CustomOperationRequest {
    protected override operationCode: number = OperationCode.EnterDisplayName;

    protected override operationEncrypted: boolean = true;

    constructor(displayName: string, timeout: number = OperationRequest.DefaultTimeOut) {
        super(timeout);

        this.operationParameters = GNHashtable.builder()
            .add(EnterDisplayNameParameterCode.DisplayName, displayName)
            .build();
    }
}
