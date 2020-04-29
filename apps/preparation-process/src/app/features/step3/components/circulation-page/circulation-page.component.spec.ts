import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculationPageComponent } from './circulation-page.component';

describe('CirculationPageComponent', () => {
    let component: CirculationPageComponent;
    let fixture: ComponentFixture<CirculationPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CirculationPageComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CirculationPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
