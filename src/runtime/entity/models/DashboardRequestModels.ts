import { OperationCode } from "./../../constant/OperationCode";
import { RequestRole } from "./../../constant/enumType/RequestRole";
import { RequestType } from "./../../constant/enumType/RequestType";
import { CustomOperationRequestAbstract } from "./../request/CustomOperationRequest";
import { DashboardModels } from "./DashboardModels";

/**
 * Typed request wrappers for the Dashboard domain.
 *
 * Each class extends {@link CustomOperationRequestAbstract} and
 * binds a typed `*RequestData` DTO from
 * {@link DashboardModels} to:
 * - the matching {@link OperationCode};
 * - the {@link RequestType.Dashboard} domain;
 * - {@link RequestRole.Client} (the wire role is always
 *   `Client`; admin privilege is resolved by the backend from
 *   the auth token issued by `loginByAdminAccount`).
 *
 * Application code rarely instantiates these directly — the
 * `GNNetwork.dashboard.*` helpers in {@link DashboardApi} build
 * them under the hood.
 */
export namespace DashboardRequestModels {
    /**
     * Maps the ChangePasswordAdminAccount operation to a typed request wrapper.
     */
    export class ChangePasswordAdminAccountOperationRequest extends CustomOperationRequestAbstract<DashboardModels.ChangePasswordAdminAccountRequestData> {
        protected override operationCode: string = OperationCode.ChangePasswordAdminAccount;
        protected override requestType: RequestType = RequestType.Dashboard;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new ChangePasswordAdminAccountOperationRequest instance.
         */
        constructor(requestData: DashboardModels.ChangePasswordAdminAccountRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = DashboardModels.ChangePasswordAdminAccountRequestData;
        }
    }

    /**
     * Maps the GetAdminAccountList operation to a typed request wrapper.
     */
    export class GetAdminAccountListOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetAdminAccountListRequestData> {
        protected override operationCode: string = OperationCode.GetAdminAccountList;
        protected override requestType: RequestType = RequestType.Dashboard;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetAdminAccountListOperationRequest instance.
         */
        constructor(requestData: DashboardModels.GetAdminAccountListRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = DashboardModels.GetAdminAccountListRequestData;
        }
    }

    /**
     * Maps the GetGameInformation operation to a typed request wrapper.
     */
    export class GetGameInformationOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetGameInformationRequestData> {
        protected override operationCode: string = OperationCode.GetGameInformation;
        protected override requestType: RequestType = RequestType.Dashboard;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetGameInformationOperationRequest instance.
         */
        constructor(requestData: DashboardModels.GetGameInformationRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = DashboardModels.GetGameInformationRequestData;
        }
    }

    /**
     * Maps the GetGameList operation to a typed request wrapper.
     */
    export class GetGameListOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetGameListRequestData> {
        protected override operationCode: string = OperationCode.GetGameList;
        protected override requestType: RequestType = RequestType.Dashboard;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetGameListOperationRequest instance.
         */
        constructor(requestData: DashboardModels.GetGameListRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = DashboardModels.GetGameListRequestData;
        }
    }

    /**
     * Maps the GetMasterGameSettings operation to a typed request wrapper.
     */
    export class GetMasterGameSettingsOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetMasterGameSettingsRequestData> {
        protected override operationCode: string = OperationCode.GetMasterGameSettings;
        protected override requestType: RequestType = RequestType.Dashboard;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetMasterGameSettingsOperationRequest instance.
         */
        constructor(requestData: DashboardModels.GetMasterGameSettingsRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = DashboardModels.GetMasterGameSettingsRequestData;
        }
    }

    /**
     * Maps the GetSecretInfoInformation operation to a typed request wrapper.
     */
    export class GetSecretInfoInformationOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetSecretInfoInformationRequestData> {
        protected override operationCode: string = OperationCode.GetSecretInfoInformation;
        protected override requestType: RequestType = RequestType.Dashboard;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetSecretInfoInformationOperationRequest instance.
         */
        constructor(requestData: DashboardModels.GetSecretInfoInformationRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = DashboardModels.GetSecretInfoInformationRequestData;
        }
    }

