import { TestBed, inject } from '@angular/core/testing';

import { CreditRatingService } from './credit-rating.service';

describe('CreditRatingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreditRatingService]
    });
  });

  it('should be created', inject([CreditRatingService], (service: CreditRatingService) => {
    expect(service).toBeTruthy();
  }));
});
