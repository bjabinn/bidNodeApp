import { DistributionListMemberDto } from './distribution-list-member.dto'; 

export interface DistributionListDto {
    id: string;
    members: DistributionListMemberDto[];
}