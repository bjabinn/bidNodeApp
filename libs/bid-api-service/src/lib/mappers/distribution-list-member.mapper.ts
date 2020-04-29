import { DistributionListMemberDto } from '../dtos/distribution-list-member.dto';
import { DistributionListMember } from '../models/distribution-list-member.model';
import { IDistributionListMember } from '../interfaces/distribution-list.interface';

export class DistributionListMemberMapper {
    public static mapToModel(
        dto: IDistributionListMember[]
    ): DistributionListMember[] {
        const distributionListMemberCollection: DistributionListMember[] = [];
        dto.map((member: IDistributionListMember) => {
            const distributionListMember: DistributionListMember = new DistributionListMember();
            distributionListMember.id = member.id;
            distributionListMember.accountType = member.accountType;
            distributionListMember.memberId = member.memberId;
            distributionListMember.addedBy = member.addedBy;
            distributionListMember.addedDate = member.addedDate;
            distributionListMemberCollection.push(distributionListMember);
        });
        return distributionListMemberCollection;
    }
}
