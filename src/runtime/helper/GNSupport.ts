
export class GNSupport {
    private static _isBrowser: boolean;

    static init(): void {
        this._isBrowser = (typeof window !== "undefined");
    }

    public static isBrowser(): boolean {
        return this._isBrowser;
    }

}
