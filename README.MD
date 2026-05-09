# GearN TypeScript Client SDK

SDK TypeScript client cho GearN Server.

`GNNetwork` là entrypoint duy nhất ở tầng public API. Sau `init()`, toàn bộ thao tác đi qua các nhóm API tĩnh, gồm: `GNNetwork.authenticate`, `GNNetwork.masterPlayer`, `GNNetwork.gamePlayer`, `GNNetwork.characterPlayer`, `GNNetwork.group`, `GNNetwork.inventory`, `GNNetwork.storeInventory`, `GNNetwork.content`, `GNNetwork.multiplayer`, `GNNetwork.cloudScript`, `GNNetwork.dashboard`.

> **AI / code assistant:** đọc [docs/AI_CHEATSHEET.md](/docs/AI_CHEATSHEET.md) trước (one-page), rồi [docs/RULES.md](/docs/RULES.md) cho rule chi tiết (route, permission, self/other-self, socket, error). Machine-readable manifest: [docs/ai-manifest.json](/docs/ai-manifest.json).

Package publish: `@xmobitea/gearn-typescript-client-sdk`. Rule canonical: [docs/RULES.md](/docs/RULES.md).

## 1. Yêu cầu

- Node.js ≥ 20.
- Custom DTO có decorator: bật `experimentalDecorators` + `emitDecoratorMetadata` trong `tsconfig.json`.

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
npm install @xmobitea/gearn-typescript-client-sdk
```

## 3. Cách SDK hoạt động

Flow chuẩn:

1. Tạo `GNServerSettings`.
```ts
const settings = new GNServerSettings();
settings.config({
  serverAddress: "api.example.com",
  serverPort: 443,
  serverSocketPort: 443,
  useSsl: true,
  useSocket: true,
  useHttp: true,
  defaultTimeoutInSeconds: 20,
  messageType: MessageType.MsgPack,
  sendRate: 20,
  reconnectDelay: 5000,
  pingInterval: 20000,
  pingTimeout: 20000,
  logType: LogType.Error,
  secretKey: "<secret-key>",
  gameId: "<game-id>",
});
```
2. Gọi `GNNetwork.init(settings)` đúng 1 lần khi app chạy lần đầu tiên.
```ts
GNNetwork.init(settings);
```
3. Gọi API qua `GNNetwork.*`.
```ts
const infoRequestParam = new AuthenticateModels.InfoRequestParam();
infoRequestParam.countryCode = true;
infoRequestParam.displayName = true;

const loginRequest = new AuthenticateModels.LoginByCustomIdRequestData();
loginRequest.customId = "a custom id, store this custom id and use it to login next time";
loginRequest.createPlayerIfNotExists = true;
loginRequest.infoRequestParam = infoRequestParam;

const loginByCustomIdResponse = await GNNetwork.authenticate.loginByCustomIdAsync(loginRequest);

if (loginByCustomIdResponse.returnCode != ReturnCode.Ok || loginByCustomIdResponse.errorCode != ErrorCode.Ok) {
  console.log("login by custom id failed because the returnCode is " + loginByCustomIdResponse.returnCode + ", errorCode is " + loginByCustomIdResponse.errorCode);
  return;
}

console.log("Your userId: " + loginByCustomIdResponse.responseData.userId);
console.log("Your countryCode: " + loginByCustomIdResponse.responseData.infoResponseParameters.countryCode);
console.log("Your displayName: " + loginByCustomIdResponse.responseData.infoResponseParameters.displayName);
```
4. Nếu app cần realtime, subscribe event handler **trước** rồi mới gọi `GNNetwork.connectSocket()` (subscribe sau sẽ miss event ngay sau handshake), đồng thời `GearN Server` phải settings options.socketAppSettings.enable = true.
5. Socket auto-auth nếu token đã cache. Chỉ gọi `GNNetwork.sendRequestAuthSocket()` thủ công khi: (a) socket connect **trước** khi có `authToken` (login xảy ra sau socket up), hoặc (b) token vừa đổi và muốn re-auth ngay mà không reconnect socket.

11 API group public:

- `GNNetwork.authenticate` — player login/register/refresh. [Guide](/docs/guides/AUTHENTICATE.md).
- `GNNetwork.masterPlayer` — master player account/profile/identity. [Guide](/docs/guides/MASTER_PLAYER.md).
- `GNNetwork.gamePlayer` — game player gameplay/profile/friend/group/character. [Guide](/docs/guides/GAME_PLAYER.md).
- `GNNetwork.characterPlayer` — character-level (trong trường hợp 1 game player có nhiều nhân vật nhỏ) gameplay/social. [Guide](/docs/guides/CHARACTER_PLAYER.md).
- `GNNetwork.group` — group metadata/member/message/currency. [Guide](/docs/guides/GROUP.md).
- `GNNetwork.inventory` — inventory item metadata, statistics, log. [Guide](/docs/guides/INVENTORY.md).
- `GNNetwork.storeInventory` — store catalog, buy/present, receipt validation. [Guide](/docs/guides/STORE_INVENTORY.md).
- `GNNetwork.content` — content config, file upload/download metadata, small game asset, avatar asset. [Guide](/docs/guides/CONTENT.md).
- `GNNetwork.multiplayer` — matchmaking ticket, handle matchmaking trận đấu (HTTP, không socket). [Guide](/docs/guides/MULTIPLAYER.md).
- `GNNetwork.cloudScript` — CloudScript publish/version/execute, khi cần phải phối hợp các function lại với nhau, hoặc cần để server validate, cần phải viết cloudScript code từ `GearN Dashboard`. [API guide](/docs/guides/CLOUDSCRIPT.md), [script authoring guide](/docs/cloudScript/CLOUDSCRIPT_USAGE.md).
- `GNNetwork.dashboard` — admin login + quản trị game/secret/analytics, không nên sử dụng nếu code game client. [Guide](/docs/guides/DASHBOARD.md).

## 4. Khởi tạo cơ bản

```ts
import {
  GNNetwork,
  GNServerSettings,
  LogType,
  MessageType,
} from "@xmobitea/gearn-typescript-client-sdk";

