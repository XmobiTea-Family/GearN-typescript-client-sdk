import { GNNetwork } from "./GNNetwork";
import { Action1 } from "./common/Action1";
import { GNHashtable } from "./common/GNData";
import { OperationRequest } from "./entity/OperationRequest";
import { AuthenticateModels } from "./entity/models/AuthenticateModels";
import { AuthenticateRequestModels } from "./entity/models/AuthenticateRequestModels";
import { AuthenticateResponseModels } from "./entity/models/AuthenticateResponseModels";

/**
 * Public client-scoped namespace for the Authenticate domain.
 *
 * Reachable through {@link GNNetwork.authenticate} after
 * {@link GNNetwork.init}. Exposes every login flow, the
 * registration flow, and the refresh-token flow as both
 * callback-style and Promise-style methods.
 *
 * Common contract for every method on this class:
 * - Routes through HTTP using {@link RequestType.Authenticate} and
 *   {@link RequestRole.Client}. The matching wire-level operation
 *   code is taken from {@link OperationCode}; refer to each
 *   `*OperationRequest` wrapper in
 *   {@link AuthenticateRequestModels} for the exact mapping.
 * - On success the response embeds the freshly minted auth token
 *   plus the profile fields requested through `infoRequestParam`.
 *   {@link PeerBase.onResponseHandler} mirrors the `authToken`
 *   and `userId` parameters into {@link AuthenticateStatus} and
 *   {@link StorageService} automatically — subsequent calls do
 *   not need to repeat the credential.
 * - The standard parameter set
 *   (`overrideAuthToken`, `overrideSecretKey`, `customTags`,
 *   `timeout`) is documented on {@link GNNetwork.sendViaHttp} and
 *   applies identically here.
 *
 * The companion {@link ServerAuthenticateApi} and
 * {@link AdminAuthenticateApi} sub-namespaces exist for API
 * symmetry — they are currently empty because the Authenticate
 * domain does not yet expose server-scoped or admin-scoped public
 * operations.
 */
export class AuthenticateApi {
    /**
     * Server-scoped Authenticate sub-namespace. Reserved — no
     * public methods are exposed today.
     */
    public server: ServerAuthenticateApi = new ServerAuthenticateApi();

    /**
     * Admin-scoped Authenticate sub-namespace. Reserved — no
     * public methods are exposed today.
     */
    public admin: AdminAuthenticateApi = new AdminAuthenticateApi();

