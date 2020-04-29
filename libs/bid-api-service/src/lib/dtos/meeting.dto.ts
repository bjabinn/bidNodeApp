import { MeetingDesignationDto } from './meeting-designation.dto'; 
import { DistributionListDto } from './distribution-list.dto'; 
import { CirculationPeriodDto } from './circulation-period.dto'; 
import { FaceToFaceMeetingDto } from './face-to-face-meeting.dto'; 

export interface MeetingDto {
    id: string;
    name: MeetingDesignationDto;
    distributionList: DistributionListDto;
    circulationPeriod: CirculationPeriodDto;
    faceToFaceMeeting: FaceToFaceMeetingDto;
}