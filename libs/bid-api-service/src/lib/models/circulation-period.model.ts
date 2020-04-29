import { ApiProperty } from '@nestjs/swagger';
export class CirculationPeriod {
    @ApiProperty()
    id: string;
    @ApiProperty()
    startDate: string;
    @ApiProperty()
    endDate: string;
    @ApiProperty()
    duration: number;
}
