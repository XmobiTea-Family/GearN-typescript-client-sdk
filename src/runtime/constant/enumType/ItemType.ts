/**
 * Stacking discriminator for inventory item catalog entries.
 *
 * Decides how the GearN backend tracks ownership when a player
 * acquires multiple units of the same catalog item — as separate
 * ledger rows ({@link NonStackable}) or as a single row with an
 * integer amount ({@link Stackable}).
 *
 * Configured at catalog setup time and surfaced on
 * `InventoryModels.ItemMetadata.itemType`. The SDK does not
 * convert between the two on the fly — choose the value that
 * matches the gameplay semantics of the item.
 */
export enum ItemType {
	/**
	 * Each acquisition produces a unique inventory row with its
	 * own item id. Use for items that need to track per-instance
	 * state (durability, custom name, equipped slot, ...).
	 */
	NonStackable = 1,

	/**
	 * Repeated acquisitions accumulate into a single inventory
	 * row whose `amount` field carries the count. Use for
	 * fungible currencies-as-items, consumables, materials.
	 */
	Stackable = 2,

}
