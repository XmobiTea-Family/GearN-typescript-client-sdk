/**
 * Type alias for an instantiable class — anything that supports `new
 * SomeClass(...args)` and produces a `T`.
 *
 * The SDK uses this alias as the "deserialise into" parameter for
 * helpers like {@link ConverterService.deserializeObject},
 * {@link ConverterService.deserializeArray} and the typed `sendVia*`
 * helpers on {@link GNNetwork}. Passing a class through this type
 * preserves enough static information that TypeScript can infer the
 * generic `T` automatically:
 *
 * ```ts
 * function decode<T>(value: any, cls: Constructor<T>): T {
 *     return new cls(value);
 * }
 * const ban = decode(rawValue, GenericModels.BanItem); // T = BanItem
 * ```
 *
 * @template T  Instance type produced by the constructor.
 */
export type Constructor<T> = {
	new(...args: any[]): T;
};

/**
 * Type alias for a possibly-abstract class reference.
 *
 * Used wherever the SDK only needs to read static or prototype-level
 * metadata (decorator-attached `__GN_METADATA__` blob, prototype field
 * definitions) without ever calling `new`. Abstract classes have no
 * `new(...)` signature, so the standard {@link Constructor} alias would
 * reject them — `AbstractConstructor` widens the constraint to plain
 * `Function & { prototype: T }`.
 *
 * Mainly used by {@link getGNObjectMetadata} and
 * {@link setGNObjectMetadata} so callers can hand in either a concrete
 * model class or an abstract base class.
 *
 * @template T  Instance type that the prototype represents.
 */
export type AbstractConstructor<T> = Function & {
	prototype: T;
};

/**
 * Coarse runtime type of a model field as observed by `Reflect.getMetadata`.
 *
 * The `DataMember` decorator family inspects the TypeScript-emitted
 * `design:type` metadata to learn which JavaScript constructor was
 * declared on a field (`String`, `Number`, `Boolean`, `Array`, anything
 * else). Those constructors are then mapped onto this enum so the
 * serializer / deserializer in {@link ConverterService} can branch on
 * the kind of value they're handling without re-inspecting the class.
 *
 * The numeric ordinals are an internal contract — they are never
 * persisted to the wire — but should still not be reordered casually
 * because every cached metadata blob references them by value.
 */
export enum FieldDataType {
	/** Field is declared as `boolean` / `Boolean`. */
	Boolean = 0,
	/** Field is declared as `number` / `Number`. */
	Number = 1,
	/** Field is declared as `string` / `String`. */
	String = 2,
	/** Field is declared as `Array<...>` (or `T[]`). */
	Array = 3,
	/** Field is declared as a class instance — anything that is not one of the primitives above. */
	Object = 4,

};

/**
 * Per-field reflected metadata captured by the `DataMember` decorator
 * family.
 *
 * Stored in the `__GN_METADATA__` blob attached to the model prototype.
 * The base contract here only covers the values the runtime needs to
 * navigate the prototype chain; the `DataMember` decorators extend it
 * with serialisation-specific fields by widening to
 * {@link GNEnhancedObjectFieldMetadata}.
 */
export interface GNObjectFieldMetadata {
	/**
	 * Property key on the model prototype (e.g. `"username"` or
	 * `"infoRequestParam"`). Used by the (de)serialiser to read /
	 * write values via `obj[name]`.
	 */
	name: string;
	/**
	 * Coarse type bucket inferred from the TypeScript `design:type`
	 * metadata. See {@link FieldDataType} for the enum members.
	 */
	fieldType: FieldDataType;
	/**
	 * Concrete element / value class declared on the field. For
	 * primitives this is the corresponding wrapper constructor
	 * (`String`, `Number`, `Boolean`); for object fields it is the
	 * declared class; for arrays it is the element class supplied via
	 * `GNArrayDataMember({ elementCls })`.
	 */
	cls: new (...args: any[]) => any;
};

/**
 * Per-class reflected metadata captured by the `DataMember` decorator
 * family.
 *
 * Each model prototype owns its own metadata blob; subclasses inherit a
 * cloned copy of the parent's `fields` array so they can add or
 * override entries without mutating the base class. The `id` field is
 * the lower-cased class name and is currently informational — the
 * serialiser never reads it.
 */
export interface GNObjectMetadata {
	/**
	 * Lowercase class name. Filled by {@link initGNObjectMetadata}
	 * using `model.name.toLowerCase()` and used for diagnostic
	 * purposes only — the serializer does not read it.
	 */
	id: string;
	/**
	 * Ordered list of decorated field metadata entries. The order
	 * matches the declaration order of the `@*DataMember` decorators
	 * on the class plus any inherited entries from parent classes.
	 */
	fields: GNObjectFieldMetadata[];

};
