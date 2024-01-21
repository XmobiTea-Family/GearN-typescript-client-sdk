import { GNHashtable } from "./../../common/GNData";
import { GNParameterCode } from "./../../constant/parameterCode/GNParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";
import { GenericModels } from "./GenericModels";

export namespace GamePlayerModels {
	export class InfoRequestParam {
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

		@BooleanDataMember({ code: GNParameterCode.PlayerBan, isOptional: true, defaultValue: false })
		public playerBan?: boolean;

		@BooleanDataMember({ code: GNParameterCode.PlayerCurrencies, isOptional: true, defaultValue: false })
		public playerCurrencies?: boolean;

		@BooleanDataMember({ code: GNParameterCode.PlayerStatistics, isOptional: true, defaultValue: false })
		public playerStatistics?: boolean;

		@BooleanDataMember({ code: GNParameterCode.PlayerDatas, isOptional: true, defaultValue: false })
		public playerDatas?: boolean;

		@BooleanDataMember({ code: GNParameterCode.IpAddressCreate, isOptional: true, defaultValue: false })
		public ipAddressCreate?: boolean;

		@BooleanDataMember({ code: GNParameterCode.CountryCode, isOptional: true, defaultValue: false })
		public countryCode?: boolean;

		@BooleanDataMember({ code: GNParameterCode.TsLastLogin, isOptional: true, defaultValue: false })
		public tsLastLogin?: boolean;

		@BooleanDataMember({ code: GNParameterCode.PlayerCharacters, isOptional: true, defaultValue: false })
		public playerCharacters?: boolean;

		@BooleanDataMember({ code: GNParameterCode.PlayerInventories, isOptional: true, defaultValue: false })
		public playerInventories?: boolean;

		@BooleanDataMember({ code: GNParameterCode.PlayerGroups, isOptional: true, defaultValue: false })
		public playerGroups?: boolean;

		@BooleanDataMember({ code: GNParameterCode.PlayerFriends, isOptional: true, defaultValue: false })
		public playerFriends?: boolean;

		@GNArrayDataMember({ code: GNParameterCode.PlayerDataKeys, isOptional: true, elementCls: String })
		public playerDataKeys?: Array<string>;

		@GNArrayDataMember({ code: GNParameterCode.PlayerCurrencyKeys, isOptional: true, elementCls: String })
		public playerCurrencyKeys?: Array<string>;

		@GNArrayDataMember({ code: GNParameterCode.PlayerStatisticsKeys, isOptional: true, elementCls: String })
		public playerStatisticsKeys?: Array<string>;

		@GNArrayDataMember({ code: GNParameterCode.CustomDataKeys, isOptional: true, elementCls: String })
		public customDataKeys?: Array<string>;

		@GNArrayDataMember({ code: GNParameterCode.TagKeys, isOptional: true, elementCls: String })
		public tagKeys?: Array<string>;

		@GNArrayDataMember({ code: GNParameterCode.CharacterCatalogIds, isOptional: true, elementCls: String })
		public characterCatalogIds?: Array<string>;

		@GNArrayDataMember({ code: GNParameterCode.ItemCatalogIds, isOptional: true, elementCls: String })
		public itemCatalogIds?: Array<string>;

		@GNArrayDataMember({ code: GNParameterCode.GroupCatalogIds, isOptional: true, elementCls: String })
		public groupCatalogIds?: Array<string>;

		@GNArrayDataMember({ code: GNParameterCode.FriendCatalogIds, isOptional: true, elementCls: String })
		public friendCatalogIds?: Array<string>;

	}

	export class CustomDataParam {
		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@DataMember({ code: GNParameterCode.Value })
		public value: any;

	}

	export class GroupMemberParam {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class PlayerCurrencyParam {
		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@NumberDataMember({ code: GNParameterCode.Amount })
		public amount: number;

	}

	export class PlayerDataParam {
		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@DataMember({ code: GNParameterCode.Value })
		public value: any;

	}

	export class PlayerStatisticsParam {
		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@NumberDataMember({ code: GNParameterCode.Value })
		public value: number;

	}


