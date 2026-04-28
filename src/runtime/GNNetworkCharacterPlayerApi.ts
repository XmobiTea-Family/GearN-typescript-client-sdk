import { GNNetwork } from "./GNNetwork";
import { Action1 } from "./common/Action1";
import { GNHashtable } from "./common/GNData";
import { OperationRequest } from "./entity/OperationRequest";
import { CharacterPlayerModels } from "./entity/models/CharacterPlayerModels";
import { CharacterPlayerRequestModels } from "./entity/models/CharacterPlayerRequestModels";
import { CharacterPlayerResponseModels } from "./entity/models/CharacterPlayerResponseModels";

/**
 * Public client-scoped namespace for the CharacterPlayer domain.
 *
 * Reachable through {@link GNNetwork.characterPlayer} after
 * {@link GNNetwork.init}. Manages the **per-character** profile
 * (a single in-game character) layered above the
 * account-level {@link GNNetwork.gamePlayer} record.
 *
 * Functional groupings (matching {@link OperationCode} prefixes):
 *
 * 1. **Identity & profile** — `getDisplayName`,
 *    `setDisplayName`, `getAvatar`, `setAvatar`,
 *    `getCharacterInformation`, `getOnlineStatus`,
 *    `getTsCreate`, `getTsLastLogin`, `getCharacterBan`.
 * 2. **Custom data / tags / segments** — `getCustomData`,
 *    `setCustomData`, `getTag`, `setTag`, `getSegment`,
 *    `addSegment`, `removeSegment`, `getCharactersWithTag`,
 *    `getCharactersWithSegment`, `getCharactersWithDisplayName`.
 * 3. **Currencies & statistics** — `getPlayerCurrency`,
 *    `setPlayerCurrency`, `addPlayerCurrency`,
 *    `subtractPlayerCurrency`, `getPlayerStatistics`,
 *    `setPlayerStatistics`, `addPlayerStatistics`,
 *    `getStatisticsLeaderboard`,
 *    `getStatisticsLeaderboardAroundPlayer`,
 *    `getFriendStatisticsLeaderboard`,
 *    `getFriendStatisticsLeaderboardAroundPlayer`.
 * 4. **Friends (character-level social graph)** —
 *    `getPlayerFriend`, `addPlayerFriend`,
 *    `acceptPlayerFriend`, `rejectPlayerFriend`,
 *    `removePlayerFriend`,
 *    `removePlayerFriendRequestSent`, `getOtherPlayerFriend`.
 *    Real-time updates arrive through
 *    {@link OnCharacterPlayerFriendUpdateEventHandler}.
 * 5. **Groups (character-level group membership)** —
 *    `getPlayerGroup`, `createGroup`, `acceptGroupMember`,
 *    `rejectGroupMember`, `leaveGroup`, `addGroupMember`,
 *    `removeGroupMember`, `cancelInviteGroupMember`. Real-time
 *    updates arrive through
 *    {@link OnCharacterPlayerGroupUpdateEventHandler}.
 * 6. **Inventory (per-character)** — `getPlayerInventory` and
 *    related read-only helpers; mutations live on
 *    `GNNetwork.inventory`.
 *
 * Common contract: same as {@link GamePlayerApi} (HTTP /
 * `RequestType.CharacterPlayer` / `RequestRole.Client`,
 * callback + Promise variants per method, sub-namespaces
 * `.server` and `.admin` for elevated callers).
 */
export class CharacterPlayerApi {
	/** Server-scoped character-player operations for trusted backend callers. */
	public server: ServerCharacterPlayerApi = new ServerCharacterPlayerApi();

	/** Admin-scoped character-player operations for dashboard, GM, or backoffice callers. */
	public admin: AdminCharacterPlayerApi = new AdminCharacterPlayerApi();

