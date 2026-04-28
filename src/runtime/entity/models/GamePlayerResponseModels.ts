import { CustomOperationResponseAbstract } from "./../response/CustomOperationResponse";
import { GamePlayerModels } from "./GamePlayerModels";

/**
 * Typed response wrappers for the GamePlayer domain.
 *
 * Each class extends {@link CustomOperationResponseAbstract}
 * and binds a response DTO from {@link GamePlayerModels}. The
 * same wrapper class is reused across the
 * client / server / admin role variants because the response
 * shape does not depend on which role issued the request.
 *
 * Many read operations resolve to a profile-style envelope
 * (`GamePlayerResponseData` or a derived shape) whose
 * `infoResponseParameters` field is gated by the matching
 * request DTO's `infoRequestParam` flags — only the fields the
 * caller asked for are populated.
 *
 * Application code reads the typed payload through
 * `response.responseData` after confirming
 * `response.hasReturnCodeError() === false` and
 * `response.errorCode === ErrorCode.Ok`.
 */
export namespace GamePlayerResponseModels {
	/**
	 * Maps the AddPlayerFriend operation to a typed response wrapper.
	 */
	export class AddPlayerFriendOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.EmptyResponseData> {

		/**
		 * Creates a new AddPlayerFriendOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the AddSegment operation to a typed response wrapper.
	 */
	export class AddSegmentOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.EmptyResponseData> {

		/**
		 * Creates a new AddSegmentOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the GetAvatar operation to a typed response wrapper.
	 */
	export class GetAvatarOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GamePlayerResponseData> {

		/**
		 * Creates a new GetAvatarOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GamePlayerResponseData;
		}
	}

	/**
	 * Maps the GetCountryCode operation to a typed response wrapper.
	 */
	export class GetCountryCodeOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GamePlayerResponseData> {

		/**
		 * Creates a new GetCountryCodeOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GamePlayerResponseData;
		}
	}

	/**
	 * Maps the GetCustomData operation to a typed response wrapper.
	 */
	export class GetCustomDataOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GamePlayerResponseData> {

		/**
		 * Creates a new GetCustomDataOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GamePlayerResponseData;
		}
	}

	/**
	 * Maps the GetDisplayName operation to a typed response wrapper.
	 */
	export class GetDisplayNameOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GamePlayerResponseData> {

		/**
		 * Creates a new GetDisplayNameOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GamePlayerResponseData;
		}
	}

	/**
	 * Maps the GetFriendStatisticsLeaderboardAroundPlayer operation to a typed response wrapper.
	 */
	export class GetFriendStatisticsLeaderboardAroundPlayerOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GetStatisticsLeaderboardResponseData> {

		/**
		 * Creates a new GetFriendStatisticsLeaderboardAroundPlayerOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GetStatisticsLeaderboardResponseData;
		}
	}

	/**
	 * Maps the GetFriendStatisticsLeaderboard operation to a typed response wrapper.
	 */
	export class GetFriendStatisticsLeaderboardOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GetStatisticsLeaderboardResponseData> {

		/**
		 * Creates a new GetFriendStatisticsLeaderboardOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GetStatisticsLeaderboardResponseData;
		}
	}

	/**
	 * Maps the GetIpAddressCreate operation to a typed response wrapper.
	 */
	export class GetIpAddressCreateOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GamePlayerResponseData> {

		/**
		 * Creates a new GetIpAddressCreateOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GamePlayerResponseData;
		}
	}

	/**
	 * Maps the GetOnlineStatus operation to a typed response wrapper.
	 */
	export class GetOnlineStatusOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GamePlayerResponseData> {

		/**
		 * Creates a new GetOnlineStatusOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GamePlayerResponseData;
		}
	}

	/**
	 * Maps the GetPlayerBan operation to a typed response wrapper.
	 */
	export class GetPlayerBanOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GamePlayerResponseData> {

		/**
		 * Creates a new GetPlayerBanOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GamePlayerResponseData;
		}
	}

	/**
	 * Maps the GetPlayerCharacter operation to a typed response wrapper.
	 */
	export class GetPlayerCharacterOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GamePlayerResponseData> {

		/**
		 * Creates a new GetPlayerCharacterOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GamePlayerResponseData;
		}
	}

	/**
	 * Maps the GetPlayerCurrency operation to a typed response wrapper.
	 */
	export class GetPlayerCurrencyOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GamePlayerResponseData> {

		/**
		 * Creates a new GetPlayerCurrencyOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GamePlayerResponseData;
		}
	}

	/**
	 * Maps the GetPlayerData operation to a typed response wrapper.
	 */
	export class GetPlayerDataOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GamePlayerResponseData> {

		/**
		 * Creates a new GetPlayerDataOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GamePlayerResponseData;
		}
	}

	/**
	 * Maps the GetPlayerFriend operation to a typed response wrapper.
	 */
	export class GetPlayerFriendOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GamePlayerResponseData> {

