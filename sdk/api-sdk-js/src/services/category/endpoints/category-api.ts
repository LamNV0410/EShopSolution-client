import { PaginatorResponse } from "../../../core/api/responses/PaginatorResponse";
import { Category } from "../models/category";
import { GetCategoriesRequest } from "../requests/get-categories-request";

export interface CategoryAPI {
    getAll(request: GetCategoriesRequest): Promise<PaginatorResponse<Category>>;
    getById(id: string): Promise<Category>;
    create(category: Category): Promise<Category>;
    update(category: Category): Promise<boolean>;
    delete(id: string): Promise<boolean>;
}