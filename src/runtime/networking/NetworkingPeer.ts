import { Commands } from "./../constant/Commands";
import { Action0 } from "./../common/Action0";
import { Action1 } from "./../common/Action1";
import { GNArray, GNHashtable } from "./../common/GNData";
import { ReturnCode } from "./../constant/ReturnCode";
import { OperationRequest } from "./../entity/OperationRequest";
import { OperationResponse } from "./../entity/OperationResponse";
import { CreateNewFileUploadInfoOperationRequest } from "./../entity/request/CreateNewFileUploadInfoOperationRequest";
import { DebugOperationRequest } from "./../entity/request/DebugOperationRequest";
import { EnterDisplayNameOperationRequest } from "./../entity/request/EnterDisplayNameOperationRequest";
import { FetchAllDataOperationRequest } from "./../entity/request/FetchAllDataOperationRequest";
import { FetchSparkPlayerOperationRequest } from "./../entity/request/FetchSparkPlayerOperationRequest";
import { GetAppConfigOperationRequest } from "./../entity/request/GetAppConfigOperationRequest";
import { GetFileUploadInfoOperationRequest } from "./../entity/request/GetFileUploadInfoOperationRequest";
import { AccountLoginOperationRequest, AppleLoginOperationRequest, CustomIdLoginOperationRequest, DeviceLoginOperationRequest, FacebookLoginOperationRequest, GoogleLoginOperationRequest, PublicAddressGetRandomMessageOperationRequest, PublicAddressLoginOperationRequest, UserIdLoginOperationRequest } from "./../entity/request/LoginOperationRequest";
import { LogoutOperationRequest } from "./../entity/request/LogoutOperationRequest";
import { RegisterAccountOperationRequest } from "./../entity/request/RegisterAccountOperationRequest";
import { RegisterSocketOperationRequest } from "./../entity/request/RegisterSocketOperationRequest";
import { TemplateOperationRequest } from "./../entity/request/TemplateOperationRequest";
import { CreateNewFileUploadInfoOperationResponse } from "./../entity/response/CreateNewFileUploadInfoOperationResponse";
import { DebugOperationResponse } from "./../entity/response/DebugOperationResponse";
import { EnterDisplayNameOperationResponse } from "./../entity/response/EnterDisplayNameOperationResponse";
import { FetchAllDataOperationResponse } from "./../entity/response/FetchAllDataOperationResponse";
import { FetchSparkPlayerOperationResponse } from "./../entity/response/FetchSparkPlayerOperationResponse";
import { GetAppConfigOperationResponse } from "./../entity/response/GetAppConfigOperationResponse";
import { GetFileUploadInfoOperationResponse } from "./../entity/response/GetFileUploadInfoOperationResponse";
import { LoginOperationResponse } from "./../entity/response/LoginOperationResponse";
import { LogoutOperationResponse } from "./../entity/response/LogoutOperationResponse";
import { PublicAddressGetRandomMessageOperationResponse } from "./../entity/response/PublicAddressGetRandomMessageOperationResponse";
import { RegisterAccountOperationResponse } from "./../entity/response/RegisterAccountOperationResponse";
import { RegisterSocketOperationResponse } from "./../entity/response/RegisterSocketOperationResponse";
import { TemplateOperationResponse } from "./../entity/response/TemplateOperationResponse";
import { GNNetwork } from "./../GNNetwork";
import { IServerEventHandler } from "./handler/IServerEventHandler";
import { HttpAppResponse, HttpPeer } from "./HttpPeer";
import { IPeer } from "./IPeer";
import { PeerBase } from "./PeerBase";
import { SocketPeer } from "./SocketPeer";

export class NetworkingPeer {
    static readonly SYNC_TS: string = "ts";
    static readonly UPLOAD_FILE: string = "upload";
    static readonly DOWNLOAD_FILE: string = "upload";
    static readonly GET_CONFIG: string = "getConfig";
    static readonly API_JSON: string = "api/" + Commands.RequestCmd_Json;
    static readonly API_MSG_PACK: string = "api/" + Commands.RequestCmd_MsgPack;

