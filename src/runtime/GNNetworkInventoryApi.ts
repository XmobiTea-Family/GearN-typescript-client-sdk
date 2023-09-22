import { GNNetwork } from "./GNNetwork";
import { Action1 } from "./common/Action1";
import { GNHashtable } from "./common/GNData";
import { OperationRequest } from "./entity/OperationRequest";
import { InventoryModels } from "./entity/models/InventoryModels";
import { InventoryRequestModels } from "./entity/models/InventoryRequestModels";
import { InventoryResponseModels } from "./entity/models/InventoryResponseModels";

export class InventoryApi {
	public server: ServerInventoryApi = new ServerInventoryApi();

	public admin: AdminInventoryApi = new AdminInventoryApi();

	public addSegment(requestData: InventoryModels.AddSegmentRequestData, onResponse: Action1<InventoryResponseModels.AddSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.AddSegmentOperationResponse);
	}

	public getAmount(requestData: InventoryModels.GetAmountRequestData, onResponse: Action1<InventoryResponseModels.GetAmountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.GetAmountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetAmountOperationResponse);
	}

	public getAvatar(requestData: InventoryModels.GetAvatarRequestData, onResponse: Action1<InventoryResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.GetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetAvatarOperationResponse);
	}

	public getCatalogId(requestData: InventoryModels.GetCatalogIdRequestData, onResponse: Action1<InventoryResponseModels.GetCatalogIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.GetCatalogIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetCatalogIdOperationResponse);
	}

	public getClassId(requestData: InventoryModels.GetClassIdRequestData, onResponse: Action1<InventoryResponseModels.GetClassIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.GetClassIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetClassIdOperationResponse);
	}

	public getCustomData(requestData: InventoryModels.GetCustomDataRequestData, onResponse: Action1<InventoryResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.GetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetCustomDataOperationResponse);
	}

	public getDisplayName(requestData: InventoryModels.GetDisplayNameRequestData, onResponse: Action1<InventoryResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.GetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetDisplayNameOperationResponse);
	}

	public getItemData(requestData: InventoryModels.GetItemDataRequestData, onResponse: Action1<InventoryResponseModels.GetItemDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.GetItemDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemDataOperationResponse);
	}

	public getItemInformation(requestData: InventoryModels.GetItemInformationRequestData, onResponse: Action1<InventoryResponseModels.GetItemInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.GetItemInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemInformationOperationResponse);
	}

	public getItemStatistics(requestData: InventoryModels.GetItemStatisticsRequestData, onResponse: Action1<InventoryResponseModels.GetItemStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.GetItemStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemStatisticsOperationResponse);
	}

	public getItemsWithDisplayName(requestData: InventoryModels.GetItemsWithDisplayNameRequestData, onResponse: Action1<InventoryResponseModels.GetItemsWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.GetItemsWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemsWithDisplayNameOperationResponse);
	}

	public getItemsWithSegment(requestData: InventoryModels.GetItemsWithSegmentRequestData, onResponse: Action1<InventoryResponseModels.GetItemsWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.GetItemsWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemsWithSegmentOperationResponse);
	}

	public getItemsWithTag(requestData: InventoryModels.GetItemsWithTagRequestData, onResponse: Action1<InventoryResponseModels.GetItemsWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.GetItemsWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemsWithTagOperationResponse);
	}

	public getItemType(requestData: InventoryModels.GetItemTypeRequestData, onResponse: Action1<InventoryResponseModels.GetItemTypeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.GetItemTypeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemTypeOperationResponse);
	}

	public getOwner(requestData: InventoryModels.GetOwnerRequestData, onResponse: Action1<InventoryResponseModels.GetOwnerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.GetOwnerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetOwnerOperationResponse);
	}

	public getRemoveStatus(requestData: InventoryModels.GetRemoveStatusRequestData, onResponse: Action1<InventoryResponseModels.GetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.GetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetRemoveStatusOperationResponse);
	}

	public getSegment(requestData: InventoryModels.GetSegmentRequestData, onResponse: Action1<InventoryResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.GetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetSegmentOperationResponse);
	}

	public getStatisticsLeaderboardAroundItem(requestData: InventoryModels.GetStatisticsLeaderboardAroundItemRequestData, onResponse: Action1<InventoryResponseModels.GetStatisticsLeaderboardAroundItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.GetStatisticsLeaderboardAroundItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetStatisticsLeaderboardAroundItemOperationResponse);
	}

	public getStatisticsLeaderboard(requestData: InventoryModels.GetStatisticsLeaderboardRequestData, onResponse: Action1<InventoryResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.GetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public getTag(requestData: InventoryModels.GetTagRequestData, onResponse: Action1<InventoryResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.GetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetTagOperationResponse);
	}

	public getTsCreate(requestData: InventoryModels.GetTsCreateRequestData, onResponse: Action1<InventoryResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.GetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetTsCreateOperationResponse);
	}

	public removeSegment(requestData: InventoryModels.RemoveSegmentRequestData, onResponse: Action1<InventoryResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.RemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.RemoveSegmentOperationResponse);
	}

	public removeTag(requestData: InventoryModels.RemoveTagRequestData, onResponse: Action1<InventoryResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.RemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.RemoveTagOperationResponse);
	}

	public setAmount(requestData: InventoryModels.SetAmountRequestData, onResponse: Action1<InventoryResponseModels.SetAmountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.SetAmountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetAmountOperationResponse);
	}

	public setAvatar(requestData: InventoryModels.SetAvatarRequestData, onResponse: Action1<InventoryResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.SetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetAvatarOperationResponse);
	}

	public setCustomData(requestData: InventoryModels.SetCustomDataRequestData, onResponse: Action1<InventoryResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.SetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetCustomDataOperationResponse);
	}

	public setDisplayName(requestData: InventoryModels.SetDisplayNameRequestData, onResponse: Action1<InventoryResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.SetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetDisplayNameOperationResponse);
	}

	public setItemData(requestData: InventoryModels.SetItemDataRequestData, onResponse: Action1<InventoryResponseModels.SetItemDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.SetItemDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetItemDataOperationResponse);
	}

	public setItemStatistics(requestData: InventoryModels.SetItemStatisticsRequestData, onResponse: Action1<InventoryResponseModels.SetItemStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.SetItemStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetItemStatisticsOperationResponse);
	}

	public setOwner(requestData: InventoryModels.SetOwnerRequestData, onResponse: Action1<InventoryResponseModels.SetOwnerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.SetOwnerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetOwnerOperationResponse);
	}

	public setRemoveStatus(requestData: InventoryModels.SetRemoveStatusRequestData, onResponse: Action1<InventoryResponseModels.SetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.SetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetRemoveStatusOperationResponse);
	}

	public setTag(requestData: InventoryModels.SetTagRequestData, onResponse: Action1<InventoryResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.SetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetTagOperationResponse);
	}

}

