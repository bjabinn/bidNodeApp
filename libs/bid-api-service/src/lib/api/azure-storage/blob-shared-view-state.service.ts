import { Inject, Injectable } from '@angular/core';
import {
    BehaviorSubject,
    MonoTypeOperatorFunction,
    Observable,
    OperatorFunction,
    of
} from 'rxjs';
import {
    filter,
    finalize,
    map,
    scan,
    switchMap,
    withLatestFrom,
    tap
} from 'rxjs/operators';
import { BlobStorageRequest } from '../../models/BlobStorageRequest.model';
import { BlobContainerRequest } from '../../models/BlobContainerRequest.model';
import { BlobItem } from '../../models/BlobItem.model';
import { Dictionary } from '../../types/dictionary.type';
import { BlobStorageService } from './blob-storage.service';
import { SasGeneratorService } from './sas-generator.service';

@Injectable({
    providedIn: 'root'
})
export class BlobSharedViewStateService {
    private selectedContainerInner$ = new BehaviorSubject<string>(undefined);

    containers$ = this.getStorageOptions().pipe(
        switchMap(options => this.blobStorage.getContainers(options))
    );
    itemsInContainer$ = this.selectedContainer$.pipe(
        filter(containerName => !!containerName),
        switchMap(containerName =>
            this.getStorageOptions().pipe(
                switchMap(options =>
                    this.blobStorage.listBlobsInContainer({
                        ...options,
                        containerName
                    })
                )
            )
        )
    );

    get selectedContainer$() {
        return this.selectedContainerInner$.asObservable();
    }

    constructor(
        private sasGenerator: SasGeneratorService,
        private blobStorage: BlobStorageService,
        @Inject('env') private env
    ) {}

    getContainerItems(containerName: string): void {
        this.selectedContainerInner$.next(containerName);
    }

    finaliseBlobChange = <T>(
        containerName: string
    ): MonoTypeOperatorFunction<T> => source =>
        source.pipe(
            finalize(
                () =>
                    this.selectedContainerInner$.value === containerName &&
                    this.selectedContainerInner$.next(containerName)
            )
        );

    scanEntries = <T extends BlobItem>(): OperatorFunction<T, T[]> => source =>
        source.pipe(
            map(item => ({
                [`${item.containerName}-${item.filename}`]: item
            })),
            scan<Dictionary<T>>(
                (items, item) => ({
                    ...items,
                    ...item
                }),
                {}
            ),
            map(items => Object.values(items))
        );

    getStorageOptionsWithContainer(): Observable<BlobContainerRequest> {
        return this.getStorageOptions().pipe(
            withLatestFrom(this.selectedContainer$),
            map(([options, containerName]) => ({ ...options, containerName }))
        );
    }
    randomStr(len, arr) {
        let ans = '';
        for (let i = len; i > 0; i--) {
            ans += arr[Math.floor(Math.random() * arr.length)];
        }
        return ans;
    }
    createContainer(): Observable<any> {
        return of(
            this.getStorageOptions().subscribe(options => {
                const customName: BlobContainerRequest = {
                    containerName:
                        'ppr-' +
                        this.randomStr(
                            10,
                            '123456789abcdefghijklmnopqrstuvwxyz'
                        ),
                    storageAccessToken: options.storageAccessToken,
                    storageUri: options.storageUri
                };
                this.blobStorage.createContainer(customName);
            })
        );
    }
    private getStorageOptions(): Observable<BlobStorageRequest> {
        const mySAS: BlobStorageRequest = {
            storageUri: this.env.azureUrl,
            storageAccessToken: this.env.azureSASToken
        };
        return of(mySAS);
    }
}
