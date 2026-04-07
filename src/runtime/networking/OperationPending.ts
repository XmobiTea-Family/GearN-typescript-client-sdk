import { GNHashtable } from "./../common/GNData";
import { RequestRole } from "./../constant/enumType/RequestRole";
import { RequestType } from "./../constant/enumType/RequestType";
import { Action1 } from "./../common/Action1";
import { OperationRequest } from "./../entity/OperationRequest";
import { OperationResponse } from "./../entity/OperationResponse";

/**
 * Tracks a queued request while it is waiting to be sent or resolved.
 */
export class OperationPending {
	private operationRequest: OperationRequest;
	private requestType: RequestType;
	private role: RequestRole;
	private authToken: string;
	private secretKey: string;
	private gameId: string;
	private customTags: GNHashtable;
	private onOperationResponse: Action1<OperationResponse>;
	private timeout: number;

	private firstSend: number;
	private secondsSend: number;

	/**
	 * Creates a new OperationPending instance.
	 */
	constructor(requestType: RequestType, role: RequestRole, operationRequest: OperationRequest, onOperationResponse: Action1<OperationResponse>, authToken: string, secretKey: string, customTags: GNHashtable, gameId: string) {
		this.operationRequest = operationRequest;
		this.onOperationResponse = onOperationResponse;

		this.timeout = Date.now() + OperationRequest.defaultTimeOut * 1000;
		this.firstSend = 0;
		this.secondsSend = 0;

		this.requestType = requestType;
		this.role = role;
		this.authToken = authToken;
		this.secretKey = secretKey;
		this.gameId = gameId;
		this.customTags = customTags;
	}

	/**
	 * Returns the request type assigned to this pending operation.
	 */
	public getRequestType(): RequestType {
		return this.requestType;
	}

	/**
	 * Returns the request role assigned to this pending operation.
	 */
	public getRole(): RequestRole {
		return this.role;
	}

	/**
	 * Returns the auth token attached to this pending operation.
	 */
	public getAuthToken(): string {
		return this.authToken;
	}

	/**
	 * Returns the secret key attached to this pending operation.
	 */
	public getSecretKey(): string {
		return this.secretKey;
	}

	/**
	 * Returns the active game id.
	 */
	public getGameId(): string {
		return this.gameId;
	}

	/**
	 * Returns the custom tags attached to this pending operation.
	 */
	public getCustomTags(): GNHashtable {
		return this.customTags;
	}

	/**
	 * Marks the operation as sent and computes its absolute timeout deadline.
	 */
	public onSend(): void {
		this.firstSend = Date.now();
		this.timeout = this.firstSend + this.operationRequest.getTimeout() * 1000;
	}

	/**
	 * Marks the operation as received so round-trip time can be measured.
	 */
	public onRecv(): void {
		this.secondsSend = Date.now();
	}

	/**
	 * Returns the measured round-trip execution time in milliseconds.
	 */
	public getExecuteTimerInMs(): number {
		return (this.secondsSend - this.firstSend);
	}

	/**
	 * Returns whether the pending operation has passed its timeout deadline.
	 */
	public isTimeout(): boolean {
		return this.timeout < Date.now();
	}

	/**
	 * Returns the underlying operation request.
	 */
	public getOperationRequest(): OperationRequest {
		return this.operationRequest;
	}

	/**
	 * Returns the callback that should receive the final operation response.
	 */
	public getCallback(): Action1<OperationResponse> {
		return this.onOperationResponse;
	}
}
