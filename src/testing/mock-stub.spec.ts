import {AuthenticationService} from '../app/services/authentication.service';
import {Component} from '@angular/core';
import {CompanyNameSearchService} from '../app/modules/dashboard/company-search/company-name-search.service';
import {CompanyProfileSearchService} from '../app/modules/dashboard/company-search/company-profile-search.service';

export function createMockAuthenticationService(): AuthenticationService {
  return jasmine.createSpyObj<AuthenticationService>('authenticationService', ['login', 'logout', 'isAuthenticated']);
}

export function createMockCompanyNameSearchService(): CompanyNameSearchService {
  return jasmine.createSpyObj<CompanyNameSearchService>('companyNameSearchService', ['search']);
}

export function createMockCompanyReportSearchService(): CompanyProfileSearchService {
  return jasmine.createSpyObj<CompanyProfileSearchService>('companyReportSearchService', ['search']);
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
