import { GNHashtable } from "./../../common/GNData";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";
import { GenericModels } from "./GenericModels";

/**
 * Reusable request and response DTOs for the MasterPlayer
 * domain.
 *
 * MasterPlayer operations target the **account-level** record
 * — the top-level user identity. Client variants imply the
 * authenticated user (`userId` omitted); Server / Admin
 * variants require an explicit `userId`.
 *
 * Three role variants per operation:
 * - **Client** (no prefix): routed through
 *   `GNNetwork.masterPlayer`, `userId` is implicit.
 * - **`Server*`**: routed through
 *   `GNNetwork.masterPlayer.server`, requires explicit
 *   `userId` and a server `secretKey`.
 * - **`Admin*`**: routed through
 *   `GNNetwork.masterPlayer.admin`, plus admin-only knobs
 *   (force overrides, bypass-validation flags).
 *
 * Identity link / unlink DTOs follow the convention
 * `Link<Provider>RequestData` / `Unlink<Provider>RequestData`
 * — there is one pair per supported provider (Apple, Google,
 * Facebook, Game Center, ten device-id flavours, custom-id,
 * generic-service). Each maps onto the matching `loginBy*`
 * flow on {@link AuthenticateApi}.
 *
 * Validation rules declared on each `@*DataMember` decorator
 * are enforced server-side; failures surface as
 * {@link InvalidMember} entries with the matching
 * {@link InvalidMemberType} code.
 */
export namespace MasterPlayerModels {
    /**
     * Defines the reusable parameter block CustomDataParam.
     */
    export class CustomDataParam {
        @StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
        public key: string;

        @DataMember({ code: ParameterCode.Value })
        public value: any;

    }

    /**
     * Selects which optional master-player fields should be returned in `infoResponseParameters`.
     * Boolean flags default to `false`; key arrays narrow list-style fields to specific keys only.
     */
    export class InfoRequestParam {
        /**
         * Includes linked external identities such as account, device, Google, Facebook, or Apple.
         */
        @BooleanDataMember({ code: ParameterCode.External, isOptional: true, defaultValue: false })
        public external?: boolean;

        /**
         * Includes the segment names currently attached to the player.
         */
        @BooleanDataMember({ code: ParameterCode.Segments, isOptional: true, defaultValue: false })
        public segments?: boolean;

        /**
         * Includes custom data entries.
         */
        @BooleanDataMember({ code: ParameterCode.CustomDatas, isOptional: true, defaultValue: false })
        public customDatas?: boolean;

        /**
         * Includes the player's display name.
         */
        @BooleanDataMember({ code: ParameterCode.DisplayName, isOptional: true, defaultValue: false })
        public displayName?: boolean;

        /**
         * Includes the avatar descriptor.
         */
        @BooleanDataMember({ code: ParameterCode.Avatar, isOptional: true, defaultValue: false })
        public avatar?: boolean;

        /**
         * Includes the creation timestamp.
         */
        @BooleanDataMember({ code: ParameterCode.TsCreate, isOptional: true, defaultValue: false })
        public tsCreate?: boolean;

        /**
         * Includes tag entries.
         */
        @BooleanDataMember({ code: ParameterCode.Tags, isOptional: true, defaultValue: false })
        public tags?: boolean;

        /**
         * Includes the active ban state when present.
         */
        @BooleanDataMember({ code: ParameterCode.PlayerBan, isOptional: true, defaultValue: false })
        public playerBan?: boolean;

        /**
         * Includes player currency entries.
         */
        @BooleanDataMember({ code: ParameterCode.PlayerCurrencies, isOptional: true, defaultValue: false })
        public playerCurrencies?: boolean;

        /**
         * Includes player statistics entries.
         */
        @BooleanDataMember({ code: ParameterCode.PlayerStatistics, isOptional: true, defaultValue: false })
        public playerStatistics?: boolean;

        /**
         * Includes player data entries.
         */
        @BooleanDataMember({ code: ParameterCode.PlayerDatas, isOptional: true, defaultValue: false })
        public playerDatas?: boolean;

        /**
         * Includes the creation IP address.
         */
        @BooleanDataMember({ code: ParameterCode.IpAddressCreate, isOptional: true, defaultValue: false })
        public ipAddressCreate?: boolean;

        /**
         * Includes the country code currently stored for the player.
         */
        @BooleanDataMember({ code: ParameterCode.CountryCode, isOptional: true, defaultValue: false })
        public countryCode?: boolean;

        /**
         * Includes the email currently stored for the player.
         */
        @BooleanDataMember({ code: ParameterCode.Email, isOptional: true, defaultValue: false })
        public email?: boolean;

        /**
         * Includes the last-login timestamp.
         */
        @BooleanDataMember({ code: ParameterCode.TsLastLogin, isOptional: true, defaultValue: false })
        public tsLastLogin?: boolean;

        /**
         * Includes registered push-notification endpoints.
         */
        @BooleanDataMember({ code: ParameterCode.PushNotifications, isOptional: true, defaultValue: false })
        public pushNotifications?: boolean;

        /**
         * Includes the player's online status, if supported by the connected game server
         */
        @BooleanDataMember({ code: ParameterCode.OnlineStatus, isOptional: true, defaultValue: false })
        public onlineStatus?: boolean;

        /**
         * Restricts `playerDatas` to the specified keys when that field is requested.
         */
        @GNArrayDataMember({ code: ParameterCode.PlayerDataKeys, isOptional: true, elementCls: String })
        public playerDataKeys?: Array<string>;

        /**
         * Restricts `playerCurrencies` to the specified currency keys when that field is requested.
         */
        @GNArrayDataMember({ code: ParameterCode.PlayerCurrencyKeys, isOptional: true, elementCls: String })
        public playerCurrencyKeys?: Array<string>;

        /**
         * Restricts `playerStatistics` to the specified statistic keys when that field is requested.
         */
        @GNArrayDataMember({ code: ParameterCode.PlayerStatisticsKeys, isOptional: true, elementCls: String })
        public playerStatisticsKeys?: Array<string>;

        /**
         * Restricts `customDatas` to the specified keys when that field is requested.
         */
        @GNArrayDataMember({ code: ParameterCode.CustomDataKeys, isOptional: true, elementCls: String })
        public customDataKeys?: Array<string>;

        /**
         * Restricts `tags` to the specified tag keys when that field is requested.
         */
        @GNArrayDataMember({ code: ParameterCode.TagKeys, isOptional: true, elementCls: String })
        public tagKeys?: Array<string>;

    }

    /**
     * Defines the reusable parameter block PlayerCurrencyParam.
     */
    export class PlayerCurrencyParam {
        @StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
        public key: string;

        @NumberDataMember({ code: ParameterCode.Amount })
        public amount: number;

    }

    /**
     * Defines the reusable parameter block PlayerDataParam.
     */
    export class PlayerDataParam {
        @StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
        public key: string;

        @DataMember({ code: ParameterCode.Value })
        public value: any;

    }

    /**
     * Defines the reusable parameter block PlayerStatisticsParam.
     */
    export class PlayerStatisticsParam {
        @StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
        public key: string;

        @NumberDataMember({ code: ParameterCode.Value })
        public value: number;

    }

    /**
     * Represents GenericService.
     */
    export class GenericService {
        @StringDataMember({ code: ParameterCode.ServiceName })
        public serviceName: string;

        @StringDataMember({ code: ParameterCode.ServiceId })
        public serviceId: string;

    }

    /**
     * Represents Device.
     */
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

    /**
     * Represents Account.
     */
    export class Account {
        @StringDataMember({ code: ParameterCode.Username, isOptional: true })
        public username?: string;

    }

    /**
     * Represents Custom.
     */
    export class Custom {
        @StringDataMember({ code: ParameterCode.CustomId, isOptional: true })
        public customId?: string;

    }

    /**
     * Represents Apple.
     */
    export class Apple {
        @StringDataMember({ code: ParameterCode.AppleId })
        public appleId: string;

        @StringDataMember({ code: ParameterCode.Email })
        public email: string;

    }

    /**
     * Represents Google.
     */
    export class Google {
        @StringDataMember({ code: ParameterCode.GoogleId })
        public googleId: string;

        @StringDataMember({ code: ParameterCode.DisplayName })
        public displayName: string;

        @StringDataMember({ code: ParameterCode.Email })
        public email: string;

    }

