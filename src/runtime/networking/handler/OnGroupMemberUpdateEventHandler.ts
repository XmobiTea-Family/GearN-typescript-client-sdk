import { Action1 } from "./../../common/Action1";
import { EventCode } from "./../../constant/EventCode";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNArrayDataMember, StringDataMember } from "./../../entity/DataMember";
import { OperationEvent } from "./../../entity/OperationEvent";
import { GenericModels } from "./../../entity/models/GenericModels";
import { ConverterService } from "./../../helper/ConverterService";
import { IServerEventHandler } from "./IServerEventHandler";

/**
 * Decoded payload of the `OnGroupMemberUpdate` server event.
 *
 * Pushed by the backend whenever the member roster of a group
 * changes — join, leave, role change, kick. Every device currently
 * subscribed to that group receives the same payload so all clients
 * converge on the same view of the roster.
 *
 * Pair with the operations on `GNNetwork.group` (`acceptGroupMember`,
 * `removeGroupMember`, `setGroupMemberRole`, ...): after one client
 * issues such an operation the server fans the resulting roster out
 * through this event.
 */
export class GroupMemberUpdate {
	/**
	 * Authoritative member roster after the change. Each
	 * {@link GenericModels.MemberItem} carries the user id, role,
	 * join timestamp and optional profile metadata. Treat the
	 * array as a complete replacement.
	 */
	@GNArrayDataMember({ code: ParameterCode.Members, elementCls: GenericModels.MemberItem })
	public members: Array<GenericModels.MemberItem>;

	/**
	 * Identifier of the group whose member roster changed. Use
	 * this to route the update to the correct group view when the
	 * application has multiple groups loaded.
	 */
	@StringDataMember({ code: ParameterCode.GroupId })
	public groupId: string;
}

/**
 * Auto-registered event handler for the `OnGroupMemberUpdate`
 * server event.
 *
 * Application setup:
 * ```ts
 * OnGroupMemberUpdateEventHandler.onUpdate = update => {
 *     refreshGroupMembersUi(update.groupId, update.members);
 * };
 * ```
 */
@IServerEventHandler.registerEvent
export class OnGroupMemberUpdateEventHandler implements IServerEventHandler {
	/**
	 * Static callback the application registers. Leave `null` to
	 * silently drop the event.
	 */
	public static onUpdate: Action1<GroupMemberUpdate>;

	/**
	 * Returns {@link EventCode.OnGroupMemberUpdate}.
	 */
	public getEventCode(): string {
		return EventCode.OnGroupMemberUpdate;
	}

	/**
	 * Deserialises the parameters into a {@link GroupMemberUpdate}
	 * and forwards to {@link onUpdate}.
	 */
	public handle(operationEvent: OperationEvent): void {
		if (OnGroupMemberUpdateEventHandler.onUpdate != null)
			OnGroupMemberUpdateEventHandler.onUpdate(ConverterService.deserializeObject(operationEvent.getParameters(), GroupMemberUpdate));

	}

}
