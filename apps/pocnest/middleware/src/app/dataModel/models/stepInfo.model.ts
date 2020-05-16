import { StepType } from '../enums/step-type.enum';
import { StepStatus } from '../enums/step-status.enum';
import { ApiProperty } from '@nestjs/swagger';
export class StepInfo {
    id: string;

    code: string;

    name: string;

    order: number;

    type: StepType;

    status: StepStatus;

    startDate: string;

    endDate: string;
}
