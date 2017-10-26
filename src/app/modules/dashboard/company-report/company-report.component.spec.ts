import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatTabsModule} from '@angular/material';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {CompanyReportSearchComponent} from './company-report.component';
import {CompanyReportSearchService} from './company-report-search.service';
import {createMockCompanyReportSearchService} from '../../../../testing/mock-stub.spec';

describe('CompanyReportSearchComponent', () => {
  let component: CompanyReportSearchComponent;
  let fixture: ComponentFixture<CompanyReportSearchComponent>;
  let mockCompanyReportSearchService: CompanyReportSearchService;

  beforeEach(async(() => {
    mockCompanyReportSearchService = createMockCompanyReportSearchService();

    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,

        MatCardModule,
        MatTabsModule,

        NgxChartsModule,
      ],
      declarations: [CompanyReportSearchComponent],
      providers: [
        {provide: CompanyReportSearchService, useValue: mockCompanyReportSearchService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyReportSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
