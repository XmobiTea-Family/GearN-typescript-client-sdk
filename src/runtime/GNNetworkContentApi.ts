import { GNNetwork } from "./GNNetwork";
import { Action1 } from "./common/Action1";
import { GNHashtable } from "./common/GNData";
import { OperationRequest } from "./entity/OperationRequest";
import { ContentModels } from "./entity/models/ContentModels";
import { ContentRequestModels } from "./entity/models/ContentRequestModels";
import { ContentResponseModels } from "./entity/models/ContentResponseModels";

/**
 * Exposes Content operations through GNNetwork.
 */
export class ContentApi {
	public server: ServerContentApi = new ServerContentApi();

	public admin: AdminContentApi = new AdminContentApi();

	/**
	 * Sends the createNewFileUploadInfo operation and returns the typed response via callback.
	 */
	public createNewFileUploadInfo(requestData: ContentModels.CreateNewFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.CreateNewFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.CreateNewFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.CreateNewFileUploadInfoOperationResponse);
	}

	/**
	 * Sends the createNewFileUploadInfo operation and resolves with the typed response.
	 */
	public async createNewFileUploadInfoAsync(requestData: ContentModels.CreateNewFileUploadInfoRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<ContentResponseModels.CreateNewFileUploadInfoOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.CreateNewFileUploadInfoOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.CreateNewFileUploadInfoOperationResponse);
	}

	/**
	 * Sends the getContentData operation and returns the typed response via callback.
	 */
	public getContentData(requestData: ContentModels.GetContentDataRequestData, onResponse: Action1<ContentResponseModels.GetContentDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.GetContentDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.GetContentDataOperationResponse);
	}

	/**
	 * Sends the getContentData operation and resolves with the typed response.
	 */
	public async getContentDataAsync(requestData: ContentModels.GetContentDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<ContentResponseModels.GetContentDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.GetContentDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.GetContentDataOperationResponse);
	}

	/**
	 * Sends the getFileUploadInfoList operation and returns the typed response via callback.
	 */
	public getFileUploadInfoList(requestData: ContentModels.GetFileUploadInfoListRequestData, onResponse: Action1<ContentResponseModels.GetFileUploadInfoListOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.GetFileUploadInfoListOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.GetFileUploadInfoListOperationResponse);
	}

	/**
	 * Sends the getFileUploadInfoList operation and resolves with the typed response.
	 */
	public async getFileUploadInfoListAsync(requestData: ContentModels.GetFileUploadInfoListRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<ContentResponseModels.GetFileUploadInfoListOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.GetFileUploadInfoListOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.GetFileUploadInfoListOperationResponse);
	}

	/**
	 * Sends the getFileUploadInfo operation and returns the typed response via callback.
	 */
	public getFileUploadInfo(requestData: ContentModels.GetFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.GetFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.GetFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.GetFileUploadInfoOperationResponse);
	}

	/**
	 * Sends the getFileUploadInfo operation and resolves with the typed response.
	 */
	public async getFileUploadInfoAsync(requestData: ContentModels.GetFileUploadInfoRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<ContentResponseModels.GetFileUploadInfoOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.GetFileUploadInfoOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.GetFileUploadInfoOperationResponse);
	}

	/**
	 * Sends the removeFileUploadInfo operation and returns the typed response via callback.
	 */
	public removeFileUploadInfo(requestData: ContentModels.RemoveFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.RemoveFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.RemoveFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.RemoveFileUploadInfoOperationResponse);
	}

	/**
	 * Sends the removeFileUploadInfo operation and resolves with the typed response.
	 */
	public async removeFileUploadInfoAsync(requestData: ContentModels.RemoveFileUploadInfoRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<ContentResponseModels.RemoveFileUploadInfoOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.RemoveFileUploadInfoOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.RemoveFileUploadInfoOperationResponse);
	}

	/**
	 * Sends the requestDownloadFileUploadInfo operation and returns the typed response via callback.
	 */
	public requestDownloadFileUploadInfo(requestData: ContentModels.RequestDownloadFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.RequestDownloadFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse);
	}

	/**
	 * Sends the requestDownloadFileUploadInfo operation and resolves with the typed response.
	 */
	public async requestDownloadFileUploadInfoAsync(requestData: ContentModels.RequestDownloadFileUploadInfoRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.RequestDownloadFileUploadInfoOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse);
	}

	/**
	 * Sends the setContentData operation and returns the typed response via callback.
	 */
	public setContentData(requestData: ContentModels.SetContentDataRequestData, onResponse: Action1<ContentResponseModels.SetContentDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.SetContentDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.SetContentDataOperationResponse);
	}

	/**
	 * Sends the setContentData operation and resolves with the typed response.
	 */
	public async setContentDataAsync(requestData: ContentModels.SetContentDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<ContentResponseModels.SetContentDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.SetContentDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.SetContentDataOperationResponse);
	}

}

