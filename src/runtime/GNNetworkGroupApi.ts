import { GNNetwork } from "./GNNetwork";
import { Action1 } from "./common/Action1";
import { GNHashtable } from "./common/GNData";
import { OperationRequest } from "./entity/OperationRequest";
import { GroupModels } from "./entity/models/GroupModels";
import { GroupRequestModels } from "./entity/models/GroupRequestModels";
import { GroupResponseModels } from "./entity/models/GroupResponseModels";

export class GroupApi {
	public server: ServerGroupApi = new ServerGroupApi();

	public admin: AdminGroupApi = new AdminGroupApi();

	public addMember(requestData: GroupModels.AddMemberRequestData, onResponse: Action1<GroupResponseModels.AddMemberOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AddMemberOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.AddMemberOperationResponse);
	}

	public async addMemberAsync(requestData: GroupModels.AddMemberRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.AddMemberOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AddMemberOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.AddMemberOperationResponse);
	}

	public addSegment(requestData: GroupModels.AddSegmentRequestData, onResponse: Action1<GroupResponseModels.AddSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.AddSegmentOperationResponse);
	}

	public async addSegmentAsync(requestData: GroupModels.AddSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.AddSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AddSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.AddSegmentOperationResponse);
	}

	public getAvatar(requestData: GroupModels.GetAvatarRequestData, onResponse: Action1<GroupResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetAvatarOperationResponse);
	}

	public async getAvatarAsync(requestData: GroupModels.GetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetAvatarOperationResponse);
	}

	public getCatalogId(requestData: GroupModels.GetCatalogIdRequestData, onResponse: Action1<GroupResponseModels.GetCatalogIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetCatalogIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCatalogIdOperationResponse);
	}

	public async getCatalogIdAsync(requestData: GroupModels.GetCatalogIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetCatalogIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetCatalogIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCatalogIdOperationResponse);
	}

	public getCustomData(requestData: GroupModels.GetCustomDataRequestData, onResponse: Action1<GroupResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCustomDataOperationResponse);
	}

	public async getCustomDataAsync(requestData: GroupModels.GetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCustomDataOperationResponse);
	}

	public getDisplayName(requestData: GroupModels.GetDisplayNameRequestData, onResponse: Action1<GroupResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetDisplayNameOperationResponse);
	}

	public async getDisplayNameAsync(requestData: GroupModels.GetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetDisplayNameOperationResponse);
	}

	public getGroupCurrency(requestData: GroupModels.GetGroupCurrencyRequestData, onResponse: Action1<GroupResponseModels.GetGroupCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetGroupCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupCurrencyOperationResponse);
	}

	public async getGroupCurrencyAsync(requestData: GroupModels.GetGroupCurrencyRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupCurrencyOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetGroupCurrencyOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupCurrencyOperationResponse);
	}

	public getGroupData(requestData: GroupModels.GetGroupDataRequestData, onResponse: Action1<GroupResponseModels.GetGroupDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetGroupDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupDataOperationResponse);
	}

	public async getGroupDataAsync(requestData: GroupModels.GetGroupDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetGroupDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupDataOperationResponse);
	}

	public getGroupInformation(requestData: GroupModels.GetGroupInformationRequestData, onResponse: Action1<GroupResponseModels.GetGroupInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetGroupInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupInformationOperationResponse);
	}

	public async getGroupInformationAsync(requestData: GroupModels.GetGroupInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetGroupInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupInformationOperationResponse);
	}

	public getGroupInventory(requestData: GroupModels.GetGroupInventoryRequestData, onResponse: Action1<GroupResponseModels.GetGroupInventoryOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetGroupInventoryOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupInventoryOperationResponse);
	}

	public async getGroupInventoryAsync(requestData: GroupModels.GetGroupInventoryRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupInventoryOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetGroupInventoryOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupInventoryOperationResponse);
	}

	public getGroupMessage(requestData: GroupModels.GetGroupMessageRequestData, onResponse: Action1<GroupResponseModels.GetGroupMessageOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetGroupMessageOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupMessageOperationResponse);
	}

	public async getGroupMessageAsync(requestData: GroupModels.GetGroupMessageRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupMessageOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetGroupMessageOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupMessageOperationResponse);
	}

	public getGroupStatistics(requestData: GroupModels.GetGroupStatisticsRequestData, onResponse: Action1<GroupResponseModels.GetGroupStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetGroupStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupStatisticsOperationResponse);
	}

	public async getGroupStatisticsAsync(requestData: GroupModels.GetGroupStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetGroupStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupStatisticsOperationResponse);
	}

	public getGroupsWithDisplayName(requestData: GroupModels.GetGroupsWithDisplayNameRequestData, onResponse: Action1<GroupResponseModels.GetGroupsWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetGroupsWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithDisplayNameOperationResponse);
	}

	public async getGroupsWithDisplayNameAsync(requestData: GroupModels.GetGroupsWithDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupsWithDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetGroupsWithDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithDisplayNameOperationResponse);
	}

	public getGroupsWithSegment(requestData: GroupModels.GetGroupsWithSegmentRequestData, onResponse: Action1<GroupResponseModels.GetGroupsWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetGroupsWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithSegmentOperationResponse);
	}

	public async getGroupsWithSegmentAsync(requestData: GroupModels.GetGroupsWithSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupsWithSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetGroupsWithSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithSegmentOperationResponse);
	}

	public getGroupsWithTag(requestData: GroupModels.GetGroupsWithTagRequestData, onResponse: Action1<GroupResponseModels.GetGroupsWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetGroupsWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithTagOperationResponse);
	}

	public async getGroupsWithTagAsync(requestData: GroupModels.GetGroupsWithTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupsWithTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetGroupsWithTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithTagOperationResponse);
	}

	public getMembers(requestData: GroupModels.GetMembersRequestData, onResponse: Action1<GroupResponseModels.GetMembersOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetMembersOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetMembersOperationResponse);
	}

	public async getMembersAsync(requestData: GroupModels.GetMembersRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetMembersOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetMembersOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetMembersOperationResponse);
	}

	public getRemoveStatus(requestData: GroupModels.GetRemoveStatusRequestData, onResponse: Action1<GroupResponseModels.GetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetRemoveStatusOperationResponse);
	}

	public async getRemoveStatusAsync(requestData: GroupModels.GetRemoveStatusRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetRemoveStatusOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetRemoveStatusOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetRemoveStatusOperationResponse);
	}

	public getSegment(requestData: GroupModels.GetSegmentRequestData, onResponse: Action1<GroupResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetSegmentOperationResponse);
	}

	public async getSegmentAsync(requestData: GroupModels.GetSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetSegmentOperationResponse);
	}

	public getStatisticsLeaderboardAroundGroup(requestData: GroupModels.GetStatisticsLeaderboardAroundGroupRequestData, onResponse: Action1<GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetStatisticsLeaderboardAroundGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse);
	}

	public async getStatisticsLeaderboardAroundGroupAsync(requestData: GroupModels.GetStatisticsLeaderboardAroundGroupRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetStatisticsLeaderboardAroundGroupOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse);
	}

	public getStatisticsLeaderboard(requestData: GroupModels.GetStatisticsLeaderboardRequestData, onResponse: Action1<GroupResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public async getStatisticsLeaderboardAsync(requestData: GroupModels.GetStatisticsLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetStatisticsLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetStatisticsLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public getTag(requestData: GroupModels.GetTagRequestData, onResponse: Action1<GroupResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetTagOperationResponse);
	}

	public async getTagAsync(requestData: GroupModels.GetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetTagOperationResponse);
	}

	public getTsCreate(requestData: GroupModels.GetTsCreateRequestData, onResponse: Action1<GroupResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetTsCreateOperationResponse);
	}

	public async getTsCreateAsync(requestData: GroupModels.GetTsCreateRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetTsCreateOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetTsCreateOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetTsCreateOperationResponse);
	}

	public createGroupItem(requestData: GroupModels.CreateGroupItemRequestData, onResponse: Action1<GroupResponseModels.CreateGroupItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.CreateGroupItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.CreateGroupItemOperationResponse);
	}

	public async createGroupItemAsync(requestData: GroupModels.CreateGroupItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.CreateGroupItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.CreateGroupItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.CreateGroupItemOperationResponse);
	}

	public removeGroupItem(requestData: GroupModels.RemoveGroupItemRequestData, onResponse: Action1<GroupResponseModels.RemoveGroupItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.RemoveGroupItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveGroupItemOperationResponse);
	}

	public async removeGroupItemAsync(requestData: GroupModels.RemoveGroupItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.RemoveGroupItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.RemoveGroupItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveGroupItemOperationResponse);
	}

	public removeMember(requestData: GroupModels.RemoveMemberRequestData, onResponse: Action1<GroupResponseModels.RemoveMemberOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.RemoveMemberOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveMemberOperationResponse);
	}

	public async removeMemberAsync(requestData: GroupModels.RemoveMemberRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.RemoveMemberOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.RemoveMemberOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveMemberOperationResponse);
	}

	public removeSegment(requestData: GroupModels.RemoveSegmentRequestData, onResponse: Action1<GroupResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.RemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveSegmentOperationResponse);
	}

	public async removeSegmentAsync(requestData: GroupModels.RemoveSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.RemoveSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.RemoveSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveSegmentOperationResponse);
	}

	public removeTag(requestData: GroupModels.RemoveTagRequestData, onResponse: Action1<GroupResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.RemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveTagOperationResponse);
	}

	public async removeTagAsync(requestData: GroupModels.RemoveTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.RemoveTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.RemoveTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveTagOperationResponse);
	}

	public sendGroupMessage(requestData: GroupModels.SendGroupMessageRequestData, onResponse: Action1<GroupResponseModels.SendGroupMessageOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.SendGroupMessageOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SendGroupMessageOperationResponse);
	}

	public async sendGroupMessageAsync(requestData: GroupModels.SendGroupMessageRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SendGroupMessageOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.SendGroupMessageOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SendGroupMessageOperationResponse);
	}

	public setAvatar(requestData: GroupModels.SetAvatarRequestData, onResponse: Action1<GroupResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.SetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetAvatarOperationResponse);
	}

	public async setAvatarAsync(requestData: GroupModels.SetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.SetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetAvatarOperationResponse);
	}

	public setCustomData(requestData: GroupModels.SetCustomDataRequestData, onResponse: Action1<GroupResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.SetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetCustomDataOperationResponse);
	}

	public async setCustomDataAsync(requestData: GroupModels.SetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.SetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetCustomDataOperationResponse);
	}

	public setDisplayName(requestData: GroupModels.SetDisplayNameRequestData, onResponse: Action1<GroupResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.SetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetDisplayNameOperationResponse);
	}

	public async setDisplayNameAsync(requestData: GroupModels.SetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.SetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetDisplayNameOperationResponse);
	}

	public changeGroupCurrency(requestData: GroupModels.ChangeGroupCurrencyRequestData, onResponse: Action1<GroupResponseModels.ChangeGroupCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ChangeGroupCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.ChangeGroupCurrencyOperationResponse);
	}

	public async changeGroupCurrencyAsync(requestData: GroupModels.ChangeGroupCurrencyRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.ChangeGroupCurrencyOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ChangeGroupCurrencyOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.ChangeGroupCurrencyOperationResponse);
	}

	public setGroupData(requestData: GroupModels.SetGroupDataRequestData, onResponse: Action1<GroupResponseModels.SetGroupDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.SetGroupDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetGroupDataOperationResponse);
	}

	public async setGroupDataAsync(requestData: GroupModels.SetGroupDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetGroupDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.SetGroupDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetGroupDataOperationResponse);
	}

	public changeGroupStatistics(requestData: GroupModels.ChangeGroupStatisticsRequestData, onResponse: Action1<GroupResponseModels.ChangeGroupStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ChangeGroupStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.ChangeGroupStatisticsOperationResponse);
	}

	public async changeGroupStatisticsAsync(requestData: GroupModels.ChangeGroupStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.ChangeGroupStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ChangeGroupStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.ChangeGroupStatisticsOperationResponse);
	}

	public setRemoveStatus(requestData: GroupModels.SetRemoveStatusRequestData, onResponse: Action1<GroupResponseModels.SetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.SetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetRemoveStatusOperationResponse);
	}

	public async setRemoveStatusAsync(requestData: GroupModels.SetRemoveStatusRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetRemoveStatusOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.SetRemoveStatusOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetRemoveStatusOperationResponse);
	}

	public setTag(requestData: GroupModels.SetTagRequestData, onResponse: Action1<GroupResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.SetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetTagOperationResponse);
	}

	public async setTagAsync(requestData: GroupModels.SetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.SetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetTagOperationResponse);
	}

	public getCurrencyLeaderboard(requestData: GroupModels.GetCurrencyLeaderboardRequestData, onResponse: Action1<GroupResponseModels.GetCurrencyLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetCurrencyLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCurrencyLeaderboardOperationResponse);
	}

	public async getCurrencyLeaderboardAsync(requestData: GroupModels.GetCurrencyLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetCurrencyLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetCurrencyLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCurrencyLeaderboardOperationResponse);
	}

	public getCreateLeaderboard(requestData: GroupModels.GetCreateLeaderboardRequestData, onResponse: Action1<GroupResponseModels.GetCreateLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetCreateLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCreateLeaderboardOperationResponse);
	}

	public async getCreateLeaderboardAsync(requestData: GroupModels.GetCreateLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetCreateLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetCreateLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCreateLeaderboardOperationResponse);
	}

	public getStatisticsLog(requestData: GroupModels.GetStatisticsLogRequestData, onResponse: Action1<GroupResponseModels.GetStatisticsLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetStatisticsLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLogOperationResponse);
	}

	public async getStatisticsLogAsync(requestData: GroupModels.GetStatisticsLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetStatisticsLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetStatisticsLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLogOperationResponse);
	}

	public getCurrencyLog(requestData: GroupModels.GetCurrencyLogRequestData, onResponse: Action1<GroupResponseModels.GetCurrencyLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetCurrencyLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCurrencyLogOperationResponse);
	}

	public async getCurrencyLogAsync(requestData: GroupModels.GetCurrencyLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetCurrencyLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.GetCurrencyLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCurrencyLogOperationResponse);
	}

}

