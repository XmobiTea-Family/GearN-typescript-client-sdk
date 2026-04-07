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
import { StorageService } from "./helper/StorageService";
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

/**
 * Provides the single static entry point used by SDK consumers.
 *
 * All public domain APIs are exposed from this class after calling init().
 */
export class GNNetwork {

	/** Stores the persistent storage key for the last known auth token. */
	static readonly AUTH_TOKEN_KEY = "[GearN]_AUTH_TOKEN_KEY";
	/** Stores the persistent storage key for the last known user id. */
	static readonly USER_ID_KEY = "[GearN]_USER_ID_KEY";
	/** Stores the persistent storage key for the active game id. */
	static readonly GAME_ID_KEY = "[GearN]_GAME_ID_KEY";

	private static gnServerSettings: GNServerSettings;

	/**
	 * Returns the shared server settings instance used by the SDK.
	 */
	public static getGNServerSettings(): GNServerSettings {
		return GNNetwork.gnServerSettings;
	}

	/** Owns the low-level HTTP and socket peers used by every API call. */
	static peer: NetworkingPeer;

	/**
	 * Returns the averaged transport latency in milliseconds.
	 */
	public static getPing(): number {
		return GNNetwork.peer != null ? GNNetwork.peer.getPing() : -1;
	}

	/**
	 * Returns the current socket session id.
	 */
	public static getSocketSId(): string {
		return GNNetwork.peer != null ? GNNetwork.peer.getClientId() : "";
	}

	/**
	 * Pushes the cached auth token to the socket channel after connecting.
	 */
	public static sendRequestAuthSocket(): void {
		return GNNetwork.peer.sendRequestAuthSocket();
	}

	/**
	 * Returns whether the socket layer currently has an active session id.
	 */
	public static isSocketConnected(): boolean {
		let socketSId = GNNetwork.getSocketSId();

		if (socketSId) return true;
		return false;
	}

	/**
	 * Returns the locally estimated server timestamp after `init()`,
	 * or a best-effort fallback before the shared peer exists.
	 */
	public static getServerTimestamp(): number {
		return GNNetwork.peer != null ? GNNetwork.peer.getServerTimestamp() : new Date().getUTCMilliseconds();
	}

	/**
	 * Returns the shared authentication state tracked by the networking peer.
	 */
	public static getAuthenticateStatus(): AuthenticateStatus {
		return GNNetwork.peer.authenticateStatus;
	}

	/**
	 * Returns the active game id attached to outgoing requests.
	 */
	public static getGameId(): string {
		return GNNetwork.peer.gameId;
	}

	/**
	 * Returns the current runtime platform detected by GNSupport.
	 */
	public static getPlatform(): string {
		const platform = GNSupport.getPlatformType();

		// if (platform == "browser" || platform == "nodejs") {
		//     return platform;
		// }
		// else if (platform == "cocos") {
		//     if (cc.sys.platform === cc.sys.ANDROID) {
		//         console.log('Running on Android');
		//     } else if (cc.sys.platform === cc.sys.IPHONE) {
		//         console.log('Running on iOS');
		//     } else if (cc.sys.isBrowser) {
		//         console.log('Running in a Web Browser');
		//     }
		// }

		return platform;
	}

	/** Exposes authentication operations. */
	public static authenticate: AuthenticateApi;
	/** Exposes character player operations. */
	public static characterPlayer: CharacterPlayerApi;
	/** Exposes content operations. */
	public static content: ContentApi;
	/** Exposes dashboard operations. */
	public static dashboard: DashboardApi;
	/** Exposes game player operations. */
	public static gamePlayer: GamePlayerApi;
	/** Exposes group operations. */
	public static group: GroupApi;
	/** Exposes inventory operations. */
	public static inventory: InventoryApi;
	/** Exposes master player operations. */
	public static masterPlayer: MasterPlayerApi;
	/** Exposes store inventory operations. */
	public static storeInventory: StoreInventoryApi;
	/** Exposes multiplayer operations. */
	public static multiplayer: MultiplayerApi;
	/** Exposes cloud script operations. */
	public static cloudScript: CloudScriptApi;

