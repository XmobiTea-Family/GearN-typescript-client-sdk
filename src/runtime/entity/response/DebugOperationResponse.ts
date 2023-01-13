import { GNArray, GNHashtable } from "./../../common/GNData";
import { DebugErrorCode } from "./../../constant/errorCode/DebugErrorCode";
import { DebugParameterCode } from "./../../constant/parameterCode/DebugParameterCode";
import { OperationResponse } from "./../OperationResponse";
import { CustomOperationResponse } from "./CustomOperationResponse";

export class DebugOperationResponse extends CustomOperationResponse {
    public boolean: boolean;
    public string: string;
    public number: number;
    public gnHashtable: GNHashtable;
    public gnArray: GNArray;

    public override setupOperationResponse(operationResponse: OperationResponse): void {
        super.setupOperationResponse(operationResponse);

        if (!this.hasError()) {
            if (this.errorCode == DebugErrorCode.Ok) {
                this.boolean = this.parameters.getBoolean(DebugParameterCode.Boolean);
                this.string = this.parameters.getString(DebugParameterCode.String);
                this.number = this.parameters.getNumber(DebugParameterCode.Number);
                this.gnHashtable = this.parameters.getGNHashtable(DebugParameterCode.GNHashtable);
                this.gnArray = this.parameters.getGNArray(DebugParameterCode.GNArray);
            }
        }
    }
}
