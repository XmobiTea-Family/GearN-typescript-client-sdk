# GearN TypeScript Client SDK

SDK TypeScript client cho GearN Server.

`GNNetwork` là entrypoint duy nhất ở tầng public API. Sau khi `init()`, toàn bộ thao tác đều đi qua các nhóm API tĩnh như `GNNetwork.authenticate`, `GNNetwork.dashboard`, `GNNetwork.inventory`, `GNNetwork.group`, ...

> AI note: nếu bạn là AI agent hoặc code assistant đang làm việc trực tiếp trong repo này, hãy đọc [AGENTS.md](AGENTS.md) trước để nắm rule chuẩn về route, permission, auth flow, socket flow và thứ tự đọc tài liệu.

> AI machine-readable: package hiện ship thêm [docs/ai-manifest.json](docs/ai-manifest.json) để agent/tooling đọc nhanh các rule nền, route semantics và map từng API group mà không phải parse toàn bộ markdown trước.

## AI Quick Rules

- Tên package publish đúng là `@xmobitea/gn-typescript-client`.
- Public entrypoint duy nhất là `GNNetwork`.
- Luôn `GNNetwork.init(settings)` trước khi gọi API.
- Chỉ `GNNetwork.init(settings)` 1 lần ở bootstrap của mỗi app session.
- Mặc định ưu tiên `async/await` và các method `*Async()`.
- Luôn kiểm tra `returnCode` trước, rồi mới kiểm tra `errorCode`.
- Chọn `client/server/admin` theo trust boundary của caller, không theo target ownership.
- Socket auth là bước riêng sau HTTP auth; SDK sẽ tự auth socket nếu token đã có trong cache.
- `DashboardApi` là ngoại lệ: public wrapper hiện vẫn đi qua `RequestRole.Client`, backend resolve admin context từ `authToken`.

## 1. Yêu cầu

- Node.js `>= 20`
- Nếu bạn tự tạo request/response model bằng decorator: bật `experimentalDecorators` và `emitDecoratorMetadata`

Ví dụ `tsconfig.json` khi bạn dùng custom DTO:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

## 2. Cài đặt

```bash
npm install @xmobitea/gn-typescript-client
```

## 3. Cách SDK hoạt động

Flow chuẩn:

1. Tạo `GNServerSettings`
2. Gọi `GNNetwork.init(settings)` đúng 1 lần
3. Dùng các API qua `GNNetwork.*`
4. Nếu app cần realtime và cần kết nối socket sau khi đã có `authToken`, gọi `GNNetwork.connectSocket()`
5. Khi socket connect và SDK đã có `authToken` trong cache, SDK sẽ tự auth socket; chỉ gọi `GNNetwork.sendRequestAuthSocket()` thủ công khi cần re-auth

Những nhóm API public hiện có:

- `GNNetwork.authenticate`
- `GNNetwork.characterPlayer`
- `GNNetwork.content`
- `GNNetwork.dashboard`
- `GNNetwork.gamePlayer`
- `GNNetwork.group`
- `GNNetwork.inventory`
- `GNNetwork.masterPlayer`
- `GNNetwork.storeInventory`
- `GNNetwork.multiplayer`
- `GNNetwork.cloudScript`

### AuthenticateApi

`GNNetwork.authenticate` là nhóm API xác thực player qua HTTP cho các flow `login`, `registerAccount` và `refreshAuthToken`, dùng `RequestType.Authenticate` với `RequestRole.Client`, đồng thời tự cập nhật auth state cache của SDK khi thành công; `GNNetwork.authenticate.server` và `GNNetwork.authenticate.admin` hiện không có operation public để gọi. Xem rule chi tiết dành cho AI code assistant tại [docs/AUTHENTICATE_API_README.md](docs/AUTHENTICATE_API_README.md).

### DashboardApi

`GNNetwork.dashboard` là nhóm API dashboard/admin qua HTTP cho các flow quản trị như `loginByAdminAccount`, quản lý game, secret, analytics và maintenance; theo implementation hiện tại toàn bộ wrapper dùng `RequestType.Dashboard` với `RequestRole.Client`, nên ở tầng SDK nếu không truyền `overrideSecretKey` thì request vẫn gắn `clientSecretKey`, nhưng trong triển khai GearN server hiện tại sau `loginByAdminAccount` thành công backend middleware sẽ resolve secret context và quyền riêng của admin từ `authToken` cho các request dashboard tiếp theo; `GNNetwork.dashboard.server` và `GNNetwork.dashboard.admin` hiện vẫn không có operation public để gọi. Xem rule chi tiết dành cho AI code assistant tại [docs/DASHBOARD_API_README.md](docs/DASHBOARD_API_README.md).

