import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule, MatTableModule} from "@angular/material";

import {RiskDriverComponent} from './risk-driver.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,

    MatCardModule,
    MatTableModule,
  ],
  declarations: [RiskDriverComponent],
  exports: [RiskDriverComponent],
})
export class RiskDriverModule {
}
