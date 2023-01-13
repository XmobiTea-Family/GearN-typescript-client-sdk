import { Action1 } from "./../common/Action1";
import { OperationRequest } from "./../entity/OperationRequest";
import { OperationResponse } from "./../entity/OperationResponse";

export interface IPeer {

    initPeer(): void;

    enqueue(operationRequest: OperationRequest, onOperationResponse: Action1<OperationResponse>): void;

    isUsing(): boolean;

    service(): void;
    
}
