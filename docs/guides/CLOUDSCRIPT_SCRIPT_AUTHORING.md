# CloudScript Script Authoring Guide

Tài liệu này hướng dẫn AI agent và developer viết source CloudScript để publish qua `CloudScriptApi`.

Phạm vi của file này khác với [CLOUDSCRIPT.md](CLOUDSCRIPT.md):

- File này trả lời: "script gửi lên `AddFunctionRequestData.script` phải viết như thế nào?"
- [CLOUDSCRIPT.md](CLOUDSCRIPT.md) trả lời: "gọi API publish, execute, get, promote version như thế nào?"

Trong npm package, file này là nguồn hướng dẫn self-contained cho CloudScript authoring. Không link tới đường dẫn local ngoài package, vì các đường dẫn đó không tồn tại sau khi package được publish.

Runtime execute nằm ở phía server, nhưng các rule cần thiết để AI Agent viết script đúng đã được copy thành contract ngay trong file này:

- flow compile/execute
- handler registry
- security policy
- runtime object được inject sẵn
- method surface của `database`, `http`, `socket`, `mail`, `pushNotification`, `admin`
- publish/test/promote pattern qua public SDK

Nếu các file reference generated chưa khớp với `dist`, public type trong `dist/runtime/entity/models/CloudScriptModels.d.ts` là fallback cho request DTO hiện tại.

## 1. Mental Model

CloudScript source không phải một file TypeScript hoàn chỉnh.

Runtime server sẽ:

1. Nhận `script`, `canExecute`, `isLive` từ `addFunction`.
2. Reject sớm nếu script vi phạm security policy, ví dụ chứa `GNNetwork`.
3. Inject script vào `templateCloudScript.ts`.
4. Compile TypeScript.
5. Lưu thành version mới nếu compile pass.
6. Khi execute, gọi `handlers[functionName](args, context, log)`.

Vì vậy script hợp lệ phải tự đăng ký ít nhất một handler. Dạng bracket là pattern khuyến nghị vì dễ sinh code tự động hơn; runtime cũng chấp nhận dạng dot khi tên function là identifier hợp lệ:

```ts
handlers["pingCloudScript"] = async (args, context, log) => {
    return {
        ok: true,
        userId: context.userId,
        echo: args
    };
};
```

```ts
handlers.pingCloudScript = async (args, context, log) => {
    return {
        ok: true
    };
};
```

Không viết dạng này để publish:

```ts
function pingCloudScript(args) {
    return args;
}
```

Function trên compile được như helper cục bộ, nhưng runtime sẽ không tìm thấy `handlers["pingCloudScript"]` nếu không đăng ký handler.

## 2. Runtime Contract

Mỗi handler nhận 3 tham số:

| Param | Ý nghĩa | Rule |
| --- | --- | --- |
| `args` | Giá trị từ `ExecuteFunctionRequestData.functionParameters` | Chỉ giả định JSON-safe object/array/primitive |
| `context` | Runtime context của lần execute | Có `userId` và `customTags` |
| `log` | Hàm append debug log cho lần execute hiện tại | Chỉ log JSON-safe value |

`context.customTags` là metadata phụ trợ từ caller, ví dụ `traceId`, `source`, `build`, `campaign`.

Không dùng `customTags` cho authorization, permission hoặc secret.

Return value nên là một trong các dạng serialize an toàn:

- `null`
- `boolean`
- `number`
- `string`
- JSON object
- JSON array
- `GNHashtable`
- `GNArray`

Nếu cần fail rõ ràng, dùng:

```ts
throw new Error("reward already claimed");
```

Không dùng `console.log` để lấy `functionLogs`; runtime chỉ capture tham số `log`.

## 3. Workflow Viết Script

Phần này là hướng dẫn viết source thực tế, bắt đầu từ một yêu cầu business rồi chuyển thành handler chạy được.

### 3.1 Anatomy của một script hợp lệ

Một script CloudScript thường gồm 4 phần:

1. Type/interface mô tả `args` và `result`.
2. Helper validate input.
3. Helper business nhỏ, nếu cần.
4. Đăng ký handler vào `handlers`.

Khung chuẩn:

```ts
type MyFunctionArgs = {
    value?: string;
};

type MyFunctionResult = {
    ok: boolean;
    value: string;
    userId: string;
};

const requireString = (value: unknown, fieldName: string): string => {
    if (typeof value !== "string" || value.trim().length === 0) {
        throw new Error(fieldName + " is required");
    }

    return value.trim();
};

handlers["myFunction"] = async (args: MyFunctionArgs, context, log): Promise<MyFunctionResult> => {
    const value = requireString(args?.value, "value");

    return {
        ok: true,
        value: value,
        userId: context.userId
    };
};
```

Điểm cần nhớ:

- Top-level chỉ khai báo type/interface/helper/const/class không side effect và đăng ký `handlers`.
- Nếu không chắc security policy của server hiện tại cho phép `class`, ưu tiên viết helper bằng `function` hoặc `const`.
- Logic thật đặt bên trong handler hoặc helper được handler gọi.
- Không gọi API, query DB, set timeout, hoặc chạy side effect ở top-level.
- Handler name trong `handlers["myFunction"]` phải trùng `ExecuteFunctionRequestData.functionName`.

### 3.2 Cách chuyển yêu cầu thành handler

Làm theo thứ tự này:

| Câu hỏi | Output cần viết |
| --- | --- |
| Người gọi truyền gì? | `type XxxArgs` |
| Function trả gì? | `type XxxResult` |
| Field nào bắt buộc? | `requireString`, `requireNumber`, `requireArray` |
| Field nào optional? | Default rõ ràng trong code |
| Có side effect không? | Chọn `admin`, `database`, `http`, `socket`, `mail`, hoặc `pushNotification` |
| Lỗi nghiệp vụ trả kiểu gì? | `throw new Error("message")` hoặc return `{ ok: false, reason }` |

Rule chọn lỗi:

