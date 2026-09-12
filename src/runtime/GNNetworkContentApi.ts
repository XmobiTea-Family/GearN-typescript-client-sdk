import { GNNetwork } from "./GNNetwork";
import { Action1 } from "./common/Action1";
import { GNHashtable } from "./common/GNData";
import { OperationRequest } from "./entity/OperationRequest";
import { ContentModels } from "./entity/models/ContentModels";
import { ContentRequestModels } from "./entity/models/ContentRequestModels";
import { ContentResponseModels } from "./entity/models/ContentResponseModels";

/**
 * Public client-scoped namespace for the Content domain.
 *
 * Reachable through {@link GNNetwork.content} after
 * {@link GNNetwork.init}. Manages the **metadata** side of the
 * file pipeline — registering an upload slot, listing previously
 * uploaded files, requesting a download token, and reading /
 * writing arbitrary `contentData` blobs keyed by content key.
 *
 * Raw byte transfer is intentionally **not** part of this API:
 * - Upload bytes go through {@link GNNetwork.uploadFile} after
 *   {@link createNewFileUploadInfo} returns a `fileId`.
 * - Download bytes are fetched through the URL produced by
 *   {@link GNNetwork.getDownloadFileUrl} after
 *   {@link requestDownloadFileUploadInfo} returns a download
 *   token.
 *
 * Common contract for every method:
 * - Routes through HTTP using {@link RequestType.Content} and the
 *   appropriate {@link RequestRole} for the sub-namespace
 *   (`Client` for this class, `Server` / `Admin` for the
 *   sub-namespaces below).
 * - The standard parameter set
 *   (`overrideAuthToken`, `overrideSecretKey`, `overrideGameId`, `customTags`,
 *   `timeout`) is documented on {@link GNNetwork.sendViaHttp}.
 */
export class ContentApi {
    /**
     * Server-scoped Content sub-namespace. Use from trusted
     * backend code with a valid server `secretKey`.
     */
    public server: ServerContentApi = new ServerContentApi();

    /**
     * Admin-scoped Content sub-namespace. Use from dashboard /
     * backoffice tooling with a valid admin auth token.
     */
    public admin: AdminContentApi = new AdminContentApi();

