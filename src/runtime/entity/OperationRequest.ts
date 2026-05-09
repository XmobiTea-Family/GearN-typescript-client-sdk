import { GNHashtable } from "./../common/GNData";

/**
 * Low-level request envelope sent to the GearN backend.
 *
 * Carries the operation code, the optional parameter bag, the
 * client-assigned request id used to correlate the response, and a
 * per-request timeout. Most application code never instantiates
 * this class directly — the typed `*Api` wrappers and
 * `CustomOperationRequest` subclasses build it for you. Reach for
 * the raw class only when issuing custom operations through
 * {@link GNNetwork.sendViaSocket} / {@link GNNetwork.sendViaHttp}.
 *
 * Request id semantics:
 * - The default constructor leaves the id unassigned. The peer
 *   later sets a unique id during {@link PeerBase.enqueue} so the
 *   response can be matched to the right callback.
 * - Set the id to `-1` explicitly when you want a fire-and-forget
 *   request: the peer sees the sentinel and skips both the id
 *   assignment and the in-flight tracking, so no response will
 *   ever resolve through the SDK callback path.
 */
export class OperationRequest {
	/**
	 * Sentinel used by the SDK in two unrelated places:
	 *
	 * - As the **default timeout in seconds** when application code
	 *   does not pass an explicit timeout — the transport replaces
	 *   it with `GNServerSettings.getDefaultTimeoutInSeconds()` at
	 *   send time.
	 * - As the magic value `20` shared with the same default in
	 *   {@link GNServerSettings} so the two places agree by
	 *   construction.
	 */
	public static readonly defaultTimeOut: number = 20;

	/**
	 * Operation code carried in every wire frame. Values come from
	 * {@link OperationCode}.
	 */
	private operationCode: string;
	/**
	 * Client-assigned request id used to correlate the response.
	 * Stays `undefined` until {@link PeerBase.enqueue} assigns one
	 * (or remains `-1` for fire-and-forget calls).
	 */
	private requestId: number;
	/** Optional parameter bag, lazily allocated on first {@link setParameter}. */
	private parameters: GNHashtable;
	/**
	 * Timeout in **seconds**. The {@link defaultTimeOut} sentinel
	 * is replaced with the configured default at send time.
	 */
	private timeout: number;

	/**
	 * @param operationCode Operation code from
	 *                      {@link OperationCode}.
	 * @param timeout       Optional per-request timeout in seconds.
	 *                      Defaults to {@link defaultTimeOut} so
	 *                      the transport can substitute the
	 *                      configured value.
	 */
	constructor(operationCode: string, timeout: number = OperationRequest.defaultTimeOut) {
		this.operationCode = operationCode;
		this.timeout = timeout;
	}

	/**
	 * Returns the operation code embedded in the request.
	 */
	public getOperationCode(): string {
		return this.operationCode;
	}

	/**
	 * Returns the request id used for response correlation.
	 *
	 * @returns Numeric id (assigned by the peer), or `-1` for
	 *          fire-and-forget requests, or `undefined` before
	 *          {@link PeerBase.enqueue} runs.
	 */
	public getRequestId(): number {
		return this.requestId;
	}

	/**
	 * Returns the parameter bag that will be serialised onto the
	 * wire, or `null` when no parameters have been added.
	 */
	public getParameters(): GNHashtable {
		return this.parameters;
	}

	/**
	 * Returns the timeout in **seconds** that will apply to the
	 * request.
	 */
	public getTimeout(): number {
		return this.timeout;
	}

	/**
	 * Replaces the request id and returns the current request for
	 * chaining.
	 *
	 * @param requestId  New id. Use `-1` to opt into the
	 *                   fire-and-forget path.
	 */
	public setRequestId(requestId: number): OperationRequest {
		this.requestId = requestId;
		return this;
	}

	/**
	 * Adds or replaces a single parameter and returns the request
	 * for chaining.
	 *
	 * Lazily allocates the underlying {@link GNHashtable} on the
	 * first call so empty requests do not pay for the container.
	 *
	 * @param key   Wire-level parameter key — usually a constant
	 *              from {@link ParameterCode}.
	 * @param value Any value accepted by
	 *              {@link GNHashtable.add} (primitives, plain
	 *              objects, arrays, nested containers).
	 */
	public setParameter(key: string, value: any): OperationRequest {
		if (this.parameters == null)
			this.parameters = new GNHashtable();

		this.parameters.add(key, value);

		return this;
	}

	/**
	 * Replaces the entire parameter bag and returns the request for
	 * chaining.
	 */
	public setParameters(parameters: GNHashtable): OperationRequest {
		this.parameters = parameters;
		return this;
	}

	/**
	 * Replaces the timeout (in seconds) and returns the request for
	 * chaining.
	 */
	public setTimeout(timeout: number): OperationRequest {
		this.timeout = timeout;
		return this;
	}

	/**
	 * Returns a debug-friendly summary of the request.
	 *
	 * Used by `[GN Socket SEND]` / `[GN Http SEND]` log lines. The
	 * parameters are dumped via
	 * `JSON.stringify(parameters?.toData())` so nested
	 * {@link GNHashtable} / {@link GNArray} containers are
	 * expanded into plain objects / arrays.
	 */
	public toString(): string {
		return "OperationCode: " + this.operationCode + ", requestId: " + this.requestId + ", parameters " + JSON.stringify(this.parameters?.toData());
	}

}
