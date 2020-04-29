import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpcManagerPageComponent } from './vpc-manager-page.component';

describe('VpcManagerPageComponent', () => {
  let component: VpcManagerPageComponent;
  let fixture: ComponentFixture<VpcManagerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpcManagerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpcManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
