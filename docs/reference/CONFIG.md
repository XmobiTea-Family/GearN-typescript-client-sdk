# Reference: Config (`GNServerSettingsOptions`)

Schema đầy đủ của object truyền vào `GNNetwork.init(settings)`.

```ts
import { GNNetwork, GNServerSettings, GNServerSettingsOptions, MessageType, LogType } from "@xmobitea/gn-typescript-client";

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

	clientSecretKey: "<client-secret>",
	serverSecretKey: "",
	adminSecretKey: "",

	logType: LogType.All,
} satisfies GNServerSettingsOptions);

GNNetwork.init(settings);
```

## Rule cứng

- `GNNetwork.init(settings)` là **idempotent**: gọi 1 lần ở bootstrap, các lần sau bị bỏ qua (không reset config).
- `GNServerSettings.config(options)` thay thế toàn bộ snapshot — không merge partial. Nếu muốn đổi từng field, dùng setter như `setServerAddress`.
- Không commit production secret key vào client bundle. Giữ `serverSecretKey` / `adminSecretKey` rỗng ở môi trường client.

---

## Bảng field

| Field | Type | Required | Default | Unit | Notes |
|-------|------|----------|---------|------|-------|
| `serverAddress` | `string` | yes | `"127.0.0.1"` | host | Host name hoặc IP public của GearN server |
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
| `adminSecretKey` | `string` | yes | — (nên `""` ở client) | — | Auto gắn cho route `RequestRole.Admin` |
| `serverSecretKey` | `string` | yes | — (nên `""` ở client) | — | Auto gắn cho route `RequestRole.Server` |
| `clientSecretKey` | `string` | yes | — | — | Auto gắn cho route `RequestRole.Client` và Dashboard transport default |
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

`GNServerSettings` expose setter cho mọi field. Sau `init`, nếu cần đổi ở runtime (ít khi nên làm):

```ts
settings.setServerAddress("prod-api.example.com");
settings.setLogType(LogType.Error);
```

Lưu ý: đổi host/port sau khi socket đã connect **không** tự reconnect; phải `disconnectSocket()` rồi `connectSocket()` lại.

---

## Reverse proxy flag

`GNServerSettings` có property nội bộ `useReverseProxy` (default `false`):

```ts
settings.setUseReverseProxy(true);
```

Khi bật, low-level HTTP helper có thể bỏ qua việc tự thêm request path prefix vì proxy đã route. Chỉ bật khi infra yêu cầu — default giữ nguyên `false`.

---

## Liên kết

- Secret key và route permission: xem [README.MD § route-and-permission-rules](../../README.MD#route-and-permission-rules)
- Socket auth flow: xem [README.MD § socket-auth-flow](../../README.MD#socket-auth-flow) và [EVENTS.md](EVENTS.md)
- `MessageType` / `LogType` enum: [ENUMS.md](ENUMS.md#messagetype)
