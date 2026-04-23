# GearN TypeScript Client SDK

SDK TypeScript client cho GearN Server.

`GNNetwork` là entrypoint duy nhất ở tầng public API. Sau `init()`, toàn bộ thao tác đi qua các nhóm API tĩnh: `GNNetwork.authenticate`, `GNNetwork.dashboard`, `GNNetwork.inventory`, `GNNetwork.group`, ...

> **AI / code assistant:** đọc [docs/AI_CHEATSHEET.md](docs/AI_CHEATSHEET.md) trước (one-page), rồi [docs/RULES.md](docs/RULES.md) cho rule chi tiết (route, permission, self/other-self, socket, error). Machine-readable manifest: [docs/ai-manifest.json](docs/ai-manifest.json).

## Quick rules

- Package publish: `@xmobitea/gn-typescript-client`.
- Public entrypoint duy nhất: `GNNetwork`.
- Luôn `GNNetwork.init(settings)` **1 lần** ở bootstrap; idempotent.
- Ưu tiên `async/await` và method `*Async()`.
- Check 2 tầng: `returnCode` trước, `errorCode` sau. `Ok === 1` ở cả hai.
- Route `client / server / admin` = trust boundary của caller, KHÔNG phải target ownership.
- Socket auth là bước riêng sau HTTP auth; SDK auto-auth nếu token đã cache.
- `DashboardApi` là ngoại lệ: public wrapper vẫn `RequestRole.Client`, backend resolve admin từ `authToken`.

Chi tiết đầy đủ (gồm phân biệt `SecretInvalid` / `OperationInvalid` / `OperationNotAllow`, self-semantics theo domain, permission flag, socket re-auth, anti-patterns) → [docs/RULES.md](docs/RULES.md).

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
npm install @xmobitea/gn-typescript-client
```

## 3. Cách SDK hoạt động

Flow chuẩn:

1. Tạo `GNServerSettings`.
2. Gọi `GNNetwork.init(settings)` đúng 1 lần.
3. Gọi API qua `GNNetwork.*`.
4. Nếu app cần realtime, sau khi đã có `authToken` → `GNNetwork.connectSocket()`.
5. Socket auto-auth nếu token đã cache; chỉ `GNNetwork.sendRequestAuthSocket()` thủ công khi cần re-auth.

11 API group public:

- `GNNetwork.authenticate` — player login/register/refresh. [Guide](docs/guides/AUTHENTICATE.md).
- `GNNetwork.dashboard` — admin login + quản trị game/secret/analytics/maintenance. [Guide](docs/guides/DASHBOARD.md).
- `GNNetwork.content` — content config, file upload/download metadata. [Guide](docs/guides/CONTENT.md).
- `GNNetwork.multiplayer` — matchmaking ticket (HTTP, không socket). [Guide](docs/guides/MULTIPLAYER.md).
- `GNNetwork.storeInventory` — store catalog, buy/present, receipt validation. [Guide](docs/guides/STORE_INVENTORY.md).
- `GNNetwork.inventory` — inventory item metadata, statistics, log. [Guide](docs/guides/INVENTORY.md).
- `GNNetwork.group` — group metadata/member/message/currency. [Guide](docs/guides/GROUP.md).
- `GNNetwork.masterPlayer` — master player account/profile/identity. [Guide](docs/guides/MASTER_PLAYER.md).
- `GNNetwork.gamePlayer` — game player gameplay/profile/friend/group/character. [Guide](docs/guides/GAME_PLAYER.md).
- `GNNetwork.characterPlayer` — character-level gameplay/social. [Guide](docs/guides/CHARACTER_PLAYER.md).
- `GNNetwork.cloudScript` — CloudScript publish/version/execute. [Guide](docs/guides/CLOUDSCRIPT.md).

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
  serverAddress: "127.0.0.1",          // GearN server host / IP
  serverPort: 2202,                    // HTTP port
  serverSocketPort: 2901,              // Socket port
  useSsl: false,                       // true khi public endpoint dùng HTTPS
  useSocket: true,
  useHttp: true,
  defaultTimeoutInSeconds: 20,
  messageType: MessageType.MsgPack,    // browser tự fallback JSON cho HTTP
  sendRate: 20,
  reconnectDelay: 5000,
  pingInterval: 20000,
  pingTimeout: 20000,
  adminSecretKey: "",                  // chỉ set khi dùng .admin route
  serverSecretKey: "",                 // chỉ set khi dùng .server route
  clientSecretKey: "your-client-secret",
  logType: LogType.All,
});

GNNetwork.init(settings);
```

Full field schema: [docs/reference/CONFIG.md](docs/reference/CONFIG.md).

<a id="route-and-permission-rules"></a>

Rule đầy đủ về route / permission / self / other-self: [docs/RULES.md](docs/RULES.md).

## 5. Quick start: login bằng custom device id

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

const res = await GNNetwork.authenticate.loginByCustomDeviceIdAsync(request);

