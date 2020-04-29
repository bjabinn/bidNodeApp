import { DistributionListMember } from './distribution-list-member.model';
import { ApiProperty } from '@nestjs/swagger';
export class DistributionList {
    id: string;

    members: DistributionListMember[];
}
