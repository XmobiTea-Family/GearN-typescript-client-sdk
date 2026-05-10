
import store from "store";
import { GNSupport } from "./GNSupport";

// Types from ../types/cocos.d.ts are automatically available

/**
 * Cross-platform key/value persistence used by the SDK.
 *
 * Used by:
 * - {@link GNNetwork.init} to hydrate the cached
 *   {@link AuthenticateStatus} from `[GearN]_AUTH_TOKEN_KEY` and
 *   `[GearN]_USER_ID_KEY` so a process restart resumes the
 *   previous session.
 * - {@link PeerBase.onResponseHandler} to mirror a fresh auth
 *   token / user id onto disk every time a successful response
 *   carries the matching parameters.
 *
 * Backend selection follows {@link GNSupport.getPlatformType}:
 * - **`"cocos"`**: `cc.sys.localStorage` (Cocos Creator's own
 *   wrapper around the platform storage).
 * - **`"browser"`**: `window.localStorage`.
 * - **`"nodejs"`**: the `store` npm package, which picks the best
 *   available backend (file system, SQLite, ...).
 *
 * Failure handling: every method runs inside `try/catch` and logs
 * via `console.warn` on failure rather than throwing, because
 * storage failures (quota exceeded, permissions denied, missing
 * primitives in old Cocos builds) should not crash the SDK
 * bootstrap path.
 */
export class StorageService {

    /**
     * Reads a previously persisted string.
     *
     * @param key          Storage key (e.g.
     *                     `GNNetwork.AUTH_TOKEN_KEY`).
     * @param defaultValue Value returned when the key is absent or
     *                     storage access throws. Defaults to `""`
     *                     so callers can use the result without a
     *                     null check.
     * @returns            Stored value, or `defaultValue` when the
     *                     key is missing / storage fails.
     *
     * Implementation note: the return type is `any` because the
     * Node.js path delegates to the `store` package's typed
     * accessor which already handles the default value internally.
     * Treat the result as `string` at call sites.
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
     * Persists a string under `key`.
     *
     * Storage failures are swallowed and logged via `console.warn`
     * — most call sites ({@link PeerBase.onResponseHandler}) want
     * the SDK to keep working even when persistence is denied
     * (private-mode browsers, full disk on Cocos device builds).
     *
     * @param key   Storage key.
     * @param value Value to persist. Pass `""` to clear the slot
     *              (the SDK uses this when explicitly logging out).
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
