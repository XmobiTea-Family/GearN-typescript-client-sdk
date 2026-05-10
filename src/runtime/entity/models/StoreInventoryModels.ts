import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";
import { GenericModels } from "./GenericModels";

/**
 * Reusable request and response DTOs for the StoreInventory
 * domain.
 *
 * Store operations target a **logical owner** identified by
 * `(ownerId, ownerType)` (see {@link OwnerType}) and operate
 * against a concrete `storeId`. The store catalog is configured
 * server-side; clients only read it.
 *
 * Three role variants per operation:
 * - **Client** (no prefix): used by `GNNetwork.storeInventory`,
 *   the owner is implicitly the authenticated player.
 * - **`Server*`**: used by `GNNetwork.storeInventory.server`,
 *   accepts explicit owner parameters so a backend can issue
 *   purchases / gifts on behalf of any player.
 * - **`Admin*`**: used by `GNNetwork.storeInventory.admin`,
 *   plus catalog-edit and refund operations.
 *
 * Receipt-validation flows ship the platform receipt blob plus
 * optional metadata; the backend records the
 * {@link StoreReceiveType} on the audit log entry so analytics
 * can distinguish in-game-currency purchases from platform-IAP
 * grants.
 */
export namespace StoreInventoryModels {
    /**
     * Defines the reusable parameter block AvatarParam.
     */
    export class AvatarParam {
        @NumberDataMember({ code: ParameterCode.Type, mustInt: true })
        public type: number;

        @StringDataMember({ code: ParameterCode.Value, minLength: 1, maxLength: 128, mustNonNull: true })
        public value: string;

    }

    /**
     * Defines the reusable parameter block CurrencyParam.
     */
    export class CurrencyParam {
        @StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
        public key: string;

        @NumberDataMember({ code: ParameterCode.Value })
        public value: number;

    }

    /**
     * Defines the reusable parameter block InAppPurchaseParam.
     */
    export class InAppPurchaseParam {
        @StringDataMember({ code: ParameterCode.FacebookStoreId, minLength: 1, maxLength: 128, mustNonNull: true, isOptional: true })
        public facebookStoreId?: string;

        @StringDataMember({ code: ParameterCode.GooglePlayStoreId, minLength: 1, maxLength: 128, mustNonNull: true, isOptional: true })
        public googlePlayStoreId?: string;

        @StringDataMember({ code: ParameterCode.AppleAppStoreId, minLength: 1, maxLength: 128, mustNonNull: true, isOptional: true })
        public appleAppStoreId?: string;

        @NumberDataMember({ code: ParameterCode.AnalyticsPrice, isOptional: true })
        public analyticsPrice?: number;

    }

    /**
     * Selects which optional store fields should be returned in `infoResponseParameters`.
     * Boolean flags default to `false`.
     */
    export class InfoRequestParam {
        @BooleanDataMember({ code: ParameterCode.StoreItems, isOptional: true, defaultValue: false })
        public storeItems?: boolean;

        @BooleanDataMember({ code: ParameterCode.StoreItemType, isOptional: true, defaultValue: false })
        public storeItemType?: boolean;

        @BooleanDataMember({ code: ParameterCode.StoreCurrencies, isOptional: true, defaultValue: false })
        public storeCurrencies?: boolean;

        @BooleanDataMember({ code: ParameterCode.PriceCurrencies, isOptional: true, defaultValue: false })
        public priceCurrencies?: boolean;

        @BooleanDataMember({ code: ParameterCode.InAppPurchase, isOptional: true, defaultValue: false })
        public inAppPurchase?: boolean;

        @BooleanDataMember({ code: ParameterCode.RemoveStatus, isOptional: true, defaultValue: false })
        public removeStatus?: boolean;

        @BooleanDataMember({ code: ParameterCode.DisplayName, isOptional: true, defaultValue: false })
        public displayName?: boolean;

        @BooleanDataMember({ code: ParameterCode.Avatar, isOptional: true, defaultValue: false })
        public avatar?: boolean;

        @BooleanDataMember({ code: ParameterCode.TsCreate, isOptional: true, defaultValue: false })
        public tsCreate?: boolean;

        @BooleanDataMember({ code: ParameterCode.Tags, isOptional: true, defaultValue: false })
        public tags?: boolean;

