import { Action1 } from "./../../common/Action1";
import { EventCode } from "./../../constant/EventCode";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNArrayDataMember, StringDataMember } from "./../../entity/DataMember";
import { OperationEvent } from "./../../entity/OperationEvent";
import { GenericModels } from "./../../entity/models/GenericModels";
import { ConverterService } from "./../../helper/ConverterService";
import { IServerEventHandler } from "./IServerEventHandler";

/**
 * Defines the payload emitted by the `OnGamePlayerGroupUpdate` server event.
 */
export class GamePlayerGroupUpdate {
	/** Optional character id when the group update is scoped by character context. */
	@StringDataMember({ code: ParameterCode.CharacterId, isOptional: true })
	public characterId?: string;

	/** Updated group relation items pushed by the server. */
	@GNArrayDataMember({ code: ParameterCode.PlayerGroups, elementCls: GenericModels.GroupItem })
	public playerGroups: Array<GenericModels.GroupItem>;
}

/**
 * Handles the `OnGamePlayerGroupUpdate` server event.
 */
@IServerEventHandler.registerEvent
export class OnGamePlayerGroupUpdateEventHandler implements IServerEventHandler {
	/** Optional static callback invoked after the payload is deserialized. */
	public static onUpdate: Action1<GamePlayerGroupUpdate>;

	/**
	 * Returns the event code handled by this implementation.
	 */
	public getEventCode(): string {
		return EventCode.OnGamePlayerGroupUpdate;
	}

	/**
	 * Deserializes the event payload and forwards it to the registered static callback.
	 */
	public handle(operationEvent: OperationEvent): void {
		if (OnGamePlayerGroupUpdateEventHandler.onUpdate != null)
			OnGamePlayerGroupUpdateEventHandler.onUpdate(ConverterService.deserializeObject(operationEvent.getParameters(), GamePlayerGroupUpdate));
	}

}
