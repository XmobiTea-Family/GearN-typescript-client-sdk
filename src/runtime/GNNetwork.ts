const VERSION: string = "2.6";

import { Action0 } from "./common/Action0";
import { Action1 } from "./common/Action1";
import { GNArray, GNHashtable } from "./common/GNData";
import { GNServerSettings } from "./config/GNServerSettings";
import { OperationRequest } from "./entity/OperationRequest";
import { OperationResponse } from "./entity/OperationResponse";
import { GNDebug } from "./logger/GNDebug";
import { GNSupport } from "./helper/GNSupport";
import { IServerEventHandler } from "./networking/handler/IServerEventHandler";
import { NetworkingPeer } from "./networking/NetworkingPeer";
import { CodeHelper } from "./helper/CodeHelper";
import store from "store";
import { OperationEvent } from "./entity/OperationEvent";
import { AuthenticateStatus } from "./networking/AuthenticateStatus";
import { RequestType } from "./constant/enumType/RequestType";
import { RequestRole } from "./constant/enumType/RequestRole";
import { CustomOperationRequest } from "./entity/request/CustomOperationRequest";
import { CustomOperationResponse } from "./entity/response/CustomOperationResponse";
import { ServiceUpdate } from "./typescript/ServiceUpdate";
import { Constructor } from "./entity/GNMetadata";
import { AuthenticateApi } from "./GNNetworkAuthenticateApi";
import { CharacterPlayerApi } from "./GNNetworkCharacterPlayerApi";
import { ContentApi } from "./GNNetworkContentApi";
import { DashboardApi } from "./GNNetworkDashboardApi";
import { GamePlayerApi } from "./GNNetworkGamePlayerApi";
import { GroupApi } from "./GNNetworkGroupApi";
import { InventoryApi } from "./GNNetworkInventoryApi";
import { MasterPlayerApi } from "./GNNetworkMasterPlayerApi";
import { StoreInventoryApi } from "./GNNetworkStoreInventoryApi";
import { ConverterService } from "./helper/ConverterService";
import { MultiplayerApi } from "./GNNetworkMultiplayerApi";
import { CloudScriptApi } from "./GNNetworkCloudScriptApi";
import { GetAuthInfoResponse } from "./entity/response/GetAuthInfoResponse";
import { UploadFileResponse } from "./entity/response/UploadFileResponse";
import { HealthCheckResponse } from "./entity/response/HealthCheckResponse";

export class GNNetwork {

	static readonly AUTH_TOKEN_KEY = "[GearN]_AUTH_TOKEN_KEY";
	static readonly USER_ID_KEY = "[GearN]_USER_ID_KEY";
	static readonly GAME_ID_KEY = "[GearN]_GAME_ID_KEY";

	private static gnServerSettings: GNServerSettings;
	public static getGNServerSettings(): GNServerSettings {
		return GNNetwork.gnServerSettings;
	}

	static peer: NetworkingPeer;

	public static getPing(): number {
		return GNNetwork.peer != null ? GNNetwork.peer.getPing() : -1;
	}

	public static getSocketSId(): string {
		return GNNetwork.peer != null ? GNNetwork.peer.getClientId() : "";
	}

	public static sendRequestAuthSocket(): void {
		return GNNetwork.peer.sendRequestAuthSocket();
	}

	public static isSocketConnected(): boolean {
		let socketSId = GNNetwork.getSocketSId();

		if (socketSId) return true;
		return false;
	}

	public static getServerTimestamp(): number {
		return GNNetwork.peer != null ? GNNetwork.peer.getServerTimestamp() : new Date().getUTCMilliseconds();
	}

	public static getAuthenticateStatus(): AuthenticateStatus {
		return GNNetwork.peer.authenticateStatus;
	}

	public static getGameId(): string {
		return GNNetwork.peer.gameId;
	}

	public static getPlatform(): number {
		return 17;
	}

	public static authenticate: AuthenticateApi;
	public static characterPlayer: CharacterPlayerApi;
	public static content: ContentApi;
	public static dashboard: DashboardApi;
	public static gamePlayer: GamePlayerApi;
	public static group: GroupApi;
	public static inventory: InventoryApi;
	public static masterPlayer: MasterPlayerApi;
	public static storeInventory: StoreInventoryApi;
	public static multiplayer: MultiplayerApi;
	public static cloudScript: CloudScriptApi;

