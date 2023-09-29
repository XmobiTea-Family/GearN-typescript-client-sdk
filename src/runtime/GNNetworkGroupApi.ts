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

	public addSegment(requestData: GroupModels.AddSegmentRequestData, onResponse: Action1<GroupResponseModels.AddSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.AddSegmentOperationResponse);
	}

	public getAvatar(requestData: GroupModels.GetAvatarRequestData, onResponse: Action1<GroupResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetAvatarOperationResponse);
	}

	public getCatalogId(requestData: GroupModels.GetCatalogIdRequestData, onResponse: Action1<GroupResponseModels.GetCatalogIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetCatalogIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCatalogIdOperationResponse);
	}

	public getCustomData(requestData: GroupModels.GetCustomDataRequestData, onResponse: Action1<GroupResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCustomDataOperationResponse);
	}

	public getDisplayName(requestData: GroupModels.GetDisplayNameRequestData, onResponse: Action1<GroupResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetDisplayNameOperationResponse);
	}

	public getGroupCurrency(requestData: GroupModels.GetGroupCurrencyRequestData, onResponse: Action1<GroupResponseModels.GetGroupCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetGroupCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupCurrencyOperationResponse);
	}

	public getGroupData(requestData: GroupModels.GetGroupDataRequestData, onResponse: Action1<GroupResponseModels.GetGroupDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetGroupDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupDataOperationResponse);
	}

	public getGroupInformation(requestData: GroupModels.GetGroupInformationRequestData, onResponse: Action1<GroupResponseModels.GetGroupInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetGroupInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupInformationOperationResponse);
	}

	public getGroupInventory(requestData: GroupModels.GetGroupInventoryRequestData, onResponse: Action1<GroupResponseModels.GetGroupInventoryOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetGroupInventoryOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupInventoryOperationResponse);
	}

	public getGroupMessage(requestData: GroupModels.GetGroupMessageRequestData, onResponse: Action1<GroupResponseModels.GetGroupMessageOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetGroupMessageOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupMessageOperationResponse);
	}

	public getGroupStatistics(requestData: GroupModels.GetGroupStatisticsRequestData, onResponse: Action1<GroupResponseModels.GetGroupStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetGroupStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupStatisticsOperationResponse);
	}

	public getGroupsWithDisplayName(requestData: GroupModels.GetGroupsWithDisplayNameRequestData, onResponse: Action1<GroupResponseModels.GetGroupsWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetGroupsWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithDisplayNameOperationResponse);
	}

	public getGroupsWithSegment(requestData: GroupModels.GetGroupsWithSegmentRequestData, onResponse: Action1<GroupResponseModels.GetGroupsWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetGroupsWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithSegmentOperationResponse);
	}

	public getGroupsWithTag(requestData: GroupModels.GetGroupsWithTagRequestData, onResponse: Action1<GroupResponseModels.GetGroupsWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetGroupsWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithTagOperationResponse);
	}

	public getMembers(requestData: GroupModels.GetMembersRequestData, onResponse: Action1<GroupResponseModels.GetMembersOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetMembersOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetMembersOperationResponse);
	}

	public getRemoveStatus(requestData: GroupModels.GetRemoveStatusRequestData, onResponse: Action1<GroupResponseModels.GetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetRemoveStatusOperationResponse);
	}

	public getSegment(requestData: GroupModels.GetSegmentRequestData, onResponse: Action1<GroupResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetSegmentOperationResponse);
	}

	public getStatisticsLeaderboardAroundGroup(requestData: GroupModels.GetStatisticsLeaderboardAroundGroupRequestData, onResponse: Action1<GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetStatisticsLeaderboardAroundGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse);
	}

	public getStatisticsLeaderboard(requestData: GroupModels.GetStatisticsLeaderboardRequestData, onResponse: Action1<GroupResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public getTag(requestData: GroupModels.GetTagRequestData, onResponse: Action1<GroupResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetTagOperationResponse);
	}

	public getTsCreate(requestData: GroupModels.GetTsCreateRequestData, onResponse: Action1<GroupResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetTsCreateOperationResponse);
	}

	public grantGroupItem(requestData: GroupModels.GrantGroupItemRequestData, onResponse: Action1<GroupResponseModels.GrantGroupItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.GrantGroupItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GrantGroupItemOperationResponse);
	}

	public removeGroupItem(requestData: GroupModels.RemoveGroupItemRequestData, onResponse: Action1<GroupResponseModels.RemoveGroupItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.RemoveGroupItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveGroupItemOperationResponse);
	}

	public removeMember(requestData: GroupModels.RemoveMemberRequestData, onResponse: Action1<GroupResponseModels.RemoveMemberOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.RemoveMemberOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveMemberOperationResponse);
	}

	public removeSegment(requestData: GroupModels.RemoveSegmentRequestData, onResponse: Action1<GroupResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.RemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveSegmentOperationResponse);
	}

	public removeTag(requestData: GroupModels.RemoveTagRequestData, onResponse: Action1<GroupResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.RemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveTagOperationResponse);
	}

	public sendGroupMessage(requestData: GroupModels.SendGroupMessageRequestData, onResponse: Action1<GroupResponseModels.SendGroupMessageOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.SendGroupMessageOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SendGroupMessageOperationResponse);
	}

	public setAvatar(requestData: GroupModels.SetAvatarRequestData, onResponse: Action1<GroupResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.SetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetAvatarOperationResponse);
	}

	public setCustomData(requestData: GroupModels.SetCustomDataRequestData, onResponse: Action1<GroupResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.SetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetCustomDataOperationResponse);
	}

	public setDisplayName(requestData: GroupModels.SetDisplayNameRequestData, onResponse: Action1<GroupResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.SetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetDisplayNameOperationResponse);
	}

	public setGroupCurrency(requestData: GroupModels.SetGroupCurrencyRequestData, onResponse: Action1<GroupResponseModels.SetGroupCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.SetGroupCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetGroupCurrencyOperationResponse);
	}

	public setGroupData(requestData: GroupModels.SetGroupDataRequestData, onResponse: Action1<GroupResponseModels.SetGroupDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.SetGroupDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetGroupDataOperationResponse);
	}

	public setGroupStatistics(requestData: GroupModels.SetGroupStatisticsRequestData, onResponse: Action1<GroupResponseModels.SetGroupStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.SetGroupStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetGroupStatisticsOperationResponse);
	}

	public setRemoveStatus(requestData: GroupModels.SetRemoveStatusRequestData, onResponse: Action1<GroupResponseModels.SetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.SetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetRemoveStatusOperationResponse);
	}

	public setTag(requestData: GroupModels.SetTagRequestData, onResponse: Action1<GroupResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.SetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetTagOperationResponse);
	}

}