if (res.returnCode !== ReturnCode.Ok) throw new Error(res.debugMessage);
if (res.errorCode  !== ErrorCode.Ok)  throw new Error(`Business error: ${res.errorCode}`);

console.log("userId",    GNNetwork.getAuthenticateStatus().getUserId());
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
} from "@xmobitea/gn-typescript-client";

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

<a id="socket-auth-flow"></a>

## 7. Socket

```ts
import { GNNetwork } from "@xmobitea/gn-typescript-client";

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

Realtime event handler (6 handler, subscribe bằng gán `static onUpdate`): [docs/reference/EVENTS.md](docs/reference/EVENTS.md).

## 8. Dashboard / admin login

`DashboardApi` public wrapper đi `RequestRole.Client` + `clientSecretKey`. Sau `loginByAdminAccountAsync`, backend resolve admin context từ `authToken`. Không giả định SDK tự đổi sang `adminSecretKey`.

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

const res = await GNNetwork.dashboard.loginByAdminAccountAsync(request);
if (res.returnCode !== ReturnCode.Ok) throw new Error(res.debugMessage);
if (res.errorCode  !== ErrorCode.Ok)  throw new Error(`Business error: ${res.errorCode}`);
```

Rule chi tiết DashboardApi: [docs/guides/DASHBOARD.md](docs/guides/DASHBOARD.md).

## 9. Method signature

Mọi method có 2 form:

```ts
// Callback
method(requestData, onResponse?, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?);

// Async (preferred)
methodAsync(requestData, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?);
```

Param `overrideAuthToken`, `overrideSecretKey`, `customTags`, `timeout`: xem [docs/RULES.md § 7](docs/RULES.md#7-method-signature--override-params).

## 10. Response model

Typed response expose PUBLIC FIELDS (KHÔNG getter):

- `returnCode` — transport/protocol
- `debugMessage` — backend debug
- `invalidMembers` — field invalid nếu `returnCode === InvalidRequestParameters`
- `errorCode` — business error
- `responseData` — typed payload

Check pattern + full table (ReturnCode/ErrorCode + recommended action): [docs/reference/ERROR_HANDLING.md](docs/reference/ERROR_HANDLING.md).

## 11. Auth state, gameId, health check, upload

```ts
// Auth state
GNNetwork.getAuthenticateStatus().getAuthToken();
GNNetwork.getAuthenticateStatus().getUserId();

// Game id (persist qua StorageService)
GNNetwork.setGameId("your-game-id");
GNNetwork.getGameId();

// Health check
await GNNetwork.healthCheckAsync();

// Auth info
await GNNetwork.getAuthInfoAsync("some-auth-token");

// Upload file (cần authToken hợp lệ)
const bytes = new Uint8Array([1, 2, 3, 4]);
await GNNetwork.uploadFileAsync("file-001", bytes, "demo.bin", "application/octet-stream");

// Download URL từ download token
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
} from "@xmobitea/gn-typescript-client";

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
} from "@xmobitea/gn-typescript-client";

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
- Cocos Creator: giữ 2 flag TS decorator nếu có custom DTO. [Integration guide](docs/guides/COCOS_CREATOR_INTEGRATION.md).

## 15. Build & publish

```bash
npm run test
npm run build:node       # CommonJS cho Node
npm run build:udm        # UMD
npm run build:minudm     # UMD minified
npm run build:cocos      # Cocos
npm run build            # tất cả output chính
```

## 16. Lỗi hay gặp

Full checklist + recommended action: [docs/reference/ERROR_HANDLING.md](docs/reference/ERROR_HANDLING.md). Tóm tắt:

- **Gọi API trước `init()`** → namespace `undefined`. Init 1 lần ở bootstrap.
- **`returnCode === Ok` nhưng `errorCode !== Ok`** → business fail, check tầng 2.
- **Socket connect nhưng không nhận auth** → token đến sau socket up. Gọi `sendRequestAuthSocket()` re-auth.
- **Sai secret / sai namespace route** → check `clientSecretKey` / `serverSecretKey` / `adminSecretKey` match với namespace đang gọi.
- **`OperationNotAllow`** → permission rule cấm, không phải thiếu secret. Check route + permission flag `selfEnable` / `otherSelfEnable` / `serverSelfEnable` / `adminSelfEnable`.
- **Tưởng success là `0`** → SAI, `Ok === 1` cả hai tầng.

## 17. File tham khảo trong repo

- Entry public API: `src/runtime/GNNetwork.ts`
- Export surface: `src/index.ts`
- Local debug: `index.js`
- Cocos example: `examples/cocos-creator/GearNExample.ts.txt`

## 18. TL;DR

1. `GNNetwork.init(settings)` 1 lần.
2. Mọi call qua `GNNetwork.*`.
3. Check `returnCode` trước, `errorCode` sau.
4. Socket: login HTTP → `connectSocket()`; chỉ `sendRequestAuthSocket()` khi cần re-auth thủ công.
5. Rule chi tiết → [docs/RULES.md](docs/RULES.md).
