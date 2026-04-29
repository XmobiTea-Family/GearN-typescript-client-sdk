import "reflect-metadata";
import { GNArray, GNHashtable } from "./../common/GNData";
import { AbstractConstructor, Constructor, FieldDataType, GNObjectFieldMetadata, GNObjectMetadata } from "./GNMetadata";
// Thanks special for athongintel @clairejs/core

/**
 * Property key under which the GearN reflection blob is attached to a
 * model class prototype.
 *
 * The double-underscore convention together with the file-scoped
 * `@internal` annotation discourage application code from poking at
 * the metadata directly. Use the helper functions
 * {@link getGNObjectMetadata} and {@link setGNObjectMetadata} instead.
 *
 * @internal
 */
export const GN_METADATA = "__GN_METADATA__";

/**
 * Resolves the TypeScript-emitted `design:type` reflection metadata
 * for a single decorated property.
 *
 * Background: when `experimentalDecorators` and `emitDecoratorMetadata`
 * are both enabled, the TypeScript compiler emits a `design:type`
 * Reflect-metadata entry for each decorated property containing the
 * constructor function the field was declared with (`String`,
 * `Number`, `Boolean`, `Array`, ...). This helper reads that entry and
 * normalises it into the SDK's coarser {@link FieldDataType} bucket so
 * the (de)serialiser can branch on a small set of constants instead of
 * comparing constructor identities everywhere.
 *
 * @param prototype   Class prototype of the decorated model.
 * @param propertyKey Name of the decorated property.
 * @returns Pair of `(fieldDataType, prototype)` ready to be merged
 *          into the {@link GNObjectFieldMetadata} entry. The
 *          `prototype` field carries the constructor's prototype so
 *          the field metadata can later identify the concrete element
 *          class.
 *
 * @throws Error when no `design:type` metadata is available, which
 *         usually means `emitDecoratorMetadata` is disabled in
 *         tsconfig.json or the field's declared type is not statically
 *         known to the compiler.
 */
const getGNReflectedMetadata = (prototype: any, propertyKey: string): {
	fieldDataType: FieldDataType,
	prototype: any
} => {
	let t = Reflect.getMetadata("design:type", prototype, propertyKey);
	if (!t) {
		throw Error(
			`Cannot get gn reflected data type for ${prototype.constructor.name}:${propertyKey}`
		);
	}

	let answer: {
		fieldDataType: FieldDataType,
		prototype: any
	} = {
		fieldDataType: null,
		prototype: t.prototype
	}

	if (t.name == "Boolean")
		answer.fieldDataType = FieldDataType.Boolean;
	else if (t.name == "Number")
		answer.fieldDataType = FieldDataType.Number;
	else if (t.name == "String")
		answer.fieldDataType = FieldDataType.String;
	else if (t.name == "Array")
		answer.fieldDataType = FieldDataType.Array;
	else
		answer.fieldDataType = FieldDataType.Object;

	return answer;
};

/**
 * Lazily allocates the metadata blob for a class prototype, walking up
 * the prototype chain so subclasses inherit a deep-cloned `fields`
 * array from their parent class.
 *
 * Why the cloning: the reflection blob is mutable — every
 * `@*DataMember` decorator pushes a new entry into `fields` or
 * mutates an existing one. Without per-class cloning, decorating a
 * subclass field would alter the parent's metadata too, which would
 * break the (de)serialiser for any sibling subclass that depends on
 * the unmodified parent layout.
 *
 * Recursion termination: when the prototype is `Object.prototype` the
 * helper returns an empty placeholder. The first concrete prototype
 * that does not yet own `__GN_METADATA__` then seeds its own blob by
 * spreading the inherited one (`...superPrototype`) and shallow-cloning
 * each field entry.
 *
 * @param prototype  Class prototype to ensure metadata exists on.
 * @returns The metadata blob attached to (or freshly allocated for)
 *          `prototype`.
 *
 * @template T Concrete metadata interface (typically
 *             {@link GNEnhancedObjectMetadata}).
 */
