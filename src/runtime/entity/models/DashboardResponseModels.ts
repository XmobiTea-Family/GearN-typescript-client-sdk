import { CustomOperationResponseAbstract } from "../response/CustomOperationResponse";
import { DashboardModels } from "./DashboardModels";

export module DashboardResponseModels { 
	export class ChangePasswordAdminAccountOperationResponse extends CustomOperationResponseAbstract<DashboardModels.EmptyResponseData> { 
	}

	export class GetAdminAccountListOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GetAdminAccountListResponseData> { 
	}

	export class GetGameInformationOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GetGameInformationResponseData> { 
	}

	export class GetGameListOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GetGameListResponseData> { 
	}

	export class GetMasterGameSettingsOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GetMasterGameSettingsResponseData> { 
	}

	export class GetSecretInfoInformationOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GetSecretInfoInformationResponseData> { 
	}

	export class GetSecretInfoListOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GetSecretInfoListResponseData> { 
	}

	export class GetServerLogOperationResponse extends CustomOperationResponseAbstract<DashboardModels.EmptyResponseData> { 
	}

	export class GrantAdminAccountOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GrantAdminAccountResponseData> { 
	}

	export class GrantGameOperationResponse extends CustomOperationResponseAbstract<DashboardModels.GameWithGameIdResponseData> { 
	}

	export class GrantSecretInfoOperationResponse extends CustomOperationResponseAbstract<DashboardModels.SecretInfoWithSecretKeyResponseData> { 
	}

	export class LoginByAdminAccountOperationResponse extends CustomOperationResponseAbstract<DashboardModels.LoginByAdminAccountResponseData> { 
	}

	export class RemoveAdminAccountOperationResponse extends CustomOperationResponseAbstract<DashboardModels.EmptyResponseData> { 
	}

	export class SetGameInformationOperationResponse extends CustomOperationResponseAbstract<DashboardModels.EmptyResponseData> { 
	}

	export class SetMasterGameSettingsOperationResponse extends CustomOperationResponseAbstract<DashboardModels.EmptyResponseData> { 
	}

	export class SetPasswordAdminAccountOperationResponse extends CustomOperationResponseAbstract<DashboardModels.EmptyResponseData> { 
	}

	export class SetSecretInfoInformationOperationResponse extends CustomOperationResponseAbstract<DashboardModels.EmptyResponseData> { 
	}

	export class SetSecretKeyAdminAccountOperationResponse extends CustomOperationResponseAbstract<DashboardModels.EmptyResponseData> { 
	}

}
