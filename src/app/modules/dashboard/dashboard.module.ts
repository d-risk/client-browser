import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material';

import {DashboardComponent} from './dashboard.component';
import {CompanyNameSearchModule} from './company-search/company-name-search.module';
import {CompanyReportModule} from './company-report/company-report.module';

@NgModule({
  imports: [
    CommonModule,

    MatCardModule,

    CompanyNameSearchModule,
    CompanyReportModule,
  ],
  declarations: [DashboardComponent],
})
export class DashboardModule {
}
