import { GNArray, GNHashtable, GNData } from "./../common/GNData";
import { getObjectMetadata } from "@clairejs/core";
import { EnhancedFieldMetadata, EnhancedObjectMedata, FieldType } from "./../entity/DataMember";
import { InvalidMemberType } from "./../constant/enumType/InvalidMemberType";

type Constructor<T> = { new(...args: any[]): T };

export interface IGNObject {
    parameters: GNHashtable;
    isValid: boolean;
}

export class ConvertService {
    private readonly declaredFieldsMap: { [k: string]: EnhancedFieldMetadata[] };

    public convertObject<T extends IGNObject>(parameters: GNHashtable, cls: Constructor<T>): T {
        let declaredFields = this.declaredFieldsMap[cls.name];
        if (declaredFields == null) {
            declaredFields = getObjectMetadata<EnhancedObjectMedata>(cls).fields;
            this.declaredFieldsMap[cls.name] = declaredFields;
        }

        let answer = new cls();
        let answerAny = answer as any;
        answerAny.invalidMembers = [];

        let isValidRequest = true;

        for (let i = 0; i < declaredFields.length; i++) {
            let field = declaredFields[i];
            let fieldType = field.fieldType;

            let containsKey = parameters.containsKey(field.code);
            let value = parameters.getObject(field.code);

            //console.log(fieldType + " " + (value instanceof GNHashtable) + " " + field.name);

            if (field.isOptional) {
                if (containsKey && value != null) {
                    if (fieldType == FieldType.GNHashtable) {
                        if (value instanceof GNHashtable) {
                            let lastValue = value as GNHashtable;

                            if (field.mustNonNull) {
                                if (lastValue == null) {
                                    answerAny.invalidMembers.push({
                                        code: field.code,
                                        invalidMemberType: InvalidMemberType.GNHashtableNull
                                    });

                                    isValidRequest = false;
                                    break;
                                }
                            }

                            if (lastValue != null) {
                                if (lastValue.count() < field.minLength) {
                                    answerAny.invalidMembers.push({
                                        code: field.code,
                                        invalidMemberType: InvalidMemberType.GNHashtableMinLength
                                    });

                                    isValidRequest = false;
                                    break;
                                }
                                else if (lastValue.count() > field.maxLength) {
                                    answerAny.invalidMembers.push({
                                        code: field.code,
                                        invalidMemberType: InvalidMemberType.GNHashtableMaxLength
                                    });

                                    isValidRequest = false;
                                    break;
                                }
                            }

                            answerAny[field.name] = lastValue;
                        }
                        else {
                            answerAny.invalidMembers.push({
                                code: field.code,
                                invalidMemberType: InvalidMemberType.TypeInvalid
                            });

                            isValidRequest = false;
                            break;
                        }
                    }
                    else if (fieldType == FieldType.GNArray) {
                        if (value instanceof GNArray) {
                            let lastValue = value as GNArray;

                            if (field.mustNonNull) {
                                if (lastValue == null) {
                                    answerAny.invalidMembers.push({
                                        code: field.code,
                                        invalidMemberType: InvalidMemberType.GNArrayNull
                                    });

                                    isValidRequest = false;
                                    break;
                                }
                            }

                            if (lastValue != null) {
                                if (lastValue.count() < field.minLength) {
                                    answerAny.invalidMembers.push({
                                        code: field.code,
                                        invalidMemberType: InvalidMemberType.GNArrayMinLength
                                    });

                                    isValidRequest = false;
                                    break;
                                }
                                else if (lastValue.count() > field.maxLength) {
                                    answerAny.invalidMembers.push({
                                        code: field.code,
                                        invalidMemberType: InvalidMemberType.GNArrayMaxLength
                                    });

                                    isValidRequest = false;
                                    break;
                                }
                            }

                            answerAny[field.name] = lastValue;
                        }
                        else {
                            answerAny.invalidMembers.push({
                                code: field.code,
                                invalidMemberType: InvalidMemberType.TypeInvalid
                            });

                            isValidRequest = false;
                            break;
                        }
                    }
                    else if (fieldType == FieldType.Boolean) {
                        if (typeof value === "boolean") {
                            let lastValue: boolean = value as any as boolean;

                            if (lastValue == null) {
                                lastValue = false;
                            }

                            answerAny[field.name] = lastValue;
                        }
                        else {
                            answerAny.invalidMembers.push({
                                code: field.code,
                                invalidMemberType: InvalidMemberType.TypeInvalid
                            });

                            isValidRequest = false;
                            break;
                        }
                    }
                    else if (fieldType == FieldType.Number) {
                        if (typeof value === "number") {
                            let lastValue: number = value as any as number;

                            if (lastValue == null) {
                                lastValue = 0;
                            }

                            if (field.activeConditionValid) {
                                if (field.mustInt === true) {
                                    if (!this.isInteger(lastValue)) {
                                        answerAny.invalidMembers.push({
                                            code: field.code,
                                            invalidMemberType: InvalidMemberType.NumberMustInt
                                        });

                                        isValidRequest = false;
                                        break;
                                    }
                                }

                                if (lastValue < field.minValue) {
                                    answerAny.invalidMembers.push({
                                        code: field.code,
                                        invalidMemberType: InvalidMemberType.NumberMinValue
                                    });

                                    isValidRequest = false;
                                    break;
                                }
                                else if (lastValue > field.maxValue) {
                                    answerAny.invalidMembers.push({
                                        code: field.code,
                                        invalidMemberType: InvalidMemberType.NumberMaxValue
                                    });

                                    isValidRequest = false;
                                    break;
                                }
                            }

                            answerAny[field.name] = lastValue;
                        }
                        else {
                            answerAny.invalidMembers.push({
                                code: field.code,
                                invalidMemberType: InvalidMemberType.TypeInvalid
                            });

                            isValidRequest = false;
                            break;
                        }
                    }
                    else if (fieldType == FieldType.String) {
                        if (typeof value === "string") {
                            let lastValue: string = value as any as string;

                            if (field.activeConditionValid) {
                                if (field.mustNonNull) {
                                    if (lastValue == null) {
                                        answerAny.invalidMembers.push({
                                            code: field.code,
                                            invalidMemberType: InvalidMemberType.StringNull
                                        });

                                        isValidRequest = false;
                                        break;
                                    }
                                }

                                if (lastValue != null) {
                                    if (lastValue.length < field.minLength) {
                                        answerAny.invalidMembers.push({
                                            code: field.code,
                                            invalidMemberType: InvalidMemberType.StringMinLength
                                        });

                                        isValidRequest = false;
                                        break;
                                    }
                                    else if (lastValue.length > field.maxLength) {
                                        answerAny.invalidMembers.push({
                                            code: field.code,
                                            invalidMemberType: InvalidMemberType.StringMaxLength
                                        });

                                        isValidRequest = false;
                                        break;
                                    }
                                }
                            }

                            answerAny[field.name] = lastValue;
                        }
                        else {
                            answerAny.invalidMembers.push({
                                code: field.code,
                                invalidMemberType: InvalidMemberType.TypeInvalid
                            });

                            isValidRequest = false;
                            break;
                        }
                    }
                    else if (fieldType == FieldType.Other) {
                        let lastValue = value;

                        answerAny[field.name] = lastValue;
                    }
                }
                else {
                    if (fieldType == FieldType.GNHashtable || fieldType == FieldType.GNArray) {
                        let lastValue: GNData = field.defaultValue;

                        answerAny[field.name] = lastValue;
                    }
                    else if (fieldType == FieldType.Boolean) {
                        let lastValue: boolean = field.defaultValue;

                        answerAny[field.name] = lastValue;
                    }
                    else if (fieldType == FieldType.Number) {
                        let lastValue: number = field.defaultValue;

                        answerAny[field.name] = lastValue;
                    }
                    else if (fieldType == FieldType.String) {
                        let lastValue: string = field.defaultValue;

                        answerAny[field.name] = lastValue;
                    }
                    else if (fieldType == FieldType.Other) {
                        let lastValue = field.defaultValue;

                        answerAny[field.name] = lastValue;
                    }
                }
            }
            else {
                if (!containsKey) {
                    answerAny.invalidMembers.push({
                        code: field.code,
                        invalidMemberType: InvalidMemberType.DataRequired
                    });

                    isValidRequest = false;
                    break;
                }

                if (value != null) {
                    if (fieldType == FieldType.GNHashtable) {
                        if (value instanceof GNHashtable) {
                            let lastValue = value as GNHashtable;

                            if (field.activeConditionValid) {
                                if (field.mustNonNull) {
                                    if (lastValue == null) {
                                        answerAny.invalidMembers.push({
                                            code: field.code,
                                            invalidMemberType: InvalidMemberType.GNHashtableNull
                                        });

                                        isValidRequest = false;
                                        break;
                                    }
                                }

                                if (lastValue != null) {
                                    if (lastValue.count() < field.minLength) {
                                        answerAny.invalidMembers.push({
                                            code: field.code,
                                            invalidMemberType: InvalidMemberType.GNHashtableMinLength
                                        });

                                        isValidRequest = false;
                                        break;
                                    }
                                    else if (lastValue.count() > field.maxLength) {
                                        answerAny.invalidMembers.push({
                                            code: field.code,
                                            invalidMemberType: InvalidMemberType.GNHashtableMaxLength
                                        });

                                        isValidRequest = false;
                                        break;
                                    }
                                }
                            }

                            answerAny[field.name] = lastValue;
                        }
                        else {
                            answerAny.invalidMembers.push({
                                code: field.code,
                                invalidMemberType: InvalidMemberType.TypeInvalid
                            });

                            isValidRequest = false;
                            break;
                        }
                    }
                    else if (fieldType == FieldType.GNArray) {
                        if (value instanceof GNArray) {
                            let lastValue = value as GNArray;

                            if (field.activeConditionValid) {
                                if (field.mustNonNull) {
                                    if (lastValue == null) {
                                        answerAny.invalidMembers.push({
                                            code: field.code,
                                            invalidMemberType: InvalidMemberType.GNArrayNull
                                        });

                                        isValidRequest = false;
                                        break;
                                    }
                                }

                                if (lastValue != null) {
                                    if (lastValue.count() < field.minLength) {
                                        answerAny.invalidMembers.push({
                                            code: field.code,
                                            invalidMemberType: InvalidMemberType.GNArrayMinLength
                                        });

                                        isValidRequest = false;
                                        break;
                                    }
                                    else if (lastValue.count() > field.maxLength) {
                                        answerAny.invalidMembers.push({
                                            code: field.code,
                                            invalidMemberType: InvalidMemberType.GNArrayMaxLength
                                        });

                                        isValidRequest = false;
                                        break;
                                    }
                                }
                            }

                            answerAny[field.name] = lastValue;
                        }
                        else {
                            answerAny.invalidMembers.push({
                                code: field.code,
                                invalidMemberType: InvalidMemberType.TypeInvalid
                            });

                            isValidRequest = false;
                            break;
                        }
                    }
                    else if (fieldType == FieldType.Boolean) {
                        if (typeof value === "boolean") {
                            let lastValue: boolean = value as any as boolean;

                            answerAny[field.name] = lastValue;
                        }
                        else {
                            answerAny.invalidMembers.push({
                                code: field.code,
                                invalidMemberType: InvalidMemberType.TypeInvalid
                            });

                            isValidRequest = false;
                            break;
                        }
                    }
                    else if (fieldType == FieldType.Number) {
                        if (typeof value === "number") {
                            let lastValue: number = value as any as number;

                            if (field.activeConditionValid) {
                                if (field.mustInt === true) {
                                    if (!this.isInteger(lastValue)) {
                                        answerAny.invalidMembers.push({
                                            code: field.code,
                                            invalidMemberType: InvalidMemberType.NumberMustInt
                                        });

                                        isValidRequest = false;
                                        break;
                                    }
                                }

                                if (lastValue < field.minValue) {
                                    answerAny.invalidMembers.push({
                                        code: field.code,
                                        invalidMemberType: InvalidMemberType.NumberMinValue
                                    });

                                    isValidRequest = false;
                                    break;
                                }
                                else if (lastValue > field.maxValue) {
                                    answerAny.invalidMembers.push({
                                        code: field.code,
                                        invalidMemberType: InvalidMemberType.NumberMaxValue
                                    });

                                    isValidRequest = false;
                                    break;
                                }
                            }

                            answerAny[field.name] = lastValue;
                        }
                        else {
                            answerAny.invalidMembers.push({
                                code: field.code,
                                invalidMemberType: InvalidMemberType.TypeInvalid
                            });

                            isValidRequest = false;
                            break;
                        }
                    }
                    else if (fieldType == FieldType.String) {
                        if (typeof value === "string") {
                            let lastValue: string = value as any as string;

                            if (field.activeConditionValid) {
                                if (field.mustNonNull) {
                                    if (lastValue == null) {
                                        answerAny.invalidMembers.push({
                                            code: field.code,
                                            invalidMemberType: InvalidMemberType.StringNull
                                        });

                                        isValidRequest = false;
                                        break;
                                    }
                                }

                                if (lastValue != null) {
                                    if (lastValue.length < field.minLength) {
                                        answerAny.invalidMembers.push({
                                            code: field.code,
                                            invalidMemberType: InvalidMemberType.StringMinLength
                                        });

                                        isValidRequest = false;
                                        break;
                                    }
                                    else if (lastValue.length > field.maxLength) {
                                        answerAny.invalidMembers.push({
                                            code: field.code,
                                            invalidMemberType: InvalidMemberType.StringMaxLength
                                        });

                                        isValidRequest = false;
                                        break;
                                    }
                                }
                            }

                            answerAny[field.name] = lastValue;
                        }
                        else {
                            answerAny.invalidMembers.push({
                                code: field.code,
                                invalidMemberType: InvalidMemberType.TypeInvalid
                            });

                            isValidRequest = false;
                            break;
                        }
                    }
                    else if (fieldType == FieldType.Other) {
                        let lastValue = value;

                        answerAny[field.name] = lastValue;
                    }
                }
                else {
                    if (fieldType == FieldType.GNHashtable || fieldType == FieldType.GNArray) {
                        let lastValue: GNData = null;
                        if (field.defaultValue != null) lastValue = field.defaultValue;

                        if (field.activeConditionValid) {
                            if (field.mustNonNull) {
                                if (lastValue == null) {
                                    let invalidMemberType = fieldType == FieldType.GNHashtable ? InvalidMemberType.GNHashtableNull : InvalidMemberType.GNArrayNull;
                                    answerAny.invalidMembers.push({
                                        code: field.code,
                                        invalidMemberType: invalidMemberType
                                    });

                                    isValidRequest = false;
                                    break;
                                }
                            }

                            if (lastValue != null) {
                                if (lastValue.count() < field.minLength) {
                                    let invalidMemberType = fieldType == FieldType.GNHashtable ? InvalidMemberType.GNHashtableMinLength : InvalidMemberType.GNArrayMinLength;
                                    answerAny.invalidMembers.push({
                                        code: field.code,
                                        invalidMemberType: invalidMemberType
                                    });

                                    isValidRequest = false;
                                    break;
                                }
                                else if (lastValue.count() > field.maxLength) {
                                    let invalidMemberType = fieldType == FieldType.GNHashtable ? InvalidMemberType.GNHashtableMaxLength : InvalidMemberType.GNArrayMaxLength;
                                    answerAny.invalidMembers.push({
                                        code: field.code,
                                        invalidMemberType: invalidMemberType
                                    });

                                    isValidRequest = false;
                                    break;
                                }
                            }
                        }

                        answerAny[field.name] = lastValue;
                    }
                    else if (fieldType == FieldType.Boolean) {
                        answerAny.invalidMembers.push({
                            code: field.code,
                            invalidMemberType: InvalidMemberType.TypeInvalid
                        });

                        isValidRequest = false;
                        break;
                    }
                    else if (fieldType == FieldType.Number) {
                        answerAny.invalidMembers.push({
                            code: field.code,
                            invalidMemberType: InvalidMemberType.TypeInvalid
                        });

                        isValidRequest = false;
                        break;
                    }
                    else if (fieldType == FieldType.String) {
                        let lastValue: string = null;
                        if (field.defaultValue != null) lastValue = field.defaultValue;

                        if (field.activeConditionValid) {
                            if (field.mustNonNull) {
                                if (lastValue == null) {
                                    answerAny.invalidMembers.push({
                                        code: field.code,
                                        invalidMemberType: InvalidMemberType.StringNull
                                    });

                                    isValidRequest = false;
                                    break;
                                }
                            }

                            if (lastValue != null) {
                                if (lastValue.length < field.minLength) {
                                    answerAny.invalidMembers.push({
                                        code: field.code,
                                        invalidMemberType: InvalidMemberType.StringMinLength
                                    });

                                    isValidRequest = false;
                                    break;
                                }
                                else if (lastValue.length > field.maxLength) {
                                    answerAny.invalidMembers.push({
                                        code: field.code,
                                        invalidMemberType: InvalidMemberType.StringMaxLength
                                    });

                                    isValidRequest = false;
                                    break;
                                }
                            }
                        }

                        answerAny[field.name] = lastValue;
                    }
                    else if (fieldType == FieldType.Other) {
                        let lastValue = null;
                        if (field.defaultValue != null) lastValue = field.defaultValue;

                        answerAny[field.name] = lastValue;
                    }
                }
            }
        }

        answerAny.parameters = parameters;
        answerAny.isValid = isValidRequest;

        return answer as any as T;
    }

    private isInteger(number: number): boolean {
        return Number.isInteger(number);
    }

    constructor() {
        this.declaredFieldsMap = {};
    }
}
