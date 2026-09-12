import { RequestRole } from "./../constant/enumType/RequestRole";
import { RequestType } from "./../constant/enumType/RequestType";
import { OperationRequest } from "./../entity/OperationRequest";
import { CodeHelper } from "./CodeHelper";

/**
 * Wire-shape encoder for outbound socket frames.
 *
 * The GearN socket protocol expects an array (not a JSON object) so
 * that the most common case — request + response correlation —
 * survives MsgPack encoding without paying the per-key overhead of
 * the map type. {@link toSocketData} builds that array.
 *
 * The corresponding HTTP path uses a different shape (typed JSON
 * body keyed by parameter codes) and is **not** produced through
 * this helper; the Axios call inside {@link HttpPeer} talks
 * directly to {@link GNHashtable.toData}.
 */
export class OperationHelper {
    private static readonly RequestIdCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    private static readonly LengthCharacters = 16;

    public static randomRequestId(): string {
        let result = "";

        for (let i = 0; i < OperationHelper.LengthCharacters; i++) {
            const randomIndex = Math.floor(Math.random() * OperationHelper.RequestIdCharacters.length);
            result += OperationHelper.RequestIdCharacters[randomIndex];
        }

        return result;
    }

    /**
     * Builds the wire-format array sent over the socket.
     *
     * Layout produced:
     * - Index 0: request-type display name (e.g. `"authenticate"`).
     * - Index 1: request-role display name (e.g. `"client"`).
     * - Index 2: operation code string from
     *   {@link OperationCode}.
     * - Index 3: parameter bag dumped via
     *   {@link GNHashtable.toData}, or `null` when the request has
     *   no parameters.
     * - Index 4 (only when `requestId !== null`): request id used by
     *   the backend to correlate the response. Omitted entirely
     *   for fire-and-forget calls.
     *
     * The display-name conversions go through {@link CodeHelper}
     * which produces the lowercased-first-letter form the backend
     * expects (e.g. `RequestType.Authenticate` → `"authenticate"`).
     *
     * @param requestType Logical request category.
     * @param role        Permission scope.
     * @param request     Pre-built request to encode.
     * @returns           Array ready to be MsgPack-encoded /
     *                    JSON-stringified by the caller.
     */
    public static toSocketData(requestType: RequestType, role: RequestRole, request: OperationRequest): any {
        let requestId = request.getRequestId();

        if (requestId == null)
            return [
                CodeHelper.getRequestTypeName(requestType),
                CodeHelper.getRequestRoleName(role),
                request.getOperationCode(),
                (request.getParameters() == null) ? null : request.getParameters().toData()
            ];
        else
            return [
                CodeHelper.getRequestTypeName(requestType),
                CodeHelper.getRequestRoleName(role),
                request.getOperationCode(),
                (request.getParameters() == null) ? null : request.getParameters().toData(),
                requestId
            ];
    }

    /**
     * Reserved for future HTTP payload conversion.
     *
     * The current HTTP path bypasses this helper because the
     * payload it sends is already shaped exactly like the inner
     * `GNHashtable` (the operation code, request type and role go
     * into the URL instead of the body). The method exists so a
     * future protocol revision that needs HTTP-side restructuring
     * has a natural home for the new logic without changing the
     * call sites.
     *
     * Always returns `null` today.
     */
    public static toHttpData(requestType: RequestType, role: RequestRole, request: OperationRequest): any {
        return null;
    }
}