    /**
     * Reserves a new file slot and returns the `fileId` plus the
     * upload token / URL needed to push the bytes.
     *
     * Backed by {@link OperationCode.CreateNewFileUploadInfo}.
     * The application typically follows this with
     * {@link GNNetwork.uploadFile} to push the actual bytes; the
     * uploaded file becomes downloadable through
     * {@link requestDownloadFileUploadInfo} once committed.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public createNewFileUploadInfo(requestData: ContentModels.CreateNewFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.CreateNewFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.CreateNewFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.CreateNewFileUploadInfoOperationResponse);
    }

    /**
     * Promise-based wrapper around {@link createNewFileUploadInfo}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async createNewFileUploadInfoAsync(requestData: ContentModels.CreateNewFileUploadInfoRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<ContentResponseModels.CreateNewFileUploadInfoOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.CreateNewFileUploadInfoOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.CreateNewFileUploadInfoOperationResponse);
    }

    /**
     * Reads a `contentData` blob by content key.
     *
     * Backed by {@link OperationCode.GetContentData}. `contentData`
     * is a small, structured value the GearN backend stores under
     * a content key — useful for game-wide config, MOTDs,
     * remote-config flags, etc. Distinct from file uploads, which
     * use the `*FileUploadInfo*` operations on this class.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getContentData(requestData: ContentModels.GetContentDataRequestData, onResponse: Action1<ContentResponseModels.GetContentDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.GetContentDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.GetContentDataOperationResponse);
    }

    /**
     * Promise-based wrapper around {@link getContentData}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getContentDataAsync(requestData: ContentModels.GetContentDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<ContentResponseModels.GetContentDataOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.GetContentDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.GetContentDataOperationResponse);
    }

    /**
     * Lists previously registered file upload slots, optionally
     * filtered by tag / metadata supplied on the request DTO.
     *
     * Backed by {@link OperationCode.GetFileUploadInfoList}.
     * Useful for browsing previously uploaded assets, e.g. when
     * rebuilding a download cache.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getFileUploadInfoList(requestData: ContentModels.GetFileUploadInfoListRequestData, onResponse: Action1<ContentResponseModels.GetFileUploadInfoListOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.GetFileUploadInfoListOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.GetFileUploadInfoListOperationResponse);
    }

    /**
     * Promise-based wrapper around {@link getFileUploadInfoList}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getFileUploadInfoListAsync(requestData: ContentModels.GetFileUploadInfoListRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<ContentResponseModels.GetFileUploadInfoListOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.GetFileUploadInfoListOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.GetFileUploadInfoListOperationResponse);
    }

    /**
     * Returns the metadata for a single file upload slot.
     *
     * Backed by {@link OperationCode.GetFileUploadInfo}. Useful
     * for inspecting a known `fileId` (size, mime type, upload
     * status) without downloading the bytes.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getFileUploadInfo(requestData: ContentModels.GetFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.GetFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.GetFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.GetFileUploadInfoOperationResponse);
    }

    /**
     * Promise-based wrapper around {@link getFileUploadInfo}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getFileUploadInfoAsync(requestData: ContentModels.GetFileUploadInfoRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<ContentResponseModels.GetFileUploadInfoOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.GetFileUploadInfoOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.GetFileUploadInfoOperationResponse);
    }

    /**
     * Removes a previously registered file upload slot and any
     * stored bytes attached to it.
     *
     * Backed by {@link OperationCode.RemoveFileUploadInfo}. The
     * operation is irreversible from the client side; download
     * URLs that were already issued become invalid.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public removeFileUploadInfo(requestData: ContentModels.RemoveFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.RemoveFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.RemoveFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.RemoveFileUploadInfoOperationResponse);
    }

    /**
     * Promise-based wrapper around {@link removeFileUploadInfo}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async removeFileUploadInfoAsync(requestData: ContentModels.RemoveFileUploadInfoRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<ContentResponseModels.RemoveFileUploadInfoOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.RemoveFileUploadInfoOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.RemoveFileUploadInfoOperationResponse);
    }

    /**
     * Issues a short-lived download token for an existing file
     * upload slot.
     *
     * Backed by
     * {@link OperationCode.RequestDownloadFileUploadInfo}. Pair
     * the returned token with {@link GNNetwork.getDownloadFileUrl}
     * to obtain the absolute download URL.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public requestDownloadFileUploadInfo(requestData: ContentModels.RequestDownloadFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.RequestDownloadFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse);
    }

    /**
     * Promise-based wrapper around
     * {@link requestDownloadFileUploadInfo}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async requestDownloadFileUploadInfoAsync(requestData: ContentModels.RequestDownloadFileUploadInfoRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.RequestDownloadFileUploadInfoOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse);
    }

    /**
     * Writes / replaces a `contentData` blob by content key.
     *
     * Backed by {@link OperationCode.SetContentData}. Use to
     * publish small structured config values that should be
     * fetchable through {@link getContentData} later.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public setContentData(requestData: ContentModels.SetContentDataRequestData, onResponse: Action1<ContentResponseModels.SetContentDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.SetContentDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.SetContentDataOperationResponse);
    }

    /**
     * Promise-based wrapper around {@link setContentData}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async setContentDataAsync(requestData: ContentModels.SetContentDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<ContentResponseModels.SetContentDataOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.SetContentDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.SetContentDataOperationResponse);
    }

}

/**
 * Server-scoped Content namespace, reachable through
 * `GNNetwork.content.server`.
 *
 * Mirrors every method on {@link ContentApi} but uses the
 * `Server*RequestData` DTO variants. The server flavour accepts
 * additional `userId` / `ownerId` parameters so a trusted
 * backend can act on behalf of any player without holding their
 * auth token.
 *
 * Always pass a valid server-side `secretKey` (typically through
 * {@link GNServerSettings.setSecretKey} or `overrideSecretKey`)
 * so the backend can authorise the request.
 */
export class ServerContentApi {
    /**
     * Server variant of
     * {@link ContentApi.createNewFileUploadInfo}. Accepts the
     * extended {@link ContentModels.ServerCreateNewFileUploadInfoRequestData}
     * DTO so the request can target an arbitrary player.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public createNewFileUploadInfo(requestData: ContentModels.ServerCreateNewFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.CreateNewFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.ServerCreateNewFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.CreateNewFileUploadInfoOperationResponse);
    }

    /**
     * Promise-based wrapper around the server variant of
     * {@link ContentApi.createNewFileUploadInfo}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async createNewFileUploadInfoAsync(requestData: ContentModels.ServerCreateNewFileUploadInfoRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<ContentResponseModels.CreateNewFileUploadInfoOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.ServerCreateNewFileUploadInfoOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.CreateNewFileUploadInfoOperationResponse);
    }

    /**
     * Server variant of {@link ContentApi.getContentData}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getContentData(requestData: ContentModels.ServerGetContentDataRequestData, onResponse: Action1<ContentResponseModels.GetContentDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.ServerGetContentDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.GetContentDataOperationResponse);
    }

    /**
     * Promise-based wrapper around the server variant of
     * {@link ContentApi.getContentData}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getContentDataAsync(requestData: ContentModels.ServerGetContentDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<ContentResponseModels.GetContentDataOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.ServerGetContentDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.GetContentDataOperationResponse);
    }

    /**
     * Server variant of {@link ContentApi.getFileUploadInfoList}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getFileUploadInfoList(requestData: ContentModels.ServerGetFileUploadInfoListRequestData, onResponse: Action1<ContentResponseModels.GetFileUploadInfoListOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.ServerGetFileUploadInfoListOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.GetFileUploadInfoListOperationResponse);
    }

    /**
     * Promise-based wrapper around the server variant of
     * {@link ContentApi.getFileUploadInfoList}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getFileUploadInfoListAsync(requestData: ContentModels.ServerGetFileUploadInfoListRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<ContentResponseModels.GetFileUploadInfoListOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.ServerGetFileUploadInfoListOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.GetFileUploadInfoListOperationResponse);
    }

    /**
     * Server variant of {@link ContentApi.getFileUploadInfo}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getFileUploadInfo(requestData: ContentModels.ServerGetFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.GetFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.ServerGetFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.GetFileUploadInfoOperationResponse);
    }

    /**
     * Promise-based wrapper around the server variant of
     * {@link ContentApi.getFileUploadInfo}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getFileUploadInfoAsync(requestData: ContentModels.ServerGetFileUploadInfoRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<ContentResponseModels.GetFileUploadInfoOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.ServerGetFileUploadInfoOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.GetFileUploadInfoOperationResponse);
    }

    /**
     * Server variant of {@link ContentApi.removeFileUploadInfo}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public removeFileUploadInfo(requestData: ContentModels.ServerRemoveFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.RemoveFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.ServerRemoveFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.RemoveFileUploadInfoOperationResponse);
    }

    /**
     * Promise-based wrapper around the server variant of
     * {@link ContentApi.removeFileUploadInfo}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async removeFileUploadInfoAsync(requestData: ContentModels.ServerRemoveFileUploadInfoRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<ContentResponseModels.RemoveFileUploadInfoOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.ServerRemoveFileUploadInfoOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.RemoveFileUploadInfoOperationResponse);
    }

    /**
     * Server variant of
     * {@link ContentApi.requestDownloadFileUploadInfo}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public requestDownloadFileUploadInfo(requestData: ContentModels.ServerRequestDownloadFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.ServerRequestDownloadFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse);
    }

    /**
     * Promise-based wrapper around the server variant of
     * {@link ContentApi.requestDownloadFileUploadInfo}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async requestDownloadFileUploadInfoAsync(requestData: ContentModels.ServerRequestDownloadFileUploadInfoRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.ServerRequestDownloadFileUploadInfoOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse);
    }

    /**
     * Server variant of {@link ContentApi.setContentData}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public setContentData(requestData: ContentModels.ServerSetContentDataRequestData, onResponse: Action1<ContentResponseModels.SetContentDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.ServerSetContentDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.SetContentDataOperationResponse);
    }

    /**
     * Promise-based wrapper around the server variant of
     * {@link ContentApi.setContentData}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async setContentDataAsync(requestData: ContentModels.ServerSetContentDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<ContentResponseModels.SetContentDataOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.ServerSetContentDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.SetContentDataOperationResponse);
    }

}

/**
 * Admin-scoped Content namespace, reachable through
 * `GNNetwork.content.admin`.
 *
 * Mirrors the same method set as {@link ServerContentApi} but
 * routed through {@link RequestRole.Admin}. The backend uses the
 * caller's admin auth token to authorise privileged operations
 * such as touching another tenant's files. Most application code
 * never needs this namespace — dashboard / backoffice tools are
 * the primary consumers.
 */
export class AdminContentApi {
    /**
     * Admin variant of
     * {@link ContentApi.createNewFileUploadInfo}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public createNewFileUploadInfo(requestData: ContentModels.AdminCreateNewFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.CreateNewFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.AdminCreateNewFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.CreateNewFileUploadInfoOperationResponse);
    }

    /**
     * Promise-based wrapper around the admin variant of
     * {@link ContentApi.createNewFileUploadInfo}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async createNewFileUploadInfoAsync(requestData: ContentModels.AdminCreateNewFileUploadInfoRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<ContentResponseModels.CreateNewFileUploadInfoOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.AdminCreateNewFileUploadInfoOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.CreateNewFileUploadInfoOperationResponse);
    }

    /**
     * Admin variant of {@link ContentApi.getContentData}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getContentData(requestData: ContentModels.AdminGetContentDataRequestData, onResponse: Action1<ContentResponseModels.GetContentDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.AdminGetContentDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.GetContentDataOperationResponse);
    }

    /**
     * Promise-based wrapper around the admin variant of
     * {@link ContentApi.getContentData}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getContentDataAsync(requestData: ContentModels.AdminGetContentDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<ContentResponseModels.GetContentDataOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.AdminGetContentDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.GetContentDataOperationResponse);
    }

    /**
     * Admin variant of {@link ContentApi.getFileUploadInfoList}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getFileUploadInfoList(requestData: ContentModels.AdminGetFileUploadInfoListRequestData, onResponse: Action1<ContentResponseModels.GetFileUploadInfoListOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.AdminGetFileUploadInfoListOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.GetFileUploadInfoListOperationResponse);
    }

    /**
     * Promise-based wrapper around the admin variant of
     * {@link ContentApi.getFileUploadInfoList}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getFileUploadInfoListAsync(requestData: ContentModels.AdminGetFileUploadInfoListRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<ContentResponseModels.GetFileUploadInfoListOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.AdminGetFileUploadInfoListOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.GetFileUploadInfoListOperationResponse);
    }

    /**
     * Admin variant of {@link ContentApi.getFileUploadInfo}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getFileUploadInfo(requestData: ContentModels.AdminGetFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.GetFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.AdminGetFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.GetFileUploadInfoOperationResponse);
    }

    /**
     * Promise-based wrapper around the admin variant of
     * {@link ContentApi.getFileUploadInfo}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getFileUploadInfoAsync(requestData: ContentModels.AdminGetFileUploadInfoRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<ContentResponseModels.GetFileUploadInfoOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.AdminGetFileUploadInfoOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.GetFileUploadInfoOperationResponse);
    }

    /**
     * Admin variant of {@link ContentApi.removeFileUploadInfo}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public removeFileUploadInfo(requestData: ContentModels.AdminRemoveFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.RemoveFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.AdminRemoveFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.RemoveFileUploadInfoOperationResponse);
    }

    /**
     * Promise-based wrapper around the admin variant of
     * {@link ContentApi.removeFileUploadInfo}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async removeFileUploadInfoAsync(requestData: ContentModels.AdminRemoveFileUploadInfoRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<ContentResponseModels.RemoveFileUploadInfoOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.AdminRemoveFileUploadInfoOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.RemoveFileUploadInfoOperationResponse);
    }

    /**
     * Admin variant of
     * {@link ContentApi.requestDownloadFileUploadInfo}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public requestDownloadFileUploadInfo(requestData: ContentModels.AdminRequestDownloadFileUploadInfoRequestData, onResponse: Action1<ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.AdminRequestDownloadFileUploadInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse);
    }

    /**
     * Promise-based wrapper around the admin variant of
     * {@link ContentApi.requestDownloadFileUploadInfo}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async requestDownloadFileUploadInfoAsync(requestData: ContentModels.AdminRequestDownloadFileUploadInfoRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.AdminRequestDownloadFileUploadInfoOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse);
    }

    /**
     * Admin variant of {@link ContentApi.setContentData}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public setContentData(requestData: ContentModels.AdminSetContentDataRequestData, onResponse: Action1<ContentResponseModels.SetContentDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new ContentRequestModels.AdminSetContentDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.SetContentDataOperationResponse);
    }

    /**
     * Promise-based wrapper around the admin variant of
     * {@link ContentApi.setContentData}.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async setContentDataAsync(requestData: ContentModels.AdminSetContentDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<ContentResponseModels.SetContentDataOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new ContentRequestModels.AdminSetContentDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, ContentResponseModels.SetContentDataOperationResponse);
    }

}
