import { GNHashtable } from "./../common/GNData";

/**
 * Represents a low-level request sent to the GearN backend.
 */
export class OperationRequest {
	public static readonly defaultTimeOut: number = 20;

	private operationCode: string;
	private requestId: number;
	private parameters: GNHashtable;
	private timeout: number;

	/**
	 * Creates a new request with the given operation code and timeout in seconds.
	 */
	constructor(operationCode: string, timeout: number = OperationRequest.defaultTimeOut) {
		this.operationCode = operationCode;
		this.timeout = timeout;
	}

	/**
	 * Returns the operation code encoded into this request.
	 */
	public getOperationCode(): string {
		return this.operationCode;
	}

	/**
	 * Returns the request id used to correlate the response.
	 */
	public getRequestId(): number {
		return this.requestId;
	}

	/**
	 * Returns the parameter bag that will be serialized to the backend.
	 */
	public getParameters(): GNHashtable {
		return this.parameters;
	}

	/**
	 * Returns the timeout in seconds applied to this request.
	 */
	public getTimeout(): number {
		return this.timeout;
	}

	/**
	 * Sets the request id used for response correlation and returns the current request for chaining.
	 */
	public setRequestId(requestId: number): OperationRequest {
		this.requestId = requestId;
		return this;
	}

	/**
	 * Adds or replaces a single request parameter and returns the current request for chaining.
	 */
	public setParameter(key: string, value: any): OperationRequest {
		if (this.parameters == null)
			this.parameters = new GNHashtable();

		this.parameters.add(key, value);

		return this;
	}

	/**
	 * Replaces the whole parameter bag and returns the current request for chaining.
	 */
	public setParameters(parameters: GNHashtable): OperationRequest {
		this.parameters = parameters;
		return this;
	}

	/**
	 * Sets the timeout in seconds and returns the current request for chaining.
	 */
	public setTimeout(timeout: number): OperationRequest {
		this.timeout = timeout;
		return this;
	}

	/**
	 * Returns a debug-friendly string representation of this instance.
	 */
	public toString(): string {
		return "OperationCode: " + this.operationCode + ", requestId: " + this.requestId + ", parameters " + JSON.stringify(this.parameters?.toData());
	}

}
