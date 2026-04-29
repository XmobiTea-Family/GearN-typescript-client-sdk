import axios from "axios";
import { Action1 } from "./../../common/Action1";
import { GNHashtable } from "./../../common/GNData";
import { Commands } from "./../../constant/Commands";
import { GNSupport } from "./../../helper/GNSupport";
import { GNDebug } from "./../../logger/GNDebug";
import { HttpAppResponse, PostType } from "./HttpPeer";
import { NetworkingHttpPeerBase } from "./NetworkingHttpPeerBase";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";

import { GNNetwork } from "./../../GNNetwork";
import { MessagePackConverterService } from "./../../helper/MessagePackConverterService";

/**
 * Concrete HTTP client implemented on top of `axios`.
 *
 * Responsibilities:
 * - Translate the abstract methods on
 *   {@link NetworkingHttpPeerBase} into Axios calls.
 * - Apply per-platform tweaks: only emit `User-Agent` and
 *   `Content-Length` headers from Node.js, because browsers refuse
 *   to let JavaScript override them.
 * - Drive the wire format conversion: JSON paths use
 *   `responseType: "text"`, MsgPack paths use
 *   `responseType: "arraybuffer"` so the SDK gets bytes back.
 * - Implement the reverse-proxy URL rewrite: when
 *   `useReverseProxy === true`, requests are sent as relative paths
 *   with the original base URL forwarded in the `X-BaseUrl` header.
 *
 * Error handling: every Axios `try/catch` collapses the failure into
 * the {@link HttpAppResponse} surface — `statusCode = -1`,
 * `error = error.toString()`, `text = "[-2]"` (or `"[-3]"` for
 * unsupported features). The SDK's higher-level decoder in
 * {@link HttpPeer.onSendOperationRequestResponse} interprets either
 * shape correctly.
 */
export class NetworkingPeerAxiosRequest extends NetworkingHttpPeerBase {
	/**
	 * @inheritdoc
	 *
	 * Routes through the private async helper so the public method
	 * matches the abstract synchronous-looking signature. The helper
	 * always invokes the callback exactly once.
	 */
	public override getRequest(subUri: string, onHttpAppResponse: Action1<HttpAppResponse>, timeout: number, authToken: string, secretKey: string, gameId: string): void {
		this.getRequestAxios(subUri, onHttpAppResponse, timeout, authToken, secretKey, gameId);
	}

	/**
	 * @inheritdoc
	 *
	 * Routes through the private async helper. The helper picks the
	 * right Axios call shape for JSON vs MsgPack and converts the
	 * response to either text (JSON) or `Uint8Array` + best-effort
	 * UTF-8 text (MsgPack).
	 */
	public postRequest(subUri: string, param: GNHashtable, postType: PostType, onHttpAppResponse: Action1<HttpAppResponse>, timeout: number, authToken: string, secretKey: string, customTags: GNHashtable, gameId: string): void {
		this.postRequestAxios(subUri, param, postType, onHttpAppResponse, timeout, authToken, secretKey, customTags, gameId);
	}

	/**
	 * @inheritdoc
	 *
	 * Routes through the private async helper which constructs the
	 * `FormData` envelope and submits it as
	 * `multipart/form-data`.
	 */
	public postRequestUpload(subUri: string, content: Uint8Array, filename: string, mimetype: string, onHttpAppResponse: Action1<HttpAppResponse>, timeout: number): void {
		//GNDebug.logWarning("GN JS client sdk does not support upload file yet.");

		// let httpAppResponse = new HttpAppResponse();

		// httpAppResponse.error = "Upload file does not support in GN JS client sdk.";
		// httpAppResponse.statusCode = -1;
		// httpAppResponse.text = "[-3]";

		// if (onHttpAppResponse != null) onHttpAppResponse(httpAppResponse);

		this.postRequestUploadAxios(subUri, content, filename, mimetype, onHttpAppResponse, timeout);
	}

