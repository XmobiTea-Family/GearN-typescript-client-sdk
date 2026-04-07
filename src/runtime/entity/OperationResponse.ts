import { CodeHelper } from "./../helper/CodeHelper";
import { GNHashtable } from "./../common/GNData";
import { ReturnCode } from "./../constant/ReturnCode";
import { InvalidMember } from "./InvalidMember";

/**
 * Represents a low-level response returned by the GearN backend.
 */
export class OperationResponse {
	private operationCode: string;
	private responseId: number;
	private returnCode: number;
	private debugMessage: string;
	private parameters: GNHashtable;

	private invalidMembers: InvalidMember[];

	/**
	 * Creates a new OperationResponse instance.
	 */
	constructor(operationCode: string, responseId: number) {
		this.operationCode = operationCode;
		this.responseId = responseId;
		this.parameters = new GNHashtable();
		this.debugMessage = null;
	}

	/**
	 * Returns the operation code that produced this response.
	 */
	public getOperationCode(): string {
		return this.operationCode;
	}

	/**
	 * Returns the backend return code.
	 */
	public getReturnCode(): number {
		return this.returnCode;
	}

	/**
	 * Returns the deserialized response parameters.
	 */
	public getParameters(): GNHashtable {
		return this.parameters;
	}

	/**
	 * Returns the request or response correlation id.
	 */
	public getResponseId(): number {
		return this.responseId;
	}

	/**
	 * Returns the backend debug message when one was provided.
	 */
	public getDebugMessage(): string {
		return this.debugMessage;
	}

	/**
	 * Returns invalid request members reported by the backend.
	 */
	public getInvalidMembers(): InvalidMember[] {
		return this.invalidMembers;
	}

	/**
	 * Returns `true` when the backend return code is not `ReturnCode.Ok`.
	 */
	public hasError(): boolean {
		return this.getReturnCode() != ReturnCode.Ok;
	}

	/**
	 * Sets the backend return code and returns the current response for chaining.
	 */
	public setReturnCode(returnCode: number): OperationResponse {
		this.returnCode = returnCode;
		return this;
	}

	/**
	 * Sets the backend debug message and returns the current response for chaining.
	 */
	public setDebugMessage(debugMessage: string): OperationResponse {
		this.debugMessage = debugMessage;
		return this;
	}

	/**
	 * Adds or replaces a single response parameter and returns the current response for chaining.
	 */
	public setParameter(k: string, value: any): OperationResponse {
		this.parameters.add(k, value);
		return this;
	}

	/**
	 * Replaces the whole response parameter bag and returns the current response for chaining.
	 */
	public setParameters(parameters: GNHashtable): OperationResponse {
		this.parameters = parameters;
		return this;
	}

	/**
	 * Sets the invalid member collection and returns the current response for chaining.
	 */
	public setInvalidMembers(invalidMembers: InvalidMember[]): OperationResponse {
		this.invalidMembers = invalidMembers;
		return this;
	}

	/**
	 * Returns a debug-friendly string representation of this instance.
	 */
	public toString(): string {
		let stringBuilder = "";

		stringBuilder += "OperationCode: " + this.operationCode + ", responseId: " + this.responseId + ", returnCode " + CodeHelper.getReturnCodeName(this.returnCode);

		if (this.returnCode == ReturnCode.Ok) stringBuilder += ", parameters " + JSON.stringify(this.parameters?.toData());
		else if (this.returnCode == ReturnCode.InvalidRequestParameters) {
			if (this.invalidMembers != null) {
				let invalidStr = "";

				this.invalidMembers.forEach(invalidMember => {
					invalidStr += invalidMember;
				});
				stringBuilder += ", invalidMembers " + invalidStr;
			}
			else stringBuilder += ", invalidMembers " + this.invalidMembers;
		}
		else stringBuilder += ", debugMessage " + this.debugMessage;

		return stringBuilder;
	}

}
