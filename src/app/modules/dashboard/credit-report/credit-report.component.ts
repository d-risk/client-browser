import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {CreditReport} from "../../../credit-report/credit-report";

@Component({
  selector: 'app-credit-report',
  templateUrl: './credit-report.component.html',
  styleUrls: ['./credit-report.component.css']
})
export class CreditReportComponent implements OnInit {

  @Input() creditReports$: Observable<CreditReport[]>;
  creditReports: CreditReport[];

  ngOnInit() {
    this.creditReports$
      .subscribe(value => this.creditReports = value);
  }

  formatDate(s: string): string {
    return new Date(s).toDateString()
  }

}
