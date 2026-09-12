# API Reference: ContentApi

Content data key-value, file upload info, download token.

- Domain guide: [guides/CONTENT.md](/docs/guides/CONTENT.md)
- DTO shapes: [dto/CONTENT.md](/docs/reference/dto/CONTENT.md)
- Enums: [ENUMS.md](/docs/reference/ENUMS.md)
- Error handling: [ERROR_HANDLING.md](/docs/reference/ERROR_HANDLING.md)
- Permission rules: [PERMISSION_RULES.md](/docs/reference/PERMISSION_RULES.md)

## Namespaces

- `GNNetwork.content` — `RequestRole.Client`
- `GNNetwork.content.server` — `RequestRole.Server`
- `GNNetwork.content.admin` — `RequestRole.Admin`

## Convention

Mỗi method dưới đây có 2 form — callback và `*Async()` Promise. Ưu tiên `*Async()`.

```ts
// Callback
GNNetwork.content.<method>(requestData, onResponse?, overrideAuthToken?, overrideSecretKey?, overrideGameId?, customTags?, retrialCount?, timeout?);

// Async
const res = await GNNetwork.content.<method>Async(requestData, overrideAuthToken?, overrideSecretKey?, overrideGameId?, customTags?, retrialCount?, timeout?);
```

Param chung:

<!-- prettier-ignore -->
| Param | Type | Optional | Notes |
| --- | --- | --- | --- |
| `requestData` | domain-specific (xem bảng dưới) | no | Payload chính |
| `onResponse` | `Action1<TResponse>` | yes | Chỉ có ở callback form |
| `overrideAuthToken` | `string` | yes | Override `authToken` cache cho request này |
| `overrideSecretKey` | `string` | yes | Override secret key mặc định của route |
| `overrideGameId` | `string` | yes | Override game id cho request này; mặc định dùng `GNServerSettings.gameId` |
| `customTags` | `GNHashtable` | yes | Tags gắn vào request, backend có thể log/route |
| `retrialCount` | `number` | yes | Tổng số lần gửi tối đa; `-1` dùng `defaultRetrialCount`, `1` tắt retry |
| `timeout` | `number` | yes | Timeout giây; default = -1 |

Response class expose field: `returnCode`, `errorCode`, `invalidMembers`, `debugMessage`, `responseData`. Xem [ERROR_HANDLING.md](/docs/reference/ERROR_HANDLING.md).

## Client methods (`GNNetwork.content.*`)

<!-- prettier-ignore -->
| Method | Request DTO | Async form | Response class | Default Permission Rules |
| --- | --- | --- | --- | --- |
| `createNewFileUploadInfo` | `ContentModels.CreateNewFileUploadInfoRequestData` | `createNewFileUploadInfoAsync(...)` | `ContentResponseModels.CreateNewFileUploadInfoOperationResponse` | `content.createNewFileUploadInfo.otherSelfEnable` |
| `getContentData` | `ContentModels.GetContentDataRequestData` | `getContentDataAsync(...)` | `ContentResponseModels.GetContentDataOperationResponse` | `content.getContentData.otherSelfEnable` |
| `getFileUploadInfoList` | `ContentModels.GetFileUploadInfoListRequestData` | `getFileUploadInfoListAsync(...)` | `ContentResponseModels.GetFileUploadInfoListOperationResponse` | `content.getFileUploadInfoList.otherSelfEnable` |
| `getFileUploadInfo` | `ContentModels.GetFileUploadInfoRequestData` | `getFileUploadInfoAsync(...)` | `ContentResponseModels.GetFileUploadInfoOperationResponse` | `content.getFileUploadInfo.otherSelfEnable` |
| `removeFileUploadInfo` | `ContentModels.RemoveFileUploadInfoRequestData` | `removeFileUploadInfoAsync(...)` | `ContentResponseModels.RemoveFileUploadInfoOperationResponse` | `content.removeFileUploadInfo.otherSelfEnable` |
| `requestDownloadFileUploadInfo` | `ContentModels.RequestDownloadFileUploadInfoRequestData` | `requestDownloadFileUploadInfoAsync(...)` | `ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse` | `content.requestDownloadFileUploadInfo.otherSelfEnable` |
| `setContentData` | `ContentModels.SetContentDataRequestData` | `setContentDataAsync(...)` | `ContentResponseModels.SetContentDataOperationResponse` | `content.setContentData.otherSelfEnable` |

## Server methods (`GNNetwork.content.server.*`)

