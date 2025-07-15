import { Action1 } from "./../../common/Action1";
import { GNArray, GNHashtable } from "./../../common/GNData";
import { ReturnCode } from "./../../constant/ReturnCode";
import { GNNetwork } from "./../../GNNetwork";
import { GNDebug } from "./../../logger/GNDebug";
import { NetworkingPeer } from "./../NetworkingPeer";
import { OperationPending } from "./../OperationPending";
import { PeerBase } from "./../PeerBase";
import { NetworkingSocketPeerBase } from "./../socket/NetworkingSocketPeerBase";
import { GNSupport } from "./../../helper/GNSupport";
import { NetworkingHttpPeerBase } from "./NetworkingHttpPeerBase";
import { NetworkingPeerAxiosRequest } from "./NetworkingPeerAxiosRequest";
import { MessagePackConverterService } from "./../../helper/MessagePackConverterService";
import { MessageType } from "./../../config/GNServerSettings";

export class HttpAppResponse {
    public statusCode: number;
    public error: string;
    public data: Uint8Array;
    public text: string;

    public hasError(): boolean {
        return this.error != null;
    }

    public toString(): string {
        let answer = " StatusCode: " + this.statusCode;
        if (this.error) answer += ", <color=red>Error: " + this.error + "</color>";
        answer += ", Text: " + this.text;

        return answer;
    }
}

export enum PostType {
    Json = 0,
    MsgPack = 1,
}

export class HttpPeer extends PeerBase {
    private networkingHttpPeerBase: NetworkingHttpPeerBase;

    private static readonly JSON_CHAR_KNOWN: string = "[";

    protected override initGNSocketObject(): void {
        let gnServerSettings = GNNetwork.getGNServerSettings();
        if (gnServerSettings == null)
            throw new Error("Where is GN Server Settings");

        this.isUse = gnServerSettings.isUseHttp();

        this.networkingHttpPeerBase = new NetworkingPeerAxiosRequest();

        let httpUrl = gnServerSettings.getHttpUrl();
        let userAgent = "GN-ts-" + GNNetwork.getPlatform() + "@" + GNNetwork.getClientSdkVersion();
        this.networkingHttpPeerBase.init(httpUrl, userAgent);
    }

    override send(operationPending: OperationPending): void {
        super.send(operationPending);

        let operationRequest = operationPending.getOperationRequest();
        GNDebug.log("[GN Http SEND] " + operationRequest.toString());

        let authToken = operationPending.getAuthToken();
        let secretKey = operationPending.getSecretKey();
        let gameId = operationPending.getGameId();
        let customTags = operationPending.getCustomTags();

        let gnServerSettings = GNNetwork.getGNServerSettings();
        let postType = gnServerSettings.getMessageType() == MessageType.Json ? PostType.Json : PostType.MsgPack;

        if (GNSupport.isBrowser()) {
            GNDebug.logWarning("GN JS client sdk does not support send encrypted request via HTTP, so we will send this request via HTTP non encrypted");
            postType = PostType.MsgPack;
        }

        let subUri = (postType == PostType.Json ? NetworkingPeer.API_JSON : NetworkingPeer.API_MSG_PACK) + "/" + operationRequest.getOperationCode() + "/" + <number>operationPending.getRequestType() + "/" + <number>operationPending.getRequestRole();
        let thiz = this;

        this.networkingHttpPeerBase.postRequest(subUri, operationRequest.getParameters(), postType, (httpAppResponse: HttpAppResponse) => {
            thiz.onSendOperationRequestResponse(operationPending, httpAppResponse);
        }, operationRequest.getTimeout(), authToken, secretKey, customTags, gameId);
    }

    protected override onEnqueue(operationPending: OperationPending): void {
        GNDebug.log("[GN Http ENQUEUE] " + operationPending.getOperationRequest().toString());
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
                        let iList = MessagePackConverterService.deserialize<[]>(httpAppResponse.data);
                        gnArray = GNArray.builder()
                            .addAll(NetworkingSocketPeerBase.fromMsgList(iList))
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

    getRequest(subUri: string, onHttpAppResponse: Action1<HttpAppResponse>, timeout: number = 15, authToken: string = null, secretKey: string = null, gameId: string = null): void {
        this.networkingHttpPeerBase.getRequest(subUri, onHttpAppResponse, timeout, authToken, secretKey, gameId);
    }

    uploadFile(fileId: string, content: Uint8Array, filename: string, mimetype: string, onHttpAppResponse: Action1<HttpAppResponse>, timeout: number = 6000): void {
        let authToken = GNNetwork.getAuthenticateStatus().getAuthToken();

        if (!authToken) {
            let httpAppResponse = new HttpAppResponse();
            httpAppResponse.statusCode = 401;
            httpAppResponse.error = "Auth token null";

            if (onHttpAppResponse != null) onHttpAppResponse(httpAppResponse);

            return;
        }

        let subUri = NetworkingPeer.UPLOAD_FILE + "/" + fileId;

        this.networkingHttpPeerBase.postRequestUpload(subUri, content, filename, mimetype, onHttpAppResponse, timeout);
    }

}
