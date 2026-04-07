import { ConverterService } from "./../../helper/ConverterService";
import { Constructor } from "./../GNMetadata";
import { GNHashtable } from "./../../common/GNData";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { ReturnCode } from "./../../constant/ReturnCode";
import { InvalidMember } from "./../InvalidMember";
import { OperationResponse } from "./../OperationResponse";

/**
 * Defines the common fields exposed by every typed SDK response wrapper.
 */
export abstract class CustomOperationResponse {
	public operationCode: string;
	public parameters: GNHashtable;
	public returnCode: number;
	public debugMessage: string;
	public errorCode: number;
	public invalidMembers: InvalidMember[];

	/**
	 * Returns whether the low-level return code indicates a transport or validation error.
	 */
	public hasReturnCodeError() {
		return this.returnCode != ReturnCode.Ok;
	}

	/**
	 * Copies low-level response data into the typed wrapper before domain deserialization.
	 */
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

	/**
	 * Returns a compact string that is useful when logging raw SDK responses.
	 */
	public toString(): string {
		return "ReturnCode: " + this.returnCode + " " + (this.parameters != null ? this.parameters.toString() : this.debugMessage);
	}

}

/**
 * Adds typed payload deserialization on top of the shared response wrapper.
 */
export abstract class CustomOperationResponseAbstract<TResponseData> extends CustomOperationResponse {
	public responseData: TResponseData;
	protected responseDataCls: Constructor<TResponseData>;

	/**
	 * Deserializes the response payload when the low-level response has no return-code error.
	 */
	public setupOperationResponse(operationResponse: OperationResponse): void {
		super.setupOperationResponse(operationResponse);

		if (!this.hasReturnCodeError()) {
			this.responseData = ConverterService.deserializeObject<TResponseData>(this.parameters, this.responseDataCls);
		}
	}

}