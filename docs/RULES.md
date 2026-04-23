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

Full table ReturnCode/ErrorCode + recommended action: [reference/ERROR_HANDLING.md](reference/ERROR_HANDLING.md).

### Phân biệt 3 return code dễ nhầm

- `ReturnCode.SecretInvalid` (-10): secret key sai, thiếu, hoặc không khớp game context.
- `ReturnCode.OperationInvalid` (-4): operation code không tồn tại, hoặc sai với request type + role hiện tại.
- `ReturnCode.OperationNotAllow` (-2): operation tồn tại và secret hợp lệ, NHƯNG `permission rules` của secret không cho phép operation trong target context. **Không phải** thiếu secret.

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
- Route `server` chỉ gọi được khi `secretKey` được setup có `permission rules` là `server` hợp lệ được set (hoặc truyền `overrideSecretKey`).
- Route `admin` tương tự, cần `secretKey` được setup có `permission rules` là `admin` hợp lệ.

### Ngoại lệ: `DashboardApi`

Wrapper public hiện tại của `DashboardApi`:
- Không cần dùng `secretKey` mặc định, sau khi login thành công sẽ luôn được dùng bằng `secretKey` của riêng admin này, backend tự xử lí không cần xử lí phía client.
- Sau `loginByAdminAccountAsync` thành công, backend middleware resolve secret context và quyền admin từ `authToken` cho các request dashboard tiếp theo.
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

## 5. Permission flags

GearN Server map quyền theo từng domain + operation (ví dụ `masterPlayer.getPlayerInformation`, `group.sendGroupMessage`). Mỗi secret key có 4 flag chính:

| Flag | Nghĩa |
|---|---|
| `selfEnable` | Cho phép thao tác trên tài nguyên thuộc user đã authenticate |
| `otherSelfEnable` | Cho phép thao tác trên tài nguyên không thuộc user đã authenticate |
| `serverSelfEnable` | Cho phép thực thi qua route `server` |
| `adminSelfEnable` | Cho phép thực thi qua route `admin` |

### Khi gặp `ReturnCode.OperationNotAllow`

Kiểm tra đúng thứ tự:

1. Đang dùng đúng route `client / server / admin` chưa?
2. Secret key active có permission đúng domain + operation chưa?
3. Operation rơi vào nhánh `self` hay `other self`?
4. Nếu route `server` / `admin`: secret có `serverSelfEnable` / `adminSelfEnable` chưa?

Không retry — đây là config fix, không phải transient error.

---

## 6. Auth & Socket flow

Flow chuẩn:

```
1. Login HTTP (GNNetwork.authenticate.loginByXxxAsync) → SDK cache authToken + userId + gameId vào StorageService
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
- `GNNetwork.getGameId() / .setGameId(...)` — gameId persist qua `StorageService`.

---

## 7. Method signature & override params

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

## 8. Platform & transport

- Node ≥ 20. Custom DTO có decorator cần bật `experimentalDecorators` + `emitDecoratorMetadata`.
- `MessageType.MsgPack` + HTTP trên browser → SDK tự fallback JSON. Không cần override toàn SDK sang `MessageType.Json`.
- Cocos Creator: giữ 2 flag TS decorator nêu trên khi có custom DTO.
- Detect platform runtime: `GNSupport.getPlatformType()`.

---

## 9. Anti-patterns (BẮT BUỘC tránh)

- ❌ Bịa method / field không có trong `dist/*.d.ts`.
- ❌ Suy diễn "operation tương tự chắc cũng trả id" khi docs không nói.
- ❌ Giả định realtime tự chạy chỉ vì đã gọi HTTP.
- ❌ Giả định `MultiplayerApi` dùng socket (hiện là HTTP).
- ❌ Giả định `editFunctionAsync` (CloudScript) sửa source code (chỉ flag enabled/live).
- ❌ Dùng `.server` / `.admin` chỉ vì target là user khác.
- ❌ Bỏ qua `overrideAuthToken`, `overrideSecretKey`, `customTags`, `timeout` nếu use case thực tế cần.
- ❌ Dùng `src/` làm nguồn public contract — `src/` chỉ đọc khi sửa SDK, debug internal, hoặc verify điểm mà docs + dist chưa đủ.
- ❌ Giả định success là `0`.
- ❌ Skip check `returnCode`, đọc thẳng `errorCode`.
- ❌ Dùng getter `res.getReturnCode()` trên typed response (chỉ dùng trên raw `OperationResponse`).

---

## 10. Canonical sources (thứ tự ưu tiên)

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
