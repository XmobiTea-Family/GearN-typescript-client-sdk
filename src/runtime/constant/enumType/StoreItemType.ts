/**
 * Discriminator for store catalog entries that controls whether the
 * item can be re-purchased.
 *
 * Distinct from {@link ItemType} — `ItemType` describes how the
 * **inventory ledger** stacks instances, whereas `StoreItemType`
 * controls what the **storefront** allows the player to buy.
 *
 * Configured at store-catalog setup time and surfaced on
 * `StoreInventoryModels.StoreItemCatalog.storeItemType`.
 */
export enum StoreItemType {
	/**
	 * One-time purchase — the storefront refuses subsequent buy
	 * attempts. Use for permanent unlocks (no-ads, premium pass,
	 * cosmetic packs).
	 */
	NonConsumable = 1,

	/**
	 * Re-purchasable — players may buy and consume the item
	 * repeatedly. Use for currency packs, energy refills,
	 * single-use boosters.
	 */
	Consumable = 2,

}