	export class AddPlayerFriendRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.FriendId, minLength: 10, maxLength: 10, mustNonNull: true })
		public friendId: string;

		@StringDataMember({ code: GNParameterCode.CatalogId, minLength: 2, maxLength: 32, mustNonNull: true })
		public catalogId: string;

	}

	export class ServerAddPlayerFriendRequestData extends AddPlayerFriendRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminAddPlayerFriendRequestData extends ServerAddPlayerFriendRequestData {
	}

	export class AddSegmentRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.Value, minLength: 6, maxLength: 32, mustNonNull: true })
		public value: string;

	}

	export class ServerAddSegmentRequestData extends AddSegmentRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminAddSegmentRequestData extends ServerAddSegmentRequestData {
	}

	export class GetAvatarRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

	}

	export class ServerGetAvatarRequestData extends GetAvatarRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminGetAvatarRequestData extends ServerGetAvatarRequestData {
	}

	export class GetCountryCodeRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

	}

	export class ServerGetCountryCodeRequestData extends GetCountryCodeRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminGetCountryCodeRequestData extends ServerGetCountryCodeRequestData {
	}

	export class GetCustomDataRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@GNArrayDataMember({ code: GNParameterCode.CustomDataKeys, isOptional: true, elementCls: String })
		public customDataKeys?: Array<string>;

	}

	export class ServerGetCustomDataRequestData extends GetCustomDataRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminGetCustomDataRequestData extends ServerGetCustomDataRequestData {
	}

	export class GetDisplayNameRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

	}

	export class ServerGetDisplayNameRequestData extends GetDisplayNameRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminGetDisplayNameRequestData extends ServerGetDisplayNameRequestData {
	}

	export class GetFriendStatisticsLeaderboardAroundPlayerRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

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

	}

	export class ServerGetFriendStatisticsLeaderboardAroundPlayerRequestData extends GetFriendStatisticsLeaderboardAroundPlayerRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminGetFriendStatisticsLeaderboardAroundPlayerRequestData extends ServerGetFriendStatisticsLeaderboardAroundPlayerRequestData {
	}

	export class GetFriendStatisticsLeaderboardRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

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

	}

	export class ServerGetFriendStatisticsLeaderboardRequestData extends GetFriendStatisticsLeaderboardRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminGetFriendStatisticsLeaderboardRequestData extends ServerGetFriendStatisticsLeaderboardRequestData {
	}

	export class GetIpAddressCreateRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

	}

	export class ServerGetIpAddressCreateRequestData extends GetIpAddressCreateRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminGetIpAddressCreateRequestData extends ServerGetIpAddressCreateRequestData {
	}

	export class GetOnlineStatusRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

	}

	export class ServerGetOnlineStatusRequestData extends GetOnlineStatusRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminGetOnlineStatusRequestData extends ServerGetOnlineStatusRequestData {
	}

	export class GetPlayerBanRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

	}

	export class ServerGetPlayerBanRequestData extends GetPlayerBanRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminGetPlayerBanRequestData extends ServerGetPlayerBanRequestData {
	}

	export class GetPlayerCharacterRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@GNArrayDataMember({ code: GNParameterCode.CharacterCatalogIds, isOptional: true, elementCls: String })
		public characterCatalogIds?: Array<string>;

	}

	export class ServerGetPlayerCharacterRequestData extends GetPlayerCharacterRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminGetPlayerCharacterRequestData extends ServerGetPlayerCharacterRequestData {
	}

	export class GetPlayerCurrencyRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@GNArrayDataMember({ code: GNParameterCode.PlayerCurrencyKeys, isOptional: true, elementCls: String })
		public playerCurrencyKeys?: Array<string>;

	}

	export class ServerGetPlayerCurrencyRequestData extends GetPlayerCurrencyRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminGetPlayerCurrencyRequestData extends ServerGetPlayerCurrencyRequestData {
	}

	export class GetPlayerDataRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@GNArrayDataMember({ code: GNParameterCode.PlayerDataKeys, isOptional: true, elementCls: String })
		public playerDataKeys?: Array<string>;

	}

	export class ServerGetPlayerDataRequestData extends GetPlayerDataRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminGetPlayerDataRequestData extends ServerGetPlayerDataRequestData {
	}

	export class GetPlayerFriendRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@GNArrayDataMember({ code: GNParameterCode.FriendCatalogIds, isOptional: true, elementCls: String })
		public friendCatalogIds?: Array<string>;

	}

	export class ServerGetPlayerFriendRequestData extends GetPlayerFriendRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminGetPlayerFriendRequestData extends ServerGetPlayerFriendRequestData {
	}

	export class GetPlayerGroupRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@GNArrayDataMember({ code: GNParameterCode.GroupCatalogIds, isOptional: true, elementCls: String })
		public groupCatalogIds?: Array<string>;

	}

	export class ServerGetPlayerGroupRequestData extends GetPlayerGroupRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminGetPlayerGroupRequestData extends ServerGetPlayerGroupRequestData {
	}

	export class GetPlayerInformationRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class ServerGetPlayerInformationRequestData extends GetPlayerInformationRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

		@BooleanDataMember({ code: GNParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
		createPlayerIfNotExists?: boolean;

	}

	export class AdminGetPlayerInformationRequestData extends ServerGetPlayerInformationRequestData {
	}

	export class GetPlayerInventoryRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@GNArrayDataMember({ code: GNParameterCode.ItemCatalogIds, isOptional: true, elementCls: String })
		public itemCatalogIds?: Array<string>;

	}

	export class ServerGetPlayerInventoryRequestData extends GetPlayerInventoryRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminGetPlayerInventoryRequestData extends ServerGetPlayerInventoryRequestData {
	}

	export class GetPlayerStatisticsRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@GNArrayDataMember({ code: GNParameterCode.StatisticsKeys, isOptional: true, elementCls: String })
		public statisticsKeys?: Array<string>;

	}

	export class ServerGetPlayerStatisticsRequestData extends GetPlayerStatisticsRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminGetPlayerStatisticsRequestData extends ServerGetPlayerStatisticsRequestData {
	}

	export class GetPlayersWithDisplayNameRequestData {
		@StringDataMember({ code: GNParameterCode.Keyword, minLength: 2, maxLength: 32 })
		public keyword: string;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: GNParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

	}

	export class ServerGetPlayersWithDisplayNameRequestData extends GetPlayersWithDisplayNameRequestData {
	}

	export class AdminGetPlayersWithDisplayNameRequestData extends ServerGetPlayersWithDisplayNameRequestData {
	}

	export class GetPlayersWithSegmentRequestData {
		@StringDataMember({ code: GNParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
		public value: string;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: GNParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

	}

	export class ServerGetPlayersWithSegmentRequestData extends GetPlayersWithSegmentRequestData {
	}

	export class AdminGetPlayersWithSegmentRequestData extends ServerGetPlayersWithSegmentRequestData {
	}

	export class GetPlayersWithTagRequestData {
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

	export class ServerGetPlayersWithTagRequestData extends GetPlayersWithTagRequestData {
	}

	export class AdminGetPlayersWithTagRequestData extends ServerGetPlayersWithTagRequestData {
	}

	export class GetSegmentRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

	}

	export class ServerGetSegmentRequestData extends GetSegmentRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminGetSegmentRequestData extends ServerGetSegmentRequestData {
	}

	export class GetStatisticsLeaderboardAroundPlayerRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

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

	}

	export class ServerGetStatisticsLeaderboardAroundPlayerRequestData extends GetStatisticsLeaderboardAroundPlayerRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminGetStatisticsLeaderboardAroundPlayerRequestData extends ServerGetStatisticsLeaderboardAroundPlayerRequestData {
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
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@GNArrayDataMember({ code: GNParameterCode.TagKeys, elementCls: String })
		public tagKeys: Array<string>;

	}

	export class ServerGetTagRequestData extends GetTagRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminGetTagRequestData extends ServerGetTagRequestData {
	}

	export class GetTsCreateRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

	}

	export class ServerGetTsCreateRequestData extends GetTsCreateRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminGetTsCreateRequestData extends ServerGetTsCreateRequestData {
	}

	export class GetTsLastLoginRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

	}

	export class ServerGetTsLastLoginRequestData extends GetTsLastLoginRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminGetTsLastLoginRequestData extends ServerGetTsLastLoginRequestData {
	}

	export class GrantGroupRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.CatalogId, minLength: 2, maxLength: 32, mustNonNull: true })
		public catalogId: string;

		@GNArrayDataMember({ code: GNParameterCode.GroupMembers, isOptional: true, elementCls: GroupMemberParam })
		public groupMembers?: Array<GroupMemberParam>;

		@StringDataMember({ code: GNParameterCode.DisplayName, defaultValue: "", isOptional: true })
		public displayName?: string;

	}

	export class ServerGrantGroupRequestData extends GrantGroupRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminGrantGroupRequestData extends ServerGrantGroupRequestData {
	}

	export class GrantPlayerCharacterRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.CatalogId, minLength: 2, maxLength: 32, mustNonNull: true })
		public catalogId: string;

		@StringDataMember({ code: GNParameterCode.DisplayName, defaultValue: "", isOptional: true, mustNonNull: true })
		public displayName?: string;

	}

	export class ServerGrantPlayerCharacterRequestData extends GrantPlayerCharacterRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminGrantPlayerCharacterRequestData extends ServerGrantPlayerCharacterRequestData {
	}

	export class GrantPlayerItemRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.CatalogId, minLength: 2, maxLength: 32, mustNonNull: true })
		public catalogId: string;

		@StringDataMember({ code: GNParameterCode.ClassId, minLength: 2, maxLength: 32, mustNonNull: true })
		public classId: string;

		@StringDataMember({ code: GNParameterCode.DisplayName, defaultValue: "", isOptional: true })
		public displayName?: string;

		@NumberDataMember({ code: GNParameterCode.Amount, defaultValue: 1, mustInt: true, isOptional: true })
		public amount?: number;

	}

	export class ServerGrantPlayerItemRequestData extends GrantPlayerItemRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminGrantPlayerItemRequestData extends ServerGrantPlayerItemRequestData {
	}

	export class JoinGroupRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

	}

	export class ServerJoinGroupRequestData extends JoinGroupRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminJoinGroupRequestData extends ServerJoinGroupRequestData {
	}

	export class LeaveGroupRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

	}

	export class ServerLeaveGroupRequestData extends LeaveGroupRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminLeaveGroupRequestData extends ServerLeaveGroupRequestData {
	}

	export class RemovePlayerCharacterRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

	}

	export class ServerRemovePlayerCharacterRequestData extends RemovePlayerCharacterRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminRemovePlayerCharacterRequestData extends ServerRemovePlayerCharacterRequestData {
	}

	export class RemovePlayerFriendRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.FriendId, minLength: 10, maxLength: 10, mustNonNull: true })
		public friendId: string;

	}

	export class ServerRemovePlayerFriendRequestData extends RemovePlayerFriendRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminRemovePlayerFriendRequestData extends ServerRemovePlayerFriendRequestData {
	}

	export class RemovePlayerItemRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

	}

	export class ServerRemovePlayerItemRequestData extends RemovePlayerItemRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminRemovePlayerItemRequestData extends ServerRemovePlayerItemRequestData {
	}

	export class RemoveSegmentRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
		public value: string;

	}

	export class ServerRemoveSegmentRequestData extends RemoveSegmentRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminRemoveSegmentRequestData extends ServerRemoveSegmentRequestData {
	}

	export class RemoveTagRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

	}

	export class ServerRemoveTagRequestData extends RemoveTagRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminRemoveTagRequestData extends ServerRemoveTagRequestData {
	}

	export class SetAvatarRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@NumberDataMember({ code: GNParameterCode.Type, mustInt: true })
		public type: number;

		@StringDataMember({ code: GNParameterCode.Value, minLength: 1, maxLength: 128, mustNonNull: true })
		public value: string;

	}

	export class ServerSetAvatarRequestData extends SetAvatarRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminSetAvatarRequestData extends ServerSetAvatarRequestData {
	}

	export class SetCountryCodeRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.CountryCode, minLength: 2, maxLength: 32 })
		public countryCode: string;

	}

	export class ServerSetCountryCodeRequestData extends SetCountryCodeRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminSetCountryCodeRequestData extends ServerSetCountryCodeRequestData {
	}

	export class SetCustomDataRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@GNArrayDataMember({ code: GNParameterCode.CustomDatas, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: CustomDataParam })
		public customData: Array<CustomDataParam>;

	}

	export class ServerSetCustomDataRequestData extends SetCustomDataRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminSetCustomDataRequestData extends ServerSetCustomDataRequestData {
	}

	export class SetDisplayNameRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.DisplayName, minLength: 5, maxLength: 32, mustNonNull: true })
		public displayName: string;

		@BooleanDataMember({ code: GNParameterCode.UniqueDisplayName, defaultValue: false, isOptional: true })
		public uniqueDisplayName?: boolean;

	}

	export class ServerSetDisplayNameRequestData extends SetDisplayNameRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminSetDisplayNameRequestData extends ServerSetDisplayNameRequestData {
	}

	export class SetPlayerBanRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@NumberDataMember({ code: GNParameterCode.TsExpire })
		public tsExpire: number;

		@StringDataMember({ code: GNParameterCode.Reason })
		public reason: string;

	}

	export class ServerSetPlayerBanRequestData extends SetPlayerBanRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminSetPlayerBanRequestData extends ServerSetPlayerBanRequestData {
	}

	export class SetPlayerCurrencyRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@GNArrayDataMember({ code: GNParameterCode.PlayerCurrencies, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: PlayerCurrencyParam })
		public playerCurrencyParams: Array<PlayerCurrencyParam>;

		@StringDataMember({ code: GNParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
		public log?: string;

	}

	export class ServerSetPlayerCurrencyRequestData extends SetPlayerCurrencyRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminSetPlayerCurrencyRequestData extends ServerSetPlayerCurrencyRequestData {
	}

	export class SetPlayerDataRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@GNArrayDataMember({ code: GNParameterCode.PlayerDatas, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: PlayerDataParam })
		public playerDataParams: Array<PlayerDataParam>;

	}

	export class ServerSetPlayerDataRequestData extends SetPlayerDataRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminSetPlayerDataRequestData extends ServerSetPlayerDataRequestData {
	}

	export class SetPlayerStatisticsRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@GNArrayDataMember({ code: GNParameterCode.PlayerStatistics, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: PlayerStatisticsParam })
		public playerStatisticsParams: Array<PlayerStatisticsParam>;

		@StringDataMember({ code: GNParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
		public log?: string;

	}

	export class ServerSetPlayerStatisticsRequestData extends SetPlayerStatisticsRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminSetPlayerStatisticsRequestData extends ServerSetPlayerStatisticsRequestData {
	}

	export class SetTagRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@StringDataMember({ code: GNParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
		public value: string;

	}

	export class ServerSetTagRequestData extends SetTagRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminSetTagRequestData extends ServerSetTagRequestData {
	}

	export class GetCurrencyLogRequestData {
		@GNArrayDataMember({ code: GNParameterCode.Keys, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: String, isOptional: true })
		public keys?: Array<string>;

		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true, isOptional: true })
		public userId?: string;

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

		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true, isOptional: true })
		public userId?: string;

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

		@GNHashtableDataMember({ code: GNParameterCode.PlayerBan, isOptional: true })
		public playerBan?: GenericModels.BanItem;

		@GNArrayDataMember({ code: GNParameterCode.PlayerDatas, isOptional: true, elementCls: GenericModels.DataItem })
		public playerDatas?: Array<GenericModels.DataItem>;

		@GNArrayDataMember({ code: GNParameterCode.PlayerCurrencies, isOptional: true, elementCls: GenericModels.CurrencyItem })
		public playerCurrencies?: Array<GenericModels.CurrencyItem>;

		@GNArrayDataMember({ code: GNParameterCode.PlayerStatistics, isOptional: true, elementCls: GenericModels.StatisticsItem })
		public playerStatistics?: Array<GenericModels.StatisticsItem>;

		@GNArrayDataMember({ code: GNParameterCode.PlayerCharacters, isOptional: true, elementCls: GenericModels.CharacterItem })
		public playerCharacters?: Array<GenericModels.CharacterItem>;

		@GNArrayDataMember({ code: GNParameterCode.PlayerInventories, isOptional: true, elementCls: GenericModels.InventoryItem })
		public playerInventories?: Array<GenericModels.InventoryItem>;

		@GNArrayDataMember({ code: GNParameterCode.PlayerGroups, isOptional: true, elementCls: GenericModels.GroupItem })
		public playerGroups?: Array<GenericModels.GroupItem>;

		@GNArrayDataMember({ code: GNParameterCode.PlayerFriends, isOptional: true, elementCls: GenericModels.FriendItem })
		public playerFriends?: Array<GenericModels.FriendItem>;

		@NumberDataMember({ code: GNParameterCode.TsLastLogin, isOptional: true })
		public tsLastLogin?: number;

		@StringDataMember({ code: GNParameterCode.IpAddressCreate, isOptional: true })
		public ipAddressCreate?: string;

		@StringDataMember({ code: GNParameterCode.CountryCode, isOptional: true })
		public countryCode?: string;

	}

	export class GamePlayerResponseData {
		@GNHashtableDataMember({ code: GNParameterCode.InfoResponseParameters })
		public infoResponseParameters: InfoResponseParameters;

	}

	export class GamePlayerWithUserIdResponseData extends GamePlayerResponseData {
		@StringDataMember({ code: GNParameterCode.UserId })
		public userId: string;

	}

	export class GamePlayerLeaderboardResponseData extends GamePlayerWithUserIdResponseData {
		@NumberDataMember({ code: GNParameterCode.Position })
		public position: number;

		@NumberDataMember({ code: GNParameterCode.BackupValue, isOptional: true })
		public backupValue?: number;

	}

	export class GamePlayerLogResponseData {
		@StringDataMember({ code: GNParameterCode.UserId })
		public userId: string;

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
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: GamePlayerLeaderboardResponseData })
		public results: Array<GamePlayerLeaderboardResponseData>;

		@NumberDataMember({ code: GNParameterCode.TsCreate, isOptional: true })
		public tsCreate: number;

	}

	export class GetCurrencyLeaderboardResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: GamePlayerLeaderboardResponseData })
		public results: Array<GamePlayerLeaderboardResponseData>;

	}

	export class GetLastLoginLeaderboardResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: GamePlayerLeaderboardResponseData })
		public results: Array<GamePlayerLeaderboardResponseData>;

	}

	export class GetCreateLeaderboardResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: GamePlayerLeaderboardResponseData })
		public results: Array<GamePlayerLeaderboardResponseData>;

	}

	export class GamePlayersWithUserIdResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: GamePlayerWithUserIdResponseData })
		public results: Array<GamePlayerWithUserIdResponseData>;

	}

	export class OnlineStatusResponseData {
		@NumberDataMember({ code: GNParameterCode.TsLastLogin })
		public tsLastLogin: number;

		@StringDataMember({ code: GNParameterCode.SocketId })
		public socketId: string;

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

	}

	export class ServerGetCurrencyLeaderboardRequestData extends GetCurrencyLeaderboardRequestData {
	}

	export class AdminGetCurrencyLeaderboardRequestData extends ServerGetCurrencyLeaderboardRequestData {
	}

	export class GetLastLoginLeaderboardRequestData {
		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: GNParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

		@BooleanDataMember({ code: GNParameterCode.LoadFromCache, defaultValue: true, isOptional: true })
		public loadFromCache?: boolean;

	}

	export class ServerGetLastLoginLeaderboardRequestData extends GetLastLoginLeaderboardRequestData {
	}

	export class AdminGetLastLoginLeaderboardRequestData extends ServerGetLastLoginLeaderboardRequestData {
	}

	export class GetStatisticsLogResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: GamePlayerLogResponseData })
		public results: Array<GamePlayerLogResponseData>;

		@StringDataMember({ code: GNParameterCode.Token, isOptional: true })
		public token?: string;

	}

	export class GetCurrencyLogResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: GamePlayerLogResponseData })
		public results: Array<GamePlayerLogResponseData>;

		@StringDataMember({ code: GNParameterCode.Token, isOptional: true })
		public token?: string;

	}

	export class EmptyResponseData {
	}

}
