/**
 * Provides helper methods for parsing and formatting enum values.
 */
export class EnumUtility {
	private static enumKeyCache: Map<object, string[]> = new Map();

	/**
	 * Returns cached enum member names without numeric reverse-mapping keys.
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
	 * Parses a string into an enum value, optionally ignoring case.
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
	 * Returns the enum member name for the provided value.
	 */
	public static toString<T extends Record<string, number | string>>(enumType: T, value: T[keyof T]): string {
		let enumKeys = this.getEnumKeys(enumType);

		const key = enumKeys.find(k => enumType[k as keyof T] === value);
		return key ?? null;
	}

}
