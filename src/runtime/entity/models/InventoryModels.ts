import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";
import { GenericModels } from "./GenericModels";

export namespace InventoryModels {

	export class CustomDataParam {
		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@DataMember({ code: ParameterCode.Value })
		public value: any;

	}

	export class InfoRequestParam {
		@BooleanDataMember({ code: ParameterCode.CatalogId, isOptional: true, defaultValue: false })
		public catalogId?: boolean;

		@BooleanDataMember({ code: ParameterCode.ClassId, isOptional: true, defaultValue: false })
		public classId?: boolean;

		@BooleanDataMember({ code: ParameterCode.ItemType, isOptional: true, defaultValue: false })
		public itemType?: boolean;

		@BooleanDataMember({ code: ParameterCode.Amount, isOptional: true, defaultValue: false })
		public amount?: boolean;

		@BooleanDataMember({ code: ParameterCode.Owner, isOptional: true, defaultValue: false })
		public owner?: boolean;

		@BooleanDataMember({ code: ParameterCode.RemoveStatus, isOptional: true, defaultValue: false })
		public removeStatus?: boolean;

		@BooleanDataMember({ code: ParameterCode.Segments, isOptional: true, defaultValue: false })
		public segments?: boolean;

		@BooleanDataMember({ code: ParameterCode.CustomDatas, isOptional: true, defaultValue: false })
		public customDatas?: boolean;

		@BooleanDataMember({ code: ParameterCode.DisplayName, isOptional: true, defaultValue: false })
		public displayName?: boolean;

		@BooleanDataMember({ code: ParameterCode.Avatar, isOptional: true, defaultValue: false })
		public avatar?: boolean;

		@BooleanDataMember({ code: ParameterCode.TsCreate, isOptional: true, defaultValue: false })
		public tsCreate?: boolean;

		@BooleanDataMember({ code: ParameterCode.Tags, isOptional: true, defaultValue: false })
		public tags?: boolean;

		@BooleanDataMember({ code: ParameterCode.ItemStatistics, isOptional: true, defaultValue: false })
		public itemStatistics?: boolean;

		@BooleanDataMember({ code: ParameterCode.ItemDatas, isOptional: true, defaultValue: false })
		public itemDatas?: boolean;

		@GNArrayDataMember({ code: ParameterCode.ItemDataKeys, isOptional: true, elementCls: String })
		public itemDataKeys?: Array<string>;

		@GNArrayDataMember({ code: ParameterCode.ItemStatisticsKeys, isOptional: true, elementCls: String })
		public itemStatisticsKeys?: Array<string>;

		@GNArrayDataMember({ code: ParameterCode.CustomDataKeys, isOptional: true, elementCls: String })
		public customDataKeys?: Array<string>;

		@GNArrayDataMember({ code: ParameterCode.TagKeys, isOptional: true, elementCls: String })
		public tagKeys?: Array<string>;

	}

	export class ItemDataParam {
		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@DataMember({ code: ParameterCode.Value })
		public value: any;

	}

	export class ItemStatisticsParam {
		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@NumberDataMember({ code: ParameterCode.Value })
		public value: number;

	}

	export class AddSegmentRequestData {
		@StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@StringDataMember({ code: ParameterCode.Value, minLength: 6, maxLength: 32, mustNonNull: true })
		public value: string;

	}

	export class ServerAddSegmentRequestData extends AddSegmentRequestData {
	}

	export class AdminAddSegmentRequestData extends ServerAddSegmentRequestData {
	}

	export class GetAmountRequestData {
		@StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

	}

	export class ServerGetAmountRequestData extends GetAmountRequestData {
	}

	export class AdminGetAmountRequestData extends ServerGetAmountRequestData {
	}

	export class GetAvatarRequestData {
		@StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

	}

	export class ServerGetAvatarRequestData extends GetAvatarRequestData {
	}

	export class AdminGetAvatarRequestData extends ServerGetAvatarRequestData {
	}

	export class GetCatalogIdRequestData {
		@StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

	}

