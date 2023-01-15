import { Action1 } from "./../common/Action1";
import { GNArray, GNHashtable } from "./../common/GNData";
import { Commands } from "./../constant/Commands";
import { OperationCode } from "./../constant/OperationCode";
import { ReturnCode } from "./../constant/ReturnCode";
import { GNNetwork } from "./../GNNetwork";
import { GNDebug } from "./../logger/GNDebug";
import { NetworkingPeer } from "./NetworkingPeer";
import { OperationPending } from "./OperationPending";
import { PeerBase } from "./PeerBase";
import { NetworkingPeerBase } from "./NetworkingPeerBase";
import { GNSupport } from "./../helper/GNSupport";

export class HttpAppResponse {
    public statusCode: number;
    public error: string;
    public data: Uint8Array;
    public text: string;

    public hasError(): boolean {
        return this.error != null;
    }

}

export enum PostType {
    Json = 0,
    MsgPack = 1,
}

export class HttpPeer extends PeerBase {

    private static userAgent: string = "";

    private httpUrl: string;
    private static readonly JSON_CHAR_KNOWN: string = "[";

    protected override initGNSocketObject(): void {
        let gnServerSettings = GNNetwork.getGNServerSettings();
        if (gnServerSettings == null)
            throw new Error("Where is GN Server Settings");

        this.isUse = gnServerSettings.isUseHttp();

        this.httpUrl = gnServerSettings.getHttpUrl();

        HttpPeer.userAgent = "GN-ts-" + GNNetwork.getPlatform() + "@" + GNNetwork.getClientSdkVersion();

        // if (httpRequestType == HttpRequestType.HTTPRequest)
        // {
        //     HTTPManager.UserAgent = userAgent;
        //     HTTPManager.KeepAliveDefaultValue = false;
        // }
    }

    override send(operationPending: OperationPending): void {
        super.send(operationPending);

        GNDebug.log("[GN Http SEND] " + operationPending.getOperationRequest().toString());

        let operationRequest = operationPending.getOperationRequest();

        let authToken = GNNetwork.getAuthToken();

        if (!authToken) {
            if (GNNetwork.getGNServerSettings().getCodeCanSendNotAuthorized().indexOf(operationRequest.getOperationCode()) == -1) {

                let obj = new GNArray();

                obj.add(ReturnCode.OperationNotAuthorized);
                obj.add(null);
                obj.add(operationRequest.getRequestId());

                this.onResponseHandler(obj, operationRequest.isEncrypted());

                return;
            }
        }

        if (operationRequest.getOperationCode() == OperationCode.Logout) {
            let obj = new GNArray();

            obj.add(ReturnCode.Ok);
            obj.add(new GNHashtable());
            obj.add(operationRequest.getRequestId());

            this.onResponseHandler(obj, operationRequest.isEncrypted());

            return;
        }

        if (GNSupport.isBrowser()) {
            if (operationRequest.isEncrypted()) {
                GNDebug.logWarning("GN JS client sdk does not support send encrypted request via HTTP, so we will send this request via HTTP non encrypted");

                operationRequest.setEncrypted(false);
            }
        }

        let postType = !operationRequest.isEncrypted() ? PostType.Json : PostType.MsgPack;

        let subUri = (postType == PostType.Json ? NetworkingPeer.API_JSON : NetworkingPeer.API_MSG_PACK) + "/" + operationRequest.getOperationCode();
        let thiz = this;
        this.postRequestViaHTTPRequest(subUri, operationRequest.getParameters(), postType, {
            invoke: function (httpAppResponse: HttpAppResponse) {
                thiz.onSendOperationRequestResponse(operationPending, httpAppResponse);
            }
        }, operationRequest.getTimeout());
    }

