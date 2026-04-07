import { ConverterService } from "./../../helper/ConverterService";
import { Constructor } from "./../GNMetadata";
import { RequestRole } from "./../../constant/enumType/RequestRole";
import { RequestType } from "./../../constant/enumType/RequestType";
import { OperationRequest } from "./../OperationRequest";

/**
 * Defines the minimum contract that every typed SDK request must implement.
 */
export abstract class CustomOperationRequest {
	protected abstract operationCode: string;

	protected abstract requestType: RequestType;

	protected abstract role: RequestRole;

	protected operationTimeout: number;

	/**
	 * Returns the request group used by the low-level transport.
	 */
	public getRequestType(): RequestType {
		return this.requestType;
	}

	/**
	 * Returns the security role used to resolve the correct secret key.
	 */
	public getRole(): RequestRole {
		return this.role;
	}

	/**
	 * Stores the timeout that will be applied to the generated operation request.
	 */
	constructor(timeout: number) {
		this.operationTimeout = timeout;
	}

	/**
	 * Builds the low-level OperationRequest consumed by GNNetwork.
	 */
	public abstract build(): OperationRequest;

}

/**
 * Provides the common implementation for typed request wrappers based on request DTOs.
 */
export abstract class CustomOperationRequestAbstract<TRequestData> extends CustomOperationRequest {
	public requestData: TRequestData;
	protected requestDataCls: Constructor<TRequestData>;

	/**
	 * Stores the request DTO that will be serialized before sending.
	 */
	constructor(requestData: TRequestData, timeout: number) {
		super(timeout);

		this.requestData = requestData;
	}

	/**
	 * Serializes the current DTO into the transport-friendly OperationRequest shape.
	 */
	public override build(): OperationRequest {
		let request = new OperationRequest(this.operationCode, this.operationTimeout);

		request.setParameters(ConverterService.serializeObject(this.requestData, this.requestDataCls));

		return request;
	}
}