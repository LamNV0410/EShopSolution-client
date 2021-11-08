import { PaginatorRequest } from "../../../core/api/requests/PaginatorRequest ";

export interface GetCategoriesRequest {
    keyword?: string;

    fromDate?: Date;
    toDate?: Date;

    page: number;
    size: number

    sortDirection: string;
    sortField: string;
}