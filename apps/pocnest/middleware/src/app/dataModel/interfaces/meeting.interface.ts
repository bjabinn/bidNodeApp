import { MeetingDesignationId } from '../enums/meeting-designation-id.enum';
import { IDistributionList } from './distribution-list.interface';
import { ICirculationPeriod } from './circulation-period.interface';
import { IFaceToFaceMeeting } from './face-to-face-meeting.interface';

export interface IMeeting {
    id: string;
    name: MeetingDesignationId;
    distributionList: IDistributionList;
    circulationPeriod: ICirculationPeriod;
    faceToFaceMeeting: IFaceToFaceMeeting;
}
