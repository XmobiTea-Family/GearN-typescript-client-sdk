import { OperationCode } from "../../constant/OperationCode";
import { RequestRole } from "../../constant/enumType/RequestRole";
import { RequestType } from "../../constant/enumType/RequestType";
import { CustomOperationRequestAbstract } from "../request/CustomOperationRequest";
import { InventoryModels } from "./InventoryModels";

export module InventoryRequestModels {
	export class AddSegmentOperationRequest extends CustomOperationRequestAbstract<InventoryModels.AddSegmentRequestData> {
		protected override operationCode: number = OperationCode.AddSegment;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.AddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerAddSegmentOperationRequest extends AddSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.AddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminAddSegmentOperationRequest extends AddSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.AddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetAmountOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetAmountRequestData> {
		protected override operationCode: number = OperationCode.GetAmount;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetAmountRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetAmountOperationRequest extends GetAmountOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.GetAmountRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetAmountOperationRequest extends GetAmountOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.GetAmountRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetAvatarOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetAvatarRequestData> {
		protected override operationCode: number = OperationCode.GetAvatar;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetAvatarOperationRequest extends GetAvatarOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.GetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetAvatarOperationRequest extends GetAvatarOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.GetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetCatalogIdOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetCatalogIdRequestData> {
		protected override operationCode: number = OperationCode.GetCatalogId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetCatalogIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetCatalogIdOperationRequest extends GetCatalogIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.GetCatalogIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetCatalogIdOperationRequest extends GetCatalogIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.GetCatalogIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetClassIdOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetClassIdRequestData> {
		protected override operationCode: number = OperationCode.GetClassId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetClassIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetClassIdOperationRequest extends GetClassIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.GetClassIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetClassIdOperationRequest extends GetClassIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.GetClassIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetCustomDataOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetCustomDataRequestData> {
		protected override operationCode: number = OperationCode.GetCustomData;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetCustomDataOperationRequest extends GetCustomDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.GetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetCustomDataOperationRequest extends GetCustomDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.GetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetDisplayNameOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetDisplayNameRequestData> {
		protected override operationCode: number = OperationCode.GetDisplayName;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetDisplayNameOperationRequest extends GetDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.GetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetDisplayNameOperationRequest extends GetDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.GetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetItemDataOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetItemDataRequestData> {
		protected override operationCode: number = OperationCode.GetItemData;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetItemDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetItemDataOperationRequest extends GetItemDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.GetItemDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetItemDataOperationRequest extends GetItemDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.GetItemDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetItemInformationOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetItemInformationRequestData> {
		protected override operationCode: number = OperationCode.GetItemInformation;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetItemInformationRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetItemInformationOperationRequest extends GetItemInformationOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.GetItemInformationRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetItemInformationOperationRequest extends GetItemInformationOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.GetItemInformationRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetItemStatisticsOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetItemStatisticsRequestData> {
		protected override operationCode: number = OperationCode.GetItemStatistics;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetItemStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetItemStatisticsOperationRequest extends GetItemStatisticsOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.GetItemStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetItemStatisticsOperationRequest extends GetItemStatisticsOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.GetItemStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetItemsWithDisplayNameOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetItemsWithDisplayNameRequestData> {
		protected override operationCode: number = OperationCode.GetItemsWithDisplayName;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetItemsWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetItemsWithDisplayNameOperationRequest extends GetItemsWithDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.GetItemsWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetItemsWithDisplayNameOperationRequest extends GetItemsWithDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.GetItemsWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetItemsWithSegmentOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetItemsWithSegmentRequestData> {
		protected override operationCode: number = OperationCode.GetItemsWithSegment;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetItemsWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetItemsWithSegmentOperationRequest extends GetItemsWithSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.GetItemsWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetItemsWithSegmentOperationRequest extends GetItemsWithSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.GetItemsWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetItemsWithTagOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetItemsWithTagRequestData> {
		protected override operationCode: number = OperationCode.GetItemsWithTag;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetItemsWithTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetItemsWithTagOperationRequest extends GetItemsWithTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.GetItemsWithTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetItemsWithTagOperationRequest extends GetItemsWithTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.GetItemsWithTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetItemTypeOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetItemTypeRequestData> {
		protected override operationCode: number = OperationCode.GetItemType;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetItemTypeRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetItemTypeOperationRequest extends GetItemTypeOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.GetItemTypeRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetItemTypeOperationRequest extends GetItemTypeOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.GetItemTypeRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetOwnerOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetOwnerRequestData> {
		protected override operationCode: number = OperationCode.GetOwner;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetOwnerRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetOwnerOperationRequest extends GetOwnerOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.GetOwnerRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetOwnerOperationRequest extends GetOwnerOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.GetOwnerRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetRemoveStatusOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetRemoveStatusRequestData> {
		protected override operationCode: number = OperationCode.GetRemoveStatus;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetRemoveStatusOperationRequest extends GetRemoveStatusOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.GetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetRemoveStatusOperationRequest extends GetRemoveStatusOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.GetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetSegmentOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetSegmentRequestData> {
		protected override operationCode: number = OperationCode.GetSegment;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetSegmentOperationRequest extends GetSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.GetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetSegmentOperationRequest extends GetSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.GetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetStatisticsLeaderboardAroundItemOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetStatisticsLeaderboardAroundItemRequestData> {
		protected override operationCode: number = OperationCode.GetStatisticsLeaderboardAroundItem;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetStatisticsLeaderboardAroundItemRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetStatisticsLeaderboardAroundItemOperationRequest extends GetStatisticsLeaderboardAroundItemOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.GetStatisticsLeaderboardAroundItemRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetStatisticsLeaderboardAroundItemOperationRequest extends GetStatisticsLeaderboardAroundItemOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.GetStatisticsLeaderboardAroundItemRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetStatisticsLeaderboardOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetStatisticsLeaderboardRequestData> {
		protected override operationCode: number = OperationCode.GetStatisticsLeaderboard;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetStatisticsLeaderboardOperationRequest extends GetStatisticsLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.GetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetStatisticsLeaderboardOperationRequest extends GetStatisticsLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.GetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetTagOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetTagRequestData> {
		protected override operationCode: number = OperationCode.GetTag;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetTagOperationRequest extends GetTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.GetTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetTagOperationRequest extends GetTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.GetTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetTsCreateOperationRequest extends CustomOperationRequestAbstract<InventoryModels.GetTsCreateRequestData> {
		protected override operationCode: number = OperationCode.GetTsCreate;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.GetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetTsCreateOperationRequest extends GetTsCreateOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.GetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetTsCreateOperationRequest extends GetTsCreateOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.GetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class RemoveSegmentOperationRequest extends CustomOperationRequestAbstract<InventoryModels.RemoveSegmentRequestData> {
		protected override operationCode: number = OperationCode.RemoveSegment;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.RemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerRemoveSegmentOperationRequest extends RemoveSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.RemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminRemoveSegmentOperationRequest extends RemoveSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.RemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class RemoveTagOperationRequest extends CustomOperationRequestAbstract<InventoryModels.RemoveTagRequestData> {
		protected override operationCode: number = OperationCode.RemoveTag;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.RemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerRemoveTagOperationRequest extends RemoveTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.RemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminRemoveTagOperationRequest extends RemoveTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.RemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetAmountOperationRequest extends CustomOperationRequestAbstract<InventoryModels.SetAmountRequestData> {
		protected override operationCode: number = OperationCode.SetAmount;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.SetAmountRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetAmountOperationRequest extends SetAmountOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.SetAmountRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetAmountOperationRequest extends SetAmountOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.SetAmountRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetAvatarOperationRequest extends CustomOperationRequestAbstract<InventoryModels.SetAvatarRequestData> {
		protected override operationCode: number = OperationCode.SetAvatar;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.SetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetAvatarOperationRequest extends SetAvatarOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.SetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetAvatarOperationRequest extends SetAvatarOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.SetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetCustomDataOperationRequest extends CustomOperationRequestAbstract<InventoryModels.SetCustomDataRequestData> {
		protected override operationCode: number = OperationCode.SetCustomData;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.SetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetCustomDataOperationRequest extends SetCustomDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.SetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetCustomDataOperationRequest extends SetCustomDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.SetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetDisplayNameOperationRequest extends CustomOperationRequestAbstract<InventoryModels.SetDisplayNameRequestData> {
		protected override operationCode: number = OperationCode.SetDisplayName;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.SetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetDisplayNameOperationRequest extends SetDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.SetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetDisplayNameOperationRequest extends SetDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.SetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetItemDataOperationRequest extends CustomOperationRequestAbstract<InventoryModels.SetItemDataRequestData> {
		protected override operationCode: number = OperationCode.SetItemData;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.SetItemDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetItemDataOperationRequest extends SetItemDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.SetItemDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetItemDataOperationRequest extends SetItemDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.SetItemDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetItemStatisticsOperationRequest extends CustomOperationRequestAbstract<InventoryModels.SetItemStatisticsRequestData> {
		protected override operationCode: number = OperationCode.SetItemStatistics;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.SetItemStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetItemStatisticsOperationRequest extends SetItemStatisticsOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.SetItemStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetItemStatisticsOperationRequest extends SetItemStatisticsOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.SetItemStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetOwnerOperationRequest extends CustomOperationRequestAbstract<InventoryModels.SetOwnerRequestData> {
		protected override operationCode: number = OperationCode.SetOwner;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.SetOwnerRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetOwnerOperationRequest extends SetOwnerOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.SetOwnerRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetOwnerOperationRequest extends SetOwnerOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.SetOwnerRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetRemoveStatusOperationRequest extends CustomOperationRequestAbstract<InventoryModels.SetRemoveStatusRequestData> {
		protected override operationCode: number = OperationCode.SetRemoveStatus;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.SetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetRemoveStatusOperationRequest extends SetRemoveStatusOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.SetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetRemoveStatusOperationRequest extends SetRemoveStatusOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.SetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetTagOperationRequest extends CustomOperationRequestAbstract<InventoryModels.SetTagRequestData> {
		protected override operationCode: number = OperationCode.SetTag;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Inventory;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: InventoryModels.SetTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetTagOperationRequest extends SetTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: InventoryModels.SetTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetTagOperationRequest extends SetTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: InventoryModels.SetTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

}
