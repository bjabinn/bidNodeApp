import { DocumentsPackageType } from '../enums/documents-package-type.enum'; 
import { DocumentDto } from './document.dto'; 

export interface DocumentsPackageDto {
    id: string;
    type: DocumentsPackageType;
    documents: DocumentDto[];
}