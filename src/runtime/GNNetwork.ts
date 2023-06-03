const VERSION: string = "1.0.9";

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
import { AddFriendOperationResponse } from "./entity/response/AddFriendOperationResponse";
import { RemoveFriendOperationResponse } from "./entity/response/RemoveFriendOperationResponse";
import { GetFriendsOperationResponse } from "./entity/response/GetFriendsOperationResponse";
import { FindPlayerOperationResponse } from "./entity/response/FindPlayerOperationResponse";
import { SendChatToUserOperationResponse } from "./entity/response/SendChatToUserOperationResponse";
import { GetChatMessageUserOperationResponse } from "./entity/response/GetChatMessageUserOperationResponse";
import { SendChatToChannelOperationResponse } from "./entity/response/SendChatToChannelOperationResponse";
import { JoinChatChannelOperationResponse } from "./entity/response/JoinChatChannelOperationResponse";
import { LeaveChatChannelOperationResponse } from "./entity/response/LeaveChatChannelOperationResponse";
import { GetChatInfoChannelOperationResponse } from "./entity/response/GetChatInfoChannelOperationResponse";
import { GetChatMessageChannelOperationResponse } from "./entity/response/GetChatMessageChannelOperationResponse";
import { GetChatMemberChannelOperationResponse } from "./entity/response/GetChatMemberChannelOperationResponse";
import { EditChatInfoChannelOperationResponse } from "./entity/response/EditChatInfoChannelOperationResponse";
import { EditChatMessageChannelOperationResponse } from "./entity/response/EditChatMessageChannelOperationResponse";
import { EditChatMessageUserOperationResponse } from "./entity/response/EditChatMessageUserOperationResponse";
import { GNDebug } from "./logger/GNDebug";
import { GNSupport } from "./helper/GNSupport";
import { IServerEventHandler } from "./networking/handler/IServerEventHandler";
import { HttpAppResponse } from "./networking/HttpPeer";
import { NetworkingPeer } from "./networking/NetworkingPeer";
import { CodeHelper } from "./helper/CodeHelper";
import store from "store";
import { OperationEvent } from "./entity/OperationEvent";
import { FriendItem } from "./entity/server/FriendItem";
import { ChatChannel } from "./entity/server/ChatChannel";
import { ChatUser } from "./entity/server/ChatUser";

export class GNNetwork {

    private static readonly AUTH_TOKEN_KEY = "[GN]_AUTH_TOKEN_KEY";
    private static readonly USER_ID_KEY = "[GN]_USER_ID_KEY";
    private static readonly DEVICE_ID_KEY = "[GN]_DEVICE_ID_KEY";

    private static gnServerSettings: GNServerSettings;
    public static getGNServerSettings(): GNServerSettings {
        return this.gnServerSettings;
    }

    static peer: NetworkingPeer;

    public static getPing(): number {
        return this.peer != null ? this.peer.getPing() : -1;
    }

    public static getSocketSId(): string {
        return this.peer != null ? this.peer.getClientId() : "";
    }

