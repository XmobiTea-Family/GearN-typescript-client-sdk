import { LoginErrorCode } from "./../../constant/errorCode/LoginErrorCode";
import { OperationResponse } from "./../OperationResponse";
import { LoginOperationResponse } from "./LoginOperationResponse";

export class RegisterAccountOperationResponse extends LoginOperationResponse {

    public override setupOperationResponse(operationResponse: OperationResponse): void {
        super.setupOperationResponse(operationResponse);

        if (!this.hasError)
        {
            if (this.errorCode == LoginErrorCode.Ok)
            {

            }
        }
    }
}
