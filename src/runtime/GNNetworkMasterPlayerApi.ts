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

	public async addSegmentAsync(requestData: MasterPlayerModels.AddSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.AddSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AddSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.AddSegmentOperationResponse);
	}

	public changeAccountPassword(requestData: MasterPlayerModels.ChangeAccountPasswordRequestData, onResponse: Action1<MasterPlayerResponseModels.ChangeAccountPasswordOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ChangeAccountPasswordOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.ChangeAccountPasswordOperationResponse);
	}

	public async changeAccountPasswordAsync(requestData: MasterPlayerModels.ChangeAccountPasswordRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.ChangeAccountPasswordOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ChangeAccountPasswordOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.ChangeAccountPasswordOperationResponse);
	}

	public getAvatar(requestData: MasterPlayerModels.GetAvatarRequestData, onResponse: Action1<MasterPlayerResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetAvatarOperationResponse);
	}

	public async getAvatarAsync(requestData: MasterPlayerModels.GetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetAvatarOperationResponse);
	}

	public getCountryCode(requestData: MasterPlayerModels.GetCountryCodeRequestData, onResponse: Action1<MasterPlayerResponseModels.GetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCountryCodeOperationResponse);
	}

	public async getCountryCodeAsync(requestData: MasterPlayerModels.GetCountryCodeRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetCountryCodeOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetCountryCodeOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCountryCodeOperationResponse);
	}

	public getCustomData(requestData: MasterPlayerModels.GetCustomDataRequestData, onResponse: Action1<MasterPlayerResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCustomDataOperationResponse);
	}

	public async getCustomDataAsync(requestData: MasterPlayerModels.GetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCustomDataOperationResponse);
	}

	public getDisplayName(requestData: MasterPlayerModels.GetDisplayNameRequestData, onResponse: Action1<MasterPlayerResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetDisplayNameOperationResponse);
	}

	public async getDisplayNameAsync(requestData: MasterPlayerModels.GetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetDisplayNameOperationResponse);
	}

	public getEmail(requestData: MasterPlayerModels.GetEmailRequestData, onResponse: Action1<MasterPlayerResponseModels.GetEmailOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetEmailOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetEmailOperationResponse);
	}

	public async getEmailAsync(requestData: MasterPlayerModels.GetEmailRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetEmailOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetEmailOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetEmailOperationResponse);
	}

	public getExternal(requestData: MasterPlayerModels.GetExternalRequestData, onResponse: Action1<MasterPlayerResponseModels.GetExternalOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetExternalOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetExternalOperationResponse);
	}

	public async getExternalAsync(requestData: MasterPlayerModels.GetExternalRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetExternalOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetExternalOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetExternalOperationResponse);
	}

	public getIpAddressCreate(requestData: MasterPlayerModels.GetIpAddressCreateRequestData, onResponse: Action1<MasterPlayerResponseModels.GetIpAddressCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetIpAddressCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetIpAddressCreateOperationResponse);
	}

	public async getIpAddressCreateAsync(requestData: MasterPlayerModels.GetIpAddressCreateRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetIpAddressCreateOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetIpAddressCreateOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetIpAddressCreateOperationResponse);
	}

	public getPlayerBan(requestData: MasterPlayerModels.GetPlayerBanRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerBanOperationResponse);
	}

	public async getPlayerBanAsync(requestData: MasterPlayerModels.GetPlayerBanRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayerBanOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetPlayerBanOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerBanOperationResponse);
	}

	public getPlayerCurrency(requestData: MasterPlayerModels.GetPlayerCurrencyRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetPlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerCurrencyOperationResponse);
	}

	public async getPlayerCurrencyAsync(requestData: MasterPlayerModels.GetPlayerCurrencyRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayerCurrencyOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetPlayerCurrencyOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerCurrencyOperationResponse);
	}

	public getPlayerData(requestData: MasterPlayerModels.GetPlayerDataRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerDataOperationResponse);
	}

	public async getPlayerDataAsync(requestData: MasterPlayerModels.GetPlayerDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayerDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetPlayerDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerDataOperationResponse);
	}

	public getPlayerInformation(requestData: MasterPlayerModels.GetPlayerInformationRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayerInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetPlayerInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerInformationOperationResponse);
	}

	public async getPlayerInformationAsync(requestData: MasterPlayerModels.GetPlayerInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayerInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetPlayerInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerInformationOperationResponse);
	}

	public getPlayerStatistics(requestData: MasterPlayerModels.GetPlayerStatisticsRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetPlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerStatisticsOperationResponse);
	}

	public async getPlayerStatisticsAsync(requestData: MasterPlayerModels.GetPlayerStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayerStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetPlayerStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerStatisticsOperationResponse);
	}

	public getPlayersWithApple(requestData: MasterPlayerModels.GetPlayersWithAppleRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithAppleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetPlayersWithAppleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithAppleOperationResponse);
	}

	public async getPlayersWithAppleAsync(requestData: MasterPlayerModels.GetPlayersWithAppleRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayersWithAppleOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetPlayersWithAppleOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithAppleOperationResponse);
	}

	public getPlayersWithDisplayName(requestData: MasterPlayerModels.GetPlayersWithDisplayNameRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetPlayersWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse);
	}

	public async getPlayersWithDisplayNameAsync(requestData: MasterPlayerModels.GetPlayersWithDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetPlayersWithDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse);
	}

	public getPlayersWithFacebook(requestData: MasterPlayerModels.GetPlayersWithFacebookRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithFacebookOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetPlayersWithFacebookOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithFacebookOperationResponse);
	}

	public async getPlayersWithFacebookAsync(requestData: MasterPlayerModels.GetPlayersWithFacebookRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayersWithFacebookOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetPlayersWithFacebookOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithFacebookOperationResponse);
	}

	public getPlayersWithGenericService(requestData: MasterPlayerModels.GetPlayersWithGenericServiceRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithGenericServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetPlayersWithGenericServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithGenericServiceOperationResponse);
	}

	public async getPlayersWithGenericServiceAsync(requestData: MasterPlayerModels.GetPlayersWithGenericServiceRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayersWithGenericServiceOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetPlayersWithGenericServiceOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithGenericServiceOperationResponse);
	}

	public getPlayersWithGoogle(requestData: MasterPlayerModels.GetPlayersWithGoogleRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithGoogleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetPlayersWithGoogleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithGoogleOperationResponse);
	}

	public async getPlayersWithGoogleAsync(requestData: MasterPlayerModels.GetPlayersWithGoogleRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayersWithGoogleOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetPlayersWithGoogleOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithGoogleOperationResponse);
	}

	public getPlayersWithGooglePlayGameService(requestData: MasterPlayerModels.GetPlayersWithGooglePlayGameServiceRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithGooglePlayGameServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetPlayersWithGooglePlayGameServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithGooglePlayGameServiceOperationResponse);
	}

	public async getPlayersWithGooglePlayGameServiceAsync(requestData: MasterPlayerModels.GetPlayersWithGooglePlayGameServiceRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayersWithGooglePlayGameServiceOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetPlayersWithGooglePlayGameServiceOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithGooglePlayGameServiceOperationResponse);
	}

	public getPlayersWithGameCenter(requestData: MasterPlayerModels.GetPlayersWithGameCenterRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithGameCenterOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetPlayersWithGameCenterOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithGameCenterOperationResponse);
	}

	public async getPlayersWithGameCenterAsync(requestData: MasterPlayerModels.GetPlayersWithGameCenterRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayersWithGameCenterOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetPlayersWithGameCenterOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithGameCenterOperationResponse);
	}

	public getPlayersWithSegment(requestData: MasterPlayerModels.GetPlayersWithSegmentRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetPlayersWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithSegmentOperationResponse);
	}

	public async getPlayersWithSegmentAsync(requestData: MasterPlayerModels.GetPlayersWithSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayersWithSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetPlayersWithSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithSegmentOperationResponse);
	}

	public getPlayersWithTag(requestData: MasterPlayerModels.GetPlayersWithTagRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetPlayersWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithTagOperationResponse);
	}

	public async getPlayersWithTagAsync(requestData: MasterPlayerModels.GetPlayersWithTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayersWithTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetPlayersWithTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithTagOperationResponse);
	}

	public getSegment(requestData: MasterPlayerModels.GetSegmentRequestData, onResponse: Action1<MasterPlayerResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetSegmentOperationResponse);
	}

	public async getSegmentAsync(requestData: MasterPlayerModels.GetSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetSegmentOperationResponse);
	}

	public getStatisticsLeaderboardAroundPlayer(requestData: MasterPlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData, onResponse: Action1<MasterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	public async getStatisticsLeaderboardAroundPlayerAsync(requestData: MasterPlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	public getStatisticsLeaderboard(requestData: MasterPlayerModels.GetStatisticsLeaderboardRequestData, onResponse: Action1<MasterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public async getStatisticsLeaderboardAsync(requestData: MasterPlayerModels.GetStatisticsLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetStatisticsLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public getTag(requestData: MasterPlayerModels.GetTagRequestData, onResponse: Action1<MasterPlayerResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetTagOperationResponse);
	}

	public async getTagAsync(requestData: MasterPlayerModels.GetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetTagOperationResponse);
	}

	public getTsCreate(requestData: MasterPlayerModels.GetTsCreateRequestData, onResponse: Action1<MasterPlayerResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetTsCreateOperationResponse);
	}

	public async getTsCreateAsync(requestData: MasterPlayerModels.GetTsCreateRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetTsCreateOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetTsCreateOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetTsCreateOperationResponse);
	}

	public getTsLastLogin(requestData: MasterPlayerModels.GetTsLastLoginRequestData, onResponse: Action1<MasterPlayerResponseModels.GetTsLastLoginOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetTsLastLoginOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetTsLastLoginOperationResponse);
	}

	public async getTsLastLoginAsync(requestData: MasterPlayerModels.GetTsLastLoginRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetTsLastLoginOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetTsLastLoginOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetTsLastLoginOperationResponse);
	}

	public linkAccount(requestData: MasterPlayerModels.LinkAccountRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.LinkAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkAccountOperationResponse);
	}

	public async linkAccountAsync(requestData: MasterPlayerModels.LinkAccountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkAccountOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.LinkAccountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkAccountOperationResponse);
	}

	public linkAndroidDeviceId(requestData: MasterPlayerModels.LinkAndroidDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkAndroidDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.LinkAndroidDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkAndroidDeviceIdOperationResponse);
	}

	public async linkAndroidDeviceIdAsync(requestData: MasterPlayerModels.LinkAndroidDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkAndroidDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.LinkAndroidDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkAndroidDeviceIdOperationResponse);
	}

	public linkApple(requestData: MasterPlayerModels.LinkAppleRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkAppleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.LinkAppleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkAppleOperationResponse);
	}

	public async linkAppleAsync(requestData: MasterPlayerModels.LinkAppleRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkAppleOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.LinkAppleOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkAppleOperationResponse);
	}

	public linkCustomDeviceId(requestData: MasterPlayerModels.LinkCustomDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkCustomDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.LinkCustomDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkCustomDeviceIdOperationResponse);
	}

	public async linkCustomDeviceIdAsync(requestData: MasterPlayerModels.LinkCustomDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkCustomDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.LinkCustomDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkCustomDeviceIdOperationResponse);
	}

	public linkCustomId(requestData: MasterPlayerModels.LinkCustomIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkCustomIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.LinkCustomIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkCustomIdOperationResponse);
	}

	public async linkCustomIdAsync(requestData: MasterPlayerModels.LinkCustomIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkCustomIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.LinkCustomIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkCustomIdOperationResponse);
	}

	public linkEditorDeviceId(requestData: MasterPlayerModels.LinkEditorDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkEditorDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.LinkEditorDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkEditorDeviceIdOperationResponse);
	}

	public async linkEditorDeviceIdAsync(requestData: MasterPlayerModels.LinkEditorDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkEditorDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.LinkEditorDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkEditorDeviceIdOperationResponse);
	}

	public linkFacebook(requestData: MasterPlayerModels.LinkFacebookRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkFacebookOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.LinkFacebookOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkFacebookOperationResponse);
	}

	public async linkFacebookAsync(requestData: MasterPlayerModels.LinkFacebookRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkFacebookOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.LinkFacebookOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkFacebookOperationResponse);
	}

	public linkGenericService(requestData: MasterPlayerModels.LinkGenericServiceRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkGenericServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.LinkGenericServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkGenericServiceOperationResponse);
	}

	public async linkGenericServiceAsync(requestData: MasterPlayerModels.LinkGenericServiceRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkGenericServiceOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.LinkGenericServiceOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkGenericServiceOperationResponse);
	}

	public linkGoogle(requestData: MasterPlayerModels.LinkGoogleRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkGoogleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.LinkGoogleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkGoogleOperationResponse);
	}

	public async linkGoogleAsync(requestData: MasterPlayerModels.LinkGoogleRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkGoogleOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.LinkGoogleOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkGoogleOperationResponse);
	}

	public linkGooglePlayGameService(requestData: MasterPlayerModels.LinkGooglePlayGameServiceRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkGooglePlayGameServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.LinkGooglePlayGameServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkGooglePlayGameServiceOperationResponse);
	}

	public async linkGooglePlayGameServiceAsync(requestData: MasterPlayerModels.LinkGooglePlayGameServiceRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkGooglePlayGameServiceOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.LinkGooglePlayGameServiceOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkGooglePlayGameServiceOperationResponse);
	}

	public linkGameCenter(requestData: MasterPlayerModels.LinkGameCenterRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkGameCenterOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.LinkGameCenterOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkGameCenterOperationResponse);
	}

	public async linkGameCenterAsync(requestData: MasterPlayerModels.LinkGameCenterRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkGameCenterOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.LinkGameCenterOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkGameCenterOperationResponse);
	}

	public linkiOSDeviceId(requestData: MasterPlayerModels.LinkiOSDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkiOSDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.LinkiOSDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkiOSDeviceIdOperationResponse);
	}

	public async linkiOSDeviceIdAsync(requestData: MasterPlayerModels.LinkiOSDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkiOSDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.LinkiOSDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkiOSDeviceIdOperationResponse);
	}

	public linkLinuxDeviceId(requestData: MasterPlayerModels.LinkLinuxDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkLinuxDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.LinkLinuxDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkLinuxDeviceIdOperationResponse);
	}

	public async linkLinuxDeviceIdAsync(requestData: MasterPlayerModels.LinkLinuxDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkLinuxDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.LinkLinuxDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkLinuxDeviceIdOperationResponse);
	}

	public linkMacOSDeviceId(requestData: MasterPlayerModels.LinkMacOSDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkMacOSDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.LinkMacOSDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkMacOSDeviceIdOperationResponse);
	}

	public async linkMacOSDeviceIdAsync(requestData: MasterPlayerModels.LinkMacOSDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkMacOSDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.LinkMacOSDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkMacOSDeviceIdOperationResponse);
	}

	public linkWindowsDeviceId(requestData: MasterPlayerModels.LinkWindowsDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkWindowsDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.LinkWindowsDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkWindowsDeviceIdOperationResponse);
	}

	public async linkWindowsDeviceIdAsync(requestData: MasterPlayerModels.LinkWindowsDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkWindowsDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.LinkWindowsDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkWindowsDeviceIdOperationResponse);
	}

	public linkWindowsPhoneDeviceId(requestData: MasterPlayerModels.LinkWindowsPhoneDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkWindowsPhoneDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.LinkWindowsPhoneDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkWindowsPhoneDeviceIdOperationResponse);
	}

	public async linkWindowsPhoneDeviceIdAsync(requestData: MasterPlayerModels.LinkWindowsPhoneDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkWindowsPhoneDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.LinkWindowsPhoneDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkWindowsPhoneDeviceIdOperationResponse);
	}

	public removeSegment(requestData: MasterPlayerModels.RemoveSegmentRequestData, onResponse: Action1<MasterPlayerResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.RemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.RemoveSegmentOperationResponse);
	}

	public async removeSegmentAsync(requestData: MasterPlayerModels.RemoveSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.RemoveSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.RemoveSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.RemoveSegmentOperationResponse);
	}

	public removeTag(requestData: MasterPlayerModels.RemoveTagRequestData, onResponse: Action1<MasterPlayerResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.RemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.RemoveTagOperationResponse);
	}

	public async removeTagAsync(requestData: MasterPlayerModels.RemoveTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.RemoveTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.RemoveTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.RemoveTagOperationResponse);
	}

	public resetAccountPassword(requestData: MasterPlayerModels.ResetAccountPasswordRequestData, onResponse: Action1<MasterPlayerResponseModels.ResetAccountPasswordOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ResetAccountPasswordOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.ResetAccountPasswordOperationResponse);
	}

	public async resetAccountPasswordAsync(requestData: MasterPlayerModels.ResetAccountPasswordRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.ResetAccountPasswordOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ResetAccountPasswordOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.ResetAccountPasswordOperationResponse);
	}

	public setAvatar(requestData: MasterPlayerModels.SetAvatarRequestData, onResponse: Action1<MasterPlayerResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.SetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetAvatarOperationResponse);
	}

	public async setAvatarAsync(requestData: MasterPlayerModels.SetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.SetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetAvatarOperationResponse);
	}

	public setCountryCode(requestData: MasterPlayerModels.SetCountryCodeRequestData, onResponse: Action1<MasterPlayerResponseModels.SetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.SetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetCountryCodeOperationResponse);
	}

	public async setCountryCodeAsync(requestData: MasterPlayerModels.SetCountryCodeRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetCountryCodeOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.SetCountryCodeOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetCountryCodeOperationResponse);
	}

	public setCustomData(requestData: MasterPlayerModels.SetCustomDataRequestData, onResponse: Action1<MasterPlayerResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.SetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetCustomDataOperationResponse);
	}

	public async setCustomDataAsync(requestData: MasterPlayerModels.SetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.SetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetCustomDataOperationResponse);
	}

	public setDisplayName(requestData: MasterPlayerModels.SetDisplayNameRequestData, onResponse: Action1<MasterPlayerResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.SetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetDisplayNameOperationResponse);
	}

	public async setDisplayNameAsync(requestData: MasterPlayerModels.SetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.SetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetDisplayNameOperationResponse);
	}

	public setEmail(requestData: MasterPlayerModels.SetEmailRequestData, onResponse: Action1<MasterPlayerResponseModels.SetEmailOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.SetEmailOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetEmailOperationResponse);
	}

	public async setEmailAsync(requestData: MasterPlayerModels.SetEmailRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetEmailOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.SetEmailOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetEmailOperationResponse);
	}

	public setPlayerBan(requestData: MasterPlayerModels.SetPlayerBanRequestData, onResponse: Action1<MasterPlayerResponseModels.SetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.SetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerBanOperationResponse);
	}

	public async setPlayerBanAsync(requestData: MasterPlayerModels.SetPlayerBanRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetPlayerBanOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.SetPlayerBanOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerBanOperationResponse);
	}

	public setPlayerCurrency(requestData: MasterPlayerModels.SetPlayerCurrencyRequestData, onResponse: Action1<MasterPlayerResponseModels.SetPlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.SetPlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerCurrencyOperationResponse);
	}

	public async setPlayerCurrencyAsync(requestData: MasterPlayerModels.SetPlayerCurrencyRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetPlayerCurrencyOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.SetPlayerCurrencyOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerCurrencyOperationResponse);
	}

	public setPlayerData(requestData: MasterPlayerModels.SetPlayerDataRequestData, onResponse: Action1<MasterPlayerResponseModels.SetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.SetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerDataOperationResponse);
	}

	public async setPlayerDataAsync(requestData: MasterPlayerModels.SetPlayerDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetPlayerDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.SetPlayerDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerDataOperationResponse);
	}

	public setPlayerStatistics(requestData: MasterPlayerModels.SetPlayerStatisticsRequestData, onResponse: Action1<MasterPlayerResponseModels.SetPlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.SetPlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerStatisticsOperationResponse);
	}

	public async setPlayerStatisticsAsync(requestData: MasterPlayerModels.SetPlayerStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetPlayerStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.SetPlayerStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerStatisticsOperationResponse);
	}

	public setTag(requestData: MasterPlayerModels.SetTagRequestData, onResponse: Action1<MasterPlayerResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.SetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetTagOperationResponse);
	}

	public async setTagAsync(requestData: MasterPlayerModels.SetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.SetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetTagOperationResponse);
	}

	public setTsLastLogin(requestData: MasterPlayerModels.SetTsLastLoginRequestData, onResponse: Action1<MasterPlayerResponseModels.SetTsLastLoginOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.SetTsLastLoginOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetTsLastLoginOperationResponse);
	}

	public async setTsLastLoginAsync(requestData: MasterPlayerModels.SetTsLastLoginRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetTsLastLoginOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.SetTsLastLoginOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetTsLastLoginOperationResponse);
	}

	public unlinkAccount(requestData: MasterPlayerModels.UnlinkAccountRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.UnlinkAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkAccountOperationResponse);
	}

	public async unlinkAccountAsync(requestData: MasterPlayerModels.UnlinkAccountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkAccountOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.UnlinkAccountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkAccountOperationResponse);
	}

	public unlinkAndroidDeviceId(requestData: MasterPlayerModels.UnlinkAndroidDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkAndroidDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.UnlinkAndroidDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkAndroidDeviceIdOperationResponse);
	}

	public async unlinkAndroidDeviceIdAsync(requestData: MasterPlayerModels.UnlinkAndroidDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkAndroidDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.UnlinkAndroidDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkAndroidDeviceIdOperationResponse);
	}

	public unlinkApple(requestData: MasterPlayerModels.UnlinkAppleRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkAppleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.UnlinkAppleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkAppleOperationResponse);
	}

	public async unlinkAppleAsync(requestData: MasterPlayerModels.UnlinkAppleRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkAppleOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.UnlinkAppleOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkAppleOperationResponse);
	}

	public unlinkCustomDeviceId(requestData: MasterPlayerModels.UnlinkCustomDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkCustomDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.UnlinkCustomDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkCustomDeviceIdOperationResponse);
	}

	public async unlinkCustomDeviceIdAsync(requestData: MasterPlayerModels.UnlinkCustomDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkCustomDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.UnlinkCustomDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkCustomDeviceIdOperationResponse);
	}

	public unlinkCustomId(requestData: MasterPlayerModels.UnlinkCustomIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkCustomIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.UnlinkCustomIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkCustomIdOperationResponse);
	}

	public async unlinkCustomIdAsync(requestData: MasterPlayerModels.UnlinkCustomIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkCustomIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.UnlinkCustomIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkCustomIdOperationResponse);
	}

	public unlinkEditorDeviceId(requestData: MasterPlayerModels.UnlinkEditorDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkEditorDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.UnlinkEditorDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkEditorDeviceIdOperationResponse);
	}

	public async unlinkEditorDeviceIdAsync(requestData: MasterPlayerModels.UnlinkEditorDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkEditorDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.UnlinkEditorDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkEditorDeviceIdOperationResponse);
	}

	public unlinkFacebook(requestData: MasterPlayerModels.UnlinkFacebookRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkFacebookOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.UnlinkFacebookOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkFacebookOperationResponse);
	}

	public async unlinkFacebookAsync(requestData: MasterPlayerModels.UnlinkFacebookRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkFacebookOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.UnlinkFacebookOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkFacebookOperationResponse);
	}

	public unlinkGenericService(requestData: MasterPlayerModels.UnlinkGenericServiceRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkGenericServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.UnlinkGenericServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkGenericServiceOperationResponse);
	}

	public async unlinkGenericServiceAsync(requestData: MasterPlayerModels.UnlinkGenericServiceRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkGenericServiceOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.UnlinkGenericServiceOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkGenericServiceOperationResponse);
	}

	public unlinkGoogle(requestData: MasterPlayerModels.UnlinkGoogleRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkGoogleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.UnlinkGoogleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkGoogleOperationResponse);
	}

	public async unlinkGoogleAsync(requestData: MasterPlayerModels.UnlinkGoogleRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkGoogleOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.UnlinkGoogleOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkGoogleOperationResponse);
	}

	public unlinkGooglePlayGameService(requestData: MasterPlayerModels.UnlinkGooglePlayGameServiceRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkGooglePlayGameServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.UnlinkGooglePlayGameServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkGooglePlayGameServiceOperationResponse);
	}

	public async unlinkGooglePlayGameServiceAsync(requestData: MasterPlayerModels.UnlinkGooglePlayGameServiceRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkGooglePlayGameServiceOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.UnlinkGooglePlayGameServiceOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkGooglePlayGameServiceOperationResponse);
	}

	public unlinkGameCenter(requestData: MasterPlayerModels.UnlinkGameCenterRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkGameCenterOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.UnlinkGameCenterOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkGameCenterOperationResponse);
	}

	public async unlinkGameCenterAsync(requestData: MasterPlayerModels.UnlinkGameCenterRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkGameCenterOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.UnlinkGameCenterOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkGameCenterOperationResponse);
	}

	public unlinkiOSDeviceId(requestData: MasterPlayerModels.UnlinkiOSDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkiOSDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.UnlinkiOSDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkiOSDeviceIdOperationResponse);
	}

	public async unlinkiOSDeviceIdAsync(requestData: MasterPlayerModels.UnlinkiOSDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkiOSDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.UnlinkiOSDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkiOSDeviceIdOperationResponse);
	}

	public unlinkLinuxDeviceId(requestData: MasterPlayerModels.UnlinkLinuxDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkLinuxDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.UnlinkLinuxDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkLinuxDeviceIdOperationResponse);
	}

	public async unlinkLinuxDeviceIdAsync(requestData: MasterPlayerModels.UnlinkLinuxDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkLinuxDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.UnlinkLinuxDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkLinuxDeviceIdOperationResponse);
	}

	public unlinkMacOSDeviceId(requestData: MasterPlayerModels.UnlinkMacOSDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkMacOSDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.UnlinkMacOSDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkMacOSDeviceIdOperationResponse);
	}

	public async unlinkMacOSDeviceIdAsync(requestData: MasterPlayerModels.UnlinkMacOSDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkMacOSDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.UnlinkMacOSDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkMacOSDeviceIdOperationResponse);
	}

	public unlinkWindowsDeviceId(requestData: MasterPlayerModels.UnlinkWindowsDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkWindowsDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.UnlinkWindowsDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkWindowsDeviceIdOperationResponse);
	}

	public async unlinkWindowsDeviceIdAsync(requestData: MasterPlayerModels.UnlinkWindowsDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkWindowsDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.UnlinkWindowsDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkWindowsDeviceIdOperationResponse);
	}

	public unlinkWindowsPhoneDeviceId(requestData: MasterPlayerModels.UnlinkWindowsPhoneDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkWindowsPhoneDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.UnlinkWindowsPhoneDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkWindowsPhoneDeviceIdOperationResponse);
	}

	public async unlinkWindowsPhoneDeviceIdAsync(requestData: MasterPlayerModels.UnlinkWindowsPhoneDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkWindowsPhoneDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.UnlinkWindowsPhoneDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkWindowsPhoneDeviceIdOperationResponse);
	}

	public getCurrencyLeaderboard(requestData: MasterPlayerModels.GetCurrencyLeaderboardRequestData, onResponse: Action1<MasterPlayerResponseModels.GetCurrencyLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetCurrencyLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCurrencyLeaderboardOperationResponse);
	}

	public async getCurrencyLeaderboardAsync(requestData: MasterPlayerModels.GetCurrencyLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetCurrencyLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetCurrencyLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCurrencyLeaderboardOperationResponse);
	}

	public getCreateLeaderboard(requestData: MasterPlayerModels.GetCreateLeaderboardRequestData, onResponse: Action1<MasterPlayerResponseModels.GetCreateLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetCreateLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCreateLeaderboardOperationResponse);
	}

	public async getCreateLeaderboardAsync(requestData: MasterPlayerModels.GetCreateLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetCreateLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetCreateLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCreateLeaderboardOperationResponse);
	}

	public getLastLoginLeaderboard(requestData: MasterPlayerModels.GetLastLoginLeaderboardRequestData, onResponse: Action1<MasterPlayerResponseModels.GetLastLoginLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetLastLoginLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetLastLoginLeaderboardOperationResponse);
	}

	public async getLastLoginLeaderboardAsync(requestData: MasterPlayerModels.GetLastLoginLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetLastLoginLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetLastLoginLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetLastLoginLeaderboardOperationResponse);
	}

	public getStatisticsLog(requestData: MasterPlayerModels.GetStatisticsLogRequestData, onResponse: Action1<MasterPlayerResponseModels.GetStatisticsLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetStatisticsLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetStatisticsLogOperationResponse);
	}

	public async getStatisticsLogAsync(requestData: MasterPlayerModels.GetStatisticsLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetStatisticsLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetStatisticsLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetStatisticsLogOperationResponse);
	}

	public getCurrencyLog(requestData: MasterPlayerModels.GetCurrencyLogRequestData, onResponse: Action1<MasterPlayerResponseModels.GetCurrencyLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetCurrencyLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCurrencyLogOperationResponse);
	}

	public async getCurrencyLogAsync(requestData: MasterPlayerModels.GetCurrencyLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetCurrencyLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetCurrencyLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCurrencyLogOperationResponse);
	}

	public sendSocketOperationEvent(requestData: MasterPlayerModels.SendSocketOperationEventRequestData, onResponse: Action1<MasterPlayerResponseModels.SendSocketOperationEventOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.SendSocketOperationEventOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SendSocketOperationEventOperationResponse);
	}

	public async sendSocketOperationEventAsync(requestData: MasterPlayerModels.SendSocketOperationEventRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SendSocketOperationEventOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.SendSocketOperationEventOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SendSocketOperationEventOperationResponse);
	}

	public sendEmail(requestData: MasterPlayerModels.SendEmailRequestData, onResponse: Action1<MasterPlayerResponseModels.SendEmailOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.SendEmailOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SendEmailOperationResponse);
	}

	public async sendEmailAsync(requestData: MasterPlayerModels.SendEmailRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SendEmailOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.SendEmailOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SendEmailOperationResponse);
	}

	public addPushNotification(requestData: MasterPlayerModels.AddPushNotificationRequestData, onResponse: Action1<MasterPlayerResponseModels.AddPushNotificationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AddPushNotificationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.AddPushNotificationOperationResponse);
	}

	public async addPushNotificationAsync(requestData: MasterPlayerModels.AddPushNotificationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.AddPushNotificationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AddPushNotificationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.AddPushNotificationOperationResponse);
	}

	public removePushNotification(requestData: MasterPlayerModels.RemovePushNotificationRequestData, onResponse: Action1<MasterPlayerResponseModels.RemovePushNotificationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.RemovePushNotificationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.RemovePushNotificationOperationResponse);
	}

	public async removePushNotificationAsync(requestData: MasterPlayerModels.RemovePushNotificationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.RemovePushNotificationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.RemovePushNotificationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.RemovePushNotificationOperationResponse);
	}

	public getPushNotification(requestData: MasterPlayerModels.GetPushNotificationRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPushNotificationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.GetPushNotificationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPushNotificationOperationResponse);
	}

	public async getPushNotificationAsync(requestData: MasterPlayerModels.GetPushNotificationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPushNotificationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.GetPushNotificationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPushNotificationOperationResponse);
	}

	public sendPushNotification(requestData: MasterPlayerModels.SendPushNotificationRequestData, onResponse: Action1<MasterPlayerResponseModels.SendPushNotificationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.SendPushNotificationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SendPushNotificationOperationResponse);
	}

	public async sendPushNotificationAsync(requestData: MasterPlayerModels.SendPushNotificationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SendPushNotificationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.SendPushNotificationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SendPushNotificationOperationResponse);
	}

}

