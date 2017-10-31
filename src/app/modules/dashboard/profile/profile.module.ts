import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatTabsModule} from '@angular/material';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {ProfileComponent} from './profile.component';
import {ProfileSearchService} from '../company-search/profile-search.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,

    MatCardModule,
    MatTabsModule,

    NgxChartsModule,
  ],
  declarations: [ProfileComponent],
  exports: [ProfileComponent],
  providers: [ProfileSearchService],
})
export class CompanyReportModule {
}
