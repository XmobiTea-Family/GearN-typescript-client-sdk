import { GNHashtable } from "./../../common/GNData";
import { OperationCode } from "./../../constant/OperationCode";
import { FriendParameterCode } from "./../../constant/parameterCode/FriendParameterCode";
import { OperationRequest } from "./../OperationRequest";
import { CustomOperationRequest } from "./CustomOperationRequest";

export class RemoveFriendOperationRequest extends CustomOperationRequest {
    protected override operationCode: number = OperationCode.RemoveFriend;

    protected override operationEncrypted: boolean = true;

    constructor(friendId: string, timeout: number = OperationRequest.DefaultTimeOut) {
        super(timeout);

        this.operationParameters = GNHashtable.builder()
            .add(FriendParameterCode.FriendId, friendId)
            .build();
    }
}
