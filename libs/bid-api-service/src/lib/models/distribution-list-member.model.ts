import { MemberAccountType } from '../enums/member-account-type.enum';
import { DistributionListType } from '../enums/distributionList-type.enum';
import { ApiProperty } from '@nestjs/swagger';
export class DistributionListMember {
    id: string;

    memberId: string;

    accountType: MemberAccountType;

    addedBy: string;

    addedDate: string;

    type: DistributionListType;
}