- Dùng `throw new Error(...)` khi function không thể hoàn tất, ví dụ input sai, user không tồn tại, service ngoài fail bắt buộc.
- Return `{ ok: false, reason: "..." }` khi đây là kết quả nghiệp vụ hợp lệ, ví dụ chưa đủ điều kiện nhận thưởng.

Ví dụ yêu cầu:

> User bấm nhận thưởng daily. Caller truyền `rewardId`. Script kiểm tra userId hiện tại, chống claim trùng theo ngày, lưu log vào DB custom, trả reward payload.

Thiết kế handler:

- `functionName`: `claimDailyReward`
- `args`: `{ rewardId?: string; date?: string }`
- `result`: `{ ok, rewardId, date, alreadyClaimed, userId }`
- helper: `database.runtimeGameCollection`
- lỗi input: thiếu reward id -> throw
- claim trùng: return `{ ok: false, alreadyClaimed: true }`

### 3.3 Helper validate nên copy-paste

```ts
const requireString = (value: unknown, fieldName: string): string => {
    if (typeof value !== "string" || value.trim().length === 0) {
        throw new Error(fieldName + " is required");
    }

    return value.trim();
};

const optionalString = (value: unknown, defaultValue: string): string => {
    return typeof value === "string" && value.trim().length > 0
        ? value.trim()
        : defaultValue;
};

const optionalNumber = (value: unknown, defaultValue: number): number => {
    return typeof value === "number" && Number.isFinite(value)
        ? value
        : defaultValue;
};

const requireStringArray = (value: unknown, fieldName: string): string[] => {
    if (!Array.isArray(value)) {
        throw new Error(fieldName + " is required");
    }

    const results = value
        .filter((item) => typeof item === "string")
        .map((item) => item.trim())
        .filter((item) => item.length > 0);

    if (results.length === 0) {
        throw new Error(fieldName + " must contain at least one string");
    }

    return results;
};

const todayUtc = (): string => {
    return new Date().toISOString().slice(0, 10);
};
```

Không validate kiểu này:

```ts
const rewardId = args.rewardId;
```

Vì `args` đến từ caller, luôn coi là untrusted input.

### 3.4 Recipe: pure business function

Dùng khi script chỉ validate input và trả kết quả, chưa cần DB/API ngoài.

```ts
type CalculateScoreArgs = {
    baseScore?: number;
    multiplier?: number;
};

handlers["calculateScore"] = async (args: CalculateScoreArgs, context, log) => {
    const baseScore = optionalNumber(args?.baseScore, 0);
    const multiplier = optionalNumber(args?.multiplier, 1);

    if (baseScore < 0) {
        throw new Error("baseScore must be greater than or equal to zero");
    }

    const finalScore = Math.floor(baseScore * multiplier);

    return {
        userId: context.userId,
        baseScore: baseScore,
        multiplier: multiplier,
        finalScore: finalScore
    };
};
```

### 3.5 Recipe: custom DB state, chống claim trùng

Dùng `database` khi bạn cần dữ liệu custom riêng của game. Ví dụ dưới đây lưu claim theo `userId + rewardId + date`.

```ts
type ClaimDailyRewardArgs = {
    rewardId?: string;
    date?: string;
};

handlers["claimDailyReward"] = async (args: ClaimDailyRewardArgs, context, log) => {
    const rewardId = optionalString(args?.rewardId, "daily_01");
    const date = optionalString(args?.date, todayUtc());
    const userId = context.userId;

    if (typeof userId !== "string" || userId.length === 0) {
        throw new Error("userId is required");
    }

    const collection = database.runtimeGameCollection("CloudScript.DailyRewardClaims", gameId);
    const claimKey = userId + ":" + rewardId + ":" + date;

    const existed = await collection.findOne(
        { claimKey: claimKey },
        { projection: { _id: 0 } }
    );

    if (existed != null) {
        return {
            ok: false,
            alreadyClaimed: true,
            userId: userId,
            rewardId: rewardId,
            date: date
        };
    }

    await collection.insertOne({
        claimKey: claimKey,
        userId: userId,
        rewardId: rewardId,
        date: date,
        tsCreate: Date.now()
    });

    log({
        action: "claimDailyReward",
        userId: userId,
        rewardId: rewardId,
        date: date
    });

    return {
        ok: true,
        alreadyClaimed: false,
        userId: userId,
        rewardId: rewardId,
        date: date,
        rewards: [
            {
                type: "currency",
                key: "soft",
                amount: 100
            }
        ]
    };
};
```

Lưu ý: nếu reward cần ghi vào inventory/currency chính thức và official API đã có sẵn, ưu tiên `admin` thay vì tự patch raw DB.

### 3.6 Recipe: gọi official API qua `admin`

Dùng `admin` khi behavior đã có trong GearN API. Ví dụ đọc display name của một player.

```ts
type AdminGetDisplayNameArgs = {
    userId?: string;
};

handlers["adminGetPlayerDisplayName"] = async (args: AdminGetDisplayNameArgs, context, log) => {
    const targetUserId = requireString(args?.userId, "userId");

    const response = await admin.gamePlayer.getDisplayNameAsync({
        userId: targetUserId
    });

    if (response.hasReturnCodeError()) {
        throw new Error(response.toString());
    }

    return {
        errorCode: response.errorCode,
        responseData: response.responseData
    };
};
```

Rule quan trọng:

- Trong route `admin`, thường phải truyền target rõ ràng như `userId`.
- Không copy request route `client` rồi bỏ `userId`.
- Không hard-code `secretKey` trong script.

### 3.7 Recipe: gọi webhook ngoài qua `http`

Dùng khi cần báo event sang service ngoài. Host/url phải pass allowlist phía server.

