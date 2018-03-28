import {NgModule} from '@angular/core';

import {FinancialsReportComponent} from './financials-report.component';
import {FinancialsModule} from "./financials/financials.module";
import {RiskDriverModule} from "./risk-driver/risk-driver.module";
import {ChartsModule} from "./charts/charts.module";

@NgModule({
  imports: [
    FinancialsModule,
    RiskDriverModule,
    ChartsModule,
  ],
  declarations: [FinancialsReportComponent],
  exports: [FinancialsReportComponent]
})
export class FinancialsReportModule {
}
