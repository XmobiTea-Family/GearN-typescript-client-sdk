import { ChatParameterCode } from "./../../constant/parameterCode/ChatParameterCode";
import { ChatMessage, EditChatMessage } from "./../../entity/server/ChatMessage";
import { ChatUser } from "./../../entity/server/ChatUser";
import { GNNetwork } from "./../../GNNetwork";
import { EventCode } from "./../../constant/EventCode";
import { OperationEvent } from "./../../entity/OperationEvent";
import { IServerEventHandler } from "./IServerEventHandler";

@IServerEventHandler.registerEvent
export class OnUserChatEventHandler implements IServerEventHandler {

    public getEventCode(): number {
        return EventCode.OnUserChat;
    }

    public handle(operationEvent: OperationEvent): void {
        let parameters = operationEvent.getParameters();

        let userId = parameters.getString(ChatParameterCode.UserId);

        let chatUserLst = GNNetwork.getChatUserLst();

        let chatUser = chatUserLst.find(x => x.userId == userId);

        if (chatUser == null) {
            chatUser = new ChatUser();
            chatUser.userId = userId;
            chatUser.messages = [];

            chatUserLst.push(chatUser);
        }

        let gsMessages = parameters.getGNArray(ChatParameterCode.ChatMessageLst);

        for (let i = 0; i < gsMessages.count(); i++) {
            let gsMessage = gsMessages.getGNHashtable(i);
            let tsCreate = gsMessage.getNumber(ChatParameterCode.TsCreate);

            let message = chatUser.messages.find(x => x.tsCreate == tsCreate);
            if (message == null) {
                message = new ChatMessage();
                message.tsCreate = tsCreate;
                message.messageEditeds = [];

                chatUser.messages.push(message);
            }

            if (gsMessage.containsKey(ChatParameterCode.Message))
                message.message = gsMessage.getString(ChatParameterCode.Message);

            if (gsMessage.containsKey(ChatParameterCode.UserId))
                message.senderId = gsMessage.getString(ChatParameterCode.UserId);

            if (gsMessage.containsKey(ChatParameterCode.TsLastUpdate))
                message.tsLastUpdate = gsMessage.getNumber(ChatParameterCode.TsLastUpdate, tsCreate);

            if (gsMessage.containsKey(ChatParameterCode.IsDelete))
                message.isDelete = gsMessage.getBoolean(ChatParameterCode.IsDelete);

            if (gsMessage.containsKey(ChatParameterCode.MessageEditeds)) {
                message.messageEditeds.length = 0;

                let gsMessageEditeds = gsMessage.getGNArray(ChatParameterCode.MessageEditeds);

                for (let j = 0; j < gsMessageEditeds.count(); j++) {
                    let gsMessageEdited = gsMessageEditeds.getGNHashtable(j);

                    let editChatMessage = new EditChatMessage();
                    editChatMessage.message = gsMessageEdited.getString(ChatParameterCode.Message);
                    editChatMessage.tsCreate = gsMessageEdited.getNumber(ChatParameterCode.TsCreate);

                    message.messageEditeds.push(editChatMessage);
                }
            }
        }

        let onChatUserChange = GNNetwork.getOnChatUserChange();
        if (onChatUserChange != null) onChatUserChange(chatUser);
    }

}
