# Reference: DataMember Decorators

Trang này mô tả cách dùng 6 decorator `@DataMember`, `@StringDataMember`, `@NumberDataMember`, `@BooleanDataMember`, `@GNHashtableDataMember`, `@GNArrayDataMember` khi tự viết DTO cho custom request/response, custom `OperationEvent`, hoặc handler implement `IServerEventHandler`.

Public imports:

```ts
import { BooleanDataMember, DataMember, GNArrayDataMember, GNHashtable, GNHashtableDataMember, NumberDataMember, ParameterCode, StringDataMember } from "@xmobitea/gearn-typescript-client-sdk";
```

Yêu cầu TypeScript:

- Bật `experimentalDecorators: true`.
- Bật `emitDecoratorMetadata: true`.
- Import package/runtime theo flow bình thường để `reflect-metadata` được load.

## Khi nào dùng

Dùng decorator khi SDK cần serialize/deserialize class typed:

- Request/response DTO custom.
- Payload class cho `OperationEvent` custom.
- Payload class trong `IServerEventHandler`.
- Nested object/array trong DTO.

Không dùng object literal rồi cast sang DTO nếu code cần đi qua `ConverterService`; pattern đó bỏ qua metadata constructor/decorator.

## Rule chung

Mỗi decorated field cần `code`, là key wire-level trong `GNHashtable`.

```ts
class RewardEvent {
    @StringDataMember({ code: "rewardId" })
    public rewardId: string;

    @NumberDataMember({ code: ParameterCode.Amount })
    public amount: number;
}
```

`code` phải khớp chính xác với key server gửi hoặc backend/API mong đợi:

- Key SDK có sẵn: dùng `ParameterCode.Amount`, `ParameterCode.Message`, `ParameterCode.Ts`.
- Key custom: dùng string literal như `"rewardId"`, `"sourceUserId"`.

## Common options

Áp dụng cho mọi decorator:

<!-- prettier-ignore -->
| Option | Type | Default | Ý nghĩa |
| --- | --- | --- | --- |
| `code` | `string` | bắt buộc | Key trong `GNHashtable` khi serialize/deserialize. |
| `isOptional` | `boolean` | `false` | Khi serialize, field `null`/missing có thể được bỏ qua thay vì gửi `null`. |
| `defaultValue` | theo field | `undefined` | Giá trị được fill khi deserialize mà wire payload thiếu field. |

## Chọn decorator nhanh

<!-- prettier-ignore -->
| TypeScript field | Decorator |
| --- | --- |
| `string` | `@StringDataMember({ code })` |
| `number` | `@NumberDataMember({ code })` |
| `boolean` | `@BooleanDataMember({ code })` |
| `any` hoặc raw mixed value | `@DataMember({ code })` |
| `GNHashtable` hoặc nested object payload | `@GNHashtableDataMember({ code })` |
| `Array<T>` | `@GNArrayDataMember({ code, elementCls: T })` |

## Ví dụ dùng đủ 6 decorator

Ví dụ này mô tả một custom event payload `playerAttributeUpdated` có đủ các dạng decorator public:

```ts
import { BooleanDataMember, DataMember, GNArrayDataMember, GNHashtable, GNHashtableDataMember, NumberDataMember, ParameterCode, StringDataMember } from "@xmobitea/gearn-typescript-client-sdk";

class AttributeMeta {
    @StringDataMember({ code: "source" })
    public source: string;

    @NumberDataMember({ code: ParameterCode.Ts })
    public ts: number;
}

class AttributeHistoryItem {
    @StringDataMember({ code: ParameterCode.Key })
    public key: string;

    @DataMember({ code: ParameterCode.Value })
    public value: any;
}

class PlayerAttributeUpdatedEvent {
    @StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10, mustNonNull: true })
    public userId: string;

    @NumberDataMember({ code: ParameterCode.Amount, minValue: 0, mustInt: true })
    public amount: number;

    @BooleanDataMember({ code: "isCritical", isOptional: true, defaultValue: false })
    public isCritical?: boolean;

    @DataMember({ code: ParameterCode.Value })
    public rawValue: any;

    @GNHashtableDataMember({ code: "meta", isOptional: true })
    public meta?: AttributeMeta;

    @GNHashtableDataMember({ code: "rawMeta", isOptional: true })
    public rawMeta?: GNHashtable;

    @GNArrayDataMember({ code: "history", elementCls: AttributeHistoryItem, isOptional: true, maxLength: 32 })
    public history?: Array<AttributeHistoryItem>;

    @GNArrayDataMember({ code: ParameterCode.Keys, elementCls: String, isOptional: true })
    public changedKeys?: Array<string>;
}
```

