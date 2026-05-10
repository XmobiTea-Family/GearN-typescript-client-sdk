import { CodeHelper } from "./../helper/CodeHelper";
import { GNHashtable } from "./../common/GNData";
import { ReturnCode } from "./../constant/ReturnCode";
import { InvalidMember } from "./InvalidMember";

/**
 * Low-level response container produced by the SDK transports.
 *
 * Built by {@link PeerBase.onResponseHandler} from the raw response
 * payload and handed to either:
 * - the application callback registered through
 *   {@link GNNetwork.sendViaSocket} / `sendViaHttp` (raw consumers);
 *   or
 * - the typed `*OperationResponse` wrapper that
 *   {@link GNNetwork.sendViaSocketTResponse} / `sendViaHttpTResponse`
 *   built from the supplied response class.
 *
 * Validation: when the server rejects a request because of malformed
 * parameters, it ships a list of offending keys via
 * `invalidRequestParameters`. {@link PeerBase.onResponseHandler}
 * decodes the inner array into typed {@link InvalidMember} entries
 * accessible through {@link getInvalidMembers}.
 */
export class OperationResponse {
    private operationCode: string;
    private responseId: number;
    private returnCode: number;
    private debugMessage: string;
    private parameters: GNHashtable;

    private invalidMembers: InvalidMember[];

    /**
     * @param operationCode Operation code that produced the
     *                      response (mirrored from the matching
     *                      request).
     * @param responseId    Response id used for correlation.
     *                      Matches the request's id assigned by
     *                      {@link PeerBase.enqueue}.
     */
    constructor(operationCode: string, responseId: number) {
        this.operationCode = operationCode;
        this.responseId = responseId;
        this.parameters = new GNHashtable();
        this.debugMessage = null;
    }

    /**
     * Returns the operation code carried by the response.
     */
    public getOperationCode(): string {
        return this.operationCode;
    }

    /**
     * Returns the backend return code (from {@link ReturnCode}).
     *
     * Use {@link hasError} when you only need a boolean
     * success / failure check.
     */
    public getReturnCode(): number {
        return this.returnCode;
    }

    /**
     * Returns the deserialized response parameter bag.
     *
     * For a successful response this carries the operation-specific
     * payload; for a failed response it is typically empty.
     */
    public getParameters(): GNHashtable {
        return this.parameters;
    }

    /**
     * Returns the response correlation id.
     *
     * Used internally by the in-flight tracking machinery. Most
     * application code can ignore it.
     */
    public getResponseId(): number {
        return this.responseId;
    }

    /**
     * Returns the debug message attached by the backend, or `null`
     * when none was provided.
     *
     * Populated mainly for failure responses — the GearN backend
     * does not include a debug message on success.
     */
    public getDebugMessage(): string {
        return this.debugMessage;
    }

    /**
     * Returns the list of invalid request parameters reported by
     * the backend, or `null` when none were reported.
     *
     * Populated only when {@link getReturnCode} equals
     * `ReturnCode.InvalidRequestParameters`.
     */
    public getInvalidMembers(): InvalidMember[] {
        return this.invalidMembers;
    }

    /**
     * Returns whether the response represents a non-success outcome.
     *
     * @returns `true` when {@link getReturnCode} is anything other
     *          than `ReturnCode.Ok`. Note that this is **not** the
     *          same as a domain error
     *          ({@link ErrorCode}) — domain errors travel inside
     *          successful responses; check the operation-specific
     *          response data for those.
     */
    public hasError(): boolean {
        return this.getReturnCode() != ReturnCode.Ok;
    }

    /**
     * Sets the return code and returns the response for chaining.
     *
     * Used by {@link PeerBase.onResponseHandler}; application code
     * does not normally call this directly.
     */
    public setReturnCode(returnCode: number): OperationResponse {
        this.returnCode = returnCode;
        return this;
    }

    /**
     * Sets the debug message and returns the response for chaining.
     */
    public setDebugMessage(debugMessage: string): OperationResponse {
        this.debugMessage = debugMessage;
        return this;
    }

    /**
     * Adds or replaces a single response parameter.
     *
     * @param k     Parameter key — usually a constant from
     *              {@link ParameterCode}.
     * @param value Any value accepted by {@link GNHashtable.add}.
     * @returns     The response for chaining.
     */
    public setParameter(k: string, value: any): OperationResponse {
        this.parameters.add(k, value);
        return this;
    }

    /**
     * Replaces the entire response parameter bag.
     *
     * Used by {@link PeerBase.onResponseHandler} after decoding the
     * raw payload.
     */
    public setParameters(parameters: GNHashtable): OperationResponse {
        this.parameters = parameters;
        return this;
    }

    /**
     * Replaces the invalid-member collection.
     *
     * Set by {@link PeerBase.onResponseHandler} when the raw
     * response carries `invalidRequestParameters`.
     */
    public setInvalidMembers(invalidMembers: InvalidMember[]): OperationResponse {
        this.invalidMembers = invalidMembers;
        return this;
    }

    /**
     * Returns a debug-friendly summary of the response, used by the
     * `[GN RECV]` log line.
     *
     * The format adapts to the outcome:
     * - `Ok`: appends the parameter dump.
     * - `InvalidRequestParameters`: appends the offending member
     *   list.
     * - Other failures: appends the debug message.
     */
    public toString(): string {
        let stringBuilder = "";

        stringBuilder += "OperationCode: " + this.operationCode + ", responseId: " + this.responseId + ", returnCode " + CodeHelper.getReturnCodeName(this.returnCode);

        if (this.returnCode == ReturnCode.Ok) stringBuilder += ", parameters " + JSON.stringify(this.parameters?.toData());
        else if (this.returnCode == ReturnCode.InvalidRequestParameters) {
            if (this.invalidMembers != null) {
                let invalidStr = "";

                this.invalidMembers.forEach(invalidMember => {
                    invalidStr += invalidMember;
                });
                stringBuilder += ", invalidMembers " + invalidStr;
            }
            else stringBuilder += ", invalidMembers " + this.invalidMembers;
        }
        else stringBuilder += ", debugMessage " + this.debugMessage;

        return stringBuilder;
    }

}
