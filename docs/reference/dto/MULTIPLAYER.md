# DTO Reference: Multiplayer

Matchmaking ticket lifecycle, queue statistics, match query.

Related API reference: [API_MULTIPLAYER.md](/docs/reference/API_MULTIPLAYER.md).

Mỗi section bên dưới là 1 class DTO trong namespace `<Models>`. Field table cho biết: tên field, TS type, có `required` hay không (suy từ decorator `mustNonNull` / `isOptional` / dấu `?` trong declaration), doc comment, và ràng buộc length/range/default nếu có.

> **Cách dùng**: khi gọi `*Async()`, bạn truyền object literal matching các field required (+ optional nếu cần). SDK sẽ serialize field dựa trên decorator `@<Type>DataMember({ code })`. Response class expose `responseData` là instance của class `*ResponseData` tương ứng, đọc theo field name dưới đây.

## Danh sách

- **MultiplayerModels** (from `MultiplayerModels.ts`)
  - [CancelAllMatchmakingTicketRequestData](#cancelallmatchmakingticketrequestdata)
  - [ServerCancelAllMatchmakingTicketRequestData](#servercancelallmatchmakingticketrequestdata)
  - [AdminCancelAllMatchmakingTicketRequestData](#admincancelallmatchmakingticketrequestdata)
  - [CancelMatchmakingTicketRequestData](#cancelmatchmakingticketrequestdata)
  - [ServerCancelMatchmakingTicketRequestData](#servercancelmatchmakingticketrequestdata)
  - [AdminCancelMatchmakingTicketRequestData](#admincancelmatchmakingticketrequestdata)
  - [CreateMatchmakingTicketRequestData](#creatematchmakingticketrequestdata)
  - [ServerCreateMatchmakingTicketRequestData](#servercreatematchmakingticketrequestdata)
  - [AdminCreateMatchmakingTicketRequestData](#admincreatematchmakingticketrequestdata)
  - [GetMatchmakingTicketRequestData](#getmatchmakingticketrequestdata)
  - [ServerGetMatchmakingTicketRequestData](#servergetmatchmakingticketrequestdata)
  - [AdminGetMatchmakingTicketRequestData](#admingetmatchmakingticketrequestdata)
  - [GetMatchRequestData](#getmatchrequestdata)
  - [ServerGetMatchRequestData](#servergetmatchrequestdata)
  - [AdminGetMatchRequestData](#admingetmatchrequestdata)
  - [GetAllMatchRequestData](#getallmatchrequestdata)
  - [ServerGetAllMatchRequestData](#servergetallmatchrequestdata)
  - [AdminGetAllMatchRequestData](#admingetallmatchrequestdata)
  - [GetAllMatchmakingTicketRequestData](#getallmatchmakingticketrequestdata)
  - [ServerGetAllMatchmakingTicketRequestData](#servergetallmatchmakingticketrequestdata)
  - [AdminGetAllMatchmakingTicketRequestData](#admingetallmatchmakingticketrequestdata)
  - [GetQueueStatisticsRequestData](#getqueuestatisticsrequestdata)
  - [ServerGetQueueStatisticsRequestData](#servergetqueuestatisticsrequestdata)
  - [AdminGetQueueStatisticsRequestData](#admingetqueuestatisticsrequestdata)
  - [JoinMatchmakingTicketRequestData](#joinmatchmakingticketrequestdata)
  - [ServerJoinMatchmakingTicketRequestData](#serverjoinmatchmakingticketrequestdata)
  - [AdminJoinMatchmakingTicketRequestData](#adminjoinmatchmakingticketrequestdata)
  - [ListMatchmakingTicketsForPlayerRequestData](#listmatchmakingticketsforplayerrequestdata)
  - [ServerListMatchmakingTicketsForPlayerRequestData](#serverlistmatchmakingticketsforplayerrequestdata)
  - [AdminListMatchmakingTicketsForPlayerRequestData](#adminlistmatchmakingticketsforplayerrequestdata)
  - [CancelAllMatchmakingTicketResponseData](#cancelallmatchmakingticketresponsedata)
  - [CreateMatchmakingTicketResponseData](#creatematchmakingticketresponsedata)
  - [MatchmakingTicketMember](#matchmakingticketmember)
  - [MatchmakingTicketResponseData](#matchmakingticketresponsedata)
  - [MatchmakingTicketWithTicketIdResponseData](#matchmakingticketwithticketidresponsedata)
  - [GetMatchmakingTicketResponseData](#getmatchmakingticketresponsedata)
  - [MatchMember](#matchmember)
  - [PortInfo](#portinfo)
  - [ServerDetail](#serverdetail)
  - [MatchResponseData](#matchresponsedata)
  - [MatchWithMatchIdResponseData](#matchwithmatchidresponsedata)
  - [GetMatchResponseData](#getmatchresponsedata)
  - [GetQueueStatisticsResponseData](#getqueuestatisticsresponsedata)
  - [ListMatchmakingTicketsForPlayerResponseData](#listmatchmakingticketsforplayerresponsedata)
  - [GetAllMatchResponseData](#getallmatchresponsedata)
  - [GetAllMatchmakingTicketResponseData](#getallmatchmakingticketresponsedata)
  - [EmptyResponseData](#emptyresponsedata)
- **MultiplayerRequestModels** (from `MultiplayerRequestModels.ts`)
  - [CancelAllMatchmakingTicketOperationRequest](#cancelallmatchmakingticketoperationrequest)
  - [ServerCancelAllMatchmakingTicketOperationRequest](#servercancelallmatchmakingticketoperationrequest)
  - [AdminCancelAllMatchmakingTicketOperationRequest](#admincancelallmatchmakingticketoperationrequest)
  - [CancelMatchmakingTicketOperationRequest](#cancelmatchmakingticketoperationrequest)
  - [ServerCancelMatchmakingTicketOperationRequest](#servercancelmatchmakingticketoperationrequest)
  - [AdminCancelMatchmakingTicketOperationRequest](#admincancelmatchmakingticketoperationrequest)
  - [CreateMatchmakingTicketOperationRequest](#creatematchmakingticketoperationrequest)
  - [ServerCreateMatchmakingTicketOperationRequest](#servercreatematchmakingticketoperationrequest)
  - [AdminCreateMatchmakingTicketOperationRequest](#admincreatematchmakingticketoperationrequest)
  - [GetMatchmakingTicketOperationRequest](#getmatchmakingticketoperationrequest)
  - [ServerGetMatchmakingTicketOperationRequest](#servergetmatchmakingticketoperationrequest)
  - [AdminGetMatchmakingTicketOperationRequest](#admingetmatchmakingticketoperationrequest)
  - [GetMatchOperationRequest](#getmatchoperationrequest)
  - [ServerGetMatchOperationRequest](#servergetmatchoperationrequest)
  - [AdminGetMatchOperationRequest](#admingetmatchoperationrequest)
  - [GetQueueStatisticsOperationRequest](#getqueuestatisticsoperationrequest)
  - [ServerGetQueueStatisticsOperationRequest](#servergetqueuestatisticsoperationrequest)
  - [AdminGetQueueStatisticsOperationRequest](#admingetqueuestatisticsoperationrequest)
  - [JoinMatchmakingTicketOperationRequest](#joinmatchmakingticketoperationrequest)
  - [ServerJoinMatchmakingTicketOperationRequest](#serverjoinmatchmakingticketoperationrequest)
  - [AdminJoinMatchmakingTicketOperationRequest](#adminjoinmatchmakingticketoperationrequest)
  - [ListMatchmakingTicketsForPlayerOperationRequest](#listmatchmakingticketsforplayeroperationrequest)
  - [ServerListMatchmakingTicketsForPlayerOperationRequest](#serverlistmatchmakingticketsforplayeroperationrequest)
  - [AdminListMatchmakingTicketsForPlayerOperationRequest](#adminlistmatchmakingticketsforplayeroperationrequest)
  - [GetAllMatchOperationRequest](#getallmatchoperationrequest)
  - [ServerGetAllMatchOperationRequest](#servergetallmatchoperationrequest)
  - [AdminGetAllMatchOperationRequest](#admingetallmatchoperationrequest)
  - [GetAllMatchmakingTicketOperationRequest](#getallmatchmakingticketoperationrequest)
  - [ServerGetAllMatchmakingTicketOperationRequest](#servergetallmatchmakingticketoperationrequest)
  - [AdminGetAllMatchmakingTicketOperationRequest](#admingetallmatchmakingticketoperationrequest)
- **MultiplayerResponseModels** (from `MultiplayerResponseModels.ts`)
  - [CancelAllMatchmakingTicketOperationResponse](#cancelallmatchmakingticketoperationresponse)
  - [CancelMatchmakingTicketOperationResponse](#cancelmatchmakingticketoperationresponse)
  - [CreateMatchmakingTicketOperationResponse](#creatematchmakingticketoperationresponse)
  - [GetMatchmakingTicketOperationResponse](#getmatchmakingticketoperationresponse)
  - [GetMatchOperationResponse](#getmatchoperationresponse)
  - [GetQueueStatisticsOperationResponse](#getqueuestatisticsoperationresponse)
  - [JoinMatchmakingTicketOperationResponse](#joinmatchmakingticketoperationresponse)
  - [ListMatchmakingTicketsForPlayerOperationResponse](#listmatchmakingticketsforplayeroperationresponse)
  - [GetAllMatchOperationResponse](#getallmatchoperationresponse)
  - [GetAllMatchmakingTicketOperationResponse](#getallmatchmakingticketoperationresponse)

---

## Namespace `MultiplayerModels`

### CancelAllMatchmakingTicketRequestData

Defines the request payload for CancelAllMatchmakingTicket.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `queueName` | `string` | yes | _minLength=6, maxLength=32_ |

### ServerCancelAllMatchmakingTicketRequestData

Extends: `CancelAllMatchmakingTicketRequestData`

Defines the request payload for ServerCancelAllMatchmakingTicket.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `userId` | `string` | yes | _minLength=10, maxLength=10_ |

### AdminCancelAllMatchmakingTicketRequestData

Extends: `ServerCancelAllMatchmakingTicketRequestData`

Defines the request payload for AdminCancelAllMatchmakingTicket.

_Không có field public (payload rỗng)._ 

### CancelMatchmakingTicketRequestData

Defines the request payload for CancelMatchmakingTicket.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `ticketId` | `string` | yes | _minLength=10, maxLength=10_ |

### ServerCancelMatchmakingTicketRequestData

Extends: `CancelMatchmakingTicketRequestData`

Defines the request payload for ServerCancelMatchmakingTicket.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `userId` | `string` | yes | _minLength=10, maxLength=10_ |

### AdminCancelMatchmakingTicketRequestData

Extends: `ServerCancelMatchmakingTicketRequestData`

Defines the request payload for AdminCancelMatchmakingTicket.

_Không có field public (payload rỗng)._ 

### CreateMatchmakingTicketRequestData

Creates a new matchmaking ticket for the current or target player.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `giveUpAfterSeconds` | `number` | yes | Maximum wait time before the ticket gives up. — _min=20_ |
| `queueName` | `string` | yes | _minLength=6, maxLength=32_ |
| `attribute` | `GNHashtable` | no | Backend-defined matchmaking attribute payload. |
| `members` | `Array<string>` | no | Optional extra members joined into the same matchmaking party. — _elementCls=String_ |

### ServerCreateMatchmakingTicketRequestData

Extends: `CreateMatchmakingTicketRequestData`

Defines the request payload for ServerCreateMatchmakingTicket.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `userId` | `string` | yes | _minLength=10, maxLength=10_ |

### AdminCreateMatchmakingTicketRequestData

Extends: `ServerCreateMatchmakingTicketRequestData`

Defines the request payload for AdminCreateMatchmakingTicket.

_Không có field public (payload rỗng)._ 

### GetMatchmakingTicketRequestData

Polls the current state of one matchmaking ticket.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `ticketId` | `string` | yes | _minLength=10, maxLength=10_ |
| `returnMember` | `boolean` | no | Requests member details in addition to the ticket summary. — _default=false_ |

### ServerGetMatchmakingTicketRequestData

Extends: `GetMatchmakingTicketRequestData`

Defines the request payload for ServerGetMatchmakingTicket.

_Không có field public (payload rỗng)._ 

### AdminGetMatchmakingTicketRequestData

Extends: `ServerGetMatchmakingTicketRequestData`

Defines the request payload for AdminGetMatchmakingTicket.

_Không có field public (payload rỗng)._ 

### GetMatchRequestData

Reads a match after matchmaking has produced a `matchId`.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `matchId` | `string` | yes | _minLength=15, maxLength=15_ |
| `returnMember` | `boolean` | no | Requests member details in addition to the match summary. — _default=false_ |

### ServerGetMatchRequestData

Extends: `GetMatchRequestData`

Defines the request payload for ServerGetMatch.

_Không có field public (payload rỗng)._ 

### AdminGetMatchRequestData

Extends: `ServerGetMatchRequestData`

Defines the request payload for AdminGetMatch.

_Không có field public (payload rỗng)._ 

### GetAllMatchRequestData

Defines the request payload for GetAllMatch.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `returnMember` | `boolean` | no | _default=false_ |
| `skip` | `number` | no | _min=0, default=0_ |
| `limit` | `number` | no | _min=1, max=100, default=10_ |

### ServerGetAllMatchRequestData

Extends: `GetAllMatchRequestData`

Defines the request payload for ServerGetAllMatch.

_Không có field public (payload rỗng)._ 

### AdminGetAllMatchRequestData

Extends: `ServerGetAllMatchRequestData`

Defines the request payload for AdminGetAllMatch.

_Không có field public (payload rỗng)._ 

### GetAllMatchmakingTicketRequestData

Lists matchmaking tickets with optional status filtering.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `status` | `number` | no | Ticket status filter mapped by the public `MatchmakingTicketStatus` enum. — _min=1, max=5_ |
| `returnMember` | `boolean` | no | _default=false_ |
| `skip` | `number` | no | _min=0, default=0_ |
| `limit` | `number` | no | _min=1, max=100, default=10_ |

### ServerGetAllMatchmakingTicketRequestData

Extends: `GetAllMatchmakingTicketRequestData`

Defines the request payload for ServerGetAllMatchmakingTicket.

_Không có field public (payload rỗng)._ 

### AdminGetAllMatchmakingTicketRequestData

Extends: `ServerGetAllMatchmakingTicketRequestData`

Defines the request payload for AdminGetAllMatchmakingTicket.

_Không có field public (payload rỗng)._ 

### GetQueueStatisticsRequestData

Defines the request payload for GetQueueStatistics.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `queueName` | `string` | yes | _minLength=6, maxLength=32_ |
| `timeInSeconds` | `number` | yes | _min=20_ |

### ServerGetQueueStatisticsRequestData

Extends: `GetQueueStatisticsRequestData`

Defines the request payload for ServerGetQueueStatistics.

_Không có field public (payload rỗng)._ 

### AdminGetQueueStatisticsRequestData

Extends: `ServerGetQueueStatisticsRequestData`

Defines the request payload for AdminGetQueueStatistics.

_Không có field public (payload rỗng)._ 

### JoinMatchmakingTicketRequestData

Defines the request payload for JoinMatchmakingTicket.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `ticketId` | `string` | yes | _minLength=10, maxLength=10_ |
| `attribute` | `GNHashtable` | no | — |

### ServerJoinMatchmakingTicketRequestData

Extends: `JoinMatchmakingTicketRequestData`

Defines the request payload for ServerJoinMatchmakingTicket.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `userId` | `string` | yes | _minLength=10, maxLength=10_ |

### AdminJoinMatchmakingTicketRequestData

Extends: `ServerJoinMatchmakingTicketRequestData`

Defines the request payload for AdminJoinMatchmakingTicket.

_Không có field public (payload rỗng)._ 

### ListMatchmakingTicketsForPlayerRequestData

Lists ticket IDs for the current or target player within one queue.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `queueName` | `string` | yes | _minLength=6, maxLength=32_ |

### ServerListMatchmakingTicketsForPlayerRequestData

Extends: `ListMatchmakingTicketsForPlayerRequestData`

Defines the request payload for ServerListMatchmakingTicketsForPlayer.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `userId` | `string` | yes | _minLength=10, maxLength=10_ |

### AdminListMatchmakingTicketsForPlayerRequestData

Extends: `ServerListMatchmakingTicketsForPlayerRequestData`

Defines the request payload for AdminListMatchmakingTicketsForPlayer.

_Không có field public (payload rỗng)._ 

### CancelAllMatchmakingTicketResponseData

Defines the response payload for CancelAllMatchmakingTicket.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `ticketIds` | `Array<string>` | yes | _elementCls=String_ |

### CreateMatchmakingTicketResponseData

Defines the response payload for CreateMatchmakingTicket.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `ticketId` | `string` | yes | — |

### MatchmakingTicketMember

Describes one member attached to a matchmaking ticket.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `userId` | `string` | yes | _minLength=10, maxLength=10_ |
| `status` | `number` | yes | Member status value defined by backend matchmaking semantics. |
| `attribute` | `GNHashtable` | yes | — |

### MatchmakingTicketResponseData

Describes the current state of a matchmaking ticket.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `tsCreate` | `number` | yes | — |
| `creatorId` | `string` | yes | _minLength=10, maxLength=10_ |
| `giveUpAfterSeconds` | `number` | yes | — |
| `queueName` | `string` | yes | _minLength=6, maxLength=32_ |
| `status` | `number` | yes | Ticket status mapped by the public `MatchmakingTicketStatus` enum. |
| `matchId` | `string` | no | _minLength=15, maxLength=15_ |
| `members` | `Array<MatchmakingTicketMember>` | no | _elementCls=MatchmakingTicketMember_ |

### MatchmakingTicketWithTicketIdResponseData

Extends: `MatchmakingTicketResponseData`

Defines the response payload for MatchmakingTicketWithTicketId.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `ticketId` | `string` | yes | — |

### GetMatchmakingTicketResponseData

Defines the response payload for GetMatchmakingTicket.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `matchmakingTicket` | `MatchmakingTicketResponseData` | yes | — |

### MatchMember

Describes one member attached to a resolved match.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `userId` | `string` | yes | _minLength=10, maxLength=10_ |
| `teamId` | `string` | yes | — |
| `attribute` | `GNHashtable` | yes | — |

### PortInfo

Represents PortInfo.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `name` | `string` | yes | — |
| `publicPort` | `number` | yes | _min=0_ |
| `privatePort` | `number` | yes | _min=0_ |
| `protocol` | `number` | yes | _min=1, max=2_ |

### ServerDetail

Represents ServerDetail.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `ipV4Address` | `string` | yes | — |
| `ports` | `Array<PortInfo>` | yes | _elementCls=PortInfo_ |

### MatchResponseData

Describes one resolved match. The public contract exposes queue/member data but does not include server endpoint fields here.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `tsCreate` | `number` | yes | — |
| `queueName` | `string` | yes | _minLength=6, maxLength=32_ |
| `members` | `Array<MatchMember>` | no | _elementCls=MatchMember_ |
| `timeToMatchInSeconds` | `number` | yes | — |

### MatchWithMatchIdResponseData

Extends: `MatchResponseData`

Defines the response payload for MatchWithMatchId.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `matchId` | `string` | yes | — |

### GetMatchResponseData

Defines the response payload for GetMatch.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `match` | `MatchResponseData` | yes | — |

### GetQueueStatisticsResponseData

Defines the response payload for GetQueueStatistics.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `pendingMemberCount` | `number` | yes | — |
| `pendingTicketCount` | `number` | yes | — |
| `averageMatchmakingTimeInSeconds` | `number` | yes | — |

### ListMatchmakingTicketsForPlayerResponseData

Defines the response payload for ListMatchmakingTicketsForPlayer.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `ticketIds` | `Array<string>` | yes | _elementCls=String_ |

### GetAllMatchResponseData

Defines the response payload for GetAllMatch.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `results` | `Array<MatchWithMatchIdResponseData>` | yes | _elementCls=MatchWithMatchIdResponseData_ |

### GetAllMatchmakingTicketResponseData

Defines the response payload for GetAllMatchmakingTicket.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `results` | `Array<MatchmakingTicketWithTicketIdResponseData>` | yes | _elementCls=MatchmakingTicketWithTicketIdResponseData_ |

### EmptyResponseData

Defines an intentionally empty response payload.

_Không có field public (payload rỗng)._ 

## Namespace `MultiplayerRequestModels`

### CancelAllMatchmakingTicketOperationRequest

Extends: `CustomOperationRequestAbstract<MultiplayerModels.CancelAllMatchmakingTicketRequestData>`

Maps the CancelAllMatchmakingTicket operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### ServerCancelAllMatchmakingTicketOperationRequest

Extends: `CancelAllMatchmakingTicketOperationRequest`

Maps the ServerCancelAllMatchmakingTicket operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### AdminCancelAllMatchmakingTicketOperationRequest

Extends: `CancelAllMatchmakingTicketOperationRequest`

Maps the AdminCancelAllMatchmakingTicket operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### CancelMatchmakingTicketOperationRequest

Extends: `CustomOperationRequestAbstract<MultiplayerModels.CancelMatchmakingTicketRequestData>`

Maps the CancelMatchmakingTicket operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### ServerCancelMatchmakingTicketOperationRequest

Extends: `CancelMatchmakingTicketOperationRequest`

Maps the ServerCancelMatchmakingTicket operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### AdminCancelMatchmakingTicketOperationRequest

Extends: `CancelMatchmakingTicketOperationRequest`

Maps the AdminCancelMatchmakingTicket operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### CreateMatchmakingTicketOperationRequest

Extends: `CustomOperationRequestAbstract<MultiplayerModels.CreateMatchmakingTicketRequestData>`

Maps the CreateMatchmakingTicket operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### ServerCreateMatchmakingTicketOperationRequest

Extends: `CreateMatchmakingTicketOperationRequest`

Maps the ServerCreateMatchmakingTicket operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### AdminCreateMatchmakingTicketOperationRequest

Extends: `CreateMatchmakingTicketOperationRequest`

Maps the AdminCreateMatchmakingTicket operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### GetMatchmakingTicketOperationRequest

Extends: `CustomOperationRequestAbstract<MultiplayerModels.GetMatchmakingTicketRequestData>`

Maps the GetMatchmakingTicket operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### ServerGetMatchmakingTicketOperationRequest

Extends: `GetMatchmakingTicketOperationRequest`

Maps the ServerGetMatchmakingTicket operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### AdminGetMatchmakingTicketOperationRequest

Extends: `GetMatchmakingTicketOperationRequest`

Maps the AdminGetMatchmakingTicket operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### GetMatchOperationRequest

Extends: `CustomOperationRequestAbstract<MultiplayerModels.GetMatchRequestData>`

Maps the GetMatch operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### ServerGetMatchOperationRequest

Extends: `GetMatchOperationRequest`

Maps the ServerGetMatch operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### AdminGetMatchOperationRequest

Extends: `GetMatchOperationRequest`

Maps the AdminGetMatch operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### GetQueueStatisticsOperationRequest

Extends: `CustomOperationRequestAbstract<MultiplayerModels.GetQueueStatisticsRequestData>`

Maps the GetQueueStatistics operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### ServerGetQueueStatisticsOperationRequest

Extends: `GetQueueStatisticsOperationRequest`

Maps the ServerGetQueueStatistics operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### AdminGetQueueStatisticsOperationRequest

Extends: `GetQueueStatisticsOperationRequest`

Maps the AdminGetQueueStatistics operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### JoinMatchmakingTicketOperationRequest

Extends: `CustomOperationRequestAbstract<MultiplayerModels.JoinMatchmakingTicketRequestData>`

Maps the JoinMatchmakingTicket operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### ServerJoinMatchmakingTicketOperationRequest

Extends: `JoinMatchmakingTicketOperationRequest`

Maps the ServerJoinMatchmakingTicket operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### AdminJoinMatchmakingTicketOperationRequest

Extends: `JoinMatchmakingTicketOperationRequest`

Maps the AdminJoinMatchmakingTicket operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### ListMatchmakingTicketsForPlayerOperationRequest

Extends: `CustomOperationRequestAbstract<MultiplayerModels.ListMatchmakingTicketsForPlayerRequestData>`

Maps the ListMatchmakingTicketsForPlayer operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### ServerListMatchmakingTicketsForPlayerOperationRequest

Extends: `ListMatchmakingTicketsForPlayerOperationRequest`

Maps the ServerListMatchmakingTicketsForPlayer operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### AdminListMatchmakingTicketsForPlayerOperationRequest

Extends: `ListMatchmakingTicketsForPlayerOperationRequest`

Maps the AdminListMatchmakingTicketsForPlayer operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### GetAllMatchOperationRequest

Extends: `CustomOperationRequestAbstract<MultiplayerModels.GetAllMatchRequestData>`

Maps the GetAllMatch operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### ServerGetAllMatchOperationRequest

Extends: `GetAllMatchOperationRequest`

Maps the ServerGetAllMatch operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### AdminGetAllMatchOperationRequest

Extends: `GetAllMatchOperationRequest`

Maps the AdminGetAllMatch operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### GetAllMatchmakingTicketOperationRequest

Extends: `CustomOperationRequestAbstract<MultiplayerModels.GetAllMatchmakingTicketRequestData>`

Maps the GetAllMatchmakingTicket operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### ServerGetAllMatchmakingTicketOperationRequest

Extends: `GetAllMatchmakingTicketOperationRequest`

Maps the ServerGetAllMatchmakingTicket operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

### AdminGetAllMatchmakingTicketOperationRequest

Extends: `GetAllMatchmakingTicketOperationRequest`

Maps the AdminGetAllMatchmakingTicket operation to a typed request wrapper.

_Không có field public (payload rỗng)._ 

## Namespace `MultiplayerResponseModels`

### CancelAllMatchmakingTicketOperationResponse

Extends: `CustomOperationResponseAbstract<MultiplayerModels.CancelAllMatchmakingTicketResponseData>`

Maps the CancelAllMatchmakingTicket operation to a typed response wrapper.

_Không có field public (payload rỗng)._ 

### CancelMatchmakingTicketOperationResponse

Extends: `CustomOperationResponseAbstract<MultiplayerModels.EmptyResponseData>`

Maps the CancelMatchmakingTicket operation to a typed response wrapper.

_Không có field public (payload rỗng)._ 

### CreateMatchmakingTicketOperationResponse

Extends: `CustomOperationResponseAbstract<MultiplayerModels.CreateMatchmakingTicketResponseData>`

Maps the CreateMatchmakingTicket operation to a typed response wrapper.

_Không có field public (payload rỗng)._ 

### GetMatchmakingTicketOperationResponse

Extends: `CustomOperationResponseAbstract<MultiplayerModels.GetMatchmakingTicketResponseData>`

Maps the GetMatchmakingTicket operation to a typed response wrapper.

_Không có field public (payload rỗng)._ 

### GetMatchOperationResponse

Extends: `CustomOperationResponseAbstract<MultiplayerModels.GetMatchResponseData>`

Maps the GetMatch operation to a typed response wrapper.

_Không có field public (payload rỗng)._ 

### GetQueueStatisticsOperationResponse

Extends: `CustomOperationResponseAbstract<MultiplayerModels.GetQueueStatisticsResponseData>`

Maps the GetQueueStatistics operation to a typed response wrapper.

_Không có field public (payload rỗng)._ 

### JoinMatchmakingTicketOperationResponse

Extends: `CustomOperationResponseAbstract<MultiplayerModels.EmptyResponseData>`

Maps the JoinMatchmakingTicket operation to a typed response wrapper.

_Không có field public (payload rỗng)._ 

### ListMatchmakingTicketsForPlayerOperationResponse

Extends: `CustomOperationResponseAbstract<MultiplayerModels.ListMatchmakingTicketsForPlayerResponseData>`

Maps the ListMatchmakingTicketsForPlayer operation to a typed response wrapper.

_Không có field public (payload rỗng)._ 

### GetAllMatchOperationResponse

Extends: `CustomOperationResponseAbstract<MultiplayerModels.GetAllMatchResponseData>`

Maps the GetAllMatch operation to a typed response wrapper.

_Không có field public (payload rỗng)._ 

### GetAllMatchmakingTicketOperationResponse

Extends: `CustomOperationResponseAbstract<MultiplayerModels.GetAllMatchmakingTicketResponseData>`

Maps the GetAllMatchmakingTicket operation to a typed response wrapper.

_Không có field public (payload rỗng)._ 

