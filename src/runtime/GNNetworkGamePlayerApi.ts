import { GNNetwork } from "./GNNetwork";
import { Action1 } from "./common/Action1";
import { GNHashtable } from "./common/GNData";
import { OperationRequest } from "./entity/OperationRequest";
import { GamePlayerModels } from "./entity/models/GamePlayerModels";
import { GamePlayerRequestModels } from "./entity/models/GamePlayerRequestModels";
import { GamePlayerResponseModels } from "./entity/models/GamePlayerResponseModels";

export class GamePlayerApi {
	public server: ServerGamePlayerApi = new ServerGamePlayerApi();

	public admin: AdminGamePlayerApi = new AdminGamePlayerApi();

	public addPlayerFriend(requestData: GamePlayerModels.AddPlayerFriendRequestData, onResponse: Action1<GamePlayerResponseModels.AddPlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AddPlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.AddPlayerFriendOperationResponse);
	}

	public addSegment(requestData: GamePlayerModels.AddSegmentRequestData, onResponse: Action1<GamePlayerResponseModels.AddSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.AddSegmentOperationResponse);
	}

	public getAvatar(requestData: GamePlayerModels.GetAvatarRequestData, onResponse: Action1<GamePlayerResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetAvatarOperationResponse);
	}

	public getCountryCode(requestData: GamePlayerModels.GetCountryCodeRequestData, onResponse: Action1<GamePlayerResponseModels.GetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCountryCodeOperationResponse);
	}

	public getCustomData(requestData: GamePlayerModels.GetCustomDataRequestData, onResponse: Action1<GamePlayerResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCustomDataOperationResponse);
	}

	public getDisplayName(requestData: GamePlayerModels.GetDisplayNameRequestData, onResponse: Action1<GamePlayerResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetDisplayNameOperationResponse);
	}

	public getFriendStatisticsLeaderboardAroundPlayer(requestData: GamePlayerModels.GetFriendStatisticsLeaderboardAroundPlayerRequestData, onResponse: Action1<GamePlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetFriendStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	public getFriendStatisticsLeaderboard(requestData: GamePlayerModels.GetFriendStatisticsLeaderboardRequestData, onResponse: Action1<GamePlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetFriendStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse);
	}

	public getIpAddressCreate(requestData: GamePlayerModels.GetIpAddressCreateRequestData, onResponse: Action1<GamePlayerResponseModels.GetIpAddressCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetIpAddressCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetIpAddressCreateOperationResponse);
	}

	public getOnlineStatus(requestData: GamePlayerModels.GetOnlineStatusRequestData, onResponse: Action1<GamePlayerResponseModels.GetOnlineStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetOnlineStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetOnlineStatusOperationResponse);
	}

	public getPlayerBan(requestData: GamePlayerModels.GetPlayerBanRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerBanOperationResponse);
	}

	public getPlayerCharacter(requestData: GamePlayerModels.GetPlayerCharacterRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerCharacterOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetPlayerCharacterOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerCharacterOperationResponse);
	}

	public getPlayerCurrency(requestData: GamePlayerModels.GetPlayerCurrencyRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetPlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerCurrencyOperationResponse);
	}

	public getPlayerData(requestData: GamePlayerModels.GetPlayerDataRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerDataOperationResponse);
	}

	public getPlayerFriend(requestData: GamePlayerModels.GetPlayerFriendRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetPlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerFriendOperationResponse);
	}

	public getPlayerGroup(requestData: GamePlayerModels.GetPlayerGroupRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetPlayerGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerGroupOperationResponse);
	}

	public getPlayerInformation(requestData: GamePlayerModels.GetPlayerInformationRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetPlayerInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerInformationOperationResponse);
	}

	public getPlayerInventory(requestData: GamePlayerModels.GetPlayerInventoryRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerInventoryOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetPlayerInventoryOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerInventoryOperationResponse);
	}

	public getPlayerStatistics(requestData: GamePlayerModels.GetPlayerStatisticsRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetPlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerStatisticsOperationResponse);
	}

	public getPlayersWithDisplayName(requestData: GamePlayerModels.GetPlayersWithDisplayNameRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayersWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetPlayersWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayersWithDisplayNameOperationResponse);
	}

	public getPlayersWithSegment(requestData: GamePlayerModels.GetPlayersWithSegmentRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayersWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetPlayersWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayersWithSegmentOperationResponse);
	}

	public getPlayersWithTag(requestData: GamePlayerModels.GetPlayersWithTagRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayersWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetPlayersWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayersWithTagOperationResponse);
	}

	public getSegment(requestData: GamePlayerModels.GetSegmentRequestData, onResponse: Action1<GamePlayerResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetSegmentOperationResponse);
	}

	public getStatisticsLeaderboardAroundPlayer(requestData: GamePlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData, onResponse: Action1<GamePlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	public getStatisticsLeaderboard(requestData: GamePlayerModels.GetStatisticsLeaderboardRequestData, onResponse: Action1<GamePlayerResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public getTag(requestData: GamePlayerModels.GetTagRequestData, onResponse: Action1<GamePlayerResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetTagOperationResponse);
	}

	public getTsCreate(requestData: GamePlayerModels.GetTsCreateRequestData, onResponse: Action1<GamePlayerResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetTsCreateOperationResponse);
	}

	public getTsLastLogin(requestData: GamePlayerModels.GetTsLastLoginRequestData, onResponse: Action1<GamePlayerResponseModels.GetTsLastLoginOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetTsLastLoginOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetTsLastLoginOperationResponse);
	}

	public grantGroup(requestData: GamePlayerModels.GrantGroupRequestData, onResponse: Action1<GamePlayerResponseModels.GrantGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GrantGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GrantGroupOperationResponse);
	}

	public grantPlayerCharacter(requestData: GamePlayerModels.GrantPlayerCharacterRequestData, onResponse: Action1<GamePlayerResponseModels.GrantPlayerCharacterOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GrantPlayerCharacterOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GrantPlayerCharacterOperationResponse);
	}

	public grantPlayerItem(requestData: GamePlayerModels.GrantPlayerItemRequestData, onResponse: Action1<GamePlayerResponseModels.GrantPlayerItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GrantPlayerItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GrantPlayerItemOperationResponse);
	}

	public joinGroup(requestData: GamePlayerModels.JoinGroupRequestData, onResponse: Action1<GamePlayerResponseModels.JoinGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.JoinGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.JoinGroupOperationResponse);
	}

	public leaveGroup(requestData: GamePlayerModels.LeaveGroupRequestData, onResponse: Action1<GamePlayerResponseModels.LeaveGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.LeaveGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.LeaveGroupOperationResponse);
	}

	public removePlayerCharacter(requestData: GamePlayerModels.RemovePlayerCharacterRequestData, onResponse: Action1<GamePlayerResponseModels.RemovePlayerCharacterOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.RemovePlayerCharacterOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemovePlayerCharacterOperationResponse);
	}

	public removePlayerFriend(requestData: GamePlayerModels.RemovePlayerFriendRequestData, onResponse: Action1<GamePlayerResponseModels.RemovePlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.RemovePlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemovePlayerFriendOperationResponse);
	}

	public removePlayerItem(requestData: GamePlayerModels.RemovePlayerItemRequestData, onResponse: Action1<GamePlayerResponseModels.RemovePlayerItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.RemovePlayerItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemovePlayerItemOperationResponse);
	}

	public removeSegment(requestData: GamePlayerModels.RemoveSegmentRequestData, onResponse: Action1<GamePlayerResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.RemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemoveSegmentOperationResponse);
	}

	public removeTag(requestData: GamePlayerModels.RemoveTagRequestData, onResponse: Action1<GamePlayerResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.RemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemoveTagOperationResponse);
	}

	public setAvatar(requestData: GamePlayerModels.SetAvatarRequestData, onResponse: Action1<GamePlayerResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.SetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetAvatarOperationResponse);
	}

	public setCountryCode(requestData: GamePlayerModels.SetCountryCodeRequestData, onResponse: Action1<GamePlayerResponseModels.SetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.SetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetCountryCodeOperationResponse);
	}

	public setCustomData(requestData: GamePlayerModels.SetCustomDataRequestData, onResponse: Action1<GamePlayerResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.SetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetCustomDataOperationResponse);
	}

	public setDisplayName(requestData: GamePlayerModels.SetDisplayNameRequestData, onResponse: Action1<GamePlayerResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.SetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetDisplayNameOperationResponse);
	}

	public setPlayerBan(requestData: GamePlayerModels.SetPlayerBanRequestData, onResponse: Action1<GamePlayerResponseModels.SetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.SetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetPlayerBanOperationResponse);
	}

	public setPlayerCurrency(requestData: GamePlayerModels.SetPlayerCurrencyRequestData, onResponse: Action1<GamePlayerResponseModels.SetPlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.SetPlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetPlayerCurrencyOperationResponse);
	}

	public setPlayerData(requestData: GamePlayerModels.SetPlayerDataRequestData, onResponse: Action1<GamePlayerResponseModels.SetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.SetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetPlayerDataOperationResponse);
	}

	public setPlayerStatistics(requestData: GamePlayerModels.SetPlayerStatisticsRequestData, onResponse: Action1<GamePlayerResponseModels.SetPlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.SetPlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetPlayerStatisticsOperationResponse);
	}

	public setTag(requestData: GamePlayerModels.SetTagRequestData, onResponse: Action1<GamePlayerResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.SetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetTagOperationResponse);
	}

}

