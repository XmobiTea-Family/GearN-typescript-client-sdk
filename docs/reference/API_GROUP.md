# API Reference: GroupApi

Group metadata, member roster, message stream, group-level currency/inventory/statistics.

Domain guide: [guides/GROUP.md](../guides/GROUP.md). DTO shapes: [DTO_INDEX.md](DTO_INDEX.md#group).

## Namespaces

- `GNNetwork.group` — `RequestRole.Client`
- `GNNetwork.group.server` — `RequestRole.Server`
- `GNNetwork.group.admin` — `RequestRole.Admin`

## Convention

Mỗi method dưới đây có 2 form — callback và `*Async()` Promise. Ưu tiên `*Async()`.

```ts
// Callback
GNNetwork.group.<method>(requestData, onResponse?, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?);

// Async
const res = await GNNetwork.group.<method>Async(requestData, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?);
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


## Client methods (`GNNetwork.group.*`)

| Method | Request DTO | Async form | Response class |
|--------|-------------|------------|----------------|
| `addMember` | `GroupModels.AddMemberRequestData` | `addMemberAsync(...)` | `GroupResponseModels.AddMemberOperationResponse` |
| `addSegment` | `GroupModels.AddSegmentRequestData` | `addSegmentAsync(...)` | `GroupResponseModels.AddSegmentOperationResponse` |
| `getAvatar` | `GroupModels.GetAvatarRequestData` | `getAvatarAsync(...)` | `GroupResponseModels.GetAvatarOperationResponse` |
| `getCatalogId` | `GroupModels.GetCatalogIdRequestData` | `getCatalogIdAsync(...)` | `GroupResponseModels.GetCatalogIdOperationResponse` |
| `getCustomData` | `GroupModels.GetCustomDataRequestData` | `getCustomDataAsync(...)` | `GroupResponseModels.GetCustomDataOperationResponse` |
| `getDisplayName` | `GroupModels.GetDisplayNameRequestData` | `getDisplayNameAsync(...)` | `GroupResponseModels.GetDisplayNameOperationResponse` |
| `getGroupCurrency` | `GroupModels.GetGroupCurrencyRequestData` | `getGroupCurrencyAsync(...)` | `GroupResponseModels.GetGroupCurrencyOperationResponse` |
| `getGroupData` | `GroupModels.GetGroupDataRequestData` | `getGroupDataAsync(...)` | `GroupResponseModels.GetGroupDataOperationResponse` |
| `getGroupInformation` | `GroupModels.GetGroupInformationRequestData` | `getGroupInformationAsync(...)` | `GroupResponseModels.GetGroupInformationOperationResponse` |
| `getGroupInventory` | `GroupModels.GetGroupInventoryRequestData` | `getGroupInventoryAsync(...)` | `GroupResponseModels.GetGroupInventoryOperationResponse` |
| `getGroupMessage` | `GroupModels.GetGroupMessageRequestData` | `getGroupMessageAsync(...)` | `GroupResponseModels.GetGroupMessageOperationResponse` |
| `getGroupStatistics` | `GroupModels.GetGroupStatisticsRequestData` | `getGroupStatisticsAsync(...)` | `GroupResponseModels.GetGroupStatisticsOperationResponse` |
| `getGroupsWithDisplayName` | `GroupModels.GetGroupsWithDisplayNameRequestData` | `getGroupsWithDisplayNameAsync(...)` | `GroupResponseModels.GetGroupsWithDisplayNameOperationResponse` |
| `getGroupsWithSegment` | `GroupModels.GetGroupsWithSegmentRequestData` | `getGroupsWithSegmentAsync(...)` | `GroupResponseModels.GetGroupsWithSegmentOperationResponse` |
| `getGroupsWithTag` | `GroupModels.GetGroupsWithTagRequestData` | `getGroupsWithTagAsync(...)` | `GroupResponseModels.GetGroupsWithTagOperationResponse` |
| `getMembers` | `GroupModels.GetMembersRequestData` | `getMembersAsync(...)` | `GroupResponseModels.GetMembersOperationResponse` |
| `getRemoveStatus` | `GroupModels.GetRemoveStatusRequestData` | `getRemoveStatusAsync(...)` | `GroupResponseModels.GetRemoveStatusOperationResponse` |
| `getSegment` | `GroupModels.GetSegmentRequestData` | `getSegmentAsync(...)` | `GroupResponseModels.GetSegmentOperationResponse` |
| `getStatisticsLeaderboardAroundGroup` | `GroupModels.GetStatisticsLeaderboardAroundGroupRequestData` | `getStatisticsLeaderboardAroundGroupAsync(...)` | `GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse` |
| `getStatisticsLeaderboard` | `GroupModels.GetStatisticsLeaderboardRequestData` | `getStatisticsLeaderboardAsync(...)` | `GroupResponseModels.GetStatisticsLeaderboardOperationResponse` |
| `getTag` | `GroupModels.GetTagRequestData` | `getTagAsync(...)` | `GroupResponseModels.GetTagOperationResponse` |
| `getTsCreate` | `GroupModels.GetTsCreateRequestData` | `getTsCreateAsync(...)` | `GroupResponseModels.GetTsCreateOperationResponse` |
| `createGroupItem` | `GroupModels.CreateGroupItemRequestData` | `createGroupItemAsync(...)` | `GroupResponseModels.CreateGroupItemOperationResponse` |
| `removeGroupItem` | `GroupModels.RemoveGroupItemRequestData` | `removeGroupItemAsync(...)` | `GroupResponseModels.RemoveGroupItemOperationResponse` |
| `removeMember` | `GroupModels.RemoveMemberRequestData` | `removeMemberAsync(...)` | `GroupResponseModels.RemoveMemberOperationResponse` |
| `removeSegment` | `GroupModels.RemoveSegmentRequestData` | `removeSegmentAsync(...)` | `GroupResponseModels.RemoveSegmentOperationResponse` |
| `removeTag` | `GroupModels.RemoveTagRequestData` | `removeTagAsync(...)` | `GroupResponseModels.RemoveTagOperationResponse` |
| `sendGroupMessage` | `GroupModels.SendGroupMessageRequestData` | `sendGroupMessageAsync(...)` | `GroupResponseModels.SendGroupMessageOperationResponse` |
| `setAvatar` | `GroupModels.SetAvatarRequestData` | `setAvatarAsync(...)` | `GroupResponseModels.SetAvatarOperationResponse` |
| `setCustomData` | `GroupModels.SetCustomDataRequestData` | `setCustomDataAsync(...)` | `GroupResponseModels.SetCustomDataOperationResponse` |
| `setDisplayName` | `GroupModels.SetDisplayNameRequestData` | `setDisplayNameAsync(...)` | `GroupResponseModels.SetDisplayNameOperationResponse` |
| `changeGroupCurrency` | `GroupModels.ChangeGroupCurrencyRequestData` | `changeGroupCurrencyAsync(...)` | `GroupResponseModels.ChangeGroupCurrencyOperationResponse` |
| `setGroupData` | `GroupModels.SetGroupDataRequestData` | `setGroupDataAsync(...)` | `GroupResponseModels.SetGroupDataOperationResponse` |
| `changeGroupStatistics` | `GroupModels.ChangeGroupStatisticsRequestData` | `changeGroupStatisticsAsync(...)` | `GroupResponseModels.ChangeGroupStatisticsOperationResponse` |
| `setRemoveStatus` | `GroupModels.SetRemoveStatusRequestData` | `setRemoveStatusAsync(...)` | `GroupResponseModels.SetRemoveStatusOperationResponse` |
| `setTag` | `GroupModels.SetTagRequestData` | `setTagAsync(...)` | `GroupResponseModels.SetTagOperationResponse` |
| `getCurrencyLeaderboard` | `GroupModels.GetCurrencyLeaderboardRequestData` | `getCurrencyLeaderboardAsync(...)` | `GroupResponseModels.GetCurrencyLeaderboardOperationResponse` |
| `getCreateLeaderboard` | `GroupModels.GetCreateLeaderboardRequestData` | `getCreateLeaderboardAsync(...)` | `GroupResponseModels.GetCreateLeaderboardOperationResponse` |
| `getStatisticsLog` | `GroupModels.GetStatisticsLogRequestData` | `getStatisticsLogAsync(...)` | `GroupResponseModels.GetStatisticsLogOperationResponse` |
| `getCurrencyLog` | `GroupModels.GetCurrencyLogRequestData` | `getCurrencyLogAsync(...)` | `GroupResponseModels.GetCurrencyLogOperationResponse` |


## Server methods (`GNNetwork.group.server.*`)

| Method | Request DTO | Async form | Response class |
|--------|-------------|------------|----------------|
| `addMember` | `GroupModels.ServerAddMemberRequestData` | `addMemberAsync(...)` | `GroupResponseModels.AddMemberOperationResponse` |
| `addSegment` | `GroupModels.ServerAddSegmentRequestData` | `addSegmentAsync(...)` | `GroupResponseModels.AddSegmentOperationResponse` |
| `getAvatar` | `GroupModels.ServerGetAvatarRequestData` | `getAvatarAsync(...)` | `GroupResponseModels.GetAvatarOperationResponse` |
| `getCatalogId` | `GroupModels.ServerGetCatalogIdRequestData` | `getCatalogIdAsync(...)` | `GroupResponseModels.GetCatalogIdOperationResponse` |
| `getCustomData` | `GroupModels.ServerGetCustomDataRequestData` | `getCustomDataAsync(...)` | `GroupResponseModels.GetCustomDataOperationResponse` |
| `getDisplayName` | `GroupModels.ServerGetDisplayNameRequestData` | `getDisplayNameAsync(...)` | `GroupResponseModels.GetDisplayNameOperationResponse` |
| `getGroupCurrency` | `GroupModels.ServerGetGroupCurrencyRequestData` | `getGroupCurrencyAsync(...)` | `GroupResponseModels.GetGroupCurrencyOperationResponse` |
| `getGroupData` | `GroupModels.ServerGetGroupDataRequestData` | `getGroupDataAsync(...)` | `GroupResponseModels.GetGroupDataOperationResponse` |
| `getGroupInformation` | `GroupModels.ServerGetGroupInformationRequestData` | `getGroupInformationAsync(...)` | `GroupResponseModels.GetGroupInformationOperationResponse` |
| `getGroupInventory` | `GroupModels.ServerGetGroupInventoryRequestData` | `getGroupInventoryAsync(...)` | `GroupResponseModels.GetGroupInventoryOperationResponse` |
| `getGroupMessage` | `GroupModels.ServerGetGroupMessageRequestData` | `getGroupMessageAsync(...)` | `GroupResponseModels.GetGroupMessageOperationResponse` |
| `getGroupStatistics` | `GroupModels.ServerGetGroupStatisticsRequestData` | `getGroupStatisticsAsync(...)` | `GroupResponseModels.GetGroupStatisticsOperationResponse` |
| `getGroupsWithDisplayName` | `GroupModels.ServerGetGroupsWithDisplayNameRequestData` | `getGroupsWithDisplayNameAsync(...)` | `GroupResponseModels.GetGroupsWithDisplayNameOperationResponse` |
| `getGroupsWithSegment` | `GroupModels.ServerGetGroupsWithSegmentRequestData` | `getGroupsWithSegmentAsync(...)` | `GroupResponseModels.GetGroupsWithSegmentOperationResponse` |
| `getGroupsWithTag` | `GroupModels.ServerGetGroupsWithTagRequestData` | `getGroupsWithTagAsync(...)` | `GroupResponseModels.GetGroupsWithTagOperationResponse` |
| `getMembers` | `GroupModels.ServerGetMembersRequestData` | `getMembersAsync(...)` | `GroupResponseModels.GetMembersOperationResponse` |
| `getRemoveStatus` | `GroupModels.ServerGetRemoveStatusRequestData` | `getRemoveStatusAsync(...)` | `GroupResponseModels.GetRemoveStatusOperationResponse` |
| `getSegment` | `GroupModels.ServerGetSegmentRequestData` | `getSegmentAsync(...)` | `GroupResponseModels.GetSegmentOperationResponse` |
| `getStatisticsLeaderboardAroundGroup` | `GroupModels.ServerGetStatisticsLeaderboardAroundGroupRequestData` | `getStatisticsLeaderboardAroundGroupAsync(...)` | `GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse` |
| `getStatisticsLeaderboard` | `GroupModels.ServerGetStatisticsLeaderboardRequestData` | `getStatisticsLeaderboardAsync(...)` | `GroupResponseModels.GetStatisticsLeaderboardOperationResponse` |
| `getTag` | `GroupModels.ServerGetTagRequestData` | `getTagAsync(...)` | `GroupResponseModels.GetTagOperationResponse` |
| `getTsCreate` | `GroupModels.ServerGetTsCreateRequestData` | `getTsCreateAsync(...)` | `GroupResponseModels.GetTsCreateOperationResponse` |
| `createGroupItem` | `GroupModels.ServerCreateGroupItemRequestData` | `createGroupItemAsync(...)` | `GroupResponseModels.CreateGroupItemOperationResponse` |
| `removeGroupItem` | `GroupModels.ServerRemoveGroupItemRequestData` | `removeGroupItemAsync(...)` | `GroupResponseModels.RemoveGroupItemOperationResponse` |
| `removeMember` | `GroupModels.ServerRemoveMemberRequestData` | `removeMemberAsync(...)` | `GroupResponseModels.RemoveMemberOperationResponse` |
| `removeSegment` | `GroupModels.ServerRemoveSegmentRequestData` | `removeSegmentAsync(...)` | `GroupResponseModels.RemoveSegmentOperationResponse` |
| `removeTag` | `GroupModels.ServerRemoveTagRequestData` | `removeTagAsync(...)` | `GroupResponseModels.RemoveTagOperationResponse` |
| `sendGroupMessage` | `GroupModels.ServerSendGroupMessageRequestData` | `sendGroupMessageAsync(...)` | `GroupResponseModels.SendGroupMessageOperationResponse` |
| `setAvatar` | `GroupModels.ServerSetAvatarRequestData` | `setAvatarAsync(...)` | `GroupResponseModels.SetAvatarOperationResponse` |
| `setCustomData` | `GroupModels.ServerSetCustomDataRequestData` | `setCustomDataAsync(...)` | `GroupResponseModels.SetCustomDataOperationResponse` |
| `setDisplayName` | `GroupModels.ServerSetDisplayNameRequestData` | `setDisplayNameAsync(...)` | `GroupResponseModels.SetDisplayNameOperationResponse` |
| `changeGroupCurrency` | `GroupModels.ServerChangeGroupCurrencyRequestData` | `changeGroupCurrencyAsync(...)` | `GroupResponseModels.ChangeGroupCurrencyOperationResponse` |
| `setGroupData` | `GroupModels.ServerSetGroupDataRequestData` | `setGroupDataAsync(...)` | `GroupResponseModels.SetGroupDataOperationResponse` |
| `changeGroupStatistics` | `GroupModels.ServerChangeGroupStatisticsRequestData` | `changeGroupStatisticsAsync(...)` | `GroupResponseModels.ChangeGroupStatisticsOperationResponse` |
| `setRemoveStatus` | `GroupModels.ServerSetRemoveStatusRequestData` | `setRemoveStatusAsync(...)` | `GroupResponseModels.SetRemoveStatusOperationResponse` |
| `setTag` | `GroupModels.ServerSetTagRequestData` | `setTagAsync(...)` | `GroupResponseModels.SetTagOperationResponse` |
| `getCurrencyLeaderboard` | `GroupModels.ServerGetCurrencyLeaderboardRequestData` | `getCurrencyLeaderboardAsync(...)` | `GroupResponseModels.GetCurrencyLeaderboardOperationResponse` |
| `getCreateLeaderboard` | `GroupModels.ServerGetCreateLeaderboardRequestData` | `getCreateLeaderboardAsync(...)` | `GroupResponseModels.GetCreateLeaderboardOperationResponse` |
| `getStatisticsLog` | `GroupModels.ServerGetStatisticsLogRequestData` | `getStatisticsLogAsync(...)` | `GroupResponseModels.GetStatisticsLogOperationResponse` |
| `getCurrencyLog` | `GroupModels.ServerGetCurrencyLogRequestData` | `getCurrencyLogAsync(...)` | `GroupResponseModels.GetCurrencyLogOperationResponse` |


## Admin methods (`GNNetwork.group.admin.*`)

| Method | Request DTO | Async form | Response class |
|--------|-------------|------------|----------------|
| `addMember` | `GroupModels.AdminAddMemberRequestData` | `addMemberAsync(...)` | `GroupResponseModels.AddMemberOperationResponse` |
| `addSegment` | `GroupModels.AdminAddSegmentRequestData` | `addSegmentAsync(...)` | `GroupResponseModels.AddSegmentOperationResponse` |
| `getAvatar` | `GroupModels.AdminGetAvatarRequestData` | `getAvatarAsync(...)` | `GroupResponseModels.GetAvatarOperationResponse` |
| `getCatalogId` | `GroupModels.AdminGetCatalogIdRequestData` | `getCatalogIdAsync(...)` | `GroupResponseModels.GetCatalogIdOperationResponse` |
| `getCustomData` | `GroupModels.AdminGetCustomDataRequestData` | `getCustomDataAsync(...)` | `GroupResponseModels.GetCustomDataOperationResponse` |
| `getDisplayName` | `GroupModels.AdminGetDisplayNameRequestData` | `getDisplayNameAsync(...)` | `GroupResponseModels.GetDisplayNameOperationResponse` |
| `getGroupCurrency` | `GroupModels.AdminGetGroupCurrencyRequestData` | `getGroupCurrencyAsync(...)` | `GroupResponseModels.GetGroupCurrencyOperationResponse` |
| `getGroupData` | `GroupModels.AdminGetGroupDataRequestData` | `getGroupDataAsync(...)` | `GroupResponseModels.GetGroupDataOperationResponse` |
| `getGroupInformation` | `GroupModels.AdminGetGroupInformationRequestData` | `getGroupInformationAsync(...)` | `GroupResponseModels.GetGroupInformationOperationResponse` |
| `getGroupInventory` | `GroupModels.AdminGetGroupInventoryRequestData` | `getGroupInventoryAsync(...)` | `GroupResponseModels.GetGroupInventoryOperationResponse` |
| `getGroupMessage` | `GroupModels.AdminGetGroupMessageRequestData` | `getGroupMessageAsync(...)` | `GroupResponseModels.GetGroupMessageOperationResponse` |
| `getGroupStatistics` | `GroupModels.AdminGetGroupStatisticsRequestData` | `getGroupStatisticsAsync(...)` | `GroupResponseModels.GetGroupStatisticsOperationResponse` |
| `getGroupsWithDisplayName` | `GroupModels.AdminGetGroupsWithDisplayNameRequestData` | `getGroupsWithDisplayNameAsync(...)` | `GroupResponseModels.GetGroupsWithDisplayNameOperationResponse` |
| `getGroupsWithSegment` | `GroupModels.AdminGetGroupsWithSegmentRequestData` | `getGroupsWithSegmentAsync(...)` | `GroupResponseModels.GetGroupsWithSegmentOperationResponse` |
| `getGroupsWithTag` | `GroupModels.AdminGetGroupsWithTagRequestData` | `getGroupsWithTagAsync(...)` | `GroupResponseModels.GetGroupsWithTagOperationResponse` |
| `getMembers` | `GroupModels.AdminGetMembersRequestData` | `getMembersAsync(...)` | `GroupResponseModels.GetMembersOperationResponse` |
| `getRemoveStatus` | `GroupModels.AdminGetRemoveStatusRequestData` | `getRemoveStatusAsync(...)` | `GroupResponseModels.GetRemoveStatusOperationResponse` |
| `getSegment` | `GroupModels.AdminGetSegmentRequestData` | `getSegmentAsync(...)` | `GroupResponseModels.GetSegmentOperationResponse` |
| `getStatisticsLeaderboardAroundGroup` | `GroupModels.AdminGetStatisticsLeaderboardAroundGroupRequestData` | `getStatisticsLeaderboardAroundGroupAsync(...)` | `GroupResponseModels.GetStatisticsLeaderboardAroundGroupOperationResponse` |
| `getStatisticsLeaderboard` | `GroupModels.AdminGetStatisticsLeaderboardRequestData` | `getStatisticsLeaderboardAsync(...)` | `GroupResponseModels.GetStatisticsLeaderboardOperationResponse` |
| `getTag` | `GroupModels.AdminGetTagRequestData` | `getTagAsync(...)` | `GroupResponseModels.GetTagOperationResponse` |
| `getTsCreate` | `GroupModels.AdminGetTsCreateRequestData` | `getTsCreateAsync(...)` | `GroupResponseModels.GetTsCreateOperationResponse` |
| `createGroupItem` | `GroupModels.AdminCreateGroupItemRequestData` | `createGroupItemAsync(...)` | `GroupResponseModels.CreateGroupItemOperationResponse` |
| `removeGroupItem` | `GroupModels.AdminRemoveGroupItemRequestData` | `removeGroupItemAsync(...)` | `GroupResponseModels.RemoveGroupItemOperationResponse` |
| `removeMember` | `GroupModels.AdminRemoveMemberRequestData` | `removeMemberAsync(...)` | `GroupResponseModels.RemoveMemberOperationResponse` |
| `removeSegment` | `GroupModels.AdminRemoveSegmentRequestData` | `removeSegmentAsync(...)` | `GroupResponseModels.RemoveSegmentOperationResponse` |
| `removeTag` | `GroupModels.AdminRemoveTagRequestData` | `removeTagAsync(...)` | `GroupResponseModels.RemoveTagOperationResponse` |
| `sendGroupMessage` | `GroupModels.AdminSendGroupMessageRequestData` | `sendGroupMessageAsync(...)` | `GroupResponseModels.SendGroupMessageOperationResponse` |
| `setAvatar` | `GroupModels.AdminSetAvatarRequestData` | `setAvatarAsync(...)` | `GroupResponseModels.SetAvatarOperationResponse` |
| `setCustomData` | `GroupModels.AdminSetCustomDataRequestData` | `setCustomDataAsync(...)` | `GroupResponseModels.SetCustomDataOperationResponse` |
| `setDisplayName` | `GroupModels.AdminSetDisplayNameRequestData` | `setDisplayNameAsync(...)` | `GroupResponseModels.SetDisplayNameOperationResponse` |
| `changeGroupCurrency` | `GroupModels.AdminChangeGroupCurrencyRequestData` | `changeGroupCurrencyAsync(...)` | `GroupResponseModels.ChangeGroupCurrencyOperationResponse` |
| `setGroupData` | `GroupModels.AdminSetGroupDataRequestData` | `setGroupDataAsync(...)` | `GroupResponseModels.SetGroupDataOperationResponse` |
| `changeGroupStatistics` | `GroupModels.AdminChangeGroupStatisticsRequestData` | `changeGroupStatisticsAsync(...)` | `GroupResponseModels.ChangeGroupStatisticsOperationResponse` |
| `setRemoveStatus` | `GroupModels.AdminSetRemoveStatusRequestData` | `setRemoveStatusAsync(...)` | `GroupResponseModels.SetRemoveStatusOperationResponse` |
| `setTag` | `GroupModels.AdminSetTagRequestData` | `setTagAsync(...)` | `GroupResponseModels.SetTagOperationResponse` |
| `getCurrencyLeaderboard` | `GroupModels.AdminGetCurrencyLeaderboardRequestData` | `getCurrencyLeaderboardAsync(...)` | `GroupResponseModels.GetCurrencyLeaderboardOperationResponse` |
| `getCreateLeaderboard` | `GroupModels.AdminGetCreateLeaderboardRequestData` | `getCreateLeaderboardAsync(...)` | `GroupResponseModels.GetCreateLeaderboardOperationResponse` |
| `getStatisticsLog` | `GroupModels.AdminGetStatisticsLogRequestData` | `getStatisticsLogAsync(...)` | `GroupResponseModels.GetStatisticsLogOperationResponse` |
| `getCurrencyLog` | `GroupModels.AdminGetCurrencyLogRequestData` | `getCurrencyLogAsync(...)` | `GroupResponseModels.GetCurrencyLogOperationResponse` |


## Ví dụ tối thiểu

```ts
import { GNNetwork, ReturnCode, ErrorCode } from "@xmobitea/gn-typescript-client";

const res = await GNNetwork.group.addMemberAsync({ /* GroupModels.AddMemberRequestData */ } as any);
if (res.returnCode !== ReturnCode.Ok) return;
if (res.errorCode !== ErrorCode.Ok) return;
// res.responseData có typed payload
```
