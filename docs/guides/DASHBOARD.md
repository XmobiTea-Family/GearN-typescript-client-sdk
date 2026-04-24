# DashboardApi

Tài liệu này dành cho AI code assistant và AI agent nội bộ. Mục tiêu là chọn đúng method của `GNNetwork.dashboard`, truyền đúng input, hiểu đúng scope quản trị của nhóm này và không sinh code sai secret key.

## 1. Scope

- Chỉ áp dụng cho `GNNetwork.dashboard`.
- Không áp dụng cho `GNNetwork.dashboard.server` và `GNNetwork.dashboard.admin` vì hiện tại 2 namespace này rỗng, không có method public.
- Toàn bộ method hiện tại của `DashboardApi` đều gửi qua HTTP.
- Toàn bộ request wrapper hiện tại của `DashboardApi` đều dùng `RequestType.Dashboard` với `RequestRole.Client`.
- Hệ quả rất quan trọng ở tầng SDK: nếu không truyền `overrideSecretKey`, request sẽ mặc định gắn `secretKey`
- Rule chuẩn để chọn `client/server/admin` và hiểu semantics permission xem [RULES](../RULES.md#3-route--trust-boundary-của-caller), nhưng `DashboardApi` là ngoại lệ vì public SDK wrapper này vẫn đi qua `RequestRole.Client`.
- Trong triển khai GearN server hiện tại, sau `loginByAdminAccountAsync` thành công backend middleware sẽ resolve secret context và quyền riêng của admin từ `authToken` cho các request dashboard tiếp theo.
- Đây là nhóm API dành cho dashboard, backoffice, provisioning, analytics và maintenance. Không dùng thay cho gameplay API của player.
- Nếu cần login player, dùng `AuthenticateApi`. Nếu cần data/player runtime, dùng group tương ứng khác.

## 2. Hard Rules

- Luôn ưu tiên `async/await`. Mặc định dùng `GNNetwork.dashboard.*Async()`.
- Bắt buộc đã `GNNetwork.init(settings)` trước khi gọi.
- Không dùng `GNNetwork.dashboard.server.*` hoặc `GNNetwork.dashboard.admin.*` vì hiện chưa có method nào để gọi.
- Với triển khai GearN server hiện tại, quyền admin riêng của account sau login được backend middleware resolve từ `authToken`, không phải do SDK tự đổi sang admin secret key local.
- Chỉ truyền `overrideSecretKey` khi bạn cố ý bypass flow mặc định ở trên.
- `DashboardApi` không có flow socket. Không dùng `connectSocket()` hay `sendRequestAuthSocket()` cho nhóm này.
- `loginByAdminAccountAsync` là entrypoint hợp lý để lấy admin auth token trước khi gọi các operation quản trị khác.
- `loginByAdminAccountAsync` chỉ trả `authToken`. Không giả định response có `userId`.
- `deleteInDatabaseAsync` và `resetStatisticsLeaderboardAsync` là operation phá hủy hoặc reset dữ liệu. Chỉ dùng khi có chủ đích vận hành rõ ràng.

## 3. Chọn Method

### Auth và quản trị admin account

| Method | Dùng khi nào | Cần truyền gì | Nhận được gì | Ghi chú |
| --- | --- | --- | --- | --- |
| `loginByAdminAccountAsync` | Login dashboard/admin tool | `username`, `password` | `LoginByAdminAccountResponseData` | Response chỉ có `authToken` |
| `changePasswordAdminAccountAsync` | Admin hiện tại tự đổi mật khẩu của chính mình | `currentPassword`, `password` | `EmptyResponseData` | Nên dùng sau khi đã login |
| `getAdminAccountListAsync` | Liệt kê admin account | request rỗng | `GetAdminAccountListResponseData` | Dùng cho màn hình quản trị account |
| `createAdminAccountAsync` | Tạo admin account mới | `username`, `password`, `secretKey` | `CreateAdminAccountResponseData` | Response trả danh sách `userId` tạo ra |
| `getUsernameAdminAccountAsync` | Tìm username từ `userId` admin | `userId` | `GetUsernameAdminAccountResponseData` | Dùng khi chỉ có `userId` |
| `setPasswordAdminAccountAsync` | Đặt lại mật khẩu cho admin khác | `userId`, `password` | `EmptyResponseData` | Không dùng cho self-service đổi mật khẩu |
| `setSecretKeyAdminAccountAsync` | Gán hoặc đổi secret key của admin account | `userId`, `secretKey` | `EmptyResponseData` | Thao tác nhạy cảm |
| `removeAdminAccountAsync` | Xóa admin account | `userId` | `EmptyResponseData` | Destructive |

### Quản lý game và cấu hình

| Method | Dùng khi nào | Cần truyền gì | Nhận được gì | Ghi chú |
| --- | --- | --- | --- | --- |
| `getGameListAsync` | Liệt kê game id hiện có | request rỗng | `GetGameListResponseData` | Dùng trước khi chọn `gameId` |
| `createGameAsync` | Tạo game mới | `gameId` | `GameWithGameIdResponseData` | Chỉ tạo identity cơ bản của game |
| `getGameInformationAsync` | Đọc metadata và settings của một game | `gameId` | `GetGameInformationResponseData` | Trả `gameName`, `gameDescription`, `gameSettings`, `matchmakingQueueSettings` |
| `setGameInformationAsync` | Cập nhật metadata/settings của game | `gameId` và field cần đổi | `EmptyResponseData` | Chỉ set field thật sự cần đổi |
| `getMasterGameSettingsAsync` | Đọc global settings của server/game platform | request rỗng | `GetMasterGameSettingsResponseData` | Trả `thirtPartySettings`, `masterPlayerSettings`, `emailSettings`, `pushNotificationSettings` |
| `setMasterGameSettingsAsync` | Cập nhật global settings | hashtable settings cần đổi | `EmptyResponseData` | Không nên gửi full object nếu không cần |
| `getServerGameDataAsync` | Lấy snapshot số lượng entity và version của một game | `gameId` và các boolean flag cần lấy | `GetServerGameDataResponseData` | Chỉ bật các flag cần thiết để giảm payload |

### Secret key và permission

| Method | Dùng khi nào | Cần truyền gì | Nhận được gì | Ghi chú |
| --- | --- | --- | --- | --- |
| `getSecretInfoListAsync` | Liệt kê secret key theo role | request rỗng | `GetSecretInfoListResponseData` | Trả `secretKeys` |
| `getSecretInfoInformationAsync` | Xem chi tiết một secret key | `secretKey` | `GetSecretInfoInformationResponseData` | Trả `gameId`, `permissionParam`, `tsExpire`, `remove` |
| `createSecretInfoAsync` | Tạo secret key mới và tùy chọn `secretKey`, `gameId`, `permissionParam` | `SecretInfoWithSecretKeyResponseData` | `secretKey` đang optional trong model; AI có thể bỏ qua nếu muốn backend sinh key |
| `setSecretInfoInformationAsync` | Cập nhật expire, description, permission hoặc remove flag của secret key | `secretKey` và field cần đổi | `EmptyResponseData` | Dùng để revoke hoặc thay permission |

### Analytics, logs và callback

| Method | Dùng khi nào | Cần truyền gì | Nhận được gì | Ghi chú |
| --- | --- | --- | --- | --- |
| `getAnalyticsAsync` | Lấy analytics tổng hợp | các boolean flag cần lấy, `timestamp?` | `GetAnalyticsResponseData` | Không bật tất cả flag một cách mù quáng |
| `getServerLogAsync` | Lấy log server dạng phân trang | `skip?`, `limit?` | `GetServerLogResponseData` | Model mặc định `skip = 0`, `limit = 50` |
| `getEventCallbackCloudScriptAsync` | Liệt kê callback CloudScript theo event | request rỗng | `GetEventCallbackCloudScriptResponseData` | Dùng để inspect cấu hình hiện tại |
| `setEventCallbackCloudScriptAsync` | Tạo hoặc sửa callback CloudScript theo event | `eventName`, `script` | `SetEventCallbackCloudScriptResponseData` | Response có `errorMessage` |
| `getBackupStatisticsLeaderboardVersionAsync` | Liệt kê version backup của leaderboard | `gameId`, `type`, `key` | `GetBackupStatisticsLeaderboardVersionResponseData` | `type` là numeric field, không được đoán bừa |

### Maintenance và thao tác phá hủy

| Method | Dùng khi nào | Cần truyền gì | Nhận được gì | Ghi chú |
| --- | --- | --- | --- | --- |
| `resetStatisticsLeaderboardAsync` | Reset một version leaderboard | `type`, `key`, `version`, `gameId`, `log?`, `catalogId?` | `EmptyResponseData` | Destructive; chỉ dùng khi operator đã chốt loại leaderboard |
| `deleteInDatabaseAsync` | Xóa dữ liệu trực tiếp theo loại và id | `type`, `id`, `gameId`, `log?` | `EmptyResponseData` | Cực kỳ nhạy cảm; không đoán numeric `type` |

## 4. Decision Rules

- Cần login admin: dùng `loginByAdminAccountAsync` trước.
- Cần đổi mật khẩu của chính admin hiện tại: dùng `changePasswordAdminAccountAsync`.
- Cần quản lý admin account khác: dùng bộ `getAdminAccountListAsync`, `createAdminAccountAsync`, `getUsernameAdminAccountAsync`, `setPasswordAdminAccountAsync`, `setSecretKeyAdminAccountAsync`, `removeAdminAccountAsync`.
- Cần tạo game mới: dùng `createGameAsync`, sau đó `setGameInformationAsync` nếu cần metadata/settings.
- Cần đọc hoặc cập nhật cấu hình global: dùng `getMasterGameSettingsAsync` hoặc `setMasterGameSettingsAsync`.
- Cần quản lý secret key: bắt đầu từ `getSecretInfoListAsync` hoặc `getSecretInfoInformationAsync`, sau đó mới `createSecretInfoAsync` hoặc `setSecretInfoInformationAsync`.
- Cần analytics hoặc log: dùng `getAnalyticsAsync`, `getServerLogAsync`, `getServerGameDataAsync` với payload tối giản.
- Cần callback CloudScript theo event: dùng `getEventCallbackCloudScriptAsync` để inspect trước, rồi `setEventCallbackCloudScriptAsync`.
- Cần reset leaderboard hoặc xóa dữ liệu: chỉ dùng khi operator đã xác nhận chính xác `type`, `key`, `version`, `id`, `gameId` và hậu quả.

## 5. Request Rules và Reference

- Schema publish để AI tham chiếu:
  - [../dist/runtime/entity/models/DashboardModels.d.ts](../dist/runtime/entity/models/DashboardModels.d.ts)
  - [../dist/runtime/entity/models/DashboardRequestModels.d.ts](../dist/runtime/entity/models/DashboardRequestModels.d.ts)
  - [../dist/runtime/entity/models/DashboardResponseModels.d.ts](../dist/runtime/entity/models/DashboardResponseModels.d.ts)
- `DashboardApi` hiện không có file enum riêng cho các numeric field như `type` trong `resetStatisticsLeaderboard` hoặc `deleteInDatabase`.
- Nếu codebase hiện tại không có constant nghiệp vụ cho các numeric field đó, AI không được tự bịa giá trị.
- `GetServerLogRequestData` có phân trang mềm bằng `skip` và `limit`; không request log vô hạn.
- `GetAnalyticsRequestData` và `GetServerGameDataRequestData` đều dùng nhiều boolean flag để điều khiển payload; chỉ bật field thật sự cần.

## 6. Response Rules

Tất cả typed response của `DashboardApi` đều có các field low-level giống các nhóm API khác:

- `returnCode`
- `debugMessage`
- `invalidMembers`
- `errorCode`
- `responseData`

Rule kiểm tra response:

```ts
if (response.hasReturnCodeError()) {
    throw new Error(response.debugMessage);
}

if (response.errorCode !== ErrorCode.Ok) {
    throw new Error(`Business error: ${response.errorCode}`);
}
```

Những response quan trọng AI cần nhớ:

- `loginByAdminAccountAsync` trả `LoginByAdminAccountResponseData` với `authToken`.
- `createAdminAccountAsync` trả `CreateAdminAccountResponseData` chứa danh sách `userId`.
- `getGameInformationAsync` trả metadata/settings đầy đủ của game.
- `getMasterGameSettingsAsync` trả các hashtable settings cấp hệ thống.
- `getSecretInfoListAsync` trả danh sách secret key theo từng role.
- `setEventCallbackCloudScriptAsync` trả `errorMessage` trong `responseData`; cần kiểm tra nếu backend trả message lỗi nghiệp vụ.
- Nhiều operation mutate chỉ trả `EmptyResponseData`. Đừng mong đợi payload chi tiết sau khi set/remove/reset/delete.

Ghi chú quan trọng:

- `loginByAdminAccountAsync` có thể giúp SDK cache `authToken`.
- Trong triển khai GearN server hiện tại, chính `authToken` này là thứ backend middleware dùng để resolve secret context và quyền riêng của admin cho các request dashboard tiếp theo.
- Không có bằng chứng từ response model rằng flow này cũng trả `userId`, nên AI không được giả định `GNNetwork.getAuthenticateStatus().getUserId()` sẽ có giá trị mới sau login admin.

## 7. Best Practices

- Với admin/dashboard flow, mặc định login trước rồi mới gọi các operation còn lại.
- Sau khi login admin thành công, ưu tiên để các request dashboard tiếp theo đi theo `authToken` đã cache thay vì cố tự override secret key.
- Chỉ truyền `overrideSecretKey` khi bạn cố ý bypass flow middleware mặc định đó.
- Với analytics và snapshot data, chỉ bật các flag thật sự cần để giảm payload.
- Với game provisioning, tách `createGameAsync` và `setGameInformationAsync` thành 2 bước rõ ràng.
- Với secret management, inspect trước bằng `getSecretInfoListAsync` hoặc `getSecretInfoInformationAsync` rồi mới mutate.
- Với `createSecretInfoAsync`, có thể bỏ qua `secretKey` nếu backend của bạn cho phép sinh tự động; đây là suy luận hợp lý từ model vì field đang optional và response trả lại `secretKey`.
- Với operation phá hủy dữ liệu, luôn ghi `log` nếu backend/workflow của bạn dùng trường này để audit.

## 8. Ví dụ Khuyến Nghị

### Login admin

```ts
import {
    GNNetwork,
    DashboardModels,
    ErrorCode,
} from "@xmobitea/gn-typescript-client";

const request = new DashboardModels.LoginByAdminAccountRequestData();
request.username = "gnadmin";
request.password = "123456";

const response = await GNNetwork.dashboard.loginByAdminAccountAsync(request);

if (response.hasReturnCodeError()) {
    throw new Error(response.debugMessage);
}

if (response.errorCode !== ErrorCode.Ok) {
    throw new Error(`Business error: ${response.errorCode}`);
}

const adminAuthToken = GNNetwork.getAuthenticateStatus().getAuthToken();
```

### Tạo game rồi cập nhật metadata

```ts
import {
    GNNetwork,
    DashboardModels,
    ErrorCode,
} from "@xmobitea/gn-typescript-client";

const createRequest = new DashboardModels.CreateGameRequestData();
createRequest.gameId = "demo-game";

const createResponse = await GNNetwork.dashboard.createGameAsync(createRequest);

if (createResponse.hasReturnCodeError()) {
    throw new Error(createResponse.debugMessage);
}

if (createResponse.errorCode !== ErrorCode.Ok) {
    throw new Error(`Business error: ${createResponse.errorCode}`);
}

const updateRequest = new DashboardModels.SetGameInformationRequestData();
updateRequest.gameId = "demo-game";
updateRequest.gameName = "Demo Game";
updateRequest.gameDescription = "Internal demo project";

const updateResponse = await GNNetwork.dashboard.setGameInformationAsync(updateRequest);

if (updateResponse.hasReturnCodeError()) {
    throw new Error(updateResponse.debugMessage);
}

if (updateResponse.errorCode !== ErrorCode.Ok) {
    throw new Error(`Business error: ${updateResponse.errorCode}`);
}
```

### Tạo secret key cho server role

```ts
import {
    GNNetwork,
    DashboardModels,
    RequestRole,
    ErrorCode,
} from "@xmobitea/gn-typescript-client";

const request = new DashboardModels.CreateSecretInfoRequestData();
request.gameId = "demo-game";

const response = await GNNetwork.dashboard.createSecretInfoAsync(request);

if (response.hasReturnCodeError()) {
    throw new Error(response.debugMessage);
}

if (response.errorCode !== ErrorCode.Ok) {
    throw new Error(`Business error: ${response.errorCode}`);
}

const generatedSecretKey = response.responseData.secretKey;
```

## 9. Anti-Patterns

- Không gọi `GNNetwork.dashboard.server` hoặc `GNNetwork.dashboard.admin`.
- Không bỏ qua bước `loginByAdminAccountAsync` rồi vẫn mong backend tự hiểu request dashboard là admin request.
- Không dùng `DashboardApi` như gameplay API cho client/player thường.
- Không đoán numeric `type` cho `resetStatisticsLeaderboardAsync` hoặc `deleteInDatabaseAsync`.
- Không gọi `deleteInDatabaseAsync` hoặc `resetStatisticsLeaderboardAsync` nếu chưa có xác nhận vận hành rõ ràng.
- Không request full analytics/full snapshot nếu chỉ cần một vài metric.
- Không giả định `loginByAdminAccountAsync` trả `userId`.
- Không dùng callback style mặc định khi codebase đã support `async/await`.

## 10. AI Checklist

- Đã `GNNetwork.init(settings)` chưa.
- Có đang dùng đúng `GNNetwork.dashboard.*Async()` không.
- Có nhớ rằng toàn bộ `DashboardApi` hiện dùng `RequestRole.Client` và HTTP không.
- Có cần login admin trước khi gọi operation hiện tại không.
- Nếu operation là destructive, đã có xác nhận rõ về hậu quả chưa.
- Nếu operation cần numeric `type`, nguồn giá trị đó có thật trong codebase hoặc backend spec chưa.
- Có kiểm tra `hasReturnCodeError()` trước `errorCode` chưa.
