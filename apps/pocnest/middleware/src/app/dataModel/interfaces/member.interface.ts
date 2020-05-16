import { OrganizationMemberAccountType } from '../enums/member-account-type.enum';

export interface IMemberInfo {
    id: string;
    userName: string;
    fullName: string;
    organizationUnit: string;
    accountType: OrganizationMemberAccountType;
}
