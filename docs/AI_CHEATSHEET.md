# AI Cheatsheet

One-page reference cho AI agent / code assistant. Đọc file này trước, đào sâu khi cần.

> Package: `@xmobitea/gn-typescript-client` · Entry point: `GNNetwork` (static class) · Stack: HTTP + WebSocket realtime.

---

## 1. Mandatory pattern (sao chép & dùng)

```ts
import { GNNetwork, GNServerSettings, ReturnCode, ErrorCode, MessageType, LogType } from "@xmobitea/gn-typescript-client";

// Bootstrap — gọi 1 lần, idempotent
GNNetwork.init(new GNServerSettings({
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
  clientSecretKey: "<client-secret>",
  serverSecretKey: "",   // chỉ set khi backend dùng .server
  adminSecretKey: "",    // chỉ set khi backend dùng .admin
  logType: LogType.Error,
}));

// Mọi call: 2-tier check, KHÔNG throw business error
const res = await GNNetwork.<group>.<method>Async(req);
if (res.returnCode !== ReturnCode.Ok) return; // transport / permission
if (res.errorCode  !== ErrorCode.Ok)  return; // business
useResult(res.responseData);
```

`Ok === 1` ở **cả** `ReturnCode` và `ErrorCode`. **KHÔNG** giả định `Ok === 0`.

---

## 2. Decision tree: tôi cần làm gì?

| Tôi muốn... | Mở file |
|---|---|
| Login / register / refresh token | [guides/AUTHENTICATE.md](guides/AUTHENTICATE.md) · [reference/API_AUTHENTICATE.md](reference/API_AUTHENTICATE.md) |
| Player profile, currency, social, friend (account-level) | [guides/MASTER_PLAYER.md](guides/MASTER_PLAYER.md) · [reference/API_MASTER_PLAYER.md](reference/API_MASTER_PLAYER.md) |
| Gameplay profile + relation (friend/group/character) ở mức user | [guides/GAME_PLAYER.md](guides/GAME_PLAYER.md) · [reference/API_GAME_PLAYER.md](reference/API_GAME_PLAYER.md) |
| Character-level gameplay/social | [guides/CHARACTER_PLAYER.md](guides/CHARACTER_PLAYER.md) · [reference/API_CHARACTER_PLAYER.md](reference/API_CHARACTER_PLAYER.md) |
| Inventory item: query, owner, amount, statistics | [guides/INVENTORY.md](guides/INVENTORY.md) · [reference/API_INVENTORY.md](reference/API_INVENTORY.md) |
| Group metadata, member, message, group inventory | [guides/GROUP.md](guides/GROUP.md) · [reference/API_GROUP.md](reference/API_GROUP.md) |
| Store catalog, buy, present, validate receipt | [guides/STORE_INVENTORY.md](guides/STORE_INVENTORY.md) · [reference/API_STORE_INVENTORY.md](reference/API_STORE_INVENTORY.md) |
| Matchmaking ticket / queue / match query | [guides/MULTIPLAYER.md](guides/MULTIPLAYER.md) · [reference/API_MULTIPLAYER.md](reference/API_MULTIPLAYER.md) |
| Content config + upload/download file metadata | [guides/CONTENT.md](guides/CONTENT.md) · [reference/API_CONTENT.md](reference/API_CONTENT.md) |
| CloudScript: publish version, execute function | [guides/CLOUDSCRIPT.md](guides/CLOUDSCRIPT.md) · [reference/API_CLOUDSCRIPT.md](reference/API_CLOUDSCRIPT.md) |
| Admin login, secret/maintenance/analytics | [guides/DASHBOARD.md](guides/DASHBOARD.md) · [reference/API_DASHBOARD.md](reference/API_DASHBOARD.md) |
| Realtime event (friend, group, message) | [reference/EVENTS.md](reference/EVENTS.md) |
| Tra DTO field theo class | [reference/DTO_INDEX.md](reference/DTO_INDEX.md) (grep) hoặc [reference/dto/](reference/dto/) |
| Enum value numeric | [reference/ENUMS.md](reference/ENUMS.md) |
| Config field của `GNServerSettings` | [reference/CONFIG.md](reference/CONFIG.md) |
| Cách check error / retry / debug | [reference/ERROR_HANDLING.md](reference/ERROR_HANDLING.md) |
| Scenario end-to-end (15 case) | [COOKBOOK.md](COOKBOOK.md) |
| Rule chung (route, permission, self/other-self, socket) | [RULES.md](RULES.md) |
| Machine-readable manifest cho tooling | [ai-manifest.json](ai-manifest.json) |

