import { GenericModels } from "./../entity/models/GenericModels";

export class GNUtils {
    public static toDatasDictionary(datas: Array<GenericModels.DataItem>) {
        if (datas == null) return null;

        let answer: Map<string, GenericModels.DataItem> = new Map();

        for (let i = 0; i < datas.length; i++) {
            let data = datas[i];

            answer.set(data.key, data);
        }

        return answer;
    }

    public static toTagsDictionary(tags: Array<GenericModels.TagItem>) {
        if (tags == null) return null;

        let answer: Map<string, GenericModels.TagItem> = new Map();

        for (let i = 0; i < tags.length; i++) {
            let tag = tags[i];

            answer.set(tag.key, tag);
        }

        return answer;
    }

    public static toCurrenciesDictionary(currencies: Array<GenericModels.CurrencyItem>) {
        if (currencies == null) return null;

        let answer: Map<string, GenericModels.CurrencyItem> = new Map();

        for (let i = 0; i < currencies.length; i++) {
            let currency = currencies[i];

            answer.set(currency.key, currency);
        }

        return answer;
    }

    public static toStatisticsDictionary(statistics: Array<GenericModels.StatisticsItem>) {
        if (statistics == null) return null;

        let answer: Map<string, GenericModels.StatisticsItem> = new Map();

        for (let i = 0; i < statistics.length; i++) {
            let statistic = statistics[i];

            answer.set(statistic.key, statistic);
        }

        return answer;
    }

    public static toInventoriesDictionary(inventories: Array<GenericModels.InventoryItem>) {
        if (inventories == null) return null;

        let answer: Map<string, GenericModels.InventoryItem> = new Map();

        for (let i = 0; i < inventories.length; i++) {
            let inventory = inventories[i];

            answer.set(inventory.itemId, inventory);
        }

        return answer;
    }

    public static toGroupDictionary(groups: Array<GenericModels.GroupItem>) {
        if (groups == null) return null;

        let answer: Map<string, GenericModels.GroupItem> = new Map();

        for (let i = 0; i < groups.length; i++) {
            let group = groups[i];

            answer.set(group.groupId, group);
        }

        return answer;
    }

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
