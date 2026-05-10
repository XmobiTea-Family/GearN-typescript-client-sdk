import { Action1 } from "./../../common/Action1";
import { GNHashtable } from "./../../common/GNData";
import { HttpAppResponse, PostType } from "./HttpPeer";

/**
 * Abstract HTTP client contract consumed by {@link HttpPeer}.
 *
 * The default — and currently only — implementation is
 * {@link NetworkingPeerAxiosRequest}, which uses Axios for the actual
 * network calls. The abstraction exists so future ports can swap in a
 * different HTTP library (e.g. `fetch`-based for an Edge runtime)
 * without touching the request queue, response decoding, or wire-
 * format selection logic in {@link HttpPeer}.
 *
 * Lifecycle:
 * - {@link init} captures the absolute base URL and the SDK's
 *   `User-Agent` string.
 * - {@link setUseReverseProxy} mirrors the matching flag from the
 *   server settings.
 * - The three abstract methods are invoked by {@link HttpPeer} on
 *   every send.
 */
export abstract class NetworkingHttpPeerBase {
    /** Absolute base URL produced by {@link GNServerSettings.getHttpUrl}. */
    protected httpUrl: string;
    /**
     * SDK-issued `User-Agent` value emitted on every Node.js request
     * (`GN-ts-<platform>@<version>`). Browsers manage their own
     * `User-Agent` so the value is ignored there.
     */
    protected userAgent: string;

    /**
     * Mirror of {@link GNServerSettings.getUseReverseProxy}. When
     * `true`, concrete subclasses send relative URLs and forward the
     * captured base URL through the `X-BaseUrl` header so a
     * same-origin proxy can rewrite the destination without CORS
     * preflight.
     */
    protected useReverseProxy: boolean;

    /**
     * Performs an HTTP `GET` against `<httpUrl>/<subUri>`.
     *
     * @param subUri            Path appended to the base URL
     *                          (no leading slash).
     * @param onHttpAppResponse Callback receiving the normalised
     *                          {@link HttpAppResponse}.
     * @param timeout           Timeout in seconds (multiplied by
     *                          1000 inside the concrete call).
     * @param authToken         Optional auth token sent in the
     *                          `Auth-Token` header.
     * @param secretKey         Optional secret key sent in the
     *                          `Secret-Key` header.
     * @param gameId            Optional game id sent in the
     *                          `Game-Id` header.
     */
    public abstract getRequest(subUri: string, onHttpAppResponse: Action1<HttpAppResponse>, timeout: number, authToken: string, secretKey: string, gameId: string): void;

    /**
     * Performs an HTTP `POST` against `<httpUrl>/<subUri>` with
     * either a JSON or MessagePack body.
     *
     * @param subUri            Path appended to the base URL.
     * @param param             Operation parameter bag.
     * @param postType          Encoding choice: JSON or MessagePack.
     * @param onHttpAppResponse Callback receiving the normalised
     *                          {@link HttpAppResponse}.
     * @param timeout           Timeout in seconds.
     * @param authToken         Optional auth token.
     * @param secretKey         Optional secret key.
     * @param customTags        Optional routing tags merged into
     *                          `param` under
     *                          {@link ParameterCode.CustomTags}.
     * @param gameId            Optional game id.
     */
    public abstract postRequest(subUri: string, param: GNHashtable, postType: PostType, onHttpAppResponse: Action1<HttpAppResponse>, timeout: number, authToken: string, secretKey: string, customTags: GNHashtable, gameId: string): void;

    /**
     * Performs a multipart upload `POST`.
     *
     * @param subUri            Path appended to the base URL.
     * @param content           Binary payload.
     * @param filename          Display name written into the
     *                          multipart envelope.
     * @param mimetype          Content type for the file part.
     * @param onHttpAppResponse Callback receiving the normalised
     *                          {@link HttpAppResponse}.
     * @param timeout           Timeout in seconds.
     */
    public abstract postRequestUpload(subUri: string, content: Uint8Array, filename: string, mimetype: string, onHttpAppResponse: Action1<HttpAppResponse>, timeout: number): void;

    /**
     * Captures the base URL and `User-Agent`. Called once during
     * {@link HttpPeer.initGNSocketObject}.
     */
    public init(httpUrl: string, userAgent: string): void {
        this.httpUrl = httpUrl;
        this.userAgent = userAgent;
    }

    /**
     * Toggles reverse-proxy mode on the concrete HTTP client.
     *
     * Mirrors {@link GNServerSettings.setUseReverseProxy}; concrete
     * subclasses inspect the flag every request to decide whether
     * to send a relative or absolute URL.
     */
    public setUseReverseProxy(useReverseProxy: boolean) {
        this.useReverseProxy = useReverseProxy;
    }

}
