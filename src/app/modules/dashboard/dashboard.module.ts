import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material';

import {DashboardComponent} from './dashboard.component';
import {SearchModule} from './search/search.module';
import {ProfileModule} from './profile/profile.module';

@NgModule({
  imports: [
    CommonModule,

    MatCardModule,

    SearchModule,
    ProfileModule,
  ],
  declarations: [DashboardComponent],
})
export class DashboardModule {
}
