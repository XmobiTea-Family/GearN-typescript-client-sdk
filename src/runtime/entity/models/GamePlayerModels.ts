import { GNHashtable } from "./../../common/GNData";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";
import { GenericModels } from "./GenericModels";

/**
 * Reusable request and response DTOs for the GamePlayer domain.
 *
 * GamePlayer operations target the **account-level** player
 * record — the per-game profile that sits between the master
 * player and the per-character profiles. The DTOs here are
 * organised into three role variants:
 *
 * - **Client variants** (no prefix): routed through
 *   `GNNetwork.gamePlayer`, target the authenticated user. The
 *   `userId` is implicit (taken from the cached
 *   {@link AuthenticateStatus}) so most client-flavour DTOs
 *   either omit it or expose only a small filtered slice.
 * - **`Server*` variants**: routed through
 *   `GNNetwork.gamePlayer.server`. Always require an explicit
 *   `userId` so a trusted backend can act on behalf of an
 *   arbitrary player.
 * - **`Admin*` variants**: routed through
 *   `GNNetwork.gamePlayer.admin`. Same shape as `Server*` plus
 *   any extra knobs the backend exposes only to admin tokens
 *   (forced overrides, bypass-validation flags, ...).
 *
 * Validation rules declared on each `@*DataMember` decorator
 * (`mustNonNull`, `minLength`, `maxLength`, `minValue`,
 * `maxValue`) are enforced server-side; failures surface as
 * {@link InvalidMember} entries on the response with the
 * matching {@link InvalidMemberType}.
 */
export namespace GamePlayerModels {
    /**
     * Selects which optional game-player fields and lightweight relations should be returned.
     * Boolean flags default to `false`; key arrays narrow list-style fields to specific keys only.
     */
    export class InfoRequestParam {
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

        @BooleanDataMember({ code: ParameterCode.TsLastLogin, isOptional: true, defaultValue: false })
        public tsLastLogin?: boolean;

        /**
         * Includes relation items for characters owned by the player, optionally filtered by `characterCatalogIds`.
         */
        @BooleanDataMember({ code: ParameterCode.PlayerCharacters, isOptional: true, defaultValue: false })
        public playerCharacters?: boolean;

        /**
         * Includes relation items for inventory owned by the player, optionally filtered by `itemCatalogIds`.
         */
        @BooleanDataMember({ code: ParameterCode.PlayerInventories, isOptional: true, defaultValue: false })
        public playerInventories?: boolean;

        /**
         * Includes relation items for groups joined or owned by the player, optionally filtered by `groupCatalogIds`.
         */
        @BooleanDataMember({ code: ParameterCode.PlayerGroups, isOptional: true, defaultValue: false })
        public playerGroups?: boolean;

        /**
         * Includes relation items for friends attached to the player, optionally filtered by `friendCatalogIds`.
         */
        @BooleanDataMember({ code: ParameterCode.PlayerFriends, isOptional: true, defaultValue: false })
        public playerFriends?: boolean;

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

        /**
         * Restricts `playerCharacters` to relation items whose catalog IDs match this list.
         */
        @GNArrayDataMember({ code: ParameterCode.CharacterCatalogIds, isOptional: true, elementCls: String })
        public characterCatalogIds?: Array<string>;

        /**
         * Restricts `playerInventories` to relation items whose catalog IDs match this list.
         */
        @GNArrayDataMember({ code: ParameterCode.ItemCatalogIds, isOptional: true, elementCls: String })
        public itemCatalogIds?: Array<string>;

        /**
         * Restricts `playerGroups` to relation items whose catalog IDs match this list.
         */
        @GNArrayDataMember({ code: ParameterCode.GroupCatalogIds, isOptional: true, elementCls: String })
        public groupCatalogIds?: Array<string>;

