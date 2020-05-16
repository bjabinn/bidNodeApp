import { TestBed } from '@angular/core/testing';

import { BidHttpInterceptor } from './bid-http-interceptor.interceptor';

describe('BidHttpInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BidHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BidHttpInterceptor = TestBed.inject(BidHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
