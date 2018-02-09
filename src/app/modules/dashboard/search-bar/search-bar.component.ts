import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {from} from "rxjs/observable/from";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";

import {CompanyInfo} from "../../../credit-rating/company-info";
import {CreditReport} from '../../../credit-rating/credit-report';
import {CreditRatingService} from "../../../credit-rating/credit-rating.service";

@Component({
  selector: 'app-search',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  formControl = new FormControl();
  companies: Observable<CompanyInfo[]>;
  creditReport: Observable<CreditReport[]>;
  private _searchCompaniesText = new Subject<string>();
  private _searchCreditReportText = new Subject<CompanyInfo>();
  private _debounceTime = 300;

  constructor(private creditRatingService: CreditRatingService) {
  }

  ngOnInit() {
    this.companies = this._searchCompaniesText
      .pipe(
        debounceTime(this._debounceTime),
        distinctUntilChanged(),
        switchMap((value: string) => value ? this.creditRatingService.companies(value) : from<CompanyInfo[]>([])),
      );
    this.creditReport = this._searchCreditReportText
      .pipe(
        debounceTime(this._debounceTime),
        distinctUntilChanged(),
        switchMap((value: CompanyInfo) => value ? this.creditRatingService.reports(value.id.toString()) : from<CreditReport[]>([])),
      );
  }

  displayWidth(company?: CompanyInfo): string | undefined {
    return company ? company.name : undefined;
  }

  onSelectionChange(company: CompanyInfo): void {
    this._searchCreditReportText.next(company);
  }

  searchCompaniesByName(name: string): void {
    this._searchCompaniesText.next(name);
  }

}
