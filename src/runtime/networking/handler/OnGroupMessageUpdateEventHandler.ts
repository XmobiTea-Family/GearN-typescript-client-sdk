import { Action1 } from "./../../common/Action1";
import { EventCode } from "./../../constant/EventCode";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNArrayDataMember, StringDataMember } from "./../../entity/DataMember";
import { OperationEvent } from "./../../entity/OperationEvent";
import { GroupModels } from "./../../entity/models/GroupModels";
import { ConverterService } from "./../../helper/ConverterService";
import { IServerEventHandler } from "./IServerEventHandler";

/**
 * Decoded payload of the `OnGroupMessageUpdate` server event.
 *
 * Pushed by the backend whenever new messages arrive in a group
 * channel the local client is subscribed to. Use it to drive the
 * group chat / wall UI in real time.
 *
 * Unlike the friend / member events, the payload here is a delta —
 * `groupMessages` only contains the **new** messages since the last
 * push, not the full history. The application is expected to append
 * these to its own log.
 */
export class GroupMessageUpdate {
	/**
	 * New group message items the application should append. Each
	 * entry is a fully decoded {@link GroupModels.GroupMessageResponseData}
	 * with sender id, timestamp, body and any embedded metadata.
	 */
	@GNArrayDataMember({ code: ParameterCode.GroupMessages, elementCls: GroupModels.GroupMessageResponseData })
	public groupMessages: Array<GroupModels.GroupMessageResponseData>;

	/**
	 * Identifier of the group whose message stream changed.
	 */
	@StringDataMember({ code: ParameterCode.GroupId })
	public groupId: string;

	/**
	 * Optional character id when the message update is scoped to a
	 * specific character context (multi-character titles).
	 */
	@StringDataMember({ code: ParameterCode.CharacterId, isOptional: true })
	public characterId?: string;

}

/**
 * Auto-registered event handler for the `OnGroupMessageUpdate`
 * server event.
 *
 * Application setup:
 * ```ts
 * OnGroupMessageUpdateEventHandler.onUpdate = update => {
 *     for (const msg of update.groupMessages) appendChat(update.groupId, msg);
 * };
 * ```
 */
@IServerEventHandler.registerEvent
export class OnGroupMessageUpdateEventHandler implements IServerEventHandler {
	/**
	 * Static callback the application registers. Leave `null` to
	 * silently drop incoming messages.
	 */
	public static onUpdate: Action1<GroupMessageUpdate>;

	/**
	 * Returns {@link EventCode.OnGroupMessageUpdate}.
	 */
	public getEventCode(): string {
		return EventCode.OnGroupMessageUpdate;
	}

	/**
	 * Deserialises the parameters into a {@link GroupMessageUpdate}
	 * and forwards to {@link onUpdate}.
	 */
	public handle(operationEvent: OperationEvent): void {
		if (OnGroupMessageUpdateEventHandler.onUpdate != null)
			OnGroupMessageUpdateEventHandler.onUpdate(ConverterService.deserializeObject(operationEvent.getParameters(), GroupMessageUpdate));
	}

}
