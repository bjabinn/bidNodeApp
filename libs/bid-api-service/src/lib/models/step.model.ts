import { StepInfo } from '../models/stepInfo.model';
import { DocumentsPackage } from '../models/documentPackage.model';
import { Meeting } from './meeting.model';
import { PhaseHistory } from '../models/phaseHistories.model';
import { ApiProperty } from '@nestjs/swagger';
export class Step {
    command?: string;
    reason?: string;
    step?: StepInfo;
    documentsPackage: DocumentsPackage;
    meeting: Meeting[];
    phaseHistories?: PhaseHistory[];
}
