import { PaginatorResponse } from "../../../../core/api/responses/PaginatorResponse";
import { User } from "../models/user";
import { GetUsersPagingRequest } from "../requests/get-users-paging-request";
import { UserDTO } from "../responses/user-dto";
export declare class UsersEndpoint {
    /**
     *
     */
    private baseUrl;
    constructor();
    getAll(request: GetUsersPagingRequest): Promise<PaginatorResponse<UserDTO>>;
    create(request: User): Promise<User>;
    edit(id: string, request: User): Promise<User>;
    getById(id: string): Promise<UserDTO>;
}
