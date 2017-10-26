import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material';

import {DashboardComponent} from './dashboard.component';
import {CompanyNameSearchModule} from './company-search/company-name-search.module';
import {CompanyReportSearchModule} from './company-report/company-report-search.module';

@NgModule({
  imports: [
    CommonModule,

    MatCardModule,

    CompanyNameSearchModule,
    CompanyReportSearchModule,
  ],
  declarations: [DashboardComponent],
})
export class DashboardModule {
}