    private socketPeer: IPeer;
    private httpPeer: IPeer;

    authToken: string = "";
    userId: string = "";

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

    private update() {
        this.service();
    }

    private service() {
        this.httpPeer.service();
        this.socketPeer.service();
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

        this.httpPeer = new HttpPeer();
        this.httpPeer.initPeer();

        this.socketPeer = new SocketPeer();
        this.socketPeer.initPeer();

        setInterval(() => this.update(), 50);
    }

    sendViaSocket(request: OperationRequest, onResponse: Action1<OperationResponse> = null): void {
        this.socketPeer.enqueue(request, onResponse);
    }

    sendViaHttp(request: OperationRequest, onResponse: Action1<OperationResponse> = null): void {
        this.httpPeer.enqueue(request, onResponse);
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

        (this.httpPeer as HttpPeer).getRequest(NetworkingPeer.SYNC_TS, {
            invoke: function (httpAppResponse: HttpAppResponse) {
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

                onResponse?.invoke(thiz.getServerTimestamp());
            }
        });
    }

    getConfig(configName: string, onResponse: Action1<string>): void {
        (this.httpPeer as HttpPeer).getRequest(NetworkingPeer.GET_CONFIG + "/" + configName, {
            invoke: function (httpAppResponse: HttpAppResponse) {
                if (!httpAppResponse.hasError()) {
                    if (httpAppResponse.statusCode == 200) {
                        let returnDatas = JSON.parse(httpAppResponse.text);
                        let gnArray = GNArray.builder()
                            .addAll(returnDatas)
                            .build();

                        let returnCode = gnArray.getNumber(0);
                        if (returnCode == ReturnCode.Ok) {
                            let gnHashtable = gnArray.getGNHashtable(1);
                            let configStr = gnHashtable.getString("1");

                            onResponse?.invoke(configStr);
                        }
                    }
                }
            }
        });
    }

    downloadFile(fileId: string, onHttpAppResponse: Action1<HttpAppResponse>): void {
        (this.httpPeer as HttpPeer).getRequest(NetworkingPeer.DOWNLOAD_FILE + "/" + fileId, onHttpAppResponse);
    }

    uploadFile(fileId: string, content: Uint8Array, mimeType: string, onHttpAppResponse: Action1<HttpAppResponse>): void {
        (this.httpPeer as HttpPeer).uploadFile(fileId, content, mimeType, onHttpAppResponse);
    }

    debug(booleanValue: boolean, numberValue: number, stringValue: string, gnHashtableValue: GNHashtable, gnArrayValue: GNArray, onResponse: Action1<DebugOperationResponse> = null): void {
        let request = new DebugOperationRequest(booleanValue, numberValue, stringValue, gnHashtableValue, gnArrayValue).build();

        this.sendViaHttp(request, {
            invoke: function (response: OperationResponse) {
                let debugOperationResponse = new DebugOperationResponse();
                debugOperationResponse.setupOperationResponse(response);

                onResponse?.invoke(debugOperationResponse);
            }
        });
    }

    enterDisplayName(displayName: string, onResponse: Action1<EnterDisplayNameOperationResponse> = null): void {
        let request = new EnterDisplayNameOperationRequest(displayName).build();

        this.sendViaHttp(request, {
            invoke: function (response: OperationResponse) {
                let enterDisplayNameOperationResponse = new EnterDisplayNameOperationResponse();
                enterDisplayNameOperationResponse.setupOperationResponse(response);

                onResponse?.invoke(enterDisplayNameOperationResponse);
            }
        });
    }

    fetchAllData(onResponse: Action1<FetchAllDataOperationResponse> = null): void {
        let request = new FetchAllDataOperationRequest().build();

        this.sendViaHttp(request, {
            invoke: function (response: OperationResponse) {
                let fetchAllDataOperationResponse = new FetchAllDataOperationResponse();
                fetchAllDataOperationResponse.setupOperationResponse(response);

                onResponse?.invoke(fetchAllDataOperationResponse);
            }
        });
    }

