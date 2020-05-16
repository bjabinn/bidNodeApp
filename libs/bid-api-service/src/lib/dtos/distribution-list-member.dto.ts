import { MemberAccountType } from '../enums/member-account-type.enum'; 

export interface DistributionListMemberDto {
    id: string;
    memberId: string;
    accountType: MemberAccountType;
    addedBy: string;
    addedDate: string;
}