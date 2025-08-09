import { GNHashtable } from "./../common/GNData";

export class OperationRequest {
	public static readonly defaultTimeOut: number = 20;

	private operationCode: string;
	private requestId: number;
	private parameters: GNHashtable;
	private timeout: number;

	constructor(operationCode: string, timeout: number = OperationRequest.defaultTimeOut) {
		this.operationCode = operationCode;
		this.timeout = timeout;
	}

	public getOperationCode(): string {
		return this.operationCode;
	}

	public getRequestId(): number {
		return this.requestId;
	}

	public getParameters(): GNHashtable {
		return this.parameters;
	}

	public getTimeout(): number {
		return this.timeout;
	}

	public setRequestId(requestId: number): OperationRequest {
		this.requestId = requestId;
		return this;
	}

	public setParameter(key: string, value: any): OperationRequest {
		if (this.parameters == null)
			this.parameters = new GNHashtable();

		this.parameters.add(key, value);

		return this;
	}

	public setParameters(parameters: GNHashtable): OperationRequest {
		this.parameters = parameters;
		return this;
	}

	public setTimeout(timeout: number): OperationRequest {
		this.timeout = timeout;
		return this;
	}

	public toString(): string {
		return "OperationCode: " + this.operationCode + ", requestId: " + this.requestId + ", parameters " + JSON.stringify(this.parameters?.toData());
	}

}
