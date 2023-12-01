import { GNNetwork } from "./GNNetwork";
import { Action1 } from "./common/Action1";
import { GNHashtable } from "./common/GNData";
import { OperationRequest } from "./entity/OperationRequest";
import { MultiplayerModels } from "./entity/models/MultiplayerModels";
import { MultiplayerRequestModels } from "./entity/models/MultiplayerRequestModels";
import { MultiplayerResponseModels } from "./entity/models/MultiplayerResponseModels";

export class MultiplayerApi {
	public server: ServerMultiplayerApi = new ServerMultiplayerApi();

	public admin: AdminMultiplayerApi = new AdminMultiplayerApi();

	public cancelAllMatchmakingTicket(requestData: MultiplayerModels.CancelAllMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.CancelAllMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.CancelAllMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.CancelAllMatchmakingTicketOperationResponse);
	}

	public async cancelAllMatchmakingTicketAsync(requestData: MultiplayerModels.CancelAllMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MultiplayerResponseModels.CancelAllMatchmakingTicketOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.CancelAllMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.CancelAllMatchmakingTicketOperationResponse);
	}

	public cancelMatchmakingTicket(requestData: MultiplayerModels.CancelMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.CancelMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.CancelMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.CancelMatchmakingTicketOperationResponse);
	}

	public async cancelMatchmakingTicketAsync(requestData: MultiplayerModels.CancelMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MultiplayerResponseModels.CancelMatchmakingTicketOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.CancelMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.CancelMatchmakingTicketOperationResponse);
	}

	public createMatchmakingTicket(requestData: MultiplayerModels.CreateMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.CreateMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.CreateMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.CreateMatchmakingTicketOperationResponse);
	}

	public async createMatchmakingTicketAsync(requestData: MultiplayerModels.CreateMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MultiplayerResponseModels.CreateMatchmakingTicketOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.CreateMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.CreateMatchmakingTicketOperationResponse);
	}

	public getMatchmakingTicket(requestData: MultiplayerModels.GetMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.GetMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.GetMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.GetMatchmakingTicketOperationResponse);
	}

	public async getMatchmakingTicketAsync(requestData: MultiplayerModels.GetMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MultiplayerResponseModels.GetMatchmakingTicketOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.GetMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.GetMatchmakingTicketOperationResponse);
	}

	public getMatch(requestData: MultiplayerModels.GetMatchRequestData, onResponse: Action1<MultiplayerResponseModels.GetMatchOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.GetMatchOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.GetMatchOperationResponse);
	}

	public async getMatchAsync(requestData: MultiplayerModels.GetMatchRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MultiplayerResponseModels.GetMatchOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.GetMatchOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.GetMatchOperationResponse);
	}

	public getQueueStatistics(requestData: MultiplayerModels.GetQueueStatisticsRequestData, onResponse: Action1<MultiplayerResponseModels.GetQueueStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.GetQueueStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.GetQueueStatisticsOperationResponse);
	}

	public async getQueueStatisticsAsync(requestData: MultiplayerModels.GetQueueStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MultiplayerResponseModels.GetQueueStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.GetQueueStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.GetQueueStatisticsOperationResponse);
	}

	public joinMatchmakingTicket(requestData: MultiplayerModels.JoinMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.JoinMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.JoinMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.JoinMatchmakingTicketOperationResponse);
	}

	public async joinMatchmakingTicketAsync(requestData: MultiplayerModels.JoinMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MultiplayerResponseModels.JoinMatchmakingTicketOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.JoinMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.JoinMatchmakingTicketOperationResponse);
	}

	public listMatchmakingTicketsForPlayer(requestData: MultiplayerModels.ListMatchmakingTicketsForPlayerRequestData, onResponse: Action1<MultiplayerResponseModels.ListMatchmakingTicketsForPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.ListMatchmakingTicketsForPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.ListMatchmakingTicketsForPlayerOperationResponse);
	}

	public async listMatchmakingTicketsForPlayerAsync(requestData: MultiplayerModels.ListMatchmakingTicketsForPlayerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MultiplayerResponseModels.ListMatchmakingTicketsForPlayerOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.ListMatchmakingTicketsForPlayerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.ListMatchmakingTicketsForPlayerOperationResponse);
	}

	public getAllMatch(requestData: MultiplayerModels.GetAllMatchRequestData, onResponse: Action1<MultiplayerResponseModels.GetAllMatchOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.GetAllMatchOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.GetAllMatchOperationResponse);
	}

	public async getAllMatchAsync(requestData: MultiplayerModels.GetAllMatchRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MultiplayerResponseModels.GetAllMatchOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.GetAllMatchOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.GetAllMatchOperationResponse);
	}

	public getAllMatchmakingTicket(requestData: MultiplayerModels.GetAllMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.GetAllMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.GetAllMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.GetAllMatchmakingTicketOperationResponse);
	}

	public async getAllMatchmakingTicketAsync(requestData: MultiplayerModels.GetAllMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MultiplayerResponseModels.GetAllMatchmakingTicketOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.GetAllMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.GetAllMatchmakingTicketOperationResponse);
	}

}

