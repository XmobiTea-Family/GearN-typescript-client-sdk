/**
 * Validation failure categories used by the GearN backend when it
 * rejects a malformed request.
 *
 * Each entry describes **why** a specific request parameter failed
 * validation. The backend ships a list of `[code, type]` pairs in
 * the `invalidRequestParameters` array of a response with
 * `ReturnCode.InvalidRequestParameters`; the SDK decodes those
 * pairs into typed {@link InvalidMember} entries accessible via
 * {@link OperationResponse.getInvalidMembers}.
 *
 * The categories cover the validation rules declared by the
 * `@*DataMember` decorator family:
 * - `*Null` — `mustNonNull = true` was violated.
 * - `*MinLength` / `*MaxLength` — string / hashtable / array
 *   length bounds.
 * - `Number*` — numeric range / integer constraints.
 * - `DataRequired` — the parameter was missing entirely.
 * - `TypeInvalid` — the value was present but had the wrong
 *   runtime type.
 * - `UnknownError` — backend-side rejection that does not map to
 *   any of the above.
 */
export enum InvalidMemberType {
	/**
	 * Catch-all category for backend-side validation rejections
	 * that do not fit any of the structured cases below.
	 */
	UnknownError = 1,

	/**
	 * The parameter is required but the request did not include
	 * it (the wire payload had no entry for the matching `code`).
	 */
	DataRequired = 2,

	/**
	 * The parameter was present but had a runtime type the backend
	 * did not expect (e.g. a number where a string was declared).
	 */
	TypeInvalid = 3,

	/**
	 * `@StringDataMember({ mustNonNull: true })` was violated — the
	 * value was `null`.
	 */
	StringNull = 4,

	/**
	 * String length is below the configured `minLength`.
	 */
	StringMinLength = 5,

	/**
	 * String length is above the configured `maxLength`.
	 */
	StringMaxLength = 6,

	/**
	 * Numeric value is below the configured `minValue`.
	 */
	NumberMinValue = 7,

	/**
	 * Numeric value is above the configured `maxValue`.
	 */
	NumberMaxValue = 8,

	/**
	 * `@NumberDataMember({ mustInt: true })` was violated — the
	 * value was a fractional number.
	 */
	NumberMustInt = 9,

	/**
	 * `@GNHashtableDataMember({ mustNonNull: true })` was violated.
	 */
	GNHashtableNull = 10,

	/**
	 * `GNHashtable` member key count is below the configured
	 * `minLength`.
	 */
	GNHashtableMinLength = 11,

	/**
	 * `GNHashtable` member key count is above the configured
	 * `maxLength`.
	 */
	GNHashtableMaxLength = 12,

	/**
	 * `@GNArrayDataMember({ mustNonNull: true })` was violated.
	 */
	GNArrayNull = 13,

	/**
	 * `GNArray` element count is below the configured `minLength`.
	 */
	GNArrayMinLength = 14,

	/**
	 * `GNArray` element count is above the configured `maxLength`.
	 */
	GNArrayMaxLength = 15,

}