<!-- prettier-ignore -->
| Method | Request DTO | Async form | Response class | Default Permission Rules |
| --- | --- | --- | --- | --- |
| `createNewFileUploadInfo` | `ContentModels.ServerCreateNewFileUploadInfoRequestData` | `createNewFileUploadInfoAsync(...)` | `ContentResponseModels.CreateNewFileUploadInfoOperationResponse` | `content.createNewFileUploadInfo.serverSelfEnable` |
| `getContentData` | `ContentModels.ServerGetContentDataRequestData` | `getContentDataAsync(...)` | `ContentResponseModels.GetContentDataOperationResponse` | `content.getContentData.serverSelfEnable` |
| `getFileUploadInfoList` | `ContentModels.ServerGetFileUploadInfoListRequestData` | `getFileUploadInfoListAsync(...)` | `ContentResponseModels.GetFileUploadInfoListOperationResponse` | `content.getFileUploadInfoList.serverSelfEnable` |
| `getFileUploadInfo` | `ContentModels.ServerGetFileUploadInfoRequestData` | `getFileUploadInfoAsync(...)` | `ContentResponseModels.GetFileUploadInfoOperationResponse` | `content.getFileUploadInfo.serverSelfEnable` |
| `removeFileUploadInfo` | `ContentModels.ServerRemoveFileUploadInfoRequestData` | `removeFileUploadInfoAsync(...)` | `ContentResponseModels.RemoveFileUploadInfoOperationResponse` | `content.removeFileUploadInfo.serverSelfEnable` |
| `requestDownloadFileUploadInfo` | `ContentModels.ServerRequestDownloadFileUploadInfoRequestData` | `requestDownloadFileUploadInfoAsync(...)` | `ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse` | `content.requestDownloadFileUploadInfo.serverSelfEnable` |
| `setContentData` | `ContentModels.ServerSetContentDataRequestData` | `setContentDataAsync(...)` | `ContentResponseModels.SetContentDataOperationResponse` | `content.setContentData.serverSelfEnable` |

## Admin methods (`GNNetwork.content.admin.*`)

<!-- prettier-ignore -->
| Method | Request DTO | Async form | Response class | Default Permission Rules |
| --- | --- | --- | --- | --- |
| `createNewFileUploadInfo` | `ContentModels.AdminCreateNewFileUploadInfoRequestData` | `createNewFileUploadInfoAsync(...)` | `ContentResponseModels.CreateNewFileUploadInfoOperationResponse` | `content.createNewFileUploadInfo.adminSelfEnable` |
| `getContentData` | `ContentModels.AdminGetContentDataRequestData` | `getContentDataAsync(...)` | `ContentResponseModels.GetContentDataOperationResponse` | `content.getContentData.adminSelfEnable` |
| `getFileUploadInfoList` | `ContentModels.AdminGetFileUploadInfoListRequestData` | `getFileUploadInfoListAsync(...)` | `ContentResponseModels.GetFileUploadInfoListOperationResponse` | `content.getFileUploadInfoList.adminSelfEnable` |
| `getFileUploadInfo` | `ContentModels.AdminGetFileUploadInfoRequestData` | `getFileUploadInfoAsync(...)` | `ContentResponseModels.GetFileUploadInfoOperationResponse` | `content.getFileUploadInfo.adminSelfEnable` |
| `removeFileUploadInfo` | `ContentModels.AdminRemoveFileUploadInfoRequestData` | `removeFileUploadInfoAsync(...)` | `ContentResponseModels.RemoveFileUploadInfoOperationResponse` | `content.removeFileUploadInfo.adminSelfEnable` |
| `requestDownloadFileUploadInfo` | `ContentModels.AdminRequestDownloadFileUploadInfoRequestData` | `requestDownloadFileUploadInfoAsync(...)` | `ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse` | `content.requestDownloadFileUploadInfo.adminSelfEnable` |
| `setContentData` | `ContentModels.AdminSetContentDataRequestData` | `setContentDataAsync(...)` | `ContentResponseModels.SetContentDataOperationResponse` | `content.setContentData.adminSelfEnable` |

## Ví dụ tối thiểu

```ts
import { GNNetwork, ReturnCode, ErrorCode } from "@xmobitea/gearn-typescript-client-sdk";

// requestData: ContentModels.CreateNewFileUploadInfoRequestData đã build theo dto/CONTENT.md
const res = await GNNetwork.content.createNewFileUploadInfoAsync(requestData);
if (res.returnCode !== ReturnCode.Ok) return;
if (res.errorCode !== ErrorCode.Ok) return;
// res.responseData có typed payload
```
