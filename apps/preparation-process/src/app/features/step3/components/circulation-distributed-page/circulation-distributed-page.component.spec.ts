import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculationDistributedPageComponent } from './circulation-distributed-page.component';

describe('CirculationDistributedPageComponent', () => {
    let component: CirculationDistributedPageComponent;
    let fixture: ComponentFixture<CirculationDistributedPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CirculationDistributedPageComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CirculationDistributedPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
