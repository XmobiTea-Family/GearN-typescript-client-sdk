# API Review And Plan

## Mục đích

File này dùng để chốt lại những gì đã làm trong pass review comment và pass viết tài liệu AI cho toàn bộ nhóm API public chính, đồng thời giữ lại checklist chuẩn để các pass sau không bị sót phạm vi.

## Những gì đã hoàn thành

- Đã review comment bắt đầu từ `src/runtime/GNNetwork.ts` và đi xuống runtime core.
- Đã chỉnh hoặc bổ sung comment ở các nhóm file nền tảng:
  - runtime entry và transport: `GNNetwork.ts`, `NetworkingPeer.ts`, `PeerBase.ts`, `HttpPeer.ts`, `SocketPeer.ts`, `NetworkingSocketPeerBase.ts`, `NetworkingPeerSocketIOClient.ts`, `NetworkingHttpPeerBase.ts`
  - operation/entity/helper: `OperationRequest.ts`, `OperationResponse.ts`, `OperationEvent.ts`, `OperationPending.ts`, `CodeHelper.ts`, `ConverterService.ts`, `EnumUtility.ts`, `GNSupport.ts`, `GNUtils.ts`, `MessagePackConverterService.ts`, `OperationHelper.ts`, `StorageService.ts`
  - constant và response phụ: `Commands.ts`, `EventCode.ts`, `OperationCode.ts`, `ReturnCode.ts`, `ParameterCode.ts`, `ErrorCode.ts`, `GetAuthInfoResponse.ts`, `HealthCheckResponse.ts`, `UploadFileResponse.ts`
  - event handler: `IServerEventHandler.ts` và toàn bộ `On*EventHandler.ts`
- Đã chuẩn hóa comment ở toàn bộ `src/runtime/GNNetwork*Api.ts` để mô tả đúng hành vi thật:
  - gửi operation nào
  - qua transport nào
  - trả về typed response nào
- Đã cập nhật `README.MD` để thêm mô tả ngắn cho `AuthenticateApi` và dẫn link sang tài liệu chi tiết.
- Đã tạo `docs/guides/AUTHENTICATE.md` theo format dành cho AI:
  - hard rules
  - decision matrix
  - required input
  - response contract
  - best practice
  - anti-pattern
  - ví dụ `async/await`
- Đã cập nhật `README.MD` để thêm mô tả ngắn cho `DashboardApi` và sửa lại note secret key theo đúng implementation hiện tại.
- Đã tạo `docs/guides/DASHBOARD.md` theo cùng format AI rule-based cho `DashboardApi`.
- Đã cập nhật `README.MD` để thêm mô tả ngắn cho `ContentApi`.
- Đã tạo `docs/guides/CONTENT.md` theo cùng format AI rule-based cho `ContentApi`.
- Đã cập nhật `README.MD` để thêm mô tả ngắn cho `MultiplayerApi`.
- Đã tạo `docs/guides/MULTIPLAYER.md` theo cùng format AI rule-based cho `MultiplayerApi`.
- Đã cập nhật `README.MD` để thêm mô tả ngắn cho `StoreInventoryApi`.
- Đã tạo `docs/guides/STORE_INVENTORY.md` theo cùng format AI rule-based cho `StoreInventoryApi`.
- Đã cập nhật `README.MD` để thêm mô tả ngắn cho `InventoryApi`.
- Đã tạo `docs/guides/INVENTORY.md` theo cùng format AI rule-based cho `InventoryApi`.
- Đã cập nhật `README.MD` để thêm mô tả ngắn cho `GroupApi`.
- Đã tạo `docs/guides/GROUP.md` theo cùng format AI rule-based cho `GroupApi`.
- Đã cập nhật `README.MD` để thêm mô tả ngắn cho `MasterPlayerApi`.
- Đã tạo `docs/guides/MASTER_PLAYER.md` theo cùng format AI rule-based cho `MasterPlayerApi`.
- Đã cập nhật `README.MD` để thêm mô tả ngắn cho `GamePlayerApi`.
- Đã tạo `docs/guides/GAME_PLAYER.md` theo cùng format AI rule-based cho `GamePlayerApi`.
- Đã cập nhật `README.MD` để thêm mô tả ngắn cho `CharacterPlayerApi`.
- Đã tạo `docs/guides/CHARACTER_PLAYER.md` theo cùng format AI rule-based cho `CharacterPlayerApi`.
- Đã cập nhật `README.MD` để thêm mô tả ngắn cho `CloudScriptApi`.
- Đã tạo `docs/guides/CLOUDSCRIPT.md` theo cùng format AI rule-based cho `CloudScriptApi`.
- Đã đổi toàn bộ reference trong doc `AuthenticateApi` từ `../src/...` sang `../dist/...d.ts` để phù hợp bản build publish.

## Phần chưa làm xong hoàn toàn