	/**
	 * Initializes the static SDK state once.
	 *
	 * The call is intentionally idempotent: subsequent calls are ignored.
	 */
	public static init(gnServerSettings: GNServerSettings): void {
		if (GNNetwork.gnServerSettings != null) {
			GNDebug.log("GNNetwork has been init!");

			return;
		}

		// Boot the helper services before any model serialization or transport work starts.
		GNSupport.init();
		CodeHelper.init();
		ConverterService.init();

		GNNetwork.gnServerSettings = gnServerSettings;

		GNNetwork.initServerSettings();
		GNNetwork.initGNDebug();

		GNDebug.log("GNNetwork init on " + (GNSupport.isBrowser() ? "browser." : "server.") + " Version: " + GNNetwork.getClientSdkVersion());

		GNNetwork.initGNSocketObject();

		// Restore persisted state so the SDK can resume without a manual rebind.
		GNNetwork.peer.authenticateStatus.setAuthToken(StorageService.getString(GNNetwork.AUTH_TOKEN_KEY, ""));
		GNNetwork.peer.authenticateStatus.setUserId(StorageService.getString(GNNetwork.USER_ID_KEY, ""));
		GNNetwork.peer.gameId = StorageService.getString(GNNetwork.GAME_ID_KEY, "");

		// Instantiate all public API groups after the shared peer is ready.
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

	/**
	 * Persists a new auth token and user id, then updates the in-memory auth state.
	 */
	public static setNewAuthenticateStatus(authenticateStatus: AuthenticateStatus) {
		StorageService.setString(GNNetwork.AUTH_TOKEN_KEY, authenticateStatus.getAuthToken());
		StorageService.setString(GNNetwork.USER_ID_KEY, authenticateStatus.getUserId());

		GNNetwork.peer.authenticateStatus.setAuthToken(authenticateStatus.getAuthToken());
		GNNetwork.peer.authenticateStatus.setUserId(authenticateStatus.getUserId());
	}

	/**
	 * Persists the active game id and applies it to future requests.
	 */
	public static setGameId(gameId: string) {
		StorageService.setString(GNNetwork.GAME_ID_KEY, gameId);

		GNNetwork.peer.gameId = gameId;
	}

	/**
	 * Returns the public SDK version string.
	 */
	public static getClientSdkVersion(): string {
		return VERSION;
	}

	/**
	 * Preserves the legacy Unity settings hook from the original SDK.
	 *
	 * The TypeScript runtime does not load settings from resources, so this is a no-op.
	 */
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

	/**
	 * Configures GNDebug from the shared server settings.
	 */
	private static initGNDebug(): void {
		if (GNNetwork.gnServerSettings == null)
			throw new Error("Null GN Server Settings, please find it now");

		GNDebug.setLogType(GNNetwork.gnServerSettings.getLogType());
	}

	/**
	 * Creates the shared networking peer and starts the periodic service loop
	 * that drives both HTTP and socket work.
	 */
	private static initGNSocketObject(): void {
		let peer = new NetworkingPeer();

		peer.initPeer();

		GNNetwork.peer = peer;

		let serviceUpdate = new ServiceUpdate();
		serviceUpdate.peer = peer;

		serviceUpdate.run();
	}

	/**
	 * Sends a low-level OperationRequest through the socket transport.
	 */
	public static sendViaSocket(requestType: RequestType, role: RequestRole, request: OperationRequest, onResponse: Action1<OperationResponse>, overrideAuthToken: string, overrideSecretKey: string, customTags: GNHashtable): void {
		GNNetwork.peer.sendViaSocket(requestType, role, request, onResponse, overrideAuthToken, overrideSecretKey, customTags);
	}

	/**
	 * Promise wrapper around sendViaSocket.
	 */
	public static async sendViaSocketAsync(requestType: RequestType, role: RequestRole, request: OperationRequest, overrideAuthToken: string, overrideSecretKey: string, customTags: GNHashtable): Promise<OperationResponse> {
		return new Promise((resolve) => {
			GNNetwork.sendViaSocket(requestType, role, request,
				(response: OperationResponse) => {
					resolve(response);
				}, overrideAuthToken, overrideSecretKey, customTags
			);
		});
	}

	/**
	 * Sends a low-level OperationRequest through the HTTP transport.
	 */
	public static sendViaHttp(requestType: RequestType, role: RequestRole, request: OperationRequest, onResponse: Action1<OperationResponse>, overrideAuthToken: string, overrideSecretKey: string, customTags: GNHashtable): void {
		GNNetwork.peer.sendViaHttp(requestType, role, request, onResponse, overrideAuthToken, overrideSecretKey, customTags);
	}

	/**
	 * Promise wrapper around sendViaHttp.
	 */
	public static async sendViaHttpAsync(requestType: RequestType, role: RequestRole, request: OperationRequest, overrideAuthToken: string, overrideSecretKey: string, customTags: GNHashtable): Promise<OperationResponse> {
		return new Promise((resolve) => {
			GNNetwork.sendViaHttp(requestType, role, request,
				(response: OperationResponse) => {
					resolve(response);
				}, overrideAuthToken, overrideSecretKey, customTags
			);
		});
	}

	/**
	 * Sends a typed request through the socket transport and deserializes a typed response.
	 */
	public static sendViaSocketTRequestTResponse<TRequest extends CustomOperationRequest, TResponse extends CustomOperationResponse>(request: TRequest, onResponse: Action1<TResponse> = null, overrideAuthToken: string, overrideSecretKey: string, customTags: GNHashtable, customOperationResponseCls: Constructor<TResponse>): void {
		GNNetwork.sendViaSocketTResponse(request.getRequestType(), request.getRole(), request.build(), onResponse, overrideAuthToken, overrideSecretKey, customTags, customOperationResponseCls);
	}

	/**
	 * Promise wrapper around sendViaSocketTRequestTResponse.
	 */
	public static async sendViaSocketTRequestTResponseAsync<TRequest extends CustomOperationRequest, TResponse extends CustomOperationResponse>(request: TRequest, overrideAuthToken: string, overrideSecretKey: string, customTags: GNHashtable, customOperationResponseCls: Constructor<TResponse>): Promise<TResponse> {
		return new Promise((resolve) => {
			GNNetwork.sendViaSocketTRequestTResponse(request,
				(response: TResponse) => {
					resolve(response);
				}, overrideAuthToken, overrideSecretKey, customTags, customOperationResponseCls);
		});
	}

	/**
	 * Sends a typed request through the HTTP transport and deserializes a typed response.
	 */
	public static sendViaHttpTRequestTResponse<TRequest extends CustomOperationRequest, TResponse extends CustomOperationResponse>(request: TRequest, onResponse: Action1<TResponse> = null, overrideAuthToken: string, overrideSecretKey: string, customTags: GNHashtable, customOperationResponseCls: Constructor<TResponse>): void {
		GNNetwork.sendViaHttpTResponse(request.getRequestType(), request.getRole(), request.build(), onResponse, overrideAuthToken, overrideSecretKey, customTags, customOperationResponseCls);
	}

	/**
	 * Promise wrapper around sendViaHttpTRequestTResponse.
	 */
	public static async sendViaHttpTRequestTResponseAsync<TRequest extends CustomOperationRequest, TResponse extends CustomOperationResponse>(request: TRequest, overrideAuthToken: string, overrideSecretKey: string, customTags: GNHashtable, customOperationResponseCls: Constructor<TResponse>): Promise<TResponse> {
		return new Promise((resolve) => {
			GNNetwork.sendViaHttpTRequestTResponse(request,
				(response: TResponse) => {
					resolve(response);
				}, overrideAuthToken, overrideSecretKey, customTags, customOperationResponseCls);
		});
	}

	/**
	 * Deserializes a typed socket response from a low-level request definition.
	 */
	public static sendViaSocketTResponse<TResponse extends CustomOperationResponse>(requestType: RequestType, role: RequestRole, request: OperationRequest, onResponse: Action1<TResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, customOperationResponseCls: Constructor<TResponse>): void {
		GNNetwork.sendViaSocket(requestType, role, request, response => {
			if (response == null) return;

			let customOperationResponse = new customOperationResponseCls();
			customOperationResponse.setupOperationResponse(response);

			if (onResponse != null) onResponse(customOperationResponse);
		}, overrideAuthToken, overrideSecretKey, customTags);
	}

	/**
	 * Promise wrapper around sendViaSocketTResponse.
	 */
	public static async sendViaSocketTResponseAsync<TResponse extends CustomOperationResponse>(requestType: RequestType, role: RequestRole, request: OperationRequest, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, customOperationResponseCls: Constructor<TResponse>): Promise<TResponse> {
		return new Promise((resolve) => {
			GNNetwork.sendViaSocketTResponse(requestType, role, request,
				(response: TResponse) => {
					resolve(response);
				}, overrideAuthToken, overrideSecretKey, customTags, customOperationResponseCls);
		});
	}

	/**
	 * Deserializes a typed HTTP response from a low-level request definition.
	 */
	public static sendViaHttpTResponse<TResponse extends CustomOperationResponse>(requestType: RequestType, role: RequestRole, request: OperationRequest, onResponse: Action1<TResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, customOperationResponseCls: Constructor<TResponse>): void {
		GNNetwork.sendViaHttp(requestType, role, request, response => {
			if (response == null) return;

			let customOperationResponse = new customOperationResponseCls();
			customOperationResponse.setupOperationResponse(response);

			if (onResponse != null) onResponse(customOperationResponse);
		}, overrideAuthToken, overrideSecretKey, customTags);
	}

	/**
	 * Promise wrapper around sendViaHttpTResponse.
	 */
	public static async sendViaHttpTResponseAsync<TResponse extends CustomOperationResponse>(requestType: RequestType, role: RequestRole, request: OperationRequest, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, customOperationResponseCls: Constructor<TResponse>): Promise<TResponse> {
		return new Promise((resolve) => {
			GNNetwork.sendViaHttpTResponse(requestType, role, request,
				(response: TResponse) => {
					resolve(response);
				}, overrideAuthToken, overrideSecretKey, customTags, customOperationResponseCls);
		});
	}

	/**
	 * Opens the socket transport.
	 */
	public static connectSocket(_onSocketConnect: Action0 = null): void {
		GNNetwork.peer.connectSocket(_onSocketConnect);
	}

	/**
	 * Closes the socket transport.
	 */
	public static disconnectSocket(_onSocketDisconnect: Action0 = null): void {
		GNNetwork.peer.disconnectSocket(_onSocketDisconnect);
	}

	/**
	 * Replaces the raw event callback used to observe every incoming server event.
	 */
	public static setOnEventHandler(_onEventHandler: Action1<OperationEvent>): void {
		GNNetwork.peer.setOnEventHandler(_onEventHandler);
	}

	/**
	 * Registers an additional callback for socket-connect notifications
	 * without replacing existing subscribers.
	 */
	public static subscriberOnConnectHandler(_onConnectHandler: Action0): void {
		GNNetwork.peer.setOnConnectHandler(_onConnectHandler);
	}

	/**
	 * Registers an additional callback for socket-disconnect notifications
	 * without replacing existing subscribers.
	 */
	public static subscriberOnDisconnectHandler(_onDisconnectHandler: Action0): void {
		GNNetwork.peer.setOnDisconnectHandler(_onDisconnectHandler);
	}

	/**
	 * Removes a previously registered socket-connect callback.
	 */
	public static unscriberOnConnectHandler(_onConnectHandler: Action0): void {
		GNNetwork.peer.removeOnConnectHandler(_onConnectHandler);
	}

	/**
	 * Removes a previously registered socket-disconnect callback.
	 */
	public static unsubscriberOnDisconnectHandler(_onDisconnectHandler: Action0): void {
		GNNetwork.peer.removeOnDisconnectHandler(_onDisconnectHandler);
	}

	/**
	 * Registers a typed event handler implementation.
	 */
	public static subscriberServerEventHandler(serverEventHandler: IServerEventHandler): void {
		GNNetwork.peer.subscriberServerEventHandler(serverEventHandler);
	}

	/**
	 * Calls the timestamp endpoint and refreshes the local server clock estimate.
	 */
	public static syncTs(onResponse: Action1<number> = null): void {
		GNNetwork.peer.syncTs(onResponse);
	}

	/**
	 * Promise wrapper around syncTs.
	 */
	public static syncTsAsync(): Promise<number> {
		return new Promise((resolve) => {
			GNNetwork.syncTs((response: number) => {
				resolve(response);
			});
		});
	}

	/**
	 * Fetches auth information for an arbitrary auth token.
	 */
	public static getAuthInfo(authToken: string, onResponse: Action1<GetAuthInfoResponse> = null): void {
		GNNetwork.peer.getAuthInfo(authToken, onResponse);
	}

	/**
	 * Promise wrapper around getAuthInfo.
	 */
	public static getAuthInfoAsync(authToken: string): Promise<GetAuthInfoResponse> {
		return new Promise((resolve) => {
			GNNetwork.getAuthInfo(authToken, (response: GetAuthInfoResponse) => {
				resolve(response);
			});
		});
	}

	/**
	 * Calls the health-check endpoint.
	 */
	public static healthCheck(onResponse: Action1<HealthCheckResponse> = null): void {
		GNNetwork.peer.healthCheck(onResponse);
	}

	/**
	 * Promise wrapper around healthCheck.
	 */
	public static healthCheckAsync(): Promise<HealthCheckResponse> {
		return new Promise((resolve) => {
			GNNetwork.healthCheck((response: HealthCheckResponse) => {
				resolve(response);
			});
		});
	}

	/**
	 * Uploads a file through the authenticated HTTP upload endpoint.
	 */
	public static uploadFile(fileId: string, content: Uint8Array, filename: string, mimetype: string, onResponse: Action1<UploadFileResponse> = null): void {
		GNNetwork.peer.uploadFile(fileId, content, filename, mimetype, onResponse);
	}

	/**
	 * Promise wrapper around uploadFile.
	 */
	public static uploadFileAsync(fileId: string, content: Uint8Array, filename: string, mimetype: string): Promise<UploadFileResponse> {
		return new Promise((resolve) => {
			GNNetwork.uploadFile(fileId, content, filename, mimetype, (response: UploadFileResponse) => {
				resolve(response);
			});
		});
	}

	/**
	 * Builds the direct download URL for a previously issued download token.
	 */
	public static getDownloadFileUrl(downloadToken: string): string {
		return GNNetwork.gnServerSettings.getHttpUrl() + "/" + NetworkingPeer.DOWNLOAD_FILE + "/" + downloadToken;
	}

}