---

## 3. Route decision (1 phút)

Route = **trust boundary của caller**, KHÔNG phải target ownership.

```
Code chạy ở đâu?
├─ App / browser của player           → GNNetwork.<group>           (Client, clientSecretKey)
├─ Trusted backend (game server,       → GNNetwork.<group>.server    (Server, serverSecretKey)
│  worker, webhook, internal svc)
└─ Backoffice / GM tool / dashboard    → GNNetwork.<group>.admin     (Admin, adminSecretKey)

Ngoại lệ: DashboardApi public wrapper vẫn đi RequestRole.Client; backend resolve admin từ authToken sau loginByAdminAccountAsync.
```

`self / other self` chỉ áp dụng trên route `client`:
- `MasterPlayer` / `GamePlayer`: `self` = `userId` trong request trùng `userId` đã authenticate (hoặc bỏ trống).
- `CharacterPlayer` / `Inventory` / `Group`: `self` = entity thuộc ownership của user đang authenticate.
- `Content` / `StoreInventory` / `Multiplayer` / `CloudScript`: không có ownership rõ ràng — không ép self/other-self.

---

## 4. Method signature mọi API

```ts
// Callback form
GNNetwork.<group>.<method>(requestData, onResponse?, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?);

// Async form (preferred)
const res = await GNNetwork.<group>.<method>Async(requestData, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?);
```

| Param | Khi nào cần |
|---|---|
| `overrideAuthToken` | Impersonate / multi-session / admin gọi trên user khác |
| `overrideSecretKey` | Override secret cho 1 request, ví dụ tool migration |
| `customTags` | Trace id, build version, A/B tag — backend có thể log/route |
| `timeout` | Override default per-request (giây) |

Response field public (KHÔNG phải getter): `returnCode`, `errorCode`, `invalidMembers`, `debugMessage`, `responseData`.

---

## 5. Socket flow

```
1. Login HTTP (authenticate.loginByXxxAsync) — SDK cache authToken vào StorageService
2. GNNetwork.connectSocket()                  — SDK auto-auth socket nếu authToken đã có
3. (chỉ khi socket connect TRƯỚC token, hoặc token vừa đổi)
   GNNetwork.sendRequestAuthSocket()          — re-auth thủ công, không reconnect
```

Hook trước khi connect:

```ts
GNNetwork.subscriberOnConnectHandler(() => { /* socket up */ });
GNNetwork.subscriberOnDisconnectHandler(() => { /* socket down */ });
GNNetwork.setOnEventHandler((event) => { /* raw event */ });

// Realtime handler — gán static field, gán null để unsubscribe
OnGroupMessageUpdateEventHandler.onUpdate = (payload) => { ... };
```

Realtime KHÔNG tự chạy chỉ vì đã gọi HTTP (friend/group/...). Phải subscribe handler liệt kê trong [reference/EVENTS.md](reference/EVENTS.md).

---

## 6. Common pitfalls (top mistakes)

