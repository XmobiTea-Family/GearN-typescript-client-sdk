import { ChatErrorCode } from "./../../constant/errorCode/ChatErrorCode";
import { ChatParameterCode } from "./../../constant/parameterCode/ChatParameterCode";
import { OperationResponse } from "./../OperationResponse";
import { CustomOperationResponse } from "./CustomOperationResponse";

class EditChatMessage {
    public message: string;

    public tsCreate: number;
}

class ChatMessage extends EditChatMessage {
    public tsLastUpdate: number;
    public messageEditeds: EditChatMessage[];
    public senderId: string;
    public isDelete: boolean;
}

class ChannelInfo {
    public messages: ChatMessage[];
}

export class GetChatMessageChannelOperationResponse extends CustomOperationResponse {
    public channelInfo: ChannelInfo;

    public override setupOperationResponse(operationResponse: OperationResponse): void {
        super.setupOperationResponse(operationResponse);

        if (!this.hasError()) {
            if (this.errorCode == ChatErrorCode.Ok) {
                this.channelInfo = new ChannelInfo();

                let gsChannelInfo = this.parameters.getGNHashtable(ChatParameterCode.ChannelInfo);

                this.channelInfo.messages = [];
                let gsMessages = gsChannelInfo.getGNArray(ChatParameterCode.ChatMessageLst);

                for (let i = 0; i < gsMessages.count(); i++) {
                    let gsMessage = gsMessages.getGNHashtable(i);

                    let message = gsMessage.getString(ChatParameterCode.Message);
                    let tsCreate = gsMessage.getNumber(ChatParameterCode.TsCreate);
                    let userId = gsMessage.getString(ChatParameterCode.UserId);
                    let tsLastUpdate = gsMessage.getNumber(ChatParameterCode.TsLastUpdate, tsCreate);
                    let isDelete = gsMessage.getBoolean(ChatParameterCode.IsDelete);

                    let chatMessage = new ChatMessage();
                    chatMessage.message = message;
                    chatMessage.tsCreate = tsCreate;
                    chatMessage.tsLastUpdate = tsLastUpdate;
                    chatMessage.senderId = userId;
                    chatMessage.isDelete = isDelete;

                    chatMessage.messageEditeds = [];
                    if (gsMessage.containsKey(ChatParameterCode.MessageEditeds)) {
                        let gsMessageEditeds = gsMessage.getGNArray(ChatParameterCode.MessageEditeds);

                        for (let j = 0; j < gsMessageEditeds.count(); j++) {
                            let gsMessageEdited = gsMessageEditeds.getGNHashtable(j);

                            let editChatMessage = new EditChatMessage();
                            editChatMessage.message = gsMessageEdited.getString(ChatParameterCode.Message);
                            editChatMessage.tsCreate = gsMessageEdited.getNumber(ChatParameterCode.TsCreate);

                            chatMessage.messageEditeds.push(editChatMessage);
                        }
                    }

                    this.channelInfo.messages.push(chatMessage);
                }
            }
        }
    }
}