export class ServerGroupApi {
	public addMember(requestData: GroupModels.ServerAddMemberRequestData, onResponse: Action1<GroupResponseModels.AddMemberOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerAddMemberOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.AddMemberOperationResponse);
	}

	public addSegment(requestData: GroupModels.ServerAddSegmentRequestData, onResponse: Action1<GroupResponseModels.AddSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerAddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.AddSegmentOperationResponse);
	}

	public getAvatar(requestData: GroupModels.ServerGetAvatarRequestData, onResponse: Action1<GroupResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetAvatarOperationResponse);
	}

	public getCatalogId(requestData: GroupModels.ServerGetCatalogIdRequestData, onResponse: Action1<GroupResponseModels.GetCatalogIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetCatalogIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCatalogIdOperationResponse);
	}

	public getCustomData(requestData: GroupModels.ServerGetCustomDataRequestData, onResponse: Action1<GroupResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCustomDataOperationResponse);
	}

	public getDisplayName(requestData: GroupModels.ServerGetDisplayNameRequestData, onResponse: Action1<GroupResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetDisplayNameOperationResponse);
	}

	public getGroupCurrency(requestData: GroupModels.ServerGetGroupCurrencyRequestData, onResponse: Action1<GroupResponseModels.GetGroupCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetGroupCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupCurrencyOperationResponse);
	}

	public getGroupData(requestData: GroupModels.ServerGetGroupDataRequestData, onResponse: Action1<GroupResponseModels.GetGroupDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetGroupDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupDataOperationResponse);
	}

	public getGroupInformation(requestData: GroupModels.ServerGetGroupInformationRequestData, onResponse: Action1<GroupResponseModels.GetGroupInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetGroupInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupInformationOperationResponse);
	}

	public getGroupInventory(requestData: GroupModels.ServerGetGroupInventoryRequestData, onResponse: Action1<GroupResponseModels.GetGroupInventoryOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetGroupInventoryOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupInventoryOperationResponse);
	}

	public getGroupMessage(requestData: GroupModels.ServerGetGroupMessageRequestData, onResponse: Action1<GroupResponseModels.GetGroupMessageOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetGroupMessageOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupMessageOperationResponse);
	}

	public getGroupStatistics(requestData: GroupModels.ServerGetGroupStatisticsRequestData, onResponse: Action1<GroupResponseModels.GetGroupStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetGroupStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupStatisticsOperationResponse);
	}

	public getGroupsWithDisplayName(requestData: GroupModels.ServerGetGroupsWithDisplayNameRequestData, onResponse: Action1<GroupResponseModels.GetGroupsWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetGroupsWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithDisplayNameOperationResponse);
	}

	public getGroupsWithSegment(requestData: GroupModels.ServerGetGroupsWithSegmentRequestData, onResponse: Action1<GroupResponseModels.GetGroupsWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetGroupsWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithSegmentOperationResponse);
	}

	public getGroupsWithTag(requestData: GroupModels.ServerGetGroupsWithTagRequestData, onResponse: Action1<GroupResponseModels.GetGroupsWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetGroupsWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithTagOperationResponse);
	}

	public getMembers(requestData: GroupModels.ServerGetMembersRequestData, onResponse: Action1<GroupResponseModels.GetMembersOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetMembersOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetMembersOperationResponse);
	}

	public getRemoveStatus(requestData: GroupModels.ServerGetRemoveStatusRequestData, onResponse: Action1<GroupResponseModels.GetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetRemoveStatusOperationResponse);
	}

	public getSegment(requestData: GroupModels.ServerGetSegmentRequestData, onResponse: Action1<GroupResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetSegmentOperationResponse);
	}

	public getStatisticsLeaderboardAroundGroup(requestData: GroupModels.ServerGetStatisticsLeaderboardAroundGroupRequestData, onResponse: Action1<GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetStatisticsLeaderboardAroundGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse);
	}

	public getStatisticsLeaderboard(requestData: GroupModels.ServerGetStatisticsLeaderboardRequestData, onResponse: Action1<GroupResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public getTag(requestData: GroupModels.ServerGetTagRequestData, onResponse: Action1<GroupResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetTagOperationResponse);
	}

	public getTsCreate(requestData: GroupModels.ServerGetTsCreateRequestData, onResponse: Action1<GroupResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetTsCreateOperationResponse);
	}

	public grantGroupItem(requestData: GroupModels.ServerGrantGroupItemRequestData, onResponse: Action1<GroupResponseModels.GrantGroupItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerGrantGroupItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GrantGroupItemOperationResponse);
	}

	public removeGroupItem(requestData: GroupModels.ServerRemoveGroupItemRequestData, onResponse: Action1<GroupResponseModels.RemoveGroupItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerRemoveGroupItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveGroupItemOperationResponse);
	}

	public removeMember(requestData: GroupModels.ServerRemoveMemberRequestData, onResponse: Action1<GroupResponseModels.RemoveMemberOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerRemoveMemberOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveMemberOperationResponse);
	}

	public removeSegment(requestData: GroupModels.ServerRemoveSegmentRequestData, onResponse: Action1<GroupResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerRemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveSegmentOperationResponse);
	}

	public removeTag(requestData: GroupModels.ServerRemoveTagRequestData, onResponse: Action1<GroupResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerRemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveTagOperationResponse);
	}

	public sendGroupMessage(requestData: GroupModels.ServerSendGroupMessageRequestData, onResponse: Action1<GroupResponseModels.SendGroupMessageOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerSendGroupMessageOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SendGroupMessageOperationResponse);
	}

	public setAvatar(requestData: GroupModels.ServerSetAvatarRequestData, onResponse: Action1<GroupResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerSetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetAvatarOperationResponse);
	}

	public setCustomData(requestData: GroupModels.ServerSetCustomDataRequestData, onResponse: Action1<GroupResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerSetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetCustomDataOperationResponse);
	}

	public setDisplayName(requestData: GroupModels.ServerSetDisplayNameRequestData, onResponse: Action1<GroupResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerSetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetDisplayNameOperationResponse);
	}

	public setGroupCurrency(requestData: GroupModels.ServerSetGroupCurrencyRequestData, onResponse: Action1<GroupResponseModels.SetGroupCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerSetGroupCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetGroupCurrencyOperationResponse);
	}

	public setGroupData(requestData: GroupModels.ServerSetGroupDataRequestData, onResponse: Action1<GroupResponseModels.SetGroupDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerSetGroupDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetGroupDataOperationResponse);
	}

	public setGroupStatistics(requestData: GroupModels.ServerSetGroupStatisticsRequestData, onResponse: Action1<GroupResponseModels.SetGroupStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerSetGroupStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetGroupStatisticsOperationResponse);
	}

	public setRemoveStatus(requestData: GroupModels.ServerSetRemoveStatusRequestData, onResponse: Action1<GroupResponseModels.SetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerSetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetRemoveStatusOperationResponse);
	}

	public setTag(requestData: GroupModels.ServerSetTagRequestData, onResponse: Action1<GroupResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.ServerSetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetTagOperationResponse);
	}

}

