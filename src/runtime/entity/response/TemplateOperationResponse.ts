import { DebugErrorCode } from "./../../constant/errorCode/DebugErrorCode";
import { DebugParameterCode } from "./../../constant/parameterCode/DebugParameterCode";
import { OperationResponse } from "./../OperationResponse";
import { CustomOperationResponse } from "./CustomOperationResponse";

export class TemplateOperationResponse extends CustomOperationResponse {
    public boolean: boolean;

    public override setupOperationResponse(operationResponse: OperationResponse): void {
        super.setupOperationResponse(operationResponse);

        if (!this.hasError()) {
            if (this.errorCode == DebugErrorCode.Ok) {
                this.boolean = this.parameters.getBoolean(DebugParameterCode.Boolean);
            }
        }
    }
}
