# Operation base classes

Reference nhanh cho các base class operation wrapper thường xuất hiện trong `Extends` của DTO reference:

- `CustomOperationRequest`
- `CustomOperationRequestAbstract<TRequestData>`
- `CustomOperationResponse`
- `CustomOperationResponseAbstract<TResponseData>`

Các class này là **wrapper cấp thấp** quanh `OperationRequest` / `OperationResponse`. Khi tích hợp SDK bình thường, ưu tiên gọi public API qua `GNNetwork.<group>.<method>Async(requestData, ...)`; chỉ cần đọc file này khi bạn:

- gặp dòng `Extends: CustomOperationRequestAbstract<...>` hoặc `Extends: CustomOperationResponseAbstract<...>` trong [DTO_INDEX.md](/docs/reference/DTO_INDEX.md);
- tự viết custom operation/request wrapper;
- debug behavior nội bộ SDK hoặc CloudScript helper.

## Request wrapper

`CustomOperationRequestAbstract<TRequestData>` kế thừa `CustomOperationRequest` và thêm typed payload:

```ts
public requestData: TRequestData;
protected requestDataCls: Constructor<TRequestData>;
```

Contract:

- Constructor nhận `(requestData: TRequestData, timeout: number)`; không tự tạo DTO rỗng.
- Class operation cụ thể phải set `requestDataCls = <Models>.<RequestDataClass>` trong constructor để `ConverterService.serializeObject()` đọc metadata decorator.
- `build()` tạo `new OperationRequest(operationCode, operationTimeout)` rồi serialize `requestData` bằng `ConverterService.serializeObject(this.requestData, this.requestDataCls)` vào parameters.
- `operationCode`, `requestType`, `role` đến từ class operation cụ thể sinh sẵn trong từng API group.
- `requestData` public để code cấp thấp có thể inspect/mutate trước khi gọi `build()`.

Ví dụ đọc DTO reference:

```text
LoginByAccountOperationRequest
Extends: CustomOperationRequestAbstract<AuthenticateModels.LoginByAccountRequestData>
```

Nghĩa là operation request này chứa `requestData` kiểu `AuthenticateModels.LoginByAccountRequestData`. Khi gọi API cấp cao, bạn **không cần** tự tạo operation wrapper:

```ts
const request = new AuthenticateModels.LoginByAccountRequestData();
request.username = username;
request.password = password;

const res = await GNNetwork.authenticate.loginByAccountAsync(request);
```

Nếu thật sự dùng low-level helper, wrapper concrete có constructor typed:

```ts
const opRequest = new AuthenticateRequestModels.LoginByAccountOperationRequest(request, timeout);
const rawRequest = opRequest.build();
```

Chỉ dùng `OperationRequest` / `CustomOperationRequestAbstract<T>` trực tiếp khi đang viết hoặc debug lớp SDK cấp thấp.

## Response wrapper

`CustomOperationResponse` chứa metadata chung của mọi response:

```ts
res.operationCode;
res.parameters;
res.returnCode;
res.debugMessage;
res.errorCode;
res.invalidMembers;
res.hasReturnCodeError();
res.toString();
```

`CustomOperationResponseAbstract<TResponseData>` kế thừa `CustomOperationResponse` và thêm typed payload:

```ts
public responseData: TResponseData;
protected responseDataCls: Constructor<TResponseData>;
```

Contract:

- Class response cụ thể set `responseDataCls = <Models>.<ResponseDataClass>` trong constructor.
- `setupOperationResponse(operationResponse)` gọi base để copy `operationCode`, `returnCode`, `debugMessage`, `parameters`, `invalidMembers`.
- Chỉ khi `returnCode === ReturnCode.Ok`, SDK mới đọc `errorCode` từ parameters.
- Chỉ khi `returnCode === ReturnCode.Ok`, `CustomOperationResponseAbstract<TResponseData>` mới deserialize parameters bằng `ConverterService.deserializeObject<TResponseData>(this.parameters, this.responseDataCls)` sang `responseData`.
- Vì vậy `errorCode` và `responseData` chỉ đáng tin sau khi đã check `returnCode`.

Pattern bắt buộc:

```ts
if (res.returnCode !== ReturnCode.Ok) return;
if (res.errorCode !== ErrorCode.Ok) return;

useResult(res.responseData);
```

Có thể dùng helper method tương đương cho tầng 1:

```ts
if (res.hasReturnCodeError()) return;
```

## Khi dùng base response

Helper xử lý lỗi chung nên nhận `CustomOperationResponse`, không nhận generic abstract:

```ts
function ensureOk(res: CustomOperationResponse): void {
    if (res.hasReturnCodeError()) return;
    if (res.errorCode !== ErrorCode.Ok) return;
}
```

Dùng `CustomOperationResponseAbstract<TResponseData>` hoặc response class cụ thể khi cần đọc `responseData` typed:

```ts
const data: AuthenticateModels.AuthenticateResponseData = res.responseData;
```

Rule này cũng áp dụng cho CloudScript TypeScript helpers: helper generic nhận `CustomOperationResponse`; chỉ dùng `CustomOperationResponseAbstract<T>` khi cần `responseData` typed cụ thể.

## Anti-patterns

- Không bỏ qua check `returnCode` / `hasReturnCodeError()` rồi đọc thẳng `responseData`.
- Không dùng `OperationResponse` raw cho helper public nếu response đã là `CustomOperationResponse`.
- Không dùng `CustomOperationResponseAbstract<T>` cho helper generic chỉ cần check lỗi.
- Không truyền object literal cast sang `TRequestData`; tạo DTO class public để decorator metadata tồn tại đúng.
- Không suy ra route/permission từ base class generic; route đến từ namespace gọi (`client`, `.server`, `.admin`) và operation concrete.
- Không sửa `requestData` sau khi đã gọi `build()` và kỳ vọng `OperationRequest` đã build tự cập nhật.

## Source fallback

Nếu docs chưa đủ, public implementation nằm ở:

- `src/runtime/entity/request/CustomOperationRequest.ts`
- `src/runtime/entity/response/CustomOperationResponse.ts`

Với integration code, ưu tiên `dist/index.d.ts` thay vì bám `src/`.