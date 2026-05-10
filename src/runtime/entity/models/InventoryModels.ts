import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";
import { GenericModels } from "./GenericModels";

/**
 * Reusable request and response DTOs for the Inventory domain.
 *
 * Inventory operations target a **specific item entity** by
 * `itemId` (the per-owner ledger row, distinct from the
 * catalog's `classId`). On client variants the backend
 * cross-checks that the authenticated player owns the item
 * (or has permission via group membership when `ownerType ==
 * Group`).
 *
 * Three role variants per operation:
 * - **Client** (no prefix): used by `GNNetwork.inventory`,
 *   scoped to items the caller owns.
 * - **`Server*`**: used by `GNNetwork.inventory.server`, can
 *   target any owner with a valid server `secretKey`.
 * - **`Admin*`**: used by `GNNetwork.inventory.admin`, full
 *   privileged access including catalog edits.
 *
 * Stackability rules ({@link ItemType}) determine which
 * mutation operations make sense for a given catalog row:
 * `setItemAmount` / `addItemAmount` / `subtractItemAmount` only
 * apply to `Stackable` items; `NonStackable` items always have
 * an implicit amount of `1`.
 */
export namespace InventoryModels {

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
     * Selects which optional inventory fields should be returned in `infoResponseParameters`.
     * Boolean flags default to `false`; key arrays narrow list-style fields to specific keys only.
     */
    export class InfoRequestParam {
        /**
         * Includes the catalog ID from which this inventory item was created.
         */
        @BooleanDataMember({ code: ParameterCode.CatalogId, isOptional: true, defaultValue: false })
        public catalogId?: boolean;

        /**
         * Includes the class ID of the inventory item.
         */
        @BooleanDataMember({ code: ParameterCode.ClassId, isOptional: true, defaultValue: false })
        public classId?: boolean;

        /**
         * Includes the item type mapped by the public `ItemType` enum.
         */
        @BooleanDataMember({ code: ParameterCode.ItemType, isOptional: true, defaultValue: false })
        public itemType?: boolean;

        /**
         * Includes the current item amount.
         */
        @BooleanDataMember({ code: ParameterCode.Amount, isOptional: true, defaultValue: false })
        public amount?: boolean;

        /**
         * Includes the current owner descriptor.
         */
        @BooleanDataMember({ code: ParameterCode.Owner, isOptional: true, defaultValue: false })
        public owner?: boolean;

        @BooleanDataMember({ code: ParameterCode.RemoveStatus, isOptional: true, defaultValue: false })
        public removeStatus?: boolean;

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

        @BooleanDataMember({ code: ParameterCode.ItemStatistics, isOptional: true, defaultValue: false })
        public itemStatistics?: boolean;

        @BooleanDataMember({ code: ParameterCode.ItemDatas, isOptional: true, defaultValue: false })
        public itemDatas?: boolean;

        /**
         * Restricts `itemDatas` to the specified keys when that field is requested.
         */
        @GNArrayDataMember({ code: ParameterCode.ItemDataKeys, isOptional: true, elementCls: String })
        public itemDataKeys?: Array<string>;

        /**
         * Restricts `itemStatistics` to the specified statistic keys when that field is requested.
         */
        @GNArrayDataMember({ code: ParameterCode.ItemStatisticsKeys, isOptional: true, elementCls: String })
        public itemStatisticsKeys?: Array<string>;

        @GNArrayDataMember({ code: ParameterCode.CustomDataKeys, isOptional: true, elementCls: String })
        public customDataKeys?: Array<string>;

        @GNArrayDataMember({ code: ParameterCode.TagKeys, isOptional: true, elementCls: String })
        public tagKeys?: Array<string>;

    }

    /**
     * Defines the reusable parameter block ItemDataParam.
     */
    export class ItemDataParam {
        @StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
        public key: string;

        @DataMember({ code: ParameterCode.Value })
        public value: any;

    }

    /**
     * Defines the reusable parameter block ItemStatisticsParam.
     */
    export class ItemStatisticsParam {
        @StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
        public key: string;

        @NumberDataMember({ code: ParameterCode.Value })
        public value: number;

    }

