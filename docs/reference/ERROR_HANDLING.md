# Reference: Error Handling

Mọi response từ GearN backend đi qua 2 tầng kiểm tra. AI consumer phải check đủ cả hai, đúng thứ tự.

## Pattern bắt buộc

```ts
const res = await GNNetwork.authenticate.loginByAccountAsync({ username, password });

// 1. Kiểm tra returnCode (transport/gateway)
if (res.returnCode !== ReturnCode.Ok) {
	handleTransportFailure(res);
	return;
}

// 2. Kiểm tra errorCode (business domain)
if (res.errorCode !== ErrorCode.Ok) {
	handleDomainFailure(res);
	return;
}

// 3. Happy path: trust typed payload
useResult(res.responseData);
```

Typed response (trả từ mọi `*Async()` và callback path) expose field `public`:

- `res.returnCode: number` — tầng 1
- `res.errorCode: number` — tầng 2 (chỉ set khi `returnCode === Ok`)
- `res.invalidMembers: InvalidMember[]` — khi `returnCode === InvalidRequestParameters`
- `res.debugMessage: string` — backend debug message
- `res.responseData: T` — typed payload, chỉ set khi `returnCode === Ok`

**Rule cứng:**

- Không skip tầng 1 để đọc thẳng `errorCode`. Nếu `returnCode !== Ok`, `errorCode` và typed parameters **không đáng tin**.
- Không giả định success là `0`. Success ở cả hai tầng là `1` (`ReturnCode.Ok === 1`, `ErrorCode.Ok === 1`).
- Không hardcode số. Luôn so sánh bằng symbol `ReturnCode.*` / `ErrorCode.*`.
- `Async` method vẫn return response object (không throw) — reject chỉ xảy ra khi transport layer lỗi thực sự (network down, serialization fail).

---

## Tầng 1: `ReturnCode`

