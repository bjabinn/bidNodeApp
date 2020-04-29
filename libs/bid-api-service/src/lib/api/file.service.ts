import { Injectable, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';

import { UserService } from '../auth/user.service';

import { User } from '@bid/bid-api-service';
import { DocumentMetadata, DocumentModel } from '@bid/bid-api-service';

@Injectable({
    providedIn: 'root'
})
export class FilesService {
    private userData: User;
    private date: Date;

    private _documentType: string;
    public get documentType(): string {
        return this._documentType;
    }
    public set documentType(value: string) {
        this._documentType = value;
    }

    private _documentVersion: string;
    public get documentVersion(): string {
        return this._documentVersion;
    }
    public set documentVersion(value: string) {
        this._documentVersion = value;
    }

    private _dateFormat: string;
    public get dateFormat(): string {
        return this._dateFormat;
    }
    public set dateFormat(value: string) {
        this._dateFormat = value;
    }

    public documentFormat: string;

    constructor(private userService: UserService, @Inject('env') private env) {
        this.date = new Date();
    }

    private getUserData(): void {
        this.userData = this.userService.getUser();
    }

    public getDocumentMetadata(file: File): DocumentMetadata {
        if (!this.userData) {
            this.getUserData();
        }
        const datePipe = new DatePipe('en-US'); // TODO getLocaleInfo && format Date
        const dateString = datePipe.transform(this.date, this.dateFormat);
        const docInfo = {
            user: this.userData.name,
            uploadedOn: dateString,
            version: this.documentVersion,
            type: this.documentType
        };
        return docInfo;
    }

    public downloadFile(fileUrl: string, fileName: string): void {
        // for non-IE
        if (!(window as any).ActiveXObject) {
            const save = document.createElement('a');
            save.href = fileUrl;
            save.target = '_blank';
            save.download = fileName;
            if (
                navigator.userAgent
                    .toLowerCase()
                    .match(/(ipad|iphone|safari)/) &&
                navigator.userAgent.search('Chrome') < 0
            ) {
                document.location = save.href as any;
                // window event not working here
            } else {
                const evt = new MouseEvent('click', {
                    view: window,
                    bubbles: true,
                    cancelable: false
                });
                save.dispatchEvent(evt);
                (window.URL || window.webkitURL).revokeObjectURL(save.href);
            }
        } else if (!!(window as any).ActiveXObject && document.execCommand) {
            const _window = window.open(fileUrl, '_blank');
            _window.document.close();
            _window.document.execCommand('SaveAs', true, fileName || fileUrl);
            _window.close();
        }
    }

    public getFileToTemporalDocumentMapper(file: File): DocumentModel {
        const temporalDocument: DocumentModel = new DocumentModel();
        temporalDocument.tempName = file.name;
        temporalDocument.name = file.name;
        temporalDocument.type = this.documentType;
        temporalDocument.tempUuid = this.generateUuid();
        temporalDocument.uploadedOn = this.date;
        temporalDocument.urlTemp = `${this.env.azureUrl}${this.env.azureContainer}/${file.name}`;
        temporalDocument.user = this.userData;
        temporalDocument.version = this.documentVersion;
        return temporalDocument;
    }

    private generateUuid(): string {
        const uuid = `${this.generateRandomString()}${this.generateRandomString()}-${this.generateRandomString()}-${this.generateRandomString()}-${this.generateRandomString()}-${this.generateRandomString()}${this.generateRandomString()}${this.generateRandomString()}`;
        return uuid;
    }

    private generateRandomString(): string {
        // tslint:disable-next-line: no-bitwise
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
}