const settings = new GNServerSettings();
settings.config({
  serverAddress: "127.0.0.1",          // GearN Server host / IP
  serverPort: 2202,                    // HTTP port, dựa vào options.applicationSettings.port và options.httpAppSettings.enable của GearN Server
  serverSocketPort: 2901,              // Socket port, dựa vào options.applicationSettings.socketPort của GearN Server
  useSsl: false,                       // true để build HTTPS/WSS URL. Khi proxy expose default port (80/443) trực tiếp thì set serverPort/serverSocketPort = -1; nếu dùng port tường minh (vd: 443) thì truyền đúng số đó. serverAddress phải là hostname hợp lệ (không có scheme)
  useSocket: true,                     // client muốn sử dụng socket để nhận các gói tin chủ động từ phía GearN Server, dựa vào options.socketAppSettings.enable của GearN Server
  useHttp: true,                       // luôn luôn là true, dựa vào options.httpAppSettings.enable của GearN Server
  defaultTimeoutInSeconds: 20,         // default timeout tính bằng giây, thời gian để timeout tính từ lúc bắt đầu gửi OperationRequest và chờ OperationResponse từ phía server, nếu vượt quá thời gian này, 1 mã lỗi ReturnCode.OperationTimeout sẽ được trả về
  messageType: MessageType.MsgPack,    // browser client sẽ tự fallback JSON cho HTTP, sử dụng msgPack giúp gói tin nhỏ nhẹ hơn nếu là client hoặc server, tăng tỉ lệ gửi thành công và tránh mất nhiều bandwidth, băng thông, dựa vào options.httpAppSettings.enablePostViaMsgPack và options.httpAppSettings.enablePostViaJson của GearN Server
  sendRate: 20,                        // tỉ lệ gửi OperationRequest mỗi giây, 20 có nghĩa là gửi 20 OperationRequest mỗi giây
  reconnectDelay: 5000,                // khi sử dụng socket, reconnectDelay socket io
  pingInterval: 20000,                 // khi sử dụng socket, pingInterval socket io
  pingTimeout: 20000,                  // khi sử dụng socket, pingTimeout socket io
  secretKey: "secret-key",             // secretKey để có thể dùng client này, lấy từ GearN Dashboard tab Settings/SecretInfo, lựa chọn secretKey với các Permission Rules phù hợp
  gameId: "game-id",                   // game id dành cho secretKey trong settings này hoặc override lại để chọn đúng game environment phù hợp, lấy từ GearN Dashboard từ tab Settings/SecretInfo
  logType: LogType.All,                // console log ra tất cả vấn đề thuộc loại nào
});

GNNetwork.init(settings);
```

Full field schema: [docs/reference/CONFIG.md](/docs/reference/CONFIG.md). Rule route / permission / self / other-self: [docs/RULES.md](/docs/RULES.md).

## 5. Quick start: login bằng custom device id

```ts
import {
  GNNetwork,
  AuthenticateModels,
  ReturnCode,
  ErrorCode,
} from "@xmobitea/gearn-typescript-client-sdk";

const infoRequest = new AuthenticateModels.InfoRequestParam();
infoRequest.displayName = true;
infoRequest.avatar = true;
infoRequest.playerDatas = true;

const request = new AuthenticateModels.LoginByCustomDeviceIdRequestData();
request.customDeviceId = "device-000001";
request.createPlayerIfNotExists = true;
request.infoRequestParam = infoRequest;

