import { GNHashtable } from "./../../common/GNData";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";
import { GenericModels } from "./GenericModels";
import { MasterPlayerModels } from "./MasterPlayerModels";

/**
 * Groups reusable request and response contracts for Authenticate operations.
 *
 * All login and register requests in this namespace use `RequestType.Authenticate` with `RequestRole.Client`.
 * Every login or register flow except `RefreshAuthToken` requires a non-null `infoRequestParam`.
 */
export namespace AuthenticateModels {

    /**
     * Defines the reusable parameter block `infoRequestParam`.
     *
     * This object controls which optional profile fields should be returned together with the auth response.
     * Every boolean flag defaults to `false`, so omit fields you do not need.
     */
    export class InfoRequestParam {
        /** Include linked external identity data. */
        @BooleanDataMember({ code: ParameterCode.External, isOptional: true, defaultValue: false })
        public external?: boolean;

        /** Include segment assignments. */
        @BooleanDataMember({ code: ParameterCode.Segments, isOptional: true, defaultValue: false })
        public segments?: boolean;

        /** Include custom data entries, optionally filtered by `customDataKeys`. */
        @BooleanDataMember({ code: ParameterCode.CustomDatas, isOptional: true, defaultValue: false })
        public customDatas?: boolean;

        /** Include display-name data. */
        @BooleanDataMember({ code: ParameterCode.DisplayName, isOptional: true, defaultValue: false })
        public displayName?: boolean;

        /** Include avatar data. */
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

        /** Filter the returned player data fields. */
        @GNArrayDataMember({ code: ParameterCode.PlayerDataKeys, isOptional: true, elementCls: String })
        public playerDataKeys?: Array<string>;

        /** Filter the returned player currency fields. */
        @GNArrayDataMember({ code: ParameterCode.PlayerCurrencyKeys, isOptional: true, elementCls: String })
        public playerCurrencyKeys?: Array<string>;

        /** Filter the returned player statistics fields. */
        @GNArrayDataMember({ code: ParameterCode.PlayerStatisticsKeys, isOptional: true, elementCls: String })
        public playerStatisticsKeys?: Array<string>;

        /** Filter the returned custom-data fields. */
        @GNArrayDataMember({ code: ParameterCode.CustomDataKeys, isOptional: true, elementCls: String })
        public customDataKeys?: Array<string>;

        /** Filter the returned tags by key. */
        @GNArrayDataMember({ code: ParameterCode.TagKeys, isOptional: true, elementCls: String })
        public tagKeys?: Array<string>;

    }

    /**
     * Defines the request payload for `loginByAccount`.
     *
     * Use this flow when the player authenticates with a GearN username and password.
     */
    export class LoginByAccountRequestData {
        @StringDataMember({ code: ParameterCode.Username, minLength: 6, maxLength: 32, mustNonNull: true })
        public username: string;

        @StringDataMember({ code: ParameterCode.Password, minLength: 6, maxLength: 64, mustNonNull: true })
        public password: string;

        /** Controls which optional profile fields should be returned together with the auth payload. */
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
     * Defines the request payload for `loginByGenericService`.
     *
     * `serviceData` is provider-defined and is not constrained by a public typed schema beyond `GNHashtable`.
     */
    export class LoginByGenericServiceRequestData {
        @StringDataMember({ code: ParameterCode.ServiceName, minLength: 6, maxLength: 32, mustNonNull: true })
        public serviceName: string;

        /** Provider-defined payload consumed by the backend integration for `serviceName`. */
        @GNHashtableDataMember({ code: ParameterCode.ServiceData, mustNonNull: true })
        public serviceData: GNHashtable;

        @BooleanDataMember({ code: ParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
        public createPlayerIfNotExists?: boolean;

        @GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
        public infoRequestParam: InfoRequestParam;

    }

    /**
     * Defines the request payload for `loginByGoogle`.
     *
     * `type` should be mapped with the public `GoogleLoginType` enum.
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
     * Defines the request payload for `registerAccount`.
     *
     * This creates a GearN account and returns the same profile-style payload shape used by the normal login flows.
     */
    export class RegisterAccountRequestData {
        @StringDataMember({ code: ParameterCode.Username, minLength: 6, maxLength: 32, mustNonNull: true })
        public username: string;

        @StringDataMember({ code: ParameterCode.Password, minLength: 6, maxLength: 64, mustNonNull: true })
        public password: string;

        /** Controls which optional profile fields should be returned together with the auth payload. */
        @GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
        public infoRequestParam: InfoRequestParam;

    }

    /**
     * Defines the request payload for `refreshAuthToken`.
     *
     * The request body is intentionally empty. The current auth context comes from the stored auth token
     * or from `overrideAuthToken` passed to the API call.
     */
    export class RefreshAuthTokenRequestData {

    }

    /**
     * Defines the response payload returned by most login and register flows.
     *
     * This payload extends `MasterPlayerWithUserIdResponseData`, so it may already include profile data
     * requested through `infoRequestParam` in addition to auth-specific fields.
     */
    export class AuthenticateResponseData extends MasterPlayerModels.MasterPlayerWithUserIdResponseData {
        /** Indicates whether the backend created a new player as part of the login flow. */
        @BooleanDataMember({ code: ParameterCode.NewlyCreated, isOptional: true })
        public newlyCreated?: boolean;

        /** Auth token to cache locally and reuse for future HTTP or socket auth flows. */
        @StringDataMember({ code: ParameterCode.AuthToken, isOptional: true })
        public authToken?: string;

        /** Optional ban state returned together with the auth payload. */
        @GNHashtableDataMember({ code: ParameterCode.PlayerBan, isOptional: true })
        public playerBan?: GenericModels.BanItem;
    }

    /**
     * Defines the response payload for `loginByGenericService`.
     *
     * This extends the normal auth response and adds an optional backend error message for the external provider flow.
     */
    export class GenericServiceAuthenticateResponseData extends AuthenticateResponseData {
        /** Optional provider-specific error message returned by the backend integration. */
        @StringDataMember({ code: ParameterCode.ErrorMessage, isOptional: true })
        public errorMessage?: string;

    }

    /**
     * Defines the response payload for `refreshAuthToken`.
     *
     * Unlike the normal login flows, this response only returns the refreshed auth token and optional ban state.
     */
    export class RefreshAuthTokenResponseData {
        /** Refreshed auth token that should replace the previously stored token. */
        @StringDataMember({ code: ParameterCode.AuthToken, isOptional: true })
        public authToken?: string;

        /** Optional ban state returned together with the refreshed token. */
        @GNHashtableDataMember({ code: ParameterCode.PlayerBan, isOptional: true })
        public playerBan?: GenericModels.BanItem;

    }

    /**
     * Defines an intentionally empty response payload.
     */
    export class EmptyResponseData {
    }

}
