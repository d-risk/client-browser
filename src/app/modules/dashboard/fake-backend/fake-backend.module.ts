import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseRequestOptions, Http} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    BaseRequestOptions,
    MockBackend,
    {
      provide: Http,
      deps: [MockBackend, BaseRequestOptions],
      useFactory: (backend, options) => new Http(backend, options)
    },
  ],
})
export class FakeBackendModule {
}
