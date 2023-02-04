import { FriendErrorCode } from "./../../constant/errorCode/FriendErrorCode";
import { OperationResponse } from "./../OperationResponse";
import { CustomOperationResponse } from "./CustomOperationResponse";

export class RemoveFriendOperationResponse extends CustomOperationResponse {
    
    public override setupOperationResponse(operationResponse: OperationResponse): void {
        super.setupOperationResponse(operationResponse);

        if (!this.hasError()) {
            if (this.errorCode == FriendErrorCode.Ok) {
            }
        }
    }
}
