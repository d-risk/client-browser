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
import {CreditRatingService} from "../../../credit-rating/credit-rating.service";
import {CreditRatingModule} from "../../../credit-rating/credit-rating.module";

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let mockCreditRatingService: CreditRatingService;

  beforeEach(async(() => {
    mockCreditRatingService = jasmine.createSpyObj<CreditRatingService>('creditRatingService', ['companies', 'rating']);

    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        NoopAnimationsModule,

        MatAutocompleteModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,

        CreditRatingModule,
      ],
      declarations: [SearchBarComponent],
      providers: [{provide: CreditRatingService, useValue: mockCreditRatingService}],
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
