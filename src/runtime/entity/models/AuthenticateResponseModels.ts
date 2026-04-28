import { CustomOperationResponseAbstract } from "./../response/CustomOperationResponse";
import { AuthenticateModels } from "./AuthenticateModels";

/**
 * Typed response wrappers for the Authenticate domain.
 *
 * Each class extends {@link CustomOperationResponseAbstract} and
 * binds the corresponding response DTO from
 * {@link AuthenticateModels}. Most login flows resolve to the
 * shared {@link AuthenticateModels.AuthenticateResponseData},
 * which carries the auth token plus the optional profile fields
 * requested via `infoRequestParam`.
 *
 * Exceptions:
 * - `loginByGenericService` resolves to
 *   {@link AuthenticateModels.GenericServiceAuthenticateResponseData}
 *   so the provider-specific `errorMessage` field is preserved.
 * - `refreshAuthToken` resolves to
 *   {@link AuthenticateModels.RefreshAuthTokenResponseData},
 *   which only carries the new token plus optional ban state.
 *
 * Application code reads the typed payload through
 * `response.responseData` after confirming
 * `response.hasReturnCodeError() === false` and
 * `response.errorCode === ErrorCode.Ok`.
 */
export namespace AuthenticateResponseModels {
	/**
	 * Maps the LoginByAccount operation to a typed response wrapper.
	 */
	export class LoginByAccountOperationResponse extends CustomOperationResponseAbstract<AuthenticateModels.AuthenticateResponseData> {

		/**
		 * Creates a new LoginByAccountOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = AuthenticateModels.AuthenticateResponseData;
		}
	}

	/**
	 * Maps the LoginByAndroidDeviceId operation to a typed response wrapper.
	 */
	export class LoginByAndroidDeviceIdOperationResponse extends CustomOperationResponseAbstract<AuthenticateModels.AuthenticateResponseData> {

		/**
		 * Creates a new LoginByAndroidDeviceIdOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = AuthenticateModels.AuthenticateResponseData;
		}
	}

	/**
	 * Maps the LoginByApple operation to a typed response wrapper.
	 */
	export class LoginByAppleOperationResponse extends CustomOperationResponseAbstract<AuthenticateModels.AuthenticateResponseData> {

		/**
		 * Creates a new LoginByAppleOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = AuthenticateModels.AuthenticateResponseData;
		}
	}

	/**
	 * Maps the LoginByCustomDeviceId operation to a typed response wrapper.
	 */
	export class LoginByCustomDeviceIdOperationResponse extends CustomOperationResponseAbstract<AuthenticateModels.AuthenticateResponseData> {

		/**
		 * Creates a new LoginByCustomDeviceIdOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = AuthenticateModels.AuthenticateResponseData;
		}
	}

	/**
	 * Maps the LoginByCustomId operation to a typed response wrapper.
	 */
	export class LoginByCustomIdOperationResponse extends CustomOperationResponseAbstract<AuthenticateModels.AuthenticateResponseData> {

		/**
		 * Creates a new LoginByCustomIdOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = AuthenticateModels.AuthenticateResponseData;
		}
	}

	/**
	 * Maps the LoginByEditorDeviceId operation to a typed response wrapper.
	 */
	export class LoginByEditorDeviceIdOperationResponse extends CustomOperationResponseAbstract<AuthenticateModels.AuthenticateResponseData> {

		/**
		 * Creates a new LoginByEditorDeviceIdOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = AuthenticateModels.AuthenticateResponseData;
		}
	}

	/**
	 * Maps the LoginByFacebook operation to a typed response wrapper.
	 */
	export class LoginByFacebookOperationResponse extends CustomOperationResponseAbstract<AuthenticateModels.AuthenticateResponseData> {

		/**
		 * Creates a new LoginByFacebookOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = AuthenticateModels.AuthenticateResponseData;
		}
	}

	/**
	 * Maps the LoginByGenericService operation to a typed response wrapper.
	 */
	export class LoginByGenericServiceOperationResponse extends CustomOperationResponseAbstract<AuthenticateModels.GenericServiceAuthenticateResponseData> {

