import { OperationCode } from "./../../constant/OperationCode";
import { RequestRole } from "./../../constant/enumType/RequestRole";
import { RequestType } from "./../../constant/enumType/RequestType";
import { CustomOperationRequestAbstract } from "./../request/CustomOperationRequest";
import { CharacterPlayerModels } from "./CharacterPlayerModels";

/**
 * Typed request wrappers for the CharacterPlayer domain.
 *
 * Each class extends {@link CustomOperationRequestAbstract} and
 * binds a typed `*RequestData` DTO from
 * {@link CharacterPlayerModels} to:
 * - the matching {@link OperationCode};
 * - the {@link RequestType.CharacterPlayer} domain;
 * - the appropriate {@link RequestRole} based on the wrapper
 *   name prefix (`XxxOperationRequest` → Client,
 *   `ServerXxxOperationRequest` → Server,
 *   `AdminXxxOperationRequest` → Admin).
 *
 * All wrappers carry an explicit `characterId` even on the
 * client variants — the CharacterPlayer domain operates on a
 * specific character rather than the authenticated user's
 * implicit "current" character.
 */
export namespace CharacterPlayerRequestModels {
	/**
	 * Maps the AddPlayerFriend operation to a typed request wrapper.
	 */
	export class AddPlayerFriendOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.AddPlayerFriendRequestData> {
		protected override operationCode: string = OperationCode.AddPlayerFriend;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new AddPlayerFriendOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.AddPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AddPlayerFriendRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerAddPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerAddPlayerFriendRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminAddPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminAddPlayerFriendRequestData;
		}
	}

	/**
	 * Maps the AddSegment operation to a typed request wrapper.
	 */
	export class AddSegmentOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.AddSegmentRequestData> {
		protected override operationCode: string = OperationCode.AddSegment;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new AddSegmentOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.AddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AddSegmentRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerAddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerAddSegmentRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminAddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminAddSegmentRequestData;
		}
	}

	/**
	 * Maps the GetAvatar operation to a typed request wrapper.
	 */
	export class GetAvatarOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetAvatarRequestData> {
		protected override operationCode: string = OperationCode.GetAvatar;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetAvatarOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetAvatarRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerGetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetAvatarRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminGetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetAvatarRequestData;
		}
	}

	/**
	 * Maps the GetCatalogId operation to a typed request wrapper.
	 */
	export class GetCatalogIdOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetCatalogIdRequestData> {
		protected override operationCode: string = OperationCode.GetCatalogId;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetCatalogIdOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetCatalogIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetCatalogIdRequestData;
		}
	}

	/**
	 * Maps the ServerGetCatalogId operation to a typed request wrapper.
	 */
	export class ServerGetCatalogIdOperationRequest extends GetCatalogIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetCatalogIdOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.ServerGetCatalogIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetCatalogIdRequestData;
		}
	}

	/**
	 * Maps the AdminGetCatalogId operation to a typed request wrapper.
	 */
	export class AdminGetCatalogIdOperationRequest extends GetCatalogIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetCatalogIdOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.AdminGetCatalogIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetCatalogIdRequestData;
		}
	}

	/**
	 * Maps the GetCountryCode operation to a typed request wrapper.
	 */
	export class GetCountryCodeOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetCountryCodeRequestData> {
		protected override operationCode: string = OperationCode.GetCountryCode;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetCountryCodeOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetCountryCodeRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerGetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetCountryCodeRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminGetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetCountryCodeRequestData;
		}
	}

	/**
	 * Maps the GetCustomData operation to a typed request wrapper.
	 */
	export class GetCustomDataOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetCustomDataRequestData> {
		protected override operationCode: string = OperationCode.GetCustomData;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetCustomDataOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetCustomDataRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerGetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetCustomDataRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminGetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetCustomDataRequestData;
		}
	}

	/**
	 * Maps the GetDisplayName operation to a typed request wrapper.
	 */
	export class GetDisplayNameOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetDisplayNameRequestData> {
		protected override operationCode: string = OperationCode.GetDisplayName;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetDisplayNameOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetDisplayNameRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerGetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetDisplayNameRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminGetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetDisplayNameRequestData;
		}
	}

	/**
	 * Maps the GetFriendStatisticsLeaderboardAroundPlayer operation to a typed request wrapper.
	 */
	export class GetFriendStatisticsLeaderboardAroundPlayerOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetFriendStatisticsLeaderboardAroundPlayerRequestData> {
		protected override operationCode: string = OperationCode.GetFriendStatisticsLeaderboardAroundPlayer;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetFriendStatisticsLeaderboardAroundPlayerOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetFriendStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetFriendStatisticsLeaderboardAroundPlayerRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerGetFriendStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetFriendStatisticsLeaderboardAroundPlayerRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminGetFriendStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetFriendStatisticsLeaderboardAroundPlayerRequestData;
		}
	}

	/**
	 * Maps the GetFriendStatisticsLeaderboard operation to a typed request wrapper.
	 */
	export class GetFriendStatisticsLeaderboardOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetFriendStatisticsLeaderboardRequestData> {
		protected override operationCode: string = OperationCode.GetFriendStatisticsLeaderboard;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetFriendStatisticsLeaderboardOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetFriendStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetFriendStatisticsLeaderboardRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerGetFriendStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetFriendStatisticsLeaderboardRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminGetFriendStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetFriendStatisticsLeaderboardRequestData;
		}
	}

	/**
	 * Maps the GetIpAddressCreate operation to a typed request wrapper.
	 */
	export class GetIpAddressCreateOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetIpAddressCreateRequestData> {
		protected override operationCode: string = OperationCode.GetIpAddressCreate;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetIpAddressCreateOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetIpAddressCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetIpAddressCreateRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerGetIpAddressCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetIpAddressCreateRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminGetIpAddressCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetIpAddressCreateRequestData;
		}
	}

	/**
	 * Maps the GetOwner operation to a typed request wrapper.
	 */
	export class GetOwnerOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetOwnerRequestData> {
		protected override operationCode: string = OperationCode.GetOwner;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetOwnerOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetOwnerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetOwnerRequestData;
		}
	}

	/**
	 * Maps the ServerGetOwner operation to a typed request wrapper.
	 */
	export class ServerGetOwnerOperationRequest extends GetOwnerOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetOwnerOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.ServerGetOwnerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetOwnerRequestData;
		}
	}

	/**
	 * Maps the AdminGetOwner operation to a typed request wrapper.
	 */
	export class AdminGetOwnerOperationRequest extends GetOwnerOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetOwnerOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.AdminGetOwnerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetOwnerRequestData;
		}
	}

	/**
	 * Maps the GetPlayerBan operation to a typed request wrapper.
	 */
	export class GetPlayerBanOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayerBanRequestData> {
		protected override operationCode: string = OperationCode.GetPlayerBan;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayerBanOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetPlayerBanRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerGetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetPlayerBanRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminGetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetPlayerBanRequestData;
		}
	}

	/**
	 * Maps the GetPlayerCurrency operation to a typed request wrapper.
	 */
	export class GetPlayerCurrencyOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayerCurrencyRequestData> {
		protected override operationCode: string = OperationCode.GetPlayerCurrency;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayerCurrencyOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetPlayerCurrencyRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerGetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetPlayerCurrencyRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminGetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetPlayerCurrencyRequestData;
		}
	}

	/**
	 * Maps the GetPlayerData operation to a typed request wrapper.
	 */
	export class GetPlayerDataOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayerDataRequestData> {
		protected override operationCode: string = OperationCode.GetPlayerData;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayerDataOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetPlayerDataRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerGetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetPlayerDataRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminGetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetPlayerDataRequestData;
		}
	}

	/**
	 * Maps the GetPlayerFriend operation to a typed request wrapper.
	 */
	export class GetPlayerFriendOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayerFriendRequestData> {
		protected override operationCode: string = OperationCode.GetPlayerFriend;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayerFriendOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetPlayerFriendRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerGetPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetPlayerFriendRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminGetPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetPlayerFriendRequestData;
		}
	}

	/**
	 * Maps the GetPlayerGroup operation to a typed request wrapper.
	 */
	export class GetPlayerGroupOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayerGroupRequestData> {
		protected override operationCode: string = OperationCode.GetPlayerGroup;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayerGroupOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetPlayerGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetPlayerGroupRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerGetPlayerGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetPlayerGroupRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminGetPlayerGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetPlayerGroupRequestData;
		}
	}

	/**
	 * Maps the GetPlayerInformation operation to a typed request wrapper.
	 */
	export class GetPlayerInformationOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayerInformationRequestData> {
		protected override operationCode: string = OperationCode.GetPlayerInformation;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayerInformationOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetPlayerInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetPlayerInformationRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerGetPlayerInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetPlayerInformationRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminGetPlayerInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetPlayerInformationRequestData;
		}
	}

	/**
	 * Maps the GetPlayerInventory operation to a typed request wrapper.
	 */
	export class GetPlayerInventoryOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayerInventoryRequestData> {
		protected override operationCode: string = OperationCode.GetPlayerInventory;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayerInventoryOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetPlayerInventoryRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetPlayerInventoryRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerGetPlayerInventoryRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetPlayerInventoryRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminGetPlayerInventoryRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetPlayerInventoryRequestData;
		}
	}

	/**
	 * Maps the GetPlayerStatistics operation to a typed request wrapper.
	 */
	export class GetPlayerStatisticsOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayerStatisticsRequestData> {
		protected override operationCode: string = OperationCode.GetPlayerStatistics;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayerStatisticsOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetPlayerStatisticsRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerGetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetPlayerStatisticsRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminGetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetPlayerStatisticsRequestData;
		}
	}

	/**
	 * Maps the GetPlayersWithDisplayName operation to a typed request wrapper.
	 */
	export class GetPlayersWithDisplayNameOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayersWithDisplayNameRequestData> {
		protected override operationCode: string = OperationCode.GetPlayersWithDisplayName;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayersWithDisplayNameOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetPlayersWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetPlayersWithDisplayNameRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerGetPlayersWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetPlayersWithDisplayNameRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminGetPlayersWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetPlayersWithDisplayNameRequestData;
		}
	}

	/**
	 * Maps the GetPlayersWithSegment operation to a typed request wrapper.
	 */
	export class GetPlayersWithSegmentOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayersWithSegmentRequestData> {
		protected override operationCode: string = OperationCode.GetPlayersWithSegment;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayersWithSegmentOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetPlayersWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetPlayersWithSegmentRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerGetPlayersWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetPlayersWithSegmentRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminGetPlayersWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetPlayersWithSegmentRequestData;
		}
	}

	/**
	 * Maps the GetPlayersWithTag operation to a typed request wrapper.
	 */
	export class GetPlayersWithTagOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayersWithTagRequestData> {
		protected override operationCode: string = OperationCode.GetPlayersWithTag;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayersWithTagOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetPlayersWithTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetPlayersWithTagRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerGetPlayersWithTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetPlayersWithTagRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminGetPlayersWithTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetPlayersWithTagRequestData;
		}
	}

	/**
	 * Maps the GetRemoveStatus operation to a typed request wrapper.
	 */
	export class GetRemoveStatusOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetRemoveStatusRequestData> {
		protected override operationCode: string = OperationCode.GetRemoveStatus;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetRemoveStatusOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetRemoveStatusRequestData;
		}
	}

	/**
	 * Maps the ServerGetRemoveStatus operation to a typed request wrapper.
	 */
	export class ServerGetRemoveStatusOperationRequest extends GetRemoveStatusOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetRemoveStatusOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.ServerGetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetRemoveStatusRequestData;
		}
	}

	/**
	 * Maps the AdminGetRemoveStatus operation to a typed request wrapper.
	 */
	export class AdminGetRemoveStatusOperationRequest extends GetRemoveStatusOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetRemoveStatusOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.AdminGetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetRemoveStatusRequestData;
		}
	}

	/**
	 * Maps the GetSegment operation to a typed request wrapper.
	 */
	export class GetSegmentOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetSegmentRequestData> {
		protected override operationCode: string = OperationCode.GetSegment;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetSegmentOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetSegmentRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerGetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetSegmentRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminGetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetSegmentRequestData;
		}
	}

	/**
	 * Maps the GetStatisticsLeaderboardAroundPlayer operation to a typed request wrapper.
	 */
	export class GetStatisticsLeaderboardAroundPlayerOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData> {
		protected override operationCode: string = OperationCode.GetStatisticsLeaderboardAroundPlayer;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetStatisticsLeaderboardAroundPlayerOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerGetStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetStatisticsLeaderboardAroundPlayerRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminGetStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetStatisticsLeaderboardAroundPlayerRequestData;
		}
	}

	/**
	 * Maps the GetStatisticsLeaderboard operation to a typed request wrapper.
	 */
	export class GetStatisticsLeaderboardOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetStatisticsLeaderboardRequestData> {
		protected override operationCode: string = OperationCode.GetStatisticsLeaderboard;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetStatisticsLeaderboardOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetStatisticsLeaderboardRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerGetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetStatisticsLeaderboardRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminGetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetStatisticsLeaderboardRequestData;
		}
	}

	/**
	 * Maps the GetTag operation to a typed request wrapper.
	 */
	export class GetTagOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetTagRequestData> {
		protected override operationCode: string = OperationCode.GetTag;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetTagOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetTagRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerGetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetTagRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminGetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetTagRequestData;
		}
	}

	/**
	 * Maps the GetTsCreate operation to a typed request wrapper.
	 */
	export class GetTsCreateOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetTsCreateRequestData> {
		protected override operationCode: string = OperationCode.GetTsCreate;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetTsCreateOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetTsCreateRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerGetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetTsCreateRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminGetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetTsCreateRequestData;
		}
	}

	/**
	 * Maps the GetTsLastLogin operation to a typed request wrapper.
	 */
	export class GetTsLastLoginOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetTsLastLoginRequestData> {
		protected override operationCode: string = OperationCode.GetTsLastLogin;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetTsLastLoginOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetTsLastLoginRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerGetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetTsLastLoginRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminGetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetTsLastLoginRequestData;
		}
	}

	/**
	 * Maps the CreateGroup operation to a typed request wrapper.
	 */
	export class CreateGroupOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.CreateGroupRequestData> {
		protected override operationCode: string = OperationCode.CreateGroup;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new CreateGroupOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.CreateGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.CreateGroupRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerCreateGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerCreateGroupRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminCreateGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminCreateGroupRequestData;
		}
	}

	/**
	 * Maps the CreatePlayerItem operation to a typed request wrapper.
	 */
	export class CreatePlayerItemOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.CreatePlayerItemRequestData> {
		protected override operationCode: string = OperationCode.CreatePlayerItem;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new CreatePlayerItemOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.CreatePlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.CreatePlayerItemRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerCreatePlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerCreatePlayerItemRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminCreatePlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminCreatePlayerItemRequestData;
		}
	}

	/**
	 * Maps the JoinGroup operation to a typed request wrapper.
	 */
	export class JoinGroupOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.JoinGroupRequestData> {
		protected override operationCode: string = OperationCode.JoinGroup;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new JoinGroupOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.JoinGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.JoinGroupRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerJoinGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerJoinGroupRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminJoinGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminJoinGroupRequestData;
		}
	}

	/**
	 * Maps the LeaveGroup operation to a typed request wrapper.
	 */
	export class LeaveGroupOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.LeaveGroupRequestData> {
		protected override operationCode: string = OperationCode.LeaveGroup;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LeaveGroupOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.LeaveGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.LeaveGroupRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerLeaveGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerLeaveGroupRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminLeaveGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminLeaveGroupRequestData;
		}
	}

	/**
	 * Maps the RemovePlayerFriend operation to a typed request wrapper.
	 */
	export class RemovePlayerFriendOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.RemovePlayerFriendRequestData> {
		protected override operationCode: string = OperationCode.RemovePlayerFriend;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new RemovePlayerFriendOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.RemovePlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.RemovePlayerFriendRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerRemovePlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerRemovePlayerFriendRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminRemovePlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminRemovePlayerFriendRequestData;
		}
	}

	/**
	 * Maps the RemovePlayerItem operation to a typed request wrapper.
	 */
	export class RemovePlayerItemOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.RemovePlayerItemRequestData> {
		protected override operationCode: string = OperationCode.RemovePlayerItem;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new RemovePlayerItemOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.RemovePlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.RemovePlayerItemRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerRemovePlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerRemovePlayerItemRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminRemovePlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminRemovePlayerItemRequestData;
		}
	}

	/**
	 * Maps the RemoveSegment operation to a typed request wrapper.
	 */
	export class RemoveSegmentOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.RemoveSegmentRequestData> {
		protected override operationCode: string = OperationCode.RemoveSegment;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new RemoveSegmentOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.RemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.RemoveSegmentRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerRemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerRemoveSegmentRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminRemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminRemoveSegmentRequestData;
		}
	}

	/**
	 * Maps the RemoveTag operation to a typed request wrapper.
	 */
	export class RemoveTagOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.RemoveTagRequestData> {
		protected override operationCode: string = OperationCode.RemoveTag;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new RemoveTagOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.RemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.RemoveTagRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerRemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerRemoveTagRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminRemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminRemoveTagRequestData;
		}
	}

	/**
	 * Maps the SetAvatar operation to a typed request wrapper.
	 */
	export class SetAvatarOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.SetAvatarRequestData> {
		protected override operationCode: string = OperationCode.SetAvatar;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetAvatarOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.SetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.SetAvatarRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerSetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerSetAvatarRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminSetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminSetAvatarRequestData;
		}
	}

	/**
	 * Maps the SetCountryCode operation to a typed request wrapper.
	 */
	export class SetCountryCodeOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.SetCountryCodeRequestData> {
		protected override operationCode: string = OperationCode.SetCountryCode;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetCountryCodeOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.SetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.SetCountryCodeRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerSetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerSetCountryCodeRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminSetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminSetCountryCodeRequestData;
		}
	}

	/**
	 * Maps the SetCustomData operation to a typed request wrapper.
	 */
	export class SetCustomDataOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.SetCustomDataRequestData> {
		protected override operationCode: string = OperationCode.SetCustomData;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetCustomDataOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.SetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.SetCustomDataRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerSetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerSetCustomDataRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminSetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminSetCustomDataRequestData;
		}
	}

	/**
	 * Maps the SetDisplayName operation to a typed request wrapper.
	 */
	export class SetDisplayNameOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.SetDisplayNameRequestData> {
		protected override operationCode: string = OperationCode.SetDisplayName;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetDisplayNameOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.SetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.SetDisplayNameRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerSetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerSetDisplayNameRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminSetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminSetDisplayNameRequestData;
		}
	}

	/**
	 * Maps the SetOwner operation to a typed request wrapper.
	 */
	export class SetOwnerOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.SetOwnerRequestData> {
		protected override operationCode: string = OperationCode.SetOwner;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetOwnerOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.SetOwnerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.SetOwnerRequestData;
		}
	}

	/**
	 * Maps the ServerSetOwner operation to a typed request wrapper.
	 */
	export class ServerSetOwnerOperationRequest extends SetOwnerOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerSetOwnerOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.ServerSetOwnerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerSetOwnerRequestData;
		}
	}

	/**
	 * Maps the AdminSetOwner operation to a typed request wrapper.
	 */
	export class AdminSetOwnerOperationRequest extends SetOwnerOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminSetOwnerOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.AdminSetOwnerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminSetOwnerRequestData;
		}
	}

	/**
	 * Maps the SetPlayerBan operation to a typed request wrapper.
	 */
	export class SetPlayerBanOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.SetPlayerBanRequestData> {
		protected override operationCode: string = OperationCode.SetPlayerBan;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetPlayerBanOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.SetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.SetPlayerBanRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerSetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerSetPlayerBanRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminSetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminSetPlayerBanRequestData;
		}
	}

	/**
	 * Maps the ChangePlayerCurrency operation to a typed request wrapper.
	 */
	export class ChangePlayerCurrencyOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.ChangePlayerCurrencyRequestData> {
		protected override operationCode: string = OperationCode.ChangePlayerCurrency;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new ChangePlayerCurrencyOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.ChangePlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ChangePlayerCurrencyRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerChangePlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerChangePlayerCurrencyRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminChangePlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminChangePlayerCurrencyRequestData;
		}
	}

	/**
	 * Maps the SetPlayerData operation to a typed request wrapper.
	 */
	export class SetPlayerDataOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.SetPlayerDataRequestData> {
		protected override operationCode: string = OperationCode.SetPlayerData;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetPlayerDataOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.SetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.SetPlayerDataRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerSetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerSetPlayerDataRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminSetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminSetPlayerDataRequestData;
		}
	}

	/**
	 * Maps the ChangePlayerStatistics operation to a typed request wrapper.
	 */
	export class ChangePlayerStatisticsOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.ChangePlayerStatisticsRequestData> {
		protected override operationCode: string = OperationCode.ChangePlayerStatistics;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new ChangePlayerStatisticsOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.ChangePlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ChangePlayerStatisticsRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerChangePlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerChangePlayerStatisticsRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminChangePlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminChangePlayerStatisticsRequestData;
		}
	}

	/**
	 * Maps the SetRemoveStatus operation to a typed request wrapper.
	 */
	export class SetRemoveStatusOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.SetRemoveStatusRequestData> {
		protected override operationCode: string = OperationCode.SetRemoveStatus;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetRemoveStatusOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.SetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.SetRemoveStatusRequestData;
		}
	}

	/**
	 * Maps the ServerSetRemoveStatus operation to a typed request wrapper.
	 */
	export class ServerSetRemoveStatusOperationRequest extends SetRemoveStatusOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerSetRemoveStatusOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.ServerSetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerSetRemoveStatusRequestData;
		}
	}

	/**
	 * Maps the AdminSetRemoveStatus operation to a typed request wrapper.
	 */
	export class AdminSetRemoveStatusOperationRequest extends SetRemoveStatusOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminSetRemoveStatusOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.AdminSetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminSetRemoveStatusRequestData;
		}
	}

	/**
	 * Maps the SetTag operation to a typed request wrapper.
	 */
	export class SetTagOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.SetTagRequestData> {
		protected override operationCode: string = OperationCode.SetTag;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetTagOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.SetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.SetTagRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerSetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerSetTagRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminSetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminSetTagRequestData;
		}
	}

	/**
	 * Maps the GetCurrencyLeaderboard operation to a typed request wrapper.
	 */
	export class GetCurrencyLeaderboardOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetCurrencyLeaderboardRequestData> {
		protected override operationCode: string = OperationCode.GetCurrencyLeaderboard;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetCurrencyLeaderboardOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetCurrencyLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetCurrencyLeaderboardRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerGetCurrencyLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetCurrencyLeaderboardRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminGetCurrencyLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetCurrencyLeaderboardRequestData;
		}
	}

	/**
	 * Maps the GetCreateLeaderboard operation to a typed request wrapper.
	 */
	export class GetCreateLeaderboardOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetCreateLeaderboardRequestData> {
		protected override operationCode: string = OperationCode.GetCreateLeaderboard;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetCreateLeaderboardOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetCreateLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetCreateLeaderboardRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerGetCreateLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetCreateLeaderboardRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminGetCreateLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetCreateLeaderboardRequestData;
		}
	}

	/**
	 * Maps the GetLastLoginLeaderboard operation to a typed request wrapper.
	 */
	export class GetLastLoginLeaderboardOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetLastLoginLeaderboardRequestData> {
		protected override operationCode: string = OperationCode.GetLastLoginLeaderboard;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetLastLoginLeaderboardOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetLastLoginLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetLastLoginLeaderboardRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerGetLastLoginLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetLastLoginLeaderboardRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminGetLastLoginLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetLastLoginLeaderboardRequestData;
		}
	}

	/**
	 * Maps the GetStatisticsLog operation to a typed request wrapper.
	 */
	export class GetStatisticsLogOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetStatisticsLogRequestData> {
		protected override operationCode: string = OperationCode.GetStatisticsLog;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetStatisticsLogOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetStatisticsLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetStatisticsLogRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerGetStatisticsLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetStatisticsLogRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminGetStatisticsLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetStatisticsLogRequestData;
		}
	}

	/**
	 * Maps the GetCurrencyLog operation to a typed request wrapper.
	 */
	export class GetCurrencyLogOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetCurrencyLogRequestData> {
		protected override operationCode: string = OperationCode.GetCurrencyLog;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetCurrencyLogOperationRequest instance.
		 */
		constructor(requestData: CharacterPlayerModels.GetCurrencyLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetCurrencyLogRequestData;
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
		constructor(requestData: CharacterPlayerModels.ServerGetCurrencyLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetCurrencyLogRequestData;
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
		constructor(requestData: CharacterPlayerModels.AdminGetCurrencyLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetCurrencyLogRequestData;
		}
	}

}
