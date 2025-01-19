import { GNHashtable } from "../../common/GNData";
import { GNParameterCode } from "./../../constant/parameterCode/GNParameterCode";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";
import { GenericModels } from "./GenericModels";
import { MasterPlayerModels } from "./MasterPlayerModels";

export namespace AuthenticateModels {

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

		@BooleanDataMember({ code: GNParameterCode.PushNotifications, isOptional: true, defaultValue: false })
		public pushNotifications?: boolean;

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

	export class LoginByAccountRequestData {
		@StringDataMember({ code: GNParameterCode.Username, minLength: 6, maxLength: 32, mustNonNull: true })
		public username: string;

		@StringDataMember({ code: GNParameterCode.Password, minLength: 6, maxLength: 64, mustNonNull: true })
		public password: string;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class LoginByAndroidDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.AndroidDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public androidDeviceId: string;

		@BooleanDataMember({ code: GNParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
		public createPlayerIfNotExists?: boolean;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class LoginByAppleRequestData {
		@StringDataMember({ code: GNParameterCode.Token, minLength: 32, maxLength: 512, mustNonNull: true })
		public token: string;

		@BooleanDataMember({ code: GNParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
		public createPlayerIfNotExists?: boolean;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class LoginByCustomDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.CustomDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public customDeviceId: string;

		@BooleanDataMember({ code: GNParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
		public createPlayerIfNotExists?: boolean;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class LoginByCustomIdRequestData {
		@StringDataMember({ code: GNParameterCode.CustomId, minLength: 6, maxLength: 64, mustNonNull: true })
		public customId: string;

		@BooleanDataMember({ code: GNParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
		public createPlayerIfNotExists?: boolean;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class LoginByEditorDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.EditorDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public editorDeviceId: string;

		@BooleanDataMember({ code: GNParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
		public createPlayerIfNotExists?: boolean;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class LoginByFacebookRequestData {
		@StringDataMember({ code: GNParameterCode.Token, minLength: 32, maxLength: 512, mustNonNull: true })
		public token: string;

		@BooleanDataMember({ code: GNParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
		public createPlayerIfNotExists?: boolean;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class LoginByGenericServiceRequestData {
		@StringDataMember({ code: GNParameterCode.ServiceName, minLength: 6, maxLength: 32, mustNonNull: true })
		public serviceName: string;

		@GNHashtableDataMember({ code: GNParameterCode.ServiceData, mustNonNull: true })
		public serviceData: GNHashtable;

		@BooleanDataMember({ code: GNParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
		public createPlayerIfNotExists?: boolean;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class LoginByGoogleRequestData {
		@StringDataMember({ code: GNParameterCode.Token, minLength: 32, maxLength: 512, mustNonNull: true })
		public token: string;

		@NumberDataMember({ code: GNParameterCode.Type, minValue: 1, maxValue: 2, mustInt: true })
		public type: number;

		@BooleanDataMember({ code: GNParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
		public createPlayerIfNotExists?: boolean;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class LoginByGooglePlayGameServiceRequestData {
		@StringDataMember({ code: GNParameterCode.Token, minLength: 20, maxLength: 512, mustNonNull: true })
		public token: string;

		@BooleanDataMember({ code: GNParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
		public createPlayerIfNotExists?: boolean;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class LoginByGameCenterRequestData {
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

		@BooleanDataMember({ code: GNParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
		public createPlayerIfNotExists?: boolean;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class LoginByiOSDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.iOSDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public iOSDeviceId: string;

		@BooleanDataMember({ code: GNParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
		public createPlayerIfNotExists?: boolean;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class LoginByLinuxDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.LinuxDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public linuxDeviceId: string;

		@BooleanDataMember({ code: GNParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
		public createPlayerIfNotExists?: boolean;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class LoginByMacOSDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.MacOSDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public macOSDeviceId: string;

		@BooleanDataMember({ code: GNParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
		public createPlayerIfNotExists?: boolean;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class LoginByWindowsDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.WindowsDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public windowsDeviceId: string;

		@BooleanDataMember({ code: GNParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
		public createPlayerIfNotExists?: boolean;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class LoginByWindowsPhoneDeviceIdRequestData {
		@StringDataMember({ code: GNParameterCode.WindowsPhoneDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
		public windowsPhoneDeviceId: string;

		@BooleanDataMember({ code: GNParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
		public createPlayerIfNotExists?: boolean;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class RegisterAccountRequestData {
		@StringDataMember({ code: GNParameterCode.Username, minLength: 6, maxLength: 32, mustNonNull: true })
		public username: string;

		@StringDataMember({ code: GNParameterCode.Password, minLength: 6, maxLength: 64, mustNonNull: true })
		public password: string;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class RefreshAuthTokenRequestData {

	}

	export class AuthenticateResponseData extends MasterPlayerModels.MasterPlayerWithUserIdResponseData {
		@BooleanDataMember({ code: GNParameterCode.NewlyCreated, isOptional: true })
		public newlyCreated?: boolean;

		@StringDataMember({ code: ParameterCode.AuthToken, isOptional: true })
		public authToken?: string;

		@GNHashtableDataMember({ code: GNParameterCode.PlayerBan, isOptional: true })
		public playerBan?: GenericModels.BanItem;
	}

	export class RefreshAuthTokenResponseData {
		@StringDataMember({ code: ParameterCode.AuthToken, isOptional: true })
		public authToken?: string;

		@GNHashtableDataMember({ code: GNParameterCode.PlayerBan, isOptional: true })
		public playerBan?: GenericModels.BanItem;
	}

	export class EmptyResponseData {
	}

}
