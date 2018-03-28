import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatExpansionModule, MatTabsModule} from "@angular/material";
import {NgxChartsModule} from "@swimlane/ngx-charts";

import {ChartsComponent} from './charts.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,

    MatExpansionModule,
    MatTabsModule,

    NgxChartsModule,
  ],
  declarations: [ChartsComponent],
  exports: [ChartsComponent],
})
export class ChartsModule {
}
