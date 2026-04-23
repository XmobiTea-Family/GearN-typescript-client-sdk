# GearN TypeScript Client SDK — AI Entry Guide

File này là entry point cho AI agent / code assistant khi làm việc với repo hoặc package.

Mục tiêu:

- Sinh code tích hợp SDK đúng từ đầu.
- Không cần đọc `src/` để hiểu public contract thông thường.
- Tránh suy diễn sai về route, secret, permission, auth/socket flow.

## 1. Reading order

AI phải đọc theo thứ tự này:

1. [docs/AI_CHEATSHEET.md](docs/AI_CHEATSHEET.md) — one-page reference, decision tree, mandatory pattern.
2. [docs/RULES.md](docs/RULES.md) — single source of truth: route, permission, self/other-self, socket, error handling, override params, anti-patterns.
3. [docs/ai-manifest.json](docs/ai-manifest.json) — machine-readable manifest (schemaVersion=3).
4. [docs/reference/API_INDEX.md](docs/reference/API_INDEX.md) — bảng 11 group × 945 method.
5. Guide đúng domain đang dùng trong [docs/guides/](docs/guides/).
6. DTO field qua [docs/reference/dto/](docs/reference/dto/) hoặc grep [docs/reference/DTO_INDEX.md](docs/reference/DTO_INDEX.md).
7. Public type trong `dist/**/*.d.ts` — fallback khi docs chưa cover.

Rule cứng:

- Không bắt đầu từ `src/` nếu mục tiêu là dùng public SDK.
- Không trích dẫn `src/` khi viết code tích hợp package publish.
- Nếu docs chưa nói rõ field / response shape, fall back `dist/*.d.ts`.
- Nếu AI/tooling ưu tiên machine-readable, dùng `docs/ai-manifest.json` trước rồi mới đọc markdown.
- Nếu `docs` + `dist` vẫn chưa đủ kết luận, hỏi lại con người hoặc ghi rõ giả định — không bịa behavior.

## 2. Rule nhanh (đã trích từ RULES.md)

- Package: `@xmobitea/gn-typescript-client`. Entrypoint: `GNNetwork`.
- `GNNetwork.init(settings)` 1 lần ở bootstrap; idempotent.
- Ưu tiên `async/await` và `*Async()` method.
- Check 2 tầng: `returnCode` trước, `errorCode` sau. `Ok === 1` cả 2.
- Route `client / server / admin` = trust boundary caller, KHÔNG phải target ownership.
- `DashboardApi` là ngoại lệ: public wrapper vẫn `RequestRole.Client`, backend resolve admin từ `authToken` sau `loginByAdminAccountAsync`.
- Socket auth là bước riêng sau HTTP login; SDK auto-auth nếu token đã cache.
- Realtime event KHÔNG tự chạy — phải subscribe handler trong [docs/reference/EVENTS.md](docs/reference/EVENTS.md).
- `MultiplayerApi` dùng HTTP (không phải socket).
- `CloudScript.editFunctionAsync` không sửa source code — đổi source = `addFunctionAsync` tạo version mới.

Toàn bộ rule chi tiết (phân biệt `SecretInvalid` / `OperationInvalid` / `OperationNotAllow`, self-semantics per domain, permission flag, socket re-auth, override params) → [docs/RULES.md](docs/RULES.md).

## 3. Chọn đúng API group

| Muốn làm gì | Guide | Reference |
|---|---|---|
| Player login/register/refresh token | [AUTHENTICATE](docs/guides/AUTHENTICATE.md) | [API_AUTHENTICATE](docs/reference/API_AUTHENTICATE.md) |
| Dashboard/analytics/secret/maintenance/admin login | [DASHBOARD](docs/guides/DASHBOARD.md) | [API_DASHBOARD](docs/reference/API_DASHBOARD.md) |
| Content config, file upload metadata, download token | [CONTENT](docs/guides/CONTENT.md) | [API_CONTENT](docs/reference/API_CONTENT.md) |
| Matchmaking ticket, queue statistics, match query | [MULTIPLAYER](docs/guides/MULTIPLAYER.md) | [API_MULTIPLAYER](docs/reference/API_MULTIPLAYER.md) |
| Store item, buy/present, receipt validation, store log | [STORE_INVENTORY](docs/guides/STORE_INVENTORY.md) | [API_STORE_INVENTORY](docs/reference/API_STORE_INVENTORY.md) |
| Inventory item metadata, statistics, owner, amount, logs | [INVENTORY](docs/guides/INVENTORY.md) | [API_INVENTORY](docs/reference/API_INVENTORY.md) |
| Group metadata/member/message/inventory/currency/statistics | [GROUP](docs/guides/GROUP.md) | [API_GROUP](docs/reference/API_GROUP.md) |
| Master player account/profile/identity | [MASTER_PLAYER](docs/guides/MASTER_PLAYER.md) | [API_MASTER_PLAYER](docs/reference/API_MASTER_PLAYER.md) |
| Game player gameplay/profile/friend/group/character relation | [GAME_PLAYER](docs/guides/GAME_PLAYER.md) | [API_GAME_PLAYER](docs/reference/API_GAME_PLAYER.md) |
| Character-level gameplay/social/profile | [CHARACTER_PLAYER](docs/guides/CHARACTER_PLAYER.md) | [API_CHARACTER_PLAYER](docs/reference/API_CHARACTER_PLAYER.md) |
| CloudScript publish/version/execute | [CLOUDSCRIPT](docs/guides/CLOUDSCRIPT.md) | [API_CLOUDSCRIPT](docs/reference/API_CLOUDSCRIPT.md) |
| Cocos Creator integration | [COCOS_CREATOR_INTEGRATION](docs/guides/COCOS_CREATOR_INTEGRATION.md) | — |

<a id="5-hiểu-self-và-other-self"></a>

## 4. Khi nào mới đọc `src/`

Chỉ đọc `src/` nếu mục tiêu là:

- Sửa chính SDK.
- Debug behavior nội bộ repo.
- Verify public contract mà docs + `dist` chưa mô tả đủ.

Nếu mục tiêu chỉ là tích hợp package, nguồn chính là: `AI_CHEATSHEET.md` → `RULES.md` → guide domain → `API_<GROUP>.md` → `dist/*.d.ts`.

## 5. Scenario end-to-end

15 scenario end-to-end (init, login, socket, realtime event, matchmaking, store, cloudscript, cleanup, ...): [docs/COOKBOOK.md](docs/COOKBOOK.md).
