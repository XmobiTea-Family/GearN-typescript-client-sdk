import { Action1 } from "./../../common/Action1";
import { EventCode } from "./../../constant/EventCode";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNArrayDataMember, StringDataMember } from "./../../entity/DataMember";
import { OperationEvent } from "./../../entity/OperationEvent";
import { GenericModels } from "./../../entity/models/GenericModels";
import { ConverterService } from "./../../helper/ConverterService";
import { IServerEventHandler } from "./IServerEventHandler";

/**
 * Decoded payload of the `OnGamePlayerFriendUpdate` server event.
 *
 * Pushed by the backend whenever the master-player friend list (the
 * account-level social graph, distinct from per-character friends)
 * changes — accept, decline, remove, status update. Use it to keep
 * the lobby / account-level friend UI in sync without polling.
 *
 * Pair with the operations on `GNNetwork.gamePlayer`
 * (`acceptGamePlayerFriend`, `removeGamePlayerFriend`, etc.):
 * the server echoes the resulting roster back through this event so
 * every connected device for the same account converges.
 */
export class GamePlayerFriendUpdate {
    /**
     * Authoritative friend roster after the change. Treat as a
     * complete replacement — the backend does not send deltas.
     */
    @GNArrayDataMember({ code: ParameterCode.PlayerFriends, elementCls: GenericModels.FriendItem })
    public playerFriends: Array<GenericModels.FriendItem>;
}

/**
 * Auto-registered event handler for the
 * `OnGamePlayerFriendUpdate` server event.
 *
 * Same lifecycle as the rest of the `On*EventHandler` family —
 * registered through `@IServerEventHandler.registerEvent`,
 * instantiated by {@link SocketPeer.initGNSocketObject}, then
 * invoked on every matching event.
 *
 * Application setup:
 * ```ts
 * OnGamePlayerFriendUpdateEventHandler.onUpdate = update => {
 *     refreshLobbyFriendsUi(update.playerFriends);
 * };
 * ```
 */
@IServerEventHandler.registerEvent
export class OnGamePlayerFriendUpdateEventHandler implements IServerEventHandler {
    /**
     * Static callback the application registers. Leave `null` to
     * silently drop the event.
     */
    public static onUpdate: Action1<GamePlayerFriendUpdate>;

    /**
     * Returns {@link EventCode.OnGamePlayerFriendUpdate}.
     */
    public getEventCode(): string {
        return EventCode.OnGamePlayerFriendUpdate;
    }

    /**
     * Deserialises the parameters into a
     * {@link GamePlayerFriendUpdate} and forwards to
     * {@link onUpdate}.
     */
    public handle(operationEvent: OperationEvent): void {
        if (OnGamePlayerFriendUpdateEventHandler.onUpdate != null)
            OnGamePlayerFriendUpdateEventHandler.onUpdate(ConverterService.deserializeObject(operationEvent.getParameters(), GamePlayerFriendUpdate));
    }

}
