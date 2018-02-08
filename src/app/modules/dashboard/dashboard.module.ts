import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material';

import {DashboardComponent} from './dashboard.component';
import {SearchBarModule} from './search-bar/search-bar.module';
import {CreditReportModule} from './credit-report/credit-report.module';

@NgModule({
  imports: [
    CommonModule,

    MatCardModule,

    SearchBarModule,
    CreditReportModule,
  ],
  declarations: [DashboardComponent],
})
export class DashboardModule {
}
