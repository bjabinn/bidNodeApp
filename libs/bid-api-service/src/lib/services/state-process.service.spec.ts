import { TestBed } from '@angular/core/testing';

import { StateProcessService } from './state-process.service';

describe('StateProcessService', () => {
  let service: StateProcessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateProcessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
