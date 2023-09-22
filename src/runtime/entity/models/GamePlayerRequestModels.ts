import { OperationCode } from "../../constant/OperationCode";
import { RequestRole } from "../../constant/enumType/RequestRole";
import { RequestType } from "../../constant/enumType/RequestType";
import { CustomOperationRequestAbstract } from "../request/CustomOperationRequest";
import { GamePlayerModels } from "./GamePlayerModels";

export module GamePlayerRequestModels {
	export class AddPlayerFriendOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.AddPlayerFriendRequestData> {
		protected override operationCode: number = OperationCode.AddPlayerFriend;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.AddPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerAddPlayerFriendOperationRequest extends AddPlayerFriendOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.AddPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminAddPlayerFriendOperationRequest extends AddPlayerFriendOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AddPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AddSegmentOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.AddSegmentRequestData> {
		protected override operationCode: number = OperationCode.AddSegment;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.AddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerAddSegmentOperationRequest extends AddSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.AddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminAddSegmentOperationRequest extends AddSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.AddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetAvatarOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetAvatarRequestData> {
		protected override operationCode: number = OperationCode.GetAvatar;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetAvatarOperationRequest extends GetAvatarOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.GetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetAvatarOperationRequest extends GetAvatarOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.GetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetCountryCodeOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetCountryCodeRequestData> {
		protected override operationCode: number = OperationCode.GetCountryCode;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetCountryCodeOperationRequest extends GetCountryCodeOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.GetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetCountryCodeOperationRequest extends GetCountryCodeOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.GetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetCustomDataOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetCustomDataRequestData> {
		protected override operationCode: number = OperationCode.GetCustomData;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetCustomDataOperationRequest extends GetCustomDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.GetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetCustomDataOperationRequest extends GetCustomDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.GetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetDisplayNameOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetDisplayNameRequestData> {
		protected override operationCode: number = OperationCode.GetDisplayName;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetDisplayNameOperationRequest extends GetDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.GetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetDisplayNameOperationRequest extends GetDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.GetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetFriendStatisticsLeaderboardAroundPlayerOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetFriendStatisticsLeaderboardAroundPlayerRequestData> {
		protected override operationCode: number = OperationCode.GetFriendStatisticsLeaderboardAroundPlayer;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetFriendStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetFriendStatisticsLeaderboardAroundPlayerOperationRequest extends GetFriendStatisticsLeaderboardAroundPlayerOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.GetFriendStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetFriendStatisticsLeaderboardAroundPlayerOperationRequest extends GetFriendStatisticsLeaderboardAroundPlayerOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.GetFriendStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetFriendStatisticsLeaderboardOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetFriendStatisticsLeaderboardRequestData> {
		protected override operationCode: number = OperationCode.GetFriendStatisticsLeaderboard;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetFriendStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetFriendStatisticsLeaderboardOperationRequest extends GetFriendStatisticsLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.GetFriendStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetFriendStatisticsLeaderboardOperationRequest extends GetFriendStatisticsLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.GetFriendStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetIpAddressCreateOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetIpAddressCreateRequestData> {
		protected override operationCode: number = OperationCode.GetIpAddressCreate;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetIpAddressCreateRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetIpAddressCreateOperationRequest extends GetIpAddressCreateOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.GetIpAddressCreateRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetIpAddressCreateOperationRequest extends GetIpAddressCreateOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.GetIpAddressCreateRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetOnlineStatusOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetOnlineStatusRequestData> {
		protected override operationCode: number = OperationCode.GetOnlineStatus;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetOnlineStatusRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetOnlineStatusOperationRequest extends GetOnlineStatusOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.GetOnlineStatusRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetOnlineStatusOperationRequest extends GetOnlineStatusOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.GetOnlineStatusRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayerBanOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayerBanRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerBan;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayerBanOperationRequest extends GetPlayerBanOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.GetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayerBanOperationRequest extends GetPlayerBanOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.GetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayerCharacterOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayerCharacterRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerCharacter;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetPlayerCharacterRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayerCharacterOperationRequest extends GetPlayerCharacterOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.GetPlayerCharacterRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayerCharacterOperationRequest extends GetPlayerCharacterOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.GetPlayerCharacterRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayerCurrencyOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayerCurrencyRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerCurrency;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayerCurrencyOperationRequest extends GetPlayerCurrencyOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.GetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayerCurrencyOperationRequest extends GetPlayerCurrencyOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.GetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayerDataOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayerDataRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerData;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayerDataOperationRequest extends GetPlayerDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.GetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayerDataOperationRequest extends GetPlayerDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.GetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayerFriendOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayerFriendRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerFriend;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayerFriendOperationRequest extends GetPlayerFriendOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.GetPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayerFriendOperationRequest extends GetPlayerFriendOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.GetPlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayerGroupOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayerGroupRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerGroup;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetPlayerGroupRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayerGroupOperationRequest extends GetPlayerGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.GetPlayerGroupRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayerGroupOperationRequest extends GetPlayerGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.GetPlayerGroupRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayerInformationOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayerInformationRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerInformation;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetPlayerInformationRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayerInformationOperationRequest extends GetPlayerInformationOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.GetPlayerInformationRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayerInformationOperationRequest extends GetPlayerInformationOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.GetPlayerInformationRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayerInventoryOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayerInventoryRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerInventory;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetPlayerInventoryRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayerInventoryOperationRequest extends GetPlayerInventoryOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.GetPlayerInventoryRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayerInventoryOperationRequest extends GetPlayerInventoryOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.GetPlayerInventoryRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayerStatisticsOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayerStatisticsRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerStatistics;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayerStatisticsOperationRequest extends GetPlayerStatisticsOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.GetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayerStatisticsOperationRequest extends GetPlayerStatisticsOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.GetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayersWithDisplayNameOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayersWithDisplayNameRequestData> {
		protected override operationCode: number = OperationCode.GetPlayersWithDisplayName;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetPlayersWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayersWithDisplayNameOperationRequest extends GetPlayersWithDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.GetPlayersWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayersWithDisplayNameOperationRequest extends GetPlayersWithDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.GetPlayersWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayersWithSegmentOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayersWithSegmentRequestData> {
		protected override operationCode: number = OperationCode.GetPlayersWithSegment;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetPlayersWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayersWithSegmentOperationRequest extends GetPlayersWithSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.GetPlayersWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayersWithSegmentOperationRequest extends GetPlayersWithSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.GetPlayersWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayersWithTagOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetPlayersWithTagRequestData> {
		protected override operationCode: number = OperationCode.GetPlayersWithTag;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetPlayersWithTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayersWithTagOperationRequest extends GetPlayersWithTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.GetPlayersWithTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayersWithTagOperationRequest extends GetPlayersWithTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.GetPlayersWithTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetSegmentOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetSegmentRequestData> {
		protected override operationCode: number = OperationCode.GetSegment;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetSegmentOperationRequest extends GetSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.GetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetSegmentOperationRequest extends GetSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.GetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetStatisticsLeaderboardAroundPlayerOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData> {
		protected override operationCode: number = OperationCode.GetStatisticsLeaderboardAroundPlayer;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetStatisticsLeaderboardAroundPlayerOperationRequest extends GetStatisticsLeaderboardAroundPlayerOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetStatisticsLeaderboardAroundPlayerOperationRequest extends GetStatisticsLeaderboardAroundPlayerOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetStatisticsLeaderboardOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetStatisticsLeaderboardRequestData> {
		protected override operationCode: number = OperationCode.GetStatisticsLeaderboard;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetStatisticsLeaderboardOperationRequest extends GetStatisticsLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.GetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetStatisticsLeaderboardOperationRequest extends GetStatisticsLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.GetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetTagOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetTagRequestData> {
		protected override operationCode: number = OperationCode.GetTag;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetTagOperationRequest extends GetTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.GetTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetTagOperationRequest extends GetTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.GetTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetTsCreateOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetTsCreateRequestData> {
		protected override operationCode: number = OperationCode.GetTsCreate;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetTsCreateOperationRequest extends GetTsCreateOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.GetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetTsCreateOperationRequest extends GetTsCreateOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.GetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetTsLastLoginOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GetTsLastLoginRequestData> {
		protected override operationCode: number = OperationCode.GetTsLastLogin;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetTsLastLoginOperationRequest extends GetTsLastLoginOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.GetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetTsLastLoginOperationRequest extends GetTsLastLoginOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.GetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GrantGroupOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GrantGroupRequestData> {
		protected override operationCode: number = OperationCode.GrantGroup;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GrantGroupRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGrantGroupOperationRequest extends GrantGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.GrantGroupRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGrantGroupOperationRequest extends GrantGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.GrantGroupRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GrantPlayerCharacterOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GrantPlayerCharacterRequestData> {
		protected override operationCode: number = OperationCode.GrantPlayerCharacter;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GrantPlayerCharacterRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGrantPlayerCharacterOperationRequest extends GrantPlayerCharacterOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.GrantPlayerCharacterRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGrantPlayerCharacterOperationRequest extends GrantPlayerCharacterOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.GrantPlayerCharacterRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GrantPlayerItemOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.GrantPlayerItemRequestData> {
		protected override operationCode: number = OperationCode.GrantPlayerItem;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.GrantPlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGrantPlayerItemOperationRequest extends GrantPlayerItemOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.GrantPlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGrantPlayerItemOperationRequest extends GrantPlayerItemOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.GrantPlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class JoinGroupOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.JoinGroupRequestData> {
		protected override operationCode: number = OperationCode.JoinGroup;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.JoinGroupRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerJoinGroupOperationRequest extends JoinGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.JoinGroupRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminJoinGroupOperationRequest extends JoinGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.JoinGroupRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class LeaveGroupOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.LeaveGroupRequestData> {
		protected override operationCode: number = OperationCode.LeaveGroup;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.LeaveGroupRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerLeaveGroupOperationRequest extends LeaveGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.LeaveGroupRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminLeaveGroupOperationRequest extends LeaveGroupOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.LeaveGroupRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class RemovePlayerCharacterOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.RemovePlayerCharacterRequestData> {
		protected override operationCode: number = OperationCode.RemovePlayerCharacter;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.RemovePlayerCharacterRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerRemovePlayerCharacterOperationRequest extends RemovePlayerCharacterOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.RemovePlayerCharacterRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminRemovePlayerCharacterOperationRequest extends RemovePlayerCharacterOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.RemovePlayerCharacterRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class RemovePlayerFriendOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.RemovePlayerFriendRequestData> {
		protected override operationCode: number = OperationCode.RemovePlayerFriend;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.RemovePlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerRemovePlayerFriendOperationRequest extends RemovePlayerFriendOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.RemovePlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminRemovePlayerFriendOperationRequest extends RemovePlayerFriendOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.RemovePlayerFriendRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class RemovePlayerItemOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.RemovePlayerItemRequestData> {
		protected override operationCode: number = OperationCode.RemovePlayerItem;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.RemovePlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerRemovePlayerItemOperationRequest extends RemovePlayerItemOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.RemovePlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminRemovePlayerItemOperationRequest extends RemovePlayerItemOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.RemovePlayerItemRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class RemoveSegmentOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.RemoveSegmentRequestData> {
		protected override operationCode: number = OperationCode.RemoveSegment;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.RemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerRemoveSegmentOperationRequest extends RemoveSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.RemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminRemoveSegmentOperationRequest extends RemoveSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.RemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class RemoveTagOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.RemoveTagRequestData> {
		protected override operationCode: number = OperationCode.RemoveTag;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.RemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerRemoveTagOperationRequest extends RemoveTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.RemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminRemoveTagOperationRequest extends RemoveTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.RemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetAvatarOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.SetAvatarRequestData> {
		protected override operationCode: number = OperationCode.SetAvatar;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.SetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetAvatarOperationRequest extends SetAvatarOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.SetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetAvatarOperationRequest extends SetAvatarOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.SetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetCountryCodeOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.SetCountryCodeRequestData> {
		protected override operationCode: number = OperationCode.SetCountryCode;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.SetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetCountryCodeOperationRequest extends SetCountryCodeOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.SetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetCountryCodeOperationRequest extends SetCountryCodeOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.SetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetCustomDataOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.SetCustomDataRequestData> {
		protected override operationCode: number = OperationCode.SetCustomData;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.SetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetCustomDataOperationRequest extends SetCustomDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.SetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetCustomDataOperationRequest extends SetCustomDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.SetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetDisplayNameOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.SetDisplayNameRequestData> {
		protected override operationCode: number = OperationCode.SetDisplayName;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.SetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetDisplayNameOperationRequest extends SetDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.SetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetDisplayNameOperationRequest extends SetDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.SetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetPlayerBanOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.SetPlayerBanRequestData> {
		protected override operationCode: number = OperationCode.SetPlayerBan;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.SetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetPlayerBanOperationRequest extends SetPlayerBanOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.SetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetPlayerBanOperationRequest extends SetPlayerBanOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.SetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetPlayerCurrencyOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.SetPlayerCurrencyRequestData> {
		protected override operationCode: number = OperationCode.SetPlayerCurrency;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.SetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetPlayerCurrencyOperationRequest extends SetPlayerCurrencyOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.SetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetPlayerCurrencyOperationRequest extends SetPlayerCurrencyOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.SetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetPlayerDataOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.SetPlayerDataRequestData> {
		protected override operationCode: number = OperationCode.SetPlayerData;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.SetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetPlayerDataOperationRequest extends SetPlayerDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.SetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetPlayerDataOperationRequest extends SetPlayerDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.SetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetPlayerStatisticsOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.SetPlayerStatisticsRequestData> {
		protected override operationCode: number = OperationCode.SetPlayerStatistics;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.SetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetPlayerStatisticsOperationRequest extends SetPlayerStatisticsOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.SetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetPlayerStatisticsOperationRequest extends SetPlayerStatisticsOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.SetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetTagOperationRequest extends CustomOperationRequestAbstract<GamePlayerModels.SetTagRequestData> {
		protected override operationCode: number = OperationCode.SetTag;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.GamePlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: GamePlayerModels.SetTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetTagOperationRequest extends SetTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: GamePlayerModels.SetTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetTagOperationRequest extends SetTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: GamePlayerModels.SetTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

}
