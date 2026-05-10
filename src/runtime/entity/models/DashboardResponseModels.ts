import { CustomOperationResponseAbstract } from "./../response/CustomOperationResponse";
import { DashboardModels } from "./DashboardModels";

/**
 * Typed response wrappers for the Dashboard domain.
 *
 * Each class extends {@link CustomOperationResponseAbstract}
 * and binds a response DTO from {@link DashboardModels}.
 *
 * Many mutation operations (create / set / remove) resolve to
 * an `EmptyResponseData` because the only useful signal is
 * the transport return code + domain `errorCode`. Read /
 * listing operations resolve to richer dashboard-specific DTOs
 * such as `GameInformationResponseData`,
 * `AdminAccountListResponseData`, `AnalyticsResponseData`,
 * etc.
 */
export namespace DashboardResponseModels {
    /**
     * Maps the ChangePasswordAdminAccount operation to a typed response wrapper.
     */
    export class ChangePasswordAdminAccountOperationResponse extends CustomOperationResponseAbstract<DashboardModels.EmptyResponseData> {

        /**
         * Creates a new ChangePasswordAdminAccountOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = DashboardModels.EmptyResponseData;
        }
    }

    /**
     * Maps the GetAdminAccountList operation to a typed response wrapper.
     */
    export class GetAdminAccountListOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GetAdminAccountListResponseData> {

        /**
         * Creates a new GetAdminAccountListOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = DashboardModels.GetAdminAccountListResponseData;
        }
    }

    /**
     * Maps the GetGameInformation operation to a typed response wrapper.
     */
    export class GetGameInformationOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GetGameInformationResponseData> {

        /**
         * Creates a new GetGameInformationOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = DashboardModels.GetGameInformationResponseData;
        }
    }

    /**
     * Maps the GetGameList operation to a typed response wrapper.
     */
    export class GetGameListOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GetGameListResponseData> {

        /**
         * Creates a new GetGameListOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = DashboardModels.GetGameListResponseData;
        }
    }

    /**
     * Maps the GetMasterGameSettings operation to a typed response wrapper.
     */
    export class GetMasterGameSettingsOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GetMasterGameSettingsResponseData> {

        /**
         * Creates a new GetMasterGameSettingsOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = DashboardModels.GetMasterGameSettingsResponseData;
        }
    }

    /**
     * Maps the GetSecretInfoInformation operation to a typed response wrapper.
     */
    export class GetSecretInfoInformationOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GetSecretInfoInformationResponseData> {

        /**
         * Creates a new GetSecretInfoInformationOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = DashboardModels.GetSecretInfoInformationResponseData;
        }
    }

    /**
     * Maps the GetSecretInfoList operation to a typed response wrapper.
     */
    export class GetSecretInfoListOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GetSecretInfoListResponseData> {

        /**
         * Creates a new GetSecretInfoListOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = DashboardModels.GetSecretInfoListResponseData;
        }
    }

    /**
     * Maps the GetServerLog operation to a typed response wrapper.
     */
    export class GetServerLogOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GetServerLogResponseData> {

        /**
         * Creates a new GetServerLogOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = DashboardModels.GetServerLogResponseData;
        }
    }

    /**
     * Maps the CreateAdminAccount operation to a typed response wrapper.
     */
    export class CreateAdminAccountOperationResponse extends CustomOperationResponseAbstract<DashboardModels.CreateAdminAccountResponseData> {

        /**
         * Creates a new CreateAdminAccountOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = DashboardModels.CreateAdminAccountResponseData;
        }
    }

    /**
     * Maps the CreateGame operation to a typed response wrapper.
     */
    export class CreateGameOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GameWithGameIdResponseData> {

        /**
         * Creates a new CreateGameOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = DashboardModels.GameWithGameIdResponseData;
        }
    }

    /**
     * Maps the CreateSecretInfo operation to a typed response wrapper.
     */
    export class CreateSecretInfoOperationResponse extends CustomOperationResponseAbstract<DashboardModels.SecretInfoWithSecretKeyResponseData> {

        /**
         * Creates a new CreateSecretInfoOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = DashboardModels.SecretInfoWithSecretKeyResponseData;
        }
    }

    /**
     * Maps the LoginByAdminAccount operation to a typed response wrapper.
     */
    export class LoginByAdminAccountOperationResponse extends CustomOperationResponseAbstract<DashboardModels.LoginByAdminAccountResponseData> {

        /**
         * Creates a new LoginByAdminAccountOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = DashboardModels.LoginByAdminAccountResponseData;
        }
    }

    /**
     * Maps the RemoveAdminAccount operation to a typed response wrapper.
     */
    export class RemoveAdminAccountOperationResponse extends CustomOperationResponseAbstract<DashboardModels.EmptyResponseData> {

