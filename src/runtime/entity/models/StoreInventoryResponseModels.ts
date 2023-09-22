import { CustomOperationResponseAbstract } from "../response/CustomOperationResponse";
import { StoreInventoryModels } from "./StoreInventoryModels";

export module StoreInventoryResponseModels {
	export class BuyStoreItemOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.BuyStoreInventoryResponseData> {
	}

	export class GetStoreItemInformationOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.StoreInventoryResponseData> {
	}

	export class GetStoreItemsWithTagOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.StoreInventoriesWithStoreIdResponseData> {
	}

	export class GrantStoreItemOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.GrantStoreItemResponseData> {
	}

	export class SetRemoveStatusOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.EmptyResponseData> {
	}

	export class SetStoreItemInformationOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.StoreInventoryResponseData> {
	}

	export class ValidateAppleAppStoreReceiptOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.BuyStoreInventoryResponseData> {
	}

	export class ValidateFacebookStoreReceiptOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.BuyStoreInventoryResponseData> {
	}

	export class ValidateGooglePlayStoreReceiptOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.BuyStoreInventoryResponseData> {
	}

}
