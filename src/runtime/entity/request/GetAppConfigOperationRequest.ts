import { GNArray, GNHashtable } from "./../../common/GNData";
import { OperationCode } from "./../../constant/OperationCode";
import { GetAppConfigParameterCode } from "./../../constant/parameterCode/GetAppConfigParameterCode";
import { OperationRequest } from "./../OperationRequest";
import { CustomOperationRequest } from "./CustomOperationRequest";

export class GetAppConfigOperationRequest extends CustomOperationRequest {
    protected override operationCode: number = OperationCode.GetAppConfig;

    protected override operationEncrypted: boolean = true;

    constructor(configTypes: GNArray, timeout: number = OperationRequest.DefaultTimeOut) {
        super(timeout);

        this.operationParameters = GNHashtable.builder()
            .add(GetAppConfigParameterCode.ConfigTypes, configTypes)
            .build();
    }
}