	/**
	 * Sends the addPlayerFriend operation and returns the typed response via callback.
	 */
	public addPlayerFriend(requestData: CharacterPlayerModels.AddPlayerFriendRequestData, onResponse: Action1<CharacterPlayerResponseModels.AddPlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AddPlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.AddPlayerFriendOperationResponse);
	}

	/**
	 * Sends the addPlayerFriend operation and resolves with the typed response.
	 */
	public async addPlayerFriendAsync(requestData: CharacterPlayerModels.AddPlayerFriendRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.AddPlayerFriendOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AddPlayerFriendOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.AddPlayerFriendOperationResponse);
	}

	/**
	 * Sends the addSegment operation and returns the typed response via callback.
	 */
	public addSegment(requestData: CharacterPlayerModels.AddSegmentRequestData, onResponse: Action1<CharacterPlayerResponseModels.AddSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.AddSegmentOperationResponse);
	}

	/**
	 * Sends the addSegment operation and resolves with the typed response.
	 */
	public async addSegmentAsync(requestData: CharacterPlayerModels.AddSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.AddSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AddSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.AddSegmentOperationResponse);
	}

	/**
	 * Sends the getAvatar operation and returns the typed response via callback.
	 */
	public getAvatar(requestData: CharacterPlayerModels.GetAvatarRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetAvatarOperationResponse);
	}

	/**
	 * Sends the getAvatar operation and resolves with the typed response.
	 */
	public async getAvatarAsync(requestData: CharacterPlayerModels.GetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetAvatarOperationResponse);
	}

	/**
	 * Sends the getCatalogId operation and returns the typed response via callback.
	 */
	public getCatalogId(requestData: CharacterPlayerModels.GetCatalogIdRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetCatalogIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetCatalogIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCatalogIdOperationResponse);
	}

	/**
	 * Sends the getCatalogId operation and resolves with the typed response.
	 */
	public async getCatalogIdAsync(requestData: CharacterPlayerModels.GetCatalogIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetCatalogIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetCatalogIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCatalogIdOperationResponse);
	}

	/**
	 * Sends the getCountryCode operation and returns the typed response via callback.
	 */
	public getCountryCode(requestData: CharacterPlayerModels.GetCountryCodeRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCountryCodeOperationResponse);
	}

	/**
	 * Sends the getCountryCode operation and resolves with the typed response.
	 */
	public async getCountryCodeAsync(requestData: CharacterPlayerModels.GetCountryCodeRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetCountryCodeOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetCountryCodeOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCountryCodeOperationResponse);
	}

	/**
	 * Sends the getCustomData operation and returns the typed response via callback.
	 */
	public getCustomData(requestData: CharacterPlayerModels.GetCustomDataRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCustomDataOperationResponse);
	}

	/**
	 * Sends the getCustomData operation and resolves with the typed response.
	 */
	public async getCustomDataAsync(requestData: CharacterPlayerModels.GetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCustomDataOperationResponse);
	}

	/**
	 * Sends the getDisplayName operation and returns the typed response via callback.
	 */
	public getDisplayName(requestData: CharacterPlayerModels.GetDisplayNameRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetDisplayNameOperationResponse);
	}

	/**
	 * Sends the getDisplayName operation and resolves with the typed response.
	 */
	public async getDisplayNameAsync(requestData: CharacterPlayerModels.GetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetDisplayNameOperationResponse);
	}

	/**
	 * Sends the getFriendStatisticsLeaderboardAroundPlayer operation and returns the typed response via callback.
	 */
	public getFriendStatisticsLeaderboardAroundPlayer(requestData: CharacterPlayerModels.GetFriendStatisticsLeaderboardAroundPlayerRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetFriendStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	/**
	 * Sends the getFriendStatisticsLeaderboardAroundPlayer operation and resolves with the typed response.
	 */
	public async getFriendStatisticsLeaderboardAroundPlayerAsync(requestData: CharacterPlayerModels.GetFriendStatisticsLeaderboardAroundPlayerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetFriendStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	/**
	 * Sends the getFriendStatisticsLeaderboard operation and returns the typed response via callback.
	 */
	public getFriendStatisticsLeaderboard(requestData: CharacterPlayerModels.GetFriendStatisticsLeaderboardRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetFriendStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the getFriendStatisticsLeaderboard operation and resolves with the typed response.
	 */
	public async getFriendStatisticsLeaderboardAsync(requestData: CharacterPlayerModels.GetFriendStatisticsLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetFriendStatisticsLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the getIpAddressCreate operation and returns the typed response via callback.
	 */
	public getIpAddressCreate(requestData: CharacterPlayerModels.GetIpAddressCreateRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetIpAddressCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetIpAddressCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetIpAddressCreateOperationResponse);
	}

	/**
	 * Sends the getIpAddressCreate operation and resolves with the typed response.
	 */
	public async getIpAddressCreateAsync(requestData: CharacterPlayerModels.GetIpAddressCreateRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetIpAddressCreateOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetIpAddressCreateOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetIpAddressCreateOperationResponse);
	}

	/**
	 * Sends the getOwner operation and returns the typed response via callback.
	 */
	public getOwner(requestData: CharacterPlayerModels.GetOwnerRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetOwnerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetOwnerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetOwnerOperationResponse);
	}

	/**
	 * Sends the getOwner operation and resolves with the typed response.
	 */
	public async getOwnerAsync(requestData: CharacterPlayerModels.GetOwnerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetOwnerOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetOwnerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetOwnerOperationResponse);
	}

	/**
	 * Sends the getPlayerBan operation and returns the typed response via callback.
	 */
	public getPlayerBan(requestData: CharacterPlayerModels.GetPlayerBanRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerBanOperationResponse);
	}

	/**
	 * Sends the getPlayerBan operation and resolves with the typed response.
	 */
	public async getPlayerBanAsync(requestData: CharacterPlayerModels.GetPlayerBanRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayerBanOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetPlayerBanOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerBanOperationResponse);
	}

	/**
	 * Sends the getPlayerCurrency operation and returns the typed response via callback.
	 */
	public getPlayerCurrency(requestData: CharacterPlayerModels.GetPlayerCurrencyRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetPlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerCurrencyOperationResponse);
	}

	/**
	 * Sends the getPlayerCurrency operation and resolves with the typed response.
	 */
	public async getPlayerCurrencyAsync(requestData: CharacterPlayerModels.GetPlayerCurrencyRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayerCurrencyOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetPlayerCurrencyOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerCurrencyOperationResponse);
	}

	/**
	 * Sends the getPlayerData operation and returns the typed response via callback.
	 */
	public getPlayerData(requestData: CharacterPlayerModels.GetPlayerDataRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerDataOperationResponse);
	}

	/**
	 * Sends the getPlayerData operation and resolves with the typed response.
	 */
	public async getPlayerDataAsync(requestData: CharacterPlayerModels.GetPlayerDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayerDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetPlayerDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerDataOperationResponse);
	}

	/**
	 * Sends the getPlayerFriend operation and returns the typed response via callback.
	 */
	public getPlayerFriend(requestData: CharacterPlayerModels.GetPlayerFriendRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetPlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerFriendOperationResponse);
	}

	/**
	 * Sends the getPlayerFriend operation and resolves with the typed response.
	 */
	public async getPlayerFriendAsync(requestData: CharacterPlayerModels.GetPlayerFriendRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayerFriendOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetPlayerFriendOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerFriendOperationResponse);
	}

	/**
	 * Sends the getPlayerGroup operation and returns the typed response via callback.
	 */
	public getPlayerGroup(requestData: CharacterPlayerModels.GetPlayerGroupRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetPlayerGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerGroupOperationResponse);
	}

	/**
	 * Sends the getPlayerGroup operation and resolves with the typed response.
	 */
	public async getPlayerGroupAsync(requestData: CharacterPlayerModels.GetPlayerGroupRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayerGroupOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetPlayerGroupOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerGroupOperationResponse);
	}

	/**
	 * Sends the getPlayerInformation operation and returns the typed response via callback.
	 */
	public getPlayerInformation(requestData: CharacterPlayerModels.GetPlayerInformationRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetPlayerInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerInformationOperationResponse);
	}

	/**
	 * Sends the getPlayerInformation operation and resolves with the typed response.
	 */
	public async getPlayerInformationAsync(requestData: CharacterPlayerModels.GetPlayerInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayerInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetPlayerInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerInformationOperationResponse);
	}

	/**
	 * Sends the getPlayerInventory operation and returns the typed response via callback.
	 */
	public getPlayerInventory(requestData: CharacterPlayerModels.GetPlayerInventoryRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerInventoryOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetPlayerInventoryOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerInventoryOperationResponse);
	}

	/**
	 * Sends the getPlayerInventory operation and resolves with the typed response.
	 */
	public async getPlayerInventoryAsync(requestData: CharacterPlayerModels.GetPlayerInventoryRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayerInventoryOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetPlayerInventoryOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerInventoryOperationResponse);
	}

	/**
	 * Sends the getPlayerStatistics operation and returns the typed response via callback.
	 */
	public getPlayerStatistics(requestData: CharacterPlayerModels.GetPlayerStatisticsRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetPlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerStatisticsOperationResponse);
	}

	/**
	 * Sends the getPlayerStatistics operation and resolves with the typed response.
	 */
	public async getPlayerStatisticsAsync(requestData: CharacterPlayerModels.GetPlayerStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayerStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetPlayerStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerStatisticsOperationResponse);
	}

	/**
	 * Sends the getPlayersWithDisplayName operation and returns the typed response via callback.
	 */
	public getPlayersWithDisplayName(requestData: CharacterPlayerModels.GetPlayersWithDisplayNameRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetPlayersWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse);
	}

	/**
	 * Sends the getPlayersWithDisplayName operation and resolves with the typed response.
	 */
	public async getPlayersWithDisplayNameAsync(requestData: CharacterPlayerModels.GetPlayersWithDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetPlayersWithDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse);
	}

	/**
	 * Sends the getPlayersWithSegment operation and returns the typed response via callback.
	 */
	public getPlayersWithSegment(requestData: CharacterPlayerModels.GetPlayersWithSegmentRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayersWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetPlayersWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayersWithSegmentOperationResponse);
	}

	/**
	 * Sends the getPlayersWithSegment operation and resolves with the typed response.
	 */
	public async getPlayersWithSegmentAsync(requestData: CharacterPlayerModels.GetPlayersWithSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayersWithSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetPlayersWithSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayersWithSegmentOperationResponse);
	}

	/**
	 * Sends the getPlayersWithTag operation and returns the typed response via callback.
	 */
	public getPlayersWithTag(requestData: CharacterPlayerModels.GetPlayersWithTagRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayersWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetPlayersWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayersWithTagOperationResponse);
	}

	/**
	 * Sends the getPlayersWithTag operation and resolves with the typed response.
	 */
	public async getPlayersWithTagAsync(requestData: CharacterPlayerModels.GetPlayersWithTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayersWithTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetPlayersWithTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayersWithTagOperationResponse);
	}

	/**
	 * Sends the getRemoveStatus operation and returns the typed response via callback.
	 */
	public getRemoveStatus(requestData: CharacterPlayerModels.GetRemoveStatusRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetRemoveStatusOperationResponse);
	}

	/**
	 * Sends the getRemoveStatus operation and resolves with the typed response.
	 */
	public async getRemoveStatusAsync(requestData: CharacterPlayerModels.GetRemoveStatusRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetRemoveStatusOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetRemoveStatusOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetRemoveStatusOperationResponse);
	}

	/**
	 * Sends the getSegment operation and returns the typed response via callback.
	 */
	public getSegment(requestData: CharacterPlayerModels.GetSegmentRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetSegmentOperationResponse);
	}

	/**
	 * Sends the getSegment operation and resolves with the typed response.
	 */
	public async getSegmentAsync(requestData: CharacterPlayerModels.GetSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetSegmentOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboardAroundPlayer operation and returns the typed response via callback.
	 */
	public getStatisticsLeaderboardAroundPlayer(requestData: CharacterPlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboardAroundPlayer operation and resolves with the typed response.
	 */
	public async getStatisticsLeaderboardAroundPlayerAsync(requestData: CharacterPlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboard operation and returns the typed response via callback.
	 */
	public getStatisticsLeaderboard(requestData: CharacterPlayerModels.GetStatisticsLeaderboardRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboard operation and resolves with the typed response.
	 */
	public async getStatisticsLeaderboardAsync(requestData: CharacterPlayerModels.GetStatisticsLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetStatisticsLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the getTag operation and returns the typed response via callback.
	 */
	public getTag(requestData: CharacterPlayerModels.GetTagRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetTagOperationResponse);
	}

	/**
	 * Sends the getTag operation and resolves with the typed response.
	 */
	public async getTagAsync(requestData: CharacterPlayerModels.GetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetTagOperationResponse);
	}

	/**
	 * Sends the getTsCreate operation and returns the typed response via callback.
	 */
	public getTsCreate(requestData: CharacterPlayerModels.GetTsCreateRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetTsCreateOperationResponse);
	}

	/**
	 * Sends the getTsCreate operation and resolves with the typed response.
	 */
	public async getTsCreateAsync(requestData: CharacterPlayerModels.GetTsCreateRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetTsCreateOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetTsCreateOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetTsCreateOperationResponse);
	}

	/**
	 * Sends the getTsLastLogin operation and returns the typed response via callback.
	 */
	public getTsLastLogin(requestData: CharacterPlayerModels.GetTsLastLoginRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetTsLastLoginOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetTsLastLoginOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetTsLastLoginOperationResponse);
	}

	/**
	 * Sends the getTsLastLogin operation and resolves with the typed response.
	 */
	public async getTsLastLoginAsync(requestData: CharacterPlayerModels.GetTsLastLoginRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetTsLastLoginOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetTsLastLoginOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetTsLastLoginOperationResponse);
	}

	/**
	 * Sends the createGroup operation and returns the typed response via callback.
	 */
	public createGroup(requestData: CharacterPlayerModels.CreateGroupRequestData, onResponse: Action1<CharacterPlayerResponseModels.CreateGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.CreateGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.CreateGroupOperationResponse);
	}

	/**
	 * Sends the createGroup operation and resolves with the typed response.
	 */
	public async createGroupAsync(requestData: CharacterPlayerModels.CreateGroupRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.CreateGroupOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.CreateGroupOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.CreateGroupOperationResponse);
	}

	/**
	 * Sends the createPlayerItem operation and returns the typed response via callback.
	 */
	public createPlayerItem(requestData: CharacterPlayerModels.CreatePlayerItemRequestData, onResponse: Action1<CharacterPlayerResponseModels.CreatePlayerItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.CreatePlayerItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.CreatePlayerItemOperationResponse);
	}

	/**
	 * Sends the createPlayerItem operation and resolves with the typed response.
	 */
	public async createPlayerItemAsync(requestData: CharacterPlayerModels.CreatePlayerItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.CreatePlayerItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.CreatePlayerItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.CreatePlayerItemOperationResponse);
	}

	/**
	 * Sends the joinGroup operation and returns the typed response via callback.
	 */
	public joinGroup(requestData: CharacterPlayerModels.JoinGroupRequestData, onResponse: Action1<CharacterPlayerResponseModels.JoinGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.JoinGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.JoinGroupOperationResponse);
	}

	/**
	 * Sends the joinGroup operation and resolves with the typed response.
	 */
	public async joinGroupAsync(requestData: CharacterPlayerModels.JoinGroupRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.JoinGroupOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.JoinGroupOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.JoinGroupOperationResponse);
	}

	/**
	 * Sends the leaveGroup operation and returns the typed response via callback.
	 */
	public leaveGroup(requestData: CharacterPlayerModels.LeaveGroupRequestData, onResponse: Action1<CharacterPlayerResponseModels.LeaveGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.LeaveGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.LeaveGroupOperationResponse);
	}

	/**
	 * Sends the leaveGroup operation and resolves with the typed response.
	 */
	public async leaveGroupAsync(requestData: CharacterPlayerModels.LeaveGroupRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.LeaveGroupOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.LeaveGroupOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.LeaveGroupOperationResponse);
	}

	/**
	 * Sends the removePlayerFriend operation and returns the typed response via callback.
	 */
	public removePlayerFriend(requestData: CharacterPlayerModels.RemovePlayerFriendRequestData, onResponse: Action1<CharacterPlayerResponseModels.RemovePlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.RemovePlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemovePlayerFriendOperationResponse);
	}

	/**
	 * Sends the removePlayerFriend operation and resolves with the typed response.
	 */
	public async removePlayerFriendAsync(requestData: CharacterPlayerModels.RemovePlayerFriendRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.RemovePlayerFriendOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.RemovePlayerFriendOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemovePlayerFriendOperationResponse);
	}

	/**
	 * Sends the removePlayerItem operation and returns the typed response via callback.
	 */
	public removePlayerItem(requestData: CharacterPlayerModels.RemovePlayerItemRequestData, onResponse: Action1<CharacterPlayerResponseModels.RemovePlayerItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.RemovePlayerItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemovePlayerItemOperationResponse);
	}

	/**
	 * Sends the removePlayerItem operation and resolves with the typed response.
	 */
	public async removePlayerItemAsync(requestData: CharacterPlayerModels.RemovePlayerItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.RemovePlayerItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.RemovePlayerItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemovePlayerItemOperationResponse);
	}

	/**
	 * Sends the removeSegment operation and returns the typed response via callback.
	 */
	public removeSegment(requestData: CharacterPlayerModels.RemoveSegmentRequestData, onResponse: Action1<CharacterPlayerResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.RemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemoveSegmentOperationResponse);
	}

	/**
	 * Sends the removeSegment operation and resolves with the typed response.
	 */
	public async removeSegmentAsync(requestData: CharacterPlayerModels.RemoveSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.RemoveSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.RemoveSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemoveSegmentOperationResponse);
	}

	/**
	 * Sends the removeTag operation and returns the typed response via callback.
	 */
	public removeTag(requestData: CharacterPlayerModels.RemoveTagRequestData, onResponse: Action1<CharacterPlayerResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.RemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemoveTagOperationResponse);
	}

	/**
	 * Sends the removeTag operation and resolves with the typed response.
	 */
	public async removeTagAsync(requestData: CharacterPlayerModels.RemoveTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.RemoveTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.RemoveTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemoveTagOperationResponse);
	}

	/**
	 * Sends the setAvatar operation and returns the typed response via callback.
	 */
	public setAvatar(requestData: CharacterPlayerModels.SetAvatarRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.SetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetAvatarOperationResponse);
	}

	/**
	 * Sends the setAvatar operation and resolves with the typed response.
	 */
	public async setAvatarAsync(requestData: CharacterPlayerModels.SetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.SetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.SetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetAvatarOperationResponse);
	}

	/**
	 * Sends the setCountryCode operation and returns the typed response via callback.
	 */
	public setCountryCode(requestData: CharacterPlayerModels.SetCountryCodeRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.SetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetCountryCodeOperationResponse);
	}

	/**
	 * Sends the setCountryCode operation and resolves with the typed response.
	 */
	public async setCountryCodeAsync(requestData: CharacterPlayerModels.SetCountryCodeRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.SetCountryCodeOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.SetCountryCodeOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetCountryCodeOperationResponse);
	}

	/**
	 * Sends the setCustomData operation and returns the typed response via callback.
	 */
	public setCustomData(requestData: CharacterPlayerModels.SetCustomDataRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.SetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetCustomDataOperationResponse);
	}

	/**
	 * Sends the setCustomData operation and resolves with the typed response.
	 */
	public async setCustomDataAsync(requestData: CharacterPlayerModels.SetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.SetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.SetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetCustomDataOperationResponse);
	}

	/**
	 * Sends the setDisplayName operation and returns the typed response via callback.
	 */
	public setDisplayName(requestData: CharacterPlayerModels.SetDisplayNameRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.SetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetDisplayNameOperationResponse);
	}

	/**
	 * Sends the setDisplayName operation and resolves with the typed response.
	 */
	public async setDisplayNameAsync(requestData: CharacterPlayerModels.SetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.SetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.SetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetDisplayNameOperationResponse);
	}

	/**
	 * Sends the setOwner operation and returns the typed response via callback.
	 */
	public setOwner(requestData: CharacterPlayerModels.SetOwnerRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetOwnerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.SetOwnerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetOwnerOperationResponse);
	}

	/**
	 * Sends the setOwner operation and resolves with the typed response.
	 */
	public async setOwnerAsync(requestData: CharacterPlayerModels.SetOwnerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.SetOwnerOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.SetOwnerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetOwnerOperationResponse);
	}

	/**
	 * Sends the setPlayerBan operation and returns the typed response via callback.
	 */
	public setPlayerBan(requestData: CharacterPlayerModels.SetPlayerBanRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.SetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetPlayerBanOperationResponse);
	}

	/**
	 * Sends the setPlayerBan operation and resolves with the typed response.
	 */
	public async setPlayerBanAsync(requestData: CharacterPlayerModels.SetPlayerBanRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.SetPlayerBanOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.SetPlayerBanOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetPlayerBanOperationResponse);
	}

	/**
	 * Sends the changePlayerCurrency operation and returns the typed response via callback.
	 */
	public changePlayerCurrency(requestData: CharacterPlayerModels.ChangePlayerCurrencyRequestData, onResponse: Action1<CharacterPlayerResponseModels.ChangePlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ChangePlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.ChangePlayerCurrencyOperationResponse);
	}

	/**
	 * Sends the changePlayerCurrency operation and resolves with the typed response.
	 */
	public async changePlayerCurrencyAsync(requestData: CharacterPlayerModels.ChangePlayerCurrencyRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.ChangePlayerCurrencyOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ChangePlayerCurrencyOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.ChangePlayerCurrencyOperationResponse);
	}

	/**
	 * Sends the setPlayerData operation and returns the typed response via callback.
	 */
	public setPlayerData(requestData: CharacterPlayerModels.SetPlayerDataRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.SetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetPlayerDataOperationResponse);
	}

	/**
	 * Sends the setPlayerData operation and resolves with the typed response.
	 */
	public async setPlayerDataAsync(requestData: CharacterPlayerModels.SetPlayerDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.SetPlayerDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.SetPlayerDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetPlayerDataOperationResponse);
	}

	/**
	 * Sends the changePlayerStatistics operation and returns the typed response via callback.
	 */
	public changePlayerStatistics(requestData: CharacterPlayerModels.ChangePlayerStatisticsRequestData, onResponse: Action1<CharacterPlayerResponseModels.ChangePlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ChangePlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.ChangePlayerStatisticsOperationResponse);
	}

	/**
	 * Sends the changePlayerStatistics operation and resolves with the typed response.
	 */
	public async changePlayerStatisticsAsync(requestData: CharacterPlayerModels.ChangePlayerStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.ChangePlayerStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ChangePlayerStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.ChangePlayerStatisticsOperationResponse);
	}

	/**
	 * Sends the setRemoveStatus operation and returns the typed response via callback.
	 */
	public setRemoveStatus(requestData: CharacterPlayerModels.SetRemoveStatusRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.SetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetRemoveStatusOperationResponse);
	}

	/**
	 * Sends the setRemoveStatus operation and resolves with the typed response.
	 */
	public async setRemoveStatusAsync(requestData: CharacterPlayerModels.SetRemoveStatusRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.SetRemoveStatusOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.SetRemoveStatusOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetRemoveStatusOperationResponse);
	}

	/**
	 * Sends the setTag operation and returns the typed response via callback.
	 */
	public setTag(requestData: CharacterPlayerModels.SetTagRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.SetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetTagOperationResponse);
	}

	/**
	 * Sends the setTag operation and resolves with the typed response.
	 */
	public async setTagAsync(requestData: CharacterPlayerModels.SetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.SetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.SetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetTagOperationResponse);
	}

	/**
	 * Sends the getCurrencyLeaderboard operation and returns the typed response via callback.
	 */
	public getCurrencyLeaderboard(requestData: CharacterPlayerModels.GetCurrencyLeaderboardRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetCurrencyLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetCurrencyLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCurrencyLeaderboardOperationResponse);
	}

	/**
	 * Sends the getCurrencyLeaderboard operation and resolves with the typed response.
	 */
	public async getCurrencyLeaderboardAsync(requestData: CharacterPlayerModels.GetCurrencyLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetCurrencyLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetCurrencyLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCurrencyLeaderboardOperationResponse);
	}

	/**
	 * Sends the getCreateLeaderboard operation and returns the typed response via callback.
	 */
	public getCreateLeaderboard(requestData: CharacterPlayerModels.GetCreateLeaderboardRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetCreateLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetCreateLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCreateLeaderboardOperationResponse);
	}

	/**
	 * Sends the getCreateLeaderboard operation and resolves with the typed response.
	 */
	public async getCreateLeaderboardAsync(requestData: CharacterPlayerModels.GetCreateLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetCreateLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetCreateLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCreateLeaderboardOperationResponse);
	}

	/**
	 * Sends the getLastLoginLeaderboard operation and returns the typed response via callback.
	 */
	public getLastLoginLeaderboard(requestData: CharacterPlayerModels.GetLastLoginLeaderboardRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetLastLoginLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetLastLoginLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetLastLoginLeaderboardOperationResponse);
	}

	/**
	 * Sends the getLastLoginLeaderboard operation and resolves with the typed response.
	 */
	public async getLastLoginLeaderboardAsync(requestData: CharacterPlayerModels.GetLastLoginLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetLastLoginLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetLastLoginLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetLastLoginLeaderboardOperationResponse);
	}

	/**
	 * Sends the getStatisticsLog operation and returns the typed response via callback.
	 */
	public getStatisticsLog(requestData: CharacterPlayerModels.GetStatisticsLogRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetStatisticsLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetStatisticsLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetStatisticsLogOperationResponse);
	}

	/**
	 * Sends the getStatisticsLog operation and resolves with the typed response.
	 */
	public async getStatisticsLogAsync(requestData: CharacterPlayerModels.GetStatisticsLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetStatisticsLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetStatisticsLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetStatisticsLogOperationResponse);
	}

	/**
	 * Sends the getCurrencyLog operation and returns the typed response via callback.
	 */
	public getCurrencyLog(requestData: CharacterPlayerModels.GetCurrencyLogRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetCurrencyLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.GetCurrencyLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCurrencyLogOperationResponse);
	}

	/**
	 * Sends the getCurrencyLog operation and resolves with the typed response.
	 */
	public async getCurrencyLogAsync(requestData: CharacterPlayerModels.GetCurrencyLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetCurrencyLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.GetCurrencyLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCurrencyLogOperationResponse);
	}

}

