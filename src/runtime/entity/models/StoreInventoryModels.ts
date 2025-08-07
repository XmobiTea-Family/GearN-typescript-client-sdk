import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";
import { GenericModels } from "./GenericModels";

export namespace StoreInventoryModels {
	export class AvatarParam {
		@NumberDataMember({ code: ParameterCode.Type, mustInt: true })
		public type: number;

		@StringDataMember({ code: ParameterCode.Value, minLength: 1, maxLength: 128, mustNonNull: true })
		public value: string;

	}

	export class CurrencyParam {
		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@NumberDataMember({ code: ParameterCode.Value })
		public value: number;

	}

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

	export class StoreDataParam {
		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@DataMember({ code: ParameterCode.Value })
		public value: any;

	}

	export class StoreItemParam {
		@StringDataMember({ code: ParameterCode.CatalogId, minLength: 2, maxLength: 32 })
		public catalogId: string;

		@StringDataMember({ code: ParameterCode.ClassId, minLength: 2, maxLength: 32 })
		public classId: string;

		@NumberDataMember({ code: ParameterCode.Amount })
		public amount: number;

	}

	export class TagParam {
		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@StringDataMember({ code: ParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
		public value: string;

	}

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

	export class PriceCurrencyItem {
		@StringDataMember({ code: ParameterCode.Key })
		public key: string;

		@NumberDataMember({ code: ParameterCode.Value })
		public value: number;

	}

	export class OwnerStoreInventoryItem {
		@StringDataMember({ code: ParameterCode.ItemId })
		public itemId: string;

		@StringDataMember({ code: ParameterCode.CatalogId })
		public catalogId: string;

		@StringDataMember({ code: ParameterCode.ClassId })
		public classId: string;

	}

	export class StoreInventoryItem {
		@StringDataMember({ code: ParameterCode.CatalogId })
		public catalogId: string;

		@StringDataMember({ code: ParameterCode.ClassId })
		public classId: string;

		@NumberDataMember({ code: ParameterCode.Amount })
		public amount: number;

	}

	export class BuyStoreItemRequestData {
		@StringDataMember({ code: ParameterCode.StoreId, minLength: 10, maxLength: 32, mustNonNull: true })
		public storeId: string;

		@StringDataMember({ code: ParameterCode.OwnerId, minLength: 10, maxLength: 11, mustNonNull: true })
		public id: string;

		@NumberDataMember({ code: ParameterCode.OwnerType, mustInt: true })
		public type: number;

		@StringDataMember({ code: ParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
		public log?: string;

	}

	export class ServerBuyStoreItemRequestData extends BuyStoreItemRequestData {
	}

	export class AdminBuyStoreItemRequestData extends ServerBuyStoreItemRequestData {
	}

	export class PresentStoreItemRequestData {
		@StringDataMember({ code: ParameterCode.StoreId, minLength: 10, maxLength: 32, mustNonNull: true })
		public storeId: string;

		@StringDataMember({ code: ParameterCode.OwnerId, minLength: 10, maxLength: 11, mustNonNull: true })
		public id: string;

		@NumberDataMember({ code: ParameterCode.OwnerType, mustInt: true })
		public type: number;

		@StringDataMember({ code: ParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
		public log?: string;

	}

	export class ServerPresentStoreItemRequestData extends PresentStoreItemRequestData {
	}

	export class AdminPresentStoreItemRequestData extends ServerPresentStoreItemRequestData {
	}

	export class GetStoreLogRequestData {
		@StringDataMember({ code: ParameterCode.StoreId, minLength: 10, maxLength: 32, mustNonNull: true, isOptional: true })
		public storeId?: string;

		@GNArrayDataMember({ code: ParameterCode.StoreReceiveTypes, minLength: 1, maxLength: 10, mustNonNull: true, elementCls: Number, isOptional: true })
		public storeReceiveTypes?: Array<number>;

		@StringDataMember({ code: ParameterCode.OwnerId, minLength: 10, maxLength: 11, mustNonNull: true, isOptional: true })
		public id?: string;

		@NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

		@StringDataMember({ code: ParameterCode.Token, minLength: 24, maxLength: 24, mustNonNull: true, isOptional: true })
		public token?: string;

	}

	export class ServerGetStoreLogRequestData extends GetStoreLogRequestData {
	}

	export class AdminGetStoreLogRequestData extends ServerGetStoreLogRequestData {
	}

	export class GetStoreUsedRequestData {
		@StringDataMember({ code: ParameterCode.StoreId, minLength: 10, maxLength: 32, mustNonNull: true })
		public storeId: string;

	}

	export class ServerGetStoreUsedRequestData extends GetStoreUsedRequestData {
	}

	export class AdminGetStoreUsedRequestData extends ServerGetStoreUsedRequestData {
	}

	export class RemoveStoreUsedRequestData {
		@StringDataMember({ code: ParameterCode.StoreId, minLength: 10, maxLength: 32, mustNonNull: true })
		public storeId: string;

		@GNArrayDataMember({ code: ParameterCode.OwnerIds, elementCls: String, isOptional: true })
		public ownerIds?: Array<string>;

	}

	export class ServerRemoveStoreUsedRequestData extends RemoveStoreUsedRequestData {
	}

	export class AdminRemoveStoreUsedRequestData extends ServerRemoveStoreUsedRequestData {
	}

	export class GetStoreItemInformationRequestData {
		@StringDataMember({ code: ParameterCode.StoreId, minLength: 10, maxLength: 32, mustNonNull: true })
		public storeId: string;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class ServerGetStoreItemInformationRequestData extends GetStoreItemInformationRequestData {
	}

	export class AdminGetStoreItemInformationRequestData extends ServerGetStoreItemInformationRequestData {
	}

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

	export class ServerGetStoreItemsWithTagRequestData extends GetStoreItemsWithTagRequestData {
	}

	export class AdminGetStoreItemsWithTagRequestData extends ServerGetStoreItemsWithTagRequestData {
	}

	export class CreateStoreItemRequestData {
		@StringDataMember({ code: ParameterCode.StoreId, minLength: 10, maxLength: 32, mustNonNull: true, isOptional: true })
		public storeId?: string;

		@StringDataMember({ code: ParameterCode.DisplayName, defaultValue: "", isOptional: true })
		public displayName?: string;

	}

	export class ServerCreateStoreItemRequestData extends CreateStoreItemRequestData {
	}

	export class AdminCreateStoreItemRequestData extends ServerCreateStoreItemRequestData {
	}

	export class SetRemoveStatusRequestData {
		@StringDataMember({ code: ParameterCode.StoreId, minLength: 10, maxLength: 32, mustNonNull: true })
		public storeId: string;

		@StringDataMember({ code: ParameterCode.Reason, isOptional: true, defaultValue: "" })
		public reason?: string;

	}

	export class ServerSetRemoveStatusRequestData extends SetRemoveStatusRequestData {
	}

	export class AdminSetRemoveStatusRequestData extends ServerSetRemoveStatusRequestData {
	}

	export class SetStoreItemInformationRequestData {
		@StringDataMember({ code: ParameterCode.StoreId, minLength: 10, maxLength: 32, mustNonNull: true })
		public storeId: string;

		@NumberDataMember({ code: ParameterCode.StoreItemType, minValue: 1, maxValue: 2, mustInt: true, isOptional: true })
		public storeItemType?: number;

		@GNArrayDataMember({ code: ParameterCode.StoreDatas, minLength: 0, maxLength: 32, mustNonNull: true, isOptional: true, elementCls: StoreDataParam })
		public storeDataParams?: Array<StoreDataParam>;

		@GNArrayDataMember({ code: ParameterCode.StoreItems, minLength: 0, maxLength: 32, mustNonNull: true, isOptional: true, elementCls: StoreItemParam })
		public storeItemParams?: Array<StoreItemParam>;

		@GNArrayDataMember({ code: ParameterCode.StoreCurrencies, minLength: 0, maxLength: 32, mustNonNull: true, isOptional: true, elementCls: CurrencyParam })
		public storeCurrencyParams?: Array<CurrencyParam>;

		@GNArrayDataMember({ code: ParameterCode.PriceCurrencies, minLength: 0, maxLength: 32, mustNonNull: true, isOptional: true, elementCls: CurrencyParam })
		public priceCurrencyParams?: Array<CurrencyParam>;

		@GNHashtableDataMember({ code: ParameterCode.InAppPurchase, mustNonNull: true, isOptional: true, })
		public inAppPurchaseParam?: InAppPurchaseParam;

		@StringDataMember({ code: ParameterCode.DisplayName, mustNonNull: true, isOptional: true, })
		public displayName?: string;

		@GNHashtableDataMember({ code: ParameterCode.Avatar, mustNonNull: true, isOptional: true, })
		public avatarParam?: AvatarParam;

		@GNArrayDataMember({ code: ParameterCode.Tags, minLength: 0, maxLength: 32, mustNonNull: true, isOptional: true, elementCls: TagParam })
		public tagParams?: Array<TagParam>;

	}

	export class ServerSetStoreItemInformationRequestData extends SetStoreItemInformationRequestData {
	}

	export class AdminSetStoreItemInformationRequestData extends ServerSetStoreItemInformationRequestData {
	}

	export class ValidateAppleAppStoreReceiptRequestData {
		@StringDataMember({ code: ParameterCode.Receipt, minLength: 10, maxLength: 2048, mustNonNull: true })
		public receipt: string;

		@StringDataMember({ code: ParameterCode.OwnerId, minLength: 10, maxLength: 11, mustNonNull: true })
		public id: string;

		@NumberDataMember({ code: ParameterCode.OwnerType, mustInt: true })
		public type: number;

		@StringDataMember({ code: ParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
		public log?: string;

	}

	export class ServerValidateAppleAppStoreReceiptRequestData extends ValidateAppleAppStoreReceiptRequestData {
	}

	export class AdminValidateAppleAppStoreReceiptRequestData extends ServerValidateAppleAppStoreReceiptRequestData {
	}

	export class ValidateFacebookStoreReceiptRequestData {
		@StringDataMember({ code: ParameterCode.Receipt, minLength: 10, maxLength: 2048, mustNonNull: true })
		public receipt: string;

		@StringDataMember({ code: ParameterCode.OwnerId, minLength: 10, maxLength: 11, mustNonNull: true })
		public id: string;

		@NumberDataMember({ code: ParameterCode.OwnerType, mustInt: true })
		public type: number;

		@StringDataMember({ code: ParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
		public log?: string;

	}

	export class ServerValidateFacebookStoreReceiptRequestData extends ValidateFacebookStoreReceiptRequestData {
	}

	export class AdminValidateFacebookStoreReceiptRequestData extends ServerValidateFacebookStoreReceiptRequestData {
	}

	export class ValidateGooglePlayStoreReceiptRequestData {
		@StringDataMember({ code: ParameterCode.Receipt, minLength: 10, maxLength: 2048, mustNonNull: true })
		public receipt: string;

		@StringDataMember({ code: ParameterCode.OwnerId, minLength: 10, maxLength: 11, mustNonNull: true })
		public id: string;

		@NumberDataMember({ code: ParameterCode.OwnerType, mustInt: true })
		public type: number;

		@StringDataMember({ code: ParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
		public log?: string;

	}

	export class ServerValidateGooglePlayStoreReceiptRequestData extends ValidateGooglePlayStoreReceiptRequestData {
	}

	export class AdminValidateGooglePlayStoreReceiptRequestData extends ServerValidateGooglePlayStoreReceiptRequestData {
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

	export class StoreInventoryResponseData {
		@GNHashtableDataMember({ code: ParameterCode.InfoResponseParameters })
		public infoResponseParameters: InfoResponseParameters;

	}

	export class StoreInventoryWithStoreIdResponseData extends StoreInventoryResponseData {
		@StringDataMember({ code: ParameterCode.StoreId })
		public storeId: string;

	}

	export class StoreInventoryLeaderboardResponseData extends StoreInventoryWithStoreIdResponseData {
		@NumberDataMember({ code: ParameterCode.Position })
		public position: number;

	}

	export class StoreInventoriesWithStoreIdResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: StoreInventoryWithStoreIdResponseData })
		public results: Array<StoreInventoryWithStoreIdResponseData>;

	}

	export class CreateStoreItemResponseData {
		@StringDataMember({ code: ParameterCode.StoreId })
		public storeId: string;

	}

	export class OwnerInfoResponseParameters {
		@GNArrayDataMember({ code: ParameterCode.Currencies, isOptional: true, elementCls: PriceCurrencyItem })
		public currencies?: Array<PriceCurrencyItem>;

		@GNArrayDataMember({ code: ParameterCode.Inventories, isOptional: true, elementCls: OwnerStoreInventoryItem })
		public inventories?: Array<OwnerStoreInventoryItem>;

	}

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

	export class CurrencyResponseData {
		@StringDataMember({ code: ParameterCode.Key })
		public key: string;

		@NumberDataMember({ code: ParameterCode.Value })
		public value: number;

	}

	export class StoreItemResponseData {
		@StringDataMember({ code: ParameterCode.CatalogId })
		public catalogId: string;

		@StringDataMember({ code: ParameterCode.ClassId })
		public classId: string;

		@StringDataMember({ code: ParameterCode.ItemId })
		public itemId: string;

	}

	export class StoreLogResponseData {
		@StringDataMember({ code: ParameterCode.StoreId })
		public storeId: string;

		@StringDataMember({ code: ParameterCode.OwnerId })
		public id: string;

		@NumberDataMember({ code: ParameterCode.OwnerType })
		public type: number;

		@StringDataMember({ code: ParameterCode.TransactionId, isOptional: true })
		public transactionId?: string;

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

	export class StoreUsedResponseData {
		@StringDataMember({ code: ParameterCode.OwnerId })
		public id: string;

		@NumberDataMember({ code: ParameterCode.OwnerType })
		public type: number;

		@NumberDataMember({ code: ParameterCode.TsCreate })
		public tsCreate: number;

	}

	export class GetCreateLeaderboardResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: StoreInventoryLeaderboardResponseData })
		public results: Array<StoreInventoryLeaderboardResponseData>;

	}

	export class GetStoreLogResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: StoreLogResponseData })
		public results: Array<StoreLogResponseData>;

		@StringDataMember({ code: ParameterCode.Token, isOptional: true })
		public token?: string;

	}

	export class GetStoreUsedResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: StoreUsedResponseData })
		public results: Array<StoreUsedResponseData>;

	}

	export class EmptyResponseData {
	}

}
