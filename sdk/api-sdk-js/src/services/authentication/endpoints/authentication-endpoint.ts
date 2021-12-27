import axios, { AxiosError, AxiosResponse } from "axios";
import { BaseUrl } from "../../../../configurations/base-url";
import { ESHOP } from "../../../core/eshop";
import { UserLoginRequest } from "../requests/user-login-request";
import { UserLoginResponse } from "../responses/user-login-response";

export class AuthenticationEndpoint {
    // TODO : Endpoint :
    endpoint = 'api/v1/authentication/login';
    private baseUrl: string = ESHOP.options.apiBaseUrls.authenticationUrl;
    /**
     *
     */
    constructor() {
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