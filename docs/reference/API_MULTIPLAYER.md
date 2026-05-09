# API Reference: MultiplayerApi

Matchmaking ticket lifecycle, queue statistics, match query.

Domain guide: [guides/MULTIPLAYER.md](/docs/guides/MULTIPLAYER.md). DTO shapes: [dto/MULTIPLAYER.md](/docs/reference/dto/MULTIPLAYER.md) hoặc grep [DTO_INDEX.md](/docs/reference/DTO_INDEX.md).

## Namespaces

- `GNNetwork.multiplayer` — `RequestRole.Client`
- `GNNetwork.multiplayer.server` — `RequestRole.Server`
- `GNNetwork.multiplayer.admin` — `RequestRole.Admin`

## Convention

Mỗi method dưới đây có 2 form — callback và `*Async()` Promise. Ưu tiên `*Async()`.

```ts
// Callback
GNNetwork.multiplayer.<method>(requestData, onResponse?, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?);

// Async
const res = await GNNetwork.multiplayer.<method>Async(requestData, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?);
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

Response class expose field: `returnCode`, `errorCode`, `invalidMembers`, `debugMessage`, `responseData`. Xem [ERROR_HANDLING.md](/docs/reference/ERROR_HANDLING.md).


## Client methods (`GNNetwork.multiplayer.*`)

| Method | Request DTO | Async form | Response class | Default Permission Rules |
|--------|-------------|------------|----------------|--------------------------|
| `cancelAllMatchmakingTicket` | `MultiplayerModels.CancelAllMatchmakingTicketRequestData` | `cancelAllMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.CancelAllMatchmakingTicketOperationResponse` | `multiplayer.cancelAllMatchmakingTicket.selfEnable` |
| `cancelMatchmakingTicket` | `MultiplayerModels.CancelMatchmakingTicketRequestData` | `cancelMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.CancelMatchmakingTicketOperationResponse` | `multiplayer.cancelMatchmakingTicket.selfEnable` |
| `createMatchmakingTicket` | `MultiplayerModels.CreateMatchmakingTicketRequestData` | `createMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.CreateMatchmakingTicketOperationResponse` | `multiplayer.createMatchmakingTicket.selfEnable` |
| `getMatchmakingTicket` | `MultiplayerModels.GetMatchmakingTicketRequestData` | `getMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.GetMatchmakingTicketOperationResponse` | `multiplayer.getMatchmakingTicket.selfEnable` |
| `getMatch` | `MultiplayerModels.GetMatchRequestData` | `getMatchAsync(...)` | `MultiplayerResponseModels.GetMatchOperationResponse` | `multiplayer.getMatch.selfEnable` |
| `getQueueStatistics` | `MultiplayerModels.GetQueueStatisticsRequestData` | `getQueueStatisticsAsync(...)` | `MultiplayerResponseModels.GetQueueStatisticsOperationResponse` | `multiplayer.getQueueStatistics.selfEnable` |
| `joinMatchmakingTicket` | `MultiplayerModels.JoinMatchmakingTicketRequestData` | `joinMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.JoinMatchmakingTicketOperationResponse` | `multiplayer.joinMatchmakingTicket.selfEnable` |
| `listMatchmakingTicketsForPlayer` | `MultiplayerModels.ListMatchmakingTicketsForPlayerRequestData` | `listMatchmakingTicketsForPlayerAsync(...)` | `MultiplayerResponseModels.ListMatchmakingTicketsForPlayerOperationResponse` | `multiplayer.listMatchmakingTicketsForPlayer.selfEnable` |
| `getAllMatch` | `MultiplayerModels.GetAllMatchRequestData` | `getAllMatchAsync(...)` | `MultiplayerResponseModels.GetAllMatchOperationResponse` | `multiplayer.getAllMatch.selfEnable` |
| `getAllMatchmakingTicket` | `MultiplayerModels.GetAllMatchmakingTicketRequestData` | `getAllMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.GetAllMatchmakingTicketOperationResponse` | `multiplayer.getAllMatchmakingTicket.selfEnable` |


## Server methods (`GNNetwork.multiplayer.server.*`)

| Method | Request DTO | Async form | Response class | Default Permission Rules |
|--------|-------------|------------|----------------|--------------------------|
| `cancelAllMatchmakingTicket` | `MultiplayerModels.ServerCancelAllMatchmakingTicketRequestData` | `cancelAllMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.CancelAllMatchmakingTicketOperationResponse` | `multiplayer.cancelAllMatchmakingTicket.serverSelfEnable` |
| `cancelMatchmakingTicket` | `MultiplayerModels.ServerCancelMatchmakingTicketRequestData` | `cancelMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.CancelMatchmakingTicketOperationResponse` | `multiplayer.cancelMatchmakingTicket.serverSelfEnable` |
| `createMatchmakingTicket` | `MultiplayerModels.ServerCreateMatchmakingTicketRequestData` | `createMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.CreateMatchmakingTicketOperationResponse` | `multiplayer.createMatchmakingTicket.serverSelfEnable` |
| `getMatchmakingTicket` | `MultiplayerModels.ServerGetMatchmakingTicketRequestData` | `getMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.GetMatchmakingTicketOperationResponse` | `multiplayer.getMatchmakingTicket.serverSelfEnable` |
| `getMatch` | `MultiplayerModels.ServerGetMatchRequestData` | `getMatchAsync(...)` | `MultiplayerResponseModels.GetMatchOperationResponse` | `multiplayer.getMatch.serverSelfEnable` |
| `getQueueStatistics` | `MultiplayerModels.ServerGetQueueStatisticsRequestData` | `getQueueStatisticsAsync(...)` | `MultiplayerResponseModels.GetQueueStatisticsOperationResponse` | `multiplayer.getQueueStatistics.serverSelfEnable` |
| `joinMatchmakingTicket` | `MultiplayerModels.ServerJoinMatchmakingTicketRequestData` | `joinMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.JoinMatchmakingTicketOperationResponse` | `multiplayer.joinMatchmakingTicket.serverSelfEnable` |
| `listMatchmakingTicketsForPlayer` | `MultiplayerModels.ServerListMatchmakingTicketsForPlayerRequestData` | `listMatchmakingTicketsForPlayerAsync(...)` | `MultiplayerResponseModels.ListMatchmakingTicketsForPlayerOperationResponse` | `multiplayer.listMatchmakingTicketsForPlayer.serverSelfEnable` |
| `getAllMatch` | `MultiplayerModels.ServerGetAllMatchRequestData` | `getAllMatchAsync(...)` | `MultiplayerResponseModels.GetAllMatchOperationResponse` | `multiplayer.getAllMatch.serverSelfEnable` |
| `getAllMatchmakingTicket` | `MultiplayerModels.ServerGetAllMatchmakingTicketRequestData` | `getAllMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.GetAllMatchmakingTicketOperationResponse` | `multiplayer.getAllMatchmakingTicket.serverSelfEnable` |


## Admin methods (`GNNetwork.multiplayer.admin.*`)

| Method | Request DTO | Async form | Response class | Default Permission Rules |
|--------|-------------|------------|----------------|--------------------------|
| `cancelAllMatchmakingTicket` | `MultiplayerModels.AdminCancelAllMatchmakingTicketRequestData` | `cancelAllMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.CancelAllMatchmakingTicketOperationResponse` | `multiplayer.cancelAllMatchmakingTicket.adminSelfEnable` |
| `cancelMatchmakingTicket` | `MultiplayerModels.AdminCancelMatchmakingTicketRequestData` | `cancelMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.CancelMatchmakingTicketOperationResponse` | `multiplayer.cancelMatchmakingTicket.adminSelfEnable` |
| `createMatchmakingTicket` | `MultiplayerModels.AdminCreateMatchmakingTicketRequestData` | `createMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.CreateMatchmakingTicketOperationResponse` | `multiplayer.createMatchmakingTicket.adminSelfEnable` |
| `getMatchmakingTicket` | `MultiplayerModels.AdminGetMatchmakingTicketRequestData` | `getMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.GetMatchmakingTicketOperationResponse` | `multiplayer.getMatchmakingTicket.adminSelfEnable` |
| `getMatch` | `MultiplayerModels.AdminGetMatchRequestData` | `getMatchAsync(...)` | `MultiplayerResponseModels.GetMatchOperationResponse` | `multiplayer.getMatch.adminSelfEnable` |
| `getQueueStatistics` | `MultiplayerModels.AdminGetQueueStatisticsRequestData` | `getQueueStatisticsAsync(...)` | `MultiplayerResponseModels.GetQueueStatisticsOperationResponse` | `multiplayer.getQueueStatistics.adminSelfEnable` |
| `joinMatchmakingTicket` | `MultiplayerModels.AdminJoinMatchmakingTicketRequestData` | `joinMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.JoinMatchmakingTicketOperationResponse` | `multiplayer.joinMatchmakingTicket.adminSelfEnable` |
| `listMatchmakingTicketsForPlayer` | `MultiplayerModels.AdminListMatchmakingTicketsForPlayerRequestData` | `listMatchmakingTicketsForPlayerAsync(...)` | `MultiplayerResponseModels.ListMatchmakingTicketsForPlayerOperationResponse` | `multiplayer.listMatchmakingTicketsForPlayer.adminSelfEnable` |
| `getAllMatch` | `MultiplayerModels.AdminGetAllMatchRequestData` | `getAllMatchAsync(...)` | `MultiplayerResponseModels.GetAllMatchOperationResponse` | `multiplayer.getAllMatch.adminSelfEnable` |
| `getAllMatchmakingTicket` | `MultiplayerModels.AdminGetAllMatchmakingTicketRequestData` | `getAllMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.GetAllMatchmakingTicketOperationResponse` | `multiplayer.getAllMatchmakingTicket.adminSelfEnable` |


## Ví dụ tối thiểu

```ts
import { GNNetwork, ReturnCode, ErrorCode } from "@xmobitea/gearn-typescript-client-sdk";

// requestData: MultiplayerModels.CancelAllMatchmakingTicketRequestData đã build theo dto/MULTIPLAYER.md
const res = await GNNetwork.multiplayer.cancelAllMatchmakingTicketAsync(requestData);
if (res.returnCode !== ReturnCode.Ok) return;
if (res.errorCode !== ErrorCode.Ok) return;
// res.responseData có typed payload
```
