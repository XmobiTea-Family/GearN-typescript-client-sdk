/**
 * Discriminated union of every value the GearN containers accept.
 *
 * `GNHashtable` and `GNArray` only ever store one of these shapes
 * internally. Plain JavaScript objects and arrays handed to
 * {@link GNHashtable.add} / {@link GNArray.add} are wrapped into the
 * corresponding container by
 * {@link GNData.createUseDataFromOriginData} before they are stored.
 * Keeping the union narrow lets the serializer in
 * {@link MessagePackConverterService} branch on a small, well-known
 * set of types.
 */
type GNDataType = string | number | boolean | null | GNArray | GNHashtable;

/**
 * Common container contract shared by {@link GNHashtable} (string keys)
 * and {@link GNArray} (numeric indexes).
 *
 * The two implementations differ only in their storage shape — both
 * expose the same lookup, mutation and inspection methods. This
 * interface exists so generic code (the SDK transports, the model
 * (de)serialiser) can accept either container without branching.
 */
interface IGNData {
	/** Removes every entry from the container. */
	clear(): void;
	/**
	 * Removes the entry at the given key (hash table) or index (array).
	 *
	 * @returns `true` when an entry was removed, `false` when the key
	 *          / index did not exist.
	 */
	remove(k: string | number): boolean;
	/** Returns the current number of stored entries. */
	count(): string | number;

	/** Reads the entry as an opaque object reference. */
	getObject(k: string | number, def?: object): object;
	/** Reads the entry as a boolean. */
	getBoolean(k: string | number, def?: boolean): boolean;
	/** Reads the entry as a string. */
	getString(k: string | number, def?: string): string;
	/** Reads the entry as a number. */
	getNumber(k: string | number, def?: number): number;
	/** Reads the entry as a {@link GNHashtable}. */
	getGNHashtable(k: string | number, def?: GNHashtable): GNHashtable;
	/** Reads the entry as a {@link GNArray}. */
	getGNArray(k: string | number, def?: GNArray): GNArray;
}

/**
 * Abstract base class for the GearN data containers.
 *
 * Concrete subclasses ({@link GNHashtable}, {@link GNArray}) provide
 * the storage shape; this base class supplies:
 * - the typed `get*` accessors that delegate to the abstract
 *   {@link get} hook;
 * - the conversion bridge between plain JavaScript values and the
 *   internal {@link GNDataType} representation
 *   ({@link createUseDataFromOriginData},
 *   {@link createDataFromUseData});
 * - the abstract `clear`, `remove`, `count`, `toData` contract every
 *   container must implement.
 *
 * Why the indirection: the SDK accepts both bare JavaScript objects /
 * arrays and `GNHashtable` / `GNArray` instances at every public API
 * surface. By normalising everything to the `GN*` containers as soon
 * as a value is stored, the rest of the SDK (serialisers,
 * transports, network layer) only ever has to deal with the `GN*`
 * shape.
 */
export abstract class GNData implements IGNData {
	/**
	 * Reads the raw stored value at `k`.
	 *
	 * Implemented by each concrete container with the appropriate
	 * lookup logic (string-keyed map for {@link GNHashtable},
	 * indexed array for {@link GNArray}). Returns `def` when the
	 * lookup misses so the typed `get*` helpers below can stay
	 * branchless.
	 *
	 * @param k    Key (string for hash table) or index (number for
	 *             array).
	 * @param def  Fallback value returned when the entry is missing
	 *             or `null`.
	 * @returns The stored value cast to `T`, or `def` when not found.
	 */
	protected get<T>(k: string | number, def?: T): T {
		return def;
	}

	/** Removes every entry from the container. */
	public abstract clear(): void;
	/**
	 * Removes the entry at `k`.
	 *
	 * @returns `true` when an entry was removed, `false` when the key
	 *          / index did not exist.
	 */
	public abstract remove(k: string | number): boolean;
	/** Returns the current number of stored entries. */
	public abstract count(): string | number;

	/**
	 * Reads the entry at `k` as a boolean.
	 *
	 * @param k    Key or index.
	 * @param def  Returned when the entry is missing or `null`.
	 * @returns The stored boolean, or `def` when not found. The value
	 *          is **not** coerced — if the entry actually holds a
	 *          number or string the cast performs no validation.
	 */
	public getBoolean(k: string | number, def?: boolean): boolean {
		return this.get(k, def);
	}

	/**
	 * Reads the entry at `k` as an opaque object reference.
	 *
	 * Use this when you only care about presence / identity of the
	 * stored value — for typed access prefer {@link getGNHashtable}
	 * or {@link getGNArray}.
	 *
	 * @param k    Key or index.
	 * @param def  Returned when the entry is missing or `null`.
	 */
	public getObject(k: string | number, def?: object): object {
		return this.get(k, def);
	}

