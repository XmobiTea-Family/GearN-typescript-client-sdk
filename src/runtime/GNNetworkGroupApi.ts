import { GNNetwork } from "./GNNetwork";
import { Action1 } from "./common/Action1";
import { GNHashtable } from "./common/GNData";
import { OperationRequest } from "./entity/OperationRequest";
import { GroupModels } from "./entity/models/GroupModels";
import { GroupRequestModels } from "./entity/models/GroupRequestModels";
import { GroupResponseModels } from "./entity/models/GroupResponseModels";

/**
 * Public client-scoped namespace for the Group domain.
 *
 * Reachable through {@link GNNetwork.group} after
 * {@link GNNetwork.init}. Manages every aspect of group / guild
 * / clan entities.
 *
 * Functional groupings:
 *
 * 1. **Group metadata** — `getGroupInformation`,
 *    `setGroupInformation`, `setGroupAvatar`,
 *    `setGroupDisplayName`, `getGroupsWithDisplayName`,
 *    `getGroupsWithTag`, `getGroupsWithSegment`.
 * 2. **Members & roles** — `addMember` (invite),
 *    `acceptMember`, `rejectMember`, `removeMember`,
 *    `getMember`, `getMembers`, `setMemberRole`,
 *    `cancelInviteMember`. Real-time updates arrive through
 *    {@link OnGroupMemberUpdateEventHandler}.
 * 3. **Group messages / wall** — `sendGroupMessage`,
 *    `getGroupMessages`, `getGroupMessage`,
 *    `removeGroupMessage`. Real-time updates arrive through
 *    {@link OnGroupMessageUpdateEventHandler}.
 * 4. **Group custom data / tags / segments** — `getCustomData`,
 *    `setCustomData`, `getTag`, `setTag`, `getSegment`,
 *    `addSegment`, `removeSegment`.
 * 5. **Group currencies / statistics** —
 *    `getGroupCurrency`, `setGroupCurrency`,
 *    `addGroupCurrency`, `subtractGroupCurrency`,
 *    `getGroupStatistics`, `setGroupStatistics`,
 *    `addGroupStatistics`, `getStatisticsLeaderboard`.
 * 6. **Group inventory (lookup)** — `getGroupInventory`.
 *    Mutations live on `GNNetwork.inventory` with
 *    `OwnerType.Group`.
 *
 * Common contract: same as {@link GamePlayerApi} (HTTP /
 * `RequestType.Group` / `RequestRole.Client`, callback +
 * Promise variants per method, sub-namespaces `.server` and
 * `.admin` for elevated callers).
 */
export class GroupApi {
	/** Server-scoped group operations for trusted backend callers. */
	public server: ServerGroupApi = new ServerGroupApi();

	/** Admin-scoped group operations for dashboard, GM, or backoffice callers. */
	public admin: AdminGroupApi = new AdminGroupApi();

