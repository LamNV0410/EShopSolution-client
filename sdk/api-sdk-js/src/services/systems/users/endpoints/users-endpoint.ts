import axios, { AxiosError, AxiosResponse } from "axios";
import { PaginatorResponse } from "../../../../core/api/responses/PaginatorResponse";
import { User } from "../models/user";
import { GetUsersPagingRequest } from "../requests/get-users-paging-request";

export class UsersEndpoint {
    /**
     *  
     */
    private baseUrl: string = 'http://localhost:30001'
    constructor() {
        this.baseUrl += '/api/v1/users'
    }
    getAll(request: GetUsersPagingRequest): Promise<PaginatorResponse<User>> {
        let endpoint: string = '';
        return new Promise((resolve, reject) => {
            axios.get(`${this.baseUrl}${endpoint}`, { params: request })
                .then((res: AxiosResponse<PaginatorResponse<User>>) => {
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
}