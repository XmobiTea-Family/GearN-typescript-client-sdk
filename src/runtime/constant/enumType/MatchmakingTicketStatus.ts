/**
 * Lifecycle states for a matchmaking ticket.
 *
 * Tickets progress through these states in order: members confirm,
 * the matchmaking engine searches, a match is allocated, and
 * finally the dedicated server reports ready. Cancellation can
 * happen from any state.
 *
 * Distinct from {@link MatchStatus}, which describes the **match**
 * record produced once the ticket succeeds.
 *
 * Surfaced on `MultiplayerModels.TicketEntry.status`.
 */
export enum MatchmakingTicketStatus {
	/**
	 * Some declared members have not joined the ticket yet — see
	 * {@link MatchmakingMemberStatus.Pending}.
	 */
	WaitingForMembers = 1,

	/**
	 * All members are joined; the matchmaking engine is searching
	 * for opponents matching the ticket's queue / criteria.
	 */
	WaitingForMatch = 2,

	/**
	 * A match was found; the backend is provisioning the
	 * dedicated server. Connection details are not yet available.
	 */
	WaitingForServer = 3,

	/**
	 * The dedicated server is ready and the ticket points at a
	 * match record. Use the match id to look up
	 * {@link MatchStatus.Matched} connection details.
	 */
	Matched = 4,

	/**
	 * The ticket was cancelled before completion (member declined,
	 * matchmaking timed out, server allocation failed).
	 */
	Canceled = 5,

}
