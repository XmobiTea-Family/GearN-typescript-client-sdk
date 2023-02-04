import { GNHashtable } from "./../../common/GNData";
import { OperationCode } from "./../../constant/OperationCode";
import { ChatParameterCode } from "./../../constant/parameterCode/ChatParameterCode";
import { OperationRequest } from "./../OperationRequest";
import { CustomOperationRequest } from "./CustomOperationRequest";

export class EditChatMessageUserOperationRequest extends CustomOperationRequest {
    protected override operationCode: number = OperationCode.EditChatMessageUser;

    protected override operationEncrypted: boolean = true;

    constructor(tsCreate: number, userId: string, message: string = null, isDelete: boolean = null, timeout: number = OperationRequest.DefaultTimeOut) {
        super(timeout);

        this.operationParameters = GNHashtable.builder()
            .add(ChatParameterCode.TsCreate, tsCreate)
            .add(ChatParameterCode.UserId, userId)
            .build();

        if (message != null) this.operationParameters.add(ChatParameterCode.Message, message);
        if (isDelete != null) this.operationParameters.add(ChatParameterCode.IsDelete, isDelete);
    }
}