/**
 * Groups server-scoped operations exposed by ServerContentApi.
 */
export class ServerContentApi {
	/**
	 * Sends the createNewFileUploadInfo operation and returns the typed response via callback.
	 */
	public createNewFileUploadInfo(requestData: ContentModels.ServerCreateNewFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.CreateNewFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.ServerCreateNewFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.CreateNewFileUploadInfoOperationResponse);
	}

	/**
	 * Sends the createNewFileUploadInfo operation and resolves with the typed response.
	 */
	public async createNewFileUploadInfoAsync(requestData: ContentModels.ServerCreateNewFileUploadInfoRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<ContentResponseModels.CreateNewFileUploadInfoOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.ServerCreateNewFileUploadInfoOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.CreateNewFileUploadInfoOperationResponse);
	}

	/**
	 * Sends the getContentData operation and returns the typed response via callback.
	 */
	public getContentData(requestData: ContentModels.ServerGetContentDataRequestData, onResponse: Action1<ContentResponseModels.GetContentDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.ServerGetContentDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.GetContentDataOperationResponse);
	}

	/**
	 * Sends the getContentData operation and resolves with the typed response.
	 */
	public async getContentDataAsync(requestData: ContentModels.ServerGetContentDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<ContentResponseModels.GetContentDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.ServerGetContentDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.GetContentDataOperationResponse);
	}

	/**
	 * Sends the getFileUploadInfoList operation and returns the typed response via callback.
	 */
	public getFileUploadInfoList(requestData: ContentModels.ServerGetFileUploadInfoListRequestData, onResponse: Action1<ContentResponseModels.GetFileUploadInfoListOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.ServerGetFileUploadInfoListOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.GetFileUploadInfoListOperationResponse);
	}

	/**
	 * Sends the getFileUploadInfoList operation and resolves with the typed response.
	 */
	public async getFileUploadInfoListAsync(requestData: ContentModels.ServerGetFileUploadInfoListRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<ContentResponseModels.GetFileUploadInfoListOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.ServerGetFileUploadInfoListOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.GetFileUploadInfoListOperationResponse);
	}

	/**
	 * Sends the getFileUploadInfo operation and returns the typed response via callback.
	 */
	public getFileUploadInfo(requestData: ContentModels.ServerGetFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.GetFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.ServerGetFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.GetFileUploadInfoOperationResponse);
	}

	/**
	 * Sends the getFileUploadInfo operation and resolves with the typed response.
	 */
	public async getFileUploadInfoAsync(requestData: ContentModels.ServerGetFileUploadInfoRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<ContentResponseModels.GetFileUploadInfoOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.ServerGetFileUploadInfoOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.GetFileUploadInfoOperationResponse);
	}

	/**
	 * Sends the removeFileUploadInfo operation and returns the typed response via callback.
	 */
	public removeFileUploadInfo(requestData: ContentModels.ServerRemoveFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.RemoveFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.ServerRemoveFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.RemoveFileUploadInfoOperationResponse);
	}

	/**
	 * Sends the removeFileUploadInfo operation and resolves with the typed response.
	 */
	public async removeFileUploadInfoAsync(requestData: ContentModels.ServerRemoveFileUploadInfoRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<ContentResponseModels.RemoveFileUploadInfoOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.ServerRemoveFileUploadInfoOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.RemoveFileUploadInfoOperationResponse);
	}

	/**
	 * Sends the requestDownloadFileUploadInfo operation and returns the typed response via callback.
	 */
	public requestDownloadFileUploadInfo(requestData: ContentModels.ServerRequestDownloadFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.ServerRequestDownloadFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse);
	}

	/**
	 * Sends the requestDownloadFileUploadInfo operation and resolves with the typed response.
	 */
	public async requestDownloadFileUploadInfoAsync(requestData: ContentModels.ServerRequestDownloadFileUploadInfoRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.ServerRequestDownloadFileUploadInfoOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse);
	}

	/**
	 * Sends the setContentData operation and returns the typed response via callback.
	 */
	public setContentData(requestData: ContentModels.ServerSetContentDataRequestData, onResponse: Action1<ContentResponseModels.SetContentDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.ServerSetContentDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.SetContentDataOperationResponse);
	}

	/**
	 * Sends the setContentData operation and resolves with the typed response.
	 */
	public async setContentDataAsync(requestData: ContentModels.ServerSetContentDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<ContentResponseModels.SetContentDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.ServerSetContentDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.SetContentDataOperationResponse);
	}

}

