import {Component, Input} from '@angular/core';

import {FinancialsReport} from "../../../../credit-report/credit-report";

@Component({
  selector: 'app-financials-report',
  templateUrl: './financials-report.component.html',
  styleUrls: ['./financials-report.component.css']
})
export class FinancialsReportComponent {

  @Input() financialsReports: FinancialsReport[];

}
