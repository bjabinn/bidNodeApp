import { IMemberInfo } from '../interfaces/member.interface';
import { MemberInfo } from '../models/member.model';

export class MemberMapper {
    public static mapToModel(dto: IMemberInfo[]): MemberInfo[] {
        const memberCollection: MemberInfo[] = [];
        dto.map((IMember: IMemberInfo) => {
            const member: MemberInfo = new MemberInfo();
            member.id = IMember.id;
            member.userName = IMember.userName;
            member.fullName = IMember.fullName;
            member.organizationUnit = IMember.organizationUnit;
            member.accountType = IMember.accountType;
            memberCollection.push(member);
        });
        return memberCollection;
    }
}
