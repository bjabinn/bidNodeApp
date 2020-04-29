import { TestBed } from '@angular/core/testing';

import { TvDemoService } from './weather-demo.service';

describe('TvDemoService', () => {
  let service: TvDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
