import { GNHashtable } from "./../../common/GNData";

/**
 * Decoded shape of the `getAuthInfo` HTTP endpoint payload.
 *
 * Populated only when the endpoint returned a `200` response with a
 * non-error envelope (`{ data: ..., error: null }`). The fields
 * mirror the columns the GearN backend stores for an issued auth
 * token.
 */
interface AuthInfoResponse {
	/**
	 * The raw GearN auth token the SDK normally caches in
	 * {@link AuthenticateStatus}. Returned here so admin tooling
	 * can confirm which exact token the backend resolved.
	 */
	gnToken: string;
	/** User id this token is bound to. */
	userId: string;
	/**
	 * Whether the token was logically removed (revoked by the
	 * backend, e.g. after a forced logout). When `true` the token
	 * is no longer valid for any operation.
	 */
	isRemove: boolean;
	/**
	 * Absolute expiration timestamp in milliseconds since epoch.
	 * The SDK does not refresh the token automatically; the
	 * application is expected to call
	 * `GNNetwork.authenticate.refreshAuthToken` before this
	 * deadline.
	 */
	tsExpire: number;
	/**
	 * Custom provider data captured at login time
	 * (`LoginByGenericService` and friends). Re-shaped from the
	 * raw JSON object into a {@link GNHashtable} by
	 * {@link NetworkingPeer.getAuthInfo} so callers can use the
	 * typed accessors.
	 */
	otherDatas: GNHashtable;
	/** Issue timestamp in milliseconds since epoch. */
	tsCreate: number;
	/** Secret key bound to the token (admin context only). */
	secretKey: string;
}

/**
 * Top-level wrapper returned by
 * {@link GNNetwork.getAuthInfo} / `getAuthInfoAsync`.
 *
 * The wrapper always carries either an `error` string or a `data`
 * payload, never both. Application code typically inspects `error`
 * first and falls back to `data` once the error path is ruled out.
 */
export class GetAuthInfoResponse {
	/**
	 * Transport-level error message returned by the backend, or
	 * `null` when the call succeeded. The SDK populates this on
	 * non-200 responses, JSON parse failures, and any captured
	 * Axios exception.
	 */
	public error: string;
	/**
	 * Decoded auth-info payload. Defined only when {@link error}
	 * is `null`.
	 */
	public data?: AuthInfoResponse;

}
