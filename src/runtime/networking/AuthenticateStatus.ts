export class AuthenticateStatus {
    private authToken: string;
    private userId: string;

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
