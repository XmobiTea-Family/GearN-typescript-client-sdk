import { CustomOperationResponseAbstract } from "./../response/CustomOperationResponse";
import { MultiplayerModels } from "./MultiplayerModels";

/**
 * Groups typed operation-response wrappers for `RequestType.Multiplayer`.
 * Ticket and match polling flows consume these wrappers sequentially until a `matchId` is available.
 */
export namespace MultiplayerResponseModels {
	/**
	 * Maps the CancelAllMatchmakingTicket operation to a typed response wrapper.
	 */
	export class CancelAllMatchmakingTicketOperationResponse extends CustomOperationResponseAbstract<MultiplayerModels.CancelAllMatchmakingTicketResponseData> {

		/**
		 * Creates a new CancelAllMatchmakingTicketOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MultiplayerModels.CancelAllMatchmakingTicketResponseData;
		}
	}

	/**
	 * Maps the CancelMatchmakingTicket operation to a typed response wrapper.
	 */
	export class CancelMatchmakingTicketOperationResponse extends CustomOperationResponseAbstract<MultiplayerModels.EmptyResponseData> {

		/**
		 * Creates a new CancelMatchmakingTicketOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MultiplayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the CreateMatchmakingTicket operation to a typed response wrapper.
	 */
	export class CreateMatchmakingTicketOperationResponse extends CustomOperationResponseAbstract<MultiplayerModels.CreateMatchmakingTicketResponseData> {

		/**
		 * Creates a new CreateMatchmakingTicketOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MultiplayerModels.CreateMatchmakingTicketResponseData;
		}
	}

	/**
	 * Maps the GetMatchmakingTicket operation to a typed response wrapper.
	 */
	export class GetMatchmakingTicketOperationResponse extends CustomOperationResponseAbstract<MultiplayerModels.GetMatchmakingTicketResponseData> {

		/**
		 * Creates a new GetMatchmakingTicketOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MultiplayerModels.GetMatchmakingTicketResponseData;
		}
	}

	/**
	 * Maps the GetMatch operation to a typed response wrapper.
	 */
	export class GetMatchOperationResponse extends CustomOperationResponseAbstract<MultiplayerModels.GetMatchResponseData> {

		/**
		 * Creates a new GetMatchOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MultiplayerModels.GetMatchResponseData;
		}
	}

	/**
	 * Maps the GetQueueStatistics operation to a typed response wrapper.
	 */
	export class GetQueueStatisticsOperationResponse extends CustomOperationResponseAbstract<MultiplayerModels.GetQueueStatisticsResponseData> {

		/**
		 * Creates a new GetQueueStatisticsOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MultiplayerModels.GetQueueStatisticsResponseData;
		}
	}

	/**
	 * Maps the JoinMatchmakingTicket operation to a typed response wrapper.
	 */
	export class JoinMatchmakingTicketOperationResponse extends CustomOperationResponseAbstract<MultiplayerModels.EmptyResponseData> {

		/**
		 * Creates a new JoinMatchmakingTicketOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MultiplayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the ListMatchmakingTicketsForPlayer operation to a typed response wrapper.
	 */
	export class ListMatchmakingTicketsForPlayerOperationResponse extends CustomOperationResponseAbstract<MultiplayerModels.ListMatchmakingTicketsForPlayerResponseData> {

		/**
		 * Creates a new ListMatchmakingTicketsForPlayerOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MultiplayerModels.ListMatchmakingTicketsForPlayerResponseData;
		}
	}

	/**
	 * Maps the GetAllMatch operation to a typed response wrapper.
	 */
	export class GetAllMatchOperationResponse extends CustomOperationResponseAbstract<MultiplayerModels.GetAllMatchResponseData> {

		/**
		 * Creates a new GetAllMatchOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MultiplayerModels.GetAllMatchResponseData;
		}
	}

	/**
	 * Maps the GetAllMatchmakingTicket operation to a typed response wrapper.
	 */
	export class GetAllMatchmakingTicketOperationResponse extends CustomOperationResponseAbstract<MultiplayerModels.GetAllMatchmakingTicketResponseData> {

		/**
		 * Creates a new GetAllMatchmakingTicketOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MultiplayerModels.GetAllMatchmakingTicketResponseData;
		}
	}

}
