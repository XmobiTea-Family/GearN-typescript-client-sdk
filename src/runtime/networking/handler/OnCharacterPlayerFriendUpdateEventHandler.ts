import { Action1 } from "./../../common/Action1";
import { EventCode } from "./../../constant/EventCode";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNArrayDataMember, StringDataMember } from "./../../entity/DataMember";
import { OperationEvent } from "./../../entity/OperationEvent";
import { GenericModels } from "./../../entity/models/GenericModels";
import { ConverterService } from "./../../helper/ConverterService";
import { IServerEventHandler } from "./IServerEventHandler";

/**
 * Decoded payload of the `OnCharacterPlayerFriendUpdate` server
 * event.
 *
 * Pushed by the backend whenever the friend roster of an
 * already-loaded character changes — accept / decline / remove /
 * incoming-request / status update. The application uses this to
 * keep the in-game social UI in sync without polling.
 *
 * Pair this event with the related operations on
 * `GNNetwork.characterPlayer` (`acceptCharacterPlayerFriend`,
 * `removeCharacterPlayerFriend`, ...): when the local player issues
 * one of those operations the server eventually echoes the resulting
 * roster back as this event so every connected device converges.
 */
export class CharacterPlayerFriendUpdate {
    /**
     * Identifier of the character whose friend list is being updated.
     *
     * Matches the character id the local SDK selected via
     * `GNNetwork.characterPlayer.selectCharacter*` (or whichever
     * method created it). When the application has multiple
     * characters loaded, dispatch on this field to update the right
     * roster.
     */
    @StringDataMember({ code: ParameterCode.CharacterId })
    public characterId: string;

    /**
     * Authoritative friend roster after the change.
     *
     * Each {@link GenericModels.FriendItem} carries the full
     * relation state ({@link FriendStatus}, friend id, optional
     * profile data). Treat the array as a complete replacement —
     * the backend does not send delta updates here.
     */
    @GNArrayDataMember({ code: ParameterCode.PlayerFriends, elementCls: GenericModels.FriendItem })
    public playerFriends: Array<GenericModels.FriendItem>;
}

/**
 * Auto-registered event handler for the
 * `OnCharacterPlayerFriendUpdate` server event.
 *
 * Wiring at startup:
 * 1. The `@IServerEventHandler.registerEvent` decorator places the
 *    class into the static registry at module-load time.
 * 2. {@link SocketPeer.initGNSocketObject} instantiates one handler
 *    per registered class and indexes them by their event code.
 * 3. When the matching event arrives the SDK calls {@link handle}
 *    on this instance, which deserialises the parameters into a
 *    {@link CharacterPlayerFriendUpdate} and dispatches via the
 *    application-supplied static callback.
 *
 * Application setup:
 * ```ts
 * OnCharacterPlayerFriendUpdateEventHandler.onUpdate = update => {
 *     console.log("friends now", update.playerFriends);
 * };
 * ```
 */
@IServerEventHandler.registerEvent
export class OnCharacterPlayerFriendUpdateEventHandler implements IServerEventHandler {
    /**
     * Static callback the application registers. The SDK calls it
     * with the deserialised payload whenever a matching event
     * arrives. Leave `null` to ignore the event.
     */
    public static onUpdate: Action1<CharacterPlayerFriendUpdate>;

    /**
     * Returns {@link EventCode.OnCharacterPlayerFriendUpdate}, the
     * stable event code emitted by the GearN backend for this
     * push.
     */
    public getEventCode(): string {
        return EventCode.OnCharacterPlayerFriendUpdate;
    }

    /**
     * Deserialises the raw parameters into a typed
     * {@link CharacterPlayerFriendUpdate} and forwards it to
     * {@link onUpdate}. Skipped silently when the application has
     * not registered a callback.
     */
    public handle(operationEvent: OperationEvent): void {
        if (OnCharacterPlayerFriendUpdateEventHandler.onUpdate != null)
            OnCharacterPlayerFriendUpdateEventHandler.onUpdate(ConverterService.deserializeObject(operationEvent.getParameters(), CharacterPlayerFriendUpdate));
    }

}
