# Cookbook

15 scenario end-to-end phổ biến. Mỗi scenario có: problem, prerequisites, APIs used, code snippet, return path handling, pitfall.

> Tất cả snippet dùng import từ package name `@xmobitea/gn-typescript-client`. Ví dụ dùng dạng `async/await` (form `*Async()`). Thay phần comment `// TODO: …` bằng logic ứng dụng của bạn.

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

---

## Scenario 1: Init SDK + bootstrap tối thiểu

**Problem:** Lần đầu khởi chạy ứng dụng — cần init SDK để bất kỳ API nào hoạt động.

**Prerequisites:** biết server address/port và `secretKey` backend cấp.

**APIs used:** `GNNetwork.init()`, `GNServerSettings`.

Code mẫu đầy đủ (có comment từng field): [README § 4](../README.MD#4-khởi-tạo-cơ-bản). Minimal pattern: [AI_CHEATSHEET § 1](AI_CHEATSHEET.md#1-mandatory-pattern-sao-chép--dùng).

### Return paths

- `init()` là void và **idempotent** — gọi lần thứ 2 chỉ log warning rồi return.
- Không có network call ở bước này; lỗi duy nhất có thể là `new GNServerSettings({})` thiếu field required → throw ngay.

### Pitfalls

- `logType: LogType.All` trong production làm console spam. Dùng `LogType.Error` hoặc `LogType.None`.
- Đổi `settings` sau `init()` không có hiệu lực (idempotent). Phải restart process.
- Full anti-patterns: [RULES § 10](RULES.md#10-anti-patterns--pitfalls). Full field schema: [reference/CONFIG.md](reference/CONFIG.md).

---

## Scenario 2: Login by account + retrieve profile

**Problem:** User nhập username/password → gọi login → nhận profile + cache auth token để request sau tự động attach.

**Prerequisites:** đã `init()`.

**APIs used:** [`GNNetwork.authenticate.loginByAccountAsync`](reference/API_AUTHENTICATE.md), [`AuthenticateModels.LoginByAccountRequestData`](reference/dto/AUTHENTICATE.md#loginbyaccountrequestdata), [`AuthenticateModels.InfoRequestParam`](reference/dto/AUTHENTICATE.md#inforequestparam).

### Code

```typescript
import {
  GNNetwork,
  ReturnCode,
  ErrorCode,
  AuthenticateModels,
  AuthenticateStatus,
} from "@xmobitea/gn-typescript-client";

async function loginWithAccount(username: string, password: string) {
  const infoRequestParam = new AuthenticateModels.InfoRequestParam();
  infoRequestParam.displayName = true;
  infoRequestParam.avatar = true;
  infoRequestParam.playerCurrencies = true;
  infoRequestParam.tsCreate = true;

  const res = await GNNetwork.authenticate.loginByAccountAsync({
    username,
    password,
    infoRequestParam,
  } as AuthenticateModels.LoginByAccountRequestData);

  if (res.returnCode !== ReturnCode.Ok) {
    console.error("transport error", res.returnCode, res.debugMessage);
    return null;
  }
  if (res.errorCode !== ErrorCode.Ok) {
    console.warn("business error", res.errorCode, res.invalidMembers);
    return null;
  }

  const data = res.responseData; // AuthenticateResponseData

  // Persist auth — every future API call auto-attaches the cached token
  const status = new AuthenticateStatus();
  status.setAuthToken(data.authToken);
  status.setUserId(data.userId);
  GNNetwork.setNewAuthenticateStatus(status);

  return data;
}
```

### Return paths

- Happy: `ReturnCode.Ok` + `ErrorCode.Ok` → `data.authToken` + `data.userId` + profile fields enabled trong `InfoRequestParam`.
- `ReturnCode.OperationTimedOut` (-1) → retry sau.
- `ErrorCode.AccountNotFound` (2) hoặc `ErrorCode.PasswordIncorrect` → báo user.
- `ErrorCode.InvalidOperationParameter` với `invalidMembers` → có field request sai format (ví dụ username < 6 chars).

### Pitfalls

- Quên gọi `setNewAuthenticateStatus()` → lần gọi API sau không có auth token, sẽ trả `ReturnCode.AuthenticateFailed`.
- Set `infoRequestParam.customDatas = true` nhưng không set `customDataKeys` → backend có thể trả TẤT CẢ custom data, tốn bandwidth.
- `username`/`password` < 6 ký tự → backend reject với `InvalidOperationParameter` trước khi query DB.

---

## Scenario 3: Refresh token và persist session

**Problem:** Token sắp hết hạn (hoặc user mở lại app sau 1 ngày) → refresh để lấy token mới, tránh bắt login lại.

**Prerequisites:** đã có `authToken` cache từ lần login trước (stored ở `StorageService`).

**APIs used:** [`GNNetwork.authenticate.refreshAuthTokenAsync`](reference/API_AUTHENTICATE.md).

### Code

```typescript
import { GNNetwork, ReturnCode, ErrorCode, AuthenticateStatus } from "@xmobitea/gn-typescript-client";

async function ensureValidToken() {
  // refreshAuthToken uses cached auth context — không cần truyền field nào
  const res = await GNNetwork.authenticate.refreshAuthTokenAsync({} as any);

  if (res.returnCode !== ReturnCode.Ok) return false;
  if (res.errorCode !== ErrorCode.Ok) return false;

  const status = new AuthenticateStatus();
  status.setAuthToken(res.responseData.authToken);
  // userId không đổi — reuse từ status hiện tại
  status.setUserId(GNNetwork.getAuthenticateStatus().getUserId());
  GNNetwork.setNewAuthenticateStatus(status);
  return true;
}

// On app start:
if (!(await ensureValidToken())) {
  // redirect về login screen
}
```

### Return paths

- Happy → `authToken` mới được lưu, session tiếp tục.
- `ReturnCode.AuthenticateFailed` → token cũ invalid/expired; cần login lại.
- `ErrorCode.PlayerBan` → user bị ban; xem `res.responseData.playerBan` (BanItem với tsExpire + reason).

### Pitfalls

- Không có `authToken` cache → request gửi đi thiếu auth, reject.
- Refresh thành công nhưng quên `setNewAuthenticateStatus()` → token mới không được cache, lần sau vẫn dùng token cũ (sẽ fail).

---

## Scenario 4: Login by social (Google/Apple/Facebook)

**Problem:** User chọn đăng nhập bằng Google (hoặc Apple, Facebook, Game Center, GooglePlayGameService …).

**Prerequisites:** đã init; đã có ID token từ social SDK native.

**APIs used:** `loginByGoogleAsync`, `loginByAppleAsync`, `loginByFacebookAsync`, `loginByGameCenterAsync`, `loginByGooglePlayGameServiceAsync` — cùng pattern. Xem [API_AUTHENTICATE.md](reference/API_AUTHENTICATE.md).

### Code

```typescript
import {
  GNNetwork,
  ReturnCode,
  ErrorCode,
  AuthenticateModels,
  GoogleLoginType,
  AuthenticateStatus,
} from "@xmobitea/gn-typescript-client";

async function loginWithGoogle(idToken: string) {
  const infoRequestParam = new AuthenticateModels.InfoRequestParam();
  infoRequestParam.displayName = true;
  infoRequestParam.avatar = true;

  const res = await GNNetwork.authenticate.loginByGoogleAsync({
    token: idToken,
    googleLoginType: GoogleLoginType.IdToken,
    createPlayerIfNotExists: true,
    infoRequestParam,
  } as AuthenticateModels.LoginByGoogleRequestData);

  if (res.returnCode !== ReturnCode.Ok || res.errorCode !== ErrorCode.Ok) return null;

  const data = res.responseData;
  const status = new AuthenticateStatus();
  status.setAuthToken(data.authToken);
  status.setUserId(data.userId);
  GNNetwork.setNewAuthenticateStatus(status);

  if (data.newlyCreated) console.log("new player created");
  return data;
}
```

### Return paths

- Happy → `authToken` + `newlyCreated` flag cho biết user mới hay đã tồn tại.
- `ErrorCode.TokenVerifyFailed` → ID token social invalid/expired.
- `ErrorCode.AccountAlreadyLinked` → social id đã liên kết account khác.

### Pitfalls

- `createPlayerIfNotExists: false` với social id chưa từng login → `ErrorCode.AccountNotFound`. Set `true` cho flow "login hoặc register" tự động.
- Apple ID token có lifetime rất ngắn (~10 phút) — lấy xong phải call ngay.

---

## Scenario 5: Connect socket + handle reconnect

**Problem:** Cần realtime event (group message, friend update, …) — phải connect socket.

**Prerequisites:** đã login (có `authToken` cache); `useSocket: true` trong settings.

**APIs used:** `GNNetwork.connectSocket`, `GNNetwork.sendRequestAuthSocket`, `GNNetwork.subscriberOnConnectHandler`, `GNNetwork.subscriberOnDisconnectHandler`.

### Code

```typescript
import { GNNetwork } from "@xmobitea/gn-typescript-client";

GNNetwork.subscriberOnConnectHandler(() => {
  console.log("socket connected, sid=", GNNetwork.getSocketSId());
  // Push cached auth token into the socket channel
  GNNetwork.sendRequestAuthSocket();
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

- Quên `sendRequestAuthSocket()` sau connect → event handler không bind userId → server không push event riêng của user đến.
- `subscriberOnConnectHandler` gắn MULTIPLE callback, mỗi lần reconnect đều fire tất cả. Dùng `unscriberOnConnectHandler` khi cleanup.
- `connectSocket()` gọi trước `init()` → crash.

---

## Scenario 6: Subscribe friend updates

**Problem:** Hiển thị UI danh sách bạn bè realtime (thêm/xóa/thay đổi status).

**Prerequisites:** socket đã connected + authenticated (scenario 5).

**APIs used:** [`OnGamePlayerFriendUpdateEventHandler`](reference/EVENTS.md#ongameplayerfriendupdateeventhandler).

### Code

```typescript
import { OnGamePlayerFriendUpdateEventHandler, FriendStatus } from "@xmobitea/gn-typescript-client";

OnGamePlayerFriendUpdateEventHandler.onUpdate = (payload) => {
  // payload.friends: Array<GamePlayerFriendUpdateItem>
  for (const f of payload.friends ?? []) {
    switch (f.friendStatus) {
      case FriendStatus.Accepted: {
        upsertFriendInUI(f);
        break;
      }
      case FriendStatus.Pending: {
        showFriendRequest(f);
        break;
      }
      case FriendStatus.Removed: {
        removeFriendFromUI(f.gamePlayerId);
        break;
      }
    }
  }
};

// Cleanup khi user logout hoặc navigate đi
function unsubscribe() {
  OnGamePlayerFriendUpdateEventHandler.onUpdate = null as any;
}
```

### Return paths

- Event fire mỗi khi friend relation thay đổi — hot path, đừng làm heavy work trong handler.
- Không có ACK trả về; delivery là at-most-once khi socket up.

### Pitfalls

- `onUpdate` là field `static` — gán nhiều component sẽ **ghi đè lẫn nhau**, chỉ handler cuối cùng fire. Dùng wrapper pattern (xem [EVENTS.md](reference/EVENTS.md)) nếu cần fan-out.
- Khi socket tạm mất kết nối → event trong interval đó KHÔNG được replay. App nên resync bằng `GNNetwork.gamePlayer.getFriendList*` sau reconnect.

---

## Scenario 7: Subscribe + send group message

**Problem:** Chat trong group — lắng nghe message đến + gửi message đi.

**Prerequisites:** đã login + connect socket + là member của `groupId`.

**APIs used:** [`OnGroupMessageUpdateEventHandler`](reference/EVENTS.md#ongroupmessageupdateeventhandler), [`GNNetwork.group.addGroupMessageAsync`](reference/API_GROUP.md).

### Code

```typescript
import {
  GNNetwork,
  OnGroupMessageUpdateEventHandler,
  ReturnCode,
  ErrorCode,
} from "@xmobitea/gn-typescript-client";

// 1. Subscribe incoming messages
OnGroupMessageUpdateEventHandler.onUpdate = (payload) => {
  if (payload.groupId !== currentGroupId) return;
  for (const msg of payload.groupMessages ?? []) {
    appendMessageToUI(msg);
  }
};

// 2. Send a new message
async function sendGroupChat(groupId: string, text: string) {
  const res = await GNNetwork.group.addGroupMessageAsync({
    groupId,
    content: text,
  } as any);

  if (res.returnCode !== ReturnCode.Ok || res.errorCode !== ErrorCode.Ok) {
    console.warn("send failed", res.errorCode, res.debugMessage);
    return false;
  }
  return true;
}
```

### Return paths

- Response `addGroupMessageAsync` trả về nhanh khi server đã nhận — event `OnGroupMessageUpdate` sẽ fire cho TẤT CẢ member trong group (bao gồm sender).
- `ErrorCode.PermissionDenied` → user không phải member hoặc group không cho post.
- `ErrorCode.GroupNotFound` → `groupId` sai.

### Pitfalls

- Optimistic UI: nếu append message ngay sau khi gọi send thành công, và event handler cũng append → duplicate. Dùng messageId server trả về để dedupe.
- Event `OnGroupMessageUpdate` có thể payload nhiều message cùng lúc (khi backend batch) — luôn lặp `payload.groupMessages`.

---

## Scenario 8: Group member lifecycle (join / leave / kick) + realtime update

**Problem:** User join/leave group, và mọi member khác thấy roster update realtime.

**Prerequisites:** đã login + connect socket.

**APIs used:** `GNNetwork.group.joinGroupAsync`, `GNNetwork.group.leaveGroupAsync`, `GNNetwork.group.server.removeMemberAsync`, [`OnGroupMemberUpdateEventHandler`](reference/EVENTS.md#ongroupmemberupdateeventhandler).

### Code

```typescript
import {
  GNNetwork,
  OnGroupMemberUpdateEventHandler,
  GroupStatus,
  ReturnCode,
  ErrorCode,
} from "@xmobitea/gn-typescript-client";

OnGroupMemberUpdateEventHandler.onUpdate = (payload) => {
  if (payload.groupId !== currentGroupId) return;
  for (const m of payload.members ?? []) {
    switch (m.groupStatus) {
      case GroupStatus.Joined:
        roster.upsert(m);
        break;
      case GroupStatus.Left:
      case GroupStatus.Kicked:
        roster.remove(m.userId);
        break;
    }
  }
};

async function join(groupId: string) {
  const res = await GNNetwork.group.joinGroupAsync({ groupId } as any);
  if (res.returnCode !== ReturnCode.Ok || res.errorCode !== ErrorCode.Ok) {
    if (res.errorCode === ErrorCode.GroupFull) return "full";
    return "error";
  }
  return "ok";
}

async function leave(groupId: string) {
  await GNNetwork.group.leaveGroupAsync({ groupId } as any);
}
```

### Return paths

- Join OK → event `OnGroupMemberUpdate` fire với status `Joined`.
- `ErrorCode.GroupFull` / `ErrorCode.AlreadyJoined` / `ErrorCode.GroupClosed` → tùy backend config.

### Pitfalls

- `removeMember` là method `.server` namespace — chỉ call được nếu có `secretKey` có `permission rules` có `group.removeMember.serverSelfEnable`. Từ client thường expose qua CloudScript.

---

## Scenario 9: Matchmaking ticket flow

**Problem:** User bấm "Find match" → enqueue ticket → poll status → vào match khi ghép xong.

**Prerequisites:** đã login + connect socket.

**APIs used:** `GNNetwork.multiplayer.createMatchmakingTicketAsync`, `getMatchmakingTicketAsync`, `cancelMatchmakingTicketAsync`. Xem [API_MULTIPLAYER.md](reference/API_MULTIPLAYER.md).

### Code

```typescript
import {
  GNNetwork,
  ReturnCode,
  ErrorCode,
  MatchmakingTicketStatus,
} from "@xmobitea/gn-typescript-client";

async function findMatch(queueName: string) {
  const createRes = await GNNetwork.multiplayer.createMatchmakingTicketAsync({
    queueName,
    playerAttributes: {},
  } as any);
  if (createRes.returnCode !== ReturnCode.Ok || createRes.errorCode !== ErrorCode.Ok) {
    return null;
  }
  const ticketId = createRes.responseData.ticketId;

  // Poll mỗi 2s cho tới khi matched hoặc timeout
  for (let i = 0; i < 30; i++) {
    await new Promise((r) => setTimeout(r, 2000));
    const poll = await GNNetwork.multiplayer.getMatchmakingTicketAsync({ ticketId } as any);
    if (poll.returnCode !== ReturnCode.Ok || poll.errorCode !== ErrorCode.Ok) continue;

    const status = poll.responseData.ticketStatus;
    if (status === MatchmakingTicketStatus.Matched) {
      return poll.responseData.matchId;
    }
    if (status === MatchmakingTicketStatus.Cancelled || status === MatchmakingTicketStatus.Failed) {
      return null;
    }
  }

  // Timeout: cancel ticket để queue không giữ slot
  await GNNetwork.multiplayer.cancelMatchmakingTicketAsync({ ticketId } as any);
  return null;
}
```

### Return paths

- `MatchmakingTicketStatus.Matched` → có `matchId`, chuyển sang scene game.
- `Queued` → tiếp tục poll.
- `Cancelled`/`Failed` → abort.

### Pitfalls

- Không cancel khi user hủy → ticket vẫn trong queue, occupy slot tới khi server timeout.
- Poll interval quá ngắn (<1s) → rate-limit reject.

---

## Scenario 10: Inventory query + grant item (server role)

**Problem:** Client xem inventory; backend/CloudScript grant item cho player khác.

**Prerequisites:** client login; `secretKey` có `permission rules` là `admin` hoặc `server` cấu hình ở backend/CloudScript.

**APIs used:** [`GNNetwork.inventory.getInventoryItemListAsync`](reference/API_INVENTORY.md) (client), `GNNetwork.inventory.server.addInventoryItemAsync` (server).

### Code

```typescript
import { GNNetwork, ReturnCode, ErrorCode } from "@xmobitea/gn-typescript-client";

// Client: xem inventory của chính mình
async function loadMyInventory() {
  const res = await GNNetwork.inventory.getInventoryItemListAsync({
    ownerId: GNNetwork.getAuthenticateStatus().getUserId(),
  } as any);
  if (res.returnCode !== ReturnCode.Ok || res.errorCode !== ErrorCode.Ok) return [];
  return res.responseData.items ?? [];
}

// Server: grant 1 sword cho player targetUserId
async function grantSword(targetUserId: string) {
  const res = await GNNetwork.inventory.server.addInventoryItemAsync({
    ownerId: targetUserId,
    itemId: "sword_001",
    amount: 1,
  } as any);
  return res.returnCode === ReturnCode.Ok && res.errorCode === ErrorCode.Ok;
}
```

### Return paths

- Client query → chỉ thấy inventory của chính mình (backend enforce ownerId = authToken.userId).
- Server grant → nếu `secretKey` sai → `ReturnCode.OperationNotAllow`.

### Pitfalls

- NÊN gọi `.server` trong backend Node service hoặc CloudScript.

---

## Scenario 11: Store — list catalog → purchase → validate receipt

**Problem:** User mở shop → chọn item → mua → xác nhận nhận hàng.

**Prerequisites:** đã login.

**APIs used:** [`GNNetwork.storeInventory.getStoreItemListAsync`](reference/API_STORE_INVENTORY.md), `buyStoreItemAsync`, `server.validateReceiptAsync`.

### Code

```typescript
import { GNNetwork, ReturnCode, ErrorCode } from "@xmobitea/gn-typescript-client";

async function listCatalog() {
  const res = await GNNetwork.storeInventory.getStoreItemListAsync({} as any);
  if (res.returnCode !== ReturnCode.Ok || res.errorCode !== ErrorCode.Ok) return [];
  return res.responseData.items ?? [];
}

async function buyItem(storeItemId: string) {
  const res = await GNNetwork.storeInventory.buyStoreItemAsync({
    storeItemId,
    amount: 1,
  } as any);

  if (res.returnCode !== ReturnCode.Ok) return "transport_error";
  switch (res.errorCode) {
    case ErrorCode.Ok:
      return "ok";
    case ErrorCode.NotEnoughCurrency:
      return "not_enough_currency";
    case ErrorCode.StoreItemOutOfStock:
      return "out_of_stock";
    default:
      return "unknown_" + res.errorCode;
  }
}
```

### Return paths

- `ErrorCode.Ok` → item đã grant vào inventory player; currency đã trừ.
- `ErrorCode.NotEnoughCurrency` (8) → cần topup.
- `ErrorCode.StoreItemOutOfStock` → item limited edition đã hết.

### Pitfalls

- In-app purchase (IAP) có receipt native — bắt buộc gửi qua `server.validateReceiptAsync` (CloudScript) trước khi grant item. Không grant trực tiếp từ client.

---

## Scenario 12: CloudScript execute + customTags

**Problem:** Trigger function server-side custom (ví dụ "claim daily reward") từ client.

**Prerequisites:** đã login; CloudScript function đã publish ở backend.

**APIs used:** [`GNNetwork.cloudScript.executeFunctionAsync`](reference/API_CLOUDSCRIPT.md).

### Code

```typescript
import { GNNetwork, ReturnCode, ErrorCode, ExecuteResponseStatus } from "@xmobitea/gn-typescript-client";

async function claimDailyReward() {
  const res = await GNNetwork.cloudScript.executeFunctionAsync(
    {
      functionName: "claimDailyReward",
      functionParameter: { date: new Date().toISOString().slice(0, 10) },
    } as any,
    undefined,        // overrideAuthToken
    undefined,        // overrideSecretKey
    { source: "daily_popup" } as any, // customTags — backend log/route bằng tag này
    30,               // timeout (seconds)
  );

  if (res.returnCode !== ReturnCode.Ok || res.errorCode !== ErrorCode.Ok) return null;

  const exec = res.responseData;
  if (exec.status !== ExecuteResponseStatus.Ok) {
    console.warn("function threw", exec.error);
    return null;
  }
  return exec.result; // raw payload từ function
}
```

### Return paths

- `ExecuteResponseStatus.Ok` → function chạy xong, `result` là value function trả về.
- `ExecuteResponseStatus.Error` → function throw; `exec.error` chứa message.
- `ReturnCode.CloudScriptFunctionNotFound` → function chưa publish hoặc sai tên.

### Pitfalls

- `customTags` là `GNHashtable` — trong TS dùng object literal `{ key: value }`. Giá trị primitive hoặc string; không nhét object lồng.
- Timeout function mặc định 20s — function nặng (query DB lớn) nên tăng timeout param.

---

## Scenario 13: Override authToken / secret (impersonate, cross-role)

**Problem:** Đang ở role admin/server, cần gọi API như một player cụ thể (impersonate) hoặc override secret key của request cụ thể.

**APIs used:** mọi method — param `overrideAuthToken`, `overrideSecretKey` là param thứ 3-4.

### Code

```typescript
import { GNNetwork } from "@xmobitea/gn-typescript-client";

// Impersonate player để query profile của họ
async function fetchProfileAs(playerAuthToken: string, playerId: string) {
  const res = await GNNetwork.masterPlayer.getMasterPlayerAsync(
    { masterPlayerId: playerId } as any,
    playerAuthToken,   // overrideAuthToken — thay token cache
    undefined,         // overrideSecretKey — giữ secret key mặc định của role
    undefined,         // customTags
    undefined,         // timeout
  );
  return res.responseData;
}

// Dùng secret key khác (ví dụ một game khác cùng backend)
async function callOtherGame(gameSecret: string) {
  return GNNetwork.content.getContentDataAsync(
    { key: "config" } as any,
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
- Truyền `overrideAuthToken = ""` (rỗng) → request đi KHÔNG CÓ auth header, fail với `AuthenticateFailed`. Muốn skip auth hẳn (ví dụ public endpoint) thì truyền `null`/`undefined`.

---

## Scenario 14: Admin login qua DashboardApi

**Problem:** Tool dashboard web — cần admin login bằng username/password admin, rồi query game list / analytics.

**Prerequisites:** đã init; biết admin username/password backend cấp.

**APIs used:** [`GNNetwork.dashboard.loginByAdminAccountAsync`](reference/API_DASHBOARD.md), `getGameListAsync`, `getAnalyticsAsync`, …

> **Lưu ý thiết kế:** Dashboard API CHỈ có namespace client (`GNNetwork.dashboard`, không có `.server` / `.admin`). Transport dùng `RequestRole.Client`. Admin context backend resolve TỪ auth token trả về sau `loginByAdminAccount` — token này khác token của player thường.

### Code

```typescript
import { GNNetwork, ReturnCode, ErrorCode, AuthenticateStatus } from "@xmobitea/gn-typescript-client";

async function adminLogin(username: string, password: string) {
  const res = await GNNetwork.dashboard.loginByAdminAccountAsync({
    username,
    password,
  } as any);
  if (res.returnCode !== ReturnCode.Ok || res.errorCode !== ErrorCode.Ok) return false;

  const status = new AuthenticateStatus();
  status.setAuthToken(res.responseData.authToken);
  status.setUserId(res.responseData.adminAccountId);
  GNNetwork.setNewAuthenticateStatus(status);
  return true;
}

async function listGames() {
  const res = await GNNetwork.dashboard.getGameListAsync({} as any);
  return res.responseData?.games ?? [];
}
```

### Return paths

- Happy → admin token cached; mọi dashboard method sau đó dùng token này.
- `ErrorCode.AccountNotFound` / `ErrorCode.PasswordIncorrect` → giống player login.

### Pitfalls

- Trộn admin token với player flow → backend reject. Sau admin logout, clear token trước khi login player.
- Dashboard KHÔNG cần socket — có thể set `useSocket: false` trong settings cho web dashboard.

---

## Scenario 15: Cleanup & shutdown flow

**Problem:** User logout hoặc app shutdown — cần close socket + clear auth để session sau không leak state.

### Code

```typescript
import { GNNetwork, AuthenticateStatus, OnGroupMessageUpdateEventHandler, OnGroupMemberUpdateEventHandler, OnGamePlayerFriendUpdateEventHandler, OnGamePlayerGroupUpdateEventHandler, OnCharacterPlayerFriendUpdateEventHandler, OnCharacterPlayerGroupUpdateEventHandler } from "@xmobitea/gn-typescript-client";

function logoutAndCleanup() {
  // 1. Clear all event handler callbacks (chúng là static, không tự gc)
  OnGroupMessageUpdateEventHandler.onUpdate = null as any;
  OnGroupMemberUpdateEventHandler.onUpdate = null as any;
  OnGamePlayerFriendUpdateEventHandler.onUpdate = null as any;
  OnGamePlayerGroupUpdateEventHandler.onUpdate = null as any;
  OnCharacterPlayerFriendUpdateEventHandler.onUpdate = null as any;
  OnCharacterPlayerGroupUpdateEventHandler.onUpdate = null as any;

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

## Pattern chung xuyên scenarios

| Pattern | Khi nào | Tham khảo |
|---------|---------|-----------|
| Check `returnCode` → `errorCode` → đọc `responseData` | Mọi `*Async()` | [ERROR_HANDLING.md](reference/ERROR_HANDLING.md) |
| `setNewAuthenticateStatus` sau login/refresh | Bất kỳ flow tạo token mới | Scenario 2, 3, 4, 14 |
| `connectSocket` → `sendRequestAuthSocket` → subscribe event handler | Realtime | Scenario 5, 6, 7, 8 |
| `.server` / `.admin` chỉ ở backend, không bao giờ ở frontend | Mọi cross-role call | Scenario 10, 13 |
| `customTags` để backend log/route | Khi cần phân loại source | Scenario 12 |
| Clear event handler + disconnectSocket khi logout | Unload/logout | Scenario 15 |
