import { GNHashtable } from "./../common/GNData";
import { RequestRole } from "./../constant/enumType/RequestRole";
import { RequestType } from "./../constant/enumType/RequestType";
import { Action1 } from "./../common/Action1";
import { OperationRequest } from "./../entity/OperationRequest";
import { OperationResponse } from "./../entity/OperationResponse";

/**
 * Describes IPeer.
 */
export interface IPeer {

	initPeer(): void;

	enqueue(requestType: RequestType, role: RequestRole, operationRequest: OperationRequest, onOperationResponse: Action1<OperationResponse>, authToken: string, secretKey: string, customTags: GNHashtable, gameId: string): void;

	isUsing(): boolean;

	service(): void;

}
