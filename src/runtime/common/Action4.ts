/**
 * Four-argument, void-returning callback signature.
 *
 * Highest arity provided by the `Action*` family. The SDK exports it
 * for completeness — most public APIs use {@link Action0} or
 * {@link Action1}, but advanced integrations (custom multipart upload
 * flows, multi-stage progress reporters) occasionally find it
 * convenient to pass four positional values without first wrapping them
 * in a DTO.
 *
 * @template T1 First argument type.
 * @template T2 Second argument type.
 * @template T3 Third argument type.
 * @template T4 Fourth argument type.
 *
 * Same return-value contract as {@link Action0}.
 */
export type Action4<T1, T2, T3, T4> = (t1: T1, t2: T2, t3: T3, t4: T4) => void;
