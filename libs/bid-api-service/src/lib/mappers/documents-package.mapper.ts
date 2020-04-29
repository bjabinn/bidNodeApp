import { DocumentMapper } from './document.mapper';
import { DocumentsPackage } from '../models/documentPackage.model';
import { IDocumentsPackage } from '../interfaces/documentPackage.interface';

export class DocumentsPackageMapper {
    static mapToModel(dto: IDocumentsPackage): DocumentsPackage {
        const documentPackage: DocumentsPackage = new DocumentsPackage();
        documentPackage.id = dto.id;
        documentPackage.type = dto.type;
        documentPackage.documents = DocumentMapper.mapToModel(dto.documents);
        return documentPackage;
    }
}
