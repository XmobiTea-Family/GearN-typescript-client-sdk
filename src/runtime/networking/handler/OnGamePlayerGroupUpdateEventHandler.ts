import { Action1 } from "./../../common/Action1";
import { EventCode } from "./../../constant/EventCode";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNArrayDataMember, StringDataMember } from "./../../entity/DataMember";
import { OperationEvent } from "./../../entity/OperationEvent";
import { GenericModels } from "./../../entity/models/GenericModels";
import { ConverterService } from "./../../helper/ConverterService";
import { IServerEventHandler } from "./IServerEventHandler";

export class GamePlayerGroupUpdate {
	@StringDataMember({ code: ParameterCode.CharacterId, isOptional: true })
	public characterId?: string;

	@GNArrayDataMember({ code: ParameterCode.PlayerGroups, elementCls: GenericModels.GroupItem })
	public playerGroups: Array<GenericModels.GroupItem>;
}

@IServerEventHandler.registerEvent
export class OnGamePlayerGroupUpdateEventHandler implements IServerEventHandler {
	public static onUpdate: Action1<GamePlayerGroupUpdate>;

	public getEventCode(): string {
		return EventCode.OnGamePlayerGroupUpdate;
	}

	public handle(operationEvent: OperationEvent): void {
		if (OnGamePlayerGroupUpdateEventHandler.onUpdate != null)
			OnGamePlayerGroupUpdateEventHandler.onUpdate(ConverterService.deserializeObject(operationEvent.getParameters(), GamePlayerGroupUpdate));
	}

}
