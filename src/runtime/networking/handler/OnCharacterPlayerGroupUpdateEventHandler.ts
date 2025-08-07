import { Action1 } from "./../../common/Action1";
import { EventCode } from "./../../constant/EventCode";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNArrayDataMember, StringDataMember } from "./../../entity/DataMember";
import { OperationEvent } from "./../../entity/OperationEvent";
import { GenericModels } from "./../../entity/models/GenericModels";
import { ConverterService } from "./../../helper/ConverterService";
import { IServerEventHandler } from "./IServerEventHandler";

export class CharacterPlayerGroupUpdate {
	@StringDataMember({ code: ParameterCode.CharacterId })
	public characterId: string;

	@GNArrayDataMember({ code: ParameterCode.PlayerGroups, elementCls: GenericModels.GroupItem })
	public playerGroups: Array<GenericModels.GroupItem>;
}

@IServerEventHandler.registerEvent
export class OnCharacterPlayerGroupUpdateEventHandler implements IServerEventHandler {
	public static onUpdate: Action1<CharacterPlayerGroupUpdate>;

	public getEventCode(): string {
		return EventCode.OnCharacterPlayerGroupUpdate;
	}

	public handle(operationEvent: OperationEvent): void {
		if (OnCharacterPlayerGroupUpdateEventHandler.onUpdate != null)
			OnCharacterPlayerGroupUpdateEventHandler.onUpdate(ConverterService.deserializeObject(operationEvent.getParameters(), CharacterPlayerGroupUpdate));
	}

}