    /**
     * Defines the request payload for AddSegment.
     */
    export class AddSegmentRequestData {
        @StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
        public itemId: string;

        @StringDataMember({ code: ParameterCode.Value, minLength: 6, maxLength: 32, mustNonNull: true })
        public value: string;

    }

    /**
     * Defines the request payload for ServerAddSegment.
     */
    export class ServerAddSegmentRequestData extends AddSegmentRequestData {
    }

    /**
     * Defines the request payload for AdminAddSegment.
     */
    export class AdminAddSegmentRequestData extends ServerAddSegmentRequestData {
    }

    /**
     * Defines the request payload for GetAmount.
     */
    export class GetAmountRequestData {
        @StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
        public itemId: string;

    }

    /**
     * Defines the request payload for ServerGetAmount.
     */
    export class ServerGetAmountRequestData extends GetAmountRequestData {
    }

    /**
     * Defines the request payload for AdminGetAmount.
     */
    export class AdminGetAmountRequestData extends ServerGetAmountRequestData {
    }

    /**
     * Defines the request payload for GetAvatar.
     */
    export class GetAvatarRequestData {
        @StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
        public itemId: string;

    }

    /**
     * Defines the request payload for ServerGetAvatar.
     */
    export class ServerGetAvatarRequestData extends GetAvatarRequestData {
    }

    /**
     * Defines the request payload for AdminGetAvatar.
     */
    export class AdminGetAvatarRequestData extends ServerGetAvatarRequestData {
    }

    /**
     * Defines the request payload for GetCatalogId.
     */
    export class GetCatalogIdRequestData {
        @StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
        public itemId: string;

    }

    /**
     * Defines the request payload for ServerGetCatalogId.
     */
    export class ServerGetCatalogIdRequestData extends GetCatalogIdRequestData {
    }

    /**
     * Defines the request payload for AdminGetCatalogId.
     */
    export class AdminGetCatalogIdRequestData extends ServerGetCatalogIdRequestData {
    }

    /**
     * Defines the request payload for GetClassId.
     */
    export class GetClassIdRequestData {
        @StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
        public itemId: string;

    }

    /**
     * Defines the request payload for ServerGetClassId.
     */
    export class ServerGetClassIdRequestData extends GetClassIdRequestData {
    }

    /**
     * Defines the request payload for AdminGetClassId.
     */
    export class AdminGetClassIdRequestData extends ServerGetClassIdRequestData {
    }

    /**
     * Defines the request payload for GetCustomData.
     */
    export class GetCustomDataRequestData {
        @StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
        public itemId: string;

        @GNArrayDataMember({ code: ParameterCode.CustomDataKeys, isOptional: true, elementCls: String })
        public customDataKeys?: Array<string>;

    }

    /**
     * Defines the request payload for ServerGetCustomData.
     */
    export class ServerGetCustomDataRequestData extends GetCustomDataRequestData {
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
        @StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
        public itemId: string;

    }

    /**
     * Defines the request payload for ServerGetDisplayName.
     */
    export class ServerGetDisplayNameRequestData extends GetDisplayNameRequestData {
    }

    /**
     * Defines the request payload for AdminGetDisplayName.
     */
    export class AdminGetDisplayNameRequestData extends ServerGetDisplayNameRequestData {
    }

    /**
     * Defines the request payload for GetItemData.
     */
    export class GetItemDataRequestData {
        @StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
        public itemId: string;

        @GNArrayDataMember({ code: ParameterCode.ItemDataKeys, isOptional: true, elementCls: String })
        public itemDataKeys?: Array<string>;

    }

    /**
     * Defines the request payload for ServerGetItemData.
     */
    export class ServerGetItemDataRequestData extends GetItemDataRequestData {
    }

    /**
     * Defines the request payload for AdminGetItemData.
     */
    export class AdminGetItemDataRequestData extends ServerGetItemDataRequestData {
    }

    /**
     * Defines the request payload for GetItemInformation.
     */
    export class GetItemInformationRequestData {
        @StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
        public itemId: string;

        @GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
        public infoRequestParam: InfoRequestParam;

    }

    /**
     * Defines the request payload for ServerGetItemInformation.
     */
    export class ServerGetItemInformationRequestData extends GetItemInformationRequestData {
    }

