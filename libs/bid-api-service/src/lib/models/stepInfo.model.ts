import { StepType } from '../enums/step-type.enum';
import { StepStatus } from '../enums/step-status.enum';
import { ApiProperty } from '@nestjs/swagger';
export class StepInfo {
    @ApiProperty()
    id: string;
    @ApiProperty()
    code: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    order: number;
    @ApiProperty()
    type: StepType;
    @ApiProperty()
    status: StepStatus;
    @ApiProperty()
    startDate: string;
    @ApiProperty()
    endDate: string;
}
