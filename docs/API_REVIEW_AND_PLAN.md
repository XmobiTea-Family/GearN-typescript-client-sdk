# API Review And Plan

## Mục đích

File này dùng để chốt lại những gì đã làm trong pass review comment và pass viết tài liệu AI cho `AuthenticateApi`, đồng thời đưa ra plan rõ ràng cho các nhóm API còn lại để các pass sau không bị sót phạm vi.

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
- Đã tạo `docs/AUTHENTICATE_API_README.md` theo format dành cho AI:
  - hard rules
  - decision matrix
  - required input
  - response contract
  - best practice
  - anti-pattern
  - ví dụ `async/await`
- Đã đổi toàn bộ reference trong doc `AuthenticateApi` từ `../src/...` sang `../dist/...d.ts` để phù hợp bản build publish.

## Phần chưa làm xong hoàn toàn

- Nhiều model DTO trong `src/runtime/entity/models/*Models.ts` vẫn còn comment kiểu `Represents X`.
- Các comment này không sai nghĩa, nhưng vẫn còn chung chung và chưa đồng bộ với style mô tả mới.
- Mới chỉ có AI guide chi tiết cho `AuthenticateApi`.
- Các nhóm API còn lại chưa có file `docs/<GROUP>_API_README.md`.

## Trạng thái theo nhóm API

| Nhóm API | Namespace có operation | Tổng public method | Trạng thái tài liệu AI | Ghi chú |
| --- | --- | ---: | --- | --- |
| `AuthenticateApi` | `client` | 18 | Done | `server` và `admin` đang rỗng, không dùng |
| `DashboardApi` | `client` | 26 | Pending | `server` và `admin` đang rỗng |
| `CloudScriptApi` | `client`, `server`, `admin` | 15 | Pending | Nhóm nhỏ, phù hợp để chốt template tiếp theo |
| `ContentApi` | `client`, `server`, `admin` | 21 | Pending | Có flow upload/download content |
| `MultiplayerApi` | `client`, `server`, `admin` | 30 | Pending | Có liên hệ với socket/game session |
| `StoreInventoryApi` | `client`, `server`, `admin` | 42 | Pending | Quy mô vừa |
| `InventoryApi` | `client`, `server`, `admin` | 102 | Pending | Bắt đầu có bề mặt lớn |
| `GroupApi` | `client`, `server`, `admin` | 120 | Pending | Có cả operation và event realtime |
| `GamePlayerApi` | `client`, `server`, `admin` | 156 | Pending | Nhóm lớn, nhiều flow gameplay |
| `CharacterPlayerApi` | `client`, `server`, `admin` | 159 | Pending | Nhóm lớn, nhiều flow social/profile |
| `MasterPlayerApi` | `client`, `server`, `admin` | 256 | Pending | Nhóm lớn nhất, rủi ro sót cao nhất |

## Thứ tự triển khai đề xuất

### Phase 1: chốt template trên nhóm nhỏ và dễ kiểm soát

1. `DashboardApi`
2. `CloudScriptApi`
3. `ContentApi`
4. `MultiplayerApi`
5. `StoreInventoryApi`

Lý do:

- Các nhóm này có bề mặt nhỏ hoặc vừa.
- Dễ chốt format tài liệu cho AI trước khi đi vào nhóm rất lớn.
- `DashboardApi` là case đặc biệt giống `AuthenticateApi` ở chỗ chỉ có `client`, nên nên làm sớm để tránh AI suy diễn sai về `server/admin`.

### Phase 2: nhóm gameplay/data có độ rộng cao

1. `InventoryApi`
2. `GroupApi`
3. `GamePlayerApi`
4. `CharacterPlayerApi`

Lý do:

- Bắt đầu có nhiều operation và nhiều biến thể theo role.
- `GroupApi` và `GamePlayerApi` có yếu tố realtime hoặc event, cần viết rule rõ để AI không nhầm HTTP với socket.
- `CharacterPlayerApi` và `GamePlayerApi` dễ bị AI chọn sai method nếu không có decision matrix đủ chặt.

### Phase 3: nhóm lớn nhất, làm sau cùng nhưng phải làm sâu

1. `MasterPlayerApi`

Lý do:

- Đây là nhóm có footprint lớn nhất.
- Nhiều operation tên gần giống nhau, dễ sinh code sai nếu chỉ nhìn tên method.
- Nên chỉ làm sau khi template, checklist và style tài liệu đã ổn định ở các nhóm trước.

## Checklist bắt buộc cho mỗi nhóm API còn lại

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

- `docs/DASHBOARD_API_README.md`
- `docs/CLOUDSCRIPT_API_README.md`
- `docs/CONTENT_API_README.md`
- `docs/MULTIPLAYER_API_README.md`
- `docs/STORE_INVENTORY_API_README.md`
- `docs/INVENTORY_API_README.md`
- `docs/GROUP_API_README.md`
- `docs/GAME_PLAYER_API_README.md`
- `docs/CHARACTER_PLAYER_API_README.md`
- `docs/MASTER_PLAYER_API_README.md`

## Kết luận ngắn

- Pass hiện tại đã xong phần review comment nền tảng và đã có template tài liệu AI hoàn chỉnh cho `AuthenticateApi`.
- Việc còn lại chủ yếu là rollout cùng format đó cho 10 nhóm API còn lại.
- Để giảm rủi ro sót, nên đi theo đúng thứ tự phase ở trên và giữ checklist này làm chuẩn cố định cho mọi pass sau.
