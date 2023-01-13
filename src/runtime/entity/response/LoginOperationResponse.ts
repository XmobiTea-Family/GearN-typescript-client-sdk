import { LoginErrorCode } from "./../../constant/errorCode/LoginErrorCode";
import { LoginParameterCode } from "./../../constant/parameterCode/LoginParameterCode";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { OperationResponse } from "./../OperationResponse";
import { CustomOperationResponse } from "./CustomOperationResponse";

export class LoginOperationResponse extends CustomOperationResponse {
    public authToken: string;

    public tsExpire: number;
    public reason: string;
    public userId: string;

    public override setupOperationResponse(operationResponse: OperationResponse): void {
        super.setupOperationResponse(operationResponse);

        if (!this.hasError()) {
            if (this.errorCode == LoginErrorCode.Ok) {
                this.authToken = this.parameters.getString(ParameterCode.AuthToken);
                this.userId = this.parameters.getString(ParameterCode.UserId);
            }
            else if (this.errorCode == LoginErrorCode.UserHadBanned) {
                this.tsExpire = this.parameters.getNumber(LoginParameterCode.TsExpire);
                this.reason = this.parameters.getString(LoginParameterCode.Reason);
            }
        }
    }
}
