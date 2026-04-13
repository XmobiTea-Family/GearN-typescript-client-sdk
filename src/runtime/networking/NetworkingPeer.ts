import { Commands } from "./../constant/Commands";
import { Action0 } from "./../common/Action0";
import { Action1 } from "./../common/Action1";
import { GNArray, GNHashtable } from "./../common/GNData";
import { ReturnCode } from "./../constant/ReturnCode";
import { OperationRequest } from "./../entity/OperationRequest";
import { OperationResponse } from "./../entity/OperationResponse";
import { GNNetwork } from "./../GNNetwork";
import { IServerEventHandler } from "./handler/IServerEventHandler";
import { HttpAppResponse, HttpPeer } from "./http/HttpPeer";
import { IPeer } from "./IPeer";
import { PeerBase } from "./PeerBase";
import { SocketPeer } from "./socket/SocketPeer";
import { OperationEvent } from "./../entity/OperationEvent";
import { AuthenticateStatus } from "./AuthenticateStatus";
import { RequestType } from "./../constant/enumType/RequestType";
import { RequestRole } from "./../constant/enumType/RequestRole";
import { GetAuthInfoResponse } from "./../entity/response/GetAuthInfoResponse";
import { UploadFileResponse } from "./../entity/response/UploadFileResponse";
import { ParameterCode } from "./../constant/parameterCode/ParameterCode";
import { HealthCheckResponse } from "./../entity/response/HealthCheckResponse";

/**
 * Coordinates the HTTP and socket peers behind the static GNNetwork facade.
 */
export class NetworkingPeer {
	static readonly SYNC_TS: string = "ts";
	static readonly GET_AUTH_INFO: string = "getAuthInfo";
	static readonly HEALTH_CHECK: string = "healthcheck";
	static readonly UPLOAD_FILE: string = "upload";
	static readonly DOWNLOAD_FILE: string = "download";
	static readonly API_JSON: string = "api/" + Commands.RequestCmd_Json;
	static readonly API_MSG_PACK: string = "api/" + Commands.RequestCmd_MsgPack;

	private socketPeer: IPeer;
	private httpPeer: IPeer;

	authenticateStatus: AuthenticateStatus;
	gameId: string;

	/**
	 * Returns the averaged latency reported by whichever transports are active.
	 */
	getPing(): number {
		let count = 0;
		let totalPing = 0;

		if (this.httpPeer.isUsing()) {
			count++;
			totalPing += (<PeerBase>this.httpPeer).ping;
		}

		if (this.socketPeer.isUsing()) {
			count++;
			totalPing += (<PeerBase>this.socketPeer).ping;
		}

		if (count == 0) return -1;
		return totalPing / count;
	}

	/**
	 * Returns the current socket client id.
	 */
	getClientId(): string {
		return (this.socketPeer as SocketPeer).getClientId();
	}

	private lastCurrentServerMilliseconds: number;
	private lastGetCurrentMilliseconds: number;

	/**
	 * Stores a fresh server timestamp snapshot so future calls can estimate drift locally.
	 */
	setServerTimeMilliseconds(currentServerMilliseconds: number): void {
		this.lastCurrentServerMilliseconds = currentServerMilliseconds;
		this.lastGetCurrentMilliseconds = Date.now();
	}

	/**
	 * Returns the estimated current server timestamp based on the last sync result.
	 */
	getServerTimestamp(): number {
		return this.lastCurrentServerMilliseconds + (Date.now() - this.lastGetCurrentMilliseconds);
	}

	/**
	 * Creates the cached authentication state and initializes both HTTP and socket peers.
	 */
	initPeer(): void {
		this.setServerTimeMilliseconds(Date.now());

		let gnServerSettings = GNNetwork.getGNServerSettings();
		if (gnServerSettings == null)
			throw new Error("Null GN Server Settings, please find it now");

		this.authenticateStatus = new AuthenticateStatus();

		this.httpPeer = new HttpPeer();
		this.httpPeer.initPeer();

		this.socketPeer = new SocketPeer();
		this.socketPeer.initPeer();
	}

