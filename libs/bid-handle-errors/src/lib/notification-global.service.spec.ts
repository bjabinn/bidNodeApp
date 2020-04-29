import { TestBed } from '@angular/core/testing';

import { NotificationGlobalService } from './notification-global.service';

describe('NotificationService', () => {
  let service: NotificationGlobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationGlobalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
