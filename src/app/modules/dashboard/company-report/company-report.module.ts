import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatTabsModule} from '@angular/material';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {CompanyReportComponent} from './company-report.component';
import {CompanyReportSearchService} from '../company-search/company-report-search.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,

    MatCardModule,
    MatTabsModule,

    NgxChartsModule,
  ],
  declarations: [CompanyReportComponent],
  exports: [CompanyReportComponent],
  providers: [CompanyReportSearchService],
})
export class CompanyReportModule {
}
