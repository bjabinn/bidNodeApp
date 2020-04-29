import { OrganizationMemberAccountType } from '../enums/member-account-type.enum';

export class MemberInfo {
    id: string;
    userName: string;
    fullName: string;
    organizationUnit: string;
    accountType: OrganizationMemberAccountType;
}
