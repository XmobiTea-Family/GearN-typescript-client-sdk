type GNDataType = string | number | boolean | null | GNArray | GNHashtable;

interface IGNData {
	clear(): void;
	remove(k: string | number): boolean;
	count(): string | number;

	getObject(k: string | number, def?: object): object;
	getBoolean(k: string | number, def?: boolean): boolean;
	getString(k: string | number, def?: string): string;
	getNumber(k: string | number, def?: number): number;
	getGNHashtable(k: string | number, def?: GNHashtable): GNHashtable;
	getGNArray(k: string | number, def?: GNArray): GNArray;
}

/**
 * Provides the abstract base API shared by GNHashtable and GNArray.
 */
export abstract class GNData implements IGNData {
	/**
	 * Returns the stored value for the given key or index.
	 * Concrete containers override this method with the correct lookup logic.
	 */
	protected get<T>(k: string | number, def?: T): T {
		return def;
	}

	/** Clears every stored value from the container. */
	public abstract clear(): void;
	/** Removes the given key or index from the container. */
	public abstract remove(k: string | number): boolean;
	/** Returns the current number of stored entries. */
	public abstract count(): string | number;

	/** Returns the stored value cast as a boolean. */
	public getBoolean(k: string | number, def?: boolean): boolean {
		return this.get(k, def);
	}

	/** Returns the stored value cast as an object. */
	public getObject(k: string | number, def?: object): object {
		return this.get(k, def);
	}

	/** Returns the stored value cast as a string. */
	public getString(k: string | number, def?: string): string {
		return this.get(k, def);
	}

	/** Returns the stored value cast as a number. */
	public getNumber(k: string | number, def?: number): number {
		return this.get(k, def);
	}

	/** Returns the stored value cast as a GNHashtable. */
	public getGNHashtable(k: string | number, def?: GNHashtable): GNHashtable {
		return this.get(k, def);
	}

	/** Returns the stored value cast as a GNArray. */
	public getGNArray(k: string | number, def?: GNArray): GNArray {
		return this.get(k, def);
	}

	/**
	 * Wraps a plain object into a GNHashtable so nested data uses the same container API.
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
	 * Wraps a plain array into a GNArray so nested data uses the same container API.
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
	 * Converts raw JavaScript data into the GearN container representation.
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
	 * Converts the GearN container representation back into plain JavaScript data.
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

	/** Converts the current container into raw JavaScript data. */
	public abstract toData(): any;
}

/**
 * Builds GNHashtable instances through a fluent API.
 */
export class GNHashtableBuilder {
	private dict: { [k: string]: any } = {};

	/** Adds a key-value pair to the builder. */
	public add(k: string, value: any): GNHashtableBuilder {
		this.dict[k] = value;

		return this;
	}

	/** Adds every key-value pair from the provided object to the builder. */
	public addAll(dict: { [k: string]: any }) {
		let keys = Object.keys(dict);
		keys.forEach(keyStr => {
			this.add(keyStr, dict[keyStr]);
		});

		return this;
	}

	/** Creates an empty builder instance. */
	constructor() {
		this.dict = {};
	}

	/** Builds a GNHashtable from the accumulated entries. */
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
 * Stores key-value data using the GearN container rules.
 */
export class GNHashtable extends GNData {
	private dict: { [k: string]: GNDataType } = {};

	/** Clears all entries. */
	public override clear(): void {
		this.dict = {};
	}

	/** Removes the given key when it exists. */
	public override remove(k: string): boolean {
		if (this.containsKey(k)) {
			delete this.dict[k];
			return true;
		}

		return false;
	}

	/** Returns the number of stored keys. */
	public override count(): number {
		return Object.keys(this.dict).length;
	}

	/** Returns whether the given key is present. */
	public containsKey(k: string): boolean {
		return this.dict.hasOwnProperty(k);
	}

	/** Returns the stored value for the given key. */
	protected override get<T>(k: string, def?: T): T {
		let value = this.dict[k];

		if (value == null) return def;
		return <T>(value as any);
	}

	/** Stores a value after converting nested objects and arrays into GearN containers. */
	public add(k: string, value: any) {
		this.dict[k] = GNData.createUseDataFromOriginData(value);
	}

	/** Converts the hash table back into a plain JavaScript object. */
	public override toData(): {} {
		let anwser: { [k: string]: any } = {};

		let keys = Object.keys(this.dict);
		for (let i = 0; i < keys.length; i++) {
			let key = keys[i];
			anwser[key] = GNData.createDataFromUseData(this.dict[key]);
		}

		return anwser;
	}

	/** Returns a fluent builder for GNHashtable. */
	public static builder(): GNHashtableBuilder {
		return new GNHashtableBuilder();
	}

	/** Returns a JSON string useful for debugging. */
	public toString(): string {
		return JSON.stringify(this.dict);
	}
}

/**
 * Builds GNArray instances through a fluent API.
 */
export class GNArrayBuilder {
	private array: Array<any> = [];

	/** Adds a value to the builder. */
	public add(value: any): GNArrayBuilder {
		this.array.push(value);

		return this;
	}

	/** Adds every value from the provided array to the builder. */
	public addAll(array: any[]): GNArrayBuilder {
		array.forEach(o => {
			this.add(o);
		});

		return this;
	}

	/** Builds a GNArray from the accumulated values. */
	public build(): GNArray {
		let answer = new GNArray();

		this.array.forEach(o => {
			answer.add(o);
		});

		return answer;
	}

	/** Creates an empty builder instance. */
	constructor() {
		this.array = [];
	}
}

/**
 * Stores ordered values using the GearN container rules.
 */
export class GNArray extends GNData {
	private array: Array<GNDataType> = [];

	/** Clears all values. */
	public override clear(): void {
		this.array = [];
	}

	/** Removes the given index when it is in range. */
	public override remove(k: number): boolean {
		if (k < 0 || k >= this.array.length) return false;

		this.array.splice(k, 1);
		return true;
	}

	/** Returns the number of stored items. */
	public override count(): number {
		return this.array.length;
	}

	/** Returns the stored value for the given index. */
	protected override get<T>(k: number, def?: T): T {
		if (k < 0 || k >= this.array.length) return null;

		let value = this.array[k];

		if (value == null) return def;
		return <T>(value as any);
	}

	/** Stores a value after converting nested objects and arrays into GearN containers. */
	public add(value: any) {
		this.array.push(GNData.createUseDataFromOriginData(value));
	}

	/** Converts the array back into a plain JavaScript array. */
	public override toData(): any[] {
		let anwser = [];

		for (let i = 0; i < this.array.length; i++) {
			anwser.push(GNData.createDataFromUseData(this.array[i]));
		}

		return anwser;
	}

	/** Returns a fluent builder for GNArray. */
	public static builder(): GNArrayBuilder {
		return new GNArrayBuilder();
	}

	/** Returns a JSON string useful for debugging. */
	public toString(): string {
		return JSON.stringify(this.array);
	}
}