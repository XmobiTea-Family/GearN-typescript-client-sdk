# GearN TypeScript Client SDK

SDK TypeScript client cho GearN Server.

`GNNetwork` là entrypoint duy nhất ở tầng public API. Sau khi `init()`, toàn bộ thao tác đều đi qua các nhóm API tĩnh như `GNNetwork.authenticate`, `GNNetwork.dashboard`, `GNNetwork.inventory`, `GNNetwork.group`, ...

## 1. Yêu cầu

- Node.js `>= 20`
- Nếu bạn tự tạo request/response model bằng decorator: bật `experimentalDecorators` và `emitDecoratorMetadata`

Ví dụ `tsconfig.json` khi bạn dùng custom DTO:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

## 2. Cài đặt

```bash
npm install @xmobitea/gn-typescript-client
```

## 3. Cách SDK hoạt động

Flow chuẩn:

1. Tạo `GNServerSettings`
2. Gọi `GNNetwork.init(settings)` đúng 1 lần
3. Dùng các API qua `GNNetwork.*`
4. Nếu dùng socket: tự gọi `GNNetwork.connectSocket()`
5. Sau khi socket connect: tự gọi `GNNetwork.sendRequestAuthSocket()` để auth socket

Những nhóm API public hiện có:

- `GNNetwork.authenticate`
- `GNNetwork.characterPlayer`
- `GNNetwork.content`
- `GNNetwork.dashboard`
- `GNNetwork.gamePlayer`
- `GNNetwork.group`
- `GNNetwork.inventory`
- `GNNetwork.masterPlayer`
- `GNNetwork.storeInventory`
- `GNNetwork.multiplayer`
- `GNNetwork.cloudScript`

### AuthenticateApi

`GNNetwork.authenticate` là nhóm API xác thực player qua HTTP cho các flow `login`, `registerAccount` và `refreshAuthToken`, dùng `RequestType.Authenticate` với `RequestRole.Client`, đồng thời tự cập nhật auth state cache của SDK khi thành công; `GNNetwork.authenticate.server` và `GNNetwork.authenticate.admin` hiện không có operation public để gọi. Xem rule chi tiết dành cho AI code assistant tại [docs/AUTHENTICATE_API_README.md](docs/AUTHENTICATE_API_README.md).

## 4. Khởi tạo cơ bản

```ts
import {
 GNNetwork,
 GNServerSettings,
 LogType,
 MessageType,
} from "@xmobitea/gn-typescript-client";

const settings = new GNServerSettings();
settings.config({
 serverAddress: "127.0.0.1",
 serverPort: 2202,
 serverSocketPort: 2901,
 useSsl: false,
 useSocket: true,
 useHttp: true,
 defaultTimeoutInSeconds: 20,
 messageType: MessageType.MsgPack,
 sendRate: 20,
 reconnectDelay: 5000,
 pingInterval: 20000,
 pingTimeout: 20000,
 adminSecretKey: "",
 serverSecretKey: "",
 clientSecretKey: "your-client-secret",
 logType: LogType.All,
});

GNNetwork.init(settings);
```

Ghi chú:

- `GNNetwork.init()` là singleton-style. Gọi lại lần 2 sẽ bị bỏ qua.
- `clientSecretKey`, `serverSecretKey`, `adminSecretKey` được tự chọn theo `RequestRole` của từng operation.
- Nếu bạn chạy sau reverse proxy, gọi thêm:

```ts
settings.setUseReverseProxy(true);
```

## 5. Quick Start: login bằng custom device id

Ví dụ này là flow client dễ dùng nhất vì request ngắn và không cần username/password.

```ts
import {
 GNNetwork,
 AuthenticateModels,
 ReturnCode,
 ErrorCode,
} from "@xmobitea/gn-typescript-client";

const infoRequest = new AuthenticateModels.InfoRequestParam();
infoRequest.displayName = true;
infoRequest.avatar = true;
infoRequest.playerDatas = true;

const request = new AuthenticateModels.LoginByCustomDeviceIdRequestData();
request.customDeviceId = "device-000001";
request.createPlayerIfNotExists = true;
request.infoRequestParam = infoRequest;

const response = await GNNetwork.authenticate.loginByCustomDeviceIdAsync(request);

if (response.hasReturnCodeError()) {
 throw new Error(`ReturnCode failed: ${response.returnCode} - ${response.debugMessage}`);
}

if (response.errorCode !== ErrorCode.Ok) {
 throw new Error(`Business error: ${response.errorCode}`);
}

console.log("userId", GNNetwork.getAuthenticateStatus().getUserId());
console.log("authToken", GNNetwork.getAuthenticateStatus().getAuthToken());
console.log("player", response.responseData);
```

Lưu ý rất quan trọng:

- `ReturnCode.Ok === 1`
- `ErrorCode.Ok === 1`
- Không kiểm tra success bằng `0`

## 6. Login bằng account

