export interface User {
    id?: string;
    firstName?: string;
    lastName?: string;
    fullName?: string;

    createdDate?: Date;
    createdBy?: string;

    userName: string;
    password?: string;
    role: string;
}