import { ChatParameterCode } from "./../../constant/parameterCode/ChatParameterCode";
import { AvatarChannel } from "./../../entity/server/AvatarChannel";
import { ChatChannel } from "./../../entity/server/ChatChannel";
import { ChatMessage, EditChatMessage } from "./../../entity/server/ChatMessage";
import { GNNetwork } from "./../../GNNetwork";
import { EventCode } from "./../../constant/EventCode";
import { OperationEvent } from "./../../entity/OperationEvent";
import { IServerEventHandler } from "./IServerEventHandler";

@IServerEventHandler.registerEvent
export class OnChannelChatEventHandler implements IServerEventHandler {

    public getEventCode(): number {
        return EventCode.OnChannelChat;
    }

    public handle(operationEvent: OperationEvent): void {
        let parameters = operationEvent.getParameters();

        let gsChannelInfo = parameters.getGNHashtable(ChatParameterCode.ChannelInfo);

        let channel = gsChannelInfo.getString(ChatParameterCode.Channel);

        let chatChannelLst = GNNetwork.getChatChannelLst();

        let chatChannel = chatChannelLst.find(x => x.channel == channel);

        if (chatChannel == null) {
            chatChannel = new ChatChannel();
            chatChannel.channel = channel;

            chatChannel.avatarChannel = new AvatarChannel();
            chatChannel.users = [];
            chatChannel.messages = [];

            chatChannelLst.push(chatChannel);
        }

        if (gsChannelInfo.containsKey(ChatParameterCode.Name))
            chatChannel.name = gsChannelInfo.getString(ChatParameterCode.Name);

        if (gsChannelInfo.containsKey(ChatParameterCode.AvatarChannel)) {
            let gsAvatarChannel = gsChannelInfo.getGNHashtable(ChatParameterCode.AvatarChannel);

            chatChannel.avatarChannel.type = gsAvatarChannel.getNumber(ChatParameterCode.Type);
            chatChannel.avatarChannel.value = gsAvatarChannel.getString(ChatParameterCode.Value);
        }

        if (gsChannelInfo.containsKey(ChatParameterCode.ChannelType))
            chatChannel.channelType = gsChannelInfo.getNumber(ChatParameterCode.ChannelType);

        if (gsChannelInfo.containsKey(ChatParameterCode.ChatMessageLst)) {
            let gsMessages = gsChannelInfo.getGNArray(ChatParameterCode.ChatMessageLst);

            for (let i = 0; i < gsMessages.count(); i++) {
                let gsMessage = gsMessages.getGNHashtable(i);

                let tsCreate = gsMessage.getNumber(ChatParameterCode.TsCreate);
                let chatMessage = chatChannel.messages.find(x => x.tsCreate == tsCreate);

                if (chatMessage == null) {
                    chatMessage = new ChatMessage();

                    chatMessage.tsCreate = tsCreate;
                    chatMessage.messageEditeds = [];

                    chatChannel.messages.push(chatMessage);
                }

                if (gsMessage.containsKey(ChatParameterCode.Message))
                    chatMessage.message = gsMessage.getString(ChatParameterCode.Message);

                if (gsMessage.containsKey(ChatParameterCode.UserId))
                    chatMessage.senderId = gsMessage.getString(ChatParameterCode.UserId);

                if (gsMessage.containsKey(ChatParameterCode.TsLastUpdate))
                    chatMessage.tsLastUpdate = gsMessage.getNumber(ChatParameterCode.TsLastUpdate);

                if (gsMessage.containsKey(ChatParameterCode.IsDelete))
                    chatMessage.isDelete = gsMessage.getBoolean(ChatParameterCode.IsDelete);

                if (gsMessage.containsKey(ChatParameterCode.MessageEditeds)) {
                    chatMessage.messageEditeds.length = 0;

                    let gsMessageEditeds = gsMessage.getGNArray(ChatParameterCode.MessageEditeds);

                    for (let j = 0; j < gsMessageEditeds.count(); j++) {
                        let gsMessageEdited = gsMessageEditeds.getGNHashtable(j);

                        let editChatMessage = new EditChatMessage();
                        editChatMessage.message = gsMessageEdited.getString(ChatParameterCode.Message);
                        editChatMessage.tsCreate = gsMessageEdited.getNumber(ChatParameterCode.TsCreate);

                        chatMessage.messageEditeds.push(editChatMessage);
                    }
                }
            }
        }

        let onChatChannelChange = GNNetwork.getOnChatChannelChange();
        if (onChatChannelChange != null) onChatChannelChange(chatChannel);
    }

}
