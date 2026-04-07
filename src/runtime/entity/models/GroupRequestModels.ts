import { OperationCode } from "./../../constant/OperationCode";
import { RequestRole } from "./../../constant/enumType/RequestRole";
import { RequestType } from "./../../constant/enumType/RequestType";
import { CustomOperationRequestAbstract } from "./../request/CustomOperationRequest";
import { GroupModels } from "./GroupModels";

/**
 * Groups typed request contracts for Group.
 */
export namespace GroupRequestModels {
	/**
	 * Maps the AddMember operation to a typed request wrapper.
	 */
	export class AddMemberOperationRequest extends CustomOperationRequestAbstract<GroupModels.AddMemberRequestData> {
		protected override operationCode: string = OperationCode.AddMember;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new AddMemberOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AddMemberRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AddMemberRequestData;
		}
	}

	/**
	 * Maps the ServerAddMember operation to a typed request wrapper.
	 */
	export class ServerAddMemberOperationRequest extends AddMemberOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerAddMemberOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerAddMemberRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerAddMemberRequestData;
		}
	}

	/**
	 * Maps the AdminAddMember operation to a typed request wrapper.
	 */
	export class AdminAddMemberOperationRequest extends AddMemberOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminAddMemberOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminAddMemberRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminAddMemberRequestData;
		}
	}

	/**
	 * Maps the AddSegment operation to a typed request wrapper.
	 */
	export class AddSegmentOperationRequest extends CustomOperationRequestAbstract<GroupModels.AddSegmentRequestData> {
		protected override operationCode: string = OperationCode.AddSegment;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new AddSegmentOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AddSegmentRequestData;
		}
	}

	/**
	 * Maps the ServerAddSegment operation to a typed request wrapper.
	 */
	export class ServerAddSegmentOperationRequest extends AddSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerAddSegmentOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerAddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerAddSegmentRequestData;
		}
	}

	/**
	 * Maps the AdminAddSegment operation to a typed request wrapper.
	 */
	export class AdminAddSegmentOperationRequest extends AddSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminAddSegmentOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminAddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminAddSegmentRequestData;
		}
	}

	/**
	 * Maps the GetAvatar operation to a typed request wrapper.
	 */
	export class GetAvatarOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetAvatarRequestData> {
		protected override operationCode: string = OperationCode.GetAvatar;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetAvatarOperationRequest instance.
		 */
		constructor(requestData: GroupModels.GetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetAvatarRequestData;
		}
	}

	/**
	 * Maps the ServerGetAvatar operation to a typed request wrapper.
	 */
	export class ServerGetAvatarOperationRequest extends GetAvatarOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetAvatarOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerGetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetAvatarRequestData;
		}
	}

	/**
	 * Maps the AdminGetAvatar operation to a typed request wrapper.
	 */
	export class AdminGetAvatarOperationRequest extends GetAvatarOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetAvatarOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminGetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetAvatarRequestData;
		}
	}

	/**
	 * Maps the GetCatalogId operation to a typed request wrapper.
	 */
	export class GetCatalogIdOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetCatalogIdRequestData> {
		protected override operationCode: string = OperationCode.GetCatalogId;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetCatalogIdOperationRequest instance.
		 */
		constructor(requestData: GroupModels.GetCatalogIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetCatalogIdRequestData;
		}
	}

	/**
	 * Maps the ServerGetCatalogId operation to a typed request wrapper.
	 */
	export class ServerGetCatalogIdOperationRequest extends GetCatalogIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetCatalogIdOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerGetCatalogIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetCatalogIdRequestData;
		}
	}

	/**
	 * Maps the AdminGetCatalogId operation to a typed request wrapper.
	 */
	export class AdminGetCatalogIdOperationRequest extends GetCatalogIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetCatalogIdOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminGetCatalogIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetCatalogIdRequestData;
		}
	}

	/**
	 * Maps the GetCustomData operation to a typed request wrapper.
	 */
	export class GetCustomDataOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetCustomDataRequestData> {
		protected override operationCode: string = OperationCode.GetCustomData;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetCustomDataOperationRequest instance.
		 */
		constructor(requestData: GroupModels.GetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetCustomDataRequestData;
		}
	}

	/**
	 * Maps the ServerGetCustomData operation to a typed request wrapper.
	 */
	export class ServerGetCustomDataOperationRequest extends GetCustomDataOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetCustomDataOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerGetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetCustomDataRequestData;
		}
	}

	/**
	 * Maps the AdminGetCustomData operation to a typed request wrapper.
	 */
	export class AdminGetCustomDataOperationRequest extends GetCustomDataOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetCustomDataOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminGetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetCustomDataRequestData;
		}
	}

	/**
	 * Maps the GetDisplayName operation to a typed request wrapper.
	 */
	export class GetDisplayNameOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetDisplayNameRequestData> {
		protected override operationCode: string = OperationCode.GetDisplayName;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetDisplayNameOperationRequest instance.
		 */
		constructor(requestData: GroupModels.GetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetDisplayNameRequestData;
		}
	}

	/**
	 * Maps the ServerGetDisplayName operation to a typed request wrapper.
	 */
	export class ServerGetDisplayNameOperationRequest extends GetDisplayNameOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetDisplayNameOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerGetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetDisplayNameRequestData;
		}
	}

	/**
	 * Maps the AdminGetDisplayName operation to a typed request wrapper.
	 */
	export class AdminGetDisplayNameOperationRequest extends GetDisplayNameOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetDisplayNameOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminGetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetDisplayNameRequestData;
		}
	}

	/**
	 * Maps the GetGroupCurrency operation to a typed request wrapper.
	 */
	export class GetGroupCurrencyOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetGroupCurrencyRequestData> {
		protected override operationCode: string = OperationCode.GetGroupCurrency;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetGroupCurrencyOperationRequest instance.
		 */
		constructor(requestData: GroupModels.GetGroupCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetGroupCurrencyRequestData;
		}
	}

	/**
	 * Maps the ServerGetGroupCurrency operation to a typed request wrapper.
	 */
	export class ServerGetGroupCurrencyOperationRequest extends GetGroupCurrencyOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetGroupCurrencyOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerGetGroupCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetGroupCurrencyRequestData;
		}
	}

	/**
	 * Maps the AdminGetGroupCurrency operation to a typed request wrapper.
	 */
	export class AdminGetGroupCurrencyOperationRequest extends GetGroupCurrencyOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetGroupCurrencyOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminGetGroupCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetGroupCurrencyRequestData;
		}
	}

	/**
	 * Maps the GetGroupData operation to a typed request wrapper.
	 */
	export class GetGroupDataOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetGroupDataRequestData> {
		protected override operationCode: string = OperationCode.GetGroupData;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetGroupDataOperationRequest instance.
		 */
		constructor(requestData: GroupModels.GetGroupDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetGroupDataRequestData;
		}
	}

	/**
	 * Maps the ServerGetGroupData operation to a typed request wrapper.
	 */
	export class ServerGetGroupDataOperationRequest extends GetGroupDataOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetGroupDataOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerGetGroupDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetGroupDataRequestData;
		}
	}

	/**
	 * Maps the AdminGetGroupData operation to a typed request wrapper.
	 */
	export class AdminGetGroupDataOperationRequest extends GetGroupDataOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetGroupDataOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminGetGroupDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetGroupDataRequestData;
		}
	}

	/**
	 * Maps the GetGroupInformation operation to a typed request wrapper.
	 */
	export class GetGroupInformationOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetGroupInformationRequestData> {
		protected override operationCode: string = OperationCode.GetGroupInformation;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetGroupInformationOperationRequest instance.
		 */
		constructor(requestData: GroupModels.GetGroupInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetGroupInformationRequestData;
		}
	}

	/**
	 * Maps the ServerGetGroupInformation operation to a typed request wrapper.
	 */
	export class ServerGetGroupInformationOperationRequest extends GetGroupInformationOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetGroupInformationOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerGetGroupInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetGroupInformationRequestData;
		}
	}

	/**
	 * Maps the AdminGetGroupInformation operation to a typed request wrapper.
	 */
	export class AdminGetGroupInformationOperationRequest extends GetGroupInformationOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetGroupInformationOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminGetGroupInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetGroupInformationRequestData;
		}
	}

	/**
	 * Maps the GetGroupInventory operation to a typed request wrapper.
	 */
	export class GetGroupInventoryOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetGroupInventoryRequestData> {
		protected override operationCode: string = OperationCode.GetGroupInventory;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetGroupInventoryOperationRequest instance.
		 */
		constructor(requestData: GroupModels.GetGroupInventoryRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetGroupInventoryRequestData;
		}
	}

	/**
	 * Maps the ServerGetGroupInventory operation to a typed request wrapper.
	 */
	export class ServerGetGroupInventoryOperationRequest extends GetGroupInventoryOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetGroupInventoryOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerGetGroupInventoryRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetGroupInventoryRequestData;
		}
	}

	/**
	 * Maps the AdminGetGroupInventory operation to a typed request wrapper.
	 */
	export class AdminGetGroupInventoryOperationRequest extends GetGroupInventoryOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetGroupInventoryOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminGetGroupInventoryRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetGroupInventoryRequestData;
		}
	}

	/**
	 * Maps the GetGroupMessage operation to a typed request wrapper.
	 */
	export class GetGroupMessageOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetGroupMessageRequestData> {
		protected override operationCode: string = OperationCode.GetGroupMessage;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetGroupMessageOperationRequest instance.
		 */
		constructor(requestData: GroupModels.GetGroupMessageRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetGroupMessageRequestData;
		}
	}

	/**
	 * Maps the ServerGetGroupMessage operation to a typed request wrapper.
	 */
	export class ServerGetGroupMessageOperationRequest extends GetGroupMessageOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetGroupMessageOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerGetGroupMessageRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetGroupMessageRequestData;
		}
	}

	/**
	 * Maps the AdminGetGroupMessage operation to a typed request wrapper.
	 */
	export class AdminGetGroupMessageOperationRequest extends GetGroupMessageOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetGroupMessageOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminGetGroupMessageRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetGroupMessageRequestData;
		}
	}

	/**
	 * Maps the GetGroupStatistics operation to a typed request wrapper.
	 */
	export class GetGroupStatisticsOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetGroupStatisticsRequestData> {
		protected override operationCode: string = OperationCode.GetGroupStatistics;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetGroupStatisticsOperationRequest instance.
		 */
		constructor(requestData: GroupModels.GetGroupStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetGroupStatisticsRequestData;
		}
	}

	/**
	 * Maps the ServerGetGroupStatistics operation to a typed request wrapper.
	 */
	export class ServerGetGroupStatisticsOperationRequest extends GetGroupStatisticsOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetGroupStatisticsOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerGetGroupStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetGroupStatisticsRequestData;
		}
	}

	/**
	 * Maps the AdminGetGroupStatistics operation to a typed request wrapper.
	 */
	export class AdminGetGroupStatisticsOperationRequest extends GetGroupStatisticsOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetGroupStatisticsOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminGetGroupStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetGroupStatisticsRequestData;
		}
	}

	/**
	 * Maps the GetGroupsWithDisplayName operation to a typed request wrapper.
	 */
	export class GetGroupsWithDisplayNameOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetGroupsWithDisplayNameRequestData> {
		protected override operationCode: string = OperationCode.GetGroupsWithDisplayName;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetGroupsWithDisplayNameOperationRequest instance.
		 */
		constructor(requestData: GroupModels.GetGroupsWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetGroupsWithDisplayNameRequestData;
		}
	}

	/**
	 * Maps the ServerGetGroupsWithDisplayName operation to a typed request wrapper.
	 */
	export class ServerGetGroupsWithDisplayNameOperationRequest extends GetGroupsWithDisplayNameOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetGroupsWithDisplayNameOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerGetGroupsWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetGroupsWithDisplayNameRequestData;
		}
	}

	/**
	 * Maps the AdminGetGroupsWithDisplayName operation to a typed request wrapper.
	 */
	export class AdminGetGroupsWithDisplayNameOperationRequest extends GetGroupsWithDisplayNameOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetGroupsWithDisplayNameOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminGetGroupsWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetGroupsWithDisplayNameRequestData;
		}
	}

	/**
	 * Maps the GetGroupsWithSegment operation to a typed request wrapper.
	 */
	export class GetGroupsWithSegmentOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetGroupsWithSegmentRequestData> {
		protected override operationCode: string = OperationCode.GetGroupsWithSegment;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetGroupsWithSegmentOperationRequest instance.
		 */
		constructor(requestData: GroupModels.GetGroupsWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetGroupsWithSegmentRequestData;
		}
	}

	/**
	 * Maps the ServerGetGroupsWithSegment operation to a typed request wrapper.
	 */
	export class ServerGetGroupsWithSegmentOperationRequest extends GetGroupsWithSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetGroupsWithSegmentOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerGetGroupsWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetGroupsWithSegmentRequestData;
		}
	}

	/**
	 * Maps the AdminGetGroupsWithSegment operation to a typed request wrapper.
	 */
	export class AdminGetGroupsWithSegmentOperationRequest extends GetGroupsWithSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetGroupsWithSegmentOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminGetGroupsWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetGroupsWithSegmentRequestData;
		}
	}

	/**
	 * Maps the GetGroupsWithTag operation to a typed request wrapper.
	 */
	export class GetGroupsWithTagOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetGroupsWithTagRequestData> {
		protected override operationCode: string = OperationCode.GetGroupsWithTag;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetGroupsWithTagOperationRequest instance.
		 */
		constructor(requestData: GroupModels.GetGroupsWithTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetGroupsWithTagRequestData;
		}
	}

	/**
	 * Maps the ServerGetGroupsWithTag operation to a typed request wrapper.
	 */
	export class ServerGetGroupsWithTagOperationRequest extends GetGroupsWithTagOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetGroupsWithTagOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerGetGroupsWithTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetGroupsWithTagRequestData;
		}
	}

	/**
	 * Maps the AdminGetGroupsWithTag operation to a typed request wrapper.
	 */
	export class AdminGetGroupsWithTagOperationRequest extends GetGroupsWithTagOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetGroupsWithTagOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminGetGroupsWithTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetGroupsWithTagRequestData;
		}
	}

	/**
	 * Maps the GetMembers operation to a typed request wrapper.
	 */
	export class GetMembersOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetMembersRequestData> {
		protected override operationCode: string = OperationCode.GetMembers;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetMembersOperationRequest instance.
		 */
		constructor(requestData: GroupModels.GetMembersRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetMembersRequestData;
		}
	}

	/**
	 * Maps the ServerGetMembers operation to a typed request wrapper.
	 */
	export class ServerGetMembersOperationRequest extends GetMembersOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetMembersOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerGetMembersRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetMembersRequestData;
		}
	}

	/**
	 * Maps the AdminGetMembers operation to a typed request wrapper.
	 */
	export class AdminGetMembersOperationRequest extends GetMembersOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetMembersOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminGetMembersRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetMembersRequestData;
		}
	}

	/**
	 * Maps the GetRemoveStatus operation to a typed request wrapper.
	 */
	export class GetRemoveStatusOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetRemoveStatusRequestData> {
		protected override operationCode: string = OperationCode.GetRemoveStatus;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetRemoveStatusOperationRequest instance.
		 */
		constructor(requestData: GroupModels.GetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetRemoveStatusRequestData;
		}
	}

	/**
	 * Maps the ServerGetRemoveStatus operation to a typed request wrapper.
	 */
	export class ServerGetRemoveStatusOperationRequest extends GetRemoveStatusOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetRemoveStatusOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerGetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetRemoveStatusRequestData;
		}
	}

	/**
	 * Maps the AdminGetRemoveStatus operation to a typed request wrapper.
	 */
	export class AdminGetRemoveStatusOperationRequest extends GetRemoveStatusOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetRemoveStatusOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminGetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetRemoveStatusRequestData;
		}
	}

	/**
	 * Maps the GetSegment operation to a typed request wrapper.
	 */
	export class GetSegmentOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetSegmentRequestData> {
		protected override operationCode: string = OperationCode.GetSegment;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetSegmentOperationRequest instance.
		 */
		constructor(requestData: GroupModels.GetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetSegmentRequestData;
		}
	}

	/**
	 * Maps the ServerGetSegment operation to a typed request wrapper.
	 */
	export class ServerGetSegmentOperationRequest extends GetSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetSegmentOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerGetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetSegmentRequestData;
		}
	}

	/**
	 * Maps the AdminGetSegment operation to a typed request wrapper.
	 */
	export class AdminGetSegmentOperationRequest extends GetSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetSegmentOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminGetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetSegmentRequestData;
		}
	}

	/**
	 * Maps the GetStatisticsLeaderboardAroundGroup operation to a typed request wrapper.
	 */
	export class GetStatisticsLeaderboardAroundGroupOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetStatisticsLeaderboardAroundGroupRequestData> {
		protected override operationCode: string = OperationCode.GetStatisticsLeaderboardAroundGroup;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetStatisticsLeaderboardAroundGroupOperationRequest instance.
		 */
		constructor(requestData: GroupModels.GetStatisticsLeaderboardAroundGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetStatisticsLeaderboardAroundGroupRequestData;
		}
	}

	/**
	 * Maps the ServerGetStatisticsLeaderboardAroundGroup operation to a typed request wrapper.
	 */
	export class ServerGetStatisticsLeaderboardAroundGroupOperationRequest extends GetStatisticsLeaderboardAroundGroupOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetStatisticsLeaderboardAroundGroupOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerGetStatisticsLeaderboardAroundGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetStatisticsLeaderboardAroundGroupRequestData;
		}
	}

	/**
	 * Maps the AdminGetStatisticsLeaderboardAroundGroup operation to a typed request wrapper.
	 */
	export class AdminGetStatisticsLeaderboardAroundGroupOperationRequest extends GetStatisticsLeaderboardAroundGroupOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetStatisticsLeaderboardAroundGroupOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminGetStatisticsLeaderboardAroundGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetStatisticsLeaderboardAroundGroupRequestData;
		}
	}

	/**
	 * Maps the GetStatisticsLeaderboard operation to a typed request wrapper.
	 */
	export class GetStatisticsLeaderboardOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetStatisticsLeaderboardRequestData> {
		protected override operationCode: string = OperationCode.GetStatisticsLeaderboard;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetStatisticsLeaderboardOperationRequest instance.
		 */
		constructor(requestData: GroupModels.GetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetStatisticsLeaderboardRequestData;
		}
	}

	/**
	 * Maps the ServerGetStatisticsLeaderboard operation to a typed request wrapper.
	 */
	export class ServerGetStatisticsLeaderboardOperationRequest extends GetStatisticsLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetStatisticsLeaderboardOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerGetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetStatisticsLeaderboardRequestData;
		}
	}

	/**
	 * Maps the AdminGetStatisticsLeaderboard operation to a typed request wrapper.
	 */
	export class AdminGetStatisticsLeaderboardOperationRequest extends GetStatisticsLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetStatisticsLeaderboardOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminGetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetStatisticsLeaderboardRequestData;
		}
	}

	/**
	 * Maps the GetTag operation to a typed request wrapper.
	 */
	export class GetTagOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetTagRequestData> {
		protected override operationCode: string = OperationCode.GetTag;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetTagOperationRequest instance.
		 */
		constructor(requestData: GroupModels.GetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetTagRequestData;
		}
	}

	/**
	 * Maps the ServerGetTag operation to a typed request wrapper.
	 */
	export class ServerGetTagOperationRequest extends GetTagOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetTagOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerGetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetTagRequestData;
		}
	}

	/**
	 * Maps the AdminGetTag operation to a typed request wrapper.
	 */
	export class AdminGetTagOperationRequest extends GetTagOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetTagOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminGetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetTagRequestData;
		}
	}

	/**
	 * Maps the GetTsCreate operation to a typed request wrapper.
	 */
	export class GetTsCreateOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetTsCreateRequestData> {
		protected override operationCode: string = OperationCode.GetTsCreate;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetTsCreateOperationRequest instance.
		 */
		constructor(requestData: GroupModels.GetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetTsCreateRequestData;
		}
	}

	/**
	 * Maps the ServerGetTsCreate operation to a typed request wrapper.
	 */
	export class ServerGetTsCreateOperationRequest extends GetTsCreateOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetTsCreateOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerGetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetTsCreateRequestData;
		}
	}

	/**
	 * Maps the AdminGetTsCreate operation to a typed request wrapper.
	 */
	export class AdminGetTsCreateOperationRequest extends GetTsCreateOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetTsCreateOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminGetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetTsCreateRequestData;
		}
	}

	/**
	 * Maps the CreateGroupItem operation to a typed request wrapper.
	 */
	export class CreateGroupItemOperationRequest extends CustomOperationRequestAbstract<GroupModels.CreateGroupItemRequestData> {
		protected override operationCode: string = OperationCode.CreateGroupItem;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new CreateGroupItemOperationRequest instance.
		 */
		constructor(requestData: GroupModels.CreateGroupItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.CreateGroupItemRequestData;
		}
	}

	/**
	 * Maps the ServerCreateGroupItem operation to a typed request wrapper.
	 */
	export class ServerCreateGroupItemOperationRequest extends CreateGroupItemOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerCreateGroupItemOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerCreateGroupItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerCreateGroupItemRequestData;
		}
	}

	/**
	 * Maps the AdminCreateGroupItem operation to a typed request wrapper.
	 */
	export class AdminCreateGroupItemOperationRequest extends CreateGroupItemOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminCreateGroupItemOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminCreateGroupItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminCreateGroupItemRequestData;
		}
	}

	/**
	 * Maps the RemoveGroupItem operation to a typed request wrapper.
	 */
	export class RemoveGroupItemOperationRequest extends CustomOperationRequestAbstract<GroupModels.RemoveGroupItemRequestData> {
		protected override operationCode: string = OperationCode.RemoveGroupItem;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new RemoveGroupItemOperationRequest instance.
		 */
		constructor(requestData: GroupModels.RemoveGroupItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.RemoveGroupItemRequestData;
		}
	}

	/**
	 * Maps the ServerRemoveGroupItem operation to a typed request wrapper.
	 */
	export class ServerRemoveGroupItemOperationRequest extends RemoveGroupItemOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerRemoveGroupItemOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerRemoveGroupItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerRemoveGroupItemRequestData;
		}
	}

	/**
	 * Maps the AdminRemoveGroupItem operation to a typed request wrapper.
	 */
	export class AdminRemoveGroupItemOperationRequest extends RemoveGroupItemOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminRemoveGroupItemOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminRemoveGroupItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminRemoveGroupItemRequestData;
		}
	}

	/**
	 * Maps the RemoveMember operation to a typed request wrapper.
	 */
	export class RemoveMemberOperationRequest extends CustomOperationRequestAbstract<GroupModels.RemoveMemberRequestData> {
		protected override operationCode: string = OperationCode.RemoveMember;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new RemoveMemberOperationRequest instance.
		 */
		constructor(requestData: GroupModels.RemoveMemberRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.RemoveMemberRequestData;
		}
	}

	/**
	 * Maps the ServerRemoveMember operation to a typed request wrapper.
	 */
	export class ServerRemoveMemberOperationRequest extends RemoveMemberOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerRemoveMemberOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerRemoveMemberRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerRemoveMemberRequestData;
		}
	}

	/**
	 * Maps the AdminRemoveMember operation to a typed request wrapper.
	 */
	export class AdminRemoveMemberOperationRequest extends RemoveMemberOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminRemoveMemberOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminRemoveMemberRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminRemoveMemberRequestData;
		}
	}

	/**
	 * Maps the RemoveSegment operation to a typed request wrapper.
	 */
	export class RemoveSegmentOperationRequest extends CustomOperationRequestAbstract<GroupModels.RemoveSegmentRequestData> {
		protected override operationCode: string = OperationCode.RemoveSegment;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new RemoveSegmentOperationRequest instance.
		 */
		constructor(requestData: GroupModels.RemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.RemoveSegmentRequestData;
		}
	}

	/**
	 * Maps the ServerRemoveSegment operation to a typed request wrapper.
	 */
	export class ServerRemoveSegmentOperationRequest extends RemoveSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerRemoveSegmentOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerRemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerRemoveSegmentRequestData;
		}
	}

	/**
	 * Maps the AdminRemoveSegment operation to a typed request wrapper.
	 */
	export class AdminRemoveSegmentOperationRequest extends RemoveSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminRemoveSegmentOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminRemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminRemoveSegmentRequestData;
		}
	}

	/**
	 * Maps the RemoveTag operation to a typed request wrapper.
	 */
	export class RemoveTagOperationRequest extends CustomOperationRequestAbstract<GroupModels.RemoveTagRequestData> {
		protected override operationCode: string = OperationCode.RemoveTag;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new RemoveTagOperationRequest instance.
		 */
		constructor(requestData: GroupModels.RemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.RemoveTagRequestData;
		}
	}

	/**
	 * Maps the ServerRemoveTag operation to a typed request wrapper.
	 */
	export class ServerRemoveTagOperationRequest extends RemoveTagOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerRemoveTagOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerRemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerRemoveTagRequestData;
		}
	}

	/**
	 * Maps the AdminRemoveTag operation to a typed request wrapper.
	 */
	export class AdminRemoveTagOperationRequest extends RemoveTagOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminRemoveTagOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminRemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminRemoveTagRequestData;
		}
	}

	/**
	 * Maps the SendGroupMessage operation to a typed request wrapper.
	 */
	export class SendGroupMessageOperationRequest extends CustomOperationRequestAbstract<GroupModels.SendGroupMessageRequestData> {
		protected override operationCode: string = OperationCode.SendGroupMessage;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SendGroupMessageOperationRequest instance.
		 */
		constructor(requestData: GroupModels.SendGroupMessageRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.SendGroupMessageRequestData;
		}
	}

	/**
	 * Maps the ServerSendGroupMessage operation to a typed request wrapper.
	 */
	export class ServerSendGroupMessageOperationRequest extends SendGroupMessageOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerSendGroupMessageOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerSendGroupMessageRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerSendGroupMessageRequestData;
		}
	}

	/**
	 * Maps the AdminSendGroupMessage operation to a typed request wrapper.
	 */
	export class AdminSendGroupMessageOperationRequest extends SendGroupMessageOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminSendGroupMessageOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminSendGroupMessageRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminSendGroupMessageRequestData;
		}
	}

	/**
	 * Maps the SetAvatar operation to a typed request wrapper.
	 */
	export class SetAvatarOperationRequest extends CustomOperationRequestAbstract<GroupModels.SetAvatarRequestData> {
		protected override operationCode: string = OperationCode.SetAvatar;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetAvatarOperationRequest instance.
		 */
		constructor(requestData: GroupModels.SetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.SetAvatarRequestData;
		}
	}

	/**
	 * Maps the ServerSetAvatar operation to a typed request wrapper.
	 */
	export class ServerSetAvatarOperationRequest extends SetAvatarOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerSetAvatarOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerSetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerSetAvatarRequestData;
		}
	}

	/**
	 * Maps the AdminSetAvatar operation to a typed request wrapper.
	 */
	export class AdminSetAvatarOperationRequest extends SetAvatarOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminSetAvatarOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminSetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminSetAvatarRequestData;
		}
	}

	/**
	 * Maps the SetCustomData operation to a typed request wrapper.
	 */
	export class SetCustomDataOperationRequest extends CustomOperationRequestAbstract<GroupModels.SetCustomDataRequestData> {
		protected override operationCode: string = OperationCode.SetCustomData;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetCustomDataOperationRequest instance.
		 */
		constructor(requestData: GroupModels.SetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.SetCustomDataRequestData;
		}
	}

	/**
	 * Maps the ServerSetCustomData operation to a typed request wrapper.
	 */
	export class ServerSetCustomDataOperationRequest extends SetCustomDataOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerSetCustomDataOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerSetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerSetCustomDataRequestData;
		}
	}

	/**
	 * Maps the AdminSetCustomData operation to a typed request wrapper.
	 */
	export class AdminSetCustomDataOperationRequest extends SetCustomDataOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminSetCustomDataOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminSetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminSetCustomDataRequestData;
		}
	}

	/**
	 * Maps the SetDisplayName operation to a typed request wrapper.
	 */
	export class SetDisplayNameOperationRequest extends CustomOperationRequestAbstract<GroupModels.SetDisplayNameRequestData> {
		protected override operationCode: string = OperationCode.SetDisplayName;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetDisplayNameOperationRequest instance.
		 */
		constructor(requestData: GroupModels.SetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.SetDisplayNameRequestData;
		}
	}

	/**
	 * Maps the ServerSetDisplayName operation to a typed request wrapper.
	 */
	export class ServerSetDisplayNameOperationRequest extends SetDisplayNameOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerSetDisplayNameOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerSetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerSetDisplayNameRequestData;
		}
	}

	/**
	 * Maps the AdminSetDisplayName operation to a typed request wrapper.
	 */
	export class AdminSetDisplayNameOperationRequest extends SetDisplayNameOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminSetDisplayNameOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminSetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminSetDisplayNameRequestData;
		}
	}

	/**
	 * Maps the ChangeGroupCurrency operation to a typed request wrapper.
	 */
	export class ChangeGroupCurrencyOperationRequest extends CustomOperationRequestAbstract<GroupModels.ChangeGroupCurrencyRequestData> {
		protected override operationCode: string = OperationCode.ChangeGroupCurrency;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new ChangeGroupCurrencyOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ChangeGroupCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ChangeGroupCurrencyRequestData;
		}
	}

	/**
	 * Maps the ServerChangeGroupCurrency operation to a typed request wrapper.
	 */
	export class ServerChangeGroupCurrencyOperationRequest extends ChangeGroupCurrencyOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerChangeGroupCurrencyOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerChangeGroupCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerChangeGroupCurrencyRequestData;
		}
	}

	/**
	 * Maps the AdminChangeGroupCurrency operation to a typed request wrapper.
	 */
	export class AdminChangeGroupCurrencyOperationRequest extends ChangeGroupCurrencyOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminChangeGroupCurrencyOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminChangeGroupCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminChangeGroupCurrencyRequestData;
		}
	}

	/**
	 * Maps the SetGroupData operation to a typed request wrapper.
	 */
	export class SetGroupDataOperationRequest extends CustomOperationRequestAbstract<GroupModels.SetGroupDataRequestData> {
		protected override operationCode: string = OperationCode.SetGroupData;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetGroupDataOperationRequest instance.
		 */
		constructor(requestData: GroupModels.SetGroupDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.SetGroupDataRequestData;
		}
	}

	/**
	 * Maps the ServerSetGroupData operation to a typed request wrapper.
	 */
	export class ServerSetGroupDataOperationRequest extends SetGroupDataOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerSetGroupDataOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerSetGroupDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerSetGroupDataRequestData;
		}
	}

	/**
	 * Maps the AdminSetGroupData operation to a typed request wrapper.
	 */
	export class AdminSetGroupDataOperationRequest extends SetGroupDataOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminSetGroupDataOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminSetGroupDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminSetGroupDataRequestData;
		}
	}

	/**
	 * Maps the ChangeGroupStatistics operation to a typed request wrapper.
	 */
	export class ChangeGroupStatisticsOperationRequest extends CustomOperationRequestAbstract<GroupModels.ChangeGroupStatisticsRequestData> {
		protected override operationCode: string = OperationCode.ChangeGroupStatistics;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new ChangeGroupStatisticsOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ChangeGroupStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ChangeGroupStatisticsRequestData;
		}
	}

	/**
	 * Maps the ServerChangeGroupStatistics operation to a typed request wrapper.
	 */
	export class ServerChangeGroupStatisticsOperationRequest extends ChangeGroupStatisticsOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerChangeGroupStatisticsOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerChangeGroupStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerChangeGroupStatisticsRequestData;
		}
	}

	/**
	 * Maps the AdminChangeGroupStatistics operation to a typed request wrapper.
	 */
	export class AdminChangeGroupStatisticsOperationRequest extends ChangeGroupStatisticsOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminChangeGroupStatisticsOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminChangeGroupStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminChangeGroupStatisticsRequestData;
		}
	}

	/**
	 * Maps the SetRemoveStatus operation to a typed request wrapper.
	 */
	export class SetRemoveStatusOperationRequest extends CustomOperationRequestAbstract<GroupModels.SetRemoveStatusRequestData> {
		protected override operationCode: string = OperationCode.SetRemoveStatus;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetRemoveStatusOperationRequest instance.
		 */
		constructor(requestData: GroupModels.SetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.SetRemoveStatusRequestData;
		}
	}

	/**
	 * Maps the ServerSetRemoveStatus operation to a typed request wrapper.
	 */
	export class ServerSetRemoveStatusOperationRequest extends SetRemoveStatusOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerSetRemoveStatusOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerSetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerSetRemoveStatusRequestData;
		}
	}

	/**
	 * Maps the AdminSetRemoveStatus operation to a typed request wrapper.
	 */
	export class AdminSetRemoveStatusOperationRequest extends SetRemoveStatusOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminSetRemoveStatusOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminSetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminSetRemoveStatusRequestData;
		}
	}

	/**
	 * Maps the SetTag operation to a typed request wrapper.
	 */
	export class SetTagOperationRequest extends CustomOperationRequestAbstract<GroupModels.SetTagRequestData> {
		protected override operationCode: string = OperationCode.SetTag;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetTagOperationRequest instance.
		 */
		constructor(requestData: GroupModels.SetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.SetTagRequestData;
		}
	}

	/**
	 * Maps the ServerSetTag operation to a typed request wrapper.
	 */
	export class ServerSetTagOperationRequest extends SetTagOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerSetTagOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerSetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerSetTagRequestData;
		}
	}

	/**
	 * Maps the AdminSetTag operation to a typed request wrapper.
	 */
	export class AdminSetTagOperationRequest extends SetTagOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminSetTagOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminSetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminSetTagRequestData;
		}
	}

	/**
	 * Maps the GetCurrencyLeaderboard operation to a typed request wrapper.
	 */
	export class GetCurrencyLeaderboardOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetCurrencyLeaderboardRequestData> {
		protected override operationCode: string = OperationCode.GetCurrencyLeaderboard;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetCurrencyLeaderboardOperationRequest instance.
		 */
		constructor(requestData: GroupModels.GetCurrencyLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetCurrencyLeaderboardRequestData;
		}
	}

	/**
	 * Maps the ServerGetCurrencyLeaderboard operation to a typed request wrapper.
	 */
	export class ServerGetCurrencyLeaderboardOperationRequest extends GetCurrencyLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetCurrencyLeaderboardOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerGetCurrencyLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetCurrencyLeaderboardRequestData;
		}
	}

	/**
	 * Maps the AdminGetCurrencyLeaderboard operation to a typed request wrapper.
	 */
	export class AdminGetCurrencyLeaderboardOperationRequest extends GetCurrencyLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetCurrencyLeaderboardOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminGetCurrencyLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetCurrencyLeaderboardRequestData;
		}
	}

	/**
	 * Maps the GetCreateLeaderboard operation to a typed request wrapper.
	 */
	export class GetCreateLeaderboardOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetCreateLeaderboardRequestData> {
		protected override operationCode: string = OperationCode.GetCreateLeaderboard;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetCreateLeaderboardOperationRequest instance.
		 */
		constructor(requestData: GroupModels.GetCreateLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetCreateLeaderboardRequestData;
		}
	}

	/**
	 * Maps the ServerGetCreateLeaderboard operation to a typed request wrapper.
	 */
	export class ServerGetCreateLeaderboardOperationRequest extends GetCreateLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetCreateLeaderboardOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerGetCreateLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetCreateLeaderboardRequestData;
		}
	}

	/**
	 * Maps the AdminGetCreateLeaderboard operation to a typed request wrapper.
	 */
	export class AdminGetCreateLeaderboardOperationRequest extends GetCreateLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetCreateLeaderboardOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminGetCreateLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetCreateLeaderboardRequestData;
		}
	}

	/**
	 * Maps the GetStatisticsLog operation to a typed request wrapper.
	 */
	export class GetStatisticsLogOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetStatisticsLogRequestData> {
		protected override operationCode: string = OperationCode.GetStatisticsLog;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetStatisticsLogOperationRequest instance.
		 */
		constructor(requestData: GroupModels.GetStatisticsLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetStatisticsLogRequestData;
		}
	}

	/**
	 * Maps the ServerGetStatisticsLog operation to a typed request wrapper.
	 */
	export class ServerGetStatisticsLogOperationRequest extends GetStatisticsLogOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetStatisticsLogOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerGetStatisticsLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetStatisticsLogRequestData;
		}
	}

	/**
	 * Maps the AdminGetStatisticsLog operation to a typed request wrapper.
	 */
	export class AdminGetStatisticsLogOperationRequest extends GetStatisticsLogOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetStatisticsLogOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminGetStatisticsLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetStatisticsLogRequestData;
		}
	}

	/**
	 * Maps the GetCurrencyLog operation to a typed request wrapper.
	 */
	export class GetCurrencyLogOperationRequest extends CustomOperationRequestAbstract<GroupModels.GetCurrencyLogRequestData> {
		protected override operationCode: string = OperationCode.GetCurrencyLog;
		protected override requestType: RequestType = RequestType.Group;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetCurrencyLogOperationRequest instance.
		 */
		constructor(requestData: GroupModels.GetCurrencyLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.GetCurrencyLogRequestData;
		}
	}

	/**
	 * Maps the ServerGetCurrencyLog operation to a typed request wrapper.
	 */
	export class ServerGetCurrencyLogOperationRequest extends GetCurrencyLogOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetCurrencyLogOperationRequest instance.
		 */
		constructor(requestData: GroupModels.ServerGetCurrencyLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.ServerGetCurrencyLogRequestData;
		}
	}

	/**
	 * Maps the AdminGetCurrencyLog operation to a typed request wrapper.
	 */
	export class AdminGetCurrencyLogOperationRequest extends GetCurrencyLogOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetCurrencyLogOperationRequest instance.
		 */
		constructor(requestData: GroupModels.AdminGetCurrencyLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GroupModels.AdminGetCurrencyLogRequestData;
		}
	}

}