```ts
type SendWebhookArgs = {
    url?: string;
    eventName?: string;
    payload?: any;
};

handlers["sendWebhook"] = async (args: SendWebhookArgs, context, log) => {
    const url = requireString(args?.url, "url");
    const eventName = optionalString(args?.eventName, "cloudScriptEvent");

    try {
        const response = await http.post(
            url,
            {
                eventName: eventName,
                userId: context.userId,
                gameId: gameId,
                payload: args?.payload ?? null,
                ts: Date.now()
            },
            {
                timeout: 8000,
                headers: {
                    "content-type": "application/json"
                }
            }
        );

        return {
            ok: true,
            status: response.status,
            data: response.data
        };
    } catch (error: any) {
        return {
            ok: false,
            errorMessage: error?.message ?? "unknown http error",
            status: error?.response?.status ?? null,
            data: error?.response?.data ?? null
        };
    }
};
```

Không return nguyên Axios response hoặc error object vì có thể rất lớn hoặc không stringify an toàn.

### 3.8 Recipe: gửi realtime event qua `socket`

Dùng khi client đang online và cần nhận event realtime. Đây là fire-and-forget, không phải ACK từ client.

```ts
type NotifyUserArgs = {
    userId?: string;
    message?: string;
};

const createCloudScriptEvent = (message: string, sourceUserId: string) => {
    return new OperationEvent(
        "cloudScriptNotify",
        GNHashtable.builder()
            .add("message", message)
            .add("sourceUserId", sourceUserId)
            .add("ts", Date.now())
            .build()
    );
};

handlers["notifyUser"] = async (args: NotifyUserArgs, context, log) => {
    const targetUserId = optionalString(args?.userId, context.userId);
    const message = optionalString(args?.message, "Hello from CloudScript");
    const event = createCloudScriptEvent(message, context.userId);

    await socket.sendEventTo(targetUserId, event);

    return {
        ok: true,
        targetUserId: targetUserId,
        message: message
    };
};
```

Nếu người nhận có thể offline và bắt buộc phải nhận, ghi DB hoặc dùng `pushNotification` thay vì chỉ dùng `socket`.

### 3.9 Coverage matrix: chọn đúng pattern theo yêu cầu

AI Agent phải map yêu cầu sang pattern trước khi viết code:

| Yêu cầu người dùng | Pattern đúng | Không làm |
| --- | --- | --- |
| Tính toán, validate payload, normalize data | Pure handler | Không đụng DB/helper khi không cần |
| Lưu state custom riêng của game | `database.runtimeGameCollection(...)` | Không nhét state custom vào collection official nếu chưa hiểu schema |
| Đọc/sửa entity GearN có wrapper sẵn | `database.<domain>Repository.load...Async(...)` rồi `saveAsync()` | Không patch raw collection nếu official wrapper/API đã cover |
| Gọi business rule GearN chính thức | `admin.<domain>.<method>Async(...)` | Không dùng raw DB để bypass validation |
| Gọi webhook/API ngoài | `http.get/post/put/patch/delete(...)` | Không dùng `fetch`, không dùng Node `http/https` |
| Realtime cho user đang online | `socket.sendEventTo...` | Không kỳ vọng client ACK |
| Email transactional/report | `mail.send` / `mail.sendToMore` | Không hard-code SMTP secret |
| Mobile push/token/topic | `pushNotification.*` | Không log full token |
| Event callback hệ thống | `DashboardApi.setEventCallbackCloudScriptAsync` + registry đúng prefix | Không đăng ký vào `handlers` cho event callback |
| Publish/sửa source script | `addFunctionAsync` tạo version mới | Không dùng `editFunctionAsync` để sửa source |
| Promote live/tắt execute | `editFunctionAsync` với `version/canExecute/isLive` | Không add version mới chỉ để đổi flag |

Runtime object được inject sẵn gồm `gameId`, `handlers`, `database`, `http`, `socket`, `mail`, `pushNotification`, `admin`, `mongodb`, `axios`, `OperationEvent`, `GNHashtable`, `GNArray`, `GNHashtableBuilder`, `GNArrayBuilder`, và enum/constants từ SDK.

Default của AI:

- Dùng wrapper cụ thể (`http`, `admin`, `database`, `socket`, `mail`, `pushNotification`) trước.
- Chỉ dùng raw `mongodb` hoặc `axios` khi wrapper không cover và người dùng yêu cầu rõ.
- Không bao giờ tự introduce capability mới bằng `import` hoặc `require`.

Method surface cần nhớ:

| Capability | Method public thường dùng |
| --- | --- |
| `http` | `get`, `delete`, `head`, `options`, `post`, `put`, `patch` |
| `socket` | `sendEventTo`, `sendEventToMoreUser`, `sendEventToAllPlayer`, `joinRoom`, `leaveRoom`, `sendEventToRoom` |
| `mail` | `send`, `sendToMore` |
| `pushNotification` | `send`, `sendToMore`, `sendToTopic`, `subscribeToTopic`, `unsubscribeFromTopic` |
| `admin` | `admin.characterPlayer`, `admin.content`, `admin.gamePlayer`, `admin.group`, `admin.inventory`, `admin.masterPlayer`, `admin.storeInventory`, `admin.multiplayer`, `admin.cloudScript`, `admin.dashboard` |
| `database` | raw collection, log collection, collection/index management, execute log, entity wrapper, query helper, business helper |

Nếu method không nằm trong bảng capability của file này, AI không được tự bịa tên method. Với code tích hợp SDK, verify bằng public SDK docs hoặc `dist/**/*.d.ts`. Với helper runtime chưa được file này cover, hỏi lại người maintain tài liệu để bổ sung contract vào npm package trước khi sinh code.

### 3.10 Recipe: gửi email qua `mail`

Dùng cho transactional email hoặc HTML report. `mail` chỉ bridge sang mail service của server; không có delivery tracking chi tiết ngay trong handler.