### ContentApi

`GNNetwork.content` là nhóm API content/file qua HTTP cho các flow đọc ghi content config, tạo metadata upload, lấy thông tin file và xin download token; khác với `AuthenticateApi` và `DashboardApi`, nhóm này có đủ cả `client`, `server`, `admin`, và role thực tế được chọn đúng theo namespace tương ứng, nên SDK sẽ mặc định lấy `clientSecretKey`, `serverSecretKey` hoặc `adminSecretKey` nếu bạn không truyền `overrideSecretKey`. Xem rule chi tiết dành cho AI code assistant tại [docs/CONTENT_API_README.md](docs/CONTENT_API_README.md).

### MultiplayerApi

`GNNetwork.multiplayer` là nhóm API matchmaking/match query qua HTTP cho các flow tạo ticket, join ticket, hủy ticket, poll trạng thái ticket, đọc match và thống kê queue; nhóm này có đủ `client`, `server`, `admin`, role thực tế được chọn đúng theo namespace tương ứng, nhưng dù semantics là multiplayer thì wrapper hiện tại vẫn đi qua HTTP chứ không phải socket. Xem rule chi tiết dành cho AI code assistant tại [docs/MULTIPLAYER_API_README.md](docs/MULTIPLAYER_API_README.md).

### StoreInventoryApi

`GNNetwork.storeInventory` là nhóm API store/ecommerce qua HTTP cho các flow đọc catalog store item, mua item, tặng item, validate receipt, đọc log giao dịch và quản lý trạng thái used/remove; nhóm này có đủ `client`, `server`, `admin`, role thực tế được chọn đúng theo namespace tương ứng, và nhiều request phụ thuộc đúng enum như `StoreItemType`, `StoreReceiveType`, `OwnerType` cùng `infoRequestParam` để điều khiển payload trả về. Xem rule chi tiết dành cho AI code assistant tại [docs/STORE_INVENTORY_API_README.md](docs/STORE_INVENTORY_API_README.md).

### InventoryApi

`GNNetwork.inventory` là nhóm API inventory/item metadata qua HTTP cho các flow đọc field của item, query danh sách item, đọc leaderboard/statistics log và cập nhật segment, tag, owner, amount, custom data, item data; nhóm này có đủ `client`, `server`, `admin`, role thực tế được chọn đúng theo namespace tương ứng, và nhiều flow query lớn bắt buộc `infoRequestParam` để quyết định payload trả về. Xem rule chi tiết dành cho AI code assistant tại [docs/INVENTORY_API_README.md](docs/INVENTORY_API_README.md).

### GamePlayerApi

`GNNetwork.gamePlayer` là nhóm API game-player gameplay/profile qua HTTP cho các flow đọc hồ sơ tổng hợp, đọc quan hệ nhẹ như character, inventory, group, friend, search player, xem leaderboard toàn cục hoặc trong mạng bạn bè, đồng thời tạo group, tạo character, tạo item, add/remove friend và join/leave group; nhóm này có đủ `client`, `server`, `admin`, trong đó `client` có thể bỏ `userId` để thao tác trên game player hiện tại còn `server/admin` phải truyền `userId` rõ ràng, và realtime update friend/group được tách riêng qua socket event handler. Xem rule chi tiết dành cho AI code assistant tại [docs/GAME_PLAYER_API_README.md](docs/GAME_PLAYER_API_README.md).

### CharacterPlayerApi

`GNNetwork.characterPlayer` là nhóm API character-level gameplay/social qua HTTP cho các flow đọc metadata của character, owner/remove status, relation item nhẹ như inventory, group, friend, search character, xem leaderboard, tạo group từ góc nhìn character, tạo item cho character, add/remove friend và join/leave group; nhóm này có đủ `client`, `server`, `admin`, nhưng khác `GamePlayerApi` ở chỗ public contract hiện tại gần như luôn yêu cầu `characterId` rõ ràng và realtime update friend/group được tách riêng qua socket event handler. Xem rule chi tiết dành cho AI code assistant tại [docs/CHARACTER_PLAYER_API_README.md](docs/CHARACTER_PLAYER_API_README.md).

### GroupApi

