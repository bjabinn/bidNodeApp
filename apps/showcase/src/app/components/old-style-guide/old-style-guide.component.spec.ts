import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldStyleGuideComponent } from './old-style-guide.component';

describe('OldStyleGuideComponent', () => {
  let component: OldStyleGuideComponent;
  let fixture: ComponentFixture<OldStyleGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldStyleGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldStyleGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
