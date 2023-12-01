import { GNHashtable } from "../../common/GNData";
import { GNParameterCode } from "./../../constant/parameterCode/GNParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";
import { GenericModels } from "./GenericModels";

export namespace MasterPlayerModels {
	export class CustomDataParam {
		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@DataMember({ code: GNParameterCode.Value })
		public value: any;

	}

	export class InfoRequestParam {
		@BooleanDataMember({ code: GNParameterCode.External, isOptional: true, defaultValue: false })
		public external?: boolean;

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

		@BooleanDataMember({ code: GNParameterCode.Email, isOptional: true, defaultValue: false })
		public email?: boolean;

		@BooleanDataMember({ code: GNParameterCode.TsLastLogin, isOptional: true, defaultValue: false })
		public tsLastLogin?: boolean;

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

	export class GenericService {
		@StringDataMember({ code: GNParameterCode.ServiceName })
		public serviceName: string;

		@StringDataMember({ code: GNParameterCode.ServiceId })
		public serviceId: string;

	}

	export class Device {
		@StringDataMember({ code: GNParameterCode.CustomDeviceId, isOptional: true })
		public customDeviceId?: string;

		@StringDataMember({ code: GNParameterCode.AndroidDeviceId, isOptional: true })
		public androidDeviceId?: string;

		@StringDataMember({ code: GNParameterCode.iOSDeviceId, isOptional: true })
		public iOSDeviceId?: string;

		@StringDataMember({ code: GNParameterCode.WindowsPhoneDeviceId, isOptional: true })
		public windowsPhoneDeviceId?: string;

		@StringDataMember({ code: GNParameterCode.WindowsDeviceId, isOptional: true })
		public windowsDeviceId?: string;

		@StringDataMember({ code: GNParameterCode.LinuxDeviceId, isOptional: true })
		public linuxDeviceId?: string;

		@StringDataMember({ code: GNParameterCode.MacOSDeviceId, isOptional: true })
		public macOSDeviceId?: string;

		@StringDataMember({ code: GNParameterCode.EditorDeviceId, isOptional: true })
		public editorDeviceId?: string;

	}

	export class Account {
		@StringDataMember({ code: GNParameterCode.Username, isOptional: true })
		public username?: string;

	}

	export class Custom {
		@StringDataMember({ code: GNParameterCode.CustomId, isOptional: true })
		public customId?: string;

	}

	export class Apple {
		@StringDataMember({ code: GNParameterCode.AppleId })
		public appleId: string;

		@StringDataMember({ code: GNParameterCode.Email })
		public email: string;

	}

	export class Google {
		@StringDataMember({ code: GNParameterCode.GoogleId })
		public googleId: string;

		@StringDataMember({ code: GNParameterCode.DisplayName })
		public displayName: string;

		@StringDataMember({ code: GNParameterCode.Email })
		public email: string;

	}

	export class Facebook {
		@StringDataMember({ code: GNParameterCode.FacebookId })
		public facebookId: string;

		@StringDataMember({ code: GNParameterCode.DisplayName })
		public displayName: string;

		@StringDataMember({ code: GNParameterCode.Email })
		public email: string;

	}

	export class GooglePlayGameService {
		@StringDataMember({ code: GNParameterCode.PlayerId })
		public playerId: string;

		@StringDataMember({ code: GNParameterCode.DisplayName })
		public displayName: string;

		@StringDataMember({ code: GNParameterCode.Email })
		public email: string;

	}

	export class GameCenter {
		@StringDataMember({ code: GNParameterCode.PlayerId })
		public playerId: string;

		@StringDataMember({ code: GNParameterCode.DisplayName })
		public displayName: string;

		@StringDataMember({ code: GNParameterCode.Email })
		public email: string;

	}

	export class ExternalItem {
		@GNHashtableDataMember({ code: GNParameterCode.Device, isOptional: true })
		public device?: Device;

		@GNHashtableDataMember({ code: GNParameterCode.Account, isOptional: true })
		public account?: Account;

		@GNHashtableDataMember({ code: GNParameterCode.Custom, isOptional: true })
		public custom?: Custom;

