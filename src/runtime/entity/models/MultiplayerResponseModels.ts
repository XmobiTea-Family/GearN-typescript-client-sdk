import { CustomOperationResponseAbstract } from "./../response/CustomOperationResponse";
import { MultiplayerModels } from "./MultiplayerModels";

export namespace MultiplayerResponseModels {
	export class CancelAllMatchmakingTicketOperationResponse extends CustomOperationResponseAbstract<MultiplayerModels.CancelAllMatchmakingTicketResponseData> {

		constructor() {
			super();
			this.responseDataCls = MultiplayerModels.CancelAllMatchmakingTicketResponseData;
		}
	}

	export class CancelMatchmakingTicketOperationResponse extends CustomOperationResponseAbstract<MultiplayerModels.EmptyResponseData> {

		constructor() {
			super();
			this.responseDataCls = MultiplayerModels.EmptyResponseData;
		}
	}

	export class CreateMatchmakingTicketOperationResponse extends CustomOperationResponseAbstract<MultiplayerModels.CreateMatchmakingTicketResponseData> {

		constructor() {
			super();
			this.responseDataCls = MultiplayerModels.CreateMatchmakingTicketResponseData;
		}
	}

	export class GetMatchmakingTicketOperationResponse extends CustomOperationResponseAbstract<MultiplayerModels.GetMatchmakingTicketResponseData> {

		constructor() {
			super();
			this.responseDataCls = MultiplayerModels.GetMatchmakingTicketResponseData;
		}
	}

	export class GetMatchOperationResponse extends CustomOperationResponseAbstract<MultiplayerModels.GetMatchResponseData> {

		constructor() {
			super();
			this.responseDataCls = MultiplayerModels.GetMatchResponseData;
		}
	}

	export class GetQueueStatisticsOperationResponse extends CustomOperationResponseAbstract<MultiplayerModels.GetQueueStatisticsResponseData> {

		constructor() {
			super();
			this.responseDataCls = MultiplayerModels.GetQueueStatisticsResponseData;
		}
	}

	export class JoinMatchmakingTicketOperationResponse extends CustomOperationResponseAbstract<MultiplayerModels.EmptyResponseData> {

		constructor() {
			super();
			this.responseDataCls = MultiplayerModels.EmptyResponseData;
		}
	}

	export class ListMatchmakingTicketsForPlayerOperationResponse extends CustomOperationResponseAbstract<MultiplayerModels.ListMatchmakingTicketsForPlayerResponseData> {

		constructor() {
			super();
			this.responseDataCls = MultiplayerModels.ListMatchmakingTicketsForPlayerResponseData;
		}
	}

	export class GetAllMatchOperationResponse extends CustomOperationResponseAbstract<MultiplayerModels.GetAllMatchResponseData> {

		constructor() {
			super();
			this.responseDataCls = MultiplayerModels.GetAllMatchResponseData;
		}
	}

	export class GetAllMatchmakingTicketOperationResponse extends CustomOperationResponseAbstract<MultiplayerModels.GetAllMatchmakingTicketResponseData> {

		constructor() {
			super();
			this.responseDataCls = MultiplayerModels.GetAllMatchmakingTicketResponseData;
		}
	}

}
