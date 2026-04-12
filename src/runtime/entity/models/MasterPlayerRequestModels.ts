import { OperationCode } from "./../../constant/OperationCode";
import { RequestRole } from "./../../constant/enumType/RequestRole";
import { RequestType } from "./../../constant/enumType/RequestType";
import { CustomOperationRequestAbstract } from "./../request/CustomOperationRequest";
import { MasterPlayerModels } from "./MasterPlayerModels";

/**
 * Groups typed operation-request wrappers for `RequestType.MasterPlayer`.
 * Client wrappers target the authenticated player when `userId` is omitted,
 * while server/admin wrappers switch role and usually require an explicit target user.
 */
export namespace MasterPlayerRequestModels {
	/**
	 * Maps the AddSegment operation to a typed request wrapper.
	 */
	export class AddSegmentOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.AddSegmentRequestData> {
		protected override operationCode: string = OperationCode.AddSegment;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new AddSegmentOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AddSegmentRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerAddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerAddSegmentRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminAddSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminAddSegmentRequestData;
		}
	}

	/**
	 * Maps the ChangeAccountPassword operation to a typed request wrapper.
	 */
	export class ChangeAccountPasswordOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.ChangeAccountPasswordRequestData> {
		protected override operationCode: string = OperationCode.ChangeAccountPassword;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new ChangeAccountPasswordOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ChangeAccountPasswordRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ChangeAccountPasswordRequestData;
		}
	}

	/**
	 * Maps the GetAvatar operation to a typed request wrapper.
	 */
	export class GetAvatarOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetAvatarRequestData> {
		protected override operationCode: string = OperationCode.GetAvatar;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetAvatarOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetAvatarRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerGetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetAvatarRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminGetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetAvatarRequestData;
		}
	}

	/**
	 * Maps the GetCountryCode operation to a typed request wrapper.
	 */
	export class GetCountryCodeOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetCountryCodeRequestData> {
		protected override operationCode: string = OperationCode.GetCountryCode;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetCountryCodeOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetCountryCodeRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerGetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetCountryCodeRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminGetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetCountryCodeRequestData;
		}
	}

	/**
	 * Maps the GetCustomData operation to a typed request wrapper.
	 */
	export class GetCustomDataOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetCustomDataRequestData> {
		protected override operationCode: string = OperationCode.GetCustomData;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetCustomDataOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetCustomDataRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerGetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetCustomDataRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminGetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetCustomDataRequestData;
		}
	}

	/**
	 * Maps the GetDisplayName operation to a typed request wrapper.
	 */
	export class GetDisplayNameOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetDisplayNameRequestData> {
		protected override operationCode: string = OperationCode.GetDisplayName;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetDisplayNameOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetDisplayNameRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerGetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetDisplayNameRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminGetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetDisplayNameRequestData;
		}
	}

	/**
	 * Maps the GetEmail operation to a typed request wrapper.
	 */
	export class GetEmailOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetEmailRequestData> {
		protected override operationCode: string = OperationCode.GetEmail;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetEmailOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetEmailRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetEmailRequestData;
		}
	}

	/**
	 * Maps the ServerGetEmail operation to a typed request wrapper.
	 */
	export class ServerGetEmailOperationRequest extends GetEmailOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetEmailOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerGetEmailRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetEmailRequestData;
		}
	}

	/**
	 * Maps the AdminGetEmail operation to a typed request wrapper.
	 */
	export class AdminGetEmailOperationRequest extends GetEmailOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetEmailOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminGetEmailRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetEmailRequestData;
		}
	}

	/**
	 * Maps the GetExternal operation to a typed request wrapper.
	 */
	export class GetExternalOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetExternalRequestData> {
		protected override operationCode: string = OperationCode.GetExternal;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetExternalOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetExternalRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetExternalRequestData;
		}
	}

	/**
	 * Maps the ServerGetExternal operation to a typed request wrapper.
	 */
	export class ServerGetExternalOperationRequest extends GetExternalOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetExternalOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerGetExternalRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetExternalRequestData;
		}
	}

	/**
	 * Maps the AdminGetExternal operation to a typed request wrapper.
	 */
	export class AdminGetExternalOperationRequest extends GetExternalOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetExternalOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminGetExternalRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetExternalRequestData;
		}
	}

	/**
	 * Maps the GetIpAddressCreate operation to a typed request wrapper.
	 */
	export class GetIpAddressCreateOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetIpAddressCreateRequestData> {
		protected override operationCode: string = OperationCode.GetIpAddressCreate;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetIpAddressCreateOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetIpAddressCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetIpAddressCreateRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerGetIpAddressCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetIpAddressCreateRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminGetIpAddressCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetIpAddressCreateRequestData;
		}
	}

	/**
	 * Maps the GetPlayerBan operation to a typed request wrapper.
	 */
	export class GetPlayerBanOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayerBanRequestData> {
		protected override operationCode: string = OperationCode.GetPlayerBan;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayerBanOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetPlayerBanRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerGetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetPlayerBanRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminGetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetPlayerBanRequestData;
		}
	}

	/**
	 * Maps the GetPlayerCurrency operation to a typed request wrapper.
	 */
	export class GetPlayerCurrencyOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayerCurrencyRequestData> {
		protected override operationCode: string = OperationCode.GetPlayerCurrency;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayerCurrencyOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetPlayerCurrencyRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerGetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetPlayerCurrencyRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminGetPlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetPlayerCurrencyRequestData;
		}
	}

	/**
	 * Maps the GetPlayerData operation to a typed request wrapper.
	 */
	export class GetPlayerDataOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayerDataRequestData> {
		protected override operationCode: string = OperationCode.GetPlayerData;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayerDataOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetPlayerDataRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerGetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetPlayerDataRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminGetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetPlayerDataRequestData;
		}
	}

	/**
	 * Maps the GetPlayerInformation operation to a typed request wrapper.
	 */
	export class GetPlayerInformationOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayerInformationRequestData> {
		protected override operationCode: string = OperationCode.GetPlayerInformation;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayerInformationOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetPlayerInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetPlayerInformationRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerGetPlayerInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetPlayerInformationRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminGetPlayerInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetPlayerInformationRequestData;
		}
	}

	/**
	 * Maps the GetPlayerStatistics operation to a typed request wrapper.
	 */
	export class GetPlayerStatisticsOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayerStatisticsRequestData> {
		protected override operationCode: string = OperationCode.GetPlayerStatistics;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayerStatisticsOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetPlayerStatisticsRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerGetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetPlayerStatisticsRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminGetPlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetPlayerStatisticsRequestData;
		}
	}

	/**
	 * Maps the GetPlayersWithApple operation to a typed request wrapper.
	 */
	export class GetPlayersWithAppleOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayersWithAppleRequestData> {
		protected override operationCode: string = OperationCode.GetPlayersWithApple;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayersWithAppleOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetPlayersWithAppleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetPlayersWithAppleRequestData;
		}
	}

	/**
	 * Maps the ServerGetPlayersWithApple operation to a typed request wrapper.
	 */
	export class ServerGetPlayersWithAppleOperationRequest extends GetPlayersWithAppleOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetPlayersWithAppleOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerGetPlayersWithAppleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetPlayersWithAppleRequestData;
		}
	}

	/**
	 * Maps the AdminGetPlayersWithApple operation to a typed request wrapper.
	 */
	export class AdminGetPlayersWithAppleOperationRequest extends GetPlayersWithAppleOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetPlayersWithAppleOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminGetPlayersWithAppleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetPlayersWithAppleRequestData;
		}
	}

	/**
	 * Maps the GetPlayersWithDisplayName operation to a typed request wrapper.
	 */
	export class GetPlayersWithDisplayNameOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayersWithDisplayNameRequestData> {
		protected override operationCode: string = OperationCode.GetPlayersWithDisplayName;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayersWithDisplayNameOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetPlayersWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetPlayersWithDisplayNameRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerGetPlayersWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetPlayersWithDisplayNameRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminGetPlayersWithDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetPlayersWithDisplayNameRequestData;
		}
	}

	/**
	 * Maps the GetPlayersWithFacebook operation to a typed request wrapper.
	 */
	export class GetPlayersWithFacebookOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayersWithFacebookRequestData> {
		protected override operationCode: string = OperationCode.GetPlayersWithFacebook;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayersWithFacebookOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetPlayersWithFacebookRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetPlayersWithFacebookRequestData;
		}
	}

	/**
	 * Maps the ServerGetPlayersWithFacebook operation to a typed request wrapper.
	 */
	export class ServerGetPlayersWithFacebookOperationRequest extends GetPlayersWithFacebookOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetPlayersWithFacebookOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerGetPlayersWithFacebookRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetPlayersWithFacebookRequestData;
		}
	}

	/**
	 * Maps the AdminGetPlayersWithFacebook operation to a typed request wrapper.
	 */
	export class AdminGetPlayersWithFacebookOperationRequest extends GetPlayersWithFacebookOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetPlayersWithFacebookOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminGetPlayersWithFacebookRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetPlayersWithFacebookRequestData;
		}
	}

	/**
	 * Maps the GetPlayersWithGenericService operation to a typed request wrapper.
	 */
	export class GetPlayersWithGenericServiceOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayersWithGenericServiceRequestData> {
		protected override operationCode: string = OperationCode.GetPlayersWithGenericService;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayersWithGenericServiceOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetPlayersWithGenericServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetPlayersWithGenericServiceRequestData;
		}
	}

	/**
	 * Maps the ServerGetPlayersWithGenericService operation to a typed request wrapper.
	 */
	export class ServerGetPlayersWithGenericServiceOperationRequest extends GetPlayersWithGenericServiceOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetPlayersWithGenericServiceOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerGetPlayersWithGenericServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetPlayersWithGenericServiceRequestData;
		}
	}

	/**
	 * Maps the AdminGetPlayersWithGenericService operation to a typed request wrapper.
	 */
	export class AdminGetPlayersWithGenericServiceOperationRequest extends GetPlayersWithGenericServiceOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetPlayersWithGenericServiceOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminGetPlayersWithGenericServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetPlayersWithGenericServiceRequestData;
		}
	}

	/**
	 * Maps the GetPlayersWithGoogle operation to a typed request wrapper.
	 */
	export class GetPlayersWithGoogleOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayersWithGoogleRequestData> {
		protected override operationCode: string = OperationCode.GetPlayersWithGoogle;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayersWithGoogleOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetPlayersWithGoogleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetPlayersWithGoogleRequestData;
		}
	}

	/**
	 * Maps the ServerGetPlayersWithGoogle operation to a typed request wrapper.
	 */
	export class ServerGetPlayersWithGoogleOperationRequest extends GetPlayersWithGoogleOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetPlayersWithGoogleOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerGetPlayersWithGoogleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetPlayersWithGoogleRequestData;
		}
	}

	/**
	 * Maps the AdminGetPlayersWithGoogle operation to a typed request wrapper.
	 */
	export class AdminGetPlayersWithGoogleOperationRequest extends GetPlayersWithGoogleOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetPlayersWithGoogleOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminGetPlayersWithGoogleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetPlayersWithGoogleRequestData;
		}
	}

	/**
	 * Maps the GetPlayersWithGooglePlayGameService operation to a typed request wrapper.
	 */
	export class GetPlayersWithGooglePlayGameServiceOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayersWithGooglePlayGameServiceRequestData> {
		protected override operationCode: string = OperationCode.GetPlayersWithGooglePlayGameService;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayersWithGooglePlayGameServiceOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetPlayersWithGooglePlayGameServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetPlayersWithGooglePlayGameServiceRequestData;
		}
	}

	/**
	 * Maps the ServerGetPlayersWithGooglePlayGameService operation to a typed request wrapper.
	 */
	export class ServerGetPlayersWithGooglePlayGameServiceOperationRequest extends GetPlayersWithGooglePlayGameServiceOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetPlayersWithGooglePlayGameServiceOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerGetPlayersWithGooglePlayGameServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetPlayersWithGooglePlayGameServiceRequestData;
		}
	}

	/**
	 * Maps the AdminGetPlayersWithGooglePlayGameService operation to a typed request wrapper.
	 */
	export class AdminGetPlayersWithGooglePlayGameServiceOperationRequest extends GetPlayersWithGooglePlayGameServiceOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetPlayersWithGooglePlayGameServiceOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminGetPlayersWithGooglePlayGameServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetPlayersWithGooglePlayGameServiceRequestData;
		}
	}

	/**
	 * Maps the GetPlayersWithGameCenter operation to a typed request wrapper.
	 */
	export class GetPlayersWithGameCenterOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayersWithGameCenterRequestData> {
		protected override operationCode: string = OperationCode.GetPlayersWithGameCenter;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayersWithGameCenterOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetPlayersWithGameCenterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetPlayersWithGameCenterRequestData;
		}
	}

	/**
	 * Maps the ServerGetPlayersWithGameCenter operation to a typed request wrapper.
	 */
	export class ServerGetPlayersWithGameCenterOperationRequest extends GetPlayersWithGameCenterOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetPlayersWithGameCenterOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerGetPlayersWithGameCenterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetPlayersWithGameCenterRequestData;
		}
	}

	/**
	 * Maps the AdminGetPlayersWithGameCenter operation to a typed request wrapper.
	 */
	export class AdminGetPlayersWithGameCenterOperationRequest extends GetPlayersWithGameCenterOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetPlayersWithGameCenterOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminGetPlayersWithGameCenterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetPlayersWithGameCenterRequestData;
		}
	}

	/**
	 * Maps the GetPlayersWithSegment operation to a typed request wrapper.
	 */
	export class GetPlayersWithSegmentOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayersWithSegmentRequestData> {
		protected override operationCode: string = OperationCode.GetPlayersWithSegment;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayersWithSegmentOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetPlayersWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetPlayersWithSegmentRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerGetPlayersWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetPlayersWithSegmentRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminGetPlayersWithSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetPlayersWithSegmentRequestData;
		}
	}

	/**
	 * Maps the GetPlayersWithTag operation to a typed request wrapper.
	 */
	export class GetPlayersWithTagOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPlayersWithTagRequestData> {
		protected override operationCode: string = OperationCode.GetPlayersWithTag;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPlayersWithTagOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetPlayersWithTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetPlayersWithTagRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerGetPlayersWithTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetPlayersWithTagRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminGetPlayersWithTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetPlayersWithTagRequestData;
		}
	}

	/**
	 * Maps the GetSegment operation to a typed request wrapper.
	 */
	export class GetSegmentOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetSegmentRequestData> {
		protected override operationCode: string = OperationCode.GetSegment;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetSegmentOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetSegmentRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerGetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetSegmentRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminGetSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetSegmentRequestData;
		}
	}

	/**
	 * Maps the GetStatisticsLeaderboardAroundPlayer operation to a typed request wrapper.
	 */
	export class GetStatisticsLeaderboardAroundPlayerOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData> {
		protected override operationCode: string = OperationCode.GetStatisticsLeaderboardAroundPlayer;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetStatisticsLeaderboardAroundPlayerOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetStatisticsLeaderboardAroundPlayerRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerGetStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetStatisticsLeaderboardAroundPlayerRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminGetStatisticsLeaderboardAroundPlayerRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetStatisticsLeaderboardAroundPlayerRequestData;
		}
	}

	/**
	 * Maps the GetStatisticsLeaderboard operation to a typed request wrapper.
	 */
	export class GetStatisticsLeaderboardOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetStatisticsLeaderboardRequestData> {
		protected override operationCode: string = OperationCode.GetStatisticsLeaderboard;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetStatisticsLeaderboardOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetStatisticsLeaderboardRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerGetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetStatisticsLeaderboardRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminGetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetStatisticsLeaderboardRequestData;
		}
	}

	/**
	 * Maps the GetTag operation to a typed request wrapper.
	 */
	export class GetTagOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetTagRequestData> {
		protected override operationCode: string = OperationCode.GetTag;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetTagOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetTagRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerGetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetTagRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminGetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetTagRequestData;
		}
	}

	/**
	 * Maps the GetTsCreate operation to a typed request wrapper.
	 */
	export class GetTsCreateOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetTsCreateRequestData> {
		protected override operationCode: string = OperationCode.GetTsCreate;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetTsCreateOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetTsCreateRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerGetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetTsCreateRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminGetTsCreateRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetTsCreateRequestData;
		}
	}

	/**
	 * Maps the GetTsLastLogin operation to a typed request wrapper.
	 */
	export class GetTsLastLoginOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetTsLastLoginRequestData> {
		protected override operationCode: string = OperationCode.GetTsLastLogin;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetTsLastLoginOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetTsLastLoginRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerGetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetTsLastLoginRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminGetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetTsLastLoginRequestData;
		}
	}

	/**
	 * Maps the LinkAccount operation to a typed request wrapper.
	 */
	export class LinkAccountOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkAccountRequestData> {
		protected override operationCode: string = OperationCode.LinkAccount;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LinkAccountOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.LinkAccountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkAccountRequestData;
		}
	}

	/**
	 * Maps the ServerLinkAccount operation to a typed request wrapper.
	 */
	export class ServerLinkAccountOperationRequest extends LinkAccountOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerLinkAccountOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerLinkAccountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkAccountRequestData;
		}
	}

	/**
	 * Maps the AdminLinkAccount operation to a typed request wrapper.
	 */
	export class AdminLinkAccountOperationRequest extends LinkAccountOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminLinkAccountOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminLinkAccountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkAccountRequestData;
		}
	}

	/**
	 * Maps the LinkAndroidDeviceId operation to a typed request wrapper.
	 */
	export class LinkAndroidDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkAndroidDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LinkAndroidDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LinkAndroidDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.LinkAndroidDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkAndroidDeviceIdRequestData;
		}
	}

	/**
	 * Maps the ServerLinkAndroidDeviceId operation to a typed request wrapper.
	 */
	export class ServerLinkAndroidDeviceIdOperationRequest extends LinkAndroidDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerLinkAndroidDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerLinkAndroidDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkAndroidDeviceIdRequestData;
		}
	}

	/**
	 * Maps the AdminLinkAndroidDeviceId operation to a typed request wrapper.
	 */
	export class AdminLinkAndroidDeviceIdOperationRequest extends LinkAndroidDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminLinkAndroidDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminLinkAndroidDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkAndroidDeviceIdRequestData;
		}
	}

	/**
	 * Maps the LinkApple operation to a typed request wrapper.
	 */
	export class LinkAppleOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkAppleRequestData> {
		protected override operationCode: string = OperationCode.LinkApple;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LinkAppleOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.LinkAppleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkAppleRequestData;
		}
	}

	/**
	 * Maps the ServerLinkApple operation to a typed request wrapper.
	 */
	export class ServerLinkAppleOperationRequest extends LinkAppleOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerLinkAppleOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerLinkAppleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkAppleRequestData;
		}
	}

	/**
	 * Maps the AdminLinkApple operation to a typed request wrapper.
	 */
	export class AdminLinkAppleOperationRequest extends LinkAppleOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminLinkAppleOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminLinkAppleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkAppleRequestData;
		}
	}

	/**
	 * Maps the LinkCustomDeviceId operation to a typed request wrapper.
	 */
	export class LinkCustomDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkCustomDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LinkCustomDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LinkCustomDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.LinkCustomDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkCustomDeviceIdRequestData;
		}
	}

	/**
	 * Maps the ServerLinkCustomDeviceId operation to a typed request wrapper.
	 */
	export class ServerLinkCustomDeviceIdOperationRequest extends LinkCustomDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerLinkCustomDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerLinkCustomDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkCustomDeviceIdRequestData;
		}
	}

	/**
	 * Maps the AdminLinkCustomDeviceId operation to a typed request wrapper.
	 */
	export class AdminLinkCustomDeviceIdOperationRequest extends LinkCustomDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminLinkCustomDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminLinkCustomDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkCustomDeviceIdRequestData;
		}
	}

	/**
	 * Maps the LinkCustomId operation to a typed request wrapper.
	 */
	export class LinkCustomIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkCustomIdRequestData> {
		protected override operationCode: string = OperationCode.LinkCustomId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LinkCustomIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.LinkCustomIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkCustomIdRequestData;
		}
	}

	/**
	 * Maps the ServerLinkCustomId operation to a typed request wrapper.
	 */
	export class ServerLinkCustomIdOperationRequest extends LinkCustomIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerLinkCustomIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerLinkCustomIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkCustomIdRequestData;
		}
	}

	/**
	 * Maps the AdminLinkCustomId operation to a typed request wrapper.
	 */
	export class AdminLinkCustomIdOperationRequest extends LinkCustomIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminLinkCustomIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminLinkCustomIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkCustomIdRequestData;
		}
	}

	/**
	 * Maps the LinkEditorDeviceId operation to a typed request wrapper.
	 */
	export class LinkEditorDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkEditorDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LinkEditorDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LinkEditorDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.LinkEditorDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkEditorDeviceIdRequestData;
		}
	}

	/**
	 * Maps the ServerLinkEditorDeviceId operation to a typed request wrapper.
	 */
	export class ServerLinkEditorDeviceIdOperationRequest extends LinkEditorDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerLinkEditorDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerLinkEditorDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkEditorDeviceIdRequestData;
		}
	}

	/**
	 * Maps the AdminLinkEditorDeviceId operation to a typed request wrapper.
	 */
	export class AdminLinkEditorDeviceIdOperationRequest extends LinkEditorDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminLinkEditorDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminLinkEditorDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkEditorDeviceIdRequestData;
		}
	}

	/**
	 * Maps the LinkFacebook operation to a typed request wrapper.
	 */
	export class LinkFacebookOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkFacebookRequestData> {
		protected override operationCode: string = OperationCode.LinkFacebook;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LinkFacebookOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.LinkFacebookRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkFacebookRequestData;
		}
	}

	/**
	 * Maps the ServerLinkFacebook operation to a typed request wrapper.
	 */
	export class ServerLinkFacebookOperationRequest extends LinkFacebookOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerLinkFacebookOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerLinkFacebookRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkFacebookRequestData;
		}
	}

	/**
	 * Maps the AdminLinkFacebook operation to a typed request wrapper.
	 */
	export class AdminLinkFacebookOperationRequest extends LinkFacebookOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminLinkFacebookOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminLinkFacebookRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkFacebookRequestData;
		}
	}

	/**
	 * Maps the LinkGenericService operation to a typed request wrapper.
	 */
	export class LinkGenericServiceOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkGenericServiceRequestData> {
		protected override operationCode: string = OperationCode.LinkGenericService;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LinkGenericServiceOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.LinkGenericServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkGenericServiceRequestData;
		}
	}

	/**
	 * Maps the ServerLinkGenericService operation to a typed request wrapper.
	 */
	export class ServerLinkGenericServiceOperationRequest extends LinkGenericServiceOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerLinkGenericServiceOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerLinkGenericServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkGenericServiceRequestData;
		}
	}

	/**
	 * Maps the AdminLinkGenericService operation to a typed request wrapper.
	 */
	export class AdminLinkGenericServiceOperationRequest extends LinkGenericServiceOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminLinkGenericServiceOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminLinkGenericServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkGenericServiceRequestData;
		}
	}

	/**
	 * Maps the LinkGoogle operation to a typed request wrapper.
	 */
	export class LinkGoogleOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkGoogleRequestData> {
		protected override operationCode: string = OperationCode.LinkGoogle;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LinkGoogleOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.LinkGoogleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkGoogleRequestData;
		}
	}

	/**
	 * Maps the ServerLinkGoogle operation to a typed request wrapper.
	 */
	export class ServerLinkGoogleOperationRequest extends LinkGoogleOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerLinkGoogleOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerLinkGoogleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkGoogleRequestData;
		}
	}

	/**
	 * Maps the AdminLinkGoogle operation to a typed request wrapper.
	 */
	export class AdminLinkGoogleOperationRequest extends LinkGoogleOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminLinkGoogleOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminLinkGoogleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkGoogleRequestData;
		}
	}

	/**
	 * Maps the LinkGooglePlayGameService operation to a typed request wrapper.
	 */
	export class LinkGooglePlayGameServiceOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkGooglePlayGameServiceRequestData> {
		protected override operationCode: string = OperationCode.LinkGooglePlayGameService;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LinkGooglePlayGameServiceOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.LinkGooglePlayGameServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkGooglePlayGameServiceRequestData;
		}
	}

	/**
	 * Maps the ServerLinkGooglePlayGameService operation to a typed request wrapper.
	 */
	export class ServerLinkGooglePlayGameServiceOperationRequest extends LinkGooglePlayGameServiceOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerLinkGooglePlayGameServiceOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerLinkGooglePlayGameServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkGooglePlayGameServiceRequestData;
		}
	}

	/**
	 * Maps the AdminLinkGooglePlayGameService operation to a typed request wrapper.
	 */
	export class AdminLinkGooglePlayGameServiceOperationRequest extends LinkGooglePlayGameServiceOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminLinkGooglePlayGameServiceOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminLinkGooglePlayGameServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkGooglePlayGameServiceRequestData;
		}
	}

	/**
	 * Maps the LinkGameCenter operation to a typed request wrapper.
	 */
	export class LinkGameCenterOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkGameCenterRequestData> {
		protected override operationCode: string = OperationCode.LinkGameCenter;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LinkGameCenterOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.LinkGameCenterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkGameCenterRequestData;
		}
	}

	/**
	 * Maps the ServerLinkGameCenter operation to a typed request wrapper.
	 */
	export class ServerLinkGameCenterOperationRequest extends LinkGameCenterOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerLinkGameCenterOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerLinkGameCenterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkGameCenterRequestData;
		}
	}

	/**
	 * Maps the AdminLinkGameCenter operation to a typed request wrapper.
	 */
	export class AdminLinkGameCenterOperationRequest extends LinkGameCenterOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminLinkGameCenterOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminLinkGameCenterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkGameCenterRequestData;
		}
	}

	/**
	 * Maps the LinkiOSDeviceId operation to a typed request wrapper.
	 */
	export class LinkiOSDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkiOSDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LinkiOSDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LinkiOSDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.LinkiOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkiOSDeviceIdRequestData;
		}
	}

	/**
	 * Maps the ServerLinkiOSDeviceId operation to a typed request wrapper.
	 */
	export class ServerLinkiOSDeviceIdOperationRequest extends LinkiOSDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerLinkiOSDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerLinkiOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkiOSDeviceIdRequestData;
		}
	}

	/**
	 * Maps the AdminLinkiOSDeviceId operation to a typed request wrapper.
	 */
	export class AdminLinkiOSDeviceIdOperationRequest extends LinkiOSDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminLinkiOSDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminLinkiOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkiOSDeviceIdRequestData;
		}
	}

	/**
	 * Maps the LinkLinuxDeviceId operation to a typed request wrapper.
	 */
	export class LinkLinuxDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkLinuxDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LinkLinuxDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LinkLinuxDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.LinkLinuxDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkLinuxDeviceIdRequestData;
		}
	}

	/**
	 * Maps the ServerLinkLinuxDeviceId operation to a typed request wrapper.
	 */
	export class ServerLinkLinuxDeviceIdOperationRequest extends LinkLinuxDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerLinkLinuxDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerLinkLinuxDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkLinuxDeviceIdRequestData;
		}
	}

	/**
	 * Maps the AdminLinkLinuxDeviceId operation to a typed request wrapper.
	 */
	export class AdminLinkLinuxDeviceIdOperationRequest extends LinkLinuxDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminLinkLinuxDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminLinkLinuxDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkLinuxDeviceIdRequestData;
		}
	}

	/**
	 * Maps the LinkMacOSDeviceId operation to a typed request wrapper.
	 */
	export class LinkMacOSDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkMacOSDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LinkMacOSDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LinkMacOSDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.LinkMacOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkMacOSDeviceIdRequestData;
		}
	}

	/**
	 * Maps the ServerLinkMacOSDeviceId operation to a typed request wrapper.
	 */
	export class ServerLinkMacOSDeviceIdOperationRequest extends LinkMacOSDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerLinkMacOSDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerLinkMacOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkMacOSDeviceIdRequestData;
		}
	}

	/**
	 * Maps the AdminLinkMacOSDeviceId operation to a typed request wrapper.
	 */
	export class AdminLinkMacOSDeviceIdOperationRequest extends LinkMacOSDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminLinkMacOSDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminLinkMacOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkMacOSDeviceIdRequestData;
		}
	}

	/**
	 * Maps the LinkWindowsDeviceId operation to a typed request wrapper.
	 */
	export class LinkWindowsDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkWindowsDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LinkWindowsDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LinkWindowsDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.LinkWindowsDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkWindowsDeviceIdRequestData;
		}
	}

	/**
	 * Maps the ServerLinkWindowsDeviceId operation to a typed request wrapper.
	 */
	export class ServerLinkWindowsDeviceIdOperationRequest extends LinkWindowsDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerLinkWindowsDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerLinkWindowsDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkWindowsDeviceIdRequestData;
		}
	}

	/**
	 * Maps the AdminLinkWindowsDeviceId operation to a typed request wrapper.
	 */
	export class AdminLinkWindowsDeviceIdOperationRequest extends LinkWindowsDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminLinkWindowsDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminLinkWindowsDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkWindowsDeviceIdRequestData;
		}
	}

	/**
	 * Maps the LinkWindowsPhoneDeviceId operation to a typed request wrapper.
	 */
	export class LinkWindowsPhoneDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.LinkWindowsPhoneDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LinkWindowsPhoneDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LinkWindowsPhoneDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.LinkWindowsPhoneDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.LinkWindowsPhoneDeviceIdRequestData;
		}
	}

	/**
	 * Maps the ServerLinkWindowsPhoneDeviceId operation to a typed request wrapper.
	 */
	export class ServerLinkWindowsPhoneDeviceIdOperationRequest extends LinkWindowsPhoneDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerLinkWindowsPhoneDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerLinkWindowsPhoneDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerLinkWindowsPhoneDeviceIdRequestData;
		}
	}

	/**
	 * Maps the AdminLinkWindowsPhoneDeviceId operation to a typed request wrapper.
	 */
	export class AdminLinkWindowsPhoneDeviceIdOperationRequest extends LinkWindowsPhoneDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminLinkWindowsPhoneDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminLinkWindowsPhoneDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminLinkWindowsPhoneDeviceIdRequestData;
		}
	}

	/**
	 * Maps the RemoveSegment operation to a typed request wrapper.
	 */
	export class RemoveSegmentOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.RemoveSegmentRequestData> {
		protected override operationCode: string = OperationCode.RemoveSegment;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new RemoveSegmentOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.RemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.RemoveSegmentRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerRemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerRemoveSegmentRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminRemoveSegmentRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminRemoveSegmentRequestData;
		}
	}

	/**
	 * Maps the RemoveTag operation to a typed request wrapper.
	 */
	export class RemoveTagOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.RemoveTagRequestData> {
		protected override operationCode: string = OperationCode.RemoveTag;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new RemoveTagOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.RemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.RemoveTagRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerRemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerRemoveTagRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminRemoveTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminRemoveTagRequestData;
		}
	}

	/**
	 * Maps the ResetAccountPassword operation to a typed request wrapper.
	 */
	export class ResetAccountPasswordOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.ResetAccountPasswordRequestData> {
		protected override operationCode: string = OperationCode.ResetAccountPassword;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new ResetAccountPasswordOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ResetAccountPasswordRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ResetAccountPasswordRequestData;
		}
	}

	/**
	 * Maps the ServerResetAccountPassword operation to a typed request wrapper.
	 */
	export class ServerResetAccountPasswordOperationRequest extends ResetAccountPasswordOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerResetAccountPasswordOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerResetAccountPasswordRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerResetAccountPasswordRequestData;
		}
	}

	/**
	 * Maps the AdminResetAccountPassword operation to a typed request wrapper.
	 */
	export class AdminResetAccountPasswordOperationRequest extends ResetAccountPasswordOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminResetAccountPasswordOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminResetAccountPasswordRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminResetAccountPasswordRequestData;
		}
	}

	/**
	 * Maps the SetAvatar operation to a typed request wrapper.
	 */
	export class SetAvatarOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SetAvatarRequestData> {
		protected override operationCode: string = OperationCode.SetAvatar;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetAvatarOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.SetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.SetAvatarRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerSetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerSetAvatarRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminSetAvatarRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminSetAvatarRequestData;
		}
	}

	/**
	 * Maps the SetCountryCode operation to a typed request wrapper.
	 */
	export class SetCountryCodeOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SetCountryCodeRequestData> {
		protected override operationCode: string = OperationCode.SetCountryCode;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetCountryCodeOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.SetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.SetCountryCodeRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerSetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerSetCountryCodeRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminSetCountryCodeRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminSetCountryCodeRequestData;
		}
	}

	/**
	 * Maps the SetCustomData operation to a typed request wrapper.
	 */
	export class SetCustomDataOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SetCustomDataRequestData> {
		protected override operationCode: string = OperationCode.SetCustomData;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetCustomDataOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.SetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.SetCustomDataRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerSetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerSetCustomDataRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminSetCustomDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminSetCustomDataRequestData;
		}
	}

	/**
	 * Maps the SetDisplayName operation to a typed request wrapper.
	 */
	export class SetDisplayNameOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SetDisplayNameRequestData> {
		protected override operationCode: string = OperationCode.SetDisplayName;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetDisplayNameOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.SetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.SetDisplayNameRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerSetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerSetDisplayNameRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminSetDisplayNameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminSetDisplayNameRequestData;
		}
	}

	/**
	 * Maps the SetEmail operation to a typed request wrapper.
	 */
	export class SetEmailOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SetEmailRequestData> {
		protected override operationCode: string = OperationCode.SetEmail;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetEmailOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.SetEmailRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.SetEmailRequestData;
		}
	}

	/**
	 * Maps the ServerSetEmail operation to a typed request wrapper.
	 */
	export class ServerSetEmailOperationRequest extends SetEmailOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerSetEmailOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerSetEmailRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerSetEmailRequestData;
		}
	}

	/**
	 * Maps the AdminSetEmail operation to a typed request wrapper.
	 */
	export class AdminSetEmailOperationRequest extends SetEmailOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminSetEmailOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminSetEmailRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminSetEmailRequestData;
		}
	}

	/**
	 * Maps the SetPlayerBan operation to a typed request wrapper.
	 */
	export class SetPlayerBanOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SetPlayerBanRequestData> {
		protected override operationCode: string = OperationCode.SetPlayerBan;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetPlayerBanOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.SetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.SetPlayerBanRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerSetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerSetPlayerBanRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminSetPlayerBanRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminSetPlayerBanRequestData;
		}
	}

	/**
	 * Maps the ChangePlayerCurrency operation to a typed request wrapper.
	 */
	export class ChangePlayerCurrencyOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.ChangePlayerCurrencyRequestData> {
		protected override operationCode: string = OperationCode.ChangePlayerCurrency;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new ChangePlayerCurrencyOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ChangePlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ChangePlayerCurrencyRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerChangePlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerChangePlayerCurrencyRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminChangePlayerCurrencyRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminChangePlayerCurrencyRequestData;
		}
	}

	/**
	 * Maps the SetPlayerData operation to a typed request wrapper.
	 */
	export class SetPlayerDataOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SetPlayerDataRequestData> {
		protected override operationCode: string = OperationCode.SetPlayerData;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetPlayerDataOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.SetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.SetPlayerDataRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerSetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerSetPlayerDataRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminSetPlayerDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminSetPlayerDataRequestData;
		}
	}

	/**
	 * Maps the ChangePlayerStatistics operation to a typed request wrapper.
	 */
	export class ChangePlayerStatisticsOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.ChangePlayerStatisticsRequestData> {
		protected override operationCode: string = OperationCode.ChangePlayerStatistics;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new ChangePlayerStatisticsOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ChangePlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ChangePlayerStatisticsRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerChangePlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerChangePlayerStatisticsRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminChangePlayerStatisticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminChangePlayerStatisticsRequestData;
		}
	}

	/**
	 * Maps the SetTag operation to a typed request wrapper.
	 */
	export class SetTagOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SetTagRequestData> {
		protected override operationCode: string = OperationCode.SetTag;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetTagOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.SetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.SetTagRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerSetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerSetTagRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminSetTagRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminSetTagRequestData;
		}
	}

	/**
	 * Maps the SetTsLastLogin operation to a typed request wrapper.
	 */
	export class SetTsLastLoginOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SetTsLastLoginRequestData> {
		protected override operationCode: string = OperationCode.SetTsLastLogin;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SetTsLastLoginOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.SetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.SetTsLastLoginRequestData;
		}
	}

	/**
	 * Maps the ServerSetTsLastLogin operation to a typed request wrapper.
	 */
	export class ServerSetTsLastLoginOperationRequest extends SetTsLastLoginOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerSetTsLastLoginOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerSetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerSetTsLastLoginRequestData;
		}
	}

	/**
	 * Maps the AdminSetTsLastLogin operation to a typed request wrapper.
	 */
	export class AdminSetTsLastLoginOperationRequest extends SetTsLastLoginOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminSetTsLastLoginOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminSetTsLastLoginRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminSetTsLastLoginRequestData;
		}
	}

	/**
	 * Maps the UnlinkAccount operation to a typed request wrapper.
	 */
	export class UnlinkAccountOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkAccountRequestData> {
		protected override operationCode: string = OperationCode.UnlinkAccount;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new UnlinkAccountOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.UnlinkAccountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkAccountRequestData;
		}
	}

	/**
	 * Maps the ServerUnlinkAccount operation to a typed request wrapper.
	 */
	export class ServerUnlinkAccountOperationRequest extends UnlinkAccountOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerUnlinkAccountOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerUnlinkAccountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkAccountRequestData;
		}
	}

	/**
	 * Maps the AdminUnlinkAccount operation to a typed request wrapper.
	 */
	export class AdminUnlinkAccountOperationRequest extends UnlinkAccountOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminUnlinkAccountOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminUnlinkAccountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkAccountRequestData;
		}
	}

	/**
	 * Maps the UnlinkAndroidDeviceId operation to a typed request wrapper.
	 */
	export class UnlinkAndroidDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkAndroidDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.UnlinkAndroidDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new UnlinkAndroidDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.UnlinkAndroidDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkAndroidDeviceIdRequestData;
		}
	}

	/**
	 * Maps the ServerUnlinkAndroidDeviceId operation to a typed request wrapper.
	 */
	export class ServerUnlinkAndroidDeviceIdOperationRequest extends UnlinkAndroidDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerUnlinkAndroidDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerUnlinkAndroidDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkAndroidDeviceIdRequestData;
		}
	}

	/**
	 * Maps the AdminUnlinkAndroidDeviceId operation to a typed request wrapper.
	 */
	export class AdminUnlinkAndroidDeviceIdOperationRequest extends UnlinkAndroidDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminUnlinkAndroidDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminUnlinkAndroidDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkAndroidDeviceIdRequestData;
		}
	}

	/**
	 * Maps the UnlinkApple operation to a typed request wrapper.
	 */
	export class UnlinkAppleOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkAppleRequestData> {
		protected override operationCode: string = OperationCode.UnlinkApple;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new UnlinkAppleOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.UnlinkAppleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkAppleRequestData;
		}
	}

	/**
	 * Maps the ServerUnlinkApple operation to a typed request wrapper.
	 */
	export class ServerUnlinkAppleOperationRequest extends UnlinkAppleOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerUnlinkAppleOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerUnlinkAppleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkAppleRequestData;
		}
	}

	/**
	 * Maps the AdminUnlinkApple operation to a typed request wrapper.
	 */
	export class AdminUnlinkAppleOperationRequest extends UnlinkAppleOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminUnlinkAppleOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminUnlinkAppleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkAppleRequestData;
		}
	}

	/**
	 * Maps the UnlinkCustomDeviceId operation to a typed request wrapper.
	 */
	export class UnlinkCustomDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkCustomDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.UnlinkCustomDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new UnlinkCustomDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.UnlinkCustomDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkCustomDeviceIdRequestData;
		}
	}

	/**
	 * Maps the ServerUnlinkCustomDeviceId operation to a typed request wrapper.
	 */
	export class ServerUnlinkCustomDeviceIdOperationRequest extends UnlinkCustomDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerUnlinkCustomDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerUnlinkCustomDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkCustomDeviceIdRequestData;
		}
	}

	/**
	 * Maps the AdminUnlinkCustomDeviceId operation to a typed request wrapper.
	 */
	export class AdminUnlinkCustomDeviceIdOperationRequest extends UnlinkCustomDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminUnlinkCustomDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminUnlinkCustomDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkCustomDeviceIdRequestData;
		}
	}

	/**
	 * Maps the UnlinkCustomId operation to a typed request wrapper.
	 */
	export class UnlinkCustomIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkCustomIdRequestData> {
		protected override operationCode: string = OperationCode.UnlinkCustomId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new UnlinkCustomIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.UnlinkCustomIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkCustomIdRequestData;
		}
	}

	/**
	 * Maps the ServerUnlinkCustomId operation to a typed request wrapper.
	 */
	export class ServerUnlinkCustomIdOperationRequest extends UnlinkCustomIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerUnlinkCustomIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerUnlinkCustomIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkCustomIdRequestData;
		}
	}

	/**
	 * Maps the AdminUnlinkCustomId operation to a typed request wrapper.
	 */
	export class AdminUnlinkCustomIdOperationRequest extends UnlinkCustomIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminUnlinkCustomIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminUnlinkCustomIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkCustomIdRequestData;
		}
	}

	/**
	 * Maps the UnlinkEditorDeviceId operation to a typed request wrapper.
	 */
	export class UnlinkEditorDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkEditorDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.UnlinkEditorDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new UnlinkEditorDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.UnlinkEditorDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkEditorDeviceIdRequestData;
		}
	}

	/**
	 * Maps the ServerUnlinkEditorDeviceId operation to a typed request wrapper.
	 */
	export class ServerUnlinkEditorDeviceIdOperationRequest extends UnlinkEditorDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerUnlinkEditorDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerUnlinkEditorDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkEditorDeviceIdRequestData;
		}
	}

	/**
	 * Maps the AdminUnlinkEditorDeviceId operation to a typed request wrapper.
	 */
	export class AdminUnlinkEditorDeviceIdOperationRequest extends UnlinkEditorDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminUnlinkEditorDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminUnlinkEditorDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkEditorDeviceIdRequestData;
		}
	}

	/**
	 * Maps the UnlinkFacebook operation to a typed request wrapper.
	 */
	export class UnlinkFacebookOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkFacebookRequestData> {
		protected override operationCode: string = OperationCode.UnlinkFacebook;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new UnlinkFacebookOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.UnlinkFacebookRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkFacebookRequestData;
		}
	}

	/**
	 * Maps the ServerUnlinkFacebook operation to a typed request wrapper.
	 */
	export class ServerUnlinkFacebookOperationRequest extends UnlinkFacebookOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerUnlinkFacebookOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerUnlinkFacebookRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkFacebookRequestData;
		}
	}

	/**
	 * Maps the AdminUnlinkFacebook operation to a typed request wrapper.
	 */
	export class AdminUnlinkFacebookOperationRequest extends UnlinkFacebookOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminUnlinkFacebookOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminUnlinkFacebookRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkFacebookRequestData;
		}
	}

	/**
	 * Maps the UnlinkGenericService operation to a typed request wrapper.
	 */
	export class UnlinkGenericServiceOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkGenericServiceRequestData> {
		protected override operationCode: string = OperationCode.UnlinkGenericService;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new UnlinkGenericServiceOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.UnlinkGenericServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkGenericServiceRequestData;
		}
	}

	/**
	 * Maps the ServerUnlinkGenericService operation to a typed request wrapper.
	 */
	export class ServerUnlinkGenericServiceOperationRequest extends UnlinkGenericServiceOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerUnlinkGenericServiceOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerUnlinkGenericServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkGenericServiceRequestData;
		}
	}

	/**
	 * Maps the AdminUnlinkGenericService operation to a typed request wrapper.
	 */
	export class AdminUnlinkGenericServiceOperationRequest extends UnlinkGenericServiceOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminUnlinkGenericServiceOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminUnlinkGenericServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkGenericServiceRequestData;
		}
	}

	/**
	 * Maps the UnlinkGoogle operation to a typed request wrapper.
	 */
	export class UnlinkGoogleOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkGoogleRequestData> {
		protected override operationCode: string = OperationCode.UnlinkGoogle;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new UnlinkGoogleOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.UnlinkGoogleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkGoogleRequestData;
		}
	}

	/**
	 * Maps the ServerUnlinkGoogle operation to a typed request wrapper.
	 */
	export class ServerUnlinkGoogleOperationRequest extends UnlinkGoogleOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerUnlinkGoogleOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerUnlinkGoogleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkGoogleRequestData;
		}
	}

	/**
	 * Maps the AdminUnlinkGoogle operation to a typed request wrapper.
	 */
	export class AdminUnlinkGoogleOperationRequest extends UnlinkGoogleOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminUnlinkGoogleOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminUnlinkGoogleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkGoogleRequestData;
		}
	}

	/**
	 * Maps the UnlinkGooglePlayGameService operation to a typed request wrapper.
	 */
	export class UnlinkGooglePlayGameServiceOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkGooglePlayGameServiceRequestData> {
		protected override operationCode: string = OperationCode.UnlinkGooglePlayGameService;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new UnlinkGooglePlayGameServiceOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.UnlinkGooglePlayGameServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkGooglePlayGameServiceRequestData;
		}
	}

	/**
	 * Maps the ServerUnlinkGooglePlayGameService operation to a typed request wrapper.
	 */
	export class ServerUnlinkGooglePlayGameServiceOperationRequest extends UnlinkGooglePlayGameServiceOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerUnlinkGooglePlayGameServiceOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerUnlinkGooglePlayGameServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkGooglePlayGameServiceRequestData;
		}
	}

	/**
	 * Maps the AdminUnlinkGooglePlayGameService operation to a typed request wrapper.
	 */
	export class AdminUnlinkGooglePlayGameServiceOperationRequest extends UnlinkGooglePlayGameServiceOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminUnlinkGooglePlayGameServiceOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminUnlinkGooglePlayGameServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkGooglePlayGameServiceRequestData;
		}
	}

	/**
	 * Maps the UnlinkGameCenter operation to a typed request wrapper.
	 */
	export class UnlinkGameCenterOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkGameCenterRequestData> {
		protected override operationCode: string = OperationCode.UnlinkGameCenter;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new UnlinkGameCenterOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.UnlinkGameCenterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkGameCenterRequestData;
		}
	}

	/**
	 * Maps the ServerUnlinkGameCenter operation to a typed request wrapper.
	 */
	export class ServerUnlinkGameCenterOperationRequest extends UnlinkGameCenterOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerUnlinkGameCenterOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerUnlinkGameCenterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkGameCenterRequestData;
		}
	}

	/**
	 * Maps the AdminUnlinkGameCenter operation to a typed request wrapper.
	 */
	export class AdminUnlinkGameCenterOperationRequest extends UnlinkGameCenterOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminUnlinkGameCenterOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminUnlinkGameCenterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkGameCenterRequestData;
		}
	}

	/**
	 * Maps the UnlinkiOSDeviceId operation to a typed request wrapper.
	 */
	export class UnlinkiOSDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkiOSDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.UnlinkiOSDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new UnlinkiOSDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.UnlinkiOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkiOSDeviceIdRequestData;
		}
	}

	/**
	 * Maps the ServerUnlinkiOSDeviceId operation to a typed request wrapper.
	 */
	export class ServerUnlinkiOSDeviceIdOperationRequest extends UnlinkiOSDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerUnlinkiOSDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerUnlinkiOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkiOSDeviceIdRequestData;
		}
	}

	/**
	 * Maps the AdminUnlinkiOSDeviceId operation to a typed request wrapper.
	 */
	export class AdminUnlinkiOSDeviceIdOperationRequest extends UnlinkiOSDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminUnlinkiOSDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminUnlinkiOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkiOSDeviceIdRequestData;
		}
	}

	/**
	 * Maps the UnlinkLinuxDeviceId operation to a typed request wrapper.
	 */
	export class UnlinkLinuxDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkLinuxDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.UnlinkLinuxDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new UnlinkLinuxDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.UnlinkLinuxDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkLinuxDeviceIdRequestData;
		}
	}

	/**
	 * Maps the ServerUnlinkLinuxDeviceId operation to a typed request wrapper.
	 */
	export class ServerUnlinkLinuxDeviceIdOperationRequest extends UnlinkLinuxDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerUnlinkLinuxDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerUnlinkLinuxDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkLinuxDeviceIdRequestData;
		}
	}

	/**
	 * Maps the AdminUnlinkLinuxDeviceId operation to a typed request wrapper.
	 */
	export class AdminUnlinkLinuxDeviceIdOperationRequest extends UnlinkLinuxDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminUnlinkLinuxDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminUnlinkLinuxDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkLinuxDeviceIdRequestData;
		}
	}

	/**
	 * Maps the UnlinkMacOSDeviceId operation to a typed request wrapper.
	 */
	export class UnlinkMacOSDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkMacOSDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.UnlinkMacOSDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new UnlinkMacOSDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.UnlinkMacOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkMacOSDeviceIdRequestData;
		}
	}

	/**
	 * Maps the ServerUnlinkMacOSDeviceId operation to a typed request wrapper.
	 */
	export class ServerUnlinkMacOSDeviceIdOperationRequest extends UnlinkMacOSDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerUnlinkMacOSDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerUnlinkMacOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkMacOSDeviceIdRequestData;
		}
	}

	/**
	 * Maps the AdminUnlinkMacOSDeviceId operation to a typed request wrapper.
	 */
	export class AdminUnlinkMacOSDeviceIdOperationRequest extends UnlinkMacOSDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminUnlinkMacOSDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminUnlinkMacOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkMacOSDeviceIdRequestData;
		}
	}

	/**
	 * Maps the UnlinkWindowsDeviceId operation to a typed request wrapper.
	 */
	export class UnlinkWindowsDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkWindowsDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.UnlinkWindowsDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new UnlinkWindowsDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.UnlinkWindowsDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkWindowsDeviceIdRequestData;
		}
	}

	/**
	 * Maps the ServerUnlinkWindowsDeviceId operation to a typed request wrapper.
	 */
	export class ServerUnlinkWindowsDeviceIdOperationRequest extends UnlinkWindowsDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerUnlinkWindowsDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerUnlinkWindowsDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkWindowsDeviceIdRequestData;
		}
	}

	/**
	 * Maps the AdminUnlinkWindowsDeviceId operation to a typed request wrapper.
	 */
	export class AdminUnlinkWindowsDeviceIdOperationRequest extends UnlinkWindowsDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminUnlinkWindowsDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminUnlinkWindowsDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkWindowsDeviceIdRequestData;
		}
	}

	/**
	 * Maps the UnlinkWindowsPhoneDeviceId operation to a typed request wrapper.
	 */
	export class UnlinkWindowsPhoneDeviceIdOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.UnlinkWindowsPhoneDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.UnlinkWindowsPhoneDeviceId;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new UnlinkWindowsPhoneDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.UnlinkWindowsPhoneDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.UnlinkWindowsPhoneDeviceIdRequestData;
		}
	}

	/**
	 * Maps the ServerUnlinkWindowsPhoneDeviceId operation to a typed request wrapper.
	 */
	export class ServerUnlinkWindowsPhoneDeviceIdOperationRequest extends UnlinkWindowsPhoneDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerUnlinkWindowsPhoneDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerUnlinkWindowsPhoneDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerUnlinkWindowsPhoneDeviceIdRequestData;
		}
	}

	/**
	 * Maps the AdminUnlinkWindowsPhoneDeviceId operation to a typed request wrapper.
	 */
	export class AdminUnlinkWindowsPhoneDeviceIdOperationRequest extends UnlinkWindowsPhoneDeviceIdOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminUnlinkWindowsPhoneDeviceIdOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminUnlinkWindowsPhoneDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminUnlinkWindowsPhoneDeviceIdRequestData;
		}
	}

	/**
	 * Maps the GetCurrencyLeaderboard operation to a typed request wrapper.
	 */
	export class GetCurrencyLeaderboardOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetCurrencyLeaderboardRequestData> {
		protected override operationCode: string = OperationCode.GetCurrencyLeaderboard;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetCurrencyLeaderboardOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetCurrencyLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetCurrencyLeaderboardRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerGetCurrencyLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetCurrencyLeaderboardRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminGetCurrencyLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetCurrencyLeaderboardRequestData;
		}
	}

	/**
	 * Maps the GetCreateLeaderboard operation to a typed request wrapper.
	 */
	export class GetCreateLeaderboardOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetCreateLeaderboardRequestData> {
		protected override operationCode: string = OperationCode.GetCreateLeaderboard;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetCreateLeaderboardOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetCreateLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetCreateLeaderboardRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerGetCreateLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetCreateLeaderboardRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminGetCreateLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetCreateLeaderboardRequestData;
		}
	}

	/**
	 * Maps the GetLastLoginLeaderboard operation to a typed request wrapper.
	 */
	export class GetLastLoginLeaderboardOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetLastLoginLeaderboardRequestData> {
		protected override operationCode: string = OperationCode.GetLastLoginLeaderboard;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetLastLoginLeaderboardOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetLastLoginLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetLastLoginLeaderboardRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerGetLastLoginLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetLastLoginLeaderboardRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminGetLastLoginLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetLastLoginLeaderboardRequestData;
		}
	}

	/**
	 * Maps the GetStatisticsLog operation to a typed request wrapper.
	 */
	export class GetStatisticsLogOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetStatisticsLogRequestData> {
		protected override operationCode: string = OperationCode.GetStatisticsLog;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetStatisticsLogOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetStatisticsLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetStatisticsLogRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerGetStatisticsLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetStatisticsLogRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminGetStatisticsLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetStatisticsLogRequestData;
		}
	}

	/**
	 * Maps the GetCurrencyLog operation to a typed request wrapper.
	 */
	export class GetCurrencyLogOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetCurrencyLogRequestData> {
		protected override operationCode: string = OperationCode.GetCurrencyLog;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetCurrencyLogOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetCurrencyLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetCurrencyLogRequestData;
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
		constructor(requestData: MasterPlayerModels.ServerGetCurrencyLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetCurrencyLogRequestData;
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
		constructor(requestData: MasterPlayerModels.AdminGetCurrencyLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetCurrencyLogRequestData;
		}
	}

	/**
	 * Maps the SendSocketOperationEvent operation to a typed request wrapper.
	 */
	export class SendSocketOperationEventOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SendSocketOperationEventRequestData> {
		protected override operationCode: string = OperationCode.SendSocketOperationEvent;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SendSocketOperationEventOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.SendSocketOperationEventRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.SendSocketOperationEventRequestData;
		}
	}

	/**
	 * Maps the ServerSendSocketOperationEvent operation to a typed request wrapper.
	 */
	export class ServerSendSocketOperationEventOperationRequest extends SendSocketOperationEventOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerSendSocketOperationEventOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerSendSocketOperationEventRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerSendSocketOperationEventRequestData;
		}
	}

	/**
	 * Maps the AdminSendSocketOperationEvent operation to a typed request wrapper.
	 */
	export class AdminSendSocketOperationEventOperationRequest extends SendSocketOperationEventOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminSendSocketOperationEventOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminSendSocketOperationEventRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminSendSocketOperationEventRequestData;
		}
	}

	/**
	 * Maps the SendEmail operation to a typed request wrapper.
	 */
	export class SendEmailOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SendEmailRequestData> {
		protected override operationCode: string = OperationCode.SendEmail;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SendEmailOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.SendEmailRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.SendEmailRequestData;
		}
	}

	/**
	 * Maps the ServerSendEmail operation to a typed request wrapper.
	 */
	export class ServerSendEmailOperationRequest extends SendEmailOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerSendEmailOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerSendEmailRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerSendEmailRequestData;
		}
	}

	/**
	 * Maps the AdminSendEmail operation to a typed request wrapper.
	 */
	export class AdminSendEmailOperationRequest extends SendEmailOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminSendEmailOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminSendEmailRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminSendEmailRequestData;
		}
	}

	/**
	 * Maps the AddPushNotification operation to a typed request wrapper.
	 */
	export class AddPushNotificationOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.AddPushNotificationRequestData> {
		protected override operationCode: string = OperationCode.AddPushNotification;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new AddPushNotificationOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AddPushNotificationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AddPushNotificationRequestData;
		}
	}

	/**
	 * Maps the ServerAddPushNotification operation to a typed request wrapper.
	 */
	export class ServerAddPushNotificationOperationRequest extends AddPushNotificationOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerAddPushNotificationOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerAddPushNotificationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerAddPushNotificationRequestData;
		}
	}

	/**
	 * Maps the AdminAddPushNotification operation to a typed request wrapper.
	 */
	export class AdminAddPushNotificationOperationRequest extends AddPushNotificationOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminAddPushNotificationOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminAddPushNotificationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminAddPushNotificationRequestData;
		}
	}

	/**
	 * Maps the RemovePushNotification operation to a typed request wrapper.
	 */
	export class RemovePushNotificationOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.RemovePushNotificationRequestData> {
		protected override operationCode: string = OperationCode.RemovePushNotification;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new RemovePushNotificationOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.RemovePushNotificationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.RemovePushNotificationRequestData;
		}
	}

	/**
	 * Maps the ServerRemovePushNotification operation to a typed request wrapper.
	 */
	export class ServerRemovePushNotificationOperationRequest extends RemovePushNotificationOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerRemovePushNotificationOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerRemovePushNotificationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerRemovePushNotificationRequestData;
		}
	}

	/**
	 * Maps the AdminRemovePushNotification operation to a typed request wrapper.
	 */
	export class AdminRemovePushNotificationOperationRequest extends RemovePushNotificationOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminRemovePushNotificationOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminRemovePushNotificationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminRemovePushNotificationRequestData;
		}
	}

	/**
	 * Maps the GetPushNotification operation to a typed request wrapper.
	 */
	export class GetPushNotificationOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.GetPushNotificationRequestData> {
		protected override operationCode: string = OperationCode.GetPushNotification;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new GetPushNotificationOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.GetPushNotificationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.GetPushNotificationRequestData;
		}
	}

	/**
	 * Maps the ServerGetPushNotification operation to a typed request wrapper.
	 */
	export class ServerGetPushNotificationOperationRequest extends GetPushNotificationOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerGetPushNotificationOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerGetPushNotificationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerGetPushNotificationRequestData;
		}
	}

	/**
	 * Maps the AdminGetPushNotification operation to a typed request wrapper.
	 */
	export class AdminGetPushNotificationOperationRequest extends GetPushNotificationOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminGetPushNotificationOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminGetPushNotificationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminGetPushNotificationRequestData;
		}
	}

	/**
	 * Maps the SendPushNotification operation to a typed request wrapper.
	 */
	export class SendPushNotificationOperationRequest extends CustomOperationRequestAbstract<MasterPlayerModels.SendPushNotificationRequestData> {
		protected override operationCode: string = OperationCode.SendPushNotification;
		protected override requestType: RequestType = RequestType.MasterPlayer;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new SendPushNotificationOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.SendPushNotificationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.SendPushNotificationRequestData;
		}
	}

	/**
	 * Maps the ServerSendPushNotification operation to a typed request wrapper.
	 */
	export class ServerSendPushNotificationOperationRequest extends SendPushNotificationOperationRequest {
		protected override role: RequestRole = RequestRole.Server;

		/**
		 * Creates a new ServerSendPushNotificationOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.ServerSendPushNotificationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.ServerSendPushNotificationRequestData;
		}
	}

	/**
	 * Maps the AdminSendPushNotification operation to a typed request wrapper.
	 */
	export class AdminSendPushNotificationOperationRequest extends SendPushNotificationOperationRequest {
		protected override role: RequestRole = RequestRole.Admin;

		/**
		 * Creates a new AdminSendPushNotificationOperationRequest instance.
		 */
		constructor(requestData: MasterPlayerModels.AdminSendPushNotificationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = MasterPlayerModels.AdminSendPushNotificationRequestData;
		}
	}

}
