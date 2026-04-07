import { GNHashtable } from "./../../common/GNData";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";
import { GenericModels } from "./GenericModels";
import { MasterPlayerModels } from "./MasterPlayerModels";

/**
 * Groups shared data contracts for Authenticate.
 */
export namespace AuthenticateModels {

	/**
	 * Defines the reusable parameter block InfoRequestParam.
	 */
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

	/**
	 * Defines the request payload for LoginByAccount.
	 */
	export class LoginByAccountRequestData {
		@StringDataMember({ code: ParameterCode.Username, minLength: 6, maxLength: 32, mustNonNull: true })
		public username: string;

		@StringDataMember({ code: ParameterCode.Password, minLength: 6, maxLength: 64, mustNonNull: true })
		public password: string;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	/**
	 * Defines the request payload for LoginByAndroidDeviceId.
	 */
	export class LoginByAndroidDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.AndroidDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public androidDeviceId: string;

		@BooleanDataMember({ code: ParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
		public createPlayerIfNotExists?: boolean;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	/**
	 * Defines the request payload for LoginByApple.
	 */
	export class LoginByAppleRequestData {
		@StringDataMember({ code: ParameterCode.Token, minLength: 32, maxLength: 2048, mustNonNull: true })
		public token: string;

		@BooleanDataMember({ code: ParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
		public createPlayerIfNotExists?: boolean;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	/**
	 * Defines the request payload for LoginByCustomDeviceId.
	 */
	export class LoginByCustomDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.CustomDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public customDeviceId: string;

		@BooleanDataMember({ code: ParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
		public createPlayerIfNotExists?: boolean;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	/**
	 * Defines the request payload for LoginByCustomId.
	 */
	export class LoginByCustomIdRequestData {
		@StringDataMember({ code: ParameterCode.CustomId, minLength: 6, maxLength: 64, mustNonNull: true })
		public customId: string;

		@BooleanDataMember({ code: ParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
		public createPlayerIfNotExists?: boolean;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	/**
	 * Defines the request payload for LoginByEditorDeviceId.
	 */
	export class LoginByEditorDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.EditorDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public editorDeviceId: string;

		@BooleanDataMember({ code: ParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
		public createPlayerIfNotExists?: boolean;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	/**
	 * Defines the request payload for LoginByFacebook.
	 */
	export class LoginByFacebookRequestData {
		@StringDataMember({ code: ParameterCode.Token, minLength: 32, maxLength: 2048, mustNonNull: true })
		public token: string;

		@BooleanDataMember({ code: ParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
		public createPlayerIfNotExists?: boolean;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	/**
	 * Defines the request payload for LoginByGenericService.
	 */
	export class LoginByGenericServiceRequestData {
		@StringDataMember({ code: ParameterCode.ServiceName, minLength: 6, maxLength: 32, mustNonNull: true })
		public serviceName: string;

		@GNHashtableDataMember({ code: ParameterCode.ServiceData, mustNonNull: true })
		public serviceData: GNHashtable;

		@BooleanDataMember({ code: ParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
		public createPlayerIfNotExists?: boolean;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	/**
	 * Defines the request payload for LoginByGoogle.
	 */
	export class LoginByGoogleRequestData {
		@StringDataMember({ code: ParameterCode.Token, minLength: 32, maxLength: 2048, mustNonNull: true })
		public token: string;

		@NumberDataMember({ code: ParameterCode.Type, minValue: 1, maxValue: 2, mustInt: true })
		public type: number;

		@BooleanDataMember({ code: ParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
		public createPlayerIfNotExists?: boolean;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	/**
	 * Defines the request payload for LoginByGooglePlayGameService.
	 */
	export class LoginByGooglePlayGameServiceRequestData {
		@StringDataMember({ code: ParameterCode.Token, minLength: 32, maxLength: 2048, mustNonNull: true })
		public token: string;

		@BooleanDataMember({ code: ParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
		public createPlayerIfNotExists?: boolean;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	/**
	 * Defines the request payload for LoginByGameCenter.
	 */
	export class LoginByGameCenterRequestData {
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

		@BooleanDataMember({ code: ParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
		public createPlayerIfNotExists?: boolean;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	/**
	 * Defines the request payload for LoginByiOSDeviceId.
	 */
	export class LoginByiOSDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.iOSDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public iOSDeviceId: string;

		@BooleanDataMember({ code: ParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
		public createPlayerIfNotExists?: boolean;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	/**
	 * Defines the request payload for LoginByLinuxDeviceId.
	 */
	export class LoginByLinuxDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.LinuxDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public linuxDeviceId: string;

		@BooleanDataMember({ code: ParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
		public createPlayerIfNotExists?: boolean;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	/**
	 * Defines the request payload for LoginByMacOSDeviceId.
	 */
	export class LoginByMacOSDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.MacOSDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public macOSDeviceId: string;

		@BooleanDataMember({ code: ParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
		public createPlayerIfNotExists?: boolean;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	/**
	 * Defines the request payload for LoginByWindowsDeviceId.
	 */
	export class LoginByWindowsDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.WindowsDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public windowsDeviceId: string;

		@BooleanDataMember({ code: ParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
		public createPlayerIfNotExists?: boolean;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	/**
	 * Defines the request payload for LoginByWindowsPhoneDeviceId.
	 */
	export class LoginByWindowsPhoneDeviceIdRequestData {
		@StringDataMember({ code: ParameterCode.WindowsPhoneDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public windowsPhoneDeviceId: string;

		@BooleanDataMember({ code: ParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
		public createPlayerIfNotExists?: boolean;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	/**
	 * Defines the request payload for RegisterAccount.
	 */
	export class RegisterAccountRequestData {
		@StringDataMember({ code: ParameterCode.Username, minLength: 6, maxLength: 32, mustNonNull: true })
		public username: string;

		@StringDataMember({ code: ParameterCode.Password, minLength: 6, maxLength: 64, mustNonNull: true })
		public password: string;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	/**
	 * Defines the request payload for RefreshAuthToken.
	 */
	export class RefreshAuthTokenRequestData {

	}

	/**
	 * Defines the response payload for Authenticate.
	 */
	export class AuthenticateResponseData extends MasterPlayerModels.MasterPlayerWithUserIdResponseData {
		@BooleanDataMember({ code: ParameterCode.NewlyCreated, isOptional: true })
		public newlyCreated?: boolean;

		@StringDataMember({ code: ParameterCode.AuthToken, isOptional: true })
		public authToken?: string;

		@GNHashtableDataMember({ code: ParameterCode.PlayerBan, isOptional: true })
		public playerBan?: GenericModels.BanItem;
	}

	/**
	 * Defines the response payload for GenericServiceAuthenticate.
	 */
	export class GenericServiceAuthenticateResponseData extends AuthenticateResponseData {
		@StringDataMember({ code: ParameterCode.ErrorMessage, isOptional: true })
		public errorMessage?: string;

	}

	/**
	 * Defines the response payload for RefreshAuthToken.
	 */
	export class RefreshAuthTokenResponseData {
		@StringDataMember({ code: ParameterCode.AuthToken, isOptional: true })
		public authToken?: string;

		@GNHashtableDataMember({ code: ParameterCode.PlayerBan, isOptional: true })
		public playerBan?: GenericModels.BanItem;

	}

	/**
	 * Defines the response payload for Empty.
	 */
	export class EmptyResponseData {
	}

}