    /**
     * Logs the player in with a GearN username + password pair.
     *
     * Backed by {@link OperationCode.LoginByAccount} with
     * {@link AuthenticateModels.LoginByAccountRequestData} as the
     * request DTO. Username constraints: `minLength: 6,
     * maxLength: 32, mustNonNull: true`. Password constraints:
     * `minLength: 6, maxLength: 64, mustNonNull: true`.
     * `infoRequestParam` controls which optional profile fields
     * are included in the response.
     *
     * Domain failures surface through `response.errorCode`:
     * - {@link ErrorCode.AccountNotFound} — username unknown.
     * - {@link ErrorCode.AccountPasswordWrong} — password
     *   mismatch.
     *
     * @param requestData       Typed login DTO.
     * @param onResponse        Optional callback receiving
     *                          {@link AuthenticateResponseModels.LoginByAccountOperationResponse}.
     * @param overrideAuthToken Optional one-shot auth token. Pass
     *                          `null` to use the cached token.
     * @param overrideSecretKey Optional one-shot secret key.
     * @param customTags        Optional routing / telemetry tags.
     * @param timeout           Per-request timeout in seconds.
     *                          Defaults to
     *                          {@link OperationRequest.defaultTimeOut}.
     */
    public loginByAccount(requestData: AuthenticateModels.LoginByAccountRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
        GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByAccountOperationResponse);
    }

    /**
     * Promise-based wrapper around {@link loginByAccount}.
     *
     * The promise always resolves; transport / domain failures
     * surface through `response.hasReturnCodeError()` and
     * `response.errorCode`.
     */
    public async loginByAccountAsync(requestData: AuthenticateModels.LoginByAccountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByAccountOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByAccountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByAccountOperationResponse);
    }

    /**
     * Logs the player in with an Android-platform device id.
     *
     * Backed by {@link OperationCode.LoginByAndroidDeviceId} with
     * {@link AuthenticateModels.LoginByAndroidDeviceIdRequestData}.
     * The device id is constrained to `minLength: 6,
     * maxLength: 64, mustNonNull: true`. Set
     * `createPlayerIfNotExists = true` on the DTO to
     * auto-provision a player record on first sign-in.
     *
     * Pair with `linkAndroidDeviceId` (on
     * `GNNetwork.masterPlayer`) to attach an existing GearN
     * account to a device id, and with `unlinkAndroidDeviceId` to
     * detach it.
     */
    public loginByAndroidDeviceId(requestData: AuthenticateModels.LoginByAndroidDeviceIdRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByAndroidDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
        GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByAndroidDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByAndroidDeviceIdOperationResponse);
    }

    /**
     * Promise-based wrapper around {@link loginByAndroidDeviceId}.
     */
    public async loginByAndroidDeviceIdAsync(requestData: AuthenticateModels.LoginByAndroidDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByAndroidDeviceIdOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByAndroidDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByAndroidDeviceIdOperationResponse);
    }

    /**
     * Logs the player in with an Apple Sign-In token.
     *
     * Backed by {@link OperationCode.LoginByApple} with
     * {@link AuthenticateModels.LoginByAppleRequestData}. Token
     * constrained to `minLength: 32, maxLength: 2048,
     * mustNonNull: true`. The backend introspects the token
     * against Apple's identity service before issuing a GearN
     * auth token.
     *
     * Domain failures: {@link ErrorCode.VerifyTokenError} when
     * the token cannot be decoded,
     * {@link ErrorCode.VerifyFailed} when Apple rejects the
     * verification.
     */
    public loginByApple(requestData: AuthenticateModels.LoginByAppleRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByAppleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
        GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByAppleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByAppleOperationResponse);
    }

    /**
     * Promise-based wrapper around {@link loginByApple}.
     */
    public async loginByAppleAsync(requestData: AuthenticateModels.LoginByAppleRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByAppleOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByAppleOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByAppleOperationResponse);
    }

    /**
     * Logs the player in with a developer-defined custom device
     * id.
     *
     * Backed by {@link OperationCode.LoginByCustomDeviceId} with
     * {@link AuthenticateModels.LoginByCustomDeviceIdRequestData}.
     * Use this when the application wants full control over the
     * device-fingerprint algorithm (game-specific salt, blended
     * hardware ids, ...). Constraints: `minLength: 6,
     * maxLength: 64, mustNonNull: true`.
     */
    public loginByCustomDeviceId(requestData: AuthenticateModels.LoginByCustomDeviceIdRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByCustomDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
        GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByCustomDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByCustomDeviceIdOperationResponse);
    }

    /**
     * Promise-based wrapper around {@link loginByCustomDeviceId}.
     */
    public async loginByCustomDeviceIdAsync(requestData: AuthenticateModels.LoginByCustomDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByCustomDeviceIdOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByCustomDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByCustomDeviceIdOperationResponse);
    }

    /**
     * Logs the player in with a developer-defined custom user id.
     *
     * Backed by {@link OperationCode.LoginByCustomId} with
     * {@link AuthenticateModels.LoginByCustomIdRequestData}.
     * Distinct from {@link loginByCustomDeviceId} — the custom id
     * is treated as a stable user identifier (e.g. an external
     * account id from a federated identity service) rather than a
     * device fingerprint.
     */
    public loginByCustomId(requestData: AuthenticateModels.LoginByCustomIdRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByCustomIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
        GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByCustomIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByCustomIdOperationResponse);
    }

    /**
     * Promise-based wrapper around {@link loginByCustomId}.
     */
    public async loginByCustomIdAsync(requestData: AuthenticateModels.LoginByCustomIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByCustomIdOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByCustomIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByCustomIdOperationResponse);
    }

    /**
     * Logs the player in with an editor-only device id.
     *
     * Backed by {@link OperationCode.LoginByEditorDeviceId} with
     * {@link AuthenticateModels.LoginByEditorDeviceIdRequestData}.
     * Reserved for the GearN-supported editor / development
     * runtime so QA accounts can sign in without a production
     * device id.
     */
    public loginByEditorDeviceId(requestData: AuthenticateModels.LoginByEditorDeviceIdRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByEditorDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
        GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByEditorDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByEditorDeviceIdOperationResponse);
    }

    /**
     * Promise-based wrapper around {@link loginByEditorDeviceId}.
     */
    public async loginByEditorDeviceIdAsync(requestData: AuthenticateModels.LoginByEditorDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByEditorDeviceIdOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByEditorDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByEditorDeviceIdOperationResponse);
    }

    /**
     * Logs the player in with a Facebook access token.
     *
     * Backed by {@link OperationCode.LoginByFacebook} with
     * {@link AuthenticateModels.LoginByFacebookRequestData}.
     * Token constrained to `minLength: 32, maxLength: 2048,
     * mustNonNull: true`. Backend introspects the token against
     * Facebook's Graph API.
     */
    public loginByFacebook(requestData: AuthenticateModels.LoginByFacebookRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByFacebookOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
        GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByFacebookOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByFacebookOperationResponse);
    }

    /**
     * Promise-based wrapper around {@link loginByFacebook}.
     */
    public async loginByFacebookAsync(requestData: AuthenticateModels.LoginByFacebookRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByFacebookOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByFacebookOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByFacebookOperationResponse);
    }

    /**
     * Logs the player in through a backend-configured generic
     * identity provider.
     *
     * Backed by {@link OperationCode.LoginByGenericService} with
     * {@link AuthenticateModels.LoginByGenericServiceRequestData}.
     * `serviceName` selects which configured provider integration
     * to invoke (`minLength: 6, maxLength: 32,
     * mustNonNull: true`). `serviceData` is provider-defined;
     * check the backend documentation for the schema each
     * integration expects.
     *
     * Returns the extended
     * {@link AuthenticateModels.GenericServiceAuthenticateResponseData}
     * shape via
     * {@link AuthenticateResponseModels.LoginByGenericServiceOperationResponse}
     * so provider-specific error messages can be surfaced.
     */
    public loginByGenericService(requestData: AuthenticateModels.LoginByGenericServiceRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByGenericServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
        GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByGenericServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByGenericServiceOperationResponse);
    }

    /**
     * Promise-based wrapper around {@link loginByGenericService}.
     */
    public async loginByGenericServiceAsync(requestData: AuthenticateModels.LoginByGenericServiceRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByGenericServiceOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByGenericServiceOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByGenericServiceOperationResponse);
    }

    /**
     * Logs the player in with a Google credential.
     *
     * Backed by {@link OperationCode.LoginByGoogle} with
     * {@link AuthenticateModels.LoginByGoogleRequestData}. The
     * `type` field on the DTO must be a {@link GoogleLoginType}
     * value (`AccessToken` or `IdToken`) so the backend uses the
     * correct validation path.
     */
    public loginByGoogle(requestData: AuthenticateModels.LoginByGoogleRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByGoogleOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
        GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByGoogleOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByGoogleOperationResponse);
    }

    /**
     * Promise-based wrapper around {@link loginByGoogle}.
     */
    public async loginByGoogleAsync(requestData: AuthenticateModels.LoginByGoogleRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByGoogleOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByGoogleOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByGoogleOperationResponse);
    }

    /**
     * Logs the player in with a Google Play Game Services token.
     *
     * Backed by
     * {@link OperationCode.LoginByGooglePlayGameService} with
     * {@link AuthenticateModels.LoginByGooglePlayGameServiceRequestData}.
     * Distinct from {@link loginByGoogle} because the Play Games
     * token comes from a different OAuth surface and is
     * validated against a separate Google endpoint.
     */
    public loginByGooglePlayGameService(requestData: AuthenticateModels.LoginByGooglePlayGameServiceRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByGooglePlayGameServiceOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
        GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByGooglePlayGameServiceOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByGooglePlayGameServiceOperationResponse);
    }

    /**
     * Promise-based wrapper around
     * {@link loginByGooglePlayGameService}.
     */
    public async loginByGooglePlayGameServiceAsync(requestData: AuthenticateModels.LoginByGooglePlayGameServiceRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByGooglePlayGameServiceOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByGooglePlayGameServiceOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByGooglePlayGameServiceOperationResponse);
    }

    /**
     * Logs the player in with a Game Center signature bundle.
     *
     * Backed by {@link OperationCode.LoginByGameCenter} with
     * {@link AuthenticateModels.LoginByGameCenterRequestData}.
     * Apple Game Center authentication is signature-based — the
     * client must supply the player id, name, the public-key URL,
     * the signature, the salt, and the timestamp produced by the
     * iOS Game Center SDK. The backend re-validates the signature
     * against Apple's published public key.
     */
    public loginByGameCenter(requestData: AuthenticateModels.LoginByGameCenterRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByGameCenterOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
        GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByGameCenterOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByGameCenterOperationResponse);
    }

    /**
     * Promise-based wrapper around {@link loginByGameCenter}.
     */
    public async loginByGameCenterAsync(requestData: AuthenticateModels.LoginByGameCenterRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByGameCenterOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByGameCenterOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByGameCenterOperationResponse);
    }

    /**
     * Logs the player in with an iOS-platform device id.
     *
     * Backed by {@link OperationCode.LoginByiOSDeviceId} with
     * {@link AuthenticateModels.LoginByiOSDeviceIdRequestData}.
     * Same constraints / behaviour as
     * {@link loginByAndroidDeviceId} but for iOS device
     * identifiers (typically the Identifier-for-Vendor).
     */
    public loginByiOSDeviceId(requestData: AuthenticateModels.LoginByiOSDeviceIdRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByiOSDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
        GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByiOSDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByiOSDeviceIdOperationResponse);
    }

    /**
     * Promise-based wrapper around {@link loginByiOSDeviceId}.
     */
    public async loginByiOSDeviceIdAsync(requestData: AuthenticateModels.LoginByiOSDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByiOSDeviceIdOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByiOSDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByiOSDeviceIdOperationResponse);
    }

    /**
     * Logs the player in with a Linux-platform device id.
     *
     * Backed by {@link OperationCode.LoginByLinuxDeviceId} with
     * {@link AuthenticateModels.LoginByLinuxDeviceIdRequestData}.
     * Same shape as the other device-id flows — primarily used
     * by dedicated-server clients or Linux-based desktop builds.
     */
    public loginByLinuxDeviceId(requestData: AuthenticateModels.LoginByLinuxDeviceIdRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByLinuxDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
        GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByLinuxDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByLinuxDeviceIdOperationResponse);
    }

    /**
     * Promise-based wrapper around {@link loginByLinuxDeviceId}.
     */
    public async loginByLinuxDeviceIdAsync(requestData: AuthenticateModels.LoginByLinuxDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByLinuxDeviceIdOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByLinuxDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByLinuxDeviceIdOperationResponse);
    }

    /**
     * Logs the player in with a macOS-platform device id.
     *
     * Backed by {@link OperationCode.LoginByMacOSDeviceId} with
     * {@link AuthenticateModels.LoginByMacOSDeviceIdRequestData}.
     */
    public loginByMacOSDeviceId(requestData: AuthenticateModels.LoginByMacOSDeviceIdRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByMacOSDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
        GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByMacOSDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByMacOSDeviceIdOperationResponse);
    }

    /**
     * Promise-based wrapper around {@link loginByMacOSDeviceId}.
     */
    public async loginByMacOSDeviceIdAsync(requestData: AuthenticateModels.LoginByMacOSDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByMacOSDeviceIdOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByMacOSDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByMacOSDeviceIdOperationResponse);
    }

    /**
     * Logs the player in with a Windows-platform device id.
     *
     * Backed by {@link OperationCode.LoginByWindowsDeviceId} with
     * {@link AuthenticateModels.LoginByWindowsDeviceIdRequestData}.
     */
    public loginByWindowsDeviceId(requestData: AuthenticateModels.LoginByWindowsDeviceIdRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByWindowsDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
        GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByWindowsDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByWindowsDeviceIdOperationResponse);
    }

    /**
     * Promise-based wrapper around {@link loginByWindowsDeviceId}.
     */
    public async loginByWindowsDeviceIdAsync(requestData: AuthenticateModels.LoginByWindowsDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByWindowsDeviceIdOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByWindowsDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByWindowsDeviceIdOperationResponse);
    }

    /**
     * Logs the player in with a Windows Phone device id.
     *
     * Backed by
     * {@link OperationCode.LoginByWindowsPhoneDeviceId} with
     * {@link AuthenticateModels.LoginByWindowsPhoneDeviceIdRequestData}.
     * Kept for backward compatibility; new integrations should
     * prefer {@link loginByWindowsDeviceId} on Windows Mobile
     * targets.
     */
    public loginByWindowsPhoneDeviceId(requestData: AuthenticateModels.LoginByWindowsPhoneDeviceIdRequestData, onResponse: Action1<AuthenticateResponseModels.LoginByWindowsPhoneDeviceIdOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
        GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.LoginByWindowsPhoneDeviceIdOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByWindowsPhoneDeviceIdOperationResponse);
    }

    /**
     * Promise-based wrapper around
     * {@link loginByWindowsPhoneDeviceId}.
     */
    public async loginByWindowsPhoneDeviceIdAsync(requestData: AuthenticateModels.LoginByWindowsPhoneDeviceIdRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.LoginByWindowsPhoneDeviceIdOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.LoginByWindowsPhoneDeviceIdOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.LoginByWindowsPhoneDeviceIdOperationResponse);
    }

    /**
     * Creates a new GearN account by username + password and signs
     * it in.
     *
     * Backed by {@link OperationCode.RegisterAccount} with
     * {@link AuthenticateModels.RegisterAccountRequestData}. Same
     * username / password constraints as {@link loginByAccount}.
     *
     * Domain failure: {@link ErrorCode.AccountUsernameExists}
     * when the username is already taken.
     */
    public registerAccount(requestData: AuthenticateModels.RegisterAccountRequestData, onResponse: Action1<AuthenticateResponseModels.RegisterAccountOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
        GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.RegisterAccountOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.RegisterAccountOperationResponse);
    }

    /**
     * Promise-based wrapper around {@link registerAccount}.
     */
    public async registerAccountAsync(requestData: AuthenticateModels.RegisterAccountRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.RegisterAccountOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.RegisterAccountOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.RegisterAccountOperationResponse);
    }

    /**
     * Refreshes the cached auth token.
     *
     * Backed by {@link OperationCode.RefreshAuthToken} with
     * {@link AuthenticateModels.RefreshAuthTokenRequestData}
     * (intentionally empty — the auth context comes from the
     * cached token or from `overrideAuthToken`).
     *
     * Returns
     * {@link AuthenticateResponseModels.RefreshAuthTokenOperationResponse}
     * carrying only the new auth token plus optional ban state —
     * profile fields are **not** included even when
     * `infoRequestParam` was used during the original login.
     *
     * The {@link PeerBase.onResponseHandler} mirror keeps both the
     * cache and the persistent {@link StorageService} entry up to
     * date automatically.
     */
    public refreshAuthToken(requestData: AuthenticateModels.RefreshAuthTokenRequestData, onResponse: Action1<AuthenticateResponseModels.RefreshAuthTokenOperationResponse> = null, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): void {
        GNNetwork.sendViaHttpTRequestTResponse(new AuthenticateRequestModels.RefreshAuthTokenOperationRequest(requestData, timeout), onResponse, overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.RefreshAuthTokenOperationResponse);
    }

    /**
     * Promise-based wrapper around {@link refreshAuthToken}.
     */
    public async refreshAuthTokenAsync(requestData: AuthenticateModels.RefreshAuthTokenRequestData, overrideAuthToken: string = null, overrideSecretKey: string = null, customTags: GNHashtable = null, timeout: number = OperationRequest.defaultTimeOut): Promise<AuthenticateResponseModels.RefreshAuthTokenOperationResponse> {
        return GNNetwork.sendViaHttpTRequestTResponseAsync(new AuthenticateRequestModels.RefreshAuthTokenOperationRequest(requestData, timeout), overrideAuthToken, overrideSecretKey, customTags, AuthenticateResponseModels.RefreshAuthTokenOperationResponse);
    }
}

/**
 * Server-scoped Authenticate sub-namespace — placeholder.
 *
 * Reserved for future server-only authentication operations
 * (delegated login flows, server-side token issuance). Currently
 * exposes no public methods, but is allocated by
 * {@link AuthenticateApi} so the `.server` property name is
 * always defined.
 */
export class ServerAuthenticateApi {
}

/**
 * Admin-scoped Authenticate sub-namespace — placeholder.
 *
 * Reserved for future admin-only authentication operations.
 * Allocated for the same symmetry reason as
 * {@link ServerAuthenticateApi}.
 */
export class AdminAuthenticateApi {
}
