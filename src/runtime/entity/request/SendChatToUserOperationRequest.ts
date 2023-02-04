import { GNHashtable } from "./../../common/GNData";
import { OperationCode } from "./../../constant/OperationCode";
import { ChatParameterCode } from "./../../constant/parameterCode/ChatParameterCode";
import { OperationRequest } from "./../OperationRequest";
import { CustomOperationRequest } from "./CustomOperationRequest";

export class SendChatToUserOperationRequest extends CustomOperationRequest {
    protected override operationCode: number = OperationCode.SendChatToUser;

    protected override operationEncrypted: boolean = true;

    constructor(userId: string, message: string, saveToDatabase: boolean = false, timeout: number = OperationRequest.DefaultTimeOut) {
        super(timeout);

        this.operationParameters = GNHashtable.builder()
            .add(ChatParameterCode.UserId, userId)
            .add(ChatParameterCode.Message, message)
            .build();

        if (saveToDatabase != null) this.operationParameters.add(ChatParameterCode.SaveToDatabase, saveToDatabase);
    }
}
