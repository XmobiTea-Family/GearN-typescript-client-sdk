import { GNParameterCode } from "./../../constant/parameterCode/GNParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";
import { GenericModels } from "./GenericModels";

export namespace InventoryModels {

	export class CustomDataParam {
		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@DataMember({ code: GNParameterCode.Value })
		public value: any;

	}

	export class InfoRequestParam {
		@BooleanDataMember({ code: GNParameterCode.CatalogId, isOptional: true, defaultValue: false })
		public catalogId?: boolean;

		@BooleanDataMember({ code: GNParameterCode.ClassId, isOptional: true, defaultValue: false })
		public classId?: boolean;

		@BooleanDataMember({ code: GNParameterCode.ItemType, isOptional: true, defaultValue: false })
		public itemType?: boolean;

		@BooleanDataMember({ code: GNParameterCode.Amount, isOptional: true, defaultValue: false })
		public amount?: boolean;

		@BooleanDataMember({ code: GNParameterCode.Owner, isOptional: true, defaultValue: false })
		public owner?: boolean;

		@BooleanDataMember({ code: GNParameterCode.RemoveStatus, isOptional: true, defaultValue: false })
		public removeStatus?: boolean;

		@BooleanDataMember({ code: GNParameterCode.Segments, isOptional: true, defaultValue: false })
		public segments?: boolean;

		@BooleanDataMember({ code: GNParameterCode.CustomDatas, isOptional: true, defaultValue: false })
		public customDatas?: boolean;

		@BooleanDataMember({ code: GNParameterCode.DisplayName, isOptional: true, defaultValue: false })
		public displayName?: boolean;

		@BooleanDataMember({ code: GNParameterCode.Avatar, isOptional: true, defaultValue: false })
		public avatar?: boolean;

		@BooleanDataMember({ code: GNParameterCode.TsCreate, isOptional: true, defaultValue: false })
		public tsCreate?: boolean;

		@BooleanDataMember({ code: GNParameterCode.Tags, isOptional: true, defaultValue: false })
		public tags?: boolean;

		@BooleanDataMember({ code: GNParameterCode.ItemStatistics, isOptional: true, defaultValue: false })
		public itemStatistics?: boolean;

		@BooleanDataMember({ code: GNParameterCode.ItemDatas, isOptional: true, defaultValue: false })
		public itemDatas?: boolean;

		@GNArrayDataMember({ code: GNParameterCode.ItemDataKeys, isOptional: true, elementCls: String })
		public itemDataKeys?: Array<string>;

		@GNArrayDataMember({ code: GNParameterCode.ItemStatisticsKeys, isOptional: true, elementCls: String })
		public itemStatisticsKeys?: Array<string>;

		@GNArrayDataMember({ code: GNParameterCode.CustomDataKeys, isOptional: true, elementCls: String })
		public customDataKeys?: Array<string>;

		@GNArrayDataMember({ code: GNParameterCode.TagKeys, isOptional: true, elementCls: String })
		public tagKeys?: Array<string>;

	}

	export class ItemDataParam {
		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@DataMember({ code: GNParameterCode.Value })
		public value: any;

	}

	export class ItemStatisticsParam {
		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@NumberDataMember({ code: GNParameterCode.Value })
		public value: number;

	}

	export class AddSegmentRequestData {
		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@StringDataMember({ code: GNParameterCode.Value, minLength: 6, maxLength: 32, mustNonNull: true })
		public value: string;

	}

	export class ServerAddSegmentRequestData extends AddSegmentRequestData {
	}

	export class AdminAddSegmentRequestData extends ServerAddSegmentRequestData {
	}

	export class GetAmountRequestData {
		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

	}

	export class ServerGetAmountRequestData extends GetAmountRequestData {
	}

	export class AdminGetAmountRequestData extends ServerGetAmountRequestData {
	}

	export class GetAvatarRequestData {
		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

	}

	export class ServerGetAvatarRequestData extends GetAvatarRequestData {
	}

	export class AdminGetAvatarRequestData extends ServerGetAvatarRequestData {
	}

