/**
 * StorageService - Cross-platform storage abstraction for GearN SDK
 * Supports: Browser localStorage, Node.js, Cocos Creator 3.x
 */

import store from "store";
import { GNSupport } from "./GNSupport";

// Types from ../types/cocos.d.ts are automatically available

export class StorageService {

	/**
	 * Get a value from storage
	 * @param key Storage key
	 * @param defaultValue Default value if key doesn't exist
	 */
	static getString(key: string, defaultValue: string = ""): any {
		try {
            const _platform = GNSupport.getPlatformType();

			let value: string | null = null;

			switch (_platform) {
				case "cocos":
					value = cc.sys!.localStorage!.getItem(key);
					break;
				case "browser":
					value = window.localStorage.getItem(key);
					break;
				case "nodejs":
					return store.get(key, defaultValue);
			}

			if (value === null || value === undefined) {
				return defaultValue;
			}

			return value;
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
	static setString(key: string, value: string): void {
		try {
            const _platform = GNSupport.getPlatformType();

			switch (_platform) {
				case "cocos":
					cc.sys!.localStorage!.setItem(key, value);
					break;
				case "browser":
					window.localStorage.setItem(key, value);
					break;
				case "nodejs":
					store.set(key, value);
					break;
			}
		} catch (error) {
			console.warn("[StorageService] Error setting value for key:", key, error);
		}
	}
}
