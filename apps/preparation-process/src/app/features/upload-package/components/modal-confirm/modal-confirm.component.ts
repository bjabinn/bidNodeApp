import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    OnDestroy
} from '@angular/core';
import { TemporalDocumentService } from '@bid/bid-api-service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'bid-modal-confirm',
    templateUrl: './modal-confirm.component.html',
    styles: []
})
export class ModalConfirmComponent implements OnInit, OnDestroy {
    @Input() opened: boolean;
    @Input() title: string;
    @Input() confirm: string;
    @Input() delete = false;
    @Output() closed = new EventEmitter<boolean>();

    public paramTrans: any;

    private subscriptionsCollection: Subscription[] = [];

    constructor(private temporalDocService: TemporalDocumentService) {}

    ngOnInit(): void {
        this.initTranslateParams();
    }

    public close(submit: boolean): void {
        this.closed.emit(submit);
    }

    private initTranslateParams(): void {
        this.subscriptionsCollection.push(
            this.temporalDocService
                .getTemporalDocuments()
                .subscribe(documents => {
                    if (documents.length > 0)
                        this.paramTrans = {
                            documentName: documents[0].name
                        };
                })
        );
    }

    private unsubscribeAll(): void {
        this.subscriptionsCollection.forEach((sub: Subscription) =>
            sub.unsubscribe()
        );
    }

    ngOnDestroy(): void {
        this.unsubscribeAll();
    }
}
