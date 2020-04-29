import { Meeting } from '../models/meeting.model';
import { DistributionListMapper } from './distribution-list.mapper';
import { CirculationPeriodMapper } from './circulation-period.mapper';
import { FaceToFaceMeetingMapper } from './face-to-face-meeting.mapper';
import { IMeeting } from '../interfaces/meeting.interface';

export class MeetingMapper {
    public static mapToModel(dto: IMeeting[]): Meeting[] {
        const meetingCollection: Meeting[] = [];
        dto.map((meetingItem: IMeeting) => {
            const meeting: Meeting = new Meeting();
            meeting.id = meetingItem.id;
            meeting.name = meetingItem.name;
            meeting.distributionList = DistributionListMapper.mapToModel(
                meetingItem.distributionList
            );
            meeting.circulationPeriod = CirculationPeriodMapper.mapToModel(
                meetingItem.circulationPeriod
            );
            meeting.faceToFaceMeeting = FaceToFaceMeetingMapper.mapToModel(
                meetingItem.faceToFaceMeeting
            );
            meetingCollection.push(meeting);
        });
        return meetingCollection;
    }
}