	/**
	 * Sends the addMember operation and returns the typed response via callback.
	 */
	public addMember(requestData: GroupModels.AddMemberRequestData, onResponse: Action1<GroupResponseModels.AddMemberOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AddMemberOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.AddMemberOperationResponse);
	}

	/**
	 * Sends the addMember operation and resolves with the typed response.
	 */
	public async addMemberAsync(requestData: GroupModels.AddMemberRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.AddMemberOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AddMemberOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.AddMemberOperationResponse);
	}

	/**
	 * Sends the addSegment operation and returns the typed response via callback.
	 */
	public addSegment(requestData: GroupModels.AddSegmentRequestData, onResponse: Action1<GroupResponseModels.AddSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.AddSegmentOperationResponse);
	}

	/**
	 * Sends the addSegment operation and resolves with the typed response.
	 */
	public async addSegmentAsync(requestData: GroupModels.AddSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.AddSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AddSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.AddSegmentOperationResponse);
	}

	/**
	 * Sends the getAvatar operation and returns the typed response via callback.
	 */
	public getAvatar(requestData: GroupModels.GetAvatarRequestData, onResponse: Action1<GroupResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetAvatarOperationResponse);
	}

	/**
	 * Sends the getAvatar operation and resolves with the typed response.
	 */
	public async getAvatarAsync(requestData: GroupModels.GetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetAvatarOperationResponse);
	}

	/**
	 * Sends the getCatalogId operation and returns the typed response via callback.
	 */
	public getCatalogId(requestData: GroupModels.GetCatalogIdRequestData, onResponse: Action1<GroupResponseModels.GetCatalogIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetCatalogIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCatalogIdOperationResponse);
	}

	/**
	 * Sends the getCatalogId operation and resolves with the typed response.
	 */
	public async getCatalogIdAsync(requestData: GroupModels.GetCatalogIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetCatalogIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetCatalogIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCatalogIdOperationResponse);
	}

	/**
	 * Sends the getCustomData operation and returns the typed response via callback.
	 */
	public getCustomData(requestData: GroupModels.GetCustomDataRequestData, onResponse: Action1<GroupResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCustomDataOperationResponse);
	}

	/**
	 * Sends the getCustomData operation and resolves with the typed response.
	 */
	public async getCustomDataAsync(requestData: GroupModels.GetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCustomDataOperationResponse);
	}

	/**
	 * Sends the getDisplayName operation and returns the typed response via callback.
	 */
	public getDisplayName(requestData: GroupModels.GetDisplayNameRequestData, onResponse: Action1<GroupResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetDisplayNameOperationResponse);
	}

	/**
	 * Sends the getDisplayName operation and resolves with the typed response.
	 */
	public async getDisplayNameAsync(requestData: GroupModels.GetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetDisplayNameOperationResponse);
	}

	/**
	 * Sends the getGroupCurrency operation and returns the typed response via callback.
	 */
	public getGroupCurrency(requestData: GroupModels.GetGroupCurrencyRequestData, onResponse: Action1<GroupResponseModels.GetGroupCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetGroupCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupCurrencyOperationResponse);
	}

	/**
	 * Sends the getGroupCurrency operation and resolves with the typed response.
	 */
	public async getGroupCurrencyAsync(requestData: GroupModels.GetGroupCurrencyRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupCurrencyOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetGroupCurrencyOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupCurrencyOperationResponse);
	}

	/**
	 * Sends the getGroupData operation and returns the typed response via callback.
	 */
	public getGroupData(requestData: GroupModels.GetGroupDataRequestData, onResponse: Action1<GroupResponseModels.GetGroupDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetGroupDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupDataOperationResponse);
	}

	/**
	 * Sends the getGroupData operation and resolves with the typed response.
	 */
	public async getGroupDataAsync(requestData: GroupModels.GetGroupDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetGroupDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupDataOperationResponse);
	}

	/**
	 * Sends the getGroupInformation operation and returns the typed response via callback.
	 */
	public getGroupInformation(requestData: GroupModels.GetGroupInformationRequestData, onResponse: Action1<GroupResponseModels.GetGroupInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetGroupInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupInformationOperationResponse);
	}

	/**
	 * Sends the getGroupInformation operation and resolves with the typed response.
	 */
	public async getGroupInformationAsync(requestData: GroupModels.GetGroupInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetGroupInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupInformationOperationResponse);
	}

	/**
	 * Sends the getGroupInventory operation and returns the typed response via callback.
	 */
	public getGroupInventory(requestData: GroupModels.GetGroupInventoryRequestData, onResponse: Action1<GroupResponseModels.GetGroupInventoryOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetGroupInventoryOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupInventoryOperationResponse);
	}

	/**
	 * Sends the getGroupInventory operation and resolves with the typed response.
	 */
	public async getGroupInventoryAsync(requestData: GroupModels.GetGroupInventoryRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupInventoryOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetGroupInventoryOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupInventoryOperationResponse);
	}

	/**
	 * Sends the getGroupMessage operation and returns the typed response via callback.
	 */
	public getGroupMessage(requestData: GroupModels.GetGroupMessageRequestData, onResponse: Action1<GroupResponseModels.GetGroupMessageOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetGroupMessageOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupMessageOperationResponse);
	}

	/**
	 * Sends the getGroupMessage operation and resolves with the typed response.
	 */
	public async getGroupMessageAsync(requestData: GroupModels.GetGroupMessageRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupMessageOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetGroupMessageOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupMessageOperationResponse);
	}

	/**
	 * Sends the getGroupStatistics operation and returns the typed response via callback.
	 */
	public getGroupStatistics(requestData: GroupModels.GetGroupStatisticsRequestData, onResponse: Action1<GroupResponseModels.GetGroupStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetGroupStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupStatisticsOperationResponse);
	}

	/**
	 * Sends the getGroupStatistics operation and resolves with the typed response.
	 */
	public async getGroupStatisticsAsync(requestData: GroupModels.GetGroupStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetGroupStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupStatisticsOperationResponse);
	}

	/**
	 * Sends the getGroupsWithDisplayName operation and returns the typed response via callback.
	 */
	public getGroupsWithDisplayName(requestData: GroupModels.GetGroupsWithDisplayNameRequestData, onResponse: Action1<GroupResponseModels.GetGroupsWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetGroupsWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithDisplayNameOperationResponse);
	}

	/**
	 * Sends the getGroupsWithDisplayName operation and resolves with the typed response.
	 */
	public async getGroupsWithDisplayNameAsync(requestData: GroupModels.GetGroupsWithDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupsWithDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetGroupsWithDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithDisplayNameOperationResponse);
	}

	/**
	 * Sends the getGroupsWithSegment operation and returns the typed response via callback.
	 */
	public getGroupsWithSegment(requestData: GroupModels.GetGroupsWithSegmentRequestData, onResponse: Action1<GroupResponseModels.GetGroupsWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetGroupsWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithSegmentOperationResponse);
	}

	/**
	 * Sends the getGroupsWithSegment operation and resolves with the typed response.
	 */
	public async getGroupsWithSegmentAsync(requestData: GroupModels.GetGroupsWithSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupsWithSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetGroupsWithSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithSegmentOperationResponse);
	}

	/**
	 * Sends the getGroupsWithTag operation and returns the typed response via callback.
	 */
	public getGroupsWithTag(requestData: GroupModels.GetGroupsWithTagRequestData, onResponse: Action1<GroupResponseModels.GetGroupsWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetGroupsWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithTagOperationResponse);
	}

	/**
	 * Sends the getGroupsWithTag operation and resolves with the typed response.
	 */
	public async getGroupsWithTagAsync(requestData: GroupModels.GetGroupsWithTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupsWithTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetGroupsWithTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithTagOperationResponse);
	}

	/**
	 * Sends the getMembers operation and returns the typed response via callback.
	 */
	public getMembers(requestData: GroupModels.GetMembersRequestData, onResponse: Action1<GroupResponseModels.GetMembersOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetMembersOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetMembersOperationResponse);
	}

	/**
	 * Sends the getMembers operation and resolves with the typed response.
	 */
	public async getMembersAsync(requestData: GroupModels.GetMembersRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetMembersOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetMembersOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetMembersOperationResponse);
	}

	/**
	 * Sends the getRemoveStatus operation and returns the typed response via callback.
	 */
	public getRemoveStatus(requestData: GroupModels.GetRemoveStatusRequestData, onResponse: Action1<GroupResponseModels.GetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetRemoveStatusOperationResponse);
	}

	/**
	 * Sends the getRemoveStatus operation and resolves with the typed response.
	 */
	public async getRemoveStatusAsync(requestData: GroupModels.GetRemoveStatusRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetRemoveStatusOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetRemoveStatusOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetRemoveStatusOperationResponse);
	}

	/**
	 * Sends the getSegment operation and returns the typed response via callback.
	 */
	public getSegment(requestData: GroupModels.GetSegmentRequestData, onResponse: Action1<GroupResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetSegmentOperationResponse);
	}

	/**
	 * Sends the getSegment operation and resolves with the typed response.
	 */
	public async getSegmentAsync(requestData: GroupModels.GetSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetSegmentOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboardAroundGroup operation and returns the typed response via callback.
	 */
	public getStatisticsLeaderboardAroundGroup(requestData: GroupModels.GetStatisticsLeaderboardAroundGroupRequestData, onResponse: Action1<GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetStatisticsLeaderboardAroundGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboardAroundGroup operation and resolves with the typed response.
	 */
	public async getStatisticsLeaderboardAroundGroupAsync(requestData: GroupModels.GetStatisticsLeaderboardAroundGroupRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetStatisticsLeaderboardAroundGroupOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboard operation and returns the typed response via callback.
	 */
	public getStatisticsLeaderboard(requestData: GroupModels.GetStatisticsLeaderboardRequestData, onResponse: Action1<GroupResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboard operation and resolves with the typed response.
	 */
	public async getStatisticsLeaderboardAsync(requestData: GroupModels.GetStatisticsLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetStatisticsLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetStatisticsLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the getTag operation and returns the typed response via callback.
	 */
	public getTag(requestData: GroupModels.GetTagRequestData, onResponse: Action1<GroupResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetTagOperationResponse);
	}

	/**
	 * Sends the getTag operation and resolves with the typed response.
	 */
	public async getTagAsync(requestData: GroupModels.GetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetTagOperationResponse);
	}

	/**
	 * Sends the getTsCreate operation and returns the typed response via callback.
	 */
	public getTsCreate(requestData: GroupModels.GetTsCreateRequestData, onResponse: Action1<GroupResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetTsCreateOperationResponse);
	}

	/**
	 * Sends the getTsCreate operation and resolves with the typed response.
	 */
	public async getTsCreateAsync(requestData: GroupModels.GetTsCreateRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetTsCreateOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetTsCreateOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetTsCreateOperationResponse);
	}

	/**
	 * Sends the createGroupItem operation and returns the typed response via callback.
	 */
	public createGroupItem(requestData: GroupModels.CreateGroupItemRequestData, onResponse: Action1<GroupResponseModels.CreateGroupItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.CreateGroupItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.CreateGroupItemOperationResponse);
	}

	/**
	 * Sends the createGroupItem operation and resolves with the typed response.
	 */
	public async createGroupItemAsync(requestData: GroupModels.CreateGroupItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.CreateGroupItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.CreateGroupItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.CreateGroupItemOperationResponse);
	}

	/**
	 * Sends the removeGroupItem operation and returns the typed response via callback.
	 */
	public removeGroupItem(requestData: GroupModels.RemoveGroupItemRequestData, onResponse: Action1<GroupResponseModels.RemoveGroupItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.RemoveGroupItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveGroupItemOperationResponse);
	}

	/**
	 * Sends the removeGroupItem operation and resolves with the typed response.
	 */
	public async removeGroupItemAsync(requestData: GroupModels.RemoveGroupItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.RemoveGroupItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.RemoveGroupItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveGroupItemOperationResponse);
	}

	/**
	 * Sends the removeMember operation and returns the typed response via callback.
	 */
	public removeMember(requestData: GroupModels.RemoveMemberRequestData, onResponse: Action1<GroupResponseModels.RemoveMemberOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.RemoveMemberOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveMemberOperationResponse);
	}

	/**
	 * Sends the removeMember operation and resolves with the typed response.
	 */
	public async removeMemberAsync(requestData: GroupModels.RemoveMemberRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.RemoveMemberOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.RemoveMemberOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveMemberOperationResponse);
	}

	/**
	 * Sends the removeSegment operation and returns the typed response via callback.
	 */
	public removeSegment(requestData: GroupModels.RemoveSegmentRequestData, onResponse: Action1<GroupResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.RemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveSegmentOperationResponse);
	}

	/**
	 * Sends the removeSegment operation and resolves with the typed response.
	 */
	public async removeSegmentAsync(requestData: GroupModels.RemoveSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.RemoveSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.RemoveSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveSegmentOperationResponse);
	}

	/**
	 * Sends the removeTag operation and returns the typed response via callback.
	 */
	public removeTag(requestData: GroupModels.RemoveTagRequestData, onResponse: Action1<GroupResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.RemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveTagOperationResponse);
	}

	/**
	 * Sends the removeTag operation and resolves with the typed response.
	 */
	public async removeTagAsync(requestData: GroupModels.RemoveTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.RemoveTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.RemoveTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveTagOperationResponse);
	}

	/**
	 * Sends the sendGroupMessage operation and returns the typed response via callback.
	 */
	public sendGroupMessage(requestData: GroupModels.SendGroupMessageRequestData, onResponse: Action1<GroupResponseModels.SendGroupMessageOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.SendGroupMessageOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SendGroupMessageOperationResponse);
	}

	/**
	 * Sends the sendGroupMessage operation and resolves with the typed response.
	 */
	public async sendGroupMessageAsync(requestData: GroupModels.SendGroupMessageRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SendGroupMessageOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.SendGroupMessageOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SendGroupMessageOperationResponse);
	}

	/**
	 * Sends the setAvatar operation and returns the typed response via callback.
	 */
	public setAvatar(requestData: GroupModels.SetAvatarRequestData, onResponse: Action1<GroupResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.SetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetAvatarOperationResponse);
	}

	/**
	 * Sends the setAvatar operation and resolves with the typed response.
	 */
	public async setAvatarAsync(requestData: GroupModels.SetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.SetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetAvatarOperationResponse);
	}

	/**
	 * Sends the setCustomData operation and returns the typed response via callback.
	 */
	public setCustomData(requestData: GroupModels.SetCustomDataRequestData, onResponse: Action1<GroupResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.SetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetCustomDataOperationResponse);
	}

	/**
	 * Sends the setCustomData operation and resolves with the typed response.
	 */
	public async setCustomDataAsync(requestData: GroupModels.SetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.SetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetCustomDataOperationResponse);
	}

	/**
	 * Sends the setDisplayName operation and returns the typed response via callback.
	 */
	public setDisplayName(requestData: GroupModels.SetDisplayNameRequestData, onResponse: Action1<GroupResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.SetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetDisplayNameOperationResponse);
	}

	/**
	 * Sends the setDisplayName operation and resolves with the typed response.
	 */
	public async setDisplayNameAsync(requestData: GroupModels.SetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.SetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetDisplayNameOperationResponse);
	}

	/**
	 * Sends the changeGroupCurrency operation and returns the typed response via callback.
	 */
	public changeGroupCurrency(requestData: GroupModels.ChangeGroupCurrencyRequestData, onResponse: Action1<GroupResponseModels.ChangeGroupCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ChangeGroupCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.ChangeGroupCurrencyOperationResponse);
	}

	/**
	 * Sends the changeGroupCurrency operation and resolves with the typed response.
	 */
	public async changeGroupCurrencyAsync(requestData: GroupModels.ChangeGroupCurrencyRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.ChangeGroupCurrencyOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ChangeGroupCurrencyOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.ChangeGroupCurrencyOperationResponse);
	}

	/**
	 * Sends the setGroupData operation and returns the typed response via callback.
	 */
	public setGroupData(requestData: GroupModels.SetGroupDataRequestData, onResponse: Action1<GroupResponseModels.SetGroupDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.SetGroupDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetGroupDataOperationResponse);
	}

	/**
	 * Sends the setGroupData operation and resolves with the typed response.
	 */
	public async setGroupDataAsync(requestData: GroupModels.SetGroupDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetGroupDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.SetGroupDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetGroupDataOperationResponse);
	}

	/**
	 * Sends the changeGroupStatistics operation and returns the typed response via callback.
	 */
	public changeGroupStatistics(requestData: GroupModels.ChangeGroupStatisticsRequestData, onResponse: Action1<GroupResponseModels.ChangeGroupStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ChangeGroupStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.ChangeGroupStatisticsOperationResponse);
	}

	/**
	 * Sends the changeGroupStatistics operation and resolves with the typed response.
	 */
	public async changeGroupStatisticsAsync(requestData: GroupModels.ChangeGroupStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.ChangeGroupStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ChangeGroupStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.ChangeGroupStatisticsOperationResponse);
	}

	/**
	 * Sends the setRemoveStatus operation and returns the typed response via callback.
	 */
	public setRemoveStatus(requestData: GroupModels.SetRemoveStatusRequestData, onResponse: Action1<GroupResponseModels.SetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.SetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetRemoveStatusOperationResponse);
	}

	/**
	 * Sends the setRemoveStatus operation and resolves with the typed response.
	 */
	public async setRemoveStatusAsync(requestData: GroupModels.SetRemoveStatusRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetRemoveStatusOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.SetRemoveStatusOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetRemoveStatusOperationResponse);
	}

	/**
	 * Sends the setTag operation and returns the typed response via callback.
	 */
	public setTag(requestData: GroupModels.SetTagRequestData, onResponse: Action1<GroupResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.SetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetTagOperationResponse);
	}

	/**
	 * Sends the setTag operation and resolves with the typed response.
	 */
	public async setTagAsync(requestData: GroupModels.SetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.SetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetTagOperationResponse);
	}

	/**
	 * Sends the getCurrencyLeaderboard operation and returns the typed response via callback.
	 */
	public getCurrencyLeaderboard(requestData: GroupModels.GetCurrencyLeaderboardRequestData, onResponse: Action1<GroupResponseModels.GetCurrencyLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetCurrencyLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCurrencyLeaderboardOperationResponse);
	}

	/**
	 * Sends the getCurrencyLeaderboard operation and resolves with the typed response.
	 */
	public async getCurrencyLeaderboardAsync(requestData: GroupModels.GetCurrencyLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetCurrencyLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetCurrencyLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCurrencyLeaderboardOperationResponse);
	}

	/**
	 * Sends the getCreateLeaderboard operation and returns the typed response via callback.
	 */
	public getCreateLeaderboard(requestData: GroupModels.GetCreateLeaderboardRequestData, onResponse: Action1<GroupResponseModels.GetCreateLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetCreateLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCreateLeaderboardOperationResponse);
	}

	/**
	 * Sends the getCreateLeaderboard operation and resolves with the typed response.
	 */
	public async getCreateLeaderboardAsync(requestData: GroupModels.GetCreateLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetCreateLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetCreateLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCreateLeaderboardOperationResponse);
	}

	/**
	 * Sends the getStatisticsLog operation and returns the typed response via callback.
	 */
	public getStatisticsLog(requestData: GroupModels.GetStatisticsLogRequestData, onResponse: Action1<GroupResponseModels.GetStatisticsLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetStatisticsLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLogOperationResponse);
	}

	/**
	 * Sends the getStatisticsLog operation and resolves with the typed response.
	 */
	public async getStatisticsLogAsync(requestData: GroupModels.GetStatisticsLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetStatisticsLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetStatisticsLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLogOperationResponse);
	}

	/**
	 * Sends the getCurrencyLog operation and returns the typed response via callback.
	 */
	public getCurrencyLog(requestData: GroupModels.GetCurrencyLogRequestData, onResponse: Action1<GroupResponseModels.GetCurrencyLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetCurrencyLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCurrencyLogOperationResponse);
	}

	/**
	 * Sends the getCurrencyLog operation and resolves with the typed response.
	 */
	public async getCurrencyLogAsync(requestData: GroupModels.GetCurrencyLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetCurrencyLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetCurrencyLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCurrencyLogOperationResponse);
	}

}

