# MasterPlayerApi

Tài liệu này dành cho AI code assistant và AI agent nội bộ. Mục tiêu là chọn đúng namespace `client/server/admin`, phân biệt đúng flow hồ sơ với flow link identity, và không sinh sai request ở các nhóm `infoRequestParam`, leaderboard, log, push notification và socket operation event.

## 1. Scope

- Áp dụng cho:
  - `GNNetwork.masterPlayer`
  - `GNNetwork.masterPlayer.server`
  - `GNNetwork.masterPlayer.admin`
- Toàn bộ method hiện tại của `MasterPlayerApi` đều gửi qua HTTP.
- `MasterPlayerApi` có đủ 3 role thật:
  - `GNNetwork.masterPlayer` -> `RequestRole.Client`
  - `GNNetwork.masterPlayer.server` -> `RequestRole.Server`
  - `GNNetwork.masterPlayer.admin` -> `RequestRole.Admin`
- Nếu không truyền `overrideSecretKey`, SDK sẽ tự lấy secret key theo role tương ứng.
- Chỉ dùng namespace `.server` khi bạn đã cấu hình `serverSecretKey` hợp lệ trong `GNServerSettings`, hoặc chủ động truyền `overrideSecretKey`.
- Chỉ dùng namespace `.admin` khi bạn đã cấu hình `adminSecretKey` hợp lệ trong `GNServerSettings`, hoặc chủ động truyền `overrideSecretKey`.
- Rule chuẩn để chọn `client/server/admin` và hiểu `self/other self` xem [README](../README.MD#route-and-permission-rules). Không tự suy diễn route chỉ từ target ownership.
- Với hầu hết flow thao tác trên một player cụ thể:
  - `client` cho phép `userId?`
  - `server/admin` bắt buộc `userId`
- Rule thực tế:
  - ở `client`, bỏ `userId` sẽ target master player hiện đang auth
  - ở `server/admin`, phải truyền `userId` rõ ràng cho target player
- `MasterPlayerApi` là nhóm account/profile/identity của master player. Không dùng nhóm này để thao tác game player, character player, group, inventory item hoặc matchmaking.
- Public package hiện không export event handler socket riêng cho `MasterPlayerApi`.

## 2. Hard Rules

- Luôn ưu tiên `async/await`. Mặc định dùng `*Async()`.
- Bắt buộc đã `GNNetwork.init(settings)` trước khi gọi.
- Không dùng socket transport cho các method của `MasterPlayerApi`.
- Chọn namespace theo trust boundary:
  - app/player -> `GNNetwork.masterPlayer`
  - trusted backend/service -> `GNNetwork.masterPlayer.server`
  - dashboard/ops/tooling -> `GNNetwork.masterPlayer.admin`
- Với `client`, chỉ nên bỏ `userId` khi thao tác trên master player hiện tại.
- Với `server/admin`, mọi flow self-target có `userId` đều phải truyền giá trị này rõ ràng.
- `getPlayerInformationAsync`, toàn bộ `getPlayersWith*Async`, `getStatisticsLeaderboardAroundPlayerAsync`, `getStatisticsLeaderboardAsync`, `getCurrencyLeaderboardAsync`, `getCreateLeaderboardAsync` và `getLastLoginLeaderboardAsync` đều bắt buộc có `infoRequestParam`.
- `getPlayerCurrencyAsync` dùng `playerCurrencyKeys`, `getPlayerDataAsync` dùng `playerDataKeys`, `getPlayerStatisticsAsync` dùng `playerStatisticsKeys`.
- `InfoRequestParam` cũng có `playerCurrencyKeys`, `playerDataKeys`, `playerStatisticsKeys`, nhưng chỉ dùng để điều khiển payload của flow tổng hợp và search. Không được trộn lẫn mục đích giữa getter chuyên biệt và `infoRequestParam`.
- `getPlayersWithDisplayNameAsync`, `getPlayersWithSegmentAsync` và `getPlayersWithTagAsync` phân trang bằng `skip/limit`.
- `getCurrencyLogAsync` và `getStatisticsLogAsync` phân trang bằng `token`, không dùng `skip`.
- `changePlayerCurrencyAsync` và `changePlayerStatisticsAsync` là delta change, không phải set tuyệt đối.
- `changeAccountPasswordAsync` bắt buộc có `currentPassword`. `resetAccountPasswordAsync` không cần `currentPassword`.
- `setTsLastLoginAsync` chỉ cập nhật dữ liệu last login, không làm mới auth token hoặc socket auth.
- `sendSocketOperationEventAsync` là HTTP wrapper để backend phát socket event tới player, không phải client-side socket send trực tiếp.
- `linkGoogleAsync` phải map `type` bằng `GoogleLoginType`.
- `addPushNotificationAsync` phải map `platformType` bằng `PushPlatformType`.
- `SetAvatarRequestData.type` hiện là số thô; package không export enum avatar public tương ứng.

## 3. Chọn Namespace

| Namespace | Role thật | Secret mặc định | `userId` behavior | Dùng khi nào |
| --- | --- | --- | --- | --- |
| `GNNetwork.masterPlayer` | `Client` | `clientSecretKey` | Có thể bỏ `userId` để target player hiện tại | player app thao tác trên account/profile của chính user hiện tại |
| `GNNetwork.masterPlayer.server` | `Server` | `serverSecretKey` | Phải truyền `userId` ở các flow self-target | trusted backend, game server, worker xử lý account/profile |
| `GNNetwork.masterPlayer.admin` | `Admin` | `adminSecretKey` | Phải truyền `userId` ở các flow self-target | GM tool, dashboard, migration, vận hành dữ liệu player |

Rule nhanh:

- Logic chạy trong app public: ưu tiên `GNNetwork.masterPlayer`.
- Logic chạy trong backend tin cậy: ưu tiên `GNNetwork.masterPlayer.server`.
- Logic quản trị hoặc vận hành dữ liệu: ưu tiên `GNNetwork.masterPlayer.admin`.
- Không chọn `client` chỉ vì code ngắn hơn nếu operation thuộc trust boundary của backend.

## 4. Chọn Method

### Đọc 1 master player hoặc 1 phần hồ sơ

| Method | Dùng khi nào | Cần truyền gì | Nhận được gì | Ghi chú |
| --- | --- | --- | --- | --- |
| `getAvatarAsync` | Cần đọc avatar | `userId?` | `MasterPlayerResponseData` | `avatar.type` hiện là số thô |
| `getCountryCodeAsync` | Cần đọc quốc gia | `userId?` | `MasterPlayerResponseData` | Kết quả ở `infoResponseParameters.countryCode` |
| `getCustomDataAsync` | Cần đọc custom data | `userId?`, `customDataKeys?` | `MasterPlayerResponseData` | Có thể filter theo key |
| `getDisplayNameAsync` | Cần đọc display name | `userId?` | `MasterPlayerResponseData` | Kết quả ở `infoResponseParameters.displayName` |
| `getEmailAsync` | Cần đọc email | `userId?` | `MasterPlayerResponseData` | Kết quả ở `infoResponseParameters.email` |
| `getExternalAsync` | Cần đọc toàn bộ external identity đã link | `userId?` | `MasterPlayerResponseData` | Kết quả ở `infoResponseParameters.external` |
| `getIpAddressCreateAsync` | Cần đọc IP lúc tạo account | `userId?` | `MasterPlayerResponseData` | Trường này thường nhạy cảm, ưu tiên backend/admin |
| `getPlayerBanAsync` | Cần đọc trạng thái ban | `userId?` | `MasterPlayerResponseData` | Kết quả ở `infoResponseParameters.playerBan` |
| `getPlayerCurrencyAsync` | Cần đọc player currencies | `userId?`, `playerCurrencyKeys?` | `MasterPlayerResponseData` | Không dùng `infoRequestParam` |
| `getPlayerDataAsync` | Cần đọc player data | `userId?`, `playerDataKeys?` | `MasterPlayerResponseData` | Không dùng `infoRequestParam` |
| `getPlayerInformationAsync` | Cần lấy nhiều field hồ sơ trong một lần gọi | `userId?`, `infoRequestParam` | `MasterPlayerResponseData` | Flow đọc tổng hợp quan trọng nhất |
| `getPlayerStatisticsAsync` | Cần đọc statistics theo key | `userId?`, `playerStatisticsKeys?` | `MasterPlayerResponseData` | Không dùng `infoRequestParam` |
| `getSegmentAsync` | Cần đọc segment | `userId?` | `MasterPlayerResponseData` | Kết quả ở `infoResponseParameters.segments` |
| `getTagAsync` | Cần đọc tag theo key | `userId?`, `tagKeys` | `MasterPlayerResponseData` | Không query theo value |
| `getTsCreateAsync` | Cần đọc thời điểm tạo account | `userId?` | `MasterPlayerResponseData` | Kết quả ở `infoResponseParameters.tsCreate` |
| `getTsLastLoginAsync` | Cần đọc lần login gần nhất | `userId?` | `MasterPlayerResponseData` | Kết quả ở `infoResponseParameters.tsLastLogin` |
| `getPushNotificationAsync` | Cần đọc danh sách push token đã đăng ký | `userId?` | `MasterPlayerResponseData` | Dữ liệu nằm ở `infoResponseParameters.pushNotifications`, không phải `results` |

### Search player, leaderboard và log

| Method | Dùng khi nào | Cần truyền gì | Nhận được gì | Ghi chú |
| --- | --- | --- | --- | --- |
| `getPlayersWithAppleAsync` | Tìm player theo `appleId` | `appleIds[]`, `infoRequestParam` | `GetPlayersWithAppleResponseData` | Mỗi phần tử trả `appleId`, `userId`, `infoResponseParameters` |
| `getPlayersWithFacebookAsync` | Tìm player theo `facebookId` | `facebookIds[]`, `infoRequestParam` | `GetPlayersWithFacebookResponseData` | Không dùng cho Google |
| `getPlayersWithGenericServiceAsync` | Tìm player theo external service tự định nghĩa | `serviceName`, `genericIds[]`, `infoRequestParam` | `GetPlayersWithGenericServiceResponseData` | Dùng khi backend quản external provider riêng |
| `getPlayersWithGoogleAsync` | Tìm player theo `googleId` | `googleIds[]`, `infoRequestParam` | `GetPlayersWithGoogleResponseData` | Không dùng cho Google Play Games |
| `getPlayersWithGooglePlayGameServiceAsync` | Tìm player theo Google Play Games `playerId` | `playerIds[]`, `infoRequestParam` | `GetPlayersWithGooglePlayGameServiceResponseData` | Khác với Google account thường |
| `getPlayersWithGameCenterAsync` | Tìm player theo Game Center `playerId` | `playerIds[]`, `infoRequestParam` | `GetPlayersWithGameCenterResponseData` | Chỉ dành cho Apple Game Center |
| `getPlayersWithDisplayNameAsync` | Tìm player theo tên hiển thị | `keyword`, `infoRequestParam`, `skip?`, `limit?` | `MasterPlayersWithUserIdResponseData` | Phân trang bằng `skip/limit` |
| `getPlayersWithSegmentAsync` | Tìm player theo segment | `value`, `infoRequestParam`, `skip?`, `limit?` | `MasterPlayersWithUserIdResponseData` | Query theo exact segment value |
| `getPlayersWithTagAsync` | Tìm player theo tag | `key`, `value`, `infoRequestParam`, `skip?`, `limit?` | `MasterPlayersWithUserIdResponseData` | Query theo cặp `key/value` |
| `getStatisticsLeaderboardAroundPlayerAsync` | Cần bảng xếp hạng quanh một player cụ thể | `userId?`, `key`, `infoRequestParam`, `skip?`, `limit?`, `loadFromCache?` | `GetStatisticsLeaderboardResponseData` | Ở `server/admin` phải truyền `userId` |
| `getStatisticsLeaderboardAsync` | Cần bảng xếp hạng statistics toàn cục theo key | `key`, `infoRequestParam`, `skip?`, `limit?`, `loadFromCache?`, `version?` | `GetStatisticsLeaderboardResponseData` | `version` chỉ có ở method này |
| `getCurrencyLeaderboardAsync` | Cần bảng xếp hạng currency theo key | `key`, `infoRequestParam`, `skip?`, `limit?`, `loadFromCache?` | `GetCurrencyLeaderboardResponseData` | Không có `version` |
| `getCreateLeaderboardAsync` | Cần bảng xếp hạng theo thời điểm tạo account | `infoRequestParam`, `skip?`, `limit?`, `loadFromCache?` | `GetCreateLeaderboardResponseData` | Không cần `key` |
| `getLastLoginLeaderboardAsync` | Cần bảng xếp hạng theo lần login gần nhất | `infoRequestParam`, `skip?`, `limit?`, `loadFromCache?` | `GetLastLoginLeaderboardResponseData` | Không cần `key` |
| `getStatisticsLogAsync` | Cần audit statistics log | `keys?`, `userId?`, `limit?`, `token?` | `GetStatisticsLogResponseData` | Phân trang bằng `token` |
| `getCurrencyLogAsync` | Cần audit currency log | `keys?`, `userId?`, `limit?`, `token?` | `GetCurrencyLogResponseData` | Phân trang bằng `token` |

### Link và unlink identity

| Method | Dùng khi nào | Cần truyền gì | Nhận được gì | Ghi chú |
| --- | --- | --- | --- | --- |
| `linkAccountAsync` | Link account/password truyền thống | `userId?`, `username`, `password`, `forceLink?` | `MasterPlayerResponseData` | Dùng khi muốn gắn username/password vào player hiện tại |
| `linkCustomIdAsync` | Link custom id của hệ thống riêng | `userId?`, `customId`, `forceLink?` | `MasterPlayerResponseData` | Không phải device id |
| `linkAppleAsync` | Link Apple Sign-In | `userId?`, `token`, `forceLink?` | `MasterPlayerResponseData` | Token đến từ Apple login flow |
| `linkFacebookAsync` | Link Facebook login | `userId?`, `token`, `forceLink?` | `MasterPlayerResponseData` | Không dùng cho Google |
| `linkGoogleAsync` | Link Google account | `userId?`, `token`, `type`, `forceLink?` | `MasterPlayerResponseData` | `type` phải map bằng `GoogleLoginType` |
| `linkGooglePlayGameServiceAsync` | Link Google Play Games | `userId?`, `token`, `forceLink?` | `MasterPlayerResponseData` | Khác với Google account thường |
| `linkGameCenterAsync` | Link Game Center | `userId?`, `playerId`, `name`, `publicKeyUrl`, `signature`, `salt`, `timestamp`, `forceLink?` | `MasterPlayerResponseData` | Cần full verification bundle |
| `linkGenericServiceAsync` | Link external provider tự định nghĩa | `userId?`, `serviceName`, `serviceData`, `forceLink?` | `GenericServiceMasterPlayerResponseData` | Có thể có `errorMessage` ở response |
| `linkCustomDeviceIdAsync` | Link custom device id | `userId?`, `customDeviceId`, `forceLink?` | `MasterPlayerResponseData` | Thuộc nhóm device |
| `linkAndroidDeviceIdAsync` | Link Android device id | `userId?`, `androidDeviceId`, `forceLink?` | `MasterPlayerResponseData` | Thuộc nhóm device |
| `linkiOSDeviceIdAsync` | Link iOS device id | `userId?`, `iOSDeviceId`, `forceLink?` | `MasterPlayerResponseData` | Thuộc nhóm device |
| `linkWindowsPhoneDeviceIdAsync` | Link Windows Phone device id | `userId?`, `windowsPhoneDeviceId`, `forceLink?` | `MasterPlayerResponseData` | Thuộc nhóm device |
| `linkWindowsDeviceIdAsync` | Link Windows device id | `userId?`, `windowsDeviceId`, `forceLink?` | `MasterPlayerResponseData` | Thuộc nhóm device |
| `linkLinuxDeviceIdAsync` | Link Linux device id | `userId?`, `linuxDeviceId`, `forceLink?` | `MasterPlayerResponseData` | Thuộc nhóm device |
| `linkMacOSDeviceIdAsync` | Link macOS device id | `userId?`, `macOSDeviceId`, `forceLink?` | `MasterPlayerResponseData` | Thuộc nhóm device |
| `linkEditorDeviceIdAsync` | Link editor device id | `userId?`, `editorDeviceId`, `forceLink?` | `MasterPlayerResponseData` | Hữu ích cho dev/editor flow |
| `unlinkAccountAsync` | Gỡ account/password đã link | `userId?`, `username` | `EmptyResponseData` | Không cần password ở flow unlink |
| `unlinkCustomIdAsync` | Gỡ custom id | `userId?`, `customId` | `EmptyResponseData` | |
| `unlinkAppleAsync` | Gỡ Apple identity | `userId?`, `appleId` | `EmptyResponseData` | |
| `unlinkFacebookAsync` | Gỡ Facebook identity | `userId?`, `facebookId` | `EmptyResponseData` | |
| `unlinkGoogleAsync` | Gỡ Google identity | `userId?`, `googleId` | `EmptyResponseData` | |
| `unlinkGooglePlayGameServiceAsync` | Gỡ Google Play Games identity | `userId?`, `playerId` | `EmptyResponseData` | |
| `unlinkGameCenterAsync` | Gỡ Game Center identity | `userId?`, `playerId` | `EmptyResponseData` | |
| `unlinkGenericServiceAsync` | Gỡ external provider tự định nghĩa | `userId?`, `serviceName`, `serviceId` | `EmptyResponseData` | Cần đúng cặp `serviceName/serviceId` |
| `unlinkCustomDeviceIdAsync` | Gỡ custom device id | `userId?`, `customDeviceId` | `EmptyResponseData` | Thuộc nhóm device |
| `unlinkAndroidDeviceIdAsync` | Gỡ Android device id | `userId?`, `androidDeviceId` | `EmptyResponseData` | Thuộc nhóm device |
| `unlinkiOSDeviceIdAsync` | Gỡ iOS device id | `userId?`, `iOSDeviceId` | `EmptyResponseData` | Thuộc nhóm device |
| `unlinkWindowsPhoneDeviceIdAsync` | Gỡ Windows Phone device id | `userId?`, `windowsPhoneDeviceId` | `EmptyResponseData` | Thuộc nhóm device |
| `unlinkWindowsDeviceIdAsync` | Gỡ Windows device id | `userId?`, `windowsDeviceId` | `EmptyResponseData` | Thuộc nhóm device |
| `unlinkLinuxDeviceIdAsync` | Gỡ Linux device id | `userId?`, `linuxDeviceId` | `EmptyResponseData` | Thuộc nhóm device |
| `unlinkMacOSDeviceIdAsync` | Gỡ macOS device id | `userId?`, `macOSDeviceId` | `EmptyResponseData` | Thuộc nhóm device |
| `unlinkEditorDeviceIdAsync` | Gỡ editor device id | `userId?`, `editorDeviceId` | `EmptyResponseData` | Thuộc nhóm device |

### Mutation hồ sơ, account và outbound operation

| Method | Dùng khi nào | Cần truyền gì | Nhận được gì | Ghi chú |
| --- | --- | --- | --- | --- |
| `addSegmentAsync` | Gắn thêm segment | `userId?`, `value` | `EmptyResponseData` | Thêm một segment value |
| `removeSegmentAsync` | Gỡ segment | `userId?`, `value` | `EmptyResponseData` | Xóa theo exact value |
| `setTagAsync` | Set hoặc upsert tag | `userId?`, `key`, `value` | `EmptyResponseData` | |
| `removeTagAsync` | Xóa tag theo key | `userId?`, `key` | `EmptyResponseData` | Không truyền `value` |
| `setAvatarAsync` | Set avatar | `userId?`, `type`, `value` | `EmptyResponseData` | `type` chưa có enum public |
| `setCountryCodeAsync` | Set country code | `userId?`, `countryCode` | `EmptyResponseData` | |
| `setCustomDataAsync` | Set custom data theo nhiều key | `userId?`, `customDatas[]` | `MasterPlayerResponseData` | |
| `setDisplayNameAsync` | Set display name | `userId?`, `displayName`, `uniqueDisplayName?` | `EmptyResponseData` | Có option ép unique |
| `setEmailAsync` | Set email | `userId?`, `email` | `EmptyResponseData` | |
| `setPlayerBanAsync` | Ban player đến thời điểm cụ thể | `userId?`, `tsExpire`, `reason` | `EmptyResponseData` | Nên dùng ở backend/admin |
| `changePlayerCurrencyAsync` | Cộng/trừ currency | `userId?`, `playerCurrencies[]`, `log?` | `MasterPlayerResponseData` | Đây là delta change |
| `setPlayerDataAsync` | Set player data theo nhiều key | `userId?`, `playerDatas[]` | `MasterPlayerResponseData` | |
| `changePlayerStatisticsAsync` | Cộng/trừ statistics | `userId?`, `playerStatistics[]`, `log?` | `MasterPlayerResponseData` | Đây là delta change |
| `setTsLastLoginAsync` | Cập nhật timestamp last login | `userId?` | `EmptyResponseData` | Không refresh session |
| `changeAccountPasswordAsync` | Đổi password có xác thực password cũ | `userId?`, `currentPassword`, `password` | `EmptyResponseData` | Flow an toàn hơn nếu user biết password hiện tại |
| `resetAccountPasswordAsync` | Reset password không cần password cũ | `userId?`, `password` | `EmptyResponseData` | Nên ưu tiên backend/admin |
| `sendSocketOperationEventAsync` | Yêu cầu backend đẩy socket event tới player | `userId?`, `eventCode`, `eventParameters?` | `EmptyResponseData` | Bản thân method vẫn là HTTP |
| `sendEmailAsync` | Gửi email tới player | `userId?`, `subject`, `contentHtml` | `EmptyResponseData` | Nên ưu tiên backend/admin |
| `addPushNotificationAsync` | Đăng ký một push token mới | `userId?`, `token`, `platformType` | `AddPushNotificationResponseData` | `platformType` map bằng `PushPlatformType` |
| `removePushNotificationAsync` | Xóa một push registration | `userId?`, `pushId` | `EmptyResponseData` | `pushId` lấy từ `addPushNotificationAsync` hoặc `getPushNotificationAsync` |
| `sendPushNotificationAsync` | Gửi push notification tới player | `userId?`, `title`, `body`, `badge?`, `sound?`, `icon?`, `data?` | `SendPushNotificationResponseData` | Response có `message` |

## 5. Enum Và Reference

- Schema publish để AI tham chiếu:
  - [../dist/runtime/entity/models/MasterPlayerModels.d.ts](../dist/runtime/entity/models/MasterPlayerModels.d.ts)
  - [../dist/runtime/entity/models/MasterPlayerRequestModels.d.ts](../dist/runtime/entity/models/MasterPlayerRequestModels.d.ts)
  - [../dist/runtime/entity/models/MasterPlayerResponseModels.d.ts](../dist/runtime/entity/models/MasterPlayerResponseModels.d.ts)
  - [../dist/runtime/entity/models/GenericModels.d.ts](../dist/runtime/entity/models/GenericModels.d.ts)
- Enum publish nên dùng:
  - [../dist/runtime/constant/enumType/GoogleLoginType.d.ts](../dist/runtime/constant/enumType/GoogleLoginType.d.ts)
  - [../dist/runtime/constant/enumType/PushPlatformType.d.ts](../dist/runtime/constant/enumType/PushPlatformType.d.ts)
- `LinkGoogleRequestData.type` nên map bằng `GoogleLoginType`.
- `AddPushNotificationRequestData.platformType` và `PushNotificationItem.platformType` nên map bằng `PushPlatformType`.
- `SetAvatarRequestData.type` và `InfoResponseParameters.avatar.type` hiện chưa có enum public tương ứng.

## 6. InfoRequestParam Rules

`MasterPlayerModels.InfoRequestParam` điều khiển payload trả về trong:

- `getPlayerInformationAsync`
- `getPlayersWithAppleAsync`
- `getPlayersWithFacebookAsync`
- `getPlayersWithGenericServiceAsync`
- `getPlayersWithGoogleAsync`
- `getPlayersWithGooglePlayGameServiceAsync`
- `getPlayersWithGameCenterAsync`
- `getPlayersWithDisplayNameAsync`
- `getPlayersWithSegmentAsync`
- `getPlayersWithTagAsync`
- `getStatisticsLeaderboardAroundPlayerAsync`
- `getStatisticsLeaderboardAsync`
- `getCurrencyLeaderboardAsync`
- `getCreateLeaderboardAsync`
- `getLastLoginLeaderboardAsync`

Rule cứng:

- Không truyền `null`.
- Không bật toàn bộ field một cách mù quáng.
- Chỉ bật field mà màn hình hoặc flow hiện tại thật sự cần.
- Nếu cần filter dữ liệu con, dùng đúng field filter:
  - `playerDataKeys`
  - `playerCurrencyKeys`
  - `playerStatisticsKeys`
  - `customDataKeys`
  - `tagKeys`
- Nếu chỉ cần một field nhỏ như email, display name, player data hay statistics, ưu tiên getter chuyên biệt.

Các field thường dùng:

- `external`
- `segments`
- `customDatas`
- `displayName`
- `avatar`
- `tsCreate`
- `tags`
- `playerBan`
- `playerCurrencies`
- `playerStatistics`
- `playerDatas`
- `ipAddressCreate`
- `countryCode`
- `email`
- `tsLastLogin`
- `pushNotifications`

## 7. Decision Rules

- Cần đọc nhiều field profile trong một lần gọi: dùng `getPlayerInformationAsync`.
- Cần đọc đúng một field nhỏ: ưu tiên getter chuyên biệt như `getDisplayNameAsync`, `getEmailAsync`, `getPlayerDataAsync`.
- Cần tìm player theo external identity cụ thể: chọn đúng method theo provider, không được dùng lẫn Apple, Google, Google Play Games, Facebook, Game Center, Generic Service.
- Cần đọc leaderboard quanh một player cụ thể: dùng `getStatisticsLeaderboardAroundPlayerAsync`.
- Cần leaderboard statistics toàn cục: dùng `getStatisticsLeaderboardAsync`.
- Cần leaderboard theo currency: dùng `getCurrencyLeaderboardAsync`.
- Cần leaderboard theo thời điểm tạo account: dùng `getCreateLeaderboardAsync`.
- Cần leaderboard theo lần login gần nhất: dùng `getLastLoginLeaderboardAsync`.
- Cần link identity mới vào current player: dùng nhóm `link*Async`.
- Cần gỡ identity đã link: dùng nhóm `unlink*Async`.
- Cần đổi password khi user biết password hiện tại: dùng `changeAccountPasswordAsync`.
- Cần reset password từ backend/admin: dùng `resetAccountPasswordAsync`.
- Cần delta currency hoặc statistics: dùng `changePlayerCurrencyAsync` hoặc `changePlayerStatisticsAsync`.
- Cần push token registration: dùng `addPushNotificationAsync`.
- Cần lấy push token list hiện tại: dùng `getPushNotificationAsync`.
- Cần gửi dữ liệu realtime vào socket của player: dùng `sendSocketOperationEventAsync`, nhưng phải nhớ receiver cần có socket session hợp lệ.

## 8. Response Rules

Tất cả typed response của `MasterPlayerApi` đều có:

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

Những response chính AI cần nhớ:

- Hầu hết getter đơn lẻ trả `MasterPlayerResponseData` và dữ liệu nằm trong `responseData.infoResponseParameters`.
- `getPlayersWithDisplayNameAsync`, `getPlayersWithSegmentAsync`, `getPlayersWithTagAsync` trả `responseData.results`, mỗi phần tử có `userId` và `infoResponseParameters`.
- `getPlayersWithAppleAsync`, `getPlayersWithFacebookAsync`, `getPlayersWithGoogleAsync`, `getPlayersWithGenericServiceAsync`, `getPlayersWithGooglePlayGameServiceAsync`, `getPlayersWithGameCenterAsync` trả `results` kèm identifier của provider.
- `getStatisticsLeaderboardAroundPlayerAsync`, `getStatisticsLeaderboardAsync`, `getCurrencyLeaderboardAsync`, `getCreateLeaderboardAsync`, `getLastLoginLeaderboardAsync` trả `responseData.results` với `userId`, `position`, `backupValue?`, `infoResponseParameters`.
- `getStatisticsLeaderboardAsync` còn có thêm `responseData.tsCreate`.
- `getStatisticsLogAsync` và `getCurrencyLogAsync` trả `responseData.results` và có thể có `responseData.token`.
- `linkGenericServiceAsync` trả `GenericServiceMasterPlayerResponseData`; ngoài `infoResponseParameters` còn có thể có `errorMessage`.
- `getPushNotificationAsync` trả `MasterPlayerResponseData`; danh sách push nằm ở `responseData.infoResponseParameters.pushNotifications`.
- `addPushNotificationAsync` trả `AddPushNotificationResponseData` với `pushId`.
- `sendPushNotificationAsync` trả `SendPushNotificationResponseData` với `message`.
- `addSegmentAsync`, `removeSegmentAsync`, `setTagAsync`, `removeTagAsync`, `changeAccountPasswordAsync`, `resetAccountPasswordAsync`, `setAvatarAsync`, `setCountryCodeAsync`, `setDisplayNameAsync`, `setEmailAsync`, `setPlayerBanAsync`, `setTsLastLoginAsync`, toàn bộ `unlink*Async`, `sendSocketOperationEventAsync`, `sendEmailAsync`, `removePushNotificationAsync` trả `EmptyResponseData`.
- `setCustomDataAsync`, `changePlayerCurrencyAsync`, `setPlayerDataAsync`, `changePlayerStatisticsAsync` và đa số `link*Async` trả `MasterPlayerResponseData`.

## 9. Cảnh Báo Implementation Hiện Tại

- Public package hiện không export event handler socket riêng cho `MasterPlayerApi`.
- Nếu bạn cần nhận socket event do `sendSocketOperationEventAsync` phát ra, bạn phải dựa vào hệ event socket chung ở tầng khác hoặc spec backend riêng.
- `setAvatarAsync` và `InfoResponseParameters.avatar.type` vẫn dùng số thô, chưa có enum public tương ứng.
- `linkGenericServiceAsync` là case đặc biệt vì response data có thể chứa `errorMessage`.
- `getPushNotificationAsync` không trả `results`; dữ liệu nằm trong `infoResponseParameters.pushNotifications`.
- Package có expose `sendEmailAsync`, `sendPushNotificationAsync`, `sendSocketOperationEventAsync` ở cả `client`, `server`, `admin`, nhưng trong production nên ưu tiên `server/admin` cho các flow có trust boundary cao.

## 10. Best Practices

- Dùng getter chuyên biệt khi chỉ cần một field nhỏ.
- Với query lớn, giữ `infoRequestParam` tối giản để giảm payload.
- Trong app public, ưu tiên self-flow và tránh để client trực tiếp gọi các operation ops-heavy như email/push nếu không có lý do rõ ràng.
- Với `changePlayerCurrencyAsync` và `changePlayerStatisticsAsync`, luôn truyền `log` nếu flow cần audit.
- Với `getCurrencyLogAsync` và `getStatisticsLogAsync`, nên truyền ít nhất `keys` hoặc `userId` trong production để tránh query quá rộng.
- Với `forceLink`, chỉ bật khi flow ownership merge/reclaim đã được thiết kế rõ.
- Với `linkGameCenterAsync`, chuẩn bị đầy đủ verification bundle từ platform trước khi gọi SDK.
- Với `sendSocketOperationEventAsync`, chỉ dùng khi bạn biết receiver đang connect socket và đã auth socket thành công.

## 11. Ví Dụ Khuyến Nghị

### Đọc thông tin master player hiện tại với `infoRequestParam` tối giản

```ts
import {
    ErrorCode,
    GNNetwork,
    MasterPlayerModels,
} from "@xmobitea/gn-typescript-client";

const infoRequestParam = new MasterPlayerModels.InfoRequestParam();
infoRequestParam.displayName = true;
infoRequestParam.email = true;
infoRequestParam.playerCurrencies = true;
infoRequestParam.playerCurrencyKeys = ["gold"];

const request = new MasterPlayerModels.GetPlayerInformationRequestData();
request.infoRequestParam = infoRequestParam;

const response = await GNNetwork.masterPlayer.getPlayerInformationAsync(request);

if (response.hasReturnCodeError()) {
    throw new Error(response.debugMessage);
}

if (response.errorCode !== ErrorCode.Ok) {
    throw new Error(`Business error: ${response.errorCode}`);
}

const playerInfo = response.responseData.infoResponseParameters;
```

### Link Google account với `GoogleLoginType`

```ts
import {
    ErrorCode,
    GNNetwork,
    GoogleLoginType,
    MasterPlayerModels,
} from "@xmobitea/gn-typescript-client";

const request = new MasterPlayerModels.LinkGoogleRequestData();
request.token = "google-id-token";
request.type = GoogleLoginType.IdToken;
request.forceLink = false;

const response = await GNNetwork.masterPlayer.linkGoogleAsync(request);

if (response.hasReturnCodeError()) {
    throw new Error(response.debugMessage);
}

if (response.errorCode !== ErrorCode.Ok) {
    throw new Error(`Business error: ${response.errorCode}`);
}

const playerInfo = response.responseData.infoResponseParameters;
```

### Backend đọc leaderboard quanh một player cụ thể

```ts
import {
    ErrorCode,
    GNNetwork,
    MasterPlayerModels,
} from "@xmobitea/gn-typescript-client";

const infoRequestParam = new MasterPlayerModels.InfoRequestParam();
infoRequestParam.displayName = true;

const request = new MasterPlayerModels.ServerGetStatisticsLeaderboardAroundPlayerRequestData();
request.userId = "1234567890";
request.key = "rankScore";
request.infoRequestParam = infoRequestParam;
request.limit = 20;

const response = await GNNetwork.masterPlayer.server.getStatisticsLeaderboardAroundPlayerAsync(request);

if (response.hasReturnCodeError()) {
    throw new Error(response.debugMessage);
}

if (response.errorCode !== ErrorCode.Ok) {
    throw new Error(`Business error: ${response.errorCode}`);
}

const leaderboard = response.responseData.results;
```

### Đăng ký push token với `PushPlatformType`

```ts
import {
    ErrorCode,
    GNNetwork,
    MasterPlayerModels,
    PushPlatformType,
} from "@xmobitea/gn-typescript-client";

const request = new MasterPlayerModels.AddPushNotificationRequestData();
request.token = "device-push-token";
request.platformType = PushPlatformType.Android;

const response = await GNNetwork.masterPlayer.addPushNotificationAsync(request);

if (response.hasReturnCodeError()) {
    throw new Error(response.debugMessage);
}

if (response.errorCode !== ErrorCode.Ok) {
    throw new Error(`Business error: ${response.errorCode}`);
}

const pushId = response.responseData.pushId;
```

## 12. Anti-Patterns

- Không dùng `MasterPlayerApi` để thao tác game player, character player, group hoặc inventory item.
- Không chọn sai provider method khi search identity.
- Không bỏ `infoRequestParam` ở các method bắt buộc.
- Không dùng `skip` để phân trang `getCurrencyLogAsync` hoặc `getStatisticsLogAsync`.
- Không dùng `token` để phân trang `getPlayersWithDisplayNameAsync`, `getPlayersWithSegmentAsync`, `getPlayersWithTagAsync`.
- Không hardcode `type = 1` hoặc `type = 2` cho `linkGoogleAsync` khi package đã export `GoogleLoginType`.
- Không hardcode `platformType = 1` hoặc `2` cho push khi package đã export `PushPlatformType`.
- Không giả định `sendSocketOperationEventAsync` là thao tác gửi qua socket trực tiếp từ client.
- Không giả định `getPushNotificationAsync` trả `results`.
- Không bật `forceLink` một cách mù quáng.
- Không bỏ qua kiểm tra `hasReturnCodeError()` và `errorCode`.

## 13. AI Checklist

- Đã `GNNetwork.init(settings)` chưa.
- Đã chọn đúng namespace `masterPlayer` / `masterPlayer.server` / `masterPlayer.admin` chưa.
- Nếu đang ở `server/admin`, đã truyền `userId` cho flow self-target chưa.
- Nếu đang ở `client`, có thật sự muốn target current authenticated player không.
- Nếu method yêu cầu `infoRequestParam`, đã truyền object này chưa.
- Nếu đang đọc field nhỏ, có cần getter chuyên biệt thay vì `getPlayerInformationAsync` không.
- Nếu đang link Google, đã dùng `GoogleLoginType` chưa.
- Nếu đang đăng ký push token, đã dùng `PushPlatformType` chưa.
- Nếu đang lấy log, có dùng `token` cho page tiếp chưa.
- Nếu đang gửi socket event, receiver có socket session hợp lệ không.
- Có kiểm tra `hasReturnCodeError()` trước `errorCode` chưa.
