import { StepType } from '../enums/step-type.enum'; 
import { StepStatus } from '../enums/step-status.enum'; 

export interface StepDto {
    id: string;
    code: string;
    name: string;
    order: number;
    type: StepType;
    status: StepStatus;
    startDate: string;
    endDate: string;
}