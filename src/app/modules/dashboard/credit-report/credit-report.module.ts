import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatTabsModule} from '@angular/material';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {CreditReportComponent} from './credit-report.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,

    MatCardModule,
    MatTabsModule,

    NgxChartsModule,
  ],
  declarations: [CreditReportComponent],
  exports: [CreditReportComponent]
})
export class CreditReportModule {
}
