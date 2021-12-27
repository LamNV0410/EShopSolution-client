import { PaginatorResponse } from "../../../../core/api/responses/PaginatorResponse";
import { UserType } from "../models/user-type";
import { UserTypeRole } from "../models/user-type-role";
import { GetUserTypesPagingRequest } from "../requests/get-user-types-paging-request";
export declare class UserTypeEndpoint {
    /**
         *
 /api​/v1​/UserType​/{id}
         */
    private baseUrl;
    constructor();
    getAllPaging(request: GetUserTypesPagingRequest): Promise<PaginatorResponse<UserType>>;
    create(user: UserType): Promise<UserType>;
    update(id: string, user: UserType): Promise<UserType>;
    /** Get for combobox */
    getAllUserTypeRolesSelect(request: string): Promise<UserTypeRole[]>;
    getAllUserTypesSelect(): Promise<UserType[]>;
    /**
        *   /api​/v1​/UserType​/{id}
            */
    getById(id: string): Promise<UserType>;
}
