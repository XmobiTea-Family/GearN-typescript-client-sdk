import { GNParameterCode } from "../../constant/parameterCode/GNParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "../DataMember";
import { GenericModels } from "./GenericModels";

export module CharacterPlayerModels {
	export class PlayerStatisticsParam {
		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@NumberDataMember({ code: GNParameterCode.Value })
		public value: number;

	}

	export class PlayerDataParam {
		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@DataMember({ code: GNParameterCode.Value })
		public value: any;

		@NumberDataMember({ code: GNParameterCode.Permission, mustInt: true })
		public permission: number;

	}

	export class PlayerCurrencyParam {
		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@NumberDataMember({ code: GNParameterCode.Amount })
		public amount: number;

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

		@NumberDataMember({ code: GNParameterCode.Role, mustInt: true })
		public role: number;

	}

	export class AddPlayerFriendRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: GNParameterCode.FriendId, minLength: 11, maxLength: 11, mustNonNull: true })
		public friendId: string;

		@StringDataMember({ code: GNParameterCode.CatalogId, minLength: 2, maxLength: 32, mustNonNull: true })
		public catalogId: string;

	}

	export class ServerAddPlayerFriendRequestData extends AddPlayerFriendRequestData {
	}

	export class AdminAddPlayerFriendRequestData extends ServerAddPlayerFriendRequestData {
	}

	export class AddSegmentRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: GNParameterCode.Value, minLength: 6, maxLength: 32, mustNonNull: true })
		public value: string;

	}

	export class ServerAddSegmentRequestData extends AddSegmentRequestData {
	}

	export class AdminAddSegmentRequestData extends ServerAddSegmentRequestData {
	}

	export class GetAvatarRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

	}

	export class ServerGetAvatarRequestData extends GetAvatarRequestData {
	}

	export class AdminGetAvatarRequestData extends ServerGetAvatarRequestData {
	}

	export class GetCatalogIdRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

	}

	export class ServerGetCatalogIdRequestData extends GetCatalogIdRequestData {
	}

	export class AdminGetCatalogIdRequestData extends ServerGetCatalogIdRequestData {
	}

	export class GetCountryCodeRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

	}

	export class ServerGetCountryCodeRequestData extends GetCountryCodeRequestData {
	}

	export class AdminGetCountryCodeRequestData extends ServerGetCountryCodeRequestData {
	}

	export class GetCustomDataRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@GNArrayDataMember({ code: GNParameterCode.CustomDataKeys, isOptional: true, elementCls: String })
		public customDataKeys?: Array<string>;

	}

	export class ServerGetCustomDataRequestData extends GetCustomDataRequestData {
	}

	export class AdminGetCustomDataRequestData extends ServerGetCustomDataRequestData {
	}

	export class GetDisplayNameRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

	}

	export class ServerGetDisplayNameRequestData extends GetDisplayNameRequestData {
	}

	export class AdminGetDisplayNameRequestData extends ServerGetDisplayNameRequestData {
	}

	export class GetFriendStatisticsLeaderboardAroundPlayerRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: GNParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 5, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

	}

	export class ServerGetFriendStatisticsLeaderboardAroundPlayerRequestData extends GetFriendStatisticsLeaderboardAroundPlayerRequestData {
	}

	export class AdminGetFriendStatisticsLeaderboardAroundPlayerRequestData extends ServerGetFriendStatisticsLeaderboardAroundPlayerRequestData {
	}

	export class GetFriendStatisticsLeaderboardRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: GNParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 5, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

	}

	export class ServerGetFriendStatisticsLeaderboardRequestData extends GetFriendStatisticsLeaderboardRequestData {
	}

	export class AdminGetFriendStatisticsLeaderboardRequestData extends ServerGetFriendStatisticsLeaderboardRequestData {
	}

	export class GetIpAddressCreateRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

	}

	export class ServerGetIpAddressCreateRequestData extends GetIpAddressCreateRequestData {
	}

	export class AdminGetIpAddressCreateRequestData extends ServerGetIpAddressCreateRequestData {
	}

	export class GetOwnerRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

	}

	export class ServerGetOwnerRequestData extends GetOwnerRequestData {
	}

	export class AdminGetOwnerRequestData extends ServerGetOwnerRequestData {
	}

	export class GetPlayerBanRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

	}

	export class ServerGetPlayerBanRequestData extends GetPlayerBanRequestData {
	}

	export class AdminGetPlayerBanRequestData extends ServerGetPlayerBanRequestData {
	}

	export class GetPlayerCurrencyRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@GNArrayDataMember({ code: GNParameterCode.PlayerCurrencyKeys, isOptional: true, elementCls: String })
		public playerCurrencyKeys?: Array<string>;

	}

	export class ServerGetPlayerCurrencyRequestData extends GetPlayerCurrencyRequestData {
	}

	export class AdminGetPlayerCurrencyRequestData extends ServerGetPlayerCurrencyRequestData {
	}

	export class GetPlayerDataRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@GNArrayDataMember({ code: GNParameterCode.PlayerDataKeys, isOptional: true })
		public playerDataKeys?: Array<string>;

	}

	export class ServerGetPlayerDataRequestData extends GetPlayerDataRequestData {
	}

	export class AdminGetPlayerDataRequestData extends ServerGetPlayerDataRequestData {
	}

	export class GetPlayerFriendRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@GNArrayDataMember({ code: GNParameterCode.FriendCatalogIds, isOptional: true, elementCls: String })
		public friendCatalogIds?: Array<string>;

	}

	export class ServerGetPlayerFriendRequestData extends GetPlayerFriendRequestData {
	}

	export class AdminGetPlayerFriendRequestData extends ServerGetPlayerFriendRequestData {
	}

	export class GetPlayerGroupRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@GNArrayDataMember({ code: GNParameterCode.GroupCatalogIds, isOptional: true, elementCls: String })
		public groupCatalogIds?: Array<string>;

	}

	export class ServerGetPlayerGroupRequestData extends GetPlayerGroupRequestData {
	}

	export class AdminGetPlayerGroupRequestData extends ServerGetPlayerGroupRequestData {
	}

	export class GetPlayerInformationRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class ServerGetPlayerInformationRequestData extends GetPlayerInformationRequestData {
	}

	export class AdminGetPlayerInformationRequestData extends ServerGetPlayerInformationRequestData {
	}

	export class GetPlayerInventoryRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@GNArrayDataMember({ code: GNParameterCode.ItemCatalogIds, isOptional: true, elementCls: String })
		public itemCatalogIds?: Array<string>;

	}

	export class ServerGetPlayerInventoryRequestData extends GetPlayerInventoryRequestData {
	}

	export class AdminGetPlayerInventoryRequestData extends ServerGetPlayerInventoryRequestData {
	}

	export class GetPlayerStatisticsRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@GNArrayDataMember({ code: GNParameterCode.StatisticsKeys, isOptional: true, elementCls: String })
		public statisticsKeys?: Array<string>;

	}

	export class ServerGetPlayerStatisticsRequestData extends GetPlayerStatisticsRequestData {
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

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 5, maxValue: 100, mustInt: true, isOptional: true })
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

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 5, maxValue: 100, mustInt: true, isOptional: true })
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

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 5, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

	}

	export class ServerGetPlayersWithTagRequestData extends GetPlayersWithTagRequestData {
	}

	export class AdminGetPlayersWithTagRequestData extends ServerGetPlayersWithTagRequestData {
	}

	export class GetRemoveStatusRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

	}

	export class ServerGetRemoveStatusRequestData extends GetRemoveStatusRequestData {
	}

	export class AdminGetRemoveStatusRequestData extends ServerGetRemoveStatusRequestData {
	}

	export class GetSegmentRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

	}

	export class ServerGetSegmentRequestData extends GetSegmentRequestData {
	}

	export class AdminGetSegmentRequestData extends ServerGetSegmentRequestData {
	}

	export class GetStatisticsLeaderboardAroundPlayerRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: GNParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 5, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

	}

	export class ServerGetStatisticsLeaderboardAroundPlayerRequestData extends GetStatisticsLeaderboardAroundPlayerRequestData {
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

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 5, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

		@BooleanDataMember({ code: GNParameterCode.LoadFromCache, defaultValue: true, isOptional: true })
		public loadFromCache?: boolean;

	}

	export class ServerGetStatisticsLeaderboardRequestData extends GetStatisticsLeaderboardRequestData {
	}

	export class AdminGetStatisticsLeaderboardRequestData extends ServerGetStatisticsLeaderboardRequestData {
	}

	export class GetTagRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@GNArrayDataMember({ code: GNParameterCode.TagKeys, elementCls: String })
		public tagKeys: Array<string>;

	}

	export class ServerGetTagRequestData extends GetTagRequestData {
	}

	export class AdminGetTagRequestData extends ServerGetTagRequestData {
	}

	export class GetTsCreateRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

	}

	export class ServerGetTsCreateRequestData extends GetTsCreateRequestData {
	}

	export class AdminGetTsCreateRequestData extends ServerGetTsCreateRequestData {
	}

	export class GetTsLastLoginRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

	}

	export class ServerGetTsLastLoginRequestData extends GetTsLastLoginRequestData {
	}

	export class AdminGetTsLastLoginRequestData extends ServerGetTsLastLoginRequestData {
	}

	export class GrantGroupRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: GNParameterCode.CatalogId, minLength: 2, maxLength: 32, mustNonNull: true })
		public catalogId: string;

		@GNArrayDataMember({ code: GNParameterCode.GroupMembers, isOptional: true, elementCls: GroupMemberParam })
		public groupMembers?: Array<GroupMemberParam>;

		@StringDataMember({ code: GNParameterCode.DisplayName, defaultValue: "", isOptional: true })
		public displayName?: string;

	}

	export class ServerGrantGroupRequestData extends GrantGroupRequestData {
	}

	export class AdminGrantGroupRequestData extends ServerGrantGroupRequestData {
	}

	export class GrantPlayerItemRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: GNParameterCode.CatalogId, minLength: 2, maxLength: 32, mustNonNull: true })
		public catalogId: string;

		@StringDataMember({ code: GNParameterCode.ClassId, minLength: 2, maxLength: 32, mustNonNull: true })
		public classId: string;

		@StringDataMember({ code: GNParameterCode.DisplayName, defaultValue: "", isOptional: true })
		public displayName?: string;

		@NumberDataMember({ code: GNParameterCode.Amount, defaultValue: 1, isOptional: true })
		public amount?: number;

	}

	export class ServerGrantPlayerItemRequestData extends GrantPlayerItemRequestData {
	}

	export class AdminGrantPlayerItemRequestData extends ServerGrantPlayerItemRequestData {
	}

	export class JoinGroupRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 10, maxLength: 10, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

	}

	export class ServerJoinGroupRequestData extends JoinGroupRequestData {
	}

	export class AdminJoinGroupRequestData extends ServerJoinGroupRequestData {
	}

	export class LeaveGroupRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 10, maxLength: 10, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: GNParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
		public groupId: string;

	}

	export class ServerLeaveGroupRequestData extends LeaveGroupRequestData {
	}

	export class AdminLeaveGroupRequestData extends ServerLeaveGroupRequestData {
	}

	export class RemovePlayerFriendRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: GNParameterCode.FriendId, minLength: 11, maxLength: 11, mustNonNull: true })
		public friendId: string;

	}

	export class ServerRemovePlayerFriendRequestData extends RemovePlayerFriendRequestData {
	}

	export class AdminRemovePlayerFriendRequestData extends ServerRemovePlayerFriendRequestData {
	}

	export class RemovePlayerItemRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

	}

	export class ServerRemovePlayerItemRequestData extends RemovePlayerItemRequestData {
	}

	export class AdminRemovePlayerItemRequestData extends ServerRemovePlayerItemRequestData {
	}

	export class RemoveSegmentRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: GNParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
		public value: string;

	}

	export class ServerRemoveSegmentRequestData extends RemoveSegmentRequestData {
	}

	export class AdminRemoveSegmentRequestData extends ServerRemoveSegmentRequestData {
	}

	export class RemoveTagRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: GNParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

	}

	export class ServerRemoveTagRequestData extends RemoveTagRequestData {
	}

	export class AdminRemoveTagRequestData extends ServerRemoveTagRequestData {
	}

	export class SetAvatarRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@NumberDataMember({ code: GNParameterCode.Type, mustInt: true })
		public type: number;

		@StringDataMember({ code: GNParameterCode.Value, minLength: 1, maxLength: 128, mustNonNull: true })
		public value: string;

	}

	export class ServerSetAvatarRequestData extends SetAvatarRequestData {
	}

	export class AdminSetAvatarRequestData extends ServerSetAvatarRequestData {
	}

	export class SetCountryCodeRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: GNParameterCode.CountryCode, minLength: 2, maxLength: 32 })
		public countryCode: string;

	}

	export class ServerSetCountryCodeRequestData extends SetCountryCodeRequestData {
	}

	export class AdminSetCountryCodeRequestData extends ServerSetCountryCodeRequestData {
	}

	export class SetCustomDataRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@GNArrayDataMember({ code: GNParameterCode.CustomDatas, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: CustomDataParam })
		public customData: Array<CustomDataParam>;

	}

	export class ServerSetCustomDataRequestData extends SetCustomDataRequestData {
	}

	export class AdminSetCustomDataRequestData extends ServerSetCustomDataRequestData {
	}

	export class SetDisplayNameRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: GNParameterCode.DisplayName, minLength: 5, maxLength: 32, mustNonNull: true })
		public displayName: string;

	}

	export class ServerSetDisplayNameRequestData extends SetDisplayNameRequestData {
	}

	export class AdminSetDisplayNameRequestData extends ServerSetDisplayNameRequestData {
	}

	export class SetOwnerRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: GNParameterCode.OwnerId, minLength: 10, maxLength: 10, mustNonNull: true })
		public newOwnerId: string;

	}

	export class ServerSetOwnerRequestData extends SetOwnerRequestData {
	}

	export class AdminSetOwnerRequestData extends ServerSetOwnerRequestData {
	}

	export class SetPlayerBanRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@NumberDataMember({ code: GNParameterCode.TsExpire })
		public tsExpire: number;

		@StringDataMember({ code: GNParameterCode.Reason })
		public reason: string;

	}

	export class ServerSetPlayerBanRequestData extends SetPlayerBanRequestData {
	}

	export class AdminSetPlayerBanRequestData extends ServerSetPlayerBanRequestData {
	}

	export class SetPlayerCurrencyRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@GNArrayDataMember({ code: GNParameterCode.PlayerCurrencies, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: PlayerCurrencyParam })
		public playerCurrencyParams: Array<PlayerCurrencyParam>;

	}

	export class ServerSetPlayerCurrencyRequestData extends SetPlayerCurrencyRequestData {
	}

	export class AdminSetPlayerCurrencyRequestData extends ServerSetPlayerCurrencyRequestData {
	}

	export class SetPlayerDataRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@GNArrayDataMember({ code: GNParameterCode.PlayerDatas, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: PlayerDataParam })
		public playerDataParams: Array<PlayerDataParam>;

	}

	export class ServerSetPlayerDataRequestData extends SetPlayerDataRequestData {
	}

	export class AdminSetPlayerDataRequestData extends ServerSetPlayerDataRequestData {
	}

	export class SetPlayerStatisticsRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@GNArrayDataMember({ code: GNParameterCode.PlayerStatistics, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: PlayerStatisticsParam })
		public playerStatisticsParams: Array<PlayerStatisticsParam>;

	}

	export class ServerSetPlayerStatisticsRequestData extends SetPlayerStatisticsRequestData {
	}

	export class AdminSetPlayerStatisticsRequestData extends ServerSetPlayerStatisticsRequestData {
	}

	export class SetRemoveStatusRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: GNParameterCode.Reason, isOptional: true, defaultValue: "" })
		public reason?: string;

	}

	export class ServerSetRemoveStatusRequestData extends SetRemoveStatusRequestData {
	}

	export class AdminSetRemoveStatusRequestData extends ServerSetRemoveStatusRequestData {
	}

	export class SetTagRequestData {
		@StringDataMember({ code: GNParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
		public characterId: string;

		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@StringDataMember({ code: GNParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
		public value: string;

	}

	export class ServerSetTagRequestData extends SetTagRequestData {
	}

	export class AdminSetTagRequestData extends ServerSetTagRequestData {
	}

	export class InfoRequestParam {
		@BooleanDataMember({ code: GNParameterCode.CatalogId, isOptional: true, defaultValue: false })
		public catalogId?: boolean;

		@BooleanDataMember({ code: GNParameterCode.Owner, isOptional: true, defaultValue: false })
		public owner?: boolean;

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

	export class InfoResponseParameters {
		@StringDataMember({ code: GNParameterCode.CatalogId, isOptional: true })
		public catalogId?: string;

		@GNHashtableDataMember({ code: GNParameterCode.Owner, isOptional: true })
		public owner?: GenericModels.OwnerItem;

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

		@GNHashtableDataMember({ code: GNParameterCode.PlayerBan, isOptional: true })
		public playerBan?: GenericModels.BanItem;

		@GNArrayDataMember({ code: GNParameterCode.PlayerDatas, isOptional: true, elementCls: GenericModels.DataItem })
		public playerDatas?: Array<GenericModels.DataItem>;

		@GNArrayDataMember({ code: GNParameterCode.PlayerCurrencies, isOptional: true, elementCls: GenericModels.CurrencyItem })
		public playerCurrencies?: Array<GenericModels.CurrencyItem>;

		@GNArrayDataMember({ code: GNParameterCode.PlayerStatistics, isOptional: true, elementCls: GenericModels.StatisticsItem })
		public playerStatistics?: Array<GenericModels.StatisticsItem>;

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

	export class CharacterPlayerResponseData {
		@GNHashtableDataMember({ code: GNParameterCode.InfoResponseParameters })
		public infoResponseParameters: InfoResponseParameters;

	}

	export class CharacterPlayerWithCharacterIdResponseData extends CharacterPlayerResponseData {
		@StringDataMember({ code: GNParameterCode.CharacterId })
		public characterId: string;

	}

	export class CharacterPlayerLeaderboardResponseData extends CharacterPlayerWithCharacterIdResponseData {
		@NumberDataMember({ code: GNParameterCode.Position })
		public position: number;

	}

	export class GetStatisticsLeaderboardResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: CharacterPlayerLeaderboardResponseData })
		public results: Array<CharacterPlayerLeaderboardResponseData>;

	}

	export class MasterPlayersWithCharacterIdResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: CharacterPlayerWithCharacterIdResponseData })
		public results: Array<CharacterPlayerWithCharacterIdResponseData>;

	}

	export class EmptyResponseData {
	}

}