```ts
type MailSendArgs = {
    email?: string;
    subject?: string;
    title?: string;
    message?: string;
};

const escapeHtml = (value: unknown): string => {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
};

handlers["mailSendNotification"] = async (args: MailSendArgs, context, log) => {
    const email = requireString(args?.email, "email");
    const subject = optionalString(args?.subject, "CloudScript Notification");
    const title = optionalString(args?.title, subject);
    const message = optionalString(args?.message, "You have a new notification.");

    const contentHtml =
        "<h2>" + escapeHtml(title) + "</h2>" +
        "<p>" + escapeHtml(message) + "</p>" +
        "<p>GameId: " + escapeHtml(gameId) + "</p>";

    await mail.send(email, subject, contentHtml);

    return {
        queued: true,
        email: email
    };
};
```

Batch email:

```ts
type MailBatchArgs = {
    emails?: unknown;
    subject?: string;
    contentHtml?: string;
};

handlers["mailSendBatch"] = async (args: MailBatchArgs, context, log) => {
    const emails = requireStringArray(args?.emails, "emails");
    const subject = optionalString(args?.subject, "CloudScript Batch Mail");
    const contentHtml = optionalString(args?.contentHtml, "<p>Batch mail from CloudScript</p>");

    await mail.sendToMore(emails, subject, contentHtml);

    return {
        queued: true,
        count: emails.length
    };
};
```

Không đưa nội dung nhạy cảm hoặc full email list vào `functionLogs`.

### 3.11 Recipe: push notification token, many, topic

Dùng cho mobile notification. `pushNotification` là bridge server-side, không phải SDK push chạy trực tiếp trong script.

Single token:

```ts
type PushSendArgs = {
    token?: string;
    title?: string;
    body?: string;
};

handlers["pushSendToToken"] = async (args: PushSendArgs, context, log) => {
    const token = requireString(args?.token, "token");
    const title = optionalString(args?.title, "CloudScript");
    const body = optionalString(args?.body, "Hello from CloudScript");

    await pushNotification.send(
        token,
        title,
        body,
        1,
        "default",
        "ic_notification",
        {
            source: "cloudScript",
            gameId: gameId,
            userId: context.userId
        }
    );

    return {
        queued: true,
        title: title
    };
};
```

Many tokens:

```ts
type PushManyArgs = {
    tokens?: unknown;
    title?: string;
    body?: string;
};

handlers["pushSendToMany"] = async (args: PushManyArgs, context, log) => {
    const tokens = requireStringArray(args?.tokens, "tokens");
    const title = optionalString(args?.title, "CloudScript Batch Push");
    const body = optionalString(args?.body, "Hello from CloudScript");

    await pushNotification.sendToMore(
        tokens,
        title,
        body,
        1,
        "default",
        "ic_notification",
        {
            source: "cloudScript",
            userId: context.userId
        }
    );

    return {
        queued: true,
        count: tokens.length
    };
};
```

Topic send/subscribe:

```ts
type PushTopicArgs = {
    topic?: string;
    tokens?: unknown;
    title?: string;
    body?: string;
};

handlers["pushSendToTopic"] = async (args: PushTopicArgs, context, log) => {
    const topic = requireString(args?.topic, "topic");
    const title = optionalString(args?.title, "Topic Notification");
    const body = optionalString(args?.body, "CloudScript topic message");

    await pushNotification.sendToTopic(
        topic,
        title,
        body,
        1,
        "default",
        "ic_notification",
        {
            topic: topic,
            sourceUserId: context.userId
        }
    );

    return {
        queued: true,
        topic: topic
    };
};

handlers["pushSubscribeTopic"] = async (args: PushTopicArgs, context, log) => {
    const topic = requireString(args?.topic, "topic");
    const tokens = requireStringArray(args?.tokens, "tokens");

    await pushNotification.subscribeToTopic(tokens, topic);

    return {
        subscribed: true,
        topic: topic,
        count: tokens.length
    };
};

handlers["pushUnsubscribeTopic"] = async (args: PushTopicArgs, context, log) => {
    const topic = requireString(args?.topic, "topic");
    const tokens = requireStringArray(args?.tokens, "tokens");

    await pushNotification.unsubscribeFromTopic(tokens, topic);

    return {
        unsubscribed: true,
        topic: topic,
        count: tokens.length
    };
};
```

Không return hoặc log full token nếu không cần.

### 3.12 Recipe: database wrapper, query, leaderboard, business log

Raw collection chỉ là một nhánh. Khi đụng entity GearN, ưu tiên repository/wrapper nếu có.

Các nhóm database cần chọn đúng:

| Nhóm | Dùng khi nào | Ví dụ |
| --- | --- | --- |
| Raw collection | Dữ liệu custom riêng của game | `database.runtimeGameCollection("CloudScript.X", gameId)` |
| Log collection | Audit/business log custom | `database.logRuntimeGameCollection(...)` |
| Collection/index management | Tạo collection/index cho feature mới | `createCollection`, `createIndex`, `logCreateIndex` |
| Entity wrapper | Load object GearN rồi mutate bằng setter | `gamePlayerRepository.loadGamePlayerAsync(...)` |
| Query helper | Query theo tag/segment/leaderboard | `loadGamePlayersWithTagAsync(...)` |
| Business helper | Ghi log hoặc tạo data theo helper có sẵn | `insertGamePlayerStatisticsLogsAsync(...)` |

Tạo collection/index cho custom feature:

```ts
type EnsureCollectionArgs = {
    collectionName?: string;
};

handlers["dbEnsureCustomCollection"] = async (args: EnsureCollectionArgs, context, log) => {
    const collectionName = optionalString(
        args?.collectionName,
        "Runtime." + gameId + ".CloudScript.CustomFeature"
    );

    const exists = await database.getDb().listCollections({ name: collectionName }).hasNext();
    if (!exists) {
        await database.createCollection(collectionName);
    }

    database.createIndex(collectionName, { userId: 1, key: 1 }, { unique: true });
    database.createIndex(collectionName, { tsCreate: -1 });

    return {
        ok: true,
        collectionName: collectionName
    };
};
```

