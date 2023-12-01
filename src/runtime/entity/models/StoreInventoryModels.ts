import { GNParameterCode } from "./../../constant/parameterCode/GNParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";
import { GenericModels } from "./GenericModels";

export namespace StoreInventoryModels {
	export class AvatarParam {
		@NumberDataMember({ code: GNParameterCode.Type, mustInt: true })
		public type: number;

		@StringDataMember({ code: GNParameterCode.Value, minLength: 1, maxLength: 128, mustNonNull: true })
		public value: string;

	}

	export class CurrencyParam {
		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@NumberDataMember({ code: GNParameterCode.Value })
		public value: number;

	}

	export class InAppPurchaseParam {
		@StringDataMember({ code: GNParameterCode.FacebookStoreId, minLength: 1, maxLength: 128, mustNonNull: true, isOptional: true })
		public facebookStoreId?: string;

		@StringDataMember({ code: GNParameterCode.GooglePlayStoreId, minLength: 1, maxLength: 128, mustNonNull: true, isOptional: true })
		public googlePlayStoreId?: string;

		@StringDataMember({ code: GNParameterCode.AppleAppStoreId, minLength: 1, maxLength: 128, mustNonNull: true, isOptional: true })
		public appleAppStoreId?: string;

		@NumberDataMember({ code: GNParameterCode.AnalyticsPrice, isOptional: true })
		public analyticsPrice?: number;

	}

	export class InfoRequestParam {
		@BooleanDataMember({ code: GNParameterCode.StoreItems, isOptional: true, defaultValue: false })
		public storeItems?: boolean;

		@BooleanDataMember({ code: GNParameterCode.StoreCurrencies, isOptional: true, defaultValue: false })
		public storeCurrencies?: boolean;

		@BooleanDataMember({ code: GNParameterCode.PriceCurrencies, isOptional: true, defaultValue: false })
		public priceCurrencies?: boolean;

		@BooleanDataMember({ code: GNParameterCode.InAppPurchase, isOptional: true, defaultValue: false })
		public inAppPurchase?: boolean;

		@BooleanDataMember({ code: GNParameterCode.RemoveStatus, isOptional: true, defaultValue: false })
		public removeStatus?: boolean;

		@BooleanDataMember({ code: GNParameterCode.DisplayName, isOptional: true, defaultValue: false })
		public displayName?: boolean;

		@BooleanDataMember({ code: GNParameterCode.Avatar, isOptional: true, defaultValue: false })
		public avatar?: boolean;

		@BooleanDataMember({ code: GNParameterCode.TsCreate, isOptional: true, defaultValue: false })
		public tsCreate?: boolean;

		@BooleanDataMember({ code: GNParameterCode.Tags, isOptional: true, defaultValue: false })
		public tags?: boolean;

		@BooleanDataMember({ code: GNParameterCode.StoreDatas, isOptional: true, defaultValue: false })
		public storeDatas?: boolean;

	}

	export class StoreDataParam {
		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@DataMember({ code: GNParameterCode.Value })
		public value: any;

	}

	export class StoreItemParam {
		@StringDataMember({ code: GNParameterCode.CatalogId, minLength: 2, maxLength: 32 })
		public catalogId: string;

		@StringDataMember({ code: GNParameterCode.ClassId, minLength: 2, maxLength: 32 })
		public classId: string;

		@NumberDataMember({ code: GNParameterCode.Amount })
		public amount: number;

	}

