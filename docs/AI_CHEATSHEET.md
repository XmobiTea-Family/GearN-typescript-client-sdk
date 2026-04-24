# AI Cheatsheet

One-page reference cho AI agent / code assistant. Đọc file này trước, đào sâu khi cần.

> Package: `@xmobitea/gn-typescript-client` · Entry point: `GNNetwork` (static class) · Stack: HTTP + WebSocket realtime.

---

## 1. Mandatory pattern (sao chép & dùng)

```ts
import { GNNetwork, GNServerSettings, ReturnCode, ErrorCode, MessageType, LogType } from "@xmobitea/gn-typescript-client";

const settings: GNServerSettings = {
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
  logType: LogType.Error,
}

// Bootstrap — gọi 1 lần, idempotent
GNNetwork.init(settings);

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
| MasterPlayer profile (master account dùng chung trong các game), statistics, statistics leaderboard, statistics leaderboard around player, statistics logs, currencies, currencies leaderboard, currencies log, player data, custom data, external link, external unlink, display name, get player with display name (lấy danh sách những MasterPlayer có display name theo regex), avatar, ts create, create leaderboard (xem những MasterPlayer mới được tạo), segment, tag, ban status, ip address create, country code, email, send email, ts last login, push notification, send push notification | [guides/MASTER_PLAYER.md](guides/MASTER_PLAYER.md) · [reference/API_MASTER_PLAYER.md](reference/API_MASTER_PLAYER.md) |
| GamePlayer profile (game account dùng cho riêng cho từng enviroment game, có thể tạo thêm enviroment từ GearN Dashboard, mặc định có `dev` và `live`, GamePlayer được bổ sung thêm friend, group, inventory, online status), statistics, statistics leaderboard, statistics leaderboard around player, statistics logs, currencies, currencies leaderboard, currencies log, player data, custom data, display name, get players with display name (lấy danh sách những GamePlayer có display name theo regex), avatar, ts create, create leaderboard (xem những GamePlayer mới được tạo), segment, get players with segment, tag, get players with tag, ban status, ip address create, country code, ts last login, add friend, remove friend, create CharacterPlayer, remove CharacterPlayer, create Group, join Group, leave Group, create Item (inventory), remove Item, friend statistics leaderboard, friend statistics leaderboard around player | [guides/GAME_PLAYER.md](guides/GAME_PLAYER.md) · [reference/API_GAME_PLAYER.md](reference/API_GAME_PLAYER.md) |
| CharacterPlayer profile (khi game cần nhiều dạng nhân vật nhỏ, mỗi nhân vật đều có một đặc tính riêng biệt, những nhân vật này thuộc sở hữu của GamePlayer, chẳng hạn như các pokemon là những CharacterPlayer thuộc về quyền sở hữu của huấn luyện viên (GamePlayer), hoặc Game có đặc thù được tạo thêm nhiều nhân vật phụ để có thể chơi thì sử dụng CharacterPlayer), statistics, statistics leaderboard, statistics leaderboard around player, statistics logs, currencies, currencies leaderboard, currencies log, player data, custom data, display name, get players with display name (lấy danh sách những CharacterPlayer có display name theo regex), avatar, ts create, create leaderboard (xem những CharacterPlayer mới được tạo), segment, get players with segment, tag, get players with tag, ban status, ip address create, country code, ts last login, add friend, remove friend, create CharacterPlayer, remove CharacterPlayer, create Group, join Group, leave Group, create Item (inventory), remove Item, friend statistics leaderboard, friend statistics leaderboard around player | [guides/CHARACTER_PLAYER.md](guides/CHARACTER_PLAYER.md) · [reference/API_CHARACTER_PLAYER.md](reference/API_CHARACTER_PLAYER.md) |
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
├─ App / browser của player           → GNNetwork.<group>           (Client)
├─ Trusted backend (game server,       → GNNetwork.<group>.server    (Server)
│  worker, webhook, internal svc)
└─ Backoffice / GM tool / dashboard    → GNNetwork.<group>.admin     (Admin)

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

## 6. Top 5 pitfalls (phải tránh)

1. **Tưởng success là `0`** → `Ok === 1` cả 2 tầng.
2. **Skip tầng `returnCode`, đọc thẳng `errorCode`** → khi `returnCode !== Ok`, `errorCode` + `responseData` không đáng tin.
3. **Dùng getter `res.getReturnCode()`** → typed response dùng PUBLIC FIELDS.
4. **Dùng `.server` / `.admin` từ frontend để vượt permission** → trust boundary leak.
5. **`OperationNotAllow` = thiếu secret** → SAI. Secret hợp lệ nhưng permission rule cấm. Check route + flag.

18 anti-patterns đầy đủ + cột "Triệu chứng / Fix": [RULES.md § 10](RULES.md#10-anti-patterns--pitfalls).

---

## 7. Diagnose `ReturnCode` (nhanh)

| Code | Nghĩa | Fix |
|---|---|---|
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

So sánh bằng enum symbol, không hardcode số. Giá trị numeric: [reference/ENUMS.md](reference/ENUMS.md). Full table + `ErrorCode`: [reference/ERROR_HANDLING.md](reference/ERROR_HANDLING.md).

Gặp `OperationNotAllow` — decision tree + code fallback: [COOKBOOK Scenario 16](COOKBOOK.md#scenario-16-diagnose-operationnotallow). Mapping route → flag cần: [RULES § 6.1](RULES.md#61-mapping-route-target--required-flag).

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
