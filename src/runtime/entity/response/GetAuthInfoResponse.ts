import { GNHashtable } from "./../../common/GNData";

interface AuthInfoResponse {
	gnToken: string,
	userId: string,
	isRemove: boolean,
	tsExpire: number,
	otherDatas: GNHashtable,
	tsCreate: number,
	secretKey: string,
}

export class GetAuthInfoResponse {
	public error: string;
	public data?: AuthInfoResponse;

}
