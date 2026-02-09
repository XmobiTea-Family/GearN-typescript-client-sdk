import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";
import { GenericModels } from "./GenericModels";

export namespace CharacterPlayerModels {
	export class InfoRequestParam {
		@BooleanDataMember({ code: ParameterCode.CatalogId, isOptional: true, defaultValue: false })
		public catalogId?: boolean;

		@BooleanDataMember({ code: ParameterCode.Owner, isOptional: true, defaultValue: false })
		public owner?: boolean;

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

		@BooleanDataMember({ code: ParameterCode.PlayerBan, isOptional: true, defaultValue: false })
		public playerBan?: boolean;

		@BooleanDataMember({ code: ParameterCode.PlayerCurrencies, isOptional: true, defaultValue: false })
		public playerCurrencies?: boolean;

		@BooleanDataMember({ code: ParameterCode.PlayerStatistics, isOptional: true, defaultValue: false })
		public playerStatistics?: boolean;

		@BooleanDataMember({ code: ParameterCode.PlayerDatas, isOptional: true, defaultValue: false })
		public playerDatas?: boolean;

		@BooleanDataMember({ code: ParameterCode.IpAddressCreate, isOptional: true, defaultValue: false })
		public ipAddressCreate?: boolean;

		@BooleanDataMember({ code: ParameterCode.CountryCode, isOptional: true, defaultValue: false })
		public countryCode?: boolean;

		@BooleanDataMember({ code: ParameterCode.TsLastLogin, isOptional: true, defaultValue: false })
		public tsLastLogin?: boolean;

		@BooleanDataMember({ code: ParameterCode.PlayerInventories, isOptional: true, defaultValue: false })
		public playerInventories?: boolean;

		@BooleanDataMember({ code: ParameterCode.PlayerGroups, isOptional: true, defaultValue: false })
		public playerGroups?: boolean;

		@BooleanDataMember({ code: ParameterCode.PlayerFriends, isOptional: true, defaultValue: false })
		public playerFriends?: boolean;

		@GNArrayDataMember({ code: ParameterCode.PlayerDataKeys, isOptional: true, elementCls: String })
		public playerDataKeys?: Array<string>;

		@GNArrayDataMember({ code: ParameterCode.PlayerCurrencyKeys, isOptional: true, elementCls: String })
		public playerCurrencyKeys?: Array<string>;

		@GNArrayDataMember({ code: ParameterCode.PlayerStatisticsKeys, isOptional: true, elementCls: String })
		public playerStatisticsKeys?: Array<string>;

		@GNArrayDataMember({ code: ParameterCode.CustomDataKeys, isOptional: true, elementCls: String })
		public customDataKeys?: Array<string>;

		@GNArrayDataMember({ code: ParameterCode.TagKeys, isOptional: true, elementCls: String })
		public tagKeys?: Array<string>;

		@GNArrayDataMember({ code: ParameterCode.CharacterCatalogIds, isOptional: true, elementCls: String })
		public characterCatalogIds?: Array<string>;

		@GNArrayDataMember({ code: ParameterCode.ItemCatalogIds, isOptional: true, elementCls: String })
		public itemCatalogIds?: Array<string>;

		@GNArrayDataMember({ code: ParameterCode.GroupCatalogIds, isOptional: true, elementCls: String })
		public groupCatalogIds?: Array<string>;

		@GNArrayDataMember({ code: ParameterCode.FriendCatalogIds, isOptional: true, elementCls: String })
		public friendCatalogIds?: Array<string>;

	}

	export class PlayerStatisticsParam {
		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@NumberDataMember({ code: ParameterCode.Value })
		public value: number;

	}

	export class PlayerDataParam {
		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@DataMember({ code: ParameterCode.Value })
		public value: any;

	}

	export class PlayerCurrencyParam {
		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@NumberDataMember({ code: ParameterCode.Amount })
		public amount: number;

	}

