import { GNHashtable } from "./../../common/GNData";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";
import { GenericModels } from "./GenericModels";

export namespace MasterPlayerModels {
	export class CustomDataParam {
		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@DataMember({ code: ParameterCode.Value })
		public value: any;

	}

	export class InfoRequestParam {
		@BooleanDataMember({ code: ParameterCode.External, isOptional: true, defaultValue: false })
		public external?: boolean;

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

		@BooleanDataMember({ code: ParameterCode.Email, isOptional: true, defaultValue: false })
		public email?: boolean;

		@BooleanDataMember({ code: ParameterCode.TsLastLogin, isOptional: true, defaultValue: false })
		public tsLastLogin?: boolean;

		@BooleanDataMember({ code: ParameterCode.PushNotifications, isOptional: true, defaultValue: false })
		public pushNotifications?: boolean;

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

	}

	export class PlayerCurrencyParam {
		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@NumberDataMember({ code: ParameterCode.Amount })
		public amount: number;

	}

	export class PlayerDataParam {
		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@DataMember({ code: ParameterCode.Value })
		public value: any;

	}

	export class PlayerStatisticsParam {
		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@NumberDataMember({ code: ParameterCode.Value })
		public value: number;

	}

	export class GenericService {
		@StringDataMember({ code: ParameterCode.ServiceName })
		public serviceName: string;

		@StringDataMember({ code: ParameterCode.ServiceId })
		public serviceId: string;

	}

	export class Device {
		@StringDataMember({ code: ParameterCode.CustomDeviceId, isOptional: true })
		public customDeviceId?: string;

		@StringDataMember({ code: ParameterCode.AndroidDeviceId, isOptional: true })
		public androidDeviceId?: string;

		@StringDataMember({ code: ParameterCode.iOSDeviceId, isOptional: true })
		public iOSDeviceId?: string;

		@StringDataMember({ code: ParameterCode.WindowsPhoneDeviceId, isOptional: true })
		public windowsPhoneDeviceId?: string;

		@StringDataMember({ code: ParameterCode.WindowsDeviceId, isOptional: true })
		public windowsDeviceId?: string;

		@StringDataMember({ code: ParameterCode.LinuxDeviceId, isOptional: true })
		public linuxDeviceId?: string;

		@StringDataMember({ code: ParameterCode.MacOSDeviceId, isOptional: true })
		public macOSDeviceId?: string;

		@StringDataMember({ code: ParameterCode.EditorDeviceId, isOptional: true })
		public editorDeviceId?: string;

	}

	export class Account {
		@StringDataMember({ code: ParameterCode.Username, isOptional: true })
		public username?: string;

	}

	export class Custom {
		@StringDataMember({ code: ParameterCode.CustomId, isOptional: true })
		public customId?: string;

	}

	export class Apple {
		@StringDataMember({ code: ParameterCode.AppleId })
		public appleId: string;

		@StringDataMember({ code: ParameterCode.Email })
		public email: string;

	}

	export class Google {
		@StringDataMember({ code: ParameterCode.GoogleId })
		public googleId: string;

		@StringDataMember({ code: ParameterCode.DisplayName })
		public displayName: string;

		@StringDataMember({ code: ParameterCode.Email })
		public email: string;

	}

	export class Facebook {
		@StringDataMember({ code: ParameterCode.FacebookId })
		public facebookId: string;

		@StringDataMember({ code: ParameterCode.DisplayName })
		public displayName: string;

		@StringDataMember({ code: ParameterCode.Email })
		public email: string;

	}

	export class GooglePlayGameService {
		@StringDataMember({ code: ParameterCode.PlayerId })
		public playerId: string;

		@StringDataMember({ code: ParameterCode.DisplayName })
		public displayName: string;

		@StringDataMember({ code: ParameterCode.Email })
		public email: string;

	}

	export class GameCenter {
		@StringDataMember({ code: ParameterCode.PlayerId })
		public playerId: string;

		@StringDataMember({ code: ParameterCode.DisplayName })
		public displayName: string;

		@StringDataMember({ code: ParameterCode.Email })
		public email: string;

	}

	export class ExternalItem {
		@GNHashtableDataMember({ code: ParameterCode.Device, isOptional: true })
		public device?: Device;

		@GNHashtableDataMember({ code: ParameterCode.Account, isOptional: true })
		public account?: Account;

		@GNHashtableDataMember({ code: ParameterCode.Custom, isOptional: true })
		public custom?: Custom;

		@GNHashtableDataMember({ code: ParameterCode.Apple, isOptional: true })
		public apple?: Apple;

		@GNHashtableDataMember({ code: ParameterCode.Google, isOptional: true })
		public google?: Google;

		@GNHashtableDataMember({ code: ParameterCode.Facebook, isOptional: true })
		public facebook?: Facebook;

