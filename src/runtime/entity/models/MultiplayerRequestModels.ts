import { OperationCode } from "./../../constant/OperationCode";
import { RequestRole } from "./../../constant/enumType/RequestRole";
import { RequestType } from "./../../constant/enumType/RequestType";
import { CustomOperationRequestAbstract } from "./../request/CustomOperationRequest";
import { MultiplayerModels } from "./MultiplayerModels";

export namespace MultiplayerRequestModels {
    export class CancelAllMatchmakingTicketOperationRequest extends CustomOperationRequestAbstract<MultiplayerModels.CancelAllMatchmakingTicketRequestData> {
        protected override operationCode: number = OperationCode.CancelAllMatchmakingTicket;
        protected override operationEncrypted: boolean = true;
        protected override requestType: RequestType = RequestType.Multiplayer;
        protected override requestRole: RequestRole = RequestRole.Client;

        constructor(requestData: MultiplayerModels.CancelAllMatchmakingTicketRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = MultiplayerModels.CancelAllMatchmakingTicketRequestData;
        }
    }

    export class ServerCancelAllMatchmakingTicketOperationRequest extends CancelAllMatchmakingTicketOperationRequest {
        protected override requestRole: RequestRole = RequestRole.Server;

        constructor(requestData: MultiplayerModels.ServerCancelAllMatchmakingTicketRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = MultiplayerModels.ServerCancelAllMatchmakingTicketRequestData;
        }
    }

    export class AdminCancelAllMatchmakingTicketOperationRequest extends CancelAllMatchmakingTicketOperationRequest {
        protected override requestRole: RequestRole = RequestRole.Admin;

        constructor(requestData: MultiplayerModels.AdminCancelAllMatchmakingTicketRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = MultiplayerModels.AdminCancelAllMatchmakingTicketRequestData;
        }
    }

    export class CancelMatchmakingTicketOperationRequest extends CustomOperationRequestAbstract<MultiplayerModels.CancelMatchmakingTicketRequestData> {
        protected override operationCode: number = OperationCode.CancelMatchmakingTicket;
        protected override operationEncrypted: boolean = true;
        protected override requestType: RequestType = RequestType.Multiplayer;
        protected override requestRole: RequestRole = RequestRole.Client;

        constructor(requestData: MultiplayerModels.CancelMatchmakingTicketRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = MultiplayerModels.CancelMatchmakingTicketRequestData;
        }
    }

    export class ServerCancelMatchmakingTicketOperationRequest extends CancelMatchmakingTicketOperationRequest {
        protected override requestRole: RequestRole = RequestRole.Server;

        constructor(requestData: MultiplayerModels.ServerCancelMatchmakingTicketRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = MultiplayerModels.ServerCancelMatchmakingTicketRequestData;
        }
    }

    export class AdminCancelMatchmakingTicketOperationRequest extends CancelMatchmakingTicketOperationRequest {
        protected override requestRole: RequestRole = RequestRole.Admin;

        constructor(requestData: MultiplayerModels.AdminCancelMatchmakingTicketRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = MultiplayerModels.AdminCancelMatchmakingTicketRequestData;
        }
    }

    export class CreateMatchmakingTicketOperationRequest extends CustomOperationRequestAbstract<MultiplayerModels.CreateMatchmakingTicketRequestData> {
        protected override operationCode: number = OperationCode.CreateMatchmakingTicket;
        protected override operationEncrypted: boolean = true;
        protected override requestType: RequestType = RequestType.Multiplayer;
        protected override requestRole: RequestRole = RequestRole.Client;

        constructor(requestData: MultiplayerModels.CreateMatchmakingTicketRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = MultiplayerModels.CreateMatchmakingTicketRequestData;
        }
    }

    export class ServerCreateMatchmakingTicketOperationRequest extends CreateMatchmakingTicketOperationRequest {
        protected override requestRole: RequestRole = RequestRole.Server;

        constructor(requestData: MultiplayerModels.ServerCreateMatchmakingTicketRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = MultiplayerModels.ServerCreateMatchmakingTicketRequestData;
        }
    }

    export class AdminCreateMatchmakingTicketOperationRequest extends CreateMatchmakingTicketOperationRequest {
        protected override requestRole: RequestRole = RequestRole.Admin;

        constructor(requestData: MultiplayerModels.AdminCreateMatchmakingTicketRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = MultiplayerModels.AdminCreateMatchmakingTicketRequestData;
        }
    }