Mapping trong ví dụ:

<!-- prettier-ignore -->
| Decorator | Field |
| --- | --- |
| `@StringDataMember` | `userId`, `AttributeMeta.source`, `AttributeHistoryItem.key` |
| `@NumberDataMember` | `amount`, `AttributeMeta.ts` |
| `@BooleanDataMember` | `isCritical` |
| `@DataMember` | `rawValue`, `AttributeHistoryItem.value` |
| `@GNHashtableDataMember` | `meta`, `rawMeta` |
| `@GNArrayDataMember` | `history`, `changedKeys` |

## `@StringDataMember`

Dùng cho string field.

Options riêng:

<!-- prettier-ignore -->
| Option | Type | Default khi validation active | Ý nghĩa |
| --- | --- | --- | --- |
| `mustNonNull` | `boolean` | `false` | Không cho phép `null`. |
| `minLength` | `number` | `0` | Độ dài tối thiểu. |
| `maxLength` | `number` | `256` | Độ dài tối đa. |
| `defaultValue` | `string` | `undefined` | Fill khi thiếu field lúc deserialize. |

Ví dụ:

```ts
class LoginParam {
    @StringDataMember({ code: ParameterCode.Username, minLength: 6, maxLength: 32, mustNonNull: true })
    public username: string;

    @StringDataMember({ code: "displayLabel", isOptional: true })
    public displayLabel?: string;
}
```

## `@NumberDataMember`

Dùng cho number field.

Options riêng:

<!-- prettier-ignore -->
| Option | Type | Default khi validation active | Ý nghĩa |
| --- | --- | --- | --- |
| `mustInt` | `boolean` | `false` | Yêu cầu số nguyên. |
| `minValue` | `number` | `-Infinity` | Giá trị tối thiểu. |
| `maxValue` | `number` | `Infinity` | Giá trị tối đa. |
| `defaultValue` | `number` | `undefined` | Fill khi thiếu field lúc deserialize. |

Ví dụ:

```ts
class PagingParam {
    @NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
    public limit?: number;
}
```

## `@BooleanDataMember`

Dùng cho boolean field.

Options riêng:

<!-- prettier-ignore -->
| Option | Type | Ý nghĩa |
| --- | --- | --- |
| `defaultValue` | `boolean` | Fill khi thiếu field lúc deserialize. |

Ví dụ:

```ts
class IncludeParam {
    @BooleanDataMember({
        code: ParameterCode.DisplayName,
        isOptional: true,
        defaultValue: false,
    })
    public displayName?: boolean;
}
```

## `@DataMember`

Dùng cho raw value hoặc field mixed type (`any`). Đây là decorator ít ràng buộc nhất.

Ví dụ:

```ts
class DataItem {
    @StringDataMember({ code: ParameterCode.Key })
    public key: string;

    @DataMember({ code: ParameterCode.Value })
    public value: any;
}
```

Ưu tiên decorator cụ thể (`StringDataMember`, `NumberDataMember`, `BooleanDataMember`, `GNHashtableDataMember`, `GNArrayDataMember`) khi biết type. Dùng `DataMember` cho value có thể là primitive, `GNHashtable`, `GNArray`, hoặc object tùy backend.

## `@GNHashtableDataMember`

Dùng cho payload object/nested hashtable.

Options riêng:

