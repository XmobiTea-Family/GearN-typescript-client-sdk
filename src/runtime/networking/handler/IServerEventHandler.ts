import { OperationEvent } from "./../../entity/OperationEvent";

export interface IServerEventHandler {

    getEventCode(): number;

    handle(operationEvent: OperationEvent): void;

}

export namespace IServerEventHandler {
    type Constructor<T> = {
        new(...args: any[]): T;
        readonly prototype: T;
    }
    const implementations: Constructor<IServerEventHandler>[] = [];

    export function getImplementations(): Constructor<IServerEventHandler>[] {
        return implementations;
    }

    export function registerEvent<T extends Constructor<IServerEventHandler>>(ctor: T) {
        implementations.push(ctor);
        return ctor;
    }
    
}
