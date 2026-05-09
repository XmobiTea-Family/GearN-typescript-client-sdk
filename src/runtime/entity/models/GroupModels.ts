import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";
import { GenericModels } from "./GenericModels";

/**
 * Reusable request and response DTOs for the Group domain.
 *
 * Group operations target a **specific group entity** by
 * `groupId`. On the client variants the backend additionally
 * cross-checks that the authenticated player is currently a
 * member with the right role (e.g. `Officer` to invite,
 * `Owner` to disband).
 *
 * Three role variants per operation:
 * - **Client** (no prefix): used by `GNNetwork.group`, scoped
 *   to groups the caller has permission to act on.
 * - **`Server*`**: used by `GNNetwork.group.server`, can act on
 *   any group with a valid server `secretKey`.
 * - **`Admin*`**: used by `GNNetwork.group.admin`, full
 *   privileged access for backoffice tooling.
 *
 * Group state changes propagate to every connected member
 * device through the realtime events
 * {@link OnGroupMemberUpdateEventHandler} (member roster) and
 * {@link OnGroupMessageUpdateEventHandler} (chat / wall).
 */
export namespace GroupModels {

	/**
	 * Selects which optional group fields and lightweight relations should be returned.
	 * Boolean flags default to `false`; key arrays narrow list-style fields to specific keys only.
	 */
	export class InfoRequestParam {
		/**
		 * Includes the group catalog ID.
		 */
		@BooleanDataMember({ code: ParameterCode.CatalogId, isOptional: true, defaultValue: false })
		public catalogId?: boolean;

		/**
		 * Includes lightweight member items for the group.
		 */
		@BooleanDataMember({ code: ParameterCode.Members, isOptional: true, defaultValue: false })
		public members?: boolean;

		@BooleanDataMember({ code: ParameterCode.RemoveStatus, isOptional: true, defaultValue: false })
		public removeStatus?: boolean;

		@BooleanDataMember({ code: ParameterCode.Segments, isOptional: true, defaultValue: false })
		public segments?: boolean;

		@BooleanDataMember({ code: ParameterCode.CustomDatas, isOptional: true, defaultValue: false })
		public customDatas?: boolean;

		@BooleanDataMember({ code: ParameterCode.DisplayName, isOptional: true, defaultValue: false })
		public displayName?: boolean;

		@BooleanDataMember({ code: ParameterCode.Avatar, isOptional: true, defaultValue: false })
		public avatar?: boolean;

		@BooleanDataMember({ code: ParameterCode.TsCreate, isOptional: true, defaultValue: false })
		public tsCreate?: boolean;

		@BooleanDataMember({ code: ParameterCode.Tags, isOptional: true, defaultValue: false })
		public tags?: boolean;

		@BooleanDataMember({ code: ParameterCode.GroupCurrencies, isOptional: true, defaultValue: false })
		public groupCurrencies?: boolean;

		@BooleanDataMember({ code: ParameterCode.GroupStatistics, isOptional: true, defaultValue: false })
		public groupStatistics?: boolean;

		@BooleanDataMember({ code: ParameterCode.GroupDatas, isOptional: true, defaultValue: false })
		public groupDatas?: boolean;

		/**
		 * Includes lightweight inventory relation items for the group, optionally filtered by `itemCatalogIds`.
		 */
		@BooleanDataMember({ code: ParameterCode.GroupInventories, isOptional: true, defaultValue: false })
		public groupInventories?: boolean;

		@GNArrayDataMember({ code: ParameterCode.GroupDataKeys, isOptional: true, elementCls: String })
		public groupDataKeys?: Array<string>;

		@GNArrayDataMember({ code: ParameterCode.GroupCurrencyKeys, isOptional: true, elementCls: String })
		public groupCurrencyKeys?: Array<string>;

		@GNArrayDataMember({ code: ParameterCode.GroupStatisticsKeys, isOptional: true, elementCls: String })
		public groupStatisticsKeys?: Array<string>;

		@GNArrayDataMember({ code: ParameterCode.CustomDataKeys, isOptional: true, elementCls: String })
		public customDataKeys?: Array<string>;

		@GNArrayDataMember({ code: ParameterCode.TagKeys, isOptional: true, elementCls: String })
		public tagKeys?: Array<string>;

		/**
		 * Restricts `groupInventories` to relation items whose catalog IDs match this list.
		 */
		@GNArrayDataMember({ code: ParameterCode.ItemCatalogIds, isOptional: true, elementCls: String })
		public itemCatalogIds?: Array<string>;

	}

	/**
	 * Defines the reusable parameter block CustomDataParam.
	 */
	export class CustomDataParam {
		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@DataMember({ code: ParameterCode.Value })
		public value: any;

	}

