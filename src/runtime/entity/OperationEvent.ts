import { GNHashtable } from "./../common/GNData";

/**
 * Low-level container for a server-pushed event delivered over the
 * socket transport.
 *
 * The SDK builds one of these in {@link SocketPeer.onEventHandler}
 * for every decoded event frame, then dispatches it to:
 * - the single-slot raw observer registered through
 *   {@link GNNetwork.setOnEventHandler}; and
 * - every typed {@link IServerEventHandler} whose `getEventCode()`
 *   matches the event's code.
 *
 * Events are different from responses in two ways: they carry no
 * `responseId` (server-initiated, no correlation needed), and they
 * have no return code (events are not requests so there is nothing
 * to fail).
 */
export class OperationEvent {

	private eventCode: string;
	private parameters: GNHashtable;

	/**
	 * @param eventCode  Event code carried by the frame; usually a
	 *                   constant from {@link EventCode}.
	 * @param parameters Optional parameter bag. Defaults to `null`
	 *                   for events with no payload.
	 */
	constructor(eventCode: string, parameters: GNHashtable = null) {
		this.eventCode = eventCode;
		this.parameters = parameters;
	}

	/**
	 * Returns the event code that the SDK uses to look up
	 * registered handlers.
	 */
	public getEventCode(): string {
		return this.eventCode;
	}

	/**
	 * Returns the event parameter bag, or `null` for parameter-less
	 * events.
	 *
	 * Typed handlers usually feed this through
	 * {@link ConverterService.deserializeObject} to obtain a
	 * strongly typed payload.
	 */
	public getParameters(): GNHashtable {
		return this.parameters;
	}

	/**
	 * Adds or replaces a single parameter on the existing parameter
	 * bag.
	 *
	 * Note that this method assumes the parameter bag is non-null —
	 * if the event was constructed without one, call
	 * {@link setParameters} first.
	 */
	public setParameter(k: string, value: any): OperationEvent {
		this.parameters.add(k, value);
		return this;
	}

	/**
	 * Replaces the entire parameter bag.
	 */
	public setParameters(parameters: GNHashtable): OperationEvent {
		this.parameters = parameters;
		return this;
	}

	/**
	 * Returns a debug-friendly summary used by the
	 * `[GN Socket EVENT]` log line.
	 */
	public toString(): string {
		return "EventCode: " + this.eventCode + ", parameters " + JSON.stringify(this.parameters?.toData());
	}

}
