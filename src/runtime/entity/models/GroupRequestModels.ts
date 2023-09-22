import { OperationCode } from "../../constant/OperationCode";
import { RequestRole } from "../../constant/enumType/RequestRole";
import { RequestType } from "../../constant/enumType/RequestType";
import { CustomOperationRequestAbstract } from "../request/CustomOperationRequest";
import { GroupModels } from "./GroupModels";

export module GroupRequestModels {
	export class AddMemberOperationRequest extends CustomOperationRequestAbstract<GroupModels.AddMemberRequestData> {
		protected override operationCode: number = OperationCode.AddMember;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.AddMemberRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerAddMemberOperationRequest extends AddMemberOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.AddMemberRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminAddMemberOperationRequest extends AddMemberOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AddMemberRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AddSegmentOperationRequest extends CustomOperationRequestAbstract<GroupModels.AddSegmentRequestData> {
		protected override operationCode: number = OperationCode.AddSegment;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.AddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerAddSegmentOperationRequest extends AddSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.AddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminAddSegmentOperationRequest extends AddSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.AddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetAvatarOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetAvatarRequestData> {
		protected override operationCode: number = OperationCode.GetAvatar;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetAvatarOperationRequest extends GetAvatarOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.GetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetAvatarOperationRequest extends GetAvatarOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.GetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetCatalogIdOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetCatalogIdRequestData> {
		protected override operationCode: number = OperationCode.GetCatalogId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetCatalogIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetCatalogIdOperationRequest extends GetCatalogIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.GetCatalogIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetCatalogIdOperationRequest extends GetCatalogIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.GetCatalogIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetCustomDataOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetCustomDataRequestData> {
		protected override operationCode: number = OperationCode.GetCustomData;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetCustomDataOperationRequest extends GetCustomDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.GetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetCustomDataOperationRequest extends GetCustomDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.GetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetDisplayNameOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetDisplayNameRequestData> {
		protected override operationCode: number = OperationCode.GetDisplayName;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetDisplayNameOperationRequest extends GetDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.GetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetDisplayNameOperationRequest extends GetDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.GetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetGroupCurrencyOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetGroupCurrencyRequestData> {
		protected override operationCode: number = OperationCode.GetGroupCurrency;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetGroupCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetGroupCurrencyOperationRequest extends GetGroupCurrencyOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.GetGroupCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetGroupCurrencyOperationRequest extends GetGroupCurrencyOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.GetGroupCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetGroupDataOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetGroupDataRequestData> {
		protected override operationCode: number = OperationCode.GetGroupData;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetGroupDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetGroupDataOperationRequest extends GetGroupDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.GetGroupDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetGroupDataOperationRequest extends GetGroupDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.GetGroupDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetGroupInformationOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetGroupInformationRequestData> {
		protected override operationCode: number = OperationCode.GetGroupInformation;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetGroupInformationRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetGroupInformationOperationRequest extends GetGroupInformationOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.GetGroupInformationRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetGroupInformationOperationRequest extends GetGroupInformationOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.GetGroupInformationRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetGroupInventoryOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetGroupInventoryRequestData> {
		protected override operationCode: number = OperationCode.GetGroupInventory;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetGroupInventoryRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetGroupInventoryOperationRequest extends GetGroupInventoryOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.GetGroupInventoryRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetGroupInventoryOperationRequest extends GetGroupInventoryOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.GetGroupInventoryRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetGroupMessageOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetGroupMessageRequestData> {
		protected override operationCode: number = OperationCode.GetGroupMessage;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetGroupMessageRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetGroupMessageOperationRequest extends GetGroupMessageOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.GetGroupMessageRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetGroupMessageOperationRequest extends GetGroupMessageOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.GetGroupMessageRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetGroupStatisticsOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetGroupStatisticsRequestData> {
		protected override operationCode: number = OperationCode.GetGroupStatistics;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetGroupStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetGroupStatisticsOperationRequest extends GetGroupStatisticsOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.GetGroupStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetGroupStatisticsOperationRequest extends GetGroupStatisticsOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.GetGroupStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetGroupsWithDisplayNameOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetGroupsWithDisplayNameRequestData> {
		protected override operationCode: number = OperationCode.GetGroupsWithDisplayName;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetGroupsWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetGroupsWithDisplayNameOperationRequest extends GetGroupsWithDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.GetGroupsWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetGroupsWithDisplayNameOperationRequest extends GetGroupsWithDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.GetGroupsWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetGroupsWithSegmentOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetGroupsWithSegmentRequestData> {
		protected override operationCode: number = OperationCode.GetGroupsWithSegment;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetGroupsWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetGroupsWithSegmentOperationRequest extends GetGroupsWithSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.GetGroupsWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetGroupsWithSegmentOperationRequest extends GetGroupsWithSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.GetGroupsWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetGroupsWithTagOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetGroupsWithTagRequestData> {
		protected override operationCode: number = OperationCode.GetGroupsWithTag;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetGroupsWithTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetGroupsWithTagOperationRequest extends GetGroupsWithTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.GetGroupsWithTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetGroupsWithTagOperationRequest extends GetGroupsWithTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.GetGroupsWithTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetMembersOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetMembersRequestData> {
		protected override operationCode: number = OperationCode.GetMembers;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetMembersRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetMembersOperationRequest extends GetMembersOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.GetMembersRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetMembersOperationRequest extends GetMembersOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.GetMembersRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetRemoveStatusOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetRemoveStatusRequestData> {
		protected override operationCode: number = OperationCode.GetRemoveStatus;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetRemoveStatusOperationRequest extends GetRemoveStatusOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.GetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetRemoveStatusOperationRequest extends GetRemoveStatusOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.GetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetSegmentOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetSegmentRequestData> {
		protected override operationCode: number = OperationCode.GetSegment;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetSegmentOperationRequest extends GetSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.GetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetSegmentOperationRequest extends GetSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.GetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetStatisticsLeaderboardAroundGroupOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetStatisticsLeaderboardAroundGroupRequestData> {
		protected override operationCode: number = OperationCode.GetStatisticsLeaderboardAroundGroup;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetStatisticsLeaderboardAroundGroupRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetStatisticsLeaderboardAroundGroupOperationRequest extends GetStatisticsLeaderboardAroundGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.GetStatisticsLeaderboardAroundGroupRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetStatisticsLeaderboardAroundGroupOperationRequest extends GetStatisticsLeaderboardAroundGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.GetStatisticsLeaderboardAroundGroupRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetStatisticsLeaderboardOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetStatisticsLeaderboardRequestData> {
		protected override operationCode: number = OperationCode.GetStatisticsLeaderboard;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetStatisticsLeaderboardOperationRequest extends GetStatisticsLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.GetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetStatisticsLeaderboardOperationRequest extends GetStatisticsLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.GetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetTagOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetTagRequestData> {
		protected override operationCode: number = OperationCode.GetTag;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetTagOperationRequest extends GetTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.GetTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetTagOperationRequest extends GetTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.GetTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetTsCreateOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetTsCreateRequestData> {
		protected override operationCode: number = OperationCode.GetTsCreate;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetTsCreateOperationRequest extends GetTsCreateOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.GetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetTsCreateOperationRequest extends GetTsCreateOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.GetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GrantGroupItemOperationRequest extends CustomOperationRequestAbstract<GroupModels.GrantGroupItemRequestData> {
		protected override operationCode: number = OperationCode.GrantGroupItem;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.GrantGroupItemRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGrantGroupItemOperationRequest extends GrantGroupItemOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.GrantGroupItemRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGrantGroupItemOperationRequest extends GrantGroupItemOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.GrantGroupItemRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class RemoveGroupItemOperationRequest extends CustomOperationRequestAbstract<GroupModels.RemoveGroupItemRequestData> {
		protected override operationCode: number = OperationCode.RemoveGroupItem;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.RemoveGroupItemRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerRemoveGroupItemOperationRequest extends RemoveGroupItemOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.RemoveGroupItemRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminRemoveGroupItemOperationRequest extends RemoveGroupItemOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.RemoveGroupItemRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class RemoveMemberOperationRequest extends CustomOperationRequestAbstract<GroupModels.RemoveMemberRequestData> {
		protected override operationCode: number = OperationCode.RemoveMember;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.RemoveMemberRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerRemoveMemberOperationRequest extends RemoveMemberOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.RemoveMemberRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminRemoveMemberOperationRequest extends RemoveMemberOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.RemoveMemberRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class RemoveSegmentOperationRequest extends CustomOperationRequestAbstract<GroupModels.RemoveSegmentRequestData> {
		protected override operationCode: number = OperationCode.RemoveSegment;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.RemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerRemoveSegmentOperationRequest extends RemoveSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.RemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminRemoveSegmentOperationRequest extends RemoveSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.RemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class RemoveTagOperationRequest extends CustomOperationRequestAbstract<GroupModels.RemoveTagRequestData> {
		protected override operationCode: number = OperationCode.RemoveTag;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.RemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerRemoveTagOperationRequest extends RemoveTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.RemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminRemoveTagOperationRequest extends RemoveTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.RemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SendGroupMessageOperationRequest extends CustomOperationRequestAbstract<GroupModels.SendGroupMessageRequestData> {
		protected override operationCode: number = OperationCode.SendGroupMessage;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.SendGroupMessageRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSendGroupMessageOperationRequest extends SendGroupMessageOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.SendGroupMessageRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSendGroupMessageOperationRequest extends SendGroupMessageOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.SendGroupMessageRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetAvatarOperationRequest extends CustomOperationRequestAbstract<GroupModels.SetAvatarRequestData> {
		protected override operationCode: number = OperationCode.SetAvatar;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.SetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetAvatarOperationRequest extends SetAvatarOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.SetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetAvatarOperationRequest extends SetAvatarOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.SetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetCustomDataOperationRequest extends CustomOperationRequestAbstract<GroupModels.SetCustomDataRequestData> {
		protected override operationCode: number = OperationCode.SetCustomData;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.SetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetCustomDataOperationRequest extends SetCustomDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.SetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetCustomDataOperationRequest extends SetCustomDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.SetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetDisplayNameOperationRequest extends CustomOperationRequestAbstract<GroupModels.SetDisplayNameRequestData> {
		protected override operationCode: number = OperationCode.SetDisplayName;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.SetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetDisplayNameOperationRequest extends SetDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.SetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetDisplayNameOperationRequest extends SetDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.SetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetGroupCurrencyOperationRequest extends CustomOperationRequestAbstract<GroupModels.SetGroupCurrencyRequestData> {
		protected override operationCode: number = OperationCode.SetGroupCurrency;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.SetGroupCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetGroupCurrencyOperationRequest extends SetGroupCurrencyOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.SetGroupCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetGroupCurrencyOperationRequest extends SetGroupCurrencyOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.SetGroupCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetGroupDataOperationRequest extends CustomOperationRequestAbstract<GroupModels.SetGroupDataRequestData> {
		protected override operationCode: number = OperationCode.SetGroupData;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.SetGroupDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetGroupDataOperationRequest extends SetGroupDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.SetGroupDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetGroupDataOperationRequest extends SetGroupDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.SetGroupDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetGroupStatisticsOperationRequest extends CustomOperationRequestAbstract<GroupModels.SetGroupStatisticsRequestData> {
		protected override operationCode: number = OperationCode.SetGroupStatistics;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.SetGroupStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetGroupStatisticsOperationRequest extends SetGroupStatisticsOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.SetGroupStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetGroupStatisticsOperationRequest extends SetGroupStatisticsOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.SetGroupStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetRemoveStatusOperationRequest extends CustomOperationRequestAbstract<GroupModels.SetRemoveStatusRequestData> {
		protected override operationCode: number = OperationCode.SetRemoveStatus;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.SetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetRemoveStatusOperationRequest extends SetRemoveStatusOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.SetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetRemoveStatusOperationRequest extends SetRemoveStatusOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.SetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetTagOperationRequest extends CustomOperationRequestAbstract<GroupModels.SetTagRequestData> {
		protected override operationCode: number = OperationCode.SetTag;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Group;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GroupModels.SetTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetTagOperationRequest extends SetTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GroupModels.SetTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetTagOperationRequest extends SetTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GroupModels.SetTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

}