/**
 * Server-scoped CharacterPlayer namespace, reachable through
 * `GNNetwork.characterPlayer.server`.
 *
 * Mirrors every method on {@link CharacterPlayerApi} but uses
 * the `Server*RequestData` DTO variants. The server flavour
 * accepts an explicit `characterId` (and usually `userId`) so a
 * trusted backend can act on behalf of any character without
 * holding the player's auth token. Always pass a valid
 * server-side `secretKey`.
 */
export class ServerCharacterPlayerApi {
	/**
	 * Sends the addPlayerFriend operation and returns the typed response via callback.
	 */
	public addPlayerFriend(requestData: CharacterPlayerModels.ServerAddPlayerFriendRequestData, onResponse: Action1<CharacterPlayerResponseModels.AddPlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerAddPlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.AddPlayerFriendOperationResponse);
	}

	/**
	 * Sends the addPlayerFriend operation and resolves with the typed response.
	 */
	public async addPlayerFriendAsync(requestData: CharacterPlayerModels.ServerAddPlayerFriendRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.AddPlayerFriendOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerAddPlayerFriendOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.AddPlayerFriendOperationResponse);
	}

	/**
	 * Sends the addSegment operation and returns the typed response via callback.
	 */
	public addSegment(requestData: CharacterPlayerModels.ServerAddSegmentRequestData, onResponse: Action1<CharacterPlayerResponseModels.AddSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerAddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.AddSegmentOperationResponse);
	}

	/**
	 * Sends the addSegment operation and resolves with the typed response.
	 */
	public async addSegmentAsync(requestData: CharacterPlayerModels.ServerAddSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.AddSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerAddSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.AddSegmentOperationResponse);
	}

	/**
	 * Sends the getAvatar operation and returns the typed response via callback.
	 */
	public getAvatar(requestData: CharacterPlayerModels.ServerGetAvatarRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetAvatarOperationResponse);
	}

	/**
	 * Sends the getAvatar operation and resolves with the typed response.
	 */
	public async getAvatarAsync(requestData: CharacterPlayerModels.ServerGetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetAvatarOperationResponse);
	}

	/**
	 * Sends the getCatalogId operation and returns the typed response via callback.
	 */
	public getCatalogId(requestData: CharacterPlayerModels.ServerGetCatalogIdRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetCatalogIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetCatalogIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCatalogIdOperationResponse);
	}

	/**
	 * Sends the getCatalogId operation and resolves with the typed response.
	 */
	public async getCatalogIdAsync(requestData: CharacterPlayerModels.ServerGetCatalogIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetCatalogIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetCatalogIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCatalogIdOperationResponse);
	}

	/**
	 * Sends the getCountryCode operation and returns the typed response via callback.
	 */
	public getCountryCode(requestData: CharacterPlayerModels.ServerGetCountryCodeRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCountryCodeOperationResponse);
	}

	/**
	 * Sends the getCountryCode operation and resolves with the typed response.
	 */
	public async getCountryCodeAsync(requestData: CharacterPlayerModels.ServerGetCountryCodeRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetCountryCodeOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetCountryCodeOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCountryCodeOperationResponse);
	}

	/**
	 * Sends the getCustomData operation and returns the typed response via callback.
	 */
	public getCustomData(requestData: CharacterPlayerModels.ServerGetCustomDataRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCustomDataOperationResponse);
	}

	/**
	 * Sends the getCustomData operation and resolves with the typed response.
	 */
	public async getCustomDataAsync(requestData: CharacterPlayerModels.ServerGetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCustomDataOperationResponse);
	}

	/**
	 * Sends the getDisplayName operation and returns the typed response via callback.
	 */
	public getDisplayName(requestData: CharacterPlayerModels.ServerGetDisplayNameRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetDisplayNameOperationResponse);
	}

	/**
	 * Sends the getDisplayName operation and resolves with the typed response.
	 */
	public async getDisplayNameAsync(requestData: CharacterPlayerModels.ServerGetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetDisplayNameOperationResponse);
	}

	/**
	 * Sends the getFriendStatisticsLeaderboardAroundPlayer operation and returns the typed response via callback.
	 */
	public getFriendStatisticsLeaderboardAroundPlayer(requestData: CharacterPlayerModels.ServerGetFriendStatisticsLeaderboardAroundPlayerRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetFriendStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	/**
	 * Sends the getFriendStatisticsLeaderboardAroundPlayer operation and resolves with the typed response.
	 */
	public async getFriendStatisticsLeaderboardAroundPlayerAsync(requestData: CharacterPlayerModels.ServerGetFriendStatisticsLeaderboardAroundPlayerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetFriendStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	/**
	 * Sends the getFriendStatisticsLeaderboard operation and returns the typed response via callback.
	 */
	public getFriendStatisticsLeaderboard(requestData: CharacterPlayerModels.ServerGetFriendStatisticsLeaderboardRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetFriendStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the getFriendStatisticsLeaderboard operation and resolves with the typed response.
	 */
	public async getFriendStatisticsLeaderboardAsync(requestData: CharacterPlayerModels.ServerGetFriendStatisticsLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetFriendStatisticsLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the getIpAddressCreate operation and returns the typed response via callback.
	 */
	public getIpAddressCreate(requestData: CharacterPlayerModels.ServerGetIpAddressCreateRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetIpAddressCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetIpAddressCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetIpAddressCreateOperationResponse);
	}

	/**
	 * Sends the getIpAddressCreate operation and resolves with the typed response.
	 */
	public async getIpAddressCreateAsync(requestData: CharacterPlayerModels.ServerGetIpAddressCreateRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetIpAddressCreateOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetIpAddressCreateOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetIpAddressCreateOperationResponse);
	}

	/**
	 * Sends the getOwner operation and returns the typed response via callback.
	 */
	public getOwner(requestData: CharacterPlayerModels.ServerGetOwnerRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetOwnerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetOwnerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetOwnerOperationResponse);
	}

	/**
	 * Sends the getOwner operation and resolves with the typed response.
	 */
	public async getOwnerAsync(requestData: CharacterPlayerModels.ServerGetOwnerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetOwnerOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetOwnerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetOwnerOperationResponse);
	}

	/**
	 * Sends the getPlayerBan operation and returns the typed response via callback.
	 */
	public getPlayerBan(requestData: CharacterPlayerModels.ServerGetPlayerBanRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerBanOperationResponse);
	}

	/**
	 * Sends the getPlayerBan operation and resolves with the typed response.
	 */
	public async getPlayerBanAsync(requestData: CharacterPlayerModels.ServerGetPlayerBanRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayerBanOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetPlayerBanOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerBanOperationResponse);
	}

	/**
	 * Sends the getPlayerCurrency operation and returns the typed response via callback.
	 */
	public getPlayerCurrency(requestData: CharacterPlayerModels.ServerGetPlayerCurrencyRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetPlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerCurrencyOperationResponse);
	}

	/**
	 * Sends the getPlayerCurrency operation and resolves with the typed response.
	 */
	public async getPlayerCurrencyAsync(requestData: CharacterPlayerModels.ServerGetPlayerCurrencyRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayerCurrencyOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetPlayerCurrencyOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerCurrencyOperationResponse);
	}

	/**
	 * Sends the getPlayerData operation and returns the typed response via callback.
	 */
	public getPlayerData(requestData: CharacterPlayerModels.ServerGetPlayerDataRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerDataOperationResponse);
	}

	/**
	 * Sends the getPlayerData operation and resolves with the typed response.
	 */
	public async getPlayerDataAsync(requestData: CharacterPlayerModels.ServerGetPlayerDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayerDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetPlayerDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerDataOperationResponse);
	}

	/**
	 * Sends the getPlayerFriend operation and returns the typed response via callback.
	 */
	public getPlayerFriend(requestData: CharacterPlayerModels.ServerGetPlayerFriendRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetPlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerFriendOperationResponse);
	}

	/**
	 * Sends the getPlayerFriend operation and resolves with the typed response.
	 */
	public async getPlayerFriendAsync(requestData: CharacterPlayerModels.ServerGetPlayerFriendRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayerFriendOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetPlayerFriendOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerFriendOperationResponse);
	}

	/**
	 * Sends the getPlayerGroup operation and returns the typed response via callback.
	 */
	public getPlayerGroup(requestData: CharacterPlayerModels.ServerGetPlayerGroupRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetPlayerGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerGroupOperationResponse);
	}

	/**
	 * Sends the getPlayerGroup operation and resolves with the typed response.
	 */
	public async getPlayerGroupAsync(requestData: CharacterPlayerModels.ServerGetPlayerGroupRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayerGroupOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetPlayerGroupOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerGroupOperationResponse);
	}

	/**
	 * Sends the getPlayerInformation operation and returns the typed response via callback.
	 */
	public getPlayerInformation(requestData: CharacterPlayerModels.ServerGetPlayerInformationRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetPlayerInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerInformationOperationResponse);
	}

	/**
	 * Sends the getPlayerInformation operation and resolves with the typed response.
	 */
	public async getPlayerInformationAsync(requestData: CharacterPlayerModels.ServerGetPlayerInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayerInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetPlayerInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerInformationOperationResponse);
	}

	/**
	 * Sends the getPlayerInventory operation and returns the typed response via callback.
	 */
	public getPlayerInventory(requestData: CharacterPlayerModels.ServerGetPlayerInventoryRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerInventoryOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetPlayerInventoryOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerInventoryOperationResponse);
	}

	/**
	 * Sends the getPlayerInventory operation and resolves with the typed response.
	 */
	public async getPlayerInventoryAsync(requestData: CharacterPlayerModels.ServerGetPlayerInventoryRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayerInventoryOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetPlayerInventoryOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerInventoryOperationResponse);
	}

	/**
	 * Sends the getPlayerStatistics operation and returns the typed response via callback.
	 */
	public getPlayerStatistics(requestData: CharacterPlayerModels.ServerGetPlayerStatisticsRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetPlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerStatisticsOperationResponse);
	}

	/**
	 * Sends the getPlayerStatistics operation and resolves with the typed response.
	 */
	public async getPlayerStatisticsAsync(requestData: CharacterPlayerModels.ServerGetPlayerStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayerStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetPlayerStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerStatisticsOperationResponse);
	}

	/**
	 * Sends the getPlayersWithDisplayName operation and returns the typed response via callback.
	 */
	public getPlayersWithDisplayName(requestData: CharacterPlayerModels.ServerGetPlayersWithDisplayNameRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetPlayersWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse);
	}

	/**
	 * Sends the getPlayersWithDisplayName operation and resolves with the typed response.
	 */
	public async getPlayersWithDisplayNameAsync(requestData: CharacterPlayerModels.ServerGetPlayersWithDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetPlayersWithDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse);
	}

	/**
	 * Sends the getPlayersWithSegment operation and returns the typed response via callback.
	 */
	public getPlayersWithSegment(requestData: CharacterPlayerModels.ServerGetPlayersWithSegmentRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayersWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetPlayersWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayersWithSegmentOperationResponse);
	}

	/**
	 * Sends the getPlayersWithSegment operation and resolves with the typed response.
	 */
	public async getPlayersWithSegmentAsync(requestData: CharacterPlayerModels.ServerGetPlayersWithSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayersWithSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetPlayersWithSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayersWithSegmentOperationResponse);
	}

	/**
	 * Sends the getPlayersWithTag operation and returns the typed response via callback.
	 */
	public getPlayersWithTag(requestData: CharacterPlayerModels.ServerGetPlayersWithTagRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayersWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetPlayersWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayersWithTagOperationResponse);
	}

	/**
	 * Sends the getPlayersWithTag operation and resolves with the typed response.
	 */
	public async getPlayersWithTagAsync(requestData: CharacterPlayerModels.ServerGetPlayersWithTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayersWithTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetPlayersWithTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayersWithTagOperationResponse);
	}

	/**
	 * Sends the getRemoveStatus operation and returns the typed response via callback.
	 */
	public getRemoveStatus(requestData: CharacterPlayerModels.ServerGetRemoveStatusRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetRemoveStatusOperationResponse);
	}

	/**
	 * Sends the getRemoveStatus operation and resolves with the typed response.
	 */
	public async getRemoveStatusAsync(requestData: CharacterPlayerModels.ServerGetRemoveStatusRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetRemoveStatusOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetRemoveStatusOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetRemoveStatusOperationResponse);
	}

	/**
	 * Sends the getSegment operation and returns the typed response via callback.
	 */
	public getSegment(requestData: CharacterPlayerModels.ServerGetSegmentRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetSegmentOperationResponse);
	}

	/**
	 * Sends the getSegment operation and resolves with the typed response.
	 */
	public async getSegmentAsync(requestData: CharacterPlayerModels.ServerGetSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetSegmentOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboardAroundPlayer operation and returns the typed response via callback.
	 */
	public getStatisticsLeaderboardAroundPlayer(requestData: CharacterPlayerModels.ServerGetStatisticsLeaderboardAroundPlayerRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboardAroundPlayer operation and resolves with the typed response.
	 */
	public async getStatisticsLeaderboardAroundPlayerAsync(requestData: CharacterPlayerModels.ServerGetStatisticsLeaderboardAroundPlayerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboard operation and returns the typed response via callback.
	 */
	public getStatisticsLeaderboard(requestData: CharacterPlayerModels.ServerGetStatisticsLeaderboardRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboard operation and resolves with the typed response.
	 */
	public async getStatisticsLeaderboardAsync(requestData: CharacterPlayerModels.ServerGetStatisticsLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetStatisticsLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the getTag operation and returns the typed response via callback.
	 */
	public getTag(requestData: CharacterPlayerModels.ServerGetTagRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetTagOperationResponse);
	}

	/**
	 * Sends the getTag operation and resolves with the typed response.
	 */
	public async getTagAsync(requestData: CharacterPlayerModels.ServerGetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetTagOperationResponse);
	}

	/**
	 * Sends the getTsCreate operation and returns the typed response via callback.
	 */
	public getTsCreate(requestData: CharacterPlayerModels.ServerGetTsCreateRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetTsCreateOperationResponse);
	}

	/**
	 * Sends the getTsCreate operation and resolves with the typed response.
	 */
	public async getTsCreateAsync(requestData: CharacterPlayerModels.ServerGetTsCreateRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetTsCreateOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetTsCreateOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetTsCreateOperationResponse);
	}

	/**
	 * Sends the getTsLastLogin operation and returns the typed response via callback.
	 */
	public getTsLastLogin(requestData: CharacterPlayerModels.ServerGetTsLastLoginRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetTsLastLoginOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetTsLastLoginOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetTsLastLoginOperationResponse);
	}

	/**
	 * Sends the getTsLastLogin operation and resolves with the typed response.
	 */
	public async getTsLastLoginAsync(requestData: CharacterPlayerModels.ServerGetTsLastLoginRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetTsLastLoginOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetTsLastLoginOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetTsLastLoginOperationResponse);
	}

	/**
	 * Sends the createGroup operation and returns the typed response via callback.
	 */
	public createGroup(requestData: CharacterPlayerModels.ServerCreateGroupRequestData, onResponse: Action1<CharacterPlayerResponseModels.CreateGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerCreateGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.CreateGroupOperationResponse);
	}

	/**
	 * Sends the createGroup operation and resolves with the typed response.
	 */
	public async createGroupAsync(requestData: CharacterPlayerModels.ServerCreateGroupRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.CreateGroupOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerCreateGroupOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.CreateGroupOperationResponse);
	}

	/**
	 * Sends the createPlayerItem operation and returns the typed response via callback.
	 */
	public createPlayerItem(requestData: CharacterPlayerModels.ServerCreatePlayerItemRequestData, onResponse: Action1<CharacterPlayerResponseModels.CreatePlayerItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerCreatePlayerItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.CreatePlayerItemOperationResponse);
	}

	/**
	 * Sends the createPlayerItem operation and resolves with the typed response.
	 */
	public async createPlayerItemAsync(requestData: CharacterPlayerModels.ServerCreatePlayerItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.CreatePlayerItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerCreatePlayerItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.CreatePlayerItemOperationResponse);
	}

	/**
	 * Sends the joinGroup operation and returns the typed response via callback.
	 */
	public joinGroup(requestData: CharacterPlayerModels.ServerJoinGroupRequestData, onResponse: Action1<CharacterPlayerResponseModels.JoinGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerJoinGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.JoinGroupOperationResponse);
	}

	/**
	 * Sends the joinGroup operation and resolves with the typed response.
	 */
	public async joinGroupAsync(requestData: CharacterPlayerModels.ServerJoinGroupRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.JoinGroupOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerJoinGroupOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.JoinGroupOperationResponse);
	}

	/**
	 * Sends the leaveGroup operation and returns the typed response via callback.
	 */
	public leaveGroup(requestData: CharacterPlayerModels.ServerLeaveGroupRequestData, onResponse: Action1<CharacterPlayerResponseModels.LeaveGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerLeaveGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.LeaveGroupOperationResponse);
	}

	/**
	 * Sends the leaveGroup operation and resolves with the typed response.
	 */
	public async leaveGroupAsync(requestData: CharacterPlayerModels.ServerLeaveGroupRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.LeaveGroupOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerLeaveGroupOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.LeaveGroupOperationResponse);
	}

	/**
	 * Sends the removePlayerFriend operation and returns the typed response via callback.
	 */
	public removePlayerFriend(requestData: CharacterPlayerModels.ServerRemovePlayerFriendRequestData, onResponse: Action1<CharacterPlayerResponseModels.RemovePlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerRemovePlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemovePlayerFriendOperationResponse);
	}

	/**
	 * Sends the removePlayerFriend operation and resolves with the typed response.
	 */
	public async removePlayerFriendAsync(requestData: CharacterPlayerModels.ServerRemovePlayerFriendRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.RemovePlayerFriendOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerRemovePlayerFriendOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemovePlayerFriendOperationResponse);
	}

	/**
	 * Sends the removePlayerItem operation and returns the typed response via callback.
	 */
	public removePlayerItem(requestData: CharacterPlayerModels.ServerRemovePlayerItemRequestData, onResponse: Action1<CharacterPlayerResponseModels.RemovePlayerItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerRemovePlayerItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemovePlayerItemOperationResponse);
	}

	/**
	 * Sends the removePlayerItem operation and resolves with the typed response.
	 */
	public async removePlayerItemAsync(requestData: CharacterPlayerModels.ServerRemovePlayerItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.RemovePlayerItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerRemovePlayerItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemovePlayerItemOperationResponse);
	}

	/**
	 * Sends the removeSegment operation and returns the typed response via callback.
	 */
	public removeSegment(requestData: CharacterPlayerModels.ServerRemoveSegmentRequestData, onResponse: Action1<CharacterPlayerResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerRemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemoveSegmentOperationResponse);
	}

	/**
	 * Sends the removeSegment operation and resolves with the typed response.
	 */
	public async removeSegmentAsync(requestData: CharacterPlayerModels.ServerRemoveSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.RemoveSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerRemoveSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemoveSegmentOperationResponse);
	}

	/**
	 * Sends the removeTag operation and returns the typed response via callback.
	 */
	public removeTag(requestData: CharacterPlayerModels.ServerRemoveTagRequestData, onResponse: Action1<CharacterPlayerResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerRemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemoveTagOperationResponse);
	}

	/**
	 * Sends the removeTag operation and resolves with the typed response.
	 */
	public async removeTagAsync(requestData: CharacterPlayerModels.ServerRemoveTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.RemoveTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerRemoveTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemoveTagOperationResponse);
	}

	/**
	 * Sends the setAvatar operation and returns the typed response via callback.
	 */
	public setAvatar(requestData: CharacterPlayerModels.ServerSetAvatarRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerSetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetAvatarOperationResponse);
	}

	/**
	 * Sends the setAvatar operation and resolves with the typed response.
	 */
	public async setAvatarAsync(requestData: CharacterPlayerModels.ServerSetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.SetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerSetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetAvatarOperationResponse);
	}

	/**
	 * Sends the setCountryCode operation and returns the typed response via callback.
	 */
	public setCountryCode(requestData: CharacterPlayerModels.ServerSetCountryCodeRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerSetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetCountryCodeOperationResponse);
	}

	/**
	 * Sends the setCountryCode operation and resolves with the typed response.
	 */
	public async setCountryCodeAsync(requestData: CharacterPlayerModels.ServerSetCountryCodeRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.SetCountryCodeOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerSetCountryCodeOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetCountryCodeOperationResponse);
	}

	/**
	 * Sends the setCustomData operation and returns the typed response via callback.
	 */
	public setCustomData(requestData: CharacterPlayerModels.ServerSetCustomDataRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerSetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetCustomDataOperationResponse);
	}

	/**
	 * Sends the setCustomData operation and resolves with the typed response.
	 */
	public async setCustomDataAsync(requestData: CharacterPlayerModels.ServerSetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.SetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerSetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetCustomDataOperationResponse);
	}

	/**
	 * Sends the setDisplayName operation and returns the typed response via callback.
	 */
	public setDisplayName(requestData: CharacterPlayerModels.ServerSetDisplayNameRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerSetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetDisplayNameOperationResponse);
	}

	/**
	 * Sends the setDisplayName operation and resolves with the typed response.
	 */
	public async setDisplayNameAsync(requestData: CharacterPlayerModels.ServerSetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.SetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerSetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetDisplayNameOperationResponse);
	}

	/**
	 * Sends the setOwner operation and returns the typed response via callback.
	 */
	public setOwner(requestData: CharacterPlayerModels.ServerSetOwnerRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetOwnerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerSetOwnerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetOwnerOperationResponse);
	}

	/**
	 * Sends the setOwner operation and resolves with the typed response.
	 */
	public async setOwnerAsync(requestData: CharacterPlayerModels.ServerSetOwnerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.SetOwnerOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerSetOwnerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetOwnerOperationResponse);
	}

	/**
	 * Sends the setPlayerBan operation and returns the typed response via callback.
	 */
	public setPlayerBan(requestData: CharacterPlayerModels.ServerSetPlayerBanRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerSetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetPlayerBanOperationResponse);
	}

	/**
	 * Sends the setPlayerBan operation and resolves with the typed response.
	 */
	public async setPlayerBanAsync(requestData: CharacterPlayerModels.ServerSetPlayerBanRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.SetPlayerBanOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerSetPlayerBanOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetPlayerBanOperationResponse);
	}

	/**
	 * Sends the changePlayerCurrency operation and returns the typed response via callback.
	 */
	public changePlayerCurrency(requestData: CharacterPlayerModels.ServerChangePlayerCurrencyRequestData, onResponse: Action1<CharacterPlayerResponseModels.ChangePlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerChangePlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.ChangePlayerCurrencyOperationResponse);
	}

	/**
	 * Sends the changePlayerCurrency operation and resolves with the typed response.
	 */
	public async changePlayerCurrencyAsync(requestData: CharacterPlayerModels.ServerChangePlayerCurrencyRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.ChangePlayerCurrencyOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerChangePlayerCurrencyOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.ChangePlayerCurrencyOperationResponse);
	}

	/**
	 * Sends the setPlayerData operation and returns the typed response via callback.
	 */
	public setPlayerData(requestData: CharacterPlayerModels.ServerSetPlayerDataRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerSetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetPlayerDataOperationResponse);
	}

	/**
	 * Sends the setPlayerData operation and resolves with the typed response.
	 */
	public async setPlayerDataAsync(requestData: CharacterPlayerModels.ServerSetPlayerDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.SetPlayerDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerSetPlayerDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetPlayerDataOperationResponse);
	}

	/**
	 * Sends the changePlayerStatistics operation and returns the typed response via callback.
	 */
	public changePlayerStatistics(requestData: CharacterPlayerModels.ServerChangePlayerStatisticsRequestData, onResponse: Action1<CharacterPlayerResponseModels.ChangePlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerChangePlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.ChangePlayerStatisticsOperationResponse);
	}

	/**
	 * Sends the changePlayerStatistics operation and resolves with the typed response.
	 */
	public async changePlayerStatisticsAsync(requestData: CharacterPlayerModels.ServerChangePlayerStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.ChangePlayerStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerChangePlayerStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.ChangePlayerStatisticsOperationResponse);
	}

	/**
	 * Sends the setRemoveStatus operation and returns the typed response via callback.
	 */
	public setRemoveStatus(requestData: CharacterPlayerModels.ServerSetRemoveStatusRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerSetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetRemoveStatusOperationResponse);
	}

	/**
	 * Sends the setRemoveStatus operation and resolves with the typed response.
	 */
	public async setRemoveStatusAsync(requestData: CharacterPlayerModels.ServerSetRemoveStatusRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.SetRemoveStatusOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerSetRemoveStatusOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetRemoveStatusOperationResponse);
	}

	/**
	 * Sends the setTag operation and returns the typed response via callback.
	 */
	public setTag(requestData: CharacterPlayerModels.ServerSetTagRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerSetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetTagOperationResponse);
	}

	/**
	 * Sends the setTag operation and resolves with the typed response.
	 */
	public async setTagAsync(requestData: CharacterPlayerModels.ServerSetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.SetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerSetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetTagOperationResponse);
	}

	/**
	 * Sends the getCurrencyLeaderboard operation and returns the typed response via callback.
	 */
	public getCurrencyLeaderboard(requestData: CharacterPlayerModels.ServerGetCurrencyLeaderboardRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetCurrencyLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetCurrencyLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCurrencyLeaderboardOperationResponse);
	}

	/**
	 * Sends the getCurrencyLeaderboard operation and resolves with the typed response.
	 */
	public async getCurrencyLeaderboardAsync(requestData: CharacterPlayerModels.ServerGetCurrencyLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetCurrencyLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetCurrencyLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCurrencyLeaderboardOperationResponse);
	}

	/**
	 * Sends the getCreateLeaderboard operation and returns the typed response via callback.
	 */
	public getCreateLeaderboard(requestData: CharacterPlayerModels.ServerGetCreateLeaderboardRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetCreateLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetCreateLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCreateLeaderboardOperationResponse);
	}

	/**
	 * Sends the getCreateLeaderboard operation and resolves with the typed response.
	 */
	public async getCreateLeaderboardAsync(requestData: CharacterPlayerModels.ServerGetCreateLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetCreateLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetCreateLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCreateLeaderboardOperationResponse);
	}

	/**
	 * Sends the getLastLoginLeaderboard operation and returns the typed response via callback.
	 */
	public getLastLoginLeaderboard(requestData: CharacterPlayerModels.ServerGetLastLoginLeaderboardRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetLastLoginLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetLastLoginLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetLastLoginLeaderboardOperationResponse);
	}

	/**
	 * Sends the getLastLoginLeaderboard operation and resolves with the typed response.
	 */
	public async getLastLoginLeaderboardAsync(requestData: CharacterPlayerModels.ServerGetLastLoginLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetLastLoginLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetLastLoginLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetLastLoginLeaderboardOperationResponse);
	}

	/**
	 * Sends the getStatisticsLog operation and returns the typed response via callback.
	 */
	public getStatisticsLog(requestData: CharacterPlayerModels.ServerGetStatisticsLogRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetStatisticsLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetStatisticsLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetStatisticsLogOperationResponse);
	}

	/**
	 * Sends the getStatisticsLog operation and resolves with the typed response.
	 */
	public async getStatisticsLogAsync(requestData: CharacterPlayerModels.ServerGetStatisticsLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetStatisticsLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetStatisticsLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetStatisticsLogOperationResponse);
	}

	/**
	 * Sends the getCurrencyLog operation and returns the typed response via callback.
	 */
	public getCurrencyLog(requestData: CharacterPlayerModels.ServerGetCurrencyLogRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetCurrencyLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.ServerGetCurrencyLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCurrencyLogOperationResponse);
	}

	/**
	 * Sends the getCurrencyLog operation and resolves with the typed response.
	 */
	public async getCurrencyLogAsync(requestData: CharacterPlayerModels.ServerGetCurrencyLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetCurrencyLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.ServerGetCurrencyLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCurrencyLogOperationResponse);
	}

}

