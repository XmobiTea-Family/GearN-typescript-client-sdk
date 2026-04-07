import { OperationCode } from "./../../constant/OperationCode";
import { RequestRole } from "./../../constant/enumType/RequestRole";
import { RequestType } from "./../../constant/enumType/RequestType";
import { CustomOperationRequestAbstract } from "./../request/CustomOperationRequest";
import { GamePlayerModels } from "./GamePlayerModels";

/**
 * Groups typed request contracts for GamePlayer.
 */
export namespace GamePlayerRequestModels {
	/**
	 * Maps the AddPlayerFriend operation to a typed request wrapper.
	 */
	export class AddPlayerFriendOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.AddPlayerFriendRequestData> {
		protected override operationCode: string = OperationCode.AddPlayerFriend;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new AddPlayerFriendOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AddPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AddPlayerFriendRequestData;
		}
	}

	/**
	 * Maps the ServerAddPlayerFriend operation to a typed request wrapper.
	 */
	export class ServerAddPlayerFriendOperationRequest extends AddPlayerFriendOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerAddPlayerFriendOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerAddPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerAddPlayerFriendRequestData;
		}
	}

	/**
	 * Maps the AdminAddPlayerFriend operation to a typed request wrapper.
	 */
	export class AdminAddPlayerFriendOperationRequest extends AddPlayerFriendOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminAddPlayerFriendOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminAddPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminAddPlayerFriendRequestData;
		}
	}

	/**
	 * Maps the AddSegment operation to a typed request wrapper.
	 */
	export class AddSegmentOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.AddSegmentRequestData> {
		protected override operationCode: string = OperationCode.AddSegment;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new AddSegmentOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AddSegmentRequestData;
		}
	}

	/**
	 * Maps the ServerAddSegment operation to a typed request wrapper.
	 */
	export class ServerAddSegmentOperationRequest extends AddSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerAddSegmentOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerAddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerAddSegmentRequestData;
		}
	}

	/**
	 * Maps the AdminAddSegment operation to a typed request wrapper.
	 */
	export class AdminAddSegmentOperationRequest extends AddSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminAddSegmentOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminAddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminAddSegmentRequestData;
		}
	}

	/**
	 * Maps the GetAvatar operation to a typed request wrapper.
	 */
	export class GetAvatarOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetAvatarRequestData> {
		protected override operationCode: string = OperationCode.GetAvatar;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetAvatarOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.GetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetAvatarRequestData;
		}
	}

	/**
	 * Maps the ServerGetAvatar operation to a typed request wrapper.
	 */
	export class ServerGetAvatarOperationRequest extends GetAvatarOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetAvatarOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerGetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetAvatarRequestData;
		}
	}

	/**
	 * Maps the AdminGetAvatar operation to a typed request wrapper.
	 */
	export class AdminGetAvatarOperationRequest extends GetAvatarOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetAvatarOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminGetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetAvatarRequestData;
		}
	}

	/**
	 * Maps the GetCountryCode operation to a typed request wrapper.
	 */
	export class GetCountryCodeOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetCountryCodeRequestData> {
		protected override operationCode: string = OperationCode.GetCountryCode;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetCountryCodeOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.GetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetCountryCodeRequestData;
		}
	}

	/**
	 * Maps the ServerGetCountryCode operation to a typed request wrapper.
	 */
	export class ServerGetCountryCodeOperationRequest extends GetCountryCodeOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetCountryCodeOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerGetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetCountryCodeRequestData;
		}
	}

	/**
	 * Maps the AdminGetCountryCode operation to a typed request wrapper.
	 */
	export class AdminGetCountryCodeOperationRequest extends GetCountryCodeOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetCountryCodeOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminGetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetCountryCodeRequestData;
		}
	}

	/**
	 * Maps the GetCustomData operation to a typed request wrapper.
	 */
	export class GetCustomDataOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetCustomDataRequestData> {
		protected override operationCode: string = OperationCode.GetCustomData;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetCustomDataOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.GetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetCustomDataRequestData;
		}
	}

	/**
	 * Maps the ServerGetCustomData operation to a typed request wrapper.
	 */
	export class ServerGetCustomDataOperationRequest extends GetCustomDataOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetCustomDataOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerGetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetCustomDataRequestData;
		}
	}

	/**
	 * Maps the AdminGetCustomData operation to a typed request wrapper.
	 */
	export class AdminGetCustomDataOperationRequest extends GetCustomDataOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetCustomDataOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminGetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetCustomDataRequestData;
		}
	}

	/**
	 * Maps the GetDisplayName operation to a typed request wrapper.
	 */
	export class GetDisplayNameOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetDisplayNameRequestData> {
		protected override operationCode: string = OperationCode.GetDisplayName;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetDisplayNameOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.GetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetDisplayNameRequestData;
		}
	}

	/**
	 * Maps the ServerGetDisplayName operation to a typed request wrapper.
	 */
	export class ServerGetDisplayNameOperationRequest extends GetDisplayNameOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetDisplayNameOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerGetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetDisplayNameRequestData;
		}
	}

	/**
	 * Maps the AdminGetDisplayName operation to a typed request wrapper.
	 */
	export class AdminGetDisplayNameOperationRequest extends GetDisplayNameOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetDisplayNameOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminGetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetDisplayNameRequestData;
		}
	}

	/**
	 * Maps the GetFriendStatisticsLeaderboardAroundPlayer operation to a typed request wrapper.
	 */
	export class GetFriendStatisticsLeaderboardAroundPlayerOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetFriendStatisticsLeaderboardAroundPlayerRequestData> {
		protected override operationCode: string = OperationCode.GetFriendStatisticsLeaderboardAroundPlayer;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetFriendStatisticsLeaderboardAroundPlayerOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.GetFriendStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetFriendStatisticsLeaderboardAroundPlayerRequestData;
		}
	}

	/**
	 * Maps the ServerGetFriendStatisticsLeaderboardAroundPlayer operation to a typed request wrapper.
	 */
	export class ServerGetFriendStatisticsLeaderboardAroundPlayerOperationRequest extends GetFriendStatisticsLeaderboardAroundPlayerOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetFriendStatisticsLeaderboardAroundPlayerOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerGetFriendStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetFriendStatisticsLeaderboardAroundPlayerRequestData;
		}
	}

	/**
	 * Maps the AdminGetFriendStatisticsLeaderboardAroundPlayer operation to a typed request wrapper.
	 */
	export class AdminGetFriendStatisticsLeaderboardAroundPlayerOperationRequest extends GetFriendStatisticsLeaderboardAroundPlayerOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetFriendStatisticsLeaderboardAroundPlayerOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminGetFriendStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetFriendStatisticsLeaderboardAroundPlayerRequestData;
		}
	}

	/**
	 * Maps the GetFriendStatisticsLeaderboard operation to a typed request wrapper.
	 */
	export class GetFriendStatisticsLeaderboardOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetFriendStatisticsLeaderboardRequestData> {
		protected override operationCode: string = OperationCode.GetFriendStatisticsLeaderboard;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetFriendStatisticsLeaderboardOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.GetFriendStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetFriendStatisticsLeaderboardRequestData;
		}
	}

	/**
	 * Maps the ServerGetFriendStatisticsLeaderboard operation to a typed request wrapper.
	 */
	export class ServerGetFriendStatisticsLeaderboardOperationRequest extends GetFriendStatisticsLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetFriendStatisticsLeaderboardOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerGetFriendStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetFriendStatisticsLeaderboardRequestData;
		}
	}

	/**
	 * Maps the AdminGetFriendStatisticsLeaderboard operation to a typed request wrapper.
	 */
	export class AdminGetFriendStatisticsLeaderboardOperationRequest extends GetFriendStatisticsLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetFriendStatisticsLeaderboardOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminGetFriendStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetFriendStatisticsLeaderboardRequestData;
		}
	}

	/**
	 * Maps the GetIpAddressCreate operation to a typed request wrapper.
	 */
	export class GetIpAddressCreateOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetIpAddressCreateRequestData> {
		protected override operationCode: string = OperationCode.GetIpAddressCreate;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetIpAddressCreateOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.GetIpAddressCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetIpAddressCreateRequestData;
		}
	}

	/**
	 * Maps the ServerGetIpAddressCreate operation to a typed request wrapper.
	 */
	export class ServerGetIpAddressCreateOperationRequest extends GetIpAddressCreateOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetIpAddressCreateOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerGetIpAddressCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetIpAddressCreateRequestData;
		}
	}

	/**
	 * Maps the AdminGetIpAddressCreate operation to a typed request wrapper.
	 */
	export class AdminGetIpAddressCreateOperationRequest extends GetIpAddressCreateOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetIpAddressCreateOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminGetIpAddressCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetIpAddressCreateRequestData;
		}
	}

	/**
	 * Maps the GetOnlineStatus operation to a typed request wrapper.
	 */
	export class GetOnlineStatusOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetOnlineStatusRequestData> {
		protected override operationCode: string = OperationCode.GetOnlineStatus;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetOnlineStatusOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.GetOnlineStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetOnlineStatusRequestData;
		}
	}

	/**
	 * Maps the ServerGetOnlineStatus operation to a typed request wrapper.
	 */
	export class ServerGetOnlineStatusOperationRequest extends GetOnlineStatusOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetOnlineStatusOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerGetOnlineStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetOnlineStatusRequestData;
		}
	}

	/**
	 * Maps the AdminGetOnlineStatus operation to a typed request wrapper.
	 */
	export class AdminGetOnlineStatusOperationRequest extends GetOnlineStatusOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetOnlineStatusOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminGetOnlineStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetOnlineStatusRequestData;
		}
	}

	/**
	 * Maps the GetPlayerBan operation to a typed request wrapper.
	 */
	export class GetPlayerBanOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayerBanRequestData> {
		protected override operationCode: string = OperationCode.GetPlayerBan;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayerBanOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.GetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetPlayerBanRequestData;
		}
	}

	/**
	 * Maps the ServerGetPlayerBan operation to a typed request wrapper.
	 */
	export class ServerGetPlayerBanOperationRequest extends GetPlayerBanOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetPlayerBanOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerGetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetPlayerBanRequestData;
		}
	}

	/**
	 * Maps the AdminGetPlayerBan operation to a typed request wrapper.
	 */
	export class AdminGetPlayerBanOperationRequest extends GetPlayerBanOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetPlayerBanOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminGetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetPlayerBanRequestData;
		}
	}

	/**
	 * Maps the GetPlayerCharacter operation to a typed request wrapper.
	 */
	export class GetPlayerCharacterOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayerCharacterRequestData> {
		protected override operationCode: string = OperationCode.GetPlayerCharacter;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayerCharacterOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.GetPlayerCharacterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetPlayerCharacterRequestData;
		}
	}

	/**
	 * Maps the ServerGetPlayerCharacter operation to a typed request wrapper.
	 */
	export class ServerGetPlayerCharacterOperationRequest extends GetPlayerCharacterOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetPlayerCharacterOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerGetPlayerCharacterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetPlayerCharacterRequestData;
		}
	}

	/**
	 * Maps the AdminGetPlayerCharacter operation to a typed request wrapper.
	 */
	export class AdminGetPlayerCharacterOperationRequest extends GetPlayerCharacterOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetPlayerCharacterOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminGetPlayerCharacterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetPlayerCharacterRequestData;
		}
	}

	/**
	 * Maps the GetPlayerCurrency operation to a typed request wrapper.
	 */
	export class GetPlayerCurrencyOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayerCurrencyRequestData> {
		protected override operationCode: string = OperationCode.GetPlayerCurrency;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayerCurrencyOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.GetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetPlayerCurrencyRequestData;
		}
	}

	/**
	 * Maps the ServerGetPlayerCurrency operation to a typed request wrapper.
	 */
	export class ServerGetPlayerCurrencyOperationRequest extends GetPlayerCurrencyOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetPlayerCurrencyOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerGetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetPlayerCurrencyRequestData;
		}
	}

	/**
	 * Maps the AdminGetPlayerCurrency operation to a typed request wrapper.
	 */
	export class AdminGetPlayerCurrencyOperationRequest extends GetPlayerCurrencyOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetPlayerCurrencyOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminGetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetPlayerCurrencyRequestData;
		}
	}

	/**
	 * Maps the GetPlayerData operation to a typed request wrapper.
	 */
	export class GetPlayerDataOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayerDataRequestData> {
		protected override operationCode: string = OperationCode.GetPlayerData;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayerDataOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.GetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetPlayerDataRequestData;
		}
	}

	/**
	 * Maps the ServerGetPlayerData operation to a typed request wrapper.
	 */
	export class ServerGetPlayerDataOperationRequest extends GetPlayerDataOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetPlayerDataOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerGetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetPlayerDataRequestData;
		}
	}

	/**
	 * Maps the AdminGetPlayerData operation to a typed request wrapper.
	 */
	export class AdminGetPlayerDataOperationRequest extends GetPlayerDataOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetPlayerDataOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminGetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetPlayerDataRequestData;
		}
	}

	/**
	 * Maps the GetPlayerFriend operation to a typed request wrapper.
	 */
	export class GetPlayerFriendOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayerFriendRequestData> {
		protected override operationCode: string = OperationCode.GetPlayerFriend;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayerFriendOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.GetPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetPlayerFriendRequestData;
		}
	}

	/**
	 * Maps the ServerGetPlayerFriend operation to a typed request wrapper.
	 */
	export class ServerGetPlayerFriendOperationRequest extends GetPlayerFriendOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetPlayerFriendOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerGetPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetPlayerFriendRequestData;
		}
	}

	/**
	 * Maps the AdminGetPlayerFriend operation to a typed request wrapper.
	 */
	export class AdminGetPlayerFriendOperationRequest extends GetPlayerFriendOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetPlayerFriendOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminGetPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetPlayerFriendRequestData;
		}
	}

	/**
	 * Maps the GetPlayerGroup operation to a typed request wrapper.
	 */
	export class GetPlayerGroupOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayerGroupRequestData> {
		protected override operationCode: string = OperationCode.GetPlayerGroup;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayerGroupOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.GetPlayerGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetPlayerGroupRequestData;
		}
	}

	/**
	 * Maps the ServerGetPlayerGroup operation to a typed request wrapper.
	 */
	export class ServerGetPlayerGroupOperationRequest extends GetPlayerGroupOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetPlayerGroupOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerGetPlayerGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetPlayerGroupRequestData;
		}
	}

	/**
	 * Maps the AdminGetPlayerGroup operation to a typed request wrapper.
	 */
	export class AdminGetPlayerGroupOperationRequest extends GetPlayerGroupOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetPlayerGroupOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminGetPlayerGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetPlayerGroupRequestData;
		}
	}

	/**
	 * Maps the GetPlayerInformation operation to a typed request wrapper.
	 */
	export class GetPlayerInformationOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayerInformationRequestData> {
		protected override operationCode: string = OperationCode.GetPlayerInformation;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayerInformationOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.GetPlayerInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetPlayerInformationRequestData;
		}
	}

	/**
	 * Maps the ServerGetPlayerInformation operation to a typed request wrapper.
	 */
	export class ServerGetPlayerInformationOperationRequest extends GetPlayerInformationOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetPlayerInformationOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerGetPlayerInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetPlayerInformationRequestData;
		}
	}

	/**
	 * Maps the AdminGetPlayerInformation operation to a typed request wrapper.
	 */
	export class AdminGetPlayerInformationOperationRequest extends GetPlayerInformationOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetPlayerInformationOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminGetPlayerInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetPlayerInformationRequestData;
		}
	}

	/**
	 * Maps the GetPlayerInventory operation to a typed request wrapper.
	 */
	export class GetPlayerInventoryOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayerInventoryRequestData> {
		protected override operationCode: string = OperationCode.GetPlayerInventory;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayerInventoryOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.GetPlayerInventoryRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetPlayerInventoryRequestData;
		}
	}

	/**
	 * Maps the ServerGetPlayerInventory operation to a typed request wrapper.
	 */
	export class ServerGetPlayerInventoryOperationRequest extends GetPlayerInventoryOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetPlayerInventoryOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerGetPlayerInventoryRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetPlayerInventoryRequestData;
		}
	}

	/**
	 * Maps the AdminGetPlayerInventory operation to a typed request wrapper.
	 */
	export class AdminGetPlayerInventoryOperationRequest extends GetPlayerInventoryOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetPlayerInventoryOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminGetPlayerInventoryRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetPlayerInventoryRequestData;
		}
	}

	/**
	 * Maps the GetPlayerStatistics operation to a typed request wrapper.
	 */
	export class GetPlayerStatisticsOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayerStatisticsRequestData> {
		protected override operationCode: string = OperationCode.GetPlayerStatistics;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayerStatisticsOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.GetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetPlayerStatisticsRequestData;
		}
	}

	/**
	 * Maps the ServerGetPlayerStatistics operation to a typed request wrapper.
	 */
	export class ServerGetPlayerStatisticsOperationRequest extends GetPlayerStatisticsOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetPlayerStatisticsOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerGetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetPlayerStatisticsRequestData;
		}
	}

	/**
	 * Maps the AdminGetPlayerStatistics operation to a typed request wrapper.
	 */
	export class AdminGetPlayerStatisticsOperationRequest extends GetPlayerStatisticsOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetPlayerStatisticsOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminGetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetPlayerStatisticsRequestData;
		}
	}

	/**
	 * Maps the GetPlayersWithDisplayName operation to a typed request wrapper.
	 */
	export class GetPlayersWithDisplayNameOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayersWithDisplayNameRequestData> {
		protected override operationCode: string = OperationCode.GetPlayersWithDisplayName;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayersWithDisplayNameOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.GetPlayersWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetPlayersWithDisplayNameRequestData;
		}
	}

	/**
	 * Maps the ServerGetPlayersWithDisplayName operation to a typed request wrapper.
	 */
	export class ServerGetPlayersWithDisplayNameOperationRequest extends GetPlayersWithDisplayNameOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetPlayersWithDisplayNameOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerGetPlayersWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetPlayersWithDisplayNameRequestData;
		}
	}

	/**
	 * Maps the AdminGetPlayersWithDisplayName operation to a typed request wrapper.
	 */
	export class AdminGetPlayersWithDisplayNameOperationRequest extends GetPlayersWithDisplayNameOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetPlayersWithDisplayNameOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminGetPlayersWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetPlayersWithDisplayNameRequestData;
		}
	}

	/**
	 * Maps the GetPlayersWithSegment operation to a typed request wrapper.
	 */
	export class GetPlayersWithSegmentOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayersWithSegmentRequestData> {
		protected override operationCode: string = OperationCode.GetPlayersWithSegment;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayersWithSegmentOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.GetPlayersWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetPlayersWithSegmentRequestData;
		}
	}

	/**
	 * Maps the ServerGetPlayersWithSegment operation to a typed request wrapper.
	 */
	export class ServerGetPlayersWithSegmentOperationRequest extends GetPlayersWithSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetPlayersWithSegmentOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerGetPlayersWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetPlayersWithSegmentRequestData;
		}
	}

	/**
	 * Maps the AdminGetPlayersWithSegment operation to a typed request wrapper.
	 */
	export class AdminGetPlayersWithSegmentOperationRequest extends GetPlayersWithSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetPlayersWithSegmentOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminGetPlayersWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetPlayersWithSegmentRequestData;
		}
	}

	/**
	 * Maps the GetPlayersWithTag operation to a typed request wrapper.
	 */
	export class GetPlayersWithTagOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayersWithTagRequestData> {
		protected override operationCode: string = OperationCode.GetPlayersWithTag;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayersWithTagOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.GetPlayersWithTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetPlayersWithTagRequestData;
		}
	}

	/**
	 * Maps the ServerGetPlayersWithTag operation to a typed request wrapper.
	 */
	export class ServerGetPlayersWithTagOperationRequest extends GetPlayersWithTagOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetPlayersWithTagOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerGetPlayersWithTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetPlayersWithTagRequestData;
		}
	}

	/**
	 * Maps the AdminGetPlayersWithTag operation to a typed request wrapper.
	 */
	export class AdminGetPlayersWithTagOperationRequest extends GetPlayersWithTagOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetPlayersWithTagOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminGetPlayersWithTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetPlayersWithTagRequestData;
		}
	}

	/**
	 * Maps the GetSegment operation to a typed request wrapper.
	 */
	export class GetSegmentOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetSegmentRequestData> {
		protected override operationCode: string = OperationCode.GetSegment;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetSegmentOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.GetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetSegmentRequestData;
		}
	}

	/**
	 * Maps the ServerGetSegment operation to a typed request wrapper.
	 */
	export class ServerGetSegmentOperationRequest extends GetSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetSegmentOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerGetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetSegmentRequestData;
		}
	}

	/**
	 * Maps the AdminGetSegment operation to a typed request wrapper.
	 */
	export class AdminGetSegmentOperationRequest extends GetSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetSegmentOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminGetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetSegmentRequestData;
		}
	}

	/**
	 * Maps the GetStatisticsLeaderboardAroundPlayer operation to a typed request wrapper.
	 */
	export class GetStatisticsLeaderboardAroundPlayerOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData> {
		protected override operationCode: string = OperationCode.GetStatisticsLeaderboardAroundPlayer;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetStatisticsLeaderboardAroundPlayerOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData;
		}
	}

	/**
	 * Maps the ServerGetStatisticsLeaderboardAroundPlayer operation to a typed request wrapper.
	 */
	export class ServerGetStatisticsLeaderboardAroundPlayerOperationRequest extends GetStatisticsLeaderboardAroundPlayerOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetStatisticsLeaderboardAroundPlayerOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerGetStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetStatisticsLeaderboardAroundPlayerRequestData;
		}
	}

	/**
	 * Maps the AdminGetStatisticsLeaderboardAroundPlayer operation to a typed request wrapper.
	 */
	export class AdminGetStatisticsLeaderboardAroundPlayerOperationRequest extends GetStatisticsLeaderboardAroundPlayerOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetStatisticsLeaderboardAroundPlayerOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminGetStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetStatisticsLeaderboardAroundPlayerRequestData;
		}
	}

	/**
	 * Maps the GetStatisticsLeaderboard operation to a typed request wrapper.
	 */
	export class GetStatisticsLeaderboardOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetStatisticsLeaderboardRequestData> {
		protected override operationCode: string = OperationCode.GetStatisticsLeaderboard;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetStatisticsLeaderboardOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.GetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetStatisticsLeaderboardRequestData;
		}
	}

	/**
	 * Maps the ServerGetStatisticsLeaderboard operation to a typed request wrapper.
	 */
	export class ServerGetStatisticsLeaderboardOperationRequest extends GetStatisticsLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetStatisticsLeaderboardOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerGetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetStatisticsLeaderboardRequestData;
		}
	}

	/**
	 * Maps the AdminGetStatisticsLeaderboard operation to a typed request wrapper.
	 */
	export class AdminGetStatisticsLeaderboardOperationRequest extends GetStatisticsLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetStatisticsLeaderboardOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminGetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetStatisticsLeaderboardRequestData;
		}
	}

	/**
	 * Maps the GetTag operation to a typed request wrapper.
	 */
	export class GetTagOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetTagRequestData> {
		protected override operationCode: string = OperationCode.GetTag;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetTagOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.GetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetTagRequestData;
		}
	}

	/**
	 * Maps the ServerGetTag operation to a typed request wrapper.
	 */
	export class ServerGetTagOperationRequest extends GetTagOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetTagOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerGetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetTagRequestData;
		}
	}

	/**
	 * Maps the AdminGetTag operation to a typed request wrapper.
	 */
	export class AdminGetTagOperationRequest extends GetTagOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetTagOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminGetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetTagRequestData;
		}
	}

	/**
	 * Maps the GetTsCreate operation to a typed request wrapper.
	 */
	export class GetTsCreateOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetTsCreateRequestData> {
		protected override operationCode: string = OperationCode.GetTsCreate;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetTsCreateOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.GetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetTsCreateRequestData;
		}
	}

	/**
	 * Maps the ServerGetTsCreate operation to a typed request wrapper.
	 */
	export class ServerGetTsCreateOperationRequest extends GetTsCreateOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetTsCreateOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerGetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetTsCreateRequestData;
		}
	}

	/**
	 * Maps the AdminGetTsCreate operation to a typed request wrapper.
	 */
	export class AdminGetTsCreateOperationRequest extends GetTsCreateOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetTsCreateOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminGetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetTsCreateRequestData;
		}
	}

	/**
	 * Maps the GetTsLastLogin operation to a typed request wrapper.
	 */
	export class GetTsLastLoginOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetTsLastLoginRequestData> {
		protected override operationCode: string = OperationCode.GetTsLastLogin;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetTsLastLoginOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.GetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetTsLastLoginRequestData;
		}
	}

	/**
	 * Maps the ServerGetTsLastLogin operation to a typed request wrapper.
	 */
	export class ServerGetTsLastLoginOperationRequest extends GetTsLastLoginOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetTsLastLoginOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerGetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetTsLastLoginRequestData;
		}
	}

	/**
	 * Maps the AdminGetTsLastLogin operation to a typed request wrapper.
	 */
	export class AdminGetTsLastLoginOperationRequest extends GetTsLastLoginOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetTsLastLoginOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminGetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetTsLastLoginRequestData;
		}
	}

	/**
	 * Maps the CreateGroup operation to a typed request wrapper.
	 */
	export class CreateGroupOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.CreateGroupRequestData> {
		protected override operationCode: string = OperationCode.CreateGroup;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new CreateGroupOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.CreateGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.CreateGroupRequestData;
		}
	}

	/**
	 * Maps the ServerCreateGroup operation to a typed request wrapper.
	 */
	export class ServerCreateGroupOperationRequest extends CreateGroupOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerCreateGroupOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerCreateGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerCreateGroupRequestData;
		}
	}

	/**
	 * Maps the AdminCreateGroup operation to a typed request wrapper.
	 */
	export class AdminCreateGroupOperationRequest extends CreateGroupOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminCreateGroupOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminCreateGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminCreateGroupRequestData;
		}
	}

	/**
	 * Maps the CreatePlayerCharacter operation to a typed request wrapper.
	 */
	export class CreatePlayerCharacterOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.CreatePlayerCharacterRequestData> {
		protected override operationCode: string = OperationCode.CreatePlayerCharacter;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new CreatePlayerCharacterOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.CreatePlayerCharacterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.CreatePlayerCharacterRequestData;
		}
	}

	/**
	 * Maps the ServerCreatePlayerCharacter operation to a typed request wrapper.
	 */
	export class ServerCreatePlayerCharacterOperationRequest extends CreatePlayerCharacterOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerCreatePlayerCharacterOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerCreatePlayerCharacterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerCreatePlayerCharacterRequestData;
		}
	}

	/**
	 * Maps the AdminCreatePlayerCharacter operation to a typed request wrapper.
	 */
	export class AdminCreatePlayerCharacterOperationRequest extends CreatePlayerCharacterOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminCreatePlayerCharacterOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminCreatePlayerCharacterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminCreatePlayerCharacterRequestData;
		}
	}

	/**
	 * Maps the CreatePlayerItem operation to a typed request wrapper.
	 */
	export class CreatePlayerItemOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.CreatePlayerItemRequestData> {
		protected override operationCode: string = OperationCode.CreatePlayerItem;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new CreatePlayerItemOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.CreatePlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.CreatePlayerItemRequestData;
		}
	}

	/**
	 * Maps the ServerCreatePlayerItem operation to a typed request wrapper.
	 */
	export class ServerCreatePlayerItemOperationRequest extends CreatePlayerItemOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerCreatePlayerItemOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerCreatePlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerCreatePlayerItemRequestData;
		}
	}

	/**
	 * Maps the AdminCreatePlayerItem operation to a typed request wrapper.
	 */
	export class AdminCreatePlayerItemOperationRequest extends CreatePlayerItemOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminCreatePlayerItemOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminCreatePlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminCreatePlayerItemRequestData;
		}
	}

	/**
	 * Maps the JoinGroup operation to a typed request wrapper.
	 */
	export class JoinGroupOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.JoinGroupRequestData> {
		protected override operationCode: string = OperationCode.JoinGroup;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new JoinGroupOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.JoinGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.JoinGroupRequestData;
		}
	}

	/**
	 * Maps the ServerJoinGroup operation to a typed request wrapper.
	 */
	export class ServerJoinGroupOperationRequest extends JoinGroupOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerJoinGroupOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerJoinGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerJoinGroupRequestData;
		}
	}

	/**
	 * Maps the AdminJoinGroup operation to a typed request wrapper.
	 */
	export class AdminJoinGroupOperationRequest extends JoinGroupOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminJoinGroupOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminJoinGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminJoinGroupRequestData;
		}
	}

	/**
	 * Maps the LeaveGroup operation to a typed request wrapper.
	 */
	export class LeaveGroupOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.LeaveGroupRequestData> {
		protected override operationCode: string = OperationCode.LeaveGroup;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LeaveGroupOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.LeaveGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.LeaveGroupRequestData;
		}
	}

	/**
	 * Maps the ServerLeaveGroup operation to a typed request wrapper.
	 */
	export class ServerLeaveGroupOperationRequest extends LeaveGroupOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerLeaveGroupOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerLeaveGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerLeaveGroupRequestData;
		}
	}

	/**
	 * Maps the AdminLeaveGroup operation to a typed request wrapper.
	 */
	export class AdminLeaveGroupOperationRequest extends LeaveGroupOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminLeaveGroupOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminLeaveGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminLeaveGroupRequestData;
		}
	}

	/**
	 * Maps the RemovePlayerCharacter operation to a typed request wrapper.
	 */
	export class RemovePlayerCharacterOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.RemovePlayerCharacterRequestData> {
		protected override operationCode: string = OperationCode.RemovePlayerCharacter;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new RemovePlayerCharacterOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.RemovePlayerCharacterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.RemovePlayerCharacterRequestData;
		}
	}

	/**
	 * Maps the ServerRemovePlayerCharacter operation to a typed request wrapper.
	 */
	export class ServerRemovePlayerCharacterOperationRequest extends RemovePlayerCharacterOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerRemovePlayerCharacterOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerRemovePlayerCharacterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerRemovePlayerCharacterRequestData;
		}
	}

	/**
	 * Maps the AdminRemovePlayerCharacter operation to a typed request wrapper.
	 */
	export class AdminRemovePlayerCharacterOperationRequest extends RemovePlayerCharacterOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminRemovePlayerCharacterOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminRemovePlayerCharacterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminRemovePlayerCharacterRequestData;
		}
	}

	/**
	 * Maps the RemovePlayerFriend operation to a typed request wrapper.
	 */
	export class RemovePlayerFriendOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.RemovePlayerFriendRequestData> {
		protected override operationCode: string = OperationCode.RemovePlayerFriend;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new RemovePlayerFriendOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.RemovePlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.RemovePlayerFriendRequestData;
		}
	}

	/**
	 * Maps the ServerRemovePlayerFriend operation to a typed request wrapper.
	 */
	export class ServerRemovePlayerFriendOperationRequest extends RemovePlayerFriendOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerRemovePlayerFriendOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerRemovePlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerRemovePlayerFriendRequestData;
		}
	}

	/**
	 * Maps the AdminRemovePlayerFriend operation to a typed request wrapper.
	 */
	export class AdminRemovePlayerFriendOperationRequest extends RemovePlayerFriendOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminRemovePlayerFriendOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminRemovePlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminRemovePlayerFriendRequestData;
		}
	}

	/**
	 * Maps the RemovePlayerItem operation to a typed request wrapper.
	 */
	export class RemovePlayerItemOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.RemovePlayerItemRequestData> {
		protected override operationCode: string = OperationCode.RemovePlayerItem;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new RemovePlayerItemOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.RemovePlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.RemovePlayerItemRequestData;
		}
	}

	/**
	 * Maps the ServerRemovePlayerItem operation to a typed request wrapper.
	 */
	export class ServerRemovePlayerItemOperationRequest extends RemovePlayerItemOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerRemovePlayerItemOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerRemovePlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerRemovePlayerItemRequestData;
		}
	}

	/**
	 * Maps the AdminRemovePlayerItem operation to a typed request wrapper.
	 */
	export class AdminRemovePlayerItemOperationRequest extends RemovePlayerItemOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminRemovePlayerItemOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminRemovePlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminRemovePlayerItemRequestData;
		}
	}

	/**
	 * Maps the RemoveSegment operation to a typed request wrapper.
	 */
	export class RemoveSegmentOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.RemoveSegmentRequestData> {
		protected override operationCode: string = OperationCode.RemoveSegment;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new RemoveSegmentOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.RemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.RemoveSegmentRequestData;
		}
	}

	/**
	 * Maps the ServerRemoveSegment operation to a typed request wrapper.
	 */
	export class ServerRemoveSegmentOperationRequest extends RemoveSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerRemoveSegmentOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerRemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerRemoveSegmentRequestData;
		}
	}

	/**
	 * Maps the AdminRemoveSegment operation to a typed request wrapper.
	 */
	export class AdminRemoveSegmentOperationRequest extends RemoveSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminRemoveSegmentOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminRemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminRemoveSegmentRequestData;
		}
	}

	/**
	 * Maps the RemoveTag operation to a typed request wrapper.
	 */
	export class RemoveTagOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.RemoveTagRequestData> {
		protected override operationCode: string = OperationCode.RemoveTag;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new RemoveTagOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.RemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.RemoveTagRequestData;
		}
	}

	/**
	 * Maps the ServerRemoveTag operation to a typed request wrapper.
	 */
	export class ServerRemoveTagOperationRequest extends RemoveTagOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerRemoveTagOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerRemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerRemoveTagRequestData;
		}
	}

	/**
	 * Maps the AdminRemoveTag operation to a typed request wrapper.
	 */
	export class AdminRemoveTagOperationRequest extends RemoveTagOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminRemoveTagOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminRemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminRemoveTagRequestData;
		}
	}

	/**
	 * Maps the SetAvatar operation to a typed request wrapper.
	 */
	export class SetAvatarOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.SetAvatarRequestData> {
		protected override operationCode: string = OperationCode.SetAvatar;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetAvatarOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.SetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.SetAvatarRequestData;
		}
	}

	/**
	 * Maps the ServerSetAvatar operation to a typed request wrapper.
	 */
	export class ServerSetAvatarOperationRequest extends SetAvatarOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerSetAvatarOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerSetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerSetAvatarRequestData;
		}
	}

	/**
	 * Maps the AdminSetAvatar operation to a typed request wrapper.
	 */
	export class AdminSetAvatarOperationRequest extends SetAvatarOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminSetAvatarOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminSetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminSetAvatarRequestData;
		}
	}

	/**
	 * Maps the SetCountryCode operation to a typed request wrapper.
	 */
	export class SetCountryCodeOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.SetCountryCodeRequestData> {
		protected override operationCode: string = OperationCode.SetCountryCode;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetCountryCodeOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.SetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.SetCountryCodeRequestData;
		}
	}

	/**
	 * Maps the ServerSetCountryCode operation to a typed request wrapper.
	 */
	export class ServerSetCountryCodeOperationRequest extends SetCountryCodeOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerSetCountryCodeOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerSetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerSetCountryCodeRequestData;
		}
	}

	/**
	 * Maps the AdminSetCountryCode operation to a typed request wrapper.
	 */
	export class AdminSetCountryCodeOperationRequest extends SetCountryCodeOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminSetCountryCodeOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminSetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminSetCountryCodeRequestData;
		}
	}

	/**
	 * Maps the SetCustomData operation to a typed request wrapper.
	 */
	export class SetCustomDataOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.SetCustomDataRequestData> {
		protected override operationCode: string = OperationCode.SetCustomData;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetCustomDataOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.SetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.SetCustomDataRequestData;
		}
	}

	/**
	 * Maps the ServerSetCustomData operation to a typed request wrapper.
	 */
	export class ServerSetCustomDataOperationRequest extends SetCustomDataOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerSetCustomDataOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerSetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerSetCustomDataRequestData;
		}
	}

	/**
	 * Maps the AdminSetCustomData operation to a typed request wrapper.
	 */
	export class AdminSetCustomDataOperationRequest extends SetCustomDataOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminSetCustomDataOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminSetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminSetCustomDataRequestData;
		}
	}

	/**
	 * Maps the SetDisplayName operation to a typed request wrapper.
	 */
	export class SetDisplayNameOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.SetDisplayNameRequestData> {
		protected override operationCode: string = OperationCode.SetDisplayName;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetDisplayNameOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.SetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.SetDisplayNameRequestData;
		}
	}

	/**
	 * Maps the ServerSetDisplayName operation to a typed request wrapper.
	 */
	export class ServerSetDisplayNameOperationRequest extends SetDisplayNameOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerSetDisplayNameOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerSetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerSetDisplayNameRequestData;
		}
	}

	/**
	 * Maps the AdminSetDisplayName operation to a typed request wrapper.
	 */
	export class AdminSetDisplayNameOperationRequest extends SetDisplayNameOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminSetDisplayNameOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminSetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminSetDisplayNameRequestData;
		}
	}

	/**
	 * Maps the SetPlayerBan operation to a typed request wrapper.
	 */
	export class SetPlayerBanOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.SetPlayerBanRequestData> {
		protected override operationCode: string = OperationCode.SetPlayerBan;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetPlayerBanOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.SetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.SetPlayerBanRequestData;
		}
	}

	/**
	 * Maps the ServerSetPlayerBan operation to a typed request wrapper.
	 */
	export class ServerSetPlayerBanOperationRequest extends SetPlayerBanOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerSetPlayerBanOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerSetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerSetPlayerBanRequestData;
		}
	}

	/**
	 * Maps the AdminSetPlayerBan operation to a typed request wrapper.
	 */
	export class AdminSetPlayerBanOperationRequest extends SetPlayerBanOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminSetPlayerBanOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminSetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminSetPlayerBanRequestData;
		}
	}

	/**
	 * Maps the ChangePlayerCurrency operation to a typed request wrapper.
	 */
	export class ChangePlayerCurrencyOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.ChangePlayerCurrencyRequestData> {
		protected override operationCode: string = OperationCode.ChangePlayerCurrency;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new ChangePlayerCurrencyOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ChangePlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ChangePlayerCurrencyRequestData;
		}
	}

	/**
	 * Maps the ServerChangePlayerCurrency operation to a typed request wrapper.
	 */
	export class ServerChangePlayerCurrencyOperationRequest extends ChangePlayerCurrencyOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerChangePlayerCurrencyOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerChangePlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerChangePlayerCurrencyRequestData;
		}
	}

	/**
	 * Maps the AdminChangePlayerCurrency operation to a typed request wrapper.
	 */
	export class AdminChangePlayerCurrencyOperationRequest extends ChangePlayerCurrencyOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminChangePlayerCurrencyOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminChangePlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminChangePlayerCurrencyRequestData;
		}
	}

	/**
	 * Maps the SetPlayerData operation to a typed request wrapper.
	 */
	export class SetPlayerDataOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.SetPlayerDataRequestData> {
		protected override operationCode: string = OperationCode.SetPlayerData;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetPlayerDataOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.SetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.SetPlayerDataRequestData;
		}
	}

	/**
	 * Maps the ServerSetPlayerData operation to a typed request wrapper.
	 */
	export class ServerSetPlayerDataOperationRequest extends SetPlayerDataOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerSetPlayerDataOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerSetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerSetPlayerDataRequestData;
		}
	}

	/**
	 * Maps the AdminSetPlayerData operation to a typed request wrapper.
	 */
	export class AdminSetPlayerDataOperationRequest extends SetPlayerDataOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminSetPlayerDataOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminSetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminSetPlayerDataRequestData;
		}
	}

	/**
	 * Maps the ChangePlayerStatistics operation to a typed request wrapper.
	 */
	export class ChangePlayerStatisticsOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.ChangePlayerStatisticsRequestData> {
		protected override operationCode: string = OperationCode.ChangePlayerStatistics;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new ChangePlayerStatisticsOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ChangePlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ChangePlayerStatisticsRequestData;
		}
	}

	/**
	 * Maps the ServerChangePlayerStatistics operation to a typed request wrapper.
	 */
	export class ServerChangePlayerStatisticsOperationRequest extends ChangePlayerStatisticsOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerChangePlayerStatisticsOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerChangePlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerChangePlayerStatisticsRequestData;
		}
	}

	/**
	 * Maps the AdminChangePlayerStatistics operation to a typed request wrapper.
	 */
	export class AdminChangePlayerStatisticsOperationRequest extends ChangePlayerStatisticsOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminChangePlayerStatisticsOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminChangePlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminChangePlayerStatisticsRequestData;
		}
	}

	/**
	 * Maps the SetTag operation to a typed request wrapper.
	 */
	export class SetTagOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.SetTagRequestData> {
		protected override operationCode: string = OperationCode.SetTag;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetTagOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.SetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.SetTagRequestData;
		}
	}

	/**
	 * Maps the ServerSetTag operation to a typed request wrapper.
	 */
	export class ServerSetTagOperationRequest extends SetTagOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerSetTagOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerSetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerSetTagRequestData;
		}
	}

	/**
	 * Maps the AdminSetTag operation to a typed request wrapper.
	 */
	export class AdminSetTagOperationRequest extends SetTagOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminSetTagOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminSetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminSetTagRequestData;
		}
	}

	/**
	 * Maps the GetCurrencyLeaderboard operation to a typed request wrapper.
	 */
	export class GetCurrencyLeaderboardOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetCurrencyLeaderboardRequestData> {
		protected override operationCode: string = OperationCode.GetCurrencyLeaderboard;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetCurrencyLeaderboardOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.GetCurrencyLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetCurrencyLeaderboardRequestData;
		}
	}

	/**
	 * Maps the ServerGetCurrencyLeaderboard operation to a typed request wrapper.
	 */
	export class ServerGetCurrencyLeaderboardOperationRequest extends GetCurrencyLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetCurrencyLeaderboardOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerGetCurrencyLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetCurrencyLeaderboardRequestData;
		}
	}

	/**
	 * Maps the AdminGetCurrencyLeaderboard operation to a typed request wrapper.
	 */
	export class AdminGetCurrencyLeaderboardOperationRequest extends GetCurrencyLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetCurrencyLeaderboardOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminGetCurrencyLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetCurrencyLeaderboardRequestData;
		}
	}

	/**
	 * Maps the GetLastLoginLeaderboard operation to a typed request wrapper.
	 */
	export class GetLastLoginLeaderboardOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetLastLoginLeaderboardRequestData> {
		protected override operationCode: string = OperationCode.GetLastLoginLeaderboard;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetLastLoginLeaderboardOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.GetLastLoginLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetLastLoginLeaderboardRequestData;
		}
	}

	/**
	 * Maps the ServerGetLastLoginLeaderboard operation to a typed request wrapper.
	 */
	export class ServerGetLastLoginLeaderboardOperationRequest extends GetLastLoginLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetLastLoginLeaderboardOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerGetLastLoginLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetLastLoginLeaderboardRequestData;
		}
	}

	/**
	 * Maps the AdminGetLastLoginLeaderboard operation to a typed request wrapper.
	 */
	export class AdminGetLastLoginLeaderboardOperationRequest extends GetLastLoginLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetLastLoginLeaderboardOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminGetLastLoginLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetLastLoginLeaderboardRequestData;
		}
	}

	/**
	 * Maps the GetCreateLeaderboard operation to a typed request wrapper.
	 */
	export class GetCreateLeaderboardOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetCreateLeaderboardRequestData> {
		protected override operationCode: string = OperationCode.GetCreateLeaderboard;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetCreateLeaderboardOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.GetCreateLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetCreateLeaderboardRequestData;
		}
	}

	/**
	 * Maps the ServerGetCreateLeaderboard operation to a typed request wrapper.
	 */
	export class ServerGetCreateLeaderboardOperationRequest extends GetCreateLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetCreateLeaderboardOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerGetCreateLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetCreateLeaderboardRequestData;
		}
	}

	/**
	 * Maps the AdminGetCreateLeaderboard operation to a typed request wrapper.
	 */
	export class AdminGetCreateLeaderboardOperationRequest extends GetCreateLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetCreateLeaderboardOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminGetCreateLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetCreateLeaderboardRequestData;
		}
	}

	/**
	 * Maps the GetStatisticsLog operation to a typed request wrapper.
	 */
	export class GetStatisticsLogOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetStatisticsLogRequestData> {
		protected override operationCode: string = OperationCode.GetStatisticsLog;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetStatisticsLogOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.GetStatisticsLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetStatisticsLogRequestData;
		}
	}

	/**
	 * Maps the ServerGetStatisticsLog operation to a typed request wrapper.
	 */
	export class ServerGetStatisticsLogOperationRequest extends GetStatisticsLogOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetStatisticsLogOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerGetStatisticsLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetStatisticsLogRequestData;
		}
	}

	/**
	 * Maps the AdminGetStatisticsLog operation to a typed request wrapper.
	 */
	export class AdminGetStatisticsLogOperationRequest extends GetStatisticsLogOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetStatisticsLogOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminGetStatisticsLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetStatisticsLogRequestData;
		}
	}

	/**
	 * Maps the GetCurrencyLog operation to a typed request wrapper.
	 */
	export class GetCurrencyLogOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetCurrencyLogRequestData> {
		protected override operationCode: string = OperationCode.GetCurrencyLog;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetCurrencyLogOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.GetCurrencyLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.GetCurrencyLogRequestData;
		}
	}

	/**
	 * Maps the ServerGetCurrencyLog operation to a typed request wrapper.
	 */
	export class ServerGetCurrencyLogOperationRequest extends GetCurrencyLogOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetCurrencyLogOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.ServerGetCurrencyLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.ServerGetCurrencyLogRequestData;
		}
	}

	/**
	 * Maps the AdminGetCurrencyLog operation to a typed request wrapper.
	 */
	export class AdminGetCurrencyLogOperationRequest extends GetCurrencyLogOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetCurrencyLogOperationRequest instance.
		 */
		constructor(requestData: GamePlayerModels.AdminGetCurrencyLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = GamePlayerModels.AdminGetCurrencyLogRequestData;
		}
	}

}
