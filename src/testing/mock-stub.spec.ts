import {AuthenticationService} from '../app/authentication/authentication.service';
import {Component} from '@angular/core';
import {CompanyService} from '../app/modules/dashboard/search/company.service';
import {ProfileService} from '../app/modules/dashboard/search/profile.service';
import {AppConfig} from '../app/configuration/app.config';
import {Auth0Factory} from '../app/authentication/auth0.factory';

export function createMockAuthenticationService(): AuthenticationService {
  return jasmine.createSpyObj<AuthenticationService>(
    'authenticationService',
    ['login', 'logout', 'isAuthenticated', 'handleAuthentication', 'user']
  );
}

export function createMockCompanyService(): CompanyService {
  return jasmine.createSpyObj<CompanyService>('companyService', ['search']);
}

export function createMockProfileService(): ProfileService {
  return jasmine.createSpyObj<ProfileService>('profileService', ['search']);
}

export function createMockAppConfig(): AppConfig {
  return jasmine.createSpyObj('config', ['get']);
}

export function createMockAuth0Factory(): Auth0Factory {
  return jasmine.createSpyObj('factory', ['auth0']);
}

export class FakeComponent {
}

export function createMockComponent(options: Component): Component {
  const metadata: Component = {
    selector: options.selector,
    template: '',
  };
  return Component(metadata)(class MockComponent {
  });
}
