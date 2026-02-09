import { Action1 } from "./../../common/Action1";
import { EventCode } from "./../../constant/EventCode";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNArrayDataMember, StringDataMember } from "./../../entity/DataMember";
import { OperationEvent } from "./../../entity/OperationEvent";
import { GroupModels } from "./../../entity/models/GroupModels";
import { ConverterService } from "./../../helper/ConverterService";
import { IServerEventHandler } from "./IServerEventHandler";

export class GroupMessageUpdate {
	@GNArrayDataMember({ code: ParameterCode.GroupMessages, elementCls: GroupModels.GroupMessageResponseData })
	public groupMessages: Array<GroupModels.GroupMessageResponseData>;

	@StringDataMember({ code: ParameterCode.GroupId })
	public groupId: string;

	@StringDataMember({ code: ParameterCode.CharacterId, isOptional: true })
	public characterId?: string;

}

@IServerEventHandler.registerEvent
export class OnGroupMessageUpdateEventHandler implements IServerEventHandler {
	public static onUpdate: Action1<GroupMessageUpdate>;

	public getEventCode(): string {
		return EventCode.OnGroupMessageUpdate;
	}

	public handle(operationEvent: OperationEvent): void {
		if (OnGroupMessageUpdateEventHandler.onUpdate != null)
			OnGroupMessageUpdateEventHandler.onUpdate(ConverterService.deserializeObject(operationEvent.getParameters(), GroupMessageUpdate));
	}

}
