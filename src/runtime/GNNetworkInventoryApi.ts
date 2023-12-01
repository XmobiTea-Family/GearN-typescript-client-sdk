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
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.AddSegmentOperationResponse);
	}

	public async addSegmentAsync(requestData: InventoryModels.AddSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.AddSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AddSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.AddSegmentOperationResponse);
	}

	public getAmount(requestData: InventoryModels.GetAmountRequestData, onResponse: Action1<InventoryResponseModels.GetAmountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.GetAmountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetAmountOperationResponse);
	}

	public async getAmountAsync(requestData: InventoryModels.GetAmountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetAmountOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.GetAmountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetAmountOperationResponse);
	}

	public getAvatar(requestData: InventoryModels.GetAvatarRequestData, onResponse: Action1<InventoryResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.GetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetAvatarOperationResponse);
	}

	public async getAvatarAsync(requestData: InventoryModels.GetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.GetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetAvatarOperationResponse);
	}

	public getCatalogId(requestData: InventoryModels.GetCatalogIdRequestData, onResponse: Action1<InventoryResponseModels.GetCatalogIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.GetCatalogIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetCatalogIdOperationResponse);
	}

	public async getCatalogIdAsync(requestData: InventoryModels.GetCatalogIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetCatalogIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.GetCatalogIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetCatalogIdOperationResponse);
	}

	public getClassId(requestData: InventoryModels.GetClassIdRequestData, onResponse: Action1<InventoryResponseModels.GetClassIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.GetClassIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetClassIdOperationResponse);
	}

	public async getClassIdAsync(requestData: InventoryModels.GetClassIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetClassIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.GetClassIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetClassIdOperationResponse);
	}

	public getCustomData(requestData: InventoryModels.GetCustomDataRequestData, onResponse: Action1<InventoryResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.GetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetCustomDataOperationResponse);
	}

	public async getCustomDataAsync(requestData: InventoryModels.GetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.GetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetCustomDataOperationResponse);
	}

	public getDisplayName(requestData: InventoryModels.GetDisplayNameRequestData, onResponse: Action1<InventoryResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.GetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetDisplayNameOperationResponse);
	}

	public async getDisplayNameAsync(requestData: InventoryModels.GetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.GetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetDisplayNameOperationResponse);
	}

	public getItemData(requestData: InventoryModels.GetItemDataRequestData, onResponse: Action1<InventoryResponseModels.GetItemDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.GetItemDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemDataOperationResponse);
	}

	public async getItemDataAsync(requestData: InventoryModels.GetItemDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetItemDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.GetItemDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemDataOperationResponse);
	}

	public getItemInformation(requestData: InventoryModels.GetItemInformationRequestData, onResponse: Action1<InventoryResponseModels.GetItemInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.GetItemInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemInformationOperationResponse);
	}

	public async getItemInformationAsync(requestData: InventoryModels.GetItemInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetItemInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.GetItemInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemInformationOperationResponse);
	}

	public getItemStatistics(requestData: InventoryModels.GetItemStatisticsRequestData, onResponse: Action1<InventoryResponseModels.GetItemStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.GetItemStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemStatisticsOperationResponse);
	}

	public async getItemStatisticsAsync(requestData: InventoryModels.GetItemStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetItemStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.GetItemStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemStatisticsOperationResponse);
	}

	public getItemsWithDisplayName(requestData: InventoryModels.GetItemsWithDisplayNameRequestData, onResponse: Action1<InventoryResponseModels.GetItemsWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.GetItemsWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemsWithDisplayNameOperationResponse);
	}

	public async getItemsWithDisplayNameAsync(requestData: InventoryModels.GetItemsWithDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetItemsWithDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.GetItemsWithDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemsWithDisplayNameOperationResponse);
	}

	public getItemsWithSegment(requestData: InventoryModels.GetItemsWithSegmentRequestData, onResponse: Action1<InventoryResponseModels.GetItemsWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.GetItemsWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemsWithSegmentOperationResponse);
	}

	public async getItemsWithSegmentAsync(requestData: InventoryModels.GetItemsWithSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetItemsWithSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.GetItemsWithSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemsWithSegmentOperationResponse);
	}

	public getItemsWithTag(requestData: InventoryModels.GetItemsWithTagRequestData, onResponse: Action1<InventoryResponseModels.GetItemsWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.GetItemsWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemsWithTagOperationResponse);
	}

	public async getItemsWithTagAsync(requestData: InventoryModels.GetItemsWithTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetItemsWithTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.GetItemsWithTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemsWithTagOperationResponse);
	}

	public getItemType(requestData: InventoryModels.GetItemTypeRequestData, onResponse: Action1<InventoryResponseModels.GetItemTypeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.GetItemTypeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemTypeOperationResponse);
	}

	public async getItemTypeAsync(requestData: InventoryModels.GetItemTypeRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetItemTypeOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.GetItemTypeOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemTypeOperationResponse);
	}

	public getOwner(requestData: InventoryModels.GetOwnerRequestData, onResponse: Action1<InventoryResponseModels.GetOwnerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.GetOwnerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetOwnerOperationResponse);
	}

	public async getOwnerAsync(requestData: InventoryModels.GetOwnerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetOwnerOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.GetOwnerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetOwnerOperationResponse);
	}

	public getRemoveStatus(requestData: InventoryModels.GetRemoveStatusRequestData, onResponse: Action1<InventoryResponseModels.GetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.GetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetRemoveStatusOperationResponse);
	}

	public async getRemoveStatusAsync(requestData: InventoryModels.GetRemoveStatusRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetRemoveStatusOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.GetRemoveStatusOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetRemoveStatusOperationResponse);
	}

	public getSegment(requestData: InventoryModels.GetSegmentRequestData, onResponse: Action1<InventoryResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.GetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetSegmentOperationResponse);
	}

	public async getSegmentAsync(requestData: InventoryModels.GetSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.GetSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetSegmentOperationResponse);
	}

	public getStatisticsLeaderboardAroundItem(requestData: InventoryModels.GetStatisticsLeaderboardAroundItemRequestData, onResponse: Action1<InventoryResponseModels.GetStatisticsLeaderboardAroundItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.GetStatisticsLeaderboardAroundItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetStatisticsLeaderboardAroundItemOperationResponse);
	}

	public async getStatisticsLeaderboardAroundItemAsync(requestData: InventoryModels.GetStatisticsLeaderboardAroundItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetStatisticsLeaderboardAroundItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.GetStatisticsLeaderboardAroundItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetStatisticsLeaderboardAroundItemOperationResponse);
	}

	public getStatisticsLeaderboard(requestData: InventoryModels.GetStatisticsLeaderboardRequestData, onResponse: Action1<InventoryResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.GetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public async getStatisticsLeaderboardAsync(requestData: InventoryModels.GetStatisticsLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetStatisticsLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.GetStatisticsLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public getTag(requestData: InventoryModels.GetTagRequestData, onResponse: Action1<InventoryResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.GetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetTagOperationResponse);
	}

	public async getTagAsync(requestData: InventoryModels.GetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.GetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetTagOperationResponse);
	}

	public getTsCreate(requestData: InventoryModels.GetTsCreateRequestData, onResponse: Action1<InventoryResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.GetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetTsCreateOperationResponse);
	}

	public async getTsCreateAsync(requestData: InventoryModels.GetTsCreateRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetTsCreateOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.GetTsCreateOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetTsCreateOperationResponse);
	}

	public removeSegment(requestData: InventoryModels.RemoveSegmentRequestData, onResponse: Action1<InventoryResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.RemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.RemoveSegmentOperationResponse);
	}

	public async removeSegmentAsync(requestData: InventoryModels.RemoveSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.RemoveSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.RemoveSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.RemoveSegmentOperationResponse);
	}

	public removeTag(requestData: InventoryModels.RemoveTagRequestData, onResponse: Action1<InventoryResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.RemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.RemoveTagOperationResponse);
	}

	public async removeTagAsync(requestData: InventoryModels.RemoveTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.RemoveTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.RemoveTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.RemoveTagOperationResponse);
	}

	public setAmount(requestData: InventoryModels.SetAmountRequestData, onResponse: Action1<InventoryResponseModels.SetAmountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.SetAmountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetAmountOperationResponse);
	}

	public async setAmountAsync(requestData: InventoryModels.SetAmountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.SetAmountOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.SetAmountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetAmountOperationResponse);
	}

	public setAvatar(requestData: InventoryModels.SetAvatarRequestData, onResponse: Action1<InventoryResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.SetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetAvatarOperationResponse);
	}

	public async setAvatarAsync(requestData: InventoryModels.SetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.SetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.SetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetAvatarOperationResponse);
	}

	public setCustomData(requestData: InventoryModels.SetCustomDataRequestData, onResponse: Action1<InventoryResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.SetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetCustomDataOperationResponse);
	}

	public async setCustomDataAsync(requestData: InventoryModels.SetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.SetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.SetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetCustomDataOperationResponse);
	}

	public setDisplayName(requestData: InventoryModels.SetDisplayNameRequestData, onResponse: Action1<InventoryResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.SetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetDisplayNameOperationResponse);
	}

	public async setDisplayNameAsync(requestData: InventoryModels.SetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.SetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.SetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetDisplayNameOperationResponse);
	}

	public setItemData(requestData: InventoryModels.SetItemDataRequestData, onResponse: Action1<InventoryResponseModels.SetItemDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.SetItemDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetItemDataOperationResponse);
	}

	public async setItemDataAsync(requestData: InventoryModels.SetItemDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.SetItemDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.SetItemDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetItemDataOperationResponse);
	}

	public setItemStatistics(requestData: InventoryModels.SetItemStatisticsRequestData, onResponse: Action1<InventoryResponseModels.SetItemStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.SetItemStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetItemStatisticsOperationResponse);
	}

	public async setItemStatisticsAsync(requestData: InventoryModels.SetItemStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.SetItemStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.SetItemStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetItemStatisticsOperationResponse);
	}

	public setOwner(requestData: InventoryModels.SetOwnerRequestData, onResponse: Action1<InventoryResponseModels.SetOwnerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.SetOwnerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetOwnerOperationResponse);
	}

	public async setOwnerAsync(requestData: InventoryModels.SetOwnerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.SetOwnerOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.SetOwnerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetOwnerOperationResponse);
	}

	public setRemoveStatus(requestData: InventoryModels.SetRemoveStatusRequestData, onResponse: Action1<InventoryResponseModels.SetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.SetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetRemoveStatusOperationResponse);
	}

	public async setRemoveStatusAsync(requestData: InventoryModels.SetRemoveStatusRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.SetRemoveStatusOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.SetRemoveStatusOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetRemoveStatusOperationResponse);
	}

	public setTag(requestData: InventoryModels.SetTagRequestData, onResponse: Action1<InventoryResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.SetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetTagOperationResponse);
	}

	public async setTagAsync(requestData: InventoryModels.SetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.SetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.SetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetTagOperationResponse);
	}

	public getCreateLeaderboard(requestData: InventoryModels.GetCreateLeaderboardRequestData, onResponse: Action1<InventoryResponseModels.GetCreateLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.GetCreateLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetCreateLeaderboardOperationResponse);
	}

	public async getCreateLeaderboardAsync(requestData: InventoryModels.GetCreateLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetCreateLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.GetCreateLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetCreateLeaderboardOperationResponse);
	}

	public getStatisticsLog(requestData: InventoryModels.GetStatisticsLogRequestData, onResponse: Action1<InventoryResponseModels.GetStatisticsLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.GetStatisticsLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetStatisticsLogOperationResponse);
	}

	public async getStatisticsLogAsync(requestData: InventoryModels.GetStatisticsLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetStatisticsLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.GetStatisticsLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetStatisticsLogOperationResponse);
	}

}