`GNNetwork.group` là nhóm API group metadata/member/message/currency/data qua HTTP cho các flow đọc group info, search group, add/remove member, gửi/đọc group message, thao tác group inventory/currency/statistics và đọc leaderboard/log; nhóm này có đủ `client`, `server`, `admin`, operation vẫn là HTTP nhưng có thêm realtime update tách riêng qua socket event handler như `OnGroupMessageUpdateEventHandler` và `OnGroupMemberUpdateEventHandler`. Xem rule chi tiết dành cho AI code assistant tại [docs/GROUP_API_README.md](docs/GROUP_API_README.md).

### MasterPlayerApi

`GNNetwork.masterPlayer` là nhóm API master-player account/profile/identity qua HTTP cho các flow đọc hồ sơ tổng hợp, search player theo external identity, link/unlink account thiết bị hoặc social, đổi password, cập nhật currency/statistics/data/tag/segment và gửi email, push, socket operation event; nhóm này có đủ `client`, `server`, `admin`, trong đó `client` có thể bỏ `userId` để thao tác trên master player hiện tại còn `server/admin` phải truyền `userId` rõ ràng. Xem rule chi tiết dành cho AI code assistant tại [docs/MASTER_PLAYER_API_README.md](docs/MASTER_PLAYER_API_README.md).

### CloudScriptApi

`GNNetwork.cloudScript` là nhóm API CloudScript/versioned script qua HTTP cho các flow publish script version mới, bật/tắt khả năng execute hoặc live của một version, thực thi function theo `functionName`, đọc chi tiết một version và liệt kê các version hiện có; nhóm này có đủ `client`, `server`, `admin`, nhưng `client` chỉ nên dùng cho flow execute từ app nếu backend thực sự cho phép, còn các flow quản trị version thường nên đi qua `server` hoặc `admin`, đồng thời public contract hiện không có delete function và `editFunction` không sửa source code. Xem rule chi tiết dành cho AI code assistant tại [docs/CLOUDSCRIPT_API_README.md](docs/CLOUDSCRIPT_API_README.md).

## 4. Khởi tạo cơ bản

```ts
import {
 GNNetwork,
 GNServerSettings,
 LogType,
 MessageType,
} from "@xmobitea/gn-typescript-client";

const settings = new GNServerSettings();
settings.config({
 // GearN server host or IP address
 serverAddress: "127.0.0.1",
 // Public HTTP port
 serverPort: 2202,
 // Public socket port
 serverSocketPort: 2901,
 // Set true when the public endpoint is exposed over HTTPS.
 // Use -1 for ports when the public proxy serves the default port.
 useSsl: false,
 // Enable socket transport
 useSocket: true,
 // Enable HTTP transport
 useHttp: true,
 // Default request timeout in seconds
 defaultTimeoutInSeconds: 20,
 // Preferred payload format. On browsers, HTTP MsgPack requests automatically fall back to JSON.
 messageType: MessageType.MsgPack,
 // Maximum requests the SDK will try to send per second
 sendRate: 20,
 // Socket reconnect delay in milliseconds
 reconnectDelay: 5000,
 // Socket ping interval in milliseconds
 pingInterval: 20000,
 // Socket ping timeout in milliseconds
 pingTimeout: 20000,
 // Used by `.admin` routes
 adminSecretKey: "",
 // Used by `.server` routes
 serverSecretKey: "",
 // Used by client routes and as the default transport secret for DashboardApi wrappers
 clientSecretKey: "your-client-secret",
 // SDK log level
 logType: LogType.All,
});

GNNetwork.init(settings);
```

Ghi chú:

- `GNNetwork.init()` là singleton-style. Gọi lại lần 2 sẽ bị bỏ qua.
- `clientSecretKey`, `serverSecretKey`, `adminSecretKey` được tự chọn theo `RequestRole` của từng operation.
- `client`, `server`, `admin` là trust boundary của bên gọi, không phải cách phân biệt target là của mình hay của người khác.
- Với mọi API có namespace `.server` hoặc `.admin` trừ `DashboardApi`, chỉ dùng route đó khi bạn đã cấu hình `serverSecretKey` / `adminSecretKey` hợp lệ trong `GNServerSettings`, hoặc chủ động truyền `overrideSecretKey`.
- Trên browser, nếu `settings.messageType = MessageType.MsgPack` thì HTTP transport sẽ tự fallback sang JSON. Không cần blanket-override toàn bộ SDK sang `MessageType.Json` trừ khi bạn muốn đồng bộ cấu hình đó.

### Advanced: ConverterService

`ConverterService` là helper public để convert giữa object typed có decorator với `GNHashtable` / `GNArray`. Trong flow SDK bình thường bạn gần như không cần gọi tay, vì `GNNetwork.init()` đã tự init converter và toàn bộ request/response typed đã dùng nó nội bộ.

