import { GNParameterCode } from "./../../constant/parameterCode/GNParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";
import { GenericModels } from "./GenericModels";

export namespace GroupModels {

	export class InfoRequestParam {
		@BooleanDataMember({ code: GNParameterCode.CatalogId, isOptional: true, defaultValue: false })
		public catalogId?: boolean;

		@BooleanDataMember({ code: GNParameterCode.Members, isOptional: true, defaultValue: false })
		public members?: boolean;

		@BooleanDataMember({ code: GNParameterCode.RemoveStatus, isOptional: true, defaultValue: false })
		public removeStatus?: boolean;

		@BooleanDataMember({ code: GNParameterCode.Segments, isOptional: true, defaultValue: false })
		public segments?: boolean;

		@BooleanDataMember({ code: GNParameterCode.CustomDatas, isOptional: true, defaultValue: false })
		public customDatas?: boolean;

		@BooleanDataMember({ code: GNParameterCode.DisplayName, isOptional: true, defaultValue: false })
		public displayName?: boolean;

		@BooleanDataMember({ code: GNParameterCode.Avatar, isOptional: true, defaultValue: false })
		public avatar?: boolean;

		@BooleanDataMember({ code: GNParameterCode.TsCreate, isOptional: true, defaultValue: false })
		public tsCreate?: boolean;

		@BooleanDataMember({ code: GNParameterCode.Tags, isOptional: true, defaultValue: false })
		public tags?: boolean;

		@BooleanDataMember({ code: GNParameterCode.GroupCurrencies, isOptional: true, defaultValue: false })
		public groupCurrencies?: boolean;

		@BooleanDataMember({ code: GNParameterCode.GroupStatistics, isOptional: true, defaultValue: false })
		public groupStatistics?: boolean;

		@BooleanDataMember({ code: GNParameterCode.GroupDatas, isOptional: true, defaultValue: false })
		public groupDatas?: boolean;

		@BooleanDataMember({ code: GNParameterCode.GroupInventories, isOptional: true, defaultValue: false })
		public groupInventories?: boolean;

		@GNArrayDataMember({ code: GNParameterCode.GroupDataKeys, isOptional: true, elementCls: String })
		public groupDataKeys?: Array<string>;

		@GNArrayDataMember({ code: GNParameterCode.GroupCurrencyKeys, isOptional: true, elementCls: String })
		public groupCurrencyKeys?: Array<string>;

		@GNArrayDataMember({ code: GNParameterCode.GroupStatisticsKeys, isOptional: true, elementCls: String })
		public groupStatisticsKeys?: Array<string>;

		@GNArrayDataMember({ code: GNParameterCode.CustomDataKeys, isOptional: true, elementCls: String })
		public customDataKeys?: Array<string>;

		@GNArrayDataMember({ code: GNParameterCode.TagKeys, isOptional: true, elementCls: String })
		public tagKeys?: Array<string>;

		@GNArrayDataMember({ code: GNParameterCode.ItemCatalogIds, isOptional: true, elementCls: String })
		public itemCatalogIds?: Array<string>;

	}

	export class CustomDataParam {
		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@DataMember({ code: GNParameterCode.Value })
		public value: any;

	}

	export class GroupCurrencyParam {
		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@NumberDataMember({ code: GNParameterCode.Amount })
		public amount: number;

	}

	export class GroupDataParam {
		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@DataMember({ code: GNParameterCode.Value })
		public value: any;

	}