    public static isSocketConnected(): boolean {
        let socketSId = this.getSocketSId();

        if (socketSId) return true;
        return false;
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

    public static getFriendItemLst(): FriendItem[] {
        return this.peer.friendItemLst;
    }

    static getOnFriendItemChange(): Action1<FriendItem> {
        return this.peer.onFriendItemChange;
    }

    public static subscriberOnFriendItemChange(onHandler: Action1<FriendItem>): void {
        this.peer.onFriendItemChange = onHandler;
    }

    public static getChatChannelLst(): ChatChannel[] {
        return this.peer.chatChannelLst;
    }

    static getOnChatChannelChange(): Action1<ChatChannel> {
        return this.peer.onChatChannelChange;
    }

    public static subscriberOnChatChannelChange(onHandler: Action1<ChatChannel>): void {
        this.peer.onChatChannelChange = onHandler;
    }

    public static getChatUserLst(): ChatUser[] {
        return this.peer.chatUserLst;
    }

    static getOnChatUserChange(): Action1<ChatUser> {
        return this.peer.onChatUserChange;
    }

    public static subscriberOnChatUserChange(onHandler: Action1<ChatUser>): void {
        this.peer.onChatUserChange = onHandler;
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

    // public static sendViaSocketTRequestTResponse<TRequest extends CustomOperationRequest, TResponse extends CustomOperationResponse>(request: TRequest, onResponse: Action1<TResponse> = null): void {
    //     this.sendViaSocketTResponse(request.build(), onResponse);
    // }

    // public static sendViaHttpTRequestTResponse<TRequest extends CustomOperationRequest, TResponse extends CustomOperationResponse>(request: TRequest, onResponse: Action1<TResponse> = null): void {
    //     this.sendViaHttpTResponse(request.build(), onResponse);
    // }

    // public static sendViaSocketTResponse<TResponse extends CustomOperationResponse>(request: OperationRequest, onResponse: Action1<TResponse> = null): void {
    //     // this.sendViaSocket(request, {
    //     //     invoke: function(response) {
    //     //         if (response == null) return;
    //     //         let customOperationResponse = new TResponse();
    //     //         customOperationResponse.setupOperationResponse(response);
    //     //         onResponse?.invoke(customOperationResponse);
    //     //     }
    //     // });
    // }

    // public static sendViaHttpTResponse<TResponse extends CustomOperationResponse>(request: OperationRequest, onResponse: Action1<TResponse> = null): void {
    //     // this.sendViaHttp(request, {
    //     //     invoke: function(response) {
    //     //         if (response == null) return;
    //     //         let customOperationResponse = new TResponse();
    //     //         customOperationResponse.setupOperationResponse(response);
    //     //         onResponse?.invoke(customOperationResponse);
    //     //     }
    //     // });
    // }

    public static connectSocket(_onSocketConnect: Action0 = null): void {
        this.peer.connectSocket(_onSocketConnect);
    }

    public static disconnectSocket(_onSocketDisconnect: Action0 = null): void {
        this.peer.disconnectSocket(_onSocketDisconnect);
    }

    public static setOnEventHandler(_onEventHandler: Action1<OperationEvent>): void {
        this.peer.setOnEventHandler(_onEventHandler);
    }

    public static subscriberOnConnectHandler(_onConnectHandler: Action0): void {
        this.peer.setOnConnectHandler(_onConnectHandler);
    }

    public static subscriberOnDisconnectHandler(_onDisconnectHandler: Action0): void {
        this.peer.setOnDisconnectHandler(_onDisconnectHandler);
    }

    public static unscriberOnConnectHandler(_onConnectHandler: Action0): void {
        this.peer.removeOnConnectHandler(_onConnectHandler);
    }

    public static unsubscriberOnDisconnectHandler(_onDisconnectHandler: Action0): void {
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

    public static addFriend(friendId: string, forceAcceptFriend: boolean = false, onResponse: Action1<AddFriendOperationResponse> = null) {
        this.peer.addFriend(friendId, forceAcceptFriend, onResponse);
    }

    public static removeFriend(friendId: string, onResponse: Action1<RemoveFriendOperationResponse> = null) {
        this.peer.removeFriend(friendId, onResponse);
    }

    public static getFriends(onResponse: Action1<GetFriendsOperationResponse> = null) {
        this.peer.getFriends(onResponse);
    }

    public static findPlayer(keyword: string, skip: number = 0, limit: number = 20, onResponse: Action1<FindPlayerOperationResponse> = null) {
        this.peer.findPlayer(keyword, skip, limit, onResponse);
    }

    public static sendChatToUser(userId: string, message: string, saveToDatabase: boolean = false, onResponse: Action1<SendChatToUserOperationResponse> = null) {
        this.peer.sendChatToUser(userId, message, saveToDatabase, onResponse);
    }

    public static getChatMessageUser(userId: string, skip: number = 0, limit: number = 20, onResponse: Action1<GetChatMessageUserOperationResponse> = null) {
        this.peer.getChatMessageUser(userId, skip, limit, onResponse);
    }

    public static sendChatToChannel(channel: string, message: string, onResponse: Action1<SendChatToChannelOperationResponse> = null) {
        this.peer.sendChatToChannel(channel, message, onResponse);
    }

    public static joinChatChannel(channel: string, onResponse: Action1<JoinChatChannelOperationResponse> = null) {
        this.peer.joinChatChannel(channel, onResponse);
    }

    public static leaveChatChannel(channel: string, onResponse: Action1<LeaveChatChannelOperationResponse> = null) {
        this.peer.leaveChatChannel(channel, onResponse);
    }

    public static getChatInfoChannel(channel: string, onResponse: Action1<GetChatInfoChannelOperationResponse> = null) {
        this.peer.getChatInfoChannel(channel, onResponse);
    }

    public static getChatMessageChannel(channel: string, skip: number = 0, limit: number = 20, onResponse: Action1<GetChatMessageChannelOperationResponse> = null) {
        this.peer.getChatMessageChannel(channel, skip, limit, onResponse);
    }

    public static getChatMemberChannel(channel: string, onResponse: Action1<GetChatMemberChannelOperationResponse> = null) {
        this.peer.getChatMemberChannel(channel, onResponse);
    }

    public static editChatInfoChannel(channel: string, name: string = null, avatarChannel: GNHashtable = null, onResponse: Action1<EditChatInfoChannelOperationResponse> = null) {
        this.peer.editChatInfoChannel(channel, name, avatarChannel, onResponse);
    }

    public static editChatMessageChannel(tsCreate: number, channel: string, message: string = null, isDelete: boolean = null, onResponse: Action1<EditChatMessageChannelOperationResponse> = null) {
        this.peer.editChatMessageChannel(tsCreate, channel, message, isDelete, onResponse);
    }

    public static editChatMessageUser(tsCreate: number, userId: string, message: string = null, isDelete: boolean = null, onResponse: Action1<EditChatMessageUserOperationResponse> = null) {
        this.peer.editChatMessageUser(tsCreate, userId, message, isDelete, onResponse);
    }
}
