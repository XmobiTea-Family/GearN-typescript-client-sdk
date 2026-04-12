import { GNHashtable } from "./../../common/GNData";
import { ParameterCode } from "./../../constant/parameterCode/ParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";

/**
 * Groups reusable request and response contracts for Multiplayer operations.
 * Public matchmaking workflows usually follow `create/join ticket -> poll ticket -> get match`.
 */
export namespace MultiplayerModels {
	/**
	 * Defines the request payload for CancelAllMatchmakingTicket.
	 */
	export class CancelAllMatchmakingTicketRequestData {
		@StringDataMember({ code: ParameterCode.QueueName, minLength: 6, maxLength: 32 })
		public queueName: string;

	}

	/**
	 * Defines the request payload for ServerCancelAllMatchmakingTicket.
	 */
	export class ServerCancelAllMatchmakingTicketRequestData extends CancelAllMatchmakingTicketRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10 })
		public userId: string;

	}

	/**
	 * Defines the request payload for AdminCancelAllMatchmakingTicket.
	 */
	export class AdminCancelAllMatchmakingTicketRequestData extends ServerCancelAllMatchmakingTicketRequestData {
	}

	/**
	 * Defines the request payload for CancelMatchmakingTicket.
	 */
	export class CancelMatchmakingTicketRequestData {
		@StringDataMember({ code: ParameterCode.TicketId, minLength: 10, maxLength: 10 })
		public ticketId: string;

	}

	/**
	 * Defines the request payload for ServerCancelMatchmakingTicket.
	 */
	export class ServerCancelMatchmakingTicketRequestData extends CancelMatchmakingTicketRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10 })
		public userId: string;

	}

	/**
	 * Defines the request payload for AdminCancelMatchmakingTicket.
	 */
	export class AdminCancelMatchmakingTicketRequestData extends ServerCancelMatchmakingTicketRequestData {
	}

	/**
	 * Creates a new matchmaking ticket for the current or target player.
	 */
	export class CreateMatchmakingTicketRequestData {
		/**
		 * Maximum wait time before the ticket gives up.
		 */
		@NumberDataMember({ code: ParameterCode.GiveUpAfterSeconds, mustInt: true, minValue: 20 })
		public giveUpAfterSeconds: number;

		@StringDataMember({ code: ParameterCode.QueueName, minLength: 6, maxLength: 32 })
		public queueName: string;

		/**
		 * Backend-defined matchmaking attribute payload.
		 */
		@GNHashtableDataMember({ code: ParameterCode.Attribute, isOptional: true })
		public attribute?: GNHashtable;

		/**
		 * Optional extra members joined into the same matchmaking party.
		 */
		@GNArrayDataMember({ code: ParameterCode.Members, isOptional: true, elementCls: String })
		public members?: Array<string>;

	}

	/**
	 * Defines the request payload for ServerCreateMatchmakingTicket.
	 */
	export class ServerCreateMatchmakingTicketRequestData extends CreateMatchmakingTicketRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10 })
		public userId: string;

	}

	/**
	 * Defines the request payload for AdminCreateMatchmakingTicket.
	 */
	export class AdminCreateMatchmakingTicketRequestData extends ServerCreateMatchmakingTicketRequestData {
	}

	/**
	 * Polls the current state of one matchmaking ticket.
	 */
	export class GetMatchmakingTicketRequestData {
		@StringDataMember({ code: ParameterCode.TicketId, minLength: 10, maxLength: 10 })
		public ticketId: string;

		/**
		 * Requests member details in addition to the ticket summary.
		 */
		@BooleanDataMember({ code: ParameterCode.ReturnMember, isOptional: true, defaultValue: false })
		public returnMember?: boolean;

	}

	/**
	 * Defines the request payload for ServerGetMatchmakingTicket.
	 */
	export class ServerGetMatchmakingTicketRequestData extends GetMatchmakingTicketRequestData {
	}

	/**
	 * Defines the request payload for AdminGetMatchmakingTicket.
	 */
	export class AdminGetMatchmakingTicketRequestData extends ServerGetMatchmakingTicketRequestData {
	}

	/**
	 * Reads a match after matchmaking has produced a `matchId`.
	 */
	export class GetMatchRequestData {
		@StringDataMember({ code: ParameterCode.MatchId, minLength: 15, maxLength: 15 })
		public matchId: string;

		/**
		 * Requests member details in addition to the match summary.
		 */
		@BooleanDataMember({ code: ParameterCode.ReturnMember, isOptional: true, defaultValue: false })
		public returnMember?: boolean;

	}

	/**
	 * Defines the request payload for ServerGetMatch.
	 */
	export class ServerGetMatchRequestData extends GetMatchRequestData {
	}

	/**
	 * Defines the request payload for AdminGetMatch.
	 */
	export class AdminGetMatchRequestData extends ServerGetMatchRequestData {
	}

	/**
	 * Defines the request payload for GetAllMatch.
	 */
	export class GetAllMatchRequestData {
		@BooleanDataMember({ code: ParameterCode.ReturnMember, isOptional: true, defaultValue: false })
		public returnMember?: boolean;

		@NumberDataMember({ code: ParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

	}

	/**
	 * Defines the request payload for ServerGetAllMatch.
	 */
	export class ServerGetAllMatchRequestData extends GetAllMatchRequestData {
	}

	/**
	 * Defines the request payload for AdminGetAllMatch.
	 */
	export class AdminGetAllMatchRequestData extends ServerGetAllMatchRequestData {
	}

	/**
	 * Lists matchmaking tickets with optional status filtering.
	 */
	export class GetAllMatchmakingTicketRequestData {
		/**
		 * Ticket status filter mapped by the public `MatchmakingTicketStatus` enum.
		 */
		@NumberDataMember({ code: ParameterCode.Status, minValue: 1, maxValue: 5, isOptional: true, mustInt: true })
		public status?: number;

		@BooleanDataMember({ code: ParameterCode.ReturnMember, isOptional: true, defaultValue: false })
		public returnMember?: boolean;

		@NumberDataMember({ code: ParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: ParameterCode.Limit, defaultValue: 10, minValue: 1, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

	}

	/**
	 * Defines the request payload for ServerGetAllMatchmakingTicket.
	 */
	export class ServerGetAllMatchmakingTicketRequestData extends GetAllMatchmakingTicketRequestData {
	}

	/**
	 * Defines the request payload for AdminGetAllMatchmakingTicket.
	 */
	export class AdminGetAllMatchmakingTicketRequestData extends ServerGetAllMatchmakingTicketRequestData {
	}

	/**
	 * Defines the request payload for GetQueueStatistics.
	 */
	export class GetQueueStatisticsRequestData {
		@StringDataMember({ code: ParameterCode.QueueName, minLength: 6, maxLength: 32 })
		public queueName: string;

		@NumberDataMember({ code: ParameterCode.TimeInSeconds, mustInt: true, minValue: 20 })
		public timeInSeconds: number;

	}

	/**
	 * Defines the request payload for ServerGetQueueStatistics.
	 */
	export class ServerGetQueueStatisticsRequestData extends GetQueueStatisticsRequestData {
	}

	/**
	 * Defines the request payload for AdminGetQueueStatistics.
	 */
	export class AdminGetQueueStatisticsRequestData extends ServerGetQueueStatisticsRequestData {
	}

	/**
	 * Defines the request payload for JoinMatchmakingTicket.
	 */
	export class JoinMatchmakingTicketRequestData {
		@StringDataMember({ code: ParameterCode.TicketId, minLength: 10, maxLength: 10 })
		public ticketId: string;

		@GNHashtableDataMember({ code: ParameterCode.Attribute, isOptional: true })
		public attribute?: GNHashtable;

	}

	/**
	 * Defines the request payload for ServerJoinMatchmakingTicket.
	 */
	export class ServerJoinMatchmakingTicketRequestData extends JoinMatchmakingTicketRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10 })
		public userId: string;

	}

	/**
	 * Defines the request payload for AdminJoinMatchmakingTicket.
	 */
	export class AdminJoinMatchmakingTicketRequestData extends ServerJoinMatchmakingTicketRequestData {
	}

	/**
	 * Lists ticket IDs for the current or target player within one queue.
	 */
	export class ListMatchmakingTicketsForPlayerRequestData {
		@StringDataMember({ code: ParameterCode.QueueName, minLength: 6, maxLength: 32 })
		public queueName: string;

	}

	/**
	 * Defines the request payload for ServerListMatchmakingTicketsForPlayer.
	 */
	export class ServerListMatchmakingTicketsForPlayerRequestData extends ListMatchmakingTicketsForPlayerRequestData {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10 })
		public userId: string;

	}

	/**
	 * Defines the request payload for AdminListMatchmakingTicketsForPlayer.
	 */
	export class AdminListMatchmakingTicketsForPlayerRequestData extends ServerListMatchmakingTicketsForPlayerRequestData {
	}


	/**
	 * Defines the response payload for CancelAllMatchmakingTicket.
	 */
	export class CancelAllMatchmakingTicketResponseData {
		@GNArrayDataMember({ code: ParameterCode.TicketIds, elementCls: String })
		public ticketIds: Array<string>;

	}

	/**
	 * Defines the response payload for CreateMatchmakingTicket.
	 */
	export class CreateMatchmakingTicketResponseData {
		@StringDataMember({ code: ParameterCode.TicketId })
		public ticketId: string;

	}

	/**
	 * Describes one member attached to a matchmaking ticket.
	 */
	export class MatchmakingTicketMember {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10 })
		public userId: string;

		/**
		 * Member status value defined by backend matchmaking semantics.
		 */
		@NumberDataMember({ code: ParameterCode.Status, mustInt: true })
		public status: number;

		@GNHashtableDataMember({ code: ParameterCode.Attribute })
		public attribute: GNHashtable;

	}

	/**
	 * Describes the current state of a matchmaking ticket.
	 */
	export class MatchmakingTicketResponseData {
		@NumberDataMember({ code: ParameterCode.TsCreate })
		public tsCreate: number;

		@StringDataMember({ code: ParameterCode.CreatorId, minLength: 10, maxLength: 10 })
		public creatorId: string;

		@NumberDataMember({ code: ParameterCode.GiveUpAfterSeconds })
		public giveUpAfterSeconds: number;

		@StringDataMember({ code: ParameterCode.QueueName, minLength: 6, maxLength: 32 })
		public queueName: string;

		/**
		 * Ticket status mapped by the public `MatchmakingTicketStatus` enum.
		 */
		@NumberDataMember({ code: ParameterCode.Status, mustInt: true })
		public status: number;

		@StringDataMember({ code: ParameterCode.MatchId, minLength: 15, maxLength: 15, isOptional: true })
		public matchId?: string;

		@GNArrayDataMember({ code: ParameterCode.Members, elementCls: MatchmakingTicketMember, isOptional: true })
		public members?: Array<MatchmakingTicketMember>;

	}

	/**
	 * Defines the response payload for MatchmakingTicketWithTicketId.
	 */
	export class MatchmakingTicketWithTicketIdResponseData extends MatchmakingTicketResponseData {
		@StringDataMember({ code: ParameterCode.TicketId })
		public ticketId: string;

	}

	/**
	 * Defines the response payload for GetMatchmakingTicket.
	 */
	export class GetMatchmakingTicketResponseData {
		@GNHashtableDataMember({ code: ParameterCode.MatchmakingTicket })
		public matchmakingTicket: MatchmakingTicketResponseData;

	}

	/**
	 * Describes one member attached to a resolved match.
	 */
	export class MatchMember {
		@StringDataMember({ code: ParameterCode.UserId, minLength: 10, maxLength: 10 })
		public userId: string;

		@StringDataMember({ code: ParameterCode.TeamId })
		public teamId: string;

		@GNHashtableDataMember({ code: ParameterCode.Attribute })
		public attribute: GNHashtable;

	}

	/**
	 * Represents PortInfo.
	 */
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

	/**
	 * Represents ServerDetail.
	 */
	export class ServerDetail {
		@StringDataMember({ code: ParameterCode.IpV4Address })
		public ipV4Address: string;

		@GNArrayDataMember({ code: ParameterCode.Ports, elementCls: PortInfo })
		public ports: Array<PortInfo>;

	}

	/**
	 * Describes one resolved match.
	 * The public contract exposes queue/member data but does not include server endpoint fields here.
	 */
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

	/**
	 * Defines the response payload for MatchWithMatchId.
	 */
	export class MatchWithMatchIdResponseData extends MatchResponseData {
		@StringDataMember({ code: ParameterCode.MatchId })
		public matchId: string;

	}

	/**
	 * Defines the response payload for GetMatch.
	 */
	export class GetMatchResponseData {
		@GNHashtableDataMember({ code: ParameterCode.Match })
		public match: MatchResponseData;

	}

	/**
	 * Defines the response payload for GetQueueStatistics.
	 */
	export class GetQueueStatisticsResponseData {
		@NumberDataMember({ code: ParameterCode.PendingMemberCount, mustInt: true })
		public pendingMemberCount: number;

		@NumberDataMember({ code: ParameterCode.PendingTicketCount, mustInt: true })
		public pendingTicketCount: number;

		@NumberDataMember({ code: ParameterCode.AverageMatchmakingTimeInSeconds })
		public averageMatchmakingTimeInSeconds: number;

	}

	/**
	 * Defines the response payload for ListMatchmakingTicketsForPlayer.
	 */
	export class ListMatchmakingTicketsForPlayerResponseData {
		@GNArrayDataMember({ code: ParameterCode.TicketIds, elementCls: String })
		public ticketIds: Array<string>;

	}

	/**
	 * Defines the response payload for GetAllMatch.
	 */
	export class GetAllMatchResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: MatchWithMatchIdResponseData })
		public results: Array<MatchWithMatchIdResponseData>;

	}

	/**
	 * Defines the response payload for GetAllMatchmakingTicket.
	 */
	export class GetAllMatchmakingTicketResponseData {
		@GNArrayDataMember({ code: ParameterCode.Results, elementCls: MatchmakingTicketWithTicketIdResponseData })
		public results: Array<MatchmakingTicketWithTicketIdResponseData>;

	}

	/**
	 * Defines an intentionally empty response payload.
	 */
	export class EmptyResponseData {
	}

}
