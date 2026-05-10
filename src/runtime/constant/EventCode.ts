/**
 * String identifiers for every realtime event the GearN backend
 * pushes to authenticated socket clients.
 *
 * The values are the camelCase names embedded in the wire frame's
 * `eventCode` parameter. The SDK uses them as the dictionary key
 * inside {@link SocketPeer.serverEventHandlersDict} when it
 * dispatches an inbound event to the registered
 * {@link IServerEventHandler} implementations.
 *
 * Application code typically does not read these values directly
 * — register a typed handler from
 * `runtime/networking/handler/On*EventHandler.ts` instead, which
 * already wires the matching event code through
 * `getEventCode()`.
 *
 * Adding a new event: declare a new `public static readonly`
 * entry here, write a typed handler that returns it from
 * `getEventCode()`, and decorate the handler with
 * `@IServerEventHandler.registerEvent`.
 */
export class EventCode {
    /**
     * Account-level (master-player) friend roster changed —
     * decoded by
     * {@link OnGamePlayerFriendUpdateEventHandler}.
     */
    public static readonly OnGamePlayerFriendUpdate: string = "onGamePlayerFriendUpdate";

    /**
     * Character-scoped friend roster changed — decoded by
     * {@link OnCharacterPlayerFriendUpdateEventHandler}.
     */
    public static readonly OnCharacterPlayerFriendUpdate: string = "onCharacterPlayerFriendUpdate";

    /**
     * Account-level group membership changed — decoded by
     * {@link OnGamePlayerGroupUpdateEventHandler}.
     */
    public static readonly OnGamePlayerGroupUpdate: string = "onGamePlayerGroupUpdate";

    /**
     * Group member roster changed — decoded by
     * {@link OnGroupMemberUpdateEventHandler}. Pushed to every
     * client currently subscribed to the group.
     */
    public static readonly OnGroupMemberUpdate: string = "onGroupMemberUpdate";

    /**
     * Group message stream received new entries — decoded by
     * {@link OnGroupMessageUpdateEventHandler}. Payload is a
     * delta (only the new messages), not the full history.
     */
    public static readonly OnGroupMessageUpdate: string = "onGroupMessageUpdate";

    /**
     * Character-scoped group membership changed — decoded by
     * {@link OnCharacterPlayerGroupUpdateEventHandler}.
     */
    public static readonly OnCharacterPlayerGroupUpdate: string = "onCharacterPlayerGroupUpdate";

}
