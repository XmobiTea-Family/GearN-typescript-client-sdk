# Cookbook

16 scenario end-to-end phổ biến. Mỗi scenario có: problem, prerequisites, APIs used, code snippet, return path handling, pitfall.

> Tất cả snippet dùng import từ package name `@xmobitea/gearn-typescript-client-sdk`. Ví dụ dùng dạng `async/await` (form `*Async()`). Các comment trong snippet là điểm nối vào logic ứng dụng của bạn.

## Index

1. [Init SDK + bootstrap tối thiểu](#scenario-1-init-sdk--bootstrap-tối-thiểu)
2. [Login by account + retrieve profile](#scenario-2-login-by-account--retrieve-profile)
3. [Refresh token và persist session](#scenario-3-refresh-token-và-persist-session)
4. [Login by social (Google/Apple/Facebook)](#scenario-4-login-by-social-googleapplefacebook)
5. [Connect socket + handle reconnect](#scenario-5-connect-socket--handle-reconnect)
6. [Subscribe friend updates](#scenario-6-subscribe-friend-updates)
7. [Subscribe + send group message](#scenario-7-subscribe--send-group-message)
8. [Group member lifecycle (join / leave / kick) + realtime update](#scenario-8-group-member-lifecycle-join--leave--kick--realtime-update)
9. [Matchmaking ticket flow](#scenario-9-matchmaking-ticket-flow)
10. [Inventory: query + grant item (server role)](#scenario-10-inventory-query--grant-item-server-role)
11. [Store: list catalog → purchase → validate receipt](#scenario-11-store-list-catalog--purchase--validate-receipt)
12. [CloudScript: execute function + customTags](#scenario-12-cloudscript-execute-function--customtags)
13. [Override authToken / secret (impersonate, cross-role)](#scenario-13-override-authtoken--secret-impersonate-cross-role)
14. [Admin login qua DashboardApi](#scenario-14-admin-login-qua-dashboardapi)
15. [Cleanup & shutdown flow](#scenario-15-cleanup--shutdown-flow)
16. [Diagnose `OperationNotAllow`](#scenario-16-diagnose-operationnotallow)

---

## Scenario 1: Init SDK + bootstrap tối thiểu

**Problem:** Lần đầu khởi chạy ứng dụng — cần init SDK để bất kỳ API nào hoạt động.

**Prerequisites:** biết server address/port và `secretKey` backend cấp.

**APIs used:** `GNNetwork.init()`, `GNServerSettings`.

Code mẫu đầy đủ (có comment từng field): [README § 4](/README.MD#4-khởi-tạo-cơ-bản). Minimal pattern: [AI_CHEATSHEET § 1](/docs/AI_CHEATSHEET.md#1-mandatory-pattern-sao-chép--dùng).

### Return paths

- `init()` là void và **idempotent** — gọi lần thứ 2 chỉ log warning rồi return.
- Không có network call ở bước này; lỗi cấu hình thường gặp là gọi `settings.config({...})` thiếu field required trong `GNServerSettingsOptions`.

### Pitfalls

- `logType: LogType.All` trong production làm console spam. Dùng `LogType.Error` hoặc `LogType.Off`.
- Gọi lại `GNNetwork.init()` để đổi settings không có hiệu lực. Setter trên cùng `settings` object sau init chỉ ảnh hưởng một số request mới và không tự reconnect socket.
- Full anti-patterns: [RULES § 10](/docs/RULES.md#10-anti-patterns--pitfalls). Full field schema: [reference/CONFIG.md](/docs/reference/CONFIG.md).

---

## Scenario 2: Login by account + retrieve profile

**Problem:** User nhập username/password → gọi login → nhận profile + cache auth token để request sau tự động attach.

**Prerequisites:** đã `init()`.

**APIs used:** [`GNNetwork.authenticate.loginByAccountAsync`](/docs/reference/API_AUTHENTICATE.md), [`AuthenticateModels.LoginByAccountRequestData`](/docs/reference/dto/AUTHENTICATE.md#loginbyaccountrequestdata), [`AuthenticateModels.InfoRequestParam`](/docs/reference/dto/AUTHENTICATE.md#inforequestparam).

### Code

```typescript
import {
  GNNetwork,
  ReturnCode,
  ErrorCode,
  AuthenticateModels,
} from "@xmobitea/gearn-typescript-client-sdk";

async function loginWithAccount(username: string, password: string) {
  const infoRequestParam = new AuthenticateModels.InfoRequestParam();
  infoRequestParam.displayName = true;
  infoRequestParam.avatar = true;
  infoRequestParam.playerCurrencies = true;
  infoRequestParam.tsCreate = true;

  const request = new AuthenticateModels.LoginByAccountRequestData();
  request.username = username;
  request.password = password;
  request.infoRequestParam = infoRequestParam;

  const res = await GNNetwork.authenticate.loginByAccountAsync(request);

  if (res.returnCode !== ReturnCode.Ok) {
    console.error("transport error", res.returnCode, res.debugMessage);
    return null;
  }
  if (res.errorCode !== ErrorCode.Ok) {
    console.warn("business error", res.errorCode, res.invalidMembers);
    return null;
  }

  // AuthenticateApi success auto-caches authToken + userId into AuthenticateStatus/StorageService.
  return res.responseData; // AuthenticateResponseData
}
```

### Return paths

- Happy: `ReturnCode.Ok` + `ErrorCode.Ok` → SDK cache `authToken` + `userId`; response có profile fields enabled trong `InfoRequestParam`.
- `ReturnCode.OperationTimeout` (-1) → retry sau nếu idempotent.
- `ErrorCode.AccountNotFound` (2) hoặc `ErrorCode.AccountPasswordWrong` → báo user.
- `ReturnCode.InvalidRequestParameters` với `invalidMembers` → có field request sai format (ví dụ username < 6 chars).

### Pitfalls

- Đọc `responseData` trước khi check đủ 2 tầng → có thể dùng payload chưa đáng tin.
- Set `infoRequestParam.customDatas = true` nhưng không set `customDataKeys` → backend có thể trả TẤT CẢ custom data, tốn bandwidth.
- `username`/`password` < 6 ký tự → backend reject với `ReturnCode.InvalidRequestParameters` trước khi query DB.

---

## Scenario 3: Refresh token và persist session

**Problem:** Token sắp hết hạn (hoặc user mở lại app sau 1 ngày) → refresh để lấy token mới, tránh bắt login lại.

**Prerequisites:** đã có `authToken` cache từ lần login trước (stored ở `StorageService`).

**APIs used:** [`GNNetwork.authenticate.refreshAuthTokenAsync`](/docs/reference/API_AUTHENTICATE.md).

### Code

```typescript
import { GNNetwork, ReturnCode, ErrorCode, AuthenticateModels } from "@xmobitea/gearn-typescript-client-sdk";

async function ensureValidToken() {
  // refreshAuthToken uses cached auth context — không cần truyền field nào
  const res = await GNNetwork.authenticate.refreshAuthTokenAsync(
    new AuthenticateModels.RefreshAuthTokenRequestData(),
  );

  if (res.returnCode !== ReturnCode.Ok) return false;
  if (res.errorCode !== ErrorCode.Ok) return false;

  return true;
}

// On app start:
if (!(await ensureValidToken())) {
  // redirect về login screen
}
```

### Return paths

- Happy → `authToken` mới được SDK cache, session tiếp tục.
- `ReturnCode.OperationNotAuthorized` hoặc `ErrorCode.VerifyTokenError` → token cũ invalid/expired; cần login lại.
- `ErrorCode.PlayerBan` → user bị ban; xem `res.responseData.playerBan` (BanItem với tsExpire + reason).

### Pitfalls

- Không có `authToken` cache → request gửi đi thiếu auth, reject.
- Refresh thành công nhưng app vẫn dùng token tự lưu bên ngoài SDK → đồng bộ lại storage riêng của app từ `GNNetwork.getAuthenticateStatus()` nếu có.

---

## Scenario 4: Login by social (Google/Apple/Facebook)

**Problem:** User chọn đăng nhập bằng Google (hoặc Apple, Facebook, Game Center, GooglePlayGameService …).

**Prerequisites:** đã init; đã có ID token từ social SDK native.

**APIs used:** `loginByGoogleAsync`, `loginByAppleAsync`, `loginByFacebookAsync`, `loginByGameCenterAsync`, `loginByGooglePlayGameServiceAsync` — cùng pattern. Xem [API_AUTHENTICATE.md](/docs/reference/API_AUTHENTICATE.md).

### Code

```typescript
import {
  GNNetwork,
  ReturnCode,
  ErrorCode,
  AuthenticateModels,
  GoogleLoginType,
} from "@xmobitea/gearn-typescript-client-sdk";

async function loginWithGoogle(idToken: string) {
  const infoRequestParam = new AuthenticateModels.InfoRequestParam();
  infoRequestParam.displayName = true;
  infoRequestParam.avatar = true;

  const request = new AuthenticateModels.LoginByGoogleRequestData();
  request.token = idToken;
  request.type = GoogleLoginType.IdToken;
  request.createPlayerIfNotExists = true;
  request.infoRequestParam = infoRequestParam;

  const res = await GNNetwork.authenticate.loginByGoogleAsync(request);

  if (res.returnCode !== ReturnCode.Ok || res.errorCode !== ErrorCode.Ok) return null;

  // AuthenticateApi success auto-caches authToken + userId.
  if (res.responseData.newlyCreated) console.log("new player created");
  return res.responseData;
}
```

### Return paths

- Happy → `authToken` + `newlyCreated` flag cho biết user mới hay đã tồn tại.
- `ErrorCode.VerifyTokenError` hoặc `ErrorCode.VerifyFailed` → ID token social invalid/expired.
- `ErrorCode.ExternalLinkedOtherAccount` hoặc `ErrorCode.ExternalLinkedOtherValue` → social id đã liên kết account khác.

### Pitfalls

- `createPlayerIfNotExists: false` với social id chưa từng login → `ErrorCode.AccountNotFound`. Set `true` cho flow "login hoặc register" tự động.
- Apple ID token có lifetime rất ngắn; lấy xong phải call ngay.

---

## Scenario 5: Connect socket + handle reconnect

**Problem:** Cần realtime event (group message, friend update, …) — phải connect socket.

**Prerequisites:** đã login (có `authToken` cache); `useSocket: true` trong settings.

**APIs used:** `GNNetwork.connectSocket`, `GNNetwork.sendRequestAuthSocket`, `GNNetwork.subscriberOnConnectHandler`, `GNNetwork.subscriberOnDisconnectHandler`.

### Code

```typescript
import { GNNetwork } from "@xmobitea/gearn-typescript-client-sdk";

GNNetwork.subscriberOnConnectHandler(() => {
  console.log("socket connected, sid=", GNNetwork.getSocketSId());
  // SDK auto-auths the socket if an auth token is already cached.
  // Call GNNetwork.sendRequestAuthSocket() manually only when login/token refresh happens after this connect.
});

GNNetwork.subscriberOnDisconnectHandler(() => {
  console.warn("socket disconnected — SDK will auto-reconnect after reconnectDelay ms");
});

GNNetwork.connectSocket(() => {
  // optional one-shot callback on first connect
});
```

### Return paths

- Connect thành công → `onConnect` callback fire; `isSocketConnected()` trả `true`.
- Disconnect do network → SDK tự retry sau `reconnectDelay` (default 5000ms). Mỗi lần reconnect sẽ fire `onConnect` handler lại.

### Pitfalls

- Nếu socket connect trước khi login/token refresh, cần gọi `sendRequestAuthSocket()` sau khi token có trong cache để re-auth thủ công.
- `subscriberOnConnectHandler` gắn MULTIPLE callback, mỗi lần reconnect đều fire tất cả. Dùng `unscriberOnConnectHandler` khi cleanup.
- `connectSocket()` gọi trước `init()` → crash.

---

## Scenario 6: Subscribe friend updates

**Problem:** Hiển thị UI danh sách bạn bè realtime (thêm/xóa/thay đổi status).

**Prerequisites:** socket đã connected + authenticated (scenario 5).

**APIs used:** [`OnGamePlayerFriendUpdateEventHandler`](/docs/reference/EVENTS.md#ongameplayerfriendupdateeventhandler).

### Code

```typescript
import { OnGamePlayerFriendUpdateEventHandler, FriendStatus } from "@xmobitea/gearn-typescript-client-sdk";

OnGamePlayerFriendUpdateEventHandler.onUpdate = (payload) => {
  // payload.playerFriends: Array<GenericModels.FriendItem>
  for (const f of payload.playerFriends ?? []) {
    switch (f.status) {
      case FriendStatus.Friend: {
        upsertFriendInUI(f);
        break;
      }
      case FriendStatus.WaitingAccept:
      case FriendStatus.SentRequestAndWaitingAccept: {
        showFriendRequest(f);
        break;
      }
      case FriendStatus.NotFriend: {
        removeFriendFromUI(f.friendId);
        break;
      }
    }
  }
};

// Cleanup khi user logout hoặc navigate đi
function unsubscribe() {
  OnGamePlayerFriendUpdateEventHandler.onUpdate = () => {};
}
```

### Return paths

- Event fire mỗi khi friend relation thay đổi — hot path, đừng làm heavy work trong handler.
- Không có ACK trả về; delivery là at-most-once khi socket up.

### Pitfalls

- `onUpdate` là field `static` — gán nhiều component sẽ **ghi đè lẫn nhau**, chỉ handler cuối cùng fire. Dùng wrapper pattern (xem [EVENTS.md](/docs/reference/EVENTS.md)) nếu cần fan-out.
- Khi socket tạm mất kết nối → event trong interval đó KHÔNG được replay. App nên resync bằng `GNNetwork.gamePlayer.getFriendList*` sau reconnect.

---

## Scenario 7: Subscribe + send group message

**Problem:** Chat trong group — lắng nghe message đến + gửi message đi.

**Prerequisites:** đã login + connect socket + là member của `groupId`.

**APIs used:** [`OnGroupMessageUpdateEventHandler`](/docs/reference/EVENTS.md#ongroupmessageupdateeventhandler), [`GNNetwork.group.sendGroupMessageAsync`](/docs/reference/API_GROUP.md).

### Code

```typescript
import {
  GNNetwork,
  OnGroupMessageUpdateEventHandler,
  ReturnCode,
  ErrorCode,
  GroupModels,
} from "@xmobitea/gearn-typescript-client-sdk";

// 1. Subscribe incoming messages
OnGroupMessageUpdateEventHandler.onUpdate = (payload) => {
  if (payload.groupId !== currentGroupId) return;
  for (const msg of payload.groupMessages ?? []) {
    appendMessageToUI(msg);
  }
};

// 2. Send a new message
async function sendGroupChat(groupId: string, text: string) {
  const request = new GroupModels.SendGroupMessageRequestData();
  request.senderId = GNNetwork.getAuthenticateStatus().getUserId();
  request.groupId = groupId;
  request.message = text;

  const res = await GNNetwork.group.sendGroupMessageAsync(request);

  if (res.returnCode !== ReturnCode.Ok || res.errorCode !== ErrorCode.Ok) {
    console.warn("send failed", res.errorCode, res.debugMessage);
    return false;
  }
  return true;
}
```

### Return paths

- Response `sendGroupMessageAsync` trả về nhanh khi server đã nhận — event `OnGroupMessageUpdate` sẽ fire cho TẤT CẢ member trong group (bao gồm sender).
- `ErrorCode.PlayerNotMember` hoặc `ReturnCode.OperationNotAllow` → user không phải member hoặc secret thiếu permission gửi message.
- `ErrorCode.GroupNotFound` → `groupId` sai.

### Pitfalls

- Optimistic UI: nếu append message ngay sau khi gọi send thành công, và event handler cũng append → duplicate. Dùng messageId server trả về để dedupe.
- Event `OnGroupMessageUpdate` có thể payload nhiều message cùng lúc (khi backend batch) — luôn lặp `payload.groupMessages`.

---

## Scenario 8: Group member lifecycle (join / leave / kick) + realtime update

**Problem:** User join/leave group, và mọi member khác thấy roster update realtime.

**Prerequisites:** đã login + connect socket.

**APIs used:** `GNNetwork.gamePlayer.joinGroupAsync`, `GNNetwork.gamePlayer.leaveGroupAsync`, `GNNetwork.group.server.removeMemberAsync`, [`OnGroupMemberUpdateEventHandler`](/docs/reference/EVENTS.md#ongroupmemberupdateeventhandler).

### Code

```typescript
import {
  GNNetwork,
  OnGroupMemberUpdateEventHandler,
  ReturnCode,
  ErrorCode,
  GamePlayerModels,
} from "@xmobitea/gearn-typescript-client-sdk";

OnGroupMemberUpdateEventHandler.onUpdate = (payload) => {
  if (payload.groupId !== currentGroupId) return;
  for (const m of payload.members ?? []) {
    // MemberItem.status is backend-defined; update idempotently and resync roster after reconnect.
    roster.upsert(m);
  }
};

async function join(groupId: string) {
  const request = new GamePlayerModels.JoinGroupRequestData();
  request.groupId = groupId;

  const res = await GNNetwork.gamePlayer.joinGroupAsync(request);
  if (res.returnCode !== ReturnCode.Ok || res.errorCode !== ErrorCode.Ok) {
    if (res.errorCode === ErrorCode.GroupNotFound) return "group_not_found";
    return "error";
  }
  return "ok";
}

async function leave(groupId: string) {
  const request = new GamePlayerModels.LeaveGroupRequestData();
  request.groupId = groupId;

  await GNNetwork.gamePlayer.leaveGroupAsync(request);
}
```

### Return paths

- Join OK → event `OnGroupMemberUpdate` fire với status `Joined`.
- `ErrorCode.GroupNotFound`, `ErrorCode.GamePlayerNotFound`, `ErrorCode.PlayerBan`, hoặc `ReturnCode.OperationNotAllow` → xử lý theo context.

### Pitfalls

- `removeMember` là method `.server` namespace — chỉ call được nếu có `secretKey` có `permission rules` có `group.removeMember.serverSelfEnable`. Từ client thường expose qua CloudScript.

---

## Scenario 9: Matchmaking ticket flow

**Problem:** User bấm "Find match" → enqueue ticket → poll status → vào match khi ghép xong.

**Prerequisites:** đã login + connect socket.

**APIs used:** `GNNetwork.multiplayer.createMatchmakingTicketAsync`, `getMatchmakingTicketAsync`, `cancelMatchmakingTicketAsync`. Xem [API_MULTIPLAYER.md](/docs/reference/API_MULTIPLAYER.md).

### Code

```typescript
import {
  GNNetwork,
  ReturnCode,
  ErrorCode,
  GNHashtable,
  MultiplayerModels,
  MatchmakingTicketStatus,
} from "@xmobitea/gearn-typescript-client-sdk";

async function findMatch(queueName: string) {
  const createRequest = new MultiplayerModels.CreateMatchmakingTicketRequestData();
  createRequest.queueName = queueName;
  createRequest.giveUpAfterSeconds = 60;
  createRequest.attribute = GNHashtable.builder().build();

  const createRes = await GNNetwork.multiplayer.createMatchmakingTicketAsync(createRequest);
  if (createRes.returnCode !== ReturnCode.Ok || createRes.errorCode !== ErrorCode.Ok) {
    return null;
  }
  const ticketId = createRes.responseData.ticketId;

  // Poll mỗi 2s cho tới khi matched hoặc timeout
  for (let i = 0; i < 30; i++) {
    await new Promise((r) => setTimeout(r, 2000));
    const pollRequest = new MultiplayerModels.GetMatchmakingTicketRequestData();
    pollRequest.ticketId = ticketId;
    pollRequest.returnMember = true;

    const poll = await GNNetwork.multiplayer.getMatchmakingTicketAsync(pollRequest);
    if (poll.returnCode !== ReturnCode.Ok || poll.errorCode !== ErrorCode.Ok) continue;

    const ticket = poll.responseData.matchmakingTicket;
    const status = ticket.status;
    if (status === MatchmakingTicketStatus.Matched) {
      return ticket.matchId;
    }
    if (status === MatchmakingTicketStatus.Canceled) {
      return null;
    }
  }

  // Timeout: cancel ticket để queue không giữ slot
  const cancelRequest = new MultiplayerModels.CancelMatchmakingTicketRequestData();
  cancelRequest.ticketId = ticketId;

  await GNNetwork.multiplayer.cancelMatchmakingTicketAsync(cancelRequest);
  return null;
}
```

### Return paths

- `MatchmakingTicketStatus.Matched` → có `matchId`, chuyển sang scene game.
- `WaitingForMembers`, `WaitingForMatch`, `WaitingForServer` → tiếp tục poll.
- `Canceled` → abort.

### Pitfalls

- Không cancel khi user hủy → ticket vẫn trong queue, occupy slot tới khi server timeout.
- Poll interval quá ngắn (<1s) → rate-limit reject.

---

## Scenario 10: Inventory query + grant item (server role)

**Problem:** Client xem inventory; backend/CloudScript grant item cho player khác.

**Prerequisites:** client login; `secretKey` có `permission rules` là `admin` hoặc `server` cấu hình ở backend/CloudScript.

**APIs used:** [`GNNetwork.gamePlayer.getPlayerInventoryAsync`](/docs/reference/API_GAME_PLAYER.md) (client), `GNNetwork.gamePlayer.server.createPlayerItemAsync` (server).

### Code

```typescript
import { GNNetwork, ReturnCode, ErrorCode, GamePlayerModels } from "@xmobitea/gearn-typescript-client-sdk";

// Client: xem inventory của chính mình
async function loadMyInventory() {
  const request = new GamePlayerModels.GetPlayerInventoryRequestData();
  request.itemCatalogIds = ["weapon"];

  const res = await GNNetwork.gamePlayer.getPlayerInventoryAsync(request);
  if (res.returnCode !== ReturnCode.Ok || res.errorCode !== ErrorCode.Ok) return [];
  return res.responseData.infoResponseParameters?.playerInventories ?? [];
}

// Server: create/grant 1 sword cho player targetUserId
async function grantSword(targetUserId: string) {
  const request = new GamePlayerModels.ServerCreatePlayerItemRequestData();
  request.userId = targetUserId;
  request.catalogId = "weapon";
  request.classId = "sword_001";
  request.displayName = "Starter Sword";
  request.amount = 1;

  const res = await GNNetwork.gamePlayer.server.createPlayerItemAsync(request);
  return res.returnCode === ReturnCode.Ok && res.errorCode === ErrorCode.Ok;
}
```

### Return paths

- Client query → không truyền `userId` nên backend resolve inventory của game player đang authenticate.
- Server grant → nếu `secretKey` sai/thiếu → `ReturnCode.SecretInvalid`; nếu secret hợp lệ nhưng thiếu flag → `ReturnCode.OperationNotAllow`.

### Pitfalls

- NÊN gọi `.server` trong backend Node service hoặc CloudScript.

---

## Scenario 11: Store list catalog → purchase → validate receipt

**Problem:** User mở shop → chọn item → mua → xác nhận nhận hàng.

**Prerequisites:** đã login.

**APIs used:** [`GNNetwork.storeInventory.getStoreItemsWithTagAsync`](/docs/reference/API_STORE_INVENTORY.md), `buyStoreItemAsync`, `server.validateGooglePlayStoreReceiptAsync` / `server.validateAppleAppStoreReceiptAsync`.

### Code

```typescript
import { GNNetwork, ReturnCode, ErrorCode, OwnerType, StoreInventoryModels } from "@xmobitea/gearn-typescript-client-sdk";

async function listCatalog() {
  const infoRequestParam = new StoreInventoryModels.InfoRequestParam();
  infoRequestParam.displayName = true;
  infoRequestParam.tags = true;

  const request = new StoreInventoryModels.GetStoreItemsWithTagRequestData();
  request.key = "visible";
  request.value = "true";
  request.infoRequestParam = infoRequestParam;
  request.skip = 0;
  request.limit = 50;

  const res = await GNNetwork.storeInventory.getStoreItemsWithTagAsync(request);
  if (res.returnCode !== ReturnCode.Ok || res.errorCode !== ErrorCode.Ok) return [];
  return res.responseData.results ?? [];
}

async function buyItem(storeItemId: string) {
  const request = new StoreInventoryModels.BuyStoreItemRequestData();
  request.storeId = storeItemId;
  request.id = GNNetwork.getAuthenticateStatus().getUserId();
  request.type = OwnerType.GamePlayer;
  request.log = "shop_purchase";

  const res = await GNNetwork.storeInventory.buyStoreItemAsync(request);

  if (res.returnCode !== ReturnCode.Ok) return "transport_error";
  switch (res.errorCode) {
    case ErrorCode.Ok:
      return "ok";
    case ErrorCode.NotEnoughCurrency:
      return "not_enough_currency";
    case ErrorCode.StoreItemRemoved:
    case ErrorCode.CanNotBuyThisStoreItem:
      return "not_buyable";
    default:
      return "unhandled_" + res.errorCode;
  }
}
```

### Return paths

- `ErrorCode.Ok` → item đã grant vào inventory player; currency đã trừ.
- `ErrorCode.NotEnoughCurrency` (8) → cần topup.
- `ErrorCode.StoreItemRemoved` hoặc `ErrorCode.CanNotBuyThisStoreItem` → item không còn mua được ở state hiện tại.

### Pitfalls

- In-app purchase (IAP) có receipt native — validate qua method cụ thể theo store, ví dụ `storeInventory.server.validateGooglePlayStoreReceiptAsync` hoặc `validateAppleAppStoreReceiptAsync`, trước khi tin kết quả grant.

---

## Scenario 12: CloudScript execute function + customTags

**Problem:** Trigger function server-side custom (ví dụ "claim daily reward") từ client.

**Prerequisites:** đã login; CloudScript function đã publish ở backend.

**APIs used:** [`GNNetwork.cloudScript.executeFunctionAsync`](/docs/reference/API_CLOUDSCRIPT.md).

### Code

```typescript
import { GNNetwork, ReturnCode, ErrorCode, CloudScriptModels, ExecuteResponseStatus, GNHashtable } from "@xmobitea/gearn-typescript-client-sdk";

async function claimDailyReward() {
  const request = new CloudScriptModels.ExecuteFunctionRequestData();
  request.functionName = "claimDailyReward";
  request.functionParameters = { date: new Date().toISOString().slice(0, 10) };

  const res = await GNNetwork.cloudScript.executeFunctionAsync(
    request,
    undefined,        // overrideAuthToken
    undefined,        // overrideSecretKey
    GNHashtable.builder().add("source", "daily_popup").build(), // customTags
    30,               // timeout (seconds)
  );

  if (res.returnCode !== ReturnCode.Ok || res.errorCode !== ErrorCode.Ok) return null;

  const exec = res.responseData;
  if (exec.status !== ExecuteResponseStatus.Ok) {
    console.warn("function failed", exec.errorMessage);
    return null;
  }
  return exec.functionResult; // raw payload từ function
}
```

### Return paths

- `ExecuteResponseStatus.Ok` → function chạy xong, `functionResult` là value function trả về.
- `ExecuteResponseStatus.Exception` → function throw; `exec.errorMessage` chứa message.
- `ExecuteResponseStatus.FunctionNameNotFound` → function chưa publish/export hoặc sai tên.

### Pitfalls

- `customTags` là `GNHashtable`; dùng `GNHashtable.builder()` để giữ đúng public type. Giá trị nên là primitive hoặc string; không nhét object lồng.
- Timeout function mặc định 20s — function nặng (query DB lớn) nên tăng timeout param.

---

## Scenario 13: Override authToken / secret (impersonate, cross-role)

**Problem:** Đang ở role admin/server, cần gọi API như một player cụ thể (impersonate) hoặc override secret key của request cụ thể.

**APIs used:** mọi method — async form nhận `overrideAuthToken`, `overrideSecretKey` là param thứ 2-3; callback form là param thứ 3-4 vì có `onResponse`.

### Code

```typescript
import { GNNetwork, ContentModels, MasterPlayerModels } from "@xmobitea/gearn-typescript-client-sdk";

// Impersonate player để query profile của họ
async function fetchProfileAs(playerAuthToken: string, playerId: string) {
  const infoRequestParam = new MasterPlayerModels.InfoRequestParam();
  infoRequestParam.displayName = true;
  infoRequestParam.avatar = true;

  const request = new MasterPlayerModels.GetPlayerInformationRequestData();
  request.userId = playerId;
  request.infoRequestParam = infoRequestParam;

  const res = await GNNetwork.masterPlayer.getPlayerInformationAsync(
    request,
    playerAuthToken,   // overrideAuthToken — thay token cache
    undefined,         // overrideSecretKey — giữ secret key mặc định của role
    undefined,         // customTags
    undefined,         // timeout
  );
  return res.responseData;
}

// Dùng secret key khác (ví dụ một game khác cùng backend)
async function callOtherGame(gameSecret: string) {
  const request = new ContentModels.GetContentDataRequestData();
  request.keys = ["config"];

  return GNNetwork.content.getContentDataAsync(
    request,
    undefined,
    gameSecret,
  );
}
```

### Return paths

- Token override bypass cache; request này KHÔNG update cached token.
- Secret override bypass `secretKey` mặc định.

### Pitfalls

- Override không persist — mỗi request phải truyền lại.
- Truyền `overrideAuthToken = ""` (rỗng) → request đi KHÔNG CÓ auth header, thường fail với `ReturnCode.OperationNotAuthorized`. Muốn dùng auth cache hiện tại thì truyền `null`/`undefined`.

---

## Scenario 14: Admin login qua DashboardApi

**Problem:** Tool dashboard web — cần admin login bằng username/password admin, rồi query game list / analytics.

**Prerequisites:** đã init; biết admin username/password backend cấp.

**APIs used:** [`GNNetwork.dashboard.loginByAdminAccountAsync`](/docs/reference/API_DASHBOARD.md), `getGameListAsync`, `getAnalyticsAsync`, …

> **Lưu ý thiết kế:** Dashboard API CHỈ có namespace client (`GNNetwork.dashboard`, không có `.server` / `.admin`). Transport dùng `RequestRole.Client`. Admin context backend resolve TỪ auth token trả về sau `loginByAdminAccount` — token này khác token của player thường.

### Code

```typescript
import { GNNetwork, ReturnCode, ErrorCode, DashboardModels } from "@xmobitea/gearn-typescript-client-sdk";

async function adminLogin(username: string, password: string) {
  const request = new DashboardModels.LoginByAdminAccountRequestData();
  request.username = username;
  request.password = password;

  const res = await GNNetwork.dashboard.loginByAdminAccountAsync(request);
  if (res.returnCode !== ReturnCode.Ok || res.errorCode !== ErrorCode.Ok) return false;

  // Dashboard response carries authToken; SDK caches it for later dashboard calls.
  return true;
}

async function listGames() {
  const res = await GNNetwork.dashboard.getGameListAsync(new DashboardModels.GetGameListRequestData());
  return res.responseData?.games ?? [];
}
```

### Return paths

- Happy → admin token được SDK cache; mọi dashboard method sau đó dùng token này.
- `ErrorCode.AccountNotFound` / `ErrorCode.AccountPasswordWrong` → giống player login.

### Pitfalls

- Trộn admin token với player flow → backend reject. Sau admin logout, clear token trước khi login player.
- Dashboard KHÔNG cần socket — có thể set `useSocket: false` trong settings cho web dashboard.

---

## Scenario 15: Cleanup & shutdown flow

**Problem:** User logout hoặc app shutdown — cần close socket + clear auth để session sau không leak state.

### Code

```typescript
import { GNNetwork, AuthenticateStatus, OnGroupMessageUpdateEventHandler, OnGroupMemberUpdateEventHandler, OnGamePlayerFriendUpdateEventHandler, OnGamePlayerGroupUpdateEventHandler, OnCharacterPlayerFriendUpdateEventHandler, OnCharacterPlayerGroupUpdateEventHandler } from "@xmobitea/gearn-typescript-client-sdk";

function logoutAndCleanup() {
  // 1. Clear all event handler callbacks (chúng là static, không tự gc)
  const noop = () => {};
  OnGroupMessageUpdateEventHandler.onUpdate = noop;
  OnGroupMemberUpdateEventHandler.onUpdate = noop;
  OnGamePlayerFriendUpdateEventHandler.onUpdate = noop;
  OnGamePlayerGroupUpdateEventHandler.onUpdate = noop;
  OnCharacterPlayerFriendUpdateEventHandler.onUpdate = noop;
  OnCharacterPlayerGroupUpdateEventHandler.onUpdate = noop;

  // 2. Close socket
  GNNetwork.disconnectSocket(() => {
    console.log("socket closed");
  });

  // 3. Clear auth state
  const empty = new AuthenticateStatus();
  empty.setAuthToken("");
  empty.setUserId("");
  GNNetwork.setNewAuthenticateStatus(empty);
}
```

### Return paths

- `disconnectSocket` callback fire khi connection closed. Sau đó socket không auto-reconnect (stop reconnect loop).
- `setNewAuthenticateStatus` với token rỗng xóa state + localStorage entry.

### Pitfalls

- Không clear event handler → new session fire vào callback cũ trỏ tới UI component đã unmount, gây crash.
- Không đợi `disconnectSocket` callback mà shutdown process ngay → socket có thể không gửi packet `logout` tới server → backend phải đợi timeout để cleanup session.

---

## Scenario 16: Diagnose `OperationNotAllow`

**Problem:** Một API call trả `ReturnCode.OperationNotAllow`. Cần xác định root cause và fix.

**Prerequisites:** biết method đang gọi, namespace (`client` / `.server` / `.admin`), target user (nếu có), secret key đang dùng.

**Key insight:** `OperationNotAllow` **không** phải thiếu secret hoặc operation không tồn tại (đó là `SecretInvalid` và `OperationInvalid`). Đây là: secret hợp lệ, operation tồn tại, nhưng **permission rule** của secret không cho phép operation trong target context. Xem [RULES § 5](/docs/RULES.md#5-phân-biệt-3-returncode-dễ-nhầm).

### Decision tree

```
Gặp returnCode === OperationNotAllow
│
├─ Bước 1: Xác định route đang gọi
│    • GNNetwork.<group>.<method>(...)         → route = client
│    • GNNetwork.<group>.server.<method>(...)  → route = server
│    • GNNetwork.<group>.admin.<method>(...)   → route = admin
│
├─ Bước 2: Xác định target (chỉ áp dụng route client)
│    • Bỏ userId HOẶC userId trùng auth       → target = self
│    • userId khác auth user                   → target = other-self
│    • Domain không có ownership (Content,
│      StoreInventory, Multiplayer, CloudScript) → bỏ qua bước 2
│
├─ Bước 3: Map route + target → flag cần (RULES § 6.1)
│    • client + self        → selfEnable
│    • client + other-self  → otherSelfEnable
│    • server               → serverSelfEnable
│    • admin                → adminSelfEnable
│
├─ Bước 4: Check secret active có flag đó cho operation đang gọi không?
│    → xem dashboard GearN Server hoặc hỏi backend admin
│    → danh sách operation: reference/PERMISSION_RULES.md + API_<GROUP>.md
│
└─ Bước 5: Nếu không có flag, chọn 1 trong 3 action:
     (a) Dùng secret khác qua GNServerSettings.secretKey (cần restart process)
     (b) Override per-request: truyền overrideSecretKey vào method
     (c) Yêu cầu backend admin bật flag trong GearN Dashboard tương ứng cho secret hiện tại
```

### Code

```ts
import {
  GNNetwork,
  ReturnCode,
  InventoryModels,
} from "@xmobitea/gearn-typescript-client-sdk";

async function grantItem(userId: string, itemId: string, amount: number) {
  const req = new InventoryModels.SetAmountRequestData();
  req.itemId = itemId;
  req.amount = amount;

  // Attempt 1: route admin với secret mặc định của app
  let res = await GNNetwork.inventory.admin.setAmountAsync(req);

  if (res.returnCode === ReturnCode.OperationNotAllow) {
    console.warn("OperationNotAllow on admin route — secret thiếu adminSelfEnable cho inventory.setAmount");
    console.warn("debugMessage:", res.debugMessage);

    // Attempt 2: fallback override secret admin cho 1 request
    const ADMIN_SECRET = process.env.GEARN_ADMIN_SECRET; // KHÔNG hardcode
    if (ADMIN_SECRET) {
      res = await GNNetwork.inventory.admin.setAmountAsync(
        req,
        undefined,      // overrideAuthToken
        ADMIN_SECRET,   // overrideSecretKey
      );
    }
  }

  if (res.returnCode !== ReturnCode.Ok) {
    // Vẫn fail sau fallback → báo ops, KHÔNG retry
    throw new Error(`grant failed: returnCode=${res.returnCode}, debug=${res.debugMessage}`);
  }
  return res.responseData;
}
```

### Return paths

- `OperationNotAllow` → **không retry cùng secret**, đó là config fix.
- Sau fallback `overrideSecretKey` vẫn `OperationNotAllow` → secret admin cũng thiếu flag, phải liên hệ backend admin thêm flag trong GearN Dashboard.
- Nếu chuyển sang `SecretInvalid` sau fallback → override secret sai format / không khớp game context (khác lỗi, xem [RULES § 5](/docs/RULES.md#5-phân-biệt-3-returncode-dễ-nhầm)).

### Pitfalls

- **Nhầm `OperationNotAllow` với `SecretInvalid`** → sửa sai hướng, đổi secret vô nghĩa khi rule chưa được bật.
- **Dùng `.server` / `.admin` từ frontend app để vượt permission** → trust boundary leak, secret bị expose. Route phải match caller thực tế (xem [RULES § 3](/docs/RULES.md#3-route--trust-boundary-của-caller)).
- **Retry tự động khi gặp `OperationNotAllow`** → không bao giờ giải quyết được, chỉ tốn request budget.
- **Giả định rule `selfEnable` tự bật** → backend admin config per-operation, không default bật tất cả.
- **Không check self vs other-self khi ở route `client`** → ví dụ gọi `masterPlayer.getPlayerInformationAsync(otherId)` mà nghĩ vẫn là self → sai flag → debug lâu.

### Liên kết

- Mapping rule đầy đủ: [RULES § 6.1](/docs/RULES.md#61-mapping-route-target--required-flag)
- Scenario điển hình (5 case): [RULES § 6.3](/docs/RULES.md#63-scenario-điển-hình-trigger-operationnotallow)
- Checklist nhanh: [RULES § 6.4](/docs/RULES.md#64-checklist-nhanh-khi-gặp-returncodeoperationnotallow)
- Danh sách operation per-domain: [reference/PERMISSION_RULES.md](/docs/reference/PERMISSION_RULES.md)

---

## Pattern chung xuyên scenarios

| Pattern | Khi nào | Tham khảo |
|---------|---------|-----------|
| Check `returnCode` → `errorCode` → đọc `responseData` | Mọi `*Async()` | [ERROR_HANDLING.md](/docs/reference/ERROR_HANDLING.md) |
| SDK auto-cache `authToken` / `userId` sau authenticate success | Login/refresh player; dashboard login cache `authToken` | Scenario 2, 3, 4, 14 |
| Subscribe event handler trước `connectSocket`; chỉ gọi `sendRequestAuthSocket` khi cần re-auth thủ công | Realtime | Scenario 5, 6, 7, 8 |
| `.server` / `.admin` chỉ ở backend, không bao giờ ở frontend | Mọi cross-role call | Scenario 10, 13 |
| `customTags` để backend log/route | Khi cần phân loại source | Scenario 12 |
| Clear event handler + `disconnectSocket` + `setNewAuthenticateStatus(empty)` khi logout | Unload/logout | Scenario 15 |
