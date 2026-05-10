# Reference: Config (`GNServerSettingsOptions`)

Schema đầy đủ của object truyền vào `GNNetwork.init(settings)`.

```ts
import { GNNetwork, GNServerSettings, GNServerSettingsOptions, MessageType, LogType } from "@xmobitea/gearn-typescript-client-sdk";

const settings = new GNServerSettings();
settings.config({
    serverAddress: "api.example.com",
    serverPort: -1,
    serverSocketPort: -1,
    useSsl: true,
    useSocket: true,
    useHttp: true,

    defaultTimeoutInSeconds: 20,
    messageType: MessageType.MsgPack,
    sendRate: 20,
    reconnectDelay: 5000,
    pingInterval: 20000,
    pingTimeout: 20000,

    secretKey: "<secret-key>",
    gameId: "<game-id>",

    logType: LogType.All,
} satisfies GNServerSettingsOptions);

GNNetwork.init(settings);
```

## Rule cứng

- `GNNetwork.init(settings)` là **idempotent**: gọi 1 lần ở bootstrap, các lần sau bị bỏ qua (không reset config).
- `GNServerSettings.config(options)` thay thế toàn bộ snapshot — không merge partial. Nếu muốn đổi từng field, dùng setter như `setServerAddress`.
- Không commit `secretKey` chứa `permission rules` có permission `admin` hoặc `server` vào production.

---

## Bảng field

<!-- prettier-ignore -->
| Field | Type | Required | Default | Unit | Notes |
| --- | --- | --- | --- | --- | --- |
| `serverAddress` | `string` | yes | `"127.0.0.1"` | host | Host name hoặc IP public của GearN Server |
| `serverPort` | `number` | yes | `2202` | port | HTTP port. Set `-1` khi proxy đã expose default port trực tiếp |
| `serverSocketPort` | `number` | yes | `2901` | port | Socket port. Set `-1` khi proxy đã expose default port trực tiếp |
| `useSsl` | `boolean` | yes | `false` | — | `true` để build HTTPS/WSS URL |
| `useSocket` | `boolean` | yes | `true` | — | Bật socket transport và realtime feature |
| `useHttp` | `boolean` | yes | `true` | — | Bật HTTP transport (mọi public API wrapper đều dựa vào) |
| `defaultTimeoutInSeconds` | `number` | yes | `20` | giây | Timeout mặc định cho request không override `timeout` |
| `messageType` | `MessageType` | yes | `MessageType.MsgPack` | enum | Payload format. Browser HTTP với MsgPack tự fallback JSON |
| `sendRate` | `number` | yes | `20` | msg/giây | Max send rate request bởi transport loop |
| `reconnectDelay` | `number` | yes | `5000` | ms | Reconnect delay của socket client |
| `pingInterval` | `number` | yes | `20000` | ms | Ping interval socket client |
| `pingTimeout` | `number` | yes | `20000` | ms | Timeout phát hiện socket stale |
| `secretKey` | `string` | yes | — | — | Auto gắn cho mọi route nếu không dùng overrideSecretKey |
| `gameId` | `string` | yes | — | — | Game/application id khớp với `secretKey`; dùng để chọn đúng game context trên GearN Server |
| `logType` | `LogType` | yes | `LogType.All` | enum | Verbosity `GNDebug` |

Default column phản ánh giá trị khởi tạo trong class `GNServerSettings` trước khi gọi `config()`. `config()` yêu cầu cung cấp đầy đủ mọi field (strict replace).

---

## URL building behavior

SDK tự build base URL từ `serverAddress` + port + `useSsl`:

- `getHttpUrl()`:
    - `serverPort >= 0` → `{http|https}://{serverAddress}:{serverPort}`
    - `serverPort < 0` → `{http|https}://{serverAddress}` (reverse proxy mode)
- `getSocketUrl()`: same pattern dùng `serverSocketPort`.

Set `serverPort: -1` hoặc `serverSocketPort: -1` khi proxy (nginx, ALB, Cloudflare) đã terminate port 80/443.

---

## Setter runtime (khi cần đổi sau init)

`GNServerSettings` expose setter cho mọi field. Sau `init`, SDK vẫn giữ reference tới cùng `settings` object, nên một số request mới có thể thấy giá trị setter mới. Đây không phải cách đổi toàn bộ app config an toàn; route/socket đang mở không tự reset.

```ts
settings.setServerAddress("prod-api.example.com");
settings.setLogType(LogType.Error);
```

Lưu ý: gọi lại `GNNetwork.init()` để đổi config sẽ bị ignore. Đổi host/port sau khi socket đã connect **không** tự reconnect; phải `disconnectSocket()` rồi `connectSocket()` lại.

---

## Reverse proxy flag

`GNServerSettings` có property nội bộ `useReverseProxy` (default `false`):

```ts
settings.setUseReverseProxy(true);
```

Khi bật, low-level HTTP helper có thể bỏ qua việc tự thêm request path prefix vì proxy đã route. Chỉ bật khi infra yêu cầu — default giữ nguyên `false`.

---

## Liên kết

- Secret key và route permission: xem [RULES.md § 3](/docs/RULES.md#3-route--trust-boundary-của-caller)
- Socket auth flow: xem [RULES.md § 7](/docs/RULES.md#7-auth--socket-flow) và [EVENTS.md](/docs/reference/EVENTS.md)
- `MessageType` / `LogType` enum: [ENUMS.md](/docs/reference/ENUMS.md#messagetype)
