import { RequestRole } from "./../constant/enumType/RequestRole";
import { RequestType } from "./../constant/enumType/RequestType";
import { OperationRequest } from "./../entity/OperationRequest";
import { CodeHelper } from "./CodeHelper";

export class OperationHelper {
	public static toSocketData(requestType: RequestType, role: RequestRole, request: OperationRequest): any {
		let requestId = request.getRequestId();

		if (requestId == -1)
			return [
				CodeHelper.getRequestTypeName(requestType),
				CodeHelper.getRequestRoleName(role),
				request.getOperationCode(),
				(request.getParameters() == null) ? null : request.getParameters().toData()
			];
		else
			return [
				CodeHelper.getRequestTypeName(requestType),
				CodeHelper.getRequestRoleName(role),
				request.getOperationCode(),
				(request.getParameters() == null) ? null : request.getParameters().toData(),
				requestId
			];
	}

	public static toHttpData(requestType: RequestType, role: RequestRole, request: OperationRequest): any {
		return null;
	}
}
