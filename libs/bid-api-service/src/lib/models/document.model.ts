import { User } from '@bid/bid-api-service';

export class DocumentModel {
    uuid: string;
    tempUuid: string;
    tempName: string;
    name: string;
    type: string;
    version: string;
    user: User;
    uploadedOn: Date;
    urlTemp: string;
}

export class TemporalDocumentModel {
    uuid: string;
    type: string;
    version: string;
    user: User;
    uploadedOn: Date;
}

export class DocumentMetadata {
    type: string;
    version: string;
    user: string;
    uploadedOn: string;
}

export class DocumentAction {
    uuid: string;
    action: string;
}
