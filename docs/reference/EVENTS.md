# Reference: Server Events

SDK cung cấp 6 server event handler đẩy realtime update từ backend qua socket. Mỗi handler expose 1 static callback `onUpdate: Action1<Payload>` — subscribe bằng cách gán function vào field này.

## Rule cứng

- Event chỉ đến khi **socket đã connect + đã authenticate**. Xem [README.MD § socket-auth-flow](../../README.MD#socket-auth-flow).
- Callback là **static field** dùng chung toàn app session. Gán lần cuối ghi đè lần trước; không có mechanism multi-subscriber built-in. Nếu cần fan-out, tự wrap dispatcher.
- Unsubscribe = gán `null`. Không có event nào “drain” callback khi socket disconnect.
- Callback nhận đã-deserialized payload. Không thao tác với `OperationEvent` raw trừ khi viết handler custom.
- Không giả định realtime tự chạy chỉ vì đã gọi method HTTP (friend, group, …). Chỉ các event liệt kê dưới đây được SDK lắng nghe mặc định.

## Delivery guarantee

- Best-effort. Nếu socket disconnect, event mất trong khoảng ngắt; SDK không replay.
- Sau khi reconnect + re-auth, backend có thể gửi snapshot mới; ứng dụng nên merge idempotent theo id entity.

## Bảng event

| Handler | EventCode (logical) | Payload class | Trigger |
|---------|---------------------|---------------|---------|
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
import { OnGroupMessageUpdateEventHandler } from "@xmobitea/gn-typescript-client";
```

**Subscribe shape:** `static onUpdate: Action1<GroupMessageUpdate>`

**Payload `GroupMessageUpdate`:**

| Field | Type | Optional | Notes |
|-------|------|----------|-------|
| `groupMessages` | `Array<GroupModels.GroupMessageResponseData>` | no | Batch message item mới/changed |
| `groupId` | `string` | no | Group id có message stream đổi |
| `characterId` | `string` | yes | Có khi update scope theo character context |

**Ví dụ:**
```ts
import { OnGroupMessageUpdateEventHandler } from "@xmobitea/gn-typescript-client";

OnGroupMessageUpdateEventHandler.onUpdate = (payload) => {
	console.log(`group ${payload.groupId} received ${payload.groupMessages.length} messages`);
	for (const msg of payload.groupMessages) {
		// render msg
	}
};

// Unsubscribe
// OnGroupMessageUpdateEventHandler.onUpdate = null;
```

---

## `OnGroupMemberUpdateEventHandler`

**Import:** `import { OnGroupMemberUpdateEventHandler } from "@xmobitea/gn-typescript-client";`

**Subscribe:** `static onUpdate: Action1<GroupMemberUpdate>`

**Payload `GroupMemberUpdate`:**

| Field | Type | Optional | Notes |
|-------|------|----------|-------|
| `members` | `Array<GenericModels.MemberItem>` | no | Member relation item đổi trong batch |
| `groupId` | `string` | no | Group id có member roster đổi |

**Ví dụ:**
```ts
OnGroupMemberUpdateEventHandler.onUpdate = (payload) => {
	for (const m of payload.members) {
		// update roster cache
	}
};
```

---

## `OnGamePlayerFriendUpdateEventHandler`

**Import:** `import { OnGamePlayerFriendUpdateEventHandler } from "@xmobitea/gn-typescript-client";`

**Subscribe:** `static onUpdate: Action1<GamePlayerFriendUpdate>`

**Payload `GamePlayerFriendUpdate`:**

| Field | Type | Optional | Notes |
|-------|------|----------|-------|
| `playerFriends` | `Array<GenericModels.FriendItem>` | no | Friend relation item đổi (add/accept/remove/status) |
| `characterId` | `string` | yes | Có khi update scope theo character context |

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

**Import:** `import { OnGamePlayerGroupUpdateEventHandler } from "@xmobitea/gn-typescript-client";`

**Subscribe:** `static onUpdate: Action1<GamePlayerGroupUpdate>`

**Payload `GamePlayerGroupUpdate`:**

| Field | Type | Optional | Notes |
|-------|------|----------|-------|
| `playerGroups` | `Array<GenericModels.GroupItem>` | no | Group relation item đổi (join/leave/status) |
| `characterId` | `string` | yes | Có khi update scope theo character context |

---

## `OnCharacterPlayerFriendUpdateEventHandler`

**Import:** `import { OnCharacterPlayerFriendUpdateEventHandler } from "@xmobitea/gn-typescript-client";`

**Subscribe:** `static onUpdate: Action1<CharacterPlayerFriendUpdate>`

**Payload `CharacterPlayerFriendUpdate`:**

| Field | Type | Optional | Notes |
|-------|------|----------|-------|
| `characterId` | `string` | no | Character id có friend relation đổi |
| `playerFriends` | `Array<GenericModels.FriendItem>` | no | Friend relation item đổi |

---

## `OnCharacterPlayerGroupUpdateEventHandler`

**Import:** `import { OnCharacterPlayerGroupUpdateEventHandler } from "@xmobitea/gn-typescript-client";`

**Subscribe:** `static onUpdate: Action1<CharacterPlayerGroupUpdate>`

**Payload `CharacterPlayerGroupUpdate`:**

| Field | Type | Optional | Notes |
|-------|------|----------|-------|
| `characterId` | `string` | no | Character id có group relation đổi |
| `playerGroups` | `Array<GenericModels.GroupItem>` | no | Group relation item đổi |

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

- Socket auth flow: [README.MD § socket-auth-flow](../../README.MD#socket-auth-flow)
- `FriendStatus` / `GroupStatus` giá trị numeric: [ENUMS.md](ENUMS.md)
- API gây event: [API group guides](../guides/)
