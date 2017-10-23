import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material';

import {FooterComponent} from './footer.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {
}
