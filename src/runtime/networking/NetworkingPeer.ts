import { Commands } from "./../constant/Commands";
import { Action0 } from "./../common/Action0";
import { Action1 } from "./../common/Action1";
import { GNArray, GNHashtable } from "./../common/GNData";
import { ReturnCode } from "./../constant/ReturnCode";
import { OperationRequest } from "./../entity/OperationRequest";
import { OperationResponse } from "./../entity/OperationResponse";
import { GNNetwork } from "./../GNNetwork";
import { IServerEventHandler } from "./handler/IServerEventHandler";
import { HttpAppResponse, HttpPeer } from "./http/HttpPeer";
import { IPeer } from "./IPeer";
import { PeerBase } from "./PeerBase";
import { SocketPeer } from "./socket/SocketPeer";
import { OperationEvent } from "./../entity/OperationEvent";
import { AuthenticateStatus } from "./AuthenticateStatus";
import { RequestType } from "./../constant/enumType/RequestType";
import { RequestRole } from "./../constant/enumType/RequestRole";

export class NetworkingPeer {
    static readonly SYNC_TS: string = "ts";
    static readonly UPLOAD_FILE: string = "upload";
    static readonly DOWNLOAD_FILE: string = "download";
    static readonly API_JSON: string = "api/" + Commands.RequestCmd_Json;
    static readonly API_MSG_PACK: string = "api/" + Commands.RequestCmd_MsgPack;

    private socketPeer: IPeer;
    private httpPeer: IPeer;

    authenticateStatus: AuthenticateStatus;
    gameId: string;

    getPing(): number {
        let count = 0;
        let totalPing = 0;

        if (this.httpPeer.isUsing()) {
            count++;
            totalPing += (<PeerBase>this.httpPeer).ping;
        }

        if (this.socketPeer.isUsing()) {
            count++;
            totalPing += (<PeerBase>this.socketPeer).ping;
        }

        return totalPing / count;
    }

    getClientId(): string {
        return (this.socketPeer as SocketPeer).getClientId();
    }

    private lastCurrentServerMilliseconds: number;
    private lastGetCurrentMilliseconds: number;

    setServerTimeMilliseconds(currentServerMilliseconds: number): void {
        this.lastCurrentServerMilliseconds = currentServerMilliseconds;
        this.lastGetCurrentMilliseconds = Date.now() / 1000;
    }

    getServerTimestamp(): number {
        return this.lastCurrentServerMilliseconds + ((Date.now() / 1000 - this.lastGetCurrentMilliseconds) * 1000);
    }

    initPeer(): void {
        this.setServerTimeMilliseconds(new Date().getUTCMilliseconds());

        let gnServerSettings = GNNetwork.getGNServerSettings();
        if (gnServerSettings == null)
            throw new Error("Null GN Server Settings, please find it now");

        this.authenticateStatus = new AuthenticateStatus();

        this.httpPeer = new HttpPeer();
        this.httpPeer.initPeer();

        this.socketPeer = new SocketPeer();
        this.socketPeer.initPeer();
    }

    service() {
        if (this.httpPeer != null) this.httpPeer.service();
        if (this.socketPeer != null) this.socketPeer.service();
    }

    sendViaSocket(requestType: RequestType, requestRole: RequestRole, request: OperationRequest, onResponse: Action1<OperationResponse> = null, authToken: string = null, secretKey: string = null, customTags: GNHashtable = null): void {
        if (authToken == null) authToken = this.authenticateStatus.getAuthToken();
        if (secretKey == null) {
            if (requestRole == RequestRole.Admin) secretKey = GNNetwork.getGNServerSettings().getAdminSecretKey();
            else if (requestRole == RequestRole.Server) secretKey = GNNetwork.getGNServerSettings().getServerSecretKey();
            else if (requestRole == RequestRole.Client) secretKey = GNNetwork.getGNServerSettings().getClientSecretKey();
        }

        this.socketPeer.enqueue(requestType, requestRole, request, onResponse, authToken, secretKey, customTags, this.gameId);
    }

    sendViaHttp(requestType: RequestType, requestRole: RequestRole, request: OperationRequest, onResponse: Action1<OperationResponse> = null, authToken: string = null, secretKey: string = null, customTags: GNHashtable = null): void {
        if (authToken == null) authToken = this.authenticateStatus.getAuthToken();
        if (secretKey == null) {
            if (requestRole == RequestRole.Admin) secretKey = GNNetwork.getGNServerSettings().getAdminSecretKey();
            else if (requestRole == RequestRole.Server) secretKey = GNNetwork.getGNServerSettings().getServerSecretKey();
            else if (requestRole == RequestRole.Client) secretKey = GNNetwork.getGNServerSettings().getClientSecretKey();
        }

        this.httpPeer.enqueue(requestType, requestRole, request, onResponse, authToken, secretKey, customTags, this.gameId);
    }

    sendRequestAuthSocket(): void {
        (this.socketPeer as SocketPeer).sendRequestAuthSocket();
    }

    connectSocket(_onSocketConnect: Action0): void {
        (this.socketPeer as SocketPeer).connect(_onSocketConnect);
    }

    disconnectSocket(_onSocketDisconnect: Action0): void {
        (this.socketPeer as SocketPeer).disconnect(_onSocketDisconnect);
    }

    setOnEventHandler(_onEventHandler: Action1<OperationEvent>): void {
        (this.socketPeer as SocketPeer).setOnEventHandler(_onEventHandler);
    }

    setOnConnectHandler(_onConnectHandler: Action0): void {
        (this.socketPeer as SocketPeer).setOnConnectHandler(_onConnectHandler);
    }

    setOnDisconnectHandler(_onDisconnectHandler: Action0): void {
        (this.socketPeer as SocketPeer).setOnDisconnectHandler(_onDisconnectHandler);
    }

    removeOnConnectHandler(_onConnectHandler: Action0): void {
        (this.socketPeer as SocketPeer).removeOnConnectHandler(_onConnectHandler);
    }

    removeOnDisconnectHandler(_onDisconnectHandler: Action0): void {
        (this.socketPeer as SocketPeer).removeOnDisconnectHandler(_onDisconnectHandler);
    }

    subscriberServerEventHandler(serverEventHandler: IServerEventHandler): void {
        (this.socketPeer as SocketPeer).subscriberAServerEventHandler(serverEventHandler);
    }

    syncTs(onResponse: Action1<number> = null): void {
        let thiz = this;

        (this.httpPeer as HttpPeer).getRequest(NetworkingPeer.SYNC_TS, (httpAppResponse: HttpAppResponse) => {
            if (!httpAppResponse.hasError()) {
                if (httpAppResponse.statusCode == 200) {
                    let returnDatas = JSON.parse(httpAppResponse.text);
                    let gnArray = GNArray.builder()
                        .addAll(returnDatas)
                        .build();

                    let returnCode = gnArray.getNumber(0);
                    if (returnCode == ReturnCode.Ok) {
                        let gnHashtable = gnArray.getGNHashtable(1);
                        let newServerTimestamp = gnHashtable.getNumber("1", new Date().getUTCMilliseconds());

                        thiz.setServerTimeMilliseconds(newServerTimestamp);
                    }
                }
            }

            if (onResponse != null) onResponse(thiz.getServerTimestamp());
        });
    }

}