	/**
	 * Reads the entry at `k` as a string.
	 *
	 * @param k    Key or index.
	 * @param def  Returned when the entry is missing or `null`.
	 */
	public getString(k: string | number, def?: string): string {
		return this.get(k, def);
	}

	/**
	 * Reads the entry at `k` as a number.
	 *
	 * @param k    Key or index.
	 * @param def  Returned when the entry is missing or `null`.
	 */
	public getNumber(k: string | number, def?: number): number {
		return this.get(k, def);
	}

	/**
	 * Reads the entry at `k` as a nested {@link GNHashtable}.
	 *
	 * @param k    Key or index.
	 * @param def  Returned when the entry is missing or `null`.
	 */
	public getGNHashtable(k: string | number, def?: GNHashtable): GNHashtable {
		return this.get(k, def);
	}

	/**
	 * Reads the entry at `k` as a nested {@link GNArray}.
	 *
	 * @param k    Key or index.
	 * @param def  Returned when the entry is missing or `null`.
	 */
	public getGNArray(k: string | number, def?: GNArray): GNArray {
		return this.get(k, def);
	}

	/**
	 * Wraps a plain JavaScript object as a {@link GNHashtable}.
	 *
	 * Iterates `Object.keys(value)` (own enumerable string keys) and
	 * recursively normalises each value through
	 * {@link createUseDataFromOriginData}. Symbol keys, non-enumerable
	 * properties and prototype-chain entries are ignored — the
	 * GearN wire format only supports plain string-keyed objects.
	 */
	private static createGNHashtableFromObject(value: any): GNHashtable {
		let answer = new GNHashtable();

		let valueKeys = Object.keys(value);
		for (let i = 0; i < valueKeys.length; i++) {
			let key = valueKeys[i];
			answer.add(key, value[key]);
		}

		return answer;
	}

	/**
	 * Wraps a plain JavaScript array as a {@link GNArray}.
	 *
	 * Iterates the indexed slots in order and normalises each entry
	 * through {@link createUseDataFromOriginData}. Sparse arrays are
	 * compacted because the loop iterates by index.
	 */
	private static createGNArrayFromArray(value: any): GNArray {
		let answer = new GNArray();

		let valueArr = <Array<any>>value;
		for (let i = 0; i < valueArr.length; i++) {
			answer.add(valueArr[i]);
		}

		return answer;
	}

	/**
	 * Normalises a raw JavaScript value into the GearN container
	 * representation.
	 *
	 * Mapping rules:
	 * - `null` / `undefined` → `null`.
	 * - `string` / `number` / `boolean` → returned unchanged.
	 * - Existing `GNArray` / `GNHashtable` instance → returned unchanged.
	 * - Plain `Array` → recursively wrapped as `GNArray`.
	 * - Any other `object` → recursively wrapped as `GNHashtable`.
	 * - Anything else (e.g. `function`, `symbol`) → `null`.
	 *
	 * Used internally by every container `add(...)` call so the
	 * stored representation is always one of the {@link GNDataType}
	 * union members.
	 */
	protected static createUseDataFromOriginData(value: any): GNDataType {
		if (value == null) return null;

		let typeOfValue = typeof value;

		if (typeOfValue === "string") return value as string;

		if (typeOfValue === "number") return value as number;

		if (typeOfValue === "boolean") return value as boolean;

		if (value instanceof GNArray) return value;

		if (value instanceof GNHashtable) return value;

		if (typeOfValue === "object") {
			if (Array.isArray(value)) return this.createGNArrayFromArray(value);
			else return this.createGNHashtableFromObject(value);
		}

		return null;
	}

	/**
	 * Reverse of {@link createUseDataFromOriginData} — unwraps a
	 * stored container value back into plain JavaScript data so it
	 * can be handed to a non-GearN consumer (`JSON.stringify`,
	 * MsgPack codec, application code).
	 *
	 * Mapping rules:
	 * - `null` → `null`.
	 * - {@link GNArray} → plain array via `toData()`.
	 * - {@link GNHashtable} → plain object via `toData()`.
	 * - Primitive → returned unchanged.
	 */
	protected static createDataFromUseData(value: GNDataType): any {
		if (value == null) return null;

		if (value instanceof GNArray) {
			return (<GNArray>value).toData();
		}

		if (value instanceof GNHashtable) {
			return (<GNHashtable>value).toData();
		}

		return value;
	}

	/**
	 * Returns a plain JavaScript representation of the container.
	 *
	 * Concrete subclasses implement this by walking their stored
	 * entries and calling {@link createDataFromUseData} on each. The
	 * result is safe to feed to `JSON.stringify` or to the
	 * MessagePack encoder.
	 */
	public abstract toData(): any;
}

