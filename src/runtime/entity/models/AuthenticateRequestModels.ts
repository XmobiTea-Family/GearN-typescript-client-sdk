import { OperationCode } from "../../constant/OperationCode";
import { RequestRole } from "../../constant/enumType/RequestRole";
import { RequestType } from "../../constant/enumType/RequestType";
import { CustomOperationRequestAbstract } from "../request/CustomOperationRequest";
import { AuthenticateModels } from "./AuthenticateModels";

export module AuthenticateRequestModels {
	export class LoginByAccountOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByAccountRequestData> {
		protected override operationCode: number = OperationCode.LoginByAccount;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.LoginByAccountRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class LoginByAndroidDeviceIdOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByAndroidDeviceIdRequestData> {
		protected override operationCode: number = OperationCode.LoginByAndroidDeviceId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.LoginByAndroidDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class LoginByAppleOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByAppleRequestData> {
		protected override operationCode: number = OperationCode.LoginByApple;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.LoginByAppleRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class LoginByCustomDeviceIdOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByCustomDeviceIdRequestData> {
		protected override operationCode: number = OperationCode.LoginByCustomDeviceId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.LoginByCustomDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class LoginByCustomIdOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByCustomIdRequestData> {
		protected override operationCode: number = OperationCode.LoginByCustomId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.LoginByCustomIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class LoginByEditorDeviceIdOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByEditorDeviceIdRequestData> {
		protected override operationCode: number = OperationCode.LoginByEditorDeviceId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.LoginByEditorDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class LoginByFacebookOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByFacebookRequestData> {
		protected override operationCode: number = OperationCode.LoginByFacebook;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.LoginByFacebookRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class LoginByGenericServiceOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByGenericServiceRequestData> {
		protected override operationCode: number = OperationCode.LoginByGenericService;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.LoginByGenericServiceRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class LoginByGoogleOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByGoogleRequestData> {
		protected override operationCode: number = OperationCode.LoginByGoogle;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.LoginByGoogleRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class LoginByiOSDeviceIdOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByiOSDeviceIdRequestData> {
		protected override operationCode: number = OperationCode.LoginByiOSDeviceId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.LoginByiOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class LoginByLinuxDeviceIdOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByLinuxDeviceIdRequestData> {
		protected override operationCode: number = OperationCode.LoginByLinuxDeviceId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.LoginByLinuxDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class LoginByMacOSDeviceIdOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByMacOSDeviceIdRequestData> {
		protected override operationCode: number = OperationCode.LoginByMacOSDeviceId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.LoginByMacOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class LoginByWindowsDeviceIdOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByWindowsDeviceIdRequestData> {
		protected override operationCode: number = OperationCode.LoginByWindowsDeviceId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.LoginByWindowsDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class LoginByWindowsPhoneDeviceIdOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByWindowsPhoneDeviceIdRequestData> {
		protected override operationCode: number = OperationCode.LoginByWindowsPhoneDeviceId;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.LoginByWindowsPhoneDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

	export class RegisterAccountOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.RegisterAccountRequestData> {
		protected override operationCode: number = OperationCode.RegisterAccount;
		protected override operationEncrypted: boolean = true;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override requestRole: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.RegisterAccountRequestData, timeout: number) {
			super(requestData, timeout);
		}
	}

}
