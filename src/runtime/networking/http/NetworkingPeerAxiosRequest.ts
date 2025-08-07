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

export class NetworkingPeerAxiosRequest extends NetworkingHttpPeerBase {
	public override getRequest(subUri: string, onHttpAppResponse: Action1<HttpAppResponse>, timeout: number, authToken: string, secretKey: string, gameId: string): void {
		this.getRequestAxios(subUri, onHttpAppResponse, timeout, authToken, secretKey, gameId);
	}

	public postRequest(subUri: string, param: GNHashtable, postType: PostType, onHttpAppResponse: Action1<HttpAppResponse>, timeout: number, authToken: string, secretKey: string, customTags: GNHashtable, gameId: string): void {
		this.postRequestAxios(subUri, param, postType, onHttpAppResponse, timeout, authToken, secretKey, customTags, gameId);
	}

	public postRequestUpload(subUri: string, content: Uint8Array, filename: string, mimetype: string, onHttpAppResponse: Action1<HttpAppResponse>, timeout: number): void {
		//GNDebug.logWarning("GN JS client sdk does not support upload file yet.");

		// let httpAppResponse = new HttpAppResponse();

		// httpAppResponse.error = "Upload file does not support in GN JS client sdk.";
		// httpAppResponse.statusCode = -1;
		// httpAppResponse.text = "[-3]";

		// if (onHttpAppResponse != null) onHttpAppResponse(httpAppResponse);

		this.postRequestUploadAxios(subUri, content, filename, mimetype, onHttpAppResponse, timeout);
	}

	private async getRequestAxios(subUri: string, onHttpAppResponse: Action1<HttpAppResponse>, timeout: number, authToken: string, secretKey: string, gameId: string): Promise<void> {
		let headers: { [k: string]: any } = {};

		if (authToken)
			headers[Commands.RequestAuthTokenCmd] = authToken;

		if (secretKey)
			headers[Commands.RequestSecretCmd] = secretKey;

		if (gameId)
			headers[Commands.RequestGameIdCmd] = gameId;

		if (!GNSupport.isBrowser())
			headers[Commands.USER_AGENT] = this.userAgent;

		let httpAppResponse = new HttpAppResponse();

		try {
			let result = await axios.get(this.httpUrl + "/" + subUri, {
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
			body = Buffer.from(MessagePackConverterService.serialize(content));

			headers[Commands.CONTENT_TYPE] = Commands.APPLICATION_MSGPACK;
			headers[Commands.ACCEPT] = Commands.APPLICATION_MSGPACK;

			if (!GNSupport.isBrowser())
				headers[Commands.CONTENT_LENGTH] = body.length;
		}

		let httpAppResponse = new HttpAppResponse();

		try {
			if (postType == PostType.Json) {
				let result = await axios.post(this.httpUrl + "/" + subUri, body, {
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
				let result = await axios.post(this.httpUrl + "/" + subUri, body, {
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

	private async postRequestUploadAxios(subUri: string, content: Uint8Array, filename: string, mimetype: string, onHttpAppResponse: Action1<HttpAppResponse>, timeout: number): Promise<void> {
		let formData = new FormData();
		formData.append(Commands.File, new Blob([content], { type: mimetype }), filename);

		let headers: { [k: string]: any } = {};
		headers[Commands.RequestAuthTokenCmd] = GNNetwork.getAuthenticateStatus().getAuthToken();;

		// if (!GNSupport.isBrowser()) {
		//     headers[Commands.CONTENT_TYPE] = "multipart/form-data";
		// }

		let httpAppResponse = new HttpAppResponse();

		try {
			let result = await axios.post(this.httpUrl + "/" + subUri, formData, {
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

	private uint8ArrayToString(uint8Array: any): string {
		return decodeURIComponent(escape(String.fromCharCode(...uint8Array)))
	}

	private toBuffers(data: any): [any, string] {
		if (GNSupport.isBrowser()) {
			data = new Uint8Array(data);
			return [data, this.uint8ArrayToString(data)];
		}

		return [data, data.toString()];
	}
}
