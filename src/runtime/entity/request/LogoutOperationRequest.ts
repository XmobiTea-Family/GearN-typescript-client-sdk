import { OperationCode } from "./../../constant/OperationCode";
import { OperationRequest } from "./../OperationRequest";
import { CustomOperationRequest } from "./CustomOperationRequest";

export class LogoutOperationRequest extends CustomOperationRequest {
    protected override operationCode: number = OperationCode.Logout;

    protected override operationEncrypted: boolean = true;

    constructor(timeout: number = OperationRequest.DefaultTimeOut) {
        super(timeout);
    }
}