Chỉ tạo index khi bạn hiểu collection name chính xác và hậu quả vận hành. Không tạo index ngẫu nhiên trong flow gameplay nóng.

Load và mutate `GamePlayer` wrapper:

```ts
type UpdateGamePlayerTagArgs = {
    userId?: string;
    tagKey?: string;
    tagValue?: string;
};

handlers["dbUpdateGamePlayerTag"] = async (args: UpdateGamePlayerTagArgs, context, log) => {
    const userId = optionalString(args?.userId, context.userId);
    const tagKey = requireString(args?.tagKey, "tagKey");
    const tagValue = requireString(args?.tagValue, "tagValue");

    const gamePlayer = await database.gamePlayerRepository.loadGamePlayerAsync(userId, gameId);
    if (gamePlayer == null) {
        throw new Error("gamePlayer not found");
    }

    gamePlayer.setTag(tagKey, tagValue);
    await gamePlayer.saveAsync();

    return {
        ok: true,
        userId: gamePlayer.getUserId(),
        tagKey: tagKey,
        tagValue: gamePlayer.getTag(tagKey)
    };
};
```

Query theo tag:

```ts
type FindPlayersByTagArgs = {
    tagKey?: string;
    tagValue?: string;
    skip?: number;
    limit?: number;
};

handlers["dbFindPlayersByTag"] = async (args: FindPlayersByTagArgs, context, log) => {
    const tagKey = requireString(args?.tagKey, "tagKey");
    const tagValue = requireString(args?.tagValue, "tagValue");
    const skip = optionalNumber(args?.skip, 0);
    const limit = Math.min(optionalNumber(args?.limit, 10), 50);

    const gamePlayers = await database.gamePlayerRepository.loadGamePlayersWithTagAsync(
        tagKey,
        tagValue,
        skip,
        limit,
        gameId
    );

    return {
        count: gamePlayers.length,
        results: gamePlayers.map((gamePlayer) => {
            return {
                userId: gamePlayer.getUserId(),
                displayName: gamePlayer.getDisplayName(),
                tagValue: gamePlayer.getTag(tagKey)
            };
        })
    };
};
```

Leaderboard theo statistics:

```ts
type LeaderboardArgs = {
    statisticKey?: string;
    skip?: number;
    limit?: number;
    direction?: number;
};

handlers["dbStatisticsLeaderboard"] = async (args: LeaderboardArgs, context, log) => {
    const statisticKey = requireString(args?.statisticKey, "statisticKey");
    const skip = optionalNumber(args?.skip, 0);
    const limit = Math.min(optionalNumber(args?.limit, 10), 50);
    const direction = args?.direction === 1 ? 1 : -1;

    const gamePlayers = await database.gamePlayerRepository.loadGamePlayersLeaderboardWithStatisticsAsync(
        statisticKey,
        skip,
        limit,
        gameId,
        direction
    );

    return {
        statisticKey: statisticKey,
        results: gamePlayers.map((gamePlayer) => {
            const statistic = gamePlayer.getPlayerStatistics(statisticKey);

            return {
                userId: gamePlayer.getUserId(),
                displayName: gamePlayer.getDisplayName(),
                value: statistic?.value ?? 0,
                tsLastUpdate: statistic?.tsLastUpdate ?? null
            };
        })
    };
};
```

Business log bền vững:

```ts
type InsertStatisticLogArgs = {
    userId?: string;
    key?: string;
    amount?: number;
    startValue?: number;
    finalValue?: number;
    logMessage?: string;
};

handlers["dbInsertStatisticLog"] = async (args: InsertStatisticLogArgs, context, log) => {
    const userId = optionalString(args?.userId, context.userId);
    const key = requireString(args?.key, "key");
    const amount = optionalNumber(args?.amount, 1);
    const startValue = optionalNumber(args?.startValue, 0);
    const finalValue = optionalNumber(args?.finalValue, startValue + amount);
    const logMessage = optionalString(args?.logMessage, "CloudScript statistic log");

    await database.gamePlayerRepository.insertGamePlayerStatisticsLogsAsync([
        {
            userId: userId,
            key: key,
            amount: amount,
            startValue: startValue,
            finalValue: finalValue,
            log: logMessage,
            tsCreate: Date.now()
        }
    ], gameId);

    return {
        inserted: true,
        userId: userId,
        key: key,
        amount: amount
    };
};
```

Không dùng `functionLogs` làm audit log bền vững; nó chỉ là debug log của lần execute hiện tại.

### 3.13 Recipe: `GNHashtable`, `GNArray`, `OperationEvent`

Dùng các type này khi helper hoặc client event cần GearN data object thay vì plain object.

```ts
handlers["buildHashtableDemo"] = async (args, context, log) => {
    const table = GNHashtable.builder()
        .add("userId", context.userId)
        .add("gameId", gameId)
        .add("ts", Date.now())
        .build();

    const array = GNArray.builder()
        .add("first")
        .add("second")
        .build();

    return {
        table: table,
        array: array
    };
};
```

Realtime event payload:

```ts
const createPlayerEvent = (eventCode: string, payload: { [key: string]: any }) => {
    return new OperationEvent(
        eventCode,
        GNHashtable.builder().addAll(payload).build()
    );
};
```

Nếu plain JSON đủ dùng, cứ return plain JSON. Chỉ dùng `GNHashtable`/`GNArray` khi API/helper yêu cầu hoặc client event convention cần.

### 3.14 Recipe: Event callback CloudScript

Event callback không chạy qua `handlers`. Nó được set bằng `DashboardApi.setEventCallbackCloudScriptAsync` và phải đăng ký vào registry theo `eventName`.

Registry bắt buộc:

