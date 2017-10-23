import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule
} from '@angular/material';

import {LoginComponent} from './login.component';

import {LoginRoutingModule} from './login-routing.module';
import {ResetPasswordModule} from '../reset-password/reset-password.module';
import {SignUpModule} from '../sign-up/sign-up.module';

import {AuthenticationService} from '../../authentication.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,

    ResetPasswordModule,
    SignUpModule,

    LoginRoutingModule,
  ],
  declarations: [LoginComponent],
  providers: [AuthenticationService],
})
export class LoginModule {
}
