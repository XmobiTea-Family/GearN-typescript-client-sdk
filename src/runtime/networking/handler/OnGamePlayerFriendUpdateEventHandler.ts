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
export class GamePlayerFriendUpdate {
	@StringDataMember({ code: ParameterCode.CharacterId, isOptional: true })
	public characterId?: string;

	@GNArrayDataMember({ code: ParameterCode.PlayerFriends, elementCls: GenericModels.FriendItem })
	public playerFriends: Array<GenericModels.FriendItem>;
}

/**
 * Handles the event flow implemented by OnGamePlayerFriendUpdateEventHandler.
 */
@IServerEventHandler.registerEvent
export class OnGamePlayerFriendUpdateEventHandler implements IServerEventHandler {
	public static onUpdate: Action1<GamePlayerFriendUpdate>;

	/**
	 * Returns the event code handled by this implementation.
	 */
	public getEventCode(): string {
		return EventCode.OnGamePlayerFriendUpdate;
	}

	/**
	 * Deserializes the event payload and forwards it to the registered static callback.
	 */
	public handle(operationEvent: OperationEvent): void {
		if (OnGamePlayerFriendUpdateEventHandler.onUpdate != null)
			OnGamePlayerFriendUpdateEventHandler.onUpdate(ConverterService.deserializeObject(operationEvent.getParameters(), GamePlayerFriendUpdate));
	}

}
