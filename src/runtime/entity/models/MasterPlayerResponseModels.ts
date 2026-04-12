import { CustomOperationResponseAbstract } from "./../response/CustomOperationResponse";
import { MasterPlayerModels } from "./MasterPlayerModels";

/**
 * Groups typed operation-response wrappers for `RequestType.MasterPlayer`.
 * Many read operations resolve to `MasterPlayerResponseData` or a derived envelope whose
 * `infoResponseParameters` content is controlled by the matching request model.
 */
export namespace MasterPlayerResponseModels {
	/**
	 * Maps the AddSegment operation to a typed response wrapper.
	 */
	export class AddSegmentOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.EmptyResponseData> {

		/**
		 * Creates a new AddSegmentOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the ChangeAccountPassword operation to a typed response wrapper.
	 */
	export class ChangeAccountPasswordOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.EmptyResponseData> {

		/**
		 * Creates a new ChangeAccountPasswordOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the GetAvatar operation to a typed response wrapper.
	 */
	export class GetAvatarOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new GetAvatarOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the GetCountryCode operation to a typed response wrapper.
	 */
	export class GetCountryCodeOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new GetCountryCodeOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the GetCustomData operation to a typed response wrapper.
	 */
	export class GetCustomDataOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new GetCustomDataOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the GetDisplayName operation to a typed response wrapper.
	 */
	export class GetDisplayNameOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new GetDisplayNameOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the GetEmail operation to a typed response wrapper.
	 */
	export class GetEmailOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new GetEmailOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the GetExternal operation to a typed response wrapper.
	 */
	export class GetExternalOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new GetExternalOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the GetIpAddressCreate operation to a typed response wrapper.
	 */
	export class GetIpAddressCreateOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new GetIpAddressCreateOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the GetPlayerBan operation to a typed response wrapper.
	 */
	export class GetPlayerBanOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new GetPlayerBanOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the GetPlayerCurrency operation to a typed response wrapper.
	 */
	export class GetPlayerCurrencyOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new GetPlayerCurrencyOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the GetPlayerData operation to a typed response wrapper.
	 */
	export class GetPlayerDataOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new GetPlayerDataOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the GetPlayerInformation operation to a typed response wrapper.
	 */
	export class GetPlayerInformationOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new GetPlayerInformationOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the GetPlayerStatistics operation to a typed response wrapper.
	 */
	export class GetPlayerStatisticsOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new GetPlayerStatisticsOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the GetPlayersWithApple operation to a typed response wrapper.
	 */
	export class GetPlayersWithAppleOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.GetPlayersWithAppleResponseData> {

		/**
		 * Creates a new GetPlayersWithAppleOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.GetPlayersWithAppleResponseData;
		}
	}

	/**
	 * Maps the GetPlayersWithDisplayName operation to a typed response wrapper.
	 */
	export class GetPlayersWithDisplayNameOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayersWithUserIdResponseData> {

		/**
		 * Creates a new GetPlayersWithDisplayNameOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayersWithUserIdResponseData;
		}
	}

	/**
	 * Maps the GetPlayersWithFacebook operation to a typed response wrapper.
	 */
	export class GetPlayersWithFacebookOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.GetPlayersWithFacebookResponseData> {

		/**
		 * Creates a new GetPlayersWithFacebookOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.GetPlayersWithFacebookResponseData;
		}
	}

	/**
	 * Maps the GetPlayersWithGenericService operation to a typed response wrapper.
	 */
	export class GetPlayersWithGenericServiceOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.GetPlayersWithGenericServiceResponseData> {

		/**
		 * Creates a new GetPlayersWithGenericServiceOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.GetPlayersWithGenericServiceResponseData;
		}
	}

	/**
	 * Maps the GetPlayersWithGoogle operation to a typed response wrapper.
	 */
	export class GetPlayersWithGoogleOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.GetPlayersWithGoogleResponseData> {

		/**
		 * Creates a new GetPlayersWithGoogleOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.GetPlayersWithGoogleResponseData;
		}
	}

	/**
	 * Maps the GetPlayersWithGooglePlayGameService operation to a typed response wrapper.
	 */
	export class GetPlayersWithGooglePlayGameServiceOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.GetPlayersWithGooglePlayGameServiceResponseData> {

		/**
		 * Creates a new GetPlayersWithGooglePlayGameServiceOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.GetPlayersWithGooglePlayGameServiceResponseData;
		}
	}

	/**
	 * Maps the GetPlayersWithGameCenter operation to a typed response wrapper.
	 */
	export class GetPlayersWithGameCenterOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.GetPlayersWithGameCenterResponseData> {