	/**
	 * Defines the reusable parameter block GroupCurrencyParam.
	 */
	export class GroupCurrencyParam {
		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@NumberDataMember({ code: ParameterCode.Amount })
		public amount: number;

	}

	/**
	 * Defines the reusable parameter block GroupDataParam.
	 */
	export class GroupDataParam {
		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@DataMember({ code: ParameterCode.Value })
		public value: any;

	}

	/**
	 * Describes one game-player member referenced by a group workflow.
	 */
	export class GroupMemberParam {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 11, mustNonNull: true })
		public userId: string;

	}

	/**
	 * Defines the reusable parameter block GroupStatisticsParam.
	 */
	export class GroupStatisticsParam {
		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@NumberDataMember({ code: ParameterCode.Value })
		public value: number;

	}

	/**
	 * Defines the request payload for AddMember.
	 */
	export class AddMemberRequestData {
		@StringDataMember({ code: ParameterCode.MemberId, minLength: 10, maxLength: 11, mustNonNull: true })
		public memberId: string;

		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

	}

	/**
	 * Defines the request payload for ServerAddMember.
	 */
	export class ServerAddMemberRequestData extends AddMemberRequestData {
	}

	/**
	 * Defines the request payload for AdminAddMember.
	 */
	export class AdminAddMemberRequestData extends ServerAddMemberRequestData {
	}

	/**
	 * Defines the request payload for AddSegment.
	 */
	export class AddSegmentRequestData {
		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@StringDataMember({ code: ParameterCode.Value, minLength: 6, maxLength: 32, mustNonNull: true })
		public value: string;

	}

	/**
	 * Defines the request payload for ServerAddSegment.
	 */
	export class ServerAddSegmentRequestData extends AddSegmentRequestData {
	}

	/**
	 * Defines the request payload for AdminAddSegment.
	 */
	export class AdminAddSegmentRequestData extends ServerAddSegmentRequestData {
	}

	/**
	 * Defines the request payload for GetAvatar.
	 */
	export class GetAvatarRequestData {
		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

	}

	/**
	 * Defines the request payload for ServerGetAvatar.
	 */
	export class ServerGetAvatarRequestData extends GetAvatarRequestData {
	}

	/**
	 * Defines the request payload for AdminGetAvatar.
	 */
	export class AdminGetAvatarRequestData extends ServerGetAvatarRequestData {
	}

	/**
	 * Defines the request payload for GetCatalogId.
	 */
	export class GetCatalogIdRequestData {
		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

	}

	/**
	 * Defines the request payload for ServerGetCatalogId.
	 */
	export class ServerGetCatalogIdRequestData extends GetCatalogIdRequestData {
	}

	/**
	 * Defines the request payload for AdminGetCatalogId.
	 */
	export class AdminGetCatalogIdRequestData extends ServerGetCatalogIdRequestData {
	}

	/**
	 * Defines the request payload for GetCustomData.
	 */
	export class GetCustomDataRequestData {
		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@GNArrayDataMember({ code: ParameterCode.CustomDataKeys, isOptional: true, elementCls: String })
		public customDataKeys?: Array<string>;

	}

	/**
	 * Defines the request payload for ServerGetCustomData.
	 */
	export class ServerGetCustomDataRequestData extends GetCustomDataRequestData {
	}

	/**
	 * Defines the request payload for AdminGetCustomData.
	 */
	export class AdminGetCustomDataRequestData extends ServerGetCustomDataRequestData {
	}

	/**
	 * Defines the request payload for GetDisplayName.
	 */
	export class GetDisplayNameRequestData {
		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

	}

	/**
	 * Defines the request payload for ServerGetDisplayName.
	 */
	export class ServerGetDisplayNameRequestData extends GetDisplayNameRequestData {
	}

	/**
	 * Defines the request payload for AdminGetDisplayName.
	 */
	export class AdminGetDisplayNameRequestData extends ServerGetDisplayNameRequestData {
	}

	/**
	 * Defines the request payload for GetGroupCurrency.
	 */
	export class GetGroupCurrencyRequestData {
		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@GNArrayDataMember({ code: ParameterCode.GroupCurrencyKeys, isOptional: true, elementCls: String })
		public groupCurrencyKeys?: Array<string>;

	}

	/**
	 * Defines the request payload for ServerGetGroupCurrency.
	 */
	export class ServerGetGroupCurrencyRequestData extends GetGroupCurrencyRequestData {
	}

	/**
	 * Defines the request payload for AdminGetGroupCurrency.
	 */
	export class AdminGetGroupCurrencyRequestData extends ServerGetGroupCurrencyRequestData {
	}

	/**
	 * Defines the request payload for GetGroupData.
	 */
	export class GetGroupDataRequestData {
		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@GNArrayDataMember({ code: ParameterCode.GroupDataKeys, isOptional: true, elementCls: String })
		public groupDataKeys?: Array<string>;

	}

	/**
	 * Defines the request payload for ServerGetGroupData.
	 */
	export class ServerGetGroupDataRequestData extends GetGroupDataRequestData {
	}

	/**
	 * Defines the request payload for AdminGetGroupData.
	 */
	export class AdminGetGroupDataRequestData extends ServerGetGroupDataRequestData {
	}

	/**
	 * Defines the request payload for GetGroupInformation.
	 */
	export class GetGroupInformationRequestData {
		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	/**
	 * Defines the request payload for ServerGetGroupInformation.
	 */
	export class ServerGetGroupInformationRequestData extends GetGroupInformationRequestData {
	}

	/**
	 * Defines the request payload for AdminGetGroupInformation.
	 */
	export class AdminGetGroupInformationRequestData extends ServerGetGroupInformationRequestData {
	}

	/**
	 * Defines the request payload for GetGroupInventory.
	 */
	export class GetGroupInventoryRequestData {
		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@GNArrayDataMember({ code: ParameterCode.ItemCatalogIds, isOptional: true, elementCls: String })
		public itemCatalogIds?: Array<string>;

	}

	/**
	 * Defines the request payload for ServerGetGroupInventory.
	 */
	export class ServerGetGroupInventoryRequestData extends GetGroupInventoryRequestData {
	}

	/**
	 * Defines the request payload for AdminGetGroupInventory.
	 */
	export class AdminGetGroupInventoryRequestData extends ServerGetGroupInventoryRequestData {
	}

	/**
	 * Reads persisted group messages using skip/limit pagination.
	 */
	export class GetGroupMessageRequestData {
		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@NumberDataMember({ code: ParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

	}

	/**
	 * Defines the request payload for ServerGetGroupMessage.
	 */
	export class ServerGetGroupMessageRequestData extends GetGroupMessageRequestData {
	}

	/**
	 * Defines the request payload for AdminGetGroupMessage.
	 */
	export class AdminGetGroupMessageRequestData extends ServerGetGroupMessageRequestData {
	}

	/**
	 * Defines the request payload for GetGroupStatistics.
	 */
	export class GetGroupStatisticsRequestData {
		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@GNArrayDataMember({ code: ParameterCode.StatisticsKeys, isOptional: true, elementCls: String })
		public statisticsKeys?: Array<string>;

	}

	/**
	 * Defines the request payload for ServerGetGroupStatistics.
	 */
	export class ServerGetGroupStatisticsRequestData extends GetGroupStatisticsRequestData {
	}

	/**
	 * Defines the request payload for AdminGetGroupStatistics.
	 */
	export class AdminGetGroupStatisticsRequestData extends ServerGetGroupStatisticsRequestData {
	}

	/**
	 * Defines the request payload for GetGroupsWithDisplayName.
	 */
	export class GetGroupsWithDisplayNameRequestData {
		@StringDataMember({ code: ParameterCode.Keyword, minLength: 2, maxLength: 32 })
		public keyword: string;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: ParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

	}

	/**
	 * Defines the request payload for ServerGetGroupsWithDisplayName.
	 */
	export class ServerGetGroupsWithDisplayNameRequestData extends GetGroupsWithDisplayNameRequestData {
	}

	/**
	 * Defines the request payload for AdminGetGroupsWithDisplayName.
	 */
	export class AdminGetGroupsWithDisplayNameRequestData extends ServerGetGroupsWithDisplayNameRequestData {
	}

	/**
	 * Defines the request payload for GetGroupsWithSegment.
	 */
	export class GetGroupsWithSegmentRequestData {
		@StringDataMember({ code: ParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
		public value: string;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: ParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

	}

	/**
	 * Defines the request payload for ServerGetGroupsWithSegment.
	 */
	export class ServerGetGroupsWithSegmentRequestData extends GetGroupsWithSegmentRequestData {
	}

	/**
	 * Defines the request payload for AdminGetGroupsWithSegment.
	 */
	export class AdminGetGroupsWithSegmentRequestData extends ServerGetGroupsWithSegmentRequestData {
	}

	/**
	 * Defines the request payload for GetGroupsWithTag.
	 */
	export class GetGroupsWithTagRequestData {
		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@StringDataMember({ code: ParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
		public value: string;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: ParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

	}

	/**
	 * Defines the request payload for ServerGetGroupsWithTag.
	 */
	export class ServerGetGroupsWithTagRequestData extends GetGroupsWithTagRequestData {
	}

	/**
	 * Defines the request payload for AdminGetGroupsWithTag.
	 */
	export class AdminGetGroupsWithTagRequestData extends ServerGetGroupsWithTagRequestData {
	}

	/**
	 * Defines the request payload for GetMembers.
	 */
	export class GetMembersRequestData {
		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

	}

	/**
	 * Defines the request payload for ServerGetMembers.
	 */
	export class ServerGetMembersRequestData extends GetMembersRequestData {
	}

	/**
	 * Defines the request payload for AdminGetMembers.
	 */
	export class AdminGetMembersRequestData extends ServerGetMembersRequestData {
	}

	/**
	 * Defines the request payload for GetRemoveStatus.
	 */
	export class GetRemoveStatusRequestData {
		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

	}

	/**
	 * Defines the request payload for ServerGetRemoveStatus.
	 */
	export class ServerGetRemoveStatusRequestData extends GetRemoveStatusRequestData {
	}

	/**
	 * Defines the request payload for AdminGetRemoveStatus.
	 */
	export class AdminGetRemoveStatusRequestData extends ServerGetRemoveStatusRequestData {
	}

	/**
	 * Defines the request payload for GetSegment.
	 */
	export class GetSegmentRequestData {
		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

	}

	/**
	 * Defines the request payload for ServerGetSegment.
	 */
	export class ServerGetSegmentRequestData extends GetSegmentRequestData {
	}

	/**
	 * Defines the request payload for AdminGetSegment.
	 */
	export class AdminGetSegmentRequestData extends ServerGetSegmentRequestData {
	}

	/**
	 * Defines the request payload for GetStatisticsLeaderboardAroundGroup.
	 */
	export class GetStatisticsLeaderboardAroundGroupRequestData {
		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: ParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

		@BooleanDataMember({ code: ParameterCode.LoadFromCache, defaultValue: true, isOptional: true })
		public loadFromCache?: boolean;

		@StringDataMember({ code: ParameterCode.CatalogId, minLength: 2, maxLength: 32, mustNonNull: true, isOptional: true })
		public catalogId?: string;

	}

	/**
	 * Defines the request payload for ServerGetStatisticsLeaderboardAroundGroup.
	 */
	export class ServerGetStatisticsLeaderboardAroundGroupRequestData extends GetStatisticsLeaderboardAroundGroupRequestData {
	}

	/**
	 * Defines the request payload for AdminGetStatisticsLeaderboardAroundGroup.
	 */
	export class AdminGetStatisticsLeaderboardAroundGroupRequestData extends ServerGetStatisticsLeaderboardAroundGroupRequestData {
	}

	/**
	 * Defines the request payload for GetStatisticsLeaderboard.
	 */
	export class GetStatisticsLeaderboardRequestData {
		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: ParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

		@BooleanDataMember({ code: ParameterCode.LoadFromCache, defaultValue: true, isOptional: true })
		public loadFromCache?: boolean;

		@StringDataMember({ code: ParameterCode.Version, minLength: 2, maxLength: 32, mustNonNull: true, isOptional: true })
		public version?: string;

		@StringDataMember({ code: ParameterCode.CatalogId, minLength: 2, maxLength: 32, mustNonNull: true, isOptional: true })
		public catalogId?: string;

	}

	/**
	 * Defines the request payload for ServerGetStatisticsLeaderboard.
	 */
	export class ServerGetStatisticsLeaderboardRequestData extends GetStatisticsLeaderboardRequestData {
	}

	/**
	 * Defines the request payload for AdminGetStatisticsLeaderboard.
	 */
	export class AdminGetStatisticsLeaderboardRequestData extends ServerGetStatisticsLeaderboardRequestData {
	}

	/**
	 * Defines the request payload for GetCreateLeaderboard.
	 */
	export class GetCreateLeaderboardRequestData {
		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: ParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

		@BooleanDataMember({ code: ParameterCode.LoadFromCache, defaultValue: true, isOptional: true })
		public loadFromCache?: boolean;

	}

	/**
	 * Defines the request payload for ServerGetCreateLeaderboard.
	 */
	export class ServerGetCreateLeaderboardRequestData extends GetCreateLeaderboardRequestData {
	}

	/**
	 * Defines the request payload for AdminGetCreateLeaderboard.
	 */
	export class AdminGetCreateLeaderboardRequestData extends ServerGetCreateLeaderboardRequestData {
	}

	/**
	 * Defines the request payload for GetTag.
	 */
	export class GetTagRequestData {
		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@GNArrayDataMember({ code: ParameterCode.TagKeys, isOptional: true, elementCls: String })
		public tagKeys?: Array<string>;

	}

	/**
	 * Defines the request payload for ServerGetTag.
	 */
	export class ServerGetTagRequestData extends GetTagRequestData {
	}

	/**
	 * Defines the request payload for AdminGetTag.
	 */
	export class AdminGetTagRequestData extends ServerGetTagRequestData {
	}

	/**
	 * Defines the request payload for GetTsCreate.
	 */
	export class GetTsCreateRequestData {
		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

	}

	/**
	 * Defines the request payload for ServerGetTsCreate.
	 */
	export class ServerGetTsCreateRequestData extends GetTsCreateRequestData {
	}

	/**
	 * Defines the request payload for AdminGetTsCreate.
	 */
	export class AdminGetTsCreateRequestData extends ServerGetTsCreateRequestData {
	}

	/**
	 * Defines the request payload for CreateGroupItem.
	 */
	export class CreateGroupItemRequestData {
		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@StringDataMember({ code: ParameterCode.CatalogId, minLength: 2, maxLength: 32, mustNonNull: true })
		public catalogId: string;

		@StringDataMember({ code: ParameterCode.ClassId, minLength: 2, maxLength: 32, mustNonNull: true })
		public classId: string;

		@StringDataMember({ code: ParameterCode.DisplayName, defaultValue: "", isOptional: true })
		public displayName?: string;

		@NumberDataMember({ code: ParameterCode.Amount, defaultValue: 1, mustInt: true, minValue: 1, maxValue: 256, isOptional: true })
		public amount?: number;

	}

	/**
	 * Defines the request payload for ServerCreateGroupItem.
	 */
	export class ServerCreateGroupItemRequestData extends CreateGroupItemRequestData {
	}

	/**
	 * Defines the request payload for AdminCreateGroupItem.
	 */
	export class AdminCreateGroupItemRequestData extends ServerCreateGroupItemRequestData {
	}

	/**
	 * Defines the request payload for RemoveGroupItem.
	 */
	export class RemoveGroupItemRequestData {
		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

	}

	/**
	 * Defines the request payload for ServerRemoveGroupItem.
	 */
	export class ServerRemoveGroupItemRequestData extends RemoveGroupItemRequestData {
	}

	/**
	 * Defines the request payload for AdminRemoveGroupItem.
	 */
	export class AdminRemoveGroupItemRequestData extends ServerRemoveGroupItemRequestData {
	}

	/**
	 * Defines the request payload for RemoveMember.
	 */
	export class RemoveMemberRequestData {
		@StringDataMember({ code: ParameterCode.MemberId, minLength: 10, maxLength: 11, mustNonNull: true })
		public memberId: string;

		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

	}

	/**
	 * Defines the request payload for ServerRemoveMember.
	 */
	export class ServerRemoveMemberRequestData extends RemoveMemberRequestData {
	}

	/**
	 * Defines the request payload for AdminRemoveMember.
	 */
	export class AdminRemoveMemberRequestData extends ServerRemoveMemberRequestData {
	}

	/**
	 * Defines the request payload for RemoveSegment.
	 */
	export class RemoveSegmentRequestData {
		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@StringDataMember({ code: ParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
		public value: string;

	}

	/**
	 * Defines the request payload for ServerRemoveSegment.
	 */
	export class ServerRemoveSegmentRequestData extends RemoveSegmentRequestData {
	}

	/**
	 * Defines the request payload for AdminRemoveSegment.
	 */
	export class AdminRemoveSegmentRequestData extends ServerRemoveSegmentRequestData {
	}

	/**
	 * Defines the request payload for RemoveTag.
	 */
	export class RemoveTagRequestData {
		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

	}

	/**
	 * Defines the request payload for ServerRemoveTag.
	 */
	export class ServerRemoveTagRequestData extends RemoveTagRequestData {
	}

	/**
	 * Defines the request payload for AdminRemoveTag.
	 */
	export class AdminRemoveTagRequestData extends ServerRemoveTagRequestData {
	}

	/**
	 * Sends a group message through the HTTP group workflow.
	 * `senderId` is always required and must identify the logical sender explicitly.
	 */
	export class SendGroupMessageRequestData {
		@StringDataMember({ code: ParameterCode.SenderId, minLength: 10, maxLength: 11, mustNonNull: true })
		public senderId: string;

		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@StringDataMember({ code: ParameterCode.Message, minLength: 2, maxLength: 256, mustNonNull: true })
		public message: string;

	}

	/**
	 * Defines the request payload for ServerSendGroupMessage.
	 */
	export class ServerSendGroupMessageRequestData extends SendGroupMessageRequestData {
	}

	/**
	 * Defines the request payload for AdminSendGroupMessage.
	 */
	export class AdminSendGroupMessageRequestData extends ServerSendGroupMessageRequestData {
	}

	/**
	 * Defines the request payload for SetAvatar.
	 */
	export class SetAvatarRequestData {
		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@NumberDataMember({ code: ParameterCode.Type, mustInt: true })
		public type: number;

		@StringDataMember({ code: ParameterCode.Value, minLength: 1, maxLength: 128, mustNonNull: true })
		public value: string;

	}

	/**
	 * Defines the request payload for ServerSetAvatar.
	 */
	export class ServerSetAvatarRequestData extends SetAvatarRequestData {
	}

	/**
	 * Defines the request payload for AdminSetAvatar.
	 */
	export class AdminSetAvatarRequestData extends ServerSetAvatarRequestData {
	}

	/**
	 * Defines the request payload for SetCustomData.
	 */
	export class SetCustomDataRequestData {
		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@GNArrayDataMember({ code: ParameterCode.CustomDatas, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: CustomDataParam })
		public customDatas: Array<CustomDataParam>;

	}

	/**
	 * Defines the request payload for ServerSetCustomData.
	 */
	export class ServerSetCustomDataRequestData extends SetCustomDataRequestData {
	}

	/**
	 * Defines the request payload for AdminSetCustomData.
	 */
	export class AdminSetCustomDataRequestData extends ServerSetCustomDataRequestData {
	}

	/**
	 * Defines the request payload for SetDisplayName.
	 */
	export class SetDisplayNameRequestData {
		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@StringDataMember({ code: ParameterCode.DisplayName, minLength: 5, maxLength: 32, mustNonNull: true })
		public displayName: string;

	}

	/**
	 * Defines the request payload for ServerSetDisplayName.
	 */
	export class ServerSetDisplayNameRequestData extends SetDisplayNameRequestData {
	}

	/**
	 * Defines the request payload for AdminSetDisplayName.
	 */
	export class AdminSetDisplayNameRequestData extends ServerSetDisplayNameRequestData {
	}

	/**
	 * Defines the request payload for ChangeGroupCurrency.
	 */
	export class ChangeGroupCurrencyRequestData {
		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@GNArrayDataMember({ code: ParameterCode.GroupCurrencies, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: GroupCurrencyParam })
		public groupCurrencies: Array<GroupCurrencyParam>;

		@StringDataMember({ code: ParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
		public log?: string;

	}

	/**
	 * Defines the request payload for ServerChangeGroupCurrency.
	 */
	export class ServerChangeGroupCurrencyRequestData extends ChangeGroupCurrencyRequestData {
	}

	/**
	 * Defines the request payload for AdminChangeGroupCurrency.
	 */
	export class AdminChangeGroupCurrencyRequestData extends ServerChangeGroupCurrencyRequestData {
	}

	/**
	 * Defines the request payload for SetGroupData.
	 */
	export class SetGroupDataRequestData {
		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@GNArrayDataMember({ code: ParameterCode.GroupDatas, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: GroupDataParam })
		public groupDatas: Array<GroupDataParam>;

	}

	/**
	 * Defines the request payload for ServerSetGroupData.
	 */
	export class ServerSetGroupDataRequestData extends SetGroupDataRequestData {
	}

	/**
	 * Defines the request payload for AdminSetGroupData.
	 */
	export class AdminSetGroupDataRequestData extends ServerSetGroupDataRequestData {
	}

	/**
	 * Defines the request payload for ChangeGroupStatistics.
	 */
	export class ChangeGroupStatisticsRequestData {
		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@GNArrayDataMember({ code: ParameterCode.GroupStatistics, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: GroupStatisticsParam })
		public groupStatistics: Array<GroupStatisticsParam>;

		@StringDataMember({ code: ParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
		public log?: string;

	}

	/**
	 * Defines the request payload for ServerChangeGroupStatistics.
	 */
	export class ServerChangeGroupStatisticsRequestData extends ChangeGroupStatisticsRequestData {
	}

	/**
	 * Defines the request payload for AdminChangeGroupStatistics.
	 */
	export class AdminChangeGroupStatisticsRequestData extends ServerChangeGroupStatisticsRequestData {
	}

	/**
	 * Defines the request payload for SetRemoveStatus.
	 */
	export class SetRemoveStatusRequestData {
		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@StringDataMember({ code: ParameterCode.Reason, isOptional: true, defaultValue: "" })
		public reason?: string;

	}

	/**
	 * Defines the request payload for ServerSetRemoveStatus.
	 */
	export class ServerSetRemoveStatusRequestData extends SetRemoveStatusRequestData {
	}

	/**
	 * Defines the request payload for AdminSetRemoveStatus.
	 */
	export class AdminSetRemoveStatusRequestData extends ServerSetRemoveStatusRequestData {
	}

	/**
	 * Defines the request payload for SetTag.
	 */
	export class SetTagRequestData {
		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@StringDataMember({ code: ParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
		public value: string;

	}

	/**
	 * Defines the request payload for ServerSetTag.
	 */
	export class ServerSetTagRequestData extends SetTagRequestData {
	}

	/**
	 * Defines the request payload for AdminSetTag.
	 */
	export class AdminSetTagRequestData extends ServerSetTagRequestData {
	}

	/**
	 * Reads currency change logs for one group.
	 * Pagination is token-based rather than skip-based.
	 */
	export class GetCurrencyLogRequestData {
		@GNArrayDataMember({ code: ParameterCode.Keys, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: String, isOptional: true })
		public keys?: Array<string>;

		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true, isOptional: true })
		public groupId?: string;

		@NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

		/**
		 * Continuation token returned by the previous page.
		 */
		@StringDataMember({ code: ParameterCode.Token, minLength: 24, maxLength: 24, mustNonNull: true, isOptional: true })
		public token?: string;

	}

	/**
	 * Defines the request payload for ServerGetCurrencyLog.
	 */
	export class ServerGetCurrencyLogRequestData extends GetCurrencyLogRequestData {
	}

	/**
	 * Defines the request payload for AdminGetCurrencyLog.
	 */
	export class AdminGetCurrencyLogRequestData extends ServerGetCurrencyLogRequestData {
	}

	/**
	 * Reads statistic change logs for one group.
	 * Pagination is token-based rather than skip-based.
	 */
	export class GetStatisticsLogRequestData {
		@GNArrayDataMember({ code: ParameterCode.Keys, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: String, isOptional: true })
		public keys?: Array<string>;

		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true, isOptional: true })
		public groupId?: string;

		@NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

		/**
		 * Continuation token returned by the previous page.
		 */
		@StringDataMember({ code: ParameterCode.Token, minLength: 24, maxLength: 24, mustNonNull: true, isOptional: true })
		public token?: string;

	}

	/**
	 * Defines the request payload for ServerGetStatisticsLog.
	 */
	export class ServerGetStatisticsLogRequestData extends GetStatisticsLogRequestData {
	}

	/**
	 * Defines the request payload for AdminGetStatisticsLog.
	 */
	export class AdminGetStatisticsLogRequestData extends ServerGetStatisticsLogRequestData {
	}

	/**
	 * Contains the optional fields requested through `InfoRequestParam`.
	 */
	export class InfoResponseParameters {
		@StringDataMember({ code: ParameterCode.CatalogId, isOptional: true })
		public catalogId?: string;

		/**
		 * Lightweight member items for the group, not full player snapshots.
		 */
		@GNArrayDataMember({ code: ParameterCode.Members, isOptional: true, elementCls: GenericModels.MemberItem })
		public members?: Array<GenericModels.MemberItem>;

		@GNHashtableDataMember({ code: ParameterCode.RemoveStatus, isOptional: true })
		public removeStatus?: GenericModels.RemoveStatusItem;

		@GNArrayDataMember({ code: ParameterCode.Segments, isOptional: true, elementCls: String })
		public segments?: Array<string>;

		@GNArrayDataMember({ code: ParameterCode.CustomDatas, isOptional: true, elementCls: GenericModels.DataItem })
		public customDatas?: Array<GenericModels.DataItem>;

		@StringDataMember({ code: ParameterCode.DisplayName, isOptional: true })
		public displayName?: string;

		@GNHashtableDataMember({ code: ParameterCode.Avatar, isOptional: true })
		public avatar?: GenericModels.AvatarItem;

		@NumberDataMember({ code: ParameterCode.TsCreate, isOptional: true })
		public tsCreate?: number;

		@GNArrayDataMember({ code: ParameterCode.Tags, isOptional: true, elementCls: GenericModels.TagItem })
		public tags?: Array<GenericModels.TagItem>;

		@GNArrayDataMember({ code: ParameterCode.GroupDatas, isOptional: true, elementCls: GenericModels.DataItem })
		public groupDatas?: Array<GenericModels.DataItem>;

		@GNArrayDataMember({ code: ParameterCode.GroupCurrencies, isOptional: true, elementCls: GenericModels.CurrencyItem })
		public groupCurrencies?: Array<GenericModels.CurrencyItem>;

		@GNArrayDataMember({ code: ParameterCode.GroupStatistics, isOptional: true, elementCls: GenericModels.StatisticsItem })
		public groupStatistics?: Array<GenericModels.StatisticsItem>;

		/**
		 * Lightweight inventory relation items owned by the group.
		 */
		@GNArrayDataMember({ code: ParameterCode.GroupInventories, isOptional: true, elementCls: GenericModels.InventoryItem })
		public groupInventories?: Array<GenericModels.InventoryItem>;

	}

	/**
	 * Base group response envelope.
	 */
	export class GroupResponseData {
		/**
		 * Optional field bag controlled by the corresponding `InfoRequestParam`.
		 */
		@GNHashtableDataMember({ code: ParameterCode.InfoResponseParameters })
		public infoResponseParameters: InfoResponseParameters;

	}

	/**
	 * Group envelope that also exposes the resolved group ID.
	 */
	export class GroupWithGroupIdResponseData extends GroupResponseData {
		@StringDataMember({ code: ParameterCode.GroupId })
		public groupId: string;

	}

	/**
	 * Defines the response payload for GroupLeaderboard.
	 */
	export class GroupLeaderboardResponseData extends GroupWithGroupIdResponseData {
		@NumberDataMember({ code: ParameterCode.Position })
		public position: number;

		@NumberDataMember({ code: ParameterCode.BackupValue, isOptional: true })
		public backupValue?: number;

	}

	/**
	 * Describes one group statistics or currency change log entry.
	 */
	export class GroupLogResponseData {
		@StringDataMember({ code: ParameterCode.GroupId })
		public groupId: string;

		@NumberDataMember({ code: ParameterCode.TsCreate })
		public tsCreate: number;

		@StringDataMember({ code: ParameterCode.Log })
		public log: string;

		@StringDataMember({ code: ParameterCode.Key })
		public key: string;

		@NumberDataMember({ code: ParameterCode.Amount })
		public amount: number;

		@NumberDataMember({ code: ParameterCode.StartValue })
		public startValue: number;

		@NumberDataMember({ code: ParameterCode.FinalValue })
		public finalValue: number;

	}

	/**
	 * Defines the response payload for GetStatisticsLeaderboard.
	 */
	export class GetStatisticsLeaderboardResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: GroupLeaderboardResponseData })
		public results: Array<GroupLeaderboardResponseData>;

		@NumberDataMember({ code: ParameterCode.TsCreate, isOptional: true })
		public tsCreate: number;

	}

	/**
	 * Defines the response payload for GroupsWithGroupId.
	 */
	export class GroupsWithGroupIdResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: GroupWithGroupIdResponseData })
		public results: Array<GroupWithGroupIdResponseData>;

	}

	/**
	 * Describes one persisted group-message entry.
	 */
	export class GroupMessageResponseData {
		@StringDataMember({ code: ParameterCode.Message })
		public message: string;

		@StringDataMember({ code: ParameterCode.SenderId })
		public senderId: string;

		/**
		 * Sender type value defined by backend message semantics.
		 */
		@NumberDataMember({ code: ParameterCode.SenderType })
		public senderType: number;

		@NumberDataMember({ code: ParameterCode.TsCreate })
		public tsCreate: number;

	}

	/**
	 * Returns one page of persisted group messages.
	 */
	export class GroupMessagesResponseData {
		@GNArrayDataMember({ code: ParameterCode.GroupMessages, elementCls: GroupMessageResponseData })
		public groupMessages: Array<GroupMessageResponseData>;

	}

	/**
	 * Defines the request payload for GetCurrencyLeaderboard.
	 */
	export class GetCurrencyLeaderboardRequestData {
		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: ParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

		@BooleanDataMember({ code: ParameterCode.LoadFromCache, defaultValue: true, isOptional: true })
		public loadFromCache?: boolean;

		@StringDataMember({ code: ParameterCode.CatalogId, minLength: 2, maxLength: 32, mustNonNull: true, isOptional: true })
		public catalogId?: string;

	}

	/**
	 * Defines the request payload for ServerGetCurrencyLeaderboard.
	 */
	export class ServerGetCurrencyLeaderboardRequestData extends GetCurrencyLeaderboardRequestData {
	}

	/**
	 * Defines the request payload for AdminGetCurrencyLeaderboard.
	 */
	export class AdminGetCurrencyLeaderboardRequestData extends ServerGetCurrencyLeaderboardRequestData {
	}

	/**
	 * Defines the response payload for GetCurrencyLeaderboard.
	 */
	export class GetCurrencyLeaderboardResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: GroupLeaderboardResponseData })
		public results: Array<GroupLeaderboardResponseData>;

	}

	/**
	 * Defines the response payload for GetCreateLeaderboard.
	 */
	export class GetCreateLeaderboardResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: GroupLeaderboardResponseData })
		public results: Array<GroupLeaderboardResponseData>;

	}

	/**
	 * Returns one page of statistics logs.
	 */
	export class GetStatisticsLogResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: GroupLogResponseData })
		public results: Array<GroupLogResponseData>;

		/**
		 * Continuation token for the next page, or `undefined` when pagination is exhausted.
		 */
		@StringDataMember({ code: ParameterCode.Token, isOptional: true })
		public token?: string;

	}

	/**
	 * Returns one page of currency logs.
	 */
	export class GetCurrencyLogResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: GroupLogResponseData })
		public results: Array<GroupLogResponseData>;

		/**
		 * Continuation token for the next page, or `undefined` when pagination is exhausted.
		 */
		@StringDataMember({ code: ParameterCode.Token, isOptional: true })
		public token?: string;

	}

	/**
	 * Defines an intentionally empty response payload.
	 */
	export class EmptyResponseData {
	}

}
