import { DistributionListMember } from './distribution-list-member.model';
import { ApiProperty } from '@nestjs/swagger';
export class DistributionList {
    @ApiProperty()
    id: string;
    @ApiProperty()
    members: DistributionListMember[];
}