```ts
import {
 GNNetwork,
 AuthenticateModels,
 ReturnCode,
 ErrorCode,
} from "@xmobitea/gn-typescript-client";

const infoRequest = new AuthenticateModels.InfoRequestParam();
infoRequest.displayName = true;
infoRequest.playerStatistics = true;

const request = new AuthenticateModels.LoginByAccountRequestData();
request.username = "player001";
request.password = "12345678";
request.infoRequestParam = infoRequest;

const response = await GNNetwork.authenticate.loginByAccountAsync(request);

if (response.returnCode !== ReturnCode.Ok) {
 throw new Error(response.debugMessage);
}

if (response.errorCode !== ErrorCode.Ok) {
 throw new Error(`Business error: ${response.errorCode}`);
}
```

## 7. Socket usage đúng cách

Socket không tự auth sau khi connect. Bạn phải làm đủ 2 bước:

1. `GNNetwork.connectSocket()`
2. Khi connect xong, gọi `GNNetwork.sendRequestAuthSocket()`

Ví dụ:

```ts
import { GNNetwork } from "@xmobitea/gn-typescript-client";

GNNetwork.subscriberOnConnectHandler(() => {
 console.log("socket connected", GNNetwork.getSocketSId());
 GNNetwork.sendRequestAuthSocket();
});

GNNetwork.subscriberOnDisconnectHandler(() => {
 console.log("socket disconnected");
});

GNNetwork.setOnEventHandler((event) => {
 console.log("eventCode", event.getEventCode());
 console.log("parameters", event.getParameters()?.toData());
});

GNNetwork.connectSocket();
```

Thông tin hữu ích:

- `GNNetwork.isSocketConnected()` chỉ kiểm tra dựa trên socket session id hiện tại
- `GNNetwork.getPing()` trả về ping trung bình từ transport đang active
- `GNNetwork.syncTs()` đồng bộ local estimate của server timestamp

## 8. Dashboard / admin flow

Nếu bạn dùng dashboard API, hãy cấu hình `adminSecretKey` trong `GNServerSettings`.

Ví dụ login admin:

```ts
import {
 GNNetwork,
 DashboardModels,
 ReturnCode,
 ErrorCode,
} from "@xmobitea/gn-typescript-client";

const request = new DashboardModels.LoginByAdminAccountRequestData();
request.username = "gnadmin";
request.password = "123456";

const response = await GNNetwork.dashboard.loginByAdminAccountAsync(request);

if (response.returnCode !== ReturnCode.Ok) {
 throw new Error(response.debugMessage);
}

if (response.errorCode !== ErrorCode.Ok) {
 throw new Error(`Business error: ${response.errorCode}`);
}

console.log("admin auth token", GNNetwork.getAuthenticateStatus().getAuthToken());
```

## 9. Cấu trúc method của các API

Đa số method public có 2 biến thể:

- callback style
- async/await style

Pattern chung:

```ts
method(requestData, onResponse?, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?)
methodAsync(requestData, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?)
```

Ý nghĩa các tham số phụ:

- `overrideAuthToken`: ép dùng auth token khác token hiện đang cache
- `overrideSecretKey`: ép dùng secret key khác secret key trong `GNServerSettings`
- `customTags`: gắn metadata phụ vào request
- `timeout`: override timeout cho riêng request đó

Ví dụ `customTags`:

```ts
import { GNHashtable } from "@xmobitea/gn-typescript-client";

const customTags = GNHashtable.builder()
 .add("traceId", "trace-001")
 .add("build", "qa")
 .build();
```

## 10. Response model cần hiểu đúng

Các method typed trả về class kế thừa từ `CustomOperationResponseAbstract<T>`.

Bạn sẽ gặp các field chính:

- `returnCode`: trạng thái transport/protocol
- `debugMessage`: message lỗi low-level
- `invalidMembers`: danh sách field invalid nếu request sai
- `errorCode`: business error từ backend
- `responseData`: payload typed sau khi deserialize

Thứ tự kiểm tra nên là:

```ts
if (response.hasReturnCodeError()) {
 throw new Error(response.debugMessage);
}

if (response.errorCode !== ErrorCode.Ok) {
 throw new Error(`Business error: ${response.errorCode}`);
}
```

## 11. Game id và auth state

SDK tự persist các giá trị sau qua `StorageService`:

- auth token
- user id
- game id

Bạn có thể set `gameId` thủ công:

```ts
GNNetwork.setGameId("your-game-id");
```

Đọc lại trạng thái hiện tại:

```ts
const authToken = GNNetwork.getAuthenticateStatus().getAuthToken();
const userId = GNNetwork.getAuthenticateStatus().getUserId();
const gameId = GNNetwork.getGameId();
```

## 12. Health check, auth info, upload file

### Health check

```ts
const response = await GNNetwork.healthCheckAsync();
console.log(response);
```

### Lấy auth info

```ts
const authInfo = await GNNetwork.getAuthInfoAsync("some-auth-token");
console.log(authInfo);
```

### Upload file

Upload file yêu cầu đã có auth token hợp lệ.

