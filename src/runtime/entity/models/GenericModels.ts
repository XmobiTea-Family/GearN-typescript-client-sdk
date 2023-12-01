import { GNParameterCode } from "./../../constant/parameterCode/GNParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";

export namespace GenericModels {
	export class AvatarItem {
		@NumberDataMember({ code: GNParameterCode.Type })
		public type: number;

		@StringDataMember({ code: GNParameterCode.Value })
		public value: string;

	}

	export class TagItem {
		@StringDataMember({ code: GNParameterCode.Key })
		public key: string;

		@StringDataMember({ code: GNParameterCode.Value })
		public value: string;

	}

	export class BanItem {
		@NumberDataMember({ code: GNParameterCode.TsExpire })
		public tsExpire: number;

		@StringDataMember({ code: GNParameterCode.Reason })
		public reason: string;

	}

	export class DataItem {
		@StringDataMember({ code: GNParameterCode.Key })
		public key: string;

		@DataMember({ code: GNParameterCode.Value })
		public value: any;

	}

	export class CurrencyItem {
		@StringDataMember({ code: GNParameterCode.Key })
		public key: string;

		@NumberDataMember({ code: GNParameterCode.Value })
		public value: number;

	}

	export class StatisticsItem {
		@StringDataMember({ code: GNParameterCode.Key })
		public key: string;

		@NumberDataMember({ code: GNParameterCode.Value })
		public value: number;

	}

	export class CharacterItem {
		@StringDataMember({ code: GNParameterCode.CharacterId })
		public characterId: string;

		@StringDataMember({ code: GNParameterCode.CatalogId })
		public catalogId: string;

	}

	export class OwnerItem {
		@NumberDataMember({ code: GNParameterCode.Type })
		public type: number;

		@StringDataMember({ code: GNParameterCode.Id })
		public id: string;

	}

	export class RemoveStatusItem {
		@NumberDataMember({ code: GNParameterCode.TsRemove })
		public tsRemove: number;

		@StringDataMember({ code: GNParameterCode.Reason, isOptional: true })
		public reason?: string;

	}

	export class InventoryItem {
		@StringDataMember({ code: GNParameterCode.ItemId })
		public itemId: string;

		@StringDataMember({ code: GNParameterCode.CatalogId })
		public catalogId: string;

		@StringDataMember({ code: GNParameterCode.ClassId })
		public classId: string;

	}

	export class GroupItem {
		@StringDataMember({ code: GNParameterCode.GroupId })
		public groupId: string;

		@StringDataMember({ code: GNParameterCode.CatalogId })
		public catalogId: string;

		@NumberDataMember({ code: GNParameterCode.Status })
		public status: number;

		@NumberDataMember({ code: GNParameterCode.TsLastStatusUpdate })
		public tsLastStatusUpdate: number;

	}

	export class FriendItem {
		@StringDataMember({ code: GNParameterCode.FriendId })
		public friendId: string;

		@StringDataMember({ code: GNParameterCode.CatalogId })
		public catalogId: string;

		@NumberDataMember({ code: GNParameterCode.Status })
		public status: number;

		@NumberDataMember({ code: GNParameterCode.TsLastStatusUpdate })
		public tsLastStatusUpdate: number;

	}

	export class MemberItem {
		@StringDataMember({ code: GNParameterCode.MemberId })
		public memberId: string;

		@NumberDataMember({ code: GNParameterCode.Status })
		public status: number;

	}

}
