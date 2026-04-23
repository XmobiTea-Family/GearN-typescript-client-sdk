import { GNNetwork } from "./GNNetwork";
import { Action1 } from "./common/Action1";
import { GNHashtable } from "./common/GNData";
import { OperationRequest } from "./entity/OperationRequest";
import { GamePlayerModels } from "./entity/models/GamePlayerModels";
import { GamePlayerRequestModels } from "./entity/models/GamePlayerRequestModels";
import { GamePlayerResponseModels } from "./entity/models/GamePlayerResponseModels";

/**
 * Exposes client-scoped game-player operations through `GNNetwork.gamePlayer`.
 *
 * Use this namespace from player-facing code when working with the authenticated user's gameplay profile over HTTP.
 */
export class GamePlayerApi {
	/** Server-scoped game-player operations for trusted backend callers. */
	public server: ServerGamePlayerApi = new ServerGamePlayerApi();

	/** Admin-scoped game-player operations for dashboard, GM, or backoffice callers. */
	public admin: AdminGamePlayerApi = new AdminGamePlayerApi();

	/**
	 * Sends the addPlayerFriend operation and returns the typed response via callback.
	 */
	public addPlayerFriend(requestData: GamePlayerModels.AddPlayerFriendRequestData, onResponse: Action1<GamePlayerResponseModels.AddPlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AddPlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.AddPlayerFriendOperationResponse);
	}

	/**
	 * Sends the addPlayerFriend operation and resolves with the typed response.
	 */
	public async addPlayerFriendAsync(requestData: GamePlayerModels.AddPlayerFriendRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.AddPlayerFriendOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AddPlayerFriendOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.AddPlayerFriendOperationResponse);
	}

	/**
	 * Sends the addSegment operation and returns the typed response via callback.
	 */
	public addSegment(requestData: GamePlayerModels.AddSegmentRequestData, onResponse: Action1<GamePlayerResponseModels.AddSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.AddSegmentOperationResponse);
	}

	/**
	 * Sends the addSegment operation and resolves with the typed response.
	 */
	public async addSegmentAsync(requestData: GamePlayerModels.AddSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.AddSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AddSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.AddSegmentOperationResponse);
	}

	/**
	 * Sends the getAvatar operation and returns the typed response via callback.
	 */
	public getAvatar(requestData: GamePlayerModels.GetAvatarRequestData, onResponse: Action1<GamePlayerResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetAvatarOperationResponse);
	}

	/**
	 * Sends the getAvatar operation and resolves with the typed response.
	 */
	public async getAvatarAsync(requestData: GamePlayerModels.GetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.GetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetAvatarOperationResponse);
	}

	/**
	 * Sends the getCountryCode operation and returns the typed response via callback.
	 */
	public getCountryCode(requestData: GamePlayerModels.GetCountryCodeRequestData, onResponse: Action1<GamePlayerResponseModels.GetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCountryCodeOperationResponse);
	}

	/**
	 * Sends the getCountryCode operation and resolves with the typed response.
	 */
	public async getCountryCodeAsync(requestData: GamePlayerModels.GetCountryCodeRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetCountryCodeOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.GetCountryCodeOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCountryCodeOperationResponse);
	}

	/**
	 * Sends the getCustomData operation and returns the typed response via callback.
	 */
	public getCustomData(requestData: GamePlayerModels.GetCustomDataRequestData, onResponse: Action1<GamePlayerResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCustomDataOperationResponse);
	}

	/**
	 * Sends the getCustomData operation and resolves with the typed response.
	 */
	public async getCustomDataAsync(requestData: GamePlayerModels.GetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.GetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCustomDataOperationResponse);
	}

	/**
	 * Sends the getDisplayName operation and returns the typed response via callback.
	 */
	public getDisplayName(requestData: GamePlayerModels.GetDisplayNameRequestData, onResponse: Action1<GamePlayerResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetDisplayNameOperationResponse);
	}

	/**
	 * Sends the getDisplayName operation and resolves with the typed response.
	 */
	public async getDisplayNameAsync(requestData: GamePlayerModels.GetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.GetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetDisplayNameOperationResponse);
	}

	/**
	 * Sends the getFriendStatisticsLeaderboardAroundPlayer operation and returns the typed response via callback.
	 */
	public getFriendStatisticsLeaderboardAroundPlayer(requestData: GamePlayerModels.GetFriendStatisticsLeaderboardAroundPlayerRequestData, onResponse: Action1<GamePlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetFriendStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	/**
	 * Sends the getFriendStatisticsLeaderboardAroundPlayer operation and resolves with the typed response.
	 */
	public async getFriendStatisticsLeaderboardAroundPlayerAsync(requestData: GamePlayerModels.GetFriendStatisticsLeaderboardAroundPlayerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.GetFriendStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	/**
	 * Sends the getFriendStatisticsLeaderboard operation and returns the typed response via callback.
	 */
	public getFriendStatisticsLeaderboard(requestData: GamePlayerModels.GetFriendStatisticsLeaderboardRequestData, onResponse: Action1<GamePlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetFriendStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the getFriendStatisticsLeaderboard operation and resolves with the typed response.
	 */
	public async getFriendStatisticsLeaderboardAsync(requestData: GamePlayerModels.GetFriendStatisticsLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.GetFriendStatisticsLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the getIpAddressCreate operation and returns the typed response via callback.
	 */
	public getIpAddressCreate(requestData: GamePlayerModels.GetIpAddressCreateRequestData, onResponse: Action1<GamePlayerResponseModels.GetIpAddressCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetIpAddressCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetIpAddressCreateOperationResponse);
	}

	/**
	 * Sends the getIpAddressCreate operation and resolves with the typed response.
	 */
	public async getIpAddressCreateAsync(requestData: GamePlayerModels.GetIpAddressCreateRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetIpAddressCreateOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.GetIpAddressCreateOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetIpAddressCreateOperationResponse);
	}

	/**
	 * Sends the getOnlineStatus operation and returns the typed response via callback.
	 */
	public getOnlineStatus(requestData: GamePlayerModels.GetOnlineStatusRequestData, onResponse: Action1<GamePlayerResponseModels.GetOnlineStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetOnlineStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetOnlineStatusOperationResponse);
	}

	/**
	 * Sends the getOnlineStatus operation and resolves with the typed response.
	 */
	public async getOnlineStatusAsync(requestData: GamePlayerModels.GetOnlineStatusRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetOnlineStatusOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.GetOnlineStatusOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetOnlineStatusOperationResponse);
	}

	/**
	 * Sends the getPlayerBan operation and returns the typed response via callback.
	 */
	public getPlayerBan(requestData: GamePlayerModels.GetPlayerBanRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerBanOperationResponse);
	}

	/**
	 * Sends the getPlayerBan operation and resolves with the typed response.
	 */
	public async getPlayerBanAsync(requestData: GamePlayerModels.GetPlayerBanRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayerBanOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.GetPlayerBanOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerBanOperationResponse);
	}

	/**
	 * Sends the getPlayerCharacter operation and returns the typed response via callback.
	 */
	public getPlayerCharacter(requestData: GamePlayerModels.GetPlayerCharacterRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerCharacterOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetPlayerCharacterOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerCharacterOperationResponse);
	}

	/**
	 * Sends the getPlayerCharacter operation and resolves with the typed response.
	 */
	public async getPlayerCharacterAsync(requestData: GamePlayerModels.GetPlayerCharacterRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayerCharacterOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.GetPlayerCharacterOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerCharacterOperationResponse);
	}

	/**
	 * Sends the getPlayerCurrency operation and returns the typed response via callback.
	 */
	public getPlayerCurrency(requestData: GamePlayerModels.GetPlayerCurrencyRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetPlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerCurrencyOperationResponse);
	}

	/**
	 * Sends the getPlayerCurrency operation and resolves with the typed response.
	 */
	public async getPlayerCurrencyAsync(requestData: GamePlayerModels.GetPlayerCurrencyRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayerCurrencyOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.GetPlayerCurrencyOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerCurrencyOperationResponse);
	}

	/**
	 * Sends the getPlayerData operation and returns the typed response via callback.
	 */
	public getPlayerData(requestData: GamePlayerModels.GetPlayerDataRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerDataOperationResponse);
	}

	/**
	 * Sends the getPlayerData operation and resolves with the typed response.
	 */
	public async getPlayerDataAsync(requestData: GamePlayerModels.GetPlayerDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayerDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.GetPlayerDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerDataOperationResponse);
	}

	/**
	 * Sends the getPlayerFriend operation and returns the typed response via callback.
	 */
	public getPlayerFriend(requestData: GamePlayerModels.GetPlayerFriendRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetPlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerFriendOperationResponse);
	}

	/**
	 * Sends the getPlayerFriend operation and resolves with the typed response.
	 */
	public async getPlayerFriendAsync(requestData: GamePlayerModels.GetPlayerFriendRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayerFriendOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.GetPlayerFriendOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerFriendOperationResponse);
	}

	/**
	 * Sends the getPlayerGroup operation and returns the typed response via callback.
	 */
	public getPlayerGroup(requestData: GamePlayerModels.GetPlayerGroupRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetPlayerGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerGroupOperationResponse);
	}

	/**
	 * Sends the getPlayerGroup operation and resolves with the typed response.
	 */
	public async getPlayerGroupAsync(requestData: GamePlayerModels.GetPlayerGroupRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayerGroupOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.GetPlayerGroupOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerGroupOperationResponse);
	}

	/**
	 * Sends the getPlayerInformation operation and returns the typed response via callback.
	 */
	public getPlayerInformation(requestData: GamePlayerModels.GetPlayerInformationRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetPlayerInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerInformationOperationResponse);
	}

	/**
	 * Sends the getPlayerInformation operation and resolves with the typed response.
	 */
	public async getPlayerInformationAsync(requestData: GamePlayerModels.GetPlayerInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayerInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.GetPlayerInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerInformationOperationResponse);
	}

	/**
	 * Sends the getPlayerInventory operation and returns the typed response via callback.
	 */
	public getPlayerInventory(requestData: GamePlayerModels.GetPlayerInventoryRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerInventoryOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetPlayerInventoryOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerInventoryOperationResponse);
	}

	/**
	 * Sends the getPlayerInventory operation and resolves with the typed response.
	 */
	public async getPlayerInventoryAsync(requestData: GamePlayerModels.GetPlayerInventoryRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayerInventoryOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.GetPlayerInventoryOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerInventoryOperationResponse);
	}

	/**
	 * Sends the getPlayerStatistics operation and returns the typed response via callback.
	 */
	public getPlayerStatistics(requestData: GamePlayerModels.GetPlayerStatisticsRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetPlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerStatisticsOperationResponse);
	}

	/**
	 * Sends the getPlayerStatistics operation and resolves with the typed response.
	 */
	public async getPlayerStatisticsAsync(requestData: GamePlayerModels.GetPlayerStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayerStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.GetPlayerStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerStatisticsOperationResponse);
	}

	/**
	 * Sends the getPlayersWithDisplayName operation and returns the typed response via callback.
	 */
	public getPlayersWithDisplayName(requestData: GamePlayerModels.GetPlayersWithDisplayNameRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayersWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetPlayersWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayersWithDisplayNameOperationResponse);
	}

	/**
	 * Sends the getPlayersWithDisplayName operation and resolves with the typed response.
	 */
	public async getPlayersWithDisplayNameAsync(requestData: GamePlayerModels.GetPlayersWithDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayersWithDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.GetPlayersWithDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayersWithDisplayNameOperationResponse);
	}

	/**
	 * Sends the getPlayersWithSegment operation and returns the typed response via callback.
	 */
	public getPlayersWithSegment(requestData: GamePlayerModels.GetPlayersWithSegmentRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayersWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetPlayersWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayersWithSegmentOperationResponse);
	}

	/**
	 * Sends the getPlayersWithSegment operation and resolves with the typed response.
	 */
	public async getPlayersWithSegmentAsync(requestData: GamePlayerModels.GetPlayersWithSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayersWithSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.GetPlayersWithSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayersWithSegmentOperationResponse);
	}

	/**
	 * Sends the getPlayersWithTag operation and returns the typed response via callback.
	 */
	public getPlayersWithTag(requestData: GamePlayerModels.GetPlayersWithTagRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayersWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetPlayersWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayersWithTagOperationResponse);
	}

	/**
	 * Sends the getPlayersWithTag operation and resolves with the typed response.
	 */
	public async getPlayersWithTagAsync(requestData: GamePlayerModels.GetPlayersWithTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayersWithTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.GetPlayersWithTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayersWithTagOperationResponse);
	}

	/**
	 * Sends the getSegment operation and returns the typed response via callback.
	 */
	public getSegment(requestData: GamePlayerModels.GetSegmentRequestData, onResponse: Action1<GamePlayerResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetSegmentOperationResponse);
	}

	/**
	 * Sends the getSegment operation and resolves with the typed response.
	 */
	public async getSegmentAsync(requestData: GamePlayerModels.GetSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.GetSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetSegmentOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboardAroundPlayer operation and returns the typed response via callback.
	 */
	public getStatisticsLeaderboardAroundPlayer(requestData: GamePlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData, onResponse: Action1<GamePlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboardAroundPlayer operation and resolves with the typed response.
	 */
	public async getStatisticsLeaderboardAroundPlayerAsync(requestData: GamePlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.GetStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboard operation and returns the typed response via callback.
	 */
	public getStatisticsLeaderboard(requestData: GamePlayerModels.GetStatisticsLeaderboardRequestData, onResponse: Action1<GamePlayerResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboard operation and resolves with the typed response.
	 */
	public async getStatisticsLeaderboardAsync(requestData: GamePlayerModels.GetStatisticsLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetStatisticsLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.GetStatisticsLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the getTag operation and returns the typed response via callback.
	 */
	public getTag(requestData: GamePlayerModels.GetTagRequestData, onResponse: Action1<GamePlayerResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetTagOperationResponse);
	}

	/**
	 * Sends the getTag operation and resolves with the typed response.
	 */
	public async getTagAsync(requestData: GamePlayerModels.GetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.GetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetTagOperationResponse);
	}

	/**
	 * Sends the getTsCreate operation and returns the typed response via callback.
	 */
	public getTsCreate(requestData: GamePlayerModels.GetTsCreateRequestData, onResponse: Action1<GamePlayerResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetTsCreateOperationResponse);
	}

	/**
	 * Sends the getTsCreate operation and resolves with the typed response.
	 */
	public async getTsCreateAsync(requestData: GamePlayerModels.GetTsCreateRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetTsCreateOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.GetTsCreateOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetTsCreateOperationResponse);
	}

	/**
	 * Sends the getTsLastLogin operation and returns the typed response via callback.
	 */
	public getTsLastLogin(requestData: GamePlayerModels.GetTsLastLoginRequestData, onResponse: Action1<GamePlayerResponseModels.GetTsLastLoginOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetTsLastLoginOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetTsLastLoginOperationResponse);
	}

	/**
	 * Sends the getTsLastLogin operation and resolves with the typed response.
	 */
	public async getTsLastLoginAsync(requestData: GamePlayerModels.GetTsLastLoginRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetTsLastLoginOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.GetTsLastLoginOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetTsLastLoginOperationResponse);
	}

	/**
	 * Sends the createGroup operation and returns the typed response via callback.
	 */
	public createGroup(requestData: GamePlayerModels.CreateGroupRequestData, onResponse: Action1<GamePlayerResponseModels.CreateGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.CreateGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.CreateGroupOperationResponse);
	}

	/**
	 * Sends the createGroup operation and resolves with the typed response.
	 */
	public async createGroupAsync(requestData: GamePlayerModels.CreateGroupRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.CreateGroupOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.CreateGroupOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.CreateGroupOperationResponse);
	}

	/**
	 * Sends the createPlayerCharacter operation and returns the typed response via callback.
	 */
	public createPlayerCharacter(requestData: GamePlayerModels.CreatePlayerCharacterRequestData, onResponse: Action1<GamePlayerResponseModels.CreatePlayerCharacterOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.CreatePlayerCharacterOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.CreatePlayerCharacterOperationResponse);
	}

	/**
	 * Sends the createPlayerCharacter operation and resolves with the typed response.
	 */
	public async createPlayerCharacterAsync(requestData: GamePlayerModels.CreatePlayerCharacterRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.CreatePlayerCharacterOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.CreatePlayerCharacterOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.CreatePlayerCharacterOperationResponse);
	}

	/**
	 * Sends the createPlayerItem operation and returns the typed response via callback.
	 */
	public createPlayerItem(requestData: GamePlayerModels.CreatePlayerItemRequestData, onResponse: Action1<GamePlayerResponseModels.CreatePlayerItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.CreatePlayerItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.CreatePlayerItemOperationResponse);
	}

	/**
	 * Sends the createPlayerItem operation and resolves with the typed response.
	 */
	public async createPlayerItemAsync(requestData: GamePlayerModels.CreatePlayerItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.CreatePlayerItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.CreatePlayerItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.CreatePlayerItemOperationResponse);
	}

	/**
	 * Sends the joinGroup operation and returns the typed response via callback.
	 */
	public joinGroup(requestData: GamePlayerModels.JoinGroupRequestData, onResponse: Action1<GamePlayerResponseModels.JoinGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.JoinGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.JoinGroupOperationResponse);
	}

	/**
	 * Sends the joinGroup operation and resolves with the typed response.
	 */
	public async joinGroupAsync(requestData: GamePlayerModels.JoinGroupRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.JoinGroupOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.JoinGroupOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.JoinGroupOperationResponse);
	}

	/**
	 * Sends the leaveGroup operation and returns the typed response via callback.
	 */
	public leaveGroup(requestData: GamePlayerModels.LeaveGroupRequestData, onResponse: Action1<GamePlayerResponseModels.LeaveGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.LeaveGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.LeaveGroupOperationResponse);
	}

	/**
	 * Sends the leaveGroup operation and resolves with the typed response.
	 */
	public async leaveGroupAsync(requestData: GamePlayerModels.LeaveGroupRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.LeaveGroupOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.LeaveGroupOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.LeaveGroupOperationResponse);
	}

	/**
	 * Sends the removePlayerCharacter operation and returns the typed response via callback.
	 */
	public removePlayerCharacter(requestData: GamePlayerModels.RemovePlayerCharacterRequestData, onResponse: Action1<GamePlayerResponseModels.RemovePlayerCharacterOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.RemovePlayerCharacterOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemovePlayerCharacterOperationResponse);
	}

	/**
	 * Sends the removePlayerCharacter operation and resolves with the typed response.
	 */
	public async removePlayerCharacterAsync(requestData: GamePlayerModels.RemovePlayerCharacterRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.RemovePlayerCharacterOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.RemovePlayerCharacterOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemovePlayerCharacterOperationResponse);
	}

	/**
	 * Sends the removePlayerFriend operation and returns the typed response via callback.
	 */
	public removePlayerFriend(requestData: GamePlayerModels.RemovePlayerFriendRequestData, onResponse: Action1<GamePlayerResponseModels.RemovePlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.RemovePlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemovePlayerFriendOperationResponse);
	}

	/**
	 * Sends the removePlayerFriend operation and resolves with the typed response.
	 */
	public async removePlayerFriendAsync(requestData: GamePlayerModels.RemovePlayerFriendRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.RemovePlayerFriendOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.RemovePlayerFriendOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemovePlayerFriendOperationResponse);
	}

	/**
	 * Sends the removePlayerItem operation and returns the typed response via callback.
	 */
	public removePlayerItem(requestData: GamePlayerModels.RemovePlayerItemRequestData, onResponse: Action1<GamePlayerResponseModels.RemovePlayerItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.RemovePlayerItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemovePlayerItemOperationResponse);
	}

	/**
	 * Sends the removePlayerItem operation and resolves with the typed response.
	 */
	public async removePlayerItemAsync(requestData: GamePlayerModels.RemovePlayerItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.RemovePlayerItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.RemovePlayerItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemovePlayerItemOperationResponse);
	}

	/**
	 * Sends the removeSegment operation and returns the typed response via callback.
	 */
	public removeSegment(requestData: GamePlayerModels.RemoveSegmentRequestData, onResponse: Action1<GamePlayerResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.RemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemoveSegmentOperationResponse);
	}

	/**
	 * Sends the removeSegment operation and resolves with the typed response.
	 */
	public async removeSegmentAsync(requestData: GamePlayerModels.RemoveSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.RemoveSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.RemoveSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemoveSegmentOperationResponse);
	}

	/**
	 * Sends the removeTag operation and returns the typed response via callback.
	 */
	public removeTag(requestData: GamePlayerModels.RemoveTagRequestData, onResponse: Action1<GamePlayerResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.RemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemoveTagOperationResponse);
	}

	/**
	 * Sends the removeTag operation and resolves with the typed response.
	 */
	public async removeTagAsync(requestData: GamePlayerModels.RemoveTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.RemoveTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.RemoveTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemoveTagOperationResponse);
	}

	/**
	 * Sends the setAvatar operation and returns the typed response via callback.
	 */
	public setAvatar(requestData: GamePlayerModels.SetAvatarRequestData, onResponse: Action1<GamePlayerResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.SetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetAvatarOperationResponse);
	}

	/**
	 * Sends the setAvatar operation and resolves with the typed response.
	 */
	public async setAvatarAsync(requestData: GamePlayerModels.SetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.SetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.SetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetAvatarOperationResponse);
	}

	/**
	 * Sends the setCountryCode operation and returns the typed response via callback.
	 */
	public setCountryCode(requestData: GamePlayerModels.SetCountryCodeRequestData, onResponse: Action1<GamePlayerResponseModels.SetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.SetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetCountryCodeOperationResponse);
	}

	/**
	 * Sends the setCountryCode operation and resolves with the typed response.
	 */
	public async setCountryCodeAsync(requestData: GamePlayerModels.SetCountryCodeRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.SetCountryCodeOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.SetCountryCodeOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetCountryCodeOperationResponse);
	}

	/**
	 * Sends the setCustomData operation and returns the typed response via callback.
	 */
	public setCustomData(requestData: GamePlayerModels.SetCustomDataRequestData, onResponse: Action1<GamePlayerResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.SetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetCustomDataOperationResponse);
	}

	/**
	 * Sends the setCustomData operation and resolves with the typed response.
	 */
	public async setCustomDataAsync(requestData: GamePlayerModels.SetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.SetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.SetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetCustomDataOperationResponse);
	}

	/**
	 * Sends the setDisplayName operation and returns the typed response via callback.
	 */
	public setDisplayName(requestData: GamePlayerModels.SetDisplayNameRequestData, onResponse: Action1<GamePlayerResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.SetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetDisplayNameOperationResponse);
	}

	/**
	 * Sends the setDisplayName operation and resolves with the typed response.
	 */
	public async setDisplayNameAsync(requestData: GamePlayerModels.SetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.SetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.SetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetDisplayNameOperationResponse);
	}

	/**
	 * Sends the setPlayerBan operation and returns the typed response via callback.
	 */
	public setPlayerBan(requestData: GamePlayerModels.SetPlayerBanRequestData, onResponse: Action1<GamePlayerResponseModels.SetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.SetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetPlayerBanOperationResponse);
	}

	/**
	 * Sends the setPlayerBan operation and resolves with the typed response.
	 */
	public async setPlayerBanAsync(requestData: GamePlayerModels.SetPlayerBanRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.SetPlayerBanOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.SetPlayerBanOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetPlayerBanOperationResponse);
	}

	/**
	 * Sends the changePlayerCurrency operation and returns the typed response via callback.
	 */
	public changePlayerCurrency(requestData: GamePlayerModels.ChangePlayerCurrencyRequestData, onResponse: Action1<GamePlayerResponseModels.ChangePlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ChangePlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.ChangePlayerCurrencyOperationResponse);
	}

	/**
	 * Sends the changePlayerCurrency operation and resolves with the typed response.
	 */
	public async changePlayerCurrencyAsync(requestData: GamePlayerModels.ChangePlayerCurrencyRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.ChangePlayerCurrencyOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ChangePlayerCurrencyOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.ChangePlayerCurrencyOperationResponse);
	}

	/**
	 * Sends the setPlayerData operation and returns the typed response via callback.
	 */
	public setPlayerData(requestData: GamePlayerModels.SetPlayerDataRequestData, onResponse: Action1<GamePlayerResponseModels.SetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.SetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetPlayerDataOperationResponse);
	}

	/**
	 * Sends the setPlayerData operation and resolves with the typed response.
	 */
	public async setPlayerDataAsync(requestData: GamePlayerModels.SetPlayerDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.SetPlayerDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.SetPlayerDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetPlayerDataOperationResponse);
	}

	/**
	 * Sends the changePlayerStatistics operation and returns the typed response via callback.
	 */
	public changePlayerStatistics(requestData: GamePlayerModels.ChangePlayerStatisticsRequestData, onResponse: Action1<GamePlayerResponseModels.ChangePlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ChangePlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.ChangePlayerStatisticsOperationResponse);
	}

	/**
	 * Sends the changePlayerStatistics operation and resolves with the typed response.
	 */
	public async changePlayerStatisticsAsync(requestData: GamePlayerModels.ChangePlayerStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.ChangePlayerStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ChangePlayerStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.ChangePlayerStatisticsOperationResponse);
	}

	/**
	 * Sends the setTag operation and returns the typed response via callback.
	 */
	public setTag(requestData: GamePlayerModels.SetTagRequestData, onResponse: Action1<GamePlayerResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.SetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetTagOperationResponse);
	}

	/**
	 * Sends the setTag operation and resolves with the typed response.
	 */
	public async setTagAsync(requestData: GamePlayerModels.SetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.SetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.SetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetTagOperationResponse);
	}

	/**
	 * Sends the getCurrencyLeaderboard operation and returns the typed response via callback.
	 */
	public getCurrencyLeaderboard(requestData: GamePlayerModels.GetCurrencyLeaderboardRequestData, onResponse: Action1<GamePlayerResponseModels.GetCurrencyLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetCurrencyLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCurrencyLeaderboardOperationResponse);
	}

	/**
	 * Sends the getCurrencyLeaderboard operation and resolves with the typed response.
	 */
	public async getCurrencyLeaderboardAsync(requestData: GamePlayerModels.GetCurrencyLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetCurrencyLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.GetCurrencyLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCurrencyLeaderboardOperationResponse);
	}

	/**
	 * Sends the getLastLoginLeaderboard operation and returns the typed response via callback.
	 */
	public getLastLoginLeaderboard(requestData: GamePlayerModels.GetLastLoginLeaderboardRequestData, onResponse: Action1<GamePlayerResponseModels.GetLastLoginLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetLastLoginLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetLastLoginLeaderboardOperationResponse);
	}

	/**
	 * Sends the getLastLoginLeaderboard operation and resolves with the typed response.
	 */
	public async getLastLoginLeaderboardAsync(requestData: GamePlayerModels.GetLastLoginLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetLastLoginLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.GetLastLoginLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetLastLoginLeaderboardOperationResponse);
	}

	/**
	 * Sends the getCreateLeaderboard operation and returns the typed response via callback.
	 */
	public getCreateLeaderboard(requestData: GamePlayerModels.GetCreateLeaderboardRequestData, onResponse: Action1<GamePlayerResponseModels.GetCreateLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetCreateLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCreateLeaderboardOperationResponse);
	}

	/**
	 * Sends the getCreateLeaderboard operation and resolves with the typed response.
	 */
	public async getCreateLeaderboardAsync(requestData: GamePlayerModels.GetCreateLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetCreateLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.GetCreateLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCreateLeaderboardOperationResponse);
	}

	/**
	 * Sends the getStatisticsLog operation and returns the typed response via callback.
	 */
	public getStatisticsLog(requestData: GamePlayerModels.GetStatisticsLogRequestData, onResponse: Action1<GamePlayerResponseModels.GetStatisticsLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetStatisticsLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetStatisticsLogOperationResponse);
	}

	/**
	 * Sends the getStatisticsLog operation and resolves with the typed response.
	 */
	public async getStatisticsLogAsync(requestData: GamePlayerModels.GetStatisticsLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetStatisticsLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.GetStatisticsLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetStatisticsLogOperationResponse);
	}

	/**
	 * Sends the getCurrencyLog operation and returns the typed response via callback.
	 */
	public getCurrencyLog(requestData: GamePlayerModels.GetCurrencyLogRequestData, onResponse: Action1<GamePlayerResponseModels.GetCurrencyLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.GetCurrencyLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCurrencyLogOperationResponse);
	}

	/**
	 * Sends the getCurrencyLog operation and resolves with the typed response.
	 */
	public async getCurrencyLogAsync(requestData: GamePlayerModels.GetCurrencyLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetCurrencyLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.GetCurrencyLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCurrencyLogOperationResponse);
	}

}

