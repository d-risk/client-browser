// import {AuthenticationService} from '../app/authentication/authentication.service';
// import {Component} from '@angular/core';
// import {AppConfig} from '../app/configuration/app.config';
// import {Auth0Factory} from '../app/authentication/auth0.factory';
// import {CreditRatingService} from "../app/credit-rating/credit-rating.service";
//
// export function createMockAuthenticationService(): AuthenticationService {
//   return jasmine.createSpyObj<AuthenticationService>(
//     'authenticationService',
//     ['login', 'logout', 'isAuthenticated', 'handleAuthentication', 'user']
//   );
// }
//
// export function createMockCompanyService(): CreditRatingService {
//   return jasmine.createSpyObj<CreditRatingService>('companyService', ['search']);
// }
//
// export function createMockProfileService(): CreditRatingService {
//   return jasmine.createSpyObj<CreditRatingService>('profileService', ['search']);
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
