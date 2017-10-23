import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material';

import {LogoutComponent} from './logout.component';

@NgModule({
  imports: [
    CommonModule,

    MatCardModule,
  ],
  declarations: [LogoutComponent]
})
export class LogoutModule {
}
