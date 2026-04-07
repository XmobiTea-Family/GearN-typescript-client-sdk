import { OperationEvent } from "./../../entity/OperationEvent";

/**
 * Describes IServerEventHandler.
 */
export interface IServerEventHandler {

	getEventCode(): string;

	handle(operationEvent: OperationEvent): void;

}

/**
 * Groups declarations inside IServerEventHandler.
 */
export namespace IServerEventHandler {
	/**
	 * Defines the type alias Constructor.
	 */
	type Constructor<T> = {
		new(...args: any[]): T;
		readonly prototype: T;
	}
	const implementations: Constructor<IServerEventHandler>[] = [];

	/**
	 * Returns every handler constructor registered through `registerEvent`.
	 */
	export function getImplementations(): Constructor<IServerEventHandler>[] {
		return implementations;
	}

	/**
	 * Registers a handler implementation so `SocketPeer` can instantiate it automatically.
	 */
	export function registerEvent<T extends Constructor<IServerEventHandler>>(ctor: T) {
		implementations.push(ctor);
		return ctor;
	}

}
