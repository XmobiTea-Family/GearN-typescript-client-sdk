import { Action1 } from "./../common/Action1";
import { OperationRequest } from "./../entity/OperationRequest";
import { OperationResponse } from "./../entity/OperationResponse";

export class OperationPending {
    private operationRequest: OperationRequest;
    private onOperationResponse: Action1<OperationResponse>;
    private timeout: number;

    private firstSend: number;
    private secondsSend: number;

    constructor(operationRequest: OperationRequest, onOperationResponse: Action1<OperationResponse>) {
        this.operationRequest = operationRequest;
        this.onOperationResponse = onOperationResponse;

        this.timeout = Date.now() / 1000 + OperationRequest.DefaultTimeOut;
        this.firstSend = 0;
        this.secondsSend = 0;
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
