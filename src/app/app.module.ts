import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';
import {LogInComponent} from './log-in/log-in.component';
import {LogOutComponent} from './log-out/log-out.component';
import {NavigationComponent} from './navigation/navigation.component';
import {SignUpComponent} from './sign-up/sign-up.component';

import {RoutingModule} from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DashboardComponent,
    HomeComponent,
    LogInComponent,
    LogOutComponent,
    NavigationComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
