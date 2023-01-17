const VERSION: string = "1.0.1";

import { Action0 } from "./common/Action0";
import { Action1 } from "./common/Action1";
import { GNArray, GNHashtable } from "./common/GNData";
import { GNServerSettings } from "./config/GNServerSettings";
import { GoogleLoginType } from "./constant/enumType/GoogleLoginType";
import { OperationRequest } from "./entity/OperationRequest";
import { OperationResponse } from "./entity/OperationResponse";
import { CreateNewFileUploadInfoOperationResponse } from "./entity/response/CreateNewFileUploadInfoOperationResponse";
import { DebugOperationResponse } from "./entity/response/DebugOperationResponse";
import { EnterDisplayNameOperationResponse } from "./entity/response/EnterDisplayNameOperationResponse";
import { FetchAllDataOperationResponse } from "./entity/response/FetchAllDataOperationResponse";
import { FetchSparkPlayerOperationResponse } from "./entity/response/FetchSparkPlayerOperationResponse";
import { GetAppConfigOperationResponse } from "./entity/response/GetAppConfigOperationResponse";
import { GetFileUploadInfoOperationResponse } from "./entity/response/GetFileUploadInfoOperationResponse";
import { LoginOperationResponse } from "./entity/response/LoginOperationResponse";
import { LogoutOperationResponse } from "./entity/response/LogoutOperationResponse";
import { PublicAddressGetRandomMessageOperationResponse } from "./entity/response/PublicAddressGetRandomMessageOperationResponse";
import { RegisterAccountOperationResponse } from "./entity/response/RegisterAccountOperationResponse";
import { RegisterSocketOperationResponse } from "./entity/response/RegisterSocketOperationResponse";
import { TemplateOperationResponse } from "./entity/response/TemplateOperationResponse";
import { GNDebug } from "./logger/GNDebug";
import { GNSupport } from "./helper/GNSupport";
import { IServerEventHandler } from "./networking/handler/IServerEventHandler";
import { HttpAppResponse } from "./networking/HttpPeer";
import { NetworkingPeer } from "./networking/NetworkingPeer";
import { CodeHelper } from "./helper/CodeHelper";
import { CustomOperationRequest } from "./entity/request/CustomOperationRequest";
import { CustomOperationResponse } from "./entity/response/CustomOperationResponse";
import store from "store";

export class GNNetwork {

    private static readonly AUTH_TOKEN_KEY = "[GN]_AUTH_TOKEN_KEY";
    private static readonly USER_ID_KEY = "[GN]_USER_ID_KEY";
    private static readonly DEVICE_ID_KEY = "[GN]_DEVICE_ID_KEY";

    private static gnServerSettings: GNServerSettings;
    public static getGNServerSettings(): GNServerSettings {
        return this.gnServerSettings;
    }

    static peer: NetworkingPeer;

    static getPing(): number {
        return this.peer != null ? this.peer.getPing() : -1;
    }

    static getServerTimestamp(): number {
        return this.peer != null ? this.peer.getServerTimestamp() : new Date().getUTCMilliseconds();
    }

    public static setAuthToken(authToken: string): void {
        this.peer.authToken = authToken;

        store.set(GNNetwork.AUTH_TOKEN_KEY, authToken);

        this.peer.sendRequestAuthSocket();
    }

    public static getAuthToken(): string {
        return this.peer.authToken;
    }

    public static setUserId(userId: string): void {
        this.peer.userId = userId;

        store.set(GNNetwork.USER_ID_KEY, userId);
    }

    public static getUserId(): string {
        return this.peer.userId;
    }

    public static getPlatform(): number {
        return 17;
    }

    private static generateRandomDeviceId(): string {
        const RandomCharacter: string = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const MaxLength: number = 16;

        let answer = "";

        while (answer.length < MaxLength) {
            answer += RandomCharacter[Math.floor(Math.random() * (RandomCharacter.length - 0) + 0)];

            if (answer.length == 8
                || answer.length == 13
                || answer.length == 18
                || answer.length == 23)
                answer += '-';
        }

        return answer;
    }

    public static getDeviceId(): string {
        let deviceId = store.get(GNNetwork.DEVICE_ID_KEY);

        if (!deviceId) {
            deviceId = this.generateRandomDeviceId();
            store.set(GNNetwork.DEVICE_ID_KEY, deviceId);
        }

        return deviceId;
    }

    public static getDeviceInfo(): string {
        return this.getPlatform() + "_" + this.getDeviceId();
    }

