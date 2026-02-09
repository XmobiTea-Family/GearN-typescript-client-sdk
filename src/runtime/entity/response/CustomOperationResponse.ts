import { ConverterService } from "./../../helper/ConverterService";
import { Constructor } from "./../GNMetadata";
import { GNHashtable } from "./../../common/GNData";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { ReturnCode } from "./../../constant/ReturnCode";
import { InvalidMember } from "./../InvalidMember";
import { OperationResponse } from "./../OperationResponse";

export abstract class CustomOperationResponse {
	public operationCode: string;
	public parameters: GNHashtable;
	public returnCode: number;
	public debugMessage: string;
	public errorCode: number;
	public invalidMembers: InvalidMember[];

	public hasReturnCodeError() {
		return this.returnCode != ReturnCode.Ok;
	}

	public setupOperationResponse(operationResponse: OperationResponse): void {
		this.operationCode = operationResponse.getOperationCode();
		this.returnCode = operationResponse.getReturnCode();
		this.debugMessage = operationResponse.getDebugMessage();

		this.parameters = operationResponse.getParameters();
		this.invalidMembers = operationResponse.getInvalidMembers();

		if (!this.hasReturnCodeError()) {
			this.errorCode = this.parameters.getNumber(ParameterCode.ErrorCode);
		}
	}

	public toString(): string {
		return "ReturnCode: " + this.returnCode + " " + (this.parameters != null ? this.parameters.toString() : this.debugMessage);
	}

}

export abstract class CustomOperationResponseAbstract<TResponseData> extends CustomOperationResponse {
	public responseData: TResponseData;
	protected responseDataCls: Constructor<TResponseData>;

	public setupOperationResponse(operationResponse: OperationResponse): void {
		super.setupOperationResponse(operationResponse);

		if (!this.hasReturnCodeError()) {
			this.responseData = ConverterService.deserializeObject<TResponseData>(this.parameters, this.responseDataCls);
		}
	}

}
