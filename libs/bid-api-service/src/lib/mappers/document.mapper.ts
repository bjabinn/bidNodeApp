import { DocumentDto } from '../dtos/document.dto';
import { IDocument } from '../interfaces/documentPackage.interface';
import { Document } from '../models/documentPackage.model';

export class DocumentMapper {
    public static mapToModel(dto: IDocument[]): Document[] {
        const documentCollection: Document[] = [];
        dto.map((doc: IDocument) => {
            const document: Document = new Document();
            document.id = doc.id;
            document.blobId = doc.blobId;
            document.ezshareId = doc.ezshareId;
            document.name = doc.name;
            document.language = doc.language;
            document.extension = doc.extension;
            document.confidentiality = doc.confidentiality;
            document.type = doc.type;
            document.createdBy = doc.createdBy;
            document.created = doc.created;
            document.keyDocument = doc.keyDocument;
            document.version = doc.version;
            documentCollection.push(document);
        });
        return documentCollection;
    }
}
