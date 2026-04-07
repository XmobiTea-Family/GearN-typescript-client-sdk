import { Action1 } from "./../../common/Action1";
import { EventCode } from "./../../constant/EventCode";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNArrayDataMember, StringDataMember } from "./../../entity/DataMember";
import { OperationEvent } from "./../../entity/OperationEvent";
import { GenericModels } from "./../../entity/models/GenericModels";
import { ConverterService } from "./../../helper/ConverterService";
import { IServerEventHandler } from "./IServerEventHandler";

/**
 * Defines the payload emitted by the corresponding server event.
 */
export class GamePlayerGroupUpdate {
	@StringDataMember({ code: ParameterCode.CharacterId, isOptional: true })
	public characterId?: string;

	@GNArrayDataMember({ code: ParameterCode.PlayerGroups, elementCls: GenericModels.GroupItem })
	public playerGroups: Array<GenericModels.GroupItem>;
}

/**
 * Handles the event flow implemented by OnGamePlayerGroupUpdateEventHandler.
 */
@IServerEventHandler.registerEvent
export class OnGamePlayerGroupUpdateEventHandler implements IServerEventHandler {
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
