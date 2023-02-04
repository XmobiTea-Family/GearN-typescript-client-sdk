import { ChatErrorCode } from "./../../constant/errorCode/ChatErrorCode";
import { ChatParameterCode } from "./../../constant/parameterCode/ChatParameterCode";
import { OperationResponse } from "./../OperationResponse";
import { CustomOperationResponse } from "./CustomOperationResponse";

class AvatarChannel {
    public type: number;
    public value: string;
}

class ChannelInfo {
    public name: string;
    public avatarChannel: AvatarChannel
    public tsCreate: number;
    public channelType: number;
    public userCount: number;
}

export class GetChatInfoChannelOperationResponse extends CustomOperationResponse {
    public channelInfo: ChannelInfo;

    public override setupOperationResponse(operationResponse: OperationResponse): void {
        super.setupOperationResponse(operationResponse);

        if (!this.hasError()) {
            if (this.errorCode == ChatErrorCode.Ok) {
                this.channelInfo = new ChannelInfo();

                let gsChannelInfo = this.parameters.getGNHashtable(ChatParameterCode.ChannelInfo);

                this.channelInfo.name = gsChannelInfo.getString(ChatParameterCode.Name);
                this.channelInfo.avatarChannel = new AvatarChannel();
                let gnAvatarChannel = gsChannelInfo.getGNHashtable(ChatParameterCode.AvatarChannel);
                this.channelInfo.avatarChannel.type = gnAvatarChannel.getNumber(ChatParameterCode.Type);
                this.channelInfo.avatarChannel.value = gnAvatarChannel.getString(ChatParameterCode.Value);

                this.channelInfo.tsCreate = gsChannelInfo.getNumber(ChatParameterCode.TsCreate);
                this.channelInfo.channelType = gsChannelInfo.getNumber(ChatParameterCode.ChannelType);
                this.channelInfo.userCount = gsChannelInfo.getNumber(ChatParameterCode.UserCount);
            }
        }
    }
}
