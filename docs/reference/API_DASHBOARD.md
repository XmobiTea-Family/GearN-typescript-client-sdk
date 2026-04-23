# API Reference: DashboardApi

Admin login, game/admin account/secret management, analytics, server log, maintenance tools. Uses `RequestRole.Client` transport; admin context resolved from auth token.

Domain guide: [guides/DASHBOARD.md](../guides/DASHBOARD.md). DTO shapes: [DTO_INDEX.md](DTO_INDEX.md#dashboard).

## Namespaces

- `GNNetwork.dashboard` — `RequestRole.Client`

## Convention

Mỗi method dưới đây có 2 form — callback và `*Async()` Promise. Ưu tiên `*Async()`.

```ts
// Callback
GNNetwork.dashboard.<method>(requestData, onResponse?, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?);

// Async
const res = await GNNetwork.dashboard.<method>Async(requestData, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?);
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

## Client methods (`GNNetwork.dashboard.*`)

| Method | Request DTO | Async form | Response class |
|--------|-------------|------------|----------------|
| `changePasswordAdminAccount` | `DashboardModels.ChangePasswordAdminAccountRequestData` | `changePasswordAdminAccountAsync(...)` | `DashboardResponseModels.ChangePasswordAdminAccountOperationResponse` |
| `getAdminAccountList` | `DashboardModels.GetAdminAccountListRequestData` | `getAdminAccountListAsync(...)` | `DashboardResponseModels.GetAdminAccountListOperationResponse` |
| `getGameInformation` | `DashboardModels.GetGameInformationRequestData` | `getGameInformationAsync(...)` | `DashboardResponseModels.GetGameInformationOperationResponse` |
| `getGameList` | `DashboardModels.GetGameListRequestData` | `getGameListAsync(...)` | `DashboardResponseModels.GetGameListOperationResponse` |
| `getMasterGameSettings` | `DashboardModels.GetMasterGameSettingsRequestData` | `getMasterGameSettingsAsync(...)` | `DashboardResponseModels.GetMasterGameSettingsOperationResponse` |
| `getSecretInfoInformation` | `DashboardModels.GetSecretInfoInformationRequestData` | `getSecretInfoInformationAsync(...)` | `DashboardResponseModels.GetSecretInfoInformationOperationResponse` |
| `getSecretInfoList` | `DashboardModels.GetSecretInfoListRequestData` | `getSecretInfoListAsync(...)` | `DashboardResponseModels.GetSecretInfoListOperationResponse` |
| `getServerLog` | `DashboardModels.GetServerLogRequestData` | `getServerLogAsync(...)` | `DashboardResponseModels.GetServerLogOperationResponse` |
| `createAdminAccount` | `DashboardModels.CreateAdminAccountRequestData` | `createAdminAccountAsync(...)` | `DashboardResponseModels.CreateAdminAccountOperationResponse` |
| `createGame` | `DashboardModels.CreateGameRequestData` | `createGameAsync(...)` | `DashboardResponseModels.CreateGameOperationResponse` |
| `createSecretInfo` | `DashboardModels.CreateSecretInfoRequestData` | `createSecretInfoAsync(...)` | `DashboardResponseModels.CreateSecretInfoOperationResponse` |
| `loginByAdminAccount` | `DashboardModels.LoginByAdminAccountRequestData` | `loginByAdminAccountAsync(...)` | `DashboardResponseModels.LoginByAdminAccountOperationResponse` |
| `removeAdminAccount` | `DashboardModels.RemoveAdminAccountRequestData` | `removeAdminAccountAsync(...)` | `DashboardResponseModels.RemoveAdminAccountOperationResponse` |
| `setGameInformation` | `DashboardModels.SetGameInformationRequestData` | `setGameInformationAsync(...)` | `DashboardResponseModels.SetGameInformationOperationResponse` |
| `setMasterGameSettings` | `DashboardModels.SetMasterGameSettingsRequestData` | `setMasterGameSettingsAsync(...)` | `DashboardResponseModels.SetMasterGameSettingsOperationResponse` |
| `setPasswordAdminAccount` | `DashboardModels.SetPasswordAdminAccountRequestData` | `setPasswordAdminAccountAsync(...)` | `DashboardResponseModels.SetPasswordAdminAccountOperationResponse` |
| `setSecretInfoInformation` | `DashboardModels.SetSecretInfoInformationRequestData` | `setSecretInfoInformationAsync(...)` | `DashboardResponseModels.SetSecretInfoInformationOperationResponse` |
| `setSecretKeyAdminAccount` | `DashboardModels.SetSecretKeyAdminAccountRequestData` | `setSecretKeyAdminAccountAsync(...)` | `DashboardResponseModels.SetSecretKeyAdminAccountOperationResponse` |
| `getUsernameAdminAccount` | `DashboardModels.GetUsernameAdminAccountRequestData` | `getUsernameAdminAccountAsync(...)` | `DashboardResponseModels.GetUsernameAdminAccountOperationResponse` |
| `getAnalytics` | `DashboardModels.GetAnalyticsRequestData` | `getAnalyticsAsync(...)` | `DashboardResponseModels.GetAnalyticsOperationResponse` |
| `getEventCallbackCloudScript` | `DashboardModels.GetEventCallbackCloudScriptRequestData` | `getEventCallbackCloudScriptAsync(...)` | `DashboardResponseModels.GetEventCallbackCloudScriptOperationResponse` |
| `setEventCallbackCloudScript` | `DashboardModels.SetEventCallbackCloudScriptRequestData` | `setEventCallbackCloudScriptAsync(...)` | `DashboardResponseModels.SetEventCallbackCloudScriptOperationResponse` |
| `resetStatisticsLeaderboard` | `DashboardModels.ResetStatisticsLeaderboardRequestData` | `resetStatisticsLeaderboardAsync(...)` | `DashboardResponseModels.ResetStatisticsLeaderboardOperationResponse` |
| `getBackupStatisticsLeaderboardVersion` | `DashboardModels.GetBackupStatisticsLeaderboardVersionRequestData` | `getBackupStatisticsLeaderboardVersionAsync(...)` | `DashboardResponseModels.GetBackupStatisticsLeaderboardVersionOperationResponse` |
| `getServerGameData` | `DashboardModels.GetServerGameDataRequestData` | `getServerGameDataAsync(...)` | `DashboardResponseModels.GetServerGameDataOperationResponse` |
| `deleteInDatabase` | `DashboardModels.DeleteInDatabaseRequestData` | `deleteInDatabaseAsync(...)` | `DashboardResponseModels.DeleteInDatabaseOperationResponse` |




## Ví dụ tối thiểu

```ts
import { GNNetwork, ReturnCode, ErrorCode } from "@xmobitea/gn-typescript-client";

const res = await GNNetwork.dashboard.changePasswordAdminAccountAsync({ /* DashboardModels.ChangePasswordAdminAccountRequestData */ } as any);
if (res.returnCode !== ReturnCode.Ok) return;
if (res.errorCode !== ErrorCode.Ok) return;
// res.responseData có typed payload
```
