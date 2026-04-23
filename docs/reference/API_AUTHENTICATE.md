# API Reference: AuthenticateApi

Player login (account, social, device id), register, refresh auth token.

Domain guide: [guides/AUTHENTICATE.md](../guides/AUTHENTICATE.md). DTO shapes: [DTO_INDEX.md](DTO_INDEX.md#authenticate).

## Namespaces

- `GNNetwork.authenticate` — `RequestRole.Client`

## Convention

Mỗi method dưới đây có 2 form — callback và `*Async()` Promise. Ưu tiên `*Async()`.

```ts
// Callback
GNNetwork.authenticate.<method>(requestData, onResponse?, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?);

// Async
const res = await GNNetwork.authenticate.<method>Async(requestData, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?);
```

Param chung:

| Param | Type | Optional | Notes |
|-------|------|----------|-------|
| `requestData` | domain-specific (xem bảng dưới) | no | Payload chính |
| `onResponse` | `Action1<TResponse>` | yes | Chỉ có ở callback form |
| `overrideAuthToken` | `string` | yes | Override `authToken` cache cho request này |
| `overrideSecretKey` | `string` | yes | Override secret key mặc định của route |
| `customTags` | `GNHashtable` | yes | Tags gắn vào request, backend có thể log/route |
| `timeout` | `number` | yes | Timeout giây; default = `OperationRequest.defaultTimeOut` |

Response class expose field: `returnCode`, `errorCode`, `invalidMembers`, `debugMessage`, `responseData`. Xem [ERROR_HANDLING.md](ERROR_HANDLING.md).


> `server` / `admin` namespace hiện tại không có method public — giữ để đối xứng API.

## Client methods (`GNNetwork.authenticate.*`)

| Method | Request DTO | Async form | Response class |
|--------|-------------|------------|----------------|
| `loginByAccount` | `AuthenticateModels.LoginByAccountRequestData` | `loginByAccountAsync(...)` | `AuthenticateResponseModels.LoginByAccountOperationResponse` |
| `loginByAndroidDeviceId` | `AuthenticateModels.LoginByAndroidDeviceIdRequestData` | `loginByAndroidDeviceIdAsync(...)` | `AuthenticateResponseModels.LoginByAndroidDeviceIdOperationResponse` |
| `loginByApple` | `AuthenticateModels.LoginByAppleRequestData` | `loginByAppleAsync(...)` | `AuthenticateResponseModels.LoginByAppleOperationResponse` |
| `loginByCustomDeviceId` | `AuthenticateModels.LoginByCustomDeviceIdRequestData` | `loginByCustomDeviceIdAsync(...)` | `AuthenticateResponseModels.LoginByCustomDeviceIdOperationResponse` |
| `loginByCustomId` | `AuthenticateModels.LoginByCustomIdRequestData` | `loginByCustomIdAsync(...)` | `AuthenticateResponseModels.LoginByCustomIdOperationResponse` |
| `loginByEditorDeviceId` | `AuthenticateModels.LoginByEditorDeviceIdRequestData` | `loginByEditorDeviceIdAsync(...)` | `AuthenticateResponseModels.LoginByEditorDeviceIdOperationResponse` |
| `loginByFacebook` | `AuthenticateModels.LoginByFacebookRequestData` | `loginByFacebookAsync(...)` | `AuthenticateResponseModels.LoginByFacebookOperationResponse` |
| `loginByGenericService` | `AuthenticateModels.LoginByGenericServiceRequestData` | `loginByGenericServiceAsync(...)` | `AuthenticateResponseModels.LoginByGenericServiceOperationResponse` |
| `loginByGoogle` | `AuthenticateModels.LoginByGoogleRequestData` | `loginByGoogleAsync(...)` | `AuthenticateResponseModels.LoginByGoogleOperationResponse` |
| `loginByGooglePlayGameService` | `AuthenticateModels.LoginByGooglePlayGameServiceRequestData` | `loginByGooglePlayGameServiceAsync(...)` | `AuthenticateResponseModels.LoginByGooglePlayGameServiceOperationResponse` |
| `loginByGameCenter` | `AuthenticateModels.LoginByGameCenterRequestData` | `loginByGameCenterAsync(...)` | `AuthenticateResponseModels.LoginByGameCenterOperationResponse` |
| `loginByiOSDeviceId` | `AuthenticateModels.LoginByiOSDeviceIdRequestData` | `loginByiOSDeviceIdAsync(...)` | `AuthenticateResponseModels.LoginByiOSDeviceIdOperationResponse` |
| `loginByLinuxDeviceId` | `AuthenticateModels.LoginByLinuxDeviceIdRequestData` | `loginByLinuxDeviceIdAsync(...)` | `AuthenticateResponseModels.LoginByLinuxDeviceIdOperationResponse` |
| `loginByMacOSDeviceId` | `AuthenticateModels.LoginByMacOSDeviceIdRequestData` | `loginByMacOSDeviceIdAsync(...)` | `AuthenticateResponseModels.LoginByMacOSDeviceIdOperationResponse` |
| `loginByWindowsDeviceId` | `AuthenticateModels.LoginByWindowsDeviceIdRequestData` | `loginByWindowsDeviceIdAsync(...)` | `AuthenticateResponseModels.LoginByWindowsDeviceIdOperationResponse` |
| `loginByWindowsPhoneDeviceId` | `AuthenticateModels.LoginByWindowsPhoneDeviceIdRequestData` | `loginByWindowsPhoneDeviceIdAsync(...)` | `AuthenticateResponseModels.LoginByWindowsPhoneDeviceIdOperationResponse` |
| `registerAccount` | `AuthenticateModels.RegisterAccountRequestData` | `registerAccountAsync(...)` | `AuthenticateResponseModels.RegisterAccountOperationResponse` |
| `refreshAuthToken` | `AuthenticateModels.RefreshAuthTokenRequestData` | `refreshAuthTokenAsync(...)` | `AuthenticateResponseModels.RefreshAuthTokenOperationResponse` |




## Ví dụ tối thiểu

```ts
import { GNNetwork, ReturnCode, ErrorCode } from "@xmobitea/gn-typescript-client";

const res = await GNNetwork.authenticate.loginByAccountAsync({ /* AuthenticateModels.LoginByAccountRequestData */ } as any);
if (res.returnCode !== ReturnCode.Ok) return;
if (res.errorCode !== ErrorCode.Ok) return;
// res.responseData có typed payload
```
