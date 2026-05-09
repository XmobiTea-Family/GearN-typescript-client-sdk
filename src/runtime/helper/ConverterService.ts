import { GNEnhancedObjectFieldMetadata, GNEnhancedObjectMetadata, GNFieldDataType, getGNObjectMetadata } from "./../entity/DataMember";
import { GNArray, GNData, GNHashtable } from "./../common/GNData";

/**
 * Local alias for an instantiable class.
 *
 * Re-declared here (rather than imported from
 * {@link entity/GNMetadata}) so this file does not have to depend
 * on the metadata module just for the alias — the underlying shape
 * is identical.
 */
type Constructor<T> = { new(...args: any[]): T };

/**
 * Per-class cache of decorator-derived field metadata.
 *
 * The metadata blob is allocated lazily by
 * {@link initGNObjectFieldMetadata} as decorators run; this mapper
 * captures the fully built `fields` array on first access and
 * memoises it so repeated (de)serialisation calls do not reflect
 * the prototype chain twice.
 */
class DataMemberFieldInfoTypeMapper {
	/**
	 * Class-prototype → field-array map. Populated lazily on first
	 * lookup for a given class.
	 */
	private readonly declaredFieldsMap: Map<any, GNEnhancedObjectFieldMetadata[]>;

	/**
	 * Returns the cached field metadata array for `cls`,
	 * reflecting and caching it on first access.
	 *
	 * Falls back to an empty array when the class has no decorated
	 * fields (e.g. an empty marker class) so callers can iterate
	 * the result without a null check.
	 */
	public getGNEnhancedObjectFieldMetadata<T>(cls: Constructor<T>): GNEnhancedObjectFieldMetadata[] {
		let declaredFields: GNEnhancedObjectFieldMetadata[];

		if (this.declaredFieldsMap.has(cls)) {
			declaredFields = this.declaredFieldsMap.get(cls);
		}
		else {
			let gnObjectMetadata = getGNObjectMetadata<GNEnhancedObjectMetadata>(cls);

			declaredFields = gnObjectMetadata != null ? gnObjectMetadata.fields : [];
			this.declaredFieldsMap.set(cls, declaredFields);
		}

		return declaredFields;
	}

	constructor() {
		this.declaredFieldsMap = new Map();
	}
}

/**
 * Converts {@link GNHashtable} / {@link GNArray} containers into
 * fully typed model instances.
 *
 * Walks the cached {@link GNEnhancedObjectFieldMetadata} for the
 * target class, reads each declared field from the source
 * container, and assigns it onto a freshly allocated `new cls()`
 * instance. Branching is driven by
 * {@link GNEnhancedObjectFieldMetadata.gnFieldType} so the helper
 * knows whether to expect a primitive, a nested object or an array.
 *
 * Default-value fallback: when the source container does not carry
 * a value for a field, the helper applies the decorator's
 * `defaultValue` — recursively materialising it as a nested model
 * when the field type is `GNHashtable` / `GNArray` and the
 * declared element class is itself a model class.
 */
class DeserializeConverter {
	private dataMemberFieldInfoMapper: DataMemberFieldInfoTypeMapper;

