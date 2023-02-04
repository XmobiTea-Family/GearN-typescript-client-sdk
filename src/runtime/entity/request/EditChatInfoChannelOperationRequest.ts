import { GNHashtable } from "./../../common/GNData";
import { OperationCode } from "./../../constant/OperationCode";
import { ChatParameterCode } from "./../../constant/parameterCode/ChatParameterCode";
import { OperationRequest } from "./../OperationRequest";
import { CustomOperationRequest } from "./CustomOperationRequest";

export class EditChatInfoChannelOperationRequest extends CustomOperationRequest {
    protected override operationCode: number = OperationCode.EditChatInfoChannel;

    protected override operationEncrypted: boolean = true;

    constructor(channel: string, name: string = null, avatarChannel: GNHashtable = null, channelType: number = null, timeout: number = OperationRequest.DefaultTimeOut) {
        super(timeout);

        this.operationParameters = GNHashtable.builder()
            .add(ChatParameterCode.Channel, channel)
            .build();

        if (name != null) this.operationParameters.add(ChatParameterCode.Name, name);
        if (avatarChannel != null) this.operationParameters.add(ChatParameterCode.Name, avatarChannel);
        if (channelType != null) this.operationParameters.add(ChatParameterCode.Name, channelType);
    }
}
