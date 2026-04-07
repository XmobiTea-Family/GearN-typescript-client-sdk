import { CustomOperationResponseAbstract } from "./../response/CustomOperationResponse";
import { StoreInventoryModels } from "./StoreInventoryModels";

/**
 * Groups typed response contracts for StoreInventory.
 */
export namespace StoreInventoryResponseModels {
	/**
	 * Maps the BuyStoreItem operation to a typed response wrapper.
	 */
	export class BuyStoreItemOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.BuyStoreInventoryResponseData> {

		/**
		 * Creates a new BuyStoreItemOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = StoreInventoryModels.BuyStoreInventoryResponseData;
		}
	}

	/**
	 * Maps the GetStoreItemInformation operation to a typed response wrapper.
	 */
	export class GetStoreItemInformationOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.StoreInventoryResponseData> {

		/**
		 * Creates a new GetStoreItemInformationOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = StoreInventoryModels.StoreInventoryResponseData;
		}
	}

	/**
	 * Maps the GetStoreItemsWithTag operation to a typed response wrapper.
	 */
	export class GetStoreItemsWithTagOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.StoreInventoriesWithStoreIdResponseData> {

		/**
		 * Creates a new GetStoreItemsWithTagOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = StoreInventoryModels.StoreInventoriesWithStoreIdResponseData;
		}
	}

	/**
	 * Maps the CreateStoreItem operation to a typed response wrapper.
	 */
	export class CreateStoreItemOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.CreateStoreItemResponseData> {

		/**
		 * Creates a new CreateStoreItemOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = StoreInventoryModels.CreateStoreItemResponseData;
		}
	}

	/**
	 * Maps the SetRemoveStatus operation to a typed response wrapper.
	 */
	export class SetRemoveStatusOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.EmptyResponseData> {

		/**
		 * Creates a new SetRemoveStatusOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = StoreInventoryModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the SetStoreItemInformation operation to a typed response wrapper.
	 */
	export class SetStoreItemInformationOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.StoreInventoryResponseData> {

		/**
		 * Creates a new SetStoreItemInformationOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = StoreInventoryModels.StoreInventoryResponseData;
		}
	}

	/**
	 * Maps the ValidateAppleAppStoreReceipt operation to a typed response wrapper.
	 */
	export class ValidateAppleAppStoreReceiptOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.BuyStoreInventoryResponseData> {

		/**
		 * Creates a new ValidateAppleAppStoreReceiptOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = StoreInventoryModels.BuyStoreInventoryResponseData;
		}
	}

	/**
	 * Maps the ValidateFacebookStoreReceipt operation to a typed response wrapper.
	 */
	export class ValidateFacebookStoreReceiptOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.BuyStoreInventoryResponseData> {

		/**
		 * Creates a new ValidateFacebookStoreReceiptOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = StoreInventoryModels.BuyStoreInventoryResponseData;
		}
	}

	/**
	 * Maps the ValidateGooglePlayStoreReceipt operation to a typed response wrapper.
	 */
	export class ValidateGooglePlayStoreReceiptOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.BuyStoreInventoryResponseData> {

		/**
		 * Creates a new ValidateGooglePlayStoreReceiptOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = StoreInventoryModels.BuyStoreInventoryResponseData;
		}
	}

	/**
	 * Maps the GetCreateLeaderboard operation to a typed response wrapper.
	 */
	export class GetCreateLeaderboardOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.GetCreateLeaderboardResponseData> {

		/**
		 * Creates a new GetCreateLeaderboardOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = StoreInventoryModels.GetCreateLeaderboardResponseData;
		}
	}

	/**
	 * Maps the GetStoreLog operation to a typed response wrapper.
	 */
	export class GetStoreLogOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.GetStoreLogResponseData> {

		/**
		 * Creates a new GetStoreLogOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = StoreInventoryModels.GetStoreLogResponseData;
		}
	}

	/**
	 * Maps the PresentStoreItem operation to a typed response wrapper.
	 */
	export class PresentStoreItemOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.PresentStoreInventoryResponseData> {

		/**
		 * Creates a new PresentStoreItemOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = StoreInventoryModels.PresentStoreInventoryResponseData;
		}
	}

	/**
	 * Maps the GetStoreUsed operation to a typed response wrapper.
	 */
	export class GetStoreUsedOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.GetStoreUsedResponseData> {

		/**
		 * Creates a new GetStoreUsedOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = StoreInventoryModels.GetStoreUsedResponseData;
		}
	}

	/**
	 * Maps the RemoveStoreUsed operation to a typed response wrapper.
	 */
	export class RemoveStoreUsedOperationResponse extends CustomOperationResponseAbstract<StoreInventoryModels.EmptyResponseData> {

		/**
		 * Creates a new RemoveStoreUsedOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = StoreInventoryModels.EmptyResponseData;
		}
	}

}
