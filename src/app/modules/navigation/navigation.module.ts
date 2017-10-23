import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';

import {NavigationComponent} from './navigation.component';

import {AboutModule} from '../about/about.module';
import {DashboardModule} from '../dashboard/dashboard.module';
import {LoginModule} from '../login/login.module';
import {LogoutModule} from '../logout/logout.module';
import {MarketingModule} from '../marketing/marketing.module';
import {NavigationRoutingModule} from './navigation-routing.module';

import {AuthenticationService} from '../../authentication.service';

@NgModule({
  imports: [
    CommonModule, HttpClientModule,

    MatButtonModule, MatIconModule, MatToolbarModule,

    AboutModule,
    DashboardModule,
    LoginModule,
    LogoutModule,
    MarketingModule,

    NavigationRoutingModule,
  ],
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
  providers: [AuthenticationService],
})
export class NavigationModule {
}