        /**
         * Restricts `playerFriends` to relation items whose catalog IDs match this list.
         */
        @GNArrayDataMember({ code: ParameterCode.FriendCatalogIds, isOptional: true, elementCls: String })
        public friendCatalogIds?: Array<string>;

    }

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
     * Describes one game-player member included when creating a group.
     */
    export class GroupMemberParam {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public userId: string;

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
     * Creates a friend relation between the current or target game player and another game player.
     */
    export class AddPlayerFriendRequestData {
        /**
         * Optional self-target shortcut on the client route.
         */
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        /**
         * Target friend user ID.
         */
        @StringDataMember({ code: ParameterCode.FriendId, minLength: 10, maxLength: 10, mustNonNull: true })
        public friendId: string;

        /**
         * Friend catalog used to create the relation record.
         */
        @StringDataMember({ code: ParameterCode.CatalogId, minLength: 2, maxLength: 32, mustNonNull: true })
        public catalogId: string;

    }

    /**
     * Defines the request payload for ServerAddPlayerFriend.
     */
    export class ServerAddPlayerFriendRequestData extends AddPlayerFriendRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminAddPlayerFriend.
     */
    export class AdminAddPlayerFriendRequestData extends ServerAddPlayerFriendRequestData {
    }

    /**
     * Defines the request payload for AddSegment.
     */
    export class AddSegmentRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.Value, minLength: 6, maxLength: 32, mustNonNull: true })
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
     * Defines the request payload for GetFriendStatisticsLeaderboardAroundPlayer.
     */
    export class GetFriendStatisticsLeaderboardAroundPlayerRequestData {
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
     * Defines the request payload for ServerGetFriendStatisticsLeaderboardAroundPlayer.
     */
    export class ServerGetFriendStatisticsLeaderboardAroundPlayerRequestData extends GetFriendStatisticsLeaderboardAroundPlayerRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminGetFriendStatisticsLeaderboardAroundPlayer.
     */
    export class AdminGetFriendStatisticsLeaderboardAroundPlayerRequestData extends ServerGetFriendStatisticsLeaderboardAroundPlayerRequestData {
    }

    /**
     * Defines the request payload for GetFriendStatisticsLeaderboard.
     */
    export class GetFriendStatisticsLeaderboardRequestData {
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
     * Defines the request payload for ServerGetFriendStatisticsLeaderboard.
     */
    export class ServerGetFriendStatisticsLeaderboardRequestData extends GetFriendStatisticsLeaderboardRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminGetFriendStatisticsLeaderboard.
     */
    export class AdminGetFriendStatisticsLeaderboardRequestData extends ServerGetFriendStatisticsLeaderboardRequestData {
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
     * Defines the request payload for GetPlayerCharacter.
     */
    export class GetPlayerCharacterRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @GNArrayDataMember({ code: ParameterCode.CharacterCatalogIds, isOptional: true, elementCls: String })
        public characterCatalogIds?: Array<string>;

    }

    /**
     * Defines the request payload for ServerGetPlayerCharacter.
     */
    export class ServerGetPlayerCharacterRequestData extends GetPlayerCharacterRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminGetPlayerCharacter.
     */
    export class AdminGetPlayerCharacterRequestData extends ServerGetPlayerCharacterRequestData {
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
     * Defines the request payload for GetPlayerFriend.
     */
    export class GetPlayerFriendRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @GNArrayDataMember({ code: ParameterCode.FriendCatalogIds, isOptional: true, elementCls: String })
        public friendCatalogIds?: Array<string>;

    }

    /**
     * Defines the request payload for ServerGetPlayerFriend.
     */
    export class ServerGetPlayerFriendRequestData extends GetPlayerFriendRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminGetPlayerFriend.
     */
    export class AdminGetPlayerFriendRequestData extends ServerGetPlayerFriendRequestData {
    }

    /**
     * Defines the request payload for GetPlayerGroup.
     */
    export class GetPlayerGroupRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @GNArrayDataMember({ code: ParameterCode.GroupCatalogIds, isOptional: true, elementCls: String })
        public groupCatalogIds?: Array<string>;

    }

    /**
     * Defines the request payload for ServerGetPlayerGroup.
     */
    export class ServerGetPlayerGroupRequestData extends GetPlayerGroupRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminGetPlayerGroup.
     */
    export class AdminGetPlayerGroupRequestData extends ServerGetPlayerGroupRequestData {
    }

    /**
     * Reads the current or target game-player profile using the requested projection.
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
     * Reads a specific target game player on a trusted route.
     */
    export class ServerGetPlayerInformationRequestData extends GetPlayerInformationRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

        /**
         * Allows the backend to create the missing game-player record before returning it.
         */
        @BooleanDataMember({ code: ParameterCode.CreatePlayerIfNotExists, isOptional: true, defaultValue: false })
        public createPlayerIfNotExists?: boolean;

    }

    /**
     * Defines the request payload for AdminGetPlayerInformation.
     */
    export class AdminGetPlayerInformationRequestData extends ServerGetPlayerInformationRequestData {
    }

    /**
     * Defines the request payload for GetPlayerInventory.
     */
    export class GetPlayerInventoryRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @GNArrayDataMember({ code: ParameterCode.ItemCatalogIds, isOptional: true, elementCls: String })
        public itemCatalogIds?: Array<string>;

    }

    /**
     * Defines the request payload for ServerGetPlayerInventory.
     */
    export class ServerGetPlayerInventoryRequestData extends GetPlayerInventoryRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminGetPlayerInventory.
     */
    export class AdminGetPlayerInventoryRequestData extends ServerGetPlayerInventoryRequestData {
    }

    /**
     * Defines the request payload for GetPlayerStatistics.
     */
    export class GetPlayerStatisticsRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @GNArrayDataMember({ code: ParameterCode.StatisticsKeys, isOptional: true, elementCls: String })
        public statisticsKeys?: Array<string>;

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
     * Creates a group owned by or attached to the current or target game player.
     */
    export class CreateGroupRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.CatalogId, minLength: 2, maxLength: 32, mustNonNull: true })
        public catalogId: string;

        /**
         * Additional game-player members expressed as user IDs, not character IDs.
         */
        @GNArrayDataMember({ code: ParameterCode.GroupMembers, isOptional: true, elementCls: GroupMemberParam })
        public groupMembers?: Array<GroupMemberParam>;

        @StringDataMember({ code: ParameterCode.DisplayName, defaultValue: "", isOptional: true })
        public displayName?: string;

    }

    /**
     * Defines the request payload for ServerCreateGroup.
     */
    export class ServerCreateGroupRequestData extends CreateGroupRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminCreateGroup.
     */
    export class AdminCreateGroupRequestData extends ServerCreateGroupRequestData {
    }

    /**
     * Defines the request payload for CreatePlayerCharacter.
     */
    export class CreatePlayerCharacterRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.CatalogId, minLength: 2, maxLength: 32, mustNonNull: true })
        public catalogId: string;

        @StringDataMember({ code: ParameterCode.DisplayName, defaultValue: "", isOptional: true, mustNonNull: true })
        public displayName?: string;

        @BooleanDataMember({ code: ParameterCode.UniqueDisplayName, defaultValue: false, isOptional: true })
        public uniqueDisplayName?: boolean;

    }

    /**
     * Defines the request payload for ServerCreatePlayerCharacter.
     */
    export class ServerCreatePlayerCharacterRequestData extends CreatePlayerCharacterRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminCreatePlayerCharacter.
     */
    export class AdminCreatePlayerCharacterRequestData extends ServerCreatePlayerCharacterRequestData {
    }

    /**
     * Defines the request payload for CreatePlayerItem.
     */
    export class CreatePlayerItemRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.CatalogId, minLength: 2, maxLength: 32, mustNonNull: true })
        public catalogId: string;

        @StringDataMember({ code: ParameterCode.ClassId, minLength: 2, maxLength: 32, mustNonNull: true })
        public classId: string;

        @StringDataMember({ code: ParameterCode.DisplayName, defaultValue: "", isOptional: true })
        public displayName?: string;

        @NumberDataMember({ code: ParameterCode.Amount, defaultValue: 1, mustInt: true, minValue: 1, maxValue: 256, isOptional: true })
        public amount?: number;

    }

    /**
     * Defines the request payload for ServerCreatePlayerItem.
     */
    export class ServerCreatePlayerItemRequestData extends CreatePlayerItemRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminCreatePlayerItem.
     */
    export class AdminCreatePlayerItemRequestData extends ServerCreatePlayerItemRequestData {
    }

    /**
     * Defines the request payload for JoinGroup.
     */
    export class JoinGroupRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
        public groupId: string;

    }

    /**
     * Defines the request payload for ServerJoinGroup.
     */
    export class ServerJoinGroupRequestData extends JoinGroupRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminJoinGroup.
     */
    export class AdminJoinGroupRequestData extends ServerJoinGroupRequestData {
    }

    /**
     * Defines the request payload for LeaveGroup.
     */
    export class LeaveGroupRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.GroupId, minLength: 10, maxLength: 10, mustNonNull: true })
        public groupId: string;

    }

    /**
     * Defines the request payload for ServerLeaveGroup.
     */
    export class ServerLeaveGroupRequestData extends LeaveGroupRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminLeaveGroup.
     */
    export class AdminLeaveGroupRequestData extends ServerLeaveGroupRequestData {
    }

    /**
     * Defines the request payload for RemovePlayerCharacter.
     */
    export class RemovePlayerCharacterRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.CharacterId, minLength: 11, maxLength: 11, mustNonNull: true })
        public characterId: string;

    }

    /**
     * Defines the request payload for ServerRemovePlayerCharacter.
     */
    export class ServerRemovePlayerCharacterRequestData extends RemovePlayerCharacterRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminRemovePlayerCharacter.
     */
    export class AdminRemovePlayerCharacterRequestData extends ServerRemovePlayerCharacterRequestData {
    }

    /**
     * Defines the request payload for RemovePlayerFriend.
     */
    export class RemovePlayerFriendRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.FriendId, minLength: 10, maxLength: 10, mustNonNull: true })
        public friendId: string;

    }

    /**
     * Defines the request payload for ServerRemovePlayerFriend.
     */
    export class ServerRemovePlayerFriendRequestData extends RemovePlayerFriendRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminRemovePlayerFriend.
     */
    export class AdminRemovePlayerFriendRequestData extends ServerRemovePlayerFriendRequestData {
    }

    /**
     * Defines the request payload for RemovePlayerItem.
     */
    export class RemovePlayerItemRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, isOptional: true })
        public userId?: string;

        @StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
        public itemId: string;

    }

    /**
     * Defines the request payload for ServerRemovePlayerItem.
     */
    export class ServerRemovePlayerItemRequestData extends RemovePlayerItemRequestData {
        @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
        public declare userId: string;

    }

    /**
     * Defines the request payload for AdminRemovePlayerItem.
     */
    export class AdminRemovePlayerItemRequestData extends ServerRemovePlayerItemRequestData {
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
     * Reads currency change logs for the current or target game player.
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
     * Reads statistic change logs for the current or target game player.
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
     * Contains the optional fields requested through `InfoRequestParam`.
     */
    export class InfoResponseParameters {
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

        /**
         * Lightweight relation items for owned character players, not full character snapshots.
         */
        @GNArrayDataMember({ code: ParameterCode.PlayerCharacters, isOptional: true, elementCls: GenericModels.CharacterItem })
        public playerCharacters?: Array<GenericModels.CharacterItem>;

        /**
         * Lightweight relation items for inventory owned by the player.
         */
        @GNArrayDataMember({ code: ParameterCode.PlayerInventories, isOptional: true, elementCls: GenericModels.InventoryItem })
        public playerInventories?: Array<GenericModels.InventoryItem>;

        /**
         * Lightweight relation items for groups attached to the player.
         */
        @GNArrayDataMember({ code: ParameterCode.PlayerGroups, isOptional: true, elementCls: GenericModels.GroupItem })
        public playerGroups?: Array<GenericModels.GroupItem>;

        /**
         * Lightweight relation items for friends attached to the player.
         */
        @GNArrayDataMember({ code: ParameterCode.PlayerFriends, isOptional: true, elementCls: GenericModels.FriendItem })
        public playerFriends?: Array<GenericModels.FriendItem>;

        @NumberDataMember({ code: ParameterCode.TsLastLogin, isOptional: true })
        public tsLastLogin?: number;

        @StringDataMember({ code: ParameterCode.IpAddressCreate, isOptional: true })
        public ipAddressCreate?: string;

        @StringDataMember({ code: ParameterCode.CountryCode, isOptional: true })
        public countryCode?: string;

    }

    /**
     * Base game-player response envelope.
     */
    export class GamePlayerResponseData {
        /**
         * Optional field bag controlled by the corresponding `InfoRequestParam`.
         */
        @GNHashtableDataMember({ code: ParameterCode.InfoResponseParameters })
        public infoResponseParameters: InfoResponseParameters;

    }

    /**
     * Game-player envelope that also exposes the resolved game-player user ID.
     */
    export class GamePlayerWithUserIdResponseData extends GamePlayerResponseData {
        @StringDataMember({ code: ParameterCode.UserId })
        public userId: string;

    }

    /**
     * Defines the response payload for GamePlayerLeaderboard.
     */
    export class GamePlayerLeaderboardResponseData extends GamePlayerWithUserIdResponseData {
        @NumberDataMember({ code: ParameterCode.Position })
        public position: number;

        @NumberDataMember({ code: ParameterCode.BackupValue, isOptional: true })
        public backupValue?: number;

    }

    /**
     * Defines the response payload for GamePlayerLog.
     */
    export class GamePlayerLogResponseData {
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
     * Defines the response payload for GetStatisticsLeaderboard.
     */
    export class GetStatisticsLeaderboardResponseData {
        @GNArrayDataMember({ code: ParameterCode.Results, elementCls: GamePlayerLeaderboardResponseData })
        public results: Array<GamePlayerLeaderboardResponseData>;

        @NumberDataMember({ code: ParameterCode.TsCreate, isOptional: true })
        public tsCreate: number;

    }

    /**
     * Defines the response payload for GetCurrencyLeaderboard.
     */
    export class GetCurrencyLeaderboardResponseData {
        @GNArrayDataMember({ code: ParameterCode.Results, elementCls: GamePlayerLeaderboardResponseData })
        public results: Array<GamePlayerLeaderboardResponseData>;

    }

    /**
     * Defines the response payload for GetLastLoginLeaderboard.
     */
    export class GetLastLoginLeaderboardResponseData {
        @GNArrayDataMember({ code: ParameterCode.Results, elementCls: GamePlayerLeaderboardResponseData })
        public results: Array<GamePlayerLeaderboardResponseData>;

    }

    /**
     * Defines the response payload for GetCreateLeaderboard.
     */
    export class GetCreateLeaderboardResponseData {
        @GNArrayDataMember({ code: ParameterCode.Results, elementCls: GamePlayerLeaderboardResponseData })
        public results: Array<GamePlayerLeaderboardResponseData>;

    }

    /**
     * Defines the response payload for GamePlayersWithUserId.
     */
    export class GamePlayersWithUserIdResponseData {
        @GNArrayDataMember({ code: ParameterCode.Results, elementCls: GamePlayerWithUserIdResponseData })
        public results: Array<GamePlayerWithUserIdResponseData>;

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
     * Returns one page of statistics logs.
     */
    export class GetStatisticsLogResponseData {
        @GNArrayDataMember({ code: ParameterCode.Results, elementCls: GamePlayerLogResponseData })
        public results: Array<GamePlayerLogResponseData>;

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
        @GNArrayDataMember({ code: ParameterCode.Results, elementCls: GamePlayerLogResponseData })
        public results: Array<GamePlayerLogResponseData>;

        /**
         * Continuation token for the next page, or `undefined` when pagination is exhausted.
         */
        @StringDataMember({ code: ParameterCode.Token, isOptional: true })
        public token?: string;

    }

    /**
     * Defines an intentionally empty response payload.
     */
    export class EmptyResponseData {
    }

}
