import { async, TestBed } from '@angular/core/testing';
import { BidHandleErrorsModule } from './bid-handle-errors.module';

describe('BidHandleErrorsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BidHandleErrorsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BidHandleErrorsModule).toBeDefined();
  });
});
