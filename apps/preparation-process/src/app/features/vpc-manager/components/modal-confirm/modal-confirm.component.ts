import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from '@bid/pp/environments/environment';

@Component({
    selector: 'bid-modal-confirm',
    templateUrl: './modal-confirm.component.html',
    styles: []
})
export class ModalConfirmComponent implements OnInit {
    @Input() opened: boolean;
    @Input() title: string;
    @Input() confirm: string;
    @Input() return = false;
    @Output() closed = new EventEmitter<object>();
    public comments: string;
    public textAreaLimit: number;
    constructor() {}

    ngOnInit(): void {
        this.textAreaLimit =
            environment.stepsConf.uploadPackage.maxCommentLength;
    }

    close(submit: boolean) {
        const res = {
            submit: submit,
            comments: null
        };
        if (this.return) {
            res.comments = this.comments;
        }
        this.closed.emit(res);
    }
}
