import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';

import {SearchComponent} from './search.component';
import {CompanyService} from './company.service';
import {createMockCompanyService, createMockProfileService} from '../../../../testing/mock-stub.spec';
import {ProfileService} from './profile.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let mockCompanyService: CompanyService;
  let mockProfileService: ProfileService;

  beforeEach(async(() => {
    mockCompanyService = createMockCompanyService();
    mockProfileService = createMockProfileService();

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
      declarations: [SearchComponent],
      providers: [
        {provide: CompanyService, useValue: mockCompanyService},
        {provide: ProfileService, useValue: mockProfileService},
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
