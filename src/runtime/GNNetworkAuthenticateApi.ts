import { GNNetwork } from "./GNNetwork";
import { Action1 } from "./common/Action1";
import { GNHashtable } from "./common/GNData";
import { OperationRequest } from "./entity/OperationRequest";
import { AuthenticateModels } from "./entity/models/AuthenticateModels";
import { AuthenticateRequestModels } from "./entity/models/AuthenticateRequestModels";
import { AuthenticateResponseModels } from "./entity/models/AuthenticateResponseModels";

export class AuthenticateApi {
	public server: ServerAuthenticateApi = new ServerAuthenticateApi();

	public admin: AdminAuthenticateApi = new AdminAuthenticateApi();

	public loginByAccount(requestData: AuthenticateModels.LoginByAccountRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByAccountOperationResponse);
	}

	public async loginByAccountAsync(requestData: AuthenticateModels.LoginByAccountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByAccountOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByAccountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByAccountOperationResponse);
	}

	public loginByAndroidDeviceId(requestData: AuthenticateModels.LoginByAndroidDeviceIdRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByAndroidDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByAndroidDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByAndroidDeviceIdOperationResponse);
	}

	public async loginByAndroidDeviceIdAsync(requestData: AuthenticateModels.LoginByAndroidDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByAndroidDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByAndroidDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByAndroidDeviceIdOperationResponse);
	}

	public loginByApple(requestData: AuthenticateModels.LoginByAppleRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByAppleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByAppleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByAppleOperationResponse);
	}

	public async loginByAppleAsync(requestData: AuthenticateModels.LoginByAppleRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByAppleOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByAppleOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByAppleOperationResponse);
	}

	public loginByCustomDeviceId(requestData: AuthenticateModels.LoginByCustomDeviceIdRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByCustomDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByCustomDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByCustomDeviceIdOperationResponse);
	}

	public async loginByCustomDeviceIdAsync(requestData: AuthenticateModels.LoginByCustomDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByCustomDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByCustomDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByCustomDeviceIdOperationResponse);
	}

	public loginByCustomId(requestData: AuthenticateModels.LoginByCustomIdRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByCustomIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByCustomIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByCustomIdOperationResponse);
	}

	public async loginByCustomIdAsync(requestData: AuthenticateModels.LoginByCustomIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByCustomIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByCustomIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByCustomIdOperationResponse);
	}

	public loginByEditorDeviceId(requestData: AuthenticateModels.LoginByEditorDeviceIdRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByEditorDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByEditorDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByEditorDeviceIdOperationResponse);
	}

	public async loginByEditorDeviceIdAsync(requestData: AuthenticateModels.LoginByEditorDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByEditorDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByEditorDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByEditorDeviceIdOperationResponse);
	}

	public loginByFacebook(requestData: AuthenticateModels.LoginByFacebookRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByFacebookOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByFacebookOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByFacebookOperationResponse);
	}

	public async loginByFacebookAsync(requestData: AuthenticateModels.LoginByFacebookRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByFacebookOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByFacebookOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByFacebookOperationResponse);
	}

	public loginByGenericService(requestData: AuthenticateModels.LoginByGenericServiceRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByGenericServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByGenericServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByGenericServiceOperationResponse);
	}

	public async loginByGenericServiceAsync(requestData: AuthenticateModels.LoginByGenericServiceRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByGenericServiceOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByGenericServiceOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByGenericServiceOperationResponse);
	}

	public loginByGoogle(requestData: AuthenticateModels.LoginByGoogleRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByGoogleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByGoogleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByGoogleOperationResponse);
	}

	public async loginByGoogleAsync(requestData: AuthenticateModels.LoginByGoogleRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByGoogleOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByGoogleOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByGoogleOperationResponse);
	}

	public loginByGooglePlayGameService(requestData: AuthenticateModels.LoginByGooglePlayGameServiceRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByGooglePlayGameServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByGooglePlayGameServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByGooglePlayGameServiceOperationResponse);
	}

	public async loginByGooglePlayGameServiceAsync(requestData: AuthenticateModels.LoginByGooglePlayGameServiceRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByGooglePlayGameServiceOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByGooglePlayGameServiceOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByGooglePlayGameServiceOperationResponse);
	}

	public loginByGameCenter(requestData: AuthenticateModels.LoginByGameCenterRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByGameCenterOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByGameCenterOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByGameCenterOperationResponse);
	}

	public async loginByGameCenterAsync(requestData: AuthenticateModels.LoginByGameCenterRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByGameCenterOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByGameCenterOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByGameCenterOperationResponse);
	}

	public loginByiOSDeviceId(requestData: AuthenticateModels.LoginByiOSDeviceIdRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByiOSDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByiOSDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByiOSDeviceIdOperationResponse);
	}

	public async loginByiOSDeviceIdAsync(requestData: AuthenticateModels.LoginByiOSDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByiOSDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByiOSDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByiOSDeviceIdOperationResponse);
	}

	public loginByLinuxDeviceId(requestData: AuthenticateModels.LoginByLinuxDeviceIdRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByLinuxDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByLinuxDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByLinuxDeviceIdOperationResponse);
	}

	public async loginByLinuxDeviceIdAsync(requestData: AuthenticateModels.LoginByLinuxDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByLinuxDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByLinuxDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByLinuxDeviceIdOperationResponse);
	}

	public loginByMacOSDeviceId(requestData: AuthenticateModels.LoginByMacOSDeviceIdRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByMacOSDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByMacOSDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByMacOSDeviceIdOperationResponse);
	}

	public async loginByMacOSDeviceIdAsync(requestData: AuthenticateModels.LoginByMacOSDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByMacOSDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByMacOSDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByMacOSDeviceIdOperationResponse);
	}

	public loginByWindowsDeviceId(requestData: AuthenticateModels.LoginByWindowsDeviceIdRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByWindowsDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByWindowsDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByWindowsDeviceIdOperationResponse);
	}

	public async loginByWindowsDeviceIdAsync(requestData: AuthenticateModels.LoginByWindowsDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByWindowsDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByWindowsDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByWindowsDeviceIdOperationResponse);
	}

	public loginByWindowsPhoneDeviceId(requestData: AuthenticateModels.LoginByWindowsPhoneDeviceIdRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByWindowsPhoneDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByWindowsPhoneDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByWindowsPhoneDeviceIdOperationResponse);
	}

	public async loginByWindowsPhoneDeviceIdAsync(requestData: AuthenticateModels.LoginByWindowsPhoneDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByWindowsPhoneDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByWindowsPhoneDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByWindowsPhoneDeviceIdOperationResponse);
	}

	public registerAccount(requestData: AuthenticateModels.RegisterAccountRequestData, onResponse: Action1<AuthenticateResponseModels.RegisterAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.RegisterAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.RegisterAccountOperationResponse);
	}

	public async registerAccountAsync(requestData: AuthenticateModels.RegisterAccountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.RegisterAccountOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.RegisterAccountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.RegisterAccountOperationResponse);
	}

	public refreshAuthToken(requestData: AuthenticateModels.RefreshAuthTokenRequestData, onResponse: Action1<AuthenticateResponseModels.RefreshAuthTokenOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.RefreshAuthTokenOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.RefreshAuthTokenOperationResponse);
	}

	public async refreshAuthTokenAsync(requestData: AuthenticateModels.RefreshAuthTokenRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.RefreshAuthTokenOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.RefreshAuthTokenOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.RefreshAuthTokenOperationResponse);
	}
}

export class ServerAuthenticateApi {
}

export class AdminAuthenticateApi {
}