export class ServerGamePlayerApi {
	public addPlayerFriend(requestData: GamePlayerModels.ServerAddPlayerFriendRequestData, onResponse: Action1<GamePlayerResponseModels.AddPlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerAddPlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.AddPlayerFriendOperationResponse);
	}

	public addSegment(requestData: GamePlayerModels.ServerAddSegmentRequestData, onResponse: Action1<GamePlayerResponseModels.AddSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerAddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.AddSegmentOperationResponse);
	}

	public getAvatar(requestData: GamePlayerModels.ServerGetAvatarRequestData, onResponse: Action1<GamePlayerResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetAvatarOperationResponse);
	}

	public getCountryCode(requestData: GamePlayerModels.ServerGetCountryCodeRequestData, onResponse: Action1<GamePlayerResponseModels.GetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCountryCodeOperationResponse);
	}

	public getCustomData(requestData: GamePlayerModels.ServerGetCustomDataRequestData, onResponse: Action1<GamePlayerResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCustomDataOperationResponse);
	}

	public getDisplayName(requestData: GamePlayerModels.ServerGetDisplayNameRequestData, onResponse: Action1<GamePlayerResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetDisplayNameOperationResponse);
	}

	public getFriendStatisticsLeaderboardAroundPlayer(requestData: GamePlayerModels.ServerGetFriendStatisticsLeaderboardAroundPlayerRequestData, onResponse: Action1<GamePlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetFriendStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	public getFriendStatisticsLeaderboard(requestData: GamePlayerModels.ServerGetFriendStatisticsLeaderboardRequestData, onResponse: Action1<GamePlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetFriendStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse);
	}

	public getIpAddressCreate(requestData: GamePlayerModels.ServerGetIpAddressCreateRequestData, onResponse: Action1<GamePlayerResponseModels.GetIpAddressCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetIpAddressCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetIpAddressCreateOperationResponse);
	}

	public getOnlineStatus(requestData: GamePlayerModels.ServerGetOnlineStatusRequestData, onResponse: Action1<GamePlayerResponseModels.GetOnlineStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetOnlineStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetOnlineStatusOperationResponse);
	}

	public getPlayerBan(requestData: GamePlayerModels.ServerGetPlayerBanRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerBanOperationResponse);
	}

	public getPlayerCharacter(requestData: GamePlayerModels.ServerGetPlayerCharacterRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerCharacterOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetPlayerCharacterOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerCharacterOperationResponse);
	}

	public getPlayerCurrency(requestData: GamePlayerModels.ServerGetPlayerCurrencyRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetPlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerCurrencyOperationResponse);
	}

	public getPlayerData(requestData: GamePlayerModels.ServerGetPlayerDataRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerDataOperationResponse);
	}

	public getPlayerFriend(requestData: GamePlayerModels.ServerGetPlayerFriendRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetPlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerFriendOperationResponse);
	}

	public getPlayerGroup(requestData: GamePlayerModels.ServerGetPlayerGroupRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetPlayerGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerGroupOperationResponse);
	}

	public getPlayerInformation(requestData: GamePlayerModels.ServerGetPlayerInformationRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetPlayerInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerInformationOperationResponse);
	}

	public getPlayerInventory(requestData: GamePlayerModels.ServerGetPlayerInventoryRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerInventoryOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetPlayerInventoryOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerInventoryOperationResponse);
	}

	public getPlayerStatistics(requestData: GamePlayerModels.ServerGetPlayerStatisticsRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetPlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerStatisticsOperationResponse);
	}

	public getPlayersWithDisplayName(requestData: GamePlayerModels.ServerGetPlayersWithDisplayNameRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayersWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetPlayersWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayersWithDisplayNameOperationResponse);
	}

	public getPlayersWithSegment(requestData: GamePlayerModels.ServerGetPlayersWithSegmentRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayersWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetPlayersWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayersWithSegmentOperationResponse);
	}

	public getPlayersWithTag(requestData: GamePlayerModels.ServerGetPlayersWithTagRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayersWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetPlayersWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayersWithTagOperationResponse);
	}

	public getSegment(requestData: GamePlayerModels.ServerGetSegmentRequestData, onResponse: Action1<GamePlayerResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetSegmentOperationResponse);
	}

	public getStatisticsLeaderboardAroundPlayer(requestData: GamePlayerModels.ServerGetStatisticsLeaderboardAroundPlayerRequestData, onResponse: Action1<GamePlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	public getStatisticsLeaderboard(requestData: GamePlayerModels.ServerGetStatisticsLeaderboardRequestData, onResponse: Action1<GamePlayerResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public getTag(requestData: GamePlayerModels.ServerGetTagRequestData, onResponse: Action1<GamePlayerResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetTagOperationResponse);
	}

	public getTsCreate(requestData: GamePlayerModels.ServerGetTsCreateRequestData, onResponse: Action1<GamePlayerResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetTsCreateOperationResponse);
	}

	public getTsLastLogin(requestData: GamePlayerModels.ServerGetTsLastLoginRequestData, onResponse: Action1<GamePlayerResponseModels.GetTsLastLoginOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetTsLastLoginOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetTsLastLoginOperationResponse);
	}

	public grantGroup(requestData: GamePlayerModels.ServerGrantGroupRequestData, onResponse: Action1<GamePlayerResponseModels.GrantGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGrantGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GrantGroupOperationResponse);
	}

	public grantPlayerCharacter(requestData: GamePlayerModels.ServerGrantPlayerCharacterRequestData, onResponse: Action1<GamePlayerResponseModels.GrantPlayerCharacterOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGrantPlayerCharacterOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GrantPlayerCharacterOperationResponse);
	}

	public grantPlayerItem(requestData: GamePlayerModels.ServerGrantPlayerItemRequestData, onResponse: Action1<GamePlayerResponseModels.GrantPlayerItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGrantPlayerItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GrantPlayerItemOperationResponse);
	}

	public joinGroup(requestData: GamePlayerModels.ServerJoinGroupRequestData, onResponse: Action1<GamePlayerResponseModels.JoinGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerJoinGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.JoinGroupOperationResponse);
	}

	public leaveGroup(requestData: GamePlayerModels.ServerLeaveGroupRequestData, onResponse: Action1<GamePlayerResponseModels.LeaveGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerLeaveGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.LeaveGroupOperationResponse);
	}

	public removePlayerCharacter(requestData: GamePlayerModels.ServerRemovePlayerCharacterRequestData, onResponse: Action1<GamePlayerResponseModels.RemovePlayerCharacterOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerRemovePlayerCharacterOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemovePlayerCharacterOperationResponse);
	}

	public removePlayerFriend(requestData: GamePlayerModels.ServerRemovePlayerFriendRequestData, onResponse: Action1<GamePlayerResponseModels.RemovePlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerRemovePlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemovePlayerFriendOperationResponse);
	}

	public removePlayerItem(requestData: GamePlayerModels.ServerRemovePlayerItemRequestData, onResponse: Action1<GamePlayerResponseModels.RemovePlayerItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerRemovePlayerItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemovePlayerItemOperationResponse);
	}

	public removeSegment(requestData: GamePlayerModels.ServerRemoveSegmentRequestData, onResponse: Action1<GamePlayerResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerRemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemoveSegmentOperationResponse);
	}

	public removeTag(requestData: GamePlayerModels.ServerRemoveTagRequestData, onResponse: Action1<GamePlayerResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerRemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemoveTagOperationResponse);
	}

	public setAvatar(requestData: GamePlayerModels.ServerSetAvatarRequestData, onResponse: Action1<GamePlayerResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerSetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetAvatarOperationResponse);
	}

	public setCountryCode(requestData: GamePlayerModels.ServerSetCountryCodeRequestData, onResponse: Action1<GamePlayerResponseModels.SetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerSetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetCountryCodeOperationResponse);
	}

	public setCustomData(requestData: GamePlayerModels.ServerSetCustomDataRequestData, onResponse: Action1<GamePlayerResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerSetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetCustomDataOperationResponse);
	}

	public setDisplayName(requestData: GamePlayerModels.ServerSetDisplayNameRequestData, onResponse: Action1<GamePlayerResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerSetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetDisplayNameOperationResponse);
	}

	public setPlayerBan(requestData: GamePlayerModels.ServerSetPlayerBanRequestData, onResponse: Action1<GamePlayerResponseModels.SetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerSetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetPlayerBanOperationResponse);
	}

	public setPlayerCurrency(requestData: GamePlayerModels.ServerSetPlayerCurrencyRequestData, onResponse: Action1<GamePlayerResponseModels.SetPlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerSetPlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetPlayerCurrencyOperationResponse);
	}

	public setPlayerData(requestData: GamePlayerModels.ServerSetPlayerDataRequestData, onResponse: Action1<GamePlayerResponseModels.SetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerSetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetPlayerDataOperationResponse);
	}

	public setPlayerStatistics(requestData: GamePlayerModels.ServerSetPlayerStatisticsRequestData, onResponse: Action1<GamePlayerResponseModels.SetPlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerSetPlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetPlayerStatisticsOperationResponse);
	}

	public setTag(requestData: GamePlayerModels.ServerSetTagRequestData, onResponse: Action1<GamePlayerResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerSetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetTagOperationResponse);
	}

}

