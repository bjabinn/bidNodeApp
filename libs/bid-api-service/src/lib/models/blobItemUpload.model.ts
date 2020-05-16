import { BlobItem } from './blobItem.model';

export interface BlobItemUpload extends BlobItem {
    progress: number;
}