| `eventName` | Registry phải dùng |
| --- | --- |
| `pre_*` | `preHandlers["pre_*"]` |
| `post_*` | `postHandlers["post_*"]` |
| `system_*` | `systemHandlers["system_*"]` |
| `event_*` | `eventHandlers["event_*"]` |
| `systemMatchmaking_*` | `systemMatchmakingHandlers["systemMatchmaking_*"]` |
| `systemAuthenticate_*` | `systemAuthenticateHandlers["systemAuthenticate_*"]` |
| `systemGenericService_*` | `systemGenericServiceHandlers["systemGenericService_*"]` |
| `socket_*` | `socketHandlers["socket_*"]` |

Ví dụ pre callback, thay `pre_exampleOperation` bằng `eventName` thật trong request:

```ts
preHandlers["pre_exampleOperation"] = async (args, context, log) => {
    log({
        eventName: "pre_exampleOperation",
        userId: context.userId,
        ts: Date.now()
    });

    return {
        ok: true
    };
};
```

Ví dụ post callback:

```ts
postHandlers["post_exampleOperation"] = async (args, context, log) => {
    return {
        ok: true,
        observed: true
    };
};
```

Ví dụ system callback:

```ts
systemHandlers["system_exampleEvent"] = async (args, context, log) => {
    return {
        ok: true,
        gameId: gameId
    };
};
```

Rule cứng cho event callback:

- Với request operation callback, server usage cho phép đăng ký `preHandlers[eventName]`, `postHandlers[eventName]`, hoặc cả hai nếu flow vận hành của event đó yêu cầu rõ.
- Với system/event/socket callback, submitted child script chỉ đăng ký đúng một handler tương ứng.
- Nếu không chắc event thuộc loại nào, default an toàn là chỉ đăng ký một handler đúng prefix.
- Key trong registry phải khớp chính xác `eventName`.
- Registry map phải khớp prefix của `eventName`.
- Function CloudScript thường dùng `handlers`; event callback không dùng `handlers`.

### 3.15 AI không được suy diễn

| Tình huống | Không được suy diễn | Cách đúng |
| --- | --- | --- |
| Source script có `function foo()` | Runtime sẽ tự expose function | Phải đăng ký `handlers["foo"]` |
| Omit `version` khi execute | Chạy version mới add gần nhất | Chạy version đang `isLive` |
| `editFunctionAsync` | Sửa source | Chỉ sửa `canExecute/isLive` |
| `socket/mail/pushNotification` | Có ACK delivery từ client/service cuối | Chỉ coi là bridge queued/fire-and-forget |
| `customTags` | Có thể dùng làm quyền | Chỉ metadata trace/source |
| `database` | Luôn là lựa chọn mạnh nhất | Official API có rồi thì ưu tiên `admin` |
| `console.log` | Vào `functionLogs` | Phải dùng tham số `log` |
| `fetch`/`axios` | Gọi ngoài bình thường | Mặc định dùng wrapper `http`; `fetch` bị cấm |
| Event callback | Dùng `handlers` | Dùng registry theo prefix |
| Top-level code | Được chạy như bootstrap | Top-level chỉ khai báo helper/type/interface/const/class không side effect và registry assignment |

### 3.16 Checklist tự review code script

Sau khi viết xong handler, tự đọc lại theo checklist này:

- Handler đã đăng ký đúng `handlers["functionName"]` chưa?
- Tên handler có trùng `functionName` caller sẽ execute không?
- `args` đã validate chưa?
- Có field nào optional cần default rõ ràng không?
- Có đang tin `context.customTags` để authorize không? Nếu có là sai.
- Có side effect ở top-level không?
- Có dùng helper đúng mục tiêu không: `admin` trước `database` khi official API đã có?
- Có dùng `log` vừa đủ và JSON-safe không?
- Return có JSON-safe không?
- Có token/secret hard-code trong script không?

### 3.17 Bước 1: Xác định API public của script

Trước khi viết code, ghi rõ:

- `functionName`: tên handler, dài `3..30` ký tự.
- `args`: schema input.
- `result`: schema output.
- `side effects`: có ghi database, gọi official admin API, gửi socket, gửi mail, gửi push, gọi webhook không.
- `route execute`: client, server hay admin.

Ví dụ:

```ts
type ClaimDailyRewardArgs = {
    rewardId?: string;
    clientDate?: string;
};

type ClaimDailyRewardResult = {
    ok: boolean;
    rewardId: string;
    userId: string;
};
```

### 3.18 Bước 2: Chọn helper

| Nhu cầu | Helper | Rule |
| --- | --- | --- |
| Behavior đã có trong official GearN API | `admin` | Ưu tiên trước `database` |
| Đọc/ghi MongoDB nội bộ hoặc collection custom | `database` | Chỉ dùng khi official API không cover |
| Gọi REST API hoặc webhook ngoài | `http` | Phải đi qua wrapper và phụ thuộc allowlist server |
| Gửi realtime event cho user/room | `socket` | Không kỳ vọng ACK delivery chi tiết |
| Gửi email | `mail` | Không hard-code secret SMTP trong script |
| Gửi push token/topic | `pushNotification` | Không kỳ vọng ACK delivery chi tiết |

Không dựa vào file helper ngoài package khi đang đọc npm package. Các method helper được phép dùng đã nằm trong mục 3.9 và các recipe ngay trong file này.

### 3.19 Bước 3: Viết handler nhỏ và validate input

Pattern khuyến nghị:

```ts
type PingArgs = {
    message?: string;
};

handlers["pingCloudScript"] = async (args: PingArgs, context, log) => {
    const message = typeof args?.message === "string" && args.message.length > 0
        ? args.message
        : "pong";

    return {
        ok: true,
        gameId: gameId,
        userId: context.userId,
        message: message
    };
};
```

Với debug tạm thời:

```ts
handlers["pingCloudScriptDebug"] = async (args, context, log) => {
    const message = typeof args?.message === "string" && args.message.length > 0
        ? args.message
        : "pong";

    log({
        action: "pingCloudScriptDebug",
        userId: context.userId,
        message: message
    });

    return {
        ok: true,
        message: message
    };
};
```

`functionLogs` trả về sẽ là mảng string đã stringify.

