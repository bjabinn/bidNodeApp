import { async, TestBed } from '@angular/core/testing';
import { BidApiServiceModule } from './bid-api-service.module';

describe('BidApiServiceModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BidApiServiceModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BidApiServiceModule).toBeDefined();
  });
});
