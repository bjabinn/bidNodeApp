import { TestBed } from '@angular/core/testing';

import { DistributionListGuard } from './distribution-list.guard';

describe('DistributionGuardGuard', () => {
    let guard: DistributionListGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        guard = TestBed.inject(DistributionListGuard);
    });

    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
