import { GNNetwork } from "./GNNetwork";
import { Action1 } from "./common/Action1";
import { GNHashtable } from "./common/GNData";
import { OperationRequest } from "./entity/OperationRequest";
import { DashboardModels } from "./entity/models/DashboardModels";
import { DashboardRequestModels } from "./entity/models/DashboardRequestModels";
import { DashboardResponseModels } from "./entity/models/DashboardResponseModels";

export class DashboardApi {
	public server: ServerDashboardApi = new ServerDashboardApi();

	public admin: AdminDashboardApi = new AdminDashboardApi();

	public changePasswordAdminAccount(requestData: DashboardModels.ChangePasswordAdminAccountRequestData, onResponse: Action1<DashboardResponseModels.ChangePasswordAdminAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new DashboardRequestModels.ChangePasswordAdminAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.ChangePasswordAdminAccountOperationResponse);
	}

	public getAdminAccountList(requestData: DashboardModels.GetAdminAccountListRequestData, onResponse: Action1<DashboardResponseModels.GetAdminAccountListOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new DashboardRequestModels.GetAdminAccountListOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetAdminAccountListOperationResponse);
	}

	public getGameInformation(requestData: DashboardModels.GetGameInformationRequestData, onResponse: Action1<DashboardResponseModels.GetGameInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new DashboardRequestModels.GetGameInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetGameInformationOperationResponse);
	}

	public getGameList(requestData: DashboardModels.GetGameListRequestData, onResponse: Action1<DashboardResponseModels.GetGameListOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new DashboardRequestModels.GetGameListOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetGameListOperationResponse);
	}

	public getMasterGameSettings(requestData: DashboardModels.GetMasterGameSettingsRequestData, onResponse: Action1<DashboardResponseModels.GetMasterGameSettingsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new DashboardRequestModels.GetMasterGameSettingsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetMasterGameSettingsOperationResponse);
	}

	public getSecretInfoInformation(requestData: DashboardModels.GetSecretInfoInformationRequestData, onResponse: Action1<DashboardResponseModels.GetSecretInfoInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new DashboardRequestModels.GetSecretInfoInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetSecretInfoInformationOperationResponse);
	}

	public getSecretInfoList(requestData: DashboardModels.GetSecretInfoListRequestData, onResponse: Action1<DashboardResponseModels.GetSecretInfoListOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new DashboardRequestModels.GetSecretInfoListOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetSecretInfoListOperationResponse);
	}

	public getServerLog(requestData: DashboardModels.GetServerLogRequestData, onResponse: Action1<DashboardResponseModels.GetServerLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new DashboardRequestModels.GetServerLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetServerLogOperationResponse);
	}

	public grantAdminAccount(requestData: DashboardModels.GrantAdminAccountRequestData, onResponse: Action1<DashboardResponseModels.GrantAdminAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new DashboardRequestModels.GrantAdminAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GrantAdminAccountOperationResponse);
	}

	public grantGame(requestData: DashboardModels.GrantGameRequestData, onResponse: Action1<DashboardResponseModels.GrantGameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new DashboardRequestModels.GrantGameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GrantGameOperationResponse);
	}

	public grantSecretInfo(requestData: DashboardModels.GrantSecretInfoRequestData, onResponse: Action1<DashboardResponseModels.GrantSecretInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new DashboardRequestModels.GrantSecretInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GrantSecretInfoOperationResponse);
	}

	public loginByAdminAccount(requestData: DashboardModels.LoginByAdminAccountRequestData, onResponse: Action1<DashboardResponseModels.LoginByAdminAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new DashboardRequestModels.LoginByAdminAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.LoginByAdminAccountOperationResponse);
	}

	public removeAdminAccount(requestData: DashboardModels.RemoveAdminAccountRequestData, onResponse: Action1<DashboardResponseModels.RemoveAdminAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new DashboardRequestModels.RemoveAdminAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.RemoveAdminAccountOperationResponse);
	}

	public setGameInformation(requestData: DashboardModels.SetGameInformationRequestData, onResponse: Action1<DashboardResponseModels.SetGameInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new DashboardRequestModels.SetGameInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.SetGameInformationOperationResponse);
	}

	public setMasterGameSettings(requestData: DashboardModels.SetMasterGameSettingsRequestData, onResponse: Action1<DashboardResponseModels.SetMasterGameSettingsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new DashboardRequestModels.SetMasterGameSettingsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.SetMasterGameSettingsOperationResponse);
	}

	public setPasswordAdminAccount(requestData: DashboardModels.SetPasswordAdminAccountRequestData, onResponse: Action1<DashboardResponseModels.SetPasswordAdminAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new DashboardRequestModels.SetPasswordAdminAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.SetPasswordAdminAccountOperationResponse);
	}

	public setSecretInfoInformation(requestData: DashboardModels.SetSecretInfoInformationRequestData, onResponse: Action1<DashboardResponseModels.SetSecretInfoInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new DashboardRequestModels.SetSecretInfoInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.SetSecretInfoInformationOperationResponse);
	}

	public setSecretKeyAdminAccount(requestData: DashboardModels.SetSecretKeyAdminAccountRequestData, onResponse: Action1<DashboardResponseModels.SetSecretKeyAdminAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new DashboardRequestModels.SetSecretKeyAdminAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.SetSecretKeyAdminAccountOperationResponse);
	}

}

export class ServerDashboardApi {
}

export class AdminDashboardApi {
}