export const initGNObjectMetadata = <T extends GNObjectMetadata>(prototype: any): T => {
	if (prototype === Object.prototype) {
		return {} as T;
	}
	if (!prototype.hasOwnProperty(GN_METADATA)) {
		const superPrototype = initGNObjectMetadata<T>(Object.getPrototypeOf(prototype));
		prototype[GN_METADATA] = {
			...superPrototype,
			id: getTableName(prototype.constructor),
			fields: superPrototype.fields ? superPrototype.fields.map((f) => ({ ...f })) : [],
		};
	}
	return prototype[GN_METADATA];
};

/**
 * Lazily allocates the per-field metadata entry for `propertyKey` on
 * `prototype`.
 *
 * Behaviour:
 * - If the property is decorated for the first time the helper reads
 *   the TypeScript reflection data via
 *   {@link getGNReflectedMetadata}, builds a fresh
 *   {@link GNObjectFieldMetadata} entry and pushes it into the parent
 *   metadata's `fields` array.
 * - If the property already has an entry (typical when multiple
 *   decorators are stacked on the same field) the existing entry is
 *   shallow-cloned so the caller can mutate the clone without
 *   affecting any inherited copy that might still be referenced by
 *   sibling subclasses.
 *
 * @param prototype    Class prototype that owns the property.
 * @param propertyKey  Decorated property name.
 * @returns The mutable field metadata entry that the decorator should
 *          continue populating with `code`, `isOptional`,
 *          `defaultValue`, etc.
 *
 * @template T Concrete enhanced field metadata
 *             ({@link GNEnhancedObjectFieldMetadata}).
 */
export const initGNObjectFieldMetadata = <T extends GNObjectFieldMetadata>(prototype: any, propertyKey: string): T => {
	let meta = initGNObjectMetadata<GNObjectMetadata>(prototype);

	let fieldIndex = meta.fields.findIndex((f) => f.name === propertyKey);
	if (fieldIndex < 0) {
		let gnReflectedMetadata = getGNReflectedMetadata(prototype, propertyKey);

		const field: GNObjectFieldMetadata = {
			name: propertyKey,
			// fieldType: getGNReflectedDataType(prototype, propertyKey),
			fieldType: gnReflectedMetadata.fieldDataType,
			cls: gnReflectedMetadata.prototype.constructor
		};

		meta.fields.push(field);
		return field as T;
	} else {
		//-- shadow clone the field
		const field = { ...meta.fields[fieldIndex] };
		meta.fields[fieldIndex] = field;
		return field as T;
	}
};

/**
 * Reads the GearN reflection blob attached to `obj`'s prototype.
 *
 * Returns `undefined` when the class has no decorated members yet, so
 * callers must null-check the result before iterating
 * `metadata.fields`.
 *
 * @param obj Class reference (concrete or abstract). Only the
 *            prototype is inspected — the function does not invoke
 *            `new`.
 *
 * @template T Expected metadata shape — usually
 *             {@link GNEnhancedObjectMetadata}.
 */
export const getGNObjectMetadata = <T extends GNObjectMetadata>(obj: AbstractConstructor<any>): T | undefined => {
	return obj.prototype[GN_METADATA];
};

/**
 * Replaces the GearN reflection blob attached to `obj`'s prototype.
 *
 * Intended for advanced testing scenarios where a synthesised metadata
 * blob is injected onto a class. Production code should rely on the
 * `@*DataMember` decorators to manage the blob automatically.
 *
 * @param obj      Class reference whose prototype receives the blob.
 * @param metadata Replacement metadata.
 */
export const setGNObjectMetadata = <T extends GNObjectMetadata>(obj: AbstractConstructor<any>, metadata: T): void => {
	obj.prototype[GN_METADATA] = metadata;
};

/**
 * Builds the default `id` value stored on a model's
 * {@link GNObjectMetadata}.
 *
 * Currently the lower-cased constructor name. Used solely for
 * diagnostic output — the (de)serialiser never reads the id.
 *
 * @returns The lower-cased class name, or `undefined` when `model` is
 *          itself nullish.
 */
