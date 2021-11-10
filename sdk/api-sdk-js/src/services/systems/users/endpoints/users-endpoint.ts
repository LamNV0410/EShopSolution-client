import axios, { AxiosError, AxiosResponse } from "axios";
import { PaginatorResponse } from "../../../../core/api/responses/PaginatorResponse";
import { ESHOP } from "../../../../core/eshop";
import { User } from "../models/user";
import { GetUsersPagingRequest } from "../requests/get-users-paging-request";
import { UserDTO } from "../responses/user-dto";

export class UsersEndpoint {
    /**
     *  
     */
    private baseUrl: string = ESHOP.options.apiBaseUrls.systemUrl
    constructor() {
        this.baseUrl += '/api/v1/users'
    }
    getAll(request: GetUsersPagingRequest): Promise<PaginatorResponse<UserDTO>> {
        let endpoint: string = '';
        return new Promise((resolve, reject) => {
            axios.get(`${this.baseUrl}${endpoint}`, { params: request })
                .then((res: AxiosResponse<PaginatorResponse<UserDTO>>) => {
                    resolve(res.data);
                })
                .catch((error: AxiosError) => {
                    console.error(error);
                    reject(error.response?.data);
                });
        });
    }

    create(request: User): Promise<User> {
        let endpoint: string = '';
        return new Promise((resolve, reject) => {
            axios.post(`${this.baseUrl}${endpoint}`, request)
                .then((res: AxiosResponse<User>) => {
                    resolve(res.data);
                })
                .catch((error: AxiosError) => {
                    console.error(error);
                    reject(error.response?.data);
                });
        });
    }

    getById(id: string): Promise<UserDTO> {
        let endpoint: string = `${id}`;
        return new Promise((resolve, reject) => {
            axios.get(`${this.baseUrl}/${endpoint}`)
                .then((res: AxiosResponse<UserDTO>) => {
                    resolve(res.data);
                })
                .catch((error: AxiosError) => {
                    console.error(error);
                    reject(error.response?.data);
                });
        });
    }
}