const res = await GNNetwork.authenticate.loginByCustomDeviceIdAsync(request);

if (res.returnCode !== ReturnCode.Ok) throw new Error(res.debugMessage);
if (res.errorCode  !== ErrorCode.Ok)  throw new Error(`Business error: ${res.errorCode}`);

console.log("userId",    res.responseData.userId);
console.log("userId",    GNNetwork.getAuthenticateStatus().getUserId());
console.log("authToken", res.responseData.authToken);
console.log("authToken", GNNetwork.getAuthenticateStatus().getAuthToken());
console.log("player",    res.responseData);
```

## 6. Login bằng account

```ts
import {
  GNNetwork,
  AuthenticateModels,
  ReturnCode,
  ErrorCode,
} from "@xmobitea/gearn-typescript-client-sdk";

const infoRequest = new AuthenticateModels.InfoRequestParam();
infoRequest.displayName = true;
infoRequest.playerStatistics = true;

const request = new AuthenticateModels.LoginByAccountRequestData();
request.username = "player001";
request.password = "12345678";
request.infoRequestParam = infoRequest;

const res = await GNNetwork.authenticate.loginByAccountAsync(request);
if (res.returnCode !== ReturnCode.Ok) throw new Error(res.debugMessage);
if (res.errorCode  !== ErrorCode.Ok)  throw new Error(`Business error: ${res.errorCode}`);
```

## 7. Socket

```ts
import { GNNetwork } from "@xmobitea/gearn-typescript-client-sdk";

// Subscribe TRƯỚC connect để không miss event ngay sau handshake
GNNetwork.subscriberOnConnectHandler(() => {
  console.log("socket connected", GNNetwork.getSocketSId());
});

GNNetwork.subscriberOnDisconnectHandler(() => {
  console.log("socket disconnected");
});

GNNetwork.setOnEventHandler((event) => {
  console.log("eventCode", event.getEventCode());
  console.log("parameters", event.getParameters()?.toData());
});

// Gọi sau khi đã login HTTP thành công
GNNetwork.connectSocket();
```

Re-auth thủ công (nếu socket connect trước token hoặc token vừa đổi):

```ts
if (GNNetwork.isSocketConnected() && GNNetwork.getAuthenticateStatus().getAuthToken()) {
  GNNetwork.sendRequestAuthSocket();
}
```

Helper:

- `GNNetwork.isSocketConnected()` — trạng thái socket session id.
- `GNNetwork.getPing()` — ping trung bình từ active transport.
- `GNNetwork.syncTs()` — sync local estimate server timestamp.

Realtime event handler (6 handler, subscribe bằng gán `static onUpdate`): [docs/reference/EVENTS.md](/docs/reference/EVENTS.md).

## 8. Dashboard / admin login

`DashboardApi` public wrapper đi `RequestRole.Client`. Sau `loginByAdminAccountAsync`, backend resolve admin context từ `authToken`.

```ts
import {
  GNNetwork,
  DashboardModels,
  ReturnCode,
  ErrorCode,
} from "@xmobitea/gearn-typescript-client-sdk";

const request = new DashboardModels.LoginByAdminAccountRequestData();
request.username = "gnadmin";
request.password = "123456";

const res = await GNNetwork.dashboard.loginByAdminAccountAsync(request);
if (res.returnCode !== ReturnCode.Ok) throw new Error(res.debugMessage);
if (res.errorCode  !== ErrorCode.Ok)  throw new Error(`Business error: ${res.errorCode}`);
```

Rule chi tiết DashboardApi: [docs/guides/DASHBOARD.md](/docs/guides/DASHBOARD.md).

## 9. Method signature

Signature đầy đủ + bảng override param (`overrideAuthToken`, `overrideSecretKey`, `customTags`, `timeout`): [docs/RULES.md § 8](/docs/RULES.md#8-method-signature--override-params).

## 10. Response model

Typed response có 5 public field (không getter): `returnCode`, `errorCode`, `invalidMembers`, `debugMessage`, `responseData`. Pattern check 2 tầng + full table ReturnCode/ErrorCode: [docs/reference/ERROR_HANDLING.md](/docs/reference/ERROR_HANDLING.md).

## 11. Auth state, gameId, health check, upload

```ts
// Auth state
GNNetwork.getAuthenticateStatus().getAuthToken();
GNNetwork.getAuthenticateStatus().getUserId();

// trong trường hợp secret key có thể dùng cho game id nào cũng được, trường hợp muốn dùng riêng cho game id xác định thì sử dụng hàm này
GNNetwork.getGNServerSettings().setGameId("your-game-id");

// Health check
await GNNetwork.healthCheckAsync();

