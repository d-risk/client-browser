import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatExpansionModule, MatTableModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxChartsModule} from "@swimlane/ngx-charts";

import {FinancialsReportComponent} from './financials-report.component';
import {FinancialsModule} from "./financials/financials.module";
import {RiskDriverModule} from "./risk-driver/risk-driver.module";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,

    MatExpansionModule,
    MatTableModule,

    NgxChartsModule,

    FinancialsModule,
    RiskDriverModule,
  ],
  declarations: [FinancialsReportComponent],
  exports: [FinancialsReportComponent]
})
export class FinancialsReportModule {
}