export class ServerInventoryApi {
	public addSegment(requestData: InventoryModels.ServerAddSegmentRequestData, onResponse: Action1<InventoryResponseModels.AddSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerAddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.AddSegmentOperationResponse);
	}

	public getAmount(requestData: InventoryModels.ServerGetAmountRequestData, onResponse: Action1<InventoryResponseModels.GetAmountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerGetAmountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetAmountOperationResponse);
	}

	public getAvatar(requestData: InventoryModels.ServerGetAvatarRequestData, onResponse: Action1<InventoryResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerGetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetAvatarOperationResponse);
	}

	public getCatalogId(requestData: InventoryModels.ServerGetCatalogIdRequestData, onResponse: Action1<InventoryResponseModels.GetCatalogIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerGetCatalogIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetCatalogIdOperationResponse);
	}

	public getClassId(requestData: InventoryModels.ServerGetClassIdRequestData, onResponse: Action1<InventoryResponseModels.GetClassIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerGetClassIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetClassIdOperationResponse);
	}

	public getCustomData(requestData: InventoryModels.ServerGetCustomDataRequestData, onResponse: Action1<InventoryResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerGetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetCustomDataOperationResponse);
	}

	public getDisplayName(requestData: InventoryModels.ServerGetDisplayNameRequestData, onResponse: Action1<InventoryResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerGetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetDisplayNameOperationResponse);
	}

	public getItemData(requestData: InventoryModels.ServerGetItemDataRequestData, onResponse: Action1<InventoryResponseModels.GetItemDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerGetItemDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemDataOperationResponse);
	}

	public getItemInformation(requestData: InventoryModels.ServerGetItemInformationRequestData, onResponse: Action1<InventoryResponseModels.GetItemInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerGetItemInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemInformationOperationResponse);
	}

	public getItemStatistics(requestData: InventoryModels.ServerGetItemStatisticsRequestData, onResponse: Action1<InventoryResponseModels.GetItemStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerGetItemStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemStatisticsOperationResponse);
	}

	public getItemsWithDisplayName(requestData: InventoryModels.ServerGetItemsWithDisplayNameRequestData, onResponse: Action1<InventoryResponseModels.GetItemsWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerGetItemsWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemsWithDisplayNameOperationResponse);
	}

	public getItemsWithSegment(requestData: InventoryModels.ServerGetItemsWithSegmentRequestData, onResponse: Action1<InventoryResponseModels.GetItemsWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerGetItemsWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemsWithSegmentOperationResponse);
	}

	public getItemsWithTag(requestData: InventoryModels.ServerGetItemsWithTagRequestData, onResponse: Action1<InventoryResponseModels.GetItemsWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerGetItemsWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemsWithTagOperationResponse);
	}

	public getItemType(requestData: InventoryModels.ServerGetItemTypeRequestData, onResponse: Action1<InventoryResponseModels.GetItemTypeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerGetItemTypeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemTypeOperationResponse);
	}

	public getOwner(requestData: InventoryModels.ServerGetOwnerRequestData, onResponse: Action1<InventoryResponseModels.GetOwnerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerGetOwnerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetOwnerOperationResponse);
	}

	public getRemoveStatus(requestData: InventoryModels.ServerGetRemoveStatusRequestData, onResponse: Action1<InventoryResponseModels.GetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerGetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetRemoveStatusOperationResponse);
	}

	public getSegment(requestData: InventoryModels.ServerGetSegmentRequestData, onResponse: Action1<InventoryResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerGetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetSegmentOperationResponse);
	}

	public getStatisticsLeaderboardAroundItem(requestData: InventoryModels.ServerGetStatisticsLeaderboardAroundItemRequestData, onResponse: Action1<InventoryResponseModels.GetStatisticsLeaderboardAroundItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerGetStatisticsLeaderboardAroundItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetStatisticsLeaderboardAroundItemOperationResponse);
	}

	public getStatisticsLeaderboard(requestData: InventoryModels.ServerGetStatisticsLeaderboardRequestData, onResponse: Action1<InventoryResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerGetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public getTag(requestData: InventoryModels.ServerGetTagRequestData, onResponse: Action1<InventoryResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerGetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetTagOperationResponse);
	}

	public getTsCreate(requestData: InventoryModels.ServerGetTsCreateRequestData, onResponse: Action1<InventoryResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerGetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetTsCreateOperationResponse);
	}

	public removeSegment(requestData: InventoryModels.ServerRemoveSegmentRequestData, onResponse: Action1<InventoryResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerRemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.RemoveSegmentOperationResponse);
	}

	public removeTag(requestData: InventoryModels.ServerRemoveTagRequestData, onResponse: Action1<InventoryResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerRemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.RemoveTagOperationResponse);
	}

	public setAmount(requestData: InventoryModels.ServerSetAmountRequestData, onResponse: Action1<InventoryResponseModels.SetAmountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerSetAmountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetAmountOperationResponse);
	}

	public setAvatar(requestData: InventoryModels.ServerSetAvatarRequestData, onResponse: Action1<InventoryResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerSetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetAvatarOperationResponse);
	}

	public setCustomData(requestData: InventoryModels.ServerSetCustomDataRequestData, onResponse: Action1<InventoryResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerSetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetCustomDataOperationResponse);
	}

	public setDisplayName(requestData: InventoryModels.ServerSetDisplayNameRequestData, onResponse: Action1<InventoryResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerSetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetDisplayNameOperationResponse);
	}

	public setItemData(requestData: InventoryModels.ServerSetItemDataRequestData, onResponse: Action1<InventoryResponseModels.SetItemDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerSetItemDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetItemDataOperationResponse);
	}

	public setItemStatistics(requestData: InventoryModels.ServerSetItemStatisticsRequestData, onResponse: Action1<InventoryResponseModels.SetItemStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerSetItemStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetItemStatisticsOperationResponse);
	}

	public setOwner(requestData: InventoryModels.ServerSetOwnerRequestData, onResponse: Action1<InventoryResponseModels.SetOwnerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerSetOwnerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetOwnerOperationResponse);
	}

	public setRemoveStatus(requestData: InventoryModels.ServerSetRemoveStatusRequestData, onResponse: Action1<InventoryResponseModels.SetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerSetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetRemoveStatusOperationResponse);
	}

	public setTag(requestData: InventoryModels.ServerSetTagRequestData, onResponse: Action1<InventoryResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.ServerSetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetTagOperationResponse);
	}

}

