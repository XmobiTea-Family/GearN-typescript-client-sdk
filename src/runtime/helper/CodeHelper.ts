import { InvalidMemberType } from "./../constant/enumType/InvalidMemberType";
import { RequestRole } from "./../constant/enumType/RequestRole";
import { RequestType } from "./../constant/enumType/RequestType";
import { ReturnCode } from "./../constant/ReturnCode";

/**
 * Generic numeric-code → display-name lookup table.
 *
 * Acts as the implementation of every code-helper category exposed
 * by {@link CodeHelper}. Each instance owns one `Map<number, string>`
 * populated at init time and answers `getCodeName(code)` lookups
 * in O(1).
 *
 * Unknown codes are returned as `"Unknown (<code>)"` so logs make
 * the missing entry obvious without having to grep the code base.
 */
class CodeHelperBase {
	/** Fallback prefix used when `code` is not present in {@link codeDict}. */
	private static readonly unknownCode = "Unknown";

	/**
	 * Mutable lookup map. Populated at init time and treated as
	 * read-only afterwards.
	 */
	codeDict: Map<number, string>;

	/**
	 * Returns the display name registered for `code`, or
	 * `"Unknown (<code>)"` when the value is not known to this
	 * helper.
	 */
	public getCodeName(code: number): string {
		return this.codeDict.has(code) ? this.codeDict.get(code) : (CodeHelperBase.unknownCode + " (" + code + ")");
	}

	constructor(codeDict: Map<number, string>) {
		this.codeDict = codeDict;
	}
}

/**
 * Static facade for converting GearN numeric codes into the
 * lowercase-first-letter display names the backend expects on the
 * wire (and that look familiar in log lines).
 *
 * Categories:
 * - `getReturnCodeName(returnCode)` — translates the
 *   {@link ReturnCode} value carried by every response.
 * - `getRequestTypeName(requestType)` — translates the
 *   {@link RequestType} enum to the camelCase string used in
 *   {@link OperationHelper.toSocketData} and the HTTP URL.
 * - `getRequestRoleName(requestRole)` — translates the
 *   {@link RequestRole} enum the same way.
 * - `getInvalidMemberName(invalidMember)` — translates the
 *   {@link InvalidMemberType} enum used in
 *   {@link OperationResponse.getInvalidMembers}.
 *
 * Lifecycle: {@link init} runs from {@link GNNetwork.init} before
 * any model serialisation happens. After init, the lookups are
 * effectively immutable; the SDK does not expose a teardown.
 *
 * Extensibility: each category exposes an `add*Dic` method so
 * downstream applications can extend the lookup table with their
 * own enum values without forking the SDK. This is mostly used by
 * white-label deployments that introduce custom return codes.
 */
export class CodeHelper {
	/** Helper backing {@link getReturnCodeName}. */
	private static returnCodeHelper: CodeHelperBase;
	/** Helper backing {@link getRequestTypeName}. */
	private static requestTypeHelper: CodeHelperBase;
	/** Helper backing {@link getRequestRoleName}. */
	private static requestRoleHelper: CodeHelperBase;
	/** Helper backing {@link getInvalidMemberName}. */
	private static invalidMemberHelper: CodeHelperBase;

	/**
	 * Returns the display name for a backend return code (e.g.
	 * `ReturnCode.Ok` → `"Ok"`).
	 */
	public static getReturnCodeName(returnCode: number): string {
		return CodeHelper.returnCodeHelper.getCodeName(returnCode);
	}

	/**
	 * Returns the display name for a request-type code (e.g.
	 * `RequestType.Authenticate` → `"authenticate"`).
	 *
	 * The lowercased-first-letter convention matches the URL
	 * segment the backend expects for the HTTP API, and the
	 * matching index 0 in the socket frame produced by
	 * {@link OperationHelper.toSocketData}.
	 */
	public static getRequestTypeName(requestType: number): string {
		return CodeHelper.requestTypeHelper.getCodeName(requestType);
	}

	/**
	 * Returns the display name for a request-role code (e.g.
	 * `RequestRole.Client` → `"client"`).
	 */
	public static getRequestRoleName(requestRole: number): string {
		return CodeHelper.requestRoleHelper.getCodeName(requestRole);
	}

	/**
	 * Returns the display name for an
	 * {@link InvalidMemberType} value used by the validation
	 * machinery on the response side.
	 *
	 * @param invalidMember Numeric value picked from the response
	 *                      `invalidRequestParameters` array entry.
	 * @returns The display name, or `"Unknown (<n>)"` when the
	 *          value is not registered.
	 */
	public static getInvalidMemberName(invalidMember: number): string {
		return CodeHelper.invalidMemberHelper.getCodeName(invalidMember);
	}

