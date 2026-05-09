/**
 * Two-argument, void-returning callback signature.
 *
 * Reserved for callbacks that need to surface two pieces of data
 * simultaneously without forcing the caller to allocate a tuple or a
 * dedicated DTO. Most public callbacks in the SDK only carry a single
 * value (see {@link Action1}) so this alias appears mainly in
 * lower-level transport wiring and in user-supplied integration code
 * that wants to extend the SDK with multi-argument hooks.
 *
 * @template T1 Type of the first value passed to the callback.
 * @template T2 Type of the second value passed to the callback.
 *
 * Example:
 * ```ts
 * type ProgressHandler = Action2<number, number>; // (sentBytes, totalBytes)
 * ```
 *
 * Same return-value contract as {@link Action0}: the SDK never reads
 * the return value, throws bubble out to the caller.
 */
export type Action2<T1, T2> = (t1: T1, t2: T2) => void;
