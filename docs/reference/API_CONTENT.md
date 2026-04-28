# API Reference: ContentApi

Content data key-value, file upload info, download token.

Domain guide: [guides/CONTENT.md](../guides/CONTENT.md). DTO shapes: [dto/CONTENT.md](dto/CONTENT.md) hoặc grep [DTO_INDEX.md](DTO_INDEX.md).

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

| Method | Request DTO | Async form | Response class | Default Permission Rules |
|--------|-------------|------------|----------------|--------------------------|
| `createNewFileUploadInfo` | `ContentModels.CreateNewFileUploadInfoRequestData` | `createNewFileUploadInfoAsync(...)` | `ContentResponseModels.CreateNewFileUploadInfoOperationResponse` | `content.createNewFileUploadInfo.selfEnable` |
| `getContentData` | `ContentModels.GetContentDataRequestData` | `getContentDataAsync(...)` | `ContentResponseModels.GetContentDataOperationResponse` | `content.getContentData.otherSelfEnable` |
| `getFileUploadInfoList` | `ContentModels.GetFileUploadInfoListRequestData` | `getFileUploadInfoListAsync(...)` | `ContentResponseModels.GetFileUploadInfoListOperationResponse` | `content.getFileUploadInfoList.selfEnable` |
| `getFileUploadInfo` | `ContentModels.GetFileUploadInfoRequestData` | `getFileUploadInfoAsync(...)` | `ContentResponseModels.GetFileUploadInfoOperationResponse` | `content.getFileUploadInfo.selfEnable` |
| `removeFileUploadInfo` | `ContentModels.RemoveFileUploadInfoRequestData` | `removeFileUploadInfoAsync(...)` | `ContentResponseModels.RemoveFileUploadInfoOperationResponse` | `content.removeFileUploadInfo.selfEnable` |
| `requestDownloadFileUploadInfo` | `ContentModels.RequestDownloadFileUploadInfoRequestData` | `requestDownloadFileUploadInfoAsync(...)` | `ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse` | `content.requestDownloadFileUploadInfo.otherSelfEnable` |
| `setContentData` | `ContentModels.SetContentDataRequestData` | `setContentDataAsync(...)` | `ContentResponseModels.SetContentDataOperationResponse` | `content.setContentData.otherSelfEnable` |


## Server methods (`GNNetwork.content.server.*`)

| Method | Request DTO | Async form | Response class | Default Permission Rules |
|--------|-------------|------------|----------------|--------------------------|
| `createNewFileUploadInfo` | `ContentModels.ServerCreateNewFileUploadInfoRequestData` | `createNewFileUploadInfoAsync(...)` | `ContentResponseModels.CreateNewFileUploadInfoOperationResponse` | `content.createNewFileUploadInfo.serverSelfEnable` |
| `getContentData` | `ContentModels.ServerGetContentDataRequestData` | `getContentDataAsync(...)` | `ContentResponseModels.GetContentDataOperationResponse` | `content.getContentData.serverSelfEnable` |
| `getFileUploadInfoList` | `ContentModels.ServerGetFileUploadInfoListRequestData` | `getFileUploadInfoListAsync(...)` | `ContentResponseModels.GetFileUploadInfoListOperationResponse` | `content.getFileUploadInfoList.serverSelfEnable` |
| `getFileUploadInfo` | `ContentModels.ServerGetFileUploadInfoRequestData` | `getFileUploadInfoAsync(...)` | `ContentResponseModels.GetFileUploadInfoOperationResponse` | `content.getFileUploadInfo.serverSelfEnable` |
| `removeFileUploadInfo` | `ContentModels.ServerRemoveFileUploadInfoRequestData` | `removeFileUploadInfoAsync(...)` | `ContentResponseModels.RemoveFileUploadInfoOperationResponse` | `content.removeFileUploadInfo.serverSelfEnable` |
| `requestDownloadFileUploadInfo` | `ContentModels.ServerRequestDownloadFileUploadInfoRequestData` | `requestDownloadFileUploadInfoAsync(...)` | `ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse` | `content.requestDownloadFileUploadInfo.serverSelfEnable` |
| `setContentData` | `ContentModels.ServerSetContentDataRequestData` | `setContentDataAsync(...)` | `ContentResponseModels.SetContentDataOperationResponse` | `content.setContentData.serverSelfEnable` |


## Admin methods (`GNNetwork.content.admin.*`)

| Method | Request DTO | Async form | Response class | Default Permission Rules |
|--------|-------------|------------|----------------|--------------------------|
| `createNewFileUploadInfo` | `ContentModels.AdminCreateNewFileUploadInfoRequestData` | `createNewFileUploadInfoAsync(...)` | `ContentResponseModels.CreateNewFileUploadInfoOperationResponse` | `content.createNewFileUploadInfo.adminSelfEnable` |
| `getContentData` | `ContentModels.AdminGetContentDataRequestData` | `getContentDataAsync(...)` | `ContentResponseModels.GetContentDataOperationResponse` | `content.getContentData.adminSelfEnable` |
| `getFileUploadInfoList` | `ContentModels.AdminGetFileUploadInfoListRequestData` | `getFileUploadInfoListAsync(...)` | `ContentResponseModels.GetFileUploadInfoListOperationResponse` | `content.getFileUploadInfoList.adminSelfEnable` |
| `getFileUploadInfo` | `ContentModels.AdminGetFileUploadInfoRequestData` | `getFileUploadInfoAsync(...)` | `ContentResponseModels.GetFileUploadInfoOperationResponse` | `content.getFileUploadInfo.adminSelfEnable` |
| `removeFileUploadInfo` | `ContentModels.AdminRemoveFileUploadInfoRequestData` | `removeFileUploadInfoAsync(...)` | `ContentResponseModels.RemoveFileUploadInfoOperationResponse` | `content.removeFileUploadInfo.adminSelfEnable` |
| `requestDownloadFileUploadInfo` | `ContentModels.AdminRequestDownloadFileUploadInfoRequestData` | `requestDownloadFileUploadInfoAsync(...)` | `ContentResponseModels.RequestDownloadFileUploadInfoOperationResponse` | `content.requestDownloadFileUploadInfo.adminSelfEnable` |
| `setContentData` | `ContentModels.AdminSetContentDataRequestData` | `setContentDataAsync(...)` | `ContentResponseModels.SetContentDataOperationResponse` | `content.setContentData.adminSelfEnable` |


## Ví dụ tối thiểu

```ts
import { GNNetwork, ReturnCode, ErrorCode } from "@xmobitea/gn-typescript-client";

// requestData: ContentModels.CreateNewFileUploadInfoRequestData đã build theo dto/CONTENT.md
const res = await GNNetwork.content.createNewFileUploadInfoAsync(requestData);
if (res.returnCode !== ReturnCode.Ok) return;
if (res.errorCode !== ErrorCode.Ok) return;
// res.responseData có typed payload
```
