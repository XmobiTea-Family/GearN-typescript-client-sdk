import { GNNetwork } from "./GNNetwork";
import { Action1 } from "./common/Action1";
import { GNHashtable } from "./common/GNData";
import { OperationRequest } from "./entity/OperationRequest";
import { StoreInventoryModels } from "./entity/models/StoreInventoryModels";
import { StoreInventoryRequestModels } from "./entity/models/StoreInventoryRequestModels";
import { StoreInventoryResponseModels } from "./entity/models/StoreInventoryResponseModels";

export class StoreInventoryApi {
	public server: ServerStoreInventoryApi = new ServerStoreInventoryApi();

	public admin: AdminStoreInventoryApi = new AdminStoreInventoryApi();

	public buyStoreItem(requestData: StoreInventoryModels.BuyStoreItemRequestData, onResponse: Action1<StoreInventoryResponseModels.BuyStoreItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.BuyStoreItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.BuyStoreItemOperationResponse);
	}

	public async buyStoreItemAsync(requestData: StoreInventoryModels.BuyStoreItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.BuyStoreItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.BuyStoreItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.BuyStoreItemOperationResponse);
	}

	public getStoreItemInformation(requestData: StoreInventoryModels.GetStoreItemInformationRequestData, onResponse: Action1<StoreInventoryResponseModels.GetStoreItemInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.GetStoreItemInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetStoreItemInformationOperationResponse);
	}

	public async getStoreItemInformationAsync(requestData: StoreInventoryModels.GetStoreItemInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.GetStoreItemInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.GetStoreItemInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetStoreItemInformationOperationResponse);
	}

	public getStoreItemsWithTag(requestData: StoreInventoryModels.GetStoreItemsWithTagRequestData, onResponse: Action1<StoreInventoryResponseModels.GetStoreItemsWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.GetStoreItemsWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetStoreItemsWithTagOperationResponse);
	}

	public async getStoreItemsWithTagAsync(requestData: StoreInventoryModels.GetStoreItemsWithTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.GetStoreItemsWithTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.GetStoreItemsWithTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetStoreItemsWithTagOperationResponse);
	}

	public createStoreItem(requestData: StoreInventoryModels.CreateStoreItemRequestData, onResponse: Action1<StoreInventoryResponseModels.CreateStoreItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.CreateStoreItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.CreateStoreItemOperationResponse);
	}

	public async createStoreItemAsync(requestData: StoreInventoryModels.CreateStoreItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.CreateStoreItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.CreateStoreItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.CreateStoreItemOperationResponse);
	}

	public setRemoveStatus(requestData: StoreInventoryModels.SetRemoveStatusRequestData, onResponse: Action1<StoreInventoryResponseModels.SetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.SetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.SetRemoveStatusOperationResponse);
	}

	public async setRemoveStatusAsync(requestData: StoreInventoryModels.SetRemoveStatusRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.SetRemoveStatusOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.SetRemoveStatusOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.SetRemoveStatusOperationResponse);
	}

	public setStoreItemInformation(requestData: StoreInventoryModels.SetStoreItemInformationRequestData, onResponse: Action1<StoreInventoryResponseModels.SetStoreItemInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.SetStoreItemInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.SetStoreItemInformationOperationResponse);
	}

	public async setStoreItemInformationAsync(requestData: StoreInventoryModels.SetStoreItemInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.SetStoreItemInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.SetStoreItemInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.SetStoreItemInformationOperationResponse);
	}

	public validateAppleAppStoreReceipt(requestData: StoreInventoryModels.ValidateAppleAppStoreReceiptRequestData, onResponse: Action1<StoreInventoryResponseModels.ValidateAppleAppStoreReceiptOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.ValidateAppleAppStoreReceiptOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.ValidateAppleAppStoreReceiptOperationResponse);
	}

	public async validateAppleAppStoreReceiptAsync(requestData: StoreInventoryModels.ValidateAppleAppStoreReceiptRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.ValidateAppleAppStoreReceiptOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.ValidateAppleAppStoreReceiptOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.ValidateAppleAppStoreReceiptOperationResponse);
	}

	public validateFacebookStoreReceipt(requestData: StoreInventoryModels.ValidateFacebookStoreReceiptRequestData, onResponse: Action1<StoreInventoryResponseModels.ValidateFacebookStoreReceiptOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.ValidateFacebookStoreReceiptOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.ValidateFacebookStoreReceiptOperationResponse);
	}

	public async validateFacebookStoreReceiptAsync(requestData: StoreInventoryModels.ValidateFacebookStoreReceiptRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.ValidateFacebookStoreReceiptOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.ValidateFacebookStoreReceiptOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.ValidateFacebookStoreReceiptOperationResponse);
	}

	public validateGooglePlayStoreReceipt(requestData: StoreInventoryModels.ValidateGooglePlayStoreReceiptRequestData, onResponse: Action1<StoreInventoryResponseModels.ValidateGooglePlayStoreReceiptOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.ValidateGooglePlayStoreReceiptOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.ValidateGooglePlayStoreReceiptOperationResponse);
	}

	public async validateGooglePlayStoreReceiptAsync(requestData: StoreInventoryModels.ValidateGooglePlayStoreReceiptRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.ValidateGooglePlayStoreReceiptOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.ValidateGooglePlayStoreReceiptOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.ValidateGooglePlayStoreReceiptOperationResponse);
	}

	public getCreateLeaderboard(requestData: StoreInventoryModels.GetCreateLeaderboardRequestData, onResponse: Action1<StoreInventoryResponseModels.GetCreateLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.GetCreateLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetCreateLeaderboardOperationResponse);
	}

	public async getCreateLeaderboardAsync(requestData: StoreInventoryModels.GetCreateLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.GetCreateLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.GetCreateLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetCreateLeaderboardOperationResponse);
	}

	public presentStoreItem(requestData: StoreInventoryModels.PresentStoreItemRequestData, onResponse: Action1<StoreInventoryResponseModels.PresentStoreItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.PresentStoreItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.PresentStoreItemOperationResponse);
	}

	public async presentStoreItemAsync(requestData: StoreInventoryModels.PresentStoreItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.PresentStoreItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.PresentStoreItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.PresentStoreItemOperationResponse);
	}

	public getStoreLog(requestData: StoreInventoryModels.GetStoreLogRequestData, onResponse: Action1<StoreInventoryResponseModels.GetStoreLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.GetStoreLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetStoreLogOperationResponse);
	}

	public async getStoreLogAsync(requestData: StoreInventoryModels.GetStoreLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.GetStoreLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.GetStoreLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetStoreLogOperationResponse);
	}

	public getStoreUsed(requestData: StoreInventoryModels.GetStoreUsedRequestData, onResponse: Action1<StoreInventoryResponseModels.GetStoreUsedOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.GetStoreUsedOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetStoreUsedOperationResponse);
	}

	public async getStoreUsedAsync(requestData: StoreInventoryModels.GetStoreUsedRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.GetStoreUsedOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.GetStoreUsedOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetStoreUsedOperationResponse);
	}

	public removeStoreUsed(requestData: StoreInventoryModels.RemoveStoreUsedRequestData, onResponse: Action1<StoreInventoryResponseModels.RemoveStoreUsedOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.RemoveStoreUsedOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.RemoveStoreUsedOperationResponse);
	}

	public async removeStoreUsedAsync(requestData: StoreInventoryModels.RemoveStoreUsedRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.RemoveStoreUsedOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.RemoveStoreUsedOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.RemoveStoreUsedOperationResponse);
	}

}

