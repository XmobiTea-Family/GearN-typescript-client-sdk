import { OperationCode } from "./../../constant/OperationCode";
import { RequestRole } from "./../../constant/enumType/RequestRole";
import { RequestType } from "./../../constant/enumType/RequestType";
import { CustomOperationRequestAbstract } from "./../request/CustomOperationRequest";
import { InventoryModels } from "./InventoryModels";

/**
 * Typed request wrappers for the Inventory domain.
 *
 * Each class extends {@link CustomOperationRequestAbstract} and
 * binds a typed `*RequestData` DTO from
 * {@link InventoryModels} to:
 * - the matching {@link OperationCode};
 * - the {@link RequestType.Inventory} domain;
 * - the appropriate {@link RequestRole} based on the wrapper
 *   name prefix.
 *
 * All wrappers carry an explicit `itemId` (or `classId` for
 * catalog operations); the backend cross-checks the caller's
 * permission against the resource's `ownerType` /
 * `ownerId` (Client) or trusts the server / admin token
 * (Server / Admin).
 */
export namespace InventoryRequestModels {
    /**
     * Maps the AddSegment operation to a typed request wrapper.
     */
    export class AddSegmentOperationRequest extends CustomOperationRequestAbstract<InventoryModels.AddSegmentRequestData> {
        protected override operationCode: string = OperationCode.AddSegment;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new AddSegmentOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AddSegmentRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AddSegmentRequestData;
        }
    }

    /**
     * Maps the ServerAddSegment operation to a typed request wrapper.
     */
    export class ServerAddSegmentOperationRequest extends AddSegmentOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerAddSegmentOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerAddSegmentRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerAddSegmentRequestData;
        }
    }

    /**
     * Maps the AdminAddSegment operation to a typed request wrapper.
     */
    export class AdminAddSegmentOperationRequest extends AddSegmentOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminAddSegmentOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminAddSegmentRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminAddSegmentRequestData;
        }
    }

    /**
     * Maps the GetAmount operation to a typed request wrapper.
     */
    export class GetAmountOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetAmountRequestData> {
        protected override operationCode: string = OperationCode.GetAmount;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetAmountOperationRequest instance.
         */
        constructor(requestData: InventoryModels.GetAmountRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.GetAmountRequestData;
        }
    }

    /**
     * Maps the ServerGetAmount operation to a typed request wrapper.
     */
    export class ServerGetAmountOperationRequest extends GetAmountOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerGetAmountOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerGetAmountRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerGetAmountRequestData;
        }
    }

    /**
     * Maps the AdminGetAmount operation to a typed request wrapper.
     */
    export class AdminGetAmountOperationRequest extends GetAmountOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminGetAmountOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminGetAmountRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminGetAmountRequestData;
        }
    }

    /**
     * Maps the GetAvatar operation to a typed request wrapper.
     */
    export class GetAvatarOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetAvatarRequestData> {
        protected override operationCode: string = OperationCode.GetAvatar;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetAvatarOperationRequest instance.
         */
        constructor(requestData: InventoryModels.GetAvatarRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.GetAvatarRequestData;
        }
    }

    /**
     * Maps the ServerGetAvatar operation to a typed request wrapper.
     */
    export class ServerGetAvatarOperationRequest extends GetAvatarOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerGetAvatarOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerGetAvatarRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerGetAvatarRequestData;
        }
    }

    /**
     * Maps the AdminGetAvatar operation to a typed request wrapper.
     */
    export class AdminGetAvatarOperationRequest extends GetAvatarOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminGetAvatarOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminGetAvatarRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminGetAvatarRequestData;
        }
    }

    /**
     * Maps the GetCatalogId operation to a typed request wrapper.
     */
    export class GetCatalogIdOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetCatalogIdRequestData> {
        protected override operationCode: string = OperationCode.GetCatalogId;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetCatalogIdOperationRequest instance.
         */
        constructor(requestData: InventoryModels.GetCatalogIdRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.GetCatalogIdRequestData;
        }
    }

    /**
     * Maps the ServerGetCatalogId operation to a typed request wrapper.
     */
    export class ServerGetCatalogIdOperationRequest extends GetCatalogIdOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerGetCatalogIdOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerGetCatalogIdRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerGetCatalogIdRequestData;
        }
    }

    /**
     * Maps the AdminGetCatalogId operation to a typed request wrapper.
     */
    export class AdminGetCatalogIdOperationRequest extends GetCatalogIdOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminGetCatalogIdOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminGetCatalogIdRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminGetCatalogIdRequestData;
        }
    }

    /**
     * Maps the GetClassId operation to a typed request wrapper.
     */
    export class GetClassIdOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetClassIdRequestData> {
        protected override operationCode: string = OperationCode.GetClassId;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetClassIdOperationRequest instance.
         */
        constructor(requestData: InventoryModels.GetClassIdRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.GetClassIdRequestData;
        }
    }

    /**
     * Maps the ServerGetClassId operation to a typed request wrapper.
     */
    export class ServerGetClassIdOperationRequest extends GetClassIdOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerGetClassIdOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerGetClassIdRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerGetClassIdRequestData;
        }
    }

    /**
     * Maps the AdminGetClassId operation to a typed request wrapper.
     */
    export class AdminGetClassIdOperationRequest extends GetClassIdOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminGetClassIdOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminGetClassIdRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminGetClassIdRequestData;
        }
    }

    /**
     * Maps the GetCustomData operation to a typed request wrapper.
     */
    export class GetCustomDataOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetCustomDataRequestData> {
        protected override operationCode: string = OperationCode.GetCustomData;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetCustomDataOperationRequest instance.
         */
        constructor(requestData: InventoryModels.GetCustomDataRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.GetCustomDataRequestData;
        }
    }

    /**
     * Maps the ServerGetCustomData operation to a typed request wrapper.
     */
    export class ServerGetCustomDataOperationRequest extends GetCustomDataOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerGetCustomDataOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerGetCustomDataRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerGetCustomDataRequestData;
        }
    }

    /**
     * Maps the AdminGetCustomData operation to a typed request wrapper.
     */
    export class AdminGetCustomDataOperationRequest extends GetCustomDataOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminGetCustomDataOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminGetCustomDataRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminGetCustomDataRequestData;
        }
    }

    /**
     * Maps the GetDisplayName operation to a typed request wrapper.
     */
    export class GetDisplayNameOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetDisplayNameRequestData> {
        protected override operationCode: string = OperationCode.GetDisplayName;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetDisplayNameOperationRequest instance.
         */
        constructor(requestData: InventoryModels.GetDisplayNameRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.GetDisplayNameRequestData;
        }
    }

    /**
     * Maps the ServerGetDisplayName operation to a typed request wrapper.
     */
    export class ServerGetDisplayNameOperationRequest extends GetDisplayNameOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerGetDisplayNameOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerGetDisplayNameRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerGetDisplayNameRequestData;
        }
    }

    /**
     * Maps the AdminGetDisplayName operation to a typed request wrapper.
     */
    export class AdminGetDisplayNameOperationRequest extends GetDisplayNameOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminGetDisplayNameOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminGetDisplayNameRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminGetDisplayNameRequestData;
        }
    }

    /**
     * Maps the GetItemData operation to a typed request wrapper.
     */
    export class GetItemDataOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetItemDataRequestData> {
        protected override operationCode: string = OperationCode.GetItemData;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetItemDataOperationRequest instance.
         */
        constructor(requestData: InventoryModels.GetItemDataRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.GetItemDataRequestData;
        }
    }

    /**
     * Maps the ServerGetItemData operation to a typed request wrapper.
     */
    export class ServerGetItemDataOperationRequest extends GetItemDataOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerGetItemDataOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerGetItemDataRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerGetItemDataRequestData;
        }
    }

    /**
     * Maps the AdminGetItemData operation to a typed request wrapper.
     */
    export class AdminGetItemDataOperationRequest extends GetItemDataOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminGetItemDataOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminGetItemDataRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminGetItemDataRequestData;
        }
    }

    /**
     * Maps the GetItemInformation operation to a typed request wrapper.
     */
    export class GetItemInformationOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetItemInformationRequestData> {
        protected override operationCode: string = OperationCode.GetItemInformation;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetItemInformationOperationRequest instance.
         */
        constructor(requestData: InventoryModels.GetItemInformationRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.GetItemInformationRequestData;
        }
    }

    /**
     * Maps the ServerGetItemInformation operation to a typed request wrapper.
     */
    export class ServerGetItemInformationOperationRequest extends GetItemInformationOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerGetItemInformationOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerGetItemInformationRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerGetItemInformationRequestData;
        }
    }

    /**
     * Maps the AdminGetItemInformation operation to a typed request wrapper.
     */
    export class AdminGetItemInformationOperationRequest extends GetItemInformationOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminGetItemInformationOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminGetItemInformationRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminGetItemInformationRequestData;
        }
    }

    /**
     * Maps the GetItemStatistics operation to a typed request wrapper.
     */
    export class GetItemStatisticsOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetItemStatisticsRequestData> {
        protected override operationCode: string = OperationCode.GetItemStatistics;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetItemStatisticsOperationRequest instance.
         */
        constructor(requestData: InventoryModels.GetItemStatisticsRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.GetItemStatisticsRequestData;
        }
    }

    /**
     * Maps the ServerGetItemStatistics operation to a typed request wrapper.
     */
    export class ServerGetItemStatisticsOperationRequest extends GetItemStatisticsOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerGetItemStatisticsOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerGetItemStatisticsRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerGetItemStatisticsRequestData;
        }
    }

    /**
     * Maps the AdminGetItemStatistics operation to a typed request wrapper.
     */
    export class AdminGetItemStatisticsOperationRequest extends GetItemStatisticsOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminGetItemStatisticsOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminGetItemStatisticsRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminGetItemStatisticsRequestData;
        }
    }

    /**
     * Maps the GetItemsWithDisplayName operation to a typed request wrapper.
     */
    export class GetItemsWithDisplayNameOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetItemsWithDisplayNameRequestData> {
        protected override operationCode: string = OperationCode.GetItemsWithDisplayName;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetItemsWithDisplayNameOperationRequest instance.
         */
        constructor(requestData: InventoryModels.GetItemsWithDisplayNameRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.GetItemsWithDisplayNameRequestData;
        }
    }

    /**
     * Maps the ServerGetItemsWithDisplayName operation to a typed request wrapper.
     */
    export class ServerGetItemsWithDisplayNameOperationRequest extends GetItemsWithDisplayNameOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerGetItemsWithDisplayNameOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerGetItemsWithDisplayNameRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerGetItemsWithDisplayNameRequestData;
        }
    }

    /**
     * Maps the AdminGetItemsWithDisplayName operation to a typed request wrapper.
     */
    export class AdminGetItemsWithDisplayNameOperationRequest extends GetItemsWithDisplayNameOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminGetItemsWithDisplayNameOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminGetItemsWithDisplayNameRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminGetItemsWithDisplayNameRequestData;
        }
    }

    /**
     * Maps the GetItemsWithSegment operation to a typed request wrapper.
     */
    export class GetItemsWithSegmentOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetItemsWithSegmentRequestData> {
        protected override operationCode: string = OperationCode.GetItemsWithSegment;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetItemsWithSegmentOperationRequest instance.
         */
        constructor(requestData: InventoryModels.GetItemsWithSegmentRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.GetItemsWithSegmentRequestData;
        }
    }

    /**
     * Maps the ServerGetItemsWithSegment operation to a typed request wrapper.
     */
    export class ServerGetItemsWithSegmentOperationRequest extends GetItemsWithSegmentOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerGetItemsWithSegmentOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerGetItemsWithSegmentRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerGetItemsWithSegmentRequestData;
        }
    }

    /**
     * Maps the AdminGetItemsWithSegment operation to a typed request wrapper.
     */
    export class AdminGetItemsWithSegmentOperationRequest extends GetItemsWithSegmentOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminGetItemsWithSegmentOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminGetItemsWithSegmentRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminGetItemsWithSegmentRequestData;
        }
    }

    /**
     * Maps the GetItemsWithTag operation to a typed request wrapper.
     */
    export class GetItemsWithTagOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetItemsWithTagRequestData> {
        protected override operationCode: string = OperationCode.GetItemsWithTag;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetItemsWithTagOperationRequest instance.
         */
        constructor(requestData: InventoryModels.GetItemsWithTagRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.GetItemsWithTagRequestData;
        }
    }

    /**
     * Maps the ServerGetItemsWithTag operation to a typed request wrapper.
     */
    export class ServerGetItemsWithTagOperationRequest extends GetItemsWithTagOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerGetItemsWithTagOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerGetItemsWithTagRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerGetItemsWithTagRequestData;
        }
    }

    /**
     * Maps the AdminGetItemsWithTag operation to a typed request wrapper.
     */
    export class AdminGetItemsWithTagOperationRequest extends GetItemsWithTagOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminGetItemsWithTagOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminGetItemsWithTagRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminGetItemsWithTagRequestData;
        }
    }

    /**
     * Maps the GetItemType operation to a typed request wrapper.
     */
    export class GetItemTypeOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetItemTypeRequestData> {
        protected override operationCode: string = OperationCode.GetItemType;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetItemTypeOperationRequest instance.
         */
        constructor(requestData: InventoryModels.GetItemTypeRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.GetItemTypeRequestData;
        }
    }

    /**
     * Maps the ServerGetItemType operation to a typed request wrapper.
     */
    export class ServerGetItemTypeOperationRequest extends GetItemTypeOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerGetItemTypeOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerGetItemTypeRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerGetItemTypeRequestData;
        }
    }

    /**
     * Maps the AdminGetItemType operation to a typed request wrapper.
     */
    export class AdminGetItemTypeOperationRequest extends GetItemTypeOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminGetItemTypeOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminGetItemTypeRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminGetItemTypeRequestData;
        }
    }

    /**
     * Maps the GetOwner operation to a typed request wrapper.
     */
    export class GetOwnerOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetOwnerRequestData> {
        protected override operationCode: string = OperationCode.GetOwner;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetOwnerOperationRequest instance.
         */
        constructor(requestData: InventoryModels.GetOwnerRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.GetOwnerRequestData;
        }
    }

    /**
     * Maps the ServerGetOwner operation to a typed request wrapper.
     */
    export class ServerGetOwnerOperationRequest extends GetOwnerOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerGetOwnerOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerGetOwnerRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerGetOwnerRequestData;
        }
    }

    /**
     * Maps the AdminGetOwner operation to a typed request wrapper.
     */
    export class AdminGetOwnerOperationRequest extends GetOwnerOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminGetOwnerOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminGetOwnerRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminGetOwnerRequestData;
        }
    }

    /**
     * Maps the GetRemoveStatus operation to a typed request wrapper.
     */
    export class GetRemoveStatusOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetRemoveStatusRequestData> {
        protected override operationCode: string = OperationCode.GetRemoveStatus;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetRemoveStatusOperationRequest instance.
         */
        constructor(requestData: InventoryModels.GetRemoveStatusRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.GetRemoveStatusRequestData;
        }
    }

    /**
     * Maps the ServerGetRemoveStatus operation to a typed request wrapper.
     */
    export class ServerGetRemoveStatusOperationRequest extends GetRemoveStatusOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerGetRemoveStatusOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerGetRemoveStatusRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerGetRemoveStatusRequestData;
        }
    }

    /**
     * Maps the AdminGetRemoveStatus operation to a typed request wrapper.
     */
    export class AdminGetRemoveStatusOperationRequest extends GetRemoveStatusOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminGetRemoveStatusOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminGetRemoveStatusRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminGetRemoveStatusRequestData;
        }
    }

    /**
     * Maps the GetSegment operation to a typed request wrapper.
     */
    export class GetSegmentOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetSegmentRequestData> {
        protected override operationCode: string = OperationCode.GetSegment;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetSegmentOperationRequest instance.
         */
        constructor(requestData: InventoryModels.GetSegmentRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.GetSegmentRequestData;
        }
    }

    /**
     * Maps the ServerGetSegment operation to a typed request wrapper.
     */
    export class ServerGetSegmentOperationRequest extends GetSegmentOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerGetSegmentOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerGetSegmentRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerGetSegmentRequestData;
        }
    }

    /**
     * Maps the AdminGetSegment operation to a typed request wrapper.
     */
    export class AdminGetSegmentOperationRequest extends GetSegmentOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminGetSegmentOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminGetSegmentRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminGetSegmentRequestData;
        }
    }

    /**
     * Maps the GetStatisticsLeaderboardAroundItem operation to a typed request wrapper.
     */
    export class GetStatisticsLeaderboardAroundItemOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetStatisticsLeaderboardAroundItemRequestData> {
        protected override operationCode: string = OperationCode.GetStatisticsLeaderboardAroundItem;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetStatisticsLeaderboardAroundItemOperationRequest instance.
         */
        constructor(requestData: InventoryModels.GetStatisticsLeaderboardAroundItemRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.GetStatisticsLeaderboardAroundItemRequestData;
        }
    }

    /**
     * Maps the ServerGetStatisticsLeaderboardAroundItem operation to a typed request wrapper.
     */
    export class ServerGetStatisticsLeaderboardAroundItemOperationRequest extends GetStatisticsLeaderboardAroundItemOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerGetStatisticsLeaderboardAroundItemOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerGetStatisticsLeaderboardAroundItemRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerGetStatisticsLeaderboardAroundItemRequestData;
        }
    }

    /**
     * Maps the AdminGetStatisticsLeaderboardAroundItem operation to a typed request wrapper.
     */
    export class AdminGetStatisticsLeaderboardAroundItemOperationRequest extends GetStatisticsLeaderboardAroundItemOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminGetStatisticsLeaderboardAroundItemOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminGetStatisticsLeaderboardAroundItemRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminGetStatisticsLeaderboardAroundItemRequestData;
        }
    }

    /**
     * Maps the GetStatisticsLeaderboard operation to a typed request wrapper.
     */
    export class GetStatisticsLeaderboardOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetStatisticsLeaderboardRequestData> {
        protected override operationCode: string = OperationCode.GetStatisticsLeaderboard;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetStatisticsLeaderboardOperationRequest instance.
         */
        constructor(requestData: InventoryModels.GetStatisticsLeaderboardRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.GetStatisticsLeaderboardRequestData;
        }
    }

    /**
     * Maps the ServerGetStatisticsLeaderboard operation to a typed request wrapper.
     */
    export class ServerGetStatisticsLeaderboardOperationRequest extends GetStatisticsLeaderboardOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerGetStatisticsLeaderboardOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerGetStatisticsLeaderboardRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerGetStatisticsLeaderboardRequestData;
        }
    }

    /**
     * Maps the AdminGetStatisticsLeaderboard operation to a typed request wrapper.
     */
    export class AdminGetStatisticsLeaderboardOperationRequest extends GetStatisticsLeaderboardOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminGetStatisticsLeaderboardOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminGetStatisticsLeaderboardRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminGetStatisticsLeaderboardRequestData;
        }
    }

    /**
     * Maps the GetTag operation to a typed request wrapper.
     */
    export class GetTagOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetTagRequestData> {
        protected override operationCode: string = OperationCode.GetTag;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetTagOperationRequest instance.
         */
        constructor(requestData: InventoryModels.GetTagRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.GetTagRequestData;
        }
    }

    /**
     * Maps the ServerGetTag operation to a typed request wrapper.
     */
    export class ServerGetTagOperationRequest extends GetTagOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerGetTagOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerGetTagRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerGetTagRequestData;
        }
    }

    /**
     * Maps the AdminGetTag operation to a typed request wrapper.
     */
    export class AdminGetTagOperationRequest extends GetTagOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminGetTagOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminGetTagRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminGetTagRequestData;
        }
    }

    /**
     * Maps the GetTsCreate operation to a typed request wrapper.
     */
    export class GetTsCreateOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetTsCreateRequestData> {
        protected override operationCode: string = OperationCode.GetTsCreate;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetTsCreateOperationRequest instance.
         */
        constructor(requestData: InventoryModels.GetTsCreateRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.GetTsCreateRequestData;
        }
    }

    /**
     * Maps the ServerGetTsCreate operation to a typed request wrapper.
     */
    export class ServerGetTsCreateOperationRequest extends GetTsCreateOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerGetTsCreateOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerGetTsCreateRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerGetTsCreateRequestData;
        }
    }

    /**
     * Maps the AdminGetTsCreate operation to a typed request wrapper.
     */
    export class AdminGetTsCreateOperationRequest extends GetTsCreateOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminGetTsCreateOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminGetTsCreateRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminGetTsCreateRequestData;
        }
    }

    /**
     * Maps the RemoveSegment operation to a typed request wrapper.
     */
    export class RemoveSegmentOperationRequest extends CustomOperationRequestAbstract<InventoryModels.RemoveSegmentRequestData> {
        protected override operationCode: string = OperationCode.RemoveSegment;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new RemoveSegmentOperationRequest instance.
         */
        constructor(requestData: InventoryModels.RemoveSegmentRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.RemoveSegmentRequestData;
        }
    }

    /**
     * Maps the ServerRemoveSegment operation to a typed request wrapper.
     */
    export class ServerRemoveSegmentOperationRequest extends RemoveSegmentOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerRemoveSegmentOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerRemoveSegmentRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerRemoveSegmentRequestData;
        }
    }

    /**
     * Maps the AdminRemoveSegment operation to a typed request wrapper.
     */
    export class AdminRemoveSegmentOperationRequest extends RemoveSegmentOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminRemoveSegmentOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminRemoveSegmentRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminRemoveSegmentRequestData;
        }
    }

    /**
     * Maps the RemoveTag operation to a typed request wrapper.
     */
    export class RemoveTagOperationRequest extends CustomOperationRequestAbstract<InventoryModels.RemoveTagRequestData> {
        protected override operationCode: string = OperationCode.RemoveTag;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new RemoveTagOperationRequest instance.
         */
        constructor(requestData: InventoryModels.RemoveTagRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.RemoveTagRequestData;
        }
    }

    /**
     * Maps the ServerRemoveTag operation to a typed request wrapper.
     */
    export class ServerRemoveTagOperationRequest extends RemoveTagOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerRemoveTagOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerRemoveTagRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerRemoveTagRequestData;
        }
    }

    /**
     * Maps the AdminRemoveTag operation to a typed request wrapper.
     */
    export class AdminRemoveTagOperationRequest extends RemoveTagOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminRemoveTagOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminRemoveTagRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminRemoveTagRequestData;
        }
    }

    /**
     * Maps the SetAmount operation to a typed request wrapper.
     */
    export class SetAmountOperationRequest extends CustomOperationRequestAbstract<InventoryModels.SetAmountRequestData> {
        protected override operationCode: string = OperationCode.SetAmount;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new SetAmountOperationRequest instance.
         */
        constructor(requestData: InventoryModels.SetAmountRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.SetAmountRequestData;
        }
    }

    /**
     * Maps the ServerSetAmount operation to a typed request wrapper.
     */
    export class ServerSetAmountOperationRequest extends SetAmountOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerSetAmountOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerSetAmountRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerSetAmountRequestData;
        }
    }

    /**
     * Maps the AdminSetAmount operation to a typed request wrapper.
     */
    export class AdminSetAmountOperationRequest extends SetAmountOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminSetAmountOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminSetAmountRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminSetAmountRequestData;
        }
    }

    /**
     * Maps the SetAvatar operation to a typed request wrapper.
     */
    export class SetAvatarOperationRequest extends CustomOperationRequestAbstract<InventoryModels.SetAvatarRequestData> {
        protected override operationCode: string = OperationCode.SetAvatar;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new SetAvatarOperationRequest instance.
         */
        constructor(requestData: InventoryModels.SetAvatarRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.SetAvatarRequestData;
        }
    }

    /**
     * Maps the ServerSetAvatar operation to a typed request wrapper.
     */
    export class ServerSetAvatarOperationRequest extends SetAvatarOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerSetAvatarOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerSetAvatarRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerSetAvatarRequestData;
        }
    }

    /**
     * Maps the AdminSetAvatar operation to a typed request wrapper.
     */
    export class AdminSetAvatarOperationRequest extends SetAvatarOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminSetAvatarOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminSetAvatarRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminSetAvatarRequestData;
        }
    }

    /**
     * Maps the SetCustomData operation to a typed request wrapper.
     */
    export class SetCustomDataOperationRequest extends CustomOperationRequestAbstract<InventoryModels.SetCustomDataRequestData> {
        protected override operationCode: string = OperationCode.SetCustomData;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new SetCustomDataOperationRequest instance.
         */
        constructor(requestData: InventoryModels.SetCustomDataRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.SetCustomDataRequestData;
        }
    }

    /**
     * Maps the ServerSetCustomData operation to a typed request wrapper.
     */
    export class ServerSetCustomDataOperationRequest extends SetCustomDataOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerSetCustomDataOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerSetCustomDataRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerSetCustomDataRequestData;
        }
    }

    /**
     * Maps the AdminSetCustomData operation to a typed request wrapper.
     */
    export class AdminSetCustomDataOperationRequest extends SetCustomDataOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminSetCustomDataOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminSetCustomDataRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminSetCustomDataRequestData;
        }
    }

    /**
     * Maps the SetDisplayName operation to a typed request wrapper.
     */
    export class SetDisplayNameOperationRequest extends CustomOperationRequestAbstract<InventoryModels.SetDisplayNameRequestData> {
        protected override operationCode: string = OperationCode.SetDisplayName;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new SetDisplayNameOperationRequest instance.
         */
        constructor(requestData: InventoryModels.SetDisplayNameRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.SetDisplayNameRequestData;
        }
    }

    /**
     * Maps the ServerSetDisplayName operation to a typed request wrapper.
     */
    export class ServerSetDisplayNameOperationRequest extends SetDisplayNameOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerSetDisplayNameOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerSetDisplayNameRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerSetDisplayNameRequestData;
        }
    }

    /**
     * Maps the AdminSetDisplayName operation to a typed request wrapper.
     */
    export class AdminSetDisplayNameOperationRequest extends SetDisplayNameOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminSetDisplayNameOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminSetDisplayNameRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminSetDisplayNameRequestData;
        }
    }

    /**
     * Maps the SetItemData operation to a typed request wrapper.
     */
    export class SetItemDataOperationRequest extends CustomOperationRequestAbstract<InventoryModels.SetItemDataRequestData> {
        protected override operationCode: string = OperationCode.SetItemData;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new SetItemDataOperationRequest instance.
         */
        constructor(requestData: InventoryModels.SetItemDataRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.SetItemDataRequestData;
        }
    }

    /**
     * Maps the ServerSetItemData operation to a typed request wrapper.
     */
    export class ServerSetItemDataOperationRequest extends SetItemDataOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerSetItemDataOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerSetItemDataRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerSetItemDataRequestData;
        }
    }

    /**
     * Maps the AdminSetItemData operation to a typed request wrapper.
     */
    export class AdminSetItemDataOperationRequest extends SetItemDataOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminSetItemDataOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminSetItemDataRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminSetItemDataRequestData;
        }
    }

    /**
     * Maps the ChangeItemStatistics operation to a typed request wrapper.
     */
    export class ChangeItemStatisticsOperationRequest extends CustomOperationRequestAbstract<InventoryModels.ChangeItemStatisticsRequestData> {
        protected override operationCode: string = OperationCode.ChangeItemStatistics;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new ChangeItemStatisticsOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ChangeItemStatisticsRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ChangeItemStatisticsRequestData;
        }
    }

    /**
     * Maps the ServerChangeItemStatistics operation to a typed request wrapper.
     */
    export class ServerChangeItemStatisticsOperationRequest extends ChangeItemStatisticsOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerChangeItemStatisticsOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerChangeItemStatisticsRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerChangeItemStatisticsRequestData;
        }
    }

    /**
     * Maps the AdminChangeItemStatistics operation to a typed request wrapper.
     */
    export class AdminChangeItemStatisticsOperationRequest extends ChangeItemStatisticsOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminChangeItemStatisticsOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminChangeItemStatisticsRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminChangeItemStatisticsRequestData;
        }
    }

    /**
     * Maps the SetOwner operation to a typed request wrapper.
     */
    export class SetOwnerOperationRequest extends CustomOperationRequestAbstract<InventoryModels.SetOwnerRequestData> {
        protected override operationCode: string = OperationCode.SetOwner;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new SetOwnerOperationRequest instance.
         */
        constructor(requestData: InventoryModels.SetOwnerRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.SetOwnerRequestData;
        }
    }

    /**
     * Maps the ServerSetOwner operation to a typed request wrapper.
     */
    export class ServerSetOwnerOperationRequest extends SetOwnerOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerSetOwnerOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerSetOwnerRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerSetOwnerRequestData;
        }
    }

    /**
     * Maps the AdminSetOwner operation to a typed request wrapper.
     */
    export class AdminSetOwnerOperationRequest extends SetOwnerOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminSetOwnerOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminSetOwnerRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminSetOwnerRequestData;
        }
    }

    /**
     * Maps the SetRemoveStatus operation to a typed request wrapper.
     */
    export class SetRemoveStatusOperationRequest extends CustomOperationRequestAbstract<InventoryModels.SetRemoveStatusRequestData> {
        protected override operationCode: string = OperationCode.SetRemoveStatus;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new SetRemoveStatusOperationRequest instance.
         */
        constructor(requestData: InventoryModels.SetRemoveStatusRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.SetRemoveStatusRequestData;
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
        constructor(requestData: InventoryModels.ServerSetRemoveStatusRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerSetRemoveStatusRequestData;
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
        constructor(requestData: InventoryModels.AdminSetRemoveStatusRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminSetRemoveStatusRequestData;
        }
    }

    /**
     * Maps the SetTag operation to a typed request wrapper.
     */
    export class SetTagOperationRequest extends CustomOperationRequestAbstract<InventoryModels.SetTagRequestData> {
        protected override operationCode: string = OperationCode.SetTag;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new SetTagOperationRequest instance.
         */
        constructor(requestData: InventoryModels.SetTagRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.SetTagRequestData;
        }
    }

    /**
     * Maps the ServerSetTag operation to a typed request wrapper.
     */
    export class ServerSetTagOperationRequest extends SetTagOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerSetTagOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerSetTagRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerSetTagRequestData;
        }
    }

    /**
     * Maps the AdminSetTag operation to a typed request wrapper.
     */
    export class AdminSetTagOperationRequest extends SetTagOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminSetTagOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminSetTagRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminSetTagRequestData;
        }
    }

    /**
     * Maps the GetCreateLeaderboard operation to a typed request wrapper.
     */
    export class GetCreateLeaderboardOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetCreateLeaderboardRequestData> {
        protected override operationCode: string = OperationCode.GetCreateLeaderboard;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetCreateLeaderboardOperationRequest instance.
         */
        constructor(requestData: InventoryModels.GetCreateLeaderboardRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.GetCreateLeaderboardRequestData;
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
        constructor(requestData: InventoryModels.ServerGetCreateLeaderboardRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerGetCreateLeaderboardRequestData;
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
        constructor(requestData: InventoryModels.AdminGetCreateLeaderboardRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminGetCreateLeaderboardRequestData;
        }
    }

    /**
     * Maps the GetStatisticsLog operation to a typed request wrapper.
     */
    export class GetStatisticsLogOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetStatisticsLogRequestData> {
        protected override operationCode: string = OperationCode.GetStatisticsLog;
        protected override requestType: RequestType = RequestType.Inventory;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetStatisticsLogOperationRequest instance.
         */
        constructor(requestData: InventoryModels.GetStatisticsLogRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.GetStatisticsLogRequestData;
        }
    }

    /**
     * Maps the ServerGetStatisticsLog operation to a typed request wrapper.
     */
    export class ServerGetStatisticsLogOperationRequest extends GetStatisticsLogOperationRequest {
        protected override role: RequestRole = RequestRole.Server;

        /**
         * Creates a new ServerGetStatisticsLogOperationRequest instance.
         */
        constructor(requestData: InventoryModels.ServerGetStatisticsLogRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.ServerGetStatisticsLogRequestData;
        }
    }

    /**
     * Maps the AdminGetStatisticsLog operation to a typed request wrapper.
     */
    export class AdminGetStatisticsLogOperationRequest extends GetStatisticsLogOperationRequest {
        protected override role: RequestRole = RequestRole.Admin;

        /**
         * Creates a new AdminGetStatisticsLogOperationRequest instance.
         */
        constructor(requestData: InventoryModels.AdminGetStatisticsLogRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = InventoryModels.AdminGetStatisticsLogRequestData;
        }
    }

}
