import { ConverterService } from "./../../helper/ConverterService";
import { Constructor } from "./../GNMetadata";
import { GNHashtable } from "./../../common/GNData";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { ReturnCode } from "./../../constant/ReturnCode";
import { InvalidMember } from "./../InvalidMember";
import { OperationResponse } from "./../OperationResponse";

/**
 * Abstract base of every typed response wrapper exposed by the SDK.
 *
 * Each generated `*OperationResponse` class extends either this
 * class or its DTO-shaped subclass
 * {@link CustomOperationResponseAbstract}. The role of the wrapper
 * is to (a) capture the low-level
 * {@link OperationResponse} fields onto strongly typed properties
 * the application can read directly, and (b) decode the
 * domain-level {@link ErrorCode} carried inside the parameter bag
 * so success-with-business-error responses are distinguishable
 * from transport failures.
 *
 * Two-tier error model:
 * - {@link returnCode} reflects the transport-level
 *   {@link ReturnCode} — anything other than `Ok` is a transport,
 *   timeout or validation failure. Use {@link hasReturnCodeError}
 *   for the boolean check.
 * - {@link errorCode} carries the domain-level {@link ErrorCode}
 *   that the backend writes into a successful response payload to
 *   describe business outcomes. Only populated when the response
 *   has no return-code error.
 *
 * Application code typically inspects both:
 * ```ts
 * if (response.hasReturnCodeError()) {
 *     // transport / validation failure
 *     return showError(response.debugMessage);
 * }
 * if (response.errorCode !== ErrorCode.Ok) {
 *     // domain failure
 *     return showError(response.errorCode);
 * }
 * // success: read response.responseData
 * ```
 */
export abstract class CustomOperationResponse {
	/** Operation code mirrored from the matching request. */
	public operationCode: string;
	/** Raw response parameter bag; usually consumed indirectly through the typed `responseData`. */
	public parameters: GNHashtable;
	/** Transport-level return code (from {@link ReturnCode}). */
	public returnCode: number;
	/** Backend-supplied debug message; populated mostly for failures. */
	public debugMessage: string;
	/**
	 * Domain-level error code (from {@link ErrorCode}). Populated
	 * only when {@link returnCode} is `Ok`. Read this **after**
	 * {@link hasReturnCodeError} confirms transport success.
	 */
	public errorCode: number;
	/**
	 * Validation failure entries, populated when
	 * {@link returnCode} equals
	 * `ReturnCode.InvalidRequestParameters`.
	 */
	public invalidMembers: InvalidMember[];

	/**
	 * Returns whether the transport-level return code indicates a
	 * failure (anything other than `Ok`).
	 *
	 * Note: this does **not** consider {@link errorCode} — a
	 * transport-successful response may still carry a domain
	 * failure, which the caller has to check separately by
	 * comparing `errorCode` to the relevant {@link ErrorCode}
	 * constants.
	 */
	public hasReturnCodeError() {
		return this.returnCode != ReturnCode.Ok;
	}

	/**
	 * Copies the low-level {@link OperationResponse} fields into
	 * the typed wrapper.
	 *
	 * Called by the SDK helpers
	 * {@link GNNetwork.sendViaSocketTResponse} /
	 * `sendViaHttpTResponse` after they receive the raw response
	 * from the transport. Subclasses such as
	 * {@link CustomOperationResponseAbstract} chain into this
	 * implementation and then run their own DTO deserialisation.
	 *
	 * Side effect: when the response is transport-successful, this
	 * method also reads `ParameterCode.ErrorCode` out of the
	 * parameters and stores it on {@link errorCode} so call sites
	 * can check the domain outcome without re-touching the
	 * parameter bag.
	 */
	public setupOperationResponse(operationResponse: OperationResponse): void {
		this.operationCode = operationResponse.getOperationCode();
		this.returnCode = operationResponse.getReturnCode();
		this.debugMessage = operationResponse.getDebugMessage();

		this.parameters = operationResponse.getParameters();
		this.invalidMembers = operationResponse.getInvalidMembers();

		if (!this.hasReturnCodeError()) {
			this.errorCode = this.parameters.getNumber(ParameterCode.ErrorCode);
		}
	}

	/**
	 * Returns a compact string useful for logging.
	 *
	 * Format: `"ReturnCode: <code> <parameters | debugMessage>"`.
	 * Parameters are stringified through
	 * {@link GNHashtable.toString} when available, otherwise the
	 * raw debug message takes their place.
	 */
	public toString(): string {
		return "ReturnCode: " + this.returnCode + " " + (this.parameters != null ? this.parameters.toString() : this.debugMessage);
	}

}

/**
 * DTO-aware base used by every generated response wrapper.
 *
 * Subclasses populate `responseDataCls` in their constructor /
 * declaration so that {@link setupOperationResponse} can
 * automatically deserialise the parameter bag into a strongly
 * typed payload after a transport-successful response.
 *
 * @template TResponseData Concrete response DTO class. Must use
 *                         the GearN `@*DataMember` decorator
 *                         family so {@link ConverterService} can
 *                         resolve the field metadata.
 */
export abstract class CustomOperationResponseAbstract<TResponseData> extends CustomOperationResponse {
	/**
	 * Typed response payload deserialised from
	 * {@link parameters}. Stays `undefined` when the response
	 * carried a transport error.
	 */
	public responseData: TResponseData;
	/**
	 * Reference to the DTO class. Required by
	 * {@link ConverterService.deserializeObject} to resolve
	 * decorator-driven field metadata.
	 */
	protected responseDataCls: Constructor<TResponseData>;

	/**
	 * Chains into {@link CustomOperationResponse.setupOperationResponse}
	 * and additionally deserialises the parameters into
	 * {@link responseData} when the response has no transport
	 * error.
	 *
	 * Skipped on transport failure: the caller must inspect
	 * {@link hasReturnCodeError} / {@link debugMessage} /
	 * {@link invalidMembers} instead.
	 */
	public setupOperationResponse(operationResponse: OperationResponse): void {
		super.setupOperationResponse(operationResponse);

		if (!this.hasReturnCodeError()) {
			this.responseData = ConverterService.deserializeObject<TResponseData>(this.parameters, this.responseDataCls);
		}
	}

}