		/**
		 * Creates a new GetPlayerFriendOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GamePlayerResponseData;
		}
	}

	/**
	 * Maps the GetPlayerGroup operation to a typed response wrapper.
	 */
	export class GetPlayerGroupOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GamePlayerResponseData> {

		/**
		 * Creates a new GetPlayerGroupOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GamePlayerResponseData;
		}
	}

	/**
	 * Maps the GetPlayerInformation operation to a typed response wrapper.
	 */
	export class GetPlayerInformationOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GamePlayerResponseData> {

		/**
		 * Creates a new GetPlayerInformationOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GamePlayerResponseData;
		}
	}

	/**
	 * Maps the GetPlayerInventory operation to a typed response wrapper.
	 */
	export class GetPlayerInventoryOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GamePlayerResponseData> {

		/**
		 * Creates a new GetPlayerInventoryOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GamePlayerResponseData;
		}
	}

	/**
	 * Maps the GetPlayerStatistics operation to a typed response wrapper.
	 */
	export class GetPlayerStatisticsOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GamePlayerResponseData> {

		/**
		 * Creates a new GetPlayerStatisticsOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GamePlayerResponseData;
		}
	}

	/**
	 * Maps the GetPlayersWithDisplayName operation to a typed response wrapper.
	 */
	export class GetPlayersWithDisplayNameOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GamePlayersWithUserIdResponseData> {

		/**
		 * Creates a new GetPlayersWithDisplayNameOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GamePlayersWithUserIdResponseData;
		}
	}

	/**
	 * Maps the GetPlayersWithSegment operation to a typed response wrapper.
	 */
	export class GetPlayersWithSegmentOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GamePlayersWithUserIdResponseData> {

		/**
		 * Creates a new GetPlayersWithSegmentOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GamePlayersWithUserIdResponseData;
		}
	}

	/**
	 * Maps the GetPlayersWithTag operation to a typed response wrapper.
	 */
	export class GetPlayersWithTagOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GamePlayersWithUserIdResponseData> {

		/**
		 * Creates a new GetPlayersWithTagOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GamePlayersWithUserIdResponseData;
		}
	}

	/**
	 * Maps the GetSegment operation to a typed response wrapper.
	 */
	export class GetSegmentOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GamePlayerResponseData> {

		/**
		 * Creates a new GetSegmentOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GamePlayerResponseData;
		}
	}

	/**
	 * Maps the GetStatisticsLeaderboardAroundPlayer operation to a typed response wrapper.
	 */
	export class GetStatisticsLeaderboardAroundPlayerOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GetStatisticsLeaderboardResponseData> {

		/**
		 * Creates a new GetStatisticsLeaderboardAroundPlayerOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GetStatisticsLeaderboardResponseData;
		}
	}

	/**
	 * Maps the GetStatisticsLeaderboard operation to a typed response wrapper.
	 */
	export class GetStatisticsLeaderboardOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GetStatisticsLeaderboardResponseData> {

		/**
		 * Creates a new GetStatisticsLeaderboardOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GetStatisticsLeaderboardResponseData;
		}
	}

	/**
	 * Maps the GetTag operation to a typed response wrapper.
	 */
	export class GetTagOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GamePlayerResponseData> {

		/**
		 * Creates a new GetTagOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GamePlayerResponseData;
		}
	}

	/**
	 * Maps the GetTsCreate operation to a typed response wrapper.
	 */
	export class GetTsCreateOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GamePlayerResponseData> {

		/**
		 * Creates a new GetTsCreateOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GamePlayerResponseData;
		}
	}

	/**
	 * Maps the GetTsLastLogin operation to a typed response wrapper.
	 */
	export class GetTsLastLoginOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GamePlayerResponseData> {

		/**
		 * Creates a new GetTsLastLoginOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GamePlayerResponseData;
		}
	}

	/**
	 * Maps the CreateGroup operation to a typed response wrapper.
	 */
	export class CreateGroupOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GamePlayerResponseData> {

		/**
		 * Creates a new CreateGroupOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GamePlayerResponseData;
		}
	}

	/**
	 * Maps the CreatePlayerCharacter operation to a typed response wrapper.
	 */
	export class CreatePlayerCharacterOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GamePlayerResponseData> {

		/**
		 * Creates a new CreatePlayerCharacterOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GamePlayerResponseData;
		}
	}

	/**
	 * Maps the CreatePlayerItem operation to a typed response wrapper.
	 */
	export class CreatePlayerItemOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GamePlayerResponseData> {

		/**
		 * Creates a new CreatePlayerItemOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GamePlayerResponseData;
		}
	}

	/**
	 * Maps the JoinGroup operation to a typed response wrapper.
	 */
	export class JoinGroupOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.EmptyResponseData> {