export const getTableName = (model: Constructor<any>) => model?.name.toLowerCase();

/**
 * Field metadata enriched with the SDK-specific serialisation hints
 * supplied by the `@*DataMember` decorator family.
 *
 * Stored on the model prototype inside the `fields` array of
 * {@link GNEnhancedObjectMetadata}. The serializer in
 * {@link ConverterService} reads each field at runtime to map a
 * model property onto the corresponding wire-level
 * {@link ParameterCode} key.
 */
export interface GNEnhancedObjectFieldMetadata extends GNObjectFieldMetadata {
	/**
	 * Wire-level parameter key used when (de)serialising the field —
	 * typically a constant from {@link ParameterCode}.
	 */
	code: string;
	/**
	 * When `true`, a `null` value is allowed and is omitted from the
	 * outbound payload entirely. When `false`, a `null` value is
	 * still serialised (sent as JSON `null` / MsgPack nil) so the
	 * backend can distinguish "explicit clear" from "untouched".
	 */
	isOptional: boolean;
	/** Coarse value bucket used by the serializer's branching logic. */
	gnFieldType: GNFieldDataType;
	/**
	 * Value substituted in during deserialisation when the wire
	 * payload omits the field.
	 */
	defaultValue: any;

	/**
	 * Set to `true` by the decorator when at least one validation
	 * constraint (`mustNonNull`, `min*`, `max*`, `mustInt`) was
	 * supplied. Reserved for the upcoming client-side validation
	 * step — the runtime reads it but no enforcement code currently
	 * fires on it.
	 */
	activeConditionValid: boolean;

	/** String/Hashtable/Array constraint: forbid `null` values. */
	mustNonNull?: boolean;
	/**
	 * String/Hashtable/Array constraint: minimum allowed length
	 * (characters / keys / elements).
	 */
	minLength?: number;
	/** String/Hashtable/Array constraint: maximum allowed length. */
	maxLength?: number;
	/** Number constraint: minimum allowed value (inclusive). */
	minValue?: number;
	/** Number constraint: maximum allowed value (inclusive). */
	maxValue?: number;
	/** Number constraint: reject non-integer values. */
	mustInt?: boolean;
};

/**
 * Coarse runtime type bucket used by the GearN serializer.
 *
 * `Other` is the catch-all for fields decorated with the bare
 * `@DataMember` decorator (no specific shape declared). Numeric
 * ordinals are an internal detail and are never persisted to the
 * wire.
 */
export enum GNFieldDataType {
	/** Generic `@DataMember` — any value, no type-specific handling. */
	Other = 0,
	/** `@NumberDataMember` — numeric primitive. */
	Number = 1,
	/** `@StringDataMember` — string primitive. */
	String = 2,
	/** `@BooleanDataMember` — boolean primitive. */
	Boolean = 3,
	/** `@GNHashtableDataMember` — nested object. */
	GNHashtable = 4,
	/** `@GNArrayDataMember` — nested list. */
	GNArray = 5,

};

/**
 * Class-level metadata for a decorated GearN model.
 *
 * Specialises {@link GNObjectMetadata} so that the `fields` array
 * uses the enhanced per-field shape that the (de)serialiser actually
 * consumes.
 */
export interface GNEnhancedObjectMetadata extends GNObjectMetadata {
	/** Ordered list of decorated fields. */
	fields: GNEnhancedObjectFieldMetadata[];

};

/**
 * Common base shape shared by every `@*DataMember` decorator.
 */
interface DataMemberBaseArgs {
	/**
	 * Wire-level parameter key, normally a constant from
	 * {@link ParameterCode}. Required because the serializer uses it
	 * as the dictionary key on the outbound `GNHashtable`.
	 */
	code: string;
	/**
	 * Mark the field as optional so that a `null` value is dropped
	 * from the outbound payload instead of being serialised as JSON
	 * `null` / MsgPack nil. Defaults to `false`.
	 */
	isOptional?: boolean;
	/**
	 * Value injected into the model during deserialisation when the
	 * wire payload omits the field.
	 */
	defaultValue?: any;

};