    /**
     * Maps the GetSecretInfoList operation to a typed request wrapper.
     */
    export class GetSecretInfoListOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetSecretInfoListRequestData> {
        protected override operationCode: string = OperationCode.GetSecretInfoList;
        protected override requestType: RequestType = RequestType.Dashboard;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetSecretInfoListOperationRequest instance.
         */
        constructor(requestData: DashboardModels.GetSecretInfoListRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = DashboardModels.GetSecretInfoListRequestData;
        }
    }

    /**
     * Maps the GetServerLog operation to a typed request wrapper.
     */
    export class GetServerLogOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetServerLogRequestData> {
        protected override operationCode: string = OperationCode.GetServerLog;
        protected override requestType: RequestType = RequestType.Dashboard;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetServerLogOperationRequest instance.
         */
        constructor(requestData: DashboardModels.GetServerLogRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = DashboardModels.GetServerLogRequestData;
        }
    }

    /**
     * Maps the CreateAdminAccount operation to a typed request wrapper.
     */
    export class CreateAdminAccountOperationRequest extends CustomOperationRequestAbstract<DashboardModels.CreateAdminAccountRequestData> {
        protected override operationCode: string = OperationCode.CreateAdminAccount;
        protected override requestType: RequestType = RequestType.Dashboard;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new CreateAdminAccountOperationRequest instance.
         */
        constructor(requestData: DashboardModels.CreateAdminAccountRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = DashboardModels.CreateAdminAccountRequestData;
        }
    }

    /**
     * Maps the CreateGame operation to a typed request wrapper.
     */
    export class CreateGameOperationRequest extends CustomOperationRequestAbstract<DashboardModels.CreateGameRequestData> {
        protected override operationCode: string = OperationCode.CreateGame;
        protected override requestType: RequestType = RequestType.Dashboard;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new CreateGameOperationRequest instance.
         */
        constructor(requestData: DashboardModels.CreateGameRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = DashboardModels.CreateGameRequestData;
        }
    }

    /**
     * Maps the CreateSecretInfo operation to a typed request wrapper.
     */
    export class CreateSecretInfoOperationRequest extends CustomOperationRequestAbstract<DashboardModels.CreateSecretInfoRequestData> {
        protected override operationCode: string = OperationCode.CreateSecretInfo;
        protected override requestType: RequestType = RequestType.Dashboard;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new CreateSecretInfoOperationRequest instance.
         */
        constructor(requestData: DashboardModels.CreateSecretInfoRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = DashboardModels.CreateSecretInfoRequestData;
        }
    }

    /**
     * Maps the LoginByAdminAccount operation to a typed request wrapper.
     */
    export class LoginByAdminAccountOperationRequest extends CustomOperationRequestAbstract<DashboardModels.LoginByAdminAccountRequestData> {
        protected override operationCode: string = OperationCode.LoginByAdminAccount;
        protected override requestType: RequestType = RequestType.Dashboard;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new LoginByAdminAccountOperationRequest instance.
         */
        constructor(requestData: DashboardModels.LoginByAdminAccountRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = DashboardModels.LoginByAdminAccountRequestData;
        }
    }

    /**
     * Maps the RemoveAdminAccount operation to a typed request wrapper.
     */
    export class RemoveAdminAccountOperationRequest extends CustomOperationRequestAbstract<DashboardModels.RemoveAdminAccountRequestData> {
        protected override operationCode: string = OperationCode.RemoveAdminAccount;
        protected override requestType: RequestType = RequestType.Dashboard;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new RemoveAdminAccountOperationRequest instance.
         */
        constructor(requestData: DashboardModels.RemoveAdminAccountRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = DashboardModels.RemoveAdminAccountRequestData;
        }
    }