export class ServerInventoryApi {
	public addSegment(requestData: InventoryModels.ServerAddSegmentRequestData, onResponse: Action1<InventoryResponseModels.AddSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerAddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.AddSegmentOperationResponse);
	}

	public async addSegmentAsync(requestData: InventoryModels.ServerAddSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.AddSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerAddSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.AddSegmentOperationResponse);
	}

	public getAmount(requestData: InventoryModels.ServerGetAmountRequestData, onResponse: Action1<InventoryResponseModels.GetAmountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerGetAmountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetAmountOperationResponse);
	}

	public async getAmountAsync(requestData: InventoryModels.ServerGetAmountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetAmountOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerGetAmountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetAmountOperationResponse);
	}

	public getAvatar(requestData: InventoryModels.ServerGetAvatarRequestData, onResponse: Action1<InventoryResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerGetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetAvatarOperationResponse);
	}

	public async getAvatarAsync(requestData: InventoryModels.ServerGetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerGetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetAvatarOperationResponse);
	}

	public getCatalogId(requestData: InventoryModels.ServerGetCatalogIdRequestData, onResponse: Action1<InventoryResponseModels.GetCatalogIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerGetCatalogIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetCatalogIdOperationResponse);
	}

	public async getCatalogIdAsync(requestData: InventoryModels.ServerGetCatalogIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetCatalogIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerGetCatalogIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetCatalogIdOperationResponse);
	}

	public getClassId(requestData: InventoryModels.ServerGetClassIdRequestData, onResponse: Action1<InventoryResponseModels.GetClassIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerGetClassIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetClassIdOperationResponse);
	}

	public async getClassIdAsync(requestData: InventoryModels.ServerGetClassIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetClassIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerGetClassIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetClassIdOperationResponse);
	}

	public getCustomData(requestData: InventoryModels.ServerGetCustomDataRequestData, onResponse: Action1<InventoryResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerGetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetCustomDataOperationResponse);
	}

	public async getCustomDataAsync(requestData: InventoryModels.ServerGetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerGetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetCustomDataOperationResponse);
	}

	public getDisplayName(requestData: InventoryModels.ServerGetDisplayNameRequestData, onResponse: Action1<InventoryResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerGetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetDisplayNameOperationResponse);
	}

	public async getDisplayNameAsync(requestData: InventoryModels.ServerGetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerGetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetDisplayNameOperationResponse);
	}

	public getItemData(requestData: InventoryModels.ServerGetItemDataRequestData, onResponse: Action1<InventoryResponseModels.GetItemDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerGetItemDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemDataOperationResponse);
	}

	public async getItemDataAsync(requestData: InventoryModels.ServerGetItemDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetItemDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerGetItemDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemDataOperationResponse);
	}

	public getItemInformation(requestData: InventoryModels.ServerGetItemInformationRequestData, onResponse: Action1<InventoryResponseModels.GetItemInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerGetItemInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemInformationOperationResponse);
	}

	public async getItemInformationAsync(requestData: InventoryModels.ServerGetItemInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetItemInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerGetItemInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemInformationOperationResponse);
	}

	public getItemStatistics(requestData: InventoryModels.ServerGetItemStatisticsRequestData, onResponse: Action1<InventoryResponseModels.GetItemStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerGetItemStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemStatisticsOperationResponse);
	}

	public async getItemStatisticsAsync(requestData: InventoryModels.ServerGetItemStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetItemStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerGetItemStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemStatisticsOperationResponse);
	}

	public getItemsWithDisplayName(requestData: InventoryModels.ServerGetItemsWithDisplayNameRequestData, onResponse: Action1<InventoryResponseModels.GetItemsWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerGetItemsWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemsWithDisplayNameOperationResponse);
	}

	public async getItemsWithDisplayNameAsync(requestData: InventoryModels.ServerGetItemsWithDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetItemsWithDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerGetItemsWithDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemsWithDisplayNameOperationResponse);
	}

	public getItemsWithSegment(requestData: InventoryModels.ServerGetItemsWithSegmentRequestData, onResponse: Action1<InventoryResponseModels.GetItemsWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerGetItemsWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemsWithSegmentOperationResponse);
	}

	public async getItemsWithSegmentAsync(requestData: InventoryModels.ServerGetItemsWithSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetItemsWithSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerGetItemsWithSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemsWithSegmentOperationResponse);
	}

	public getItemsWithTag(requestData: InventoryModels.ServerGetItemsWithTagRequestData, onResponse: Action1<InventoryResponseModels.GetItemsWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerGetItemsWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemsWithTagOperationResponse);
	}

	public async getItemsWithTagAsync(requestData: InventoryModels.ServerGetItemsWithTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetItemsWithTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerGetItemsWithTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemsWithTagOperationResponse);
	}

	public getItemType(requestData: InventoryModels.ServerGetItemTypeRequestData, onResponse: Action1<InventoryResponseModels.GetItemTypeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerGetItemTypeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemTypeOperationResponse);
	}

	public async getItemTypeAsync(requestData: InventoryModels.ServerGetItemTypeRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetItemTypeOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerGetItemTypeOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemTypeOperationResponse);
	}

	public getOwner(requestData: InventoryModels.ServerGetOwnerRequestData, onResponse: Action1<InventoryResponseModels.GetOwnerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerGetOwnerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetOwnerOperationResponse);
	}

	public async getOwnerAsync(requestData: InventoryModels.ServerGetOwnerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetOwnerOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerGetOwnerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetOwnerOperationResponse);
	}

	public getRemoveStatus(requestData: InventoryModels.ServerGetRemoveStatusRequestData, onResponse: Action1<InventoryResponseModels.GetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerGetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetRemoveStatusOperationResponse);
	}

	public async getRemoveStatusAsync(requestData: InventoryModels.ServerGetRemoveStatusRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetRemoveStatusOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerGetRemoveStatusOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetRemoveStatusOperationResponse);
	}

	public getSegment(requestData: InventoryModels.ServerGetSegmentRequestData, onResponse: Action1<InventoryResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerGetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetSegmentOperationResponse);
	}

	public async getSegmentAsync(requestData: InventoryModels.ServerGetSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerGetSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetSegmentOperationResponse);
	}

	public getStatisticsLeaderboardAroundItem(requestData: InventoryModels.ServerGetStatisticsLeaderboardAroundItemRequestData, onResponse: Action1<InventoryResponseModels.GetStatisticsLeaderboardAroundItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerGetStatisticsLeaderboardAroundItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetStatisticsLeaderboardAroundItemOperationResponse);
	}

	public async getStatisticsLeaderboardAroundItemAsync(requestData: InventoryModels.ServerGetStatisticsLeaderboardAroundItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetStatisticsLeaderboardAroundItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerGetStatisticsLeaderboardAroundItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetStatisticsLeaderboardAroundItemOperationResponse);
	}

	public getStatisticsLeaderboard(requestData: InventoryModels.ServerGetStatisticsLeaderboardRequestData, onResponse: Action1<InventoryResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerGetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public async getStatisticsLeaderboardAsync(requestData: InventoryModels.ServerGetStatisticsLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetStatisticsLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerGetStatisticsLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public getTag(requestData: InventoryModels.ServerGetTagRequestData, onResponse: Action1<InventoryResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerGetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetTagOperationResponse);
	}

	public async getTagAsync(requestData: InventoryModels.ServerGetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerGetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetTagOperationResponse);
	}

	public getTsCreate(requestData: InventoryModels.ServerGetTsCreateRequestData, onResponse: Action1<InventoryResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerGetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetTsCreateOperationResponse);
	}

	public async getTsCreateAsync(requestData: InventoryModels.ServerGetTsCreateRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetTsCreateOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerGetTsCreateOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetTsCreateOperationResponse);
	}

	public removeSegment(requestData: InventoryModels.ServerRemoveSegmentRequestData, onResponse: Action1<InventoryResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerRemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.RemoveSegmentOperationResponse);
	}

	public async removeSegmentAsync(requestData: InventoryModels.ServerRemoveSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.RemoveSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerRemoveSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.RemoveSegmentOperationResponse);
	}

	public removeTag(requestData: InventoryModels.ServerRemoveTagRequestData, onResponse: Action1<InventoryResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerRemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.RemoveTagOperationResponse);
	}

	public async removeTagAsync(requestData: InventoryModels.ServerRemoveTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.RemoveTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerRemoveTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.RemoveTagOperationResponse);
	}

	public setAmount(requestData: InventoryModels.ServerSetAmountRequestData, onResponse: Action1<InventoryResponseModels.SetAmountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerSetAmountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetAmountOperationResponse);
	}

	public async setAmountAsync(requestData: InventoryModels.ServerSetAmountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.SetAmountOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerSetAmountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetAmountOperationResponse);
	}

	public setAvatar(requestData: InventoryModels.ServerSetAvatarRequestData, onResponse: Action1<InventoryResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerSetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetAvatarOperationResponse);
	}

	public async setAvatarAsync(requestData: InventoryModels.ServerSetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.SetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerSetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetAvatarOperationResponse);
	}

	public setCustomData(requestData: InventoryModels.ServerSetCustomDataRequestData, onResponse: Action1<InventoryResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerSetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetCustomDataOperationResponse);
	}

	public async setCustomDataAsync(requestData: InventoryModels.ServerSetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.SetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerSetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetCustomDataOperationResponse);
	}

	public setDisplayName(requestData: InventoryModels.ServerSetDisplayNameRequestData, onResponse: Action1<InventoryResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerSetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetDisplayNameOperationResponse);
	}

	public async setDisplayNameAsync(requestData: InventoryModels.ServerSetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.SetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerSetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetDisplayNameOperationResponse);
	}

	public setItemData(requestData: InventoryModels.ServerSetItemDataRequestData, onResponse: Action1<InventoryResponseModels.SetItemDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerSetItemDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetItemDataOperationResponse);
	}

	public async setItemDataAsync(requestData: InventoryModels.ServerSetItemDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.SetItemDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerSetItemDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetItemDataOperationResponse);
	}

	public setItemStatistics(requestData: InventoryModels.ServerSetItemStatisticsRequestData, onResponse: Action1<InventoryResponseModels.SetItemStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerSetItemStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetItemStatisticsOperationResponse);
	}

	public async setItemStatisticsAsync(requestData: InventoryModels.ServerSetItemStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.SetItemStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerSetItemStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetItemStatisticsOperationResponse);
	}

	public setOwner(requestData: InventoryModels.ServerSetOwnerRequestData, onResponse: Action1<InventoryResponseModels.SetOwnerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerSetOwnerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetOwnerOperationResponse);
	}

	public async setOwnerAsync(requestData: InventoryModels.ServerSetOwnerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.SetOwnerOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerSetOwnerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetOwnerOperationResponse);
	}

	public setRemoveStatus(requestData: InventoryModels.ServerSetRemoveStatusRequestData, onResponse: Action1<InventoryResponseModels.SetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerSetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetRemoveStatusOperationResponse);
	}

	public async setRemoveStatusAsync(requestData: InventoryModels.ServerSetRemoveStatusRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.SetRemoveStatusOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerSetRemoveStatusOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetRemoveStatusOperationResponse);
	}

	public setTag(requestData: InventoryModels.ServerSetTagRequestData, onResponse: Action1<InventoryResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerSetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetTagOperationResponse);
	}

	public async setTagAsync(requestData: InventoryModels.ServerSetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.SetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerSetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetTagOperationResponse);
	}

	public getCreateLeaderboard(requestData: InventoryModels.ServerGetCreateLeaderboardRequestData, onResponse: Action1<InventoryResponseModels.GetCreateLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerGetCreateLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetCreateLeaderboardOperationResponse);
	}

	public async getCreateLeaderboardAsync(requestData: InventoryModels.ServerGetCreateLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetCreateLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerGetCreateLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetCreateLeaderboardOperationResponse);
	}

	public getStatisticsLog(requestData: InventoryModels.ServerGetStatisticsLogRequestData, onResponse: Action1<InventoryResponseModels.GetStatisticsLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.ServerGetStatisticsLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetStatisticsLogOperationResponse);
	}

	public async getStatisticsLogAsync(requestData: InventoryModels.ServerGetStatisticsLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetStatisticsLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.ServerGetStatisticsLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetStatisticsLogOperationResponse);
	}

}

