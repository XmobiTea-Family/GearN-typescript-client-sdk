import { GNHashtable } from "./../../common/GNData";
import { OperationCode } from "./../../constant/OperationCode";
import { FriendParameterCode } from "./../../constant/parameterCode/FriendParameterCode";
import { OperationRequest } from "./../OperationRequest";
import { CustomOperationRequest } from "./CustomOperationRequest";

export class FindPlayerOperationRequest extends CustomOperationRequest {
    protected override operationCode: number = OperationCode.FindPlayer;

    protected override operationEncrypted: boolean = true;

    constructor(keyword: string, skip: number = 0, limit: number = 20, timeout: number = OperationRequest.DefaultTimeOut) {
        super(timeout);

        this.operationParameters = GNHashtable.builder()
            .add(FriendParameterCode.Keyword, keyword)
            .add(FriendParameterCode.Skip, skip)
            .add(FriendParameterCode.Limit, limit)
            .build();
    }
}
