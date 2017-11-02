import {NgModule} from '@angular/core';

import {AuthenticationService} from './authentication.service';
import {Auth0Factory} from './auth0.factory';
import {ConfigurationModule} from '../configuration/configuration.module';

@NgModule({
  imports: [ConfigurationModule],
  providers: [
    AuthenticationService,
    Auth0Factory,
  ]
})
export class AuthenticationModule {
}
