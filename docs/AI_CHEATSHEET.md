# AI Cheatsheet

One-page reference cho AI agent / code assistant. Đọc file này trước, đào sâu khi cần.

> Package: `@xmobitea/gearn-typescript-client-sdk` · Entry point: `GNNetwork` (static class) · Stack: HTTP + WebSocket realtime.

---

## 1. Mandatory pattern (sao chép & dùng)

```ts
import { GNNetwork, GNServerSettings, ReturnCode, ErrorCode, MessageType, LogType } from "@xmobitea/gearn-typescript-client-sdk";

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
  secretKey: "<secret-key>",
  gameId: "<game-id>",
  logType: LogType.Error,
});

// Bootstrap — gọi 1 lần, idempotent
GNNetwork.init(settings);

// Mọi call: 2-tier check
const res = await GNNetwork.<group>.<method>Async(req);
// Cách 1 — field public (throwable):
if (res.returnCode !== ReturnCode.Ok) return; // transport / permission
if (res.errorCode  !== ErrorCode.Ok)  return; // business
// Cách 2 — helper method (equivalent):
// if (res.hasReturnCodeError()) throw new Error(res.debugMessage);
// if (res.errorCode !== ErrorCode.Ok) throw new Error(`Business error: ${res.errorCode}`);
useResult(res.responseData);
```

`Ok === 1` ở **cả** `ReturnCode` và `ErrorCode`. **KHÔNG** giả định `Ok === 0`.

---

## 2. Decision tree: tôi cần làm gì?

