import { Action1 } from "./../../common/Action1";
import { EventCode } from "./../../constant/EventCode";
import { GNParameterCode } from "./../../constant/parameterCode/GNParameterCode";
import { GNArrayDataMember } from "./../../entity/DataMember";
import { OperationEvent } from "./../../entity/OperationEvent";
import { GroupModels } from "./../../entity/models/GroupModels";
import { ConverterService } from "./../../helper/ConverterService";
import { IServerEventHandler } from "./IServerEventHandler";

export class GroupMessageUpdate {
    @GNArrayDataMember({ code: GNParameterCode.GroupMessages, elementCls: GroupModels.GroupMessageResponseData })
    public groupMessages: Array<GroupModels.GroupMessageResponseData>;
}

@IServerEventHandler.registerEvent
export class OnGroupMessageUpdateEventHandler implements IServerEventHandler {
    public static onUpdate: Action1<GroupMessageUpdate>;

    public getEventCode(): number {
        return EventCode.OnGroupMessageUpdate;
    }

    public handle(operationEvent: OperationEvent): void {
        if (OnGroupMessageUpdateEventHandler.onUpdate != null)
            OnGroupMessageUpdateEventHandler.onUpdate(ConverterService.deserializeObject(operationEvent.getParameters(), GroupMessageUpdate));
    }

}