	/**
	 * Services both transports so queued work and incoming messages can progress.
	 */
	service() {
		if (this.httpPeer != null) this.httpPeer.service();
		if (this.socketPeer != null) this.socketPeer.service();
	}

	/**
	 * Queues a request for the socket transport, filling missing auth data
	 * from the shared authentication state and current role settings.
	 */
	sendViaSocket(requestType: RequestType, role: RequestRole, request: OperationRequest, onResponse: Action1<OperationResponse> = null, authToken: string = null, secretKey: string = null, customTags: GNHashtable = null): void {
		if (authToken == null) authToken = this.authenticateStatus.getAuthToken();
		if (secretKey == null) {
			if (role == RequestRole.Admin) secretKey = GNNetwork.getGNServerSettings().getAdminSecretKey();
			else if (role == RequestRole.Server) secretKey = GNNetwork.getGNServerSettings().getServerSecretKey();
			else if (role == RequestRole.Client) secretKey = GNNetwork.getGNServerSettings().getClientSecretKey();
		}

		this.socketPeer.enqueue(requestType, role, request, onResponse, authToken, secretKey, customTags, this.gameId);
	}

	/**
	 * Queues a request for the HTTP transport, filling missing auth data
	 * from the shared authentication state and current role settings.
	 */
	sendViaHttp(requestType: RequestType, role: RequestRole, request: OperationRequest, onResponse: Action1<OperationResponse> = null, authToken: string = null, secretKey: string = null, customTags: GNHashtable = null): void {
		if (authToken == null) authToken = this.authenticateStatus.getAuthToken();
		if (secretKey == null) {
			if (role == RequestRole.Admin) secretKey = GNNetwork.getGNServerSettings().getAdminSecretKey();
			else if (role == RequestRole.Server) secretKey = GNNetwork.getGNServerSettings().getServerSecretKey();
			else if (role == RequestRole.Client) secretKey = GNNetwork.getGNServerSettings().getClientSecretKey();
		}

		this.httpPeer.enqueue(requestType, role, request, onResponse, authToken, secretKey, customTags, this.gameId);
	}

	/**
	 * Sends the current auth token through the socket auth command.
	 */
	sendRequestAuthSocket(): void {
		(this.socketPeer as SocketPeer).sendRequestAuthSocket();
	}

	/**
	 * Opens the socket transport.
	 */
	connectSocket(_onSocketConnect: Action0): void {
		(this.socketPeer as SocketPeer).connect(_onSocketConnect);
	}

	/**
	 * Closes the socket transport.
	 */
	disconnectSocket(_onSocketDisconnect: Action0): void {
		(this.socketPeer as SocketPeer).disconnect(_onSocketDisconnect);
	}

	/**
	 * Replaces the raw event callback invoked for every socket event.
	 */
	setOnEventHandler(_onEventHandler: Action1<OperationEvent>): void {
		(this.socketPeer as SocketPeer).setOnEventHandler(_onEventHandler);
	}

	/**
	 * Registers an additional socket-connect callback.
	 */
	setOnConnectHandler(_onConnectHandler: Action0): void {
		(this.socketPeer as SocketPeer).setOnConnectHandler(_onConnectHandler);
	}

	/**
	 * Registers an additional socket-disconnect callback.
	 */
	setOnDisconnectHandler(_onDisconnectHandler: Action0): void {
		(this.socketPeer as SocketPeer).setOnDisconnectHandler(_onDisconnectHandler);
	}

	/**
	 * Removes a socket-connect callback.
	 */
	removeOnConnectHandler(_onConnectHandler: Action0): void {
		(this.socketPeer as SocketPeer).removeOnConnectHandler(_onConnectHandler);
	}

	/**
	 * Removes a socket-disconnect callback.
	 */
	removeOnDisconnectHandler(_onDisconnectHandler: Action0): void {
		(this.socketPeer as SocketPeer).removeOnDisconnectHandler(_onDisconnectHandler);
	}

