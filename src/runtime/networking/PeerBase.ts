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
import store from "store";

export abstract class PeerBase implements IPeer {
	private operationPendingQueue: Array<OperationPending>;

	private operationWaitingResponseDict: Map<number, OperationPending>;

	private static requestId: number = 0;

	private perMsgTimer: number = 0;
	private nextSendMsgTimer: number = 0;
	private checkTimeoutOperationPending: number = 0;

	protected getSendRate(): number {
		return (1000 / this.perMsgTimer);
	}

	protected setSendRate(sendRate: number) {
		this.perMsgTimer = 1000 / sendRate / 1000;
	}

	ping: number;
	private pingLst: number[];

	protected isUse: boolean;

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

	private initSendRate(): void {
		let gnServerSettings = GNNetwork.getGNServerSettings();
		if (gnServerSettings == null)
			throw new Error("Null GN Server Settings, please find it now");

		this.setSendRate(gnServerSettings.getSendRate());
	}

	protected abstract initGNSocketObject(): void;

	public enqueue(requestType: RequestType, role: RequestRole, operationRequest: OperationRequest, onOperationResponse: Action1<OperationResponse>, authToken: string, secretKey: string, customTags: GNHashtable, gameId: string): void {
		if (!this.isUsing) {
			GNDebug.logError("[GearN] Server Settings dont setup to use this to send operation request.");
			return;
		}

		if (operationRequest.getRequestId() != -1) operationRequest.setRequestId(++PeerBase.requestId);

		let operationPending = new OperationPending(requestType, role, operationRequest, onOperationResponse, authToken, secretKey, customTags, gameId);
		this.operationPendingQueue.push(operationPending);

		this.onEnqueue(operationPending);
	}

	protected abstract onEnqueue(operationPending: OperationPending): void;

	public isUsing(): boolean {
		return this.isUse;
	}

	service() {
		if (!this.isUsing)
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
					if (parameters.containsKey(ParameterCode.AuthToken)) {
						let authToken = parameters.getString(ParameterCode.AuthToken);

						GNNetwork.getAuthenticateStatus().setAuthToken(authToken);

						store.set(GNNetwork.AUTH_TOKEN_KEY, authToken);
					}

					if (parameters.containsKey(ParameterCode.UserId)) {
						let userId = parameters.getString(ParameterCode.UserId);

						GNNetwork.getAuthenticateStatus().setUserId(userId);

						store.set(GNNetwork.USER_ID_KEY, userId);
					}

					if (parameters.containsKey(ParameterCode.Ts)) {
						GNNetwork.peer.setServerTimeMilliseconds(parameters.getNumber(ParameterCode.Ts, new Date().getUTCMilliseconds()));
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

	send(operationPending: OperationPending): void {
		operationPending.onSend();

		let operationRequest = operationPending.getOperationRequest();

		if (operationRequest.getRequestId() != -1) {
			if (operationPending.getCallback() != null) {
				this.operationWaitingResponseDict.set(operationRequest.getRequestId(), operationPending);
			}
		}
	}

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
