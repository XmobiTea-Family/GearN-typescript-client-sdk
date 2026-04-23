# API Reference: CharacterPlayerApi

Character-level gameplay: profile, inventory relation, friend/group relation, statistics, currency, segments, tags.

Domain guide: [guides/CHARACTER_PLAYER.md](../guides/CHARACTER_PLAYER.md). DTO shapes: [DTO_INDEX.md](DTO_INDEX.md#character-player).

## Namespaces

- `GNNetwork.characterPlayer` — `RequestRole.Client`
- `GNNetwork.characterPlayer.server` — `RequestRole.Server`
- `GNNetwork.characterPlayer.admin` — `RequestRole.Admin`

## Convention

Mỗi method dưới đây có 2 form — callback và `*Async()` Promise. Ưu tiên `*Async()`.

```ts
// Callback
GNNetwork.characterPlayer.<method>(requestData, onResponse?, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?);

// Async
const res = await GNNetwork.characterPlayer.<method>Async(requestData, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?);
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


## Client methods (`GNNetwork.characterPlayer.*`)

| Method | Request DTO | Async form | Response class |
|--------|-------------|------------|----------------|
| `addPlayerFriend` | `CharacterPlayerModels.AddPlayerFriendRequestData` | `addPlayerFriendAsync(...)` | `CharacterPlayerResponseModels.AddPlayerFriendOperationResponse` |
| `addSegment` | `CharacterPlayerModels.AddSegmentRequestData` | `addSegmentAsync(...)` | `CharacterPlayerResponseModels.AddSegmentOperationResponse` |
| `getAvatar` | `CharacterPlayerModels.GetAvatarRequestData` | `getAvatarAsync(...)` | `CharacterPlayerResponseModels.GetAvatarOperationResponse` |
| `getCatalogId` | `CharacterPlayerModels.GetCatalogIdRequestData` | `getCatalogIdAsync(...)` | `CharacterPlayerResponseModels.GetCatalogIdOperationResponse` |
| `getCountryCode` | `CharacterPlayerModels.GetCountryCodeRequestData` | `getCountryCodeAsync(...)` | `CharacterPlayerResponseModels.GetCountryCodeOperationResponse` |
| `getCustomData` | `CharacterPlayerModels.GetCustomDataRequestData` | `getCustomDataAsync(...)` | `CharacterPlayerResponseModels.GetCustomDataOperationResponse` |
| `getDisplayName` | `CharacterPlayerModels.GetDisplayNameRequestData` | `getDisplayNameAsync(...)` | `CharacterPlayerResponseModels.GetDisplayNameOperationResponse` |
| `getFriendStatisticsLeaderboardAroundPlayer` | `CharacterPlayerModels.GetFriendStatisticsLeaderboardAroundPlayerRequestData` | `getFriendStatisticsLeaderboardAroundPlayerAsync(...)` | `CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse` |
| `getFriendStatisticsLeaderboard` | `CharacterPlayerModels.GetFriendStatisticsLeaderboardRequestData` | `getFriendStatisticsLeaderboardAsync(...)` | `CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse` |
| `getIpAddressCreate` | `CharacterPlayerModels.GetIpAddressCreateRequestData` | `getIpAddressCreateAsync(...)` | `CharacterPlayerResponseModels.GetIpAddressCreateOperationResponse` |
| `getOwner` | `CharacterPlayerModels.GetOwnerRequestData` | `getOwnerAsync(...)` | `CharacterPlayerResponseModels.GetOwnerOperationResponse` |
| `getPlayerBan` | `CharacterPlayerModels.GetPlayerBanRequestData` | `getPlayerBanAsync(...)` | `CharacterPlayerResponseModels.GetPlayerBanOperationResponse` |
| `getPlayerCurrency` | `CharacterPlayerModels.GetPlayerCurrencyRequestData` | `getPlayerCurrencyAsync(...)` | `CharacterPlayerResponseModels.GetPlayerCurrencyOperationResponse` |
| `getPlayerData` | `CharacterPlayerModels.GetPlayerDataRequestData` | `getPlayerDataAsync(...)` | `CharacterPlayerResponseModels.GetPlayerDataOperationResponse` |
| `getPlayerFriend` | `CharacterPlayerModels.GetPlayerFriendRequestData` | `getPlayerFriendAsync(...)` | `CharacterPlayerResponseModels.GetPlayerFriendOperationResponse` |
| `getPlayerGroup` | `CharacterPlayerModels.GetPlayerGroupRequestData` | `getPlayerGroupAsync(...)` | `CharacterPlayerResponseModels.GetPlayerGroupOperationResponse` |
| `getPlayerInformation` | `CharacterPlayerModels.GetPlayerInformationRequestData` | `getPlayerInformationAsync(...)` | `CharacterPlayerResponseModels.GetPlayerInformationOperationResponse` |
| `getPlayerInventory` | `CharacterPlayerModels.GetPlayerInventoryRequestData` | `getPlayerInventoryAsync(...)` | `CharacterPlayerResponseModels.GetPlayerInventoryOperationResponse` |
| `getPlayerStatistics` | `CharacterPlayerModels.GetPlayerStatisticsRequestData` | `getPlayerStatisticsAsync(...)` | `CharacterPlayerResponseModels.GetPlayerStatisticsOperationResponse` |
| `getPlayersWithDisplayName` | `CharacterPlayerModels.GetPlayersWithDisplayNameRequestData` | `getPlayersWithDisplayNameAsync(...)` | `CharacterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse` |
| `getPlayersWithSegment` | `CharacterPlayerModels.GetPlayersWithSegmentRequestData` | `getPlayersWithSegmentAsync(...)` | `CharacterPlayerResponseModels.GetPlayersWithSegmentOperationResponse` |
| `getPlayersWithTag` | `CharacterPlayerModels.GetPlayersWithTagRequestData` | `getPlayersWithTagAsync(...)` | `CharacterPlayerResponseModels.GetPlayersWithTagOperationResponse` |
| `getRemoveStatus` | `CharacterPlayerModels.GetRemoveStatusRequestData` | `getRemoveStatusAsync(...)` | `CharacterPlayerResponseModels.GetRemoveStatusOperationResponse` |
| `getSegment` | `CharacterPlayerModels.GetSegmentRequestData` | `getSegmentAsync(...)` | `CharacterPlayerResponseModels.GetSegmentOperationResponse` |
| `getStatisticsLeaderboardAroundPlayer` | `CharacterPlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData` | `getStatisticsLeaderboardAroundPlayerAsync(...)` | `CharacterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse` |
| `getStatisticsLeaderboard` | `CharacterPlayerModels.GetStatisticsLeaderboardRequestData` | `getStatisticsLeaderboardAsync(...)` | `CharacterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse` |
| `getTag` | `CharacterPlayerModels.GetTagRequestData` | `getTagAsync(...)` | `CharacterPlayerResponseModels.GetTagOperationResponse` |
| `getTsCreate` | `CharacterPlayerModels.GetTsCreateRequestData` | `getTsCreateAsync(...)` | `CharacterPlayerResponseModels.GetTsCreateOperationResponse` |
| `getTsLastLogin` | `CharacterPlayerModels.GetTsLastLoginRequestData` | `getTsLastLoginAsync(...)` | `CharacterPlayerResponseModels.GetTsLastLoginOperationResponse` |
| `createGroup` | `CharacterPlayerModels.CreateGroupRequestData` | `createGroupAsync(...)` | `CharacterPlayerResponseModels.CreateGroupOperationResponse` |
| `createPlayerItem` | `CharacterPlayerModels.CreatePlayerItemRequestData` | `createPlayerItemAsync(...)` | `CharacterPlayerResponseModels.CreatePlayerItemOperationResponse` |
| `joinGroup` | `CharacterPlayerModels.JoinGroupRequestData` | `joinGroupAsync(...)` | `CharacterPlayerResponseModels.JoinGroupOperationResponse` |
| `leaveGroup` | `CharacterPlayerModels.LeaveGroupRequestData` | `leaveGroupAsync(...)` | `CharacterPlayerResponseModels.LeaveGroupOperationResponse` |
| `removePlayerFriend` | `CharacterPlayerModels.RemovePlayerFriendRequestData` | `removePlayerFriendAsync(...)` | `CharacterPlayerResponseModels.RemovePlayerFriendOperationResponse` |
| `removePlayerItem` | `CharacterPlayerModels.RemovePlayerItemRequestData` | `removePlayerItemAsync(...)` | `CharacterPlayerResponseModels.RemovePlayerItemOperationResponse` |
| `removeSegment` | `CharacterPlayerModels.RemoveSegmentRequestData` | `removeSegmentAsync(...)` | `CharacterPlayerResponseModels.RemoveSegmentOperationResponse` |
| `removeTag` | `CharacterPlayerModels.RemoveTagRequestData` | `removeTagAsync(...)` | `CharacterPlayerResponseModels.RemoveTagOperationResponse` |
| `setAvatar` | `CharacterPlayerModels.SetAvatarRequestData` | `setAvatarAsync(...)` | `CharacterPlayerResponseModels.SetAvatarOperationResponse` |
| `setCountryCode` | `CharacterPlayerModels.SetCountryCodeRequestData` | `setCountryCodeAsync(...)` | `CharacterPlayerResponseModels.SetCountryCodeOperationResponse` |
| `setCustomData` | `CharacterPlayerModels.SetCustomDataRequestData` | `setCustomDataAsync(...)` | `CharacterPlayerResponseModels.SetCustomDataOperationResponse` |
| `setDisplayName` | `CharacterPlayerModels.SetDisplayNameRequestData` | `setDisplayNameAsync(...)` | `CharacterPlayerResponseModels.SetDisplayNameOperationResponse` |
| `setOwner` | `CharacterPlayerModels.SetOwnerRequestData` | `setOwnerAsync(...)` | `CharacterPlayerResponseModels.SetOwnerOperationResponse` |
| `setPlayerBan` | `CharacterPlayerModels.SetPlayerBanRequestData` | `setPlayerBanAsync(...)` | `CharacterPlayerResponseModels.SetPlayerBanOperationResponse` |
| `changePlayerCurrency` | `CharacterPlayerModels.ChangePlayerCurrencyRequestData` | `changePlayerCurrencyAsync(...)` | `CharacterPlayerResponseModels.ChangePlayerCurrencyOperationResponse` |
| `setPlayerData` | `CharacterPlayerModels.SetPlayerDataRequestData` | `setPlayerDataAsync(...)` | `CharacterPlayerResponseModels.SetPlayerDataOperationResponse` |
| `changePlayerStatistics` | `CharacterPlayerModels.ChangePlayerStatisticsRequestData` | `changePlayerStatisticsAsync(...)` | `CharacterPlayerResponseModels.ChangePlayerStatisticsOperationResponse` |
| `setRemoveStatus` | `CharacterPlayerModels.SetRemoveStatusRequestData` | `setRemoveStatusAsync(...)` | `CharacterPlayerResponseModels.SetRemoveStatusOperationResponse` |
| `setTag` | `CharacterPlayerModels.SetTagRequestData` | `setTagAsync(...)` | `CharacterPlayerResponseModels.SetTagOperationResponse` |
| `getCurrencyLeaderboard` | `CharacterPlayerModels.GetCurrencyLeaderboardRequestData` | `getCurrencyLeaderboardAsync(...)` | `CharacterPlayerResponseModels.GetCurrencyLeaderboardOperationResponse` |
| `getCreateLeaderboard` | `CharacterPlayerModels.GetCreateLeaderboardRequestData` | `getCreateLeaderboardAsync(...)` | `CharacterPlayerResponseModels.GetCreateLeaderboardOperationResponse` |
| `getLastLoginLeaderboard` | `CharacterPlayerModels.GetLastLoginLeaderboardRequestData` | `getLastLoginLeaderboardAsync(...)` | `CharacterPlayerResponseModels.GetLastLoginLeaderboardOperationResponse` |
| `getStatisticsLog` | `CharacterPlayerModels.GetStatisticsLogRequestData` | `getStatisticsLogAsync(...)` | `CharacterPlayerResponseModels.GetStatisticsLogOperationResponse` |
| `getCurrencyLog` | `CharacterPlayerModels.GetCurrencyLogRequestData` | `getCurrencyLogAsync(...)` | `CharacterPlayerResponseModels.GetCurrencyLogOperationResponse` |


## Server methods (`GNNetwork.characterPlayer.server.*`)

| Method | Request DTO | Async form | Response class |
|--------|-------------|------------|----------------|
| `addPlayerFriend` | `CharacterPlayerModels.ServerAddPlayerFriendRequestData` | `addPlayerFriendAsync(...)` | `CharacterPlayerResponseModels.AddPlayerFriendOperationResponse` |
| `addSegment` | `CharacterPlayerModels.ServerAddSegmentRequestData` | `addSegmentAsync(...)` | `CharacterPlayerResponseModels.AddSegmentOperationResponse` |
| `getAvatar` | `CharacterPlayerModels.ServerGetAvatarRequestData` | `getAvatarAsync(...)` | `CharacterPlayerResponseModels.GetAvatarOperationResponse` |
| `getCatalogId` | `CharacterPlayerModels.ServerGetCatalogIdRequestData` | `getCatalogIdAsync(...)` | `CharacterPlayerResponseModels.GetCatalogIdOperationResponse` |
| `getCountryCode` | `CharacterPlayerModels.ServerGetCountryCodeRequestData` | `getCountryCodeAsync(...)` | `CharacterPlayerResponseModels.GetCountryCodeOperationResponse` |
| `getCustomData` | `CharacterPlayerModels.ServerGetCustomDataRequestData` | `getCustomDataAsync(...)` | `CharacterPlayerResponseModels.GetCustomDataOperationResponse` |
| `getDisplayName` | `CharacterPlayerModels.ServerGetDisplayNameRequestData` | `getDisplayNameAsync(...)` | `CharacterPlayerResponseModels.GetDisplayNameOperationResponse` |
| `getFriendStatisticsLeaderboardAroundPlayer` | `CharacterPlayerModels.ServerGetFriendStatisticsLeaderboardAroundPlayerRequestData` | `getFriendStatisticsLeaderboardAroundPlayerAsync(...)` | `CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse` |
| `getFriendStatisticsLeaderboard` | `CharacterPlayerModels.ServerGetFriendStatisticsLeaderboardRequestData` | `getFriendStatisticsLeaderboardAsync(...)` | `CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse` |
| `getIpAddressCreate` | `CharacterPlayerModels.ServerGetIpAddressCreateRequestData` | `getIpAddressCreateAsync(...)` | `CharacterPlayerResponseModels.GetIpAddressCreateOperationResponse` |
| `getOwner` | `CharacterPlayerModels.ServerGetOwnerRequestData` | `getOwnerAsync(...)` | `CharacterPlayerResponseModels.GetOwnerOperationResponse` |
| `getPlayerBan` | `CharacterPlayerModels.ServerGetPlayerBanRequestData` | `getPlayerBanAsync(...)` | `CharacterPlayerResponseModels.GetPlayerBanOperationResponse` |
| `getPlayerCurrency` | `CharacterPlayerModels.ServerGetPlayerCurrencyRequestData` | `getPlayerCurrencyAsync(...)` | `CharacterPlayerResponseModels.GetPlayerCurrencyOperationResponse` |
| `getPlayerData` | `CharacterPlayerModels.ServerGetPlayerDataRequestData` | `getPlayerDataAsync(...)` | `CharacterPlayerResponseModels.GetPlayerDataOperationResponse` |
| `getPlayerFriend` | `CharacterPlayerModels.ServerGetPlayerFriendRequestData` | `getPlayerFriendAsync(...)` | `CharacterPlayerResponseModels.GetPlayerFriendOperationResponse` |
| `getPlayerGroup` | `CharacterPlayerModels.ServerGetPlayerGroupRequestData` | `getPlayerGroupAsync(...)` | `CharacterPlayerResponseModels.GetPlayerGroupOperationResponse` |
| `getPlayerInformation` | `CharacterPlayerModels.ServerGetPlayerInformationRequestData` | `getPlayerInformationAsync(...)` | `CharacterPlayerResponseModels.GetPlayerInformationOperationResponse` |
| `getPlayerInventory` | `CharacterPlayerModels.ServerGetPlayerInventoryRequestData` | `getPlayerInventoryAsync(...)` | `CharacterPlayerResponseModels.GetPlayerInventoryOperationResponse` |
| `getPlayerStatistics` | `CharacterPlayerModels.ServerGetPlayerStatisticsRequestData` | `getPlayerStatisticsAsync(...)` | `CharacterPlayerResponseModels.GetPlayerStatisticsOperationResponse` |
| `getPlayersWithDisplayName` | `CharacterPlayerModels.ServerGetPlayersWithDisplayNameRequestData` | `getPlayersWithDisplayNameAsync(...)` | `CharacterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse` |
| `getPlayersWithSegment` | `CharacterPlayerModels.ServerGetPlayersWithSegmentRequestData` | `getPlayersWithSegmentAsync(...)` | `CharacterPlayerResponseModels.GetPlayersWithSegmentOperationResponse` |
| `getPlayersWithTag` | `CharacterPlayerModels.ServerGetPlayersWithTagRequestData` | `getPlayersWithTagAsync(...)` | `CharacterPlayerResponseModels.GetPlayersWithTagOperationResponse` |
| `getRemoveStatus` | `CharacterPlayerModels.ServerGetRemoveStatusRequestData` | `getRemoveStatusAsync(...)` | `CharacterPlayerResponseModels.GetRemoveStatusOperationResponse` |
| `getSegment` | `CharacterPlayerModels.ServerGetSegmentRequestData` | `getSegmentAsync(...)` | `CharacterPlayerResponseModels.GetSegmentOperationResponse` |
| `getStatisticsLeaderboardAroundPlayer` | `CharacterPlayerModels.ServerGetStatisticsLeaderboardAroundPlayerRequestData` | `getStatisticsLeaderboardAroundPlayerAsync(...)` | `CharacterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse` |
| `getStatisticsLeaderboard` | `CharacterPlayerModels.ServerGetStatisticsLeaderboardRequestData` | `getStatisticsLeaderboardAsync(...)` | `CharacterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse` |
| `getTag` | `CharacterPlayerModels.ServerGetTagRequestData` | `getTagAsync(...)` | `CharacterPlayerResponseModels.GetTagOperationResponse` |
| `getTsCreate` | `CharacterPlayerModels.ServerGetTsCreateRequestData` | `getTsCreateAsync(...)` | `CharacterPlayerResponseModels.GetTsCreateOperationResponse` |
| `getTsLastLogin` | `CharacterPlayerModels.ServerGetTsLastLoginRequestData` | `getTsLastLoginAsync(...)` | `CharacterPlayerResponseModels.GetTsLastLoginOperationResponse` |
| `createGroup` | `CharacterPlayerModels.ServerCreateGroupRequestData` | `createGroupAsync(...)` | `CharacterPlayerResponseModels.CreateGroupOperationResponse` |
| `createPlayerItem` | `CharacterPlayerModels.ServerCreatePlayerItemRequestData` | `createPlayerItemAsync(...)` | `CharacterPlayerResponseModels.CreatePlayerItemOperationResponse` |
| `joinGroup` | `CharacterPlayerModels.ServerJoinGroupRequestData` | `joinGroupAsync(...)` | `CharacterPlayerResponseModels.JoinGroupOperationResponse` |
| `leaveGroup` | `CharacterPlayerModels.ServerLeaveGroupRequestData` | `leaveGroupAsync(...)` | `CharacterPlayerResponseModels.LeaveGroupOperationResponse` |
| `removePlayerFriend` | `CharacterPlayerModels.ServerRemovePlayerFriendRequestData` | `removePlayerFriendAsync(...)` | `CharacterPlayerResponseModels.RemovePlayerFriendOperationResponse` |
| `removePlayerItem` | `CharacterPlayerModels.ServerRemovePlayerItemRequestData` | `removePlayerItemAsync(...)` | `CharacterPlayerResponseModels.RemovePlayerItemOperationResponse` |
| `removeSegment` | `CharacterPlayerModels.ServerRemoveSegmentRequestData` | `removeSegmentAsync(...)` | `CharacterPlayerResponseModels.RemoveSegmentOperationResponse` |
| `removeTag` | `CharacterPlayerModels.ServerRemoveTagRequestData` | `removeTagAsync(...)` | `CharacterPlayerResponseModels.RemoveTagOperationResponse` |
| `setAvatar` | `CharacterPlayerModels.ServerSetAvatarRequestData` | `setAvatarAsync(...)` | `CharacterPlayerResponseModels.SetAvatarOperationResponse` |
| `setCountryCode` | `CharacterPlayerModels.ServerSetCountryCodeRequestData` | `setCountryCodeAsync(...)` | `CharacterPlayerResponseModels.SetCountryCodeOperationResponse` |
| `setCustomData` | `CharacterPlayerModels.ServerSetCustomDataRequestData` | `setCustomDataAsync(...)` | `CharacterPlayerResponseModels.SetCustomDataOperationResponse` |
| `setDisplayName` | `CharacterPlayerModels.ServerSetDisplayNameRequestData` | `setDisplayNameAsync(...)` | `CharacterPlayerResponseModels.SetDisplayNameOperationResponse` |
| `setOwner` | `CharacterPlayerModels.ServerSetOwnerRequestData` | `setOwnerAsync(...)` | `CharacterPlayerResponseModels.SetOwnerOperationResponse` |
| `setPlayerBan` | `CharacterPlayerModels.ServerSetPlayerBanRequestData` | `setPlayerBanAsync(...)` | `CharacterPlayerResponseModels.SetPlayerBanOperationResponse` |
| `changePlayerCurrency` | `CharacterPlayerModels.ServerChangePlayerCurrencyRequestData` | `changePlayerCurrencyAsync(...)` | `CharacterPlayerResponseModels.ChangePlayerCurrencyOperationResponse` |
| `setPlayerData` | `CharacterPlayerModels.ServerSetPlayerDataRequestData` | `setPlayerDataAsync(...)` | `CharacterPlayerResponseModels.SetPlayerDataOperationResponse` |
| `changePlayerStatistics` | `CharacterPlayerModels.ServerChangePlayerStatisticsRequestData` | `changePlayerStatisticsAsync(...)` | `CharacterPlayerResponseModels.ChangePlayerStatisticsOperationResponse` |
| `setRemoveStatus` | `CharacterPlayerModels.ServerSetRemoveStatusRequestData` | `setRemoveStatusAsync(...)` | `CharacterPlayerResponseModels.SetRemoveStatusOperationResponse` |
| `setTag` | `CharacterPlayerModels.ServerSetTagRequestData` | `setTagAsync(...)` | `CharacterPlayerResponseModels.SetTagOperationResponse` |
| `getCurrencyLeaderboard` | `CharacterPlayerModels.ServerGetCurrencyLeaderboardRequestData` | `getCurrencyLeaderboardAsync(...)` | `CharacterPlayerResponseModels.GetCurrencyLeaderboardOperationResponse` |
| `getCreateLeaderboard` | `CharacterPlayerModels.ServerGetCreateLeaderboardRequestData` | `getCreateLeaderboardAsync(...)` | `CharacterPlayerResponseModels.GetCreateLeaderboardOperationResponse` |
| `getLastLoginLeaderboard` | `CharacterPlayerModels.ServerGetLastLoginLeaderboardRequestData` | `getLastLoginLeaderboardAsync(...)` | `CharacterPlayerResponseModels.GetLastLoginLeaderboardOperationResponse` |
| `getStatisticsLog` | `CharacterPlayerModels.ServerGetStatisticsLogRequestData` | `getStatisticsLogAsync(...)` | `CharacterPlayerResponseModels.GetStatisticsLogOperationResponse` |
| `getCurrencyLog` | `CharacterPlayerModels.ServerGetCurrencyLogRequestData` | `getCurrencyLogAsync(...)` | `CharacterPlayerResponseModels.GetCurrencyLogOperationResponse` |


## Admin methods (`GNNetwork.characterPlayer.admin.*`)

| Method | Request DTO | Async form | Response class |
|--------|-------------|------------|----------------|
| `addPlayerFriend` | `CharacterPlayerModels.AdminAddPlayerFriendRequestData` | `addPlayerFriendAsync(...)` | `CharacterPlayerResponseModels.AddPlayerFriendOperationResponse` |
| `addSegment` | `CharacterPlayerModels.AdminAddSegmentRequestData` | `addSegmentAsync(...)` | `CharacterPlayerResponseModels.AddSegmentOperationResponse` |
| `getAvatar` | `CharacterPlayerModels.AdminGetAvatarRequestData` | `getAvatarAsync(...)` | `CharacterPlayerResponseModels.GetAvatarOperationResponse` |
| `getCatalogId` | `CharacterPlayerModels.AdminGetCatalogIdRequestData` | `getCatalogIdAsync(...)` | `CharacterPlayerResponseModels.GetCatalogIdOperationResponse` |
| `getCountryCode` | `CharacterPlayerModels.AdminGetCountryCodeRequestData` | `getCountryCodeAsync(...)` | `CharacterPlayerResponseModels.GetCountryCodeOperationResponse` |
| `getCustomData` | `CharacterPlayerModels.AdminGetCustomDataRequestData` | `getCustomDataAsync(...)` | `CharacterPlayerResponseModels.GetCustomDataOperationResponse` |
| `getDisplayName` | `CharacterPlayerModels.AdminGetDisplayNameRequestData` | `getDisplayNameAsync(...)` | `CharacterPlayerResponseModels.GetDisplayNameOperationResponse` |
| `getFriendStatisticsLeaderboardAroundPlayer` | `CharacterPlayerModels.AdminGetFriendStatisticsLeaderboardAroundPlayerRequestData` | `getFriendStatisticsLeaderboardAroundPlayerAsync(...)` | `CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse` |
| `getFriendStatisticsLeaderboard` | `CharacterPlayerModels.AdminGetFriendStatisticsLeaderboardRequestData` | `getFriendStatisticsLeaderboardAsync(...)` | `CharacterPlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse` |
| `getIpAddressCreate` | `CharacterPlayerModels.AdminGetIpAddressCreateRequestData` | `getIpAddressCreateAsync(...)` | `CharacterPlayerResponseModels.GetIpAddressCreateOperationResponse` |
| `getOwner` | `CharacterPlayerModels.AdminGetOwnerRequestData` | `getOwnerAsync(...)` | `CharacterPlayerResponseModels.GetOwnerOperationResponse` |
| `getPlayerBan` | `CharacterPlayerModels.AdminGetPlayerBanRequestData` | `getPlayerBanAsync(...)` | `CharacterPlayerResponseModels.GetPlayerBanOperationResponse` |
| `getPlayerCurrency` | `CharacterPlayerModels.AdminGetPlayerCurrencyRequestData` | `getPlayerCurrencyAsync(...)` | `CharacterPlayerResponseModels.GetPlayerCurrencyOperationResponse` |
| `getPlayerData` | `CharacterPlayerModels.AdminGetPlayerDataRequestData` | `getPlayerDataAsync(...)` | `CharacterPlayerResponseModels.GetPlayerDataOperationResponse` |
| `getPlayerFriend` | `CharacterPlayerModels.AdminGetPlayerFriendRequestData` | `getPlayerFriendAsync(...)` | `CharacterPlayerResponseModels.GetPlayerFriendOperationResponse` |
| `getPlayerGroup` | `CharacterPlayerModels.AdminGetPlayerGroupRequestData` | `getPlayerGroupAsync(...)` | `CharacterPlayerResponseModels.GetPlayerGroupOperationResponse` |
| `getPlayerInformation` | `CharacterPlayerModels.AdminGetPlayerInformationRequestData` | `getPlayerInformationAsync(...)` | `CharacterPlayerResponseModels.GetPlayerInformationOperationResponse` |
| `getPlayerInventory` | `CharacterPlayerModels.AdminGetPlayerInventoryRequestData` | `getPlayerInventoryAsync(...)` | `CharacterPlayerResponseModels.GetPlayerInventoryOperationResponse` |
| `getPlayerStatistics` | `CharacterPlayerModels.AdminGetPlayerStatisticsRequestData` | `getPlayerStatisticsAsync(...)` | `CharacterPlayerResponseModels.GetPlayerStatisticsOperationResponse` |
| `getPlayersWithDisplayName` | `CharacterPlayerModels.AdminGetPlayersWithDisplayNameRequestData` | `getPlayersWithDisplayNameAsync(...)` | `CharacterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse` |
| `getPlayersWithSegment` | `CharacterPlayerModels.AdminGetPlayersWithSegmentRequestData` | `getPlayersWithSegmentAsync(...)` | `CharacterPlayerResponseModels.GetPlayersWithSegmentOperationResponse` |
| `getPlayersWithTag` | `CharacterPlayerModels.AdminGetPlayersWithTagRequestData` | `getPlayersWithTagAsync(...)` | `CharacterPlayerResponseModels.GetPlayersWithTagOperationResponse` |
| `getRemoveStatus` | `CharacterPlayerModels.AdminGetRemoveStatusRequestData` | `getRemoveStatusAsync(...)` | `CharacterPlayerResponseModels.GetRemoveStatusOperationResponse` |
| `getSegment` | `CharacterPlayerModels.AdminGetSegmentRequestData` | `getSegmentAsync(...)` | `CharacterPlayerResponseModels.GetSegmentOperationResponse` |
| `getStatisticsLeaderboardAroundPlayer` | `CharacterPlayerModels.AdminGetStatisticsLeaderboardAroundPlayerRequestData` | `getStatisticsLeaderboardAroundPlayerAsync(...)` | `CharacterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse` |
| `getStatisticsLeaderboard` | `CharacterPlayerModels.AdminGetStatisticsLeaderboardRequestData` | `getStatisticsLeaderboardAsync(...)` | `CharacterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse` |
| `getTag` | `CharacterPlayerModels.AdminGetTagRequestData` | `getTagAsync(...)` | `CharacterPlayerResponseModels.GetTagOperationResponse` |
| `getTsCreate` | `CharacterPlayerModels.AdminGetTsCreateRequestData` | `getTsCreateAsync(...)` | `CharacterPlayerResponseModels.GetTsCreateOperationResponse` |
| `getTsLastLogin` | `CharacterPlayerModels.AdminGetTsLastLoginRequestData` | `getTsLastLoginAsync(...)` | `CharacterPlayerResponseModels.GetTsLastLoginOperationResponse` |
| `createGroup` | `CharacterPlayerModels.AdminCreateGroupRequestData` | `createGroupAsync(...)` | `CharacterPlayerResponseModels.CreateGroupOperationResponse` |
| `createPlayerItem` | `CharacterPlayerModels.AdminCreatePlayerItemRequestData` | `createPlayerItemAsync(...)` | `CharacterPlayerResponseModels.CreatePlayerItemOperationResponse` |
| `joinGroup` | `CharacterPlayerModels.AdminJoinGroupRequestData` | `joinGroupAsync(...)` | `CharacterPlayerResponseModels.JoinGroupOperationResponse` |
| `leaveGroup` | `CharacterPlayerModels.AdminLeaveGroupRequestData` | `leaveGroupAsync(...)` | `CharacterPlayerResponseModels.LeaveGroupOperationResponse` |
| `removePlayerFriend` | `CharacterPlayerModels.AdminRemovePlayerFriendRequestData` | `removePlayerFriendAsync(...)` | `CharacterPlayerResponseModels.RemovePlayerFriendOperationResponse` |
| `removePlayerItem` | `CharacterPlayerModels.AdminRemovePlayerItemRequestData` | `removePlayerItemAsync(...)` | `CharacterPlayerResponseModels.RemovePlayerItemOperationResponse` |
| `removeSegment` | `CharacterPlayerModels.AdminRemoveSegmentRequestData` | `removeSegmentAsync(...)` | `CharacterPlayerResponseModels.RemoveSegmentOperationResponse` |
| `removeTag` | `CharacterPlayerModels.AdminRemoveTagRequestData` | `removeTagAsync(...)` | `CharacterPlayerResponseModels.RemoveTagOperationResponse` |
| `setAvatar` | `CharacterPlayerModels.AdminSetAvatarRequestData` | `setAvatarAsync(...)` | `CharacterPlayerResponseModels.SetAvatarOperationResponse` |
| `setCountryCode` | `CharacterPlayerModels.AdminSetCountryCodeRequestData` | `setCountryCodeAsync(...)` | `CharacterPlayerResponseModels.SetCountryCodeOperationResponse` |
| `setCustomData` | `CharacterPlayerModels.AdminSetCustomDataRequestData` | `setCustomDataAsync(...)` | `CharacterPlayerResponseModels.SetCustomDataOperationResponse` |
| `setDisplayName` | `CharacterPlayerModels.AdminSetDisplayNameRequestData` | `setDisplayNameAsync(...)` | `CharacterPlayerResponseModels.SetDisplayNameOperationResponse` |
| `setOwner` | `CharacterPlayerModels.AdminSetOwnerRequestData` | `setOwnerAsync(...)` | `CharacterPlayerResponseModels.SetOwnerOperationResponse` |
| `setPlayerBan` | `CharacterPlayerModels.AdminSetPlayerBanRequestData` | `setPlayerBanAsync(...)` | `CharacterPlayerResponseModels.SetPlayerBanOperationResponse` |
| `changePlayerCurrency` | `CharacterPlayerModels.AdminChangePlayerCurrencyRequestData` | `changePlayerCurrencyAsync(...)` | `CharacterPlayerResponseModels.ChangePlayerCurrencyOperationResponse` |
| `setPlayerData` | `CharacterPlayerModels.AdminSetPlayerDataRequestData` | `setPlayerDataAsync(...)` | `CharacterPlayerResponseModels.SetPlayerDataOperationResponse` |
| `changePlayerStatistics` | `CharacterPlayerModels.AdminChangePlayerStatisticsRequestData` | `changePlayerStatisticsAsync(...)` | `CharacterPlayerResponseModels.ChangePlayerStatisticsOperationResponse` |
| `setRemoveStatus` | `CharacterPlayerModels.AdminSetRemoveStatusRequestData` | `setRemoveStatusAsync(...)` | `CharacterPlayerResponseModels.SetRemoveStatusOperationResponse` |
| `setTag` | `CharacterPlayerModels.AdminSetTagRequestData` | `setTagAsync(...)` | `CharacterPlayerResponseModels.SetTagOperationResponse` |
| `getCurrencyLeaderboard` | `CharacterPlayerModels.AdminGetCurrencyLeaderboardRequestData` | `getCurrencyLeaderboardAsync(...)` | `CharacterPlayerResponseModels.GetCurrencyLeaderboardOperationResponse` |
| `getCreateLeaderboard` | `CharacterPlayerModels.AdminGetCreateLeaderboardRequestData` | `getCreateLeaderboardAsync(...)` | `CharacterPlayerResponseModels.GetCreateLeaderboardOperationResponse` |
| `getLastLoginLeaderboard` | `CharacterPlayerModels.AdminGetLastLoginLeaderboardRequestData` | `getLastLoginLeaderboardAsync(...)` | `CharacterPlayerResponseModels.GetLastLoginLeaderboardOperationResponse` |
| `getStatisticsLog` | `CharacterPlayerModels.AdminGetStatisticsLogRequestData` | `getStatisticsLogAsync(...)` | `CharacterPlayerResponseModels.GetStatisticsLogOperationResponse` |
| `getCurrencyLog` | `CharacterPlayerModels.AdminGetCurrencyLogRequestData` | `getCurrencyLogAsync(...)` | `CharacterPlayerResponseModels.GetCurrencyLogOperationResponse` |


## Ví dụ tối thiểu

```ts
import { GNNetwork, ReturnCode, ErrorCode } from "@xmobitea/gn-typescript-client";

const res = await GNNetwork.characterPlayer.addPlayerFriendAsync({ /* CharacterPlayerModels.AddPlayerFriendRequestData */ } as any);
if (res.returnCode !== ReturnCode.Ok) return;
if (res.errorCode !== ErrorCode.Ok) return;
// res.responseData có typed payload
```
