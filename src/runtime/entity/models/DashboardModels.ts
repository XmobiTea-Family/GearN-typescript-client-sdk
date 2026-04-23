import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";

/**
 * Groups reusable request and response contracts for Dashboard operations.
 *
 * Public dashboard wrappers currently send these contracts through `RequestType.Dashboard`
 * with `RequestRole.Client`, while backend middleware resolves admin context from the auth token.
 */
export namespace DashboardModels {
	/**
	 * Defines the reusable permission-rule block used by secret-info and master settings payloads.
	 *
	 * These flags map directly to the GearN server permission checks described in the public docs.
	 */
	export class PermissionRulesParam {
		/** Allows the operation on resources that belong to the authenticated user context. */
		@BooleanDataMember({ code: ParameterCode.SelfEnable, isOptional: true })
		public selfEnable?: boolean;

		/** Allows the operation on resources that do not belong to the authenticated user context. */
		@BooleanDataMember({ code: ParameterCode.OtherSelfEnable, isOptional: true })
		public otherSelfEnable?: boolean;

		/** Allows the operation through admin-scoped execution context. */
		@BooleanDataMember({ code: ParameterCode.AdminSelfEnable, isOptional: true })
		public adminSelfEnable?: boolean;

		/** Allows the operation through server-scoped execution context. */
		@BooleanDataMember({ code: ParameterCode.ServerSelfEnable, isOptional: true })
		public serverSelfEnable?: boolean;

	}

	/**
	 * Defines the reusable parameter block FriendCatalogSettingsParam.
	 */
	export class FriendCatalogSettingsParam {
		@StringDataMember({ code: ParameterCode.CatalogId, minLength: 2, maxLength: 32 })
		public catalogId: string;

		@StringDataMember({ code: ParameterCode.Description })
		public description: string;

		@BooleanDataMember({ code: ParameterCode.ForceAcceptFriend })
		public forceAcceptFriend: boolean;

	}

	/**
	 * Defines the reusable parameter block ItemClassSettingsParam.
	 */
	export class ItemClassSettingsParam {
		@StringDataMember({ code: ParameterCode.ClassId, minLength: 2, maxLength: 32 })
		public classId: string;

		@StringDataMember({ code: ParameterCode.Description })
		public description: string;

	}

	/**
	 * Defines the reusable parameter block ItemCatalogSettingsParam.
	 */
	export class ItemCatalogSettingsParam {
		@StringDataMember({ code: ParameterCode.CatalogId, minLength: 2, maxLength: 32 })
		public catalogId: string;

		@NumberDataMember({ code: ParameterCode.ItemType, mustInt: true })
		public itemType: number;

		@GNArrayDataMember({ code: ParameterCode.ItemClassSettings, elementCls: ItemClassSettingsParam })
		public itemClassSettings: Array<ItemClassSettingsParam>;

	}

	/**
	 * Defines the reusable parameter block GroupCatalogSettingsParam.
	 */
	export class GroupCatalogSettingsParam {
		@StringDataMember({ code: ParameterCode.CatalogId, minLength: 2, maxLength: 32 })
		public catalogId: string;

		@StringDataMember({ code: ParameterCode.Description })
		public description: string;

		@BooleanDataMember({ code: ParameterCode.ForceAcceptMember })
		public forceAcceptMember: boolean;

	}

