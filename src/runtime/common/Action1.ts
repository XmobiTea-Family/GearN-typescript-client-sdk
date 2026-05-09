/**
 * Single-argument, void-returning callback signature.
 *
 * The SDK uses this alias for every "callback that delivers a value"
 * pattern. The most common consumers are the typed response callbacks on
 * the `*Api` wrappers and `GNNetwork.sendVia*` helpers, where the
 * generic parameter `T` is a {@link OperationResponse} subclass:
 *
 * ```ts
 * const onLogin: Action1<AuthenticateResponseModels.LoginByAccountOperationResponse> =
 *     response => {
 *         if (response.hasError()) {
 *             console.warn("login failed", response.getReturnCode());
 *             return;
 *         }
 *         console.log("authToken =", response.getResponseData().authToken);
 *     };
 * GNNetwork.authenticate.loginByAccount(requestData, onLogin);
 * ```
 *
 * @template T  Type of the value that the SDK passes to the callback.
 *              For response callbacks this is the typed response class;
 *              for event callbacks it is {@link OperationEvent}; for
 *              the rare numeric callbacks (`syncTs`) it is `number`.
 *
 * Behaviour notes:
 * - The SDK never inspects the return value.
 * - When the SDK is asked for a fire-and-forget call (callback is
 *   `null`) it skips the invocation entirely. Make sure your call site
 *   is robust to "callback never fires" — typical causes are network
 *   timeouts, transport disabled, or a `null` decoded payload.
 */
export type Action1<T> = (t: T) => void;
