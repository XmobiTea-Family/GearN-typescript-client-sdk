import { GNNetwork } from "./GNNetwork";
import { Action1 } from "./common/Action1";
import { GNHashtable } from "./common/GNData";
import { OperationRequest } from "./entity/OperationRequest";
import { CloudScriptModels } from "./entity/models/CloudScriptModels";
import { CloudScriptRequestModels } from "./entity/models/CloudScriptRequestModels";
import { CloudScriptResponseModels } from "./entity/models/CloudScriptResponseModels";

/**
 * Exposes client-scoped CloudScript operations through `GNNetwork.cloudScript`.
 *
 * This namespace uses HTTP and is typically limited to execute flows that the backend allows for client callers.
 */
export class CloudScriptApi {
	/** Server-scoped CloudScript operations for trusted backend callers. */
	public server: ServerCloudScriptApi = new ServerCloudScriptApi();

	/** Admin-scoped CloudScript operations for dashboard or backoffice callers. */
	public admin: AdminCloudScriptApi = new AdminCloudScriptApi();

	/**
	 * Sends the addFunction operation and returns the typed response via callback.
	 */
	public addFunction(requestData: CloudScriptModels.AddFunctionRequestData, onResponse: Action1<CloudScriptResponseModels.AddFunctionOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CloudScriptRequestModels.AddFunctionOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CloudScriptResponseModels.AddFunctionOperationResponse);
	}

	/**
	 * Sends the addFunction operation and resolves with the typed response.
	 */
	public async addFunctionAsync(requestData: CloudScriptModels.AddFunctionRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CloudScriptResponseModels.AddFunctionOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CloudScriptRequestModels.AddFunctionOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CloudScriptResponseModels.AddFunctionOperationResponse);
	}

	/**
	 * Sends the editFunction operation and returns the typed response via callback.
	 */
	public editFunction(requestData: CloudScriptModels.EditFunctionRequestData, onResponse: Action1<CloudScriptResponseModels.EditFunctionOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CloudScriptRequestModels.EditFunctionOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CloudScriptResponseModels.EditFunctionOperationResponse);
	}

	/**
	 * Sends the editFunction operation and resolves with the typed response.
	 */
	public async editFunctionAsync(requestData: CloudScriptModels.EditFunctionRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CloudScriptResponseModels.EditFunctionOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CloudScriptRequestModels.EditFunctionOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CloudScriptResponseModels.EditFunctionOperationResponse);
	}

	/**
	 * Sends the executeFunction operation and returns the typed response via callback.
	 */
	public executeFunction(requestData: CloudScriptModels.ExecuteFunctionRequestData, onResponse: Action1<CloudScriptResponseModels.ExecuteFunctionOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CloudScriptRequestModels.ExecuteFunctionOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CloudScriptResponseModels.ExecuteFunctionOperationResponse);
	}

	/**
	 * Sends the executeFunction operation and resolves with the typed response.
	 */
	public async executeFunctionAsync(requestData: CloudScriptModels.ExecuteFunctionRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CloudScriptResponseModels.ExecuteFunctionOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CloudScriptRequestModels.ExecuteFunctionOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CloudScriptResponseModels.ExecuteFunctionOperationResponse);
	}

	/**
	 * Sends the getFunction operation and returns the typed response via callback.
	 */
	public getFunction(requestData: CloudScriptModels.GetFunctionRequestData, onResponse: Action1<CloudScriptResponseModels.GetFunctionOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CloudScriptRequestModels.GetFunctionOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CloudScriptResponseModels.GetFunctionOperationResponse);
	}

	/**
	 * Sends the getFunction operation and resolves with the typed response.
	 */
	public async getFunctionAsync(requestData: CloudScriptModels.GetFunctionRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CloudScriptResponseModels.GetFunctionOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CloudScriptRequestModels.GetFunctionOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CloudScriptResponseModels.GetFunctionOperationResponse);
	}

	/**
	 * Sends the getFunctions operation and returns the typed response via callback.
	 */
	public getFunctions(requestData: CloudScriptModels.GetFunctionsRequestData, onResponse: Action1<CloudScriptResponseModels.GetFunctionsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CloudScriptRequestModels.GetFunctionsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CloudScriptResponseModels.GetFunctionsOperationResponse);
	}

	/**
	 * Sends the getFunctions operation and resolves with the typed response.
	 */
	public async getFunctionsAsync(requestData: CloudScriptModels.GetFunctionsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CloudScriptResponseModels.GetFunctionsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CloudScriptRequestModels.GetFunctionsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CloudScriptResponseModels.GetFunctionsOperationResponse);
	}

}

