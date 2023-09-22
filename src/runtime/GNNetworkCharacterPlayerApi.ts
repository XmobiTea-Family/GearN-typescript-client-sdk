import { GNNetwork } from "./GNNetwork";
import { Action1 } from "./common/Action1";
import { GNHashtable } from "./common/GNData";
import { OperationRequest } from "./entity/OperationRequest";
import { CharacterPlayerModels } from "./entity/models/CharacterPlayerModels";
import { CharacterPlayerRequestModels } from "./entity/models/CharacterPlayerRequestModels";
import { CharacterPlayerResponseModels } from "./entity/models/CharacterPlayerResponseModels";

export class CharacterPlayerApi {
	public server: ServerCharacterPlayerApi = new ServerCharacterPlayerApi();

	public admin: AdminCharacterPlayerApi = new AdminCharacterPlayerApi();

	public addPlayerFriend(requestData: CharacterPlayerModels.AddPlayerFriendRequestData, onResponse: Action1<CharacterPlayerResponseModels.AddPlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AddPlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.AddPlayerFriendOperationResponse);
	}

	public addSegment(requestData: CharacterPlayerModels.AddSegmentRequestData, onResponse: Action1<CharacterPlayerResponseModels.AddSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.AddSegmentOperationResponse);
	}

	public getAvatar(requestData: CharacterPlayerModels.GetAvatarRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.GetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetAvatarOperationResponse);
	}

	public getCatalogId(requestData: CharacterPlayerModels.GetCatalogIdRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetCatalogIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.GetCatalogIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCatalogIdOperationResponse);
	}

	public getCountryCode(requestData: CharacterPlayerModels.GetCountryCodeRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.GetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCountryCodeOperationResponse);
	}

	public getCustomData(requestData: CharacterPlayerModels.GetCustomDataRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.GetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCustomDataOperationResponse);
	}

	public getDisplayName(requestData: CharacterPlayerModels.GetDisplayNameRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.GetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetDisplayNameOperationResponse);
	}

	public getFriendStatisticsLeaderboardAroundPlayer(requestData: CharacterPlayerModels.GetFriendStatisticsLeaderboardAroundPlayerRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.GetFriendStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	public getFriendStatisticsLeaderboard(requestData: CharacterPlayerModels.GetFriendStatisticsLeaderboardRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.GetFriendStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse);
	}

	public getIpAddressCreate(requestData: CharacterPlayerModels.GetIpAddressCreateRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetIpAddressCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.GetIpAddressCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetIpAddressCreateOperationResponse);
	}

	public getOwner(requestData: CharacterPlayerModels.GetOwnerRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetOwnerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.GetOwnerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetOwnerOperationResponse);
	}

	public getPlayerBan(requestData: CharacterPlayerModels.GetPlayerBanRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.GetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerBanOperationResponse);
	}

	public getPlayerCurrency(requestData: CharacterPlayerModels.GetPlayerCurrencyRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.GetPlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerCurrencyOperationResponse);
	}

	public getPlayerData(requestData: CharacterPlayerModels.GetPlayerDataRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.GetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerDataOperationResponse);
	}

	public getPlayerFriend(requestData: CharacterPlayerModels.GetPlayerFriendRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.GetPlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerFriendOperationResponse);
	}

	public getPlayerGroup(requestData: CharacterPlayerModels.GetPlayerGroupRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.GetPlayerGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerGroupOperationResponse);
	}

	public getPlayerInformation(requestData: CharacterPlayerModels.GetPlayerInformationRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.GetPlayerInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerInformationOperationResponse);
	}

	public getPlayerInventory(requestData: CharacterPlayerModels.GetPlayerInventoryRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerInventoryOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.GetPlayerInventoryOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerInventoryOperationResponse);
	}

	public getPlayerStatistics(requestData: CharacterPlayerModels.GetPlayerStatisticsRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.GetPlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerStatisticsOperationResponse);
	}

	public getPlayersWithDisplayName(requestData: CharacterPlayerModels.GetPlayersWithDisplayNameRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.GetPlayersWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse);
	}

	public getPlayersWithSegment(requestData: CharacterPlayerModels.GetPlayersWithSegmentRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayersWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.GetPlayersWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayersWithSegmentOperationResponse);
	}

	public getPlayersWithTag(requestData: CharacterPlayerModels.GetPlayersWithTagRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayersWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.GetPlayersWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayersWithTagOperationResponse);
	}

	public getRemoveStatus(requestData: CharacterPlayerModels.GetRemoveStatusRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.GetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetRemoveStatusOperationResponse);
	}

	public getSegment(requestData: CharacterPlayerModels.GetSegmentRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.GetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetSegmentOperationResponse);
	}

	public getStatisticsLeaderboardAroundPlayer(requestData: CharacterPlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.GetStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	public getStatisticsLeaderboard(requestData: CharacterPlayerModels.GetStatisticsLeaderboardRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.GetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public getTag(requestData: CharacterPlayerModels.GetTagRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.GetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetTagOperationResponse);
	}

	public getTsCreate(requestData: CharacterPlayerModels.GetTsCreateRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.GetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetTsCreateOperationResponse);
	}

	public getTsLastLogin(requestData: CharacterPlayerModels.GetTsLastLoginRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetTsLastLoginOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.GetTsLastLoginOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetTsLastLoginOperationResponse);
	}

	public grantGroup(requestData: CharacterPlayerModels.GrantGroupRequestData, onResponse: Action1<CharacterPlayerResponseModels.GrantGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.GrantGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GrantGroupOperationResponse);
	}

	public grantPlayerItem(requestData: CharacterPlayerModels.GrantPlayerItemRequestData, onResponse: Action1<CharacterPlayerResponseModels.GrantPlayerItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.GrantPlayerItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GrantPlayerItemOperationResponse);
	}

	public joinGroup(requestData: CharacterPlayerModels.JoinGroupRequestData, onResponse: Action1<CharacterPlayerResponseModels.JoinGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.JoinGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.JoinGroupOperationResponse);
	}

	public leaveGroup(requestData: CharacterPlayerModels.LeaveGroupRequestData, onResponse: Action1<CharacterPlayerResponseModels.LeaveGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.LeaveGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.LeaveGroupOperationResponse);
	}

	public removePlayerFriend(requestData: CharacterPlayerModels.RemovePlayerFriendRequestData, onResponse: Action1<CharacterPlayerResponseModels.RemovePlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.RemovePlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemovePlayerFriendOperationResponse);
	}

	public removePlayerItem(requestData: CharacterPlayerModels.RemovePlayerItemRequestData, onResponse: Action1<CharacterPlayerResponseModels.RemovePlayerItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.RemovePlayerItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemovePlayerItemOperationResponse);
	}

	public removeSegment(requestData: CharacterPlayerModels.RemoveSegmentRequestData, onResponse: Action1<CharacterPlayerResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.RemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemoveSegmentOperationResponse);
	}

	public removeTag(requestData: CharacterPlayerModels.RemoveTagRequestData, onResponse: Action1<CharacterPlayerResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.RemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemoveTagOperationResponse);
	}

	public setAvatar(requestData: CharacterPlayerModels.SetAvatarRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.SetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetAvatarOperationResponse);
	}

	public setCountryCode(requestData: CharacterPlayerModels.SetCountryCodeRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.SetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetCountryCodeOperationResponse);
	}

	public setCustomData(requestData: CharacterPlayerModels.SetCustomDataRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.SetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetCustomDataOperationResponse);
	}

	public setDisplayName(requestData: CharacterPlayerModels.SetDisplayNameRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.SetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetDisplayNameOperationResponse);
	}

	public setOwner(requestData: CharacterPlayerModels.SetOwnerRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetOwnerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.SetOwnerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetOwnerOperationResponse);
	}

	public setPlayerBan(requestData: CharacterPlayerModels.SetPlayerBanRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.SetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetPlayerBanOperationResponse);
	}

	public setPlayerCurrency(requestData: CharacterPlayerModels.SetPlayerCurrencyRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetPlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.SetPlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetPlayerCurrencyOperationResponse);
	}

	public setPlayerData(requestData: CharacterPlayerModels.SetPlayerDataRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.SetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetPlayerDataOperationResponse);
	}

	public setPlayerStatistics(requestData: CharacterPlayerModels.SetPlayerStatisticsRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetPlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.SetPlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetPlayerStatisticsOperationResponse);
	}

	public setRemoveStatus(requestData: CharacterPlayerModels.SetRemoveStatusRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.SetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetRemoveStatusOperationResponse);
	}

	public setTag(requestData: CharacterPlayerModels.SetTagRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.SetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetTagOperationResponse);
	}

}

