import { ConverterService } from "./../../helper/ConverterService";
import { Constructor } from "./../GNMetadata";
import { RequestRole } from "./../../constant/enumType/RequestRole";
import { RequestType } from "./../../constant/enumType/RequestType";
import { OperationRequest } from "./../OperationRequest";

/**
 * Abstract base of every typed request wrapper exported by the SDK.
 *
 * Every generated `*OperationRequest` class
 * (`AuthenticateRequestModels.LoginByAccountOperationRequest`,
 * `GroupRequestModels.GetGroupListOperationRequest`, ...) extends
 * either this class directly or its DTO-shaped subclass
 * {@link CustomOperationRequestAbstract}. The role of the wrapper
 * is to bind a typed request DTO to the three pieces of routing
 * metadata the transport needs:
 * - the {@link OperationCode} string;
 * - the {@link RequestType} group;
 * - the {@link RequestRole} (Client / Server / Admin) the backend
 *   should evaluate the auth token against.
 *
 * Subclasses fill those three protected fields in their declaration
 * (`protected override operationCode = ...`, etc.) and implement
 * {@link build} so the helper machinery in
 * {@link GNNetwork.sendViaSocketTRequestTResponse} can produce a
 * raw {@link OperationRequest} for the transport.
 */
export abstract class CustomOperationRequest {
    /** Operation code from {@link OperationCode}. */
    protected abstract operationCode: string;

    /** Request type discriminator (logical category). */
    protected abstract requestType: RequestType;

    /** Permission scope evaluated against the auth token by the backend. */
    protected abstract role: RequestRole;

    /**
     * Per-request timeout in **seconds**, captured at construction
     * time and forwarded into the underlying
     * {@link OperationRequest} by {@link build}.
     */
    protected operationTimeout: number;

    /**
     * Returns the request type the transport should encode into the
     * outbound frame.
     */
    public getRequestType(): RequestType {
        return this.requestType;
    }

    /**
     * Returns the permission scope the backend should evaluate
     * against the active auth token.
     *
     * Used by {@link GNNetwork.sendViaSocketTRequestTResponse} /
     * `sendViaHttpTRequestTResponse` when they translate the typed
     * wrapper into a raw {@link OperationRequest}.
     */
    public getRole(): RequestRole {
        return this.role;
    }

    /**
     * @param timeout Per-request timeout in seconds. Pass
     *                {@link OperationRequest.defaultTimeOut} to opt
     *                into the transport's configured default.
     */
    constructor(timeout: number) {
        this.operationTimeout = timeout;
    }

    /**
     * Materialises the typed wrapper into a low-level
     * {@link OperationRequest} ready for the transport layer.
     *
     * The default implementation in
     * {@link CustomOperationRequestAbstract} is enough for every
     * generated wrapper; subclasses only need to override `build`
     * when they encode parameters in a non-DTO shape (e.g. a
     * placeholder request with no body).
     */
    public abstract build(): OperationRequest;

}

/**
 * DTO-aware base used by every generated request wrapper.
 *
 * Stores the typed request DTO and its class reference so
 * {@link build} can hand both to
 * {@link ConverterService.serializeObject} for wire-format
 * conversion. Subclasses just declare the three protected fields
 * (`operationCode`, `requestType`, `role`) and pass `this.requestDataCls`
 * in their constructor.
 *
 * @template TRequestData Concrete DTO class that holds the typed
 *                        parameters for the operation. Must use
 *                        the GearN `@*DataMember` decorator family
 *                        so `ConverterService` can serialize it.
 */
export abstract class CustomOperationRequestAbstract<TRequestData> extends CustomOperationRequest {
    /**
     * Public so application code can inspect / mutate the DTO
     * before issuing the request (e.g. patching a single field
     * rather than re-building the wrapper).
     */
    public requestData: TRequestData;
    /**
     * Reference to the DTO class. Required by
     * {@link ConverterService.serializeObject} to look up the
     * cached field metadata produced by the decorators.
     */
    protected requestDataCls: Constructor<TRequestData>;

    /**
     * @param requestData Typed parameter DTO instance to send.
     * @param timeout     Per-request timeout in seconds.
     */
    constructor(requestData: TRequestData, timeout: number) {
        super(timeout);

        this.requestData = requestData;
    }

    /**
     * Builds the raw {@link OperationRequest} sent to the transport.
     *
     * Steps:
     * 1. Create a fresh `OperationRequest` with the wrapper's
     *    operation code and timeout.
     * 2. Serialise the DTO through
     *    {@link ConverterService.serializeObject} and attach the
     *    resulting {@link GNHashtable} as the request parameters.
     *
     * The request id stays unassigned at this point — it will be
     * filled by {@link PeerBase.enqueue} when the request is
     * queued.
     */
    public override build(): OperationRequest {
        let request = new OperationRequest(this.operationCode, this.operationTimeout);

        request.setParameters(ConverterService.serializeObject(this.requestData, this.requestDataCls));

        return request;
    }
}
