/**
 * Provenance of a store-issued item that ends up in a player's
 * inventory.
 *
 * Recorded on `StoreInventoryModels.PurchaseLog.receiveType` so the
 * application can distinguish soft-currency in-game purchases
 * from hard-currency platform receipts. Hard-currency entries
 * also carry the matching receipt validation data on the same log
 * row.
 */
export enum StoreReceiveType {
	/**
	 * Standard in-game purchase paid for with player currencies
	 * (gold, gems, soft currency, ...). No platform receipt.
	 */
	Buy = 1,

	/**
	 * Free gift / reward issued by gameplay or by an admin (login
	 * bonus, mail attachment, support compensation).
	 */
	Present = 2,

	/**
	 * Platform purchase verified through Apple App Store receipt
	 * validation.
	 */
	AppleAppStore = 3,

	/**
	 * Platform purchase verified through Facebook Store receipt
	 * validation.
	 */
	FacebookStore = 4,

	/**
	 * Platform purchase verified through Google Play receipt
	 * validation.
	 */
	GooglePlayStore = 5,

}
