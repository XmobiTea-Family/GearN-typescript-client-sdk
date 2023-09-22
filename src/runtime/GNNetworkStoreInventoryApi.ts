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
		GNNetwork.sendViaSocketTRequestTResponse(new StoreInventoryRequestModels.BuyStoreItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.BuyStoreItemOperationResponse);
	}

	public getStoreItemInformation(requestData: StoreInventoryModels.GetStoreItemInformationRequestData, onResponse: Action1<StoreInventoryResponseModels.GetStoreItemInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new StoreInventoryRequestModels.GetStoreItemInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetStoreItemInformationOperationResponse);
	}

	public getStoreItemsWithTag(requestData: StoreInventoryModels.GetStoreItemsWithTagRequestData, onResponse: Action1<StoreInventoryResponseModels.GetStoreItemsWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new StoreInventoryRequestModels.GetStoreItemsWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetStoreItemsWithTagOperationResponse);
	}

	public grantStoreItem(requestData: StoreInventoryModels.GrantStoreItemRequestData, onResponse: Action1<StoreInventoryResponseModels.GrantStoreItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new StoreInventoryRequestModels.GrantStoreItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GrantStoreItemOperationResponse);
	}

	public setRemoveStatus(requestData: StoreInventoryModels.SetRemoveStatusRequestData, onResponse: Action1<StoreInventoryResponseModels.SetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new StoreInventoryRequestModels.SetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.SetRemoveStatusOperationResponse);
	}

	public setStoreItemInformation(requestData: StoreInventoryModels.SetStoreItemInformationRequestData, onResponse: Action1<StoreInventoryResponseModels.SetStoreItemInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new StoreInventoryRequestModels.SetStoreItemInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.SetStoreItemInformationOperationResponse);
	}

	public validateAppleAppStoreReceipt(requestData: StoreInventoryModels.ValidateAppleAppStoreReceiptRequestData, onResponse: Action1<StoreInventoryResponseModels.ValidateAppleAppStoreReceiptOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new StoreInventoryRequestModels.ValidateAppleAppStoreReceiptOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.ValidateAppleAppStoreReceiptOperationResponse);
	}

	public validateFacebookStoreReceipt(requestData: StoreInventoryModels.ValidateFacebookStoreReceiptRequestData, onResponse: Action1<StoreInventoryResponseModels.ValidateFacebookStoreReceiptOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new StoreInventoryRequestModels.ValidateFacebookStoreReceiptOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.ValidateFacebookStoreReceiptOperationResponse);
	}

	public validateGooglePlayStoreReceipt(requestData: StoreInventoryModels.ValidateGooglePlayStoreReceiptRequestData, onResponse: Action1<StoreInventoryResponseModels.ValidateGooglePlayStoreReceiptOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new StoreInventoryRequestModels.ValidateGooglePlayStoreReceiptOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.ValidateGooglePlayStoreReceiptOperationResponse);
	}

}

export class ServerStoreInventoryApi {
	public buyStoreItem(requestData: StoreInventoryModels.ServerBuyStoreItemRequestData, onResponse: Action1<StoreInventoryResponseModels.BuyStoreItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new StoreInventoryRequestModels.ServerBuyStoreItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.BuyStoreItemOperationResponse);
	}

	public getStoreItemInformation(requestData: StoreInventoryModels.ServerGetStoreItemInformationRequestData, onResponse: Action1<StoreInventoryResponseModels.GetStoreItemInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new StoreInventoryRequestModels.ServerGetStoreItemInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetStoreItemInformationOperationResponse);
	}

	public getStoreItemsWithTag(requestData: StoreInventoryModels.ServerGetStoreItemsWithTagRequestData, onResponse: Action1<StoreInventoryResponseModels.GetStoreItemsWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new StoreInventoryRequestModels.ServerGetStoreItemsWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetStoreItemsWithTagOperationResponse);
	}

	public grantStoreItem(requestData: StoreInventoryModels.ServerGrantStoreItemRequestData, onResponse: Action1<StoreInventoryResponseModels.GrantStoreItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new StoreInventoryRequestModels.ServerGrantStoreItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GrantStoreItemOperationResponse);
	}

	public setRemoveStatus(requestData: StoreInventoryModels.ServerSetRemoveStatusRequestData, onResponse: Action1<StoreInventoryResponseModels.SetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new StoreInventoryRequestModels.ServerSetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.SetRemoveStatusOperationResponse);
	}

	public setStoreItemInformation(requestData: StoreInventoryModels.ServerSetStoreItemInformationRequestData, onResponse: Action1<StoreInventoryResponseModels.SetStoreItemInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new StoreInventoryRequestModels.ServerSetStoreItemInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.SetStoreItemInformationOperationResponse);
	}

	public validateAppleAppStoreReceipt(requestData: StoreInventoryModels.ServerValidateAppleAppStoreReceiptRequestData, onResponse: Action1<StoreInventoryResponseModels.ValidateAppleAppStoreReceiptOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new StoreInventoryRequestModels.ServerValidateAppleAppStoreReceiptOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.ValidateAppleAppStoreReceiptOperationResponse);
	}

	public validateFacebookStoreReceipt(requestData: StoreInventoryModels.ServerValidateFacebookStoreReceiptRequestData, onResponse: Action1<StoreInventoryResponseModels.ValidateFacebookStoreReceiptOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new StoreInventoryRequestModels.ServerValidateFacebookStoreReceiptOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.ValidateFacebookStoreReceiptOperationResponse);
	}

	public validateGooglePlayStoreReceipt(requestData: StoreInventoryModels.ServerValidateGooglePlayStoreReceiptRequestData, onResponse: Action1<StoreInventoryResponseModels.ValidateGooglePlayStoreReceiptOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new StoreInventoryRequestModels.ServerValidateGooglePlayStoreReceiptOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.ValidateGooglePlayStoreReceiptOperationResponse);
	}

}

