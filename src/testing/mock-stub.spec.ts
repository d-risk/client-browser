// import {AuthenticationService} from '../app/authentication/authentication.service';
// import {Component} from '@angular/core';
// import {AppConfig} from '../app/configuration/app.config';
// import {Auth0Factory} from '../app/authentication/auth0.factory';
// import {CreditReportService} from "../app/credit-rating/credit-rating.service";
//
// export function createMockAuthenticationService(): AuthenticationService {
//   return jasmine.createSpyObj<AuthenticationService>(
//     'authenticationService',
//     ['login', 'logout', 'isAuthenticated', 'handleAuthentication', 'user']
//   );
// }
//
// export function createMockCompanyService(): CreditReportService {
//   return jasmine.createSpyObj<CreditReportService>('companyService', ['search']);
// }
//
// export function createMockProfileService(): CreditReportService {
//   return jasmine.createSpyObj<CreditReportService>('profileService', ['search']);
// }
//
// export function createMockAppConfig(): AppConfig {
//   return jasmine.createSpyObj('config', ['get']);
// }
//
//
// export class FakeComponent {
// }
// //
// // export function createMockComponent(options: Component): Component {
// //   const metadata: Component = {
// //     selector: options.selector,
// //     template: '',
// //   };
// //   return Component(metadata)(class MockComponent {
// //   });
// // }