    /**
     * Defines the request payload for AdminGetItemInformation.
     */
    export class AdminGetItemInformationRequestData extends ServerGetItemInformationRequestData {
    }

    /**
     * Reads statistics for one inventory item.
     * Note that this request uses `statisticsKeys`, while `InfoRequestParam` uses `itemStatisticsKeys`.
     */
    export class GetItemStatisticsRequestData {
        @StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
        public itemId: string;

        @GNArrayDataMember({ code: ParameterCode.StatisticsKeys, isOptional: true, elementCls: String })
        public statisticsKeys?: Array<string>;

    }

    /**
     * Defines the request payload for ServerGetItemStatistics.
     */
    export class ServerGetItemStatisticsRequestData extends GetItemStatisticsRequestData {
    }

    /**
     * Defines the request payload for AdminGetItemStatistics.
     */
    export class AdminGetItemStatisticsRequestData extends ServerGetItemStatisticsRequestData {
    }

    /**
     * Defines the request payload for GetItemsWithDisplayName.
     */
    export class GetItemsWithDisplayNameRequestData {
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
     * Defines the request payload for ServerGetItemsWithDisplayName.
     */
    export class ServerGetItemsWithDisplayNameRequestData extends GetItemsWithDisplayNameRequestData {
    }

    /**
     * Defines the request payload for AdminGetItemsWithDisplayName.
     */
    export class AdminGetItemsWithDisplayNameRequestData extends ServerGetItemsWithDisplayNameRequestData {
    }

    /**
     * Defines the request payload for GetItemsWithSegment.
     */
    export class GetItemsWithSegmentRequestData {
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
     * Defines the request payload for ServerGetItemsWithSegment.
     */
    export class ServerGetItemsWithSegmentRequestData extends GetItemsWithSegmentRequestData {
    }

    /**
     * Defines the request payload for AdminGetItemsWithSegment.
     */
    export class AdminGetItemsWithSegmentRequestData extends ServerGetItemsWithSegmentRequestData {
    }

    /**
     * Defines the request payload for GetItemsWithTag.
     */
    export class GetItemsWithTagRequestData {
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
     * Defines the request payload for ServerGetItemsWithTag.
     */
    export class ServerGetItemsWithTagRequestData extends GetItemsWithTagRequestData {
    }

    /**
     * Defines the request payload for AdminGetItemsWithTag.
     */
    export class AdminGetItemsWithTagRequestData extends ServerGetItemsWithTagRequestData {
    }

    /**
     * Defines the request payload for GetItemType.
     */
    export class GetItemTypeRequestData {
        @StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
        public itemId: string;

    }

    /**
     * Defines the request payload for ServerGetItemType.
     */
    export class ServerGetItemTypeRequestData extends GetItemTypeRequestData {
    }

    /**
     * Defines the request payload for AdminGetItemType.
     */
    export class AdminGetItemTypeRequestData extends ServerGetItemTypeRequestData {
    }

    /**
     * Defines the request payload for GetOwner.
     */
    export class GetOwnerRequestData {
        @StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
        public itemId: string;

    }

    /**
     * Defines the request payload for ServerGetOwner.
     */
    export class ServerGetOwnerRequestData extends GetOwnerRequestData {
    }

    /**
     * Defines the request payload for AdminGetOwner.
     */
    export class AdminGetOwnerRequestData extends ServerGetOwnerRequestData {
    }

    /**
     * Defines the request payload for GetRemoveStatus.
     */
    export class GetRemoveStatusRequestData {
        @StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
        public itemId: string;

    }

    /**
     * Defines the request payload for ServerGetRemoveStatus.
     */
    export class ServerGetRemoveStatusRequestData extends GetRemoveStatusRequestData {
    }

    /**
     * Defines the request payload for AdminGetRemoveStatus.
     */
    export class AdminGetRemoveStatusRequestData extends ServerGetRemoveStatusRequestData {
    }

    /**
     * Defines the request payload for GetSegment.
     */
    export class GetSegmentRequestData {
        @StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
        public itemId: string;

    }

