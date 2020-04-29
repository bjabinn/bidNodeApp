import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DocumentModel, Document } from '@bid/bid-api-service';
import * as lodash from 'lodash';
import { FilesService } from './file.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TemporalDocumentService {
    private temporalDocumentCollection: DocumentModel[] = [];
    public temporalDocumentCollection$: BehaviorSubject<
        DocumentModel[]
    > = new BehaviorSubject<DocumentModel[]>([]);

    constructor(private fileService: FilesService, private http: HttpClient) {}

    public getTemporalDocuments() {
        return this.temporalDocumentCollection$.asObservable();
    }

    public addTemporalDocumentToCollection(file: FileList) {
        Array.from(file).map(item => {
            const exist = this.temporalDocumentCollection.find(
                doc => doc.tempName === item.name
            );
            if (!exist) {
                this.temporalDocumentCollection.push(
                    this.fromFileToTemporalDocumentMapper(item)
                );

                this.temporalDocumentCollection$.next(
                    this.temporalDocumentCollection
                );
            }
        });
    }
    public deleteTemporalDocumentFromCollection(uuid: string) {
        let auxDocumentCollection: DocumentModel[] = [];
        auxDocumentCollection = [...this.temporalDocumentCollection];
        lodash.remove(auxDocumentCollection, item => item.tempUuid === uuid);
        this.temporalDocumentCollection = [];
        this.temporalDocumentCollection = [...auxDocumentCollection];
        this.temporalDocumentCollection$.next(this.temporalDocumentCollection);
    }

    public temporalMapper(documents: Document[]) {
        const documentCollection: DocumentModel[] = [];
        for (const doc of documents) {
            const documentObj: DocumentModel = new DocumentModel();
            documentObj.tempUuid = doc.blobId;
            documentObj.name = doc.name + '.' + doc.extension;

            documentObj.uploadedOn = new Date(doc.created);
            documentObj.user = {
                name: doc.createdBy,
                uuid: 'User uuid from metadata'
            };
            documentObj.version = doc.version;
            documentCollection.push(documentObj);
        }

        this.temporalDocumentCollection = [...documentCollection];
        this.temporalDocumentCollection$.next(this.temporalDocumentCollection);
    }

    private fromFileToTemporalDocumentMapper(file: File): DocumentModel {
        return this.fileService.getFileToTemporalDocumentMapper(file);
    }
}