export class ServerMultiplayerApi {
	public cancelAllMatchmakingTicket(requestData: MultiplayerModels.ServerCancelAllMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.CancelAllMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.ServerCancelAllMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.CancelAllMatchmakingTicketOperationResponse);
	}

	public async cancelAllMatchmakingTicketAsync(requestData: MultiplayerModels.ServerCancelAllMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MultiplayerResponseModels.CancelAllMatchmakingTicketOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.ServerCancelAllMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.CancelAllMatchmakingTicketOperationResponse);
	}

	public cancelMatchmakingTicket(requestData: MultiplayerModels.ServerCancelMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.CancelMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.ServerCancelMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.CancelMatchmakingTicketOperationResponse);
	}

	public async cancelMatchmakingTicketAsync(requestData: MultiplayerModels.ServerCancelMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MultiplayerResponseModels.CancelMatchmakingTicketOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.ServerCancelMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.CancelMatchmakingTicketOperationResponse);
	}

	public createMatchmakingTicket(requestData: MultiplayerModels.ServerCreateMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.CreateMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.ServerCreateMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.CreateMatchmakingTicketOperationResponse);
	}

	public async createMatchmakingTicketAsync(requestData: MultiplayerModels.ServerCreateMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MultiplayerResponseModels.CreateMatchmakingTicketOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.ServerCreateMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.CreateMatchmakingTicketOperationResponse);
	}

	public getMatchmakingTicket(requestData: MultiplayerModels.ServerGetMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.GetMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.ServerGetMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.GetMatchmakingTicketOperationResponse);
	}

	public async getMatchmakingTicketAsync(requestData: MultiplayerModels.ServerGetMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MultiplayerResponseModels.GetMatchmakingTicketOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.ServerGetMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.GetMatchmakingTicketOperationResponse);
	}

	public getMatch(requestData: MultiplayerModels.ServerGetMatchRequestData, onResponse: Action1<MultiplayerResponseModels.GetMatchOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.ServerGetMatchOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.GetMatchOperationResponse);
	}

	public async getMatchAsync(requestData: MultiplayerModels.ServerGetMatchRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MultiplayerResponseModels.GetMatchOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.ServerGetMatchOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.GetMatchOperationResponse);
	}

	public getQueueStatistics(requestData: MultiplayerModels.ServerGetQueueStatisticsRequestData, onResponse: Action1<MultiplayerResponseModels.GetQueueStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.ServerGetQueueStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.GetQueueStatisticsOperationResponse);
	}

	public async getQueueStatisticsAsync(requestData: MultiplayerModels.ServerGetQueueStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MultiplayerResponseModels.GetQueueStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.ServerGetQueueStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.GetQueueStatisticsOperationResponse);
	}

	public joinMatchmakingTicket(requestData: MultiplayerModels.ServerJoinMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.JoinMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.ServerJoinMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.JoinMatchmakingTicketOperationResponse);
	}

	public async joinMatchmakingTicketAsync(requestData: MultiplayerModels.ServerJoinMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MultiplayerResponseModels.JoinMatchmakingTicketOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.ServerJoinMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.JoinMatchmakingTicketOperationResponse);
	}

	public listMatchmakingTicketsForPlayer(requestData: MultiplayerModels.ServerListMatchmakingTicketsForPlayerRequestData, onResponse: Action1<MultiplayerResponseModels.ListMatchmakingTicketsForPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.ServerListMatchmakingTicketsForPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.ListMatchmakingTicketsForPlayerOperationResponse);
	}

	public async listMatchmakingTicketsForPlayerAsync(requestData: MultiplayerModels.ServerListMatchmakingTicketsForPlayerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MultiplayerResponseModels.ListMatchmakingTicketsForPlayerOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.ServerListMatchmakingTicketsForPlayerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.ListMatchmakingTicketsForPlayerOperationResponse);
	}

	public getAllMatch(requestData: MultiplayerModels.ServerGetAllMatchRequestData, onResponse: Action1<MultiplayerResponseModels.GetAllMatchOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.ServerGetAllMatchOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.GetAllMatchOperationResponse);
	}

	public async getAllMatchAsync(requestData: MultiplayerModels.ServerGetAllMatchRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MultiplayerResponseModels.GetAllMatchOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.ServerGetAllMatchOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.GetAllMatchOperationResponse);
	}

	public getAllMatchmakingTicket(requestData: MultiplayerModels.ServerGetAllMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.GetAllMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.ServerGetAllMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.GetAllMatchmakingTicketOperationResponse);
	}

	public async getAllMatchmakingTicketAsync(requestData: MultiplayerModels.ServerGetAllMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MultiplayerResponseModels.GetAllMatchmakingTicketOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.ServerGetAllMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.GetAllMatchmakingTicketOperationResponse);
	}

}

