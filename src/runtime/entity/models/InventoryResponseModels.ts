import { CustomOperationResponseAbstract } from "./../response/CustomOperationResponse";
import { InventoryModels } from "./InventoryModels";

export namespace InventoryResponseModels {
	export class AddSegmentOperationResponse extends CustomOperationResponseAbstract<InventoryModels.EmptyResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.EmptyResponseData;
		}
	}

	export class GetAmountOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.InventoryResponseData;
		}
	}

	export class GetAvatarOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.InventoryResponseData;
		}
	}

	export class GetCatalogIdOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.InventoryResponseData;
		}
	}

	export class GetClassIdOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.InventoryResponseData;
		}
	}

	export class GetCustomDataOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.InventoryResponseData;
		}
	}

	export class GetDisplayNameOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.InventoryResponseData;
		}
	}

	export class GetItemDataOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.InventoryResponseData;
		}
	}

	export class GetItemInformationOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.InventoryResponseData;
		}
	}

	export class GetItemStatisticsOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.InventoryResponseData;
		}
	}

	export class GetItemsWithDisplayNameOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoriesWithItemIdResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.InventoriesWithItemIdResponseData;
		}
	}

	export class GetItemsWithSegmentOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoriesWithItemIdResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.InventoriesWithItemIdResponseData;
		}
	}

	export class GetItemsWithTagOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoriesWithItemIdResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.InventoriesWithItemIdResponseData;
		}
	}

	export class GetItemTypeOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.InventoryResponseData;
		}
	}

	export class GetOwnerOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.InventoryResponseData;
		}
	}

	export class GetRemoveStatusOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.InventoryResponseData;
		}
	}

	export class GetSegmentOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.InventoryResponseData;
		}
	}

	export class GetStatisticsLeaderboardAroundItemOperationResponse extends CustomOperationResponseAbstract<InventoryModels.GetStatisticsLeaderboardResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.GetStatisticsLeaderboardResponseData;
		}
	}

	export class GetStatisticsLeaderboardOperationResponse extends CustomOperationResponseAbstract<InventoryModels.GetStatisticsLeaderboardResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.GetStatisticsLeaderboardResponseData;
		}
	}

	export class GetTagOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.InventoryResponseData;
		}
	}

	export class GetTsCreateOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.InventoryResponseData;
		}
	}

	export class RemoveSegmentOperationResponse extends CustomOperationResponseAbstract<InventoryModels.EmptyResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.EmptyResponseData;
		}
	}

	export class RemoveTagOperationResponse extends CustomOperationResponseAbstract<InventoryModels.EmptyResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.EmptyResponseData;
		}
	}

	export class SetAmountOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.InventoryResponseData;
		}
	}

	export class SetAvatarOperationResponse extends CustomOperationResponseAbstract<InventoryModels.EmptyResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.EmptyResponseData;
		}
	}

	export class SetCustomDataOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.InventoryResponseData;
		}
	}

	export class SetDisplayNameOperationResponse extends CustomOperationResponseAbstract<InventoryModels.EmptyResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.EmptyResponseData;
		}
	}

	export class SetItemDataOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.InventoryResponseData;
		}
	}

	export class ChangeItemStatisticsOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.InventoryResponseData;
		}
	}

	export class SetOwnerOperationResponse extends CustomOperationResponseAbstract<InventoryModels.EmptyResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.EmptyResponseData;
		}
	}

	export class SetRemoveStatusOperationResponse extends CustomOperationResponseAbstract<InventoryModels.EmptyResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.EmptyResponseData;
		}
	}

	export class SetTagOperationResponse extends CustomOperationResponseAbstract<InventoryModels.EmptyResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.EmptyResponseData;
		}
	}

	export class GetCreateLeaderboardOperationResponse extends CustomOperationResponseAbstract<InventoryModels.GetCreateLeaderboardResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.GetCreateLeaderboardResponseData;
		}
	}

	export class GetStatisticsLogOperationResponse extends CustomOperationResponseAbstract<InventoryModels.GetStatisticsLogResponseData> {

		constructor() {
			super();
			this.responseDataCls = InventoryModels.GetStatisticsLogResponseData;
		}
	}

}
