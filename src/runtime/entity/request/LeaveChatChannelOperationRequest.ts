import { GNHashtable } from "./../../common/GNData";
import { OperationCode } from "./../../constant/OperationCode";
import { ChatParameterCode } from "./../../constant/parameterCode/ChatParameterCode";
import { OperationRequest } from "./../OperationRequest";
import { CustomOperationRequest } from "./CustomOperationRequest";

export class LeaveChatChannelOperationRequest extends CustomOperationRequest {
    protected override operationCode: number = OperationCode.LeaveChatChannel;

    protected override operationEncrypted: boolean = true;

    constructor(channel: string, timeout: number = OperationRequest.DefaultTimeOut) {
        super(timeout);

        this.operationParameters = GNHashtable.builder()
            .add(ChatParameterCode.Channel, channel)
            .build();
    }
}
