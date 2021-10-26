import { UserLoginRequest } from "../requests/user-login-request";
import { UserLoginResponse } from "../responses/user-login-response";
export declare class AuthenticationEndpoint {
    endpoint: string;
    private baseUrl;
    /**
     *
     */
    constructor();
    login(request: UserLoginRequest): Promise<UserLoginResponse>;
}
