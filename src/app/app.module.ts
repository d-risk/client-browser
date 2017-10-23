import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AboutComponent} from './components/about/about.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {FooterComponent} from './components/footer/footer.component';
import {MarketingComponent} from './components/marketing/marketing.component';
import {LoginComponent} from './components/login/login.component';
import {LogoutComponent} from './components/logout/logout.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';

import {RoutingModule} from './routing/routing.module';
import {MaterialDesignModule} from './material-design/material-design.module';

import {AuthenticationService} from './authentication.service';
import {UserService} from './user.service';

@NgModule({
  declarations: [
    AppComponent,

    AboutComponent,
    DashboardComponent,
    FooterComponent,
    MarketingComponent,
    LoginComponent,
    LogoutComponent,
    NavigationComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,

    RoutingModule,
    MaterialDesignModule,
  ],
  providers: [
    AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
