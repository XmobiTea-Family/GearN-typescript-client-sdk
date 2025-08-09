import { GNEnhancedObjectFieldMetadata, GNEnhancedObjectMetadata, GNFieldDataType, getGNObjectMetadata } from "./../entity/DataMember";
import { GNArray, GNData, GNHashtable } from "./../common/GNData";

type Constructor<T> = { new(...args: any[]): T };

class DataMemberFieldInfoTypeMapper {
	private readonly declaredFieldsMap: Map<any, GNEnhancedObjectFieldMetadata[]>;

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

class DeserializeConverter {
	private dataMemberFieldInfoMapper: DataMemberFieldInfoTypeMapper;

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

class SerializeConverter {
	private dataMemberFieldInfoMapper: DataMemberFieldInfoTypeMapper;

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
						if (Array.isArray(value)) answer.add(dataMemberAnno.code, this.serializeArray(value, dataMemberAnno.cls));
						else answer.add(dataMemberAnno.code, GNHashtable.builder().addAll(value).build());
					}
					else answer.add(dataMemberAnno.code, this.serializeObject(value, dataMemberAnno.cls));
				}
			}
		});

		return answer;
	}

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

export class ConverterService {
	private static serializeConverter: SerializeConverter;
	private static deserializeConverter: DeserializeConverter;

	public static deserializeObject<T>(gnHashtable: GNHashtable, cls: Constructor<T>): any {
		return ConverterService.deserializeConverter.deserializeObject(gnHashtable, cls);
	}

	public static deserializeArray<T>(gnArray: GNArray, cls: Constructor<T>): any[] {
		return ConverterService.deserializeConverter.deserializeArray(gnArray, cls);
	}

	public static serializeObject<T>(obj: any, cls: Constructor<T>): GNHashtable {
		return ConverterService.serializeConverter.serializeObject(obj, cls);
	}

	public static serializeArray<T>(objLst: [], cls: Constructor<T>): GNArray {
		return ConverterService.serializeConverter.serializeArray(objLst, cls);
	}

	static init(): void {
		let dataMemberFieldInfoMapper = new DataMemberFieldInfoTypeMapper();

		ConverterService.serializeConverter = new SerializeConverter(dataMemberFieldInfoMapper);
		ConverterService.deserializeConverter = new DeserializeConverter(dataMemberFieldInfoMapper);
	}
}
