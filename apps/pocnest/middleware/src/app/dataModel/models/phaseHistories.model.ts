import { ApiProperty } from '@nestjs/swagger';
export class PhaseHistory {
    id: string;

    phaseId: string;

    stepId: string;

    user: string;

    reason: string;

    description: string;

    date: string;
}
