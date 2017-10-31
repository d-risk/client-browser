import { TestBed, inject } from '@angular/core/testing';

import { CompanyProfileSearchService } from './company-profile-search.service';

describe('CompanyProfileSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyProfileSearchService]
    });
  });

  it('should be created', inject([CompanyProfileSearchService], (service: CompanyProfileSearchService) => {
    expect(service).toBeTruthy();
  }));
});
