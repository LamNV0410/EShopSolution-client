export interface User {
    id?: string;
    firstName?: string;
    lastName?: string;
    fullName?: string;
    address?: string;
    phoneNumber?: string;
    email?: string;
    createdDate?: Date;
    createdBy?: string;
    gender: number;
    userName: string;
    password?: string;
    userTypeId: string;
    typeRole?: string;

    permissionRoleId?: string;
    permissionRole?: string;
}