
// Types from ../types/cocos.d.ts are automatically available

type PlatformType = "cocos" | "browser" | "nodejs";

/**
 * Detects and caches the runtime platform used by the SDK.
 */
export class GNSupport {
	private static _isBrowser: boolean;
	private static _isCocosCreator: boolean;
	private static _platformType: PlatformType;
	private static _initialized: boolean = false;

	/**
	 * Detects the current runtime once and caches the result for future lookups.
	 */
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
	 * Returns whether the SDK is running in a browser environment.
	 */
	public static isBrowser(): boolean {
		return this._isBrowser;
	}

	/**
	 * Returns whether the SDK is running inside Cocos Creator.
	 */
	public static isCocosCreator(): boolean {
		return this._isCocosCreator;
	}

	/**
	 * Returns whether the SDK is running under Node.js.
	 */
	public static isNodeJS(): boolean {
		return this._platformType === "nodejs";
	}

	/**
	 * Returns the cached runtime platform type.
	 */
	public static getPlatformType(): PlatformType {
		return this._platformType;
	}
}