		@GNArrayDataMember({ code: ParameterCode.GenericService, isOptional: true, elementCls: GenericService })
		public genericServices?: Array<GenericService>;

		@GNHashtableDataMember({ code: ParameterCode.GooglePlayGameService, isOptional: true })
		public googlePlayGameService?: GooglePlayGameService;

		@GNHashtableDataMember({ code: ParameterCode.GameCenter, isOptional: true })
		public gameCenter?: GameCenter;

	}

	export class AddSegmentRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
		public value: string;

	}

	export class ServerAddSegmentRequestData extends AddSegmentRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminAddSegmentRequestData extends ServerAddSegmentRequestData {
	}

	export class ChangeAccountPasswordRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.CurrentPassword, minLength: 6, maxLength: 64, mustNonNull: true })
		public currentPassword: string;

		@StringDataMember({ code: ParameterCode.Password, minLength: 6, maxLength: 64, mustNonNull: true })
		public password: string;

	}

	export class GetAvatarRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

	}

	export class ServerGetAvatarRequestData extends GetAvatarRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminGetAvatarRequestData extends ServerGetAvatarRequestData {
	}

	export class GetCountryCodeRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

	}

	export class ServerGetCountryCodeRequestData extends GetCountryCodeRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminGetCountryCodeRequestData extends ServerGetCountryCodeRequestData {
	}

	export class GetCustomDataRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@GNArrayDataMember({ code: ParameterCode.CustomDataKeys, isOptional: true, elementCls: String })
		public customDataKeys?: Array<string>;

	}

	export class ServerGetCustomDataRequestData extends GetCustomDataRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminGetCustomDataRequestData extends ServerGetCustomDataRequestData {
	}

	export class GetDisplayNameRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

	}

	export class ServerGetDisplayNameRequestData extends GetDisplayNameRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminGetDisplayNameRequestData extends ServerGetDisplayNameRequestData {
	}

	export class GetEmailRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

	}

	export class ServerGetEmailRequestData extends GetEmailRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminGetEmailRequestData extends ServerGetEmailRequestData {
	}

	export class GetExternalRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

	}

	export class ServerGetExternalRequestData extends GetExternalRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminGetExternalRequestData extends ServerGetExternalRequestData {
	}

	export class GetIpAddressCreateRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

	}

	export class ServerGetIpAddressCreateRequestData extends GetIpAddressCreateRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminGetIpAddressCreateRequestData extends ServerGetIpAddressCreateRequestData {
	}

	export class GetPlayerBanRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

	}

	export class ServerGetPlayerBanRequestData extends GetPlayerBanRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminGetPlayerBanRequestData extends ServerGetPlayerBanRequestData {
	}

	export class GetPlayerCurrencyRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@GNArrayDataMember({ code: ParameterCode.PlayerCurrencyKeys, isOptional: true, elementCls: String })
		public playerCurrencyKeys?: Array<string>;

	}

	export class ServerGetPlayerCurrencyRequestData extends GetPlayerCurrencyRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminGetPlayerCurrencyRequestData extends ServerGetPlayerCurrencyRequestData {
	}

	export class GetPlayerDataRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@GNArrayDataMember({ code: ParameterCode.PlayerDataKeys, isOptional: true, elementCls: String })
		public playerDataKeys?: Array<string>;

	}

	export class ServerGetPlayerDataRequestData extends GetPlayerDataRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminGetPlayerDataRequestData extends ServerGetPlayerDataRequestData {
	}

	export class GetPlayerInformationRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class ServerGetPlayerInformationRequestData extends GetPlayerInformationRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminGetPlayerInformationRequestData extends ServerGetPlayerInformationRequestData {
	}

	export class GetPlayerStatisticsRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@GNArrayDataMember({ code: ParameterCode.PlayerStatisticsKeys, isOptional: true, elementCls: String })
		public playerStatisticsKeys?: Array<string>;

	}

	export class ServerGetPlayerStatisticsRequestData extends GetPlayerStatisticsRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminGetPlayerStatisticsRequestData extends ServerGetPlayerStatisticsRequestData {
	}

	export class GetPlayersWithAppleRequestData {
		@GNArrayDataMember({ code: ParameterCode.AppleIds, mustNonNull: true, elementCls: String })
		public appleIds: Array<string>;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class ServerGetPlayersWithAppleRequestData extends GetPlayersWithAppleRequestData {
	}

	export class AdminGetPlayersWithAppleRequestData extends ServerGetPlayersWithAppleRequestData {
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

	export class GetPlayersWithFacebookRequestData {
		@GNArrayDataMember({ code: ParameterCode.FacebookIds, mustNonNull: true, elementCls: String })
		public facebookIds: Array<string>;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class ServerGetPlayersWithFacebookRequestData extends GetPlayersWithFacebookRequestData {
	}

	export class AdminGetPlayersWithFacebookRequestData extends ServerGetPlayersWithFacebookRequestData {
	}

	export class GetPlayersWithGenericServiceRequestData {
		@StringDataMember({ code: ParameterCode.ServiceName, minLength: 2, maxLength: 32, mustNonNull: true })
		public serviceName: string;

		@GNArrayDataMember({ code: ParameterCode.GenericIds, mustNonNull: true, elementCls: String })
		public genericIds: Array<string>;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class ServerGetPlayersWithGenericServiceRequestData extends GetPlayersWithGenericServiceRequestData {
	}

	export class AdminGetPlayersWithGenericServiceRequestData extends ServerGetPlayersWithGenericServiceRequestData {
	}

	export class GetPlayersWithGoogleRequestData {
		@GNArrayDataMember({ code: ParameterCode.GoogleIds, mustNonNull: true, elementCls: String })
		public googleIds: Array<string>;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class ServerGetPlayersWithGoogleRequestData extends GetPlayersWithGoogleRequestData {
	}

	export class AdminGetPlayersWithGoogleRequestData extends ServerGetPlayersWithGoogleRequestData {
	}

	export class GetPlayersWithGooglePlayGameServiceRequestData {
		@GNArrayDataMember({ code: ParameterCode.PlayerIds, mustNonNull: true, elementCls: String })
		public playerIds: Array<string>;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class ServerGetPlayersWithGooglePlayGameServiceRequestData extends GetPlayersWithGooglePlayGameServiceRequestData {
	}

	export class AdminGetPlayersWithGooglePlayGameServiceRequestData extends ServerGetPlayersWithGooglePlayGameServiceRequestData {
	}

	export class GetPlayersWithGameCenterRequestData {
		@GNArrayDataMember({ code: ParameterCode.PlayerIds, mustNonNull: true, elementCls: String })
		public playerIds: Array<string>;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class ServerGetPlayersWithGameCenterRequestData extends GetPlayersWithGameCenterRequestData {
	}

	export class AdminGetPlayersWithGameCenterRequestData extends ServerGetPlayersWithGameCenterRequestData {
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

	export class GetSegmentRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

	}

	export class ServerGetSegmentRequestData extends GetSegmentRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminGetSegmentRequestData extends ServerGetSegmentRequestData {
	}

	export class GetStatisticsLeaderboardAroundPlayerRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

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

	export class ServerGetStatisticsLeaderboardAroundPlayerRequestData extends GetStatisticsLeaderboardAroundPlayerRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminGetStatisticsLeaderboardAroundPlayerRequestData extends ServerGetStatisticsLeaderboardAroundPlayerRequestData {
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
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@GNArrayDataMember({ code: ParameterCode.TagKeys, elementCls: String })
		public tagKeys: Array<string>;

	}

	export class ServerGetTagRequestData extends GetTagRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminGetTagRequestData extends ServerGetTagRequestData {
	}

	export class GetTsCreateRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

	}

	export class ServerGetTsCreateRequestData extends GetTsCreateRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminGetTsCreateRequestData extends ServerGetTsCreateRequestData {
	}

	export class GetTsLastLoginRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

	}

	export class ServerGetTsLastLoginRequestData extends GetTsLastLoginRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminGetTsLastLoginRequestData extends ServerGetTsLastLoginRequestData {
	}

	export class LinkAccountRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.Username, minLength: 6, maxLength: 32, mustNonNull: true })
		public username: string;

		@StringDataMember({ code: ParameterCode.Password, minLength: 6, maxLength: 64, mustNonNull: true })
		public password: string;

		@BooleanDataMember({ code: ParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkAccountRequestData extends LinkAccountRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminLinkAccountRequestData extends ServerLinkAccountRequestData {
	}

	export class LinkAndroidDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.AndroidDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public androidDeviceId: string;

		@BooleanDataMember({ code: ParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkAndroidDeviceIdRequestData extends LinkAndroidDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminLinkAndroidDeviceIdRequestData extends ServerLinkAndroidDeviceIdRequestData {
	}

	export class LinkAppleRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.Token, minLength: 32, maxLength: 2048, mustNonNull: true })
		public token: string;

		@BooleanDataMember({ code: ParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkAppleRequestData extends LinkAppleRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminLinkAppleRequestData extends ServerLinkAppleRequestData {
	}

	export class LinkCustomDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.CustomDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public customDeviceId: string;

		@BooleanDataMember({ code: ParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkCustomDeviceIdRequestData extends LinkCustomDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminLinkCustomDeviceIdRequestData extends ServerLinkCustomDeviceIdRequestData {
	}

	export class LinkCustomIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.CustomId, minLength: 6, maxLength: 64, mustNonNull: true })
		public customId: string;

		@BooleanDataMember({ code: ParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkCustomIdRequestData extends LinkCustomIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminLinkCustomIdRequestData extends ServerLinkCustomIdRequestData {
	}

	export class LinkEditorDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.EditorDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public editorDeviceId: string;

		@BooleanDataMember({ code: ParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkEditorDeviceIdRequestData extends LinkEditorDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminLinkEditorDeviceIdRequestData extends ServerLinkEditorDeviceIdRequestData {
	}

	export class LinkFacebookRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.Token, minLength: 32, maxLength: 2048, mustNonNull: true })
		public token: string;

		@BooleanDataMember({ code: ParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkFacebookRequestData extends LinkFacebookRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminLinkFacebookRequestData extends ServerLinkFacebookRequestData {
	}

	export class LinkGenericServiceRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.ServiceName, minLength: 6, maxLength: 32, mustNonNull: true })
		public serviceName: string;

		@GNHashtableDataMember({ code: ParameterCode.ServiceData, mustNonNull: true })
		public serviceData: GNHashtable;

		@BooleanDataMember({ code: ParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkGenericServiceRequestData extends LinkGenericServiceRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminLinkGenericServiceRequestData extends ServerLinkGenericServiceRequestData {
	}

	export class LinkGoogleRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.Token, minLength: 32, maxLength: 2048, mustNonNull: true })
		public token: string;

		@NumberDataMember({ code: ParameterCode.Type, minValue: 1, maxValue: 2 })
		public type: number;

		@BooleanDataMember({ code: ParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkGoogleRequestData extends LinkGoogleRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminLinkGoogleRequestData extends ServerLinkGoogleRequestData {
	}

	export class LinkGooglePlayGameServiceRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.Token, minLength: 32, maxLength: 2048, mustNonNull: true })
		public token: string;

		@BooleanDataMember({ code: ParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkGooglePlayGameServiceRequestData extends LinkGooglePlayGameServiceRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminLinkGooglePlayGameServiceRequestData extends ServerLinkGooglePlayGameServiceRequestData {
	}

	export class LinkGameCenterRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.PlayerId, minLength: 2, maxLength: 64, mustNonNull: true })
		public playerId: string;

		@StringDataMember({ code: ParameterCode.Name, minLength: 2, maxLength: 128, mustNonNull: true })
		public name: string;

		@StringDataMember({ code: ParameterCode.PublicKeyUrl, minLength: 2, maxLength: 2048, mustNonNull: true })
		public publicKeyUrl: string;

		@StringDataMember({ code: ParameterCode.Signature, minLength: 2, maxLength: 2048, mustNonNull: true })
		public signature: string;

		@StringDataMember({ code: ParameterCode.Salt, minLength: 2, maxLength: 256, mustNonNull: true })
		public salt: string;

		@NumberDataMember({ code: ParameterCode.Timestamp })
		public timestamp: number;

		@BooleanDataMember({ code: ParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkGameCenterRequestData extends LinkGameCenterRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminLinkGameCenterRequestData extends ServerLinkGameCenterRequestData {
	}

	export class LinkiOSDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.iOSDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public iOSDeviceId: string;

		@BooleanDataMember({ code: ParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkiOSDeviceIdRequestData extends LinkiOSDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminLinkiOSDeviceIdRequestData extends ServerLinkiOSDeviceIdRequestData {
	}

	export class LinkLinuxDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.LinuxDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public linuxDeviceId: string;

		@BooleanDataMember({ code: ParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkLinuxDeviceIdRequestData extends LinkLinuxDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminLinkLinuxDeviceIdRequestData extends ServerLinkLinuxDeviceIdRequestData {
	}

	export class LinkMacOSDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.MacOSDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public macOSDeviceId: string;

		@BooleanDataMember({ code: ParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkMacOSDeviceIdRequestData extends LinkMacOSDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminLinkMacOSDeviceIdRequestData extends ServerLinkMacOSDeviceIdRequestData {
	}

	export class LinkWindowsDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.WindowsDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public windowsDeviceId: string;

		@BooleanDataMember({ code: ParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkWindowsDeviceIdRequestData extends LinkWindowsDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminLinkWindowsDeviceIdRequestData extends ServerLinkWindowsDeviceIdRequestData {
	}

	export class LinkWindowsPhoneDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.WindowsPhoneDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public windowsPhoneDeviceId: string;

		@BooleanDataMember({ code: ParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkWindowsPhoneDeviceIdRequestData extends LinkWindowsPhoneDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminLinkWindowsPhoneDeviceIdRequestData extends ServerLinkWindowsPhoneDeviceIdRequestData {
	}

	export class RemoveSegmentRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
		public value: string;

	}

	export class ServerRemoveSegmentRequestData extends RemoveSegmentRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminRemoveSegmentRequestData extends ServerRemoveSegmentRequestData {
	}

	export class RemoveTagRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

	}

	export class ServerRemoveTagRequestData extends RemoveTagRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminRemoveTagRequestData extends ServerRemoveTagRequestData {
	}

	export class ResetAccountPasswordRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.Password, minLength: 6, maxLength: 64, mustNonNull: true })
		public password: string;

	}

	export class ServerResetAccountPasswordRequestData extends ResetAccountPasswordRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminResetAccountPasswordRequestData extends ServerResetAccountPasswordRequestData {
	}

	export class SetAvatarRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@NumberDataMember({ code: ParameterCode.Type, mustInt: true })
		public type: number;

		@StringDataMember({ code: ParameterCode.Value, minLength: 1, maxLength: 128, mustNonNull: true })
		public value: string;

	}

	export class ServerSetAvatarRequestData extends SetAvatarRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminSetAvatarRequestData extends ServerSetAvatarRequestData {
	}

	export class SetCountryCodeRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.CountryCode, minLength: 2, maxLength: 32 })
		public countryCode: string;

	}

	export class ServerSetCountryCodeRequestData extends SetCountryCodeRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminSetCountryCodeRequestData extends ServerSetCountryCodeRequestData {
	}

	export class SetCustomDataRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@GNArrayDataMember({ code: ParameterCode.CustomDatas, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: CustomDataParam })
		public customDatas: Array<CustomDataParam>;

	}

	export class ServerSetCustomDataRequestData extends SetCustomDataRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminSetCustomDataRequestData extends ServerSetCustomDataRequestData {
	}

	export class SetDisplayNameRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.DisplayName, minLength: 5, maxLength: 32, mustNonNull: true })
		public displayName: string;

		@BooleanDataMember({ code: ParameterCode.UniqueDisplayName, defaultValue: false, isOptional: true })
		public uniqueDisplayName?: boolean;

	}

	export class ServerSetDisplayNameRequestData extends SetDisplayNameRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminSetDisplayNameRequestData extends ServerSetDisplayNameRequestData {
	}

	export class SetEmailRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.Email, minLength: 5, maxLength: 128, mustNonNull: true })
		public email: string;

	}

	export class ServerSetEmailRequestData extends SetEmailRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminSetEmailRequestData extends ServerSetEmailRequestData {
	}

	export class SetPlayerBanRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@NumberDataMember({ code: ParameterCode.TsExpire })
		public tsExpire: number;

		@StringDataMember({ code: ParameterCode.Reason })
		public reason: string;

	}

	export class ServerSetPlayerBanRequestData extends SetPlayerBanRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminSetPlayerBanRequestData extends ServerSetPlayerBanRequestData {
	}

	export class ChangePlayerCurrencyRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@GNArrayDataMember({ code: ParameterCode.PlayerCurrencies, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: PlayerCurrencyParam })
		public playerCurrencies: Array<PlayerCurrencyParam>;

		@StringDataMember({ code: ParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
		public log?: string;

	}

	export class ServerChangePlayerCurrencyRequestData extends ChangePlayerCurrencyRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminChangePlayerCurrencyRequestData extends ServerChangePlayerCurrencyRequestData {
	}

	export class SetPlayerDataRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@GNArrayDataMember({ code: ParameterCode.PlayerDatas, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: PlayerDataParam })
		public playerDatas: Array<PlayerDataParam>;

	}

	export class ServerSetPlayerDataRequestData extends SetPlayerDataRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminSetPlayerDataRequestData extends ServerSetPlayerDataRequestData {
	}

	export class ChangePlayerStatisticsRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@GNArrayDataMember({ code: ParameterCode.PlayerStatistics, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: PlayerStatisticsParam })
		public playerStatistics: Array<PlayerStatisticsParam>;

		@StringDataMember({ code: ParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
		public log?: string;

	}

	export class ServerChangePlayerStatisticsRequestData extends ChangePlayerStatisticsRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminChangePlayerStatisticsRequestData extends ServerChangePlayerStatisticsRequestData {
	}

	export class SetTagRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@StringDataMember({ code: ParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
		public value: string;

	}

	export class ServerSetTagRequestData extends SetTagRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminSetTagRequestData extends ServerSetTagRequestData {
	}

	export class GetCurrencyLogRequestData {
		@GNArrayDataMember({ code: ParameterCode.Keys, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: String, isOptional: true })
		public keys?: Array<string>;

		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true, isOptional: true })
		public userId?: string;

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

		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true, isOptional: true })
		public userId?: string;

		@NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

		@StringDataMember({ code: ParameterCode.Token, minLength: 24, maxLength: 24, mustNonNull: true, isOptional: true })
		public token?: string;

	}

	export class ServerGetStatisticsLogRequestData extends GetStatisticsLogRequestData {
	}

	export class AdminGetStatisticsLogRequestData extends ServerGetStatisticsLogRequestData {
	}

	export class SetTsLastLoginRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

	}

	export class ServerSetTsLastLoginRequestData extends SetTsLastLoginRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminSetTsLastLoginRequestData extends ServerSetTsLastLoginRequestData {
	}

	export class UnlinkAccountRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.Username, minLength: 6, maxLength: 32, mustNonNull: true })
		public username: string;

	}

	export class ServerUnlinkAccountRequestData extends UnlinkAccountRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminUnlinkAccountRequestData extends ServerUnlinkAccountRequestData {
	}

	export class UnlinkAndroidDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.AndroidDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public androidDeviceId: string;

	}

	export class ServerUnlinkAndroidDeviceIdRequestData extends UnlinkAndroidDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminUnlinkAndroidDeviceIdRequestData extends ServerUnlinkAndroidDeviceIdRequestData {
	}

	export class UnlinkAppleRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.AppleId, minLength: 6, maxLength: 64, mustNonNull: true })
		public appleId: string;

	}

	export class ServerUnlinkAppleRequestData extends UnlinkAppleRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminUnlinkAppleRequestData extends ServerUnlinkAppleRequestData {
	}

	export class UnlinkCustomDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.CustomDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public customDeviceId: string;

	}

	export class ServerUnlinkCustomDeviceIdRequestData extends UnlinkCustomDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminUnlinkCustomDeviceIdRequestData extends ServerUnlinkCustomDeviceIdRequestData {
	}

	export class UnlinkCustomIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.CustomId, minLength: 6, maxLength: 64, mustNonNull: true })
		public customId: string;

	}

	export class ServerUnlinkCustomIdRequestData extends UnlinkCustomIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminUnlinkCustomIdRequestData extends ServerUnlinkCustomIdRequestData {
	}

	export class UnlinkEditorDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.EditorDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public editorDeviceId: string;

	}

	export class ServerUnlinkEditorDeviceIdRequestData extends UnlinkEditorDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminUnlinkEditorDeviceIdRequestData extends ServerUnlinkEditorDeviceIdRequestData {
	}

	export class UnlinkFacebookRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.FacebookId, minLength: 6, maxLength: 64, mustNonNull: true })
		public facebookId: string;

	}

	export class ServerUnlinkFacebookRequestData extends UnlinkFacebookRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminUnlinkFacebookRequestData extends ServerUnlinkFacebookRequestData {
	}

	export class UnlinkGenericServiceRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.ServiceName, minLength: 6, maxLength: 32, mustNonNull: true })
		public serviceName: string;

		@StringDataMember({ code: ParameterCode.ServiceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public serviceId: string;

	}

	export class ServerUnlinkGenericServiceRequestData extends UnlinkGenericServiceRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminUnlinkGenericServiceRequestData extends ServerUnlinkGenericServiceRequestData {
	}

	export class UnlinkGoogleRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.GoogleId, minLength: 6, maxLength: 32, mustNonNull: true })
		public googleId: string;

	}

	export class ServerUnlinkGoogleRequestData extends UnlinkGoogleRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminUnlinkGoogleRequestData extends ServerUnlinkGoogleRequestData {
	}

	export class UnlinkGooglePlayGameServiceRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.PlayerId, minLength: 6, maxLength: 64, mustNonNull: true })
		public playerId: string;

	}

	export class ServerUnlinkGooglePlayGameServiceRequestData extends UnlinkGooglePlayGameServiceRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminUnlinkGooglePlayGameServiceRequestData extends ServerUnlinkGooglePlayGameServiceRequestData {
	}

	export class UnlinkGameCenterRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.PlayerId, minLength: 6, maxLength: 64, mustNonNull: true })
		public playerId: string;

	}

	export class ServerUnlinkGameCenterRequestData extends UnlinkGameCenterRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminUnlinkGameCenterRequestData extends ServerUnlinkGameCenterRequestData {
	}

	export class UnlinkiOSDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.iOSDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public iOSDeviceId: string;

	}

	export class ServerUnlinkiOSDeviceIdRequestData extends UnlinkiOSDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminUnlinkiOSDeviceIdRequestData extends ServerUnlinkiOSDeviceIdRequestData {
	}

	export class UnlinkLinuxDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.LinuxDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public linuxDeviceId: string;

	}

	export class ServerUnlinkLinuxDeviceIdRequestData extends UnlinkLinuxDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminUnlinkLinuxDeviceIdRequestData extends ServerUnlinkLinuxDeviceIdRequestData {
	}

	export class UnlinkMacOSDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.MacOSDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public macOSDeviceId: string;

	}

	export class ServerUnlinkMacOSDeviceIdRequestData extends UnlinkMacOSDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminUnlinkMacOSDeviceIdRequestData extends ServerUnlinkMacOSDeviceIdRequestData {
	}

	export class UnlinkWindowsDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.WindowsDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public windowsDeviceId: string;

	}

	export class ServerUnlinkWindowsDeviceIdRequestData extends UnlinkWindowsDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminUnlinkWindowsDeviceIdRequestData extends ServerUnlinkWindowsDeviceIdRequestData {
	}

	export class UnlinkWindowsPhoneDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.WindowsPhoneDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public windowsPhoneDeviceId: string;

	}

	export class ServerUnlinkWindowsPhoneDeviceIdRequestData extends UnlinkWindowsPhoneDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminUnlinkWindowsPhoneDeviceIdRequestData extends ServerUnlinkWindowsPhoneDeviceIdRequestData {
	}

	export class SendSocketOperationEventRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@NumberDataMember({ code: ParameterCode.EventCode, minValue: 1000, mustInt: true })
		public eventCode: number;

		@GNHashtableDataMember({ code: ParameterCode.EventParameters, mustNonNull: true, minLength: 0, maxLength: 128, isOptional: true })
		public eventParameters?: GNHashtable;

	}

	export class ServerSendSocketOperationEventRequestData extends SendSocketOperationEventRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminSendSocketOperationEventRequestData extends ServerSendSocketOperationEventRequestData {
	}

	export class SendEmailRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.Subject, minLength: 2, maxLength: 256, mustNonNull: true })
		public subject: string;

		@StringDataMember({ code: ParameterCode.ContentHtml, minLength: 2, maxLength: 8192, mustNonNull: true })
		public contentHtml: string;

	}

	export class ServerSendEmailRequestData extends SendEmailRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminSendEmailRequestData extends ServerSendEmailRequestData {
	}

	export class AddPushNotificationRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.Token, minLength: 10, maxLength: 256, mustNonNull: true })
		public token: string;

		@NumberDataMember({ code: ParameterCode.PlatformType, minValue: 1, mustInt: true })
		public platformType: number;

	}

	export class ServerAddPushNotificationRequestData extends AddPushNotificationRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminAddPushNotificationRequestData extends ServerAddPushNotificationRequestData {
	}

	export class GetPushNotificationRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

	}

	export class ServerGetPushNotificationRequestData extends GetPushNotificationRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminGetPushNotificationRequestData extends ServerGetPushNotificationRequestData {
	}

	export class RemovePushNotificationRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.PushId, minLength: 8, maxLength: 8, mustNonNull: true })
		public pushId: string;

	}

	export class ServerRemovePushNotificationRequestData extends RemovePushNotificationRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminRemovePushNotificationRequestData extends ServerRemovePushNotificationRequestData {
	}

	export class SendPushNotificationRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: ParameterCode.Title })
		public title: string;

		@StringDataMember({ code: ParameterCode.Body })
		public body: string;

		@NumberDataMember({ code: ParameterCode.Badge, mustInt: true, isOptional: true, defaultValue: null })
		public badge?: number;

		@StringDataMember({ code: ParameterCode.Sound, isOptional: true })
		public sound?: string;

		@StringDataMember({ code: ParameterCode.Icon, isOptional: true })
		public icon?: string;

		@GNHashtableDataMember({ code: ParameterCode.Data, isOptional: true })
		public data?: GNHashtable;

	}

	export class ServerSendPushNotificationRequestData extends SendPushNotificationRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public declare userId: string;

	}

	export class AdminSendPushNotificationRequestData extends ServerSendPushNotificationRequestData {
	}

	export class PushNotificationItem {
		@StringDataMember({ code: ParameterCode.Token })
		public token: string;

		@StringDataMember({ code: ParameterCode.PushId })
		public pushId: string;

		@NumberDataMember({ code: ParameterCode.PlatformType })
		public platformType: number;

	}

	export class InfoResponseParameters {
		@GNHashtableDataMember({ code: ParameterCode.External, isOptional: true })
		public external?: ExternalItem;

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

		@NumberDataMember({ code: ParameterCode.TsLastLogin, isOptional: true })
		public tsLastLogin?: number;

		@StringDataMember({ code: ParameterCode.IpAddressCreate, isOptional: true })
		public ipAddressCreate?: string;

		@StringDataMember({ code: ParameterCode.CountryCode, isOptional: true })
		public countryCode?: string;

		@StringDataMember({ code: ParameterCode.Email, isOptional: true })
		public email?: string;

		@GNArrayDataMember({ code: ParameterCode.PushNotifications, isOptional: true, elementCls: MasterPlayerModels.PushNotificationItem })
		public pushNotifications?: Array<MasterPlayerModels.PushNotificationItem>;

	}

	export class MasterPlayerResponseData {
		@GNHashtableDataMember({ code: ParameterCode.InfoResponseParameters })
		public infoResponseParameters: InfoResponseParameters;

	}

	export class GenericServiceMasterPlayerResponseData extends MasterPlayerResponseData {
		@StringDataMember({ code: ParameterCode.ErrorMessage, isOptional: true })
		public errorMessage?: string;

	}

	export class MasterPlayerWithUserIdResponseData extends MasterPlayerResponseData {
		@StringDataMember({ code: ParameterCode.UserId })
		public userId: string;

	}

	export class MasterPlayerWithAppleIdResponseData extends MasterPlayerWithUserIdResponseData {
		@StringDataMember({ code: ParameterCode.AppleId })
		public appleId: string;

	}

	export class GetPlayersWithAppleResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: MasterPlayerWithAppleIdResponseData })
		public results: Array<MasterPlayerWithAppleIdResponseData>;

	}

	export class MasterPlayersWithUserIdResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: MasterPlayerWithUserIdResponseData })
		public results: Array<MasterPlayerWithUserIdResponseData>;

	}

	export class MasterPlayerWithFacebookIdResponseData extends MasterPlayerWithUserIdResponseData {
		@StringDataMember({ code: ParameterCode.FacebookId })
		public facebookId: string;

	}

	export class GetPlayersWithFacebookResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: MasterPlayerWithFacebookIdResponseData })
		public results: Array<MasterPlayerWithFacebookIdResponseData>;

	}

	export class MasterPlayerWithGenericServiceIdResponseData extends MasterPlayerWithUserIdResponseData {
		@StringDataMember({ code: ParameterCode.ServiceId })
		public serviceId: string;

	}

	export class GetPlayersWithGenericServiceResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: MasterPlayerWithGenericServiceIdResponseData })
		public results: Array<MasterPlayerWithGenericServiceIdResponseData>;

	}

	export class MasterPlayerWithGoogleIdResponseData extends MasterPlayerWithUserIdResponseData {
		@StringDataMember({ code: ParameterCode.GoogleId })
		public googleId: string;

	}

	export class GetPlayersWithGoogleResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: MasterPlayerWithGoogleIdResponseData })
		public results: Array<MasterPlayerWithGoogleIdResponseData>;

	}

	export class MasterPlayerWithPlayerIdResponseData extends MasterPlayerWithUserIdResponseData {
		@StringDataMember({ code: ParameterCode.PlayerId })
		public playerId: string;

	}

	export class GetPlayersWithGooglePlayGameServiceResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: MasterPlayerWithPlayerIdResponseData })
		public results: Array<MasterPlayerWithPlayerIdResponseData>;

	}

	export class GetPlayersWithGameCenterResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: MasterPlayerWithPlayerIdResponseData })
		public results: Array<MasterPlayerWithPlayerIdResponseData>;

	}

	export class MasterPlayerLeaderboardResponseData extends MasterPlayerWithUserIdResponseData {
		@NumberDataMember({ code: ParameterCode.Position })
		public position: number;

		@NumberDataMember({ code: ParameterCode.BackupValue, isOptional: true })
		public backupValue?: number;

	}

	export class MasterPlayerLogResponseData {
		@StringDataMember({ code: ParameterCode.UserId })
		public userId: string;

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
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: MasterPlayerLeaderboardResponseData })
		public results: Array<MasterPlayerLeaderboardResponseData>;

		@NumberDataMember({ code: ParameterCode.TsCreate, isOptional: true })
		public tsCreate: number;

	}

	export class GetCurrencyLeaderboardResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: MasterPlayerLeaderboardResponseData })
		public results: Array<MasterPlayerLeaderboardResponseData>;

	}

	export class GetCreateLeaderboardResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: MasterPlayerLeaderboardResponseData })
		public results: Array<MasterPlayerLeaderboardResponseData>;

	}

	export class GetLastLoginLeaderboardResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: MasterPlayerLeaderboardResponseData })
		public results: Array<MasterPlayerLeaderboardResponseData>;

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

	}

	export class ServerGetCurrencyLeaderboardRequestData extends GetCurrencyLeaderboardRequestData {
	}

	export class AdminGetCurrencyLeaderboardRequestData extends ServerGetCurrencyLeaderboardRequestData {
	}

	export class GetStatisticsLogResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: MasterPlayerLogResponseData })
		public results: Array<MasterPlayerLogResponseData>;

		@StringDataMember({ code: ParameterCode.Token, isOptional: true })
		public token?: string;

	}

	export class GetCurrencyLogResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: MasterPlayerLogResponseData })
		public results: Array<MasterPlayerLogResponseData>;

		@StringDataMember({ code: ParameterCode.Token, isOptional: true })
		public token?: string;

	}

	export class AddPushNotificationResponseData {
		@StringDataMember({ code: ParameterCode.PushId })
		public pushId: string;

	}

	export class SendPushNotificationResponseData {
		@StringDataMember({ code: ParameterCode.Message })
		public message: string;

	}

	export class EmptyResponseData {
	}

}
