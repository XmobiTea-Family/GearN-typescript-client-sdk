import "reflect-metadata";
import { GNArray, GNHashtable } from "./../common/GNData";
import { AbstractConstructor, Constructor, FieldDataType, GNObjectFieldMetadata, GNObjectMetadata } from "./GNMetadata";
// Thanks special for athongintel @clairejs/core

//@internal
export const GN_METADATA = "__GN_METADATA__";

/**
 * Resolves the reflected data type for a decorated field.
 */
const getGNReflectedDataType = (prototype: any, propertyKey: string): FieldDataType => {
	let t = Reflect.getMetadata("design:type", prototype, propertyKey);
	if (!t) {
		throw Error(
			`Cannot get gn reflected data type for ${prototype.constructor.name}:${propertyKey}`
		);
	}

	switch (t.name) {
		case "Boolean":
			return FieldDataType.Boolean;
		case "Number":
			return FieldDataType.Number;
		case "String":
			return FieldDataType.String;
		case "Array":
			return FieldDataType.Array;

		default:
			return FieldDataType.Object;
	}
};

/**
 * Resolves reflected metadata for a decorated field.
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
 * Initializes metadata storage for a reflected GearN model.
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
 * Initializes metadata for a reflected GearN model field.
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
 * Returns the reflected metadata attached to a GearN model.
 */
export const getGNObjectMetadata = <T extends GNObjectMetadata>(obj: AbstractConstructor<any>): T | undefined => {
	return obj.prototype[GN_METADATA];
};

/**
 * Writes reflected metadata to a GearN model.
 */
export const setGNObjectMetadata = <T extends GNObjectMetadata>(obj: AbstractConstructor<any>, metadata: T): void => {
	obj.prototype[GN_METADATA] = metadata;
};

/**
 * Builds the default metadata table name for a reflected model.
 */
export const getTableName = (model: Constructor<any>) => model?.name.toLowerCase();

/**
 * Describes GNEnhancedObjectFieldMetadata.
 */
export interface GNEnhancedObjectFieldMetadata extends GNObjectFieldMetadata {
	code: string;
	isOptional: boolean;
	gnFieldType: GNFieldDataType;
	defaultValue: any;

	activeConditionValid: boolean;

	mustNonNull?: boolean;
	minLength?: number;
	maxLength?: number;
	minValue?: number;
	maxValue?: number;
	mustInt?: boolean;
};

/**
 * Enumerates values for GNFieldDataType.
 */
export enum GNFieldDataType {
	Other = 0,
	Number = 1,
	String = 2,
	Boolean = 3,
	GNHashtable = 4,
	GNArray = 5,

};

/**
 * Describes GNEnhancedObjectMetadata.
 */
export interface GNEnhancedObjectMetadata extends GNObjectMetadata {
	fields: GNEnhancedObjectFieldMetadata[];

};

/**
 * Describes DataMemberBaseArgs.
 */
interface DataMemberBaseArgs {
	code: string;
	isOptional?: boolean;
	defaultValue?: any;

};

/**
 * Describes DataMemberArgs.
 */
interface DataMemberArgs extends DataMemberBaseArgs {
	gnFieldType?: GNFieldDataType;

};

/**
 * Describes OtherDataMemberArgs.
 */
interface OtherDataMemberArgs extends DataMemberBaseArgs {

};

/**
 * Describes StringDataMemberArgs.
 */
interface StringDataMemberArgs extends OtherDataMemberArgs {
	defaultValue?: string;
	mustNonNull?: boolean;
	minLength?: number;
	maxLength?: number;

};

/**
 * Describes BooleanDataMemberArgs.
 */
interface BooleanDataMemberArgs extends OtherDataMemberArgs {
	defaultValue?: boolean;

};

/**
 * Describes NumberDataMemberArgs.
 */
interface NumberDataMemberArgs extends OtherDataMemberArgs {
	defaultValue?: number;
	minValue?: number;
	maxValue?: number;
	mustInt?: boolean;

};

/**
 * Describes GNHashtableDataMemberArgs.
 */
interface GNHashtableDataMemberArgs extends OtherDataMemberArgs {
	defaultValue?: GNHashtable;
	mustNonNull?: boolean;
	minLength?: number;
	maxLength?: number;
};

/**
 * Describes GNArrayDataMemberArgs.
 */
interface GNArrayDataMemberArgs extends OtherDataMemberArgs {
	defaultValue?: GNArray;
	mustNonNull?: boolean;
	minLength?: number;
	maxLength?: number;
	elementCls?: new (...args: any[]) => any;
};

/**
 * Creates the generic field decorator used by reflected models.
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
 * Creates the string field decorator used by reflected models.
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
 * Creates the boolean field decorator used by reflected models.
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
 * Creates the hash-table field decorator used by reflected models.
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
 * Creates the array field decorator used by reflected models.
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
 * Creates the number field decorator used by reflected models.
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
