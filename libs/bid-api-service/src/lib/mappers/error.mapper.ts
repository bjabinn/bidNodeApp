import { ErrorDto } from '../dtos/error.dto'; 
import { Error } from '../models/error.model'; 

export class ErrorMapper {
    static ConvertToModel(dto: ErrorDto) : Error{
        var model = { 
            title: dto.title,
            detail: dto.detail,
            status: dto.status,
            developerMessage: dto.developerMessage
        };
        
        return model;
    }
    
    static ConvertToModels(dtos: ErrorDto[]) : Error[]{
        return dtos.map(dto => ErrorMapper.ConvertToModel(dto));
    }
}