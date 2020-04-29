import { MemberAccountType } from '../enums/member-account-type.enum';
import { DistributionListType } from '../enums/distributionList-type.enum';
import { ApiProperty } from '@nestjs/swagger';
export class DistributionListMember {
    @ApiProperty()
    id: string;
    @ApiProperty()
    memberId: string;
    @ApiProperty()
    accountType: MemberAccountType;
    @ApiProperty()
    addedBy: string;
    @ApiProperty()
    addedDate: string;
    @ApiProperty()
    type: DistributionListType;
}