	export class GetCatalogIdRequestData {
		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

	}

	export class ServerGetCatalogIdRequestData extends GetCatalogIdRequestData {
	}

	export class AdminGetCatalogIdRequestData extends ServerGetCatalogIdRequestData {
	}

	export class GetClassIdRequestData {
		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

	}

	export class ServerGetClassIdRequestData extends GetClassIdRequestData {
	}

	export class AdminGetClassIdRequestData extends ServerGetClassIdRequestData {
	}

	export class GetCustomDataRequestData {
		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@GNArrayDataMember({ code: GNParameterCode.CustomDataKeys, isOptional: true, elementCls: String })
		public customDataKeys?: Array<string>;

	}

	export class ServerGetCustomDataRequestData extends GetCustomDataRequestData {
	}

	export class AdminGetCustomDataRequestData extends ServerGetCustomDataRequestData {
	}

	export class GetDisplayNameRequestData {
		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

	}

	export class ServerGetDisplayNameRequestData extends GetDisplayNameRequestData {
	}

	export class AdminGetDisplayNameRequestData extends ServerGetDisplayNameRequestData {
	}

	export class GetItemDataRequestData {
		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@GNArrayDataMember({ code: GNParameterCode.ItemDataKeys, isOptional: true })
		public inventoryDataKeys?: Array<string>;

	}

	export class ServerGetItemDataRequestData extends GetItemDataRequestData {
	}

	export class AdminGetItemDataRequestData extends ServerGetItemDataRequestData {
	}

	export class GetItemInformationRequestData {
		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

	}

	export class ServerGetItemInformationRequestData extends GetItemInformationRequestData {
	}

	export class AdminGetItemInformationRequestData extends ServerGetItemInformationRequestData {
	}

	export class GetItemStatisticsRequestData {
		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@GNArrayDataMember({ code: GNParameterCode.StatisticsKeys, isOptional: true, elementCls: String })
		public statisticsKeys?: Array<string>;

	}

	export class ServerGetItemStatisticsRequestData extends GetItemStatisticsRequestData {
	}

	export class AdminGetItemStatisticsRequestData extends ServerGetItemStatisticsRequestData {
	}

	export class GetItemsWithDisplayNameRequestData {
		@StringDataMember({ code: GNParameterCode.Keyword, minLength: 2, maxLength: 32 })
		public keyword: string;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: GNParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 5, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

	}

	export class ServerGetItemsWithDisplayNameRequestData extends GetItemsWithDisplayNameRequestData {
	}

	export class AdminGetItemsWithDisplayNameRequestData extends ServerGetItemsWithDisplayNameRequestData {
	}

