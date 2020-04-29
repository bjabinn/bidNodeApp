import { StepResponse } from '../interfaces/StepResponse.interface';
import { Step } from '../models/step.model';
import { StepInfoMapper } from './stepInfo.mapper';
import { DocumentsPackageMapper } from './documents-package.mapper';
import { MeetingMapper } from './meeting.mapper';
import { PhaseHistoryMapper } from './phaseHistory.mapper';

export class StepMapper {
    public static mapToModel(dto: StepResponse): Step {
        const step: Step = new Step();
        step.step = StepInfoMapper.mapToModel(dto.step);
        step.documentsPackage = DocumentsPackageMapper.mapToModel(
            dto.documentsPackage
        );
        step.meeting = MeetingMapper.mapToModel(dto.meetings);
        step.phaseHistories = PhaseHistoryMapper.mapToModel(dto.phaseHistories);
        return step;
    }
}
