/**
 * Trust-boundary discriminator carried with every request.
 *
 * The backend evaluates the active auth token against a different
 * permission table for each role, and the SDK uses the role to
 * pick the correct secret key when calling routes that require
 * one. The role is part of the wire frame produced by
 * {@link OperationHelper.toSocketData} and the URL produced by
 * {@link HttpPeer.send}.
 *
 * Each generated `*Api` namespace exposes the matching
 * `.server` / `.admin` sub-namespaces when the underlying
 * operations support those roles. Application code rarely picks
 * a role manually — call the `.server.*` / `.admin.*` methods
 * instead.
 */
export enum RequestRole {
	/**
	 * Administrative scope. Reserved for operations tooling that
	 * authenticated as an admin account
	 * (`loginByAdminAccount`). The backend evaluates the token
	 * against the admin permission table.
	 */
	Admin = 1,

	/**
	 * Trusted backend / server-to-server scope. Reserved for
	 * trusted backends like a game server or webhook handler
	 * authenticating with a server-side secret key.
	 */
	Server = 2,

	/**
	 * Public client scope. Used by player applications running on
	 * untrusted devices. Most operations exposed by the SDK
	 * default to this role.
	 */
	Client = 3,

}