		/**
		 * Creates a new GetPlayersWithGameCenterOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.GetPlayersWithGameCenterResponseData;
		}
	}

	/**
	 * Maps the GetPlayersWithSegment operation to a typed response wrapper.
	 */
	export class GetPlayersWithSegmentOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayersWithUserIdResponseData> {

		/**
		 * Creates a new GetPlayersWithSegmentOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayersWithUserIdResponseData;
		}
	}

	/**
	 * Maps the GetPlayersWithTag operation to a typed response wrapper.
	 */
	export class GetPlayersWithTagOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayersWithUserIdResponseData> {

		/**
		 * Creates a new GetPlayersWithTagOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayersWithUserIdResponseData;
		}
	}

	/**
	 * Maps the GetSegment operation to a typed response wrapper.
	 */
	export class GetSegmentOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new GetSegmentOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the GetStatisticsLeaderboardAroundPlayer operation to a typed response wrapper.
	 */
	export class GetStatisticsLeaderboardAroundPlayerOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.GetStatisticsLeaderboardResponseData> {

		/**
		 * Creates a new GetStatisticsLeaderboardAroundPlayerOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.GetStatisticsLeaderboardResponseData;
		}
	}

	/**
	 * Maps the GetStatisticsLeaderboard operation to a typed response wrapper.
	 */
	export class GetStatisticsLeaderboardOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.GetStatisticsLeaderboardResponseData> {

		/**
		 * Creates a new GetStatisticsLeaderboardOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.GetStatisticsLeaderboardResponseData;
		}
	}

	/**
	 * Maps the GetTag operation to a typed response wrapper.
	 */
	export class GetTagOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new GetTagOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the GetTsCreate operation to a typed response wrapper.
	 */
	export class GetTsCreateOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new GetTsCreateOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the GetTsLastLogin operation to a typed response wrapper.
	 */
	export class GetTsLastLoginOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new GetTsLastLoginOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the LinkAccount operation to a typed response wrapper.
	 */
	export class LinkAccountOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new LinkAccountOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the LinkAndroidDeviceId operation to a typed response wrapper.
	 */
	export class LinkAndroidDeviceIdOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new LinkAndroidDeviceIdOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the LinkApple operation to a typed response wrapper.
	 */
	export class LinkAppleOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new LinkAppleOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the LinkCustomDeviceId operation to a typed response wrapper.
	 */
	export class LinkCustomDeviceIdOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new LinkCustomDeviceIdOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the LinkCustomId operation to a typed response wrapper.
	 */
	export class LinkCustomIdOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new LinkCustomIdOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the LinkEditorDeviceId operation to a typed response wrapper.
	 */
	export class LinkEditorDeviceIdOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new LinkEditorDeviceIdOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the LinkFacebook operation to a typed response wrapper.
	 */
	export class LinkFacebookOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new LinkFacebookOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the LinkGenericService operation to a typed response wrapper.
	 */
	export class LinkGenericServiceOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.GenericServiceMasterPlayerResponseData> {

		/**
		 * Creates a new LinkGenericServiceOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.GenericServiceMasterPlayerResponseData;
		}
	}

	/**
	 * Maps the LinkGoogle operation to a typed response wrapper.
	 */
	export class LinkGoogleOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new LinkGoogleOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the LinkGooglePlayGameService operation to a typed response wrapper.
	 */
	export class LinkGooglePlayGameServiceOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new LinkGooglePlayGameServiceOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the LinkGameCenter operation to a typed response wrapper.
	 */
	export class LinkGameCenterOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new LinkGameCenterOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the LinkiOSDeviceId operation to a typed response wrapper.
	 */
	export class LinkiOSDeviceIdOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new LinkiOSDeviceIdOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the LinkLinuxDeviceId operation to a typed response wrapper.
	 */
	export class LinkLinuxDeviceIdOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new LinkLinuxDeviceIdOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the LinkMacOSDeviceId operation to a typed response wrapper.
	 */
	export class LinkMacOSDeviceIdOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new LinkMacOSDeviceIdOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the LinkWindowsDeviceId operation to a typed response wrapper.
	 */
	export class LinkWindowsDeviceIdOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new LinkWindowsDeviceIdOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the LinkWindowsPhoneDeviceId operation to a typed response wrapper.
	 */
	export class LinkWindowsPhoneDeviceIdOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new LinkWindowsPhoneDeviceIdOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the RemoveSegment operation to a typed response wrapper.
	 */
	export class RemoveSegmentOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.EmptyResponseData> {