        /**
         * Creates a new RemoveAdminAccountOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = DashboardModels.EmptyResponseData;
        }
    }

    /**
     * Maps the SetGameInformation operation to a typed response wrapper.
     */
    export class SetGameInformationOperationResponse extends CustomOperationResponseAbstract<DashboardModels.EmptyResponseData> {

        /**
         * Creates a new SetGameInformationOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = DashboardModels.EmptyResponseData;
        }
    }

    /**
     * Maps the SetMasterGameSettings operation to a typed response wrapper.
     */
    export class SetMasterGameSettingsOperationResponse extends CustomOperationResponseAbstract<DashboardModels.EmptyResponseData> {

        /**
         * Creates a new SetMasterGameSettingsOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = DashboardModels.EmptyResponseData;
        }
    }

    /**
     * Maps the SetPasswordAdminAccount operation to a typed response wrapper.
     */
    export class SetPasswordAdminAccountOperationResponse extends CustomOperationResponseAbstract<DashboardModels.EmptyResponseData> {

        /**
         * Creates a new SetPasswordAdminAccountOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = DashboardModels.EmptyResponseData;
        }
    }

    /**
     * Maps the SetSecretInfoInformation operation to a typed response wrapper.
     */
    export class SetSecretInfoInformationOperationResponse extends CustomOperationResponseAbstract<DashboardModels.EmptyResponseData> {

        /**
         * Creates a new SetSecretInfoInformationOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = DashboardModels.EmptyResponseData;
        }
    }

    /**
     * Maps the SetSecretKeyAdminAccount operation to a typed response wrapper.
     */
    export class SetSecretKeyAdminAccountOperationResponse extends CustomOperationResponseAbstract<DashboardModels.EmptyResponseData> {

        /**
         * Creates a new SetSecretKeyAdminAccountOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = DashboardModels.EmptyResponseData;
        }
    }

    /**
     * Maps the GetUsernameAdminAccount operation to a typed response wrapper.
     */
    export class GetUsernameAdminAccountOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GetUsernameAdminAccountResponseData> {

        /**
         * Creates a new GetUsernameAdminAccountOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = DashboardModels.GetUsernameAdminAccountResponseData;
        }
    }

    /**
     * Maps the GetAnalytics operation to a typed response wrapper.
     */
    export class GetAnalyticsOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GetAnalyticsResponseData> {

        /**
         * Creates a new GetAnalyticsOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = DashboardModels.GetAnalyticsResponseData;
        }
    }

    /**
     * Maps the GetEventCallbackCloudScript operation to a typed response wrapper.
     */
    export class GetEventCallbackCloudScriptOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GetEventCallbackCloudScriptResponseData> {

        /**
         * Creates a new GetEventCallbackCloudScriptOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = DashboardModels.GetEventCallbackCloudScriptResponseData;
        }
    }

    /**
     * Maps the SetEventCallbackCloudScript operation to a typed response wrapper.
     */
    export class SetEventCallbackCloudScriptOperationResponse extends CustomOperationResponseAbstract<DashboardModels.SetEventCallbackCloudScriptResponseData> {

        /**
         * Creates a new SetEventCallbackCloudScriptOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = DashboardModels.SetEventCallbackCloudScriptResponseData;
        }
    }

    /**
     * Maps the ResetStatisticsLeaderboard operation to a typed response wrapper.
     */
    export class ResetStatisticsLeaderboardOperationResponse extends CustomOperationResponseAbstract<DashboardModels.EmptyResponseData> {

        /**
         * Creates a new ResetStatisticsLeaderboardOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = DashboardModels.EmptyResponseData;
        }
    }

    /**
     * Maps the GetBackupStatisticsLeaderboardVersion operation to a typed response wrapper.
     */
    export class GetBackupStatisticsLeaderboardVersionOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GetBackupStatisticsLeaderboardVersionResponseData> {

        /**
         * Creates a new GetBackupStatisticsLeaderboardVersionOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = DashboardModels.GetBackupStatisticsLeaderboardVersionResponseData;
        }
    }

    /**
     * Maps the GetServerGameData operation to a typed response wrapper.
     */
    export class GetServerGameDataOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GetServerGameDataResponseData> {

        /**
         * Creates a new GetServerGameDataOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = DashboardModels.GetServerGameDataResponseData;
        }
    }

    /**
     * Maps the DeleteInDatabase operation to a typed response wrapper.
     */
    export class DeleteInDatabaseOperationResponse extends CustomOperationResponseAbstract<DashboardModels.EmptyResponseData> {

        /**
         * Creates a new DeleteInDatabaseOperationResponse instance.
         */
        constructor() {
            super();
            this.responseDataCls = DashboardModels.EmptyResponseData;
        }
    }

}
