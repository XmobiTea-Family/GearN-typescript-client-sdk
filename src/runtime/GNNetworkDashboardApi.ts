import { GNNetwork } from "./GNNetwork";
import { Action1 } from "./common/Action1";
import { GNHashtable } from "./common/GNData";
import { OperationRequest } from "./entity/OperationRequest";
import { DashboardModels } from "./entity/models/DashboardModels";
import { DashboardRequestModels } from "./entity/models/DashboardRequestModels";
import { DashboardResponseModels } from "./entity/models/DashboardResponseModels";

/**
 * Exposes dashboard and admin-facing operations through `GNNetwork.dashboard`.
 *
 * Public wrappers in this namespace currently use HTTP and `RequestRole.Client`.
 * After a successful admin login, backend middleware resolves dashboard permission from the auth token.
 */
export class DashboardApi {
	/** Exposed for namespace symmetry only. Dashboard currently has no public server-scoped methods. */
	public server: ServerDashboardApi = new ServerDashboardApi();

	/** Exposed for namespace symmetry only. Dashboard currently has no public admin-scoped methods. */
	public admin: AdminDashboardApi = new AdminDashboardApi();

	/**
	 * Sends the changePasswordAdminAccount operation and returns the typed response via callback.
	 */
	public changePasswordAdminAccount(requestData: DashboardModels.ChangePasswordAdminAccountRequestData, onResponse: Action1<DashboardResponseModels.ChangePasswordAdminAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.ChangePasswordAdminAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.ChangePasswordAdminAccountOperationResponse);
	}

	/**
	 * Sends the changePasswordAdminAccount operation and resolves with the typed response.
	 */
	public async changePasswordAdminAccountAsync(requestData: DashboardModels.ChangePasswordAdminAccountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.ChangePasswordAdminAccountOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.ChangePasswordAdminAccountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.ChangePasswordAdminAccountOperationResponse);
	}

	/**
	 * Sends the getAdminAccountList operation and returns the typed response via callback.
	 */
	public getAdminAccountList(requestData: DashboardModels.GetAdminAccountListRequestData, onResponse: Action1<DashboardResponseModels.GetAdminAccountListOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetAdminAccountListOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetAdminAccountListOperationResponse);
	}

	/**
	 * Sends the getAdminAccountList operation and resolves with the typed response.
	 */
	public async getAdminAccountListAsync(requestData: DashboardModels.GetAdminAccountListRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.GetAdminAccountListOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetAdminAccountListOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetAdminAccountListOperationResponse);
	}

	/**
	 * Sends the getGameInformation operation and returns the typed response via callback.
	 */
	public getGameInformation(requestData: DashboardModels.GetGameInformationRequestData, onResponse: Action1<DashboardResponseModels.GetGameInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetGameInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetGameInformationOperationResponse);
	}

	/**
	 * Sends the getGameInformation operation and resolves with the typed response.
	 */
	public async getGameInformationAsync(requestData: DashboardModels.GetGameInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.GetGameInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetGameInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetGameInformationOperationResponse);
	}

	/**
	 * Sends the getGameList operation and returns the typed response via callback.
	 */
	public getGameList(requestData: DashboardModels.GetGameListRequestData, onResponse: Action1<DashboardResponseModels.GetGameListOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetGameListOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetGameListOperationResponse);
	}

	/**
	 * Sends the getGameList operation and resolves with the typed response.
	 */
	public async getGameListAsync(requestData: DashboardModels.GetGameListRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.GetGameListOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetGameListOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetGameListOperationResponse);
	}

	/**
	 * Sends the getMasterGameSettings operation and returns the typed response via callback.
	 */
	public getMasterGameSettings(requestData: DashboardModels.GetMasterGameSettingsRequestData, onResponse: Action1<DashboardResponseModels.GetMasterGameSettingsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetMasterGameSettingsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetMasterGameSettingsOperationResponse);
	}

	/**
	 * Sends the getMasterGameSettings operation and resolves with the typed response.
	 */
	public async getMasterGameSettingsAsync(requestData: DashboardModels.GetMasterGameSettingsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.GetMasterGameSettingsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetMasterGameSettingsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetMasterGameSettingsOperationResponse);
	}

	/**
	 * Sends the getSecretInfoInformation operation and returns the typed response via callback.
	 */
	public getSecretInfoInformation(requestData: DashboardModels.GetSecretInfoInformationRequestData, onResponse: Action1<DashboardResponseModels.GetSecretInfoInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetSecretInfoInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetSecretInfoInformationOperationResponse);
	}

	/**
	 * Sends the getSecretInfoInformation operation and resolves with the typed response.
	 */
	public async getSecretInfoInformationAsync(requestData: DashboardModels.GetSecretInfoInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.GetSecretInfoInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetSecretInfoInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetSecretInfoInformationOperationResponse);
	}

	/**
	 * Sends the getSecretInfoList operation and returns the typed response via callback.
	 */
	public getSecretInfoList(requestData: DashboardModels.GetSecretInfoListRequestData, onResponse: Action1<DashboardResponseModels.GetSecretInfoListOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetSecretInfoListOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetSecretInfoListOperationResponse);
	}

	/**
	 * Sends the getSecretInfoList operation and resolves with the typed response.
	 */
	public async getSecretInfoListAsync(requestData: DashboardModels.GetSecretInfoListRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.GetSecretInfoListOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetSecretInfoListOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetSecretInfoListOperationResponse);
	}

	/**
	 * Sends the getServerLog operation and returns the typed response via callback.
	 */
	public getServerLog(requestData: DashboardModels.GetServerLogRequestData, onResponse: Action1<DashboardResponseModels.GetServerLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetServerLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetServerLogOperationResponse);
	}

	/**
	 * Sends the getServerLog operation and resolves with the typed response.
	 */
	public async getServerLogAsync(requestData: DashboardModels.GetServerLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.GetServerLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetServerLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetServerLogOperationResponse);
	}

	/**
	 * Sends the createAdminAccount operation and returns the typed response via callback.
	 */
	public createAdminAccount(requestData: DashboardModels.CreateAdminAccountRequestData, onResponse: Action1<DashboardResponseModels.CreateAdminAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.CreateAdminAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.CreateAdminAccountOperationResponse);
	}

	/**
	 * Sends the createAdminAccount operation and resolves with the typed response.
	 */
	public async createAdminAccountAsync(requestData: DashboardModels.CreateAdminAccountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.CreateAdminAccountOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.CreateAdminAccountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.CreateAdminAccountOperationResponse);
	}

	/**
	 * Sends the createGame operation and returns the typed response via callback.
	 */
	public createGame(requestData: DashboardModels.CreateGameRequestData, onResponse: Action1<DashboardResponseModels.CreateGameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.CreateGameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.CreateGameOperationResponse);
	}

	/**
	 * Sends the createGame operation and resolves with the typed response.
	 */
	public async createGameAsync(requestData: DashboardModels.CreateGameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.CreateGameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.CreateGameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.CreateGameOperationResponse);
	}

	/**
	 * Sends the createSecretInfo operation and returns the typed response via callback.
	 */
	public createSecretInfo(requestData: DashboardModels.CreateSecretInfoRequestData, onResponse: Action1<DashboardResponseModels.CreateSecretInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.CreateSecretInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.CreateSecretInfoOperationResponse);
	}

	/**
	 * Sends the createSecretInfo operation and resolves with the typed response.
	 */
	public async createSecretInfoAsync(requestData: DashboardModels.CreateSecretInfoRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.CreateSecretInfoOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.CreateSecretInfoOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.CreateSecretInfoOperationResponse);
	}

	/**
	 * Sends the loginByAdminAccount operation and returns the typed response via callback.
	 */
	public loginByAdminAccount(requestData: DashboardModels.LoginByAdminAccountRequestData, onResponse: Action1<DashboardResponseModels.LoginByAdminAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.LoginByAdminAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.LoginByAdminAccountOperationResponse);
	}

	/**
	 * Sends the loginByAdminAccount operation and resolves with the typed response.
	 */
	public async loginByAdminAccountAsync(requestData: DashboardModels.LoginByAdminAccountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.LoginByAdminAccountOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.LoginByAdminAccountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.LoginByAdminAccountOperationResponse);
	}

	/**
	 * Sends the removeAdminAccount operation and returns the typed response via callback.
	 */
	public removeAdminAccount(requestData: DashboardModels.RemoveAdminAccountRequestData, onResponse: Action1<DashboardResponseModels.RemoveAdminAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.RemoveAdminAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.RemoveAdminAccountOperationResponse);
	}

	/**
	 * Sends the removeAdminAccount operation and resolves with the typed response.
	 */
	public async removeAdminAccountAsync(requestData: DashboardModels.RemoveAdminAccountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.RemoveAdminAccountOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.RemoveAdminAccountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.RemoveAdminAccountOperationResponse);
	}

	/**
	 * Sends the setGameInformation operation and returns the typed response via callback.
	 */
	public setGameInformation(requestData: DashboardModels.SetGameInformationRequestData, onResponse: Action1<DashboardResponseModels.SetGameInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.SetGameInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.SetGameInformationOperationResponse);
	}

	/**
	 * Sends the setGameInformation operation and resolves with the typed response.
	 */
	public async setGameInformationAsync(requestData: DashboardModels.SetGameInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.SetGameInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.SetGameInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.SetGameInformationOperationResponse);
	}

	/**
	 * Sends the setMasterGameSettings operation and returns the typed response via callback.
	 */
	public setMasterGameSettings(requestData: DashboardModels.SetMasterGameSettingsRequestData, onResponse: Action1<DashboardResponseModels.SetMasterGameSettingsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.SetMasterGameSettingsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.SetMasterGameSettingsOperationResponse);
	}

	/**
	 * Sends the setMasterGameSettings operation and resolves with the typed response.
	 */
	public async setMasterGameSettingsAsync(requestData: DashboardModels.SetMasterGameSettingsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.SetMasterGameSettingsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.SetMasterGameSettingsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.SetMasterGameSettingsOperationResponse);
	}

	/**
	 * Sends the setPasswordAdminAccount operation and returns the typed response via callback.
	 */
	public setPasswordAdminAccount(requestData: DashboardModels.SetPasswordAdminAccountRequestData, onResponse: Action1<DashboardResponseModels.SetPasswordAdminAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.SetPasswordAdminAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.SetPasswordAdminAccountOperationResponse);
	}

	/**
	 * Sends the setPasswordAdminAccount operation and resolves with the typed response.
	 */
	public async setPasswordAdminAccountAsync(requestData: DashboardModels.SetPasswordAdminAccountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.SetPasswordAdminAccountOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.SetPasswordAdminAccountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.SetPasswordAdminAccountOperationResponse);
	}

	/**
	 * Sends the setSecretInfoInformation operation and returns the typed response via callback.
	 */
	public setSecretInfoInformation(requestData: DashboardModels.SetSecretInfoInformationRequestData, onResponse: Action1<DashboardResponseModels.SetSecretInfoInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.SetSecretInfoInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.SetSecretInfoInformationOperationResponse);
	}

	/**
	 * Sends the setSecretInfoInformation operation and resolves with the typed response.
	 */
	public async setSecretInfoInformationAsync(requestData: DashboardModels.SetSecretInfoInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.SetSecretInfoInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.SetSecretInfoInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.SetSecretInfoInformationOperationResponse);
	}

	/**
	 * Sends the setSecretKeyAdminAccount operation and returns the typed response via callback.
	 */
	public setSecretKeyAdminAccount(requestData: DashboardModels.SetSecretKeyAdminAccountRequestData, onResponse: Action1<DashboardResponseModels.SetSecretKeyAdminAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.SetSecretKeyAdminAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.SetSecretKeyAdminAccountOperationResponse);
	}

	/**
	 * Sends the setSecretKeyAdminAccount operation and resolves with the typed response.
	 */
	public async setSecretKeyAdminAccountAsync(requestData: DashboardModels.SetSecretKeyAdminAccountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.SetSecretKeyAdminAccountOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.SetSecretKeyAdminAccountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.SetSecretKeyAdminAccountOperationResponse);
	}

	/**
	 * Sends the getUsernameAdminAccount operation and returns the typed response via callback.
	 */
	public getUsernameAdminAccount(requestData: DashboardModels.GetUsernameAdminAccountRequestData, onResponse: Action1<DashboardResponseModels.GetUsernameAdminAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetUsernameAdminAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetUsernameAdminAccountOperationResponse);
	}

	/**
	 * Sends the getUsernameAdminAccount operation and resolves with the typed response.
	 */
	public async getUsernameAdminAccountAsync(requestData: DashboardModels.GetUsernameAdminAccountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.GetUsernameAdminAccountOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetUsernameAdminAccountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetUsernameAdminAccountOperationResponse);
	}

	/**
	 * Sends the getAnalytics operation and returns the typed response via callback.
	 */
	public getAnalytics(requestData: DashboardModels.GetAnalyticsRequestData, onResponse: Action1<DashboardResponseModels.GetAnalyticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetAnalyticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetAnalyticsOperationResponse);
	}

	/**
	 * Sends the getAnalytics operation and resolves with the typed response.
	 */
	public async getAnalyticsAsync(requestData: DashboardModels.GetAnalyticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.GetAnalyticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetAnalyticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetAnalyticsOperationResponse);
	}

	/**
	 * Sends the getEventCallbackCloudScript operation and returns the typed response via callback.
	 */
	public getEventCallbackCloudScript(requestData: DashboardModels.GetEventCallbackCloudScriptRequestData, onResponse: Action1<DashboardResponseModels.GetEventCallbackCloudScriptOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetEventCallbackCloudScriptOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetEventCallbackCloudScriptOperationResponse);
	}

	/**
	 * Sends the getEventCallbackCloudScript operation and resolves with the typed response.
	 */
	public async getEventCallbackCloudScriptAsync(requestData: DashboardModels.GetEventCallbackCloudScriptRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.GetEventCallbackCloudScriptOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetEventCallbackCloudScriptOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetEventCallbackCloudScriptOperationResponse);
	}

	/**
	 * Sends the setEventCallbackCloudScript operation and returns the typed response via callback.
	 */
	public setEventCallbackCloudScript(requestData: DashboardModels.SetEventCallbackCloudScriptRequestData, onResponse: Action1<DashboardResponseModels.SetEventCallbackCloudScriptOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.SetEventCallbackCloudScriptOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.SetEventCallbackCloudScriptOperationResponse);
	}

	/**
	 * Sends the setEventCallbackCloudScript operation and resolves with the typed response.
	 */
	public async setEventCallbackCloudScriptAsync(requestData: DashboardModels.SetEventCallbackCloudScriptRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.SetEventCallbackCloudScriptOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.SetEventCallbackCloudScriptOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.SetEventCallbackCloudScriptOperationResponse);
	}

	/**
	 * Sends the resetStatisticsLeaderboard operation and returns the typed response via callback.
	 */
	public resetStatisticsLeaderboard(requestData: DashboardModels.ResetStatisticsLeaderboardRequestData, onResponse: Action1<DashboardResponseModels.ResetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.ResetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.ResetStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the resetStatisticsLeaderboard operation and resolves with the typed response.
	 */
	public async resetStatisticsLeaderboardAsync(requestData: DashboardModels.ResetStatisticsLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.ResetStatisticsLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.ResetStatisticsLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.ResetStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the getBackupStatisticsLeaderboardVersion operation and returns the typed response via callback.
	 */
	public getBackupStatisticsLeaderboardVersion(requestData: DashboardModels.GetBackupStatisticsLeaderboardVersionRequestData, onResponse: Action1<DashboardResponseModels.GetBackupStatisticsLeaderboardVersionOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetBackupStatisticsLeaderboardVersionOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetBackupStatisticsLeaderboardVersionOperationResponse);
	}

	/**
	 * Sends the getBackupStatisticsLeaderboardVersion operation and resolves with the typed response.
	 */
	public async getBackupStatisticsLeaderboardVersionAsync(requestData: DashboardModels.GetBackupStatisticsLeaderboardVersionRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.GetBackupStatisticsLeaderboardVersionOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetBackupStatisticsLeaderboardVersionOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetBackupStatisticsLeaderboardVersionOperationResponse);
	}

	/**
	 * Sends the getServerGameData operation and returns the typed response via callback.
	 */
	public getServerGameData(requestData: DashboardModels.GetServerGameDataRequestData, onResponse: Action1<DashboardResponseModels.GetServerGameDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetServerGameDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetServerGameDataOperationResponse);
	}

	/**
	 * Sends the getServerGameData operation and resolves with the typed response.
	 */
	public async getServerGameDataAsync(requestData: DashboardModels.GetServerGameDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.GetServerGameDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetServerGameDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.GetServerGameDataOperationResponse);
	}

	/**
	 * Sends the deleteInDatabase operation and returns the typed response via callback.
	 */
	public deleteInDatabase(requestData: DashboardModels.DeleteInDatabaseRequestData, onResponse: Action1<DashboardResponseModels.DeleteInDatabaseOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.DeleteInDatabaseOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.DeleteInDatabaseOperationResponse);
	}

	/**
	 * Sends the deleteInDatabase operation and resolves with the typed response.
	 */
	public async deleteInDatabaseAsync(requestData: DashboardModels.DeleteInDatabaseRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<DashboardResponseModels.DeleteInDatabaseOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.DeleteInDatabaseOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, DashboardResponseModels.DeleteInDatabaseOperationResponse);
	}

}

/**
 * Placeholder namespace kept for API symmetry.
 *
 * Dashboard does not currently expose any public server-scoped operations.
 */
export class ServerDashboardApi {
}

/**
 * Placeholder namespace kept for API symmetry.
 *
 * Dashboard does not currently expose any public admin-scoped operations.
 */
export class AdminDashboardApi {
}
