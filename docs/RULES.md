# RULES — Single Source of Truth

File này là canonical source cho mọi rule cross-cutting: route/permission, self/other-self, auth/socket, error handling, override params, anti-patterns. Các file khác (`README.MD`, `AGENTS.md`, guides) đều link tới đây thay vì lặp lại.

> Nếu phát hiện mâu thuẫn giữa RULES.md và file khác, RULES.md thắng.

---

## 1. Init

- Public entrypoint duy nhất là static class `GNNetwork` (import từ `@xmobitea/gn-typescript-client`).
- Bắt buộc gọi `GNNetwork.init(new GNServerSettings({...}))` **1 lần** ở bootstrap của mỗi app session.
- `init()` idempotent — lần thứ 2 bị ignore. Muốn đổi config phải restart process.
- Gọi API trước khi init → namespace `undefined` / `TypeError`.
- Config field: xem [reference/CONFIG.md](reference/CONFIG.md).

---

## 2. Response checking (2-tier)

Typed response (mọi `*Async()` và callback form) expose **PUBLIC FIELDS** — không phải getter:

```ts
res.returnCode       // transport/gateway layer
res.errorCode        // business/domain layer
res.invalidMembers   // chỉ set khi returnCode === InvalidRequestParameters
res.debugMessage     // backend debug string
res.responseData     // typed payload, chỉ set khi returnCode === Ok
```

Pattern bắt buộc, đúng thứ tự:

```ts
if (res.returnCode !== ReturnCode.Ok) return; // transport/permission fail
if (res.errorCode  !== ErrorCode.Ok)  return; // business fail
useResult(res.responseData);                  // happy path
```

Rule cứng:

- `Ok === 1` ở **cả** `ReturnCode` và `ErrorCode`. Không giả định `Ok === 0`.
- Không skip tầng 1 để đọc thẳng `errorCode`; khi `returnCode !== Ok`, `errorCode` và `responseData` **không đáng tin**.
- Không hardcode số (`if (res.returnCode === 1)`). So sánh bằng enum symbol.
- `*Async()` **không throw** business/transport error — reject Promise chỉ khi transport layer thật sự fail (network exception, serialization fail).
- Low-level raw `OperationResponse` (không dùng typed wrapper) có getter `getReturnCode()` etc. — chỉ dùng khi tự viết custom op.

Full table ReturnCode/ErrorCode + recommended action: [reference/ERROR_HANDLING.md](reference/ERROR_HANDLING.md). Phân biệt `SecretInvalid` / `OperationInvalid` / `OperationNotAllow` → § 5.

---

## 3. Route = trust boundary của caller

Route `client / server / admin` mô tả **bên gọi** thực sự ở đâu, không phải target của mình hay của người khác.

| Route | Dùng khi code chạy ở |
|---|---|
| `client` (`GNNetwork.<group>`) | App / browser / mobile của player |
| `server` (`GNNetwork.<group>.server`) | Trusted backend: game server, internal service, worker, cron, webhook |
| `admin` (`GNNetwork.<group>.admin`) | Backoffice, dashboard, GM tool, migration tool, ops |

Rule cứng:

- Không chọn `server`/`admin` chỉ vì target không thuộc user hiện tại.
- Không dùng `.server` / `.admin` từ app client chỉ để vượt permission — bị coi là trust boundary leak, secret sẽ bị expose.
- Không suy diễn route chỉ từ việc request có hay không có `userId`.
- Route `server`/`admin` yêu cầu `secretKey` có flag `serverSelfEnable` / `adminSelfEnable` tương ứng (hoặc truyền `overrideSecretKey`).

### Ngoại lệ: `DashboardApi`

- Sau `loginByAdminAccountAsync` thành công, backend resolve admin context từ `authToken` — caller **không** cần cấu hình `secretKey` admin riêng.
- Public wrapper `GNNetwork.dashboard.*` vẫn đi `RequestRole.Client`.
- `GNNetwork.dashboard.server` và `GNNetwork.dashboard.admin` hiện **rỗng** (không có operation public).

---

## 4. `self` vs `other self` (chỉ áp dụng trên route `client`)

Backend suy ra thêm target context `self / other self` cho route `client`:

| Domain | `self` = |
|---|---|
| `MasterPlayerApi`, `GamePlayerApi` | `userId` trong request trùng `userId` đã authenticate (hoặc request không truyền `userId`) |
| `CharacterPlayerApi`, `InventoryApi`, `GroupApi` | Entity target thuộc ownership của `GamePlayer` có `userId` trùng user đang authenticate |
| `ContentApi`, `StoreInventoryApi`, `MultiplayerApi`, `CloudScriptApi` | **Không có ownership rõ ràng** — không ép self/other-self; chọn route theo trust boundary + để backend áp permission theo contract operation |

Rule cứng:

