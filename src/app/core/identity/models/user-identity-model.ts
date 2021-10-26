
export interface InfoIdentity {
    userId?: number,
    email?: string,
    fullName?: string,
    avatar?: string,
    permissionValue?: string,
}

export class UserIdentity implements InfoIdentity {
    constructor() {
    }
    version!: number;
    userId!: number;
    email!: string;
    fullName!: string;
    avatar!: string;
    portalId!: number;
    divisionId?: number;
    schoolId?: number;
    deploymentMethod!: string;
    permissionValue!: string;
}