/**
 * Argument shape for the generic {@link DataMember} decorator.
 */
interface DataMemberArgs extends DataMemberBaseArgs {
	/**
	 * Optional override for the coarse value bucket. Most callers
	 * leave this `undefined` so the decorator falls back to
	 * {@link GNFieldDataType.Other}; specialised decorators
	 * (`StringDataMember`, etc.) set it explicitly.
	 */
	gnFieldType?: GNFieldDataType;

};

/**
 * Convenience alias used by the type-specific decorator argument
 * shapes below — purely organisational, no extra fields.
 */
interface OtherDataMemberArgs extends DataMemberBaseArgs {

};

/**
 * Argument shape for {@link StringDataMember}.
 */
interface StringDataMemberArgs extends OtherDataMemberArgs {
	/** Default value injected when the field is missing on the wire. */
	defaultValue?: string;
	/** Reject `null` values. Activates client-side validation. */
	mustNonNull?: boolean;
	/** Minimum string length, inclusive. Defaults to `0` when unset. */
	minLength?: number;
	/**
	 * Maximum string length, inclusive. Defaults to `256` when
	 * unset and any constraint is supplied.
	 */
	maxLength?: number;

};

/**
 * Argument shape for {@link BooleanDataMember}.
 */
interface BooleanDataMemberArgs extends OtherDataMemberArgs {
	/** Default boolean value injected when the field is missing. */
	defaultValue?: boolean;

};

/**
 * Argument shape for {@link NumberDataMember}.
 */
interface NumberDataMemberArgs extends OtherDataMemberArgs {
	/** Default numeric value injected when the field is missing. */
	defaultValue?: number;
	/**
	 * Minimum numeric value, inclusive. Defaults to `-Infinity`
	 * when any constraint is supplied.
	 */
	minValue?: number;
	/**
	 * Maximum numeric value, inclusive. Defaults to `Infinity` when
	 * any constraint is supplied.
	 */
	maxValue?: number;
	/** Reject fractional values. Activates client-side validation. */
	mustInt?: boolean;

};

/**
 * Argument shape for {@link GNHashtableDataMember}.
 */
interface GNHashtableDataMemberArgs extends OtherDataMemberArgs {
	/** Default {@link GNHashtable} substituted when missing. */
	defaultValue?: GNHashtable;
	/** Reject `null` values. Activates client-side validation. */
	mustNonNull?: boolean;
	/** Minimum number of keys, inclusive. Defaults to `0` when unset. */
	minLength?: number;
	/** Maximum number of keys, inclusive. Defaults to `256` when unset. */
	maxLength?: number;
};

/**
 * Argument shape for {@link GNArrayDataMember}.
 */
interface GNArrayDataMemberArgs extends OtherDataMemberArgs {
	/** Default {@link GNArray} substituted when missing. */
	defaultValue?: GNArray;
	/** Reject `null` values. Activates client-side validation. */
	mustNonNull?: boolean;
	/** Minimum number of elements, inclusive. */
	minLength?: number;
	/** Maximum number of elements, inclusive. */
	maxLength?: number;
	/**
	 * Concrete element class. Required when the array contains typed
	 * model instances so the (de)serialiser knows which class to
	 * instantiate per element. For arrays of primitives pass the
	 * matching wrapper (`String`, `Number`, `Boolean`).
	 */
	elementCls?: new (...args: any[]) => any;
};

/**
 * Generic property decorator used for fields without a
 * type-specific shape.
 *
 * Falls back to {@link GNFieldDataType.Other} when the caller does
 * not pin `gnFieldType`. Validation cannot be activated through this
 * decorator — use the type-specific variants for that.
 *
 * @example
 * ```ts
 * class Item {
 *     @DataMember({ code: ParameterCode.Value })
 *     public value: any;
 * }
 * ```
 *
 * @param args Decorator arguments — see {@link DataMemberArgs}.
 */
