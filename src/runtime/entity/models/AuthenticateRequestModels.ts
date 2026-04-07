import { OperationCode } from "./../../constant/OperationCode";
import { RequestRole } from "./../../constant/enumType/RequestRole";
import { RequestType } from "./../../constant/enumType/RequestType";
import { CustomOperationRequestAbstract } from "./../request/CustomOperationRequest";
import { AuthenticateModels } from "./AuthenticateModels";

/**
 * Groups typed request contracts for Authenticate.
 */
export namespace AuthenticateRequestModels {
	/**
	 * Maps the LoginByAccount operation to a typed request wrapper.
	 */
	export class LoginByAccountOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByAccountRequestData> {
		protected override operationCode: string = OperationCode.LoginByAccount;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LoginByAccountOperationRequest instance.
		 */
		constructor(requestData: AuthenticateModels.LoginByAccountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByAccountRequestData;
		}
	}

	/**
	 * Maps the LoginByAndroidDeviceId operation to a typed request wrapper.
	 */
	export class LoginByAndroidDeviceIdOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByAndroidDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LoginByAndroidDeviceId;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LoginByAndroidDeviceIdOperationRequest instance.
		 */
		constructor(requestData: AuthenticateModels.LoginByAndroidDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByAndroidDeviceIdRequestData;
		}
	}

	/**
	 * Maps the LoginByApple operation to a typed request wrapper.
	 */
	export class LoginByAppleOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByAppleRequestData> {
		protected override operationCode: string = OperationCode.LoginByApple;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LoginByAppleOperationRequest instance.
		 */
		constructor(requestData: AuthenticateModels.LoginByAppleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByAppleRequestData;
		}
	}

	/**
	 * Maps the LoginByCustomDeviceId operation to a typed request wrapper.
	 */
	export class LoginByCustomDeviceIdOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByCustomDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LoginByCustomDeviceId;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LoginByCustomDeviceIdOperationRequest instance.
		 */
		constructor(requestData: AuthenticateModels.LoginByCustomDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByCustomDeviceIdRequestData;
		}
	}

	/**
	 * Maps the LoginByCustomId operation to a typed request wrapper.
	 */
	export class LoginByCustomIdOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByCustomIdRequestData> {
		protected override operationCode: string = OperationCode.LoginByCustomId;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LoginByCustomIdOperationRequest instance.
		 */
		constructor(requestData: AuthenticateModels.LoginByCustomIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByCustomIdRequestData;
		}
	}

	/**
	 * Maps the LoginByEditorDeviceId operation to a typed request wrapper.
	 */
	export class LoginByEditorDeviceIdOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByEditorDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LoginByEditorDeviceId;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LoginByEditorDeviceIdOperationRequest instance.
		 */
		constructor(requestData: AuthenticateModels.LoginByEditorDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByEditorDeviceIdRequestData;
		}
	}

	/**
	 * Maps the LoginByFacebook operation to a typed request wrapper.
	 */
	export class LoginByFacebookOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByFacebookRequestData> {
		protected override operationCode: string = OperationCode.LoginByFacebook;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LoginByFacebookOperationRequest instance.
		 */
		constructor(requestData: AuthenticateModels.LoginByFacebookRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByFacebookRequestData;
		}
	}

	/**
	 * Maps the LoginByGenericService operation to a typed request wrapper.
	 */
	export class LoginByGenericServiceOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByGenericServiceRequestData> {
		protected override operationCode: string = OperationCode.LoginByGenericService;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LoginByGenericServiceOperationRequest instance.
		 */
		constructor(requestData: AuthenticateModels.LoginByGenericServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByGenericServiceRequestData;
		}
	}

	/**
	 * Maps the LoginByGoogle operation to a typed request wrapper.
	 */
	export class LoginByGoogleOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByGoogleRequestData> {
		protected override operationCode: string = OperationCode.LoginByGoogle;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LoginByGoogleOperationRequest instance.
		 */
		constructor(requestData: AuthenticateModels.LoginByGoogleRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByGoogleRequestData;
		}
	}

	/**
	 * Maps the LoginByGooglePlayGameService operation to a typed request wrapper.
	 */
	export class LoginByGooglePlayGameServiceOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByGooglePlayGameServiceRequestData> {
		protected override operationCode: string = OperationCode.LoginByGooglePlayGameService;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LoginByGooglePlayGameServiceOperationRequest instance.
		 */
		constructor(requestData: AuthenticateModels.LoginByGooglePlayGameServiceRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByGooglePlayGameServiceRequestData;
		}
	}

	/**
	 * Maps the LoginByGameCenter operation to a typed request wrapper.
	 */
	export class LoginByGameCenterOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByGameCenterRequestData> {
		protected override operationCode: string = OperationCode.LoginByGameCenter;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LoginByGameCenterOperationRequest instance.
		 */
		constructor(requestData: AuthenticateModels.LoginByGameCenterRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByGameCenterRequestData;
		}
	}

	/**
	 * Maps the LoginByiOSDeviceId operation to a typed request wrapper.
	 */
	export class LoginByiOSDeviceIdOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByiOSDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LoginByiOSDeviceId;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LoginByiOSDeviceIdOperationRequest instance.
		 */
		constructor(requestData: AuthenticateModels.LoginByiOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByiOSDeviceIdRequestData;
		}
	}

	/**
	 * Maps the LoginByLinuxDeviceId operation to a typed request wrapper.
	 */
	export class LoginByLinuxDeviceIdOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByLinuxDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LoginByLinuxDeviceId;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LoginByLinuxDeviceIdOperationRequest instance.
		 */
		constructor(requestData: AuthenticateModels.LoginByLinuxDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByLinuxDeviceIdRequestData;
		}
	}

	/**
	 * Maps the LoginByMacOSDeviceId operation to a typed request wrapper.
	 */
	export class LoginByMacOSDeviceIdOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByMacOSDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LoginByMacOSDeviceId;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LoginByMacOSDeviceIdOperationRequest instance.
		 */
		constructor(requestData: AuthenticateModels.LoginByMacOSDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByMacOSDeviceIdRequestData;
		}
	}

	/**
	 * Maps the LoginByWindowsDeviceId operation to a typed request wrapper.
	 */
	export class LoginByWindowsDeviceIdOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByWindowsDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LoginByWindowsDeviceId;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LoginByWindowsDeviceIdOperationRequest instance.
		 */
		constructor(requestData: AuthenticateModels.LoginByWindowsDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByWindowsDeviceIdRequestData;
		}
	}

	/**
	 * Maps the LoginByWindowsPhoneDeviceId operation to a typed request wrapper.
	 */
	export class LoginByWindowsPhoneDeviceIdOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.LoginByWindowsPhoneDeviceIdRequestData> {
		protected override operationCode: string = OperationCode.LoginByWindowsPhoneDeviceId;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new LoginByWindowsPhoneDeviceIdOperationRequest instance.
		 */
		constructor(requestData: AuthenticateModels.LoginByWindowsPhoneDeviceIdRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.LoginByWindowsPhoneDeviceIdRequestData;
		}
	}

	/**
	 * Maps the RegisterAccount operation to a typed request wrapper.
	 */
	export class RegisterAccountOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.RegisterAccountRequestData> {
		protected override operationCode: string = OperationCode.RegisterAccount;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new RegisterAccountOperationRequest instance.
		 */
		constructor(requestData: AuthenticateModels.RegisterAccountRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.RegisterAccountRequestData;
		}
	}

	/**
	 * Maps the RefreshAuthToken operation to a typed request wrapper.
	 */
	export class RefreshAuthTokenOperationRequest extends CustomOperationRequestAbstract<AuthenticateModels.RefreshAuthTokenRequestData> {
		protected override operationCode: string = OperationCode.RefreshAuthToken;
		protected override requestType: RequestType = RequestType.Authenticate;
		protected override role: RequestRole = RequestRole.Client;

		/**
		 * Creates a new RefreshAuthTokenOperationRequest instance.
		 */
		constructor(requestData: AuthenticateModels.RefreshAuthTokenRequestData, timeout: number) {
			super(requestData, timeout);
			this.requestDataCls = AuthenticateModels.RefreshAuthTokenRequestData;
		}
	}
}