		@GNHashtableDataMember({ code: GNParameterCode.Apple, isOptional: true })
		public apple?: Apple;

		@GNHashtableDataMember({ code: GNParameterCode.Google, isOptional: true })
		public google?: Google;

		@GNHashtableDataMember({ code: GNParameterCode.Facebook, isOptional: true })
		public facebook?: Facebook;

		@GNArrayDataMember({ code: GNParameterCode.GenericService, isOptional: true, elementCls: GenericService })
		public genericServices?: Array<GenericService>;

		@GNHashtableDataMember({ code: GNParameterCode.GooglePlayGameService, isOptional: true })
		public googlePlayGameService?: GooglePlayGameService;

		@GNHashtableDataMember({ code: GNParameterCode.GameCenter, isOptional: true })
		public gameCenter?: GameCenter;

	}

	export class AddSegmentRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
		public value: string;

	}

	export class ServerAddSegmentRequestData extends AddSegmentRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminAddSegmentRequestData extends ServerAddSegmentRequestData {
	}

	export class ChangeAccountPasswordRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.CurrentPassword, minLength: 6, maxLength: 64, mustNonNull: true })
		public currentPassword: string;

		@StringDataMember({ code: GNParameterCode.Password, minLength: 6, maxLength: 64, mustNonNull: true })
		public password: string;

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

	export class GetEmailRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

	}

	export class ServerGetEmailRequestData extends GetEmailRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminGetEmailRequestData extends ServerGetEmailRequestData {
	}

	export class GetExternalRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

	}

	export class ServerGetExternalRequestData extends GetExternalRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminGetExternalRequestData extends ServerGetExternalRequestData {
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

	export class GetPlayerInformationRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class ServerGetPlayerInformationRequestData extends GetPlayerInformationRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminGetPlayerInformationRequestData extends ServerGetPlayerInformationRequestData {
	}

	export class GetPlayerStatisticsRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@GNArrayDataMember({ code: GNParameterCode.PlayerStatisticsKeys, isOptional: true, elementCls: String })
		public playerStatisticsKeys?: Array<string>;

	}

	export class ServerGetPlayerStatisticsRequestData extends GetPlayerStatisticsRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminGetPlayerStatisticsRequestData extends ServerGetPlayerStatisticsRequestData {
	}

	export class GetPlayersWithAppleRequestData {
		@GNArrayDataMember({ code: GNParameterCode.AppleIds, mustNonNull: true, elementCls: String })
		public appleIds: Array<string>;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class ServerGetPlayersWithAppleRequestData extends GetPlayersWithAppleRequestData {
	}

	export class AdminGetPlayersWithAppleRequestData extends ServerGetPlayersWithAppleRequestData {
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

	export class GetPlayersWithFacebookRequestData {
		@GNArrayDataMember({ code: GNParameterCode.FacebookIds, mustNonNull: true, elementCls: String })
		public facebookIds: Array<string>;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class ServerGetPlayersWithFacebookRequestData extends GetPlayersWithFacebookRequestData {
	}

	export class AdminGetPlayersWithFacebookRequestData extends ServerGetPlayersWithFacebookRequestData {
	}

	export class GetPlayersWithGenericServiceRequestData {
		@StringDataMember({ code: GNParameterCode.ServiceName, minLength: 2, maxLength: 32, mustNonNull: true })
		public serviceName: string;

		@GNArrayDataMember({ code: GNParameterCode.GenericIds, mustNonNull: true, elementCls: String })
		public genericIds: Array<string>;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class ServerGetPlayersWithGenericServiceRequestData extends GetPlayersWithGenericServiceRequestData {
	}

	export class AdminGetPlayersWithGenericServiceRequestData extends ServerGetPlayersWithGenericServiceRequestData {
	}

	export class GetPlayersWithGoogleRequestData {
		@GNArrayDataMember({ code: GNParameterCode.GoogleIds, mustNonNull: true, elementCls: String })
		public googleIds: Array<string>;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class ServerGetPlayersWithGoogleRequestData extends GetPlayersWithGoogleRequestData {
	}

	export class AdminGetPlayersWithGoogleRequestData extends ServerGetPlayersWithGoogleRequestData {
	}

	export class GetPlayersWithGooglePlayGameServiceRequestData {
		@GNArrayDataMember({ code: GNParameterCode.PlayerIds, mustNonNull: true, elementCls: String })
		public playerIds: Array<string>;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class ServerGetPlayersWithGooglePlayGameServiceRequestData extends GetPlayersWithGooglePlayGameServiceRequestData {
	}

	export class AdminGetPlayersWithGooglePlayGameServiceRequestData extends ServerGetPlayersWithGooglePlayGameServiceRequestData {
	}

	export class GetPlayersWithGameCenterRequestData {
		@GNArrayDataMember({ code: GNParameterCode.PlayerIds, mustNonNull: true, elementCls: String })
		public playerIds: Array<string>;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class ServerGetPlayersWithGameCenterRequestData extends GetPlayersWithGameCenterRequestData {
	}

	export class AdminGetPlayersWithGameCenterRequestData extends ServerGetPlayersWithGameCenterRequestData {
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

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 5, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

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

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 5, maxValue: 100, mustInt: true, isOptional: true })
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

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 5, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

		@BooleanDataMember({ code: GNParameterCode.LoadFromCache, defaultValue: true, isOptional: true })
		public loadFromCache?: boolean;

	}

	export class ServerGetCreateLeaderboardRequestData extends GetCreateLeaderboardRequestData {
	}

	export class AdminGetCreateLeaderboardRequestData extends ServerGetCreateLeaderboardRequestData {
	}

	export class GetLastLoginLeaderboardRequestData {
		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: GNParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 5, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

		@BooleanDataMember({ code: GNParameterCode.LoadFromCache, defaultValue: true, isOptional: true })
		public loadFromCache?: boolean;

	}

	export class ServerGetLastLoginLeaderboardRequestData extends GetLastLoginLeaderboardRequestData {
	}

	export class AdminGetLastLoginLeaderboardRequestData extends ServerGetLastLoginLeaderboardRequestData {
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

	export class LinkAccountRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.Username, minLength: 6, maxLength: 32, mustNonNull: true })
		public username: string;

		@StringDataMember({ code: GNParameterCode.Username, minLength: 6, maxLength: 64, mustNonNull: true })
		public password: string;

		@BooleanDataMember({ code: GNParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkAccountRequestData extends LinkAccountRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminLinkAccountRequestData extends ServerLinkAccountRequestData {
	}

	export class LinkAndroidDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.AndroidDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public androidDeviceId: string;

		@BooleanDataMember({ code: GNParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkAndroidDeviceIdRequestData extends LinkAndroidDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminLinkAndroidDeviceIdRequestData extends ServerLinkAndroidDeviceIdRequestData {
	}

	export class LinkAppleRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.Token, minLength: 64, maxLength: 512, mustNonNull: true })
		public token: string;

		@BooleanDataMember({ code: GNParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkAppleRequestData extends LinkAppleRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminLinkAppleRequestData extends ServerLinkAppleRequestData {
	}

	export class LinkCustomDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.CustomDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public customDeviceId: string;

		@BooleanDataMember({ code: GNParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkCustomDeviceIdRequestData extends LinkCustomDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminLinkCustomDeviceIdRequestData extends ServerLinkCustomDeviceIdRequestData {
	}

	export class LinkCustomIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.CustomId, minLength: 6, maxLength: 64, mustNonNull: true })
		public customId: string;

		@BooleanDataMember({ code: GNParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkCustomIdRequestData extends LinkCustomIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminLinkCustomIdRequestData extends ServerLinkCustomIdRequestData {
	}

	export class LinkEditorDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.EditorDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public editorDeviceId: string;

		@BooleanDataMember({ code: GNParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkEditorDeviceIdRequestData extends LinkEditorDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminLinkEditorDeviceIdRequestData extends ServerLinkEditorDeviceIdRequestData {
	}

	export class LinkFacebookRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.Token, minLength: 64, maxLength: 512, mustNonNull: true })
		public token: string;

		@BooleanDataMember({ code: GNParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkFacebookRequestData extends LinkFacebookRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminLinkFacebookRequestData extends ServerLinkFacebookRequestData {
	}

	export class LinkGenericServiceRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.ServiceName, minLength: 6, maxLength: 32, mustNonNull: true })
		public serviceName: string;

		@GNHashtableDataMember({ code: GNParameterCode.ServiceData, mustNonNull: true })
		public serviceData: GNHashtable;

		@BooleanDataMember({ code: GNParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkGenericServiceRequestData extends LinkGenericServiceRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminLinkGenericServiceRequestData extends ServerLinkGenericServiceRequestData {
	}

	export class LinkGoogleRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.Token, maxLength: 512, minLength: 32, mustNonNull: true })
		public token: string;

		@NumberDataMember({ code: GNParameterCode.Type, minValue: 1, maxValue: 2 })
		public type: number;

		@BooleanDataMember({ code: GNParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkGoogleRequestData extends LinkGoogleRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminLinkGoogleRequestData extends ServerLinkGoogleRequestData {
	}

	export class LinkGooglePlayGameServiceRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.Token, minLength: 20, maxLength: 512, mustNonNull: true })
		public token: string;

		@BooleanDataMember({ code: GNParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkGooglePlayGameServiceRequestData extends LinkGooglePlayGameServiceRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminLinkGooglePlayGameServiceRequestData extends ServerLinkGooglePlayGameServiceRequestData {
	}

	export class LinkGameCenterRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.PlayerId, minLength: 2, maxLength: 64, mustNonNull: true })
		public playerId: string;

		@StringDataMember({ code: GNParameterCode.Name, minLength: 2, maxLength: 64, mustNonNull: true })
		public name: string;

		@StringDataMember({ code: GNParameterCode.PublicKeyUrl, minLength: 2, maxLength: 256, mustNonNull: true })
		public publicKeyUrl: string;

		@StringDataMember({ code: GNParameterCode.Signature, minLength: 2, maxLength: 512, mustNonNull: true })
		public signature: string;

		@StringDataMember({ code: GNParameterCode.Salt, minLength: 2, maxLength: 128, mustNonNull: true })
		public salt: string;

		@NumberDataMember({ code: GNParameterCode.Timestamp })
		public timestamp: number;

		@BooleanDataMember({ code: GNParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkGameCenterRequestData extends LinkGameCenterRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminLinkGameCenterRequestData extends ServerLinkGameCenterRequestData {
	}

	export class LinkiOSDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.iOSDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public iOSDeviceId: string;

		@BooleanDataMember({ code: GNParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkiOSDeviceIdRequestData extends LinkiOSDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminLinkiOSDeviceIdRequestData extends ServerLinkiOSDeviceIdRequestData {
	}

	export class LinkLinuxDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.LinuxDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public linuxDeviceId: string;

		@BooleanDataMember({ code: GNParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkLinuxDeviceIdRequestData extends LinkLinuxDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminLinkLinuxDeviceIdRequestData extends ServerLinkLinuxDeviceIdRequestData {
	}

	export class LinkMacOSDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.MacOSDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public macOSDeviceId: string;

		@BooleanDataMember({ code: GNParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkMacOSDeviceIdRequestData extends LinkMacOSDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminLinkMacOSDeviceIdRequestData extends ServerLinkMacOSDeviceIdRequestData {
	}

	export class LinkWindowsDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.WindowsDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public windowsDeviceId: string;

		@BooleanDataMember({ code: GNParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkWindowsDeviceIdRequestData extends LinkWindowsDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminLinkWindowsDeviceIdRequestData extends ServerLinkWindowsDeviceIdRequestData {
	}

	export class LinkWindowsPhoneDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.WindowsPhoneDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public windowsPhoneDeviceId: string;

		@BooleanDataMember({ code: GNParameterCode.ForceLink, isOptional: true, defaultValue: false })
		public forceLink?: boolean;

	}

	export class ServerLinkWindowsPhoneDeviceIdRequestData extends LinkWindowsPhoneDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminLinkWindowsPhoneDeviceIdRequestData extends ServerLinkWindowsPhoneDeviceIdRequestData {
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

	export class ResetAccountPasswordRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.Password, minLength: 6, maxLength: 64, mustNonNull: true })
		public password: string;

	}

	export class ServerResetAccountPasswordRequestData extends ResetAccountPasswordRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminResetAccountPasswordRequestData extends ServerResetAccountPasswordRequestData {
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

	export class SetEmailRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.Email, minLength: 5, maxLength: 128, mustNonNull: true })
		public email: string;

	}

	export class ServerSetEmailRequestData extends SetEmailRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminSetEmailRequestData extends ServerSetEmailRequestData {
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

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 5, maxValue: 100, mustInt: true, isOptional: true })
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

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 5, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

		@StringDataMember({ code: GNParameterCode.Token, minLength: 24, maxLength: 24, mustNonNull: true, isOptional: true })
		public token?: string;

	}

	export class ServerGetStatisticsLogRequestData extends GetStatisticsLogRequestData {
	}

	export class AdminGetStatisticsLogRequestData extends ServerGetStatisticsLogRequestData {
	}

	export class SetTsLastLoginRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

	}

	export class ServerSetTsLastLoginRequestData extends SetTsLastLoginRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminSetTsLastLoginRequestData extends ServerSetTsLastLoginRequestData {
	}

	export class UnlinkAccountRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.Username, minLength: 6, maxLength: 32, mustNonNull: true })
		public username: string;

	}

	export class ServerUnlinkAccountRequestData extends UnlinkAccountRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminUnlinkAccountRequestData extends ServerUnlinkAccountRequestData {
	}

	export class UnlinkAndroidDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.AndroidDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public androidDeviceId: string;

	}

	export class ServerUnlinkAndroidDeviceIdRequestData extends UnlinkAndroidDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminUnlinkAndroidDeviceIdRequestData extends ServerUnlinkAndroidDeviceIdRequestData {
	}

	export class UnlinkAppleRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.AppleId, minLength: 6, maxLength: 64, mustNonNull: true })
		public appleId: string;

	}

	export class ServerUnlinkAppleRequestData extends UnlinkAppleRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminUnlinkAppleRequestData extends ServerUnlinkAppleRequestData {
	}

	export class UnlinkCustomDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.CustomDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public customDeviceId: string;

	}

	export class ServerUnlinkCustomDeviceIdRequestData extends UnlinkCustomDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminUnlinkCustomDeviceIdRequestData extends ServerUnlinkCustomDeviceIdRequestData {
	}

	export class UnlinkCustomIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.CustomId, minLength: 6, maxLength: 64, mustNonNull: true })
		public customId: string;

	}

	export class ServerUnlinkCustomIdRequestData extends UnlinkCustomIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminUnlinkCustomIdRequestData extends ServerUnlinkCustomIdRequestData {
	}

	export class UnlinkEditorDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.EditorDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public editorDeviceId: string;

	}

	export class ServerUnlinkEditorDeviceIdRequestData extends UnlinkEditorDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminUnlinkEditorDeviceIdRequestData extends ServerUnlinkEditorDeviceIdRequestData {
	}

	export class UnlinkFacebookRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.FacebookId, minLength: 6, maxLength: 64, mustNonNull: true })
		public facebookId: string;

	}

	export class ServerUnlinkFacebookRequestData extends UnlinkFacebookRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminUnlinkFacebookRequestData extends ServerUnlinkFacebookRequestData {
	}

	export class UnlinkGenericServiceRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.ServiceName, minLength: 6, maxLength: 32, mustNonNull: true })
		public serviceName: string;

		@StringDataMember({ code: GNParameterCode.ServiceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public serviceId: string;

	}

	export class ServerUnlinkGenericServiceRequestData extends UnlinkGenericServiceRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminUnlinkGenericServiceRequestData extends ServerUnlinkGenericServiceRequestData {
	}

	export class UnlinkGoogleRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.GoogleId, minLength: 6, maxLength: 32, mustNonNull: true })
		public googleId: string;

	}

	export class ServerUnlinkGoogleRequestData extends UnlinkGoogleRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminUnlinkGoogleRequestData extends ServerUnlinkGoogleRequestData {
	}

	export class UnlinkGooglePlayGameServiceRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.PlayerId, minLength: 6, maxLength: 64, mustNonNull: true })
		public playerId: string;

	}

	export class ServerUnlinkGooglePlayGameServiceRequestData extends UnlinkGooglePlayGameServiceRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminUnlinkGooglePlayGameServiceRequestData extends ServerUnlinkGooglePlayGameServiceRequestData {
	}

	export class UnlinkGameCenterRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.PlayerId, minLength: 6, maxLength: 64, mustNonNull: true })
		public playerId: string;

	}

	export class ServerUnlinkGameCenterRequestData extends UnlinkGameCenterRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminUnlinkGameCenterRequestData extends ServerUnlinkGameCenterRequestData {
	}

	export class UnlinkiOSDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.iOSDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public iOSDeviceId: string;

	}

	export class ServerUnlinkiOSDeviceIdRequestData extends UnlinkiOSDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminUnlinkiOSDeviceIdRequestData extends ServerUnlinkiOSDeviceIdRequestData {
	}

	export class UnlinkLinuxDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.LinuxDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public linuxDeviceId: string;

	}

	export class ServerUnlinkLinuxDeviceIdRequestData extends UnlinkLinuxDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminUnlinkLinuxDeviceIdRequestData extends ServerUnlinkLinuxDeviceIdRequestData {
	}

	export class UnlinkMacOSDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.MacOSDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public macOSDeviceId: string;

	}

	export class ServerUnlinkMacOSDeviceIdRequestData extends UnlinkMacOSDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminUnlinkMacOSDeviceIdRequestData extends ServerUnlinkMacOSDeviceIdRequestData {
	}

	export class UnlinkWindowsDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.WindowsDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public windowsDeviceId: string;

	}

	export class ServerUnlinkWindowsDeviceIdRequestData extends UnlinkWindowsDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminUnlinkWindowsDeviceIdRequestData extends ServerUnlinkWindowsDeviceIdRequestData {
	}

	export class UnlinkWindowsPhoneDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
		public userId?: string;

		@StringDataMember({ code: GNParameterCode.WindowsPhoneDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public windowsPhoneDeviceId: string;

	}

	export class ServerUnlinkWindowsPhoneDeviceIdRequestData extends UnlinkWindowsPhoneDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
		public userId: string;

	}

	export class AdminUnlinkWindowsPhoneDeviceIdRequestData extends ServerUnlinkWindowsPhoneDeviceIdRequestData {
	}

	export class InfoResponseParameters {
		@GNHashtableDataMember({ code: GNParameterCode.External, isOptional: true })
		public external?: ExternalItem;

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

		@NumberDataMember({ code: GNParameterCode.TsLastLogin, isOptional: true })
		public tsLastLogin?: number;

		@StringDataMember({ code: GNParameterCode.IpAddressCreate, isOptional: true })
		public ipAddressCreate?: string;

		@StringDataMember({ code: GNParameterCode.CountryCode, isOptional: true })
		public countryCode?: string;

		@StringDataMember({ code: GNParameterCode.Email, isOptional: true })
		public email?: string;

	}

	export class MasterPlayerResponseData {
		@GNHashtableDataMember({ code: GNParameterCode.InfoResponseParameters })
		public infoResponseParameters: InfoResponseParameters;

	}

	export class MasterPlayerWithUserIdResponseData extends MasterPlayerResponseData {
		@StringDataMember({ code: GNParameterCode.UserId })
		public userId: string;

	}

	export class MasterPlayerWithAppleIdResponseData extends MasterPlayerWithUserIdResponseData {
		@StringDataMember({ code: GNParameterCode.AppleId })
		public appleId: string;

	}

	export class GetPlayersWithAppleResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: MasterPlayerWithAppleIdResponseData })
		public results: Array<MasterPlayerWithAppleIdResponseData>;

	}

	export class MasterPlayersWithUserIdResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: MasterPlayerWithUserIdResponseData })
		public results: Array<MasterPlayerWithUserIdResponseData>;

	}

	export class MasterPlayerWithFacebookIdResponseData extends MasterPlayerWithUserIdResponseData {
		@StringDataMember({ code: GNParameterCode.FacebookId })
		public facebookId: string;

	}

	export class GetPlayersWithFacebookResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: MasterPlayerWithFacebookIdResponseData })
		public results: Array<MasterPlayerWithFacebookIdResponseData>;

	}

	export class MasterPlayerWithGenericServiceIdResponseData extends MasterPlayerWithUserIdResponseData {
		@StringDataMember({ code: GNParameterCode.ServiceId })
		public serviceId: string;

	}

	export class GetPlayersWithGenericServiceResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: MasterPlayerWithGenericServiceIdResponseData })
		public results: Array<MasterPlayerWithGenericServiceIdResponseData>;

	}

	export class MasterPlayerWithGoogleIdResponseData extends MasterPlayerWithUserIdResponseData {
		@StringDataMember({ code: GNParameterCode.GoogleId })
		public googleId: string;

	}

	export class GetPlayersWithGoogleResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: MasterPlayerWithGoogleIdResponseData })
		public results: Array<MasterPlayerWithGoogleIdResponseData>;

	}

	export class MasterPlayerWithPlayerIdResponseData extends MasterPlayerWithUserIdResponseData {
		@StringDataMember({ code: GNParameterCode.PlayerId })
		public playerId: string;

	}

	export class GetPlayersWithGooglePlayGameServiceResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: MasterPlayerWithPlayerIdResponseData })
		public results: Array<MasterPlayerWithPlayerIdResponseData>;

	}

	export class GetPlayersWithGameCenterResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: MasterPlayerWithPlayerIdResponseData })
		public results: Array<MasterPlayerWithPlayerIdResponseData>;

	}

	export class MasterPlayerLeaderboardResponseData extends MasterPlayerWithUserIdResponseData {
		@NumberDataMember({ code: GNParameterCode.Position })
		public position: number;

		@NumberDataMember({ code: GNParameterCode.BackupValue, isOptional: true })
		public backupValue?: number;

	}

	export class MasterPlayerLogResponseData {
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
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: MasterPlayerLeaderboardResponseData })
		public results: Array<MasterPlayerLeaderboardResponseData>;

		@NumberDataMember({ code: GNParameterCode.TsCreate, isOptional: true })
		public tsCreate: number;

	}

	export class GetCurrencyLeaderboardResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: MasterPlayerLeaderboardResponseData })
		public results: Array<MasterPlayerLeaderboardResponseData>;

	}

	export class GetCreateLeaderboardResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: MasterPlayerLeaderboardResponseData })
		public results: Array<MasterPlayerLeaderboardResponseData>;

	}

	export class GetLastLoginLeaderboardResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: MasterPlayerLeaderboardResponseData })
		public results: Array<MasterPlayerLeaderboardResponseData>;

	}

	export class GetCurrencyLeaderboardRequestData {
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

	export class ServerGetCurrencyLeaderboardRequestData extends GetCurrencyLeaderboardRequestData {
	}

	export class AdminGetCurrencyLeaderboardRequestData extends ServerGetCurrencyLeaderboardRequestData {
	}

	export class GetStatisticsLogResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: MasterPlayerLogResponseData })
		public results: Array<MasterPlayerLogResponseData>;

		@StringDataMember({ code: GNParameterCode.Token, isOptional: true })
		public token?: string;

	}

	export class GetCurrencyLogResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: MasterPlayerLogResponseData })
		public results: Array<MasterPlayerLogResponseData>;

		@StringDataMember({ code: GNParameterCode.Token, isOptional: true })
		public token?: string;

	}

	export class EmptyResponseData {
	}

}
