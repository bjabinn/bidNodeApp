import { MemberAccountType } from '../enums/member-account-type.enum';

export interface IDistributionList {
    id: string;
    members: IDistributionListMember[];
}

export interface IDistributionListMember {
    id: string;
    memberId: string;
    accountType: MemberAccountType;
    addedBy: string;
    addedDate: string;
}