Chỉ nên dùng khi bạn tự định nghĩa DTO có decorator và muốn serialize/deserialize thủ công.

Ví dụ đầy đủ với các loại `DataMember` chính:

```ts
import {
 ConverterService,
 DataMember,
 GNArrayDataMember,
 GNHashtableDataMember,
 NumberDataMember,
 GNHashtable,
 BooleanDataMember,
 StringDataMember,
} from "@xmobitea/gn-typescript-client";

class ProfileStats {
 @NumberDataMember({ code: "level", defaultValue: 1, mustInt: true })
 level: number;

 @NumberDataMember({ code: "power", defaultValue: 0 })
 power: number;
}

class FriendInfo {
 @StringDataMember({ code: "userId", mustNonNull: true })
 userId: string;

 @BooleanDataMember({ code: "online", defaultValue: false })
 online: boolean;
}

class CustomProfile {
 @StringDataMember({ code: "displayName", mustNonNull: true })
 displayName: string;

 @NumberDataMember({ code: "age", isOptional: true, minValue: 0, mustInt: true })
 age?: number;

 @BooleanDataMember({ code: "isVip", defaultValue: false })
 isVip: boolean;

 @GNHashtableDataMember({ code: "stats" })
 stats: ProfileStats;

 @GNArrayDataMember({ code: "friends", elementCls: FriendInfo, isOptional: true })
 friends?: FriendInfo[];

 @DataMember({ code: "metadata", isOptional: true })
 metadata?: any;
}

const source = GNHashtable.builder()
 .add("displayName", "Player 01")
 .add("age", 20)
 .add("isVip", true)
 .add("stats", GNHashtable.builder()
  .add("level", 12)
  .add("power", 3456)
  .build())
 .add("friends", [
  GNHashtable.builder().add("userId", "USER000001").add("online", true).build(),
  GNHashtable.builder().add("userId", "USER000002").add("online", false).build()
 ])
 .add("metadata", {
  region: "ap-southeast",
  tags: ["new", "tester"]
 })
 .build();

const profile = ConverterService.deserializeObject(source, CustomProfile) as CustomProfile;
const metadata = profile.metadata?.toData?.() ?? profile.metadata;

const serializedObject = ConverterService.serializeObject(profile, CustomProfile);
console.log(serializedObject.toData());
console.log(metadata);

const serializedArray = ConverterService.serializeArray(profile.friends ?? [], FriendInfo);
console.log(serializedArray.toData());

const deserializedFriends = ConverterService.deserializeArray(serializedArray, FriendInfo) as FriendInfo[];
console.log(deserializedFriends[0]?.userId);
```

Rule nhanh:

- Dùng `GNNetwork.*` bình thường: không cần gọi `ConverterService`.
- Tự build custom model có decorator: có thể dùng `deserializeObject`, `deserializeArray`, `serializeObject`, `serializeArray`.
- Với `GNArrayDataMember`, nếu mảng chứa typed object thì luôn truyền `elementCls`.
- Với `DataMember` generic cho payload động, dữ liệu deserialize có thể là raw `GNHashtable` / `GNArray`; nếu cần plain object thì gọi `.toData()`.
- Không gọi `ConverterService.init()` tay nếu bạn đã dùng `GNNetwork.init()`.

## 5. Quick Start: login bằng custom device id

Ví dụ này là flow client dễ dùng nhất vì request ngắn và không cần username/password.

```ts
import {
 GNNetwork,
 AuthenticateModels,
 ReturnCode,
 ErrorCode,
} from "@xmobitea/gn-typescript-client";

const infoRequest = new AuthenticateModels.InfoRequestParam();
infoRequest.displayName = true;
infoRequest.avatar = true;
infoRequest.playerDatas = true;

const request = new AuthenticateModels.LoginByCustomDeviceIdRequestData();
request.customDeviceId = "device-000001";
request.createPlayerIfNotExists = true;
request.infoRequestParam = infoRequest;

const response = await GNNetwork.authenticate.loginByCustomDeviceIdAsync(request);

if (response.hasReturnCodeError()) {
 throw new Error(`ReturnCode failed: ${response.returnCode} - ${response.debugMessage}`);
}

if (response.errorCode !== ErrorCode.Ok) {
 throw new Error(`Business error: ${response.errorCode}`);
}

console.log("userId", GNNetwork.getAuthenticateStatus().getUserId());
console.log("authToken", GNNetwork.getAuthenticateStatus().getAuthToken());
console.log("player", response.responseData);
```

