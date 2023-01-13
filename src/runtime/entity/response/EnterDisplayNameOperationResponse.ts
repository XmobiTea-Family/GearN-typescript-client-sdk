import { EnterDisplayNameErrorCode } from "./../../constant/errorCode/EnterDisplayNameErrorCode";
import { EnterDisplayNameParameterCode } from "./../../constant/parameterCode/EnterDisplayNameParameterCode";
import { OperationResponse } from "./../OperationResponse";
import { CustomOperationResponse } from "./CustomOperationResponse";

export class EnterDisplayNameOperationResponse extends CustomOperationResponse {
    public userRole: number;
    public displayName: string;

    public override setupOperationResponse(operationResponse: OperationResponse): void {
        super.setupOperationResponse(operationResponse);

        if (!this.hasError()) {
            if (this.errorCode == EnterDisplayNameErrorCode.Ok) {
                this.userRole = this.parameters.getNumber(EnterDisplayNameParameterCode.UserRole);
                this.displayName = this.parameters.getString(EnterDisplayNameParameterCode.DisplayName);
            }
        }
    }
}
