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
export class CharacterPlayerFriendUpdate {
	@StringDataMember({ code: ParameterCode.CharacterId })
	public characterId: string;

	@GNArrayDataMember({ code: ParameterCode.PlayerFriends, elementCls: GenericModels.FriendItem })
	public playerFriends: Array<GenericModels.FriendItem>;
}

/**
 * Handles the event flow implemented by OnCharacterPlayerFriendUpdateEventHandler.
 */
@IServerEventHandler.registerEvent
export class OnCharacterPlayerFriendUpdateEventHandler implements IServerEventHandler {
	public static onUpdate: Action1<CharacterPlayerFriendUpdate>;

	/**
	 * Returns the event code handled by this implementation.
	 */
	public getEventCode(): string {
		return EventCode.OnCharacterPlayerFriendUpdate;
	}

	/**
	 * Deserializes the event payload and forwards it to the registered static callback.
	 */
	public handle(operationEvent: OperationEvent): void {
		if (OnCharacterPlayerFriendUpdateEventHandler.onUpdate != null)
			OnCharacterPlayerFriendUpdateEventHandler.onUpdate(ConverterService.deserializeObject(operationEvent.getParameters(), CharacterPlayerFriendUpdate));
	}

}