    /**
     * Maps the SetGameInformation operation to a typed request wrapper.
     */
    export class SetGameInformationOperationRequest extends CustomOperationRequestAbstract<DashboardModels.SetGameInformationRequestData> {
        protected override operationCode: string = OperationCode.SetGameInformation;
        protected override requestType: RequestType = RequestType.Dashboard;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new SetGameInformationOperationRequest instance.
         */
        constructor(requestData: DashboardModels.SetGameInformationRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = DashboardModels.SetGameInformationRequestData;
        }
    }

    /**
     * Maps the SetMasterGameSettings operation to a typed request wrapper.
     */
    export class SetMasterGameSettingsOperationRequest extends CustomOperationRequestAbstract<DashboardModels.SetMasterGameSettingsRequestData> {
        protected override operationCode: string = OperationCode.SetMasterGameSettings;
        protected override requestType: RequestType = RequestType.Dashboard;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new SetMasterGameSettingsOperationRequest instance.
         */
        constructor(requestData: DashboardModels.SetMasterGameSettingsRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = DashboardModels.SetMasterGameSettingsRequestData;
        }
    }

    /**
     * Maps the SetPasswordAdminAccount operation to a typed request wrapper.
     */
    export class SetPasswordAdminAccountOperationRequest extends CustomOperationRequestAbstract<DashboardModels.SetPasswordAdminAccountRequestData> {
        protected override operationCode: string = OperationCode.SetPasswordAdminAccount;
        protected override requestType: RequestType = RequestType.Dashboard;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new SetPasswordAdminAccountOperationRequest instance.
         */
        constructor(requestData: DashboardModels.SetPasswordAdminAccountRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = DashboardModels.SetPasswordAdminAccountRequestData;
        }
    }

    /**
     * Maps the SetSecretInfoInformation operation to a typed request wrapper.
     */
    export class SetSecretInfoInformationOperationRequest extends CustomOperationRequestAbstract<DashboardModels.SetSecretInfoInformationRequestData> {
        protected override operationCode: string = OperationCode.SetSecretInfoInformation;
        protected override requestType: RequestType = RequestType.Dashboard;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new SetSecretInfoInformationOperationRequest instance.
         */
        constructor(requestData: DashboardModels.SetSecretInfoInformationRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = DashboardModels.SetSecretInfoInformationRequestData;
        }
    }

    /**
     * Maps the SetSecretKeyAdminAccount operation to a typed request wrapper.
     */
    export class SetSecretKeyAdminAccountOperationRequest extends CustomOperationRequestAbstract<DashboardModels.SetSecretKeyAdminAccountRequestData> {
        protected override operationCode: string = OperationCode.SetSecretKeyAdminAccount;
        protected override requestType: RequestType = RequestType.Dashboard;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new SetSecretKeyAdminAccountOperationRequest instance.
         */
        constructor(requestData: DashboardModels.SetSecretKeyAdminAccountRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = DashboardModels.SetSecretKeyAdminAccountRequestData;
        }
    }

    /**
     * Maps the GetUsernameAdminAccount operation to a typed request wrapper.
     */
    export class GetUsernameAdminAccountOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetUsernameAdminAccountRequestData> {
        protected override operationCode: string = OperationCode.GetUsernameAdminAccount;
        protected override requestType: RequestType = RequestType.Dashboard;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetUsernameAdminAccountOperationRequest instance.
         */
        constructor(requestData: DashboardModels.GetUsernameAdminAccountRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = DashboardModels.GetUsernameAdminAccountRequestData;
        }
    }

    /**
     * Maps the GetAnalytics operation to a typed request wrapper.
     */
    export class GetAnalyticsOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetAnalyticsRequestData> {
        protected override operationCode: string = OperationCode.GetAnalytics;
        protected override requestType: RequestType = RequestType.Dashboard;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetAnalyticsOperationRequest instance.
         */
        constructor(requestData: DashboardModels.GetAnalyticsRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = DashboardModels.GetAnalyticsRequestData;
        }
    }

