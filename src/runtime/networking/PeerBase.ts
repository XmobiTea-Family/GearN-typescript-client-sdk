import { RequestRole } from "./../constant/enumType/RequestRole";
import { RequestType } from "./../constant/enumType/RequestType";
import { Action1 } from "./../common/Action1";
import { GNArray, GNHashtable } from "./../common/GNData";
import { InvalidMemberType } from "./../constant/enumType/InvalidMemberType";
import { ParameterCode } from "./../constant/parameterCode/ParameterCode";
import { ReturnCode } from "./../constant/ReturnCode";
import { InvalidMember } from "./../entity/InvalidMember";
import { OperationRequest } from "./../entity/OperationRequest";
import { OperationResponse } from "./../entity/OperationResponse";
import { GNNetwork } from "./../GNNetwork";
import { GNDebug } from "./../logger/GNDebug";
import { IPeer } from "./IPeer";
import { OperationPending } from "./OperationPending";
import { StorageService } from "./../helper/StorageService";

/**
 * Implements the shared request queue, timeout handling, and response parsing used by both transports.
 */
export abstract class PeerBase implements IPeer {
	private operationPendingQueue: Array<OperationPending>;

	private operationWaitingResponseDict: Map<number, OperationPending>;

	private static requestId: number = 0;

	private perMsgTimer: number = 0;
	private nextSendMsgTimer: number = 0;
	private checkTimeoutOperationPending: number = 0;

	/**
	 * Returns the configured send rate in messages per second.
	 */
	protected getSendRate(): number {
		return (1000 / this.perMsgTimer);
	}

	/**
	 * Converts a send rate in messages per second into the internal service interval.
	 */
	protected setSendRate(sendRate: number) {
		this.perMsgTimer = 1000 / sendRate / 1000;
	}

	ping: number;
	private pingLst: number[];

	protected isUse: boolean;

	/**
	 * Initializes shared queue state, ping tracking, send rate configuration,
	 * and then lets the concrete transport build its low-level client.
	 */
	public initPeer() {
		if (this.operationWaitingResponseDict == null)
			this.operationWaitingResponseDict = new Map();

		if (this.operationPendingQueue == null)
			this.operationPendingQueue = [];

		if (this.pingLst == null)
			this.pingLst = [];

		this.initSendRate();
		this.initGNSocketObject();
	}

	/**
	 * Loads the send rate from the shared server settings.
	 */
	private initSendRate(): void {
		let gnServerSettings = GNNetwork.getGNServerSettings();
		if (gnServerSettings == null)
			throw new Error("Null GN Server Settings, please find it now");

		this.setSendRate(gnServerSettings.getSendRate());
	}

	/**
	 * Lets the concrete transport allocate and configure its low-level client.
	 */
	protected abstract initGNSocketObject(): void;

	/**
	 * Queues a request so service() can send it at the configured rate.
	 */
	public enqueue(requestType: RequestType, role: RequestRole, operationRequest: OperationRequest, onOperationResponse: Action1<OperationResponse>, authToken: string, secretKey: string, customTags: GNHashtable, gameId: string): void {
		if (!this.isUse) {
			GNDebug.logError("[GearN] Server Settings dont setup to use this to send operation request.");
			return;
		}

		if (operationRequest.getRequestId() != -1) operationRequest.setRequestId(++PeerBase.requestId);

		let operationPending = new OperationPending(requestType, role, operationRequest, onOperationResponse, authToken, secretKey, customTags, gameId);
		this.operationPendingQueue.push(operationPending);

		this.onEnqueue(operationPending);
	}

	/**
	 * Gives the concrete transport a hook to react immediately after enqueueing.
	 */
	protected abstract onEnqueue(operationPending: OperationPending): void;

	/**
	 * Returns whether the concrete transport is enabled by configuration.
	 */
	public isUsing(): boolean {
		return this.isUse;
	}

	/**
	 * Processes timeout checks and sends queued requests at the configured send rate.
	 */
	service() {
		if (!this.isUse)
			return;

		let nowSecond = Date.now() / 1000;
		if (this.checkTimeoutOperationPending < nowSecond) {
			this.checkTimeoutOperationPending = nowSecond + 0.1;

			if (this.operationWaitingResponseDict.size != 0) {
				let gnHashtableLst: GNHashtable[] = [];

				this.operationWaitingResponseDict.forEach((operationPending, operationPendingKey) => {
					if (operationPending.isTimeout()) {
						let gnHashtable = new GNHashtable();

						gnHashtable.add(ParameterCode.ReturnCode, ReturnCode.OperationTimeout);
						gnHashtable.add(ParameterCode.Parameters, null);
						gnHashtable.add(ParameterCode.ResponseId, operationPending.getOperationRequest().getRequestId());

						gnHashtableLst.push(gnHashtable);
					}
				});

				if (gnHashtableLst.length != 0) {
					gnHashtableLst.forEach(gnHashtable => {
						this.onResponseHandler(gnHashtable);
					});
				}
			}
		}

		if (this.nextSendMsgTimer < nowSecond) {
			if (this.operationPendingQueue.length != 0) {
				this.nextSendMsgTimer = nowSecond + this.perMsgTimer;

				let operationPending = this.operationPendingQueue.shift();

				this.send(operationPending);
			}
		}
	}

