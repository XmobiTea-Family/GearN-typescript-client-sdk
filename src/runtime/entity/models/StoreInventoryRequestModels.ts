import { OperationCode } from "../../constant/OperationCode";
import { RequestRole } from "../../constant/enumType/RequestRole";
import { RequestType } from "../../constant/enumType/RequestType";
import { CustomOperationRequestAbstract } from "../request/CustomOperationRequest";
import { StoreInventoryModels } from "./StoreInventoryModels";

export module StoreInventoryRequestModels {
	export class BuyStoreItemOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.BuyStoreItemRequestData> {
		protected override operationCode: number = OperationCode.BuyStoreItem;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.StoreInventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: StoreInventoryModels.BuyStoreItemRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerBuyStoreItemOperationRequest extends BuyStoreItemOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: StoreInventoryModels.BuyStoreItemRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminBuyStoreItemOperationRequest extends BuyStoreItemOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: StoreInventoryModels.BuyStoreItemRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetStoreItemInformationOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.GetStoreItemInformationRequestData> {
		protected override operationCode: number = OperationCode.GetStoreItemInformation;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.StoreInventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: StoreInventoryModels.GetStoreItemInformationRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetStoreItemInformationOperationRequest extends GetStoreItemInformationOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: StoreInventoryModels.GetStoreItemInformationRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetStoreItemInformationOperationRequest extends GetStoreItemInformationOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: StoreInventoryModels.GetStoreItemInformationRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetStoreItemsWithTagOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.GetStoreItemsWithTagRequestData> {
		protected override operationCode: number = OperationCode.GetStoreItemsWithTag;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.StoreInventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: StoreInventoryModels.GetStoreItemsWithTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetStoreItemsWithTagOperationRequest extends GetStoreItemsWithTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: StoreInventoryModels.GetStoreItemsWithTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetStoreItemsWithTagOperationRequest extends GetStoreItemsWithTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: StoreInventoryModels.GetStoreItemsWithTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GrantStoreItemOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.GrantStoreItemRequestData> {
		protected override operationCode: number = OperationCode.GrantStoreItem;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.StoreInventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: StoreInventoryModels.GrantStoreItemRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGrantStoreItemOperationRequest extends GrantStoreItemOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: StoreInventoryModels.GrantStoreItemRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGrantStoreItemOperationRequest extends GrantStoreItemOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: StoreInventoryModels.GrantStoreItemRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetRemoveStatusOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.SetRemoveStatusRequestData> {
		protected override operationCode: number = OperationCode.SetRemoveStatus;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.StoreInventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: StoreInventoryModels.SetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetRemoveStatusOperationRequest extends SetRemoveStatusOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: StoreInventoryModels.SetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetRemoveStatusOperationRequest extends SetRemoveStatusOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: StoreInventoryModels.SetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetStoreItemInformationOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.SetStoreItemInformationRequestData> {
		protected override operationCode: number = OperationCode.SetStoreItemInformation;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.StoreInventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: StoreInventoryModels.SetStoreItemInformationRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetStoreItemInformationOperationRequest extends SetStoreItemInformationOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: StoreInventoryModels.SetStoreItemInformationRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetStoreItemInformationOperationRequest extends SetStoreItemInformationOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: StoreInventoryModels.SetStoreItemInformationRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ValidateAppleAppStoreReceiptOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.ValidateAppleAppStoreReceiptRequestData> {
		protected override operationCode: number = OperationCode.ValidateAppleAppStoreReceipt;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.StoreInventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: StoreInventoryModels.ValidateAppleAppStoreReceiptRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerValidateAppleAppStoreReceiptOperationRequest extends ValidateAppleAppStoreReceiptOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: StoreInventoryModels.ValidateAppleAppStoreReceiptRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminValidateAppleAppStoreReceiptOperationRequest extends ValidateAppleAppStoreReceiptOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: StoreInventoryModels.ValidateAppleAppStoreReceiptRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ValidateFacebookStoreReceiptOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.ValidateFacebookStoreReceiptRequestData> {
		protected override operationCode: number = OperationCode.ValidateFacebookStoreReceipt;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.StoreInventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: StoreInventoryModels.ValidateFacebookStoreReceiptRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerValidateFacebookStoreReceiptOperationRequest extends ValidateFacebookStoreReceiptOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: StoreInventoryModels.ValidateFacebookStoreReceiptRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminValidateFacebookStoreReceiptOperationRequest extends ValidateFacebookStoreReceiptOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: StoreInventoryModels.ValidateFacebookStoreReceiptRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ValidateGooglePlayStoreReceiptOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.ValidateGooglePlayStoreReceiptRequestData> {
		protected override operationCode: number = OperationCode.ValidateGooglePlayStoreReceipt;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.StoreInventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: StoreInventoryModels.ValidateGooglePlayStoreReceiptRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerValidateGooglePlayStoreReceiptOperationRequest extends ValidateGooglePlayStoreReceiptOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: StoreInventoryModels.ValidateGooglePlayStoreReceiptRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminValidateGooglePlayStoreReceiptOperationRequest extends ValidateGooglePlayStoreReceiptOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: StoreInventoryModels.ValidateGooglePlayStoreReceiptRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

}
