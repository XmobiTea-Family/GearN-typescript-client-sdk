export interface Action3<T1, T2, T3> {
    invoke: (t1: T1, t2: T2, t3: T3) => void;
}
