import { CustomOperationResponseAbstract } from "./../response/CustomOperationResponse";
import { InventoryModels } from "./InventoryModels";

/**
 * Typed response wrappers for the Inventory domain.
 *
 * Each class extends {@link CustomOperationResponseAbstract}
 * and binds a response DTO from {@link InventoryModels}. The
 * same wrapper is reused across the client / server / admin
 * role variants because the response shape does not depend on
 * the role.
 *
 * Many read operations resolve to a list-style envelope
 * (`InventoryResponseData` or a derived shape) whose
 * `infoResponseParameters` field is gated by the matching
 * request DTO's `infoRequestParam` flags.
 */
export namespace InventoryResponseModels {
    /**
     * Maps the AddSegment operation to a typed response wrapper.
     */
    export class AddSegmentOperationResponse extends CustomOperationResponseAbstract<InventoryModels.EmptyResponseData> {

        /**
         * Creates a new AddSegmentOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.EmptyResponseData;
        }
    }

    /**
     * Maps the GetAmount operation to a typed response wrapper.
     */
    export class GetAmountOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

        /**
         * Creates a new GetAmountOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.InventoryResponseData;
        }
    }

    /**
     * Maps the GetAvatar operation to a typed response wrapper.
     */
    export class GetAvatarOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

        /**
         * Creates a new GetAvatarOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.InventoryResponseData;
        }
    }

    /**
     * Maps the GetCatalogId operation to a typed response wrapper.
     */
    export class GetCatalogIdOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

        /**
         * Creates a new GetCatalogIdOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.InventoryResponseData;
        }
    }

    /**
     * Maps the GetClassId operation to a typed response wrapper.
     */
    export class GetClassIdOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

        /**
         * Creates a new GetClassIdOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.InventoryResponseData;
        }
    }

    /**
     * Maps the GetCustomData operation to a typed response wrapper.
     */
    export class GetCustomDataOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

        /**
         * Creates a new GetCustomDataOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.InventoryResponseData;
        }
    }

    /**
     * Maps the GetDisplayName operation to a typed response wrapper.
     */
    export class GetDisplayNameOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

        /**
         * Creates a new GetDisplayNameOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.InventoryResponseData;
        }
    }

    /**
     * Maps the GetItemData operation to a typed response wrapper.
     */
    export class GetItemDataOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

        /**
         * Creates a new GetItemDataOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.InventoryResponseData;
        }
    }

    /**
     * Maps the GetItemInformation operation to a typed response wrapper.
     */
    export class GetItemInformationOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

        /**
         * Creates a new GetItemInformationOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.InventoryResponseData;
        }
    }

    /**
     * Maps the GetItemStatistics operation to a typed response wrapper.
     */
    export class GetItemStatisticsOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

        /**
         * Creates a new GetItemStatisticsOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.InventoryResponseData;
        }
    }

    /**
     * Maps the GetItemsWithDisplayName operation to a typed response wrapper.
     */
    export class GetItemsWithDisplayNameOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoriesWithItemIdResponseData> {

        /**
         * Creates a new GetItemsWithDisplayNameOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.InventoriesWithItemIdResponseData;
        }
    }

    /**
     * Maps the GetItemsWithSegment operation to a typed response wrapper.
     */
    export class GetItemsWithSegmentOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoriesWithItemIdResponseData> {

        /**
         * Creates a new GetItemsWithSegmentOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.InventoriesWithItemIdResponseData;
        }
    }

    /**
     * Maps the GetItemsWithTag operation to a typed response wrapper.
     */
    export class GetItemsWithTagOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoriesWithItemIdResponseData> {

        /**
         * Creates a new GetItemsWithTagOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.InventoriesWithItemIdResponseData;
        }
    }

    /**
     * Maps the GetItemType operation to a typed response wrapper.
     */
    export class GetItemTypeOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

        /**
         * Creates a new GetItemTypeOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.InventoryResponseData;
        }
    }

    /**
     * Maps the GetOwner operation to a typed response wrapper.
     */
    export class GetOwnerOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

        /**
         * Creates a new GetOwnerOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.InventoryResponseData;
        }
    }

    /**
     * Maps the GetRemoveStatus operation to a typed response wrapper.
     */
    export class GetRemoveStatusOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

        /**
         * Creates a new GetRemoveStatusOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.InventoryResponseData;
        }
    }

    /**
     * Maps the GetSegment operation to a typed response wrapper.
     */
    export class GetSegmentOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

        /**
         * Creates a new GetSegmentOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.InventoryResponseData;
        }
    }

    /**
     * Maps the GetStatisticsLeaderboardAroundItem operation to a typed response wrapper.
     */
    export class GetStatisticsLeaderboardAroundItemOperationResponse extends CustomOperationResponseAbstract<InventoryModels.GetStatisticsLeaderboardResponseData> {