    fetchSparkPlayer(onResponse: Action1<FetchSparkPlayerOperationResponse> = null): void {
        let request = new FetchSparkPlayerOperationRequest().build();

        this.sendViaHttp(request, {
            invoke: function (response: OperationResponse) {
                let fetchSparkPlayerOperationResponse = new FetchSparkPlayerOperationResponse();
                fetchSparkPlayerOperationResponse.setupOperationResponse(response);

                onResponse?.invoke(fetchSparkPlayerOperationResponse);
            }
        });
    }

    getAppConfig(configTypes: GNArray, onResponse: Action1<GetAppConfigOperationResponse> = null): void {
        let request = new GetAppConfigOperationRequest(configTypes).build();

        this.sendViaHttp(request, {
            invoke: function (response: OperationResponse) {
                let getAppConfigOperationResponse = new GetAppConfigOperationResponse();
                getAppConfigOperationResponse.setupOperationResponse(response);

                onResponse?.invoke(getAppConfigOperationResponse);
            }
        });
    }

    accountLogin(username: string, password: string, onResponse: Action1<LoginOperationResponse> = null): void {
        let request = new AccountLoginOperationRequest(username, password).build();

        this.sendViaHttp(request, {
            invoke: function (response: OperationResponse) {
                let loginOperationResponse = new LoginOperationResponse();
                loginOperationResponse.setupOperationResponse(response);

                onResponse?.invoke(loginOperationResponse);
            }
        });
    }

    deviceLogin(onResponse: Action1<LoginOperationResponse> = null): void {
        let request = new DeviceLoginOperationRequest(GNNetwork.getDeviceInfo()).build();

        this.sendViaHttp(request, {
            invoke: function (response: OperationResponse) {
                let loginOperationResponse = new LoginOperationResponse();
                loginOperationResponse.setupOperationResponse(response);

                onResponse?.invoke(loginOperationResponse);
            }
        });
    }

    facebookLogin(facebookToken: string, onResponse: Action1<LoginOperationResponse> = null): void {
        let request = new FacebookLoginOperationRequest(facebookToken).build();

        this.sendViaHttp(request, {
            invoke: function (response: OperationResponse) {
                let loginOperationResponse = new LoginOperationResponse();
                loginOperationResponse.setupOperationResponse(response);

                onResponse?.invoke(loginOperationResponse);
            }
        });
    }

    googleLogin(googleToken: string, googleLoginType: number, onResponse: Action1<LoginOperationResponse> = null): void {
        let request = new GoogleLoginOperationRequest(googleToken, googleLoginType).build();

        this.sendViaHttp(request, {
            invoke: function (response: OperationResponse) {
                let loginOperationResponse = new LoginOperationResponse();
                loginOperationResponse.setupOperationResponse(response);

                onResponse?.invoke(loginOperationResponse);
            }
        });
    }

    appleLogin(appleToken: string, displayName: string, onResponse: Action1<LoginOperationResponse> = null): void {
        let request = new AppleLoginOperationRequest(appleToken, displayName).build();

        this.sendViaHttp(request, {
            invoke: function (response: OperationResponse) {
                let loginOperationResponse = new LoginOperationResponse();
                loginOperationResponse.setupOperationResponse(response);

                onResponse?.invoke(loginOperationResponse);
            }
        });
    }

    userIdLogin(userId: string, onResponse: Action1<LoginOperationResponse> = null): void {
        let request = new UserIdLoginOperationRequest(userId).build();

        this.sendViaHttp(request, {
            invoke: function (response: OperationResponse) {
                let loginOperationResponse = new LoginOperationResponse();
                loginOperationResponse.setupOperationResponse(response);

                onResponse?.invoke(loginOperationResponse);
            }
        });
    }

    publicAddressLogin(signature: string, publicAddress: string, message: string, onResponse: Action1<LoginOperationResponse> = null): void {
        let request = new PublicAddressLoginOperationRequest(signature, publicAddress, message).build();

        this.sendViaHttp(request, {
            invoke: function (response: OperationResponse) {
                let loginOperationResponse = new LoginOperationResponse();
                loginOperationResponse.setupOperationResponse(response);

                onResponse?.invoke(loginOperationResponse);
            }
        });
    }