/**
 * Groups server-scoped operations exposed by ServerCloudScriptApi.
 */
/**
 * Exposes server-scoped CloudScript operations through `GNNetwork.cloudScript.server`.
 *
 * Use this namespace from trusted backend code with `secretKey` or `overrideSecretKey`.
 */
export class ServerCloudScriptApi {
	/**
	 * Sends the addFunction operation and returns the typed response via callback.
	 */
	public addFunction(requestData: CloudScriptModels.ServerAddFunctionRequestData, onResponse: Action1<CloudScriptResponseModels.AddFunctionOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CloudScriptRequestModels.ServerAddFunctionOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CloudScriptResponseModels.AddFunctionOperationResponse);
	}

	/**
	 * Sends the addFunction operation and resolves with the typed response.
	 */
	public async addFunctionAsync(requestData: CloudScriptModels.ServerAddFunctionRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CloudScriptResponseModels.AddFunctionOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CloudScriptRequestModels.ServerAddFunctionOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CloudScriptResponseModels.AddFunctionOperationResponse);
	}

	/**
	 * Sends the editFunction operation and returns the typed response via callback.
	 */
	public editFunction(requestData: CloudScriptModels.ServerEditFunctionRequestData, onResponse: Action1<CloudScriptResponseModels.EditFunctionOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CloudScriptRequestModels.ServerEditFunctionOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CloudScriptResponseModels.EditFunctionOperationResponse);
	}

	/**
	 * Sends the editFunction operation and resolves with the typed response.
	 */
	public async editFunctionAsync(requestData: CloudScriptModels.ServerEditFunctionRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CloudScriptResponseModels.EditFunctionOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CloudScriptRequestModels.ServerEditFunctionOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CloudScriptResponseModels.EditFunctionOperationResponse);
	}

	/**
	 * Sends the executeFunction operation and returns the typed response via callback.
	 */
	public executeFunction(requestData: CloudScriptModels.ServerExecuteFunctionRequestData, onResponse: Action1<CloudScriptResponseModels.ExecuteFunctionOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CloudScriptRequestModels.ServerExecuteFunctionOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CloudScriptResponseModels.ExecuteFunctionOperationResponse);
	}

	/**
	 * Sends the executeFunction operation and resolves with the typed response.
	 */
	public async executeFunctionAsync(requestData: CloudScriptModels.ServerExecuteFunctionRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CloudScriptResponseModels.ExecuteFunctionOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CloudScriptRequestModels.ServerExecuteFunctionOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CloudScriptResponseModels.ExecuteFunctionOperationResponse);
	}

	/**
	 * Sends the getFunction operation and returns the typed response via callback.
	 */
	public getFunction(requestData: CloudScriptModels.ServerGetFunctionRequestData, onResponse: Action1<CloudScriptResponseModels.GetFunctionOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CloudScriptRequestModels.ServerGetFunctionOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CloudScriptResponseModels.GetFunctionOperationResponse);
	}

	/**
	 * Sends the getFunction operation and resolves with the typed response.
	 */
	public async getFunctionAsync(requestData: CloudScriptModels.ServerGetFunctionRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CloudScriptResponseModels.GetFunctionOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CloudScriptRequestModels.ServerGetFunctionOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CloudScriptResponseModels.GetFunctionOperationResponse);
	}

	/**
	 * Sends the getFunctions operation and returns the typed response via callback.
	 */
	public getFunctions(requestData: CloudScriptModels.ServerGetFunctionsRequestData, onResponse: Action1<CloudScriptResponseModels.GetFunctionsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CloudScriptRequestModels.ServerGetFunctionsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CloudScriptResponseModels.GetFunctionsOperationResponse);
	}

	/**
	 * Sends the getFunctions operation and resolves with the typed response.
	 */
	public async getFunctionsAsync(requestData: CloudScriptModels.ServerGetFunctionsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CloudScriptResponseModels.GetFunctionsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CloudScriptRequestModels.ServerGetFunctionsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CloudScriptResponseModels.GetFunctionsOperationResponse);
	}

}

