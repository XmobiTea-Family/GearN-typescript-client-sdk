import { Action1 } from "./../../common/Action1";
import { EventCode } from "./../../constant/EventCode";
import { GNParameterCode } from "./../../constant/parameterCode/GNParameterCode";
import { GNArrayDataMember, StringDataMember } from "./../../entity/DataMember";
import { OperationEvent } from "./../../entity/OperationEvent";
import { GenericModels } from "./../../entity/models/GenericModels";
import { ConverterService } from "./../../helper/ConverterService";
import { IServerEventHandler } from "./IServerEventHandler";

export class CharacterPlayerFriendUpdate {
    @StringDataMember({ code: GNParameterCode.CharacterId })
    public characterId: string;

    @GNArrayDataMember({ code: GNParameterCode.PlayerFriends, elementCls: GenericModels.FriendItem })
    public playerFriends: Array<GenericModels.FriendItem>;
}

@IServerEventHandler.registerEvent
export class OnCharacterPlayerFriendUpdateEventHandler implements IServerEventHandler {
    public static onUpdate: Action1<CharacterPlayerFriendUpdate>;

    public getEventCode(): number {
        return EventCode.OnCharacterPlayerFriendUpdate;
    }

    public handle(operationEvent: OperationEvent): void {
        if (OnCharacterPlayerFriendUpdateEventHandler.onUpdate != null)
            OnCharacterPlayerFriendUpdateEventHandler.onUpdate(ConverterService.deserializeObject(operationEvent.getParameters(), CharacterPlayerFriendUpdate));
    }

}
