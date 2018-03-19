import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {CompleteReport, CreditReport} from "../../../credit-report/credit-report";
import {CompanyInfo} from "../../../credit-report/company-info";

@Component({
  selector: 'app-credit-report',
  templateUrl: './credit-report.component.html',
  styleUrls: ['./credit-report.component.css']
})
export class CreditReportComponent implements OnInit {

  @Input() completeReport$: Observable<CompleteReport>;
  completeReport: CompleteReport;

  ngOnInit() {
    this.completeReport$
      .subscribe(value => this.completeReport = value);
  }

  company(): CompanyInfo {
    return this.completeReport.company
  }

  creditReports(): CreditReport[] {
    return this.completeReport.creditReports.map(value => value).sort(CreditReportComponent.sortByCreditReportDate)
  }

  formatDate(s: string): string {
    return new Date(s).toDateString()
  }

  static sortByCreditReportDate(a: CreditReport, b: CreditReport): number {
    return new Date(b.creditReportDate).getTime() - new Date(a.creditReportDate).getTime()
  }

}
