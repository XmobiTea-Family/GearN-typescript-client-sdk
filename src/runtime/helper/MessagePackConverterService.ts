import { encode, decode } from "@msgpack/msgpack";

export class MessagePackConverterService {
	public static serialize<T>(tObj: T): Uint8Array {
		return encode(tObj);
	}

	public static deserialize<T>(data: Uint8Array): T {
		return <T>decode(data);
	}

}
