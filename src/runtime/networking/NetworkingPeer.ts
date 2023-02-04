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
import { OperationEvent } from "./../entity/OperationEvent";
import { FriendItem } from "./../entity/server/FriendItem";
import { ChatChannel } from "./../entity/server/ChatChannel";
import { ChatUser } from "./../entity/server/ChatUser";
import { AddFriendOperationRequest } from "./../entity/request/AddFriendOperationRequest";
import { AddFriendOperationResponse } from "./../entity/response/AddFriendOperationResponse";
import { RemoveFriendOperationResponse } from "./../entity/response/RemoveFriendOperationResponse";
import { RemoveFriendOperationRequest } from "./../entity/request/RemoveFriendOperationRequest";
import { GetFriendsOperationResponse } from "./../entity/response/GetFriendsOperationResponse";
import { GetFriendsOperationRequest } from "./../entity/request/GetFriendsOperationRequest";
import { FriendErrorCode } from "./../constant/errorCode/FriendErrorCode";
import { FindPlayerOperationResponse } from "./../entity/response/FindPlayerOperationResponse";
import { FindPlayerOperationRequest } from "./../entity/request/FindPlayerOperationRequest";
import { SendChatToUserOperationRequest } from "./../entity/request/SendChatToUserOperationRequest";
import { SendChatToUserOperationResponse } from "./../entity/response/SendChatToUserOperationResponse";
import { GetChatMessageUserOperationResponse } from "./../entity/response/GetChatMessageUserOperationResponse";
import { GetChatMessageUserOperationRequest } from "./../entity/request/GetChatMessageUserOperationRequest";
import { SendChatToChannelOperationResponse } from "./../entity/response/SendChatToChannelOperationResponse";
import { SendChatToChannelOperationRequest } from "./../entity/request/SendChatToChannelOperationRequest";
import { JoinChatChannelOperationResponse } from "./../entity/response/JoinChatChannelOperationResponse";
import { JoinChatChannelOperationRequest } from "./../entity/request/JoinChatChannelOperationRequest";
import { LeaveChatChannelOperationResponse } from "./../entity/response/LeaveChatChannelOperationResponse";
import { LeaveChatChannelOperationRequest } from "./../entity/request/LeaveChatChannelOperationRequest";
import { GetChatInfoChannelOperationResponse } from "./../entity/response/GetChatInfoChannelOperationResponse";
import { GetChatInfoChannelOperationRequest } from "./../entity/request/GetChatInfoChannelOperationRequest";
import { GetChatMessageChannelOperationResponse } from "./../entity/response/GetChatMessageChannelOperationResponse";
import { GetChatMessageChannelOperationRequest } from "./../entity/request/GetChatMessageChannelOperationRequest";
import { GetChatMemberChannelOperationResponse } from "./../entity/response/GetChatMemberChannelOperationResponse";
import { GetChatMemberChannelOperationRequest } from "./../entity/request/GetChatMemberChannelOperationRequest";
import { EditChatInfoChannelOperationResponse } from "./../entity/response/EditChatInfoChannelOperationResponse";
import { EditChatInfoChannelOperationRequest } from "./../entity/request/EditChatInfoChannelOperationRequest";
import { EditChatMessageChannelOperationRequest } from "./../entity/request/EditChatMessageChannelOperationRequest";
import { EditChatMessageChannelOperationResponse } from "./../entity/response/EditChatMessageChannelOperationResponse";
import { EditChatMessageUserOperationResponse } from "./../entity/response/EditChatMessageUserOperationResponse";
import { EditChatMessageUserOperationRequest } from "./../entity/request/EditChatMessageUserOperationRequest";
import { FriendStatus } from "./../constant/enumType/FriendStatus";
import { ChatErrorCode } from "./../constant/errorCode/ChatErrorCode";
import { ChatMessage, EditChatMessage } from "./../entity/server/ChatMessage";
import { AvatarChannel } from "./../entity/server/AvatarChannel";
import { UserChannel } from "./../entity/server/UserChannel";

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

    friendItemLst: FriendItem[];
    onFriendItemChange: Action1<FriendItem>;

    chatChannelLst: ChatChannel[];
    onChatChannelChange: Action1<ChatChannel>;

    chatUserLst: ChatUser[];
    onChatUserChange: Action1<ChatUser>;

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

        this.friendItemLst = [];
        this.chatChannelLst = [];
        this.chatUserLst = [];

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

    getConfig(configName: string, onResponse: Action1<string>): void {
        (this.httpPeer as HttpPeer).getRequest(NetworkingPeer.GET_CONFIG + "/" + configName, (httpAppResponse: HttpAppResponse) => {
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

                        if (onResponse != null) onResponse(configStr);
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

        this.sendViaHttp(request, (response: OperationResponse) => {
            let debugOperationResponse = new DebugOperationResponse();
            debugOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(debugOperationResponse);
        });
    }

    enterDisplayName(displayName: string, onResponse: Action1<EnterDisplayNameOperationResponse> = null): void {
        let request = new EnterDisplayNameOperationRequest(displayName).build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let enterDisplayNameOperationResponse = new EnterDisplayNameOperationResponse();
            enterDisplayNameOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(enterDisplayNameOperationResponse);
        });
    }

    fetchAllData(onResponse: Action1<FetchAllDataOperationResponse> = null): void {
        let request = new FetchAllDataOperationRequest().build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let fetchAllDataOperationResponse = new FetchAllDataOperationResponse();
            fetchAllDataOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(fetchAllDataOperationResponse);
        });
    }

    fetchSparkPlayer(onResponse: Action1<FetchSparkPlayerOperationResponse> = null): void {
        let request = new FetchSparkPlayerOperationRequest().build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let fetchSparkPlayerOperationResponse = new FetchSparkPlayerOperationResponse();
            fetchSparkPlayerOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(fetchSparkPlayerOperationResponse);
        });
    }

    getAppConfig(configTypes: GNArray, onResponse: Action1<GetAppConfigOperationResponse> = null): void {
        let request = new GetAppConfigOperationRequest(configTypes).build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let getAppConfigOperationResponse = new GetAppConfigOperationResponse();
            getAppConfigOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(getAppConfigOperationResponse);
        });
    }

    accountLogin(username: string, password: string, onResponse: Action1<LoginOperationResponse> = null): void {
        let request = new AccountLoginOperationRequest(username, password).build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let loginOperationResponse = new LoginOperationResponse();
            loginOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(loginOperationResponse);
        });
    }

    deviceLogin(onResponse: Action1<LoginOperationResponse> = null): void {
        let request = new DeviceLoginOperationRequest(GNNetwork.getDeviceInfo()).build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let loginOperationResponse = new LoginOperationResponse();
            loginOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(loginOperationResponse);
        });
    }

    facebookLogin(facebookToken: string, onResponse: Action1<LoginOperationResponse> = null): void {
        let request = new FacebookLoginOperationRequest(facebookToken).build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let loginOperationResponse = new LoginOperationResponse();
            loginOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(loginOperationResponse);
        });
    }

    googleLogin(googleToken: string, googleLoginType: number, onResponse: Action1<LoginOperationResponse> = null): void {
        let request = new GoogleLoginOperationRequest(googleToken, googleLoginType).build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let loginOperationResponse = new LoginOperationResponse();
            loginOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(loginOperationResponse);
        });
    }

    appleLogin(appleToken: string, displayName: string, onResponse: Action1<LoginOperationResponse> = null): void {
        let request = new AppleLoginOperationRequest(appleToken, displayName).build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let loginOperationResponse = new LoginOperationResponse();
            loginOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(loginOperationResponse);
        });
    }

    userIdLogin(userId: string, onResponse: Action1<LoginOperationResponse> = null): void {
        let request = new UserIdLoginOperationRequest(userId).build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let loginOperationResponse = new LoginOperationResponse();
            loginOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(loginOperationResponse);
        });
    }

    publicAddressLogin(signature: string, publicAddress: string, message: string, onResponse: Action1<LoginOperationResponse> = null): void {
        let request = new PublicAddressLoginOperationRequest(signature, publicAddress, message).build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let loginOperationResponse = new LoginOperationResponse();
            loginOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(loginOperationResponse);
        });
    }

    publicAddressGetRandomMessage(onResponse: Action1<PublicAddressGetRandomMessageOperationResponse> = null): void {
        let request = new PublicAddressGetRandomMessageOperationRequest().build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let publicAddressGetRandomMessageOperationResponse = new PublicAddressGetRandomMessageOperationResponse();
            publicAddressGetRandomMessageOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(publicAddressGetRandomMessageOperationResponse);
        });
    }

    customIdLogin(customId: string, onResponse: Action1<LoginOperationResponse> = null): void {
        let request = new CustomIdLoginOperationRequest(customId).build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let loginOperationResponse = new LoginOperationResponse();
            loginOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(loginOperationResponse);
        });
    }

    registerAccount(username: string, password: string, onResponse: Action1<RegisterAccountOperationResponse> = null): void {
        let request = new RegisterAccountOperationRequest(username, password).build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let registerAccountOperationResponse = new RegisterAccountOperationResponse();
            registerAccountOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(registerAccountOperationResponse);
        });
    }

    registerSocket(sid: string, onResponse: Action1<RegisterSocketOperationResponse> = null): void {
        let request = new RegisterSocketOperationRequest(sid).build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let registerSocketOperationResponse = new RegisterSocketOperationResponse();
            registerSocketOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(registerSocketOperationResponse);
        });
    }

    template(booleanValue: boolean, onResponse: Action1<TemplateOperationResponse> = null): void {
        let request = new TemplateOperationRequest(booleanValue).build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let templateOperationResponse = new TemplateOperationResponse();
            templateOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(templateOperationResponse);
        });
    }

    createNewFileUploadInfo(originFileName: string, onResponse: Action1<CreateNewFileUploadInfoOperationResponse> = null): void {
        let request = new CreateNewFileUploadInfoOperationRequest(originFileName).build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let createNewFileUploadInfoOperationResponse = new CreateNewFileUploadInfoOperationResponse();
            createNewFileUploadInfoOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(createNewFileUploadInfoOperationResponse);
        });
    }

    getFileUploadInfo(fileId: string, onResponse: Action1<GetFileUploadInfoOperationResponse> = null): void {
        let request = new GetFileUploadInfoOperationRequest(fileId).build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let getFileUploadInfoOperationResponse = new GetFileUploadInfoOperationResponse();
            getFileUploadInfoOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(getFileUploadInfoOperationResponse);
        });
    }

    logout(onResponse: Action1<LogoutOperationResponse> = null): void {
        let request = new LogoutOperationRequest().build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let logoutOperationResponse = new LogoutOperationResponse();
            logoutOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(logoutOperationResponse);
        });
    }

    addFriend(friendId: string, forceAcceptFriend: boolean = false, onResponse: Action1<AddFriendOperationResponse> = null) {
        let request = new AddFriendOperationRequest(friendId, forceAcceptFriend).build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let addFriendOperationResponse = new AddFriendOperationResponse();
            addFriendOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(addFriendOperationResponse);
        });
    }

    removeFriend(friendId: string, onResponse: Action1<RemoveFriendOperationResponse> = null) {
        let request = new RemoveFriendOperationRequest(friendId).build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let removeFriendOperationResponse = new RemoveFriendOperationResponse();
            removeFriendOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(removeFriendOperationResponse);
        });
    }

    getFriends(onResponse: Action1<GetFriendsOperationResponse> = null) {
        let request = new GetFriendsOperationRequest().build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let getFriendsOperationResponse = new GetFriendsOperationResponse();
            getFriendsOperationResponse.setupOperationResponse(response);

            this.friendItemLst.length = 0;

            if (getFriendsOperationResponse.errorCode == FriendErrorCode.Ok) {
                let friendLst = getFriendsOperationResponse.friendLst;
                for (let i = 0; i < friendLst.length; i++) {
                    let friend = friendLst[i];

                    let friendItem = new FriendItem();
                    friendItem.friendId = friend.friendId;
                    friendItem.friendStatus = <FriendStatus>friend.friendStatus;
                    friendItem.isSocialLoginFriend = friend.isSocialLoginFriend;
                    friendItem.tsLastUpdate = friend.tsLastUpdate;

                    this.friendItemLst.push(friendItem);
                }
            }

            if (onResponse != null) onResponse(getFriendsOperationResponse);
        });
    }

    findPlayer(keyword: string, skip: number = 0, limit: number = 20, onResponse: Action1<FindPlayerOperationResponse> = null) {
        let request = new FindPlayerOperationRequest(keyword, skip, limit).build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let findPlayerOperationResponse = new FindPlayerOperationResponse();
            findPlayerOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(findPlayerOperationResponse);
        });
    }

    sendChatToUser(userId: string, message: string, saveToDatabase: boolean = false, onResponse: Action1<SendChatToUserOperationResponse> = null) {
        let request = new SendChatToUserOperationRequest(userId, message, saveToDatabase).build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let sendChatToUserOperationResponse = new SendChatToUserOperationResponse();
            sendChatToUserOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(sendChatToUserOperationResponse);
        });
    }

    getChatMessageUser(userId: string, skip: number = 0, limit: number = 20, onResponse: Action1<GetChatMessageUserOperationResponse> = null) {
        let request = new GetChatMessageUserOperationRequest(userId, skip, limit).build();

        this.sendViaHttp(request, response => {
            let getChatMessageUserOperationResponse = new GetChatMessageUserOperationResponse();
            getChatMessageUserOperationResponse.setupOperationResponse(response);

            if (getChatMessageUserOperationResponse.errorCode == ChatErrorCode.Ok) {
                let chatUser = this.chatUserLst.find(x => x.userId == userId);

                if (chatUser == null) {
                    chatUser = new ChatUser();
                    chatUser.userId = userId;
                    chatUser.messages = [];

                    this.chatUserLst.push(chatUser);
                }

                for (let i = 0; i < getChatMessageUserOperationResponse.messages.length; i++) {
                    let responseMessage = getChatMessageUserOperationResponse.messages[i];

                    let message = chatUser.messages.find(x => x.tsCreate == responseMessage.tsCreate);
                    if (message == null) {
                        message = new ChatMessage();
                        message.tsCreate = responseMessage.tsCreate;
                        message.messageEditeds = [];

                        chatUser.messages.push(message);
                    }

                    message.senderId = responseMessage.senderId;
                    message.tsLastUpdate = responseMessage.tsLastUpdate;
                    message.message = responseMessage.message;

                    message.messageEditeds.length = 0;

                    for (let j = 0; j < responseMessage.messageEditeds.length; j++) {
                        let responseMessageEdited = responseMessage.messageEditeds[j];

                        let editChatMessage = new EditChatMessage();
                        editChatMessage.message = responseMessageEdited.message;
                        editChatMessage.tsCreate = responseMessageEdited.tsCreate;

                        message.messageEditeds.push(editChatMessage);
                    }

                    message.isDelete = responseMessage.isDelete;
                }

                if (this.onChatUserChange != null) this.onChatUserChange(chatUser);
            }

            if (onResponse != null) onResponse(getChatMessageUserOperationResponse);
        });
    }

    sendChatToChannel(channel: string, message: string, onResponse: Action1<SendChatToChannelOperationResponse> = null) {
        let request = new SendChatToChannelOperationRequest(channel, message).build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let sendChatToChannelOperationResponse = new SendChatToChannelOperationResponse();
            sendChatToChannelOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(sendChatToChannelOperationResponse);
        });
    }

    joinChatChannel(channel: string, onResponse: Action1<JoinChatChannelOperationResponse> = null) {
        let request = new JoinChatChannelOperationRequest(channel).build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let joinChatChannelOperationResponse = new JoinChatChannelOperationResponse();
            joinChatChannelOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(joinChatChannelOperationResponse);
        });
    }

    leaveChatChannel(channel: string, onResponse: Action1<LeaveChatChannelOperationResponse> = null) {
        let request = new LeaveChatChannelOperationRequest(channel).build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let leaveChatChannelOperationResponse = new LeaveChatChannelOperationResponse();
            leaveChatChannelOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(leaveChatChannelOperationResponse);
        });
    }

    getChatInfoChannel(channel: string, onResponse: Action1<GetChatInfoChannelOperationResponse> = null) {
        let request = new GetChatInfoChannelOperationRequest(channel).build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let getChatInfoChannelOperationResponse = new GetChatInfoChannelOperationResponse();
            getChatInfoChannelOperationResponse.setupOperationResponse(response);

            if (getChatInfoChannelOperationResponse.errorCode == ChatErrorCode.Ok) {
                let chatChannel = this.chatChannelLst.find(x => x.channel == channel);

                if (chatChannel == null) {
                    chatChannel = new ChatChannel();
                    chatChannel.channel = channel;

                    chatChannel.avatarChannel = new AvatarChannel();
                    chatChannel.users = [];
                    chatChannel.messages = [];

                    this.chatChannelLst.push(chatChannel);
                }

                let channelInfo = getChatInfoChannelOperationResponse.channelInfo;

                chatChannel.avatarChannel.type = channelInfo.avatarChannel.type;
                chatChannel.avatarChannel.value = channelInfo.avatarChannel.value;

                chatChannel.tsCreate = channelInfo.tsCreate;
                chatChannel.name = channelInfo.name;
                chatChannel.channelType = channelInfo.channelType;
                chatChannel.userCount = channelInfo.userCount;

                if (this.onChatChannelChange != null) this.onChatChannelChange(chatChannel);
            }

            if (onResponse != null) onResponse(getChatInfoChannelOperationResponse);
        });
    }

    getChatMessageChannel(channel: string, skip: number = 0, limit: number = 20, onResponse: Action1<GetChatMessageChannelOperationResponse> = null) {
        let request = new GetChatMessageChannelOperationRequest(channel, skip, limit).build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let getChatMessageChannelOperationResponse = new GetChatMessageChannelOperationResponse();
            getChatMessageChannelOperationResponse.setupOperationResponse(response);

            if (getChatMessageChannelOperationResponse.errorCode == ChatErrorCode.Ok) {
                let chatChannel = this.chatChannelLst.find(x => x.channel == channel);

                if (chatChannel == null) {
                    chatChannel = new ChatChannel();
                    chatChannel.channel = channel;

                    chatChannel.avatarChannel = new AvatarChannel();
                    chatChannel.users = [];
                    chatChannel.messages = [];

                    this.chatChannelLst.push(chatChannel);
                }

                let channelInfo = getChatMessageChannelOperationResponse.channelInfo;

                for (let i = 0; i < channelInfo.messages.length; i++) {
                    let responseMessage = channelInfo.messages[i];

                    let message = chatChannel.messages.find(x => x.tsCreate == responseMessage.tsCreate);
                    if (message == null) {
                        message = new ChatMessage();
                        message.tsCreate = responseMessage.tsCreate;
                        message.messageEditeds = [];

                        chatChannel.messages.push(message);
                    }

                    message.senderId = responseMessage.senderId;
                    message.tsLastUpdate = responseMessage.tsLastUpdate;
                    message.message = responseMessage.message;

                    message.messageEditeds.length = 0;

                    for (let j = 0; j < responseMessage.messageEditeds.length; j++) {
                        let responseMessageEdited = responseMessage.messageEditeds[j];

                        let editChatMessage = new EditChatMessage();
                        editChatMessage.message = responseMessageEdited.message;
                        editChatMessage.tsCreate = responseMessageEdited.tsCreate;

                        message.messageEditeds.push(editChatMessage);
                    }

                    message.isDelete = responseMessage.isDelete;
                }

                if (this.onChatChannelChange != null) this.onChatChannelChange(chatChannel);
            }

            if (onResponse != null) onResponse(getChatMessageChannelOperationResponse);
        });
    }

    getChatMemberChannel(channel: string, onResponse: Action1<GetChatMemberChannelOperationResponse> = null) {
        let request = new GetChatMemberChannelOperationRequest(channel).build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let getChatMemberChannelOperationResponse = new GetChatMemberChannelOperationResponse();
            getChatMemberChannelOperationResponse.setupOperationResponse(response);

            if (getChatMemberChannelOperationResponse.errorCode == ChatErrorCode.Ok) {
                let chatChannel = this.chatChannelLst.find(x => x.channel == channel);

                if (chatChannel == null) {
                    chatChannel = new ChatChannel();
                    chatChannel.channel = channel;

                    chatChannel.avatarChannel = new AvatarChannel();
                    chatChannel.users = [];
                    chatChannel.messages = [];

                    this.chatChannelLst.push(chatChannel);
                }

                let channelInfo = getChatMemberChannelOperationResponse.channelInfo;

                chatChannel.users.length = 0;

                for (let i = 0; i < channelInfo.members.length; i++) {
                    let member = channelInfo.members[i];

                    let userChannel = new UserChannel();
                    userChannel.userId = member.userId;
                    userChannel.tsJoin = member.tsJoin;

                    chatChannel.users.push(userChannel);
                }

                chatChannel.userCount = chatChannel.users.length;

                if (this.onChatChannelChange != null) this.onChatChannelChange(chatChannel);
            }

            if (onResponse != null) onResponse(getChatMemberChannelOperationResponse);
        });
    }

    editChatInfoChannel(channel: string, name: string = null, avatarChannel: GNHashtable = null, onResponse: Action1<EditChatInfoChannelOperationResponse> = null) {
        let request = new EditChatInfoChannelOperationRequest(channel, name, avatarChannel).build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let editChatInfoChannelOperationResponse = new EditChatInfoChannelOperationResponse();
            editChatInfoChannelOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(editChatInfoChannelOperationResponse);
        });
    }

    editChatMessageChannel(tsCreate: number, channel: string, message: string = null, isDelete: boolean = null, onResponse: Action1<EditChatMessageChannelOperationResponse> = null) {
        let request = new EditChatMessageChannelOperationRequest(tsCreate, channel, message, isDelete).build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let editChatMessageChannelOperationResponse = new EditChatMessageChannelOperationResponse();
            editChatMessageChannelOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(editChatMessageChannelOperationResponse);
        });
    }

    editChatMessageUser(tsCreate: number, userId: string, message: string = null, isDelete: boolean = null, onResponse: Action1<EditChatMessageUserOperationResponse> = null) {
        let request = new EditChatMessageUserOperationRequest(tsCreate, userId, message, isDelete).build();

        this.sendViaHttp(request, (response: OperationResponse) => {
            let editChatMessageChannelOperationResponse = new EditChatMessageUserOperationResponse();
            editChatMessageChannelOperationResponse.setupOperationResponse(response);

            if (onResponse != null) onResponse(editChatMessageChannelOperationResponse);
        });
    }

}
