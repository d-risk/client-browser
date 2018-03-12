import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';

import {SearchBarComponent} from './search-bar.component';
import {CreditReportService} from "../../../credit-report/credit-report.service";
import {CreditReportModule} from "../../../credit-report/credit-report.module";

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let mockCreditRatingService: CreditReportService;

  beforeEach(async(() => {
    mockCreditRatingService = jasmine.createSpyObj<CreditReportService>('creditRatingService', ['companies', 'rating']);

    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        NoopAnimationsModule,

        MatAutocompleteModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,

        CreditReportModule,
      ],
      declarations: [SearchBarComponent],
      providers: [{provide: CreditReportService, useValue: mockCreditRatingService}],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
