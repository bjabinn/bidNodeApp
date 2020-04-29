import { CirculationPeriod } from '../models/circulation-period.model';
import { ICirculationPeriod } from '../interfaces/circulation-period.interface';

export class CirculationPeriodMapper {
    static mapToModel(dto: ICirculationPeriod): CirculationPeriod {
        const circulationPeriod: CirculationPeriod = new CirculationPeriod();
        circulationPeriod.id = dto.id;
        circulationPeriod.startDate = dto.startDate;
        circulationPeriod.endDate = dto.endDate;
        circulationPeriod.duration = dto.duration;
        return circulationPeriod;
    }
}
