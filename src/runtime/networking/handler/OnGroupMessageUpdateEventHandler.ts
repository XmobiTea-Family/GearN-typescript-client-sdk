import { Action1 } from "./../../common/Action1";
import { EventCode } from "./../../constant/EventCode";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNArrayDataMember, StringDataMember } from "./../../entity/DataMember";
import { OperationEvent } from "./../../entity/OperationEvent";
import { GroupModels } from "./../../entity/models/GroupModels";
import { ConverterService } from "./../../helper/ConverterService";
import { IServerEventHandler } from "./IServerEventHandler";

/**
 * Defines the payload emitted by the `OnGroupMessageUpdate` server event.
 */
export class GroupMessageUpdate {
	/** Updated group message items pushed by the server. */
	@GNArrayDataMember({ code: ParameterCode.GroupMessages, elementCls: GroupModels.GroupMessageResponseData })
	public groupMessages: Array<GroupModels.GroupMessageResponseData>;

	/** Group id whose message stream changed. */
	@StringDataMember({ code: ParameterCode.GroupId })
	public groupId: string;

	/** Optional character id when the message update is scoped by character context. */
	@StringDataMember({ code: ParameterCode.CharacterId, isOptional: true })
	public characterId?: string;

}

/**
 * Handles the `OnGroupMessageUpdate` server event.
 */
@IServerEventHandler.registerEvent
export class OnGroupMessageUpdateEventHandler implements IServerEventHandler {
	/** Optional static callback invoked after the payload is deserialized. */
	public static onUpdate: Action1<GroupMessageUpdate>;

	/**
	 * Returns the event code handled by this implementation.
	 */
	public getEventCode(): string {
		return EventCode.OnGroupMessageUpdate;
	}

	/**
	 * Deserializes the event payload and forwards it to the registered static callback.
	 */
	public handle(operationEvent: OperationEvent): void {
		if (OnGroupMessageUpdateEventHandler.onUpdate != null)
			OnGroupMessageUpdateEventHandler.onUpdate(ConverterService.deserializeObject(operationEvent.getParameters(), GroupMessageUpdate));
	}

}
