import { async, TestBed } from '@angular/core/testing';
import { BidUiModule } from './bid-ui.module';

describe('BidUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BidUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BidUiModule).toBeDefined();
  });
});
