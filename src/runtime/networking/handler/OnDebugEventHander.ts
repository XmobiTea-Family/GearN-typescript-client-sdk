import { EventCode } from "./../../constant/EventCode";
import { OperationEvent } from "./../../entity/OperationEvent";
import { IServerEventHandler } from "./IServerEventHandler";

@IServerEventHandler.registerEvent
export class OnDebugEventHander implements IServerEventHandler {

    public getEventCode(): number {
        return EventCode.OnDebug;
    }

    public handle(operationEvent: OperationEvent): void {
        console.log(operationEvent.toString());
    }

}
