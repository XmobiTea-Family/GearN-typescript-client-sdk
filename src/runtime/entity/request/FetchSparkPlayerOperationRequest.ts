import { OperationCode } from "./../../constant/OperationCode";
import { OperationRequest } from "./../OperationRequest";
import { CustomOperationRequest } from "./CustomOperationRequest";

export class FetchSparkPlayerOperationRequest extends CustomOperationRequest {
    protected override operationCode: number = OperationCode.FetchSparkPlayer;

    protected override operationEncrypted: boolean = true;

    constructor(timeout: number = OperationRequest.DefaultTimeOut) {
        super(timeout);
    }
}
