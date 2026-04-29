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
 * Normalised HTTP response surface used by every HTTP-flavoured
 * helper inside the SDK.
 *
 * Concrete transports ({@link NetworkingPeerAxiosRequest}) populate
 * the four public fields, then call back into the SDK with this
 * object. The downstream consumers only have to check
 * {@link hasError} and `statusCode` before reading either `text`
 * (JSON-shaped responses) or `data` (binary / MsgPack responses).
 */
export class HttpAppResponse {
	/**
	 * HTTP status code as returned by the server. Set to `-1` when
	 * the transport raised an exception before receiving any
	 * response.
	 */
	public statusCode: number;
	/**
	 * Captured transport-level error message, or `null` when the
	 * request succeeded. The presence of this field is what
	 * {@link hasError} branches on.
	 */
	public error: string;
	/**
	 * Raw response body as bytes. Populated only for endpoints that
	 * request binary responses (the MsgPack and upload paths).
	 */
	public data: Uint8Array;
	/**
	 * Response body decoded as text. For JSON endpoints this carries
	 * the JSON string; for MsgPack endpoints this is a best-effort
	 * UTF-8 decode of the bytes used for diagnostic logs only.
	 */
	public text: string;

	/**
	 * Returns whether the transport captured a non-null error
	 * message. Cheaper than checking `error != null` everywhere and
	 * keeps the call sites readable.
	 */
	public hasError(): boolean {
		return this.error != null;
	}

	/**
	 * Returns a debug-friendly stringified summary of the response.
	 *
	 * Used by `[GN Http RECV]` log lines. The `<color=red>` markup
	 * is preserved from the original Unity SDK and rendered by the
	 * Unity console; web consoles display it as plain text.
	 */
	public toString(): string {
		let answer = " StatusCode: " + this.statusCode;
		if (this.error) answer += ", <color=red>Error: " + this.error + "</color>";
		answer += ", Text: " + this.text;

		return answer;
	}
}

/**
 * HTTP request body encoding used by the SDK.
 *
 * Resolved per-request by reading
 * {@link GNServerSettings.getMessageType} — `MessageType.MsgPack`
 * maps to {@link MsgPack} on Node.js / Cocos but is downgraded to
 * {@link Json} in browser runtimes because the browser HTTP path
 * does not handle binary responses uniformly across vendors.
 */
export enum PostType {
	/** UTF-8 JSON request and response bodies. */
	Json = 0,
	/** Binary MessagePack request and response bodies. */
	MsgPack = 1,
}

/**
 * High-level HTTP peer used by {@link NetworkingPeer}.
 *
 * Bridges the {@link PeerBase} queue / timeout machinery with the
 * concrete Axios-based transport in
 * {@link NetworkingPeerAxiosRequest}. Owns the wire-format selection
 * (`Json` vs `MsgPack`), URL composition (`/api/<cmd>/<requestType>/
 * <role>/<operationCode>`) and the JSON-vs-MsgPack response decode
 * path.
 *
 * Browser-vs-Node fallback: when the configured `messageType` is
 * `MsgPack` and the SDK is running in a browser, this class downgrades
 * the outgoing request to JSON because the browser path cannot
 * reliably consume a MsgPack response. A warning is logged on every
 * such downgrade so the application can surface the mismatch in
 * development.
 */
export class HttpPeer extends PeerBase {
	/** Concrete Axios-based HTTP client. */
	private networkingHttpPeerBase: NetworkingHttpPeerBase;

	/**
	 * First character expected on a JSON response body. Used as a
	 * cheap heuristic to decide whether the response should be
	 * `JSON.parse`'d directly or fall through to MsgPack decode.
	 */
	private static readonly JSON_CHAR_KNOWN: string = "{";