	/**
	 * Builds every lookup table.
	 *
	 * Called once from {@link GNNetwork.init} before any operation
	 * is sent. Subsequent invocations rebuild every helper from
	 * scratch — useful in test setups that reset the SDK between
	 * cases.
	 */
	static init(): void {
		this.setReturnCodeDic();
		this.setRequestTypeDic();
		this.setRequestRoleDic();
		this.setInvalidMemberDic();
	}

	/**
	 * Resets the return-code helper to a fresh instance and seeds
	 * it from the canonical {@link ReturnCode} enum.
	 */
	private static setReturnCodeDic(): void {
		this.returnCodeHelper = new CodeHelperBase(new Map());

		this.addReturnCodeDic(ReturnCode);
	}

	/**
	 * Adds entries from any enum-shaped object into the
	 * return-code helper without lowercasing the first letter.
	 *
	 * Used by white-label deployments that ship additional return
	 * codes — they call this method once after
	 * {@link GNNetwork.init} with their own enum.
	 *
	 * @param returnCode Enum-shaped object whose entries should be
	 *                   merged into the helper.
	 */
	public static addReturnCodeDic(returnCode: any): void {
		let keys = Object.keys(returnCode) as Array<string>;
		let values = Object.values(returnCode) as Array<number>;

		for (let i = 0; i < keys.length; i++) {
			this.returnCodeHelper.codeDict.set(values[i], keys[i]);
		}
	}

	/**
	 * Resets the request-type helper to a fresh instance and seeds
	 * it from the canonical {@link RequestType} enum.
	 */
	private static setRequestTypeDic(): void {
		this.requestTypeHelper = new CodeHelperBase(new Map());

		this.addRequestTypeDic(RequestType);
	}

	/**
	 * Adds entries from any enum-shaped object into the
	 * request-type helper, lowercasing the first letter so the
	 * stored value matches the wire format
	 * (`RequestType.Authenticate` → `"authenticate"`).
	 *
	 * @param requestType Enum-shaped object whose entries should
	 *                    be merged into the helper.
	 */
	public static addRequestTypeDic(requestType: any): void {
		let keys = Object.keys(requestType) as Array<string>;
		let values = Object.values(requestType) as Array<number>;

		for (let i = 0; i < keys.length; i++) {
			let key = keys[i];
			this.requestTypeHelper.codeDict.set(values[i], key[0].toLowerCase() + key.slice(1));
		}
	}

	/**
	 * Resets the request-role helper to a fresh instance and seeds
	 * it from the canonical {@link RequestRole} enum.
	 */
	private static setRequestRoleDic(): void {
		this.requestRoleHelper = new CodeHelperBase(new Map());

		this.addRequestRoleDic(RequestRole);
	}

	/**
	 * Adds entries from any enum-shaped object into the
	 * request-role helper, lowercasing the first letter the same
	 * way {@link addRequestTypeDic} does.
	 *
	 * @param requestRole Enum-shaped object whose entries should
	 *                    be merged into the helper.
	 */
	public static addRequestRoleDic(requestRole: any): void {
		let keys = Object.keys(requestRole) as Array<string>;
		let values = Object.values(requestRole) as Array<number>;

		for (let i = 0; i < keys.length; i++) {
			let key = keys[i];
			this.requestRoleHelper.codeDict.set(values[i], key[0].toLowerCase() + key.slice(1));
		}
	}

	/**
	 * Resets the invalid-member helper to a fresh instance and
	 * seeds it from the canonical {@link InvalidMemberType} enum.
	 */
	private static setInvalidMemberDic(): void {
		this.invalidMemberHelper = new CodeHelperBase(new Map());

		this.addInvalidMemberDic(InvalidMemberType);
	}

	/**
	 * Adds entries from any enum-shaped object into the
	 * invalid-member helper, lowercasing the first letter so the
	 * stored value matches the human-readable form used in
	 * validation log lines.
	 *
	 * @param invalidMember Enum-shaped object whose entries should
	 *                      be merged into the helper.
	 */
	public static addInvalidMemberDic(invalidMember: any): void {
		let keys = Object.keys(invalidMember) as Array<string>;
		let values = Object.values(invalidMember) as Array<number>;

		for (let i = 0; i < keys.length; i++) {
			let key = keys[i];
			this.invalidMemberHelper.codeDict.set(values[i], key[0].toLowerCase() + key.slice(1));
		}
	}

}
