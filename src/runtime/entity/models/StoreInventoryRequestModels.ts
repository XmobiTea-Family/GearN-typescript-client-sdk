import { OperationCode } from "./../../constant/OperationCode";
import { RequestRole } from "./../../constant/enumType/RequestRole";
import { RequestType } from "./../../constant/enumType/RequestType";
import { CustomOperationRequestAbstract } from "./../request/CustomOperationRequest";
import { StoreInventoryModels } from "./StoreInventoryModels";

/**
 * Typed request wrappers for the StoreInventory domain.
 *
 * Each class extends {@link CustomOperationRequestAbstract} and
 * binds a typed `*RequestData` DTO from
 * {@link StoreInventoryModels} to:
 * - the matching {@link OperationCode};
 * - the {@link RequestType.StoreInventory} domain;
 * - the appropriate {@link RequestRole} based on the wrapper
 *   name prefix.
 *
 * All wrappers carry a `storeId` plus an owner reference; the
 * backend authorises the operation against the caller's role
 * and the matching credentials (auth token for Client, secret
 * key for Server, admin token for Admin).
 */
export namespace StoreInventoryRequestModels {
    /**
     * Maps the BuyStoreItem operation to a typed request wrapper.
     */
    export class BuyStoreItemOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.BuyStoreItemRequestData> {
        protected override operationCode: string = OperationCode.BuyStoreItem;
        protected override requestType: RequestType = RequestType.StoreInventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new BuyStoreItemOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.BuyStoreItemRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.BuyStoreItemRequestData;
        }
    }

    /**
     * Maps the ServerBuyStoreItem operation to a typed request wrapper.
     */
    export class ServerBuyStoreItemOperationRequest extends BuyStoreItemOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerBuyStoreItemOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.ServerBuyStoreItemRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.ServerBuyStoreItemRequestData;
        }
    }

    /**
     * Maps the AdminBuyStoreItem operation to a typed request wrapper.
     */
    export class AdminBuyStoreItemOperationRequest extends BuyStoreItemOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminBuyStoreItemOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.AdminBuyStoreItemRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.AdminBuyStoreItemRequestData;
        }
    }

    /**
     * Maps the GetStoreItemInformation operation to a typed request wrapper.
     */
    export class GetStoreItemInformationOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.GetStoreItemInformationRequestData> {
        protected override operationCode: string = OperationCode.GetStoreItemInformation;
        protected override requestType: RequestType = RequestType.StoreInventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetStoreItemInformationOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.GetStoreItemInformationRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.GetStoreItemInformationRequestData;
        }
    }

    /**
     * Maps the ServerGetStoreItemInformation operation to a typed request wrapper.
     */
    export class ServerGetStoreItemInformationOperationRequest extends GetStoreItemInformationOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerGetStoreItemInformationOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.ServerGetStoreItemInformationRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.ServerGetStoreItemInformationRequestData;
        }
    }

    /**
     * Maps the AdminGetStoreItemInformation operation to a typed request wrapper.
     */
    export class AdminGetStoreItemInformationOperationRequest extends GetStoreItemInformationOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminGetStoreItemInformationOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.AdminGetStoreItemInformationRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.AdminGetStoreItemInformationRequestData;
        }
    }

    /**
     * Maps the GetStoreItemsWithTag operation to a typed request wrapper.
     */
    export class GetStoreItemsWithTagOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.GetStoreItemsWithTagRequestData> {
        protected override operationCode: string = OperationCode.GetStoreItemsWithTag;
        protected override requestType: RequestType = RequestType.StoreInventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetStoreItemsWithTagOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.GetStoreItemsWithTagRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.GetStoreItemsWithTagRequestData;
        }
    }

    /**
     * Maps the ServerGetStoreItemsWithTag operation to a typed request wrapper.
     */
    export class ServerGetStoreItemsWithTagOperationRequest extends GetStoreItemsWithTagOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerGetStoreItemsWithTagOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.ServerGetStoreItemsWithTagRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.ServerGetStoreItemsWithTagRequestData;
        }
    }

    /**
     * Maps the AdminGetStoreItemsWithTag operation to a typed request wrapper.
     */
    export class AdminGetStoreItemsWithTagOperationRequest extends GetStoreItemsWithTagOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminGetStoreItemsWithTagOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.AdminGetStoreItemsWithTagRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.AdminGetStoreItemsWithTagRequestData;
        }
    }

    /**
     * Maps the CreateStoreItem operation to a typed request wrapper.
     */
    export class CreateStoreItemOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.CreateStoreItemRequestData> {
        protected override operationCode: string = OperationCode.CreateStoreItem;
        protected override requestType: RequestType = RequestType.StoreInventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new CreateStoreItemOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.CreateStoreItemRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.CreateStoreItemRequestData;
        }
    }

    /**
     * Maps the ServerCreateStoreItem operation to a typed request wrapper.
     */
    export class ServerCreateStoreItemOperationRequest extends CreateStoreItemOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerCreateStoreItemOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.ServerCreateStoreItemRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.ServerCreateStoreItemRequestData;
        }
    }

    /**
     * Maps the AdminCreateStoreItem operation to a typed request wrapper.
     */
    export class AdminCreateStoreItemOperationRequest extends CreateStoreItemOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminCreateStoreItemOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.AdminCreateStoreItemRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.AdminCreateStoreItemRequestData;
        }
    }

    /**
     * Maps the SetRemoveStatus operation to a typed request wrapper.
     */
    export class SetRemoveStatusOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.SetRemoveStatusRequestData> {
        protected override operationCode: string = OperationCode.SetRemoveStatus;
        protected override requestType: RequestType = RequestType.StoreInventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new SetRemoveStatusOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.SetRemoveStatusRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.SetRemoveStatusRequestData;
        }
    }

    /**
     * Maps the ServerSetRemoveStatus operation to a typed request wrapper.
     */
    export class ServerSetRemoveStatusOperationRequest extends SetRemoveStatusOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerSetRemoveStatusOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.ServerSetRemoveStatusRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.ServerSetRemoveStatusRequestData;
        }
    }

    /**
     * Maps the AdminSetRemoveStatus operation to a typed request wrapper.
     */
    export class AdminSetRemoveStatusOperationRequest extends SetRemoveStatusOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminSetRemoveStatusOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.AdminSetRemoveStatusRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.AdminSetRemoveStatusRequestData;
        }
    }

    /**
     * Maps the SetStoreItemInformation operation to a typed request wrapper.
     */
    export class SetStoreItemInformationOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.SetStoreItemInformationRequestData> {
        protected override operationCode: string = OperationCode.SetStoreItemInformation;
        protected override requestType: RequestType = RequestType.StoreInventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new SetStoreItemInformationOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.SetStoreItemInformationRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.SetStoreItemInformationRequestData;
        }
    }

    /**
     * Maps the ServerSetStoreItemInformation operation to a typed request wrapper.
     */
    export class ServerSetStoreItemInformationOperationRequest extends SetStoreItemInformationOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerSetStoreItemInformationOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.ServerSetStoreItemInformationRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.ServerSetStoreItemInformationRequestData;
        }
    }

    /**
     * Maps the AdminSetStoreItemInformation operation to a typed request wrapper.
     */
    export class AdminSetStoreItemInformationOperationRequest extends SetStoreItemInformationOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminSetStoreItemInformationOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.AdminSetStoreItemInformationRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.AdminSetStoreItemInformationRequestData;
        }
    }

    /**
     * Maps the ValidateAppleAppStoreReceipt operation to a typed request wrapper.
     */
    export class ValidateAppleAppStoreReceiptOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.ValidateAppleAppStoreReceiptRequestData> {
        protected override operationCode: string = OperationCode.ValidateAppleAppStoreReceipt;
        protected override requestType: RequestType = RequestType.StoreInventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new ValidateAppleAppStoreReceiptOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.ValidateAppleAppStoreReceiptRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.ValidateAppleAppStoreReceiptRequestData;
        }
    }

    /**
     * Maps the ServerValidateAppleAppStoreReceipt operation to a typed request wrapper.
     */
    export class ServerValidateAppleAppStoreReceiptOperationRequest extends ValidateAppleAppStoreReceiptOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerValidateAppleAppStoreReceiptOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.ServerValidateAppleAppStoreReceiptRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.ServerValidateAppleAppStoreReceiptRequestData;
        }
    }

    /**
     * Maps the AdminValidateAppleAppStoreReceipt operation to a typed request wrapper.
     */
    export class AdminValidateAppleAppStoreReceiptOperationRequest extends ValidateAppleAppStoreReceiptOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminValidateAppleAppStoreReceiptOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.AdminValidateAppleAppStoreReceiptRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.AdminValidateAppleAppStoreReceiptRequestData;
        }
    }

    /**
     * Maps the ValidateFacebookStoreReceipt operation to a typed request wrapper.
     */
    export class ValidateFacebookStoreReceiptOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.ValidateFacebookStoreReceiptRequestData> {
        protected override operationCode: string = OperationCode.ValidateFacebookStoreReceipt;
        protected override requestType: RequestType = RequestType.StoreInventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new ValidateFacebookStoreReceiptOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.ValidateFacebookStoreReceiptRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.ValidateFacebookStoreReceiptRequestData;
        }
    }

    /**
     * Maps the ServerValidateFacebookStoreReceipt operation to a typed request wrapper.
     */
    export class ServerValidateFacebookStoreReceiptOperationRequest extends ValidateFacebookStoreReceiptOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerValidateFacebookStoreReceiptOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.ServerValidateFacebookStoreReceiptRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.ServerValidateFacebookStoreReceiptRequestData;
        }
    }

    /**
     * Maps the AdminValidateFacebookStoreReceipt operation to a typed request wrapper.
     */
    export class AdminValidateFacebookStoreReceiptOperationRequest extends ValidateFacebookStoreReceiptOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminValidateFacebookStoreReceiptOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.AdminValidateFacebookStoreReceiptRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.AdminValidateFacebookStoreReceiptRequestData;
        }
    }

    /**
     * Maps the ValidateGooglePlayStoreReceipt operation to a typed request wrapper.
     */
    export class ValidateGooglePlayStoreReceiptOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.ValidateGooglePlayStoreReceiptRequestData> {
        protected override operationCode: string = OperationCode.ValidateGooglePlayStoreReceipt;
        protected override requestType: RequestType = RequestType.StoreInventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new ValidateGooglePlayStoreReceiptOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.ValidateGooglePlayStoreReceiptRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.ValidateGooglePlayStoreReceiptRequestData;
        }
    }

    /**
     * Maps the ServerValidateGooglePlayStoreReceipt operation to a typed request wrapper.
     */
    export class ServerValidateGooglePlayStoreReceiptOperationRequest extends ValidateGooglePlayStoreReceiptOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerValidateGooglePlayStoreReceiptOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.ServerValidateGooglePlayStoreReceiptRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.ServerValidateGooglePlayStoreReceiptRequestData;
        }
    }

    /**
     * Maps the AdminValidateGooglePlayStoreReceipt operation to a typed request wrapper.
     */
    export class AdminValidateGooglePlayStoreReceiptOperationRequest extends ValidateGooglePlayStoreReceiptOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminValidateGooglePlayStoreReceiptOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.AdminValidateGooglePlayStoreReceiptRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.AdminValidateGooglePlayStoreReceiptRequestData;
        }
    }

    /**
     * Maps the GetCreateLeaderboard operation to a typed request wrapper.
     */
    export class GetCreateLeaderboardOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.GetCreateLeaderboardRequestData> {
        protected override operationCode: string = OperationCode.GetCreateLeaderboard;
        protected override requestType: RequestType = RequestType.StoreInventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetCreateLeaderboardOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.GetCreateLeaderboardRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.GetCreateLeaderboardRequestData;
        }
    }

    /**
     * Maps the ServerGetCreateLeaderboard operation to a typed request wrapper.
     */
    export class ServerGetCreateLeaderboardOperationRequest extends GetCreateLeaderboardOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerGetCreateLeaderboardOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.ServerGetCreateLeaderboardRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.ServerGetCreateLeaderboardRequestData;
        }
    }

    /**
     * Maps the AdminGetCreateLeaderboard operation to a typed request wrapper.
     */
    export class AdminGetCreateLeaderboardOperationRequest extends GetCreateLeaderboardOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminGetCreateLeaderboardOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.AdminGetCreateLeaderboardRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.AdminGetCreateLeaderboardRequestData;
        }
    }

    /**
     * Maps the PresentStoreItem operation to a typed request wrapper.
     */
    export class PresentStoreItemOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.PresentStoreItemRequestData> {
        protected override operationCode: string = OperationCode.PresentStoreItem;
        protected override requestType: RequestType = RequestType.StoreInventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new PresentStoreItemOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.PresentStoreItemRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.PresentStoreItemRequestData;
        }
    }

    /**
     * Maps the ServerPresentStoreItem operation to a typed request wrapper.
     */
    export class ServerPresentStoreItemOperationRequest extends PresentStoreItemOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerPresentStoreItemOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.ServerPresentStoreItemRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.ServerPresentStoreItemRequestData;
        }
    }

    /**
     * Maps the AdminPresentStoreItem operation to a typed request wrapper.
     */
    export class AdminPresentStoreItemOperationRequest extends PresentStoreItemOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminPresentStoreItemOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.AdminPresentStoreItemRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.AdminPresentStoreItemRequestData;
        }
    }

    /**
     * Maps the GetStoreLog operation to a typed request wrapper.
     */
    export class GetStoreLogOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.GetStoreLogRequestData> {
        protected override operationCode: string = OperationCode.GetStoreLog;
        protected override requestType: RequestType = RequestType.StoreInventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetStoreLogOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.GetStoreLogRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.GetStoreLogRequestData;
        }
    }

    /**
     * Maps the ServerGetStoreLog operation to a typed request wrapper.
     */
    export class ServerGetStoreLogOperationRequest extends GetStoreLogOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerGetStoreLogOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.ServerGetStoreLogRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.ServerGetStoreLogRequestData;
        }
    }

    /**
     * Maps the AdminGetStoreLog operation to a typed request wrapper.
     */
    export class AdminGetStoreLogOperationRequest extends GetStoreLogOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminGetStoreLogOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.AdminGetStoreLogRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.AdminGetStoreLogRequestData;
        }
    }

    /**
     * Maps the GetStoreUsed operation to a typed request wrapper.
     */
    export class GetStoreUsedOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.GetStoreUsedRequestData> {
        protected override operationCode: string = OperationCode.GetStoreUsed;
        protected override requestType: RequestType = RequestType.StoreInventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetStoreUsedOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.GetStoreUsedRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.GetStoreUsedRequestData;
        }
    }

    /**
     * Maps the ServerGetStoreUsed operation to a typed request wrapper.
     */
    export class ServerGetStoreUsedOperationRequest extends GetStoreUsedOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerGetStoreUsedOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.ServerGetStoreUsedRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.ServerGetStoreUsedRequestData;
        }
    }

    /**
     * Maps the AdminGetStoreUsed operation to a typed request wrapper.
     */
    export class AdminGetStoreUsedOperationRequest extends GetStoreUsedOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminGetStoreUsedOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.AdminGetStoreUsedRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.AdminGetStoreUsedRequestData;
        }
    }

    /**
     * Maps the RemoveStoreUsed operation to a typed request wrapper.
     */
    export class RemoveStoreUsedOperationRequest extends CustomOperationRequestAbstract<StoreInventoryModels.RemoveStoreUsedRequestData> {
        protected override operationCode: string = OperationCode.RemoveStoreUsed;
        protected override requestType: RequestType = RequestType.StoreInventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new RemoveStoreUsedOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.RemoveStoreUsedRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.RemoveStoreUsedRequestData;
        }
    }

    /**
     * Maps the ServerRemoveStoreUsed operation to a typed request wrapper.
     */
    export class ServerRemoveStoreUsedOperationRequest extends RemoveStoreUsedOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerRemoveStoreUsedOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.ServerRemoveStoreUsedRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.ServerRemoveStoreUsedRequestData;
        }
    }

    /**
     * Maps the AdminRemoveStoreUsed operation to a typed request wrapper.
     */
    export class AdminRemoveStoreUsedOperationRequest extends RemoveStoreUsedOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminRemoveStoreUsedOperationRequest instance.
         */
        constructor(requestData: StoreInventoryModels.AdminRemoveStoreUsedRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = StoreInventoryModels.AdminRemoveStoreUsedRequestData;
        }
    }

}