    private onSendOperationRequestResponse(operationPending: OperationPending, httpAppResponse: HttpAppResponse): void {
        let operationRequest = operationPending.getOperationRequest();
        let obj = new GNArray();

        if (!httpAppResponse.hasError()) {
            if (httpAppResponse.statusCode == 200) {
                let encrypted: boolean = false;
                let gnArray: GNArray = null;
                if (httpAppResponse.text) {
                    if (httpAppResponse.text[0] === HttpPeer.JSON_CHAR_KNOWN) {
                        let returnDatas = JSON.parse(httpAppResponse.text);
                        gnArray = GNArray.builder()
                            .addAll(returnDatas)
                            .build();
                    }
                }

                if (gnArray == null) {
                    if (httpAppResponse.data != null) {
                        let iList = <[]>globalThis.exports.decode(httpAppResponse.data);
                        gnArray = GNArray.builder()
                            .addAll(NetworkingPeerBase.fromMsgList(iList))
                            .build();

                        encrypted = true;
                    }
                }

                if (gnArray != null) {
                    let returnCode = gnArray.getNumber(0);
                    obj.add(returnCode);

                    if (returnCode == ReturnCode.Ok)
                        obj.add(gnArray.getGNHashtable(1, new GNHashtable()));
                    else if (returnCode == ReturnCode.InvalidRequestParameters)
                        obj.add(gnArray.getGNArray(1, new GNArray()));
                    else
                        obj.add(gnArray.getString(1));
                    obj.add(operationRequest.getRequestId());

                    this.onResponseHandler(obj, encrypted);
                    return;
                }
            }
        }

        obj.add(ReturnCode.UnknownError);
        obj.add(httpAppResponse.error);
        obj.add(operationRequest.getRequestId());

        this.onResponseHandler(obj, operationRequest.isEncrypted());
    }

    getRequest(subUri: string, onHttpAppResponse: Action1<HttpAppResponse>, timeout: number = 15): void {
        this.getRequestViaHTTPRequest(subUri, onHttpAppResponse, timeout);
    }

    private async getRequestViaHTTPRequest(subUri: string, onHttpAppResponse: Action1<HttpAppResponse>, timeout: number): Promise<void> {
        let axios = globalThis.exports.axios;

        let headers: { [k: string]: any } = {};

        let authToken = GNNetwork.getAuthToken();
        if (authToken)
            headers[Commands.RequestAuthTokenCmd] = authToken;

        if (!GNSupport.isBrowser())
            headers[Commands.USER_AGENT] = HttpPeer.userAgent;

        let httpAppResponse = new HttpAppResponse();

        try {
            let result = await axios.get(this.httpUrl + "/" + subUri, {
                headers: headers,
                timeout: timeout * 1000,
                responseType: "arraybuffer",
            });

            httpAppResponse.statusCode = result.status;
            let buffers = this.toBuffers(result.data);
            httpAppResponse.data = buffers[0];
            httpAppResponse.text = buffers[1];
        } catch (error) {
            httpAppResponse.error = error.toString();
            httpAppResponse.statusCode = -1;
            httpAppResponse.text = "[-2]";

            GNDebug.logError(error);
        }

        onHttpAppResponse?.invoke(httpAppResponse);
    }

