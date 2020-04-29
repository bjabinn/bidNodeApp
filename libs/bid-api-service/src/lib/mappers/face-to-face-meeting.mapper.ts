import { FaceToFaceMeeting } from '../models/face-to-face-meeting.model';
import { IFaceToFaceMeeting } from '../interfaces/face-to-face-meeting.interface';

export class FaceToFaceMeetingMapper {
    static mapToModel(dto: IFaceToFaceMeeting): FaceToFaceMeeting {
        const faceToFaceMeeting: FaceToFaceMeeting = new FaceToFaceMeeting();
        faceToFaceMeeting.id = dto.id;
        faceToFaceMeeting.date = dto.date;
        faceToFaceMeeting.room = dto.room;
        return faceToFaceMeeting;
    }
}
