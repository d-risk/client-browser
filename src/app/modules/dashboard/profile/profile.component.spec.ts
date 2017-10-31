import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatTabsModule} from '@angular/material';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {ProfileComponent} from './profile.component';
import {ProfileSearchService} from '../company-search/profile-search.service';
import {createMockCompanyReportSearchService} from '../../../../testing/mock-stub.spec';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let mockCompanyReportSearchService: ProfileSearchService;

  beforeEach(async(() => {
    mockCompanyReportSearchService = createMockCompanyReportSearchService();

    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,

        MatCardModule,
        MatTabsModule,

        NgxChartsModule,
      ],
      declarations: [ProfileComponent],
      providers: [
        {provide: ProfileSearchService, useValue: mockCompanyReportSearchService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
