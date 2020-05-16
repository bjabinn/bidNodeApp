import { DocumentsPackageType } from '../enums/documents-package-type.enum';
import { Confidentiality } from '../enums/confidentiality.enum';
import { Type } from '../enums/type.enum';
import { ApiProperty } from '@nestjs/swagger';
export class DocumentsPackage {
    @ApiProperty()
    id: string;
    @ApiProperty()
    type: DocumentsPackageType;
    @ApiProperty()
    documents: Document[];
}

export class Document {
    @ApiProperty()
    id?: string;
    @ApiProperty()
    blobId: string;
    @ApiProperty()
    ezshareId?: string;
    @ApiProperty()
    name?: string;
    @ApiProperty()
    language: string;
    @ApiProperty()
    extension: string;
    @ApiProperty()
    confidentiality?: Confidentiality;
    @ApiProperty()
    type: Type;
    @ApiProperty()
    createdBy: string;
    @ApiProperty()
    created: string;
    @ApiProperty()
    keyDocument?: boolean;
    @ApiProperty()
    version?: string;
}
