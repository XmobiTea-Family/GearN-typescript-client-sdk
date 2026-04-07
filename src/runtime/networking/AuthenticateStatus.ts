/**
 * Tracks the cached authentication state used by the SDK.
 */
export class AuthenticateStatus {
	private authToken: string;
	private userId: string;

	/**
	 * Returns the cached auth token.
	 */
	public getAuthToken(): string {
		return this.authToken;
	}

	/**
	 * Updates the cached auth token.
	 */
	setAuthToken(authToken: string): void {
		this.authToken = authToken;
	}

	/**
	 * Returns the cached user id.
	 */
	public getUserId(): string {
		return this.userId;
	}

	/**
	 * Updates the cached user id.
	 */
	setUserId(userId: string): void {
		this.userId = userId;
	}

}
