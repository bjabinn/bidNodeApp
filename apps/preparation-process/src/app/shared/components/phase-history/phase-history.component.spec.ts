import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseHistoryComponent } from './phase-history.component';

describe('PhaseHistoryComponent', () => {
    let component: PhaseHistoryComponent;
    let fixture: ComponentFixture<PhaseHistoryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PhaseHistoryComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PhaseHistoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
