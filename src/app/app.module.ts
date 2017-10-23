import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {NavigationModule} from './components/navigation/navigation.module';
import {FooterModule} from './components/footer/footer.module';
import {PageNotFoundModule} from './modules/page-not-found/page-not-found.module';

@NgModule({
  imports: [
    BrowserModule,

    FooterModule,
    NavigationModule,
    PageNotFoundModule,

    AppRoutingModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