    /**
     * Maps the GetEventCallbackCloudScript operation to a typed request wrapper.
     */
    export class GetEventCallbackCloudScriptOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetEventCallbackCloudScriptRequestData> {
        protected override operationCode: string = OperationCode.GetEventCallbackCloudScript;
        protected override requestType: RequestType = RequestType.Dashboard;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetEventCallbackCloudScriptOperationRequest instance.
         */
        constructor(requestData: DashboardModels.GetEventCallbackCloudScriptRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = DashboardModels.GetEventCallbackCloudScriptRequestData;
        }
    }

    /**
     * Maps the SetEventCallbackCloudScript operation to a typed request wrapper.
     */
    export class SetEventCallbackCloudScriptOperationRequest extends CustomOperationRequestAbstract<DashboardModels.SetEventCallbackCloudScriptRequestData> {
        protected override operationCode: string = OperationCode.SetEventCallbackCloudScript;
        protected override requestType: RequestType = RequestType.Dashboard;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new SetEventCallbackCloudScriptOperationRequest instance.
         */
        constructor(requestData: DashboardModels.SetEventCallbackCloudScriptRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = DashboardModels.SetEventCallbackCloudScriptRequestData;
        }
    }

    /**
     * Maps the ResetStatisticsLeaderboard operation to a typed request wrapper.
     */
    export class ResetStatisticsLeaderboardOperationRequest extends CustomOperationRequestAbstract<DashboardModels.ResetStatisticsLeaderboardRequestData> {
        protected override operationCode: string = OperationCode.ResetStatisticsLeaderboard;
        protected override requestType: RequestType = RequestType.Dashboard;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new ResetStatisticsLeaderboardOperationRequest instance.
         */
        constructor(requestData: DashboardModels.ResetStatisticsLeaderboardRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = DashboardModels.ResetStatisticsLeaderboardRequestData;
        }
    }

    /**
     * Maps the GetBackupStatisticsLeaderboardVersion operation to a typed request wrapper.
     */
    export class GetBackupStatisticsLeaderboardVersionOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetBackupStatisticsLeaderboardVersionRequestData> {
        protected override operationCode: string = OperationCode.GetBackupStatisticsLeaderboardVersion;
        protected override requestType: RequestType = RequestType.Dashboard;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetBackupStatisticsLeaderboardVersionOperationRequest instance.
         */
        constructor(requestData: DashboardModels.GetBackupStatisticsLeaderboardVersionRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = DashboardModels.GetBackupStatisticsLeaderboardVersionRequestData;
        }
    }

    /**
     * Maps the GetServerGameData operation to a typed request wrapper.
     */
    export class GetServerGameDataOperationRequest extends CustomOperationRequestAbstract<DashboardModels.GetServerGameDataRequestData> {
        protected override operationCode: string = OperationCode.GetServerGameData;
        protected override requestType: RequestType = RequestType.Dashboard;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new GetServerGameDataOperationRequest instance.
         */
        constructor(requestData: DashboardModels.GetServerGameDataRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = DashboardModels.GetServerGameDataRequestData;
        }
    }

    /**
     * Maps the DeleteInDatabase operation to a typed request wrapper.
     */
    export class DeleteInDatabaseOperationRequest extends CustomOperationRequestAbstract<DashboardModels.DeleteInDatabaseRequestData> {
        protected override operationCode: string = OperationCode.DeleteInDatabase;
        protected override requestType: RequestType = RequestType.Dashboard;
        protected override role: RequestRole = RequestRole.Client;

        /**
         * Creates a new DeleteInDatabaseOperationRequest instance.
         */
        constructor(requestData: DashboardModels.DeleteInDatabaseRequestData, timeout: number) {
            super(requestData, timeout);
            this.requestDataCls = DashboardModels.DeleteInDatabaseRequestData;
        }
    }

}
