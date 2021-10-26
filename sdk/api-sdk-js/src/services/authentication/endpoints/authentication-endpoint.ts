import axios, { AxiosError, AxiosResponse } from "axios";
import { BaseUrl } from "../../../../configurations/base-url";
import { UserLoginRequest } from "../requests/user-login-request";
import { UserLoginResponse } from "../responses/user-login-response";

export class AuthenticationEndpoint {
    // TODO : Endpoint :
    endpoint = 'api/v1/auth/login';
    private baseUrl: string = '';
    /**
     *
     */
    constructor() {
        this.baseUrl = BaseUrl.getBaseUrl();
    }

    login(request: UserLoginRequest): Promise<UserLoginResponse> {
        return new Promise((resolve, reject) => {
            axios.post(`${this.baseUrl}/${this.endpoint}`, request)
                .then((res: AxiosResponse<UserLoginResponse>) => {
                    resolve(res.data);
                })
                .catch((error: AxiosError) => {
                    console.error(error);
                    reject(error.response?.data);
                });
        });
    }
}