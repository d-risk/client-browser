import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {NavigationModule} from './modules/navigation/navigation.module';
import {FooterModule} from './modules/footer/footer.module';
import {PageNotFoundModule} from './modules/page-not-found/page-not-found.module';
import {ConfigurationModule} from './configuration/configuration.module';

@NgModule({
  imports: [
    BrowserModule,

    FooterModule,
    NavigationModule,
    PageNotFoundModule,

    AppRoutingModule,

    ConfigurationModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
