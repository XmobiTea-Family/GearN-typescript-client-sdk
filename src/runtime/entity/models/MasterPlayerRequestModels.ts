import { OperationCode } from "../../constant/OperationCode";
import { RequestRole } from "../../constant/enumType/RequestRole";
import { RequestType } from "../../constant/enumType/RequestType";
import { CustomOperationRequestAbstract } from "../request/CustomOperationRequest";
import { MasterPlayerModels } from "./MasterPlayerModels";

export module MasterPlayerRequestModels {
	export class AddSegmentOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.AddSegmentRequestData> {
		protected override operationCode: number = OperationCode.AddSegment;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.AddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerAddSegmentOperationRequest extends AddSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.AddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminAddSegmentOperationRequest extends AddSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ChangeAccountPasswordOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.ChangeAccountPasswordRequestData> {
		protected override operationCode: number = OperationCode.ChangeAccountPassword;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.ChangeAccountPasswordRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetAvatarOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetAvatarRequestData> {
		protected override operationCode: number = OperationCode.GetAvatar;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetAvatarOperationRequest extends GetAvatarOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.GetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetAvatarOperationRequest extends GetAvatarOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.GetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetCountryCodeOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetCountryCodeRequestData> {
		protected override operationCode: number = OperationCode.GetCountryCode;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetCountryCodeOperationRequest extends GetCountryCodeOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.GetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetCountryCodeOperationRequest extends GetCountryCodeOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.GetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetCustomDataOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetCustomDataRequestData> {
		protected override operationCode: number = OperationCode.GetCustomData;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetCustomDataOperationRequest extends GetCustomDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.GetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetCustomDataOperationRequest extends GetCustomDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.GetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetDisplayNameOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetDisplayNameRequestData> {
		protected override operationCode: number = OperationCode.GetDisplayName;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetDisplayNameOperationRequest extends GetDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.GetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetDisplayNameOperationRequest extends GetDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.GetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetEmailOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetEmailRequestData> {
		protected override operationCode: number = OperationCode.GetEmail;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetEmailRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetEmailOperationRequest extends GetEmailOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.GetEmailRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetEmailOperationRequest extends GetEmailOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.GetEmailRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetExternalOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetExternalRequestData> {
		protected override operationCode: number = OperationCode.GetExternal;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetExternalRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetExternalOperationRequest extends GetExternalOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.GetExternalRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetExternalOperationRequest extends GetExternalOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.GetExternalRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetIpAddressCreateOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetIpAddressCreateRequestData> {
		protected override operationCode: number = OperationCode.GetIpAddressCreate;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetIpAddressCreateRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetIpAddressCreateOperationRequest extends GetIpAddressCreateOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.GetIpAddressCreateRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetIpAddressCreateOperationRequest extends GetIpAddressCreateOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.GetIpAddressCreateRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayerBanOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayerBanRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerBan;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayerBanOperationRequest extends GetPlayerBanOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.GetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayerBanOperationRequest extends GetPlayerBanOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.GetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayerCurrencyOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayerCurrencyRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerCurrency;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayerCurrencyOperationRequest extends GetPlayerCurrencyOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.GetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayerCurrencyOperationRequest extends GetPlayerCurrencyOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.GetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayerDataOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayerDataRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerData;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayerDataOperationRequest extends GetPlayerDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.GetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayerDataOperationRequest extends GetPlayerDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.GetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayerInformationOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayerInformationRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerInformation;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetPlayerInformationRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayerInformationOperationRequest extends GetPlayerInformationOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.GetPlayerInformationRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayerInformationOperationRequest extends GetPlayerInformationOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.GetPlayerInformationRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayerStatisticsOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayerStatisticsRequestData> {
		protected override operationCode: number = OperationCode.GetPlayerStatistics;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayerStatisticsOperationRequest extends GetPlayerStatisticsOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.GetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayerStatisticsOperationRequest extends GetPlayerStatisticsOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.GetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayersWithAppleOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayersWithAppleRequestData> {
		protected override operationCode: number = OperationCode.GetPlayersWithApple;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetPlayersWithAppleRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayersWithAppleOperationRequest extends GetPlayersWithAppleOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.GetPlayersWithAppleRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayersWithAppleOperationRequest extends GetPlayersWithAppleOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.GetPlayersWithAppleRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayersWithDisplayNameOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayersWithDisplayNameRequestData> {
		protected override operationCode: number = OperationCode.GetPlayersWithDisplayName;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetPlayersWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayersWithDisplayNameOperationRequest extends GetPlayersWithDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.GetPlayersWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayersWithDisplayNameOperationRequest extends GetPlayersWithDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.GetPlayersWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayersWithFacebookOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayersWithFacebookRequestData> {
		protected override operationCode: number = OperationCode.GetPlayersWithFacebook;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetPlayersWithFacebookRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayersWithFacebookOperationRequest extends GetPlayersWithFacebookOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.GetPlayersWithFacebookRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayersWithFacebookOperationRequest extends GetPlayersWithFacebookOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.GetPlayersWithFacebookRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayersWithGenericServiceOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayersWithGenericServiceRequestData> {
		protected override operationCode: number = OperationCode.GetPlayersWithGenericService;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetPlayersWithGenericServiceRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayersWithGenericServiceOperationRequest extends GetPlayersWithGenericServiceOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.GetPlayersWithGenericServiceRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayersWithGenericServiceOperationRequest extends GetPlayersWithGenericServiceOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.GetPlayersWithGenericServiceRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayersWithGoogleOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayersWithGoogleRequestData> {
		protected override operationCode: number = OperationCode.GetPlayersWithGoogle;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetPlayersWithGoogleRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayersWithGoogleOperationRequest extends GetPlayersWithGoogleOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.GetPlayersWithGoogleRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayersWithGoogleOperationRequest extends GetPlayersWithGoogleOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.GetPlayersWithGoogleRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayersWithSegmentOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayersWithSegmentRequestData> {
		protected override operationCode: number = OperationCode.GetPlayersWithSegment;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetPlayersWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayersWithSegmentOperationRequest extends GetPlayersWithSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.GetPlayersWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayersWithSegmentOperationRequest extends GetPlayersWithSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.GetPlayersWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetPlayersWithTagOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayersWithTagRequestData> {
		protected override operationCode: number = OperationCode.GetPlayersWithTag;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetPlayersWithTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetPlayersWithTagOperationRequest extends GetPlayersWithTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.GetPlayersWithTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetPlayersWithTagOperationRequest extends GetPlayersWithTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.GetPlayersWithTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetSegmentOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetSegmentRequestData> {
		protected override operationCode: number = OperationCode.GetSegment;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetSegmentOperationRequest extends GetSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.GetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetSegmentOperationRequest extends GetSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.GetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetStatisticsLeaderboardAroundPlayerOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData> {
		protected override operationCode: number = OperationCode.GetStatisticsLeaderboardAroundPlayer;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetStatisticsLeaderboardAroundPlayerOperationRequest extends GetStatisticsLeaderboardAroundPlayerOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetStatisticsLeaderboardAroundPlayerOperationRequest extends GetStatisticsLeaderboardAroundPlayerOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetStatisticsLeaderboardOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetStatisticsLeaderboardRequestData> {
		protected override operationCode: number = OperationCode.GetStatisticsLeaderboard;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetStatisticsLeaderboardOperationRequest extends GetStatisticsLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.GetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetStatisticsLeaderboardOperationRequest extends GetStatisticsLeaderboardOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.GetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetTagOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetTagRequestData> {
		protected override operationCode: number = OperationCode.GetTag;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetTagOperationRequest extends GetTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.GetTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetTagOperationRequest extends GetTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.GetTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetTsCreateOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetTsCreateRequestData> {
		protected override operationCode: number = OperationCode.GetTsCreate;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetTsCreateOperationRequest extends GetTsCreateOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.GetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetTsCreateOperationRequest extends GetTsCreateOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.GetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class GetTsLastLoginOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetTsLastLoginRequestData> {
		protected override operationCode: number = OperationCode.GetTsLastLogin;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerGetTsLastLoginOperationRequest extends GetTsLastLoginOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.GetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminGetTsLastLoginOperationRequest extends GetTsLastLoginOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.GetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class LinkAccountOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkAccountRequestData> {
		protected override operationCode: number = OperationCode.LinkAccount;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.LinkAccountRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerLinkAccountOperationRequest extends LinkAccountOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.LinkAccountRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminLinkAccountOperationRequest extends LinkAccountOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.LinkAccountRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class LinkAndroidDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkAndroidDeviceIdRequestData> {
		protected override operationCode: number = OperationCode.LinkAndroidDeviceId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.LinkAndroidDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerLinkAndroidDeviceIdOperationRequest extends LinkAndroidDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.LinkAndroidDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminLinkAndroidDeviceIdOperationRequest extends LinkAndroidDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.LinkAndroidDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class LinkAppleOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkAppleRequestData> {
		protected override operationCode: number = OperationCode.LinkApple;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.LinkAppleRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerLinkAppleOperationRequest extends LinkAppleOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.LinkAppleRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminLinkAppleOperationRequest extends LinkAppleOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.LinkAppleRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class LinkCustomDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkCustomDeviceIdRequestData> {
		protected override operationCode: number = OperationCode.LinkCustomDeviceId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.LinkCustomDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerLinkCustomDeviceIdOperationRequest extends LinkCustomDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.LinkCustomDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminLinkCustomDeviceIdOperationRequest extends LinkCustomDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.LinkCustomDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class LinkCustomIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkCustomIdRequestData> {
		protected override operationCode: number = OperationCode.LinkCustomId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.LinkCustomIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerLinkCustomIdOperationRequest extends LinkCustomIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.LinkCustomIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminLinkCustomIdOperationRequest extends LinkCustomIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.LinkCustomIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class LinkEditorDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkEditorDeviceIdRequestData> {
		protected override operationCode: number = OperationCode.LinkEditorDeviceId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.LinkEditorDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerLinkEditorDeviceIdOperationRequest extends LinkEditorDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.LinkEditorDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminLinkEditorDeviceIdOperationRequest extends LinkEditorDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.LinkEditorDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class LinkFacebookOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkFacebookRequestData> {
		protected override operationCode: number = OperationCode.LinkFacebook;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.LinkFacebookRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerLinkFacebookOperationRequest extends LinkFacebookOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.LinkFacebookRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminLinkFacebookOperationRequest extends LinkFacebookOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.LinkFacebookRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class LinkGenericServiceOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkGenericServiceRequestData> {
		protected override operationCode: number = OperationCode.LinkGenericService;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.LinkGenericServiceRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerLinkGenericServiceOperationRequest extends LinkGenericServiceOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.LinkGenericServiceRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminLinkGenericServiceOperationRequest extends LinkGenericServiceOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.LinkGenericServiceRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class LinkGoogleOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkGoogleRequestData> {
		protected override operationCode: number = OperationCode.LinkGoogle;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.LinkGoogleRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerLinkGoogleOperationRequest extends LinkGoogleOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.LinkGoogleRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminLinkGoogleOperationRequest extends LinkGoogleOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.LinkGoogleRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class LinkiOSDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkiOSDeviceIdRequestData> {
		protected override operationCode: number = OperationCode.LinkiOSDeviceId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.LinkiOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerLinkiOSDeviceIdOperationRequest extends LinkiOSDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.LinkiOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminLinkiOSDeviceIdOperationRequest extends LinkiOSDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.LinkiOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class LinkLinuxDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkLinuxDeviceIdRequestData> {
		protected override operationCode: number = OperationCode.LinkLinuxDeviceId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.LinkLinuxDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerLinkLinuxDeviceIdOperationRequest extends LinkLinuxDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.LinkLinuxDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminLinkLinuxDeviceIdOperationRequest extends LinkLinuxDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.LinkLinuxDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class LinkMacOSDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkMacOSDeviceIdRequestData> {
		protected override operationCode: number = OperationCode.LinkMacOSDeviceId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.LinkMacOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerLinkMacOSDeviceIdOperationRequest extends LinkMacOSDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.LinkMacOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminLinkMacOSDeviceIdOperationRequest extends LinkMacOSDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.LinkMacOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class LinkWindowsDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkWindowsDeviceIdRequestData> {
		protected override operationCode: number = OperationCode.LinkWindowsDeviceId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.LinkWindowsDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerLinkWindowsDeviceIdOperationRequest extends LinkWindowsDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.LinkWindowsDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminLinkWindowsDeviceIdOperationRequest extends LinkWindowsDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.LinkWindowsDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class LinkWindowsPhoneDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkWindowsPhoneDeviceIdRequestData> {
		protected override operationCode: number = OperationCode.LinkWindowsPhoneDeviceId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.LinkWindowsPhoneDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerLinkWindowsPhoneDeviceIdOperationRequest extends LinkWindowsPhoneDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.LinkWindowsPhoneDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminLinkWindowsPhoneDeviceIdOperationRequest extends LinkWindowsPhoneDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.LinkWindowsPhoneDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class RemoveSegmentOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.RemoveSegmentRequestData> {
		protected override operationCode: number = OperationCode.RemoveSegment;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.RemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerRemoveSegmentOperationRequest extends RemoveSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.RemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminRemoveSegmentOperationRequest extends RemoveSegmentOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.RemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class RemoveTagOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.RemoveTagRequestData> {
		protected override operationCode: number = OperationCode.RemoveTag;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.RemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerRemoveTagOperationRequest extends RemoveTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.RemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminRemoveTagOperationRequest extends RemoveTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.RemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ResetAccountPasswordOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.ResetAccountPasswordRequestData> {
		protected override operationCode: number = OperationCode.ResetAccountPassword;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.ResetAccountPasswordRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerResetAccountPasswordOperationRequest extends ResetAccountPasswordOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ResetAccountPasswordRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminResetAccountPasswordOperationRequest extends ResetAccountPasswordOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.ResetAccountPasswordRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetAvatarOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SetAvatarRequestData> {
		protected override operationCode: number = OperationCode.SetAvatar;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.SetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetAvatarOperationRequest extends SetAvatarOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.SetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetAvatarOperationRequest extends SetAvatarOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.SetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetCountryCodeOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SetCountryCodeRequestData> {
		protected override operationCode: number = OperationCode.SetCountryCode;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.SetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetCountryCodeOperationRequest extends SetCountryCodeOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.SetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetCountryCodeOperationRequest extends SetCountryCodeOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.SetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetCustomDataOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SetCustomDataRequestData> {
		protected override operationCode: number = OperationCode.SetCustomData;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.SetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetCustomDataOperationRequest extends SetCustomDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.SetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetCustomDataOperationRequest extends SetCustomDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.SetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetDisplayNameOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SetDisplayNameRequestData> {
		protected override operationCode: number = OperationCode.SetDisplayName;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.SetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetDisplayNameOperationRequest extends SetDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.SetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetDisplayNameOperationRequest extends SetDisplayNameOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.SetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetEmailOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SetEmailRequestData> {
		protected override operationCode: number = OperationCode.SetEmail;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.SetEmailRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetEmailOperationRequest extends SetEmailOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.SetEmailRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetEmailOperationRequest extends SetEmailOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.SetEmailRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetPlayerBanOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SetPlayerBanRequestData> {
		protected override operationCode: number = OperationCode.SetPlayerBan;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.SetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetPlayerBanOperationRequest extends SetPlayerBanOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.SetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetPlayerBanOperationRequest extends SetPlayerBanOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.SetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetPlayerCurrencyOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SetPlayerCurrencyRequestData> {
		protected override operationCode: number = OperationCode.SetPlayerCurrency;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.SetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetPlayerCurrencyOperationRequest extends SetPlayerCurrencyOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.SetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetPlayerCurrencyOperationRequest extends SetPlayerCurrencyOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.SetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetPlayerDataOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SetPlayerDataRequestData> {
		protected override operationCode: number = OperationCode.SetPlayerData;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.SetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetPlayerDataOperationRequest extends SetPlayerDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.SetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetPlayerDataOperationRequest extends SetPlayerDataOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.SetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetPlayerStatisticsOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SetPlayerStatisticsRequestData> {
		protected override operationCode: number = OperationCode.SetPlayerStatistics;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.SetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetPlayerStatisticsOperationRequest extends SetPlayerStatisticsOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.SetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetPlayerStatisticsOperationRequest extends SetPlayerStatisticsOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.SetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetTagOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SetTagRequestData> {
		protected override operationCode: number = OperationCode.SetTag;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.SetTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetTagOperationRequest extends SetTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.SetTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetTagOperationRequest extends SetTagOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.SetTagRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class SetTsLastLoginOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SetTsLastLoginRequestData> {
		protected override operationCode: number = OperationCode.SetTsLastLogin;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.SetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerSetTsLastLoginOperationRequest extends SetTsLastLoginOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.SetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminSetTsLastLoginOperationRequest extends SetTsLastLoginOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.SetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class UnlinkAccountOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkAccountRequestData> {
		protected override operationCode: number = OperationCode.UnlinkAccount;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.UnlinkAccountRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerUnlinkAccountOperationRequest extends UnlinkAccountOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.UnlinkAccountRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminUnlinkAccountOperationRequest extends UnlinkAccountOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.UnlinkAccountRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class UnlinkAndroidDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkAndroidDeviceIdRequestData> {
		protected override operationCode: number = OperationCode.UnlinkAndroidDeviceId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.UnlinkAndroidDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerUnlinkAndroidDeviceIdOperationRequest extends UnlinkAndroidDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.UnlinkAndroidDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminUnlinkAndroidDeviceIdOperationRequest extends UnlinkAndroidDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.UnlinkAndroidDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class UnlinkAppleOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkAppleRequestData> {
		protected override operationCode: number = OperationCode.UnlinkApple;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.UnlinkAppleRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerUnlinkAppleOperationRequest extends UnlinkAppleOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.UnlinkAppleRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminUnlinkAppleOperationRequest extends UnlinkAppleOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.UnlinkAppleRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class UnlinkCustomDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkCustomDeviceIdRequestData> {
		protected override operationCode: number = OperationCode.UnlinkCustomDeviceId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.UnlinkCustomDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerUnlinkCustomDeviceIdOperationRequest extends UnlinkCustomDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.UnlinkCustomDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminUnlinkCustomDeviceIdOperationRequest extends UnlinkCustomDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.UnlinkCustomDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class UnlinkCustomIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkCustomIdRequestData> {
		protected override operationCode: number = OperationCode.UnlinkCustomId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.UnlinkCustomIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerUnlinkCustomIdOperationRequest extends UnlinkCustomIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.UnlinkCustomIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminUnlinkCustomIdOperationRequest extends UnlinkCustomIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.UnlinkCustomIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class UnlinkEditorDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkEditorDeviceIdRequestData> {
		protected override operationCode: number = OperationCode.UnlinkEditorDeviceId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.UnlinkEditorDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerUnlinkEditorDeviceIdOperationRequest extends UnlinkEditorDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.UnlinkEditorDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminUnlinkEditorDeviceIdOperationRequest extends UnlinkEditorDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.UnlinkEditorDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class UnlinkFacebookOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkFacebookRequestData> {
		protected override operationCode: number = OperationCode.UnlinkFacebook;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.UnlinkFacebookRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerUnlinkFacebookOperationRequest extends UnlinkFacebookOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.UnlinkFacebookRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminUnlinkFacebookOperationRequest extends UnlinkFacebookOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.UnlinkFacebookRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class UnlinkGenericServiceOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkGenericServiceRequestData> {
		protected override operationCode: number = OperationCode.UnlinkGenericService;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.UnlinkGenericServiceRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerUnlinkGenericServiceOperationRequest extends UnlinkGenericServiceOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.UnlinkGenericServiceRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminUnlinkGenericServiceOperationRequest extends UnlinkGenericServiceOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.UnlinkGenericServiceRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class UnlinkGoogleOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkGoogleRequestData> {
		protected override operationCode: number = OperationCode.UnlinkGoogle;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.UnlinkGoogleRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerUnlinkGoogleOperationRequest extends UnlinkGoogleOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.UnlinkGoogleRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminUnlinkGoogleOperationRequest extends UnlinkGoogleOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.UnlinkGoogleRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class UnlinkiOSDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkiOSDeviceIdRequestData> {
		protected override operationCode: number = OperationCode.UnlinkiOSDeviceId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.UnlinkiOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerUnlinkiOSDeviceIdOperationRequest extends UnlinkiOSDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.UnlinkiOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminUnlinkiOSDeviceIdOperationRequest extends UnlinkiOSDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.UnlinkiOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class UnlinkLinuxDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkLinuxDeviceIdRequestData> {
		protected override operationCode: number = OperationCode.UnlinkLinuxDeviceId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.UnlinkLinuxDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerUnlinkLinuxDeviceIdOperationRequest extends UnlinkLinuxDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.UnlinkLinuxDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminUnlinkLinuxDeviceIdOperationRequest extends UnlinkLinuxDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.UnlinkLinuxDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class UnlinkMacOSDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkMacOSDeviceIdRequestData> {
		protected override operationCode: number = OperationCode.UnlinkMacOSDeviceId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.UnlinkMacOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerUnlinkMacOSDeviceIdOperationRequest extends UnlinkMacOSDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.UnlinkMacOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminUnlinkMacOSDeviceIdOperationRequest extends UnlinkMacOSDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.UnlinkMacOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class UnlinkWindowsDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkWindowsDeviceIdRequestData> {
		protected override operationCode: number = OperationCode.UnlinkWindowsDeviceId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.UnlinkWindowsDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerUnlinkWindowsDeviceIdOperationRequest extends UnlinkWindowsDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.UnlinkWindowsDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminUnlinkWindowsDeviceIdOperationRequest extends UnlinkWindowsDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.UnlinkWindowsDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class UnlinkWindowsPhoneDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkWindowsPhoneDeviceIdRequestData> {
		protected override operationCode: number = OperationCode.UnlinkWindowsPhoneDeviceId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.UnlinkWindowsPhoneDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class ServerUnlinkWindowsPhoneDeviceIdOperationRequest extends UnlinkWindowsPhoneDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.UnlinkWindowsPhoneDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class AdminUnlinkWindowsPhoneDeviceIdOperationRequest extends UnlinkWindowsPhoneDeviceIdOperationRequest {
		protected override requestRole: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.UnlinkWindowsPhoneDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

}
