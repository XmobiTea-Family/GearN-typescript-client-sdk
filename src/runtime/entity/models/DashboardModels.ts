import { GNHashtable } from "./../../common/GNData";
import { GNParameterCode } from "./../../constant/parameterCode/GNParameterCode";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";

export namespace DashboardModels {
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

		@BooleanDataMember({ code: GNParameterCode.Index })
		public index: boolean;

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

		@NumberDataMember({ code: GNParameterCode.InitialValue })
		public initialValue: number;

		@StringDataMember({ code: GNParameterCode.DisplayName, minLength: 2, maxLength: 64 })
		public displayName: string;

		@BooleanDataMember({ code: GNParameterCode.Index })
		public index: boolean;

	}

	export class CurrencySettingsParam {
		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32 })
		public key: string;

		@NumberDataMember({ code: GNParameterCode.InitialValue })
		public initialValue: number;

		@StringDataMember({ code: GNParameterCode.DisplayName, minLength: 2, maxLength: 64 })
		public displayName: string;

		@BooleanDataMember({ code: GNParameterCode.Index })
		public index: boolean;

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

		@GNHashtableDataMember({ code: GNParameterCode.GetCurrencyLeaderboard, isOptional: true })
		public getCurrencyLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetCreateLeaderboard, isOptional: true })
		public getCreateLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetStatisticsLog, isOptional: true })
		public getStatisticsLog?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetCurrencyLog, isOptional: true })
		public getCurrencyLog?: PermissionRulesParam;

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
		public getContentData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetContentData, isOptional: true })
		public setContentData?: PermissionRulesParam;

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

		@StringDataMember({ code: GNParameterCode.IssuerId })
		public issuerId: string;

		@StringDataMember({ code: GNParameterCode.KeyId })
		public keyId: string;

		@StringDataMember({ code: GNParameterCode.P8Content })
		public p8Content: string;

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
		@StringDataMember({ code: GNParameterCode.GoogleClientId })
		public googleClientId: string;

		@StringDataMember({ code: GNParameterCode.PackageId })
		public packageId: string;

		@StringDataMember({ code: GNParameterCode.PublicRSAKey })
		public publicRSAKey: string;

	}

	export class ThirtPartyGameCenterSettingsParam {
		@StringDataMember({ code: GNParameterCode.PackageId })
		public packageId: string;

	}

	export class ThirtPartyGooglePlayGameSettingsParam {
		@StringDataMember({ code: GNParameterCode.RedirectUri })
		public redirectUri: string;

		@StringDataMember({ code: GNParameterCode.ClientId })
		public clientId: string;

		@StringDataMember({ code: GNParameterCode.ClientSecret })
		public clientSecret: string;

		@StringDataMember({ code: GNParameterCode.ApplicationId })
		public applicationId: string;

	}

	export class ThirtPartyParam {
		@GNHashtableDataMember({ code: GNParameterCode.GoogleSettings, isOptional: true })
		public googleSettings?: ThirtPartyGoogleSettingsParam;

		@GNHashtableDataMember({ code: GNParameterCode.FacebookSettings, isOptional: true })
		public facebookSettings?: ThirtPartyFacebookSettingsParam;

		@GNHashtableDataMember({ code: GNParameterCode.AppleSettings, isOptional: true })
		public appleSettings?: ThirtPartyAppleSettingsParam;

		@GNHashtableDataMember({ code: GNParameterCode.GooglePlayGameService, isOptional: true })
		public googlePlayGameSettings?: ThirtPartyGooglePlayGameSettingsParam;

		@GNHashtableDataMember({ code: GNParameterCode.GameCenterSettings, isOptional: true })
		public gameCenterSettings?: ThirtPartyGameCenterSettingsParam;

	}

	export class EmailSettingsParam {
		@StringDataMember({ code: GNParameterCode.SendFrom })
		public sendFrom: string;

		@StringDataMember({ code: GNParameterCode.SendGridApiKey })
		public sendGridApiKey: string;

	}

	export class PushNotificationSettingsParam {
		@StringDataMember({ code: GNParameterCode.ProjectId })
		public projectId: string;

		@StringDataMember({ code: GNParameterCode.ClientEmail })
		public clientEmail: string;

		@StringDataMember({ code: GNParameterCode.PrivateKey })
		public privateKey: string;

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

		@GNHashtableDataMember({ code: GNParameterCode.GetCurrencyLeaderboard, isOptional: true })
		public getCurrencyLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetCreateLeaderboard, isOptional: true })
		public getCreateLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetStatisticsLog, isOptional: true })
		public getStatisticsLog?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetCurrencyLog, isOptional: true })
		public getCurrencyLog?: PermissionRulesParam;

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

		@GNHashtableDataMember({ code: GNParameterCode.GetCurrencyLeaderboard, isOptional: true })
		public getCurrencyLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetCreateLeaderboard, isOptional: true })
		public getCreateLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetStatisticsLog, isOptional: true })
		public getStatisticsLog?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetCurrencyLog, isOptional: true })
		public getCurrencyLog?: PermissionRulesParam;

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

		@GNHashtableDataMember({ code: GNParameterCode.GetCreateLeaderboard, isOptional: true })
		public getCreateLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetStatisticsLog, isOptional: true })
		public getStatisticsLog?: PermissionRulesParam;

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

		@GNHashtableDataMember({ code: GNParameterCode.GetUsernameAdminAccount, isOptional: true })
		public getUsernameAdminAccount?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetAnalytics, isOptional: true })
		public getAnalytics?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetEventCallbackCloudScript, isOptional: true })
		public getEventCallbackCloudScript?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetEventCallbackCloudScript, isOptional: true })
		public setEventCallbackCloudScript?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.ResetStatisticsLeaderboard, isOptional: true })
		public resetStatisticsLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetBackupStatisticsLeaderboardVersion, isOptional: true })
		public getBackupStatisticsLeaderboardVersion?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetServerGameData, isOptional: true })
		public getServerGameData?: PermissionRulesParam;

	}

	export class MultiplayerPermissionRulesParam {
		@GNHashtableDataMember({ code: GNParameterCode.CancelAllMatchmakingTicket, isOptional: true })
		cancelAllMatchmakingTicket?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.CancelMatchmakingTicket, isOptional: true })
		cancelMatchmakingTicket?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.CreateMatchmakingTicket, isOptional: true })
		createMatchmakingTicket?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetMatchmakingTicket, isOptional: true })
		getMatchmakingTicket?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetMatch, isOptional: true })
		getMatch?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetQueueStatistics, isOptional: true })
		getQueueStatistics?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.JoinMatchmakingTicket, isOptional: true })
		joinMatchmakingTicket?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.ListMatchmakingTicketsForPlayer, isOptional: true })
		listMatchmakingTicketsForPlayer?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetAllMatchmakingTicket, isOptional: true })
		getAllMatchmakingTicket?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetAllMatch, isOptional: true })
		getAllMatch?: PermissionRulesParam;

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

		@GNHashtableDataMember({ code: GNParameterCode.LinkGooglePlayGameService, isOptional: true })
		public linkGooglePlayGameService?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.LinkGameCenter, isOptional: true })
		public linkGameCenter?: PermissionRulesParam;

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

		@GNHashtableDataMember({ code: GNParameterCode.UnlinkGooglePlayGameService, isOptional: true })
		public unlinkGooglePlayGameService?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.UnlinkGameCenter, isOptional: true })
		public unlinkGameCenter?: PermissionRulesParam;

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

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayersWithGooglePlayGameService, isOptional: true })
		public getPlayersWithGooglePlayGameService?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayersWithGameCenter, isOptional: true })
		public getPlayersWithGameCenter?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetExternal, isOptional: true })
		public getExternal?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPlayersWithDisplayName, isOptional: true })
		public getPlayersWithDisplayName?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetEmail, isOptional: true })
		public getEmail?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SetEmail, isOptional: true })
		public setEmail?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetCurrencyLeaderboard, isOptional: true })
		public getCurrencyLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetLastLoginLeaderboard, isOptional: true })
		public getLastLoginLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetCreateLeaderboard, isOptional: true })
		public getCreateLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetStatisticsLog, isOptional: true })
		public getStatisticsLog?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetCurrencyLog, isOptional: true })
		public getCurrencyLog?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SendSocketOperationEvent, isOptional: true })
		public sendSocketOperationEvent?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SendEmail, isOptional: true })
		public sendEmail?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.SendPushNotification, isOptional: true })
		public sendPushNotification?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.AddPushNotification, isOptional: true })
		public addPushNotification?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.RemovePushNotification, isOptional: true })
		public removePushNotification?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetPushNotification, isOptional: true })
		public getPushNotification?: PermissionRulesParam;

	}

	export class MasterPlayerSettingsParam {
		@GNArrayDataMember({ code: GNParameterCode.GenericServiceSettings, elementCls: GenericServiceSettingsParam, isOptional: true })
		public genericServiceSettings?: Array<GenericServiceSettingsParam>;

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

	}



	export class SizeParam {
		@NumberDataMember({ code: GNParameterCode.Min, minValue: 1, mustInt: true })
		public min: number;

		@NumberDataMember({ code: GNParameterCode.Max, minValue: 1, mustInt: true })
		public max: number;

	}

	export class TeamParam {
		@StringDataMember({ code: GNParameterCode.TeamId, minLength: 1, maxLength: 32 })
		public teamId: string;

		@GNHashtableDataMember({ code: GNParameterCode.TeamSize })
		public teamSize: SizeParam;

	}

	export class LinearExpansionsParam {
		@NumberDataMember({ code: GNParameterCode.SecondsBetweenExpansions, minValue: 1 })
		public secondsBetweenExpansions: number;

		@NumberDataMember({ code: GNParameterCode.Delta, isOptional: true })
		public delta?: number;

		@NumberDataMember({ code: GNParameterCode.Limit, isOptional: true })
		public limit?: number;

	}

	export class CustomExpansionsParam {
		@NumberDataMember({ code: GNParameterCode.SecondsBetweenExpansions, minValue: 1 })
		public secondsBetweenExpansions: number;

		@GNArrayDataMember({ code: GNParameterCode.OverrideValue, isOptional: true, elementCls: Object })
		public overrideValue?: any[];

		@GNArrayDataMember({ code: GNParameterCode.OverrideMin, isOptional: true, elementCls: Object })
		public overrideMin?: any[];

		@GNArrayDataMember({ code: GNParameterCode.OverrideMax, isOptional: true, elementCls: Object })
		public overrideMax?: any[];

	}

	export class AdvancedSettingsParam {
		@NumberDataMember({ code: GNParameterCode.SecondsUntilOptional, minValue: 1 })
		public secondsUntilOptional: number;

		@NumberDataMember({ code: GNParameterCode.ExpansionType, minValue: 1, maxValue: 3, isOptional: true, mustInt: true })
		public expansionType?: number;

		@GNHashtableDataMember({ code: GNParameterCode.LinearExpansions, isOptional: true })
		public linearExpansions?: LinearExpansionsParam;

		@GNHashtableDataMember({ code: GNParameterCode.CustomExpansions, isOptional: true })
		public customExpansions?: CustomExpansionsParam;

	}

	export class RuleParam {
		@StringDataMember({ code: GNParameterCode.Name, minLength: 1, maxLength: 32 })
		public name: string;

		@NumberDataMember({ code: GNParameterCode.Type, minValue: 1, maxValue: 8, mustInt: true })
		public type: number;

		@NumberDataMember({ code: GNParameterCode.AttributeSource, minValue: 1, maxValue: 2, isOptional: true })
		public attributeSource?: number;

		@StringDataMember({ code: GNParameterCode.AttributePath, minLength: 1, maxLength: 32, isOptional: true })
		public attributePath?: string;

		@DataMember({ code: GNParameterCode.DefaultValue, isOptional: true })
		public defaultValue?: any;

		@NumberDataMember({ code: GNParameterCode.CompairType, minValue: 1, maxValue: 2, isOptional: true, mustInt: true })
		public compairType?: number;

		@NumberDataMember({ code: GNParameterCode.AllowedDifference, minValue: 0, isOptional: true })
		public allowedDifference?: number;

		@NumberDataMember({ code: GNParameterCode.Min, isOptional: true })
		public min?: number;

		@NumberDataMember({ code: GNParameterCode.Max, isOptional: true })
		public max?: number;

		@GNHashtableDataMember({ code: GNParameterCode.AdvancedSettings, isOptional: true })
		public advancedSettings?: AdvancedSettingsParam;

	}

	export class ServerAllocationParam {
		@BooleanDataMember({ code: GNParameterCode.Enable })
		public enable: boolean;

	}

	export class MatchmakingQueueSettingsParam {
		@StringDataMember({ code: GNParameterCode.QueueName, minLength: 6, maxLength: 32 })
		public queueName: string;

		@GNHashtableDataMember({ code: GNParameterCode.MatchSize })
		public matchSize: SizeParam;

		@GNHashtableDataMember({ code: GNParameterCode.TicketSize })
		public ticketSize: SizeParam;

		@GNHashtableDataMember({ code: GNParameterCode.ServerAllocation })
		public serverAllocation: ServerAllocationParam;

		@GNArrayDataMember({ code: GNParameterCode.Teams, isOptional: true, elementCls: TeamParam })
		public teams?: TeamParam[];

		@GNArrayDataMember({ code: GNParameterCode.Rules, isOptional: true, elementCls: RuleParam })
		public rules?: RuleParam[];

		@BooleanDataMember({ code: GNParameterCode.Remove, isOptional: true })
		public remove?: boolean;

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

		@GNHashtableDataMember({ code: GNParameterCode.LoginByGooglePlayGameService, isOptional: true })
		public loginByGooglePlayGameService?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.LoginByGameCenter, isOptional: true })
		public loginByGameCenter?: PermissionRulesParam;

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

		@GNHashtableDataMember({ code: GNParameterCode.RefreshAuthToken, isOptional: true })
		public refreshAuthToken?: PermissionRulesParam;

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

		@GNHashtableDataMember({ code: GNParameterCode.GetCreateLeaderboard, isOptional: true })
		public getCreateLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.PresentStoreItem, isOptional: true })
		public presentStoreItem?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetStoreLog, isOptional: true })
		public getStoreLog?: PermissionRulesParam;

	}

	export class CloudScriptPermissionRulesParam {
		@GNHashtableDataMember({ code: GNParameterCode.ExecuteFunction, isOptional: true })
		public executeFunction?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.AddFunction, isOptional: true })
		public addFunction?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetFunctions, isOptional: true })
		public getFunctions?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.GetFunction, isOptional: true })
		public getFunction?: PermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.EditFunction, isOptional: true })
		public editFunction?: PermissionRulesParam;

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

		@GNHashtableDataMember({ code: GNParameterCode.Multiplayer, isOptional: true })
		public multiplayer?: MultiplayerPermissionRulesParam;

		@GNHashtableDataMember({ code: GNParameterCode.CloudScript, isOptional: true })
		public cloudScript?: CloudScriptPermissionRulesParam;

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
		@NumberDataMember({ code: GNParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		skip?: number;

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 50, minValue: 5, maxValue: 200, mustInt: true, isOptional: true })
		limit?: number;

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

		@StringDataMember({ code: GNParameterCode.GameId, minLength: 2, maxLength: 32, mustNonNull: true, isOptional: true })
		public gameId?: string;

		@NumberDataMember({ code: GNParameterCode.Role, mustInt: true })
		public role: number;

		@GNHashtableDataMember({ code: GNParameterCode.Permission, isOptional: true })
		public permissionParam?: PermissionParam;

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

		@GNArrayDataMember({ code: GNParameterCode.MatchmakingQueueSettings, isOptional: true, elementCls: MatchmakingQueueSettingsParam })
		public matchmakingQueueSettings?: MatchmakingQueueSettingsParam[];

	}

	export class SetMasterGameSettingsRequestData {
		@GNHashtableDataMember({ code: GNParameterCode.ThirtPartySettings, isOptional: true })
		public thirtPartySettings?: ThirtPartyParam;

		@GNHashtableDataMember({ code: GNParameterCode.MasterPlayerSettings, isOptional: true })
		public masterPlayerSettings?: MasterPlayerSettingsParam;

		@GNHashtableDataMember({ code: GNParameterCode.EmailSettings, isOptional: true })
		public emailSettings?: EmailSettingsParam;

		@GNHashtableDataMember({ code: GNParameterCode.PushNotificationSettings, isOptional: true })
		public pushNotificationSettings?: PushNotificationSettingsParam;

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

	export class GetAnalyticsRequestData {
		@NumberDataMember({ code: GNParameterCode.Timestamp, minValue: 0, isOptional: true })
		public timestamp?: number;

		@BooleanDataMember({ code: GNParameterCode.AnalyticsItem, isOptional: true })
		public analyticsItem?: boolean;

		@BooleanDataMember({ code: GNParameterCode.Country, isOptional: true })
		public country?: boolean;

	}

	export class GetUsernameAdminAccountRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class GetEventCallbackCloudScriptRequestData {

	}

	export class SetEventCallbackCloudScriptRequestData {
		@StringDataMember({ code: GNParameterCode.EventName, minLength: 6, maxLength: 128, mustNonNull: true })
		public eventName: string;

		@StringDataMember({ code: GNParameterCode.Script, minLength: 6, maxLength: 4096, mustNonNull: true })
		public script: string;

	}

	export class ResetStatisticsLeaderboardRequestData {
		@NumberDataMember({ code: GNParameterCode.OwnerType, mustInt: true })
		public type: number;

		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32 })
		public key: string;

		@StringDataMember({ code: GNParameterCode.Version, minLength: 2, maxLength: 32 })
		public version: string;

		@StringDataMember({ code: GNParameterCode.GameId, minLength: 2, maxLength: 32, mustNonNull: true })
		public gameId: string;

		@StringDataMember({ code: GNParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
		public log?: string;

	}

	export class GetBackupStatisticsLeaderboardVersionRequestData {
		@StringDataMember({ code: GNParameterCode.GameId, minLength: 2, maxLength: 32, mustNonNull: true })
		public gameId: string;

		@NumberDataMember({ code: GNParameterCode.OwnerType, mustInt: true })
		public type: number;

		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32 })
		public key: string;
	}

	export class GetServerGameDataRequestData {
		@StringDataMember({ code: GNParameterCode.GameId, minLength: 2, maxLength: 32, mustNonNull: true })
		public gameId: string;

		@BooleanDataMember({ code: GNParameterCode.MasterPlayerCount, isOptional: true })
		public masterPlayerCount?: boolean;

		@BooleanDataMember({ code: GNParameterCode.GamePlayerCount, isOptional: true })
		public gamePlayerCount?: boolean;

		@BooleanDataMember({ code: GNParameterCode.CharacterPlayerCount, isOptional: true })
		public characterPlayerCount?: boolean;

		@BooleanDataMember({ code: GNParameterCode.InventoryCount, isOptional: true })
		public inventoryCount?: boolean;

		@BooleanDataMember({ code: GNParameterCode.StoreInventoryCount, isOptional: true })
		public storeInventoryCount?: boolean;

		@BooleanDataMember({ code: GNParameterCode.GroupCount, isOptional: true })
		public groupCount?: boolean;

		@BooleanDataMember({ code: GNParameterCode.Country, isOptional: true })
		public country?: boolean;

		@BooleanDataMember({ code: GNParameterCode.Version, isOptional: true })
		public version?: boolean;

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

		@StringDataMember({ code: GNParameterCode.GameName })
		public gameName: string;

		@StringDataMember({ code: GNParameterCode.CreatorId })
		public creatorId: string;

		@StringDataMember({ code: GNParameterCode.GameDescription })
		public gameDescription: string;

		@StringDataMember({ code: GNParameterCode.GameIconUrl })
		public gameIconUrl: string;

		@GNHashtableDataMember({ code: GNParameterCode.GameSettings })
		public gameSettings: GameSettingsParam;

		@GNArrayDataMember({ code: GNParameterCode.MatchmakingQueueSettings, elementCls: MatchmakingQueueSettingsParam })
		public matchmakingQueueSettings: MatchmakingQueueSettingsParam[];

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
		@GNHashtableDataMember({ code: GNParameterCode.ThirtPartySettings })
		public thirtPartySettings: ThirtPartyParam;

		@GNHashtableDataMember({ code: GNParameterCode.MasterPlayerSettings })
		public masterPlayerSettings: MasterPlayerSettingsParam;

		@GNHashtableDataMember({ code: GNParameterCode.EmailSettings })
		public emailSettings: EmailSettingsParam;

		@GNHashtableDataMember({ code: GNParameterCode.PushNotificationSettings })
		public pushNotificationSettings: PushNotificationSettingsParam;

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

	export class GetServerLogResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: String })
		public results: Array<string>;

	}

	export class CountryRegionResponseData {
		@StringDataMember({ code: GNParameterCode.RegionCode })
		public regionCode: string;

		@StringDataMember({ code: GNParameterCode.RegionName })
		public regionName: string;

		@NumberDataMember({ code: GNParameterCode.CCU })
		public ccu: number;

		@NumberDataMember({ code: GNParameterCode.Latitude, isOptional: true, defaultValue: 0 })
		public latitude: number;

		@NumberDataMember({ code: GNParameterCode.Longitude, isOptional: true, defaultValue: 0 })
		public longitude: number;

	}

	export class CountryResponseData {
		@StringDataMember({ code: GNParameterCode.CountryCode })
		public countryCode: string;

		@GNArrayDataMember({ code: GNParameterCode.Regions, elementCls: CountryRegionResponseData })
		public regions: Array<CountryRegionResponseData>;

	}

	export class AnalyticsItemResponseData {
		@NumberDataMember({ code: GNParameterCode.CCU })
		public ccu: number;

		@NumberDataMember({ code: GNParameterCode.DAU })
		public dau: number;

		@NumberDataMember({ code: GNParameterCode.DAUSince0h })
		public dauSince0h: number;

		@NumberDataMember({ code: GNParameterCode.DNU })
		public dnu: number;

		@NumberDataMember({ code: GNParameterCode.DNUSince0h })
		public dnuSince0h: number;

		@NumberDataMember({ code: GNParameterCode.DRT })
		public drt: number;

		@NumberDataMember({ code: GNParameterCode.DRTSince0h })
		public drtSince0h: number;

		@NumberDataMember({ code: GNParameterCode.MAU })
		public mau: number;

		@NumberDataMember({ code: GNParameterCode.MAUSince0h1 })
		public mauSince0h1: number;

		@NumberDataMember({ code: GNParameterCode.MNU })
		public mnu: number;

		@NumberDataMember({ code: GNParameterCode.MNUSince0h1 })
		public mnuSince0h1: number;

		@NumberDataMember({ code: GNParameterCode.MRT })
		public mrt: number;

		@NumberDataMember({ code: GNParameterCode.MRTSince0h1 })
		public mrtSince0h1: number;

		@NumberDataMember({ code: GNParameterCode.AnalyticsPrice })
		public analyticsPrice: number;

	}

	export class GetAnalyticsResponseData {
		@GNHashtableDataMember({ code: GNParameterCode.AnalyticsItem, isOptional: true })
		public analyticsItem?: AnalyticsItemResponseData;

		@GNArrayDataMember({ code: GNParameterCode.Country, elementCls: CountryResponseData, isOptional: true })
		public country?: Array<CountryResponseData>;

	}

	export class GetUsernameAdminAccountResponseData {
		@StringDataMember({ code: GNParameterCode.Username })
		public username: string;

	}

	export class ChildScriptResponseData {
		@StringDataMember({ code: GNParameterCode.EventName })
		public eventName: string;

		@StringDataMember({ code: GNParameterCode.Script })
		public script: string;

		@BooleanDataMember({ code: GNParameterCode.HasEdit })
		public hasEdit: boolean;

	}

	export class EventCallbackCloudScriptResponseData {
		@StringDataMember({ code: GNParameterCode.Type })
		public type: string;

		@NumberDataMember({ code: GNParameterCode.TsCreate })
		public tsCreate: number;

		@StringDataMember({ code: GNParameterCode.Version })
		public version: string;

		@GNArrayDataMember({ code: GNParameterCode.ChildScripts, elementCls: ChildScriptResponseData })
		public childScripts: Array<ChildScriptResponseData>;

	}

	export class GetEventCallbackCloudScriptResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: EventCallbackCloudScriptResponseData })
		public results: Array<EventCallbackCloudScriptResponseData>;
	}

	export class SetEventCallbackCloudScriptResponseData {
		@StringDataMember({ code: GNParameterCode.Message })
		public errorMessage: string;

	}

	export class BackupStatisticsLeaderboardVersionResponseData {
		@StringDataMember({ code: GNParameterCode.Version })
		public version: string;

		@StringDataMember({ code: GNParameterCode.Log })
		public log: string;

		@NumberDataMember({ code: GNParameterCode.TsCreate })
		public tsCreate: number;

	}

	export class GetBackupStatisticsLeaderboardVersionResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: BackupStatisticsLeaderboardVersionResponseData })
		public results: Array<BackupStatisticsLeaderboardVersionResponseData>;

	}

	export class GetServerGameDataResponseData {
		@NumberDataMember({ code: GNParameterCode.MasterPlayerCount, isOptional: true })
		public masterPlayerCount?: number;

		@NumberDataMember({ code: GNParameterCode.GamePlayerCount, isOptional: true })
		public gamePlayerCount?: number;

		@NumberDataMember({ code: GNParameterCode.CharacterPlayerCount, isOptional: true })
		public characterPlayerCount?: number;

		@NumberDataMember({ code: GNParameterCode.InventoryCount, isOptional: true })
		public inventoryCount?: number;

		@NumberDataMember({ code: GNParameterCode.StoreInventoryCount, isOptional: true })
		public storeInventoryCount?: number;

		@NumberDataMember({ code: GNParameterCode.GroupCount, isOptional: true })
		public groupCount?: number;

		@GNArrayDataMember({ code: GNParameterCode.Country, elementCls: CountryResponseData, isOptional: true })
		public country?: Array<CountryResponseData>;

		@StringDataMember({ code: GNParameterCode.Version, isOptional: true })
		public version?: string;

	}

	export class EmptyResponseData {
	}

}
