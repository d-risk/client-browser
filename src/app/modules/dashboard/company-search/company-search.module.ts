import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';

import {CompanySearchComponent} from './company-search.component';
import {CompanyNameSearchService} from './company-name-search.service';
import {CompanyReportSearchService} from './company-report-search.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  declarations: [CompanySearchComponent],
  exports: [CompanySearchComponent],
  providers: [CompanyNameSearchService, CompanyReportSearchService],
})
export class CompanySearchModule {
}
