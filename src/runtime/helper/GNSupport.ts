
// Types from ../types/cocos.d.ts are automatically available

type PlatformType = "cocos" | "browser" | "nodejs";

export class GNSupport {
	private static _isBrowser: boolean;
	private static _isCocosCreator: boolean;
	private static _platformType: PlatformType;
	private static _initialized: boolean = false;

	static init(): void {
		if (this._initialized) return;

		// Check for Cocos Creator 3.x first (has cc.sys)
		this._isCocosCreator = (typeof cc !== "undefined" && cc.sys !== undefined);

		// Browser check (has window but not Node.js)
		this._isBrowser = (typeof window !== "undefined");

		// Determine platform type
		if (this._isCocosCreator) {
			this._platformType = "cocos";
		} else if (this._isBrowser) {
			this._platformType = "browser";
		} else {
			this._platformType = "nodejs";
		}

		this._initialized = true;
	}

	/**
	 * Check if running in standard browser environment
	 */
	public static isBrowser(): boolean {
		return this._isBrowser;
	}

	/**
	 * Check if running in Cocos Creator 3.x environment
	 */
	public static isCocosCreator(): boolean {
		return this._isCocosCreator;
	}

	/**
	 * Check if running in Node.js environment
	 */
	public static isNodeJS(): boolean {
		return this._platformType === "nodejs";
	}

	/**
	 * Get the current platform type
	 */
	public static getPlatformType(): PlatformType {
		return this._platformType;
	}
}
