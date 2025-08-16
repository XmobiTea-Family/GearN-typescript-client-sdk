import { GNHashtable } from "./../../common/GNData";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";

export namespace MultiplayerModels {
	export class CancelAllMatchmakingTicketRequestData {
		@StringDataMember({ code: ParameterCode.QueueName, minLength: 6, maxLength: 32 })
		public queueName: string;

	}

	export class ServerCancelAllMatchmakingTicketRequestData extends CancelAllMatchmakingTicketRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10 })
		public userId: string;

	}

	export class AdminCancelAllMatchmakingTicketRequestData extends ServerCancelAllMatchmakingTicketRequestData {
	}

	export class CancelMatchmakingTicketRequestData {
		@StringDataMember({ code: ParameterCode.TicketId, minLength: 10, maxLength: 10 })
		public ticketId: string;

	}

	export class ServerCancelMatchmakingTicketRequestData extends CancelMatchmakingTicketRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10 })
		public userId: string;

	}

	export class AdminCancelMatchmakingTicketRequestData extends ServerCancelMatchmakingTicketRequestData {
	}

	export class CreateMatchmakingTicketRequestData {
		@NumberDataMember({ code: ParameterCode.GiveUpAfterSeconds, mustInt: true, minValue: 20 })
		public giveUpAfterSeconds: number;

		@StringDataMember({ code: ParameterCode.QueueName, minLength: 6, maxLength: 32 })
		public queueName: string;

		@GNHashtableDataMember({ code: ParameterCode.Attribute, isOptional: true })
		public attribute?: GNHashtable;

		@GNArrayDataMember({ code: ParameterCode.Members, isOptional: true, elementCls: String })
		public members?: Array<string>;

	}

	export class ServerCreateMatchmakingTicketRequestData extends CreateMatchmakingTicketRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10 })
		public userId: string;

	}

	export class AdminCreateMatchmakingTicketRequestData extends ServerCreateMatchmakingTicketRequestData {
	}

	export class GetMatchmakingTicketRequestData {
		@StringDataMember({ code: ParameterCode.TicketId, minLength: 10, maxLength: 10 })
		public ticketId: string;

		@BooleanDataMember({ code: ParameterCode.ReturnMember, isOptional: true, defaultValue: false })
		public returnMember?: boolean;

	}

	export class ServerGetMatchmakingTicketRequestData extends GetMatchmakingTicketRequestData {
	}

	export class AdminGetMatchmakingTicketRequestData extends ServerGetMatchmakingTicketRequestData {
	}

	export class GetMatchRequestData {
		@StringDataMember({ code: ParameterCode.MatchId, minLength: 15, maxLength: 15 })
		public matchId: string;

		@BooleanDataMember({ code: ParameterCode.ReturnMember, isOptional: true, defaultValue: false })
		public returnMember?: boolean;

	}

	export class ServerGetMatchRequestData extends GetMatchRequestData {
	}

	export class AdminGetMatchRequestData extends ServerGetMatchRequestData {
	}

	export class GetAllMatchRequestData {
		@BooleanDataMember({ code: ParameterCode.ReturnMember, isOptional: true, defaultValue: false })
		public returnMember?: boolean;

		@NumberDataMember({ code: ParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

	}

	export class ServerGetAllMatchRequestData extends GetAllMatchRequestData {
	}

	export class AdminGetAllMatchRequestData extends ServerGetAllMatchRequestData {
	}

	export class GetAllMatchmakingTicketRequestData {
		@NumberDataMember({ code: ParameterCode.Status, minValue: 1, maxValue: 5, isOptional: true, mustInt: true })
		public status?: number;

		@BooleanDataMember({ code: ParameterCode.ReturnMember, isOptional: true, defaultValue: false })
		public returnMember?: boolean;

		@NumberDataMember({ code: ParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

	}

	export class ServerGetAllMatchmakingTicketRequestData extends GetAllMatchmakingTicketRequestData {
	}

	export class AdminGetAllMatchmakingTicketRequestData extends ServerGetAllMatchmakingTicketRequestData {
	}

	export class GetQueueStatisticsRequestData {
		@StringDataMember({ code: ParameterCode.QueueName, minLength: 6, maxLength: 32 })
		public queueName: string;

		@NumberDataMember({ code: ParameterCode.TimeInSeconds, mustInt: true, minValue: 20 })
		public timeInSeconds: number;

	}

	export class ServerGetQueueStatisticsRequestData extends GetQueueStatisticsRequestData {
	}

	export class AdminGetQueueStatisticsRequestData extends ServerGetQueueStatisticsRequestData {
	}

	export class JoinMatchmakingTicketRequestData {
		@StringDataMember({ code: ParameterCode.TicketId, minLength: 10, maxLength: 10 })
		public ticketId: string;

		@GNHashtableDataMember({ code: ParameterCode.Attribute, isOptional: true })
		public attribute?: GNHashtable;

	}

	export class ServerJoinMatchmakingTicketRequestData extends JoinMatchmakingTicketRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10 })
		public userId: string;

	}

	export class AdminJoinMatchmakingTicketRequestData extends ServerJoinMatchmakingTicketRequestData {
	}

	export class ListMatchmakingTicketsForPlayerRequestData {
		@StringDataMember({ code: ParameterCode.QueueName, minLength: 6, maxLength: 32 })
		public queueName: string;

	}

	export class ServerListMatchmakingTicketsForPlayerRequestData extends ListMatchmakingTicketsForPlayerRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10 })
		public userId: string;

	}

	export class AdminListMatchmakingTicketsForPlayerRequestData extends ServerListMatchmakingTicketsForPlayerRequestData {
	}


	export class CancelAllMatchmakingTicketResponseData {
		@GNArrayDataMember({ code: ParameterCode.TicketIds, elementCls: String })
		public ticketIds: Array<string>;

	}

	export class CreateMatchmakingTicketResponseData {
		@StringDataMember({ code: ParameterCode.TicketId })
		public ticketId: string;

	}

	export class MatchmakingTicketMember {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10 })
		public userId: string;

		@NumberDataMember({ code: ParameterCode.Status, mustInt: true })
		public status: number;

		@GNHashtableDataMember({ code: ParameterCode.Attribute })
		public attribute: GNHashtable;

	}

	export class MatchmakingTicketResponseData {
		@NumberDataMember({ code: ParameterCode.TsCreate })
		public tsCreate: number;

		@StringDataMember({ code: ParameterCode.CreatorId, minLength: 10, maxLength: 10 })
		public creatorId: string;

		@NumberDataMember({ code: ParameterCode.GiveUpAfterSeconds })
		public giveUpAfterSeconds: number;

		@StringDataMember({ code: ParameterCode.QueueName, minLength: 6, maxLength: 32 })
		public queueName: string;

		@NumberDataMember({ code: ParameterCode.Status, mustInt: true })
		public status: number;

		@StringDataMember({ code: ParameterCode.MatchId, minLength: 15, maxLength: 15, isOptional: true })
		public matchId?: string;

		@GNArrayDataMember({ code: ParameterCode.Members, elementCls: MatchmakingTicketMember, isOptional: true })
		public members?: Array<MatchmakingTicketMember>;

	}

	export class MatchmakingTicketWithTicketIdResponseData extends MatchmakingTicketResponseData {
		@StringDataMember({ code: ParameterCode.TicketId })
		public ticketId: string;

	}

	export class GetMatchmakingTicketResponseData {
		@GNHashtableDataMember({ code: ParameterCode.MatchmakingTicket })
		public matchmakingTicket: MatchmakingTicketResponseData;

	}

	export class MatchMember {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10 })
		public userId: string;

		@StringDataMember({ code: ParameterCode.TeamId })
		public teamId: string;

		@GNHashtableDataMember({ code: ParameterCode.Attribute })
		public attribute: GNHashtable;

	}

	export class PortInfo {
		@StringDataMember({ code: ParameterCode.Name })
		public name: string;

		@NumberDataMember({ code: ParameterCode.PublicPort, mustInt: true, minValue: 0 })
		public publicPort: number;

		@NumberDataMember({ code: ParameterCode.PrivatePort, mustInt: true, minValue: 0 })
		public privatePort: number;

		@NumberDataMember({ code: ParameterCode.Protocol, mustInt: true, minValue: 1, maxValue: 2 })
		public protocol: number;

	}

	export class ServerDetail {
		@StringDataMember({ code: ParameterCode.IpV4Address })
		public ipV4Address: string;

		@GNArrayDataMember({ code: ParameterCode.Ports, elementCls: PortInfo })
		public ports: Array<PortInfo>;

	}

	export class MatchResponseData {
		@NumberDataMember({ code: ParameterCode.TsCreate })
		public tsCreate: number;

		@StringDataMember({ code: ParameterCode.QueueName, minLength: 6, maxLength: 32 })
		public queueName: string;

		@GNArrayDataMember({ code: ParameterCode.Members, elementCls: MatchMember, isOptional: true })
		public members?: Array<MatchMember>;

		@NumberDataMember({ code: ParameterCode.TimeToMatchInSeconds })
		public timeToMatchInSeconds: number;

	}

	export class MatchWithMatchIdResponseData extends MatchResponseData {
		@StringDataMember({ code: ParameterCode.MatchId })
		public matchId: string;

	}

	export class GetMatchResponseData {
		@GNHashtableDataMember({ code: ParameterCode.Match })
		public match: MatchResponseData;

	}

	export class GetQueueStatisticsResponseData {
		@NumberDataMember({ code: ParameterCode.PendingMemberCount, mustInt: true })
		public pendingMemberCount: number;

		@NumberDataMember({ code: ParameterCode.PendingTicketCount, mustInt: true })
		public pendingTicketCount: number;

		@NumberDataMember({ code: ParameterCode.AverageMatchmakingTimeInSeconds })
		public averageMatchmakingTimeInSeconds: number;

	}

	export class ListMatchmakingTicketsForPlayerResponseData {
		@GNArrayDataMember({ code: ParameterCode.TicketIds, elementCls: String })
		public ticketIds: Array<string>;

	}

	export class GetAllMatchResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: MatchWithMatchIdResponseData })
		public results: Array<MatchWithMatchIdResponseData>;

	}

	export class GetAllMatchmakingTicketResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: MatchmakingTicketWithTicketIdResponseData })
		public results: Array<MatchmakingTicketWithTicketIdResponseData>;

	}

	export class EmptyResponseData {
	}

}