```ts
const bytes = new Uint8Array([1, 2, 3, 4]);

const uploadResponse = await GNNetwork.uploadFileAsync(
 "file-001",
 bytes,
 "demo.bin",
 "application/octet-stream",
);

console.log(uploadResponse);
```

Tạo URL download từ download token:

```ts
const url = GNNetwork.getDownloadFileUrl("download-token-from-server");
console.log(url);
```

## 13. Advanced: tự định nghĩa custom operation

SDK có sẵn low-level API để bạn tự bọc operation nếu backend có endpoint mới mà package chưa expose.

Ví dụ typed request/response custom:

```ts
import {
 GNNetwork,
 CustomOperationRequestAbstract,
 CustomOperationResponseAbstract,
 RequestRole,
 RequestType,
 OperationCode,
 ParameterCode,
 StringDataMember,
} from "@xmobitea/gn-typescript-client";

class ExampleRequestData {
 @StringDataMember({ code: ParameterCode.Key, mustNonNull: true })
 public key: string;
}

class ExampleResponseData {
 @StringDataMember({ code: ParameterCode.Value, isOptional: true })
 public value?: string;
}

class ExampleRequest extends CustomOperationRequestAbstract<ExampleRequestData> {
 protected override operationCode: string = OperationCode.GetCustomData;
 protected override requestType: RequestType = RequestType.CharacterPlayer;
 protected override role: RequestRole = RequestRole.Client;

 constructor(requestData: ExampleRequestData, timeout: number) {
  super(requestData, timeout);
  this.requestDataCls = ExampleRequestData;
 }
}

class ExampleResponse extends CustomOperationResponseAbstract<ExampleResponseData> {
 constructor() {
  super();
  this.responseDataCls = ExampleResponseData;
 }
}

const requestData = new ExampleRequestData();
requestData.key = "tutorial";

const response = await GNNetwork.sendViaHttpTRequestTResponseAsync(
 new ExampleRequest(requestData, 20),
 null,
 null,
 null,
 ExampleResponse,
);
```

Ghi chú:

- Khi tự tạo DTO, bạn phải dùng decorator như `StringDataMember`, `NumberDataMember`, `GNHashtableDataMember`, ...
- Khi tự tạo request class, phải gán đủ `operationCode`, `requestType`, `role`, `requestDataCls`
- Khi tự tạo response class, phải gán `responseDataCls`

## 14. Browser / Node / Cocos

SDK có logic detect platform qua `GNSupport`.

```ts
import { GNSupport } from "@xmobitea/gn-typescript-client";

console.log(GNSupport.getPlatformType());
```

Lưu ý thực tế:

- HTTP + `MessageType.MsgPack` trên browser có fallback sang JSON
- Nếu bạn dùng Cocos Creator, nên giữ `experimentalDecorators` và `emitDecoratorMetadata` bật khi có custom DTO

## 15. Build và publish

Các script hiện có trong repo:

```bash
npm run test
npm run build:node
npm run build:udm
npm run build:minudm
npm run build:cocos
npm run build
```

Ý nghĩa nhanh:

- `build:node`: build bản CommonJS cho Node
- `build:udm`: build bản UMD
- `build:minudm`: build bản UMD minified
- `build:cocos`: build bản dùng cho Cocos
- `build`: build tất cả output chính

## 16. Các lỗi hay gặp

### 1. Gọi API trước khi `GNNetwork.init()`

Triệu chứng:

- null settings
- null peer
- socket/http không hoạt động

Cách xử lý:

- luôn init một lần ở bootstrap của app

### 2. Login thành công transport nhưng fail business

Triệu chứng:

- `returnCode === ReturnCode.Ok`
- nhưng `errorCode !== ErrorCode.Ok`

Cách xử lý:

- kiểm tra cả `returnCode` lẫn `errorCode`

### 3. Socket connect rồi nhưng không nhận luồng user auth

Nguyên nhân:

- bạn connect socket nhưng không gọi `GNNetwork.sendRequestAuthSocket()`

### 4. Request không đi đúng role/secret key

Nguyên nhân:

- `GNServerSettings` thiếu secret key tương ứng với role của operation

### 5. Tưởng success code là `0`

Sai hoàn toàn với SDK này.

- `ReturnCode.Ok === 1`
- `ErrorCode.Ok === 1`

## 17. File tham khảo trong repo

- Entry public API: `src/runtime/GNNetwork.ts`
- Export surface: `src/index.ts`
- Ví dụ local debug: `index.js`
- Ví dụ Cocos: `examples/cocos-creator/GearNExample.ts.txt`

## 18. Kết luận

Nếu bạn chỉ cần dùng SDK theo cách chuẩn, hãy nhớ đúng 4 ý này:

1. `GNNetwork.init(settings)` đúng 1 lần
2. Mọi call đi qua `GNNetwork.*`
3. Kiểm tra `returnCode` trước, rồi kiểm tra `errorCode`
4. Dùng socket thì tự `connectSocket()` và tự `sendRequestAuthSocket()`
