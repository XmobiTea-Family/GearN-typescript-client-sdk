export class EditChatMessage {
    public message: string;
    public tsCreate: number;
}

export class ChatMessage extends EditChatMessage {
    public tsLastUpdate: number;
    public messageEditeds: EditChatMessage[];
    public senderId: string;
    public isDelete: boolean;
}
