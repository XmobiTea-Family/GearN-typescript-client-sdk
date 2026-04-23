# API Reference: CloudScriptApi

CloudScript function add/edit/execute + version/listing.

Domain guide: [guides/CLOUDSCRIPT.md](../guides/CLOUDSCRIPT.md). DTO shapes: [DTO_INDEX.md](DTO_INDEX.md#cloudscript).

## Namespaces

- `GNNetwork.cloudScript` — `RequestRole.Client`
- `GNNetwork.cloudScript.server` — `RequestRole.Server`
- `GNNetwork.cloudScript.admin` — `RequestRole.Admin`

## Convention

Mỗi method dưới đây có 2 form — callback và `*Async()` Promise. Ưu tiên `*Async()`.

```ts
// Callback
GNNetwork.cloudScript.<method>(requestData, onResponse?, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?);

// Async
const res = await GNNetwork.cloudScript.<method>Async(requestData, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?);
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


## Client methods (`GNNetwork.cloudScript.*`)

| Method | Request DTO | Async form | Response class |
|--------|-------------|------------|----------------|
| `addFunction` | `CloudScriptModels.AddFunctionRequestData` | `addFunctionAsync(...)` | `CloudScriptResponseModels.AddFunctionOperationResponse` |
| `editFunction` | `CloudScriptModels.EditFunctionRequestData` | `editFunctionAsync(...)` | `CloudScriptResponseModels.EditFunctionOperationResponse` |
| `executeFunction` | `CloudScriptModels.ExecuteFunctionRequestData` | `executeFunctionAsync(...)` | `CloudScriptResponseModels.ExecuteFunctionOperationResponse` |
| `getFunction` | `CloudScriptModels.GetFunctionRequestData` | `getFunctionAsync(...)` | `CloudScriptResponseModels.GetFunctionOperationResponse` |
| `getFunctions` | `CloudScriptModels.GetFunctionsRequestData` | `getFunctionsAsync(...)` | `CloudScriptResponseModels.GetFunctionsOperationResponse` |


## Server methods (`GNNetwork.cloudScript.server.*`)

| Method | Request DTO | Async form | Response class |
|--------|-------------|------------|----------------|
| `addFunction` | `CloudScriptModels.ServerAddFunctionRequestData` | `addFunctionAsync(...)` | `CloudScriptResponseModels.AddFunctionOperationResponse` |
| `editFunction` | `CloudScriptModels.ServerEditFunctionRequestData` | `editFunctionAsync(...)` | `CloudScriptResponseModels.EditFunctionOperationResponse` |
| `executeFunction` | `CloudScriptModels.ServerExecuteFunctionRequestData` | `executeFunctionAsync(...)` | `CloudScriptResponseModels.ExecuteFunctionOperationResponse` |
| `getFunction` | `CloudScriptModels.ServerGetFunctionRequestData` | `getFunctionAsync(...)` | `CloudScriptResponseModels.GetFunctionOperationResponse` |
| `getFunctions` | `CloudScriptModels.ServerGetFunctionsRequestData` | `getFunctionsAsync(...)` | `CloudScriptResponseModels.GetFunctionsOperationResponse` |


## Admin methods (`GNNetwork.cloudScript.admin.*`)

| Method | Request DTO | Async form | Response class |
|--------|-------------|------------|----------------|
| `addFunction` | `CloudScriptModels.AdminAddFunctionRequestData` | `addFunctionAsync(...)` | `CloudScriptResponseModels.AddFunctionOperationResponse` |
| `editFunction` | `CloudScriptModels.AdminEditFunctionRequestData` | `editFunctionAsync(...)` | `CloudScriptResponseModels.EditFunctionOperationResponse` |
| `executeFunction` | `CloudScriptModels.AdminExecuteFunctionRequestData` | `executeFunctionAsync(...)` | `CloudScriptResponseModels.ExecuteFunctionOperationResponse` |
| `getFunction` | `CloudScriptModels.AdminGetFunctionRequestData` | `getFunctionAsync(...)` | `CloudScriptResponseModels.GetFunctionOperationResponse` |
| `getFunctions` | `CloudScriptModels.AdminGetFunctionsRequestData` | `getFunctionsAsync(...)` | `CloudScriptResponseModels.GetFunctionsOperationResponse` |


## Ví dụ tối thiểu

```ts
import { GNNetwork, ReturnCode, ErrorCode } from "@xmobitea/gn-typescript-client";

const res = await GNNetwork.cloudScript.addFunctionAsync({ /* CloudScriptModels.AddFunctionRequestData */ } as any);
if (res.returnCode !== ReturnCode.Ok) return;
if (res.errorCode !== ErrorCode.Ok) return;
// res.responseData có typed payload
```
