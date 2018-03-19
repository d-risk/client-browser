import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatExpansionModule, MatTableModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {FinancialsComponent} from './financials.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,

    MatExpansionModule,
    MatTableModule,
  ],
  declarations: [FinancialsComponent],
  exports: [FinancialsComponent],
})
export class FinancialsModule {
}
