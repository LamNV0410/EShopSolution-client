import axios, { AxiosError, AxiosResponse } from "axios";
import { PaginatorResponse } from "../../../../core/api/responses/PaginatorResponse";
import { ESHOP } from "../../../../core/eshop";
import { UserType } from "../models/user-type";
import { UserTypeRole } from "../models/user-type-role";
import { GetUserTypesPagingRequest } from "../requests/get-user-types-paging-request";

export class UserTypeEndpoint {
    /**
         *  
 /api​/v1​/UserType​/{id}
         */
    private baseUrl: string = ESHOP.options.apiBaseUrls.systemUrl
    constructor() {
        this.baseUrl += '/api/v1/UserTypes'
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
    getAllUserTypeRolesSelect(request: string): Promise<UserTypeRole[]> {
        let endpoint: string = '/actions/usertype-roles-select';
        return new Promise((resolve, reject) => {
            axios.get(`${this.baseUrl}${endpoint}`, { params: request })
                .then((res: AxiosResponse<UserTypeRole[]>) => {
                    resolve(res.data);
                })
                .catch((error: AxiosError) => {
                    console.error(error);
                    reject(error.response?.data);
                });
        });
    }

    getAllUserTypesSelect(): Promise<UserType[]> {
        let endpoint: string = '/actions/usertypes-select';
        return new Promise((resolve, reject) => {
            axios.get(`${this.baseUrl}${endpoint}`)
                .then((res: AxiosResponse<UserType[]>) => {
                    resolve(res.data);
                })
                .catch((error: AxiosError) => {
                    console.error(error);
                    reject(error.response?.data);
                });
        });
    }
    /**
        *   /api​/v1​/UserType​/{id}
            */
    getById(id: string): Promise<UserType> {
        let endpoint: string = `${id}`;
        return new Promise((resolve, reject) => {
            axios.get(`${this.baseUrl}${endpoint}`)
                .then((res: AxiosResponse<UserType>) => {
                    resolve(res.data);
                })
                .catch((error: AxiosError) => {
                    console.error(error);
                    reject(error.response?.data);
                });
        });
    }

}