export class AdminGamePlayerApi {
	public addPlayerFriend(requestData: GamePlayerModels.AdminAddPlayerFriendRequestData, onResponse: Action1<GamePlayerResponseModels.AddPlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminAddPlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.AddPlayerFriendOperationResponse);
	}

	public addSegment(requestData: GamePlayerModels.AdminAddSegmentRequestData, onResponse: Action1<GamePlayerResponseModels.AddSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminAddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.AddSegmentOperationResponse);
	}

	public getAvatar(requestData: GamePlayerModels.AdminGetAvatarRequestData, onResponse: Action1<GamePlayerResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetAvatarOperationResponse);
	}

	public getCountryCode(requestData: GamePlayerModels.AdminGetCountryCodeRequestData, onResponse: Action1<GamePlayerResponseModels.GetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCountryCodeOperationResponse);
	}

	public getCustomData(requestData: GamePlayerModels.AdminGetCustomDataRequestData, onResponse: Action1<GamePlayerResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCustomDataOperationResponse);
	}

	public getDisplayName(requestData: GamePlayerModels.AdminGetDisplayNameRequestData, onResponse: Action1<GamePlayerResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetDisplayNameOperationResponse);
	}

	public getFriendStatisticsLeaderboardAroundPlayer(requestData: GamePlayerModels.AdminGetFriendStatisticsLeaderboardAroundPlayerRequestData, onResponse: Action1<GamePlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetFriendStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	public getFriendStatisticsLeaderboard(requestData: GamePlayerModels.AdminGetFriendStatisticsLeaderboardRequestData, onResponse: Action1<GamePlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetFriendStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse);
	}

	public getIpAddressCreate(requestData: GamePlayerModels.AdminGetIpAddressCreateRequestData, onResponse: Action1<GamePlayerResponseModels.GetIpAddressCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetIpAddressCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetIpAddressCreateOperationResponse);
	}

	public getOnlineStatus(requestData: GamePlayerModels.AdminGetOnlineStatusRequestData, onResponse: Action1<GamePlayerResponseModels.GetOnlineStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetOnlineStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetOnlineStatusOperationResponse);
	}

	public getPlayerBan(requestData: GamePlayerModels.AdminGetPlayerBanRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerBanOperationResponse);
	}

	public getPlayerCharacter(requestData: GamePlayerModels.AdminGetPlayerCharacterRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerCharacterOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetPlayerCharacterOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerCharacterOperationResponse);
	}

	public getPlayerCurrency(requestData: GamePlayerModels.AdminGetPlayerCurrencyRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetPlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerCurrencyOperationResponse);
	}

	public getPlayerData(requestData: GamePlayerModels.AdminGetPlayerDataRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerDataOperationResponse);
	}

	public getPlayerFriend(requestData: GamePlayerModels.AdminGetPlayerFriendRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetPlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerFriendOperationResponse);
	}

	public getPlayerGroup(requestData: GamePlayerModels.AdminGetPlayerGroupRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetPlayerGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerGroupOperationResponse);
	}

	public getPlayerInformation(requestData: GamePlayerModels.AdminGetPlayerInformationRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetPlayerInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerInformationOperationResponse);
	}

	public getPlayerInventory(requestData: GamePlayerModels.AdminGetPlayerInventoryRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerInventoryOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetPlayerInventoryOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerInventoryOperationResponse);
	}

	public getPlayerStatistics(requestData: GamePlayerModels.AdminGetPlayerStatisticsRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetPlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerStatisticsOperationResponse);
	}

	public getPlayersWithDisplayName(requestData: GamePlayerModels.AdminGetPlayersWithDisplayNameRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayersWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetPlayersWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayersWithDisplayNameOperationResponse);
	}

	public getPlayersWithSegment(requestData: GamePlayerModels.AdminGetPlayersWithSegmentRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayersWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetPlayersWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayersWithSegmentOperationResponse);
	}

	public getPlayersWithTag(requestData: GamePlayerModels.AdminGetPlayersWithTagRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayersWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetPlayersWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayersWithTagOperationResponse);
	}

	public getSegment(requestData: GamePlayerModels.AdminGetSegmentRequestData, onResponse: Action1<GamePlayerResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetSegmentOperationResponse);
	}

	public getStatisticsLeaderboardAroundPlayer(requestData: GamePlayerModels.AdminGetStatisticsLeaderboardAroundPlayerRequestData, onResponse: Action1<GamePlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	public getStatisticsLeaderboard(requestData: GamePlayerModels.AdminGetStatisticsLeaderboardRequestData, onResponse: Action1<GamePlayerResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public getTag(requestData: GamePlayerModels.AdminGetTagRequestData, onResponse: Action1<GamePlayerResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetTagOperationResponse);
	}

	public getTsCreate(requestData: GamePlayerModels.AdminGetTsCreateRequestData, onResponse: Action1<GamePlayerResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetTsCreateOperationResponse);
	}

	public getTsLastLogin(requestData: GamePlayerModels.AdminGetTsLastLoginRequestData, onResponse: Action1<GamePlayerResponseModels.GetTsLastLoginOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetTsLastLoginOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetTsLastLoginOperationResponse);
	}

	public grantGroup(requestData: GamePlayerModels.AdminGrantGroupRequestData, onResponse: Action1<GamePlayerResponseModels.GrantGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGrantGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GrantGroupOperationResponse);
	}

	public grantPlayerCharacter(requestData: GamePlayerModels.AdminGrantPlayerCharacterRequestData, onResponse: Action1<GamePlayerResponseModels.GrantPlayerCharacterOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGrantPlayerCharacterOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GrantPlayerCharacterOperationResponse);
	}

	public grantPlayerItem(requestData: GamePlayerModels.AdminGrantPlayerItemRequestData, onResponse: Action1<GamePlayerResponseModels.GrantPlayerItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGrantPlayerItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GrantPlayerItemOperationResponse);
	}

	public joinGroup(requestData: GamePlayerModels.AdminJoinGroupRequestData, onResponse: Action1<GamePlayerResponseModels.JoinGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminJoinGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.JoinGroupOperationResponse);
	}

	public leaveGroup(requestData: GamePlayerModels.AdminLeaveGroupRequestData, onResponse: Action1<GamePlayerResponseModels.LeaveGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminLeaveGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.LeaveGroupOperationResponse);
	}

	public removePlayerCharacter(requestData: GamePlayerModels.AdminRemovePlayerCharacterRequestData, onResponse: Action1<GamePlayerResponseModels.RemovePlayerCharacterOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminRemovePlayerCharacterOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemovePlayerCharacterOperationResponse);
	}

	public removePlayerFriend(requestData: GamePlayerModels.AdminRemovePlayerFriendRequestData, onResponse: Action1<GamePlayerResponseModels.RemovePlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminRemovePlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemovePlayerFriendOperationResponse);
	}

	public removePlayerItem(requestData: GamePlayerModels.AdminRemovePlayerItemRequestData, onResponse: Action1<GamePlayerResponseModels.RemovePlayerItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminRemovePlayerItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemovePlayerItemOperationResponse);
	}

	public removeSegment(requestData: GamePlayerModels.AdminRemoveSegmentRequestData, onResponse: Action1<GamePlayerResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminRemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemoveSegmentOperationResponse);
	}

	public removeTag(requestData: GamePlayerModels.AdminRemoveTagRequestData, onResponse: Action1<GamePlayerResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminRemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemoveTagOperationResponse);
	}

	public setAvatar(requestData: GamePlayerModels.AdminSetAvatarRequestData, onResponse: Action1<GamePlayerResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminSetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetAvatarOperationResponse);
	}

	public setCountryCode(requestData: GamePlayerModels.AdminSetCountryCodeRequestData, onResponse: Action1<GamePlayerResponseModels.SetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminSetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetCountryCodeOperationResponse);
	}

	public setCustomData(requestData: GamePlayerModels.AdminSetCustomDataRequestData, onResponse: Action1<GamePlayerResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminSetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetCustomDataOperationResponse);
	}

	public setDisplayName(requestData: GamePlayerModels.AdminSetDisplayNameRequestData, onResponse: Action1<GamePlayerResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminSetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetDisplayNameOperationResponse);
	}

	public setPlayerBan(requestData: GamePlayerModels.AdminSetPlayerBanRequestData, onResponse: Action1<GamePlayerResponseModels.SetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminSetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetPlayerBanOperationResponse);
	}

	public setPlayerCurrency(requestData: GamePlayerModels.AdminSetPlayerCurrencyRequestData, onResponse: Action1<GamePlayerResponseModels.SetPlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminSetPlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetPlayerCurrencyOperationResponse);
	}

	public setPlayerData(requestData: GamePlayerModels.AdminSetPlayerDataRequestData, onResponse: Action1<GamePlayerResponseModels.SetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminSetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetPlayerDataOperationResponse);
	}

	public setPlayerStatistics(requestData: GamePlayerModels.AdminSetPlayerStatisticsRequestData, onResponse: Action1<GamePlayerResponseModels.SetPlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminSetPlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetPlayerStatisticsOperationResponse);
	}

	public setTag(requestData: GamePlayerModels.AdminSetTagRequestData, onResponse: Action1<GamePlayerResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminSetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetTagOperationResponse);
	}

}