<!-- prettier-ignore -->
| Tôi muốn... | Mở file |
| --- | --- |
| Login / register / refresh token | [guides/AUTHENTICATE.md](/docs/guides/AUTHENTICATE.md) · [reference/API_AUTHENTICATE.md](/docs/reference/API_AUTHENTICATE.md) |
| MasterPlayer account chung nhiều game: identity, external link/unlink, profile, statistics, currencies, player data, email/push, segment/tag/ban | [guides/MASTER_PLAYER.md](/docs/guides/MASTER_PLAYER.md) · [reference/API_MASTER_PLAYER.md](/docs/reference/API_MASTER_PLAYER.md) |
| GamePlayer account theo game environment (`dev`/`live` hoặc custom): profile, friends, groups, inventory owner, online status, statistics/currencies/data | [guides/GAME_PLAYER.md](/docs/guides/GAME_PLAYER.md) · [reference/API_GAME_PLAYER.md](/docs/reference/API_GAME_PLAYER.md) |
| CharacterPlayer nhân vật thuộc GamePlayer: profile riêng, statistics/currencies/data, friends/groups/inventory owner theo character | [guides/CHARACTER_PLAYER.md](/docs/guides/CHARACTER_PLAYER.md) · [reference/API_CHARACTER_PLAYER.md](/docs/reference/API_CHARACTER_PLAYER.md) |
| Inventory item: query, owner, amount, statistics | [guides/INVENTORY.md](/docs/guides/INVENTORY.md) · [reference/API_INVENTORY.md](/docs/reference/API_INVENTORY.md) |
| Group metadata, member, message, group inventory | [guides/GROUP.md](/docs/guides/GROUP.md) · [reference/API_GROUP.md](/docs/reference/API_GROUP.md) |
| Store catalog, buy, present, validate receipt | [guides/STORE_INVENTORY.md](/docs/guides/STORE_INVENTORY.md) · [reference/API_STORE_INVENTORY.md](/docs/reference/API_STORE_INVENTORY.md) |
| Matchmaking ticket / queue / match query | [guides/MULTIPLAYER.md](/docs/guides/MULTIPLAYER.md) · [reference/API_MULTIPLAYER.md](/docs/reference/API_MULTIPLAYER.md) |
| Content config + upload/download file metadata | [guides/CONTENT.md](/docs/guides/CONTENT.md) · [reference/API_CONTENT.md](/docs/reference/API_CONTENT.md) |
| CloudScript: viết script, publish version, execute function | [cloudScript/CLOUDSCRIPT_USAGE.md](/docs/cloudScript/CLOUDSCRIPT_USAGE.md) · [guides/CLOUDSCRIPT.md](/docs/guides/CLOUDSCRIPT.md) · [reference/API_CLOUDSCRIPT.md](/docs/reference/API_CLOUDSCRIPT.md) |
| Admin login, secret/maintenance/analytics | [guides/DASHBOARD.md](/docs/guides/DASHBOARD.md) · [reference/API_DASHBOARD.md](/docs/reference/API_DASHBOARD.md) |
| Realtime event (friend, group, message) | [reference/EVENTS.md](/docs/reference/EVENTS.md) |
| Viết custom DTO / payload event bằng `@DataMember`, `@StringDataMember`, `@NumberDataMember`, `@BooleanDataMember`, `@GNHashtableDataMember`, `@GNArrayDataMember` | [reference/DATAMEMBER.md](/docs/reference/DATAMEMBER.md) |
| Gặp `CustomOperationRequestAbstract<T>` / `CustomOperationResponseAbstract<T>` trong DTO reference | [reference/OPERATION_BASES.md](/docs/reference/OPERATION_BASES.md) |
| Tra DTO field theo class | [reference/DTO_INDEX.md](/docs/reference/DTO_INDEX.md) (grep) hoặc [reference/dto/](/docs/reference/dto/) |
| Enum value numeric | [reference/ENUMS.md](/docs/reference/ENUMS.md) |
| Config field của `GNServerSettings` | [reference/CONFIG.md](/docs/reference/CONFIG.md) |
| Permission flag / `OperationNotAllow` | [reference/PERMISSION_RULES.md](/docs/reference/PERMISSION_RULES.md) · [RULES.md § 6](/docs/RULES.md#6-permission-flags) |
| Cách check error / retry / debug | [reference/ERROR_HANDLING.md](/docs/reference/ERROR_HANDLING.md) |
| Scenario end-to-end (16 case) | [COOKBOOK.md](/docs/COOKBOOK.md) |
| Rule chung (route, permission, self/other-self, socket) | [RULES.md](/docs/RULES.md) |
| Machine-readable manifest cho tooling | [ai-manifest.json](/docs/ai-manifest.json) |

---

## Glossary bắt buộc

<!-- prettier-ignore -->
| Thuật ngữ | Nghĩa |
| --- | --- |
| `route` | Trust boundary của caller: client, server, hoặc admin. |
| `self` | Target thuộc user đang authenticate. |
| `other-self` | Target không thuộc user đang authenticate nhưng vẫn gọi qua route client. |
| `otherSelfEnable` | Tên permission flag trong backend config. Dùng spelling này trong code/docs. |
| `secretKey` | Key cấu hình permission per operation. Sai/thiếu secret trả `SecretInvalid`; secret đúng nhưng thiếu flag trả `OperationNotAllow`. |

---

## 3. Route decision (1 phút)

Route = **trust boundary của caller**, KHÔNG phải target ownership.

```
Code chạy ở đâu?
├─ App / browser của player           → GNNetwork.<group>           (Client)
├─ Trusted backend (game server,       → GNNetwork.<group>.server    (Server)
│  worker, webhook, internal svc)
└─ Backoffice / GM tool / dashboard    → GNNetwork.<group>.admin     (Admin)

Ngoại lệ: DashboardApi public wrapper vẫn đi RequestRole.Client; backend resolve admin từ authToken sau loginByAdminAccountAsync.
```

`self / other-self` chỉ áp dụng trên route `client`:

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

<!-- prettier-ignore -->
| Param | Khi nào cần |
| --- | --- |
| `overrideAuthToken` | Impersonate / multi-session / admin gọi trên user khác |
| `overrideSecretKey` | Override secret cho 1 request, ví dụ tool migration |
| `customTags` | Trace id, build version, A/B tag — backend có thể log/route |
| `timeout` | Override default per-request (giây) |

Trong code copy-paste, build `requestData` bằng DTO class public:

```ts
const request = new <Group>Models.<Method>RequestData();
request.someField = value;
const res = await GNNetwork.<group>.<method>Async(request);
```

Không dùng object literal rồi cast sang `RequestData`. Chi tiết: [RULES.md § 8.1](/docs/RULES.md#81-build-request-dto-trong-code-copy-paste).

Response field public (KHÔNG phải getter): `returnCode`, `errorCode`, `invalidMembers`, `debugMessage`, `responseData`. Helper method hợp lệ: `hasReturnCodeError()` (equivalent `returnCode !== ReturnCode.Ok`).
Nếu DTO reference ghi `Extends: CustomOperationRequestAbstract<TRequestData>`, `TRequestData` là payload được serialize vào request bằng `requestDataCls`. Nếu ghi `Extends: CustomOperationResponseAbstract<TResponseData>`, `TResponseData` là kiểu của `responseData` được deserialize bằng `responseDataCls`. Xem [reference/OPERATION_BASES.md](/docs/reference/OPERATION_BASES.md).

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

// Realtime handler — gán static field; cleanup bằng no-op hoặc wrapper dispatcher
OnGroupMessageUpdateEventHandler.onUpdate = (payload) => { ... };
OnGroupMessageUpdateEventHandler.onUpdate = () => {};
```

Realtime KHÔNG tự chạy chỉ vì đã gọi HTTP (friend/group/...). Phải subscribe handler liệt kê trong [reference/EVENTS.md](/docs/reference/EVENTS.md).

---

## 6. Top 5 pitfalls (phải tránh)

1. **Tưởng success là `0`** → `Ok === 1` cả 2 tầng.
2. **Skip tầng `returnCode`, đọc thẳng `errorCode`** → khi `returnCode !== Ok`, `errorCode` + `responseData` không đáng tin.
3. **Dùng getter `res.getReturnCode()`** → typed response dùng PUBLIC FIELDS.
4. **Dùng `.server` / `.admin` từ frontend để vượt permission** → trust boundary leak.
5. **`OperationNotAllow` = thiếu secret** → SAI. Secret hợp lệ nhưng permission rule cấm. Check route + flag. (`SecretInvalid` mới là lỗi secret sai.)

18 anti-patterns đầy đủ + cột "Triệu chứng / Fix": [RULES.md § 10](/docs/RULES.md#10-anti-patterns--pitfalls).

---

## 7. Diagnose `ReturnCode` (nhanh)

<!-- prettier-ignore -->
| Code | Nghĩa | Fix |
| --- | --- | --- |
| `Ok` | Sang tầng `errorCode` | — |
| `OperationTimeout` | Network/backend chậm | Retry với backoff nếu idempotent |
| `OperationNotAllow` | Permission rule cấm | Check route + permission flag (KHÔNG retry) |
| `InternalServerError` | Backend exception | Báo ops, có thể retry 1 lần |
| `OperationInvalid` | Operation không tồn tại với role hiện tại | Đang gọi sai namespace, sai `RequestType`/`RequestRole` |
| `InvalidRequestParameters` | Field invalid | Đọc `res.invalidMembers` để biết field nào |
| `OperationNotAuthorized` | Không auth với target | Check `authToken` còn hợp lệ |
| `MaxCCUReject` | Vượt CCU limit | Backoff retry |
| `MaxRequestReject` | Rate limit | Exponential backoff |
| `MaxSizeRequestReject` | Payload quá to | Paginate / split |
| `SecretInvalid` | Secret sai/thiếu/không khớp game | Fix `GNServerSettings` (KHÔNG retry) |

So sánh bằng enum symbol, không hardcode số. Giá trị numeric: [reference/ENUMS.md](/docs/reference/ENUMS.md). Full table + `ErrorCode`: [reference/ERROR_HANDLING.md](/docs/reference/ERROR_HANDLING.md).

Gặp `OperationNotAllow` — decision tree + code fallback: [COOKBOOK Scenario 16](/docs/COOKBOOK.md#scenario-16-diagnose-operationnotallow). Mapping route → flag cần: [RULES § 6.1](/docs/RULES.md#61-mapping-route-target--required-flag).

---

## 8. Khi nào ĐƯỢC đọc `src/`

- Đang sửa chính SDK
- Verify behavior nội bộ chưa được docs cover
- Tích hợp package: **chỉ** dùng `AGENTS.md + docs + dist/*.d.ts`. Không bám `src/` cho integration code.

---

## 9. Liên kết quan trọng

- Single-source-of-truth rules: [RULES.md](/docs/RULES.md)
- AI entry guide chi tiết: [../AGENTS.md](/AGENTS.md)
- Machine manifest: [ai-manifest.json](/docs/ai-manifest.json)
- Concatenated bundle (optional, generated artifact): [llms-full.txt](/docs/llms-full.txt). Không dùng file này làm nguồn thắng khi nó mâu thuẫn với source docs.
- llmstxt.org index: [llms.txt](/llms.txt)
