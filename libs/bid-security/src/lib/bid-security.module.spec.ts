import { async, TestBed } from '@angular/core/testing';
import { BidSecurityModule } from './bid-security.module';

describe('BidSecurityModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BidSecurityModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BidSecurityModule).toBeDefined();
  });
});