    /**
     * Represents Facebook.
     */
    export class Facebook {
        @StringDataMember({ code: ParameterCode.FacebookId })
        public facebookId: string;

        @StringDataMember({ code: ParameterCode.DisplayName })
        public displayName: string;

        @StringDataMember({ code: ParameterCode.Email })
        public email: string;

    }

    /**
     * Represents GooglePlayGameService.
     */
    export class GooglePlayGameService {
        @StringDataMember({ code: ParameterCode.PlayerId })
        public playerId: string;

        @StringDataMember({ code: ParameterCode.DisplayName })
        public displayName: string;

        @StringDataMember({ code: ParameterCode.Email })
        public email: string;

    }

    /**
     * Represents GameCenter.
     */
    export class GameCenter {
        @StringDataMember({ code: ParameterCode.PlayerId })
        public playerId: string;

        @StringDataMember({ code: ParameterCode.DisplayName })
        public displayName: string;

        @StringDataMember({ code: ParameterCode.Email })
        public email: string;

    }

    /**
     * Groups all external identities that may be linked to one master player.
     */
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

    /**
     * Defines the request payload for AddSegment.
     */
    export class AddSegmentRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
        public value: string;

    }

    /**
     * Defines the request payload for ServerAddSegment.
     */
    export class ServerAddSegmentRequestData extends AddSegmentRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminAddSegment.
     */
    export class AdminAddSegmentRequestData extends ServerAddSegmentRequestData {
    }

    /**
     * Defines the request payload for ChangeAccountPassword.
     */
    export class ChangeAccountPasswordRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.CurrentPassword, minLength: 6, maxLength: 64, mustNonNull: true })
        public currentPassword: string;

        @StringDataMember({ code: ParameterCode.Password, minLength: 6, maxLength: 64, mustNonNull: true })
        public password: string;

    }

    /**
     * Defines the request payload for GetAvatar.
     */
    export class GetAvatarRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

    }

    /**
     * Defines the request payload for ServerGetAvatar.
     */
    export class ServerGetAvatarRequestData extends GetAvatarRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminGetAvatar.
     */
    export class AdminGetAvatarRequestData extends ServerGetAvatarRequestData {
    }

    /**
     * Defines the request payload for GetCountryCode.
     */
    export class GetCountryCodeRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

    }

    /**
     * Defines the request payload for ServerGetCountryCode.
     */
    export class ServerGetCountryCodeRequestData extends GetCountryCodeRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminGetCountryCode.
     */
    export class AdminGetCountryCodeRequestData extends ServerGetCountryCodeRequestData {
    }

    /**
     * Defines the request payload for GetCustomData.
     */
    export class GetCustomDataRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @GNArrayDataMember({ code: ParameterCode.CustomDataKeys, isOptional: true, elementCls: String })
        public customDataKeys?: Array<string>;

    }

    /**
     * Defines the request payload for ServerGetCustomData.
     */
    export class ServerGetCustomDataRequestData extends GetCustomDataRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminGetCustomData.
     */
    export class AdminGetCustomDataRequestData extends ServerGetCustomDataRequestData {
    }

    /**
     * Defines the request payload for GetDisplayName.
     */
    export class GetDisplayNameRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

    }

    /**
     * Defines the request payload for ServerGetDisplayName.
     */
    export class ServerGetDisplayNameRequestData extends GetDisplayNameRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminGetDisplayName.
     */
    export class AdminGetDisplayNameRequestData extends ServerGetDisplayNameRequestData {
    }

    /**
     * Defines the request payload for GetEmail.
     */
    export class GetEmailRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

    }

    /**
     * Defines the request payload for ServerGetEmail.
     */
    export class ServerGetEmailRequestData extends GetEmailRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminGetEmail.
     */
    export class AdminGetEmailRequestData extends ServerGetEmailRequestData {
    }

    /**
     * Defines the request payload for GetExternal.
     */
    export class GetExternalRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

    }

    /**
     * Defines the request payload for ServerGetExternal.
     */
    export class ServerGetExternalRequestData extends GetExternalRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminGetExternal.
     */
    export class AdminGetExternalRequestData extends ServerGetExternalRequestData {
    }

    /**
     * Defines the request payload for GetIpAddressCreate.
     */
    export class GetIpAddressCreateRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

    }

    /**
     * Defines the request payload for ServerGetIpAddressCreate.
     */
    export class ServerGetIpAddressCreateRequestData extends GetIpAddressCreateRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminGetIpAddressCreate.
     */
    export class AdminGetIpAddressCreateRequestData extends ServerGetIpAddressCreateRequestData {
    }

    /**
     * Defines the request payload for GetPlayerBan.
     */
    export class GetPlayerBanRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

    }

    /**
     * Defines the request payload for ServerGetPlayerBan.
     */
    export class ServerGetPlayerBanRequestData extends GetPlayerBanRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminGetPlayerBan.
     */
    export class AdminGetPlayerBanRequestData extends ServerGetPlayerBanRequestData {
    }

    /**
     * Defines the request payload for GetPlayerCurrency.
     */
    export class GetPlayerCurrencyRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @GNArrayDataMember({ code: ParameterCode.PlayerCurrencyKeys, isOptional: true, elementCls: String })
        public playerCurrencyKeys?: Array<string>;

    }

    /**
     * Defines the request payload for ServerGetPlayerCurrency.
     */
    export class ServerGetPlayerCurrencyRequestData extends GetPlayerCurrencyRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminGetPlayerCurrency.
     */
    export class AdminGetPlayerCurrencyRequestData extends ServerGetPlayerCurrencyRequestData {
    }

    /**
     * Defines the request payload for GetPlayerData.
     */
    export class GetPlayerDataRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @GNArrayDataMember({ code: ParameterCode.PlayerDataKeys, isOptional: true, elementCls: String })
        public playerDataKeys?: Array<string>;

    }

    /**
     * Defines the request payload for ServerGetPlayerData.
     */
    export class ServerGetPlayerDataRequestData extends GetPlayerDataRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminGetPlayerData.
     */
    export class AdminGetPlayerDataRequestData extends ServerGetPlayerDataRequestData {
    }

    /**
     * Reads the current or target master-player profile using the requested projection.
     * On the client route, omit `userId` to target the authenticated player itself.
     */
    export class GetPlayerInformationRequestData {
        /**
         * Optional self-target shortcut on the client route.
         */
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        /**
         * Required field projection that controls which optional data is returned.
         */
        @GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
        public infoRequestParam: InfoRequestParam;

    }

    /**
     * Reads a specific target master player on a trusted route.
     */
    export class ServerGetPlayerInformationRequestData extends GetPlayerInformationRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminGetPlayerInformation.
     */
    export class AdminGetPlayerInformationRequestData extends ServerGetPlayerInformationRequestData {
    }

    /**
     * Defines the request payload for GetPlayerStatistics.
     */
    export class GetPlayerStatisticsRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @GNArrayDataMember({ code: ParameterCode.PlayerStatisticsKeys, isOptional: true, elementCls: String })
        public playerStatisticsKeys?: Array<string>;

    }

    /**
     * Defines the request payload for ServerGetPlayerStatistics.
     */
    export class ServerGetPlayerStatisticsRequestData extends GetPlayerStatisticsRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminGetPlayerStatistics.
     */
    export class AdminGetPlayerStatisticsRequestData extends ServerGetPlayerStatisticsRequestData {
    }

    /**
     * Defines the request payload for GetPlayersWithApple.
     */
    export class GetPlayersWithAppleRequestData {
        @GNArrayDataMember({ code: ParameterCode.AppleIds, mustNonNull: true, elementCls: String })
        public appleIds: Array<string>;

        @GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
        public infoRequestParam: InfoRequestParam;

    }

    /**
     * Defines the request payload for ServerGetPlayersWithApple.
     */
    export class ServerGetPlayersWithAppleRequestData extends GetPlayersWithAppleRequestData {
    }

    /**
     * Defines the request payload for AdminGetPlayersWithApple.
     */
    export class AdminGetPlayersWithAppleRequestData extends ServerGetPlayersWithAppleRequestData {
    }

    /**
     * Defines the request payload for GetPlayersWithDisplayName.
     */
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

    /**
     * Defines the request payload for ServerGetPlayersWithDisplayName.
     */
    export class ServerGetPlayersWithDisplayNameRequestData extends GetPlayersWithDisplayNameRequestData {
    }

    /**
     * Defines the request payload for AdminGetPlayersWithDisplayName.
     */
    export class AdminGetPlayersWithDisplayNameRequestData extends ServerGetPlayersWithDisplayNameRequestData {
    }

    /**
     * Defines the request payload for GetPlayersWithFacebook.
     */
    export class GetPlayersWithFacebookRequestData {
        @GNArrayDataMember({ code: ParameterCode.FacebookIds, mustNonNull: true, elementCls: String })
        public facebookIds: Array<string>;

        @GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
        public infoRequestParam: InfoRequestParam;

    }

    /**
     * Defines the request payload for ServerGetPlayersWithFacebook.
     */
    export class ServerGetPlayersWithFacebookRequestData extends GetPlayersWithFacebookRequestData {
    }

    /**
     * Defines the request payload for AdminGetPlayersWithFacebook.
     */
    export class AdminGetPlayersWithFacebookRequestData extends ServerGetPlayersWithFacebookRequestData {
    }

    /**
     * Defines the request payload for GetPlayersWithGenericService.
     */
    export class GetPlayersWithGenericServiceRequestData {
        @StringDataMember({ code: ParameterCode.ServiceName, minLength: 2, maxLength: 32, mustNonNull: true })
        public serviceName: string;

        @GNArrayDataMember({ code: ParameterCode.GenericIds, mustNonNull: true, elementCls: String })
        public genericIds: Array<string>;

        @GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
        public infoRequestParam: InfoRequestParam;

    }

    /**
     * Defines the request payload for ServerGetPlayersWithGenericService.
     */
    export class ServerGetPlayersWithGenericServiceRequestData extends GetPlayersWithGenericServiceRequestData {
    }

    /**
     * Defines the request payload for AdminGetPlayersWithGenericService.
     */
    export class AdminGetPlayersWithGenericServiceRequestData extends ServerGetPlayersWithGenericServiceRequestData {
    }

    /**
     * Defines the request payload for GetPlayersWithGoogle.
     */
    export class GetPlayersWithGoogleRequestData {
        @GNArrayDataMember({ code: ParameterCode.GoogleIds, mustNonNull: true, elementCls: String })
        public googleIds: Array<string>;

        @GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
        public infoRequestParam: InfoRequestParam;

    }

    /**
     * Defines the request payload for ServerGetPlayersWithGoogle.
     */
    export class ServerGetPlayersWithGoogleRequestData extends GetPlayersWithGoogleRequestData {
    }

    /**
     * Defines the request payload for AdminGetPlayersWithGoogle.
     */
    export class AdminGetPlayersWithGoogleRequestData extends ServerGetPlayersWithGoogleRequestData {
    }

    /**
     * Defines the request payload for GetPlayersWithGooglePlayGameService.
     */
    export class GetPlayersWithGooglePlayGameServiceRequestData {
        @GNArrayDataMember({ code: ParameterCode.PlayerIds, mustNonNull: true, elementCls: String })
        public playerIds: Array<string>;

        @GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
        public infoRequestParam: InfoRequestParam;

    }

    /**
     * Defines the request payload for ServerGetPlayersWithGooglePlayGameService.
     */
    export class ServerGetPlayersWithGooglePlayGameServiceRequestData extends GetPlayersWithGooglePlayGameServiceRequestData {
    }

    /**
     * Defines the request payload for AdminGetPlayersWithGooglePlayGameService.
     */
    export class AdminGetPlayersWithGooglePlayGameServiceRequestData extends ServerGetPlayersWithGooglePlayGameServiceRequestData {
    }

    /**
     * Defines the request payload for GetPlayersWithGameCenter.
     */
    export class GetPlayersWithGameCenterRequestData {
        @GNArrayDataMember({ code: ParameterCode.PlayerIds, mustNonNull: true, elementCls: String })
        public playerIds: Array<string>;

        @GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
        public infoRequestParam: InfoRequestParam;

    }

    /**
     * Defines the request payload for ServerGetPlayersWithGameCenter.
     */
    export class ServerGetPlayersWithGameCenterRequestData extends GetPlayersWithGameCenterRequestData {
    }

    /**
     * Defines the request payload for AdminGetPlayersWithGameCenter.
     */
    export class AdminGetPlayersWithGameCenterRequestData extends ServerGetPlayersWithGameCenterRequestData {
    }

    /**
     * Defines the request payload for GetPlayersWithSegment.
     */
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

    /**
     * Defines the request payload for ServerGetPlayersWithSegment.
     */
    export class ServerGetPlayersWithSegmentRequestData extends GetPlayersWithSegmentRequestData {
    }

    /**
     * Defines the request payload for AdminGetPlayersWithSegment.
     */
    export class AdminGetPlayersWithSegmentRequestData extends ServerGetPlayersWithSegmentRequestData {
    }

    /**
     * Defines the request payload for GetPlayersWithTag.
     */
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

    /**
     * Defines the request payload for ServerGetPlayersWithTag.
     */
    export class ServerGetPlayersWithTagRequestData extends GetPlayersWithTagRequestData {
    }

    /**
     * Defines the request payload for AdminGetPlayersWithTag.
     */
    export class AdminGetPlayersWithTagRequestData extends ServerGetPlayersWithTagRequestData {
    }

    /**
     * Defines the request payload for GetSegment.
     */
    export class GetSegmentRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

    }

    /**
     * Defines the request payload for ServerGetSegment.
     */
    export class ServerGetSegmentRequestData extends GetSegmentRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminGetSegment.
     */
    export class AdminGetSegmentRequestData extends ServerGetSegmentRequestData {
    }

    /**
     * Defines the request payload for GetStatisticsLeaderboardAroundPlayer.
     */
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

    /**
     * Defines the request payload for ServerGetStatisticsLeaderboardAroundPlayer.
     */
    export class ServerGetStatisticsLeaderboardAroundPlayerRequestData extends GetStatisticsLeaderboardAroundPlayerRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminGetStatisticsLeaderboardAroundPlayer.
     */
    export class AdminGetStatisticsLeaderboardAroundPlayerRequestData extends ServerGetStatisticsLeaderboardAroundPlayerRequestData {
    }

    /**
     * Defines the request payload for GetStatisticsLeaderboard.
     */
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

    /**
     * Defines the request payload for ServerGetStatisticsLeaderboard.
     */
    export class ServerGetStatisticsLeaderboardRequestData extends GetStatisticsLeaderboardRequestData {
    }

    /**
     * Defines the request payload for AdminGetStatisticsLeaderboard.
     */
    export class AdminGetStatisticsLeaderboardRequestData extends ServerGetStatisticsLeaderboardRequestData {
    }

    /**
     * Defines the request payload for GetCreateLeaderboard.
     */
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

    /**
     * Defines the request payload for ServerGetCreateLeaderboard.
     */
    export class ServerGetCreateLeaderboardRequestData extends GetCreateLeaderboardRequestData {
    }

    /**
     * Defines the request payload for AdminGetCreateLeaderboard.
     */
    export class AdminGetCreateLeaderboardRequestData extends ServerGetCreateLeaderboardRequestData {
    }

    /**
     * Defines the request payload for GetLastLoginLeaderboard.
     */
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

    /**
     * Defines the request payload for ServerGetLastLoginLeaderboard.
     */
    export class ServerGetLastLoginLeaderboardRequestData extends GetLastLoginLeaderboardRequestData {
    }

    /**
     * Defines the request payload for AdminGetLastLoginLeaderboard.
     */
    export class AdminGetLastLoginLeaderboardRequestData extends ServerGetLastLoginLeaderboardRequestData {
    }

    /**
     * Defines the request payload for GetTag.
     */
    export class GetTagRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @GNArrayDataMember({ code: ParameterCode.TagKeys, isOptional: true, elementCls: String })
        public tagKeys?: Array<string>;

    }

    /**
     * Defines the request payload for ServerGetTag.
     */
    export class ServerGetTagRequestData extends GetTagRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminGetTag.
     */
    export class AdminGetTagRequestData extends ServerGetTagRequestData {
    }

    /**
     * Defines the request payload for GetTsCreate.
     */
    export class GetTsCreateRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

    }

    /**
     * Defines the request payload for ServerGetTsCreate.
     */
    export class ServerGetTsCreateRequestData extends GetTsCreateRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminGetTsCreate.
     */
    export class AdminGetTsCreateRequestData extends ServerGetTsCreateRequestData {
    }

    /**
     * Defines the request payload for GetTsLastLogin.
     */
    export class GetTsLastLoginRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

    }

    /**
     * Defines the request payload for ServerGetTsLastLogin.
     */
    export class ServerGetTsLastLoginRequestData extends GetTsLastLoginRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminGetTsLastLogin.
     */
    export class AdminGetTsLastLoginRequestData extends ServerGetTsLastLoginRequestData {
    }

    /**
     * Defines the request payload for LinkAccount.
     */
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

    /**
     * Defines the request payload for ServerLinkAccount.
     */
    export class ServerLinkAccountRequestData extends LinkAccountRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminLinkAccount.
     */
    export class AdminLinkAccountRequestData extends ServerLinkAccountRequestData {
    }

    /**
     * Defines the request payload for LinkAndroidDeviceId.
     */
    export class LinkAndroidDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.AndroidDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
        public androidDeviceId: string;

        @BooleanDataMember({ code: ParameterCode.ForceLink, isOptional: true, defaultValue: false })
        public forceLink?: boolean;

    }

    /**
     * Defines the request payload for ServerLinkAndroidDeviceId.
     */
    export class ServerLinkAndroidDeviceIdRequestData extends LinkAndroidDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminLinkAndroidDeviceId.
     */
    export class AdminLinkAndroidDeviceIdRequestData extends ServerLinkAndroidDeviceIdRequestData {
    }

    /**
     * Defines the request payload for LinkApple.
     */
    export class LinkAppleRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.Token, minLength: 32, maxLength: 2048, mustNonNull: true })
        public token: string;

        @BooleanDataMember({ code: ParameterCode.ForceLink, isOptional: true, defaultValue: false })
        public forceLink?: boolean;

    }

    /**
     * Defines the request payload for ServerLinkApple.
     */
    export class ServerLinkAppleRequestData extends LinkAppleRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminLinkApple.
     */
    export class AdminLinkAppleRequestData extends ServerLinkAppleRequestData {
    }

    /**
     * Defines the request payload for LinkCustomDeviceId.
     */
    export class LinkCustomDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.CustomDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
        public customDeviceId: string;

        @BooleanDataMember({ code: ParameterCode.ForceLink, isOptional: true, defaultValue: false })
        public forceLink?: boolean;

    }

    /**
     * Defines the request payload for ServerLinkCustomDeviceId.
     */
    export class ServerLinkCustomDeviceIdRequestData extends LinkCustomDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminLinkCustomDeviceId.
     */
    export class AdminLinkCustomDeviceIdRequestData extends ServerLinkCustomDeviceIdRequestData {
    }

    /**
     * Defines the request payload for LinkCustomId.
     */
    export class LinkCustomIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.CustomId, minLength: 6, maxLength: 64, mustNonNull: true })
        public customId: string;

        @BooleanDataMember({ code: ParameterCode.ForceLink, isOptional: true, defaultValue: false })
        public forceLink?: boolean;

    }

    /**
     * Defines the request payload for ServerLinkCustomId.
     */
    export class ServerLinkCustomIdRequestData extends LinkCustomIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminLinkCustomId.
     */
    export class AdminLinkCustomIdRequestData extends ServerLinkCustomIdRequestData {
    }

    /**
     * Defines the request payload for LinkEditorDeviceId.
     */
    export class LinkEditorDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.EditorDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
        public editorDeviceId: string;

        @BooleanDataMember({ code: ParameterCode.ForceLink, isOptional: true, defaultValue: false })
        public forceLink?: boolean;

    }

    /**
     * Defines the request payload for ServerLinkEditorDeviceId.
     */
    export class ServerLinkEditorDeviceIdRequestData extends LinkEditorDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminLinkEditorDeviceId.
     */
    export class AdminLinkEditorDeviceIdRequestData extends ServerLinkEditorDeviceIdRequestData {
    }

    /**
     * Defines the request payload for LinkFacebook.
     */
    export class LinkFacebookRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.Token, minLength: 32, maxLength: 2048, mustNonNull: true })
        public token: string;

        @BooleanDataMember({ code: ParameterCode.ForceLink, isOptional: true, defaultValue: false })
        public forceLink?: boolean;

    }

    /**
     * Defines the request payload for ServerLinkFacebook.
     */
    export class ServerLinkFacebookRequestData extends LinkFacebookRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminLinkFacebook.
     */
    export class AdminLinkFacebookRequestData extends ServerLinkFacebookRequestData {
    }

    /**
     * Defines the request payload for LinkGenericService.
     */
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

    /**
     * Defines the request payload for ServerLinkGenericService.
     */
    export class ServerLinkGenericServiceRequestData extends LinkGenericServiceRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminLinkGenericService.
     */
    export class AdminLinkGenericServiceRequestData extends ServerLinkGenericServiceRequestData {
    }

    /**
     * Defines the request payload for LinkGoogle.
     */
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

    /**
     * Defines the request payload for ServerLinkGoogle.
     */
    export class ServerLinkGoogleRequestData extends LinkGoogleRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminLinkGoogle.
     */
    export class AdminLinkGoogleRequestData extends ServerLinkGoogleRequestData {
    }

    /**
     * Defines the request payload for LinkGooglePlayGameService.
     */
    export class LinkGooglePlayGameServiceRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.Token, minLength: 32, maxLength: 2048, mustNonNull: true })
        public token: string;

        @BooleanDataMember({ code: ParameterCode.ForceLink, isOptional: true, defaultValue: false })
        public forceLink?: boolean;

    }

    /**
     * Defines the request payload for ServerLinkGooglePlayGameService.
     */
    export class ServerLinkGooglePlayGameServiceRequestData extends LinkGooglePlayGameServiceRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminLinkGooglePlayGameService.
     */
    export class AdminLinkGooglePlayGameServiceRequestData extends ServerLinkGooglePlayGameServiceRequestData {
    }

    /**
     * Defines the request payload for LinkGameCenter.
     */
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

    /**
     * Defines the request payload for ServerLinkGameCenter.
     */
    export class ServerLinkGameCenterRequestData extends LinkGameCenterRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminLinkGameCenter.
     */
    export class AdminLinkGameCenterRequestData extends ServerLinkGameCenterRequestData {
    }

    /**
     * Defines the request payload for LinkiOSDeviceId.
     */
    export class LinkiOSDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.iOSDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
        public iOSDeviceId: string;

        @BooleanDataMember({ code: ParameterCode.ForceLink, isOptional: true, defaultValue: false })
        public forceLink?: boolean;

    }

    /**
     * Defines the request payload for ServerLinkiOSDeviceId.
     */
    export class ServerLinkiOSDeviceIdRequestData extends LinkiOSDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminLinkiOSDeviceId.
     */
    export class AdminLinkiOSDeviceIdRequestData extends ServerLinkiOSDeviceIdRequestData {
    }

    /**
     * Defines the request payload for LinkLinuxDeviceId.
     */
    export class LinkLinuxDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.LinuxDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
        public linuxDeviceId: string;

        @BooleanDataMember({ code: ParameterCode.ForceLink, isOptional: true, defaultValue: false })
        public forceLink?: boolean;

    }

    /**
     * Defines the request payload for ServerLinkLinuxDeviceId.
     */
    export class ServerLinkLinuxDeviceIdRequestData extends LinkLinuxDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminLinkLinuxDeviceId.
     */
    export class AdminLinkLinuxDeviceIdRequestData extends ServerLinkLinuxDeviceIdRequestData {
    }

    /**
     * Defines the request payload for LinkMacOSDeviceId.
     */
    export class LinkMacOSDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.MacOSDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
        public macOSDeviceId: string;

        @BooleanDataMember({ code: ParameterCode.ForceLink, isOptional: true, defaultValue: false })
        public forceLink?: boolean;

    }

    /**
     * Defines the request payload for ServerLinkMacOSDeviceId.
     */
    export class ServerLinkMacOSDeviceIdRequestData extends LinkMacOSDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminLinkMacOSDeviceId.
     */
    export class AdminLinkMacOSDeviceIdRequestData extends ServerLinkMacOSDeviceIdRequestData {
    }

    /**
     * Defines the request payload for LinkWindowsDeviceId.
     */
    export class LinkWindowsDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.WindowsDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
        public windowsDeviceId: string;

        @BooleanDataMember({ code: ParameterCode.ForceLink, isOptional: true, defaultValue: false })
        public forceLink?: boolean;

    }

    /**
     * Defines the request payload for ServerLinkWindowsDeviceId.
     */
    export class ServerLinkWindowsDeviceIdRequestData extends LinkWindowsDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminLinkWindowsDeviceId.
     */
    export class AdminLinkWindowsDeviceIdRequestData extends ServerLinkWindowsDeviceIdRequestData {
    }

    /**
     * Defines the request payload for LinkWindowsPhoneDeviceId.
     */
    export class LinkWindowsPhoneDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.WindowsPhoneDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
        public windowsPhoneDeviceId: string;

        @BooleanDataMember({ code: ParameterCode.ForceLink, isOptional: true, defaultValue: false })
        public forceLink?: boolean;

    }

    /**
     * Defines the request payload for ServerLinkWindowsPhoneDeviceId.
     */
    export class ServerLinkWindowsPhoneDeviceIdRequestData extends LinkWindowsPhoneDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminLinkWindowsPhoneDeviceId.
     */
    export class AdminLinkWindowsPhoneDeviceIdRequestData extends ServerLinkWindowsPhoneDeviceIdRequestData {
    }

    /**
     * Defines the request payload for RemoveSegment.
     */
    export class RemoveSegmentRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
        public value: string;

    }

    /**
     * Defines the request payload for ServerRemoveSegment.
     */
    export class ServerRemoveSegmentRequestData extends RemoveSegmentRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminRemoveSegment.
     */
    export class AdminRemoveSegmentRequestData extends ServerRemoveSegmentRequestData {
    }

    /**
     * Defines the request payload for RemoveTag.
     */
    export class RemoveTagRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
        public key: string;

    }

    /**
     * Defines the request payload for ServerRemoveTag.
     */
    export class ServerRemoveTagRequestData extends RemoveTagRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminRemoveTag.
     */
    export class AdminRemoveTagRequestData extends ServerRemoveTagRequestData {
    }

    /**
     * Defines the request payload for ResetAccountPassword.
     */
    export class ResetAccountPasswordRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.Password, minLength: 6, maxLength: 64, mustNonNull: true })
        public password: string;

    }

    /**
     * Defines the request payload for ServerResetAccountPassword.
     */
    export class ServerResetAccountPasswordRequestData extends ResetAccountPasswordRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminResetAccountPassword.
     */
    export class AdminResetAccountPasswordRequestData extends ServerResetAccountPasswordRequestData {
    }

    /**
     * Defines the request payload for SetAvatar.
     */
    export class SetAvatarRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @NumberDataMember({ code: ParameterCode.Type, mustInt: true })
        public type: number;

        @StringDataMember({ code: ParameterCode.Value, minLength: 1, maxLength: 128, mustNonNull: true })
        public value: string;

    }

    /**
     * Defines the request payload for ServerSetAvatar.
     */
    export class ServerSetAvatarRequestData extends SetAvatarRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminSetAvatar.
     */
    export class AdminSetAvatarRequestData extends ServerSetAvatarRequestData {
    }

    /**
     * Defines the request payload for SetCountryCode.
     */
    export class SetCountryCodeRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.CountryCode, minLength: 2, maxLength: 32 })
        public countryCode: string;

    }

    /**
     * Defines the request payload for ServerSetCountryCode.
     */
    export class ServerSetCountryCodeRequestData extends SetCountryCodeRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminSetCountryCode.
     */
    export class AdminSetCountryCodeRequestData extends ServerSetCountryCodeRequestData {
    }

    /**
     * Defines the request payload for SetCustomData.
     */
    export class SetCustomDataRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @GNArrayDataMember({ code: ParameterCode.CustomDatas, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: CustomDataParam })
        public customDatas: Array<CustomDataParam>;

    }

    /**
     * Defines the request payload for ServerSetCustomData.
     */
    export class ServerSetCustomDataRequestData extends SetCustomDataRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminSetCustomData.
     */
    export class AdminSetCustomDataRequestData extends ServerSetCustomDataRequestData {
    }

    /**
     * Defines the request payload for SetDisplayName.
     */
    export class SetDisplayNameRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.DisplayName, minLength: 5, maxLength: 32, mustNonNull: true })
        public displayName: string;

        @BooleanDataMember({ code: ParameterCode.UniqueDisplayName, defaultValue: false, isOptional: true })
        public uniqueDisplayName?: boolean;

    }

    /**
     * Defines the request payload for ServerSetDisplayName.
     */
    export class ServerSetDisplayNameRequestData extends SetDisplayNameRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminSetDisplayName.
     */
    export class AdminSetDisplayNameRequestData extends ServerSetDisplayNameRequestData {
    }

    /**
     * Defines the request payload for SetEmail.
     */
    export class SetEmailRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.Email, minLength: 5, maxLength: 128, mustNonNull: true })
        public email: string;

    }

    /**
     * Defines the request payload for ServerSetEmail.
     */
    export class ServerSetEmailRequestData extends SetEmailRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminSetEmail.
     */
    export class AdminSetEmailRequestData extends ServerSetEmailRequestData {
    }

    /**
     * Defines the request payload for SetPlayerBan.
     */
    export class SetPlayerBanRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @NumberDataMember({ code: ParameterCode.TsExpire })
        public tsExpire: number;

        @StringDataMember({ code: ParameterCode.Reason })
        public reason: string;

    }

    /**
     * Defines the request payload for ServerSetPlayerBan.
     */
    export class ServerSetPlayerBanRequestData extends SetPlayerBanRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminSetPlayerBan.
     */
    export class AdminSetPlayerBanRequestData extends ServerSetPlayerBanRequestData {
    }

    /**
     * Defines the request payload for ChangePlayerCurrency.
     */
    export class ChangePlayerCurrencyRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @GNArrayDataMember({ code: ParameterCode.PlayerCurrencies, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: PlayerCurrencyParam })
        public playerCurrencies: Array<PlayerCurrencyParam>;

        @StringDataMember({ code: ParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
        public log?: string;

    }

    /**
     * Defines the request payload for ServerChangePlayerCurrency.
     */
    export class ServerChangePlayerCurrencyRequestData extends ChangePlayerCurrencyRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminChangePlayerCurrency.
     */
    export class AdminChangePlayerCurrencyRequestData extends ServerChangePlayerCurrencyRequestData {
    }

    /**
     * Defines the request payload for SetPlayerData.
     */
    export class SetPlayerDataRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @GNArrayDataMember({ code: ParameterCode.PlayerDatas, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: PlayerDataParam })
        public playerDatas: Array<PlayerDataParam>;

    }

    /**
     * Defines the request payload for ServerSetPlayerData.
     */
    export class ServerSetPlayerDataRequestData extends SetPlayerDataRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminSetPlayerData.
     */
    export class AdminSetPlayerDataRequestData extends ServerSetPlayerDataRequestData {
    }

    /**
     * Defines the request payload for ChangePlayerStatistics.
     */
    export class ChangePlayerStatisticsRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @GNArrayDataMember({ code: ParameterCode.PlayerStatistics, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: PlayerStatisticsParam })
        public playerStatistics: Array<PlayerStatisticsParam>;

        @StringDataMember({ code: ParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
        public log?: string;

    }

    /**
     * Defines the request payload for ServerChangePlayerStatistics.
     */
    export class ServerChangePlayerStatisticsRequestData extends ChangePlayerStatisticsRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminChangePlayerStatistics.
     */
    export class AdminChangePlayerStatisticsRequestData extends ServerChangePlayerStatisticsRequestData {
    }

    /**
     * Defines the request payload for SetTag.
     */
    export class SetTagRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
        public key: string;

        @StringDataMember({ code: ParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
        public value: string;

    }

    /**
     * Defines the request payload for ServerSetTag.
     */
    export class ServerSetTagRequestData extends SetTagRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminSetTag.
     */
    export class AdminSetTagRequestData extends ServerSetTagRequestData {
    }

    /**
     * Reads currency change logs for the current or target master player.
     * Pagination is token-based rather than skip-based.
     */
    export class GetCurrencyLogRequestData {
        @GNArrayDataMember({ code: ParameterCode.Keys, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: String, isOptional: true })
        public keys?: Array<string>;

        /**
         * Optional self-target shortcut on the client route.
         */
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true, isOptional: true })
        public userId?: string;

        @NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
        public limit?: number;

        /**
         * Continuation token returned by the previous page.
         */
        @StringDataMember({ code: ParameterCode.Token, minLength: 24, maxLength: 24, mustNonNull: true, isOptional: true })
        public token?: string;

    }

    /**
     * Defines the request payload for ServerGetCurrencyLog.
     */
    export class ServerGetCurrencyLogRequestData extends GetCurrencyLogRequestData {
    }

    /**
     * Defines the request payload for AdminGetCurrencyLog.
     */
    export class AdminGetCurrencyLogRequestData extends ServerGetCurrencyLogRequestData {
    }

    /**
     * Reads statistic change logs for the current or target master player.
     * Pagination is token-based rather than skip-based.
     */
    export class GetStatisticsLogRequestData {
        @GNArrayDataMember({ code: ParameterCode.Keys, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: String, isOptional: true })
        public keys?: Array<string>;

        /**
         * Optional self-target shortcut on the client route.
         */
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true, isOptional: true })
        public userId?: string;

        @NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
        public limit?: number;

        /**
         * Continuation token returned by the previous page.
         */
        @StringDataMember({ code: ParameterCode.Token, minLength: 24, maxLength: 24, mustNonNull: true, isOptional: true })
        public token?: string;

    }

    /**
     * Defines the request payload for ServerGetStatisticsLog.
     */
    export class ServerGetStatisticsLogRequestData extends GetStatisticsLogRequestData {
    }

    /**
     * Defines the request payload for AdminGetStatisticsLog.
     */
    export class AdminGetStatisticsLogRequestData extends ServerGetStatisticsLogRequestData {
    }

    /**
     * Defines the request payload for UpdateTsLastLogin.
     */
    export class UpdateTsLastLoginRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

    }

    /**
     * Defines the request payload for ServerUpdateTsLastLogin.
     */
    export class ServerUpdateTsLastLoginRequestData extends UpdateTsLastLoginRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminUpdateTsLastLogin.
     */
    export class AdminUpdateTsLastLoginRequestData extends ServerUpdateTsLastLoginRequestData {
    }

    /**
     * Defines the request payload for UnlinkAccount.
     */
    export class UnlinkAccountRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.Username, minLength: 6, maxLength: 32, mustNonNull: true })
        public username: string;

    }

    /**
     * Defines the request payload for ServerUnlinkAccount.
     */
    export class ServerUnlinkAccountRequestData extends UnlinkAccountRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminUnlinkAccount.
     */
    export class AdminUnlinkAccountRequestData extends ServerUnlinkAccountRequestData {
    }

    /**
     * Defines the request payload for UnlinkAndroidDeviceId.
     */
    export class UnlinkAndroidDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.AndroidDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
        public androidDeviceId: string;

    }

    /**
     * Defines the request payload for ServerUnlinkAndroidDeviceId.
     */
    export class ServerUnlinkAndroidDeviceIdRequestData extends UnlinkAndroidDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminUnlinkAndroidDeviceId.
     */
    export class AdminUnlinkAndroidDeviceIdRequestData extends ServerUnlinkAndroidDeviceIdRequestData {
    }

    /**
     * Defines the request payload for UnlinkApple.
     */
    export class UnlinkAppleRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.AppleId, minLength: 6, maxLength: 64, mustNonNull: true })
        public appleId: string;

    }

    /**
     * Defines the request payload for ServerUnlinkApple.
     */
    export class ServerUnlinkAppleRequestData extends UnlinkAppleRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminUnlinkApple.
     */
    export class AdminUnlinkAppleRequestData extends ServerUnlinkAppleRequestData {
    }

    /**
     * Defines the request payload for UnlinkCustomDeviceId.
     */
    export class UnlinkCustomDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.CustomDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
        public customDeviceId: string;

    }

    /**
     * Defines the request payload for ServerUnlinkCustomDeviceId.
     */
    export class ServerUnlinkCustomDeviceIdRequestData extends UnlinkCustomDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminUnlinkCustomDeviceId.
     */
    export class AdminUnlinkCustomDeviceIdRequestData extends ServerUnlinkCustomDeviceIdRequestData {
    }

    /**
     * Defines the request payload for UnlinkCustomId.
     */
    export class UnlinkCustomIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.CustomId, minLength: 6, maxLength: 64, mustNonNull: true })
        public customId: string;

    }

    /**
     * Defines the request payload for ServerUnlinkCustomId.
     */
    export class ServerUnlinkCustomIdRequestData extends UnlinkCustomIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminUnlinkCustomId.
     */
    export class AdminUnlinkCustomIdRequestData extends ServerUnlinkCustomIdRequestData {
    }

    /**
     * Defines the request payload for UnlinkEditorDeviceId.
     */
    export class UnlinkEditorDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.EditorDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
        public editorDeviceId: string;

    }

    /**
     * Defines the request payload for ServerUnlinkEditorDeviceId.
     */
    export class ServerUnlinkEditorDeviceIdRequestData extends UnlinkEditorDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminUnlinkEditorDeviceId.
     */
    export class AdminUnlinkEditorDeviceIdRequestData extends ServerUnlinkEditorDeviceIdRequestData {
    }

    /**
     * Defines the request payload for UnlinkFacebook.
     */
    export class UnlinkFacebookRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.FacebookId, minLength: 6, maxLength: 64, mustNonNull: true })
        public facebookId: string;

    }

    /**
     * Defines the request payload for ServerUnlinkFacebook.
     */
    export class ServerUnlinkFacebookRequestData extends UnlinkFacebookRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminUnlinkFacebook.
     */
    export class AdminUnlinkFacebookRequestData extends ServerUnlinkFacebookRequestData {
    }

    /**
     * Defines the request payload for UnlinkGenericService.
     */
    export class UnlinkGenericServiceRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.ServiceName, minLength: 6, maxLength: 32, mustNonNull: true })
        public serviceName: string;

        @StringDataMember({ code: ParameterCode.ServiceId, minLength: 6, maxLength: 64, mustNonNull: true })
        public serviceId: string;

    }

    /**
     * Defines the request payload for ServerUnlinkGenericService.
     */
    export class ServerUnlinkGenericServiceRequestData extends UnlinkGenericServiceRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminUnlinkGenericService.
     */
    export class AdminUnlinkGenericServiceRequestData extends ServerUnlinkGenericServiceRequestData {
    }

    /**
     * Defines the request payload for UnlinkGoogle.
     */
    export class UnlinkGoogleRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.GoogleId, minLength: 6, maxLength: 32, mustNonNull: true })
        public googleId: string;

    }

    /**
     * Defines the request payload for ServerUnlinkGoogle.
     */
    export class ServerUnlinkGoogleRequestData extends UnlinkGoogleRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminUnlinkGoogle.
     */
    export class AdminUnlinkGoogleRequestData extends ServerUnlinkGoogleRequestData {
    }

    /**
     * Defines the request payload for UnlinkGooglePlayGameService.
     */
    export class UnlinkGooglePlayGameServiceRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.PlayerId, minLength: 6, maxLength: 64, mustNonNull: true })
        public playerId: string;

    }

    /**
     * Defines the request payload for ServerUnlinkGooglePlayGameService.
     */
    export class ServerUnlinkGooglePlayGameServiceRequestData extends UnlinkGooglePlayGameServiceRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminUnlinkGooglePlayGameService.
     */
    export class AdminUnlinkGooglePlayGameServiceRequestData extends ServerUnlinkGooglePlayGameServiceRequestData {
    }

    /**
     * Defines the request payload for UnlinkGameCenter.
     */
    export class UnlinkGameCenterRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.PlayerId, minLength: 6, maxLength: 64, mustNonNull: true })
        public playerId: string;

    }

    /**
     * Defines the request payload for ServerUnlinkGameCenter.
     */
    export class ServerUnlinkGameCenterRequestData extends UnlinkGameCenterRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminUnlinkGameCenter.
     */
    export class AdminUnlinkGameCenterRequestData extends ServerUnlinkGameCenterRequestData {
    }

    /**
     * Defines the request payload for UnlinkiOSDeviceId.
     */
    export class UnlinkiOSDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.iOSDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
        public iOSDeviceId: string;

    }

    /**
     * Defines the request payload for ServerUnlinkiOSDeviceId.
     */
    export class ServerUnlinkiOSDeviceIdRequestData extends UnlinkiOSDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminUnlinkiOSDeviceId.
     */
    export class AdminUnlinkiOSDeviceIdRequestData extends ServerUnlinkiOSDeviceIdRequestData {
    }

    /**
     * Defines the request payload for UnlinkLinuxDeviceId.
     */
    export class UnlinkLinuxDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.LinuxDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
        public linuxDeviceId: string;

    }

    /**
     * Defines the request payload for ServerUnlinkLinuxDeviceId.
     */
    export class ServerUnlinkLinuxDeviceIdRequestData extends UnlinkLinuxDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminUnlinkLinuxDeviceId.
     */
    export class AdminUnlinkLinuxDeviceIdRequestData extends ServerUnlinkLinuxDeviceIdRequestData {
    }

    /**
     * Defines the request payload for UnlinkMacOSDeviceId.
     */
    export class UnlinkMacOSDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.MacOSDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
        public macOSDeviceId: string;

    }

    /**
     * Defines the request payload for ServerUnlinkMacOSDeviceId.
     */
    export class ServerUnlinkMacOSDeviceIdRequestData extends UnlinkMacOSDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminUnlinkMacOSDeviceId.
     */
    export class AdminUnlinkMacOSDeviceIdRequestData extends ServerUnlinkMacOSDeviceIdRequestData {
    }

    /**
     * Defines the request payload for UnlinkWindowsDeviceId.
     */
    export class UnlinkWindowsDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.WindowsDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
        public windowsDeviceId: string;

    }

    /**
     * Defines the request payload for ServerUnlinkWindowsDeviceId.
     */
    export class ServerUnlinkWindowsDeviceIdRequestData extends UnlinkWindowsDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminUnlinkWindowsDeviceId.
     */
    export class AdminUnlinkWindowsDeviceIdRequestData extends ServerUnlinkWindowsDeviceIdRequestData {
    }

    /**
     * Defines the request payload for UnlinkWindowsPhoneDeviceId.
     */
    export class UnlinkWindowsPhoneDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.WindowsPhoneDeviceId, minLength: 6, maxLength: 64, mustNonNull: true })
        public windowsPhoneDeviceId: string;

    }

    /**
     * Defines the request payload for ServerUnlinkWindowsPhoneDeviceId.
     */
    export class ServerUnlinkWindowsPhoneDeviceIdRequestData extends UnlinkWindowsPhoneDeviceIdRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminUnlinkWindowsPhoneDeviceId.
     */
    export class AdminUnlinkWindowsPhoneDeviceIdRequestData extends ServerUnlinkWindowsPhoneDeviceIdRequestData {
    }

    /**
     * Sends a backend-routed socket event to the current or target player's active socket session.
     * This is still an HTTP MasterPlayer operation, not a raw socket transport call.
     */
    export class SendSocketOperationEventRequestData {
        /**
         * Optional self-target shortcut on the client route.
         */
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        /**
         * Backend-defined event code forwarded to socket listeners.
         */
        @StringDataMember({ code: ParameterCode.EventCode, minLength: 1, maxLength: 64 })
        public eventCode: string;

        /**
         * Optional raw event payload delivered with the socket event.
         */
        @GNHashtableDataMember({ code: ParameterCode.EventParameters, mustNonNull: true, minLength: 0, maxLength: 128, isOptional: true })
        public eventParameters?: GNHashtable;

    }

    /**
     * Defines the request payload for ServerSendSocketOperationEvent.
     */
    export class ServerSendSocketOperationEventRequestData extends SendSocketOperationEventRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminSendSocketOperationEvent.
     */
    export class AdminSendSocketOperationEventRequestData extends ServerSendSocketOperationEventRequestData {
    }

    /**
     * Defines the request payload for SendEmail.
     */
    export class SendEmailRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.Subject, minLength: 2, maxLength: 256, mustNonNull: true })
        public subject: string;

        @StringDataMember({ code: ParameterCode.ContentHtml, minLength: 2, maxLength: 8192, mustNonNull: true })
        public contentHtml: string;

    }

    /**
     * Defines the request payload for ServerSendEmail.
     */
    export class ServerSendEmailRequestData extends SendEmailRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminSendEmail.
     */
    export class AdminSendEmailRequestData extends ServerSendEmailRequestData {
    }

    /**
     * Registers a push-notification endpoint for the current or target master player.
     */
    export class AddPushNotificationRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        /**
         * Device push token issued by the push provider.
         */
        @StringDataMember({ code: ParameterCode.Token, minLength: 10, maxLength: 256, mustNonNull: true })
        public token: string;

        /**
         * Push platform mapped by the public `PushPlatformType` enum.
         */
        @NumberDataMember({ code: ParameterCode.PlatformType, minValue: 1, mustInt: true })
        public platformType: number;

    }

    /**
     * Defines the request payload for ServerAddPushNotification.
     */
    export class ServerAddPushNotificationRequestData extends AddPushNotificationRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminAddPushNotification.
     */
    export class AdminAddPushNotificationRequestData extends ServerAddPushNotificationRequestData {
    }

    /**
     * Reads registered push-notification endpoints for the current or target master player.
     */
    export class GetPushNotificationRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

    }

    /**
     * Defines the request payload for ServerGetPushNotification.
     */
    export class ServerGetPushNotificationRequestData extends GetPushNotificationRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminGetPushNotification.
     */
    export class AdminGetPushNotificationRequestData extends ServerGetPushNotificationRequestData {
    }

    /**
     * Defines the request payload for RemovePushNotification.
     */
    export class RemovePushNotificationRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.PushId, minLength: 8, maxLength: 8, mustNonNull: true })
        public pushId: string;

    }

    /**
     * Defines the request payload for ServerRemovePushNotification.
     */
    export class ServerRemovePushNotificationRequestData extends RemovePushNotificationRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminRemovePushNotification.
     */
    export class AdminRemovePushNotificationRequestData extends ServerRemovePushNotificationRequestData {
    }

    /**
     * Triggers a push-notification send workflow for the current or target master player.
     */
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

        /**
         * Platform-specific custom payload forwarded to the push provider.
         */
        @GNHashtableDataMember({ code: ParameterCode.Data, isOptional: true })
        public data?: GNHashtable;

    }

    /**
     * Defines the request payload for ServerSendPushNotification.
     */
    export class ServerSendPushNotificationRequestData extends SendPushNotificationRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminSendPushNotification.
     */
    export class AdminSendPushNotificationRequestData extends ServerSendPushNotificationRequestData {
    }

    /**
     * Describes one registered push endpoint stored for a player.
     */
    export class PushNotificationItem {
        @StringDataMember({ code: ParameterCode.Token })
        public token: string;

        @StringDataMember({ code: ParameterCode.PushId })
        public pushId: string;

        /**
         * Push platform mapped by the public `PushPlatformType` enum.
         */
        @NumberDataMember({ code: ParameterCode.PlatformType })
        public platformType: number;

    }

    /**
     * Reports the latest known login timestamp and active socket identity for a player.
     */
    export class OnlineStatusItem {
        @NumberDataMember({ code: ParameterCode.TsLastLogin })
        public tsLastLogin: number;

        @StringDataMember({ code: ParameterCode.SocketId })
        public socketId: string;

    }

    /**
     * Contains the optional fields requested through `InfoRequestParam`.
     */
    export class InfoResponseParameters {
        /**
         * Linked external identity snapshot.
         */
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

        /**
         * Registered push endpoints when `pushNotifications` was requested.
         */
        @GNArrayDataMember({ code: ParameterCode.PushNotifications, isOptional: true, elementCls: MasterPlayerModels.PushNotificationItem })
        public pushNotifications?: Array<MasterPlayerModels.PushNotificationItem>;

        @GNHashtableDataMember({ code: ParameterCode.OnlineStatus, isOptional: true })
        public onlineStatus?: OnlineStatusItem;

    }

    /**
     * Base master-player response envelope.
     */
    export class MasterPlayerResponseData {
        /**
         * Optional field bag controlled by the corresponding `InfoRequestParam`.
         */
        @GNHashtableDataMember({ code: ParameterCode.InfoResponseParameters })
        public infoResponseParameters: InfoResponseParameters;

    }

    /**
     * Master-player envelope for generic-service link or lookup flows.
     */
    export class GenericServiceMasterPlayerResponseData extends MasterPlayerResponseData {
        /**
         * Provider-specific error text returned by the backend when available.
         */
        @StringDataMember({ code: ParameterCode.ErrorMessage, isOptional: true })
        public errorMessage?: string;

    }

    /**
     * Master-player envelope that also exposes the resolved master-player user ID.
     */
    export class MasterPlayerWithUserIdResponseData extends MasterPlayerResponseData {
        @StringDataMember({ code: ParameterCode.UserId })
        public userId: string;

    }

    /**
     * Defines the response payload for MasterPlayerWithAppleId.
     */
    export class MasterPlayerWithAppleIdResponseData extends MasterPlayerWithUserIdResponseData {
        @StringDataMember({ code: ParameterCode.AppleId })
        public appleId: string;

    }

    /**
     * Defines the response payload for GetPlayersWithApple.
     */
    export class GetPlayersWithAppleResponseData {
        @GNArrayDataMember({ code: ParameterCode.Results, elementCls: MasterPlayerWithAppleIdResponseData })
        public results: Array<MasterPlayerWithAppleIdResponseData>;

    }

    /**
     * Defines the response payload for MasterPlayersWithUserId.
     */
    export class MasterPlayersWithUserIdResponseData {
        @GNArrayDataMember({ code: ParameterCode.Results, elementCls: MasterPlayerWithUserIdResponseData })
        public results: Array<MasterPlayerWithUserIdResponseData>;

    }

    /**
     * Defines the response payload for MasterPlayerWithFacebookId.
     */
    export class MasterPlayerWithFacebookIdResponseData extends MasterPlayerWithUserIdResponseData {
        @StringDataMember({ code: ParameterCode.FacebookId })
        public facebookId: string;

    }

    /**
     * Defines the response payload for GetPlayersWithFacebook.
     */
    export class GetPlayersWithFacebookResponseData {
        @GNArrayDataMember({ code: ParameterCode.Results, elementCls: MasterPlayerWithFacebookIdResponseData })
        public results: Array<MasterPlayerWithFacebookIdResponseData>;

    }

    /**
     * Defines the response payload for MasterPlayerWithGenericServiceId.
     */
    export class MasterPlayerWithGenericServiceIdResponseData extends MasterPlayerWithUserIdResponseData {
        @StringDataMember({ code: ParameterCode.ServiceId })
        public serviceId: string;

    }

    /**
     * Defines the response payload for GetPlayersWithGenericService.
     */
    export class GetPlayersWithGenericServiceResponseData {
        @GNArrayDataMember({ code: ParameterCode.Results, elementCls: MasterPlayerWithGenericServiceIdResponseData })
        public results: Array<MasterPlayerWithGenericServiceIdResponseData>;

    }

    /**
     * Defines the response payload for MasterPlayerWithGoogleId.
     */
    export class MasterPlayerWithGoogleIdResponseData extends MasterPlayerWithUserIdResponseData {
        @StringDataMember({ code: ParameterCode.GoogleId })
        public googleId: string;

    }

    /**
     * Defines the response payload for GetPlayersWithGoogle.
     */
    export class GetPlayersWithGoogleResponseData {
        @GNArrayDataMember({ code: ParameterCode.Results, elementCls: MasterPlayerWithGoogleIdResponseData })
        public results: Array<MasterPlayerWithGoogleIdResponseData>;

    }

    /**
     * Defines the response payload for MasterPlayerWithPlayerId.
     */
    export class MasterPlayerWithPlayerIdResponseData extends MasterPlayerWithUserIdResponseData {
        @StringDataMember({ code: ParameterCode.PlayerId })
        public playerId: string;

    }

    /**
     * Defines the response payload for GetPlayersWithGooglePlayGameService.
     */
    export class GetPlayersWithGooglePlayGameServiceResponseData {
        @GNArrayDataMember({ code: ParameterCode.Results, elementCls: MasterPlayerWithPlayerIdResponseData })
        public results: Array<MasterPlayerWithPlayerIdResponseData>;

    }

    /**
     * Defines the response payload for GetPlayersWithGameCenter.
     */
    export class GetPlayersWithGameCenterResponseData {
        @GNArrayDataMember({ code: ParameterCode.Results, elementCls: MasterPlayerWithPlayerIdResponseData })
        public results: Array<MasterPlayerWithPlayerIdResponseData>;

    }

    /**
     * One leaderboard row for master-player ranking endpoints.
     */
    export class MasterPlayerLeaderboardResponseData extends MasterPlayerWithUserIdResponseData {
        /**
         * Ranking position returned by the backend leaderboard implementation.
         */
        @NumberDataMember({ code: ParameterCode.Position })
        public position: number;

        /**
         * Optional archived score value from the last leaderboard backup.
         */
        @NumberDataMember({ code: ParameterCode.BackupValue, isOptional: true })
        public backupValue?: number;

    }

    /**
     * Describes one statistics or currency change log entry.
     */
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

    /**
     * Returns a statistics leaderboard page plus its optional snapshot timestamp.
     */
    export class GetStatisticsLeaderboardResponseData {
        @GNArrayDataMember({ code: ParameterCode.Results, elementCls: MasterPlayerLeaderboardResponseData })
        public results: Array<MasterPlayerLeaderboardResponseData>;

        /**
         * Snapshot timestamp used for this leaderboard page when returned by the backend.
         */
        @NumberDataMember({ code: ParameterCode.TsCreate, isOptional: true })
        public tsCreate: number;

    }

    /**
     * Defines the response payload for GetCurrencyLeaderboard.
     */
    export class GetCurrencyLeaderboardResponseData {
        @GNArrayDataMember({ code: ParameterCode.Results, elementCls: MasterPlayerLeaderboardResponseData })
        public results: Array<MasterPlayerLeaderboardResponseData>;

    }

    /**
     * Defines the response payload for GetCreateLeaderboard.
     */
    export class GetCreateLeaderboardResponseData {
        @GNArrayDataMember({ code: ParameterCode.Results, elementCls: MasterPlayerLeaderboardResponseData })
        public results: Array<MasterPlayerLeaderboardResponseData>;

    }

    /**
     * Defines the response payload for GetLastLoginLeaderboard.
     */
    export class GetLastLoginLeaderboardResponseData {
        @GNArrayDataMember({ code: ParameterCode.Results, elementCls: MasterPlayerLeaderboardResponseData })
        public results: Array<MasterPlayerLeaderboardResponseData>;

    }

    /**
     * Defines the request payload for GetCurrencyLeaderboard.
     */
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

    /**
     * Defines the request payload for ServerGetCurrencyLeaderboard.
     */
    export class ServerGetCurrencyLeaderboardRequestData extends GetCurrencyLeaderboardRequestData {
    }

    /**
     * Defines the request payload for AdminGetCurrencyLeaderboard.
     */
    export class AdminGetCurrencyLeaderboardRequestData extends ServerGetCurrencyLeaderboardRequestData {
    }

    /**
     * Returns one page of statistics logs.
     */
    export class GetStatisticsLogResponseData {
        @GNArrayDataMember({ code: ParameterCode.Results, elementCls: MasterPlayerLogResponseData })
        public results: Array<MasterPlayerLogResponseData>;

        /**
         * Continuation token for the next page, or `undefined` when pagination is exhausted.
         */
        @StringDataMember({ code: ParameterCode.Token, isOptional: true })
        public token?: string;

    }

    /**
     * Returns one page of currency logs.
     */
    export class GetCurrencyLogResponseData {
        @GNArrayDataMember({ code: ParameterCode.Results, elementCls: MasterPlayerLogResponseData })
        public results: Array<MasterPlayerLogResponseData>;

        /**
         * Continuation token for the next page, or `undefined` when pagination is exhausted.
         */
        @StringDataMember({ code: ParameterCode.Token, isOptional: true })
        public token?: string;

    }

    /**
     * Returns the backend-generated push endpoint ID.
     */
    export class AddPushNotificationResponseData {
        @StringDataMember({ code: ParameterCode.PushId })
        public pushId: string;

    }

    /**
     * Returns the backend send status message for push-dispatch workflows.
     */
    export class SendPushNotificationResponseData {
        @StringDataMember({ code: ParameterCode.Message })
        public message: string;

    }

    /**
     * Defines the request payload for GetOnlineStatus.
     */
    export class GetOnlineStatusRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

    }

    /**
     * Defines the request payload for ServerGetOnlineStatus.
     */
    export class ServerGetOnlineStatusRequestData extends GetOnlineStatusRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminGetOnlineStatus.
     */
    export class AdminGetOnlineStatusRequestData extends ServerGetOnlineStatusRequestData {
    }

    /**
     * Defines an intentionally empty response payload.
     */
    export class EmptyResponseData {
    }

}