- `self / other self` **không** phải `server / admin`. `server / admin` là route đặc quyền riêng.
- Không vì muốn thao tác lên data user khác mà tự động chuyển sang `.server` / `.admin`.
- Ví dụ đúng:
  - App player gọi `masterPlayer.getPlayerInformationAsync()` cho user đang login → `client + self`.
  - App player gọi `masterPlayer.getPlayerInformationAsync(otherUserId)` → `client + other self`.
  - Game server gọi `gamePlayer.server.changePlayerCurrencyAsync(...)` → `server` (không phải `client + other self`).
  - GM tool gọi `inventory.admin.setRemoveStatusAsync(...)` → `admin`.

---

## 5. Phân biệt 3 ReturnCode dễ nhầm

| Code | Nghĩa | Fix |
|---|---|---|
| `SecretInvalid` | Secret key sai, thiếu, hoặc không khớp game context | Fix `GNServerSettings.secretKey`. **KHÔNG retry**. |
| `OperationInvalid` | Operation code không tồn tại, hoặc không hợp lệ với `RequestType` + `RequestRole` hiện tại | Check namespace đang gọi + đúng method trong `API_<GROUP>.md`. |
| `OperationNotAllow` | Secret hợp lệ **và** operation tồn tại, NHƯNG permission rule của secret không cho phép trong target context | Check route + flag `selfEnable`/`otherSelfEnable`/`serverSelfEnable`/`adminSelfEnable`. **KHÔNG retry**. |

Cùng gia đình nhưng ý nghĩa khác hẳn — đừng confuse "secret sai" với "secret đúng nhưng không đủ quyền".

---

## 6. Permission flags

GearN Server map quyền theo từng domain + operation (ví dụ `masterPlayer.getPlayerInformation`, `group.sendGroupMessage`). Mỗi secret key có 4 flag chính:

| Flag | Nghĩa |
|---|---|
| `selfEnable` | Cho phép thao tác trên tài nguyên thuộc user đã authenticate |
| `otherSelfEnable` | Cho phép thao tác trên tài nguyên không thuộc user đã authenticate |
| `serverSelfEnable` | Cho phép thực thi qua route `server` |
| `adminSelfEnable` | Cho phép thực thi qua route `admin` |

Danh sách operation đầy đủ theo domain: **https://docs.gearn.net/permissionRules** (authoritative source, backend admin config qua dashboard).

### 6.1 Mapping (route, target) → required flag