export class ServerGroupApi {
	public addMember(requestData: GroupModels.ServerAddMemberRequestData, onResponse: Action1<GroupResponseModels.AddMemberOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerAddMemberOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.AddMemberOperationResponse);
	}

	public async addMemberAsync(requestData: GroupModels.ServerAddMemberRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.AddMemberOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerAddMemberOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.AddMemberOperationResponse);
	}

	public addSegment(requestData: GroupModels.ServerAddSegmentRequestData, onResponse: Action1<GroupResponseModels.AddSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerAddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.AddSegmentOperationResponse);
	}

	public async addSegmentAsync(requestData: GroupModels.ServerAddSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.AddSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerAddSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.AddSegmentOperationResponse);
	}

	public getAvatar(requestData: GroupModels.ServerGetAvatarRequestData, onResponse: Action1<GroupResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetAvatarOperationResponse);
	}

	public async getAvatarAsync(requestData: GroupModels.ServerGetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetAvatarOperationResponse);
	}

	public getCatalogId(requestData: GroupModels.ServerGetCatalogIdRequestData, onResponse: Action1<GroupResponseModels.GetCatalogIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetCatalogIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCatalogIdOperationResponse);
	}

	public async getCatalogIdAsync(requestData: GroupModels.ServerGetCatalogIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetCatalogIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetCatalogIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCatalogIdOperationResponse);
	}

	public getCustomData(requestData: GroupModels.ServerGetCustomDataRequestData, onResponse: Action1<GroupResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCustomDataOperationResponse);
	}

	public async getCustomDataAsync(requestData: GroupModels.ServerGetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCustomDataOperationResponse);
	}

	public getDisplayName(requestData: GroupModels.ServerGetDisplayNameRequestData, onResponse: Action1<GroupResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetDisplayNameOperationResponse);
	}

	public async getDisplayNameAsync(requestData: GroupModels.ServerGetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetDisplayNameOperationResponse);
	}

	public getGroupCurrency(requestData: GroupModels.ServerGetGroupCurrencyRequestData, onResponse: Action1<GroupResponseModels.GetGroupCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetGroupCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupCurrencyOperationResponse);
	}

	public async getGroupCurrencyAsync(requestData: GroupModels.ServerGetGroupCurrencyRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupCurrencyOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetGroupCurrencyOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupCurrencyOperationResponse);
	}

	public getGroupData(requestData: GroupModels.ServerGetGroupDataRequestData, onResponse: Action1<GroupResponseModels.GetGroupDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetGroupDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupDataOperationResponse);
	}

	public async getGroupDataAsync(requestData: GroupModels.ServerGetGroupDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetGroupDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupDataOperationResponse);
	}

	public getGroupInformation(requestData: GroupModels.ServerGetGroupInformationRequestData, onResponse: Action1<GroupResponseModels.GetGroupInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetGroupInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupInformationOperationResponse);
	}

	public async getGroupInformationAsync(requestData: GroupModels.ServerGetGroupInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetGroupInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupInformationOperationResponse);
	}

	public getGroupInventory(requestData: GroupModels.ServerGetGroupInventoryRequestData, onResponse: Action1<GroupResponseModels.GetGroupInventoryOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetGroupInventoryOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupInventoryOperationResponse);
	}

	public async getGroupInventoryAsync(requestData: GroupModels.ServerGetGroupInventoryRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupInventoryOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetGroupInventoryOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupInventoryOperationResponse);
	}

	public getGroupMessage(requestData: GroupModels.ServerGetGroupMessageRequestData, onResponse: Action1<GroupResponseModels.GetGroupMessageOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetGroupMessageOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupMessageOperationResponse);
	}

	public async getGroupMessageAsync(requestData: GroupModels.ServerGetGroupMessageRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupMessageOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetGroupMessageOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupMessageOperationResponse);
	}

	public getGroupStatistics(requestData: GroupModels.ServerGetGroupStatisticsRequestData, onResponse: Action1<GroupResponseModels.GetGroupStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetGroupStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupStatisticsOperationResponse);
	}

	public async getGroupStatisticsAsync(requestData: GroupModels.ServerGetGroupStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetGroupStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupStatisticsOperationResponse);
	}

	public getGroupsWithDisplayName(requestData: GroupModels.ServerGetGroupsWithDisplayNameRequestData, onResponse: Action1<GroupResponseModels.GetGroupsWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetGroupsWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithDisplayNameOperationResponse);
	}

	public async getGroupsWithDisplayNameAsync(requestData: GroupModels.ServerGetGroupsWithDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupsWithDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetGroupsWithDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithDisplayNameOperationResponse);
	}

	public getGroupsWithSegment(requestData: GroupModels.ServerGetGroupsWithSegmentRequestData, onResponse: Action1<GroupResponseModels.GetGroupsWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetGroupsWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithSegmentOperationResponse);
	}

	public async getGroupsWithSegmentAsync(requestData: GroupModels.ServerGetGroupsWithSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupsWithSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetGroupsWithSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithSegmentOperationResponse);
	}

	public getGroupsWithTag(requestData: GroupModels.ServerGetGroupsWithTagRequestData, onResponse: Action1<GroupResponseModels.GetGroupsWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetGroupsWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithTagOperationResponse);
	}

	public async getGroupsWithTagAsync(requestData: GroupModels.ServerGetGroupsWithTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupsWithTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetGroupsWithTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithTagOperationResponse);
	}

	public getMembers(requestData: GroupModels.ServerGetMembersRequestData, onResponse: Action1<GroupResponseModels.GetMembersOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetMembersOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetMembersOperationResponse);
	}

	public async getMembersAsync(requestData: GroupModels.ServerGetMembersRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetMembersOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetMembersOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetMembersOperationResponse);
	}

	public getRemoveStatus(requestData: GroupModels.ServerGetRemoveStatusRequestData, onResponse: Action1<GroupResponseModels.GetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetRemoveStatusOperationResponse);
	}

	public async getRemoveStatusAsync(requestData: GroupModels.ServerGetRemoveStatusRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetRemoveStatusOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetRemoveStatusOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetRemoveStatusOperationResponse);
	}

	public getSegment(requestData: GroupModels.ServerGetSegmentRequestData, onResponse: Action1<GroupResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetSegmentOperationResponse);
	}

	public async getSegmentAsync(requestData: GroupModels.ServerGetSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetSegmentOperationResponse);
	}

	public getStatisticsLeaderboardAroundGroup(requestData: GroupModels.ServerGetStatisticsLeaderboardAroundGroupRequestData, onResponse: Action1<GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetStatisticsLeaderboardAroundGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse);
	}

	public async getStatisticsLeaderboardAroundGroupAsync(requestData: GroupModels.ServerGetStatisticsLeaderboardAroundGroupRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetStatisticsLeaderboardAroundGroupOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse);
	}

	public getStatisticsLeaderboard(requestData: GroupModels.ServerGetStatisticsLeaderboardRequestData, onResponse: Action1<GroupResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public async getStatisticsLeaderboardAsync(requestData: GroupModels.ServerGetStatisticsLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetStatisticsLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetStatisticsLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public getTag(requestData: GroupModels.ServerGetTagRequestData, onResponse: Action1<GroupResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetTagOperationResponse);
	}

	public async getTagAsync(requestData: GroupModels.ServerGetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetTagOperationResponse);
	}

	public getTsCreate(requestData: GroupModels.ServerGetTsCreateRequestData, onResponse: Action1<GroupResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetTsCreateOperationResponse);
	}

	public async getTsCreateAsync(requestData: GroupModels.ServerGetTsCreateRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetTsCreateOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetTsCreateOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetTsCreateOperationResponse);
	}

	public createGroupItem(requestData: GroupModels.ServerCreateGroupItemRequestData, onResponse: Action1<GroupResponseModels.CreateGroupItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerCreateGroupItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.CreateGroupItemOperationResponse);
	}

	public async createGroupItemAsync(requestData: GroupModels.ServerCreateGroupItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.CreateGroupItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerCreateGroupItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.CreateGroupItemOperationResponse);
	}

	public removeGroupItem(requestData: GroupModels.ServerRemoveGroupItemRequestData, onResponse: Action1<GroupResponseModels.RemoveGroupItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerRemoveGroupItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveGroupItemOperationResponse);
	}

	public async removeGroupItemAsync(requestData: GroupModels.ServerRemoveGroupItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.RemoveGroupItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerRemoveGroupItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveGroupItemOperationResponse);
	}

	public removeMember(requestData: GroupModels.ServerRemoveMemberRequestData, onResponse: Action1<GroupResponseModels.RemoveMemberOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerRemoveMemberOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveMemberOperationResponse);
	}

	public async removeMemberAsync(requestData: GroupModels.ServerRemoveMemberRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.RemoveMemberOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerRemoveMemberOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveMemberOperationResponse);
	}

	public removeSegment(requestData: GroupModels.ServerRemoveSegmentRequestData, onResponse: Action1<GroupResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerRemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveSegmentOperationResponse);
	}

	public async removeSegmentAsync(requestData: GroupModels.ServerRemoveSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.RemoveSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerRemoveSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveSegmentOperationResponse);
	}

	public removeTag(requestData: GroupModels.ServerRemoveTagRequestData, onResponse: Action1<GroupResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerRemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveTagOperationResponse);
	}

	public async removeTagAsync(requestData: GroupModels.ServerRemoveTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.RemoveTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerRemoveTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveTagOperationResponse);
	}

	public sendGroupMessage(requestData: GroupModels.ServerSendGroupMessageRequestData, onResponse: Action1<GroupResponseModels.SendGroupMessageOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerSendGroupMessageOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SendGroupMessageOperationResponse);
	}

	public async sendGroupMessageAsync(requestData: GroupModels.ServerSendGroupMessageRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SendGroupMessageOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerSendGroupMessageOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SendGroupMessageOperationResponse);
	}

	public setAvatar(requestData: GroupModels.ServerSetAvatarRequestData, onResponse: Action1<GroupResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerSetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetAvatarOperationResponse);
	}

	public async setAvatarAsync(requestData: GroupModels.ServerSetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerSetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetAvatarOperationResponse);
	}

	public setCustomData(requestData: GroupModels.ServerSetCustomDataRequestData, onResponse: Action1<GroupResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerSetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetCustomDataOperationResponse);
	}

	public async setCustomDataAsync(requestData: GroupModels.ServerSetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerSetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetCustomDataOperationResponse);
	}

	public setDisplayName(requestData: GroupModels.ServerSetDisplayNameRequestData, onResponse: Action1<GroupResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerSetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetDisplayNameOperationResponse);
	}

	public async setDisplayNameAsync(requestData: GroupModels.ServerSetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerSetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetDisplayNameOperationResponse);
	}

	public changeGroupCurrency(requestData: GroupModels.ServerChangeGroupCurrencyRequestData, onResponse: Action1<GroupResponseModels.ChangeGroupCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerChangeGroupCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.ChangeGroupCurrencyOperationResponse);
	}

	public async changeGroupCurrencyAsync(requestData: GroupModels.ServerChangeGroupCurrencyRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.ChangeGroupCurrencyOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerChangeGroupCurrencyOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.ChangeGroupCurrencyOperationResponse);
	}

	public setGroupData(requestData: GroupModels.ServerSetGroupDataRequestData, onResponse: Action1<GroupResponseModels.SetGroupDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerSetGroupDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetGroupDataOperationResponse);
	}

	public async setGroupDataAsync(requestData: GroupModels.ServerSetGroupDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetGroupDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerSetGroupDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetGroupDataOperationResponse);
	}

	public changeGroupStatistics(requestData: GroupModels.ServerChangeGroupStatisticsRequestData, onResponse: Action1<GroupResponseModels.ChangeGroupStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerChangeGroupStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.ChangeGroupStatisticsOperationResponse);
	}

	public async changeGroupStatisticsAsync(requestData: GroupModels.ServerChangeGroupStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.ChangeGroupStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerChangeGroupStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.ChangeGroupStatisticsOperationResponse);
	}

	public setRemoveStatus(requestData: GroupModels.ServerSetRemoveStatusRequestData, onResponse: Action1<GroupResponseModels.SetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerSetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetRemoveStatusOperationResponse);
	}

	public async setRemoveStatusAsync(requestData: GroupModels.ServerSetRemoveStatusRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetRemoveStatusOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerSetRemoveStatusOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetRemoveStatusOperationResponse);
	}

	public setTag(requestData: GroupModels.ServerSetTagRequestData, onResponse: Action1<GroupResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerSetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetTagOperationResponse);
	}

	public async setTagAsync(requestData: GroupModels.ServerSetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerSetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetTagOperationResponse);
	}

	public getCurrencyLeaderboard(requestData: GroupModels.ServerGetCurrencyLeaderboardRequestData, onResponse: Action1<GroupResponseModels.GetCurrencyLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetCurrencyLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCurrencyLeaderboardOperationResponse);
	}

	public async getCurrencyLeaderboardAsync(requestData: GroupModels.ServerGetCurrencyLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetCurrencyLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetCurrencyLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCurrencyLeaderboardOperationResponse);
	}

	public getCreateLeaderboard(requestData: GroupModels.ServerGetCreateLeaderboardRequestData, onResponse: Action1<GroupResponseModels.GetCreateLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetCreateLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCreateLeaderboardOperationResponse);
	}

	public async getCreateLeaderboardAsync(requestData: GroupModels.ServerGetCreateLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetCreateLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetCreateLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCreateLeaderboardOperationResponse);
	}

	public getStatisticsLog(requestData: GroupModels.ServerGetStatisticsLogRequestData, onResponse: Action1<GroupResponseModels.GetStatisticsLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetStatisticsLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLogOperationResponse);
	}

	public async getStatisticsLogAsync(requestData: GroupModels.ServerGetStatisticsLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetStatisticsLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetStatisticsLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLogOperationResponse);
	}

	public getCurrencyLog(requestData: GroupModels.ServerGetCurrencyLogRequestData, onResponse: Action1<GroupResponseModels.GetCurrencyLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetCurrencyLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCurrencyLogOperationResponse);
	}

	public async getCurrencyLogAsync(requestData: GroupModels.ServerGetCurrencyLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetCurrencyLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.ServerGetCurrencyLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCurrencyLogOperationResponse);
	}

}

