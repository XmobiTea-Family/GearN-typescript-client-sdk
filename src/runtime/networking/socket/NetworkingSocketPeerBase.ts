import { MessagePackConverterService } from "./../../helper/MessagePackConverterService";
import { Action0 } from "./../../common/Action0";
import { Action2 } from "./../../common/Action2";
import { GNArray, GNHashtable } from "./../../common/GNData";
import { RequestRole } from "./../../constant/enumType/RequestRole";
import { RequestType } from "./../../constant/enumType/RequestType";
import { OperationRequest } from "./../../entity/OperationRequest";
import { GNNetwork } from "./../../GNNetwork";
import { GNDebug } from "./../../logger/GNDebug";

export class SocketPacket {
    public obj: any;
    public encrypted: boolean;

    constructor(obj: any, encrypted: boolean) {
        this.obj = obj;
        this.encrypted = encrypted;
    }
}

class Action0List {
    private handlers: Action0[];

    subscriber(action: Action0) {
        this.handlers.push(action);
    }

    unsubscriber(action: Action0) {
        let indexOf = this.handlers.indexOf(action);
        if (indexOf != -1) this.handlers.splice(indexOf, 1);
    }

    invoke() {
        this.handlers.forEach((a) => {
            if (a != null) a();
        });
    }

    constructor() {
        this.handlers = [];
    }
}

export abstract class NetworkingSocketPeerBase {
    protected reconnectDelay: number;
    protected pingInterval: number;
    protected pingTimeout: number;

    clientId: string;
    isWsConnected: boolean;

    // protected internal object messageLstLock;
    protected responsePacketLst: SocketPacket[];
    protected eventPacketLst: SocketPacket[];

    protected url: string;

    private _onEventHandler: Action2<GNArray, boolean>;
    private _onResponseHandler: Action2<GNArray, boolean>;

    private _onSocketConnect: Action0;
    private _onSocketDisconnect: Action0;

    private _onConnectHandler: Action0List;
    private _onDisconnectHandler: Action0List;

    constructor() {
        this.clientId = "";

        this._onConnectHandler = new Action0List();
        this._onDisconnectHandler = new Action0List();
    }

    init(url: string, reconnectDelay: number, pingInterval: number, pingTimeout: number): void {
        this.responsePacketLst = [];
        this.eventPacketLst = [];

        this.url = url;

        this.reconnectDelay = reconnectDelay;
        this.pingInterval = pingInterval;
        this.pingTimeout = pingTimeout;
    }

    connect(_onSocketConnect: Action0): void {
        this._onSocketConnect = _onSocketConnect;
    }

    close(_onSocketDisconnect: Action0): void {
        this._onSocketDisconnect = _onSocketDisconnect;
    }

    sendRequestAuthSocket(): void {
    }

    send(requestType: RequestType, requestRole: RequestRole, operationRequest: OperationRequest, authToken: string, secretKey: string, customTags: GNHashtable, gameId: string) {
        this.emit(requestType, requestRole, operationRequest, authToken, secretKey, customTags, gameId);
    }

    protected emit(requestType: RequestType, requestRole: RequestRole, operationRequest: OperationRequest, authToken: string, secretKey: string, customTags: GNHashtable, gameId: string): void {

    }

    reInitNewSocket(): void {
    }

    setOnConnectHandler(_onConnectHandler: Action0): void {
        this._onConnectHandler.subscriber(_onConnectHandler);
    }

    setOnDisconnectHandler(_onDisconnectHandler: Action0): void {
        this._onDisconnectHandler.subscriber(_onDisconnectHandler);
    }

    removeOnConnectHandler(_onConnectHandler: Action0): void {
        this._onConnectHandler.unsubscriber(_onConnectHandler);
    }

    removeOnDisconnectHandler(_onDisconnectHandler: Action0): void {
        this._onDisconnectHandler.unsubscriber(_onDisconnectHandler);
    }

    onConnectHandler(): void {
        this._onConnectHandler.invoke();

        let authToken = GNNetwork.getAuthenticateStatus().getAuthToken();
        if (authToken != null) {
            this.sendRequestAuthSocket();
        }

        if (this._onSocketConnect != null) {
            this._onSocketConnect();
            this._onSocketConnect = null;
        }
    }

    onDisconnectHandler(): void {
        this._onDisconnectHandler.invoke();

        if (this._onSocketDisconnect != null) {
            this._onSocketDisconnect();
            this._onSocketDisconnect = null;
        }
    }

    setOnEventHandler(_onEventHandler: Action2<GNArray, boolean>): void {
        this._onEventHandler = _onEventHandler;
    }

    onEventHandler(obj: GNArray, isEncrypted: boolean): void {
        if (this._onEventHandler != null) this._onEventHandler(obj, isEncrypted);
    }

    setOnResponseHandler(_onResponseHandler: Action2<GNArray, boolean>): void {
        this._onResponseHandler = _onResponseHandler;
    }

    onResponseHandler(obj: GNArray, isEncrypted: boolean): void {
        if (this._onResponseHandler != null) this._onResponseHandler(obj, isEncrypted);
    }

    static fromMsgList(objects: any[]): any[] {
        let answer: any[] = [];
        for (let i = 0; i < objects.length; i++) {
            let value = objects[i];

            answer.push(value);
        }

        return answer;
    }

    static fromJsonList(objects: any): any[] {
        return <[]>objects;
    }

    service(): void {
        if (this.responsePacketLst.length > 0) {
            for (let i = 0; i < this.responsePacketLst.length; i++) {
                let responsePacket = this.responsePacketLst[i];
                if (responsePacket.encrypted) {
                    try {
                        let iList = MessagePackConverterService.deserialize<[]>(responsePacket.obj);
                        let gnArray = GNArray.builder()
                            .addAll(NetworkingSocketPeerBase.fromMsgList(iList))
                            .build();
                        this.onResponseHandler(gnArray, responsePacket.encrypted);
                    }
                    catch (ex: any) {
                        GNDebug.logException(ex);
                    }
                }
                else {
                    try {
                        let iList = responsePacket.obj;
                        let gnArray = GNArray.builder()
                            .addAll(NetworkingSocketPeerBase.fromJsonList(iList))
                            .build();
                        this.onResponseHandler(gnArray, responsePacket.encrypted);
                    }
                    catch (ex: any) {
                        GNDebug.logException(ex);
                    }
                }
            }
            this.responsePacketLst.length = 0;
        }

        if (this.eventPacketLst.length > 0) {
            for (let i = 0; i < this.eventPacketLst.length; i++) {
                let eventPacket = this.eventPacketLst[i];
                if (eventPacket.encrypted) {
                    try {
                        let iList = MessagePackConverterService.deserialize<[]>(eventPacket.obj);
                        let gnArray = GNArray.builder()
                            .addAll(NetworkingSocketPeerBase.fromMsgList(iList))
                            .build();
                        this.onEventHandler(gnArray, eventPacket.encrypted);
                    }
                    catch (ex: any) {
                        GNDebug.logException(ex);
                    }
                }
                else {
                    try {
                        let iList = eventPacket.obj;
                        let gnArray = GNArray.builder()
                            .addAll(NetworkingSocketPeerBase.fromJsonList(iList))
                            .build();
                        this.onEventHandler(gnArray, eventPacket.encrypted);
                    }
                    catch (ex: any) {
                        GNDebug.logException(ex);
                    }
                }
            }
            this.eventPacketLst.length = 0;
        }
    }
}
