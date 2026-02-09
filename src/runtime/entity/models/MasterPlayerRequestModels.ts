import { OperationCode } from "./../../constant/OperationCode";
import { RequestRole } from "./../../constant/enumType/RequestRole";
import { RequestType } from "./../../constant/enumType/RequestType";
import { CustomOperationRequestAbstract } from "./../request/CustomOperationRequest";
import { MasterPlayerModels } from "./MasterPlayerModels";

export namespace MasterPlayerRequestModels {
	export class AddSegmentOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.AddSegmentRequestData> {
		protected override operationCode: string = OperationCode.AddSegment;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.AddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AddSegmentRequestData;
		}
	}

	export class ServerAddSegmentOperationRequest extends AddSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerAddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerAddSegmentRequestData;
		}
	}

	export class AdminAddSegmentOperationRequest extends AddSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminAddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminAddSegmentRequestData;
		}
	}

	export class ChangeAccountPasswordOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.ChangeAccountPasswordRequestData> {
		protected override operationCode: string = OperationCode.ChangeAccountPassword;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.ChangeAccountPasswordRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ChangeAccountPasswordRequestData;
		}
	}

	export class GetAvatarOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetAvatarRequestData> {
		protected override operationCode: string = OperationCode.GetAvatar;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetAvatarRequestData;
		}
	}

	export class ServerGetAvatarOperationRequest extends GetAvatarOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetAvatarRequestData;
		}
	}

	export class AdminGetAvatarOperationRequest extends GetAvatarOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetAvatarRequestData;
		}
	}

	export class GetCountryCodeOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetCountryCodeRequestData> {
		protected override operationCode: string = OperationCode.GetCountryCode;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetCountryCodeRequestData;
		}
	}

	export class ServerGetCountryCodeOperationRequest extends GetCountryCodeOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetCountryCodeRequestData;
		}
	}

	export class AdminGetCountryCodeOperationRequest extends GetCountryCodeOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetCountryCodeRequestData;
		}
	}

	export class GetCustomDataOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetCustomDataRequestData> {
		protected override operationCode: string = OperationCode.GetCustomData;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetCustomDataRequestData;
		}
	}

	export class ServerGetCustomDataOperationRequest extends GetCustomDataOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetCustomDataRequestData;
		}
	}

	export class AdminGetCustomDataOperationRequest extends GetCustomDataOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetCustomDataRequestData;
		}
	}

	export class GetDisplayNameOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetDisplayNameRequestData> {
		protected override operationCode: string = OperationCode.GetDisplayName;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetDisplayNameRequestData;
		}
	}

	export class ServerGetDisplayNameOperationRequest extends GetDisplayNameOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetDisplayNameRequestData;
		}
	}

	export class AdminGetDisplayNameOperationRequest extends GetDisplayNameOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetDisplayNameRequestData;
		}
	}

	export class GetEmailOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetEmailRequestData> {
		protected override operationCode: string = OperationCode.GetEmail;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetEmailRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetEmailRequestData;
		}
	}

	export class ServerGetEmailOperationRequest extends GetEmailOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetEmailRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetEmailRequestData;
		}
	}

	export class AdminGetEmailOperationRequest extends GetEmailOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetEmailRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetEmailRequestData;
		}
	}

	export class GetExternalOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetExternalRequestData> {
		protected override operationCode: string = OperationCode.GetExternal;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetExternalRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetExternalRequestData;
		}
	}

	export class ServerGetExternalOperationRequest extends GetExternalOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetExternalRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetExternalRequestData;
		}
	}

	export class AdminGetExternalOperationRequest extends GetExternalOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetExternalRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetExternalRequestData;
		}
	}

	export class GetIpAddressCreateOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetIpAddressCreateRequestData> {
		protected override operationCode: string = OperationCode.GetIpAddressCreate;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetIpAddressCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetIpAddressCreateRequestData;
		}
	}

	export class ServerGetIpAddressCreateOperationRequest extends GetIpAddressCreateOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetIpAddressCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetIpAddressCreateRequestData;
		}
	}

	export class AdminGetIpAddressCreateOperationRequest extends GetIpAddressCreateOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetIpAddressCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetIpAddressCreateRequestData;
		}
	}

	export class GetPlayerBanOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayerBanRequestData> {
		protected override operationCode: string = OperationCode.GetPlayerBan;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetPlayerBanRequestData;
		}
	}

	export class ServerGetPlayerBanOperationRequest extends GetPlayerBanOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetPlayerBanRequestData;
		}
	}

	export class AdminGetPlayerBanOperationRequest extends GetPlayerBanOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetPlayerBanRequestData;
		}
	}

	export class GetPlayerCurrencyOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayerCurrencyRequestData> {
		protected override operationCode: string = OperationCode.GetPlayerCurrency;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetPlayerCurrencyRequestData;
		}
	}

	export class ServerGetPlayerCurrencyOperationRequest extends GetPlayerCurrencyOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetPlayerCurrencyRequestData;
		}
	}

	export class AdminGetPlayerCurrencyOperationRequest extends GetPlayerCurrencyOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetPlayerCurrencyRequestData;
		}
	}

	export class GetPlayerDataOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayerDataRequestData> {
		protected override operationCode: string = OperationCode.GetPlayerData;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetPlayerDataRequestData;
		}
	}

	export class ServerGetPlayerDataOperationRequest extends GetPlayerDataOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetPlayerDataRequestData;
		}
	}

	export class AdminGetPlayerDataOperationRequest extends GetPlayerDataOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetPlayerDataRequestData;
		}
	}

	export class GetPlayerInformationOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayerInformationRequestData> {
		protected override operationCode: string = OperationCode.GetPlayerInformation;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetPlayerInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetPlayerInformationRequestData;
		}
	}

	export class ServerGetPlayerInformationOperationRequest extends GetPlayerInformationOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetPlayerInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetPlayerInformationRequestData;
		}
	}

	export class AdminGetPlayerInformationOperationRequest extends GetPlayerInformationOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetPlayerInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetPlayerInformationRequestData;
		}
	}

	export class GetPlayerStatisticsOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayerStatisticsRequestData> {
		protected override operationCode: string = OperationCode.GetPlayerStatistics;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetPlayerStatisticsRequestData;
		}
	}

	export class ServerGetPlayerStatisticsOperationRequest extends GetPlayerStatisticsOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetPlayerStatisticsRequestData;
		}
	}

	export class AdminGetPlayerStatisticsOperationRequest extends GetPlayerStatisticsOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetPlayerStatisticsRequestData;
		}
	}

	export class GetPlayersWithAppleOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayersWithAppleRequestData> {
		protected override operationCode: string = OperationCode.GetPlayersWithApple;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetPlayersWithAppleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetPlayersWithAppleRequestData;
		}
	}

	export class ServerGetPlayersWithAppleOperationRequest extends GetPlayersWithAppleOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetPlayersWithAppleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetPlayersWithAppleRequestData;
		}
	}

	export class AdminGetPlayersWithAppleOperationRequest extends GetPlayersWithAppleOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetPlayersWithAppleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetPlayersWithAppleRequestData;
		}
	}

	export class GetPlayersWithDisplayNameOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayersWithDisplayNameRequestData> {
		protected override operationCode: string = OperationCode.GetPlayersWithDisplayName;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetPlayersWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetPlayersWithDisplayNameRequestData;
		}
	}

	export class ServerGetPlayersWithDisplayNameOperationRequest extends GetPlayersWithDisplayNameOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetPlayersWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetPlayersWithDisplayNameRequestData;
		}
	}

	export class AdminGetPlayersWithDisplayNameOperationRequest extends GetPlayersWithDisplayNameOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetPlayersWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetPlayersWithDisplayNameRequestData;
		}
	}

	export class GetPlayersWithFacebookOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayersWithFacebookRequestData> {
		protected override operationCode: string = OperationCode.GetPlayersWithFacebook;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetPlayersWithFacebookRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetPlayersWithFacebookRequestData;
		}
	}

	export class ServerGetPlayersWithFacebookOperationRequest extends GetPlayersWithFacebookOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetPlayersWithFacebookRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetPlayersWithFacebookRequestData;
		}
	}

	export class AdminGetPlayersWithFacebookOperationRequest extends GetPlayersWithFacebookOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetPlayersWithFacebookRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetPlayersWithFacebookRequestData;
		}
	}

	export class GetPlayersWithGenericServiceOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayersWithGenericServiceRequestData> {
		protected override operationCode: string = OperationCode.GetPlayersWithGenericService;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetPlayersWithGenericServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetPlayersWithGenericServiceRequestData;
		}
	}

	export class ServerGetPlayersWithGenericServiceOperationRequest extends GetPlayersWithGenericServiceOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetPlayersWithGenericServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetPlayersWithGenericServiceRequestData;
		}
	}

	export class AdminGetPlayersWithGenericServiceOperationRequest extends GetPlayersWithGenericServiceOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetPlayersWithGenericServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetPlayersWithGenericServiceRequestData;
		}
	}

	export class GetPlayersWithGoogleOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayersWithGoogleRequestData> {
		protected override operationCode: string = OperationCode.GetPlayersWithGoogle;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetPlayersWithGoogleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetPlayersWithGoogleRequestData;
		}
	}

	export class ServerGetPlayersWithGoogleOperationRequest extends GetPlayersWithGoogleOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetPlayersWithGoogleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetPlayersWithGoogleRequestData;
		}
	}

	export class AdminGetPlayersWithGoogleOperationRequest extends GetPlayersWithGoogleOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetPlayersWithGoogleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetPlayersWithGoogleRequestData;
		}
	}

	export class GetPlayersWithGooglePlayGameServiceOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayersWithGooglePlayGameServiceRequestData> {
		protected override operationCode: string = OperationCode.GetPlayersWithGooglePlayGameService;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetPlayersWithGooglePlayGameServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetPlayersWithGooglePlayGameServiceRequestData;
		}
	}

	export class ServerGetPlayersWithGooglePlayGameServiceOperationRequest extends GetPlayersWithGooglePlayGameServiceOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetPlayersWithGooglePlayGameServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetPlayersWithGooglePlayGameServiceRequestData;
		}
	}

	export class AdminGetPlayersWithGooglePlayGameServiceOperationRequest extends GetPlayersWithGooglePlayGameServiceOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetPlayersWithGooglePlayGameServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetPlayersWithGooglePlayGameServiceRequestData;
		}
	}

	export class GetPlayersWithGameCenterOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayersWithGameCenterRequestData> {
		protected override operationCode: string = OperationCode.GetPlayersWithGameCenter;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetPlayersWithGameCenterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetPlayersWithGameCenterRequestData;
		}
	}

	export class ServerGetPlayersWithGameCenterOperationRequest extends GetPlayersWithGameCenterOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetPlayersWithGameCenterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetPlayersWithGameCenterRequestData;
		}
	}

	export class AdminGetPlayersWithGameCenterOperationRequest extends GetPlayersWithGameCenterOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetPlayersWithGameCenterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetPlayersWithGameCenterRequestData;
		}
	}

	export class GetPlayersWithSegmentOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayersWithSegmentRequestData> {
		protected override operationCode: string = OperationCode.GetPlayersWithSegment;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetPlayersWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetPlayersWithSegmentRequestData;
		}
	}

	export class ServerGetPlayersWithSegmentOperationRequest extends GetPlayersWithSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetPlayersWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetPlayersWithSegmentRequestData;
		}
	}

	export class AdminGetPlayersWithSegmentOperationRequest extends GetPlayersWithSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetPlayersWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetPlayersWithSegmentRequestData;
		}
	}

	export class GetPlayersWithTagOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayersWithTagRequestData> {
		protected override operationCode: string = OperationCode.GetPlayersWithTag;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetPlayersWithTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetPlayersWithTagRequestData;
		}
	}

	export class ServerGetPlayersWithTagOperationRequest extends GetPlayersWithTagOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetPlayersWithTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetPlayersWithTagRequestData;
		}
	}

	export class AdminGetPlayersWithTagOperationRequest extends GetPlayersWithTagOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetPlayersWithTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetPlayersWithTagRequestData;
		}
	}

	export class GetSegmentOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetSegmentRequestData> {
		protected override operationCode: string = OperationCode.GetSegment;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetSegmentRequestData;
		}
	}

	export class ServerGetSegmentOperationRequest extends GetSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetSegmentRequestData;
		}
	}

	export class AdminGetSegmentOperationRequest extends GetSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetSegmentRequestData;
		}
	}

	export class GetStatisticsLeaderboardAroundPlayerOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData> {
		protected override operationCode: string = OperationCode.GetStatisticsLeaderboardAroundPlayer;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData;
		}
	}

	export class ServerGetStatisticsLeaderboardAroundPlayerOperationRequest extends GetStatisticsLeaderboardAroundPlayerOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetStatisticsLeaderboardAroundPlayerRequestData;
		}
	}

	export class AdminGetStatisticsLeaderboardAroundPlayerOperationRequest extends GetStatisticsLeaderboardAroundPlayerOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetStatisticsLeaderboardAroundPlayerRequestData;
		}
	}

	export class GetStatisticsLeaderboardOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetStatisticsLeaderboardRequestData> {
		protected override operationCode: string = OperationCode.GetStatisticsLeaderboard;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetStatisticsLeaderboardRequestData;
		}
	}

	export class ServerGetStatisticsLeaderboardOperationRequest extends GetStatisticsLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetStatisticsLeaderboardRequestData;
		}
	}

	export class AdminGetStatisticsLeaderboardOperationRequest extends GetStatisticsLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetStatisticsLeaderboardRequestData;
		}
	}

	export class GetTagOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetTagRequestData> {
		protected override operationCode: string = OperationCode.GetTag;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetTagRequestData;
		}
	}

	export class ServerGetTagOperationRequest extends GetTagOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetTagRequestData;
		}
	}

	export class AdminGetTagOperationRequest extends GetTagOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetTagRequestData;
		}
	}

	export class GetTsCreateOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetTsCreateRequestData> {
		protected override operationCode: string = OperationCode.GetTsCreate;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetTsCreateRequestData;
		}
	}

	export class ServerGetTsCreateOperationRequest extends GetTsCreateOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetTsCreateRequestData;
		}
	}

	export class AdminGetTsCreateOperationRequest extends GetTsCreateOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetTsCreateRequestData;
		}
	}

	export class GetTsLastLoginOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetTsLastLoginRequestData> {
		protected override operationCode: string = OperationCode.GetTsLastLogin;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetTsLastLoginRequestData;
		}
	}

	export class ServerGetTsLastLoginOperationRequest extends GetTsLastLoginOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetTsLastLoginRequestData;
		}
	}

	export class AdminGetTsLastLoginOperationRequest extends GetTsLastLoginOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetTsLastLoginRequestData;
		}
	}

	export class LinkAccountOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkAccountRequestData> {
		protected override operationCode: string = OperationCode.LinkAccount;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.LinkAccountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkAccountRequestData;
		}
	}

	export class ServerLinkAccountOperationRequest extends LinkAccountOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerLinkAccountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkAccountRequestData;
		}
	}

	export class AdminLinkAccountOperationRequest extends LinkAccountOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminLinkAccountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkAccountRequestData;
		}
	}

	export class LinkAndroidDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkAndroidDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LinkAndroidDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.LinkAndroidDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkAndroidDeviceIdRequestData;
		}
	}

	export class ServerLinkAndroidDeviceIdOperationRequest extends LinkAndroidDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerLinkAndroidDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkAndroidDeviceIdRequestData;
		}
	}

	export class AdminLinkAndroidDeviceIdOperationRequest extends LinkAndroidDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminLinkAndroidDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkAndroidDeviceIdRequestData;
		}
	}

	export class LinkAppleOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkAppleRequestData> {
		protected override operationCode: string = OperationCode.LinkApple;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.LinkAppleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkAppleRequestData;
		}
	}

	export class ServerLinkAppleOperationRequest extends LinkAppleOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerLinkAppleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkAppleRequestData;
		}
	}

	export class AdminLinkAppleOperationRequest extends LinkAppleOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminLinkAppleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkAppleRequestData;
		}
	}

	export class LinkCustomDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkCustomDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LinkCustomDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.LinkCustomDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkCustomDeviceIdRequestData;
		}
	}

	export class ServerLinkCustomDeviceIdOperationRequest extends LinkCustomDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerLinkCustomDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkCustomDeviceIdRequestData;
		}
	}

	export class AdminLinkCustomDeviceIdOperationRequest extends LinkCustomDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminLinkCustomDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkCustomDeviceIdRequestData;
		}
	}

	export class LinkCustomIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkCustomIdRequestData> {
		protected override operationCode: string = OperationCode.LinkCustomId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.LinkCustomIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkCustomIdRequestData;
		}
	}

	export class ServerLinkCustomIdOperationRequest extends LinkCustomIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerLinkCustomIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkCustomIdRequestData;
		}
	}

	export class AdminLinkCustomIdOperationRequest extends LinkCustomIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminLinkCustomIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkCustomIdRequestData;
		}
	}

	export class LinkEditorDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkEditorDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LinkEditorDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.LinkEditorDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkEditorDeviceIdRequestData;
		}
	}

	export class ServerLinkEditorDeviceIdOperationRequest extends LinkEditorDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerLinkEditorDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkEditorDeviceIdRequestData;
		}
	}

	export class AdminLinkEditorDeviceIdOperationRequest extends LinkEditorDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminLinkEditorDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkEditorDeviceIdRequestData;
		}
	}

	export class LinkFacebookOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkFacebookRequestData> {
		protected override operationCode: string = OperationCode.LinkFacebook;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.LinkFacebookRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkFacebookRequestData;
		}
	}

	export class ServerLinkFacebookOperationRequest extends LinkFacebookOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerLinkFacebookRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkFacebookRequestData;
		}
	}

	export class AdminLinkFacebookOperationRequest extends LinkFacebookOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminLinkFacebookRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkFacebookRequestData;
		}
	}

	export class LinkGenericServiceOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkGenericServiceRequestData> {
		protected override operationCode: string = OperationCode.LinkGenericService;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.LinkGenericServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkGenericServiceRequestData;
		}
	}

	export class ServerLinkGenericServiceOperationRequest extends LinkGenericServiceOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerLinkGenericServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkGenericServiceRequestData;
		}
	}

	export class AdminLinkGenericServiceOperationRequest extends LinkGenericServiceOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminLinkGenericServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkGenericServiceRequestData;
		}
	}

	export class LinkGoogleOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkGoogleRequestData> {
		protected override operationCode: string = OperationCode.LinkGoogle;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.LinkGoogleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkGoogleRequestData;
		}
	}

	export class ServerLinkGoogleOperationRequest extends LinkGoogleOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerLinkGoogleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkGoogleRequestData;
		}
	}

	export class AdminLinkGoogleOperationRequest extends LinkGoogleOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminLinkGoogleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkGoogleRequestData;
		}
	}

	export class LinkGooglePlayGameServiceOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkGooglePlayGameServiceRequestData> {
		protected override operationCode: string = OperationCode.LinkGooglePlayGameService;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.LinkGooglePlayGameServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkGooglePlayGameServiceRequestData;
		}
	}

	export class ServerLinkGooglePlayGameServiceOperationRequest extends LinkGooglePlayGameServiceOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerLinkGooglePlayGameServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkGooglePlayGameServiceRequestData;
		}
	}

	export class AdminLinkGooglePlayGameServiceOperationRequest extends LinkGooglePlayGameServiceOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminLinkGooglePlayGameServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkGooglePlayGameServiceRequestData;
		}
	}

	export class LinkGameCenterOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkGameCenterRequestData> {
		protected override operationCode: string = OperationCode.LinkGameCenter;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.LinkGameCenterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkGameCenterRequestData;
		}
	}

	export class ServerLinkGameCenterOperationRequest extends LinkGameCenterOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerLinkGameCenterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkGameCenterRequestData;
		}
	}

	export class AdminLinkGameCenterOperationRequest extends LinkGameCenterOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminLinkGameCenterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkGameCenterRequestData;
		}
	}

	export class LinkiOSDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkiOSDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LinkiOSDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.LinkiOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkiOSDeviceIdRequestData;
		}
	}

	export class ServerLinkiOSDeviceIdOperationRequest extends LinkiOSDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerLinkiOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkiOSDeviceIdRequestData;
		}
	}

	export class AdminLinkiOSDeviceIdOperationRequest extends LinkiOSDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminLinkiOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkiOSDeviceIdRequestData;
		}
	}

	export class LinkLinuxDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkLinuxDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LinkLinuxDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.LinkLinuxDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkLinuxDeviceIdRequestData;
		}
	}

	export class ServerLinkLinuxDeviceIdOperationRequest extends LinkLinuxDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerLinkLinuxDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkLinuxDeviceIdRequestData;
		}
	}

	export class AdminLinkLinuxDeviceIdOperationRequest extends LinkLinuxDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminLinkLinuxDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkLinuxDeviceIdRequestData;
		}
	}

	export class LinkMacOSDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkMacOSDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LinkMacOSDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.LinkMacOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkMacOSDeviceIdRequestData;
		}
	}

	export class ServerLinkMacOSDeviceIdOperationRequest extends LinkMacOSDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerLinkMacOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkMacOSDeviceIdRequestData;
		}
	}

	export class AdminLinkMacOSDeviceIdOperationRequest extends LinkMacOSDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminLinkMacOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkMacOSDeviceIdRequestData;
		}
	}

	export class LinkWindowsDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkWindowsDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LinkWindowsDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.LinkWindowsDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkWindowsDeviceIdRequestData;
		}
	}

	export class ServerLinkWindowsDeviceIdOperationRequest extends LinkWindowsDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerLinkWindowsDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkWindowsDeviceIdRequestData;
		}
	}

	export class AdminLinkWindowsDeviceIdOperationRequest extends LinkWindowsDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminLinkWindowsDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkWindowsDeviceIdRequestData;
		}
	}

	export class LinkWindowsPhoneDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkWindowsPhoneDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LinkWindowsPhoneDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.LinkWindowsPhoneDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkWindowsPhoneDeviceIdRequestData;
		}
	}

	export class ServerLinkWindowsPhoneDeviceIdOperationRequest extends LinkWindowsPhoneDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerLinkWindowsPhoneDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkWindowsPhoneDeviceIdRequestData;
		}
	}

	export class AdminLinkWindowsPhoneDeviceIdOperationRequest extends LinkWindowsPhoneDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminLinkWindowsPhoneDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkWindowsPhoneDeviceIdRequestData;
		}
	}

	export class RemoveSegmentOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.RemoveSegmentRequestData> {
		protected override operationCode: string = OperationCode.RemoveSegment;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.RemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.RemoveSegmentRequestData;
		}
	}

	export class ServerRemoveSegmentOperationRequest extends RemoveSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerRemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerRemoveSegmentRequestData;
		}
	}

	export class AdminRemoveSegmentOperationRequest extends RemoveSegmentOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminRemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminRemoveSegmentRequestData;
		}
	}

	export class RemoveTagOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.RemoveTagRequestData> {
		protected override operationCode: string = OperationCode.RemoveTag;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.RemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.RemoveTagRequestData;
		}
	}

	export class ServerRemoveTagOperationRequest extends RemoveTagOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerRemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerRemoveTagRequestData;
		}
	}

	export class AdminRemoveTagOperationRequest extends RemoveTagOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminRemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminRemoveTagRequestData;
		}
	}

	export class ResetAccountPasswordOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.ResetAccountPasswordRequestData> {
		protected override operationCode: string = OperationCode.ResetAccountPassword;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.ResetAccountPasswordRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ResetAccountPasswordRequestData;
		}
	}

	export class ServerResetAccountPasswordOperationRequest extends ResetAccountPasswordOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerResetAccountPasswordRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerResetAccountPasswordRequestData;
		}
	}

	export class AdminResetAccountPasswordOperationRequest extends ResetAccountPasswordOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminResetAccountPasswordRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminResetAccountPasswordRequestData;
		}
	}

	export class SetAvatarOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SetAvatarRequestData> {
		protected override operationCode: string = OperationCode.SetAvatar;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.SetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.SetAvatarRequestData;
		}
	}

	export class ServerSetAvatarOperationRequest extends SetAvatarOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerSetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerSetAvatarRequestData;
		}
	}

	export class AdminSetAvatarOperationRequest extends SetAvatarOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminSetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminSetAvatarRequestData;
		}
	}

	export class SetCountryCodeOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SetCountryCodeRequestData> {
		protected override operationCode: string = OperationCode.SetCountryCode;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.SetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.SetCountryCodeRequestData;
		}
	}

	export class ServerSetCountryCodeOperationRequest extends SetCountryCodeOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerSetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerSetCountryCodeRequestData;
		}
	}

	export class AdminSetCountryCodeOperationRequest extends SetCountryCodeOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminSetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminSetCountryCodeRequestData;
		}
	}

	export class SetCustomDataOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SetCustomDataRequestData> {
		protected override operationCode: string = OperationCode.SetCustomData;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.SetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.SetCustomDataRequestData;
		}
	}

	export class ServerSetCustomDataOperationRequest extends SetCustomDataOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerSetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerSetCustomDataRequestData;
		}
	}

	export class AdminSetCustomDataOperationRequest extends SetCustomDataOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminSetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminSetCustomDataRequestData;
		}
	}

	export class SetDisplayNameOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SetDisplayNameRequestData> {
		protected override operationCode: string = OperationCode.SetDisplayName;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.SetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.SetDisplayNameRequestData;
		}
	}

	export class ServerSetDisplayNameOperationRequest extends SetDisplayNameOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerSetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerSetDisplayNameRequestData;
		}
	}

	export class AdminSetDisplayNameOperationRequest extends SetDisplayNameOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminSetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminSetDisplayNameRequestData;
		}
	}

	export class SetEmailOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SetEmailRequestData> {
		protected override operationCode: string = OperationCode.SetEmail;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.SetEmailRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.SetEmailRequestData;
		}
	}

	export class ServerSetEmailOperationRequest extends SetEmailOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerSetEmailRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerSetEmailRequestData;
		}
	}

	export class AdminSetEmailOperationRequest extends SetEmailOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminSetEmailRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminSetEmailRequestData;
		}
	}

	export class SetPlayerBanOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SetPlayerBanRequestData> {
		protected override operationCode: string = OperationCode.SetPlayerBan;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.SetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.SetPlayerBanRequestData;
		}
	}

	export class ServerSetPlayerBanOperationRequest extends SetPlayerBanOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerSetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerSetPlayerBanRequestData;
		}
	}

	export class AdminSetPlayerBanOperationRequest extends SetPlayerBanOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminSetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminSetPlayerBanRequestData;
		}
	}

	export class ChangePlayerCurrencyOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.ChangePlayerCurrencyRequestData> {
		protected override operationCode: string = OperationCode.ChangePlayerCurrency;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.ChangePlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ChangePlayerCurrencyRequestData;
		}
	}

	export class ServerChangePlayerCurrencyOperationRequest extends ChangePlayerCurrencyOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerChangePlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerChangePlayerCurrencyRequestData;
		}
	}

	export class AdminChangePlayerCurrencyOperationRequest extends ChangePlayerCurrencyOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminChangePlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminChangePlayerCurrencyRequestData;
		}
	}

	export class SetPlayerDataOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SetPlayerDataRequestData> {
		protected override operationCode: string = OperationCode.SetPlayerData;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.SetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.SetPlayerDataRequestData;
		}
	}

	export class ServerSetPlayerDataOperationRequest extends SetPlayerDataOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerSetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerSetPlayerDataRequestData;
		}
	}

	export class AdminSetPlayerDataOperationRequest extends SetPlayerDataOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminSetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminSetPlayerDataRequestData;
		}
	}

	export class ChangePlayerStatisticsOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.ChangePlayerStatisticsRequestData> {
		protected override operationCode: string = OperationCode.ChangePlayerStatistics;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.ChangePlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ChangePlayerStatisticsRequestData;
		}
	}

	export class ServerChangePlayerStatisticsOperationRequest extends ChangePlayerStatisticsOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerChangePlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerChangePlayerStatisticsRequestData;
		}
	}

	export class AdminChangePlayerStatisticsOperationRequest extends ChangePlayerStatisticsOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminChangePlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminChangePlayerStatisticsRequestData;
		}
	}

	export class SetTagOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SetTagRequestData> {
		protected override operationCode: string = OperationCode.SetTag;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.SetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.SetTagRequestData;
		}
	}

	export class ServerSetTagOperationRequest extends SetTagOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerSetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerSetTagRequestData;
		}
	}

	export class AdminSetTagOperationRequest extends SetTagOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminSetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminSetTagRequestData;
		}
	}

	export class SetTsLastLoginOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SetTsLastLoginRequestData> {
		protected override operationCode: string = OperationCode.SetTsLastLogin;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.SetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.SetTsLastLoginRequestData;
		}
	}

	export class ServerSetTsLastLoginOperationRequest extends SetTsLastLoginOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerSetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerSetTsLastLoginRequestData;
		}
	}

	export class AdminSetTsLastLoginOperationRequest extends SetTsLastLoginOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminSetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminSetTsLastLoginRequestData;
		}
	}

	export class UnlinkAccountOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkAccountRequestData> {
		protected override operationCode: string = OperationCode.UnlinkAccount;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.UnlinkAccountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkAccountRequestData;
		}
	}

	export class ServerUnlinkAccountOperationRequest extends UnlinkAccountOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerUnlinkAccountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkAccountRequestData;
		}
	}

	export class AdminUnlinkAccountOperationRequest extends UnlinkAccountOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminUnlinkAccountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkAccountRequestData;
		}
	}

	export class UnlinkAndroidDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkAndroidDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.UnlinkAndroidDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.UnlinkAndroidDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkAndroidDeviceIdRequestData;
		}
	}

	export class ServerUnlinkAndroidDeviceIdOperationRequest extends UnlinkAndroidDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerUnlinkAndroidDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkAndroidDeviceIdRequestData;
		}
	}

	export class AdminUnlinkAndroidDeviceIdOperationRequest extends UnlinkAndroidDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminUnlinkAndroidDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkAndroidDeviceIdRequestData;
		}
	}

	export class UnlinkAppleOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkAppleRequestData> {
		protected override operationCode: string = OperationCode.UnlinkApple;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.UnlinkAppleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkAppleRequestData;
		}
	}

	export class ServerUnlinkAppleOperationRequest extends UnlinkAppleOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerUnlinkAppleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkAppleRequestData;
		}
	}

	export class AdminUnlinkAppleOperationRequest extends UnlinkAppleOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminUnlinkAppleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkAppleRequestData;
		}
	}

	export class UnlinkCustomDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkCustomDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.UnlinkCustomDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.UnlinkCustomDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkCustomDeviceIdRequestData;
		}
	}

	export class ServerUnlinkCustomDeviceIdOperationRequest extends UnlinkCustomDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerUnlinkCustomDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkCustomDeviceIdRequestData;
		}
	}

	export class AdminUnlinkCustomDeviceIdOperationRequest extends UnlinkCustomDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminUnlinkCustomDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkCustomDeviceIdRequestData;
		}
	}

	export class UnlinkCustomIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkCustomIdRequestData> {
		protected override operationCode: string = OperationCode.UnlinkCustomId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.UnlinkCustomIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkCustomIdRequestData;
		}
	}

	export class ServerUnlinkCustomIdOperationRequest extends UnlinkCustomIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerUnlinkCustomIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkCustomIdRequestData;
		}
	}

	export class AdminUnlinkCustomIdOperationRequest extends UnlinkCustomIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminUnlinkCustomIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkCustomIdRequestData;
		}
	}

	export class UnlinkEditorDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkEditorDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.UnlinkEditorDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.UnlinkEditorDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkEditorDeviceIdRequestData;
		}
	}

	export class ServerUnlinkEditorDeviceIdOperationRequest extends UnlinkEditorDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerUnlinkEditorDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkEditorDeviceIdRequestData;
		}
	}

	export class AdminUnlinkEditorDeviceIdOperationRequest extends UnlinkEditorDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminUnlinkEditorDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkEditorDeviceIdRequestData;
		}
	}

	export class UnlinkFacebookOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkFacebookRequestData> {
		protected override operationCode: string = OperationCode.UnlinkFacebook;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.UnlinkFacebookRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkFacebookRequestData;
		}
	}

	export class ServerUnlinkFacebookOperationRequest extends UnlinkFacebookOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerUnlinkFacebookRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkFacebookRequestData;
		}
	}

	export class AdminUnlinkFacebookOperationRequest extends UnlinkFacebookOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminUnlinkFacebookRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkFacebookRequestData;
		}
	}

	export class UnlinkGenericServiceOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkGenericServiceRequestData> {
		protected override operationCode: string = OperationCode.UnlinkGenericService;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.UnlinkGenericServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkGenericServiceRequestData;
		}
	}

	export class ServerUnlinkGenericServiceOperationRequest extends UnlinkGenericServiceOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerUnlinkGenericServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkGenericServiceRequestData;
		}
	}

	export class AdminUnlinkGenericServiceOperationRequest extends UnlinkGenericServiceOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminUnlinkGenericServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkGenericServiceRequestData;
		}
	}

	export class UnlinkGoogleOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkGoogleRequestData> {
		protected override operationCode: string = OperationCode.UnlinkGoogle;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.UnlinkGoogleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkGoogleRequestData;
		}
	}

	export class ServerUnlinkGoogleOperationRequest extends UnlinkGoogleOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerUnlinkGoogleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkGoogleRequestData;
		}
	}

	export class AdminUnlinkGoogleOperationRequest extends UnlinkGoogleOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminUnlinkGoogleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkGoogleRequestData;
		}
	}

	export class UnlinkGooglePlayGameServiceOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkGooglePlayGameServiceRequestData> {
		protected override operationCode: string = OperationCode.UnlinkGooglePlayGameService;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.UnlinkGooglePlayGameServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkGooglePlayGameServiceRequestData;
		}
	}

	export class ServerUnlinkGooglePlayGameServiceOperationRequest extends UnlinkGooglePlayGameServiceOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerUnlinkGooglePlayGameServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkGooglePlayGameServiceRequestData;
		}
	}

	export class AdminUnlinkGooglePlayGameServiceOperationRequest extends UnlinkGooglePlayGameServiceOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminUnlinkGooglePlayGameServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkGooglePlayGameServiceRequestData;
		}
	}

	export class UnlinkGameCenterOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkGameCenterRequestData> {
		protected override operationCode: string = OperationCode.UnlinkGameCenter;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.UnlinkGameCenterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkGameCenterRequestData;
		}
	}

	export class ServerUnlinkGameCenterOperationRequest extends UnlinkGameCenterOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerUnlinkGameCenterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkGameCenterRequestData;
		}
	}

	export class AdminUnlinkGameCenterOperationRequest extends UnlinkGameCenterOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminUnlinkGameCenterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkGameCenterRequestData;
		}
	}

	export class UnlinkiOSDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkiOSDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.UnlinkiOSDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.UnlinkiOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkiOSDeviceIdRequestData;
		}
	}

	export class ServerUnlinkiOSDeviceIdOperationRequest extends UnlinkiOSDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerUnlinkiOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkiOSDeviceIdRequestData;
		}
	}

	export class AdminUnlinkiOSDeviceIdOperationRequest extends UnlinkiOSDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminUnlinkiOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkiOSDeviceIdRequestData;
		}
	}

	export class UnlinkLinuxDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkLinuxDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.UnlinkLinuxDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.UnlinkLinuxDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkLinuxDeviceIdRequestData;
		}
	}

	export class ServerUnlinkLinuxDeviceIdOperationRequest extends UnlinkLinuxDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerUnlinkLinuxDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkLinuxDeviceIdRequestData;
		}
	}

	export class AdminUnlinkLinuxDeviceIdOperationRequest extends UnlinkLinuxDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminUnlinkLinuxDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkLinuxDeviceIdRequestData;
		}
	}

	export class UnlinkMacOSDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkMacOSDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.UnlinkMacOSDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.UnlinkMacOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkMacOSDeviceIdRequestData;
		}
	}

	export class ServerUnlinkMacOSDeviceIdOperationRequest extends UnlinkMacOSDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerUnlinkMacOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkMacOSDeviceIdRequestData;
		}
	}

	export class AdminUnlinkMacOSDeviceIdOperationRequest extends UnlinkMacOSDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminUnlinkMacOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkMacOSDeviceIdRequestData;
		}
	}

	export class UnlinkWindowsDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkWindowsDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.UnlinkWindowsDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.UnlinkWindowsDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkWindowsDeviceIdRequestData;
		}
	}

	export class ServerUnlinkWindowsDeviceIdOperationRequest extends UnlinkWindowsDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerUnlinkWindowsDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkWindowsDeviceIdRequestData;
		}
	}

	export class AdminUnlinkWindowsDeviceIdOperationRequest extends UnlinkWindowsDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminUnlinkWindowsDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkWindowsDeviceIdRequestData;
		}
	}

	export class UnlinkWindowsPhoneDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkWindowsPhoneDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.UnlinkWindowsPhoneDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.UnlinkWindowsPhoneDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkWindowsPhoneDeviceIdRequestData;
		}
	}

	export class ServerUnlinkWindowsPhoneDeviceIdOperationRequest extends UnlinkWindowsPhoneDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerUnlinkWindowsPhoneDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkWindowsPhoneDeviceIdRequestData;
		}
	}

	export class AdminUnlinkWindowsPhoneDeviceIdOperationRequest extends UnlinkWindowsPhoneDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminUnlinkWindowsPhoneDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkWindowsPhoneDeviceIdRequestData;
		}
	}

	export class GetCurrencyLeaderboardOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetCurrencyLeaderboardRequestData> {
		protected override operationCode: string = OperationCode.GetCurrencyLeaderboard;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetCurrencyLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetCurrencyLeaderboardRequestData;
		}
	}

	export class ServerGetCurrencyLeaderboardOperationRequest extends GetCurrencyLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetCurrencyLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetCurrencyLeaderboardRequestData;
		}
	}

	export class AdminGetCurrencyLeaderboardOperationRequest extends GetCurrencyLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetCurrencyLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetCurrencyLeaderboardRequestData;
		}
	}

	export class GetCreateLeaderboardOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetCreateLeaderboardRequestData> {
		protected override operationCode: string = OperationCode.GetCreateLeaderboard;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetCreateLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetCreateLeaderboardRequestData;
		}
	}

	export class ServerGetCreateLeaderboardOperationRequest extends GetCreateLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetCreateLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetCreateLeaderboardRequestData;
		}
	}

	export class AdminGetCreateLeaderboardOperationRequest extends GetCreateLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetCreateLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetCreateLeaderboardRequestData;
		}
	}

	export class GetLastLoginLeaderboardOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetLastLoginLeaderboardRequestData> {
		protected override operationCode: string = OperationCode.GetLastLoginLeaderboard;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetLastLoginLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetLastLoginLeaderboardRequestData;
		}
	}

	export class ServerGetLastLoginLeaderboardOperationRequest extends GetLastLoginLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetLastLoginLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetLastLoginLeaderboardRequestData;
		}
	}

	export class AdminGetLastLoginLeaderboardOperationRequest extends GetLastLoginLeaderboardOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetLastLoginLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetLastLoginLeaderboardRequestData;
		}
	}

	export class GetStatisticsLogOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetStatisticsLogRequestData> {
		protected override operationCode: string = OperationCode.GetStatisticsLog;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetStatisticsLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetStatisticsLogRequestData;
		}
	}

	export class ServerGetStatisticsLogOperationRequest extends GetStatisticsLogOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetStatisticsLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetStatisticsLogRequestData;
		}
	}

	export class AdminGetStatisticsLogOperationRequest extends GetStatisticsLogOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetStatisticsLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetStatisticsLogRequestData;
		}
	}

	export class GetCurrencyLogOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetCurrencyLogRequestData> {
		protected override operationCode: string = OperationCode.GetCurrencyLog;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetCurrencyLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetCurrencyLogRequestData;
		}
	}

	export class ServerGetCurrencyLogOperationRequest extends GetCurrencyLogOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetCurrencyLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetCurrencyLogRequestData;
		}
	}

	export class AdminGetCurrencyLogOperationRequest extends GetCurrencyLogOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetCurrencyLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetCurrencyLogRequestData;
		}
	}

	export class SendSocketOperationEventOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SendSocketOperationEventRequestData> {
		protected override operationCode: string = OperationCode.SendSocketOperationEvent;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.SendSocketOperationEventRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.SendSocketOperationEventRequestData;
		}
	}

	export class ServerSendSocketOperationEventOperationRequest extends SendSocketOperationEventOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerSendSocketOperationEventRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerSendSocketOperationEventRequestData;
		}
	}

	export class AdminSendSocketOperationEventOperationRequest extends SendSocketOperationEventOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminSendSocketOperationEventRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminSendSocketOperationEventRequestData;
		}
	}

	export class SendEmailOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SendEmailRequestData> {
		protected override operationCode: string = OperationCode.SendEmail;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.SendEmailRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.SendEmailRequestData;
		}
	}

	export class ServerSendEmailOperationRequest extends SendEmailOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerSendEmailRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerSendEmailRequestData;
		}
	}

	export class AdminSendEmailOperationRequest extends SendEmailOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminSendEmailRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminSendEmailRequestData;
		}
	}

	export class AddPushNotificationOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.AddPushNotificationRequestData> {
		protected override operationCode: string = OperationCode.AddPushNotification;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.AddPushNotificationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AddPushNotificationRequestData;
		}
	}

	export class ServerAddPushNotificationOperationRequest extends AddPushNotificationOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerAddPushNotificationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerAddPushNotificationRequestData;
		}
	}

	export class AdminAddPushNotificationOperationRequest extends AddPushNotificationOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminAddPushNotificationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminAddPushNotificationRequestData;
		}
	}

	export class RemovePushNotificationOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.RemovePushNotificationRequestData> {
		protected override operationCode: string = OperationCode.RemovePushNotification;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.RemovePushNotificationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.RemovePushNotificationRequestData;
		}
	}

	export class ServerRemovePushNotificationOperationRequest extends RemovePushNotificationOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerRemovePushNotificationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerRemovePushNotificationRequestData;
		}
	}

	export class AdminRemovePushNotificationOperationRequest extends RemovePushNotificationOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminRemovePushNotificationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminRemovePushNotificationRequestData;
		}
	}

	export class GetPushNotificationOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPushNotificationRequestData> {
		protected override operationCode: string = OperationCode.GetPushNotification;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.GetPushNotificationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetPushNotificationRequestData;
		}
	}

	export class ServerGetPushNotificationOperationRequest extends GetPushNotificationOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerGetPushNotificationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetPushNotificationRequestData;
		}
	}

	export class AdminGetPushNotificationOperationRequest extends GetPushNotificationOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminGetPushNotificationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetPushNotificationRequestData;
		}
	}

	export class SendPushNotificationOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SendPushNotificationRequestData> {
		protected override operationCode: string = OperationCode.SendPushNotification;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: MasterPlayerModels.SendPushNotificationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.SendPushNotificationRequestData;
		}
	}

	export class ServerSendPushNotificationOperationRequest extends SendPushNotificationOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		constructor(requestData: MasterPlayerModels.ServerSendPushNotificationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerSendPushNotificationRequestData;
		}
	}

	export class AdminSendPushNotificationOperationRequest extends SendPushNotificationOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		constructor(requestData: MasterPlayerModels.AdminSendPushNotificationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminSendPushNotificationRequestData;
		}
	}

}
