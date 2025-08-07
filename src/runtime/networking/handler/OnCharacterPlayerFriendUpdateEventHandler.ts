import { Action1 } from "./../../common/Action1";
import { EventCode } from "./../../constant/EventCode";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNArrayDataMember, StringDataMember } from "./../../entity/DataMember";
import { OperationEvent } from "./../../entity/OperationEvent";
import { GenericModels } from "./../../entity/models/GenericModels";
import { ConverterService } from "./../../helper/ConverterService";
import { IServerEventHandler } from "./IServerEventHandler";

export class CharacterPlayerFriendUpdate {
	@StringDataMember({ code: ParameterCode.CharacterId })
	public characterId: string;

	@GNArrayDataMember({ code: ParameterCode.PlayerFriends, elementCls: GenericModels.FriendItem })
	public playerFriends: Array<GenericModels.FriendItem>;
}

@IServerEventHandler.registerEvent
export class OnCharacterPlayerFriendUpdateEventHandler implements IServerEventHandler {
	public static onUpdate: Action1<CharacterPlayerFriendUpdate>;

	public getEventCode(): string {
		return EventCode.OnCharacterPlayerFriendUpdate;
	}

	public handle(operationEvent: OperationEvent): void {
		if (OnCharacterPlayerFriendUpdateEventHandler.onUpdate != null)
			OnCharacterPlayerFriendUpdateEventHandler.onUpdate(ConverterService.deserializeObject(operationEvent.getParameters(), CharacterPlayerFriendUpdate));
	}

}
