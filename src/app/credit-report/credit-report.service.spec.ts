import { TestBed, inject } from '@angular/core/testing';

import { CreditReportService } from './credit-report.service';

describe('CreditReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreditReportService]
    });
  });

  it('should be created', inject([CreditReportService], (service: CreditReportService) => {
    expect(service).toBeTruthy();
  }));
});
