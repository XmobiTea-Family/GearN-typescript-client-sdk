import { GNHashtable } from "./../../common/GNData";
import { OperationRequest } from "./../OperationRequest";

export abstract class CustomOperationRequest {
    protected abstract operationCode: number;
    protected abstract operationEncrypted: boolean;

    protected operationTimeout: number;
    protected operationParameters: GNHashtable;

    constructor(timeout: number) {
        this.operationTimeout = timeout;
    }

    public build(): OperationRequest {
        let request = new OperationRequest(this.operationCode, this.operationEncrypted, this.operationTimeout);

        if (this.operationParameters != null)
            request.setParameters(this.operationParameters);

        return request;
    }
}
