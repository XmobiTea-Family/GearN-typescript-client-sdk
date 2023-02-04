import { Action0 } from "./../common/Action0";
import { Action2 } from "./../common/Action2";
import { GNArray } from "./../common/GNData";
import { OperationRequest } from "./../entity/OperationRequest";
import { GNNetwork } from "./../GNNetwork";
import { GNDebug } from "./../logger/GNDebug";
import { decode } from "@msgpack/msgpack";

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

export abstract class NetworkingPeerBase {
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
        this._onConnectHandler = new Action0List();
        this._onDisconnectHandler = new Action0List();
    }

    init(url: string, reconnectDelay: number, pingInterval: number, pingTimeout: number): void {
        this.responsePacketLst = [];
        this.eventPacketLst = [];
        this.clientId = "";

        this.url = url;

        this.reconnectDelay = reconnectDelay;
        this.pingInterval = pingInterval;
        this.pingTimeout = pingTimeout;
    }

    onApplicationQuit(): void {
        this.close(null);
    }

    connect(_onSocketConnect: Action0): void {
        this._onSocketConnect = _onSocketConnect;
    }

    close(_onSocketDisconnect: Action0): void {
        this._onSocketDisconnect = _onSocketDisconnect;
    }

    sendRequestAuthSocket(): void {
    }

    send(operationRequest: OperationRequest) {
        this.emit(operationRequest);
    }

    protected abstract emit(operationRequest: OperationRequest): void;

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

        let authToken = GNNetwork.getAuthToken();
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

    // internal static System.Collections.IDictionary fromMsgKeyValuePairs(KeyValuePair<object, object>[] keyValuePairs)
    // {
    //     let answer = new Dictionary<object, object>();
    //     for (let i = 0; i < keyValuePairs.Length; i++)
    //     {
    //         let keyValuePair = keyValuePairs[i];
    //         let key = keyValuePair.Key;
    //         let value = keyValuePair.Value;
    //         if (value is KeyValuePair<object, object>[] keyValuePairs1)
    //         {
    //             answer[key] = fromMsgKeyValuePairs(keyValuePairs1);
    //         }
    //         else if (value is object[] objects1)
    //         {
    //             answer[key] = fromMsgList(objects1);
    //         }
    //         else
    //         {
    //             answer[key] = value;
    //         }
    //     }
    //     return answer;
    // }

    static fromMsgList(objects: any[]): any[] {
        let answer: any[] = [];
        for (let i = 0; i < objects.length; i++) {
            let value = objects[i];
            // if (value is KeyValuePair<object, object>[] keyValuePairs1)
            // {
            //     answer.Add(fromMsgKeyValuePairs(keyValuePairs1));
            // }
            // else if (value is object[] objects1)
            // {
            //     answer.Add(fromMsgList(objects1));
            // }
            // else
            // {
            //     answer.Add(value);
            // }

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
                        let iList = <[]>decode(responsePacket.obj);
                        let gnArray = GNArray.builder()
                            .addAll(NetworkingPeerBase.fromMsgList(iList))
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
                            .addAll(NetworkingPeerBase.fromJsonList(iList))
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
                        let iList = <[]>decode(eventPacket.obj);
                        let gnArray = GNArray.builder()
                            .addAll(NetworkingPeerBase.fromMsgList(iList))
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
                            .addAll(NetworkingPeerBase.fromJsonList(iList))
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
