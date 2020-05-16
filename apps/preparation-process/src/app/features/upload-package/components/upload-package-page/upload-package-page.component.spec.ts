import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPackagePageComponent } from './upload-package-page.component';

describe('UploadPackagePageComponent', () => {
  let component: UploadPackagePageComponent;
  let fixture: ComponentFixture<UploadPackagePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadPackagePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPackagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
