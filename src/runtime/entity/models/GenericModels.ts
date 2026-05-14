import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";

/**
 * Cross-domain DTOs shared by every API namespace in the SDK.
 *
 * The classes in this namespace are deliberately agnostic of
 * any single domain — they describe small, reusable building
 * blocks (avatar entries, key-value pairs, currency entries,
 * statistics entries, friend / group / member references,
 * inventory references, ban entries, ...) that appear inside
 * the larger request / response DTOs of the per-domain models.
 *
 * The lookup helpers on {@link GNUtils} consume the array
 * forms directly:
 * - `toFriendDictionary(friends)` → `Map<string, FriendItem>`
 * - `toGroupDictionary(groups)` → `Map<string, GroupItem>`
 * - `toCurrenciesDictionary(currencies)` →
 *   `Map<string, CurrencyItem>`
 * - `toStatisticsDictionary(stats)` →
 *   `Map<string, StatisticsItem>`
 * - and similar for tags / data items / inventory items.
 *
 * All field decorators here use canonical wire keys from
 * {@link ParameterCode} so the same shape decodes consistently
 * across every domain that embeds these items.
 */
export namespace GenericModels {
    /**
     * Represents a generic avatar payload.
     */
    export class AvatarItem {
        /** Avatar type identifier. User custom this type enum. */
        @NumberDataMember({ code: ParameterCode.Type })
        public type: number;

        /** Avatar value, typically a URL, file id, or provider-specific string. */
        @StringDataMember({ code: ParameterCode.Value })
        public value: string;

    }

    /**
     * Represents a key-value tag entry.
     */
    export class TagItem {
        /** Tag key used to identify the metadata entry. */
        @StringDataMember({ code: ParameterCode.Key })
        public key: string;

        /** Tag value associated with `key`. */
        @StringDataMember({ code: ParameterCode.Value })
        public value: string;

    }

    /**
     * Represents a ban state entry returned by player-auth or player-profile flows.
     */
    export class BanItem {
        /** Expiration timestamp of the current ban state. */
        @NumberDataMember({ code: ParameterCode.TsExpire })
        public tsExpire: number;

        /** Human-readable ban reason when provided by the backend. */
        @StringDataMember({ code: ParameterCode.Reason })
        public reason: string;

    }

    /**
     * Represents an arbitrary key-value data entry.
     */
    export class DataItem {
        /** Data entry key used to identify the payload. */
        @StringDataMember({ code: ParameterCode.Key })
        public key: string;

        /** Raw value returned by the backend. This may be a primitive, `GNHashtable`, `GNArray`, or plain object-like data. */
        @DataMember({ code: ParameterCode.Value })
        public value: any;

    }

    /**
     * Represents one currency entry.
     */
    export class CurrencyItem {
        /** Currency key such as the configured currency code or logical name. */
        @StringDataMember({ code: ParameterCode.Key })
        public key: string;

        /** Numeric balance of the currency identified by `key`. */
        @NumberDataMember({ code: ParameterCode.Value })
        public value: number;

    }

    /**
     * Represents one statistics entry.
     */
    export class StatisticsItem {
        /** Statistic key such as the configured metric name. */
        @StringDataMember({ code: ParameterCode.Key })
        public key: string;

        /** Numeric value of the statistic identified by `key`. */
        @NumberDataMember({ code: ParameterCode.Value })
        public value: number;

    }

    /**
     * Represents a lightweight relation item pointing to a character.
     */
    export class CharacterItem {
        /** Character identifier of the related character entity. */
        @StringDataMember({ code: ParameterCode.CharacterId })
        public characterId: string;

        /** Catalog identifier associated with the related character. */
        @StringDataMember({ code: ParameterCode.CatalogId })
        public catalogId: string;

    }

    /**
     * Represents the current owner of an entity such as an inventory item.
     */
    export class OwnerItem {
        /** Owner type. Map this value with the public `OwnerType` enum. */
        @NumberDataMember({ code: ParameterCode.Type })
        public type: number;

        /** Owner id paired with `type`. */
        @StringDataMember({ code: ParameterCode.Id })
        public id: string;

    }

    /**
     * Represents soft-remove metadata for an entity.
     */
    export class RemoveStatusItem {
        /** Removal timestamp when the entity was soft-removed. */
        @NumberDataMember({ code: ParameterCode.TsRemove })
        public tsRemove: number;

        /** Removal reason when the backend provides one. */
        @StringDataMember({ code: ParameterCode.Reason, isOptional: true })
        public reason?: string;

    }

    /**
     * Represents a lightweight relation item pointing to an inventory item.
     */
    export class InventoryItem {
        /** Inventory item identifier of the related item entity. */
        @StringDataMember({ code: ParameterCode.ItemId })
        public itemId: string;

        /** Catalog identifier associated with the related inventory item. */
        @StringDataMember({ code: ParameterCode.CatalogId })
        public catalogId: string;

        /** Class identifier associated with the related inventory item. */
        @StringDataMember({ code: ParameterCode.ClassId })
        public classId: string;

    }

    /**
     * Represents a lightweight relation item pointing to a group.
     */
    export class GroupItem {
        /** Group identifier of the related group entity. */
        @StringDataMember({ code: ParameterCode.GroupId })
        public groupId: string;

        /** Catalog identifier associated with the related group. */
        @StringDataMember({ code: ParameterCode.CatalogId })
        public catalogId: string;

        /** Group relation status. Map this value with the public `GroupStatus` enum. */
        @NumberDataMember({ code: ParameterCode.Status })
        public status: number;

        /** Timestamp of the last group status change. */
        @NumberDataMember({ code: ParameterCode.TsLastStatusUpdate })
        public tsLastStatusUpdate: number;

    }

    /**
     * Represents a lightweight relation item pointing to a friend relation.
     */
    export class FriendItem {
        /** Friend identifier of the related friend entity. */
        @StringDataMember({ code: ParameterCode.FriendId })
        public friendId: string;

        /** Catalog identifier associated with the related friend entity. */
        @StringDataMember({ code: ParameterCode.CatalogId })
        public catalogId: string;

        /** Friend relation status. Map this value with the public `FriendStatus` enum. */
        @NumberDataMember({ code: ParameterCode.Status })
        public status: number;

        /** Timestamp of the last friend status change. */
        @NumberDataMember({ code: ParameterCode.TsLastStatusUpdate })
        public tsLastStatusUpdate: number;

    }

    /**
     * Represents a lightweight relation item pointing to a group member.
     */
    export class MemberItem {
        /** Member identifier of the related group member. */
        @StringDataMember({ code: ParameterCode.MemberId })
        public memberId: string;

        /** Member relation status. Map this value with the public member-status enum when available. */
        @NumberDataMember({ code: ParameterCode.Status })
        public status: number;

    }

}
