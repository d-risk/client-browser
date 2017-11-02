import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material';

import {LoginComponent} from './login.component';
import {LoginRoutingModule} from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,

    MatProgressSpinnerModule,

    LoginRoutingModule,
  ],
  declarations: [LoginComponent]
})
export class LoginModule {
}
