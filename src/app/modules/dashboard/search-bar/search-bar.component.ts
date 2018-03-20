import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {from} from "rxjs/observable/from";
import {empty} from "rxjs/observable/empty";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";

import {CompanyInfo} from "../../../credit-report/company-info";
import {CompleteReport} from '../../../credit-report/credit-report';
import {CreditReportService} from "../../../credit-report/credit-report.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  formControl = new FormControl();
  companies: Observable<CompanyInfo[]>;
  completeReport$: Observable<CompleteReport>;
  private _searchCompaniesByName = new Subject<string>();
  private _searchCreditReportsByCompanyId = new Subject<CompanyInfo>();
  private _debounceTime = 300;

  constructor(private creditReportService: CreditReportService) {
  }

  ngOnInit() {
    this.companies = this._searchCompaniesByName
      .pipe(
        debounceTime(this._debounceTime),
        distinctUntilChanged(),
        switchMap((value: string) => value ? this.creditReportService.queryCompaniesByText(value) : from<CompanyInfo[]>([])),
      );
    this.completeReport$ = this._searchCreditReportsByCompanyId
      .pipe(
        debounceTime(this._debounceTime),
        distinctUntilChanged(),
        switchMap((value: CompanyInfo) => value ? this.creditReportService.queryCreditReportsByCompanyId(value.id) : empty<CompleteReport>()),
      );
  }

  displayWidth(company?: CompanyInfo): string | undefined {
    return company ? company.name : undefined;
  }


  searchCompaniesByName(name: string): void {
    this._searchCompaniesByName.next(name);
  }

  searchCreditReportsByCompanyId(company: CompanyInfo): void {
    this._searchCreditReportsByCompanyId.next(company);
  }

}
