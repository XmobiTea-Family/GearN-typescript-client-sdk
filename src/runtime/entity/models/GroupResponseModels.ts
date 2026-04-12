import { CustomOperationResponseAbstract } from "./../response/CustomOperationResponse";
import { GroupModels } from "./GroupModels";

/**
 * Groups typed operation-response wrappers for `RequestType.Group`.
 * Many read operations resolve to `GroupResponseData` or a derived envelope whose
 * `infoResponseParameters` content is controlled by the matching request model.
 */
export namespace GroupResponseModels {
	/**
	 * Maps the AddMember operation to a typed response wrapper.
	 */
	export class AddMemberOperationResponse extends CustomOperationResponseAbstract<GroupModels.EmptyResponseData> {

		/**
		 * Creates a new AddMemberOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the AddSegment operation to a typed response wrapper.
	 */
	export class AddSegmentOperationResponse extends CustomOperationResponseAbstract<GroupModels.EmptyResponseData> {

		/**
		 * Creates a new AddSegmentOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the GetAvatar operation to a typed response wrapper.
	 */
	export class GetAvatarOperationResponse extends CustomOperationResponseAbstract<GroupModels.GroupResponseData> {

		/**
		 * Creates a new GetAvatarOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.GroupResponseData;
		}
	}

	/**
	 * Maps the GetCatalogId operation to a typed response wrapper.
	 */
	export class GetCatalogIdOperationResponse extends CustomOperationResponseAbstract<GroupModels.GroupResponseData> {

		/**
		 * Creates a new GetCatalogIdOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.GroupResponseData;
		}
	}

	/**
	 * Maps the GetCustomData operation to a typed response wrapper.
	 */
	export class GetCustomDataOperationResponse extends CustomOperationResponseAbstract<GroupModels.GroupResponseData> {

		/**
		 * Creates a new GetCustomDataOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.GroupResponseData;
		}
	}

	/**
	 * Maps the GetDisplayName operation to a typed response wrapper.
	 */
	export class GetDisplayNameOperationResponse extends CustomOperationResponseAbstract<GroupModels.GroupResponseData> {

		/**
		 * Creates a new GetDisplayNameOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.GroupResponseData;
		}
	}

	/**
	 * Maps the GetGroupCurrency operation to a typed response wrapper.
	 */
	export class GetGroupCurrencyOperationResponse extends CustomOperationResponseAbstract<GroupModels.GroupResponseData> {

		/**
		 * Creates a new GetGroupCurrencyOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.GroupResponseData;
		}
	}

	/**
	 * Maps the GetGroupData operation to a typed response wrapper.
	 */
	export class GetGroupDataOperationResponse extends CustomOperationResponseAbstract<GroupModels.GroupResponseData> {

		/**
		 * Creates a new GetGroupDataOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.GroupResponseData;
		}
	}

	/**
	 * Maps the GetGroupInformation operation to a typed response wrapper.
	 */
	export class GetGroupInformationOperationResponse extends CustomOperationResponseAbstract<GroupModels.GroupResponseData> {

		/**
		 * Creates a new GetGroupInformationOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.GroupResponseData;
		}
	}

	/**
	 * Maps the GetGroupInventory operation to a typed response wrapper.
	 */
	export class GetGroupInventoryOperationResponse extends CustomOperationResponseAbstract<GroupModels.GroupResponseData> {

		/**
		 * Creates a new GetGroupInventoryOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.GroupResponseData;
		}
	}

	/**
	 * Maps the GetGroupMessage operation to a typed response wrapper.
	 */
	export class GetGroupMessageOperationResponse extends CustomOperationResponseAbstract<GroupModels.GroupMessagesResponseData> {

		/**
		 * Creates a new GetGroupMessageOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.GroupMessagesResponseData;
		}
	}

	/**
	 * Maps the GetGroupStatistics operation to a typed response wrapper.
	 */
	export class GetGroupStatisticsOperationResponse extends CustomOperationResponseAbstract<GroupModels.GroupResponseData> {

		/**
		 * Creates a new GetGroupStatisticsOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.GroupResponseData;
		}
	}

	/**
	 * Maps the GetGroupsWithDisplayName operation to a typed response wrapper.
	 */
	export class GetGroupsWithDisplayNameOperationResponse extends CustomOperationResponseAbstract<GroupModels.GroupsWithGroupIdResponseData> {