### 3.20 Bước 4: Chạy security checklist trước publish

Top-level chỉ nên có:

- `function` helper declaration
- `const` declaration
- `class` helper không side effect, nếu target server policy cho phép
- `type`
- `interface`
- `handlers["name"] = ...`

Bên trong handler được dùng `if`, `switch`, loop, `try/catch`, `async/await`.

Không dùng:

- `import`, `export`, `require`
- `GNNetwork`
- `process`, `global`, `globalThis`, `Buffer`
- `eval`, `Function`, `WebAssembly`
- `fetch`, `Headers`, `Request`, `Response`
- `fs`, `net`, `tls`, `dns`, `http`, `https`, `os`, `path`
- `child_process`, `worker_threads`, `vm`
- `setTimeout`, `setInterval`, `setImmediate`, `queueMicrotask`
- `.constructor.constructor`, `.__proto__`, `.prototype`
- top-level `await`, `if`, loop, `try`, function call, object creation có side effect

Runtime reject fail-closed: không compile, không lưu version.

### 3.21 Bước 5: Publish version mới

Đổi source code luôn dùng `addFunctionAsync`. Không dùng `editFunctionAsync` để sửa source.

Pattern deploy an toàn:

1. Add version mới với `canExecute = true`, `isLive = false`.
2. Lưu `responseData.version`.
3. Execute test với đúng `version` vừa tạo.
4. Promote live bằng `editFunctionAsync` chỉ sau khi test pass.
5. Chỉ bỏ `version` khi muốn chạy version đang live.

## 4. SDK Publish/Test/Promote Template

Code dưới đây giả định `GNNetwork.init(settings)` đã chạy trước đó và caller đang là admin tool hoặc trusted ops script.

```ts
import {
    CloudScriptModels,
    ErrorCode,
    ExecuteResponseStatus,
    GNNetwork,
    ReturnCode,
} from "@xmobitea/gn-typescript-client";

function assertTransportAndBusinessOk(response: {
    returnCode: number;
    errorCode: number;
    debugMessage: string;
    invalidMembers?: unknown[];
}) {
    if (response.returnCode !== ReturnCode.Ok) {
        throw new Error(`CloudScript transport error: returnCode=${response.returnCode}, debug=${response.debugMessage}`);
    }

    if (response.errorCode !== ErrorCode.Ok) {
        throw new Error(`CloudScript business error: errorCode=${response.errorCode}`);
    }
}

export async function publishCloudScriptVersion(script: string, adminSecret?: string) {
    const request = new CloudScriptModels.AdminAddFunctionRequestData();
    request.script = script;
    request.canExecute = true;
    request.isLive = false;

    const response = await GNNetwork.cloudScript.admin.addFunctionAsync(
        request,
        undefined,
        adminSecret,
    );

    assertTransportAndBusinessOk(response);

    if (response.responseData.errorMessage) {
        throw new Error(response.responseData.errorMessage);
    }

    return response.responseData.version;
}

export async function executeCloudScriptVersion(
    userId: string,
    functionName: string,
    version: string,
    functionParameters: unknown,
    adminSecret?: string,
) {
    const request = new CloudScriptModels.AdminExecuteFunctionRequestData();
    request.userId = userId;
    request.functionName = functionName;
    request.version = version;
    request.functionParameters = functionParameters;

    const response = await GNNetwork.cloudScript.admin.executeFunctionAsync(
        request,
        undefined,
        adminSecret,
        undefined,
        30,
    );

    assertTransportAndBusinessOk(response);

    const exec = response.responseData;
    if (exec.status !== ExecuteResponseStatus.Ok) {
        throw new Error(`CloudScript execute failed: status=${exec.status}, error=${exec.errorMessage}`);
    }

    return exec;
}

export async function promoteCloudScriptVersion(version: string, adminSecret?: string) {
    const request = new CloudScriptModels.AdminEditFunctionRequestData();
    request.version = version;
    request.canExecute = true;
    request.isLive = true;

    const response = await GNNetwork.cloudScript.admin.editFunctionAsync(
        request,
        undefined,
        adminSecret,
    );

    assertTransportAndBusinessOk(response);

    if (response.responseData.errorMessage) {
        throw new Error(response.responseData.errorMessage);
    }
}

export async function publishTestAndPromoteCloudScript(options: {
    script: string;
    functionName: string;
    testUserId: string;
    testParameters?: unknown;
    adminSecret?: string;
}) {
    const version = await publishCloudScriptVersion(options.script, options.adminSecret);

    const exec = await executeCloudScriptVersion(
        options.testUserId,
        options.functionName,
        version,
        options.testParameters ?? {},
        options.adminSecret,
    );

    await promoteCloudScriptVersion(version, options.adminSecret);

    return {
        version: version,
        result: exec.functionResult,
        logs: exec.functionLogs,
        executionTimeInMs: exec.executionTimeInMs,
        memoryUsedInBytes: exec.memoryUsedInBytes,
    };
}
```

Nếu code chạy trong backend/service thay vì admin tool, đổi namespace và DTO sang `CloudScriptModels.Server*RequestData` + `GNNetwork.cloudScript.server.*`.

## 5. Execute Từ Player App

Client app thường chỉ execute function đã publish và được backend cho phép.

```ts
import {
    CloudScriptModels,
    ErrorCode,
    ExecuteResponseStatus,
    GNHashtable,
    GNNetwork,
    ReturnCode,
} from "@xmobitea/gn-typescript-client";

export async function claimDailyReward() {
    const request = new CloudScriptModels.ExecuteFunctionRequestData();
    request.functionName = "claimDailyReward";
    request.functionParameters = {
        clientDate: new Date().toISOString().slice(0, 10)
    };

    const response = await GNNetwork.cloudScript.executeFunctionAsync(
        request,
        undefined,
        undefined,
        GNHashtable.builder()
            .add("source", "daily_reward_button")
            .build(),
        30,
    );

    if (response.returnCode !== ReturnCode.Ok) {
        return null;
    }

    if (response.errorCode !== ErrorCode.Ok) {
        return null;
    }

    if (response.responseData.status !== ExecuteResponseStatus.Ok) {
        return null;
    }

    return response.responseData.functionResult;
}
```

