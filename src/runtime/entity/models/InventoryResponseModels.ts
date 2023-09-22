import { CustomOperationResponseAbstract } from "../response/CustomOperationResponse";
import { InventoryModels } from "./InventoryModels";

export module InventoryResponseModels {
	export class AddSegmentOperationResponse extends CustomOperationResponseAbstract<InventoryModels.EmptyResponseData> {
	}

	export class GetAmountOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InfoResponseParameters> {
	}

	export class GetAvatarOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InfoResponseParameters> {
	}

	export class GetCatalogIdOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InfoResponseParameters> {
	}

	export class GetClassIdOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InfoResponseParameters> {
	}

	export class GetCustomDataOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InfoResponseParameters> {
	}

	export class GetDisplayNameOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InfoResponseParameters> {
	}

	export class GetItemDataOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InfoResponseParameters> {
	}

	export class GetItemInformationOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InfoResponseParameters> {
	}

	export class GetItemStatisticsOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InfoResponseParameters> {
	}

	export class GetItemsWithDisplayNameOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoriesWithItemIdResponseData> {
	}

	export class GetItemsWithSegmentOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoriesWithItemIdResponseData> {
	}

	export class GetItemsWithTagOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoriesWithItemIdResponseData> {
	}

	export class GetItemTypeOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InfoResponseParameters> {
	}

	export class GetOwnerOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InfoResponseParameters> {
	}

	export class GetRemoveStatusOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InfoResponseParameters> {
	}

	export class GetSegmentOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InfoResponseParameters> {
	}

	export class GetStatisticsLeaderboardAroundItemOperationResponse extends CustomOperationResponseAbstract<InventoryModels.GetStatisticsLeaderboardResponseData> {
	}

	export class GetStatisticsLeaderboardOperationResponse extends CustomOperationResponseAbstract<InventoryModels.GetStatisticsLeaderboardResponseData> {
	}

	export class GetTagOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InfoResponseParameters> {
	}

	export class GetTsCreateOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InfoResponseParameters> {
	}

	export class RemoveSegmentOperationResponse extends CustomOperationResponseAbstract<InventoryModels.EmptyResponseData> {
	}

	export class RemoveTagOperationResponse extends CustomOperationResponseAbstract<InventoryModels.EmptyResponseData> {
	}

	export class SetAmountOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InfoResponseParameters> {
	}

	export class SetAvatarOperationResponse extends CustomOperationResponseAbstract<InventoryModels.EmptyResponseData> {
	}

	export class SetCustomDataOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InfoResponseParameters> {
	}

	export class SetDisplayNameOperationResponse extends CustomOperationResponseAbstract<InventoryModels.EmptyResponseData> {
	}

	export class SetItemDataOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InfoResponseParameters> {
	}

	export class SetItemStatisticsOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InfoResponseParameters> {
	}

	export class SetOwnerOperationResponse extends CustomOperationResponseAbstract<InventoryModels.EmptyResponseData> {
	}

	export class SetRemoveStatusOperationResponse extends CustomOperationResponseAbstract<InventoryModels.EmptyResponseData> {
	}

	export class SetTagOperationResponse extends CustomOperationResponseAbstract<InventoryModels.EmptyResponseData> {
	}

}