export class AdminInventoryApi {
	public addSegment(requestData: InventoryModels.AdminAddSegmentRequestData, onResponse: Action1<InventoryResponseModels.AddSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminAddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.AddSegmentOperationResponse);
	}

	public getAmount(requestData: InventoryModels.AdminGetAmountRequestData, onResponse: Action1<InventoryResponseModels.GetAmountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminGetAmountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetAmountOperationResponse);
	}

	public getAvatar(requestData: InventoryModels.AdminGetAvatarRequestData, onResponse: Action1<InventoryResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminGetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetAvatarOperationResponse);
	}

	public getCatalogId(requestData: InventoryModels.AdminGetCatalogIdRequestData, onResponse: Action1<InventoryResponseModels.GetCatalogIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminGetCatalogIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetCatalogIdOperationResponse);
	}

	public getClassId(requestData: InventoryModels.AdminGetClassIdRequestData, onResponse: Action1<InventoryResponseModels.GetClassIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminGetClassIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetClassIdOperationResponse);
	}

	public getCustomData(requestData: InventoryModels.AdminGetCustomDataRequestData, onResponse: Action1<InventoryResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminGetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetCustomDataOperationResponse);
	}

	public getDisplayName(requestData: InventoryModels.AdminGetDisplayNameRequestData, onResponse: Action1<InventoryResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminGetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetDisplayNameOperationResponse);
	}

	public getItemData(requestData: InventoryModels.AdminGetItemDataRequestData, onResponse: Action1<InventoryResponseModels.GetItemDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminGetItemDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemDataOperationResponse);
	}

	public getItemInformation(requestData: InventoryModels.AdminGetItemInformationRequestData, onResponse: Action1<InventoryResponseModels.GetItemInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminGetItemInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemInformationOperationResponse);
	}

	public getItemStatistics(requestData: InventoryModels.AdminGetItemStatisticsRequestData, onResponse: Action1<InventoryResponseModels.GetItemStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminGetItemStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemStatisticsOperationResponse);
	}

	public getItemsWithDisplayName(requestData: InventoryModels.AdminGetItemsWithDisplayNameRequestData, onResponse: Action1<InventoryResponseModels.GetItemsWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminGetItemsWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemsWithDisplayNameOperationResponse);
	}

	public getItemsWithSegment(requestData: InventoryModels.AdminGetItemsWithSegmentRequestData, onResponse: Action1<InventoryResponseModels.GetItemsWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminGetItemsWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemsWithSegmentOperationResponse);
	}

	public getItemsWithTag(requestData: InventoryModels.AdminGetItemsWithTagRequestData, onResponse: Action1<InventoryResponseModels.GetItemsWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminGetItemsWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemsWithTagOperationResponse);
	}

	public getItemType(requestData: InventoryModels.AdminGetItemTypeRequestData, onResponse: Action1<InventoryResponseModels.GetItemTypeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminGetItemTypeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemTypeOperationResponse);
	}

	public getOwner(requestData: InventoryModels.AdminGetOwnerRequestData, onResponse: Action1<InventoryResponseModels.GetOwnerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminGetOwnerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetOwnerOperationResponse);
	}

	public getRemoveStatus(requestData: InventoryModels.AdminGetRemoveStatusRequestData, onResponse: Action1<InventoryResponseModels.GetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminGetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetRemoveStatusOperationResponse);
	}

	public getSegment(requestData: InventoryModels.AdminGetSegmentRequestData, onResponse: Action1<InventoryResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminGetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetSegmentOperationResponse);
	}

	public getStatisticsLeaderboardAroundItem(requestData: InventoryModels.AdminGetStatisticsLeaderboardAroundItemRequestData, onResponse: Action1<InventoryResponseModels.GetStatisticsLeaderboardAroundItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminGetStatisticsLeaderboardAroundItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetStatisticsLeaderboardAroundItemOperationResponse);
	}

	public getStatisticsLeaderboard(requestData: InventoryModels.AdminGetStatisticsLeaderboardRequestData, onResponse: Action1<InventoryResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminGetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public getTag(requestData: InventoryModels.AdminGetTagRequestData, onResponse: Action1<InventoryResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminGetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetTagOperationResponse);
	}

	public getTsCreate(requestData: InventoryModels.AdminGetTsCreateRequestData, onResponse: Action1<InventoryResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminGetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetTsCreateOperationResponse);
	}

	public removeSegment(requestData: InventoryModels.AdminRemoveSegmentRequestData, onResponse: Action1<InventoryResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminRemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.RemoveSegmentOperationResponse);
	}

	public removeTag(requestData: InventoryModels.AdminRemoveTagRequestData, onResponse: Action1<InventoryResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminRemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.RemoveTagOperationResponse);
	}

	public setAmount(requestData: InventoryModels.AdminSetAmountRequestData, onResponse: Action1<InventoryResponseModels.SetAmountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminSetAmountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetAmountOperationResponse);
	}

	public setAvatar(requestData: InventoryModels.AdminSetAvatarRequestData, onResponse: Action1<InventoryResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminSetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetAvatarOperationResponse);
	}

	public setCustomData(requestData: InventoryModels.AdminSetCustomDataRequestData, onResponse: Action1<InventoryResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminSetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetCustomDataOperationResponse);
	}

	public setDisplayName(requestData: InventoryModels.AdminSetDisplayNameRequestData, onResponse: Action1<InventoryResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminSetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetDisplayNameOperationResponse);
	}

	public setItemData(requestData: InventoryModels.AdminSetItemDataRequestData, onResponse: Action1<InventoryResponseModels.SetItemDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminSetItemDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetItemDataOperationResponse);
	}

	public setItemStatistics(requestData: InventoryModels.AdminSetItemStatisticsRequestData, onResponse: Action1<InventoryResponseModels.SetItemStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminSetItemStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetItemStatisticsOperationResponse);
	}

	public setOwner(requestData: InventoryModels.AdminSetOwnerRequestData, onResponse: Action1<InventoryResponseModels.SetOwnerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminSetOwnerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetOwnerOperationResponse);
	}

	public setRemoveStatus(requestData: InventoryModels.AdminSetRemoveStatusRequestData, onResponse: Action1<InventoryResponseModels.SetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminSetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetRemoveStatusOperationResponse);
	}

	public setTag(requestData: InventoryModels.AdminSetTagRequestData, onResponse: Action1<InventoryResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new InventoryRequestModels.AdminSetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetTagOperationResponse);
	}

}

