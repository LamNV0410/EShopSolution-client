import axios, { AxiosError, AxiosResponse } from "axios";
import { PaginatorResponse } from "../../../core/api/responses/PaginatorResponse";
import { ESHOP } from "../../../core/eshop";
import { Category } from "../models/category";
import { GetCategoriesRequest } from "../requests/get-categories-request";
import { CategoryAPI } from "./category-api";

export class CategoryEndpoint implements CategoryAPI {
    /**
     *  
     */
    private baseUrl: string = ESHOP.options.apiBaseUrls.productUrl
    constructor() {
        this.baseUrl += '/api/v1/categories'
    }
    getAll(request: GetCategoriesRequest): Promise<PaginatorResponse<Category>> {
        let endpoint: string = '';
        return new Promise((resolve, reject) => {
            axios.get(`${this.baseUrl}${endpoint}`, { params: request })
                .then((res: AxiosResponse<PaginatorResponse<Category>>) => {
                    resolve(res.data);
                })
                .catch((error: AxiosError) => {
                    console.error(error);
                    reject(error.response?.data);
                });
        });
    }
    getById(id: string): Promise<Category> {
        let endpoint: string = `/${id}`;
        return new Promise((resolve, reject) => {
            axios.get(`${this.baseUrl}${endpoint}`, { params: id })
                .then((res: AxiosResponse<Category>) => {
                    resolve(res.data);
                })
                .catch((error: AxiosError) => {
                    console.error(error);
                    reject(error.response?.data);
                });
        });
    }
    create(category: Category): Promise<Category> {
        let endpoint: string = ``;
        return new Promise((resolve, reject) => {
            axios.post(`${this.baseUrl}${endpoint}`, category)
                .then((res: AxiosResponse<Category>) => {
                    resolve(res.data);
                })
                .catch((error: AxiosError) => {
                    console.error(error);
                    reject(error.response?.data);
                });
        });
    }
    update(category: Category): Promise<boolean> {
        let endpoint: string = `/${category.id}`;
        return new Promise((resolve, reject) => {
            axios.patch(`${this.baseUrl}${endpoint}`, category)
                .then((res: AxiosResponse<boolean>) => {
                    resolve(res.data);
                })
                .catch((error: AxiosError) => {
                    console.error(error);
                    reject(error.response?.data);
                });
        });
    }
    delete(id: string): Promise<boolean> {
        let endpoint: string = `/${id}`;
        return new Promise((resolve, reject) => {
            axios.delete(`${this.baseUrl}${endpoint}`, { params: id })
                .then((res: AxiosResponse<boolean>) => {
                    resolve(res.data);
                })
                .catch((error: AxiosError) => {
                    console.error(error);
                    reject(error.response?.data);
                });
        });
    }
}

function Injectable() {
    throw new Error("Function not implemented.");
}