    public static init(gnServerSettings: GNServerSettings): void {
        if (this.gnServerSettings != null) {
            GNDebug.log("GNNetwork has been init!");

            return;
        }

        GNSupport.init();
        CodeHelper.init();

        GNDebug.log("GNNetwork init on " + GNSupport.isBrowser() ? "browser." : "server.");

        this.gnServerSettings = gnServerSettings;

        this.initServerSettings();
        this.initGNDebug();

        this.initGNSocketObject();

        let authToken = store.get(GNNetwork.AUTH_TOKEN_KEY, "");
        this.peer.authToken = authToken;

        let userId = store.get(GNNetwork.USER_ID_KEY, "");
        this.peer.userId = userId;
    }

    public static getClientSdkVersion(): string {
        return VERSION;
    }

    private static initServerSettings(): void {
        //         gnServerSettings = Resources.Load(GNServerSettings.ResourcesPath) as GNServerSettings;
        //         if (gnServerSettings == null)
        //         {
        // #if UNITY_EDITOR
        //             UnityEditor.EditorApplication.ExecuteMenuItem("XmobiTea GN/Open Settings");
        //             gnServerSettings = Resources.Load(GNServerSettings.ResourcesPath) as GNServerSettings;
        //             if (gnServerSettings == null) throw new NullReferenceException("Null GN Server Settings, please find it now");
        // #endif
        //         }
    }

    private static initGNDebug(): void {
        if (this.gnServerSettings == null)
            throw new Error("Null EUN Server Settings, please find it now");

        GNDebug.setLogType(this.gnServerSettings.getLogType());
    }

    private static initGNSocketObject(): void {
        this.peer = new NetworkingPeer();

        this.peer.initPeer();
    }

    public static sendViaSocket(request: OperationRequest, onResponse: Action1<OperationResponse> = null): void {
        this.peer.sendViaSocket(request, onResponse);
    }

    public static sendViaHttp(request: OperationRequest, onResponse: Action1<OperationResponse> = null): void {
        this.peer.sendViaHttp(request, onResponse);
    }

    public static sendViaSocketTRequestTResponse<TRequest extends CustomOperationRequest, TResponse extends CustomOperationResponse>(request: TRequest, onResponse: Action1<TResponse> = null): void {
        this.sendViaSocketTResponse(request.build(), onResponse);
    }

    public static sendViaHttpTRequestTResponse<TRequest extends CustomOperationRequest, TResponse extends CustomOperationResponse>(request: TRequest, onResponse: Action1<TResponse> = null): void {
        this.sendViaHttpTResponse(request.build(), onResponse);
    }

    public static sendViaSocketTResponse<TResponse extends CustomOperationResponse>(request: OperationRequest, onResponse: Action1<TResponse> = null): void {
        // this.sendViaSocket(request, {
        //     invoke: function(response) {
        //         if (response == null) return;
        //         let customOperationResponse = new TResponse();
        //         customOperationResponse.setupOperationResponse(response);
        //         onResponse?.invoke(customOperationResponse);
        //     }
        // });
    }

    public static sendViaHttpTResponse<TResponse extends CustomOperationResponse>(request: OperationRequest, onResponse: Action1<TResponse> = null): void {
        // this.sendViaHttp(request, {
        //     invoke: function(response) {
        //         if (response == null) return;
        //         let customOperationResponse = new TResponse();
        //         customOperationResponse.setupOperationResponse(response);
        //         onResponse?.invoke(customOperationResponse);
        //     }
        // });
    }

    public static connectSocket(_onSocketConnect: Action0 = null): void {
        this.peer.connectSocket(_onSocketConnect);
    }

    public static disconnectSocket(_onSocketDisconnect: Action0 = null): void {
        this.peer.disconnectSocket(_onSocketDisconnect);
    }

    public static setOnConnectHandler(_onConnectHandler: Action0): void {
        this.peer.setOnConnectHandler(_onConnectHandler);
    }

    public static setOnDisconnectHandler(_onDisconnectHandler: Action0): void {
        this.peer.setOnDisconnectHandler(_onDisconnectHandler);
    }

    public static removeOnConnectHandler(_onConnectHandler: Action0): void {
        this.peer.removeOnConnectHandler(_onConnectHandler);
    }

    public static removeOnDisconnectHandler(_onDisconnectHandler: Action0): void {
        this.peer.removeOnDisconnectHandler(_onDisconnectHandler);
    }

    public static subscriberServerEventHandler(serverEventHandler: IServerEventHandler): void {
        this.peer.subscriberServerEventHandler(serverEventHandler);
    }

