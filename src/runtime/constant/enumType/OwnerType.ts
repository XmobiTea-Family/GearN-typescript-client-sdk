/**
 * Discriminator for the entity that owns a given resource (an
 * inventory row, a stored data item, a currency balance, ...).
 *
 * GearN keeps its data model normalised around a top-level
 * "owner" concept so the same resource type can attach to a
 * master player, a single character, a group, a store,
 * etc. The wire payload always pairs an `OwnerType` with the
 * owner's id.
 *
 * Surfaced through `GenericModels` resource entries (currency,
 * statistics, custom data) and `InventoryModels.InventoryItem`.
 */
export enum OwnerType {
	/**
	 * Master-player account — the top-level user record (one per
	 * GearN account). Use for cross-character resources like
	 * account-level wallets or profile metadata.
	 */
	MasterPlayer = 1,

	/**
	 * Game-player entity — the per-game profile attached to a
	 * master player. Use for resources scoped to a single game
	 * but shared across that game's characters.
	 */
	GamePlayer = 2,

	/**
	 * Character-player entity — the per-character profile.
	 * Use for resources isolated to a single in-game character.
	 */
	CharacterPlayer = 3,

	/**
	 * Group entity — guild / clan. Use for shared group
	 * inventories, group currencies, group statistics.
	 */
	Group = 4,

	/**
	 * Inventory item — an inventory row may itself own nested
	 * resources (e.g. socketed gems on an equipment item).
	 */
	Inventory = 5,

	/**
	 * Store-inventory entity — a store catalog or its
	 * configuration row. Used by audit / analytics flows that
	 * track resources tied to a specific storefront.
	 */
	StoreInventory = 6,

}
