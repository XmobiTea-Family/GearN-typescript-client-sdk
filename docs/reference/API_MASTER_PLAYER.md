# API Reference: MasterPlayerApi

Master-player account: identity linking, profile, contact info, external providers.

Domain guide: [guides/MASTER_PLAYER.md](../guides/MASTER_PLAYER.md). DTO shapes: [DTO_INDEX.md](DTO_INDEX.md#master-player).

## Namespaces

- `GNNetwork.masterPlayer` — `RequestRole.Client`
- `GNNetwork.masterPlayer.server` — `RequestRole.Server`
- `GNNetwork.masterPlayer.admin` — `RequestRole.Admin`

## Convention

Mỗi method dưới đây có 2 form — callback và `*Async()` Promise. Ưu tiên `*Async()`.

```ts
// Callback
GNNetwork.masterPlayer.<method>(requestData, onResponse?, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?);

// Async
const res = await GNNetwork.masterPlayer.<method>Async(requestData, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?);
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


## Client methods (`GNNetwork.masterPlayer.*`)

| Method | Request DTO | Async form | Response class |
|--------|-------------|------------|----------------|
| `addSegment` | `MasterPlayerModels.AddSegmentRequestData` | `addSegmentAsync(...)` | `MasterPlayerResponseModels.AddSegmentOperationResponse` |
| `changeAccountPassword` | `MasterPlayerModels.ChangeAccountPasswordRequestData` | `changeAccountPasswordAsync(...)` | `MasterPlayerResponseModels.ChangeAccountPasswordOperationResponse` |
| `getAvatar` | `MasterPlayerModels.GetAvatarRequestData` | `getAvatarAsync(...)` | `MasterPlayerResponseModels.GetAvatarOperationResponse` |
| `getCountryCode` | `MasterPlayerModels.GetCountryCodeRequestData` | `getCountryCodeAsync(...)` | `MasterPlayerResponseModels.GetCountryCodeOperationResponse` |
| `getCustomData` | `MasterPlayerModels.GetCustomDataRequestData` | `getCustomDataAsync(...)` | `MasterPlayerResponseModels.GetCustomDataOperationResponse` |
| `getDisplayName` | `MasterPlayerModels.GetDisplayNameRequestData` | `getDisplayNameAsync(...)` | `MasterPlayerResponseModels.GetDisplayNameOperationResponse` |
| `getEmail` | `MasterPlayerModels.GetEmailRequestData` | `getEmailAsync(...)` | `MasterPlayerResponseModels.GetEmailOperationResponse` |
| `getExternal` | `MasterPlayerModels.GetExternalRequestData` | `getExternalAsync(...)` | `MasterPlayerResponseModels.GetExternalOperationResponse` |
| `getIpAddressCreate` | `MasterPlayerModels.GetIpAddressCreateRequestData` | `getIpAddressCreateAsync(...)` | `MasterPlayerResponseModels.GetIpAddressCreateOperationResponse` |
| `getPlayerBan` | `MasterPlayerModels.GetPlayerBanRequestData` | `getPlayerBanAsync(...)` | `MasterPlayerResponseModels.GetPlayerBanOperationResponse` |
| `getPlayerCurrency` | `MasterPlayerModels.GetPlayerCurrencyRequestData` | `getPlayerCurrencyAsync(...)` | `MasterPlayerResponseModels.GetPlayerCurrencyOperationResponse` |
| `getPlayerData` | `MasterPlayerModels.GetPlayerDataRequestData` | `getPlayerDataAsync(...)` | `MasterPlayerResponseModels.GetPlayerDataOperationResponse` |
| `getPlayerInformation` | `MasterPlayerModels.GetPlayerInformationRequestData` | `getPlayerInformationAsync(...)` | `MasterPlayerResponseModels.GetPlayerInformationOperationResponse` |
| `getPlayerStatistics` | `MasterPlayerModels.GetPlayerStatisticsRequestData` | `getPlayerStatisticsAsync(...)` | `MasterPlayerResponseModels.GetPlayerStatisticsOperationResponse` |
| `getPlayersWithApple` | `MasterPlayerModels.GetPlayersWithAppleRequestData` | `getPlayersWithAppleAsync(...)` | `MasterPlayerResponseModels.GetPlayersWithAppleOperationResponse` |
| `getPlayersWithDisplayName` | `MasterPlayerModels.GetPlayersWithDisplayNameRequestData` | `getPlayersWithDisplayNameAsync(...)` | `MasterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse` |
| `getPlayersWithFacebook` | `MasterPlayerModels.GetPlayersWithFacebookRequestData` | `getPlayersWithFacebookAsync(...)` | `MasterPlayerResponseModels.GetPlayersWithFacebookOperationResponse` |
| `getPlayersWithGenericService` | `MasterPlayerModels.GetPlayersWithGenericServiceRequestData` | `getPlayersWithGenericServiceAsync(...)` | `MasterPlayerResponseModels.GetPlayersWithGenericServiceOperationResponse` |
| `getPlayersWithGoogle` | `MasterPlayerModels.GetPlayersWithGoogleRequestData` | `getPlayersWithGoogleAsync(...)` | `MasterPlayerResponseModels.GetPlayersWithGoogleOperationResponse` |
| `getPlayersWithGooglePlayGameService` | `MasterPlayerModels.GetPlayersWithGooglePlayGameServiceRequestData` | `getPlayersWithGooglePlayGameServiceAsync(...)` | `MasterPlayerResponseModels.GetPlayersWithGooglePlayGameServiceOperationResponse` |
| `getPlayersWithGameCenter` | `MasterPlayerModels.GetPlayersWithGameCenterRequestData` | `getPlayersWithGameCenterAsync(...)` | `MasterPlayerResponseModels.GetPlayersWithGameCenterOperationResponse` |
| `getPlayersWithSegment` | `MasterPlayerModels.GetPlayersWithSegmentRequestData` | `getPlayersWithSegmentAsync(...)` | `MasterPlayerResponseModels.GetPlayersWithSegmentOperationResponse` |
| `getPlayersWithTag` | `MasterPlayerModels.GetPlayersWithTagRequestData` | `getPlayersWithTagAsync(...)` | `MasterPlayerResponseModels.GetPlayersWithTagOperationResponse` |
| `getSegment` | `MasterPlayerModels.GetSegmentRequestData` | `getSegmentAsync(...)` | `MasterPlayerResponseModels.GetSegmentOperationResponse` |
| `getStatisticsLeaderboardAroundPlayer` | `MasterPlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData` | `getStatisticsLeaderboardAroundPlayerAsync(...)` | `MasterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse` |
| `getStatisticsLeaderboard` | `MasterPlayerModels.GetStatisticsLeaderboardRequestData` | `getStatisticsLeaderboardAsync(...)` | `MasterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse` |
| `getTag` | `MasterPlayerModels.GetTagRequestData` | `getTagAsync(...)` | `MasterPlayerResponseModels.GetTagOperationResponse` |
| `getTsCreate` | `MasterPlayerModels.GetTsCreateRequestData` | `getTsCreateAsync(...)` | `MasterPlayerResponseModels.GetTsCreateOperationResponse` |
| `getTsLastLogin` | `MasterPlayerModels.GetTsLastLoginRequestData` | `getTsLastLoginAsync(...)` | `MasterPlayerResponseModels.GetTsLastLoginOperationResponse` |
| `linkAccount` | `MasterPlayerModels.LinkAccountRequestData` | `linkAccountAsync(...)` | `MasterPlayerResponseModels.LinkAccountOperationResponse` |
| `linkAndroidDeviceId` | `MasterPlayerModels.LinkAndroidDeviceIdRequestData` | `linkAndroidDeviceIdAsync(...)` | `MasterPlayerResponseModels.LinkAndroidDeviceIdOperationResponse` |
| `linkApple` | `MasterPlayerModels.LinkAppleRequestData` | `linkAppleAsync(...)` | `MasterPlayerResponseModels.LinkAppleOperationResponse` |
| `linkCustomDeviceId` | `MasterPlayerModels.LinkCustomDeviceIdRequestData` | `linkCustomDeviceIdAsync(...)` | `MasterPlayerResponseModels.LinkCustomDeviceIdOperationResponse` |
| `linkCustomId` | `MasterPlayerModels.LinkCustomIdRequestData` | `linkCustomIdAsync(...)` | `MasterPlayerResponseModels.LinkCustomIdOperationResponse` |
| `linkEditorDeviceId` | `MasterPlayerModels.LinkEditorDeviceIdRequestData` | `linkEditorDeviceIdAsync(...)` | `MasterPlayerResponseModels.LinkEditorDeviceIdOperationResponse` |
| `linkFacebook` | `MasterPlayerModels.LinkFacebookRequestData` | `linkFacebookAsync(...)` | `MasterPlayerResponseModels.LinkFacebookOperationResponse` |
| `linkGenericService` | `MasterPlayerModels.LinkGenericServiceRequestData` | `linkGenericServiceAsync(...)` | `MasterPlayerResponseModels.LinkGenericServiceOperationResponse` |
| `linkGoogle` | `MasterPlayerModels.LinkGoogleRequestData` | `linkGoogleAsync(...)` | `MasterPlayerResponseModels.LinkGoogleOperationResponse` |
| `linkGooglePlayGameService` | `MasterPlayerModels.LinkGooglePlayGameServiceRequestData` | `linkGooglePlayGameServiceAsync(...)` | `MasterPlayerResponseModels.LinkGooglePlayGameServiceOperationResponse` |
| `linkGameCenter` | `MasterPlayerModels.LinkGameCenterRequestData` | `linkGameCenterAsync(...)` | `MasterPlayerResponseModels.LinkGameCenterOperationResponse` |
| `linkiOSDeviceId` | `MasterPlayerModels.LinkiOSDeviceIdRequestData` | `linkiOSDeviceIdAsync(...)` | `MasterPlayerResponseModels.LinkiOSDeviceIdOperationResponse` |
| `linkLinuxDeviceId` | `MasterPlayerModels.LinkLinuxDeviceIdRequestData` | `linkLinuxDeviceIdAsync(...)` | `MasterPlayerResponseModels.LinkLinuxDeviceIdOperationResponse` |
| `linkMacOSDeviceId` | `MasterPlayerModels.LinkMacOSDeviceIdRequestData` | `linkMacOSDeviceIdAsync(...)` | `MasterPlayerResponseModels.LinkMacOSDeviceIdOperationResponse` |
| `linkWindowsDeviceId` | `MasterPlayerModels.LinkWindowsDeviceIdRequestData` | `linkWindowsDeviceIdAsync(...)` | `MasterPlayerResponseModels.LinkWindowsDeviceIdOperationResponse` |
| `linkWindowsPhoneDeviceId` | `MasterPlayerModels.LinkWindowsPhoneDeviceIdRequestData` | `linkWindowsPhoneDeviceIdAsync(...)` | `MasterPlayerResponseModels.LinkWindowsPhoneDeviceIdOperationResponse` |
| `removeSegment` | `MasterPlayerModels.RemoveSegmentRequestData` | `removeSegmentAsync(...)` | `MasterPlayerResponseModels.RemoveSegmentOperationResponse` |
| `removeTag` | `MasterPlayerModels.RemoveTagRequestData` | `removeTagAsync(...)` | `MasterPlayerResponseModels.RemoveTagOperationResponse` |
| `resetAccountPassword` | `MasterPlayerModels.ResetAccountPasswordRequestData` | `resetAccountPasswordAsync(...)` | `MasterPlayerResponseModels.ResetAccountPasswordOperationResponse` |
| `setAvatar` | `MasterPlayerModels.SetAvatarRequestData` | `setAvatarAsync(...)` | `MasterPlayerResponseModels.SetAvatarOperationResponse` |
| `setCountryCode` | `MasterPlayerModels.SetCountryCodeRequestData` | `setCountryCodeAsync(...)` | `MasterPlayerResponseModels.SetCountryCodeOperationResponse` |
| `setCustomData` | `MasterPlayerModels.SetCustomDataRequestData` | `setCustomDataAsync(...)` | `MasterPlayerResponseModels.SetCustomDataOperationResponse` |
| `setDisplayName` | `MasterPlayerModels.SetDisplayNameRequestData` | `setDisplayNameAsync(...)` | `MasterPlayerResponseModels.SetDisplayNameOperationResponse` |
| `setEmail` | `MasterPlayerModels.SetEmailRequestData` | `setEmailAsync(...)` | `MasterPlayerResponseModels.SetEmailOperationResponse` |
| `setPlayerBan` | `MasterPlayerModels.SetPlayerBanRequestData` | `setPlayerBanAsync(...)` | `MasterPlayerResponseModels.SetPlayerBanOperationResponse` |
| `changePlayerCurrency` | `MasterPlayerModels.ChangePlayerCurrencyRequestData` | `changePlayerCurrencyAsync(...)` | `MasterPlayerResponseModels.ChangePlayerCurrencyOperationResponse` |
| `setPlayerData` | `MasterPlayerModels.SetPlayerDataRequestData` | `setPlayerDataAsync(...)` | `MasterPlayerResponseModels.SetPlayerDataOperationResponse` |
| `changePlayerStatistics` | `MasterPlayerModels.ChangePlayerStatisticsRequestData` | `changePlayerStatisticsAsync(...)` | `MasterPlayerResponseModels.ChangePlayerStatisticsOperationResponse` |
| `setTag` | `MasterPlayerModels.SetTagRequestData` | `setTagAsync(...)` | `MasterPlayerResponseModels.SetTagOperationResponse` |
| `updateTsLastLogin` | `MasterPlayerModels.UpdateTsLastLoginRequestData` | `updateTsLastLoginAsync(...)` | `MasterPlayerResponseModels.UpdateTsLastLoginOperationResponse` |
| `unlinkAccount` | `MasterPlayerModels.UnlinkAccountRequestData` | `unlinkAccountAsync(...)` | `MasterPlayerResponseModels.UnlinkAccountOperationResponse` |
| `unlinkAndroidDeviceId` | `MasterPlayerModels.UnlinkAndroidDeviceIdRequestData` | `unlinkAndroidDeviceIdAsync(...)` | `MasterPlayerResponseModels.UnlinkAndroidDeviceIdOperationResponse` |
| `unlinkApple` | `MasterPlayerModels.UnlinkAppleRequestData` | `unlinkAppleAsync(...)` | `MasterPlayerResponseModels.UnlinkAppleOperationResponse` |
| `unlinkCustomDeviceId` | `MasterPlayerModels.UnlinkCustomDeviceIdRequestData` | `unlinkCustomDeviceIdAsync(...)` | `MasterPlayerResponseModels.UnlinkCustomDeviceIdOperationResponse` |
| `unlinkCustomId` | `MasterPlayerModels.UnlinkCustomIdRequestData` | `unlinkCustomIdAsync(...)` | `MasterPlayerResponseModels.UnlinkCustomIdOperationResponse` |
| `unlinkEditorDeviceId` | `MasterPlayerModels.UnlinkEditorDeviceIdRequestData` | `unlinkEditorDeviceIdAsync(...)` | `MasterPlayerResponseModels.UnlinkEditorDeviceIdOperationResponse` |
| `unlinkFacebook` | `MasterPlayerModels.UnlinkFacebookRequestData` | `unlinkFacebookAsync(...)` | `MasterPlayerResponseModels.UnlinkFacebookOperationResponse` |
| `unlinkGenericService` | `MasterPlayerModels.UnlinkGenericServiceRequestData` | `unlinkGenericServiceAsync(...)` | `MasterPlayerResponseModels.UnlinkGenericServiceOperationResponse` |
| `unlinkGoogle` | `MasterPlayerModels.UnlinkGoogleRequestData` | `unlinkGoogleAsync(...)` | `MasterPlayerResponseModels.UnlinkGoogleOperationResponse` |
| `unlinkGooglePlayGameService` | `MasterPlayerModels.UnlinkGooglePlayGameServiceRequestData` | `unlinkGooglePlayGameServiceAsync(...)` | `MasterPlayerResponseModels.UnlinkGooglePlayGameServiceOperationResponse` |
| `unlinkGameCenter` | `MasterPlayerModels.UnlinkGameCenterRequestData` | `unlinkGameCenterAsync(...)` | `MasterPlayerResponseModels.UnlinkGameCenterOperationResponse` |
| `unlinkiOSDeviceId` | `MasterPlayerModels.UnlinkiOSDeviceIdRequestData` | `unlinkiOSDeviceIdAsync(...)` | `MasterPlayerResponseModels.UnlinkiOSDeviceIdOperationResponse` |
| `unlinkLinuxDeviceId` | `MasterPlayerModels.UnlinkLinuxDeviceIdRequestData` | `unlinkLinuxDeviceIdAsync(...)` | `MasterPlayerResponseModels.UnlinkLinuxDeviceIdOperationResponse` |
| `unlinkMacOSDeviceId` | `MasterPlayerModels.UnlinkMacOSDeviceIdRequestData` | `unlinkMacOSDeviceIdAsync(...)` | `MasterPlayerResponseModels.UnlinkMacOSDeviceIdOperationResponse` |
| `unlinkWindowsDeviceId` | `MasterPlayerModels.UnlinkWindowsDeviceIdRequestData` | `unlinkWindowsDeviceIdAsync(...)` | `MasterPlayerResponseModels.UnlinkWindowsDeviceIdOperationResponse` |
| `unlinkWindowsPhoneDeviceId` | `MasterPlayerModels.UnlinkWindowsPhoneDeviceIdRequestData` | `unlinkWindowsPhoneDeviceIdAsync(...)` | `MasterPlayerResponseModels.UnlinkWindowsPhoneDeviceIdOperationResponse` |
| `getCurrencyLeaderboard` | `MasterPlayerModels.GetCurrencyLeaderboardRequestData` | `getCurrencyLeaderboardAsync(...)` | `MasterPlayerResponseModels.GetCurrencyLeaderboardOperationResponse` |
| `getCreateLeaderboard` | `MasterPlayerModels.GetCreateLeaderboardRequestData` | `getCreateLeaderboardAsync(...)` | `MasterPlayerResponseModels.GetCreateLeaderboardOperationResponse` |
| `getLastLoginLeaderboard` | `MasterPlayerModels.GetLastLoginLeaderboardRequestData` | `getLastLoginLeaderboardAsync(...)` | `MasterPlayerResponseModels.GetLastLoginLeaderboardOperationResponse` |
| `getStatisticsLog` | `MasterPlayerModels.GetStatisticsLogRequestData` | `getStatisticsLogAsync(...)` | `MasterPlayerResponseModels.GetStatisticsLogOperationResponse` |
| `getCurrencyLog` | `MasterPlayerModels.GetCurrencyLogRequestData` | `getCurrencyLogAsync(...)` | `MasterPlayerResponseModels.GetCurrencyLogOperationResponse` |
| `sendSocketOperationEvent` | `MasterPlayerModels.SendSocketOperationEventRequestData` | `sendSocketOperationEventAsync(...)` | `MasterPlayerResponseModels.SendSocketOperationEventOperationResponse` |
| `sendEmail` | `MasterPlayerModels.SendEmailRequestData` | `sendEmailAsync(...)` | `MasterPlayerResponseModels.SendEmailOperationResponse` |
| `addPushNotification` | `MasterPlayerModels.AddPushNotificationRequestData` | `addPushNotificationAsync(...)` | `MasterPlayerResponseModels.AddPushNotificationOperationResponse` |
| `removePushNotification` | `MasterPlayerModels.RemovePushNotificationRequestData` | `removePushNotificationAsync(...)` | `MasterPlayerResponseModels.RemovePushNotificationOperationResponse` |
| `getPushNotification` | `MasterPlayerModels.GetPushNotificationRequestData` | `getPushNotificationAsync(...)` | `MasterPlayerResponseModels.GetPushNotificationOperationResponse` |
| `sendPushNotification` | `MasterPlayerModels.SendPushNotificationRequestData` | `sendPushNotificationAsync(...)` | `MasterPlayerResponseModels.SendPushNotificationOperationResponse` |


## Server methods (`GNNetwork.masterPlayer.server.*`)

| Method | Request DTO | Async form | Response class |
|--------|-------------|------------|----------------|
| `addSegment` | `MasterPlayerModels.ServerAddSegmentRequestData` | `addSegmentAsync(...)` | `MasterPlayerResponseModels.AddSegmentOperationResponse` |
| `getAvatar` | `MasterPlayerModels.ServerGetAvatarRequestData` | `getAvatarAsync(...)` | `MasterPlayerResponseModels.GetAvatarOperationResponse` |
| `getCountryCode` | `MasterPlayerModels.ServerGetCountryCodeRequestData` | `getCountryCodeAsync(...)` | `MasterPlayerResponseModels.GetCountryCodeOperationResponse` |
| `getCustomData` | `MasterPlayerModels.ServerGetCustomDataRequestData` | `getCustomDataAsync(...)` | `MasterPlayerResponseModels.GetCustomDataOperationResponse` |
| `getDisplayName` | `MasterPlayerModels.ServerGetDisplayNameRequestData` | `getDisplayNameAsync(...)` | `MasterPlayerResponseModels.GetDisplayNameOperationResponse` |
| `getEmail` | `MasterPlayerModels.ServerGetEmailRequestData` | `getEmailAsync(...)` | `MasterPlayerResponseModels.GetEmailOperationResponse` |
| `getExternal` | `MasterPlayerModels.ServerGetExternalRequestData` | `getExternalAsync(...)` | `MasterPlayerResponseModels.GetExternalOperationResponse` |
| `getIpAddressCreate` | `MasterPlayerModels.ServerGetIpAddressCreateRequestData` | `getIpAddressCreateAsync(...)` | `MasterPlayerResponseModels.GetIpAddressCreateOperationResponse` |
| `getPlayerBan` | `MasterPlayerModels.ServerGetPlayerBanRequestData` | `getPlayerBanAsync(...)` | `MasterPlayerResponseModels.GetPlayerBanOperationResponse` |
| `getPlayerCurrency` | `MasterPlayerModels.ServerGetPlayerCurrencyRequestData` | `getPlayerCurrencyAsync(...)` | `MasterPlayerResponseModels.GetPlayerCurrencyOperationResponse` |
| `getPlayerData` | `MasterPlayerModels.ServerGetPlayerDataRequestData` | `getPlayerDataAsync(...)` | `MasterPlayerResponseModels.GetPlayerDataOperationResponse` |
| `getPlayerInformation` | `MasterPlayerModels.ServerGetPlayerInformationRequestData` | `getPlayerInformationAsync(...)` | `MasterPlayerResponseModels.GetPlayerInformationOperationResponse` |
| `getPlayerStatistics` | `MasterPlayerModels.ServerGetPlayerStatisticsRequestData` | `getPlayerStatisticsAsync(...)` | `MasterPlayerResponseModels.GetPlayerStatisticsOperationResponse` |
| `getPlayersWithApple` | `MasterPlayerModels.ServerGetPlayersWithAppleRequestData` | `getPlayersWithAppleAsync(...)` | `MasterPlayerResponseModels.GetPlayersWithAppleOperationResponse` |
| `getPlayersWithDisplayName` | `MasterPlayerModels.ServerGetPlayersWithDisplayNameRequestData` | `getPlayersWithDisplayNameAsync(...)` | `MasterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse` |
| `getPlayersWithFacebook` | `MasterPlayerModels.ServerGetPlayersWithFacebookRequestData` | `getPlayersWithFacebookAsync(...)` | `MasterPlayerResponseModels.GetPlayersWithFacebookOperationResponse` |
| `getPlayersWithGenericService` | `MasterPlayerModels.ServerGetPlayersWithGenericServiceRequestData` | `getPlayersWithGenericServiceAsync(...)` | `MasterPlayerResponseModels.GetPlayersWithGenericServiceOperationResponse` |
| `getPlayersWithGoogle` | `MasterPlayerModels.ServerGetPlayersWithGoogleRequestData` | `getPlayersWithGoogleAsync(...)` | `MasterPlayerResponseModels.GetPlayersWithGoogleOperationResponse` |
| `getPlayersWithGooglePlayGameService` | `MasterPlayerModels.ServerGetPlayersWithGooglePlayGameServiceRequestData` | `getPlayersWithGooglePlayGameServiceAsync(...)` | `MasterPlayerResponseModels.GetPlayersWithGooglePlayGameServiceOperationResponse` |
| `getPlayersWithGameCenter` | `MasterPlayerModels.ServerGetPlayersWithGameCenterRequestData` | `getPlayersWithGameCenterAsync(...)` | `MasterPlayerResponseModels.GetPlayersWithGameCenterOperationResponse` |
| `getPlayersWithSegment` | `MasterPlayerModels.ServerGetPlayersWithSegmentRequestData` | `getPlayersWithSegmentAsync(...)` | `MasterPlayerResponseModels.GetPlayersWithSegmentOperationResponse` |
| `getPlayersWithTag` | `MasterPlayerModels.ServerGetPlayersWithTagRequestData` | `getPlayersWithTagAsync(...)` | `MasterPlayerResponseModels.GetPlayersWithTagOperationResponse` |
| `getSegment` | `MasterPlayerModels.ServerGetSegmentRequestData` | `getSegmentAsync(...)` | `MasterPlayerResponseModels.GetSegmentOperationResponse` |
| `getStatisticsLeaderboardAroundPlayer` | `MasterPlayerModels.ServerGetStatisticsLeaderboardAroundPlayerRequestData` | `getStatisticsLeaderboardAroundPlayerAsync(...)` | `MasterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse` |
| `getStatisticsLeaderboard` | `MasterPlayerModels.ServerGetStatisticsLeaderboardRequestData` | `getStatisticsLeaderboardAsync(...)` | `MasterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse` |
| `getTag` | `MasterPlayerModels.ServerGetTagRequestData` | `getTagAsync(...)` | `MasterPlayerResponseModels.GetTagOperationResponse` |
| `getTsCreate` | `MasterPlayerModels.ServerGetTsCreateRequestData` | `getTsCreateAsync(...)` | `MasterPlayerResponseModels.GetTsCreateOperationResponse` |
| `getTsLastLogin` | `MasterPlayerModels.ServerGetTsLastLoginRequestData` | `getTsLastLoginAsync(...)` | `MasterPlayerResponseModels.GetTsLastLoginOperationResponse` |
| `linkAccount` | `MasterPlayerModels.ServerLinkAccountRequestData` | `linkAccountAsync(...)` | `MasterPlayerResponseModels.LinkAccountOperationResponse` |
| `linkAndroidDeviceId` | `MasterPlayerModels.ServerLinkAndroidDeviceIdRequestData` | `linkAndroidDeviceIdAsync(...)` | `MasterPlayerResponseModels.LinkAndroidDeviceIdOperationResponse` |
| `linkApple` | `MasterPlayerModels.ServerLinkAppleRequestData` | `linkAppleAsync(...)` | `MasterPlayerResponseModels.LinkAppleOperationResponse` |
| `linkCustomDeviceId` | `MasterPlayerModels.ServerLinkCustomDeviceIdRequestData` | `linkCustomDeviceIdAsync(...)` | `MasterPlayerResponseModels.LinkCustomDeviceIdOperationResponse` |
| `linkCustomId` | `MasterPlayerModels.ServerLinkCustomIdRequestData` | `linkCustomIdAsync(...)` | `MasterPlayerResponseModels.LinkCustomIdOperationResponse` |
| `linkEditorDeviceId` | `MasterPlayerModels.ServerLinkEditorDeviceIdRequestData` | `linkEditorDeviceIdAsync(...)` | `MasterPlayerResponseModels.LinkEditorDeviceIdOperationResponse` |
| `linkFacebook` | `MasterPlayerModels.ServerLinkFacebookRequestData` | `linkFacebookAsync(...)` | `MasterPlayerResponseModels.LinkFacebookOperationResponse` |
| `linkGenericService` | `MasterPlayerModels.ServerLinkGenericServiceRequestData` | `linkGenericServiceAsync(...)` | `MasterPlayerResponseModels.LinkGenericServiceOperationResponse` |
| `linkGoogle` | `MasterPlayerModels.ServerLinkGoogleRequestData` | `linkGoogleAsync(...)` | `MasterPlayerResponseModels.LinkGoogleOperationResponse` |
| `linkGooglePlayGameService` | `MasterPlayerModels.ServerLinkGooglePlayGameServiceRequestData` | `linkGooglePlayGameServiceAsync(...)` | `MasterPlayerResponseModels.LinkGooglePlayGameServiceOperationResponse` |
| `linkGameCenter` | `MasterPlayerModels.ServerLinkGameCenterRequestData` | `linkGameCenterAsync(...)` | `MasterPlayerResponseModels.LinkGameCenterOperationResponse` |
| `linkiOSDeviceId` | `MasterPlayerModels.ServerLinkiOSDeviceIdRequestData` | `linkiOSDeviceIdAsync(...)` | `MasterPlayerResponseModels.LinkiOSDeviceIdOperationResponse` |
| `linkLinuxDeviceId` | `MasterPlayerModels.ServerLinkLinuxDeviceIdRequestData` | `linkLinuxDeviceIdAsync(...)` | `MasterPlayerResponseModels.LinkLinuxDeviceIdOperationResponse` |
| `linkMacOSDeviceId` | `MasterPlayerModels.ServerLinkMacOSDeviceIdRequestData` | `linkMacOSDeviceIdAsync(...)` | `MasterPlayerResponseModels.LinkMacOSDeviceIdOperationResponse` |
| `linkWindowsDeviceId` | `MasterPlayerModels.ServerLinkWindowsDeviceIdRequestData` | `linkWindowsDeviceIdAsync(...)` | `MasterPlayerResponseModels.LinkWindowsDeviceIdOperationResponse` |
| `linkWindowsPhoneDeviceId` | `MasterPlayerModels.ServerLinkWindowsPhoneDeviceIdRequestData` | `linkWindowsPhoneDeviceIdAsync(...)` | `MasterPlayerResponseModels.LinkWindowsPhoneDeviceIdOperationResponse` |
| `removeSegment` | `MasterPlayerModels.ServerRemoveSegmentRequestData` | `removeSegmentAsync(...)` | `MasterPlayerResponseModels.RemoveSegmentOperationResponse` |
| `removeTag` | `MasterPlayerModels.ServerRemoveTagRequestData` | `removeTagAsync(...)` | `MasterPlayerResponseModels.RemoveTagOperationResponse` |
| `resetAccountPassword` | `MasterPlayerModels.ServerResetAccountPasswordRequestData` | `resetAccountPasswordAsync(...)` | `MasterPlayerResponseModels.ResetAccountPasswordOperationResponse` |
| `setAvatar` | `MasterPlayerModels.ServerSetAvatarRequestData` | `setAvatarAsync(...)` | `MasterPlayerResponseModels.SetAvatarOperationResponse` |
| `setCountryCode` | `MasterPlayerModels.ServerSetCountryCodeRequestData` | `setCountryCodeAsync(...)` | `MasterPlayerResponseModels.SetCountryCodeOperationResponse` |
| `setCustomData` | `MasterPlayerModels.ServerSetCustomDataRequestData` | `setCustomDataAsync(...)` | `MasterPlayerResponseModels.SetCustomDataOperationResponse` |
| `setDisplayName` | `MasterPlayerModels.ServerSetDisplayNameRequestData` | `setDisplayNameAsync(...)` | `MasterPlayerResponseModels.SetDisplayNameOperationResponse` |
| `setEmail` | `MasterPlayerModels.ServerSetEmailRequestData` | `setEmailAsync(...)` | `MasterPlayerResponseModels.SetEmailOperationResponse` |
| `setPlayerBan` | `MasterPlayerModels.ServerSetPlayerBanRequestData` | `setPlayerBanAsync(...)` | `MasterPlayerResponseModels.SetPlayerBanOperationResponse` |
| `changePlayerCurrency` | `MasterPlayerModels.ServerChangePlayerCurrencyRequestData` | `changePlayerCurrencyAsync(...)` | `MasterPlayerResponseModels.ChangePlayerCurrencyOperationResponse` |
| `setPlayerData` | `MasterPlayerModels.ServerSetPlayerDataRequestData` | `setPlayerDataAsync(...)` | `MasterPlayerResponseModels.SetPlayerDataOperationResponse` |
| `changePlayerStatistics` | `MasterPlayerModels.ServerChangePlayerStatisticsRequestData` | `changePlayerStatisticsAsync(...)` | `MasterPlayerResponseModels.ChangePlayerStatisticsOperationResponse` |
| `setTag` | `MasterPlayerModels.ServerSetTagRequestData` | `setTagAsync(...)` | `MasterPlayerResponseModels.SetTagOperationResponse` |
| `updateTsLastLogin` | `MasterPlayerModels.ServerUpdateTsLastLoginRequestData` | `updateTsLastLoginAsync(...)` | `MasterPlayerResponseModels.UpdateTsLastLoginOperationResponse` |
| `unlinkAccount` | `MasterPlayerModels.ServerUnlinkAccountRequestData` | `unlinkAccountAsync(...)` | `MasterPlayerResponseModels.UnlinkAccountOperationResponse` |
| `unlinkAndroidDeviceId` | `MasterPlayerModels.ServerUnlinkAndroidDeviceIdRequestData` | `unlinkAndroidDeviceIdAsync(...)` | `MasterPlayerResponseModels.UnlinkAndroidDeviceIdOperationResponse` |
| `unlinkApple` | `MasterPlayerModels.ServerUnlinkAppleRequestData` | `unlinkAppleAsync(...)` | `MasterPlayerResponseModels.UnlinkAppleOperationResponse` |
| `unlinkCustomDeviceId` | `MasterPlayerModels.ServerUnlinkCustomDeviceIdRequestData` | `unlinkCustomDeviceIdAsync(...)` | `MasterPlayerResponseModels.UnlinkCustomDeviceIdOperationResponse` |
| `unlinkCustomId` | `MasterPlayerModels.ServerUnlinkCustomIdRequestData` | `unlinkCustomIdAsync(...)` | `MasterPlayerResponseModels.UnlinkCustomIdOperationResponse` |
| `unlinkEditorDeviceId` | `MasterPlayerModels.ServerUnlinkEditorDeviceIdRequestData` | `unlinkEditorDeviceIdAsync(...)` | `MasterPlayerResponseModels.UnlinkEditorDeviceIdOperationResponse` |
| `unlinkFacebook` | `MasterPlayerModels.ServerUnlinkFacebookRequestData` | `unlinkFacebookAsync(...)` | `MasterPlayerResponseModels.UnlinkFacebookOperationResponse` |
| `unlinkGenericService` | `MasterPlayerModels.ServerUnlinkGenericServiceRequestData` | `unlinkGenericServiceAsync(...)` | `MasterPlayerResponseModels.UnlinkGenericServiceOperationResponse` |
| `unlinkGoogle` | `MasterPlayerModels.ServerUnlinkGoogleRequestData` | `unlinkGoogleAsync(...)` | `MasterPlayerResponseModels.UnlinkGoogleOperationResponse` |
| `unlinkGooglePlayGameService` | `MasterPlayerModels.ServerUnlinkGooglePlayGameServiceRequestData` | `unlinkGooglePlayGameServiceAsync(...)` | `MasterPlayerResponseModels.UnlinkGooglePlayGameServiceOperationResponse` |
| `unlinkGameCenter` | `MasterPlayerModels.ServerUnlinkGameCenterRequestData` | `unlinkGameCenterAsync(...)` | `MasterPlayerResponseModels.UnlinkGameCenterOperationResponse` |
| `unlinkiOSDeviceId` | `MasterPlayerModels.ServerUnlinkiOSDeviceIdRequestData` | `unlinkiOSDeviceIdAsync(...)` | `MasterPlayerResponseModels.UnlinkiOSDeviceIdOperationResponse` |
| `unlinkLinuxDeviceId` | `MasterPlayerModels.ServerUnlinkLinuxDeviceIdRequestData` | `unlinkLinuxDeviceIdAsync(...)` | `MasterPlayerResponseModels.UnlinkLinuxDeviceIdOperationResponse` |
| `unlinkMacOSDeviceId` | `MasterPlayerModels.ServerUnlinkMacOSDeviceIdRequestData` | `unlinkMacOSDeviceIdAsync(...)` | `MasterPlayerResponseModels.UnlinkMacOSDeviceIdOperationResponse` |
| `unlinkWindowsDeviceId` | `MasterPlayerModels.ServerUnlinkWindowsDeviceIdRequestData` | `unlinkWindowsDeviceIdAsync(...)` | `MasterPlayerResponseModels.UnlinkWindowsDeviceIdOperationResponse` |
| `unlinkWindowsPhoneDeviceId` | `MasterPlayerModels.ServerUnlinkWindowsPhoneDeviceIdRequestData` | `unlinkWindowsPhoneDeviceIdAsync(...)` | `MasterPlayerResponseModels.UnlinkWindowsPhoneDeviceIdOperationResponse` |
| `getCurrencyLeaderboard` | `MasterPlayerModels.ServerGetCurrencyLeaderboardRequestData` | `getCurrencyLeaderboardAsync(...)` | `MasterPlayerResponseModels.GetCurrencyLeaderboardOperationResponse` |
| `getCreateLeaderboard` | `MasterPlayerModels.ServerGetCreateLeaderboardRequestData` | `getCreateLeaderboardAsync(...)` | `MasterPlayerResponseModels.GetCreateLeaderboardOperationResponse` |
| `getLastLoginLeaderboard` | `MasterPlayerModels.ServerGetLastLoginLeaderboardRequestData` | `getLastLoginLeaderboardAsync(...)` | `MasterPlayerResponseModels.GetLastLoginLeaderboardOperationResponse` |
| `getStatisticsLog` | `MasterPlayerModels.ServerGetStatisticsLogRequestData` | `getStatisticsLogAsync(...)` | `MasterPlayerResponseModels.GetStatisticsLogOperationResponse` |
| `getCurrencyLog` | `MasterPlayerModels.ServerGetCurrencyLogRequestData` | `getCurrencyLogAsync(...)` | `MasterPlayerResponseModels.GetCurrencyLogOperationResponse` |
| `sendSocketOperationEvent` | `MasterPlayerModels.ServerSendSocketOperationEventRequestData` | `sendSocketOperationEventAsync(...)` | `MasterPlayerResponseModels.SendSocketOperationEventOperationResponse` |
| `sendEmail` | `MasterPlayerModels.ServerSendEmailRequestData` | `sendEmailAsync(...)` | `MasterPlayerResponseModels.SendEmailOperationResponse` |
| `addPushNotification` | `MasterPlayerModels.ServerAddPushNotificationRequestData` | `addPushNotificationAsync(...)` | `MasterPlayerResponseModels.AddPushNotificationOperationResponse` |
| `removePushNotification` | `MasterPlayerModels.ServerRemovePushNotificationRequestData` | `removePushNotificationAsync(...)` | `MasterPlayerResponseModels.RemovePushNotificationOperationResponse` |
| `getPushNotification` | `MasterPlayerModels.ServerGetPushNotificationRequestData` | `getPushNotificationAsync(...)` | `MasterPlayerResponseModels.GetPushNotificationOperationResponse` |
| `sendPushNotification` | `MasterPlayerModels.ServerSendPushNotificationRequestData` | `sendPushNotificationAsync(...)` | `MasterPlayerResponseModels.SendPushNotificationOperationResponse` |


## Admin methods (`GNNetwork.masterPlayer.admin.*`)

| Method | Request DTO | Async form | Response class |
|--------|-------------|------------|----------------|
| `addSegment` | `MasterPlayerModels.AdminAddSegmentRequestData` | `addSegmentAsync(...)` | `MasterPlayerResponseModels.AddSegmentOperationResponse` |
| `getAvatar` | `MasterPlayerModels.AdminGetAvatarRequestData` | `getAvatarAsync(...)` | `MasterPlayerResponseModels.GetAvatarOperationResponse` |
| `getCountryCode` | `MasterPlayerModels.AdminGetCountryCodeRequestData` | `getCountryCodeAsync(...)` | `MasterPlayerResponseModels.GetCountryCodeOperationResponse` |
| `getCustomData` | `MasterPlayerModels.AdminGetCustomDataRequestData` | `getCustomDataAsync(...)` | `MasterPlayerResponseModels.GetCustomDataOperationResponse` |
| `getDisplayName` | `MasterPlayerModels.AdminGetDisplayNameRequestData` | `getDisplayNameAsync(...)` | `MasterPlayerResponseModels.GetDisplayNameOperationResponse` |
| `getEmail` | `MasterPlayerModels.AdminGetEmailRequestData` | `getEmailAsync(...)` | `MasterPlayerResponseModels.GetEmailOperationResponse` |
| `getExternal` | `MasterPlayerModels.AdminGetExternalRequestData` | `getExternalAsync(...)` | `MasterPlayerResponseModels.GetExternalOperationResponse` |
| `getIpAddressCreate` | `MasterPlayerModels.AdminGetIpAddressCreateRequestData` | `getIpAddressCreateAsync(...)` | `MasterPlayerResponseModels.GetIpAddressCreateOperationResponse` |
| `getPlayerBan` | `MasterPlayerModels.AdminGetPlayerBanRequestData` | `getPlayerBanAsync(...)` | `MasterPlayerResponseModels.GetPlayerBanOperationResponse` |
| `getPlayerCurrency` | `MasterPlayerModels.AdminGetPlayerCurrencyRequestData` | `getPlayerCurrencyAsync(...)` | `MasterPlayerResponseModels.GetPlayerCurrencyOperationResponse` |
| `getPlayerData` | `MasterPlayerModels.AdminGetPlayerDataRequestData` | `getPlayerDataAsync(...)` | `MasterPlayerResponseModels.GetPlayerDataOperationResponse` |
| `getPlayerInformation` | `MasterPlayerModels.AdminGetPlayerInformationRequestData` | `getPlayerInformationAsync(...)` | `MasterPlayerResponseModels.GetPlayerInformationOperationResponse` |
| `getPlayerStatistics` | `MasterPlayerModels.AdminGetPlayerStatisticsRequestData` | `getPlayerStatisticsAsync(...)` | `MasterPlayerResponseModels.GetPlayerStatisticsOperationResponse` |
| `getPlayersWithApple` | `MasterPlayerModels.AdminGetPlayersWithAppleRequestData` | `getPlayersWithAppleAsync(...)` | `MasterPlayerResponseModels.GetPlayersWithAppleOperationResponse` |
| `getPlayersWithDisplayName` | `MasterPlayerModels.AdminGetPlayersWithDisplayNameRequestData` | `getPlayersWithDisplayNameAsync(...)` | `MasterPlayerResponseModels.GetPlayersWithDisplayNameOperationResponse` |
| `getPlayersWithFacebook` | `MasterPlayerModels.AdminGetPlayersWithFacebookRequestData` | `getPlayersWithFacebookAsync(...)` | `MasterPlayerResponseModels.GetPlayersWithFacebookOperationResponse` |
| `getPlayersWithGenericService` | `MasterPlayerModels.AdminGetPlayersWithGenericServiceRequestData` | `getPlayersWithGenericServiceAsync(...)` | `MasterPlayerResponseModels.GetPlayersWithGenericServiceOperationResponse` |
| `getPlayersWithGoogle` | `MasterPlayerModels.AdminGetPlayersWithGoogleRequestData` | `getPlayersWithGoogleAsync(...)` | `MasterPlayerResponseModels.GetPlayersWithGoogleOperationResponse` |
| `getPlayersWithGooglePlayGameService` | `MasterPlayerModels.AdminGetPlayersWithGooglePlayGameServiceRequestData` | `getPlayersWithGooglePlayGameServiceAsync(...)` | `MasterPlayerResponseModels.GetPlayersWithGooglePlayGameServiceOperationResponse` |
| `getPlayersWithGameCenter` | `MasterPlayerModels.AdminGetPlayersWithGameCenterRequestData` | `getPlayersWithGameCenterAsync(...)` | `MasterPlayerResponseModels.GetPlayersWithGameCenterOperationResponse` |
| `getPlayersWithSegment` | `MasterPlayerModels.AdminGetPlayersWithSegmentRequestData` | `getPlayersWithSegmentAsync(...)` | `MasterPlayerResponseModels.GetPlayersWithSegmentOperationResponse` |
| `getPlayersWithTag` | `MasterPlayerModels.AdminGetPlayersWithTagRequestData` | `getPlayersWithTagAsync(...)` | `MasterPlayerResponseModels.GetPlayersWithTagOperationResponse` |
| `getSegment` | `MasterPlayerModels.AdminGetSegmentRequestData` | `getSegmentAsync(...)` | `MasterPlayerResponseModels.GetSegmentOperationResponse` |
| `getStatisticsLeaderboardAroundPlayer` | `MasterPlayerModels.AdminGetStatisticsLeaderboardAroundPlayerRequestData` | `getStatisticsLeaderboardAroundPlayerAsync(...)` | `MasterPlayerResponseModels.GetStatisticsLeaderboardAroundPlayerOperationResponse` |
| `getStatisticsLeaderboard` | `MasterPlayerModels.AdminGetStatisticsLeaderboardRequestData` | `getStatisticsLeaderboardAsync(...)` | `MasterPlayerResponseModels.GetStatisticsLeaderboardOperationResponse` |
| `getTag` | `MasterPlayerModels.AdminGetTagRequestData` | `getTagAsync(...)` | `MasterPlayerResponseModels.GetTagOperationResponse` |
| `getTsCreate` | `MasterPlayerModels.AdminGetTsCreateRequestData` | `getTsCreateAsync(...)` | `MasterPlayerResponseModels.GetTsCreateOperationResponse` |
| `getTsLastLogin` | `MasterPlayerModels.AdminGetTsLastLoginRequestData` | `getTsLastLoginAsync(...)` | `MasterPlayerResponseModels.GetTsLastLoginOperationResponse` |
| `linkAccount` | `MasterPlayerModels.AdminLinkAccountRequestData` | `linkAccountAsync(...)` | `MasterPlayerResponseModels.LinkAccountOperationResponse` |
| `linkAndroidDeviceId` | `MasterPlayerModels.AdminLinkAndroidDeviceIdRequestData` | `linkAndroidDeviceIdAsync(...)` | `MasterPlayerResponseModels.LinkAndroidDeviceIdOperationResponse` |
| `linkApple` | `MasterPlayerModels.AdminLinkAppleRequestData` | `linkAppleAsync(...)` | `MasterPlayerResponseModels.LinkAppleOperationResponse` |
| `linkCustomDeviceId` | `MasterPlayerModels.AdminLinkCustomDeviceIdRequestData` | `linkCustomDeviceIdAsync(...)` | `MasterPlayerResponseModels.LinkCustomDeviceIdOperationResponse` |
| `linkCustomId` | `MasterPlayerModels.AdminLinkCustomIdRequestData` | `linkCustomIdAsync(...)` | `MasterPlayerResponseModels.LinkCustomIdOperationResponse` |
| `linkEditorDeviceId` | `MasterPlayerModels.AdminLinkEditorDeviceIdRequestData` | `linkEditorDeviceIdAsync(...)` | `MasterPlayerResponseModels.LinkEditorDeviceIdOperationResponse` |
| `linkFacebook` | `MasterPlayerModels.AdminLinkFacebookRequestData` | `linkFacebookAsync(...)` | `MasterPlayerResponseModels.LinkFacebookOperationResponse` |
| `linkGenericService` | `MasterPlayerModels.AdminLinkGenericServiceRequestData` | `linkGenericServiceAsync(...)` | `MasterPlayerResponseModels.LinkGenericServiceOperationResponse` |
| `linkGoogle` | `MasterPlayerModels.AdminLinkGoogleRequestData` | `linkGoogleAsync(...)` | `MasterPlayerResponseModels.LinkGoogleOperationResponse` |
| `linkGooglePlayGameService` | `MasterPlayerModels.AdminLinkGooglePlayGameServiceRequestData` | `linkGooglePlayGameServiceAsync(...)` | `MasterPlayerResponseModels.LinkGooglePlayGameServiceOperationResponse` |
| `linkGameCenter` | `MasterPlayerModels.AdminLinkGameCenterRequestData` | `linkGameCenterAsync(...)` | `MasterPlayerResponseModels.LinkGameCenterOperationResponse` |
| `linkiOSDeviceId` | `MasterPlayerModels.AdminLinkiOSDeviceIdRequestData` | `linkiOSDeviceIdAsync(...)` | `MasterPlayerResponseModels.LinkiOSDeviceIdOperationResponse` |
| `linkLinuxDeviceId` | `MasterPlayerModels.AdminLinkLinuxDeviceIdRequestData` | `linkLinuxDeviceIdAsync(...)` | `MasterPlayerResponseModels.LinkLinuxDeviceIdOperationResponse` |
| `linkMacOSDeviceId` | `MasterPlayerModels.AdminLinkMacOSDeviceIdRequestData` | `linkMacOSDeviceIdAsync(...)` | `MasterPlayerResponseModels.LinkMacOSDeviceIdOperationResponse` |
| `linkWindowsDeviceId` | `MasterPlayerModels.AdminLinkWindowsDeviceIdRequestData` | `linkWindowsDeviceIdAsync(...)` | `MasterPlayerResponseModels.LinkWindowsDeviceIdOperationResponse` |
| `linkWindowsPhoneDeviceId` | `MasterPlayerModels.AdminLinkWindowsPhoneDeviceIdRequestData` | `linkWindowsPhoneDeviceIdAsync(...)` | `MasterPlayerResponseModels.LinkWindowsPhoneDeviceIdOperationResponse` |
| `removeSegment` | `MasterPlayerModels.AdminRemoveSegmentRequestData` | `removeSegmentAsync(...)` | `MasterPlayerResponseModels.RemoveSegmentOperationResponse` |
| `removeTag` | `MasterPlayerModels.AdminRemoveTagRequestData` | `removeTagAsync(...)` | `MasterPlayerResponseModels.RemoveTagOperationResponse` |
| `resetAccountPassword` | `MasterPlayerModels.AdminResetAccountPasswordRequestData` | `resetAccountPasswordAsync(...)` | `MasterPlayerResponseModels.ResetAccountPasswordOperationResponse` |
| `setAvatar` | `MasterPlayerModels.AdminSetAvatarRequestData` | `setAvatarAsync(...)` | `MasterPlayerResponseModels.SetAvatarOperationResponse` |
| `setCountryCode` | `MasterPlayerModels.AdminSetCountryCodeRequestData` | `setCountryCodeAsync(...)` | `MasterPlayerResponseModels.SetCountryCodeOperationResponse` |
| `setCustomData` | `MasterPlayerModels.AdminSetCustomDataRequestData` | `setCustomDataAsync(...)` | `MasterPlayerResponseModels.SetCustomDataOperationResponse` |
| `setDisplayName` | `MasterPlayerModels.AdminSetDisplayNameRequestData` | `setDisplayNameAsync(...)` | `MasterPlayerResponseModels.SetDisplayNameOperationResponse` |
| `setEmail` | `MasterPlayerModels.AdminSetEmailRequestData` | `setEmailAsync(...)` | `MasterPlayerResponseModels.SetEmailOperationResponse` |
| `setPlayerBan` | `MasterPlayerModels.AdminSetPlayerBanRequestData` | `setPlayerBanAsync(...)` | `MasterPlayerResponseModels.SetPlayerBanOperationResponse` |
| `changePlayerCurrency` | `MasterPlayerModels.AdminChangePlayerCurrencyRequestData` | `changePlayerCurrencyAsync(...)` | `MasterPlayerResponseModels.ChangePlayerCurrencyOperationResponse` |
| `setPlayerData` | `MasterPlayerModels.AdminSetPlayerDataRequestData` | `setPlayerDataAsync(...)` | `MasterPlayerResponseModels.SetPlayerDataOperationResponse` |
| `changePlayerStatistics` | `MasterPlayerModels.AdminChangePlayerStatisticsRequestData` | `changePlayerStatisticsAsync(...)` | `MasterPlayerResponseModels.ChangePlayerStatisticsOperationResponse` |
| `setTag` | `MasterPlayerModels.AdminSetTagRequestData` | `setTagAsync(...)` | `MasterPlayerResponseModels.SetTagOperationResponse` |
| `updateTsLastLogin` | `MasterPlayerModels.AdminUpdateTsLastLoginRequestData` | `updateTsLastLoginAsync(...)` | `MasterPlayerResponseModels.UpdateTsLastLoginOperationResponse` |
| `unlinkAccount` | `MasterPlayerModels.AdminUnlinkAccountRequestData` | `unlinkAccountAsync(...)` | `MasterPlayerResponseModels.UnlinkAccountOperationResponse` |
| `unlinkAndroidDeviceId` | `MasterPlayerModels.AdminUnlinkAndroidDeviceIdRequestData` | `unlinkAndroidDeviceIdAsync(...)` | `MasterPlayerResponseModels.UnlinkAndroidDeviceIdOperationResponse` |
| `unlinkApple` | `MasterPlayerModels.AdminUnlinkAppleRequestData` | `unlinkAppleAsync(...)` | `MasterPlayerResponseModels.UnlinkAppleOperationResponse` |
| `unlinkCustomDeviceId` | `MasterPlayerModels.AdminUnlinkCustomDeviceIdRequestData` | `unlinkCustomDeviceIdAsync(...)` | `MasterPlayerResponseModels.UnlinkCustomDeviceIdOperationResponse` |
| `unlinkCustomId` | `MasterPlayerModels.AdminUnlinkCustomIdRequestData` | `unlinkCustomIdAsync(...)` | `MasterPlayerResponseModels.UnlinkCustomIdOperationResponse` |
| `unlinkEditorDeviceId` | `MasterPlayerModels.AdminUnlinkEditorDeviceIdRequestData` | `unlinkEditorDeviceIdAsync(...)` | `MasterPlayerResponseModels.UnlinkEditorDeviceIdOperationResponse` |
| `unlinkFacebook` | `MasterPlayerModels.AdminUnlinkFacebookRequestData` | `unlinkFacebookAsync(...)` | `MasterPlayerResponseModels.UnlinkFacebookOperationResponse` |
| `unlinkGenericService` | `MasterPlayerModels.AdminUnlinkGenericServiceRequestData` | `unlinkGenericServiceAsync(...)` | `MasterPlayerResponseModels.UnlinkGenericServiceOperationResponse` |
| `unlinkGoogle` | `MasterPlayerModels.AdminUnlinkGoogleRequestData` | `unlinkGoogleAsync(...)` | `MasterPlayerResponseModels.UnlinkGoogleOperationResponse` |
| `unlinkGooglePlayGameService` | `MasterPlayerModels.AdminUnlinkGooglePlayGameServiceRequestData` | `unlinkGooglePlayGameServiceAsync(...)` | `MasterPlayerResponseModels.UnlinkGooglePlayGameServiceOperationResponse` |
| `unlinkGameCenter` | `MasterPlayerModels.AdminUnlinkGameCenterRequestData` | `unlinkGameCenterAsync(...)` | `MasterPlayerResponseModels.UnlinkGameCenterOperationResponse` |
| `unlinkiOSDeviceId` | `MasterPlayerModels.AdminUnlinkiOSDeviceIdRequestData` | `unlinkiOSDeviceIdAsync(...)` | `MasterPlayerResponseModels.UnlinkiOSDeviceIdOperationResponse` |
| `unlinkLinuxDeviceId` | `MasterPlayerModels.AdminUnlinkLinuxDeviceIdRequestData` | `unlinkLinuxDeviceIdAsync(...)` | `MasterPlayerResponseModels.UnlinkLinuxDeviceIdOperationResponse` |
| `unlinkMacOSDeviceId` | `MasterPlayerModels.AdminUnlinkMacOSDeviceIdRequestData` | `unlinkMacOSDeviceIdAsync(...)` | `MasterPlayerResponseModels.UnlinkMacOSDeviceIdOperationResponse` |
| `unlinkWindowsDeviceId` | `MasterPlayerModels.AdminUnlinkWindowsDeviceIdRequestData` | `unlinkWindowsDeviceIdAsync(...)` | `MasterPlayerResponseModels.UnlinkWindowsDeviceIdOperationResponse` |
| `unlinkWindowsPhoneDeviceId` | `MasterPlayerModels.AdminUnlinkWindowsPhoneDeviceIdRequestData` | `unlinkWindowsPhoneDeviceIdAsync(...)` | `MasterPlayerResponseModels.UnlinkWindowsPhoneDeviceIdOperationResponse` |
| `getCurrencyLeaderboard` | `MasterPlayerModels.AdminGetCurrencyLeaderboardRequestData` | `getCurrencyLeaderboardAsync(...)` | `MasterPlayerResponseModels.GetCurrencyLeaderboardOperationResponse` |
| `getCreateLeaderboard` | `MasterPlayerModels.AdminGetCreateLeaderboardRequestData` | `getCreateLeaderboardAsync(...)` | `MasterPlayerResponseModels.GetCreateLeaderboardOperationResponse` |
| `getLastLoginLeaderboard` | `MasterPlayerModels.AdminGetLastLoginLeaderboardRequestData` | `getLastLoginLeaderboardAsync(...)` | `MasterPlayerResponseModels.GetLastLoginLeaderboardOperationResponse` |
| `getStatisticsLog` | `MasterPlayerModels.AdminGetStatisticsLogRequestData` | `getStatisticsLogAsync(...)` | `MasterPlayerResponseModels.GetStatisticsLogOperationResponse` |
| `getCurrencyLog` | `MasterPlayerModels.AdminGetCurrencyLogRequestData` | `getCurrencyLogAsync(...)` | `MasterPlayerResponseModels.GetCurrencyLogOperationResponse` |
| `sendSocketOperationEvent` | `MasterPlayerModels.AdminSendSocketOperationEventRequestData` | `sendSocketOperationEventAsync(...)` | `MasterPlayerResponseModels.SendSocketOperationEventOperationResponse` |
| `sendEmail` | `MasterPlayerModels.AdminSendEmailRequestData` | `sendEmailAsync(...)` | `MasterPlayerResponseModels.SendEmailOperationResponse` |
| `addPushNotification` | `MasterPlayerModels.AdminAddPushNotificationRequestData` | `addPushNotificationAsync(...)` | `MasterPlayerResponseModels.AddPushNotificationOperationResponse` |
| `removePushNotification` | `MasterPlayerModels.AdminRemovePushNotificationRequestData` | `removePushNotificationAsync(...)` | `MasterPlayerResponseModels.RemovePushNotificationOperationResponse` |
| `getPushNotification` | `MasterPlayerModels.AdminGetPushNotificationRequestData` | `getPushNotificationAsync(...)` | `MasterPlayerResponseModels.GetPushNotificationOperationResponse` |
| `sendPushNotification` | `MasterPlayerModels.AdminSendPushNotificationRequestData` | `sendPushNotificationAsync(...)` | `MasterPlayerResponseModels.SendPushNotificationOperationResponse` |


## Ví dụ tối thiểu

```ts
import { GNNetwork, ReturnCode, ErrorCode } from "@xmobitea/gn-typescript-client";

const res = await GNNetwork.masterPlayer.addSegmentAsync({ /* MasterPlayerModels.AddSegmentRequestData */ } as any);
if (res.returnCode !== ReturnCode.Ok) return;
if (res.errorCode !== ErrorCode.Ok) return;
// res.responseData có typed payload
```
