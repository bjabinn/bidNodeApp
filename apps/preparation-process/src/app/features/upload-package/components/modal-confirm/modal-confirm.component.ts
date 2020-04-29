import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'bid-modal-confirm',
    templateUrl: './modal-confirm.component.html',
    styles: []
})
export class ModalConfirmComponent implements OnInit {
    @Input() opened: boolean;
    @Input() title: string;
    @Input() confirm: string;
    @Output() closed = new EventEmitter<boolean>();
    constructor() {}

    ngOnInit(): void {}

    close(submit: boolean) {
        this.closed.emit(submit);
    }
}
