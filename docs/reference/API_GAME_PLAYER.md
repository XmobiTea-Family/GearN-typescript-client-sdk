# API Reference: GamePlayerApi

Game-player profile, friend/group relation, currency, statistics, segment, tag, social identity.

Domain guide: [guides/GAME_PLAYER.md](../guides/GAME_PLAYER.md). DTO shapes: [DTO_INDEX.md](DTO_INDEX.md#game-player).

## Namespaces

- `GNNetwork.gamePlayer` — `RequestRole.Client`
- `GNNetwork.gamePlayer.server` — `RequestRole.Server`
- `GNNetwork.gamePlayer.admin` — `RequestRole.Admin`

## Convention

Mỗi method dưới đây có 2 form — callback và `*Async()` Promise. Ưu tiên `*Async()`.

```ts
// Callback
GNNetwork.gamePlayer.<method>(requestData, onResponse?, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?);

// Async
const res = await GNNetwork.gamePlayer.<method>Async(requestData, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?);
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


## Client methods (`GNNetwork.gamePlayer.*`)

| Method | Request DTO | Async form | Response class |
|--------|-------------|------------|----------------|
| `addPlayerFriend` | `GamePlayerModels.AddPlayerFriendRequestData` | `addPlayerFriendAsync(...)` | `GamePlayerResponseModels.AddPlayerFriendOperationResponse` |
| `addSegment` | `GamePlayerModels.AddSegmentRequestData` | `addSegmentAsync(...)` | `GamePlayerResponseModels.AddSegmentOperationResponse` |
| `getAvatar` | `GamePlayerModels.GetAvatarRequestData` | `getAvatarAsync(...)` | `GamePlayerResponseModels.GetAvatarOperationResponse` |
| `getCountryCode` | `GamePlayerModels.GetCountryCodeRequestData` | `getCountryCodeAsync(...)` | `GamePlayerResponseModels.GetCountryCodeOperationResponse` |
| `getCustomData` | `GamePlayerModels.GetCustomDataRequestData` | `getCustomDataAsync(...)` | `GamePlayerResponseModels.GetCustomDataOperationResponse` |
| `getDisplayName` | `GamePlayerModels.GetDisplayNameRequestData` | `getDisplayNameAsync(...)` | `GamePlayerResponseModels.GetDisplayNameOperationResponse` |
| `getFriendStatisticsLeaderboardAroundPlayer` | `GamePlayerModels.GetFriendStatisticsLeaderboardAroundPlayerRequestData` | `getFriendStatisticsLeaderboardAroundPlayerAsync(...)` | `GamePlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse` |
| `getFriendStatisticsLeaderboard` | `GamePlayerModels.GetFriendStatisticsLeaderboardRequestData` | `getFriendStatisticsLeaderboardAsync(...)` | `GamePlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse` |
| `getIpAddressCreate` | `GamePlayerModels.GetIpAddressCreateRequestData` | `getIpAddressCreateAsync(...)` | `GamePlayerResponseModels.GetIpAddressCreateOperationResponse` |
| `getOnlineStatus` | `GamePlayerModels.GetOnlineStatusRequestData` | `getOnlineStatusAsync(...)` | `GamePlayerResponseModels.GetOnlineStatusOperationResponse` |
| `getPlayerBan` | `GamePlayerModels.GetPlayerBanRequestData` | `getPlayerBanAsync(...)` | `GamePlayerResponseModels.GetPlayerBanOperationResponse` |
| `getPlayerCharacter` | `GamePlayerModels.GetPlayerCharacterRequestData` | `getPlayerCharacterAsync(...)` | `GamePlayerResponseModels.GetPlayerCharacterOperationResponse` |
| `getPlayerCurrency` | `GamePlayerModels.GetPlayerCurrencyRequestData` | `getPlayerCurrencyAsync(...)` | `GamePlayerResponseModels.GetPlayerCurrencyOperationResponse` |
| `getPlayerData` | `GamePlayerModels.GetPlayerDataRequestData` | `getPlayerDataAsync(...)` | `GamePlayerResponseModels.GetPlayerDataOperationResponse` |
| `getPlayerFriend` | `GamePlayerModels.GetPlayerFriendRequestData` | `getPlayerFriendAsync(...)` | `GamePlayerResponseModels.GetPlayerFriendOperationResponse` |
| `getPlayerGroup` | `GamePlayerModels.GetPlayerGroupRequestData` | `getPlayerGroupAsync(...)` | `GamePlayerResponseModels.GetPlayerGroupOperationResponse` |
| `getPlayerInformation` | `GamePlayerModels.GetPlayerInformationRequestData` | `getPlayerInformationAsync(...)` | `GamePlayerResponseModels.GetPlayerInformationOperationResponse` |
| `getPlayerInventory` | `GamePlayerModels.GetPlayerInventoryRequestData` | `getPlayerInventoryAsync(...)` | `GamePlayerResponseModels.GetPlayerInventoryOperationResponse` |
| `getPlayerStatistics` | `GamePlayerModels.GetPlayerStatisticsRequestData` | `getPlayerStatisticsAsync(...)` | `GamePlayerResponseModels.GetPlayerStatisticsOperationResponse` |
| `getPlayersWithDisplayName` | `GamePlayerModels.GetPlayersWithDisplayNameRequestData` | `getPlayersWithDisplayNameAsync(...)` | `GamePlayerResponseModels.GetPlayersWithDisplayNameOperationResponse` |
| `getPlayersWithSegment` | `GamePlayerModels.GetPlayersWithSegmentRequestData` | `getPlayersWithSegmentAsync(...)` | `GamePlayerResponseModels.GetPlayersWithSegmentOperationResponse` |
| `getPlayersWithTag` | `GamePlayerModels.GetPlayersWithTagRequestData` | `getPlayersWithTagAsync(...)` | `GamePlayerResponseModels.GetPlayersWithTagOperationResponse` |
| `getSegment` | `GamePlayerModels.GetSegmentRequestData` | `getSegmentAsync(...)` | `GamePlayerResponseModels.GetSegmentOperationResponse` |
| `getStatisticsLeaderboardAroundPlayer` | `GamePlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData` | `getStatisticsLeaderboardAroundPlayerAsync(...)` | `GamePlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse` |
| `getStatisticsLeaderboard` | `GamePlayerModels.GetStatisticsLeaderboardRequestData` | `getStatisticsLeaderboardAsync(...)` | `GamePlayerResponseModels.GetStatisticsLeaderboardOperationResponse` |
| `getTag` | `GamePlayerModels.GetTagRequestData` | `getTagAsync(...)` | `GamePlayerResponseModels.GetTagOperationResponse` |
| `getTsCreate` | `GamePlayerModels.GetTsCreateRequestData` | `getTsCreateAsync(...)` | `GamePlayerResponseModels.GetTsCreateOperationResponse` |
| `getTsLastLogin` | `GamePlayerModels.GetTsLastLoginRequestData` | `getTsLastLoginAsync(...)` | `GamePlayerResponseModels.GetTsLastLoginOperationResponse` |
| `createGroup` | `GamePlayerModels.CreateGroupRequestData` | `createGroupAsync(...)` | `GamePlayerResponseModels.CreateGroupOperationResponse` |
| `createPlayerCharacter` | `GamePlayerModels.CreatePlayerCharacterRequestData` | `createPlayerCharacterAsync(...)` | `GamePlayerResponseModels.CreatePlayerCharacterOperationResponse` |
| `createPlayerItem` | `GamePlayerModels.CreatePlayerItemRequestData` | `createPlayerItemAsync(...)` | `GamePlayerResponseModels.CreatePlayerItemOperationResponse` |
| `joinGroup` | `GamePlayerModels.JoinGroupRequestData` | `joinGroupAsync(...)` | `GamePlayerResponseModels.JoinGroupOperationResponse` |
| `leaveGroup` | `GamePlayerModels.LeaveGroupRequestData` | `leaveGroupAsync(...)` | `GamePlayerResponseModels.LeaveGroupOperationResponse` |
| `removePlayerCharacter` | `GamePlayerModels.RemovePlayerCharacterRequestData` | `removePlayerCharacterAsync(...)` | `GamePlayerResponseModels.RemovePlayerCharacterOperationResponse` |
| `removePlayerFriend` | `GamePlayerModels.RemovePlayerFriendRequestData` | `removePlayerFriendAsync(...)` | `GamePlayerResponseModels.RemovePlayerFriendOperationResponse` |
| `removePlayerItem` | `GamePlayerModels.RemovePlayerItemRequestData` | `removePlayerItemAsync(...)` | `GamePlayerResponseModels.RemovePlayerItemOperationResponse` |
| `removeSegment` | `GamePlayerModels.RemoveSegmentRequestData` | `removeSegmentAsync(...)` | `GamePlayerResponseModels.RemoveSegmentOperationResponse` |
| `removeTag` | `GamePlayerModels.RemoveTagRequestData` | `removeTagAsync(...)` | `GamePlayerResponseModels.RemoveTagOperationResponse` |
| `setAvatar` | `GamePlayerModels.SetAvatarRequestData` | `setAvatarAsync(...)` | `GamePlayerResponseModels.SetAvatarOperationResponse` |
| `setCountryCode` | `GamePlayerModels.SetCountryCodeRequestData` | `setCountryCodeAsync(...)` | `GamePlayerResponseModels.SetCountryCodeOperationResponse` |
| `setCustomData` | `GamePlayerModels.SetCustomDataRequestData` | `setCustomDataAsync(...)` | `GamePlayerResponseModels.SetCustomDataOperationResponse` |
| `setDisplayName` | `GamePlayerModels.SetDisplayNameRequestData` | `setDisplayNameAsync(...)` | `GamePlayerResponseModels.SetDisplayNameOperationResponse` |
| `setPlayerBan` | `GamePlayerModels.SetPlayerBanRequestData` | `setPlayerBanAsync(...)` | `GamePlayerResponseModels.SetPlayerBanOperationResponse` |
| `changePlayerCurrency` | `GamePlayerModels.ChangePlayerCurrencyRequestData` | `changePlayerCurrencyAsync(...)` | `GamePlayerResponseModels.ChangePlayerCurrencyOperationResponse` |
| `setPlayerData` | `GamePlayerModels.SetPlayerDataRequestData` | `setPlayerDataAsync(...)` | `GamePlayerResponseModels.SetPlayerDataOperationResponse` |
| `changePlayerStatistics` | `GamePlayerModels.ChangePlayerStatisticsRequestData` | `changePlayerStatisticsAsync(...)` | `GamePlayerResponseModels.ChangePlayerStatisticsOperationResponse` |
| `setTag` | `GamePlayerModels.SetTagRequestData` | `setTagAsync(...)` | `GamePlayerResponseModels.SetTagOperationResponse` |
| `getCurrencyLeaderboard` | `GamePlayerModels.GetCurrencyLeaderboardRequestData` | `getCurrencyLeaderboardAsync(...)` | `GamePlayerResponseModels.GetCurrencyLeaderboardOperationResponse` |
| `getLastLoginLeaderboard` | `GamePlayerModels.GetLastLoginLeaderboardRequestData` | `getLastLoginLeaderboardAsync(...)` | `GamePlayerResponseModels.GetLastLoginLeaderboardOperationResponse` |
| `getCreateLeaderboard` | `GamePlayerModels.GetCreateLeaderboardRequestData` | `getCreateLeaderboardAsync(...)` | `GamePlayerResponseModels.GetCreateLeaderboardOperationResponse` |
| `getStatisticsLog` | `GamePlayerModels.GetStatisticsLogRequestData` | `getStatisticsLogAsync(...)` | `GamePlayerResponseModels.GetStatisticsLogOperationResponse` |
| `getCurrencyLog` | `GamePlayerModels.GetCurrencyLogRequestData` | `getCurrencyLogAsync(...)` | `GamePlayerResponseModels.GetCurrencyLogOperationResponse` |


## Server methods (`GNNetwork.gamePlayer.server.*`)

| Method | Request DTO | Async form | Response class |
|--------|-------------|------------|----------------|
| `addPlayerFriend` | `GamePlayerModels.ServerAddPlayerFriendRequestData` | `addPlayerFriendAsync(...)` | `GamePlayerResponseModels.AddPlayerFriendOperationResponse` |
| `addSegment` | `GamePlayerModels.ServerAddSegmentRequestData` | `addSegmentAsync(...)` | `GamePlayerResponseModels.AddSegmentOperationResponse` |
| `getAvatar` | `GamePlayerModels.ServerGetAvatarRequestData` | `getAvatarAsync(...)` | `GamePlayerResponseModels.GetAvatarOperationResponse` |
| `getCountryCode` | `GamePlayerModels.ServerGetCountryCodeRequestData` | `getCountryCodeAsync(...)` | `GamePlayerResponseModels.GetCountryCodeOperationResponse` |
| `getCustomData` | `GamePlayerModels.ServerGetCustomDataRequestData` | `getCustomDataAsync(...)` | `GamePlayerResponseModels.GetCustomDataOperationResponse` |
| `getDisplayName` | `GamePlayerModels.ServerGetDisplayNameRequestData` | `getDisplayNameAsync(...)` | `GamePlayerResponseModels.GetDisplayNameOperationResponse` |
| `getFriendStatisticsLeaderboardAroundPlayer` | `GamePlayerModels.ServerGetFriendStatisticsLeaderboardAroundPlayerRequestData` | `getFriendStatisticsLeaderboardAroundPlayerAsync(...)` | `GamePlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse` |
| `getFriendStatisticsLeaderboard` | `GamePlayerModels.ServerGetFriendStatisticsLeaderboardRequestData` | `getFriendStatisticsLeaderboardAsync(...)` | `GamePlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse` |
| `getIpAddressCreate` | `GamePlayerModels.ServerGetIpAddressCreateRequestData` | `getIpAddressCreateAsync(...)` | `GamePlayerResponseModels.GetIpAddressCreateOperationResponse` |
| `getOnlineStatus` | `GamePlayerModels.ServerGetOnlineStatusRequestData` | `getOnlineStatusAsync(...)` | `GamePlayerResponseModels.GetOnlineStatusOperationResponse` |
| `getPlayerBan` | `GamePlayerModels.ServerGetPlayerBanRequestData` | `getPlayerBanAsync(...)` | `GamePlayerResponseModels.GetPlayerBanOperationResponse` |
| `getPlayerCharacter` | `GamePlayerModels.ServerGetPlayerCharacterRequestData` | `getPlayerCharacterAsync(...)` | `GamePlayerResponseModels.GetPlayerCharacterOperationResponse` |
| `getPlayerCurrency` | `GamePlayerModels.ServerGetPlayerCurrencyRequestData` | `getPlayerCurrencyAsync(...)` | `GamePlayerResponseModels.GetPlayerCurrencyOperationResponse` |
| `getPlayerData` | `GamePlayerModels.ServerGetPlayerDataRequestData` | `getPlayerDataAsync(...)` | `GamePlayerResponseModels.GetPlayerDataOperationResponse` |
| `getPlayerFriend` | `GamePlayerModels.ServerGetPlayerFriendRequestData` | `getPlayerFriendAsync(...)` | `GamePlayerResponseModels.GetPlayerFriendOperationResponse` |
| `getPlayerGroup` | `GamePlayerModels.ServerGetPlayerGroupRequestData` | `getPlayerGroupAsync(...)` | `GamePlayerResponseModels.GetPlayerGroupOperationResponse` |
| `getPlayerInformation` | `GamePlayerModels.ServerGetPlayerInformationRequestData` | `getPlayerInformationAsync(...)` | `GamePlayerResponseModels.GetPlayerInformationOperationResponse` |
| `getPlayerInventory` | `GamePlayerModels.ServerGetPlayerInventoryRequestData` | `getPlayerInventoryAsync(...)` | `GamePlayerResponseModels.GetPlayerInventoryOperationResponse` |
| `getPlayerStatistics` | `GamePlayerModels.ServerGetPlayerStatisticsRequestData` | `getPlayerStatisticsAsync(...)` | `GamePlayerResponseModels.GetPlayerStatisticsOperationResponse` |
| `getPlayersWithDisplayName` | `GamePlayerModels.ServerGetPlayersWithDisplayNameRequestData` | `getPlayersWithDisplayNameAsync(...)` | `GamePlayerResponseModels.GetPlayersWithDisplayNameOperationResponse` |
| `getPlayersWithSegment` | `GamePlayerModels.ServerGetPlayersWithSegmentRequestData` | `getPlayersWithSegmentAsync(...)` | `GamePlayerResponseModels.GetPlayersWithSegmentOperationResponse` |
| `getPlayersWithTag` | `GamePlayerModels.ServerGetPlayersWithTagRequestData` | `getPlayersWithTagAsync(...)` | `GamePlayerResponseModels.GetPlayersWithTagOperationResponse` |
| `getSegment` | `GamePlayerModels.ServerGetSegmentRequestData` | `getSegmentAsync(...)` | `GamePlayerResponseModels.GetSegmentOperationResponse` |
| `getStatisticsLeaderboardAroundPlayer` | `GamePlayerModels.ServerGetStatisticsLeaderboardAroundPlayerRequestData` | `getStatisticsLeaderboardAroundPlayerAsync(...)` | `GamePlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse` |
| `getStatisticsLeaderboard` | `GamePlayerModels.ServerGetStatisticsLeaderboardRequestData` | `getStatisticsLeaderboardAsync(...)` | `GamePlayerResponseModels.GetStatisticsLeaderboardOperationResponse` |
| `getTag` | `GamePlayerModels.ServerGetTagRequestData` | `getTagAsync(...)` | `GamePlayerResponseModels.GetTagOperationResponse` |
| `getTsCreate` | `GamePlayerModels.ServerGetTsCreateRequestData` | `getTsCreateAsync(...)` | `GamePlayerResponseModels.GetTsCreateOperationResponse` |
| `getTsLastLogin` | `GamePlayerModels.ServerGetTsLastLoginRequestData` | `getTsLastLoginAsync(...)` | `GamePlayerResponseModels.GetTsLastLoginOperationResponse` |
| `createGroup` | `GamePlayerModels.ServerCreateGroupRequestData` | `createGroupAsync(...)` | `GamePlayerResponseModels.CreateGroupOperationResponse` |
| `createPlayerCharacter` | `GamePlayerModels.ServerCreatePlayerCharacterRequestData` | `createPlayerCharacterAsync(...)` | `GamePlayerResponseModels.CreatePlayerCharacterOperationResponse` |
| `createPlayerItem` | `GamePlayerModels.ServerCreatePlayerItemRequestData` | `createPlayerItemAsync(...)` | `GamePlayerResponseModels.CreatePlayerItemOperationResponse` |
| `joinGroup` | `GamePlayerModels.ServerJoinGroupRequestData` | `joinGroupAsync(...)` | `GamePlayerResponseModels.JoinGroupOperationResponse` |
| `leaveGroup` | `GamePlayerModels.ServerLeaveGroupRequestData` | `leaveGroupAsync(...)` | `GamePlayerResponseModels.LeaveGroupOperationResponse` |
| `removePlayerCharacter` | `GamePlayerModels.ServerRemovePlayerCharacterRequestData` | `removePlayerCharacterAsync(...)` | `GamePlayerResponseModels.RemovePlayerCharacterOperationResponse` |
| `removePlayerFriend` | `GamePlayerModels.ServerRemovePlayerFriendRequestData` | `removePlayerFriendAsync(...)` | `GamePlayerResponseModels.RemovePlayerFriendOperationResponse` |
| `removePlayerItem` | `GamePlayerModels.ServerRemovePlayerItemRequestData` | `removePlayerItemAsync(...)` | `GamePlayerResponseModels.RemovePlayerItemOperationResponse` |
| `removeSegment` | `GamePlayerModels.ServerRemoveSegmentRequestData` | `removeSegmentAsync(...)` | `GamePlayerResponseModels.RemoveSegmentOperationResponse` |
| `removeTag` | `GamePlayerModels.ServerRemoveTagRequestData` | `removeTagAsync(...)` | `GamePlayerResponseModels.RemoveTagOperationResponse` |
| `setAvatar` | `GamePlayerModels.ServerSetAvatarRequestData` | `setAvatarAsync(...)` | `GamePlayerResponseModels.SetAvatarOperationResponse` |
| `setCountryCode` | `GamePlayerModels.ServerSetCountryCodeRequestData` | `setCountryCodeAsync(...)` | `GamePlayerResponseModels.SetCountryCodeOperationResponse` |
| `setCustomData` | `GamePlayerModels.ServerSetCustomDataRequestData` | `setCustomDataAsync(...)` | `GamePlayerResponseModels.SetCustomDataOperationResponse` |
| `setDisplayName` | `GamePlayerModels.ServerSetDisplayNameRequestData` | `setDisplayNameAsync(...)` | `GamePlayerResponseModels.SetDisplayNameOperationResponse` |
| `setPlayerBan` | `GamePlayerModels.ServerSetPlayerBanRequestData` | `setPlayerBanAsync(...)` | `GamePlayerResponseModels.SetPlayerBanOperationResponse` |
| `changePlayerCurrency` | `GamePlayerModels.ServerChangePlayerCurrencyRequestData` | `changePlayerCurrencyAsync(...)` | `GamePlayerResponseModels.ChangePlayerCurrencyOperationResponse` |
| `setPlayerData` | `GamePlayerModels.ServerSetPlayerDataRequestData` | `setPlayerDataAsync(...)` | `GamePlayerResponseModels.SetPlayerDataOperationResponse` |
| `changePlayerStatistics` | `GamePlayerModels.ServerChangePlayerStatisticsRequestData` | `changePlayerStatisticsAsync(...)` | `GamePlayerResponseModels.ChangePlayerStatisticsOperationResponse` |
| `setTag` | `GamePlayerModels.ServerSetTagRequestData` | `setTagAsync(...)` | `GamePlayerResponseModels.SetTagOperationResponse` |
| `getCurrencyLeaderboard` | `GamePlayerModels.ServerGetCurrencyLeaderboardRequestData` | `getCurrencyLeaderboardAsync(...)` | `GamePlayerResponseModels.GetCurrencyLeaderboardOperationResponse` |
| `getLastLoginLeaderboard` | `GamePlayerModels.ServerGetLastLoginLeaderboardRequestData` | `getLastLoginLeaderboardAsync(...)` | `GamePlayerResponseModels.GetLastLoginLeaderboardOperationResponse` |
| `getCreateLeaderboard` | `GamePlayerModels.ServerGetCreateLeaderboardRequestData` | `getCreateLeaderboardAsync(...)` | `GamePlayerResponseModels.GetCreateLeaderboardOperationResponse` |
| `getStatisticsLog` | `GamePlayerModels.ServerGetStatisticsLogRequestData` | `getStatisticsLogAsync(...)` | `GamePlayerResponseModels.GetStatisticsLogOperationResponse` |
| `getCurrencyLog` | `GamePlayerModels.ServerGetCurrencyLogRequestData` | `getCurrencyLogAsync(...)` | `GamePlayerResponseModels.GetCurrencyLogOperationResponse` |


## Admin methods (`GNNetwork.gamePlayer.admin.*`)

| Method | Request DTO | Async form | Response class |
|--------|-------------|------------|----------------|
| `addPlayerFriend` | `GamePlayerModels.AdminAddPlayerFriendRequestData` | `addPlayerFriendAsync(...)` | `GamePlayerResponseModels.AddPlayerFriendOperationResponse` |
| `addSegment` | `GamePlayerModels.AdminAddSegmentRequestData` | `addSegmentAsync(...)` | `GamePlayerResponseModels.AddSegmentOperationResponse` |
| `getAvatar` | `GamePlayerModels.AdminGetAvatarRequestData` | `getAvatarAsync(...)` | `GamePlayerResponseModels.GetAvatarOperationResponse` |
| `getCountryCode` | `GamePlayerModels.AdminGetCountryCodeRequestData` | `getCountryCodeAsync(...)` | `GamePlayerResponseModels.GetCountryCodeOperationResponse` |
| `getCustomData` | `GamePlayerModels.AdminGetCustomDataRequestData` | `getCustomDataAsync(...)` | `GamePlayerResponseModels.GetCustomDataOperationResponse` |
| `getDisplayName` | `GamePlayerModels.AdminGetDisplayNameRequestData` | `getDisplayNameAsync(...)` | `GamePlayerResponseModels.GetDisplayNameOperationResponse` |
| `getFriendStatisticsLeaderboardAroundPlayer` | `GamePlayerModels.AdminGetFriendStatisticsLeaderboardAroundPlayerRequestData` | `getFriendStatisticsLeaderboardAroundPlayerAsync(...)` | `GamePlayerResponseModels.GetFriendStatisticsLeaderboardAroundPlayerOperationResponse` |
| `getFriendStatisticsLeaderboard` | `GamePlayerModels.AdminGetFriendStatisticsLeaderboardRequestData` | `getFriendStatisticsLeaderboardAsync(...)` | `GamePlayerResponseModels.GetFriendStatisticsLeaderboardOperationResponse` |
| `getIpAddressCreate` | `GamePlayerModels.AdminGetIpAddressCreateRequestData` | `getIpAddressCreateAsync(...)` | `GamePlayerResponseModels.GetIpAddressCreateOperationResponse` |
| `getOnlineStatus` | `GamePlayerModels.AdminGetOnlineStatusRequestData` | `getOnlineStatusAsync(...)` | `GamePlayerResponseModels.GetOnlineStatusOperationResponse` |
| `getPlayerBan` | `GamePlayerModels.AdminGetPlayerBanRequestData` | `getPlayerBanAsync(...)` | `GamePlayerResponseModels.GetPlayerBanOperationResponse` |
| `getPlayerCharacter` | `GamePlayerModels.AdminGetPlayerCharacterRequestData` | `getPlayerCharacterAsync(...)` | `GamePlayerResponseModels.GetPlayerCharacterOperationResponse` |
| `getPlayerCurrency` | `GamePlayerModels.AdminGetPlayerCurrencyRequestData` | `getPlayerCurrencyAsync(...)` | `GamePlayerResponseModels.GetPlayerCurrencyOperationResponse` |
| `getPlayerData` | `GamePlayerModels.AdminGetPlayerDataRequestData` | `getPlayerDataAsync(...)` | `GamePlayerResponseModels.GetPlayerDataOperationResponse` |
| `getPlayerFriend` | `GamePlayerModels.AdminGetPlayerFriendRequestData` | `getPlayerFriendAsync(...)` | `GamePlayerResponseModels.GetPlayerFriendOperationResponse` |
| `getPlayerGroup` | `GamePlayerModels.AdminGetPlayerGroupRequestData` | `getPlayerGroupAsync(...)` | `GamePlayerResponseModels.GetPlayerGroupOperationResponse` |
| `getPlayerInformation` | `GamePlayerModels.AdminGetPlayerInformationRequestData` | `getPlayerInformationAsync(...)` | `GamePlayerResponseModels.GetPlayerInformationOperationResponse` |
| `getPlayerInventory` | `GamePlayerModels.AdminGetPlayerInventoryRequestData` | `getPlayerInventoryAsync(...)` | `GamePlayerResponseModels.GetPlayerInventoryOperationResponse` |
| `getPlayerStatistics` | `GamePlayerModels.AdminGetPlayerStatisticsRequestData` | `getPlayerStatisticsAsync(...)` | `GamePlayerResponseModels.GetPlayerStatisticsOperationResponse` |
| `getPlayersWithDisplayName` | `GamePlayerModels.AdminGetPlayersWithDisplayNameRequestData` | `getPlayersWithDisplayNameAsync(...)` | `GamePlayerResponseModels.GetPlayersWithDisplayNameOperationResponse` |
| `getPlayersWithSegment` | `GamePlayerModels.AdminGetPlayersWithSegmentRequestData` | `getPlayersWithSegmentAsync(...)` | `GamePlayerResponseModels.GetPlayersWithSegmentOperationResponse` |
| `getPlayersWithTag` | `GamePlayerModels.AdminGetPlayersWithTagRequestData` | `getPlayersWithTagAsync(...)` | `GamePlayerResponseModels.GetPlayersWithTagOperationResponse` |
| `getSegment` | `GamePlayerModels.AdminGetSegmentRequestData` | `getSegmentAsync(...)` | `GamePlayerResponseModels.GetSegmentOperationResponse` |
| `getStatisticsLeaderboardAroundPlayer` | `GamePlayerModels.AdminGetStatisticsLeaderboardAroundPlayerRequestData` | `getStatisticsLeaderboardAroundPlayerAsync(...)` | `GamePlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse` |
| `getStatisticsLeaderboard` | `GamePlayerModels.AdminGetStatisticsLeaderboardRequestData` | `getStatisticsLeaderboardAsync(...)` | `GamePlayerResponseModels.GetStatisticsLeaderboardOperationResponse` |
| `getTag` | `GamePlayerModels.AdminGetTagRequestData` | `getTagAsync(...)` | `GamePlayerResponseModels.GetTagOperationResponse` |
| `getTsCreate` | `GamePlayerModels.AdminGetTsCreateRequestData` | `getTsCreateAsync(...)` | `GamePlayerResponseModels.GetTsCreateOperationResponse` |
| `getTsLastLogin` | `GamePlayerModels.AdminGetTsLastLoginRequestData` | `getTsLastLoginAsync(...)` | `GamePlayerResponseModels.GetTsLastLoginOperationResponse` |
| `createGroup` | `GamePlayerModels.AdminCreateGroupRequestData` | `createGroupAsync(...)` | `GamePlayerResponseModels.CreateGroupOperationResponse` |
| `createPlayerCharacter` | `GamePlayerModels.AdminCreatePlayerCharacterRequestData` | `createPlayerCharacterAsync(...)` | `GamePlayerResponseModels.CreatePlayerCharacterOperationResponse` |
| `createPlayerItem` | `GamePlayerModels.AdminCreatePlayerItemRequestData` | `createPlayerItemAsync(...)` | `GamePlayerResponseModels.CreatePlayerItemOperationResponse` |
| `joinGroup` | `GamePlayerModels.AdminJoinGroupRequestData` | `joinGroupAsync(...)` | `GamePlayerResponseModels.JoinGroupOperationResponse` |
| `leaveGroup` | `GamePlayerModels.AdminLeaveGroupRequestData` | `leaveGroupAsync(...)` | `GamePlayerResponseModels.LeaveGroupOperationResponse` |
| `removePlayerCharacter` | `GamePlayerModels.AdminRemovePlayerCharacterRequestData` | `removePlayerCharacterAsync(...)` | `GamePlayerResponseModels.RemovePlayerCharacterOperationResponse` |
| `removePlayerFriend` | `GamePlayerModels.AdminRemovePlayerFriendRequestData` | `removePlayerFriendAsync(...)` | `GamePlayerResponseModels.RemovePlayerFriendOperationResponse` |
| `removePlayerItem` | `GamePlayerModels.AdminRemovePlayerItemRequestData` | `removePlayerItemAsync(...)` | `GamePlayerResponseModels.RemovePlayerItemOperationResponse` |
| `removeSegment` | `GamePlayerModels.AdminRemoveSegmentRequestData` | `removeSegmentAsync(...)` | `GamePlayerResponseModels.RemoveSegmentOperationResponse` |
| `removeTag` | `GamePlayerModels.AdminRemoveTagRequestData` | `removeTagAsync(...)` | `GamePlayerResponseModels.RemoveTagOperationResponse` |
| `setAvatar` | `GamePlayerModels.AdminSetAvatarRequestData` | `setAvatarAsync(...)` | `GamePlayerResponseModels.SetAvatarOperationResponse` |
| `setCountryCode` | `GamePlayerModels.AdminSetCountryCodeRequestData` | `setCountryCodeAsync(...)` | `GamePlayerResponseModels.SetCountryCodeOperationResponse` |
| `setCustomData` | `GamePlayerModels.AdminSetCustomDataRequestData` | `setCustomDataAsync(...)` | `GamePlayerResponseModels.SetCustomDataOperationResponse` |
| `setDisplayName` | `GamePlayerModels.AdminSetDisplayNameRequestData` | `setDisplayNameAsync(...)` | `GamePlayerResponseModels.SetDisplayNameOperationResponse` |
| `setPlayerBan` | `GamePlayerModels.AdminSetPlayerBanRequestData` | `setPlayerBanAsync(...)` | `GamePlayerResponseModels.SetPlayerBanOperationResponse` |
| `changePlayerCurrency` | `GamePlayerModels.AdminChangePlayerCurrencyRequestData` | `changePlayerCurrencyAsync(...)` | `GamePlayerResponseModels.ChangePlayerCurrencyOperationResponse` |
| `setPlayerData` | `GamePlayerModels.AdminSetPlayerDataRequestData` | `setPlayerDataAsync(...)` | `GamePlayerResponseModels.SetPlayerDataOperationResponse` |
| `changePlayerStatistics` | `GamePlayerModels.AdminChangePlayerStatisticsRequestData` | `changePlayerStatisticsAsync(...)` | `GamePlayerResponseModels.ChangePlayerStatisticsOperationResponse` |
| `setTag` | `GamePlayerModels.AdminSetTagRequestData` | `setTagAsync(...)` | `GamePlayerResponseModels.SetTagOperationResponse` |
| `getCurrencyLeaderboard` | `GamePlayerModels.AdminGetCurrencyLeaderboardRequestData` | `getCurrencyLeaderboardAsync(...)` | `GamePlayerResponseModels.GetCurrencyLeaderboardOperationResponse` |
| `getLastLoginLeaderboard` | `GamePlayerModels.AdminGetLastLoginLeaderboardRequestData` | `getLastLoginLeaderboardAsync(...)` | `GamePlayerResponseModels.GetLastLoginLeaderboardOperationResponse` |
| `getCreateLeaderboard` | `GamePlayerModels.AdminGetCreateLeaderboardRequestData` | `getCreateLeaderboardAsync(...)` | `GamePlayerResponseModels.GetCreateLeaderboardOperationResponse` |
| `getStatisticsLog` | `GamePlayerModels.AdminGetStatisticsLogRequestData` | `getStatisticsLogAsync(...)` | `GamePlayerResponseModels.GetStatisticsLogOperationResponse` |
| `getCurrencyLog` | `GamePlayerModels.AdminGetCurrencyLogRequestData` | `getCurrencyLogAsync(...)` | `GamePlayerResponseModels.GetCurrencyLogOperationResponse` |


## Ví dụ tối thiểu

```ts
import { GNNetwork, ReturnCode, ErrorCode } from "@xmobitea/gn-typescript-client";

const res = await GNNetwork.gamePlayer.addPlayerFriendAsync({ /* GamePlayerModels.AddPlayerFriendRequestData */ } as any);
if (res.returnCode !== ReturnCode.Ok) return;
if (res.errorCode !== ErrorCode.Ok) return;
// res.responseData có typed payload
```
