import { GNNetwork } from "./GNNetwork";
import { Action1 } from "./common/Action1";
import { GNHashtable } from "./common/GNData";
import { OperationRequest } from "./entity/OperationRequest";
import { DashboardModels } from "./entity/models/DashboardModels";
import { DashboardRequestModels } from "./entity/models/DashboardRequestModels";
import { DashboardResponseModels } from "./entity/models/DashboardResponseModels";

/**
 * Public dashboard / admin-facing namespace.
 *
 * Reachable through {@link GNNetwork.dashboard} after
 * {@link GNNetwork.init}. Provides the operations that backend
 * tooling (admin dashboards, ops scripts, internal CLIs) calls
 * to manage games, accounts, secrets, analytics, server logs
 * and CloudScript event-callback wiring.
 *
 * **Permission model**: methods on this class still route
 * through {@link RequestRole.Client} on the wire; the backend
 * resolves dashboard permission from the **auth token itself**
 * — typically a token issued by `loginByAdminAccount`. Calling
 * these methods with a regular player auth token will fail with
 * `ReturnCode.OperationNotAuthorized`.
 *
 * Functional groupings:
 *
 * 1. **Admin auth & accounts** —
 *    `loginByAdminAccount`, `changePasswordAdminAccount`,
 *    `setPasswordAdminAccount`,
 *    `setSecretKeyAdminAccount`, `createAdminAccount`,
 *    `removeAdminAccount`, `getAdminAccountList`,
 *    `getUsernameAdminAccount`.
 * 2. **Game & game settings** — `getGameList`,
 *    `createGame`, `getGameInformation`,
 *    `setGameInformation`, `getMasterGameSettings`,
 *    `setMasterGameSettings`.
 * 3. **Secrets** — `getSecretInfoList`,
 *    `getSecretInfoInformation`, `createSecretInfo`,
 *    `setSecretInfoInformation`.
 * 4. **Server diagnostics & analytics** — `getServerLog`,
 *    `getServerGameData`, `getAnalytics`.
 * 5. **CloudScript glue** —
 *    `getEventCallbackCloudScript`,
 *    `setEventCallbackCloudScript` (binds named events to
 *    CloudScript functions).
 * 6. **Leaderboards & data ops** —
 *    `resetStatisticsLeaderboard`,
 *    `getBackupStatisticsLeaderboardVersion`,
 *    `deleteInDatabase`. Use the latter with extreme care; it
 *    is a destructive maintenance operation.
 *
 * Common contract: HTTP / {@link RequestType.Dashboard} /
 * {@link RequestRole.Client}, plus admin auth-token
 * authorisation. Companion {@link ServerDashboardApi} and
 * {@link AdminDashboardApi} are placeholders today.
 */
export class DashboardApi {
    /** Exposed for namespace symmetry only. Dashboard currently has no public server-scoped methods. */
    public server: ServerDashboardApi = new ServerDashboardApi();

    /** Exposed for namespace symmetry only. Dashboard currently has no public admin-scoped methods. */
    public admin: AdminDashboardApi = new AdminDashboardApi();

