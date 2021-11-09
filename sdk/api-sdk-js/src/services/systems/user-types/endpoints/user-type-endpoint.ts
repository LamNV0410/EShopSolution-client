import axios, { AxiosError, AxiosResponse } from "axios";
import { PaginatorResponse } from "../../../../core/api/responses/PaginatorResponse";
import { UserType } from "../models/user-type";
import { GetUserTypesPagingRequest } from "../requests/get-user-types-paging-request";

export class UserTypeEndpoint {
    /**
         *  
         */
    private baseUrl: string = 'http://localhost:30001'
    constructor() {
        this.baseUrl += '/api/v1/users'
    }
    getAllPaging(request: GetUserTypesPagingRequest): Promise<PaginatorResponse<UserType>> {
        let endpoint: string = '';
        return new Promise((resolve, reject) => {
            axios.get(`${this.baseUrl}${endpoint}`, { params: request })
                .then((res: AxiosResponse<PaginatorResponse<UserType>>) => {
                    resolve(res.data);
                })
                .catch((error: AxiosError) => {
                    console.error(error);
                    reject(error.response?.data);
                });
        });
    }

    create(user: UserType): Promise<UserType> {
        let endpoint: string = '';
        return new Promise((resolve, reject) => {
            axios.post(`${this.baseUrl}${endpoint}`, user)
                .then((res: AxiosResponse<UserType>) => {
                    resolve(res.data);
                })
                .catch((error: AxiosError) => {
                    console.error(error);
                    reject(error.response?.data);
                });
        });
    }

    /** Get for combobox */
    getAllSelect(request: string): Promise<UserType[]> {
        let endpoint: string = '';
        return new Promise((resolve, reject) => {
            axios.get(`${this.baseUrl}${endpoint}`, { params: request })
                .then((res: AxiosResponse<UserType[]>) => {
                    resolve(res.data);
                })
                .catch((error: AxiosError) => {
                    console.error(error);
                    reject(error.response?.data);
                });
        });
    }

}