export class AdminInventoryApi {
	public addSegment(requestData: InventoryModels.AdminAddSegmentRequestData, onResponse: Action1<InventoryResponseModels.AddSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminAddSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.AddSegmentOperationResponse);
	}

	public async addSegmentAsync(requestData: InventoryModels.AdminAddSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.AddSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminAddSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.AddSegmentOperationResponse);
	}

	public getAmount(requestData: InventoryModels.AdminGetAmountRequestData, onResponse: Action1<InventoryResponseModels.GetAmountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminGetAmountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetAmountOperationResponse);
	}

	public async getAmountAsync(requestData: InventoryModels.AdminGetAmountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetAmountOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminGetAmountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetAmountOperationResponse);
	}

	public getAvatar(requestData: InventoryModels.AdminGetAvatarRequestData, onResponse: Action1<InventoryResponseModels.GetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminGetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetAvatarOperationResponse);
	}

	public async getAvatarAsync(requestData: InventoryModels.AdminGetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminGetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetAvatarOperationResponse);
	}

	public getCatalogId(requestData: InventoryModels.AdminGetCatalogIdRequestData, onResponse: Action1<InventoryResponseModels.GetCatalogIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminGetCatalogIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetCatalogIdOperationResponse);
	}

	public async getCatalogIdAsync(requestData: InventoryModels.AdminGetCatalogIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetCatalogIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminGetCatalogIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetCatalogIdOperationResponse);
	}

	public getClassId(requestData: InventoryModels.AdminGetClassIdRequestData, onResponse: Action1<InventoryResponseModels.GetClassIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminGetClassIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetClassIdOperationResponse);
	}

	public async getClassIdAsync(requestData: InventoryModels.AdminGetClassIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetClassIdOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminGetClassIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetClassIdOperationResponse);
	}

	public getCustomData(requestData: InventoryModels.AdminGetCustomDataRequestData, onResponse: Action1<InventoryResponseModels.GetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminGetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetCustomDataOperationResponse);
	}

	public async getCustomDataAsync(requestData: InventoryModels.AdminGetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminGetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetCustomDataOperationResponse);
	}

	public getDisplayName(requestData: InventoryModels.AdminGetDisplayNameRequestData, onResponse: Action1<InventoryResponseModels.GetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminGetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetDisplayNameOperationResponse);
	}

	public async getDisplayNameAsync(requestData: InventoryModels.AdminGetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminGetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetDisplayNameOperationResponse);
	}

	public getItemData(requestData: InventoryModels.AdminGetItemDataRequestData, onResponse: Action1<InventoryResponseModels.GetItemDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminGetItemDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemDataOperationResponse);
	}

	public async getItemDataAsync(requestData: InventoryModels.AdminGetItemDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetItemDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminGetItemDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemDataOperationResponse);
	}

	public getItemInformation(requestData: InventoryModels.AdminGetItemInformationRequestData, onResponse: Action1<InventoryResponseModels.GetItemInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminGetItemInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemInformationOperationResponse);
	}

	public async getItemInformationAsync(requestData: InventoryModels.AdminGetItemInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetItemInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminGetItemInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemInformationOperationResponse);
	}

	public getItemStatistics(requestData: InventoryModels.AdminGetItemStatisticsRequestData, onResponse: Action1<InventoryResponseModels.GetItemStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminGetItemStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemStatisticsOperationResponse);
	}

	public async getItemStatisticsAsync(requestData: InventoryModels.AdminGetItemStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetItemStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminGetItemStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemStatisticsOperationResponse);
	}

	public getItemsWithDisplayName(requestData: InventoryModels.AdminGetItemsWithDisplayNameRequestData, onResponse: Action1<InventoryResponseModels.GetItemsWithDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminGetItemsWithDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemsWithDisplayNameOperationResponse);
	}

	public async getItemsWithDisplayNameAsync(requestData: InventoryModels.AdminGetItemsWithDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetItemsWithDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminGetItemsWithDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemsWithDisplayNameOperationResponse);
	}

	public getItemsWithSegment(requestData: InventoryModels.AdminGetItemsWithSegmentRequestData, onResponse: Action1<InventoryResponseModels.GetItemsWithSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminGetItemsWithSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemsWithSegmentOperationResponse);
	}

	public async getItemsWithSegmentAsync(requestData: InventoryModels.AdminGetItemsWithSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetItemsWithSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminGetItemsWithSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemsWithSegmentOperationResponse);
	}

	public getItemsWithTag(requestData: InventoryModels.AdminGetItemsWithTagRequestData, onResponse: Action1<InventoryResponseModels.GetItemsWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminGetItemsWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemsWithTagOperationResponse);
	}

	public async getItemsWithTagAsync(requestData: InventoryModels.AdminGetItemsWithTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetItemsWithTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminGetItemsWithTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemsWithTagOperationResponse);
	}

	public getItemType(requestData: InventoryModels.AdminGetItemTypeRequestData, onResponse: Action1<InventoryResponseModels.GetItemTypeOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminGetItemTypeOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemTypeOperationResponse);
	}

	public async getItemTypeAsync(requestData: InventoryModels.AdminGetItemTypeRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetItemTypeOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminGetItemTypeOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetItemTypeOperationResponse);
	}

	public getOwner(requestData: InventoryModels.AdminGetOwnerRequestData, onResponse: Action1<InventoryResponseModels.GetOwnerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminGetOwnerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetOwnerOperationResponse);
	}

	public async getOwnerAsync(requestData: InventoryModels.AdminGetOwnerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetOwnerOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminGetOwnerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetOwnerOperationResponse);
	}

	public getRemoveStatus(requestData: InventoryModels.AdminGetRemoveStatusRequestData, onResponse: Action1<InventoryResponseModels.GetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminGetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetRemoveStatusOperationResponse);
	}

	public async getRemoveStatusAsync(requestData: InventoryModels.AdminGetRemoveStatusRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetRemoveStatusOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminGetRemoveStatusOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetRemoveStatusOperationResponse);
	}

	public getSegment(requestData: InventoryModels.AdminGetSegmentRequestData, onResponse: Action1<InventoryResponseModels.GetSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminGetSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetSegmentOperationResponse);
	}

	public async getSegmentAsync(requestData: InventoryModels.AdminGetSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminGetSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetSegmentOperationResponse);
	}

	public getStatisticsLeaderboardAroundItem(requestData: InventoryModels.AdminGetStatisticsLeaderboardAroundItemRequestData, onResponse: Action1<InventoryResponseModels.GetStatisticsLeaderboardAroundItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminGetStatisticsLeaderboardAroundItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetStatisticsLeaderboardAroundItemOperationResponse);
	}

	public async getStatisticsLeaderboardAroundItemAsync(requestData: InventoryModels.AdminGetStatisticsLeaderboardAroundItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetStatisticsLeaderboardAroundItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminGetStatisticsLeaderboardAroundItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetStatisticsLeaderboardAroundItemOperationResponse);
	}

	public getStatisticsLeaderboard(requestData: InventoryModels.AdminGetStatisticsLeaderboardRequestData, onResponse: Action1<InventoryResponseModels.GetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminGetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public async getStatisticsLeaderboardAsync(requestData: InventoryModels.AdminGetStatisticsLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetStatisticsLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminGetStatisticsLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetStatisticsLeaderboardOperationResponse);
	}

	public getTag(requestData: InventoryModels.AdminGetTagRequestData, onResponse: Action1<InventoryResponseModels.GetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminGetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetTagOperationResponse);
	}

	public async getTagAsync(requestData: InventoryModels.AdminGetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminGetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetTagOperationResponse);
	}

	public getTsCreate(requestData: InventoryModels.AdminGetTsCreateRequestData, onResponse: Action1<InventoryResponseModels.GetTsCreateOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminGetTsCreateOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetTsCreateOperationResponse);
	}

	public async getTsCreateAsync(requestData: InventoryModels.AdminGetTsCreateRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetTsCreateOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminGetTsCreateOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetTsCreateOperationResponse);
	}

	public removeSegment(requestData: InventoryModels.AdminRemoveSegmentRequestData, onResponse: Action1<InventoryResponseModels.RemoveSegmentOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminRemoveSegmentOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.RemoveSegmentOperationResponse);
	}

	public async removeSegmentAsync(requestData: InventoryModels.AdminRemoveSegmentRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.RemoveSegmentOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminRemoveSegmentOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.RemoveSegmentOperationResponse);
	}

	public removeTag(requestData: InventoryModels.AdminRemoveTagRequestData, onResponse: Action1<InventoryResponseModels.RemoveTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminRemoveTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.RemoveTagOperationResponse);
	}

	public async removeTagAsync(requestData: InventoryModels.AdminRemoveTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.RemoveTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminRemoveTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.RemoveTagOperationResponse);
	}

	public setAmount(requestData: InventoryModels.AdminSetAmountRequestData, onResponse: Action1<InventoryResponseModels.SetAmountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminSetAmountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetAmountOperationResponse);
	}

	public async setAmountAsync(requestData: InventoryModels.AdminSetAmountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.SetAmountOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminSetAmountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetAmountOperationResponse);
	}

	public setAvatar(requestData: InventoryModels.AdminSetAvatarRequestData, onResponse: Action1<InventoryResponseModels.SetAvatarOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminSetAvatarOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetAvatarOperationResponse);
	}

	public async setAvatarAsync(requestData: InventoryModels.AdminSetAvatarRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.SetAvatarOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminSetAvatarOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetAvatarOperationResponse);
	}

	public setCustomData(requestData: InventoryModels.AdminSetCustomDataRequestData, onResponse: Action1<InventoryResponseModels.SetCustomDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminSetCustomDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetCustomDataOperationResponse);
	}

	public async setCustomDataAsync(requestData: InventoryModels.AdminSetCustomDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.SetCustomDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminSetCustomDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetCustomDataOperationResponse);
	}

	public setDisplayName(requestData: InventoryModels.AdminSetDisplayNameRequestData, onResponse: Action1<InventoryResponseModels.SetDisplayNameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminSetDisplayNameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetDisplayNameOperationResponse);
	}

	public async setDisplayNameAsync(requestData: InventoryModels.AdminSetDisplayNameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.SetDisplayNameOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminSetDisplayNameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetDisplayNameOperationResponse);
	}

	public setItemData(requestData: InventoryModels.AdminSetItemDataRequestData, onResponse: Action1<InventoryResponseModels.SetItemDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminSetItemDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetItemDataOperationResponse);
	}

	public async setItemDataAsync(requestData: InventoryModels.AdminSetItemDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.SetItemDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminSetItemDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetItemDataOperationResponse);
	}

	public setItemStatistics(requestData: InventoryModels.AdminSetItemStatisticsRequestData, onResponse: Action1<InventoryResponseModels.SetItemStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminSetItemStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetItemStatisticsOperationResponse);
	}

	public async setItemStatisticsAsync(requestData: InventoryModels.AdminSetItemStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.SetItemStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminSetItemStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetItemStatisticsOperationResponse);
	}

	public setOwner(requestData: InventoryModels.AdminSetOwnerRequestData, onResponse: Action1<InventoryResponseModels.SetOwnerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminSetOwnerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetOwnerOperationResponse);
	}

	public async setOwnerAsync(requestData: InventoryModels.AdminSetOwnerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.SetOwnerOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminSetOwnerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetOwnerOperationResponse);
	}

	public setRemoveStatus(requestData: InventoryModels.AdminSetRemoveStatusRequestData, onResponse: Action1<InventoryResponseModels.SetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminSetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetRemoveStatusOperationResponse);
	}

	public async setRemoveStatusAsync(requestData: InventoryModels.AdminSetRemoveStatusRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.SetRemoveStatusOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminSetRemoveStatusOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetRemoveStatusOperationResponse);
	}

	public setTag(requestData: InventoryModels.AdminSetTagRequestData, onResponse: Action1<InventoryResponseModels.SetTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminSetTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetTagOperationResponse);
	}

	public async setTagAsync(requestData: InventoryModels.AdminSetTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.SetTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminSetTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.SetTagOperationResponse);
	}

	public getCreateLeaderboard(requestData: InventoryModels.AdminGetCreateLeaderboardRequestData, onResponse: Action1<InventoryResponseModels.GetCreateLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminGetCreateLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetCreateLeaderboardOperationResponse);
	}

	public async getCreateLeaderboardAsync(requestData: InventoryModels.AdminGetCreateLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetCreateLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminGetCreateLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetCreateLeaderboardOperationResponse);
	}

	public getStatisticsLog(requestData: InventoryModels.AdminGetStatisticsLogRequestData, onResponse: Action1<InventoryResponseModels.GetStatisticsLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new InventoryRequestModels.AdminGetStatisticsLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetStatisticsLogOperationResponse);
	}

	public async getStatisticsLogAsync(requestData: InventoryModels.AdminGetStatisticsLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<InventoryResponseModels.GetStatisticsLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new InventoryRequestModels.AdminGetStatisticsLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, InventoryResponseModels.GetStatisticsLogOperationResponse);
	}

}
