import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';

import {NavigationComponent} from './navigation.component';

import {AboutModule} from '../about/about.module';
import {DashboardModule} from '../dashboard/dashboard.module';
import {LoginModule} from '../login/login.module';
import {MarketingModule} from '../marketing/marketing.module';
import {NavigationRoutingModule} from './navigation-routing.module';
import {AuthenticationModule} from '../../authentication/authentication.module';

@NgModule({
  imports: [
    CommonModule,

    MatButtonModule, MatIconModule, MatToolbarModule,

    AboutModule,
    DashboardModule,
    LoginModule,
    MarketingModule,

    AuthenticationModule,
    NavigationRoutingModule,
  ],
  declarations: [NavigationComponent],
  exports: [NavigationComponent]
})
export class NavigationModule {
}
