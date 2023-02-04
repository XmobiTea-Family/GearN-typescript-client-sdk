import { AvatarChannel } from "./AvatarChannel";
import { UserChannel } from "./UserChannel";
import { ChatMessage } from "./ChatMessage";

export class ChatChannel {
    public channel: string;
    public name: string;
    public avatarChannel: AvatarChannel;
    public userCount: number;
    public users: UserChannel[];
    public tsCreate: number;
    public channelType: number;
    public messages: ChatMessage[];
}
