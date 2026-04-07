import { encode, decode } from "@msgpack/msgpack";

/**
 * Wraps MessagePack serialization helpers used by the SDK transports.
 */
export class MessagePackConverterService {
	/**
	 * Serializes a value into MessagePack bytes.
	 */
	public static serialize<T>(tObj: T): Uint8Array {
		return encode(tObj);
	}

	/**
	 * Deserializes MessagePack bytes back into a typed value.
	 */
	public static deserialize<T>(data: Uint8Array): T {
		return <T>decode(data);
	}

}
