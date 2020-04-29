import { async, TestBed } from '@angular/core/testing';
import { BidUtilsModule } from './bid-utils.module';

describe('BidUtilsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BidUtilsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BidUtilsModule).toBeDefined();
  });
});
