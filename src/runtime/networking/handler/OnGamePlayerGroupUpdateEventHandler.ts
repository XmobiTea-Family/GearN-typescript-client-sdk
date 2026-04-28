import { Action1 } from "./../../common/Action1";
import { EventCode } from "./../../constant/EventCode";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNArrayDataMember, StringDataMember } from "./../../entity/DataMember";
import { OperationEvent } from "./../../entity/OperationEvent";
import { GenericModels } from "./../../entity/models/GenericModels";
import { ConverterService } from "./../../helper/ConverterService";
import { IServerEventHandler } from "./IServerEventHandler";

/**
 * Decoded payload of the `OnGamePlayerGroupUpdate` server event.
 *
 * Pushed by the backend whenever the master-player group membership
 * changes — invitation, accept, leave, kick, role change. The
 * account-level analogue of
 * {@link CharacterPlayerGroupUpdate}; use it to refresh
 * lobby / account-level group UI without polling.
 */
export class GamePlayerGroupUpdate {
	/**
	 * Optional character id when the backend scopes the update to
	 * a specific character context. Absent for purely
	 * account-scoped group changes.
	 */
	@StringDataMember({ code: ParameterCode.CharacterId, isOptional: true })
	public characterId?: string;

	/**
	 * Authoritative group membership list after the change. Treat
	 * as a complete replacement.
	 */
	@GNArrayDataMember({ code: ParameterCode.PlayerGroups, elementCls: GenericModels.GroupItem })
	public playerGroups: Array<GenericModels.GroupItem>;
}

/**
 * Auto-registered event handler for the
 * `OnGamePlayerGroupUpdate` server event.
 *
 * Application setup:
 * ```ts
 * OnGamePlayerGroupUpdateEventHandler.onUpdate = update => {
 *     refreshLobbyGroupsUi(update.playerGroups);
 * };
 * ```
 */
@IServerEventHandler.registerEvent
export class OnGamePlayerGroupUpdateEventHandler implements IServerEventHandler {
	/**
	 * Static callback the application registers. Leave `null` to
	 * silently drop the event.
	 */
	public static onUpdate: Action1<GamePlayerGroupUpdate>;

	/**
	 * Returns {@link EventCode.OnGamePlayerGroupUpdate}.
	 */
	public getEventCode(): string {
		return EventCode.OnGamePlayerGroupUpdate;
	}

	/**
	 * Deserialises the parameters into a
	 * {@link GamePlayerGroupUpdate} and forwards to
	 * {@link onUpdate}.
	 */
	public handle(operationEvent: OperationEvent): void {
		if (OnGamePlayerGroupUpdateEventHandler.onUpdate != null)
			OnGamePlayerGroupUpdateEventHandler.onUpdate(ConverterService.deserializeObject(operationEvent.getParameters(), GamePlayerGroupUpdate));
	}

}
