import { ChatErrorCode } from "./../../constant/errorCode/ChatErrorCode";
import { ChatParameterCode } from "./../../constant/parameterCode/ChatParameterCode";
import { OperationResponse } from "./../OperationResponse";
import { CustomOperationResponse } from "./CustomOperationResponse";

class UserChannel {
    public userId: string;
    public tsJoin: number;
}

class ChannelInfo {
    public members: UserChannel[];
}

export class GetChatMemberChannelOperationResponse extends CustomOperationResponse {
    public channelInfo: ChannelInfo;

    public override setupOperationResponse(operationResponse: OperationResponse): void {
        super.setupOperationResponse(operationResponse);

        if (!this.hasError()) {
            if (this.errorCode == ChatErrorCode.Ok) {
                this.channelInfo = new ChannelInfo();

                let gsChannelInfo = this.parameters.getGNHashtable(ChatParameterCode.ChannelInfo);

                this.channelInfo.members = [];
                let gsMembers = gsChannelInfo.getGNArray(ChatParameterCode.Members);

                for (let i = 0; i < gsMembers.count(); i++) {
                    let gsMember = gsMembers.getGNHashtable(i);

                    let userChannel = new UserChannel();
                    userChannel.userId = gsMember.getString(ChatParameterCode.UserId);
                    userChannel.tsJoin = gsMember.getNumber(ChatParameterCode.TsJoin);

                    this.channelInfo.members.push(userChannel);
                }
            }
        }
    }
}
