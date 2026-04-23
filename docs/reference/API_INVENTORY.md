# API Reference: InventoryApi

Inventory item metadata, ownership, amount, statistics, activity log.

Domain guide: [guides/INVENTORY.md](../guides/INVENTORY.md). DTO shapes: [DTO_INDEX.md](DTO_INDEX.md#inventory).

## Namespaces

- `GNNetwork.inventory` — `RequestRole.Client`
- `GNNetwork.inventory.server` — `RequestRole.Server`
- `GNNetwork.inventory.admin` — `RequestRole.Admin`

## Convention

Mỗi method dưới đây có 2 form — callback và `*Async()` Promise. Ưu tiên `*Async()`.

```ts
// Callback
GNNetwork.inventory.<method>(requestData, onResponse?, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?);

// Async
const res = await GNNetwork.inventory.<method>Async(requestData, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?);
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


## Client methods (`GNNetwork.inventory.*`)

| Method | Request DTO | Async form | Response class |
|--------|-------------|------------|----------------|
| `addSegment` | `InventoryModels.AddSegmentRequestData` | `addSegmentAsync(...)` | `InventoryResponseModels.AddSegmentOperationResponse` |
| `getAmount` | `InventoryModels.GetAmountRequestData` | `getAmountAsync(...)` | `InventoryResponseModels.GetAmountOperationResponse` |
| `getAvatar` | `InventoryModels.GetAvatarRequestData` | `getAvatarAsync(...)` | `InventoryResponseModels.GetAvatarOperationResponse` |
| `getCatalogId` | `InventoryModels.GetCatalogIdRequestData` | `getCatalogIdAsync(...)` | `InventoryResponseModels.GetCatalogIdOperationResponse` |
| `getClassId` | `InventoryModels.GetClassIdRequestData` | `getClassIdAsync(...)` | `InventoryResponseModels.GetClassIdOperationResponse` |
| `getCustomData` | `InventoryModels.GetCustomDataRequestData` | `getCustomDataAsync(...)` | `InventoryResponseModels.GetCustomDataOperationResponse` |
| `getDisplayName` | `InventoryModels.GetDisplayNameRequestData` | `getDisplayNameAsync(...)` | `InventoryResponseModels.GetDisplayNameOperationResponse` |
| `getItemData` | `InventoryModels.GetItemDataRequestData` | `getItemDataAsync(...)` | `InventoryResponseModels.GetItemDataOperationResponse` |
| `getItemInformation` | `InventoryModels.GetItemInformationRequestData` | `getItemInformationAsync(...)` | `InventoryResponseModels.GetItemInformationOperationResponse` |
| `getItemStatistics` | `InventoryModels.GetItemStatisticsRequestData` | `getItemStatisticsAsync(...)` | `InventoryResponseModels.GetItemStatisticsOperationResponse` |
| `getItemsWithDisplayName` | `InventoryModels.GetItemsWithDisplayNameRequestData` | `getItemsWithDisplayNameAsync(...)` | `InventoryResponseModels.GetItemsWithDisplayNameOperationResponse` |
| `getItemsWithSegment` | `InventoryModels.GetItemsWithSegmentRequestData` | `getItemsWithSegmentAsync(...)` | `InventoryResponseModels.GetItemsWithSegmentOperationResponse` |
| `getItemsWithTag` | `InventoryModels.GetItemsWithTagRequestData` | `getItemsWithTagAsync(...)` | `InventoryResponseModels.GetItemsWithTagOperationResponse` |
| `getItemType` | `InventoryModels.GetItemTypeRequestData` | `getItemTypeAsync(...)` | `InventoryResponseModels.GetItemTypeOperationResponse` |
| `getOwner` | `InventoryModels.GetOwnerRequestData` | `getOwnerAsync(...)` | `InventoryResponseModels.GetOwnerOperationResponse` |
| `getRemoveStatus` | `InventoryModels.GetRemoveStatusRequestData` | `getRemoveStatusAsync(...)` | `InventoryResponseModels.GetRemoveStatusOperationResponse` |
| `getSegment` | `InventoryModels.GetSegmentRequestData` | `getSegmentAsync(...)` | `InventoryResponseModels.GetSegmentOperationResponse` |
| `getStatisticsLeaderboardAroundItem` | `InventoryModels.GetStatisticsLeaderboardAroundItemRequestData` | `getStatisticsLeaderboardAroundItemAsync(...)` | `InventoryResponseModels.GetStatisticsLeaderboardAroundItemOperationResponse` |
| `getStatisticsLeaderboard` | `InventoryModels.GetStatisticsLeaderboardRequestData` | `getStatisticsLeaderboardAsync(...)` | `InventoryResponseModels.GetStatisticsLeaderboardOperationResponse` |
| `getTag` | `InventoryModels.GetTagRequestData` | `getTagAsync(...)` | `InventoryResponseModels.GetTagOperationResponse` |
| `getTsCreate` | `InventoryModels.GetTsCreateRequestData` | `getTsCreateAsync(...)` | `InventoryResponseModels.GetTsCreateOperationResponse` |
| `removeSegment` | `InventoryModels.RemoveSegmentRequestData` | `removeSegmentAsync(...)` | `InventoryResponseModels.RemoveSegmentOperationResponse` |
| `removeTag` | `InventoryModels.RemoveTagRequestData` | `removeTagAsync(...)` | `InventoryResponseModels.RemoveTagOperationResponse` |
| `setAmount` | `InventoryModels.SetAmountRequestData` | `setAmountAsync(...)` | `InventoryResponseModels.SetAmountOperationResponse` |
| `setAvatar` | `InventoryModels.SetAvatarRequestData` | `setAvatarAsync(...)` | `InventoryResponseModels.SetAvatarOperationResponse` |
| `setCustomData` | `InventoryModels.SetCustomDataRequestData` | `setCustomDataAsync(...)` | `InventoryResponseModels.SetCustomDataOperationResponse` |
| `setDisplayName` | `InventoryModels.SetDisplayNameRequestData` | `setDisplayNameAsync(...)` | `InventoryResponseModels.SetDisplayNameOperationResponse` |
| `setItemData` | `InventoryModels.SetItemDataRequestData` | `setItemDataAsync(...)` | `InventoryResponseModels.SetItemDataOperationResponse` |
| `changeItemStatistics` | `InventoryModels.ChangeItemStatisticsRequestData` | `changeItemStatisticsAsync(...)` | `InventoryResponseModels.ChangeItemStatisticsOperationResponse` |
| `setOwner` | `InventoryModels.SetOwnerRequestData` | `setOwnerAsync(...)` | `InventoryResponseModels.SetOwnerOperationResponse` |
| `setRemoveStatus` | `InventoryModels.SetRemoveStatusRequestData` | `setRemoveStatusAsync(...)` | `InventoryResponseModels.SetRemoveStatusOperationResponse` |
| `setTag` | `InventoryModels.SetTagRequestData` | `setTagAsync(...)` | `InventoryResponseModels.SetTagOperationResponse` |
| `getCreateLeaderboard` | `InventoryModels.GetCreateLeaderboardRequestData` | `getCreateLeaderboardAsync(...)` | `InventoryResponseModels.GetCreateLeaderboardOperationResponse` |
| `getStatisticsLog` | `InventoryModels.GetStatisticsLogRequestData` | `getStatisticsLogAsync(...)` | `InventoryResponseModels.GetStatisticsLogOperationResponse` |


## Server methods (`GNNetwork.inventory.server.*`)

| Method | Request DTO | Async form | Response class |
|--------|-------------|------------|----------------|
| `addSegment` | `InventoryModels.ServerAddSegmentRequestData` | `addSegmentAsync(...)` | `InventoryResponseModels.AddSegmentOperationResponse` |
| `getAmount` | `InventoryModels.ServerGetAmountRequestData` | `getAmountAsync(...)` | `InventoryResponseModels.GetAmountOperationResponse` |
| `getAvatar` | `InventoryModels.ServerGetAvatarRequestData` | `getAvatarAsync(...)` | `InventoryResponseModels.GetAvatarOperationResponse` |
| `getCatalogId` | `InventoryModels.ServerGetCatalogIdRequestData` | `getCatalogIdAsync(...)` | `InventoryResponseModels.GetCatalogIdOperationResponse` |
| `getClassId` | `InventoryModels.ServerGetClassIdRequestData` | `getClassIdAsync(...)` | `InventoryResponseModels.GetClassIdOperationResponse` |
| `getCustomData` | `InventoryModels.ServerGetCustomDataRequestData` | `getCustomDataAsync(...)` | `InventoryResponseModels.GetCustomDataOperationResponse` |
| `getDisplayName` | `InventoryModels.ServerGetDisplayNameRequestData` | `getDisplayNameAsync(...)` | `InventoryResponseModels.GetDisplayNameOperationResponse` |
| `getItemData` | `InventoryModels.ServerGetItemDataRequestData` | `getItemDataAsync(...)` | `InventoryResponseModels.GetItemDataOperationResponse` |
| `getItemInformation` | `InventoryModels.ServerGetItemInformationRequestData` | `getItemInformationAsync(...)` | `InventoryResponseModels.GetItemInformationOperationResponse` |
| `getItemStatistics` | `InventoryModels.ServerGetItemStatisticsRequestData` | `getItemStatisticsAsync(...)` | `InventoryResponseModels.GetItemStatisticsOperationResponse` |
| `getItemsWithDisplayName` | `InventoryModels.ServerGetItemsWithDisplayNameRequestData` | `getItemsWithDisplayNameAsync(...)` | `InventoryResponseModels.GetItemsWithDisplayNameOperationResponse` |
| `getItemsWithSegment` | `InventoryModels.ServerGetItemsWithSegmentRequestData` | `getItemsWithSegmentAsync(...)` | `InventoryResponseModels.GetItemsWithSegmentOperationResponse` |
| `getItemsWithTag` | `InventoryModels.ServerGetItemsWithTagRequestData` | `getItemsWithTagAsync(...)` | `InventoryResponseModels.GetItemsWithTagOperationResponse` |
| `getItemType` | `InventoryModels.ServerGetItemTypeRequestData` | `getItemTypeAsync(...)` | `InventoryResponseModels.GetItemTypeOperationResponse` |
| `getOwner` | `InventoryModels.ServerGetOwnerRequestData` | `getOwnerAsync(...)` | `InventoryResponseModels.GetOwnerOperationResponse` |
| `getRemoveStatus` | `InventoryModels.ServerGetRemoveStatusRequestData` | `getRemoveStatusAsync(...)` | `InventoryResponseModels.GetRemoveStatusOperationResponse` |
| `getSegment` | `InventoryModels.ServerGetSegmentRequestData` | `getSegmentAsync(...)` | `InventoryResponseModels.GetSegmentOperationResponse` |
| `getStatisticsLeaderboardAroundItem` | `InventoryModels.ServerGetStatisticsLeaderboardAroundItemRequestData` | `getStatisticsLeaderboardAroundItemAsync(...)` | `InventoryResponseModels.GetStatisticsLeaderboardAroundItemOperationResponse` |
| `getStatisticsLeaderboard` | `InventoryModels.ServerGetStatisticsLeaderboardRequestData` | `getStatisticsLeaderboardAsync(...)` | `InventoryResponseModels.GetStatisticsLeaderboardOperationResponse` |
| `getTag` | `InventoryModels.ServerGetTagRequestData` | `getTagAsync(...)` | `InventoryResponseModels.GetTagOperationResponse` |
| `getTsCreate` | `InventoryModels.ServerGetTsCreateRequestData` | `getTsCreateAsync(...)` | `InventoryResponseModels.GetTsCreateOperationResponse` |
| `removeSegment` | `InventoryModels.ServerRemoveSegmentRequestData` | `removeSegmentAsync(...)` | `InventoryResponseModels.RemoveSegmentOperationResponse` |
| `removeTag` | `InventoryModels.ServerRemoveTagRequestData` | `removeTagAsync(...)` | `InventoryResponseModels.RemoveTagOperationResponse` |
| `setAmount` | `InventoryModels.ServerSetAmountRequestData` | `setAmountAsync(...)` | `InventoryResponseModels.SetAmountOperationResponse` |
| `setAvatar` | `InventoryModels.ServerSetAvatarRequestData` | `setAvatarAsync(...)` | `InventoryResponseModels.SetAvatarOperationResponse` |
| `setCustomData` | `InventoryModels.ServerSetCustomDataRequestData` | `setCustomDataAsync(...)` | `InventoryResponseModels.SetCustomDataOperationResponse` |
| `setDisplayName` | `InventoryModels.ServerSetDisplayNameRequestData` | `setDisplayNameAsync(...)` | `InventoryResponseModels.SetDisplayNameOperationResponse` |
| `setItemData` | `InventoryModels.ServerSetItemDataRequestData` | `setItemDataAsync(...)` | `InventoryResponseModels.SetItemDataOperationResponse` |
| `changeItemStatistics` | `InventoryModels.ServerChangeItemStatisticsRequestData` | `changeItemStatisticsAsync(...)` | `InventoryResponseModels.ChangeItemStatisticsOperationResponse` |
| `setOwner` | `InventoryModels.ServerSetOwnerRequestData` | `setOwnerAsync(...)` | `InventoryResponseModels.SetOwnerOperationResponse` |
| `setRemoveStatus` | `InventoryModels.ServerSetRemoveStatusRequestData` | `setRemoveStatusAsync(...)` | `InventoryResponseModels.SetRemoveStatusOperationResponse` |
| `setTag` | `InventoryModels.ServerSetTagRequestData` | `setTagAsync(...)` | `InventoryResponseModels.SetTagOperationResponse` |
| `getCreateLeaderboard` | `InventoryModels.ServerGetCreateLeaderboardRequestData` | `getCreateLeaderboardAsync(...)` | `InventoryResponseModels.GetCreateLeaderboardOperationResponse` |
| `getStatisticsLog` | `InventoryModels.ServerGetStatisticsLogRequestData` | `getStatisticsLogAsync(...)` | `InventoryResponseModels.GetStatisticsLogOperationResponse` |


## Admin methods (`GNNetwork.inventory.admin.*`)

| Method | Request DTO | Async form | Response class |
|--------|-------------|------------|----------------|
| `addSegment` | `InventoryModels.AdminAddSegmentRequestData` | `addSegmentAsync(...)` | `InventoryResponseModels.AddSegmentOperationResponse` |
| `getAmount` | `InventoryModels.AdminGetAmountRequestData` | `getAmountAsync(...)` | `InventoryResponseModels.GetAmountOperationResponse` |
| `getAvatar` | `InventoryModels.AdminGetAvatarRequestData` | `getAvatarAsync(...)` | `InventoryResponseModels.GetAvatarOperationResponse` |
| `getCatalogId` | `InventoryModels.AdminGetCatalogIdRequestData` | `getCatalogIdAsync(...)` | `InventoryResponseModels.GetCatalogIdOperationResponse` |
| `getClassId` | `InventoryModels.AdminGetClassIdRequestData` | `getClassIdAsync(...)` | `InventoryResponseModels.GetClassIdOperationResponse` |
| `getCustomData` | `InventoryModels.AdminGetCustomDataRequestData` | `getCustomDataAsync(...)` | `InventoryResponseModels.GetCustomDataOperationResponse` |
| `getDisplayName` | `InventoryModels.AdminGetDisplayNameRequestData` | `getDisplayNameAsync(...)` | `InventoryResponseModels.GetDisplayNameOperationResponse` |
| `getItemData` | `InventoryModels.AdminGetItemDataRequestData` | `getItemDataAsync(...)` | `InventoryResponseModels.GetItemDataOperationResponse` |
| `getItemInformation` | `InventoryModels.AdminGetItemInformationRequestData` | `getItemInformationAsync(...)` | `InventoryResponseModels.GetItemInformationOperationResponse` |
| `getItemStatistics` | `InventoryModels.AdminGetItemStatisticsRequestData` | `getItemStatisticsAsync(...)` | `InventoryResponseModels.GetItemStatisticsOperationResponse` |
| `getItemsWithDisplayName` | `InventoryModels.AdminGetItemsWithDisplayNameRequestData` | `getItemsWithDisplayNameAsync(...)` | `InventoryResponseModels.GetItemsWithDisplayNameOperationResponse` |
| `getItemsWithSegment` | `InventoryModels.AdminGetItemsWithSegmentRequestData` | `getItemsWithSegmentAsync(...)` | `InventoryResponseModels.GetItemsWithSegmentOperationResponse` |
| `getItemsWithTag` | `InventoryModels.AdminGetItemsWithTagRequestData` | `getItemsWithTagAsync(...)` | `InventoryResponseModels.GetItemsWithTagOperationResponse` |
| `getItemType` | `InventoryModels.AdminGetItemTypeRequestData` | `getItemTypeAsync(...)` | `InventoryResponseModels.GetItemTypeOperationResponse` |
| `getOwner` | `InventoryModels.AdminGetOwnerRequestData` | `getOwnerAsync(...)` | `InventoryResponseModels.GetOwnerOperationResponse` |
| `getRemoveStatus` | `InventoryModels.AdminGetRemoveStatusRequestData` | `getRemoveStatusAsync(...)` | `InventoryResponseModels.GetRemoveStatusOperationResponse` |
| `getSegment` | `InventoryModels.AdminGetSegmentRequestData` | `getSegmentAsync(...)` | `InventoryResponseModels.GetSegmentOperationResponse` |
| `getStatisticsLeaderboardAroundItem` | `InventoryModels.AdminGetStatisticsLeaderboardAroundItemRequestData` | `getStatisticsLeaderboardAroundItemAsync(...)` | `InventoryResponseModels.GetStatisticsLeaderboardAroundItemOperationResponse` |
| `getStatisticsLeaderboard` | `InventoryModels.AdminGetStatisticsLeaderboardRequestData` | `getStatisticsLeaderboardAsync(...)` | `InventoryResponseModels.GetStatisticsLeaderboardOperationResponse` |
| `getTag` | `InventoryModels.AdminGetTagRequestData` | `getTagAsync(...)` | `InventoryResponseModels.GetTagOperationResponse` |
| `getTsCreate` | `InventoryModels.AdminGetTsCreateRequestData` | `getTsCreateAsync(...)` | `InventoryResponseModels.GetTsCreateOperationResponse` |
| `removeSegment` | `InventoryModels.AdminRemoveSegmentRequestData` | `removeSegmentAsync(...)` | `InventoryResponseModels.RemoveSegmentOperationResponse` |
| `removeTag` | `InventoryModels.AdminRemoveTagRequestData` | `removeTagAsync(...)` | `InventoryResponseModels.RemoveTagOperationResponse` |
| `setAmount` | `InventoryModels.AdminSetAmountRequestData` | `setAmountAsync(...)` | `InventoryResponseModels.SetAmountOperationResponse` |
| `setAvatar` | `InventoryModels.AdminSetAvatarRequestData` | `setAvatarAsync(...)` | `InventoryResponseModels.SetAvatarOperationResponse` |
| `setCustomData` | `InventoryModels.AdminSetCustomDataRequestData` | `setCustomDataAsync(...)` | `InventoryResponseModels.SetCustomDataOperationResponse` |
| `setDisplayName` | `InventoryModels.AdminSetDisplayNameRequestData` | `setDisplayNameAsync(...)` | `InventoryResponseModels.SetDisplayNameOperationResponse` |
| `setItemData` | `InventoryModels.AdminSetItemDataRequestData` | `setItemDataAsync(...)` | `InventoryResponseModels.SetItemDataOperationResponse` |
| `changeItemStatistics` | `InventoryModels.AdminChangeItemStatisticsRequestData` | `changeItemStatisticsAsync(...)` | `InventoryResponseModels.ChangeItemStatisticsOperationResponse` |
| `setOwner` | `InventoryModels.AdminSetOwnerRequestData` | `setOwnerAsync(...)` | `InventoryResponseModels.SetOwnerOperationResponse` |
| `setRemoveStatus` | `InventoryModels.AdminSetRemoveStatusRequestData` | `setRemoveStatusAsync(...)` | `InventoryResponseModels.SetRemoveStatusOperationResponse` |
| `setTag` | `InventoryModels.AdminSetTagRequestData` | `setTagAsync(...)` | `InventoryResponseModels.SetTagOperationResponse` |
| `getCreateLeaderboard` | `InventoryModels.AdminGetCreateLeaderboardRequestData` | `getCreateLeaderboardAsync(...)` | `InventoryResponseModels.GetCreateLeaderboardOperationResponse` |
| `getStatisticsLog` | `InventoryModels.AdminGetStatisticsLogRequestData` | `getStatisticsLogAsync(...)` | `InventoryResponseModels.GetStatisticsLogOperationResponse` |


## Ví dụ tối thiểu

```ts
import { GNNetwork, ReturnCode, ErrorCode } from "@xmobitea/gn-typescript-client";

const res = await GNNetwork.inventory.addSegmentAsync({ /* InventoryModels.AddSegmentRequestData */ } as any);
if (res.returnCode !== ReturnCode.Ok) return;
if (res.errorCode !== ErrorCode.Ok) return;
// res.responseData có typed payload
```