    private async postRequestViaHTTPRequest(subUri: string, param: GNHashtable, postType: PostType, onHttpAppResponse: Action1<HttpAppResponse>, timeout: number): Promise<void> {
        let axios = globalThis.exports.axios;

        let headers: { [k: string]: any } = {};

        let authToken = GNNetwork.getAuthToken();
        if (authToken)
            headers[Commands.RequestAuthTokenCmd] = authToken;

        if (!GNSupport.isBrowser())
            headers[Commands.USER_AGENT] = HttpPeer.userAgent;

        if (param == null)
            param = new GNHashtable();

        let body: any = null;
        if (postType == PostType.Json) {
            let content = param.toData();
            body = content;

            if (!GNSupport.isBrowser()) {
                headers[Commands.CONTENT_LENGHT] = JSON.stringify(body).length;
                headers[Commands.CONTENT_TYPE] = Commands.APPLICATION_JSON;
            }
        }
        else if (postType == PostType.MsgPack) {
            let content = param.toData();
            body = globalThis.exports.encode(content);

            headers[Commands.CONTENT_TYPE] = Commands.APPLICATION_MSGPACK;

            if (!GNSupport.isBrowser())
                headers[Commands.CONTENT_LENGHT] = body.length;
        }

        let httpAppResponse = new HttpAppResponse();

        try {
            let result = await axios.post(this.httpUrl + "/" + subUri, body, {
                headers: headers,
                timeout: timeout * 1000,
                responseType: "arraybuffer",
            });

            httpAppResponse.statusCode = result.status;
            let buffers = this.toBuffers(result.data);
            httpAppResponse.data = buffers[0];
            httpAppResponse.text = buffers[1];
        } catch (error) {
            httpAppResponse.error = error.toString();
            httpAppResponse.statusCode = -1;
            httpAppResponse.text = "[-2]";

            GNDebug.logError(error);
        }

        onHttpAppResponse?.invoke(httpAppResponse);
    }

    uploadFile(fileId: string, content: Uint8Array, mimetype: string, onHttpAppResponse: Action1<HttpAppResponse>, timeout: number = 60): void {
        let authToken = GNNetwork.getAuthToken();

        if (!authToken) {
            let httpAppResponse = new HttpAppResponse();
            httpAppResponse.statusCode = 401;
            httpAppResponse.error = "Auth token null";

            onHttpAppResponse?.invoke(httpAppResponse);

            return;
        }

        let subUri = NetworkingPeer.UPLOAD_FILE + "/" + fileId;

        this.postRequestUploadViaHTTPRequest(subUri, content, mimetype, onHttpAppResponse, timeout);
    }

    private async postRequestUploadViaHTTPRequest(subUri: string, content: Uint8Array, mimetype: string, onHttpAppResponse: Action1<HttpAppResponse>, timeout: number): Promise<void> {
        GNDebug.logWarning("GN JS client sdk does not support upload file yet.");

        let httpAppResponse = new HttpAppResponse();

        httpAppResponse.error = "Upload file does not support in GN JS client sdk.";
        httpAppResponse.statusCode = -1;
        httpAppResponse.text = "[-3]";

        onHttpAppResponse?.invoke(httpAppResponse);

        // let form: FormData = new FormData();
        // form.append(Commands.File, content as any as Blob, null);

        // let axios = globalThis.exports.axios;

        // let headers: { [k: string]: any } = {};

        // let authToken = GNNetwork.getAuthToken();
        // if (authToken)
        //     headers[Commands.RequestAuthTokenCmd] = authToken;

        // if (!GNSupport.isBrowser())
        //     headers[HttpPeer.USER_AGENT] = HttpPeer.userAgent;

        // let httpAppResponse = new HttpAppResponse();

        // try {
        //     let result = await axios.post(this.httpUrl + "/" + subUri, form, {
        //         headers: headers,
        //         timeout: timeout * 1000,
        //         responseType: "arraybuffer",
        //     });

        //     httpAppResponse.statusCode = result.status;
        //     let buffers = this.toBuffers(result.data);
        //     httpAppResponse.data = buffers[0];
        //     httpAppResponse.text = buffers[1];
        // } catch (error) {
        //     httpAppResponse.error = error.toString();
        //     httpAppResponse.statusCode = -1;
        //     httpAppResponse.text = "[-2]";
        // }

        // onHttpAppResponse?.invoke(httpAppResponse);
    }

    private uint8ArrayToString(uint8Array: any): string {
        return decodeURIComponent(escape(String.fromCharCode(...uint8Array)))
    }

    private toBuffers(data: any): [any, string] {
        if (GNSupport.isBrowser()) {
            data = new Uint8Array(data);
            return [data, this.uint8ArrayToString(data)];
        }

        return [data, data.toString()];
    }
}
