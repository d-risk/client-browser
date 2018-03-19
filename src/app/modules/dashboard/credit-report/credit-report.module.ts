import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material';

import {CreditReportComponent} from './credit-report.component';
import {FinancialsReportModule} from "./financials-report/financials-report.module";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,

    MatExpansionModule,

    FinancialsReportModule,
  ],
  declarations: [CreditReportComponent],
  exports: [CreditReportComponent]
})
export class CreditReportModule {
}