Lưu ý rất quan trọng:

- `ReturnCode.Ok === 1`
- `ErrorCode.Ok === 1`
- Không kiểm tra success bằng `0`

## 6. Login bằng account

```ts
import {
 GNNetwork,
 AuthenticateModels,
 ReturnCode,
 ErrorCode,
} from "@xmobitea/gn-typescript-client";

const infoRequest = new AuthenticateModels.InfoRequestParam();
infoRequest.displayName = true;
infoRequest.playerStatistics = true;

const request = new AuthenticateModels.LoginByAccountRequestData();
request.username = "player001";
request.password = "12345678";
request.infoRequestParam = infoRequest;

const response = await GNNetwork.authenticate.loginByAccountAsync(request);

if (response.returnCode !== ReturnCode.Ok) {
 throw new Error(response.debugMessage);
}

if (response.errorCode !== ErrorCode.Ok) {
 throw new Error(`Business error: ${response.errorCode}`);
}
```

<a id="socket-auth-flow"></a>

## 7. Socket usage đúng cách

Rule chuẩn:

1. Login hoặc refresh token qua HTTP trước.
2. Khi `GNNetwork.getAuthenticateStatus()` đã có `authToken`, gọi `GNNetwork.connectSocket()`.
3. Khi socket connect thành công, SDK sẽ tự gửi auth token hiện tại.
4. Chỉ gọi `GNNetwork.sendRequestAuthSocket()` thủ công nếu socket đã connect từ trước khi token xuất hiện, hoặc token vừa đổi và bạn muốn re-auth ngay mà không reconnect.

Ví dụ:

```ts
import { GNNetwork } from "@xmobitea/gn-typescript-client";

GNNetwork.subscriberOnConnectHandler(() => {
 console.log("socket connected", GNNetwork.getSocketSId());
});

GNNetwork.subscriberOnDisconnectHandler(() => {
 console.log("socket disconnected");
});

GNNetwork.setOnEventHandler((event) => {
 console.log("eventCode", event.getEventCode());
 console.log("parameters", event.getParameters()?.toData());
});

GNNetwork.connectSocket(); // Call this after a successful HTTP login or refresh flow.
```

Ví dụ re-auth thủ công khi socket đã connect sẵn trước đó:

```ts
import { GNNetwork } from "@xmobitea/gn-typescript-client";

if (GNNetwork.isSocketConnected() && GNNetwork.getAuthenticateStatus().getAuthToken()) {
 GNNetwork.sendRequestAuthSocket();
}
```

Thông tin hữu ích:

- `GNNetwork.isSocketConnected()` chỉ kiểm tra dựa trên socket session id hiện tại
- `GNNetwork.getPing()` trả về ping trung bình từ transport đang active
- `GNNetwork.syncTs()` đồng bộ local estimate của server timestamp

## 8. Dashboard / admin flow

`DashboardApi` hiện gửi qua HTTP với `RequestType.Dashboard` và `RequestRole.Client`, nên ở tầng SDK nếu bạn không truyền `overrideSecretKey` thì request vẫn dùng `clientSecretKey`; tuy nhiên trong triển khai GearN server hiện tại, sau `loginByAdminAccount` thành công backend middleware sẽ resolve secret context riêng của admin từ `authToken`, nên flow đúng là login trước rồi dùng `authToken` đó cho các request dashboard tiếp theo. Xem rule chi tiết tại [docs/DASHBOARD_API_README.md](docs/DASHBOARD_API_README.md).

Ví dụ login admin:

```ts
import {
 GNNetwork,
 DashboardModels,
 ReturnCode,
 ErrorCode,
} from "@xmobitea/gn-typescript-client";

const request = new DashboardModels.LoginByAdminAccountRequestData();
request.username = "gnadmin";
request.password = "123456";

const response = await GNNetwork.dashboard.loginByAdminAccountAsync(request);

if (response.returnCode !== ReturnCode.Ok) {
 throw new Error(response.debugMessage);
}

if (response.errorCode !== ErrorCode.Ok) {
 throw new Error(`Business error: ${response.errorCode}`);
}

console.log("admin auth token", GNNetwork.getAuthenticateStatus().getAuthToken());
```

## 9. Cấu trúc method của các API

Đa số method public có 2 biến thể:

- callback style
- async/await style

Pattern chung:

```ts
method(requestData, onResponse?, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?)
methodAsync(requestData, overrideAuthToken?, overrideSecretKey?, customTags?, timeout?)
```

Ý nghĩa các tham số phụ:

