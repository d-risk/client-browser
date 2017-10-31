import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatTabsModule} from '@angular/material';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {CompanyReportComponent} from './company-report.component';
import {CompanyProfileSearchService} from '../company-search/company-profile-search.service';
import {createMockCompanyReportSearchService} from '../../../../testing/mock-stub.spec';

describe('CompanyReportComponent', () => {
  let component: CompanyReportComponent;
  let fixture: ComponentFixture<CompanyReportComponent>;
  let mockCompanyReportSearchService: CompanyProfileSearchService;

  beforeEach(async(() => {
    mockCompanyReportSearchService = createMockCompanyReportSearchService();

    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,

        MatCardModule,
        MatTabsModule,

        NgxChartsModule,
      ],
      declarations: [CompanyReportComponent],
      providers: [
        {provide: CompanyProfileSearchService, useValue: mockCompanyReportSearchService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
