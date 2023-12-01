import { GNHashtable } from "./../../common/GNData";
import { GNParameterCode } from "./../../constant/parameterCode/GNParameterCode";
import { GNHashtableDataMember, StringDataMember, BooleanDataMember, DataMember, GNArrayDataMember, NumberDataMember } from "./../DataMember";

export namespace MultiplayerModels {
    export class CancelAllMatchmakingTicketRequestData {
        @StringDataMember({ code: GNParameterCode.QueueName, minLength: 6, maxLength: 32 })
        public queueName: string;

    }

    export class ServerCancelAllMatchmakingTicketRequestData extends CancelAllMatchmakingTicketRequestData {
        @StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10 })
        public userId: string;

    }

    export class AdminCancelAllMatchmakingTicketRequestData extends ServerCancelAllMatchmakingTicketRequestData {
    }

    export class CancelMatchmakingTicketRequestData {
        @StringDataMember({ code: GNParameterCode.TicketId, minLength: 10, maxLength: 10 })
        public ticketId: string;

    }

    export class ServerCancelMatchmakingTicketRequestData extends CancelMatchmakingTicketRequestData {
        @StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10 })
        public userId: string;

    }

    export class AdminCancelMatchmakingTicketRequestData extends ServerCancelMatchmakingTicketRequestData {
    }

    export class CreateMatchmakingTicketRequestData {
        @NumberDataMember({ code: GNParameterCode.GiveUpAfterSeconds, mustInt: true, minValue: 20 })
        public giveUpAfterSeconds: number;

        @StringDataMember({ code: GNParameterCode.QueueName, minLength: 6, maxLength: 32 })
        public queueName: string;

        @GNHashtableDataMember({ code: GNParameterCode.Attribute, isOptional: true })
        public attribute?: GNHashtable;

        @GNArrayDataMember({ code: GNParameterCode.Members, isOptional: true, elementCls: String })
        public members?: string[];

    }

    export class ServerCreateMatchmakingTicketRequestData extends CreateMatchmakingTicketRequestData {
        @StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10 })
        public userId: string;

    }

    export class AdminCreateMatchmakingTicketRequestData extends ServerCreateMatchmakingTicketRequestData {
    }

    export class GetMatchmakingTicketRequestData {
        @StringDataMember({ code: GNParameterCode.TicketId, minLength: 10, maxLength: 10 })
        public ticketId: string;

        @BooleanDataMember({ code: GNParameterCode.ReturnMember, isOptional: true, defaultValue: false })
        public returnMember?: boolean;

    }

    export class ServerGetMatchmakingTicketRequestData extends GetMatchmakingTicketRequestData {
    }

    export class AdminGetMatchmakingTicketRequestData extends ServerGetMatchmakingTicketRequestData {
    }

    export class GetMatchRequestData {
        @StringDataMember({ code: GNParameterCode.MatchId, minLength: 15, maxLength: 15 })
        public matchId: string;

        @BooleanDataMember({ code: GNParameterCode.ReturnMember, isOptional: true, defaultValue: false })
        public returnMember?: boolean;

    }

    export class ServerGetMatchRequestData extends GetMatchRequestData {
    }

    export class AdminGetMatchRequestData extends ServerGetMatchRequestData {
    }

    export class GetAllMatchRequestData {
        @BooleanDataMember({ code: GNParameterCode.ReturnMember, isOptional: true, defaultValue: false })
        public returnMember?: boolean;

        @NumberDataMember({ code: GNParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 5, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

    }
    
    export class ServerGetAllMatchRequestData extends GetAllMatchRequestData {
    }

    export class AdminGetAllMatchRequestData extends ServerGetAllMatchRequestData {
    }

    export class GetAllMatchmakingTicketRequestData {
        @NumberDataMember({ code: GNParameterCode.Status, minValue: 1, maxValue: 5, isOptional: true, mustInt: true })
        public status?: number;

        @BooleanDataMember({ code: GNParameterCode.ReturnMember, isOptional: true, defaultValue: false })
        public returnMember?: boolean;

        @NumberDataMember({ code: GNParameterCode.Skip, defaultValue: 0, minValue: 0, mustInt: true, isOptional: true })
		public skip?: number;

		@NumberDataMember({ code: GNParameterCode.Limit, defaultValue: 10, minValue: 5, maxValue: 100, mustInt: true, isOptional: true })
		public limit?: number;

    }

    export class ServerGetAllMatchmakingTicketRequestData extends GetAllMatchmakingTicketRequestData {
    }

    export class AdminGetAllMatchmakingTicketRequestData extends ServerGetAllMatchmakingTicketRequestData {
    }

    export class GetQueueStatisticsRequestData {
        @StringDataMember({ code: GNParameterCode.QueueName, minLength: 6, maxLength: 32 })
        public queueName: string;

        @NumberDataMember({ code: GNParameterCode.TimeInSeconds, mustInt: true, minValue: 20 })
        public timeInSeconds: number;

    }

    export class ServerGetQueueStatisticsRequestData extends GetQueueStatisticsRequestData {
    }

    export class AdminGetQueueStatisticsRequestData extends ServerGetQueueStatisticsRequestData {
    }

    export class JoinMatchmakingTicketRequestData {
        @StringDataMember({ code: GNParameterCode.TicketId, minLength: 10, maxLength: 10 })
        public ticketId: string;

        @GNHashtableDataMember({ code: GNParameterCode.Attribute, isOptional: true })
        public attribute?: GNHashtable;

    }

    export class ServerJoinMatchmakingTicketRequestData extends JoinMatchmakingTicketRequestData {
        @StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10 })
        public userId: string;

    }

    export class AdminJoinMatchmakingTicketRequestData extends ServerJoinMatchmakingTicketRequestData {
    }

    export class ListMatchmakingTicketsForPlayerRequestData {
        @StringDataMember({ code: GNParameterCode.QueueName, minLength: 6, maxLength: 32 })
        public queueName: string;

    }

    export class ServerListMatchmakingTicketsForPlayerRequestData extends ListMatchmakingTicketsForPlayerRequestData {
        @StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10 })
        public userId: string;

    }

    export class AdminListMatchmakingTicketsForPlayerRequestData extends ServerListMatchmakingTicketsForPlayerRequestData {
    }


    export class CancelAllMatchmakingTicketResponseData {
        @GNArrayDataMember({ code: GNParameterCode.TicketIds, elementCls: String })
        public ticketIds: Array<string>;

    }

    export class CreateMatchmakingTicketResponseData {
        @StringDataMember({ code: GNParameterCode.TicketId })
        public ticketId: string;

    }

    export class MatchmakingTicketMember {
        @StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10 })
        public userId: string;

        @NumberDataMember({ code: GNParameterCode.Status, mustInt: true })
        public status: number;

        @GNHashtableDataMember({ code: GNParameterCode.Attribute })
        public attribute: GNHashtable;

    }

    export class MatchmakingTicketResponseData {
        @NumberDataMember({ code: GNParameterCode.TsCreate })
        public tsCreate: number;

        @StringDataMember({ code: GNParameterCode.CreatorId, minLength: 10, maxLength: 10 })
        public creatorId: string;

        @NumberDataMember({ code: GNParameterCode.GiveUpAfterSeconds })
        public giveUpAfterSeconds: number;

        @StringDataMember({ code: GNParameterCode.QueueName, minLength: 6, maxLength: 32 })
        public queueName: string;

        @NumberDataMember({ code: GNParameterCode.Status, mustInt: true })
        public status: number;

        @StringDataMember({ code: GNParameterCode.MatchId, minLength: 15, maxLength: 15, isOptional: true })
        public matchId?: string;

        @GNArrayDataMember({ code: GNParameterCode.Members, elementCls: MatchmakingTicketMember, isOptional: true })
        public members?: Array<MatchmakingTicketMember>;

    }

	export class MatchmakingTicketWithTicketIdResponseData extends MatchmakingTicketResponseData {
		@StringDataMember({ code: GNParameterCode.TicketId })
		public ticketId: string;

	}

    export class GetMatchmakingTicketResponseData {
        @GNHashtableDataMember({ code: GNParameterCode.MatchmakingTicket })
        public matchmakingTicket: MatchmakingTicketResponseData;

    }

    export class MatchMember {
        @StringDataMember({ code: GNParameterCode.UserId, minLength: 10, maxLength: 10 })
        public userId: string;

        @StringDataMember({ code: GNParameterCode.TeamId })
        public teamId: string;

        @GNHashtableDataMember({ code: GNParameterCode.Attribute })
        public attribute: GNHashtable;

    }

    export class PortInfo {
        @StringDataMember({ code: GNParameterCode.Name })
        public name: string;

        @NumberDataMember({ code: GNParameterCode.PublicPort, mustInt: true, minValue: 0 })
        public publicPort: number;

        @NumberDataMember({ code: GNParameterCode.PrivatePort, mustInt: true, minValue: 0 })
        public privatePort: number;

        @NumberDataMember({ code: GNParameterCode.Protocol, mustInt: true, minValue: 1, maxValue: 2 })
        public protocol: number;

    }

    export class ServerDetail {
        @StringDataMember({ code: GNParameterCode.IpV4Address })
        public ipV4Address: string;

        @GNArrayDataMember({ code: GNParameterCode.Ports, elementCls: PortInfo })
        public ports: Array<PortInfo>;

    }

    export class MatchResponseData {
        @NumberDataMember({ code: GNParameterCode.TsCreate })
        public tsCreate: number;

        @StringDataMember({ code: GNParameterCode.QueueName, minLength: 6, maxLength: 32 })
        public queueName: string;

        @GNArrayDataMember({ code: GNParameterCode.Members, elementCls: MatchMember, isOptional: true })
        public members?: Array<MatchMember>;

        @NumberDataMember({ code: GNParameterCode.TimeToMatchInSeconds })
        public timeToMatchInSeconds: number;

    }

    export class MatchWithMatchIdResponseData extends MatchResponseData {
        @StringDataMember({ code: GNParameterCode.MatchId })
        public matchId: string;

    }

    export class GetMatchResponseData {
        @GNHashtableDataMember({ code: GNParameterCode.Match })
        public match: MatchResponseData;

    }

    export class GetQueueStatisticsResponseData {
        @NumberDataMember({ code: GNParameterCode.PendingMemberCount, mustInt: true })
        public pendingMemberCount: number;

        @NumberDataMember({ code: GNParameterCode.PendingTicketCount, mustInt: true })
        public pendingTicketCount: number;

        @NumberDataMember({ code: GNParameterCode.AverageMatchmakingTimeInSeconds })
        public averageMatchmakingTimeInSeconds: number;

    }

    export class ListMatchmakingTicketsForPlayerResponseData {
        @GNArrayDataMember({ code: GNParameterCode.TicketIds, elementCls: String })
        public ticketIds: Array<string>;

    }

    export class GetAllMatchResponseData {
        @GNArrayDataMember({ code: GNParameterCode.Results, elementCls: MatchWithMatchIdResponseData })
        public results: Array<MatchWithMatchIdResponseData>;

    }

    export class GetAllMatchmakingTicketResponseData {
        @GNArrayDataMember({ code: GNParameterCode.Results, elementCls: MatchmakingTicketWithTicketIdResponseData })
        public results: Array<MatchmakingTicketWithTicketIdResponseData>;

    }

    export class EmptyResponseData {
    }

}