export class ServerMasterPlayerApi {
	public addSegment(requestData: MasterPlayerModels.ServerAddSegmentRequestData, onResponse: Action1<MasterPlayerResponseModels.AddSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerAddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.AddSegmentOperationResponse);
	}

	public async addSegmentAsync(requestData: MasterPlayerModels.ServerAddSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.AddSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerAddSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.AddSegmentOperationResponse);
	}

	public getAvatar(requestData: MasterPlayerModels.ServerGetAvatarRequestData, onResponse: Action1<MasterPlayerResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetAvatarOperationResponse);
	}

	public async getAvatarAsync(requestData: MasterPlayerModels.ServerGetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetAvatarOperationResponse);
	}

	public getCountryCode(requestData: MasterPlayerModels.ServerGetCountryCodeRequestData, onResponse: Action1<MasterPlayerResponseModels.GetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCountryCodeOperationResponse);
	}

	public async getCountryCodeAsync(requestData: MasterPlayerModels.ServerGetCountryCodeRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetCountryCodeOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetCountryCodeOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCountryCodeOperationResponse);
	}

	public getCustomData(requestData: MasterPlayerModels.ServerGetCustomDataRequestData, onResponse: Action1<MasterPlayerResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCustomDataOperationResponse);
	}

	public async getCustomDataAsync(requestData: MasterPlayerModels.ServerGetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCustomDataOperationResponse);
	}

	public getDisplayName(requestData: MasterPlayerModels.ServerGetDisplayNameRequestData, onResponse: Action1<MasterPlayerResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetDisplayNameOperationResponse);
	}

	public async getDisplayNameAsync(requestData: MasterPlayerModels.ServerGetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetDisplayNameOperationResponse);
	}

	public getEmail(requestData: MasterPlayerModels.ServerGetEmailRequestData, onResponse: Action1<MasterPlayerResponseModels.GetEmailOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetEmailOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetEmailOperationResponse);
	}

	public async getEmailAsync(requestData: MasterPlayerModels.ServerGetEmailRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetEmailOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetEmailOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetEmailOperationResponse);
	}

	public getExternal(requestData: MasterPlayerModels.ServerGetExternalRequestData, onResponse: Action1<MasterPlayerResponseModels.GetExternalOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetExternalOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetExternalOperationResponse);
	}

	public async getExternalAsync(requestData: MasterPlayerModels.ServerGetExternalRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetExternalOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetExternalOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetExternalOperationResponse);
	}

	public getIpAddressCreate(requestData: MasterPlayerModels.ServerGetIpAddressCreateRequestData, onResponse: Action1<MasterPlayerResponseModels.GetIpAddressCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetIpAddressCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetIpAddressCreateOperationResponse);
	}

	public async getIpAddressCreateAsync(requestData: MasterPlayerModels.ServerGetIpAddressCreateRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetIpAddressCreateOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetIpAddressCreateOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetIpAddressCreateOperationResponse);
	}

	public getPlayerBan(requestData: MasterPlayerModels.ServerGetPlayerBanRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerBanOperationResponse);
	}

	public async getPlayerBanAsync(requestData: MasterPlayerModels.ServerGetPlayerBanRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayerBanOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetPlayerBanOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerBanOperationResponse);
	}

	public getPlayerCurrency(requestData: MasterPlayerModels.ServerGetPlayerCurrencyRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetPlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerCurrencyOperationResponse);
	}

	public async getPlayerCurrencyAsync(requestData: MasterPlayerModels.ServerGetPlayerCurrencyRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayerCurrencyOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetPlayerCurrencyOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerCurrencyOperationResponse);
	}

	public getPlayerData(requestData: MasterPlayerModels.ServerGetPlayerDataRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerDataOperationResponse);
	}

	public async getPlayerDataAsync(requestData: MasterPlayerModels.ServerGetPlayerDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayerDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetPlayerDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerDataOperationResponse);
	}

	public getPlayerInformation(requestData: MasterPlayerModels.ServerGetPlayerInformationRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayerInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetPlayerInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerInformationOperationResponse);
	}

	public async getPlayerInformationAsync(requestData: MasterPlayerModels.ServerGetPlayerInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayerInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetPlayerInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerInformationOperationResponse);
	}

	public getPlayerStatistics(requestData: MasterPlayerModels.ServerGetPlayerStatisticsRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetPlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerStatisticsOperationResponse);
	}

	public async getPlayerStatisticsAsync(requestData: MasterPlayerModels.ServerGetPlayerStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayerStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetPlayerStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerStatisticsOperationResponse);
	}

	public getPlayersWithApple(requestData: MasterPlayerModels.ServerGetPlayersWithAppleRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithAppleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetPlayersWithAppleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithAppleOperationResponse);
	}

	public async getPlayersWithAppleAsync(requestData: MasterPlayerModels.ServerGetPlayersWithAppleRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayersWithAppleOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetPlayersWithAppleOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithAppleOperationResponse);
	}

	public getPlayersWithDisplayName(requestData: MasterPlayerModels.ServerGetPlayersWithDisplayNameRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetPlayersWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse);
	}

	public async getPlayersWithDisplayNameAsync(requestData: MasterPlayerModels.ServerGetPlayersWithDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetPlayersWithDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse);
	}

	public getPlayersWithFacebook(requestData: MasterPlayerModels.ServerGetPlayersWithFacebookRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithFacebookOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetPlayersWithFacebookOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithFacebookOperationResponse);
	}

	public async getPlayersWithFacebookAsync(requestData: MasterPlayerModels.ServerGetPlayersWithFacebookRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayersWithFacebookOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetPlayersWithFacebookOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithFacebookOperationResponse);
	}

	public getPlayersWithGenericService(requestData: MasterPlayerModels.ServerGetPlayersWithGenericServiceRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithGenericServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetPlayersWithGenericServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithGenericServiceOperationResponse);
	}

	public async getPlayersWithGenericServiceAsync(requestData: MasterPlayerModels.ServerGetPlayersWithGenericServiceRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayersWithGenericServiceOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetPlayersWithGenericServiceOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithGenericServiceOperationResponse);
	}

	public getPlayersWithGoogle(requestData: MasterPlayerModels.ServerGetPlayersWithGoogleRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithGoogleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetPlayersWithGoogleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithGoogleOperationResponse);
	}

	public async getPlayersWithGoogleAsync(requestData: MasterPlayerModels.ServerGetPlayersWithGoogleRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayersWithGoogleOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetPlayersWithGoogleOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithGoogleOperationResponse);
	}

	public getPlayersWithGooglePlayGameService(requestData: MasterPlayerModels.ServerGetPlayersWithGooglePlayGameServiceRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithGooglePlayGameServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetPlayersWithGooglePlayGameServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithGooglePlayGameServiceOperationResponse);
	}

	public async getPlayersWithGooglePlayGameServiceAsync(requestData: MasterPlayerModels.ServerGetPlayersWithGooglePlayGameServiceRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayersWithGooglePlayGameServiceOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetPlayersWithGooglePlayGameServiceOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithGooglePlayGameServiceOperationResponse);
	}

	public getPlayersWithGameCenter(requestData: MasterPlayerModels.ServerGetPlayersWithGameCenterRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithGameCenterOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetPlayersWithGameCenterOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithGameCenterOperationResponse);
	}

	public async getPlayersWithGameCenterAsync(requestData: MasterPlayerModels.ServerGetPlayersWithGameCenterRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayersWithGameCenterOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetPlayersWithGameCenterOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithGameCenterOperationResponse);
	}

	public getPlayersWithSegment(requestData: MasterPlayerModels.ServerGetPlayersWithSegmentRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetPlayersWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithSegmentOperationResponse);
	}

	public async getPlayersWithSegmentAsync(requestData: MasterPlayerModels.ServerGetPlayersWithSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayersWithSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetPlayersWithSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithSegmentOperationResponse);
	}

	public getPlayersWithTag(requestData: MasterPlayerModels.ServerGetPlayersWithTagRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetPlayersWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithTagOperationResponse);
	}

	public async getPlayersWithTagAsync(requestData: MasterPlayerModels.ServerGetPlayersWithTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayersWithTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetPlayersWithTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithTagOperationResponse);
	}

	public getSegment(requestData: MasterPlayerModels.ServerGetSegmentRequestData, onResponse: Action1<MasterPlayerResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetSegmentOperationResponse);
	}

	public async getSegmentAsync(requestData: MasterPlayerModels.ServerGetSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetSegmentOperationResponse);
	}

	public getStatisticsLeaderboardAroundPlayer(requestData: MasterPlayerModels.ServerGetStatisticsLeaderboardAroundPlayerRequestData, onResponse: Action1<MasterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	public async getStatisticsLeaderboardAroundPlayerAsync(requestData: MasterPlayerModels.ServerGetStatisticsLeaderboardAroundPlayerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	public getStatisticsLeaderboard(requestData: MasterPlayerModels.ServerGetStatisticsLeaderboardRequestData, onResponse: Action1<MasterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public async getStatisticsLeaderboardAsync(requestData: MasterPlayerModels.ServerGetStatisticsLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetStatisticsLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public getTag(requestData: MasterPlayerModels.ServerGetTagRequestData, onResponse: Action1<MasterPlayerResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetTagOperationResponse);
	}

	public async getTagAsync(requestData: MasterPlayerModels.ServerGetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetTagOperationResponse);
	}

	public getTsCreate(requestData: MasterPlayerModels.ServerGetTsCreateRequestData, onResponse: Action1<MasterPlayerResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetTsCreateOperationResponse);
	}

	public async getTsCreateAsync(requestData: MasterPlayerModels.ServerGetTsCreateRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetTsCreateOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetTsCreateOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetTsCreateOperationResponse);
	}

	public getTsLastLogin(requestData: MasterPlayerModels.ServerGetTsLastLoginRequestData, onResponse: Action1<MasterPlayerResponseModels.GetTsLastLoginOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetTsLastLoginOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetTsLastLoginOperationResponse);
	}

	public async getTsLastLoginAsync(requestData: MasterPlayerModels.ServerGetTsLastLoginRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetTsLastLoginOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetTsLastLoginOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetTsLastLoginOperationResponse);
	}

	public linkAccount(requestData: MasterPlayerModels.ServerLinkAccountRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerLinkAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkAccountOperationResponse);
	}

	public async linkAccountAsync(requestData: MasterPlayerModels.ServerLinkAccountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkAccountOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerLinkAccountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkAccountOperationResponse);
	}

	public linkAndroidDeviceId(requestData: MasterPlayerModels.ServerLinkAndroidDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkAndroidDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerLinkAndroidDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkAndroidDeviceIdOperationResponse);
	}

	public async linkAndroidDeviceIdAsync(requestData: MasterPlayerModels.ServerLinkAndroidDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkAndroidDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerLinkAndroidDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkAndroidDeviceIdOperationResponse);
	}

	public linkApple(requestData: MasterPlayerModels.ServerLinkAppleRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkAppleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerLinkAppleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkAppleOperationResponse);
	}

	public async linkAppleAsync(requestData: MasterPlayerModels.ServerLinkAppleRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkAppleOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerLinkAppleOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkAppleOperationResponse);
	}

	public linkCustomDeviceId(requestData: MasterPlayerModels.ServerLinkCustomDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkCustomDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerLinkCustomDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkCustomDeviceIdOperationResponse);
	}

	public async linkCustomDeviceIdAsync(requestData: MasterPlayerModels.ServerLinkCustomDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkCustomDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerLinkCustomDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkCustomDeviceIdOperationResponse);
	}

	public linkCustomId(requestData: MasterPlayerModels.ServerLinkCustomIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkCustomIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerLinkCustomIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkCustomIdOperationResponse);
	}

	public async linkCustomIdAsync(requestData: MasterPlayerModels.ServerLinkCustomIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkCustomIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerLinkCustomIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkCustomIdOperationResponse);
	}

	public linkEditorDeviceId(requestData: MasterPlayerModels.ServerLinkEditorDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkEditorDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerLinkEditorDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkEditorDeviceIdOperationResponse);
	}

	public async linkEditorDeviceIdAsync(requestData: MasterPlayerModels.ServerLinkEditorDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkEditorDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerLinkEditorDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkEditorDeviceIdOperationResponse);
	}

	public linkFacebook(requestData: MasterPlayerModels.ServerLinkFacebookRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkFacebookOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerLinkFacebookOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkFacebookOperationResponse);
	}

	public async linkFacebookAsync(requestData: MasterPlayerModels.ServerLinkFacebookRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkFacebookOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerLinkFacebookOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkFacebookOperationResponse);
	}

	public linkGenericService(requestData: MasterPlayerModels.ServerLinkGenericServiceRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkGenericServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerLinkGenericServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkGenericServiceOperationResponse);
	}

	public async linkGenericServiceAsync(requestData: MasterPlayerModels.ServerLinkGenericServiceRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkGenericServiceOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerLinkGenericServiceOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkGenericServiceOperationResponse);
	}

	public linkGoogle(requestData: MasterPlayerModels.ServerLinkGoogleRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkGoogleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerLinkGoogleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkGoogleOperationResponse);
	}

	public async linkGoogleAsync(requestData: MasterPlayerModels.ServerLinkGoogleRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkGoogleOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerLinkGoogleOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkGoogleOperationResponse);
	}

	public linkGooglePlayGameService(requestData: MasterPlayerModels.ServerLinkGooglePlayGameServiceRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkGooglePlayGameServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerLinkGooglePlayGameServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkGooglePlayGameServiceOperationResponse);
	}

	public async linkGooglePlayGameServiceAsync(requestData: MasterPlayerModels.ServerLinkGooglePlayGameServiceRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkGooglePlayGameServiceOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerLinkGooglePlayGameServiceOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkGooglePlayGameServiceOperationResponse);
	}

	public linkGameCenter(requestData: MasterPlayerModels.ServerLinkGameCenterRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkGameCenterOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerLinkGameCenterOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkGameCenterOperationResponse);
	}

	public async linkGameCenterAsync(requestData: MasterPlayerModels.ServerLinkGameCenterRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkGameCenterOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerLinkGameCenterOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkGameCenterOperationResponse);
	}

	public linkiOSDeviceId(requestData: MasterPlayerModels.ServerLinkiOSDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkiOSDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerLinkiOSDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkiOSDeviceIdOperationResponse);
	}

	public async linkiOSDeviceIdAsync(requestData: MasterPlayerModels.ServerLinkiOSDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkiOSDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerLinkiOSDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkiOSDeviceIdOperationResponse);
	}

	public linkLinuxDeviceId(requestData: MasterPlayerModels.ServerLinkLinuxDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkLinuxDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerLinkLinuxDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkLinuxDeviceIdOperationResponse);
	}

	public async linkLinuxDeviceIdAsync(requestData: MasterPlayerModels.ServerLinkLinuxDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkLinuxDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerLinkLinuxDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkLinuxDeviceIdOperationResponse);
	}

	public linkMacOSDeviceId(requestData: MasterPlayerModels.ServerLinkMacOSDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkMacOSDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerLinkMacOSDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkMacOSDeviceIdOperationResponse);
	}

	public async linkMacOSDeviceIdAsync(requestData: MasterPlayerModels.ServerLinkMacOSDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkMacOSDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerLinkMacOSDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkMacOSDeviceIdOperationResponse);
	}

	public linkWindowsDeviceId(requestData: MasterPlayerModels.ServerLinkWindowsDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkWindowsDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerLinkWindowsDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkWindowsDeviceIdOperationResponse);
	}

	public async linkWindowsDeviceIdAsync(requestData: MasterPlayerModels.ServerLinkWindowsDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkWindowsDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerLinkWindowsDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkWindowsDeviceIdOperationResponse);
	}

	public linkWindowsPhoneDeviceId(requestData: MasterPlayerModels.ServerLinkWindowsPhoneDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkWindowsPhoneDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerLinkWindowsPhoneDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkWindowsPhoneDeviceIdOperationResponse);
	}

	public async linkWindowsPhoneDeviceIdAsync(requestData: MasterPlayerModels.ServerLinkWindowsPhoneDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkWindowsPhoneDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerLinkWindowsPhoneDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkWindowsPhoneDeviceIdOperationResponse);
	}

	public removeSegment(requestData: MasterPlayerModels.ServerRemoveSegmentRequestData, onResponse: Action1<MasterPlayerResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerRemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.RemoveSegmentOperationResponse);
	}

	public async removeSegmentAsync(requestData: MasterPlayerModels.ServerRemoveSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.RemoveSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerRemoveSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.RemoveSegmentOperationResponse);
	}

	public removeTag(requestData: MasterPlayerModels.ServerRemoveTagRequestData, onResponse: Action1<MasterPlayerResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerRemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.RemoveTagOperationResponse);
	}

	public async removeTagAsync(requestData: MasterPlayerModels.ServerRemoveTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.RemoveTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerRemoveTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.RemoveTagOperationResponse);
	}

	public resetAccountPassword(requestData: MasterPlayerModels.ServerResetAccountPasswordRequestData, onResponse: Action1<MasterPlayerResponseModels.ResetAccountPasswordOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerResetAccountPasswordOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.ResetAccountPasswordOperationResponse);
	}

	public async resetAccountPasswordAsync(requestData: MasterPlayerModels.ServerResetAccountPasswordRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.ResetAccountPasswordOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerResetAccountPasswordOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.ResetAccountPasswordOperationResponse);
	}

	public setAvatar(requestData: MasterPlayerModels.ServerSetAvatarRequestData, onResponse: Action1<MasterPlayerResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerSetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetAvatarOperationResponse);
	}

	public async setAvatarAsync(requestData: MasterPlayerModels.ServerSetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerSetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetAvatarOperationResponse);
	}

	public setCountryCode(requestData: MasterPlayerModels.ServerSetCountryCodeRequestData, onResponse: Action1<MasterPlayerResponseModels.SetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerSetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetCountryCodeOperationResponse);
	}

	public async setCountryCodeAsync(requestData: MasterPlayerModels.ServerSetCountryCodeRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetCountryCodeOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerSetCountryCodeOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetCountryCodeOperationResponse);
	}

	public setCustomData(requestData: MasterPlayerModels.ServerSetCustomDataRequestData, onResponse: Action1<MasterPlayerResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerSetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetCustomDataOperationResponse);
	}

	public async setCustomDataAsync(requestData: MasterPlayerModels.ServerSetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerSetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetCustomDataOperationResponse);
	}

	public setDisplayName(requestData: MasterPlayerModels.ServerSetDisplayNameRequestData, onResponse: Action1<MasterPlayerResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerSetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetDisplayNameOperationResponse);
	}

	public async setDisplayNameAsync(requestData: MasterPlayerModels.ServerSetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerSetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetDisplayNameOperationResponse);
	}

	public setEmail(requestData: MasterPlayerModels.ServerSetEmailRequestData, onResponse: Action1<MasterPlayerResponseModels.SetEmailOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerSetEmailOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetEmailOperationResponse);
	}

	public async setEmailAsync(requestData: MasterPlayerModels.ServerSetEmailRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetEmailOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerSetEmailOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetEmailOperationResponse);
	}

	public setPlayerBan(requestData: MasterPlayerModels.ServerSetPlayerBanRequestData, onResponse: Action1<MasterPlayerResponseModels.SetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerSetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerBanOperationResponse);
	}

	public async setPlayerBanAsync(requestData: MasterPlayerModels.ServerSetPlayerBanRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetPlayerBanOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerSetPlayerBanOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerBanOperationResponse);
	}

	public setPlayerCurrency(requestData: MasterPlayerModels.ServerSetPlayerCurrencyRequestData, onResponse: Action1<MasterPlayerResponseModels.SetPlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerSetPlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerCurrencyOperationResponse);
	}

	public async setPlayerCurrencyAsync(requestData: MasterPlayerModels.ServerSetPlayerCurrencyRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetPlayerCurrencyOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerSetPlayerCurrencyOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerCurrencyOperationResponse);
	}

	public setPlayerData(requestData: MasterPlayerModels.ServerSetPlayerDataRequestData, onResponse: Action1<MasterPlayerResponseModels.SetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerSetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerDataOperationResponse);
	}

	public async setPlayerDataAsync(requestData: MasterPlayerModels.ServerSetPlayerDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetPlayerDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerSetPlayerDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerDataOperationResponse);
	}

	public setPlayerStatistics(requestData: MasterPlayerModels.ServerSetPlayerStatisticsRequestData, onResponse: Action1<MasterPlayerResponseModels.SetPlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerSetPlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerStatisticsOperationResponse);
	}

	public async setPlayerStatisticsAsync(requestData: MasterPlayerModels.ServerSetPlayerStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetPlayerStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerSetPlayerStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerStatisticsOperationResponse);
	}

	public setTag(requestData: MasterPlayerModels.ServerSetTagRequestData, onResponse: Action1<MasterPlayerResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerSetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetTagOperationResponse);
	}

	public async setTagAsync(requestData: MasterPlayerModels.ServerSetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerSetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetTagOperationResponse);
	}

	public setTsLastLogin(requestData: MasterPlayerModels.ServerSetTsLastLoginRequestData, onResponse: Action1<MasterPlayerResponseModels.SetTsLastLoginOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerSetTsLastLoginOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetTsLastLoginOperationResponse);
	}

	public async setTsLastLoginAsync(requestData: MasterPlayerModels.ServerSetTsLastLoginRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetTsLastLoginOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerSetTsLastLoginOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetTsLastLoginOperationResponse);
	}

	public unlinkAccount(requestData: MasterPlayerModels.ServerUnlinkAccountRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerUnlinkAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkAccountOperationResponse);
	}

	public async unlinkAccountAsync(requestData: MasterPlayerModels.ServerUnlinkAccountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkAccountOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerUnlinkAccountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkAccountOperationResponse);
	}

	public unlinkAndroidDeviceId(requestData: MasterPlayerModels.ServerUnlinkAndroidDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkAndroidDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerUnlinkAndroidDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkAndroidDeviceIdOperationResponse);
	}

	public async unlinkAndroidDeviceIdAsync(requestData: MasterPlayerModels.ServerUnlinkAndroidDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkAndroidDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerUnlinkAndroidDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkAndroidDeviceIdOperationResponse);
	}

	public unlinkApple(requestData: MasterPlayerModels.ServerUnlinkAppleRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkAppleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerUnlinkAppleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkAppleOperationResponse);
	}

	public async unlinkAppleAsync(requestData: MasterPlayerModels.ServerUnlinkAppleRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkAppleOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerUnlinkAppleOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkAppleOperationResponse);
	}

	public unlinkCustomDeviceId(requestData: MasterPlayerModels.ServerUnlinkCustomDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkCustomDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerUnlinkCustomDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkCustomDeviceIdOperationResponse);
	}

	public async unlinkCustomDeviceIdAsync(requestData: MasterPlayerModels.ServerUnlinkCustomDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkCustomDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerUnlinkCustomDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkCustomDeviceIdOperationResponse);
	}

	public unlinkCustomId(requestData: MasterPlayerModels.ServerUnlinkCustomIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkCustomIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerUnlinkCustomIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkCustomIdOperationResponse);
	}

	public async unlinkCustomIdAsync(requestData: MasterPlayerModels.ServerUnlinkCustomIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkCustomIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerUnlinkCustomIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkCustomIdOperationResponse);
	}

	public unlinkEditorDeviceId(requestData: MasterPlayerModels.ServerUnlinkEditorDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkEditorDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerUnlinkEditorDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkEditorDeviceIdOperationResponse);
	}

	public async unlinkEditorDeviceIdAsync(requestData: MasterPlayerModels.ServerUnlinkEditorDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkEditorDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerUnlinkEditorDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkEditorDeviceIdOperationResponse);
	}

	public unlinkFacebook(requestData: MasterPlayerModels.ServerUnlinkFacebookRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkFacebookOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerUnlinkFacebookOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkFacebookOperationResponse);
	}

	public async unlinkFacebookAsync(requestData: MasterPlayerModels.ServerUnlinkFacebookRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkFacebookOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerUnlinkFacebookOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkFacebookOperationResponse);
	}

	public unlinkGenericService(requestData: MasterPlayerModels.ServerUnlinkGenericServiceRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkGenericServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerUnlinkGenericServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkGenericServiceOperationResponse);
	}

	public async unlinkGenericServiceAsync(requestData: MasterPlayerModels.ServerUnlinkGenericServiceRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkGenericServiceOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerUnlinkGenericServiceOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkGenericServiceOperationResponse);
	}

	public unlinkGoogle(requestData: MasterPlayerModels.ServerUnlinkGoogleRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkGoogleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerUnlinkGoogleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkGoogleOperationResponse);
	}

	public async unlinkGoogleAsync(requestData: MasterPlayerModels.ServerUnlinkGoogleRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkGoogleOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerUnlinkGoogleOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkGoogleOperationResponse);
	}

	public unlinkGooglePlayGameService(requestData: MasterPlayerModels.ServerUnlinkGooglePlayGameServiceRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkGooglePlayGameServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerUnlinkGooglePlayGameServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkGooglePlayGameServiceOperationResponse);
	}

	public async unlinkGooglePlayGameServiceAsync(requestData: MasterPlayerModels.ServerUnlinkGooglePlayGameServiceRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkGooglePlayGameServiceOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerUnlinkGooglePlayGameServiceOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkGooglePlayGameServiceOperationResponse);
	}

	public unlinkGameCenter(requestData: MasterPlayerModels.ServerUnlinkGameCenterRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkGameCenterOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerUnlinkGameCenterOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkGameCenterOperationResponse);
	}

	public async unlinkGameCenterAsync(requestData: MasterPlayerModels.ServerUnlinkGameCenterRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkGameCenterOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerUnlinkGameCenterOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkGameCenterOperationResponse);
	}

	public unlinkiOSDeviceId(requestData: MasterPlayerModels.ServerUnlinkiOSDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkiOSDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerUnlinkiOSDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkiOSDeviceIdOperationResponse);
	}

	public async unlinkiOSDeviceIdAsync(requestData: MasterPlayerModels.ServerUnlinkiOSDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkiOSDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerUnlinkiOSDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkiOSDeviceIdOperationResponse);
	}

	public unlinkLinuxDeviceId(requestData: MasterPlayerModels.ServerUnlinkLinuxDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkLinuxDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerUnlinkLinuxDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkLinuxDeviceIdOperationResponse);
	}

	public async unlinkLinuxDeviceIdAsync(requestData: MasterPlayerModels.ServerUnlinkLinuxDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkLinuxDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerUnlinkLinuxDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkLinuxDeviceIdOperationResponse);
	}

	public unlinkMacOSDeviceId(requestData: MasterPlayerModels.ServerUnlinkMacOSDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkMacOSDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerUnlinkMacOSDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkMacOSDeviceIdOperationResponse);
	}

	public async unlinkMacOSDeviceIdAsync(requestData: MasterPlayerModels.ServerUnlinkMacOSDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkMacOSDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerUnlinkMacOSDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkMacOSDeviceIdOperationResponse);
	}

	public unlinkWindowsDeviceId(requestData: MasterPlayerModels.ServerUnlinkWindowsDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkWindowsDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerUnlinkWindowsDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkWindowsDeviceIdOperationResponse);
	}

	public async unlinkWindowsDeviceIdAsync(requestData: MasterPlayerModels.ServerUnlinkWindowsDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkWindowsDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerUnlinkWindowsDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkWindowsDeviceIdOperationResponse);
	}

	public unlinkWindowsPhoneDeviceId(requestData: MasterPlayerModels.ServerUnlinkWindowsPhoneDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkWindowsPhoneDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerUnlinkWindowsPhoneDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkWindowsPhoneDeviceIdOperationResponse);
	}

	public async unlinkWindowsPhoneDeviceIdAsync(requestData: MasterPlayerModels.ServerUnlinkWindowsPhoneDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkWindowsPhoneDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerUnlinkWindowsPhoneDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkWindowsPhoneDeviceIdOperationResponse);
	}

	public getCurrencyLeaderboard(requestData: MasterPlayerModels.ServerGetCurrencyLeaderboardRequestData, onResponse: Action1<MasterPlayerResponseModels.GetCurrencyLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetCurrencyLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCurrencyLeaderboardOperationResponse);
	}

	public async getCurrencyLeaderboardAsync(requestData: MasterPlayerModels.ServerGetCurrencyLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetCurrencyLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetCurrencyLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCurrencyLeaderboardOperationResponse);
	}

	public getCreateLeaderboard(requestData: MasterPlayerModels.ServerGetCreateLeaderboardRequestData, onResponse: Action1<MasterPlayerResponseModels.GetCreateLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetCreateLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCreateLeaderboardOperationResponse);
	}

	public async getCreateLeaderboardAsync(requestData: MasterPlayerModels.ServerGetCreateLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetCreateLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetCreateLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCreateLeaderboardOperationResponse);
	}

	public getLastLoginLeaderboard(requestData: MasterPlayerModels.ServerGetLastLoginLeaderboardRequestData, onResponse: Action1<MasterPlayerResponseModels.GetLastLoginLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetLastLoginLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetLastLoginLeaderboardOperationResponse);
	}

	public async getLastLoginLeaderboardAsync(requestData: MasterPlayerModels.ServerGetLastLoginLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetLastLoginLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetLastLoginLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetLastLoginLeaderboardOperationResponse);
	}

	public getStatisticsLog(requestData: MasterPlayerModels.ServerGetStatisticsLogRequestData, onResponse: Action1<MasterPlayerResponseModels.GetStatisticsLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetStatisticsLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetStatisticsLogOperationResponse);
	}

	public async getStatisticsLogAsync(requestData: MasterPlayerModels.ServerGetStatisticsLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetStatisticsLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetStatisticsLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetStatisticsLogOperationResponse);
	}

	public getCurrencyLog(requestData: MasterPlayerModels.ServerGetCurrencyLogRequestData, onResponse: Action1<MasterPlayerResponseModels.GetCurrencyLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetCurrencyLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCurrencyLogOperationResponse);
	}

	public async getCurrencyLogAsync(requestData: MasterPlayerModels.ServerGetCurrencyLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetCurrencyLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetCurrencyLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCurrencyLogOperationResponse);
	}

	public sendSocketOperationEvent(requestData: MasterPlayerModels.ServerSendSocketOperationEventRequestData, onResponse: Action1<MasterPlayerResponseModels.SendSocketOperationEventOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerSendSocketOperationEventOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SendSocketOperationEventOperationResponse);
	}

	public async sendSocketOperationEventAsync(requestData: MasterPlayerModels.ServerSendSocketOperationEventRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SendSocketOperationEventOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerSendSocketOperationEventOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SendSocketOperationEventOperationResponse);
	}

	public sendEmail(requestData: MasterPlayerModels.ServerSendEmailRequestData, onResponse: Action1<MasterPlayerResponseModels.SendEmailOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerSendEmailOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SendEmailOperationResponse);
	}

	public async sendEmailAsync(requestData: MasterPlayerModels.ServerSendEmailRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SendEmailOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerSendEmailOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SendEmailOperationResponse);
	}

	public addPushNotification(requestData: MasterPlayerModels.ServerAddPushNotificationRequestData, onResponse: Action1<MasterPlayerResponseModels.AddPushNotificationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerAddPushNotificationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.AddPushNotificationOperationResponse);
	}

	public async addPushNotificationAsync(requestData: MasterPlayerModels.ServerAddPushNotificationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.AddPushNotificationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerAddPushNotificationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.AddPushNotificationOperationResponse);
	}

	public removePushNotification(requestData: MasterPlayerModels.ServerRemovePushNotificationRequestData, onResponse: Action1<MasterPlayerResponseModels.RemovePushNotificationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerRemovePushNotificationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.RemovePushNotificationOperationResponse);
	}

	public async removePushNotificationAsync(requestData: MasterPlayerModels.ServerRemovePushNotificationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.RemovePushNotificationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerRemovePushNotificationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.RemovePushNotificationOperationResponse);
	}

	public getPushNotification(requestData: MasterPlayerModels.ServerGetPushNotificationRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPushNotificationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerGetPushNotificationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPushNotificationOperationResponse);
	}

	public async getPushNotificationAsync(requestData: MasterPlayerModels.ServerGetPushNotificationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPushNotificationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerGetPushNotificationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPushNotificationOperationResponse);
	}

	public sendPushNotification(requestData: MasterPlayerModels.ServerSendPushNotificationRequestData, onResponse: Action1<MasterPlayerResponseModels.SendPushNotificationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.ServerSendPushNotificationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SendPushNotificationOperationResponse);
	}

	public async sendPushNotificationAsync(requestData: MasterPlayerModels.ServerSendPushNotificationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SendPushNotificationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.ServerSendPushNotificationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SendPushNotificationOperationResponse);
	}

}