// Auth info
await GNNetwork.getAuthInfoAsync("some-auth-token");

// Upload file (cần authToken hợp lệ)
const bytes = new Uint8Array([1, 2, 3, 4]);
await GNNetwork.uploadFileAsync("file-001", bytes, "demo.bin", "application/octet-stream");

// Download URL từ download token (token lấy từ response của các API trả về file metadata, ví dụ content.getFileUploadInfoAsync)
GNNetwork.getDownloadFileUrl("download-token-from-server");
```

## 12. Advanced: ConverterService cho custom DTO

`ConverterService` là helper public để convert object typed có decorator ↔ `GNHashtable` / `GNArray`. Flow SDK bình thường không cần gọi tay (vì `GNNetwork.init()` đã tự init converter).

Chỉ dùng khi tự define DTO có decorator:

```ts
import {
  ConverterService,
  StringDataMember,
  NumberDataMember,
  BooleanDataMember,
  GNArrayDataMember,
  GNHashtableDataMember,
  DataMember,
  GNHashtable,
} from "@xmobitea/gearn-typescript-client-sdk";

class ProfileStats {
  @NumberDataMember({ code: "level", defaultValue: 1, mustInt: true }) level: number;
  @NumberDataMember({ code: "power", defaultValue: 0 }) power: number;
}

class CustomProfile {
  @StringDataMember({ code: "displayName", mustNonNull: true }) displayName: string;
  @NumberDataMember({ code: "age", isOptional: true, minValue: 0, mustInt: true }) age?: number;
  @BooleanDataMember({ code: "isVip", defaultValue: false }) isVip: boolean;
  @GNHashtableDataMember({ code: "stats" }) stats: ProfileStats;
  @DataMember({ code: "metadata", isOptional: true }) metadata?: any;
}

const source = GNHashtable.builder()
  .add("displayName", "Player 01")
  .add("age", 20)
  .add("isVip", true)
  .add("stats", GNHashtable.builder().add("level", 12).add("power", 3456).build())
  .build();

const profile = ConverterService.deserializeObject(source, CustomProfile) as CustomProfile;
const serialized = ConverterService.serializeObject(profile, CustomProfile);
```

Rule:

- Dùng `GNNetwork.*` bình thường: không cần `ConverterService`.
- Tự build custom DTO: dùng `deserializeObject / serializeObject / deserializeArray / serializeArray`.
- `GNArrayDataMember` với element typed: luôn truyền `elementCls`.
- `DataMember` generic cho payload động: data có thể là raw `GNHashtable` / `GNArray`, gọi `.toData()` để lấy plain object.
- Không gọi `ConverterService.init()` tay nếu đã `GNNetwork.init()`.

## 13. Custom operation

Low-level API để bọc operation chưa expose:

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
} from "@xmobitea/gearn-typescript-client-sdk";

class ExampleRequestData {
  @StringDataMember({ code: ParameterCode.Key, mustNonNull: true }) public key: string;
}

class ExampleResponseData {
  @StringDataMember({ code: ParameterCode.Value, isOptional: true }) public value?: string;
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

const res = await GNNetwork.sendViaHttpTRequestTResponseAsync(
  new ExampleRequest(requestData, 20),
  null,
  null,
  null,
  ExampleResponse,
);
```

## 14. Browser / Node / Cocos

- Detect platform: `GNSupport.getPlatformType()`.
- Browser + HTTP + MsgPack → SDK auto-fallback JSON.
- Cocos Creator: giữ 2 flag TS decorator nếu có custom DTO. [Integration guide](/docs/guides/COCOS_CREATOR_INTEGRATION.md).

## 15. Build & publish

```bash
npm run test
npm run build:node       # CommonJS cho Node
npm run build:udm        # UMD
npm run build:minudm     # UMD minified
npm run build:cocos      # Cocos (riêng biệt, không có trong build)
npm run build            # node + udm + minudm (không bao gồm Cocos)
```

## 16. Lỗi hay gặp

Full checklist + anti-patterns: [docs/RULES.md § 10](/docs/RULES.md#10-anti-patterns--pitfalls). Return/error code table: [docs/reference/ERROR_HANDLING.md](/docs/reference/ERROR_HANDLING.md).

## 17. File tham khảo trong repo

- Entry public API: `src/runtime/GNNetwork.ts`
- Export surface: `src/index.ts`
- Local debug: `index.js`

## 18. TL;DR

1. `GNNetwork.init(settings)` 1 lần.
2. Mọi call qua `GNNetwork.*`.
3. Check `returnCode` trước, `errorCode` sau.
4. Socket: login HTTP → `connectSocket()`; chỉ `sendRequestAuthSocket()` khi cần re-auth thủ công.
5. Rule chi tiết → [docs/RULES.md](/docs/RULES.md).
