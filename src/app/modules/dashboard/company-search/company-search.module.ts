import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';

import {CompanyNameSearchComponent} from './company-search.component';
import {CompanyNameSearchService} from './company-name-search.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    MatAutocompleteModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  declarations: [CompanyNameSearchComponent],
  exports: [CompanyNameSearchComponent],
  providers: [CompanyNameSearchService],
})
export class CompanyNameSearchModule {
}
