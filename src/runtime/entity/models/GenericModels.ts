import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";

/**
 * Groups shared data contracts for Generic.
 */
export namespace GenericModels {
	/**
	 * Represents AvatarItem.
	 */
	export class AvatarItem {
		@NumberDataMember({ code: ParameterCode.Type })
		public type: number;

		@StringDataMember({ code: ParameterCode.Value })
		public value: string;

	}

	/**
	 * Represents TagItem.
	 */
	export class TagItem {
		@StringDataMember({ code: ParameterCode.Key })
		public key: string;

		@StringDataMember({ code: ParameterCode.Value })
		public value: string;

	}

	/**
	 * Represents BanItem.
	 */
	export class BanItem {
		@NumberDataMember({ code: ParameterCode.TsExpire })
		public tsExpire: number;

		@StringDataMember({ code: ParameterCode.Reason })
		public reason: string;

	}

	/**
	 * Represents DataItem.
	 */
	export class DataItem {
		@StringDataMember({ code: ParameterCode.Key })
		public key: string;

		@DataMember({ code: ParameterCode.Value })
		public value: any;

	}

	/**
	 * Represents CurrencyItem.
	 */
	export class CurrencyItem {
		@StringDataMember({ code: ParameterCode.Key })
		public key: string;

		@NumberDataMember({ code: ParameterCode.Value })
		public value: number;

	}

	/**
	 * Represents StatisticsItem.
	 */
	export class StatisticsItem {
		@StringDataMember({ code: ParameterCode.Key })
		public key: string;

		@NumberDataMember({ code: ParameterCode.Value })
		public value: number;

	}

	/**
	 * Represents CharacterItem.
	 */
	export class CharacterItem {
		@StringDataMember({ code: ParameterCode.CharacterId })
		public characterId: string;

		@StringDataMember({ code: ParameterCode.CatalogId })
		public catalogId: string;

	}

	/**
	 * Represents OwnerItem.
	 */
	export class OwnerItem {
		@NumberDataMember({ code: ParameterCode.Type })
		public type: number;

		@StringDataMember({ code: ParameterCode.Id })
		public id: string;

	}

	/**
	 * Represents RemoveStatusItem.
	 */
	export class RemoveStatusItem {
		@NumberDataMember({ code: ParameterCode.TsRemove })
		public tsRemove: number;

		@StringDataMember({ code: ParameterCode.Reason, isOptional: true })
		public reason?: string;

	}

	/**
	 * Represents InventoryItem.
	 */
	export class InventoryItem {
		@StringDataMember({ code: ParameterCode.ItemId })
		public itemId: string;

		@StringDataMember({ code: ParameterCode.CatalogId })
		public catalogId: string;

		@StringDataMember({ code: ParameterCode.ClassId })
		public classId: string;

	}

	/**
	 * Represents GroupItem.
	 */
	export class GroupItem {
		@StringDataMember({ code: ParameterCode.GroupId })
		public groupId: string;

		@StringDataMember({ code: ParameterCode.CatalogId })
		public catalogId: string;

		@NumberDataMember({ code: ParameterCode.Status })
		public status: number;

		@NumberDataMember({ code: ParameterCode.TsLastStatusUpdate })
		public tsLastStatusUpdate: number;

	}

	/**
	 * Represents FriendItem.
	 */
	export class FriendItem {
		@StringDataMember({ code: ParameterCode.FriendId })
		public friendId: string;

		@StringDataMember({ code: ParameterCode.CatalogId })
		public catalogId: string;

		@NumberDataMember({ code: ParameterCode.Status })
		public status: number;

		@NumberDataMember({ code: ParameterCode.TsLastStatusUpdate })
		public tsLastStatusUpdate: number;

	}

	/**
	 * Represents MemberItem.
	 */
	export class MemberItem {
		@StringDataMember({ code: ParameterCode.MemberId })
		public memberId: string;

		@NumberDataMember({ code: ParameterCode.Status })
		public status: number;

	}

}
