/**
 * Wire-format string constants used by both transports.
 *
 * Centralises HTTP header names, content-type values, socket
 * command identifiers and multipart field names. The values are
 * the literal strings the GearN backend recognises on the wire,
 * so they cannot be renamed without a coordinated backend change.
 *
 * Categories:
 * - `USER_AGENT`, `CONTENT_TYPE`, `ACCEPT`, `CONTENT_LENGTH` —
 *   generic HTTP headers consumed by
 *   {@link NetworkingPeerAxiosRequest}.
 * - `APPLICATION_JSON`, `APPLICATION_MSGPACK` — MIME values for
 *   the matching wire format.
 * - `RequestAuthTokenCmd`, `RequestSecretCmd`, `RequestGameIdCmd` —
 *   GearN-specific HTTP headers (also used as the auth-frame name
 *   on the socket transport).
 * - `RequestCmd_*`, `ResponseCmd_*`, `EventCmd_*` — socket.io
 *   event names for outbound requests, inbound responses and
 *   inbound server-pushed events. Two flavours each (MsgPack
 *   binary vs JSON text).
 * - `Data`, `File` — multipart form-data field names for the
 *   upload endpoint.
 * - `BaseUrl` — reverse-proxy header that forwards the original
 *   base URL when relative-path mode is enabled.
 */
export class Commands {
    /**
     * HTTP header used to identify the SDK client variant and version.
     */
    public static readonly USER_AGENT: string = "User-Agent";

    /**
     * HTTP header that declares the request body content type.
     */
    public static readonly CONTENT_TYPE: string = "Content-Type";

    /**
     * HTTP header that declares which response content types the client accepts.
     */
    public static readonly ACCEPT: string = "Accept";

    /**
     * HTTP header that carries the serialized request body size in bytes when required.
     */
    public static readonly CONTENT_LENGTH: string = "Content-Length";

    /**
     * MIME type used for JSON request and response payloads.
     */
    public static readonly APPLICATION_JSON: string = "application/json";

    /**
     * MIME type used for MessagePack request and response payloads.
     */
    public static readonly APPLICATION_MSGPACK: string = "application/msgpack";

    /**
     * Transport header used to send the current auth token with HTTP requests.
     */
    public static readonly RequestAuthTokenCmd: string = "Auth-Token";

    /**
     * Transport header used to send the selected route secret key with HTTP requests.
     */
    public static readonly RequestSecretCmd: string = "Secret-Key";

    /**
     * Transport header used to send the current game id when the backend requires it.
     */
    public static readonly RequestGameIdCmd: string = "Game-Id";

    /**
     * Socket command name for MessagePack operation requests.
     */
    public static readonly RequestCmd_MsgPack: string = "rMsgPack";

    /**
     * Socket command name for MessagePack operation responses.
     */
    public static readonly ResponseCmd_MsgPack: string = "rMsgPack";

    /**
     * Socket command name for MessagePack pushed events.
     */
    public static readonly EventCmd_MsgPack: string = "eMsgPack";

    /**
     * Socket command name for JSON operation requests.
     */
    public static readonly RequestCmd_Json: string = "rJson";

    /**
     * Socket command name for JSON operation responses.
     */
    public static readonly ResponseCmd_Json: string = "rJson";

    /**
     * Socket command name for JSON pushed events.
     */
    public static readonly EventCmd_Json: string = "eJson";

    /**
     * Multipart field name used for non-file payload data.
     */
    public static readonly Data: string = "data";

    /**
     * Multipart field name used for uploaded file content.
     */
    public static readonly File: string = "file";

    /**
     * Reverse-proxy helper header that carries the original base URL when needed.
     */
    public static readonly BaseUrl: string = "X-BaseUrl";
}
