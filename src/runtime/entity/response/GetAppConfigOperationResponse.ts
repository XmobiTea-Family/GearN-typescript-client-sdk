import { GetAppConfigErrorCode } from "./../../constant/errorCode/GetAppConfigErrorCode";
import { GetAppConfigParameterCode } from "./../../constant/parameterCode/GetAppConfigParameterCode";
import { OperationResponse } from "./../OperationResponse";
import { CustomOperationResponse } from "./CustomOperationResponse";

export class GetAppConfigOperationResponse extends CustomOperationResponse {
    public configNotUptodateLst: string[];

    public override setupOperationResponse(operationResponse: OperationResponse): void {
        super.setupOperationResponse(operationResponse);

        if (!this.hasError()) {
            if (this.errorCode == GetAppConfigErrorCode.Ok) {
                let configNotUptodateGNArray = this.parameters.getGNArray(GetAppConfigParameterCode.ConfigNotUptodateLst);

                this.configNotUptodateLst = [];

                for (let i = 0; i < configNotUptodateGNArray.count(); i++) {
                    this.configNotUptodateLst.push(configNotUptodateGNArray.getString(i));
                }
            }
        }
    }
}
