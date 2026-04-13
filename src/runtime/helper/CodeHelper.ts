import { InvalidMemberType } from "./../constant/enumType/InvalidMemberType";
import { RequestRole } from "./../constant/enumType/RequestRole";
import { RequestType } from "./../constant/enumType/RequestType";
import { ReturnCode } from "./../constant/ReturnCode";

/**
 * Resolves numeric SDK codes back into human-readable names.
 */
class CodeHelperBase {
	private static readonly unknownCode = "Unknown";

	codeDict: Map<number, string>;

	/**
	 * Returns a human-readable name for the numeric code, or an `Unknown (...)` fallback.
	 */
	public getCodeName(code: number): string {
		return this.codeDict.has(code) ? this.codeDict.get(code) : (CodeHelperBase.unknownCode + " (" + code + ")");
	}

	/**
	 * Creates a new CodeHelperBase instance.
	 */
	constructor(codeDict: Map<number, string>) {
		this.codeDict = codeDict;
	}
}

/**
 * Centralizes lookup tables used to convert numeric codes into readable log strings.
 */
export class CodeHelper {
	private static returnCodeHelper: CodeHelperBase;
	private static requestTypeHelper: CodeHelperBase;
	private static requestRoleHelper: CodeHelperBase;
	private static invalidMemberHelper: CodeHelperBase;

	/**
	 * Returns the readable name for a backend return code.
	 */
	public static getReturnCodeName(returnCode: number): string {
		return CodeHelper.returnCodeHelper.getCodeName(returnCode);
	}

	/**
	 * Returns the readable name for a request type.
	 */
	public static getRequestTypeName(requestType: number): string {
		return CodeHelper.requestTypeHelper.getCodeName(requestType);
	}

	/**
	 * Returns the readable name for a request role.
	 */
	public static getRequestRoleName(requestRole: number): string {
		return CodeHelper.requestRoleHelper.getCodeName(requestRole);
	}

	/**
	 * Returns the invalid member name.
	 * @param invalidMember Provides the invalidMember.
	 * @returns Returns the invalid member name.
	 */
	public static getInvalidMemberName(invalidMember: number): string {
		return CodeHelper.invalidMemberHelper.getCodeName(invalidMember);
	}

	/**
	 * Builds all lookup dictionaries used by the SDK logging helpers.
	 */
	static init(): void {
		this.setReturnCodeDic();
		this.setRequestTypeDic();
		this.setRequestRoleDic();
		this.setInvalidMemberDic();
	}

	/**
	 * Resets and populates the return-code lookup dictionary.
	 */
	private static setReturnCodeDic(): void {
		this.returnCodeHelper = new CodeHelperBase(new Map());

		this.addReturnCodeDic(ReturnCode);
	}

	/**
	 * Appends enum entries to the return-code lookup dictionary.
	 */
	public static addReturnCodeDic(returnCode: any): void {
		let keys = Object.keys(returnCode) as Array<string>;
		let values = Object.values(returnCode) as Array<number>;

		for (let i = 0; i < keys.length; i++) {
			this.returnCodeHelper.codeDict.set(values[i], keys[i]);
		}
	}

	/**
	 * Resets and populates the request-type lookup dictionary.
	 */
	private static setRequestTypeDic(): void {
		this.requestTypeHelper = new CodeHelperBase(new Map());

		this.addRequestTypeDic(RequestType);
	}

	/**
	 * Appends enum entries to the request-type lookup dictionary.
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
	 * Resets and populates the request-role lookup dictionary.
	 */
	private static setRequestRoleDic(): void {
		this.requestRoleHelper = new CodeHelperBase(new Map());

		this.addRequestRoleDic(RequestRole);
	}

	/**
	 * Appends enum entries to the request-role lookup dictionary.
	 */
	public static addRequestRoleDic(requestRole: any): void {
		let keys = Object.keys(requestRole) as Array<string>;
		let values = Object.values(requestRole) as Array<number>;

		for (let i = 0; i < keys.length; i++) {
			let key = keys[i];
			this.requestRoleHelper.codeDict.set(values[i], key[0].toLowerCase() + key.slice(1));
		}
	}

	private static setInvalidMemberDic(): void {
		this.invalidMemberHelper = new CodeHelperBase(new Map());

		this.addInvalidMemberDic(InvalidMemberType);
	}

	public static addInvalidMemberDic(invalidMember: any): void {
		// Stores the keys value used in the current execution flow.
		let keys = Object.keys(invalidMember) as Array<string>;
		// Stores the values value used in the current execution flow.
		let values = Object.values(invalidMember) as Array<number>;

		for (let i = 0; i < keys.length; i++) {
			// Stores the key value used in the current execution flow.
			let key = keys[i];
			this.invalidMemberHelper.codeDict.set(values[i], key[0].toLowerCase() + key.slice(1));
		}
	}

}
