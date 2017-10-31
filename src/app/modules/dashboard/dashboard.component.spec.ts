import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTabsModule} from '@angular/material';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {DashboardComponent} from './dashboard.component';
import {CompanyNameSearchService} from './company-search/company-name-search.service';
import {createMockComponent, FakeComponent} from '../../../testing/mock-stub.spec';
import {createMockCompanyNameSearchService} from '../../../testing/mock-stub.spec';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let mockCompanySearchService: CompanyNameSearchService;

  beforeEach(async(() => {
    mockCompanySearchService = createMockCompanyNameSearchService();

    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        NoopAnimationsModule,

        MatAutocompleteModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatTabsModule,

        NgxChartsModule,
      ],
      declarations: [
        DashboardComponent,
        createMockComponent({selector: 'app-company-name-search'}),
        createMockComponent({selector: 'app-profile'}),
      ],
      providers: [
        {provide: CompanyNameSearchService, useValue: mockCompanySearchService}
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
