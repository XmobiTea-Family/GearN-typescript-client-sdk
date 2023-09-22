import { EventCode } from "./../constant/EventCode";
import { OperationCode } from "./../constant/OperationCode";
import { ReturnCode } from "./../constant/ReturnCode";

class CodeHelperBase {
    private static readonly unknownCode = "Unknown";

    codeDict: Map<number, string>;

    public getCodeName(code: number): string {
        return this.codeDict.has(code) ? this.codeDict.get(code) : CodeHelperBase.unknownCode;
    }

    constructor(codeDict: Map<number, string>) {
        this.codeDict = codeDict;
    }
}

export class CodeHelper {
    private static operationCodeHelper: CodeHelperBase;
    private static eventCodeHelper: CodeHelperBase;
    private static returnCodeHelper: CodeHelperBase;

    public static getOperationCodeName(operationCode: number): string {
        return CodeHelper.operationCodeHelper.getCodeName(operationCode);
    }

    public static getEventCodeName(eventCode: number): string {
        return CodeHelper.eventCodeHelper.getCodeName(eventCode);
    }

    public static getReturnCodeName(returnCode: number): string {
        return CodeHelper.returnCodeHelper.getCodeName(returnCode);
    }

    static init(): void {
        this.setOperationCodeDic();
        this.setEventCodeDic();
        this.setReturnCodeDic();
    }

    private static setOperationCodeDic(): void {
        this.operationCodeHelper = new CodeHelperBase(new Map());

        this.addOperationCodeDic(OperationCode);
    }

    public static addOperationCodeDic(operationCode: any): void {
        let keys = Object.keys(operationCode) as Array<string>;
        let values = Object.values(operationCode) as Array<number>;

        for (let i = 0; i < keys.length; i++) {
            this.operationCodeHelper.codeDict.set(values[i], keys[i]);
        }
    }

    private static setEventCodeDic(): void {
        this.eventCodeHelper = new CodeHelperBase(new Map());

        this.addEventCodeDic(EventCode);
    }

    public static addEventCodeDic(eventCode: any): void {
        let keys = Object.keys(eventCode) as Array<string>;
        let values = Object.values(eventCode) as Array<number>;

        for (let i = 0; i < keys.length; i++) {
            this.eventCodeHelper.codeDict.set(values[i], keys[i]);
        }
    }

    private static setReturnCodeDic(): void {
        this.returnCodeHelper = new CodeHelperBase(new Map());

        this.addReturnCodeDic(ReturnCode);
    }

    public static addReturnCodeDic(returnCode: any): void {
        let keys = Object.keys(returnCode) as Array<string>;
        let values = Object.values(returnCode) as Array<number>;

        for (let i = 0; i < keys.length; i++) {
            this.returnCodeHelper.codeDict.set(values[i], keys[i]);
        }
    }

}
