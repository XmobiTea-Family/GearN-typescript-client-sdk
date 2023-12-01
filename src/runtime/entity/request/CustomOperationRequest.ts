import { ConverterService } from "./../../helper/ConverterService";
import { Constructor } from "./../GNMetadata";
import { RequestRole } from "./../../constant/enumType/RequestRole";
import { RequestType } from "./../../constant/enumType/RequestType";
import { OperationRequest } from "./../OperationRequest";

export abstract class CustomOperationRequest {
    protected abstract operationCode: number;

    protected abstract operationEncrypted: boolean;

    protected abstract requestType: RequestType;

    protected abstract requestRole: RequestRole;

    protected operationTimeout: number;

    public getRequestType(): RequestType {
        return this.requestType;
    }

    public getRequestRole(): RequestRole {
        return this.requestRole;
    }

    constructor(timeout: number) {
        this.operationTimeout = timeout;
    }

    public abstract build(): OperationRequest;

}

export abstract class CustomOperationRequestAbstract<TRequestData> extends CustomOperationRequest {
    public requestData: TRequestData;
    protected requestDataCls: Constructor<TRequestData>;

    constructor(requestData: TRequestData, timeout: number) {
        super(timeout);

        this.requestData = requestData;
    }

    public override build(): OperationRequest {
        let request = new OperationRequest(this.operationCode, this.operationEncrypted, this.operationTimeout);

        request.setParameters(ConverterService.serializeObject(this.requestData, this.requestDataCls));

        return request;
    }
}