export class ServerCharacterPlayerApi {
	public addPlayerFriend(requestData: CharacterPlayerModels.ServerAddPlayerFriendRequestData, onResponse: Action1<CharacterPlayerResponseModels.AddPlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerAddPlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.AddPlayerFriendOperationResponse);
	}

	public addSegment(requestData: CharacterPlayerModels.ServerAddSegmentRequestData, onResponse: Action1<CharacterPlayerResponseModels.AddSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerAddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.AddSegmentOperationResponse);
	}

	public getAvatar(requestData: CharacterPlayerModels.ServerGetAvatarRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerGetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetAvatarOperationResponse);
	}

	public getCatalogId(requestData: CharacterPlayerModels.ServerGetCatalogIdRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetCatalogIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerGetCatalogIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCatalogIdOperationResponse);
	}

	public getCountryCode(requestData: CharacterPlayerModels.ServerGetCountryCodeRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerGetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCountryCodeOperationResponse);
	}

	public getCustomData(requestData: CharacterPlayerModels.ServerGetCustomDataRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerGetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCustomDataOperationResponse);
	}

	public getDisplayName(requestData: CharacterPlayerModels.ServerGetDisplayNameRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerGetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetDisplayNameOperationResponse);
	}

	public getFriendStatisticsLeaderboardAroundPlayer(requestData: CharacterPlayerModels.ServerGetFriendStatisticsLeaderboardAroundPlayerRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerGetFriendStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	public getFriendStatisticsLeaderboard(requestData: CharacterPlayerModels.ServerGetFriendStatisticsLeaderboardRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerGetFriendStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse);
	}

	public getIpAddressCreate(requestData: CharacterPlayerModels.ServerGetIpAddressCreateRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetIpAddressCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerGetIpAddressCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetIpAddressCreateOperationResponse);
	}

	public getOwner(requestData: CharacterPlayerModels.ServerGetOwnerRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetOwnerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerGetOwnerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetOwnerOperationResponse);
	}

	public getPlayerBan(requestData: CharacterPlayerModels.ServerGetPlayerBanRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerGetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerBanOperationResponse);
	}

	public getPlayerCurrency(requestData: CharacterPlayerModels.ServerGetPlayerCurrencyRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerGetPlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerCurrencyOperationResponse);
	}

	public getPlayerData(requestData: CharacterPlayerModels.ServerGetPlayerDataRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerGetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerDataOperationResponse);
	}

	public getPlayerFriend(requestData: CharacterPlayerModels.ServerGetPlayerFriendRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerGetPlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerFriendOperationResponse);
	}

	public getPlayerGroup(requestData: CharacterPlayerModels.ServerGetPlayerGroupRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerGetPlayerGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerGroupOperationResponse);
	}

	public getPlayerInformation(requestData: CharacterPlayerModels.ServerGetPlayerInformationRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerGetPlayerInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerInformationOperationResponse);
	}

	public getPlayerInventory(requestData: CharacterPlayerModels.ServerGetPlayerInventoryRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerInventoryOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerGetPlayerInventoryOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerInventoryOperationResponse);
	}

	public getPlayerStatistics(requestData: CharacterPlayerModels.ServerGetPlayerStatisticsRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerGetPlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerStatisticsOperationResponse);
	}

	public getPlayersWithDisplayName(requestData: CharacterPlayerModels.ServerGetPlayersWithDisplayNameRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerGetPlayersWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse);
	}

	public getPlayersWithSegment(requestData: CharacterPlayerModels.ServerGetPlayersWithSegmentRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayersWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerGetPlayersWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayersWithSegmentOperationResponse);
	}

	public getPlayersWithTag(requestData: CharacterPlayerModels.ServerGetPlayersWithTagRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayersWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerGetPlayersWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayersWithTagOperationResponse);
	}

	public getRemoveStatus(requestData: CharacterPlayerModels.ServerGetRemoveStatusRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerGetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetRemoveStatusOperationResponse);
	}

	public getSegment(requestData: CharacterPlayerModels.ServerGetSegmentRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerGetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetSegmentOperationResponse);
	}

	public getStatisticsLeaderboardAroundPlayer(requestData: CharacterPlayerModels.ServerGetStatisticsLeaderboardAroundPlayerRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerGetStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	public getStatisticsLeaderboard(requestData: CharacterPlayerModels.ServerGetStatisticsLeaderboardRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerGetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public getTag(requestData: CharacterPlayerModels.ServerGetTagRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerGetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetTagOperationResponse);
	}

	public getTsCreate(requestData: CharacterPlayerModels.ServerGetTsCreateRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerGetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetTsCreateOperationResponse);
	}

	public getTsLastLogin(requestData: CharacterPlayerModels.ServerGetTsLastLoginRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetTsLastLoginOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerGetTsLastLoginOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetTsLastLoginOperationResponse);
	}

	public grantGroup(requestData: CharacterPlayerModels.ServerGrantGroupRequestData, onResponse: Action1<CharacterPlayerResponseModels.GrantGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerGrantGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GrantGroupOperationResponse);
	}

	public grantPlayerItem(requestData: CharacterPlayerModels.ServerGrantPlayerItemRequestData, onResponse: Action1<CharacterPlayerResponseModels.GrantPlayerItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerGrantPlayerItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GrantPlayerItemOperationResponse);
	}

	public joinGroup(requestData: CharacterPlayerModels.ServerJoinGroupRequestData, onResponse: Action1<CharacterPlayerResponseModels.JoinGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerJoinGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.JoinGroupOperationResponse);
	}

	public leaveGroup(requestData: CharacterPlayerModels.ServerLeaveGroupRequestData, onResponse: Action1<CharacterPlayerResponseModels.LeaveGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerLeaveGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.LeaveGroupOperationResponse);
	}

	public removePlayerFriend(requestData: CharacterPlayerModels.ServerRemovePlayerFriendRequestData, onResponse: Action1<CharacterPlayerResponseModels.RemovePlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerRemovePlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemovePlayerFriendOperationResponse);
	}

	public removePlayerItem(requestData: CharacterPlayerModels.ServerRemovePlayerItemRequestData, onResponse: Action1<CharacterPlayerResponseModels.RemovePlayerItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerRemovePlayerItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemovePlayerItemOperationResponse);
	}

	public removeSegment(requestData: CharacterPlayerModels.ServerRemoveSegmentRequestData, onResponse: Action1<CharacterPlayerResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerRemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemoveSegmentOperationResponse);
	}

	public removeTag(requestData: CharacterPlayerModels.ServerRemoveTagRequestData, onResponse: Action1<CharacterPlayerResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerRemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemoveTagOperationResponse);
	}

	public setAvatar(requestData: CharacterPlayerModels.ServerSetAvatarRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerSetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetAvatarOperationResponse);
	}

	public setCountryCode(requestData: CharacterPlayerModels.ServerSetCountryCodeRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerSetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetCountryCodeOperationResponse);
	}

	public setCustomData(requestData: CharacterPlayerModels.ServerSetCustomDataRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerSetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetCustomDataOperationResponse);
	}

	public setDisplayName(requestData: CharacterPlayerModels.ServerSetDisplayNameRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerSetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetDisplayNameOperationResponse);
	}

	public setOwner(requestData: CharacterPlayerModels.ServerSetOwnerRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetOwnerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerSetOwnerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetOwnerOperationResponse);
	}

	public setPlayerBan(requestData: CharacterPlayerModels.ServerSetPlayerBanRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerSetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetPlayerBanOperationResponse);
	}

	public setPlayerCurrency(requestData: CharacterPlayerModels.ServerSetPlayerCurrencyRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetPlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerSetPlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetPlayerCurrencyOperationResponse);
	}

	public setPlayerData(requestData: CharacterPlayerModels.ServerSetPlayerDataRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerSetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetPlayerDataOperationResponse);
	}

	public setPlayerStatistics(requestData: CharacterPlayerModels.ServerSetPlayerStatisticsRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetPlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerSetPlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetPlayerStatisticsOperationResponse);
	}

	public setRemoveStatus(requestData: CharacterPlayerModels.ServerSetRemoveStatusRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerSetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetRemoveStatusOperationResponse);
	}

	public setTag(requestData: CharacterPlayerModels.ServerSetTagRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.ServerSetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetTagOperationResponse);
	}

}

