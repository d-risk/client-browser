import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';

import {CompanyNameSearchComponent} from './company-name-search.component';
import {CompanyNameSearchService} from './company-name-search.service';
import {createMockCompanySearchService} from '../../../../testing/mock-stub.spec';

describe('CompanyNameSearchComponent', () => {
  let component: CompanyNameSearchComponent;
  let fixture: ComponentFixture<CompanyNameSearchComponent>;
  let mockCompanySearchService: CompanyNameSearchService;

  beforeEach(async(() => {
    mockCompanySearchService = createMockCompanySearchService();

    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        NoopAnimationsModule,

        MatAutocompleteModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
      ],
      declarations: [CompanyNameSearchComponent],
      providers: [
        {provide: CompanyNameSearchService, useValue: mockCompanySearchService}
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyNameSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