    publicAddressGetRandomMessage(onResponse: Action1<PublicAddressGetRandomMessageOperationResponse> = null): void {
        let request = new PublicAddressGetRandomMessageOperationRequest().build();

        this.sendViaHttp(request, {
            invoke: function (response: OperationResponse) {
                let publicAddressGetRandomMessageOperationResponse = new PublicAddressGetRandomMessageOperationResponse();
                publicAddressGetRandomMessageOperationResponse.setupOperationResponse(response);

                onResponse?.invoke(publicAddressGetRandomMessageOperationResponse);
            }
        });
    }

    customIdLogin(customId: string, onResponse: Action1<LoginOperationResponse> = null): void {
        let request = new CustomIdLoginOperationRequest(customId).build();

        this.sendViaHttp(request, {
            invoke: function (response: OperationResponse) {
                let loginOperationResponse = new LoginOperationResponse();
                loginOperationResponse.setupOperationResponse(response);

                onResponse?.invoke(loginOperationResponse);
            }
        });
    }

    registerAccount(username: string, password: string, onResponse: Action1<RegisterAccountOperationResponse> = null): void {
        let request = new RegisterAccountOperationRequest(username, password).build();

        this.sendViaHttp(request, {
            invoke: function (response: OperationResponse) {
                let registerAccountOperationResponse = new RegisterAccountOperationResponse();
                registerAccountOperationResponse.setupOperationResponse(response);

                onResponse?.invoke(registerAccountOperationResponse);
            }
        });
    }

    registerSocket(sid: string, onResponse: Action1<RegisterSocketOperationResponse> = null): void {
        let request = new RegisterSocketOperationRequest(sid).build();

        this.sendViaHttp(request, {
            invoke: function (response: OperationResponse) {
                let registerSocketOperationResponse = new RegisterSocketOperationResponse();
                registerSocketOperationResponse.setupOperationResponse(response);

                onResponse?.invoke(registerSocketOperationResponse);
            }
        });
    }

    template(booleanValue: boolean, onResponse: Action1<TemplateOperationResponse> = null): void {
        let request = new TemplateOperationRequest(booleanValue).build();

        this.sendViaHttp(request, {
            invoke: function (response: OperationResponse) {
                let templateOperationResponse = new TemplateOperationResponse();
                templateOperationResponse.setupOperationResponse(response);

                onResponse?.invoke(templateOperationResponse);
            }
        });
    }

    createNewFileUploadInfo(originFileName: string, onResponse: Action1<CreateNewFileUploadInfoOperationResponse> = null): void {
        let request = new CreateNewFileUploadInfoOperationRequest(originFileName).build();

        this.sendViaHttp(request, {
            invoke: function (response: OperationResponse) {
                let createNewFileUploadInfoOperationResponse = new CreateNewFileUploadInfoOperationResponse();
                createNewFileUploadInfoOperationResponse.setupOperationResponse(response);

                onResponse?.invoke(createNewFileUploadInfoOperationResponse);
            }
        });
    }

    getFileUploadInfo(fileId: string, onResponse: Action1<GetFileUploadInfoOperationResponse> = null): void {
        let request = new GetFileUploadInfoOperationRequest(fileId).build();

        this.sendViaHttp(request, {
            invoke: function (response: OperationResponse) {
                let getFileUploadInfoOperationResponse = new GetFileUploadInfoOperationResponse();
                getFileUploadInfoOperationResponse.setupOperationResponse(response);

                onResponse?.invoke(getFileUploadInfoOperationResponse);
            }
        });
    }

    logout(onResponse: Action1<LogoutOperationResponse> = null): void {
        let request = new LogoutOperationRequest().build();

        this.sendViaHttp(request, {
            invoke: function (response: OperationResponse) {
                let logoutOperationResponse = new LogoutOperationResponse();
                logoutOperationResponse.setupOperationResponse(response);

                onResponse?.invoke(logoutOperationResponse);
            }
        });
    }
}
