/**
 * Lifecycle states for a player's membership in a group.
 *
 * Mirrors {@link FriendStatus} but for group membership. The state
 * describes the relationship from the perspective of the **viewing**
 * player — the same pending invitation reads as `WaitingAccept` for
 * the player that received it and `SentRequestAndWaitingAccept` for
 * the player that asked to join.
 *
 * The numeric values are persisted into
 * {@link CharacterPlayerGroupUpdate} / {@link GamePlayerGroupUpdate}
 * payloads (decoded as `GroupItem.status`) and are part of the
 * stable backend contract.
 */
export enum GroupStatus {
	/**
	 * The player is an active member of the group with full
	 * membership privileges (subject to role).
	 */
	Member = 1,

	/**
	 * The player received an invitation and has not acted on it
	 * yet. Use to show "Accept / Decline" UI.
	 */
	WaitingAccept = 2,

	/**
	 * The player asked to join the group and is waiting for an
	 * existing member with the right permission to accept. Use to
	 * show "Cancel request" UI.
	 */
	SentRequestAndWaitingAccept = 3,

	/**
	 * No active membership. Like {@link FriendStatus.NotFriend},
	 * this state is explicit so list queries can include
	 * non-member players too.
	 */
	NotMember = 4,

}
