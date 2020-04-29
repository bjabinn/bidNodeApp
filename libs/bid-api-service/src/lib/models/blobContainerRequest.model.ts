import { BlobStorageRequest } from './blobStorageRequest.model';

export interface BlobContainerRequest extends BlobStorageRequest {
    containerName: string;
}
