# AuthenticateApi

Tài liệu này dành cho AI code assistant và AI agent nội bộ. Mục tiêu là chọn đúng method của `GNNetwork.authenticate`, truyền đúng input, kiểm tra đúng response và không sinh code sai role.

## 1. Scope

- Chỉ áp dụng cho `GNNetwork.authenticate`.
- Không áp dụng cho `GNNetwork.authenticate.server` và `GNNetwork.authenticate.admin` vì hiện tại 2 namespace này rỗng, không có method public.
- Nếu cần login admin dashboard, dùng API khác. Không dùng `AuthenticateApi`.
- Nếu cần gọi server-side operation, dùng API group tương ứng với `secretKey` có `permission rules` `server` hợp lệ. Không dùng `AuthenticateApi.server`.

## 2. Hard Rules

- Luôn ưu tiên `async/await`. Mặc định dùng `GNNetwork.authenticate.*Async()`.
- Tất cả method của `AuthenticateApi` hiện gửi qua HTTP, không login qua socket.
- Trước khi gọi `AuthenticateApi`, bắt buộc đã `GNNetwork.init(settings)`.
- `GNServerSettings` phải có `secretKey` hợp lệ.
- Mọi method trừ `refreshAuthToken` đều phải truyền `infoRequestParam` khác `null`.
- Không dùng `GNNetwork.authenticate.server.*` hoặc `GNNetwork.authenticate.admin.*` vì hiện chưa có method nào để gọi.
- Sau khi login hoặc refresh token thành công, nếu backend trả `authToken` và `userId`, SDK sẽ tự cache vào `GNNetwork.getAuthenticateStatus()` và `StorageService`.
- Nếu cần dùng socket sau login, tuân theo [rule socket chuẩn trong RULES](../RULES.md#7-auth--socket-flow). Flow khuyến nghị là login HTTP thành công -> `GNNetwork.connectSocket()`, SDK sẽ auto-auth nếu `authToken` đã có trong cache.

## 3. Chọn Method

| Method | Dùng khi nào | Cần truyền gì | Nhận được gì | Ghi chú | ErrorCode
| --- | --- | --- | --- | --- | --- |
| `loginByAccountAsync` | Đã có tài khoản username/password trong hệ thống | `username`, `password`, `infoRequestParam` | `AuthenticateResponseData` | Không dùng để tạo tài khoản mới | `Ok`, `AccountNotFound`, `AccountPasswordWrong` |
| `registerAccountAsync` | Muốn tạo tài khoản username/password mới | `username`, `password`, `infoRequestParam` | `AuthenticateResponseData` | Không dùng lặp lại ở mỗi lần mở app | `Ok`, `AccountUsernameExists` |
| `refreshAuthTokenAsync` | Đã có auth token hợp lệ hoặc gần hết hạn và muốn refresh phiên | `new AuthenticateModels.RefreshAuthTokenRequestData()` | `RefreshAuthTokenResponseData` | Request data rỗng, token hiện tại lấy từ SDK cache hoặc `overrideAuthToken` | `Ok`, `AccountNotFound`, `PlayerBan` |
| `loginByCustomDeviceIdAsync` | Muốn login theo định danh thiết bị hoặc cài đặt app do client tự quản lý | `customDeviceId`, `createPlayerIfNotExists?`, `infoRequestParam` | `AuthenticateResponseData` | Phù hợp guest/anonymous hoặc định danh cục bộ | `Ok`, `AccountNotFound` |
| `loginByCustomIdAsync` | App đã có user id nghiệp vụ riêng, không phải username/password | `customId`, `createPlayerIfNotExists?`, `infoRequestParam` | `AuthenticateResponseData` | Dùng khi id thuộc business domain của app, không buộc phải là device id | `Ok`, `AccountNotFound` |
| `loginByEditorDeviceIdAsync` | Chạy local/dev tool trong editor | `editorDeviceId`, `createPlayerIfNotExists?`, `infoRequestParam` | `AuthenticateResponseData` | Chỉ nên dùng cho môi trường phát triển | `Ok`, `AccountNotFound` |
| `loginByAndroidDeviceIdAsync` | Có Android device id và muốn login theo device | `androidDeviceId`, `createPlayerIfNotExists?`, `infoRequestParam` | `AuthenticateResponseData` | Chỉ dùng khi nguồn identity thực sự là Android device id | `Ok`, `AccountNotFound` |
| `loginByiOSDeviceIdAsync` | Có iOS device id và muốn login theo device | `iOSDeviceId`, `createPlayerIfNotExists?`, `infoRequestParam` | `AuthenticateResponseData` | Không thay bằng method khác nếu identity source là iOS | `Ok`, `AccountNotFound` |
| `loginByLinuxDeviceIdAsync` | Có Linux device id và muốn login theo device | `linuxDeviceId`, `createPlayerIfNotExists?`, `infoRequestParam` | `AuthenticateResponseData` | Dùng đúng theo platform identity | `Ok`, `AccountNotFound` |
| `loginByMacOSDeviceIdAsync` | Có macOS device id và muốn login theo device | `macOSDeviceId`, `createPlayerIfNotExists?`, `infoRequestParam` | `AuthenticateResponseData` | Dùng đúng theo platform identity | `Ok`, `AccountNotFound` |
| `loginByWindowsDeviceIdAsync` | Có Windows device id và muốn login theo device | `windowsDeviceId`, `createPlayerIfNotExists?`, `infoRequestParam` | `AuthenticateResponseData` | Dùng đúng theo platform identity | `Ok`, `AccountNotFound` |
| `loginByWindowsPhoneDeviceIdAsync` | Có Windows Phone device id | `windowsPhoneDeviceId`, `createPlayerIfNotExists?`, `infoRequestParam` | `AuthenticateResponseData` | Legacy platform flow | `Ok`, `AccountNotFound` |
| `loginByGoogleAsync` | Có token Google từ SDK/provider flow chuẩn | `token`, `type`, `createPlayerIfNotExists?`, `infoRequestParam` | `AuthenticateResponseData` | `type` phải lấy từ `GoogleLoginType` | `Ok`, `AccountNotFound`, `VerifyTokenError` |
| `loginByGooglePlayGameServiceAsync` | Có credential từ Google Play Game Services | `token`, `createPlayerIfNotExists?`, `infoRequestParam` | `AuthenticateResponseData` | Không thay bằng `loginByGoogleAsync` nếu nguồn identity là GPGS | `Ok`, `AccountNotFound`, `VerifyTokenError` |
| `loginByFacebookAsync` | Có token Facebook hợp lệ | `token`, `createPlayerIfNotExists?`, `infoRequestParam` | `AuthenticateResponseData` | Không truyền `facebookId` thô vào method này | `Ok`, `AccountNotFound`, `VerifyTokenError` |
| `loginByAppleAsync` | Có token Apple hợp lệ | `token`, `createPlayerIfNotExists?`, `infoRequestParam` | `AuthenticateResponseData` | Không truyền `appleId` thô vào method này | `Ok`, `AccountNotFound`, `VerifyTokenError` |
| `loginByGameCenterAsync` | Có payload xác thực từ Game Center | `playerId`, `name`, `publicKeyUrl`, `signature`, `salt`, `timestamp`, `createPlayerIfNotExists?`, `infoRequestParam` | `AuthenticateResponseData` | Cần đủ payload xác thực của Game Center | `Ok`, `AccountNotFound`, `VerifyTokenError` |
| `loginByGenericServiceAsync` | Tích hợp provider tùy biến do backend hỗ trợ | `serviceName`, `serviceData`, `createPlayerIfNotExists?`, `infoRequestParam` | `GenericServiceAuthenticateResponseData` | Dùng khi source identity không khớp các method có sẵn | `Ok`, `AccountNotFound`, `VerifyFailed` |

## 4. Decision Rules

- Có username/password đã tồn tại: dùng `loginByAccountAsync`.
- Muốn tạo username/password mới: dùng `registerAccountAsync`.
- Có auth token đang lưu và muốn gia hạn phiên: dùng `refreshAuthTokenAsync`.
- Có token từ nhà cung cấp ngoài: dùng đúng method theo provider, không đổi sang method khác.
- Có identity nội bộ của app: ưu tiên `loginByCustomIdAsync`.
- Có identity gắn với thiết bị/cài đặt app: ưu tiên `loginByCustomDeviceIdAsync`.
- Đang chạy local/test trong editor: dùng `loginByEditorDeviceIdAsync`.
- Có provider đặc thù chưa có method riêng nhưng backend hỗ trợ: dùng `loginByGenericServiceAsync`.

## 5. InfoRequestParam

`infoRequestParam` quyết định backend sẽ hydrate những phần nào vào `responseData.infoResponseParameters`. Đây là rule bắt buộc cho toàn bộ flow login/register, trừ `refreshAuthToken`.

- Không truyền `null`.
- Không bật tất cả field một cách mù quáng.
- Chỉ request những field thật sự cần cho màn hình hoặc flow hiện tại.
- Nếu chỉ cần một phần dữ liệu theo key, dùng các mảng filter như `playerDataKeys`, `playerCurrencyKeys`, `playerStatisticsKeys`, `customDataKeys`, `tagKeys`.
- Repo hiện không có file riêng `infoRequestParam.d.ts`. Schema publish để AI tham chiếu nằm tại [../dist/runtime/entity/models/AuthenticateModels.d.ts](../dist/runtime/entity/models/AuthenticateModels.d.ts).

### Ví dụ tối thiểu

```ts
import { AuthenticateModels } from "@xmobitea/gn-typescript-client";

const infoRequestParam = new AuthenticateModels.InfoRequestParam();
infoRequestParam.displayName = true;
infoRequestParam.avatar = true;
```

### Ví dụ có filter theo key

```ts
import { AuthenticateModels } from "@xmobitea/gn-typescript-client";

const infoRequestParam = new AuthenticateModels.InfoRequestParam();
infoRequestParam.displayName = true;
infoRequestParam.playerDatas = true;
infoRequestParam.playerStatistics = true;
infoRequestParam.playerDataKeys = ["profile", "settings"];
infoRequestParam.playerStatisticsKeys = ["level", "exp"];
```

### Rule riêng cho Google

- `loginByGoogleAsync` bắt buộc có `request.type`.
- Giá trị `type` nên lấy từ [../dist/runtime/constant/enumType/GoogleLoginType.d.ts](../dist/runtime/constant/enumType/GoogleLoginType.d.ts).

Ví dụ:

```ts
import { AuthenticateModels, GoogleLoginType } from "@xmobitea/gn-typescript-client";

const request = new AuthenticateModels.LoginByGoogleRequestData();
request.token = googleToken;
request.type = GoogleLoginType.IdToken;
request.createPlayerIfNotExists = true;
request.infoRequestParam = infoRequestParam;
```

## 6. Response Rules

Tất cả typed response của `AuthenticateApi` đều có các field low-level giống nhau:

- `returnCode`: trạng thái transport/protocol
- `debugMessage`: message lỗi low-level
- `invalidMembers`: danh sách field invalid nếu request sai
- `errorCode`: business error từ backend
- `responseData`: payload typed đã deserialize

Rule kiểm tra response:

```ts
if (response.hasReturnCodeError()) {
    throw new Error(response.debugMessage);
}

if (response.errorCode !== ErrorCode.Ok) {
    throw new Error(`Business error: ${response.errorCode}`);
}
```

Kiểu `responseData` theo method:

- Mọi flow login và `registerAccount` trả về `AuthenticateModels.AuthenticateResponseData`.
- `loginByGenericService` trả về `AuthenticateModels.GenericServiceAuthenticateResponseData`.
- `refreshAuthToken` trả về `AuthenticateModels.RefreshAuthTokenResponseData`.

Những field AI nên biết trong `AuthenticateResponseData`:

- `userId`
- `authToken?`
- `newlyCreated?`
- `playerBan?`
- `infoResponseParameters`

Field bổ sung của `GenericServiceAuthenticateResponseData`:

- `errorMessage?`

Field chính của `RefreshAuthTokenResponseData`:

- `authToken?`
- `playerBan?`

## 7. Best Practices

- Ưu tiên một flow identity ổn định cho mỗi nền tảng hoặc use case. Không đổi method login liên tục giữa các lần mở app.
- Đừng gọi `registerAccountAsync` như một bước bootstrap mặc định. Chỉ gọi khi user thật sự đăng ký mới.
- Đừng dùng `loginByAccountAsync` nếu app chỉ có guest flow hoặc custom identity.
- Đừng ép token của provider này vào method của provider khác.
- Đừng tự parse `GNHashtable` nếu SDK đã có typed response.
- Nếu login thành công rồi mà app cần realtime event, mới kết nối socket.
- Khi chỉ cần một ít dữ liệu player, giữ `infoRequestParam` tối giản để giảm payload.

## 8. Ví dụ Khuyến Nghị

### Login guest bằng custom device id

```ts
import {
    GNNetwork,
    AuthenticateModels,
    ErrorCode,
} from "@xmobitea/gn-typescript-client";

const infoRequestParam = new AuthenticateModels.InfoRequestParam();
infoRequestParam.displayName = true;
infoRequestParam.avatar = true;

const request = new AuthenticateModels.LoginByCustomDeviceIdRequestData();
request.customDeviceId = "device-000001";
request.createPlayerIfNotExists = true;
request.infoRequestParam = infoRequestParam;

const response = await GNNetwork.authenticate.loginByCustomDeviceIdAsync(request);

if (response.hasReturnCodeError()) {
    throw new Error(response.debugMessage);
}

if (response.errorCode !== ErrorCode.Ok) {
    throw new Error(`Business error: ${response.errorCode}`);
}

const authToken = GNNetwork.getAuthenticateStatus().getAuthToken();
const userId = GNNetwork.getAuthenticateStatus().getUserId();
```

### Refresh auth token

```ts
import {
    GNNetwork,
    AuthenticateModels,
    ErrorCode,
} from "@xmobitea/gn-typescript-client";

const request = new AuthenticateModels.RefreshAuthTokenRequestData();
const response = await GNNetwork.authenticate.refreshAuthTokenAsync(request);

if (response.hasReturnCodeError()) {
    throw new Error(response.debugMessage);
}

if (response.errorCode !== ErrorCode.Ok) {
    throw new Error(`Business error: ${response.errorCode}`);
}
```

### Kết nối socket sau khi đã có token

```ts
import { GNNetwork } from "@xmobitea/gn-typescript-client";

GNNetwork.subscriberOnConnectHandler(() => {
    console.log("socket connected", GNNetwork.getSocketSId());
});

GNNetwork.connectSocket(); // Follow README socket rule. SDK auto-auths if authToken is already cached.
```

## 9. Anti-Patterns

- Không gọi `GNNetwork.authenticate.admin` hoặc `GNNetwork.authenticate.server`.
- Không connect socket trước rồi mới dùng socket để login.
- Không bỏ qua `infoRequestParam` ở các flow login/register.
- Không kiểm tra success bằng `0`. SDK này dùng `ReturnCode.Ok === 1` và `ErrorCode.Ok === 1`.
- Không request quá nhiều field trong `infoRequestParam` nếu màn hình không cần.
- Không dùng callback style mặc định khi codebase đã support `async/await`.

## 10. AI Checklist

- Đã `GNNetwork.init(settings)` chưa.
- `secretKey` đã có chưa.
- Method được chọn có đúng với nguồn identity không.
- Có `infoRequestParam` chưa.
- Có dùng `*Async()` không.
- Có check `hasReturnCodeError()` trước `errorCode` không.
- Nếu cần socket event sau login, đã tuân theo [rule socket chuẩn trong RULES](../RULES.md#7-auth--socket-flow) chưa.
