import { OperationCode } from "./../../constant/OperationCode";
import { RequestRole } from "./../../constant/enumType/RequestRole";
import { RequestType } from "./../../constant/enumType/RequestType";
import { CustomOperationRequestAbstract } from "./../request/CustomOperationRequest";
import { StoreInventoryModels } from "./StoreInventoryModels";

export namespace StoreInventoryRequestModels {
	export class BuyStoreItemOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.BuyStoreItemRequestData> {
		protected override operationCode: string = OperationCode.BuyStoreItem;
		protected override requestType: RequestType = RequestType.StoreInventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: StoreInventoryModels.BuyStoreItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.BuyStoreItemRequestData;
		}
	}

	export class ServerBuyStoreItemOperationRequest extends BuyStoreItemOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: StoreInventoryModels.ServerBuyStoreItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.ServerBuyStoreItemRequestData;
		}
	}

	export class AdminBuyStoreItemOperationRequest extends BuyStoreItemOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: StoreInventoryModels.AdminBuyStoreItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.AdminBuyStoreItemRequestData;
		}
	}

	export class GetStoreItemInformationOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.GetStoreItemInformationRequestData> {
		protected override operationCode: string = OperationCode.GetStoreItemInformation;
		protected override requestType: RequestType = RequestType.StoreInventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: StoreInventoryModels.GetStoreItemInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.GetStoreItemInformationRequestData;
		}
	}

	export class ServerGetStoreItemInformationOperationRequest extends GetStoreItemInformationOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: StoreInventoryModels.ServerGetStoreItemInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.ServerGetStoreItemInformationRequestData;
		}
	}

	export class AdminGetStoreItemInformationOperationRequest extends GetStoreItemInformationOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: StoreInventoryModels.AdminGetStoreItemInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.AdminGetStoreItemInformationRequestData;
		}
	}

	export class GetStoreItemsWithTagOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.GetStoreItemsWithTagRequestData> {
		protected override operationCode: string = OperationCode.GetStoreItemsWithTag;
		protected override requestType: RequestType = RequestType.StoreInventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: StoreInventoryModels.GetStoreItemsWithTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.GetStoreItemsWithTagRequestData;
		}
	}

	export class ServerGetStoreItemsWithTagOperationRequest extends GetStoreItemsWithTagOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: StoreInventoryModels.ServerGetStoreItemsWithTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.ServerGetStoreItemsWithTagRequestData;
		}
	}

	export class AdminGetStoreItemsWithTagOperationRequest extends GetStoreItemsWithTagOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: StoreInventoryModels.AdminGetStoreItemsWithTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.AdminGetStoreItemsWithTagRequestData;
		}
	}

	export class CreateStoreItemOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.CreateStoreItemRequestData> {
		protected override operationCode: string = OperationCode.CreateStoreItem;
		protected override requestType: RequestType = RequestType.StoreInventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: StoreInventoryModels.CreateStoreItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.CreateStoreItemRequestData;
		}
	}

	export class ServerCreateStoreItemOperationRequest extends CreateStoreItemOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: StoreInventoryModels.ServerCreateStoreItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.ServerCreateStoreItemRequestData;
		}
	}

	export class AdminCreateStoreItemOperationRequest extends CreateStoreItemOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: StoreInventoryModels.AdminCreateStoreItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.AdminCreateStoreItemRequestData;
		}
	}

	export class SetRemoveStatusOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.SetRemoveStatusRequestData> {
		protected override operationCode: string = OperationCode.SetRemoveStatus;
		protected override requestType: RequestType = RequestType.StoreInventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: StoreInventoryModels.SetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.SetRemoveStatusRequestData;
		}
	}

	export class ServerSetRemoveStatusOperationRequest extends SetRemoveStatusOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: StoreInventoryModels.ServerSetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.ServerSetRemoveStatusRequestData;
		}
	}

	export class AdminSetRemoveStatusOperationRequest extends SetRemoveStatusOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: StoreInventoryModels.AdminSetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.AdminSetRemoveStatusRequestData;
		}
	}

	export class SetStoreItemInformationOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.SetStoreItemInformationRequestData> {
		protected override operationCode: string = OperationCode.SetStoreItemInformation;
		protected override requestType: RequestType = RequestType.StoreInventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: StoreInventoryModels.SetStoreItemInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.SetStoreItemInformationRequestData;
		}
	}

	export class ServerSetStoreItemInformationOperationRequest extends SetStoreItemInformationOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: StoreInventoryModels.ServerSetStoreItemInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.ServerSetStoreItemInformationRequestData;
		}
	}

	export class AdminSetStoreItemInformationOperationRequest extends SetStoreItemInformationOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: StoreInventoryModels.AdminSetStoreItemInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.AdminSetStoreItemInformationRequestData;
		}
	}

	export class ValidateAppleAppStoreReceiptOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.ValidateAppleAppStoreReceiptRequestData> {
		protected override operationCode: string = OperationCode.ValidateAppleAppStoreReceipt;
		protected override requestType: RequestType = RequestType.StoreInventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: StoreInventoryModels.ValidateAppleAppStoreReceiptRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.ValidateAppleAppStoreReceiptRequestData;
		}
	}

	export class ServerValidateAppleAppStoreReceiptOperationRequest extends ValidateAppleAppStoreReceiptOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: StoreInventoryModels.ServerValidateAppleAppStoreReceiptRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.ServerValidateAppleAppStoreReceiptRequestData;
		}
	}

	export class AdminValidateAppleAppStoreReceiptOperationRequest extends ValidateAppleAppStoreReceiptOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: StoreInventoryModels.AdminValidateAppleAppStoreReceiptRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.AdminValidateAppleAppStoreReceiptRequestData;
		}
	}

	export class ValidateFacebookStoreReceiptOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.ValidateFacebookStoreReceiptRequestData> {
		protected override operationCode: string = OperationCode.ValidateFacebookStoreReceipt;
		protected override requestType: RequestType = RequestType.StoreInventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: StoreInventoryModels.ValidateFacebookStoreReceiptRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.ValidateFacebookStoreReceiptRequestData;
		}
	}

	export class ServerValidateFacebookStoreReceiptOperationRequest extends ValidateFacebookStoreReceiptOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: StoreInventoryModels.ServerValidateFacebookStoreReceiptRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.ServerValidateFacebookStoreReceiptRequestData;
		}
	}

	export class AdminValidateFacebookStoreReceiptOperationRequest extends ValidateFacebookStoreReceiptOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: StoreInventoryModels.AdminValidateFacebookStoreReceiptRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.AdminValidateFacebookStoreReceiptRequestData;
		}
	}

	export class ValidateGooglePlayStoreReceiptOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.ValidateGooglePlayStoreReceiptRequestData> {
		protected override operationCode: string = OperationCode.ValidateGooglePlayStoreReceipt;
		protected override requestType: RequestType = RequestType.StoreInventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: StoreInventoryModels.ValidateGooglePlayStoreReceiptRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.ValidateGooglePlayStoreReceiptRequestData;
		}
	}

	export class ServerValidateGooglePlayStoreReceiptOperationRequest extends ValidateGooglePlayStoreReceiptOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: StoreInventoryModels.ServerValidateGooglePlayStoreReceiptRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.ServerValidateGooglePlayStoreReceiptRequestData;
		}
	}

	export class AdminValidateGooglePlayStoreReceiptOperationRequest extends ValidateGooglePlayStoreReceiptOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: StoreInventoryModels.AdminValidateGooglePlayStoreReceiptRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.AdminValidateGooglePlayStoreReceiptRequestData;
		}
	}

	export class GetCreateLeaderboardOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.GetCreateLeaderboardRequestData> {
		protected override operationCode: string = OperationCode.GetCreateLeaderboard;
		protected override requestType: RequestType = RequestType.StoreInventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: StoreInventoryModels.GetCreateLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.GetCreateLeaderboardRequestData;
		}
	}

	export class ServerGetCreateLeaderboardOperationRequest extends GetCreateLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: StoreInventoryModels.ServerGetCreateLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.ServerGetCreateLeaderboardRequestData;
		}
	}

	export class AdminGetCreateLeaderboardOperationRequest extends GetCreateLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: StoreInventoryModels.AdminGetCreateLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.AdminGetCreateLeaderboardRequestData;
		}
	}

	export class PresentStoreItemOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.PresentStoreItemRequestData> {
		protected override operationCode: string = OperationCode.PresentStoreItem;
		protected override requestType: RequestType = RequestType.StoreInventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: StoreInventoryModels.PresentStoreItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.PresentStoreItemRequestData;
		}
	}

	export class ServerPresentStoreItemOperationRequest extends PresentStoreItemOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: StoreInventoryModels.ServerPresentStoreItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.ServerPresentStoreItemRequestData;
		}
	}

	export class AdminPresentStoreItemOperationRequest extends PresentStoreItemOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: StoreInventoryModels.AdminPresentStoreItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.AdminPresentStoreItemRequestData;
		}
	}

	export class GetStoreLogOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.GetStoreLogRequestData> {
		protected override operationCode: string = OperationCode.GetStoreLog;
		protected override requestType: RequestType = RequestType.StoreInventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: StoreInventoryModels.GetStoreLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.GetStoreLogRequestData;
		}
	}

	export class ServerGetStoreLogOperationRequest extends GetStoreLogOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: StoreInventoryModels.ServerGetStoreLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.ServerGetStoreLogRequestData;
		}
	}

	export class AdminGetStoreLogOperationRequest extends GetStoreLogOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: StoreInventoryModels.AdminGetStoreLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.AdminGetStoreLogRequestData;
		}
	}

	export class GetStoreUsedOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.GetStoreUsedRequestData> {
		protected override operationCode: string = OperationCode.GetStoreUsed;
		protected override requestType: RequestType = RequestType.StoreInventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: StoreInventoryModels.GetStoreUsedRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.GetStoreUsedRequestData;
		}
	}

	export class ServerGetStoreUsedOperationRequest extends GetStoreUsedOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: StoreInventoryModels.ServerGetStoreUsedRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.ServerGetStoreUsedRequestData;
		}
	}

	export class AdminGetStoreUsedOperationRequest extends GetStoreUsedOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: StoreInventoryModels.AdminGetStoreUsedRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.AdminGetStoreUsedRequestData;
		}
	}

	export class RemoveStoreUsedOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.RemoveStoreUsedRequestData> {
		protected override operationCode: string = OperationCode.RemoveStoreUsed;
		protected override requestType: RequestType = RequestType.StoreInventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: StoreInventoryModels.RemoveStoreUsedRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.RemoveStoreUsedRequestData;
		}
	}

	export class ServerRemoveStoreUsedOperationRequest extends RemoveStoreUsedOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: StoreInventoryModels.ServerRemoveStoreUsedRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.ServerRemoveStoreUsedRequestData;
		}
	}

	export class AdminRemoveStoreUsedOperationRequest extends RemoveStoreUsedOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: StoreInventoryModels.AdminRemoveStoreUsedRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = StoreInventoryModels.AdminRemoveStoreUsedRequestData;
		}
	}

}