	export class ServerGetCatalogIdRequestData extends GetCatalogIdRequestData {
	}

	export class AdminGetCatalogIdRequestData extends ServerGetCatalogIdRequestData {
	}

	export class GetClassIdRequestData {
		@StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

	}

	export class ServerGetClassIdRequestData extends GetClassIdRequestData {
	}

	export class AdminGetClassIdRequestData extends ServerGetClassIdRequestData {
	}

	export class GetCustomDataRequestData {
		@StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@GNArrayDataMember({ code: ParameterCode.CustomDataKeys, isOptional: true, elementCls: String })
		public customDataKeys?: Array<string>;

	}

	export class ServerGetCustomDataRequestData extends GetCustomDataRequestData {
	}

	export class AdminGetCustomDataRequestData extends ServerGetCustomDataRequestData {
	}

	export class GetDisplayNameRequestData {
		@StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

	}

	export class ServerGetDisplayNameRequestData extends GetDisplayNameRequestData {
	}

	export class AdminGetDisplayNameRequestData extends ServerGetDisplayNameRequestData {
	}

	export class GetItemDataRequestData {
		@StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@GNArrayDataMember({ code: ParameterCode.ItemDataKeys, isOptional: true, elementCls: String })
		public inventoryDataKeys?: Array<string>;

	}

	export class ServerGetItemDataRequestData extends GetItemDataRequestData {
	}

	export class AdminGetItemDataRequestData extends ServerGetItemDataRequestData {
	}

	export class GetItemInformationRequestData {
		@StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class ServerGetItemInformationRequestData extends GetItemInformationRequestData {
	}

	export class AdminGetItemInformationRequestData extends ServerGetItemInformationRequestData {
	}

	export class GetItemStatisticsRequestData {
		@StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@GNArrayDataMember({ code: ParameterCode.StatisticsKeys, isOptional: true, elementCls: String })
		public statisticsKeys?: Array<string>;

	}

	export class ServerGetItemStatisticsRequestData extends GetItemStatisticsRequestData {
	}

	export class AdminGetItemStatisticsRequestData extends ServerGetItemStatisticsRequestData {
	}

	export class GetItemsWithDisplayNameRequestData {
		@StringDataMember({ code: ParameterCode.Keyword, minLength: 2, maxLength: 32 })
		public keyword: string;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: ParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

	}

	export class ServerGetItemsWithDisplayNameRequestData extends GetItemsWithDisplayNameRequestData {
	}

	export class AdminGetItemsWithDisplayNameRequestData extends ServerGetItemsWithDisplayNameRequestData {
	}