	/**
	 * Defines the reusable parameter block TagSettingsParam.
	 */
	export class TagSettingsParam {
		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32 })
		public key: string;

		@StringDataMember({ code: ParameterCode.Description })
		public description: string;

		@BooleanDataMember({ code: ParameterCode.Index })
		public index: boolean;

	}

	/**
	 * Defines the reusable parameter block DataSettingsParam.
	 */
	export class DataSettingsParam {
		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32 })
		public key: string;

		@StringDataMember({ code: ParameterCode.Description })
		public description: string;

		@NumberDataMember({ code: ParameterCode.Permission, mustInt: true })
		public permission: number;

	}

	/**
	 * Defines the reusable parameter block StatisticsSettingsParam.
	 */
	export class StatisticsSettingsParam {
		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32 })
		public key: string;

		@NumberDataMember({ code: ParameterCode.StatisticsAggregationMethod, mustInt: true })
		public statisticsAggregationMethod: number;

		@NumberDataMember({ code: ParameterCode.MaximumValue, isOptional: true, defaultValue: 0 })
		public maximumValue?: number;

		@NumberDataMember({ code: ParameterCode.MinimumValue, isOptional: true, defaultValue: 0 })
		public minimumValue?: number;

		@NumberDataMember({ code: ParameterCode.InitialValue })
		public initialValue: number;

		@StringDataMember({ code: ParameterCode.Description })
		public description: string;

		@BooleanDataMember({ code: ParameterCode.Index })
		public index: boolean;

	}

	/**
	 * Defines the reusable parameter block CurrencySettingsParam.
	 */
	export class CurrencySettingsParam {
		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32 })
		public key: string;

		@NumberDataMember({ code: ParameterCode.InitialValue })
		public initialValue: number;

		@StringDataMember({ code: ParameterCode.Description })
		public description: string;

		@BooleanDataMember({ code: ParameterCode.Index })
		public index: boolean;

	}

	/**
	 * Defines the reusable parameter block CharacterCatalogSettingsParam.
	 */
	export class CharacterCatalogSettingsParam {
		@StringDataMember({ code: ParameterCode.CatalogId, minLength: 2, maxLength: 32 })
		public catalogId: string;

		@StringDataMember({ code: ParameterCode.Description })
		public description: string;

	}

	/**
	 * Defines the reusable parameter block CharacterPlayerPermissionRulesParam.
	 */
	export class CharacterPlayerPermissionRulesParam {
		@GNHashtableDataMember({ code: ParameterCode.AddSegment, isOptional: true })
		public addSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.RemoveSegment, isOptional: true })
		public removeSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetSegment, isOptional: true })
		public getSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetTag, isOptional: true })
		public setTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.RemoveTag, isOptional: true })
		public removeTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetTag, isOptional: true })
		public getTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetDisplayName, isOptional: true })
		public getDisplayName?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetDisplayName, isOptional: true })
		public setDisplayName?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetTsCreate, isOptional: true })
		public getTsCreate?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetIpAddressCreate, isOptional: true })
		public getIpAddressCreate?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetTsLastLogin, isOptional: true })
		public getTsLastLogin?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetPlayerBan, isOptional: true })
		public setPlayerBan?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayerBan, isOptional: true })
		public getPlayerBan?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetCountryCode, isOptional: true })
		public setCountryCode?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetCountryCode, isOptional: true })
		public getCountryCode?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetAvatar, isOptional: true })
		public setAvatar?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetAvatar, isOptional: true })
		public getAvatar?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.ChangePlayerCurrency, isOptional: true })
		public changePlayerCurrency?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayerCurrency, isOptional: true })
		public getPlayerCurrency?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.ChangePlayerStatistics, isOptional: true })
		public changePlayerStatistics?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayerStatistics, isOptional: true })
		public getPlayerStatistics?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetStatisticsLeaderboard, isOptional: true })
		public getStatisticsLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetStatisticsLeaderboardAroundPlayer, isOptional: true })
		public getStatisticsLeaderboardAroundPlayer?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetCustomData, isOptional: true })
		public getCustomData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetCustomData, isOptional: true })
		public setCustomData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetPlayerData, isOptional: true })
		public setPlayerData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayerData, isOptional: true })
		public getPlayerData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayerInformation, isOptional: true })
		public getPlayerInformation?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayersWithSegment, isOptional: true })
		public getPlayersWithSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayersWithTag, isOptional: true })
		public getPlayersWithTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetCatalogId, isOptional: true })
		public getCatalogId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetOwner, isOptional: true })
		public getOwner?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetRemoveStatus, isOptional: true })
		public getRemoveStatus?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayerFriend, isOptional: true })
		public getPlayerFriend?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayerGroup, isOptional: true })
		public getPlayerGroup?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayerInventory, isOptional: true })
		public getPlayerInventory?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.RemovePlayerItem, isOptional: true })
		public removePlayerItem?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.CreatePlayerItem, isOptional: true })
		public createPlayerItem?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.CreateGroup, isOptional: true })
		public createGroup?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.JoinGroup, isOptional: true })
		public joinGroup?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LeaveGroup, isOptional: true })
		public leaveGroup?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetOwner, isOptional: true })
		public setOwner?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.AddPlayerFriend, isOptional: true })
		public addPlayerFriend?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.RemovePlayerFriend, isOptional: true })
		public removePlayerFriend?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayersWithDisplayName, isOptional: true })
		public getPlayersWithDisplayName?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetRemoveStatus, isOptional: true })
		public setRemoveStatus?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetFriendStatisticsLeaderboardAroundPlayer, isOptional: true })
		public getFriendStatisticsLeaderboardAroundPlayer?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetFriendStatisticsLeaderboard, isOptional: true })
		public getFriendStatisticsLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetCurrencyLeaderboard, isOptional: true })
		public getCurrencyLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetCreateLeaderboard, isOptional: true })
		public getCreateLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetLastLoginLeaderboard, isOptional: true })
		public getLastLoginLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetStatisticsLog, isOptional: true })
		public getStatisticsLog?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetCurrencyLog, isOptional: true })
		public getCurrencyLog?: PermissionRulesParam;

	}

	/**
	 * Defines the reusable parameter block CharacterPlayerSettingsParam.
	 */
	export class CharacterPlayerSettingsParam {
		@GNArrayDataMember({ code: ParameterCode.PlayerCurrenciesSettings, elementCls: CurrencySettingsParam, isOptional: true })
		public playerCurrenciesSettings?: Array<CurrencySettingsParam>;

		@GNArrayDataMember({ code: ParameterCode.PlayerStatisticsSettings, elementCls: StatisticsSettingsParam, isOptional: true })
		public playerStatisticsSettings?: Array<StatisticsSettingsParam>;

		@GNArrayDataMember({ code: ParameterCode.PlayerDatasSettings, elementCls: DataSettingsParam, isOptional: true })
		public playerDatasSettings?: Array<DataSettingsParam>;

		@GNArrayDataMember({ code: ParameterCode.CustomDatasSettings, elementCls: DataSettingsParam, isOptional: true })
		public customDatasSettings?: Array<DataSettingsParam>;

		@GNArrayDataMember({ code: ParameterCode.TagsSettings, elementCls: TagSettingsParam, isOptional: true })
		public tagsSettings?: Array<TagSettingsParam>;

		@GNArrayDataMember({ code: ParameterCode.PlayerGroupCatalogSettings, elementCls: GroupCatalogSettingsParam, isOptional: true })
		public playerGroupCatalogSettings?: Array<GroupCatalogSettingsParam>;

		@GNArrayDataMember({ code: ParameterCode.PlayerItemCatalogSettings, elementCls: ItemCatalogSettingsParam, isOptional: true })
		public playerItemCatalogSettings?: Array<ItemCatalogSettingsParam>;

		@GNArrayDataMember({ code: ParameterCode.PlayerFriendCatalogSettings, elementCls: FriendCatalogSettingsParam, isOptional: true })
		public playerFriendCatalogSettings?: Array<FriendCatalogSettingsParam>;

	}

	/**
	 * Defines the reusable parameter block ContentPermissionRulesParam.
	 */
	export class ContentPermissionRulesParam {
		@GNHashtableDataMember({ code: ParameterCode.GetContentData, isOptional: true })
		public getContentData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetContentData, isOptional: true })
		public setContentData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.CreateNewFileUploadInfo, isOptional: true })
		public createNewFileUploadInfo?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetFileUploadInfoList, isOptional: true })
		public getFileUploadInfoList?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetFileUploadInfo, isOptional: true })
		public getFileUploadInfo?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.RemoveFileUploadInfo, isOptional: true })
		public removeFileUploadInfo?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.RequestDownloadFileUploadInfo, isOptional: true })
		public requestDownloadFileUploadInfo?: PermissionRulesParam;

	}

	/**
	 * Defines the reusable parameter block ThirtPartyAppleSettingsParam.
	 */
	export class ThirtPartyAppleSettingsParam {
		@StringDataMember({ code: ParameterCode.AppleClientId })
		public appleClientId: string;

		@BooleanDataMember({ code: ParameterCode.SandboxEnable })
		public sandboxEnable: boolean;

		@StringDataMember({ code: ParameterCode.IssuerId })
		public issuerId: string;

		@StringDataMember({ code: ParameterCode.KeyId })
		public keyId: string;

		@StringDataMember({ code: ParameterCode.P8Content })
		public p8Content: string;

	}

	/**
	 * Defines the reusable parameter block ThirtPartyFacebookSettingsParam.
	 */
	export class ThirtPartyFacebookSettingsParam {
		@StringDataMember({ code: ParameterCode.FacebookAppId })
		public facebookAppId: string;

		@StringDataMember({ code: ParameterCode.FacebookAppToken })
		public facebookAppToken: string;

		@StringDataMember({ code: ParameterCode.FacebookInappSecret })
		public facebookInappSecret: string;

	}

	/**
	 * Defines the reusable parameter block ThirtPartyGoogleSettingsParam.
	 */
	export class ThirtPartyGoogleSettingsParam {
		@StringDataMember({ code: ParameterCode.GoogleClientId })
		public googleClientId: string;

		@StringDataMember({ code: ParameterCode.PackageId })
		public packageId: string;

		@StringDataMember({ code: ParameterCode.PublicRSAKey })
		public publicRSAKey: string;

	}

	/**
	 * Defines the reusable parameter block ThirtPartyGameCenterSettingsParam.
	 */
	export class ThirtPartyGameCenterSettingsParam {
		@StringDataMember({ code: ParameterCode.PackageId })
		public packageId: string;

	}

	/**
	 * Defines the reusable parameter block ThirtPartyGooglePlayGameSettingsParam.
	 */
	export class ThirtPartyGooglePlayGameSettingsParam {
		@StringDataMember({ code: ParameterCode.RedirectUri })
		public redirectUri: string;

		@StringDataMember({ code: ParameterCode.ClientId })
		public clientId: string;

		@StringDataMember({ code: ParameterCode.ClientSecret })
		public clientSecret: string;

		@StringDataMember({ code: ParameterCode.ApplicationId })
		public applicationId: string;

	}

	/**
	 * Defines the reusable parameter block ThirtPartyParam.
	 */
	export class ThirtPartyParam {
		@GNHashtableDataMember({ code: ParameterCode.GoogleSettings, isOptional: true })
		public googleSettings?: ThirtPartyGoogleSettingsParam;

		@GNHashtableDataMember({ code: ParameterCode.FacebookSettings, isOptional: true })
		public facebookSettings?: ThirtPartyFacebookSettingsParam;

		@GNHashtableDataMember({ code: ParameterCode.AppleSettings, isOptional: true })
		public appleSettings?: ThirtPartyAppleSettingsParam;

		@GNHashtableDataMember({ code: ParameterCode.GooglePlayGameSettings, isOptional: true })
		public googlePlayGameSettings?: ThirtPartyGooglePlayGameSettingsParam;

		@GNHashtableDataMember({ code: ParameterCode.GameCenterSettings, isOptional: true })
		public gameCenterSettings?: ThirtPartyGameCenterSettingsParam;

	}

	/**
	 * Defines the reusable parameter block EmailSettingsParam.
	 */
	export class EmailSettingsParam {
		@StringDataMember({ code: ParameterCode.SendFrom })
		public sendFrom: string;

		@BooleanDataMember({ code: ParameterCode.Secure })
		public secure: boolean;

		@StringDataMember({ code: ParameterCode.Host })
		public host: string;

		@NumberDataMember({ code: ParameterCode.Port })
		public port: number;

		@StringDataMember({ code: ParameterCode.Username })
		public username: string;

		@StringDataMember({ code: ParameterCode.Password })
		public password: string;

	}

	/**
	 * Defines the reusable parameter block PushNotificationSettingsParam.
	 */
	export class PushNotificationSettingsParam {
		@StringDataMember({ code: ParameterCode.ProjectId })
		public projectId: string;

		@StringDataMember({ code: ParameterCode.ClientEmail })
		public clientEmail: string;

		@StringDataMember({ code: ParameterCode.PrivateKey })
		public privateKey: string;

	}

	/**
	 * Defines the reusable parameter block GamePlayerPermissionRulesParam.
	 */
	export class GamePlayerPermissionRulesParam {
		@GNHashtableDataMember({ code: ParameterCode.AddSegment, isOptional: true })
		public addSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.RemoveSegment, isOptional: true })
		public removeSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetSegment, isOptional: true })
		public getSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetTag, isOptional: true })
		public setTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.RemoveTag, isOptional: true })
		public removeTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetTag, isOptional: true })
		public getTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetDisplayName, isOptional: true })
		public getDisplayName?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetDisplayName, isOptional: true })
		public setDisplayName?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetTsCreate, isOptional: true })
		public getTsCreate?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetIpAddressCreate, isOptional: true })
		public getIpAddressCreate?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetTsLastLogin, isOptional: true })
		public getTsLastLogin?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetPlayerBan, isOptional: true })
		public setPlayerBan?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayerBan, isOptional: true })
		public getPlayerBan?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetCountryCode, isOptional: true })
		public setCountryCode?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetCountryCode, isOptional: true })
		public getCountryCode?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetAvatar, isOptional: true })
		public setAvatar?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetAvatar, isOptional: true })
		public getAvatar?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.ChangePlayerCurrency, isOptional: true })
		public changePlayerCurrency?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayerCurrency, isOptional: true })
		public getPlayerCurrency?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.ChangePlayerStatistics, isOptional: true })
		public changePlayerStatistics?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayerStatistics, isOptional: true })
		public getPlayerStatistics?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetStatisticsLeaderboard, isOptional: true })
		public getStatisticsLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetStatisticsLeaderboardAroundPlayer, isOptional: true })
		public getStatisticsLeaderboardAroundPlayer?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetCustomData, isOptional: true })
		public getCustomData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetCustomData, isOptional: true })
		public setCustomData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetPlayerData, isOptional: true })
		public setPlayerData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayerData, isOptional: true })
		public getPlayerData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayerInformation, isOptional: true })
		public getPlayerInformation?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayersWithSegment, isOptional: true })
		public getPlayersWithSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayersWithTag, isOptional: true })
		public getPlayersWithTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayerCharacter, isOptional: true })
		public getPlayerCharacter?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayerInventory, isOptional: true })
		public getPlayerInventory?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayerGroup, isOptional: true })
		public getPlayerGroup?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayerFriend, isOptional: true })
		public getPlayerFriend?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.RemovePlayerItem, isOptional: true })
		public removePlayerItem?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetOnlineStatus, isOptional: true })
		public getOnlineStatus?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.CreateGroup, isOptional: true })
		public createGroup?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.CreatePlayerItem, isOptional: true })
		public createPlayerItem?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.CreatePlayerCharacter, isOptional: true })
		public createPlayerCharacter?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.AddPlayerFriend, isOptional: true })
		public addPlayerFriend?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.RemovePlayerFriend, isOptional: true })
		public removePlayerFriend?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.RemovePlayerCharacter, isOptional: true })
		public removePlayerCharacter?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.JoinGroup, isOptional: true })
		public joinGroup?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LeaveGroup, isOptional: true })
		public leaveGroup?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayersWithDisplayName, isOptional: true })
		public getPlayersWithDisplayName?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetFriendStatisticsLeaderboardAroundPlayer, isOptional: true })
		public getFriendStatisticsLeaderboardAroundPlayer?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetFriendStatisticsLeaderboard, isOptional: true })
		public getFriendStatisticsLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetCurrencyLeaderboard, isOptional: true })
		public getCurrencyLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetCreateLeaderboard, isOptional: true })
		public getCreateLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetLastLoginLeaderboard, isOptional: true })
		public getLastLoginLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetStatisticsLog, isOptional: true })
		public getStatisticsLog?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetCurrencyLog, isOptional: true })
		public getCurrencyLog?: PermissionRulesParam;

	}

	/**
	 * Defines the reusable parameter block GamePlayerSettingsParam.
	 */
	export class GamePlayerSettingsParam {
		@GNArrayDataMember({ code: ParameterCode.PlayerCurrenciesSettings, elementCls: CurrencySettingsParam, isOptional: true })
		public playerCurrenciesSettings?: Array<CurrencySettingsParam>;

		@GNArrayDataMember({ code: ParameterCode.PlayerStatisticsSettings, elementCls: StatisticsSettingsParam, isOptional: true })
		public playerStatisticsSettings?: Array<StatisticsSettingsParam>;

		@GNArrayDataMember({ code: ParameterCode.PlayerDatasSettings, elementCls: DataSettingsParam, isOptional: true })
		public playerDatasSettings?: Array<DataSettingsParam>;

		@GNArrayDataMember({ code: ParameterCode.CustomDatasSettings, elementCls: DataSettingsParam, isOptional: true })
		public customDatasSettings?: Array<DataSettingsParam>;

		@GNArrayDataMember({ code: ParameterCode.TagsSettings, elementCls: TagSettingsParam, isOptional: true })
		public tagsSettings?: Array<TagSettingsParam>;

		@GNArrayDataMember({ code: ParameterCode.PlayerCharacterCatalogSettings, elementCls: CharacterCatalogSettingsParam, isOptional: true })
		public playerCharacterCatalogSettings?: Array<CharacterCatalogSettingsParam>;

		@GNArrayDataMember({ code: ParameterCode.PlayerGroupCatalogSettings, elementCls: GroupCatalogSettingsParam, isOptional: true })
		public playerGroupCatalogSettings?: Array<GroupCatalogSettingsParam>;

		@GNArrayDataMember({ code: ParameterCode.PlayerItemCatalogSettings, elementCls: ItemCatalogSettingsParam, isOptional: true })
		public playerItemCatalogSettings?: Array<ItemCatalogSettingsParam>;

		@GNArrayDataMember({ code: ParameterCode.PlayerFriendCatalogSettings, elementCls: FriendCatalogSettingsParam, isOptional: true })
		public playerFriendCatalogSettings?: Array<FriendCatalogSettingsParam>;

	}

	/**
	 * Defines the reusable parameter block GroupSettingsParam.
	 */
	export class GroupSettingsParam {
		@GNArrayDataMember({ code: ParameterCode.GroupCurrenciesSettings, elementCls: CurrencySettingsParam, isOptional: true })
		public groupCurrenciesSettings?: Array<CurrencySettingsParam>;

		@GNArrayDataMember({ code: ParameterCode.GroupStatisticsSettings, elementCls: StatisticsSettingsParam, isOptional: true })
		public groupStatisticsSettings?: Array<StatisticsSettingsParam>;

		@GNArrayDataMember({ code: ParameterCode.GroupDatasSettings, elementCls: DataSettingsParam, isOptional: true })
		public groupDatasSettings?: Array<DataSettingsParam>;

		@GNArrayDataMember({ code: ParameterCode.CustomDatasSettings, elementCls: DataSettingsParam, isOptional: true })
		public customDatasSettings?: Array<DataSettingsParam>;

		@GNArrayDataMember({ code: ParameterCode.TagsSettings, elementCls: TagSettingsParam, isOptional: true })
		public tagsSettings?: Array<TagSettingsParam>;

		@GNArrayDataMember({ code: ParameterCode.GroupItemCatalogSettings, elementCls: ItemCatalogSettingsParam, isOptional: true })
		public groupItemCatalogSettings?: Array<ItemCatalogSettingsParam>;

	}

	/**
	 * Defines the reusable parameter block InventorySettingsParam.
	 */
	export class InventorySettingsParam {
		@GNArrayDataMember({ code: ParameterCode.ItemStatisticsSettings, elementCls: StatisticsSettingsParam, isOptional: true })
		public itemStatisticsSettings?: Array<StatisticsSettingsParam>;

		@GNArrayDataMember({ code: ParameterCode.ItemDatasSettings, elementCls: DataSettingsParam, isOptional: true })
		public itemDatasSettings?: Array<DataSettingsParam>;

		@GNArrayDataMember({ code: ParameterCode.CustomDatasSettings, elementCls: DataSettingsParam, isOptional: true })
		public customDatasSettings?: Array<DataSettingsParam>;

		@GNArrayDataMember({ code: ParameterCode.TagsSettings, elementCls: TagSettingsParam, isOptional: true })
		public tagsSettings?: Array<TagSettingsParam>;

	}

	/**
	 * Defines the reusable parameter block GameSettingsParam.
	 */
	export class GameSettingsParam {
		@GNHashtableDataMember({ code: ParameterCode.GamePlayerSettings, isOptional: true })
		public gamePlayerSettings?: GamePlayerSettingsParam;

		@GNHashtableDataMember({ code: ParameterCode.CharacterPlayerSettings, isOptional: true })
		public characterPlayerSettings?: CharacterPlayerSettingsParam;

		@GNHashtableDataMember({ code: ParameterCode.GroupSettings, isOptional: true })
		public groupSettings?: GroupSettingsParam;

		@GNHashtableDataMember({ code: ParameterCode.InventorySettings, isOptional: true })
		public inventorySettings?: InventorySettingsParam;

	}

	/**
	 * Defines the reusable parameter block GenericServiceSettingsParam.
	 */
	export class GenericServiceSettingsParam {
		@StringDataMember({ code: ParameterCode.ServiceName, minLength: 2, maxLength: 32 })
		public serviceName: string;

	}

	/**
	 * Defines the reusable parameter block GroupPermissionRulesParam.
	 */
	export class GroupPermissionRulesParam {
		@GNHashtableDataMember({ code: ParameterCode.AddSegment, isOptional: true })
		public addSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.RemoveSegment, isOptional: true })
		public removeSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetSegment, isOptional: true })
		public getSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetTag, isOptional: true })
		public setTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.RemoveTag, isOptional: true })
		public removeTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetTag, isOptional: true })
		public getTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetDisplayName, isOptional: true })
		public getDisplayName?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetDisplayName, isOptional: true })
		public setDisplayName?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetTsCreate, isOptional: true })
		public getTsCreate?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetAvatar, isOptional: true })
		public setAvatar?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetAvatar, isOptional: true })
		public getAvatar?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.ChangeGroupCurrency, isOptional: true })
		public changeGroupCurrency?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetGroupCurrency, isOptional: true })
		public getGroupCurrency?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.ChangeGroupStatistics, isOptional: true })
		public changeGroupStatistics?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetGroupStatistics, isOptional: true })
		public getGroupStatistics?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetStatisticsLeaderboard, isOptional: true })
		public getStatisticsLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetStatisticsLeaderboardAroundGroup, isOptional: true })
		public getStatisticsLeaderboardAroundGroup?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetCustomData, isOptional: true })
		public getCustomData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetCustomData, isOptional: true })
		public setCustomData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetGroupData, isOptional: true })
		public setGroupData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetGroupData, isOptional: true })
		public getGroupData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetGroupInformation, isOptional: true })
		public getGroupInformation?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetGroupsWithSegment, isOptional: true })
		public getGroupsWithSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetGroupsWithTag, isOptional: true })
		public getGroupsWithTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetCatalogId, isOptional: true })
		public getCatalogId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetRemoveStatus, isOptional: true })
		public getRemoveStatus?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetGroupInventory, isOptional: true })
		public getGroupInventory?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.RemoveGroupItem, isOptional: true })
		public removeGroupItem?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.CreateGroupItem, isOptional: true })
		public createGroupItem?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetMembers, isOptional: true })
		public getMembers?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.AddMember, isOptional: true })
		public addMember?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.RemoveMember, isOptional: true })
		public removeMember?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SendGroupMessage, isOptional: true })
		public sendGroupMessage?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetGroupMessage, isOptional: true })
		public getGroupMessage?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetRemoveStatus, isOptional: true })
		public setRemoveStatus?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetGroupsWithDisplayName, isOptional: true })
		public getGroupsWithDisplayName?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetCurrencyLeaderboard, isOptional: true })
		public getCurrencyLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetCreateLeaderboard, isOptional: true })
		public getCreateLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetStatisticsLog, isOptional: true })
		public getStatisticsLog?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetCurrencyLog, isOptional: true })
		public getCurrencyLog?: PermissionRulesParam;

	}

	/**
	 * Defines the reusable parameter block InventoryPermissionRulesParam.
	 */
	export class InventoryPermissionRulesParam {
		@GNHashtableDataMember({ code: ParameterCode.AddSegment, isOptional: true })
		public addSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.RemoveSegment, isOptional: true })
		public removeSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetSegment, isOptional: true })
		public getSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetTag, isOptional: true })
		public setTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.RemoveTag, isOptional: true })
		public removeTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetTag, isOptional: true })
		public getTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetDisplayName, isOptional: true })
		public getDisplayName?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetDisplayName, isOptional: true })
		public setDisplayName?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetTsCreate, isOptional: true })
		public getTsCreate?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetAvatar, isOptional: true })
		public setAvatar?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetAvatar, isOptional: true })
		public getAvatar?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.ChangeItemStatistics, isOptional: true })
		public changeItemStatistics?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetItemStatistics, isOptional: true })
		public getItemStatistics?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetStatisticsLeaderboard, isOptional: true })
		public getStatisticsLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetStatisticsLeaderboardAroundItem, isOptional: true })
		public getStatisticsLeaderboardAroundItem?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetCustomData, isOptional: true })
		public getCustomData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetCustomData, isOptional: true })
		public setCustomData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetItemData, isOptional: true })
		public setItemData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetItemData, isOptional: true })
		public getItemData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetItemInformation, isOptional: true })
		public getItemInformation?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetItemsWithSegment, isOptional: true })
		public getItemsWithSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetItemsWithTag, isOptional: true })
		public getItemsWithTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetCatalogId, isOptional: true })
		public getCatalogId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetClassId, isOptional: true })
		public getClassId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetItemType, isOptional: true })
		public getItemType?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetAmount, isOptional: true })
		public getAmount?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetOwner, isOptional: true })
		public getOwner?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetRemoveStatus, isOptional: true })
		public getRemoveStatus?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetAmount, isOptional: true })
		public setAmount?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetOwner, isOptional: true })
		public setOwner?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetRemoveStatus, isOptional: true })
		public setRemoveStatus?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetItemsWithDisplayName, isOptional: true })
		public getItemsWithDisplayName?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetCreateLeaderboard, isOptional: true })
		public getCreateLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetStatisticsLog, isOptional: true })
		public getStatisticsLog?: PermissionRulesParam;

	}

	/**
	 * Defines the reusable parameter block DashboardPermissionRulesParam.
	 */
	export class DashboardPermissionRulesParam {
		@GNHashtableDataMember({ code: ParameterCode.SetMasterGameSettings, isOptional: true })
		public setMasterGameSettings?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.CreateAdminAccount, isOptional: true })
		public createAdminAccount?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.RemoveAdminAccount, isOptional: true })
		public removeAdminAccount?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetPasswordAdminAccount, isOptional: true })
		public setPasswordAdminAccount?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetSecretKeyAdminAccount, isOptional: true })
		public setSecretKeyAdminAccount?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetGameInformation, isOptional: true })
		public setGameInformation?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.CreateGame, isOptional: true })
		public createGame?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.ChangePasswordAdminAccount, isOptional: true })
		public changePasswordAdminAccount?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetAdminAccountList, isOptional: true })
		public getAdminAccountList?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetGameInformation, isOptional: true })
		public getGameInformation?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetGameList, isOptional: true })
		public getGameList?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetMasterGameSettings, isOptional: true })
		public getMasterGameSettings?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetServerLog, isOptional: true })
		public getServerLog?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetSecretInfoInformation, isOptional: true })
		public getSecretInfoInformation?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetSecretInfoList, isOptional: true })
		public getSecretInfoList?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.CreateSecretInfo, isOptional: true })
		public createSecretInfo?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetSecretInfoInformation, isOptional: true })
		public setSecretInfoInformation?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetUsernameAdminAccount, isOptional: true })
		public getUsernameAdminAccount?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetAnalytics, isOptional: true })
		public getAnalytics?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetEventCallbackCloudScript, isOptional: true })
		public getEventCallbackCloudScript?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetEventCallbackCloudScript, isOptional: true })
		public setEventCallbackCloudScript?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.ResetStatisticsLeaderboard, isOptional: true })
		public resetStatisticsLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetBackupStatisticsLeaderboardVersion, isOptional: true })
		public getBackupStatisticsLeaderboardVersion?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetServerGameData, isOptional: true })
		public getServerGameData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.DeleteInDatabase, isOptional: true })
		public deleteInDatabase?: PermissionRulesParam;

	}

	/**
	 * Defines the reusable parameter block MultiplayerPermissionRulesParam.
	 */
	export class MultiplayerPermissionRulesParam {
		@GNHashtableDataMember({ code: ParameterCode.CancelAllMatchmakingTicket, isOptional: true })
		public cancelAllMatchmakingTicket?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.CancelMatchmakingTicket, isOptional: true })
		public cancelMatchmakingTicket?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.CreateMatchmakingTicket, isOptional: true })
		public createMatchmakingTicket?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetMatchmakingTicket, isOptional: true })
		public getMatchmakingTicket?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetMatch, isOptional: true })
		public getMatch?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetQueueStatistics, isOptional: true })
		public getQueueStatistics?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.JoinMatchmakingTicket, isOptional: true })
		public joinMatchmakingTicket?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.ListMatchmakingTicketsForPlayer, isOptional: true })
		public listMatchmakingTicketsForPlayer?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetAllMatchmakingTicket, isOptional: true })
		public getAllMatchmakingTicket?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetAllMatch, isOptional: true })
		public getAllMatch?: PermissionRulesParam;

	}

	/**
	 * Defines the reusable parameter block MasterPlayerPermissionRulesParam.
	 */
	export class MasterPlayerPermissionRulesParam {
		@GNHashtableDataMember({ code: ParameterCode.LinkAccount, isOptional: true })
		public linkAccount?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LinkAndroidDeviceId, isOptional: true })
		public linkAndroidDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LinkApple, isOptional: true })
		public linkApple?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LinkCustomDeviceId, isOptional: true })
		public linkCustomDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LinkCustomId, isOptional: true })
		public linkCustomId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LinkEditorDeviceId, isOptional: true })
		public linkEditorDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LinkFacebook, isOptional: true })
		public linkFacebook?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LinkGenericService, isOptional: true })
		public linkGenericService?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LinkGoogle, isOptional: true })
		public linkGoogle?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LinkGooglePlayGameService, isOptional: true })
		public linkGooglePlayGameService?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LinkGameCenter, isOptional: true })
		public linkGameCenter?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LinkiOSDeviceId, isOptional: true })
		public linkiOSDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LinkLinuxDeviceId, isOptional: true })
		public linkLinuxDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LinkMacOSDeviceId, isOptional: true })
		public linkMacOSDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LinkWindowsDeviceId, isOptional: true })
		public linkWindowsDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LinkWindowsPhoneDeviceId, isOptional: true })
		public linkWindowsPhoneDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.UnlinkAccount, isOptional: true })
		public unlinkAccount?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.UnlinkAndroidDeviceId, isOptional: true })
		public unlinkAndroidDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.UnlinkApple, isOptional: true })
		public unlinkApple?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.UnlinkCustomDeviceId, isOptional: true })
		public unlinkCustomDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.UnlinkCustomId, isOptional: true })
		public unlinkCustomId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.UnlinkEditorDeviceId, isOptional: true })
		public unlinkEditorDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.UnlinkFacebook, isOptional: true })
		public unlinkFacebook?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.UnlinkGenericService, isOptional: true })
		public unlinkGenericService?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.UnlinkGoogle, isOptional: true })
		public unlinkGoogle?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.UnlinkGooglePlayGameService, isOptional: true })
		public unlinkGooglePlayGameService?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.UnlinkGameCenter, isOptional: true })
		public unlinkGameCenter?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.UnlinkiOSDeviceId, isOptional: true })
		public unlinkiOSDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.UnlinkLinuxDeviceId, isOptional: true })
		public unlinkLinuxDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.UnlinkMacOSDeviceId, isOptional: true })
		public unlinkMacOSDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.UnlinkWindowsDeviceId, isOptional: true })
		public unlinkWindowsDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.UnlinkWindowsPhoneDeviceId, isOptional: true })
		public unlinkWindowsPhoneDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.AddSegment, isOptional: true })
		public addSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.RemoveSegment, isOptional: true })
		public removeSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetSegment, isOptional: true })
		public getSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetTag, isOptional: true })
		public setTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.RemoveTag, isOptional: true })
		public removeTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetTag, isOptional: true })
		public getTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetDisplayName, isOptional: true })
		public getDisplayName?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetDisplayName, isOptional: true })
		public setDisplayName?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetTsCreate, isOptional: true })
		public getTsCreate?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetIpAddressCreate, isOptional: true })
		public getIpAddressCreate?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetTsLastLogin, isOptional: true })
		public setTsLastLogin?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetTsLastLogin, isOptional: true })
		public getTsLastLogin?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetPlayerBan, isOptional: true })
		public setPlayerBan?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayerBan, isOptional: true })
		public getPlayerBan?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetCountryCode, isOptional: true })
		public setCountryCode?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetCountryCode, isOptional: true })
		public getCountryCode?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.ChangeAccountPassword, isOptional: true })
		public changeAccountPassword?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.ResetAccountPassword, isOptional: true })
		public resetAccountPassword?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetAvatar, isOptional: true })
		public setAvatar?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetAvatar, isOptional: true })
		public getAvatar?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.ChangePlayerCurrency, isOptional: true })
		public changePlayerCurrency?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayerCurrency, isOptional: true })
		public getPlayerCurrency?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.ChangePlayerStatistics, isOptional: true })
		public changePlayerStatistics?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayerStatistics, isOptional: true })
		public getPlayerStatistics?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetStatisticsLeaderboard, isOptional: true })
		public getStatisticsLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetStatisticsLeaderboardAroundPlayer, isOptional: true })
		public getStatisticsLeaderboardAroundPlayer?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetCustomData, isOptional: true })
		public getCustomData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetCustomData, isOptional: true })
		public setCustomData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetPlayerData, isOptional: true })
		public setPlayerData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayerData, isOptional: true })
		public getPlayerData?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayerInformation, isOptional: true })
		public getPlayerInformation?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayersWithApple, isOptional: true })
		public getPlayersWithApple?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayersWithFacebook, isOptional: true })
		public getPlayersWithFacebook?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayersWithGoogle, isOptional: true })
		public getPlayersWithGoogle?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayersWithGenericService, isOptional: true })
		public getPlayersWithGenericService?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayersWithSegment, isOptional: true })
		public getPlayersWithSegment?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayersWithTag, isOptional: true })
		public getPlayersWithTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayersWithGooglePlayGameService, isOptional: true })
		public getPlayersWithGooglePlayGameService?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayersWithGameCenter, isOptional: true })
		public getPlayersWithGameCenter?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetExternal, isOptional: true })
		public getExternal?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPlayersWithDisplayName, isOptional: true })
		public getPlayersWithDisplayName?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetEmail, isOptional: true })
		public getEmail?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetEmail, isOptional: true })
		public setEmail?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetCurrencyLeaderboard, isOptional: true })
		public getCurrencyLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetLastLoginLeaderboard, isOptional: true })
		public getLastLoginLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetCreateLeaderboard, isOptional: true })
		public getCreateLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetStatisticsLog, isOptional: true })
		public getStatisticsLog?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetCurrencyLog, isOptional: true })
		public getCurrencyLog?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SendSocketOperationEvent, isOptional: true })
		public sendSocketOperationEvent?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SendEmail, isOptional: true })
		public sendEmail?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SendPushNotification, isOptional: true })
		public sendPushNotification?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.AddPushNotification, isOptional: true })
		public addPushNotification?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.RemovePushNotification, isOptional: true })
		public removePushNotification?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetPushNotification, isOptional: true })
		public getPushNotification?: PermissionRulesParam;

	}

	/**
	 * Defines the reusable parameter block MasterPlayerSettingsParam.
	 */
	export class MasterPlayerSettingsParam {
		@GNArrayDataMember({ code: ParameterCode.GenericServiceSettings, elementCls: GenericServiceSettingsParam, isOptional: true })
		public genericServiceSettings?: Array<GenericServiceSettingsParam>;

		@GNArrayDataMember({ code: ParameterCode.PlayerCurrenciesSettings, elementCls: CurrencySettingsParam, isOptional: true })
		public playerCurrenciesSettings?: Array<CurrencySettingsParam>;

		@GNArrayDataMember({ code: ParameterCode.PlayerStatisticsSettings, elementCls: StatisticsSettingsParam, isOptional: true })
		public playerStatisticsSettings?: Array<StatisticsSettingsParam>;

		@GNArrayDataMember({ code: ParameterCode.PlayerDatasSettings, elementCls: DataSettingsParam, isOptional: true })
		public playerDatasSettings?: Array<DataSettingsParam>;

		@GNArrayDataMember({ code: ParameterCode.CustomDatasSettings, elementCls: DataSettingsParam, isOptional: true })
		public customDatasSettings?: Array<DataSettingsParam>;

		@GNArrayDataMember({ code: ParameterCode.TagsSettings, elementCls: TagSettingsParam, isOptional: true })
		public tagsSettings?: Array<TagSettingsParam>;

	}



	/**
	 * Defines the reusable parameter block SizeParam.
	 */
	export class SizeParam {
		@NumberDataMember({ code: ParameterCode.Min, minValue: 1, mustInt: true })
		public min: number;

		@NumberDataMember({ code: ParameterCode.Max, minValue: 1, mustInt: true })
		public max: number;

	}

	/**
	 * Defines the reusable parameter block TeamParam.
	 */
	export class TeamParam {
		@StringDataMember({ code: ParameterCode.TeamId, minLength: 1, maxLength: 32 })
		public teamId: string;

		@GNHashtableDataMember({ code: ParameterCode.TeamSize })
		public teamSize: SizeParam;

	}

	/**
	 * Defines the reusable parameter block LinearExpansionsParam.
	 */
	export class LinearExpansionsParam {
		@NumberDataMember({ code: ParameterCode.SecondsBetweenExpansions, minValue: 1 })
		public secondsBetweenExpansions: number;

		@NumberDataMember({ code: ParameterCode.Delta, isOptional: true })
		public delta?: number;

		@NumberDataMember({ code: ParameterCode.Limit, isOptional: true })
		public limit?: number;

	}

	/**
	 * Defines the reusable parameter block CustomExpansionsParam.
	 */
	export class CustomExpansionsParam {
		@NumberDataMember({ code: ParameterCode.SecondsBetweenExpansions, minValue: 1 })
		public secondsBetweenExpansions: number;

		@GNArrayDataMember({ code: ParameterCode.OverrideValue, isOptional: true, elementCls: Object })
		public overrideValue?: Array<any>;

		@GNArrayDataMember({ code: ParameterCode.OverrideMin, isOptional: true, elementCls: Object })
		public overrideMin?: Array<any>;

		@GNArrayDataMember({ code: ParameterCode.OverrideMax, isOptional: true, elementCls: Object })
		public overrideMax?: Array<any>;

	}

	/**
	 * Defines the reusable parameter block AdvancedSettingsParam.
	 */
	export class AdvancedSettingsParam {
		@NumberDataMember({ code: ParameterCode.SecondsUntilOptional, minValue: 1 })
		public secondsUntilOptional: number;

		@NumberDataMember({ code: ParameterCode.ExpansionType, minValue: 1, maxValue: 3, isOptional: true, mustInt: true })
		public expansionType?: number;

		@GNHashtableDataMember({ code: ParameterCode.LinearExpansions, isOptional: true })
		public linearExpansions?: LinearExpansionsParam;

		@GNHashtableDataMember({ code: ParameterCode.CustomExpansions, isOptional: true })
		public customExpansions?: CustomExpansionsParam;

	}

	/**
	 * Defines the reusable parameter block RuleParam.
	 */
	export class RuleParam {
		@StringDataMember({ code: ParameterCode.Name, minLength: 1, maxLength: 32 })
		public name: string;

		@NumberDataMember({ code: ParameterCode.Type, minValue: 1, maxValue: 8, mustInt: true })
		public type: number;

		@NumberDataMember({ code: ParameterCode.AttributeSource, minValue: 1, maxValue: 2, isOptional: true })
		public attributeSource?: number;

		@StringDataMember({ code: ParameterCode.AttributePath, minLength: 1, maxLength: 32, isOptional: true })
		public attributePath?: string;

		@DataMember({ code: ParameterCode.DefaultValue, isOptional: true })
		public defaultValue?: any;

		@NumberDataMember({ code: ParameterCode.CompairType, minValue: 1, maxValue: 2, isOptional: true, mustInt: true })
		public compairType?: number;

		@NumberDataMember({ code: ParameterCode.AllowedDifference, minValue: 0, isOptional: true })
		public allowedDifference?: number;

		@NumberDataMember({ code: ParameterCode.Min, isOptional: true })
		public min?: number;

		@NumberDataMember({ code: ParameterCode.Max, isOptional: true })
		public max?: number;

		@GNHashtableDataMember({ code: ParameterCode.AdvancedSettings, isOptional: true })
		public advancedSettings?: AdvancedSettingsParam;

	}

	/**
	 * Defines the reusable parameter block ServerAllocationParam.
	 */
	export class ServerAllocationParam {
		@BooleanDataMember({ code: ParameterCode.Enable })
		public enable: boolean;

	}

	/**
	 * Defines the reusable parameter block MatchmakingQueueSettingsParam.
	 */
	export class MatchmakingQueueSettingsParam {
		@StringDataMember({ code: ParameterCode.QueueName, minLength: 6, maxLength: 32 })
		public queueName: string;

		@GNHashtableDataMember({ code: ParameterCode.MatchSize })
		public matchSize: SizeParam;

		@GNHashtableDataMember({ code: ParameterCode.TicketSize })
		public ticketSize: SizeParam;

		@GNHashtableDataMember({ code: ParameterCode.ServerAllocation })
		public serverAllocation: ServerAllocationParam;

		@GNArrayDataMember({ code: ParameterCode.Teams, isOptional: true, elementCls: TeamParam })
		public teams?: Array<TeamParam>;

		@GNArrayDataMember({ code: ParameterCode.Rules, isOptional: true, elementCls: RuleParam })
		public rules?: Array<RuleParam>;

		@BooleanDataMember({ code: ParameterCode.Remove, isOptional: true })
		public remove?: boolean;

	}

	/**
	 * Defines the reusable parameter block AuthenticatePermissionRulesParam.
	 */
	export class AuthenticatePermissionRulesParam {
		@GNHashtableDataMember({ code: ParameterCode.LoginByAccount, isOptional: true })
		public loginByAccount?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LoginByAndroidDeviceId, isOptional: true })
		public loginByAndroidDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LoginByApple, isOptional: true })
		public loginByApple?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LoginByCustomDeviceId, isOptional: true })
		public loginByCustomDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LoginByCustomId, isOptional: true })
		public loginByCustomId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LoginByFacebook, isOptional: true })
		public loginByFacebook?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LoginByGenericService, isOptional: true })
		public loginByGenericService?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LoginByGoogle, isOptional: true })
		public loginByGoogle?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LoginByGooglePlayGameService, isOptional: true })
		public loginByGooglePlayGameService?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LoginByGameCenter, isOptional: true })
		public loginByGameCenter?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LoginByiOSDeviceId, isOptional: true })
		public loginByiOSDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LoginByWindowsPhoneDeviceId, isOptional: true })
		public loginByWindowsPhoneDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.RegisterAccount, isOptional: true })
		public registerAccount?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LoginByEditorDeviceId, isOptional: true })
		public loginByEditorDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LoginByLinuxDeviceId, isOptional: true })
		public loginByLinuxDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LoginByMacOSDeviceId, isOptional: true })
		public loginByMacOSDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.LoginByWindowsDeviceId, isOptional: true })
		public loginByWindowsDeviceId?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.RefreshAuthToken, isOptional: true })
		public refreshAuthToken?: PermissionRulesParam;

	}

	/**
	 * Defines the reusable parameter block StoreInventoryPermissionRulesParam.
	 */
	export class StoreInventoryPermissionRulesParam {
		@GNHashtableDataMember({ code: ParameterCode.BuyStoreItem, isOptional: true })
		public buyStoreItem?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetStoreItemInformation, isOptional: true })
		public getStoreItemInformation?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetStoreItemsWithTag, isOptional: true })
		public getStoreItemsWithTag?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.CreateStoreItem, isOptional: true })
		public createStoreItem?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetRemoveStatus, isOptional: true })
		public setRemoveStatus?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.SetStoreItemInformation, isOptional: true })
		public setStoreItemInformation?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.ValidateAppleAppStoreReceipt, isOptional: true })
		public validateAppleAppStoreReceipt?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.ValidateGooglePlayStoreReceipt, isOptional: true })
		public validateGooglePlayStoreReceipt?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.ValidateFacebookStoreReceipt, isOptional: true })
		public validateFacebookStoreReceipt?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetCreateLeaderboard, isOptional: true })
		public getCreateLeaderboard?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.PresentStoreItem, isOptional: true })
		public presentStoreItem?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetStoreLog, isOptional: true })
		public getStoreLog?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetStoreUsed, isOptional: true })
		public getStoreUsed?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.RemoveStoreUsed, isOptional: true })
		public removeStoreUsed?: PermissionRulesParam;

	}

	/**
	 * Defines the reusable parameter block CloudScriptPermissionRulesParam.
	 */
	export class CloudScriptPermissionRulesParam {
		@GNHashtableDataMember({ code: ParameterCode.ExecuteFunction, isOptional: true })
		public executeFunction?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.AddFunction, isOptional: true })
		public addFunction?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetFunctions, isOptional: true })
		public getFunctions?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GetFunction, isOptional: true })
		public getFunction?: PermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.EditFunction, isOptional: true })
		public editFunction?: PermissionRulesParam;

	}

	/**
	 * Defines the top-level permission tree assigned to one secret info entry.
	 *
	 * Each optional property groups permission rules by API domain.
	 */
	export class PermissionParam {
		@GNHashtableDataMember({ code: ParameterCode.Authenticate, isOptional: true })
		public authenticate?: AuthenticatePermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.MasterPlayer, isOptional: true })
		public masterPlayer?: MasterPlayerPermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.GamePlayer, isOptional: true })
		public gamePlayer?: GamePlayerPermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.CharacterPlayer, isOptional: true })
		public characterPlayer?: CharacterPlayerPermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.Content, isOptional: true })
		public content?: ContentPermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.Group, isOptional: true })
		public group?: GroupPermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.Inventory, isOptional: true })
		public inventory?: InventoryPermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.StoreInventory, isOptional: true })
		public storeInventory?: StoreInventoryPermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.Dashboard, isOptional: true })
		public dashboard?: DashboardPermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.Multiplayer, isOptional: true })
		public multiplayer?: MultiplayerPermissionRulesParam;

		@GNHashtableDataMember({ code: ParameterCode.CloudScript, isOptional: true })
		public cloudScript?: CloudScriptPermissionRulesParam;

	}

	/**
	 * Defines the request payload for ChangePasswordAdminAccount.
	 */
	export class ChangePasswordAdminAccountRequestData {
		@StringDataMember({ code: ParameterCode.CurrentPassword, minLength: 6, maxLength: 64, mustNonNull: true })
		public currentPassword: string;

		@StringDataMember({ code: ParameterCode.Password, minLength: 6, maxLength: 64, mustNonNull: true })
		public password: string;

	}

	/**
	 * Defines the request payload for GetAdminAccountList.
	 */
	export class GetAdminAccountListRequestData {
	}

	/**
	 * Defines the request payload for GetGameInformation.
	 */
	export class GetGameInformationRequestData {
		@StringDataMember({ code: ParameterCode.GameId, minLength: 2, maxLength: 32, mustNonNull: true })
		public gameId: string;

	}

	/**
	 * Defines the request payload for GetGameList.
	 */
	export class GetGameListRequestData {
	}

	/**
	 * Defines the request payload for GetMasterGameSettings.
	 */
	export class GetMasterGameSettingsRequestData {
	}

	/**
	 * Defines the request payload for GetSecretInfoInformation.
	 */
	export class GetSecretInfoInformationRequestData {
		@StringDataMember({ code: ParameterCode.SecretKey, minLength: 6, maxLength: 64, mustNonNull: true })
		public secretKey: string;

	}

	/**
	 * Defines the request payload for GetSecretInfoList.
	 */
	export class GetSecretInfoListRequestData {
	}

	/**
	 * Defines the request payload for GetServerLog.
	 */
	export class GetServerLogRequestData {
		@NumberDataMember({ code: ParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		skip?: number;

		@NumberDataMember({ code: ParameterCode.Limit, defaultValue: 50, minValue: 5, maxValue: 200, mustInt: true, isOptional: true })
		limit?: number;

	}

	/**
	 * Defines the request payload for CreateAdminAccount.
	 */
	export class CreateAdminAccountRequestData {
		@StringDataMember({ code: ParameterCode.Username, minLength: 6, maxLength: 32, mustNonNull: true })
		public username: string;

		@StringDataMember({ code: ParameterCode.Password, minLength: 6, maxLength: 64, mustNonNull: true })
		public password: string;

		@StringDataMember({ code: ParameterCode.SecretKey, minLength: 6, maxLength: 64, mustNonNull: true })
		public secretKey: string;

	}

	/**
	 * Defines the request payload for CreateGame.
	 */
	export class CreateGameRequestData {
		@StringDataMember({ code: ParameterCode.GameId, minLength: 2, maxLength: 32, mustNonNull: true })
		public gameId: string;

	}

	/**
	 * Defines the request payload for `createSecretInfo`.
	 *
	 * `permissionParam` is the authoritative permission tree that controls which operations
	 * the created secret key may execute on the GearN server.
	 */
	export class CreateSecretInfoRequestData {
		/** Optional custom secret key. If omitted, the backend may generate one. */
		@StringDataMember({ code: ParameterCode.SecretKey, minLength: 6, maxLength: 64, mustNonNull: true, isOptional: true })
		public secretKey?: string;

		/** Optional target game id when creating a secret for a specific game. */
		@StringDataMember({ code: ParameterCode.GameId, minLength: 2, maxLength: 32, mustNonNull: true, isOptional: true })
		public gameId?: string;

		/** Optional permission tree granted to the new secret key. */
		@GNHashtableDataMember({ code: ParameterCode.PermissionParam, isOptional: true })
		public permissionParam?: PermissionParam;

	}

	/**
	 * Defines the request payload for `loginByAdminAccount`.
	 *
	 * A successful response returns an auth token that later dashboard calls reuse so backend middleware can resolve admin context.
	 */
	export class LoginByAdminAccountRequestData {
		@StringDataMember({ code: ParameterCode.Username, minLength: 4, maxLength: 32, mustNonNull: true })
		public username: string;

		@StringDataMember({ code: ParameterCode.Password, minLength: 6, maxLength: 64, mustNonNull: true })
		public password: string;

	}

	/**
	 * Defines the request payload for RemoveAdminAccount.
	 */
	export class RemoveAdminAccountRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	/**
	 * Defines the request payload for SetGameInformation.
	 */
	export class SetGameInformationRequestData {
		@StringDataMember({ code: ParameterCode.GameId, minLength: 2, maxLength: 32, mustNonNull: true })
		public gameId: string;

		@StringDataMember({ code: ParameterCode.GameName, isOptional: true })
		public gameName?: string;

		@StringDataMember({ code: ParameterCode.GameDescription, isOptional: true })
		public gameDescription?: string;

		@StringDataMember({ code: ParameterCode.GameIconUrl, isOptional: true })
		public gameIconUrl?: string;

		@GNHashtableDataMember({ code: ParameterCode.GameSettings, isOptional: true })
		public gameSettings?: GameSettingsParam;

		@GNArrayDataMember({ code: ParameterCode.MatchmakingQueueSettings, isOptional: true, elementCls: MatchmakingQueueSettingsParam })
		public matchmakingQueueSettings?: Array<MatchmakingQueueSettingsParam>;

	}

	/**
	 * Defines the request payload for SetMasterGameSettings.
	 */
	export class SetMasterGameSettingsRequestData {
		@GNHashtableDataMember({ code: ParameterCode.ThirtPartySettings, isOptional: true })
		public thirtPartySettings?: ThirtPartyParam;

		@GNHashtableDataMember({ code: ParameterCode.MasterPlayerSettings, isOptional: true })
		public masterPlayerSettings?: MasterPlayerSettingsParam;

		@GNHashtableDataMember({ code: ParameterCode.EmailSettings, isOptional: true })
		public emailSettings?: EmailSettingsParam;

		@GNHashtableDataMember({ code: ParameterCode.PushNotificationSettings, isOptional: true })
		public pushNotificationSettings?: PushNotificationSettingsParam;

	}

	/**
	 * Defines the request payload for SetPasswordAdminAccount.
	 */
	export class SetPasswordAdminAccountRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

		@StringDataMember({ code: ParameterCode.Password, minLength: 6, maxLength: 64, mustNonNull: true })
		public password: string;

	}

	/**
	 * Defines the request payload for SetSecretInfoInformation.
	 */
	export class SetSecretInfoInformationRequestData {
		@StringDataMember({ code: ParameterCode.SecretKey, minLength: 6, maxLength: 64, mustNonNull: true })
		public secretKey: string;

		@BooleanDataMember({ code: ParameterCode.Remove, isOptional: true })
		public remove?: boolean;

		@NumberDataMember({ code: ParameterCode.TsExpire, isOptional: true })
		public tsExpire?: number;

		@StringDataMember({ code: ParameterCode.Description, isOptional: true })
		public description?: string;

		@GNHashtableDataMember({ code: ParameterCode.PermissionParam, isOptional: true })
		public permissionParam?: PermissionParam;

	}

	/**
	 * Defines the request payload for SetSecretKeyAdminAccount.
	 */
	export class SetSecretKeyAdminAccountRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

		@StringDataMember({ code: ParameterCode.SecretKey, minLength: 6, maxLength: 64, mustNonNull: true })
		public secretKey: string;

	}

	/**
	 * Defines the request payload for GetAnalytics.
	 */
	export class GetAnalyticsRequestData {
		@NumberDataMember({ code: ParameterCode.Timestamp, minValue: 0, isOptional: true })
		public timestamp?: number;

		@BooleanDataMember({ code: ParameterCode.AnalyticsItem, isOptional: true })
		public analyticsItem?: boolean;

		@BooleanDataMember({ code: ParameterCode.Country, isOptional: true })
		public country?: boolean;

		@BooleanDataMember({ code: ParameterCode.RequestComplete, isOptional: true })
		public requestComplete?: boolean;

		@BooleanDataMember({ code: ParameterCode.OperationSystem, isOptional: true })
		public operationSystem?: boolean;

		@BooleanDataMember({ code: ParameterCode.DatabaseSystem, isOptional: true })
		public databaseSystem?: boolean;

		@BooleanDataMember({ code: ParameterCode.LogDatabaseSystem, isOptional: true })
		public logDatabaseSystem?: boolean;

		@BooleanDataMember({ code: ParameterCode.Cost, isOptional: true })
		public cost?: boolean;

		@BooleanDataMember({ code: ParameterCode.MonthlyCost, isOptional: true })
		public monthlyCost?: boolean;

	}

	/**
	 * Defines the request payload for GetUsernameAdminAccount.
	 */
	export class GetUsernameAdminAccountRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	/**
	 * Defines the request payload for GetEventCallbackCloudScript.
	 */
	export class GetEventCallbackCloudScriptRequestData {

	}

	/**
	 * Defines the request payload for SetEventCallbackCloudScript.
	 */
	export class SetEventCallbackCloudScriptRequestData {
		@StringDataMember({ code: ParameterCode.EventName, minLength: 6, maxLength: 128, mustNonNull: true })
		public eventName: string;

		@StringDataMember({ code: ParameterCode.Script, minLength: 6, maxLength: Number.MAX_SAFE_INTEGER, mustNonNull: true })
		public script: string;

	}

	/**
	 * Defines the request payload for ResetStatisticsLeaderboard.
	 */
	export class ResetStatisticsLeaderboardRequestData {
		@NumberDataMember({ code: ParameterCode.Type, mustInt: true })
		public type: number;

		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32 })
		public key: string;

		@StringDataMember({ code: ParameterCode.Version, minLength: 2, maxLength: 32 })
		public version: string;

		@StringDataMember({ code: ParameterCode.GameId, minLength: 2, maxLength: 32, mustNonNull: true })
		public gameId: string;

		@StringDataMember({ code: ParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
		public log?: string;

		@StringDataMember({ code: ParameterCode.CatalogId, minLength: 2, maxLength: 32, mustNonNull: true, isOptional: true })
		public catalogId?: string;

	}

	/**
	 * Defines the request payload for DeleteInDatabase.
	 */
	export class DeleteInDatabaseRequestData {
		@NumberDataMember({ code: ParameterCode.Type, mustInt: true })
		public type: number;

		@StringDataMember({ code: ParameterCode.Id, minLength: 2, maxLength: 32 })
		public id: string;

		@StringDataMember({ code: ParameterCode.GameId, minLength: 2, maxLength: 32, mustNonNull: true })
		public gameId: string;

		@StringDataMember({ code: ParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
		public log?: string;

	}

	/**
	 * Defines the request payload for GetBackupStatisticsLeaderboardVersion.
	 */
	export class GetBackupStatisticsLeaderboardVersionRequestData {
		@StringDataMember({ code: ParameterCode.GameId, minLength: 2, maxLength: 32, mustNonNull: true })
		public gameId: string;

		@NumberDataMember({ code: ParameterCode.Type, mustInt: true })
		public type: number;

		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32 })
		public key: string;
	}

	/**
	 * Defines the request payload for GetServerGameData.
	 */
	export class GetServerGameDataRequestData {
		@StringDataMember({ code: ParameterCode.GameId, minLength: 2, maxLength: 32, mustNonNull: true })
		public gameId: string;

		@BooleanDataMember({ code: ParameterCode.MasterPlayerCount, isOptional: true })
		public masterPlayerCount?: boolean;

		@BooleanDataMember({ code: ParameterCode.GamePlayerCount, isOptional: true })
		public gamePlayerCount?: boolean;

		@BooleanDataMember({ code: ParameterCode.CharacterPlayerCount, isOptional: true })
		public characterPlayerCount?: boolean;

		@BooleanDataMember({ code: ParameterCode.InventoryCount, isOptional: true })
		public inventoryCount?: boolean;

		@BooleanDataMember({ code: ParameterCode.StoreInventoryCount, isOptional: true })
		public storeInventoryCount?: boolean;

		@BooleanDataMember({ code: ParameterCode.GroupCount, isOptional: true })
		public groupCount?: boolean;

		@BooleanDataMember({ code: ParameterCode.Country, isOptional: true })
		public country?: boolean;

		@BooleanDataMember({ code: ParameterCode.Version, isOptional: true })
		public version?: boolean;

	}

	/**
	 * Defines the response payload for AdminAccount.
	 */
	export class AdminAccountResponseData {
		@StringDataMember({ code: ParameterCode.UserId })
		public userId: string;

		@StringDataMember({ code: ParameterCode.Username })
		public username: string;

		@StringDataMember({ code: ParameterCode.SecretKey })
		public secretKey: string;

	}

	/**
	 * Defines the response payload for GetAdminAccountList.
	 */
	export class GetAdminAccountListResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: AdminAccountResponseData })
		public results: Array<AdminAccountResponseData>;

	}

	/**
	 * Defines the response payload for GetGameInformation.
	 */
	export class GetGameInformationResponseData {
		@StringDataMember({ code: ParameterCode.GameId })
		public gameId: string;

		@NumberDataMember({ code: ParameterCode.TsCreate })
		public tsCreate: number;

		@StringDataMember({ code: ParameterCode.GameName })
		public gameName: string;

		@StringDataMember({ code: ParameterCode.CreatorId })
		public creatorId: string;

		@StringDataMember({ code: ParameterCode.GameDescription })
		public gameDescription: string;

		@StringDataMember({ code: ParameterCode.GameIconUrl })
		public gameIconUrl: string;

		@GNHashtableDataMember({ code: ParameterCode.GameSettings })
		public gameSettings: GameSettingsParam;

		@GNArrayDataMember({ code: ParameterCode.MatchmakingQueueSettings, elementCls: MatchmakingQueueSettingsParam })
		public matchmakingQueueSettings: Array<MatchmakingQueueSettingsParam>;

	}

	/**
	 * Defines the response payload for GameWithGameId.
	 */
	export class GameWithGameIdResponseData {
		@StringDataMember({ code: ParameterCode.GameId })
		public gameId: string;

	}

	/**
	 * Defines the response payload for GetGameList.
	 */
	export class GetGameListResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: GameWithGameIdResponseData })
		public results: Array<GameWithGameIdResponseData>;

	}

	/**
	 * Defines the response payload for `getMasterGameSettings`.
	 *
	 * This payload contains the full top-level dashboard configuration snapshot used to provision a game.
	 */
	export class GetMasterGameSettingsResponseData {
		@GNHashtableDataMember({ code: ParameterCode.ThirtPartySettings })
		public thirtPartySettings: ThirtPartyParam;

		@GNHashtableDataMember({ code: ParameterCode.MasterPlayerSettings })
		public masterPlayerSettings: MasterPlayerSettingsParam;

		@GNHashtableDataMember({ code: ParameterCode.EmailSettings })
		public emailSettings: EmailSettingsParam;

		@GNHashtableDataMember({ code: ParameterCode.PushNotificationSettings })
		public pushNotificationSettings: PushNotificationSettingsParam;

	}

	/**
	 * Defines the response payload for `getSecretInfoInformation`.
	 *
	 * This is the detailed secret-info record, including role, lifecycle flags, and permission tree.
	 */
	export class GetSecretInfoInformationResponseData {
		/** Secret key whose detailed configuration was requested. */
		@StringDataMember({ code: ParameterCode.SecretKey })
		public secretKey: string;

		@StringDataMember({ code: ParameterCode.GameId })
		public gameId: string;

		@NumberDataMember({ code: ParameterCode.TsCreate })
		public tsCreate: number;

		@StringDataMember({ code: ParameterCode.CreatorId })
		public creatorId: string;

		@BooleanDataMember({ code: ParameterCode.Remove })
		public remove: boolean;

		@NumberDataMember({ code: ParameterCode.TsExpire })
		public tsExpire: number;

		@StringDataMember({ code: ParameterCode.Description })
		public description: string;

		/** Permission tree granted to this secret key. */
		@GNHashtableDataMember({ code: ParameterCode.PermissionParam })
		public permissionParam: PermissionParam;

	}

	/**
	 * Defines a lightweight secret-info item returned by secret-list queries.
	 */
	export class SecretInfoWithSecretKeyResponseData {
		@StringDataMember({ code: ParameterCode.SecretKey })
		public secretKey: string;

	}

	/**
	 * Defines the response payload for `getSecretInfoList`.
	 *
	 * Results are grouped by secret role instead of being returned as one flat array.
	 */
	export class GetSecretInfoListResponseData {
		/** Secret keys whose role is admin. */
		@GNArrayDataMember({ code: ParameterCode.SecretKeys, elementCls: SecretInfoWithSecretKeyResponseData })
		public secretKeys: Array<SecretInfoWithSecretKeyResponseData>;

	}

	/**
	 * Defines the response payload for AdminAccountWithUserId.
	 */
	export class AdminAccountWithUserIdResponseData {
		@StringDataMember({ code: ParameterCode.UserId })
		public userId: string;

	}

	/**
	 * Defines the response payload for CreateAdminAccount.
	 */
	export class CreateAdminAccountResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: AdminAccountWithUserIdResponseData })
		public results: Array<AdminAccountWithUserIdResponseData>;

	}

	/**
	 * Defines the response payload for `loginByAdminAccount`.
	 *
	 * The returned auth token should be cached and reused for subsequent dashboard requests.
	 */
	export class LoginByAdminAccountResponseData {
		/** Auth token representing the authenticated admin account. */
		@StringDataMember({ code: ParameterCode.AuthToken })
		public authToken: string;

	}

	/**
	 * Defines the response payload for GetServerLog.
	 */
	export class GetServerLogResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: String })
		public results: Array<string>;

	}

	/**
	 * Defines the response payload for CountryRegion.
	 */
	export class CountryRegionResponseData {
		@StringDataMember({ code: ParameterCode.RegionCode })
		public regionCode: string;

		@StringDataMember({ code: ParameterCode.RegionName })
		public regionName: string;

		@NumberDataMember({ code: ParameterCode.CCU })
		public ccu: number;

		@NumberDataMember({ code: ParameterCode.Latitude, isOptional: true, defaultValue: 0 })
		public latitude: number;

		@NumberDataMember({ code: ParameterCode.Longitude, isOptional: true, defaultValue: 0 })
		public longitude: number;

	}

	/**
	 * Defines the response payload for Country.
	 */
	export class CountryResponseData {
		@StringDataMember({ code: ParameterCode.CountryCode })
		public countryCode: string;

		@GNArrayDataMember({ code: ParameterCode.Regions, elementCls: CountryRegionResponseData })
		public regions: Array<CountryRegionResponseData>;

	}

	/**
	 * Defines the response payload for AnalyticsItem.
	 */
	export class AnalyticsItemResponseData {
		@NumberDataMember({ code: ParameterCode.CCU })
		public ccu: number;

		@NumberDataMember({ code: ParameterCode.DAU })
		public dau: number;

		@NumberDataMember({ code: ParameterCode.DAUSince0h })
		public dauSince0h: number;

		@NumberDataMember({ code: ParameterCode.DNU })
		public dnu: number;

		@NumberDataMember({ code: ParameterCode.DNUSince0h })
		public dnuSince0h: number;

		@NumberDataMember({ code: ParameterCode.DRT })
		public drt: number;

		@NumberDataMember({ code: ParameterCode.DRTSince0h })
		public drtSince0h: number;

		@NumberDataMember({ code: ParameterCode.MAU })
		public mau: number;

		@NumberDataMember({ code: ParameterCode.MAUSince0h1 })
		public mauSince0h1: number;

		@NumberDataMember({ code: ParameterCode.MNU })
		public mnu: number;

		@NumberDataMember({ code: ParameterCode.MNUSince0h1 })
		public mnuSince0h1: number;

		@NumberDataMember({ code: ParameterCode.MRT })
		public mrt: number;

		@NumberDataMember({ code: ParameterCode.MRTSince0h1 })
		public mrtSince0h1: number;

		@NumberDataMember({ code: ParameterCode.AnalyticsPrice })
		public analyticsPrice: number;

	}

	/**
	 * Defines the response payload for MemoryUsage.
	 */
	export class MemoryUsageResponseData {
		@NumberDataMember({ code: ParameterCode.FreeMemoryInBytes })
		public freeMemoryInBytes: number;

		@NumberDataMember({ code: ParameterCode.TotalMemoryInBytes })
		public totalMemoryInBytes: number;

	}

	/**
	 * Defines the response payload for StorageUsage.
	 */
	export class StorageUsageResponseData {
		@StringDataMember({ code: ParameterCode.Name })
		public name: string;

		@NumberDataMember({ code: ParameterCode.FsTotalSizeInBytes })
		public fsTotalSizeInBytes: number;

		@NumberDataMember({ code: ParameterCode.FsUsedSizeInBytes })
		public fsUsedSizeInBytes: number;

	}

	/**
	 * Defines the response payload for DatabaseSystem.
	 */
	export class DatabaseSystemResponseData {
		@NumberDataMember({ code: ParameterCode.FsTotalSizeInBytes })
		public fsTotalSizeInBytes: number;

		@NumberDataMember({ code: ParameterCode.FsUsedSizeInBytes })
		public fsUsedSizeInBytes: number;

		@NumberDataMember({ code: ParameterCode.TotalSizeInBytes })
		public totalSizeInBytes: number;

		@NumberDataMember({ code: ParameterCode.Collections })
		public collections: number;

		@NumberDataMember({ code: ParameterCode.Objects })
		public objects: number;

		@NumberDataMember({ code: ParameterCode.Indexes })
		public indexes: number;

	}

	/**
	 * Defines the response payload for OperationSystem.
	 */
	export class OperationSystemResponseData {
		@NumberDataMember({ code: ParameterCode.CpuUsage })
		public cpuUsage: number;

		@GNHashtableDataMember({ code: ParameterCode.MemoryUsage })
		public memoryUsage: MemoryUsageResponseData;

		@GNArrayDataMember({ code: ParameterCode.StorageUsage, elementCls: StorageUsageResponseData })
		public storageUsage: Array<StorageUsageResponseData>;

	}

	/**
	 * Defines the response payload for RequestCompleteErrorCode.
	 */
	export class RequestCompleteErrorCodeResponseData {
		@NumberDataMember({ code: ParameterCode.ErrorCode })
		public errorCode: number;

		@NumberDataMember({ code: ParameterCode.Count })
		public count: number;

	}

	/**
	 * Defines the response payload for RequestComplete.
	 */
	export class RequestCompleteResponseData {
		@StringDataMember({ code: ParameterCode.EventName })
		public eventName: string;

		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: RequestCompleteErrorCodeResponseData })
		public results: Array<RequestCompleteErrorCodeResponseData>;

	}

	/**
	 * Defines the response payload for Cost.
	 */
	export class CostResponseData {
		@NumberDataMember({ code: ParameterCode.RequestCount })
		public requestCount: number;

		@NumberDataMember({ code: ParameterCode.MatchmakingRequestCount })
		public matchmakingRequestCount: number;

		@NumberDataMember({ code: ParameterCode.CloudScriptGBs })
		public cloudScriptGBs: number;

		@NumberDataMember({ code: ParameterCode.StorageSizeInBytes })
		public storageSizeInBytes: number;

		@NumberDataMember({ code: ParameterCode.DataTransferSizeInBytes })
		public dataTransferSizeInBytes: number;

	}

	/**
	 * Defines the response payload for GetAnalytics.
	 */
	export class GetAnalyticsResponseData {
		@GNHashtableDataMember({ code: ParameterCode.AnalyticsItem, isOptional: true })
		public analyticsItem?: AnalyticsItemResponseData;

		@GNArrayDataMember({ code: ParameterCode.Country, elementCls: CountryResponseData, isOptional: true })
		public country?: Array<CountryResponseData>;

		@GNHashtableDataMember({ code: ParameterCode.OperationSystem, isOptional: true })
		public operationSystem?: OperationSystemResponseData;

		@GNArrayDataMember({ code: ParameterCode.RequestComplete, elementCls: RequestCompleteResponseData, isOptional: true })
		public requestComplete?: Array<RequestCompleteResponseData>;

		@GNHashtableDataMember({ code: ParameterCode.DatabaseSystem, isOptional: true })
		public databaseSystem?: DatabaseSystemResponseData;

		@GNHashtableDataMember({ code: ParameterCode.LogDatabaseSystem, isOptional: true })
		public logDatabaseSystem?: DatabaseSystemResponseData;

		@GNHashtableDataMember({ code: ParameterCode.Cost, isOptional: true })
		public cost?: CostResponseData;

		@GNHashtableDataMember({ code: ParameterCode.MonthlyCost, isOptional: true })
		public monthlyCost?: CostResponseData;

	}

	/**
	 * Defines the response payload for GetUsernameAdminAccount.
	 */
	export class GetUsernameAdminAccountResponseData {
		@StringDataMember({ code: ParameterCode.Username })
		public username: string;

	}

	/**
	 * Defines the response payload for ChildScript.
	 */
	export class ChildScriptResponseData {
		@StringDataMember({ code: ParameterCode.EventName })
		public eventName: string;

		@StringDataMember({ code: ParameterCode.Script })
		public script: string;

		@BooleanDataMember({ code: ParameterCode.HasEdit })
		public hasEdit: boolean;

	}

	/**
	 * Defines the response payload for EventCallbackCloudScript.
	 */
	export class EventCallbackCloudScriptResponseData {
		@StringDataMember({ code: ParameterCode.Type })
		public type: string;

		@NumberDataMember({ code: ParameterCode.TsCreate })
		public tsCreate: number;

		@StringDataMember({ code: ParameterCode.Version })
		public version: string;

		@GNArrayDataMember({ code: ParameterCode.ChildScripts, elementCls: ChildScriptResponseData })
		public childScripts: Array<ChildScriptResponseData>;

	}

	/**
	 * Defines the response payload for `getEventCallbackCloudScript`.
	 *
	 * Each result links one event callback registration to a CloudScript target.
	 */
	export class GetEventCallbackCloudScriptResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: EventCallbackCloudScriptResponseData })
		public results: Array<EventCallbackCloudScriptResponseData>;
	}

	/**
	 * Defines the response payload for SetEventCallbackCloudScript.
	 */
	export class SetEventCallbackCloudScriptResponseData {
		@StringDataMember({ code: ParameterCode.ErrorMessage })
		public errorMessage: string;

	}

	/**
	 * Defines the response payload for BackupStatisticsLeaderboardVersion.
	 */
	export class BackupStatisticsLeaderboardVersionResponseData {
		@StringDataMember({ code: ParameterCode.Version })
		public version: string;

		@StringDataMember({ code: ParameterCode.Log })
		public log: string;

		@NumberDataMember({ code: ParameterCode.TsCreate })
		public tsCreate: number;

	}

	/**
	 * Defines the response payload for GetBackupStatisticsLeaderboardVersion.
	 */
	export class GetBackupStatisticsLeaderboardVersionResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: BackupStatisticsLeaderboardVersionResponseData })
		public results: Array<BackupStatisticsLeaderboardVersionResponseData>;

	}

	/**
	 * Defines the response payload for `getServerGameData`.
	 *
	 * This is a high-level telemetry snapshot of entity counts, country breakdown, and server version data.
	 */
	export class GetServerGameDataResponseData {
		@NumberDataMember({ code: ParameterCode.MasterPlayerCount, isOptional: true })
		public masterPlayerCount?: number;

		@NumberDataMember({ code: ParameterCode.GamePlayerCount, isOptional: true })
		public gamePlayerCount?: number;

		@NumberDataMember({ code: ParameterCode.CharacterPlayerCount, isOptional: true })
		public characterPlayerCount?: number;

		@NumberDataMember({ code: ParameterCode.InventoryCount, isOptional: true })
		public inventoryCount?: number;

		@NumberDataMember({ code: ParameterCode.StoreInventoryCount, isOptional: true })
		public storeInventoryCount?: number;

		@NumberDataMember({ code: ParameterCode.GroupCount, isOptional: true })
		public groupCount?: number;

		/** Optional country-level breakdown returned by the backend. */
		@GNArrayDataMember({ code: ParameterCode.Country, elementCls: CountryResponseData, isOptional: true })
		public country?: Array<CountryResponseData>;

		/** Optional server or game-data version string reported by the backend. */
		@StringDataMember({ code: ParameterCode.Version, isOptional: true })
		public version?: string;

	}

	/**
	 * Defines an intentionally empty response payload.
	 */
	export class EmptyResponseData {
	}

}
