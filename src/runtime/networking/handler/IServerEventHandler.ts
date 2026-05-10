import { OperationEvent } from "./../../entity/OperationEvent";

/**
 * Contract for a typed server-pushed event handler.
 *
 * The SDK delivers two kinds of incoming traffic over the socket:
 * - **Responses** to operations the client previously sent.
 * - **Events** the server pushes spontaneously (friend list change,
 *   group message arrived, group member roster updated, ...).
 *
 * Each event handler implementation declares which `EventCode` it is
 * interested in via {@link getEventCode}, then receives the matching
 * raw {@link OperationEvent} through {@link handle}. The handler is
 * responsible for any further deserialisation — typically through
 * {@link ConverterService.deserializeObject} into a typed payload
 * class — and for fanning out to application code (usually via a
 * static callback slot).
 *
 * Registration:
 * - Decorate the handler class with
 *   `@IServerEventHandler.registerEvent` to opt into the static
 *   registry. {@link SocketPeer.initGNSocketObject} instantiates one
 *   handler per registered class during init.
 * - Or, instantiate a handler manually and call
 *   {@link GNNetwork.subscriberServerEventHandler} to add it at
 *   runtime — useful for handlers built dynamically with custom
 *   instance state.
 */
export interface IServerEventHandler {
    /**
     * Returns the {@link EventCode} this handler is responsible for.
     *
     * The SDK uses the returned value as the dictionary key inside
     * the per-event-code dispatch table. Multiple handlers may
     * return the same value; they are dispatched in registration
     * order.
     */
    getEventCode(): string;
    /**
     * Handles a single decoded {@link OperationEvent} delivered by
     * the socket transport.
     *
     * Implementations typically:
     * 1. Deserialise `operationEvent.getParameters()` into a typed
     *    payload class via
     *    {@link ConverterService.deserializeObject}.
     * 2. Forward the typed payload to a static callback slot the
     *    application registers ahead of time.
     *
     * Implementations should treat thrown errors as fatal — the
     * dispatcher in {@link SocketPeer.onEventHandler} does not
     * wrap the call in try/catch.
     */
    handle(operationEvent: OperationEvent): void;

}

/**
 * Registry helpers attached to the {@link IServerEventHandler}
 * interface as a same-named namespace.
 *
 * The registry stores **class constructors** (not instances) so that
 * {@link SocketPeer.initGNSocketObject} can build one fresh instance
 * per class on SDK startup. This indirection lets handler classes
 * carry per-instance state if they wish (e.g. last-seen sequence id,
 * dedup map) without requiring the application to wire them up.
 */
export namespace IServerEventHandler {
    /**
     * Constructor signature accepted by the registry — anything
     * `new`-able with arbitrary args that produces a `T`. The
     * `prototype` field is required by the registry call site.
     */
    type Constructor<T> = {
        new(...args: any[]): T;
        readonly prototype: T;
    }
    const implementations: Constructor<IServerEventHandler>[] = [];

    /**
     * Returns every constructor currently registered with the
     * registry. Called once during {@link SocketPeer.initGNSocketObject}.
     */
    export function getImplementations(): Constructor<IServerEventHandler>[] {
        return implementations;
    }

    /**
     * Class decorator that registers a handler so the SDK
     * instantiates it automatically.
     *
     * @example
     * ```ts
     * @IServerEventHandler.registerEvent
     * export class OnSomethingHandler implements IServerEventHandler {
     *     public getEventCode(): string { return EventCode.OnSomething; }
     *     public handle(event: OperationEvent): void { ... }
     * }
     * ```
     *
     * Returns the constructor as-is so it can still be used as a
     * value (instantiated, type-checked, etc.).
     */
    export function registerEvent<T extends Constructor<IServerEventHandler>>(ctor: T) {
        implementations.push(ctor);
        return ctor;
    }

}