export class AdminCharacterPlayerApi {
	public addPlayerFriend(requestData: CharacterPlayerModels.AdminAddPlayerFriendRequestData, onResponse: Action1<CharacterPlayerResponseModels.AddPlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminAddPlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.AddPlayerFriendOperationResponse);
	}

	public addSegment(requestData: CharacterPlayerModels.AdminAddSegmentRequestData, onResponse: Action1<CharacterPlayerResponseModels.AddSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminAddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.AddSegmentOperationResponse);
	}

	public getAvatar(requestData: CharacterPlayerModels.AdminGetAvatarRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminGetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetAvatarOperationResponse);
	}

	public getCatalogId(requestData: CharacterPlayerModels.AdminGetCatalogIdRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetCatalogIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminGetCatalogIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCatalogIdOperationResponse);
	}

	public getCountryCode(requestData: CharacterPlayerModels.AdminGetCountryCodeRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminGetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCountryCodeOperationResponse);
	}

	public getCustomData(requestData: CharacterPlayerModels.AdminGetCustomDataRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminGetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCustomDataOperationResponse);
	}

	public getDisplayName(requestData: CharacterPlayerModels.AdminGetDisplayNameRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminGetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetDisplayNameOperationResponse);
	}

	public getFriendStatisticsLeaderboardAroundPlayer(requestData: CharacterPlayerModels.AdminGetFriendStatisticsLeaderboardAroundPlayerRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminGetFriendStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	public getFriendStatisticsLeaderboard(requestData: CharacterPlayerModels.AdminGetFriendStatisticsLeaderboardRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminGetFriendStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse);
	}

	public getIpAddressCreate(requestData: CharacterPlayerModels.AdminGetIpAddressCreateRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetIpAddressCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminGetIpAddressCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetIpAddressCreateOperationResponse);
	}

	public getOwner(requestData: CharacterPlayerModels.AdminGetOwnerRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetOwnerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminGetOwnerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetOwnerOperationResponse);
	}

	public getPlayerBan(requestData: CharacterPlayerModels.AdminGetPlayerBanRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminGetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerBanOperationResponse);
	}

	public getPlayerCurrency(requestData: CharacterPlayerModels.AdminGetPlayerCurrencyRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminGetPlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerCurrencyOperationResponse);
	}

	public getPlayerData(requestData: CharacterPlayerModels.AdminGetPlayerDataRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminGetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerDataOperationResponse);
	}

	public getPlayerFriend(requestData: CharacterPlayerModels.AdminGetPlayerFriendRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminGetPlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerFriendOperationResponse);
	}

	public getPlayerGroup(requestData: CharacterPlayerModels.AdminGetPlayerGroupRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminGetPlayerGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerGroupOperationResponse);
	}

	public getPlayerInformation(requestData: CharacterPlayerModels.AdminGetPlayerInformationRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminGetPlayerInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerInformationOperationResponse);
	}

	public getPlayerInventory(requestData: CharacterPlayerModels.AdminGetPlayerInventoryRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerInventoryOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminGetPlayerInventoryOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerInventoryOperationResponse);
	}

	public getPlayerStatistics(requestData: CharacterPlayerModels.AdminGetPlayerStatisticsRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminGetPlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerStatisticsOperationResponse);
	}

	public getPlayersWithDisplayName(requestData: CharacterPlayerModels.AdminGetPlayersWithDisplayNameRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminGetPlayersWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse);
	}

	public getPlayersWithSegment(requestData: CharacterPlayerModels.AdminGetPlayersWithSegmentRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayersWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminGetPlayersWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayersWithSegmentOperationResponse);
	}

	public getPlayersWithTag(requestData: CharacterPlayerModels.AdminGetPlayersWithTagRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayersWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminGetPlayersWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayersWithTagOperationResponse);
	}

	public getRemoveStatus(requestData: CharacterPlayerModels.AdminGetRemoveStatusRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminGetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetRemoveStatusOperationResponse);
	}

	public getSegment(requestData: CharacterPlayerModels.AdminGetSegmentRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminGetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetSegmentOperationResponse);
	}

	public getStatisticsLeaderboardAroundPlayer(requestData: CharacterPlayerModels.AdminGetStatisticsLeaderboardAroundPlayerRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminGetStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	public getStatisticsLeaderboard(requestData: CharacterPlayerModels.AdminGetStatisticsLeaderboardRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminGetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public getTag(requestData: CharacterPlayerModels.AdminGetTagRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminGetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetTagOperationResponse);
	}

	public getTsCreate(requestData: CharacterPlayerModels.AdminGetTsCreateRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminGetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetTsCreateOperationResponse);
	}

	public getTsLastLogin(requestData: CharacterPlayerModels.AdminGetTsLastLoginRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetTsLastLoginOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminGetTsLastLoginOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetTsLastLoginOperationResponse);
	}

	public grantGroup(requestData: CharacterPlayerModels.AdminGrantGroupRequestData, onResponse: Action1<CharacterPlayerResponseModels.GrantGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminGrantGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GrantGroupOperationResponse);
	}

	public grantPlayerItem(requestData: CharacterPlayerModels.AdminGrantPlayerItemRequestData, onResponse: Action1<CharacterPlayerResponseModels.GrantPlayerItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminGrantPlayerItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GrantPlayerItemOperationResponse);
	}

	public joinGroup(requestData: CharacterPlayerModels.AdminJoinGroupRequestData, onResponse: Action1<CharacterPlayerResponseModels.JoinGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminJoinGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.JoinGroupOperationResponse);
	}

	public leaveGroup(requestData: CharacterPlayerModels.AdminLeaveGroupRequestData, onResponse: Action1<CharacterPlayerResponseModels.LeaveGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminLeaveGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.LeaveGroupOperationResponse);
	}

	public removePlayerFriend(requestData: CharacterPlayerModels.AdminRemovePlayerFriendRequestData, onResponse: Action1<CharacterPlayerResponseModels.RemovePlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminRemovePlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemovePlayerFriendOperationResponse);
	}

	public removePlayerItem(requestData: CharacterPlayerModels.AdminRemovePlayerItemRequestData, onResponse: Action1<CharacterPlayerResponseModels.RemovePlayerItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminRemovePlayerItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemovePlayerItemOperationResponse);
	}

	public removeSegment(requestData: CharacterPlayerModels.AdminRemoveSegmentRequestData, onResponse: Action1<CharacterPlayerResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminRemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemoveSegmentOperationResponse);
	}

	public removeTag(requestData: CharacterPlayerModels.AdminRemoveTagRequestData, onResponse: Action1<CharacterPlayerResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminRemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemoveTagOperationResponse);
	}

	public setAvatar(requestData: CharacterPlayerModels.AdminSetAvatarRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminSetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetAvatarOperationResponse);
	}

	public setCountryCode(requestData: CharacterPlayerModels.AdminSetCountryCodeRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminSetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetCountryCodeOperationResponse);
	}

	public setCustomData(requestData: CharacterPlayerModels.AdminSetCustomDataRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminSetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetCustomDataOperationResponse);
	}

	public setDisplayName(requestData: CharacterPlayerModels.AdminSetDisplayNameRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminSetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetDisplayNameOperationResponse);
	}

	public setOwner(requestData: CharacterPlayerModels.AdminSetOwnerRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetOwnerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminSetOwnerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetOwnerOperationResponse);
	}

	public setPlayerBan(requestData: CharacterPlayerModels.AdminSetPlayerBanRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminSetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetPlayerBanOperationResponse);
	}

	public setPlayerCurrency(requestData: CharacterPlayerModels.AdminSetPlayerCurrencyRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetPlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminSetPlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetPlayerCurrencyOperationResponse);
	}

	public setPlayerData(requestData: CharacterPlayerModels.AdminSetPlayerDataRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminSetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetPlayerDataOperationResponse);
	}

	public setPlayerStatistics(requestData: CharacterPlayerModels.AdminSetPlayerStatisticsRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetPlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminSetPlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetPlayerStatisticsOperationResponse);
	}

	public setRemoveStatus(requestData: CharacterPlayerModels.AdminSetRemoveStatusRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminSetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetRemoveStatusOperationResponse);
	}

	public setTag(requestData: CharacterPlayerModels.AdminSetTagRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new CharacterPlayerRequestModels.AdminSetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetTagOperationResponse);
	}

}

