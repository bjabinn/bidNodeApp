import { async, TestBed } from '@angular/core/testing';
import { BidTranslateModule } from './bid-translate.module';

describe('BidTranslateModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BidTranslateModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BidTranslateModule).toBeDefined();
  });
});