Đây là quy tắc **uniform** cho mọi operation. Kết hợp với [§ 4 self / other self](#4-self-vs-other-self-chỉ-áp-dụng-trên-route-client) để xác định target.

| Caller gọi | Target | Flag cần trên secret key |
|---|---|---|
| `GNNetwork.<group>.<method>()` — bỏ userId hoặc userId trùng auth | Self | `selfEnable` của operation |
| `GNNetwork.<group>.<method>(otherUserId)` | Other self | `otherSelfEnable` của operation |
| `GNNetwork.<group>.server.<method>(...)` | Bất kỳ | `serverSelfEnable` của operation |
| `GNNetwork.<group>.admin.<method>(...)` | Bất kỳ | `adminSelfEnable` của operation |

Ngoại lệ: domain không có ownership (`ContentApi`, `StoreInventoryApi`, `MultiplayerApi`, `CloudScriptApi`) — `self` / `other self` không áp dụng trên route `client`; backend áp rule theo contract operation.

### 6.2 Ai config flag, client có đổi được không?

- Permission rule được **backend admin** config trên dashboard GearN Server theo **từng `secretKey` × từng operation × từng flag**.
- Client **không** tự đổi được flag. Chỉ có 3 option khi thiếu quyền:
  1. Dùng `secretKey` khác trong `GNServerSettings` (cấu hình từ bootstrap).
  2. Truyền `overrideSecretKey` per-request.
  3. Yêu cầu backend admin bật flag cho secret hiện tại.
- Danh sách operation theo domain (authoritative): [docs.gearn.net/permissionRules](https://docs.gearn.net/permissionRules).

### 6.3 Scenario điển hình trigger `OperationNotAllow`

| # | Code thực tế | Root cause | Fix |
|---|---|---|---|
| 1 | App player: `masterPlayer.getPlayerInformationAsync(otherUserId)` | Secret client không có `otherSelfEnable` cho `masterPlayer.getPlayerInformation` | Backend admin bật `otherSelfEnable`, hoặc chuyển flow sang server-side |
| 2 | Script dev: `inventory.admin.setAmountAsync(...)` với secret client thường | Secret không có `adminSelfEnable` cho `inventory.setAmount` | Dùng secret admin qua `overrideSecretKey`, hoặc cấu hình `GNServerSettings.secretKey` = secret admin |
| 3 | Game server: `GNNetwork.group.joinGroupAsync(...)` (route client) | Secret server không có `selfEnable` cho `group.joinGroup` | Chuyển sang `GNNetwork.group.server.joinGroupAsync(...)` — dùng `serverSelfEnable` |
| 4 | Backend worker: `gamePlayer.server.changePlayerCurrencyAsync(...)` bỏ `userId` | Route `server`/`admin` yêu cầu `userId` rõ ràng (xem [§ 4](#4-self-vs-other-self-chỉ-áp-dụng-trên-route-client)) | Truyền `userId` target |
| 5 | Admin tool: `masterPlayer.admin.setPlayerBanAsync(...)` | Secret admin bị backend giới hạn operation đó | Hỏi backend admin bật `adminSelfEnable` cho `masterPlayer.setPlayerBan` |

### 6.4 Checklist nhanh khi gặp `ReturnCode.OperationNotAllow`

Theo đúng thứ tự:

1. Xác định route đang gọi (`client` / `.server` / `.admin`).
2. Xác định target là `self` hay `other self` (xem [§ 4](#4-self-vs-other-self-chỉ-áp-dụng-trên-route-client)).
3. Tra bảng § 6.1 → ra flag cần (ví dụ `otherSelfEnable`).
4. Check secret key active có flag đó cho operation đang gọi không? → xem backend dashboard hoặc hỏi admin.
5. Nếu không → 3 option ở § 6.2.

**Không retry** — đây là config fix, không phải transient error.

Diagnose end-to-end với code: [COOKBOOK Scenario 16](COOKBOOK.md#scenario-16-diagnose-operationnotallow).

---

## 7. Auth & Socket flow

Flow chuẩn:

```
1. Login HTTP (GNNetwork.authenticate.loginByXxxAsync) → SDK cache authToken + userId vào StorageService
2. Nếu app cần realtime: GNNetwork.connectSocket()
3. Khi socket connect, SDK tự gửi authToken hiện tại cho backend
4. (Chỉ khi cần) GNNetwork.sendRequestAuthSocket() — re-auth thủ công, không reconnect
```

Rule cứng:

- **Không gộp** auth socket với auth HTTP. Socket auth là bước riêng sau HTTP.
- Không bắt buộc gọi `sendRequestAuthSocket()` sau mỗi `connectSocket()`. SDK auto-auth nếu token đã có.
- Gọi `sendRequestAuthSocket()` chỉ khi:
  - Socket connect **trước** khi có `authToken` (login xảy ra sau socket up).
  - Token vừa đổi và muốn re-auth ngay mà không reconnect socket.
- Không giả định realtime event tự chạy chỉ vì đã gọi method HTTP friend/group. Phải subscribe handler trong [reference/EVENTS.md](reference/EVENTS.md).
- Subscribe event handler **trước** `connectSocket()` để không miss event ngay sau handshake.

Helper state:

- `GNNetwork.isSocketConnected()` — check socket session id hiện tại.
- `GNNetwork.getPing()` — ping trung bình từ active transport.
- `GNNetwork.syncTs()` — sync local estimate của server timestamp.
- `GNNetwork.getAuthenticateStatus().getAuthToken() / .getUserId()` — đọc auth cache.

---

## 8. Method signature & override params

Đa số method có 2 form:

```ts
// Callback
GNNetwork.<group>.<method>(requestData, onResponse?, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?);

// Async (preferred)
const res = await GNNetwork.<group>.<method>Async(requestData, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?);
```

| Param | Khi nào cần |
|---|---|
| `overrideAuthToken: string` | Impersonate / multi-session / admin thao tác trên user khác mà không dùng auth cache hiện tại |
| `overrideSecretKey: string` | Override secret cho 1 request, ví dụ migration tool gọi `.admin` từ script ngoài |
| `customTags: GNHashtable` | Tag trace id, build version, A/B bucket — backend có thể log/route |
| `timeout: number` | Override `defaultTimeoutInSeconds` per-request (giây) |

Ví dụ `customTags`:

```ts
const tags = GNHashtable.builder()
  .add("traceId", "trace-001")
  .add("build", "qa")
  .build();
```

---

## 9. Platform & transport

- Node ≥ 20. Custom DTO có decorator cần bật `experimentalDecorators` + `emitDecoratorMetadata`.
- `MessageType.MsgPack` + HTTP trên browser → SDK tự fallback JSON. Không cần override toàn SDK sang `MessageType.Json`.
- Cocos Creator: giữ 2 flag TS decorator nêu trên khi có custom DTO.
- Detect platform runtime: `GNSupport.getPlatformType()`.

---

## 10. Anti-patterns & pitfalls

Bảng hợp nhất — cột "Triệu chứng" mô tả lỗi runtime thường thấy, cột "Fix" là hành động đúng.

| # | Anti-pattern | Triệu chứng | Fix |
|---|---|---|---|
| 1 | Giả định success là `0` | So sánh `=== 0` luôn false, code tưởng fail | `Ok === 1` cả `ReturnCode` và `ErrorCode`. So sánh bằng enum symbol. |
| 2 | Skip tầng 1, đọc thẳng `errorCode` | Business code branching nhầm vì `errorCode` chưa valid | Check `returnCode !== Ok` **trước**, return sớm. |
| 3 | Dùng getter `res.getReturnCode()` | `undefined is not a function` trên typed response | Typed response dùng PUBLIC FIELDS. Getter chỉ trên raw `OperationResponse`. |
| 4 | Gọi API trước `GNNetwork.init()` | `TypeError`, namespace `undefined` | Init 1 lần ở bootstrap. Idempotent — không re-init để đổi config. |
| 5 | Re-init để đổi config | Config cũ vẫn active | `init()` idempotent; restart process mới đổi được. |
| 6 | Dùng `.server` / `.admin` từ frontend để vượt permission | Trust boundary leak, secret expose | Route là trust boundary của **caller**, không phải target ownership. |
| 7 | Tự gọi `sendRequestAuthSocket()` sau mọi `connectSocket()` | Redundant call, có thể gây re-auth loop | SDK auto-auth nếu token có. Chỉ gọi tay khi token đến sau socket up hoặc token vừa đổi. |
| 8 | Subscribe event SAU `connectSocket()` | Miss event ngay sau handshake | Subscribe handler trước, rồi mới connect. |
| 9 | `editFunctionAsync` (CloudScript) để sửa source code | Source không đổi, chỉ flag thay | Đổi source = `addFunctionAsync` tạo version mới. |
| 10 | `MultiplayerApi` gửi qua socket | Không reach backend | Multiplayer dùng HTTP. Flow: create ticket → poll `getMatchmakingTicket` → `getMatch`. |
| 11 | `infoRequestParam = null` trong login | Backend không hydrate gì cả | Truyền instance dù chỉ bật ít field. |
| 12 | Bulk-set mọi field của `infoRequestParam` | Payload bự, slow | Chỉ bật field thật sự render. |
| 13 | Browser + `MessageType.MsgPack` → override toàn SDK sang JSON | Over-engineering | HTTP transport auto-fallback JSON; giữ MsgPack là ok. |
| 14 | `OperationNotAllow` = thiếu secret | Fix sai hướng, thay secret vô nghĩa | Xem § 5: secret hợp lệ nhưng permission rule cấm. |
| 15 | Bịa method / field không có trong `dist/*.d.ts` | Compile fail hoặc runtime `undefined` | Tra `API_<GROUP>.md` / `dto/<DOMAIN>.md` / `dist/*.d.ts`. Không suy diễn. |
| 16 | Giả định realtime tự chạy sau HTTP call | Không nhận event | Phải subscribe handler trong [reference/EVENTS.md](reference/EVENTS.md). |
| 17 | Bỏ qua `overrideAuthToken` / `overrideSecretKey` / `customTags` / `timeout` khi cần | Impersonate fail, timeout mặc định không đủ | Xem § 8. |
| 18 | Dùng `src/` làm nguồn public contract | Phụ thuộc internal, rot nhanh | `src/` chỉ khi sửa SDK / debug nội bộ. |

---

## 11. Canonical sources (thứ tự ưu tiên)

Khi sinh code:

1. **API reference theo domain** (`docs/reference/API_<GROUP>.md`) — method signature, request DTO, async form, response class.
2. **Guide theo domain** (`docs/guides/<GROUP>.md`) — decision rules, gotchas domain-specific.
3. **RULES.md** (file này) + [ai-manifest.json](ai-manifest.json) — rule cross-cutting.
4. **DTO field table** (`docs/reference/dto/<DOMAIN>.md` hoặc grep `DTO_INDEX.md`) — field-level schema.
5. **ENUMS.md** — giá trị numeric.
6. **`dist/*.d.ts`** — fallback nếu docs chưa cover.

Chỉ đọc `src/` khi:
- Sửa chính SDK.
- Debug behavior nội bộ.
- Verify public contract mà docs + `dist` chưa đủ.

---

## Liên kết

- [AI_CHEATSHEET.md](AI_CHEATSHEET.md) — one-page reference
- [COOKBOOK.md](COOKBOOK.md) — 15 scenario end-to-end
- [reference/API_INDEX.md](reference/API_INDEX.md) — bảng method mọi group
- [reference/ERROR_HANDLING.md](reference/ERROR_HANDLING.md) — full return/error code table
- [reference/EVENTS.md](reference/EVENTS.md) — realtime event handler
- [reference/CONFIG.md](reference/CONFIG.md) — `GNServerSettings` schema
- [reference/ENUMS.md](reference/ENUMS.md) — enum numeric value
- [ai-manifest.json](ai-manifest.json) — machine-readable manifest
