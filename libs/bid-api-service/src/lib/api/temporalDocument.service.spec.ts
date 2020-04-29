import { TestBed } from '@angular/core/testing';

import { TemporalDocumentService } from './temporalDocument.service';

describe('TemporalDocumentService', () => {
    let service: TemporalDocumentService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TemporalDocumentService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
