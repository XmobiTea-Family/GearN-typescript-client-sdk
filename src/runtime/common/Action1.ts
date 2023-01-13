export interface Action1<T> {
    invoke: (t: T) => void;
}
