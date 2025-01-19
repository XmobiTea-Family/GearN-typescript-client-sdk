import { OperationCode } from "./../../constant/OperationCode";
import { RequestRole } from "./../../constant/enumType/RequestRole";
import { RequestType } from "./../../constant/enumType/RequestType";
import { CustomOperationRequestAbstract } from "./../request/CustomOperationRequest";
import { GamePlayerModels } from "./GamePlayerModels";

export namespace GamePlayerRequestModels {
	export class AddPlayerFriendOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.AddPlayerFriendRequestData> {
		protected override operationCode: number = OperationCode.AddPlayerFriend;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.AddPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AddPlayerFriendRequestData;
		}
	}

	export class ServerAddPlayerFriendOperationRequest extends AddPlayerFriendOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerAddPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerAddPlayerFriendRequestData;
		}
	}

	export class AdminAddPlayerFriendOperationRequest extends AddPlayerFriendOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminAddPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminAddPlayerFriendRequestData;
		}
	}

	export class AddSegmentOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.AddSegmentRequestData> {
		protected override operationCode: number = OperationCode.AddSegment;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.AddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AddSegmentRequestData;
		}
	}

	export class ServerAddSegmentOperationRequest extends AddSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerAddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerAddSegmentRequestData;
		}
	}

	export class AdminAddSegmentOperationRequest extends AddSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminAddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminAddSegmentRequestData;
		}
	}

	export class GetAvatarOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetAvatarRequestData> {
		protected override operationCode: number = OperationCode.GetAvatar;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetAvatarRequestData;
		}
	}

	export class ServerGetAvatarOperationRequest extends GetAvatarOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetAvatarRequestData;
		}
	}

	export class AdminGetAvatarOperationRequest extends GetAvatarOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetAvatarRequestData;
		}
	}

	export class GetCountryCodeOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetCountryCodeRequestData> {
		protected override operationCode: number = OperationCode.GetCountryCode;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetCountryCodeRequestData;
		}
	}

	export class ServerGetCountryCodeOperationRequest extends GetCountryCodeOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetCountryCodeRequestData;
		}
	}

	export class AdminGetCountryCodeOperationRequest extends GetCountryCodeOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetCountryCodeRequestData;
		}
	}

	export class GetCustomDataOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetCustomDataRequestData> {
		protected override operationCode: number = OperationCode.GetCustomData;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetCustomDataRequestData;
		}
	}

	export class ServerGetCustomDataOperationRequest extends GetCustomDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetCustomDataRequestData;
		}
	}

	export class AdminGetCustomDataOperationRequest extends GetCustomDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetCustomDataRequestData;
		}
	}

	export class GetDisplayNameOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetDisplayNameRequestData> {
		protected override operationCode: number = OperationCode.GetDisplayName;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetDisplayNameRequestData;
		}
	}

	export class ServerGetDisplayNameOperationRequest extends GetDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetDisplayNameRequestData;
		}
	}

	export class AdminGetDisplayNameOperationRequest extends GetDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetDisplayNameRequestData;
		}
	}

	export class GetFriendStatisticsLeaderboardAroundPlayerOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetFriendStatisticsLeaderboardAroundPlayerRequestData> {
		protected override operationCode: number = OperationCode.GetFriendStatisticsLeaderboardAroundPlayer;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetFriendStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetFriendStatisticsLeaderboardAroundPlayerRequestData;
		}
	}

	export class ServerGetFriendStatisticsLeaderboardAroundPlayerOperationRequest extends GetFriendStatisticsLeaderboardAroundPlayerOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGetFriendStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetFriendStatisticsLeaderboardAroundPlayerRequestData;
		}
	}

	export class AdminGetFriendStatisticsLeaderboardAroundPlayerOperationRequest extends GetFriendStatisticsLeaderboardAroundPlayerOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGetFriendStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetFriendStatisticsLeaderboardAroundPlayerRequestData;
		}
	}

	export class GetFriendStatisticsLeaderboardOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetFriendStatisticsLeaderboardRequestData> {
		protected override operationCode: number = OperationCode.GetFriendStatisticsLeaderboard;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetFriendStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetFriendStatisticsLeaderboardRequestData;
		}
	}

	export class ServerGetFriendStatisticsLeaderboardOperationRequest extends GetFriendStatisticsLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGetFriendStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetFriendStatisticsLeaderboardRequestData;
		}
	}

	export class AdminGetFriendStatisticsLeaderboardOperationRequest extends GetFriendStatisticsLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGetFriendStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetFriendStatisticsLeaderboardRequestData;
		}
	}

	export class GetIpAddressCreateOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetIpAddressCreateRequestData> {
		protected override operationCode: number = OperationCode.GetIpAddressCreate;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetIpAddressCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetIpAddressCreateRequestData;
		}
	}

	export class ServerGetIpAddressCreateOperationRequest extends GetIpAddressCreateOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGetIpAddressCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetIpAddressCreateRequestData;
		}
	}

	export class AdminGetIpAddressCreateOperationRequest extends GetIpAddressCreateOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGetIpAddressCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetIpAddressCreateRequestData;
		}
	}

	export class GetOnlineStatusOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetOnlineStatusRequestData> {
		protected override operationCode: number = OperationCode.GetOnlineStatus;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetOnlineStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetOnlineStatusRequestData;
		}
	}

	export class ServerGetOnlineStatusOperationRequest extends GetOnlineStatusOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGetOnlineStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetOnlineStatusRequestData;
		}
	}

	export class AdminGetOnlineStatusOperationRequest extends GetOnlineStatusOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGetOnlineStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetOnlineStatusRequestData;
		}
	}

	export class GetPlayerBanOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayerBanRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerBan;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetPlayerBanRequestData;
		}
	}

	export class ServerGetPlayerBanOperationRequest extends GetPlayerBanOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetPlayerBanRequestData;
		}
	}

	export class AdminGetPlayerBanOperationRequest extends GetPlayerBanOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetPlayerBanRequestData;
		}
	}

	export class GetPlayerCharacterOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayerCharacterRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerCharacter;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetPlayerCharacterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetPlayerCharacterRequestData;
		}
	}

	export class ServerGetPlayerCharacterOperationRequest extends GetPlayerCharacterOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGetPlayerCharacterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetPlayerCharacterRequestData;
		}
	}

	export class AdminGetPlayerCharacterOperationRequest extends GetPlayerCharacterOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGetPlayerCharacterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetPlayerCharacterRequestData;
		}
	}

	export class GetPlayerCurrencyOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayerCurrencyRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerCurrency;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetPlayerCurrencyRequestData;
		}
	}

	export class ServerGetPlayerCurrencyOperationRequest extends GetPlayerCurrencyOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetPlayerCurrencyRequestData;
		}
	}

	export class AdminGetPlayerCurrencyOperationRequest extends GetPlayerCurrencyOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetPlayerCurrencyRequestData;
		}
	}

	export class GetPlayerDataOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayerDataRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerData;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetPlayerDataRequestData;
		}
	}

	export class ServerGetPlayerDataOperationRequest extends GetPlayerDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetPlayerDataRequestData;
		}
	}

	export class AdminGetPlayerDataOperationRequest extends GetPlayerDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetPlayerDataRequestData;
		}
	}

	export class GetPlayerFriendOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayerFriendRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerFriend;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetPlayerFriendRequestData;
		}
	}

	export class ServerGetPlayerFriendOperationRequest extends GetPlayerFriendOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGetPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetPlayerFriendRequestData;
		}
	}

	export class AdminGetPlayerFriendOperationRequest extends GetPlayerFriendOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGetPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetPlayerFriendRequestData;
		}
	}

	export class GetPlayerGroupOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayerGroupRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerGroup;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetPlayerGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetPlayerGroupRequestData;
		}
	}

	export class ServerGetPlayerGroupOperationRequest extends GetPlayerGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGetPlayerGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetPlayerGroupRequestData;
		}
	}

	export class AdminGetPlayerGroupOperationRequest extends GetPlayerGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGetPlayerGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetPlayerGroupRequestData;
		}
	}

	export class GetPlayerInformationOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayerInformationRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerInformation;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetPlayerInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetPlayerInformationRequestData;
		}
	}

	export class ServerGetPlayerInformationOperationRequest extends GetPlayerInformationOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGetPlayerInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetPlayerInformationRequestData;
		}
	}

	export class AdminGetPlayerInformationOperationRequest extends GetPlayerInformationOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGetPlayerInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetPlayerInformationRequestData;
		}
	}

	export class GetPlayerInventoryOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayerInventoryRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerInventory;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetPlayerInventoryRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetPlayerInventoryRequestData;
		}
	}

	export class ServerGetPlayerInventoryOperationRequest extends GetPlayerInventoryOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGetPlayerInventoryRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetPlayerInventoryRequestData;
		}
	}

	export class AdminGetPlayerInventoryOperationRequest extends GetPlayerInventoryOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGetPlayerInventoryRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetPlayerInventoryRequestData;
		}
	}

	export class GetPlayerStatisticsOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayerStatisticsRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerStatistics;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetPlayerStatisticsRequestData;
		}
	}

	export class ServerGetPlayerStatisticsOperationRequest extends GetPlayerStatisticsOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetPlayerStatisticsRequestData;
		}
	}

	export class AdminGetPlayerStatisticsOperationRequest extends GetPlayerStatisticsOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetPlayerStatisticsRequestData;
		}
	}

	export class GetPlayersWithDisplayNameOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayersWithDisplayNameRequestData> {
		protected override operationCode: number = OperationCode.GetPlayersWithDisplayName;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetPlayersWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetPlayersWithDisplayNameRequestData;
		}
	}

	export class ServerGetPlayersWithDisplayNameOperationRequest extends GetPlayersWithDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGetPlayersWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetPlayersWithDisplayNameRequestData;
		}
	}

	export class AdminGetPlayersWithDisplayNameOperationRequest extends GetPlayersWithDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGetPlayersWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetPlayersWithDisplayNameRequestData;
		}
	}

	export class GetPlayersWithSegmentOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayersWithSegmentRequestData> {
		protected override operationCode: number = OperationCode.GetPlayersWithSegment;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetPlayersWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetPlayersWithSegmentRequestData;
		}
	}

	export class ServerGetPlayersWithSegmentOperationRequest extends GetPlayersWithSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGetPlayersWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetPlayersWithSegmentRequestData;
		}
	}

	export class AdminGetPlayersWithSegmentOperationRequest extends GetPlayersWithSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGetPlayersWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetPlayersWithSegmentRequestData;
		}
	}

	export class GetPlayersWithTagOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayersWithTagRequestData> {
		protected override operationCode: number = OperationCode.GetPlayersWithTag;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetPlayersWithTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetPlayersWithTagRequestData;
		}
	}

	export class ServerGetPlayersWithTagOperationRequest extends GetPlayersWithTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGetPlayersWithTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetPlayersWithTagRequestData;
		}
	}

	export class AdminGetPlayersWithTagOperationRequest extends GetPlayersWithTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGetPlayersWithTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetPlayersWithTagRequestData;
		}
	}

	export class GetSegmentOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetSegmentRequestData> {
		protected override operationCode: number = OperationCode.GetSegment;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetSegmentRequestData;
		}
	}

	export class ServerGetSegmentOperationRequest extends GetSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetSegmentRequestData;
		}
	}

	export class AdminGetSegmentOperationRequest extends GetSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetSegmentRequestData;
		}
	}

	export class GetStatisticsLeaderboardAroundPlayerOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData> {
		protected override operationCode: number = OperationCode.GetStatisticsLeaderboardAroundPlayer;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData;
		}
	}

	export class ServerGetStatisticsLeaderboardAroundPlayerOperationRequest extends GetStatisticsLeaderboardAroundPlayerOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGetStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetStatisticsLeaderboardAroundPlayerRequestData;
		}
	}

	export class AdminGetStatisticsLeaderboardAroundPlayerOperationRequest extends GetStatisticsLeaderboardAroundPlayerOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGetStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetStatisticsLeaderboardAroundPlayerRequestData;
		}
	}

	export class GetStatisticsLeaderboardOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetStatisticsLeaderboardRequestData> {
		protected override operationCode: number = OperationCode.GetStatisticsLeaderboard;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetStatisticsLeaderboardRequestData;
		}
	}

	export class ServerGetStatisticsLeaderboardOperationRequest extends GetStatisticsLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetStatisticsLeaderboardRequestData;
		}
	}

	export class AdminGetStatisticsLeaderboardOperationRequest extends GetStatisticsLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetStatisticsLeaderboardRequestData;
		}
	}

	export class GetTagOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetTagRequestData> {
		protected override operationCode: number = OperationCode.GetTag;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetTagRequestData;
		}
	}

	export class ServerGetTagOperationRequest extends GetTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetTagRequestData;
		}
	}

	export class AdminGetTagOperationRequest extends GetTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetTagRequestData;
		}
	}

	export class GetTsCreateOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetTsCreateRequestData> {
		protected override operationCode: number = OperationCode.GetTsCreate;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetTsCreateRequestData;
		}
	}

	export class ServerGetTsCreateOperationRequest extends GetTsCreateOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetTsCreateRequestData;
		}
	}

	export class AdminGetTsCreateOperationRequest extends GetTsCreateOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetTsCreateRequestData;
		}
	}

	export class GetTsLastLoginOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetTsLastLoginRequestData> {
		protected override operationCode: number = OperationCode.GetTsLastLogin;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetTsLastLoginRequestData;
		}
	}

	export class ServerGetTsLastLoginOperationRequest extends GetTsLastLoginOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetTsLastLoginRequestData;
		}
	}

	export class AdminGetTsLastLoginOperationRequest extends GetTsLastLoginOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetTsLastLoginRequestData;
		}
	}

	export class GrantGroupOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GrantGroupRequestData> {
		protected override operationCode: number = OperationCode.GrantGroup;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GrantGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GrantGroupRequestData;
		}
	}

	export class ServerGrantGroupOperationRequest extends GrantGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGrantGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGrantGroupRequestData;
		}
	}

	export class AdminGrantGroupOperationRequest extends GrantGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGrantGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGrantGroupRequestData;
		}
	}

	export class GrantPlayerCharacterOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GrantPlayerCharacterRequestData> {
		protected override operationCode: number = OperationCode.GrantPlayerCharacter;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GrantPlayerCharacterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GrantPlayerCharacterRequestData;
		}
	}

	export class ServerGrantPlayerCharacterOperationRequest extends GrantPlayerCharacterOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGrantPlayerCharacterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGrantPlayerCharacterRequestData;
		}
	}

	export class AdminGrantPlayerCharacterOperationRequest extends GrantPlayerCharacterOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGrantPlayerCharacterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGrantPlayerCharacterRequestData;
		}
	}

	export class GrantPlayerItemOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GrantPlayerItemRequestData> {
		protected override operationCode: number = OperationCode.GrantPlayerItem;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GrantPlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GrantPlayerItemRequestData;
		}
	}

	export class ServerGrantPlayerItemOperationRequest extends GrantPlayerItemOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGrantPlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGrantPlayerItemRequestData;
		}
	}

	export class AdminGrantPlayerItemOperationRequest extends GrantPlayerItemOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGrantPlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGrantPlayerItemRequestData;
		}
	}

	export class JoinGroupOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.JoinGroupRequestData> {
		protected override operationCode: number = OperationCode.JoinGroup;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.JoinGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.JoinGroupRequestData;
		}
	}

	export class ServerJoinGroupOperationRequest extends JoinGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerJoinGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerJoinGroupRequestData;
		}
	}

	export class AdminJoinGroupOperationRequest extends JoinGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminJoinGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminJoinGroupRequestData;
		}
	}

	export class LeaveGroupOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.LeaveGroupRequestData> {
		protected override operationCode: number = OperationCode.LeaveGroup;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.LeaveGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.LeaveGroupRequestData;
		}
	}

	export class ServerLeaveGroupOperationRequest extends LeaveGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerLeaveGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerLeaveGroupRequestData;
		}
	}

	export class AdminLeaveGroupOperationRequest extends LeaveGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminLeaveGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminLeaveGroupRequestData;
		}
	}

	export class RemovePlayerCharacterOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.RemovePlayerCharacterRequestData> {
		protected override operationCode: number = OperationCode.RemovePlayerCharacter;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.RemovePlayerCharacterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.RemovePlayerCharacterRequestData;
		}
	}

	export class ServerRemovePlayerCharacterOperationRequest extends RemovePlayerCharacterOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerRemovePlayerCharacterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerRemovePlayerCharacterRequestData;
		}
	}

	export class AdminRemovePlayerCharacterOperationRequest extends RemovePlayerCharacterOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminRemovePlayerCharacterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminRemovePlayerCharacterRequestData;
		}
	}

	export class RemovePlayerFriendOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.RemovePlayerFriendRequestData> {
		protected override operationCode: number = OperationCode.RemovePlayerFriend;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.RemovePlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.RemovePlayerFriendRequestData;
		}
	}

	export class ServerRemovePlayerFriendOperationRequest extends RemovePlayerFriendOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerRemovePlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerRemovePlayerFriendRequestData;
		}
	}

	export class AdminRemovePlayerFriendOperationRequest extends RemovePlayerFriendOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminRemovePlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminRemovePlayerFriendRequestData;
		}
	}

	export class RemovePlayerItemOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.RemovePlayerItemRequestData> {
		protected override operationCode: number = OperationCode.RemovePlayerItem;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.RemovePlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.RemovePlayerItemRequestData;
		}
	}

	export class ServerRemovePlayerItemOperationRequest extends RemovePlayerItemOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerRemovePlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerRemovePlayerItemRequestData;
		}
	}

	export class AdminRemovePlayerItemOperationRequest extends RemovePlayerItemOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminRemovePlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminRemovePlayerItemRequestData;
		}
	}

	export class RemoveSegmentOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.RemoveSegmentRequestData> {
		protected override operationCode: number = OperationCode.RemoveSegment;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.RemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.RemoveSegmentRequestData;
		}
	}

	export class ServerRemoveSegmentOperationRequest extends RemoveSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerRemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerRemoveSegmentRequestData;
		}
	}

	export class AdminRemoveSegmentOperationRequest extends RemoveSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminRemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminRemoveSegmentRequestData;
		}
	}

	export class RemoveTagOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.RemoveTagRequestData> {
		protected override operationCode: number = OperationCode.RemoveTag;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.RemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.RemoveTagRequestData;
		}
	}

	export class ServerRemoveTagOperationRequest extends RemoveTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerRemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerRemoveTagRequestData;
		}
	}

	export class AdminRemoveTagOperationRequest extends RemoveTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminRemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminRemoveTagRequestData;
		}
	}

	export class SetAvatarOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.SetAvatarRequestData> {
		protected override operationCode: number = OperationCode.SetAvatar;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.SetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.SetAvatarRequestData;
		}
	}

	export class ServerSetAvatarOperationRequest extends SetAvatarOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerSetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerSetAvatarRequestData;
		}
	}

	export class AdminSetAvatarOperationRequest extends SetAvatarOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminSetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminSetAvatarRequestData;
		}
	}

	export class SetCountryCodeOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.SetCountryCodeRequestData> {
		protected override operationCode: number = OperationCode.SetCountryCode;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.SetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.SetCountryCodeRequestData;
		}
	}

	export class ServerSetCountryCodeOperationRequest extends SetCountryCodeOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerSetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerSetCountryCodeRequestData;
		}
	}

	export class AdminSetCountryCodeOperationRequest extends SetCountryCodeOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminSetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminSetCountryCodeRequestData;
		}
	}

	export class SetCustomDataOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.SetCustomDataRequestData> {
		protected override operationCode: number = OperationCode.SetCustomData;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.SetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.SetCustomDataRequestData;
		}
	}

	export class ServerSetCustomDataOperationRequest extends SetCustomDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerSetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerSetCustomDataRequestData;
		}
	}

	export class AdminSetCustomDataOperationRequest extends SetCustomDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminSetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminSetCustomDataRequestData;
		}
	}

	export class SetDisplayNameOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.SetDisplayNameRequestData> {
		protected override operationCode: number = OperationCode.SetDisplayName;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.SetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.SetDisplayNameRequestData;
		}
	}

	export class ServerSetDisplayNameOperationRequest extends SetDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerSetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerSetDisplayNameRequestData;
		}
	}

	export class AdminSetDisplayNameOperationRequest extends SetDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminSetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminSetDisplayNameRequestData;
		}
	}

	export class SetPlayerBanOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.SetPlayerBanRequestData> {
		protected override operationCode: number = OperationCode.SetPlayerBan;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.SetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.SetPlayerBanRequestData;
		}
	}

	export class ServerSetPlayerBanOperationRequest extends SetPlayerBanOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerSetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerSetPlayerBanRequestData;
		}
	}

	export class AdminSetPlayerBanOperationRequest extends SetPlayerBanOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminSetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminSetPlayerBanRequestData;
		}
	}

	export class SetPlayerCurrencyOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.SetPlayerCurrencyRequestData> {
		protected override operationCode: number = OperationCode.SetPlayerCurrency;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.SetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.SetPlayerCurrencyRequestData;
		}
	}

	export class ServerSetPlayerCurrencyOperationRequest extends SetPlayerCurrencyOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerSetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerSetPlayerCurrencyRequestData;
		}
	}

	export class AdminSetPlayerCurrencyOperationRequest extends SetPlayerCurrencyOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminSetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminSetPlayerCurrencyRequestData;
		}
	}

	export class SetPlayerDataOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.SetPlayerDataRequestData> {
		protected override operationCode: number = OperationCode.SetPlayerData;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.SetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.SetPlayerDataRequestData;
		}
	}

	export class ServerSetPlayerDataOperationRequest extends SetPlayerDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerSetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerSetPlayerDataRequestData;
		}
	}

	export class AdminSetPlayerDataOperationRequest extends SetPlayerDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminSetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminSetPlayerDataRequestData;
		}
	}

	export class SetPlayerStatisticsOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.SetPlayerStatisticsRequestData> {
		protected override operationCode: number = OperationCode.SetPlayerStatistics;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.SetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.SetPlayerStatisticsRequestData;
		}
	}

	export class ServerSetPlayerStatisticsOperationRequest extends SetPlayerStatisticsOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerSetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerSetPlayerStatisticsRequestData;
		}
	}

	export class AdminSetPlayerStatisticsOperationRequest extends SetPlayerStatisticsOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminSetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminSetPlayerStatisticsRequestData;
		}
	}

	export class SetTagOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.SetTagRequestData> {
		protected override operationCode: number = OperationCode.SetTag;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.SetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.SetTagRequestData;
		}
	}

	export class ServerSetTagOperationRequest extends SetTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerSetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerSetTagRequestData;
		}
	}

	export class AdminSetTagOperationRequest extends SetTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminSetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminSetTagRequestData;
		}
	}

	export class GetCurrencyLeaderboardOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetCurrencyLeaderboardRequestData> {
		protected override operationCode: number = OperationCode.GetCurrencyLeaderboard;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetCurrencyLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetCurrencyLeaderboardRequestData;
		}
	}

	export class ServerGetCurrencyLeaderboardOperationRequest extends GetCurrencyLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGetCurrencyLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetCurrencyLeaderboardRequestData;
		}
	}

	export class AdminGetCurrencyLeaderboardOperationRequest extends GetCurrencyLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGetCurrencyLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetCurrencyLeaderboardRequestData;
		}
	}

	export class GetCreateLeaderboardOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetCreateLeaderboardRequestData> {
		protected override operationCode: number = OperationCode.GetCreateLeaderboard;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetCreateLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetCreateLeaderboardRequestData;
		}
	}

	export class ServerGetCreateLeaderboardOperationRequest extends GetCreateLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGetCreateLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetCreateLeaderboardRequestData;
		}
	}

	export class AdminGetCreateLeaderboardOperationRequest extends GetCreateLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGetCreateLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetCreateLeaderboardRequestData;
		}
	}

	export class GetStatisticsLogOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetStatisticsLogRequestData> {
		protected override operationCode: number = OperationCode.GetStatisticsLog;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetStatisticsLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetStatisticsLogRequestData;
		}
	}

	export class ServerGetStatisticsLogOperationRequest extends GetStatisticsLogOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGetStatisticsLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetStatisticsLogRequestData;
		}
	}

	export class AdminGetStatisticsLogOperationRequest extends GetStatisticsLogOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGetStatisticsLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetStatisticsLogRequestData;
		}
	}

	export class GetCurrencyLogOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetCurrencyLogRequestData> {
		protected override operationCode: number = OperationCode.GetCurrencyLog;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetCurrencyLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetCurrencyLogRequestData;
		}
	}

	export class ServerGetCurrencyLogOperationRequest extends GetCurrencyLogOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.ServerGetCurrencyLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetCurrencyLogRequestData;
		}
	}

	export class AdminGetCurrencyLogOperationRequest extends GetCurrencyLogOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AdminGetCurrencyLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetCurrencyLogRequestData;
		}
	}

}
