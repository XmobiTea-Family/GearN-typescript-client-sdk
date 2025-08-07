import { OperationCode } from "./../../constant/OperationCode";
import { RequestRole } from "./../../constant/enumType/RequestRole";
import { RequestType } from "./../../constant/enumType/RequestType";
import { CustomOperationRequestAbstract } from "./../request/CustomOperationRequest";
import { AuthenticateModels } from "./AuthenticateModels";

export namespace AuthenticateRequestModels {
	export class LoginByAccountOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByAccountRequestData> {
		protected override operationCode: string = OperationCode.LoginByAccount;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.LoginByAccountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByAccountRequestData;
		}
	}

	export class LoginByAndroidDeviceIdOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByAndroidDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LoginByAndroidDeviceId;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.LoginByAndroidDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByAndroidDeviceIdRequestData;
		}
	}

	export class LoginByAppleOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByAppleRequestData> {
		protected override operationCode: string = OperationCode.LoginByApple;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.LoginByAppleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByAppleRequestData;
		}
	}

	export class LoginByCustomDeviceIdOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByCustomDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LoginByCustomDeviceId;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.LoginByCustomDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByCustomDeviceIdRequestData;
		}
	}

	export class LoginByCustomIdOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByCustomIdRequestData> {
		protected override operationCode: string = OperationCode.LoginByCustomId;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.LoginByCustomIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByCustomIdRequestData;
		}
	}

	export class LoginByEditorDeviceIdOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByEditorDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LoginByEditorDeviceId;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.LoginByEditorDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByEditorDeviceIdRequestData;
		}
	}

	export class LoginByFacebookOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByFacebookRequestData> {
		protected override operationCode: string = OperationCode.LoginByFacebook;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.LoginByFacebookRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByFacebookRequestData;
		}
	}

	export class LoginByGenericServiceOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByGenericServiceRequestData> {
		protected override operationCode: string = OperationCode.LoginByGenericService;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.LoginByGenericServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByGenericServiceRequestData;
		}
	}

	export class LoginByGoogleOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByGoogleRequestData> {
		protected override operationCode: string = OperationCode.LoginByGoogle;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.LoginByGoogleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByGoogleRequestData;
		}
	}

	export class LoginByGooglePlayGameServiceOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByGooglePlayGameServiceRequestData> {
		protected override operationCode: string = OperationCode.LoginByGooglePlayGameService;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.LoginByGooglePlayGameServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByGooglePlayGameServiceRequestData;
		}
	}

	export class LoginByGameCenterOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByGameCenterRequestData> {
		protected override operationCode: string = OperationCode.LoginByGameCenter;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.LoginByGameCenterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByGameCenterRequestData;
		}
	}

	export class LoginByiOSDeviceIdOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByiOSDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LoginByiOSDeviceId;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.LoginByiOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByiOSDeviceIdRequestData;
		}
	}

	export class LoginByLinuxDeviceIdOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByLinuxDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LoginByLinuxDeviceId;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.LoginByLinuxDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByLinuxDeviceIdRequestData;
		}
	}

	export class LoginByMacOSDeviceIdOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByMacOSDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LoginByMacOSDeviceId;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.LoginByMacOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByMacOSDeviceIdRequestData;
		}
	}

	export class LoginByWindowsDeviceIdOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByWindowsDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LoginByWindowsDeviceId;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.LoginByWindowsDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByWindowsDeviceIdRequestData;
		}
	}

	export class LoginByWindowsPhoneDeviceIdOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByWindowsPhoneDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LoginByWindowsPhoneDeviceId;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.LoginByWindowsPhoneDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByWindowsPhoneDeviceIdRequestData;
		}
	}

	export class RegisterAccountOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.RegisterAccountRequestData> {
		protected override operationCode: string = OperationCode.RegisterAccount;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.RegisterAccountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.RegisterAccountRequestData;
		}
	}

	export class RefreshAuthTokenOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.RefreshAuthTokenRequestData> {
		protected override operationCode: string = OperationCode.RefreshAuthToken;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		constructor(requestData: AuthenticateModels.RefreshAuthTokenRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.RefreshAuthTokenRequestData;
		}
	}
}
