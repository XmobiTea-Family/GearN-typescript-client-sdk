import { Action1 } from "./../../common/Action1";
import { GNArray, GNHashtable } from "./../../common/GNData";
import { ReturnCode } from "./../../constant/ReturnCode";
import { GNNetwork } from "./../../GNNetwork";
import { GNDebug } from "./../../logger/GNDebug";
import { NetworkingPeer } from "./../NetworkingPeer";
import { OperationPending } from "./../OperationPending";
import { PeerBase } from "./../PeerBase";
import { GNSupport } from "./../../helper/GNSupport";
import { NetworkingHttpPeerBase } from "./NetworkingHttpPeerBase";
import { NetworkingPeerAxiosRequest } from "./NetworkingPeerAxiosRequest";
import { MessagePackConverterService } from "./../../helper/MessagePackConverterService";
import { MessageType } from "./../../config/GNServerSettings";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { OperationRequest } from "./../../entity/OperationRequest";
import { CodeHelper } from "./../../helper/CodeHelper";

/**
 * Represents the normalized HTTP response returned by the transport layer.
 */
export class HttpAppResponse {
	public statusCode: number;
	public error: string;
	public data: Uint8Array;
	public text: string;

	/**
	 * Returns whether the transport captured an error for this response.
	 */
	public hasError(): boolean {
		return this.error != null;
	}

	/**
	 * Returns a debug-friendly string representation of this instance.
	 */
	public toString(): string {
		let answer = " StatusCode: " + this.statusCode;
		if (this.error) answer += ", <color=red>Error: " + this.error + "</color>";
		answer += ", Text: " + this.text;

		return answer;
	}
}

/**
 * Selects the HTTP request body encoding.
 */
export enum PostType {
	Json = 0,
	MsgPack = 1,
}

/**
 * Wraps the HTTP transport used by the SDK.
 */
export class HttpPeer extends PeerBase {
	private networkingHttpPeerBase: NetworkingHttpPeerBase;

	private static readonly JSON_CHAR_KNOWN: string = "{";

	/**
	 * Creates and configures the low-level HTTP client from the current server settings.
	 */
	protected override initGNSocketObject(): void {
		let gnServerSettings = GNNetwork.getGNServerSettings();
		if (gnServerSettings == null)
			throw new Error("Where is GN Server Settings");

		this.isUse = gnServerSettings.isUseHttp();

		this.networkingHttpPeerBase = new NetworkingPeerAxiosRequest();

		let httpUrl = gnServerSettings.getHttpUrl();
		let userAgent = "GN-ts-" + GNNetwork.getPlatform() + "@" + GNNetwork.getClientSdkVersion();
		this.networkingHttpPeerBase.init(httpUrl, userAgent);

		this.networkingHttpPeerBase.setUseReverseProxy(gnServerSettings.getUseReverseProxy());
	}

	/**
	 * Marks an operation as sent, chooses the wire format, and forwards it to the HTTP transport.
	 */
	override send(operationPending: OperationPending): void {
		let gnServerSettings = GNNetwork.getGNServerSettings();
		let operationRequest = operationPending.getOperationRequest();

		if (operationRequest.getTimeout() == OperationRequest.defaultTimeOut) operationRequest.setTimeout(gnServerSettings.getDefaultTimeoutInSeconds());

		super.send(operationPending);

		GNDebug.log("[GN Http SEND] " + operationRequest.toString());

		let authToken = operationPending.getAuthToken();
		let secretKey = operationPending.getSecretKey();
		let gameId = operationPending.getGameId();
		let customTags = operationPending.getCustomTags();

		let postType = gnServerSettings.getMessageType() == MessageType.Json ? PostType.Json : PostType.MsgPack;

		if (GNSupport.isBrowser() && postType == PostType.MsgPack) {
			GNDebug.logWarning("GN JS client sdk does not support send msgpack request via HTTP, so we will send this request via HTTP json");
			postType = PostType.Json;
		}

		let subUri = (postType == PostType.Json ? NetworkingPeer.API_JSON : NetworkingPeer.API_MSG_PACK) + "/" + CodeHelper.getRequestTypeName(operationPending.getRequestType()) + "/" + CodeHelper.getRequestRoleName(operationPending.getRole()) + "/" + operationRequest.getOperationCode();
		let thiz = this;

		this.networkingHttpPeerBase.postRequest(subUri, operationRequest.getParameters(), postType, (httpAppResponse: HttpAppResponse) => {
			thiz.onSendOperationRequestResponse(operationPending, httpAppResponse);
		}, operationRequest.getTimeout(), authToken, secretKey, customTags, gameId);
	}

