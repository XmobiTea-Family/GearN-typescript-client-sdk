import { Action1 } from "./../../common/Action1";
import { EventCode } from "./../../constant/EventCode";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNArrayDataMember, StringDataMember } from "./../../entity/DataMember";
import { OperationEvent } from "./../../entity/OperationEvent";
import { GenericModels } from "./../../entity/models/GenericModels";
import { ConverterService } from "./../../helper/ConverterService";
import { IServerEventHandler } from "./IServerEventHandler";

/**
 * Defines the payload emitted by the `OnCharacterPlayerGroupUpdate` server event.
 */
export class CharacterPlayerGroupUpdate {
	/** Character id whose group relation changed. */
	@StringDataMember({ code: ParameterCode.CharacterId })
	public characterId: string;

	/** Updated group relation items pushed by the server. */
	@GNArrayDataMember({ code: ParameterCode.PlayerGroups, elementCls: GenericModels.GroupItem })
	public playerGroups: Array<GenericModels.GroupItem>;
}

/**
 * Handles the `OnCharacterPlayerGroupUpdate` server event.
 */
@IServerEventHandler.registerEvent
export class OnCharacterPlayerGroupUpdateEventHandler implements IServerEventHandler {
	/** Optional static callback invoked after the payload is deserialized. */
	public static onUpdate: Action1<CharacterPlayerGroupUpdate>;

	/**
	 * Returns the event code handled by this implementation.
	 */
	public getEventCode(): string {
		return EventCode.OnCharacterPlayerGroupUpdate;
	}

	/**
	 * Deserializes the event payload and forwards it to the registered static callback.
	 */
	public handle(operationEvent: OperationEvent): void {
		if (OnCharacterPlayerGroupUpdateEventHandler.onUpdate != null)
			OnCharacterPlayerGroupUpdateEventHandler.onUpdate(ConverterService.deserializeObject(operationEvent.getParameters(), CharacterPlayerGroupUpdate));
	}

}