	export class GetItemsWithSegmentRequestData {
		@StringDataMember({ code: GNParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
		public value: string;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: GNParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 5, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

	}

	export class ServerGetItemsWithSegmentRequestData extends GetItemsWithSegmentRequestData {
	}

	export class AdminGetItemsWithSegmentRequestData extends ServerGetItemsWithSegmentRequestData {
	}

	export class GetItemsWithTagRequestData {
		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@StringDataMember({ code: GNParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
		public value: string;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: GNParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 5, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

	}

	export class ServerGetItemsWithTagRequestData extends GetItemsWithTagRequestData {
	}

	export class AdminGetItemsWithTagRequestData extends ServerGetItemsWithTagRequestData {
	}

	export class GetItemTypeRequestData {
		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

	}

	export class ServerGetItemTypeRequestData extends GetItemTypeRequestData {
	}

	export class AdminGetItemTypeRequestData extends ServerGetItemTypeRequestData {
	}

	export class GetOwnerRequestData {
		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

	}

	export class ServerGetOwnerRequestData extends GetOwnerRequestData {
	}

	export class AdminGetOwnerRequestData extends ServerGetOwnerRequestData {
	}

	export class GetRemoveStatusRequestData {
		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

	}

	export class ServerGetRemoveStatusRequestData extends GetRemoveStatusRequestData {
	}

	export class AdminGetRemoveStatusRequestData extends ServerGetRemoveStatusRequestData {
	}

	export class GetSegmentRequestData {
		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

	}

	export class ServerGetSegmentRequestData extends GetSegmentRequestData {
	}

	export class AdminGetSegmentRequestData extends ServerGetSegmentRequestData {
	}

	export class GetStatisticsLeaderboardAroundItemRequestData {
		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: GNParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 5, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

	}

	export class ServerGetStatisticsLeaderboardAroundItemRequestData extends GetStatisticsLeaderboardAroundItemRequestData {
	}

	export class AdminGetStatisticsLeaderboardAroundItemRequestData extends ServerGetStatisticsLeaderboardAroundItemRequestData {
	}

	export class GetStatisticsLeaderboardRequestData {
		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: GNParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 5, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

		@BooleanDataMember({ code: GNParameterCode.LoadFromCache, defaultValue: true, isOptional: true })
		public loadFromCache?: boolean;

		@StringDataMember({ code: GNParameterCode.Version, minLength: 2, maxLength: 32, mustNonNull: true, isOptional: true })
		public version?: string;
	
	}

	export class ServerGetStatisticsLeaderboardRequestData extends GetStatisticsLeaderboardRequestData {
	}

	export class AdminGetStatisticsLeaderboardRequestData extends ServerGetStatisticsLeaderboardRequestData {
	}

	export class GetCreateLeaderboardRequestData {
		@GNHashtableDataMember({ code: GNParameterCode.InfoRequestParam, mustNonNull: true })
		public infoRequestParam: InfoRequestParam;

		@NumberDataMember({ code: GNParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 5, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

		@BooleanDataMember({ code: GNParameterCode.LoadFromCache, defaultValue: true, isOptional: true })
		public loadFromCache?: boolean;

	}

	export class ServerGetCreateLeaderboardRequestData extends GetCreateLeaderboardRequestData {
	}

	export class AdminGetCreateLeaderboardRequestData extends ServerGetCreateLeaderboardRequestData {
	}

	export class GetTagRequestData {
		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@GNArrayDataMember({ code: GNParameterCode.TagKeys, elementCls: String })
		public tagKeys: Array<string>;

	}

	export class ServerGetTagRequestData extends GetTagRequestData {
	}

	export class AdminGetTagRequestData extends ServerGetTagRequestData {
	}

	export class GetTsCreateRequestData {
		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

	}

	export class ServerGetTsCreateRequestData extends GetTsCreateRequestData {
	}

	export class AdminGetTsCreateRequestData extends ServerGetTsCreateRequestData {
	}

	export class RemoveSegmentRequestData {
		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@StringDataMember({ code: GNParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
		public value: string;

	}

	export class ServerRemoveSegmentRequestData extends RemoveSegmentRequestData {
	}

	export class AdminRemoveSegmentRequestData extends ServerRemoveSegmentRequestData {
	}

	export class RemoveTagRequestData {
		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

	}

	export class ServerRemoveTagRequestData extends RemoveTagRequestData {
	}

	export class AdminRemoveTagRequestData extends ServerRemoveTagRequestData {
	}

	export class SetAmountRequestData {
		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@NumberDataMember({ code: GNParameterCode.Amount, mustInt: true })
		public amount: number;

	}

	export class ServerSetAmountRequestData extends SetAmountRequestData {
	}

	export class AdminSetAmountRequestData extends ServerSetAmountRequestData {
	}

	export class SetAvatarRequestData {
		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@NumberDataMember({ code: GNParameterCode.Type, mustInt: true })
		public type: number;

		@StringDataMember({ code: GNParameterCode.Value, minLength: 1, maxLength: 128, mustNonNull: true })
		public value: string;

	}

	export class ServerSetAvatarRequestData extends SetAvatarRequestData {
	}

	export class AdminSetAvatarRequestData extends ServerSetAvatarRequestData {
	}

	export class SetCustomDataRequestData {
		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@GNArrayDataMember({ code: GNParameterCode.CustomDatas, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: CustomDataParam })
		public customData: Array<CustomDataParam>;

	}

	export class ServerSetCustomDataRequestData extends SetCustomDataRequestData {
	}

	export class AdminSetCustomDataRequestData extends ServerSetCustomDataRequestData {
	}

	export class SetDisplayNameRequestData {
		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@StringDataMember({ code: GNParameterCode.DisplayName, minLength: 5, maxLength: 32, mustNonNull: true })
		public displayName: string;

	}

	export class ServerSetDisplayNameRequestData extends SetDisplayNameRequestData {
	}

	export class AdminSetDisplayNameRequestData extends ServerSetDisplayNameRequestData {
	}

	export class SetItemDataRequestData {
		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@GNArrayDataMember({ code: GNParameterCode.ItemDatas, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: ItemDataParam })
		public inventoryDataParams: Array<ItemDataParam>;

	}

	export class ServerSetItemDataRequestData extends SetItemDataRequestData {
	}

	export class AdminSetItemDataRequestData extends ServerSetItemDataRequestData {
	}

	export class SetItemStatisticsRequestData {
		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@GNArrayDataMember({ code: GNParameterCode.ItemStatistics, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: ItemStatisticsParam })
		public inventoryStatisticsParams: Array<ItemStatisticsParam>;

		@StringDataMember({ code: GNParameterCode.Log, minLength: 1, maxLength: 256, mustNonNull: true, isOptional: true })
		public log?: string;
		
	}

	export class ServerSetItemStatisticsRequestData extends SetItemStatisticsRequestData {
	}

	export class AdminSetItemStatisticsRequestData extends ServerSetItemStatisticsRequestData {
	}

	export class SetOwnerRequestData {
		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 11, maxLength: 11, mustNonNull: true })
		public itemId: string;

		@StringDataMember({ code: GNParameterCode.OwnerId, minLength: 10, maxLength: 12, mustNonNull: true })
		public newOwnerId: string;

		@NumberDataMember({ code: GNParameterCode.OwnerType, mustInt: true })
		public newOwnerType: number;

	}

	export class ServerSetOwnerRequestData extends SetOwnerRequestData {
	}

	export class AdminSetOwnerRequestData extends ServerSetOwnerRequestData {
	}

	export class SetRemoveStatusRequestData {
		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@StringDataMember({ code: GNParameterCode.Reason, isOptional: true, defaultValue: "" })
		public reason?: string;

	}

	export class ServerSetRemoveStatusRequestData extends SetRemoveStatusRequestData {
	}

	export class AdminSetRemoveStatusRequestData extends ServerSetRemoveStatusRequestData {
	}

	export class SetTagRequestData {
		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true })
		public itemId: string;

		@StringDataMember({ code: GNParameterCode.Key, minLength: 2, maxLength: 32, mustNonNull: true })
		public key: string;

		@StringDataMember({ code: GNParameterCode.Value, minLength: 2, maxLength: 32, mustNonNull: true })
		public value: string;

	}

	export class ServerSetTagRequestData extends SetTagRequestData {
	}

	export class AdminSetTagRequestData extends ServerSetTagRequestData {
	}

	export class GetStatisticsLogRequestData {
		@GNArrayDataMember({ code: GNParameterCode.Keys, minLength: 1, maxLength: 32, mustNonNull: true, elementCls: String, isOptional: true })
		public keys?: Array<string>;

		@StringDataMember({ code: GNParameterCode.ItemId, minLength: 12, maxLength: 12, mustNonNull: true, isOptional: true })
		public itemId?: string;

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 5, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

		@StringDataMember({ code: GNParameterCode.Token, minLength: 24, maxLength: 24, mustNonNull: true, isOptional: true })
		public token?: string;
		
	}

	export class ServerGetStatisticsLogRequestData extends GetStatisticsLogRequestData {
	}

	export class AdminGetStatisticsLogRequestData extends ServerGetStatisticsLogRequestData {
	}

	export class InfoResponseParameters {
		@StringDataMember({ code: GNParameterCode.CatalogId, isOptional: true })
		public catalogId?: string;

		@StringDataMember({ code: GNParameterCode.ClassId, isOptional: true })
		public classId?: string;

		@NumberDataMember({ code: GNParameterCode.ItemType, isOptional: true })
		public itemType?: number;

		@NumberDataMember({ code: GNParameterCode.Amount, isOptional: true })
		public amount?: number;

		@GNHashtableDataMember({ code: GNParameterCode.Owner, isOptional: true })
		public owner?: GenericModels.OwnerItem;

		@GNHashtableDataMember({ code: GNParameterCode.RemoveStatus, isOptional: true })
		public removeStatus?: GenericModels.RemoveStatusItem;

		@GNArrayDataMember({ code: GNParameterCode.Segments, isOptional: true, elementCls: String })
		public segments?: Array<string>;

		@GNArrayDataMember({ code: GNParameterCode.CustomDatas, isOptional: true, elementCls: GenericModels.DataItem })
		public customDatas?: Array<GenericModels.DataItem>;

		@StringDataMember({ code: GNParameterCode.DisplayName, isOptional: true })
		public displayName?: string;

		@GNHashtableDataMember({ code: GNParameterCode.Avatar, isOptional: true })
		public avatar?: GenericModels.AvatarItem;

		@NumberDataMember({ code: GNParameterCode.TsCreate, isOptional: true })
		public tsCreate?: number;

		@GNArrayDataMember({ code: GNParameterCode.Tags, isOptional: true, elementCls: GenericModels.TagItem })
		public tags?: Array<GenericModels.TagItem>;

		@GNArrayDataMember({ code: GNParameterCode.ItemDatas, isOptional: true, elementCls: GenericModels.DataItem })
		public itemDatas?: Array<GenericModels.DataItem>;

		@GNArrayDataMember({ code: GNParameterCode.ItemStatistics, isOptional: true, elementCls: GenericModels.StatisticsItem })
		public itemStatistics?: Array<GenericModels.StatisticsItem>;

	}

	export class InventoryResponseData {
		@GNHashtableDataMember({ code: GNParameterCode.InfoResponseParameters })
		public infoResponseParameters: InfoResponseParameters;

	}

	export class InventoryWithItemIdResponseData extends InventoryResponseData {
		@StringDataMember({ code: GNParameterCode.ItemId })
		public itemId: string;

	}

	export class InventoryLeaderboardResponseData extends InventoryWithItemIdResponseData {
		@NumberDataMember({ code: GNParameterCode.Position })
		public position: number;

		@NumberDataMember({ code: GNParameterCode.BackupValue, isOptional: true })
		public backupValue?: number;

	}

	export class InventoryLogResponseData {
		@StringDataMember({ code: GNParameterCode.ItemId })
		public itemId: string;

		@NumberDataMember({ code: GNParameterCode.TsCreate })
		public tsCreate: number;

		@StringDataMember({ code: GNParameterCode.Log })
		public log: string;

		@StringDataMember({ code: GNParameterCode.Key })
		public key: string;

		@NumberDataMember({ code: GNParameterCode.Amount })
		public amount: number;

		@NumberDataMember({ code: GNParameterCode.StartValue })
		public startValue: number;

		@NumberDataMember({ code: GNParameterCode.FinalValue })
		public finalValue: number;

	}

	export class GetStatisticsLeaderboardResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: InventoryLeaderboardResponseData })
		public results: Array<InventoryLeaderboardResponseData>;

		@NumberDataMember({ code: GNParameterCode.TsCreate, isOptional: true })
		public tsCreate: number;

	}

	export class InventoriesWithItemIdResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: InventoryWithItemIdResponseData })
		public results: Array<InventoryWithItemIdResponseData>;

	}

	export class GetCreateLeaderboardResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: InventoryLeaderboardResponseData })
		public results: Array<InventoryLeaderboardResponseData>;

	}

	export class GetStatisticsLogResponseData {
		@GNArrayDataMember({ code: GNParameterCode.Results, elementCls: InventoryLogResponseData })
		public results: Array<InventoryLogResponseData>;

		@StringDataMember({ code: GNParameterCode.Token, isOptional: true })
		public token?: string;
		
	}

	export class EmptyResponseData {
	}

}
