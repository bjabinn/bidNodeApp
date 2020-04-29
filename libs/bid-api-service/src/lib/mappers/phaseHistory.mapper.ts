import { IPhaseHistory } from '../interfaces/phaseHistories.interface';
import { PhaseHistory } from '../models/phaseHistories.model';

export class PhaseHistoryMapper {
    public static mapToModel(dto: IPhaseHistory[]): PhaseHistory[] {
        const phaseHistoryCollection: PhaseHistory[] = [];
        dto.map((pHItem: IPhaseHistory) => {
            const phaseHistory: PhaseHistory = new PhaseHistory();
            phaseHistory.id = pHItem.id;
            phaseHistory.date = pHItem.date;
            phaseHistory.description = pHItem.description;
            phaseHistory.phaseId = pHItem.phaseId;
            phaseHistory.reason = pHItem.reason;
            phaseHistory.stepId = pHItem.stepId;
            phaseHistory.user = pHItem.user;
            phaseHistoryCollection.push(phaseHistory);
        });
        return phaseHistoryCollection;
    }
}
