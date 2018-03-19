import {NgModule} from '@angular/core';
import {NgxChartsModule} from "@swimlane/ngx-charts";

import {FinancialsReportComponent} from './financials-report.component';
import {FinancialsModule} from "./financials/financials.module";
import {RiskDriverModule} from "./risk-driver/risk-driver.module";

@NgModule({
  imports: [
    NgxChartsModule,

    FinancialsModule,
    RiskDriverModule,
  ],
  declarations: [FinancialsReportComponent],
  exports: [FinancialsReportComponent]
})
export class FinancialsReportModule {
}
