import { FriendErrorCode } from "./../../constant/errorCode/FriendErrorCode";
import { FriendParameterCode } from "./../../constant/parameterCode/FriendParameterCode";
import { OperationResponse } from "./../OperationResponse";
import { CustomOperationResponse } from "./CustomOperationResponse";

export class FindPlayerOperationResponse extends CustomOperationResponse {
    public playerLst: string[];

    public override setupOperationResponse(operationResponse: OperationResponse): void {
        super.setupOperationResponse(operationResponse);

        if (!this.hasError()) {
            if (this.errorCode == FriendErrorCode.Ok) {
                let gsPlayerLsts = this.parameters.getGNArray(FriendParameterCode.PlayerLst);
                this.playerLst = [];

                for (let i = 0; i < gsPlayerLsts.count(); i++) {
                    this.playerLst.push(gsPlayerLsts.getString(i));
                }
            }
        }
    }
}