- Nhiều model DTO trong `src/runtime/entity/models/*Models.ts` vẫn còn comment kiểu `Represents X`.
- Các comment này không sai nghĩa, nhưng vẫn còn chung chung và chưa đồng bộ với style mô tả mới.
- Mới chỉ có AI guide chi tiết cho các nhóm API public chính; phần còn lại chủ yếu là các model DTO comment còn chung chung.
- Không còn nhóm API public chính nào thiếu file `docs/<GROUP>_API_README.md` trong plan hiện tại.

## Trạng thái theo nhóm API

| Nhóm API | Namespace có operation | Tổng public method | Trạng thái tài liệu AI | Ghi chú |
| --- | --- | ---: | --- | --- |
| `AuthenticateApi` | `client` | 18 | Done | `server` và `admin` đang rỗng, không dùng |
| `DashboardApi` | `client` | 26 | Done | `server` và `admin` đang rỗng |
| `ContentApi` | `client`, `server`, `admin` | 21 | Done | Có flow upload/download content |
| `MultiplayerApi` | `client`, `server`, `admin` | 30 | Done | Semantics là multiplayer nhưng wrapper hiện tại vẫn là HTTP |
| `StoreInventoryApi` | `client`, `server`, `admin` | 42 | Done | Có nhiều enum và cursor log dễ dùng sai |
| `InventoryApi` | `client`, `server`, `admin` | 102 | Done | Query lớn phụ thuộc nhiều vào `infoRequestParam` |
| `GroupApi` | `client`, `server`, `admin` | 120 | Done | Operation là HTTP, realtime update tách riêng qua socket event |
| `GamePlayerApi` | `client`, `server`, `admin` | 156 | Done | Có realtime friend/group riêng qua socket event nhưng operation vẫn là HTTP |
| `CharacterPlayerApi` | `client`, `server`, `admin` | 159 | Done | Character-level API, gần như mọi flow target đều cần `characterId` rõ ràng |
| `MasterPlayerApi` | `client`, `server`, `admin` | 256 | Done | Có nhiều flow identity, leaderboard, push và socket event dễ dùng sai |
| `CloudScriptApi` | `client`, `server`, `admin` | 15 | Done | API versioned script, `editFunction` không sửa source code và `server/admin execute` bắt buộc có `userId` |

## Thứ tự triển khai đề xuất

### Phase 1: đã chốt nhóm data lớn đầu tiên

1. `InventoryApi`

Lý do:

- `DashboardApi` đã được chốt xong và xác nhận thêm một case quan trọng: dù semantics là dashboard/admin, code hiện tại vẫn đi theo `RequestRole.Client`.
- `ContentApi` đã được chốt xong và bổ sung luôn sequence upload/download để tránh AI sinh thiếu bước.
- `MultiplayerApi` đã được chốt xong và khóa rõ điểm dễ nhầm nhất: đây không phải nhóm socket API dù tên là multiplayer.
- `StoreInventoryApi` đã được chốt xong và khóa luôn các enum nhạy cảm như `StoreItemType`, `StoreReceiveType`, `OwnerType`.
- `InventoryApi` đã được chốt xong và bổ sung thêm các rule dễ nhầm như `statisticsKeys` vs `itemStatisticsKeys`, `setAmount` vs `changeItemStatistics`, và `setOwner` vs transfer ownership.

### Phase 2: đã chốt xong nhóm gameplay/data có độ rộng cao

1. `CharacterPlayerApi`

Lý do:

- Bắt đầu có nhiều operation và nhiều biến thể theo role.
- `GroupApi` đã được chốt xong và khóa rõ điểm dễ nhầm nhất: operation dùng HTTP nhưng realtime update đi bằng socket event handler riêng.
- `MasterPlayerApi` đã được chốt xong theo yêu cầu và khóa rõ điểm quan trọng: `client` có thể tự target current player, còn `server/admin` phải truyền `userId`, đồng thời email/push/socket-event vẫn là HTTP wrapper.
- `GamePlayerApi` đã được chốt xong và khóa rõ điểm dễ nhầm nhất: lifecycle friend/group đi qua HTTP, còn realtime update đi bằng `OnGamePlayerFriendUpdateEventHandler` và `OnGamePlayerGroupUpdateEventHandler`.
- `CharacterPlayerApi` đã được chốt xong và khóa rõ điểm dễ nhầm nhất: gần như toàn bộ flow target đều cần `characterId`, relation item chỉ là snapshot nhẹ, và create character không nằm trong nhóm này.

### Phase 3: đã chốt xong nhóm cuối theo yêu cầu hiện tại

1. `CloudScriptApi`

Lý do:

- Đã có yêu cầu rõ ràng là triển khai `CloudScriptApi` cuối cùng.
- `CloudScriptApi` đã được chốt xong và khóa rõ điểm dễ nhầm nhất: `editFunction` không đổi source code, `version` khác `functionName`, và `server/admin execute` bắt buộc có `userId`.

