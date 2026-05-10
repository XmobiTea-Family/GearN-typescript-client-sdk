import { Action1 } from "./../../common/Action1";
import { EventCode } from "./../../constant/EventCode";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNArrayDataMember, StringDataMember } from "./../../entity/DataMember";
import { OperationEvent } from "./../../entity/OperationEvent";
import { GenericModels } from "./../../entity/models/GenericModels";
import { ConverterService } from "./../../helper/ConverterService";
import { IServerEventHandler } from "./IServerEventHandler";

/**
 * Decoded payload of the `OnCharacterPlayerGroupUpdate` server
 * event.
 *
 * Pushed by the backend whenever the group membership of an
 * already-loaded character changes — invitation, accept, leave,
 * kick, role change. Use it to refresh the in-game guild / clan UI
 * without polling.
 */
export class CharacterPlayerGroupUpdate {
    /**
     * Identifier of the character whose group membership changed.
     * Mirrors the `characterId` selected by the local SDK so a
     * multi-character host can route the update to the right view.
     */
    @StringDataMember({ code: ParameterCode.CharacterId })
    public characterId: string;

    /**
     * Authoritative group membership list after the change. Each
     * {@link GenericModels.GroupItem} carries the group id, the
     * member's role, and any embedded summary fields the backend
     * chose to include. Treat the array as a complete replacement.
     */
    @GNArrayDataMember({ code: ParameterCode.PlayerGroups, elementCls: GenericModels.GroupItem })
    public playerGroups: Array<GenericModels.GroupItem>;
}

/**
 * Auto-registered event handler for the
 * `OnCharacterPlayerGroupUpdate` server event.
 *
 * Same lifecycle as the rest of the `On*EventHandler` family —
 * registered at module load via
 * `@IServerEventHandler.registerEvent`, instantiated once during
 * {@link SocketPeer.initGNSocketObject}, then invoked on every
 * incoming event.
 *
 * Application setup:
 * ```ts
 * OnCharacterPlayerGroupUpdateEventHandler.onUpdate = update => {
 *     refreshGuildUi(update.playerGroups);
 * };
 * ```
 */
@IServerEventHandler.registerEvent
export class OnCharacterPlayerGroupUpdateEventHandler implements IServerEventHandler {
    /**
     * Static callback the application registers. Leave `null` to
     * silently drop the event.
     */
    public static onUpdate: Action1<CharacterPlayerGroupUpdate>;

    /**
     * Returns {@link EventCode.OnCharacterPlayerGroupUpdate}.
     */
    public getEventCode(): string {
        return EventCode.OnCharacterPlayerGroupUpdate;
    }

    /**
     * Deserialises the parameters into a
     * {@link CharacterPlayerGroupUpdate} and forwards to
     * {@link onUpdate}.
     */
    public handle(operationEvent: OperationEvent): void {
        if (OnCharacterPlayerGroupUpdateEventHandler.onUpdate != null)
            OnCharacterPlayerGroupUpdateEventHandler.onUpdate(ConverterService.deserializeObject(operationEvent.getParameters(), CharacterPlayerGroupUpdate));
    }

}
