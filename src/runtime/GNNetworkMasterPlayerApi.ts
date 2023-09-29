import { GNNetwork } from "./GNNetwork";
import { Action1 } from "./common/Action1";
import { GNHashtable } from "./common/GNData";
import { OperationRequest } from "./entity/OperationRequest";
import { MasterPlayerModels } from "./entity/models/MasterPlayerModels";
import { MasterPlayerRequestModels } from "./entity/models/MasterPlayerRequestModels";
import { MasterPlayerResponseModels } from "./entity/models/MasterPlayerResponseModels";

export class MasterPlayerApi {
	public server: ServerMasterPlayerApi = new ServerMasterPlayerApi();

	public admin: AdminMasterPlayerApi = new AdminMasterPlayerApi();

	public addSegment(requestData: MasterPlayerModels.AddSegmentRequestData, onResponse: Action1<MasterPlayerResponseModels.AddSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.AddSegmentOperationResponse);
	}

	public changeAccountPassword(requestData: MasterPlayerModels.ChangeAccountPasswordRequestData, onResponse: Action1<MasterPlayerResponseModels.ChangeAccountPasswordOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ChangeAccountPasswordOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.ChangeAccountPasswordOperationResponse);
	}

	public getAvatar(requestData: MasterPlayerModels.GetAvatarRequestData, onResponse: Action1<MasterPlayerResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetAvatarOperationResponse);
	}

	public getCountryCode(requestData: MasterPlayerModels.GetCountryCodeRequestData, onResponse: Action1<MasterPlayerResponseModels.GetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCountryCodeOperationResponse);
	}

	public getCustomData(requestData: MasterPlayerModels.GetCustomDataRequestData, onResponse: Action1<MasterPlayerResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCustomDataOperationResponse);
	}

	public getDisplayName(requestData: MasterPlayerModels.GetDisplayNameRequestData, onResponse: Action1<MasterPlayerResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetDisplayNameOperationResponse);
	}

	public getEmail(requestData: MasterPlayerModels.GetEmailRequestData, onResponse: Action1<MasterPlayerResponseModels.GetEmailOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetEmailOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetEmailOperationResponse);
	}

	public getExternal(requestData: MasterPlayerModels.GetExternalRequestData, onResponse: Action1<MasterPlayerResponseModels.GetExternalOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetExternalOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetExternalOperationResponse);
	}

	public getIpAddressCreate(requestData: MasterPlayerModels.GetIpAddressCreateRequestData, onResponse: Action1<MasterPlayerResponseModels.GetIpAddressCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetIpAddressCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetIpAddressCreateOperationResponse);
	}

	public getPlayerBan(requestData: MasterPlayerModels.GetPlayerBanRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerBanOperationResponse);
	}

	public getPlayerCurrency(requestData: MasterPlayerModels.GetPlayerCurrencyRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetPlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerCurrencyOperationResponse);
	}

	public getPlayerData(requestData: MasterPlayerModels.GetPlayerDataRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerDataOperationResponse);
	}

	public getPlayerInformation(requestData: MasterPlayerModels.GetPlayerInformationRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayerInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetPlayerInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerInformationOperationResponse);
	}

	public getPlayerStatistics(requestData: MasterPlayerModels.GetPlayerStatisticsRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetPlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerStatisticsOperationResponse);
	}

	public getPlayersWithApple(requestData: MasterPlayerModels.GetPlayersWithAppleRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithAppleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetPlayersWithAppleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithAppleOperationResponse);
	}

	public getPlayersWithDisplayName(requestData: MasterPlayerModels.GetPlayersWithDisplayNameRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetPlayersWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse);
	}

	public getPlayersWithFacebook(requestData: MasterPlayerModels.GetPlayersWithFacebookRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithFacebookOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetPlayersWithFacebookOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithFacebookOperationResponse);
	}

	public getPlayersWithGenericService(requestData: MasterPlayerModels.GetPlayersWithGenericServiceRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithGenericServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetPlayersWithGenericServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithGenericServiceOperationResponse);
	}

	public getPlayersWithGoogle(requestData: MasterPlayerModels.GetPlayersWithGoogleRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithGoogleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetPlayersWithGoogleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithGoogleOperationResponse);
	}

	public getPlayersWithSegment(requestData: MasterPlayerModels.GetPlayersWithSegmentRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetPlayersWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithSegmentOperationResponse);
	}

	public getPlayersWithTag(requestData: MasterPlayerModels.GetPlayersWithTagRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetPlayersWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithTagOperationResponse);
	}

	public getSegment(requestData: MasterPlayerModels.GetSegmentRequestData, onResponse: Action1<MasterPlayerResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetSegmentOperationResponse);
	}

	public getStatisticsLeaderboardAroundPlayer(requestData: MasterPlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData, onResponse: Action1<MasterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	public getStatisticsLeaderboard(requestData: MasterPlayerModels.GetStatisticsLeaderboardRequestData, onResponse: Action1<MasterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public getTag(requestData: MasterPlayerModels.GetTagRequestData, onResponse: Action1<MasterPlayerResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetTagOperationResponse);
	}

	public getTsCreate(requestData: MasterPlayerModels.GetTsCreateRequestData, onResponse: Action1<MasterPlayerResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetTsCreateOperationResponse);
	}

	public getTsLastLogin(requestData: MasterPlayerModels.GetTsLastLoginRequestData, onResponse: Action1<MasterPlayerResponseModels.GetTsLastLoginOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetTsLastLoginOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetTsLastLoginOperationResponse);
	}

	public linkAccount(requestData: MasterPlayerModels.LinkAccountRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.LinkAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkAccountOperationResponse);
	}

	public linkAndroidDeviceId(requestData: MasterPlayerModels.LinkAndroidDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkAndroidDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.LinkAndroidDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkAndroidDeviceIdOperationResponse);
	}

	public linkApple(requestData: MasterPlayerModels.LinkAppleRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkAppleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.LinkAppleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkAppleOperationResponse);
	}

	public linkCustomDeviceId(requestData: MasterPlayerModels.LinkCustomDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkCustomDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.LinkCustomDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkCustomDeviceIdOperationResponse);
	}

	public linkCustomId(requestData: MasterPlayerModels.LinkCustomIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkCustomIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.LinkCustomIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkCustomIdOperationResponse);
	}

	public linkEditorDeviceId(requestData: MasterPlayerModels.LinkEditorDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkEditorDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.LinkEditorDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkEditorDeviceIdOperationResponse);
	}

	public linkFacebook(requestData: MasterPlayerModels.LinkFacebookRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkFacebookOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.LinkFacebookOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkFacebookOperationResponse);
	}

	public linkGenericService(requestData: MasterPlayerModels.LinkGenericServiceRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkGenericServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.LinkGenericServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkGenericServiceOperationResponse);
	}

	public linkGoogle(requestData: MasterPlayerModels.LinkGoogleRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkGoogleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.LinkGoogleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkGoogleOperationResponse);
	}

	public linkiOSDeviceId(requestData: MasterPlayerModels.LinkiOSDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkiOSDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.LinkiOSDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkiOSDeviceIdOperationResponse);
	}

	public linkLinuxDeviceId(requestData: MasterPlayerModels.LinkLinuxDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkLinuxDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.LinkLinuxDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkLinuxDeviceIdOperationResponse);
	}

	public linkMacOSDeviceId(requestData: MasterPlayerModels.LinkMacOSDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkMacOSDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.LinkMacOSDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkMacOSDeviceIdOperationResponse);
	}

	public linkWindowsDeviceId(requestData: MasterPlayerModels.LinkWindowsDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkWindowsDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.LinkWindowsDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkWindowsDeviceIdOperationResponse);
	}

	public linkWindowsPhoneDeviceId(requestData: MasterPlayerModels.LinkWindowsPhoneDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkWindowsPhoneDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.LinkWindowsPhoneDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkWindowsPhoneDeviceIdOperationResponse);
	}

	public removeSegment(requestData: MasterPlayerModels.RemoveSegmentRequestData, onResponse: Action1<MasterPlayerResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.RemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.RemoveSegmentOperationResponse);
	}

	public removeTag(requestData: MasterPlayerModels.RemoveTagRequestData, onResponse: Action1<MasterPlayerResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.RemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.RemoveTagOperationResponse);
	}

	public resetAccountPassword(requestData: MasterPlayerModels.ResetAccountPasswordRequestData, onResponse: Action1<MasterPlayerResponseModels.ResetAccountPasswordOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ResetAccountPasswordOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.ResetAccountPasswordOperationResponse);
	}

	public setAvatar(requestData: MasterPlayerModels.SetAvatarRequestData, onResponse: Action1<MasterPlayerResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.SetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetAvatarOperationResponse);
	}

	public setCountryCode(requestData: MasterPlayerModels.SetCountryCodeRequestData, onResponse: Action1<MasterPlayerResponseModels.SetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.SetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetCountryCodeOperationResponse);
	}

	public setCustomData(requestData: MasterPlayerModels.SetCustomDataRequestData, onResponse: Action1<MasterPlayerResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.SetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetCustomDataOperationResponse);
	}

	public setDisplayName(requestData: MasterPlayerModels.SetDisplayNameRequestData, onResponse: Action1<MasterPlayerResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.SetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetDisplayNameOperationResponse);
	}

	public setEmail(requestData: MasterPlayerModels.SetEmailRequestData, onResponse: Action1<MasterPlayerResponseModels.SetEmailOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.SetEmailOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetEmailOperationResponse);
	}

	public setPlayerBan(requestData: MasterPlayerModels.SetPlayerBanRequestData, onResponse: Action1<MasterPlayerResponseModels.SetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.SetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerBanOperationResponse);
	}

	public setPlayerCurrency(requestData: MasterPlayerModels.SetPlayerCurrencyRequestData, onResponse: Action1<MasterPlayerResponseModels.SetPlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.SetPlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerCurrencyOperationResponse);
	}

	public setPlayerData(requestData: MasterPlayerModels.SetPlayerDataRequestData, onResponse: Action1<MasterPlayerResponseModels.SetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.SetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerDataOperationResponse);
	}

	public setPlayerStatistics(requestData: MasterPlayerModels.SetPlayerStatisticsRequestData, onResponse: Action1<MasterPlayerResponseModels.SetPlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.SetPlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerStatisticsOperationResponse);
	}

	public setTag(requestData: MasterPlayerModels.SetTagRequestData, onResponse: Action1<MasterPlayerResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.SetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetTagOperationResponse);
	}

	public setTsLastLogin(requestData: MasterPlayerModels.SetTsLastLoginRequestData, onResponse: Action1<MasterPlayerResponseModels.SetTsLastLoginOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.SetTsLastLoginOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetTsLastLoginOperationResponse);
	}

	public unlinkAccount(requestData: MasterPlayerModels.UnlinkAccountRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.UnlinkAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkAccountOperationResponse);
	}

	public unlinkAndroidDeviceId(requestData: MasterPlayerModels.UnlinkAndroidDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkAndroidDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.UnlinkAndroidDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkAndroidDeviceIdOperationResponse);
	}

	public unlinkApple(requestData: MasterPlayerModels.UnlinkAppleRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkAppleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.UnlinkAppleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkAppleOperationResponse);
	}

	public unlinkCustomDeviceId(requestData: MasterPlayerModels.UnlinkCustomDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkCustomDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.UnlinkCustomDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkCustomDeviceIdOperationResponse);
	}

	public unlinkCustomId(requestData: MasterPlayerModels.UnlinkCustomIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkCustomIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.UnlinkCustomIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkCustomIdOperationResponse);
	}

	public unlinkEditorDeviceId(requestData: MasterPlayerModels.UnlinkEditorDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkEditorDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.UnlinkEditorDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkEditorDeviceIdOperationResponse);
	}

	public unlinkFacebook(requestData: MasterPlayerModels.UnlinkFacebookRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkFacebookOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.UnlinkFacebookOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkFacebookOperationResponse);
	}

	public unlinkGenericService(requestData: MasterPlayerModels.UnlinkGenericServiceRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkGenericServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.UnlinkGenericServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkGenericServiceOperationResponse);
	}

	public unlinkGoogle(requestData: MasterPlayerModels.UnlinkGoogleRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkGoogleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.UnlinkGoogleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkGoogleOperationResponse);
	}

	public unlinkiOSDeviceId(requestData: MasterPlayerModels.UnlinkiOSDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkiOSDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.UnlinkiOSDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkiOSDeviceIdOperationResponse);
	}

	public unlinkLinuxDeviceId(requestData: MasterPlayerModels.UnlinkLinuxDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkLinuxDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.UnlinkLinuxDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkLinuxDeviceIdOperationResponse);
	}

	public unlinkMacOSDeviceId(requestData: MasterPlayerModels.UnlinkMacOSDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkMacOSDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.UnlinkMacOSDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkMacOSDeviceIdOperationResponse);
	}

	public unlinkWindowsDeviceId(requestData: MasterPlayerModels.UnlinkWindowsDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkWindowsDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.UnlinkWindowsDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkWindowsDeviceIdOperationResponse);
	}

	public unlinkWindowsPhoneDeviceId(requestData: MasterPlayerModels.UnlinkWindowsPhoneDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkWindowsPhoneDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.UnlinkWindowsPhoneDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkWindowsPhoneDeviceIdOperationResponse);
	}

}