1. **Tưởng success là `0`** → đúng là `Ok === 1` cả 2 tầng.
2. **Skip tầng `returnCode`, đọc thẳng `errorCode`** → khi `returnCode !== Ok`, `errorCode` và `responseData` không đáng tin.
3. **Dùng getter style `res.getReturnCode()`** → typed response (`*Async`) dùng PUBLIC FIELDS. Getter chỉ trên low-level `OperationResponse` raw.
4. **Gọi API trước `GNNetwork.init()`** → namespace `undefined`, `TypeError`. Init 1 lần ở bootstrap.
5. **Re-init để đổi config** → `init()` idempotent, lần thứ 2 bị ignore. Phải restart process.
6. **Dùng `.server` / `.admin` từ frontend chỉ để vượt permission** → trust boundary leak; secret bị expose. Sai về thiết kế.
7. **Tự gọi `sendRequestAuthSocket()` sau mọi `connectSocket()`** → SDK đã auto-auth nếu token có. Chỉ gọi tay khi token đến SAU socket connect.
8. **Subscribe event SAU `connectSocket()`** → có thể miss event ngay sau handshake. Subscribe trước.
9. **`editFunctionAsync` (CloudScript) sửa source code** → SAI, edit chỉ flag enabled/live. Đổi source = `addFunctionAsync` tạo version mới.
10. **`MultiplayerApi` gửi qua socket** → SAI, toàn bộ wrapper hiện tại dùng HTTP. Flow là create ticket → poll `getMatchmakingTicket` → `getMatch`.
11. **`infoRequestParam = null` trong login** → backend sẽ không hydrate gì cả; truyền instance dù chỉ bật ít field.
12. **`bulk-set` mọi field của `infoRequestParam`** → payload bự, slow; chỉ bật field thật sự render.
13. **Browser + `MessageType.MsgPack`** → HTTP transport tự fallback JSON; KHÔNG cần override toàn SDK sang JSON.
14. **`OperationNotAllow` = thiếu secret** → SAI. Secret hợp lệ nhưng permission rule cấm operation. Check route + `selfEnable` / `otherSelfEnable` / `serverSelfEnable` / `adminSelfEnable`.

---

## 7. Diagnose `ReturnCode` (nhanh)

| Code | Nghĩa thật | Fix |
|---|---|---|
| `Ok` (1) | Sang tầng `errorCode` | — |
| `OperationTimeout` (-1) | Network/backend chậm | Retry với backoff nếu idempotent |
| `OperationNotAllow` (-2) | Permission rule cấm | Check route + permission flag (KHÔNG retry) |
| `InternalServerError` (-3) | Backend exception | Báo ops, có thể retry 1 lần |
| `OperationInvalid` (-4) | Operation không tồn tại với role hiện tại | Đang gọi sai namespace, sai `RequestType`/`RequestRole` |
| `InvalidRequestParameters` (-5) | Field invalid | Đọc `res.invalidMembers` để biết field nào |
| `OperationNotAuthorized` (-6) | Không auth với target | Check `authToken` còn hợp lệ |
| `MaxCCUReject` (-7) | Vượt CCU limit | Backoff retry |
| `MaxRequestReject` (-8) | Rate limit | Exponential backoff |
| `MaxSizeRequestReject` (-9) | Payload quá to | Paginate / split |
| `SecretInvalid` (-10) | Secret sai/thiếu/không khớp game | Fix `GNServerSettings` (KHÔNG retry) |

Full table + `ErrorCode` 50 giá trị: [reference/ERROR_HANDLING.md](reference/ERROR_HANDLING.md).

---

## 8. Khi nào ĐƯỢC đọc `src/`

- Đang sửa chính SDK
- Verify behavior nội bộ chưa được docs cover
- Tích hợp package: **chỉ** dùng `README + docs + dist/*.d.ts`. Không bám `src/` cho integration code.

---

## 9. Liên kết quan trọng

- Single-source-of-truth rules: [RULES.md](RULES.md)
- AI entry guide chi tiết: [../AGENTS.md](../AGENTS.md)
- Machine manifest: [ai-manifest.json](ai-manifest.json)
- Concatenated bundle (full): [llms-full.txt](llms-full.txt)
- llmstxt.org index: [../llms.txt](../llms.txt)
