/**
 * Three-argument, void-returning callback signature.
 *
 * Companion to {@link Action0}, {@link Action1} and {@link Action2}.
 * Provided for symmetry so that integration code can declare callbacks
 * of any arity without inventing local type aliases. The public SDK
 * surface itself rarely uses arity ≥ 3 callbacks — they appear mostly
 * in advanced custom transports or testing harnesses.
 *
 * @template T1 First argument type.
 * @template T2 Second argument type.
 * @template T3 Third argument type.
 *
 * Same return-value contract as {@link Action0}: callbacks are expected
 * to return `void`; throws propagate to the SDK call site.
 */
export type Action3<T1, T2, T3> = (t1: T1, t2: T2, t3: T3) => void;