        /**
         * Creates a new GetStatisticsLeaderboardAroundItemOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.GetStatisticsLeaderboardResponseData;
        }
    }

    /**
     * Maps the GetStatisticsLeaderboard operation to a typed response wrapper.
     */
    export class GetStatisticsLeaderboardOperationResponse extends CustomOperationResponseAbstract<InventoryModels.GetStatisticsLeaderboardResponseData> {

        /**
         * Creates a new GetStatisticsLeaderboardOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.GetStatisticsLeaderboardResponseData;
        }
    }

    /**
     * Maps the GetTag operation to a typed response wrapper.
     */
    export class GetTagOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

        /**
         * Creates a new GetTagOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.InventoryResponseData;
        }
    }

    /**
     * Maps the GetTsCreate operation to a typed response wrapper.
     */
    export class GetTsCreateOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

        /**
         * Creates a new GetTsCreateOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.InventoryResponseData;
        }
    }

    /**
     * Maps the RemoveSegment operation to a typed response wrapper.
     */
    export class RemoveSegmentOperationResponse extends CustomOperationResponseAbstract<InventoryModels.EmptyResponseData> {

        /**
         * Creates a new RemoveSegmentOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.EmptyResponseData;
        }
    }

    /**
     * Maps the RemoveTag operation to a typed response wrapper.
     */
    export class RemoveTagOperationResponse extends CustomOperationResponseAbstract<InventoryModels.EmptyResponseData> {

        /**
         * Creates a new RemoveTagOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.EmptyResponseData;
        }
    }

    /**
     * Maps the SetAmount operation to a typed response wrapper.
     */
    export class SetAmountOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

        /**
         * Creates a new SetAmountOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.InventoryResponseData;
        }
    }

    /**
     * Maps the SetAvatar operation to a typed response wrapper.
     */
    export class SetAvatarOperationResponse extends CustomOperationResponseAbstract<InventoryModels.EmptyResponseData> {

        /**
         * Creates a new SetAvatarOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.EmptyResponseData;
        }
    }

    /**
     * Maps the SetCustomData operation to a typed response wrapper.
     */
    export class SetCustomDataOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

        /**
         * Creates a new SetCustomDataOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.InventoryResponseData;
        }
    }

    /**
     * Maps the SetDisplayName operation to a typed response wrapper.
     */
    export class SetDisplayNameOperationResponse extends CustomOperationResponseAbstract<InventoryModels.EmptyResponseData> {

        /**
         * Creates a new SetDisplayNameOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.EmptyResponseData;
        }
    }

    /**
     * Maps the SetItemData operation to a typed response wrapper.
     */
    export class SetItemDataOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

        /**
         * Creates a new SetItemDataOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.InventoryResponseData;
        }
    }

    /**
     * Maps the ChangeItemStatistics operation to a typed response wrapper.
     */
    export class ChangeItemStatisticsOperationResponse extends CustomOperationResponseAbstract<InventoryModels.InventoryResponseData> {

        /**
         * Creates a new ChangeItemStatisticsOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.InventoryResponseData;
        }
    }

    /**
     * Maps the SetOwner operation to a typed response wrapper.
     */
    export class SetOwnerOperationResponse extends CustomOperationResponseAbstract<InventoryModels.EmptyResponseData> {

        /**
         * Creates a new SetOwnerOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.EmptyResponseData;
        }
    }

    /**
     * Maps the SetRemoveStatus operation to a typed response wrapper.
     */
    export class SetRemoveStatusOperationResponse extends CustomOperationResponseAbstract<InventoryModels.EmptyResponseData> {

        /**
         * Creates a new SetRemoveStatusOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.EmptyResponseData;
        }
    }

    /**
     * Maps the SetTag operation to a typed response wrapper.
     */
    export class SetTagOperationResponse extends CustomOperationResponseAbstract<InventoryModels.EmptyResponseData> {

        /**
         * Creates a new SetTagOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.EmptyResponseData;
        }
    }

    /**
     * Maps the GetCreateLeaderboard operation to a typed response wrapper.
     */
    export class GetCreateLeaderboardOperationResponse extends CustomOperationResponseAbstract<InventoryModels.GetCreateLeaderboardResponseData> {

        /**
         * Creates a new GetCreateLeaderboardOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.GetCreateLeaderboardResponseData;
        }
    }

    /**
     * Maps the GetStatisticsLog operation to a typed response wrapper.
     */
    export class GetStatisticsLogOperationResponse extends CustomOperationResponseAbstract<InventoryModels.GetStatisticsLogResponseData> {

        /**
         * Creates a new GetStatisticsLogOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = InventoryModels.GetStatisticsLogResponseData;
        }
    }

}