	/**
	 * Real Axios call for HTTP `GET`.
	 *
	 * Builds the header bag (auth-token / secret-key / game-id /
	 * user-agent), composes the absolute or relative URL based on
	 * the reverse-proxy setting, and asks Axios for an
	 * `arraybuffer` response so binary payloads survive intact.
	 *
	 * On any thrown exception the helper collapses the failure into
	 * an {@link HttpAppResponse} with `statusCode = -1` and
	 * `text = "[-2]"`, then logs through {@link GNDebug.logError}.
	 */
	private async getRequestAxios(subUri: string, onHttpAppResponse: Action1<HttpAppResponse>, timeout: number, authToken: string, secretKey: string, gameId: string): Promise<void> {
		let headers: { [k: string]: any } = {};

		if (authToken) headers[Commands.RequestAuthTokenCmd] = authToken;
		if (secretKey) headers[Commands.RequestSecretCmd] = secretKey;
		if (gameId) headers[Commands.RequestGameIdCmd] = gameId;

		if (!GNSupport.isBrowser())
			headers[Commands.USER_AGENT] = this.userAgent;

		let httpAppResponse = new HttpAppResponse();

		let targetUrl = this.httpUrl + "/" + subUri;
		if (this.useReverseProxy) {
			targetUrl = "/" + subUri;
			headers[Commands.BaseUrl] = this.httpUrl;
		}

		try {
			let result = await axios.get(targetUrl, {
				headers: headers,
				timeout: timeout * 1000,
				responseType: "arraybuffer",
			});

			httpAppResponse.statusCode = result.status;
			let buffers = this.toBuffers(result.data);
			httpAppResponse.data = buffers[0];
			httpAppResponse.text = buffers[1];
		} catch (error) {
			httpAppResponse.error = error.toString();
			httpAppResponse.statusCode = -1;
			httpAppResponse.text = "[-2]";

			GNDebug.logError(error);
		}

		if (onHttpAppResponse != null) onHttpAppResponse(httpAppResponse);
	}

	/**
	 * Real Axios call for HTTP `POST`.
	 *
	 * Wire format selection:
	 * - {@link PostType.Json}: serialise the parameter bag with
	 *   `param.toData()`, send it as JSON, ask Axios for a `text`
	 *   response. `Content-Length` is set explicitly on Node.js so
	 *   reverse proxies that require it work correctly.
	 * - {@link PostType.MsgPack}: encode through
   *   {@link MessagePackConverterService.serialize}, send as
   *   `application/msgpack`, ask Axios for an `arraybuffer`
   *   response.
	 *
	 * Custom tags supplied by the caller are merged into the
	 * outgoing parameter bag under
	 * {@link ParameterCode.CustomTags} so the backend receives them
	 * in the same envelope as the operation parameters.
	 *
	 * Same error-handling shape as {@link getRequestAxios}.
	 */
	private async postRequestAxios(subUri: string, param: GNHashtable, postType: PostType, onHttpAppResponse: Action1<HttpAppResponse>, timeout: number, authToken: string, secretKey: string, customTags: GNHashtable, gameId: string): Promise<void> {
		let headers: { [k: string]: any } = {};

		if (authToken) headers[Commands.RequestAuthTokenCmd] = authToken;
		if (secretKey) headers[Commands.RequestSecretCmd] = secretKey;
		if (gameId) headers[Commands.RequestGameIdCmd] = gameId;

		if (!GNSupport.isBrowser())
			headers[Commands.USER_AGENT] = this.userAgent;

		if (param == null) param = new GNHashtable();
		if (customTags != null) param.add(ParameterCode.CustomTags, customTags);

		let body: any = null;
		if (postType == PostType.Json) {
			let content = param.toData();
			body = content;

			if (!GNSupport.isBrowser()) {
				headers[Commands.CONTENT_LENGTH] = JSON.stringify(body).length;
				headers[Commands.CONTENT_TYPE] = Commands.APPLICATION_JSON;
			}
			headers[Commands.ACCEPT] = Commands.APPLICATION_JSON;
		}
		else if (postType == PostType.MsgPack) {
			let content = param.toData();
			body = new Uint8Array(MessagePackConverterService.serialize(content));

			headers[Commands.CONTENT_TYPE] = Commands.APPLICATION_MSGPACK;
			headers[Commands.ACCEPT] = Commands.APPLICATION_MSGPACK;

			if (!GNSupport.isBrowser())
				headers[Commands.CONTENT_LENGTH] = body.length;
		}

		let httpAppResponse = new HttpAppResponse();

		let targetUrl = this.httpUrl + "/" + subUri;
		if (this.useReverseProxy) {
			targetUrl = "/" + subUri;
			headers[Commands.BaseUrl] = this.httpUrl;
		}

		try {
			if (postType == PostType.Json) {
				let result = await axios.post(targetUrl, body, {
					headers: headers,
					timeout: timeout * 1000,
					responseType: "text",
				});

				httpAppResponse.statusCode = result.status;
				// let buffers = this.toBuffers(result.data);
				// httpAppResponse.data = buffers[0];
				httpAppResponse.text = result.data;
			}
			else {
				let result = await axios.post(targetUrl, body, {
					headers: headers,
					timeout: timeout * 1000,
					responseType: "arraybuffer",
				});

				httpAppResponse.statusCode = result.status;
				let buffers = this.toBuffers(result.data);
				httpAppResponse.data = buffers[0];
				httpAppResponse.text = buffers[1];
			}
		} catch (error) {
			httpAppResponse.error = error.toString();
			httpAppResponse.statusCode = -1;
			httpAppResponse.text = "[-2]";

			GNDebug.logError(error);
		}

		if (onHttpAppResponse != null) onHttpAppResponse(httpAppResponse);
	}

