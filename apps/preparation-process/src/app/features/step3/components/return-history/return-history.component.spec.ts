import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnHistoryComponent } from './return-history.component';

describe('ReturnHistoryComponent', () => {
    let component: ReturnHistoryComponent;
    let fixture: ComponentFixture<ReturnHistoryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ReturnHistoryComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ReturnHistoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
