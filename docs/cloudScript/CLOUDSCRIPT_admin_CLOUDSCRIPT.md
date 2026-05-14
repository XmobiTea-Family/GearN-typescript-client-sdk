# CLOUDSCRIPT ADMIN CLOUDSCRIPT

## 1. Mục đích

File này chỉ tập trung vào `admin.cloudScript` trong cloud script.

> Lưu ý: `admin.cloudScript` chỉ expose 2 hàm (`executeFunction`, `executeFunctionAsync`) để tránh recursive execution.

Mapping chính:

- `admin.cloudScript` → `GNNetwork.cloudScript.admin`

## 2. Các hàm

<!-- prettier-ignore -->
| Hàm gốc | Code trong cloudScript như thế nào | Request Data DTO | Response DTO |
| --- | --- | --- | --- |
| `executeFunction(requestData: CloudScriptModels.AdminExecuteFunctionRequestData, onResponse?: Action1<CloudScriptResponseModels.ExecuteFunctionOperationResponse>, overrideAuthToken?: string, overrideSecretKey?: string, customTags?: GNHashtable, timeout?: number): void` | `admin.cloudScript.executeFunction(requestData, onResponse?, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?)` | [AdminExecuteFunctionRequestData](/docs/reference/dto/CLOUDSCRIPT.md#adminexecutefunctionrequestdata) | [ExecuteFunctionOperationResponse](/docs/reference/dto/CLOUDSCRIPT.md#executefunctionoperationresponse) |
| `executeFunctionAsync(requestData: CloudScriptModels.AdminExecuteFunctionRequestData, overrideAuthToken?: string, overrideSecretKey?: string, customTags?: GNHashtable, timeout?: number): Promise<CloudScriptResponseModels.ExecuteFunctionOperationResponse>` | `admin.cloudScript.executeFunctionAsync(requestData, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?)` | [AdminExecuteFunctionRequestData](/docs/reference/dto/CLOUDSCRIPT.md#adminexecutefunctionrequestdata) | [ExecuteFunctionOperationResponse](/docs/reference/dto/CLOUDSCRIPT.md#executefunctionoperationresponse) |
