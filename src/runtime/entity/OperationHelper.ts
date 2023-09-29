import { RequestRole } from "../constant/enumType/RequestRole";
import { RequestType } from "../constant/enumType/RequestType";
import { OperationRequest } from "./OperationRequest";

export class OperationHelper {
    public static toSocketData(requestType: RequestType, requestRole: RequestRole, request: OperationRequest): any {
        let requestId = request.getRequestId();

        if (requestId == -1)
            return [
                request.getOperationCode(),
                <number>requestType,
                <number>requestRole,
                (request.getParameters() == null) ? null : request.getParameters().toData()
            ];
        else
            return [
                request.getOperationCode(),
                <number>requestType,
                <number>requestRole,
                (request.getParameters() == null) ? null : request.getParameters().toData(),
                requestId
            ];
    }

    public static toHttpData(requestType: RequestType, requestRole: RequestRole, request: OperationRequest): any {
        return null;
    }
}
