import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatExpansionModule, MatTabsModule} from '@angular/material';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {CreditReportComponent} from './credit-report.component';
import {RiskDriverModule} from "./risk-driver/risk-driver.module";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,

    MatCardModule,
    MatExpansionModule,
    MatTabsModule,

    NgxChartsModule,

    RiskDriverModule,
  ],
  declarations: [CreditReportComponent],
  exports: [CreditReportComponent]
})
export class CreditReportModule {
}