/**
 * Server-scoped Group namespace, reachable through
 * `GNNetwork.group.server`.
 *
 * Mirrors every method on {@link GroupApi} but uses the
 * `Server*RequestData` DTO variants. The server flavour accepts
 * an explicit `groupId` and acting `userId` so a trusted
 * backend can act on any group / member without holding the
 * acting player's auth token. Always pass a valid server-side
 * `secretKey`.
 */
export class ServerGroupApi {
	/**
	 * Sends the addMember operation and returns the typed response via callback.
	 */
	public addMember(requestData: GroupModels.ServerAddMemberRequestData, onResponse: Action1<GroupResponseModels.AddMemberOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerAddMemberOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.AddMemberOperationResponse);
	}

	/**
	 * Sends the addMember operation and resolves with the typed response.
	 */
	public async addMemberAsync(requestData: GroupModels.ServerAddMemberRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.AddMemberOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerAddMemberOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.AddMemberOperationResponse);
	}

	/**
	 * Sends the addSegment operation and returns the typed response via callback.
	 */
	public addSegment(requestData: GroupModels.ServerAddSegmentRequestData, onResponse: Action1<GroupResponseModels.AddSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerAddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.AddSegmentOperationResponse);
	}

	/**
	 * Sends the addSegment operation and resolves with the typed response.
	 */
	public async addSegmentAsync(requestData: GroupModels.ServerAddSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.AddSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerAddSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.AddSegmentOperationResponse);
	}

	/**
	 * Sends the getAvatar operation and returns the typed response via callback.
	 */
	public getAvatar(requestData: GroupModels.ServerGetAvatarRequestData, onResponse: Action1<GroupResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetAvatarOperationResponse);
	}

	/**
	 * Sends the getAvatar operation and resolves with the typed response.
	 */
	public async getAvatarAsync(requestData: GroupModels.ServerGetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetAvatarOperationResponse);
	}

	/**
	 * Sends the getCatalogId operation and returns the typed response via callback.
	 */
	public getCatalogId(requestData: GroupModels.ServerGetCatalogIdRequestData, onResponse: Action1<GroupResponseModels.GetCatalogIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetCatalogIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCatalogIdOperationResponse);
	}

	/**
	 * Sends the getCatalogId operation and resolves with the typed response.
	 */
	public async getCatalogIdAsync(requestData: GroupModels.ServerGetCatalogIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetCatalogIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetCatalogIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCatalogIdOperationResponse);
	}

	/**
	 * Sends the getCustomData operation and returns the typed response via callback.
	 */
	public getCustomData(requestData: GroupModels.ServerGetCustomDataRequestData, onResponse: Action1<GroupResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCustomDataOperationResponse);
	}

	/**
	 * Sends the getCustomData operation and resolves with the typed response.
	 */
	public async getCustomDataAsync(requestData: GroupModels.ServerGetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCustomDataOperationResponse);
	}

	/**
	 * Sends the getDisplayName operation and returns the typed response via callback.
	 */
	public getDisplayName(requestData: GroupModels.ServerGetDisplayNameRequestData, onResponse: Action1<GroupResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetDisplayNameOperationResponse);
	}

	/**
	 * Sends the getDisplayName operation and resolves with the typed response.
	 */
	public async getDisplayNameAsync(requestData: GroupModels.ServerGetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetDisplayNameOperationResponse);
	}

	/**
	 * Sends the getGroupCurrency operation and returns the typed response via callback.
	 */
	public getGroupCurrency(requestData: GroupModels.ServerGetGroupCurrencyRequestData, onResponse: Action1<GroupResponseModels.GetGroupCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetGroupCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupCurrencyOperationResponse);
	}

	/**
	 * Sends the getGroupCurrency operation and resolves with the typed response.
	 */
	public async getGroupCurrencyAsync(requestData: GroupModels.ServerGetGroupCurrencyRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupCurrencyOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetGroupCurrencyOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupCurrencyOperationResponse);
	}

	/**
	 * Sends the getGroupData operation and returns the typed response via callback.
	 */
	public getGroupData(requestData: GroupModels.ServerGetGroupDataRequestData, onResponse: Action1<GroupResponseModels.GetGroupDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetGroupDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupDataOperationResponse);
	}

	/**
	 * Sends the getGroupData operation and resolves with the typed response.
	 */
	public async getGroupDataAsync(requestData: GroupModels.ServerGetGroupDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetGroupDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupDataOperationResponse);
	}

	/**
	 * Sends the getGroupInformation operation and returns the typed response via callback.
	 */
	public getGroupInformation(requestData: GroupModels.ServerGetGroupInformationRequestData, onResponse: Action1<GroupResponseModels.GetGroupInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetGroupInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupInformationOperationResponse);
	}

	/**
	 * Sends the getGroupInformation operation and resolves with the typed response.
	 */
	public async getGroupInformationAsync(requestData: GroupModels.ServerGetGroupInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetGroupInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupInformationOperationResponse);
	}

	/**
	 * Sends the getGroupInventory operation and returns the typed response via callback.
	 */
	public getGroupInventory(requestData: GroupModels.ServerGetGroupInventoryRequestData, onResponse: Action1<GroupResponseModels.GetGroupInventoryOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetGroupInventoryOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupInventoryOperationResponse);
	}

	/**
	 * Sends the getGroupInventory operation and resolves with the typed response.
	 */
	public async getGroupInventoryAsync(requestData: GroupModels.ServerGetGroupInventoryRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupInventoryOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetGroupInventoryOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupInventoryOperationResponse);
	}

	/**
	 * Sends the getGroupMessage operation and returns the typed response via callback.
	 */
	public getGroupMessage(requestData: GroupModels.ServerGetGroupMessageRequestData, onResponse: Action1<GroupResponseModels.GetGroupMessageOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetGroupMessageOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupMessageOperationResponse);
	}

	/**
	 * Sends the getGroupMessage operation and resolves with the typed response.
	 */
	public async getGroupMessageAsync(requestData: GroupModels.ServerGetGroupMessageRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupMessageOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetGroupMessageOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupMessageOperationResponse);
	}

	/**
	 * Sends the getGroupStatistics operation and returns the typed response via callback.
	 */
	public getGroupStatistics(requestData: GroupModels.ServerGetGroupStatisticsRequestData, onResponse: Action1<GroupResponseModels.GetGroupStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetGroupStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupStatisticsOperationResponse);
	}

	/**
	 * Sends the getGroupStatistics operation and resolves with the typed response.
	 */
	public async getGroupStatisticsAsync(requestData: GroupModels.ServerGetGroupStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetGroupStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupStatisticsOperationResponse);
	}

	/**
	 * Sends the getGroupsWithDisplayName operation and returns the typed response via callback.
	 */
	public getGroupsWithDisplayName(requestData: GroupModels.ServerGetGroupsWithDisplayNameRequestData, onResponse: Action1<GroupResponseModels.GetGroupsWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetGroupsWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithDisplayNameOperationResponse);
	}

	/**
	 * Sends the getGroupsWithDisplayName operation and resolves with the typed response.
	 */
	public async getGroupsWithDisplayNameAsync(requestData: GroupModels.ServerGetGroupsWithDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupsWithDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetGroupsWithDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithDisplayNameOperationResponse);
	}

	/**
	 * Sends the getGroupsWithSegment operation and returns the typed response via callback.
	 */
	public getGroupsWithSegment(requestData: GroupModels.ServerGetGroupsWithSegmentRequestData, onResponse: Action1<GroupResponseModels.GetGroupsWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetGroupsWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithSegmentOperationResponse);
	}

	/**
	 * Sends the getGroupsWithSegment operation and resolves with the typed response.
	 */
	public async getGroupsWithSegmentAsync(requestData: GroupModels.ServerGetGroupsWithSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupsWithSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetGroupsWithSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithSegmentOperationResponse);
	}

	/**
	 * Sends the getGroupsWithTag operation and returns the typed response via callback.
	 */
	public getGroupsWithTag(requestData: GroupModels.ServerGetGroupsWithTagRequestData, onResponse: Action1<GroupResponseModels.GetGroupsWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetGroupsWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithTagOperationResponse);
	}

	/**
	 * Sends the getGroupsWithTag operation and resolves with the typed response.
	 */
	public async getGroupsWithTagAsync(requestData: GroupModels.ServerGetGroupsWithTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupsWithTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetGroupsWithTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithTagOperationResponse);
	}

	/**
	 * Sends the getMembers operation and returns the typed response via callback.
	 */
	public getMembers(requestData: GroupModels.ServerGetMembersRequestData, onResponse: Action1<GroupResponseModels.GetMembersOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetMembersOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetMembersOperationResponse);
	}

	/**
	 * Sends the getMembers operation and resolves with the typed response.
	 */
	public async getMembersAsync(requestData: GroupModels.ServerGetMembersRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetMembersOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetMembersOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetMembersOperationResponse);
	}

	/**
	 * Sends the getRemoveStatus operation and returns the typed response via callback.
	 */
	public getRemoveStatus(requestData: GroupModels.ServerGetRemoveStatusRequestData, onResponse: Action1<GroupResponseModels.GetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetRemoveStatusOperationResponse);
	}

	/**
	 * Sends the getRemoveStatus operation and resolves with the typed response.
	 */
	public async getRemoveStatusAsync(requestData: GroupModels.ServerGetRemoveStatusRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetRemoveStatusOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetRemoveStatusOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetRemoveStatusOperationResponse);
	}

	/**
	 * Sends the getSegment operation and returns the typed response via callback.
	 */
	public getSegment(requestData: GroupModels.ServerGetSegmentRequestData, onResponse: Action1<GroupResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetSegmentOperationResponse);
	}

	/**
	 * Sends the getSegment operation and resolves with the typed response.
	 */
	public async getSegmentAsync(requestData: GroupModels.ServerGetSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetSegmentOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboardAroundGroup operation and returns the typed response via callback.
	 */
	public getStatisticsLeaderboardAroundGroup(requestData: GroupModels.ServerGetStatisticsLeaderboardAroundGroupRequestData, onResponse: Action1<GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetStatisticsLeaderboardAroundGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboardAroundGroup operation and resolves with the typed response.
	 */
	public async getStatisticsLeaderboardAroundGroupAsync(requestData: GroupModels.ServerGetStatisticsLeaderboardAroundGroupRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetStatisticsLeaderboardAroundGroupOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboard operation and returns the typed response via callback.
	 */
	public getStatisticsLeaderboard(requestData: GroupModels.ServerGetStatisticsLeaderboardRequestData, onResponse: Action1<GroupResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboard operation and resolves with the typed response.
	 */
	public async getStatisticsLeaderboardAsync(requestData: GroupModels.ServerGetStatisticsLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetStatisticsLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetStatisticsLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the getTag operation and returns the typed response via callback.
	 */
	public getTag(requestData: GroupModels.ServerGetTagRequestData, onResponse: Action1<GroupResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetTagOperationResponse);
	}

	/**
	 * Sends the getTag operation and resolves with the typed response.
	 */
	public async getTagAsync(requestData: GroupModels.ServerGetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetTagOperationResponse);
	}

	/**
	 * Sends the getTsCreate operation and returns the typed response via callback.
	 */
	public getTsCreate(requestData: GroupModels.ServerGetTsCreateRequestData, onResponse: Action1<GroupResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetTsCreateOperationResponse);
	}

	/**
	 * Sends the getTsCreate operation and resolves with the typed response.
	 */
	public async getTsCreateAsync(requestData: GroupModels.ServerGetTsCreateRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetTsCreateOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetTsCreateOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetTsCreateOperationResponse);
	}

	/**
	 * Sends the createGroupItem operation and returns the typed response via callback.
	 */
	public createGroupItem(requestData: GroupModels.ServerCreateGroupItemRequestData, onResponse: Action1<GroupResponseModels.CreateGroupItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerCreateGroupItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.CreateGroupItemOperationResponse);
	}

	/**
	 * Sends the createGroupItem operation and resolves with the typed response.
	 */
	public async createGroupItemAsync(requestData: GroupModels.ServerCreateGroupItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.CreateGroupItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerCreateGroupItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.CreateGroupItemOperationResponse);
	}

	/**
	 * Sends the removeGroupItem operation and returns the typed response via callback.
	 */
	public removeGroupItem(requestData: GroupModels.ServerRemoveGroupItemRequestData, onResponse: Action1<GroupResponseModels.RemoveGroupItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerRemoveGroupItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveGroupItemOperationResponse);
	}

	/**
	 * Sends the removeGroupItem operation and resolves with the typed response.
	 */
	public async removeGroupItemAsync(requestData: GroupModels.ServerRemoveGroupItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.RemoveGroupItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerRemoveGroupItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveGroupItemOperationResponse);
	}

	/**
	 * Sends the removeMember operation and returns the typed response via callback.
	 */
	public removeMember(requestData: GroupModels.ServerRemoveMemberRequestData, onResponse: Action1<GroupResponseModels.RemoveMemberOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerRemoveMemberOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveMemberOperationResponse);
	}

	/**
	 * Sends the removeMember operation and resolves with the typed response.
	 */
	public async removeMemberAsync(requestData: GroupModels.ServerRemoveMemberRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.RemoveMemberOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerRemoveMemberOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveMemberOperationResponse);
	}

	/**
	 * Sends the removeSegment operation and returns the typed response via callback.
	 */
	public removeSegment(requestData: GroupModels.ServerRemoveSegmentRequestData, onResponse: Action1<GroupResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerRemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveSegmentOperationResponse);
	}

	/**
	 * Sends the removeSegment operation and resolves with the typed response.
	 */
	public async removeSegmentAsync(requestData: GroupModels.ServerRemoveSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.RemoveSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerRemoveSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveSegmentOperationResponse);
	}

	/**
	 * Sends the removeTag operation and returns the typed response via callback.
	 */
	public removeTag(requestData: GroupModels.ServerRemoveTagRequestData, onResponse: Action1<GroupResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerRemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveTagOperationResponse);
	}

	/**
	 * Sends the removeTag operation and resolves with the typed response.
	 */
	public async removeTagAsync(requestData: GroupModels.ServerRemoveTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.RemoveTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerRemoveTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveTagOperationResponse);
	}

	/**
	 * Sends the sendGroupMessage operation and returns the typed response via callback.
	 */
	public sendGroupMessage(requestData: GroupModels.ServerSendGroupMessageRequestData, onResponse: Action1<GroupResponseModels.SendGroupMessageOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerSendGroupMessageOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SendGroupMessageOperationResponse);
	}

	/**
	 * Sends the sendGroupMessage operation and resolves with the typed response.
	 */
	public async sendGroupMessageAsync(requestData: GroupModels.ServerSendGroupMessageRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SendGroupMessageOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerSendGroupMessageOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SendGroupMessageOperationResponse);
	}

	/**
	 * Sends the setAvatar operation and returns the typed response via callback.
	 */
	public setAvatar(requestData: GroupModels.ServerSetAvatarRequestData, onResponse: Action1<GroupResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerSetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetAvatarOperationResponse);
	}

	/**
	 * Sends the setAvatar operation and resolves with the typed response.
	 */
	public async setAvatarAsync(requestData: GroupModels.ServerSetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerSetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetAvatarOperationResponse);
	}

	/**
	 * Sends the setCustomData operation and returns the typed response via callback.
	 */
	public setCustomData(requestData: GroupModels.ServerSetCustomDataRequestData, onResponse: Action1<GroupResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerSetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetCustomDataOperationResponse);
	}

	/**
	 * Sends the setCustomData operation and resolves with the typed response.
	 */
	public async setCustomDataAsync(requestData: GroupModels.ServerSetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerSetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetCustomDataOperationResponse);
	}

	/**
	 * Sends the setDisplayName operation and returns the typed response via callback.
	 */
	public setDisplayName(requestData: GroupModels.ServerSetDisplayNameRequestData, onResponse: Action1<GroupResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerSetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetDisplayNameOperationResponse);
	}

	/**
	 * Sends the setDisplayName operation and resolves with the typed response.
	 */
	public async setDisplayNameAsync(requestData: GroupModels.ServerSetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerSetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetDisplayNameOperationResponse);
	}

	/**
	 * Sends the changeGroupCurrency operation and returns the typed response via callback.
	 */
	public changeGroupCurrency(requestData: GroupModels.ServerChangeGroupCurrencyRequestData, onResponse: Action1<GroupResponseModels.ChangeGroupCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerChangeGroupCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.ChangeGroupCurrencyOperationResponse);
	}

	/**
	 * Sends the changeGroupCurrency operation and resolves with the typed response.
	 */
	public async changeGroupCurrencyAsync(requestData: GroupModels.ServerChangeGroupCurrencyRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.ChangeGroupCurrencyOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerChangeGroupCurrencyOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.ChangeGroupCurrencyOperationResponse);
	}

	/**
	 * Sends the setGroupData operation and returns the typed response via callback.
	 */
	public setGroupData(requestData: GroupModels.ServerSetGroupDataRequestData, onResponse: Action1<GroupResponseModels.SetGroupDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerSetGroupDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetGroupDataOperationResponse);
	}

	/**
	 * Sends the setGroupData operation and resolves with the typed response.
	 */
	public async setGroupDataAsync(requestData: GroupModels.ServerSetGroupDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetGroupDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerSetGroupDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetGroupDataOperationResponse);
	}

	/**
	 * Sends the changeGroupStatistics operation and returns the typed response via callback.
	 */
	public changeGroupStatistics(requestData: GroupModels.ServerChangeGroupStatisticsRequestData, onResponse: Action1<GroupResponseModels.ChangeGroupStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerChangeGroupStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.ChangeGroupStatisticsOperationResponse);
	}

	/**
	 * Sends the changeGroupStatistics operation and resolves with the typed response.
	 */
	public async changeGroupStatisticsAsync(requestData: GroupModels.ServerChangeGroupStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.ChangeGroupStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerChangeGroupStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.ChangeGroupStatisticsOperationResponse);
	}

	/**
	 * Sends the setRemoveStatus operation and returns the typed response via callback.
	 */
	public setRemoveStatus(requestData: GroupModels.ServerSetRemoveStatusRequestData, onResponse: Action1<GroupResponseModels.SetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerSetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetRemoveStatusOperationResponse);
	}

	/**
	 * Sends the setRemoveStatus operation and resolves with the typed response.
	 */
	public async setRemoveStatusAsync(requestData: GroupModels.ServerSetRemoveStatusRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetRemoveStatusOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerSetRemoveStatusOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetRemoveStatusOperationResponse);
	}

	/**
	 * Sends the setTag operation and returns the typed response via callback.
	 */
	public setTag(requestData: GroupModels.ServerSetTagRequestData, onResponse: Action1<GroupResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerSetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetTagOperationResponse);
	}

	/**
	 * Sends the setTag operation and resolves with the typed response.
	 */
	public async setTagAsync(requestData: GroupModels.ServerSetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerSetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetTagOperationResponse);
	}

	/**
	 * Sends the getCurrencyLeaderboard operation and returns the typed response via callback.
	 */
	public getCurrencyLeaderboard(requestData: GroupModels.ServerGetCurrencyLeaderboardRequestData, onResponse: Action1<GroupResponseModels.GetCurrencyLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetCurrencyLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCurrencyLeaderboardOperationResponse);
	}

	/**
	 * Sends the getCurrencyLeaderboard operation and resolves with the typed response.
	 */
	public async getCurrencyLeaderboardAsync(requestData: GroupModels.ServerGetCurrencyLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetCurrencyLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetCurrencyLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCurrencyLeaderboardOperationResponse);
	}

	/**
	 * Sends the getCreateLeaderboard operation and returns the typed response via callback.
	 */
	public getCreateLeaderboard(requestData: GroupModels.ServerGetCreateLeaderboardRequestData, onResponse: Action1<GroupResponseModels.GetCreateLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetCreateLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCreateLeaderboardOperationResponse);
	}

	/**
	 * Sends the getCreateLeaderboard operation and resolves with the typed response.
	 */
	public async getCreateLeaderboardAsync(requestData: GroupModels.ServerGetCreateLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetCreateLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetCreateLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCreateLeaderboardOperationResponse);
	}

	/**
	 * Sends the getStatisticsLog operation and returns the typed response via callback.
	 */
	public getStatisticsLog(requestData: GroupModels.ServerGetStatisticsLogRequestData, onResponse: Action1<GroupResponseModels.GetStatisticsLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetStatisticsLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLogOperationResponse);
	}

	/**
	 * Sends the getStatisticsLog operation and resolves with the typed response.
	 */
	public async getStatisticsLogAsync(requestData: GroupModels.ServerGetStatisticsLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetStatisticsLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetStatisticsLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLogOperationResponse);
	}

	/**
	 * Sends the getCurrencyLog operation and returns the typed response via callback.
	 */
	public getCurrencyLog(requestData: GroupModels.ServerGetCurrencyLogRequestData, onResponse: Action1<GroupResponseModels.GetCurrencyLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetCurrencyLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCurrencyLogOperationResponse);
	}

	/**
	 * Sends the getCurrencyLog operation and resolves with the typed response.
	 */
	public async getCurrencyLogAsync(requestData: GroupModels.ServerGetCurrencyLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetCurrencyLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetCurrencyLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCurrencyLogOperationResponse);
	}

}