Kiểm tra bằng `response.returnCode`. Bảng đầy đủ và giá trị xem [ENUMS.md § ReturnCode](ENUMS.md#returncode).

| ReturnCode | Khi nào gặp | Recommended action |
|------------|-------------|--------------------|
| `Ok` (1) | Happy path | Sang tầng 2 check `errorCode` |
| `UnknownError` (0) | Backend fail nhưng không map code cụ thể | Log + show lỗi chung; không retry tự động |
| `OperationTimeout` (-1) | Request timeout (SDK hoặc backend) | Retry với backoff nếu operation idempotent; báo user nếu không |
| `OperationNotAllow` (-2) | Permission rule của secret key không cho chạy operation ở target context | Sai route (`client/server/admin`) hoặc secret thiếu `selfEnable`/`otherSelfEnable`/`serverSelfEnable`/`adminSelfEnable`. Không retry — fix config |
| `InternalServerError` (-3) | Backend crash internal | Log + show lỗi chung; có thể retry 1 lần rồi escalate |
| `OperationInvalid` (-4) | Operation code không tồn tại / sai với request type + role | Sai namespace: kiểm tra đang gọi đúng `GNNetwork.<domain>.<method>`. Không retry |
| `InvalidRequestParameters` (-5) | Request shape / field invalid | Đọc `response.getInvalidMembers()`; fix field rồi gửi lại |
| `OperationNotAuthorized` (-6) | Caller không auth với role/target resource | Kiểm tra `authToken` hợp lệ; re-login hoặc refresh token |
| `MaxCCUReject` (-7) | Vượt concurrent user limit | Backoff + retry; escalate lên ops nếu recurring |
| `MaxRequestReject` (-8) | Vượt rate limit | Exponential backoff retry; xem lại client usage pattern |
| `MaxSizeRequestReject` (-9) | Payload vượt max size | Không retry; giảm size request (paginate, split) |
| `SecretInvalid` (-10) | Secret key sai / thiếu / không khớp game | Fix cấu hình `GNServerSettingsOptions`, không retry |

### Khi gặp `OperationNotAllow`

Kiểm tra theo thứ tự:
1. Đang dùng đúng route `client/server/admin` chưa? Route là trust boundary của **caller**, không phải cách phân loại target.
2. Secret key active có quyền operation trong domain này không?
3. Operation rơi vào nhánh `self` hay `other self`? (Xem [AGENTS.md § 5](../../AGENTS.md#5-hiểu-self-và-other-self))
4. Nếu route `server`/`admin`: secret key có `serverSelfEnable`/`adminSelfEnable` enable chưa?

### Khi gặp `InvalidRequestParameters`

Response expose thêm `res.invalidMembers: InvalidMember[]`:

```ts
interface InvalidMember {
	code: string;                   // tên field (ParameterCode)
	invalidMemberType: InvalidMemberType;
}
```

`InvalidMemberType` xem [ENUMS.md § InvalidMemberType](ENUMS.md#invalidmembertype). Ví dụ parse:

```ts
if (res.returnCode === ReturnCode.InvalidRequestParameters) {
	for (const im of res.invalidMembers ?? []) {
		console.warn(`field ${im.code} invalid: type=${im.invalidMemberType}`);
	}
}
```

---

## Tầng 2: `ErrorCode`

Chỉ check sau khi `returnCode === ReturnCode.Ok`. Lấy qua `response.errorCode` (field public trên typed response class).

Bảng đầy đủ 50 giá trị xem [ENUMS.md § ErrorCode](ENUMS.md#errorcode). Pattern xử lý chung:

| ErrorCode family | Pattern |
|------------------|---------|
| `Ok` | Dùng data trong response |
| `*NotFound` (2, 7, 9–19, 22, 24, 29, 30, 31, 39, 42, 44) | Entity không tồn tại — thường hiện message user-friendly, không retry |
| `*Exists` / `*HadBeen*` (4, 23, 25, 36, 49, 50) | Conflict trạng thái — hiện UX "đã tồn tại" / "đã mua", không retry |
| `*Invalid` (5, 6, 34, 35, 47, 48) | Input hoặc external data invalid — user sửa lại rồi thử lại |
| `AccountPasswordWrong` (3), `PlayerBan` (38) | Auth fail nghiệp vụ — show rõ cho user, không retry cùng input |
| `NotEnoughCurrency` (8), `CanNotBuyThisStoreItem` (32) | Điều kiện business không đủ — UX hướng dẫn user nạp/thử item khác |
| `ExternalLinked*` (27, 28) | Identity conflict — UX hướng dẫn unlink/choose account |
| `MatchmakingPlayerHasJoinedOtherTicket` (43), `MatchmakingTicketAlreadyCompleted` (40) | State transition không hợp lệ — poll state mới rồi retry logic |
| `ExecuteError` (46) | CloudScript throw — đọc payload execute response để debug |

---

## `Return` vs `Error` — quyết định nhanh

| Tình huống | Layer | Xử lý |
|------------|-------|-------|
| User offline, request không đến server | — (reject Promise / transport exception) | Retry với backoff |
| SSL/cert fail | — (reject Promise) | Báo ops; không retry tự động |
| Timeout | `ReturnCode.OperationTimeout` | Retry nếu idempotent |
| Sai secret key | `ReturnCode.SecretInvalid` | Fix config |
| Thiếu permission | `ReturnCode.OperationNotAllow` / `OperationNotAuthorized` | Fix route + secret permission |
| Field invalid | `ReturnCode.InvalidRequestParameters` | Parse `invalidMembers` |
| Username sai | `ErrorCode.AccountNotFound` | UX login fail |
| Password sai | `ErrorCode.AccountPasswordWrong` | UX login fail |
| Thiếu tiền | `ErrorCode.NotEnoughCurrency` | UX nạp tiền |

---

## Promise vs Callback

Cả 2 pattern **không throw** trên business/transport error:

```ts
// Callback
GNNetwork.authenticate.loginByAccount(data, (res) => {
	if (res.returnCode !== ReturnCode.Ok) return;
	if (res.errorCode !== ErrorCode.Ok) return;
	useResult(res.responseData);
});

// Async
try {
	const res = await GNNetwork.authenticate.loginByAccountAsync(data);
	if (res.returnCode !== ReturnCode.Ok) return;
	if (res.errorCode !== ErrorCode.Ok) return;
	useResult(res.responseData);
} catch (e) {
	// chỉ đến đây khi transport layer throw (network exception, serialization fail)
}
```

Mặc định ưu tiên `*Async`.

---

## Liên kết

- Enum đầy đủ: [ENUMS.md](ENUMS.md)
- Route / permission: [README.MD § route-and-permission-rules](../../README.MD#route-and-permission-rules)
- Self / other self: [AGENTS.md § 5](../../AGENTS.md#5-hiểu-self-và-other-self)