export class AdminMasterPlayerApi {
	public addSegment(requestData: MasterPlayerModels.AdminAddSegmentRequestData, onResponse: Action1<MasterPlayerResponseModels.AddSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminAddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.AddSegmentOperationResponse);
	}

	public async addSegmentAsync(requestData: MasterPlayerModels.AdminAddSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.AddSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminAddSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.AddSegmentOperationResponse);
	}

	public getAvatar(requestData: MasterPlayerModels.AdminGetAvatarRequestData, onResponse: Action1<MasterPlayerResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetAvatarOperationResponse);
	}

	public async getAvatarAsync(requestData: MasterPlayerModels.AdminGetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetAvatarOperationResponse);
	}

	public getCountryCode(requestData: MasterPlayerModels.AdminGetCountryCodeRequestData, onResponse: Action1<MasterPlayerResponseModels.GetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCountryCodeOperationResponse);
	}

	public async getCountryCodeAsync(requestData: MasterPlayerModels.AdminGetCountryCodeRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetCountryCodeOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetCountryCodeOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCountryCodeOperationResponse);
	}

	public getCustomData(requestData: MasterPlayerModels.AdminGetCustomDataRequestData, onResponse: Action1<MasterPlayerResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCustomDataOperationResponse);
	}

	public async getCustomDataAsync(requestData: MasterPlayerModels.AdminGetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCustomDataOperationResponse);
	}

	public getDisplayName(requestData: MasterPlayerModels.AdminGetDisplayNameRequestData, onResponse: Action1<MasterPlayerResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetDisplayNameOperationResponse);
	}

	public async getDisplayNameAsync(requestData: MasterPlayerModels.AdminGetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetDisplayNameOperationResponse);
	}

	public getEmail(requestData: MasterPlayerModels.AdminGetEmailRequestData, onResponse: Action1<MasterPlayerResponseModels.GetEmailOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetEmailOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetEmailOperationResponse);
	}

	public async getEmailAsync(requestData: MasterPlayerModels.AdminGetEmailRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetEmailOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetEmailOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetEmailOperationResponse);
	}

	public getExternal(requestData: MasterPlayerModels.AdminGetExternalRequestData, onResponse: Action1<MasterPlayerResponseModels.GetExternalOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetExternalOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetExternalOperationResponse);
	}

	public async getExternalAsync(requestData: MasterPlayerModels.AdminGetExternalRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetExternalOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetExternalOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetExternalOperationResponse);
	}

	public getIpAddressCreate(requestData: MasterPlayerModels.AdminGetIpAddressCreateRequestData, onResponse: Action1<MasterPlayerResponseModels.GetIpAddressCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetIpAddressCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetIpAddressCreateOperationResponse);
	}

	public async getIpAddressCreateAsync(requestData: MasterPlayerModels.AdminGetIpAddressCreateRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetIpAddressCreateOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetIpAddressCreateOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetIpAddressCreateOperationResponse);
	}

	public getPlayerBan(requestData: MasterPlayerModels.AdminGetPlayerBanRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerBanOperationResponse);
	}

	public async getPlayerBanAsync(requestData: MasterPlayerModels.AdminGetPlayerBanRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayerBanOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetPlayerBanOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerBanOperationResponse);
	}

	public getPlayerCurrency(requestData: MasterPlayerModels.AdminGetPlayerCurrencyRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetPlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerCurrencyOperationResponse);
	}

	public async getPlayerCurrencyAsync(requestData: MasterPlayerModels.AdminGetPlayerCurrencyRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayerCurrencyOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetPlayerCurrencyOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerCurrencyOperationResponse);
	}

	public getPlayerData(requestData: MasterPlayerModels.AdminGetPlayerDataRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerDataOperationResponse);
	}

	public async getPlayerDataAsync(requestData: MasterPlayerModels.AdminGetPlayerDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayerDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetPlayerDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerDataOperationResponse);
	}

	public getPlayerInformation(requestData: MasterPlayerModels.AdminGetPlayerInformationRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayerInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetPlayerInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerInformationOperationResponse);
	}

	public async getPlayerInformationAsync(requestData: MasterPlayerModels.AdminGetPlayerInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayerInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetPlayerInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerInformationOperationResponse);
	}

	public getPlayerStatistics(requestData: MasterPlayerModels.AdminGetPlayerStatisticsRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetPlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerStatisticsOperationResponse);
	}

	public async getPlayerStatisticsAsync(requestData: MasterPlayerModels.AdminGetPlayerStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayerStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetPlayerStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayerStatisticsOperationResponse);
	}

	public getPlayersWithApple(requestData: MasterPlayerModels.AdminGetPlayersWithAppleRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithAppleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetPlayersWithAppleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithAppleOperationResponse);
	}

	public async getPlayersWithAppleAsync(requestData: MasterPlayerModels.AdminGetPlayersWithAppleRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayersWithAppleOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetPlayersWithAppleOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithAppleOperationResponse);
	}

	public getPlayersWithDisplayName(requestData: MasterPlayerModels.AdminGetPlayersWithDisplayNameRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetPlayersWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse);
	}

	public async getPlayersWithDisplayNameAsync(requestData: MasterPlayerModels.AdminGetPlayersWithDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetPlayersWithDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse);
	}

	public getPlayersWithFacebook(requestData: MasterPlayerModels.AdminGetPlayersWithFacebookRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithFacebookOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetPlayersWithFacebookOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithFacebookOperationResponse);
	}

	public async getPlayersWithFacebookAsync(requestData: MasterPlayerModels.AdminGetPlayersWithFacebookRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayersWithFacebookOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetPlayersWithFacebookOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithFacebookOperationResponse);
	}

	public getPlayersWithGenericService(requestData: MasterPlayerModels.AdminGetPlayersWithGenericServiceRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithGenericServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetPlayersWithGenericServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithGenericServiceOperationResponse);
	}

	public async getPlayersWithGenericServiceAsync(requestData: MasterPlayerModels.AdminGetPlayersWithGenericServiceRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayersWithGenericServiceOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetPlayersWithGenericServiceOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithGenericServiceOperationResponse);
	}

	public getPlayersWithGoogle(requestData: MasterPlayerModels.AdminGetPlayersWithGoogleRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithGoogleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetPlayersWithGoogleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithGoogleOperationResponse);
	}

	public async getPlayersWithGoogleAsync(requestData: MasterPlayerModels.AdminGetPlayersWithGoogleRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayersWithGoogleOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetPlayersWithGoogleOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithGoogleOperationResponse);
	}

	public getPlayersWithGooglePlayGameService(requestData: MasterPlayerModels.AdminGetPlayersWithGooglePlayGameServiceRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithGooglePlayGameServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetPlayersWithGooglePlayGameServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithGooglePlayGameServiceOperationResponse);
	}

	public async getPlayersWithGooglePlayGameServiceAsync(requestData: MasterPlayerModels.AdminGetPlayersWithGooglePlayGameServiceRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayersWithGooglePlayGameServiceOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetPlayersWithGooglePlayGameServiceOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithGooglePlayGameServiceOperationResponse);
	}

	public getPlayersWithGameCenter(requestData: MasterPlayerModels.AdminGetPlayersWithGameCenterRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithGameCenterOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetPlayersWithGameCenterOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithGameCenterOperationResponse);
	}

	public async getPlayersWithGameCenterAsync(requestData: MasterPlayerModels.AdminGetPlayersWithGameCenterRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayersWithGameCenterOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetPlayersWithGameCenterOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithGameCenterOperationResponse);
	}

	public getPlayersWithSegment(requestData: MasterPlayerModels.AdminGetPlayersWithSegmentRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetPlayersWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithSegmentOperationResponse);
	}

	public async getPlayersWithSegmentAsync(requestData: MasterPlayerModels.AdminGetPlayersWithSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayersWithSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetPlayersWithSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithSegmentOperationResponse);
	}

	public getPlayersWithTag(requestData: MasterPlayerModels.AdminGetPlayersWithTagRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPlayersWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetPlayersWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithTagOperationResponse);
	}

	public async getPlayersWithTagAsync(requestData: MasterPlayerModels.AdminGetPlayersWithTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPlayersWithTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetPlayersWithTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPlayersWithTagOperationResponse);
	}

	public getSegment(requestData: MasterPlayerModels.AdminGetSegmentRequestData, onResponse: Action1<MasterPlayerResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetSegmentOperationResponse);
	}

	public async getSegmentAsync(requestData: MasterPlayerModels.AdminGetSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetSegmentOperationResponse);
	}

	public getStatisticsLeaderboardAroundPlayer(requestData: MasterPlayerModels.AdminGetStatisticsLeaderboardAroundPlayerRequestData, onResponse: Action1<MasterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	public async getStatisticsLeaderboardAroundPlayerAsync(requestData: MasterPlayerModels.AdminGetStatisticsLeaderboardAroundPlayerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	public getStatisticsLeaderboard(requestData: MasterPlayerModels.AdminGetStatisticsLeaderboardRequestData, onResponse: Action1<MasterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public async getStatisticsLeaderboardAsync(requestData: MasterPlayerModels.AdminGetStatisticsLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetStatisticsLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public getTag(requestData: MasterPlayerModels.AdminGetTagRequestData, onResponse: Action1<MasterPlayerResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetTagOperationResponse);
	}

	public async getTagAsync(requestData: MasterPlayerModels.AdminGetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetTagOperationResponse);
	}

	public getTsCreate(requestData: MasterPlayerModels.AdminGetTsCreateRequestData, onResponse: Action1<MasterPlayerResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetTsCreateOperationResponse);
	}

	public async getTsCreateAsync(requestData: MasterPlayerModels.AdminGetTsCreateRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetTsCreateOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetTsCreateOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetTsCreateOperationResponse);
	}

	public getTsLastLogin(requestData: MasterPlayerModels.AdminGetTsLastLoginRequestData, onResponse: Action1<MasterPlayerResponseModels.GetTsLastLoginOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetTsLastLoginOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetTsLastLoginOperationResponse);
	}

	public async getTsLastLoginAsync(requestData: MasterPlayerModels.AdminGetTsLastLoginRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetTsLastLoginOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetTsLastLoginOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetTsLastLoginOperationResponse);
	}

	public linkAccount(requestData: MasterPlayerModels.AdminLinkAccountRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminLinkAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkAccountOperationResponse);
	}

	public async linkAccountAsync(requestData: MasterPlayerModels.AdminLinkAccountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkAccountOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminLinkAccountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkAccountOperationResponse);
	}

	public linkAndroidDeviceId(requestData: MasterPlayerModels.AdminLinkAndroidDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkAndroidDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminLinkAndroidDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkAndroidDeviceIdOperationResponse);
	}

	public async linkAndroidDeviceIdAsync(requestData: MasterPlayerModels.AdminLinkAndroidDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkAndroidDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminLinkAndroidDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkAndroidDeviceIdOperationResponse);
	}

	public linkApple(requestData: MasterPlayerModels.AdminLinkAppleRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkAppleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminLinkAppleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkAppleOperationResponse);
	}

	public async linkAppleAsync(requestData: MasterPlayerModels.AdminLinkAppleRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkAppleOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminLinkAppleOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkAppleOperationResponse);
	}

	public linkCustomDeviceId(requestData: MasterPlayerModels.AdminLinkCustomDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkCustomDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminLinkCustomDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkCustomDeviceIdOperationResponse);
	}

	public async linkCustomDeviceIdAsync(requestData: MasterPlayerModels.AdminLinkCustomDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkCustomDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminLinkCustomDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkCustomDeviceIdOperationResponse);
	}

	public linkCustomId(requestData: MasterPlayerModels.AdminLinkCustomIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkCustomIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminLinkCustomIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkCustomIdOperationResponse);
	}

	public async linkCustomIdAsync(requestData: MasterPlayerModels.AdminLinkCustomIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkCustomIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminLinkCustomIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkCustomIdOperationResponse);
	}

	public linkEditorDeviceId(requestData: MasterPlayerModels.AdminLinkEditorDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkEditorDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminLinkEditorDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkEditorDeviceIdOperationResponse);
	}

	public async linkEditorDeviceIdAsync(requestData: MasterPlayerModels.AdminLinkEditorDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkEditorDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminLinkEditorDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkEditorDeviceIdOperationResponse);
	}

	public linkFacebook(requestData: MasterPlayerModels.AdminLinkFacebookRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkFacebookOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminLinkFacebookOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkFacebookOperationResponse);
	}

	public async linkFacebookAsync(requestData: MasterPlayerModels.AdminLinkFacebookRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkFacebookOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminLinkFacebookOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkFacebookOperationResponse);
	}

	public linkGenericService(requestData: MasterPlayerModels.AdminLinkGenericServiceRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkGenericServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminLinkGenericServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkGenericServiceOperationResponse);
	}

	public async linkGenericServiceAsync(requestData: MasterPlayerModels.AdminLinkGenericServiceRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkGenericServiceOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminLinkGenericServiceOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkGenericServiceOperationResponse);
	}

	public linkGoogle(requestData: MasterPlayerModels.AdminLinkGoogleRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkGoogleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminLinkGoogleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkGoogleOperationResponse);
	}

	public async linkGoogleAsync(requestData: MasterPlayerModels.AdminLinkGoogleRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkGoogleOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminLinkGoogleOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkGoogleOperationResponse);
	}

	public linkGooglePlayGameService(requestData: MasterPlayerModels.AdminLinkGooglePlayGameServiceRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkGooglePlayGameServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminLinkGooglePlayGameServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkGooglePlayGameServiceOperationResponse);
	}

	public async linkGooglePlayGameServiceAsync(requestData: MasterPlayerModels.AdminLinkGooglePlayGameServiceRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkGooglePlayGameServiceOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminLinkGooglePlayGameServiceOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkGooglePlayGameServiceOperationResponse);
	}

	public linkGameCenter(requestData: MasterPlayerModels.AdminLinkGameCenterRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkGameCenterOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminLinkGameCenterOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkGameCenterOperationResponse);
	}

	public async linkGameCenterAsync(requestData: MasterPlayerModels.AdminLinkGameCenterRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkGameCenterOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminLinkGameCenterOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkGameCenterOperationResponse);
	}

	public linkiOSDeviceId(requestData: MasterPlayerModels.AdminLinkiOSDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkiOSDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminLinkiOSDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkiOSDeviceIdOperationResponse);
	}

	public async linkiOSDeviceIdAsync(requestData: MasterPlayerModels.AdminLinkiOSDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkiOSDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminLinkiOSDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkiOSDeviceIdOperationResponse);
	}

	public linkLinuxDeviceId(requestData: MasterPlayerModels.AdminLinkLinuxDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkLinuxDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminLinkLinuxDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkLinuxDeviceIdOperationResponse);
	}

	public async linkLinuxDeviceIdAsync(requestData: MasterPlayerModels.AdminLinkLinuxDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkLinuxDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminLinkLinuxDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkLinuxDeviceIdOperationResponse);
	}

	public linkMacOSDeviceId(requestData: MasterPlayerModels.AdminLinkMacOSDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkMacOSDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminLinkMacOSDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkMacOSDeviceIdOperationResponse);
	}

	public async linkMacOSDeviceIdAsync(requestData: MasterPlayerModels.AdminLinkMacOSDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkMacOSDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminLinkMacOSDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkMacOSDeviceIdOperationResponse);
	}

	public linkWindowsDeviceId(requestData: MasterPlayerModels.AdminLinkWindowsDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkWindowsDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminLinkWindowsDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkWindowsDeviceIdOperationResponse);
	}

	public async linkWindowsDeviceIdAsync(requestData: MasterPlayerModels.AdminLinkWindowsDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkWindowsDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminLinkWindowsDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkWindowsDeviceIdOperationResponse);
	}

	public linkWindowsPhoneDeviceId(requestData: MasterPlayerModels.AdminLinkWindowsPhoneDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.LinkWindowsPhoneDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminLinkWindowsPhoneDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkWindowsPhoneDeviceIdOperationResponse);
	}

	public async linkWindowsPhoneDeviceIdAsync(requestData: MasterPlayerModels.AdminLinkWindowsPhoneDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.LinkWindowsPhoneDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminLinkWindowsPhoneDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.LinkWindowsPhoneDeviceIdOperationResponse);
	}

	public removeSegment(requestData: MasterPlayerModels.AdminRemoveSegmentRequestData, onResponse: Action1<MasterPlayerResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminRemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.RemoveSegmentOperationResponse);
	}

	public async removeSegmentAsync(requestData: MasterPlayerModels.AdminRemoveSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.RemoveSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminRemoveSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.RemoveSegmentOperationResponse);
	}

	public removeTag(requestData: MasterPlayerModels.AdminRemoveTagRequestData, onResponse: Action1<MasterPlayerResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminRemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.RemoveTagOperationResponse);
	}

	public async removeTagAsync(requestData: MasterPlayerModels.AdminRemoveTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.RemoveTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminRemoveTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.RemoveTagOperationResponse);
	}

	public resetAccountPassword(requestData: MasterPlayerModels.AdminResetAccountPasswordRequestData, onResponse: Action1<MasterPlayerResponseModels.ResetAccountPasswordOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminResetAccountPasswordOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.ResetAccountPasswordOperationResponse);
	}

	public async resetAccountPasswordAsync(requestData: MasterPlayerModels.AdminResetAccountPasswordRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.ResetAccountPasswordOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminResetAccountPasswordOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.ResetAccountPasswordOperationResponse);
	}

	public setAvatar(requestData: MasterPlayerModels.AdminSetAvatarRequestData, onResponse: Action1<MasterPlayerResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminSetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetAvatarOperationResponse);
	}

	public async setAvatarAsync(requestData: MasterPlayerModels.AdminSetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminSetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetAvatarOperationResponse);
	}

	public setCountryCode(requestData: MasterPlayerModels.AdminSetCountryCodeRequestData, onResponse: Action1<MasterPlayerResponseModels.SetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminSetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetCountryCodeOperationResponse);
	}

	public async setCountryCodeAsync(requestData: MasterPlayerModels.AdminSetCountryCodeRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetCountryCodeOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminSetCountryCodeOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetCountryCodeOperationResponse);
	}

	public setCustomData(requestData: MasterPlayerModels.AdminSetCustomDataRequestData, onResponse: Action1<MasterPlayerResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminSetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetCustomDataOperationResponse);
	}

	public async setCustomDataAsync(requestData: MasterPlayerModels.AdminSetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminSetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetCustomDataOperationResponse);
	}

	public setDisplayName(requestData: MasterPlayerModels.AdminSetDisplayNameRequestData, onResponse: Action1<MasterPlayerResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminSetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetDisplayNameOperationResponse);
	}

	public async setDisplayNameAsync(requestData: MasterPlayerModels.AdminSetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminSetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetDisplayNameOperationResponse);
	}

	public setEmail(requestData: MasterPlayerModels.AdminSetEmailRequestData, onResponse: Action1<MasterPlayerResponseModels.SetEmailOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminSetEmailOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetEmailOperationResponse);
	}

	public async setEmailAsync(requestData: MasterPlayerModels.AdminSetEmailRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetEmailOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminSetEmailOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetEmailOperationResponse);
	}

	public setPlayerBan(requestData: MasterPlayerModels.AdminSetPlayerBanRequestData, onResponse: Action1<MasterPlayerResponseModels.SetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminSetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerBanOperationResponse);
	}

	public async setPlayerBanAsync(requestData: MasterPlayerModels.AdminSetPlayerBanRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetPlayerBanOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminSetPlayerBanOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerBanOperationResponse);
	}

	public setPlayerCurrency(requestData: MasterPlayerModels.AdminSetPlayerCurrencyRequestData, onResponse: Action1<MasterPlayerResponseModels.SetPlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminSetPlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerCurrencyOperationResponse);
	}

	public async setPlayerCurrencyAsync(requestData: MasterPlayerModels.AdminSetPlayerCurrencyRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetPlayerCurrencyOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminSetPlayerCurrencyOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerCurrencyOperationResponse);
	}

	public setPlayerData(requestData: MasterPlayerModels.AdminSetPlayerDataRequestData, onResponse: Action1<MasterPlayerResponseModels.SetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminSetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerDataOperationResponse);
	}

	public async setPlayerDataAsync(requestData: MasterPlayerModels.AdminSetPlayerDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetPlayerDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminSetPlayerDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerDataOperationResponse);
	}

	public setPlayerStatistics(requestData: MasterPlayerModels.AdminSetPlayerStatisticsRequestData, onResponse: Action1<MasterPlayerResponseModels.SetPlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminSetPlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerStatisticsOperationResponse);
	}

	public async setPlayerStatisticsAsync(requestData: MasterPlayerModels.AdminSetPlayerStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetPlayerStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminSetPlayerStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetPlayerStatisticsOperationResponse);
	}

	public setTag(requestData: MasterPlayerModels.AdminSetTagRequestData, onResponse: Action1<MasterPlayerResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminSetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetTagOperationResponse);
	}

	public async setTagAsync(requestData: MasterPlayerModels.AdminSetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminSetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetTagOperationResponse);
	}

	public setTsLastLogin(requestData: MasterPlayerModels.AdminSetTsLastLoginRequestData, onResponse: Action1<MasterPlayerResponseModels.SetTsLastLoginOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminSetTsLastLoginOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetTsLastLoginOperationResponse);
	}

	public async setTsLastLoginAsync(requestData: MasterPlayerModels.AdminSetTsLastLoginRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SetTsLastLoginOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminSetTsLastLoginOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SetTsLastLoginOperationResponse);
	}

	public unlinkAccount(requestData: MasterPlayerModels.AdminUnlinkAccountRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminUnlinkAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkAccountOperationResponse);
	}

	public async unlinkAccountAsync(requestData: MasterPlayerModels.AdminUnlinkAccountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkAccountOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminUnlinkAccountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkAccountOperationResponse);
	}

	public unlinkAndroidDeviceId(requestData: MasterPlayerModels.AdminUnlinkAndroidDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkAndroidDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminUnlinkAndroidDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkAndroidDeviceIdOperationResponse);
	}

	public async unlinkAndroidDeviceIdAsync(requestData: MasterPlayerModels.AdminUnlinkAndroidDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkAndroidDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminUnlinkAndroidDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkAndroidDeviceIdOperationResponse);
	}

	public unlinkApple(requestData: MasterPlayerModels.AdminUnlinkAppleRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkAppleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminUnlinkAppleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkAppleOperationResponse);
	}

	public async unlinkAppleAsync(requestData: MasterPlayerModels.AdminUnlinkAppleRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkAppleOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminUnlinkAppleOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkAppleOperationResponse);
	}

	public unlinkCustomDeviceId(requestData: MasterPlayerModels.AdminUnlinkCustomDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkCustomDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminUnlinkCustomDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkCustomDeviceIdOperationResponse);
	}

	public async unlinkCustomDeviceIdAsync(requestData: MasterPlayerModels.AdminUnlinkCustomDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkCustomDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminUnlinkCustomDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkCustomDeviceIdOperationResponse);
	}

	public unlinkCustomId(requestData: MasterPlayerModels.AdminUnlinkCustomIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkCustomIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminUnlinkCustomIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkCustomIdOperationResponse);
	}

	public async unlinkCustomIdAsync(requestData: MasterPlayerModels.AdminUnlinkCustomIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkCustomIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminUnlinkCustomIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkCustomIdOperationResponse);
	}

	public unlinkEditorDeviceId(requestData: MasterPlayerModels.AdminUnlinkEditorDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkEditorDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminUnlinkEditorDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkEditorDeviceIdOperationResponse);
	}

	public async unlinkEditorDeviceIdAsync(requestData: MasterPlayerModels.AdminUnlinkEditorDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkEditorDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminUnlinkEditorDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkEditorDeviceIdOperationResponse);
	}

	public unlinkFacebook(requestData: MasterPlayerModels.AdminUnlinkFacebookRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkFacebookOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminUnlinkFacebookOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkFacebookOperationResponse);
	}

	public async unlinkFacebookAsync(requestData: MasterPlayerModels.AdminUnlinkFacebookRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkFacebookOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminUnlinkFacebookOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkFacebookOperationResponse);
	}

	public unlinkGenericService(requestData: MasterPlayerModels.AdminUnlinkGenericServiceRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkGenericServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminUnlinkGenericServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkGenericServiceOperationResponse);
	}

	public async unlinkGenericServiceAsync(requestData: MasterPlayerModels.AdminUnlinkGenericServiceRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkGenericServiceOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminUnlinkGenericServiceOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkGenericServiceOperationResponse);
	}

	public unlinkGoogle(requestData: MasterPlayerModels.AdminUnlinkGoogleRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkGoogleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminUnlinkGoogleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkGoogleOperationResponse);
	}

	public async unlinkGoogleAsync(requestData: MasterPlayerModels.AdminUnlinkGoogleRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkGoogleOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminUnlinkGoogleOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkGoogleOperationResponse);
	}

	public unlinkGooglePlayGameService(requestData: MasterPlayerModels.AdminUnlinkGooglePlayGameServiceRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkGooglePlayGameServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminUnlinkGooglePlayGameServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkGooglePlayGameServiceOperationResponse);
	}

	public async unlinkGooglePlayGameServiceAsync(requestData: MasterPlayerModels.AdminUnlinkGooglePlayGameServiceRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkGooglePlayGameServiceOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminUnlinkGooglePlayGameServiceOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkGooglePlayGameServiceOperationResponse);
	}

	public unlinkGameCenter(requestData: MasterPlayerModels.AdminUnlinkGameCenterRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkGameCenterOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminUnlinkGameCenterOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkGameCenterOperationResponse);
	}

	public async unlinkGameCenterAsync(requestData: MasterPlayerModels.AdminUnlinkGameCenterRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkGameCenterOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminUnlinkGameCenterOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkGameCenterOperationResponse);
	}

	public unlinkiOSDeviceId(requestData: MasterPlayerModels.AdminUnlinkiOSDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkiOSDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminUnlinkiOSDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkiOSDeviceIdOperationResponse);
	}

	public async unlinkiOSDeviceIdAsync(requestData: MasterPlayerModels.AdminUnlinkiOSDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkiOSDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminUnlinkiOSDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkiOSDeviceIdOperationResponse);
	}

	public unlinkLinuxDeviceId(requestData: MasterPlayerModels.AdminUnlinkLinuxDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkLinuxDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminUnlinkLinuxDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkLinuxDeviceIdOperationResponse);
	}

	public async unlinkLinuxDeviceIdAsync(requestData: MasterPlayerModels.AdminUnlinkLinuxDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkLinuxDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminUnlinkLinuxDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkLinuxDeviceIdOperationResponse);
	}

	public unlinkMacOSDeviceId(requestData: MasterPlayerModels.AdminUnlinkMacOSDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkMacOSDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminUnlinkMacOSDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkMacOSDeviceIdOperationResponse);
	}

	public async unlinkMacOSDeviceIdAsync(requestData: MasterPlayerModels.AdminUnlinkMacOSDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkMacOSDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminUnlinkMacOSDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkMacOSDeviceIdOperationResponse);
	}

	public unlinkWindowsDeviceId(requestData: MasterPlayerModels.AdminUnlinkWindowsDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkWindowsDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminUnlinkWindowsDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkWindowsDeviceIdOperationResponse);
	}

	public async unlinkWindowsDeviceIdAsync(requestData: MasterPlayerModels.AdminUnlinkWindowsDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkWindowsDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminUnlinkWindowsDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkWindowsDeviceIdOperationResponse);
	}

	public unlinkWindowsPhoneDeviceId(requestData: MasterPlayerModels.AdminUnlinkWindowsPhoneDeviceIdRequestData, onResponse: Action1<MasterPlayerResponseModels.UnlinkWindowsPhoneDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminUnlinkWindowsPhoneDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkWindowsPhoneDeviceIdOperationResponse);
	}

	public async unlinkWindowsPhoneDeviceIdAsync(requestData: MasterPlayerModels.AdminUnlinkWindowsPhoneDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.UnlinkWindowsPhoneDeviceIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminUnlinkWindowsPhoneDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.UnlinkWindowsPhoneDeviceIdOperationResponse);
	}

	public getCurrencyLeaderboard(requestData: MasterPlayerModels.AdminGetCurrencyLeaderboardRequestData, onResponse: Action1<MasterPlayerResponseModels.GetCurrencyLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetCurrencyLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCurrencyLeaderboardOperationResponse);
	}

	public async getCurrencyLeaderboardAsync(requestData: MasterPlayerModels.AdminGetCurrencyLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetCurrencyLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetCurrencyLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCurrencyLeaderboardOperationResponse);
	}

	public getCreateLeaderboard(requestData: MasterPlayerModels.AdminGetCreateLeaderboardRequestData, onResponse: Action1<MasterPlayerResponseModels.GetCreateLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetCreateLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCreateLeaderboardOperationResponse);
	}

	public async getCreateLeaderboardAsync(requestData: MasterPlayerModels.AdminGetCreateLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetCreateLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetCreateLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCreateLeaderboardOperationResponse);
	}

	public getLastLoginLeaderboard(requestData: MasterPlayerModels.AdminGetLastLoginLeaderboardRequestData, onResponse: Action1<MasterPlayerResponseModels.GetLastLoginLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetLastLoginLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetLastLoginLeaderboardOperationResponse);
	}

	public async getLastLoginLeaderboardAsync(requestData: MasterPlayerModels.AdminGetLastLoginLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetLastLoginLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetLastLoginLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetLastLoginLeaderboardOperationResponse);
	}

	public getStatisticsLog(requestData: MasterPlayerModels.AdminGetStatisticsLogRequestData, onResponse: Action1<MasterPlayerResponseModels.GetStatisticsLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetStatisticsLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetStatisticsLogOperationResponse);
	}

	public async getStatisticsLogAsync(requestData: MasterPlayerModels.AdminGetStatisticsLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetStatisticsLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetStatisticsLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetStatisticsLogOperationResponse);
	}

	public getCurrencyLog(requestData: MasterPlayerModels.AdminGetCurrencyLogRequestData, onResponse: Action1<MasterPlayerResponseModels.GetCurrencyLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetCurrencyLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCurrencyLogOperationResponse);
	}

	public async getCurrencyLogAsync(requestData: MasterPlayerModels.AdminGetCurrencyLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetCurrencyLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetCurrencyLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetCurrencyLogOperationResponse);
	}

	public sendSocketOperationEvent(requestData: MasterPlayerModels.AdminSendSocketOperationEventRequestData, onResponse: Action1<MasterPlayerResponseModels.SendSocketOperationEventOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminSendSocketOperationEventOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SendSocketOperationEventOperationResponse);
	}

	public async sendSocketOperationEventAsync(requestData: MasterPlayerModels.AdminSendSocketOperationEventRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SendSocketOperationEventOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminSendSocketOperationEventOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SendSocketOperationEventOperationResponse);
	}

	public sendEmail(requestData: MasterPlayerModels.AdminSendEmailRequestData, onResponse: Action1<MasterPlayerResponseModels.SendEmailOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminSendEmailOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SendEmailOperationResponse);
	}

	public async sendEmailAsync(requestData: MasterPlayerModels.AdminSendEmailRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SendEmailOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminSendEmailOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SendEmailOperationResponse);
	}

	public addPushNotification(requestData: MasterPlayerModels.AdminAddPushNotificationRequestData, onResponse: Action1<MasterPlayerResponseModels.AddPushNotificationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminAddPushNotificationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.AddPushNotificationOperationResponse);
	}

	public async addPushNotificationAsync(requestData: MasterPlayerModels.AdminAddPushNotificationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.AddPushNotificationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminAddPushNotificationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.AddPushNotificationOperationResponse);
	}

	public removePushNotification(requestData: MasterPlayerModels.AdminRemovePushNotificationRequestData, onResponse: Action1<MasterPlayerResponseModels.RemovePushNotificationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminRemovePushNotificationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.RemovePushNotificationOperationResponse);
	}

	public async removePushNotificationAsync(requestData: MasterPlayerModels.AdminRemovePushNotificationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.RemovePushNotificationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminRemovePushNotificationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.RemovePushNotificationOperationResponse);
	}

	public getPushNotification(requestData: MasterPlayerModels.AdminGetPushNotificationRequestData, onResponse: Action1<MasterPlayerResponseModels.GetPushNotificationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminGetPushNotificationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPushNotificationOperationResponse);
	}

	public async getPushNotificationAsync(requestData: MasterPlayerModels.AdminGetPushNotificationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.GetPushNotificationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminGetPushNotificationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.GetPushNotificationOperationResponse);
	}

	public sendPushNotification(requestData: MasterPlayerModels.AdminSendPushNotificationRequestData, onResponse: Action1<MasterPlayerResponseModels.SendPushNotificationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MasterPlayerRequestModels.AdminSendPushNotificationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SendPushNotificationOperationResponse);
	}

	public async sendPushNotificationAsync(requestData: MasterPlayerModels.AdminSendPushNotificationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MasterPlayerResponseModels.SendPushNotificationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MasterPlayerRequestModels.AdminSendPushNotificationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MasterPlayerResponseModels.SendPushNotificationOperationResponse);
	}

}
