import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MarketingComponent} from './marketing/marketing.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {NavigationComponent} from './navigation/navigation.component';
import {SignUpComponent} from './sign-up/sign-up.component';

import {RoutingModule} from './routing/routing.module';
import {MaterialDesignModule} from './material-design/material-design.module';

import {AuthenticationService} from './authentication.service';
import {UserService} from './user.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DashboardComponent,
    MarketingComponent,
    LoginComponent,
    LogoutComponent,
    NavigationComponent,
    SignUpComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RoutingModule,
    MaterialDesignModule,
  ],
  providers: [AuthenticationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
