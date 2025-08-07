import { Action1 } from "./../../common/Action1";
import { EventCode } from "./../../constant/EventCode";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNArrayDataMember, StringDataMember } from "./../../entity/DataMember";
import { OperationEvent } from "./../../entity/OperationEvent";
import { GenericModels } from "./../../entity/models/GenericModels";
import { ConverterService } from "./../../helper/ConverterService";
import { IServerEventHandler } from "./IServerEventHandler";

export class GamePlayerFriendUpdate {
	@StringDataMember({ code: ParameterCode.CharacterId, isOptional: true })
	public characterId?: string;

	@GNArrayDataMember({ code: ParameterCode.PlayerFriends, elementCls: GenericModels.FriendItem })
	public playerFriends: Array<GenericModels.FriendItem>;
}

@IServerEventHandler.registerEvent
export class OnGamePlayerFriendUpdateEventHandler implements IServerEventHandler {
	public static onUpdate: Action1<GamePlayerFriendUpdate>;

	public getEventCode(): string {
		return EventCode.OnGamePlayerFriendUpdate;
	}

	public handle(operationEvent: OperationEvent): void {
		if (OnGamePlayerFriendUpdateEventHandler.onUpdate != null)
			OnGamePlayerFriendUpdateEventHandler.onUpdate(ConverterService.deserializeObject(operationEvent.getParameters(), GamePlayerFriendUpdate));
	}

}