/**
 * Groups server-scoped operations exposed by ServerGamePlayerApi.
 */
/**
 * Exposes server-scoped game-player operations through `GNNetwork.gamePlayer.server`.
 *
 * Use this namespace from trusted backend code with `secretKey` or `overrideSecretKey`.
 */
export class ServerGamePlayerApi {
	/**
	 * Sends the addPlayerFriend operation and returns the typed response via callback.
	 */
	public addPlayerFriend(requestData: GamePlayerModels.ServerAddPlayerFriendRequestData, onResponse: Action1<GamePlayerResponseModels.AddPlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerAddPlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.AddPlayerFriendOperationResponse);
	}

	/**
	 * Sends the addPlayerFriend operation and resolves with the typed response.
	 */
	public async addPlayerFriendAsync(requestData: GamePlayerModels.ServerAddPlayerFriendRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.AddPlayerFriendOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerAddPlayerFriendOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.AddPlayerFriendOperationResponse);
	}

	/**
	 * Sends the addSegment operation and returns the typed response via callback.
	 */
	public addSegment(requestData: GamePlayerModels.ServerAddSegmentRequestData, onResponse: Action1<GamePlayerResponseModels.AddSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerAddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.AddSegmentOperationResponse);
	}

	/**
	 * Sends the addSegment operation and resolves with the typed response.
	 */
	public async addSegmentAsync(requestData: GamePlayerModels.ServerAddSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.AddSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerAddSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.AddSegmentOperationResponse);
	}

	/**
	 * Sends the getAvatar operation and returns the typed response via callback.
	 */
	public getAvatar(requestData: GamePlayerModels.ServerGetAvatarRequestData, onResponse: Action1<GamePlayerResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetAvatarOperationResponse);
	}

	/**
	 * Sends the getAvatar operation and resolves with the typed response.
	 */
	public async getAvatarAsync(requestData: GamePlayerModels.ServerGetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerGetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetAvatarOperationResponse);
	}

	/**
	 * Sends the getCountryCode operation and returns the typed response via callback.
	 */
	public getCountryCode(requestData: GamePlayerModels.ServerGetCountryCodeRequestData, onResponse: Action1<GamePlayerResponseModels.GetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCountryCodeOperationResponse);
	}

	/**
	 * Sends the getCountryCode operation and resolves with the typed response.
	 */
	public async getCountryCodeAsync(requestData: GamePlayerModels.ServerGetCountryCodeRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetCountryCodeOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerGetCountryCodeOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCountryCodeOperationResponse);
	}

	/**
	 * Sends the getCustomData operation and returns the typed response via callback.
	 */
	public getCustomData(requestData: GamePlayerModels.ServerGetCustomDataRequestData, onResponse: Action1<GamePlayerResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCustomDataOperationResponse);
	}

	/**
	 * Sends the getCustomData operation and resolves with the typed response.
	 */
	public async getCustomDataAsync(requestData: GamePlayerModels.ServerGetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerGetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCustomDataOperationResponse);
	}

	/**
	 * Sends the getDisplayName operation and returns the typed response via callback.
	 */
	public getDisplayName(requestData: GamePlayerModels.ServerGetDisplayNameRequestData, onResponse: Action1<GamePlayerResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetDisplayNameOperationResponse);
	}

	/**
	 * Sends the getDisplayName operation and resolves with the typed response.
	 */
	public async getDisplayNameAsync(requestData: GamePlayerModels.ServerGetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerGetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetDisplayNameOperationResponse);
	}

	/**
	 * Sends the getFriendStatisticsLeaderboardAroundPlayer operation and returns the typed response via callback.
	 */
	public getFriendStatisticsLeaderboardAroundPlayer(requestData: GamePlayerModels.ServerGetFriendStatisticsLeaderboardAroundPlayerRequestData, onResponse: Action1<GamePlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetFriendStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	/**
	 * Sends the getFriendStatisticsLeaderboardAroundPlayer operation and resolves with the typed response.
	 */
	public async getFriendStatisticsLeaderboardAroundPlayerAsync(requestData: GamePlayerModels.ServerGetFriendStatisticsLeaderboardAroundPlayerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerGetFriendStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	/**
	 * Sends the getFriendStatisticsLeaderboard operation and returns the typed response via callback.
	 */
	public getFriendStatisticsLeaderboard(requestData: GamePlayerModels.ServerGetFriendStatisticsLeaderboardRequestData, onResponse: Action1<GamePlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetFriendStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the getFriendStatisticsLeaderboard operation and resolves with the typed response.
	 */
	public async getFriendStatisticsLeaderboardAsync(requestData: GamePlayerModels.ServerGetFriendStatisticsLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerGetFriendStatisticsLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the getIpAddressCreate operation and returns the typed response via callback.
	 */
	public getIpAddressCreate(requestData: GamePlayerModels.ServerGetIpAddressCreateRequestData, onResponse: Action1<GamePlayerResponseModels.GetIpAddressCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetIpAddressCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetIpAddressCreateOperationResponse);
	}

	/**
	 * Sends the getIpAddressCreate operation and resolves with the typed response.
	 */
	public async getIpAddressCreateAsync(requestData: GamePlayerModels.ServerGetIpAddressCreateRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetIpAddressCreateOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerGetIpAddressCreateOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetIpAddressCreateOperationResponse);
	}

	/**
	 * Sends the getOnlineStatus operation and returns the typed response via callback.
	 */
	public getOnlineStatus(requestData: GamePlayerModels.ServerGetOnlineStatusRequestData, onResponse: Action1<GamePlayerResponseModels.GetOnlineStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetOnlineStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetOnlineStatusOperationResponse);
	}

	/**
	 * Sends the getOnlineStatus operation and resolves with the typed response.
	 */
	public async getOnlineStatusAsync(requestData: GamePlayerModels.ServerGetOnlineStatusRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetOnlineStatusOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerGetOnlineStatusOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetOnlineStatusOperationResponse);
	}

	/**
	 * Sends the getPlayerBan operation and returns the typed response via callback.
	 */
	public getPlayerBan(requestData: GamePlayerModels.ServerGetPlayerBanRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerBanOperationResponse);
	}

	/**
	 * Sends the getPlayerBan operation and resolves with the typed response.
	 */
	public async getPlayerBanAsync(requestData: GamePlayerModels.ServerGetPlayerBanRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayerBanOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerGetPlayerBanOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerBanOperationResponse);
	}

	/**
	 * Sends the getPlayerCharacter operation and returns the typed response via callback.
	 */
	public getPlayerCharacter(requestData: GamePlayerModels.ServerGetPlayerCharacterRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerCharacterOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetPlayerCharacterOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerCharacterOperationResponse);
	}

	/**
	 * Sends the getPlayerCharacter operation and resolves with the typed response.
	 */
	public async getPlayerCharacterAsync(requestData: GamePlayerModels.ServerGetPlayerCharacterRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayerCharacterOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerGetPlayerCharacterOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerCharacterOperationResponse);
	}

	/**
	 * Sends the getPlayerCurrency operation and returns the typed response via callback.
	 */
	public getPlayerCurrency(requestData: GamePlayerModels.ServerGetPlayerCurrencyRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetPlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerCurrencyOperationResponse);
	}

	/**
	 * Sends the getPlayerCurrency operation and resolves with the typed response.
	 */
	public async getPlayerCurrencyAsync(requestData: GamePlayerModels.ServerGetPlayerCurrencyRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayerCurrencyOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerGetPlayerCurrencyOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerCurrencyOperationResponse);
	}

	/**
	 * Sends the getPlayerData operation and returns the typed response via callback.
	 */
	public getPlayerData(requestData: GamePlayerModels.ServerGetPlayerDataRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerDataOperationResponse);
	}

	/**
	 * Sends the getPlayerData operation and resolves with the typed response.
	 */
	public async getPlayerDataAsync(requestData: GamePlayerModels.ServerGetPlayerDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayerDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerGetPlayerDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerDataOperationResponse);
	}

	/**
	 * Sends the getPlayerFriend operation and returns the typed response via callback.
	 */
	public getPlayerFriend(requestData: GamePlayerModels.ServerGetPlayerFriendRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetPlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerFriendOperationResponse);
	}

	/**
	 * Sends the getPlayerFriend operation and resolves with the typed response.
	 */
	public async getPlayerFriendAsync(requestData: GamePlayerModels.ServerGetPlayerFriendRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayerFriendOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerGetPlayerFriendOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerFriendOperationResponse);
	}

	/**
	 * Sends the getPlayerGroup operation and returns the typed response via callback.
	 */
	public getPlayerGroup(requestData: GamePlayerModels.ServerGetPlayerGroupRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetPlayerGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerGroupOperationResponse);
	}

	/**
	 * Sends the getPlayerGroup operation and resolves with the typed response.
	 */
	public async getPlayerGroupAsync(requestData: GamePlayerModels.ServerGetPlayerGroupRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayerGroupOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerGetPlayerGroupOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerGroupOperationResponse);
	}

	/**
	 * Sends the getPlayerInformation operation and returns the typed response via callback.
	 */
	public getPlayerInformation(requestData: GamePlayerModels.ServerGetPlayerInformationRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetPlayerInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerInformationOperationResponse);
	}

	/**
	 * Sends the getPlayerInformation operation and resolves with the typed response.
	 */
	public async getPlayerInformationAsync(requestData: GamePlayerModels.ServerGetPlayerInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayerInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerGetPlayerInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerInformationOperationResponse);
	}

	/**
	 * Sends the getPlayerInventory operation and returns the typed response via callback.
	 */
	public getPlayerInventory(requestData: GamePlayerModels.ServerGetPlayerInventoryRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerInventoryOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetPlayerInventoryOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerInventoryOperationResponse);
	}

	/**
	 * Sends the getPlayerInventory operation and resolves with the typed response.
	 */
	public async getPlayerInventoryAsync(requestData: GamePlayerModels.ServerGetPlayerInventoryRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayerInventoryOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerGetPlayerInventoryOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerInventoryOperationResponse);
	}

	/**
	 * Sends the getPlayerStatistics operation and returns the typed response via callback.
	 */
	public getPlayerStatistics(requestData: GamePlayerModels.ServerGetPlayerStatisticsRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetPlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerStatisticsOperationResponse);
	}

	/**
	 * Sends the getPlayerStatistics operation and resolves with the typed response.
	 */
	public async getPlayerStatisticsAsync(requestData: GamePlayerModels.ServerGetPlayerStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayerStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerGetPlayerStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerStatisticsOperationResponse);
	}

	/**
	 * Sends the getPlayersWithDisplayName operation and returns the typed response via callback.
	 */
	public getPlayersWithDisplayName(requestData: GamePlayerModels.ServerGetPlayersWithDisplayNameRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayersWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetPlayersWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayersWithDisplayNameOperationResponse);
	}

	/**
	 * Sends the getPlayersWithDisplayName operation and resolves with the typed response.
	 */
	public async getPlayersWithDisplayNameAsync(requestData: GamePlayerModels.ServerGetPlayersWithDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayersWithDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerGetPlayersWithDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayersWithDisplayNameOperationResponse);
	}

	/**
	 * Sends the getPlayersWithSegment operation and returns the typed response via callback.
	 */
	public getPlayersWithSegment(requestData: GamePlayerModels.ServerGetPlayersWithSegmentRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayersWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetPlayersWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayersWithSegmentOperationResponse);
	}

	/**
	 * Sends the getPlayersWithSegment operation and resolves with the typed response.
	 */
	public async getPlayersWithSegmentAsync(requestData: GamePlayerModels.ServerGetPlayersWithSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayersWithSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerGetPlayersWithSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayersWithSegmentOperationResponse);
	}

	/**
	 * Sends the getPlayersWithTag operation and returns the typed response via callback.
	 */
	public getPlayersWithTag(requestData: GamePlayerModels.ServerGetPlayersWithTagRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayersWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetPlayersWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayersWithTagOperationResponse);
	}

	/**
	 * Sends the getPlayersWithTag operation and resolves with the typed response.
	 */
	public async getPlayersWithTagAsync(requestData: GamePlayerModels.ServerGetPlayersWithTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayersWithTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerGetPlayersWithTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayersWithTagOperationResponse);
	}

	/**
	 * Sends the getSegment operation and returns the typed response via callback.
	 */
	public getSegment(requestData: GamePlayerModels.ServerGetSegmentRequestData, onResponse: Action1<GamePlayerResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetSegmentOperationResponse);
	}

	/**
	 * Sends the getSegment operation and resolves with the typed response.
	 */
	public async getSegmentAsync(requestData: GamePlayerModels.ServerGetSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerGetSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetSegmentOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboardAroundPlayer operation and returns the typed response via callback.
	 */
	public getStatisticsLeaderboardAroundPlayer(requestData: GamePlayerModels.ServerGetStatisticsLeaderboardAroundPlayerRequestData, onResponse: Action1<GamePlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboardAroundPlayer operation and resolves with the typed response.
	 */
	public async getStatisticsLeaderboardAroundPlayerAsync(requestData: GamePlayerModels.ServerGetStatisticsLeaderboardAroundPlayerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerGetStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboard operation and returns the typed response via callback.
	 */
	public getStatisticsLeaderboard(requestData: GamePlayerModels.ServerGetStatisticsLeaderboardRequestData, onResponse: Action1<GamePlayerResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboard operation and resolves with the typed response.
	 */
	public async getStatisticsLeaderboardAsync(requestData: GamePlayerModels.ServerGetStatisticsLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetStatisticsLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerGetStatisticsLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the getTag operation and returns the typed response via callback.
	 */
	public getTag(requestData: GamePlayerModels.ServerGetTagRequestData, onResponse: Action1<GamePlayerResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetTagOperationResponse);
	}

	/**
	 * Sends the getTag operation and resolves with the typed response.
	 */
	public async getTagAsync(requestData: GamePlayerModels.ServerGetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerGetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetTagOperationResponse);
	}

	/**
	 * Sends the getTsCreate operation and returns the typed response via callback.
	 */
	public getTsCreate(requestData: GamePlayerModels.ServerGetTsCreateRequestData, onResponse: Action1<GamePlayerResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetTsCreateOperationResponse);
	}

	/**
	 * Sends the getTsCreate operation and resolves with the typed response.
	 */
	public async getTsCreateAsync(requestData: GamePlayerModels.ServerGetTsCreateRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetTsCreateOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerGetTsCreateOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetTsCreateOperationResponse);
	}

	/**
	 * Sends the getTsLastLogin operation and returns the typed response via callback.
	 */
	public getTsLastLogin(requestData: GamePlayerModels.ServerGetTsLastLoginRequestData, onResponse: Action1<GamePlayerResponseModels.GetTsLastLoginOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetTsLastLoginOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetTsLastLoginOperationResponse);
	}

	/**
	 * Sends the getTsLastLogin operation and resolves with the typed response.
	 */
	public async getTsLastLoginAsync(requestData: GamePlayerModels.ServerGetTsLastLoginRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetTsLastLoginOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerGetTsLastLoginOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetTsLastLoginOperationResponse);
	}

	/**
	 * Sends the createGroup operation and returns the typed response via callback.
	 */
	public createGroup(requestData: GamePlayerModels.ServerCreateGroupRequestData, onResponse: Action1<GamePlayerResponseModels.CreateGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerCreateGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.CreateGroupOperationResponse);
	}

	/**
	 * Sends the createGroup operation and resolves with the typed response.
	 */
	public async createGroupAsync(requestData: GamePlayerModels.ServerCreateGroupRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.CreateGroupOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerCreateGroupOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.CreateGroupOperationResponse);
	}

	/**
	 * Sends the createPlayerCharacter operation and returns the typed response via callback.
	 */
	public createPlayerCharacter(requestData: GamePlayerModels.ServerCreatePlayerCharacterRequestData, onResponse: Action1<GamePlayerResponseModels.CreatePlayerCharacterOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerCreatePlayerCharacterOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.CreatePlayerCharacterOperationResponse);
	}

	/**
	 * Sends the createPlayerCharacter operation and resolves with the typed response.
	 */
	public async createPlayerCharacterAsync(requestData: GamePlayerModels.ServerCreatePlayerCharacterRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.CreatePlayerCharacterOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerCreatePlayerCharacterOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.CreatePlayerCharacterOperationResponse);
	}

	/**
	 * Sends the createPlayerItem operation and returns the typed response via callback.
	 */
	public createPlayerItem(requestData: GamePlayerModels.ServerCreatePlayerItemRequestData, onResponse: Action1<GamePlayerResponseModels.CreatePlayerItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerCreatePlayerItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.CreatePlayerItemOperationResponse);
	}

	/**
	 * Sends the createPlayerItem operation and resolves with the typed response.
	 */
	public async createPlayerItemAsync(requestData: GamePlayerModels.ServerCreatePlayerItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.CreatePlayerItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerCreatePlayerItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.CreatePlayerItemOperationResponse);
	}

	/**
	 * Sends the joinGroup operation and returns the typed response via callback.
	 */
	public joinGroup(requestData: GamePlayerModels.ServerJoinGroupRequestData, onResponse: Action1<GamePlayerResponseModels.JoinGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerJoinGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.JoinGroupOperationResponse);
	}

	/**
	 * Sends the joinGroup operation and resolves with the typed response.
	 */
	public async joinGroupAsync(requestData: GamePlayerModels.ServerJoinGroupRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.JoinGroupOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerJoinGroupOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.JoinGroupOperationResponse);
	}

	/**
	 * Sends the leaveGroup operation and returns the typed response via callback.
	 */
	public leaveGroup(requestData: GamePlayerModels.ServerLeaveGroupRequestData, onResponse: Action1<GamePlayerResponseModels.LeaveGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerLeaveGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.LeaveGroupOperationResponse);
	}

	/**
	 * Sends the leaveGroup operation and resolves with the typed response.
	 */
	public async leaveGroupAsync(requestData: GamePlayerModels.ServerLeaveGroupRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.LeaveGroupOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerLeaveGroupOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.LeaveGroupOperationResponse);
	}

	/**
	 * Sends the removePlayerCharacter operation and returns the typed response via callback.
	 */
	public removePlayerCharacter(requestData: GamePlayerModels.ServerRemovePlayerCharacterRequestData, onResponse: Action1<GamePlayerResponseModels.RemovePlayerCharacterOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerRemovePlayerCharacterOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemovePlayerCharacterOperationResponse);
	}

	/**
	 * Sends the removePlayerCharacter operation and resolves with the typed response.
	 */
	public async removePlayerCharacterAsync(requestData: GamePlayerModels.ServerRemovePlayerCharacterRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.RemovePlayerCharacterOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerRemovePlayerCharacterOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemovePlayerCharacterOperationResponse);
	}

	/**
	 * Sends the removePlayerFriend operation and returns the typed response via callback.
	 */
	public removePlayerFriend(requestData: GamePlayerModels.ServerRemovePlayerFriendRequestData, onResponse: Action1<GamePlayerResponseModels.RemovePlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerRemovePlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemovePlayerFriendOperationResponse);
	}

	/**
	 * Sends the removePlayerFriend operation and resolves with the typed response.
	 */
	public async removePlayerFriendAsync(requestData: GamePlayerModels.ServerRemovePlayerFriendRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.RemovePlayerFriendOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerRemovePlayerFriendOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemovePlayerFriendOperationResponse);
	}

	/**
	 * Sends the removePlayerItem operation and returns the typed response via callback.
	 */
	public removePlayerItem(requestData: GamePlayerModels.ServerRemovePlayerItemRequestData, onResponse: Action1<GamePlayerResponseModels.RemovePlayerItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerRemovePlayerItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemovePlayerItemOperationResponse);
	}

	/**
	 * Sends the removePlayerItem operation and resolves with the typed response.
	 */
	public async removePlayerItemAsync(requestData: GamePlayerModels.ServerRemovePlayerItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.RemovePlayerItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerRemovePlayerItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemovePlayerItemOperationResponse);
	}

	/**
	 * Sends the removeSegment operation and returns the typed response via callback.
	 */
	public removeSegment(requestData: GamePlayerModels.ServerRemoveSegmentRequestData, onResponse: Action1<GamePlayerResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerRemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemoveSegmentOperationResponse);
	}

	/**
	 * Sends the removeSegment operation and resolves with the typed response.
	 */
	public async removeSegmentAsync(requestData: GamePlayerModels.ServerRemoveSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.RemoveSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerRemoveSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemoveSegmentOperationResponse);
	}

	/**
	 * Sends the removeTag operation and returns the typed response via callback.
	 */
	public removeTag(requestData: GamePlayerModels.ServerRemoveTagRequestData, onResponse: Action1<GamePlayerResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerRemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemoveTagOperationResponse);
	}

	/**
	 * Sends the removeTag operation and resolves with the typed response.
	 */
	public async removeTagAsync(requestData: GamePlayerModels.ServerRemoveTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.RemoveTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerRemoveTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemoveTagOperationResponse);
	}

	/**
	 * Sends the setAvatar operation and returns the typed response via callback.
	 */
	public setAvatar(requestData: GamePlayerModels.ServerSetAvatarRequestData, onResponse: Action1<GamePlayerResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerSetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetAvatarOperationResponse);
	}

	/**
	 * Sends the setAvatar operation and resolves with the typed response.
	 */
	public async setAvatarAsync(requestData: GamePlayerModels.ServerSetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.SetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerSetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetAvatarOperationResponse);
	}

	/**
	 * Sends the setCountryCode operation and returns the typed response via callback.
	 */
	public setCountryCode(requestData: GamePlayerModels.ServerSetCountryCodeRequestData, onResponse: Action1<GamePlayerResponseModels.SetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerSetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetCountryCodeOperationResponse);
	}

	/**
	 * Sends the setCountryCode operation and resolves with the typed response.
	 */
	public async setCountryCodeAsync(requestData: GamePlayerModels.ServerSetCountryCodeRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.SetCountryCodeOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerSetCountryCodeOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetCountryCodeOperationResponse);
	}

	/**
	 * Sends the setCustomData operation and returns the typed response via callback.
	 */
	public setCustomData(requestData: GamePlayerModels.ServerSetCustomDataRequestData, onResponse: Action1<GamePlayerResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerSetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetCustomDataOperationResponse);
	}

	/**
	 * Sends the setCustomData operation and resolves with the typed response.
	 */
	public async setCustomDataAsync(requestData: GamePlayerModels.ServerSetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.SetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerSetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetCustomDataOperationResponse);
	}

	/**
	 * Sends the setDisplayName operation and returns the typed response via callback.
	 */
	public setDisplayName(requestData: GamePlayerModels.ServerSetDisplayNameRequestData, onResponse: Action1<GamePlayerResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerSetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetDisplayNameOperationResponse);
	}

	/**
	 * Sends the setDisplayName operation and resolves with the typed response.
	 */
	public async setDisplayNameAsync(requestData: GamePlayerModels.ServerSetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.SetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerSetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetDisplayNameOperationResponse);
	}

	/**
	 * Sends the setPlayerBan operation and returns the typed response via callback.
	 */
	public setPlayerBan(requestData: GamePlayerModels.ServerSetPlayerBanRequestData, onResponse: Action1<GamePlayerResponseModels.SetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerSetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetPlayerBanOperationResponse);
	}

	/**
	 * Sends the setPlayerBan operation and resolves with the typed response.
	 */
	public async setPlayerBanAsync(requestData: GamePlayerModels.ServerSetPlayerBanRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.SetPlayerBanOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerSetPlayerBanOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetPlayerBanOperationResponse);
	}

	/**
	 * Sends the changePlayerCurrency operation and returns the typed response via callback.
	 */
	public changePlayerCurrency(requestData: GamePlayerModels.ServerChangePlayerCurrencyRequestData, onResponse: Action1<GamePlayerResponseModels.ChangePlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerChangePlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.ChangePlayerCurrencyOperationResponse);
	}

	/**
	 * Sends the changePlayerCurrency operation and resolves with the typed response.
	 */
	public async changePlayerCurrencyAsync(requestData: GamePlayerModels.ServerChangePlayerCurrencyRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.ChangePlayerCurrencyOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerChangePlayerCurrencyOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.ChangePlayerCurrencyOperationResponse);
	}

	/**
	 * Sends the setPlayerData operation and returns the typed response via callback.
	 */
	public setPlayerData(requestData: GamePlayerModels.ServerSetPlayerDataRequestData, onResponse: Action1<GamePlayerResponseModels.SetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerSetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetPlayerDataOperationResponse);
	}

	/**
	 * Sends the setPlayerData operation and resolves with the typed response.
	 */
	public async setPlayerDataAsync(requestData: GamePlayerModels.ServerSetPlayerDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.SetPlayerDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerSetPlayerDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetPlayerDataOperationResponse);
	}

	/**
	 * Sends the changePlayerStatistics operation and returns the typed response via callback.
	 */
	public changePlayerStatistics(requestData: GamePlayerModels.ServerChangePlayerStatisticsRequestData, onResponse: Action1<GamePlayerResponseModels.ChangePlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerChangePlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.ChangePlayerStatisticsOperationResponse);
	}

	/**
	 * Sends the changePlayerStatistics operation and resolves with the typed response.
	 */
	public async changePlayerStatisticsAsync(requestData: GamePlayerModels.ServerChangePlayerStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.ChangePlayerStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerChangePlayerStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.ChangePlayerStatisticsOperationResponse);
	}

	/**
	 * Sends the setTag operation and returns the typed response via callback.
	 */
	public setTag(requestData: GamePlayerModels.ServerSetTagRequestData, onResponse: Action1<GamePlayerResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerSetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetTagOperationResponse);
	}

	/**
	 * Sends the setTag operation and resolves with the typed response.
	 */
	public async setTagAsync(requestData: GamePlayerModels.ServerSetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.SetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerSetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetTagOperationResponse);
	}

	/**
	 * Sends the getCurrencyLeaderboard operation and returns the typed response via callback.
	 */
	public getCurrencyLeaderboard(requestData: GamePlayerModels.ServerGetCurrencyLeaderboardRequestData, onResponse: Action1<GamePlayerResponseModels.GetCurrencyLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetCurrencyLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCurrencyLeaderboardOperationResponse);
	}

	/**
	 * Sends the getCurrencyLeaderboard operation and resolves with the typed response.
	 */
	public async getCurrencyLeaderboardAsync(requestData: GamePlayerModels.ServerGetCurrencyLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetCurrencyLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerGetCurrencyLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCurrencyLeaderboardOperationResponse);
	}

	/**
	 * Sends the getCreateLeaderboard operation and returns the typed response via callback.
	 */
	public getCreateLeaderboard(requestData: GamePlayerModels.ServerGetCreateLeaderboardRequestData, onResponse: Action1<GamePlayerResponseModels.GetCreateLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetCreateLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCreateLeaderboardOperationResponse);
	}

	/**
	 * Sends the getLastLoginLeaderboard operation and returns the typed response via callback.
	 */
	public getLastLoginLeaderboard(requestData: GamePlayerModels.ServerGetLastLoginLeaderboardRequestData, onResponse: Action1<GamePlayerResponseModels.GetLastLoginLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetLastLoginLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetLastLoginLeaderboardOperationResponse);
	}

	/**
	 * Sends the getLastLoginLeaderboard operation and resolves with the typed response.
	 */
	public async getLastLoginLeaderboardAsync(requestData: GamePlayerModels.ServerGetLastLoginLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetLastLoginLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerGetLastLoginLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetLastLoginLeaderboardOperationResponse);
	}

	/**
	 * Sends the getCreateLeaderboard operation and resolves with the typed response.
	 */
	public async getCreateLeaderboardAsync(requestData: GamePlayerModels.ServerGetCreateLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetCreateLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerGetCreateLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCreateLeaderboardOperationResponse);
	}

	/**
	 * Sends the getStatisticsLog operation and returns the typed response via callback.
	 */
	public getStatisticsLog(requestData: GamePlayerModels.ServerGetStatisticsLogRequestData, onResponse: Action1<GamePlayerResponseModels.GetStatisticsLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetStatisticsLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetStatisticsLogOperationResponse);
	}

	/**
	 * Sends the getStatisticsLog operation and resolves with the typed response.
	 */
	public async getStatisticsLogAsync(requestData: GamePlayerModels.ServerGetStatisticsLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetStatisticsLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerGetStatisticsLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetStatisticsLogOperationResponse);
	}

	/**
	 * Sends the getCurrencyLog operation and returns the typed response via callback.
	 */
	public getCurrencyLog(requestData: GamePlayerModels.ServerGetCurrencyLogRequestData, onResponse: Action1<GamePlayerResponseModels.GetCurrencyLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.ServerGetCurrencyLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCurrencyLogOperationResponse);
	}

	/**
	 * Sends the getCurrencyLog operation and resolves with the typed response.
	 */
	public async getCurrencyLogAsync(requestData: GamePlayerModels.ServerGetCurrencyLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetCurrencyLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.ServerGetCurrencyLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCurrencyLogOperationResponse);
	}

}

