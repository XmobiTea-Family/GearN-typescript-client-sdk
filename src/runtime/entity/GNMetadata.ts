/**
 * Defines the type alias Constructor.
 */
export type Constructor<T> = {
	new(...args: any[]): T;
};

/**
 * Defines the type alias AbstractConstructor.
 */
export type AbstractConstructor<T> = Function & {
	prototype: T;
};

/**
 * Enumerates values for FieldDataType.
 */
export enum FieldDataType {
	Boolean = 0,
	Number = 1,
	String = 2,
	Array = 3,
	Object = 4,

};

/**
 * Describes GNObjectFieldMetadata.
 */
export interface GNObjectFieldMetadata {
	name: string;
	fieldType: FieldDataType;
	cls: new (...args: any[]) => any;
};

/**
 * Describes GNObjectMetadata.
 */
export interface GNObjectMetadata {
	id: string;
	fields: GNObjectFieldMetadata[];

};
