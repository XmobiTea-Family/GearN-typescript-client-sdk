# API Reference: MultiplayerApi

Matchmaking ticket lifecycle, queue statistics, match query.

Domain guide: [guides/MULTIPLAYER.md](../guides/MULTIPLAYER.md). DTO shapes: [DTO_INDEX.md](DTO_INDEX.md#multiplayer).

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

Response class expose field: `returnCode`, `errorCode`, `invalidMembers`, `debugMessage`, `responseData`. Xem [ERROR_HANDLING.md](ERROR_HANDLING.md).


## Client methods (`GNNetwork.multiplayer.*`)

| Method | Request DTO | Async form | Response class |
|--------|-------------|------------|----------------|
| `cancelAllMatchmakingTicket` | `MultiplayerModels.CancelAllMatchmakingTicketRequestData` | `cancelAllMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.CancelAllMatchmakingTicketOperationResponse` |
| `cancelMatchmakingTicket` | `MultiplayerModels.CancelMatchmakingTicketRequestData` | `cancelMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.CancelMatchmakingTicketOperationResponse` |
| `createMatchmakingTicket` | `MultiplayerModels.CreateMatchmakingTicketRequestData` | `createMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.CreateMatchmakingTicketOperationResponse` |
| `getMatchmakingTicket` | `MultiplayerModels.GetMatchmakingTicketRequestData` | `getMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.GetMatchmakingTicketOperationResponse` |
| `getMatch` | `MultiplayerModels.GetMatchRequestData` | `getMatchAsync(...)` | `MultiplayerResponseModels.GetMatchOperationResponse` |
| `getQueueStatistics` | `MultiplayerModels.GetQueueStatisticsRequestData` | `getQueueStatisticsAsync(...)` | `MultiplayerResponseModels.GetQueueStatisticsOperationResponse` |
| `joinMatchmakingTicket` | `MultiplayerModels.JoinMatchmakingTicketRequestData` | `joinMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.JoinMatchmakingTicketOperationResponse` |
| `listMatchmakingTicketsForPlayer` | `MultiplayerModels.ListMatchmakingTicketsForPlayerRequestData` | `listMatchmakingTicketsForPlayerAsync(...)` | `MultiplayerResponseModels.ListMatchmakingTicketsForPlayerOperationResponse` |
| `getAllMatch` | `MultiplayerModels.GetAllMatchRequestData` | `getAllMatchAsync(...)` | `MultiplayerResponseModels.GetAllMatchOperationResponse` |
| `getAllMatchmakingTicket` | `MultiplayerModels.GetAllMatchmakingTicketRequestData` | `getAllMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.GetAllMatchmakingTicketOperationResponse` |


## Server methods (`GNNetwork.multiplayer.server.*`)

| Method | Request DTO | Async form | Response class |
|--------|-------------|------------|----------------|
| `cancelAllMatchmakingTicket` | `MultiplayerModels.ServerCancelAllMatchmakingTicketRequestData` | `cancelAllMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.CancelAllMatchmakingTicketOperationResponse` |
| `cancelMatchmakingTicket` | `MultiplayerModels.ServerCancelMatchmakingTicketRequestData` | `cancelMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.CancelMatchmakingTicketOperationResponse` |
| `createMatchmakingTicket` | `MultiplayerModels.ServerCreateMatchmakingTicketRequestData` | `createMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.CreateMatchmakingTicketOperationResponse` |
| `getMatchmakingTicket` | `MultiplayerModels.ServerGetMatchmakingTicketRequestData` | `getMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.GetMatchmakingTicketOperationResponse` |
| `getMatch` | `MultiplayerModels.ServerGetMatchRequestData` | `getMatchAsync(...)` | `MultiplayerResponseModels.GetMatchOperationResponse` |
| `getQueueStatistics` | `MultiplayerModels.ServerGetQueueStatisticsRequestData` | `getQueueStatisticsAsync(...)` | `MultiplayerResponseModels.GetQueueStatisticsOperationResponse` |
| `joinMatchmakingTicket` | `MultiplayerModels.ServerJoinMatchmakingTicketRequestData` | `joinMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.JoinMatchmakingTicketOperationResponse` |
| `listMatchmakingTicketsForPlayer` | `MultiplayerModels.ServerListMatchmakingTicketsForPlayerRequestData` | `listMatchmakingTicketsForPlayerAsync(...)` | `MultiplayerResponseModels.ListMatchmakingTicketsForPlayerOperationResponse` |
| `getAllMatch` | `MultiplayerModels.ServerGetAllMatchRequestData` | `getAllMatchAsync(...)` | `MultiplayerResponseModels.GetAllMatchOperationResponse` |
| `getAllMatchmakingTicket` | `MultiplayerModels.ServerGetAllMatchmakingTicketRequestData` | `getAllMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.GetAllMatchmakingTicketOperationResponse` |


## Admin methods (`GNNetwork.multiplayer.admin.*`)

| Method | Request DTO | Async form | Response class |
|--------|-------------|------------|----------------|
| `cancelAllMatchmakingTicket` | `MultiplayerModels.AdminCancelAllMatchmakingTicketRequestData` | `cancelAllMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.CancelAllMatchmakingTicketOperationResponse` |
| `cancelMatchmakingTicket` | `MultiplayerModels.AdminCancelMatchmakingTicketRequestData` | `cancelMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.CancelMatchmakingTicketOperationResponse` |
| `createMatchmakingTicket` | `MultiplayerModels.AdminCreateMatchmakingTicketRequestData` | `createMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.CreateMatchmakingTicketOperationResponse` |
| `getMatchmakingTicket` | `MultiplayerModels.AdminGetMatchmakingTicketRequestData` | `getMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.GetMatchmakingTicketOperationResponse` |
| `getMatch` | `MultiplayerModels.AdminGetMatchRequestData` | `getMatchAsync(...)` | `MultiplayerResponseModels.GetMatchOperationResponse` |
| `getQueueStatistics` | `MultiplayerModels.AdminGetQueueStatisticsRequestData` | `getQueueStatisticsAsync(...)` | `MultiplayerResponseModels.GetQueueStatisticsOperationResponse` |
| `joinMatchmakingTicket` | `MultiplayerModels.AdminJoinMatchmakingTicketRequestData` | `joinMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.JoinMatchmakingTicketOperationResponse` |
| `listMatchmakingTicketsForPlayer` | `MultiplayerModels.AdminListMatchmakingTicketsForPlayerRequestData` | `listMatchmakingTicketsForPlayerAsync(...)` | `MultiplayerResponseModels.ListMatchmakingTicketsForPlayerOperationResponse` |
| `getAllMatch` | `MultiplayerModels.AdminGetAllMatchRequestData` | `getAllMatchAsync(...)` | `MultiplayerResponseModels.GetAllMatchOperationResponse` |
| `getAllMatchmakingTicket` | `MultiplayerModels.AdminGetAllMatchmakingTicketRequestData` | `getAllMatchmakingTicketAsync(...)` | `MultiplayerResponseModels.GetAllMatchmakingTicketOperationResponse` |


## Ví dụ tối thiểu

```ts
import { GNNetwork, ReturnCode, ErrorCode } from "@xmobitea/gn-typescript-client";

const res = await GNNetwork.multiplayer.cancelAllMatchmakingTicketAsync({ /* MultiplayerModels.CancelAllMatchmakingTicketRequestData */ } as any);
if (res.returnCode !== ReturnCode.Ok) return;
if (res.errorCode !== ErrorCode.Ok) return;
// res.responseData có typed payload
```
