export class AuthenticateStatus {
    private authToken: string;
    private userId: string;
    private authTokenTsExpire: number;

    public getAuthTokenTsExpire(): number {
        return this.authTokenTsExpire;
    }

    setAuthTokenTsExpire(tsExpire: number): void {
        this.authTokenTsExpire = tsExpire;
    }

    public getAuthToken(): string {
        return this.authToken;
    }

    setAuthToken(authToken: string): void {
        this.authToken = authToken;
    }

    public getUserId(): string {
        return this.userId;
    }

    setUserId(userId: string): void {
        this.userId = userId;
    }

}
