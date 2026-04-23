# API Reference: ContentApi

Content data key-value, file upload info, download token.

Domain guide: [guides/CONTENT.md](../guides/CONTENT.md). DTO shapes: [DTO_INDEX.md](DTO_INDEX.md#content).

## Namespaces

- `GNNetwork.content` — `RequestRole.Client`
- `GNNetwork.content.server` — `RequestRole.Server`
- `GNNetwork.content.admin` — `RequestRole.Admin`

## Convention

Mỗi method dưới đây có 2 form — callback và `*Async()` Promise. Ưu tiên `*Async()`.

```ts
// Callback
GNNetwork.content.<method>(requestData, onResponse?, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?);

// Async
const res = await GNNetwork.content.<method>Async(requestData, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?);
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


## Client methods (`GNNetwork.content.*`)

| Method | Request DTO | Async form | Response class |
|--------|-------------|------------|----------------|
| `createNewFileUploadInfo` | `ContentModels.CreateNewFileUploadInfoRequestData` | `createNewFileUploadInfoAsync(...)` | `ContentResponseModels.CreateNewFileUploadInfoOperationResponse` |
| `getContentData` | `ContentModels.GetContentDataRequestData` | `getContentDataAsync(...)` | `ContentResponseModels.GetContentDataOperationResponse` |
| `getFileUploadInfoList` | `ContentModels.GetFileUploadInfoListRequestData` | `getFileUploadInfoListAsync(...)` | `ContentResponseModels.GetFileUploadInfoListOperationResponse` |
| `getFileUploadInfo` | `ContentModels.GetFileUploadInfoRequestData` | `getFileUploadInfoAsync(...)` | `ContentResponseModels.GetFileUploadInfoOperationResponse` |
| `removeFileUploadInfo` | `ContentModels.RemoveFileUploadInfoRequestData` | `removeFileUploadInfoAsync(...)` | `ContentResponseModels.RemoveFileUploadInfoOperationResponse` |
| `requestDownloadFileUploadInfo` | `ContentModels.RequestDownloadFileUploadInfoRequestData` | `requestDownloadFileUploadInfoAsync(...)` | `ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse` |
| `setContentData` | `ContentModels.SetContentDataRequestData` | `setContentDataAsync(...)` | `ContentResponseModels.SetContentDataOperationResponse` |


## Server methods (`GNNetwork.content.server.*`)

| Method | Request DTO | Async form | Response class |
|--------|-------------|------------|----------------|
| `createNewFileUploadInfo` | `ContentModels.ServerCreateNewFileUploadInfoRequestData` | `createNewFileUploadInfoAsync(...)` | `ContentResponseModels.CreateNewFileUploadInfoOperationResponse` |
| `getContentData` | `ContentModels.ServerGetContentDataRequestData` | `getContentDataAsync(...)` | `ContentResponseModels.GetContentDataOperationResponse` |
| `getFileUploadInfoList` | `ContentModels.ServerGetFileUploadInfoListRequestData` | `getFileUploadInfoListAsync(...)` | `ContentResponseModels.GetFileUploadInfoListOperationResponse` |
| `getFileUploadInfo` | `ContentModels.ServerGetFileUploadInfoRequestData` | `getFileUploadInfoAsync(...)` | `ContentResponseModels.GetFileUploadInfoOperationResponse` |
| `removeFileUploadInfo` | `ContentModels.ServerRemoveFileUploadInfoRequestData` | `removeFileUploadInfoAsync(...)` | `ContentResponseModels.RemoveFileUploadInfoOperationResponse` |
| `requestDownloadFileUploadInfo` | `ContentModels.ServerRequestDownloadFileUploadInfoRequestData` | `requestDownloadFileUploadInfoAsync(...)` | `ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse` |
| `setContentData` | `ContentModels.ServerSetContentDataRequestData` | `setContentDataAsync(...)` | `ContentResponseModels.SetContentDataOperationResponse` |


## Admin methods (`GNNetwork.content.admin.*`)

| Method | Request DTO | Async form | Response class |
|--------|-------------|------------|----------------|
| `createNewFileUploadInfo` | `ContentModels.AdminCreateNewFileUploadInfoRequestData` | `createNewFileUploadInfoAsync(...)` | `ContentResponseModels.CreateNewFileUploadInfoOperationResponse` |
| `getContentData` | `ContentModels.AdminGetContentDataRequestData` | `getContentDataAsync(...)` | `ContentResponseModels.GetContentDataOperationResponse` |
| `getFileUploadInfoList` | `ContentModels.AdminGetFileUploadInfoListRequestData` | `getFileUploadInfoListAsync(...)` | `ContentResponseModels.GetFileUploadInfoListOperationResponse` |
| `getFileUploadInfo` | `ContentModels.AdminGetFileUploadInfoRequestData` | `getFileUploadInfoAsync(...)` | `ContentResponseModels.GetFileUploadInfoOperationResponse` |
| `removeFileUploadInfo` | `ContentModels.AdminRemoveFileUploadInfoRequestData` | `removeFileUploadInfoAsync(...)` | `ContentResponseModels.RemoveFileUploadInfoOperationResponse` |
| `requestDownloadFileUploadInfo` | `ContentModels.AdminRequestDownloadFileUploadInfoRequestData` | `requestDownloadFileUploadInfoAsync(...)` | `ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse` |
| `setContentData` | `ContentModels.AdminSetContentDataRequestData` | `setContentDataAsync(...)` | `ContentResponseModels.SetContentDataOperationResponse` |


## Ví dụ tối thiểu

```ts
import { GNNetwork, ReturnCode, ErrorCode } from "@xmobitea/gn-typescript-client";

const res = await GNNetwork.content.createNewFileUploadInfoAsync({ /* ContentModels.CreateNewFileUploadInfoRequestData */ } as any);
if (res.returnCode !== ReturnCode.Ok) return;
if (res.errorCode !== ErrorCode.Ok) return;
// res.responseData có typed payload
```