- `overrideAuthToken`: ép dùng auth token khác token hiện đang cache
- `overrideSecretKey`: ép dùng secret key khác secret key trong `GNServerSettings`
- `customTags`: gắn metadata phụ vào request
- `timeout`: override timeout cho riêng request đó

Ví dụ `customTags`:

```ts
import { GNHashtable } from "@xmobitea/gn-typescript-client";

const customTags = GNHashtable.builder()
 .add("traceId", "trace-001")
 .add("build", "qa")
 .build();
```

## 10. Response model cần hiểu đúng

Các method typed trả về class kế thừa từ `CustomOperationResponseAbstract<T>`.

Bạn sẽ gặp các field chính:

- `returnCode`: trạng thái transport/protocol
- `debugMessage`: message lỗi low-level
- `invalidMembers`: danh sách field invalid nếu request sai
- `errorCode`: business error từ backend
- `responseData`: payload typed sau khi deserialize

Thứ tự kiểm tra nên là:

```ts
if (response.hasReturnCodeError()) {
 throw new Error(response.debugMessage);
}

if (response.errorCode !== ErrorCode.Ok) {
 throw new Error(`Business error: ${response.errorCode}`);
}
```

Phân biệt 3 lỗi low-level rất dễ nhầm:

- `ReturnCode.SecretInvalid`: `secretKey` sai, thiếu, hoặc không khớp route/game context.
- `ReturnCode.OperationInvalid`: operation không tồn tại, hoặc không hợp lệ với request type/role hiện tại.
- `ReturnCode.OperationNotAllow`: operation có tồn tại và `secretKey` cũng hợp lệ, nhưng permission rules của `secretKey` không cho phép chạy operation đó trong target context hiện tại.

<a id="route-and-permission-rules"></a>

### Permission Rules Của Secret Key

GearN Server map quyền theo từng domain và từng operation, ví dụ `masterPlayer.getPlayerInformation`, `gamePlayer.addPlayerFriend`, `group.sendGroupMessage`, ...

### Khi Nào Dùng `client`, `server`, `admin`

Chọn route theo bên gọi thực sự là ai:

- `client`: code chạy trong app/player client.
- `server`: code chạy trong trusted backend như game server, internal service, worker, cron, webhook backend.
- `admin`: code chạy trong backoffice, dashboard, GM tool, migration tool, vận hành dữ liệu.

Rule cứng:

- Không chọn `server` hay `admin` chỉ vì target không thuộc user hiện tại.
- Không dùng `.server` hoặc `.admin` từ app client chỉ để vượt permission.
- `self` và `other self` là ngữ cảnh target mà backend suy ra thêm trên route `client`.
- `server` và `admin` là route đặc quyền riêng, yêu cầu `serverSecretKey` hoặc `adminSecretKey` cùng permission tương ứng.

Decision nhanh:

- Nếu logic đang chạy trong app của player: dùng `client`.
- Nếu logic đang chạy trong backend tin cậy và là một phần của hệ thống game: dùng `server`.
- Nếu logic đang là thao tác quản trị/vận hành bởi admin hoặc tool backoffice: dùng `admin`.
- Ngoại lệ hiện tại là `DashboardApi`: ở public SDK wrapper này vẫn đi qua `RequestRole.Client`, rồi backend resolve admin context từ `authToken` sau `loginByAdminAccount`.

4 cờ permission quan trọng:

- `selfEnable`: cho phép thực thi trên chính tài nguyên thuộc user đã authenticate.
- `otherSelfEnable`: cho phép thực thi trên tài nguyên không thuộc user đã authenticate.
- `serverSelfEnable`: cho phép thực thi qua route `server`.
- `adminSelfEnable`: cho phép thực thi qua route `admin`.

Ngữ nghĩa `self`:

- Với `MasterPlayerApi` và `GamePlayerApi`, `self` nghĩa là target `userId` trùng `userId` đã authenticate thành công từ `AuthenticateApi`.
- Nếu request không truyền `userId`, hoặc truyền `userId` đúng bằng user đang authenticate, backend sẽ xử lý theo nhánh `self`.
- Nếu request truyền `userId` khác user đang authenticate, backend sẽ xử lý theo nhánh `other self`.
- Với `CharacterPlayerApi`, `InventoryApi`, `GroupApi`, `self` nghĩa là entity target đang thuộc ownership của `GamePlayer` có `userId` trùng với user đã authenticate.
- Với `ContentApi`, `StoreInventoryApi`, `MultiplayerApi`, `CloudScriptApi` và các domain không gắn ownership player rõ ràng, không cố ép về `self/other self`; vẫn chọn route theo trust boundary của caller rồi để backend áp permission theo contract thật của operation.