	export class GetItemsWithSegmentRequestData {
		@StringDataMember({ code: ParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
		public value: string;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: ParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

	}

	export class ServerGetItemsWithSegmentRequestData extends GetItemsWithSegmentRequestData {
	}

	export class AdminGetItemsWithSegmentRequestData extends ServerGetItemsWithSegmentRequestData {
	}

	export class GetItemsWithTagRequestData {
		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@StringDataMember({ code: ParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
		public value: string;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: ParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

	}

	export class ServerGetItemsWithTagRequestData extends GetItemsWithTagRequestData {
	}

	export class AdminGetItemsWithTagRequestData extends ServerGetItemsWithTagRequestData {
	}

	export class GetItemTypeRequestData {
		@StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

	}

	export class ServerGetItemTypeRequestData extends GetItemTypeRequestData {
	}

	export class AdminGetItemTypeRequestData extends ServerGetItemTypeRequestData {
	}

	export class GetOwnerRequestData {
		@StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

	}

	export class ServerGetOwnerRequestData extends GetOwnerRequestData {
	}

	export class AdminGetOwnerRequestData extends ServerGetOwnerRequestData {
	}

	export class GetRemoveStatusRequestData {
		@StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

	}

	export class ServerGetRemoveStatusRequestData extends GetRemoveStatusRequestData {
	}

	export class AdminGetRemoveStatusRequestData extends ServerGetRemoveStatusRequestData {
	}

	export class GetSegmentRequestData {
		@StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

	}

	export class ServerGetSegmentRequestData extends GetSegmentRequestData {
	}

	export class AdminGetSegmentRequestData extends ServerGetSegmentRequestData {
	}

	export class GetStatisticsLeaderboardAroundItemRequestData {
		@StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: ParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

		@BooleanDataMember({ code: ParameterCode.LoadFromCache, defaultValue: true, isOptional: true })
		public loadFromCache?: boolean;

		@StringDataMember({ code: ParameterCode.CatalogId, minLength: 2, maxLength: 32, mustNonNull: true, isOptional: true })
		public catalogId?: string;

	}

	export class ServerGetStatisticsLeaderboardAroundItemRequestData extends GetStatisticsLeaderboardAroundItemRequestData {
	}

	export class AdminGetStatisticsLeaderboardAroundItemRequestData extends ServerGetStatisticsLeaderboardAroundItemRequestData {
	}

	export class GetStatisticsLeaderboardRequestData {
		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: ParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

		@BooleanDataMember({ code: ParameterCode.LoadFromCache, defaultValue: true, isOptional: true })
		public loadFromCache?: boolean;

		@StringDataMember({ code: ParameterCode.Version, minLength: 2, maxLength: 32, mustNonNull: true, isOptional: true })
		public version?: string;

		@StringDataMember({ code: ParameterCode.CatalogId, minLength: 2, maxLength: 32, mustNonNull: true, isOptional: true })
		public catalogId?: string;

	}

	export class ServerGetStatisticsLeaderboardRequestData extends GetStatisticsLeaderboardRequestData {
	}

	export class AdminGetStatisticsLeaderboardRequestData extends ServerGetStatisticsLeaderboardRequestData {
	}

	export class GetCreateLeaderboardRequestData {
		@GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: ParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

		@BooleanDataMember({ code: ParameterCode.LoadFromCache, defaultValue: true, isOptional: true })
		public loadFromCache?: boolean;

	}

	export class ServerGetCreateLeaderboardRequestData extends GetCreateLeaderboardRequestData {
	}

	export class AdminGetCreateLeaderboardRequestData extends ServerGetCreateLeaderboardRequestData {
	}

	export class GetTagRequestData {
		@StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@GNArrayDataMember({ code: ParameterCode.TagKeys, elementCls: String })
		public tagKeys: Array<string>;

	}

	export class ServerGetTagRequestData extends GetTagRequestData {
	}

	export class AdminGetTagRequestData extends ServerGetTagRequestData {
	}

	export class GetTsCreateRequestData {
		@StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

	}

	export class ServerGetTsCreateRequestData extends GetTsCreateRequestData {
	}

	export class AdminGetTsCreateRequestData extends ServerGetTsCreateRequestData {
	}

	export class RemoveSegmentRequestData {
		@StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@StringDataMember({ code: ParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
		public value: string;

	}

	export class ServerRemoveSegmentRequestData extends RemoveSegmentRequestData {
	}

	export class AdminRemoveSegmentRequestData extends ServerRemoveSegmentRequestData {
	}

	export class RemoveTagRequestData {
		@StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

	}

	export class ServerRemoveTagRequestData extends RemoveTagRequestData {
	}

	export class AdminRemoveTagRequestData extends ServerRemoveTagRequestData {
	}

	export class SetAmountRequestData {
		@StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@NumberDataMember({ code: ParameterCode.Amount, mustInt: true })
		public amount: number;

	}

	export class ServerSetAmountRequestData extends SetAmountRequestData {
	}

	export class AdminSetAmountRequestData extends ServerSetAmountRequestData {
	}

	export class SetAvatarRequestData {
		@StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@NumberDataMember({ code: ParameterCode.Type, mustInt: true })
		public type: number;

		@StringDataMember({ code: ParameterCode.Value, minLength: 1, maxLength: 128, mustNonNull: true })
		public value: string;

	}

	export class ServerSetAvatarRequestData extends SetAvatarRequestData {
	}

	export class AdminSetAvatarRequestData extends ServerSetAvatarRequestData {
	}

	export class SetCustomDataRequestData {
		@StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@GNArrayDataMember({ code: ParameterCode.CustomDatas, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: CustomDataParam })
		public customData: Array<CustomDataParam>;

	}

	export class ServerSetCustomDataRequestData extends SetCustomDataRequestData {
	}

	export class AdminSetCustomDataRequestData extends ServerSetCustomDataRequestData {
	}

	export class SetDisplayNameRequestData {
		@StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@StringDataMember({ code: ParameterCode.DisplayName, minLength: 5, maxLength: 32, mustNonNull: true })
		public displayName: string;

	}

	export class ServerSetDisplayNameRequestData extends SetDisplayNameRequestData {
	}

	export class AdminSetDisplayNameRequestData extends ServerSetDisplayNameRequestData {
	}

	export class SetItemDataRequestData {
		@StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@GNArrayDataMember({ code: ParameterCode.ItemDatas, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: ItemDataParam })
		public inventoryDataParams: Array<ItemDataParam>;

	}

	export class ServerSetItemDataRequestData extends SetItemDataRequestData {
	}

	export class AdminSetItemDataRequestData extends ServerSetItemDataRequestData {
	}

	export class SetItemStatisticsRequestData {
		@StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@GNArrayDataMember({ code: ParameterCode.ItemStatistics, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: ItemStatisticsParam })
		public inventoryStatisticsParams: Array<ItemStatisticsParam>;

		@StringDataMember({ code: ParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
		public log?: string;

	}

	export class ServerSetItemStatisticsRequestData extends SetItemStatisticsRequestData {
	}

	export class AdminSetItemStatisticsRequestData extends ServerSetItemStatisticsRequestData {
	}

	export class SetOwnerRequestData {
		@StringDataMember({ code: ParameterCode.ItemId, minLength: 11, maxLength: 11, mustNonNull: true })
		public itemId: string;

		@StringDataMember({ code: ParameterCode.OwnerId, minLength: 10, maxLength: 12, mustNonNull: true })
		public newOwnerId: string;

		@NumberDataMember({ code: ParameterCode.OwnerType, mustInt: true })
		public newOwnerType: number;

	}

	export class ServerSetOwnerRequestData extends SetOwnerRequestData {
	}

	export class AdminSetOwnerRequestData extends ServerSetOwnerRequestData {
	}

	export class SetRemoveStatusRequestData {
		@StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@StringDataMember({ code: ParameterCode.Reason, isOptional: true, defaultValue: "" })
		public reason?: string;

	}

	export class ServerSetRemoveStatusRequestData extends SetRemoveStatusRequestData {
	}

	export class AdminSetRemoveStatusRequestData extends ServerSetRemoveStatusRequestData {
	}

	export class SetTagRequestData {
		@StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@StringDataMember({ code: ParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@StringDataMember({ code: ParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
		public value: string;

	}

	export class ServerSetTagRequestData extends SetTagRequestData {
	}

	export class AdminSetTagRequestData extends ServerSetTagRequestData {
	}

	export class GetStatisticsLogRequestData {
		@GNArrayDataMember({ code: ParameterCode.Keys, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: String, isOptional: true })
		public keys?: Array<string>;

		@StringDataMember({ code: ParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true, isOptional: true })
		public itemId?: string;

		@NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

		@StringDataMember({ code: ParameterCode.Token, minLength: 24, maxLength: 24, mustNonNull: true, isOptional: true })
		public token?: string;

	}

	export class ServerGetStatisticsLogRequestData extends GetStatisticsLogRequestData {
	}

	export class AdminGetStatisticsLogRequestData extends ServerGetStatisticsLogRequestData {
	}

	export class InfoResponseParameters {
		@StringDataMember({ code: ParameterCode.CatalogId, isOptional: true })
		public catalogId?: string;

		@StringDataMember({ code: ParameterCode.ClassId, isOptional: true })
		public classId?: string;

		@NumberDataMember({ code: ParameterCode.ItemType, isOptional: true })
		public itemType?: number;

		@NumberDataMember({ code: ParameterCode.Amount, isOptional: true })
		public amount?: number;

		@GNHashtableDataMember({ code: ParameterCode.Owner, isOptional: true })
		public owner?: GenericModels.OwnerItem;

		@GNHashtableDataMember({ code: ParameterCode.RemoveStatus, isOptional: true })
		public removeStatus?: GenericModels.RemoveStatusItem;

		@GNArrayDataMember({ code: ParameterCode.Segments, isOptional: true, elementCls: String })
		public segments?: Array<string>;

		@GNArrayDataMember({ code: ParameterCode.CustomDatas, isOptional: true, elementCls: GenericModels.DataItem })
		public customDatas?: Array<GenericModels.DataItem>;

		@StringDataMember({ code: ParameterCode.DisplayName, isOptional: true })
		public displayName?: string;

		@GNHashtableDataMember({ code: ParameterCode.Avatar, isOptional: true })
		public avatar?: GenericModels.AvatarItem;

		@NumberDataMember({ code: ParameterCode.TsCreate, isOptional: true })
		public tsCreate?: number;

		@GNArrayDataMember({ code: ParameterCode.Tags, isOptional: true, elementCls: GenericModels.TagItem })
		public tags?: Array<GenericModels.TagItem>;

		@GNArrayDataMember({ code: ParameterCode.ItemDatas, isOptional: true, elementCls: GenericModels.DataItem })
		public itemDatas?: Array<GenericModels.DataItem>;

		@GNArrayDataMember({ code: ParameterCode.ItemStatistics, isOptional: true, elementCls: GenericModels.StatisticsItem })
		public itemStatistics?: Array<GenericModels.StatisticsItem>;

	}

	export class InventoryResponseData {
		@GNHashtableDataMember({ code: ParameterCode.InfoResponseParameters })
		public infoResponseParameters: InfoResponseParameters;

	}

	export class InventoryWithItemIdResponseData extends InventoryResponseData {
		@StringDataMember({ code: ParameterCode.ItemId })
		public itemId: string;

	}

	export class InventoryLeaderboardResponseData extends InventoryWithItemIdResponseData {
		@NumberDataMember({ code: ParameterCode.Position })
		public position: number;

		@NumberDataMember({ code: ParameterCode.BackupValue, isOptional: true })
		public backupValue?: number;

	}

	export class InventoryLogResponseData {
		@StringDataMember({ code: ParameterCode.ItemId })
		public itemId: string;

		@NumberDataMember({ code: ParameterCode.TsCreate })
		public tsCreate: number;

		@StringDataMember({ code: ParameterCode.Log })
		public log: string;

		@StringDataMember({ code: ParameterCode.Key })
		public key: string;

		@NumberDataMember({ code: ParameterCode.Amount })
		public amount: number;

		@NumberDataMember({ code: ParameterCode.StartValue })
		public startValue: number;

		@NumberDataMember({ code: ParameterCode.FinalValue })
		public finalValue: number;

	}

	export class GetStatisticsLeaderboardResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: InventoryLeaderboardResponseData })
		public results: Array<InventoryLeaderboardResponseData>;

		@NumberDataMember({ code: ParameterCode.TsCreate, isOptional: true })
		public tsCreate: number;

	}

	export class InventoriesWithItemIdResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: InventoryWithItemIdResponseData })
		public results: Array<InventoryWithItemIdResponseData>;

	}

	export class GetCreateLeaderboardResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: InventoryLeaderboardResponseData })
		public results: Array<InventoryLeaderboardResponseData>;

	}

	export class GetStatisticsLogResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: InventoryLogResponseData })
		public results: Array<InventoryLogResponseData>;

		@StringDataMember({ code: ParameterCode.Token, isOptional: true })
		public token?: string;

	}

	export class EmptyResponseData {
	}

}
