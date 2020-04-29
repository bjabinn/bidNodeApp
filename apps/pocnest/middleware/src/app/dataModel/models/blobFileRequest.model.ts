import { BlobContainerRequest } from './blobContainerRequest.model';

export interface BlobFileRequest extends BlobContainerRequest {
    filename: string;
}
