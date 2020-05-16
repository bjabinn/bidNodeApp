import { StepInfo } from './stepInfo.model';
import { DocumentsPackage } from './documentPackage.model';
import { Meeting } from './meeting.model';
import { PhaseHistory } from './phaseHistories.model';
import { ApiProperty } from '@nestjs/swagger';
export class Step {
    @ApiProperty()
    command?: string;
    @ApiProperty()
    reason?: string;
    @ApiProperty()
    step?: StepInfo;
    @ApiProperty()
    documentsPackage: DocumentsPackage;
    @ApiProperty()
    meeting: Meeting[];
    @ApiProperty()
    phaseHistories?: PhaseHistory[];
}
