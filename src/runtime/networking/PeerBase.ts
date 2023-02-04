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

export abstract class PeerBase implements IPeer {
    private operationPendingQueue: OperationPending[];

    private operationWaitingResponseDic: { [k: string]: OperationPending; };

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
        if (this.operationPendingQueue == null)
            this.operationPendingQueue = [];
        if (this.operationWaitingResponseDic == null)
            this.operationWaitingResponseDic = {};
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

    public enqueue(operationRequest: OperationRequest, onOperationResponse: Action1<OperationResponse>): void {
        if (!this.isUsing) {
            GNDebug.logError("[GN] Server Settings dont setup to use this to send operation request.");
            return;
        }

        let operationPending = new OperationPending(operationRequest, onOperationResponse);
        this.operationPendingQueue.push(operationPending);
    }

    public isUsing(): boolean {
        return this.isUse;
    }

    service() {
        if (!this.isUsing)
            return;

        let nowSecond = Date.now() / 1000;
        if (this.checkTimeoutOperationPending < nowSecond) {
            this.checkTimeoutOperationPending = nowSecond + 0.1;

            let operationWaitingResponseDicKeys = Object.keys(this.operationWaitingResponseDic);
            if (operationWaitingResponseDicKeys.length != 0) {
                let gnArrayLst: GNArray[] = [];

                operationWaitingResponseDicKeys.forEach(operationPendingKey => {
                    let operationPending = this.operationWaitingResponseDic[operationPendingKey];

                    if (operationPending.isTimeout()) {
                        let gnArray = new GNArray();

                        gnArray.add(ReturnCode.OperationTimeout);
                        gnArray.add(null);
                        gnArray.add(operationPending.getOperationRequest().getRequestId());
                        gnArray.add(operationPending.getOperationRequest().isEncrypted());

                        gnArrayLst.push(gnArray);
                    }
                });

                if (gnArrayLst.length != 0) {
                    gnArrayLst.forEach(gnArray => {
                        this.onResponseHandler(gnArray, gnArray.getBoolean(3));
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

    protected onResponseHandler(obj: GNArray, isEncrypted: boolean): void {
        let responseId = obj.getNumber(2);
        if (this.operationWaitingResponseDic[responseId] != null) {
            let operationPending = this.operationWaitingResponseDic[responseId];
            operationPending.onRecv();

            delete this.operationWaitingResponseDic[responseId];

            let returnCode = obj.getNumber(0);

            let parameters: GNHashtable = null;
            let debugMessage: string = null;
            let array: GNArray = null;

            if (returnCode == ReturnCode.Ok)
                parameters = obj.getGNHashtable(1);
            else if (returnCode == ReturnCode.InvalidRequestParameters)
                array = obj.getGNArray(1);
            else if (returnCode == ReturnCode.OperationNotAuthorized) {
                if (GNNetwork.getAuthToken()) {
                    GNNetwork.setAuthToken("");
                    GNNetwork.setUserId("");
                }
            }
            else
                debugMessage = obj.getString(1);

            let operationRequest = operationPending.getOperationRequest();
            let operationResponse = new OperationResponse(operationRequest.getOperationCode(), operationRequest.getRequestId(), isEncrypted);

            operationResponse.setReturnCode(returnCode);
            operationResponse.setDebugMessage(debugMessage);
            operationResponse.setParameters(parameters);

            if (array != null) {
                let invalidMembers: InvalidMember[] = [];
                for (let i = 0; i < array.count(); i++) {
                    let arrChild = array.getGNArray(i);

                    invalidMembers.push({
                        code: arrChild.getNumber(0),
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

                        GNNetwork.setAuthToken(authToken);
                    }

                    if (parameters.containsKey(ParameterCode.UserId)) {
                        let userId = parameters.getString(ParameterCode.UserId);

                        GNNetwork.setUserId(userId);
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
            GNDebug.logError("[GN] OnResponseHandler, un available request id " + obj);
        }
    }

    send(operationPending: OperationPending): void {
        operationPending.onSend();

        let operationRequest = operationPending.getOperationRequest();

        if (operationRequest.getRequestId() != -1) {
            operationRequest.setRequestId(PeerBase.requestId++);

            if (operationPending.getCallback() != null) {
                this.operationWaitingResponseDic[operationRequest.getRequestId()] = operationPending;
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
