/**
 * Zero-argument, void-returning callback signature.
 *
 * The SDK uses `Action*` aliases throughout the public API as a single,
 * recognisable shorthand for "callback that the SDK will invoke at some
 * point". Compared to the inline `() => void` type literal, the alias
 * gives every signature a stable name that turns up in IDE auto-complete
 * and in generated `.d.ts` files, which makes it easier for application
 * code to declare a matching variable type:
 *
 * ```ts
 * const onConnected: Action0 = () => {
 *     console.log("socket connected");
 * };
 * GNNetwork.subscriberOnConnectHandler(onConnected);
 * GNNetwork.unscriberOnConnectHandler(onConnected); // same reference
 * ```
 *
 * Use `Action0` for fire-and-forget signals where the callback only
 * needs to know that the event happened (connect, disconnect, generic
 * "done"). For callbacks that carry data, prefer the corresponding
 * arity-specific alias: {@link Action1}, {@link Action2},
 * {@link Action3}, {@link Action4}.
 *
 * Return value: callbacks are expected to return `void`. The SDK never
 * inspects the return value; throwing inside the callback propagates to
 * the SDK call site, which is usually inside the {@link ServiceUpdate}
 * tick or an HTTP/socket response dispatch — uncaught throws there are
 * surfaced through `console.error`.
 */
export type Action0 = () => void;
