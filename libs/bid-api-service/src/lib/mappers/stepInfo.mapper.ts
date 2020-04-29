import { IStepInfo } from '../interfaces/stepInfo.interface';
import { StepInfo } from '../models/stepInfo.model';

export class StepInfoMapper {
    public static mapToModel(dto: IStepInfo): StepInfo {
        const stepInfo: StepInfo = new StepInfo();
        stepInfo.id = dto.id;
        stepInfo.code = dto.code;
        stepInfo.name = dto.name;
        stepInfo.order = dto.order;
        stepInfo.type = dto.type;
        stepInfo.status = dto.status;
        stepInfo.startDate = dto.startDate;
        stepInfo.endDate = dto.endDate;
        return stepInfo;
    }
}
