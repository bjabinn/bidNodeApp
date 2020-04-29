import { TestBed } from '@angular/core/testing';

import { StepsMeetingService } from './steps-meeting.service';

describe('StepsMeetingService', () => {
    let service: StepsMeetingService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(StepsMeetingService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
