# GearN TypeScript Client SDK - AI Entry Guide

File này là entry point cho AI agent/code assistant khi làm việc với repo hoặc package này.

Mục tiêu:

- Sinh code tích hợp SDK đúng ngay từ đầu.
- Không cần đọc `src/` để hiểu public contract thông thường.
- Tránh suy diễn sai về route, secret key, permission, auth flow và socket flow.

## 1. Đọc Theo Thứ Tự

AI phải đọc theo thứ tự này:

1. [README.MD](README.MD)
2. [Machine-readable manifest](docs/ai-manifest.json)
3. [Route và permission rules trong README](README.MD#route-and-permission-rules)
4. [Socket auth flow trong README](README.MD#socket-auth-flow)
5. API README đúng với domain đang dùng trong `docs/`
6. Public type trong `dist/**/*.d.ts`

Rule cứng:

- Không bắt đầu từ `src/` nếu mục tiêu chỉ là dùng public SDK.
- Không trích dẫn hay phụ thuộc vào `src/` khi viết code tích hợp package publish.
- Nếu docs chưa nói rõ một field hoặc response shape, chỉ nhìn thêm `dist/*.d.ts`.
- Nếu AI/tooling ưu tiên machine-readable input, dùng `docs/ai-manifest.json` trước rồi mới đọc markdown chi tiết.
- Nếu `docs` và `dist` vẫn chưa đủ để kết luận, phải hỏi lại con người hoặc ghi rõ giả định; không tự bịa behavior.

## 2. Public Entry Point

- Public entrypoint duy nhất là `GNNetwork`.
- Luôn gọi `GNNetwork.init(settings)` trước mọi API call.
- Chỉ gọi `GNNetwork.init(settings)` 1 lần ở bootstrap của mỗi app session.
- Không re-init trong cùng app session để đổi config; `GNNetwork.init()` là idempotent và các lần gọi sau sẽ bị bỏ qua.
- Mặc định ưu tiên `async/await` và các method `*Async()`.
- Không ưu tiên callback style trừ khi codebase hiện tại đã dùng callback nhất quán.

## 3. Error Handling Cứng

- Luôn kiểm tra `returnCode` trước.
- Sau đó mới kiểm tra `errorCode`.
- Không giả định success là `0`.
- Public contract hiện tại:
  - `ReturnCode.Ok === 1`
  - `ErrorCode.Ok === 1`

Hiểu nhanh:

- `SecretInvalid`: secret key sai, thiếu, hoặc không khớp context.
- `OperationInvalid`: operation không tồn tại hoặc không hợp lệ với request type/role.
- `OperationNotAllow`: secret key vẫn hợp lệ, operation vẫn tồn tại, nhưng permission rules của secret key không cho phép chạy operation trong target context hiện tại.

Nếu gặp `OperationNotAllow`, phải kiểm tra:

1. đang dùng đúng route `client/server/admin` chưa
2. secret key có quyền đúng domain + operation chưa
3. operation đang rơi vào `self` hay `other self`
4. nếu là route `server/admin`, secret key có `serverSelfEnable` hoặc `adminSelfEnable` chưa

## 4. Chọn Route Đúng

`client/server/admin` là trust boundary của caller, không phải cách phân loại target là của mình hay của người khác.

- `client`: code chạy trong app/player client
- `server`: code chạy trong trusted backend như game server, internal service, worker, cron, webhook backend
- `admin`: code chạy trong backoffice, dashboard, GM tool, migration tool, vận hành dữ liệu

Rule cứng:

- Không chọn `server` hay `admin` chỉ vì target không thuộc user hiện tại.
- Không dùng `.server` hoặc `.admin` từ app client chỉ để vượt permission.
- Không suy diễn route chỉ từ việc request có hay không có `userId`.

Secret key:

- Route `client` dùng `clientSecretKey` nếu không truyền `overrideSecretKey`.
- Route `server` chỉ dùng khi đã cấu hình `serverSecretKey` hợp lệ hoặc chủ động truyền `overrideSecretKey`.
- Route `admin` chỉ dùng khi đã cấu hình `adminSecretKey` hợp lệ hoặc chủ động truyền `overrideSecretKey`.

## 5. Hiểu `self` và `other self`

`self/other self` là target context backend suy ra thêm trên route `client`.

Không nhầm:

- `self/other self` != `server/admin`
- `server/admin` là route riêng với permission riêng

Ngữ nghĩa đúng:

- Với `MasterPlayerApi` và `GamePlayerApi`, `self` nghĩa là target `userId` trùng `userId` đã authenticate thành công.
- Nếu request không truyền `userId`, hoặc truyền `userId` đúng bằng user đang authenticate, backend xử lý theo nhánh `self`.
- Nếu request truyền `userId` khác user đang authenticate, backend xử lý theo nhánh `other self`.
- Với `CharacterPlayerApi`, `InventoryApi`, `GroupApi`, `self` nghĩa là entity target thuộc ownership của `GamePlayer` có `userId` trùng với user đã authenticate.
- Với `ContentApi`, `StoreInventoryApi`, `MultiplayerApi`, `CloudScriptApi` và các domain không có ownership player rõ ràng, không cố ép về `self/other self`; vẫn chọn route theo trust boundary của caller.

## 6. Auth Và Socket Flow

Flow chuẩn:

1. login hoặc refresh token qua HTTP
2. sau khi SDK đã có `authToken`, nếu cần realtime thì gọi `GNNetwork.connectSocket()`
3. nếu socket connect khi token đã có trong cache, SDK sẽ tự auth socket
4. chỉ gọi `GNNetwork.sendRequestAuthSocket()` khi cần re-auth thủ công

Rule cứng:

- Không gộp auth socket với auth HTTP.
- Không bắt buộc gọi tay `sendRequestAuthSocket()` sau mọi lần `connectSocket()`.
- Nếu socket connect trước khi token xuất hiện, hoặc token vừa đổi và không muốn reconnect, mới gọi `GNNetwork.sendRequestAuthSocket()`.

## 7. DashboardApi Là Ngoại Lệ

`DashboardApi` không đi theo pattern `.server/.admin` public như các group khác.

Rule đúng:

- Public wrapper hiện tại của `DashboardApi` dùng `RequestRole.Client`.
- Nếu không truyền `overrideSecretKey`, transport mặc định vẫn gắn `clientSecretKey`.
- Sau `loginByAdminAccountAsync`, backend middleware sẽ resolve secret context và quyền admin riêng từ `authToken`.
- Không giả định SDK tự đổi local secret key sang `adminSecretKey`.
- Không dùng `GNNetwork.dashboard.server.*` hoặc `GNNetwork.dashboard.admin.*` vì hiện chưa có public method nào để gọi.

## 8. Chọn Đúng API Group

- Player login, register, refresh token: [AUTHENTICATE_API_README.md](docs/AUTHENTICATE_API_README.md)
- Dashboard, analytics, secret, maintenance, admin login: [DASHBOARD_API_README.md](docs/DASHBOARD_API_README.md)
- Content config, file upload metadata, download token: [CONTENT_API_README.md](docs/CONTENT_API_README.md)
- Matchmaking ticket, queue statistics, match query: [MULTIPLAYER_API_README.md](docs/MULTIPLAYER_API_README.md)
- Store item, buy/present, receipt validation, store log: [STORE_INVENTORY_API_README.md](docs/STORE_INVENTORY_API_README.md)
- Inventory item metadata, statistics, owner, amount, logs: [INVENTORY_API_README.md](docs/INVENTORY_API_README.md)
- Group metadata, member, message, group inventory/currency/statistics: [GROUP_API_README.md](docs/GROUP_API_README.md)
- Master player account/profile/identity: [MASTER_PLAYER_API_README.md](docs/MASTER_PLAYER_API_README.md)
- Game player gameplay/profile/friend/group/character relation: [GAME_PLAYER_API_README.md](docs/GAME_PLAYER_API_README.md)
- Character-level gameplay/social/profile: [CHARACTER_PLAYER_API_README.md](docs/CHARACTER_PLAYER_API_README.md)
- CloudScript publish/version/execute: [CLOUDSCRIPT_API_README.md](docs/CLOUDSCRIPT_API_README.md)

## 9. Canonical Sources Theo Mức Ưu Tiên

Khi sinh code, dùng theo thứ tự:

1. API README đúng domain
2. [README.MD](README.MD) cho rule cross-cutting như route, permission, socket
3. `dist/*.d.ts` cho tên field, request type, response type, enum

Không dùng `src/` để quyết định public behavior nếu docs và `dist` đã đủ.

## 10. Anti-Patterns Bị Cấm

- Không bịa method hoặc field không có trong `dist`.
- Không suy diễn “operation tương tự chắc cũng trả id” nếu docs không nói vậy.
- Không giả định realtime tự chạy chỉ vì đã gọi method HTTP friend/group.
- Không giả định multiplayer wrapper dùng socket.
- Không giả định `editFunctionAsync` sửa source code CloudScript.
- Không tự động dùng `server/admin` chỉ vì đang thao tác lên dữ liệu của user khác.
- Không bỏ qua `overrideAuthToken`, `overrideSecretKey`, `customTags`, `timeout` nếu use case có ý nghĩa vận hành.

## 11. Khi Nào Mới Cần Đọc `src/`

Chỉ đọc `src/` nếu mục tiêu là:

- sửa chính SDK
- debug behavior nội bộ của repo
- xác minh một điểm public contract mà docs và `dist` chưa mô tả đủ

Nếu mục tiêu chỉ là tích hợp package, `README + docs + dist` phải là nguồn chính.
