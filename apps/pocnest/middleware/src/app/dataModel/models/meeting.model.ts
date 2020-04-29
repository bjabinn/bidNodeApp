import { MeetingDesignationId } from '../enums/meeting-designation-id.enum';
import { DistributionList } from './distribution-list.model';
import { CirculationPeriod } from './circulation-period.model';
import { FaceToFaceMeeting } from './face-to-face-meeting.model';
import { ApiProperty } from '@nestjs/swagger';
export class Meeting {
    id: string;

    name: MeetingDesignationId;

    distributionList: DistributionList;

    circulationPeriod: CirculationPeriod;

    faceToFaceMeeting: FaceToFaceMeeting;
}