/**
 * Admin-scoped Group namespace, reachable through
 * `GNNetwork.group.admin`.
 *
 * Mirrors {@link ServerGroupApi} but routed through
 * {@link RequestRole.Admin}. The backend uses the caller's
 * admin auth token to authorise privileged operations
 * (force-add / force-remove members, override role rules,
 * disband group). Reserved for dashboard / GM / backoffice
 * tools.
 */
export class AdminGroupApi {
	/**
	 * Sends the addMember operation and returns the typed response via callback.
	 */
	public addMember(requestData: GroupModels.AdminAddMemberRequestData, onResponse: Action1<GroupResponseModels.AddMemberOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminAddMemberOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.AddMemberOperationResponse);
	}

	/**
	 * Sends the addMember operation and resolves with the typed response.
	 */
	public async addMemberAsync(requestData: GroupModels.AdminAddMemberRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.AddMemberOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminAddMemberOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.AddMemberOperationResponse);
	}

	/**
	 * Sends the addSegment operation and returns the typed response via callback.
	 */
	public addSegment(requestData: GroupModels.AdminAddSegmentRequestData, onResponse: Action1<GroupResponseModels.AddSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminAddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.AddSegmentOperationResponse);
	}

	/**
	 * Sends the addSegment operation and resolves with the typed response.
	 */
	public async addSegmentAsync(requestData: GroupModels.AdminAddSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.AddSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminAddSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.AddSegmentOperationResponse);
	}

	/**
	 * Sends the getAvatar operation and returns the typed response via callback.
	 */
	public getAvatar(requestData: GroupModels.AdminGetAvatarRequestData, onResponse: Action1<GroupResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetAvatarOperationResponse);
	}

	/**
	 * Sends the getAvatar operation and resolves with the typed response.
	 */
	public async getAvatarAsync(requestData: GroupModels.AdminGetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetAvatarOperationResponse);
	}

	/**
	 * Sends the getCatalogId operation and returns the typed response via callback.
	 */
	public getCatalogId(requestData: GroupModels.AdminGetCatalogIdRequestData, onResponse: Action1<GroupResponseModels.GetCatalogIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetCatalogIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCatalogIdOperationResponse);
	}

	/**
	 * Sends the getCatalogId operation and resolves with the typed response.
	 */
	public async getCatalogIdAsync(requestData: GroupModels.AdminGetCatalogIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetCatalogIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetCatalogIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCatalogIdOperationResponse);
	}

	/**
	 * Sends the getCustomData operation and returns the typed response via callback.
	 */
	public getCustomData(requestData: GroupModels.AdminGetCustomDataRequestData, onResponse: Action1<GroupResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCustomDataOperationResponse);
	}

	/**
	 * Sends the getCustomData operation and resolves with the typed response.
	 */
	public async getCustomDataAsync(requestData: GroupModels.AdminGetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCustomDataOperationResponse);
	}

	/**
	 * Sends the getDisplayName operation and returns the typed response via callback.
	 */
	public getDisplayName(requestData: GroupModels.AdminGetDisplayNameRequestData, onResponse: Action1<GroupResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetDisplayNameOperationResponse);
	}

	/**
	 * Sends the getDisplayName operation and resolves with the typed response.
	 */
	public async getDisplayNameAsync(requestData: GroupModels.AdminGetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetDisplayNameOperationResponse);
	}

	/**
	 * Sends the getGroupCurrency operation and returns the typed response via callback.
	 */
	public getGroupCurrency(requestData: GroupModels.AdminGetGroupCurrencyRequestData, onResponse: Action1<GroupResponseModels.GetGroupCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetGroupCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupCurrencyOperationResponse);
	}

	/**
	 * Sends the getGroupCurrency operation and resolves with the typed response.
	 */
	public async getGroupCurrencyAsync(requestData: GroupModels.AdminGetGroupCurrencyRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupCurrencyOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetGroupCurrencyOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupCurrencyOperationResponse);
	}

	/**
	 * Sends the getGroupData operation and returns the typed response via callback.
	 */
	public getGroupData(requestData: GroupModels.AdminGetGroupDataRequestData, onResponse: Action1<GroupResponseModels.GetGroupDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetGroupDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupDataOperationResponse);
	}

	/**
	 * Sends the getGroupData operation and resolves with the typed response.
	 */
	public async getGroupDataAsync(requestData: GroupModels.AdminGetGroupDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetGroupDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupDataOperationResponse);
	}

	/**
	 * Sends the getGroupInformation operation and returns the typed response via callback.
	 */
	public getGroupInformation(requestData: GroupModels.AdminGetGroupInformationRequestData, onResponse: Action1<GroupResponseModels.GetGroupInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetGroupInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupInformationOperationResponse);
	}

	/**
	 * Sends the getGroupInformation operation and resolves with the typed response.
	 */
	public async getGroupInformationAsync(requestData: GroupModels.AdminGetGroupInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetGroupInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupInformationOperationResponse);
	}

	/**
	 * Sends the getGroupInventory operation and returns the typed response via callback.
	 */
	public getGroupInventory(requestData: GroupModels.AdminGetGroupInventoryRequestData, onResponse: Action1<GroupResponseModels.GetGroupInventoryOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetGroupInventoryOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupInventoryOperationResponse);
	}

	/**
	 * Sends the getGroupInventory operation and resolves with the typed response.
	 */
	public async getGroupInventoryAsync(requestData: GroupModels.AdminGetGroupInventoryRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupInventoryOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetGroupInventoryOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupInventoryOperationResponse);
	}

	/**
	 * Sends the getGroupMessage operation and returns the typed response via callback.
	 */
	public getGroupMessage(requestData: GroupModels.AdminGetGroupMessageRequestData, onResponse: Action1<GroupResponseModels.GetGroupMessageOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetGroupMessageOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupMessageOperationResponse);
	}

	/**
	 * Sends the getGroupMessage operation and resolves with the typed response.
	 */
	public async getGroupMessageAsync(requestData: GroupModels.AdminGetGroupMessageRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupMessageOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetGroupMessageOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupMessageOperationResponse);
	}

	/**
	 * Sends the getGroupStatistics operation and returns the typed response via callback.
	 */
	public getGroupStatistics(requestData: GroupModels.AdminGetGroupStatisticsRequestData, onResponse: Action1<GroupResponseModels.GetGroupStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetGroupStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupStatisticsOperationResponse);
	}

	/**
	 * Sends the getGroupStatistics operation and resolves with the typed response.
	 */
	public async getGroupStatisticsAsync(requestData: GroupModels.AdminGetGroupStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetGroupStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupStatisticsOperationResponse);
	}

	/**
	 * Sends the getGroupsWithDisplayName operation and returns the typed response via callback.
	 */
	public getGroupsWithDisplayName(requestData: GroupModels.AdminGetGroupsWithDisplayNameRequestData, onResponse: Action1<GroupResponseModels.GetGroupsWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetGroupsWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithDisplayNameOperationResponse);
	}

	/**
	 * Sends the getGroupsWithDisplayName operation and resolves with the typed response.
	 */
	public async getGroupsWithDisplayNameAsync(requestData: GroupModels.AdminGetGroupsWithDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupsWithDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetGroupsWithDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithDisplayNameOperationResponse);
	}

	/**
	 * Sends the getGroupsWithSegment operation and returns the typed response via callback.
	 */
	public getGroupsWithSegment(requestData: GroupModels.AdminGetGroupsWithSegmentRequestData, onResponse: Action1<GroupResponseModels.GetGroupsWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetGroupsWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithSegmentOperationResponse);
	}

	/**
	 * Sends the getGroupsWithSegment operation and resolves with the typed response.
	 */
	public async getGroupsWithSegmentAsync(requestData: GroupModels.AdminGetGroupsWithSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupsWithSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetGroupsWithSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithSegmentOperationResponse);
	}

	/**
	 * Sends the getGroupsWithTag operation and returns the typed response via callback.
	 */
	public getGroupsWithTag(requestData: GroupModels.AdminGetGroupsWithTagRequestData, onResponse: Action1<GroupResponseModels.GetGroupsWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetGroupsWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithTagOperationResponse);
	}

	/**
	 * Sends the getGroupsWithTag operation and resolves with the typed response.
	 */
	public async getGroupsWithTagAsync(requestData: GroupModels.AdminGetGroupsWithTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupsWithTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetGroupsWithTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithTagOperationResponse);
	}

	/**
	 * Sends the getMembers operation and returns the typed response via callback.
	 */
	public getMembers(requestData: GroupModels.AdminGetMembersRequestData, onResponse: Action1<GroupResponseModels.GetMembersOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetMembersOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetMembersOperationResponse);
	}

	/**
	 * Sends the getMembers operation and resolves with the typed response.
	 */
	public async getMembersAsync(requestData: GroupModels.AdminGetMembersRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetMembersOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetMembersOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetMembersOperationResponse);
	}

	/**
	 * Sends the getRemoveStatus operation and returns the typed response via callback.
	 */
	public getRemoveStatus(requestData: GroupModels.AdminGetRemoveStatusRequestData, onResponse: Action1<GroupResponseModels.GetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetRemoveStatusOperationResponse);
	}

	/**
	 * Sends the getRemoveStatus operation and resolves with the typed response.
	 */
	public async getRemoveStatusAsync(requestData: GroupModels.AdminGetRemoveStatusRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetRemoveStatusOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetRemoveStatusOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetRemoveStatusOperationResponse);
	}

	/**
	 * Sends the getSegment operation and returns the typed response via callback.
	 */
	public getSegment(requestData: GroupModels.AdminGetSegmentRequestData, onResponse: Action1<GroupResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetSegmentOperationResponse);
	}

	/**
	 * Sends the getSegment operation and resolves with the typed response.
	 */
	public async getSegmentAsync(requestData: GroupModels.AdminGetSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetSegmentOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboardAroundGroup operation and returns the typed response via callback.
	 */
	public getStatisticsLeaderboardAroundGroup(requestData: GroupModels.AdminGetStatisticsLeaderboardAroundGroupRequestData, onResponse: Action1<GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetStatisticsLeaderboardAroundGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboardAroundGroup operation and resolves with the typed response.
	 */
	public async getStatisticsLeaderboardAroundGroupAsync(requestData: GroupModels.AdminGetStatisticsLeaderboardAroundGroupRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetStatisticsLeaderboardAroundGroupOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboard operation and returns the typed response via callback.
	 */
	public getStatisticsLeaderboard(requestData: GroupModels.AdminGetStatisticsLeaderboardRequestData, onResponse: Action1<GroupResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the getStatisticsLeaderboard operation and resolves with the typed response.
	 */
	public async getStatisticsLeaderboardAsync(requestData: GroupModels.AdminGetStatisticsLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetStatisticsLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetStatisticsLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	/**
	 * Sends the getTag operation and returns the typed response via callback.
	 */
	public getTag(requestData: GroupModels.AdminGetTagRequestData, onResponse: Action1<GroupResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetTagOperationResponse);
	}

	/**
	 * Sends the getTag operation and resolves with the typed response.
	 */
	public async getTagAsync(requestData: GroupModels.AdminGetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetTagOperationResponse);
	}

	/**
	 * Sends the getTsCreate operation and returns the typed response via callback.
	 */
	public getTsCreate(requestData: GroupModels.AdminGetTsCreateRequestData, onResponse: Action1<GroupResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetTsCreateOperationResponse);
	}

	/**
	 * Sends the getTsCreate operation and resolves with the typed response.
	 */
	public async getTsCreateAsync(requestData: GroupModels.AdminGetTsCreateRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetTsCreateOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetTsCreateOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetTsCreateOperationResponse);
	}

	/**
	 * Sends the createGroupItem operation and returns the typed response via callback.
	 */
	public createGroupItem(requestData: GroupModels.AdminCreateGroupItemRequestData, onResponse: Action1<GroupResponseModels.CreateGroupItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminCreateGroupItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.CreateGroupItemOperationResponse);
	}

	/**
	 * Sends the createGroupItem operation and resolves with the typed response.
	 */
	public async createGroupItemAsync(requestData: GroupModels.AdminCreateGroupItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.CreateGroupItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminCreateGroupItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.CreateGroupItemOperationResponse);
	}

	/**
	 * Sends the removeGroupItem operation and returns the typed response via callback.
	 */
	public removeGroupItem(requestData: GroupModels.AdminRemoveGroupItemRequestData, onResponse: Action1<GroupResponseModels.RemoveGroupItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminRemoveGroupItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveGroupItemOperationResponse);
	}

	/**
	 * Sends the removeGroupItem operation and resolves with the typed response.
	 */
	public async removeGroupItemAsync(requestData: GroupModels.AdminRemoveGroupItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.RemoveGroupItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminRemoveGroupItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveGroupItemOperationResponse);
	}

	/**
	 * Sends the removeMember operation and returns the typed response via callback.
	 */
	public removeMember(requestData: GroupModels.AdminRemoveMemberRequestData, onResponse: Action1<GroupResponseModels.RemoveMemberOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminRemoveMemberOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveMemberOperationResponse);
	}

	/**
	 * Sends the removeMember operation and resolves with the typed response.
	 */
	public async removeMemberAsync(requestData: GroupModels.AdminRemoveMemberRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.RemoveMemberOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminRemoveMemberOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveMemberOperationResponse);
	}

	/**
	 * Sends the removeSegment operation and returns the typed response via callback.
	 */
	public removeSegment(requestData: GroupModels.AdminRemoveSegmentRequestData, onResponse: Action1<GroupResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminRemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveSegmentOperationResponse);
	}

	/**
	 * Sends the removeSegment operation and resolves with the typed response.
	 */
	public async removeSegmentAsync(requestData: GroupModels.AdminRemoveSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.RemoveSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminRemoveSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveSegmentOperationResponse);
	}

	/**
	 * Sends the removeTag operation and returns the typed response via callback.
	 */
	public removeTag(requestData: GroupModels.AdminRemoveTagRequestData, onResponse: Action1<GroupResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminRemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveTagOperationResponse);
	}

	/**
	 * Sends the removeTag operation and resolves with the typed response.
	 */
	public async removeTagAsync(requestData: GroupModels.AdminRemoveTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.RemoveTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminRemoveTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveTagOperationResponse);
	}

	/**
	 * Sends the sendGroupMessage operation and returns the typed response via callback.
	 */
	public sendGroupMessage(requestData: GroupModels.AdminSendGroupMessageRequestData, onResponse: Action1<GroupResponseModels.SendGroupMessageOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminSendGroupMessageOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SendGroupMessageOperationResponse);
	}

	/**
	 * Sends the sendGroupMessage operation and resolves with the typed response.
	 */
	public async sendGroupMessageAsync(requestData: GroupModels.AdminSendGroupMessageRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SendGroupMessageOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminSendGroupMessageOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SendGroupMessageOperationResponse);
	}

	/**
	 * Sends the setAvatar operation and returns the typed response via callback.
	 */
	public setAvatar(requestData: GroupModels.AdminSetAvatarRequestData, onResponse: Action1<GroupResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminSetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetAvatarOperationResponse);
	}

	/**
	 * Sends the setAvatar operation and resolves with the typed response.
	 */
	public async setAvatarAsync(requestData: GroupModels.AdminSetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminSetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetAvatarOperationResponse);
	}

	/**
	 * Sends the setCustomData operation and returns the typed response via callback.
	 */
	public setCustomData(requestData: GroupModels.AdminSetCustomDataRequestData, onResponse: Action1<GroupResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminSetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetCustomDataOperationResponse);
	}

	/**
	 * Sends the setCustomData operation and resolves with the typed response.
	 */
	public async setCustomDataAsync(requestData: GroupModels.AdminSetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminSetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetCustomDataOperationResponse);
	}

	/**
	 * Sends the setDisplayName operation and returns the typed response via callback.
	 */
	public setDisplayName(requestData: GroupModels.AdminSetDisplayNameRequestData, onResponse: Action1<GroupResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminSetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetDisplayNameOperationResponse);
	}

	/**
	 * Sends the setDisplayName operation and resolves with the typed response.
	 */
	public async setDisplayNameAsync(requestData: GroupModels.AdminSetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminSetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetDisplayNameOperationResponse);
	}

	/**
	 * Sends the changeGroupCurrency operation and returns the typed response via callback.
	 */
	public changeGroupCurrency(requestData: GroupModels.AdminChangeGroupCurrencyRequestData, onResponse: Action1<GroupResponseModels.ChangeGroupCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminChangeGroupCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.ChangeGroupCurrencyOperationResponse);
	}

	/**
	 * Sends the changeGroupCurrency operation and resolves with the typed response.
	 */
	public async changeGroupCurrencyAsync(requestData: GroupModels.AdminChangeGroupCurrencyRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.ChangeGroupCurrencyOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminChangeGroupCurrencyOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.ChangeGroupCurrencyOperationResponse);
	}

	/**
	 * Sends the setGroupData operation and returns the typed response via callback.
	 */
	public setGroupData(requestData: GroupModels.AdminSetGroupDataRequestData, onResponse: Action1<GroupResponseModels.SetGroupDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminSetGroupDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetGroupDataOperationResponse);
	}

	/**
	 * Sends the setGroupData operation and resolves with the typed response.
	 */
	public async setGroupDataAsync(requestData: GroupModels.AdminSetGroupDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetGroupDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminSetGroupDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetGroupDataOperationResponse);
	}

	/**
	 * Sends the changeGroupStatistics operation and returns the typed response via callback.
	 */
	public changeGroupStatistics(requestData: GroupModels.AdminChangeGroupStatisticsRequestData, onResponse: Action1<GroupResponseModels.ChangeGroupStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminChangeGroupStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.ChangeGroupStatisticsOperationResponse);
	}

	/**
	 * Sends the changeGroupStatistics operation and resolves with the typed response.
	 */
	public async changeGroupStatisticsAsync(requestData: GroupModels.AdminChangeGroupStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.ChangeGroupStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminChangeGroupStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.ChangeGroupStatisticsOperationResponse);
	}

	/**
	 * Sends the setRemoveStatus operation and returns the typed response via callback.
	 */
	public setRemoveStatus(requestData: GroupModels.AdminSetRemoveStatusRequestData, onResponse: Action1<GroupResponseModels.SetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminSetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetRemoveStatusOperationResponse);
	}

	/**
	 * Sends the setRemoveStatus operation and resolves with the typed response.
	 */
	public async setRemoveStatusAsync(requestData: GroupModels.AdminSetRemoveStatusRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetRemoveStatusOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminSetRemoveStatusOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetRemoveStatusOperationResponse);
	}

	/**
	 * Sends the setTag operation and returns the typed response via callback.
	 */
	public setTag(requestData: GroupModels.AdminSetTagRequestData, onResponse: Action1<GroupResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminSetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetTagOperationResponse);
	}

	/**
	 * Sends the setTag operation and resolves with the typed response.
	 */
	public async setTagAsync(requestData: GroupModels.AdminSetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminSetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetTagOperationResponse);
	}

	/**
	 * Sends the getCurrencyLeaderboard operation and returns the typed response via callback.
	 */
	public getCurrencyLeaderboard(requestData: GroupModels.AdminGetCurrencyLeaderboardRequestData, onResponse: Action1<GroupResponseModels.GetCurrencyLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetCurrencyLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCurrencyLeaderboardOperationResponse);
	}

	/**
	 * Sends the getCurrencyLeaderboard operation and resolves with the typed response.
	 */
	public async getCurrencyLeaderboardAsync(requestData: GroupModels.AdminGetCurrencyLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetCurrencyLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetCurrencyLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCurrencyLeaderboardOperationResponse);
	}

	/**
	 * Sends the getCreateLeaderboard operation and returns the typed response via callback.
	 */
	public getCreateLeaderboard(requestData: GroupModels.AdminGetCreateLeaderboardRequestData, onResponse: Action1<GroupResponseModels.GetCreateLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetCreateLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCreateLeaderboardOperationResponse);
	}

	/**
	 * Sends the getCreateLeaderboard operation and resolves with the typed response.
	 */
	public async getCreateLeaderboardAsync(requestData: GroupModels.AdminGetCreateLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetCreateLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetCreateLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCreateLeaderboardOperationResponse);
	}

	/**
	 * Sends the getStatisticsLog operation and returns the typed response via callback.
	 */
	public getStatisticsLog(requestData: GroupModels.AdminGetStatisticsLogRequestData, onResponse: Action1<GroupResponseModels.GetStatisticsLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetStatisticsLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLogOperationResponse);
	}

	/**
	 * Sends the getStatisticsLog operation and resolves with the typed response.
	 */
	public async getStatisticsLogAsync(requestData: GroupModels.AdminGetStatisticsLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetStatisticsLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetStatisticsLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLogOperationResponse);
	}

	/**
	 * Sends the getCurrencyLog operation and returns the typed response via callback.
	 */
	public getCurrencyLog(requestData: GroupModels.AdminGetCurrencyLogRequestData, onResponse: Action1<GroupResponseModels.GetCurrencyLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetCurrencyLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCurrencyLogOperationResponse);
	}

	/**
	 * Sends the getCurrencyLog operation and resolves with the typed response.
	 */
	public async getCurrencyLogAsync(requestData: GroupModels.AdminGetCurrencyLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetCurrencyLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetCurrencyLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCurrencyLogOperationResponse);
	}

}
