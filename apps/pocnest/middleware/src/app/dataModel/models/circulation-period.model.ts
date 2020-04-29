import { ApiProperty } from '@nestjs/swagger';
export class CirculationPeriod {
    id: string;

    startDate: string;

    endDate: string;

    duration: number;
}
