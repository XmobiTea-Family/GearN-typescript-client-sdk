
// Types from ../types/cocos.d.ts are automatically available

/**
 * Discrete identifiers returned by {@link GNSupport.getPlatformType}.
 *
 * The string union is intentionally narrow — the SDK only branches
 * on these three values:
 * - `"cocos"` — the host runtime exposes the Cocos `cc` global with
 *   `cc.sys`. Detected before the browser check because the Cocos
 *   web build also exposes `window`.
 * - `"browser"` — the host exposes `window` but no Cocos `cc`
 *   global (vanilla browser, Electron renderer, embedded WebView).
 * - `"nodejs"` — neither of the above (Node.js, edge runtimes).
 */
type PlatformType = "cocos" | "browser" | "nodejs";

/**
 * Detects the host runtime once during {@link GNNetwork.init} and
 * exposes the result through small static accessors.
 *
 * Used for branching across runtime-specific code paths:
 * - {@link StorageService} picks between `cc.sys.localStorage`,
 *   `window.localStorage` and the npm `store` package.
 * - {@link HttpPeer} downgrades MsgPack HTTP requests to JSON in
 *   browsers because the browser HTTP path cannot reliably
 *   consume a MsgPack response across vendors.
 * - {@link NetworkingPeerAxiosRequest} only emits the custom
 *   `User-Agent` / `Content-Length` headers from Node.js because
 *   browsers refuse to let JavaScript override them.
 *
 * Detection runs exactly once because the runtime cannot change
 * mid-process; the cached values are accessed via the boolean
 * helpers without re-running the checks.
 */
export class GNSupport {
	/** Cached `_platformType === "browser"` flag. */
	private static _isBrowser: boolean;
	/** Cached `_platformType === "cocos"` flag. */
	private static _isCocosCreator: boolean;
	/** Cached platform identifier. */
	private static _platformType: PlatformType;
	/**
	 * Init guard so {@link init} is idempotent — the SDK calls it
	 * from {@link GNNetwork.init} but defensive call sites may
	 * also invoke it.
	 */
	private static _initialized: boolean = false;

	/**
	 * Detects the runtime environment and caches the result.
	 *
	 * Detection order matters: Cocos must come first because the
	 * Cocos web build still exposes `window`. Once `cc.sys` is
	 * present we treat the host as Cocos even if `window` is also
	 * defined.
	 *
	 * Safe to call multiple times — the {@link _initialized} guard
	 * makes the second call a no-op.
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
	 * Returns whether the host runtime exposes a `window` global.
	 *
	 * Note that this returns `true` for both vanilla browsers and
	 * the Cocos web build — when you need to distinguish those two
	 * cases use {@link isCocosCreator} or
	 * {@link getPlatformType} instead.
	 */
	public static isBrowser(): boolean {
		return this._isBrowser;
	}

	/**
	 * Returns whether the host runtime is Cocos Creator (detected
	 * via the `cc.sys` global).
	 */
	public static isCocosCreator(): boolean {
		return this._isCocosCreator;
	}

	/**
	 * Returns whether the host runtime is Node.js (or any other
	 * environment that exposes neither `window` nor `cc.sys`).
	 */
	public static isNodeJS(): boolean {
		return this._platformType === "nodejs";
	}

	/**
	 * Returns the cached {@link PlatformType} discriminator.
	 *
	 * Useful for `switch` statements that need to handle the three
	 * runtimes distinctly — see {@link StorageService.getString}
	 * for the canonical example.
	 */
	public static getPlatformType(): PlatformType {
		return this._platformType;
	}
}
