# GearN SDK - Cocos Creator 3.x Integration Guide

## Overview

GearN TypeScript SDK dùng được với Cocos Creator 3.x thông qua npm package.

## Installation

### 1. Cài đặt qua npm

Trong thư mục project Cocos Creator của bạn:

```bash
npm install @xmobitea/gearn-typescript-client-sdk
```

### 2. TypeScript Configuration

Đảm bảo `tsconfig.json` của project có cấu hình tương thích:

```json
{
    "compilerOptions": {
        "esModuleInterop": true,
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true
    }
}
```

## Basic Usage

### Initialize SDK

```ts
import { GNNetwork, GNServerSettings, LogType, MessageType } from "@xmobitea/gearn-typescript-client-sdk";

const settings = new GNServerSettings();
settings.config({
    serverAddress: "your-server-domain-or-ip",
    serverPort: 2202,
    serverSocketPort: 2901,
    useSsl: false,
    useSocket: true,
    useHttp: true,
    defaultTimeoutInSeconds: 20,
    messageType: MessageType.MsgPack,
    sendRate: 30,
    reconnectDelay: 1000,
    pingInterval: 3000,
    pingTimeout: 5000,
    secretKey: "your-secret-key",
    gameId: "your-game-id",
    logType: LogType.All,
});

GNNetwork.init(settings);
```

Ghi chú:

- Trên browser build của Cocos, nếu `messageType = MessageType.MsgPack` thì HTTP transport sẽ tự fallback sang JSON.
- Chỉ dùng route `.server` hoặc `.admin` khi bạn đã cấu hình secret key tương ứng.

### Authentication

```ts
import { AuthenticateModels, ErrorCode, GNNetwork } from "@xmobitea/gearn-typescript-client-sdk";

const infoRequestParam = new AuthenticateModels.InfoRequestParam();
infoRequestParam.displayName = true;
infoRequestParam.avatar = true;

const request = new AuthenticateModels.LoginByCustomDeviceIdRequestData();
request.customDeviceId = "unique-device-id";
request.createPlayerIfNotExists = true;
request.infoRequestParam = infoRequestParam;

const response = await GNNetwork.authenticate.loginByCustomDeviceIdAsync(request);

if (response.hasReturnCodeError()) {
    throw new Error(response.debugMessage);
}

if (response.errorCode !== ErrorCode.Ok) {
    throw new Error(`Business error: ${response.errorCode}`);
}

console.log("User ID:", GNNetwork.getAuthenticateStatus().getUserId());
```

### Socket Connection

Tuân theo [rule socket chuẩn trong RULES](/docs/RULES.md#7-auth--socket-flow).

```ts
import { GNNetwork } from "@xmobitea/gearn-typescript-client-sdk";

GNNetwork.subscriberOnConnectHandler(() => {
    console.log("Connected!", GNNetwork.getSocketSId());
});

GNNetwork.subscriberOnDisconnectHandler(() => {
    console.log("Disconnected!");
});

GNNetwork.connectSocket(); // Call this after a successful HTTP login or refresh flow.
```

Nếu socket đã connect trước khi token xuất hiện, hoặc token vừa đổi và bạn không muốn reconnect, gọi `GNNetwork.sendRequestAuthSocket()` để re-auth.

## Platform Detection

SDK tự động phát hiện Cocos Creator environment:

```ts
import { GNSupport } from "@xmobitea/gearn-typescript-client-sdk";

if (GNSupport.isCocosCreator()) {
    console.log("Running in Cocos Creator");
}
```

## Storage

SDK tự động dùng `cc.sys.localStorage` trong Cocos Creator để lưu auth token.

## Troubleshooting

### Module not found

Đảm bảo bạn đã chạy `npm install` trong đúng project folder.

### Build errors

Kiểm tra `tsconfig.json` có `esModuleInterop: true`, `experimentalDecorators: true`, `emitDecoratorMetadata: true`.

### Socket có connect nhưng không nhận event

- Kiểm tra app đã login HTTP trước khi `connectSocket()` chưa.
- Nếu socket connect trước khi token có sẵn, gọi `GNNetwork.sendRequestAuthSocket()` để re-auth.

## Support

- GitHub Issues: https://github.com/XmobiTea-Family/GearN-typescript-client-sdk/issues
- Homepage: https://gearn.net