	/**
	 * Handles transport-specific work when an operation is queued.
	 */
	protected override onEnqueue(operationPending: OperationPending): void {
		GNDebug.log("[GN Http ENQUEUE] " + operationPending.getOperationRequest().toString());
	}

	/**
	 * Normalizes an HTTP response back into the SDK response shape.
	 */
	private onSendOperationRequestResponse(operationPending: OperationPending, httpAppResponse: HttpAppResponse): void {
		let operationRequest = operationPending.getOperationRequest();
		let obj = new GNHashtable();

		if (!httpAppResponse.hasError()) {
			if (httpAppResponse.statusCode == 200) {
				let gnHashtable: GNHashtable = null;
				if (httpAppResponse.text) {
					if (httpAppResponse.text[0] === HttpPeer.JSON_CHAR_KNOWN) {
						let returnDatas = JSON.parse(httpAppResponse.text);
						gnHashtable = GNHashtable.builder()
							.addAll(returnDatas)
							.build();
					}
				}

				if (gnHashtable == null) {
					if (httpAppResponse.data != null) {
						let iDict = MessagePackConverterService.deserialize<{}>(httpAppResponse.data);
						gnHashtable = GNHashtable.builder()
							.addAll(iDict)
							.build();
					}
				}

				if (gnHashtable != null) {
					obj.add(ParameterCode.ReturnCode, gnHashtable.getNumber(ParameterCode.ReturnCode));
					obj.add(ParameterCode.Parameters, gnHashtable.getGNHashtable(ParameterCode.Parameters, new GNHashtable()));
					obj.add(ParameterCode.InvalidRequestParameters, gnHashtable.getGNArray(ParameterCode.InvalidRequestParameters, new GNArray()));
					obj.add(ParameterCode.DebugMessage, gnHashtable.getString(ParameterCode.DebugMessage));
					obj.add(ParameterCode.ResponseId, operationRequest.getRequestId());

					this.onResponseHandler(obj);
					return;
				}
			}
		}

		obj.add(ParameterCode.ReturnCode, ReturnCode.UnknownError);
		obj.add(ParameterCode.DebugMessage, httpAppResponse.error);
		obj.add(ParameterCode.ResponseId, operationRequest.getRequestId());

		this.onResponseHandler(obj);
	}

	/**
	 * Issues a raw GET request against the configured HTTP base URL.
	 */
	getRequest(subUri: string, onHttpAppResponse: Action1<HttpAppResponse>, timeout: number = OperationRequest.defaultTimeOut, authToken: string = null, secretKey: string = null, gameId: string = null): void {
		this.networkingHttpPeerBase.getRequest(subUri, onHttpAppResponse, timeout, authToken, secretKey, gameId);
	}

	/**
	 * Uploads a file through the authenticated multipart HTTP endpoint.
	 */
	uploadFile(fileId: string, content: Uint8Array, filename: string, mimetype: string, onHttpAppResponse: Action1<HttpAppResponse>, timeout: number = 6000): void {
		let authToken = GNNetwork.getAuthenticateStatus().getAuthToken();

		if (!authToken) {
			let httpAppResponse = new HttpAppResponse();
			httpAppResponse.statusCode = 401;
			httpAppResponse.error = "Auth token null";

			if (onHttpAppResponse != null) onHttpAppResponse(httpAppResponse);

			return;
		}

		let subUri = NetworkingPeer.UPLOAD_FILE + "/" + fileId;

		this.networkingHttpPeerBase.postRequestUpload(subUri, content, filename, mimetype, onHttpAppResponse, timeout);
	}

}
