import {NgModule} from '@angular/core';
import {Response, ResponseOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {FakeData} from './fake-data';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpTestModule} from '../../testing/mock.modules.spec';

@NgModule({
  imports: [
    HttpTestModule,
    HttpClientTestingModule,
  ],
  providers: [FakeData],
})
export class FakeBackendModule {
  constructor(private backend: MockBackend, private data: FakeData) {
    this.backend.connections.subscribe(c => {
      console.log('backend: request = ' + JSON.stringify(c.request));
      if (c.request.url.startsWith('api/companies')) {
        const exec = /\?name=([^?=&]+)/.exec(c.request.url);
        if (exec && exec[1]) {
          const response = new Response(new ResponseOptions({
            status: 200,
            body: data.names().filter(company => company.name.toLowerCase().startsWith(exec[1].toLowerCase()))
          }));
          console.log('backend: response = ' + JSON.stringify(response));
          c.mockRespond(response);
        }
      } else if (c.request.url.startsWith('api/profiles')) {
        const exec = /\?name=([^?=&]+)/.exec(c.request.url);
        if (exec && exec[1]) {
          const response = new Response(new ResponseOptions({
            status: 200,
            body: data.getProfile(exec[1])
          }));
          console.log('backend: response = ' + JSON.stringify(response));
          c.mockRespond(response);
        }
      }
    });
  }
}