Client route `executeFunctionAsync` cho phép `userId` optional. Server/admin route bắt buộc truyền `userId`.

## 6. Version Rules

| Việc cần làm | API |
| --- | --- |
| Publish source mới | `addFunctionAsync` |
| Bật/tắt execute version cũ | `editFunctionAsync` |
| Promote version thành live | `editFunctionAsync` với `isLive = true` |
| Test version cụ thể | `executeFunctionAsync` với `version` |
| Execute live version | `executeFunctionAsync` không truyền `version` |
| Lấy source version cụ thể | `getFunctionAsync` |
| Lấy `latestVersion` / `liveLatestVersion` | `getFunctionsAsync` |

Rule quan trọng:

- `version` nếu truyền phải dài đúng `7` ký tự.
- `functionName` không phải `version`.
- `getFunctionsAsync` không có filter/pagination.
- `results[]` của `getFunctionsAsync` không có `isLive`; đọc `liveLatestVersion`.
- `getFunctionAsync` không trả lại `version`; caller phải giữ version từ request hoặc list.

## 7. Event Callback CloudScript

Event callback không thuộc `CloudScriptApi`. Dùng `DashboardApi.getEventCallbackCloudScriptAsync` và `DashboardApi.setEventCallbackCloudScriptAsync`.

Registry event callback khác registry function:

| Prefix `eventName` | Registry |
| --- | --- |
| `pre_*` | `preHandlers["pre_*"]` |
| `post_*` | `postHandlers["post_*"]` |
| `system_*` | `systemHandlers["system_*"]` |
| `event_*` | `eventHandlers["event_*"]` |
| `systemMatchmaking_*` | `systemMatchmakingHandlers["systemMatchmaking_*"]` |
| `systemAuthenticate_*` | `systemAuthenticateHandlers["systemAuthenticate_*"]` |
| `systemGenericService_*` | `systemGenericServiceHandlers["systemGenericService_*"]` |
| `socket_*` | `socketHandlers["socket_*"]` |

Rule event callback:

- Request operation callback có thể dùng `preHandlers`, `postHandlers`, hoặc cả hai nếu event đó hỗ trợ rõ.
- System/event/socket callback chỉ đăng ký đúng một handler.
- Nếu không chắc loại event, chỉ đăng ký một handler đúng prefix.
- Key handler phải khớp chính xác `eventName`.
- Registry map phải khớp prefix của `eventName`.

## 8. AI Checklist

Trước khi trả lời hoặc sinh code CloudScript:

- Script có đăng ký `handlers["functionName"] = ...` chưa?
- `functionName` dài `3..30` chưa?
- Có dùng sai `GNNetwork`, `import`, `require`, `fetch`, `process` không?
- Có top-level side effect không?
- Input `args` có validate đủ để không tin client mù quáng không?
- `return` và `log` có JSON-safe không?
- Nếu source đổi, có dùng `addFunctionAsync` không?
- Nếu chỉ promote/bật tắt, có dùng `editFunctionAsync` không?
- Nếu test version mới, có truyền `version` cụ thể không?
- Nếu execute bằng server/admin, có truyền `userId` không?
- Nếu cần helper domain, method đó đã có trong capability table hoặc recipe của file package này chưa?
- Nếu official GearN API đã cover behavior, có ưu tiên `admin` trước `database` không?
- Nếu dùng `http`, có dùng wrapper `http.*` thay vì `fetch`/Node module không?
- Nếu dùng `socket`, có nhớ đây là fire-and-forget, không phải client ACK không?
- Nếu dùng `mail` hoặc `pushNotification`, có tránh log/return dữ liệu nhạy cảm không?
- Nếu dùng `database`, có chọn đúng raw collection/wrapper/query/business-log pattern không?
- Nếu cần event callback, có chuyển sang `DashboardApi` thay vì `CloudScriptApi` không?

## 9. Common Failures

| Triệu chứng | Nguyên nhân hay gặp | Fix |
| --- | --- | --- |
| `FunctionNameNotFound` | Không đăng ký vào `handlers` hoặc sai `functionName` | Đăng ký `handlers["name"]` đúng tên execute |
| `VersionInvalid` | Version sai 7 ký tự, không execute được, hoặc chưa live khi omit version | Test bằng version cụ thể hoặc promote live |
| `ExecuteError` + `errorMessage` policy | Dùng syntax/identifier bị cấm | Sửa theo security checklist |
| `functionLogs` rỗng | Dùng `console.log` hoặc không gọi tham số `log` | Gọi `log(JSON-safe-value)` |
| Execute chạy code cũ | Omit `version` nên runtime chạy live version cũ | Truyền version mới khi test, sau đó promote |
| `OperationNotAllow` | Secret thiếu permission flag cho route/operation | Check route và flag `selfEnable`/`serverSelfEnable`/`adminSelfEnable` |
| Event callback không chạy | Đăng ký vào `handlers` hoặc sai registry prefix | Dùng `preHandlers`/`postHandlers`/`systemHandlers`/... đúng `eventName` |
| Script bị reject vì security policy | Dùng `fetch`, `require`, `process`, top-level side effect hoặc token cấm | Chỉ dùng wrapper inject sẵn và helper top-level không side effect |
| User không nhận realtime | `socket` chỉ gửi fire-and-forget cho session online | Dùng DB/push cho delivery bền hơn |
| Không biết mail/push đã deliver chưa | `mail`/`pushNotification` chỉ bridge sang service server | Ghi business log riêng nếu cần audit |
| Data chính thức bị lệch | Patch raw DB thay vì official API/wrapper | Ưu tiên `admin` hoặc repository wrapper |
