import { ChatErrorCode } from "./../../constant/errorCode/ChatErrorCode";
import { OperationResponse } from "./../OperationResponse";
import { CustomOperationResponse } from "./CustomOperationResponse";

export class SendChatToChannelOperationResponse extends CustomOperationResponse {
    
    public override setupOperationResponse(operationResponse: OperationResponse): void {
        super.setupOperationResponse(operationResponse);

        if (!this.hasError()) {
            if (this.errorCode == ChatErrorCode.Ok) {
            }
        }
    }
}