/**
 * Fluent builder for {@link GNHashtable}.
 *
 * Lets caller code accumulate key/value pairs in a chainable form and
 * materialise the resulting hash table in a single call:
 *
 * ```ts
 * const params = GNHashtable.builder()
 *     .add("username", "alice")
 *     .add("password", "p@ssword")
 *     .build();
 * ```
 *
 * The builder stores raw values; conversion through
 * {@link GNData.createUseDataFromOriginData} happens during
 * {@link build} when entries are pushed into the new
 * {@link GNHashtable}.
 */
export class GNHashtableBuilder {
	private dict: { [k: string]: any } = {};

	/**
	 * Stores `value` under `k`, replacing any previous value at the
	 * same key.
	 *
	 * @returns The same builder instance for chaining.
	 */
	public add(k: string, value: any): GNHashtableBuilder {
		this.dict[k] = value;

		return this;
	}

	/**
	 * Copies every own-enumerable string key from `dict` into the
	 * builder. Equivalent to looping over the dictionary and calling
	 * {@link add} for each entry.
	 *
	 * @param dict Source object. Symbol keys, non-enumerable
	 *             properties and prototype entries are ignored.
	 * @returns The same builder instance for chaining.
	 */
	public addAll(dict: { [k: string]: any }) {
		let keys = Object.keys(dict);
		keys.forEach(keyStr => {
			this.add(keyStr, dict[keyStr]);
		});

		return this;
	}

	/**
	 * Creates an empty builder. Prefer the static factory
	 * {@link GNHashtable.builder} from caller code.
	 */
	constructor() {
		this.dict = {};
	}

	/**
	 * Materialises a fresh {@link GNHashtable} that contains every
	 * accumulated entry.
	 *
	 * The builder remains usable after `build()` — calling it twice
	 * yields two independent hash tables seeded from the same data.
	 */
	public build(): GNHashtable {
		let answer = new GNHashtable();

		let keys = Object.keys(this.dict);
		keys.forEach(keyStr => {
			answer.add(keyStr, this.dict[keyStr]);
		});

		return answer;
	}

}

/**
 * String-keyed container used as the canonical "object-shaped" payload
 * inside the GearN SDK.
 *
 * Every request payload, every response parameter bag and every nested
 * model field that is decoded as `GNHashtable` flows through this
 * class. It mirrors the .NET `Hashtable` API of the original GearN
 * client SDK so cross-platform documentation stays consistent.
 *
 * Storage shape: a plain `{ [k: string]: GNDataType }` dictionary.
 * Iteration order matches `Object.keys(...)` (insertion order for
 * string keys, per the ES2015 spec).
 */
export class GNHashtable extends GNData {
	private dict: { [k: string]: GNDataType } = {};

	/** Removes every key from the hash table. */
	public override clear(): void {
		this.dict = {};
	}

	/**
	 * Removes the entry stored under `k`.
	 *
	 * @returns `true` when a value was removed, `false` when the
	 *          key was absent.
	 */
	public override remove(k: string): boolean {
		if (this.containsKey(k)) {
			delete this.dict[k];
			return true;
		}

		return false;
	}

	/** Returns the current number of stored keys. */
	public override count(): number {
		return Object.keys(this.dict).length;
	}

	/**
	 * Returns whether `k` is currently present.
	 *
	 * Uses `hasOwnProperty` to avoid false positives from
	 * inherited prototype properties.
	 */
	public containsKey(k: string): boolean {
		return this.dict.hasOwnProperty(k);
	}

	/**
	 * Returns the stored value at `k` cast to `T`, or `def` when the
	 * key is missing / the stored value is `null`.
	 */
	protected override get<T>(k: string, def?: T): T {
		let value = this.dict[k];

		if (value == null) return def;
		return <T>(value as any);
	}

	/**
	 * Stores `value` under `k`.
	 *
	 * The value is normalised through
	 * {@link GNData.createUseDataFromOriginData} before being stored,
	 * so plain objects become nested `GNHashtable` instances and
	 * plain arrays become nested {@link GNArray} instances.
	 */
	public add(k: string, value: any) {
		this.dict[k] = GNData.createUseDataFromOriginData(value);
	}

	/**
	 * Returns a plain `{ [k: string]: any }` representation of the
	 * hash table, recursively unwrapping nested containers.
	 *
	 * Useful when the value is about to be handed to a non-GearN
	 * consumer such as `JSON.stringify` or the MessagePack codec.
	 */
	public override toData(): {} {
		let anwser: { [k: string]: any } = {};

		let keys = Object.keys(this.dict);
		for (let i = 0; i < keys.length; i++) {
			let key = keys[i];
			anwser[key] = GNData.createDataFromUseData(this.dict[key]);
		}

		return anwser;
	}