		/**
		 * Creates a new GetGroupsWithDisplayNameOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.GroupsWithGroupIdResponseData;
		}
	}

	/**
	 * Maps the GetGroupsWithSegment operation to a typed response wrapper.
	 */
	export class GetGroupsWithSegmentOperationResponse extends CustomOperationResponseAbstract<GroupModels.GroupsWithGroupIdResponseData> {

		/**
		 * Creates a new GetGroupsWithSegmentOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.GroupsWithGroupIdResponseData;
		}
	}

	/**
	 * Maps the GetGroupsWithTag operation to a typed response wrapper.
	 */
	export class GetGroupsWithTagOperationResponse extends CustomOperationResponseAbstract<GroupModels.GroupsWithGroupIdResponseData> {

		/**
		 * Creates a new GetGroupsWithTagOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.GroupsWithGroupIdResponseData;
		}
	}

	/**
	 * Maps the GetMembers operation to a typed response wrapper.
	 */
	export class GetMembersOperationResponse extends CustomOperationResponseAbstract<GroupModels.GroupResponseData> {

		/**
		 * Creates a new GetMembersOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.GroupResponseData;
		}
	}

	/**
	 * Maps the GetRemoveStatus operation to a typed response wrapper.
	 */
	export class GetRemoveStatusOperationResponse extends CustomOperationResponseAbstract<GroupModels.GroupResponseData> {

		/**
		 * Creates a new GetRemoveStatusOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.GroupResponseData;
		}
	}

	/**
	 * Maps the GetSegment operation to a typed response wrapper.
	 */
	export class GetSegmentOperationResponse extends CustomOperationResponseAbstract<GroupModels.GroupResponseData> {

		/**
		 * Creates a new GetSegmentOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.GroupResponseData;
		}
	}

	/**
	 * Maps the GetStatisticsLeaderboardAroundGroup operation to a typed response wrapper.
	 */
	export class GetStatisticsLeaderboardAroundGroupOperationResponse extends CustomOperationResponseAbstract<GroupModels.GetStatisticsLeaderboardResponseData> {

		/**
		 * Creates a new GetStatisticsLeaderboardAroundGroupOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.GetStatisticsLeaderboardResponseData;
		}
	}

	/**
	 * Maps the GetStatisticsLeaderboard operation to a typed response wrapper.
	 */
	export class GetStatisticsLeaderboardOperationResponse extends CustomOperationResponseAbstract<GroupModels.GetStatisticsLeaderboardResponseData> {

		/**
		 * Creates a new GetStatisticsLeaderboardOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.GetStatisticsLeaderboardResponseData;
		}
	}

	/**
	 * Maps the GetTag operation to a typed response wrapper.
	 */
	export class GetTagOperationResponse extends CustomOperationResponseAbstract<GroupModels.GroupResponseData> {

		/**
		 * Creates a new GetTagOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.GroupResponseData;
		}
	}

	/**
	 * Maps the GetTsCreate operation to a typed response wrapper.
	 */
	export class GetTsCreateOperationResponse extends CustomOperationResponseAbstract<GroupModels.GroupResponseData> {

		/**
		 * Creates a new GetTsCreateOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.GroupResponseData;
		}
	}

	/**
	 * Maps the CreateGroupItem operation to a typed response wrapper.
	 */
	export class CreateGroupItemOperationResponse extends CustomOperationResponseAbstract<GroupModels.GroupResponseData> {

		/**
		 * Creates a new CreateGroupItemOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.GroupResponseData;
		}
	}

	/**
	 * Maps the RemoveGroupItem operation to a typed response wrapper.
	 */
	export class RemoveGroupItemOperationResponse extends CustomOperationResponseAbstract<GroupModels.EmptyResponseData> {

		/**
		 * Creates a new RemoveGroupItemOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the RemoveMember operation to a typed response wrapper.
	 */
	export class RemoveMemberOperationResponse extends CustomOperationResponseAbstract<GroupModels.EmptyResponseData> {

		/**
		 * Creates a new RemoveMemberOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the RemoveSegment operation to a typed response wrapper.
	 */
	export class RemoveSegmentOperationResponse extends CustomOperationResponseAbstract<GroupModels.EmptyResponseData> {