	public static init(gnServerSettings: GNServerSettings): void {
		if (GNNetwork.gnServerSettings != null) {
			GNDebug.log("GNNetwork has been init!");

			return;
		}

		GNSupport.init();
		CodeHelper.init();
		ConverterService.init();

		GNNetwork.gnServerSettings = gnServerSettings;

		GNNetwork.initServerSettings();
		GNNetwork.initGNDebug();

		GNDebug.log("GNNetwork init on " + (GNSupport.isBrowser() ? "browser." : "server.") + " Version: " + GNNetwork.getClientSdkVersion());

		GNNetwork.initGNSocketObject();

		GNNetwork.peer.authenticateStatus.setAuthToken(store.get(GNNetwork.AUTH_TOKEN_KEY, ""));
		GNNetwork.peer.authenticateStatus.setUserId(store.get(GNNetwork.USER_ID_KEY, ""));
		GNNetwork.peer.gameId = store.get(GNNetwork.GAME_ID_KEY, "");

		GNNetwork.authenticate = new AuthenticateApi();
		GNNetwork.characterPlayer = new CharacterPlayerApi();
		GNNetwork.content = new ContentApi();
		GNNetwork.dashboard = new DashboardApi();
		GNNetwork.gamePlayer = new GamePlayerApi();
		GNNetwork.group = new GroupApi();
		GNNetwork.inventory = new InventoryApi();
		GNNetwork.masterPlayer = new MasterPlayerApi();
		GNNetwork.storeInventory = new StoreInventoryApi();
		GNNetwork.multiplayer = new MultiplayerApi();
		GNNetwork.cloudScript = new CloudScriptApi();
	}

	public static setNewAuthenticateStatus(authenticateStatus: AuthenticateStatus) {
		store.set(GNNetwork.AUTH_TOKEN_KEY, authenticateStatus.getAuthToken());
		store.set(GNNetwork.USER_ID_KEY, authenticateStatus.getUserId());

		GNNetwork.peer.authenticateStatus.setAuthToken(authenticateStatus.getAuthToken());
		GNNetwork.peer.authenticateStatus.setUserId(authenticateStatus.getUserId());
	}

	public static setGameId(gameId: string) {
		store.set(GNNetwork.GAME_ID_KEY, gameId);

		GNNetwork.peer.gameId = gameId;
	}

	public static getClientSdkVersion(): string {
		return VERSION;
	}

	private static initServerSettings(): void {
		//         gnServerSettings = Resources.Load(GNServerSettings.ResourcesPath) as GNServerSettings;
		//         if (gnServerSettings == null)
		//         {
		// #if UNITY_EDITOR
		//             UnityEditor.EditorApplication.ExecuteMenuItem("XmobiTea GN/Open Settings");
		//             gnServerSettings = Resources.Load(GNServerSettings.ResourcesPath) as GNServerSettings;
		//             if (gnServerSettings == null) throw new NullReferenceException("Null GN Server Settings, please find it now");
		// #endif
		//         }
	}

	private static initGNDebug(): void {
		if (GNNetwork.gnServerSettings == null)
			throw new Error("Null GN Server Settings, please find it now");

		GNDebug.setLogType(GNNetwork.gnServerSettings.getLogType());
	}

	private static initGNSocketObject(): void {
		let peer = new NetworkingPeer();

		peer.initPeer();

		GNNetwork.peer = peer;

		let serviceUpdate = new ServiceUpdate();
		serviceUpdate.peer = peer;

		serviceUpdate.run();
	}

	public static sendViaSocket(requestType: RequestType, role: RequestRole, request: OperationRequest, onResponse: Action1<OperationResponse>, overrideAuthToken: string, overrideSecretKey: string, customTags: GNHashtable): void {
		GNNetwork.peer.sendViaSocket(requestType, role, request, onResponse, overrideAuthToken, overrideSecretKey, customTags);
	}

	public static async sendViaSocketAsync(requestType: RequestType, role: RequestRole, request: OperationRequest, overrideAuthToken: string, overrideSecretKey: string, customTags: GNHashtable): Promise<OperationResponse> {
		return new Promise((resolve) => {
			GNNetwork.sendViaSocket(requestType, role, request,
				(response: OperationResponse) => {
					resolve(response);
				}, overrideAuthToken, overrideSecretKey, customTags
			);
		});
	}

