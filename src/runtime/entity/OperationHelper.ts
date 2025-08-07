import { EnumUtility } from "./../helper/EnumUtility";
import { RequestRole } from "./../constant/enumType/RequestRole";
import { RequestType } from "./../constant/enumType/RequestType";
import { OperationRequest } from "./OperationRequest";

export class OperationHelper {
	public static toSocketData(requestType: RequestType, role: RequestRole, request: OperationRequest): any {
		let requestId = request.getRequestId();

		if (requestId == -1)
			return [
				EnumUtility.toString(RequestType, requestType),
				request.getOperationCode(),
				EnumUtility.toString(RequestRole, role),
				(request.getParameters() == null) ? null : request.getParameters().toData()
			];
		else
			return [
				EnumUtility.toString(RequestType, requestType),
				request.getOperationCode(),
				EnumUtility.toString(RequestRole, role),
				(request.getParameters() == null) ? null : request.getParameters().toData(),
				requestId
			];
	}

	public static toHttpData(requestType: RequestType, role: RequestRole, request: OperationRequest): any {
		return null;
	}
}