        @BooleanDataMember({ code: ParameterCode.StoreDatas, isOptional: true, defaultValue: false })
        public storeDatas?: boolean;

    }

    /**
     * Defines the reusable parameter block StoreDataParam.
     */
    export class StoreDataParam {
        @StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
        public key: string;

        @DataMember({ code: ParameterCode.Value })
        public value: any;

    }

    /**
     * Defines the reusable parameter block StoreItemParam.
     */
    export class StoreItemParam {
        @StringDataMember({ code: ParameterCode.CatalogId, minLength: 2, maxLength: 32 })
        public catalogId: string;

        @StringDataMember({ code: ParameterCode.ClassId, minLength: 2, maxLength: 32 })
        public classId: string;

        @NumberDataMember({ code: ParameterCode.Amount })
        public amount: number;

    }

    /**
     * Defines the reusable parameter block TagParam.
     */
    export class TagParam {
        @StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
        public key: string;

        @StringDataMember({ code: ParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
        public value: string;

    }

    /**
     * Represents InAppPurchaseItem.
     */
    export class InAppPurchaseItem {
        @StringDataMember({ code: ParameterCode.FacebookStoreId })
        public facebookStoreId: string;

        @StringDataMember({ code: ParameterCode.AppleAppStoreId })
        public appleAppStoreId: string;

        @StringDataMember({ code: ParameterCode.GooglePlayStoreId })
        public googlePlayStoreId: string;

        @NumberDataMember({ code: ParameterCode.AnalyticsPrice })
        public analyticsPrice: number;

    }

    /**
     * Represents PriceCurrencyItem.
     */
    export class PriceCurrencyItem {
        @StringDataMember({ code: ParameterCode.Key })
        public key: string;

        @NumberDataMember({ code: ParameterCode.Value })
        public value: number;

    }

    /**
     * Represents OwnerStoreInventoryItem.
     */
    export class OwnerStoreInventoryItem {
        @StringDataMember({ code: ParameterCode.ItemId })
        public itemId: string;

        @StringDataMember({ code: ParameterCode.CatalogId })
        public catalogId: string;

        @StringDataMember({ code: ParameterCode.ClassId })
        public classId: string;

    }

    /**
     * Represents StoreInventoryItem.
     */
    export class StoreInventoryItem {
        @StringDataMember({ code: ParameterCode.CatalogId })
        public catalogId: string;

        @StringDataMember({ code: ParameterCode.ClassId })
        public classId: string;

        @NumberDataMember({ code: ParameterCode.Amount })
        public amount: number;

    }

    /**
     * Purchases one store item for a target owner.
     */
    export class BuyStoreItemRequestData {
        @StringDataMember({ code: ParameterCode.StoreId, minLength: 10, maxLength: 32, mustNonNull: true })
        public storeId: string;

        /**
         * Target owner identifier.
         */
        @StringDataMember({ code: ParameterCode.Id, minLength: 10, maxLength: 11, mustNonNull: true })
        public id: string;

        /**
         * Target owner type mapped by the public `OwnerType` enum.
         */
        @NumberDataMember({ code: ParameterCode.Type, mustInt: true })
        public type: number;

        @StringDataMember({ code: ParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
        public log?: string;

    }

    /**
     * Defines the request payload for ServerBuyStoreItem.
     */
    export class ServerBuyStoreItemRequestData extends BuyStoreItemRequestData {
    }

    /**
     * Defines the request payload for AdminBuyStoreItem.
     */
    export class AdminBuyStoreItemRequestData extends ServerBuyStoreItemRequestData {
    }

    /**
     * Grants one store item to a target owner without the normal purchase flow.
     */
    export class PresentStoreItemRequestData {
        @StringDataMember({ code: ParameterCode.StoreId, minLength: 10, maxLength: 32, mustNonNull: true })
        public storeId: string;

        @StringDataMember({ code: ParameterCode.Id, minLength: 10, maxLength: 11, mustNonNull: true })
        public id: string;

        @NumberDataMember({ code: ParameterCode.Type, mustInt: true })
        public type: number;

        @StringDataMember({ code: ParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
        public log?: string;

    }

    /**
     * Defines the request payload for ServerPresentStoreItem.
     */
    export class ServerPresentStoreItemRequestData extends PresentStoreItemRequestData {
    }

    /**
     * Defines the request payload for AdminPresentStoreItem.
     */
    export class AdminPresentStoreItemRequestData extends ServerPresentStoreItemRequestData {
    }

    /**
     * Reads store logs using token-based pagination.
     */
    export class GetStoreLogRequestData {
        @StringDataMember({ code: ParameterCode.StoreId, minLength: 10, maxLength: 32, mustNonNull: true, isOptional: true })
        public storeId?: string;

        /**
         * Filters by store receive types mapped by the public `StoreReceiveType` enum.
         */
        @GNArrayDataMember({ code: ParameterCode.StoreReceiveTypes, minLength: 1, maxLength: 10, mustNonNull: true, elementCls: Number, isOptional: true })
        public storeReceiveTypes?: Array<number>;

        @StringDataMember({ code: ParameterCode.Id, minLength: 10, maxLength: 11, mustNonNull: true, isOptional: true })
        public id?: string;

        @NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
        public limit?: number;

        /**
         * Continuation token returned by the previous page.
         */
        @StringDataMember({ code: ParameterCode.Token, minLength: 24, maxLength: 24, mustNonNull: true, isOptional: true })
        public token?: string;

    }

    /**
     * Defines the request payload for ServerGetStoreLog.
     */
    export class ServerGetStoreLogRequestData extends GetStoreLogRequestData {
    }

    /**
     * Defines the request payload for AdminGetStoreLog.
     */
    export class AdminGetStoreLogRequestData extends ServerGetStoreLogRequestData {
    }

    /**
     * Defines the request payload for GetStoreUsed.
     */
    export class GetStoreUsedRequestData {
        @StringDataMember({ code: ParameterCode.StoreId, minLength: 10, maxLength: 32, mustNonNull: true })
        public storeId: string;

    }

    /**
     * Defines the request payload for ServerGetStoreUsed.
     */
    export class ServerGetStoreUsedRequestData extends GetStoreUsedRequestData {
    }

    /**
     * Defines the request payload for AdminGetStoreUsed.
     */
    export class AdminGetStoreUsedRequestData extends ServerGetStoreUsedRequestData {
    }

    /**
     * Defines the request payload for RemoveStoreUsed.
     */
    export class RemoveStoreUsedRequestData {
        @StringDataMember({ code: ParameterCode.StoreId, minLength: 10, maxLength: 32, mustNonNull: true })
        public storeId: string;

        @GNArrayDataMember({ code: ParameterCode.OwnerIds, elementCls: String, isOptional: true })
        public ownerIds?: Array<string>;

    }

    /**
     * Defines the request payload for ServerRemoveStoreUsed.
     */
    export class ServerRemoveStoreUsedRequestData extends RemoveStoreUsedRequestData {
    }

    /**
     * Defines the request payload for AdminRemoveStoreUsed.
     */
    export class AdminRemoveStoreUsedRequestData extends ServerRemoveStoreUsedRequestData {
    }

    /**
     * Defines the request payload for GetStoreItemInformation.
     */
    export class GetStoreItemInformationRequestData {
        @StringDataMember({ code: ParameterCode.StoreId, minLength: 10, maxLength: 32, mustNonNull: true })
        public storeId: string;

        @GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
        public infoRequestParam: InfoRequestParam;

    }

    /**
     * Defines the request payload for ServerGetStoreItemInformation.
     */
    export class ServerGetStoreItemInformationRequestData extends GetStoreItemInformationRequestData {
    }

    /**
     * Defines the request payload for AdminGetStoreItemInformation.
     */
    export class AdminGetStoreItemInformationRequestData extends ServerGetStoreItemInformationRequestData {
    }

    /**
     * Defines the request payload for GetStoreItemsWithTag.
     */
    export class GetStoreItemsWithTagRequestData {
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
     * Defines the request payload for ServerGetStoreItemsWithTag.
     */
    export class ServerGetStoreItemsWithTagRequestData extends GetStoreItemsWithTagRequestData {
    }

    /**
     * Defines the request payload for AdminGetStoreItemsWithTag.
     */
    export class AdminGetStoreItemsWithTagRequestData extends ServerGetStoreItemsWithTagRequestData {
    }

    /**
     * Defines the request payload for CreateStoreItem.
     */
    export class CreateStoreItemRequestData {
        @StringDataMember({ code: ParameterCode.StoreId, minLength: 10, maxLength: 32, mustNonNull: true, isOptional: true })
        public storeId?: string;

        @StringDataMember({ code: ParameterCode.DisplayName, defaultValue: "", isOptional: true })
        public displayName?: string;

    }

    /**
     * Defines the request payload for ServerCreateStoreItem.
     */
    export class ServerCreateStoreItemRequestData extends CreateStoreItemRequestData {
    }

    /**
     * Defines the request payload for AdminCreateStoreItem.
     */
    export class AdminCreateStoreItemRequestData extends ServerCreateStoreItemRequestData {
    }

    /**
     * Defines the request payload for SetRemoveStatus.
     */
    export class SetRemoveStatusRequestData {
        @StringDataMember({ code: ParameterCode.StoreId, minLength: 10, maxLength: 32, mustNonNull: true })
        public storeId: string;

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
     * Updates mutable store metadata for one store entry.
     */
    export class SetStoreItemInformationRequestData {
        @StringDataMember({ code: ParameterCode.StoreId, minLength: 10, maxLength: 32, mustNonNull: true })
        public storeId: string;

        /**
         * Store item type mapped by the public `StoreItemType` enum.
         */
        @NumberDataMember({ code: ParameterCode.StoreItemType, minValue: 1, maxValue: 2, mustInt: true, isOptional: true })
        public storeItemType?: number;

        @GNArrayDataMember({ code: ParameterCode.StoreDatas, minLength: 0, maxLength: 32, mustNonNull: true, isOptional: true, elementCls: StoreDataParam })
        public storeDatas?: Array<StoreDataParam>;

        @GNArrayDataMember({ code: ParameterCode.StoreItems, minLength: 0, maxLength: 32, mustNonNull: true, isOptional: true, elementCls: StoreItemParam })
        public storeItems?: Array<StoreItemParam>;

        @GNArrayDataMember({ code: ParameterCode.StoreCurrencies, minLength: 0, maxLength: 32, mustNonNull: true, isOptional: true, elementCls: CurrencyParam })
        public storeCurrencies?: Array<CurrencyParam>;

        @GNArrayDataMember({ code: ParameterCode.PriceCurrencies, minLength: 0, maxLength: 32, mustNonNull: true, isOptional: true, elementCls: CurrencyParam })
        public priceCurrencies?: Array<CurrencyParam>;

        @GNHashtableDataMember({ code: ParameterCode.InAppPurchase, mustNonNull: true, isOptional: true, })
        public inAppPurchase?: InAppPurchaseParam;

        @StringDataMember({ code: ParameterCode.DisplayName, mustNonNull: true, isOptional: true, })
        public displayName?: string;

        @GNHashtableDataMember({ code: ParameterCode.Avatar, mustNonNull: true, isOptional: true, })
        public avatar?: AvatarParam;

        @GNArrayDataMember({ code: ParameterCode.Tags, minLength: 0, maxLength: 32, mustNonNull: true, isOptional: true, elementCls: TagParam })
        public tags?: Array<TagParam>;

    }

    /**
     * Defines the request payload for ServerSetStoreItemInformation.
     */
    export class ServerSetStoreItemInformationRequestData extends SetStoreItemInformationRequestData {
    }

    /**
     * Defines the request payload for AdminSetStoreItemInformation.
     */
    export class AdminSetStoreItemInformationRequestData extends ServerSetStoreItemInformationRequestData {
    }

    /**
     * Defines the request payload for ValidateAppleAppStoreReceipt.
     */
    export class ValidateAppleAppStoreReceiptRequestData {
        @StringDataMember({ code: ParameterCode.Receipt, minLength: 10, maxLength: 2048, mustNonNull: true })
        public receipt: string;

        @StringDataMember({ code: ParameterCode.Id, minLength: 10, maxLength: 11, mustNonNull: true })
        public id: string;

        @NumberDataMember({ code: ParameterCode.Type, mustInt: true })
        public type: number;

        @StringDataMember({ code: ParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
        public log?: string;

    }

    /**
     * Defines the request payload for ServerValidateAppleAppStoreReceipt.
     */
    export class ServerValidateAppleAppStoreReceiptRequestData extends ValidateAppleAppStoreReceiptRequestData {
    }

    /**
     * Defines the request payload for AdminValidateAppleAppStoreReceipt.
     */
    export class AdminValidateAppleAppStoreReceiptRequestData extends ServerValidateAppleAppStoreReceiptRequestData {
    }

    /**
     * Defines the request payload for ValidateFacebookStoreReceipt.
     */
    export class ValidateFacebookStoreReceiptRequestData {
        @StringDataMember({ code: ParameterCode.Receipt, minLength: 10, maxLength: 2048, mustNonNull: true })
        public receipt: string;

        @StringDataMember({ code: ParameterCode.Id, minLength: 10, maxLength: 11, mustNonNull: true })
        public id: string;

        @NumberDataMember({ code: ParameterCode.Type, mustInt: true })
        public type: number;

        @StringDataMember({ code: ParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
        public log?: string;

    }

    /**
     * Defines the request payload for ServerValidateFacebookStoreReceipt.
     */
    export class ServerValidateFacebookStoreReceiptRequestData extends ValidateFacebookStoreReceiptRequestData {
    }

    /**
     * Defines the request payload for AdminValidateFacebookStoreReceipt.
     */
    export class AdminValidateFacebookStoreReceiptRequestData extends ServerValidateFacebookStoreReceiptRequestData {
    }

    /**
     * Defines the request payload for ValidateGooglePlayStoreReceipt.
     */
    export class ValidateGooglePlayStoreReceiptRequestData {
        @StringDataMember({ code: ParameterCode.Receipt, minLength: 10, maxLength: 2048, mustNonNull: true })
        public receipt: string;

        @StringDataMember({ code: ParameterCode.Id, minLength: 10, maxLength: 11, mustNonNull: true })
        public id: string;

        @NumberDataMember({ code: ParameterCode.Type, mustInt: true })
        public type: number;

        @StringDataMember({ code: ParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
        public log?: string;

    }

    /**
     * Defines the request payload for ServerValidateGooglePlayStoreReceipt.
     */
    export class ServerValidateGooglePlayStoreReceiptRequestData extends ValidateGooglePlayStoreReceiptRequestData {
    }

    /**
     * Defines the request payload for AdminValidateGooglePlayStoreReceipt.
     */
    export class AdminValidateGooglePlayStoreReceiptRequestData extends ServerValidateGooglePlayStoreReceiptRequestData {
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
     * Contains the optional fields requested through `InfoRequestParam`.
     */
    export class InfoResponseParameters {
        @GNArrayDataMember({ code: ParameterCode.StoreItems, isOptional: true, elementCls: StoreInventoryItem })
        public storeItems?: Array<StoreInventoryItem>;

        @NumberDataMember({ code: ParameterCode.StoreItemType, isOptional: true })
        public storeItemType?: number;

        @GNArrayDataMember({ code: ParameterCode.StoreCurrencies, isOptional: true, elementCls: PriceCurrencyItem })
        public storeCurrencies?: Array<PriceCurrencyItem>;

        @GNArrayDataMember({ code: ParameterCode.PriceCurrencies, isOptional: true, elementCls: PriceCurrencyItem })
        public priceCurrencies?: Array<PriceCurrencyItem>;

        @GNHashtableDataMember({ code: ParameterCode.InAppPurchase, isOptional: true })
        public inAppPurchase?: InAppPurchaseItem;

        @GNHashtableDataMember({ code: ParameterCode.RemoveStatus, isOptional: true })
        public removeStatus?: GenericModels.RemoveStatusItem;

        @StringDataMember({ code: ParameterCode.DisplayName, isOptional: true })
        public displayName?: string;

        @GNHashtableDataMember({ code: ParameterCode.Avatar, isOptional: true })
        public avatar?: GenericModels.AvatarItem;

        @NumberDataMember({ code: ParameterCode.TsCreate, isOptional: true })
        public tsCreate?: number;

        @GNArrayDataMember({ code: ParameterCode.Tags, isOptional: true, elementCls: GenericModels.TagItem })
        public tags?: Array<GenericModels.TagItem>;

        @GNArrayDataMember({ code: ParameterCode.StoreDatas, isOptional: true, elementCls: GenericModels.DataItem })
        public storeDatas?: Array<GenericModels.DataItem>;

    }

    /**
     * Base store-inventory response envelope.
     */
    export class StoreInventoryResponseData {
        /**
         * Optional field bag controlled by the corresponding `InfoRequestParam`.
         */
        @GNHashtableDataMember({ code: ParameterCode.InfoResponseParameters })
        public infoResponseParameters: InfoResponseParameters;

    }

    /**
     * Defines the response payload for StoreInventoryWithStoreId.
     */
    export class StoreInventoryWithStoreIdResponseData extends StoreInventoryResponseData {
        @StringDataMember({ code: ParameterCode.StoreId })
        public storeId: string;

    }

    /**
     * Defines the response payload for StoreInventoryLeaderboard.
     */
    export class StoreInventoryLeaderboardResponseData extends StoreInventoryWithStoreIdResponseData {
        @NumberDataMember({ code: ParameterCode.Position })
        public position: number;

    }

    /**
     * Defines the response payload for StoreInventoriesWithStoreId.
     */
    export class StoreInventoriesWithStoreIdResponseData {
        @GNArrayDataMember({ code: ParameterCode.Results, elementCls: StoreInventoryWithStoreIdResponseData })
        public results: Array<StoreInventoryWithStoreIdResponseData>;

    }

    /**
     * Defines the response payload for CreateStoreItem.
     */
    export class CreateStoreItemResponseData {
        @StringDataMember({ code: ParameterCode.StoreId })
        public storeId: string;

    }

    /**
     * Describes the affected owner snapshot returned by buy/present flows.
     */
    export class OwnerInfoResponseParameters {
        @GNArrayDataMember({ code: ParameterCode.Currencies, isOptional: true, elementCls: PriceCurrencyItem })
        public currencies?: Array<PriceCurrencyItem>;

        @GNArrayDataMember({ code: ParameterCode.Inventories, isOptional: true, elementCls: OwnerStoreInventoryItem })
        public inventories?: Array<OwnerStoreInventoryItem>;

    }

    /**
     * Describes the result of a store purchase workflow.
     */
    export class BuyStoreInventoryResponseData {
        @GNArrayDataMember({ code: ParameterCode.StoreCurrencies, isOptional: true, elementCls: StoreInventoryItem })
        public storeItems?: Array<StoreInventoryItem>;

        @GNArrayDataMember({ code: ParameterCode.StoreCurrencies, isOptional: true, elementCls: PriceCurrencyItem })
        public storeCurrencies?: Array<PriceCurrencyItem>;

        @GNArrayDataMember({ code: ParameterCode.PriceCurrencies, isOptional: true, elementCls: PriceCurrencyItem })
        public priceCurrencies?: Array<PriceCurrencyItem>;

        @GNHashtableDataMember({ code: ParameterCode.InfoResponseParameters, isOptional: true })
        public infoResponseParameters?: OwnerInfoResponseParameters;

    }

    /**
     * Describes the result of a store present workflow.
     */
    export class PresentStoreInventoryResponseData {
        @GNArrayDataMember({ code: ParameterCode.StoreCurrencies, isOptional: true, elementCls: StoreInventoryItem })
        public storeItems?: Array<StoreInventoryItem>;

        @GNArrayDataMember({ code: ParameterCode.StoreCurrencies, isOptional: true, elementCls: PriceCurrencyItem })
        public storeCurrencies?: Array<PriceCurrencyItem>;

        @GNArrayDataMember({ code: ParameterCode.PriceCurrencies, isOptional: true, elementCls: PriceCurrencyItem })
        public priceCurrencies?: Array<PriceCurrencyItem>;

        @GNHashtableDataMember({ code: ParameterCode.InfoResponseParameters, isOptional: true })
        public infoResponseParameters?: OwnerInfoResponseParameters;

    }

    /**
     * Defines the response payload for Currency.
     */
    export class CurrencyResponseData {
        @StringDataMember({ code: ParameterCode.Key })
        public key: string;

        @NumberDataMember({ code: ParameterCode.Value })
        public value: number;

    }

    /**
     * Defines the response payload for StoreItem.
     */
    export class StoreItemResponseData {
        @StringDataMember({ code: ParameterCode.CatalogId })
        public catalogId: string;

        @StringDataMember({ code: ParameterCode.ClassId })
        public classId: string;

        @StringDataMember({ code: ParameterCode.ItemId })
        public itemId: string;

    }

    /**
     * Describes one store transaction log entry.
     */
    export class StoreLogResponseData {
        @StringDataMember({ code: ParameterCode.StoreId })
        public storeId: string;

        @StringDataMember({ code: ParameterCode.OwnerId })
        public id: string;

        /**
         * Owner type mapped by the public `OwnerType` enum.
         */
        @NumberDataMember({ code: ParameterCode.OwnerType })
        public type: number;

        @StringDataMember({ code: ParameterCode.TransactionId, isOptional: true })
        public transactionId?: string;

        /**
         * Receive type mapped by the public `StoreReceiveType` enum.
         */
        @NumberDataMember({ code: ParameterCode.StoreReceiveType })
        public storeReceiveType: number;

        @GNArrayDataMember({ code: ParameterCode.PriceCurrencyStartValues, elementCls: CurrencyResponseData })
        public priceCurrencyStartValues: Array<CurrencyResponseData>;

        @GNArrayDataMember({ code: ParameterCode.PriceCurrencyAmountValues, elementCls: CurrencyResponseData })
        public priceCurrencyAmountValues: Array<CurrencyResponseData>;

        @GNArrayDataMember({ code: ParameterCode.PriceCurrencyFinalValues, elementCls: CurrencyResponseData })
        public priceCurrencyFinalValues: Array<CurrencyResponseData>;

        @GNArrayDataMember({ code: ParameterCode.StoreCurrencyStartValues, elementCls: CurrencyResponseData })
        public storeCurrencyStartValues: Array<CurrencyResponseData>;

        @GNArrayDataMember({ code: ParameterCode.StoreCurrencyAmountValues, elementCls: CurrencyResponseData })
        public storeCurrencyAmountValues: Array<CurrencyResponseData>;

        @GNArrayDataMember({ code: ParameterCode.StoreCurrencyFinalValues, elementCls: CurrencyResponseData })
        public storeCurrencyFinalValues: Array<CurrencyResponseData>;

        @GNArrayDataMember({ code: ParameterCode.StoreItemFinalValues, elementCls: StoreItemResponseData })
        public storeItemFinalValues: Array<StoreItemResponseData>;

        @NumberDataMember({ code: ParameterCode.TsCreate })
        public tsCreate: number;

        @StringDataMember({ code: ParameterCode.Log })
        public log: string;
    }

    /**
     * Defines the response payload for StoreUsed.
     */
    export class StoreUsedResponseData {
        @StringDataMember({ code: ParameterCode.OwnerId })
        public id: string;

        @NumberDataMember({ code: ParameterCode.OwnerType })
        public type: number;

        @NumberDataMember({ code: ParameterCode.TsCreate })
        public tsCreate: number;

    }

    /**
     * Defines the response payload for GetCreateLeaderboard.
     */
    export class GetCreateLeaderboardResponseData {
        @GNArrayDataMember({ code: ParameterCode.Results, elementCls: StoreInventoryLeaderboardResponseData })
        public results: Array<StoreInventoryLeaderboardResponseData>;

    }

    /**
     * Returns one page of store logs.
     */
    export class GetStoreLogResponseData {
        @GNArrayDataMember({ code: ParameterCode.Results, elementCls: StoreLogResponseData })
        public results: Array<StoreLogResponseData>;

        /**
         * Continuation token for the next page, or `undefined` when pagination is exhausted.
         */
        @StringDataMember({ code: ParameterCode.Token, isOptional: true })
        public token?: string;

    }

    /**
     * Defines the response payload for GetStoreUsed.
     */
    export class GetStoreUsedResponseData {
        @GNArrayDataMember({ code: ParameterCode.Results, elementCls: StoreUsedResponseData })
        public results: Array<StoreUsedResponseData>;

    }

    /**
     * Defines an intentionally empty response payload.
     */
    export class EmptyResponseData {
    }

}
