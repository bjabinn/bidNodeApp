import { DocumentsPackageType } from '../enums/documents-package-type.enum';
import { Confidentiality } from '../enums/confidentiality.enum';
import { Type } from '../enums/type.enum';
import { ApiProperty } from '@nestjs/swagger';
export class DocumentsPackage {
    id: string;

    type: DocumentsPackageType;

    documents: Document[];
}

export class Document {
    id?: string;

    blobId: string;

    ezshareId?: string;

    name?: string;

    language: string;

    extension: string;

    confidentiality?: Confidentiality;

    type: Type;

    createdBy: string;

    created: string;

    keyDocument?: boolean;

    version?: string;
}
