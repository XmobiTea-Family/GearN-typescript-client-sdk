# Reference: Server Events

SDK cung cấp 6 server event handler đẩy realtime update từ backend qua socket. Mỗi handler expose 1 static callback `onUpdate: Action1<Payload>` — subscribe bằng cách gán function vào field này.

## Chọn handler nhanh

<!-- prettier-ignore -->
| Tôi cần lắng nghe... | Handler |
| --- | --- |
| Tin nhắn mới/edit trong group | `OnGroupMessageUpdateEventHandler` |
| Member join/leave/kick/role thay đổi trong group | `OnGroupMemberUpdateEventHandler` |
| Quan hệ friend của **game player** hiện tại đổi | `OnGamePlayerFriendUpdateEventHandler` |
| Quan hệ group của **game player** hiện tại đổi | `OnGamePlayerGroupUpdateEventHandler` |
| Quan hệ friend của **character** hiện tại đổi | `OnCharacterPlayerFriendUpdateEventHandler` |
| Quan hệ group của **character** hiện tại đổi | `OnCharacterPlayerGroupUpdateEventHandler` |

## Rule cứng

- Event chỉ đến khi **socket đã connect + đã authenticate**. Xem [RULES.md § 7](/docs/RULES.md#7-auth--socket-flow).
- Callback là **static field** dùng chung toàn app session. Gán lần cuối ghi đè lần trước; không có mechanism multi-subscriber built-in. Nếu cần fan-out, tự wrap dispatcher.
- Cleanup copy-safe = gán callback no-op hoặc remove listener trong wrapper dispatcher của app. Không có event nào “drain” callback khi socket disconnect.
- Callback nhận đã-deserialized payload. Không thao tác với `OperationEvent` raw trừ khi viết handler custom.
- Không giả định realtime tự chạy chỉ vì đã gọi method HTTP (friend, group, …). Chỉ các event liệt kê dưới đây được SDK lắng nghe mặc định.

## Delivery guarantee

- Best-effort. Nếu socket disconnect, event mất trong khoảng ngắt; SDK không replay.
- Sau khi reconnect + re-auth, backend có thể gửi snapshot mới; ứng dụng nên merge idempotent theo id entity.

<a id="custom-operationevent"></a>

## Custom `OperationEvent` từ CloudScript / MasterPlayer

Ngoài 6 handler built-in ở trên, backend có thể đẩy event tự định nghĩa bằng `OperationEvent`:

- CloudScript: `socket.sendEventTo(...)`, `socket.sendEventToMoreUser(...)`, `socket.sendEventToAllPlayer(...)`, `socket.sendEventToRoom(...)`; nếu project có wrapper dạng `event.send(operationEvent)` thì client-side pattern vẫn giống nhau.
- SDK/Admin/Server API có thể phát custom event qua `sendSocketOperationEventAsync(...)`.

Client nhận các event này qua socket giống event built-in. Khác biệt chính: SDK không biết sẵn payload class của event custom, nên app phải tự route theo `event.getEventCode()` và đọc `event.getParameters()`.

### Cách nhanh: raw event handler

`GNNetwork.setOnEventHandler(...)` nhận **mọi** server event raw. Đây là cách đơn giản nhất khi app chỉ cần vài custom event.

```ts
import { GNNetwork } from "@xmobitea/gearn-typescript-client-sdk";

GNNetwork.setOnEventHandler((event) => {
    if (event.getEventCode() == "cloudScript.rewardGranted") {
        const p = event.getParameters();
        if (p == null) return;

        const rewardId = p.getString("rewardId", "");
        const amount = p.getNumber("amount", 0);
        const reason = p.getString("reason", "");

        // update UI/cache
        console.log("reward event", rewardId, amount, reason);
    }
});
```

Rule quan trọng:

- Cleanup type-safe bằng cách gán no-op: `GNNetwork.setOnEventHandler(() => {})`. Runtime có thể clear bằng `null`, nhưng public TypeScript signature hiện không nullable.
- `setOnEventHandler` là single-slot; gọi lần sau sẽ ghi đè lần trước. Nếu nhiều module cần nghe custom event, tự build dispatcher.
- Handler này cũng thấy event built-in. Luôn filter bằng `event.getEventCode()`.
- `event.getParameters()` là `GNHashtable | null`; đọc field bằng `getString`, `getNumber`, `getBoolean`, `getGNHashtable`, `getGNArray`.

### Cách có cấu trúc: custom `IServerEventHandler` + DTO decorator

Khi custom event nhiều hơn hoặc muốn payload typed giống các handler built-in, tạo payload class có một hoặc nhiều decorator trong bộ `@DataMember`, `@StringDataMember`, `@NumberDataMember`, `@BooleanDataMember`, `@GNHashtableDataMember`, `@GNArrayDataMember`, rồi tạo class implement `IServerEventHandler`.

Pattern này giống `OnCharacterPlayerGroupUpdateEventHandler`: `handle()` nhận raw `OperationEvent`, gọi `ConverterService.deserializeObject(operationEvent.getParameters(), PayloadClass)`, rồi forward sang `onUpdate`.

Chi tiết đầy đủ về các decorator `@DataMember`, `@StringDataMember`, `@NumberDataMember`, `@BooleanDataMember`, `@GNHashtableDataMember`, `@GNArrayDataMember`: [DATAMEMBER.md](/docs/reference/DATAMEMBER.md).

```ts
import {
    Action1,
    ConverterService,
    IServerEventHandler,
    GNNetwork,
    NumberDataMember,
    OperationEvent,
    ParameterCode,
    StringDataMember,
} from "@xmobitea/gearn-typescript-client-sdk";

export class CloudScriptRewardGranted {
    @StringDataMember({ code: "rewardId" })
    public rewardId: string;

    @NumberDataMember({ code: ParameterCode.Amount })
    public amount: number;

    @StringDataMember({ code: ParameterCode.Reason, isOptional: true })
    public reason?: string;

    @StringDataMember({ code: "sourceUserId", isOptional: true })
    public sourceUserId?: string;

    @NumberDataMember({ code: ParameterCode.Ts, isOptional: true })
    public ts?: number;
}

class CloudScriptRewardEventHandler implements IServerEventHandler {
    public static onUpdate: Action1<CloudScriptRewardGranted>;

    public getEventCode(): string {
        return "cloudScript.rewardGranted";
    }

    public handle(operationEvent: OperationEvent): void {
        if (CloudScriptRewardEventHandler.onUpdate != null) {
            CloudScriptRewardEventHandler.onUpdate(
                ConverterService.deserializeObject(operationEvent.getParameters(), CloudScriptRewardGranted)
            );
        }
    }
}

// Subscribe trước khi connect socket để không miss event sau handshake.
GNNetwork.subscriberServerEventHandler(new CloudScriptRewardEventHandler());

CloudScriptRewardEventHandler.onUpdate = (payload) => {
    console.log("reward event", payload.rewardId, payload.amount, payload.reason);
};
```

Ghi chú:

- `getEventCode()` phải trả đúng string mà CloudScript tạo trong `new OperationEvent(eventCode, parameters)` hoặc field `request.eventCode`.
- Decorator `code` phải trùng key trong `GNHashtable` payload. Có thể dùng `ParameterCode.*` cho key chuẩn của SDK, hoặc string literal cho key custom như `"rewardId"`.
- Nếu dùng decorator trong app TypeScript, giữ `experimentalDecorators` + `emitDecoratorMetadata` như rule platform trong [RULES.md](/docs/RULES.md#9-platform--transport).
- `@IServerEventHandler.registerEvent` phù hợp khi handler nằm trong SDK/module được load trước `GNNetwork.init()`. Với integration app, cách chắc nhất là tạo instance và gọi `GNNetwork.subscriberServerEventHandler(...)`.

### Gửi custom event bằng `GNNetwork.masterPlayer.sendSocketOperationEvent`

Operation này là HTTP operation backend-routed để bắn socket event tới player đang online. Nó vẫn phải check 2 tầng `returnCode` / `errorCode` như API bình thường.

```ts
import {
    ErrorCode,
    GNHashtable,
    GNNetwork,
    MasterPlayerModels,
    ReturnCode,
} from "@xmobitea/gearn-typescript-client-sdk";

const request = new MasterPlayerModels.SendSocketOperationEventRequestData();
request.userId = targetUserId; // optional trên client route nếu gửi cho chính user đang auth
request.eventCode = "cloudScript.rewardGranted";
request.eventParameters = GNHashtable.builder()
    .add("rewardId", "daily-login")
    .add("amount", 100)
    .add("reason", "dailyLogin")
    .add("sourceUserId", "server")
    .add("ts", Date.now())
    .build();

const res = await GNNetwork.masterPlayer.sendSocketOperationEventAsync(request);
if (res.returnCode !== ReturnCode.Ok) return;
if (res.errorCode !== ErrorCode.Ok) return;
```

## Bảng event

<!-- prettier-ignore -->
| Handler | EventCode (logical) | Payload class | Trigger |
| --- | --- | --- | --- |
| `OnGroupMessageUpdateEventHandler` | `OnGroupMessageUpdate` | `GroupMessageUpdate` | Tin nhắn group mới, edit, hoặc stream sync |
| `OnGroupMemberUpdateEventHandler` | `OnGroupMemberUpdate` | `GroupMemberUpdate` | Member join/leave/kick/role thay đổi |
| `OnGamePlayerFriendUpdateEventHandler` | `OnGamePlayerFriendUpdate` | `GamePlayerFriendUpdate` | Friend relation của game player hiện tại đổi |
| `OnGamePlayerGroupUpdateEventHandler` | `OnGamePlayerGroupUpdate` | `GamePlayerGroupUpdate` | Group relation của game player hiện tại đổi |
| `OnCharacterPlayerFriendUpdateEventHandler` | `OnCharacterPlayerFriendUpdate` | `CharacterPlayerFriendUpdate` | Friend relation của character hiện tại đổi |
| `OnCharacterPlayerGroupUpdateEventHandler` | `OnCharacterPlayerGroupUpdate` | `CharacterPlayerGroupUpdate` | Group relation của character hiện tại đổi |

---

## `OnGroupMessageUpdateEventHandler`

**Import:**

```ts
import { OnGroupMessageUpdateEventHandler } from "@xmobitea/gearn-typescript-client-sdk";
```

**Subscribe shape:** `static onUpdate: Action1<GroupMessageUpdate>`

**Payload `GroupMessageUpdate`:**

<!-- prettier-ignore -->
| Field | Type | Optional | Notes |
| --- | --- | --- | --- |
| `groupMessages` | `Array<GroupModels.GroupMessageResponseData>` | no | Batch message item mới/changed |
| `groupId` | `string` | no | Group id có message stream đổi |
| `characterId` | `string` | yes | Có khi update scope theo character context |

**Ví dụ:**

```ts
import { OnGroupMessageUpdateEventHandler } from "@xmobitea/gearn-typescript-client-sdk";

OnGroupMessageUpdateEventHandler.onUpdate = (payload) => {
    console.log(`group ${payload.groupId} received ${payload.groupMessages.length} messages`);
    for (const msg of payload.groupMessages) {
        // render msg
    }
};

// Cleanup copy-safe
OnGroupMessageUpdateEventHandler.onUpdate = () => {};
```

---

## `OnGroupMemberUpdateEventHandler`

**Import:** `import { OnGroupMemberUpdateEventHandler } from "@xmobitea/gearn-typescript-client-sdk";`

**Subscribe:** `static onUpdate: Action1<GroupMemberUpdate>`

**Payload `GroupMemberUpdate`:**

<!-- prettier-ignore -->
| Field | Type | Optional | Notes |
| --- | --- | --- | --- |
| `members` | `Array<GenericModels.MemberItem>` | no | Member relation item đổi trong batch |
| `groupId` | `string` | no | Group id có member roster đổi |

**Ví dụ:**

```ts
OnGroupMemberUpdateEventHandler.onUpdate = (payload) => {
    const groupId = payload.groupId;
    for (const m of payload.members) {
        // update member cache
    }
};
```

---

## `OnGamePlayerFriendUpdateEventHandler`

**Import:** `import { OnGamePlayerFriendUpdateEventHandler } from "@xmobitea/gearn-typescript-client-sdk";`

**Subscribe:** `static onUpdate: Action1<GamePlayerFriendUpdate>`

**Payload `GamePlayerFriendUpdate`:**

<!-- prettier-ignore -->
| Field | Type | Optional | Notes |
| --- | --- | --- | --- |
| `playerFriends` | `Array<GenericModels.FriendItem>` | no | Friend relation item đổi (add/accept/remove/status) |

**Ví dụ:**

```ts
OnGamePlayerFriendUpdateEventHandler.onUpdate = (payload) => {
    for (const f of payload.playerFriends) {
        // switch (f.status) { ... }
    }
};
```

---

## `OnGamePlayerGroupUpdateEventHandler`

**Import:** `import { OnGamePlayerGroupUpdateEventHandler } from "@xmobitea/gearn-typescript-client-sdk";`

**Subscribe:** `static onUpdate: Action1<GamePlayerGroupUpdate>`

**Payload `GamePlayerGroupUpdate`:**

<!-- prettier-ignore -->
| Field | Type | Optional | Notes |
| --- | --- | --- | --- |
| `playerGroups` | `Array<GenericModels.GroupItem>` | no | Group relation item đổi (join/leave/status) |

**Ví dụ:**

```ts
OnGamePlayerGroupUpdateEventHandler.onUpdate = (payload) => {
    for (const g of payload.playerGroups) {
        // update group relation cache
    }
};
```

---

## `OnCharacterPlayerFriendUpdateEventHandler`

**Import:** `import { OnCharacterPlayerFriendUpdateEventHandler } from "@xmobitea/gearn-typescript-client-sdk";`

**Subscribe:** `static onUpdate: Action1<CharacterPlayerFriendUpdate>`

**Payload `CharacterPlayerFriendUpdate`:**

<!-- prettier-ignore -->
| Field | Type | Optional | Notes |
| --- | --- | --- | --- |
| `characterId` | `string` | no | Character id có friend relation đổi |
| `playerFriends` | `Array<GenericModels.FriendItem>` | no | Friend relation item đổi |

**Ví dụ:**

```ts
OnCharacterPlayerFriendUpdateEventHandler.onUpdate = (payload) => {
    const characterId = payload.characterId;
    for (const f of payload.playerFriends) {
        // switch (f.status) { ... }
    }
};
```

---

## `OnCharacterPlayerGroupUpdateEventHandler`

**Import:** `import { OnCharacterPlayerGroupUpdateEventHandler } from "@xmobitea/gearn-typescript-client-sdk";`

**Subscribe:** `static onUpdate: Action1<CharacterPlayerGroupUpdate>`

**Payload `CharacterPlayerGroupUpdate`:**

<!-- prettier-ignore -->
| Field | Type | Optional | Notes |
| --- | --- | --- | --- |
| `characterId` | `string` | no | Character id có group relation đổi |
| `playerGroups` | `Array<GenericModels.GroupItem>` | no | Group relation item đổi |

**Ví dụ:**

```ts
OnCharacterPlayerGroupUpdateEventHandler.onUpdate = (payload) => {
    const characterId = payload.characterId;
    for (const g of payload.playerGroups) {
        // update group relation cache cho character
    }
};
```

---

## Pattern khuyến nghị

- Subscribe trước khi gọi `GNNetwork.connectSocket()` để không bỏ lỡ event ngay sau handshake.
- Callback phải nhanh; delegate work nặng sang queue/dispatcher riêng để tránh block socket loop.
- Nếu app có nhiều consumer cho cùng event, build wrapper:

```ts
type Listener<T> = (payload: T) => void;
const groupMessageListeners: Listener<GroupMessageUpdate>[] = [];

OnGroupMessageUpdateEventHandler.onUpdate = (payload) => {
    for (const l of groupMessageListeners) l(payload);
};

export function subscribeGroupMessage(l: Listener<GroupMessageUpdate>) {
    groupMessageListeners.push(l);
    return () => {
        const i = groupMessageListeners.indexOf(l);
        if (i >= 0) groupMessageListeners.splice(i, 1);
    };
}
```

---

## Liên kết

- Socket auth flow: [RULES.md § 7](/docs/RULES.md#7-auth--socket-flow)
- `FriendStatus` / `GroupStatus` giá trị numeric: [ENUMS.md](/docs/reference/ENUMS.md)
- API gây event: [API group guides](/docs/guides/)