    public static syncTs(onResponse: Action1<number> = null): void {
        this.peer.syncTs(onResponse);
    }

    public static getConfig(configName: string, onResponse: Action1<string>): void {
        this.peer.getConfig(configName, onResponse);
    }

    public static downloadFile(fileId: string, onHttpAppResponse: Action1<HttpAppResponse>): void {
        this.peer.downloadFile(fileId, onHttpAppResponse);
    }

    public static uploadFile(fileId: string, content: Uint8Array, mimeType: string, onHttpAppResponse: Action1<HttpAppResponse>): void {
        this.peer.uploadFile(fileId, content, mimeType, onHttpAppResponse);
    }

    public static debug(booleanValue: boolean, numberValue: number, stringValue: string, gnHashtableValue: GNHashtable, gnArrayValue: GNArray, onResponse: Action1<DebugOperationResponse> = null): void {
        this.peer.debug(booleanValue, numberValue, stringValue, gnHashtableValue, gnArrayValue, onResponse);
    }

    public static enterDisplayName(displayName: string, onResponse: Action1<EnterDisplayNameOperationResponse> = null): void {
        this.peer.enterDisplayName(displayName, onResponse);
    }

    public static fetchAllData(onResponse: Action1<FetchAllDataOperationResponse> = null): void {
        this.peer.fetchAllData(onResponse);
    }

    public static fetchSparkPlayer(onResponse: Action1<FetchSparkPlayerOperationResponse> = null): void {
        this.peer.fetchSparkPlayer(onResponse);
    }

    public static getAppConfig(configTypes: GNArray, onResponse: Action1<GetAppConfigOperationResponse> = null): void {
        this.peer.getAppConfig(configTypes, onResponse);
    }

    public static accountLogin(username: string, password: string, onResponse: Action1<LoginOperationResponse> = null): void {
        this.peer.accountLogin(username, password, onResponse);
    }

    public static deviceLogin(onResponse: Action1<LoginOperationResponse> = null): void {
        this.peer.deviceLogin(onResponse);
    }

    public static facebookLogin(facebookToken: string, onResponse: Action1<LoginOperationResponse> = null): void {
        this.peer.facebookLogin(facebookToken, onResponse);
    }

    public static googleLogin(googleToken: string, googleLoginType: GoogleLoginType, onResponse: Action1<LoginOperationResponse> = null): void {
        this.peer.googleLogin(googleToken, <number>googleLoginType, onResponse);
    }

    public static appleLogin(appleToken: string, displayName: string = null, onResponse: Action1<LoginOperationResponse> = null): void {
        this.peer.appleLogin(appleToken, displayName, onResponse);
    }

    public static userIdLogin(userId: string, onResponse: Action1<LoginOperationResponse> = null): void {
        this.peer.userIdLogin(userId, onResponse);
    }

    public static publicAddressLogin(signature: string, publicAddress: string, message: string, onResponse: Action1<LoginOperationResponse> = null): void {
        this.peer.publicAddressLogin(signature, publicAddress, message, onResponse);
    }

    public static publicAddressGetRandomMessage(onResponse: Action1<PublicAddressGetRandomMessageOperationResponse> = null): void {
        this.peer.publicAddressGetRandomMessage(onResponse);
    }

    public static customIdLogin(customId: string, onResponse: Action1<LoginOperationResponse> = null): void {
        this.peer.customIdLogin(customId, onResponse);
    }

    public static registerAccount(username: string, password: string, onResponse: Action1<RegisterAccountOperationResponse> = null): void {
        this.peer.registerAccount(username, password, onResponse);
    }

    public static registerSocket(sid: string, onResponse: Action1<RegisterSocketOperationResponse> = null): void {
        this.peer.registerSocket(sid, onResponse);
    }

    public static template(booleanValue: boolean, onResponse: Action1<TemplateOperationResponse> = null): void {
        this.peer.template(booleanValue, onResponse);
    }

    public static createNewFileUploadInfo(originFileName: string, onResponse: Action1<CreateNewFileUploadInfoOperationResponse> = null): void {
        this.peer.createNewFileUploadInfo(originFileName, onResponse);
    }

    public static getFileUploadInfo(fileId: string, onResponse: Action1<GetFileUploadInfoOperationResponse> = null): void {
        this.peer.getFileUploadInfo(fileId, onResponse);
    }

    public static logout(onResponse: Action1<LogoutOperationResponse> = null): void {
        this.peer.logout(onResponse);
    }

}
