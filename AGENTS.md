# GearN TypeScript Client SDK — AI Entry Guide

Entry point cho AI agent / code assistant khi làm việc với repo hoặc package.

Mục tiêu:

- Sinh code tích hợp SDK đúng từ đầu.
- Không cần đọc `src/` để hiểu public contract thông thường.
- Tránh suy diễn sai về route, secret, permission, auth/socket flow.

## 1. Reading order

1. [docs/AI_CHEATSHEET.md](docs/AI_CHEATSHEET.md) — one-page reference, decision tree, mandatory pattern.
2. [docs/RULES.md](docs/RULES.md) — **canonical** cho mọi rule cross-cutting.
3. [docs/ai-manifest.json](docs/ai-manifest.json) — machine-readable manifest (schemaVersion=3).
4. [docs/reference/API_INDEX.md](docs/reference/API_INDEX.md) — bảng method theo 11 API group.
5. Guide đúng domain trong [docs/guides/](docs/guides/).
6. DTO field qua [docs/reference/dto/](docs/reference/dto/) hoặc grep [docs/reference/DTO_INDEX.md](docs/reference/DTO_INDEX.md).
7. Public type trong `dist/**/*.d.ts` — fallback khi docs chưa cover.

Bảng chọn API group theo yêu cầu: xem [docs/AI_CHEATSHEET.md § 2](docs/AI_CHEATSHEET.md#2-decision-tree-tôi-cần-làm-gì). Rule router/permission/socket: xem [docs/RULES.md](docs/RULES.md).

## 2. Khi nào được đọc `src/`

Chỉ đọc `src/` khi:

- Sửa chính SDK.
- Debug behavior nội bộ repo.
- Verify public contract mà docs + `dist` chưa mô tả đủ.

Với mục tiêu tích hợp package: **không** bắt đầu từ `src/`, không trích dẫn `src/` trong integration code. Nguồn chính: `AI_CHEATSHEET.md` → `RULES.md` → guide domain → `API_<GROUP>.md` → `dist/*.d.ts`.

Nếu `docs` + `dist` vẫn chưa đủ kết luận, hỏi lại con người hoặc ghi rõ giả định — không bịa behavior.

## 3. Scenario end-to-end

15 scenario end-to-end (init, login, socket, realtime event, matchmaking, store, cloudscript, cleanup, ...): [docs/COOKBOOK.md](docs/COOKBOOK.md).