	/**
	 * Registers an additional typed server event handler instance.
	 */
	subscriberServerEventHandler(serverEventHandler: IServerEventHandler): void {
		(this.socketPeer as SocketPeer).subscriberAServerEventHandler(serverEventHandler);
	}

	/**
	 * Calls the timestamp endpoint and refreshes the local server clock estimate.
	 */
	syncTs(onResponse: Action1<number> = null): void {
		let thiz = this;

		(this.httpPeer as HttpPeer).getRequest(NetworkingPeer.SYNC_TS, (httpAppResponse: HttpAppResponse) => {
			if (!httpAppResponse.hasError()) {
				if (httpAppResponse.statusCode == 200) {
					let returnDatas = JSON.parse(httpAppResponse.text);
					let gnHashtable = GNHashtable.builder()
						.addAll(returnDatas)
						.build();

					let newServerTimestamp = gnHashtable.getNumber(ParameterCode.Ts, Date.now());
					thiz.setServerTimeMilliseconds(newServerTimestamp);
				}
			}

			if (onResponse != null) onResponse(thiz.getServerTimestamp());
		});
	}

	/**
	 * Fetches auth information for the provided token through HTTP.
	 */
	getAuthInfo(authToken: string, onResponse: Action1<GetAuthInfoResponse>): void {
		(this.httpPeer as HttpPeer).getRequest(NetworkingPeer.GET_AUTH_INFO + "?authToken=" + authToken, (httpAppResponse: HttpAppResponse) => {
			if (!httpAppResponse.hasError()) {
				if (httpAppResponse.statusCode == 200) {
					let returnDatas = JSON.parse(httpAppResponse.text);
					if (returnDatas.error) {
						if (onResponse != null) onResponse({
							error: returnDatas.error,
						});
					}
					else {
						if (onResponse != null) {
							let response: GetAuthInfoResponse = {
								error: null,
								data: returnDatas.data,
							};

							response.data.otherDatas = GNHashtable.builder()
								.addAll(returnDatas.data.otherDatas)
								.build();
							onResponse(response);
						}
					}

					return;
				}
			}

			if (onResponse != null) onResponse({
				error: httpAppResponse.error,
			});
		});
	}

	/**
	 * Calls the health-check endpoint through HTTP.
	 */
	healthCheck(onResponse: Action1<HealthCheckResponse>): void {
		(this.httpPeer as HttpPeer).getRequest(NetworkingPeer.HEALTH_CHECK, (httpAppResponse: HttpAppResponse) => {
			if (!httpAppResponse.hasError()) {
				if (httpAppResponse.statusCode == 200) {
					let returnDatas = JSON.parse(httpAppResponse.text);
					if (returnDatas.error) {
						if (onResponse != null) onResponse({
							error: returnDatas.error,
						});
					}
					else {
						if (onResponse != null) {
							let response: HealthCheckResponse = {
								error: null,
								data: returnDatas.data,
							};

							onResponse(response);
						}
					}

					return;
				}
			}

			if (onResponse != null) onResponse({
				error: httpAppResponse.error,
			});
		});
	}

	/**
	 * Uploads a file through the authenticated HTTP upload endpoint.
	 */
	uploadFile(fileId: string, content: Uint8Array, filename: string, mimetype: string, onResponse: Action1<UploadFileResponse>): void {
		(this.httpPeer as HttpPeer).uploadFile(fileId, content, filename, mimetype, (httpAppResponse: HttpAppResponse) => {
			if (!httpAppResponse.hasError()) {
				if (httpAppResponse.statusCode == 200) {
					if (onResponse != null) {
						let response: UploadFileResponse = {
							error: null,
						};

						onResponse(response);
					}

					return;
				}
			}

			if (onResponse != null) onResponse({
				error: httpAppResponse.error ?? "Unknown Error",
			});
		});
	}

}
