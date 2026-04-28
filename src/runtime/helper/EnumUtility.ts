/**
 * Generic helper for parsing and formatting TypeScript enums.
 *
 * Background: TypeScript compiles a numeric enum into an object that
 * carries **both** the forward (`name → value`) and the reverse
 * (`value → name`) mappings. The reverse-mapping entries make
 * `Object.keys(MyEnum)` noisy when the caller only wants the human
 * readable member names. This utility centralises the
 * `isNaN(Number(key))` filter so call sites can ignore the
 * implementation detail, and it caches the filtered key list per
 * enum type for repeated lookups.
 *
 * Used by debug log tooling and by application code that needs to
 * convert between an enum value and its display name (e.g. the
 * `getCodeName` helpers in {@link CodeHelper}).
 */
export class EnumUtility {
	/**
	 * Per-enum cache of human-readable member names. The cache key
	 * is the enum object itself (not its name), so two distinct
	 * enums sharing the same numeric values still get independent
	 * entries.
	 */
	private static enumKeyCache: Map<object, string[]> = new Map();

	/**
	 * Returns the cached list of human-readable member names for
	 * `enumType`, building the list on first access.
	 *
	 * Filters out the numeric reverse-mapping keys produced by
	 * `Object.keys` on a numeric enum. Caching avoids re-filtering
	 * on every call.
	 */
	private static getEnumKeys(enumType: object): string[] {
		let keys = this.enumKeyCache.get(enumType);
		if (!keys) {
			keys = Object.keys(enumType).filter(key => isNaN(Number(key)));
			this.enumKeyCache.set(enumType, keys);
		}
		return keys;
	}

	/**
	 * Resolves a string member name to the matching enum value.
	 *
	 * Two lookup paths:
	 * - **Case-sensitive** (default): a direct property lookup with
	 *   the `value in enumType` guard so unknown names cleanly
	 *   return `null`.
	 * - **Case-insensitive**: walk the cached member-name list
	 *   uppercase-comparing against the input. Slower but tolerant
	 *   to mixed-case input from external sources (URLs, config
	 *   files).
	 *
	 * @param enumType   Enum object (e.g. `MyEnum`). The signature
	 *                   `Record<string, number | string>` covers
	 *                   both numeric and string enums.
	 * @param value      Display name to resolve.
	 * @param ignoreCase Set to `true` to allow mixed-case input.
	 *                   Defaults to `false` (case-sensitive).
	 * @returns          The enum value, or `null` when the name is
	 *                   unknown.
	 */
	public static parse<T extends Record<string, number | string>>(enumType: T, value: string, ignoreCase?: boolean): T[keyof T] {
		if (!ignoreCase) {
			if (value in enumType) {
				return enumType[value as keyof T];
			}
		}
		else {
			let normalizedValue = value.toUpperCase();
			let enumKeys = this.getEnumKeys(enumType);

			for (const key of enumKeys) {
				if (key.toUpperCase() === normalizedValue) {
					return enumType[key as keyof T];
				}
			}
		}

		return null;
	}

	/**
	 * Returns the human-readable name corresponding to `value`.
	 *
	 * Walks the cached member list and finds the first entry whose
	 * value matches. For numeric enums this is essentially a
	 * convenient wrapper around the enum's reverse mapping — the
	 * helper exists so the same call site works against string
	 * enums too (which do **not** have reverse mappings).
	 *
	 * @returns The member name, or `null` when no member maps to
	 *          `value`.
	 */
	public static toString<T extends Record<string, number | string>>(enumType: T, value: T[keyof T]): string {
		let enumKeys = this.getEnumKeys(enumType);

		const key = enumKeys.find(k => enumType[k as keyof T] === value);
		return key ?? null;
	}

}
