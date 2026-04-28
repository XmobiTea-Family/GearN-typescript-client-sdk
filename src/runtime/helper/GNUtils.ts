import { GenericModels } from "./../entity/models/GenericModels";

/**
 * Convenience converters that turn the array-shaped collections
 * returned by the GearN API into `Map<string, T>` lookups keyed by
 * the most common business identifier.
 *
 * The SDK transports always deliver collections as arrays so the
 * wire format stays JSON / MsgPack friendly. Application code
 * usually wants O(1) lookup by id; wrapping each call site in a
 * small `for` loop is repetitive, so this helper centralises the
 * conversion.
 *
 * Each method returns `null` when the input is `null` so the call
 * site can chain it after a typed response without a separate
 * null-check (`GNUtils.toFriendDictionary(response.getResponseData()?.playerFriends)`).
 */
export class GNUtils {
	/**
	 * Indexes a {@link GenericModels.DataItem} array by its
	 * `key` field.
	 *
	 * Useful for player-data / custom-data responses where the
	 * application normally needs to look up entries by key. Later
	 * duplicates with the same key win, mirroring `Map.set`'s
	 * default behaviour.
	 *
	 * @param datas Source array, or `null`.
	 * @returns A keyed map, or `null` when `datas` is `null`.
	 */
	public static toDatasDictionary(datas: Array<GenericModels.DataItem>) {
		if (datas == null) return null;

		let answer: Map<string, GenericModels.DataItem> = new Map();

		for (let i = 0; i < datas.length; i++) {
			let data = datas[i];

			answer.set(data.key, data);
		}

		return answer;
	}

	/**
	 * Indexes a {@link GenericModels.TagItem} array by its `key`
	 * field. Used for player / character tag responses.
	 */
	public static toTagsDictionary(tags: Array<GenericModels.TagItem>) {
		if (tags == null) return null;

		let answer: Map<string, GenericModels.TagItem> = new Map();

		for (let i = 0; i < tags.length; i++) {
			let tag = tags[i];

			answer.set(tag.key, tag);
		}

		return answer;
	}

	/**
	 * Indexes a {@link GenericModels.CurrencyItem} array by its
	 * `key` field. Used for player / group currency responses.
	 */
	public static toCurrenciesDictionary(currencies: Array<GenericModels.CurrencyItem>) {
		if (currencies == null) return null;

		let answer: Map<string, GenericModels.CurrencyItem> = new Map();

		for (let i = 0; i < currencies.length; i++) {
			let currency = currencies[i];

			answer.set(currency.key, currency);
		}

		return answer;
	}

	/**
	 * Indexes a {@link GenericModels.StatisticsItem} array by its
	 * `key` field. Used for player / group statistic responses.
	 */
	public static toStatisticsDictionary(statistics: Array<GenericModels.StatisticsItem>) {
		if (statistics == null) return null;

		let answer: Map<string, GenericModels.StatisticsItem> = new Map();

		for (let i = 0; i < statistics.length; i++) {
			let statistic = statistics[i];

			answer.set(statistic.key, statistic);
		}

		return answer;
	}

	/**
	 * Indexes a {@link GenericModels.InventoryItem} array by its
	 * `itemId` field — the unique inventory ledger entry id, not
	 * the catalog identifier. To bucket by catalog id instead,
	 * write a custom loop using the `classId` field.
	 */
	public static toInventoriesDictionary(inventories: Array<GenericModels.InventoryItem>) {
		if (inventories == null) return null;

		let answer: Map<string, GenericModels.InventoryItem> = new Map();

		for (let i = 0; i < inventories.length; i++) {
			let inventory = inventories[i];

			answer.set(inventory.itemId, inventory);
		}

		return answer;
	}

	/**
	 * Indexes a {@link GenericModels.GroupItem} array by its
	 * `groupId` field. Used for player-group lookup responses.
	 */
	public static toGroupDictionary(groups: Array<GenericModels.GroupItem>) {
		if (groups == null) return null;

		let answer: Map<string, GenericModels.GroupItem> = new Map();

		for (let i = 0; i < groups.length; i++) {
			let group = groups[i];

			answer.set(group.groupId, group);
		}

		return answer;
	}

	/**
	 * Indexes a {@link GenericModels.FriendItem} array by its
	 * `friendId` field. Used for player-friend lookup responses
	 * and to drive social UIs that need O(1) presence checks.
	 */
	public static toFriendDictionary(friends: Array<GenericModels.FriendItem>) {
		if (friends == null) return null;

		let answer: Map<string, GenericModels.FriendItem> = new Map();

		for (let i = 0; i < friends.length; i++) {
			let friend = friends[i];

			answer.set(friend.friendId, friend);
		}

		return answer;
	}

}