    export class GetMatchmakingTicketOperationRequest extends CustomOperationRequestAbstract<MultiplayerModels.GetMatchmakingTicketRequestData> {
        protected override operationCode: number = OperationCode.GetMatchmakingTicket;
        protected override operationEncrypted: boolean = true;
        protected override requestType: RequestType = RequestType.Multiplayer;
        protected override requestRole: RequestRole = RequestRole.Client;

        constructor(requestData: MultiplayerModels.GetMatchmakingTicketRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = MultiplayerModels.GetMatchmakingTicketRequestData;
        }
    }

    export class ServerGetMatchmakingTicketOperationRequest extends GetMatchmakingTicketOperationRequest {
        protected override requestRole: RequestRole = RequestRole.Server;

        constructor(requestData: MultiplayerModels.ServerGetMatchmakingTicketRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = MultiplayerModels.ServerGetMatchmakingTicketRequestData;
        }
    }

    export class AdminGetMatchmakingTicketOperationRequest extends GetMatchmakingTicketOperationRequest {
        protected override requestRole: RequestRole = RequestRole.Admin;

        constructor(requestData: MultiplayerModels.AdminGetMatchmakingTicketRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = MultiplayerModels.AdminGetMatchmakingTicketRequestData;
        }
    }

    export class GetMatchOperationRequest extends CustomOperationRequestAbstract<MultiplayerModels.GetMatchRequestData> {
        protected override operationCode: number = OperationCode.GetMatch;
        protected override operationEncrypted: boolean = true;
        protected override requestType: RequestType = RequestType.Multiplayer;
        protected override requestRole: RequestRole = RequestRole.Client;

        constructor(requestData: MultiplayerModels.GetMatchRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = MultiplayerModels.GetMatchRequestData;
        }
    }

    export class ServerGetMatchOperationRequest extends GetMatchOperationRequest {
        protected override requestRole: RequestRole = RequestRole.Server;

        constructor(requestData: MultiplayerModels.ServerGetMatchRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = MultiplayerModels.ServerGetMatchRequestData;
        }
    }

    export class AdminGetMatchOperationRequest extends GetMatchOperationRequest {
        protected override requestRole: RequestRole = RequestRole.Admin;

        constructor(requestData: MultiplayerModels.AdminGetMatchRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = MultiplayerModels.AdminGetMatchRequestData;
        }
    }

    export class GetQueueStatisticsOperationRequest extends CustomOperationRequestAbstract<MultiplayerModels.GetQueueStatisticsRequestData> {
        protected override operationCode: number = OperationCode.GetQueueStatistics;
        protected override operationEncrypted: boolean = true;
        protected override requestType: RequestType = RequestType.Multiplayer;
        protected override requestRole: RequestRole = RequestRole.Client;

        constructor(requestData: MultiplayerModels.GetQueueStatisticsRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = MultiplayerModels.GetQueueStatisticsRequestData;
        }
    }

    export class ServerGetQueueStatisticsOperationRequest extends GetQueueStatisticsOperationRequest {
        protected override requestRole: RequestRole = RequestRole.Server;

        constructor(requestData: MultiplayerModels.ServerGetQueueStatisticsRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = MultiplayerModels.ServerGetQueueStatisticsRequestData;
        }
    }

    export class AdminGetQueueStatisticsOperationRequest extends GetQueueStatisticsOperationRequest {
        protected override requestRole: RequestRole = RequestRole.Admin;

        constructor(requestData: MultiplayerModels.AdminGetQueueStatisticsRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = MultiplayerModels.AdminGetQueueStatisticsRequestData;
        }
    }

    export class JoinMatchmakingTicketOperationRequest extends CustomOperationRequestAbstract<MultiplayerModels.JoinMatchmakingTicketRequestData> {
        protected override operationCode: number = OperationCode.JoinMatchmakingTicket;
        protected override operationEncrypted: boolean = true;
        protected override requestType: RequestType = RequestType.Multiplayer;
        protected override requestRole: RequestRole = RequestRole.Client;

        constructor(requestData: MultiplayerModels.JoinMatchmakingTicketRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = MultiplayerModels.JoinMatchmakingTicketRequestData;
        }
    }

    export class ServerJoinMatchmakingTicketOperationRequest extends JoinMatchmakingTicketOperationRequest {
        protected override requestRole: RequestRole = RequestRole.Server;

