import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatTabsModule} from '@angular/material';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {CompanyReportComponent} from './company-report.component';
import {CompanyProfileSearchService} from '../company-search/company-profile-search.service';

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
  providers: [CompanyProfileSearchService],
})
export class CompanyReportModule {
}
