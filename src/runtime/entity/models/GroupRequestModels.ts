import { OperationCode } from "./../../constant/OperationCode";
import { RequestRole } from "./../../constant/enumType/RequestRole";
import { RequestType } from "./../../constant/enumType/RequestType";
import { CustomOperationRequestAbstract } from "./../request/CustomOperationRequest";
import { GroupModels } from "./GroupModels";

export namespace GroupRequestModels {
	export class AddMemberOperationRequest extends CustomOperationRequestAbstract<GroupModels.AddMemberRequestData> {
		protected override operationCode: string = OperationCode.AddMember;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.AddMemberRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AddMemberRequestData;
		}
	}

	export class ServerAddMemberOperationRequest extends AddMemberOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerAddMemberRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerAddMemberRequestData;
		}
	}

	export class AdminAddMemberOperationRequest extends AddMemberOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminAddMemberRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminAddMemberRequestData;
		}
	}

	export class AddSegmentOperationRequest extends CustomOperationRequestAbstract<GroupModels.AddSegmentRequestData> {
		protected override operationCode: string = OperationCode.AddSegment;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.AddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AddSegmentRequestData;
		}
	}

	export class ServerAddSegmentOperationRequest extends AddSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerAddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerAddSegmentRequestData;
		}
	}

	export class AdminAddSegmentOperationRequest extends AddSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminAddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminAddSegmentRequestData;
		}
	}

	export class GetAvatarOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetAvatarRequestData> {
		protected override operationCode: string = OperationCode.GetAvatar;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetAvatarRequestData;
		}
	}

	export class ServerGetAvatarOperationRequest extends GetAvatarOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerGetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetAvatarRequestData;
		}
	}

	export class AdminGetAvatarOperationRequest extends GetAvatarOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminGetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetAvatarRequestData;
		}
	}

	export class GetCatalogIdOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetCatalogIdRequestData> {
		protected override operationCode: string = OperationCode.GetCatalogId;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetCatalogIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetCatalogIdRequestData;
		}
	}

	export class ServerGetCatalogIdOperationRequest extends GetCatalogIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerGetCatalogIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetCatalogIdRequestData;
		}
	}

	export class AdminGetCatalogIdOperationRequest extends GetCatalogIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminGetCatalogIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetCatalogIdRequestData;
		}
	}

	export class GetCustomDataOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetCustomDataRequestData> {
		protected override operationCode: string = OperationCode.GetCustomData;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetCustomDataRequestData;
		}
	}

	export class ServerGetCustomDataOperationRequest extends GetCustomDataOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerGetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetCustomDataRequestData;
		}
	}

	export class AdminGetCustomDataOperationRequest extends GetCustomDataOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminGetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetCustomDataRequestData;
		}
	}

	export class GetDisplayNameOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetDisplayNameRequestData> {
		protected override operationCode: string = OperationCode.GetDisplayName;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetDisplayNameRequestData;
		}
	}

	export class ServerGetDisplayNameOperationRequest extends GetDisplayNameOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerGetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetDisplayNameRequestData;
		}
	}

	export class AdminGetDisplayNameOperationRequest extends GetDisplayNameOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminGetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetDisplayNameRequestData;
		}
	}

	export class GetGroupCurrencyOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetGroupCurrencyRequestData> {
		protected override operationCode: string = OperationCode.GetGroupCurrency;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetGroupCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetGroupCurrencyRequestData;
		}
	}

	export class ServerGetGroupCurrencyOperationRequest extends GetGroupCurrencyOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerGetGroupCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetGroupCurrencyRequestData;
		}
	}

	export class AdminGetGroupCurrencyOperationRequest extends GetGroupCurrencyOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminGetGroupCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetGroupCurrencyRequestData;
		}
	}

	export class GetGroupDataOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetGroupDataRequestData> {
		protected override operationCode: string = OperationCode.GetGroupData;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetGroupDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetGroupDataRequestData;
		}
	}

	export class ServerGetGroupDataOperationRequest extends GetGroupDataOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerGetGroupDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetGroupDataRequestData;
		}
	}

	export class AdminGetGroupDataOperationRequest extends GetGroupDataOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminGetGroupDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetGroupDataRequestData;
		}
	}

	export class GetGroupInformationOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetGroupInformationRequestData> {
		protected override operationCode: string = OperationCode.GetGroupInformation;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetGroupInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetGroupInformationRequestData;
		}
	}

	export class ServerGetGroupInformationOperationRequest extends GetGroupInformationOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerGetGroupInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetGroupInformationRequestData;
		}
	}

	export class AdminGetGroupInformationOperationRequest extends GetGroupInformationOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminGetGroupInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetGroupInformationRequestData;
		}
	}

	export class GetGroupInventoryOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetGroupInventoryRequestData> {
		protected override operationCode: string = OperationCode.GetGroupInventory;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetGroupInventoryRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetGroupInventoryRequestData;
		}
	}

	export class ServerGetGroupInventoryOperationRequest extends GetGroupInventoryOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerGetGroupInventoryRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetGroupInventoryRequestData;
		}
	}

	export class AdminGetGroupInventoryOperationRequest extends GetGroupInventoryOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminGetGroupInventoryRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetGroupInventoryRequestData;
		}
	}

	export class GetGroupMessageOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetGroupMessageRequestData> {
		protected override operationCode: string = OperationCode.GetGroupMessage;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetGroupMessageRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetGroupMessageRequestData;
		}
	}

	export class ServerGetGroupMessageOperationRequest extends GetGroupMessageOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerGetGroupMessageRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetGroupMessageRequestData;
		}
	}

	export class AdminGetGroupMessageOperationRequest extends GetGroupMessageOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminGetGroupMessageRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetGroupMessageRequestData;
		}
	}

	export class GetGroupStatisticsOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetGroupStatisticsRequestData> {
		protected override operationCode: string = OperationCode.GetGroupStatistics;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetGroupStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetGroupStatisticsRequestData;
		}
	}

	export class ServerGetGroupStatisticsOperationRequest extends GetGroupStatisticsOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerGetGroupStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetGroupStatisticsRequestData;
		}
	}

	export class AdminGetGroupStatisticsOperationRequest extends GetGroupStatisticsOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminGetGroupStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetGroupStatisticsRequestData;
		}
	}

	export class GetGroupsWithDisplayNameOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetGroupsWithDisplayNameRequestData> {
		protected override operationCode: string = OperationCode.GetGroupsWithDisplayName;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetGroupsWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetGroupsWithDisplayNameRequestData;
		}
	}

	export class ServerGetGroupsWithDisplayNameOperationRequest extends GetGroupsWithDisplayNameOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerGetGroupsWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetGroupsWithDisplayNameRequestData;
		}
	}

	export class AdminGetGroupsWithDisplayNameOperationRequest extends GetGroupsWithDisplayNameOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminGetGroupsWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetGroupsWithDisplayNameRequestData;
		}
	}

	export class GetGroupsWithSegmentOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetGroupsWithSegmentRequestData> {
		protected override operationCode: string = OperationCode.GetGroupsWithSegment;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetGroupsWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetGroupsWithSegmentRequestData;
		}
	}

	export class ServerGetGroupsWithSegmentOperationRequest extends GetGroupsWithSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerGetGroupsWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetGroupsWithSegmentRequestData;
		}
	}

	export class AdminGetGroupsWithSegmentOperationRequest extends GetGroupsWithSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminGetGroupsWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetGroupsWithSegmentRequestData;
		}
	}

	export class GetGroupsWithTagOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetGroupsWithTagRequestData> {
		protected override operationCode: string = OperationCode.GetGroupsWithTag;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetGroupsWithTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetGroupsWithTagRequestData;
		}
	}

	export class ServerGetGroupsWithTagOperationRequest extends GetGroupsWithTagOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerGetGroupsWithTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetGroupsWithTagRequestData;
		}
	}

	export class AdminGetGroupsWithTagOperationRequest extends GetGroupsWithTagOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminGetGroupsWithTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetGroupsWithTagRequestData;
		}
	}

	export class GetMembersOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetMembersRequestData> {
		protected override operationCode: string = OperationCode.GetMembers;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetMembersRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetMembersRequestData;
		}
	}

	export class ServerGetMembersOperationRequest extends GetMembersOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerGetMembersRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetMembersRequestData;
		}
	}

	export class AdminGetMembersOperationRequest extends GetMembersOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminGetMembersRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetMembersRequestData;
		}
	}

	export class GetRemoveStatusOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetRemoveStatusRequestData> {
		protected override operationCode: string = OperationCode.GetRemoveStatus;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetRemoveStatusRequestData;
		}
	}

	export class ServerGetRemoveStatusOperationRequest extends GetRemoveStatusOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerGetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetRemoveStatusRequestData;
		}
	}

	export class AdminGetRemoveStatusOperationRequest extends GetRemoveStatusOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminGetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetRemoveStatusRequestData;
		}
	}

	export class GetSegmentOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetSegmentRequestData> {
		protected override operationCode: string = OperationCode.GetSegment;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetSegmentRequestData;
		}
	}

	export class ServerGetSegmentOperationRequest extends GetSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerGetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetSegmentRequestData;
		}
	}

	export class AdminGetSegmentOperationRequest extends GetSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminGetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetSegmentRequestData;
		}
	}

	export class GetStatisticsLeaderboardAroundGroupOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetStatisticsLeaderboardAroundGroupRequestData> {
		protected override operationCode: string = OperationCode.GetStatisticsLeaderboardAroundGroup;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetStatisticsLeaderboardAroundGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetStatisticsLeaderboardAroundGroupRequestData;
		}
	}

	export class ServerGetStatisticsLeaderboardAroundGroupOperationRequest extends GetStatisticsLeaderboardAroundGroupOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerGetStatisticsLeaderboardAroundGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetStatisticsLeaderboardAroundGroupRequestData;
		}
	}

	export class AdminGetStatisticsLeaderboardAroundGroupOperationRequest extends GetStatisticsLeaderboardAroundGroupOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminGetStatisticsLeaderboardAroundGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetStatisticsLeaderboardAroundGroupRequestData;
		}
	}

	export class GetStatisticsLeaderboardOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetStatisticsLeaderboardRequestData> {
		protected override operationCode: string = OperationCode.GetStatisticsLeaderboard;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetStatisticsLeaderboardRequestData;
		}
	}

	export class ServerGetStatisticsLeaderboardOperationRequest extends GetStatisticsLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerGetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetStatisticsLeaderboardRequestData;
		}
	}

	export class AdminGetStatisticsLeaderboardOperationRequest extends GetStatisticsLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminGetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetStatisticsLeaderboardRequestData;
		}
	}

	export class GetTagOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetTagRequestData> {
		protected override operationCode: string = OperationCode.GetTag;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetTagRequestData;
		}
	}

	export class ServerGetTagOperationRequest extends GetTagOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerGetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetTagRequestData;
		}
	}

	export class AdminGetTagOperationRequest extends GetTagOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminGetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetTagRequestData;
		}
	}

	export class GetTsCreateOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetTsCreateRequestData> {
		protected override operationCode: string = OperationCode.GetTsCreate;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetTsCreateRequestData;
		}
	}

	export class ServerGetTsCreateOperationRequest extends GetTsCreateOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerGetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetTsCreateRequestData;
		}
	}

	export class AdminGetTsCreateOperationRequest extends GetTsCreateOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminGetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetTsCreateRequestData;
		}
	}

	export class CreateGroupItemOperationRequest extends CustomOperationRequestAbstract<GroupModels.CreateGroupItemRequestData> {
		protected override operationCode: string = OperationCode.CreateGroupItem;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.CreateGroupItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.CreateGroupItemRequestData;
		}
	}

	export class ServerCreateGroupItemOperationRequest extends CreateGroupItemOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerCreateGroupItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerCreateGroupItemRequestData;
		}
	}

	export class AdminCreateGroupItemOperationRequest extends CreateGroupItemOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminCreateGroupItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminCreateGroupItemRequestData;
		}
	}

	export class RemoveGroupItemOperationRequest extends CustomOperationRequestAbstract<GroupModels.RemoveGroupItemRequestData> {
		protected override operationCode: string = OperationCode.RemoveGroupItem;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.RemoveGroupItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.RemoveGroupItemRequestData;
		}
	}

	export class ServerRemoveGroupItemOperationRequest extends RemoveGroupItemOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerRemoveGroupItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerRemoveGroupItemRequestData;
		}
	}

	export class AdminRemoveGroupItemOperationRequest extends RemoveGroupItemOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminRemoveGroupItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminRemoveGroupItemRequestData;
		}
	}

	export class RemoveMemberOperationRequest extends CustomOperationRequestAbstract<GroupModels.RemoveMemberRequestData> {
		protected override operationCode: string = OperationCode.RemoveMember;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.RemoveMemberRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.RemoveMemberRequestData;
		}
	}

	export class ServerRemoveMemberOperationRequest extends RemoveMemberOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerRemoveMemberRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerRemoveMemberRequestData;
		}
	}

	export class AdminRemoveMemberOperationRequest extends RemoveMemberOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminRemoveMemberRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminRemoveMemberRequestData;
		}
	}

	export class RemoveSegmentOperationRequest extends CustomOperationRequestAbstract<GroupModels.RemoveSegmentRequestData> {
		protected override operationCode: string = OperationCode.RemoveSegment;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.RemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.RemoveSegmentRequestData;
		}
	}

	export class ServerRemoveSegmentOperationRequest extends RemoveSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerRemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerRemoveSegmentRequestData;
		}
	}

	export class AdminRemoveSegmentOperationRequest extends RemoveSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminRemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminRemoveSegmentRequestData;
		}
	}

	export class RemoveTagOperationRequest extends CustomOperationRequestAbstract<GroupModels.RemoveTagRequestData> {
		protected override operationCode: string = OperationCode.RemoveTag;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.RemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.RemoveTagRequestData;
		}
	}

	export class ServerRemoveTagOperationRequest extends RemoveTagOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerRemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerRemoveTagRequestData;
		}
	}

	export class AdminRemoveTagOperationRequest extends RemoveTagOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminRemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminRemoveTagRequestData;
		}
	}

	export class SendGroupMessageOperationRequest extends CustomOperationRequestAbstract<GroupModels.SendGroupMessageRequestData> {
		protected override operationCode: string = OperationCode.SendGroupMessage;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.SendGroupMessageRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.SendGroupMessageRequestData;
		}
	}

	export class ServerSendGroupMessageOperationRequest extends SendGroupMessageOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerSendGroupMessageRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerSendGroupMessageRequestData;
		}
	}

	export class AdminSendGroupMessageOperationRequest extends SendGroupMessageOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminSendGroupMessageRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminSendGroupMessageRequestData;
		}
	}

	export class SetAvatarOperationRequest extends CustomOperationRequestAbstract<GroupModels.SetAvatarRequestData> {
		protected override operationCode: string = OperationCode.SetAvatar;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.SetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.SetAvatarRequestData;
		}
	}

	export class ServerSetAvatarOperationRequest extends SetAvatarOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerSetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerSetAvatarRequestData;
		}
	}

	export class AdminSetAvatarOperationRequest extends SetAvatarOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminSetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminSetAvatarRequestData;
		}
	}

	export class SetCustomDataOperationRequest extends CustomOperationRequestAbstract<GroupModels.SetCustomDataRequestData> {
		protected override operationCode: string = OperationCode.SetCustomData;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.SetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.SetCustomDataRequestData;
		}
	}

	export class ServerSetCustomDataOperationRequest extends SetCustomDataOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerSetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerSetCustomDataRequestData;
		}
	}

	export class AdminSetCustomDataOperationRequest extends SetCustomDataOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminSetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminSetCustomDataRequestData;
		}
	}

	export class SetDisplayNameOperationRequest extends CustomOperationRequestAbstract<GroupModels.SetDisplayNameRequestData> {
		protected override operationCode: string = OperationCode.SetDisplayName;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.SetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.SetDisplayNameRequestData;
		}
	}

	export class ServerSetDisplayNameOperationRequest extends SetDisplayNameOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerSetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerSetDisplayNameRequestData;
		}
	}

	export class AdminSetDisplayNameOperationRequest extends SetDisplayNameOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminSetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminSetDisplayNameRequestData;
		}
	}

	export class SetGroupCurrencyOperationRequest extends CustomOperationRequestAbstract<GroupModels.SetGroupCurrencyRequestData> {
		protected override operationCode: string = OperationCode.SetGroupCurrency;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.SetGroupCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.SetGroupCurrencyRequestData;
		}
	}

	export class ServerSetGroupCurrencyOperationRequest extends SetGroupCurrencyOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerSetGroupCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerSetGroupCurrencyRequestData;
		}
	}

	export class AdminSetGroupCurrencyOperationRequest extends SetGroupCurrencyOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminSetGroupCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminSetGroupCurrencyRequestData;
		}
	}

	export class SetGroupDataOperationRequest extends CustomOperationRequestAbstract<GroupModels.SetGroupDataRequestData> {
		protected override operationCode: string = OperationCode.SetGroupData;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.SetGroupDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.SetGroupDataRequestData;
		}
	}

	export class ServerSetGroupDataOperationRequest extends SetGroupDataOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerSetGroupDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerSetGroupDataRequestData;
		}
	}

	export class AdminSetGroupDataOperationRequest extends SetGroupDataOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminSetGroupDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminSetGroupDataRequestData;
		}
	}

	export class SetGroupStatisticsOperationRequest extends CustomOperationRequestAbstract<GroupModels.SetGroupStatisticsRequestData> {
		protected override operationCode: string = OperationCode.SetGroupStatistics;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.SetGroupStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.SetGroupStatisticsRequestData;
		}
	}

	export class ServerSetGroupStatisticsOperationRequest extends SetGroupStatisticsOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerSetGroupStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerSetGroupStatisticsRequestData;
		}
	}

	export class AdminSetGroupStatisticsOperationRequest extends SetGroupStatisticsOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminSetGroupStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminSetGroupStatisticsRequestData;
		}
	}

	export class SetRemoveStatusOperationRequest extends CustomOperationRequestAbstract<GroupModels.SetRemoveStatusRequestData> {
		protected override operationCode: string = OperationCode.SetRemoveStatus;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.SetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.SetRemoveStatusRequestData;
		}
	}

	export class ServerSetRemoveStatusOperationRequest extends SetRemoveStatusOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerSetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerSetRemoveStatusRequestData;
		}
	}

	export class AdminSetRemoveStatusOperationRequest extends SetRemoveStatusOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminSetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminSetRemoveStatusRequestData;
		}
	}

	export class SetTagOperationRequest extends CustomOperationRequestAbstract<GroupModels.SetTagRequestData> {
		protected override operationCode: string = OperationCode.SetTag;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.SetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.SetTagRequestData;
		}
	}

	export class ServerSetTagOperationRequest extends SetTagOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerSetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerSetTagRequestData;
		}
	}

	export class AdminSetTagOperationRequest extends SetTagOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminSetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminSetTagRequestData;
		}
	}

	export class GetCurrencyLeaderboardOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetCurrencyLeaderboardRequestData> {
		protected override operationCode: string = OperationCode.GetCurrencyLeaderboard;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetCurrencyLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetCurrencyLeaderboardRequestData;
		}
	}

	export class ServerGetCurrencyLeaderboardOperationRequest extends GetCurrencyLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerGetCurrencyLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetCurrencyLeaderboardRequestData;
		}
	}

	export class AdminGetCurrencyLeaderboardOperationRequest extends GetCurrencyLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminGetCurrencyLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetCurrencyLeaderboardRequestData;
		}
	}

	export class GetCreateLeaderboardOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetCreateLeaderboardRequestData> {
		protected override operationCode: string = OperationCode.GetCreateLeaderboard;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetCreateLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetCreateLeaderboardRequestData;
		}
	}

	export class ServerGetCreateLeaderboardOperationRequest extends GetCreateLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerGetCreateLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetCreateLeaderboardRequestData;
		}
	}

	export class AdminGetCreateLeaderboardOperationRequest extends GetCreateLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminGetCreateLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetCreateLeaderboardRequestData;
		}
	}

	export class GetStatisticsLogOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetStatisticsLogRequestData> {
		protected override operationCode: string = OperationCode.GetStatisticsLog;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetStatisticsLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetStatisticsLogRequestData;
		}
	}

	export class ServerGetStatisticsLogOperationRequest extends GetStatisticsLogOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerGetStatisticsLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetStatisticsLogRequestData;
		}
	}

	export class AdminGetStatisticsLogOperationRequest extends GetStatisticsLogOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminGetStatisticsLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetStatisticsLogRequestData;
		}
	}

	export class GetCurrencyLogOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetCurrencyLogRequestData> {
		protected override operationCode: string = OperationCode.GetCurrencyLog;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetCurrencyLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetCurrencyLogRequestData;
		}
	}

	export class ServerGetCurrencyLogOperationRequest extends GetCurrencyLogOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.ServerGetCurrencyLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetCurrencyLogRequestData;
		}
	}

	export class AdminGetCurrencyLogOperationRequest extends GetCurrencyLogOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AdminGetCurrencyLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetCurrencyLogRequestData;
		}
	}

}