/**
 * Admin-scoped CharacterPlayer namespace, reachable through
 * `GNNetwork.characterPlayer.admin`.
 *
 * Mirrors {@link ServerCharacterPlayerApi} but routed through
 * {@link RequestRole.Admin}. The backend uses the caller's
 * admin auth token to authorise privileged operations such as
 * touching another tenant's characters, granting / revoking
 * bans, or bypassing validation. Reserved for dashboard / GM /
 * backoffice tools.
 */
export class AdminCharacterPlayerApi {
	/**
	 * Sends the addPlayerFriend operation and returns the typed response via callback.
	 */
	public addPlayerFriend(requestData: CharacterPlayerModels.AdminAddPlayerFriendRequestData, onResponse: Action1<CharacterPlayerResponseModels.AddPlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminAddPlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.AddPlayerFriendOperationResponse);
	}

	/**
	 * Sends the addPlayerFriend operation and resolves with the typed response.
	 */
	public async addPlayerFriendAsync(requestData: CharacterPlayerModels.AdminAddPlayerFriendRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.AddPlayerFriendOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminAddPlayerFriendOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.AddPlayerFriendOperationResponse);
	}

	/**
	 * Sends the addSegment operation and returns the typed response via callback.
	 */
	public addSegment(requestData: CharacterPlayerModels.AdminAddSegmentRequestData, onResponse: Action1<CharacterPlayerResponseModels.AddSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminAddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.AddSegmentOperationResponse);
	}

	/**
	 * Sends the addSegment operation and resolves with the typed response.
	 */
	public async addSegmentAsync(requestData: CharacterPlayerModels.AdminAddSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.AddSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminAddSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.AddSegmentOperationResponse);
	}

	/**
	 * Sends the getAvatar operation and returns the typed response via callback.
	 */
	public getAvatar(requestData: CharacterPlayerModels.AdminGetAvatarRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetAvatarOperationResponse);
	}

	/**
	 * Sends the getAvatar operation and resolves with the typed response.
	 */
	public async getAvatarAsync(requestData: CharacterPlayerModels.AdminGetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetAvatarOperationResponse);
	}

	/**
	 * Sends the getCatalogId operation and returns the typed response via callback.
	 */
	public getCatalogId(requestData: CharacterPlayerModels.AdminGetCatalogIdRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetCatalogIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetCatalogIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCatalogIdOperationResponse);
	}

	/**
	 * Sends the getCatalogId operation and resolves with the typed response.
	 */
	public async getCatalogIdAsync(requestData: CharacterPlayerModels.AdminGetCatalogIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetCatalogIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetCatalogIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCatalogIdOperationResponse);
	}

	/**
	 * Sends the getCountryCode operation and returns the typed response via callback.
	 */
	public getCountryCode(requestData: CharacterPlayerModels.AdminGetCountryCodeRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCountryCodeOperationResponse);
	}

	/**
	 * Sends the getCountryCode operation and resolves with the typed response.
	 */
	public async getCountryCodeAsync(requestData: CharacterPlayerModels.AdminGetCountryCodeRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetCountryCodeOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetCountryCodeOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCountryCodeOperationResponse);
	}

	/**
	 * Sends the getCustomData operation and returns the typed response via callback.
	 */
	public getCustomData(requestData: CharacterPlayerModels.AdminGetCustomDataRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCustomDataOperationResponse);
	}

	/**
	 * Sends the getCustomData operation and resolves with the typed response.
	 */
	public async getCustomDataAsync(requestData: CharacterPlayerModels.AdminGetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCustomDataOperationResponse);
	}

	/**
	 * Sends the getDisplayName operation and returns the typed response via callback.
	 */
	public getDisplayName(requestData: CharacterPlayerModels.AdminGetDisplayNameRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetDisplayNameOperationResponse);
	}

	/**
	 * Sends the getDisplayName operation and resolves with the typed response.
	 */
	public async getDisplayNameAsync(requestData: CharacterPlayerModels.AdminGetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetDisplayNameOperationResponse);
	}

	/**
	 * Sends the getFriendStatisticsLeaderboardAroundPlayer operation and returns the typed response via callback.
	 */
	public getFriendStatisticsLeaderboardAroundPlayer(requestData: CharacterPlayerModels.AdminGetFriendStatisticsLeaderboardAroundPlayerRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetFriendStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	/**
	 * Sends the getFriendStatisticsLeaderboardAroundPlayer operation and resolves with the typed response.
	 */
	public async getFriendStatisticsLeaderboardAroundPlayerAsync(requestData: CharacterPlayerModels.AdminGetFriendStatisticsLeaderboardAroundPlayerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetFriendStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	/**
	 * Sends the getFriendStatisticsLeaderboard operation and returns the typed response via callback.
	 */
	public getFriendStatisticsLeaderboard(requestData: CharacterPlayerModels.AdminGetFriendStatisticsLeaderboardRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetFriendStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the getFriendStatisticsLeaderboard operation and resolves with the typed response.
	 */
	public async getFriendStatisticsLeaderboardAsync(requestData: CharacterPlayerModels.AdminGetFriendStatisticsLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetFriendStatisticsLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the getIpAddressCreate operation and returns the typed response via callback.
	 */
	public getIpAddressCreate(requestData: CharacterPlayerModels.AdminGetIpAddressCreateRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetIpAddressCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetIpAddressCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetIpAddressCreateOperationResponse);
	}

	/**
	 * Sends the getIpAddressCreate operation and resolves with the typed response.
	 */
	public async getIpAddressCreateAsync(requestData: CharacterPlayerModels.AdminGetIpAddressCreateRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetIpAddressCreateOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetIpAddressCreateOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetIpAddressCreateOperationResponse);
	}

	/**
	 * Sends the getOwner operation and returns the typed response via callback.
	 */
	public getOwner(requestData: CharacterPlayerModels.AdminGetOwnerRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetOwnerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetOwnerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetOwnerOperationResponse);
	}

	/**
	 * Sends the getOwner operation and resolves with the typed response.
	 */
	public async getOwnerAsync(requestData: CharacterPlayerModels.AdminGetOwnerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetOwnerOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetOwnerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetOwnerOperationResponse);
	}

	/**
	 * Sends the getPlayerBan operation and returns the typed response via callback.
	 */
	public getPlayerBan(requestData: CharacterPlayerModels.AdminGetPlayerBanRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerBanOperationResponse);
	}

	/**
	 * Sends the getPlayerBan operation and resolves with the typed response.
	 */
	public async getPlayerBanAsync(requestData: CharacterPlayerModels.AdminGetPlayerBanRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayerBanOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetPlayerBanOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerBanOperationResponse);
	}

	/**
	 * Sends the getPlayerCurrency operation and returns the typed response via callback.
	 */
	public getPlayerCurrency(requestData: CharacterPlayerModels.AdminGetPlayerCurrencyRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetPlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerCurrencyOperationResponse);
	}

	/**
	 * Sends the getPlayerCurrency operation and resolves with the typed response.
	 */
	public async getPlayerCurrencyAsync(requestData: CharacterPlayerModels.AdminGetPlayerCurrencyRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayerCurrencyOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetPlayerCurrencyOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerCurrencyOperationResponse);
	}

	/**
	 * Sends the getPlayerData operation and returns the typed response via callback.
	 */
	public getPlayerData(requestData: CharacterPlayerModels.AdminGetPlayerDataRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerDataOperationResponse);
	}

	/**
	 * Sends the getPlayerData operation and resolves with the typed response.
	 */
	public async getPlayerDataAsync(requestData: CharacterPlayerModels.AdminGetPlayerDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayerDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetPlayerDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerDataOperationResponse);
	}

	/**
	 * Sends the getPlayerFriend operation and returns the typed response via callback.
	 */
	public getPlayerFriend(requestData: CharacterPlayerModels.AdminGetPlayerFriendRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetPlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerFriendOperationResponse);
	}

	/**
	 * Sends the getPlayerFriend operation and resolves with the typed response.
	 */
	public async getPlayerFriendAsync(requestData: CharacterPlayerModels.AdminGetPlayerFriendRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayerFriendOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetPlayerFriendOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerFriendOperationResponse);
	}

	/**
	 * Sends the getPlayerGroup operation and returns the typed response via callback.
	 */
	public getPlayerGroup(requestData: CharacterPlayerModels.AdminGetPlayerGroupRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetPlayerGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerGroupOperationResponse);
	}

	/**
	 * Sends the getPlayerGroup operation and resolves with the typed response.
	 */
	public async getPlayerGroupAsync(requestData: CharacterPlayerModels.AdminGetPlayerGroupRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayerGroupOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetPlayerGroupOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerGroupOperationResponse);
	}

	/**
	 * Sends the getPlayerInformation operation and returns the typed response via callback.
	 */
	public getPlayerInformation(requestData: CharacterPlayerModels.AdminGetPlayerInformationRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetPlayerInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerInformationOperationResponse);
	}

	/**
	 * Sends the getPlayerInformation operation and resolves with the typed response.
	 */
	public async getPlayerInformationAsync(requestData: CharacterPlayerModels.AdminGetPlayerInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayerInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetPlayerInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerInformationOperationResponse);
	}

	/**
	 * Sends the getPlayerInventory operation and returns the typed response via callback.
	 */
	public getPlayerInventory(requestData: CharacterPlayerModels.AdminGetPlayerInventoryRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerInventoryOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetPlayerInventoryOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerInventoryOperationResponse);
	}

	/**
	 * Sends the getPlayerInventory operation and resolves with the typed response.
	 */
	public async getPlayerInventoryAsync(requestData: CharacterPlayerModels.AdminGetPlayerInventoryRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayerInventoryOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetPlayerInventoryOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerInventoryOperationResponse);
	}

	/**
	 * Sends the getPlayerStatistics operation and returns the typed response via callback.
	 */
	public getPlayerStatistics(requestData: CharacterPlayerModels.AdminGetPlayerStatisticsRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetPlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerStatisticsOperationResponse);
	}

	/**
	 * Sends the getPlayerStatistics operation and resolves with the typed response.
	 */
	public async getPlayerStatisticsAsync(requestData: CharacterPlayerModels.AdminGetPlayerStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayerStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetPlayerStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayerStatisticsOperationResponse);
	}

	/**
	 * Sends the getPlayersWithDisplayName operation and returns the typed response via callback.
	 */
	public getPlayersWithDisplayName(requestData: CharacterPlayerModels.AdminGetPlayersWithDisplayNameRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetPlayersWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse);
	}

	/**
	 * Sends the getPlayersWithDisplayName operation and resolves with the typed response.
	 */
	public async getPlayersWithDisplayNameAsync(requestData: CharacterPlayerModels.AdminGetPlayersWithDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetPlayersWithDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse);
	}

	/**
	 * Sends the getPlayersWithSegment operation and returns the typed response via callback.
	 */
	public getPlayersWithSegment(requestData: CharacterPlayerModels.AdminGetPlayersWithSegmentRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayersWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetPlayersWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayersWithSegmentOperationResponse);
	}

	/**
	 * Sends the getPlayersWithSegment operation and resolves with the typed response.
	 */
	public async getPlayersWithSegmentAsync(requestData: CharacterPlayerModels.AdminGetPlayersWithSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayersWithSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetPlayersWithSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayersWithSegmentOperationResponse);
	}

	/**
	 * Sends the getPlayersWithTag operation and returns the typed response via callback.
	 */
	public getPlayersWithTag(requestData: CharacterPlayerModels.AdminGetPlayersWithTagRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetPlayersWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetPlayersWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayersWithTagOperationResponse);
	}

	/**
	 * Sends the getPlayersWithTag operation and resolves with the typed response.
	 */
	public async getPlayersWithTagAsync(requestData: CharacterPlayerModels.AdminGetPlayersWithTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetPlayersWithTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetPlayersWithTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetPlayersWithTagOperationResponse);
	}

	/**
	 * Sends the getRemoveStatus operation and returns the typed response via callback.
	 */
	public getRemoveStatus(requestData: CharacterPlayerModels.AdminGetRemoveStatusRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetRemoveStatusOperationResponse);
	}

	/**
	 * Sends the getRemoveStatus operation and resolves with the typed response.
	 */
	public async getRemoveStatusAsync(requestData: CharacterPlayerModels.AdminGetRemoveStatusRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetRemoveStatusOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetRemoveStatusOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetRemoveStatusOperationResponse);
	}

	/**
	 * Sends the getSegment operation and returns the typed response via callback.
	 */
	public getSegment(requestData: CharacterPlayerModels.AdminGetSegmentRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetSegmentOperationResponse);
	}

	/**
	 * Sends the getSegment operation and resolves with the typed response.
	 */
	public async getSegmentAsync(requestData: CharacterPlayerModels.AdminGetSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetSegmentOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboardAroundPlayer operation and returns the typed response via callback.
	 */
	public getStatisticsLeaderboardAroundPlayer(requestData: CharacterPlayerModels.AdminGetStatisticsLeaderboardAroundPlayerRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboardAroundPlayer operation and resolves with the typed response.
	 */
	public async getStatisticsLeaderboardAroundPlayerAsync(requestData: CharacterPlayerModels.AdminGetStatisticsLeaderboardAroundPlayerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetStatisticsLeaderboardAroundPlayerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboard operation and returns the typed response via callback.
	 */
	public getStatisticsLeaderboard(requestData: CharacterPlayerModels.AdminGetStatisticsLeaderboardRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboard operation and resolves with the typed response.
	 */
	public async getStatisticsLeaderboardAsync(requestData: CharacterPlayerModels.AdminGetStatisticsLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetStatisticsLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the getTag operation and returns the typed response via callback.
	 */
	public getTag(requestData: CharacterPlayerModels.AdminGetTagRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetTagOperationResponse);
	}

	/**
	 * Sends the getTag operation and resolves with the typed response.
	 */
	public async getTagAsync(requestData: CharacterPlayerModels.AdminGetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetTagOperationResponse);
	}

	/**
	 * Sends the getTsCreate operation and returns the typed response via callback.
	 */
	public getTsCreate(requestData: CharacterPlayerModels.AdminGetTsCreateRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetTsCreateOperationResponse);
	}

	/**
	 * Sends the getTsCreate operation and resolves with the typed response.
	 */
	public async getTsCreateAsync(requestData: CharacterPlayerModels.AdminGetTsCreateRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetTsCreateOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetTsCreateOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetTsCreateOperationResponse);
	}

	/**
	 * Sends the getTsLastLogin operation and returns the typed response via callback.
	 */
	public getTsLastLogin(requestData: CharacterPlayerModels.AdminGetTsLastLoginRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetTsLastLoginOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetTsLastLoginOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetTsLastLoginOperationResponse);
	}

	/**
	 * Sends the getTsLastLogin operation and resolves with the typed response.
	 */
	public async getTsLastLoginAsync(requestData: CharacterPlayerModels.AdminGetTsLastLoginRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetTsLastLoginOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetTsLastLoginOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetTsLastLoginOperationResponse);
	}

	/**
	 * Sends the createGroup operation and returns the typed response via callback.
	 */
	public createGroup(requestData: CharacterPlayerModels.AdminCreateGroupRequestData, onResponse: Action1<CharacterPlayerResponseModels.CreateGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminCreateGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.CreateGroupOperationResponse);
	}

	/**
	 * Sends the createGroup operation and resolves with the typed response.
	 */
	public async createGroupAsync(requestData: CharacterPlayerModels.AdminCreateGroupRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.CreateGroupOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminCreateGroupOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.CreateGroupOperationResponse);
	}

	/**
	 * Sends the createPlayerItem operation and returns the typed response via callback.
	 */
	public createPlayerItem(requestData: CharacterPlayerModels.AdminCreatePlayerItemRequestData, onResponse: Action1<CharacterPlayerResponseModels.CreatePlayerItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminCreatePlayerItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.CreatePlayerItemOperationResponse);
	}

	/**
	 * Sends the createPlayerItem operation and resolves with the typed response.
	 */
	public async createPlayerItemAsync(requestData: CharacterPlayerModels.AdminCreatePlayerItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.CreatePlayerItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminCreatePlayerItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.CreatePlayerItemOperationResponse);
	}

	/**
	 * Sends the joinGroup operation and returns the typed response via callback.
	 */
	public joinGroup(requestData: CharacterPlayerModels.AdminJoinGroupRequestData, onResponse: Action1<CharacterPlayerResponseModels.JoinGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminJoinGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.JoinGroupOperationResponse);
	}

	/**
	 * Sends the joinGroup operation and resolves with the typed response.
	 */
	public async joinGroupAsync(requestData: CharacterPlayerModels.AdminJoinGroupRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.JoinGroupOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminJoinGroupOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.JoinGroupOperationResponse);
	}

	/**
	 * Sends the leaveGroup operation and returns the typed response via callback.
	 */
	public leaveGroup(requestData: CharacterPlayerModels.AdminLeaveGroupRequestData, onResponse: Action1<CharacterPlayerResponseModels.LeaveGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminLeaveGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.LeaveGroupOperationResponse);
	}

	/**
	 * Sends the leaveGroup operation and resolves with the typed response.
	 */
	public async leaveGroupAsync(requestData: CharacterPlayerModels.AdminLeaveGroupRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.LeaveGroupOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminLeaveGroupOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.LeaveGroupOperationResponse);
	}

	/**
	 * Sends the removePlayerFriend operation and returns the typed response via callback.
	 */
	public removePlayerFriend(requestData: CharacterPlayerModels.AdminRemovePlayerFriendRequestData, onResponse: Action1<CharacterPlayerResponseModels.RemovePlayerFriendOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminRemovePlayerFriendOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemovePlayerFriendOperationResponse);
	}

	/**
	 * Sends the removePlayerFriend operation and resolves with the typed response.
	 */
	public async removePlayerFriendAsync(requestData: CharacterPlayerModels.AdminRemovePlayerFriendRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.RemovePlayerFriendOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminRemovePlayerFriendOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemovePlayerFriendOperationResponse);
	}

	/**
	 * Sends the removePlayerItem operation and returns the typed response via callback.
	 */
	public removePlayerItem(requestData: CharacterPlayerModels.AdminRemovePlayerItemRequestData, onResponse: Action1<CharacterPlayerResponseModels.RemovePlayerItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminRemovePlayerItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemovePlayerItemOperationResponse);
	}

	/**
	 * Sends the removePlayerItem operation and resolves with the typed response.
	 */
	public async removePlayerItemAsync(requestData: CharacterPlayerModels.AdminRemovePlayerItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.RemovePlayerItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminRemovePlayerItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemovePlayerItemOperationResponse);
	}

	/**
	 * Sends the removeSegment operation and returns the typed response via callback.
	 */
	public removeSegment(requestData: CharacterPlayerModels.AdminRemoveSegmentRequestData, onResponse: Action1<CharacterPlayerResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminRemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemoveSegmentOperationResponse);
	}

	/**
	 * Sends the removeSegment operation and resolves with the typed response.
	 */
	public async removeSegmentAsync(requestData: CharacterPlayerModels.AdminRemoveSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.RemoveSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminRemoveSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemoveSegmentOperationResponse);
	}

	/**
	 * Sends the removeTag operation and returns the typed response via callback.
	 */
	public removeTag(requestData: CharacterPlayerModels.AdminRemoveTagRequestData, onResponse: Action1<CharacterPlayerResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminRemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemoveTagOperationResponse);
	}

	/**
	 * Sends the removeTag operation and resolves with the typed response.
	 */
	public async removeTagAsync(requestData: CharacterPlayerModels.AdminRemoveTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.RemoveTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminRemoveTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.RemoveTagOperationResponse);
	}

	/**
	 * Sends the setAvatar operation and returns the typed response via callback.
	 */
	public setAvatar(requestData: CharacterPlayerModels.AdminSetAvatarRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminSetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetAvatarOperationResponse);
	}

	/**
	 * Sends the setAvatar operation and resolves with the typed response.
	 */
	public async setAvatarAsync(requestData: CharacterPlayerModels.AdminSetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.SetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminSetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetAvatarOperationResponse);
	}

	/**
	 * Sends the setCountryCode operation and returns the typed response via callback.
	 */
	public setCountryCode(requestData: CharacterPlayerModels.AdminSetCountryCodeRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetCountryCodeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminSetCountryCodeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetCountryCodeOperationResponse);
	}

	/**
	 * Sends the setCountryCode operation and resolves with the typed response.
	 */
	public async setCountryCodeAsync(requestData: CharacterPlayerModels.AdminSetCountryCodeRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.SetCountryCodeOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminSetCountryCodeOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetCountryCodeOperationResponse);
	}

	/**
	 * Sends the setCustomData operation and returns the typed response via callback.
	 */
	public setCustomData(requestData: CharacterPlayerModels.AdminSetCustomDataRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminSetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetCustomDataOperationResponse);
	}

	/**
	 * Sends the setCustomData operation and resolves with the typed response.
	 */
	public async setCustomDataAsync(requestData: CharacterPlayerModels.AdminSetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.SetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminSetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetCustomDataOperationResponse);
	}

	/**
	 * Sends the setDisplayName operation and returns the typed response via callback.
	 */
	public setDisplayName(requestData: CharacterPlayerModels.AdminSetDisplayNameRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminSetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetDisplayNameOperationResponse);
	}

	/**
	 * Sends the setDisplayName operation and resolves with the typed response.
	 */
	public async setDisplayNameAsync(requestData: CharacterPlayerModels.AdminSetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.SetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminSetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetDisplayNameOperationResponse);
	}

	/**
	 * Sends the setOwner operation and returns the typed response via callback.
	 */
	public setOwner(requestData: CharacterPlayerModels.AdminSetOwnerRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetOwnerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminSetOwnerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetOwnerOperationResponse);
	}

	/**
	 * Sends the setOwner operation and resolves with the typed response.
	 */
	public async setOwnerAsync(requestData: CharacterPlayerModels.AdminSetOwnerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.SetOwnerOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminSetOwnerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetOwnerOperationResponse);
	}

	/**
	 * Sends the setPlayerBan operation and returns the typed response via callback.
	 */
	public setPlayerBan(requestData: CharacterPlayerModels.AdminSetPlayerBanRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetPlayerBanOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminSetPlayerBanOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetPlayerBanOperationResponse);
	}

	/**
	 * Sends the setPlayerBan operation and resolves with the typed response.
	 */
	public async setPlayerBanAsync(requestData: CharacterPlayerModels.AdminSetPlayerBanRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.SetPlayerBanOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminSetPlayerBanOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetPlayerBanOperationResponse);
	}

	/**
	 * Sends the changePlayerCurrency operation and returns the typed response via callback.
	 */
	public changePlayerCurrency(requestData: CharacterPlayerModels.AdminChangePlayerCurrencyRequestData, onResponse: Action1<CharacterPlayerResponseModels.ChangePlayerCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminChangePlayerCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.ChangePlayerCurrencyOperationResponse);
	}

	/**
	 * Sends the changePlayerCurrency operation and resolves with the typed response.
	 */
	public async changePlayerCurrencyAsync(requestData: CharacterPlayerModels.AdminChangePlayerCurrencyRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.ChangePlayerCurrencyOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminChangePlayerCurrencyOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.ChangePlayerCurrencyOperationResponse);
	}

	/**
	 * Sends the setPlayerData operation and returns the typed response via callback.
	 */
	public setPlayerData(requestData: CharacterPlayerModels.AdminSetPlayerDataRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetPlayerDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminSetPlayerDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetPlayerDataOperationResponse);
	}

	/**
	 * Sends the setPlayerData operation and resolves with the typed response.
	 */
	public async setPlayerDataAsync(requestData: CharacterPlayerModels.AdminSetPlayerDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.SetPlayerDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminSetPlayerDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetPlayerDataOperationResponse);
	}

	/**
	 * Sends the changePlayerStatistics operation and returns the typed response via callback.
	 */
	public changePlayerStatistics(requestData: CharacterPlayerModels.AdminChangePlayerStatisticsRequestData, onResponse: Action1<CharacterPlayerResponseModels.ChangePlayerStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminChangePlayerStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.ChangePlayerStatisticsOperationResponse);
	}

	/**
	 * Sends the changePlayerStatistics operation and resolves with the typed response.
	 */
	public async changePlayerStatisticsAsync(requestData: CharacterPlayerModels.AdminChangePlayerStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.ChangePlayerStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminChangePlayerStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.ChangePlayerStatisticsOperationResponse);
	}

	/**
	 * Sends the setRemoveStatus operation and returns the typed response via callback.
	 */
	public setRemoveStatus(requestData: CharacterPlayerModels.AdminSetRemoveStatusRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminSetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetRemoveStatusOperationResponse);
	}

	/**
	 * Sends the setRemoveStatus operation and resolves with the typed response.
	 */
	public async setRemoveStatusAsync(requestData: CharacterPlayerModels.AdminSetRemoveStatusRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.SetRemoveStatusOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminSetRemoveStatusOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetRemoveStatusOperationResponse);
	}

	/**
	 * Sends the setTag operation and returns the typed response via callback.
	 */
	public setTag(requestData: CharacterPlayerModels.AdminSetTagRequestData, onResponse: Action1<CharacterPlayerResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminSetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetTagOperationResponse);
	}

	/**
	 * Sends the setTag operation and resolves with the typed response.
	 */
	public async setTagAsync(requestData: CharacterPlayerModels.AdminSetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.SetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminSetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.SetTagOperationResponse);
	}

	/**
	 * Sends the getCurrencyLeaderboard operation and returns the typed response via callback.
	 */
	public getCurrencyLeaderboard(requestData: CharacterPlayerModels.AdminGetCurrencyLeaderboardRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetCurrencyLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetCurrencyLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCurrencyLeaderboardOperationResponse);
	}

	/**
	 * Sends the getCurrencyLeaderboard operation and resolves with the typed response.
	 */
	public async getCurrencyLeaderboardAsync(requestData: CharacterPlayerModels.AdminGetCurrencyLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetCurrencyLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetCurrencyLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCurrencyLeaderboardOperationResponse);
	}

	/**
	 * Sends the getCreateLeaderboard operation and returns the typed response via callback.
	 */
	public getCreateLeaderboard(requestData: CharacterPlayerModels.AdminGetCreateLeaderboardRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetCreateLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetCreateLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCreateLeaderboardOperationResponse);
	}

	/**
	 * Sends the getCreateLeaderboard operation and resolves with the typed response.
	 */
	public async getCreateLeaderboardAsync(requestData: CharacterPlayerModels.AdminGetCreateLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetCreateLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetCreateLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCreateLeaderboardOperationResponse);
	}

	/**
	 * Sends the getLastLoginLeaderboard operation and returns the typed response via callback.
	 */
	public getLastLoginLeaderboard(requestData: CharacterPlayerModels.AdminGetLastLoginLeaderboardRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetLastLoginLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetLastLoginLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetLastLoginLeaderboardOperationResponse);
	}

	/**
	 * Sends the getLastLoginLeaderboard operation and resolves with the typed response.
	 */
	public async getLastLoginLeaderboardAsync(requestData: CharacterPlayerModels.AdminGetLastLoginLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetLastLoginLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetLastLoginLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetLastLoginLeaderboardOperationResponse);
	}

	/**
	 * Sends the getStatisticsLog operation and returns the typed response via callback.
	 */
	public getStatisticsLog(requestData: CharacterPlayerModels.AdminGetStatisticsLogRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetStatisticsLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetStatisticsLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetStatisticsLogOperationResponse);
	}

	/**
	 * Sends the getStatisticsLog operation and resolves with the typed response.
	 */
	public async getStatisticsLogAsync(requestData: CharacterPlayerModels.AdminGetStatisticsLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetStatisticsLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetStatisticsLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetStatisticsLogOperationResponse);
	}

	/**
	 * Sends the getCurrencyLog operation and returns the typed response via callback.
	 */
	public getCurrencyLog(requestData: CharacterPlayerModels.AdminGetCurrencyLogRequestData, onResponse: Action1<CharacterPlayerResponseModels.GetCurrencyLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new CharacterPlayerRequestModels.AdminGetCurrencyLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCurrencyLogOperationResponse);
	}

	/**
	 * Sends the getCurrencyLog operation and resolves with the typed response.
	 */
	public async getCurrencyLogAsync(requestData: CharacterPlayerModels.AdminGetCurrencyLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<CharacterPlayerResponseModels.GetCurrencyLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new CharacterPlayerRequestModels.AdminGetCurrencyLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, CharacterPlayerResponseModels.GetCurrencyLogOperationResponse);
	}

}
