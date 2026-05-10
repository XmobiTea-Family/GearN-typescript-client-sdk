/**
 * Wrapper returned by {@link GNNetwork.uploadFile} /
 * `uploadFileAsync`.
 *
 * The upload endpoint does not return a structured payload — a
 * `200` response with an empty body is enough to confirm the upload
 * was committed. The SDK therefore exposes a single `error` field
 * which is `null` on success and a captured error message on
 * failure (auth missing, transport error, non-200 status). The
 * application consumes the response with a simple
 * `if (response.error) { ... }` check.
 */
export class UploadFileResponse {
    /**
     * Transport / authentication error captured by the SDK, or
     * `null` when the upload succeeded. Common values:
     * `"Auth token null"` (the cached token was empty),
     * `"Unknown Error"` (non-200 status with no captured detail),
     * or any Axios-thrown error message.
     */
    public error: string;

}
