import { OperationEvent } from "./../../entity/OperationEvent";

/**
 * Describes a typed socket-event handler that can be registered on the shared peer.
 *
 * Implementations declare which `EventCode` they handle and how to transform a raw `OperationEvent`
 * into the higher-level payload exposed to application code.
 */
export interface IServerEventHandler {
	/** Returns the `EventCode` value handled by this implementation. */
	getEventCode(): string;
	/** Handles one incoming raw event packet delivered by the socket transport. */
	handle(operationEvent: OperationEvent): void;

}

/**
 * Groups registration helpers used by `IServerEventHandler`.
 */
export namespace IServerEventHandler {
	/**
	 * Defines the constructor shape accepted by the event-handler registry.
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
	 *
	 * Typical usage is `@IServerEventHandler.registerEvent` on the handler class declaration.
	 */
	export function registerEvent<T extends Constructor<IServerEventHandler>>(ctor: T) {
		implementations.push(ctor);
		return ctor;
	}

}
