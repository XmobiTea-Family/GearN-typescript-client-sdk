import { GNHashtable } from "./../../common/GNData";
import { OperationCode } from "./../../constant/OperationCode";
import { ChatParameterCode } from "./../../constant/parameterCode/ChatParameterCode";
import { OperationRequest } from "./../OperationRequest";
import { CustomOperationRequest } from "./CustomOperationRequest";

export class GetChatMessageChannelOperationRequest extends CustomOperationRequest {
    protected override operationCode: number = OperationCode.GetChatMessageChannel;

    protected override operationEncrypted: boolean = true;

    constructor(channel: string, skip: number = 0, limit: number = 20, timeout: number = OperationRequest.DefaultTimeOut) {
        super(timeout);

        this.operationParameters = GNHashtable.builder()
            .add(ChatParameterCode.Channel, channel)
            .add(ChatParameterCode.Skip, skip)
            .add(ChatParameterCode.Limit, limit)
            .build();
    }
}