	/**
	 * Real Axios call for the multipart upload endpoint.
	 *
	 * Builds a `FormData` envelope with a single `file` part — the
	 * field name is taken from {@link Commands.File}, the binary
	 * payload is wrapped in a `Blob` so both browser and Node.js
	 * Axios accept it. The auth token is read from the cached
	 * {@link AuthenticateStatus}; this endpoint cannot accept an
	 * override.
	 *
	 * Note: `content.buffer.slice(0)` clones the underlying buffer
	 * so the upload remains valid if the application later mutates
	 * `content` in place.
	 */
	private async postRequestUploadAxios(subUri: string, content: Uint8Array, filename: string, mimetype: string, onHttpAppResponse: Action1<HttpAppResponse>, timeout: number): Promise<void> {
		let formData = new FormData();
		formData.append(Commands.File, new Blob([content.buffer.slice(0) as ArrayBuffer], { type: mimetype }), filename);

		let headers: { [k: string]: any } = {};
		headers[Commands.RequestAuthTokenCmd] = GNNetwork.getAuthenticateStatus().getAuthToken();;

		// if (!GNSupport.isBrowser()) {
		//     headers[Commands.CONTENT_TYPE] = "multipart/form-data";
		// }

		let httpAppResponse = new HttpAppResponse();

		let targetUrl = this.httpUrl + "/" + subUri;
		if (this.useReverseProxy) {
			targetUrl = "/" + subUri;
			headers[Commands.BaseUrl] = this.httpUrl;
		}

		try {
			let result = await axios.post(targetUrl, formData, {
				headers: headers,
				timeout: timeout * 1000,
				responseType: "arraybuffer",
			});

			httpAppResponse.statusCode = result.status;
			let buffers = this.toBuffers(result.data);
			httpAppResponse.data = buffers[0];
			httpAppResponse.text = buffers[1];
		} catch (error) {
			httpAppResponse.error = error.toString();
			httpAppResponse.statusCode = -1;
			httpAppResponse.text = "[-2]";

			GNDebug.logError(error);
		}

		if (onHttpAppResponse != null) onHttpAppResponse(httpAppResponse);

	}

	/**
	 * Decodes a `Uint8Array` to a string using the legacy
	 * `decodeURIComponent(escape(...))` pattern.
	 *
	 * Why the indirection: `String.fromCharCode(...uint8Array)`
	 * produces a Latin-1 string from the bytes, and the
	 * `decodeURIComponent`/`escape` pair re-interprets the result
	 * as UTF-8. Modern equivalents (`TextDecoder`) are not
	 * available across all the supported runtimes (older Cocos
	 * builds, ES5 polyfills) so the SDK keeps the legacy form.
	 */
	private uint8ArrayToString(uint8Array: any): string {
		return decodeURIComponent(escape(String.fromCharCode(...uint8Array)))
	}

	/**
	 * Normalises an Axios `arraybuffer` body into the
	 * `[Uint8Array, string]` pair stored on
	 * {@link HttpAppResponse}.
	 *
	 * The browser path wraps the `ArrayBuffer` in a `Uint8Array`
	 * and decodes the bytes as UTF-8 via
	 * {@link uint8ArrayToString}. The Node.js path receives a
	 * `Buffer` directly, which already supports `toString()`
	 * cheaply, so it returns the buffer + `buffer.toString()` as is.
	 */
	private toBuffers(data: any): [any, string] {
		if (GNSupport.isBrowser()) {
			data = new Uint8Array(data);
			return [data, this.uint8ArrayToString(data)];
		}

		return [data, data.toString()];
	}
}
