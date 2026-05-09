/**
 * Per-member state inside a matchmaking ticket.
 *
 * GearN tickets can include multiple players (party / pre-made
 * group matchmaking). Each player has their own independent
 * confirmation lifecycle described by this enum. Once every
 * member is `Joined`, the ticket can transition out of
 * {@link MatchmakingTicketStatus.WaitingForMembers}.
 *
 * Surfaced on
 * `MultiplayerModels.TicketMember.matchmakingMemberStatus`.
 */
export enum MatchmakingMemberStatus {
	/**
	 * The ticket creator declared the member but the player has
	 * not joined / confirmed yet (e.g. invitation pending).
	 */
	Pending = 1,

	/**
	 * The member confirmed and is part of the active ticket.
	 */
	Joined = 2,

	/**
	 * The member declined or left the ticket. The ticket may
	 * still complete if it had enough remaining members; the SDK
	 * keeps the cancelled entry in the roster for audit purposes.
	 */
	Canceled = 3,

}
