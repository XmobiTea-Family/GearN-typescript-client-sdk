import { Action1 } from "./../../common/Action1";
import { EventCode } from "./../../constant/EventCode";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNArrayDataMember } from "./../../entity/DataMember";
import { OperationEvent } from "./../../entity/OperationEvent";
import { GenericModels } from "./../../entity/models/GenericModels";
import { ConverterService } from "./../../helper/ConverterService";
import { IServerEventHandler } from "./IServerEventHandler";

/**
 * Defines the payload emitted by the `OnGroupMemberUpdate` server event.
 */
export class GroupMemberUpdate {
	/** Updated member relation items pushed by the server. */
	@GNArrayDataMember({ code: ParameterCode.Members, elementCls: GenericModels.FriendItem })
	public members: Array<GenericModels.MemberItem>;
}

/**
 * Handles the `OnGroupMemberUpdate` server event.
 */
@IServerEventHandler.registerEvent
export class OnGroupMemberUpdateEventHandler implements IServerEventHandler {
	/** Optional static callback invoked after the payload is deserialized. */
	public static onUpdate: Action1<GroupMemberUpdate>;

	/**
	 * Returns the event code handled by this implementation.
	 */
	public getEventCode(): string {
		return EventCode.OnGroupMemberUpdate;
	}

	/**
	 * Deserializes the event payload and forwards it to the registered static callback.
	 */
	public handle(operationEvent: OperationEvent): void {
		if (OnGroupMemberUpdateEventHandler.onUpdate != null)
			OnGroupMemberUpdateEventHandler.onUpdate(ConverterService.deserializeObject(operationEvent.getParameters(), GroupMemberUpdate));

	}

}
