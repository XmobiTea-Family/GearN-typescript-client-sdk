import { OperationCode } from "./../../constant/OperationCode";
import { OperationRequest } from "./../OperationRequest";
import { CustomOperationRequest } from "./CustomOperationRequest";

export class FetchAllDataOperationRequest extends CustomOperationRequest {
    protected override operationCode: number = OperationCode.FetchAllData;

    protected override operationEncrypted: boolean = true;

    constructor(timeout: number = OperationRequest.DefaultTimeOut) {
        super(timeout);
    }
}