export class AdminGroupApi {
	public addMember(requestData: GroupModels.AdminAddMemberRequestData, onResponse: Action1<GroupResponseModels.AddMemberOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminAddMemberOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.AddMemberOperationResponse);
	}

	public addSegment(requestData: GroupModels.AdminAddSegmentRequestData, onResponse: Action1<GroupResponseModels.AddSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminAddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.AddSegmentOperationResponse);
	}

	public getAvatar(requestData: GroupModels.AdminGetAvatarRequestData, onResponse: Action1<GroupResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetAvatarOperationResponse);
	}

	public getCatalogId(requestData: GroupModels.AdminGetCatalogIdRequestData, onResponse: Action1<GroupResponseModels.GetCatalogIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetCatalogIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCatalogIdOperationResponse);
	}

	public getCustomData(requestData: GroupModels.AdminGetCustomDataRequestData, onResponse: Action1<GroupResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetCustomDataOperationResponse);
	}

	public getDisplayName(requestData: GroupModels.AdminGetDisplayNameRequestData, onResponse: Action1<GroupResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetDisplayNameOperationResponse);
	}

	public getGroupCurrency(requestData: GroupModels.AdminGetGroupCurrencyRequestData, onResponse: Action1<GroupResponseModels.GetGroupCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetGroupCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupCurrencyOperationResponse);
	}

	public getGroupData(requestData: GroupModels.AdminGetGroupDataRequestData, onResponse: Action1<GroupResponseModels.GetGroupDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetGroupDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupDataOperationResponse);
	}

	public getGroupInformation(requestData: GroupModels.AdminGetGroupInformationRequestData, onResponse: Action1<GroupResponseModels.GetGroupInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetGroupInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupInformationOperationResponse);
	}

	public getGroupInventory(requestData: GroupModels.AdminGetGroupInventoryRequestData, onResponse: Action1<GroupResponseModels.GetGroupInventoryOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetGroupInventoryOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupInventoryOperationResponse);
	}

	public getGroupMessage(requestData: GroupModels.AdminGetGroupMessageRequestData, onResponse: Action1<GroupResponseModels.GetGroupMessageOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetGroupMessageOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupMessageOperationResponse);
	}

	public getGroupStatistics(requestData: GroupModels.AdminGetGroupStatisticsRequestData, onResponse: Action1<GroupResponseModels.GetGroupStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetGroupStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupStatisticsOperationResponse);
	}

	public getGroupsWithDisplayName(requestData: GroupModels.AdminGetGroupsWithDisplayNameRequestData, onResponse: Action1<GroupResponseModels.GetGroupsWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetGroupsWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithDisplayNameOperationResponse);
	}

	public getGroupsWithSegment(requestData: GroupModels.AdminGetGroupsWithSegmentRequestData, onResponse: Action1<GroupResponseModels.GetGroupsWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetGroupsWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithSegmentOperationResponse);
	}

	public getGroupsWithTag(requestData: GroupModels.AdminGetGroupsWithTagRequestData, onResponse: Action1<GroupResponseModels.GetGroupsWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetGroupsWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetGroupsWithTagOperationResponse);
	}

	public getMembers(requestData: GroupModels.AdminGetMembersRequestData, onResponse: Action1<GroupResponseModels.GetMembersOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetMembersOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetMembersOperationResponse);
	}

	public getRemoveStatus(requestData: GroupModels.AdminGetRemoveStatusRequestData, onResponse: Action1<GroupResponseModels.GetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetRemoveStatusOperationResponse);
	}

	public getSegment(requestData: GroupModels.AdminGetSegmentRequestData, onResponse: Action1<GroupResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetSegmentOperationResponse);
	}

	public getStatisticsLeaderboardAroundGroup(requestData: GroupModels.AdminGetStatisticsLeaderboardAroundGroupRequestData, onResponse: Action1<GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetStatisticsLeaderboardAroundGroupOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse);
	}

	public getStatisticsLeaderboard(requestData: GroupModels.AdminGetStatisticsLeaderboardRequestData, onResponse: Action1<GroupResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public getTag(requestData: GroupModels.AdminGetTagRequestData, onResponse: Action1<GroupResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetTagOperationResponse);
	}

	public getTsCreate(requestData: GroupModels.AdminGetTsCreateRequestData, onResponse: Action1<GroupResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GetTsCreateOperationResponse);
	}

	public grantGroupItem(requestData: GroupModels.AdminGrantGroupItemRequestData, onResponse: Action1<GroupResponseModels.GrantGroupItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminGrantGroupItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.GrantGroupItemOperationResponse);
	}

	public removeGroupItem(requestData: GroupModels.AdminRemoveGroupItemRequestData, onResponse: Action1<GroupResponseModels.RemoveGroupItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminRemoveGroupItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveGroupItemOperationResponse);
	}

	public removeMember(requestData: GroupModels.AdminRemoveMemberRequestData, onResponse: Action1<GroupResponseModels.RemoveMemberOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminRemoveMemberOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveMemberOperationResponse);
	}

	public removeSegment(requestData: GroupModels.AdminRemoveSegmentRequestData, onResponse: Action1<GroupResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminRemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveSegmentOperationResponse);
	}

	public removeTag(requestData: GroupModels.AdminRemoveTagRequestData, onResponse: Action1<GroupResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminRemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.RemoveTagOperationResponse);
	}

	public sendGroupMessage(requestData: GroupModels.AdminSendGroupMessageRequestData, onResponse: Action1<GroupResponseModels.SendGroupMessageOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminSendGroupMessageOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SendGroupMessageOperationResponse);
	}

	public setAvatar(requestData: GroupModels.AdminSetAvatarRequestData, onResponse: Action1<GroupResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminSetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetAvatarOperationResponse);
	}

	public setCustomData(requestData: GroupModels.AdminSetCustomDataRequestData, onResponse: Action1<GroupResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminSetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetCustomDataOperationResponse);
	}

	public setDisplayName(requestData: GroupModels.AdminSetDisplayNameRequestData, onResponse: Action1<GroupResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminSetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetDisplayNameOperationResponse);
	}

	public setGroupCurrency(requestData: GroupModels.AdminSetGroupCurrencyRequestData, onResponse: Action1<GroupResponseModels.SetGroupCurrencyOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminSetGroupCurrencyOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetGroupCurrencyOperationResponse);
	}

	public setGroupData(requestData: GroupModels.AdminSetGroupDataRequestData, onResponse: Action1<GroupResponseModels.SetGroupDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminSetGroupDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetGroupDataOperationResponse);
	}

	public setGroupStatistics(requestData: GroupModels.AdminSetGroupStatisticsRequestData, onResponse: Action1<GroupResponseModels.SetGroupStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminSetGroupStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetGroupStatisticsOperationResponse);
	}

	public setRemoveStatus(requestData: GroupModels.AdminSetRemoveStatusRequestData, onResponse: Action1<GroupResponseModels.SetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminSetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetRemoveStatusOperationResponse);
	}

	public setTag(requestData: GroupModels.AdminSetTagRequestData, onResponse: Action1<GroupResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new GroupRequestModels.AdminSetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, GroupResponseModels.SetTagOperationResponse);
	}

}

