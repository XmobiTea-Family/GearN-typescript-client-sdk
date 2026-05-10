/**
 * Lifecycle states for a friend relationship between two
 * GearN players.
 *
 * The state describes the relationship from the perspective of the
 * **viewing** player — the same friendship reads as
 * `WaitingAccept` for the side that received the invite and
 * `SentRequestAndWaitingAccept` for the side that sent it.
 *
 * The numeric values are persisted into the
 * {@link CharacterPlayerFriendUpdate} / {@link GamePlayerFriendUpdate}
 * payloads (decoded from the wire as `FriendItem.status`) and are
 * therefore part of the stable backend contract — do not reorder.
 *
 * Typical state transitions:
 * - `NotFriend` → `SentRequestAndWaitingAccept` after the local
 *   player issues `acceptCharacterPlayerFriend` /
 *   `addGamePlayerFriend` (or equivalent).
 * - `WaitingAccept` → `Friend` once the remote player accepts.
 * - Any state → `NotFriend` after a `removeFriend` call.
 */
export enum FriendStatus {
    /**
     * Both sides have accepted; the relationship is active.
     */
    Friend = 1,

    /**
     * The viewing player received an invite and has not acted on
     * it yet. Use this state to show "Accept / Decline" UI.
     */
    WaitingAccept = 2,

    /**
     * The viewing player sent an invite and is waiting for the
     * other side to accept. Use this state to show
     * "Cancel request" UI.
     */
    SentRequestAndWaitingAccept = 3,

    /**
     * No friendship relation. This is the implicit value when the
     * backend has no row at all — the SDK still includes it
     * explicitly so list queries can express "all known players,
     * none friended yet".
     */
    NotFriend = 4,

}
