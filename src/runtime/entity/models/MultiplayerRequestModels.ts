import { OperationCode } from "./../../constant/OperationCode";
import { RequestRole } from "./../../constant/enumType/RequestRole";
import { RequestType } from "./../../constant/enumType/RequestType";
import { CustomOperationRequestAbstract } from "./../request/CustomOperationRequest";
import { MultiplayerModels } from "./MultiplayerModels";

/**
 * Groups typed request contracts for Multiplayer.
 */
export namespace MultiplayerRequestModels {
	/**
	 * Maps the CancelAllMatchmakingTicket operation to a typed request wrapper.
	 */
	export class CancelAllMatchmakingTicketOperationRequest extends CustomOperationRequestAbstract<MultiplayerModels.CancelAllMatchmakingTicketRequestData> {
		protected override operationCode: string = OperationCode.CancelAllMatchmakingTicket;
		protected override requestType: RequestType = RequestType.Multiplayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new CancelAllMatchmakingTicketOperationRequest instance.
		 */
		constructor(requestData: MultiplayerModels.CancelAllMatchmakingTicketRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MultiplayerModels.CancelAllMatchmakingTicketRequestData;
		}
	}

	/**
	 * Maps the ServerCancelAllMatchmakingTicket operation to a typed request wrapper.
	 */
	export class ServerCancelAllMatchmakingTicketOperationRequest extends CancelAllMatchmakingTicketOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerCancelAllMatchmakingTicketOperationRequest instance.
		 */
		constructor(requestData: MultiplayerModels.ServerCancelAllMatchmakingTicketRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MultiplayerModels.ServerCancelAllMatchmakingTicketRequestData;
		}
	}

	/**
	 * Maps the AdminCancelAllMatchmakingTicket operation to a typed request wrapper.
	 */
	export class AdminCancelAllMatchmakingTicketOperationRequest extends CancelAllMatchmakingTicketOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminCancelAllMatchmakingTicketOperationRequest instance.
		 */
		constructor(requestData: MultiplayerModels.AdminCancelAllMatchmakingTicketRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MultiplayerModels.AdminCancelAllMatchmakingTicketRequestData;
		}
	}

	/**
	 * Maps the CancelMatchmakingTicket operation to a typed request wrapper.
	 */
	export class CancelMatchmakingTicketOperationRequest extends CustomOperationRequestAbstract<MultiplayerModels.CancelMatchmakingTicketRequestData> {
		protected override operationCode: string = OperationCode.CancelMatchmakingTicket;
		protected override requestType: RequestType = RequestType.Multiplayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new CancelMatchmakingTicketOperationRequest instance.
		 */
		constructor(requestData: MultiplayerModels.CancelMatchmakingTicketRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MultiplayerModels.CancelMatchmakingTicketRequestData;
		}
	}

	/**
	 * Maps the ServerCancelMatchmakingTicket operation to a typed request wrapper.
	 */
	export class ServerCancelMatchmakingTicketOperationRequest extends CancelMatchmakingTicketOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerCancelMatchmakingTicketOperationRequest instance.
		 */
		constructor(requestData: MultiplayerModels.ServerCancelMatchmakingTicketRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MultiplayerModels.ServerCancelMatchmakingTicketRequestData;
		}
	}

	/**
	 * Maps the AdminCancelMatchmakingTicket operation to a typed request wrapper.
	 */
	export class AdminCancelMatchmakingTicketOperationRequest extends CancelMatchmakingTicketOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminCancelMatchmakingTicketOperationRequest instance.
		 */
		constructor(requestData: MultiplayerModels.AdminCancelMatchmakingTicketRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MultiplayerModels.AdminCancelMatchmakingTicketRequestData;
		}
	}

	/**
	 * Maps the CreateMatchmakingTicket operation to a typed request wrapper.
	 */
	export class CreateMatchmakingTicketOperationRequest extends CustomOperationRequestAbstract<MultiplayerModels.CreateMatchmakingTicketRequestData> {
		protected override operationCode: string = OperationCode.CreateMatchmakingTicket;
		protected override requestType: RequestType = RequestType.Multiplayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new CreateMatchmakingTicketOperationRequest instance.
		 */
		constructor(requestData: MultiplayerModels.CreateMatchmakingTicketRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MultiplayerModels.CreateMatchmakingTicketRequestData;
		}
	}

	/**
	 * Maps the ServerCreateMatchmakingTicket operation to a typed request wrapper.
	 */
	export class ServerCreateMatchmakingTicketOperationRequest extends CreateMatchmakingTicketOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerCreateMatchmakingTicketOperationRequest instance.
		 */
		constructor(requestData: MultiplayerModels.ServerCreateMatchmakingTicketRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MultiplayerModels.ServerCreateMatchmakingTicketRequestData;
		}
	}

	/**
	 * Maps the AdminCreateMatchmakingTicket operation to a typed request wrapper.
	 */
	export class AdminCreateMatchmakingTicketOperationRequest extends CreateMatchmakingTicketOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminCreateMatchmakingTicketOperationRequest instance.
		 */
		constructor(requestData: MultiplayerModels.AdminCreateMatchmakingTicketRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MultiplayerModels.AdminCreateMatchmakingTicketRequestData;
		}
	}

	/**
	 * Maps the GetMatchmakingTicket operation to a typed request wrapper.
	 */
	export class GetMatchmakingTicketOperationRequest extends CustomOperationRequestAbstract<MultiplayerModels.GetMatchmakingTicketRequestData> {
		protected override operationCode: string = OperationCode.GetMatchmakingTicket;
		protected override requestType: RequestType = RequestType.Multiplayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetMatchmakingTicketOperationRequest instance.
		 */
		constructor(requestData: MultiplayerModels.GetMatchmakingTicketRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MultiplayerModels.GetMatchmakingTicketRequestData;
		}
	}

	/**
	 * Maps the ServerGetMatchmakingTicket operation to a typed request wrapper.
	 */
	export class ServerGetMatchmakingTicketOperationRequest extends GetMatchmakingTicketOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetMatchmakingTicketOperationRequest instance.
		 */
		constructor(requestData: MultiplayerModels.ServerGetMatchmakingTicketRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MultiplayerModels.ServerGetMatchmakingTicketRequestData;
		}
	}

	/**
	 * Maps the AdminGetMatchmakingTicket operation to a typed request wrapper.
	 */
	export class AdminGetMatchmakingTicketOperationRequest extends GetMatchmakingTicketOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetMatchmakingTicketOperationRequest instance.
		 */
		constructor(requestData: MultiplayerModels.AdminGetMatchmakingTicketRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MultiplayerModels.AdminGetMatchmakingTicketRequestData;
		}
	}

	/**
	 * Maps the GetMatch operation to a typed request wrapper.
	 */
	export class GetMatchOperationRequest extends CustomOperationRequestAbstract<MultiplayerModels.GetMatchRequestData> {
		protected override operationCode: string = OperationCode.GetMatch;
		protected override requestType: RequestType = RequestType.Multiplayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetMatchOperationRequest instance.
		 */
		constructor(requestData: MultiplayerModels.GetMatchRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MultiplayerModels.GetMatchRequestData;
		}
	}

	/**
	 * Maps the ServerGetMatch operation to a typed request wrapper.
	 */
	export class ServerGetMatchOperationRequest extends GetMatchOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetMatchOperationRequest instance.
		 */
		constructor(requestData: MultiplayerModels.ServerGetMatchRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MultiplayerModels.ServerGetMatchRequestData;
		}
	}

	/**
	 * Maps the AdminGetMatch operation to a typed request wrapper.
	 */
	export class AdminGetMatchOperationRequest extends GetMatchOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetMatchOperationRequest instance.
		 */
		constructor(requestData: MultiplayerModels.AdminGetMatchRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MultiplayerModels.AdminGetMatchRequestData;
		}
	}

	/**
	 * Maps the GetQueueStatistics operation to a typed request wrapper.
	 */
	export class GetQueueStatisticsOperationRequest extends CustomOperationRequestAbstract<MultiplayerModels.GetQueueStatisticsRequestData> {
		protected override operationCode: string = OperationCode.GetQueueStatistics;
		protected override requestType: RequestType = RequestType.Multiplayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetQueueStatisticsOperationRequest instance.
		 */
		constructor(requestData: MultiplayerModels.GetQueueStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MultiplayerModels.GetQueueStatisticsRequestData;
		}
	}

	/**
	 * Maps the ServerGetQueueStatistics operation to a typed request wrapper.
	 */
	export class ServerGetQueueStatisticsOperationRequest extends GetQueueStatisticsOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetQueueStatisticsOperationRequest instance.
		 */
		constructor(requestData: MultiplayerModels.ServerGetQueueStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MultiplayerModels.ServerGetQueueStatisticsRequestData;
		}
	}

	/**
	 * Maps the AdminGetQueueStatistics operation to a typed request wrapper.
	 */
	export class AdminGetQueueStatisticsOperationRequest extends GetQueueStatisticsOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetQueueStatisticsOperationRequest instance.
		 */
		constructor(requestData: MultiplayerModels.AdminGetQueueStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MultiplayerModels.AdminGetQueueStatisticsRequestData;
		}
	}

	/**
	 * Maps the JoinMatchmakingTicket operation to a typed request wrapper.
	 */
	export class JoinMatchmakingTicketOperationRequest extends CustomOperationRequestAbstract<MultiplayerModels.JoinMatchmakingTicketRequestData> {
		protected override operationCode: string = OperationCode.JoinMatchmakingTicket;
		protected override requestType: RequestType = RequestType.Multiplayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new JoinMatchmakingTicketOperationRequest instance.
		 */
		constructor(requestData: MultiplayerModels.JoinMatchmakingTicketRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MultiplayerModels.JoinMatchmakingTicketRequestData;
		}
	}

	/**
	 * Maps the ServerJoinMatchmakingTicket operation to a typed request wrapper.
	 */
	export class ServerJoinMatchmakingTicketOperationRequest extends JoinMatchmakingTicketOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerJoinMatchmakingTicketOperationRequest instance.
		 */
		constructor(requestData: MultiplayerModels.ServerJoinMatchmakingTicketRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MultiplayerModels.ServerJoinMatchmakingTicketRequestData;
		}
	}

	/**
	 * Maps the AdminJoinMatchmakingTicket operation to a typed request wrapper.
	 */
	export class AdminJoinMatchmakingTicketOperationRequest extends JoinMatchmakingTicketOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminJoinMatchmakingTicketOperationRequest instance.
		 */
		constructor(requestData: MultiplayerModels.AdminJoinMatchmakingTicketRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MultiplayerModels.AdminJoinMatchmakingTicketRequestData;
		}
	}

	/**
	 * Maps the ListMatchmakingTicketsForPlayer operation to a typed request wrapper.
	 */
	export class ListMatchmakingTicketsForPlayerOperationRequest extends CustomOperationRequestAbstract<MultiplayerModels.ListMatchmakingTicketsForPlayerRequestData> {
		protected override operationCode: string = OperationCode.ListMatchmakingTicketsForPlayer;
		protected override requestType: RequestType = RequestType.Multiplayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new ListMatchmakingTicketsForPlayerOperationRequest instance.
		 */
		constructor(requestData: MultiplayerModels.ListMatchmakingTicketsForPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MultiplayerModels.ListMatchmakingTicketsForPlayerRequestData;
		}
	}

	/**
	 * Maps the ServerListMatchmakingTicketsForPlayer operation to a typed request wrapper.
	 */
	export class ServerListMatchmakingTicketsForPlayerOperationRequest extends ListMatchmakingTicketsForPlayerOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerListMatchmakingTicketsForPlayerOperationRequest instance.
		 */
		constructor(requestData: MultiplayerModels.ServerListMatchmakingTicketsForPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MultiplayerModels.ServerListMatchmakingTicketsForPlayerRequestData;
		}
	}

	/**
	 * Maps the AdminListMatchmakingTicketsForPlayer operation to a typed request wrapper.
	 */
	export class AdminListMatchmakingTicketsForPlayerOperationRequest extends ListMatchmakingTicketsForPlayerOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminListMatchmakingTicketsForPlayerOperationRequest instance.
		 */
		constructor(requestData: MultiplayerModels.AdminListMatchmakingTicketsForPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MultiplayerModels.AdminListMatchmakingTicketsForPlayerRequestData;
		}
	}

	/**
	 * Maps the GetAllMatch operation to a typed request wrapper.
	 */
	export class GetAllMatchOperationRequest extends CustomOperationRequestAbstract<MultiplayerModels.GetAllMatchRequestData> {
		protected override operationCode: string = OperationCode.GetAllMatch;
		protected override requestType: RequestType = RequestType.Multiplayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetAllMatchOperationRequest instance.
		 */
		constructor(requestData: MultiplayerModels.GetAllMatchRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MultiplayerModels.GetAllMatchRequestData;
		}
	}

	/**
	 * Maps the ServerGetAllMatch operation to a typed request wrapper.
	 */
	export class ServerGetAllMatchOperationRequest extends GetAllMatchOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetAllMatchOperationRequest instance.
		 */
		constructor(requestData: MultiplayerModels.ServerGetAllMatchRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MultiplayerModels.ServerGetAllMatchRequestData;
		}
	}

	/**
	 * Maps the AdminGetAllMatch operation to a typed request wrapper.
	 */
	export class AdminGetAllMatchOperationRequest extends GetAllMatchOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetAllMatchOperationRequest instance.
		 */
		constructor(requestData: MultiplayerModels.AdminGetAllMatchRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MultiplayerModels.AdminGetAllMatchRequestData;
		}
	}

	/**
	 * Maps the GetAllMatchmakingTicket operation to a typed request wrapper.
	 */
	export class GetAllMatchmakingTicketOperationRequest extends CustomOperationRequestAbstract<MultiplayerModels.GetAllMatchmakingTicketRequestData> {
		protected override operationCode: string = OperationCode.GetAllMatchmakingTicket;
		protected override requestType: RequestType = RequestType.Multiplayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetAllMatchmakingTicketOperationRequest instance.
		 */
		constructor(requestData: MultiplayerModels.GetAllMatchmakingTicketRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MultiplayerModels.GetAllMatchmakingTicketRequestData;
		}
	}

	/**
	 * Maps the ServerGetAllMatchmakingTicket operation to a typed request wrapper.
	 */
	export class ServerGetAllMatchmakingTicketOperationRequest extends GetAllMatchmakingTicketOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetAllMatchmakingTicketOperationRequest instance.
		 */
		constructor(requestData: MultiplayerModels.ServerGetAllMatchmakingTicketRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MultiplayerModels.ServerGetAllMatchmakingTicketRequestData;
		}
	}

	/**
	 * Maps the AdminGetAllMatchmakingTicket operation to a typed request wrapper.
	 */
	export class AdminGetAllMatchmakingTicketOperationRequest extends GetAllMatchmakingTicketOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetAllMatchmakingTicketOperationRequest instance.
		 */
		constructor(requestData: MultiplayerModels.AdminGetAllMatchmakingTicketRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MultiplayerModels.AdminGetAllMatchmakingTicketRequestData;
		}
	}

}