	/**
	 * Builds and configures the underlying Axios client.
	 *
	 * Steps:
	 * 1. Validate the global server settings.
	 * 2. Capture the `useHttp` flag into {@link isUse} so the queue
	 *    short-circuits when the HTTP transport is disabled.
	 * 3. Allocate {@link NetworkingPeerAxiosRequest} and pass the
	 *    base URL plus the `User-Agent` string built from the SDK
	 *    version + detected platform.
	 * 4. Forward the reverse-proxy flag from the server settings so
	 *    the Axios layer knows whether to inline absolute URLs or
	 *    relative paths.
	 *
	 * @throws Error when the global server settings are missing.
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
	 * Sends a queued operation through the underlying HTTP transport.
	 *
	 * Steps:
	 * 1. Substitute the SDK-wide
	 *    {@link OperationRequest.defaultTimeOut} sentinel with the
	 *    configured `defaultTimeoutInSeconds`.
	 * 2. Chain into {@link PeerBase.send} so the in-flight map
	 *    records the request id.
	 * 3. Pick the wire format from the active settings and apply
	 *    the browser MsgPack-to-JSON downgrade described on
	 *    {@link HttpPeer}.
	 * 4. Compose the sub-URI as
	 *    `<api/cmd>/<requestType>/<role>/<operationCode>` using
	 *    {@link CodeHelper} to resolve the camelCase enum names.
	 * 5. Delegate to the Axios transport, then route the response
	 *    through {@link onSendOperationRequestResponse} so the
	 *    inherited {@link PeerBase.onResponseHandler} machinery
	 *    sees a normalised payload.
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
	 * Logs a diagnostic line whenever the queue accepts a new
	 * pending entry. The actual queueing is performed by
	 * {@link PeerBase.enqueue}; this override only adds telemetry.
	 */
	protected override onEnqueue(operationPending: OperationPending): void {
		GNDebug.log("[GN Http ENQUEUE] " + operationPending.getOperationRequest().toString());
	}

	/**
	 * Decodes a transport-level {@link HttpAppResponse} into the
	 * canonical SDK response container expected by
	 * {@link PeerBase.onResponseHandler}.
	 *
	 * Decode strategy:
	 * - If the body starts with `{` (the {@link JSON_CHAR_KNOWN}
	 *   marker), parse it as JSON.
	 * - Otherwise fall back to MessagePack decode of the binary
	 *   `data` field.
	 *
	 * On any non-200 response or transport error, synthesise a
	 * `ReturnCode.UnknownError` payload that carries the captured
	 * error message in `DebugMessage`. Either path ends with a call
	 * to {@link onResponseHandler} so the higher-level machinery can
	 * resolve the request callback.
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
	 * Issues a raw HTTP GET request against the configured base URL.
	 *
	 * Used by the dedicated maintenance endpoints
	 * (`syncTs`, `getAuthInfo`, `healthCheck`) that bypass the
	 * operation-request pipeline because they do not produce a
	 * typed response. The auth token / secret key / game id are
	 * forwarded as request headers, matching the operation-request
	 * pipeline.
	 *
	 * @param subUri          Path appended to the base URL
	 *                        (no leading slash).
	 * @param onHttpAppResponse Callback receiving the typed
	 *                          {@link HttpAppResponse}.
	 * @param timeout         Optional timeout in seconds. Defaults
	 *                        to {@link OperationRequest.defaultTimeOut}.
	 * @param authToken       Optional auth token override.
	 * @param secretKey       Optional secret key override.
	 * @param gameId          Optional game id override.
	 */
	getRequest(subUri: string, onHttpAppResponse: Action1<HttpAppResponse>, timeout: number = OperationRequest.defaultTimeOut, authToken: string = null, secretKey: string = null, gameId: string = null): void {
		this.networkingHttpPeerBase.getRequest(subUri, onHttpAppResponse, timeout, authToken, secretKey, gameId);
	}

	/**
	 * Uploads a file through the authenticated multipart endpoint.
	 *
	 * Aborts immediately with status `401` when no auth token is
	 * cached — the upload endpoint always requires authentication
	 * and the cached token is the only auth source the upload path
	 * recognises (the upload helper does not accept an override).
	 *
	 * @param fileId             Identifier returned by
	 *                           `content.createNewFileUploadInfo`.
	 * @param content            Binary payload.
	 * @param filename           Display name written into the
	 *                           multipart envelope.
	 * @param mimetype           Content type for the file part.
	 * @param onHttpAppResponse  Callback receiving the typed
	 *                           {@link HttpAppResponse}.
	 * @param timeout            Timeout in seconds. Defaults to
	 *                           `6000` so large uploads do not race
	 *                           the SDK-wide 20-second default.
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