/**
 * Groups admin-scoped operations exposed by AdminCloudScriptApi.
 */
/**
 * Exposes admin-scoped CloudScript operations through `GNNetwork.cloudScript.admin`.
 *
 * Use this namespace from dashboard or backoffice code with `secretKey` or `overrideSecretKey`.
 */
export class AdminCloudScriptApi {
	/**
	 * Sends the addFunction operation and returns the typed response via callback.
	 */
	public addFunction(requestData: CloudScriptModels.AdminAddFunctionRequestData, onResponse: Action1<CloudScriptResponseModels.AddFunctionOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CloudScriptRequestModels.AdminAddFunctionOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CloudScriptResponseModels.AddFunctionOperationResponse);
	}

	/**
	 * Sends the addFunction operation and resolves with the typed response.
	 */
	public async addFunctionAsync(requestData: CloudScriptModels.AdminAddFunctionRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CloudScriptResponseModels.AddFunctionOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CloudScriptRequestModels.AdminAddFunctionOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CloudScriptResponseModels.AddFunctionOperationResponse);
	}

	/**
	 * Sends the editFunction operation and returns the typed response via callback.
	 */
	public editFunction(requestData: CloudScriptModels.AdminEditFunctionRequestData, onResponse: Action1<CloudScriptResponseModels.EditFunctionOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CloudScriptRequestModels.AdminEditFunctionOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CloudScriptResponseModels.EditFunctionOperationResponse);
	}

	/**
	 * Sends the editFunction operation and resolves with the typed response.
	 */
	public async editFunctionAsync(requestData: CloudScriptModels.AdminEditFunctionRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CloudScriptResponseModels.EditFunctionOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CloudScriptRequestModels.AdminEditFunctionOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CloudScriptResponseModels.EditFunctionOperationResponse);
	}

	/**
	 * Sends the executeFunction operation and returns the typed response via callback.
	 */
	public executeFunction(requestData: CloudScriptModels.AdminExecuteFunctionRequestData, onResponse: Action1<CloudScriptResponseModels.ExecuteFunctionOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CloudScriptRequestModels.AdminExecuteFunctionOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CloudScriptResponseModels.ExecuteFunctionOperationResponse);
	}

	/**
	 * Sends the executeFunction operation and resolves with the typed response.
	 */
	public async executeFunctionAsync(requestData: CloudScriptModels.AdminExecuteFunctionRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CloudScriptResponseModels.ExecuteFunctionOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CloudScriptRequestModels.AdminExecuteFunctionOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CloudScriptResponseModels.ExecuteFunctionOperationResponse);
	}

	/**
	 * Sends the getFunction operation and returns the typed response via callback.
	 */
	public getFunction(requestData: CloudScriptModels.AdminGetFunctionRequestData, onResponse: Action1<CloudScriptResponseModels.GetFunctionOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CloudScriptRequestModels.AdminGetFunctionOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CloudScriptResponseModels.GetFunctionOperationResponse);
	}

	/**
	 * Sends the getFunction operation and resolves with the typed response.
	 */
	public async getFunctionAsync(requestData: CloudScriptModels.AdminGetFunctionRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CloudScriptResponseModels.GetFunctionOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CloudScriptRequestModels.AdminGetFunctionOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CloudScriptResponseModels.GetFunctionOperationResponse);
	}

	/**
	 * Sends the getFunctions operation and returns the typed response via callback.
	 */
	public getFunctions(requestData: CloudScriptModels.AdminGetFunctionsRequestData, onResponse: Action1<CloudScriptResponseModels.GetFunctionsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CloudScriptRequestModels.AdminGetFunctionsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CloudScriptResponseModels.GetFunctionsOperationResponse);
	}

	/**
	 * Sends the getFunctions operation and resolves with the typed response.
	 */
	public async getFunctionsAsync(requestData: CloudScriptModels.AdminGetFunctionsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CloudScriptResponseModels.GetFunctionsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CloudScriptRequestModels.AdminGetFunctionsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CloudScriptResponseModels.GetFunctionsOperationResponse);
	}

}
