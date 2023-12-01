import { Action1 } from "./../../common/Action1";
import { EventCode } from "./../../constant/EventCode";
import { GNParameterCode } from "./../../constant/parameterCode/GNParameterCode";
import { GNArrayDataMember, StringDataMember } from "./../../entity/DataMember";
import { OperationEvent } from "./../../entity/OperationEvent";
import { GenericModels } from "./../../entity/models/GenericModels";
import { ConverterService } from "./../../helper/ConverterService";
import { IServerEventHandler } from "./IServerEventHandler";

export class GamePlayerGroupUpdate {
    @StringDataMember({ code: GNParameterCode.CharacterId, isOptional: true })
    public characterId?: string;

    @GNArrayDataMember({ code: GNParameterCode.PlayerGroups, elementCls: GenericModels.GroupItem })
    public playerGroups: Array<GenericModels.GroupItem>;
}

@IServerEventHandler.registerEvent
export class OnGamePlayerGroupUpdateEventHandler implements IServerEventHandler {
    public static onUpdate: Action1<GamePlayerGroupUpdate>;

    public getEventCode(): number {
        return EventCode.OnGamePlayerGroupUpdate;
    }

    public handle(operationEvent: OperationEvent): void {
        if (OnGamePlayerGroupUpdateEventHandler.onUpdate != null)
            OnGamePlayerGroupUpdateEventHandler.onUpdate(ConverterService.deserializeObject(operationEvent.getParameters(), GamePlayerGroupUpdate));
    }

}