        constructor(requestData: MultiplayerModels.ServerJoinMatchmakingTicketRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = MultiplayerModels.ServerJoinMatchmakingTicketRequestData;
        }
    }

    export class AdminJoinMatchmakingTicketOperationRequest extends JoinMatchmakingTicketOperationRequest {
        protected override requestRole: RequestRole = RequestRole.Admin;

        constructor(requestData: MultiplayerModels.AdminJoinMatchmakingTicketRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = MultiplayerModels.AdminJoinMatchmakingTicketRequestData;
        }
    }

    export class ListMatchmakingTicketsForPlayerOperationRequest extends CustomOperationRequestAbstract<MultiplayerModels.ListMatchmakingTicketsForPlayerRequestData> {
        protected override operationCode: number = OperationCode.ListMatchmakingTicketsForPlayer;
        protected override operationEncrypted: boolean = true;
        protected override requestType: RequestType = RequestType.Multiplayer;
        protected override requestRole: RequestRole = RequestRole.Client;

        constructor(requestData: MultiplayerModels.ListMatchmakingTicketsForPlayerRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = MultiplayerModels.ListMatchmakingTicketsForPlayerRequestData;
        }
    }

    export class ServerListMatchmakingTicketsForPlayerOperationRequest extends ListMatchmakingTicketsForPlayerOperationRequest {
        protected override requestRole: RequestRole = RequestRole.Server;

        constructor(requestData: MultiplayerModels.ServerListMatchmakingTicketsForPlayerRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = MultiplayerModels.ServerListMatchmakingTicketsForPlayerRequestData;
        }
    }

    export class AdminListMatchmakingTicketsForPlayerOperationRequest extends ListMatchmakingTicketsForPlayerOperationRequest {
        protected override requestRole: RequestRole = RequestRole.Admin;

        constructor(requestData: MultiplayerModels.AdminListMatchmakingTicketsForPlayerRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = MultiplayerModels.AdminListMatchmakingTicketsForPlayerRequestData;
        }
    }

    export class GetAllMatchOperationRequest extends CustomOperationRequestAbstract<MultiplayerModels.GetAllMatchRequestData> {
        protected override operationCode: number = OperationCode.GetAllMatch;
        protected override operationEncrypted: boolean = true;
        protected override requestType: RequestType = RequestType.Multiplayer;
        protected override requestRole: RequestRole = RequestRole.Client;

        constructor(requestData: MultiplayerModels.GetAllMatchRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = MultiplayerModels.GetAllMatchRequestData;
        }
    }

    export class ServerGetAllMatchOperationRequest extends GetAllMatchOperationRequest {
        protected override requestRole: RequestRole = RequestRole.Server;

        constructor(requestData: MultiplayerModels.ServerGetAllMatchRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = MultiplayerModels.ServerGetAllMatchRequestData;
        }
    }

    export class AdminGetAllMatchOperationRequest extends GetAllMatchOperationRequest {
        protected override requestRole: RequestRole = RequestRole.Admin;

        constructor(requestData: MultiplayerModels.AdminGetAllMatchRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = MultiplayerModels.AdminGetAllMatchRequestData;
        }
    }

    export class GetAllMatchmakingTicketOperationRequest extends CustomOperationRequestAbstract<MultiplayerModels.GetAllMatchmakingTicketRequestData> {
        protected override operationCode: number = OperationCode.GetAllMatchmakingTicket;
        protected override operationEncrypted: boolean = true;
        protected override requestType: RequestType = RequestType.Multiplayer;
        protected override requestRole: RequestRole = RequestRole.Client;

        constructor(requestData: MultiplayerModels.GetAllMatchmakingTicketRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = MultiplayerModels.GetAllMatchmakingTicketRequestData;
        }
    }

    export class ServerGetAllMatchmakingTicketOperationRequest extends GetAllMatchmakingTicketOperationRequest {
        protected override requestRole: RequestRole = RequestRole.Server;

        constructor(requestData: MultiplayerModels.ServerGetAllMatchmakingTicketRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = MultiplayerModels.ServerGetAllMatchmakingTicketRequestData;
        }
    }

    export class AdminGetAllMatchmakingTicketOperationRequest extends GetAllMatchmakingTicketOperationRequest {
        protected override requestRole: RequestRole = RequestRole.Admin;

        constructor(requestData: MultiplayerModels.AdminGetAllMatchmakingTicketRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = MultiplayerModels.AdminGetAllMatchmakingTicketRequestData;
        }
    }

}