		/**
		 * Creates a new RemoveSegmentOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the RemoveTag operation to a typed response wrapper.
	 */
	export class RemoveTagOperationResponse extends CustomOperationResponseAbstract<GroupModels.EmptyResponseData> {

		/**
		 * Creates a new RemoveTagOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the SendGroupMessage operation to a typed response wrapper.
	 */
	export class SendGroupMessageOperationResponse extends CustomOperationResponseAbstract<GroupModels.GroupMessagesResponseData> {

		/**
		 * Creates a new SendGroupMessageOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.GroupMessagesResponseData;
		}
	}

	/**
	 * Maps the SetAvatar operation to a typed response wrapper.
	 */
	export class SetAvatarOperationResponse extends CustomOperationResponseAbstract<GroupModels.EmptyResponseData> {

		/**
		 * Creates a new SetAvatarOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the SetCustomData operation to a typed response wrapper.
	 */
	export class SetCustomDataOperationResponse extends CustomOperationResponseAbstract<GroupModels.GroupResponseData> {

		/**
		 * Creates a new SetCustomDataOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.GroupResponseData;
		}
	}

	/**
	 * Maps the SetDisplayName operation to a typed response wrapper.
	 */
	export class SetDisplayNameOperationResponse extends CustomOperationResponseAbstract<GroupModels.EmptyResponseData> {

		/**
		 * Creates a new SetDisplayNameOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the ChangeGroupCurrency operation to a typed response wrapper.
	 */
	export class ChangeGroupCurrencyOperationResponse extends CustomOperationResponseAbstract<GroupModels.GroupResponseData> {

		/**
		 * Creates a new ChangeGroupCurrencyOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.GroupResponseData;
		}
	}

	/**
	 * Maps the SetGroupData operation to a typed response wrapper.
	 */
	export class SetGroupDataOperationResponse extends CustomOperationResponseAbstract<GroupModels.GroupResponseData> {

		/**
		 * Creates a new SetGroupDataOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.GroupResponseData;
		}
	}

	/**
	 * Maps the ChangeGroupStatistics operation to a typed response wrapper.
	 */
	export class ChangeGroupStatisticsOperationResponse extends CustomOperationResponseAbstract<GroupModels.GroupResponseData> {

		/**
		 * Creates a new ChangeGroupStatisticsOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.GroupResponseData;
		}
	}

	/**
	 * Maps the SetRemoveStatus operation to a typed response wrapper.
	 */
	export class SetRemoveStatusOperationResponse extends CustomOperationResponseAbstract<GroupModels.EmptyResponseData> {

		/**
		 * Creates a new SetRemoveStatusOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the SetTag operation to a typed response wrapper.
	 */
	export class SetTagOperationResponse extends CustomOperationResponseAbstract<GroupModels.EmptyResponseData> {

		/**
		 * Creates a new SetTagOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the GetCurrencyLeaderboard operation to a typed response wrapper.
	 */
	export class GetCurrencyLeaderboardOperationResponse extends CustomOperationResponseAbstract<GroupModels.GetCurrencyLeaderboardResponseData> {

		/**
		 * Creates a new GetCurrencyLeaderboardOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.GetCurrencyLeaderboardResponseData;
		}
	}

	/**
	 * Maps the GetCreateLeaderboard operation to a typed response wrapper.
	 */
	export class GetCreateLeaderboardOperationResponse extends CustomOperationResponseAbstract<GroupModels.GetCreateLeaderboardResponseData> {

		/**
		 * Creates a new GetCreateLeaderboardOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.GetCreateLeaderboardResponseData;
		}
	}

	/**
	 * Maps the GetStatisticsLog operation to a typed response wrapper.
	 */
	export class GetStatisticsLogOperationResponse extends CustomOperationResponseAbstract<GroupModels.GetStatisticsLogResponseData> {

		/**
		 * Creates a new GetStatisticsLogOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.GetStatisticsLogResponseData;
		}
	}

	/**
	 * Maps the GetCurrencyLog operation to a typed response wrapper.
	 */
	export class GetCurrencyLogOperationResponse extends CustomOperationResponseAbstract<GroupModels.GetCurrencyLogResponseData> {

		/**
		 * Creates a new GetCurrencyLogOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GroupModels.GetCurrencyLogResponseData;
		}
	}

}
