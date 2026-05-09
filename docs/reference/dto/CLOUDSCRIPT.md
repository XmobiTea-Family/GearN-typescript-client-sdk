# DTO Reference: CloudScript

CloudScript function add/edit/execute + version/listing.

Related API reference: [API_CLOUDSCRIPT.md](/docs/reference/API_CLOUDSCRIPT.md).

Mỗi section bên dưới là 1 class DTO trong namespace `<Models>`. Field table cho biết: tên field, TS type, có `required` hay không (suy từ decorator `mustNonNull` / `isOptional` / dấu `?` trong declaration), doc comment, và ràng buộc length/range/default nếu có.

> **Cách dùng**: khi gọi `*Async()`, bạn truyền object literal matching các field required (+ optional nếu cần). SDK sẽ serialize field dựa trên decorator `@<Type>DataMember({ code })`. Response class expose `responseData` là instance của class `*ResponseData` tương ứng, đọc theo field name dưới đây.

## Danh sách

- **CloudScriptModels** (from `CloudScriptModels.ts`)
  - [AddFunctionRequestData](#addfunctionrequestdata)
  - [ServerAddFunctionRequestData](#serveraddfunctionrequestdata)
  - [AdminAddFunctionRequestData](#adminaddfunctionrequestdata)
  - [EditFunctionRequestData](#editfunctionrequestdata)
  - [ServerEditFunctionRequestData](#servereditfunctionrequestdata)
  - [AdminEditFunctionRequestData](#admineditfunctionrequestdata)
  - [ExecuteFunctionRequestData](#executefunctionrequestdata)
  - [ServerExecuteFunctionRequestData](#serverexecutefunctionrequestdata)
  - [AdminExecuteFunctionRequestData](#adminexecutefunctionrequestdata)
  - [GetFunctionRequestData](#getfunctionrequestdata)
  - [ServerGetFunctionRequestData](#servergetfunctionrequestdata)
  - [AdminGetFunctionRequestData](#admingetfunctionrequestdata)
  - [GetFunctionsRequestData](#getfunctionsrequestdata)
  - [ServerGetFunctionsRequestData](#servergetfunctionsrequestdata)
  - [AdminGetFunctionsRequestData](#admingetfunctionsrequestdata)
  - [AddFunctionResponseData](#addfunctionresponsedata)
  - [EditFunctionResponseData](#editfunctionresponsedata)
  - [ExecuteFunctionResponseData](#executefunctionresponsedata)
  - [GetFunctionResponseData](#getfunctionresponsedata)
  - [FunctionResponseData](#functionresponsedata)
  - [GetFunctionsResponseData](#getfunctionsresponsedata)
- **CloudScriptRequestModels** (from `CloudScriptRequestModels.ts`)
  - [AddFunctionOperationRequest](#addfunctionoperationrequest)
  - [ServerAddFunctionOperationRequest](#serveraddfunctionoperationrequest)
  - [AdminAddFunctionOperationRequest](#adminaddfunctionoperationrequest)
  - [EditFunctionOperationRequest](#editfunctionoperationrequest)
  - [ServerEditFunctionOperationRequest](#servereditfunctionoperationrequest)
  - [AdminEditFunctionOperationRequest](#admineditfunctionoperationrequest)
  - [ExecuteFunctionOperationRequest](#executefunctionoperationrequest)
  - [ServerExecuteFunctionOperationRequest](#serverexecutefunctionoperationrequest)
  - [AdminExecuteFunctionOperationRequest](#adminexecutefunctionoperationrequest)
  - [GetFunctionOperationRequest](#getfunctionoperationrequest)
  - [ServerGetFunctionOperationRequest](#servergetfunctionoperationrequest)
  - [AdminGetFunctionOperationRequest](#admingetfunctionoperationrequest)
  - [GetFunctionsOperationRequest](#getfunctionsoperationrequest)
  - [ServerGetFunctionsOperationRequest](#servergetfunctionsoperationrequest)
  - [AdminGetFunctionsOperationRequest](#admingetfunctionsoperationrequest)
- **CloudScriptResponseModels** (from `CloudScriptResponseModels.ts`)
  - [AddFunctionOperationResponse](#addfunctionoperationresponse)
  - [EditFunctionOperationResponse](#editfunctionoperationresponse)
  - [ExecuteFunctionOperationResponse](#executefunctionoperationresponse)
  - [GetFunctionOperationResponse](#getfunctionoperationresponse)
  - [GetFunctionsOperationResponse](#getfunctionsoperationresponse)

---

## Namespace `CloudScriptModels`

### AddFunctionRequestData

Creates a new CloudScript version from raw script source.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `script` | `string` | yes | Submitted CloudScript source. It must register at least one `handlers["functionName"] = ...` handler. |
| `canExecute` | `boolean` | yes | Whether this version may be executed. |
| `isLive` | `boolean` | yes | Whether this version is promoted as live. |

### ServerAddFunctionRequestData

Extends: `AddFunctionRequestData`

Defines the request payload for ServerAddFunction.

Inherits `script`, `canExecute`, and `isLive` from `AddFunctionRequestData`.

### AdminAddFunctionRequestData

Extends: `ServerAddFunctionRequestData`

Defines the request payload for AdminAddFunction.

Inherits `script`, `canExecute`, and `isLive` from `AddFunctionRequestData`.

### EditFunctionRequestData

Updates execution flags for an existing CloudScript version without changing its source code.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `version` | `string` | yes | CloudScript version to edit. — _minLength=7, maxLength=7_ |
| `canExecute` | `boolean` | yes | Whether this version may be executed. |
| `isLive` | `boolean` | yes | Whether this version is promoted as live. |

### ServerEditFunctionRequestData

Extends: `EditFunctionRequestData`

Defines the request payload for ServerEditFunction.

Inherits `version`, `canExecute`, and `isLive` from `EditFunctionRequestData`.

### AdminEditFunctionRequestData

Extends: `ServerEditFunctionRequestData`

Defines the request payload for AdminEditFunction.

Inherits `version`, `canExecute`, and `isLive` from `EditFunctionRequestData`.

### ExecuteFunctionRequestData

Executes one function from the selected CloudScript version.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `userId` | `string` | no | Optional self-target shortcut on the client route; trusted routes require it through derived classes. — _minLength=10, maxLength=10_ |
| `functionName` | `string` | yes | Function name inside the script version, not the version identifier itself. — _minLength=3, maxLength=30_ |
| `functionParameters` | `any` | no | Arbitrary payload forwarded to the CloudScript function. |
| `version` | `string` | no | Optional version override; when omitted, backend execution rules decide which live version is used. — _minLength=7, maxLength=7_ |

### ServerExecuteFunctionRequestData

Extends: `ExecuteFunctionRequestData`

Defines the request payload for ServerExecuteFunction.

Same fields as `ExecuteFunctionRequestData`, but `userId` is required on the server route.

### AdminExecuteFunctionRequestData

Extends: `ServerExecuteFunctionRequestData`

Defines the request payload for AdminExecuteFunction.

Same fields as `ServerExecuteFunctionRequestData`; `userId` is required on the admin route.

### GetFunctionRequestData

Defines the request payload for GetFunction.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `version` | `string` | yes | CloudScript version to inspect. — _minLength=7, maxLength=7_ |

### ServerGetFunctionRequestData

Extends: `GetFunctionRequestData`

Defines the request payload for ServerGetFunction.

Inherits `version` from `GetFunctionRequestData`.

### AdminGetFunctionRequestData

Extends: `ServerGetFunctionRequestData`

Defines the request payload for AdminGetFunction.

Inherits `version` from `GetFunctionRequestData`.

### GetFunctionsRequestData

Defines the request payload for GetFunctions.

_Không có field public (payload rỗng)._ 

### ServerGetFunctionsRequestData

Extends: `GetFunctionsRequestData`

Defines the request payload for ServerGetFunctions.

_Không có field public (payload rỗng)._ 

### AdminGetFunctionsRequestData

Extends: `ServerGetFunctionsRequestData`

Defines the request payload for AdminGetFunctions.

_Không có field public (payload rỗng)._ 

### AddFunctionResponseData

Returns the created version plus backend validation feedback.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `version` | `string` | yes | — |
| `errorMessage` | `string` | yes | — |

### EditFunctionResponseData

Returns backend validation feedback for an edit workflow.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `errorMessage` | `string` | yes | — |

### ExecuteFunctionResponseData

Returns runtime telemetry and function output for one execution.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `status` | `number` | yes | Raw execution status code returned by the backend. The public package does not currently expose a dedicated enum for this field. |
| `executionTimeInMs` | `number` | yes | — |
| `memoryUsedInBytes` | `number` | yes | — |
| `functionResult` | `any` | yes | Arbitrary function return value. |
| `errorMessage` | `string` | yes | — |
| `functionLogs` | `Array<string>` | yes | Ordered execution logs captured during the function run. — _elementCls=String_ |

### GetFunctionResponseData

Returns one full CloudScript version snapshot.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `script` | `string` | yes | — |
| `canExecute` | `boolean` | yes | — |
| `isLive` | `boolean` | yes | — |
| `tsCreate` | `number` | yes | — |

### FunctionResponseData

Describes one lightweight function-version summary.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `version` | `string` | yes | — |
| `canExecute` | `boolean` | yes | — |

### GetFunctionsResponseData

Returns the available function-version list plus latest/live pointers.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `results` | `Array<FunctionResponseData>` | yes | _elementCls=FunctionResponseData_ |
| `latestVersion` | `string` | yes | — |
| `liveLatestVersion` | `string` | yes | — |

## Namespace `CloudScriptRequestModels`

### AddFunctionOperationRequest

Extends: `CustomOperationRequestAbstract<CloudScriptModels.AddFunctionRequestData>`

Maps the AddFunction operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### ServerAddFunctionOperationRequest

Extends: `AddFunctionOperationRequest`

Maps the ServerAddFunction operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### AdminAddFunctionOperationRequest

Extends: `AddFunctionOperationRequest`

Maps the AdminAddFunction operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### EditFunctionOperationRequest

Extends: `CustomOperationRequestAbstract<CloudScriptModels.EditFunctionRequestData>`

Maps the EditFunction operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### ServerEditFunctionOperationRequest

Extends: `EditFunctionOperationRequest`

Maps the ServerEditFunction operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### AdminEditFunctionOperationRequest

Extends: `EditFunctionOperationRequest`

Maps the AdminEditFunction operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### ExecuteFunctionOperationRequest

Extends: `CustomOperationRequestAbstract<CloudScriptModels.ExecuteFunctionRequestData>`

Maps the ExecuteFunction operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### ServerExecuteFunctionOperationRequest

Extends: `ExecuteFunctionOperationRequest`

Maps the ServerExecuteFunction operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### AdminExecuteFunctionOperationRequest

Extends: `ExecuteFunctionOperationRequest`

Maps the AdminExecuteFunction operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### GetFunctionOperationRequest

Extends: `CustomOperationRequestAbstract<CloudScriptModels.GetFunctionRequestData>`

Maps the GetFunction operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### ServerGetFunctionOperationRequest

Extends: `GetFunctionOperationRequest`

Maps the ServerGetFunction operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### AdminGetFunctionOperationRequest

Extends: `GetFunctionOperationRequest`

Maps the AdminGetFunction operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### GetFunctionsOperationRequest

Extends: `CustomOperationRequestAbstract<CloudScriptModels.GetFunctionsRequestData>`

Maps the GetFunctions operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### ServerGetFunctionsOperationRequest

Extends: `GetFunctionsOperationRequest`

Maps the ServerGetFunctions operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### AdminGetFunctionsOperationRequest

Extends: `GetFunctionsOperationRequest`

Maps the AdminGetFunctions operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

## Namespace `CloudScriptResponseModels`

### AddFunctionOperationResponse

Extends: `CustomOperationResponseAbstract<CloudScriptModels.AddFunctionResponseData>`

Maps the AddFunction operation to a typed response wrapper.

_Không có field public (payload rỗng)._ 

### EditFunctionOperationResponse

Extends: `CustomOperationResponseAbstract<CloudScriptModels.EditFunctionResponseData>`

Maps the EditFunction operation to a typed response wrapper.

_Không có field public (payload rỗng)._ 

### ExecuteFunctionOperationResponse

Extends: `CustomOperationResponseAbstract<CloudScriptModels.ExecuteFunctionResponseData>`

Maps the ExecuteFunction operation to a typed response wrapper.

_Không có field public (payload rỗng)._ 

### GetFunctionOperationResponse

Extends: `CustomOperationResponseAbstract<CloudScriptModels.GetFunctionResponseData>`

Maps the GetFunction operation to a typed response wrapper.

_Không có field public (payload rỗng)._ 

### GetFunctionsOperationResponse

Extends: `CustomOperationResponseAbstract<CloudScriptModels.GetFunctionsResponseData>`

Maps the GetFunctions operation to a typed response wrapper.

_Không có field public (payload rỗng)._ 

