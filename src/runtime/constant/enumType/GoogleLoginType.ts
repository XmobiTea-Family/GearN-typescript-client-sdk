/**
 * Discriminator for the Google credential supplied to
 * `loginByGoogle` / `linkGoogle`.
 *
 * Google's identity stack issues two distinct token types. The
 * GearN backend cannot tell them apart from the wire, so the
 * client passes this enum alongside the `token` field to indicate
 * which validation path the backend should run.
 *
 * Used by {@link AuthenticateModels.LoginByGoogleRequestData.type}
 * and the matching `linkGoogle` model.
 */
export enum GoogleLoginType {
    /**
     * OAuth 2.0 access token obtained from a server-side or client
     * SDK login flow. Validated by the backend by introspecting
     * the token against Google's userinfo endpoint.
     */
    AccessToken = 1,

    /**
     * OpenID Connect ID token (JWT). Validated by the backend by
     * verifying the signature against Google's published JWKS.
     * Preferred for native sign-in flows because the JWT contains
     * the user identity directly.
     */
    IdToken = 2,

}
