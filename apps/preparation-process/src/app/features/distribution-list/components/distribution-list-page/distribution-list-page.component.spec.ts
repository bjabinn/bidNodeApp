import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionListPageComponent } from './distribution-list-page.component';

describe('DistributionListPageComponent', () => {
  let component: DistributionListPageComponent;
  let fixture: ComponentFixture<DistributionListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributionListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
