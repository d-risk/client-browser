import { TestBed, inject } from '@angular/core/testing';

import { CompanyReportSearchService } from './company-report-search.service';

describe('CompanyReportSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyReportSearchService]
    });
  });

  it('should be created', inject([CompanyReportSearchService], (service: CompanyReportSearchService) => {
    expect(service).toBeTruthy();
  }));
});