export class ServerStoreInventoryApi {
	public buyStoreItem(requestData: StoreInventoryModels.ServerBuyStoreItemRequestData, onResponse: Action1<StoreInventoryResponseModels.BuyStoreItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.ServerBuyStoreItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.BuyStoreItemOperationResponse);
	}

	public async buyStoreItemAsync(requestData: StoreInventoryModels.ServerBuyStoreItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.BuyStoreItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.ServerBuyStoreItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.BuyStoreItemOperationResponse);
	}

	public getStoreItemInformation(requestData: StoreInventoryModels.ServerGetStoreItemInformationRequestData, onResponse: Action1<StoreInventoryResponseModels.GetStoreItemInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.ServerGetStoreItemInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetStoreItemInformationOperationResponse);
	}

	public async getStoreItemInformationAsync(requestData: StoreInventoryModels.ServerGetStoreItemInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.GetStoreItemInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.ServerGetStoreItemInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetStoreItemInformationOperationResponse);
	}

	public getStoreItemsWithTag(requestData: StoreInventoryModels.ServerGetStoreItemsWithTagRequestData, onResponse: Action1<StoreInventoryResponseModels.GetStoreItemsWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.ServerGetStoreItemsWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetStoreItemsWithTagOperationResponse);
	}

	public async getStoreItemsWithTagAsync(requestData: StoreInventoryModels.ServerGetStoreItemsWithTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.GetStoreItemsWithTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.ServerGetStoreItemsWithTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetStoreItemsWithTagOperationResponse);
	}

	public createStoreItem(requestData: StoreInventoryModels.ServerCreateStoreItemRequestData, onResponse: Action1<StoreInventoryResponseModels.CreateStoreItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.ServerCreateStoreItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.CreateStoreItemOperationResponse);
	}

	public async createStoreItemAsync(requestData: StoreInventoryModels.ServerCreateStoreItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.CreateStoreItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.ServerCreateStoreItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.CreateStoreItemOperationResponse);
	}

	public setRemoveStatus(requestData: StoreInventoryModels.ServerSetRemoveStatusRequestData, onResponse: Action1<StoreInventoryResponseModels.SetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.ServerSetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.SetRemoveStatusOperationResponse);
	}

	public async setRemoveStatusAsync(requestData: StoreInventoryModels.ServerSetRemoveStatusRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.SetRemoveStatusOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.ServerSetRemoveStatusOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.SetRemoveStatusOperationResponse);
	}

	public setStoreItemInformation(requestData: StoreInventoryModels.ServerSetStoreItemInformationRequestData, onResponse: Action1<StoreInventoryResponseModels.SetStoreItemInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.ServerSetStoreItemInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.SetStoreItemInformationOperationResponse);
	}

	public async setStoreItemInformationAsync(requestData: StoreInventoryModels.ServerSetStoreItemInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.SetStoreItemInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.ServerSetStoreItemInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.SetStoreItemInformationOperationResponse);
	}

	public validateAppleAppStoreReceipt(requestData: StoreInventoryModels.ServerValidateAppleAppStoreReceiptRequestData, onResponse: Action1<StoreInventoryResponseModels.ValidateAppleAppStoreReceiptOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.ServerValidateAppleAppStoreReceiptOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.ValidateAppleAppStoreReceiptOperationResponse);
	}

	public async validateAppleAppStoreReceiptAsync(requestData: StoreInventoryModels.ServerValidateAppleAppStoreReceiptRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.ValidateAppleAppStoreReceiptOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.ServerValidateAppleAppStoreReceiptOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.ValidateAppleAppStoreReceiptOperationResponse);
	}

	public validateFacebookStoreReceipt(requestData: StoreInventoryModels.ServerValidateFacebookStoreReceiptRequestData, onResponse: Action1<StoreInventoryResponseModels.ValidateFacebookStoreReceiptOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.ServerValidateFacebookStoreReceiptOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.ValidateFacebookStoreReceiptOperationResponse);
	}

	public async validateFacebookStoreReceiptAsync(requestData: StoreInventoryModels.ServerValidateFacebookStoreReceiptRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.ValidateFacebookStoreReceiptOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.ServerValidateFacebookStoreReceiptOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.ValidateFacebookStoreReceiptOperationResponse);
	}

	public validateGooglePlayStoreReceipt(requestData: StoreInventoryModels.ServerValidateGooglePlayStoreReceiptRequestData, onResponse: Action1<StoreInventoryResponseModels.ValidateGooglePlayStoreReceiptOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.ServerValidateGooglePlayStoreReceiptOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.ValidateGooglePlayStoreReceiptOperationResponse);
	}

	public async validateGooglePlayStoreReceiptAsync(requestData: StoreInventoryModels.ServerValidateGooglePlayStoreReceiptRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.ValidateGooglePlayStoreReceiptOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.ServerValidateGooglePlayStoreReceiptOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.ValidateGooglePlayStoreReceiptOperationResponse);
	}

	public getCreateLeaderboard(requestData: StoreInventoryModels.ServerGetCreateLeaderboardRequestData, onResponse: Action1<StoreInventoryResponseModels.GetCreateLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.ServerGetCreateLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetCreateLeaderboardOperationResponse);
	}

	public async getCreateLeaderboardAsync(requestData: StoreInventoryModels.ServerGetCreateLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.GetCreateLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.ServerGetCreateLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetCreateLeaderboardOperationResponse);
	}

	public presentStoreItem(requestData: StoreInventoryModels.ServerPresentStoreItemRequestData, onResponse: Action1<StoreInventoryResponseModels.PresentStoreItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.ServerPresentStoreItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.PresentStoreItemOperationResponse);
	}

	public async presentStoreItemAsync(requestData: StoreInventoryModels.ServerPresentStoreItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.PresentStoreItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.ServerPresentStoreItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.PresentStoreItemOperationResponse);
	}

	public getStoreLog(requestData: StoreInventoryModels.ServerGetStoreLogRequestData, onResponse: Action1<StoreInventoryResponseModels.GetStoreLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.ServerGetStoreLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetStoreLogOperationResponse);
	}

	public async getStoreLogAsync(requestData: StoreInventoryModels.ServerGetStoreLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.GetStoreLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.ServerGetStoreLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetStoreLogOperationResponse);
	}

	public getStoreUsed(requestData: StoreInventoryModels.ServerGetStoreUsedRequestData, onResponse: Action1<StoreInventoryResponseModels.GetStoreUsedOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.ServerGetStoreUsedOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetStoreUsedOperationResponse);
	}

	public async getStoreUsedAsync(requestData: StoreInventoryModels.ServerGetStoreUsedRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.GetStoreUsedOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.ServerGetStoreUsedOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetStoreUsedOperationResponse);
	}

	public removeStoreUsed(requestData: StoreInventoryModels.ServerRemoveStoreUsedRequestData, onResponse: Action1<StoreInventoryResponseModels.RemoveStoreUsedOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.ServerRemoveStoreUsedOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.RemoveStoreUsedOperationResponse);
	}

	public async removeStoreUsedAsync(requestData: StoreInventoryModels.ServerRemoveStoreUsedRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.RemoveStoreUsedOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.ServerRemoveStoreUsedOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.RemoveStoreUsedOperationResponse);
	}

}