    /**
     * Defines the request payload for ServerGetSegment.
     */
    export class ServerGetSegmentRequestData extends GetSegmentRequestData {
    }

    /**
     * Defines the request payload for AdminGetSegment.
     */
    export class AdminGetSegmentRequestData extends ServerGetSegmentRequestData {
    }

    /**
     * Defines the request payload for GetStatisticsLeaderboardAroundItem.
     */
    export class GetStatisticsLeaderboardAroundItemRequestData {
        @StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
        public itemId: string;

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

        @StringDataMember({ code: ParameterCode.CatalogId, minLength: 2, maxLength: 32, mustNonNull: true, isOptional: true })
        public catalogId?: string;

    }

    /**
     * Defines the request payload for ServerGetStatisticsLeaderboardAroundItem.
     */
    export class ServerGetStatisticsLeaderboardAroundItemRequestData extends GetStatisticsLeaderboardAroundItemRequestData {
    }

    /**
     * Defines the request payload for AdminGetStatisticsLeaderboardAroundItem.
     */
    export class AdminGetStatisticsLeaderboardAroundItemRequestData extends ServerGetStatisticsLeaderboardAroundItemRequestData {
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

        @StringDataMember({ code: ParameterCode.CatalogId, minLength: 2, maxLength: 32, mustNonNull: true, isOptional: true })
        public catalogId?: string;

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
        @StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
        public itemId: string;

        @GNArrayDataMember({ code: ParameterCode.TagKeys, isOptional: true, elementCls: String })
        public tagKeys?: Array<string>;

    }

    /**
     * Defines the request payload for ServerGetTag.
     */
    export class ServerGetTagRequestData extends GetTagRequestData {
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
        @StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
        public itemId: string;

    }

    /**
     * Defines the request payload for ServerGetTsCreate.
     */
    export class ServerGetTsCreateRequestData extends GetTsCreateRequestData {
    }

    /**
     * Defines the request payload for AdminGetTsCreate.
     */
    export class AdminGetTsCreateRequestData extends ServerGetTsCreateRequestData {
    }

    /**
     * Defines the request payload for RemoveSegment.
     */
    export class RemoveSegmentRequestData {
        @StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
        public itemId: string;

