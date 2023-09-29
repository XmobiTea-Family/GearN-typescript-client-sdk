import { GNHashtable } from "../../common/GNData";
import { GNParameterCode } from "../../constant/parameterCode/GNParameterCode";
import { ParameterCode } from "../../constant/parameterCode/ParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "../DataMember";

export module DashboardModels {
	export class PermissionRulesParam {
		@BooleanDataMember({ code: GNParameterCode.SelfEnable, isOptional: true })
		public selfEnable?: boolean;

		@BooleanDataMember({ code: GNParameterCode.OtherSelfEnable, isOptional: true })
		public otherSelfEnable?: boolean;

		@BooleanDataMember({ code: GNParameterCode.AdminSelfEnable, isOptional: true })
		public adminSelfEnable?: boolean;

		@BooleanDataMember({ code: GNParameterCode.ServerSelfEnable, isOptional: true })
		public serverSelfEnable?: boolean;

	}

	export class FriendCatalogSettingsParam {
		@StringDataMember({ code: GNParameterCode.CatalogId, minLength: 2, maxLength: 32 })
		public catalogId: string;

		@BooleanDataMember({ code: GNParameterCode.ForceAcceptFriend })
		public forceAcceptFriend: boolean;

	}

	export class ItemClassSettingsParam {
		@StringDataMember({ code: GNParameterCode.ClassId, minLength: 2, maxLength: 32 })
		public classId: string;

		@StringDataMember({ code: GNParameterCode.DisplayName, isOptional: true })
		public displayName?: string;

	}

	export class ItemCatalogSettingsParam {
		@StringDataMember({ code: GNParameterCode.CatalogId, minLength: 2, maxLength: 32 })
		public catalogId: string;

		@NumberDataMember({ code: GNParameterCode.ItemType, mustInt: true })
		public itemType: number;

		@GNArrayDataMember({ code: GNParameterCode.ItemClassSettings, elementCls: ItemClassSettingsParam })
		public itemClassSettings: Array<ItemClassSettingsParam>;

	}

	export class GroupCatalogSettingsParam {
		@StringDataMember({ code: GNParameterCode.CatalogId, minLength: 2, maxLength: 32 })
		public catalogId: string;

		@StringDataMember({ code: GNParameterCode.DisplayName, isOptional: true })
		public displayName?: string;

		@BooleanDataMember({ code: GNParameterCode.ForceAcceptMember })
		public forceAcceptMember: boolean;

	}

