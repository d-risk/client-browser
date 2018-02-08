// import {NgModule} from '@angular/core';
// import {BaseRequestOptions, Http} from '@angular/http';
// import {MockBackend} from '@angular/http/testing';
//
// export function httpFactory(backend: MockBackend, options: BaseRequestOptions) {
//   return new Http(backend, options);
// }
//
// @NgModule({
//   providers: [
//     BaseRequestOptions,
//     MockBackend,
//     {
//       provide: Http,
//       deps: [MockBackend, BaseRequestOptions],
//       useFactory: httpFactory
//     },
//   ],
// })
// export class HttpTestModule {
// }