<!-- prettier-ignore -->
| Option | Type | Default khi validation active | Ý nghĩa |
| --- | --- | --- | --- |
| `mustNonNull` | `boolean` | `false` | Không cho phép `null`. |
| `minLength` | `number` | `0` | Số key tối thiểu. |
| `maxLength` | `number` | `256` | Số key tối đa. |
| `defaultValue` | `GNHashtable` | `undefined` | Fill khi thiếu field lúc deserialize. |

Ví dụ dùng raw `GNHashtable`:

```ts
class EventEnvelope {
    @GNHashtableDataMember({ code: ParameterCode.EventParameters, isOptional: true, minLength: 0, maxLength: 128 })
    public eventParameters?: GNHashtable;
}
```

Ví dụ nested object typed:

```ts
class AvatarInfo {
    @StringDataMember({ code: ParameterCode.Value })
    public value: string;
}

class PlayerSummary {
    @StringDataMember({ code: ParameterCode.DisplayName, isOptional: true })
    public displayName?: string;

    @GNHashtableDataMember({ code: ParameterCode.Avatar, isOptional: true })
    public avatar?: AvatarInfo;
}
```

## `@GNArrayDataMember`

Dùng cho array/list. Với array object typed, luôn truyền `elementCls` để deserializer biết class phần tử.

Options riêng:

<!-- prettier-ignore -->
| Option | Type | Default khi validation active | Ý nghĩa |
| --- | --- | --- | --- |
| `elementCls` | constructor | theo reflection của field nếu bỏ qua | Class phần tử; nên truyền rõ ràng cho array. |
| `mustNonNull` | `boolean` | `false` | Không cho phép `null`. |
| `minLength` | `number` | `0` | Số phần tử tối thiểu. |
| `maxLength` | `number` | `256` | Số phần tử tối đa. |
| `defaultValue` | `GNArray` | `undefined` | Fill khi thiếu field lúc deserialize. |

Array primitive:

```ts
class KeysParam {
    @GNArrayDataMember({ code: ParameterCode.Keys, isOptional: true, elementCls: String })
    public keys?: Array<string>;
}
```

Array object typed:

```ts
class CurrencyItem {
    @StringDataMember({ code: ParameterCode.Key })
    public key: string;

    @NumberDataMember({ code: ParameterCode.Value })
    public value: number;
}

class CurrencyUpdateEvent {
    @GNArrayDataMember({ code: ParameterCode.PlayerCurrencies, elementCls: CurrencyItem, minLength: 1, maxLength: 32, mustNonNull: true })
    public playerCurrencies: Array<CurrencyItem>;
}
```

## Custom `OperationEvent` typed payload

Server/CloudScript gửi:

```ts
const operationEvent = new OperationEvent("cloudScriptRewardGranted", GNHashtable.builder().add("rewardId", "daily-login").add("amount", 100).add("reason", "dailyLogin").add("ts", Date.now()).build());
```

Client DTO:

```ts
class CloudScriptRewardGrantedEvent {
    @StringDataMember({ code: "rewardId" })
    public rewardId: string;

    @NumberDataMember({ code: ParameterCode.Amount })
    public amount: number;

    @StringDataMember({ code: ParameterCode.Reason })
    public reason: string;

    @NumberDataMember({ code: ParameterCode.Ts })
    public ts: number;
}
```

Client handler:

```ts
public handle(operationEvent: OperationEvent): void {
    const payload = ConverterService.deserializeObject(
        operationEvent.getParameters(),
        CloudScriptRewardGrantedEvent
    );

    // use payload.rewardId / payload.amount / payload.reason / payload.ts
}
```

## Pitfalls

- Decorator `code` sai key thì field deserialize ra `undefined` hoặc `defaultValue`.
- Quên `elementCls` với `@GNArrayDataMember` chứa object typed thì array có thể không deserialize đúng class phần tử.
- Dùng object literal cast sang DTO không tạo metadata mới; hãy tạo class có decorator và truyền class đó vào `ConverterService`.
- Thiếu `emitDecoratorMetadata` thường gây lỗi bắt đầu bằng `Cannot get gn reflected data type`.
