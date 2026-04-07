import { GNHashtable } from "./../../common/GNData";

/**
 * Describes AuthInfoResponse.
 */
interface AuthInfoResponse {
	gnToken: string;
	userId: string;
	isRemove: boolean;
	tsExpire: number;
	otherDatas: GNHashtable;
	tsCreate: number;
	secretKey: string;
}

/**
 * Represents the HTTP response returned by `GNNetwork.getAuthInfo()`.
 */
export class GetAuthInfoResponse {
	public error: string;
	public data?: AuthInfoResponse;

}
