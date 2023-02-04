import { FriendParameterCode } from "./../../constant/parameterCode/FriendParameterCode";
import { FriendItem } from "./../../entity/server/FriendItem";
import { GNNetwork } from "./../../GNNetwork";
import { EventCode } from "./../../constant/EventCode";
import { OperationEvent } from "./../../entity/OperationEvent";
import { IServerEventHandler } from "./IServerEventHandler";
import { FriendStatus } from "./../../constant/enumType/FriendStatus";

@IServerEventHandler.registerEvent
export class OnFriendUpdateEventHandler implements IServerEventHandler {

    public getEventCode(): number {
        return EventCode.OnFriendUpdate;
    }

    public handle(operationEvent: OperationEvent): void {
        let friendItemLst = GNNetwork.getFriendItemLst();

        let paramters = operationEvent.getParameters();
        let gsFriendLst = paramters.getGNArray(FriendParameterCode.FriendLst);

        for (let i = 0; i < gsFriendLst.count(); i++) {
            let gsFriend = gsFriendLst.getGNHashtable(i);

            let friendId = gsFriend.getString(FriendParameterCode.FriendId);
            let friendStatus = <FriendStatus>gsFriend.getNumber(FriendParameterCode.FriendStatus);
            let tsLastUpdate = gsFriend.getNumber(FriendParameterCode.TsLastUpdate, GNNetwork.getServerTimestamp());

            let friendItem = friendItemLst.find(x => x.friendId == friendId);
            if (friendItem == null) {
                friendItem = new FriendItem();
                friendItem.friendId = friendId;
                friendItem.friendStatus = friendStatus;

                if (friendStatus != FriendStatus.Unknown) {
                    friendItem.tsLastUpdate = tsLastUpdate;

                    friendItemLst.push(friendItem);
                }
            }
            else {
                friendItem.friendStatus = friendStatus;
                friendItem.tsLastUpdate = tsLastUpdate;

                if (friendStatus == FriendStatus.Unknown) {
                    let indexOf = friendItemLst.indexOf(friendItem);

                    if (indexOf != -1) {
                        friendItemLst.splice(indexOf, 1);
                    }
                }
            }

            let onFriendItemChange = GNNetwork.getOnFriendItemChange();
            if (onFriendItemChange != null) onFriendItemChange(friendItem);
        }
    }

}