	/**
	 * Deserialises a {@link GNHashtable} into an instance of `cls`.
	 *
	 * Returns `null` when `gnHashtable` is `null` so call sites can
	 * chain it after a `getGNHashtable` lookup without a
	 * defensive guard.
	 *
	 * Behaviour per field type:
	 * - `String` / `Number` / `Boolean`: copy the primitive when
	 *   present, otherwise apply `defaultValue`.
	 * - `GNHashtable`: branch on the declared element class —
	 *   leave as-is when `cls === GNHashtable`, dump to plain JS
	 *   data via `toData()` when the declared class is `Object`,
	 *   otherwise recursively deserialise into the typed model.
	 * - `GNArray`: same three-way branch, routed through
	 *   {@link deserializeArray}.
	 * - `Other`: fallback that handles bare `@DataMember`
	 *   declarations by inspecting the declared `cls` and picking
	 *   the matching strategy.
	 *
	 * The implementation is dense by design — the hot path runs
	 * once per field per response and the branching is unrolled to
	 * keep the inner work cheap.
	 */
	public deserializeObject<T>(gnHashtable: GNHashtable, cls: Constructor<T>): any {
		if (gnHashtable == null) return null;

		let declaredFields = this.dataMemberFieldInfoMapper.getGNEnhancedObjectFieldMetadata(cls);

		let answer = new cls() as any;

		declaredFields.forEach(declaredField => {
			let value = gnHashtable.getObject(declaredField.code);
			let typeOfValue = typeof value;

			if (declaredField.gnFieldType == GNFieldDataType.String) {
				if (value == null) answer[declaredField.name] = declaredField.defaultValue;
				else if (typeOfValue == "string") answer[declaredField.name] = value;
			}
			else if (declaredField.gnFieldType == GNFieldDataType.Boolean) {
				if (value == null) answer[declaredField.name] = declaredField.defaultValue;
				else if (typeOfValue == "boolean") answer[declaredField.name] = value;
			}
			else if (declaredField.gnFieldType == GNFieldDataType.GNHashtable) {
				if (value == null) {
					if (declaredField.defaultValue != null) {
						if (declaredField.cls == GNHashtable) answer[declaredField.name] = declaredField.defaultValue;
						else if (typeof declaredField.cls == "object") answer[declaredField.name] = (<GNHashtable>declaredField.defaultValue).toData();
						else answer[declaredField.name] = this.deserializeObject(<GNHashtable>declaredField.defaultValue, declaredField.cls);
					}
				}
				else {
					if (declaredField.cls == GNHashtable) answer[declaredField.name] = value;
					else if (typeof declaredField.cls == "object") answer[declaredField.name] = (<GNHashtable>value).toData();
					else answer[declaredField.name] = this.deserializeObject(<GNHashtable>value, declaredField.cls);
				}
			}
			else if (declaredField.gnFieldType == GNFieldDataType.GNArray) {
				if (value == null) {
					if (declaredField.defaultValue != null) {
						if (declaredField.cls == GNArray) answer[declaredField.name] = declaredField.defaultValue;
						else if (typeof declaredField.cls == "object") answer[declaredField.name] = (<GNArray>declaredField.defaultValue).toData();
						else answer[declaredField.name] = this.deserializeArray(<GNArray>declaredField.defaultValue, declaredField.cls);
					}
				}
				else {
					if (declaredField.cls == GNArray) answer[declaredField.name] = value;
					else if (typeof declaredField.cls == "object") answer[declaredField.name] = (<GNArray>value).toData();
					else answer[declaredField.name] = this.deserializeArray(<GNArray>value, declaredField.cls);
				}
			}
			else if (declaredField.gnFieldType == GNFieldDataType.Number) {
				if (value == null) answer[declaredField.name] = declaredField.defaultValue;
				else if (typeOfValue == "number") answer[declaredField.name] = value;
			}
			else {
				if (value == null) {
					if (declaredField.defaultValue != null) {
						if (declaredField.cls == Number) answer[declaredField.name] = declaredField.defaultValue;
						else if (declaredField.cls == String) answer[declaredField.name] = declaredField.defaultValue;
						else if (declaredField.cls == Boolean) answer[declaredField.name] = declaredField.defaultValue;
						else if (declaredField.cls == GNHashtable) answer[declaredField.name] = this.deserializeObject(<GNHashtable>declaredField.defaultValue, declaredField.cls);
						else if (declaredField.cls == GNArray) answer[declaredField.name] = this.deserializeArray(<GNArray>declaredField.defaultValue, declaredField.cls);
						else answer[declaredField.name] = declaredField.defaultValue;
					}
				}
				else {
					if (declaredField.cls == Number) answer[declaredField.name] = value;
					else if (declaredField.cls == String) answer[declaredField.name] = value;
					else if (declaredField.cls == Boolean) answer[declaredField.name] = value;
					else if (declaredField.cls == GNHashtable) answer[declaredField.name] = this.deserializeObject(<GNHashtable>value, declaredField.cls);
					else if (declaredField.cls == GNArray) answer[declaredField.name] = this.deserializeArray(<GNArray>value, declaredField.cls);
					else answer[declaredField.name] = value;
				}
			}
		});

		return answer;
	}

	/**
	 * Deserialises a {@link GNArray} into an array of typed model
	 * instances or primitives.
	 *
	 * Per-element branching:
	 * - Primitives (`number`, `string`, `boolean`) are pushed
	 *   verbatim.
	 * - When the declared element `cls` is `GNArray` / `GNData`,
	 *   the original container is preserved as-is (no recursive
	 *   conversion).
	 * - Object elements recurse through
	 *   {@link deserializeObject}; nested array elements recurse
	 *   through this method.
	 *
	 * Returns `null` when `gnArray` is `null` so call sites can
	 * chain after `getGNArray`.
	 */
	public deserializeArray<T>(gnArray: GNArray, cls: Constructor<T>): any[] {

		if (gnArray == null) return null;

		let answer: any[] = [];

		for (let i = 0; i < gnArray.count(); i++) {
			let value = gnArray.getObject(i);
			if (value == null) answer.push(null);
			else {
				let typeOfValue = typeof value;

				if (typeOfValue == "number") answer.push(value);
				else if (typeOfValue == "string") answer.push(value);
				else if (typeOfValue == "boolean") answer.push(value);
				else if (cls as any == GNArray) answer.push(value);
				else if (cls as any == GNData) answer.push(value);
				else if (typeOfValue == "object") {
					if (Array.isArray(value)) {
						answer.push(this.deserializeArray(gnArray.getGNArray(i), cls));
					}
					else {
						answer.push(this.deserializeObject(gnArray.getGNHashtable(i), cls));
					}
				}
			}
		}

		return answer;
	}