Nói ngắn gọn:

- `selfEnable`: được phép thao tác trên chính những thứ thuộc về user đang authenticate.
- `otherSelfEnable`: được phép thao tác trên những thứ không thuộc về user đang authenticate.

Ví dụ cách hiểu đúng:

- App player gọi `masterPlayer.getPlayerInformationAsync()` cho chính user đang login: đây là `client + self`.
- App player gọi `masterPlayer.getPlayerInformationAsync(userIdKhac)`: đây là `client + other self`.
- Backend game server gọi `gamePlayer.server.changePlayerCurrencyAsync(...)`: đây là `server`, không phải `client + other self`.
- GM tool gọi `inventory.admin.setRemoveStatusAsync(...)`: đây là `admin`, không phải `client + other self`.

Nếu bạn nhận `ReturnCode.OperationNotAllow`, hãy kiểm tra theo thứ tự:

1. đang dùng đúng route `client/server/admin` chưa
2. `secretKey` hiện tại có permission cho đúng domain và operation chưa
3. operation đó đang rơi vào nhánh `self` hay `other self`
4. với route `server/admin`, đã có `serverSelfEnable` hoặc `adminSelfEnable` chưa

## 11. Game id và auth state

SDK tự persist các giá trị sau qua `StorageService`:

- auth token
- user id
- game id

Bạn có thể set `gameId` thủ công:

```ts
GNNetwork.setGameId("your-game-id");
```

Đọc lại trạng thái hiện tại:

```ts
const authToken = GNNetwork.getAuthenticateStatus().getAuthToken();
const userId = GNNetwork.getAuthenticateStatus().getUserId();
const gameId = GNNetwork.getGameId();
```

## 12. Health check, auth info, upload file

### Health check

```ts
const response = await GNNetwork.healthCheckAsync();
console.log(response);
```

### Lấy auth info

```ts
const authInfo = await GNNetwork.getAuthInfoAsync("some-auth-token");
console.log(authInfo);
```

### Upload file

Upload file yêu cầu đã có auth token hợp lệ.

```ts
const bytes = new Uint8Array([1, 2, 3, 4]);

const uploadResponse = await GNNetwork.uploadFileAsync(
 "file-001",
 bytes,
 "demo.bin",
 "application/octet-stream",
);

console.log(uploadResponse);
```

Tạo URL download từ download token:

```ts
const url = GNNetwork.getDownloadFileUrl("download-token-from-server");
console.log(url);
```

## 13. Advanced: tự định nghĩa custom operation

SDK có sẵn low-level API để bạn tự bọc operation nếu backend có endpoint mới mà package chưa expose.

Ví dụ typed request/response custom:

```ts
import {
 GNNetwork,
 CustomOperationRequestAbstract,
 CustomOperationResponseAbstract,
 RequestRole,
 RequestType,
 OperationCode,
 ParameterCode,
 StringDataMember,
} from "@xmobitea/gn-typescript-client";

class ExampleRequestData {
 @StringDataMember({ code: ParameterCode.Key, mustNonNull: true })
 public key: string;
}

class ExampleResponseData {
 @StringDataMember({ code: ParameterCode.Value, isOptional: true })
 public value?: string;
}

class ExampleRequest extends CustomOperationRequestAbstract<ExampleRequestData> {
 protected override operationCode: string = OperationCode.GetCustomData;
 protected override requestType: RequestType = RequestType.CharacterPlayer;
 protected override role: RequestRole = RequestRole.Client;

 constructor(requestData: ExampleRequestData, timeout: number) {
  super(requestData, timeout);
  this.requestDataCls = ExampleRequestData;
 }
}

class ExampleResponse extends CustomOperationResponseAbstract<ExampleResponseData> {
 constructor() {
  super();
  this.responseDataCls = ExampleResponseData;
 }
}

const requestData = new ExampleRequestData();
requestData.key = "tutorial";

const response = await GNNetwork.sendViaHttpTRequestTResponseAsync(
 new ExampleRequest(requestData, 20),
 null,
 null,
 null,
 ExampleResponse,
);
```

Ghi chú:

- Khi tự tạo DTO, bạn phải dùng decorator như `StringDataMember`, `NumberDataMember`, `GNHashtableDataMember`, ...
- Khi tự tạo request class, phải gán đủ `operationCode`, `requestType`, `role`, `requestDataCls`
- Khi tự tạo response class, phải gán `responseDataCls`