    /**
     * Sends the changePasswordAdminAccount operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public changePasswordAdminAccount(requestData: DashboardModels.ChangePasswordAdminAccountRequestData, onResponse: Action1<DashboardResponseModels.ChangePasswordAdminAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.ChangePasswordAdminAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.ChangePasswordAdminAccountOperationResponse);
    }

    /**
     * Sends the changePasswordAdminAccount operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async changePasswordAdminAccountAsync(requestData: DashboardModels.ChangePasswordAdminAccountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<DashboardResponseModels.ChangePasswordAdminAccountOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.ChangePasswordAdminAccountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.ChangePasswordAdminAccountOperationResponse);
    }

    /**
     * Sends the getAdminAccountList operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getAdminAccountList(requestData: DashboardModels.GetAdminAccountListRequestData, onResponse: Action1<DashboardResponseModels.GetAdminAccountListOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetAdminAccountListOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.GetAdminAccountListOperationResponse);
    }

    /**
     * Sends the getAdminAccountList operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getAdminAccountListAsync(requestData: DashboardModels.GetAdminAccountListRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<DashboardResponseModels.GetAdminAccountListOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetAdminAccountListOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.GetAdminAccountListOperationResponse);
    }

    /**
     * Sends the getGameInformation operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getGameInformation(requestData: DashboardModels.GetGameInformationRequestData, onResponse: Action1<DashboardResponseModels.GetGameInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetGameInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.GetGameInformationOperationResponse);
    }

    /**
     * Sends the getGameInformation operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getGameInformationAsync(requestData: DashboardModels.GetGameInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<DashboardResponseModels.GetGameInformationOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetGameInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.GetGameInformationOperationResponse);
    }

    /**
     * Sends the getGameList operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getGameList(requestData: DashboardModels.GetGameListRequestData, onResponse: Action1<DashboardResponseModels.GetGameListOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetGameListOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.GetGameListOperationResponse);
    }

    /**
     * Sends the getGameList operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getGameListAsync(requestData: DashboardModels.GetGameListRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<DashboardResponseModels.GetGameListOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetGameListOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.GetGameListOperationResponse);
    }

    /**
     * Sends the getMasterGameSettings operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getMasterGameSettings(requestData: DashboardModels.GetMasterGameSettingsRequestData, onResponse: Action1<DashboardResponseModels.GetMasterGameSettingsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetMasterGameSettingsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.GetMasterGameSettingsOperationResponse);
    }

    /**
     * Sends the getMasterGameSettings operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getMasterGameSettingsAsync(requestData: DashboardModels.GetMasterGameSettingsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<DashboardResponseModels.GetMasterGameSettingsOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetMasterGameSettingsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.GetMasterGameSettingsOperationResponse);
    }

    /**
     * Sends the getSecretInfoInformation operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getSecretInfoInformation(requestData: DashboardModels.GetSecretInfoInformationRequestData, onResponse: Action1<DashboardResponseModels.GetSecretInfoInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetSecretInfoInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.GetSecretInfoInformationOperationResponse);
    }

    /**
     * Sends the getSecretInfoInformation operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getSecretInfoInformationAsync(requestData: DashboardModels.GetSecretInfoInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<DashboardResponseModels.GetSecretInfoInformationOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetSecretInfoInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.GetSecretInfoInformationOperationResponse);
    }

    /**
     * Sends the getSecretInfoList operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getSecretInfoList(requestData: DashboardModels.GetSecretInfoListRequestData, onResponse: Action1<DashboardResponseModels.GetSecretInfoListOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetSecretInfoListOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.GetSecretInfoListOperationResponse);
    }

    /**
     * Sends the getSecretInfoList operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getSecretInfoListAsync(requestData: DashboardModels.GetSecretInfoListRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<DashboardResponseModels.GetSecretInfoListOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetSecretInfoListOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.GetSecretInfoListOperationResponse);
    }

    /**
     * Sends the getServerLog operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getServerLog(requestData: DashboardModels.GetServerLogRequestData, onResponse: Action1<DashboardResponseModels.GetServerLogOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetServerLogOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.GetServerLogOperationResponse);
    }

    /**
     * Sends the getServerLog operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getServerLogAsync(requestData: DashboardModels.GetServerLogRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<DashboardResponseModels.GetServerLogOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetServerLogOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.GetServerLogOperationResponse);
    }

    /**
     * Sends the createAdminAccount operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public createAdminAccount(requestData: DashboardModels.CreateAdminAccountRequestData, onResponse: Action1<DashboardResponseModels.CreateAdminAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.CreateAdminAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.CreateAdminAccountOperationResponse);
    }

    /**
     * Sends the createAdminAccount operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async createAdminAccountAsync(requestData: DashboardModels.CreateAdminAccountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<DashboardResponseModels.CreateAdminAccountOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.CreateAdminAccountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.CreateAdminAccountOperationResponse);
    }

    /**
     * Sends the createGame operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public createGame(requestData: DashboardModels.CreateGameRequestData, onResponse: Action1<DashboardResponseModels.CreateGameOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.CreateGameOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.CreateGameOperationResponse);
    }

    /**
     * Sends the createGame operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async createGameAsync(requestData: DashboardModels.CreateGameRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<DashboardResponseModels.CreateGameOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.CreateGameOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.CreateGameOperationResponse);
    }

    /**
     * Sends the createSecretInfo operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public createSecretInfo(requestData: DashboardModels.CreateSecretInfoRequestData, onResponse: Action1<DashboardResponseModels.CreateSecretInfoOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.CreateSecretInfoOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.CreateSecretInfoOperationResponse);
    }

    /**
     * Sends the createSecretInfo operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async createSecretInfoAsync(requestData: DashboardModels.CreateSecretInfoRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<DashboardResponseModels.CreateSecretInfoOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.CreateSecretInfoOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.CreateSecretInfoOperationResponse);
    }

    /**
     * Sends the loginByAdminAccount operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public loginByAdminAccount(requestData: DashboardModels.LoginByAdminAccountRequestData, onResponse: Action1<DashboardResponseModels.LoginByAdminAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.LoginByAdminAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.LoginByAdminAccountOperationResponse);
    }

    /**
     * Sends the loginByAdminAccount operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async loginByAdminAccountAsync(requestData: DashboardModels.LoginByAdminAccountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<DashboardResponseModels.LoginByAdminAccountOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.LoginByAdminAccountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.LoginByAdminAccountOperationResponse);
    }

    /**
     * Sends the removeAdminAccount operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public removeAdminAccount(requestData: DashboardModels.RemoveAdminAccountRequestData, onResponse: Action1<DashboardResponseModels.RemoveAdminAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.RemoveAdminAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.RemoveAdminAccountOperationResponse);
    }

    /**
     * Sends the removeAdminAccount operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async removeAdminAccountAsync(requestData: DashboardModels.RemoveAdminAccountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<DashboardResponseModels.RemoveAdminAccountOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.RemoveAdminAccountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.RemoveAdminAccountOperationResponse);
    }

    /**
     * Sends the setGameInformation operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public setGameInformation(requestData: DashboardModels.SetGameInformationRequestData, onResponse: Action1<DashboardResponseModels.SetGameInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.SetGameInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.SetGameInformationOperationResponse);
    }

    /**
     * Sends the setGameInformation operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async setGameInformationAsync(requestData: DashboardModels.SetGameInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<DashboardResponseModels.SetGameInformationOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.SetGameInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.SetGameInformationOperationResponse);
    }

    /**
     * Sends the setMasterGameSettings operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public setMasterGameSettings(requestData: DashboardModels.SetMasterGameSettingsRequestData, onResponse: Action1<DashboardResponseModels.SetMasterGameSettingsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.SetMasterGameSettingsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.SetMasterGameSettingsOperationResponse);
    }

    /**
     * Sends the setMasterGameSettings operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async setMasterGameSettingsAsync(requestData: DashboardModels.SetMasterGameSettingsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<DashboardResponseModels.SetMasterGameSettingsOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.SetMasterGameSettingsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.SetMasterGameSettingsOperationResponse);
    }

    /**
     * Sends the setPasswordAdminAccount operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public setPasswordAdminAccount(requestData: DashboardModels.SetPasswordAdminAccountRequestData, onResponse: Action1<DashboardResponseModels.SetPasswordAdminAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.SetPasswordAdminAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.SetPasswordAdminAccountOperationResponse);
    }

    /**
     * Sends the setPasswordAdminAccount operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async setPasswordAdminAccountAsync(requestData: DashboardModels.SetPasswordAdminAccountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<DashboardResponseModels.SetPasswordAdminAccountOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.SetPasswordAdminAccountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.SetPasswordAdminAccountOperationResponse);
    }

    /**
     * Sends the setSecretInfoInformation operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public setSecretInfoInformation(requestData: DashboardModels.SetSecretInfoInformationRequestData, onResponse: Action1<DashboardResponseModels.SetSecretInfoInformationOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.SetSecretInfoInformationOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.SetSecretInfoInformationOperationResponse);
    }

    /**
     * Sends the setSecretInfoInformation operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async setSecretInfoInformationAsync(requestData: DashboardModels.SetSecretInfoInformationRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<DashboardResponseModels.SetSecretInfoInformationOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.SetSecretInfoInformationOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.SetSecretInfoInformationOperationResponse);
    }

    /**
     * Sends the setSecretKeyAdminAccount operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public setSecretKeyAdminAccount(requestData: DashboardModels.SetSecretKeyAdminAccountRequestData, onResponse: Action1<DashboardResponseModels.SetSecretKeyAdminAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.SetSecretKeyAdminAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.SetSecretKeyAdminAccountOperationResponse);
    }

    /**
     * Sends the setSecretKeyAdminAccount operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async setSecretKeyAdminAccountAsync(requestData: DashboardModels.SetSecretKeyAdminAccountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<DashboardResponseModels.SetSecretKeyAdminAccountOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.SetSecretKeyAdminAccountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.SetSecretKeyAdminAccountOperationResponse);
    }

    /**
     * Sends the getUsernameAdminAccount operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getUsernameAdminAccount(requestData: DashboardModels.GetUsernameAdminAccountRequestData, onResponse: Action1<DashboardResponseModels.GetUsernameAdminAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetUsernameAdminAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.GetUsernameAdminAccountOperationResponse);
    }

    /**
     * Sends the getUsernameAdminAccount operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getUsernameAdminAccountAsync(requestData: DashboardModels.GetUsernameAdminAccountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<DashboardResponseModels.GetUsernameAdminAccountOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetUsernameAdminAccountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.GetUsernameAdminAccountOperationResponse);
    }

    /**
     * Sends the getAnalytics operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getAnalytics(requestData: DashboardModels.GetAnalyticsRequestData, onResponse: Action1<DashboardResponseModels.GetAnalyticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetAnalyticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.GetAnalyticsOperationResponse);
    }

    /**
     * Sends the getAnalytics operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getAnalyticsAsync(requestData: DashboardModels.GetAnalyticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<DashboardResponseModels.GetAnalyticsOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetAnalyticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.GetAnalyticsOperationResponse);
    }

    /**
     * Sends the getEventCallbackCloudScript operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getEventCallbackCloudScript(requestData: DashboardModels.GetEventCallbackCloudScriptRequestData, onResponse: Action1<DashboardResponseModels.GetEventCallbackCloudScriptOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetEventCallbackCloudScriptOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.GetEventCallbackCloudScriptOperationResponse);
    }

    /**
     * Sends the getEventCallbackCloudScript operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getEventCallbackCloudScriptAsync(requestData: DashboardModels.GetEventCallbackCloudScriptRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<DashboardResponseModels.GetEventCallbackCloudScriptOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetEventCallbackCloudScriptOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.GetEventCallbackCloudScriptOperationResponse);
    }

    /**
     * Sends the setEventCallbackCloudScript operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public setEventCallbackCloudScript(requestData: DashboardModels.SetEventCallbackCloudScriptRequestData, onResponse: Action1<DashboardResponseModels.SetEventCallbackCloudScriptOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.SetEventCallbackCloudScriptOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.SetEventCallbackCloudScriptOperationResponse);
    }

    /**
     * Sends the setEventCallbackCloudScript operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async setEventCallbackCloudScriptAsync(requestData: DashboardModels.SetEventCallbackCloudScriptRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<DashboardResponseModels.SetEventCallbackCloudScriptOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.SetEventCallbackCloudScriptOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.SetEventCallbackCloudScriptOperationResponse);
    }

    /**
     * Sends the resetStatisticsLeaderboard operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public resetStatisticsLeaderboard(requestData: DashboardModels.ResetStatisticsLeaderboardRequestData, onResponse: Action1<DashboardResponseModels.ResetStatisticsLeaderboardOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.ResetStatisticsLeaderboardOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.ResetStatisticsLeaderboardOperationResponse);
    }

    /**
     * Sends the resetStatisticsLeaderboard operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async resetStatisticsLeaderboardAsync(requestData: DashboardModels.ResetStatisticsLeaderboardRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<DashboardResponseModels.ResetStatisticsLeaderboardOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.ResetStatisticsLeaderboardOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.ResetStatisticsLeaderboardOperationResponse);
    }

    /**
     * Sends the getBackupStatisticsLeaderboardVersion operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getBackupStatisticsLeaderboardVersion(requestData: DashboardModels.GetBackupStatisticsLeaderboardVersionRequestData, onResponse: Action1<DashboardResponseModels.GetBackupStatisticsLeaderboardVersionOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetBackupStatisticsLeaderboardVersionOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.GetBackupStatisticsLeaderboardVersionOperationResponse);
    }

    /**
     * Sends the getBackupStatisticsLeaderboardVersion operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getBackupStatisticsLeaderboardVersionAsync(requestData: DashboardModels.GetBackupStatisticsLeaderboardVersionRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<DashboardResponseModels.GetBackupStatisticsLeaderboardVersionOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetBackupStatisticsLeaderboardVersionOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.GetBackupStatisticsLeaderboardVersionOperationResponse);
    }

    /**
     * Sends the getServerGameData operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getServerGameData(requestData: DashboardModels.GetServerGameDataRequestData, onResponse: Action1<DashboardResponseModels.GetServerGameDataOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.GetServerGameDataOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.GetServerGameDataOperationResponse);
    }

    /**
     * Sends the getServerGameData operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getServerGameDataAsync(requestData: DashboardModels.GetServerGameDataRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<DashboardResponseModels.GetServerGameDataOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.GetServerGameDataOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.GetServerGameDataOperationResponse);
    }

    /**
     * Sends the deleteInDatabase operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public deleteInDatabase(requestData: DashboardModels.DeleteInDatabaseRequestData, onResponse: Action1<DashboardResponseModels.DeleteInDatabaseOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new DashboardRequestModels.DeleteInDatabaseOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.DeleteInDatabaseOperationResponse);
    }

    /**
     * Sends the deleteInDatabase operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async deleteInDatabaseAsync(requestData: DashboardModels.DeleteInDatabaseRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<DashboardResponseModels.DeleteInDatabaseOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new DashboardRequestModels.DeleteInDatabaseOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, DashboardResponseModels.DeleteInDatabaseOperationResponse);
    }

}

/**
 * Server-scoped Dashboard sub-namespace — placeholder.
 *
 * Reserved for future server-only dashboard operations.
 * Allocated by {@link DashboardApi} so the `.server` property
 * name is always defined, even though no methods are exposed
 * yet.
 */
export class ServerDashboardApi {
}

/**
 * Admin-scoped Dashboard sub-namespace — placeholder.
 *
 * Reserved for future admin-only dashboard operations.
 * Allocated for the same symmetry reason as
 * {@link ServerDashboardApi}.
 */
export class AdminDashboardApi {
}