export const DataMember = (args: DataMemberArgs) => (prototype: any, propertyKey: string) => {
	let field = initGNObjectFieldMetadata<GNEnhancedObjectFieldMetadata>(prototype, propertyKey);
	field.code = args.code;
	field.isOptional = args.isOptional == null ? false : args.isOptional;
	field.defaultValue = args.defaultValue;
	field.gnFieldType = args.gnFieldType == null ? GNFieldDataType.Other : args.gnFieldType;

	field.activeConditionValid = false;

};

/**
 * Property decorator for `string` fields.
 *
 * Activates client-side validation when at least one of `mustNonNull`,
 * `minLength` or `maxLength` is supplied. The activation also fills
 * in default values for the missing constraints (`mustNonNull = false`,
 * `minLength = 0`, `maxLength = 256`) so that the validation step has
 * a complete profile to work against.
 *
 * @example
 * ```ts
 * class Login {
 *     @StringDataMember({ code: ParameterCode.Username, minLength: 6, maxLength: 32, mustNonNull: true })
 *     public username: string;
 * }
 * ```
 *
 * @param args Decorator arguments — see {@link StringDataMemberArgs}.
 */
export const StringDataMember = (args: StringDataMemberArgs) => (prototype: any, propertyKey: string) => {
	let field = initGNObjectFieldMetadata<GNEnhancedObjectFieldMetadata>(prototype, propertyKey);
	field.code = args.code;
	field.isOptional = args.isOptional == null ? false : args.isOptional;
	field.defaultValue = args.defaultValue;
	field.gnFieldType = GNFieldDataType.String;

	if (args.mustNonNull != null || args.minLength != null || args.maxLength != null) {
		field.activeConditionValid = true;

		if (args.mustNonNull == null) {
			args.mustNonNull = false;
		}

		if (args.minLength == null) {
			args.minLength = 0;
		}

		if (args.maxLength == null) {
			args.maxLength = 256;
		}
	}

	field.mustNonNull = args.mustNonNull;
	field.minLength = args.minLength;
	field.maxLength = args.maxLength;

};

/**
 * Property decorator for `boolean` fields.
 *
 * Validation cannot be activated for booleans — the only knobs are
 * `code`, `isOptional` and `defaultValue`.
 *
 * @example
 * ```ts
 * class Param {
 *     @BooleanDataMember({ code: ParameterCode.External, isOptional: true, defaultValue: false })
 *     public external?: boolean;
 * }
 * ```
 *
 * @param args Decorator arguments — see {@link BooleanDataMemberArgs}.
 */
export const BooleanDataMember = (args: BooleanDataMemberArgs) => (prototype: any, propertyKey: string) => {
	let field = initGNObjectFieldMetadata<GNEnhancedObjectFieldMetadata>(prototype, propertyKey);
	field.code = args.code;
	field.isOptional = args.isOptional == null ? false : args.isOptional;
	field.defaultValue = args.defaultValue;
	field.gnFieldType = GNFieldDataType.Boolean;

	field.activeConditionValid = false;

};

/**
 * Property decorator for nested {@link GNHashtable}-shaped fields
 * (object instances).
 *
 * Activates client-side validation when at least one of
 * `mustNonNull`, `minLength` or `maxLength` is supplied. Default
 * activation values mirror those of {@link StringDataMember}
 * (`mustNonNull = false`, `minLength = 0`, `maxLength = 256`).
 *
 * @example
 * ```ts
 * class Login {
 *     @GNHashtableDataMember({ code: ParameterCode.InfoRequestParam, mustNonNull: true })
 *     public infoRequestParam: InfoRequestParam;
 * }
 * ```
 *
 * @param args Decorator arguments — see {@link GNHashtableDataMemberArgs}.
 */
