import { CustomOperationResponseAbstract } from "./../response/CustomOperationResponse";
import { StoreInventoryModels } from "./StoreInventoryModels";

export namespace StoreInventoryResponseModels {
	export class BuyStoreItemOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.BuyStoreInventoryResponseData> {

		constructor() {
			super();
			this.responseDataCls = StoreInventoryModels.BuyStoreInventoryResponseData;
		}
	}

	export class GetStoreItemInformationOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.StoreInventoryResponseData> {

		constructor() {
			super();
			this.responseDataCls = StoreInventoryModels.StoreInventoryResponseData;
		}
	}

	export class GetStoreItemsWithTagOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.StoreInventoriesWithStoreIdResponseData> {

		constructor() {
			super();
			this.responseDataCls = StoreInventoryModels.StoreInventoriesWithStoreIdResponseData;
		}
	}

	export class CreateStoreItemOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.CreateStoreItemResponseData> {

		constructor() {
			super();
			this.responseDataCls = StoreInventoryModels.CreateStoreItemResponseData;
		}
	}

	export class SetRemoveStatusOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.EmptyResponseData> {

		constructor() {
			super();
			this.responseDataCls = StoreInventoryModels.EmptyResponseData;
		}
	}

	export class SetStoreItemInformationOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.StoreInventoryResponseData> {

		constructor() {
			super();
			this.responseDataCls = StoreInventoryModels.StoreInventoryResponseData;
		}
	}

	export class ValidateAppleAppStoreReceiptOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.BuyStoreInventoryResponseData> {

		constructor() {
			super();
			this.responseDataCls = StoreInventoryModels.BuyStoreInventoryResponseData;
		}
	}

	export class ValidateFacebookStoreReceiptOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.BuyStoreInventoryResponseData> {

		constructor() {
			super();
			this.responseDataCls = StoreInventoryModels.BuyStoreInventoryResponseData;
		}
	}

	export class ValidateGooglePlayStoreReceiptOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.BuyStoreInventoryResponseData> {

		constructor() {
			super();
			this.responseDataCls = StoreInventoryModels.BuyStoreInventoryResponseData;
		}
	}

	export class GetCreateLeaderboardOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.GetCreateLeaderboardResponseData> {

		constructor() {
			super();
			this.responseDataCls = StoreInventoryModels.GetCreateLeaderboardResponseData;
		}
	}

	export class GetStoreLogOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.GetStoreLogResponseData> {

		constructor() {
			super();
			this.responseDataCls = StoreInventoryModels.GetStoreLogResponseData;
		}
	}

	export class PresentStoreItemOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.PresentStoreInventoryResponseData> {

		constructor() {
			super();
			this.responseDataCls = StoreInventoryModels.PresentStoreInventoryResponseData;
		}
	}

	export class GetStoreUsedOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.GetStoreUsedResponseData> {

		constructor() {
			super();
			this.responseDataCls = StoreInventoryModels.GetStoreUsedResponseData;
		}
	}

	export class RemoveStoreUsedOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.EmptyResponseData> {

		constructor() {
			super();
			this.responseDataCls = StoreInventoryModels.EmptyResponseData;
		}
	}

}