	export class GroupMemberParam {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 11, mustNonNull: true })
		public userId: string;

		@NumberDataMember({ code: GNParameterCode.Role, mustInt: true })
		public role: number;

	}

	export class GroupStatisticsParam {
		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@NumberDataMember({ code: GNParameterCode.Value })
		public value: number;

	}

	export class AddMemberRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 11, mustNonNull: true })
		public userId: string;

		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

	}

	export class ServerAddMemberRequestData extends AddMemberRequestData {
	}

	export class AdminAddMemberRequestData extends ServerAddMemberRequestData {
	}

	export class AddSegmentRequestData {
		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@StringDataMember({ code: GNParameterCode.Value, minLength: 6, maxLength: 32, mustNonNull: true })
		public value: string;

	}

	export class ServerAddSegmentRequestData extends AddSegmentRequestData {
	}

	export class AdminAddSegmentRequestData extends ServerAddSegmentRequestData {
	}

	export class GetAvatarRequestData {
		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

	}

	export class ServerGetAvatarRequestData extends GetAvatarRequestData {
	}

	export class AdminGetAvatarRequestData extends ServerGetAvatarRequestData {
	}

	export class GetCatalogIdRequestData {
		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

	}

	export class ServerGetCatalogIdRequestData extends GetCatalogIdRequestData {
	}

	export class AdminGetCatalogIdRequestData extends ServerGetCatalogIdRequestData {
	}

	export class GetCustomDataRequestData {
		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@GNArrayDataMember({ code: GNParameterCode.CustomDataKeys, isOptional: true, elementCls: String })
		public customDataKeys?: Array<string>;

	}

	export class ServerGetCustomDataRequestData extends GetCustomDataRequestData {
	}

	export class AdminGetCustomDataRequestData extends ServerGetCustomDataRequestData {
	}

	export class GetDisplayNameRequestData {
		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

	}

	export class ServerGetDisplayNameRequestData extends GetDisplayNameRequestData {
	}

	export class AdminGetDisplayNameRequestData extends ServerGetDisplayNameRequestData {
	}

	export class GetGroupCurrencyRequestData {
		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@GNArrayDataMember({ code: GNParameterCode.GroupCurrencyKeys, isOptional: true, elementCls: String })
		public groupCurrencyKeys?: Array<string>;

	}

	export class ServerGetGroupCurrencyRequestData extends GetGroupCurrencyRequestData {
	}

	export class AdminGetGroupCurrencyRequestData extends ServerGetGroupCurrencyRequestData {
	}

	export class GetGroupDataRequestData {
		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@GNArrayDataMember({ code: GNParameterCode.GroupDataKeys, isOptional: true, elementCls: String })
		public groupDataKeys?: Array<string>;

	}

	export class ServerGetGroupDataRequestData extends GetGroupDataRequestData {
	}

	export class AdminGetGroupDataRequestData extends ServerGetGroupDataRequestData {
	}

	export class GetGroupInformationRequestData {
		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class ServerGetGroupInformationRequestData extends GetGroupInformationRequestData {
	}

	export class AdminGetGroupInformationRequestData extends ServerGetGroupInformationRequestData {
	}

	export class GetGroupInventoryRequestData {
		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@GNArrayDataMember({ code: GNParameterCode.ItemCatalogIds, isOptional: true, elementCls: String })
		public itemCatalogIds?: Array<string>;

	}

	export class ServerGetGroupInventoryRequestData extends GetGroupInventoryRequestData {
	}

	export class AdminGetGroupInventoryRequestData extends ServerGetGroupInventoryRequestData {
	}

	export class GetGroupMessageRequestData {
		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@NumberDataMember({ code: GNParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

	}

	export class ServerGetGroupMessageRequestData extends GetGroupMessageRequestData {
	}

	export class AdminGetGroupMessageRequestData extends ServerGetGroupMessageRequestData {
	}

	export class GetGroupStatisticsRequestData {
		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@GNArrayDataMember({ code: GNParameterCode.StatisticsKeys, isOptional: true, elementCls: String })
		public statisticsKeys?: Array<string>;

	}

	export class ServerGetGroupStatisticsRequestData extends GetGroupStatisticsRequestData {
	}

	export class AdminGetGroupStatisticsRequestData extends ServerGetGroupStatisticsRequestData {
	}

	export class GetGroupsWithDisplayNameRequestData {
		@StringDataMember({ code: GNParameterCode.Keyword, minLength: 2, maxLength: 32 })
		public keyword: string;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: GNParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

	}

	export class ServerGetGroupsWithDisplayNameRequestData extends GetGroupsWithDisplayNameRequestData {
	}

	export class AdminGetGroupsWithDisplayNameRequestData extends ServerGetGroupsWithDisplayNameRequestData {
	}

	export class GetGroupsWithSegmentRequestData {
		@StringDataMember({ code: GNParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
		public value: string;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: GNParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

	}

	export class ServerGetGroupsWithSegmentRequestData extends GetGroupsWithSegmentRequestData {
	}

	export class AdminGetGroupsWithSegmentRequestData extends ServerGetGroupsWithSegmentRequestData {
	}

	export class GetGroupsWithTagRequestData {
		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@StringDataMember({ code: GNParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
		public value: string;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: GNParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

	}

	export class ServerGetGroupsWithTagRequestData extends GetGroupsWithTagRequestData {
	}

	export class AdminGetGroupsWithTagRequestData extends ServerGetGroupsWithTagRequestData {
	}

	export class GetMembersRequestData {
		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

	}

	export class ServerGetMembersRequestData extends GetMembersRequestData {
	}

	export class AdminGetMembersRequestData extends ServerGetMembersRequestData {
	}

	export class GetRemoveStatusRequestData {
		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

	}

	export class ServerGetRemoveStatusRequestData extends GetRemoveStatusRequestData {
	}

	export class AdminGetRemoveStatusRequestData extends ServerGetRemoveStatusRequestData {
	}

	export class GetSegmentRequestData {
		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

	}

	export class ServerGetSegmentRequestData extends GetSegmentRequestData {
	}

	export class AdminGetSegmentRequestData extends ServerGetSegmentRequestData {
	}

	export class GetStatisticsLeaderboardAroundGroupRequestData {
		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: GNParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

		@BooleanDataMember({ code: GNParameterCode.LoadFromCache, defaultValue: true, isOptional: true })
		public loadFromCache?: boolean;

		@StringDataMember({ code: GNParameterCode.CatalogId, minLength: 2, maxLength: 32, mustNonNull: true, isOptional: true })
		public catalogId?: string;

	}

	export class ServerGetStatisticsLeaderboardAroundGroupRequestData extends GetStatisticsLeaderboardAroundGroupRequestData {
	}

	export class AdminGetStatisticsLeaderboardAroundGroupRequestData extends ServerGetStatisticsLeaderboardAroundGroupRequestData {
	}

	export class GetStatisticsLeaderboardRequestData {
		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: GNParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

		@BooleanDataMember({ code: GNParameterCode.LoadFromCache, defaultValue: true, isOptional: true })
		public loadFromCache?: boolean;

		@StringDataMember({ code: GNParameterCode.Version, minLength: 2, maxLength: 32, mustNonNull: true, isOptional: true })
		public version?: string;

		@StringDataMember({ code: GNParameterCode.CatalogId, minLength: 2, maxLength: 32, mustNonNull: true, isOptional: true })
		public catalogId?: string;

	}

	export class ServerGetStatisticsLeaderboardRequestData extends GetStatisticsLeaderboardRequestData {
	}

	export class AdminGetStatisticsLeaderboardRequestData extends ServerGetStatisticsLeaderboardRequestData {
	}

	export class GetCreateLeaderboardRequestData {
		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: GNParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

		@BooleanDataMember({ code: GNParameterCode.LoadFromCache, defaultValue: true, isOptional: true })
		public loadFromCache?: boolean;

	}

	export class ServerGetCreateLeaderboardRequestData extends GetCreateLeaderboardRequestData {
	}

	export class AdminGetCreateLeaderboardRequestData extends ServerGetCreateLeaderboardRequestData {
	}

	export class GetTagRequestData {
		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@GNArrayDataMember({ code: GNParameterCode.TagKeys, elementCls: String })
		public tagKeys: Array<string>;

	}

	export class ServerGetTagRequestData extends GetTagRequestData {
	}

	export class AdminGetTagRequestData extends ServerGetTagRequestData {
	}

	export class GetTsCreateRequestData {
		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

	}

	export class ServerGetTsCreateRequestData extends GetTsCreateRequestData {
	}

	export class AdminGetTsCreateRequestData extends ServerGetTsCreateRequestData {
	}

	export class GrantGroupItemRequestData {
		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@StringDataMember({ code: GNParameterCode.CatalogId, minLength: 2, maxLength: 32, mustNonNull: true })
		public catalogId: string;

		@StringDataMember({ code: GNParameterCode.ClassId, minLength: 2, maxLength: 32, mustNonNull: true })
		public classId: string;

		@StringDataMember({ code: GNParameterCode.DisplayName, defaultValue: "", isOptional: true })
		public displayName?: string;

		@NumberDataMember({ code: GNParameterCode.Amount, defaultValue: 1, mustInt: true, isOptional: true })
		public amount?: number;

	}

	export class ServerGrantGroupItemRequestData extends GrantGroupItemRequestData {
	}

	export class AdminGrantGroupItemRequestData extends ServerGrantGroupItemRequestData {
	}

	export class RemoveGroupItemRequestData {
		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

	}

	export class ServerRemoveGroupItemRequestData extends RemoveGroupItemRequestData {
	}

	export class AdminRemoveGroupItemRequestData extends ServerRemoveGroupItemRequestData {
	}

	export class RemoveMemberRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 11, mustNonNull: true })
		public userId: string;

		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

	}

	export class ServerRemoveMemberRequestData extends RemoveMemberRequestData {
	}

	export class AdminRemoveMemberRequestData extends ServerRemoveMemberRequestData {
	}

	export class RemoveSegmentRequestData {
		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@StringDataMember({ code: GNParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
		public value: string;

	}

	export class ServerRemoveSegmentRequestData extends RemoveSegmentRequestData {
	}

	export class AdminRemoveSegmentRequestData extends ServerRemoveSegmentRequestData {
	}

	export class RemoveTagRequestData {
		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

	}

	export class ServerRemoveTagRequestData extends RemoveTagRequestData {
	}

	export class AdminRemoveTagRequestData extends ServerRemoveTagRequestData {
	}

	export class SendGroupMessageRequestData {
		@StringDataMember({ code: GNParameterCode.SenderId, minLength: 10, maxLength: 11, mustNonNull: true })
		public senderId: string;

		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@StringDataMember({ code: GNParameterCode.Message, minLength: 2, maxLength: 256, mustNonNull: true })
		public message: string;

	}

	export class ServerSendGroupMessageRequestData extends SendGroupMessageRequestData {
	}

	export class AdminSendGroupMessageRequestData extends ServerSendGroupMessageRequestData {
	}

	export class SetAvatarRequestData {
		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@NumberDataMember({ code: GNParameterCode.Type, mustInt: true })
		public type: number;

		@StringDataMember({ code: GNParameterCode.Value, minLength: 1, maxLength: 128, mustNonNull: true })
		public value: string;

	}

	export class ServerSetAvatarRequestData extends SetAvatarRequestData {
	}

	export class AdminSetAvatarRequestData extends ServerSetAvatarRequestData {
	}

	export class SetCustomDataRequestData {
		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@GNArrayDataMember({ code: GNParameterCode.CustomDatas, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: CustomDataParam })
		public customData: Array<CustomDataParam>;

	}

	export class ServerSetCustomDataRequestData extends SetCustomDataRequestData {
	}

	export class AdminSetCustomDataRequestData extends ServerSetCustomDataRequestData {
	}

	export class SetDisplayNameRequestData {
		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@StringDataMember({ code: GNParameterCode.DisplayName, minLength: 5, maxLength: 32, mustNonNull: true })
		public displayName: string;

	}

	export class ServerSetDisplayNameRequestData extends SetDisplayNameRequestData {
	}

	export class AdminSetDisplayNameRequestData extends ServerSetDisplayNameRequestData {
	}

	export class SetGroupCurrencyRequestData {
		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@GNArrayDataMember({ code: GNParameterCode.GroupCurrencies, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: GroupCurrencyParam })
		public groupCurrencyParams: Array<GroupCurrencyParam>;

		@StringDataMember({ code: GNParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
		public log?: string;

	}

	export class ServerSetGroupCurrencyRequestData extends SetGroupCurrencyRequestData {
	}

	export class AdminSetGroupCurrencyRequestData extends ServerSetGroupCurrencyRequestData {
	}

	export class SetGroupDataRequestData {
		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@GNArrayDataMember({ code: GNParameterCode.GroupDatas, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: GroupDataParam })
		public groupDataParams: Array<GroupDataParam>;

	}

	export class ServerSetGroupDataRequestData extends SetGroupDataRequestData {
	}

	export class AdminSetGroupDataRequestData extends ServerSetGroupDataRequestData {
	}

	export class SetGroupStatisticsRequestData {
		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@GNArrayDataMember({ code: GNParameterCode.GroupStatistics, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: GroupStatisticsParam })
		public groupStatisticsParams: Array<GroupStatisticsParam>;

		@StringDataMember({ code: GNParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
		public log?: string;

	}

	export class ServerSetGroupStatisticsRequestData extends SetGroupStatisticsRequestData {
	}

	export class AdminSetGroupStatisticsRequestData extends ServerSetGroupStatisticsRequestData {
	}

	export class SetRemoveStatusRequestData {
		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@StringDataMember({ code: GNParameterCode.Reason, isOptional: true, defaultValue: "" })
		public reason?: string;

	}

	export class ServerSetRemoveStatusRequestData extends SetRemoveStatusRequestData {
	}

	export class AdminSetRemoveStatusRequestData extends ServerSetRemoveStatusRequestData {
	}

	export class SetTagRequestData {
		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@StringDataMember({ code: GNParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
		public value: string;

	}

	export class ServerSetTagRequestData extends SetTagRequestData {
	}

	export class AdminSetTagRequestData extends ServerSetTagRequestData {
	}

	export class GetCurrencyLogRequestData {
		@GNArrayDataMember({ code: GNParameterCode.Keys, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: String, isOptional: true })
		public keys?: Array<string>;

		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true, isOptional: true })
		public groupId?: string;

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

		@StringDataMember({ code: GNParameterCode.Token, minLength: 24, maxLength: 24, mustNonNull: true, isOptional: true })
		public token?: string;

	}

	export class ServerGetCurrencyLogRequestData extends GetCurrencyLogRequestData {
	}

	export class AdminGetCurrencyLogRequestData extends ServerGetCurrencyLogRequestData {
	}

	export class GetStatisticsLogRequestData {
		@GNArrayDataMember({ code: GNParameterCode.Keys, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: String, isOptional: true })
		public keys?: Array<string>;

		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true, isOptional: true })
		public groupId?: string;

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

		@StringDataMember({ code: GNParameterCode.Token, minLength: 24, maxLength: 24, mustNonNull: true, isOptional: true })
		public token?: string;

	}

	export class ServerGetStatisticsLogRequestData extends GetStatisticsLogRequestData {
	}

	export class AdminGetStatisticsLogRequestData extends ServerGetStatisticsLogRequestData {
	}

	export class InfoResponseParameters {
		@StringDataMember({ code: GNParameterCode.CatalogId, isOptional: true })
		public catalogId?: string;

		@GNArrayDataMember({ code: GNParameterCode.Members, isOptional: true, elementCls: GenericModels.MemberItem })
		public members?: Array<GenericModels.MemberItem>;

		@GNHashtableDataMember({ code: GNParameterCode.RemoveStatus, isOptional: true })
		public removeStatus?: GenericModels.RemoveStatusItem;

		@GNArrayDataMember({ code: GNParameterCode.Segments, isOptional: true, elementCls: String })
		public segments?: Array<string>;

		@GNArrayDataMember({ code: GNParameterCode.CustomDatas, isOptional: true, elementCls: GenericModels.DataItem })
		public customDatas?: Array<GenericModels.DataItem>;

		@StringDataMember({ code: GNParameterCode.DisplayName, isOptional: true })
		public displayName?: string;

		@GNHashtableDataMember({ code: GNParameterCode.Avatar, isOptional: true })
		public avatar?: GenericModels.AvatarItem;

		@NumberDataMember({ code: GNParameterCode.TsCreate, isOptional: true })
		public tsCreate?: number;

		@GNArrayDataMember({ code: GNParameterCode.Tags, isOptional: true, elementCls: GenericModels.TagItem })
		public tags?: Array<GenericModels.TagItem>;

		@GNArrayDataMember({ code: GNParameterCode.GroupDatas, isOptional: true, elementCls: GenericModels.DataItem })
		public groupDatas?: Array<GenericModels.DataItem>;

		@GNArrayDataMember({ code: GNParameterCode.GroupCurrencies, isOptional: true, elementCls: GenericModels.CurrencyItem })
		public groupCurrencies?: Array<GenericModels.CurrencyItem>;

		@GNArrayDataMember({ code: GNParameterCode.GroupStatistics, isOptional: true, elementCls: GenericModels.StatisticsItem })
		public groupStatistics?: Array<GenericModels.StatisticsItem>;

		@GNArrayDataMember({ code: GNParameterCode.GroupInventories, isOptional: true, elementCls: GenericModels.InventoryItem })
		public groupInventories?: Array<GenericModels.InventoryItem>;

	}

	export class GroupResponseData {
		@GNHashtableDataMember({ code: GNParameterCode.InfoResponseParameters })
		public infoResponseParameters: InfoResponseParameters;

	}

	export class GroupWithGroupIdResponseData extends GroupResponseData {
		@StringDataMember({ code: GNParameterCode.GroupId })
		public groupId: string;

	}

	export class GroupLeaderboardResponseData extends GroupWithGroupIdResponseData {
		@NumberDataMember({ code: GNParameterCode.Position })
		public position: number;

		@NumberDataMember({ code: GNParameterCode.BackupValue, isOptional: true })
		public backupValue?: number;

	}

	export class GroupLogResponseData {
		@StringDataMember({ code: GNParameterCode.GroupId })
		public groupId: string;

		@NumberDataMember({ code: GNParameterCode.TsCreate })
		public tsCreate: number;

		@StringDataMember({ code: GNParameterCode.Log })
		public log: string;

		@StringDataMember({ code: GNParameterCode.Key })
		public key: string;

		@NumberDataMember({ code: GNParameterCode.Amount })
		public amount: number;

		@NumberDataMember({ code: GNParameterCode.StartValue })
		public startValue: number;

		@NumberDataMember({ code: GNParameterCode.FinalValue })
		public finalValue: number;

	}

	export class GetStatisticsLeaderboardResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: GroupLeaderboardResponseData })
		public results: Array<GroupLeaderboardResponseData>;

		@NumberDataMember({ code: GNParameterCode.TsCreate, isOptional: true })
		public tsCreate: number;

	}

	export class GroupsWithGroupIdResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: GroupWithGroupIdResponseData })
		public results: Array<GroupWithGroupIdResponseData>;

	}

	export class GroupMessageResponseData {
		@StringDataMember({ code: GNParameterCode.Message })
		public message: string;

		@StringDataMember({ code: GNParameterCode.SenderId })
		public senderId: string;

		@NumberDataMember({ code: GNParameterCode.SenderType })
		public senderType: number;

		@NumberDataMember({ code: GNParameterCode.TsCreate })
		public tsCreate: number;

	}

	export class GroupMessagesResponseData {
		@GNArrayDataMember({ code: GNParameterCode.GroupMessages, elementCls: GroupMessageResponseData })
		public groupMessages: Array<GroupMessageResponseData>;

	}

	export class GetCurrencyLeaderboardRequestData {
		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: GNParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

		@BooleanDataMember({ code: GNParameterCode.LoadFromCache, defaultValue: true, isOptional: true })
		public loadFromCache?: boolean;

		@StringDataMember({ code: GNParameterCode.CatalogId, minLength: 2, maxLength: 32, mustNonNull: true, isOptional: true })
		public catalogId?: string;

	}

	export class ServerGetCurrencyLeaderboardRequestData extends GetCurrencyLeaderboardRequestData {
	}

	export class AdminGetCurrencyLeaderboardRequestData extends ServerGetCurrencyLeaderboardRequestData {
	}

	export class GetCurrencyLeaderboardResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: GroupLeaderboardResponseData })
		public results: Array<GroupLeaderboardResponseData>;

	}

	export class GetCreateLeaderboardResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: GroupLeaderboardResponseData })
		public results: Array<GroupLeaderboardResponseData>;

	}

	export class GetStatisticsLogResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: GroupLogResponseData })
		public results: Array<GroupLogResponseData>;

		@StringDataMember({ code: GNParameterCode.Token, isOptional: true })
		public token?: string;

	}

	export class GetCurrencyLogResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: GroupLogResponseData })
		public results: Array<GroupLogResponseData>;

		@StringDataMember({ code: GNParameterCode.Token, isOptional: true })
		public token?: string;

	}

	export class EmptyResponseData {
	}

}
