import { GNNetwork } from "./GNNetwork";
import { Action1 } from "./common/Action1";
import { GNHashtable } from "./common/GNData";
import { OperationRequest } from "./entity/OperationRequest";
import { MultiplayerModels } from "./entity/models/MultiplayerModels";
import { MultiplayerRequestModels } from "./entity/models/MultiplayerRequestModels";
import { MultiplayerResponseModels } from "./entity/models/MultiplayerResponseModels";

/**
 * Public client-scoped namespace for the Multiplayer domain.
 *
 * Reachable through {@link GNNetwork.multiplayer} after
 * {@link GNNetwork.init}. Manages matchmaking tickets, queue
 * statistics, and historical match queries.
 *
 * Note: this namespace is **not** the raw realtime socket
 * transport — it is the HTTP-based matchmaking control plane.
 * Once a ticket succeeds and produces a {@link MatchStatus}
 * `Matched` record, the application connects to the
 * dedicated game server using the connection details on the
 * match record (out-of-band relative to the GearN SDK).
 *
 * Functional groupings:
 *
 * 1. **Ticket lifecycle** — `createMatchmakingTicket`,
 *    `getMatchmakingTicket`, `cancelMatchmakingTicket`,
 *    `cancelAllMatchmakingTicket`. Tickets progress through
 *    {@link MatchmakingTicketStatus} states; per-member
 *    state is described by
 *    {@link MatchmakingMemberStatus}.
 * 2. **Match queries** — `getMatch`, `getMatches`,
 *    `getMatchHistory`. Match records carry
 *    {@link MatchStatus}.
 * 3. **Queue analytics** — `getMatchmakingQueueStatistics`
 *    and related read helpers for diagnostics dashboards.
 *
 * Common contract: same as {@link GamePlayerApi} (HTTP /
 * `RequestType.Multiplayer` / `RequestRole.Client`,
 * callback + Promise variants, `.server` / `.admin`
 * sub-namespaces).
 */
export class MultiplayerApi {
    /** Server-scoped multiplayer operations for trusted backend callers. */
    public server: ServerMultiplayerApi = new ServerMultiplayerApi();

    /** Admin-scoped multiplayer operations for dashboard, GM, or backoffice callers. */
    public admin: AdminMultiplayerApi = new AdminMultiplayerApi();

