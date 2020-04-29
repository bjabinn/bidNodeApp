import { DistributionList } from '../models/distribution-list.model';
import { DistributionListMemberMapper } from './distribution-list-member.mapper';
import { IDistributionList } from '../interfaces/distribution-list.interface';

export class DistributionListMapper {
    public static mapToModel(dto: IDistributionList): DistributionList {
        const distributionList: DistributionList = new DistributionList();
        distributionList.id = dto.id;
        distributionList.members = DistributionListMemberMapper.mapToModel(
            dto.members
        );
        return distributionList;
    }
}
