import { encode, decode } from "@msgpack/msgpack";

/**
 * Thin wrapper around the `@msgpack/msgpack` codec.
 *
 * Used by both transports for binary wire-format serialisation:
 * - {@link NetworkingPeerSocketIOClient.emit} encodes outbound socket
 *   frames when {@link MessageType.MsgPack} is selected.
 * - {@link NetworkingSocketPeerBase.service} decodes inbound socket
 *   frames flagged as MsgPack via {@link SocketPacket.isMsgPack}.
 * - {@link NetworkingPeerAxiosRequest.postRequestAxios} encodes the
 *   HTTP request body when MsgPack is selected (Node.js / Cocos
 *   only — browser HTTP is downgraded to JSON inside
 *   {@link HttpPeer.send}).
 * - {@link HttpPeer.onSendOperationRequestResponse} decodes
 *   non-JSON HTTP response bodies via {@link deserialize}.
 *
 * The wrapper exists so the SDK does not import the codec directly
 * from every call site; centralising the import also makes it
 * trivial to swap the underlying library if a future port needs a
 * different MsgPack implementation.
 */
export class MessagePackConverterService {
    /**
     * Encodes any JSON-compatible value into a MessagePack byte
     * buffer.
     *
     * The codec accepts the same value space as `JSON.stringify`
     * (objects, arrays, numbers, strings, booleans, `null`) plus a
     * few extras such as `Uint8Array` (encoded as the MsgPack
     * `bin` type). Cyclic graphs throw — the SDK never builds them
     * because every payload originates from
     * {@link GNHashtable.toData} / {@link GNArray.toData} which
     * produce a tree.
     *
     * @param tObj Value to encode. Pass the result of
     *             `gnHashtable.toData()` for SDK request payloads.
     * @returns MessagePack-encoded bytes ready for transmission.
     */
    public static serialize<T>(tObj: T): Uint8Array {
        return encode(tObj);
    }

    /**
     * Decodes a MessagePack byte buffer into a plain JavaScript
     * value.
     *
     * The result is cast to `T` for caller convenience; the runtime
     * shape always reflects what the codec actually decoded
     * (typically a plain object that the SDK feeds into
     * {@link GNHashtable.builder}).
     *
     * @param data Bytes received from the transport.
     * @returns Decoded value cast to `T`.
     */
    public static deserialize<T>(data: Uint8Array): T {
        return <T>decode(data);
    }

}