export class AdminStoreInventoryApi {
	public buyStoreItem(requestData: StoreInventoryModels.AdminBuyStoreItemRequestData, onResponse: Action1<StoreInventoryResponseModels.BuyStoreItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.AdminBuyStoreItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.BuyStoreItemOperationResponse);
	}

	public async buyStoreItemAsync(requestData: StoreInventoryModels.AdminBuyStoreItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.BuyStoreItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.AdminBuyStoreItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.BuyStoreItemOperationResponse);
	}

	public getStoreItemInformation(requestData: StoreInventoryModels.AdminGetStoreItemInformationRequestData, onResponse: Action1<StoreInventoryResponseModels.GetStoreItemInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.AdminGetStoreItemInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetStoreItemInformationOperationResponse);
	}

	public async getStoreItemInformationAsync(requestData: StoreInventoryModels.AdminGetStoreItemInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.GetStoreItemInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.AdminGetStoreItemInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetStoreItemInformationOperationResponse);
	}

	public getStoreItemsWithTag(requestData: StoreInventoryModels.AdminGetStoreItemsWithTagRequestData, onResponse: Action1<StoreInventoryResponseModels.GetStoreItemsWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.AdminGetStoreItemsWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetStoreItemsWithTagOperationResponse);
	}

	public async getStoreItemsWithTagAsync(requestData: StoreInventoryModels.AdminGetStoreItemsWithTagRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.GetStoreItemsWithTagOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.AdminGetStoreItemsWithTagOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetStoreItemsWithTagOperationResponse);
	}

	public createStoreItem(requestData: StoreInventoryModels.AdminCreateStoreItemRequestData, onResponse: Action1<StoreInventoryResponseModels.CreateStoreItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.AdminCreateStoreItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.CreateStoreItemOperationResponse);
	}

	public async createStoreItemAsync(requestData: StoreInventoryModels.AdminCreateStoreItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.CreateStoreItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.AdminCreateStoreItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.CreateStoreItemOperationResponse);
	}

	public setRemoveStatus(requestData: StoreInventoryModels.AdminSetRemoveStatusRequestData, onResponse: Action1<StoreInventoryResponseModels.SetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.AdminSetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.SetRemoveStatusOperationResponse);
	}

	public async setRemoveStatusAsync(requestData: StoreInventoryModels.AdminSetRemoveStatusRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.SetRemoveStatusOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.AdminSetRemoveStatusOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.SetRemoveStatusOperationResponse);
	}

	public setStoreItemInformation(requestData: StoreInventoryModels.AdminSetStoreItemInformationRequestData, onResponse: Action1<StoreInventoryResponseModels.SetStoreItemInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.AdminSetStoreItemInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.SetStoreItemInformationOperationResponse);
	}

	public async setStoreItemInformationAsync(requestData: StoreInventoryModels.AdminSetStoreItemInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.SetStoreItemInformationOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.AdminSetStoreItemInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.SetStoreItemInformationOperationResponse);
	}

	public validateAppleAppStoreReceipt(requestData: StoreInventoryModels.AdminValidateAppleAppStoreReceiptRequestData, onResponse: Action1<StoreInventoryResponseModels.ValidateAppleAppStoreReceiptOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.AdminValidateAppleAppStoreReceiptOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.ValidateAppleAppStoreReceiptOperationResponse);
	}

	public async validateAppleAppStoreReceiptAsync(requestData: StoreInventoryModels.AdminValidateAppleAppStoreReceiptRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.ValidateAppleAppStoreReceiptOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.AdminValidateAppleAppStoreReceiptOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.ValidateAppleAppStoreReceiptOperationResponse);
	}

	public validateFacebookStoreReceipt(requestData: StoreInventoryModels.AdminValidateFacebookStoreReceiptRequestData, onResponse: Action1<StoreInventoryResponseModels.ValidateFacebookStoreReceiptOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.AdminValidateFacebookStoreReceiptOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.ValidateFacebookStoreReceiptOperationResponse);
	}

	public async validateFacebookStoreReceiptAsync(requestData: StoreInventoryModels.AdminValidateFacebookStoreReceiptRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.ValidateFacebookStoreReceiptOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.AdminValidateFacebookStoreReceiptOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.ValidateFacebookStoreReceiptOperationResponse);
	}

	public validateGooglePlayStoreReceipt(requestData: StoreInventoryModels.AdminValidateGooglePlayStoreReceiptRequestData, onResponse: Action1<StoreInventoryResponseModels.ValidateGooglePlayStoreReceiptOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.AdminValidateGooglePlayStoreReceiptOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.ValidateGooglePlayStoreReceiptOperationResponse);
	}

	public async validateGooglePlayStoreReceiptAsync(requestData: StoreInventoryModels.AdminValidateGooglePlayStoreReceiptRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.ValidateGooglePlayStoreReceiptOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.AdminValidateGooglePlayStoreReceiptOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.ValidateGooglePlayStoreReceiptOperationResponse);
	}

	public getCreateLeaderboard(requestData: StoreInventoryModels.AdminGetCreateLeaderboardRequestData, onResponse: Action1<StoreInventoryResponseModels.GetCreateLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.AdminGetCreateLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetCreateLeaderboardOperationResponse);
	}

	public async getCreateLeaderboardAsync(requestData: StoreInventoryModels.AdminGetCreateLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.GetCreateLeaderboardOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.AdminGetCreateLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetCreateLeaderboardOperationResponse);
	}

	public presentStoreItem(requestData: StoreInventoryModels.AdminPresentStoreItemRequestData, onResponse: Action1<StoreInventoryResponseModels.PresentStoreItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.AdminPresentStoreItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.PresentStoreItemOperationResponse);
	}

	public async presentStoreItemAsync(requestData: StoreInventoryModels.AdminPresentStoreItemRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.PresentStoreItemOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.AdminPresentStoreItemOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.PresentStoreItemOperationResponse);
	}

	public getStoreLog(requestData: StoreInventoryModels.AdminGetStoreLogRequestData, onResponse: Action1<StoreInventoryResponseModels.GetStoreLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.AdminGetStoreLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetStoreLogOperationResponse);
	}

	public async getStoreLogAsync(requestData: StoreInventoryModels.AdminGetStoreLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.GetStoreLogOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.AdminGetStoreLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetStoreLogOperationResponse);
	}

	public getStoreUsed(requestData: StoreInventoryModels.AdminGetStoreUsedRequestData, onResponse: Action1<StoreInventoryResponseModels.GetStoreUsedOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.AdminGetStoreUsedOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetStoreUsedOperationResponse);
	}

	public async getStoreUsedAsync(requestData: StoreInventoryModels.AdminGetStoreUsedRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.GetStoreUsedOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.AdminGetStoreUsedOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetStoreUsedOperationResponse);
	}

	public removeStoreUsed(requestData: StoreInventoryModels.AdminRemoveStoreUsedRequestData, onResponse: Action1<StoreInventoryResponseModels.RemoveStoreUsedOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new StoreInventoryRequestModels.AdminRemoveStoreUsedOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.RemoveStoreUsedOperationResponse);
	}

	public async removeStoreUsedAsync(requestData: StoreInventoryModels.AdminRemoveStoreUsedRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<StoreInventoryResponseModels.RemoveStoreUsedOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new StoreInventoryRequestModels.AdminRemoveStoreUsedOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.RemoveStoreUsedOperationResponse);
	}

}
