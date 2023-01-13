import { FetchSparkPlayerErrorCode } from "./../../constant/errorCode/FetchSparkPlayerErrorCode";
import { FetchSparkPlayerParameterCode } from "./../../constant/parameterCode/FetchSparkPlayerParameterCode";
import { OperationResponse } from "./../OperationResponse";
import { CustomOperationResponse } from "./CustomOperationResponse";

export interface UserExternal {
    customId: string;
    facebookId: string;
    googleUserId: string;
    appleUserId: string;
    deviceInfo: string;
    publicAddress: string;
}

export class FetchSparkPlayerOperationResponse extends CustomOperationResponse {
    
    public userId: string;
    public userRole: number;
    public fullname: string;
    public tsCreate: number;
    public userExternal: UserExternal;

    public tsExpire: number;
    public reason: string;

    public override setupOperationResponse(operationResponse: OperationResponse): void {
        super.setupOperationResponse(operationResponse);

        if (!this.hasError()) {
            if (this.errorCode == FetchSparkPlayerErrorCode.Ok) {
                this.userId = this.parameters.getString(FetchSparkPlayerParameterCode.UserId);
                this.userRole = this.parameters.getNumber(FetchSparkPlayerParameterCode.UserRole);
                this.fullname = this.parameters.getString(FetchSparkPlayerParameterCode.Fullname);
                this.tsCreate = this.parameters.getNumber(FetchSparkPlayerParameterCode.TsCreate);

                let gsUserExternal = this.parameters.getGNHashtable(FetchSparkPlayerParameterCode.UserExternal);

                this.userExternal = {
                    customId: gsUserExternal.getString(FetchSparkPlayerParameterCode.CustomId),
                    facebookId: gsUserExternal.getString(FetchSparkPlayerParameterCode.FacebookId),
                    googleUserId: gsUserExternal.getString(FetchSparkPlayerParameterCode.GoogleUserId),
                    appleUserId: gsUserExternal.getString(FetchSparkPlayerParameterCode.AppleUserId),
                    deviceInfo: gsUserExternal.getString(FetchSparkPlayerParameterCode.DeviceInfo),
                    publicAddress: gsUserExternal.getString(FetchSparkPlayerParameterCode.PublicAddress),
                };
            }
            else if (this.errorCode == FetchSparkPlayerErrorCode.UserHadBanned) {
                this.tsExpire = this.parameters.getNumber(FetchSparkPlayerParameterCode.TsExpire);
                this.reason = this.parameters.getString(FetchSparkPlayerParameterCode.Reason);
            }
        }
    }
}
