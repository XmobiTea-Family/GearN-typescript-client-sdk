import { LoginErrorCode } from "./../../constant/errorCode/LoginErrorCode";
import { LoginParameterCode } from "./../../constant/parameterCode/LoginParameterCode";
import { OperationResponse } from "./../OperationResponse";
import { CustomOperationResponse } from "./CustomOperationResponse";

export class PublicAddressGetRandomMessageOperationResponse extends CustomOperationResponse {
    public message: string;

    public override setupOperationResponse(operationResponse: OperationResponse): void {
        super.setupOperationResponse(operationResponse);

        if (!this.hasError()) {
            if (this.errorCode == LoginErrorCode.Ok) {
                this.message = this.parameters.getString(LoginParameterCode.Message);
            }
        }
    }
}
