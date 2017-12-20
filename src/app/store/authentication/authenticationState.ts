export type User = { account: any, apikey: string, jwt: string };

export interface AuthenticationState {
    user: User;
    userIsLogged: boolean;
}