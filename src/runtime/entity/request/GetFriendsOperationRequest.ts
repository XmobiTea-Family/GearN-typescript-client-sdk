import { GNHashtable } from "./../../common/GNData";
import { OperationCode } from "./../../constant/OperationCode";
import { OperationRequest } from "./../OperationRequest";
import { CustomOperationRequest } from "./CustomOperationRequest";

export class GetFriendsOperationRequest extends CustomOperationRequest {
    protected override operationCode: number = OperationCode.GetFriends;

    protected override operationEncrypted: boolean = true;

    constructor(timeout: number = OperationRequest.DefaultTimeOut) {
        super(timeout);

        this.operationParameters = GNHashtable.builder()
            .build();
    }
}
