/**
 * Write-permission policy for a configured data-item key.
 *
 * The GearN backend lets each game declare its own custom-data
 * keys (player data, statistics, currencies, tags). For each key
 * the catalog can specify whether the value can be overwritten by
 * subsequent normal-flow writes or whether it is treated as
 * write-once / set-once.
 *
 * Surfaced in catalog metadata responses; the runtime enforces
 * the rule when the matching `set*` operation runs.
 */
export enum PermissionDataItem {
    /**
     * Once written, the value cannot be replaced through normal
     * write flows. Useful for first-creation timestamps,
     * commitment tokens, or values that should only be reset by
     * privileged admin operations.
     */
    ReadOnly = 1,

    /**
     * Standard read/write semantics — subsequent writes replace
     * the previous value.
     */
    CanOverride = 2,

}
