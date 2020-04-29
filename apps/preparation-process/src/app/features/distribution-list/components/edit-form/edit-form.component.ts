import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'bid-edit-form',
    templateUrl: './edit-form.component.html'
})
export class EditFormComponent implements OnInit {
    public value: any;
    public listItems: string[];
    public popupClass = 'k-popup--users';

    @Input() active: boolean;
    @Output() cancel: EventEmitter<boolean> = new EventEmitter();
    @Output() save: EventEmitter<boolean> = new EventEmitter();

    constructor() {
        this.active = false;
        this.listItems = [
            'Longinotto, Fabiana',
            'Longinotto, Fabiana',
            'Longinotto, Fabiana'
        ];
    }

    ngOnInit(): void {}

    public onSave(e): void {
        e.preventDefault();
        this.save.emit(false);
        this.active = false;
    }

    public onCancel(e): void {
        e.preventDefault();
        this.closeForm();
    }

    public closeForm(): void {
        this.active = false;
        this.cancel.emit(false);
    }
}