	export class TagSettingsParam {
		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32 })
		public key: string;

		@StringDataMember({ code: GNParameterCode.DisplayName, isOptional: true })
		public displayName?: string;

	}

	export class DataSettingsParam {
		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32 })
		public key: string;

		@NumberDataMember({ code: GNParameterCode.Permission, mustInt: true })
		public permission: number;

	}

	export class StatisticsSettingsParam {
		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32 })
		public key: string;

		@NumberDataMember({ code: GNParameterCode.StatisticsAggregationMethod, mustInt: true })
		public statisticsAggregationMethod: number;

		@NumberDataMember({ code: GNParameterCode.MaximumValue, isOptional: true, defaultValue: 0 })
		public maximumValue?: number;

		@NumberDataMember({ code: GNParameterCode.MinimumValue, isOptional: true, defaultValue: 0 })
		public minimumValue?: number;

	}

	export class CurrencySettingsParam {
		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32 })
		public key: string;

		@NumberDataMember({ code: GNParameterCode.InitialValue })
		public initialValue: number;

	}

	export class CharacterCatalogSettingsParam {
		@StringDataMember({ code: GNParameterCode.CatalogId, minLength: 2, maxLength: 32 })
		public catalogId: string;

		@StringDataMember({ code: GNParameterCode.DisplayName, isOptional: true })
		public displayName?: string;

	}

	export class CharacterPlayerPermissionRulesParam {
		@GNHashtableDataMember({ code: GNParameterCode.AddSegment, isOptional: true })
		public addSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.RemoveSegment, isOptional: true })
		public removeSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetSegment, isOptional: true })
		public getSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetTag, isOptional: true })
		public setTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.RemoveTag, isOptional: true })
		public removeTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetTag, isOptional: true })
		public getTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetDisplayName, isOptional: true })
		public getDisplayName?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetDisplayName, isOptional: true })
		public setDisplayName?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetTsCreate, isOptional: true })
		public getTsCreate?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetIpAddressCreate, isOptional: true })
		public getIpAddressCreate?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetTsLastLogin, isOptional: true })
		public getTsLastLogin?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetPlayerBan, isOptional: true })
		public setPlayerBan?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayerBan, isOptional: true })
		public getPlayerBan?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetCountryCode, isOptional: true })
		public setCountryCode?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetCountryCode, isOptional: true })
		public getCountryCode?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetAvatar, isOptional: true })
		public setAvatar?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetAvatar, isOptional: true })
		public getAvatar?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetPlayerCurrency, isOptional: true })
		public setPlayerCurrency?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayerCurrency, isOptional: true })
		public getPlayerCurrency?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetPlayerStatistics, isOptional: true })
		public setPlayerStatistics?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayerStatistics, isOptional: true })
		public getPlayerStatistics?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetStatisticsLeaderboard, isOptional: true })
		public getStatisticsLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetStatisticsLeaderboardAroundPlayer, isOptional: true })
		public getStatisticsLeaderboardAroundPlayer?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetCustomData, isOptional: true })
		public getCustomData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetCustomData, isOptional: true })
		public setCustomData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetPlayerData, isOptional: true })
		public setPlayerData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayerData, isOptional: true })
		public getPlayerData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayerInformation, isOptional: true })
		public getPlayerInformation?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayersWithSegment, isOptional: true })
		public getPlayersWithSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayersWithTag, isOptional: true })
		public getPlayersWithTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetCatalogId, isOptional: true })
		public getCatalogId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetOwner, isOptional: true })
		public getOwner?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetRemoveStatus, isOptional: true })
		public getRemoveStatus?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayerFriend, isOptional: true })
		public getPlayerFriend?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayerGroup, isOptional: true })
		public getPlayerGroup?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayerInventory, isOptional: true })
		public getPlayerInventory?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.RemovePlayerItem, isOptional: true })
		public removePlayerItem?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GrantPlayerItem, isOptional: true })
		public grantPlayerItem?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GrantGroup, isOptional: true })
		public grantGroup?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.JoinGroup, isOptional: true })
		public joinGroup?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.LeaveGroup, isOptional: true })
		public leaveGroup?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetOwner, isOptional: true })
		public setOwner?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.AddPlayerFriend, isOptional: true })
		public addPlayerFriend?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.RemovePlayerFriend, isOptional: true })
		public removePlayerFriend?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayersWithDisplayName, isOptional: true })
		public getPlayersWithDisplayName?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetRemoveStatus, isOptional: true })
		public setRemoveStatus?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetFriendStatisticsLeaderboardAroundPlayer, isOptional: true })
		public getFriendStatisticsLeaderboardAroundPlayer?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetFriendStatisticsLeaderboard, isOptional: true })
		public getFriendStatisticsLeaderboard?: PermissionRulesParam;

	}

	export class CharacterPlayerSettingsParam {
		@GNArrayDataMember({ code: GNParameterCode.CurrencySettings, elementCls: CurrencySettingsParam, isOptional: true })
		public playerCurrencySettings?: Array<CurrencySettingsParam>;

		@GNArrayDataMember({ code: GNParameterCode.StatisticsSettings, elementCls: StatisticsSettingsParam, isOptional: true })
		public playerStatisticsSettings?: Array<StatisticsSettingsParam>;

		@GNArrayDataMember({ code: GNParameterCode.DatasSettings, elementCls: DataSettingsParam, isOptional: true })
		public playerDatasSettings?: Array<DataSettingsParam>;

		@GNArrayDataMember({ code: GNParameterCode.CustomDatasSettings, elementCls: DataSettingsParam, isOptional: true })
		public customDatasSettings?: Array<DataSettingsParam>;

		@GNArrayDataMember({ code: GNParameterCode.TagsSettings, elementCls: TagSettingsParam, isOptional: true })
		public tagsSettings?: Array<TagSettingsParam>;

		@GNArrayDataMember({ code: GNParameterCode.GroupCatalogSettings, elementCls: GroupCatalogSettingsParam, isOptional: true })
		public playerGroupCatalogSettings?: Array<GroupCatalogSettingsParam>;

		@GNArrayDataMember({ code: GNParameterCode.ItemCatalogSettings, elementCls: ItemCatalogSettingsParam, isOptional: true })
		public playerItemCatalogSettings?: Array<ItemCatalogSettingsParam>;

		@GNArrayDataMember({ code: GNParameterCode.FriendCatalogSettings, elementCls: FriendCatalogSettingsParam, isOptional: true })
		public playerFriendCatalogSettings?: Array<FriendCatalogSettingsParam>;

	}

	export class ContentPermissionRulesParam {
		@GNHashtableDataMember({ code: GNParameterCode.GetContentData, isOptional: true })
		public getContent?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetContentData, isOptional: true })
		public setContent?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.CreateNewFileUploadInfo, isOptional: true })
		public createNewFileUploadInfo?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetFileUploadInfoList, isOptional: true })
		public getFileUploadInfoList?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetFileUploadInfo, isOptional: true })
		public getFileUploadInfo?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.RemoveFileUploadInfo, isOptional: true })
		public removeFileUploadInfo?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.RequestDownloadFileUploadInfo, isOptional: true })
		public requestDownloadFileUploadInfo?: PermissionRulesParam;

	}

	export class ThirtPartyAppleSettingsParam {
		@StringDataMember({ code: GNParameterCode.AppleClientId })
		public appleClientId: string;

		@BooleanDataMember({ code: GNParameterCode.SandboxEnable })
		public sandboxEnable: boolean;

	}

	export class ThirtPartyFacebookSettingsParam {
		@StringDataMember({ code: GNParameterCode.FacebookAppId })
		public facebookAppId: string;

		@StringDataMember({ code: GNParameterCode.FacebookAppToken })
		public facebookAppToken: string;

		@StringDataMember({ code: GNParameterCode.FacebookInappSecret })
		public facebookInappSecret: string;

	}

	export class ThirtPartyGoogleSettingsParam {
		@StringDataMember({ code: GNParameterCode.GoogleClientId, isOptional: true })
		public googleClientId?: string;

		@StringDataMember({ code: GNParameterCode.PackageId, isOptional: true })
		public packageId?: string;

		@StringDataMember({ code: GNParameterCode.PublicRSAKey, isOptional: true })
		public publicRSAKey?: string;

	}

	export class ThirtPartyParam {
		@GNHashtableDataMember({ code: GNParameterCode.GoogleSettings, isOptional: true })
		public googleSettings?: ThirtPartyGoogleSettingsParam;

		@GNHashtableDataMember({ code: GNParameterCode.FacebookSettings, isOptional: true })
		public facebookSettings?: ThirtPartyFacebookSettingsParam;

		@GNHashtableDataMember({ code: GNParameterCode.AppleSettings, isOptional: true })
		public appleSettings?: ThirtPartyAppleSettingsParam;

	}

	export class GamePlayerPermissionRulesParam {
		@GNHashtableDataMember({ code: GNParameterCode.AddSegment, isOptional: true })
		public addSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.RemoveSegment, isOptional: true })
		public removeSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetSegment, isOptional: true })
		public getSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetTag, isOptional: true })
		public setTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.RemoveTag, isOptional: true })
		public removeTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetTag, isOptional: true })
		public getTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetDisplayName, isOptional: true })
		public getDisplayName?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetDisplayName, isOptional: true })
		public setDisplayName?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetTsCreate, isOptional: true })
		public getTsCreate?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetIpAddressCreate, isOptional: true })
		public getIpAddressCreate?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetTsLastLogin, isOptional: true })
		public getTsLastLogin?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetPlayerBan, isOptional: true })
		public setPlayerBan?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayerBan, isOptional: true })
		public getPlayerBan?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetCountryCode, isOptional: true })
		public setCountryCode?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetCountryCode, isOptional: true })
		public getCountryCode?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetAvatar, isOptional: true })
		public setAvatar?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetAvatar, isOptional: true })
		public getAvatar?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetPlayerCurrency, isOptional: true })
		public setPlayerCurrency?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayerCurrency, isOptional: true })
		public getPlayerCurrency?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetPlayerStatistics, isOptional: true })
		public setPlayerStatistics?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayerStatistics, isOptional: true })
		public getPlayerStatistics?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetStatisticsLeaderboard, isOptional: true })
		public getStatisticsLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetStatisticsLeaderboardAroundPlayer, isOptional: true })
		public getStatisticsLeaderboardAroundPlayer?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetCustomData, isOptional: true })
		public getCustomData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetCustomData, isOptional: true })
		public setCustomData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetPlayerData, isOptional: true })
		public setPlayerData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayerData, isOptional: true })
		public getPlayerData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayerInformation, isOptional: true })
		public getPlayerInformation?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayersWithSegment, isOptional: true })
		public getPlayersWithSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayersWithTag, isOptional: true })
		public getPlayersWithTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayerCharacter, isOptional: true })
		public getPlayerCharacter?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayerInventory, isOptional: true })
		public getPlayerInventory?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayerGroup, isOptional: true })
		public getPlayerGroup?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayerFriend, isOptional: true })
		public getPlayerFriend?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.RemovePlayerItem, isOptional: true })
		public removePlayerItem?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetOnlineStatus, isOptional: true })
		public getOnlineStatus?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GrantGroup, isOptional: true })
		public grantGroup?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GrantPlayerItem, isOptional: true })
		public grantPlayerItem?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GrantPlayerCharacter, isOptional: true })
		public grantPlayerCharacter?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.AddPlayerFriend, isOptional: true })
		public addPlayerFriend?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.RemovePlayerFriend, isOptional: true })
		public removePlayerFriend?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.RemovePlayerCharacter, isOptional: true })
		public removePlayerCharacter?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.JoinGroup, isOptional: true })
		public joinGroup?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.LeaveGroup, isOptional: true })
		public leaveGroup?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayersWithDisplayName, isOptional: true })
		public getPlayersWithDisplayName?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetFriendStatisticsLeaderboardAroundPlayer, isOptional: true })
		public getFriendStatisticsLeaderboardAroundPlayer?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetFriendStatisticsLeaderboard, isOptional: true })
		public getFriendStatisticsLeaderboard?: PermissionRulesParam;

	}

	export class GamePlayerSettingsParam {
		@GNArrayDataMember({ code: GNParameterCode.CurrencySettings, elementCls: CurrencySettingsParam, isOptional: true })
		public playerCurrencySettings?: Array<CurrencySettingsParam>;

		@GNArrayDataMember({ code: GNParameterCode.StatisticsSettings, elementCls: StatisticsSettingsParam, isOptional: true })
		public playerStatisticsSettings?: Array<StatisticsSettingsParam>;

		@GNArrayDataMember({ code: GNParameterCode.DatasSettings, elementCls: DataSettingsParam, isOptional: true })
		public playerDatasSettings?: Array<DataSettingsParam>;

		@GNArrayDataMember({ code: GNParameterCode.CustomDatasSettings, elementCls: DataSettingsParam, isOptional: true })
		public customDatasSettings?: Array<DataSettingsParam>;

		@GNArrayDataMember({ code: GNParameterCode.TagsSettings, elementCls: TagSettingsParam, isOptional: true })
		public tagsSettings?: Array<TagSettingsParam>;

		@GNArrayDataMember({ code: GNParameterCode.CharacterCatalogSettings, elementCls: CharacterCatalogSettingsParam, isOptional: true })
		public playerCharacterCatalogSettings?: Array<CharacterCatalogSettingsParam>;

		@GNArrayDataMember({ code: GNParameterCode.GroupCatalogSettings, elementCls: GroupCatalogSettingsParam, isOptional: true })
		public playerGroupCatalogSettings?: Array<GroupCatalogSettingsParam>;

		@GNArrayDataMember({ code: GNParameterCode.ItemCatalogSettings, elementCls: ItemCatalogSettingsParam, isOptional: true })
		public playerItemCatalogSettings?: Array<ItemCatalogSettingsParam>;

		@GNArrayDataMember({ code: GNParameterCode.FriendCatalogSettings, elementCls: FriendCatalogSettingsParam, isOptional: true })
		public playerFriendCatalogSettings?: Array<FriendCatalogSettingsParam>;

	}

	export class GroupSettingsParam {
		@GNArrayDataMember({ code: GNParameterCode.CurrencySettings, elementCls: CurrencySettingsParam, isOptional: true })
		public groupCurrencySettings?: Array<CurrencySettingsParam>;

		@GNArrayDataMember({ code: GNParameterCode.StatisticsSettings, elementCls: StatisticsSettingsParam, isOptional: true })
		public groupStatisticsSettings?: Array<StatisticsSettingsParam>;

		@GNArrayDataMember({ code: GNParameterCode.DatasSettings, elementCls: DataSettingsParam, isOptional: true })
		public groupDatasSettings?: Array<DataSettingsParam>;

		@GNArrayDataMember({ code: GNParameterCode.CustomDatasSettings, elementCls: DataSettingsParam, isOptional: true })
		public customDatasSettings?: Array<DataSettingsParam>;

		@GNArrayDataMember({ code: GNParameterCode.TagsSettings, elementCls: TagSettingsParam, isOptional: true })
		public tagsSettings?: Array<TagSettingsParam>;

		@GNArrayDataMember({ code: GNParameterCode.ItemCatalogSettings, elementCls: ItemCatalogSettingsParam, isOptional: true })
		public groupItemCatalogSettings?: Array<ItemCatalogSettingsParam>;

	}

	export class InventorySettingsParam {
		@GNArrayDataMember({ code: GNParameterCode.StatisticsSettings, elementCls: StatisticsSettingsParam, isOptional: true })
		public inventoryStatisticsSettings?: Array<StatisticsSettingsParam>;

		@GNArrayDataMember({ code: GNParameterCode.DatasSettings, elementCls: DataSettingsParam, isOptional: true })
		public inventoryDatasSettings?: Array<DataSettingsParam>;

		@GNArrayDataMember({ code: GNParameterCode.CustomDatasSettings, elementCls: DataSettingsParam, isOptional: true })
		public customDatasSettings?: Array<DataSettingsParam>;

		@GNArrayDataMember({ code: GNParameterCode.TagsSettings, elementCls: TagSettingsParam, isOptional: true })
		public tagsSettings?: Array<TagSettingsParam>;

	}

	export class GameSettingsParam {
		@GNHashtableDataMember({ code: GNParameterCode.GamePlayerSettings, isOptional: true })
		public gamePlayerSettings?: GamePlayerSettingsParam;

		@GNHashtableDataMember({ code: GNParameterCode.CharacterPlayerSettings, isOptional: true })
		public characterPlayerSettings?: CharacterPlayerSettingsParam;

		@GNHashtableDataMember({ code: GNParameterCode.GroupSettings, isOptional: true })
		public groupSettings?: GroupSettingsParam;

		@GNHashtableDataMember({ code: GNParameterCode.InventorySettings, isOptional: true })
		public inventorySettings?: InventorySettingsParam;

	}

	export class GenericServiceSettingsParam {
		@StringDataMember({ code: GNParameterCode.ServiceName, minLength: 2, maxLength: 32 })
		public serviceName: string;

	}

	export class GroupPermissionRulesParam {
		@GNHashtableDataMember({ code: GNParameterCode.AddSegment, isOptional: true })
		public addSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.RemoveSegment, isOptional: true })
		public removeSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetSegment, isOptional: true })
		public getSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetTag, isOptional: true })
		public setTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.RemoveTag, isOptional: true })
		public removeTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetTag, isOptional: true })
		public getTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetDisplayName, isOptional: true })
		public getDisplayName?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetDisplayName, isOptional: true })
		public setDisplayName?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetTsCreate, isOptional: true })
		public getTsCreate?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetAvatar, isOptional: true })
		public setAvatar?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetAvatar, isOptional: true })
		public getAvatar?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetGroupCurrency, isOptional: true })
		public setGroupCurrency?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetGroupCurrency, isOptional: true })
		public getGroupCurrency?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetGroupStatistics, isOptional: true })
		public setGroupStatistics?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetGroupStatistics, isOptional: true })
		public getGroupStatistics?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetStatisticsLeaderboard, isOptional: true })
		public getStatisticsLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetStatisticsLeaderboardAroundGroup, isOptional: true })
		public getStatisticsLeaderboardAroundGroup?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetCustomData, isOptional: true })
		public getCustomData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetCustomData, isOptional: true })
		public setCustomData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetGroupData, isOptional: true })
		public setGroupData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetGroupData, isOptional: true })
		public getGroupData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetGroupInformation, isOptional: true })
		public getGroupInformation?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetGroupsWithSegment, isOptional: true })
		public getGroupsWithSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetGroupsWithTag, isOptional: true })
		public getGroupsWithTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetCatalogId, isOptional: true })
		public getCatalogId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetRemoveStatus, isOptional: true })
		public getRemoveStatus?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetGroupInventory, isOptional: true })
		public getGroupInventory?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.RemoveGroupItem, isOptional: true })
		public removeGroupItem?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GrantGroupItem, isOptional: true })
		public grantGroupItem?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetMembers, isOptional: true })
		public getMembers?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.AddMember, isOptional: true })
		public addMember?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.RemoveMember, isOptional: true })
		public removeMember?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SendGroupMessage, isOptional: true })
		public sendGroupMessage?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetGroupMessage, isOptional: true })
		public getGroupMessage?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetRemoveStatus, isOptional: true })
		public setRemoveStatus?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetGroupsWithDisplayName, isOptional: true })
		public getGroupsWithDisplayName?: PermissionRulesParam;

	}

	export class InventoryPermissionRulesParam {
		@GNHashtableDataMember({ code: GNParameterCode.AddSegment, isOptional: true })
		public addSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.RemoveSegment, isOptional: true })
		public removeSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetSegment, isOptional: true })
		public getSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetTag, isOptional: true })
		public setTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.RemoveTag, isOptional: true })
		public removeTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetTag, isOptional: true })
		public getTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetDisplayName, isOptional: true })
		public getDisplayName?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetDisplayName, isOptional: true })
		public setDisplayName?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetTsCreate, isOptional: true })
		public getTsCreate?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetAvatar, isOptional: true })
		public setAvatar?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetAvatar, isOptional: true })
		public getAvatar?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetItemStatistics, isOptional: true })
		public setItemStatistics?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetItemStatistics, isOptional: true })
		public getItemStatistics?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetStatisticsLeaderboard, isOptional: true })
		public getStatisticsLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetStatisticsLeaderboardAroundItem, isOptional: true })
		public getStatisticsLeaderboardAroundItem?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetCustomData, isOptional: true })
		public getCustomData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetCustomData, isOptional: true })
		public setCustomData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetItemData, isOptional: true })
		public setItemData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetItemData, isOptional: true })
		public getItemData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetItemInformation, isOptional: true })
		public getItemInformation?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetItemsWithSegment, isOptional: true })
		public getItemsWithSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetItemsWithTag, isOptional: true })
		public getItemsWithTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetCatalogId, isOptional: true })
		public getCatalogId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetClassId, isOptional: true })
		public getClassId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetItemType, isOptional: true })
		public getItemType?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetAmount, isOptional: true })
		public getAmount?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetOwner, isOptional: true })
		public getOwner?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetRemoveStatus, isOptional: true })
		public getRemoveStatus?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetAmount, isOptional: true })
		public setAmount?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetOwner, isOptional: true })
		public setOwner?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetRemoveStatus, isOptional: true })
		public setRemoveStatus?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetItemsWithDisplayName, isOptional: true })
		public getItemsWithDisplayName?: PermissionRulesParam;

	}

	export class MasterAdminPermissionRulesParam {
		@GNHashtableDataMember({ code: GNParameterCode.SetMasterGameSettings, isOptional: true })
		public setMasterGameSettings?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GrantAdminAccount, isOptional: true })
		public grantAdminAccount?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.RemoveAdminAccount, isOptional: true })
		public removeAdminAccount?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetPasswordAdminAccount, isOptional: true })
		public setPasswordAdminAccount?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetSecretKeyAdminAccount, isOptional: true })
		public setSecretKeyAdminAccount?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetGameInformation, isOptional: true })
		public setGameInformation?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GrantGame, isOptional: true })
		public grantGame?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.ChangePasswordAdminAccount, isOptional: true })
		public changePasswordAdminAccount?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetAdminAccountList, isOptional: true })
		public getAdminAccountList?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetGameInformation, isOptional: true })
		public getGameInformation?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetGameList, isOptional: true })
		public getGameList?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetMasterGameSettings, isOptional: true })
		public getMasterGameSettings?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetServerLog, isOptional: true })
		public getServerLog?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetSecretInfoInformation, isOptional: true })
		public getSecretInfoInformation?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetSecretInfoList, isOptional: true })
		public getSecretInfoList?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GrantSecretInfo, isOptional: true })
		public grantSecretInfo?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetSecretInfoInformation, isOptional: true })
		public setSecretInfoInformation?: PermissionRulesParam;

	}

	export class MasterPlayerPermissionRulesParam {
		@GNHashtableDataMember({ code: GNParameterCode.LinkAccount, isOptional: true })
		public linkAccount?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.LinkAndroidDeviceId, isOptional: true })
		public linkAndroidDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.LinkApple, isOptional: true })
		public linkApple?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.LinkCustomDeviceId, isOptional: true })
		public linkCustomDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.LinkCustomId, isOptional: true })
		public linkCustomId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.LinkEditorDeviceId, isOptional: true })
		public linkEditorDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.LinkFacebook, isOptional: true })
		public linkFacebook?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.LinkGenericService, isOptional: true })
		public linkGenericService?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.LinkGoogle, isOptional: true })
		public linkGoogle?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.LinkiOSDeviceId, isOptional: true })
		public linkiOSDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.LinkLinuxDeviceId, isOptional: true })
		public linkLinuxDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.LinkMacOSDeviceId, isOptional: true })
		public linkMacOSDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.LinkWindowsDeviceId, isOptional: true })
		public linkWindowsDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.LinkWindowsPhoneDeviceId, isOptional: true })
		public linkWindowsPhoneDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.UnlinkAccount, isOptional: true })
		public unlinkAccount?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.UnlinkAndroidDeviceId, isOptional: true })
		public unlinkAndroidDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.UnlinkApple, isOptional: true })
		public unlinkApple?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.UnlinkCustomDeviceId, isOptional: true })
		public unlinkCustomDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.UnlinkCustomId, isOptional: true })
		public unlinkCustomId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.UnlinkEditorDeviceId, isOptional: true })
		public unlinkEditorDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.UnlinkFacebook, isOptional: true })
		public unlinkFacebook?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.UnlinkGenericService, isOptional: true })
		public unlinkGenericService?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.UnlinkGoogle, isOptional: true })
		public unlinkGoogle?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.UnlinkiOSDeviceId, isOptional: true })
		public unlinkiOSDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.UnlinkLinuxDeviceId, isOptional: true })
		public unlinkLinuxDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.UnlinkMacOSDeviceId, isOptional: true })
		public unlinkMacOSDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.UnlinkWindowsDeviceId, isOptional: true })
		public unlinkWindowsDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.UnlinkWindowsPhoneDeviceId, isOptional: true })
		public unlinkWindowsPhoneDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.AddSegment, isOptional: true })
		public addSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.RemoveSegment, isOptional: true })
		public removeSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetSegment, isOptional: true })
		public getSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetTag, isOptional: true })
		public setTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.RemoveTag, isOptional: true })
		public removeTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetTag, isOptional: true })
		public getTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetDisplayName, isOptional: true })
		public getDisplayName?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetDisplayName, isOptional: true })
		public setDisplayName?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetTsCreate, isOptional: true })
		public getTsCreate?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetIpAddressCreate, isOptional: true })
		public getIpAddressCreate?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetTsLastLogin, isOptional: true })
		public setTsLastLogin?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetTsLastLogin, isOptional: true })
		public getTsLastLogin?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetPlayerBan, isOptional: true })
		public setPlayerBan?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayerBan, isOptional: true })
		public getPlayerBan?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetCountryCode, isOptional: true })
		public setCountryCode?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetCountryCode, isOptional: true })
		public getCountryCode?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.ChangeAccountPassword, isOptional: true })
		public changeAccountPassword?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.ResetAccountPassword, isOptional: true })
		public resetAccountPassword?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetAvatar, isOptional: true })
		public setAvatar?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetAvatar, isOptional: true })
		public getAvatar?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetPlayerCurrency, isOptional: true })
		public setPlayerCurrency?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayerCurrency, isOptional: true })
		public getPlayerCurrency?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetPlayerStatistics, isOptional: true })
		public setPlayerStatistics?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayerStatistics, isOptional: true })
		public getPlayerStatistics?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetStatisticsLeaderboard, isOptional: true })
		public getStatisticsLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetStatisticsLeaderboardAroundPlayer, isOptional: true })
		public getStatisticsLeaderboardAroundPlayer?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetCustomData, isOptional: true })
		public getCustomData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetCustomData, isOptional: true })
		public setCustomData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetPlayerData, isOptional: true })
		public setPlayerData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayerData, isOptional: true })
		public getPlayerData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayerInformation, isOptional: true })
		public getPlayerInformation?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayersWithApple, isOptional: true })
		public getPlayersWithApple?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayersWithFacebook, isOptional: true })
		public getPlayersWithFacebook?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayersWithGoogle, isOptional: true })
		public getPlayersWithGoogle?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayersWithGenericService, isOptional: true })
		public getPlayersWithGenericService?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayersWithSegment, isOptional: true })
		public getPlayersWithSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayersWithTag, isOptional: true })
		public getPlayersWithTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetExternal, isOptional: true })
		public getExternal?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayersWithDisplayName, isOptional: true })
		public getPlayersWithDisplayName?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetEmail, isOptional: true })
		public getEmail?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetEmail, isOptional: true })
		public setEmail?: PermissionRulesParam;

	}

	export class MasterPlayerSettingsParam {
		@GNArrayDataMember({ code: GNParameterCode.GenericServiceSettings, elementCls: GenericServiceSettingsParam, isOptional: true })
		public genericServiceSettings?: Array<GenericServiceSettingsParam>;

		@GNArrayDataMember({ code: GNParameterCode.CurrencySettings, elementCls: CurrencySettingsParam, isOptional: true })
		public playerCurrencySettings?: Array<CurrencySettingsParam>;

		@GNArrayDataMember({ code: GNParameterCode.StatisticsSettings, elementCls: CurrencySettingsParam, isOptional: true })
		public playerStatisticsSettings?: Array<StatisticsSettingsParam>;

		@GNArrayDataMember({ code: GNParameterCode.DatasSettings, elementCls: CurrencySettingsParam, isOptional: true })
		public playerDatasSettings?: Array<DataSettingsParam>;

		@GNArrayDataMember({ code: GNParameterCode.CustomDatasSettings, elementCls: CurrencySettingsParam, isOptional: true })
		public customDatasSettings?: Array<DataSettingsParam>;

		@GNArrayDataMember({ code: GNParameterCode.TagsSettings, elementCls: CurrencySettingsParam, isOptional: true })
		public tagsSettings?: Array<TagSettingsParam>;

	}

	export class AuthenticatePermissionRulesParam {
		@GNHashtableDataMember({ code: GNParameterCode.LoginByAccount, isOptional: true })
		public loginByAccount?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.LoginByAndroidDeviceId, isOptional: true })
		public loginByAndroidDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.LoginByApple, isOptional: true })
		public loginByApple?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.LoginByCustomDeviceId, isOptional: true })
		public loginByCustomDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.LoginByCustomId, isOptional: true })
		public loginByCustomId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.LoginByFacebook, isOptional: true })
		public loginByFacebook?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.LoginByGenericService, isOptional: true })
		public loginByGenericService?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.LoginByGoogle, isOptional: true })
		public loginByGoogle?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.LoginByiOSDeviceId, isOptional: true })
		public loginByiOSDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.LoginByWindowsPhoneDeviceId, isOptional: true })
		public loginByWindowsPhoneDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.RegisterAccount, isOptional: true })
		public registerAccount?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.LoginByEditorDeviceId, isOptional: true })
		public loginByEditorDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.LoginByLinuxDeviceId, isOptional: true })
		public loginByLinuxDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.LoginByMacOSDeviceId, isOptional: true })
		public loginByMacOSDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.LoginByWindowsDeviceId, isOptional: true })
		public loginByWindowsDeviceId?: PermissionRulesParam;

	}

	export class StoreInventoryPermissionRulesParam {
		@GNHashtableDataMember({ code: GNParameterCode.BuyStoreItem, isOptional: true })
		public buyStoreItem?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetStoreItemInformation, isOptional: true })
		public getStoreItemInformation?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetStoreItemsWithTag, isOptional: true })
		public getStoreItemsWithTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GrantStoreItem, isOptional: true })
		public grantStoreItem?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetRemoveStatus, isOptional: true })
		public setRemoveStatus?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetStoreItemInformation, isOptional: true })
		public setStoreItemInformation?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.ValidateAppleAppStoreReceipt, isOptional: true })
		public validateAppleAppStoreReceipt?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.ValidateGooglePlayStoreReceipt, isOptional: true })
		public validateGooglePlayStoreReceipt?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.ValidateFacebookStoreReceipt, isOptional: true })
		public validateFacebookStoreReceipt?: PermissionRulesParam;

	}

	export class PermissionParam {
		@GNHashtableDataMember({ code: GNParameterCode.Authenticate, isOptional: true })
		public authenticate?: AuthenticatePermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.MasterPlayer, isOptional: true })
		public masterPlayer?: MasterPlayerPermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GamePlayer, isOptional: true })
		public gamePlayer?: GamePlayerPermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.CharacterPlayer, isOptional: true })
		public characterPlayer?: CharacterPlayerPermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.Content, isOptional: true })
		public content?: ContentPermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.Group, isOptional: true })
		public group?: GroupPermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.Inventory, isOptional: true })
		public inventory?: InventoryPermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.StoreInventory, isOptional: true })
		public storeInventory?: StoreInventoryPermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.MasterAdmin, isOptional: true })
		public masterAdmin?: MasterAdminPermissionRulesParam;

	}

	export class ChangePasswordAdminAccountRequestData {
		@StringDataMember({ code: GNParameterCode.CurrentPassword, minLength: 6, maxLength: 64, mustNonNull: true })
		public currentPassword: string;

		@StringDataMember({ code: GNParameterCode.Password, minLength: 6, maxLength: 64, mustNonNull: true })
		public password: string;

	}

	export class GetAdminAccountListRequestData {
	}

	export class GetGameInformationRequestData {
		@StringDataMember({ code: GNParameterCode.GameId, minLength: 2, maxLength: 32, mustNonNull: true })
		public gameId: string;

	}

	export class GetGameListRequestData {
	}

	export class GetMasterGameSettingsRequestData {
	}

	export class GetSecretInfoInformationRequestData {
		@StringDataMember({ code: GNParameterCode.SecretKey, minLength: 6, maxLength: 64, mustNonNull: true })
		public secretKey: string;

	}

	export class GetSecretInfoListRequestData {
	}

	export class GetServerLogRequestData {
	}

	export class GrantAdminAccountRequestData {
		@StringDataMember({ code: GNParameterCode.Username, minLength: 6, maxLength: 32, mustNonNull: true })
		public username: string;

		@StringDataMember({ code: GNParameterCode.Password, minLength: 6, maxLength: 64, mustNonNull: true })
		public password: string;

		@StringDataMember({ code: GNParameterCode.SecretKey, minLength: 6, maxLength: 64, mustNonNull: true })
		public secretKey: string;

	}

	export class GrantGameRequestData {
		@StringDataMember({ code: GNParameterCode.GameId, minLength: 2, maxLength: 32, mustNonNull: true })
		public gameId: string;

	}

	export class GrantSecretInfoRequestData {
		@StringDataMember({ code: GNParameterCode.SecretKey, minLength: 6, maxLength: 64, mustNonNull: true, isOptional: true })
		public secretKey?: string;

		@StringDataMember({ code: GNParameterCode.GameId, minLength: 2, maxLength: 32, mustNonNull: true })
		public gameId: string;

		@NumberDataMember({ code: GNParameterCode.Role, mustInt: true })
		public role: number;

	}

	export class LoginByAdminAccountRequestData {
		@StringDataMember({ code: GNParameterCode.Username, minLength: 6, maxLength: 32, mustNonNull: true })
		public username: string;

		@StringDataMember({ code: GNParameterCode.Password, minLength: 6, maxLength: 64, mustNonNull: true })
		public password: string;

	}

	export class RemoveAdminAccountRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class SetGameInformationRequestData {
		@StringDataMember({ code: GNParameterCode.GameId, minLength: 2, maxLength: 32, mustNonNull: true })
		public gameId: string;

		@StringDataMember({ code: GNParameterCode.GameName, isOptional: true })
		public gameName?: string;

		@StringDataMember({ code: GNParameterCode.GameDescription, isOptional: true })
		public gameDescription?: string;

		@StringDataMember({ code: GNParameterCode.GameIconUrl, isOptional: true })
		public gameIconUrl?: string;

		@GNHashtableDataMember({ code: GNParameterCode.GameSettings, isOptional: true })
		public gameSettings?: GameSettingsParam;

	}

	export class SetMasterGameSettingsRequestData {
		@GNHashtableDataMember({ code: GNParameterCode.ThirtPartySettings, isOptional: true })
		public thirtPartySettings?: ThirtPartyParam;

		@GNHashtableDataMember({ code: GNParameterCode.MasterPlayerSettings, isOptional: true })
		public masterPlayerSettings?: MasterPlayerSettingsParam;

	}

	export class SetPasswordAdminAccountRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

		@StringDataMember({ code: GNParameterCode.Password, minLength: 6, maxLength: 64, mustNonNull: true })
		public password: string;

	}

	export class SetSecretInfoInformationRequestData {
		@StringDataMember({ code: GNParameterCode.SecretKey, minLength: 6, maxLength: 64, mustNonNull: true })
		public secretKey: string;

		@BooleanDataMember({ code: GNParameterCode.Remove, isOptional: true })
		public remove?: boolean;

		@NumberDataMember({ code: GNParameterCode.TsExpire, isOptional: true })
		public tsExpire?: number;

		@GNHashtableDataMember({ code: GNParameterCode.Permission, isOptional: true })
		public permissionParam?: PermissionParam;

	}

	export class SetSecretKeyAdminAccountRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

		@StringDataMember({ code: GNParameterCode.SecretKey, minLength: 6, maxLength: 64, mustNonNull: true })
		public secretKey: string;

	}

	export class AdminAccountResponseData {
		@StringDataMember({ code: GNParameterCode.UserId })
		public userId: string;

		@StringDataMember({ code: GNParameterCode.Username })
		public username: string;

		@StringDataMember({ code: GNParameterCode.SecretKey })
		public secretKey: string;

	}

	export class GetAdminAccountListResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: AdminAccountResponseData })
		public results: Array<AdminAccountResponseData>;

	}

	export class GetGameInformationResponseData {
		@StringDataMember({ code: GNParameterCode.GameId })
		public gameId: string;

		@NumberDataMember({ code: GNParameterCode.TsCreate })
		public tsCreate: number;

		@StringDataMember({ code: GNParameterCode.CreatorId })
		public creatorId: string;

		@StringDataMember({ code: GNParameterCode.GameDescription })
		public gameDescription: string;

		@StringDataMember({ code: GNParameterCode.GameIconUrl })
		public gameIconUrl: string;

		@GNHashtableDataMember({ code: GNParameterCode.GameSettings })
		public gameSettings: GameSettingsParam;

	}

	export class GameWithGameIdResponseData {
		@StringDataMember({ code: GNParameterCode.GameId })
		public gameId: string;

	}

	export class GetGameListResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: GameWithGameIdResponseData })
		public results: Array<GameWithGameIdResponseData>;

	}

	export class GetMasterGameSettingsResponseData {
		@GNHashtableDataMember({ code: GNParameterCode.MasterPlayerSettings })
		public masterPlayerSettings: MasterPlayerSettingsParam;

	}

	export class GetSecretInfoInformationResponseData {
		@StringDataMember({ code: GNParameterCode.SecretKey })
		public secretKey: string;

		@StringDataMember({ code: GNParameterCode.GameId })
		public gameId: string;

		@NumberDataMember({ code: GNParameterCode.Role })
		public role: number;

		@NumberDataMember({ code: GNParameterCode.TsCreate })
		public tsCreate: number;

		@StringDataMember({ code: GNParameterCode.CreatorId })
		public creatorId: string;

		@BooleanDataMember({ code: GNParameterCode.Remove })
		public remove: boolean;

		@NumberDataMember({ code: GNParameterCode.TsExpire })
		public tsExpire: number;

		@GNHashtableDataMember({ code: GNParameterCode.Permission })
		public permission: PermissionParam;

	}

	export class SecretInfoWithSecretKeyResponseData {
		@StringDataMember({ code: GNParameterCode.SecretKey })
		public secretKey: string;

	}

	export class GetSecretInfoListResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: SecretInfoWithSecretKeyResponseData })
		public results: Array<SecretInfoWithSecretKeyResponseData>;

	}

	export class AdminAccountWithUserIdResponseData {
		@StringDataMember({ code: GNParameterCode.UserId })
		public userId: string;

	}

	export class GrantAdminAccountResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: AdminAccountWithUserIdResponseData })
		public results: Array<AdminAccountWithUserIdResponseData>;

	}

	export class LoginByAdminAccountResponseData {
		@StringDataMember({ code: ParameterCode.AuthToken })
		public authToken: string;

	}

	export class EmptyResponseData {
	}

}
