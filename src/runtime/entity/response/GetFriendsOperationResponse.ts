import { FriendParameterCode } from "./../../constant/parameterCode/FriendParameterCode";
import { GNNetwork } from "./../../GNNetwork";
import { FriendErrorCode } from "./../../constant/errorCode/FriendErrorCode";
import { OperationResponse } from "./../OperationResponse";
import { CustomOperationResponse } from "./CustomOperationResponse";

class FriendItem {
    public friendId: string;
    public isSocialLoginFriend: boolean;
    public friendStatus: number;
    public tsLastUpdate: number;
}

export class GetFriendsOperationResponse extends CustomOperationResponse {
    public friendLst: FriendItem[];

    public override setupOperationResponse(operationResponse: OperationResponse): void {
        super.setupOperationResponse(operationResponse);

        if (!this.hasError()) {
            if (this.errorCode == FriendErrorCode.Ok) {
                this.friendLst = [];

                let gsFriendLst = this.parameters.getGNArray(FriendParameterCode.FriendLst);

                for (let i = 0; i < gsFriendLst.count(); i++) {
                    let gsFriend = gsFriendLst.getGNHashtable(i);
                    let friendItem = new FriendItem();
                    friendItem.friendId = gsFriend.getString(FriendParameterCode.FriendId);
                    friendItem.isSocialLoginFriend = gsFriend.getBoolean(FriendParameterCode.FriendId);
                    friendItem.friendStatus = gsFriend.getNumber(FriendParameterCode.FriendId);
                    friendItem.tsLastUpdate = gsFriend.getNumber(FriendParameterCode.TsLastUpdate, GNNetwork.getServerTimestamp());
                }
            }
        }
    }
}
