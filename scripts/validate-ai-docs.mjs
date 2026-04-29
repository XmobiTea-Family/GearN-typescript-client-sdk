import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const docFiles = [];
function walk(dir, extensions) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const filePath = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(filePath, extensions);
    else if (extensions.some((ext) => entry.name.toLowerCase().endsWith(ext))) docFiles.push(filePath);
  }
}

walk(path.join(root, "docs"), [".md", ".txt", ".json"]);
for (const file of ["AGENTS.md", "README.MD", "llms.txt"]) {
  docFiles.push(path.join(root, file));
}

function fail(message, items) {
  console.error(message);
  for (const item of items.slice(0, 80)) console.error(item);
  if (items.length > 80) console.error(`... ${items.length - 80} more`);
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(path.join(root, "docs/ai-manifest.json"), "utf8"));

const manifestPermissionIssues = [];
if (manifest.permissionRules?.authoritativeDoc !== "docs/reference/PERMISSION_RULES.md") {
  manifestPermissionIssues.push("permissionRules.authoritativeDoc must point to docs/reference/PERMISSION_RULES.md");
}
if (manifest.docs?.reference?.permissionRules !== "docs/reference/PERMISSION_RULES.md") {
  manifestPermissionIssues.push("docs.reference.permissionRules must point to docs/reference/PERMISSION_RULES.md");
}
for (const group of manifest.apiGroups ?? []) {
  if ("permissionRuleUrl" in group) {
    manifestPermissionIssues.push(`${group.name}: use permissionRuleDoc instead of permissionRuleUrl`);
  }
  if (!group.permissionRuleDoc) {
    manifestPermissionIssues.push(`${group.name}: missing permissionRuleDoc`);
  } else if (!fs.existsSync(path.join(root, group.permissionRuleDoc))) {
    manifestPermissionIssues.push(`${group.name}: missing ${group.permissionRuleDoc}`);
  }
}
if (manifestPermissionIssues.length) fail("Manifest permission reference issues:", manifestPermissionIssues);

const manifestPathIssues = [];
const manifestDocPaths = [
  ...(manifest.docs?.readingOrderForAi ?? []),
  ...Object.values(manifest.docs?.entryPoints ?? {}),
  ...Object.values(manifest.docs?.reference ?? {}),
  manifest.docs?.cookbook,
  manifest.docs?.guidesDirectory,
  manifest.permissionRules?.authoritativeDoc,
  manifest.enums?.docPath,
  manifest.events?.docPath,
  manifest.configSchema?.docPath,
].filter(Boolean);
for (const relPath of manifestDocPaths) {
  if (!fs.existsSync(path.join(root, relPath))) {
    manifestPathIssues.push(relPath);
  }
}
if (manifestPathIssues.length) fail("Manifest paths do not exist:", [...new Set(manifestPathIssues)]);

const missingLinks = [];
const brokenAnchors = [];
const markdownLinkPattern = /\[[^\]]*]\(([^)]+)\)/g;
for (const file of docFiles.filter((x) => /\.(md|txt)$/i.test(x))) {
  const text = fs.readFileSync(file, "utf8");
  for (const match of text.matchAll(markdownLinkPattern)) {
    let target = match[1].trim();
    if (!target || target.startsWith("#")) continue;
    if (/^(https?:|mailto:)/.test(target)) continue;
    if (target.startsWith("<") && target.endsWith(">")) target = target.slice(1, -1);
    const filePart = target.split("#")[0];
    if (!filePart) continue;
    if (!fs.existsSync(path.resolve(path.dirname(file), filePart))) {
      missingLinks.push(`${path.relative(root, file)} -> ${target}`);
    }
  }
}
if (missingLinks.length) fail("Missing local markdown links:", missingLinks);

