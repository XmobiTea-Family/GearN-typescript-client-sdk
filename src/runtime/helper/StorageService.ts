/**
 * StorageService - Cross-platform storage abstraction for GearN SDK
 * Supports: Browser localStorage, Node.js, Cocos Creator 3.x
 */

// Types from ../types/cocos.d.ts are automatically available

type PlatformType = "cocos" | "browser" | "nodejs";

export class StorageService {
	private static _platform: PlatformType;
	private static _storage: Map<string, any> = new Map();
	private static _initialized: boolean = false;

	/**
	 * Initialize the storage service and detect platform
	 */
	static init(): void {
		if (this._initialized) return;

		this._platform = this.detectPlatform();
		this._initialized = true;
	}

	/**
	 * Detect the current platform
	 */
	private static detectPlatform(): PlatformType {
		// Check for Cocos Creator 3.x
		if (typeof cc !== "undefined" && cc.sys && cc.sys.localStorage) {
			return "cocos";
		}

		// Check for browser environment
		if (typeof window !== "undefined" && typeof window.localStorage !== "undefined") {
			return "browser";
		}

		// Default to Node.js (in-memory)
		return "nodejs";
	}

	/**
	 * Get the current platform type
	 */
	static getPlatform(): PlatformType {
		if (!this._initialized) this.init();
		return this._platform;
	}

	/**
	 * Check if running in Cocos Creator
	 */
	static isCocosCreator(): boolean {
		return this.getPlatform() === "cocos";
	}

	/**
	 * Get a value from storage
	 * @param key Storage key
	 * @param defaultValue Default value if key doesn't exist
	 */
	static get(key: string, defaultValue: any = ""): any {
		if (!this._initialized) this.init();

		try {
			let value: string | null = null;

			switch (this._platform) {
				case "cocos":
					value = cc.sys!.localStorage!.getItem(key);
					break;
				case "browser":
					value = window.localStorage.getItem(key);
					break;
				case "nodejs":
					return this._storage.has(key) ? this._storage.get(key) : defaultValue;
			}

			if (value === null || value === undefined) {
				return defaultValue;
			}

			// Try to parse JSON
			try {
				return JSON.parse(value);
			} catch {
				return value;
			}
		} catch (error) {
			console.warn("[StorageService] Error getting value for key:", key, error);
			return defaultValue;
		}
	}

	/**
	 * Set a value in storage
	 * @param key Storage key
	 * @param value Value to store
	 */
	static set(key: string, value: any): void {
		if (!this._initialized) this.init();

		try {
			const serialized = typeof value === "string" ? value : JSON.stringify(value);

			switch (this._platform) {
				case "cocos":
					cc.sys!.localStorage!.setItem(key, serialized);
					break;
				case "browser":
					window.localStorage.setItem(key, serialized);
					break;
				case "nodejs":
					this._storage.set(key, value);
					break;
			}
		} catch (error) {
			console.warn("[StorageService] Error setting value for key:", key, error);
		}
	}

	/**
	 * Remove a value from storage
	 * @param key Storage key
	 */
	static remove(key: string): void {
		if (!this._initialized) this.init();

		try {
			switch (this._platform) {
				case "cocos":
					cc.sys!.localStorage!.removeItem(key);
					break;
				case "browser":
					window.localStorage.removeItem(key);
					break;
				case "nodejs":
					this._storage.delete(key);
					break;
			}
		} catch (error) {
			console.warn("[StorageService] Error removing key:", key, error);
		}
	}

	/**
	 * Clear all storage
	 */
	static clear(): void {
		if (!this._initialized) this.init();

		try {
			switch (this._platform) {
				case "cocos":
					cc.sys!.localStorage!.clear();
					break;
				case "browser":
					window.localStorage.clear();
					break;
				case "nodejs":
					this._storage.clear();
					break;
			}
		} catch (error) {
			console.warn("[StorageService] Error clearing storage:", error);
		}
	}
}
