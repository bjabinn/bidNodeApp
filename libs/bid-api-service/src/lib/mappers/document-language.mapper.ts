// REVIEW this DTO
//import { DocumentLanguageDto } from '@bid/pp/app/core/dtos/document-language.dto';
import { DocumentLanguage } from '@bid/bid-api-service';

export class DocumentLanguageMapper {
    static ConvertToModel(dto: any): DocumentLanguage {
        const model = {
            language: dto.language
        };

        return model;
    }

    static ConvertToModels(dtos: any[]): DocumentLanguage[] {
        return dtos.map(dto => DocumentLanguageMapper.ConvertToModel(dto));
    }
}
