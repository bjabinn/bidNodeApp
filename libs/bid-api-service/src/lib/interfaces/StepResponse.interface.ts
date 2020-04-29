import { IStepInfo } from './stepInfo.interface';
import { IDocumentsPackage } from './documentPackage.interface';
import { IMeeting } from './meeting.interface';
import { IPhaseHistory } from './phaseHistories.interface';

export interface StepResponse {
    step: IStepInfo;
    documentsPackage: IDocumentsPackage;
    meetings: IMeeting[];
    phaseHistories: IPhaseHistory[];
}