export class AdminMultiplayerApi {
	public cancelAllMatchmakingTicket(requestData: MultiplayerModels.AdminCancelAllMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.CancelAllMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.AdminCancelAllMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.CancelAllMatchmakingTicketOperationResponse);
	}

	public async cancelAllMatchmakingTicketAsync(requestData: MultiplayerModels.AdminCancelAllMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MultiplayerResponseModels.CancelAllMatchmakingTicketOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.AdminCancelAllMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.CancelAllMatchmakingTicketOperationResponse);
	}

	public cancelMatchmakingTicket(requestData: MultiplayerModels.AdminCancelMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.CancelMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.AdminCancelMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.CancelMatchmakingTicketOperationResponse);
	}

	public async cancelMatchmakingTicketAsync(requestData: MultiplayerModels.AdminCancelMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MultiplayerResponseModels.CancelMatchmakingTicketOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.AdminCancelMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.CancelMatchmakingTicketOperationResponse);
	}

	public createMatchmakingTicket(requestData: MultiplayerModels.AdminCreateMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.CreateMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.AdminCreateMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.CreateMatchmakingTicketOperationResponse);
	}

	public async createMatchmakingTicketAsync(requestData: MultiplayerModels.AdminCreateMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MultiplayerResponseModels.CreateMatchmakingTicketOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.AdminCreateMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.CreateMatchmakingTicketOperationResponse);
	}

	public getMatchmakingTicket(requestData: MultiplayerModels.AdminGetMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.GetMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.AdminGetMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.GetMatchmakingTicketOperationResponse);
	}

	public async getMatchmakingTicketAsync(requestData: MultiplayerModels.AdminGetMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MultiplayerResponseModels.GetMatchmakingTicketOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.AdminGetMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.GetMatchmakingTicketOperationResponse);
	}

	public getMatch(requestData: MultiplayerModels.AdminGetMatchRequestData, onResponse: Action1<MultiplayerResponseModels.GetMatchOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.AdminGetMatchOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.GetMatchOperationResponse);
	}

	public async getMatchAsync(requestData: MultiplayerModels.AdminGetMatchRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MultiplayerResponseModels.GetMatchOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.AdminGetMatchOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.GetMatchOperationResponse);
	}

	public getQueueStatistics(requestData: MultiplayerModels.AdminGetQueueStatisticsRequestData, onResponse: Action1<MultiplayerResponseModels.GetQueueStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.AdminGetQueueStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.GetQueueStatisticsOperationResponse);
	}

	public async getQueueStatisticsAsync(requestData: MultiplayerModels.AdminGetQueueStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MultiplayerResponseModels.GetQueueStatisticsOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.AdminGetQueueStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.GetQueueStatisticsOperationResponse);
	}

	public joinMatchmakingTicket(requestData: MultiplayerModels.AdminJoinMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.JoinMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.AdminJoinMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.JoinMatchmakingTicketOperationResponse);
	}

	public async joinMatchmakingTicketAsync(requestData: MultiplayerModels.AdminJoinMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MultiplayerResponseModels.JoinMatchmakingTicketOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.AdminJoinMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.JoinMatchmakingTicketOperationResponse);
	}

	public listMatchmakingTicketsForPlayer(requestData: MultiplayerModels.AdminListMatchmakingTicketsForPlayerRequestData, onResponse: Action1<MultiplayerResponseModels.ListMatchmakingTicketsForPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.AdminListMatchmakingTicketsForPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.ListMatchmakingTicketsForPlayerOperationResponse);
	}

	public async listMatchmakingTicketsForPlayerAsync(requestData: MultiplayerModels.AdminListMatchmakingTicketsForPlayerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MultiplayerResponseModels.ListMatchmakingTicketsForPlayerOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.AdminListMatchmakingTicketsForPlayerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.ListMatchmakingTicketsForPlayerOperationResponse);
	}

	public getAllMatch(requestData: MultiplayerModels.AdminGetAllMatchRequestData, onResponse: Action1<MultiplayerResponseModels.GetAllMatchOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.AdminGetAllMatchOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.GetAllMatchOperationResponse);
	}

	public async getAllMatchAsync(requestData: MultiplayerModels.AdminGetAllMatchRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MultiplayerResponseModels.GetAllMatchOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.AdminGetAllMatchOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.GetAllMatchOperationResponse);
	}

	public getAllMatchmakingTicket(requestData: MultiplayerModels.AdminGetAllMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.GetAllMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
		GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.AdminGetAllMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.GetAllMatchmakingTicketOperationResponse);
	}

	public async getAllMatchmakingTicketAsync(requestData: MultiplayerModels.AdminGetAllMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<MultiplayerResponseModels.GetAllMatchmakingTicketOperationResponse> {
		return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.AdminGetAllMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, MultiplayerResponseModels.GetAllMatchmakingTicketOperationResponse);
	}

}
