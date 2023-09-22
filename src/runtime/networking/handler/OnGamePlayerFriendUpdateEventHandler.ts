import { Action1 } from "../../common/Action1";
import { EventCode } from "../../constant/EventCode";
import { GNParameterCode } from "../../constant/parameterCode/GNParameterCode";
import { GNArrayDataMember, StringDataMember } from "../../entity/DataMember";
import { OperationEvent } from "../../entity/OperationEvent";
import { GenericModels } from "../../entity/models/GenericModels";
import { ConverterService } from "../../helper/ConverterService";
import { IServerEventHandler } from "./IServerEventHandler";

export class GamePlayerFriendUpdate {
    @StringDataMember({ code: GNParameterCode.CharacterId, isOptional: true })
    public characterId?: string;

    @GNArrayDataMember({ code: GNParameterCode.PlayerFriends, elementCls: GenericModels.FriendItem })
    public playerFriends: Array<GenericModels.FriendItem>;
}

@IServerEventHandler.registerEvent
export class OnGamePlayerFriendUpdateEventHandler implements IServerEventHandler {
    public static onUpdate: Action1<GamePlayerFriendUpdate>;

    public getEventCode(): number {
        return EventCode.OnGamePlayerFriendUpdate;
    }

    public handle(operationEvent: OperationEvent): void {
        if (OnGamePlayerFriendUpdateEventHandler.onUpdate != null)
            OnGamePlayerFriendUpdateEventHandler.onUpdate(ConverterService.deserializeObject(operationEvent.getParameters(), GamePlayerFriendUpdate));
    }

}
