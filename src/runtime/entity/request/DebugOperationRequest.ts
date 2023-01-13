import { GNArray, GNHashtable } from "./../../common/GNData";
import { OperationCode } from "./../../constant/OperationCode";
import { DebugParameterCode } from "./../../constant/parameterCode/DebugParameterCode";
import { OperationRequest } from "./../OperationRequest";
import { CustomOperationRequest } from "./CustomOperationRequest";

export class DebugOperationRequest extends CustomOperationRequest {
    protected override operationCode: number = OperationCode.Debug;

    protected override operationEncrypted: boolean = true;

    constructor(booleanValue: boolean, numberValue: number, stringValue: string, gnHashtableValue: GNHashtable, gnArrayValue: GNArray, timeout: number = OperationRequest.DefaultTimeOut) {
        super(timeout);

        this.operationParameters = GNHashtable.builder()
            .add(DebugParameterCode.Boolean, booleanValue)
            .add(DebugParameterCode.Number, numberValue)
            .add(DebugParameterCode.String, stringValue)
            .add(DebugParameterCode.GNHashtable, gnHashtableValue)
            .add(DebugParameterCode.GNArray, gnArrayValue)
            .build();
    }
}