		/**
		 * Creates a new JoinGroupOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the LeaveGroup operation to a typed response wrapper.
	 */
	export class LeaveGroupOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.EmptyResponseData> {

		/**
		 * Creates a new LeaveGroupOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the RemovePlayerCharacter operation to a typed response wrapper.
	 */
	export class RemovePlayerCharacterOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.EmptyResponseData> {

		/**
		 * Creates a new RemovePlayerCharacterOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the RemovePlayerFriend operation to a typed response wrapper.
	 */
	export class RemovePlayerFriendOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.EmptyResponseData> {

		/**
		 * Creates a new RemovePlayerFriendOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the RemovePlayerItem operation to a typed response wrapper.
	 */
	export class RemovePlayerItemOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.EmptyResponseData> {

		/**
		 * Creates a new RemovePlayerItemOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the RemoveSegment operation to a typed response wrapper.
	 */
	export class RemoveSegmentOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.EmptyResponseData> {

		/**
		 * Creates a new RemoveSegmentOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the RemoveTag operation to a typed response wrapper.
	 */
	export class RemoveTagOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.EmptyResponseData> {

		/**
		 * Creates a new RemoveTagOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the SetAvatar operation to a typed response wrapper.
	 */
	export class SetAvatarOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.EmptyResponseData> {

		/**
		 * Creates a new SetAvatarOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the SetCountryCode operation to a typed response wrapper.
	 */
	export class SetCountryCodeOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.EmptyResponseData> {

		/**
		 * Creates a new SetCountryCodeOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the SetCustomData operation to a typed response wrapper.
	 */
	export class SetCustomDataOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GamePlayerResponseData> {

		/**
		 * Creates a new SetCustomDataOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GamePlayerResponseData;
		}
	}

	/**
	 * Maps the SetDisplayName operation to a typed response wrapper.
	 */
	export class SetDisplayNameOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.EmptyResponseData> {

		/**
		 * Creates a new SetDisplayNameOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the SetPlayerBan operation to a typed response wrapper.
	 */
	export class SetPlayerBanOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.EmptyResponseData> {

		/**
		 * Creates a new SetPlayerBanOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the ChangePlayerCurrency operation to a typed response wrapper.
	 */
	export class ChangePlayerCurrencyOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GamePlayerResponseData> {

		/**
		 * Creates a new ChangePlayerCurrencyOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GamePlayerResponseData;
		}
	}

	/**
	 * Maps the SetPlayerData operation to a typed response wrapper.
	 */
	export class SetPlayerDataOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GamePlayerResponseData> {

		/**
		 * Creates a new SetPlayerDataOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GamePlayerResponseData;
		}
	}

	/**
	 * Maps the ChangePlayerStatistics operation to a typed response wrapper.
	 */
	export class ChangePlayerStatisticsOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GamePlayerResponseData> {

		/**
		 * Creates a new ChangePlayerStatisticsOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GamePlayerResponseData;
		}
	}

	/**
	 * Maps the SetTag operation to a typed response wrapper.
	 */
	export class SetTagOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.EmptyResponseData> {

		/**
		 * Creates a new SetTagOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.EmptyResponseData;
		}
	}

	/**
	 * Maps the GetCurrencyLeaderboard operation to a typed response wrapper.
	 */
	export class GetCurrencyLeaderboardOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GetCurrencyLeaderboardResponseData> {

		/**
		 * Creates a new GetCurrencyLeaderboardOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GetCurrencyLeaderboardResponseData;
		}
	}

	/**
	 * Maps the GetLastLoginLeaderboard operation to a typed response wrapper.
	 */
	export class GetLastLoginLeaderboardOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GetLastLoginLeaderboardResponseData> {

		/**
		 * Creates a new GetLastLoginLeaderboardOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GetLastLoginLeaderboardResponseData;
		}
	}

	/**
	 * Maps the GetCreateLeaderboard operation to a typed response wrapper.
	 */
	export class GetCreateLeaderboardOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GetCreateLeaderboardResponseData> {

		/**
		 * Creates a new GetCreateLeaderboardOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GetCreateLeaderboardResponseData;
		}
	}

	/**
	 * Maps the GetStatisticsLog operation to a typed response wrapper.
	 */
	export class GetStatisticsLogOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GetStatisticsLogResponseData> {

		/**
		 * Creates a new GetStatisticsLogOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GetStatisticsLogResponseData;
		}
	}

	/**
	 * Maps the GetCurrencyLog operation to a typed response wrapper.
	 */
	export class GetCurrencyLogOperationResponse extends CustomOperationResponseAbstract<GamePlayerModels.GetCurrencyLogResponseData> {

		/**
		 * Creates a new GetCurrencyLogOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = GamePlayerModels.GetCurrencyLogResponseData;
		}
	}

}
