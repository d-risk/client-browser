import {AuthenticationService} from '../app/services/authentication.service';
import {Component} from '@angular/core';
import {CompanyService} from '../app/modules/dashboard/search/company.service';
import {ProfileService} from '../app/modules/dashboard/search/profile.service';

export function createMockAuthenticationService(): AuthenticationService {
  return jasmine.createSpyObj<AuthenticationService>('authenticationService', ['login', 'logout', 'isAuthenticated']);
}

export function createMockCompanyService(): CompanyService {
  return jasmine.createSpyObj<CompanyService>('companyNameSearchService', ['search']);
}

export function createMockProfileService(): ProfileService {
  return jasmine.createSpyObj<ProfileService>('companyReportSearchService', ['search']);
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