	public static sendViaHttp(requestType: RequestType, role: RequestRole, request: OperationRequest, onResponse: Action1<OperationResponse>, overrideAuthToken: string, overrideSecretKey: string, customTags: GNHashtable): void {
		GNNetwork.peer.sendViaHttp(requestType, role, request, onResponse, overrideAuthToken, overrideSecretKey, customTags);
	}

	public static async sendViaHttpAsync(requestType: RequestType, role: RequestRole, request: OperationRequest, overrideAuthToken: string, overrideSecretKey: string, customTags: GNHashtable): Promise<OperationResponse> {
		return new Promise((resolve) => {
			GNNetwork.sendViaHttp(requestType, role, request,
				(response: OperationResponse) => {
					resolve(response);
				}, overrideAuthToken, overrideSecretKey, customTags
			);
		});
	}

	public static sendViaSocketTRequestTResponse<TRequest extends CustomOperationRequest, TResponse extends CustomOperationResponse>(request: TRequest, onResponse: Action1<TResponse> = null, overrideAuthToken: string, overrideSecretKey: string, customTags: GNHashtable, customOperationResponseCls: Constructor<TResponse>): void {
		GNNetwork.sendViaSocketTResponse(request.getRequestType(), request.getRole(), request.build(), onResponse, overrideAuthToken, overrideSecretKey, customTags, customOperationResponseCls);
	}

	public static async sendViaSocketTRequestTResponseAsync<TRequest extends CustomOperationRequest, TResponse extends CustomOperationResponse>(request: TRequest, overrideAuthToken: string, overrideSecretKey: string, customTags: GNHashtable, customOperationResponseCls: Constructor<TResponse>): Promise<TResponse> {
		return new Promise((resolve) => {
			GNNetwork.sendViaSocketTRequestTResponse(request,
				(response: TResponse) => {
					resolve(response);
				}, overrideAuthToken, overrideSecretKey, customTags, customOperationResponseCls);
		});
	}

	public static sendViaHttpTRequestTResponse<TRequest extends CustomOperationRequest, TResponse extends CustomOperationResponse>(request: TRequest, onResponse: Action1<TResponse> = null, overrideAuthToken: string, overrideSecretKey: string, customTags: GNHashtable, customOperationResponseCls: Constructor<TResponse>): void {
		GNNetwork.sendViaHttpTResponse(request.getRequestType(), request.getRole(), request.build(), onResponse, overrideAuthToken, overrideSecretKey, customTags, customOperationResponseCls);
	}

	public static async sendViaHttpTRequestTResponseAsync<TRequest extends CustomOperationRequest, TResponse extends CustomOperationResponse>(request: TRequest, overrideAuthToken: string, overrideSecretKey: string, customTags: GNHashtable, customOperationResponseCls: Constructor<TResponse>): Promise<TResponse> {
		return new Promise((resolve) => {
			GNNetwork.sendViaHttpTRequestTResponse(request,
				(response: TResponse) => {
					resolve(response);
				}, overrideAuthToken, overrideSecretKey, customTags, customOperationResponseCls);
		});
	}

	public static sendViaSocketTResponse<TResponse extends CustomOperationResponse>(requestType: RequestType, role: RequestRole, request: OperationRequest, onResponse: Action1<TResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, customOperationResponseCls: Constructor<TResponse>): void {
		GNNetwork.sendViaSocket(requestType, role, request, response => {
			if (response == null) return;

			let customOperationResponse = new customOperationResponseCls();
			customOperationResponse.setupOperationResponse(response);

			if (onResponse != null) onResponse(customOperationResponse);
		}, overrideAuthToken, overrideSecretKey, customTags);
	}

	public static async sendViaSocketTResponseAsync<TResponse extends CustomOperationResponse>(requestType: RequestType, role: RequestRole, request: OperationRequest, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, customOperationResponseCls: Constructor<TResponse>): Promise<TResponse> {
		return new Promise((resolve) => {
			GNNetwork.sendViaSocketTResponse(requestType, role, request,
				(response: TResponse) => {
					resolve(response);
				}, overrideAuthToken, overrideSecretKey, customTags, customOperationResponseCls);
		});
	}