    /**
     * Sends the cancelAllMatchmakingTicket operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public cancelAllMatchmakingTicket(requestData: MultiplayerModels.CancelAllMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.CancelAllMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.CancelAllMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.CancelAllMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the cancelAllMatchmakingTicket operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async cancelAllMatchmakingTicketAsync(requestData: MultiplayerModels.CancelAllMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<MultiplayerResponseModels.CancelAllMatchmakingTicketOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.CancelAllMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.CancelAllMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the cancelMatchmakingTicket operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public cancelMatchmakingTicket(requestData: MultiplayerModels.CancelMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.CancelMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.CancelMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.CancelMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the cancelMatchmakingTicket operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async cancelMatchmakingTicketAsync(requestData: MultiplayerModels.CancelMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<MultiplayerResponseModels.CancelMatchmakingTicketOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.CancelMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.CancelMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the createMatchmakingTicket operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public createMatchmakingTicket(requestData: MultiplayerModels.CreateMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.CreateMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.CreateMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.CreateMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the createMatchmakingTicket operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async createMatchmakingTicketAsync(requestData: MultiplayerModels.CreateMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<MultiplayerResponseModels.CreateMatchmakingTicketOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.CreateMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.CreateMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the getMatchmakingTicket operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getMatchmakingTicket(requestData: MultiplayerModels.GetMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.GetMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.GetMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.GetMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the getMatchmakingTicket operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getMatchmakingTicketAsync(requestData: MultiplayerModels.GetMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<MultiplayerResponseModels.GetMatchmakingTicketOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.GetMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.GetMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the getMatch operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getMatch(requestData: MultiplayerModels.GetMatchRequestData, onResponse: Action1<MultiplayerResponseModels.GetMatchOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.GetMatchOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.GetMatchOperationResponse);
    }

    /**
     * Sends the getMatch operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getMatchAsync(requestData: MultiplayerModels.GetMatchRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<MultiplayerResponseModels.GetMatchOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.GetMatchOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.GetMatchOperationResponse);
    }

    /**
     * Sends the getQueueStatistics operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getQueueStatistics(requestData: MultiplayerModels.GetQueueStatisticsRequestData, onResponse: Action1<MultiplayerResponseModels.GetQueueStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.GetQueueStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.GetQueueStatisticsOperationResponse);
    }

    /**
     * Sends the getQueueStatistics operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getQueueStatisticsAsync(requestData: MultiplayerModels.GetQueueStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<MultiplayerResponseModels.GetQueueStatisticsOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.GetQueueStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.GetQueueStatisticsOperationResponse);
    }

    /**
     * Sends the joinMatchmakingTicket operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public joinMatchmakingTicket(requestData: MultiplayerModels.JoinMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.JoinMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.JoinMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.JoinMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the joinMatchmakingTicket operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async joinMatchmakingTicketAsync(requestData: MultiplayerModels.JoinMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<MultiplayerResponseModels.JoinMatchmakingTicketOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.JoinMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.JoinMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the listMatchmakingTicketsForPlayer operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public listMatchmakingTicketsForPlayer(requestData: MultiplayerModels.ListMatchmakingTicketsForPlayerRequestData, onResponse: Action1<MultiplayerResponseModels.ListMatchmakingTicketsForPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.ListMatchmakingTicketsForPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.ListMatchmakingTicketsForPlayerOperationResponse);
    }

    /**
     * Sends the listMatchmakingTicketsForPlayer operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async listMatchmakingTicketsForPlayerAsync(requestData: MultiplayerModels.ListMatchmakingTicketsForPlayerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<MultiplayerResponseModels.ListMatchmakingTicketsForPlayerOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.ListMatchmakingTicketsForPlayerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.ListMatchmakingTicketsForPlayerOperationResponse);
    }

    /**
     * Sends the getAllMatch operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getAllMatch(requestData: MultiplayerModels.GetAllMatchRequestData, onResponse: Action1<MultiplayerResponseModels.GetAllMatchOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.GetAllMatchOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.GetAllMatchOperationResponse);
    }

    /**
     * Sends the getAllMatch operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getAllMatchAsync(requestData: MultiplayerModels.GetAllMatchRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<MultiplayerResponseModels.GetAllMatchOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.GetAllMatchOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.GetAllMatchOperationResponse);
    }

    /**
     * Sends the getAllMatchmakingTicket operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getAllMatchmakingTicket(requestData: MultiplayerModels.GetAllMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.GetAllMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.GetAllMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.GetAllMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the getAllMatchmakingTicket operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getAllMatchmakingTicketAsync(requestData: MultiplayerModels.GetAllMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<MultiplayerResponseModels.GetAllMatchmakingTicketOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.GetAllMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.GetAllMatchmakingTicketOperationResponse);
    }

}

/**
 * Server-scoped Multiplayer namespace, reachable through
 * `GNNetwork.multiplayer.server`.
 *
 * Mirrors every method on {@link MultiplayerApi} but uses the
 * `Server*RequestData` DTO variants. Used by trusted backends
 * (e.g. dedicated game servers reporting match completion,
 * matchmaking adjuncts canceling stale tickets). Always pass
 * a valid server-side `secretKey`.
 */
export class ServerMultiplayerApi {
    /**
     * Sends the cancelAllMatchmakingTicket operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public cancelAllMatchmakingTicket(requestData: MultiplayerModels.ServerCancelAllMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.CancelAllMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.ServerCancelAllMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.CancelAllMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the cancelAllMatchmakingTicket operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async cancelAllMatchmakingTicketAsync(requestData: MultiplayerModels.ServerCancelAllMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<MultiplayerResponseModels.CancelAllMatchmakingTicketOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.ServerCancelAllMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.CancelAllMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the cancelMatchmakingTicket operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public cancelMatchmakingTicket(requestData: MultiplayerModels.ServerCancelMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.CancelMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.ServerCancelMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.CancelMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the cancelMatchmakingTicket operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async cancelMatchmakingTicketAsync(requestData: MultiplayerModels.ServerCancelMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<MultiplayerResponseModels.CancelMatchmakingTicketOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.ServerCancelMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.CancelMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the createMatchmakingTicket operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public createMatchmakingTicket(requestData: MultiplayerModels.ServerCreateMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.CreateMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.ServerCreateMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.CreateMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the createMatchmakingTicket operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async createMatchmakingTicketAsync(requestData: MultiplayerModels.ServerCreateMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<MultiplayerResponseModels.CreateMatchmakingTicketOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.ServerCreateMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.CreateMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the getMatchmakingTicket operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getMatchmakingTicket(requestData: MultiplayerModels.ServerGetMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.GetMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.ServerGetMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.GetMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the getMatchmakingTicket operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getMatchmakingTicketAsync(requestData: MultiplayerModels.ServerGetMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<MultiplayerResponseModels.GetMatchmakingTicketOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.ServerGetMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.GetMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the getMatch operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getMatch(requestData: MultiplayerModels.ServerGetMatchRequestData, onResponse: Action1<MultiplayerResponseModels.GetMatchOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.ServerGetMatchOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.GetMatchOperationResponse);
    }

    /**
     * Sends the getMatch operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getMatchAsync(requestData: MultiplayerModels.ServerGetMatchRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<MultiplayerResponseModels.GetMatchOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.ServerGetMatchOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.GetMatchOperationResponse);
    }

    /**
     * Sends the getQueueStatistics operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getQueueStatistics(requestData: MultiplayerModels.ServerGetQueueStatisticsRequestData, onResponse: Action1<MultiplayerResponseModels.GetQueueStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.ServerGetQueueStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.GetQueueStatisticsOperationResponse);
    }

    /**
     * Sends the getQueueStatistics operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getQueueStatisticsAsync(requestData: MultiplayerModels.ServerGetQueueStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<MultiplayerResponseModels.GetQueueStatisticsOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.ServerGetQueueStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.GetQueueStatisticsOperationResponse);
    }

    /**
     * Sends the joinMatchmakingTicket operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public joinMatchmakingTicket(requestData: MultiplayerModels.ServerJoinMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.JoinMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.ServerJoinMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.JoinMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the joinMatchmakingTicket operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async joinMatchmakingTicketAsync(requestData: MultiplayerModels.ServerJoinMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<MultiplayerResponseModels.JoinMatchmakingTicketOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.ServerJoinMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.JoinMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the listMatchmakingTicketsForPlayer operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public listMatchmakingTicketsForPlayer(requestData: MultiplayerModels.ServerListMatchmakingTicketsForPlayerRequestData, onResponse: Action1<MultiplayerResponseModels.ListMatchmakingTicketsForPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.ServerListMatchmakingTicketsForPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.ListMatchmakingTicketsForPlayerOperationResponse);
    }

    /**
     * Sends the listMatchmakingTicketsForPlayer operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async listMatchmakingTicketsForPlayerAsync(requestData: MultiplayerModels.ServerListMatchmakingTicketsForPlayerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<MultiplayerResponseModels.ListMatchmakingTicketsForPlayerOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.ServerListMatchmakingTicketsForPlayerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.ListMatchmakingTicketsForPlayerOperationResponse);
    }

    /**
     * Sends the getAllMatch operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getAllMatch(requestData: MultiplayerModels.ServerGetAllMatchRequestData, onResponse: Action1<MultiplayerResponseModels.GetAllMatchOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.ServerGetAllMatchOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.GetAllMatchOperationResponse);
    }

    /**
     * Sends the getAllMatch operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getAllMatchAsync(requestData: MultiplayerModels.ServerGetAllMatchRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<MultiplayerResponseModels.GetAllMatchOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.ServerGetAllMatchOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.GetAllMatchOperationResponse);
    }

    /**
     * Sends the getAllMatchmakingTicket operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getAllMatchmakingTicket(requestData: MultiplayerModels.ServerGetAllMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.GetAllMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.ServerGetAllMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.GetAllMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the getAllMatchmakingTicket operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getAllMatchmakingTicketAsync(requestData: MultiplayerModels.ServerGetAllMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<MultiplayerResponseModels.GetAllMatchmakingTicketOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.ServerGetAllMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.GetAllMatchmakingTicketOperationResponse);
    }

}

/**
 * Admin-scoped Multiplayer namespace, reachable through
 * `GNNetwork.multiplayer.admin`.
 *
 * Mirrors {@link ServerMultiplayerApi} but routed through
 * {@link RequestRole.Admin}. Used by dashboard / monitoring
 * tools that need to inspect or force-cancel any ticket /
 * match across the system.
 */
export class AdminMultiplayerApi {
    /**
     * Sends the cancelAllMatchmakingTicket operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public cancelAllMatchmakingTicket(requestData: MultiplayerModels.AdminCancelAllMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.CancelAllMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.AdminCancelAllMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.CancelAllMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the cancelAllMatchmakingTicket operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async cancelAllMatchmakingTicketAsync(requestData: MultiplayerModels.AdminCancelAllMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<MultiplayerResponseModels.CancelAllMatchmakingTicketOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.AdminCancelAllMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.CancelAllMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the cancelMatchmakingTicket operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public cancelMatchmakingTicket(requestData: MultiplayerModels.AdminCancelMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.CancelMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.AdminCancelMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.CancelMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the cancelMatchmakingTicket operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async cancelMatchmakingTicketAsync(requestData: MultiplayerModels.AdminCancelMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<MultiplayerResponseModels.CancelMatchmakingTicketOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.AdminCancelMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.CancelMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the createMatchmakingTicket operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public createMatchmakingTicket(requestData: MultiplayerModels.AdminCreateMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.CreateMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.AdminCreateMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.CreateMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the createMatchmakingTicket operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async createMatchmakingTicketAsync(requestData: MultiplayerModels.AdminCreateMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<MultiplayerResponseModels.CreateMatchmakingTicketOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.AdminCreateMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.CreateMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the getMatchmakingTicket operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getMatchmakingTicket(requestData: MultiplayerModels.AdminGetMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.GetMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.AdminGetMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.GetMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the getMatchmakingTicket operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getMatchmakingTicketAsync(requestData: MultiplayerModels.AdminGetMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<MultiplayerResponseModels.GetMatchmakingTicketOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.AdminGetMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.GetMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the getMatch operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getMatch(requestData: MultiplayerModels.AdminGetMatchRequestData, onResponse: Action1<MultiplayerResponseModels.GetMatchOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.AdminGetMatchOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.GetMatchOperationResponse);
    }

    /**
     * Sends the getMatch operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getMatchAsync(requestData: MultiplayerModels.AdminGetMatchRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<MultiplayerResponseModels.GetMatchOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.AdminGetMatchOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.GetMatchOperationResponse);
    }

    /**
     * Sends the getQueueStatistics operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getQueueStatistics(requestData: MultiplayerModels.AdminGetQueueStatisticsRequestData, onResponse: Action1<MultiplayerResponseModels.GetQueueStatisticsOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.AdminGetQueueStatisticsOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.GetQueueStatisticsOperationResponse);
    }

    /**
     * Sends the getQueueStatistics operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getQueueStatisticsAsync(requestData: MultiplayerModels.AdminGetQueueStatisticsRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<MultiplayerResponseModels.GetQueueStatisticsOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.AdminGetQueueStatisticsOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.GetQueueStatisticsOperationResponse);
    }

    /**
     * Sends the joinMatchmakingTicket operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public joinMatchmakingTicket(requestData: MultiplayerModels.AdminJoinMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.JoinMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.AdminJoinMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.JoinMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the joinMatchmakingTicket operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async joinMatchmakingTicketAsync(requestData: MultiplayerModels.AdminJoinMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<MultiplayerResponseModels.JoinMatchmakingTicketOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.AdminJoinMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.JoinMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the listMatchmakingTicketsForPlayer operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public listMatchmakingTicketsForPlayer(requestData: MultiplayerModels.AdminListMatchmakingTicketsForPlayerRequestData, onResponse: Action1<MultiplayerResponseModels.ListMatchmakingTicketsForPlayerOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.AdminListMatchmakingTicketsForPlayerOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.ListMatchmakingTicketsForPlayerOperationResponse);
    }

    /**
     * Sends the listMatchmakingTicketsForPlayer operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async listMatchmakingTicketsForPlayerAsync(requestData: MultiplayerModels.AdminListMatchmakingTicketsForPlayerRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<MultiplayerResponseModels.ListMatchmakingTicketsForPlayerOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.AdminListMatchmakingTicketsForPlayerOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.ListMatchmakingTicketsForPlayerOperationResponse);
    }

    /**
     * Sends the getAllMatch operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getAllMatch(requestData: MultiplayerModels.AdminGetAllMatchRequestData, onResponse: Action1<MultiplayerResponseModels.GetAllMatchOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.AdminGetAllMatchOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.GetAllMatchOperationResponse);
    }

    /**
     * Sends the getAllMatch operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getAllMatchAsync(requestData: MultiplayerModels.AdminGetAllMatchRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<MultiplayerResponseModels.GetAllMatchOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.AdminGetAllMatchOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.GetAllMatchOperationResponse);
    }

    /**
     * Sends the getAllMatchmakingTicket operation and returns the typed response via callback.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public getAllMatchmakingTicket(requestData: MultiplayerModels.AdminGetAllMatchmakingTicketRequestData, onResponse: Action1<MultiplayerResponseModels.GetAllMatchmakingTicketOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): void {
        GNNetwork.sendViaHttpTRequestTResponse(new MultiplayerRequestModels.AdminGetAllMatchmakingTicketOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.GetAllMatchmakingTicketOperationResponse);
    }

    /**
     * Sends the getAllMatchmakingTicket operation and resolves with the typed response.
     *
     * @param overrideGameId Optional one-shot game id. Pass `null`
     *                       to use the configured game id.
     */
    public async getAllMatchmakingTicketAsync(requestData: MultiplayerModels.AdminGetAllMatchmakingTicketRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, overrideGameId: string = null, customTags: GNHashtable = null, retrialCount: number = -1, timeout: number = -1): Promise<MultiplayerResponseModels.GetAllMatchmakingTicketOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new MultiplayerRequestModels.AdminGetAllMatchmakingTicketOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, overrideGameId, customTags, retrialCount, MultiplayerResponseModels.GetAllMatchmakingTicketOperationResponse);
    }

}
