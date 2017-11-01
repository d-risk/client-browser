import {inject, TestBed} from '@angular/core/testing';
import {HttpTestModule} from '../../../../testing/mock.modules.spec';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import {CompanyService} from './company.service';

describe('CompanyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpTestModule],
      providers: [CompanyService]
    });
  });

  it('should be created', inject([CompanyService], (service: CompanyService) => {
    expect(service).toBeTruthy();
  }));
});