export class ServerMasterPlayerApi {
	public addSegment(requestData: MasterPlayerModels.ServerAddSegmentRequestData, onResponse: Action1<MasterPlayerResponseModels.AddSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerAddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.AddSegmentOperationResponse);
	}

	public getAvatar(requestData: MasterPlayerModels.ServerGetAvatarRequestData, onResponse: Action1<MasterPlayerResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetAvatarOperationResponse);
	}

	public getCountryCode(requestData: MasterPlayerModels.ServerGetCountryCodeRequestData, onResponse: Action1<MasterPlayerResponseModels.GetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCountryCodeOperationResponse);
	}

	public getCustomData(requestData: MasterPlayerModels.ServerGetCustomDataRequestData, onResponse: Action1<MasterPlayerResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCustomDataOperationResponse);
	}

	public getDisplayName(requestData: MasterPlayerModels.ServerGetDisplayNameRequestData, onResponse: Action1<MasterPlayerResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetDisplayNameOperationResponse);
	}

	public getEmail(requestData: MasterPlayerModels.ServerGetEmailRequestData, onResponse: Action1<MasterPlayerResponseModels.GetEmailOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetEmailOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetEmailOperationResponse);
	}

	public getExternal(requestData: MasterPlayerModels.ServerGetExternalRequestData, onResponse: Action1<MasterPlayerResponseModels.GetExternalOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetExternalOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetExternalOperationResponse);
	}

	public getIpAddressCreate(requestData: MasterPlayerModels.ServerGetIpAddressCreateRequestData, onResponse: Action1<MasterPlayerResponseModels.GetIpAddressCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetIpAddressCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetIpAddressCreateOperationResponse);
	}

	public getPlayerBan(requestData: MasterPlayerModels.ServerGetPlayerBanRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerBanOperationResponse);
	}

	public getPlayerCurrency(requestData: MasterPlayerModels.ServerGetPlayerCurrencyRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetPlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerCurrencyOperationResponse);
	}

	public getPlayerData(requestData: MasterPlayerModels.ServerGetPlayerDataRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerDataOperationResponse);
	}

	public getPlayerInformation(requestData: MasterPlayerModels.ServerGetPlayerInformationRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayerInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetPlayerInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerInformationOperationResponse);
	}

	public getPlayerStatistics(requestData: MasterPlayerModels.ServerGetPlayerStatisticsRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetPlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerStatisticsOperationResponse);
	}

	public getPlayersWithApple(requestData: MasterPlayerModels.ServerGetPlayersWithAppleRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithAppleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetPlayersWithAppleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithAppleOperationResponse);
	}

	public getPlayersWithDisplayName(requestData: MasterPlayerModels.ServerGetPlayersWithDisplayNameRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetPlayersWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse);
	}

	public getPlayersWithFacebook(requestData: MasterPlayerModels.ServerGetPlayersWithFacebookRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithFacebookOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetPlayersWithFacebookOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithFacebookOperationResponse);
	}

	public getPlayersWithGenericService(requestData: MasterPlayerModels.ServerGetPlayersWithGenericServiceRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithGenericServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetPlayersWithGenericServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithGenericServiceOperationResponse);
	}

	public getPlayersWithGoogle(requestData: MasterPlayerModels.ServerGetPlayersWithGoogleRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithGoogleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetPlayersWithGoogleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithGoogleOperationResponse);
	}

	public getPlayersWithSegment(requestData: MasterPlayerModels.ServerGetPlayersWithSegmentRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetPlayersWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithSegmentOperationResponse);
	}

	public getPlayersWithTag(requestData: MasterPlayerModels.ServerGetPlayersWithTagRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetPlayersWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithTagOperationResponse);
	}

	public getSegment(requestData: MasterPlayerModels.ServerGetSegmentRequestData, onResponse: Action1<MasterPlayerResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetSegmentOperationResponse);
	}

	public getStatisticsLeaderboardAroundPlayer(requestData: MasterPlayerModels.ServerGetStatisticsLeaderboardAroundPlayerRequestData, onResponse: Action1<MasterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	public getStatisticsLeaderboard(requestData: MasterPlayerModels.ServerGetStatisticsLeaderboardRequestData, onResponse: Action1<MasterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public getTag(requestData: MasterPlayerModels.ServerGetTagRequestData, onResponse: Action1<MasterPlayerResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetTagOperationResponse);
	}

	public getTsCreate(requestData: MasterPlayerModels.ServerGetTsCreateRequestData, onResponse: Action1<MasterPlayerResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetTsCreateOperationResponse);
	}

	public getTsLastLogin(requestData: MasterPlayerModels.ServerGetTsLastLoginRequestData, onResponse: Action1<MasterPlayerResponseModels.GetTsLastLoginOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetTsLastLoginOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetTsLastLoginOperationResponse);
	}

	public linkAccount(requestData: MasterPlayerModels.ServerLinkAccountRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerLinkAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkAccountOperationResponse);
	}

	public linkAndroidDeviceId(requestData: MasterPlayerModels.ServerLinkAndroidDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkAndroidDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerLinkAndroidDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkAndroidDeviceIdOperationResponse);
	}

	public linkApple(requestData: MasterPlayerModels.ServerLinkAppleRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkAppleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerLinkAppleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkAppleOperationResponse);
	}

	public linkCustomDeviceId(requestData: MasterPlayerModels.ServerLinkCustomDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkCustomDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerLinkCustomDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkCustomDeviceIdOperationResponse);
	}

	public linkCustomId(requestData: MasterPlayerModels.ServerLinkCustomIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkCustomIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerLinkCustomIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkCustomIdOperationResponse);
	}

	public linkEditorDeviceId(requestData: MasterPlayerModels.ServerLinkEditorDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkEditorDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerLinkEditorDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkEditorDeviceIdOperationResponse);
	}

	public linkFacebook(requestData: MasterPlayerModels.ServerLinkFacebookRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkFacebookOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerLinkFacebookOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkFacebookOperationResponse);
	}

	public linkGenericService(requestData: MasterPlayerModels.ServerLinkGenericServiceRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkGenericServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerLinkGenericServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkGenericServiceOperationResponse);
	}

	public linkGoogle(requestData: MasterPlayerModels.ServerLinkGoogleRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkGoogleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerLinkGoogleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkGoogleOperationResponse);
	}

	public linkiOSDeviceId(requestData: MasterPlayerModels.ServerLinkiOSDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkiOSDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerLinkiOSDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkiOSDeviceIdOperationResponse);
	}

	public linkLinuxDeviceId(requestData: MasterPlayerModels.ServerLinkLinuxDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkLinuxDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerLinkLinuxDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkLinuxDeviceIdOperationResponse);
	}

	public linkMacOSDeviceId(requestData: MasterPlayerModels.ServerLinkMacOSDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkMacOSDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerLinkMacOSDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkMacOSDeviceIdOperationResponse);
	}

	public linkWindowsDeviceId(requestData: MasterPlayerModels.ServerLinkWindowsDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkWindowsDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerLinkWindowsDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkWindowsDeviceIdOperationResponse);
	}

	public linkWindowsPhoneDeviceId(requestData: MasterPlayerModels.ServerLinkWindowsPhoneDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkWindowsPhoneDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerLinkWindowsPhoneDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkWindowsPhoneDeviceIdOperationResponse);
	}

	public removeSegment(requestData: MasterPlayerModels.ServerRemoveSegmentRequestData, onResponse: Action1<MasterPlayerResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerRemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.RemoveSegmentOperationResponse);
	}

	public removeTag(requestData: MasterPlayerModels.ServerRemoveTagRequestData, onResponse: Action1<MasterPlayerResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerRemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.RemoveTagOperationResponse);
	}

	public resetAccountPassword(requestData: MasterPlayerModels.ServerResetAccountPasswordRequestData, onResponse: Action1<MasterPlayerResponseModels.ResetAccountPasswordOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerResetAccountPasswordOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.ResetAccountPasswordOperationResponse);
	}

	public setAvatar(requestData: MasterPlayerModels.ServerSetAvatarRequestData, onResponse: Action1<MasterPlayerResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerSetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetAvatarOperationResponse);
	}

	public setCountryCode(requestData: MasterPlayerModels.ServerSetCountryCodeRequestData, onResponse: Action1<MasterPlayerResponseModels.SetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerSetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetCountryCodeOperationResponse);
	}

	public setCustomData(requestData: MasterPlayerModels.ServerSetCustomDataRequestData, onResponse: Action1<MasterPlayerResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerSetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetCustomDataOperationResponse);
	}

	public setDisplayName(requestData: MasterPlayerModels.ServerSetDisplayNameRequestData, onResponse: Action1<MasterPlayerResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerSetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetDisplayNameOperationResponse);
	}

	public setEmail(requestData: MasterPlayerModels.ServerSetEmailRequestData, onResponse: Action1<MasterPlayerResponseModels.SetEmailOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerSetEmailOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetEmailOperationResponse);
	}

	public setPlayerBan(requestData: MasterPlayerModels.ServerSetPlayerBanRequestData, onResponse: Action1<MasterPlayerResponseModels.SetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerSetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerBanOperationResponse);
	}

	public setPlayerCurrency(requestData: MasterPlayerModels.ServerSetPlayerCurrencyRequestData, onResponse: Action1<MasterPlayerResponseModels.SetPlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerSetPlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerCurrencyOperationResponse);
	}

	public setPlayerData(requestData: MasterPlayerModels.ServerSetPlayerDataRequestData, onResponse: Action1<MasterPlayerResponseModels.SetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerSetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerDataOperationResponse);
	}

	public setPlayerStatistics(requestData: MasterPlayerModels.ServerSetPlayerStatisticsRequestData, onResponse: Action1<MasterPlayerResponseModels.SetPlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerSetPlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerStatisticsOperationResponse);
	}

	public setTag(requestData: MasterPlayerModels.ServerSetTagRequestData, onResponse: Action1<MasterPlayerResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerSetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetTagOperationResponse);
	}

	public setTsLastLogin(requestData: MasterPlayerModels.ServerSetTsLastLoginRequestData, onResponse: Action1<MasterPlayerResponseModels.SetTsLastLoginOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerSetTsLastLoginOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetTsLastLoginOperationResponse);
	}

	public unlinkAccount(requestData: MasterPlayerModels.ServerUnlinkAccountRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerUnlinkAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkAccountOperationResponse);
	}

	public unlinkAndroidDeviceId(requestData: MasterPlayerModels.ServerUnlinkAndroidDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkAndroidDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerUnlinkAndroidDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkAndroidDeviceIdOperationResponse);
	}

	public unlinkApple(requestData: MasterPlayerModels.ServerUnlinkAppleRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkAppleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerUnlinkAppleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkAppleOperationResponse);
	}

	public unlinkCustomDeviceId(requestData: MasterPlayerModels.ServerUnlinkCustomDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkCustomDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerUnlinkCustomDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkCustomDeviceIdOperationResponse);
	}

	public unlinkCustomId(requestData: MasterPlayerModels.ServerUnlinkCustomIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkCustomIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerUnlinkCustomIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkCustomIdOperationResponse);
	}

	public unlinkEditorDeviceId(requestData: MasterPlayerModels.ServerUnlinkEditorDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkEditorDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerUnlinkEditorDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkEditorDeviceIdOperationResponse);
	}

	public unlinkFacebook(requestData: MasterPlayerModels.ServerUnlinkFacebookRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkFacebookOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerUnlinkFacebookOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkFacebookOperationResponse);
	}

	public unlinkGenericService(requestData: MasterPlayerModels.ServerUnlinkGenericServiceRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkGenericServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerUnlinkGenericServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkGenericServiceOperationResponse);
	}

	public unlinkGoogle(requestData: MasterPlayerModels.ServerUnlinkGoogleRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkGoogleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerUnlinkGoogleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkGoogleOperationResponse);
	}

	public unlinkiOSDeviceId(requestData: MasterPlayerModels.ServerUnlinkiOSDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkiOSDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerUnlinkiOSDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkiOSDeviceIdOperationResponse);
	}

	public unlinkLinuxDeviceId(requestData: MasterPlayerModels.ServerUnlinkLinuxDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkLinuxDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerUnlinkLinuxDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkLinuxDeviceIdOperationResponse);
	}

	public unlinkMacOSDeviceId(requestData: MasterPlayerModels.ServerUnlinkMacOSDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkMacOSDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerUnlinkMacOSDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkMacOSDeviceIdOperationResponse);
	}

	public unlinkWindowsDeviceId(requestData: MasterPlayerModels.ServerUnlinkWindowsDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkWindowsDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerUnlinkWindowsDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkWindowsDeviceIdOperationResponse);
	}

	public unlinkWindowsPhoneDeviceId(requestData: MasterPlayerModels.ServerUnlinkWindowsPhoneDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkWindowsPhoneDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerUnlinkWindowsPhoneDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkWindowsPhoneDeviceIdOperationResponse);
	}

}

