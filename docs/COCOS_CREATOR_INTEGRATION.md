# GearN SDK - Cocos Creator 3.x Integration Guide

## Overview

GearN TypeScript SDK hỗ trợ đầy đủ Cocos Creator 3.x thông qua npm package.

## Installation

### 1. Cài đặt qua npm

Trong thư mục project Cocos Creator của bạn:

```bash
npm install @xmobitea/gn-typescript-client
```

### 2. TypeScript Configuration

Đảm bảo `tsconfig.json` của Cocos Creator project có cài đặt tương thích:

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

```typescript
import { GNNetwork, GNServerSettings, LogType, MessageType } from '@xmobitea/gn-typescript-client';

// Tạo server settings
const settings = new GNServerSettings({
    httpUrl: "http://your-server:8080",
    socketUrl: "ws://your-server:8080",
    secretKey: "your-secret-key",
    useSocket: true,
    useHttp: true,
    logType: LogType.All,
    sendRate: 30,
    messageType: MessageType.MsgPack,
});

// Initialize
GNNetwork.init(settings);
```

### Authentication

```typescript
// Login với Device ID
const response = await GNNetwork.authenticate.loginDeviceIdAsync({
    deviceId: "unique-device-id",
    createAccount: true,
});

if (!response.hasError()) {
    console.log("User ID:", GNNetwork.getAuthenticateStatus().getUserId());
}
```

### Socket Connection

```typescript
// Subscribe events
GNNetwork.subscriberOnConnectHandler(() => {
    console.log("Connected!");
    GNNetwork.sendRequestAuthSocket();
});

GNNetwork.subscriberOnDisconnectHandler(() => {
    console.log("Disconnected!");
});

// Connect
GNNetwork.connectSocket();
```

## Example Component

Xem file mẫu hoàn chỉnh tại: [examples/cocos-creator/GearNExample.ts](../examples/cocos-creator/GearNExample.ts)

## Platform Detection

SDK tự động phát hiện Cocos Creator environment:

```typescript
import { GNSupport } from '@xmobitea/gn-typescript-client';

if (GNSupport.isCocosCreator()) {
    console.log("Running in Cocos Creator");
}
```

## Storage

SDK tự động sử dụng `cc.sys.localStorage` trong Cocos Creator để lưu auth token.

## Troubleshooting

### Module not found
Đảm bảo đã chạy `npm install` trong project folder.

### Build errors
Kiểm tra `tsconfig.json` có `esModuleInterop: true`.

## Support

- GitHub Issues: https://github.com/XmobiTea-Family/GearN-typescript-client-sdk/issues
- Homepage: https://gearn.net
