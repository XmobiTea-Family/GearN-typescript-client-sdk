import { OperationCode } from "./../../constant/OperationCode";
import { RequestRole } from "./../../constant/enumType/RequestRole";
import { RequestType } from "./../../constant/enumType/RequestType";
import { CustomOperationRequestAbstract } from "./../request/CustomOperationRequest";
import { DashboardModels } from "./DashboardModels";

export namespace DashboardRequestModels {
	export class ChangePasswordAdminAccountOperationRequest extends CustomOperationRequestAbstract<DashboardModels.ChangePasswordAdminAccountRequestData> {
		protected override operationCode: string = OperationCode.ChangePasswordAdminAccount;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.ChangePasswordAdminAccountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.ChangePasswordAdminAccountRequestData;
		}
	}

	export class GetAdminAccountListOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetAdminAccountListRequestData> {
		protected override operationCode: string = OperationCode.GetAdminAccountList;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.GetAdminAccountListRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.GetAdminAccountListRequestData;
		}
	}

	export class GetGameInformationOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetGameInformationRequestData> {
		protected override operationCode: string = OperationCode.GetGameInformation;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.GetGameInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.GetGameInformationRequestData;
		}
	}

	export class GetGameListOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetGameListRequestData> {
		protected override operationCode: string = OperationCode.GetGameList;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.GetGameListRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.GetGameListRequestData;
		}
	}

	export class GetMasterGameSettingsOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetMasterGameSettingsRequestData> {
		protected override operationCode: string = OperationCode.GetMasterGameSettings;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.GetMasterGameSettingsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.GetMasterGameSettingsRequestData;
		}
	}

	export class GetSecretInfoInformationOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetSecretInfoInformationRequestData> {
		protected override operationCode: string = OperationCode.GetSecretInfoInformation;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.GetSecretInfoInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.GetSecretInfoInformationRequestData;
		}
	}

	export class GetSecretInfoListOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetSecretInfoListRequestData> {
		protected override operationCode: string = OperationCode.GetSecretInfoList;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.GetSecretInfoListRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.GetSecretInfoListRequestData;
		}
	}

	export class GetServerLogOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetServerLogRequestData> {
		protected override operationCode: string = OperationCode.GetServerLog;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.GetServerLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.GetServerLogRequestData;
		}
	}

	export class CreateAdminAccountOperationRequest extends CustomOperationRequestAbstract<DashboardModels.CreateAdminAccountRequestData> {
		protected override operationCode: string = OperationCode.CreateAdminAccount;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.CreateAdminAccountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.CreateAdminAccountRequestData;
		}
	}

	export class CreateGameOperationRequest extends CustomOperationRequestAbstract<DashboardModels.CreateGameRequestData> {
		protected override operationCode: string = OperationCode.CreateGame;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.CreateGameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.CreateGameRequestData;
		}
	}

	export class CreateSecretInfoOperationRequest extends CustomOperationRequestAbstract<DashboardModels.CreateSecretInfoRequestData> {
		protected override operationCode: string = OperationCode.CreateSecretInfo;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.CreateSecretInfoRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.CreateSecretInfoRequestData;
		}
	}

	export class LoginByAdminAccountOperationRequest extends CustomOperationRequestAbstract<DashboardModels.LoginByAdminAccountRequestData> {
		protected override operationCode: string = OperationCode.LoginByAdminAccount;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.LoginByAdminAccountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.LoginByAdminAccountRequestData;
		}
	}

	export class RemoveAdminAccountOperationRequest extends CustomOperationRequestAbstract<DashboardModels.RemoveAdminAccountRequestData> {
		protected override operationCode: string = OperationCode.RemoveAdminAccount;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.RemoveAdminAccountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.RemoveAdminAccountRequestData;
		}
	}

	export class SetGameInformationOperationRequest extends CustomOperationRequestAbstract<DashboardModels.SetGameInformationRequestData> {
		protected override operationCode: string = OperationCode.SetGameInformation;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.SetGameInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.SetGameInformationRequestData;
		}
	}

	export class SetMasterGameSettingsOperationRequest extends CustomOperationRequestAbstract<DashboardModels.SetMasterGameSettingsRequestData> {
		protected override operationCode: string = OperationCode.SetMasterGameSettings;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.SetMasterGameSettingsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.SetMasterGameSettingsRequestData;
		}
	}

	export class SetPasswordAdminAccountOperationRequest extends CustomOperationRequestAbstract<DashboardModels.SetPasswordAdminAccountRequestData> {
		protected override operationCode: string = OperationCode.SetPasswordAdminAccount;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.SetPasswordAdminAccountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.SetPasswordAdminAccountRequestData;
		}
	}

	export class SetSecretInfoInformationOperationRequest extends CustomOperationRequestAbstract<DashboardModels.SetSecretInfoInformationRequestData> {
		protected override operationCode: string = OperationCode.SetSecretInfoInformation;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.SetSecretInfoInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.SetSecretInfoInformationRequestData;
		}
	}

	export class SetSecretKeyAdminAccountOperationRequest extends CustomOperationRequestAbstract<DashboardModels.SetSecretKeyAdminAccountRequestData> {
		protected override operationCode: string = OperationCode.SetSecretKeyAdminAccount;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.SetSecretKeyAdminAccountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.SetSecretKeyAdminAccountRequestData;
		}
	}

	export class GetUsernameAdminAccountOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetUsernameAdminAccountRequestData> {
		protected override operationCode: string = OperationCode.GetUsernameAdminAccount;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.GetUsernameAdminAccountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.GetUsernameAdminAccountRequestData;
		}
	}

	export class GetAnalyticsOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetAnalyticsRequestData> {
		protected override operationCode: string = OperationCode.GetAnalytics;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.GetAnalyticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.GetAnalyticsRequestData;
		}
	}

	export class GetEventCallbackCloudScriptOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetEventCallbackCloudScriptRequestData> {
		protected override operationCode: string = OperationCode.GetEventCallbackCloudScript;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.GetEventCallbackCloudScriptRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.GetEventCallbackCloudScriptRequestData;
		}
	}

	export class SetEventCallbackCloudScriptOperationRequest extends CustomOperationRequestAbstract<DashboardModels.SetEventCallbackCloudScriptRequestData> {
		protected override operationCode: string = OperationCode.SetEventCallbackCloudScript;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.SetEventCallbackCloudScriptRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.SetEventCallbackCloudScriptRequestData;
		}
	}

	export class ResetStatisticsLeaderboardOperationRequest extends CustomOperationRequestAbstract<DashboardModels.ResetStatisticsLeaderboardRequestData> {
		protected override operationCode: string = OperationCode.ResetStatisticsLeaderboard;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.ResetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.ResetStatisticsLeaderboardRequestData;
		}
	}

	export class GetBackupStatisticsLeaderboardVersionOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetBackupStatisticsLeaderboardVersionRequestData> {
		protected override operationCode: string = OperationCode.GetBackupStatisticsLeaderboardVersion;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.GetBackupStatisticsLeaderboardVersionRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.GetBackupStatisticsLeaderboardVersionRequestData;
		}
	}

	export class GetServerGameDataOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetServerGameDataRequestData> {
		protected override operationCode: string = OperationCode.GetServerGameData;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.GetServerGameDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.GetServerGameDataRequestData;
		}
	}

	export class DeleteInDatabaseOperationRequest extends CustomOperationRequestAbstract<DashboardModels.DeleteInDatabaseRequestData> {
		protected override operationCode: string = OperationCode.DeleteInDatabase;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.DeleteInDatabaseRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.DeleteInDatabaseRequestData;
		}
	}

}
