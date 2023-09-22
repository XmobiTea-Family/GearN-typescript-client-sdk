import { OperationCode } from "../../constant/OperationCode";
import { RequestRole } from "../../constant/enumType/RequestRole";
import { RequestType } from "../../constant/enumType/RequestType";
import { CustomOperationRequestAbstract } from "../request/CustomOperationRequest";
import { CharacterPlayerModels } from "./CharacterPlayerModels";

export module CharacterPlayerRequestModels {
	export class AddPlayerFriendOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.AddPlayerFriendRequestData> {
		protected override operationCode: number = OperationCode.AddPlayerFriend;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.AddPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerAddPlayerFriendOperationRequest extends AddPlayerFriendOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.AddPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminAddPlayerFriendOperationRequest extends AddPlayerFriendOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AddPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AddSegmentOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.AddSegmentRequestData> {
		protected override operationCode: number = OperationCode.AddSegment;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.AddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerAddSegmentOperationRequest extends AddSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.AddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminAddSegmentOperationRequest extends AddSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.AddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetAvatarOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetAvatarRequestData> {
		protected override operationCode: number = OperationCode.GetAvatar;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetAvatarOperationRequest extends GetAvatarOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.GetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetAvatarOperationRequest extends GetAvatarOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.GetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetCatalogIdOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetCatalogIdRequestData> {
		protected override operationCode: number = OperationCode.GetCatalogId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetCatalogIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetCatalogIdOperationRequest extends GetCatalogIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.GetCatalogIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetCatalogIdOperationRequest extends GetCatalogIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.GetCatalogIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetCountryCodeOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetCountryCodeRequestData> {
		protected override operationCode: number = OperationCode.GetCountryCode;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetCountryCodeOperationRequest extends GetCountryCodeOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.GetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetCountryCodeOperationRequest extends GetCountryCodeOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.GetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetCustomDataOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetCustomDataRequestData> {
		protected override operationCode: number = OperationCode.GetCustomData;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetCustomDataOperationRequest extends GetCustomDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.GetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetCustomDataOperationRequest extends GetCustomDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.GetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetDisplayNameOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetDisplayNameRequestData> {
		protected override operationCode: number = OperationCode.GetDisplayName;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetDisplayNameOperationRequest extends GetDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.GetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetDisplayNameOperationRequest extends GetDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.GetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetFriendStatisticsLeaderboardAroundPlayerOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetFriendStatisticsLeaderboardAroundPlayerRequestData> {
		protected override operationCode: number = OperationCode.GetFriendStatisticsLeaderboardAroundPlayer;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetFriendStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetFriendStatisticsLeaderboardAroundPlayerOperationRequest extends GetFriendStatisticsLeaderboardAroundPlayerOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.GetFriendStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetFriendStatisticsLeaderboardAroundPlayerOperationRequest extends GetFriendStatisticsLeaderboardAroundPlayerOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.GetFriendStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetFriendStatisticsLeaderboardOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetFriendStatisticsLeaderboardRequestData> {
		protected override operationCode: number = OperationCode.GetFriendStatisticsLeaderboard;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetFriendStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetFriendStatisticsLeaderboardOperationRequest extends GetFriendStatisticsLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.GetFriendStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetFriendStatisticsLeaderboardOperationRequest extends GetFriendStatisticsLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.GetFriendStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetIpAddressCreateOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetIpAddressCreateRequestData> {
		protected override operationCode: number = OperationCode.GetIpAddressCreate;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetIpAddressCreateRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetIpAddressCreateOperationRequest extends GetIpAddressCreateOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.GetIpAddressCreateRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetIpAddressCreateOperationRequest extends GetIpAddressCreateOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.GetIpAddressCreateRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetOwnerOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetOwnerRequestData> {
		protected override operationCode: number = OperationCode.GetOwner;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetOwnerRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetOwnerOperationRequest extends GetOwnerOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.GetOwnerRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetOwnerOperationRequest extends GetOwnerOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.GetOwnerRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayerBanOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayerBanRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerBan;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayerBanOperationRequest extends GetPlayerBanOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.GetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayerBanOperationRequest extends GetPlayerBanOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.GetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayerCurrencyOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayerCurrencyRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerCurrency;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayerCurrencyOperationRequest extends GetPlayerCurrencyOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.GetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayerCurrencyOperationRequest extends GetPlayerCurrencyOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.GetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayerDataOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayerDataRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerData;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayerDataOperationRequest extends GetPlayerDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.GetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayerDataOperationRequest extends GetPlayerDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.GetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayerFriendOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayerFriendRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerFriend;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayerFriendOperationRequest extends GetPlayerFriendOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.GetPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayerFriendOperationRequest extends GetPlayerFriendOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.GetPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayerGroupOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayerGroupRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerGroup;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetPlayerGroupRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayerGroupOperationRequest extends GetPlayerGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.GetPlayerGroupRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayerGroupOperationRequest extends GetPlayerGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.GetPlayerGroupRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayerInformationOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayerInformationRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerInformation;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetPlayerInformationRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayerInformationOperationRequest extends GetPlayerInformationOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.GetPlayerInformationRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayerInformationOperationRequest extends GetPlayerInformationOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.GetPlayerInformationRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayerInventoryOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayerInventoryRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerInventory;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetPlayerInventoryRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayerInventoryOperationRequest extends GetPlayerInventoryOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.GetPlayerInventoryRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayerInventoryOperationRequest extends GetPlayerInventoryOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.GetPlayerInventoryRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayerStatisticsOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayerStatisticsRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerStatistics;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayerStatisticsOperationRequest extends GetPlayerStatisticsOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.GetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayerStatisticsOperationRequest extends GetPlayerStatisticsOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.GetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayersWithDisplayNameOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayersWithDisplayNameRequestData> {
		protected override operationCode: number = OperationCode.GetPlayersWithDisplayName;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetPlayersWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayersWithDisplayNameOperationRequest extends GetPlayersWithDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.GetPlayersWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayersWithDisplayNameOperationRequest extends GetPlayersWithDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.GetPlayersWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayersWithSegmentOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayersWithSegmentRequestData> {
		protected override operationCode: number = OperationCode.GetPlayersWithSegment;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetPlayersWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayersWithSegmentOperationRequest extends GetPlayersWithSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.GetPlayersWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayersWithSegmentOperationRequest extends GetPlayersWithSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.GetPlayersWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayersWithTagOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetPlayersWithTagRequestData> {
		protected override operationCode: number = OperationCode.GetPlayersWithTag;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetPlayersWithTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayersWithTagOperationRequest extends GetPlayersWithTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.GetPlayersWithTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayersWithTagOperationRequest extends GetPlayersWithTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.GetPlayersWithTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetRemoveStatusOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetRemoveStatusRequestData> {
		protected override operationCode: number = OperationCode.GetRemoveStatus;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetRemoveStatusOperationRequest extends GetRemoveStatusOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.GetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetRemoveStatusOperationRequest extends GetRemoveStatusOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.GetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetSegmentOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetSegmentRequestData> {
		protected override operationCode: number = OperationCode.GetSegment;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetSegmentOperationRequest extends GetSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.GetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetSegmentOperationRequest extends GetSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.GetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetStatisticsLeaderboardAroundPlayerOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData> {
		protected override operationCode: number = OperationCode.GetStatisticsLeaderboardAroundPlayer;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetStatisticsLeaderboardAroundPlayerOperationRequest extends GetStatisticsLeaderboardAroundPlayerOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetStatisticsLeaderboardAroundPlayerOperationRequest extends GetStatisticsLeaderboardAroundPlayerOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetStatisticsLeaderboardOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetStatisticsLeaderboardRequestData> {
		protected override operationCode: number = OperationCode.GetStatisticsLeaderboard;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetStatisticsLeaderboardOperationRequest extends GetStatisticsLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.GetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetStatisticsLeaderboardOperationRequest extends GetStatisticsLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.GetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetTagOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetTagRequestData> {
		protected override operationCode: number = OperationCode.GetTag;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetTagOperationRequest extends GetTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.GetTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetTagOperationRequest extends GetTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.GetTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetTsCreateOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetTsCreateRequestData> {
		protected override operationCode: number = OperationCode.GetTsCreate;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetTsCreateOperationRequest extends GetTsCreateOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.GetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetTsCreateOperationRequest extends GetTsCreateOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.GetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetTsLastLoginOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GetTsLastLoginRequestData> {
		protected override operationCode: number = OperationCode.GetTsLastLogin;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetTsLastLoginOperationRequest extends GetTsLastLoginOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.GetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetTsLastLoginOperationRequest extends GetTsLastLoginOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.GetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GrantGroupOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GrantGroupRequestData> {
		protected override operationCode: number = OperationCode.GrantGroup;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GrantGroupRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGrantGroupOperationRequest extends GrantGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.GrantGroupRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGrantGroupOperationRequest extends GrantGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.GrantGroupRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GrantPlayerItemOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.GrantPlayerItemRequestData> {
		protected override operationCode: number = OperationCode.GrantPlayerItem;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.GrantPlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGrantPlayerItemOperationRequest extends GrantPlayerItemOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.GrantPlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGrantPlayerItemOperationRequest extends GrantPlayerItemOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.GrantPlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class JoinGroupOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.JoinGroupRequestData> {
		protected override operationCode: number = OperationCode.JoinGroup;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.JoinGroupRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerJoinGroupOperationRequest extends JoinGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.JoinGroupRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminJoinGroupOperationRequest extends JoinGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.JoinGroupRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class LeaveGroupOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.LeaveGroupRequestData> {
		protected override operationCode: number = OperationCode.LeaveGroup;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.LeaveGroupRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerLeaveGroupOperationRequest extends LeaveGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.LeaveGroupRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminLeaveGroupOperationRequest extends LeaveGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.LeaveGroupRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class RemovePlayerFriendOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.RemovePlayerFriendRequestData> {
		protected override operationCode: number = OperationCode.RemovePlayerFriend;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.RemovePlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerRemovePlayerFriendOperationRequest extends RemovePlayerFriendOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.RemovePlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminRemovePlayerFriendOperationRequest extends RemovePlayerFriendOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.RemovePlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class RemovePlayerItemOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.RemovePlayerItemRequestData> {
		protected override operationCode: number = OperationCode.RemovePlayerItem;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.RemovePlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerRemovePlayerItemOperationRequest extends RemovePlayerItemOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.RemovePlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminRemovePlayerItemOperationRequest extends RemovePlayerItemOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.RemovePlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class RemoveSegmentOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.RemoveSegmentRequestData> {
		protected override operationCode: number = OperationCode.RemoveSegment;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.RemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerRemoveSegmentOperationRequest extends RemoveSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.RemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminRemoveSegmentOperationRequest extends RemoveSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.RemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class RemoveTagOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.RemoveTagRequestData> {
		protected override operationCode: number = OperationCode.RemoveTag;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.RemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerRemoveTagOperationRequest extends RemoveTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.RemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminRemoveTagOperationRequest extends RemoveTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.RemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetAvatarOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.SetAvatarRequestData> {
		protected override operationCode: number = OperationCode.SetAvatar;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.SetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetAvatarOperationRequest extends SetAvatarOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.SetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetAvatarOperationRequest extends SetAvatarOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.SetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetCountryCodeOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.SetCountryCodeRequestData> {
		protected override operationCode: number = OperationCode.SetCountryCode;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.SetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetCountryCodeOperationRequest extends SetCountryCodeOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.SetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetCountryCodeOperationRequest extends SetCountryCodeOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.SetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetCustomDataOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.SetCustomDataRequestData> {
		protected override operationCode: number = OperationCode.SetCustomData;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.SetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetCustomDataOperationRequest extends SetCustomDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.SetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetCustomDataOperationRequest extends SetCustomDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.SetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetDisplayNameOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.SetDisplayNameRequestData> {
		protected override operationCode: number = OperationCode.SetDisplayName;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.SetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetDisplayNameOperationRequest extends SetDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.SetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetDisplayNameOperationRequest extends SetDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.SetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetOwnerOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.SetOwnerRequestData> {
		protected override operationCode: number = OperationCode.SetOwner;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.SetOwnerRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetOwnerOperationRequest extends SetOwnerOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.SetOwnerRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetOwnerOperationRequest extends SetOwnerOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.SetOwnerRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetPlayerBanOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.SetPlayerBanRequestData> {
		protected override operationCode: number = OperationCode.SetPlayerBan;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.SetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetPlayerBanOperationRequest extends SetPlayerBanOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.SetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetPlayerBanOperationRequest extends SetPlayerBanOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.SetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetPlayerCurrencyOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.SetPlayerCurrencyRequestData> {
		protected override operationCode: number = OperationCode.SetPlayerCurrency;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.SetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetPlayerCurrencyOperationRequest extends SetPlayerCurrencyOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.SetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetPlayerCurrencyOperationRequest extends SetPlayerCurrencyOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.SetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetPlayerDataOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.SetPlayerDataRequestData> {
		protected override operationCode: number = OperationCode.SetPlayerData;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.SetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetPlayerDataOperationRequest extends SetPlayerDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.SetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetPlayerDataOperationRequest extends SetPlayerDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.SetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetPlayerStatisticsOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.SetPlayerStatisticsRequestData> {
		protected override operationCode: number = OperationCode.SetPlayerStatistics;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.SetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetPlayerStatisticsOperationRequest extends SetPlayerStatisticsOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.SetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetPlayerStatisticsOperationRequest extends SetPlayerStatisticsOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.SetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetRemoveStatusOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.SetRemoveStatusRequestData> {
		protected override operationCode: number = OperationCode.SetRemoveStatus;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.SetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetRemoveStatusOperationRequest extends SetRemoveStatusOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.SetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetRemoveStatusOperationRequest extends SetRemoveStatusOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.SetRemoveStatusRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetTagOperationRequest extends CustomOperationRequestAbstract<CharacterPlayerModels.SetTagRequestData> {
		protected override operationCode: number = OperationCode.SetTag;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.CharacterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: CharacterPlayerModels.SetTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetTagOperationRequest extends SetTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: CharacterPlayerModels.SetTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetTagOperationRequest extends SetTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: CharacterPlayerModels.SetTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

}
