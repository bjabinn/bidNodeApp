import { ApiProperty } from '@nestjs/swagger';
export class PhaseHistory {
    @ApiProperty()
    id: string;
    @ApiProperty()
    phaseId: string;
    @ApiProperty()
    stepId: string;
    @ApiProperty()
    user: string;
    @ApiProperty()
    reason: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    date: string;
}
