# Reference: GNArray & GNHashtable

`GNArray` và `GNHashtable` là 2 container dữ liệu động public của SDK TypeScript.
SDK dùng chúng để biểu diễn payload dạng array/object khi gửi request custom, nhận response raw, truyền `customTags`, tham số `OperationEvent`, hoặc field DTO có kiểu `GNArray` / `GNHashtable`.

Public imports:

```typescript
import {
    ConverterService,
    GNArray,
    GNHashtable,
    GNNetwork,
    OperationEvent,
} from "@xmobitea/gearn-typescript-client-sdk";
```

## Khi nào dùng

Dùng `GNHashtable` khi payload có key string:

- `customTags` cho API call.
- `functionParameters` cho CloudScript.
- `OperationEvent` parameters.
- Raw object field trong DTO custom.
- Dữ liệu nested không cần class DTO riêng.

Dùng `GNArray` khi payload là danh sách:

- List key/value, list id, list item.
- Nested array trong `GNHashtable`.
- Raw array field trong DTO custom.

Nếu payload có schema cố định và được serialize/deserialize qua `ConverterService`, ưu tiên viết DTO với DataMember decorator. Xem [DATAMEMBER.md](/docs/reference/DATAMEMBER.md).

## Tạo nhanh

Public TypeScript SDK expose static builder `GNHashtable.builder()` và `GNArray.builder()`.

```typescript
const tags = GNHashtable.builder()
    .add("traceId", "trace-001")
    .add("build", "qa")
    .add("abBucket", "A")
    .build();

const rewards = GNArray.builder()
    .add("coin")
    .add("gem")
    .add("ticket")
    .build();
```

Có thể tạo trực tiếp rồi `add`:

```typescript
const payload = new GNHashtable();
payload.add("source", "daily_popup");
payload.add("amount", 100);
payload.add("isBonus", true);

const ids = new GNArray();
ids.add("item_001");
ids.add("item_002");
payload.add("itemIds", ids);
```

## Nested payload

`GNHashtable.add()` và `GNArray.add()` tự normalize value:

- `null` / `undefined` -> `null`.
- `string` / `number` / `boolean` -> giữ nguyên.
- `GNArray` / `GNHashtable` -> giữ nguyên.
- Plain `Array` -> wrap thành `GNArray`.
- Plain object -> wrap thành `GNHashtable`.
- Kiểu khác như `function` / `symbol` -> `null`.

Nếu dùng `Builder`, conversion diễn ra khi gọi `.build()` vì `build()` tạo container thật rồi gọi `add()`.
Với object, chỉ own enumerable string keys từ `Object.keys(...)` được copy; symbol key, non-enumerable property và prototype-chain entry bị bỏ qua.

```typescript
const metadata = {
    source: "quest",
    questId: "quest_daily_01",
};

const payload = GNHashtable.builder()
    .add("userId", userId)
    .add("amount", 50)
    .add("metadata", metadata)
    .add("items", ["coin", "gem"])
    .build();

const meta = payload.getGNHashtable("metadata");
const items = payload.getGNArray("items");
```

## Đọc dữ liệu từ GNHashtable

`GNHashtable` đọc theo key string và có getter typed cho primitive, object, `GNArray`, `GNHashtable`.
Getter TypeScript chỉ cast value đã lưu, không convert kiểu như `System.Convert` bên C#.

<!-- prettier-ignore -->
| Method | Return | Ghi chú |
| --- | --- | --- |
| `getString(key, defaultValue?)` | `string` | Trả value đã lưu hoặc default khi key thiếu / value `null`. Không ép kiểu. |
| `getNumber(key, defaultValue?)` | `number` | Trả value đã lưu hoặc default khi key thiếu / value `null`. Không ép kiểu. |
| `getBoolean(key, defaultValue?)` | `boolean` | Trả value đã lưu hoặc default khi key thiếu / value `null`. Không ép kiểu. |
| `getObject(key, defaultValue?)` | `object` | Raw value đã lưu trong container. Runtime có thể là primitive, container hoặc object. |
| `getGNArray(key, defaultValue?)` | `GNArray` | Lấy nested array. Chỉ gọi khi biết value đúng kiểu container. |
| `getGNHashtable(key, defaultValue?)` | `GNHashtable` | Lấy nested object. Chỉ gọi khi biết value đúng kiểu container. |