	export class CustomDataParam {
		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@DataMember({ code: ParameterCode.Value })
		public value: any;

	}

	export class GroupMemberParam {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

		@NumberDataMember({ code: ParameterCode.Role, mustInt: true })
		public role: number;

	}

	export class AddPlayerFriendRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: ParameterCode.FriendId, minLength: 11, maxLength: 11, mustNonNull: true })
		public friendId: string;

		@StringDataMember({ code: ParameterCode.CatalogId, minLength: 2, maxLength: 32, mustNonNull: true })
		public catalogId: string;

	}

	export class ServerAddPlayerFriendRequestData extends AddPlayerFriendRequestData {
	}

	export class AdminAddPlayerFriendRequestData extends ServerAddPlayerFriendRequestData {
	}

	export class AddSegmentRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: ParameterCode.Value, minLength: 6, maxLength: 32, mustNonNull: true })
		public value: string;

	}

	export class ServerAddSegmentRequestData extends AddSegmentRequestData {
	}

	export class AdminAddSegmentRequestData extends ServerAddSegmentRequestData {
	}

	export class GetAvatarRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

	}

	export class ServerGetAvatarRequestData extends GetAvatarRequestData {
	}

	export class AdminGetAvatarRequestData extends ServerGetAvatarRequestData {
	}

	export class GetCatalogIdRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

	}

	export class ServerGetCatalogIdRequestData extends GetCatalogIdRequestData {
	}

	export class AdminGetCatalogIdRequestData extends ServerGetCatalogIdRequestData {
	}

	export class GetCountryCodeRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

	}

	export class ServerGetCountryCodeRequestData extends GetCountryCodeRequestData {
	}

	export class AdminGetCountryCodeRequestData extends ServerGetCountryCodeRequestData {
	}

	export class GetCustomDataRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@GNArrayDataMember({ code: ParameterCode.CustomDataKeys, isOptional: true, elementCls: String })
		public customDataKeys?: Array<string>;

	}

	export class ServerGetCustomDataRequestData extends GetCustomDataRequestData {
	}

	export class AdminGetCustomDataRequestData extends ServerGetCustomDataRequestData {
	}

	export class GetDisplayNameRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

	}

	export class ServerGetDisplayNameRequestData extends GetDisplayNameRequestData {
	}

	export class AdminGetDisplayNameRequestData extends ServerGetDisplayNameRequestData {
	}

	export class GetFriendStatisticsLeaderboardAroundPlayerRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

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

	}

	export class ServerGetFriendStatisticsLeaderboardAroundPlayerRequestData extends GetFriendStatisticsLeaderboardAroundPlayerRequestData {
	}

	export class AdminGetFriendStatisticsLeaderboardAroundPlayerRequestData extends ServerGetFriendStatisticsLeaderboardAroundPlayerRequestData {
	}

	export class GetFriendStatisticsLeaderboardRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

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

	}

	export class ServerGetFriendStatisticsLeaderboardRequestData extends GetFriendStatisticsLeaderboardRequestData {
	}

	export class AdminGetFriendStatisticsLeaderboardRequestData extends ServerGetFriendStatisticsLeaderboardRequestData {
	}

	export class GetIpAddressCreateRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

	}

	export class ServerGetIpAddressCreateRequestData extends GetIpAddressCreateRequestData {
	}

	export class AdminGetIpAddressCreateRequestData extends ServerGetIpAddressCreateRequestData {
	}

	export class GetOwnerRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

	}

	export class ServerGetOwnerRequestData extends GetOwnerRequestData {
	}

	export class AdminGetOwnerRequestData extends ServerGetOwnerRequestData {
	}

	export class GetPlayerBanRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

	}

	export class ServerGetPlayerBanRequestData extends GetPlayerBanRequestData {
	}

	export class AdminGetPlayerBanRequestData extends ServerGetPlayerBanRequestData {
	}

	export class GetPlayerCurrencyRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@GNArrayDataMember({ code: ParameterCode.PlayerCurrencyKeys, isOptional: true, elementCls: String })
		public playerCurrencyKeys?: Array<string>;

	}

	export class ServerGetPlayerCurrencyRequestData extends GetPlayerCurrencyRequestData {
	}

	export class AdminGetPlayerCurrencyRequestData extends ServerGetPlayerCurrencyRequestData {
	}

	export class GetPlayerDataRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@GNArrayDataMember({ code: ParameterCode.PlayerDataKeys, isOptional: true, elementCls: String })
		public playerDataKeys?: Array<string>;

	}

	export class ServerGetPlayerDataRequestData extends GetPlayerDataRequestData {
	}

	export class AdminGetPlayerDataRequestData extends ServerGetPlayerDataRequestData {
	}

	export class GetPlayerFriendRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@GNArrayDataMember({ code: ParameterCode.FriendCatalogIds, isOptional: true, elementCls: String })
		public friendCatalogIds?: Array<string>;

	}

	export class ServerGetPlayerFriendRequestData extends GetPlayerFriendRequestData {
	}

	export class AdminGetPlayerFriendRequestData extends ServerGetPlayerFriendRequestData {
	}

	export class GetPlayerGroupRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@GNArrayDataMember({ code: ParameterCode.GroupCatalogIds, isOptional: true, elementCls: String })
		public groupCatalogIds?: Array<string>;

	}

	export class ServerGetPlayerGroupRequestData extends GetPlayerGroupRequestData {
	}

	export class AdminGetPlayerGroupRequestData extends ServerGetPlayerGroupRequestData {
	}

	export class GetPlayerInformationRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class ServerGetPlayerInformationRequestData extends GetPlayerInformationRequestData {
	}

	export class AdminGetPlayerInformationRequestData extends ServerGetPlayerInformationRequestData {
	}

	export class GetPlayerInventoryRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@GNArrayDataMember({ code: ParameterCode.ItemCatalogIds, isOptional: true, elementCls: String })
		public itemCatalogIds?: Array<string>;

	}

	export class ServerGetPlayerInventoryRequestData extends GetPlayerInventoryRequestData {
	}

	export class AdminGetPlayerInventoryRequestData extends ServerGetPlayerInventoryRequestData {
	}

	export class GetPlayerStatisticsRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@GNArrayDataMember({ code: ParameterCode.StatisticsKeys, isOptional: true, elementCls: String })
		public statisticsKeys?: Array<string>;

	}

	export class ServerGetPlayerStatisticsRequestData extends GetPlayerStatisticsRequestData {
	}

	export class AdminGetPlayerStatisticsRequestData extends ServerGetPlayerStatisticsRequestData {
	}

	export class GetPlayersWithDisplayNameRequestData {
		@StringDataMember({ code: ParameterCode.Keyword, minLength: 2, maxLength: 32 })
		public keyword: string;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: ParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

	}

	export class ServerGetPlayersWithDisplayNameRequestData extends GetPlayersWithDisplayNameRequestData {
	}

	export class AdminGetPlayersWithDisplayNameRequestData extends ServerGetPlayersWithDisplayNameRequestData {
	}

	export class GetPlayersWithSegmentRequestData {
		@StringDataMember({ code: ParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
		public value: string;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: ParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

	}

	export class ServerGetPlayersWithSegmentRequestData extends GetPlayersWithSegmentRequestData {
	}

	export class AdminGetPlayersWithSegmentRequestData extends ServerGetPlayersWithSegmentRequestData {
	}

	export class GetPlayersWithTagRequestData {
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

	export class ServerGetPlayersWithTagRequestData extends GetPlayersWithTagRequestData {
	}

	export class AdminGetPlayersWithTagRequestData extends ServerGetPlayersWithTagRequestData {
	}

	export class GetRemoveStatusRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

	}

	export class ServerGetRemoveStatusRequestData extends GetRemoveStatusRequestData {
	}

	export class AdminGetRemoveStatusRequestData extends ServerGetRemoveStatusRequestData {
	}

	export class GetSegmentRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

	}

	export class ServerGetSegmentRequestData extends GetSegmentRequestData {
	}

	export class AdminGetSegmentRequestData extends ServerGetSegmentRequestData {
	}

	export class GetStatisticsLeaderboardAroundPlayerRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

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

	export class ServerGetStatisticsLeaderboardAroundPlayerRequestData extends GetStatisticsLeaderboardAroundPlayerRequestData {
	}

	export class AdminGetStatisticsLeaderboardAroundPlayerRequestData extends ServerGetStatisticsLeaderboardAroundPlayerRequestData {
	}

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

	export class ServerGetCurrencyLeaderboardRequestData extends GetCurrencyLeaderboardRequestData {
	}

	export class AdminGetCurrencyLeaderboardRequestData extends ServerGetCurrencyLeaderboardRequestData {
	}

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

	export class ServerGetStatisticsLeaderboardRequestData extends GetStatisticsLeaderboardRequestData {
	}

	export class AdminGetStatisticsLeaderboardRequestData extends ServerGetStatisticsLeaderboardRequestData {
	}

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

	export class ServerGetCreateLeaderboardRequestData extends GetCreateLeaderboardRequestData {
	}

	export class AdminGetCreateLeaderboardRequestData extends ServerGetCreateLeaderboardRequestData {
	}

	export class GetLastLoginLeaderboardRequestData {
		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: ParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

		@BooleanDataMember({ code: ParameterCode.LoadFromCache, defaultValue: true, isOptional: true })
		public loadFromCache?: boolean;

	}

	export class ServerGetLastLoginLeaderboardRequestData extends GetLastLoginLeaderboardRequestData {
	}

	export class AdminGetLastLoginLeaderboardRequestData extends ServerGetLastLoginLeaderboardRequestData {
	}

	export class GetTagRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@GNArrayDataMember({ code: ParameterCode.TagKeys, elementCls: String })
		public tagKeys: Array<string>;

	}

	export class ServerGetTagRequestData extends GetTagRequestData {
	}

	export class AdminGetTagRequestData extends ServerGetTagRequestData {
	}

	export class GetTsCreateRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

	}

	export class ServerGetTsCreateRequestData extends GetTsCreateRequestData {
	}

	export class AdminGetTsCreateRequestData extends ServerGetTsCreateRequestData {
	}

	export class GetTsLastLoginRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

	}

	export class ServerGetTsLastLoginRequestData extends GetTsLastLoginRequestData {
	}

	export class AdminGetTsLastLoginRequestData extends ServerGetTsLastLoginRequestData {
	}

	export class CreateGroupRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: ParameterCode.CatalogId, minLength: 2, maxLength: 32, mustNonNull: true })
		public catalogId: string;

		@GNArrayDataMember({ code: ParameterCode.GroupMembers, isOptional: true, elementCls: GroupMemberParam })
		public groupMembers?: Array<GroupMemberParam>;

		@StringDataMember({ code: ParameterCode.DisplayName, defaultValue: "", isOptional: true })
		public displayName?: string;

	}

	export class ServerCreateGroupRequestData extends CreateGroupRequestData {
	}

	export class AdminCreateGroupRequestData extends ServerCreateGroupRequestData {
	}

	export class CreatePlayerItemRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: ParameterCode.CatalogId, minLength: 2, maxLength: 32, mustNonNull: true })
		public catalogId: string;

		@StringDataMember({ code: ParameterCode.ClassId, minLength: 2, maxLength: 32, mustNonNull: true })
		public classId: string;

		@StringDataMember({ code: ParameterCode.DisplayName, defaultValue: "", isOptional: true })
		public displayName?: string;

		@NumberDataMember({ code: ParameterCode.Amount, defaultValue: 1, mustInt: true, isOptional: true })
		public amount?: number;

	}

	export class ServerCreatePlayerItemRequestData extends CreatePlayerItemRequestData {
	}

	export class AdminCreatePlayerItemRequestData extends ServerCreatePlayerItemRequestData {
	}

	export class JoinGroupRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

	}

	export class ServerJoinGroupRequestData extends JoinGroupRequestData {
	}

	export class AdminJoinGroupRequestData extends ServerJoinGroupRequestData {
	}

	export class LeaveGroupRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

	}

	export class ServerLeaveGroupRequestData extends LeaveGroupRequestData {
	}

	export class AdminLeaveGroupRequestData extends ServerLeaveGroupRequestData {
	}

	export class RemovePlayerFriendRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: ParameterCode.FriendId, minLength: 11, maxLength: 11, mustNonNull: true })
		public friendId: string;

	}

	export class ServerRemovePlayerFriendRequestData extends RemovePlayerFriendRequestData {
	}

	export class AdminRemovePlayerFriendRequestData extends ServerRemovePlayerFriendRequestData {
	}

	export class RemovePlayerItemRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

	}

	export class ServerRemovePlayerItemRequestData extends RemovePlayerItemRequestData {
	}

	export class AdminRemovePlayerItemRequestData extends ServerRemovePlayerItemRequestData {
	}

	export class RemoveSegmentRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: ParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
		public value: string;

	}

	export class ServerRemoveSegmentRequestData extends RemoveSegmentRequestData {
	}

	export class AdminRemoveSegmentRequestData extends ServerRemoveSegmentRequestData {
	}

	export class RemoveTagRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

	}

	export class ServerRemoveTagRequestData extends RemoveTagRequestData {
	}

	export class AdminRemoveTagRequestData extends ServerRemoveTagRequestData {
	}

	export class SetAvatarRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@NumberDataMember({ code: ParameterCode.Type, mustInt: true })
		public type: number;

		@StringDataMember({ code: ParameterCode.Value, minLength: 1, maxLength: 128, mustNonNull: true })
		public value: string;

	}

	export class ServerSetAvatarRequestData extends SetAvatarRequestData {
	}

	export class AdminSetAvatarRequestData extends ServerSetAvatarRequestData {
	}

	export class SetCountryCodeRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: ParameterCode.CountryCode, minLength: 2, maxLength: 32 })
		public countryCode: string;

	}

	export class ServerSetCountryCodeRequestData extends SetCountryCodeRequestData {
	}

	export class AdminSetCountryCodeRequestData extends ServerSetCountryCodeRequestData {
	}

	export class SetCustomDataRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@GNArrayDataMember({ code: ParameterCode.CustomDatas, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: CustomDataParam })
		public customDatas: Array<CustomDataParam>;

	}

	export class ServerSetCustomDataRequestData extends SetCustomDataRequestData {
	}

	export class AdminSetCustomDataRequestData extends ServerSetCustomDataRequestData {
	}

	export class SetDisplayNameRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: ParameterCode.DisplayName, minLength: 5, maxLength: 32, mustNonNull: true })
		public displayName: string;

		@BooleanDataMember({ code: ParameterCode.UniqueDisplayName, defaultValue: false, isOptional: true })
		public uniqueDisplayName?: boolean;

	}

	export class ServerSetDisplayNameRequestData extends SetDisplayNameRequestData {
	}

	export class AdminSetDisplayNameRequestData extends ServerSetDisplayNameRequestData {
	}

	export class SetOwnerRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: ParameterCode.NewOwnerId, minLength: 10, maxLength: 10, mustNonNull: true })
		public newOwnerId: string;

	}

	export class ServerSetOwnerRequestData extends SetOwnerRequestData {
	}

	export class AdminSetOwnerRequestData extends ServerSetOwnerRequestData {
	}

	export class SetPlayerBanRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@NumberDataMember({ code: ParameterCode.TsExpire })
		public tsExpire: number;

		@StringDataMember({ code: ParameterCode.Reason })
		public reason: string;

	}

	export class ServerSetPlayerBanRequestData extends SetPlayerBanRequestData {
	}

	export class AdminSetPlayerBanRequestData extends ServerSetPlayerBanRequestData {
	}

	export class ChangePlayerCurrencyRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@GNArrayDataMember({ code: ParameterCode.PlayerCurrencies, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: PlayerCurrencyParam })
		public playerCurrencies: Array<PlayerCurrencyParam>;

		@StringDataMember({ code: ParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
		public log?: string;

	}

	export class ServerChangePlayerCurrencyRequestData extends ChangePlayerCurrencyRequestData {
	}

	export class AdminChangePlayerCurrencyRequestData extends ServerChangePlayerCurrencyRequestData {
	}

	export class SetPlayerDataRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@GNArrayDataMember({ code: ParameterCode.PlayerDatas, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: PlayerDataParam })
		public playerDatas: Array<PlayerDataParam>;

	}

	export class ServerSetPlayerDataRequestData extends SetPlayerDataRequestData {
	}

	export class AdminSetPlayerDataRequestData extends ServerSetPlayerDataRequestData {
	}

	export class ChangePlayerStatisticsRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@GNArrayDataMember({ code: ParameterCode.PlayerStatistics, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: PlayerStatisticsParam })
		public playerStatistics: Array<PlayerStatisticsParam>;

		@StringDataMember({ code: ParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
		public log?: string;

	}

	export class ServerChangePlayerStatisticsRequestData extends ChangePlayerStatisticsRequestData {
	}

	export class AdminChangePlayerStatisticsRequestData extends ServerChangePlayerStatisticsRequestData {
	}

	export class SetRemoveStatusRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: ParameterCode.Reason, isOptional: true, defaultValue: "" })
		public reason?: string;

	}

	export class ServerSetRemoveStatusRequestData extends SetRemoveStatusRequestData {
	}

	export class AdminSetRemoveStatusRequestData extends ServerSetRemoveStatusRequestData {
	}

	export class SetTagRequestData {
		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@StringDataMember({ code: ParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
		public value: string;

	}

	export class ServerSetTagRequestData extends SetTagRequestData {
	}

	export class AdminSetTagRequestData extends ServerSetTagRequestData {
	}

	export class GetCurrencyLogRequestData {
		@GNArrayDataMember({ code: ParameterCode.Keys, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: String, isOptional: true })
		public keys?: Array<string>;

		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true, isOptional: true })
		public characterId?: string;

		@NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

		@StringDataMember({ code: ParameterCode.Token, minLength: 24, maxLength: 24, mustNonNull: true, isOptional: true })
		public token?: string;

	}

	export class ServerGetCurrencyLogRequestData extends GetCurrencyLogRequestData {
	}

	export class AdminGetCurrencyLogRequestData extends ServerGetCurrencyLogRequestData {
	}

	export class GetStatisticsLogRequestData {
		@GNArrayDataMember({ code: ParameterCode.Keys, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: String, isOptional: true })
		public keys?: Array<string>;

		@StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true, isOptional: true })
		public characterId?: string;

		@NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

		@StringDataMember({ code: ParameterCode.Token, minLength: 24, maxLength: 24, mustNonNull: true, isOptional: true })
		public token?: string;

	}

	export class ServerGetStatisticsLogRequestData extends GetStatisticsLogRequestData {
	}

	export class AdminGetStatisticsLogRequestData extends ServerGetStatisticsLogRequestData {
	}

	export class InfoResponseParameters {
		@StringDataMember({ code: ParameterCode.CatalogId, isOptional: true })
		public catalogId?: string;

		@GNHashtableDataMember({ code: ParameterCode.Owner, isOptional: true })
		public owner?: GenericModels.OwnerItem;

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

		@GNHashtableDataMember({ code: ParameterCode.PlayerBan, isOptional: true })
		public playerBan?: GenericModels.BanItem;

		@GNArrayDataMember({ code: ParameterCode.PlayerDatas, isOptional: true, elementCls: GenericModels.DataItem })
		public playerDatas?: Array<GenericModels.DataItem>;

		@GNArrayDataMember({ code: ParameterCode.PlayerCurrencies, isOptional: true, elementCls: GenericModels.CurrencyItem })
		public playerCurrencies?: Array<GenericModels.CurrencyItem>;

		@GNArrayDataMember({ code: ParameterCode.PlayerStatistics, isOptional: true, elementCls: GenericModels.StatisticsItem })
		public playerStatistics?: Array<GenericModels.StatisticsItem>;

		@GNArrayDataMember({ code: ParameterCode.PlayerInventories, isOptional: true, elementCls: GenericModels.InventoryItem })
		public playerInventories?: Array<GenericModels.InventoryItem>;

		@GNArrayDataMember({ code: ParameterCode.PlayerGroups, isOptional: true, elementCls: GenericModels.GroupItem })
		public playerGroups?: Array<GenericModels.GroupItem>;

		@GNArrayDataMember({ code: ParameterCode.PlayerFriends, isOptional: true, elementCls: GenericModels.FriendItem })
		public playerFriends?: Array<GenericModels.FriendItem>;

		@NumberDataMember({ code: ParameterCode.TsLastLogin, isOptional: true })
		public tsLastLogin?: number;

		@StringDataMember({ code: ParameterCode.IpAddressCreate, isOptional: true })
		public ipAddressCreate?: string;

		@StringDataMember({ code: ParameterCode.CountryCode, isOptional: true })
		public countryCode?: string;

	}

	export class CharacterPlayerResponseData {
		@GNHashtableDataMember({ code: ParameterCode.InfoResponseParameters })
		public infoResponseParameters: InfoResponseParameters;

	}

	export class CharacterPlayerWithCharacterIdResponseData extends CharacterPlayerResponseData {
		@StringDataMember({ code: ParameterCode.CharacterId })
		public characterId: string;

	}

	export class CharacterPlayerLeaderboardResponseData extends CharacterPlayerWithCharacterIdResponseData {
		@NumberDataMember({ code: ParameterCode.Position })
		public position: number;

		@NumberDataMember({ code: ParameterCode.BackupValue, isOptional: true })
		public backupValue?: number;

	}

	export class CharacterPlayerLogResponseData {
		@StringDataMember({ code: ParameterCode.CharacterId })
		public characterId: string;

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

	export class GetStatisticsLeaderboardResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: CharacterPlayerLeaderboardResponseData })
		public results: Array<CharacterPlayerLeaderboardResponseData>;

		@NumberDataMember({ code: ParameterCode.TsCreate, isOptional: true })
		public tsCreate: number;

	}

	export class CharacterPlayersWithCharacterIdResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: CharacterPlayerWithCharacterIdResponseData })
		public results: Array<CharacterPlayerWithCharacterIdResponseData>;

	}

	export class GetCurrencyLeaderboardResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: CharacterPlayerLeaderboardResponseData })
		public results: Array<CharacterPlayerLeaderboardResponseData>;

	}

	export class GetCreateLeaderboardResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: CharacterPlayerLeaderboardResponseData })
		public results: Array<CharacterPlayerLeaderboardResponseData>;

	}

	export class GetLastLoginLeaderboardResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: CharacterPlayerLeaderboardResponseData })
		public results: Array<CharacterPlayerLeaderboardResponseData>;

	}

	export class GetStatisticsLogResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: CharacterPlayerLogResponseData })
		public results: Array<CharacterPlayerLogResponseData>;

		@StringDataMember({ code: ParameterCode.Token, isOptional: true })
		public token?: string;

	}

	export class GetCurrencyLogResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: CharacterPlayerLogResponseData })
		public results: Array<CharacterPlayerLogResponseData>;

		@StringDataMember({ code: ParameterCode.Token, isOptional: true })
		public token?: string;

	}

	export class EmptyResponseData {
	}

}
