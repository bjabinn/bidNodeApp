import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'bid-modal-confirm',
    templateUrl: './modal-confirm.component.html',
    styles: []
})
export class ModalConfirmComponent implements OnInit {
    @Input() active: boolean;
    @Input() elementName: string;
    @Output() closed = new EventEmitter<boolean>();
    constructor() {}

    ngOnInit(): void {}

    public close(submit: boolean): void {
        this.closed.emit(submit);
    }
}
