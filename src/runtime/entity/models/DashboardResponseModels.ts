import { CustomOperationResponseAbstract } from "./../response/CustomOperationResponse";
import { DashboardModels } from "./DashboardModels";

export namespace DashboardResponseModels {
	export class ChangePasswordAdminAccountOperationResponse extends CustomOperationResponseAbstract<DashboardModels.EmptyResponseData> {

		constructor() {
			super();
			this.responseDataCls = DashboardModels.EmptyResponseData;
		}
	}

	export class GetAdminAccountListOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GetAdminAccountListResponseData> {

		constructor() {
			super();
			this.responseDataCls = DashboardModels.GetAdminAccountListResponseData;
		}
	}

	export class GetGameInformationOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GetGameInformationResponseData> {

		constructor() {
			super();
			this.responseDataCls = DashboardModels.GetGameInformationResponseData;
		}
	}

	export class GetGameListOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GetGameListResponseData> {

		constructor() {
			super();
			this.responseDataCls = DashboardModels.GetGameListResponseData;
		}
	}

	export class GetMasterGameSettingsOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GetMasterGameSettingsResponseData> {

		constructor() {
			super();
			this.responseDataCls = DashboardModels.GetMasterGameSettingsResponseData;
		}
	}

	export class GetSecretInfoInformationOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GetSecretInfoInformationResponseData> {

		constructor() {
			super();
			this.responseDataCls = DashboardModels.GetSecretInfoInformationResponseData;
		}
	}

	export class GetSecretInfoListOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GetSecretInfoListResponseData> {

		constructor() {
			super();
			this.responseDataCls = DashboardModels.GetSecretInfoListResponseData;
		}
	}

	export class GetServerLogOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GetServerLogResponseData> {

		constructor() {
			super();
			this.responseDataCls = DashboardModels.GetServerLogResponseData;
		}
	}

	export class CreateAdminAccountOperationResponse extends CustomOperationResponseAbstract<DashboardModels.CreateAdminAccountResponseData> {

		constructor() {
			super();
			this.responseDataCls = DashboardModels.CreateAdminAccountResponseData;
		}
	}

	export class CreateGameOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GameWithGameIdResponseData> {

		constructor() {
			super();
			this.responseDataCls = DashboardModels.GameWithGameIdResponseData;
		}
	}

	export class CreateSecretInfoOperationResponse extends CustomOperationResponseAbstract<DashboardModels.SecretInfoWithSecretKeyResponseData> {

		constructor() {
			super();
			this.responseDataCls = DashboardModels.SecretInfoWithSecretKeyResponseData;
		}
	}

	export class LoginByAdminAccountOperationResponse extends CustomOperationResponseAbstract<DashboardModels.LoginByAdminAccountResponseData> {

		constructor() {
			super();
			this.responseDataCls = DashboardModels.LoginByAdminAccountResponseData;
		}
	}

	export class RemoveAdminAccountOperationResponse extends CustomOperationResponseAbstract<DashboardModels.EmptyResponseData> {

		constructor() {
			super();
			this.responseDataCls = DashboardModels.EmptyResponseData;
		}
	}

	export class SetGameInformationOperationResponse extends CustomOperationResponseAbstract<DashboardModels.EmptyResponseData> {

		constructor() {
			super();
			this.responseDataCls = DashboardModels.EmptyResponseData;
		}
	}

	export class SetMasterGameSettingsOperationResponse extends CustomOperationResponseAbstract<DashboardModels.EmptyResponseData> {

		constructor() {
			super();
			this.responseDataCls = DashboardModels.EmptyResponseData;
		}
	}

	export class SetPasswordAdminAccountOperationResponse extends CustomOperationResponseAbstract<DashboardModels.EmptyResponseData> {

		constructor() {
			super();
			this.responseDataCls = DashboardModels.EmptyResponseData;
		}
	}

	export class SetSecretInfoInformationOperationResponse extends CustomOperationResponseAbstract<DashboardModels.EmptyResponseData> {

		constructor() {
			super();
			this.responseDataCls = DashboardModels.EmptyResponseData;
		}
	}

	export class SetSecretKeyAdminAccountOperationResponse extends CustomOperationResponseAbstract<DashboardModels.EmptyResponseData> {

		constructor() {
			super();
			this.responseDataCls = DashboardModels.EmptyResponseData;
		}
	}

	export class GetUsernameAdminAccountOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GetUsernameAdminAccountResponseData> {

		constructor() {
			super();
			this.responseDataCls = DashboardModels.GetUsernameAdminAccountResponseData;
		}
	}

	export class GetAnalyticsOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GetAnalyticsResponseData> {

		constructor() {
			super();
			this.responseDataCls = DashboardModels.GetAnalyticsResponseData;
		}
	}

	export class GetEventCallbackCloudScriptOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GetEventCallbackCloudScriptResponseData> {

		constructor() {
			super();
			this.responseDataCls = DashboardModels.GetEventCallbackCloudScriptResponseData;
		}
	}

	export class SetEventCallbackCloudScriptOperationResponse extends CustomOperationResponseAbstract<DashboardModels.SetEventCallbackCloudScriptResponseData> {

		constructor() {
			super();
			this.responseDataCls = DashboardModels.SetEventCallbackCloudScriptResponseData;
		}
	}

	export class ResetStatisticsLeaderboardOperationResponse extends CustomOperationResponseAbstract<DashboardModels.EmptyResponseData> {

		constructor() {
			super();
			this.responseDataCls = DashboardModels.EmptyResponseData;
		}
	}

	export class GetBackupStatisticsLeaderboardVersionOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GetBackupStatisticsLeaderboardVersionResponseData> {

		constructor() {
			super();
			this.responseDataCls = DashboardModels.GetBackupStatisticsLeaderboardVersionResponseData;
		}
	}

	export class GetServerGameDataOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GetServerGameDataResponseData> {

		constructor() {
			super();
			this.responseDataCls = DashboardModels.GetServerGameDataResponseData;
		}
	}

	export class DeleteInDatabaseOperationResponse extends CustomOperationResponseAbstract<DashboardModels.EmptyResponseData> {

		constructor() {
			super();
			this.responseDataCls = DashboardModels.EmptyResponseData;
		}
	}

}
