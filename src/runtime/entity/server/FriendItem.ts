import { FriendStatus } from "./../../constant/enumType/FriendStatus";

export class FriendItem {
    public friendId: string;
    public friendStatus: FriendStatus;
    public isSocialLoginFriend: boolean;
    public tsLastUpdate: number;
}