		/**
		 * Creates a new RemoveSegmentOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the RemoveTag operation to a typed response wrapper.
	 */
	export class RemoveTagOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.EmptyResponseData> {

		/**
		 * Creates a new RemoveTagOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the ResetAccountPassword operation to a typed response wrapper.
	 */
	export class ResetAccountPasswordOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.EmptyResponseData> {

		/**
		 * Creates a new ResetAccountPasswordOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the SetAvatar operation to a typed response wrapper.
	 */
	export class SetAvatarOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.EmptyResponseData> {

		/**
		 * Creates a new SetAvatarOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the SetCountryCode operation to a typed response wrapper.
	 */
	export class SetCountryCodeOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.EmptyResponseData> {

		/**
		 * Creates a new SetCountryCodeOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the SetCustomData operation to a typed response wrapper.
	 */
	export class SetCustomDataOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new SetCustomDataOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the SetDisplayName operation to a typed response wrapper.
	 */
	export class SetDisplayNameOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.EmptyResponseData> {

		/**
		 * Creates a new SetDisplayNameOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the SetEmail operation to a typed response wrapper.
	 */
	export class SetEmailOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.EmptyResponseData> {

		/**
		 * Creates a new SetEmailOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the SetPlayerBan operation to a typed response wrapper.
	 */
	export class SetPlayerBanOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.EmptyResponseData> {

		/**
		 * Creates a new SetPlayerBanOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the ChangePlayerCurrency operation to a typed response wrapper.
	 */
	export class ChangePlayerCurrencyOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new ChangePlayerCurrencyOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the SetPlayerData operation to a typed response wrapper.
	 */
	export class SetPlayerDataOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new SetPlayerDataOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the ChangePlayerStatistics operation to a typed response wrapper.
	 */
	export class ChangePlayerStatisticsOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new ChangePlayerStatisticsOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the SetTag operation to a typed response wrapper.
	 */
	export class SetTagOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.EmptyResponseData> {

		/**
		 * Creates a new SetTagOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the SetTsLastLogin operation to a typed response wrapper.
	 */
	export class SetTsLastLoginOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.EmptyResponseData> {

		/**
		 * Creates a new SetTsLastLoginOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the UnlinkAccount operation to a typed response wrapper.
	 */
	export class UnlinkAccountOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.EmptyResponseData> {

		/**
		 * Creates a new UnlinkAccountOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the UnlinkAndroidDeviceId operation to a typed response wrapper.
	 */
	export class UnlinkAndroidDeviceIdOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.EmptyResponseData> {

		/**
		 * Creates a new UnlinkAndroidDeviceIdOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the UnlinkApple operation to a typed response wrapper.
	 */
	export class UnlinkAppleOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.EmptyResponseData> {

		/**
		 * Creates a new UnlinkAppleOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the UnlinkCustomDeviceId operation to a typed response wrapper.
	 */
	export class UnlinkCustomDeviceIdOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.EmptyResponseData> {

		/**
		 * Creates a new UnlinkCustomDeviceIdOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the UnlinkCustomId operation to a typed response wrapper.
	 */
	export class UnlinkCustomIdOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.EmptyResponseData> {

		/**
		 * Creates a new UnlinkCustomIdOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the UnlinkEditorDeviceId operation to a typed response wrapper.
	 */
	export class UnlinkEditorDeviceIdOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.EmptyResponseData> {

		/**
		 * Creates a new UnlinkEditorDeviceIdOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the UnlinkFacebook operation to a typed response wrapper.
	 */
	export class UnlinkFacebookOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.EmptyResponseData> {

		/**
		 * Creates a new UnlinkFacebookOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the UnlinkGenericService operation to a typed response wrapper.
	 */
	export class UnlinkGenericServiceOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.EmptyResponseData> {

		/**
		 * Creates a new UnlinkGenericServiceOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the UnlinkGoogle operation to a typed response wrapper.
	 */
	export class UnlinkGoogleOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.EmptyResponseData> {

		/**
		 * Creates a new UnlinkGoogleOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the UnlinkGooglePlayGameService operation to a typed response wrapper.
	 */
	export class UnlinkGooglePlayGameServiceOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.EmptyResponseData> {

