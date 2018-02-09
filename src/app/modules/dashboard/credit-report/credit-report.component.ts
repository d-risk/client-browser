import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {CreditReport} from "../../../credit-rating/credit-report";

@Component({
  selector: 'app-profile',
  templateUrl: './credit-report.component.html',
  styleUrls: ['./credit-report.component.css']
})
export class CreditReportComponent implements OnInit {

  @Input() creditReport$: Observable<CreditReport[]>;
  creditReport: CreditReport[];

  constructor() {
  }

  ngOnInit() {
    this.creditReport$
      .subscribe(value => this.creditReport = value);
  }

}
