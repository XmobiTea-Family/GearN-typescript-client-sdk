import { OperationCode } from "./../../constant/OperationCode";
import { RequestRole } from "./../../constant/enumType/RequestRole";
import { RequestType } from "./../../constant/enumType/RequestType";
import { CustomOperationRequestAbstract } from "./../request/CustomOperationRequest";
import { InventoryModels } from "./InventoryModels";

export namespace InventoryRequestModels {
	export class AddSegmentOperationRequest extends CustomOperationRequestAbstract<InventoryModels.AddSegmentRequestData> {
		protected override operationCode: string = OperationCode.AddSegment;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.AddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AddSegmentRequestData;
		}
	}

	export class ServerAddSegmentOperationRequest extends AddSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerAddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerAddSegmentRequestData;
		}
	}

	export class AdminAddSegmentOperationRequest extends AddSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminAddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminAddSegmentRequestData;
		}
	}

	export class GetAmountOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetAmountRequestData> {
		protected override operationCode: string = OperationCode.GetAmount;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetAmountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.GetAmountRequestData;
		}
	}

	export class ServerGetAmountOperationRequest extends GetAmountOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerGetAmountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerGetAmountRequestData;
		}
	}

	export class AdminGetAmountOperationRequest extends GetAmountOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminGetAmountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminGetAmountRequestData;
		}
	}

	export class GetAvatarOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetAvatarRequestData> {
		protected override operationCode: string = OperationCode.GetAvatar;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.GetAvatarRequestData;
		}
	}

	export class ServerGetAvatarOperationRequest extends GetAvatarOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerGetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerGetAvatarRequestData;
		}
	}

	export class AdminGetAvatarOperationRequest extends GetAvatarOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminGetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminGetAvatarRequestData;
		}
	}

	export class GetCatalogIdOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetCatalogIdRequestData> {
		protected override operationCode: string = OperationCode.GetCatalogId;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetCatalogIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.GetCatalogIdRequestData;
		}
	}

	export class ServerGetCatalogIdOperationRequest extends GetCatalogIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerGetCatalogIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerGetCatalogIdRequestData;
		}
	}

	export class AdminGetCatalogIdOperationRequest extends GetCatalogIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminGetCatalogIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminGetCatalogIdRequestData;
		}
	}

	export class GetClassIdOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetClassIdRequestData> {
		protected override operationCode: string = OperationCode.GetClassId;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetClassIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.GetClassIdRequestData;
		}
	}

	export class ServerGetClassIdOperationRequest extends GetClassIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerGetClassIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerGetClassIdRequestData;
		}
	}

	export class AdminGetClassIdOperationRequest extends GetClassIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminGetClassIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminGetClassIdRequestData;
		}
	}

	export class GetCustomDataOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetCustomDataRequestData> {
		protected override operationCode: string = OperationCode.GetCustomData;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.GetCustomDataRequestData;
		}
	}

	export class ServerGetCustomDataOperationRequest extends GetCustomDataOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerGetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerGetCustomDataRequestData;
		}
	}

	export class AdminGetCustomDataOperationRequest extends GetCustomDataOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminGetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminGetCustomDataRequestData;
		}
	}

	export class GetDisplayNameOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetDisplayNameRequestData> {
		protected override operationCode: string = OperationCode.GetDisplayName;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.GetDisplayNameRequestData;
		}
	}

	export class ServerGetDisplayNameOperationRequest extends GetDisplayNameOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerGetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerGetDisplayNameRequestData;
		}
	}

	export class AdminGetDisplayNameOperationRequest extends GetDisplayNameOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminGetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminGetDisplayNameRequestData;
		}
	}

	export class GetItemDataOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetItemDataRequestData> {
		protected override operationCode: string = OperationCode.GetItemData;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetItemDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.GetItemDataRequestData;
		}
	}

	export class ServerGetItemDataOperationRequest extends GetItemDataOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerGetItemDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerGetItemDataRequestData;
		}
	}

	export class AdminGetItemDataOperationRequest extends GetItemDataOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminGetItemDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminGetItemDataRequestData;
		}
	}

	export class GetItemInformationOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetItemInformationRequestData> {
		protected override operationCode: string = OperationCode.GetItemInformation;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetItemInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.GetItemInformationRequestData;
		}
	}

	export class ServerGetItemInformationOperationRequest extends GetItemInformationOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerGetItemInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerGetItemInformationRequestData;
		}
	}

	export class AdminGetItemInformationOperationRequest extends GetItemInformationOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminGetItemInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminGetItemInformationRequestData;
		}
	}

	export class GetItemStatisticsOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetItemStatisticsRequestData> {
		protected override operationCode: string = OperationCode.GetItemStatistics;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetItemStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.GetItemStatisticsRequestData;
		}
	}

	export class ServerGetItemStatisticsOperationRequest extends GetItemStatisticsOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerGetItemStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerGetItemStatisticsRequestData;
		}
	}

	export class AdminGetItemStatisticsOperationRequest extends GetItemStatisticsOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminGetItemStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminGetItemStatisticsRequestData;
		}
	}

	export class GetItemsWithDisplayNameOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetItemsWithDisplayNameRequestData> {
		protected override operationCode: string = OperationCode.GetItemsWithDisplayName;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetItemsWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.GetItemsWithDisplayNameRequestData;
		}
	}

	export class ServerGetItemsWithDisplayNameOperationRequest extends GetItemsWithDisplayNameOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerGetItemsWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerGetItemsWithDisplayNameRequestData;
		}
	}

	export class AdminGetItemsWithDisplayNameOperationRequest extends GetItemsWithDisplayNameOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminGetItemsWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminGetItemsWithDisplayNameRequestData;
		}
	}

	export class GetItemsWithSegmentOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetItemsWithSegmentRequestData> {
		protected override operationCode: string = OperationCode.GetItemsWithSegment;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetItemsWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.GetItemsWithSegmentRequestData;
		}
	}

	export class ServerGetItemsWithSegmentOperationRequest extends GetItemsWithSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerGetItemsWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerGetItemsWithSegmentRequestData;
		}
	}

	export class AdminGetItemsWithSegmentOperationRequest extends GetItemsWithSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminGetItemsWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminGetItemsWithSegmentRequestData;
		}
	}

	export class GetItemsWithTagOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetItemsWithTagRequestData> {
		protected override operationCode: string = OperationCode.GetItemsWithTag;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetItemsWithTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.GetItemsWithTagRequestData;
		}
	}

	export class ServerGetItemsWithTagOperationRequest extends GetItemsWithTagOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerGetItemsWithTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerGetItemsWithTagRequestData;
		}
	}

	export class AdminGetItemsWithTagOperationRequest extends GetItemsWithTagOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminGetItemsWithTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminGetItemsWithTagRequestData;
		}
	}

	export class GetItemTypeOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetItemTypeRequestData> {
		protected override operationCode: string = OperationCode.GetItemType;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetItemTypeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.GetItemTypeRequestData;
		}
	}

	export class ServerGetItemTypeOperationRequest extends GetItemTypeOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerGetItemTypeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerGetItemTypeRequestData;
		}
	}

	export class AdminGetItemTypeOperationRequest extends GetItemTypeOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminGetItemTypeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminGetItemTypeRequestData;
		}
	}

	export class GetOwnerOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetOwnerRequestData> {
		protected override operationCode: string = OperationCode.GetOwner;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetOwnerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.GetOwnerRequestData;
		}
	}

	export class ServerGetOwnerOperationRequest extends GetOwnerOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerGetOwnerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerGetOwnerRequestData;
		}
	}

	export class AdminGetOwnerOperationRequest extends GetOwnerOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminGetOwnerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminGetOwnerRequestData;
		}
	}

	export class GetRemoveStatusOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetRemoveStatusRequestData> {
		protected override operationCode: string = OperationCode.GetRemoveStatus;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.GetRemoveStatusRequestData;
		}
	}

	export class ServerGetRemoveStatusOperationRequest extends GetRemoveStatusOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerGetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerGetRemoveStatusRequestData;
		}
	}

	export class AdminGetRemoveStatusOperationRequest extends GetRemoveStatusOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminGetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminGetRemoveStatusRequestData;
		}
	}

	export class GetSegmentOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetSegmentRequestData> {
		protected override operationCode: string = OperationCode.GetSegment;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.GetSegmentRequestData;
		}
	}

	export class ServerGetSegmentOperationRequest extends GetSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerGetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerGetSegmentRequestData;
		}
	}

	export class AdminGetSegmentOperationRequest extends GetSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminGetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminGetSegmentRequestData;
		}
	}

	export class GetStatisticsLeaderboardAroundItemOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetStatisticsLeaderboardAroundItemRequestData> {
		protected override operationCode: string = OperationCode.GetStatisticsLeaderboardAroundItem;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetStatisticsLeaderboardAroundItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.GetStatisticsLeaderboardAroundItemRequestData;
		}
	}

	export class ServerGetStatisticsLeaderboardAroundItemOperationRequest extends GetStatisticsLeaderboardAroundItemOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerGetStatisticsLeaderboardAroundItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerGetStatisticsLeaderboardAroundItemRequestData;
		}
	}

	export class AdminGetStatisticsLeaderboardAroundItemOperationRequest extends GetStatisticsLeaderboardAroundItemOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminGetStatisticsLeaderboardAroundItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminGetStatisticsLeaderboardAroundItemRequestData;
		}
	}

	export class GetStatisticsLeaderboardOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetStatisticsLeaderboardRequestData> {
		protected override operationCode: string = OperationCode.GetStatisticsLeaderboard;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.GetStatisticsLeaderboardRequestData;
		}
	}

	export class ServerGetStatisticsLeaderboardOperationRequest extends GetStatisticsLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerGetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerGetStatisticsLeaderboardRequestData;
		}
	}

	export class AdminGetStatisticsLeaderboardOperationRequest extends GetStatisticsLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminGetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminGetStatisticsLeaderboardRequestData;
		}
	}

	export class GetTagOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetTagRequestData> {
		protected override operationCode: string = OperationCode.GetTag;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.GetTagRequestData;
		}
	}

	export class ServerGetTagOperationRequest extends GetTagOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerGetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerGetTagRequestData;
		}
	}

	export class AdminGetTagOperationRequest extends GetTagOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminGetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminGetTagRequestData;
		}
	}

	export class GetTsCreateOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetTsCreateRequestData> {
		protected override operationCode: string = OperationCode.GetTsCreate;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.GetTsCreateRequestData;
		}
	}

	export class ServerGetTsCreateOperationRequest extends GetTsCreateOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerGetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerGetTsCreateRequestData;
		}
	}

	export class AdminGetTsCreateOperationRequest extends GetTsCreateOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminGetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminGetTsCreateRequestData;
		}
	}

	export class RemoveSegmentOperationRequest extends CustomOperationRequestAbstract<InventoryModels.RemoveSegmentRequestData> {
		protected override operationCode: string = OperationCode.RemoveSegment;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.RemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.RemoveSegmentRequestData;
		}
	}

	export class ServerRemoveSegmentOperationRequest extends RemoveSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerRemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerRemoveSegmentRequestData;
		}
	}

	export class AdminRemoveSegmentOperationRequest extends RemoveSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminRemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminRemoveSegmentRequestData;
		}
	}

	export class RemoveTagOperationRequest extends CustomOperationRequestAbstract<InventoryModels.RemoveTagRequestData> {
		protected override operationCode: string = OperationCode.RemoveTag;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.RemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.RemoveTagRequestData;
		}
	}

	export class ServerRemoveTagOperationRequest extends RemoveTagOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerRemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerRemoveTagRequestData;
		}
	}

	export class AdminRemoveTagOperationRequest extends RemoveTagOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminRemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminRemoveTagRequestData;
		}
	}

	export class SetAmountOperationRequest extends CustomOperationRequestAbstract<InventoryModels.SetAmountRequestData> {
		protected override operationCode: string = OperationCode.SetAmount;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.SetAmountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.SetAmountRequestData;
		}
	}

	export class ServerSetAmountOperationRequest extends SetAmountOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerSetAmountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerSetAmountRequestData;
		}
	}

	export class AdminSetAmountOperationRequest extends SetAmountOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminSetAmountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminSetAmountRequestData;
		}
	}

	export class SetAvatarOperationRequest extends CustomOperationRequestAbstract<InventoryModels.SetAvatarRequestData> {
		protected override operationCode: string = OperationCode.SetAvatar;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.SetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.SetAvatarRequestData;
		}
	}

	export class ServerSetAvatarOperationRequest extends SetAvatarOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerSetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerSetAvatarRequestData;
		}
	}

	export class AdminSetAvatarOperationRequest extends SetAvatarOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminSetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminSetAvatarRequestData;
		}
	}

	export class SetCustomDataOperationRequest extends CustomOperationRequestAbstract<InventoryModels.SetCustomDataRequestData> {
		protected override operationCode: string = OperationCode.SetCustomData;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.SetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.SetCustomDataRequestData;
		}
	}

	export class ServerSetCustomDataOperationRequest extends SetCustomDataOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerSetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerSetCustomDataRequestData;
		}
	}

	export class AdminSetCustomDataOperationRequest extends SetCustomDataOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminSetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminSetCustomDataRequestData;
		}
	}

	export class SetDisplayNameOperationRequest extends CustomOperationRequestAbstract<InventoryModels.SetDisplayNameRequestData> {
		protected override operationCode: string = OperationCode.SetDisplayName;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.SetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.SetDisplayNameRequestData;
		}
	}

	export class ServerSetDisplayNameOperationRequest extends SetDisplayNameOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerSetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerSetDisplayNameRequestData;
		}
	}

	export class AdminSetDisplayNameOperationRequest extends SetDisplayNameOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminSetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminSetDisplayNameRequestData;
		}
	}

	export class SetItemDataOperationRequest extends CustomOperationRequestAbstract<InventoryModels.SetItemDataRequestData> {
		protected override operationCode: string = OperationCode.SetItemData;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.SetItemDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.SetItemDataRequestData;
		}
	}

	export class ServerSetItemDataOperationRequest extends SetItemDataOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerSetItemDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerSetItemDataRequestData;
		}
	}

	export class AdminSetItemDataOperationRequest extends SetItemDataOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminSetItemDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminSetItemDataRequestData;
		}
	}

	export class ChangeItemStatisticsOperationRequest extends CustomOperationRequestAbstract<InventoryModels.ChangeItemStatisticsRequestData> {
		protected override operationCode: string = OperationCode.ChangeItemStatistics;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.ChangeItemStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ChangeItemStatisticsRequestData;
		}
	}

	export class ServerChangeItemStatisticsOperationRequest extends ChangeItemStatisticsOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerChangeItemStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerChangeItemStatisticsRequestData;
		}
	}

	export class AdminChangeItemStatisticsOperationRequest extends ChangeItemStatisticsOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminChangeItemStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminChangeItemStatisticsRequestData;
		}
	}

	export class SetOwnerOperationRequest extends CustomOperationRequestAbstract<InventoryModels.SetOwnerRequestData> {
		protected override operationCode: string = OperationCode.SetOwner;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.SetOwnerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.SetOwnerRequestData;
		}
	}

	export class ServerSetOwnerOperationRequest extends SetOwnerOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerSetOwnerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerSetOwnerRequestData;
		}
	}

	export class AdminSetOwnerOperationRequest extends SetOwnerOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminSetOwnerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminSetOwnerRequestData;
		}
	}

	export class SetRemoveStatusOperationRequest extends CustomOperationRequestAbstract<InventoryModels.SetRemoveStatusRequestData> {
		protected override operationCode: string = OperationCode.SetRemoveStatus;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.SetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.SetRemoveStatusRequestData;
		}
	}

	export class ServerSetRemoveStatusOperationRequest extends SetRemoveStatusOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerSetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerSetRemoveStatusRequestData;
		}
	}

	export class AdminSetRemoveStatusOperationRequest extends SetRemoveStatusOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminSetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminSetRemoveStatusRequestData;
		}
	}

	export class SetTagOperationRequest extends CustomOperationRequestAbstract<InventoryModels.SetTagRequestData> {
		protected override operationCode: string = OperationCode.SetTag;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.SetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.SetTagRequestData;
		}
	}

	export class ServerSetTagOperationRequest extends SetTagOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerSetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerSetTagRequestData;
		}
	}

	export class AdminSetTagOperationRequest extends SetTagOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminSetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminSetTagRequestData;
		}
	}

	export class GetCreateLeaderboardOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetCreateLeaderboardRequestData> {
		protected override operationCode: string = OperationCode.GetCreateLeaderboard;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetCreateLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.GetCreateLeaderboardRequestData;
		}
	}

	export class ServerGetCreateLeaderboardOperationRequest extends GetCreateLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerGetCreateLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerGetCreateLeaderboardRequestData;
		}
	}

	export class AdminGetCreateLeaderboardOperationRequest extends GetCreateLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminGetCreateLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminGetCreateLeaderboardRequestData;
		}
	}

	export class GetStatisticsLogOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetStatisticsLogRequestData> {
		protected override operationCode: string = OperationCode.GetStatisticsLog;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetStatisticsLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.GetStatisticsLogRequestData;
		}
	}

	export class ServerGetStatisticsLogOperationRequest extends GetStatisticsLogOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.ServerGetStatisticsLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.ServerGetStatisticsLogRequestData;
		}
	}

	export class AdminGetStatisticsLogOperationRequest extends GetStatisticsLogOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AdminGetStatisticsLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = InventoryModels.AdminGetStatisticsLogRequestData;
		}
	}

}
