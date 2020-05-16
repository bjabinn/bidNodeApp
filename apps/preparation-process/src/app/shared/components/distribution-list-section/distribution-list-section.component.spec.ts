import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionListSectionComponent } from './distribution-list-section.component';

describe('DistributionListSectionComponent', () => {
  let component: DistributionListSectionComponent;
  let fixture: ComponentFixture<DistributionListSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributionListSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionListSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
