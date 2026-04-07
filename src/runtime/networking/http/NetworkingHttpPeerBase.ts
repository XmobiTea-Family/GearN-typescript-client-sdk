import { Action1 } from "./../../common/Action1";
import { GNHashtable } from "./../../common/GNData";
import { HttpAppResponse, PostType } from "./HttpPeer";

/**
 * Defines the low-level HTTP client contract used by `HttpPeer`.
 */
export abstract class NetworkingHttpPeerBase {
	protected httpUrl: string;
	protected userAgent: string;

	protected useReverseProxy: boolean;

	/**
	 * Executes a low-level HTTP GET request.
	 */
	public abstract getRequest(subUri: string, onHttpAppResponse: Action1<HttpAppResponse>, timeout: number, authToken: string, secretKey: string, gameId: string): void;

	/**
	 * Executes a low-level HTTP POST request.
	 */
	public abstract postRequest(subUri: string, param: GNHashtable, postType: PostType, onHttpAppResponse: Action1<HttpAppResponse>, timeout: number, authToken: string, secretKey: string, customTags: GNHashtable, gameId: string): void;

	/**
	 * Executes a low-level multipart upload request.
	 */
	public abstract postRequestUpload(subUri: string, content: Uint8Array, filename: string, mimetype: string, onHttpAppResponse: Action1<HttpAppResponse>, timeout: number): void;

	/**
	 * Stores the base URL and user agent used by the concrete HTTP client.
	 */
	public init(httpUrl: string, userAgent: string): void {
		this.httpUrl = httpUrl;
		this.userAgent = userAgent;
	}

	/**
	 * Enables or disables reverse-proxy mode for the concrete HTTP client.
	 */
	public setUseReverseProxy(useReverseProxy: boolean) {
		this.useReverseProxy = useReverseProxy;
	}

}