		/**
		 * Creates a new LoginByGenericServiceOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = AuthenticateModels.GenericServiceAuthenticateResponseData;
		}
	}

	/**
	 * Maps the LoginByGoogle operation to a typed response wrapper.
	 */
	export class LoginByGoogleOperationResponse extends CustomOperationResponseAbstract<AuthenticateModels.AuthenticateResponseData> {

		/**
		 * Creates a new LoginByGoogleOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = AuthenticateModels.AuthenticateResponseData;
		}
	}

	/**
	 * Maps the LoginByGooglePlayGameService operation to a typed response wrapper.
	 */
	export class LoginByGooglePlayGameServiceOperationResponse extends CustomOperationResponseAbstract<AuthenticateModels.AuthenticateResponseData> {

		/**
		 * Creates a new LoginByGooglePlayGameServiceOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = AuthenticateModels.AuthenticateResponseData;
		}
	}

	/**
	 * Maps the LoginByGameCenter operation to a typed response wrapper.
	 */
	export class LoginByGameCenterOperationResponse extends CustomOperationResponseAbstract<AuthenticateModels.AuthenticateResponseData> {

		/**
		 * Creates a new LoginByGameCenterOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = AuthenticateModels.AuthenticateResponseData;
		}
	}

	/**
	 * Maps the LoginByiOSDeviceId operation to a typed response wrapper.
	 */
	export class LoginByiOSDeviceIdOperationResponse extends CustomOperationResponseAbstract<AuthenticateModels.AuthenticateResponseData> {

		/**
		 * Creates a new LoginByiOSDeviceIdOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = AuthenticateModels.AuthenticateResponseData;
		}
	}

	/**
	 * Maps the LoginByLinuxDeviceId operation to a typed response wrapper.
	 */
	export class LoginByLinuxDeviceIdOperationResponse extends CustomOperationResponseAbstract<AuthenticateModels.AuthenticateResponseData> {

		/**
		 * Creates a new LoginByLinuxDeviceIdOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = AuthenticateModels.AuthenticateResponseData;
		}
	}

	/**
	 * Maps the LoginByMacOSDeviceId operation to a typed response wrapper.
	 */
	export class LoginByMacOSDeviceIdOperationResponse extends CustomOperationResponseAbstract<AuthenticateModels.AuthenticateResponseData> {

		/**
		 * Creates a new LoginByMacOSDeviceIdOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = AuthenticateModels.AuthenticateResponseData;
		}
	}

	/**
	 * Maps the LoginByWindowsDeviceId operation to a typed response wrapper.
	 */
	export class LoginByWindowsDeviceIdOperationResponse extends CustomOperationResponseAbstract<AuthenticateModels.AuthenticateResponseData> {

		/**
		 * Creates a new LoginByWindowsDeviceIdOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = AuthenticateModels.AuthenticateResponseData;
		}
	}

	/**
	 * Maps the LoginByWindowsPhoneDeviceId operation to a typed response wrapper.
	 */
	export class LoginByWindowsPhoneDeviceIdOperationResponse extends CustomOperationResponseAbstract<AuthenticateModels.AuthenticateResponseData> {

		/**
		 * Creates a new LoginByWindowsPhoneDeviceIdOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = AuthenticateModels.AuthenticateResponseData;
		}
	}

	/**
	 * Maps the RegisterAccount operation to a typed response wrapper.
	 */
	export class RegisterAccountOperationResponse extends CustomOperationResponseAbstract<AuthenticateModels.AuthenticateResponseData> {

		/**
		 * Creates a new RegisterAccountOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = AuthenticateModels.AuthenticateResponseData;
		}
	}

	/**
	 * Maps the RefreshAuthToken operation to a typed response wrapper.
	 */
	export class RefreshAuthTokenOperationResponse extends CustomOperationResponseAbstract<AuthenticateModels.RefreshAuthTokenResponseData> {

		/**
		 * Creates a new RefreshAuthTokenOperationResponse instance.
		 */
		constructor() {
			super();
			this.responseDataCls = AuthenticateModels.RefreshAuthTokenResponseData;
		}
	}

}