/**
 * Groups admin-scoped operations exposed by AdminContentApi.
 */
export class AdminContentApi {
	/**
	 * Sends the createNewFileUploadInfo operation and returns the typed response via callback.
	 */
	public createNewFileUploadInfo(requestData: ContentModels.AdminCreateNewFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.CreateNewFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.AdminCreateNewFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.CreateNewFileUploadInfoOperationResponse);
	}

	/**
	 * Sends the createNewFileUploadInfo operation and resolves with the typed response.
	 */
	public async createNewFileUploadInfoAsync(requestData: ContentModels.AdminCreateNewFileUploadInfoRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<ContentResponseModels.CreateNewFileUploadInfoOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.AdminCreateNewFileUploadInfoOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.CreateNewFileUploadInfoOperationResponse);
	}

	/**
	 * Sends the getContentData operation and returns the typed response via callback.
	 */
	public getContentData(requestData: ContentModels.AdminGetContentDataRequestData, onResponse: Action1<ContentResponseModels.GetContentDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.AdminGetContentDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.GetContentDataOperationResponse);
	}

	/**
	 * Sends the getContentData operation and resolves with the typed response.
	 */
	public async getContentDataAsync(requestData: ContentModels.AdminGetContentDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<ContentResponseModels.GetContentDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.AdminGetContentDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.GetContentDataOperationResponse);
	}

	/**
	 * Sends the getFileUploadInfoList operation and returns the typed response via callback.
	 */
	public getFileUploadInfoList(requestData: ContentModels.AdminGetFileUploadInfoListRequestData, onResponse: Action1<ContentResponseModels.GetFileUploadInfoListOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.AdminGetFileUploadInfoListOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.GetFileUploadInfoListOperationResponse);
	}

	/**
	 * Sends the getFileUploadInfoList operation and resolves with the typed response.
	 */
	public async getFileUploadInfoListAsync(requestData: ContentModels.AdminGetFileUploadInfoListRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<ContentResponseModels.GetFileUploadInfoListOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.AdminGetFileUploadInfoListOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.GetFileUploadInfoListOperationResponse);
	}

	/**
	 * Sends the getFileUploadInfo operation and returns the typed response via callback.
	 */
	public getFileUploadInfo(requestData: ContentModels.AdminGetFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.GetFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.AdminGetFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.GetFileUploadInfoOperationResponse);
	}

	/**
	 * Sends the getFileUploadInfo operation and resolves with the typed response.
	 */
	public async getFileUploadInfoAsync(requestData: ContentModels.AdminGetFileUploadInfoRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<ContentResponseModels.GetFileUploadInfoOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.AdminGetFileUploadInfoOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.GetFileUploadInfoOperationResponse);
	}

	/**
	 * Sends the removeFileUploadInfo operation and returns the typed response via callback.
	 */
	public removeFileUploadInfo(requestData: ContentModels.AdminRemoveFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.RemoveFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.AdminRemoveFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.RemoveFileUploadInfoOperationResponse);
	}

	/**
	 * Sends the removeFileUploadInfo operation and resolves with the typed response.
	 */
	public async removeFileUploadInfoAsync(requestData: ContentModels.AdminRemoveFileUploadInfoRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<ContentResponseModels.RemoveFileUploadInfoOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.AdminRemoveFileUploadInfoOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.RemoveFileUploadInfoOperationResponse);
	}

	/**
	 * Sends the requestDownloadFileUploadInfo operation and returns the typed response via callback.
	 */
	public requestDownloadFileUploadInfo(requestData: ContentModels.AdminRequestDownloadFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.AdminRequestDownloadFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse);
	}

	/**
	 * Sends the requestDownloadFileUploadInfo operation and resolves with the typed response.
	 */
	public async requestDownloadFileUploadInfoAsync(requestData: ContentModels.AdminRequestDownloadFileUploadInfoRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.AdminRequestDownloadFileUploadInfoOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse);
	}

	/**
	 * Sends the setContentData operation and returns the typed response via callback.
	 */
	public setContentData(requestData: ContentModels.AdminSetContentDataRequestData, onResponse: Action1<ContentResponseModels.SetContentDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.AdminSetContentDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.SetContentDataOperationResponse);
	}

	/**
	 * Sends the setContentData operation and resolves with the typed response.
	 */
	public async setContentDataAsync(requestData: ContentModels.AdminSetContentDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<ContentResponseModels.SetContentDataOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.AdminSetContentDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.SetContentDataOperationResponse);
	}

}