	constructor(dataMemberFieldInfoMapper: DataMemberFieldInfoTypeMapper) {
		this.dataMemberFieldInfoMapper = dataMemberFieldInfoMapper;
	}
}

/**
 * Converts typed model instances into {@link GNHashtable} /
 * {@link GNArray} containers ready for the wire.
 *
 * Mirror image of {@link DeserializeConverter} — drives off the
 * same cached field metadata and applies the symmetric branching:
 * each field type writes its value into the outbound container
 * under the wire-level `code` declared by the decorator.
 *
 * Optional handling: when a field is `null`, the helper writes an
 * explicit `null` only when the decorator did **not** mark the
 * field as `isOptional`. Optional fields are simply omitted so
 * the backend can distinguish "untouched" from "explicit clear".
 */
class SerializeConverter {
	private dataMemberFieldInfoMapper: DataMemberFieldInfoTypeMapper;

	/**
	 * Serialises a typed model instance into a {@link GNHashtable}.
	 *
	 * Returns `null` when `obj` is `null`. Walks the cached field
	 * list and writes each value under its decorator-supplied
	 * `code`. Nested objects and arrays recurse through this method
	 * and {@link serializeArray} respectively.
	 */
	public serializeObject<T>(obj: any, cls: Constructor<T>): GNHashtable {
		if (obj == null) return null;

		let fieldInfos = this.dataMemberFieldInfoMapper.getGNEnhancedObjectFieldMetadata(cls);

		let answer = new GNHashtable();

		fieldInfos.forEach((field) => {
			let dataMemberAnno = field;

			let value = obj[dataMemberAnno.name];

			if (value == null) {
				if (!dataMemberAnno.isOptional) answer.add(dataMemberAnno.code, null);
			}
			else {
				let typeOfValue = typeof value;

				if (dataMemberAnno.gnFieldType == GNFieldDataType.String) {
					if (typeOfValue == "string") answer.add(dataMemberAnno.code, value);
				}
				else if (dataMemberAnno.gnFieldType == GNFieldDataType.Boolean) {
					if (typeOfValue == "boolean") answer.add(dataMemberAnno.code, value);
				}
				else if (dataMemberAnno.gnFieldType == GNFieldDataType.GNHashtable) {
					if (value instanceof GNHashtable) answer.add(dataMemberAnno.code, value);
					else if (typeOfValue === "object") {
						if (!Array.isArray(value)) answer.add(dataMemberAnno.code, this.serializeObject(value, dataMemberAnno.cls));
					}
				}
				else if (dataMemberAnno.gnFieldType == GNFieldDataType.GNArray) {
					if (value instanceof GNArray) answer.add(dataMemberAnno.code, value);
					else if (typeOfValue === "object") {
						if (Array.isArray(value)) answer.add(dataMemberAnno.code, this.serializeArray(value, dataMemberAnno.cls));
					}
				}
				else if (dataMemberAnno.gnFieldType == GNFieldDataType.Number) {
					if (typeOfValue == "number") answer.add(dataMemberAnno.code, value);
				}
				else {
					if (typeOfValue == "string") answer.add(dataMemberAnno.code, value);
					else if (typeOfValue == "boolean") answer.add(dataMemberAnno.code, value);
					else if (typeOfValue == "number") answer.add(dataMemberAnno.code, value);
					else if (value instanceof GNData) answer.add(dataMemberAnno.code, value);
					else if (typeOfValue == "object") {
						if (Array.isArray(value)) answer.add(dataMemberAnno.code, value);
						else answer.add(dataMemberAnno.code, value);
					}
					else answer.add(dataMemberAnno.code, this.serializeObject(value, dataMemberAnno.cls));
				}
			}
		});

		return answer;
	}