	export class TagParam {
		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@StringDataMember({ code: GNParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
		public value: string;

	}

	export class InAppPurchaseItem {
		@StringDataMember({ code: GNParameterCode.FacebookStoreId })
		public facebookStoreId: string;

		@StringDataMember({ code: GNParameterCode.AppleAppStoreId })
		public appleAppStoreId: string;

		@StringDataMember({ code: GNParameterCode.GooglePlayStoreId })
		public googlePlayStoreId: string;

		@NumberDataMember({ code: GNParameterCode.AnalyticsPrice })
		public analyticsPrice: number;

	}

	export class PriceCurrencyItem {
		@StringDataMember({ code: GNParameterCode.Key })
		public key: string;

		@NumberDataMember({ code: GNParameterCode.Value })
		public value: number;

	}

	export class OwnerStoreInventoryItem {
		@StringDataMember({ code: GNParameterCode.ItemId })
		public itemId: string;

		@StringDataMember({ code: GNParameterCode.CatalogId })
		public catalogId: string;

		@StringDataMember({ code: GNParameterCode.ClassId })
		public classId: string;

	}

	export class StoreInventoryItem {
		@StringDataMember({ code: GNParameterCode.CatalogId })
		public catalogId: string;

		@StringDataMember({ code: GNParameterCode.ClassId })
		public classId: string;

		@NumberDataMember({ code: GNParameterCode.Amount })
		public amount: number;

	}

	export class BuyStoreItemRequestData {
		@StringDataMember({ code: GNParameterCode.StoreId, minLength: 10, maxLength: 10, mustNonNull: true })
		public storeId: string;

		@StringDataMember({ code: GNParameterCode.OwnerId, minLength: 10, maxLength: 11, mustNonNull: true })
		public id: string;

		@NumberDataMember({ code: GNParameterCode.OwnerType, mustInt: true })
		public type: number;

		@StringDataMember({ code: GNParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
		public log?: string;

	}

	export class ServerBuyStoreItemRequestData extends BuyStoreItemRequestData {
	}

	export class AdminBuyStoreItemRequestData extends ServerBuyStoreItemRequestData {
	}

	export class PresentStoreItemRequestData {
		@StringDataMember({ code: GNParameterCode.StoreId, minLength: 10, maxLength: 10, mustNonNull: true })
		public storeId: string;

		@StringDataMember({ code: GNParameterCode.OwnerId, minLength: 10, maxLength: 11, mustNonNull: true })
		public id: string;

		@NumberDataMember({ code: GNParameterCode.OwnerType, mustInt: true })
		public type: number;

		@StringDataMember({ code: GNParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
		public log?: string;

	}

	export class ServerPresentStoreItemRequestData extends PresentStoreItemRequestData {
	}

	export class AdminPresentStoreItemRequestData extends ServerPresentStoreItemRequestData {
	}

	export class GetStoreLogRequestData {
		@StringDataMember({ code: GNParameterCode.StoreId, minLength: 10, maxLength: 10, mustNonNull: true, isOptional: true })
		public storeId?: string;

		@GNArrayDataMember({ code: GNParameterCode.StoreReceiveTypes, minLength: 1, maxLength: 10, mustNonNull: true, elementCls: Number, isOptional: true })
		public storeReceiveTypes?: Array<number>;

		@StringDataMember({ code: GNParameterCode.OwnerId, minLength: 10, maxLength: 11, mustNonNull: true, isOptional: true })
		public id?: string;

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 5, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

		@StringDataMember({ code: GNParameterCode.Token, minLength: 24, maxLength: 24, mustNonNull: true, isOptional: true })
		public token?: string;

	}

	export class ServerGetStoreLogRequestData extends GetStoreLogRequestData {
	}

	export class AdminGetStoreLogRequestData extends ServerGetStoreLogRequestData {
	}

	export class GetStoreItemInformationRequestData {
		@StringDataMember({ code: GNParameterCode.StoreId, minLength: 10, maxLength: 10, mustNonNull: true })
		public storeId: string;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class ServerGetStoreItemInformationRequestData extends GetStoreItemInformationRequestData {
	}

	export class AdminGetStoreItemInformationRequestData extends ServerGetStoreItemInformationRequestData {
	}

	export class GetStoreItemsWithTagRequestData {
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

	export class ServerGetStoreItemsWithTagRequestData extends GetStoreItemsWithTagRequestData {
	}

	export class AdminGetStoreItemsWithTagRequestData extends ServerGetStoreItemsWithTagRequestData {
	}

	export class GrantStoreItemRequestData {
		@StringDataMember({ code: GNParameterCode.StoreId, minLength: 10, maxLength: 10, mustNonNull: true, isOptional: true })
		public storeId?: string;

		@StringDataMember({ code: GNParameterCode.DisplayName, defaultValue: "", isOptional: true })
		public displayName?: string;

	}

	export class ServerGrantStoreItemRequestData extends GrantStoreItemRequestData {
	}

	export class AdminGrantStoreItemRequestData extends ServerGrantStoreItemRequestData {
	}

	export class SetRemoveStatusRequestData {
		@StringDataMember({ code: GNParameterCode.StoreId, minLength: 10, maxLength: 10, mustNonNull: true })
		public storeId: string;

		@StringDataMember({ code: GNParameterCode.Reason, isOptional: true, defaultValue: "" })
		public reason?: string;

	}

	export class ServerSetRemoveStatusRequestData extends SetRemoveStatusRequestData {
	}

	export class AdminSetRemoveStatusRequestData extends ServerSetRemoveStatusRequestData {
	}

	export class SetStoreItemInformationRequestData {
		@StringDataMember({ code: GNParameterCode.StoreId, minLength: 10, maxLength: 10, mustNonNull: true })
		public storeId: string;

		@GNArrayDataMember({ code: GNParameterCode.StoreDatas, minLength: 0, maxLength: 32, mustNonNull: true, isOptional: true, elementCls: StoreDataParam })
		public storeDataParams?: Array<StoreDataParam>;
	
		@GNArrayDataMember({ code: GNParameterCode.StoreItems, minLength: 0, maxLength: 32, mustNonNull: true, isOptional: true, elementCls: StoreItemParam })
		public storeItemParams?: Array<StoreItemParam>;
	
		@GNArrayDataMember({ code: GNParameterCode.StoreCurrencies, minLength: 0, maxLength: 32, mustNonNull: true, isOptional: true, elementCls: CurrencyParam })
		public storeCurrencyParams?: Array<CurrencyParam>;
	
		@GNArrayDataMember({ code: GNParameterCode.PriceCurrencies, minLength: 0, maxLength: 32, mustNonNull: true, isOptional: true, elementCls: CurrencyParam })
		public priceCurrencyParams?: Array<CurrencyParam>;
	
		@GNHashtableDataMember({ code: GNParameterCode.InAppPurchase, mustNonNull: true, isOptional: true, })
		public inAppPurchaseParam?: InAppPurchaseParam;
	
		@StringDataMember({ code: GNParameterCode.DisplayName, mustNonNull: true, isOptional: true, })
		public displayName?: string;
	
		@GNHashtableDataMember({ code: GNParameterCode.Avatar, mustNonNull: true, isOptional: true, })
		public avatarParam?: AvatarParam;
	
		@GNArrayDataMember({ code: GNParameterCode.Tags, minLength: 0, maxLength: 32, mustNonNull: true, isOptional: true, elementCls: TagParam })
		public tagParams?: Array<TagParam>;

	}

	export class ServerSetStoreItemInformationRequestData extends SetStoreItemInformationRequestData {
	}

	export class AdminSetStoreItemInformationRequestData extends ServerSetStoreItemInformationRequestData {
	}

	export class ValidateAppleAppStoreReceiptRequestData {
		@StringDataMember({ code: GNParameterCode.Receipt, minLength: 10, maxLength: 2048, mustNonNull: true })
		public receipt: string;

		@StringDataMember({ code: GNParameterCode.OwnerId, minLength: 10, maxLength: 11, mustNonNull: true })
		public id: string;

		@NumberDataMember({ code: GNParameterCode.OwnerType, mustInt: true })
		public type: number;

		@StringDataMember({ code: GNParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
		public log?: string;

	}

	export class ServerValidateAppleAppStoreReceiptRequestData extends ValidateAppleAppStoreReceiptRequestData {
	}

	export class AdminValidateAppleAppStoreReceiptRequestData extends ServerValidateAppleAppStoreReceiptRequestData {
	}

	export class ValidateFacebookStoreReceiptRequestData {
		@StringDataMember({ code: GNParameterCode.Receipt, minLength: 10, maxLength: 2048, mustNonNull: true })
		public receipt: string;

		@StringDataMember({ code: GNParameterCode.OwnerId, minLength: 10, maxLength: 11, mustNonNull: true })
		public id: string;

		@NumberDataMember({ code: GNParameterCode.OwnerType, mustInt: true })
		public type: number;

		@StringDataMember({ code: GNParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
		public log?: string;

	}

	export class ServerValidateFacebookStoreReceiptRequestData extends ValidateFacebookStoreReceiptRequestData {
	}

	export class AdminValidateFacebookStoreReceiptRequestData extends ServerValidateFacebookStoreReceiptRequestData {
	}

	export class ValidateGooglePlayStoreReceiptRequestData {
		@StringDataMember({ code: GNParameterCode.Receipt, minLength: 10, maxLength: 2048, mustNonNull: true })
		public receipt: string;

		@StringDataMember({ code: GNParameterCode.OwnerId, minLength: 10, maxLength: 11, mustNonNull: true })
		public id: string;

		@NumberDataMember({ code: GNParameterCode.OwnerType, mustInt: true })
		public type: number;

		@StringDataMember({ code: GNParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
		public log?: string;

	}

	export class ServerValidateGooglePlayStoreReceiptRequestData extends ValidateGooglePlayStoreReceiptRequestData {
	}

	export class AdminValidateGooglePlayStoreReceiptRequestData extends ServerValidateGooglePlayStoreReceiptRequestData {
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

	export class InfoResponseParameters {
		@GNArrayDataMember({ code: GNParameterCode.StoreItems, isOptional: true, elementCls: StoreInventoryItem })
		public storeItems?: Array<StoreInventoryItem>;

		@GNArrayDataMember({ code: GNParameterCode.StoreCurrencies, isOptional: true, elementCls: PriceCurrencyItem })
		public storeCurrencies?: Array<PriceCurrencyItem>;

		@GNArrayDataMember({ code: GNParameterCode.PriceCurrencies, isOptional: true, elementCls: PriceCurrencyItem })
		public priceCurrencies?: Array<PriceCurrencyItem>;

		@GNHashtableDataMember({ code: GNParameterCode.InAppPurchase, isOptional: true })
		public inAppPurchase?: InAppPurchaseItem;

		@GNHashtableDataMember({ code: GNParameterCode.RemoveStatus, isOptional: true })
		public removeStatus?: GenericModels.RemoveStatusItem;

		@StringDataMember({ code: GNParameterCode.DisplayName, isOptional: true })
		public displayName?: string;

		@GNHashtableDataMember({ code: GNParameterCode.Avatar, isOptional: true })
		public avatar?: GenericModels.AvatarItem;

		@NumberDataMember({ code: GNParameterCode.TsCreate, isOptional: true })
		public tsCreate?: number;

		@GNArrayDataMember({ code: GNParameterCode.Tags, isOptional: true, elementCls: GenericModels.TagItem })
		public tags?: Array<GenericModels.TagItem>;

		@GNArrayDataMember({ code: GNParameterCode.StoreDatas, isOptional: true, elementCls: GenericModels.DataItem })
		public storeDatas?: Array<GenericModels.DataItem>;

	}

	export class StoreInventoryResponseData {
		@GNHashtableDataMember({ code: GNParameterCode.InfoResponseParameters })
		public infoResponseParameters: InfoResponseParameters;

	}

	export class StoreInventoryWithStoreIdResponseData extends StoreInventoryResponseData {
		@StringDataMember({ code: GNParameterCode.StoreId })
		public storeId: string;

	}

	export class StoreInventoryLeaderboardResponseData extends StoreInventoryWithStoreIdResponseData {
		@NumberDataMember({ code: GNParameterCode.Position })
		public position: number;

		@NumberDataMember({ code: GNParameterCode.BackupValue, isOptional: true })
		public backupValue?: number;

	}

	export class StoreInventoriesWithStoreIdResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: StoreInventoryWithStoreIdResponseData })
		public results: Array<StoreInventoryWithStoreIdResponseData>;

	}

	export class GrantStoreItemResponseData {
		@StringDataMember({ code: GNParameterCode.StoreId })
		public storeId: string;

	}

	export class OwnerInfoResponseParameters {
		@GNArrayDataMember({ code: GNParameterCode.Currencies, isOptional: true, elementCls: PriceCurrencyItem })
		public currencies?: Array<PriceCurrencyItem>;

		@GNArrayDataMember({ code: GNParameterCode.Inventories, isOptional: true, elementCls: OwnerStoreInventoryItem })
		public inventories?: Array<OwnerStoreInventoryItem>;

	}

	export class BuyStoreInventoryResponseData {
		@GNArrayDataMember({ code: GNParameterCode.StoreCurrencies, isOptional: true, elementCls: StoreInventoryItem })
		public storeItems?: Array<StoreInventoryItem>;

		@GNArrayDataMember({ code: GNParameterCode.StoreCurrencies, isOptional: true, elementCls: PriceCurrencyItem })
		public storeCurrencies?: Array<PriceCurrencyItem>;

		@GNArrayDataMember({ code: GNParameterCode.PriceCurrencies, isOptional: true, elementCls: PriceCurrencyItem })
		public priceCurrencies?: Array<PriceCurrencyItem>;

		@GNHashtableDataMember({ code: GNParameterCode.InfoResponseParameters, isOptional: true })
		public infoResponseParameters?: OwnerInfoResponseParameters;

	}

	export class PresentStoreInventoryResponseData {
		@GNArrayDataMember({ code: GNParameterCode.StoreCurrencies, isOptional: true, elementCls: StoreInventoryItem })
		public storeItems?: Array<StoreInventoryItem>;

		@GNArrayDataMember({ code: GNParameterCode.StoreCurrencies, isOptional: true, elementCls: PriceCurrencyItem })
		public storeCurrencies?: Array<PriceCurrencyItem>;

		@GNArrayDataMember({ code: GNParameterCode.PriceCurrencies, isOptional: true, elementCls: PriceCurrencyItem })
		public priceCurrencies?: Array<PriceCurrencyItem>;

		@GNHashtableDataMember({ code: GNParameterCode.InfoResponseParameters, isOptional: true })
		public infoResponseParameters?: OwnerInfoResponseParameters;

	}

	export class CurrencyResponseData {
		@StringDataMember({ code: GNParameterCode.Key })
		public key: string;

		@NumberDataMember({ code: GNParameterCode.Value })
		public value: number;

	}

	export class StoreItemResponseData {
		@StringDataMember({ code: GNParameterCode.CatalogId })
		public catalogId: string;

		@StringDataMember({ code: GNParameterCode.ClassId })
		public classId: string;

		@StringDataMember({ code: GNParameterCode.ItemId })
		public itemId: string;
		
	}

	export class StoreLogResponseData {
		@StringDataMember({ code: GNParameterCode.StoreId })
		public storeId: string;

		@StringDataMember({ code: GNParameterCode.OwnerId })
		public id: string;

		@NumberDataMember({ code: GNParameterCode.OwnerType })
		public type: number;

		@StringDataMember({ code: GNParameterCode.TransactionId, isOptional: true })
		public transactionId?: string;

		@NumberDataMember({ code: GNParameterCode.StoreReceiveType })
		public storeReceiveType: number;

		@GNArrayDataMember({ code: GNParameterCode.PriceCurrencyStartValues, elementCls: CurrencyResponseData })
		public priceCurrencyStartValues: Array<CurrencyResponseData>;

		@GNArrayDataMember({ code: GNParameterCode.PriceCurrencyAmountValues, elementCls: CurrencyResponseData })
		public priceCurrencyAmountValues: Array<CurrencyResponseData>;

		@GNArrayDataMember({ code: GNParameterCode.PriceCurrencyFinalValues, elementCls: CurrencyResponseData })
		public priceCurrencyFinalValues: Array<CurrencyResponseData>;

		@GNArrayDataMember({ code: GNParameterCode.StoreCurrencyStartValues, elementCls: CurrencyResponseData })
		public storeCurrencyStartValues: Array<CurrencyResponseData>;

		@GNArrayDataMember({ code: GNParameterCode.StoreCurrencyAmountValues, elementCls: CurrencyResponseData })
		public storeCurrencyAmountValues: Array<CurrencyResponseData>;

		@GNArrayDataMember({ code: GNParameterCode.StoreCurrencyFinalValues, elementCls: CurrencyResponseData })
		public storeCurrencyFinalValues: Array<CurrencyResponseData>;

		@GNArrayDataMember({ code: GNParameterCode.StoreItemFinalValues, elementCls: StoreItemResponseData })
		public storeItemFinalValues: Array<StoreItemResponseData>;

		@NumberDataMember({ code: GNParameterCode.TsCreate })
		public tsCreate: number;

		@StringDataMember({ code: GNParameterCode.Log })
		public log: string;
	}

	export class GetCreateLeaderboardResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: StoreInventoryLeaderboardResponseData })
		public results: Array<StoreInventoryLeaderboardResponseData>;

	}

	export class GetStoreLogResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: StoreLogResponseData })
		public results: Array<StoreLogResponseData>;

		@StringDataMember({ code: GNParameterCode.Token, isOptional: true })
		public token?: string;

	}

	export class EmptyResponseData {
	}

}
