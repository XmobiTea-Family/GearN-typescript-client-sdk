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
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.ChangePasswordAdminAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.ChangePasswordAdminAccountOperationResponse);
	}

	public async changePasswordAdminAccountAsync(requestData: DashboardModels.ChangePasswordAdminAccountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.ChangePasswordAdminAccountOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.ChangePasswordAdminAccountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.ChangePasswordAdminAccountOperationResponse);
	}

	public getAdminAccountList(requestData: DashboardModels.GetAdminAccountListRequestData, onResponse: Action1<DashboardResponseModels.GetAdminAccountListOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetAdminAccountListOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetAdminAccountListOperationResponse);
	}

	public async getAdminAccountListAsync(requestData: DashboardModels.GetAdminAccountListRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.GetAdminAccountListOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetAdminAccountListOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetAdminAccountListOperationResponse);
	}

	public getGameInformation(requestData: DashboardModels.GetGameInformationRequestData, onResponse: Action1<DashboardResponseModels.GetGameInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetGameInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetGameInformationOperationResponse);
	}

	public async getGameInformationAsync(requestData: DashboardModels.GetGameInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.GetGameInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetGameInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetGameInformationOperationResponse);
	}

	public getGameList(requestData: DashboardModels.GetGameListRequestData, onResponse: Action1<DashboardResponseModels.GetGameListOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetGameListOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetGameListOperationResponse);
	}

	public async getGameListAsync(requestData: DashboardModels.GetGameListRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.GetGameListOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetGameListOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetGameListOperationResponse);
	}

	public getMasterGameSettings(requestData: DashboardModels.GetMasterGameSettingsRequestData, onResponse: Action1<DashboardResponseModels.GetMasterGameSettingsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetMasterGameSettingsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetMasterGameSettingsOperationResponse);
	}

	public async getMasterGameSettingsAsync(requestData: DashboardModels.GetMasterGameSettingsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.GetMasterGameSettingsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetMasterGameSettingsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetMasterGameSettingsOperationResponse);
	}

	public getSecretInfoInformation(requestData: DashboardModels.GetSecretInfoInformationRequestData, onResponse: Action1<DashboardResponseModels.GetSecretInfoInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetSecretInfoInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetSecretInfoInformationOperationResponse);
	}

	public async getSecretInfoInformationAsync(requestData: DashboardModels.GetSecretInfoInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.GetSecretInfoInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetSecretInfoInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetSecretInfoInformationOperationResponse);
	}

	public getSecretInfoList(requestData: DashboardModels.GetSecretInfoListRequestData, onResponse: Action1<DashboardResponseModels.GetSecretInfoListOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetSecretInfoListOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetSecretInfoListOperationResponse);
	}

	public async getSecretInfoListAsync(requestData: DashboardModels.GetSecretInfoListRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.GetSecretInfoListOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetSecretInfoListOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetSecretInfoListOperationResponse);
	}

	public getServerLog(requestData: DashboardModels.GetServerLogRequestData, onResponse: Action1<DashboardResponseModels.GetServerLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetServerLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetServerLogOperationResponse);
	}

	public async getServerLogAsync(requestData: DashboardModels.GetServerLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.GetServerLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetServerLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetServerLogOperationResponse);
	}

	public createAdminAccount(requestData: DashboardModels.CreateAdminAccountRequestData, onResponse: Action1<DashboardResponseModels.CreateAdminAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.CreateAdminAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.CreateAdminAccountOperationResponse);
	}

	public async createAdminAccountAsync(requestData: DashboardModels.CreateAdminAccountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.CreateAdminAccountOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.CreateAdminAccountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.CreateAdminAccountOperationResponse);
	}

	public createGame(requestData: DashboardModels.CreateGameRequestData, onResponse: Action1<DashboardResponseModels.CreateGameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.CreateGameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.CreateGameOperationResponse);
	}

	public async createGameAsync(requestData: DashboardModels.CreateGameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.CreateGameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.CreateGameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.CreateGameOperationResponse);
	}

	public createSecretInfo(requestData: DashboardModels.CreateSecretInfoRequestData, onResponse: Action1<DashboardResponseModels.CreateSecretInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.CreateSecretInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.CreateSecretInfoOperationResponse);
	}

	public async createSecretInfoAsync(requestData: DashboardModels.CreateSecretInfoRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.CreateSecretInfoOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.CreateSecretInfoOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.CreateSecretInfoOperationResponse);
	}

	public loginByAdminAccount(requestData: DashboardModels.LoginByAdminAccountRequestData, onResponse: Action1<DashboardResponseModels.LoginByAdminAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.LoginByAdminAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.LoginByAdminAccountOperationResponse);
	}

	public async loginByAdminAccountAsync(requestData: DashboardModels.LoginByAdminAccountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.LoginByAdminAccountOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.LoginByAdminAccountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.LoginByAdminAccountOperationResponse);
	}

	public removeAdminAccount(requestData: DashboardModels.RemoveAdminAccountRequestData, onResponse: Action1<DashboardResponseModels.RemoveAdminAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.RemoveAdminAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.RemoveAdminAccountOperationResponse);
	}

	public async removeAdminAccountAsync(requestData: DashboardModels.RemoveAdminAccountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.RemoveAdminAccountOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.RemoveAdminAccountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.RemoveAdminAccountOperationResponse);
	}

	public setGameInformation(requestData: DashboardModels.SetGameInformationRequestData, onResponse: Action1<DashboardResponseModels.SetGameInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.SetGameInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.SetGameInformationOperationResponse);
	}

	public async setGameInformationAsync(requestData: DashboardModels.SetGameInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.SetGameInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.SetGameInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.SetGameInformationOperationResponse);
	}

	public setMasterGameSettings(requestData: DashboardModels.SetMasterGameSettingsRequestData, onResponse: Action1<DashboardResponseModels.SetMasterGameSettingsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.SetMasterGameSettingsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.SetMasterGameSettingsOperationResponse);
	}

	public async setMasterGameSettingsAsync(requestData: DashboardModels.SetMasterGameSettingsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.SetMasterGameSettingsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.SetMasterGameSettingsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.SetMasterGameSettingsOperationResponse);
	}

	public setPasswordAdminAccount(requestData: DashboardModels.SetPasswordAdminAccountRequestData, onResponse: Action1<DashboardResponseModels.SetPasswordAdminAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.SetPasswordAdminAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.SetPasswordAdminAccountOperationResponse);
	}

	public async setPasswordAdminAccountAsync(requestData: DashboardModels.SetPasswordAdminAccountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.SetPasswordAdminAccountOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.SetPasswordAdminAccountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.SetPasswordAdminAccountOperationResponse);
	}

	public setSecretInfoInformation(requestData: DashboardModels.SetSecretInfoInformationRequestData, onResponse: Action1<DashboardResponseModels.SetSecretInfoInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.SetSecretInfoInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.SetSecretInfoInformationOperationResponse);
	}

	public async setSecretInfoInformationAsync(requestData: DashboardModels.SetSecretInfoInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.SetSecretInfoInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.SetSecretInfoInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.SetSecretInfoInformationOperationResponse);
	}

	public setSecretKeyAdminAccount(requestData: DashboardModels.SetSecretKeyAdminAccountRequestData, onResponse: Action1<DashboardResponseModels.SetSecretKeyAdminAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.SetSecretKeyAdminAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.SetSecretKeyAdminAccountOperationResponse);
	}

	public async setSecretKeyAdminAccountAsync(requestData: DashboardModels.SetSecretKeyAdminAccountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.SetSecretKeyAdminAccountOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.SetSecretKeyAdminAccountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.SetSecretKeyAdminAccountOperationResponse);
	}

	public getUsernameAdminAccount(requestData: DashboardModels.GetUsernameAdminAccountRequestData, onResponse: Action1<DashboardResponseModels.GetUsernameAdminAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetUsernameAdminAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetUsernameAdminAccountOperationResponse);
	}

	public async getUsernameAdminAccountAsync(requestData: DashboardModels.GetUsernameAdminAccountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.GetUsernameAdminAccountOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetUsernameAdminAccountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetUsernameAdminAccountOperationResponse);
	}

	public getAnalytics(requestData: DashboardModels.GetAnalyticsRequestData, onResponse: Action1<DashboardResponseModels.GetAnalyticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetAnalyticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetAnalyticsOperationResponse);
	}

	public async getAnalyticsAsync(requestData: DashboardModels.GetAnalyticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.GetAnalyticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetAnalyticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetAnalyticsOperationResponse);
	}

	public getEventCallbackCloudScript(requestData: DashboardModels.GetEventCallbackCloudScriptRequestData, onResponse: Action1<DashboardResponseModels.GetEventCallbackCloudScriptOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetEventCallbackCloudScriptOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetEventCallbackCloudScriptOperationResponse);
	}

	public async getEventCallbackCloudScriptAsync(requestData: DashboardModels.GetEventCallbackCloudScriptRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.GetEventCallbackCloudScriptOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetEventCallbackCloudScriptOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetEventCallbackCloudScriptOperationResponse);
	}

	public setEventCallbackCloudScript(requestData: DashboardModels.SetEventCallbackCloudScriptRequestData, onResponse: Action1<DashboardResponseModels.SetEventCallbackCloudScriptOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.SetEventCallbackCloudScriptOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.SetEventCallbackCloudScriptOperationResponse);
	}

	public async setEventCallbackCloudScriptAsync(requestData: DashboardModels.SetEventCallbackCloudScriptRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.SetEventCallbackCloudScriptOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.SetEventCallbackCloudScriptOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.SetEventCallbackCloudScriptOperationResponse);
	}

	public resetStatisticsLeaderboard(requestData: DashboardModels.ResetStatisticsLeaderboardRequestData, onResponse: Action1<DashboardResponseModels.ResetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.ResetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.ResetStatisticsLeaderboardOperationResponse);
	}

	public async resetStatisticsLeaderboardAsync(requestData: DashboardModels.ResetStatisticsLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.ResetStatisticsLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.ResetStatisticsLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.ResetStatisticsLeaderboardOperationResponse);
	}

	public getBackupStatisticsLeaderboardVersion(requestData: DashboardModels.GetBackupStatisticsLeaderboardVersionRequestData, onResponse: Action1<DashboardResponseModels.GetBackupStatisticsLeaderboardVersionOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetBackupStatisticsLeaderboardVersionOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetBackupStatisticsLeaderboardVersionOperationResponse);
	}

	public async getBackupStatisticsLeaderboardVersionAsync(requestData: DashboardModels.GetBackupStatisticsLeaderboardVersionRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.GetBackupStatisticsLeaderboardVersionOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetBackupStatisticsLeaderboardVersionOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetBackupStatisticsLeaderboardVersionOperationResponse);
	}

	public getServerGameData(requestData: DashboardModels.GetServerGameDataRequestData, onResponse: Action1<DashboardResponseModels.GetServerGameDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetServerGameDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetServerGameDataOperationResponse);
	}

	public async getServerGameDataAsync(requestData: DashboardModels.GetServerGameDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.GetServerGameDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetServerGameDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetServerGameDataOperationResponse);
	}

	public deleteInDatabase(requestData: DashboardModels.DeleteInDatabaseRequestData, onResponse: Action1<DashboardResponseModels.DeleteInDatabaseOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.DeleteInDatabaseOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.DeleteInDatabaseOperationResponse);
	}

	public async deleteInDatabaseAsync(requestData: DashboardModels.DeleteInDatabaseRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.DeleteInDatabaseOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.DeleteInDatabaseOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.DeleteInDatabaseOperationResponse);
	}

}

export class ServerDashboardApi {
}

export class AdminDashboardApi {
}
