import { OperationCode } from "./../../constant/OperationCode";
import { RequestRole } from "./../../constant/enumType/RequestRole";
import { RequestType } from "./../../constant/enumType/RequestType";
import { CustomOperationRequestAbstract } from "./../request/CustomOperationRequest";
import { CharacterPlayerModels } from "./CharacterPlayerModels";

export namespace CharacterPlayerRequestModels {
	export class AddPlayerFriendOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.AddPlayerFriendRequestData> {
		protected override operationCode: number = OperationCode.AddPlayerFriend;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.AddPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AddPlayerFriendRequestData;
		}
	}

	export class ServerAddPlayerFriendOperationRequest extends AddPlayerFriendOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerAddPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerAddPlayerFriendRequestData;
		}
	}

	export class AdminAddPlayerFriendOperationRequest extends AddPlayerFriendOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminAddPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminAddPlayerFriendRequestData;
		}
	}

	export class AddSegmentOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.AddSegmentRequestData> {
		protected override operationCode: number = OperationCode.AddSegment;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.AddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AddSegmentRequestData;
		}
	}

	export class ServerAddSegmentOperationRequest extends AddSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerAddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerAddSegmentRequestData;
		}
	}

	export class AdminAddSegmentOperationRequest extends AddSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminAddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminAddSegmentRequestData;
		}
	}

	export class GetAvatarOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetAvatarRequestData> {
		protected override operationCode: number = OperationCode.GetAvatar;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetAvatarRequestData;
		}
	}

	export class ServerGetAvatarOperationRequest extends GetAvatarOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetAvatarRequestData;
		}
	}

	export class AdminGetAvatarOperationRequest extends GetAvatarOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetAvatarRequestData;
		}
	}

	export class GetCatalogIdOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetCatalogIdRequestData> {
		protected override operationCode: number = OperationCode.GetCatalogId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetCatalogIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetCatalogIdRequestData;
		}
	}

	export class ServerGetCatalogIdOperationRequest extends GetCatalogIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetCatalogIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetCatalogIdRequestData;
		}
	}

	export class AdminGetCatalogIdOperationRequest extends GetCatalogIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetCatalogIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetCatalogIdRequestData;
		}
	}

	export class GetCountryCodeOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetCountryCodeRequestData> {
		protected override operationCode: number = OperationCode.GetCountryCode;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetCountryCodeRequestData;
		}
	}

	export class ServerGetCountryCodeOperationRequest extends GetCountryCodeOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetCountryCodeRequestData;
		}
	}

	export class AdminGetCountryCodeOperationRequest extends GetCountryCodeOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetCountryCodeRequestData;
		}
	}

	export class GetCustomDataOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetCustomDataRequestData> {
		protected override operationCode: number = OperationCode.GetCustomData;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetCustomDataRequestData;
		}
	}

	export class ServerGetCustomDataOperationRequest extends GetCustomDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetCustomDataRequestData;
		}
	}

	export class AdminGetCustomDataOperationRequest extends GetCustomDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetCustomDataRequestData;
		}
	}

	export class GetDisplayNameOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetDisplayNameRequestData> {
		protected override operationCode: number = OperationCode.GetDisplayName;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetDisplayNameRequestData;
		}
	}

	export class ServerGetDisplayNameOperationRequest extends GetDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetDisplayNameRequestData;
		}
	}

	export class AdminGetDisplayNameOperationRequest extends GetDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetDisplayNameRequestData;
		}
	}

	export class GetFriendStatisticsLeaderboardAroundPlayerOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetFriendStatisticsLeaderboardAroundPlayerRequestData> {
		protected override operationCode: number = OperationCode.GetFriendStatisticsLeaderboardAroundPlayer;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetFriendStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetFriendStatisticsLeaderboardAroundPlayerRequestData;
		}
	}

	export class ServerGetFriendStatisticsLeaderboardAroundPlayerOperationRequest extends GetFriendStatisticsLeaderboardAroundPlayerOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetFriendStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetFriendStatisticsLeaderboardAroundPlayerRequestData;
		}
	}

	export class AdminGetFriendStatisticsLeaderboardAroundPlayerOperationRequest extends GetFriendStatisticsLeaderboardAroundPlayerOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetFriendStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetFriendStatisticsLeaderboardAroundPlayerRequestData;
		}
	}

	export class GetFriendStatisticsLeaderboardOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetFriendStatisticsLeaderboardRequestData> {
		protected override operationCode: number = OperationCode.GetFriendStatisticsLeaderboard;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetFriendStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetFriendStatisticsLeaderboardRequestData;
		}
	}

	export class ServerGetFriendStatisticsLeaderboardOperationRequest extends GetFriendStatisticsLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetFriendStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetFriendStatisticsLeaderboardRequestData;
		}
	}

	export class AdminGetFriendStatisticsLeaderboardOperationRequest extends GetFriendStatisticsLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetFriendStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetFriendStatisticsLeaderboardRequestData;
		}
	}

	export class GetIpAddressCreateOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetIpAddressCreateRequestData> {
		protected override operationCode: number = OperationCode.GetIpAddressCreate;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetIpAddressCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetIpAddressCreateRequestData;
		}
	}

	export class ServerGetIpAddressCreateOperationRequest extends GetIpAddressCreateOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetIpAddressCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetIpAddressCreateRequestData;
		}
	}

	export class AdminGetIpAddressCreateOperationRequest extends GetIpAddressCreateOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetIpAddressCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetIpAddressCreateRequestData;
		}
	}

	export class GetOwnerOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetOwnerRequestData> {
		protected override operationCode: number = OperationCode.GetOwner;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetOwnerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetOwnerRequestData;
		}
	}

	export class ServerGetOwnerOperationRequest extends GetOwnerOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetOwnerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetOwnerRequestData;
		}
	}

	export class AdminGetOwnerOperationRequest extends GetOwnerOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetOwnerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetOwnerRequestData;
		}
	}

	export class GetPlayerBanOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayerBanRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerBan;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetPlayerBanRequestData;
		}
	}

	export class ServerGetPlayerBanOperationRequest extends GetPlayerBanOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetPlayerBanRequestData;
		}
	}

	export class AdminGetPlayerBanOperationRequest extends GetPlayerBanOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetPlayerBanRequestData;
		}
	}

	export class GetPlayerCurrencyOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayerCurrencyRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerCurrency;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetPlayerCurrencyRequestData;
		}
	}

	export class ServerGetPlayerCurrencyOperationRequest extends GetPlayerCurrencyOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetPlayerCurrencyRequestData;
		}
	}

	export class AdminGetPlayerCurrencyOperationRequest extends GetPlayerCurrencyOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetPlayerCurrencyRequestData;
		}
	}

	export class GetPlayerDataOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayerDataRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerData;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetPlayerDataRequestData;
		}
	}

	export class ServerGetPlayerDataOperationRequest extends GetPlayerDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetPlayerDataRequestData;
		}
	}

	export class AdminGetPlayerDataOperationRequest extends GetPlayerDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetPlayerDataRequestData;
		}
	}

	export class GetPlayerFriendOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayerFriendRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerFriend;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetPlayerFriendRequestData;
		}
	}

	export class ServerGetPlayerFriendOperationRequest extends GetPlayerFriendOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetPlayerFriendRequestData;
		}
	}

	export class AdminGetPlayerFriendOperationRequest extends GetPlayerFriendOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetPlayerFriendRequestData;
		}
	}

	export class GetPlayerGroupOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayerGroupRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerGroup;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetPlayerGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetPlayerGroupRequestData;
		}
	}

	export class ServerGetPlayerGroupOperationRequest extends GetPlayerGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetPlayerGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetPlayerGroupRequestData;
		}
	}

	export class AdminGetPlayerGroupOperationRequest extends GetPlayerGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetPlayerGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetPlayerGroupRequestData;
		}
	}

	export class GetPlayerInformationOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayerInformationRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerInformation;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetPlayerInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetPlayerInformationRequestData;
		}
	}

	export class ServerGetPlayerInformationOperationRequest extends GetPlayerInformationOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetPlayerInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetPlayerInformationRequestData;
		}
	}

	export class AdminGetPlayerInformationOperationRequest extends GetPlayerInformationOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetPlayerInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetPlayerInformationRequestData;
		}
	}

	export class GetPlayerInventoryOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayerInventoryRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerInventory;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetPlayerInventoryRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetPlayerInventoryRequestData;
		}
	}

	export class ServerGetPlayerInventoryOperationRequest extends GetPlayerInventoryOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetPlayerInventoryRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetPlayerInventoryRequestData;
		}
	}

	export class AdminGetPlayerInventoryOperationRequest extends GetPlayerInventoryOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetPlayerInventoryRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetPlayerInventoryRequestData;
		}
	}

	export class GetPlayerStatisticsOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayerStatisticsRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerStatistics;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetPlayerStatisticsRequestData;
		}
	}

	export class ServerGetPlayerStatisticsOperationRequest extends GetPlayerStatisticsOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetPlayerStatisticsRequestData;
		}
	}

	export class AdminGetPlayerStatisticsOperationRequest extends GetPlayerStatisticsOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetPlayerStatisticsRequestData;
		}
	}

	export class GetPlayersWithDisplayNameOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayersWithDisplayNameRequestData> {
		protected override operationCode: number = OperationCode.GetPlayersWithDisplayName;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetPlayersWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetPlayersWithDisplayNameRequestData;
		}
	}

	export class ServerGetPlayersWithDisplayNameOperationRequest extends GetPlayersWithDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetPlayersWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetPlayersWithDisplayNameRequestData;
		}
	}

	export class AdminGetPlayersWithDisplayNameOperationRequest extends GetPlayersWithDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetPlayersWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetPlayersWithDisplayNameRequestData;
		}
	}

	export class GetPlayersWithSegmentOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayersWithSegmentRequestData> {
		protected override operationCode: number = OperationCode.GetPlayersWithSegment;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetPlayersWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetPlayersWithSegmentRequestData;
		}
	}

	export class ServerGetPlayersWithSegmentOperationRequest extends GetPlayersWithSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetPlayersWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetPlayersWithSegmentRequestData;
		}
	}

	export class AdminGetPlayersWithSegmentOperationRequest extends GetPlayersWithSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetPlayersWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetPlayersWithSegmentRequestData;
		}
	}

	export class GetPlayersWithTagOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayersWithTagRequestData> {
		protected override operationCode: number = OperationCode.GetPlayersWithTag;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetPlayersWithTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetPlayersWithTagRequestData;
		}
	}

	export class ServerGetPlayersWithTagOperationRequest extends GetPlayersWithTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetPlayersWithTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetPlayersWithTagRequestData;
		}
	}

	export class AdminGetPlayersWithTagOperationRequest extends GetPlayersWithTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetPlayersWithTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetPlayersWithTagRequestData;
		}
	}

	export class GetRemoveStatusOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetRemoveStatusRequestData> {
		protected override operationCode: number = OperationCode.GetRemoveStatus;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetRemoveStatusRequestData;
		}
	}

	export class ServerGetRemoveStatusOperationRequest extends GetRemoveStatusOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetRemoveStatusRequestData;
		}
	}

	export class AdminGetRemoveStatusOperationRequest extends GetRemoveStatusOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetRemoveStatusRequestData;
		}
	}

	export class GetSegmentOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetSegmentRequestData> {
		protected override operationCode: number = OperationCode.GetSegment;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetSegmentRequestData;
		}
	}

	export class ServerGetSegmentOperationRequest extends GetSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetSegmentRequestData;
		}
	}

	export class AdminGetSegmentOperationRequest extends GetSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetSegmentRequestData;
		}
	}

	export class GetStatisticsLeaderboardAroundPlayerOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData> {
		protected override operationCode: number = OperationCode.GetStatisticsLeaderboardAroundPlayer;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData;
		}
	}

	export class ServerGetStatisticsLeaderboardAroundPlayerOperationRequest extends GetStatisticsLeaderboardAroundPlayerOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetStatisticsLeaderboardAroundPlayerRequestData;
		}
	}

	export class AdminGetStatisticsLeaderboardAroundPlayerOperationRequest extends GetStatisticsLeaderboardAroundPlayerOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetStatisticsLeaderboardAroundPlayerRequestData;
		}
	}

	export class GetStatisticsLeaderboardOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetStatisticsLeaderboardRequestData> {
		protected override operationCode: number = OperationCode.GetStatisticsLeaderboard;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetStatisticsLeaderboardRequestData;
		}
	}

	export class ServerGetStatisticsLeaderboardOperationRequest extends GetStatisticsLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetStatisticsLeaderboardRequestData;
		}
	}

	export class AdminGetStatisticsLeaderboardOperationRequest extends GetStatisticsLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetStatisticsLeaderboardRequestData;
		}
	}

	export class GetTagOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetTagRequestData> {
		protected override operationCode: number = OperationCode.GetTag;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetTagRequestData;
		}
	}

	export class ServerGetTagOperationRequest extends GetTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetTagRequestData;
		}
	}

	export class AdminGetTagOperationRequest extends GetTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetTagRequestData;
		}
	}

	export class GetTsCreateOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetTsCreateRequestData> {
		protected override operationCode: number = OperationCode.GetTsCreate;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetTsCreateRequestData;
		}
	}

	export class ServerGetTsCreateOperationRequest extends GetTsCreateOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetTsCreateRequestData;
		}
	}

	export class AdminGetTsCreateOperationRequest extends GetTsCreateOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetTsCreateRequestData;
		}
	}

	export class GetTsLastLoginOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetTsLastLoginRequestData> {
		protected override operationCode: number = OperationCode.GetTsLastLogin;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetTsLastLoginRequestData;
		}
	}

	export class ServerGetTsLastLoginOperationRequest extends GetTsLastLoginOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetTsLastLoginRequestData;
		}
	}

	export class AdminGetTsLastLoginOperationRequest extends GetTsLastLoginOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetTsLastLoginRequestData;
		}
	}

	export class GrantGroupOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GrantGroupRequestData> {
		protected override operationCode: number = OperationCode.GrantGroup;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GrantGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GrantGroupRequestData;
		}
	}

	export class ServerGrantGroupOperationRequest extends GrantGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGrantGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGrantGroupRequestData;
		}
	}

	export class AdminGrantGroupOperationRequest extends GrantGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGrantGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGrantGroupRequestData;
		}
	}

	export class GrantPlayerItemOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GrantPlayerItemRequestData> {
		protected override operationCode: number = OperationCode.GrantPlayerItem;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GrantPlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GrantPlayerItemRequestData;
		}
	}

	export class ServerGrantPlayerItemOperationRequest extends GrantPlayerItemOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGrantPlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGrantPlayerItemRequestData;
		}
	}

	export class AdminGrantPlayerItemOperationRequest extends GrantPlayerItemOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGrantPlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGrantPlayerItemRequestData;
		}
	}

	export class JoinGroupOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.JoinGroupRequestData> {
		protected override operationCode: number = OperationCode.JoinGroup;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.JoinGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.JoinGroupRequestData;
		}
	}

	export class ServerJoinGroupOperationRequest extends JoinGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerJoinGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerJoinGroupRequestData;
		}
	}

	export class AdminJoinGroupOperationRequest extends JoinGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminJoinGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminJoinGroupRequestData;
		}
	}

	export class LeaveGroupOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.LeaveGroupRequestData> {
		protected override operationCode: number = OperationCode.LeaveGroup;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.LeaveGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.LeaveGroupRequestData;
		}
	}

	export class ServerLeaveGroupOperationRequest extends LeaveGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerLeaveGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerLeaveGroupRequestData;
		}
	}

	export class AdminLeaveGroupOperationRequest extends LeaveGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminLeaveGroupRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminLeaveGroupRequestData;
		}
	}

	export class RemovePlayerFriendOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.RemovePlayerFriendRequestData> {
		protected override operationCode: number = OperationCode.RemovePlayerFriend;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.RemovePlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.RemovePlayerFriendRequestData;
		}
	}

	export class ServerRemovePlayerFriendOperationRequest extends RemovePlayerFriendOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerRemovePlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerRemovePlayerFriendRequestData;
		}
	}

	export class AdminRemovePlayerFriendOperationRequest extends RemovePlayerFriendOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminRemovePlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminRemovePlayerFriendRequestData;
		}
	}

	export class RemovePlayerItemOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.RemovePlayerItemRequestData> {
		protected override operationCode: number = OperationCode.RemovePlayerItem;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.RemovePlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.RemovePlayerItemRequestData;
		}
	}

	export class ServerRemovePlayerItemOperationRequest extends RemovePlayerItemOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerRemovePlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerRemovePlayerItemRequestData;
		}
	}

	export class AdminRemovePlayerItemOperationRequest extends RemovePlayerItemOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminRemovePlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminRemovePlayerItemRequestData;
		}
	}

	export class RemoveSegmentOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.RemoveSegmentRequestData> {
		protected override operationCode: number = OperationCode.RemoveSegment;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.RemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.RemoveSegmentRequestData;
		}
	}

	export class ServerRemoveSegmentOperationRequest extends RemoveSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerRemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerRemoveSegmentRequestData;
		}
	}

	export class AdminRemoveSegmentOperationRequest extends RemoveSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminRemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminRemoveSegmentRequestData;
		}
	}

	export class RemoveTagOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.RemoveTagRequestData> {
		protected override operationCode: number = OperationCode.RemoveTag;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.RemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.RemoveTagRequestData;
		}
	}

	export class ServerRemoveTagOperationRequest extends RemoveTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerRemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerRemoveTagRequestData;
		}
	}

	export class AdminRemoveTagOperationRequest extends RemoveTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminRemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminRemoveTagRequestData;
		}
	}

	export class SetAvatarOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.SetAvatarRequestData> {
		protected override operationCode: number = OperationCode.SetAvatar;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.SetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.SetAvatarRequestData;
		}
	}

	export class ServerSetAvatarOperationRequest extends SetAvatarOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerSetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerSetAvatarRequestData;
		}
	}

	export class AdminSetAvatarOperationRequest extends SetAvatarOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminSetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminSetAvatarRequestData;
		}
	}

	export class SetCountryCodeOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.SetCountryCodeRequestData> {
		protected override operationCode: number = OperationCode.SetCountryCode;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.SetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.SetCountryCodeRequestData;
		}
	}

	export class ServerSetCountryCodeOperationRequest extends SetCountryCodeOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerSetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerSetCountryCodeRequestData;
		}
	}

	export class AdminSetCountryCodeOperationRequest extends SetCountryCodeOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminSetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminSetCountryCodeRequestData;
		}
	}

	export class SetCustomDataOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.SetCustomDataRequestData> {
		protected override operationCode: number = OperationCode.SetCustomData;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.SetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.SetCustomDataRequestData;
		}
	}

	export class ServerSetCustomDataOperationRequest extends SetCustomDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerSetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerSetCustomDataRequestData;
		}
	}

	export class AdminSetCustomDataOperationRequest extends SetCustomDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminSetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminSetCustomDataRequestData;
		}
	}

	export class SetDisplayNameOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.SetDisplayNameRequestData> {
		protected override operationCode: number = OperationCode.SetDisplayName;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.SetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.SetDisplayNameRequestData;
		}
	}

	export class ServerSetDisplayNameOperationRequest extends SetDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerSetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerSetDisplayNameRequestData;
		}
	}

	export class AdminSetDisplayNameOperationRequest extends SetDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminSetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminSetDisplayNameRequestData;
		}
	}

	export class SetOwnerOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.SetOwnerRequestData> {
		protected override operationCode: number = OperationCode.SetOwner;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.SetOwnerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.SetOwnerRequestData;
		}
	}

	export class ServerSetOwnerOperationRequest extends SetOwnerOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerSetOwnerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerSetOwnerRequestData;
		}
	}

	export class AdminSetOwnerOperationRequest extends SetOwnerOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminSetOwnerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminSetOwnerRequestData;
		}
	}

	export class SetPlayerBanOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.SetPlayerBanRequestData> {
		protected override operationCode: number = OperationCode.SetPlayerBan;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.SetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.SetPlayerBanRequestData;
		}
	}

	export class ServerSetPlayerBanOperationRequest extends SetPlayerBanOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerSetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerSetPlayerBanRequestData;
		}
	}

	export class AdminSetPlayerBanOperationRequest extends SetPlayerBanOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminSetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminSetPlayerBanRequestData;
		}
	}

	export class SetPlayerCurrencyOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.SetPlayerCurrencyRequestData> {
		protected override operationCode: number = OperationCode.SetPlayerCurrency;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.SetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.SetPlayerCurrencyRequestData;
		}
	}

	export class ServerSetPlayerCurrencyOperationRequest extends SetPlayerCurrencyOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerSetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerSetPlayerCurrencyRequestData;
		}
	}

	export class AdminSetPlayerCurrencyOperationRequest extends SetPlayerCurrencyOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminSetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminSetPlayerCurrencyRequestData;
		}
	}

	export class SetPlayerDataOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.SetPlayerDataRequestData> {
		protected override operationCode: number = OperationCode.SetPlayerData;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.SetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.SetPlayerDataRequestData;
		}
	}

	export class ServerSetPlayerDataOperationRequest extends SetPlayerDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerSetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerSetPlayerDataRequestData;
		}
	}

	export class AdminSetPlayerDataOperationRequest extends SetPlayerDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminSetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminSetPlayerDataRequestData;
		}
	}

	export class SetPlayerStatisticsOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.SetPlayerStatisticsRequestData> {
		protected override operationCode: number = OperationCode.SetPlayerStatistics;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.SetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.SetPlayerStatisticsRequestData;
		}
	}

	export class ServerSetPlayerStatisticsOperationRequest extends SetPlayerStatisticsOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerSetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerSetPlayerStatisticsRequestData;
		}
	}

	export class AdminSetPlayerStatisticsOperationRequest extends SetPlayerStatisticsOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminSetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminSetPlayerStatisticsRequestData;
		}
	}

	export class SetRemoveStatusOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.SetRemoveStatusRequestData> {
		protected override operationCode: number = OperationCode.SetRemoveStatus;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.SetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.SetRemoveStatusRequestData;
		}
	}

	export class ServerSetRemoveStatusOperationRequest extends SetRemoveStatusOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerSetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerSetRemoveStatusRequestData;
		}
	}

	export class AdminSetRemoveStatusOperationRequest extends SetRemoveStatusOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminSetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminSetRemoveStatusRequestData;
		}
	}

	export class SetTagOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.SetTagRequestData> {
		protected override operationCode: number = OperationCode.SetTag;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.SetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.SetTagRequestData;
		}
	}

	export class ServerSetTagOperationRequest extends SetTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerSetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerSetTagRequestData;
		}
	}

	export class AdminSetTagOperationRequest extends SetTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminSetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminSetTagRequestData;
		}
	}

	export class GetCurrencyLeaderboardOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetCurrencyLeaderboardRequestData> {
		protected override operationCode: number = OperationCode.GetCurrencyLeaderboard;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetCurrencyLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetCurrencyLeaderboardRequestData;
		}
	}

	export class ServerGetCurrencyLeaderboardOperationRequest extends GetCurrencyLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetCurrencyLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetCurrencyLeaderboardRequestData;
		}
	}

	export class AdminGetCurrencyLeaderboardOperationRequest extends GetCurrencyLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetCurrencyLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetCurrencyLeaderboardRequestData;
		}
	}

	export class GetCreateLeaderboardOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetCreateLeaderboardRequestData> {
		protected override operationCode: number = OperationCode.GetCreateLeaderboard;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetCreateLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetCreateLeaderboardRequestData;
		}
	}

	export class ServerGetCreateLeaderboardOperationRequest extends GetCreateLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetCreateLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetCreateLeaderboardRequestData;
		}
	}

	export class AdminGetCreateLeaderboardOperationRequest extends GetCreateLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetCreateLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetCreateLeaderboardRequestData;
		}
	}

    export class GetLastLoginLeaderboardOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetLastLoginLeaderboardRequestData> {
		protected override operationCode: number = OperationCode.GetLastLoginLeaderboard;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetLastLoginLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetLastLoginLeaderboardRequestData;
		}
	}

	export class ServerGetLastLoginLeaderboardOperationRequest extends GetLastLoginLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetLastLoginLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetLastLoginLeaderboardRequestData;
		}
	}

	export class AdminGetLastLoginLeaderboardOperationRequest extends GetLastLoginLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetLastLoginLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetLastLoginLeaderboardRequestData;
		}
	}

	export class GetStatisticsLogOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetStatisticsLogRequestData> {
		protected override operationCode: number = OperationCode.GetStatisticsLog;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetStatisticsLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetStatisticsLogRequestData;
		}
	}

	export class ServerGetStatisticsLogOperationRequest extends GetStatisticsLogOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetStatisticsLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetStatisticsLogRequestData;
		}
	}

	export class AdminGetStatisticsLogOperationRequest extends GetStatisticsLogOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetStatisticsLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetStatisticsLogRequestData;
		}
	}

	export class GetCurrencyLogOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetCurrencyLogRequestData> {
		protected override operationCode: number = OperationCode.GetCurrencyLog;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetCurrencyLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.GetCurrencyLogRequestData;
		}
	}

	export class ServerGetCurrencyLogOperationRequest extends GetCurrencyLogOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.ServerGetCurrencyLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.ServerGetCurrencyLogRequestData;
		}
	}

	export class AdminGetCurrencyLogOperationRequest extends GetCurrencyLogOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AdminGetCurrencyLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = CharacterPlayerModels.AdminGetCurrencyLogRequestData;
		}
	}

}