## 14. Browser / Node / Cocos

SDK có logic detect platform qua `GNSupport`.

```ts
import { GNSupport } from "@xmobitea/gn-typescript-client";

console.log(GNSupport.getPlatformType());
```

Lưu ý thực tế:

- HTTP + `MessageType.MsgPack` trên browser có fallback sang JSON
- Nếu bạn dùng Cocos Creator, nên giữ `experimentalDecorators` và `emitDecoratorMetadata` bật khi có custom DTO

## 15. Build và publish

Các script hiện có trong repo:

```bash
npm run test
npm run build:node
npm run build:udm
npm run build:minudm
npm run build:cocos
npm run build
```

Ý nghĩa nhanh:

- `build:node`: build bản CommonJS cho Node
- `build:udm`: build bản UMD
- `build:minudm`: build bản UMD minified
- `build:cocos`: build bản dùng cho Cocos
- `build`: build tất cả output chính

## 16. Các lỗi hay gặp

### 1. Gọi API trước khi `GNNetwork.init()`

Triệu chứng:

- null settings
- null peer
- socket/http không hoạt động

Cách xử lý:

- luôn init một lần ở bootstrap của app

### 2. Login thành công transport nhưng fail business

Triệu chứng:

- `returnCode === ReturnCode.Ok`
- nhưng `errorCode !== ErrorCode.Ok`

Cách xử lý:

- kiểm tra cả `returnCode` lẫn `errorCode`

### 3. Socket connect rồi nhưng không nhận luồng user auth

Nguyên nhân:

- bạn connect socket trước khi SDK có `authToken`
- hoặc `authToken` đã đổi nhưng socket vẫn đang giữ auth context cũ

Cách xử lý:

- ưu tiên login HTTP trước rồi mới `connectSocket()`
- nếu socket đã connect trước khi token xuất hiện hoặc token vừa đổi, gọi `GNNetwork.sendRequestAuthSocket()` để re-auth

### 4. Thiếu hoặc sai secret key theo route

Nguyên nhân:

- `GNServerSettings` thiếu secret key tương ứng với role của operation
- đang gọi namespace `.server` hoặc `.admin`, nhưng chỉ cấu hình `clientSecretKey`
- đang dùng đúng operation nhưng sai trust boundary, ví dụ backend logic lại đi qua namespace `client`

Cách xử lý:

- kiểm tra lại namespace đang dùng có đúng `client/server/admin` theo trust boundary thật của caller chưa
- kiểm tra `clientSecretKey`, `serverSecretKey`, `adminSecretKey` có được cấu hình đúng cho namespace đang gọi chưa
- với `DashboardApi`, login admin trước rồi để backend resolve quyền từ `authToken`; chỉ dùng `overrideSecretKey` khi thật sự cần

### 5. Nhận `ReturnCode.OperationNotAllow`

Đây không phải lỗi thiếu secret key. Thường nghĩa là `secretKey` vẫn hợp lệ, nhưng permission rules của secret key không cho phép operation trong target context hiện tại.

Nguyên nhân:

- `secretKey` hiện tại không có permission rules cho operation đó
- hoặc operation đang chạy trong nhánh `other self`, nhưng secret key chỉ có `selfEnable`
- hoặc đang dùng route `server/admin`, nhưng secret key không có `serverSelfEnable` / `adminSelfEnable`

Cách xử lý:

- kiểm tra lại domain + operation tương ứng trong permission config của secret key trên GearN Server
- kiểm tra target hiện tại là `self` hay `other self`
- kiểm tra có đang dùng sai route `client/server/admin` không

### 6. Tưởng success code là `0`

Sai hoàn toàn với SDK này.

- `ReturnCode.Ok === 1`
- `ErrorCode.Ok === 1`

## 17. File tham khảo trong repo

- Entry public API: `src/runtime/GNNetwork.ts`
- Export surface: `src/index.ts`
- Ví dụ local debug: `index.js`
- Ví dụ Cocos: `examples/cocos-creator/GearNExample.ts.txt`

## 18. Kết luận

Nếu bạn chỉ cần dùng SDK theo cách chuẩn, hãy nhớ đúng 4 ý này:

1. `GNNetwork.init(settings)` đúng 1 lần
2. Mọi call đi qua `GNNetwork.*`
3. Kiểm tra `returnCode` trước, rồi kiểm tra `errorCode`
4. Dùng socket thì ưu tiên login HTTP trước rồi `connectSocket()`; chỉ tự `sendRequestAuthSocket()` khi cần re-auth thủ công
