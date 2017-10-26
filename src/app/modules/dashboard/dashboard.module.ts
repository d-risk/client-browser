import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material';

import {DashboardComponent} from './dashboard.component';
import {CompanySearchModule} from './company-search/company-search.module';
import {CompanyReportModule} from './company-report/company-report.module';

@NgModule({
  imports: [
    CommonModule,

    MatCardModule,

    CompanySearchModule,
    CompanyReportModule,
  ],
  declarations: [DashboardComponent],
})
export class DashboardModule {
}
