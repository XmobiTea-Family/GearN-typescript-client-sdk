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

	public loginByAndroidDeviceId(requestData: AuthenticateModels.LoginByAndroidDeviceIdRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByAndroidDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByAndroidDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByAndroidDeviceIdOperationResponse);
	}

	public loginByApple(requestData: AuthenticateModels.LoginByAppleRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByAppleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByAppleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByAppleOperationResponse);
	}

	public loginByCustomDeviceId(requestData: AuthenticateModels.LoginByCustomDeviceIdRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByCustomDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByCustomDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByCustomDeviceIdOperationResponse);
	}

	public loginByCustomId(requestData: AuthenticateModels.LoginByCustomIdRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByCustomIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByCustomIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByCustomIdOperationResponse);
	}

	public loginByEditorDeviceId(requestData: AuthenticateModels.LoginByEditorDeviceIdRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByEditorDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByEditorDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByEditorDeviceIdOperationResponse);
	}

	public loginByFacebook(requestData: AuthenticateModels.LoginByFacebookRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByFacebookOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByFacebookOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByFacebookOperationResponse);
	}

	public loginByGenericService(requestData: AuthenticateModels.LoginByGenericServiceRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByGenericServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByGenericServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByGenericServiceOperationResponse);
	}

	public loginByGoogle(requestData: AuthenticateModels.LoginByGoogleRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByGoogleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByGoogleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByGoogleOperationResponse);
	}

	public loginByiOSDeviceId(requestData: AuthenticateModels.LoginByiOSDeviceIdRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByiOSDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByiOSDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByiOSDeviceIdOperationResponse);
	}

	public loginByLinuxDeviceId(requestData: AuthenticateModels.LoginByLinuxDeviceIdRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByLinuxDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByLinuxDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByLinuxDeviceIdOperationResponse);
	}

	public loginByMacOSDeviceId(requestData: AuthenticateModels.LoginByMacOSDeviceIdRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByMacOSDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByMacOSDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByMacOSDeviceIdOperationResponse);
	}

	public loginByWindowsDeviceId(requestData: AuthenticateModels.LoginByWindowsDeviceIdRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByWindowsDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByWindowsDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByWindowsDeviceIdOperationResponse);
	}

	public loginByWindowsPhoneDeviceId(requestData: AuthenticateModels.LoginByWindowsPhoneDeviceIdRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByWindowsPhoneDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByWindowsPhoneDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByWindowsPhoneDeviceIdOperationResponse);
	}

	public registerAccount(requestData: AuthenticateModels.RegisterAccountRequestData, onResponse: Action1<AuthenticateResponseModels.RegisterAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.RegisterAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.RegisterAccountOperationResponse);
	}

}

export class ServerAuthenticateApi {
}

export class AdminAuthenticateApi {
}