		/**
		 * Creates a new UnlinkGooglePlayGameServiceOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the UnlinkGameCenter operation to a typed response wrapper.
	 */
	export class UnlinkGameCenterOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.EmptyResponseData> {

		/**
		 * Creates a new UnlinkGameCenterOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the UnlinkiOSDeviceId operation to a typed response wrapper.
	 */
	export class UnlinkiOSDeviceIdOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.EmptyResponseData> {

		/**
		 * Creates a new UnlinkiOSDeviceIdOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the UnlinkLinuxDeviceId operation to a typed response wrapper.
	 */
	export class UnlinkLinuxDeviceIdOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.EmptyResponseData> {

		/**
		 * Creates a new UnlinkLinuxDeviceIdOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the UnlinkMacOSDeviceId operation to a typed response wrapper.
	 */
	export class UnlinkMacOSDeviceIdOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.EmptyResponseData> {

		/**
		 * Creates a new UnlinkMacOSDeviceIdOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the UnlinkWindowsDeviceId operation to a typed response wrapper.
	 */
	export class UnlinkWindowsDeviceIdOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.EmptyResponseData> {

		/**
		 * Creates a new UnlinkWindowsDeviceIdOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the UnlinkWindowsPhoneDeviceId operation to a typed response wrapper.
	 */
	export class UnlinkWindowsPhoneDeviceIdOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.EmptyResponseData> {

		/**
		 * Creates a new UnlinkWindowsPhoneDeviceIdOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the GetCurrencyLeaderboard operation to a typed response wrapper.
	 */
	export class GetCurrencyLeaderboardOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.GetCurrencyLeaderboardResponseData> {

		/**
		 * Creates a new GetCurrencyLeaderboardOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.GetCurrencyLeaderboardResponseData;
		}
	}

	/**
	 * Maps the GetCreateLeaderboard operation to a typed response wrapper.
	 */
	export class GetCreateLeaderboardOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.GetCreateLeaderboardResponseData> {

		/**
		 * Creates a new GetCreateLeaderboardOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.GetCreateLeaderboardResponseData;
		}
	}

	/**
	 * Maps the GetLastLoginLeaderboard operation to a typed response wrapper.
	 */
	export class GetLastLoginLeaderboardOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.GetLastLoginLeaderboardResponseData> {

		/**
		 * Creates a new GetLastLoginLeaderboardOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.GetLastLoginLeaderboardResponseData;
		}
	}

	/**
	 * Maps the GetStatisticsLog operation to a typed response wrapper.
	 */
	export class GetStatisticsLogOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.GetStatisticsLogResponseData> {

		/**
		 * Creates a new GetStatisticsLogOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.GetStatisticsLogResponseData;
		}
	}

	/**
	 * Maps the GetCurrencyLog operation to a typed response wrapper.
	 */
	export class GetCurrencyLogOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.GetCurrencyLogResponseData> {

		/**
		 * Creates a new GetCurrencyLogOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.GetCurrencyLogResponseData;
		}
	}

	/**
	 * Maps the SendSocketOperationEvent operation to a typed response wrapper.
	 */
	export class SendSocketOperationEventOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.EmptyResponseData> {

		/**
		 * Creates a new SendSocketOperationEventOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the SendEmail operation to a typed response wrapper.
	 */
	export class SendEmailOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.EmptyResponseData> {

		/**
		 * Creates a new SendEmailOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the AddPushNotification operation to a typed response wrapper.
	 */
	export class AddPushNotificationOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.AddPushNotificationResponseData> {

		/**
		 * Creates a new AddPushNotificationOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.AddPushNotificationResponseData;
		}
	}

	/**
	 * Maps the RemovePushNotification operation to a typed response wrapper.
	 */
	export class RemovePushNotificationOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.EmptyResponseData> {

		/**
		 * Creates a new RemovePushNotificationOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the GetPushNotification operation to a typed response wrapper.
	 */
	export class GetPushNotificationOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.MasterPlayerResponseData> {

		/**
		 * Creates a new GetPushNotificationOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.MasterPlayerResponseData;
		}
	}

	/**
	 * Maps the SendPushNotification operation to a typed response wrapper.
	 */
	export class SendPushNotificationOperationResponse extends CustomOperationResponseAbstract<MasterPlayerModels.SendPushNotificationResponseData> {

		/**
		 * Creates a new SendPushNotificationOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = MasterPlayerModels.SendPushNotificationResponseData;
		}
	}

}