export class AdminStoreInventoryApi {
	public buyStoreItem(requestData: StoreInventoryModels.AdminBuyStoreItemRequestData, onResponse: Action1<StoreInventoryResponseModels.BuyStoreItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new StoreInventoryRequestModels.AdminBuyStoreItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.BuyStoreItemOperationResponse);
	}

	public getStoreItemInformation(requestData: StoreInventoryModels.AdminGetStoreItemInformationRequestData, onResponse: Action1<StoreInventoryResponseModels.GetStoreItemInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new StoreInventoryRequestModels.AdminGetStoreItemInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetStoreItemInformationOperationResponse);
	}

	public getStoreItemsWithTag(requestData: StoreInventoryModels.AdminGetStoreItemsWithTagRequestData, onResponse: Action1<StoreInventoryResponseModels.GetStoreItemsWithTagOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new StoreInventoryRequestModels.AdminGetStoreItemsWithTagOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GetStoreItemsWithTagOperationResponse);
	}

	public grantStoreItem(requestData: StoreInventoryModels.AdminGrantStoreItemRequestData, onResponse: Action1<StoreInventoryResponseModels.GrantStoreItemOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new StoreInventoryRequestModels.AdminGrantStoreItemOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.GrantStoreItemOperationResponse);
	}

	public setRemoveStatus(requestData: StoreInventoryModels.AdminSetRemoveStatusRequestData, onResponse: Action1<StoreInventoryResponseModels.SetRemoveStatusOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new StoreInventoryRequestModels.AdminSetRemoveStatusOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.SetRemoveStatusOperationResponse);
	}

	public setStoreItemInformation(requestData: StoreInventoryModels.AdminSetStoreItemInformationRequestData, onResponse: Action1<StoreInventoryResponseModels.SetStoreItemInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new StoreInventoryRequestModels.AdminSetStoreItemInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.SetStoreItemInformationOperationResponse);
	}

	public validateAppleAppStoreReceipt(requestData: StoreInventoryModels.AdminValidateAppleAppStoreReceiptRequestData, onResponse: Action1<StoreInventoryResponseModels.ValidateAppleAppStoreReceiptOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new StoreInventoryRequestModels.AdminValidateAppleAppStoreReceiptOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.ValidateAppleAppStoreReceiptOperationResponse);
	}

	public validateFacebookStoreReceipt(requestData: StoreInventoryModels.AdminValidateFacebookStoreReceiptRequestData, onResponse: Action1<StoreInventoryResponseModels.ValidateFacebookStoreReceiptOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new StoreInventoryRequestModels.AdminValidateFacebookStoreReceiptOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.ValidateFacebookStoreReceiptOperationResponse);
	}

	public validateGooglePlayStoreReceipt(requestData: StoreInventoryModels.AdminValidateGooglePlayStoreReceiptRequestData, onResponse: Action1<StoreInventoryResponseModels.ValidateGooglePlayStoreReceiptOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new StoreInventoryRequestModels.AdminValidateGooglePlayStoreReceiptOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, StoreInventoryResponseModels.ValidateGooglePlayStoreReceiptOperationResponse);
	}

}