	/**
	 * Converts a raw transport payload into `OperationResponse`, refreshes cached auth or timing state
	 * on success, and resolves the pending callback.
	 */
	protected onResponseHandler(obj: GNHashtable): void {
		let responseId = obj.getNumber(ParameterCode.ResponseId);
		if (this.operationWaitingResponseDict.has(responseId)) {
			let operationPending = this.operationWaitingResponseDict.get(responseId);
			operationPending.onRecv();

			this.operationWaitingResponseDict.delete(responseId);

			let returnCode = obj.getNumber(ParameterCode.ReturnCode);

			let parameters: GNHashtable = obj.getGNHashtable(ParameterCode.Parameters);
			let debugMessage: string = obj.getString(ParameterCode.DebugMessage);
			let invalidRequestParameterArray: GNArray = obj.getGNArray(ParameterCode.InvalidRequestParameters);

			let operationRequest = operationPending.getOperationRequest();
			let operationResponse = new OperationResponse(operationRequest.getOperationCode(), operationRequest.getRequestId());

			operationResponse.setReturnCode(returnCode);
			operationResponse.setDebugMessage(debugMessage);
			operationResponse.setParameters(parameters);

			if (invalidRequestParameterArray != null) {
				let invalidMembers: InvalidMember[] = [];
				for (let i = 0; i < invalidRequestParameterArray.count(); i++) {
					let arrChild = invalidRequestParameterArray.getGNArray(i);

					invalidMembers.push({
						code: arrChild.getString(0),
						invalidMemberType: <InvalidMemberType>arrChild.getNumber(1)
					});
				}
				operationResponse.setInvalidMembers(invalidMembers);
			}

			if (!operationResponse.hasError()) {
				this.addPing(operationPending.getExecuteTimerInMs());

				if (parameters != null) {
					// Keep auth and timing state in sync with the latest successful response.
					if (parameters.containsKey(ParameterCode.AuthToken)) {
						let authToken = parameters.getString(ParameterCode.AuthToken);

						GNNetwork.getAuthenticateStatus().setAuthToken(authToken);

						StorageService.setString(GNNetwork.AUTH_TOKEN_KEY, authToken);
					}

					if (parameters.containsKey(ParameterCode.UserId)) {
						let userId = parameters.getString(ParameterCode.UserId);

						GNNetwork.getAuthenticateStatus().setUserId(userId);

						StorageService.setString(GNNetwork.USER_ID_KEY, userId);
					}

					if (parameters.containsKey(ParameterCode.Ts)) {
						GNNetwork.peer.setServerTimeMilliseconds(parameters.getNumber(ParameterCode.Ts, Date.now()));
					}
				}
			}

			GNDebug.log("[GN RECV] " + operationResponse.toString());

			let callback = operationPending.getCallback();
			if (callback != null) callback(operationResponse);
		}
		else {
			GNDebug.logError("[GearN] OnResponseHandler, unavailable request id " + obj);
		}
	}

	/**
	 * Marks a pending request as sent and tracks it for correlation
	 * when a response callback has been provided.
	 */
	send(operationPending: OperationPending): void {
		operationPending.onSend();

		let operationRequest = operationPending.getOperationRequest();

		if (operationRequest.getRequestId() != -1) {
			if (operationPending.getCallback() != null) {
				this.operationWaitingResponseDict.set(operationRequest.getRequestId(), operationPending);
			}
		}
	}

	/**
	 * Updates the rolling latency average from the last successful round trip.
	 * The SDK stores half of the measured round-trip time as transport latency.
	 */
	addPing(value: number): void {
		if (this.pingLst.length > 10)
			this.pingLst.shift();
		this.pingLst.push(value / 2);

		if (this.pingLst.length != 0) {
			let total = 0;
			for (let i = 0; i < this.pingLst.length; i++) {
				total += this.pingLst[i];
			}

			let average = total / this.pingLst.length;
			this.ping = (average * 1000);
		}
		else
			this.ping = -1;
	}
}
