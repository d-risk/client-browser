import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';

import {SearchBarComponent} from './search-bar.component';
import {CreditRatingModule} from "../../../credit-rating/credit-rating.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,

    CreditRatingModule,
  ],
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent],
})
export class SearchBarModule {
}