export class AdminMasterPlayerApi {
	public addSegment(requestData: MasterPlayerModels.AdminAddSegmentRequestData, onResponse: Action1<MasterPlayerResponseModels.AddSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminAddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.AddSegmentOperationResponse);
	}

	public getAvatar(requestData: MasterPlayerModels.AdminGetAvatarRequestData, onResponse: Action1<MasterPlayerResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetAvatarOperationResponse);
	}

	public getCountryCode(requestData: MasterPlayerModels.AdminGetCountryCodeRequestData, onResponse: Action1<MasterPlayerResponseModels.GetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCountryCodeOperationResponse);
	}

	public getCustomData(requestData: MasterPlayerModels.AdminGetCustomDataRequestData, onResponse: Action1<MasterPlayerResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCustomDataOperationResponse);
	}

	public getDisplayName(requestData: MasterPlayerModels.AdminGetDisplayNameRequestData, onResponse: Action1<MasterPlayerResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetDisplayNameOperationResponse);
	}

	public getEmail(requestData: MasterPlayerModels.AdminGetEmailRequestData, onResponse: Action1<MasterPlayerResponseModels.GetEmailOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetEmailOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetEmailOperationResponse);
	}

	public getExternal(requestData: MasterPlayerModels.AdminGetExternalRequestData, onResponse: Action1<MasterPlayerResponseModels.GetExternalOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetExternalOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetExternalOperationResponse);
	}

	public getIpAddressCreate(requestData: MasterPlayerModels.AdminGetIpAddressCreateRequestData, onResponse: Action1<MasterPlayerResponseModels.GetIpAddressCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetIpAddressCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetIpAddressCreateOperationResponse);
	}

	public getPlayerBan(requestData: MasterPlayerModels.AdminGetPlayerBanRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerBanOperationResponse);
	}

	public getPlayerCurrency(requestData: MasterPlayerModels.AdminGetPlayerCurrencyRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetPlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerCurrencyOperationResponse);
	}

	public getPlayerData(requestData: MasterPlayerModels.AdminGetPlayerDataRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerDataOperationResponse);
	}

	public getPlayerInformation(requestData: MasterPlayerModels.AdminGetPlayerInformationRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayerInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetPlayerInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerInformationOperationResponse);
	}

	public getPlayerStatistics(requestData: MasterPlayerModels.AdminGetPlayerStatisticsRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetPlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerStatisticsOperationResponse);
	}

	public getPlayersWithApple(requestData: MasterPlayerModels.AdminGetPlayersWithAppleRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithAppleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetPlayersWithAppleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithAppleOperationResponse);
	}

	public getPlayersWithDisplayName(requestData: MasterPlayerModels.AdminGetPlayersWithDisplayNameRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetPlayersWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse);
	}

	public getPlayersWithFacebook(requestData: MasterPlayerModels.AdminGetPlayersWithFacebookRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithFacebookOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetPlayersWithFacebookOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithFacebookOperationResponse);
	}

	public getPlayersWithGenericService(requestData: MasterPlayerModels.AdminGetPlayersWithGenericServiceRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithGenericServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetPlayersWithGenericServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithGenericServiceOperationResponse);
	}

	public getPlayersWithGoogle(requestData: MasterPlayerModels.AdminGetPlayersWithGoogleRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithGoogleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetPlayersWithGoogleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithGoogleOperationResponse);
	}

	public getPlayersWithSegment(requestData: MasterPlayerModels.AdminGetPlayersWithSegmentRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetPlayersWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithSegmentOperationResponse);
	}

	public getPlayersWithTag(requestData: MasterPlayerModels.AdminGetPlayersWithTagRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetPlayersWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithTagOperationResponse);
	}

	public getSegment(requestData: MasterPlayerModels.AdminGetSegmentRequestData, onResponse: Action1<MasterPlayerResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetSegmentOperationResponse);
	}

	public getStatisticsLeaderboardAroundPlayer(requestData: MasterPlayerModels.AdminGetStatisticsLeaderboardAroundPlayerRequestData, onResponse: Action1<MasterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	public getStatisticsLeaderboard(requestData: MasterPlayerModels.AdminGetStatisticsLeaderboardRequestData, onResponse: Action1<MasterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public getTag(requestData: MasterPlayerModels.AdminGetTagRequestData, onResponse: Action1<MasterPlayerResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetTagOperationResponse);
	}

	public getTsCreate(requestData: MasterPlayerModels.AdminGetTsCreateRequestData, onResponse: Action1<MasterPlayerResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetTsCreateOperationResponse);
	}

	public getTsLastLogin(requestData: MasterPlayerModels.AdminGetTsLastLoginRequestData, onResponse: Action1<MasterPlayerResponseModels.GetTsLastLoginOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetTsLastLoginOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetTsLastLoginOperationResponse);
	}

	public linkAccount(requestData: MasterPlayerModels.AdminLinkAccountRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminLinkAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkAccountOperationResponse);
	}

	public linkAndroidDeviceId(requestData: MasterPlayerModels.AdminLinkAndroidDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkAndroidDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminLinkAndroidDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkAndroidDeviceIdOperationResponse);
	}

	public linkApple(requestData: MasterPlayerModels.AdminLinkAppleRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkAppleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminLinkAppleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkAppleOperationResponse);
	}

	public linkCustomDeviceId(requestData: MasterPlayerModels.AdminLinkCustomDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkCustomDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminLinkCustomDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkCustomDeviceIdOperationResponse);
	}

	public linkCustomId(requestData: MasterPlayerModels.AdminLinkCustomIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkCustomIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminLinkCustomIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkCustomIdOperationResponse);
	}

	public linkEditorDeviceId(requestData: MasterPlayerModels.AdminLinkEditorDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkEditorDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminLinkEditorDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkEditorDeviceIdOperationResponse);
	}

	public linkFacebook(requestData: MasterPlayerModels.AdminLinkFacebookRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkFacebookOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminLinkFacebookOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkFacebookOperationResponse);
	}

	public linkGenericService(requestData: MasterPlayerModels.AdminLinkGenericServiceRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkGenericServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminLinkGenericServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkGenericServiceOperationResponse);
	}

	public linkGoogle(requestData: MasterPlayerModels.AdminLinkGoogleRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkGoogleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminLinkGoogleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkGoogleOperationResponse);
	}

	public linkiOSDeviceId(requestData: MasterPlayerModels.AdminLinkiOSDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkiOSDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminLinkiOSDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkiOSDeviceIdOperationResponse);
	}

	public linkLinuxDeviceId(requestData: MasterPlayerModels.AdminLinkLinuxDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkLinuxDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminLinkLinuxDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkLinuxDeviceIdOperationResponse);
	}

	public linkMacOSDeviceId(requestData: MasterPlayerModels.AdminLinkMacOSDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkMacOSDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminLinkMacOSDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkMacOSDeviceIdOperationResponse);
	}

	public linkWindowsDeviceId(requestData: MasterPlayerModels.AdminLinkWindowsDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkWindowsDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminLinkWindowsDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkWindowsDeviceIdOperationResponse);
	}

	public linkWindowsPhoneDeviceId(requestData: MasterPlayerModels.AdminLinkWindowsPhoneDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkWindowsPhoneDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminLinkWindowsPhoneDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkWindowsPhoneDeviceIdOperationResponse);
	}

	public removeSegment(requestData: MasterPlayerModels.AdminRemoveSegmentRequestData, onResponse: Action1<MasterPlayerResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminRemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.RemoveSegmentOperationResponse);
	}

	public removeTag(requestData: MasterPlayerModels.AdminRemoveTagRequestData, onResponse: Action1<MasterPlayerResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminRemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.RemoveTagOperationResponse);
	}

	public resetAccountPassword(requestData: MasterPlayerModels.AdminResetAccountPasswordRequestData, onResponse: Action1<MasterPlayerResponseModels.ResetAccountPasswordOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminResetAccountPasswordOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.ResetAccountPasswordOperationResponse);
	}

	public setAvatar(requestData: MasterPlayerModels.AdminSetAvatarRequestData, onResponse: Action1<MasterPlayerResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminSetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetAvatarOperationResponse);
	}

	public setCountryCode(requestData: MasterPlayerModels.AdminSetCountryCodeRequestData, onResponse: Action1<MasterPlayerResponseModels.SetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminSetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetCountryCodeOperationResponse);
	}

	public setCustomData(requestData: MasterPlayerModels.AdminSetCustomDataRequestData, onResponse: Action1<MasterPlayerResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminSetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetCustomDataOperationResponse);
	}

	public setDisplayName(requestData: MasterPlayerModels.AdminSetDisplayNameRequestData, onResponse: Action1<MasterPlayerResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminSetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetDisplayNameOperationResponse);
	}

	public setEmail(requestData: MasterPlayerModels.AdminSetEmailRequestData, onResponse: Action1<MasterPlayerResponseModels.SetEmailOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminSetEmailOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetEmailOperationResponse);
	}

	public setPlayerBan(requestData: MasterPlayerModels.AdminSetPlayerBanRequestData, onResponse: Action1<MasterPlayerResponseModels.SetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminSetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerBanOperationResponse);
	}

	public setPlayerCurrency(requestData: MasterPlayerModels.AdminSetPlayerCurrencyRequestData, onResponse: Action1<MasterPlayerResponseModels.SetPlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminSetPlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerCurrencyOperationResponse);
	}

	public setPlayerData(requestData: MasterPlayerModels.AdminSetPlayerDataRequestData, onResponse: Action1<MasterPlayerResponseModels.SetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminSetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerDataOperationResponse);
	}

	public setPlayerStatistics(requestData: MasterPlayerModels.AdminSetPlayerStatisticsRequestData, onResponse: Action1<MasterPlayerResponseModels.SetPlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminSetPlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerStatisticsOperationResponse);
	}

	public setTag(requestData: MasterPlayerModels.AdminSetTagRequestData, onResponse: Action1<MasterPlayerResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminSetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetTagOperationResponse);
	}

	public setTsLastLogin(requestData: MasterPlayerModels.AdminSetTsLastLoginRequestData, onResponse: Action1<MasterPlayerResponseModels.SetTsLastLoginOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminSetTsLastLoginOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetTsLastLoginOperationResponse);
	}

	public unlinkAccount(requestData: MasterPlayerModels.AdminUnlinkAccountRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminUnlinkAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkAccountOperationResponse);
	}

	public unlinkAndroidDeviceId(requestData: MasterPlayerModels.AdminUnlinkAndroidDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkAndroidDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminUnlinkAndroidDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkAndroidDeviceIdOperationResponse);
	}

	public unlinkApple(requestData: MasterPlayerModels.AdminUnlinkAppleRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkAppleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminUnlinkAppleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkAppleOperationResponse);
	}

	public unlinkCustomDeviceId(requestData: MasterPlayerModels.AdminUnlinkCustomDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkCustomDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminUnlinkCustomDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkCustomDeviceIdOperationResponse);
	}

	public unlinkCustomId(requestData: MasterPlayerModels.AdminUnlinkCustomIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkCustomIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminUnlinkCustomIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkCustomIdOperationResponse);
	}

	public unlinkEditorDeviceId(requestData: MasterPlayerModels.AdminUnlinkEditorDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkEditorDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminUnlinkEditorDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkEditorDeviceIdOperationResponse);
	}

	public unlinkFacebook(requestData: MasterPlayerModels.AdminUnlinkFacebookRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkFacebookOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminUnlinkFacebookOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkFacebookOperationResponse);
	}

	public unlinkGenericService(requestData: MasterPlayerModels.AdminUnlinkGenericServiceRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkGenericServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminUnlinkGenericServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkGenericServiceOperationResponse);
	}

	public unlinkGoogle(requestData: MasterPlayerModels.AdminUnlinkGoogleRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkGoogleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminUnlinkGoogleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkGoogleOperationResponse);
	}

	public unlinkiOSDeviceId(requestData: MasterPlayerModels.AdminUnlinkiOSDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkiOSDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminUnlinkiOSDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkiOSDeviceIdOperationResponse);
	}

	public unlinkLinuxDeviceId(requestData: MasterPlayerModels.AdminUnlinkLinuxDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkLinuxDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminUnlinkLinuxDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkLinuxDeviceIdOperationResponse);
	}

	public unlinkMacOSDeviceId(requestData: MasterPlayerModels.AdminUnlinkMacOSDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkMacOSDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminUnlinkMacOSDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkMacOSDeviceIdOperationResponse);
	}

	public unlinkWindowsDeviceId(requestData: MasterPlayerModels.AdminUnlinkWindowsDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkWindowsDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminUnlinkWindowsDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkWindowsDeviceIdOperationResponse);
	}

	public unlinkWindowsPhoneDeviceId(requestData: MasterPlayerModels.AdminUnlinkWindowsPhoneDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkWindowsPhoneDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminUnlinkWindowsPhoneDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkWindowsPhoneDeviceIdOperationResponse);
	}

}

