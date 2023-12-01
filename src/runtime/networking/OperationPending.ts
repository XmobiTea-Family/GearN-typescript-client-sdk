import { GNHashtable } from "./../common/GNData";
import { RequestRole } from "./../constant/enumType/RequestRole";
import { RequestType } from "./../constant/enumType/RequestType";
import { Action1 } from "./../common/Action1";
import { OperationRequest } from "./../entity/OperationRequest";
import { OperationResponse } from "./../entity/OperationResponse";

export class OperationPending {
    private operationRequest: OperationRequest;
    private requestType: RequestType;
    private requestRole: RequestRole;
    private authToken: string;
    private secretKey: string;
    private gameId: string;
    private customTags: GNHashtable;
    private onOperationResponse: Action1<OperationResponse>;
    private timeout: number;

    private firstSend: number;
    private secondsSend: number;

    constructor(requestType: RequestType, requestRole: RequestRole, operationRequest: OperationRequest, onOperationResponse: Action1<OperationResponse>, authToken: string, secretKey: string, customTags: GNHashtable, gameId: string) {
        this.operationRequest = operationRequest;
        this.onOperationResponse = onOperationResponse;

        this.timeout = Date.now() / 1000 + OperationRequest.defaultTimeOut;
        this.firstSend = 0;
        this.secondsSend = 0;

        this.requestType = requestType;
        this.requestRole = requestRole;
        this.authToken = authToken;
        this.secretKey = secretKey;
        this.gameId = gameId;
        this.customTags = customTags;
    }

    public getRequestType(): RequestType {
        return this.requestType;
    }

    public getRequestRole(): RequestRole {
        return this.requestRole;
    }

    public getAuthToken(): string {
        return this.authToken;
    }

    public getSecretKey(): string {
        return this.secretKey;
    }

    public getGameId(): string {
        return this.gameId;
    }

    public getCustomTags(): GNHashtable {
        return this.customTags;
    }

    public onSend(): void {
        this.firstSend = Date.now() / 1000;
        this.timeout = this.firstSend + this.operationRequest.getTimeout();
    }

    public onRecv(): void {
        this.secondsSend = Date.now() / 1000;
    }

    public getExecuteTimerInMs(): number {
        return (this.secondsSend - this.firstSend);
    }

    public isTimeout(): boolean {
        return this.timeout < Date.now() / 1000;
    }

    public getOperationRequest(): OperationRequest {
        return this.operationRequest;
    }

    public getCallback(): Action1<OperationResponse> {
        return this.onOperationResponse;
    }
}
