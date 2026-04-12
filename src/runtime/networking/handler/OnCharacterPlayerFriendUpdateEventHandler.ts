import { Action1 } from "./../../common/Action1";
import { EventCode } from "./../../constant/EventCode";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNArrayDataMember, StringDataMember } from "./../../entity/DataMember";
import { OperationEvent } from "./../../entity/OperationEvent";
import { GenericModels } from "./../../entity/models/GenericModels";
import { ConverterService } from "./../../helper/ConverterService";
import { IServerEventHandler } from "./IServerEventHandler";

/**
 * Defines the payload emitted by the `OnCharacterPlayerFriendUpdate` server event.
 */
export class CharacterPlayerFriendUpdate {
	/** Character id whose friend relation changed. */
	@StringDataMember({ code: ParameterCode.CharacterId })
	public characterId: string;

	/** Updated friend relation items pushed by the server. */
	@GNArrayDataMember({ code: ParameterCode.PlayerFriends, elementCls: GenericModels.FriendItem })
	public playerFriends: Array<GenericModels.FriendItem>;
}

/**
 * Handles the `OnCharacterPlayerFriendUpdate` server event.
 */
@IServerEventHandler.registerEvent
export class OnCharacterPlayerFriendUpdateEventHandler implements IServerEventHandler {
	/** Optional static callback invoked after the payload is deserialized. */
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