export const GNHashtableDataMember = (args: GNHashtableDataMemberArgs) => (prototype: any, propertyKey: string) => {
	let field = initGNObjectFieldMetadata<GNEnhancedObjectFieldMetadata>(prototype, propertyKey);

	field.code = args.code;
	field.isOptional = args.isOptional == null ? false : args.isOptional;
	field.defaultValue = args.defaultValue;
	field.gnFieldType = GNFieldDataType.GNHashtable;

	if (args.mustNonNull != null || args.minLength != null || args.maxLength != null) {
		field.activeConditionValid = true;

		if (args.mustNonNull == null) {
			args.mustNonNull = false;
		}

		if (args.minLength == null) {
			args.minLength = 0;
		}

		if (args.maxLength == null) {
			args.maxLength = 256;
		}
	}

	field.mustNonNull = args.mustNonNull;
	field.minLength = args.minLength;
	field.maxLength = args.maxLength;

};

/**
 * Property decorator for nested {@link GNArray}-shaped fields
 * (lists / arrays).
 *
 * The `elementCls` argument is recorded as the field's `cls` so the
 * (de)serialiser knows which constructor to instantiate per element.
 * For arrays of primitives pass the matching wrapper (`String`,
 * `Number`, `Boolean`).
 *
 * Activates client-side validation when at least one of
 * `mustNonNull`, `minLength` or `maxLength` is supplied, with the
 * same default-fill behaviour as {@link StringDataMember}.
 *
 * @example
 * ```ts
 * class Param {
 *     @GNArrayDataMember({ code: ParameterCode.PlayerDataKeys, isOptional: true, elementCls: String })
 *     public playerDataKeys?: Array<string>;
 * }
 * ```
 *
 * @param args Decorator arguments — see {@link GNArrayDataMemberArgs}.
 */
export const GNArrayDataMember = (args: GNArrayDataMemberArgs) => (prototype: any, propertyKey: string) => {
	let field = initGNObjectFieldMetadata<GNEnhancedObjectFieldMetadata>(prototype, propertyKey);
	if (args.elementCls != null) field.cls = args.elementCls;

	field.code = args.code;
	field.isOptional = args.isOptional == null ? false : args.isOptional;
	field.defaultValue = args.defaultValue;
	field.gnFieldType = GNFieldDataType.GNArray;

	if (args.mustNonNull != null || args.minLength != null || args.maxLength != null) {
		field.activeConditionValid = true;

		if (args.mustNonNull == null) {
			args.mustNonNull = false;
		}

		if (args.minLength == null) {
			args.minLength = 0;
		}

		if (args.maxLength == null) {
			args.maxLength = 256;
		}
	}

	field.mustNonNull = args.mustNonNull;
	field.minLength = args.minLength;
	field.maxLength = args.maxLength;

};

/**
 * Property decorator for `number` fields.
 *
 * Activates client-side validation when at least one of `mustInt`,
 * `minValue` or `maxValue` is supplied. Default activation values
 * widen the bounds to `[-Infinity, +Infinity]` and disable the
 * integer constraint so the validation step never rejects a value
 * the caller did not explicitly opt in to.
 *
 * @example
 * ```ts
 * class Param {
 *     @NumberDataMember({ code: ParameterCode.Type, minValue: 1, maxValue: 2, mustInt: true })
 *     public type: number;
 * }
 * ```
 *
 * @param args Decorator arguments — see {@link NumberDataMemberArgs}.
 */
export const NumberDataMember = (args: NumberDataMemberArgs) => (prototype: any, propertyKey: string) => {
	let field = initGNObjectFieldMetadata<GNEnhancedObjectFieldMetadata>(prototype, propertyKey);
	field.code = args.code;
	field.isOptional = args.isOptional == null ? false : args.isOptional;
	field.defaultValue = args.defaultValue;
	field.gnFieldType = GNFieldDataType.Number;

	if (args.mustInt != null || args.minValue != null || args.maxValue != null) {
		field.activeConditionValid = true;

		if (args.mustInt == null) {
			args.mustInt = false;
		}

		if (args.minValue == null) {
			args.minValue = -Infinity;
		}

		if (args.maxValue == null) {
			args.maxValue = Infinity;
		}
	}

	field.minValue = args.minValue;
	field.maxValue = args.maxValue;
	field.mustInt = args.mustInt;

};
