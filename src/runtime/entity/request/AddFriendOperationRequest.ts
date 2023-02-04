import { GNHashtable } from "./../../common/GNData";
import { OperationCode } from "./../../constant/OperationCode";
import { FriendParameterCode } from "./../../constant/parameterCode/FriendParameterCode";
import { OperationRequest } from "./../OperationRequest";
import { CustomOperationRequest } from "./CustomOperationRequest";

export class AddFriendOperationRequest extends CustomOperationRequest {
    protected override operationCode: number = OperationCode.AddFriend;

    protected override operationEncrypted: boolean = true;

    constructor(friendId: string, forceAcceptFriend: boolean = null, timeout: number = OperationRequest.DefaultTimeOut) {
        super(timeout);

        this.operationParameters = GNHashtable.builder()
            .add(FriendParameterCode.FriendId, friendId)
            .build();

        if (forceAcceptFriend != null) this.operationParameters.add(FriendParameterCode.ForceAcceptFriend, forceAcceptFriend);
    }
}
