/**
 * In-memory cache of the auth-related state shared across the SDK.
 *
 * Owned by {@link NetworkingPeer}; populated during {@link GNNetwork.init}
 * from the persisted entries on {@link StorageService} (keys
 * `[GearN]_AUTH_TOKEN_KEY` and `[GearN]_USER_ID_KEY`) and refreshed
 * automatically by {@link PeerBase.onResponseHandler} every time a
 * successful response carries a new `authToken` or `userId`.
 *
 * Lifecycle and consistency:
 * - The instance lives for the lifetime of the JS realm; there is no
 *   `dispose()`.
 * - Mutations are immediately visible to every caller because
 *   {@link NetworkingPeer.sendViaSocket} / `sendViaHttp` read the
 *   current values right before each send.
 * - Mutating the fields directly bypasses the persistent storage
 *   layer. If you need a persisted update prefer
 *   {@link GNNetwork.setNewAuthenticateStatus}, which writes through
 *   to both {@link StorageService} and this cache.
 */
export class AuthenticateStatus {
	/**
	 * Cached auth token used as the default value sent with every
	 * authenticated request when the caller does not pass an explicit
	 * override.
	 */
	private authToken: string;
	/**
	 * Cached user id resolved from the most recent successful auth
	 * response. Updated together with {@link authToken} during the
	 * normal login / refresh flows.
	 */
	private userId: string;

	/**
	 * Returns the cached auth token.
	 *
	 * @returns Token string, or an empty string when no successful
	 *          login has happened yet (and storage held no prior
	 *          value).
	 */
	public getAuthToken(): string {
		return this.authToken;
	}

	/**
	 * Updates the cached auth token in memory only.
	 *
	 * Called automatically by the response handler when a successful
	 * response carries a fresh `authToken`. Application code should
	 * normally use {@link GNNetwork.setNewAuthenticateStatus} so that
	 * the change is also written to {@link StorageService}.
	 *
	 * @param authToken New token. Pass `""` to clear the cached value
	 *                  without persisting; pass via the public helper
	 *                  if you also want the persisted entry cleared.
	 */
	setAuthToken(authToken: string): void {
		this.authToken = authToken;
	}

	/**
	 * Returns the cached user id.
	 *
	 * @returns User id string, or an empty string when no successful
	 *          login has happened yet.
	 */
	public getUserId(): string {
		return this.userId;
	}

	/**
	 * Updates the cached user id in memory only.
	 *
	 * Same caveat as {@link setAuthToken}: bypasses
	 * {@link StorageService}. Use
	 * {@link GNNetwork.setNewAuthenticateStatus} for a persisted update.
	 *
	 * @param userId New user id.
	 */
	setUserId(userId: string): void {
		this.userId = userId;
	}

}