	public static sendViaHttpTResponse<TResponse extends CustomOperationResponse>(requestType: RequestType, role: RequestRole, request: OperationRequest, onResponse: Action1<TResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, customOperationResponseCls: Constructor<TResponse>): void {
		GNNetwork.sendViaHttp(requestType, role, request, response => {
			if (response == null) return;

			let customOperationResponse = new customOperationResponseCls();
			customOperationResponse.setupOperationResponse(response);

			if (onResponse != null) onResponse(customOperationResponse);
		}, overrideAuthToken, overrideSecretKey, customTags);
	}

	public static async sendViaHttpTResponseAsync<TResponse extends CustomOperationResponse>(requestType: RequestType, role: RequestRole, request: OperationRequest, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, customOperationResponseCls: Constructor<TResponse>): Promise<TResponse> {
		return new Promise((resolve) => {
			GNNetwork.sendViaHttpTResponse(requestType, role, request,
				(response: TResponse) => {
					resolve(response);
				}, overrideAuthToken, overrideSecretKey, customTags, customOperationResponseCls);
		});
	}

	public static connectSocket(_onSocketConnect: Action0 = null): void {
		GNNetwork.peer.connectSocket(_onSocketConnect);
	}

	public static disconnectSocket(_onSocketDisconnect: Action0 = null): void {
		GNNetwork.peer.disconnectSocket(_onSocketDisconnect);
	}

	public static setOnEventHandler(_onEventHandler: Action1<OperationEvent>): void {
		GNNetwork.peer.setOnEventHandler(_onEventHandler);
	}

	public static subscriberOnConnectHandler(_onConnectHandler: Action0): void {
		GNNetwork.peer.setOnConnectHandler(_onConnectHandler);
	}

	public static subscriberOnDisconnectHandler(_onDisconnectHandler: Action0): void {
		GNNetwork.peer.setOnDisconnectHandler(_onDisconnectHandler);
	}

	public static unscriberOnConnectHandler(_onConnectHandler: Action0): void {
		GNNetwork.peer.removeOnConnectHandler(_onConnectHandler);
	}

	public static unsubscriberOnDisconnectHandler(_onDisconnectHandler: Action0): void {
		GNNetwork.peer.removeOnDisconnectHandler(_onDisconnectHandler);
	}

	public static subscriberServerEventHandler(serverEventHandler: IServerEventHandler): void {
		GNNetwork.peer.subscriberServerEventHandler(serverEventHandler);
	}

	public static syncTs(onResponse: Action1<number> = null): void {
		GNNetwork.peer.syncTs(onResponse);
	}

	public static syncTsAsync(): Promise<number> {
		return new Promise((resolve) => {
			GNNetwork.syncTs((response: number) => {
				resolve(response);
			});
		});
	}

	public static getAuthInfo(authToken: string, onResponse: Action1<GetAuthInfoResponse> = null): void {
		GNNetwork.peer.getAuthInfo(authToken, onResponse);
	}

	public static getAuthInfoAsync(authToken: string): Promise<GetAuthInfoResponse> {
		return new Promise((resolve) => {
			GNNetwork.getAuthInfo(authToken, (response: GetAuthInfoResponse) => {
				resolve(response);
			});
		});
	}

	public static healthCheck(onResponse: Action1<HealthCheckResponse> = null): void {
		GNNetwork.peer.healthCheck(onResponse);
	}

	public static healthCheckAsync(): Promise<HealthCheckResponse> {
		return new Promise((resolve) => {
			GNNetwork.healthCheck((response: HealthCheckResponse) => {
				resolve(response);
			});
		});
	}

	public static uploadFile(fileId: string, content: Uint8Array, filename: string, mimetype: string, onResponse: Action1<UploadFileResponse> = null): void {
		GNNetwork.peer.uploadFile(fileId, content, filename, mimetype, onResponse);
	}

	public static uploadFileAsync(fileId: string, content: Uint8Array, filename: string, mimetype: string): Promise<UploadFileResponse> {
		return new Promise((resolve) => {
			GNNetwork.uploadFile(fileId, content, filename, mimetype, (response: UploadFileResponse) => {
				resolve(response);
			});
		});
	}

	public static getDownloadFileUrl(downloadToken: string): string {
		return GNNetwork.gnServerSettings.getHttpUrl() + "/" + NetworkingPeer.DOWNLOAD_FILE + "/" + downloadToken;
	}

}
