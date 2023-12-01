import { OperationCode } from "./../../constant/OperationCode";
import { RequestRole } from "./../../constant/enumType/RequestRole";
import { RequestType } from "./../../constant/enumType/RequestType";
import { CustomOperationRequestAbstract } from "./../request/CustomOperationRequest";
import { DashboardModels } from "./DashboardModels";

export namespace DashboardRequestModels {
	export class ChangePasswordAdminAccountOperationRequest extends CustomOperationRequestAbstract<DashboardModels.ChangePasswordAdminAccountRequestData> {
		protected override operationCode: number = OperationCode.ChangePasswordAdminAccount;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.ChangePasswordAdminAccountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.ChangePasswordAdminAccountRequestData;
		}
	}

	export class GetAdminAccountListOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetAdminAccountListRequestData> {
		protected override operationCode: number = OperationCode.GetAdminAccountList;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.GetAdminAccountListRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.GetAdminAccountListRequestData;
		}
	}

	export class GetGameInformationOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetGameInformationRequestData> {
		protected override operationCode: number = OperationCode.GetGameInformation;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.GetGameInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.GetGameInformationRequestData;
		}
	}

	export class GetGameListOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetGameListRequestData> {
		protected override operationCode: number = OperationCode.GetGameList;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.GetGameListRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.GetGameListRequestData;
		}
	}

	export class GetMasterGameSettingsOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetMasterGameSettingsRequestData> {
		protected override operationCode: number = OperationCode.GetMasterGameSettings;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.GetMasterGameSettingsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.GetMasterGameSettingsRequestData;
		}
	}

	export class GetSecretInfoInformationOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetSecretInfoInformationRequestData> {
		protected override operationCode: number = OperationCode.GetSecretInfoInformation;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.GetSecretInfoInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.GetSecretInfoInformationRequestData;
		}
	}

	export class GetSecretInfoListOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetSecretInfoListRequestData> {
		protected override operationCode: number = OperationCode.GetSecretInfoList;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.GetSecretInfoListRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.GetSecretInfoListRequestData;
		}
	}

	export class GetServerLogOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetServerLogRequestData> {
		protected override operationCode: number = OperationCode.GetServerLog;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.GetServerLogRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.GetServerLogRequestData;
		}
	}

	export class GrantAdminAccountOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GrantAdminAccountRequestData> {
		protected override operationCode: number = OperationCode.GrantAdminAccount;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.GrantAdminAccountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.GrantAdminAccountRequestData;
		}
	}

	export class GrantGameOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GrantGameRequestData> {
		protected override operationCode: number = OperationCode.GrantGame;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.GrantGameRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.GrantGameRequestData;
		}
	}

	export class GrantSecretInfoOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GrantSecretInfoRequestData> {
		protected override operationCode: number = OperationCode.GrantSecretInfo;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.GrantSecretInfoRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.GrantSecretInfoRequestData;
		}
	}

	export class LoginByAdminAccountOperationRequest extends CustomOperationRequestAbstract<DashboardModels.LoginByAdminAccountRequestData> {
		protected override operationCode: number = OperationCode.LoginByAdminAccount;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.LoginByAdminAccountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.LoginByAdminAccountRequestData;
		}
	}

	export class RemoveAdminAccountOperationRequest extends CustomOperationRequestAbstract<DashboardModels.RemoveAdminAccountRequestData> {
		protected override operationCode: number = OperationCode.RemoveAdminAccount;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.RemoveAdminAccountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.RemoveAdminAccountRequestData;
		}
	}

	export class SetGameInformationOperationRequest extends CustomOperationRequestAbstract<DashboardModels.SetGameInformationRequestData> {
		protected override operationCode: number = OperationCode.SetGameInformation;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.SetGameInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.SetGameInformationRequestData;
		}
	}

	export class SetMasterGameSettingsOperationRequest extends CustomOperationRequestAbstract<DashboardModels.SetMasterGameSettingsRequestData> {
		protected override operationCode: number = OperationCode.SetMasterGameSettings;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.SetMasterGameSettingsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.SetMasterGameSettingsRequestData;
		}
	}

	export class SetPasswordAdminAccountOperationRequest extends CustomOperationRequestAbstract<DashboardModels.SetPasswordAdminAccountRequestData> {
		protected override operationCode: number = OperationCode.SetPasswordAdminAccount;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.SetPasswordAdminAccountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.SetPasswordAdminAccountRequestData;
		}
	}

	export class SetSecretInfoInformationOperationRequest extends CustomOperationRequestAbstract<DashboardModels.SetSecretInfoInformationRequestData> {
		protected override operationCode: number = OperationCode.SetSecretInfoInformation;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.SetSecretInfoInformationRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.SetSecretInfoInformationRequestData;
		}
	}

	export class SetSecretKeyAdminAccountOperationRequest extends CustomOperationRequestAbstract<DashboardModels.SetSecretKeyAdminAccountRequestData> {
		protected override operationCode: number = OperationCode.SetSecretKeyAdminAccount;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.SetSecretKeyAdminAccountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.SetSecretKeyAdminAccountRequestData;
		}
	}

	export class GetUsernameAdminAccountOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetUsernameAdminAccountRequestData> {
		protected override operationCode: number = OperationCode.GetUsernameAdminAccount;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.GetUsernameAdminAccountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.GetUsernameAdminAccountRequestData;
		}
	}

	export class GetAnalyticsOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetAnalyticsRequestData> {
		protected override operationCode: number = OperationCode.GetAnalytics;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.GetAnalyticsRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.GetAnalyticsRequestData;
		}
	}
	
	export class GetEventCallbackCloudScriptOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetEventCallbackCloudScriptRequestData> {
		protected override operationCode: number = OperationCode.GetEventCallbackCloudScript;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.GetEventCallbackCloudScriptRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.GetEventCallbackCloudScriptRequestData;
		}
	}

	export class SetEventCallbackCloudScriptOperationRequest extends CustomOperationRequestAbstract<DashboardModels.SetEventCallbackCloudScriptRequestData> {
		protected override operationCode: number = OperationCode.SetEventCallbackCloudScript;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.SetEventCallbackCloudScriptRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.SetEventCallbackCloudScriptRequestData;
		}
	}

	export class ResetStatisticsLeaderboardOperationRequest extends CustomOperationRequestAbstract<DashboardModels.ResetStatisticsLeaderboardRequestData> {
		protected override operationCode: number = OperationCode.ResetStatisticsLeaderboard;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.ResetStatisticsLeaderboardRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.ResetStatisticsLeaderboardRequestData;
		}
	}

	export class GetBackupStatisticsLeaderboardVersionOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetBackupStatisticsLeaderboardVersionRequestData> {
		protected override operationCode: number = OperationCode.GetBackupStatisticsLeaderboardVersion;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.GetBackupStatisticsLeaderboardVersionRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.GetBackupStatisticsLeaderboardVersionRequestData;
		}
	}

	export class GetServerGameDataOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetServerGameDataRequestData> {
		protected override operationCode: number = OperationCode.GetServerGameData;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Dashboard;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: DashboardModels.GetServerGameDataRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = DashboardModels.GetServerGameDataRequestData;
		}
	}

}
