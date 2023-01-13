import { GNHashtable } from "./../../common/GNData";
import { OperationCode } from "./../../constant/OperationCode";
import { LoginParameterCode } from "./../../constant/parameterCode/LoginParameterCode";
import { OperationRequest } from "./../OperationRequest";
import { CustomOperationRequest } from "./CustomOperationRequest";

export class RegisterAccountOperationRequest extends CustomOperationRequest {
    protected override operationCode: number = OperationCode.RegisterAccount;

    protected override operationEncrypted: boolean = true;

    constructor(username: string, password: string, timeout: number = OperationRequest.DefaultTimeOut) {
        super(timeout);

        this.operationParameters = GNHashtable.builder()
            .add(LoginParameterCode.Username, username)
            .add(LoginParameterCode.Password, password)
            .build();
    }
}
