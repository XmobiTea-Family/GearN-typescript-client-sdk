# API Reference: StoreInventoryApi

Store catalog, buy/present, receipt validation, store log.

Domain guide: [guides/STORE_INVENTORY.md](../guides/STORE_INVENTORY.md). DTO shapes: [DTO_INDEX.md](DTO_INDEX.md#store-inventory).

## Namespaces

- `GNNetwork.storeInventory` — `RequestRole.Client`
- `GNNetwork.storeInventory.server` — `RequestRole.Server`
- `GNNetwork.storeInventory.admin` — `RequestRole.Admin`

## Convention

Mỗi method dưới đây có 2 form — callback và `*Async()` Promise. Ưu tiên `*Async()`.

```ts
// Callback
GNNetwork.storeInventory.<method>(requestData, onResponse?, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?);

// Async
const res = await GNNetwork.storeInventory.<method>Async(requestData, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?);
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


## Client methods (`GNNetwork.storeInventory.*`)

| Method | Request DTO | Async form | Response class |
|--------|-------------|------------|----------------|
| `buyStoreItem` | `StoreInventoryModels.BuyStoreItemRequestData` | `buyStoreItemAsync(...)` | `StoreInventoryResponseModels.BuyStoreItemOperationResponse` |
| `getStoreItemInformation` | `StoreInventoryModels.GetStoreItemInformationRequestData` | `getStoreItemInformationAsync(...)` | `StoreInventoryResponseModels.GetStoreItemInformationOperationResponse` |
| `getStoreItemsWithTag` | `StoreInventoryModels.GetStoreItemsWithTagRequestData` | `getStoreItemsWithTagAsync(...)` | `StoreInventoryResponseModels.GetStoreItemsWithTagOperationResponse` |
| `createStoreItem` | `StoreInventoryModels.CreateStoreItemRequestData` | `createStoreItemAsync(...)` | `StoreInventoryResponseModels.CreateStoreItemOperationResponse` |
| `setRemoveStatus` | `StoreInventoryModels.SetRemoveStatusRequestData` | `setRemoveStatusAsync(...)` | `StoreInventoryResponseModels.SetRemoveStatusOperationResponse` |
| `setStoreItemInformation` | `StoreInventoryModels.SetStoreItemInformationRequestData` | `setStoreItemInformationAsync(...)` | `StoreInventoryResponseModels.SetStoreItemInformationOperationResponse` |
| `validateAppleAppStoreReceipt` | `StoreInventoryModels.ValidateAppleAppStoreReceiptRequestData` | `validateAppleAppStoreReceiptAsync(...)` | `StoreInventoryResponseModels.ValidateAppleAppStoreReceiptOperationResponse` |
| `validateFacebookStoreReceipt` | `StoreInventoryModels.ValidateFacebookStoreReceiptRequestData` | `validateFacebookStoreReceiptAsync(...)` | `StoreInventoryResponseModels.ValidateFacebookStoreReceiptOperationResponse` |
| `validateGooglePlayStoreReceipt` | `StoreInventoryModels.ValidateGooglePlayStoreReceiptRequestData` | `validateGooglePlayStoreReceiptAsync(...)` | `StoreInventoryResponseModels.ValidateGooglePlayStoreReceiptOperationResponse` |
| `getCreateLeaderboard` | `StoreInventoryModels.GetCreateLeaderboardRequestData` | `getCreateLeaderboardAsync(...)` | `StoreInventoryResponseModels.GetCreateLeaderboardOperationResponse` |
| `presentStoreItem` | `StoreInventoryModels.PresentStoreItemRequestData` | `presentStoreItemAsync(...)` | `StoreInventoryResponseModels.PresentStoreItemOperationResponse` |
| `getStoreLog` | `StoreInventoryModels.GetStoreLogRequestData` | `getStoreLogAsync(...)` | `StoreInventoryResponseModels.GetStoreLogOperationResponse` |
| `getStoreUsed` | `StoreInventoryModels.GetStoreUsedRequestData` | `getStoreUsedAsync(...)` | `StoreInventoryResponseModels.GetStoreUsedOperationResponse` |
| `removeStoreUsed` | `StoreInventoryModels.RemoveStoreUsedRequestData` | `removeStoreUsedAsync(...)` | `StoreInventoryResponseModels.RemoveStoreUsedOperationResponse` |


## Server methods (`GNNetwork.storeInventory.server.*`)

| Method | Request DTO | Async form | Response class |
|--------|-------------|------------|----------------|
| `buyStoreItem` | `StoreInventoryModels.ServerBuyStoreItemRequestData` | `buyStoreItemAsync(...)` | `StoreInventoryResponseModels.BuyStoreItemOperationResponse` |
| `getStoreItemInformation` | `StoreInventoryModels.ServerGetStoreItemInformationRequestData` | `getStoreItemInformationAsync(...)` | `StoreInventoryResponseModels.GetStoreItemInformationOperationResponse` |
| `getStoreItemsWithTag` | `StoreInventoryModels.ServerGetStoreItemsWithTagRequestData` | `getStoreItemsWithTagAsync(...)` | `StoreInventoryResponseModels.GetStoreItemsWithTagOperationResponse` |
| `createStoreItem` | `StoreInventoryModels.ServerCreateStoreItemRequestData` | `createStoreItemAsync(...)` | `StoreInventoryResponseModels.CreateStoreItemOperationResponse` |
| `setRemoveStatus` | `StoreInventoryModels.ServerSetRemoveStatusRequestData` | `setRemoveStatusAsync(...)` | `StoreInventoryResponseModels.SetRemoveStatusOperationResponse` |
| `setStoreItemInformation` | `StoreInventoryModels.ServerSetStoreItemInformationRequestData` | `setStoreItemInformationAsync(...)` | `StoreInventoryResponseModels.SetStoreItemInformationOperationResponse` |
| `validateAppleAppStoreReceipt` | `StoreInventoryModels.ServerValidateAppleAppStoreReceiptRequestData` | `validateAppleAppStoreReceiptAsync(...)` | `StoreInventoryResponseModels.ValidateAppleAppStoreReceiptOperationResponse` |
| `validateFacebookStoreReceipt` | `StoreInventoryModels.ServerValidateFacebookStoreReceiptRequestData` | `validateFacebookStoreReceiptAsync(...)` | `StoreInventoryResponseModels.ValidateFacebookStoreReceiptOperationResponse` |
| `validateGooglePlayStoreReceipt` | `StoreInventoryModels.ServerValidateGooglePlayStoreReceiptRequestData` | `validateGooglePlayStoreReceiptAsync(...)` | `StoreInventoryResponseModels.ValidateGooglePlayStoreReceiptOperationResponse` |
| `getCreateLeaderboard` | `StoreInventoryModels.ServerGetCreateLeaderboardRequestData` | `getCreateLeaderboardAsync(...)` | `StoreInventoryResponseModels.GetCreateLeaderboardOperationResponse` |
| `presentStoreItem` | `StoreInventoryModels.ServerPresentStoreItemRequestData` | `presentStoreItemAsync(...)` | `StoreInventoryResponseModels.PresentStoreItemOperationResponse` |
| `getStoreLog` | `StoreInventoryModels.ServerGetStoreLogRequestData` | `getStoreLogAsync(...)` | `StoreInventoryResponseModels.GetStoreLogOperationResponse` |
| `getStoreUsed` | `StoreInventoryModels.ServerGetStoreUsedRequestData` | `getStoreUsedAsync(...)` | `StoreInventoryResponseModels.GetStoreUsedOperationResponse` |
| `removeStoreUsed` | `StoreInventoryModels.ServerRemoveStoreUsedRequestData` | `removeStoreUsedAsync(...)` | `StoreInventoryResponseModels.RemoveStoreUsedOperationResponse` |


## Admin methods (`GNNetwork.storeInventory.admin.*`)

| Method | Request DTO | Async form | Response class |
|--------|-------------|------------|----------------|
| `buyStoreItem` | `StoreInventoryModels.AdminBuyStoreItemRequestData` | `buyStoreItemAsync(...)` | `StoreInventoryResponseModels.BuyStoreItemOperationResponse` |
| `getStoreItemInformation` | `StoreInventoryModels.AdminGetStoreItemInformationRequestData` | `getStoreItemInformationAsync(...)` | `StoreInventoryResponseModels.GetStoreItemInformationOperationResponse` |
| `getStoreItemsWithTag` | `StoreInventoryModels.AdminGetStoreItemsWithTagRequestData` | `getStoreItemsWithTagAsync(...)` | `StoreInventoryResponseModels.GetStoreItemsWithTagOperationResponse` |
| `createStoreItem` | `StoreInventoryModels.AdminCreateStoreItemRequestData` | `createStoreItemAsync(...)` | `StoreInventoryResponseModels.CreateStoreItemOperationResponse` |
| `setRemoveStatus` | `StoreInventoryModels.AdminSetRemoveStatusRequestData` | `setRemoveStatusAsync(...)` | `StoreInventoryResponseModels.SetRemoveStatusOperationResponse` |
| `setStoreItemInformation` | `StoreInventoryModels.AdminSetStoreItemInformationRequestData` | `setStoreItemInformationAsync(...)` | `StoreInventoryResponseModels.SetStoreItemInformationOperationResponse` |
| `validateAppleAppStoreReceipt` | `StoreInventoryModels.AdminValidateAppleAppStoreReceiptRequestData` | `validateAppleAppStoreReceiptAsync(...)` | `StoreInventoryResponseModels.ValidateAppleAppStoreReceiptOperationResponse` |
| `validateFacebookStoreReceipt` | `StoreInventoryModels.AdminValidateFacebookStoreReceiptRequestData` | `validateFacebookStoreReceiptAsync(...)` | `StoreInventoryResponseModels.ValidateFacebookStoreReceiptOperationResponse` |
| `validateGooglePlayStoreReceipt` | `StoreInventoryModels.AdminValidateGooglePlayStoreReceiptRequestData` | `validateGooglePlayStoreReceiptAsync(...)` | `StoreInventoryResponseModels.ValidateGooglePlayStoreReceiptOperationResponse` |
| `getCreateLeaderboard` | `StoreInventoryModels.AdminGetCreateLeaderboardRequestData` | `getCreateLeaderboardAsync(...)` | `StoreInventoryResponseModels.GetCreateLeaderboardOperationResponse` |
| `presentStoreItem` | `StoreInventoryModels.AdminPresentStoreItemRequestData` | `presentStoreItemAsync(...)` | `StoreInventoryResponseModels.PresentStoreItemOperationResponse` |
| `getStoreLog` | `StoreInventoryModels.AdminGetStoreLogRequestData` | `getStoreLogAsync(...)` | `StoreInventoryResponseModels.GetStoreLogOperationResponse` |
| `getStoreUsed` | `StoreInventoryModels.AdminGetStoreUsedRequestData` | `getStoreUsedAsync(...)` | `StoreInventoryResponseModels.GetStoreUsedOperationResponse` |
| `removeStoreUsed` | `StoreInventoryModels.AdminRemoveStoreUsedRequestData` | `removeStoreUsedAsync(...)` | `StoreInventoryResponseModels.RemoveStoreUsedOperationResponse` |


## Ví dụ tối thiểu

```ts
import { GNNetwork, ReturnCode, ErrorCode } from "@xmobitea/gn-typescript-client";

const res = await GNNetwork.storeInventory.buyStoreItemAsync({ /* StoreInventoryModels.BuyStoreItemRequestData */ } as any);
if (res.returnCode !== ReturnCode.Ok) return;
if (res.errorCode !== ErrorCode.Ok) return;
// res.responseData có typed payload
```
