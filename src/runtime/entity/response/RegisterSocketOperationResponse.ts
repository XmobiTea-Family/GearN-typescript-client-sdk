import { RegisterSocketErrorCode } from "./../../constant/errorCode/RegisterSocketErrorCode";
import { OperationResponse } from "./../OperationResponse";
import { CustomOperationResponse } from "./CustomOperationResponse";

export class RegisterSocketOperationResponse extends CustomOperationResponse {

    public override setupOperationResponse(operationResponse: OperationResponse): void {
        super.setupOperationResponse(operationResponse);

        if (!this.hasError)
        {
            if (this.errorCode == RegisterSocketErrorCode.Ok)
            {

            }
        }
    }
}