        @StringDataMember({ code: ParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
        public value: string;

    }

    /**
     * Defines the request payload for ServerRemoveSegment.
     */
    export class ServerRemoveSegmentRequestData extends RemoveSegmentRequestData {
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
        @StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
        public itemId: string;

        @StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
        public key: string;

    }

    /**
     * Defines the request payload for ServerRemoveTag.
     */
    export class ServerRemoveTagRequestData extends RemoveTagRequestData {
    }

    /**
     * Defines the request payload for AdminRemoveTag.
     */
    export class AdminRemoveTagRequestData extends ServerRemoveTagRequestData {
    }

    /**
     * Replaces the stored amount with an absolute value.
     * Use `ChangeItemStatistics` for statistics deltas; this contract is not a delta operation.
     */
    export class SetAmountRequestData {
        @StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
        public itemId: string;

        @NumberDataMember({ code: ParameterCode.Amount, mustInt: true })
        public amount: number;

    }

    /**
     * Defines the request payload for ServerSetAmount.
     */
    export class ServerSetAmountRequestData extends SetAmountRequestData {
    }

    /**
     * Defines the request payload for AdminSetAmount.
     */
    export class AdminSetAmountRequestData extends ServerSetAmountRequestData {
    }

    /**
     * Defines the request payload for SetAvatar.
     */
    export class SetAvatarRequestData {
        @StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
        public itemId: string;

        @NumberDataMember({ code: ParameterCode.Type, mustInt: true })
        public type: number;

        @StringDataMember({ code: ParameterCode.Value, minLength: 1, maxLength: 128, mustNonNull: true })
        public value: string;

    }

    /**
     * Defines the request payload for ServerSetAvatar.
     */
    export class ServerSetAvatarRequestData extends SetAvatarRequestData {
    }

    /**
     * Defines the request payload for AdminSetAvatar.
     */
    export class AdminSetAvatarRequestData extends ServerSetAvatarRequestData {
    }

    /**
     * Defines the request payload for SetCustomData.
     */
    export class SetCustomDataRequestData {
        @StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
        public itemId: string;

        @GNArrayDataMember({ code: ParameterCode.CustomDatas, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: CustomDataParam })
        public customDatas: Array<CustomDataParam>;

    }

    /**
     * Defines the request payload for ServerSetCustomData.
     */
    export class ServerSetCustomDataRequestData extends SetCustomDataRequestData {
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
        @StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
        public itemId: string;

        @StringDataMember({ code: ParameterCode.DisplayName, minLength: 5, maxLength: 32, mustNonNull: true })
        public displayName: string;

    }

    /**
     * Defines the request payload for ServerSetDisplayName.
     */
    export class ServerSetDisplayNameRequestData extends SetDisplayNameRequestData {
    }

    /**
     * Defines the request payload for AdminSetDisplayName.
     */
    export class AdminSetDisplayNameRequestData extends ServerSetDisplayNameRequestData {
    }

    /**
     * Defines the request payload for SetItemData.
     */
    export class SetItemDataRequestData {
        @StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
        public itemId: string;

        @GNArrayDataMember({ code: ParameterCode.ItemDatas, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: ItemDataParam })
        public itemDatas: Array<ItemDataParam>;

    }

    /**
     * Defines the request payload for ServerSetItemData.
     */
    export class ServerSetItemDataRequestData extends SetItemDataRequestData {
    }

    /**
     * Defines the request payload for AdminSetItemData.
     */
    export class AdminSetItemDataRequestData extends ServerSetItemDataRequestData {
    }

    /**
     * Applies delta updates to one or more item statistics.
     */
    export class ChangeItemStatisticsRequestData {
        @StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
        public itemId: string;

        @GNArrayDataMember({ code: ParameterCode.ItemStatistics, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: ItemStatisticsParam })
        public itemStatistics: Array<ItemStatisticsParam>;

        @StringDataMember({ code: ParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
        public log?: string;

    }

    /**
     * Defines the request payload for ServerChangeItemStatistics.
     */
    export class ServerChangeItemStatisticsRequestData extends ChangeItemStatisticsRequestData {
    }

    /**
     * Defines the request payload for AdminChangeItemStatistics.
     */
    export class AdminChangeItemStatisticsRequestData extends ServerChangeItemStatisticsRequestData {
    }

    /**
     * Transfers ownership of the inventory item to a different owner.
     */
    export class SetOwnerRequestData {
        @StringDataMember({ code: ParameterCode.ItemId, minLength: 11, maxLength: 11, mustNonNull: true })
        public itemId: string;

        /**
         * New owner identifier matching the selected `newOwnerType`.
         */
        @StringDataMember({ code: ParameterCode.NewOwnerId, minLength: 10, maxLength: 12, mustNonNull: true })
        public newOwnerId: string;

        /**
         * New owner type mapped by the public `OwnerType` enum.
         */
        @NumberDataMember({ code: ParameterCode.NewOwnerType, mustInt: true })
        public newOwnerType: number;

    }

    /**
     * Defines the request payload for ServerSetOwner.
     */
    export class ServerSetOwnerRequestData extends SetOwnerRequestData {
    }

    /**
     * Defines the request payload for AdminSetOwner.
     */
    export class AdminSetOwnerRequestData extends ServerSetOwnerRequestData {
    }

    /**
     * Defines the request payload for SetRemoveStatus.
     */
    export class SetRemoveStatusRequestData {
        @StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
        public itemId: string;

        @StringDataMember({ code: ParameterCode.Reason, isOptional: true, defaultValue: "" })
        public reason?: string;

    }

    /**
     * Defines the request payload for ServerSetRemoveStatus.
     */
    export class ServerSetRemoveStatusRequestData extends SetRemoveStatusRequestData {
    }

    /**
     * Defines the request payload for AdminSetRemoveStatus.
     */
    export class AdminSetRemoveStatusRequestData extends ServerSetRemoveStatusRequestData {
    }

    /**
     * Defines the request payload for SetTag.
     */
    export class SetTagRequestData {
        @StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
        public itemId: string;

        @StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
        public key: string;

        @StringDataMember({ code: ParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
        public value: string;

    }

    /**
     * Defines the request payload for ServerSetTag.
     */
    export class ServerSetTagRequestData extends SetTagRequestData {
    }

    /**
     * Defines the request payload for AdminSetTag.
     */
    export class AdminSetTagRequestData extends ServerSetTagRequestData {
    }

    /**
     * Reads statistic change logs for one inventory item.
     * Pagination is token-based rather than skip-based.
     */
    export class GetStatisticsLogRequestData {
        @GNArrayDataMember({ code: ParameterCode.Keys, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: String, isOptional: true })
        public keys?: Array<string>;

        @StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true, isOptional: true })
        public itemId?: string;

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
        @StringDataMember({ code: ParameterCode.CatalogId, isOptional: true })
        public catalogId?: string;

        @StringDataMember({ code: ParameterCode.ClassId, isOptional: true })
        public classId?: string;

        @NumberDataMember({ code: ParameterCode.ItemType, isOptional: true })
        public itemType?: number;

        @NumberDataMember({ code: ParameterCode.Amount, isOptional: true })
        public amount?: number;

        /**
         * Owner descriptor mapped by the public `OwnerType` enum.
         */
        @GNHashtableDataMember({ code: ParameterCode.Owner, isOptional: true })
        public owner?: GenericModels.OwnerItem;

        @GNHashtableDataMember({ code: ParameterCode.RemoveStatus, isOptional: true })
        public removeStatus?: GenericModels.RemoveStatusItem;

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

        @GNArrayDataMember({ code: ParameterCode.ItemDatas, isOptional: true, elementCls: GenericModels.DataItem })
        public itemDatas?: Array<GenericModels.DataItem>;

        @GNArrayDataMember({ code: ParameterCode.ItemStatistics, isOptional: true, elementCls: GenericModels.StatisticsItem })
        public itemStatistics?: Array<GenericModels.StatisticsItem>;

    }

    /**
     * Base inventory response envelope.
     */
    export class InventoryResponseData {
        /**
         * Optional field bag controlled by the corresponding `InfoRequestParam`.
         */
        @GNHashtableDataMember({ code: ParameterCode.InfoResponseParameters })
        public infoResponseParameters: InfoResponseParameters;

    }

    /**
     * Inventory envelope that also exposes the resolved item ID.
     */
    export class InventoryWithItemIdResponseData extends InventoryResponseData {
        @StringDataMember({ code: ParameterCode.ItemId })
        public itemId: string;

    }

    /**
     * Defines the response payload for InventoryLeaderboard.
     */
    export class InventoryLeaderboardResponseData extends InventoryWithItemIdResponseData {
        @NumberDataMember({ code: ParameterCode.Position })
        public position: number;

        @NumberDataMember({ code: ParameterCode.BackupValue, isOptional: true })
        public backupValue?: number;

    }

    /**
     * Describes one inventory-statistics change log entry.
     */
    export class InventoryLogResponseData {
        @StringDataMember({ code: ParameterCode.ItemId })
        public itemId: string;

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
        @GNArrayDataMember({ code: ParameterCode.Results, elementCls: InventoryLeaderboardResponseData })
        public results: Array<InventoryLeaderboardResponseData>;

        @NumberDataMember({ code: ParameterCode.TsCreate, isOptional: true })
        public tsCreate: number;

    }

    /**
     * Defines the response payload for InventoriesWithItemId.
     */
    export class InventoriesWithItemIdResponseData {
        @GNArrayDataMember({ code: ParameterCode.Results, elementCls: InventoryWithItemIdResponseData })
        public results: Array<InventoryWithItemIdResponseData>;

    }

    /**
     * Defines the response payload for GetCreateLeaderboard.
     */
    export class GetCreateLeaderboardResponseData {
        @GNArrayDataMember({ code: ParameterCode.Results, elementCls: InventoryLeaderboardResponseData })
        public results: Array<InventoryLeaderboardResponseData>;

    }

    /**
     * Returns one page of inventory statistics logs.
     */
    export class GetStatisticsLogResponseData {
        @GNArrayDataMember({ code: ParameterCode.Results, elementCls: InventoryLogResponseData })
        public results: Array<InventoryLogResponseData>;

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
