import { FetchAllDataErrorCode } from "./../../constant/errorCode/FetchAllDataErrorCode";
import { FetchAllDataParameterCode } from "./../../constant/parameterCode/FetchAllDataParameterCode";
import { OperationResponse } from "./../OperationResponse";
import { CustomOperationResponse } from "./CustomOperationResponse";

export class FetchAllDataOperationResponse extends CustomOperationResponse {
    public userId: string;
    public userRole: number;
    public displayName: string;
    public tsExpire: number;
    public reason: string;

    public override setupOperationResponse(operationResponse: OperationResponse): void {
        super.setupOperationResponse(operationResponse);

        if (!this.hasError()) {
            if (this.errorCode == FetchAllDataErrorCode.Ok) {
                this.userId = this.parameters.getString(FetchAllDataParameterCode.UserId);
                this.userRole = this.parameters.getNumber(FetchAllDataParameterCode.UserRole);
                this.displayName = this.parameters.getString(FetchAllDataParameterCode.DisplayName);
            }
            else if (this.errorCode == FetchAllDataErrorCode.UserHadBanned) {
                this.tsExpire = this.parameters.getNumber(FetchAllDataParameterCode.TsExpire);
                this.reason = this.parameters.getString(FetchAllDataParameterCode.Reason);
            }
        }
    }
}
