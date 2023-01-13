export interface Action2<T1, T2> {
    invoke: (t1: T1, t2: T2) => void;
}
