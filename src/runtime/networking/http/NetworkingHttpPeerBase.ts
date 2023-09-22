import { Action1 } from "../../common/Action1";
import { GNHashtable } from "../../common/GNData";
import { HttpAppResponse, PostType } from "./HttpPeer";

export abstract class NetworkingHttpPeerBase {
    protected httpUrl: string;
    protected userAgent: string;

    public abstract getRequest(subUri: string, onHttpAppResponse: Action1<HttpAppResponse>, timeout: number, authToken: string, secretKey: string): void;

    public abstract postRequest(subUri: string, param: GNHashtable, postType: PostType, onHttpAppResponse: Action1<HttpAppResponse>, timeout: number, authToken: string, secretKey: string, customTags: GNHashtable): void;

    public abstract postRequestUpload(subUri: string, content: Uint8Array, mimetype: string, onHttpAppResponse: Action1<HttpAppResponse>, timeout: number): void;

    public init(httpUrl: string, userAgent: string): void {
        this.httpUrl = httpUrl;
        this.userAgent = userAgent;
    }

}
