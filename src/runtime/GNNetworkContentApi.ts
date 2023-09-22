import { GNNetwork } from "./GNNetwork";
import { Action1 } from "./common/Action1";
import { GNHashtable } from "./common/GNData";
import { OperationRequest } from "./entity/OperationRequest";
import { ContentModels } from "./entity/models/ContentModels";
import { ContentRequestModels } from "./entity/models/ContentRequestModels";
import { ContentResponseModels } from "./entity/models/ContentResponseModels";

export class ContentApi {
	public server: ServerContentApi = new ServerContentApi();

	public admin: AdminContentApi = new AdminContentApi();

	public createNewFileUploadInfo(requestData: ContentModels.CreateNewFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.CreateNewFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new ContentRequestModels.CreateNewFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.CreateNewFileUploadInfoOperationResponse);
	}

	public getContentData(requestData: ContentModels.GetContentDataRequestData, onResponse: Action1<ContentResponseModels.GetContentDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new ContentRequestModels.GetContentDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.GetContentDataOperationResponse);
	}

	public getFileUploadInfoList(requestData: ContentModels.GetFileUploadInfoListRequestData, onResponse: Action1<ContentResponseModels.GetFileUploadInfoListOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new ContentRequestModels.GetFileUploadInfoListOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.GetFileUploadInfoListOperationResponse);
	}

	public getFileUploadInfo(requestData: ContentModels.GetFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.GetFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new ContentRequestModels.GetFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.GetFileUploadInfoOperationResponse);
	}

	public removeFileUploadInfo(requestData: ContentModels.RemoveFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.RemoveFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new ContentRequestModels.RemoveFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.RemoveFileUploadInfoOperationResponse);
	}

	public requestDownloadFileUploadInfo(requestData: ContentModels.RequestDownloadFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new ContentRequestModels.RequestDownloadFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse);
	}

	public setContentData(requestData: ContentModels.SetContentDataRequestData, onResponse: Action1<ContentResponseModels.SetContentDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new ContentRequestModels.SetContentDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.SetContentDataOperationResponse);
	}

}

export class ServerContentApi {
	public createNewFileUploadInfo(requestData: ContentModels.ServerCreateNewFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.CreateNewFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new ContentRequestModels.ServerCreateNewFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.CreateNewFileUploadInfoOperationResponse);
	}

	public getContentData(requestData: ContentModels.ServerGetContentDataRequestData, onResponse: Action1<ContentResponseModels.GetContentDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new ContentRequestModels.ServerGetContentDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.GetContentDataOperationResponse);
	}

	public getFileUploadInfoList(requestData: ContentModels.ServerGetFileUploadInfoListRequestData, onResponse: Action1<ContentResponseModels.GetFileUploadInfoListOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new ContentRequestModels.ServerGetFileUploadInfoListOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.GetFileUploadInfoListOperationResponse);
	}

	public getFileUploadInfo(requestData: ContentModels.ServerGetFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.GetFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new ContentRequestModels.ServerGetFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.GetFileUploadInfoOperationResponse);
	}

	public removeFileUploadInfo(requestData: ContentModels.ServerRemoveFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.RemoveFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new ContentRequestModels.ServerRemoveFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.RemoveFileUploadInfoOperationResponse);
	}

	public requestDownloadFileUploadInfo(requestData: ContentModels.ServerRequestDownloadFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new ContentRequestModels.ServerRequestDownloadFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse);
	}

	public setContentData(requestData: ContentModels.ServerSetContentDataRequestData, onResponse: Action1<ContentResponseModels.SetContentDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new ContentRequestModels.ServerSetContentDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.SetContentDataOperationResponse);
	}

}

export class AdminContentApi {
	public createNewFileUploadInfo(requestData: ContentModels.AdminCreateNewFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.CreateNewFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new ContentRequestModels.AdminCreateNewFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.CreateNewFileUploadInfoOperationResponse);
	}

	public getContentData(requestData: ContentModels.AdminGetContentDataRequestData, onResponse: Action1<ContentResponseModels.GetContentDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new ContentRequestModels.AdminGetContentDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.GetContentDataOperationResponse);
	}

	public getFileUploadInfoList(requestData: ContentModels.AdminGetFileUploadInfoListRequestData, onResponse: Action1<ContentResponseModels.GetFileUploadInfoListOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new ContentRequestModels.AdminGetFileUploadInfoListOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.GetFileUploadInfoListOperationResponse);
	}

	public getFileUploadInfo(requestData: ContentModels.AdminGetFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.GetFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new ContentRequestModels.AdminGetFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.GetFileUploadInfoOperationResponse);
	}

	public removeFileUploadInfo(requestData: ContentModels.AdminRemoveFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.RemoveFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new ContentRequestModels.AdminRemoveFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.RemoveFileUploadInfoOperationResponse);
	}

	public requestDownloadFileUploadInfo(requestData: ContentModels.AdminRequestDownloadFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new ContentRequestModels.AdminRequestDownloadFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse);
	}

	public setContentData(requestData: ContentModels.AdminSetContentDataRequestData, onResponse: Action1<ContentResponseModels.SetContentDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaSocketTRequestTResponse(new ContentRequestModels.AdminSetContentDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, ContentResponseModels.SetContentDataOperationResponse);
	}

}