function githubSlug(text) {
  return text
    .trim()
    .replace(/<[^>]+>/g, "")
    .replace(/`([^`]*)`/g, "$1")
    .toLowerCase()
    .replace(/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~→←↑↓↔–—]/g, "")
    .replace(/\s/g, "-");
}

const anchorCache = new Map();
function getAnchors(file) {
  if (anchorCache.has(file)) return anchorCache.get(file);
  const anchors = new Set();
  const seen = new Map();
  const text = fs.readFileSync(file, "utf8");
  for (const match of text.matchAll(/^#{1,6}\s+(.+)$/gm)) {
    const base = githubSlug(match[1]);
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    anchors.add(count === 0 ? base : `${base}-${count}`);
  }
  anchorCache.set(file, anchors);
  return anchors;
}

for (const file of docFiles.filter((x) => /\.(md|txt)$/i.test(x))) {
  const text = fs.readFileSync(file, "utf8");
  for (const match of text.matchAll(markdownLinkPattern)) {
    let target = match[1].trim();
    if (!target || /^(https?:|mailto:)/.test(target)) continue;
    if (target.startsWith("<") && target.endsWith(">")) target = target.slice(1, -1);
    const hashIndex = target.indexOf("#");
    if (hashIndex < 0) continue;
    const filePart = target.slice(0, hashIndex);
    const hash = target.slice(hashIndex + 1);
    if (!hash) continue;
    const targetFile = path.resolve(path.dirname(file), filePart || path.basename(file));
    if (!/\.(md|txt)$/i.test(targetFile) || !fs.existsSync(targetFile)) continue;
    let anchor = hash;
    try {
      anchor = decodeURIComponent(hash);
    } catch {
      // Keep the raw hash; the missing-anchor report below is clearer than a URI error.
    }
    if (!getAnchors(targetFile).has(anchor)) {
      brokenAnchors.push(`${path.relative(root, file)} -> ${target}`);
    }
  }
}
if (brokenAnchors.length) fail("Broken local markdown anchors:", brokenAnchors);

const stalePatterns = [
  /LogType\.None/,
  /OperationTimedOut/,
  /AuthenticateFailed/,
  /PasswordIncorrect/,
  /InvalidOperationParameter/,
  /TokenVerifyFailed/,
  /AccountAlreadyLinked/,
  /PermissionDenied/,
  /GroupFull/,
  /AlreadyJoined/,
  /GroupClosed/,
  /StoreItemOutOfStock/,
  /CloudScriptFunctionNotFound/,
  /FriendStatus\.(Accepted|Pending|Removed)/,
  /GroupStatus\.(Joined|Left|Kicked)/,
  /payload\.friends/,
  /addGroupMessageAsync/,
  /getInventoryItemListAsync/,
  /addInventoryItemAsync/,
  /getStoreItemListAsync/,
  /getMasterPlayerAsync/,
  /validateReceiptAsync/,
  /googleLoginType/,
  /ticketStatus/,
  /playerAttributes/,
  /functionParameter\b/,
  /new GNServerSettings\(\{\}\)/,
  /new GNServerSettings\(\{/,
  /other self/,
  /self \/ other self/,
  /self\/other self/,
  /15 scenario/,
  /15 case/,
  /15 scenarios/,
  /enviroment/,
  /DTO_INDEX\.md#/,
  /Chon Dung API Group/,
  /permissionRuleUrl/,
  /permissionRules#/,
  /Schema publish/,
  /Event publish/,
  /Enum publish/,
  /theo public d\.ts hiện tại không có `groupId`/,
  /as any/,
  /TODO/,
  /Async\(\s*\{/,
  /\sas\s+[A-Za-z0-9_.]+RequestData/,
  /onUpdate\s*=\s*null/,
  /setNewAuthenticateStatus.*login\/refresh/,
  /GNNetwork\.dashboard(?!\.)[^\n]*GNNetwork\.dashboard(?!\.)/,
  /\]\([^)]+\.md\)\.-\s/,
  /~\d/,
];

const staleMatches = [];
for (const file of docFiles) {
  const text = fs.readFileSync(file, "utf8");
  for (const pattern of stalePatterns) {
    if (pattern.test(text)) staleMatches.push(`${path.relative(root, file)}: ${pattern}`);
  }
}
if (staleMatches.length) fail("Stale or known-bad docs patterns:", staleMatches);

const groupMap = {
  Authenticate: "authenticate",
  Dashboard: "dashboard",
  Content: "content",
  Multiplayer: "multiplayer",
  StoreInventory: "storeInventory",
  Inventory: "inventory",
  Group: "group",
  MasterPlayer: "masterPlayer",
  GamePlayer: "gamePlayer",
  CharacterPlayer: "characterPlayer",
  CloudScript: "cloudScript",
};

const allowedCalls = new Set();
const apiMethodCounts = {};
const apiDir = path.join(root, "dist/runtime");
for (const entry of fs.readdirSync(apiDir)) {
  const apiMatch = entry.match(/^GNNetwork(.+)Api\.d\.ts$/);
  if (!apiMatch) continue;
  const group = groupMap[apiMatch[1]];
  if (!group) continue;
  const text = fs.readFileSync(path.join(apiDir, entry), "utf8");
  const classPattern = /export declare class (\w+) \{([\s\S]*?)(?=\nexport declare class |$)/g;
  for (const classMatch of text.matchAll(classPattern)) {
    const className = classMatch[1];
    const body = classMatch[2];
    let namespace = `GNNetwork.${group}`;
    if (className.startsWith("Server")) namespace += ".server";
    else if (className.startsWith("Admin")) namespace += ".admin";
    for (const methodMatch of body.matchAll(/\n\s{4}([A-Za-z0-9_]+Async)\(/g)) {
      allowedCalls.add(`${namespace}.${methodMatch[1]}`);
      apiMethodCounts[group] = (apiMethodCounts[group] ?? 0) + 1;
    }
  }
}

const apiGroupIssues = [];
for (const group of manifest.apiGroups ?? []) {
  for (const key of ["guideDoc", "referenceDoc", "dtoDoc", "apiDts", "permissionRuleDoc"]) {
    if (!group[key] || !fs.existsSync(path.join(root, group[key]))) {
      apiGroupIssues.push(`${group.name}: missing ${key} ${group[key] ?? ""}`.trim());
    }
  }
  for (const modelPath of group.modelDts ?? []) {
    if (!fs.existsSync(path.join(root, modelPath))) {
      apiGroupIssues.push(`${group.name}: missing modelDts ${modelPath}`);
    }
  }
  for (const handlerPath of group.realtimeHandlers ?? []) {
    if (!fs.existsSync(path.join(root, handlerPath))) {
      apiGroupIssues.push(`${group.name}: missing realtimeHandler ${handlerPath}`);
    }
  }
  const apiMatch = path.basename(group.apiDts ?? "").match(/^GNNetwork(.+)Api\.d\.ts$/);
  const runtimeGroup = apiMatch ? groupMap[apiMatch[1]] : undefined;
  if (!runtimeGroup) {
    apiGroupIssues.push(`${group.name}: cannot map apiDts ${group.apiDts}`);
  } else if (group.methodCount !== apiMethodCounts[runtimeGroup]) {
    apiGroupIssues.push(`${group.name}: methodCount=${group.methodCount}, dist=${apiMethodCounts[runtimeGroup] ?? 0}`);
  }
}
if ((manifest.apiGroups ?? []).length !== Object.keys(groupMap).length) {
  apiGroupIssues.push(`apiGroups length=${(manifest.apiGroups ?? []).length}, expected=${Object.keys(groupMap).length}`);
}
if (apiGroupIssues.length) fail("Manifest API group issues:", apiGroupIssues);

const invalidCalls = [];
const callPattern = /GNNetwork\.([A-Za-z][A-Za-z0-9]*)(?:\.(server|admin))?\.([A-Za-z][A-Za-z0-9_]*Async)\s*\(/g;
for (const file of docFiles) {
  const text = fs.readFileSync(file, "utf8");
  for (const match of text.matchAll(callPattern)) {
    const call = `GNNetwork.${match[1]}${match[2] ? `.${match[2]}` : ""}.${match[3]}`;
    if (!allowedCalls.has(call)) invalidCalls.push(`${path.relative(root, file)}: ${call}`);
  }
}
if (invalidCalls.length) fail("Invalid GNNetwork async calls:", [...new Set(invalidCalls)]);

function escapeRegex(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const indexText = fs.readFileSync(path.join(root, "dist/index.d.ts"), "utf8");
const exportedSymbols = new Set();
for (const match of indexText.matchAll(/export \{([^}]+)\};/g)) {
  for (const item of match[1].split(",")) {
    exportedSymbols.add(item.trim().split(/\s+as\s+/)[0]);
  }
}

const publicImports = new Map();
const publicConstantImportNames = new Set();
for (const match of indexText.matchAll(/import \{([^}]+)\} from "([^"]+)";/g)) {
  const importPath = match[2];
  const isConstantSurface =
    importPath.startsWith("./runtime/constant/") ||
    importPath === "./runtime/config/GNServerSettings" ||
    importPath === "./runtime/logger/GNDebug";
  const dtsPath = path.join(root, "dist", `${importPath.replace(/^\.\//, "")}.d.ts`);
  for (const item of match[1].split(",")) {
    const symbol = item.trim().split(/\s+as\s+/)[0];
    if (!exportedSymbols.has(symbol)) continue;
    publicImports.set(symbol, dtsPath);
    if (isConstantSurface) publicConstantImportNames.add(symbol);
  }
}

const allowedEnums = {};
const realEnumNames = new Set();
for (const [name, filePath] of publicImports) {
  const text = fs.readFileSync(filePath, "utf8");
  const enumPatternForName = new RegExp(`export declare enum ${escapeRegex(name)}\\s*\\{([\\s\\S]*?)\\n\\}`, "m");
  const enumMatch = text.match(enumPatternForName);
  const classPatternForName = new RegExp(`export declare class ${escapeRegex(name)}\\s*\\{([\\s\\S]*?)(?=\\n\\}|\\nexport declare)`, "m");
  const classMatch = text.match(classPatternForName);
  const values = new Set();
  if (enumMatch) {
    realEnumNames.add(name);
    for (const valueMatch of enumMatch[1].matchAll(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*(?:=|,)/gm)) {
      values.add(valueMatch[1]);
    }
  }
  if (classMatch && publicConstantImportNames.has(name)) {
    for (const valueMatch of classMatch[1].matchAll(/static readonly\s+([A-Za-z_][A-Za-z0-9_]*)\s*:/g)) {
      values.add(valueMatch[1]);
    }
  }
  if (values.size) allowedEnums[name] = values;
}

const enumReferenceNames = Object.keys(allowedEnums).sort((a, b) => b.length - a.length);
const invalidEnums = [];
const enumPattern = new RegExp(`\\b(${enumReferenceNames.map(escapeRegex).join("|")})\\.([A-Za-z_][A-Za-z0-9_]*)(?!\\.ts)`, "g");
for (const file of docFiles) {
  const text = fs.readFileSync(file, "utf8");
  for (const match of text.matchAll(enumPattern)) {
    if (match[2] === "d") continue;
    if (!allowedEnums[match[1]].has(match[2])) {
      invalidEnums.push(`${path.relative(root, file)}: ${match[1]}.${match[2]}`);
    }
  }
}
if (invalidEnums.length) fail("Invalid enum references:", [...new Set(invalidEnums)]);

const unknownEnumLikeNames = [];
const enumishPattern = /\b([A-Z][A-Za-z0-9_]*(?:Status|Type|Code|Role|Mode|Platform|State|DataItem))\.([A-Za-z_][A-Za-z0-9_]*)(?!\.ts)/g;
for (const file of docFiles) {
  const text = fs.readFileSync(file, "utf8");
  for (const match of text.matchAll(enumishPattern)) {
    if (match[2] === "d") continue;
    if (!allowedEnums[match[1]]) {
      unknownEnumLikeNames.push(`${path.relative(root, file)}: ${match[1]}.${match[2]}`);
    }
  }
}
if (unknownEnumLikeNames.length) fail("Unknown enum-like references:", [...new Set(unknownEnumLikeNames)]);

const manifestEnumNames = new Set((manifest.enums?.list ?? []).map((item) => item.name));
const undocumentedEnums = [...realEnumNames].filter((name) => !manifestEnumNames.has(name));
if (undocumentedEnums.length) fail("Public enum missing from manifest enums list:", undocumentedEnums);

console.log("AI docs validation ok");