	/**
	 * Returns a fluent {@link GNHashtableBuilder} pre-bound to a
	 * fresh empty backing dictionary.
	 *
	 * Equivalent to `new GNHashtableBuilder()` but reads more
	 * naturally at the call site:
	 *
	 * ```ts
	 * GNHashtable.builder().add("k", 1).build();
	 * ```
	 */
	public static builder(): GNHashtableBuilder {
		return new GNHashtableBuilder();
	}

	/**
	 * Returns a JSON dump of the underlying dictionary.
	 *
	 * Intended for log lines (`GNDebug.log`) and unit-test
	 * assertions, not for wire serialisation. Nested containers are
	 * serialised by their own `toString` / `toJSON` machinery, which
	 * for `GNHashtable` recurses back into this method.
	 */
	public toString(): string {
		return JSON.stringify(this.dict);
	}
}

/**
 * Fluent builder for {@link GNArray}.
 *
 * Lets caller code accumulate values in a chainable form and
 * materialise the resulting array in a single `build()` call:
 *
 * ```ts
 * const arr = GNArray.builder().add(1).add(2).addAll([3, 4]).build();
 * ```
 */
export class GNArrayBuilder {
	private array: Array<any> = [];

	/**
	 * Appends `value` to the builder.
	 *
	 * @returns The same builder instance for chaining.
	 */
	public add(value: any): GNArrayBuilder {
		this.array.push(value);

		return this;
	}

	/**
	 * Appends every entry from `array` in order.
	 *
	 * @param array Source values. Each entry is forwarded through
	 *              {@link add}.
	 * @returns The same builder instance for chaining.
	 */
	public addAll(array: any[]): GNArrayBuilder {
		array.forEach(o => {
			this.add(o);
		});

		return this;
	}

	/**
	 * Materialises a fresh {@link GNArray} that contains every
	 * accumulated value.
	 *
	 * The builder remains usable after `build()` — calling it twice
	 * yields two independent arrays seeded from the same data.
	 */
	public build(): GNArray {
		let answer = new GNArray();

		this.array.forEach(o => {
			answer.add(o);
		});

		return answer;
	}

	/**
	 * Creates an empty builder. Prefer the static factory
	 * {@link GNArray.builder} from caller code.
	 */
	constructor() {
		this.array = [];
	}
}

/**
 * Numerically-indexed container used as the canonical "array-shaped"
 * payload inside the GearN SDK.
 *
 * Mirrors the .NET `ArrayList` API of the original client SDK and is
 * the wire-level representation for any field decorated with
 * {@link GNArrayDataMember} or returned by the backend as a list.
 *
 * Storage shape: a plain `Array<GNDataType>` honouring its declared
 * iteration order.
 */
export class GNArray extends GNData {
	private array: Array<GNDataType> = [];

	/** Removes every value from the array. */
	public override clear(): void {
		this.array = [];
	}

	/**
	 * Removes the value at index `k` and shifts the tail forward by
	 * one position.
	 *
	 * @returns `true` when an entry was removed, `false` when the
	 *          index was out of range.
	 */
	public override remove(k: number): boolean {
		if (k < 0 || k >= this.array.length) return false;

		this.array.splice(k, 1);
		return true;
	}

	/** Returns the number of stored values. */
	public override count(): number {
		return this.array.length;
	}

	/**
	 * Returns the value at index `k` cast to `T`, or `def` when the
	 * index is out of range or the slot is `null`.
	 *
	 * Out-of-range indexes return `null` instead of `def` because the
	 * caller's intent there is usually "treat as missing without
	 * fallback".
	 */
	protected override get<T>(k: number, def?: T): T {
		if (k < 0 || k >= this.array.length) return null;

		let value = this.array[k];

		if (value == null) return def;
		return <T>(value as any);
	}

	/**
	 * Appends `value` to the array.
	 *
	 * The value is normalised through
	 * {@link GNData.createUseDataFromOriginData} before being stored,
	 * so plain objects and arrays become nested containers.
	 */
	public add(value: any) {
		this.array.push(GNData.createUseDataFromOriginData(value));
	}

	/**
	 * Returns a plain `any[]` representation of the array,
	 * recursively unwrapping nested containers.
	 */
	public override toData(): any[] {
		let anwser = [];

		for (let i = 0; i < this.array.length; i++) {
			anwser.push(GNData.createDataFromUseData(this.array[i]));
		}

		return anwser;
	}

	/**
	 * Returns a fluent {@link GNArrayBuilder} pre-bound to a fresh
	 * empty backing array.
	 *
	 * Equivalent to `new GNArrayBuilder()` but reads more naturally
	 * at the call site.
	 */
	public static builder(): GNArrayBuilder {
		return new GNArrayBuilder();
	}

	/**
	 * Returns a JSON dump of the underlying array.
	 *
	 * Intended for log lines and unit-test assertions, not for wire
	 * serialisation.
	 */
	public toString(): string {
		return JSON.stringify(this.array);
	}
}