/**
 * Groups admin-scoped operations exposed by AdminGamePlayerApi.
 */
/**
 * Exposes admin-scoped game-player operations through `GNNetwork.gamePlayer.admin`.
 *
 * Use this namespace from dashboard, GM, or backoffice code with `secretKey` or `overrideSecretKey`.
 */
export class AdminGamePlayerApi {
	/**
	 * Sends the addPlayerFriend operation and returns the typed response via callback.
	 */
	public addPlayerFriend(requestData: GamePlayerModels.AdminAddPlayerFriendRequestData, onResponse: Action1<GamePlayerResponseModels.AddPlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminAddPlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.AddPlayerFriendOperationResponse);
	}

	/**
	 * Sends the addPlayerFriend operation and resolves with the typed response.
	 */
	public async addPlayerFriendAsync(requestData: GamePlayerModels.AdminAddPlayerFriendRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.AddPlayerFriendOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminAddPlayerFriendOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.AddPlayerFriendOperationResponse);
	}

	/**
	 * Sends the addSegment operation and returns the typed response via callback.
	 */
	public addSegment(requestData: GamePlayerModels.AdminAddSegmentRequestData, onResponse: Action1<GamePlayerResponseModels.AddSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminAddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.AddSegmentOperationResponse);
	}

	/**
	 * Sends the addSegment operation and resolves with the typed response.
	 */
	public async addSegmentAsync(requestData: GamePlayerModels.AdminAddSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.AddSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminAddSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.AddSegmentOperationResponse);
	}

	/**
	 * Sends the getAvatar operation and returns the typed response via callback.
	 */
	public getAvatar(requestData: GamePlayerModels.AdminGetAvatarRequestData, onResponse: Action1<GamePlayerResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetAvatarOperationResponse);
	}

	/**
	 * Sends the getAvatar operation and resolves with the typed response.
	 */
	public async getAvatarAsync(requestData: GamePlayerModels.AdminGetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminGetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetAvatarOperationResponse);
	}

	/**
	 * Sends the getCountryCode operation and returns the typed response via callback.
	 */
	public getCountryCode(requestData: GamePlayerModels.AdminGetCountryCodeRequestData, onResponse: Action1<GamePlayerResponseModels.GetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCountryCodeOperationResponse);
	}

	/**
	 * Sends the getCountryCode operation and resolves with the typed response.
	 */
	public async getCountryCodeAsync(requestData: GamePlayerModels.AdminGetCountryCodeRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetCountryCodeOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminGetCountryCodeOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCountryCodeOperationResponse);
	}

	/**
	 * Sends the getCustomData operation and returns the typed response via callback.
	 */
	public getCustomData(requestData: GamePlayerModels.AdminGetCustomDataRequestData, onResponse: Action1<GamePlayerResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCustomDataOperationResponse);
	}

	/**
	 * Sends the getCustomData operation and resolves with the typed response.
	 */
	public async getCustomDataAsync(requestData: GamePlayerModels.AdminGetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminGetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCustomDataOperationResponse);
	}

	/**
	 * Sends the getDisplayName operation and returns the typed response via callback.
	 */
	public getDisplayName(requestData: GamePlayerModels.AdminGetDisplayNameRequestData, onResponse: Action1<GamePlayerResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetDisplayNameOperationResponse);
	}

	/**
	 * Sends the getDisplayName operation and resolves with the typed response.
	 */
	public async getDisplayNameAsync(requestData: GamePlayerModels.AdminGetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminGetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetDisplayNameOperationResponse);
	}

	/**
	 * Sends the getFriendStatisticsLeaderboardAroundPlayer operation and returns the typed response via callback.
	 */
	public getFriendStatisticsLeaderboardAroundPlayer(requestData: GamePlayerModels.AdminGetFriendStatisticsLeaderboardAroundPlayerRequestData, onResponse: Action1<GamePlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetFriendStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	/**
	 * Sends the getFriendStatisticsLeaderboardAroundPlayer operation and resolves with the typed response.
	 */
	public async getFriendStatisticsLeaderboardAroundPlayerAsync(requestData: GamePlayerModels.AdminGetFriendStatisticsLeaderboardAroundPlayerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminGetFriendStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	/**
	 * Sends the getFriendStatisticsLeaderboard operation and returns the typed response via callback.
	 */
	public getFriendStatisticsLeaderboard(requestData: GamePlayerModels.AdminGetFriendStatisticsLeaderboardRequestData, onResponse: Action1<GamePlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetFriendStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the getFriendStatisticsLeaderboard operation and resolves with the typed response.
	 */
	public async getFriendStatisticsLeaderboardAsync(requestData: GamePlayerModels.AdminGetFriendStatisticsLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminGetFriendStatisticsLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the getIpAddressCreate operation and returns the typed response via callback.
	 */
	public getIpAddressCreate(requestData: GamePlayerModels.AdminGetIpAddressCreateRequestData, onResponse: Action1<GamePlayerResponseModels.GetIpAddressCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetIpAddressCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetIpAddressCreateOperationResponse);
	}

	/**
	 * Sends the getIpAddressCreate operation and resolves with the typed response.
	 */
	public async getIpAddressCreateAsync(requestData: GamePlayerModels.AdminGetIpAddressCreateRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetIpAddressCreateOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminGetIpAddressCreateOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetIpAddressCreateOperationResponse);
	}

	/**
	 * Sends the getOnlineStatus operation and returns the typed response via callback.
	 */
	public getOnlineStatus(requestData: GamePlayerModels.AdminGetOnlineStatusRequestData, onResponse: Action1<GamePlayerResponseModels.GetOnlineStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetOnlineStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetOnlineStatusOperationResponse);
	}

	/**
	 * Sends the getOnlineStatus operation and resolves with the typed response.
	 */
	public async getOnlineStatusAsync(requestData: GamePlayerModels.AdminGetOnlineStatusRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetOnlineStatusOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminGetOnlineStatusOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetOnlineStatusOperationResponse);
	}

	/**
	 * Sends the getPlayerBan operation and returns the typed response via callback.
	 */
	public getPlayerBan(requestData: GamePlayerModels.AdminGetPlayerBanRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerBanOperationResponse);
	}

	/**
	 * Sends the getPlayerBan operation and resolves with the typed response.
	 */
	public async getPlayerBanAsync(requestData: GamePlayerModels.AdminGetPlayerBanRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayerBanOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminGetPlayerBanOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerBanOperationResponse);
	}

	/**
	 * Sends the getPlayerCharacter operation and returns the typed response via callback.
	 */
	public getPlayerCharacter(requestData: GamePlayerModels.AdminGetPlayerCharacterRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerCharacterOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetPlayerCharacterOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerCharacterOperationResponse);
	}

	/**
	 * Sends the getPlayerCharacter operation and resolves with the typed response.
	 */
	public async getPlayerCharacterAsync(requestData: GamePlayerModels.AdminGetPlayerCharacterRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayerCharacterOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminGetPlayerCharacterOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerCharacterOperationResponse);
	}

	/**
	 * Sends the getPlayerCurrency operation and returns the typed response via callback.
	 */
	public getPlayerCurrency(requestData: GamePlayerModels.AdminGetPlayerCurrencyRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetPlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerCurrencyOperationResponse);
	}

	/**
	 * Sends the getPlayerCurrency operation and resolves with the typed response.
	 */
	public async getPlayerCurrencyAsync(requestData: GamePlayerModels.AdminGetPlayerCurrencyRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayerCurrencyOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminGetPlayerCurrencyOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerCurrencyOperationResponse);
	}

	/**
	 * Sends the getPlayerData operation and returns the typed response via callback.
	 */
	public getPlayerData(requestData: GamePlayerModels.AdminGetPlayerDataRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerDataOperationResponse);
	}

	/**
	 * Sends the getPlayerData operation and resolves with the typed response.
	 */
	public async getPlayerDataAsync(requestData: GamePlayerModels.AdminGetPlayerDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayerDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminGetPlayerDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerDataOperationResponse);
	}

	/**
	 * Sends the getPlayerFriend operation and returns the typed response via callback.
	 */
	public getPlayerFriend(requestData: GamePlayerModels.AdminGetPlayerFriendRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetPlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerFriendOperationResponse);
	}

	/**
	 * Sends the getPlayerFriend operation and resolves with the typed response.
	 */
	public async getPlayerFriendAsync(requestData: GamePlayerModels.AdminGetPlayerFriendRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayerFriendOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminGetPlayerFriendOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerFriendOperationResponse);
	}

	/**
	 * Sends the getPlayerGroup operation and returns the typed response via callback.
	 */
	public getPlayerGroup(requestData: GamePlayerModels.AdminGetPlayerGroupRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetPlayerGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerGroupOperationResponse);
	}

	/**
	 * Sends the getPlayerGroup operation and resolves with the typed response.
	 */
	public async getPlayerGroupAsync(requestData: GamePlayerModels.AdminGetPlayerGroupRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayerGroupOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminGetPlayerGroupOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerGroupOperationResponse);
	}

	/**
	 * Sends the getPlayerInformation operation and returns the typed response via callback.
	 */
	public getPlayerInformation(requestData: GamePlayerModels.AdminGetPlayerInformationRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetPlayerInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerInformationOperationResponse);
	}

	/**
	 * Sends the getPlayerInformation operation and resolves with the typed response.
	 */
	public async getPlayerInformationAsync(requestData: GamePlayerModels.AdminGetPlayerInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayerInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminGetPlayerInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerInformationOperationResponse);
	}

	/**
	 * Sends the getPlayerInventory operation and returns the typed response via callback.
	 */
	public getPlayerInventory(requestData: GamePlayerModels.AdminGetPlayerInventoryRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerInventoryOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetPlayerInventoryOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerInventoryOperationResponse);
	}

	/**
	 * Sends the getPlayerInventory operation and resolves with the typed response.
	 */
	public async getPlayerInventoryAsync(requestData: GamePlayerModels.AdminGetPlayerInventoryRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayerInventoryOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminGetPlayerInventoryOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerInventoryOperationResponse);
	}

	/**
	 * Sends the getPlayerStatistics operation and returns the typed response via callback.
	 */
	public getPlayerStatistics(requestData: GamePlayerModels.AdminGetPlayerStatisticsRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetPlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerStatisticsOperationResponse);
	}

	/**
	 * Sends the getPlayerStatistics operation and resolves with the typed response.
	 */
	public async getPlayerStatisticsAsync(requestData: GamePlayerModels.AdminGetPlayerStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayerStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminGetPlayerStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayerStatisticsOperationResponse);
	}

	/**
	 * Sends the getPlayersWithDisplayName operation and returns the typed response via callback.
	 */
	public getPlayersWithDisplayName(requestData: GamePlayerModels.AdminGetPlayersWithDisplayNameRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayersWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetPlayersWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayersWithDisplayNameOperationResponse);
	}

	/**
	 * Sends the getPlayersWithDisplayName operation and resolves with the typed response.
	 */
	public async getPlayersWithDisplayNameAsync(requestData: GamePlayerModels.AdminGetPlayersWithDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayersWithDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminGetPlayersWithDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayersWithDisplayNameOperationResponse);
	}

	/**
	 * Sends the getPlayersWithSegment operation and returns the typed response via callback.
	 */
	public getPlayersWithSegment(requestData: GamePlayerModels.AdminGetPlayersWithSegmentRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayersWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetPlayersWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayersWithSegmentOperationResponse);
	}

	/**
	 * Sends the getPlayersWithSegment operation and resolves with the typed response.
	 */
	public async getPlayersWithSegmentAsync(requestData: GamePlayerModels.AdminGetPlayersWithSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayersWithSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminGetPlayersWithSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayersWithSegmentOperationResponse);
	}

	/**
	 * Sends the getPlayersWithTag operation and returns the typed response via callback.
	 */
	public getPlayersWithTag(requestData: GamePlayerModels.AdminGetPlayersWithTagRequestData, onResponse: Action1<GamePlayerResponseModels.GetPlayersWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetPlayersWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayersWithTagOperationResponse);
	}

	/**
	 * Sends the getPlayersWithTag operation and resolves with the typed response.
	 */
	public async getPlayersWithTagAsync(requestData: GamePlayerModels.AdminGetPlayersWithTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetPlayersWithTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminGetPlayersWithTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetPlayersWithTagOperationResponse);
	}

	/**
	 * Sends the getSegment operation and returns the typed response via callback.
	 */
	public getSegment(requestData: GamePlayerModels.AdminGetSegmentRequestData, onResponse: Action1<GamePlayerResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetSegmentOperationResponse);
	}

	/**
	 * Sends the getSegment operation and resolves with the typed response.
	 */
	public async getSegmentAsync(requestData: GamePlayerModels.AdminGetSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminGetSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetSegmentOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboardAroundPlayer operation and returns the typed response via callback.
	 */
	public getStatisticsLeaderboardAroundPlayer(requestData: GamePlayerModels.AdminGetStatisticsLeaderboardAroundPlayerRequestData, onResponse: Action1<GamePlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboardAroundPlayer operation and resolves with the typed response.
	 */
	public async getStatisticsLeaderboardAroundPlayerAsync(requestData: GamePlayerModels.AdminGetStatisticsLeaderboardAroundPlayerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminGetStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboard operation and returns the typed response via callback.
	 */
	public getStatisticsLeaderboard(requestData: GamePlayerModels.AdminGetStatisticsLeaderboardRequestData, onResponse: Action1<GamePlayerResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboard operation and resolves with the typed response.
	 */
	public async getStatisticsLeaderboardAsync(requestData: GamePlayerModels.AdminGetStatisticsLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetStatisticsLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminGetStatisticsLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the getTag operation and returns the typed response via callback.
	 */
	public getTag(requestData: GamePlayerModels.AdminGetTagRequestData, onResponse: Action1<GamePlayerResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetTagOperationResponse);
	}

	/**
	 * Sends the getTag operation and resolves with the typed response.
	 */
	public async getTagAsync(requestData: GamePlayerModels.AdminGetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminGetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetTagOperationResponse);
	}

	/**
	 * Sends the getTsCreate operation and returns the typed response via callback.
	 */
	public getTsCreate(requestData: GamePlayerModels.AdminGetTsCreateRequestData, onResponse: Action1<GamePlayerResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetTsCreateOperationResponse);
	}

	/**
	 * Sends the getTsCreate operation and resolves with the typed response.
	 */
	public async getTsCreateAsync(requestData: GamePlayerModels.AdminGetTsCreateRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetTsCreateOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminGetTsCreateOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetTsCreateOperationResponse);
	}

	/**
	 * Sends the getTsLastLogin operation and returns the typed response via callback.
	 */
	public getTsLastLogin(requestData: GamePlayerModels.AdminGetTsLastLoginRequestData, onResponse: Action1<GamePlayerResponseModels.GetTsLastLoginOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetTsLastLoginOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetTsLastLoginOperationResponse);
	}

	/**
	 * Sends the getTsLastLogin operation and resolves with the typed response.
	 */
	public async getTsLastLoginAsync(requestData: GamePlayerModels.AdminGetTsLastLoginRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetTsLastLoginOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminGetTsLastLoginOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetTsLastLoginOperationResponse);
	}

	/**
	 * Sends the createGroup operation and returns the typed response via callback.
	 */
	public createGroup(requestData: GamePlayerModels.AdminCreateGroupRequestData, onResponse: Action1<GamePlayerResponseModels.CreateGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminCreateGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.CreateGroupOperationResponse);
	}

	/**
	 * Sends the createGroup operation and resolves with the typed response.
	 */
	public async createGroupAsync(requestData: GamePlayerModels.AdminCreateGroupRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.CreateGroupOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminCreateGroupOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.CreateGroupOperationResponse);
	}

	/**
	 * Sends the createPlayerCharacter operation and returns the typed response via callback.
	 */
	public createPlayerCharacter(requestData: GamePlayerModels.AdminCreatePlayerCharacterRequestData, onResponse: Action1<GamePlayerResponseModels.CreatePlayerCharacterOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminCreatePlayerCharacterOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.CreatePlayerCharacterOperationResponse);
	}

	/**
	 * Sends the createPlayerCharacter operation and resolves with the typed response.
	 */
	public async createPlayerCharacterAsync(requestData: GamePlayerModels.AdminCreatePlayerCharacterRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.CreatePlayerCharacterOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminCreatePlayerCharacterOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.CreatePlayerCharacterOperationResponse);
	}

	/**
	 * Sends the createPlayerItem operation and returns the typed response via callback.
	 */
	public createPlayerItem(requestData: GamePlayerModels.AdminCreatePlayerItemRequestData, onResponse: Action1<GamePlayerResponseModels.CreatePlayerItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminCreatePlayerItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.CreatePlayerItemOperationResponse);
	}

	/**
	 * Sends the createPlayerItem operation and resolves with the typed response.
	 */
	public async createPlayerItemAsync(requestData: GamePlayerModels.AdminCreatePlayerItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.CreatePlayerItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminCreatePlayerItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.CreatePlayerItemOperationResponse);
	}

	/**
	 * Sends the joinGroup operation and returns the typed response via callback.
	 */
	public joinGroup(requestData: GamePlayerModels.AdminJoinGroupRequestData, onResponse: Action1<GamePlayerResponseModels.JoinGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminJoinGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.JoinGroupOperationResponse);
	}

	/**
	 * Sends the joinGroup operation and resolves with the typed response.
	 */
	public async joinGroupAsync(requestData: GamePlayerModels.AdminJoinGroupRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.JoinGroupOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminJoinGroupOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.JoinGroupOperationResponse);
	}

	/**
	 * Sends the leaveGroup operation and returns the typed response via callback.
	 */
	public leaveGroup(requestData: GamePlayerModels.AdminLeaveGroupRequestData, onResponse: Action1<GamePlayerResponseModels.LeaveGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminLeaveGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.LeaveGroupOperationResponse);
	}

	/**
	 * Sends the leaveGroup operation and resolves with the typed response.
	 */
	public async leaveGroupAsync(requestData: GamePlayerModels.AdminLeaveGroupRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.LeaveGroupOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminLeaveGroupOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.LeaveGroupOperationResponse);
	}

	/**
	 * Sends the removePlayerCharacter operation and returns the typed response via callback.
	 */
	public removePlayerCharacter(requestData: GamePlayerModels.AdminRemovePlayerCharacterRequestData, onResponse: Action1<GamePlayerResponseModels.RemovePlayerCharacterOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminRemovePlayerCharacterOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemovePlayerCharacterOperationResponse);
	}

	/**
	 * Sends the removePlayerCharacter operation and resolves with the typed response.
	 */
	public async removePlayerCharacterAsync(requestData: GamePlayerModels.AdminRemovePlayerCharacterRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.RemovePlayerCharacterOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminRemovePlayerCharacterOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemovePlayerCharacterOperationResponse);
	}

	/**
	 * Sends the removePlayerFriend operation and returns the typed response via callback.
	 */
	public removePlayerFriend(requestData: GamePlayerModels.AdminRemovePlayerFriendRequestData, onResponse: Action1<GamePlayerResponseModels.RemovePlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminRemovePlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemovePlayerFriendOperationResponse);
	}

	/**
	 * Sends the removePlayerFriend operation and resolves with the typed response.
	 */
	public async removePlayerFriendAsync(requestData: GamePlayerModels.AdminRemovePlayerFriendRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.RemovePlayerFriendOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminRemovePlayerFriendOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemovePlayerFriendOperationResponse);
	}

	/**
	 * Sends the removePlayerItem operation and returns the typed response via callback.
	 */
	public removePlayerItem(requestData: GamePlayerModels.AdminRemovePlayerItemRequestData, onResponse: Action1<GamePlayerResponseModels.RemovePlayerItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminRemovePlayerItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemovePlayerItemOperationResponse);
	}

	/**
	 * Sends the removePlayerItem operation and resolves with the typed response.
	 */
	public async removePlayerItemAsync(requestData: GamePlayerModels.AdminRemovePlayerItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.RemovePlayerItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminRemovePlayerItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemovePlayerItemOperationResponse);
	}

	/**
	 * Sends the removeSegment operation and returns the typed response via callback.
	 */
	public removeSegment(requestData: GamePlayerModels.AdminRemoveSegmentRequestData, onResponse: Action1<GamePlayerResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminRemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemoveSegmentOperationResponse);
	}

	/**
	 * Sends the removeSegment operation and resolves with the typed response.
	 */
	public async removeSegmentAsync(requestData: GamePlayerModels.AdminRemoveSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.RemoveSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminRemoveSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemoveSegmentOperationResponse);
	}

	/**
	 * Sends the removeTag operation and returns the typed response via callback.
	 */
	public removeTag(requestData: GamePlayerModels.AdminRemoveTagRequestData, onResponse: Action1<GamePlayerResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminRemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemoveTagOperationResponse);
	}

	/**
	 * Sends the removeTag operation and resolves with the typed response.
	 */
	public async removeTagAsync(requestData: GamePlayerModels.AdminRemoveTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.RemoveTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminRemoveTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.RemoveTagOperationResponse);
	}

	/**
	 * Sends the setAvatar operation and returns the typed response via callback.
	 */
	public setAvatar(requestData: GamePlayerModels.AdminSetAvatarRequestData, onResponse: Action1<GamePlayerResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminSetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetAvatarOperationResponse);
	}

	/**
	 * Sends the setAvatar operation and resolves with the typed response.
	 */
	public async setAvatarAsync(requestData: GamePlayerModels.AdminSetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.SetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminSetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetAvatarOperationResponse);
	}

	/**
	 * Sends the setCountryCode operation and returns the typed response via callback.
	 */
	public setCountryCode(requestData: GamePlayerModels.AdminSetCountryCodeRequestData, onResponse: Action1<GamePlayerResponseModels.SetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminSetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetCountryCodeOperationResponse);
	}

	/**
	 * Sends the setCountryCode operation and resolves with the typed response.
	 */
	public async setCountryCodeAsync(requestData: GamePlayerModels.AdminSetCountryCodeRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.SetCountryCodeOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminSetCountryCodeOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetCountryCodeOperationResponse);
	}

	/**
	 * Sends the setCustomData operation and returns the typed response via callback.
	 */
	public setCustomData(requestData: GamePlayerModels.AdminSetCustomDataRequestData, onResponse: Action1<GamePlayerResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminSetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetCustomDataOperationResponse);
	}

	/**
	 * Sends the setCustomData operation and resolves with the typed response.
	 */
	public async setCustomDataAsync(requestData: GamePlayerModels.AdminSetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.SetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminSetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetCustomDataOperationResponse);
	}

	/**
	 * Sends the setDisplayName operation and returns the typed response via callback.
	 */
	public setDisplayName(requestData: GamePlayerModels.AdminSetDisplayNameRequestData, onResponse: Action1<GamePlayerResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminSetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetDisplayNameOperationResponse);
	}

	/**
	 * Sends the setDisplayName operation and resolves with the typed response.
	 */
	public async setDisplayNameAsync(requestData: GamePlayerModels.AdminSetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.SetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminSetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetDisplayNameOperationResponse);
	}

	/**
	 * Sends the setPlayerBan operation and returns the typed response via callback.
	 */
	public setPlayerBan(requestData: GamePlayerModels.AdminSetPlayerBanRequestData, onResponse: Action1<GamePlayerResponseModels.SetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminSetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetPlayerBanOperationResponse);
	}

	/**
	 * Sends the setPlayerBan operation and resolves with the typed response.
	 */
	public async setPlayerBanAsync(requestData: GamePlayerModels.AdminSetPlayerBanRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.SetPlayerBanOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminSetPlayerBanOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetPlayerBanOperationResponse);
	}

	/**
	 * Sends the changePlayerCurrency operation and returns the typed response via callback.
	 */
	public changePlayerCurrency(requestData: GamePlayerModels.AdminChangePlayerCurrencyRequestData, onResponse: Action1<GamePlayerResponseModels.ChangePlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminChangePlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.ChangePlayerCurrencyOperationResponse);
	}

	/**
	 * Sends the changePlayerCurrency operation and resolves with the typed response.
	 */
	public async changePlayerCurrencyAsync(requestData: GamePlayerModels.AdminChangePlayerCurrencyRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.ChangePlayerCurrencyOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminChangePlayerCurrencyOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.ChangePlayerCurrencyOperationResponse);
	}

	/**
	 * Sends the setPlayerData operation and returns the typed response via callback.
	 */
	public setPlayerData(requestData: GamePlayerModels.AdminSetPlayerDataRequestData, onResponse: Action1<GamePlayerResponseModels.SetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminSetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetPlayerDataOperationResponse);
	}

	/**
	 * Sends the setPlayerData operation and resolves with the typed response.
	 */
	public async setPlayerDataAsync(requestData: GamePlayerModels.AdminSetPlayerDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.SetPlayerDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminSetPlayerDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetPlayerDataOperationResponse);
	}

	/**
	 * Sends the changePlayerStatistics operation and returns the typed response via callback.
	 */
	public changePlayerStatistics(requestData: GamePlayerModels.AdminChangePlayerStatisticsRequestData, onResponse: Action1<GamePlayerResponseModels.ChangePlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminChangePlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.ChangePlayerStatisticsOperationResponse);
	}

	/**
	 * Sends the changePlayerStatistics operation and resolves with the typed response.
	 */
	public async changePlayerStatisticsAsync(requestData: GamePlayerModels.AdminChangePlayerStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.ChangePlayerStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminChangePlayerStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.ChangePlayerStatisticsOperationResponse);
	}

	/**
	 * Sends the setTag operation and returns the typed response via callback.
	 */
	public setTag(requestData: GamePlayerModels.AdminSetTagRequestData, onResponse: Action1<GamePlayerResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminSetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetTagOperationResponse);
	}

	/**
	 * Sends the setTag operation and resolves with the typed response.
	 */
	public async setTagAsync(requestData: GamePlayerModels.AdminSetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.SetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminSetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.SetTagOperationResponse);
	}

	/**
	 * Sends the getCurrencyLeaderboard operation and returns the typed response via callback.
	 */
	public getCurrencyLeaderboard(requestData: GamePlayerModels.AdminGetCurrencyLeaderboardRequestData, onResponse: Action1<GamePlayerResponseModels.GetCurrencyLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetCurrencyLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCurrencyLeaderboardOperationResponse);
	}

	/**
	 * Sends the getCurrencyLeaderboard operation and resolves with the typed response.
	 */
	public async getCurrencyLeaderboardAsync(requestData: GamePlayerModels.AdminGetCurrencyLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetCurrencyLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminGetCurrencyLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCurrencyLeaderboardOperationResponse);
	}

	/**
	 * Sends the getLastLoginLeaderboard operation and returns the typed response via callback.
	 */
	public getLastLoginLeaderboard(requestData: GamePlayerModels.AdminGetLastLoginLeaderboardRequestData, onResponse: Action1<GamePlayerResponseModels.GetLastLoginLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetLastLoginLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetLastLoginLeaderboardOperationResponse);
	}

	/**
	 * Sends the getLastLoginLeaderboard operation and resolves with the typed response.
	 */
	public async getLastLoginLeaderboardAsync(requestData: GamePlayerModels.AdminGetLastLoginLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetLastLoginLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminGetLastLoginLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetLastLoginLeaderboardOperationResponse);
	}

	/**
	 * Sends the getCreateLeaderboard operation and returns the typed response via callback.
	 */
	public getCreateLeaderboard(requestData: GamePlayerModels.AdminGetCreateLeaderboardRequestData, onResponse: Action1<GamePlayerResponseModels.GetCreateLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetCreateLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCreateLeaderboardOperationResponse);
	}

	/**
	 * Sends the getCreateLeaderboard operation and resolves with the typed response.
	 */
	public async getCreateLeaderboardAsync(requestData: GamePlayerModels.AdminGetCreateLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetCreateLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminGetCreateLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCreateLeaderboardOperationResponse);
	}

	/**
	 * Sends the getStatisticsLog operation and returns the typed response via callback.
	 */
	public getStatisticsLog(requestData: GamePlayerModels.AdminGetStatisticsLogRequestData, onResponse: Action1<GamePlayerResponseModels.GetStatisticsLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetStatisticsLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetStatisticsLogOperationResponse);
	}

	/**
	 * Sends the getStatisticsLog operation and resolves with the typed response.
	 */
	public async getStatisticsLogAsync(requestData: GamePlayerModels.AdminGetStatisticsLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetStatisticsLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminGetStatisticsLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetStatisticsLogOperationResponse);
	}

	/**
	 * Sends the getCurrencyLog operation and returns the typed response via callback.
	 */
	public getCurrencyLog(requestData: GamePlayerModels.AdminGetCurrencyLogRequestData, onResponse: Action1<GamePlayerResponseModels.GetCurrencyLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GamePlayerRequestModels.AdminGetCurrencyLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCurrencyLogOperationResponse);
	}

	/**
	 * Sends the getCurrencyLog operation and resolves with the typed response.
	 */
	public async getCurrencyLogAsync(requestData: GamePlayerModels.AdminGetCurrencyLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GamePlayerResponseModels.GetCurrencyLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GamePlayerRequestModels.AdminGetCurrencyLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GamePlayerResponseModels.GetCurrencyLogOperationResponse);
	}

}
