import { TestBed, inject } from '@angular/core/testing';

import { CompanyNameSearchService } from './company-name-search.service';

describe('CompanyNameSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyNameSearchService]
    });
  });

  it('should be created', inject([CompanyNameSearchService], (service: CompanyNameSearchService) => {
    expect(service).toBeTruthy();
  }));
});
