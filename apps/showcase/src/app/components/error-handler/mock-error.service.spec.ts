import { TestBed } from '@angular/core/testing';

import { MockErrorService } from './mock-error.service';

describe('MockErrorService', () => {
  let service: MockErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
