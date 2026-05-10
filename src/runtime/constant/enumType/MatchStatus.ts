/**
 * Lifecycle states for the **match** record produced once a
 * matchmaking ticket succeeds.
 *
 * Distinct from {@link MatchmakingTicketStatus}, which tracks the
 * earlier stages (waiting for members, finding a match). A single
 * ticket eventually produces one match record whose state then
 * progresses through the values below until the gameplay session
 * starts or is cancelled.
 *
 * Surfaced on `MultiplayerModels.MatchEntry.status`.
 */
export enum MatchStatus {
    /**
     * The match was created but the dedicated server allocation
     * has not yet completed. Connection details are unavailable.
     */
    WaitingForServer = 1,

    /**
     * The dedicated server is ready and the match record carries
     * connection details. The application can connect.
     */
    Matched = 2,

    /**
     * The match was cancelled before completion (server
     * allocation failure, manual cancel). Application should
     * abort the lobby flow.
     */
    Canceled = 3,

}