## Checklist bắt buộc cho mỗi nhóm API còn lại hoặc pass review tiếp theo

- Đọc `src/runtime/GNNetwork<Group>Api.ts` để xác định toàn bộ namespace có operation thật.
- Đọc `src/runtime/entity/models/<Group>Models.ts`, `<Group>RequestModels.ts`, `<Group>ResponseModels.ts` để xác nhận:
  - request field bắt buộc
  - response type trả về
  - `RequestType`
  - `RequestRole`
  - transport thật dùng là HTTP hay socket
- Không suy luận từ tên method nếu chưa cross-check `RequestModels`.
- Nếu có enum đặc biệt, phải dẫn link sang `../dist/...d.ts`.
- Ví dụ code phải ưu tiên `async/await`.
- Ví dụ code phải dùng public package surface, không trỏ về `src`.
- File tài liệu phải trả lời đủ các câu hỏi sau:
  - khi nào dùng method này
  - khi nào không dùng method này
  - cần truyền gì tối thiểu
  - nhận lại gì
  - cần auth token hay secret key nào
  - có liên quan socket hay không
- Nếu namespace `server` hoặc `admin` rỗng, phải ghi rule cứng là không dùng.
- Nếu operation phụ thuộc bước trước đó, phải ghi sequence rõ ràng theo thứ tự gọi.
- Mọi ví dụ phải kiểm tra `returnCode` và `errorCode` đúng cách.

## Điểm dễ sai cần khóa cứng

- Không để markdown link trong docs trỏ về `../src/...`; chỉ dùng `../dist/...d.ts`.
- Không giả định `server` hoặc `admin` usable chỉ vì class được expose trong SDK.
- Với mọi API có `.server` hoặc `.admin` trừ `DashboardApi`, phải ghi rõ rule cứng: chỉ dùng khi đã cấu hình đúng `serverSecretKey` / `adminSecretKey` hoặc cố ý `overrideSecretKey`.
- `client/server/admin` là trust boundary của caller, không phải cách phân loại target là của mình hay của người khác.
- `self/other self` là target context backend suy ra thêm trên route `client`; không được nhầm nó với `server/admin`.
- Với các domain không có ownership semantics rõ như `ContentApi`, `StoreInventoryApi`, `MultiplayerApi`, `CloudScriptApi`, không cố viết giải thích `self/other self` khi contract thật không dùng logic đó.
- Mọi API doc cần reference về rule chuẩn trong `README.MD#route-and-permission-rules` thay vì tự diễn giải lại theo cách riêng.
- Không giả định success là `0`; hiện tại `ReturnCode.Ok === 1` và `ErrorCode.Ok === 1`.
- Không gộp auth socket vào auth HTTP; socket auth là bước riêng sau khi đã có token hợp lệ.
- Không mô tả method theo tên gọi marketing; phải mô tả theo behavior thật trong code.
- Không bỏ qua `overrideAuthToken`, `overrideSecretKey`, `customTags`, `timeout` nếu nhóm đó có ý nghĩa vận hành đặc biệt.
- Không viết ví dụ theo callback nếu không có lý do; mặc định ưu tiên `Async`.

## Format chuẩn cho các file tài liệu tiếp theo

- `README.MD`: chỉ thêm 1 đoạn mô tả ngắn cho nhóm API và 1 link sang file chi tiết.
- `docs/<GROUP>_API_README.md`: dùng format dành cho AI, ngắn và rule-based.
- Mỗi file chi tiết nên có tối thiểu các section sau:
  - scope
  - hard rules
  - decision matrix
  - required input
  - response rules
  - best practice
  - anti-pattern
  - ví dụ `async/await`
  - checklist cho AI trước khi sinh code

## Gợi ý tên file cho các pass tiếp theo

- Hiện không còn file `docs/<GROUP>_API_README.md` nào bị thiếu trong phạm vi plan này.
- Nếu làm pass tiếp theo, trọng tâm hợp lý là rewrite comment DTO/model ở `src/runtime/entity/models/*Models.ts`.

## Kết luận ngắn

- Pass hiện tại đã xong phần review comment nền tảng và đã có template tài liệu AI hoàn chỉnh cho `AuthenticateApi`, `DashboardApi`, `ContentApi`, `MultiplayerApi`, `StoreInventoryApi`, `InventoryApi`, `GroupApi`, `MasterPlayerApi`, `GamePlayerApi`, `CharacterPlayerApi` và `CloudScriptApi`.
- Trong phạm vi plan hiện tại, toàn bộ nhóm API public chính đã có file guide riêng cho AI.
- Việc còn lại nếu làm tiếp nên chuyển sang pass chất lượng comment DTO/model và đồng bộ câu mô tả ở `src/runtime/entity/models`.
- Để giảm rủi ro sót, nên giữ checklist này làm chuẩn cố định cho mọi pass sau.
