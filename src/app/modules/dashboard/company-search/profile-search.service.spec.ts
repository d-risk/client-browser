import { TestBed, inject } from '@angular/core/testing';

import { ProfileSearchService } from './profile-search.service';

describe('ProfileSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileSearchService]
    });
  });

  it('should be created', inject([ProfileSearchService], (service: ProfileSearchService) => {
    expect(service).toBeTruthy();
  }));
});