Ví dụ:

```typescript
const source = payload.getString("source", "unknown");
const amount = payload.getNumber("amount", 0);
const isBonus = payload.getBoolean("isBonus", false);

const meta = payload.getGNHashtable("metadata");
const questId = meta?.getString("questId") ?? null;

const items = payload.getGNArray("items", new GNArray());
const itemIds = items.toData() as string[];
```

Với payload động từ server hoặc CloudScript, nếu không chắc kiểu dữ liệu, kiểm tra bằng `containsKey()` và `getObject()` trước khi dùng typed getter:

```typescript
if (payload.containsKey("amount")) {
    const rawAmount = payload.getObject("amount") as unknown;
    if (typeof rawAmount === "number") {
        const amountValue = payload.getNumber("amount", 0);
    }
}
```

## Đọc dữ liệu từ GNArray

`GNArray` đọc theo index `number` và có bộ getter tương tự `GNHashtable`.
Getter cũng chỉ cast value đã lưu, không ép kiểu.

<!-- prettier-ignore -->
| Method | Return | Ghi chú |
| --- | --- | --- |
| `getString(index, defaultValue?)` | `string` | Trả value đã lưu hoặc default khi slot `null`; index ngoài range trả `null`. |
| `getNumber(index, defaultValue?)` | `number` | Trả value đã lưu hoặc default khi slot `null`; index ngoài range trả `null`. |
| `getBoolean(index, defaultValue?)` | `boolean` | Trả value đã lưu hoặc default khi slot `null`; index ngoài range trả `null`. |
| `getObject(index, defaultValue?)` | `object` | Raw value đã lưu trong container. Runtime có thể là primitive, container hoặc object. |
| `getGNArray(index, defaultValue?)` | `GNArray` | Lấy nested array. Chỉ gọi khi biết value đúng kiểu container. |
| `getGNHashtable(index, defaultValue?)` | `GNHashtable` | Lấy nested object. Chỉ gọi khi biết value đúng kiểu container. |

Ví dụ:

```typescript
const arr = GNArray.builder()
    .add("coin")
    .add(100)
    .add(true)
    .build();

const itemId = arr.getString(0);
const amount = arr.getNumber(1);
const active = arr.getBoolean(2);
```

Index âm hoặc vượt quá `count() - 1` trả về `null`.

## Collection API

<!-- prettier-ignore -->
| Type | Method | Ý nghĩa |
| --- | --- | --- |
| `GNHashtable` | `add(key: string, value: any)` | Thêm hoặc update key. |
| `GNHashtable` | `containsKey(key: string)` | Check key tồn tại. |
| `GNHashtable` | `remove(key: string)` | Xóa key, trả về `true` nếu xóa được. |
| `GNHashtable` | `clear()` | Xóa toàn bộ key. |
| `GNHashtable` | `count()` | Số key hiện có. |
| `GNHashtable` | `toData()` | Convert về plain object. |
| `GNArray` | `add(value: any)` | Append value. |
| `GNArray` | `remove(index: number)` | Xóa index, trả về `false` nếu index không hợp lệ. |
| `GNArray` | `clear()` | Xóa toàn bộ phần tử. |
| `GNArray` | `count()` | Số phần tử hiện có. |
| `GNArray` | `toData()` | Convert về plain array. |

TypeScript SDK không expose public `keys()`, `values()` hoặc indexer. Khi cần duyệt, dùng `toData()`:

```typescript
for (const [key, value] of Object.entries(payload.toData())) {
    console.log(`${key} =`, value);
}

const rewardValues = rewards.toData() as string[];
for (let i = 0; i < rewards.count(); i++) {
    console.log(rewardValues[i]);
}
```

## toData() và toString()

`toData()` convert container về dữ liệu JavaScript plain:

- `GNHashtable` -> plain object `{ [key: string]: any }`.
- `GNArray` -> plain array `any[]`.
- Nested `GNHashtable` / `GNArray` cũng được convert đệ quy.

```typescript
const rawPayload = payload.toData();
console.log(JSON.stringify(rawPayload));
```

`toString()` trả về `JSON.stringify(...)` của backing store nội bộ để debug/log nhanh.
Nested `GNHashtable` / `GNArray` có thể hiện theo shape nội bộ, vì vậy không dùng output này như wire contract thay cho `toData()` hoặc serializer của SDK.

```typescript
console.log(payload.toString());
```

## Convert DTO và GNData

Với payload có schema cố định, nên dùng DTO + DataMember decorator rồi để `ConverterService` convert qua lại với `GNHashtable` / `GNArray`.
`ConverterService.init()` được gọi trong `GNNetwork.init()`; nếu dùng converter trong unit test độc lập, init SDK hoặc gọi `ConverterService.init()` trước.

```typescript
class MyDto {
    // Decorate fields bằng @StringDataMember / @NumberDataMember / ...
}

const table = ConverterService.serializeObject(dto, MyDto);
const dto2 = ConverterService.deserializeObject(table, MyDto) as MyDto;

const array = ConverterService.serializeArray(dtoList as unknown as [], MyDto);
const dtoList2 = ConverterService.deserializeArray(array, MyDto) as MyDto[];
```

Rule chọn nhanh:

<!-- prettier-ignore -->
| Nhu cầu | Nên dùng |
| --- | --- |
| Payload ngắn, dynamic, ít field | `GNHashtable` / `GNArray` trực tiếp |
| Request/response có schema ổn định | DTO + DataMember decorator |
| Nested object/list có type rõ | DTO nested + `@GNHashtableDataMember` / `@GNArrayDataMember` |
| Debug/log nhanh | `toString()` |
| Gửi qua serializer ngoài SDK | `toData()` |

## Ví dụ: customTags

`customTags` là `GNHashtable` gắn theo API call để trace/log/route phía backend. Không đưa secret, auth token, PII nhạy cảm hoặc object quá sâu vào `customTags`.

```typescript
const customTags = GNHashtable.builder()
    .add("traceId", crypto.randomUUID().replaceAll("-", ""))
    .add("build", appVersion)
    .add("source", "daily_reward")
    .build();

const response = await GNNetwork.cloudScript.executeFunctionAsync(
    request,
    undefined, // overrideAuthToken
    undefined, // overrideSecretKey
    undefined, // overrideGameId
    customTags, // customTags
);
```

## Ví dụ: OperationEvent parameters

```typescript
const parameters = GNHashtable.builder()
    .add("message", "hello")
    .add("ts", GNNetwork.getServerTimestamp())
    .build();

const evt = new OperationEvent("chatMessage", parameters);
```

Khi nhận event:

```typescript
GNNetwork.setOnEventHandler((evt) => {
    const parameters = evt.getParameters();
    const message = parameters?.getString("message") ?? null;
    const ts = parameters?.getNumber("ts") ?? 0;
});
```

## Lưu ý quan trọng

- Key của `GNHashtable` là `string`; plain object chỉ copy own enumerable string keys.
- Getter numeric/bool/string trong TypeScript không convert kiểu; nếu server trả `"100"` thì `getNumber()` không tự parse thành `100`.
- `getGNArray()` / `getGNHashtable()` cast trực tiếp; chỉ gọi khi biết value đúng kiểu container.
- `GNArray.get*()` với index ngoài range trả `null`, không trả `defaultValue`.
- `remove(index)` của `GNArray` trả `false` khi index không hợp lệ; không throw.
- Dùng `GNHashtable.builder()` / `GNArray.builder()` theo public TypeScript SDK. `new GNHashtableBuilder()` và `new GNArrayBuilder()` cũng được export, nhưng builder static là style khuyến nghị trong docs.
- Với payload có schema ổn định, DTO + DataMember decorator dễ kiểm soát hơn raw `GNHashtable`.
