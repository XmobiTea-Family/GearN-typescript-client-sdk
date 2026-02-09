import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";

export namespace GenericModels {
	export class AvatarItem {
		@NumberDataMember({ code: ParameterCode.Type })
		public type: number;

		@StringDataMember({ code: ParameterCode.Value })
		public value: string;

	}

	export class TagItem {
		@StringDataMember({ code: ParameterCode.Key })
		public key: string;

		@StringDataMember({ code: ParameterCode.Value })
		public value: string;

	}

	export class BanItem {
		@NumberDataMember({ code: ParameterCode.TsExpire })
		public tsExpire: number;

		@StringDataMember({ code: ParameterCode.Reason })
		public reason: string;

	}

	export class DataItem {
		@StringDataMember({ code: ParameterCode.Key })
		public key: string;

		@DataMember({ code: ParameterCode.Value })
		public value: any;

	}

	export class CurrencyItem {
		@StringDataMember({ code: ParameterCode.Key })
		public key: string;

		@NumberDataMember({ code: ParameterCode.Value })
		public value: number;

	}

	export class StatisticsItem {
		@StringDataMember({ code: ParameterCode.Key })
		public key: string;

		@NumberDataMember({ code: ParameterCode.Value })
		public value: number;

	}

	export class CharacterItem {
		@StringDataMember({ code: ParameterCode.CharacterId })
		public characterId: string;

		@StringDataMember({ code: ParameterCode.CatalogId })
		public catalogId: string;

	}

	export class OwnerItem {
		@NumberDataMember({ code: ParameterCode.Type })
		public type: number;

		@StringDataMember({ code: ParameterCode.Id })
		public id: string;

	}

	export class RemoveStatusItem {
		@NumberDataMember({ code: ParameterCode.TsRemove })
		public tsRemove: number;

		@StringDataMember({ code: ParameterCode.Reason, isOptional: true })
		public reason?: string;

	}

	export class InventoryItem {
		@StringDataMember({ code: ParameterCode.ItemId })
		public itemId: string;

		@StringDataMember({ code: ParameterCode.CatalogId })
		public catalogId: string;

		@StringDataMember({ code: ParameterCode.ClassId })
		public classId: string;

	}

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

	export class MemberItem {
		@StringDataMember({ code: ParameterCode.MemberId })
		public memberId: string;

		@NumberDataMember({ code: ParameterCode.Status })
		public status: number;

	}

}
