import { InvalidMemberType } from "./../constant/enumType/InvalidMemberType";

/**
 * Single entry in the `invalidRequestParameters` list returned by
 * the backend when validation rejects a request.
 *
 * The SDK only ships this value through
 * {@link OperationResponse.getInvalidMembers}, populated by
 * {@link PeerBase.onResponseHandler} when the response carries the
 * `invalidRequestParameters` array. Each entry tells the
 * application **which** parameter failed and **why**, so the
 * caller can surface a precise validation error in the UI.
 *
 * Wire layout: each entry is sent as a two-element array
 * `[code, invalidMemberType]` — the SDK unpacks it into this
 * struct shape for ergonomics.
 */
export interface InvalidMember {

	/**
	 * Wire-level parameter key that failed validation. Matches the
	 * `code` value declared by the corresponding
	 * `@*DataMember({ code: ParameterCode.X })` decorator on the
	 * request model, so the application can map the failure back
	 * to a specific input field.
	 */
	code: string;
	/**
	 * Discriminator describing why the parameter was rejected
	 * (missing, out of range, wrong type, ...). Decoded by
	 * {@link CodeHelper.getInvalidMemberName} when the SDK needs a
	 * human-readable label.
	 */
	invalidMemberType: InvalidMemberType;

}