export class AdminGroupApi {
	public addMember(requestData: GroupModels.AdminAddMemberRequestData, onResponse: Action1<GroupResponseModels.AddMemberOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminAddMemberOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.AddMemberOperationResponse);
	}

	public async addMemberAsync(requestData: GroupModels.AdminAddMemberRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.AddMemberOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminAddMemberOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.AddMemberOperationResponse);
	}

	public addSegment(requestData: GroupModels.AdminAddSegmentRequestData, onResponse: Action1<GroupResponseModels.AddSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminAddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.AddSegmentOperationResponse);
	}

	public async addSegmentAsync(requestData: GroupModels.AdminAddSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.AddSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminAddSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.AddSegmentOperationResponse);
	}

	public getAvatar(requestData: GroupModels.AdminGetAvatarRequestData, onResponse: Action1<GroupResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetAvatarOperationResponse);
	}

	public async getAvatarAsync(requestData: GroupModels.AdminGetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetAvatarOperationResponse);
	}

	public getCatalogId(requestData: GroupModels.AdminGetCatalogIdRequestData, onResponse: Action1<GroupResponseModels.GetCatalogIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetCatalogIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCatalogIdOperationResponse);
	}

	public async getCatalogIdAsync(requestData: GroupModels.AdminGetCatalogIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetCatalogIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetCatalogIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCatalogIdOperationResponse);
	}

	public getCustomData(requestData: GroupModels.AdminGetCustomDataRequestData, onResponse: Action1<GroupResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCustomDataOperationResponse);
	}

	public async getCustomDataAsync(requestData: GroupModels.AdminGetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCustomDataOperationResponse);
	}

	public getDisplayName(requestData: GroupModels.AdminGetDisplayNameRequestData, onResponse: Action1<GroupResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetDisplayNameOperationResponse);
	}

	public async getDisplayNameAsync(requestData: GroupModels.AdminGetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetDisplayNameOperationResponse);
	}

	public getGroupCurrency(requestData: GroupModels.AdminGetGroupCurrencyRequestData, onResponse: Action1<GroupResponseModels.GetGroupCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetGroupCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupCurrencyOperationResponse);
	}

	public async getGroupCurrencyAsync(requestData: GroupModels.AdminGetGroupCurrencyRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupCurrencyOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetGroupCurrencyOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupCurrencyOperationResponse);
	}

	public getGroupData(requestData: GroupModels.AdminGetGroupDataRequestData, onResponse: Action1<GroupResponseModels.GetGroupDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetGroupDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupDataOperationResponse);
	}

	public async getGroupDataAsync(requestData: GroupModels.AdminGetGroupDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetGroupDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupDataOperationResponse);
	}

	public getGroupInformation(requestData: GroupModels.AdminGetGroupInformationRequestData, onResponse: Action1<GroupResponseModels.GetGroupInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetGroupInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupInformationOperationResponse);
	}

	public async getGroupInformationAsync(requestData: GroupModels.AdminGetGroupInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetGroupInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupInformationOperationResponse);
	}

	public getGroupInventory(requestData: GroupModels.AdminGetGroupInventoryRequestData, onResponse: Action1<GroupResponseModels.GetGroupInventoryOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetGroupInventoryOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupInventoryOperationResponse);
	}

	public async getGroupInventoryAsync(requestData: GroupModels.AdminGetGroupInventoryRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupInventoryOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetGroupInventoryOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupInventoryOperationResponse);
	}

	public getGroupMessage(requestData: GroupModels.AdminGetGroupMessageRequestData, onResponse: Action1<GroupResponseModels.GetGroupMessageOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetGroupMessageOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupMessageOperationResponse);
	}

	public async getGroupMessageAsync(requestData: GroupModels.AdminGetGroupMessageRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupMessageOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetGroupMessageOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupMessageOperationResponse);
	}

	public getGroupStatistics(requestData: GroupModels.AdminGetGroupStatisticsRequestData, onResponse: Action1<GroupResponseModels.GetGroupStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetGroupStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupStatisticsOperationResponse);
	}

	public async getGroupStatisticsAsync(requestData: GroupModels.AdminGetGroupStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetGroupStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupStatisticsOperationResponse);
	}

	public getGroupsWithDisplayName(requestData: GroupModels.AdminGetGroupsWithDisplayNameRequestData, onResponse: Action1<GroupResponseModels.GetGroupsWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetGroupsWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithDisplayNameOperationResponse);
	}

	public async getGroupsWithDisplayNameAsync(requestData: GroupModels.AdminGetGroupsWithDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupsWithDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetGroupsWithDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithDisplayNameOperationResponse);
	}

	public getGroupsWithSegment(requestData: GroupModels.AdminGetGroupsWithSegmentRequestData, onResponse: Action1<GroupResponseModels.GetGroupsWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetGroupsWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithSegmentOperationResponse);
	}

	public async getGroupsWithSegmentAsync(requestData: GroupModels.AdminGetGroupsWithSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupsWithSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetGroupsWithSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithSegmentOperationResponse);
	}

	public getGroupsWithTag(requestData: GroupModels.AdminGetGroupsWithTagRequestData, onResponse: Action1<GroupResponseModels.GetGroupsWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetGroupsWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithTagOperationResponse);
	}

	public async getGroupsWithTagAsync(requestData: GroupModels.AdminGetGroupsWithTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetGroupsWithTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetGroupsWithTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithTagOperationResponse);
	}

	public getMembers(requestData: GroupModels.AdminGetMembersRequestData, onResponse: Action1<GroupResponseModels.GetMembersOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetMembersOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetMembersOperationResponse);
	}

	public async getMembersAsync(requestData: GroupModels.AdminGetMembersRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetMembersOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetMembersOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetMembersOperationResponse);
	}

	public getRemoveStatus(requestData: GroupModels.AdminGetRemoveStatusRequestData, onResponse: Action1<GroupResponseModels.GetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetRemoveStatusOperationResponse);
	}

	public async getRemoveStatusAsync(requestData: GroupModels.AdminGetRemoveStatusRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetRemoveStatusOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetRemoveStatusOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetRemoveStatusOperationResponse);
	}

	public getSegment(requestData: GroupModels.AdminGetSegmentRequestData, onResponse: Action1<GroupResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetSegmentOperationResponse);
	}

	public async getSegmentAsync(requestData: GroupModels.AdminGetSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetSegmentOperationResponse);
	}

	public getStatisticsLeaderboardAroundGroup(requestData: GroupModels.AdminGetStatisticsLeaderboardAroundGroupRequestData, onResponse: Action1<GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetStatisticsLeaderboardAroundGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse);
	}

	public async getStatisticsLeaderboardAroundGroupAsync(requestData: GroupModels.AdminGetStatisticsLeaderboardAroundGroupRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetStatisticsLeaderboardAroundGroupOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse);
	}

	public getStatisticsLeaderboard(requestData: GroupModels.AdminGetStatisticsLeaderboardRequestData, onResponse: Action1<GroupResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public async getStatisticsLeaderboardAsync(requestData: GroupModels.AdminGetStatisticsLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetStatisticsLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetStatisticsLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public getTag(requestData: GroupModels.AdminGetTagRequestData, onResponse: Action1<GroupResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetTagOperationResponse);
	}

	public async getTagAsync(requestData: GroupModels.AdminGetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetTagOperationResponse);
	}

	public getTsCreate(requestData: GroupModels.AdminGetTsCreateRequestData, onResponse: Action1<GroupResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetTsCreateOperationResponse);
	}

	public async getTsCreateAsync(requestData: GroupModels.AdminGetTsCreateRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetTsCreateOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetTsCreateOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetTsCreateOperationResponse);
	}

	public createGroupItem(requestData: GroupModels.AdminCreateGroupItemRequestData, onResponse: Action1<GroupResponseModels.CreateGroupItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminCreateGroupItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.CreateGroupItemOperationResponse);
	}

	public async createGroupItemAsync(requestData: GroupModels.AdminCreateGroupItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.CreateGroupItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminCreateGroupItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.CreateGroupItemOperationResponse);
	}

	public removeGroupItem(requestData: GroupModels.AdminRemoveGroupItemRequestData, onResponse: Action1<GroupResponseModels.RemoveGroupItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminRemoveGroupItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveGroupItemOperationResponse);
	}

	public async removeGroupItemAsync(requestData: GroupModels.AdminRemoveGroupItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.RemoveGroupItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminRemoveGroupItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveGroupItemOperationResponse);
	}

	public removeMember(requestData: GroupModels.AdminRemoveMemberRequestData, onResponse: Action1<GroupResponseModels.RemoveMemberOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminRemoveMemberOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveMemberOperationResponse);
	}

	public async removeMemberAsync(requestData: GroupModels.AdminRemoveMemberRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.RemoveMemberOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminRemoveMemberOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveMemberOperationResponse);
	}

	public removeSegment(requestData: GroupModels.AdminRemoveSegmentRequestData, onResponse: Action1<GroupResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminRemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveSegmentOperationResponse);
	}

	public async removeSegmentAsync(requestData: GroupModels.AdminRemoveSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.RemoveSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminRemoveSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveSegmentOperationResponse);
	}

	public removeTag(requestData: GroupModels.AdminRemoveTagRequestData, onResponse: Action1<GroupResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminRemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveTagOperationResponse);
	}

	public async removeTagAsync(requestData: GroupModels.AdminRemoveTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.RemoveTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminRemoveTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveTagOperationResponse);
	}

	public sendGroupMessage(requestData: GroupModels.AdminSendGroupMessageRequestData, onResponse: Action1<GroupResponseModels.SendGroupMessageOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminSendGroupMessageOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SendGroupMessageOperationResponse);
	}

	public async sendGroupMessageAsync(requestData: GroupModels.AdminSendGroupMessageRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SendGroupMessageOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminSendGroupMessageOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SendGroupMessageOperationResponse);
	}

	public setAvatar(requestData: GroupModels.AdminSetAvatarRequestData, onResponse: Action1<GroupResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminSetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetAvatarOperationResponse);
	}

	public async setAvatarAsync(requestData: GroupModels.AdminSetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminSetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetAvatarOperationResponse);
	}

	public setCustomData(requestData: GroupModels.AdminSetCustomDataRequestData, onResponse: Action1<GroupResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminSetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetCustomDataOperationResponse);
	}

	public async setCustomDataAsync(requestData: GroupModels.AdminSetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminSetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetCustomDataOperationResponse);
	}

	public setDisplayName(requestData: GroupModels.AdminSetDisplayNameRequestData, onResponse: Action1<GroupResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminSetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetDisplayNameOperationResponse);
	}

	public async setDisplayNameAsync(requestData: GroupModels.AdminSetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminSetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetDisplayNameOperationResponse);
	}

	public changeGroupCurrency(requestData: GroupModels.AdminChangeGroupCurrencyRequestData, onResponse: Action1<GroupResponseModels.ChangeGroupCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminChangeGroupCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.ChangeGroupCurrencyOperationResponse);
	}

	public async changeGroupCurrencyAsync(requestData: GroupModels.AdminChangeGroupCurrencyRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.ChangeGroupCurrencyOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminChangeGroupCurrencyOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.ChangeGroupCurrencyOperationResponse);
	}

	public setGroupData(requestData: GroupModels.AdminSetGroupDataRequestData, onResponse: Action1<GroupResponseModels.SetGroupDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminSetGroupDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetGroupDataOperationResponse);
	}

	public async setGroupDataAsync(requestData: GroupModels.AdminSetGroupDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetGroupDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminSetGroupDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetGroupDataOperationResponse);
	}

	public changeGroupStatistics(requestData: GroupModels.AdminChangeGroupStatisticsRequestData, onResponse: Action1<GroupResponseModels.ChangeGroupStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminChangeGroupStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.ChangeGroupStatisticsOperationResponse);
	}

	public async changeGroupStatisticsAsync(requestData: GroupModels.AdminChangeGroupStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.ChangeGroupStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminChangeGroupStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.ChangeGroupStatisticsOperationResponse);
	}

	public setRemoveStatus(requestData: GroupModels.AdminSetRemoveStatusRequestData, onResponse: Action1<GroupResponseModels.SetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminSetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetRemoveStatusOperationResponse);
	}

	public async setRemoveStatusAsync(requestData: GroupModels.AdminSetRemoveStatusRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetRemoveStatusOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminSetRemoveStatusOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetRemoveStatusOperationResponse);
	}

	public setTag(requestData: GroupModels.AdminSetTagRequestData, onResponse: Action1<GroupResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminSetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetTagOperationResponse);
	}

	public async setTagAsync(requestData: GroupModels.AdminSetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.SetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminSetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetTagOperationResponse);
	}

	public getCurrencyLeaderboard(requestData: GroupModels.AdminGetCurrencyLeaderboardRequestData, onResponse: Action1<GroupResponseModels.GetCurrencyLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetCurrencyLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCurrencyLeaderboardOperationResponse);
	}

	public async getCurrencyLeaderboardAsync(requestData: GroupModels.AdminGetCurrencyLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetCurrencyLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetCurrencyLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCurrencyLeaderboardOperationResponse);
	}

	public getCreateLeaderboard(requestData: GroupModels.AdminGetCreateLeaderboardRequestData, onResponse: Action1<GroupResponseModels.GetCreateLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetCreateLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCreateLeaderboardOperationResponse);
	}

	public async getCreateLeaderboardAsync(requestData: GroupModels.AdminGetCreateLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetCreateLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetCreateLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCreateLeaderboardOperationResponse);
	}

	public getStatisticsLog(requestData: GroupModels.AdminGetStatisticsLogRequestData, onResponse: Action1<GroupResponseModels.GetStatisticsLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetStatisticsLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLogOperationResponse);
	}

	public async getStatisticsLogAsync(requestData: GroupModels.AdminGetStatisticsLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetStatisticsLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetStatisticsLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLogOperationResponse);
	}

	public getCurrencyLog(requestData: GroupModels.AdminGetCurrencyLogRequestData, onResponse: Action1<GroupResponseModels.GetCurrencyLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetCurrencyLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCurrencyLogOperationResponse);
	}

	public async getCurrencyLogAsync(requestData: GroupModels.AdminGetCurrencyLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<GroupResponseModels.GetCurrencyLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new GroupRequestModels.AdminGetCurrencyLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCurrencyLogOperationResponse);
	}

}
