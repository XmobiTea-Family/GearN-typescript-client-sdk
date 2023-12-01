import { Action1 } from "./../../common/Action1";
import { EventCode } from "./../../constant/EventCode";
import { GNParameterCode } from "./../../constant/parameterCode/GNParameterCode";
import { GNArrayDataMember } from "./../../entity/DataMember";
import { OperationEvent } from "./../../entity/OperationEvent";
import { GenericModels } from "./../../entity/models/GenericModels";
import { ConverterService } from "./../../helper/ConverterService";
import { IServerEventHandler } from "./IServerEventHandler";

export class GroupMemberUpdate {
    @GNArrayDataMember({ code: GNParameterCode.Members, elementCls: GenericModels.FriendItem })
    public members: Array<GenericModels.MemberItem>;
}

@IServerEventHandler.registerEvent
export class OnGroupMemberUpdateEventHandler implements IServerEventHandler {
    public static onUpdate: Action1<GroupMemberUpdate>;

    public getEventCode(): number {
        return EventCode.OnGroupMemberUpdate;
    }

    public handle(operationEvent: OperationEvent): void {
        if (OnGroupMemberUpdateEventHandler.onUpdate != null)
            OnGroupMemberUpdateEventHandler.onUpdate(ConverterService.deserializeObject(operationEvent.getParameters(), GroupMemberUpdate));

    }

}