	/**
	 * Serialises an array of typed model instances or primitives
	 * into a {@link GNArray}.
	 *
	 * Per-element branching mirrors
	 * {@link DeserializeConverter.deserializeArray}: primitives are
	 * pushed verbatim, {@link GNData} containers are preserved
	 * as-is, plain arrays recurse through this method, and object
	 * elements recurse through {@link serializeObject}.
	 */
	public serializeArray<T>(objLst: any[], cls: Constructor<T>): GNArray {
		if (objLst == null) return null;

		let answer = new GNArray();

		for (let i = 0; i < objLst.length; i++) {
			let obj = objLst[i];

			if (obj == null) answer.add(null);
			else {
				let typeOfValue = typeof obj;

				if (typeOfValue === "string") answer.add(obj);
				else if (typeOfValue === "boolean") answer.add(obj);
				else if (typeOfValue === "number") answer.add(obj);
				else if (obj instanceof GNData) answer.add(obj);
				else {
					if (typeOfValue === "object") {
						if (Array.isArray(obj)) answer.add(this.serializeArray(obj, cls));
						else answer.add(this.serializeObject(obj, cls));
					}
				}
			}
		}

		return answer;
	}

	constructor(dataMemberFieldInfoMapper: DataMemberFieldInfoTypeMapper) {
		this.dataMemberFieldInfoMapper = dataMemberFieldInfoMapper;
	}
}

/**
 * Static facade for the SDK's typed model (de)serialisation.
 *
 * Most application code does not need to touch this directly — the
 * generated `*Api` wrappers and request/response models call into
 * it internally after {@link GNNetwork.init} runs
 * {@link ConverterService.init}. Reach for this class manually
 * only for advanced workflows: custom DTOs, unit tests that round
 * trip a model through the SDK encoder, or hand-built operation
 * requests that produce non-standard response shapes.
 *
 * Lifecycle:
 * - {@link init} runs from {@link GNNetwork.init} and allocates
 *   one shared {@link DataMemberFieldInfoTypeMapper} that backs
 *   both the serializer and the deserializer (so the metadata
 *   cache is shared between the two directions).
 * - There is no `dispose()`; the singleton lives for the lifetime
 *   of the JS realm.
 */
export class ConverterService {
	private static serializeConverter: SerializeConverter;
	private static deserializeConverter: DeserializeConverter;

	/**
	 * Deserialises a {@link GNHashtable} into a typed model
	 * instance.
	 *
	 * The class supplied as `cls` must use the GearN
	 * `@*DataMember` decorator family so the SDK can resolve the
	 * field-code mapping. Classes without decorators yield an
	 * instance with no fields populated.
	 *
	 * @param gnHashtable Source container; usually obtained from
	 *                    `OperationResponse.getParameters()`.
	 * @param cls         Target model class.
	 * @returns           Populated `T` instance, or `null` when
	 *                    `gnHashtable` is `null`.
	 */
	public static deserializeObject<T>(gnHashtable: GNHashtable, cls: Constructor<T>): any {
		return ConverterService.deserializeConverter.deserializeObject(gnHashtable, cls);
	}

	/**
	 * Deserialises a {@link GNArray} into an array of typed model
	 * instances or primitives.
	 *
	 * For arrays of custom objects, `cls` should be the element
	 * class decorated with the GearN metadata. For arrays of
	 * primitives pass the matching wrapper (`String`, `Number`,
	 * `Boolean`).
	 */
	public static deserializeArray<T>(gnArray: GNArray, cls: Constructor<T>): any[] {
		return ConverterService.deserializeConverter.deserializeArray(gnArray, cls);
	}

	/**
	 * Serialises a typed model instance into a {@link GNHashtable}
	 * suitable for the wire.
	 *
	 * The result is the same shape that the request build pipeline
	 * inside `*OperationRequest.build()` produces — pass it to
	 * `OperationRequest.setParameters` if you are constructing a
	 * raw request manually.
	 */
	public static serializeObject<T>(obj: any, cls: Constructor<T>): GNHashtable {
		return ConverterService.serializeConverter.serializeObject(obj, cls);
	}

	/**
	 * Serialises an array of typed model instances or primitives
	 * into a {@link GNArray}.
	 *
	 * For arrays of custom objects, `cls` should be the element
	 * class decorated with GearN metadata.
	 */
	public static serializeArray<T>(objLst: [], cls: Constructor<T>): GNArray {
		return ConverterService.serializeConverter.serializeArray(objLst, cls);
	}

	/**
	 * Allocates the shared serializer / deserializer singletons.
	 *
	 * Run once from {@link GNNetwork.init}. Calling it again
	 * rebuilds the singletons from scratch, which is convenient in
	 * test setups that need to reset the SDK between cases.
	 */
	static init(): void {
		let dataMemberFieldInfoMapper = new DataMemberFieldInfoTypeMapper();

		ConverterService.serializeConverter = new SerializeConverter(dataMemberFieldInfoMapper);
		ConverterService.deserializeConverter = new DeserializeConverter(dataMemberFieldInfoMapper);
	}
}
